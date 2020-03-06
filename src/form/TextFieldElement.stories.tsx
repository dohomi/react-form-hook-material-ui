/* eslint-disable import/first */
import React, { FunctionComponent, useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import { FormContainer, PasswordElement, TextFieldElement } from './index'
import { action } from '@storybook/addon-actions'
import Button from '@material-ui/core/Button'
import { useForm, useFormContext } from 'react-hook-form'
import CheckboxElement from './CheckboxElement'

const parseError = (errorType: string) => {
  if (errorType === 'pattern') {
    return 'Enter an email'
  }
  return 'This field is required'
}

const PasswordRepeat: FunctionComponent = () => {
  const { getValues } = useFormContext()
  return (
    <PasswordElement margin={'dense'}
                     label={'Password Repeat'}
                     required
                     parseError={parseError}
                     validation={{
                       validate: (value: string) => {
                         const { password } = getValues()
                         return value === password || 'Password should match'
                       }
                     }}
                     name={'password-repeat'}
    />
  )
}

storiesOf('TextFieldElement', module)
  .add(
    'basic',
    () => {
      const form = {
        agree: false
      }

      return (
        <FormContainer defaultValues={form} onSuccess={action('submit')}
                       FormProps={{
                         'aria-autocomplete': 'none',
                         autoComplete: 'new-password'
                       }}>
          <TextFieldElement
            required
            autoComplete={'new-password'}
            margin={'dense'}
            label={'Name'}
            name={'default-text-field'}
          /><br />
          <TextFieldElement
            required
            parseError={parseError}
            type={'email'}
            margin={'dense'}
            label={'Email'}
            name={'default-email-field'}
          /><br />
          <TextFieldElement
            margin={'dense'}
            label={'Number'}
            name={'number-text-field'}
            required
            type={'number'}
          /><br />
          <PasswordElement margin={'dense'}
                           label={'Password'}
                           required
                           name={'password'}
          /><br />
          <PasswordRepeat /><br />
          <CheckboxElement name={'agree'} label={'Agree'} required /><br />
          <Button type={'submit'} color={'primary'} variant={'contained'}>Submit</Button>
        </FormContainer>
      )
    }
  )
  .add(
    'pre-defined',
    () => {
      const form = {
        'default-text-field': 'Test Data',
        'default-email-field': 'info@example.com',
        'number-text-field': 6
      }

      return (
        <FormContainer defaultValues={form}
                       onSuccess={action('submit')}
        >
          <TextFieldElement
            required
            margin={'dense'}
            label={'Name'}
            name={'default-text-field'}
          /><br />
          <TextFieldElement
            required
            parseError={parseError}
            type={'email'}
            margin={'dense'}
            label={'Email'}
            name={'default-email-field'}
          /><br />
          <TextFieldElement
            margin={'dense'}
            label={'Number'}
            name={'number-text-field'}
            required
            type={'number'}
          /><br />
          <Button type={'submit'} color={'primary'} variant={'contained'}>Submit</Button>
        </FormContainer>
      )
    }
  )
  .add(
    'pre-defined-nested',
    () => {
      const form = {
        a: {
          'default-text-field': 'Test Data'
        },
        b: {
          'default-email-field': 'info@example.com',
          'number-text-field': 6
        }
      }

      return (
        <FormContainer defaultValues={form}
                       onSuccess={action('submit')}
        >
          <TextFieldElement
            required
            margin={'dense'}
            label={'Name'}
            name={'a.default-text-field'}
          /><br />
          <TextFieldElement
            required
            parseError={parseError}
            type={'email'}
            margin={'dense'}
            label={'Email'}
            name={'b.default-email-field'}
          /><br />
          <TextFieldElement
            margin={'dense'}
            label={'Number'}
            name={'b.number-text-field'}
            required
            type={'number'}
          /><br />
          <Button type={'submit'} color={'primary'} variant={'contained'}>Submit</Button>
        </FormContainer>
      )
    }
  )
  .add(
    'with form context',
    () => {
      const formContext = useForm({
        defaultValues: {
          email: '',
          name: ''
        }
      })
      const { watch } = formContext
      const emailValue = watch('email')

      useEffect(
        () => {
          console.log('email changed', emailValue)
        },
        [emailValue]
      )
      return (
        <FormContainer onSuccess={action('submit')}
                       formContext={formContext}>
          <TextFieldElement name={'name'} label={'Name'} parseError={parseError} required /><br />
          <TextFieldElement name={'email'} type="email" label={'Email'} required parseError={parseError} /><br />
          <Button type={'submit'} color={'primary'} variant={'contained'}>Submit</Button>
        </FormContainer>
      )
    }
  )
