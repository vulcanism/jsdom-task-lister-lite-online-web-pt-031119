document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

document.querySelector('#submit').addEventListener('click', function(event){
  let input = document.getElementById('new-task-description').value;
  let list = document.getElementById('tasks');
  list.innerHTML += `<li>${input}</li>`;
  event.preventDefault();
});
