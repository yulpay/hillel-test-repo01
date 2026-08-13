const users = [
  { name: "Юлія", email: "1@example.com", age: 25 },
  { name: "Лука", email: "2@example.com", age: 32 },
  { name: "Михайло", email: "3@example.com", age: 28 }
];

  for (const user of users) {
    const { name, email, age } = user;
    console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
  }
