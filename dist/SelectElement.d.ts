import { FunctionComponent } from 'react';
import { TextFieldProps } from '@material-ui/core/TextField';
declare type CustomTextFieldProps = Omit<TextFieldProps, 'name' | 'variant' | 'type'>;
export declare type SelectElementModule = CustomTextFieldProps & {
    validation?: any;
    name: string;
    options?: any[];
    valueKey?: string;
    labelKey?: string;
    type?: 'string' | 'number';
    parseError?: Function;
    objectOnChange?: boolean;
    onChange?: Function;
};
declare type TextFieldValidationProps = SelectElementModule;
declare const SelectElement: FunctionComponent<TextFieldValidationProps>;
export default SelectElement;
