/* eslint-disable import/first */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextFieldElement } from './index'
import { text } from '@storybook/addon-knobs'

storiesOf('TextFieldElement', module)
  .add(
    'basic',
    () => (
      <div>
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
      </div>
    )
  )
