import { Spacer } from "@nattui/react-components"
import { CarouselTrending } from "@/app/test/carousel-trending"

export default function TestPage() {
  return (
    <div className="overflow-hidden">
      <Spacer className="h-128" />
      <CarouselTrending />
      <Spacer className="h-128" />
    </div>
  )
}
