import React, { useState } from 'react';
import TextFieldElement from './TextFieldElement';
import InputAdornment from '@material-ui/core/InputAdornment';
import { IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
const PasswordElement = (props) => {
    const [password, setPassword] = useState(true);
    return React.createElement(TextFieldElement, Object.assign({}, props, { InputProps: {
            endAdornment: (React.createElement(InputAdornment, { position: 'end' },
                React.createElement(IconButton, { onMouseDown: (e) => e.preventDefault(), onClick: () => setPassword(!password) }, password ? React.createElement(Visibility, null) : React.createElement(VisibilityOff, null))))
        }, type: password ? 'password' : 'text' }));
};
export default PasswordElement;
