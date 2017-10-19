function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', event => {
  event.preventDefault();
  let title = newToDoText.value;
  // create a new li
  let newLi = document.createElement('li');

  // create a new input
  let checkbox = document.createElement('input');

  // set the input's type to checkbox
  checkbox.type = "checkbox";

  // set the title
  newLi.textContent = title;

  // attach the checkbox to the li
  newLi.appendChild(checkbox);

  var remov = document.createElement('input');
  remov.type = "button";
  newLi.appendChild(remov);
  remov.value = "Delete this To-Do!";

  // attach the li to the ul
  toDoList.appendChild(newLi);

  //empty the input
  newToDoText.value = '';

  });
  remov.addEventListener('click', event => {
  remov.parentNode.parentNode.removeChild(remov.parentNode)();
  });
 }

window.onload = function() {
  onReady();
};
