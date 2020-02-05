import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import { red } from '@material-ui/core/colors'
import { Checkbox } from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup'
import { CheckboxProps } from '@material-ui/core/Checkbox'
import useFormValidation from './helpers/useFormValidation'

export type RadioButtonGroupProps = {
  options: any[];
  helperText?: string;
  name: string;
  required?: boolean;
  parseError?: Function;
  label?: string;
  labelKey?: string;
  valueKey?: string;
  onChange?: Function;
  returnObject?: boolean;
}

const useStyles = makeStyles({
  root: {
    color: red[400]
  }
})

export default function CheckboxButtonGroup({
  helperText,
  options,
  label,
  name,
  parseError,
  required,
  labelKey = 'label',
  valueKey = 'id',
  onChange,
  returnObject
}: RadioButtonGroupProps): JSX.Element {
  const classes = useStyles()
  const { setValue, formValue, errorMessages } = useFormValidation({
    parseError,
    name,
    required
  })
  const values: any[] = formValue || []

  const handleChange = (index: number | string) => {
    const newArray = [...values]
    const exists = values.findIndex(i => returnObject ? i[valueKey] === index : i === index) === -1
    if (exists) {
      newArray.push(returnObject ? options.find(i => i[valueKey] === index) : index)
    } else {
      newArray.splice(values.findIndex(i => returnObject ? i[valueKey] === index : i === index), 1)
    }
    setValue(name, newArray, true)
    onChange && onChange(newArray)
  }

  helperText = errorMessages || helperText
  const hasError = !!errorMessages
  const checkboxProps: CheckboxProps = {}
  if (hasError) {
    checkboxProps.className = classes.root
  }

  return (
    <FormControl error={hasError} required={required}>
      {label && <FormLabel error={hasError}>{label}</FormLabel>}
      <FormGroup>
        {options.map((option: any) => {
          const optionKey = option[valueKey]
          if (!optionKey) {
            console.error(
              `CheckboxButtonGroup: valueKey ${valueKey} does not exist on option`,
              option
            )
          }
          const isChecked = values.findIndex(item => returnObject ? item[valueKey] === optionKey : item === optionKey) !== -1
          return (
            <FormControlLabel
              control={
                <Checkbox
                  {...checkboxProps}
                  color="primary"
                  value={optionKey}
                  checked={isChecked}
                  onChange={() => handleChange(optionKey)}
                />
              }
              label={option[labelKey]}
              key={optionKey}
            />
          )
        })}
      </FormGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}
