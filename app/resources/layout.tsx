import { Spacer } from "@nattui/react-components"
import type { PropsWithChildren } from "react"

export default function ResourcesLayout(props: PropsWithChildren) {
  const { children } = props

  return (
    <div className="px-16 pt-64">
      <Spacer className="h-64" />
      <div className="mx-auto flex max-w-672 flex-col">{children}</div>
    </div>
  )
}
