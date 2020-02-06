/* eslint-disable import/first */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { FormContainer, TextFieldElement } from './index'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Button from '@material-ui/core/Button'

storiesOf('TextFieldElement', module)
  .add(
    'basic',
    () => (
      <FormContainer defaultValues={{}} onSuccess={action('submit')}>

        <div>
          <TextFieldElement
            required
            label={text('label', 'Text Field', 'Text Field')}
            name={'default-text-field'}
          />
        </div>
        <div>
          <TextFieldElement
            required
            parseError={(errorType: string) => {
              if (errorType === 'pattern') {
                return 'Enter an email'
              }
              return 'This field is required'
            }}
            type={'email'}
            label={text('label 2', 'Email Field', 'Text Field')}
            name={'default-email-field'}
          />
        </div>
        <div>
          <TextFieldElement
            label={text('label', 'Number Field', 'Number Field')}
            name={'number-text-field'}
            required
            type={'number'}
          />
        </div>
        <Button type={'submit'} color={'primary'}>Submit</Button>
      </FormContainer>
    )
  )
