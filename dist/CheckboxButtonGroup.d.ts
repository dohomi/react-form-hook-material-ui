/// <reference types="react" />
export declare type RadioButtonGroupProps = {
    options: any[];
    helperText?: string;
    name: string;
    required?: boolean;
    parseError?: Function;
    label?: string;
    labelKey?: string;
    valueKey?: string;
    onChange?: Function;
    returnObject?: boolean;
};
export default function CheckboxButtonGroup({ helperText, options, label, name, parseError, required, labelKey, valueKey, onChange, returnObject }: RadioButtonGroupProps): JSX.Element;
