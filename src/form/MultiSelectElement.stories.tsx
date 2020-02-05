/* eslint-disable import/first */
import React from 'react'
import { storiesOf } from '@storybook/react'
import MultiSelectElement from './MultiSelectElement'

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
]

const objectVals = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' },
  { id: 4, name: 'D' }
]

storiesOf('MultiSelectElement', module)
  .add(
    'basic',
    () => {
      return (
        <>
          <div>

            <MultiSelectElement menuItems={names} name={'multi-select-basic'} label={'The label'} />
          </div>
          <div>
            <MultiSelectElement required menuItems={names} name={'multi-select-required'} label={'Required'} />
          </div>
        </>
      )
    }
  )
  .add(
    'fullWidth',
    () => {
      return (
        <MultiSelectElement menuItems={names} name={'multi-select-fw'} label={'The label'} fullWidth />
      )
    }
  )
  .add(
    'initial values',
    () => {
      return (
        <MultiSelectElement
          menuItems={names}
          name={'multi-select-iv'}
          label={'The label'}
          fullWidth />
      )
    }
  )
  .add(
    'object values',
    () => {
      return (
        <MultiSelectElement
          menuItems={objectVals}
          name={'multi-select-ov'}
          label={'The label (initial values: [1, 3])'}
          itemValue={'id'}
          itemKey={'id'}
          itemLabel={'name'}
          fullWidth />
      )
    }
  )
