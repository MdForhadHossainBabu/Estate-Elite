import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import App from "../App";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
 {
  path: '/',
  element: <Main />,
  errorElement: <div>404</div>,
  children: [
   {
    index: true,
    element: <Home/>
   },
  ]
 },
 {
  path: 'sign-up',
  element: <SignUp/>
 },
 {
  path: 'login',
  element: <Login/>
 }
])
export default router;