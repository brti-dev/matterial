This is a starter for a Next.js app bootstrapped with TypeScript and test suites. It's packaged with helper libraries, React hooks, and [Matterial UI](https://matterial.brti.dev), a design system with tested and accessible UI components, responsive page design, and automated light and dark themes based on `prefers-color-scheme` media query.

## Getting Started

If using as a starter for a new app:

```bash
npx create-next-app my-app --use-npm --example "https://github.com/dr-spaceman/next.js-starter"
```

After initializing the app run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Config vars are stored in `package.json`. Edit `siteTitle` and `pages` to declare the basic structure of the app.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Run Tests

Tests use Jest and React Testing Library to test UI components and units. Use `npm run test` or `npm run test:watch` to initialize tests.

## Config

### [Static Export](https://nextjs.org/docs/advanced-features/static-html-export)

1. In `next.config.js` set `trailingSlash` to `false`.
2. Run `next build` instead of `npm run build`

## Merging after changes to this repo

1. Add this remote to the other project repo, eg. `git remote add starter ./path_to_this_repo/next.js-starter/.git`
2. Pull the files `git pull starter`
3. Merge the files: Merge everything `git merge starter/main` OR a selection `git checkout starter/main <FILES OR PATHS>`

## UI Component Documentation

This starter comes packaged with a selection of common UI components. See [Matterial UI documentation](https://matterial.brti.dev) for instructions on the use of a some of the components available.

## Used to Build

- [mattberti.com](https://mattberti.com)
- [brandonpaillant.com](https://brandenpaillant.com)
- [Boat Daddy](https://boatdaddy.app)
- [Customer Direct](https://customerdirect.net)
