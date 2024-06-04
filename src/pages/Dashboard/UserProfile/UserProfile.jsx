import { useState } from "react";
import SectionTitle from './../../../Shared/SectionTitle/SectionTitle';
import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";


const UserProfile = () => {
 const [open, setOpen] = useState(true);
 const [cart, refetch] = useCart();
console.log(cart);
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
         <h1 className={`${open && 'border-red-500'} border-2 text-center`}>
           CART
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
                     <td>{item.agent_name}</td>
                   <td>{item.price_range}</td>
                     <th>
                       <button className="btn bg-red-500 text-lg text-white">
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