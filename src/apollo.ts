import { ApolloClient, InMemoryCache } from "@apollo/client";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { apiURL } from "./utils/URI";

export const API = `http://${apiURL}/graphql/`;

const httpLink = new HttpLink({
  uri: API,
  credentials: "same-origin",
  fetchOptions: {
    mode: "cors",
  },
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log("graphQLErrors", graphQLErrors);
  }
  if (networkError) {
    console.log("networkError", networkError);
  }
});
const request = (operation) => {
  let token = JSON.parse(localStorage.getItem("tokenData"));
  if (token && token.expiresIn < new Date().getTime()) {
    try {
      token = refreshToken(token.value, token.refreshToken);
    } catch (e) {
      localStorage.removeItem("tokenData");
      window.location.href = "/sign-in";
      throw new Error("Failed to fetch fresh access token");
    }
  }
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token.value}` : "",
    },
  });
};

const requestLink = new ApolloLink((operation, forward) => {
  request(operation);
  return forward(operation);
});
const link = ApolloLink.from([errorLink, requestLink, httpLink]);

export const refreshToken = async (token, refreshToken) => {
  const fetchResult = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: `
      mutation {
        guest {
          users {
            refreshSession(refreshToken: "${refreshToken}" ) {
              value
              refreshToken
              expiresIn
            }
          }
        }
      }
    `,
    }),
  });

  const refreshResponse = await fetchResult.json();

  const refreshSession = refreshResponse.data.guest.users.refreshSession;
  localStorage.setItem(
    "tokenData",
    JSON.stringify({
      expiresIn: new Date().getTime() + refreshSession.expiresIn * 1000,
      refreshToken: refreshSession.refreshToken,
      value: refreshSession.value,
    })
  );
  return refreshSession;
};

const apolloClient = new ApolloClient({
  // @ts-ignore
  link: link,
  cache: new InMemoryCache(),
});

export default apolloClient;
