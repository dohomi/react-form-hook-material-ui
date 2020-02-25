import getNestedValue from './getNestedValue';
const getErrorMessages = (name, errors, parseError) => {
    var _a;
    const fieldError = getNestedValue(errors, name) || undefined;
    const errorType = (_a = fieldError) === null || _a === void 0 ? void 0 : _a.type;
    if (Array.isArray(fieldError)) {
        console.error('Unexpected field error', fieldError);
    }
    if (!errorType)
        return;
    return parseError ? parseError(errorType) : `This field is ${errorType}`;
};
export default getErrorMessages;
