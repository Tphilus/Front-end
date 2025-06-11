let tax: number | string = 10;
tax = 100;
tax = '$10'

let requestStatus: 'pending' | 'error' | 'success' = 'pending';
requestStatus = 'error';
requestStatus = 'pending';
requestStatus = 'success';

let notSure: any = 50;
notSure = 'maybe a string instead';
notSure = false;

const books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string;

for (let book of books) {
  if (book === "Fahrenheit 451") {
    foundBook = book;
    break;
  }
}

// console.log(foundBook);

// Exercise 

// 1. Order Status 
let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = 'processing';

// 2. Discount 
let discount: number | string = 20;
discount = '20%'

function processInput(input: string | number) {
  if (typeof input === "number") {
    console.log(input * 2);
  } else {
    console.log(input.toLocaleLowerCase());
  }
}

console.log(processInput("Hello"));

