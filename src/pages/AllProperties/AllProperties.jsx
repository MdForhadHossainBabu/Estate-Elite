import { useEffect, useState } from "react";
import AllPropertiesInfo from "./AllPropertiesInfo";
import { Helmet } from "react-helmet-async";

const AllProperties = () => {
 const [properties, setProperties] = useState([]);
//  console.log(properties);
 useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/properties`)
    .then((res) => res.json())
    .then((data) => setProperties(data));
 },[])
 return (
   <div className="dark:text-white dark:bg-slate-900">
     <Helmet>
       <title>
         Estate Elite | All Properties
       </title>
     </Helmet>
     <h2 className="text-3xl font-bold text-center uppercase font-space text-rose-500">
       All Properties item{' '}
     </h2>
     <h1 className="text-center text-balance lg:mx-32 my-4 font-bold text-sm font-mono">
       Sure! Here a two-line sentence related to all properties Explore a
       diverse range of properties <br /> from cozy cottages to luxurious villas, all
       meticulously  selected by our agents to <br />  meet your needs and preferences
     </h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
       {properties.map(item => (
         <AllPropertiesInfo key={item._id} properties={item} />
       ))}
     </div>
   </div>
 );
};

export default AllProperties;