function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const remov = document.getElementById('remov');
  function deleteToDos() {

// Need Code //

  }
  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
      if (!newToDoText) { return }
      toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';
    renderTheUI(toDos);
  }
  function renderTheUI(toDos) {
    const todoList = document.getElementById('toDoList');
    toDoList.textContent = '';
    toDos.forEach(function(toDo) {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    newLi.textContent = toDo.title;
    todoList.appendChild(newLi);
    newLi.appendChild(checkbox);
   });
  }
  addToDoForm.addEventListener('submit', event => {
  event.preventDefault();
  createNewToDo();
  });
  remov.addEventListener('click', event => {
  event.preventDefault();
  deleteToDos();
  });
  renderTheUI(toDos);
}

window.onload = function() {
  onReady();
};
