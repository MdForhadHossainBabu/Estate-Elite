import { useEffect, useState } from "react";
import ReviewInfo from "./ReviewInfo";

const Review = () => {
 const [cards, setCards] = useState([]);
//  console.log(cards);
 useEffect(() => {
   fetch(`${import.meta.env.VITE_API_URL}/review`)
     .then(res => res.json())
     .then(data => setCards(data));
 }, []);
 return (
   <>
     <div className="dark:text-white dark:bg-slate-900">
       <h1 className="text-center font-space text-4xl drop-shadow-2xl shadow-2xl font-bold text-orange-500">
         Latest User Review
       </h1>
       <p className="text-center pt-4 text-balance font-fira lg:mx-32 mx-3 px-3">
         As a discerning homebuyer, I was thoroughly impressed with the
         selection of properties featured in the estate elite wishlist. Each
         estate boasts expansive grounds, breathtaking views, and luxurious
         amenities that surpass all expectations
       </p>
     </div>
     <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center my-6">
       {cards.map((item) => (
         <ReviewInfo key={item._id} reviewInfo={item} />
       ))}
     </div>
   </>
 );
};

export default Review;