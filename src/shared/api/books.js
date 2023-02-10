import axios from "axios";

const instance = axios.create({
  baseURL: "https://63e6769c83c0e85a86945f6f.mockapi.io/books",
});

export const getBooks = async () => {
  const { data } = await instance.get("/");
  return data;
};
