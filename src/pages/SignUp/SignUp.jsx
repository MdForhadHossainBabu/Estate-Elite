import { useForm } from "react-hook-form";


const SignUp = () => {
  const {
    register,
    handleSubmit,
  } = useForm()

 const onSubmit = (data) => {
  console.log(data) 
  
 };
 return (
   <div className="border max-w-screen-xl mx-auto">
     <form onSubmit={handleSubmit(onSubmit)}>
       <div className="flex flex-col space-y-2">
         <span>
           Name<span className="text-orange-500">*</span>
         </span>
         <input
           type="text"
           {...register('name')}
           placeholder="Type Your Name*"
           id=""
         />
       </div>
     </form>
   </div>
 );
};

export default SignUp;