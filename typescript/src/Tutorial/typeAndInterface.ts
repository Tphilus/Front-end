let awesomeName: string = "ShakeAndBake";
awesomeName = "something";
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

// awesomeName = 20
let amount: number = 20;
amount = 12 - 1;
console.log(amount);

let isAwesome: boolean = true;
isAwesome = false;

// exercise

let greeting: string = "Hello, world";
greeting = greeting.toUpperCase()

let age: number = 25;
age += 5

let isAdault: boolean = age > 18;
isAdault = !isAdault
console.log(greeting, age, isAdault);


// typeScript Errors 
// greeting = 10
// age = "thirty"
// isAdault = 'yes'

interface objectItems {
    id: number;
    name: string;
    isActive: boolean;
}

const john: objectItems = {
    id: 1,
    name: "Hello",
    isActive: false,
}

interface UserIterface {
    id: number;
    name: string;
    isActive: boolean;
}

function createUser(user: UserIterface): UserIterface {
    return user
}

