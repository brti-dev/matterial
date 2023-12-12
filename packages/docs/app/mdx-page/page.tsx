// components/mdx-remote.js
import { MDXRemote } from 'next-mdx-remote/rsc'

const components = {
  h1: props => (
    <h1 {...props} className="large-text">
      {props.children}
    </h1>
  ),
}

function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}

export default function Home() {
  return (
    <CustomMDX
      // h1 now renders with `large-text` className
      source={`# Hello World
      This is from Server Components!
    `}
    />
  )
}
