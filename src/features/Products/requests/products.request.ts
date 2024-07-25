import base from "../../../common/config/base.config";
import apiClient from "../../../common/services/apiClient";
import { Product } from "../types/product.type";

export const getProducts = async (): Promise<Product[]> => {
  const { products } = base.endpoints;
  const response = await apiClient.get<Product[]>(products);
  return response.data;
};

/*
id	number	The id of the product.
title	string	The name of the product.
price	number	Price the product.
description	string	Description the product.
category	number	Object of category.
images	string[]	List of images like URLs.
*/
