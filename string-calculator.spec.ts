import { add } from "./string-calculator";

describe("String calculator", () => {
    test(`Given an empty string,
    when processing computation,
    then it returns zero`, () => {
        const anEmptyString = "";

        const result = add(anEmptyString);
        
        expect(result).toEqual(0);
    });

    test(`Given a number as string,
    when processing computation,
    then it returns this number`, () => {
        const numberAsString = "1";

        const result = add(numberAsString);
        
        expect(result).toEqual(1);
    });

    test(`Given a list of numbers as string,
    when processing computation,
    then it returns sum of those numbers`, () => {
        const aListOfNumberAsString = "1,2,3,4";

        const result = add(aListOfNumberAsString);
        
        expect(result).toEqual(10);
    });

    test(`Given a list of numbers as string,
    and separator being either coma or newlines,
    when processing computation,
    then it returns sum of those numbers`, () => {
        const aListOfNumberAsString = "1,2\n3";

        const result = add(aListOfNumberAsString);
        
        expect(result).toEqual(6);
    });

    test(`Given a list of numbers as string with tailing separator,
    when processing computation,
    then an exception is thrown`, () => {
        const aListOfNumberWithTailingSeparator = "1,2\n3,";

        expect(() => add(aListOfNumberWithTailingSeparator)).toThrow("Invalid tailing separator");
    });
    

    test.each([
        ["//;\n1;3", 4],
        ["//|\n1|2|3", 6],
        ["//sep\n2sep5", 7]
    ])(
        `Given a list of numbers as string (%p),
        and this list having a custom separator declared,
        when processing computation,
        then returns sum of those numbers`,
     (aListOfNumberWithCustomSeparator: string, expectedResult: number) => {
        expect(add(aListOfNumberWithCustomSeparator)).toEqual(expectedResult);
    });

    test(`Given a list of numbers as string with invalid separators in list,
    when processing computation,
    then an exception is thrown`, () => {
        const aListOfNumberWithWrongSeparator = "//|\n1|2,3";

        expect(() => add(aListOfNumberWithWrongSeparator)).toThrow("'|' expected but ',' found at position 3");
    });

    
    test(`Given a list of numbers as string with negative numbers,
    when processing computation,
    then an exception is thrown`, () => {
        const aListOfNumbersWithNegativeOnes = "2,-4,-9";

        expect(() => add(aListOfNumbersWithNegativeOnes)).toThrow("Negative number(s) not allowed: -4, -9");
    });

    test(`Given a list of numbers as string with negative numbers and wrong separator,
    when processing computation,
    then an exception is thrown`, () => {
        const aListOfNumbersWithMultipleErrors = "//|\n1|2,-3";

        expect(() => add(aListOfNumbersWithMultipleErrors)).toThrow("Negative number(s) not allowed: -3\n'|' expected but ',' found at position 3");
    });
    
    test(`Given a list of numbers as string with numbers higher than 1000,
    when processing computation,
    then those number are ignored from computation`, () => {
        const aListOfNumbersWithTooHighValues = "1,2,1000,2000";

        expect(add(aListOfNumbersWithTooHighValues)).toEqual(3);
    });

})
