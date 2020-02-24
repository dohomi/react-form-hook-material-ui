import React from 'react';
import { FormContext, useForm } from 'react-hook-form';
const FormContainer = ({ onSuccess, defaultValues, children, FormProps }) => {
    const methods = useForm({
        defaultValues
    });
    const { handleSubmit } = methods;
    return (React.createElement(FormContext, Object.assign({}, methods),
        React.createElement("form", Object.assign({ onSubmit: handleSubmit(onSuccess), noValidate: true }, FormProps), children)));
};
export default FormContainer;
