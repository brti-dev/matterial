import { useState } from 'react'
import { CheckButton, CheckButtonGroup } from './'

export function CheckButtonCheckBoxExample() {
  const [checked, setChecked] = useState({ foo: true, bar: false })
  return (
    <CheckButtonGroup>
      <CheckButton
        name="foo"
        value="foo"
        checked={checked.foo}
        onChange={isChecked => setChecked(c => ({ ...c, foo: isChecked }))}
      >
        Foo
      </CheckButton>
      <CheckButton
        name="bar"
        value="bar"
        checked={checked.bar}
        onChange={isChecked => setChecked(c => ({ ...c, bar: isChecked }))}
      >
        Bar
      </CheckButton>
      <CheckButton name="baz" value="baz" disabled>
        Disabled
      </CheckButton>
      <CheckButton name="fiz" value="fiz" loading>
        Loading
      </CheckButton>
    </CheckButtonGroup>
  )
}

export function CheckButtonRadioExample() {
  const [radio, setRadio] = useState('has_boat')

  return (
    <CheckButtonGroup>
      <CheckButton
        name="daddy"
        value="true"
        checked={radio === 'daddy'}
        onChange={() => setRadio('daddy')}
        prepend="👨"
      >
        I'm a daddy
      </CheckButton>
      <CheckButton
        name="has_boat"
        value="true"
        checked={radio === 'has_boat'}
        onChange={() => setRadio('has_boat')}
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
