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
import useFormValidation from './helpers/useFormValidation';
export default function DatePickerElement(_a) {
    var { isDate, parseError, name, required } = _a, rest = __rest(_a, ["isDate", "parseError", "name", "required"]);
    const { formValue, errorMessages, setValue } = useFormValidation({
        name,
        parseError,
        required
    });
    function onChange(date) {
        const parsedDate = isDate && date ? date && date.toISOString().substr(0, 10) : date;
        setValue(name, parsedDate, true);
        rest.onChange && rest.onChange(parsedDate);
    }
    return (React.createElement(DatePicker, Object.assign({}, rest, { value: formValue, required: !!required, onChange: onChange, error: !!errorMessages, helperText: errorMessages || rest.helperText })));
}
