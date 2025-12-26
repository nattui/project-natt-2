import createMDX from "@next/mdx"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "tsx"],
  reactCompiler: true,
  reactStrictMode: false,
  typedRoutes: true,
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
