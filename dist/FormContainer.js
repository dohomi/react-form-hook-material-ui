import React from 'react';
import { FormContext, useForm } from 'react-hook-form';
const FormContainerCore = ({ defaultValues = {}, onSuccess, FormProps, children }) => {
    const methods = useForm({
        defaultValues
    });
    const { handleSubmit } = methods;
    return (React.createElement(FormContext, Object.assign({}, methods),
        React.createElement("form", Object.assign({ onSubmit: handleSubmit(onSuccess), noValidate: true }, FormProps), children)));
};
const FormContainer = (props) => {
    if (!props.formContext) {
        return React.createElement(FormContainerCore, Object.assign({}, props));
    }
    return (React.createElement(FormContext, Object.assign({}, props.formContext),
        React.createElement("form", Object.assign({ onSubmit: props.formContext.handleSubmit(props.onSuccess), noValidate: true }, props.FormProps), props.children)));
};
export default FormContainer;
