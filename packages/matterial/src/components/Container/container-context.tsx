import { createContext } from 'react'

type Context = { orientation: 'column' | 'row' }

const ContainerContext = createContext<Context>({ orientation: 'column' })

export default ContainerContext
