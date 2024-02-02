import * as React from 'react'

import { FormChangeEvent } from './form.types'

type FormStateLoading = {
  loading: boolean
}
type FormStateError = {
  error: null | {
    inputName?: string
    message?: string
  }
}
type FormState = FormStateLoading & FormStateError
type FormNewState = FormStateLoading | FormStateError

export function useForm<T>(initialData: T) {
  const [form, setForm] = React.useReducer(
    (form: FormState & { data: T }, newState: FormNewState | { data: T }) => ({
      ...form,
      ...newState,
    }),
    {
      data: initialData,
      loading: false,
      error: null,
    }
  )

  const handleChange: FormChangeEvent = (eventOrObjectOrName, maybeValue) => {
    let name: string
    let value = maybeValue
    let newData
    if (typeof eventOrObjectOrName === 'string') {
      name = eventOrObjectOrName
      newData = { [name]: value }
    } else if (
      'target' in eventOrObjectOrName &&
      'value' in eventOrObjectOrName.target
    ) {
      const { name: targetName, value: targetValue } =
        eventOrObjectOrName.currentTarget as HTMLInputElement
      name = targetName
      value = targetValue
      newData = { [name]: value }
    } else {
      name = Object.keys(eventOrObjectOrName)[0]
      newData = eventOrObjectOrName
    }

    if (form.error?.inputName === name) {
      setForm({ error: null })
    }

    setForm({ data: { ...form.data, ...newData } })
  }

  const isError = (inputName?: string) => {
    if (inputName) {
      return form.error?.inputName === inputName
    }

    return !!form.error
  }

  return { form, setForm, handleChange, isError }
}
