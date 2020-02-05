import React from 'react';
import ReactDOM from 'react-dom';
import TextFieldElement from './TextFieldElement'
import FormContainer from './FormContainer'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import MutationObserver from 'mutation-observer'

window.MutationObserver = window.MutationObserver || MutationObserver

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <FormContainer onSuccess={() => console.log('success')} defaultValues={''}>
      <TextFieldElement
        label="The label"
        name={'default-text-field'}
      />
    </FormContainer>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
