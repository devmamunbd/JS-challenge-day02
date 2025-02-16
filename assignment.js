// Assignment of Day02

// Task 1
let name = "Mamun Ahmed";
let age = 22;
let language = "JavaScript";

// Task 2
console.log(name); // Mamun Ahmed
console.log(age); // 22
console.log(language); // JavaScript

// Task 3
name = "Mamun Khan";
console.log(name);
// Mamun Khan

// Task 4
const person = {
  name: "Robiul Khan",
  age: 21,
  isStudent: true,
  language: ["JS", "Python", "Java"],
};
console.log(person);

// Add New Data
person.married = "No";

// assign new variable
let persons = person;
console.log("persons", person);

// modify object and array
person.name = "Belayet";
console.log(person.name); // Belayet

person.language.push("PHP");
console.log(person);
