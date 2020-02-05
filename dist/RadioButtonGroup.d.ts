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
    type?: 'number' | 'string';
    emptyOptionLabel?: 'string';
    onChange?: Function;
    returnObject?: boolean;
};
export default function RadioButtonGroup({ helperText, options, label, name, parseError, labelKey, valueKey, required, emptyOptionLabel, onChange, returnObject }: RadioButtonGroupProps): JSX.Element;
