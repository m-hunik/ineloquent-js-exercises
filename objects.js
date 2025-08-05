let user = {
  name: "John",
  surname: "Smith",
  isEatingACookie: true,
};

console.log(user.isEatingACookie);

for (let prop in user) {
  console.log(user[prop]);
}
