// let title: string;

// title = "nur";

// console.log(title);

// let student: boolean = true;

// console.log(student);
// let students: boolean = false;

// console.log(student);

// TODO: add
// type TypeUser = {
//   name: string;
//   age: number;
//   isActive: boolean;
//   address?: {
//     street: string;
//     city: string;
//   };
// };

// let user: TypeUser;
// user = {
//   name: "Nur",
//   age: 25,
//   isActive: true,
//   address: {
//     street: "Lenina",
//     city: "Moscow",
//   },
// };

// let userinfo: TypeUser;
// userinfo = {
//   name: "Nur",
//   age: 25,
//   isActive: false,
// };

// console.log(userinfo);

// TODO: add
// let array: number[] = [10, 20, 30];
// let colors: string[] = ["red", "green", "blue"];
// console.log(array[0]);
// console.log(colors[1]);

// TODO: add
// let array2: number[];
// array2 = [100, 200, 300];

// console.log(array2);

// TODO:
let number: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// console.log(number);

type TypeArray = [number, string, boolean, null];

let newArray: TypeArray = [10, "ten", true, null];

// console.log(newArray);

// FIXME:

interface ServiceType {
  id: number;
  status: string;
  neme: string;
}

interface TypePerson {
  email: string;
  name: string;
  service: ServiceType[];
}

let person: TypePerson = {
  email: "nur@example.com",
  name: "Nur",
  service: [
    {
      id: 1,
      status: "active",
      neme: "Service 1",
    },
    {
      id: 2,
      status: "active1",
      neme: "Serv",
    },
    {
      id: 3,
      status: "active2",
      neme: "Se",
    },
  ],
};

// console.log(person);

// interface TypeName {
//   name: string;
// }

// function getName(name: string): TypeName {
//   return {
//     name,
//   };
// }

// let a = getName("maks");

// console.log(a);

interface TypeName {
  name: string;
  age: number;
}

let getNameOne = (name: string, age: number) => {
  return {
    name,
    age,
  };
};
let b = getNameOne("b", 23);
