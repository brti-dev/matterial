/**
 * Rewrites Next document tree. The only reason to do this is to inject `lang` prop into <html> tag..
 */
import Document, { Head, Main, NextScript } from 'next/document'
import { Html, Body, Layout } from 'matterial'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <Body>
          <Layout>
            <Main />
          </Layout>
          <NextScript />
        </Body>
      </Html>
    )
  }
}

export default MyDocument
