import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

// watch input value by passing the name of it

const Wishlist = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // const {} = data;
  };

  return (
    <>
      {/* from 1 */}
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      {/* <input defaultValue="test" {...register('example')} /> */}

      {/* include validation with required or other standard HTML validation rules */}
      {/* <input {...register('exampleRequired', { required: true })} /> */}
      {/* errors will return when field validation fails  */}

      {/* <input type="submit" /> */}
      {/* </form> */}

      {/* from 2 */}
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          WishList item
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Property Title
              </label>
              <input
                {...register('property_title', { required: true })}
                id="username"
                type="text"
                placeholder="Property Title"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              ></input>
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Property Location
              </label>
              <input
                placeholder="Property location"
                type="text"
                {...register('property_location', { required: true })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              ></input>
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Agent Name
              </label>
              <input
                id=""
                placeholder="Agent Name"
                type="text"
                {...register('agent_name', { required: true })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              ></input>
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Verification Status
              </label>
              <select
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register('verification_status')}
              >
                <option value="Pending">Pending</option>
              </select>
            </div>
            {/* price range */}
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Price Range
              </label>
              <input
                id=""
                placeholder="Price range"
                type="text"
                {...register('price_range', { required: true })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              ></input>
            </div>
            {/* photo url */}
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Agent Photo
              </label>
              <div className="flex items-center gap-4">
                <input
                  id=""
                  placeholder="Make an offer"
                  type="text"
                  disabled
                  defaultValue={user?.photoURL}
                  {...register('Agent_photo', { required: true })}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                ></input>
                <img
                  src={user?.photoURL}
                  className="w-16 h-14 rounded-md hover:scale-110 duration-300 hover:rounded-full hover:h-14"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex items-center mt-6 gap-3">
            <input
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 uppercase font-bold font-mono"
              type="submit"
              value="ADD ITEM"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Wishlist;
