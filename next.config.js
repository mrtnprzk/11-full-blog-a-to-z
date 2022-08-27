/** @type {import('next').NextConfig} */

const {PHASE_DEVELOPMENT_SERVER} = require("next/constants");

const nextConfig = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
      return {
        env: {
          mongodb_username: "mrtnprzk",
          mongodb_password: "P5f7kHNt24U3zLVC",
          mongodb_clustername: "cluster0",
          mongodb_database: "my-site-dev",
        },
        reactStrictMode: true,
        swcMinify: true,
      };
    }
    return {
      env: {
        mongodb_username: "mrtnprzk",
        mongodb_password: "P5f7kHNt24U3zLVC",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site",
      },
      reactStrictMode: true,
      swcMinify: true,
    };
  
};

module.exports = nextConfig;
