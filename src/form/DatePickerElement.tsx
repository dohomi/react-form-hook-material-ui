import React from 'react'
import { DatePicker, DatePickerProps } from '@material-ui/pickers'
import useFormValidation from './helpers/useFormValidation'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'

interface DatePickerElement
  extends Omit<DatePickerProps, 'value' | 'onChange'> {
  name: string;
  required?: boolean;
  isDate?: boolean;
  parseError?: Function;
  onChange?: Function;
}

type DatePickerElementProps = DatePickerElement

export default function DatePickerElement({
                                            isDate,
                                            parseError,
                                            name,
                                            required,
                                            ...rest
                                          }: DatePickerElementProps): JSX.Element {
  const { formValue, errorMessages, setValue } = useFormValidation({
    name,
    parseError,
    required
  })
  function onChange(date: MaterialUiPickersDate): void {
    const parsedDate = isDate && date ? date && date.toISOString().substr(0, 10) : date
    setValue(name, parsedDate, true)
    rest.onChange && rest.onChange(parsedDate)
  }

  return (
    <DatePicker
      {...rest}
      value={formValue ? formValue : null}
      required={!!required}
      onChange={onChange}
      error={!!errorMessages}
      helperText={errorMessages || rest.helperText}
    />
  )
}
