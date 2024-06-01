import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import App from "../App";

const router = createBrowserRouter([
 {
  path: '/',
  element: <Main />,
  errorElement: <div>404</div>,
  children: [
   {
    index: true,
    element: <App/>
   }
  ]
 }
])
export default router;