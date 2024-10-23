/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.mytutor.co.uk",
      },
      {
        protocol: "https",
        hostname: "cdn-prod.mytutor.co.uk",
      },
      {
        protocol: "https",
        hostname: "oaknationalacademy-res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
