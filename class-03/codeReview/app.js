'use strict';

// greeting
alert('Oh hello!');
var name = prompt('What\'s your name, beautiful?');
// console.log('User\'s name is ' + name);
alert('Welcome to my page, ' + name + '!');

// Invitation to play
var playGame = prompt('Do you want to play a guessing game with me?')

if(playGame.toLowerCase() === 'no'){
  confirm ('Maybe another time!'); 
} else {
  alert('Cool! I will ask you a couple of questions, and you\'ll answer yes or no, or if you\'re lazy, just say y or n. Let\'s go!');

  // Who's my husband?
  var husband = prompt('Is my husband a military trained killing machine?')

  // 'yEs' => 'yes'
  if(husband.toLowerCase() === 'yes' || husband.toLowerCase() === 'y'){
    // console.log('correct');
    alert('Yup! Your\'re right. My husband was a captain in the US Marine Corps.');
  } else { 
    // console.log('incorrect');
    alert('Oh yes he is! He is a badass US Marine Corps officer.');
  }

  // Did I see a polar bear?
  var bear = prompt('Did I see a polar bear on the street of my hometown in Poland one winter?')

  if(bear.toLowerCase() === 'yes' || bear.toLowerCase() === 'y'){
    // console.log('incorrect');
    alert('No, you silly! Poland is not Siberian tundra, there are no polar bears on the streets.');
  } else if(bear.toLowerCase() === 'no' || bear.toLowerCase() === 'n'){
    // console.log('correct');
    alert('Bravo! That would be a scary and improbable situation.');
  } else {
    alert('please answer using only yes no y or n');
  }

  // Do I like veggies? 
  var favoriteFood = prompt('Is my favorite food group veggies?')

  if (favoriteFood.toLowerCase() === 'yes' || favoriteFood.toLowerCase() === 'y'){
    // console.log('correct');
    alert('You bet! I LOVE veggies. I\'m practically a bunny rabbit.');
  } else {
    // console.log('incorrect');
    alert('Why do you say that? Do you think I\'m fat? Of course I like veggies.');
  }

  var age = prompt('Am I 33?')

  if (age.toLowerCase() === 'yes' || age.toLowerCase() === 'y'){
    // console.log('incorrect');
    alert('Guess again. Just kidding, I\'m not going to tell you my age anyway.');
  } else {
    // console.log('correct');
    alert("Doesn't matter, I won't tell you my age anyway.");
  }

  alert(name +', thank you so much for playing with me. Now you know my secrets.')
}





