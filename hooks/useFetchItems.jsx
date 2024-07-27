import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useFetchItems = ({ url, token }) => {
  const router = useRouter();

  return useQuery({
    queryKey: [url],
    queryFn: async () => {
      try {
        // Set up headers conditionally
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        // Make the request with or without the Authorization header
        const response = await axios.get(url, { headers });

        return response.data;
      } catch (error) {
        // Handle 401 error or other errors accordingly
        if (error.response && error.response.status === 401) {
          router.push("/login");
        } else if (error.response && error.response.status === 403) {
          console.error("Access forbidden:", error);
          router.push("/login");
        } else if (token === "") {
          router.push("/login");
        } else {
          console.error("Error fetching data:", error);
        }
      }
    },
  });
};

export default useFetchItems;
