readMe

My code consists of 3 documents
-index.html
-script.js
-style.js

index.html
I made it so that every single question is a single div. Each correct answer has an id.
Every incorrect answer has another id.

This was done so that it is easier to manipulate using JS.


script.js
The most important part at first was hiding all of my elements and showing them only when the button with the correct id is shown. if the answer is correct the current question is hidden and the next question is shown. 

If the answer is incorrect a hidden div containing the text "incorrect try again!" will display for every wrong answer.

The timer starts when the start quiz button is pressed and is stopped when the final correct answer is pressed. once this happens, the timer will reset and be ready for the next quiz try.

When the text for the highscore is added it is moved to local storage and when the button is pressed it is displayed in the text area. 


style.css
This code is very basic and only adds coloring and format to the page. 
I also used CSS to center the show highscores button.