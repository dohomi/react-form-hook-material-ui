import React, { createElement } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import { Controller, useFormContext } from 'react-hook-form'
import getNestedValue from './helpers/getNestedValue'
import getErrorMessages from './helpers/getErrorMessages'

type CustomTextFieldProps = Omit<TextFieldProps,
  'name' | 'variant' | 'type' | 'onChange'>
export type SelectElementModule = CustomTextFieldProps & {
  validation?: any;
  name: string;
  options?: any[];
  valueKey?: string;
  labelKey?: string;
  type?: 'string' | 'number';
  parseError?: Function;
  objectOnChange?: boolean;
  onChange?: Function;
}
type TextFieldValidationProps = SelectElementModule

export default function SelectElement({
  name,
  required,
  valueKey = 'id',
  labelKey = 'title',
  options = [],
  parseError,
  type,
  objectOnChange,
  validation = {},
  ...rest
}: TextFieldValidationProps): JSX.Element {
  const { errors, getValues, control, setValue } = useFormContext()
  const formValue: any = getNestedValue(getValues({ nest: true }), name)
  let value = formValue || ''
  if (value && typeof value === 'object') {
    value = value[valueKey] // if value is object get key
  }
  const isNativeSelect = !!(rest.SelectProps && rest.SelectProps.native)
  const ChildComponent = isNativeSelect ? 'option' : MenuItem
  if (required) {
    validation.required = 'This field is required'
  }
  const onChange = (event: any) => {
    let item: number | string = event.target.value
    if (type === 'number') {
      item = Number(item)
    }
    setValue(name, item, true)
    if (rest.onChange) {
      if (objectOnChange) {
        item = options.find(i => i[valueKey] === item)
      }
      rest.onChange && rest.onChange(item)
    }
  }

  // handle shrink on number input fields
  if (type === 'number' && value) {
    rest.InputLabelProps = rest.InputLabelProps || {}
    rest.InputLabelProps.shrink = true
  }
  const errorMessages = getErrorMessages(name, errors, parseError)
  return <Controller
    name={name}
    control={control}
    rules={validation}
    as={<TextField
      {...rest}
      select
      value={value}
      required={required}
      error={!!errorMessages}
      helperText={errorMessages || rest.helperText}
      onChange={onChange}
    >
      {!!isNativeSelect && <option />}
      {options.map((item: any) =>
        createElement(
          ChildComponent,
          {
            key: `${name}_${item[valueKey]}`,
            value: item[valueKey]
          },
          item[labelKey]
        )
      )}
    </TextField>} />
}
