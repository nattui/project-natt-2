import { Input, Label, Spacer } from "@nattui/react-components"
import type { PropsWithChildren } from "react"

export default function ResourcesLayout(props: PropsWithChildren) {
  const { children } = props

  return (
    <div className="px-16 pt-64">
      <Spacer className="h-64" />
      <div className="mx-auto flex max-w-672 flex-col">
        {children}
        <Label
          className="font-500"
          htmlFor="email"
        >
          Email
        </Label>
        <Spacer className="h-4" />
        <Input
          className="max-w-320"
          id="email"
          name="email"
          placeholder="Enter your email"
          size={44}
          type="text"
        />
      </div>
    </div>
  )
}
