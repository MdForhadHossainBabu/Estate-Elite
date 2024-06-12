import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AdminProfile = () => {
 const axiosSecure = useAxiosSecure();

 const  { data: adminProfile } = useQuery({
  queryKey: ['admin-profile'],
  queryFn: async () => {
   const res = await axiosSecure.get('/users')
   return res.data
  }
 })
 console.log(adminProfile);

 return (
  <div className="max-w-screen-sm mx-auto my-12 space-y-12">
   
     {adminProfile.map((item) => (
       <div key={item.role}>
         {item.role === 'admin' && (
           <div>
         <div className=" h-32 bg-orange-500 rounded-[100%] relative">
          <h1 className="text-3xl font-bold font-fira text-white px-[30%] pt-4">{item.name}</h1>
               <h1 className="absolute top-16 font-fira text-white left-44 font-bold text-xl">
                 {item.email}
                 <p className="text-sm font-bold absolute right-20 flex items-center gap-2">
                   Profile Role :<span className="underline font-extrabold font-fira uppercase"> {item.role}</span>
                 </p>
               </h1>
             </div>
           </div>
         )}
       </div>
     ))}
   </div>
 );
};

export default AdminProfile;