/* eslint-disable import/first */
import React, { FunctionComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { FormContainer, PasswordElement, TextFieldElement } from './index'
import { action } from '@storybook/addon-actions'
import Button from '@material-ui/core/Button'
import { useFormContext } from 'react-hook-form'

const PasswordRepeat: FunctionComponent = () => {
  const { getValues } = useFormContext()
  return (
    <PasswordElement margin={'dense'}
                     label={'Password Repeat'}
                     required
                     parseError={(e: string) => {
                       if (e === 'validate') {
                         return 'Password does not match'
                       }
                       return 'This field is required'
                     }}
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
      const form = {}

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
            parseError={(errorType: string) => {
              if (errorType === 'pattern') {
                return 'Enter an email'
              }
              return 'This field is required'
            }}
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
            parseError={(errorType: string) => {
              if (errorType === 'pattern') {
                return 'Enter an email'
              }
              return 'This field is required'
            }}
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
            parseError={(errorType: string) => {
              if (errorType === 'pattern') {
                return 'Enter an email'
              }
              return 'This field is required'
            }}
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
