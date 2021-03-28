type Token = {
  value: string;
  expiresIn: number;
  token: string;
};

export const tokenProvider = () => {
  const canUseDom = typeof window !== "undefined";

  const token = canUseDom && window.localStorage.getItem("authToken");

  const getToken = () => {
    if (!canUseDom) return;
    token && JSON.parse(token).value;
  };

  const isLoggedIn = () => {
    if (!canUseDom) return;
    return !!token;
  };

  const removeToken = () => {
    if (!canUseDom) return;
    token && window.localStorage.removeItem("authToken");
  };

  const setToken = (token: Token) => {
    if (!canUseDom) return;
    window.localStorage.setItem(
      "authToken",
      JSON.stringify({
        ...token,
        expiresIn: new Date().getTime() + token.expiresIn * 1000,
      })
    );
  };
  return { getToken, isLoggedIn, setToken, removeToken };
};
