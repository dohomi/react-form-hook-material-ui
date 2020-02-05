import React from 'react'
import ReactDOM from 'react-dom'
import FormContainer from './FormContainer'
// @ts-ignore
import MutationObserver from 'mutation-observer'
import SelectElement from './SelectElement'

window.MutationObserver = window.MutationObserver || MutationObserver

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <FormContainer onSuccess={() => console.log('success')} defaultValues={''} >
      <SelectElement
        fullWidth={true}
        value='Basic Select'
        label="The label"
        name='default-select-element'
        options={[{ id: '1', title: 'Option 1' }, { id: '2', title: 'Option 2' }]}
      />
    </FormContainer>
    , div)
  ReactDOM.unmountComponentAtNode(div)
})
