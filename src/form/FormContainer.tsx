import React, { FormHTMLAttributes, FunctionComponent } from 'react'
import { FormContext, useForm } from 'react-hook-form'

const FormContainer: FunctionComponent<{
  onSuccess: any;
  defaultValues: any;
  FormProps?: FormHTMLAttributes<HTMLFormElement>;
}> = ({
  onSuccess,
  defaultValues,
  children,
  FormProps
}) => {
  const methods = useForm({
    defaultValues
  })
  const { handleSubmit } = methods

  return (
    <FormContext {...methods}>
      <form onSubmit={handleSubmit(onSuccess)} noValidate {...FormProps}>
        {children}
      </form>
    </FormContext>
  )
}

export default FormContainer
