import { NavLink } from "react-router-dom";
import img  from '../../assets/m.jpg'
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from "react";


const Navbar = () => {

 const [isOpen , setIsOpen] = useState(false)

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
   <nav className="flex items-center justify-between px-4">
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
       <ul className="border-2 flex items-center gap-2 rounded-full">
         <span>
           {' '}
           <GiHamburgerMenu
             onClick={() => setIsOpen(!isOpen)}
             className="text-3xl flex lg:hidden"
           />
         </span>
         <img className="w-8 h-8 rounded-full" src={img} alt="" />
       </ul>
     </div>
   </nav>
 );
};

export default Navbar;