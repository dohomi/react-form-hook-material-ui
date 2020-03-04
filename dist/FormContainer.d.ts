import { FormHTMLAttributes, FunctionComponent } from 'react';
import { FormContextValues } from 'react-hook-form';
export declare type FormContainerProps = {
    onSuccess: any;
    defaultValues?: any;
    formContext?: FormContextValues;
    FormProps?: FormHTMLAttributes<HTMLFormElement>;
};
declare const FormContainer: FunctionComponent<FormContainerProps>;
export default FormContainer;
