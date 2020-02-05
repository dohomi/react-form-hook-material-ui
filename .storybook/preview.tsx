import React from 'react'
import { addDecorator } from '@storybook/react'
import { FormContainer } from '../src/form'
import { action } from '@storybook/addon-actions'
import Button from '@material-ui/core/Button'
import { withKnobs } from '@storybook/addon-knobs'

const formDefaultValues = {
  'multi-select-iv': ['Van Henry'],
  'multi-select-ov': [1, 3],
  'default-radio-element': '2',
  'multi-select-required': '',
  'required-date-picker': '',
  'basic-drop': ['https://lm-space.fra1.cdn.digitaloceanspaces.com/ImLebQFxvu.logo.png']
}

addDecorator(storyFn => {
  return (
    <FormContainer defaultValues={formDefaultValues} onSuccess={action('submit')}>
      {storyFn()}
      <br />
      <Button type={'submit'} color={'primary'}>Submit</Button>
    </FormContainer>
  )
})

addDecorator(withKnobs())
