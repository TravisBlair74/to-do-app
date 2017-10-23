function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function deleteToDo (vary) {
  for (let i=0;i<toDos.length;i++) {
  if (toDos[i].title==vary) {
    toDos.splice(i,1);
   }
  }
  renderTheUI(toDos);
  }

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText) { return; }
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
      remov.addEventListener('click', event => {
        deleteToDo(remov.parentNode.textcontent);
      });
    });
  }

  addToDoForm.addEventListener('submit', event => {
  event.preventDefault();
  createNewToDo();
  });

  renderTheUI(toDos);
}

window.onload = function() {
  onReady();
};
