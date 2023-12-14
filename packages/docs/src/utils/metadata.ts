import { Metadata } from 'next'

export default function metadata(
  props?: { title?: string; description?: string },
  metadata?: Omit<Metadata, 'title'>
): Metadata {
  return {
    title: props?.title ?? 'Matterial UI -- A design system by Matt Berti',
    description:
      props?.description ??
      'A design system by Matt Berti, built using React and Typescript',
    viewport: { width: 'device-width', initialScale: 1.0 },
    ...metadata,
  }
}
