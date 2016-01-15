


var userName = prompt("Hello, Whats your name?");
document.write("Hi " + userName + ". Nice to meet you.  I am going to ask you a few questions about me and I want you to try and guess the correct answer.  At the end, I will let you know how many questions you got right.");
console.log('This is the userName variable: ' + userName);

//Correct Answer Counter
var correctAnswers = 0
var questions = ["Question 1:  Was I born in in Washington?", "Question 2: Do I like Coffee or Tea more?", "Question 3: I have a pet named 'Penny'.  Is she a cat or dog?", "Question 4: How old am I?"];
var answers = ["yes", "coffee", "dog", 26];

var userAnswer = document.getElementById('a1');

function game(questions, answers) {
 var ques = prompt(questions).toLowerCase();
 if (ques === answers || parseInt(ques) === answers) {
   userAnswer.innerHTML = "You got it right!";
   correctAnswers++;
 } else {
     userAnswer.innerHTML = "Sorry, you are wrong.";
   }

}

for (var i = 0; i < questions.length; i += 1) {
 game(questions[i], answers[i]);

}

// //First Question
// var questionOne = prompt("Question 1:  Was I born in in Washington?").toUpperCase();
// console.log('This is the answer to the first question : ' + questionOne);
// if (questionOne == 'YES') {
//   alert("Sorry " + userName + ", I was not born in Washington.  I was born in Texas!");
// } else if (questionOne == 'NO') {
//   alert("Correct " + userName + "!  I was not born in Washington, I was born in Texas");
//   correctAnswers += 1;
// } else {
//   alert("It doesnt look like your answered 'yes' or 'no' so technically you are wrong!");
// }
// //Second Question
// var  questionTwo = prompt("Question 2: Do I like Coffee or Tea more?").toLowerCase();
// console.log('This is the answer to the first question : ' + questionTwo);
// if (questionTwo == "coffee") {
//   alert("Correct "  + userName + "!  I love me some coffee");
//   correctAnswers += 1;
// } else {
//   alert("Sorry "  + userName + " that is incorrect.  I love coffee much more than " + questionTwo + ".");
// }
// //Third Question
// var questionThree = prompt("Question 3: I have a pet named 'Penny'.  Is she a cat or dog?").toLowerCase();
// console.log('This is the answer to the first question : ' + questionThree);
// if (questionThree == 'dog') {
//   alert("Correct "  + userName + "!  Penny is my dog and I love her!");
//   correctAnswers += 1;
// } else {
//   alert("Nope.  Penny is not a " + questionThree + ".  She is a dog!");
// }
// //Fourth Question
// var questionFour = prompt("Question 4: How old am I?");
// console.log("the 'parseInt' function is used to turn the string answer to 'questionFour' to an integer");
// var num1 = parseInt(questionFour);
// if (num1 < 26) {
//   alert("sorry, you guessed too low!  I am 26.");
// } else if (num1 > 26) {
//   alert('Sorry, you guessed too high!  I am 26');
// } else if (num1 === 26)  {
//   alert("Holy smokes!  Good guess.  I am indeed 26");
//   correctAnswers += 1;
// } else {
//   alert("Doesnt look like you guessed a number!");
// }
// //Bonus Question!!
//
// alert("You got " + correctAnswers + " out of 4 questions correct!");
// var bonusGuess = 0; //Counter for bonus question attempts
// var bonusNum = 3; //Number for user to guess
// var bonusQuestion = prompt("Time for a bonus question!  I am thinking of a number between 1 and 10.  What's my number?  Continue guessing until you get it!");
// var questionNum = parseInt(bonusQuestion); //Takes the string entered by user and changes it to an integer and stores it in the questionNum  variable
//
// //Loop for bonus question
// while (questionNum !== 3) {
//   questionNum = parseInt(prompt("Guess Again!"));
//   bonusGuess += 1;
//
// }
// //Alert letting the user know how many guesses it took them to guess the number I was thinking of.
// alert("Great job!  You got it right!  It took you " + bonusGuess + " tries to guess my number.");
