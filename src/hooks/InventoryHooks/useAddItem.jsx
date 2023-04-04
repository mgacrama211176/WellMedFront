import React from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { addItemApi } from "../../api/InventoryApi/InventoryApi";

const useAddClient = () => {
  const queryClient = useQueryClient();

  const itemMutation = useMutation({
    mutationFn: addItemApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
  });

  return itemMutation;
};

export default useAddClient;
