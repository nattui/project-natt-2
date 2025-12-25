import { Spacer } from "@nattui/react-components"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Topbar */}
      <div className="d fixed top-0 right-0 left-0 z-10 h-64 bg-primary-1">topbar</div>

      {/* Section 1 */}
      <section className="h-[1200px]">
        <Spacer className="h-192" />
        <h1 className="text-center text-72 leading-[1.1]">
          Software
          <br />
          Meets Design
        </h1>
        <Spacer className="h-16" />
        <p className="mx-auto max-w-512 text-center text-[22px]">
          Design engineer crafting refined applications, interfaces, and experiences. Dreamer and
          doer.
        </p>
      </section>

      {/* Section 2 */}
      <section className="d h-[2200px]">
        <div className="d sticky top-64 h-dvh w-[200px] bg-primary-1">cat</div>
      </section>

      {/* Section 3 */}
      <section className="h-[600px]">footer</section>
    </div>
  )
}
