import apolloClient from "../apollo";
import { gql } from "@apollo/client";

export const discoverData = (): any => {
  const PostXL = apolloClient.query({
    query: gql`
      query GetPost {
        post(postId: 1) {
          id
          created
          title
          miniTitle
          body
          postImages {
            url
          }
        }
      }
    `,
  });
  const PostMD = apolloClient.query({
    query: gql`
      query GetPostList {
        postList(category: 2) {
          id
          title
          miniTitle
          body
          postImages {
            url
          }
        }
      }
    `,
  });
  const PostSM = apolloClient.query({
    query: gql`
      query GetPostList {
        postList(category: 2) {
          id
          title
          miniTitle
          body
          postImages {
            url
          }
        }
      }
    `,
  });
  const AppMD = apolloClient.query({
    query: gql`
      query GetAppList {
        appsList(category: 1) {
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
      }
    `,
  });
  const AppLG = apolloClient.query({
    query: gql`
      query GetAppList {
        appsList(category: 2) {
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
      }
    `,
  });
  return {
    PostXL,
    PostMD,
    PostSM,
    AppMD,
    AppLG,
  };
};
