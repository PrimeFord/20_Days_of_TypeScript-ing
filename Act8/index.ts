//Generics with keyOf
function pluck<DataType, KeyType extends DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  //DataType[KeyType][]
  return items.map((item) => item[key]);
}

const dogs = [
  { name: "Mimi", age: 5 },
  { name: "LG", age: 3 },
];
console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));

interface BaseEvent {
  time: number;
  user: string;
}
interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}
function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): any {
  return [name, data];
}

console.log(
  sendEvent("addToCart", {
    productID: "foo",
    user: "Prime",
    quantity: 2,
    time: 10,
  })
);

console.log(sendEvent("checkout", { time: 10, user: "Sage" }));
