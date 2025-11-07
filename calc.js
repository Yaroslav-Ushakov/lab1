const argsNum = process.argv.slice(2);
const operation = argsNum[0];
const num1 = Number(argsNum[1]);
const num2 = Number(argsNum[2]);
let result;
if (operation === "add") {
	result = num1 + num2;
} else if (operation === "sub") {
	result = num1 - num2;
} else if (operation === "mul") {
	result = num1 * num2;
} else if (operation === "div") {
	result = num1 / num2;
}	
console.log("Result=" + result);