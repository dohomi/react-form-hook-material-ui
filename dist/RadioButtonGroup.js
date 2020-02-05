import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import { red } from '@material-ui/core/colors';
import useFormValidation from './helpers/useFormValidation';
const useStyles = makeStyles({
    root: {
        color: red[400]
    }
});
export default function RadioButtonGroup({ helperText, options, label, name, parseError, labelKey = 'label', valueKey = 'id', required, emptyOptionLabel, onChange, returnObject }) {
    const classes = useStyles();
    const { formValue, errorMessages, setValue } = useFormValidation({
        name,
        parseError,
        required
    });
    helperText = errorMessages || helperText;
    const hasError = !!errorMessages;
    const radioProps = {};
    if (hasError) {
        radioProps.className = classes.root;
    }
    const onRadioChange = (event) => {
        const radioValue = event.target.value;
        const returnValue = returnObject ? options.find(items => items[valueKey] === radioValue) : radioValue;
        setValue(name, returnValue, true);
        onChange && onChange(returnValue);
    };
    console.log(formValue);
    return (React.createElement(FormControl, { error: hasError },
        label && React.createElement(FormLabel, null, label),
        React.createElement(RadioGroup, { onChange: onRadioChange, name: name, value: formValue },
            emptyOptionLabel && (React.createElement(FormControlLabel, { control: React.createElement(Radio, Object.assign({}, radioProps, { checked: !formValue })), label: emptyOptionLabel, value: "" })),
            options.map((option) => {
                // console.log(option, stateVal)
                const optionKey = option[valueKey];
                if (!optionKey) {
                    console.error(`CheckboxButtonGroup: valueKey ${valueKey} does not exist on option`, option);
                }
                const isChecked = !!(formValue && (returnObject ? formValue[valueKey] === optionKey : formValue === optionKey));
                return (React.createElement(FormControlLabel, { control: React.createElement(Radio, Object.assign({}, radioProps, { checked: isChecked })), value: optionKey, label: option[labelKey], key: optionKey }));
            })),
        helperText && React.createElement(FormHelperText, null, helperText)));
}
