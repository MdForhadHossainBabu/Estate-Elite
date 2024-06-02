import { FaFacebook, FaGithub, FaReddit } from "react-icons/fa";

const Footer = () => {
 return (
   <div className="bg-slate-200 max-w-screen-xl mx-auto font-mono">
     <footer className="bg-white dark:bg-gray-900">
       <div className="container p-6 mx-auto">
         <div className="lg:flex">
           <div className="w-full -mx-6 lg:w-2/5">
             <div className="px-6">
               <a href="#">
                 <h1 className="text-3xl font-bold font-roboto text-rose-500">
                   Estate<span className="text-orange-500">Elite</span>
                 </h1>
               </a>

               <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400 font-mono">
                 Putting these two words together, EstateElite suggests a
                 platform or service that deals with high-end, exclusive real
                 estate properties
               </p>

               <div className="flex mt-6 -mx-2">
                 <a
                   href="#"
                   className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                   aria-label="Reddit"
                 >
                   <FaReddit />
                 </a>

                 <a
                   href="#"
                   className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                   aria-label="Facebook"
                 >
                   <FaFacebook />
                 </a>

                 <a
                   href="#"
                   className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                   aria-label="Github"
                 >
                   <FaGithub />
                 </a>
               </div>
             </div>
           </div>

           <div className="mt-6 lg:mt-0 lg:flex-1">
             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
               <div>
                 <h3 className="text-gray-700 uppercase dark:text-white">
                   About
                 </h3>
                 <a
                   href="#"
                   className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                 >
                   Company
                 </a>
                 <a
                   href="#"
                   className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                 >
                   community
                 </a>
                 <a
                   href="#"
                   className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                 >
                   Careers
                 </a>
               </div>

               <div>
                 <h3 className="text-gray-700 uppercase dark:text-white">
                   Blog
                 </h3>
                 <a
                   href="#"
                   className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                 >
                   Tec
                 </a>
                 <a
                   href="#"
                   className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                 >
                   Music
                 </a>
                 <a
                   href="#"
                   className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                 >
                   Videos
                 </a>
               </div>

               <div>
                 <h3 className="text-gray-700 uppercase dark:text-white">
                   Products
                 </h3>
                 <a
                   href="#"
                   className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                 >
                   Mega properties
                 </a>
                 <a
                   href="#"
                   className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                 >
                   Properties
                 </a>
                 <a
                   href="#"
                   className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                 >
                   Estate Elite
                 </a>
               </div>

               <div>
                 <h3 className="text-gray-700 uppercase dark:text-white">
                   Contact
                 </h3>
                 <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                   +88 015 400 727 82
                 </span>
                 <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                   estateelite@email.com
                 </span>
               </div>
             </div>
           </div>
         </div>

         <div>
           <p className="text-center text-gray-500 dark:text-gray-400 font-mono">
             © Estate Elite 2024 - All rights reserved
           </p>
         </div>
       </div>
     </footer>
   </div>
 );
};

export default Footer;