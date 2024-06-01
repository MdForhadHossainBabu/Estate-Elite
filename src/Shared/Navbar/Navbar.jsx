import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiMiniXMark } from 'react-icons/hi2';

import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light')

 const { user, logOut } = useAuth();
 const handleLogOut = () => {
  logOut().then(() => {
   toast.success('log out successfully')
  })
   .catch(error => {
    console.log(error);
   })
 }
 const navLinks = (
   <>
     <NavLink
       className={({ isActive }) =>
         isActive ? 'border-b border-orange-500 ' : ' '
       }
     >
       Home
     </NavLink>
     <NavLink
       to="/all-properties"
       className={({ isActive }) =>
         isActive ? 'border-b border-orange-500 ' : ' '
       }
     >
       All Properties
     </NavLink>
   <NavLink
    to="/Dashboard"
       className={({ isActive }) =>
         isActive ? 'border-b border-orange-500 ' : ' '
       }
     >
       Dashboard
     </NavLink>
     {user ? (
       <button onClick={() => handleLogOut()}>Logout</button>
     ) : (
       <NavLink to="/login">Login</NavLink>
     )}
   </>
 );

 console.log(isOpen ? 'open' : 'close');
 return (
   <div>
     <nav className="flex items-center justify-between border-2 py-1 bg-slate-200 shadow-lg sticky">
       <div>
         <h1 className="text-3xl font-bold flex items-center gap-0 text-rose-500 font-poppins">
           Estate<span className="text-orange-500">Elite</span>
         </h1>
       </div>
       <div>
         <ul className="items-center gap-4 font-space hidden lg:flex md:hidden">
           {navLinks}
         </ul>
       </div>
       <div>
         <ul className="border-2 border-red-300 flex items-center gap-2 lg:pl-0 rounded-full px-2">
           <span>
             <GiHamburgerMenu
               onClick={() => setIsOpen(!isOpen)}
               className="text-3xl flex lg:hidden opacity-70"
             />
           </span>
           {user && (
             <img className="w-8 h-8 rounded-full" src={user.photoURL} alt="" />
           )}
           <span className="text-2xl" onClick={() => setTheme(!theme)}>
             {theme ? <FaSun /> : <FaMoon />}
           </span>
         </ul>
       </div>
     </nav>
     <div
       className={`w-64 min-h-screen 
     ${isOpen ? 'flex' : 'hidden'}
      fixed top-0 right-0 border-2 bg-rose-300 md:hidden duration-500`}
     >
       <span
         onClick={() => setIsOpen(!isOpen)}
         className="absolute right-2 top-2 text-4xl border bg-orange-500 text-white"
       >
         <HiMiniXMark />
       </span>
       <div className="my-16 mx-auto">
         <ul className="flex flex-col items-center justify-center gap-3">
           {navLinks}
         </ul>
       </div>
     </div>
   </div>
 );
};

export default Navbar;