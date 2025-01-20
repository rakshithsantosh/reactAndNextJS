//Variable Declaration

//Once a variable is created in ts we cannot change the type

let temperature = 25; //this cannot be reassigned to string in ts

//Type Casting

let today = new Date();
let date1 = today;
let date2 = today as any; // this give us a degree of flexability

//Functions
function add(a: number, b: number): number {
  return a + b;
}

//We will have to type the return as well for a function

//Objects

let car: {
  make: string;
  model: string;
  year: number;
};

//index signatures

const phones: {
  [k: string]: {
    country: string;
    area: string;
    number: string;
  };
} = {
  home: { country: "india", area: "karnataka", number: "1234567890" },
};

//Array Types
let arr: string[] = ["a", "f", "i"];
