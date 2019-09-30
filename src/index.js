document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
  newTaskForm.addEventListener("submit", createNewTask);
});

function createNewTask(e){
  e.preventDefault()
  const newTaskDescription = document.getElementById('new-task-description')
  const newTask = document.createElement('li')
  const taskList = document.getElementById('tasks')
  newTask.textContent = newTaskDescription.value

  const deleteTask = document.createElement('button')
  deleteTask.innerText = 'x'

  taskList.appendChild(newTask)
  console.log(e.target)
}


const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};
