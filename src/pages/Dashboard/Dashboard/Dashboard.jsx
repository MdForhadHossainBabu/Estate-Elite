
import { useState } from 'react';
import {  FaArrowLeft,  FaList,  FaSellcast,  FaShopify, FaStar, FaStreetView, FaUser, FaUsers } from 'react-icons/fa';
import {  NavLink, Outlet } from 'react-router-dom';
const Dashboard = () => {
 const [open, setOpen] = useState(true)
 const isAdmin = true;
 const [on, setOn] = useState(false);
 
 return (
   <div className="flex gap-2 max-w-screen-xl mx-auto">
     <div
       className={`${
         open ? 'w-60' : 'w-24'
       } duration-500 min-h-screen bg-gray-800 bg-opacity-40 relative`}
     >
       <span
         className={`${
           !open && 'rotate-180 text-[10px]'
         } absolute cursor-pointer rounded-full -right-3 top-9 p-1 border-2 border-blue-800 bg-white`}
         onClick={() => setOpen(!open)}
       >
         <FaArrowLeft />
       </span>
       {/* content */}

       {/* first heading */}
       <div className="mt-6">
         <h1
           className={`${
             open ? 'text-4xl px-4' : 'text-normal'
           } mx-auto font-bold text-center font-poppins duration-700 text-orange-600`}
         >
           Estate<span className="text-rose-500">Elite</span>
         </h1>
         <div className="divider mx-3 divider-info"></div>
         {/* admin routes */}
         <div
           onClick={() => setOn(!on)}
           className={`mx-auto ${
             open ? 'flex' : 'flex-col gap-4'
           } flex items-center justify-around`}
         >
           <div
             className={`
      ${on && 'border-x-0 font-bold text-white'}
      border-2 ${!open ? ' px-3' : 'px-5'} ont-bold uppercase font-mono `}
           >
             Agent
           </div>
           <div
             className={`
      ${!on && 'border-x-0 font-bold text-white'}
      border-2 ${!open ? ' px-3' : 'px-5'} ont-bold uppercase font-mono `}
           >
             User
           </div>
         </div>
         {/* user route */}

        {isAdmin === true && <div className="mt-12 ">
           {/* route 1 */}
           <NavLink
             to="Dashboard/my-profile"
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
         </div>}

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
         {/* admin profile */}
         <div className="mt-12 ">
           {/* route 1 */}
           <NavLink
             to="/Dashboard/admin-profile"
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
       </div>
     </div>
     <div className="w-full">
       <Outlet />
     </div>
   </div>
 );
};

export default Dashboard;