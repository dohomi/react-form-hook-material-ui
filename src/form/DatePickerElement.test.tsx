import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './FormContainer'
import DatePickerElement from './DatePickerElement'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

class LocalizedUtils extends DateFnsUtils {
  dateFormat = 'P'
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MuiPickersUtilsProvider utils={LocalizedUtils}>
      <FormContainer onSuccess={() => console.log('success')} defaultValues={''}>
        <DatePickerElement
          label="The DatePickerElement label"
          name={'basic date picker'}
          fullWidth
          openTo="year"
        />
      </FormContainer>
    </MuiPickersUtilsProvider>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
