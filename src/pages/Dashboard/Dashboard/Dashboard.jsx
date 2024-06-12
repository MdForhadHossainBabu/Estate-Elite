
import { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { FcStatistics } from 'react-icons/fc';
import {  FaArrowLeft,  FaList,  FaSellcast,  FaShopify, FaStar, FaStreetView, FaUser, FaUsers } from 'react-icons/fa';
import {  Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../../hooks/useAdmin';
import { Helmet } from 'react-helmet-async';
const Dashboard = () => {
 const [open, setOpen] = useState(true)
 const [isAdmin] = useAdmin();
//  console.log(isAdmin);
 return (
   <div className="flex gap-2 max-w-screen-xl mx-auto ">
     <Helmet>
       <title>
         Estate Elite | Dashboard
       </title>
     </Helmet>
     <div className="flex items-center flex-col justify-between h-screen bg-gray-800 dark:bg-blue-900 bg-opacity-40 pb-6">
       <div
         className={`${open ? 'w-60' : 'w-24'} duration-500 h-full  relative`}
       >
         <span
           className={`${
             !open && 'rotate-180 text-[10px]'
           } absolute cursor-pointer rounded-full -right-3 top-20 p-1 border-2 border-blue-800 bg-white`}
           onClick={() => setOpen(!open)}
         >
           <FaArrowLeft />
         </span>
         {/* content */}

         {/* first heading */}
         <div className="mt-6">
           <Link to="/">
             <h1
               className={`${
                 open ? 'text-4xl px-4' : 'text-normal'
               } mx-auto font-bold text-center font-poppins duration-700 text-orange-600`}
             >
               Estate<span className="text-rose-500">Elite</span>
             </h1>
           </Link>
           <div className="divider mx-3 divider-info"></div>

           {/* user route */}

           <div className="mt-12 ">
             {/* route 1 */}
             <NavLink
               to="/Dashboard"
               end
               className={({ isActive }) =>
                 isActive ? 'text-white ' : '  text-black'
               }
             >
               <h1
                 className={`font-medium font-mono flex items-center gap-3 px-3 py-2`}
               >
                 <FcStatistics className={`${!open && 'mx-auto text-4xl'}`} />
                 <span className={`${!open && 'hidden'} duration-700`}>
                   Statistics
                 </span>
               </h1>
             </NavLink>
             <NavLink
               to="Dashboard/my-profile"
               end
               className={({ isActive }) =>
                 isActive ? 'text-white ' : '  text-black'
               }
             >
               <h1
                 className={`font-medium font-mono flex items-center gap-3 px-3`}
               >
                 <FaUser className={`${!open && 'mx-auto text-4xl'}`} />
                 <span className={`${!open && 'hidden'} duration-700`}>
                   My Profile
                 </span>
               </h1>
             </NavLink>
             {/* route 2 */}
             <NavLink
               to="Dashboard/wishlist"
               className={({ isActive }) =>
                 isActive ? 'text-white ' : '  text-black'
               }
             >
               <h1
                 className={`font-medium font-mono flex items-center gap-3 px-3`}
               >
                 <FaList
                   className={`${!open && 'mx-auto text-4xl my-6'} ${
                     open && 'my-6'
                   }`}
                 />
                 <span className={`${!open && 'hidden'} duration-700`}>
                   Wishlist
                 </span>
               </h1>
             </NavLink>
             {/* route 3 */}
             <NavLink
               to="Dashboard/property-bought"
               className={({ isActive }) =>
                 isActive ? 'text-white ' : '  text-black'
               }
             >
               <h1
                 className={`font-medium font-mono flex items-center gap-3 px-3`}
               >
                 <FaSellcast className={`${!open && 'mx-auto text-4xl'}`} />
                 <span className={`${!open && 'hidden'} duration-700`}>
                   Property bought
                 </span>
               </h1>
             </NavLink>
             {/* route 4 */}
             <NavLink
               to="Dashboard/my-reviews"
               className={({ isActive }) =>
                 isActive ? 'text-white ' : '  text-black'
               }
             >
               <h1
                 className={` font-medium font-mono flex items-center gap-3 px-3`}
               >
                 <FaStreetView
                   className={`${!open && 'mx-auto text-4xl my-6'} ${
                     open && 'my-6'
                   } `}
                 />
                 <span className={`${!open && 'hidden'} duration-700`}>
                   My reviews
                 </span>
               </h1>
             </NavLink>
           </div>

           {/* agent profile */}
           {!isAdmin ? (
             <div className="mt-12 ">
               {/* route 1 */}
               <NavLink
                 to="/Dashboard/agent-profile"
                 className={({ isActive }) =>
                   isActive ? 'text-white ' : '  text-black'
                 }
               >
                 <h1
                   className={`font-medium font-mono flex items-center gap-3 px-3`}
                 >
                   <FaUser className={`${!open && 'mx-auto text-4xl'}`} />
                   <span className={`${!open && 'hidden'} duration-700`}>
                     Agent Profile
                   </span>
                 </h1>
               </NavLink>
               {/* route 2 */}
               <NavLink
                 to="Dashboard/add-properties"
                 className={({ isActive }) =>
                   isActive ? 'text-white ' : '  text-black'
                 }
               >
                 <h1
                   className={`font-medium font-mono flex items-center gap-3 px-3`}
                 >
                   <FaShopify
                     className={`${!open && 'mx-auto text-4xl my-6'} ${
                       open && 'my-6'
                     }`}
                   />
                   <span className={`${!open && 'hidden'} duration-700`}>
                     Add Properties
                   </span>
                 </h1>
               </NavLink>
               {/* route 3 */}
               <NavLink
                 to="Dashboard/my-sold-properties"
                 className={({ isActive }) =>
                   isActive ? 'text-white ' : '  text-black'
                 }
               >
                 <h1
                   className={`font-medium font-mono flex items-center gap-3 px-3`}
                 >
                   <FaSellcast className={`${!open && 'mx-auto text-4xl'}`} />
                   <span className={`${!open && 'hidden'} duration-700`}>
                     My sold properties
                   </span>
                 </h1>
               </NavLink>
               {/* route 4 */}
               <NavLink
                 to="Dashboard/requested-properties"
                 className={({ isActive }) =>
                   isActive ? 'text-white ' : '  text-black'
                 }
               >
                 <h1
                   className={` font-medium font-mono flex items-center gap-3 px-3`}
                 >
                   <FaStar
                     className={`${!open && 'mx-auto text-4xl my-6'} ${
                       open && 'my-6'
                     } `}
                   />
                   <span className={`${!open && 'hidden'} duration-700`}>
                     Requested properties
                   </span>
                 </h1>
               </NavLink>
             </div>
           ) : (
             <div className="mt-12 ">
               {/* route 1 */}
               <NavLink
                 to="Dashboard/admin-profile"
                 end
                 className={({ isActive }) =>
                   isActive ? 'text-white ' : '  text-black'
                 }
               >
                 <h1
                   className={`font-medium font-mono flex items-center gap-3 px-3`}
                 >
                   <FaUser className={`${!open && 'mx-auto text-4xl'}`} />
                   <span className={`${!open && 'hidden'} duration-700`}>
                     Admin Profile
                   </span>
                 </h1>
               </NavLink>
               {/* route 2 */}
               <NavLink
                 to="Dashboard/manage-properties"
                 className={({ isActive }) =>
                   isActive ? 'text-white ' : '  text-black'
                 }
               >
                 <h1
                   className={`font-medium font-mono flex items-center gap-3 px-3`}
                 >
                   <FaShopify
                     className={`${!open && 'mx-auto text-4xl my-6'} ${
                       open && 'my-6'
                     }`}
                   />
                   <span className={`${!open && 'hidden'} duration-700`}>
                     Manage Properties
                   </span>
                 </h1>
               </NavLink>
               {/* route 3 */}
               <NavLink
                 to="Dashboard/manage-users"
                 className={({ isActive }) =>
                   isActive ? 'text-white ' : '  text-black'
                 }
               >
                 <h1
                   className={`font-medium font-mono flex items-center gap-3 px-3`}
                 >
                   <FaUsers className={`${!open && 'mx-auto text-4xl'}`} />
                   <span className={`${!open && 'hidden'} duration-700`}>
                     Manage Users
                   </span>
                 </h1>
               </NavLink>
               {/* route 4 */}
               <NavLink
                 to="Dashboard/manage-reviews"
                 className={({ isActive }) =>
                   isActive ? 'text-white ' : '  text-black'
                 }
               >
                 <h1
                   className={`font-medium font-mono flex items-center gap-3 px-3`}
                 >
                   <FaStar
                     className={`${!open && 'mx-auto text-4xl my-6'} ${
                       open && 'my-6'
                     } `}
                   />
                   <span className={`${!open && 'hidden'} duration-700`}>
                     Manage Reviews
                   </span>
                 </h1>
               </NavLink>
             </div>
           )}
         </div>
       </div>
       <div className="border w-full items-center justify-center flex">
         <button className="border  py-2 font-bold text-lg text-white flex items-center gap-2 ">
           <span className="text-2xl font-bold">
             <FiLogOut className="mr-2 font-bold text-rose-500" />
           </span>
           Logout
         </button>
       </div>
     </div>
     <div className="w-full">
       <Outlet />
     </div>
   </div>
 );
};

export default Dashboard;