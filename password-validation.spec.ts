import { validate } from "./password-validation";

describe("Password validation", () => {
    test(`Given a password having less than eight characters,
    when validing it,
    then it fails with expected message`, () => {
        const aPasswordBeingTooShort = "2Sh0rt@";

        const validation = validate(aPasswordBeingTooShort);

        expect(validation.isValid).toBeFalsy();
        expect(validation.errors).toEqual(
            "Password must be at least 8 characters"
        );
    });

    test(`Given a password having less than two numbers,
    when validing it,
    then it fails with expected message`, () => {
        const aPasswordWithoutAtLeastTwoNumbers = "notWithout2Numb#rs";

        const validation = validate(aPasswordWithoutAtLeastTwoNumbers);

        expect(validation.isValid).toBeFalsy();
        expect(validation.errors).toEqual(
            "The password must contain at least 2 numbers"
        );
    });

    test(`Given a password having less than two numbers and being too short,
    when validing it,
    then it fails with expected message`, () => {
        const aPasswordWithMultipleIssues = "2_Short";

        const validation = validate(aPasswordWithMultipleIssues);

        expect(validation.isValid).toBeFalsy();
        expect(validation.errors).toEqual(
            "Password must be at least 8 characters\nThe password must contain at least 2 numbers"
        );
    });

    test(`Given a password not having any capital letter,
    when validing it,
    then it fails with expected message`, () => {
        const aPasswordWithoutCapitalLetter = "password0no0c@pital0letter";

        const validation = validate(aPasswordWithoutCapitalLetter);

        expect(validation.isValid).toBeFalsy();
        expect(validation.errors).toEqual(
            "The password must contain at least one capital letter"
        );
    });

    test(`Given a password not having any special character,
    when validing it,
    then it fails with expected message`, () => {
        const aPasswordWithoutSpecialCharacter = "n0SpecialCharac1er";

        const validation = validate(aPasswordWithoutSpecialCharacter);

        expect(validation.isValid).toBeFalsy();
        expect(validation.errors).toEqual(
            "The password must contain at least one special character"
        );
    });
});