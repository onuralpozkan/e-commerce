import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../requests/categories.request";

export const useCategoriesQuery = (enabled = false) =>
  useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
    enabled,
  });
