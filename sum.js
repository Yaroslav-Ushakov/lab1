const args = process.argv.slice(2);
const numbers = args.map(Number);
let sum = 0;
for (const a of numbers) {
  sum += a;
}
console.log("Sum= " + sum);
