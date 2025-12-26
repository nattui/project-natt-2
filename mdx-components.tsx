import type { MDXComponents } from "mdx/types"

const components: MDXComponents = {
  code: (props) => (
    <code
      className="font-mono text-primary-11"
      {...props}
    />
  ),
  h1: (props) => (
    <h1
      className="mb-16 text-36"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mb-16 text-20"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="mb-24 text-16 leading-[1.825]"
      {...props}
    />
  ),
}

export function useMDXComponents(): MDXComponents {
  return components
}
