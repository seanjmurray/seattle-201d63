'use strict';

var score = 0;

var userName = prompt('What is your name?');
alert('Welcome to my page ' + userName + '! To begin, lets play a little game so that you can get to know me better.');

// Questions 1-5 Array

function question12345() {
  var questionArray = [
    'Gonna start this off easy for you. I work as a flight attendant. Do you think I like to travel?',
    'This question may be a bit trickier for yuh. Do you think that I enjoy math?',
    'I also enjoy eating healthy and working out. Do you think that I like to run?',
    'Would you guess that I like coffee?',
    'Do you think I am from the West Coast?'
  ];

  var answerArray = [
    'y e s',
  // 0 1 2
    'yes',
    'no',
    'yes',
    'no'
  ];

  var correctResponse = [
    'Nice job ' + userName + '!',
    'I do! I love problem solving.',
    'You are right! I do not enjoy running.',
    'Good answer. You are right. I LOVE coffee!',
    userName + ', how did you know? I am from South Carolina!'
  ];

  var incorrectResponse = [
    'Well sitting on a plane does get old but I still love to travel!',
    'Actually, I really enjoy math!',
    'Absolutely not! Running is so hard for me. Good guess though.',
    'How could you say no to this question. I am disappointed, I thought you knew me better than that.',
    'Nope! I am from South Carolina but I do love it here in the Pacific North West.'
  ];

  // Questions 1-5 loop

  for (var i = 0; i < questionArray.length; i++) { // loop over the questions
    var answer = prompt(questionArray[i]); // ask each question and store it in the answer variable

    // FIXME: there is a bug here - the user can type anything that begins with a y or n and it will act as a yes or no
    if (answer.toLowerCase()[0] === answerArray[i][0] && answer.toLowerCase()[1] === answerArray[i][1]) { // if the user answer matches the first two letters of the correct answer
      alert(correctResponse[i]); // alert the user they got the correct response
      score++; // increase the score
      console.log('question ' + i + ' response is ' + answer);
    } else {
      alert(incorrectResponse[i]); // alert the incorrect response
      console.log('question ' + i + ' response is ' + answer);
    }
  }
}


// Question 6

function question6() {
  var numberGame = 4;
  for (var i = 0; i < 4; i++) {
    var guess = prompt('Guess my favorite number from 1-10?');
    if (Number(guess) === numberGame) {
      alert('You are correct! Great job.');
      score++;
      break;
    } else if (guess < numberGame) {
      alert('Not it! You are too low! Please try again.');
    } else if (guess > numberGame) {
      alert('Nope. You are too high! Please try again.');
    }
    if (i === 3) {
      alert('Good try! The correct answer is 4.');
    }
  }
}


// Question 7

function question7() {
  var favColor = ['blue', 'green', 'yellow'];

  for (var i = 0; i < 6; i++) {
    var colorGuess = prompt('What do you think is one of my favorite colors?');
    if (colorGuess === favColor[0] || colorGuess === favColor[1] || colorGuess === favColor[2]) {
      alert('You are right. Blue, green, and yellow are my favorite!');
      score++;
      break;
    } else {
      alert('Nope, good guess though.');
    }
    if (i === 5) {
      alert('Good try. My favorite colors are blue, green, and yellow.');
    }
  }
}



alert('I hope enjoyed learning a few facts about me, ' + userName + '. You scored ' + score + ' out of 7. Thanks for visiting my site!');



// function userResponse(){
//   var userAnswer = 'yes';
//   if(userAnswer === 'yes'){
  //     console.log('user answered yes');
  //   } else {
    //     console.log('user answered no');
    //   }
    // }
    
    // userResponse();
    
    
    
question12345();
question6();
question7();







