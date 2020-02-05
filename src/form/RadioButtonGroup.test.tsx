import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './FormContainer'
import RadioButtonGroup from './RadioButtonGroup'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <FormContainer onSuccess={() => console.log('success')} defaultValues={''}>
      <RadioButtonGroup
        label="The label"
        name='default-select-element'
        options={[{id: '1', label: 'Option 1'}, {id: '2', label:'Option 2'}]}
      />
    </FormContainer>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
