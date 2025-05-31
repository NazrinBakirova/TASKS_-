import axios from "axios";

const API = axios.create({
  baseURL: "https://dummyjson.com",
});

export const fetchProductsByCategory = (category) => {
  return API.get(`/products/category/${category}`);
};
