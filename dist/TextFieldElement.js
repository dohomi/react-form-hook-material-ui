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
import { useFormContext } from 'react-hook-form';
import getNestedValue from './helpers/getNestedValue';
/**
 * Important: variant is not part of props due to nasty and un-resolvable. you can't use variant only as provider props
 *
 * See: https://github.com/mui-org/material-ui/issues/15697
 */
export default function TextFieldElement(_a) {
    var { validation, parseError, type, required, name } = _a, rest = __rest(_a, ["validation", "parseError", "type", "required", "name"]);
    const { register, errors, getValues } = useFormContext();
    const formValue = getNestedValue(getValues({ nest: true }), name);
    const value = formValue || '';
    if (required) {
        validation = validation || {};
        validation.required = 'required';
    }
    if (type === 'email') {
        validation = validation || {};
        validation.pattern = {
            // eslint-disable-next-line no-useless-escape
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'email'
        };
    }
    const getErrorMessages = () => {
        const errorType = errors[name];
        if (!errorType)
            return;
        return parseError ? parseError(errorType) : errorType.message;
    };
    const errorMessages = getErrorMessages();
    const registerProps = {
        inputRef: register
    };
    if (validation) {
        // @ts-ignore
        registerProps.inputRef = register(validation);
    }
    return (React.createElement(TextField, Object.assign({}, rest, registerProps, { defaultValue: value, required: required, name: name, type: type, error: !!errorMessages, helperText: errorMessages || rest.helperText })));
}
