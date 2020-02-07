/// <reference types="react" />
import { TextFieldProps } from '@material-ui/core/TextField';
export declare type TextFieldElementModule = Omit<TextFieldProps, 'name' | 'variant'> & {
    validation?: any;
    name: string;
    parseError?: Function;
};
export declare type TextFieldValidationProps = TextFieldElementModule;
/**
 * Important: variant is not part of props due to nasty and un-resolvable. you can't use variant only as provider props
 *
 * See: https://github.com/mui-org/material-ui/issues/15697
 */
export default function TextFieldElement({ validation, parseError, type, required, name, ...rest }: TextFieldValidationProps): JSX.Element;
