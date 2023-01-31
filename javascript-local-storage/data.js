/* exported todos */

var todos = [];

const previousTodosJSON = localStorage.getItem('javascript-local-storage')
if (previousTodosJSON) {
  todos = JSON.parse(previousTodosJSON)
}

window.addEventListener("beforeunload", () => {
  const todosJSON = JSON.stringify(todos)
  localStorage.setItem('javascript-local-storage', todosJSON)
})