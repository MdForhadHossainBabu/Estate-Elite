import { Link } from "react-router-dom";


const CardInfoH = ({ cardInfo }) => {
 console.log(cardInfo);
 const {property_image, property_location, verification_status, price_range, id} = cardInfo;
 return (
   <Link to={`/wishlist/${id}`}>
     <div className="border rounded-lg">
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