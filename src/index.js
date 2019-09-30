document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
  newTaskForm.addEventListener("submit", createNewTask);
});

function addTask(e){
  e.preventDefault()
  const newTaskDescription = document.getElementById("new-task-description")
  const newTask = document.createElement("li")
  const taskList = document.getElementById("tasks")
  newTask.textContent = newTaskDescription.value

  const deleteButton = document.createElement("button")
  deleteButton.innerText = "X"
  deleteButton.addEventListener("click", deleteTask)
  newTask.appendChild(deleteButton)

  taskList.appendChild(newTask)
  console.log(e.target)
}

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};

function onDeleteClick(e) {
  const deleteButton = e.currentTarget;
  const listItem = deleteButton.parentElement;
  const list = listItem.parentElement;
  list.removeChild(listItem);
}
