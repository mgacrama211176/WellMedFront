import React from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { addClientApi } from "../../api/addClientApi";

const useAddClient = () => {
  const queryClient = useQueryClient();

  const clientMutation = useMutation({
    mutationFn: addClientApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
  });

  return clientMutation;
};

export default useAddClient;
