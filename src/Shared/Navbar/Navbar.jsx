import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiMiniXMark } from 'react-icons/hi2';

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : 'system'
  )
  const options = [
    {
      icon: 'sunny',
      text:'light'
    },
    {
      icon: 'moon',
      text:'dark'
    },
    {
      icon: 'desktop-outline',
      text:'system'
    },
  ];

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
       to="/"
       className={({ isActive }) =>
         isActive ? 'border-b border-orange-500 ' : 'text-black dark:text-white'
       }
     >
       Home
     </NavLink>
     <NavLink
       to="/all-properties"
       className={({ isActive }) =>
         isActive
           ? 'border-b border-orange-500  '
           : '  text-black dark:text-white'
       }
     >
       All Properties
     </NavLink>
     <NavLink
       to="/Dashboard"
       className={({ isActive }) =>
         isActive
           ? 'border-b border-orange-500 '
           : '  text-black dark:text-white'
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
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function onWindowMatch() {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
    element.classList.add("dark")
    } else {
          element.classList.remove('dark');

  }
}
onWindowMatch()
  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark');
        localStorage.setItem("theme", "dark")
        break;
      case 'light':
        element.classList.remove('dark');
        localStorage.setItem("theme", "light")
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);
  
  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark")
      } else {
                element.classList.remove('dark');
      }
    }
  })
 return (
   <div className="fixed w-full max-w-screen-xl z-20">
     <nav className="flex items-center justify-between dark:bg-slate-600  bg-slate-200 h-14">
       <div>
         <h1 className="text-3xl font-bold flex items-center gap-0 text-rose-500 font-poppins">
           Estate<span className="text-orange-500">Elite</span>
         </h1>
       </div>
       <div>
         <ul className="items-center gap-4 font-space hidden dark:text-white lg:flex md:hidden">
           {navLinks}
         </ul>
       </div>
       <div>
         
         {/* ul of dark & light */}
         <div className="flex items-center gap-2">
           <div>
             {user && (
               <img
                 className="w-8 h-8 rounded-full"
                 src={
                   user.photoURL ||
                   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh1MxDvWeEQ39D04ETGLuJ_pnSkd_gZf47R7qkQaxbHotxVs-aBvYjsHmbvxcKhTGn9gI&usqp=CAU'
                 }
                 alt=""
               />
             )}
           </div>
           <div>
             {options.map((opt) => (
               <button
                 onClick={() => setTheme(opt.text)}
                 key={opt.text}
                 className={`size-8 leading-9  text-xl rounded-sm m-1 ${
                   theme === opt.text && 'text-sky-600'
                 }`}
               >
                 <ion-icon name={opt.icon}></ion-icon>
               </button>
             ))}
           </div>
         </div>

       </div>
     </nav>
     <div
       className={`w-64 min-h-screen 
     ${isOpen ? 'flex' : 'hidden'}
      fixed top-0 right-0 bg-rose-300 dark:bg-slate-800 md:hidden duration-500`}
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