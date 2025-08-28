// Map users to names

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];
// let names = users.map(item => item.name);

// console.log(names);

// Map users array to new objects with fullname and id

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map((person) => ({
//   fullname: `${person.name}, ${person.surname}`,
//   id: person.id,
// }));

// console.log(usersMapped[1].id);
// console.log(usersMapped[1].fullname);

// Sort users by age

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

// arr.sort((a, b) => a.age - b.age);

// console.log(arr);

// Get average age

// let john = { name: "John", age: 25};
// let pete = { name: "Pete", age: 30};
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// let averageAge = arr.reduce((sum, current) => sum + current.age, 0) / arr.length;    

// console.log(averageAge);

// Create keyed object from array

 let users = [
    {id: 'john', name: 'John Smith', age: 20},
    {id: 'ann', name: 'Ann Smith', age: 24},
    {id: 'pete', name: 'Pete PEterson', age: 31},
 ];

 let usersById = groupById(users);
    console.log(usersById);

function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}