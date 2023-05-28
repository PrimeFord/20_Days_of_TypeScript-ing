//TypeScript and JavaScript are simillar, one of the key diffrence is that in TypeScript we need to also write the data type of any variable or constant.

//For Strings
let username: string = "Prime";
console.log(username);

//For Numbers
let age: number = 25;
console.log(age);

//For Booleans
let hasLoggedIn: boolean = true;
console.log(hasLoggedIn);

//For Regex
let myRegex: RegExp = /foo/;
console.log(myRegex);

//For Arrays
// -first method
const fruits: string[] = ["mango", "banana", "orange", "apple"];
console.log(fruits);

//-second method
const scores: Array<number> = [42, 45, 22, 87, 50];
console.log(scores);

//For Objects
//method1
const person: {
  firstName: string;
  lastName: string;
} = {
  firstName: "Prime",
  lastName: "Senpai",
};
console.log(person);

//method2 Using Interface
interface myPerson {
  firstName: string;
  lastName: string;
}

const myInfo: myPerson = {
  firstName: "Prime",
  lastName: "Senpai",
};
console.log(myInfo);

//Utility Type for Mapping
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};
ids[30] = "c";
console.log(ids);
console.log(ids[20]);
