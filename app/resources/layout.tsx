import type { PropsWithChildren } from "react"
import { LayoutMain } from "@/components/layout/layout-main"

export default function ResourcesLayout(props: PropsWithChildren) {
  const { children } = props

  return <LayoutMain>{children}</LayoutMain>
}
