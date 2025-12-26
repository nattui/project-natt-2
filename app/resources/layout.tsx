import { Input, Label, Spacer } from "@nattui/react-components"
import type { PropsWithChildren } from "react"
import { LayoutMain } from "@/components/layout/layout-main"

export default function ResourcesLayout(props: PropsWithChildren) {
  const { children } = props

  return (
    <LayoutMain>
      {children}
      <Label htmlFor="email">Email</Label>
      <Spacer className="h-4" />
      <Input
        className="max-w-320"
        id="email"
        name="email"
        placeholder="Enter your email"
        size={44}
        type="text"
      />
    </LayoutMain>
  )
}
