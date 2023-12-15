# Matterial UI

A design system by [Matt Berti](https://brti.dev).

## Setup

To begin, install the package in your existing project folder.

`npm i matterial`

Use Matterial's `<Html>` and `<Body>` components in your root layout:

```jsx
// app/layout.tsx

import { Html, Body } from 'matterial'
import 'src/styles/main.scss' // Your additional styles

export default function Layout({ children }) {
  return (
    <Html>
      <Body>{children}</Body>
    </Html>
  )
}
```

Use Matterial's `<Page>` component in your page:

```jsx
// app/page.tsx

import { Page } from 'matterial'

export default function AppPage() {
  return <Page>Hello, world</Page>
}
```

Import components to use them in your app:

```jsx
// src/components/my-component.tsx

import { Button, Container } from 'matterial'

export default function MyComponent() {
  return (
    <Container row>
      <Button variant="contained" color="primary">
        Foo
      </Button>
      <Button variant="contained" color="secondary">
        Bar
      </Button>
    </Container>
  )
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
- React 18
- Typescript
- Sass

## Used to Build

- [brti.dev](https://brti.dev)
- [Boat Dadddy](https://boatdaddy.app)
