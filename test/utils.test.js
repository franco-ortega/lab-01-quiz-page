import { countsAsYes } from '../count-as-yes.js'

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('time to test a function', (expect) => {
    //Arrange
    // Any string that starts with the letter 'Y' or 'y' will return true
    const testWord = 'Yello';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsYes(testWord);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



test('time to test a function', (expect) => {
    //Arrange
    // Any string that starts with the letter 'Y' or 'y' will return true
    const testWord = 'No no no no no no!!!';
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsYes(testWord)

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
