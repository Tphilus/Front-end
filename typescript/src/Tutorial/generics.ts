// In TypeScript, you can declare an array using two syntaxes:

// let array1: string[] = ['Apple', 'Banana', 'Mango'];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

let array1: Array<string> = ['Apple', 'Banana', 'Mango'];

function createString(arg: string): string {
  return arg
}

function createNumber(arg: number): number {
  return arg
}

function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>("Hello world");
const someNumberValue = genericFunction<number>(45);

// console.log(someStringValue);
// console.log(someNumberValue);

interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: "Hello world",
  getValue() {
    return this.value;
  },
};

async function someFunc(): Promise<string> {
  return 'hero world';
}

const result = someFunc()
console.log(result);

function generateStringArray(length: number, value: string): string[] {
  let result: string[] = [];
  result = Array(length).fill(value);
  return result;
}

console.log(generateStringArray(6, "Hello"));

function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}

let arrayStrings = createArray<string>(10, "hello");
let arrayNumber = createArray<number>(10, 100);

console.log(arrayStrings);
console.log(arrayNumber);

// multiple Params
function pair<T, U>(params1: T, params2: U) {
  return [params1, params2];
}

let result2 = pair<number, string>(123, "hello");
console.log(result2);

function processValue<T extends string>(value: T): T {
  console.log(value);
  return value
}

console.log(processValue('hello'));

interface StoreData<T = any> {
  data: T[];
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4],
};

const randomStuff: StoreData = {
  data: ['random', 1]
}
