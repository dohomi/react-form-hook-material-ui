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
import { FormContext, useForm } from 'react-hook-form';
const FormContainer = (_a) => {
    var { onSuccess, defaultValues } = _a, rest = __rest(_a, ["onSuccess", "defaultValues"]);
    const methods = useForm({
        defaultValues
    });
    const { handleSubmit } = methods;
    return (React.createElement(FormContext, Object.assign({}, methods),
        React.createElement("form", { onSubmit: handleSubmit(onSuccess), noValidate: true }, rest.children)));
};
export default FormContainer;
