import { apiURL } from "./URI";

export const API = `http://${apiURL}`;

export const getPostList = async (category: number) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
    query {
       postList(category: ${category}) {
          id
          created
          title
          miniTitle
          body
          postImages {
            url
          }
        }
    }`,
    }),
  });
  const data = await res.json();
  return data.data.postList;
};
export const getAppList = async (category: number) => {
  const uri = API + "/applications/?page=1&size=25";
  const res = await fetch(uri, {
    method: "GET",
  });
  const data = await res.json();
  return data;
};
export const getPost = async (id: number) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
    query {
       post(postId: ${id}) {
          id
          created
          title
          miniTitle
          body
          postImages {
            url
          }
        }
    }`,
    }),
  });
  const data = await res.json();
  return data.data.post;
};
export const getApp = async (id: number) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
    query {
       app(appId: ${id}) {
    id
    created
    title
    language
    languageCount
    description
    size
    award
    place
    age
    category {
      id
      name
    }
    developer
    chart
    version
    appAvatar {
      url
    }
    compatibility
    appImages {
      url
    }
  }
    }`,
    }),
  });
  const data = await res.json();
  return data.data.app;
};
