import { Spacer } from "@nattui/react-components"
import Link from "next/link"
import { getContents } from "@/utils/get-contents"

export default function BlogPage() {
  const contents = getContents()

  return (
    <>
      <h1 className="mx-auto text-center">The Interface</h1>
      <p className="mx-auto text-center">
        Stay up to date with my thoughts on design and engineering
      </p>
      <Spacer className="h-32" />

      {contents.map((content) => (
        <Link
          className="w-fit hover:underline"
          href={`/blog/${content.slug}`}
          key={content.slug}
        >
          {content.title}
        </Link>
      ))}
    </>
  )
}
