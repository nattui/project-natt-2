import { Input, Label, Spacer } from "@nattui/react-components"
import type { MDXComponents } from "mdx/types"
import type { ComponentProps } from "react"
import { highlight } from "sugar-high"

const components: MDXComponents = {
  code: (props) => <Code {...props} />,
  h1: (props) => (
    <h1
      className="mb-16 text-36"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mb-16 text-24"
      {...props}
    />
  ),
  Input,
  Label,
  p: (props) => (
    <p
      className="mb-24 text-16 leading-[1.825]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mb-24 overflow-x-auto rounded-8 bg-gray-3 p-16 text-13"
      {...props}
    />
  ),
  Spacer,
}

export function useMDXComponents(): MDXComponents {
  return components
}

function Code(props: ComponentProps<"code">) {
  const { children, ...rest } = props
  const codeHTML = highlight(String(children))

  return (
    <code
      className="rounded-4 bg-gray-3 px-6 py-2 font-mono text-14"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: We need to use dangerouslySetInnerHTML to render the code HTML
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...rest}
    />
  )
}
