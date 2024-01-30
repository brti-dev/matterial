import { useForm, Form, FormGroup, TextInput, SubmitRow } from '.'
import { Button } from '../Button'
import { CheckButton, CheckButtonGroup } from '../CheckButton'
import { Checkbox } from '../Checkbox'
import { Container } from '../Container'
import * as React from 'react'

const initialFormVals = {
  name: '',
  feedback: 'Officia incididunt do officia eiusmod commodo.',
  email: 'foo@bar.baz',
  gender: '',
  foo: true,
  bar: false,
  baz: false,
  bazDescription: '',
  submitted: false,
}

export function FormExample() {
  const { form, handleChange, setForm } = useForm(initialFormVals)
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    handleChange('submitted', true)
  }

  const handleReset = () => {
    setForm({ data: initialFormVals })
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
        <CheckButtonGroup>
          <CheckButton
            name="gender"
            value="male"
            checked={form.data.gender === 'male'}
            onChange={() => handleChange('gender', 'male')}
          >
            👨 Male
          </CheckButton>
          <CheckButton
            name="gender"
            value="female"
            checked={form.data.gender === 'female'}
            onChange={() => handleChange('gender', 'female')}
          >
            👩 Female
          </CheckButton>
          <CheckButton
            name="gender"
            value="other"
            checked={form.data.gender === 'other'}
            onChange={() => handleChange('gender', 'other')}
          >
            🧑 Other
          </CheckButton>
        </CheckButtonGroup>
        <Container row>
          <Checkbox name="foo" checked={form.data.foo} onChange={handleChange}>
            Foo
          </Checkbox>
          <Checkbox name="bar" checked={form.data.bar} onChange={handleChange}>
            Bar
          </Checkbox>
        </Container>
        <Container row>
          <Checkbox
            name="baz"
            checked={form.data.baz}
            onChange={(_, checked) =>
              setForm({
                data: {
                  ...form.data,
                  baz: checked || false,
                  bazDescription: checked ? 'checked' : 'not checked',
                },
              })
            }
          >
            Synced check
          </Checkbox>
          <TextInput
            name="bazDescription"
            value={form.data.bazDescription}
            readOnly
          />
        </Container>
        <SubmitRow>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Button type="reset" onClick={handleReset}>
            Reset
          </Button>
        </SubmitRow>
      </Form>
      <pre className="surface">{JSON.stringify(form, null, 2)}</pre>
    </>
  )
}
