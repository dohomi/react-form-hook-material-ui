import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './FormContainer'
import { action } from '@storybook/addon-actions';
import CheckboxButtonGroup from './CheckboxButtonGroup'
// @ts-ignore
import MutationObserver from 'mutation-observer'

window.MutationObserver = window.MutationObserver || MutationObserver

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <FormContainer onSuccess={() => action('success')} defaultValues={''}>
        <CheckboxButtonGroup
          label={'the label'}
          options={[{id: '1', label: 'Label 1'}, {id: '2', label: 'label 2'}]}
          name={'basic-checkbox-button-group'}
        />
      </FormContainer>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
