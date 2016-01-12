var game = true;
var gameCount = 1;
var totalRight = 0;
var totalWrong = 0;
while (game === true) {

// var totalRight = 0;
// var totalWrong = 0;
// var totalAnswers = arr[""];


  var RALPH = prompt("Hello! My name is RALPH, your Radical Adventure Leveraging Personal Helper!\nBut you can call me RALPH.\nLets see how well you pay attention.\nwhat's my name?");

  console.log("RALPH Var: " + RALPH);

    if (RALPH === "RALPH") {
      totalRight++
      var userName = prompt("That's right! And what may I call you?");

  } else if (RALPH === "Radical Adventure Leveraging Personal Helper") {
      totalRight++
      userName = prompt("That's right! And what may I call you?");
  } else {
      totalWrong++
      userName = prompt("Close, but it's RALPH... I am a little OCD about it. that's okay though! what may I call you?");
  }

  var favColor = prompt(userName + ", nice to meet you! Let's keep going. What is my favorite color? I'll give you a hint: it rhymes with 'bed'");
  var color1 = favColor.toUpperCase();

    if (color1 === "RED") {
      totalRight++
      var favFood =  prompt("Nailed it! How about my favorite food? This one sounds like 'lacos, also, it's not cereal.");
      var food1 = favFood.toUpperCase();
  } else {
      totalWrong++
      favFood = prompt("HHmmmmm... Red, red is the only true color. What would you say my favorite food would be? Hint: it's not cereal");
      food1 = favFood.toUpperCase();
  }
    if (food1 === "TACOS") {
      totalRight++;
      var ageGuess = parseInt(prompt("You are on a roll " + userName + "!\nHow about one more just for fun.\nHow old am I?"));
  } else if (food1 === "CEREAL") {
      totalWrong++;
      ageGuess = parseInt(prompt("I thought I said it was NOT cereal?? oh well.\nLast one.\nHow old would you say I am?"));
  } else {
      totalWrong++;
      ageGuess = parseInt(prompt("Well, tacos would have been ideal, but I can also always go for some Mega-Bytes.\nLast one.\nHow old do you think I am?"));
  }

  var answer = false;
  var count = 1;

  while (count <= 4) {
    if (ageGuess === 42 && count == 1) {
      parseInt(alert("You should work for the circus! You guessed my age in " + count + " try! That's all for now, but you can be sure that I'll be around... watching..."));
      break;
  } else if (ageGuess === 42) {
      parseInt(alert("You should work for the circus! You guessed my age in " + count + " trys! That's all for now, but you can be sure that I'll be around... watching..."));
      break;
  } else if (ageGuess <= 42) {
      count++;
      ageGuess = parseInt(prompt("It looks like you are a bit low. I'm Flattered of course but... try again."));
  } else if (ageGuess >= 42) {
      count++;
      ageGuess = parseInt(prompt("Really?!? I look that old?!?! thanks... why not just give that another guess."));
  } else if (count === 4) {
      alert("Well, I had more faith in you than that. I'm 42. I'll always be 42.");
      break;
  } else {
      count++;
      ageGuess = parseInt(prompt("That's a new one! wrong, but new. try again."));

  }
}
var gamePlays = prompt(("Would you like to play again?")).toLowerCase();
  if (gamePlays === "yes") {
    gameCount++;
  } else if (gamePlays === "no") {
    alert("Thanks for playing " + userName + "!");
    game = false;
  } else {
    alert("I'll take that as a no. C-ya!")
    break
  }
}

alert("STATS:\nGames Palyed:" + gameCount + "\nGuesses Right: " + totalRight + "\nGuesses Wrong: " + totalWrong)
