import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaGithub
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
const image_hosting_key = import.meta.env.VITE_API_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { createUser, googleLogin, githubLogin, updateUser } = useAuth();
  // login with google
  const handleGoogle = () => {
    googleLogin()
      .then(res => {
        console.log(res.user);
        navigate('/');
        toast.success(`login successfully`);
      })
      .catch(error => {
        toast.error(error);
      });
  };
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
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {

 const { email, password, confirmPassword, name,  } = data;

    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    } )
    console.log(res.data);
    if (res.data.success) {
      const image = res.data.display_url;
      // now send the image url
 if (!password > 6) {
   setError('password must have 6 characters');
   return;
 }
 if (password !== confirmPassword) {
   setError("password did't match");
   toast.error("password did't match");
   return;
 }
 createUser(email, password)
   .then((res) => {
     console.log(res.user);

     updateUser(name, image).then(() => {
       navigate('/');
     });
   })
   .catch((error) => {
     console.log(error);
   });
 console.log(data);
 setError(' ');
    }





   
   
  };
  return (
    <div className=" max-w-screen-xl mx-auto h-[95vh] my-4">
      <Helmet>
        <title>
          Estate Elite | REGISTER 
        </title>
      </Helmet>
      <h2 className="text-4xl font-bold font-space text-center text-orange-500 my-4 mt-12">
        Register Now
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
            type="text"
            {...register('name', { required: true })}
            placeholder="Type Your Name*"
            id=""
          />
          {errors.name && (
            <small className="text-red-500">Name field is required</small>
          )}
        </div>
        <div className="flex flex-col space-y-2 w-full lg:w-1/2">
          <span>
            Email<span className="text-orange-500">*</span>
          </span>
          <input
            className="border px-2 py-2 outline-none"
            type="email"
            {...register('email', { required: true })}
            placeholder="Type Your Email*"
            id=""
          />
          {errors.email && (
            <small className="text-red-500">Email field is required</small>
          )}
        </div>
        <div className="flex flex-col space-y-2 w-full lg:w-1/2 ">
          <span>
            Password<span className="text-orange-500">*</span>
          </span>
          <input
            className="border px-2 py-2 outline-none"
            type={isOpen ? 'text' : 'password'}
            {...register('password', { required: true })}
            placeholder="Type Your Password*"
          />
          {errors.password && (
            <small className="text-red-500">Password field is required</small>
          )}
        </div>
        <div className="flex flex-col space-y-2 w-full lg:w-1/2 ">
          <span>
            Confirm Password<span className="text-orange-500">*</span>
          </span>
          <input
            className="border px-2 py-2 outline-none"
            type={isOpen ? 'text' : 'password'}
            {...register('confirmPassword', { required: true })}
            placeholder="Confirm Password*"
          />
          {errors.password && (
            <small className="text-red-500">
              {' '}
              Confirm Password field is required
            </small>
          )}
          {error && (
            <span className="text-red-500">
              <small>{error}</small>
            </span>
          )}
          <span className="flex items-center gap-1">
            <input
              className="mt-2"
              onClick={() => setIsOpen(!isOpen)}
              type="checkbox"
              id=""
            />
            <span>
              <small>{isOpen ? 'Hide' : 'Show'} password</small>
            </span>
          </span>
        </div>

        <div className="flex flex-col space-y-2 w-full lg:w-1/2 ">
          <span>
            Select Photo<span className="text-orange-500">*</span>
          </span>
          <input
            className="border px-2 py-2 outline-none"
            type="file"
            {...register('image', { required: true })}
            placeholder="Type Your Password*"
          />
        </div>
        <button className=" py-3 rounded w-full lg:w-1/2 bg-orange-500 text-white font-bold font-space outline-none">
          REGISTER NOW
        </button>
      </form>
      <div className="w-1/2 mx-auto mt-12 space-y-6">
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
          <div className="flex justify-end my-3 mt-6">
            <h1>
              Have an account ?
              <Link to="/login" className="text-orange-500 ml-1">
                Login Now
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;