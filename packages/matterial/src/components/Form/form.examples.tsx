import { useForm, Form, FormGroup, TextInput, SubmitRow } from '.'
import { Button } from '../Button'
import { Checkbox } from '../Checkbox'
import { Container } from '../Container'

const initialFormVals = {
  name: '',
  feedback: 'Officia incididunt do officia eiusmod commodo.',
  email: 'foo@bar.baz',
  foo: true,
  bar: false,
  submitted: false,
}

export function FormExample() {
  const { form, handleChange } = useForm(initialFormVals)
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    handleChange('submitted', true)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup
          label="Full Name"
          input={
            <TextInput
              name="name"
              value={form.data.name}
              placeholder="Your name"
              onChange={handleChange}
            />
          }
          helperText="Please enter your full name"
        />
        <FormGroup
          label="Feedback"
          input={
            <TextInput
              name="feedback"
              value={form.data.feedback}
              multiline={true}
              rows={3}
              onChange={handleChange}
            />
          }
        />
        <FormGroup
          label="Email Address"
          input={
            <TextInput
              type="email"
              name="email"
              value={form.data.email}
              onChange={handleChange}
            />
          }
        />
        <Container row>
          <Checkbox name="foo" checked={form.data.foo} onChange={handleChange}>
            Foo
          </Checkbox>
          <Checkbox name="bar" checked={form.data.bar} onChange={handleChange}>
            Bar
          </Checkbox>
        </Container>
        <SubmitRow>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </SubmitRow>
      </Form>
      <pre className="surface">{JSON.stringify(form, null, 2)}</pre>
    </>
  )
}
