import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
import Modal from "../../components/Modal";
 

const Details = () => {
 const properties = useLoaderData();
 const { user } = useAuth();
 const axiosSecure = useAxiosSecure();
const [isOpen, setIsOpen] = useState(false)
  const {
   agent_name,
   price_range,
   property_location,
   property_title,
   verification_status,
   _id,
   property_image,
 } = properties;
 const newAdd = {
   agent_name:agent_name,
   price_range:price_range,
   property_location:property_location,
   property_title:property_title,
   verification_status:verification_status,

   property_image:property_image,
   email: user?.email,
  name: user?.displayName,
   image: user?.photoURL,
 };
 const handleAddItem = () => {
  axiosSecure.post('/properties', newAdd, _id)
   .then(res => {
    console.log(res.data);
    if (res.data.insertedId) {
     Swal.fire({
       position: 'top-end',
       icon: 'success',
       title: 'Added to this Item',
       showConfirmButton: false,
       timer: 1000,
     });
    }
  })
 }
 return (
   <>
     <div className="border-2 p-2 bg-slate-200 rounded-lg drop-shadow-2xl shadow-2xl space-y-3 py-4 w-1/2 mx-auto my-12">
       <div className="bg-transparent">{isOpen ? <Modal /> : ''}</div>
       <figure>
         <img className="rounded-lg" src={property_image} alt="photo" />
       </figure>
       <div className="flex items-center gap-4">
         <h1 className="w-12 h-12">
           {user && (
             <img
               className="border-2 border-red-500 p-[2px] rounded-full "
               src={user?.photoURL}
               alt="user"
             />
           )}
         </h1>
         <h1 className="font-space font-bold opacity-80">
           {user?.displayName}
         </h1>
       </div>
       <div className="flex items-center justify-between px-4">
         <span>
           <small>Price : {price_range}</small>
         </span>
         <span
           className={`${
             verification_status == 'Verified' &&
             'text-green-500 border-b border-green-500'
           } ${
             verification_status == 'Not Verified' &&
             'text-red-500 border-b border-red-500'
           }
         ${
           verification_status == 'pending' &&
           'text-amber-500 border-b border-amber-500'
         }
       py-2`}
         >
           {verification_status}
         </span>
       </div>
       <div>
         <h1 className="text-sm font-mono">Agent Name : {agent_name}</h1>
         <h1 className="text-sm font-mono">{property_location}</h1>
       </div>
       <div>
         <h2>{property_title} </h2>
       </div>
       <div className="justify-end flex gap-4">
         <button
           onClick={() => handleAddItem(_id)}
           className="rounded-md px-6 py-1 font-bold bg-rose-500 text-white uppercase"
         >
           Add Item
         </button>
         <button
           onClick={() => setIsOpen(!isOpen)}
           className="rounded-md px-6 py-1 font-bold bg-rose-500 text-white uppercase"
         >
           {' '}
           Pay Now
         </button>
       </div>
     </div>
   </>
 );
};

export default Details;