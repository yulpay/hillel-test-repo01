function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number" || Number.isNaN(numerator) || Number.isNaN(denominator)) {
    throw new Error("Помилка: Обидва аргументи повинні бути числами.");
  }

  if (denominator === 0) {
    throw new Error("Помилка: Ділення на нуль неможливе.");
  }

  return numerator / denominator;
}

console.log("Коректні дані:");
try {
  const result1 = divide(20, 4);
  console.log(`Результат: ${result1}`);
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Робота завершена.");
}

console.log("\nДілення на нуль:");
try {
  const result2 = divide(10, 0);
  console.log(`Результат: ${result2}`);
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Робота завершена.");
}

console.log("\nАргумент не є числом:");
try {
  const result3 = divide(10, "5");
  console.log(`Результат: ${result3}`);
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Робота завершена.");
}