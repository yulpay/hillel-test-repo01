async function fetchTodoAsync() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) throw new Error('Помилка');
    return await response.json();
  } catch (error) {
    console.error("Помилка отримання Todo (async):", error);
  }
}

async function fetchUserAsync() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) throw new Error('Помилка');
    return await response.json();
  } catch (error) {
    console.error("Помилка отримання User (async):", error);
  }
}

const asyncAllResults = Promise.all([fetchTodoAsync(), fetchUserAsync()])
  .then(results => console.log("Результат Promise.all (завдання 3):", results));

const asyncRaceResult = Promise.race([fetchTodoAsync(), fetchUserAsync()])
  .then(result => console.log("Результат Promise.race (завдання 3):", result));