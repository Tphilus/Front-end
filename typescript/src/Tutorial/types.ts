let someValue: any = "this is a string";

type Bird = {
  name: string;
};

let strLength: number = (someValue as string).length;
console.log(strLength);

let birdString = { name: "Eagle" };
let dogString = { breed: "Poodle" };

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name);
console.log(dog.name);

enum Status {
  Pending = "pending",
  Declined = "declined",
}


type Dog = { type: "dog"; name: string; back: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };

type Animal = Dog | Cat;

// function makeSound(animal: Animal) {
//   if (animal.type === "dog") {
//     animal.back();
//   } else {
//     animal.meow();
//   }
// }

// function makeSound(animal: Animal) {
//   if ("back" in animal) {
//     animal.back();
//   } else {
//     animal.meow();
//   }
// }

function printLength(str: string | null | undefined) {
  if (str) {
    console.log(str.length);
  } else {
    console.log("no strint provided");
  }
}

console.log(printLength('Theophilus'));

// try {
//   throw "some error";
//   throw new Error("This ia an error");
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(`Caught an Error object : ${error.message}`);
//   } else {
//     console.log("unknow error...");
//   }
// }

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

const year = checkInput(new Date);
const ramdom = checkInput('2023-04-05');
console.log(year, ramdom);

type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: "john", study: () => console.log("Studying") }
    : { name: "john", study: () => console.log("Studying") };
};

// const person = randomPerson();
const person: Person = {
  name: "anna",
  login: () => console.log('study...')
}
console.log(person);

function isStudent(person: Person): person is Student {
  return (person as Student).study !== undefined;
}

if (isStudent(person)) {
  person.study();
} else {
  person.login();
}


type IncrementAction = {
  type: "increment";
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: "decrement";
  amount: number;
  timestamp: number;
  user: string;
};

// type never ={}

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment":
      return state + action.amount;
    case "decrement":
      return state - action.amount;
    default:
      const unexpectedAction: never = action;
      throw new Error(`Unexpected action : ${unexpectedAction}`);
  }
}

console.log(reducer);

const newState = reducer(15, {
  user: "john",
  type: "increment",
  amount: 5,
  timestamp: 123456,
});

console.log(newState);
