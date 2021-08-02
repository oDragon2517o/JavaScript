var a = Number.isNaN(Number.NaN); // true
var b = Number.isNaN(true); // false - new Number(true) = 1
var c = Number.isNaN(null);  // false - new Number(null) = 0
var d = Number.isNaN(25);  // false
var e = Number.isNaN("54"); // false
var f = Number.isNaN("hello"); // false
var g = isNaN("hello"); // true



document.write(a," ",b, " ",c," ",d, " ",e," ",f, " ",g," ", " ");
