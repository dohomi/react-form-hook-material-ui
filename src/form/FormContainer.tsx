import React, { PropsWithChildren } from 'react'
import { FormContext, useForm } from 'react-hook-form'

const FormContainer = ({
  onSuccess,
  defaultValues,
  ...rest
}: PropsWithChildren<{
  onSuccess: any;
  defaultValues: {};
}>): JSX.Element => {
  const methods = useForm({
    defaultValues
  })
  const { handleSubmit} = methods

  return (
    <FormContext {...methods}>
      <form onSubmit={handleSubmit(onSuccess)} noValidate>
        {rest.children}
      </form>
    </FormContext>
  )
}

export default FormContainer
