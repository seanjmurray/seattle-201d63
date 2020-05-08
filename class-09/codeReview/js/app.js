'use strict';

var parentElement = document.getElementById('table');
var hours = ['6am', '7am', '8am', '9am', '10am'];
var allStores = [];

function Store(name, minCustomerPerHour, maxCustomerPerHour, averageCookierPerPerson){
  this.name = name;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.averageCookierPerPerson = averageCookierPerPerson;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesForTheDay = 0;
  allStores.push(this);
}

Store.prototype.calcCustomersEachHour = function(){
  // for loop over hours
    // make a helper function that generates a random number
    // push that random number into the customersEachHour array
  for(var i=0; i<hours.length; i++){
    var customerThisHour = getRandomNumber(this.minCustomerPerHour, this.maxCustomerPerHour);

    this.customersEachHour.push(customerThisHour);
  }
}

Store.prototype.calcCookiesSoldEachHour = function(){
  this.calcCustomersEachHour(); // this will generate the customer array
  // loop through the array of random customers
    // multiply each customer entry by the averge cookie sale
    // push into the cookiesSoldEachHour array
  for(var i=0; i<this.customersEachHour.length; i++){
    var totalCookies = Math.ceil(this.averageCookierPerPerson * this.customersEachHour[i]);

    this.cookiesSoldEachHour.push(totalCookies);
  }
}

Store.prototype.cookiesForTheDay = function(){
  this.calcCookiesSoldEachHour();
  // loop through cookies sold each hour array 
    // add them all together
  for(var i=0; i<this.cookiesSoldEachHour.length; i++){
    this.totalCookiesForTheDay += this.cookiesSoldEachHour[i];
    // this.totalCookiesForTheDay = this.totalCookiesForTheDay + this.cookiesSoldEachHour[i]
  }
}

Store.prototype.render = function(){
  this.cookiesForTheDay();

  // only for the body of the table

  // get the parent Element

  // this is for "seattle"
  // create a table row
  var tableRow = document.createElement('tr');

    // create a th 
  var tableheader = document.createElement('th');
    // fill it with content: this.name
  tableheader.textContent = this.name;
    // append th to the table row
  tableRow.appendChild(tableheader);

  // this is for the cookies sold each hour
    // loop over the cookies sold each hour
  for(var i=0; i<this.cookiesSoldEachHour.length; i++){
    // create a td
    var tableData = document.createElement('td');
    // fill it with content: this.cookiesSoldEachHour[i]
    tableData.textContent = this.cookiesSoldEachHour[i];
    // append td to the table row
    tableRow.appendChild(tableData);
  }

  // this for the cookies for the day
    // create a td
  tableData = document.createElement('td');
    // fill it with content: this.totalCookiesForTheDay
  tableData.textContent = this.totalCookiesForTheDay;
    // apped td to the table row
  tableRow.appendChild(tableData);

  // append the table row to the parent
  parentElement.appendChild(tableRow);
}

function renderFooterRow(){
  var totalOfAllTotals = 0;

  // create a table row
  var tableRow = document.createElement('tr');

  // create td
  var tableData = document.createElement('td');
  // fill it with the word 'hourly total'
  tableData.textContent = 'Hourly Total';
  // append it to the table row
  tableRow.appendChild(tableData);  


  // outer loop: for each hour
    // inner loop is going to loop over each store
        // access my cookies sold each hour array at the same position as my outer loop
  for(var i=0; i<hours.length; i++){

    var sum = 0;

    for(var j=0; j<allStores.length; j++){
      console.log('inner loop', sum);
      sum += allStores[j].cookiesSoldEachHour[i];
    }

    totalOfAllTotals += sum;
    // totalOfAllTotals = totalOfAllTotal + sum;

    // create a td
    tableData = document.createElement('td');
    // fill it with the sum
    tableData.textContent = sum;
    // append it to the table row
    tableRow.appendChild(tableData);

    
  }
  // append the total of all totals
  // create a td
  tableData = document.createElement('td');
  // fill it the total
  tableData.textContent = totalOfAllTotals;
  // append it to the table row
  tableRow.appendChild(tableData);  
  
  // append table row to parent
  parentElement.appendChild(tableRow);
}

// helper functions
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max-min +1)) + min;
}

var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
// var dubai = new Store('Dubai', 23, 65, 6.3);
// var paris = new Store('Paris', 20, 38, 2.3);
// var lima = new Store('Lima', 2, 16, 4.6);

seattle.render();
tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
renderFooterRow();
