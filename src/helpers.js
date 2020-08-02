// import { set } from "core-js/fn/dict";

const KEY = "todos-vuejs";

export const todoStorage = {
  fetch: () => {
    const todos = JSON.parse(localStorage.getItem(KEY) || "[]");
    todoStorage.id = todos.length;
    return todos;
  },

  save: todos => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }
};
