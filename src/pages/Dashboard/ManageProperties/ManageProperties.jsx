import useBought from "../../../hooks/useBought";
import SingleInfo from "./SingleInfo";

const ManageProperties = () => {
 const [cart, refetch, isPending] = useBought();
 // console.log(cart);

 
if(isPending) return 'loading...'

 return (
   <div className="border-2 mx-6">
     <h2 className="text-2xl uppercase font-bold font-fira text-center text-balance">
       Manage All Item
     </h2>
     <p className="text-center text-balance mx-32 my-4">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
       corporis sequi nemo aut, eligendi ipsam, soluta nostrum nulla mollitia
       aspernatur tempora explicabo voluptas officia placeat ut. Nostrum,
       perspiciatis iste. Neque.
     </p>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {cart.map((item) => (
         <SingleInfo
           key={item._id}
           item={item}
           refetch={refetch}
           isPending={isPending}
         />
       ))}
     </div>
   </div>
 );
};

export default ManageProperties;