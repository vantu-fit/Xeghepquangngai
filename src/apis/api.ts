import http from "../http/http";
import { ResponseApi } from "../types/response";
import { Price } from "../types/types";
export const getPrice = async () => {
  const result = await http.get("/users/price");
  // console.log(result)
  return result.data as ResponseApi<Price[]>;
};


export const getPost = async () => {
  const result = await http.get("/users/post");
  
  return result.data;
};

export const getPostId = async (id: string) => {
  const post = await http.get(`/users/post/${id}`);
  return post.data;
};
export const getImageName = async () => {
    const post = await http.get(`/users//image-name`);
    return post.data as ResponseApi<string[]>;
  };
