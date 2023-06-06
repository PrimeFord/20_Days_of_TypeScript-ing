//interface for coordinates which has x and y values
interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return { ...obj };
}

function parseCoordinateFromNumber(x: number, y: number): Coordinate {
  return { x, y };
}

//Overloading a Function with function.
function parseCoordinate(str: string): Coordinate; //for the string value
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };
  if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coord[key as "x" | "y"] = parseInt(value, 10);
    });
  } else if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoordinate(20, 30));
console.log(parseCoordinate({ x: 12, y: 36 }));
console.log(parseCoordinate("x: 18,y: 16"));
