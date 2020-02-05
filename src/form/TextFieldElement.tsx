import React from 'react'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import { Controller, FieldError, useFormContext } from 'react-hook-form'
import getNestedValue from './helpers/getNestedValue'

export type TextFieldElementModule = Omit<TextFieldProps,
  'name' | 'variant'> & {
  validation?: any;
  name: string;
  parseError?: Function;
}

type TextFieldValidationProps = TextFieldElementModule

/**
 * Important: variant is not part of props due to nasty and un-resolvable. you can't use variant only as provider props
 *
 * See: https://github.com/mui-org/material-ui/issues/15697
 */
export default function TextFieldElement({
  validation,
  parseError,
  type,
  required,
  name,
  ...rest
}: TextFieldValidationProps): JSX.Element {
  const { errors, getValues, control } = useFormContext()

  const formValue: any = getNestedValue(getValues({ nest: true }), name)
  const value = formValue || ''
  if (required) {
    validation = validation || {}
    validation.required = 'This field is required'
  }
  if (type === 'email') {
    validation = validation || {}
    validation.pattern = {
      // eslint-disable-next-line no-useless-escape
      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'email'
    }
  }

  const fieldError = errors[name] as FieldError | undefined
  const getErrorMessages = () => {
    const errorType: string | undefined = fieldError?.type
    if(Array.isArray(fieldError)){
      console.error('Unexpected field error', fieldError)
    }
    if (!errorType) return
    return parseError ? parseError(errorType) : `This field is ${errorType}`
  }

  const errorMessages = getErrorMessages()

  return <Controller
    required={required}
    defaultValue={value}
    name={name}
    control={control}
    rules={validation}
    as={<TextField {...rest}
                   type={type}
                   error={!!errorMessages}
                   helperText={errorMessages || rest.helperText} />}
  />
}
