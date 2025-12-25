export const dynamicParams = false

export function generateStaticParams() {
  return [{ slug: "hello" }]
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const { slug } = await props.params
  const { default: Post } = await import(`@/content/${slug}.mdx`)

  return <Post />
}
