'use strict';

var watchedTigerKing = prompt('did you watch Tiger King?');

// if they did watch Tiger King, I want to say 'Did Carol Baskin Kill her Husband?'
// if they didn't watch Tiger King, I want to say 'Sorry'

if(watchedTigerKing.toLowerCase() === 'yes'){
  alert('Did Carol Baskin Kill her Husband?');
} else if(watchedTigerKing.toLowerCase() === 'no'){
  alert('Sorry');
} else {
  prompt('Please answer with a yes or a no');
}

// `if(watchedTigerKing === 'yes'){
//   // do something
// }

// if(watchedTigerKing === 'yes'){
//   // do something
// } else {
//   // do something else
// }`

// var likesCoffee = true;

// if(likesCoffee){
//   // do something
// }
