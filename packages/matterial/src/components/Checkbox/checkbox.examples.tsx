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
