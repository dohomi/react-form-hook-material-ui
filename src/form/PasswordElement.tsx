import React, { FunctionComponent, MouseEvent, useState } from 'react'
import TextFieldElement, { TextFieldValidationProps } from './TextFieldElement'
import InputAdornment from '@material-ui/core/InputAdornment'
import { IconButton } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const PasswordElement: FunctionComponent<TextFieldValidationProps> = (props) => {
  const [password, setPassword] = useState<boolean>(true)
  return <TextFieldElement
    {...props}
    InputProps={{
      endAdornment: (
        <InputAdornment position={'end'}>
          <IconButton onMouseDown={(e: MouseEvent<HTMLButtonElement>) => e.preventDefault()}
                      onClick={() => setPassword(!password)}>
            {password ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>)
    }}
    type={password ? 'password' : 'text'}
  />
}
export default PasswordElement
