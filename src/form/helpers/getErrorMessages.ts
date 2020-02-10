import { FieldError } from 'react-hook-form'

const getErrorMessages = (name: string, errors: any, parseError?: Function) => {
  const fieldError = errors[name] as FieldError | undefined
  const errorType: string | undefined = fieldError?.type
  if (Array.isArray(fieldError)) {
    console.error('Unexpected field error', fieldError)
  }
  if (!errorType) return
  return parseError ? parseError(errorType) : `This field is ${errorType}`
}
export default getErrorMessages
