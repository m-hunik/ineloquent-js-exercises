let user = {
  name: "John",
  surname: "Smith",
  isEatingACookie: true,
};

user.name = "Pete";
delete user.name;

// Check if an object is empty

function isEmpty(user) {
  for (let prop in user) {
    return false;
  }
  return true;
}
console.log(isEmpty(user));

// Sum properties of an object

let salaries = {
  John: 100, 
  Ann: 160,
  Pete: 130
};

function sumSalaries(salaries) {
  let sum = 0;
  for (let prop in salaries) {
    sum += salaries[prop];
  }
  return sum;
}
console.log(sumSalaries(salaries));

// Multiply numeric properties of an object by 2

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(menu);

function multiplyNumeric(menu) {
  for (let prop in menu) {
    if (typeof menu[prop] === 'number') {
      menu[prop] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);