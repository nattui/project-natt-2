"use client"

import { IconNotebook } from "@nattui/icons-line"
import { Button, Spacer } from "@nattui/react-components"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  function onRoute() {
    router.push("/blog")
  }

  return (
    <div className="flex flex-col">
      {/* Topbar */}
      <div className="d fixed top-0 right-0 left-0 z-10 h-64 bg-gray-2">topbar</div>

      {/* Section 1 */}
      <section className="flex h-[1200px] flex-col px-16">
        <Spacer className="h-192" />
        <h1 className="mx-auto text-center text-72 leading-[1.1] max-768:max-w-320 max-768:text-48">
          Software
          <br />
          Meets Design
        </h1>
        <Spacer className="h-16" />
        <p className="mx-auto max-w-512 hyphens-none text-center text-[22px] max-768:text-18">
          Design engineer crafting refined applications, interfaces, and experiences. Dreamer and
          doer.
        </p>
        <Spacer className="h-24" />
        <div className="mx-auto flex items-center justify-center">
          <Button
            iconEnd={<IconNotebook size={16} />}
            onClick={onRoute}
            variant="secondary"
          >
            Blog
          </Button>
        </div>
      </section>

      {/* Section 2 */}
      <section className="d h-[2200px]">
        <div className="d sticky top-64 h-dvh w-[200px] bg-gray-2">cat</div>
      </section>

      {/* Section 3 */}
      <section className="h-[600px]">footer</section>
    </div>
  )
}
