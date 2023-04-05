import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteClientApi } from "../../api/ClientApi/deleteClientApi";

const useDeleteClient = () => {
  const queryClient = useQueryClient();

  const clientMutation = useMutation({
    mutationFn: deleteClientApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
  });

  return clientMutation;
};

export default useDeleteClient;
