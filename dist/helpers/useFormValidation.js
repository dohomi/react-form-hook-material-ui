import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import getNestedValue from './getNestedValue';
export default function useFormValidation({ required, name, parseError }) {
    const { setValue, errors, register, unregister, getValues } = useFormContext();
    const formValue = getNestedValue(getValues({ nest: true }), name);
    const getErrorMessages = () => {
        const errorType = errors[name];
        if (!errorType)
            return;
        if (parseError) {
            return parseError(errorType);
        }
        return errorType.message;
    };
    useEffect(() => {
        if (required) {
            register({ name: name }, {
                validate: {
                    required: (v) => Array.isArray(v) ? !!v.length : !!v || 'required'
                }
            });
        }
        else {
            register({ name: name });
        }
        return () => {
            unregister(name);
        };
    }, [register, name, required, unregister]);
    const errorMessages = getErrorMessages();
    return { formValue, setValue, errorMessages };
}
