import { useState } from "react";
import SectionTitle from './../../../Shared/SectionTitle/SectionTitle';
import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const UserProfile = () => {
 const [open, setOpen] = useState(true);
 const [cart, refetch] = useCart();
//  console.log(cart);
 const axiosSecure = useAxiosSecure();
 const handleDelete = id => {

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then(result => {
   if (result.isConfirmed) {
     axiosSecure.delete(`/properties/${id}`).then(res => {
       if (res.data.deletedCount) {
         Swal.fire({
           title: 'Deleted!',
           text: 'Your file has been deleted.',
           icon: 'success',
         });
      }
      refetch()
     });
  
      
    }
  });
 }
 return (
   <div>
     <div className="flex items-center gap-12 mt-12">
       <div onClick={() => setOpen(!open)} className="w-1/2">
         {/* profile bar*/}
         <h1 className={`${!open && 'border-red-500'} border-2 text-center`}>
           MY PROFILE
         </h1>
       </div>
       <div onClick={() => setOpen(!open)} className="w-1/2">
         {/* cart item bar */}
         <h1
           className={`${
             open && 'border-red-500'
           } border-2 text-center relative`}
         >
           CART{' '}
           {cart.length > 0 && (
             <span className="border-2 absolute -top-2  w-6 rounded-full h-6  bg-red-500 font-bold text-white ">
               {cart.length}
             </span>
           )}
         </h1>
       </div>
     </div>
     {/* profile section */}
     {open ? (
       <div className="border-2 my-6">
         <SectionTitle subHeading="My cart" />
         <h1 className="text-center font-extrabold text-4xl font-nunito">
           My Cart
         </h1>
         <div
           className="flex items-center justify-around mt-6
         "
         >
           <div>
             <h1 className="text-2xl font-bold font-space uppercase">
               items : {cart.length}
             </h1>
           </div>
           <div>
             <h1 className="text-2xl font-bold font-space uppercase">
               total price : {}
             </h1>
           </div>
           <div>
             <button className="border-2 px-6 py-1 rounded text-2xl font-bold uppercase font-space text-white bg-green-500">
               pay
             </button>
           </div>
         </div>
         {/* tabular format */}
         <div>
           <div className="overflow-x-auto">
             <table className="table">
               {/* head */}
               <thead>
                 <tr>
                   <th>No.</th>
                   <th>Image</th>
                   <th>Name</th>
                   <th>Price</th>
                   <th>Action</th>
                 </tr>
               </thead>
               <tbody>
                 {/* row 1 */}
                 {cart.map((item, index) => (
                   <tr key={item._id}>
                     <th>{++index}</th>
                     <td>
                       <img src={item.image} className="size-10 p-1 border-2 border-red-400 rounded-full" alt="" />
                     </td>
                     <td>{item.name}</td>
                     <td>{item.price_range}</td>
                     <th>
                       <button
                         onClick={() => handleDelete(item._id)}
                         className="btn bg-red-500 text-lg text-white"
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
     ) : (
       <div className="border-2 mt-6">profile section</div>
     )}
   </div>
 );
};

export default UserProfile;