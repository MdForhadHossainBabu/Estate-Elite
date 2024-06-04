import { useEffect, useState } from "react";
import ReviewInfo from "./ReviewInfo";

const Review = () => {
 const [cards, setCards] = useState([]);
//  console.log(cards);
 useEffect(() => {
   fetch('review.json')
     .then(res => res.json())
     .then(data => setCards(data));
 }, []);
 return (
   <>
     <div>
       <h1 className="text-center font-space text-2xl drop-shadow-2xl shadow-2xl font-bold text-orange-500">
         Latest User Review
       </h1>
     </div>
     <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center my-6">
       {cards.map(item => (
         <ReviewInfo key={item.id} reviewInfo={item} />
       ))}
     </div>
   </>
 );
};

export default Review;