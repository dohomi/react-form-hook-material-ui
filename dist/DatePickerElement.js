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
import React from 'react';
import { DatePicker } from '@material-ui/pickers';
import { Controller, useFormContext } from 'react-hook-form';
import getNestedValue from './helpers/getNestedValue';
import getErrorMessages from './helpers/getErrorMessages';
export default function DatePickerElement(_a) {
    var { isDate, parseError, name, required, validation = {} } = _a, rest = __rest(_a, ["isDate", "parseError", "name", "required", "validation"]);
    const { errors, getValues, control, setValue } = useFormContext();
    const formValue = getNestedValue(getValues({ nest: true }), name);
    const value = formValue || undefined;
    if (required) {
        validation.required = 'This field is required';
    }
    function onChange(date) {
        const parsedDate = isDate && date ? date && date.toISOString().substr(0, 10) : date;
        setValue(name, parsedDate, true);
        rest.onChange && rest.onChange(parsedDate);
    }
    const errorMessages = getErrorMessages(name, errors, parseError);
    return React.createElement(Controller, { name: name, required: !!required, control: control, rules: validation, as: React.createElement(DatePicker, Object.assign({}, rest, { value: value, onChange: onChange, error: !!errorMessages, helperText: errorMessages || rest.helperText })) });
}
