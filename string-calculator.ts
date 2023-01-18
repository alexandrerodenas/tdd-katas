const HIGH_LIMIT = 1000;
const DEFAULT_SEPARATOR = ',';
const NEWLINE = "\n";
const LEADING_SYMBOLE_FOR_CUSTOM_SEPARATOR = '//';

export function add(aString: string): number {
    if (aString.endsWith(DEFAULT_SEPARATOR) || aString.endsWith(NEWLINE)) {
        throw new Error("Invalid tailing separator");
    }

    const lines = aString.split(NEWLINE);
    let errors: string[] = [];

    let separator = DEFAULT_SEPARATOR;

    if (lines[0].startsWith(LEADING_SYMBOLE_FOR_CUSTOM_SEPARATOR)) {
        separator = lines[0].substring(2);
        lines.shift();
    }

    let sum = 0;
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
            const errorsInLine : string[] = [];
            const numbers = parseLine(lines[lineIndex], separator, errorsInLine);
            const negativeNumbers = numbers.filter(number => number < 0);
            if (negativeNumbers.length > 0) {
                errorsInLine.push(`Negative number(s) not allowed: ${negativeNumbers.join(", ")}`);
            }
            sum += numbers
                .filter(number => number < HIGH_LIMIT)
                .reduce((current, acc) => acc + current);
            errorsInLine.reverse();
            errors = errors.concat(errorsInLine);
    }

    if(errors.length > 0){
        throw new Error(errors.join(NEWLINE));
    }

    return sum;
}

function parseLine(line: string, separator: string, errors: string[]): number[] {
    const match = new RegExp(`[^\\d^${separator}^\\-]`).exec(line);
    if (match) {
        errors.push(`'${separator}' expected but '${match[0]}' found at position ${match.index}`);
        line = line.replace(match[0], separator);
    }
    return line.split(separator).map(numberAsString => +numberAsString);
}

