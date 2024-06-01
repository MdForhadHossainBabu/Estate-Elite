import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
 return (
   <div>
     <div>
       {/* navbar */}
       <Navbar />
     </div>
     {/* outlet  */}
     <div>
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