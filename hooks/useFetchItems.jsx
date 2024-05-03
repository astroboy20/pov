import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useFetchItems = ({ url, token }) => {
  return useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    cacheTime:600000,
  });
};

export default useFetchItems;
