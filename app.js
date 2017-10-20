function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function deleteToDo () {
  remov.parentNode.parentNode.removeChild(newLi);
  renderTheUI(toDos);
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
      const remov = document.createElement('input');
      remov.type = "button";
      remov.value = "Delete this To-Do!";
      todoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(remov);
    });
  }

  addToDoForm.addEventListener('submit', event => {
  event.preventDefault();
  createNewToDo();
  });

  remov.addEventListener('click', event => {
    deleteToDo();
  });

  renderTheUI(toDos);
}

window.onload = function() {
  onReady();
};
