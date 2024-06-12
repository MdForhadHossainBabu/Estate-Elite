import { Link } from "react-router-dom";


const CardInfoH = ({ cardInfo }) => {
//  console.log(cardInfo);
  const { property_image, property_location, verification_status, price_range, _id } = cardInfo;
  
 return (
   <Link className="" to={`/cardInfoDetails/${_id}`}>
     <div className="border-2 p-2 bg-slate-200 dark:bg-slate-950 dark:border-yellow-400 rounded-lg drop-shadow-2xl shadow-2xl ">
       <figure>
         <img
           className="rounded-lg w-full h-52"
           src={
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
             verification_status == 'verified' &&
             'text-green-500 border-b border-green-500'
           } ${
             verification_status == 'not verified' &&
             'text-red-500 border-b border-red-500'
           }
         ${
           verification_status == 'pending' &&
           'text-amber-500 border-b border-amber-500'
         }
      `}
         >
           {verification_status}
         </span>
       </div>
       <div className="card-body">
         <h2 className="text-balance">{property_location}</h2>
         <p>If a dog chews shoes whose shoes does he choose?</p>
       </div>
     </div>
   </Link>
 );
};

export default CardInfoH;