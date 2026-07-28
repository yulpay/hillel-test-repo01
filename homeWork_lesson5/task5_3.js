let number = 5;

console.log("For:");
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

console.log("While:");
let j = 1; 
while (j <= 10) {
  console.log(`${number} x ${j} = ${number * j}`);
  j++; 
}