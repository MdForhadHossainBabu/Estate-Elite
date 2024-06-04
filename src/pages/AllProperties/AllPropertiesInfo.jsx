import { Link } from "react-router-dom";


const AllPropertiesInfo = ({properties}) => {
 console.log(properties);
 const {
   agent_name,
   price_range,
   property_location,
   property_title,
   verification_status,
   _id,
   property_image,
 } = properties;
 return (
   <div className="border-2 p-2 bg-slate-200 rounded-lg drop-shadow-2xl shadow-2xl space-y-3 py-4">
     <figure>
       <img
         className="rounded-lg"
         src={
           'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' ||
           property_image
         }
         alt="photo"
       />
     </figure>
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
   <div className="justify-end flex">
    <Link to={`/details/${_id}`}>
     <button className="rounded-md px-6 py-1 font-bold bg-rose-500 text-white">
     Details 
     </button></Link>
   </div>
   </div>
 );
};

export default AllPropertiesInfo;