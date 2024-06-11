// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import useBought from '../../../hooks/useBought';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useState } from 'react';

const MyReviews = () => {
 const axiosPublic = useAxiosPublic();
 const [review, setReview] = useState(null)
  const { register, handleSubmit  } = useForm();
 const onSubmit = data => {
  setReview(data) 
  axiosPublic.post('/description', data).then((res) => {
    console.log(res.data);
  });
  };
 console.log(review);

 
 const [cart] = useBought();
 // console.log(cart);
 const date = new Date().toLocaleTimeString();
 // console.log(date);
 return (
   <div className="border-2 font-fira border-rose-500 my-12 max-w-screen-sm mx-auto">
     <span className='w-3/4 mx-auto px-4 pt-4'>Description :{review && <span>{review.description}</span>}</span>
     {cart.slice(0, 1).map((item) => (
       <div key={item._id}>
         <div>
           <span className="font-bold text-3xl flex justify-center mt-4 font-fira">
             {item.agent_name}
           </span>
           <span className="font-fira text-balance flex justify-center">
             Review Time : {date}
           </span>
           <div className="font-bold flex justify-center text-balance font-fira">
             {item.property_title}
           </div>
         </div>
         <div className="flex flex-col items-center mx-24 my-4">
           <Rating style={{ maxWidth: 180 }} value={4} readOnly />
         </div>
         {/* description */}
         {!review && <form onSubmit={handleSubmit(onSubmit)}>
           <textarea
             {...register('description')}
             placeholder="Description write me!"
             className="border-2 w-3/4 py-2 mx-auto h-24 border-black outline-none px-2 justify-center flex mb-2 rounded-md "
             id=""
           ></textarea>
           <div className="flex flex-col items-center">
             <button className="btn btn-outline btn-warning my-3">
               Save Me!
             </button>
           </div>
         </form>}
       </div>
     ))}
   </div>
 );
};

export default MyReviews;
