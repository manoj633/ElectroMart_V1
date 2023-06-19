import bcrypjs from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypjs.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "johndoe@example.com",
    password: bcrypjs.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Jane Doe",
    email: "janedoe@example.com",
    password: bcrypjs.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
