document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
  newTaskForm.addEventListener("submit", createNewTask);
});

document.querySelector('#submit').addEventListener('click', function(event){
  let input = document.getElementById('new-task-description').value;
  let list = document.getElementById('tasks');
  list.innerHTML += `<li>${input}</li>`;
  event.preventDefault();
});
