const person = {
  firstName: "Юлія",
  lastName: "Паюл",
  age: 33
};

person.email = "julia@example.com";

delete person.age;

console.log(person);