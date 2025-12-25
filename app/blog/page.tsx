import Link from "next/link"
import { getContents } from "@/utils/get-contents"

export default function BlogPage() {
  const contents = getContents()
  console.log(":::: contents:", contents)

  return (
    <div className="flex flex-col">
      {contents.map((content) => (
        <Link
          className="w-fit hover:underline"
          href={`/blog/${content.slug}`}
          key={content.slug}
        >
          {content.title}
        </Link>
      ))}
    </div>
  )
}
