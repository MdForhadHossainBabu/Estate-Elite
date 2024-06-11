import errorGif from '../../assets/404.gif'

const ErrorPage = () => {
 return (
  <div className='w-full h-screen'>
   <img className='w-full h-full' src={errorGif} alt="" />
  </div>
 );
};

export default ErrorPage;