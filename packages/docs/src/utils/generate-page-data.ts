import { Metadata, Viewport } from 'next'

type PageData = { metadata?: Metadata; viewport?: Viewport }

export default function generatePageData({
  metadata,
  viewport,
}: PageData = {}): PageData {
  const metadataWithDefaults = {
    ...metadata,
    title: metadata?.title ?? 'Matterial UI -- A design system by Matt Berti',
    description:
      metadata?.description ??
      'A design system by Matt Berti, built using React and Typescript',
  }
  const viewportWithDefaults = {
    ...viewport,
    width: viewport?.width ?? 'device-width',
    initialScale: viewport?.initialScale ?? 1.0,
  }

  return { metadata: metadataWithDefaults, viewport: viewportWithDefaults }
}
