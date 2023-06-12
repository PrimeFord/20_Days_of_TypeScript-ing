//Utility Types: there are diffrent types of utility. utilities overrides a data

import { type } from "os";

interface MyUser {
  name: string;
  id: number;
  email?: string;
}

// interface MyUserOptionals {
//   name?: string;
//   id?: string;                  since it has been overriden
//   email?: string;
// }

//Partial utility makes everything in the object optional

type MyUserOptionals = Partial<MyUser>; //everything is optional

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    { name: "Prime", id: 1, email: "dontemail:dont.com" },
    {
      name: "Sage", //Sage has been overidden
    }
  )
);

// Required utility makes one of the data in the object required that is non-optional

type RequiredMyUser = Required<MyUser>;

//Pick utility it picks the data you wanna override

type JustEmailandName = Pick<MyUser, "email" | "name">;

//Omit utility is the opposite of pick it removes from the object

type UserWithoutID = Omit<MyUser, "id">;

const mapByID = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [v.id]: other,
    };
  }, {});
};

console.log(
  mapByID([
    { id: 2, name: "Prime" },
    { id: 3, name: "Sage" },
  ])
);
