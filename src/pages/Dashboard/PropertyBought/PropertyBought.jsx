import { Helmet } from "react-helmet-async";
import useBought from "../../../hooks/useBought";


const PropertyBought = () => {
 const [cart] = useBought();
//  console.log(cart);
 return (
   <div className=" dark:bg-slate-900 my-4 py-2">
     <Helmet>
       <title>
         Estate Elite | Dashboard | Property Buy
       </title>
     </Helmet>
     <h1 className="text-center font-bold font-poppins uppercase text-rose-500 text-4xl my-4">
       Property Bought
     </h1>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {cart.map((item) => (
         <div key={item._id}>
           <div className="card shadow-xl dark:bg-slate-800">
             <figure>
               <img
                 className="w-full h-64 border-2 dark:border-red-600 rounded-xl"
                 src={item.property_image}
                 alt="Shoes"
               />
             </figure>
             <div className="flex items-center justify-around my-2">
               <h1 className={`text-red-500 font-fira font-bold ${item.agent_name == item.agent_name && 'text-green-400'}`}>
                 {item.agent_name || 'Unknown'}
               </h1>
               <span>
                 <small
                   className={`border rounded-xl shadow-2xl px-4 dark: ${
                     item.verification_status === 'Pending' && 'text-orange-500'
                   } ${
                     item.verification_status === 'Rejected' && 'text-red-500'
                   } 
                   ${
                     item.verification_status === 'Verified' && 'text-green-500'
                   }`}
                 >
                   {item.verification_status}
                 </small>
               </span>
             </div>
             <div className="card-body">
               <div className="flex items-center ">
                 <span className="text-sm">Title : </span>
                 <h2
                   title={item.property_title}
                   className="card-title text-sm ml-2"
                 >
                   {item.property_title.substring(0, 30)}
                 </h2>
               </div>
               <p className="text-sm font-bold font-mono">Price : ${item.price_range}</p>
               <p className="text-sm font-bold font-mono">
                 Location : {item.property_location}
               </p>
               <div className="card-actions justify-end">
                 <button className="border-2 px-6 py-1 border-rose-400 rounded-md font-bold bg-rose-500 text-white">Buy Now</button>
               </div>
             </div>
           </div>
         </div>
       ))}
     </div>
   </div>
 );
};

export default PropertyBought;