
const students = [
  { name: "Adhi", gender: "male" },
  { name: "Ahamed", gender: "male" },
  { name: "Rutika Kadam", gender: "female" },
  { name: "Krishna", gender: "male" },
  { name: "Priyadharsini", gender: "female" },
  { name: "Sujatha", gender: "female" },
];

// Task 1: find all female name

const female_names=students.filter((n) => n.gender == "female").map((nm)=>nm.name);
console.log(female_names);

//Task 2: Starting with 'A'
const name_with_A=students.filter((a) => a.name.startsWith('A')).map((nm)=>nm.name);
console.log(name_with_A)

// Task 3: Count the no. of males

const count_males=students.filter((n) => n.gender == "male");
console.log(count_males.length);







