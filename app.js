import { countsAsYes } from './count-as-yes.js'

let quizScore = 0;
let threeCorrect = Math.floor(3 / 3 * 100);
let twoCorrect = Math.floor(2 / 3 * 100);
let oneCorrect = Math.floor(1 / 3 * 100);
let zeroCorrect = Math.floor(0 / 3 * 100);


const spanResults = document.getElementById('span-results');
const buttonStart = document.getElementById('button-start');

buttonStart.addEventListener('click', () => {

    const quizApproval = confirm('Do you want to take this quiz?');

    if (quizApproval === true) {
        const userName = prompt('What is your name?')


/* START of QUESTION 1 */
        const answerOne = prompt(`Hey ${userName}! Does Lavinia get married?`);
        const judgeOne = countsAsYes(answerOne);
        
            if (judgeOne === true) {
                quizScore++;
            }

/* START of QUESTION 2 */
        const answerTwo = prompt(`How about this one, ${userName}. Is the new found city called Lantuma?`);
        const judgeTwo = countsAsYes(answerTwo);
    
            if (judgeTwo === false) {
                quizScore++;
            }

/* START of QUESTION 3 */
        const answerThree = prompt(`One more to go, ${userName}! Does Lavinia turn into a cat?`);
        const judgeThree = countsAsYes(answerThree);
    
            if (judgeThree === false) {
                quizScore++;
        }

        alert(`You have completed the quiz, ${userName}! Click OK to see your results.`);
    
/* QUIZ SCORE */
    if (quizScore === 3) {
        spanResults.textContent = `Congratulations, ${userName}! You correctly answered all ${quizScore} out of 3 for ${threeCorrect}%!!`;
    } else if (quizScore === 2) {
        spanResults.textContent = `Good job, ${userName}! You correctly answered ${quizScore} out of 3 for ${twoCorrect}%!`;
    } else if (quizScore === 1) {
        spanResults.textContent = `Good try, ${userName}. You correctly answered ${quizScore} out of 3 for ${oneCorrect}%.`;
    } else {
        spanResults.textContent = `You correctly answered ${quizScore} out of 3 for ${zeroCorrect}%. Better luck next time, ${userName}.`;
    }

    quizScore = 0;
    } 
});

