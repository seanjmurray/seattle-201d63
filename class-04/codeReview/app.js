'use strict';

// get user name and greeting
 
var userName = prompt('Hello! What is your name?');

// console.log('the user name is ' + userName);

alert('Hello ' + userName + '! Welcome to my site. My name is Michael and I wanted to take a moment to ask you some questions so you can learn more about me. Answers are yes or no only.');

var correctAnswer = 0

// Question 1: Do I play Classical Piano?

var piano = prompt('Do I play Classical Piano?');

if(piano.toLowerCase() === 'yes' || piano.toLowerCase() === 'y'){
  alert('Correct! I have been playing the piano for 25 years. Some of my favorite composers are Mozart, Liszt, Debussy and Ravel.');
  correctAnswer ++;
  // correctAnswer = correctAnswer + 1;
} else if(piano.toLowerCase() === 'no' || piano.toLowerCase() === 'n'){
  alert('Actually I do! I have been playing Classical Piano ever since I was seven years old and I even made it a career.');
} else {
  alert('Please answer with a yes or no');
}

// Question 2: Did I study in New York for my undergrad?

var undergrad = prompt('Did I study in New York for my undergrad?');

if(undergrad.toLowerCase() === 'yes'){
  alert('The answer is no! I earned my Bachelors degree from Western Washington University which is in Bellingham, WA, but then earned my Masters degree from Manhattan School of Music in New York City.');
} else if(undergrad.toLowerCase() === 'no'){
  alert('Correct! I earned my Bachelors degree from Western Washington University which is in Bellingham, WA, but then earned my Masters degree from Manhattan School of Music in New York City.');
  correctAnswer ++;
} else {
  alert('Please answer with a yes or no');
}

// Question 3: Piano festival attendance

var festival = prompt('Have I ever attended a piano festival in Paris?');

if(festival.toLowerCase() === 'yes'){
  alert('That is false. Unfortuantely I haven\'t been to Paris, but would love to go someday. I did however attend a piano festival in Prague in 2013, which was an amazing experience.');
} else if(festival.toLowerCase() === 'no'){
  alert('That is correct. While it is unfortunate I haven\'t been to Paris, but would love to go someday. I did however attend a piano festival in Prague in 2013, which was an amazing experience.');
  correctAnswer ++;
} else {
  prompt('Please answer with a yes or no');
}

// Question 4: Rideshare Driver?

var rideshare = prompt('In addition to my life as a pianist, did I ever make money as a rideshare driver?');

if(rideshare.toLowerCase() === 'yes'){
  alert('That is true. I started driving for Uber in February 2018 and I probably know how to get virtually anywhere in the City of Seattle.');
  correctAnswer ++;
} else if(rideshare.toLowerCase() === 'no'){
  alert('That is incorrect. I started driving for Uber in February 2018 and I probably know how to get virtually anywhere in the City of Seattle.');
} else {
  prompt('Please answer with a yes or no');
}

// Question 5: Favorite destination?

var destination = prompt('Is Tokyo my favorite city I\'ve visited?');

if(destination.toLowerCase() === 'yes'){
  alert('That\'s true! I took my first ever trip to Asia in the summer of 2019 when I visited Japan and it was amazing. I really hope I can go back someday.');
  correctAnswer ++;
} else if(destination.toLowerCase() === 'no'){
  alert('Actually it is! I took my first ever trip to Asia in the summer of 2019 when I visited Japan and it was amazing. I really hope I can go back someday.');
} else {
  prompt('Please answer with a yes or no');
}


// Question 6: Number guessing game
// Guess a number between 1 and 10 (answer is 7)

var correctNumber = 7;
for(var i = 0; i < 4; i++){
  var numberGuess = prompt('Now I would like to play a little number game. Please guess a number between 1 and 10. You have four guesses!')
  if (parseInt(numberGuess) === correctNumber) {
    alert('That is correct! Great Work!');
    correctAnswer ++;
    break;
  } else if(Number(numberGuess) < correctNumber) {
    alert('Sorry! That number is too low. Try a higher number.');
  } else if(parseInt(numberGuess) > correctNumber) {
    alert('Sorry! That number is too high. Try a lower number.');
  }
  if (i === 3) {
    alert('I\'m sorry but that\'s the final guess. The correct answer was 7.');
  }
}

//Question 7: Pokemon question. Name one of the Kanto Starters (one of the original starter Pokemon from the original Pokemon Red, Green, Blue, Yellow games)

var kantoStarter = ['bulbasaur', 'charmander', 'squirtle', 'pikachu'];
                      // 0               1             2         3

for(var j = 0; j < 6; j++){ // loop through the number of guesses
  var starterGuess = prompt('Now let\'s play one more game and this one just for fun! Can you tell me the name of one of the starter Pokemon from the original Red, Green, Blue, or Yellow Version Pokemon games? You have six tries to get the right answer.');

  for(var k = 0; k < kantoStarter.length; k++){ // loop through each position of the array to compare user anwer with the correct answers
    if(starterGuess.toLowerCase() === kantoStarter[k]){
      alert('Correct! The three original starter Pokemon from the Kanto region are Bulbasaur, Charmander and Squirtle. Pikachu was also a starter option in Pokemon Yellow Version');
  
      correctAnswer ++;
      break; // will only break us out of the inner for loop
    } else {
      alert('Sorry, please try again! Remember starter Pokemon always are either Grass, Fire or Water types.');
      } if (j === 5) {
      alert('Sorry! The correct answers were Bulbasaur, Charmander and Squirtle, but Pikachu is also accemptable because it was the starter Pokemon from Yellow Version.')
      }
    }
  }


  // if (starterGuess.toLowerCase() === kantoStarter[0]) {
  // alert('Correct! The three original starter Pokemon from the Kanto region are Bulbasaur, Charmander and Squirtle. Pikachu was also a starter option in Pokemon Yellow Version');
  // correctAnswer ++;
  // break;
  // } else if (starterGuess.toLowerCase() === 'charmander') {
  // alert('Correct! The three original starter Pokemon from the Kanto region are Bulbasaur, Charmander and Squirtle. Pikachu was also a starter option in Pokemon Yellow Version');
  //   correctAnswer ++;
  // break;
  // } else if (starterGuess.toLowerCase() === 'squirtle') {
  // alert('Correct! The three original starter Pokemon from the Kanto region are Bulbasaur, Charmander and Squirtle. Pikachu was also a starter option in Pokemon Yellow Version');
  // correctAnswer ++;
  // break;
  // } else if (starterGuess.toLowerCase() === 'pikachu') {
  // alert('Correct! The three original starter Pokemon from the Kanto region are Bulbasaur, Charmander and Squirtle. Pikachu was also a starter option in Pokemon Yellow Version');
  // correctAnswer ++;
  // break;
  // } else {
  // alert('Sorry, please try again! Remember starter Pokemon always are either Grass, Fire or Water types.');
  // } if (i == '5') {
  // alert('Sorry! The correct answers were Bulbasaur, Charmander and Squirtle, but Pikachu is also accemptable because it was the starter Pokemon from Yellow Version.')
  // }         
// }

alert('Thank you so much for answering the questions ' + userName + '! You got ' + correctAnswer + ' questions correct out of seven. I hope you enjoyed learning a little bit more about me. Continue now and see the rest of my site.');