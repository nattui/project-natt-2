import fs from "node:fs"
import path from "node:path"

export const dynamicParams = false

export function generateStaticParams() {
  // Gets files in `content` directory
  const files = fs.readdirSync(path.join("content"))

  // Get params with slug
  const params = files.map((filename) => {
    return {
      slug: filename.replace(".mdx", ""),
    }
  })

  return params
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const { slug } = await props.params
  const { default: Post } = await import(`@/content/${slug}.mdx`)

  return <Post />
}
