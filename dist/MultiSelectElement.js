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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useFormValidation from './helpers/useFormValidation';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MultiSelectElement = (_a) => {
    var { menuItems, label = '', itemKey = '', itemValue = '', itemLabel = '', required = false, validation = {}, parseError, name, menuMaxHeight = ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, menuMaxWidth = 250, minWidth = 120 } = _a, rest = __rest(_a, ["menuItems", "label", "itemKey", "itemValue", "itemLabel", "required", "validation", "parseError", "name", "menuMaxHeight", "menuMaxWidth", "minWidth"]);
    const { formValue, setValue, errorMessages } = useFormValidation({
        name,
        parseError,
        required
    });
    if (required) {
        validation.required = 'required';
    }
    const handleChange = (event) => {
        setValue(name, event.target.value, true);
    };
    return (React.createElement(FormControl, { style: { minWidth }, fullWidth: rest.fullWidth },
        React.createElement(InputLabel, { htmlFor: "select-multiple" }, label),
        React.createElement(Select, Object.assign({ multiple: true, value: formValue || [], onChange: handleChange, MenuProps: {
                PaperProps: {
                    style: {
                        maxHeight: menuMaxHeight,
                        width: menuMaxWidth
                    }
                }
            } }, rest, { inputProps: {
                error: errorMessages
            } }), menuItems.map((item) => (React.createElement(MenuItem, { key: !!itemKey ? item[itemKey] : item, value: itemValue ? item[itemValue] : item, style: { fontWeight: (formValue || []).includes(item) ? 'bold' : 'normal' } }, itemLabel ? item[itemLabel] : item))))));
};
export default MultiSelectElement;
