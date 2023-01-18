export interface Validation {
    isValid: boolean;
    errors: string;
}

const AT_LEAST_TWO_NUMBERS = '([0-9].*){2,}';
const LENGTH_REQUIRED = 8;
const AT_LEAT_ONE_CAPITAL_LETTER = '[A-Z]';
const SPECIAL_CHARACTERS = '[^0-9a-zA-Z]';
export function validate(password: string): Validation {
    const errors: string[] = [];
    if (password.length < LENGTH_REQUIRED) {
        errors.push("Password must be at least 8 characters");
    }

    if (!password.match(new RegExp(AT_LEAST_TWO_NUMBERS))) {
        errors.push("The password must contain at least 2 numbers");
    }

    if (!password.match(new RegExp(AT_LEAT_ONE_CAPITAL_LETTER))) {
        errors.push("The password must contain at least one capital letter");
    }

    if (!password.match(new RegExp(SPECIAL_CHARACTERS))) {
        errors.push("The password must contain at least one special character");
    }
    
    return ({
        isValid: errors.length === 0,
        errors: errors.join('\n')
    });
}