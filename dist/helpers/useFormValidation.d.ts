declare type UseFormValidationProps = {
    required?: boolean;
    name: string;
    parseError?: Function;
};
export default function useFormValidation({ required, name, parseError }: UseFormValidationProps): {
    formValue: any;
    setValue: <Name extends string>(name: Name, value: any, shouldValidate?: boolean | undefined) => void | Promise<boolean>;
    errorMessages: any;
    watch: {
        (): Record<string, any>;
        (option: {
            nest: boolean;
        }): Record<string, any>;
        <T extends string>(field: T & string, defaultValue?: string | undefined): any;
        (fields: string[], defaultValues?: import("react-hook-form").DeepPartial<Record<string, any>> | undefined): import("react-hook-form").DeepPartial<Record<string, any>>;
        (fieldNames?: string | string[] | {
            nest: boolean;
        } | undefined, defaultValue?: string | import("react-hook-form").DeepPartial<Record<string, any>> | undefined): any;
    };
};
export {};
