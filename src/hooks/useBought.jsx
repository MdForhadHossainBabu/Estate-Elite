
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useBought = () => {
 const axiosSecure = useAxiosSecure()
  const { user } = useAuth();
  const { data: cart = [], refetch, isPending } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlist?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart, refetch, isPending];
};

export default useBought;