import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useFetchItems = ({ url, token }) => {
  const router = useRouter();

  return useQuery({
    queryKey: [url],
    queryFn: async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          router.push("/login");
        } else if (token === "") {
          router.push("/login");
        } else {
          console.error("Error fetching data:", error);
        }
      }
    },
    // cacheTime:3000,
  });
};

export default useFetchItems;
