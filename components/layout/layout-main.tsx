import { Spacer } from "@nattui/react-components"
import type { PropsWithChildren } from "react"

export function LayoutMain(props: PropsWithChildren) {
  const { children } = props

  return (
    <div className="px-16">
      <Spacer className="h-128" />
      <div className="mx-auto flex max-w-672 flex-col">{children}</div>
      <Spacer className="h-256" />
    </div>
  )
}
