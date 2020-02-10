/// <reference types="react" />
import { DatePickerProps } from '@material-ui/pickers';
interface DatePickerElement extends Omit<DatePickerProps, 'value' | 'onChange'> {
    name: string;
    required?: boolean;
    isDate?: boolean;
    parseError?: Function;
    onChange?: Function;
    validation?: any;
}
declare type DatePickerElementProps = DatePickerElement;
export default function DatePickerElement({ isDate, parseError, name, required, validation, ...rest }: DatePickerElementProps): JSX.Element;
export {};
