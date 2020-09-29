# lab-01-quiz-page

## HTML

1. Add Quiz content
1. Add BUTTON to start quiz.
1. Add ELEMENT (span) to hold (and reveal) RESULTS area at the bottom of the page.

+ Give **ID** to BUTTON = button-start
+ Give **ID** to SPAN = span-results


## JavaScipt

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
