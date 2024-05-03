import React from "react";
import { useQuery } from "@chakra-ui/react";
import axios from "axios";

const useFetchItems = ({ url, token }) => {
  return useQuery(["data"], async () => {
    await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  });
};

export default useFetchItems;
