const isMultipleOfThree = (x: number) => x % 3 === 0;
const isMultipleOfFive = (x: number) => x % 5 === 0;

export function fizzBuzz(aNumber: number): string {
    if (isMultipleOfThree(aNumber) && isMultipleOfFive(aNumber)) {
        return "FizzBuzz"
    } else if (isMultipleOfThree(aNumber)) {
        return "Fizz";
    } else if (isMultipleOfFive(aNumber)) {
        return "Buzz";
    }
    return `${aNumber}`;
}