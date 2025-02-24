console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1

const firstName = "John"; // const variables must be initialized
let lastName;
var age;
console.log(`Name: ${firstName} ${lastName}. Age: ${age}`);

// Exercise 2
// firstName is already initialized above
lastName = "Doe";
age = 37;
console.log(`Name: ${firstName} ${lastName}. Age: ${age}`);

// Exercise 3
let language = "JavaScript";
let createdYear = 1995;
let isCaseSensitive = true;
console.log(`Language: ${language}, Created: ${createdYear}, Case Sensitive? ${isCaseSensitive}}`);

// Exercise 4
let price = 10.99;
let isOnSale = false;
let salesPercentage = 15;
let stock = 0;
let inStock = false;
let selectedSize = "M";
console.log(`Price: ${price}, On Sale? ${isOnSale}, Sales Percentage ${salesPercentage}%, Stock: ${stock}, Size: ${selectedSize}, Available: ${inStock}`);

// Exercise 5
let title = "Name of the Wind";
let author = "Patrick Rothfuss";
let pageCount = 722;
let bookmark = 456;
let hasRead = true;
console.log(`Title: ${title}`);
console.log(`Author: ${author}`);
console.log(`Pages: ${pageCount}`);
console.log(`Read up to page: ${bookmark}`);
console.log(`Read this book? ${hasRead}`);