import { useEffect } from 'react'
import { FieldError, useFormContext } from 'react-hook-form'
import getNestedValue from './getNestedValue'

type UseFormValidationProps = {
  required?: boolean
  name: string
  parseError?: Function
}

export default function useFormValidation({
  required,
  name,
  parseError
}: UseFormValidationProps) {
  const { setValue, errors, register, unregister, watch } = useFormContext()
  const vals = watch({ nest: true })
  const formValue: any = getNestedValue(vals, name)

  const fieldError = errors[name] as FieldError | undefined
  const getErrorMessages = () => {
    const errorType: string | undefined = fieldError?.type
    if (!errorType) return
    return parseError ? parseError(errorType) : `This field is ${errorType}`
  }

  useEffect(() => {
    if (required) {
      register(
        name,
        {
          validate: {
            required: (v: any) =>
              Array.isArray(v) ? !!v.length : !!v || 'required'
          }
        }
      )
    } else {
      register(name)
    }
    return () => {
      unregister(name)
    }
  }, [register, name, required, unregister])
  const errorMessages = getErrorMessages()
  return { formValue, setValue, errorMessages, watch }
}
