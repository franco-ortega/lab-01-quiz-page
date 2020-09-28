/*

When BUTTON is clicked, a POPUP will display


USER begins QUIZ with a SCORE (TOTAL) of 0

POPUP will ask user if they want to proceed with the QUIZ
    -If user clicks YES, the QUIZ proceeds.
        -POPUP moves to user NAME query.
    -If user clicks NO, the QUIZ ends.
        -POPUP closes.

NAME query
    -POPUP will ask user their NAME
    -user NAME will be input into the QUESTIONS
    -user NAME will be saved
    -POPUP will move to QUESTION 1

QUESTION 1
    -POPUP uses NAME to ask QUESTION 1
        -Correct ANSWER increases SCORE by 1 point
        -Wrong ANSWER does not affect SCORE
    -POPUP moves to Question 2


QUESTION 2
    -POPUP uses NAME to ask QUESTION 2
        -Correct ANSWER increases SCORE by 1 point
        -Wrong ANSWER does not affect SCORE
    -POPUP moves to Question 2


QUESTION 3
    -POPUP uses NAME to ask QUESTION 3
        -Correct ANSWER increases SCORE by 1 point
        -Wrong ANSWER does not affect SCORE
    -POPUP closes
    -RESULTs display in SPAN

RESULTS
     -Display SCORE ('Your total is SCORE out of 3')
     -If SCORE is 3, then 100%!!!
     -If SCORE is 2, then PRETTY GOOD!!
     -If SCORE is 1, then NOT BAD!
     -If SCORE is 0, then BETTER LUCK NEXT TIME

*/

export function countsAsYes(reply) {
    if (reply.charAt(0).toUpperCase() === 'Y') {
/*console*/console.log('they said yes!');
        return true;
    } else {
/*console*/console.log('they said no');
        return false;
    }
}

let quizScore = 0

        /*console*/console.log(quizScore);

const spanResults = document.getElementById('span-results');

const buttonStart = document.getElementById('button-start');

        /*console*/console.log(buttonStart);



buttonStart.addEventListener('click', () => {

        /*console*/console.log('the button was clicked!');
        /*console*/console.log(quizScore);



    const quizApproval = confirm('Do you want to take this quiz?');

        /*console*/console.log(quizApproval);
        /*console*/console.log(quizScore);

    if (quizApproval === true) {
    
    const userName = prompt('What is your name?')

        /*console*/console.log(userName);



/* START of QUESTION 1 */
    const answerOne = prompt(`Hey ${userName}! Does Lavinia get married?`);

        /*console*/console.log(answerOne);
        /*console*/console.log(quizScore);
    
        const judgeOne = countsAsYes(answerOne);
        
        /*console*/console.log(answerOne);
        /*console*/console.log(quizScore);

            if (judgeOne === true) {
                quizScore++;

        /*console*/console.log(quizScore);

            } else {
        /*console*/console.log('no points');

            }
/* END of QUESTION 1*/                


/* START of QUESTION 2*/
        const answerTwo = prompt(`Hey ${userName}! Is the new found city called Lantuma?`);

        /*console*/console.log(answerTwo);
        /*console*/console.log(quizScore);

        const judgeTwo = countsAsYes(answerTwo);
    
        /*console*/console.log(answerTwo);
        /*console*/console.log(quizScore);
    
        if (judgeTwo === false) {
            quizScore++;
    
        /*console*/console.log(quizScore + ' another point!');
    
            } else {

            }
/* END of QUESTION 2*/


/* START of QUESTION 3*/
const answerThree = prompt(`Hey ${userName}! Does Lavinia turn into a cat?`);

    /*console*/console.log(answerThree);
    /*console*/console.log(quizScore);

    const judgeThree = countsAsYes(answerThree);
    
    /*console*/console.log(answerThree);
    /*console*/console.log(quizScore);
        
        if (judgeThree === false) {
        quizScore++;
        
    /*console*/console.log(quizScore + ' another point!');

        } else {
        
        }
/* END of QUESTION 3*/
    

    if (quizScore === 3) {
        spanResults.textContent = `Great job, ${userName}! You correctly answered all ${quizScore} out of 3!!`;
    } else if (quizScore === 2) {
        spanResults.textContent = `Good job, ${userName}! You correctly answered ${quizScore} out of 3!`;
    } else if (quizScore === 1) {
        spanResults.textContent = `Good try, ${userName}! You correctly answered ${quizScore} out of 3.`;
    } else {
        spanResults.textContent = `Better luck next time, ${userName}! You answered ${quizScore} out of 3.`;
    }

    quizScore = 0;

    } else {
        return;
    }
    

});

