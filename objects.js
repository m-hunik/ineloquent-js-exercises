let user = {
  name: "John",
  surname: "Smith",
  isEatingACookie: true,
};

user.name = "Pete"; 
delete user.name;

console.log(user.name);

// for (let prop in user) {
//   console.log(user[prop]);
// }
