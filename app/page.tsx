export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Topbar */}
      <div className="d fixed top-0 right-0 left-0 z-10 h-64 bg-primary-1">topbar</div>

      {/* Section 1 */}
      <section className="h-[1200px] pt-64">splash</section>

      {/* Section 2 */}
      <section className="d h-[2200px]">
        <div className="d sticky top-64 h-dvh w-[200px] bg-primary-1">cat</div>
      </section>

      {/* Section 3 */}
      <section className="h-[600px]">footer</section>
    </div>
  )
}
