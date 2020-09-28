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




    const answerOne = prompt(`Hey ${userName}! Is the answer YES or NO?`);

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
                





        const answerTwo = prompt(`Hey ${userName}! Is this answer NO or YES?`);

        /*console*/console.log(answerTwo);
        /*console*/console.log(quizScore);

        const judgeTwo = countsAsYes(answerTwo);
    
        /*console*/console.log(answerOne);
        /*console*/console.log(answerTwo);
        /*console*/console.log(quizScore);
    
        if (judgeTwo === false) {
            quizScore++;
    
        /*console*/console.log(quizScore + ' another point!');
    
            } else {
        /*console*/console.log('no points');

            }




   const answerThree = prompt(`Hey ${userName}! Is this answer NO or YES?`);

    /*console*/console.log(answerThree);
    /*console*/console.log(quizScore);

    const judgeThree = countsAsYes(answerThree);
    
    /*console*/console.log(answerOne);
    /*console*/console.log(answerTwo);
    /*console*/console.log(answerThree);
    /*console*/console.log(quizScore);
        
        if (judgeThree === true) {
        quizScore++;
        
    /*console*/console.log(quizScore + ' another point!');

        } else {
    /*console*/console.log('no points');
        
        }
    
    spanResults.textContent = `You got ${quizScore} out of 3.`;





    } else {
        return;
    }
    

});

