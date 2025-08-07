let user = {
  name: "John",
  surname: "Smith",
  isEatingACookie: true,
};

user.name = "Pete";
delete user.name;

function isEmpty(user) {
  for (let prop in user) {
    return false;
  }
  return true;
}
console.log(isEmpty(user));



// for (let prop in user) {
//   console.log(user[prop]);
// }
