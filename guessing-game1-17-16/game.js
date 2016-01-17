
var ans1 = document.getElementById("a1");
var userAnswersId = document.getElementById("a2")
// var greeting = document.getElementById("a2");
// var ans3 = document.getElementById("a3");

var gameCount = 1;
var totalWrong = 0;
var totalRight = 0;
var bonus = 0;


var userName = prompt("Hello! My name is RALPH, your Radical Adventure Leveraging Personal Helper! But you can call me RALPH. What's your name?");
ans1.innerHTML = userName + " it's great to meet you.\nI think it would be best for you to get to know me.\nSo here's a little game!";

var guessingGame = true;
while (guessingGame === true) {

var questions = ["Lets see how well you pay attention. what's my name?","Lets move on. What is my favorite color? I'll give you a hint: it rhymes with 'bed'","How about my favorite food? This one sounds like 'lacos' also, it's not cereal"];
var answers = ["RALPH","green","TACOS"];
var userAnswers = [];

function game(questions, answers) {
  var ques = prompt(questions).toUpperCase();

  if (answers === ques) {
    totalRight++;
    userAnswers.push(ques)
    userAnswersId.innerHTML = userAnswers;
    ans1.innerHTML = "You got it!";
  } else {
    totalWrong++
    userAnswers.push(ques)
    ans1.innerHTML = "Nuts... not quite right.";
  }
}
for (var i = 0; i < questions.length; i++) {
  game(questions[i], answers[i]);
}
var ageGuess = parseInt(prompt("lets try one a bit harder. I'll give 5 guesses for this one.\nHow old am I?"))
  var count = 1;

while (count < 6) {
  if (count === 5) {
      ans1.innerHTML = "Well, I had more faith in you than that. I'm 42. I'll always be 42.";
      break;
  } else if (ageGuess === 42 && count === 1) {
      ans1.innerHTML = "You should work for the circus! You guessed my age in " + count + " try! That's all for now, but you can be sure that I'll be around... watching...";
      bonus++
      break;
  } else if (ageGuess === 42) {
      ans1.innerHTML = "You should work for the circus! You guessed my age in " + count + " trys! That's all for now, but you can be sure that I'll be around... watching...";
      bonus++
      break;
  } else if (ageGuess < 42) {
      ++count;
      ageGuess = parseInt(prompt("It looks like you are a bit low. I'm Flattered of course but... try again."));
  } else if (ageGuess > 42) {
      ++count;
      ageGuess = parseInt(prompt("Really?!? I look that old?!?! thanks... why not just give that another guess."));
  } else {
      ++count;
      ageGuess = parseInt(prompt("That's a new one! wrong, but new. try again."));

  }
}
ans1.innerHTML = "Ah-Ha!\nYou think the game is over?! It is far from it!";
var bonus2 = prompt("I have a backpack full of Treasures that I've collected.\nGuess just one and you will gain +5 honor... And just be even nerdier. May Zork guide you!")

var treasure = ["coins","torch","emerald","bracelet","necklace","figurine","grail","picture","portrait","trunk","trident","bar","coffin","chalice","egg","diamond","ruby","zorkmid","stamp","small statue","crystal sphere","tin of spices","violin","dimwits crown"];
for (var i = 0; i < treasure.length; i++) {
  var answerBonus2 = bonus2.toLowerCase()
  if (answerBonus2 === treasure[i]) {
    bonus++;
    ans1.innerHTML = "You are cut from my own mold!\nYou guessed my Treasure!";
    break;
  } else {
    ans1.innerHTML = "It seems you are not whom I had hoped you were... sad";
    break;
  }
}


var gamePlays = prompt(("Would you like to play again?")).toLowerCase();
    if (gamePlays === "yes") {
      gameCount++;
  } else if (gamePlays === "no") {
      ans1.innerHTML = "Thanks for playing " + userName + "!";
      break;
  } else {
      ans1.innerHTML = "I'll take that as a no. C-ya!";
      break
  }
}

ans1.innerHTML = "STATS:\nGames Palyed: " + gameCount + "\nGuesses Right: " + totalRight + "\nGuesses Wrong: " + totalWrong +"\nBONUS: " + bonus;

//Old code
//     if (RALPH === "RALPH") {
//       totalRight++
//       var userName = prompt("That's right! And what may I call you?");
//
//   } else if (RALPH === "Radical Adventure Leveraging Personal Helper") {
//       totalRight++
//       userName = prompt("That's right! And what may I call you?");
//   } else {
//       totalWrong++
//       userName = prompt("Close, but it's RALPH... I am a little OCD about it. that's okay though! what may I call you?");
//   }
//
//   var favColor = prompt(userName + ", nice to meet you! Let's keep going. What is my favorite color? I'll give you a hint: it rhymes with 'bed'");
//   var color1 = favColor.toUpperCase();
//
//     if (color1 === "RED") {
//       totalRight++
//       var favFood =  prompt("Nailed it! How about my favorite food? This one sounds like 'lacos, also, it's not cereal.");
//       var food1 = favFood.toUpperCase();
//   } else {
//       totalWrong++
//       favFood = prompt("HHmmmmm... Red, red is the only true color. What would you say my favorite food would be? Hint: it's not cereal");
//       food1 = favFood.toUpperCase();
//   }
//     if (food1 === "TACOS") {
//       totalRight++;
//       var ageGuess = parseInt(prompt("You are on a roll " + userName + "!\nHow about one more just for fun.\nHow old am I?"));
//   } else if (food1 === "CEREAL") {
//       totalWrong++;
//       ageGuess = parseInt(prompt("I thought I said it was NOT cereal?? oh well.\nLast one.\nHow old would you say I am?"));
//   } else {
//       totalWrong++;
//       ageGuess = parseInt(prompt("Well, tacos would have been ideal, but I can also always go for some Mega-Bytes.\nLast one.\nHow old do you think I am?"));
//   }
//
