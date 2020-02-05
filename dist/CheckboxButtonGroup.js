import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { red } from '@material-ui/core/colors';
import { Checkbox } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import useFormValidation from './helpers/useFormValidation';
const useStyles = makeStyles({
    root: {
        color: red[400]
    }
});
export default function CheckboxButtonGroup({ helperText, options, label, name, parseError, required, labelKey = 'label', valueKey = 'id', onChange }) {
    const classes = useStyles();
    const { setValue, formValue, errorMessages } = useFormValidation({
        parseError,
        name,
        required
    });
    const values = formValue || [];
    const handleChange = (index) => {
        const newArray = [...values];
        const exists = values.findIndex(i => i[valueKey] === index) === -1;
        if (exists) {
            newArray.push(options.find(i => i[valueKey] === index));
        }
        else {
            newArray.splice(values.findIndex(i => i[valueKey] === index), 1);
        }
        setValue(name, newArray, true);
        onChange && onChange(newArray);
    };
    helperText = errorMessages || helperText;
    const hasError = !!errorMessages;
    const checkboxProps = {};
    if (hasError) {
        checkboxProps.className = classes.root;
    }
    return (React.createElement(FormControl, { error: hasError, required: required },
        label && React.createElement(FormLabel, { error: hasError }, label),
        React.createElement(FormGroup, null, options.map((option) => {
            const optionKey = option[valueKey];
            if (!optionKey) {
                console.error(`CheckboxButtonGroup: valueKey ${valueKey} does not exist on option`, option);
            }
            const isChecked = values.findIndex(item => item[valueKey] === optionKey) !== -1;
            return (React.createElement(FormControlLabel, { control: React.createElement(Checkbox, Object.assign({}, checkboxProps, { color: "primary", value: optionKey, checked: isChecked, onChange: () => handleChange(optionKey) })), label: option[labelKey], key: optionKey }));
        })),
        helperText && React.createElement(FormHelperText, null, helperText)));
}
