import { getContents } from "@/utils/get-contents"

export const dynamicParams = false

export function generateStaticParams() {
  const contents = getContents()
  const params = contents.map(({ slug }) => ({ slug }))
  return params
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const { slug } = await props.params
  const { default: Post } = await import(`@/content/${slug}.mdx`)

  return (
    <div className="flex flex-col [&>h2:first-of-type]:hidden [&>hr:first-of-type]:hidden">
      <Post className="" />
    </div>
  )
}
