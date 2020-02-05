import React from 'react';
import { SelectProps } from '@material-ui/core/Select';
declare type Props = {
    menuItems: any;
    label?: string;
    itemKey?: string;
    itemValue?: string;
    itemLabel?: string;
    required?: boolean;
    validation?: any;
    name: string;
    parseError?: Function;
    minWidth?: number;
    menuMaxHeight?: number;
    menuMaxWidth?: number;
};
export declare type MultiSelectElementProps = SelectProps & Props;
declare const MultiSelectElement: React.FunctionComponent<MultiSelectElementProps>;
export default MultiSelectElement;
