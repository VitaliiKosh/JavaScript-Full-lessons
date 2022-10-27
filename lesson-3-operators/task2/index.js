// code below must be finished ;)

/* cast to string */
console.log("17 to string is " + String(17)); // 17 to string is 17
console.log("-17.17 to string is " + String(-17.17)); // -17.17 to string is -17.17
console.log("false to string is " + String(false)); // false to string is false
console.log("null to string is " + String(null)); // null to string is null
console.log("undefined to string is " + String(undefined)); // undefined to string is undefined
console.log("0 to string is " + String(0)); // 0 to string is 0

// cast to number
console.log("'17' to number is " + Number("17")); // '17' to number is 17
console.log("true to number is " + Number(true)); // true to number is 1
console.log("false to number is " + Number(false)); // false to number is 0
console.log("null to number is " + Number(null)); // null to number is 0
console.log("undefined to number is " + Number(undefined)); // undefined to number is NaN
console.log("'   20   ' to number is " + Number("   20   ")); // '   20   ' to number is 20
console.log("'      ' to number is " + Number("      ")); // '      ' to number is 0
console.log("'   30d   ' to number is " + Number("   30d   ")); // '   30d   ' to number is NaN

// cast to boolean
console.log("null to boolean is " + Boolean(null)); // null to boolean is false
console.log("undefined to boolean is " + Boolean(undefined)); // undefined to boolean is false
console.log("0 to boolean is " + Boolean(0)); // 0 to boolean is false
console.log("-0 to boolean is " + Boolean(-0)); // -0 to boolean is false
console.log("NaN to boolean is " + Boolean(NaN)); // NaN to boolean is false
console.log("'' to boolean is " + Boolean("")); // '' to boolean is false
console.log("' ' to boolean is " + Boolean(" ")); // ' ' to boolean is true
console.log("17 to boolean is " + Boolean(17)); // 17 to boolean is true
console.log("'Hello' to boolean is " + Boolean("Hello")); // 'Hello' to boolean is true
