let user = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";
delete user.name;
console.log(user.name);

let emptyTestObject = { age: 36, money: null };

console.log("age" in emptyTestObject, "money" in emptyTestObject);
