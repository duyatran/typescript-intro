const mockUsers = require("./users.json")

const getUserFullNameByEmail = (email) => {
  const user = mockUsers.find((user) => user.email === email);
  return user.first_name.concat(" ", null);
  // undefined.first_name
}

// test cases
// console.assert(
//   getUserFullNameByEmail("nibh.vulputate.mauris@outlook.ca") === "Upton Santos");
// console.assert(
//   getUserFullNameByEmail("abc@xyz.com") === "ABC XYZ");
// console.log(getUserFullNameByEmail("aliquet.libero@outlook.ca"));
// console.assert(
//   getUserFullNameByEmail("aliquet.libero@outlook.ca") === "Bradley");

