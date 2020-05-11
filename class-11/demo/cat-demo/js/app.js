'use strict';
// GOAL #1: make 2 cats appear on the DOM dynamically
  // make a place in the html to attach the images - done
  // select those parent elements

var parent = document.getElementById('cat1');

var allCats = [];

function CatImage(url, alt, title){
  this.filePath = url;
  this.alt = alt;
  this.title = title;
  this.votes = 0;
  this.views = 0;
  allCats.push(this);
}

new CatImage('img/boxCat.jpg', 'box Cat', 'box Cat');
new CatImage('img/chargingCat.jpg', 'charging cat', 'charging cat');
new CatImage('img/cuddleCats.jpg', 'cuddle Cats', 'cuddle cats');
new CatImage('img/multiTaskingCat.jpg', 'multi Tasking Cat', 'multi Tasking Cat');
new CatImage('img/outsideCat.jpg', 'outside cat', 'outside cat');
new CatImage('img/sleepyCat.jpg', 'sleepy Cat', 'sleepy Cat');
new CatImage('img/tomatoCat.jpg', 'tomato cat', 'tomato cat');
new CatImage('img/yogaCat.jpg', 'yoga Cat', 'yoga Cat');

CatImage.prototype.banana = function(){
    // create an element - img
  var imageElement = document.createElement('img');
    // fill the src with the path to the cat (ie: <img src=boxCat.jpg alt="" title="" />)
  imageElement.setAttribute('src', this.filePath);
    // fill in the alt which is going to be the name of the image without the .jpg
  imageElement.setAttribute('alt', this.alt);
    // fil in the title with the same thing as the alt
  imageElement.setAttribute('title', this.title);
    // appendChild to parent element
  parent.appendChild(imageElement);
}

// helper function 
function randomNumber(min=0, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// now, render two random images to the dom from an array of images

function getRandomCat(){
  parent.textContent = '';

  // call my random number function to get a random index position. That will be my random index position for my allCats array.
  var randomIndex = randomNumber(0, allCats.length-1);
  var secondRandomIndex = randomNumber(0, allCats.length-1);

  while(randomIndex === secondRandomIndex){
    // get another one
    // we will only break out of this loop once the second random index is different than the first random index
    secondRandomIndex = randomNumber(0, allCats.length-1);
  }

  // use that object instance to call my banana function
  allCats[randomIndex].banana();
  allCats[randomIndex].views++;

  allCats[secondRandomIndex].banana();
  allCats[secondRandomIndex].views++;
  
}

getRandomCat();

// function handleClick(){
//   // figure out which cat was clicked on
//   // increiment the vote on that cat
//   // call the getRandomCat function to generate new cats to the page
// }


// set up an event listener
parent.addEventListener('click', function(){
  var titleOfCatThatWasClickedOn = event.target.title;

  for(var i = 0; i<allCats.length; i++){
    if(titleOfCatThatWasClickedOn === allCats[i].title){
      // I found the object instance of the cat that was clicked on!
      allCats[i].votes++;
    }
  }

  getRandomCat();
  // figure out which cat(object instance) was clicked on
    // loop through all of the object instance and compare the title (aka - the event.target.title) with the allCats[i].title and find the matching one
  // increiment the vote on that cat
  // call the getRandomCat function to generate new cats to the page
});























// now make sure they don’t repeat
// change the images when they are clicked on
// keep track of how many times an image was clicked on