/**
 * Rewrites Next document tree. The only reason to do this is to inject `lang` prop into <html> tag..
 */
import Document, { Head, Main, NextScript } from 'next/document'
import { Html, Body, Page } from 'matterial'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <Body>
          <Page>
            <Main />
          </Page>
          <NextScript />
        </Body>
      </Html>
    )
  }
}

export default MyDocument
