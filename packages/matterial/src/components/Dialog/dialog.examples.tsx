import { Button } from '../Button'
import { Dialog, useDialog } from '.'
import { SubmitRow } from '../Form'

export function DialogExample() {
  const { active, open, close } = useDialog(false)

  return (
    <>
      <Button variant="contained" color="primary" onClick={open}>
        Open Dialog
      </Button>
      <Dialog active={active} closable onDismiss={close} title="Lorem Ipsum">
        <p>
          Culpa nostrud sint elit duis ad aute aliqua non cupidatat eiusmod
          consequat adipisicing.
        </p>
        <SubmitRow>
          <Button variant="contained" onClick={close}>
            Close Dialog
          </Button>
        </SubmitRow>
      </Dialog>
    </>
  )
}
