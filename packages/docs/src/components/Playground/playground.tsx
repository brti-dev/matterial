export default {}
// import React from 'react'
// import dynamic from 'next/dynamic'
// import { Loader } from '../../../../matterial/src/components'
// import { useConfigs } from 'lib/config-context'
// import Title from './title'

// const DynamicLive = dynamic(() => import('./dynamic-live'), {
//   ssr: false,
//   loading: () => (
//     <div style={{ padding: '20pt 0' }}>
//       <Loader />
//     </div>
//   ),
// })

// export type PlaygroundProps = {
//   title?: React.ReactNode | string
//   desc?: React.ReactNode | string
//   code: string
//   scope: {
//     [key: string]: any
//   }
// }

// const defaultProps = {
//   desc: '',
//   code: '',
//   bindings: {},
// }

// const Playground: React.FC<PlaygroundProps> = React.memo(
//   ({
//     title: inputTitle,
//     code: inputCode,
//     desc,
//     scope,
//   }: PlaygroundProps & typeof defaultProps) => {
//     const code = inputCode.trim()
//     const title = inputTitle || 'General'

//     return (
//       <>
//         <Title title={title} desc={desc} />
//         <div className="playground">
//           <DynamicLive code={code} scope={scope} />
//           <style jsx>{`
//             .playground {
//               width: 100%;
//               border: 1px solid ${theme.palette.accents_2};
//             }
//           `}</style>
//         </div>
//       </>
//     )
//   }
// )

// Playground.defaultProps = defaultProps
// Playground.displayName = 'GeistPlayground'
// export default Playground
