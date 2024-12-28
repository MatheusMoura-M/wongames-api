export default {
  routes: [
    {
      method: "GET",
      path: "/banners",
      handler: "banner.find",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/banners",
      handler: "banner.create",
      config: {
        policies: [],
      },
    },
  ],
};
