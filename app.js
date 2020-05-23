console.log("*****TASK 1*****");
// 1- create a file and name it 'app.js' and type "Hello World" 5 times
let welecomBannar = [];
for (let i = 0; i <= 4; i++) {
  welecomBannar.push("Hello World");
}

console.log(welecomBannar);
///////////////////////////////////////////////////////////////////////////////////////////////////
console.log(
  "======================================================================="
);
console.log("*****TASK 2*****");
// 3- Declare a variable z and assign the number 7.25 to it.
let z = 7.25;
console.log("z = ", z); // 4- Write a console.log statement in which you log the value of z.

// Declare another variable a that has the value of z but rounded to the nearest integer.
let a = Math.round(z);
console.log("a =", a); //6- Write a console.log statement in which you log the value of a.

//7- So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.

let result = Math.max(a, z);
console.log("The highest value is =", result); //8- Write a console.log statement in which you log the value of the highest value.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(
  "======================================================================="
);
console.log("*****TASK 3*****");
//9- Declare variable and assign to it an empty array. don't forget to make your variable name indicates that it contains more than 1 element
let books = [];
if (books == 0) {
  console.log("There are no books avilable now"); //10- Write a console.log statement that explains in words what you think the value of the array is.
} else {
  console.log("The avilable books are : ", books); //11- Write a console.log statement that logs the array content into your console.
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(
  "======================================================================="
);
console.log("*****TASK 4*****");
//12- Create a new variable with an array that has 3 of your favorite fruits, each in a different string.
let myFavoritFruits = ["Apple", "Watermelon", "Grape"];
console.log("My Favorit Fruits are: ", myFavoritFruits);
///////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(
  "======================================================================="
);
console.log("*****TASK 5*****");
//13- Declare 4 variables: 2 must be strings and 2 must be objects
let firstName = "Ayman";
let lastName = "Almani";
let myCar = { type: "VW", model: "Golf", color: "Blue" };
let myAddress = { street: "Vosseweide", hr: 60, city: "Niewegein" };

//14- Create 6 conditional statements, where for each you check if the data type of one variable is the same as the other
if (firstName === lastName) {
  console.log("The type of data is matched:", firstName, lastName);
} else if (firstName === myCar) {
  console.log("The types of data matched: ", firstName, myCar);
} else if (firstName === myAddress) {
  console.log("The types of data matched: ", firstName, myAddress);
} else if (lastName === myCar) {
  console.log("The types of data matched: ", lastName, myCar);
} else if (lastName === myAddress) {
  console.log("The types of data are matched: ", lastName, myAddress);
} else if (myCar === myAddress) {
  console.log("The types of data matched: ", myCar, myAddress);
} else {
  console.log("The variables data types are not the same...! ");
}
//15- Find out how to check the type of a variable
console.log("Type of firstName value is: ", typeof firstName);
console.log("Type of lastName value is: ", typeof lastName);
console.log("Type of myCar value is: ", typeof myCar);
console.log("Type of myAddress value is: ", typeof myAddress);

//16- Write 2 console.log statements to log the type of 2 variables, each with a different data type
console.log("Data type of variable firstName is a: ", typeof firstName);
console.log("Data type of variable myAddress is an: ", typeof myAddress);

//17- Now compare the types of your different variables with one another
switch (firstName) {
  case lastName:
    console.log("Values types of: ", firstName, " ", lastName, " are equals");
    break;
  case myCar:
    console.log("Values types of: ", firstName, " ", myCar, " are equals");
    break;
  case myAddress:
    console.log("Values types of: ", firstName, " ", lastName, " are equals");
    break;
  default:
    console.log(
      "All values types of the variables are different from echc other "
    );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(
  "======================================================================="
);
console.log("*****TASK 6*****");
//19- Declare 2 variables, that each hold an array. The first array should have 4 items, the second 7 items
let home = ["living_room", "kitchen", "bed_room", "study_room"];
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

//20- Find out how to get the length of each array. Write a console.log statement that shows the length of each array
console.log("The lenght of home array is: ", home.length);
console.log("The lenght of days array is: ", days.length);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(
  "======================================================================="
);
console.log("*****TASK 7*****");
//21- Remove the comma from this string "Hi,I,am,really,happy,to,learn,new,skills,related,to,javascript"
let comment = "Hi,I,am,really,happy,to,learn,new,skills,related,to,javascript";
console.log("Main comment: ", comment); //22- Add it to your file and log the output to your console

//23- Find a way to remove the commas from the string and replace them with spaces.
// First Method using split the string to an array!
console.log("*****Method one*****");
let newComment = comment.split(",");
console.log("Remove commas from comment : ", newComment);
// First Method using join an array to creat one string with spaces between every components!
let newComment1 = newComment.join(" ");
console.log("Join arrays components with space between them : ", newComment1);
// Second Method using regEx to remove the comma's and replace them with spaces.
console.log("*****Method two*****");
let newComment2 = comment.replace(/,/g, " ");
console.log("Remove commas and replace them with space : ", newComment2);
///////////////////////////////////////////////////////////////////////////////////////////
console.log(
  "======================================================================="
);
console.log("*****TASK 8*****");
//24- Create a for loop, that iterates from 0 to 25
for (let i = 0; i <= 25; i++) {
  console.log(i);
}
//25- Create a conditional statement that checks if the value of the counter variable is odd or even
for (let i = 0; i <= 25; i++) {
  // console.log(i);
  //25- Create a conditional statement that checks if the value of the counter variable is odd or even
  if (i % 2 == 0) {
    //26- If it's odd, log to the console The number [PUT_NUMBER_HERE] is odd!.
    console.log("The Number ", i, " is odd!");
  } else {
    //27- If it's even, log to the console The number [PUT_NUMBER_HERE] is even!.
    console.log("The Number ", i, " is even!");
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(
  "======================================================================="
);
console.log("*****TASK 9*****");
//28- Declare a variable that contains an empty object with a clear name
let members = {};

//29- Give the object 5 properties [name, age, study, zipcode, address], don't forget to make [address] contains more than one attribute
members.name = "Ayman";
members.age = 35;
members.study = "ICT";
members.zipcode = "3437TE";
members.address = "Nieuwegein";

//30- log each property out separately, using a loop (for, while or do/while)
for (j in members) {
  console.log(j);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(
  "======================================================================="
);
console.log("*****TASK 10*****");
// 31- Declare a variable that holds an array of 3 objects, where each object describes a book and has properties for the title (string), author (string), and alreadyRead (boolean indicating if you read it yet).
let myBooks = [
  { title: "Sapiens", author: "Yuval_Noah_Harari", alreadyRead: true },
  {
    title: "Emotional_Intelligence",
    author: "Daniel_Goleman",
    alreadyRead: false,
  },
  { title: "Profit_Over_People", author: "Noam_Chomsky", alreadyRead: true },
];
// console.log(myBooks);
//32- Loop through the array of books.
console.log("*****Method one*****");
myBooks.forEach(function (item, index) {
  console.log(item, index);
});
console.log("*****Method two*****");
for (let newBooks of myBooks) {
  console.log(newBooks);
}
console.log(
  "======================================================================="
);
console.log("*****TASK 11*****");

//33- For each book, log the book title and book author like so: "Game Of Thrones by J.R.R. Martin".
for (list of myBooks) {
  console.log(
    "Book_Title: " + list.title + ",  ...... By Author: " + list.author
  );
}
//34- Create a conditional statement to change the log depending on whether you read it yet or not. If you read it, log a string like You already read "The Hobbit" right after the log of the book details
for (book of myBooks) {
  if (book.alreadyRead) {
    console.log("I already read this book :", book.title);
  } else {
    // 35- If you haven't read it log a string like You still need to read "The Lord of the Rings"
    console.log("I still did't read this book :", book.title);
  }
}

///////////////////////////////////////////////////////////////////////////////
console.log(
  "======================================================================="
);
console.log("*****TASK 12*****");
// 36- create an array with name [listOfPlayers] and add to it three players from the start of the array and two from the end
let listOfPlayers = [];
console.log("Create empty array, listOfPlayers = ", listOfPlayers);
listOfPlayers.unshift("Tony", "Jamal", "Salah");
console.log("Add three players from the start:  ", listOfPlayers);
listOfPlayers.push("Jerard", "Mike", "Rolando");
console.log("Add two players to the end:  ", listOfPlayers);
///////////////////////////////////////////////
//37- remove 2 players
listOfPlayers.shift();
console.log("Remove one player from start: ", listOfPlayers);
listOfPlayers.pop();
console.log("Reomve one player from the end: ", listOfPlayers);
//38- add from the start alos two players
listOfPlayers.unshift("Messi", "Bill");
console.log("Add new two players from the start:  ", listOfPlayers);

//39- split the array to two arrays and try to add new player to the second array then concatenate them then log the result to the console
let team1 = listOfPlayers.splice(0, 3);
console.log("Team 1 members are : ", team1);
let team2 = listOfPlayers;
console.log("Team 2 members are : ", team2);

team2.push("Luka");
console.log(team2);

new_team = team1.concat(team2);
console.log("New Team members are : ", new_team);

//40- iterate the array by using (for of and general for "the old way" )
for (s = 0; s < new_team.length; s++) {
  console.log(new_team[s]);
}

for (element of new_team) {
  console.log(element);
}
console.log("*****END*****");
