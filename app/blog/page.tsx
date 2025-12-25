import Link from "next/link"

export default function BlogPage() {
  // I want to show all the blog posts in a list

  return (
    <div className="flex flex-col">
      <Link
        className="w-fit hover:underline"
        href="/blog/2025-12-25-hello"
      >
        Hello
      </Link>
      <Link
        className="w-fit hover:underline"
        href="/blog/2025-12-25-world"
      >
        World
      </Link>
    </div>
  )
}
