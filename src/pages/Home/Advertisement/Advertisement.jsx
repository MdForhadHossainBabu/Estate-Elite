import { useEffect, useState } from "react";
import CardInfoH from "./CardInfoH";




const Advertisement = () => {
 const [cards, setCards] = useState([]);
//  console.log(cards);
 useEffect(() => {
  fetch(`http://localhost:5000/advertisement`)
    .then(res => res.json())
    .then(data => setCards(data));
 }, [])

 return (
   <div className="dark:text-white text-black">
     <h2 className="text-center font-bold text-rose-500">
       -- Service of Advertisement --
     </h2>
     <h2 className="text-3xl font-bold font-poppins text-center text-balance uppercase text-amber-700">
       Advertisement
     </h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center px-4 my-4">
       {cards.map(item => (
         <CardInfoH key={item._id} cardInfo={item} />
       ))}
     </div>
   </div>
 );
};

export default Advertisement;