import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import getNestedValue from './getNestedValue';
import getErrorMessages from './getErrorMessages';
export default function useFormValidation({ required, name, parseError }) {
    const { setValue, errors, register, unregister, watch } = useFormContext();
    const vals = watch({ nest: true });
    const formValue = getNestedValue(vals, name);
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
    const errorMessages = getErrorMessages(name, errors, parseError);
    return { formValue, setValue, errorMessages, watch };
}
