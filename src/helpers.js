const KEY = "todos-vuejs";

const todoStorage = {
  fetch: () => {
    const todos = JSON.parse(localStorage.getItem(KEY) || "[]");
    todoStorage.id = todos.length
    return todos
  },

  save: todos => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }
};

export default todoStorage;
