
var ans1 = document.getElementById("a1");
var ans2 = document.getElementById("a2");
var ans3 = document.getElementById("a3");
var img = document.getElementById("IMG1");
var userAnswersId = document.getElementById("a2");
var stats = document.getElementById("a3");
var responseCall = document.getElementById("response");
var gameCount = 1;
var totalWrong = 0;
var totalRight = 0;
var bonus = 0;
var questions = ["---Lets see how well you pay attention. what's my name?","RALPH: Lets move on. What is my favorite color? I'll give you a hint: it rhymes with 'bed'","RALPH: How about my favorite food? This one sounds like 'lacos' also, it's not cereal"];
var answers = ["RALPH","RED","TACOS"];
var responses = [];
var userAnswers = [];
var userName = prompt("Hello! My name is RALPH, your Radical Adventure Leveraging Personal Helper! But you can call me RALPH. What's your name?");

userAnswers.unshift(userName + ": " + userName);
userAnswersId.innerHTML = (userAnswers);
ans1.innerHTML ="RALPH: It's great to meet you.\nI think it would be best\n for you to get to know me.\nSo here's a little game!";
responseCall.innerHTML = responses;

var guessingGame = true;
while (guessingGame === true) {
  function game(questions, answers) {
    var ques = prompt(questions).toUpperCase();
    userAnswers.unshift(userName + ": " + ques);
    userAnswersId.innerHTML = userAnswers;
    if (answers === ques) {
      totalRight++;
      responses.unshift("RALPH: You got it!");
      responseCall.innerHTML = responses;
    } else {
      totalWrong++;
      responses.unshift("RALPH: Nuts... not quite right.");
      responseCall.innerHTML = responses;
    }
  }
  for (var i = 0; i < questions.length; i++) {
    game(questions[i], answers[i]);
  }

  var ageGuess = parseInt(prompt("RALPH: lets try one a bit harder. I'll give 5 guesses for this one.\nHow old am I?"));
  var count = 1;
  userAnswers.unshift(userName + ": " + ageGuess);
  userAnswersId.innerHTML = (userAnswers);
  while (count < 6) {
    if (count === 5) {
      responses.unshift("RALPH: Well, I had more faith in you than that. I'm 42. I'll always be 42.");
      userAnswersId.innerHTML = (userAnswers);
      responseCall.innerHTML = responses;
      break;
    } else if (ageGuess === 42 && count === 1) {
      responses.unshift("RALPH: You should work for the circus! You guessed my age in " + count + " try! That's all for now, but you can be sure that I'll be around... watching...");
      responseCall.innerHTML = responses;
      bonus++;
      break;
    } else if (ageGuess === 42) {
      responses.unshift("RALPH: You should work for the circus! You guessed my age in " + count + " try! That's all for now, but you can be sure that I'll be around... watching...");
      responseCall.innerHTML = responses;
      bonus++;
      break;
    } else if (ageGuess < 42) {
      ++count;
      totalWrong++;
      ageGuess = parseInt(prompt("RALPH: It looks like you are a bit low. I'm Flattered of course but... try again."));
      userAnswers.unshift(userName + ": " + ageGuess);
      userAnswersId.innerHTML = (userAnswers);
    } else if (ageGuess > 42) {
      ++count;
      totalWrong++;
      ageGuess = parseInt(prompt("RALPH: Really?!? I look that old?!?! thanks... why not just give that another guess."));
      userAnswers.unshift(userName + ": " + ageGuess);
      userAnswersId.innerHTML = (userAnswers);
    } else {
      ++count;
      ageGuess = parseInt(prompt("RALPH: That's a new one! wrong, but new. try again."));
      userAnswers.unshift(userName + ": " + ageGuess);
      userAnswersId.innerHTML = (userAnswers);
    }
  }

  responses.unshift("RALPH: Ah-Ha!\nYou think the game is over?! It is far from it!");
  responseCall.innerHTML = responses;
  var bonus2 = prompt("RALPH: I have a backpack full of Treasures that I've collected.\nGuess just one and you will gain +5 honor... And just be even nerdier. May Zork guide you!");
  userAnswers.unshift(userName + ": " + bonus2);
  userAnswersId.innerHTML = (userAnswers);

  var treasure = ["coins","torch","emerald","bracelet","necklace","figurine","grail","picture","portrait","trunk","trident","bar","coffin","chalice","egg","diamond","ruby","zorkmid","stamp","small statue","crystal sphere","tin of spices","violin","dimwits crown"];
  var answerBonus2 = bonus2.toLowerCase();
  for (var i = 0; i < treasure.length; i++) {
    if (answerBonus2 === treasure[i]) {
      bonus++;
      responses.unshift("RALPH: You are cut from my own mold!\nYou guessed my Treasure!");
      responseCall.innerHTML = responses;
      break;
    } else {
      responseCall.innerHTML = responses;
      responses.unshift("RALPH: It seems you are not whom I had hoped you were... sad");
    }
  }

  var gamePlays = prompt(("RALPH: Would you like to play again?")).toLowerCase();
  if (gamePlays === "yes") {
    gameCount++;
  } else if (gamePlays === "no") {
    responses.unshift("RALPH: Thanks for playing " + userName + "!");
    responseCall.innerHTML = responses;
    break;
  } else {
    responses.unshift("RALPH: I'll take that as a no. C-ya!");
    responseCall.innerHTML = responses;
    break;
  }
}

if ((totalRight + bonus) === totalWrong || (totalRight + bonus) > totalWrong) {
  console.log("user wins");
  img.innerHTML = "<img src = 'http://photoshopadventures.com/misc/sword.png' alt = 'Sword of Destiny' align = 'middle'>You have won! The Sword of Destiny is granted to you!";
} else {
  console.log("user loses");
  img.innerHTML = "<img src = 'http://33.media.tumblr.com/27ebc8f43e1f517e03272d0e8f648ce2/tumblr_inline_mzaagqzs621r9ajsd.png' alt = 'Skull of the cursed' align = 'middle'>You have failed, and so you shall fall.";
}
stats.innerHTML = "STATS:\nGames Palyed: " + gameCount + "\nGuesses Right: " + totalRight + "\nGuesses Wrong: " + totalWrong +"\nBONUS: " + bonus;




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
