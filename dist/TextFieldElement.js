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
import TextField from '@material-ui/core/TextField';
import { Controller, useFormContext } from 'react-hook-form';
import getErrorMessages from './helpers/getErrorMessages';
/**
 * Important: variant is not part of props due to nasty and un-resolvable. you can't use variant only as provider props
 *
 * See: https://github.com/mui-org/material-ui/issues/15697
 */
export default function TextFieldElement(_a) {
    var { validation = {}, parseError, type, required, name } = _a, rest = __rest(_a, ["validation", "parseError", "type", "required", "name"]);
    const { errors, control } = useFormContext();
    // const formValue: any = getNestedValue(getValues({ nest: true }), name)
    // const value = formValue || ''
    if (required) {
        validation.required = 'This field is required';
    }
    if (type === 'email') {
        validation.pattern = {
            // eslint-disable-next-line no-useless-escape
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'email'
        };
    }
    const errorMessages = getErrorMessages(name, errors, parseError);
    return React.createElement(Controller, { required: required, name: name, control: control, rules: validation, as: React.createElement(TextField, Object.assign({}, rest, { type: type, error: !!errorMessages, helperText: errorMessages || rest.helperText })) });
}
