"use client"

import { IconArrowLeft, IconArrowRight } from "@nattui/icons-line"
import { Button } from "@nattui/react-components"
import { Carousel, useCarousel } from "motion-plus/react"
import trendingCoins from "@/app/test/trending.json"

const trendingItems = trendingCoins.map((trendingCoin) => (
  <CarouselTrendingItem
    item={trendingCoin}
    key={trendingCoin.coin.mint}
  />
))

interface TrendingCoin {
  description: string
  coin: {
    banner_uri?: string
    image_uri: string
    mint: string
    name: string
    reply_count?: number
    symbol: string
    usd_market_cap: number
    website?: string
  }
}

export function CarouselTrending() {
  return (
    <>
      <section className="flex w-full flex-col px-16">
        <Carousel
          align="start"
          axis="x"
          className="order-2"
          gap={16}
          items={trendingItems}
          loop={false}
          overflow
          snap="page"
        >
          <TrendingCarouselHeader />
        </Carousel>
      </section>
    </>
  )
}

interface CarouselItemProps {
  item: TrendingCoin
}

function CarouselTrendingItem(props: CarouselItemProps) {
  const { item } = props
  const { coin } = item

  return (
    <div className="relative flex aspect-3-2 h-192 cursor-pointer overflow-hidden rounded-12 border border-gray-6 border-solid transition-transform hover:scale-[1.025]">
      {/* Image */}
      <img
        alt={coin.name}
        className="absolute top-0 left-0 h-full w-full object-cover pb-24"
        draggable={false}
        src={coin.banner_uri ?? coin.image_uri}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full bg-linear-to-b from-transparent to-75% to-black px-12 py-16">
        {/* Name & Symbol */}
        <div className="flex items-end gap-x-6">
          <p className="truncate font-500 text-16 text-white">{coin.name}</p>
          <p className="mb-1 truncate text-14 text-gray-4">{coin.symbol}</p>
        </div>
        {/* Price & Market Cap */}
        <div className="flex items-center justify-between gap-x-12">
          <div className="flex items-end gap-x-2">
            <p className="font-500 text-18 text-[#00C35D]">+209.14%</p>
            <p className="mb-2 text-12 text-gray-9">24h</p>
          </div>
          <div className="flex items-end gap-x-2">
            <p className="font-500 text-18 text-white">
              ${formatTrendingCoinMarketCap(coin.usd_market_cap)}
            </p>
            <p className="mb-2 text-12 text-gray-9">MC</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function formatTrendingCoinMarketCap(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    notation: "compact",
  }).format(value)
}

function TrendingCarouselHeader() {
  const { nextPage, prevPage, isNextActive, isPrevActive } = useCarousel()

  return (
    <>
      <div className="order-1 mb-12 flex w-full items-center justify-between">
        {/* Title */}
        <div className="flex flex-col">
          <p className="font-500 text-18 text-gray-12">Trending Coins</p>
          <p className="font-400 text-14 text-gray-11">
            Top movers lighting up the market right now
          </p>
        </div>

        {/* Pagination */}
        <nav className="flex items-center gap-x-8">
          <Button
            iconOnly
            isDisabled={!isPrevActive}
            isRounded
            onClick={prevPage}
            variant="secondary"
          >
            <IconArrowLeft size={16} />
          </Button>
          <Button
            iconOnly
            isDisabled={!isNextActive}
            isRounded
            onClick={nextPage}
            variant="secondary"
          >
            <IconArrowRight size={16} />
          </Button>
        </nav>
      </div>
    </>
  )
}
