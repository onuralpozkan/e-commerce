import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../requests/products.request";

export const useProductsQuery = (enabled = false) =>
  useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    enabled,
  });
