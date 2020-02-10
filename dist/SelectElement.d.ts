/// <reference types="react" />
import { TextFieldProps } from '@material-ui/core/TextField';
declare type CustomTextFieldProps = Omit<TextFieldProps, 'name' | 'variant' | 'type' | 'onChange'>;
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
export default function SelectElement({ name, required, valueKey, labelKey, options, parseError, type, objectOnChange, validation, ...rest }: TextFieldValidationProps): JSX.Element;
export {};
