import type { PropsWithChildren } from "react"

export default function ResourcesLayout(props: PropsWithChildren) {
  const { children } = props

  return <div className="flex flex-col pt-64">{children}</div>
}
