import { VisuallyHidden } from './visually-hidden'

function VisuallyHiddenExample() {
  return (
    <button>
      <VisuallyHidden>Save</VisuallyHidden>
      <svg aria-hidden>
        <path d="M16 18l8-8h-6v-8h-4v8h-6zM23.273 14.727l-2.242 2.242 8.128 3.031-13.158 4.907-13.158-4.907 8.127-3.031-2.242-2.242-8.727 3.273v8l16 6 16-6v-8z"></path>
      </svg>
    </button>
  )
}

export default VisuallyHiddenExample
