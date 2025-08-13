// Map users to names

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];
// let names = users.map(item => item.name);

// console.log(names);

// Map to objects

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((person) => ({
  fullname: `${person.name}, ${person.surname}`,
  id: person.id,
}));

console.log(usersMapped[1].id);
console.log(usersMapped[1].fullname);