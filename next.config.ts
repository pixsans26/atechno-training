
module.exports = {


  reactStrictMode: true,
  crossOrigin: 'anonymous',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },


  async headers() {
    return [
      {
        // Define the API endpoint you want to allow CORS for
        source: "/items/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Change this to the origin you want to allow, or "*" to allow all origins
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS, PUT, DELETE",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Authorization",
          },
        ],
      },
    ];
  },

}
