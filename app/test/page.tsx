import { Spacer } from "@nattui/react-components"
import { CarouselTrending } from "@/app/test/carousel-trending"

export default function TestPage() {
  return (
    <div className="overflow-hidden">
      <Spacer className="h-128" />
      <p className="mx-16 font-500 text-18 text-gray-12">Trending Tokens</p>
      <p className="mx-16 font-400 text-14 text-gray-11">Latest market news</p>
      <Spacer className="h-12" />
      <CarouselTrending />
      <Spacer className="h-128" />
    </div>
  )
}
