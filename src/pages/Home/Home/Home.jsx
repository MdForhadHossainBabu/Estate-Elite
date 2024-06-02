import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Advertisement from "../Advertisement/Advertisement";
import Review from "../../LatestUserReview/Review";


const Home = () => {
 return (
   <div>
     <Helmet>
       <title>Estate Elite | Home</title>
     </Helmet>
   <Banner />
   <Advertisement />
   <Review/>
   </div>
 );
};

export default Home;