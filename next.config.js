module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/discover",
        permanent: true,
      },
    ];
  },
  images: {
    domains: [
      "sun9-2.userapi.com",
      "sun9-55.userapi.com",
      "sun9-14.userapi.com",
      "sun9-19.userapi.com",
      "sun9-60.userapi.com",
      "sun9-63.userapi.com",
      "sun9-68.userapi.com",
      "sun9-57.userapi.com",
      "hotpot.ai",
    ],
  },
};
