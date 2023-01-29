import axios from "axios";

export const api = axios.create({
  baseURL:
    "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC",
});
