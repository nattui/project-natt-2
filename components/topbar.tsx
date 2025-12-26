import Link from "next/link"
import { Logomark } from "@/components/logomark"
import { Logotype } from "@/components/logotype"

export function Topbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-10 flex h-64 items-center border-gray-6 border-b bg-gray-2 px-16">
      <div className="mx-auto flex w-full max-w-768 items-center justify-between">
        {/* Brand */}
        <Link
          className="-ml-8 flex w-fit items-center justify-center gap-x-8 p-8 transition-opacity hover:opacity-50"
          href="/"
        >
          <Logomark />
          <Logotype />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-x-12">
          <Link
            className="font-500 text-14 hover:underline"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="font-500 text-14 hover:underline"
            href="/resources/checklist"
          >
            Checklist
          </Link>
        </nav>
      </div>
    </header>
  )
}
