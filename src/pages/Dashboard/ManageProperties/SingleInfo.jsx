import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const SingleInfo = ({ item, refetch, isPending }) => {
  const axiosSecure = useAxiosSecure();

  // roles reject handler
  const handleVerify = (user) => {
    console.log(user);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'If you want to verified?',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/wishlist/verify/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            // TODO:
            refetch();
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };
  // roles reject handler
  const handleReject = (user) => {
    console.log(user);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Want to Reject it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/wishlist/reject/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            // TODO:
            refetch();
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };


  if(isPending) return 'loading...'
  return (
    <>
      <div className="card shadow-xl">
        <figure>
          <img
            className="w-full h-64 border-2 rounded-xl"
            src={item.property_image}
            alt="Shoes"
          />
        </figure>
        <div className="flex items-center justify-around border">
          <h1
            className={`text-red-500 font-roboto font-bold px-3 ${
              item.agent_name == item.agent_name && 'text-green-400'
            }`}
          >
            {item.agent_name || 'Unknown'}
          </h1>
          <span>
            <small
              className={`border-2 px-4 ${
                item.verification_status === 'Pending' && 'text-orange-500'
              } ${item.verification_status === 'Rejected' && 'text-red-500'} 
                   ${
                     item.verification_status === 'Verified' && 'text-green-500'
                   }`}
            >
              {item.verification_status}
            </small>
          </span>
        </div>
        <div className="my-4 px-3">
          <div className="flex items-center ">
            <span className="text-sm">Title : </span>
            <h2 title={item.property_title} className="card-title text-sm ml-2">
              {item.property_title.substring(0, 30)}
            </h2>
          </div>
          <p className="text-sm font-bold font-mono">
            Price : ${item.price_range}
          </p>
          <p className="text-sm font-bold font-mono">
            Location : {item.property_location}
          </p>
          <div>
            <h1 className="text-sm font-medium font-fira ">
              {' '}
              Email: {item.email}
            </h1>
          </div>
          <div className="card-actions justify-between mt-4">
            {item.roles === 'verify' ? (
              <button className=" px-6 py-1  rounded-md font-bold bg-green-700 text-white">
                Verified
              </button>
            ) : (
              <button
                onClick={() => handleVerify(item)}
                className=" px-6 py-1  rounded-md font-bold bg-green-500 text-white"
              >
                Verify
              </button>
            )}
            {item.roles === 'reject' ? (
              <button className=" px-6 py-1  rounded-md font-bold bg-red-600 text-white">
                Rejected
              </button>
            ) : (
              <button
                onClick={() => handleReject(item)}
                className=" px-6 py-1  rounded-md font-bold bg-rose-500 opacity-90 text-white"
              >
                Reject
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleInfo;