import React, { createElement } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import useFormValidation from './helpers/useFormValidation'

type CustomTextFieldProps = Omit<
  TextFieldProps,
  'name' | 'variant' | 'type' | 'onChange'
  >
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
                                        ...rest
                                      }: TextFieldValidationProps): JSX.Element {
  const { formValue, setValue, errorMessages } = useFormValidation({
    name,
    parseError,
    required
  })
  let value: any = formValue || ''
  if (value && typeof value === 'object') {
    value = value[valueKey] // if value is object get key
  }
  const isNativeSelect = !!(rest.SelectProps && rest.SelectProps.native)
  const ChildComponent = isNativeSelect ? 'option' : MenuItem

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

  const helperText = errorMessages || rest.helperText
  // handle shrink on number input fields
  if (type === 'number' && value) {
    rest.InputLabelProps = rest.InputLabelProps || {}
    rest.InputLabelProps.shrink = true
  }

  return (
    <TextField
      {...rest}
      select
      value={value}
      required={required}
      error={!!errorMessages}
      helperText={helperText}
      onChange={onChange}
    >
      {!!isNativeSelect && <option/>}
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
    </TextField>
  )
}
