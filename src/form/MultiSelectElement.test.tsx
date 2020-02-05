import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './FormContainer'
import MultiSelectElement from './MultiSelectElement'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <FormContainer onSuccess={() => {}} defaultValues={{}}>
      <MultiSelectElement
        name='multi-select-element'
        menuItems={['1', '2', '3']}
      />
    </FormContainer>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
