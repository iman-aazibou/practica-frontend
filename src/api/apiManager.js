import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const getItems = async () => {
  const response = await axios.get(BASE_URL + "/products");
  return response;
};

export const getCategories = async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  return response;
};
