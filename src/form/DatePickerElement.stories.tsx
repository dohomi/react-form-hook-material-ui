/* eslint-disable import/first */
import React from 'react'
import { storiesOf } from '@storybook/react'
import DatePickerElement from './DatePickerElement'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { text } from '@storybook/addon-knobs'

class LocalizedUtils extends DateFnsUtils {
  dateFormat = 'P'
}

storiesOf('DatePickerElement', module)
  .add(
    'basic',
    () => (
      <MuiPickersUtilsProvider utils={LocalizedUtils}>
        <div>
          <DatePickerElement
            label={text('label', 'Default date picker')}
            name={'basic-data-picker'}
          />
        </div>
        <div>
          <DatePickerElement
            label={text('label2', 'Opens year')}
            name={'basic2-data-picker'}
            openTo="year"
          />
        </div>
        <div>
          <DatePickerElement
            label={text('label3', 'Required date picker')}
            name={'required-date-picker'}
            required
            openTo="year"
          />
        </div>
      </MuiPickersUtilsProvider>
    )
  )
