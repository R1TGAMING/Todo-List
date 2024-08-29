
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
  newItem.id = "newItem"
  addInput.value = ""
    const btn = document.createElement("button")
    const txt = document.createTextNode("\u00D7");
    btn.classList = "close"
    btn.appendChild(txt)
    newItem.appendChild(btn)

    const parent = document.getElementById("listGroup")
    btn.addEventListener( 'click', () => {
      parent.removeChild(newItem)
    })

   
  listGroup[0].appendChild(newItem)
  }
})


