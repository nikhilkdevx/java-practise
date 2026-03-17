let months = ["january","july","march","august"];
let b = months.splice(0,1);
console.log(b);
console.log(months);
let c = months.splice(1,0,"june");
console.log(months);