import { createContext } from 'react'

type LinkProps = {
  href: any // Could be something like a UrlObject
}
/**
 * @example
 * const a: AppConfig = { linkComponent: 'a' }
 * const b: AppConfig = {
 *   linkComponent: (p: { href: string } & RequiredChildren) => (
 *     <a href={p.href}>{p.children}</a>
 *   ),
 * }
 * const c: AppConfig = { linkComponent: NextLink }
 */
export type AppConfig = {
  linkComponent?:
    | string
    | ((props: LinkProps & { children: React.ReactNode }) => JSX.Element)
    | React.ComponentType<LinkProps>
    | React.ForwardRefExoticComponent<LinkProps>
}
type DefinedAppConfig = Required<AppConfig>

export const defaultAppConfig: DefinedAppConfig = {
  linkComponent: 'a',
}

const AppContext = createContext<DefinedAppConfig>(defaultAppConfig)

export default AppContext
