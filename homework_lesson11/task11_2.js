function fetchTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      if (!response.ok) throw new Error('Помилка');
      return response.json();
    })
    .catch(error => console.error("Помилка отримання Todo:", error));
}

function fetchUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
      if (!response.ok) throw new Error('Помилка');
      return response.json();
    })
    .catch(error => console.error("Помилка отримання User:", error));
}

const promiseAllResults = Promise.all([fetchTodo(), fetchUser()])
  .then(results => console.log("Результат Promise.all:", results))
  .catch(error => console.error("Помилка в Promise.all:", error));

const promiseRaceResult = Promise.race([fetchTodo(), fetchUser()])
  .then(result => console.log("Результат Promise.race:", result))
  .catch(error => console.error("Помилка в Promise.race:", error));