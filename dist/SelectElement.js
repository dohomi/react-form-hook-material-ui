var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { createElement } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import useFormValidation from './helpers/useFormValidation';
export default function SelectElement(_a) {
    var { name, required, valueKey = 'id', labelKey = 'title', options = [], parseError, type, objectOnChange } = _a, rest = __rest(_a, ["name", "required", "valueKey", "labelKey", "options", "parseError", "type", "objectOnChange"]);
    const { formValue, setValue, errorMessages } = useFormValidation({
        name,
        parseError,
        required
    });
    let value = formValue || '';
    if (value && typeof value === 'object') {
        value = value[valueKey]; // if value is object get key
    }
    const isNativeSelect = !!(rest.SelectProps && rest.SelectProps.native);
    const component = isNativeSelect ? 'option' : MenuItem;
    const onChange = (event) => {
        let item = event.target.value;
        if (type === 'number') {
            item = Number(item);
        }
        setValue(name, item, true);
        if (rest.onChange) {
            if (objectOnChange) {
                item = options.find(i => i[valueKey] === item);
            }
            rest.onChange && rest.onChange(item);
        }
    };
    const helperText = errorMessages || rest.helperText;
    // handle shrink on number input fields
    if (type === 'number' && value) {
        rest.InputLabelProps = rest.InputLabelProps || {};
        rest.InputLabelProps.shrink = true;
    }
    return (React.createElement(TextField, Object.assign({}, rest, { select: true, value: value, required: required, error: !!errorMessages, helperText: helperText, onChange: onChange }),
        !!isNativeSelect && React.createElement("option", null),
        options.map((item) => createElement(component, {
            key: `${name}_${item[valueKey]}`,
            value: item[valueKey]
        }, item[labelKey]))));
}
