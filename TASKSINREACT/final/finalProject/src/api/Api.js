import axios from "axios";

const API = axios.create({
  baseURL: "https://dummyjson.com",
});

export const fetchProducts = () => {
  return API.get("/products");
};
