# Matterial UI

A design system by [Matt Berti](https://brti.dev).

## Setup

First, install the package in your project directory.

```
npm i matterial
```

Then import `main.css` into your app entry in the appropriate load order.

On a Next.js app, you would do something like the following:

```jsx
// ./pages/_app.tsx
import type { AppProps } from 'next/app'
import 'normalize.css' // If using
import '../node_modules/matterial/dist/main.css'
import 'styles/custom.scss' // Overwrite main.css

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

## Docs

Visit official [documentation](https://matterial.brti.dev).

## Contributing

Feel free to file a PR if you want to help improve this project. :)

## License

Apache 2.0.

## Built With

- [Reach UI](https://reach.tech)
- React
- Typescript
- Sass

## Used to Build

- [brti.dev](https://brti.dev)
- [Boat Dadddy](https://boatdaddy.app)
