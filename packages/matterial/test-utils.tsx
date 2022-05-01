import { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

// Example of wrapping a test
function ThemeProvider({ theme, children }: any) {
  return <div className={`theme--${theme}`}>{children}</div>
}

const AllTheProviders: FC = ({ children }: any) => {
  return <ThemeProvider theme="light">{children}</ThemeProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
