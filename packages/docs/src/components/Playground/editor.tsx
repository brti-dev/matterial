// import React, { useState } from 'react'
// import { LiveEditor } from 'react-live'

// const RightIcon = (props: any) => <b>&gt;</b>

// interface Props {
//   code: string
// }

// const Editor: React.FC<Props> = ({ code }) => {
//   const [visible, setVisible] = useState(false)

//   const clickHandler = (event: React.MouseEvent) => {
//     event.stopPropagation()
//     event.preventDefault()
//     setVisible(!visible)
//   }

//   return (
//     <div className="editor">
//       <details open={visible}>
//         <summary onClick={clickHandler}>
//           <div className="summary-safari">
//             <div className="action">
//               <span className="arrow">
//                 <RightIcon size={16} />
//               </span>
//               <span>Code Editor</span>
//             </div>
//             <div className="action"></div>
//           </div>
//         </summary>
//         <div className="area">
//           <LiveEditor />
//         </div>
//       </details>

//       <style jsx>{`
//         .editor {
//         }
//         details {
//           transition: all 0.2s ease;
//           overflow: hidden;
//         }
//         details summary::-webkit-details-marker {
//           display: none;
//         }
//         summary {
//           box-sizing: border-box;
//           border-top: 1px solid var(--color-accent-2);
//           color: var(--color-accent-5);
//           width: 100%;
//           list-style: none;
//           user-select: none;
//           outline: none;
//         }
//         .summary-safari {
//           box-sizing: border-box;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           width: 100%;
//           height: 2.875rem;
//           padding: 0 var(--space);
//         }
//         summary :global(svg) {
//           cursor: pointer;
//         }
//         .action {
//           width: auto;
//           display: flex;
//           align-items: center;
//           font-size: 0.8rem;
//         }
//         .area {
//           position: relative;
//           box-sizing: border-box;
//           white-space: pre;
//           font-family: mono;
//           color: var(--color-foreground);
//           background-color: var(--color-background);
//           font-size: 1em;
//           overflow: hidden;
//           border-top: 1px solid var(--color-accent-2);
//           padding: calc(var(--space) / 2);
//         }
//         .arrow {
//           transition: all 0.2s ease;
//           transform: rotate(${visible ? 90 : 0}deg);
//           display: inline-flex;
//           align-items: center;
//           width: 1rem;
//           height: 1rem;
//           margin-right: 0.5rem;
//         }
//       `}</style>
//     </div>
//   )
// }

// export default Editor
