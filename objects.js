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