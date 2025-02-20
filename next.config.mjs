/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com", // Example for Unsplash
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "www.logodesign.net", // Allowing logodesign.net images
          port: "",
          pathname: "/**",
        },
      ],
    },
  };
  
  export default nextConfig;
  