import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import './Info.css'
import 'swiper/css';
import 'swiper/css/pagination';
const ReviewInfo = ({ reviewInfo }) => {
  const [rating, setRating] = useState(0);
  const { reviewer_image, reviewer_name, review_description, property_title } =
    reviewInfo;
  return (
    <>
     
        <div className="border-2 p-4 my-4 dark:bg-slate-900 dark:border-yellow-500 bg-slate-200 rounded-lg shadowApply">
          <span className="text-6xl font-space text-rose-500 font-bold">“</span>
          <div className="flex items-center gap-4">
            <div>
              <img
                id="imgStyle"
                className="w-14 h-14 "
                src={
                  reviewer_image
                }
                alt=""
              />
            </div>
            <div>
              {/* rating */}
              <Rating
                style={{ maxWidth: 180 }}
                value={rating}
                onChange={setRating}
                isRequired
              />
            </div>
          </div>
          {/* name */}
          <div className=" text-balance">
            <h1 className="font-bold font-poppins opacity-85">
              {reviewer_name}
            </h1>
            <h2 className="font-bold font-space text-orange-500">
              {property_title}
            </h2>
            <p className="font-mono">{review_description}</p>
          </div>
        </div>
      </>
  
  );
};

export default ReviewInfo;
