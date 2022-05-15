export default {}
// import * as React from 'react'
// import { LivePreview, LiveProvider, LiveError } from 'react-live'
// import Editor from './editor'

// export interface Props {
//   code: string
//   scope: {
//     [key: string]: any
//   }
// }

// const DynamicLive: React.FC<Props> = ({ code, scope }) => {
//   return (
//     <LiveProvider code={code} scope={scope}>
//       <div className="wrapper">
//         <LivePreview />
//         <LiveError className="live-error" />
//       </div>
//       <Editor code={code} />
//       <style jsx>{`
//         .wrapper {
//           width: 100%;
//           padding: 1em;
//           display: flex;
//           flex-direction: column;
//           box-sizing: border-box;
//         }
//         .wrapper > :global(div) {
//           width: 100%;
//           background-color: transparent;
//         }
//         .wrapper > :global(.live-error) {
//           padding: 10px 12px 0 12px;
//           margin-bottom: 0;
//           border: 2px var(--color-error) dotted;
//           border-radius: 10px;
//           color: var(--color-error);
//           font-size: 13px;
//         }
//       `}</style>
//     </LiveProvider>
//   )
// }

// export default DynamicLive
