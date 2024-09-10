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
var number = [1, 2, 3, 4, 5];
var newArray = [10, "ten", true, null];
var person = {
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
function getName(name) {
    return {
        name: name,
    };
}
var a = getName("m");
console.log(a);
