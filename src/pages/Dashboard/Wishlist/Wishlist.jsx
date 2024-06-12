import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAxiosPublic from './../../../hooks/useAxiosPublic';

// watch input value by passing the name of it

const image_hosting_key = import.meta.env.VITE_API_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Wishlist = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {

    const imageFile = { image: data.property_image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'Content-Type':'multipart/form-data'
      }
      
    }
    )
    if (res.data.success) {
      // now send the database 
      const menuItem = {
        property_title: data.property_title,
        property_name: data.property_name,
        property_location: data.property_location,
        price_range: parseFloat(data.price_range),
        agent_image: data.agent_image,
        verification_status: data.verification_status,
        property_image: res.data.data.display_url,
        email: user?.email,
        agent_name: user?.displayName,
      };
 axiosSecure.post('/wishlist', menuItem).then((res) => {
   if (res.data.insertedId) {
     Swal.fire({
       position: 'top-end',
       icon: 'success',
       title: 'Add to this item',
       showConfirmButton: false,
       timer: 1500,
     });
   }
 });
    }
      console.log(res.data); 
    console.log(data);
    // const {property_title, property_name, property_location,price_range, agent_image, verification_status  } = data;

   


  };

  return (
    <div className=''>
      {/* from 1 */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border dark:border-yellow-500 bg-slate-300 dark:bg-slate-900 dark:text-white py-12 w-full h-[100vh] space-y-4 font-mono flex flex-col">
          <div className="my-4">
            <h1 className="text-4xl font-bold font-space text-rose-500 text-center">
              Wishlist
            </h1>
            <p className="text-center pt-4 text-balance font-fira">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
              corporis labore quis doloribus numquam possimus. Quo harum non
              blanditiis neque.
            </p>
          </div>
          <div className="flex flex-col">
            {/* 1st div */}
            <div className="flex px-4  items-center gap-12 ">
              <div className="flex w-1/2 flex-col space-y-3">
                <label>Property Title : </label>
                <input
                  className="outline-none py-2 px-2 font-serif border border-green-500 rounded-md"
                  type="text"
                  placeholder="Property Title"
                  {...register('property_title', { required: true })}
                  id=""
                />
                {errors.property_title && <span>This field is required</span>}
              </div>
              <div className="flex flex-col space-y-3 w-1/2">
                <label>Property Name : </label>
                <input
                  className="outline-none py-2 px-2 font-serif border border-green-500 rounded-md"
                  type="text"
                  placeholder="Property Name"
                  {...register('property_name', { required: true })}
                  id=""
                />
              </div>
            </div>
            {/* 2nd div */}
            <div className="flex px-4 items-center gap-12">
              <div className="flex w-1/2 flex-col space-y-3">
                <label>Property Location : </label>
                <input
                  className="outline-none py-2 px-2 font-serif border border-green-500 rounded-md"
                  type="text"
                  placeholder="Property location..."
                  {...register('property_location', { required: true })}
                  id=""
                />
              </div>
              <div className="flex flex-col space-y-3 w-1/2">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col w-full">
                    <label>Photo URL : </label>
                    <div className="w-full flex items-center gap-2">
                      <input
                        className="outline-none py-2 px-2 w-full disabled cursor-not-allowed font-serif border border-green-500 rounded-md"
                        type="text"
                        disabled
                        defaultValue={user?.photoURL}
                        {...register('agent_image', { required: true })}
                        id=""
                      />
                      <div>
                        <img
                          className="size-12 border-2 rounded-full p-1 border-red-400"
                          src={user?.photoURL}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 3rd div */}
            <div className="flex px-4 items-center gap-12">
              <div className="flex w-1/2 flex-col space-y-2">
                <label>Price range : </label>
                <input
                  className="outline-none py-2 px-2 font-serif border border-green-500 rounded-md"
                  type="number"
                  placeholder="Price range..."
                  {...register('price_range', { required: true })}
                  id=""
                />
              </div>
              <div className="flex w-1/2 flex-col space-y-2">
                <label>Verification Status : </label>
                <select
                  className="outline-none py-2 px-2 font-serif border border-green-500 rounded-md"
                  defaultValue={`value`}
                  {...register('verification_status', { required: true })}
                  id=""
                >
                  <option value=" " disabled>
                    Select item
                  </option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>
            {/* 4rt div */}
            <div className="flex px-4 items-center gap-12">
              <div className="flex w-1/2 flex-col space-y-3">
                <label>Agent Name : </label>
                <input
                  className="border border-green-400 px-2 py-2 cursor-not-allowed rounded-md"
                  type="text"
                  disabled
                  defaultValue={user?.displayName}
                />
              </div>
              <div className="flex flex-col w-1/2 space-y-3">
                <div className="flex flex-col gap-2 font-bold">
                  <label>Property Image: </label>
                  <input className='border py-1 px-2 rounded-lg border-green-400' {...register('property_image')} type="file" />
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center mt-8">
              <button className=" py-2 text-xl uppercase font-poppins font-bold rounded-full bg-rose-500 text-white w-1/2">
                submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Wishlist;
