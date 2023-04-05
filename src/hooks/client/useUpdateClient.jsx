import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateClientApi } from "../../api/ClientApi/updateClientApi copy";

const useUpdateClient = () => {
  const queryClient = useQueryClient();

  const clientMutation = useMutation({
    mutationFn: updateClientApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
  });

  return clientMutation;
};

export default useUpdateClient;
