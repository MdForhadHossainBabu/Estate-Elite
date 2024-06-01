import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';



const Login = () => {
 const { signIn, googleLogin, githubLogin } = useAuth();
 const location = useLocation();
 const navigate  = useNavigate()
 
 // login with google 
 const handleGoogle = () => {
  googleLogin().then(res => {
   console.log(res.user);
   navigate('/')
   toast.success(`login successfully`)
  })
   .catch(error => {
   toast.error(error)
  })
 }
 // login with git hub 
 const handleGithub = () => {
  githubLogin()
   .then(res => {
    console.log(res.user);
     navigate('/');
      toast.success(`login successfully`);
    })
    .catch(error => {
      toast.error(error);
    });
 }

 // login with email & password
   const { register, handleSubmit } = useForm();
   const onSubmit = data => {
    console.log(data);
    const { email, password } = data;
    signIn(email, password).then(res => {
      navigate('/');
     toast.success(`${res.email} login successfully`)
    })
   };
 return (
   <div className="border max-w-screen-xl mx-auto">
     <h2 className="text-4xl font-bold font-space text-center text-orange-500 my-4 mt-12">
       Login Now
     </h2>
     <form
       onSubmit={handleSubmit(onSubmit)}
       className="flex flex-col items-center my-4 space-y-4 px-4"
     >
       <div className="flex flex-col space-y-2 w-full lg:w-1/2">
         <span>
           Name<span className="text-orange-500">*</span>
         </span>
         <input
           className="border px-2 py-2 outline-none"
           type="email"
           {...register('email')}
           placeholder="Type Current Email*"
           id=""
         />
       </div>
       <div className="flex flex-col space-y-2 w-full lg:w-1/2">
         <span>
           Password<span className="text-orange-500">*</span>
         </span>
         <input
           className="border px-2 py-2 outline-none"
           type="password"
           {...register('password')}
           placeholder="Type Current Password*"
           id=""
         />
       </div>
       <button className=" py-3 rounded w-full lg:w-1/2 bg-orange-500 text-white font-bold font-space">
         LOGIN NOW
       </button>
     </form>
     <div className="w-1/2 mx-auto ">
       <div className="divider  text-orange-500 mx-12">or continue with</div>
       <div className="w-1/2 mx-auto">
         <div className="flex items-center gap-6 justify-center my-2">
           <button
             onClick={() => handleGoogle()}
             className="border px-8 font-mono flex items-center hover:shadow-lg bg-slate-50 text-black"
           >
             <FcGoogle className="mr-2 text-3xl my-1" />
             Google
           </button>
           <button
             onClick={() => handleGithub()}
             className="border px-8 font-mono flex items-center hover:shadow-lg bg-slate-50 text-black"
           >
             {' '}
             <FaGithub className="mr-2 text-3xl my-1" />
             Github
           </button>
         </div>
         <div className="flex justify-end my-3">
           <h1>
             Do not have an account ?
             <Link to="/sign-up" className="text-orange-500 ml-1">
               Register Now
             </Link>
           </h1>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Login;