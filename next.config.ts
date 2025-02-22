/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the experimental section if it only contained appDir
  // If you have other experimental features, keep them and remove only appDir
  env: {
    ORACLE_USER: process.env.ORACLE_USER,
    ORACLE_PASSWORD: process.env.ORACLE_PASSWORD,
    ORACLE_CONNECTION_STRING: process.env.ORACLE_CONNECTION_STRING,
  },
}

module.exports = nextConfig