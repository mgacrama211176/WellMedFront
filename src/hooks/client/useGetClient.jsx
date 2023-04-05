import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getClientApi } from "../../api/ClientApi/getClientApi";

const useGetClient = () => {
  const clientQuery = useQuery({
    queryKey: ["clients"],
    queryFn: getClientApi,
  });

  return { ...clientQuery };
};

export default useGetClient;
