import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {

  test(`Given a number not multiple of three or five,
    when fizz buzzing it,
    then it returns this number as string`, () => {
    const aNumber = 1;

    expect(fizzBuzz(aNumber)).toEqual(`${aNumber}`);
  });

  test(`Given a number multiple of three,
  when fizz buzzing it,
  then it returns Fizz`, () => {
    const aNumberMultipleOfThree = 3;

    expect(fizzBuzz(aNumberMultipleOfThree)).toEqual('Fizz');
  });

  test(`Given a number multiple of five,
  when fizz buzzing it,
  then it returns Buzz`, () => {
    const aNumberMultipleOfFive = 5;

    expect(fizzBuzz(aNumberMultipleOfFive)).toEqual('Buzz');
  });

  test(`Given a number multiple of five and three,
  when fizz buzzing it,
  then it returns FizzBuzz`, () => {
    const aNumberMultipleOfThreeAndFive = 15;

    expect(fizzBuzz(aNumberMultipleOfThreeAndFive)).toEqual('FizzBuzz');
  });


});
