import { Button } from '../Button'
import { Dialog, useDialog } from '../Dialog'

export function DialogExample() {
  const [active, open, close] = useDialog(false)

  return (
    <>
      <Button variant="contained" color="primary" onClick={open}>
        Open Dialog
      </Button>
      <Dialog active={active} closable onDismiss={close} labelledBy="foo">
        <h5 id="foo">Foo</h5>
        <p>
          Culpa nostrud sint elit duis ad aute aliqua non cupidatat eiusmod
          consequat adipisicing.
        </p>
        <div className="surface">
          Nisi eiusmod sint sunt enim adipisicing eiusmod id ipsum anim magna
          sunt.
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={close}>Close Dialog</Button>
        </div>
      </Dialog>
    </>
  )
}
