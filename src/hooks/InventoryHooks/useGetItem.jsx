import { useQuery } from "@tanstack/react-query";
import { getItemApi } from "../../api/InventoryApi/GetItemsApi";

const useGetItem = () => {
  const itemQuery = useQuery({
    queryKey: ["items"],
    queryFn: getItemApi,
  });

  return { ...itemQuery };
};

export default useGetItem;
