//it has a function as part of its parameter
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

//example
export function arrayMutate(
  numbers: number[],
  mutate: (v: number) => number
): number[] {
  return numbers.map(mutate);
}

console.log(arrayMutate([1, 2, 3], (v) => v * 10));
console.log(arrayMutate([0, 2, 5], (v) => v * 12));

//defining the function as a type to make the coe esy to read just like an interface but type has equal sign.
type MutationFunction = (v: number) => number;

export function arrayyMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

console.log(arrayyMutate([1, 2, 3], (v) => v + 10));
console.log(arrayyMutate([0, 2, 5], (v) => v + 12));

const myNewFunction: MutationFunction = (v: number) => v * 100;
console.log(myNewFunction(1));

//Funtion that creates a function
type AddFunction = (val: number) => number;

export function createAdder(num: number): AddFunction {
  return (val: number) => num + val;
}

const addOne: AddFunction = createAdder(1);
console.log(addOne(55));
