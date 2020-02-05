/// <reference types="react" />
import { DatePickerProps } from '@material-ui/pickers';
interface DatePickerElement extends Omit<DatePickerProps, 'value' | 'onChange'> {
    name: string;
    required?: boolean;
    isDate?: boolean;
    parseError?: Function;
    onChange?: Function;
}
declare type DatePickerElementProps = DatePickerElement;
export default function DatePickerElement({ isDate, parseError, name, required, ...rest }: DatePickerElementProps): JSX.Element;
export {};
