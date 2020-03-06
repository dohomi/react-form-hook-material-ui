import React, { FunctionComponent } from 'react';
import { CheckboxProps } from '@material-ui/core';
declare const CheckboxElement: FunctionComponent<Omit<CheckboxProps, 'name'> & {
    validation?: any;
    name: string;
    parseError?: Function;
    label?: React.ReactNode;
    helperText?: string;
}>;
export default CheckboxElement;
