import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard";


const DashBoardMain = () => {
 return (
  <div className="flex">
   <div>
    <Dashboard/>
   </div>
     <div>
       <Outlet />
     </div>
   </div>
 );
};

export default DashBoardMain;