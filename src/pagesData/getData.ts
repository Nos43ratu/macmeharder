import { apiURL } from "../utils/URI";

export const getPostList = async (category) => {
  const res = await fetch(`${apiURL}`);
  return await res.json();
};
export const getAppList = async (category) => {
  const res = await fetch(`${apiURL}`);
  return await res.json();
};
export const getPost = async (category) => {
  const res = await fetch(`${apiURL}`);
  return await res.json();
};
export const getApp = async (category) => {
  const res = await fetch(`${apiURL}`);
  return await res.json();
};
