declare type UseFormValidationProps = {
    required?: boolean;
    name: string;
    parseError?: Function;
};
export default function useFormValidation({ required, name, parseError }: UseFormValidationProps): {
    formValue: any;
    setValue: <Name extends string>(name: Name, value: any, shouldValidate?: boolean | undefined) => void;
    errorMessages: any;
};
export {};
