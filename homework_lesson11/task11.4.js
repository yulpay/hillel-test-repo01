class TodoService {
  async getTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) throw new Error('Помилка мережі');
      return await response.json();
    } catch (error) {
      console.error("TodoService помилка:", error);
    }
  }
}

class UserService {
  async getUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      if (!response.ok) throw new Error('Помилка мережі');
      return await response.json();
    } catch (error) {
      console.error("UserService помилка:", error);
    }
  }
}

const todoApi = new TodoService();
const userApi = new UserService();

Promise.all([todoApi.getTodo(), userApi.getUser()])
  .then(results => console.log("Результати з класів (Promise.all):", results));