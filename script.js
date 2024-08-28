
const listGroup = document.getElementsByClassName("list-group")
const addInput = document.getElementById("inputTodo")
const form = document.querySelector("form")

// Add a new todo when click submit
form.addEventListener('submit', () => {
  event.preventDefault();
  if (addInput.value != "") {
  const value = addInput.value
  const newItem = document.createElement("a")
  newItem.classList = 'list-group-item list-group-item-action list-group-item-dark'
  newItem.textContent = value
  addInput.value = ""
  listGroup[0].appendChild(newItem)
  }
})

