//Optional Parameters
function printIngredients(
  quantity: string,
  ingredient: string,
  extra?: string
) {
  return `${quantity} ${ingredient} ${extra ? `${extra}` : ""}`;
}

console.log(printIngredients("1C", "Flour"));
console.log(printIngredients("1C", "sugar", "something else"));

//Optional Fields
interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!; //buh avoid the exclamtion mark.... heres the efficient method
  }
  return "";
}
console.log(getEmail({ id: "2" }));
console.log(getEmail({ id: "2", info: { email: "Prime@gmail.com" } }));

function getEmailEasy(user: User): string {
  return user?.info?.email ?? "";
}

//Optional Callbacks
function callback(x: number, y: number) {
  return x + y;
}

function addWithCallback(x: number, y: number, callback?: () => void) {
  return [x, y];
  callback?.(); //to show the funtion exists instead of an if condition
}

console.log(addWithCallback(2, 3));
console.log(addWithCallback(2, 3, callback(3, 5)));
console.log(callback(3, 5));
