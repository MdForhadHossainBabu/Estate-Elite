import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
 return (
   <div>
     <div className='h-14 mb-2'>
       {/* navbar */}
       <Navbar />
     </div>
     {/* outlet  */}
     <div className='min-h-[calc(100vh -400px)] '>
       <Outlet />
     </div>

     <div>
  
       {/* footer */}
       <Footer />
     </div>
   </div>
 );
};

export default Main;