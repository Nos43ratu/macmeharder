import { useCallback, useEffect, useState } from "react";
import { errorHandler } from "./errorHandler";
import { tokenProvider } from "./tokenProvierd";

type Options = {
  method?: "DELETE" | "GET" | "HEAD" | "OPTIONS" | "POST" | "PUT" | "PATCH";
  mode?: RequestMode;
  cache?: RequestCache;
  headers?: HeadersInit;
  credentials?: RequestCredentials;
  redirect?: RequestRedirect;
  body?: BodyInit;
};

type Props = {
  url: string;
  options: Options;
};

export const useFetch = ({ url, options }: Props) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const { isLoggedIn, getToken } = tokenProvider();
  const { body, method } = options;

  const headers = {
    ...options.headers,
    Authorization: isLoggedIn() ? `Bearer ${getToken()}` : ``,
  };

  const fetchData = useCallback(() => {
    setLoading(true);
    fetch(url, {
      body,
      headers,
      method,
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        errorHandler(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, []);

  return [() => fetchData(), data, loading, error];
};
