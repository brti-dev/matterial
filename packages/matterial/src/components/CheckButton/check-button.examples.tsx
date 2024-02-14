import * as React from 'react'
import { CheckButton, CheckButtonGroup } from '.'
import { Container } from '../Container'
import { Divider } from '../Divider'

export function CheckButtonCheckBoxExample() {
  const [checked, setChecked] = React.useState({ foo: true, bar: false })

  return (
    <CheckButtonGroup>
      <CheckButton
        name="foo"
        checked={checked.foo}
        onChange={isChecked => setChecked(c => ({ ...c, foo: isChecked }))}
      >
        Foo
      </CheckButton>
      <CheckButton
        name="bar"
        checked={checked.bar}
        onChange={isChecked => setChecked(c => ({ ...c, bar: isChecked }))}
      >
        Bar
      </CheckButton>
      <CheckButton name="baz" disabled>
        Disabled
      </CheckButton>
      <CheckButton name="fiz" loading>
        Loading
      </CheckButton>
    </CheckButtonGroup>
  )
}

export function CheckButtonRadioExample() {
  const [radio, setRadio] = React.useState('boat')

  return (
    <CheckButtonGroup>
      <CheckButton
        type="radio"
        name="daddy_or_boat"
        value="daddy"
        checked={radio === 'daddy'}
        onChange={() => setRadio('daddy')}
        prepend="👨"
      >
        I'm a daddy
      </CheckButton>
      <CheckButton
        type="radio"
        name="daddy_or_boat"
        value="boat"
        checked={radio === 'boat'}
        onChange={() => setRadio('boat')}
        prepend="🛥️"
      >
        I have a boat
      </CheckButton>
      <div>
        Checked: <strong>{radio || 'none'}</strong>
      </div>
    </CheckButtonGroup>
  )
}

export function CheckButtonUncontrolledExample() {
  return (
    <Container row>
      <CheckButtonGroup>
        <CheckButton name="foo">Foo</CheckButton>
        <CheckButton name="bar" defaultChecked>
          Bar
        </CheckButton>
      </CheckButtonGroup>
      <Divider />
      <CheckButtonGroup>
        <CheckButton type="radio" name="lorem" value="ipsum">
          Ipsum
        </CheckButton>
        <CheckButton type="radio" name="lorem" value="Dolor" defaultChecked>
          Dolor
        </CheckButton>
      </CheckButtonGroup>
    </Container>
  )
}
