/* eslint-disable import/first */
import React from 'react'
import { storiesOf } from '@storybook/react'
import RadioButtonGroup from './RadioButtonGroup'
import { action } from '@storybook/addon-actions'
import { object, text } from '@storybook/addon-knobs'

storiesOf('RadioButtonGroup', module)
  .add(
    'basic',
    () => {

      return (
        <>
          <div>
            <RadioButtonGroup
              label={text('label', 'Simple Radio Group with preset')}
              name='default-radio-element'
              options={object('Options', [{ id: '1', label: 'Label 1' }, { id: '2', label: 'label 2' }])}
              onChange={action('change')}
            />
          </div>
          <div>
            <RadioButtonGroup
              label={text('label2', 'Simple Radio Group')}
              name='default-radio-element-empty.deep'
              options={object('Options', [{ id: '1', label: 'Label 1' }, { id: '2', label: 'label 2' }])}
              onChange={action('change')}
            />
          </div>
          <div>
            <RadioButtonGroup
              label={text('label3', 'Simple Radio Group required')}
              required
              name='default-radio-element-required'
              options={object('Options', [{ id: '1', label: 'Label 1' }, { id: '2', label: 'label 2' }])}
              onChange={action('change')}
            />
          </div>
          <div>
            <RadioButtonGroup
              label={text('label4', 'Radio Group returns object')}
              required
              returnObject
              name='object-radio-element'
              options={object('Options', [{ id: '1', label: 'Label 1' }, { id: '2', label: 'label 2' }])}
              onChange={action('change')}
            />
          </div>
        </>
      )
    }
  )
