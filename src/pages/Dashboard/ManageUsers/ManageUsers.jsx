
import { useQuery } from '@tanstack/react-query';
import SectionTitle from './../../../Shared/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaTrashAlt, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageUsers = () => {
 const axiosSecure = useAxiosSecure();
 const { data:users=[], refetch } = useQuery({
  queryKey: ['users'],
  queryFn: async () => {
   const res = await axiosSecure.get('/users');
   return res.data;
  }
})
 // console.log(users);
 
 // handleAgent
 const handleAgent = user => {
  axiosSecure.patch(`/users/agent/${user._id}`).then((res) => {
   if (res.data.modifiedCount > 0) {
     refetch()
      // TODO: set swal
      console.log('success');
    }
  });
 }
 const handleAdmin = user => {
  axiosSecure.patch(`/users/admin/${user._id}`)
   .then(res => {
    if (res.data.modifiedCount > 0) {
     refetch()
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `${user.name} is currently admin now`,
    showConfirmButton: false,
    timer: 1500,
  });

    }
  })
 }
 const handleDelete = user => {
  console.log(user);
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
     axiosSecure.delete(`/users/${user._id}`).then((res) => {
       console.log(res.data);
        if (res.data.deletedCount) {
         refetch();
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          });
        }
      });
    }
  });
 }

 return (
   <div className="border-4 my-10 mx-6">
     <SectionTitle heading="Manage All Users" subHeading="How Many!!" />
     <h1 className="text-xl font-bold font-fira uppercase mt-12">
       Total Users : {users.length}
     </h1>
     <div>
       {/* users table */}
       <div className="overflow-x-auto">
         <table className="table">
           {/* head */}
           <thead className="border-2 ">
             <tr>
               <th className="uppercase font-bold font-fira">#</th>
               <th className="uppercase font-bold font-fira">Name</th>
               <th className="uppercase font-bold font-fira">Email</th>
               <th className="uppercase font-bold font-fira">agent</th>
               <th className="uppercase font-bold font-fira">admin</th>
               <th className="uppercase font-bold font-fira">action</th>
             </tr>
           </thead>
           <tbody>
             {/* row 1 */}
             {users.map((item, index) => (
               <tr key={item.email}>
                 <th>{++index}</th>
                 <td className="font-bold font-fira">{item.name}</td>
                 <td className="font-bold font-fira">{item.email}</td>
                 <td className="font-bold font-fira">
                   {item.role === 'agent' ? (
                     <button className="btn font-bold font-fira">Agent</button>
                   ) : (
                     <button
                       onClick={() => handleAgent(item)}
                       className="btn text-xl text-red-600"
                     >
                       <FaUser/>
                     </button>
                   )}
                 </td>
                 <th>
                   {item.role === 'admin' ? (
                     <button className={`btn font-extrabold font-fira ${item.role === 'admin' && ' bg-green-500 text-white '}`}>Admin</button>
                   ) : (
                     <button
                       onClick={() => handleAdmin(item)}
                       className="btn text-xl"
                     >
                       <FaUser />
                     </button>
                   )}
                 </th>
                 <th>
                   <button
                     onClick={() => handleDelete(item)}
                     className="btn text-xl"
                   >
                     <FaTrashAlt />
                   </button>
                 </th>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     </div>
   </div>
 );
};

export default ManageUsers;