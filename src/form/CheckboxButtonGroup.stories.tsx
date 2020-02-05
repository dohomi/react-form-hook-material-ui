/* eslint-disable import/first */
import React from 'react'
import { storiesOf } from '@storybook/react'
import CheckboxButtonGroup from './CheckboxButtonGroup'
import { action } from '@storybook/addon-actions'
import { object, text } from '@storybook/addon-knobs'

storiesOf('CheckboxButtonGroup', module)
  .add(
    'basic',
    () => (
      <div>
        <div>
          <CheckboxButtonGroup
            label={text('label', 'The label')}
            options={object('Options', [{ id: '1', label: 'Label 1' }, { id: '2', label: 'label 2' }])}
            name={'basic-checkbox-button-group'}
            onChange={action('selected')}
          />
        </div>
        <div>
          <CheckboxButtonGroup
            label={text('label2', 'Return as object')}
            options={object('Options', [{ id: '1', label: 'Label 1' }, { id: '2', label: 'label 2' }])}
            name={'object-checkbox-button-group'}
            onChange={action('selected')}
            returnObject
          />
        </div>
        <div>
          <CheckboxButtonGroup
            label={text('label3', 'Required check box')}
            options={object('Options', [{ id: '1', label: 'Label 1' }, { id: '2', label: 'label 2' }])}
            name={'required-checkbox-button-group'}
            required
            onChange={action('selected')}
          />
        </div>
      </div>
    )
  )
