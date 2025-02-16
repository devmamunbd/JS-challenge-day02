// Day-02

// Variable are use to store data In JavaScript

// Var : Function Scoped - Can be Reassign and Redeclared (Not Recommended)
// Let : Block-Scope - Can be Reassign but not Redeclared
// Const : Can't Reassign & Redeclared

// Written Rules

// The Name Must Have Digit(0-9) or Letters
// The Name Have $ and _
// The First Character Must Not be a Digit
// No Reversed Keywords
// Use camelCase

// Example

let $ = "Mamun";
console.log($); // Mamun

let _ = "Mamun";
console.log(_); // Mamun

// Wrong Declare
// let 2Day = "02 Days"

// Var
// Reassigned & redeclared
var Name = "John Cena";
// John Cena
var Name = "Roman Reings";
// Roman Reings

// Let
let address = "Sylhet";

// Reassigned
address = "Cox's Bazar";

// Redeclared : not working,
// let address = "Dhaka"

// const
const Hobby = "Programming";

// reassign: not working
// Hobby = "Travel";

// Redeclared: not working
// const Hobby = "Cricket";
