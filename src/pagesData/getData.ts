import { apiURL } from "../utils/URI";

export const API = `http://${apiURL}/graphql/`;

export const getPostList = async (category) => {
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
export const getAppList = async (category) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
    query {
    appsList(category: ${category}) {
    id
    title
    appAvatar {
      url
    }
    description
    category {
      id
      name
    }
    appImages {
      url
    }
  }
    }`,
    }),
  });

  const data = await res.json();
  return data.data.appsList;
};
export const getPost = async (id) => {
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
export const getApp = async (id) => {
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
