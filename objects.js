let user = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";
delete user.name;
console.log(user.name);

let emptyTestObject = { age: 36, money: null };
emptyTestObject["health status"] = "mysterious infection in progress";

console.log(
  "age" in emptyTestObject,
  "money" in emptyTestObject,
  "health status" in emptyTestObject
);

for (let key in emptyTestObject) {
  console.log(key); // prints keys
  console.log(emptyTestObject[key]); // prints values for the keys
}

function isEmpty(emptyTestObject) {
  for (let key in emptyTestObject) {
    // iterate through keys
    return false; // returns false if there are any properties (loops starts)
  }
  return true; // return true if there's no properties
}
