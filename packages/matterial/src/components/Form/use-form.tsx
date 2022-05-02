import { useReducer } from 'react'

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
  const [form, setForm] = useReducer(
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

  const handleChange: FormChangeEvent = (nameOrEvent, value) => {
    let name: string
    if (typeof nameOrEvent === 'string') {
      name = nameOrEvent
    } else {
      const { name: targetName } = nameOrEvent.currentTarget as HTMLInputElement
      name = targetName
    }

    if (form.error?.inputName === name) {
      setForm({ error: null })
    }

    setForm({ data: { ...form.data, [name]: value } })
  }

  const isError = (inputName?: string) => {
    if (inputName) {
      return form.error?.inputName === inputName
    }

    return !!form.error
  }

  return { form, setForm, handleChange, isError }
}
