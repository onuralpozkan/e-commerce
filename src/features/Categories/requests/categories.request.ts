import base from "../../../common/config/base.config";
import apiClient from "../../../common/services/apiClient";
import { Category } from "../types/category.type";

export const getCategories = async (): Promise<Category[]> => {
  const { categories } = base.endpoints;
  const response = await apiClient.get<Category[]>(categories);
  return response.data;
};
