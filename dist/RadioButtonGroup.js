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
export default function RadioButtonGroup({ helperText, options, label, name, parseError, labelKey = 'label', valueKey = 'id', required, emptyOptionLabel, onChange }) {
    const classes = useStyles();
    const { formValue, errorMessages, setValue } = useFormValidation({
        name,
        parseError,
        required
    });
    const value = formValue || '';
    helperText = errorMessages || helperText;
    const hasError = !!errorMessages;
    const radioProps = {};
    if (hasError) {
        radioProps.className = classes.root;
    }
    const radioChange = (option) => {
        // console.log(event.target)
        setValue(name, option, true);
        onChange && onChange(option);
    };
    return (React.createElement(FormControl, { error: hasError },
        label && React.createElement(FormLabel, null, label),
        React.createElement(RadioGroup, null,
            emptyOptionLabel && (React.createElement(FormControlLabel, { control: React.createElement(Radio, Object.assign({}, radioProps, { checked: !value, onChange: () => radioChange(null) })), label: emptyOptionLabel, value: "" })),
            options.map((option) => {
                // console.log(option, stateVal)
                const optionKey = option[valueKey];
                if (!optionKey) {
                    console.error(`CheckboxButtonGroup: valueKey ${valueKey} does not exist on option`, option);
                }
                return (React.createElement(FormControlLabel, { control: React.createElement(Radio, Object.assign({}, radioProps, { checked: !!(value && value[valueKey] === optionKey), onChange: () => radioChange(option) })), label: option[labelKey], key: optionKey }));
            })),
        helperText && React.createElement(FormHelperText, null, helperText)));
}
