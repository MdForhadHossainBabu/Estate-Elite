import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home/Home";
import AllProperties from "../pages/AllProperties/AllProperties";
import AdminProfile from "../pages/Dashboard/AdminProfile/AdminProfile";
import ManageProperties from "../pages/Dashboard/ManageProperties/ManageProperties";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import ManageReview from "../pages/Dashboard/ManageReview/ManageReview";
import SingleInfo from "../pages/Home/Advertisement/SingleInfo";
import Details from "../pages/AllProperties/Details";
import Wishlist from "../pages/Dashboard/Wishlist/Wishlist";
import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";
import PropertyBought from "../pages/Dashboard/PropertyBought/PropertyBought";
import MyReviews from "../pages/Dashboard/MyReviews/MyReviews";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Statistics from "../pages/Dashboard/Dashboard/Statistics/Statistics";
import Payment from "../pages/Dashboard/Dashboard/Payment/Payment";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'all-properties',
        element: (
          <PrivateRoute>
            <AllProperties />
          </PrivateRoute>
        ),
      },
      {
        path: 'details/:id',
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/properties/${params.id}`),
      },

      {
        path: 'cardInfoDetails/:id',
        element: (
          <PrivateRoute>
            <SingleInfo />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/advertisement/${params.id}`),
      },
    ],
  },
  {
    path: 'sign-up',
    element: <SignUp />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'payment',
    element: <Payment />,
  },
  // Dashboard
  {
    path: 'Dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'Dashboard/admin-profile',
        element: <AdminProfile />,
      },

      {
        path: 'Dashboard/manage-properties',
        element: <ManageProperties />,
      },
      {
        path: 'Dashboard/manage-users',
        element: <ManageUsers />,
      },
      {
        path: 'Dashboard/manage-reviews',
        element: <ManageReview />,
      },
      {
        path: 'Dashboard/wishlist',
        element: <Wishlist />,
      },
      {
        index: true,
        element: <Statistics />,
      },
      {
        path: 'Dashboard/property-bought',
        element: <PropertyBought />,
      },
      {
        path: 'Dashboard/my-profile',
        element: <UserProfile />,
      },
      {
        path: 'Dashboard/my-reviews',
        element: <MyReviews />,
      },
    ],
  },
]);
export default router;