// Can't config webpack to exclude next/link from bundle...
// Until this is resolved, this component should not be used
// Use <NextLink href="#" passHref><Link>...</Link></NextLink> instead
// import NextLink_, { LinkProps as NextLink_Props } from 'next/link'
// import { Link, LinkProps } from './link'

// export const NextLink = (props: LinkProps & NextLink_Props) => {
//   const { children, color, unstyled, ...rest } = props

//   return (
//     <NextLink_ passHref {...rest}>
//       <Link color={color} unstyled={unstyled}>
//         {children}
//       </Link>
//     </NextLink_>
//   )
// }
