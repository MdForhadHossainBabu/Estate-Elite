import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { TbFidgetSpinner } from 'react-icons/tb';


const PrivateRoute = ({ children }) => {
  const location = useLocation();
  //  console.log(location);


  const { user, loading } = useAuth();
  if (loading) {
    return (
      <p className='animate-spin flex flex-col items-center text-9xl my-60 text-rose-600'>
        <TbFidgetSpinner />
      </p>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
