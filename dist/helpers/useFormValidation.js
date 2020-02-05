import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import getNestedValue from './getNestedValue';
export default function useFormValidation({ required, name, parseError }) {
    const { setValue, errors, register, unregister, watch } = useFormContext();
    const vals = watch({ nest: true });
    const formValue = getNestedValue(vals, name);
    const fieldError = errors[name];
    const getErrorMessages = () => {
        var _a;
        const errorType = (_a = fieldError) === null || _a === void 0 ? void 0 : _a.type;
        if (!errorType)
            return;
        return parseError ? parseError(errorType) : `This field is ${errorType}`;
    };
    useEffect(() => {
        if (required) {
            register(name, {
                validate: {
                    required: (v) => Array.isArray(v) ? !!v.length : !!v || 'required'
                }
            });
        }
        else {
            register(name);
        }
        return () => {
            unregister(name);
        };
    }, [register, name, required, unregister]);
    const errorMessages = getErrorMessages();
    return { formValue, setValue, errorMessages, watch };
}
