'use client'

import type { AppConfig } from '../../contexts/app-context'
import AppContext, { defaultAppConfig } from '../../contexts/app-context'
import { RequiredChildren } from '../../interfaces/children'

import '../../styles/main.scss'

export type HtmlProps = {
  config?: AppConfig
} & React.ComponentPropsWithoutRef<'html'> &
  RequiredChildren

export function Html({
  children,
  config = {},
  lang = 'en',
  ...props
}: HtmlProps): JSX.Element {
  const configComplete = { ...defaultAppConfig, ...config }

  return (
    <html lang={lang} {...props}>
      <AppContext.Provider value={configComplete}>
        {children}
      </AppContext.Provider>
    </html>
  )
}
