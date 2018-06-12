// #1 Create an object called 'me' that has three keys, 'firstname' 'age' and 'state'. Assign the keys the appropriate values.

var me = {
  firstname: "Isaiah",
  age: 25,
  state: "Virginia"
};
console.log(me);

// #2 Add a new key/value pair to the me object using dot notation. The new key should be 'faveColor' and set it to your favorite color as a string

me.faveColor = "blue";

// #3 Below is an object, 'message'. Below it, add a 'text' key using bracket notation and assign it a string of whatever you would like.
//DON'T TOUCH THE CODE BELOW
var message = {
  date: new Date(),
  userName: me.firstname
};
//DON'T TOUCH THE CODE ABOVE
// CODE HERE
message["text"]="I guess this?";
// #4 Create an object called 'adjustCount' and create two methods. One called 'upVote' and one called 'downVote'. upVote should take in a number and add one to it and downVote should take in a number and minus one from it.

// CODE HERE
var adjustCount = {
  upVote: function(num){return num+1;},
  downVote: function(num){return num-1;},
};
//******************This may need to be fixed!!! */
// #5 Create an array called 'myFriends' with four of your friends names

// CODE HERE
var myFriends = ["bob","joe","jane","jorden"];
// #6 Add a fifth friends name to the end of your myFriends array

// CODE HERE
myFriends.push("jesse");
// #7 Create a 'myArrayCopy' variable. It should equal the myArray variable. Use the built in JavaScript method to create a copy.
//DON'T TOUCH THE CODE BELOW
var myArray = [1, 2, 3, 4];
//DON'T TOUCH THE CODE ABOVE
// CODE HERE
var myArrayCopy = myArray;
// #8 Below is a array, myNumbers. Create a function called 'evensOnly' that returns the 'evensArray' of only even numbers
//DON'T TOUCH THE CODE BELOW
var myNumbers = [333, 1, 4, 5, 511, 34, 88, 77, 222];
//DON'T TOUCH THE CODE ABOVE
console.log(myNumbers);
var evensArray = [];
function evensOnly(arr) {
  for(var i in arr){
    if (arr[i] % 2 === 0 && arr[i] != undefined){
      evensArray.push(arr[i]);
    }
  }
  return evensArray;
  //var evensArray= arr.filter(function(num){
  //  console.log(num);
  //  return (num%2===0);
  //});
  //return evensArray;
}
console.log(evensOnly(myNumbers));
console.log(evensArray);

//***********************Not sure about this. just trying it out */
// #9 Using filter(), return only your friends of the array of people below. Assign it to a variable called 'trueFriends'.
// CODE HERE
var peopleIknow = [
  { name: "Steve", friend: true },
  { name: "Dan", friend: false },
  { name: "Bart", friend: true },
  { name: "Sarah", friend: false },
  { name: "Michelle", friend: false },
  { name: "Holly", friend: true }
];
var trueFriends = peopleIknow.filter(function(arr){
  return arr.friend==true;
});
// #10 Create a function called indexFinder that will loop over an array and return a new array of the indexes of the contents e.g. [243, 123, 4, 12] would return [0,1,2,3]. 
// Create a new variable called 'indexes' and set it to contain the indexes of randomNumbers.
let randomNumbers = [1, 3453, 34, 456, 32, 3, 2, 0];
var indexes = [];
function indexFinder(arr){
  for(var i in arr){
    indexes.push(i*1);
  };
  console.log(indexes);
  return indexes;
}
indexFinder(randomNumbers);
console.log(indexes);
