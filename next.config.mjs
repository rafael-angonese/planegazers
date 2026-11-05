/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // `next export` foi removido; o script `npm run export` ativa a exportação estática.
  ...(process.env.NEXT_OUTPUT_EXPORT === "true" && { output: "export" }),
};

export default nextConfig;
