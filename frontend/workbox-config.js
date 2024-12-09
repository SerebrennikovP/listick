module.exports = {
    globDirectory: "build/",
    globPatterns: [
      "**/*.{html,js,ts,css,png,jpg,svg}"
    ],
    swDest: "build/service-worker.js",
    runtimeCaching: [
      {
        urlPattern: ({ url }) => url.origin === self.location.origin,
        handler: "CacheFirst",
        options: {
          cacheName: "static-resources",
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 30 * 24 * 60 * 60
          }
        }
      },
      {
        urlPattern: ({ url }) => url.origin !== self.location.origin,
        handler: "NetworkFirst",
        options: {
          cacheName: "external-resources",
          expiration: {
            maxEntries: 30,
            maxAgeSeconds: 7 * 24 * 60 * 60
          }
        }
      }
    ]
  };
  