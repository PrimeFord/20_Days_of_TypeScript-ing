//Adding Numbers
function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

//Adding Strings
export const addStrings = (str1: string, str2: string): string => {
  return `${str1} ${str2}`;
};

//
export const format = (title: string, param: string | number): string => {
  return `${title} ${param}`;
};

export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

//Funtion that returns a promise(fetch)

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

//Funtion with multiple arguments
function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

// Types are enforced in typescript at compile time and not run time
// object is an argument in this function
export function getName(user: { first: string; last: string }): string {
  return `${user.first} ${user.last}`;
}
