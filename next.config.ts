import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "placeimg.com",
      //   pathname: "/**"
      // },
      // { protocol: "https", 
      //   hostname: "i.imgur.com", 
      //   pathname: "/**" 
      // }
    ]
  }
};

export default nextConfig;
