function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const remov = document.getElementById('remov');
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

  // attach the li to the ul
  toDoList.appendChild(newLi);

  //empty the input
  newToDoText.value = '';

  });
  remov.addEventListener('click', event => {
  const listItems = document.getElementsByTagName('li');
  const inputs = document.getElementsByTagName('inputs');
  toDoList.removeChild(listItems.inputs.checked == true);
  });
 }

window.onload = function() {
  onReady();
};
