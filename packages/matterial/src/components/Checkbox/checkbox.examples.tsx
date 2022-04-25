import { Checkbox } from '.'
import { Container } from '../Container'
import { Form, useForm } from '../Form'

const FORM = {
  isDaddy: true,
  hasBoat: false,
}

export function CheckboxExample() {
  const { form, handleChange } = useForm(FORM)

  return (
    <Form>
      <Container row>
        <Checkbox
          name="isDaddy"
          checked={form.data.isDaddy}
          onChange={checked => handleChange('isDaddy', checked)}
        >
          I'm a daddy
        </Checkbox>
        <Checkbox
          name="hasBoat"
          checked={form.data.hasBoat}
          onChange={checked => handleChange('hasBoat', checked)}
        >
          I have a boat
        </Checkbox>
      </Container>
      <pre>
        <code>{JSON.stringify(form, null, 2)}</code>
      </pre>
    </Form>
  )
}

export function CheckboxSizesExample() {
  const { form, handleChange } = useForm({
    small: false,
    default: false,
    large: false,
    px: false,
  })

  return (
    <Container row center>
      <Checkbox
        size="small"
        checked={form.data.small}
        onChange={c => handleChange('small', c)}
      >
        Small
      </Checkbox>
      <Checkbox
        checked={form.data.default}
        onChange={c => handleChange('default', c)}
      >
        Default
      </Checkbox>
      <Checkbox
        size="large"
        checked={form.data.large}
        onChange={c => handleChange('large', c)}
      >
        Large
      </Checkbox>
      <Checkbox
        size={50}
        checked={form.data.px}
        onChange={c => handleChange('px', c)}
      >
        50 pixels
      </Checkbox>
    </Container>
  )
}
