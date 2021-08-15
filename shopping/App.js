const section = document.querySelector("section");
const btn = document.querySelector("button");
const input = document.querySelector("input");
input.focus();
const form = document.querySelector("form");

const onSubmit = e => {
  e.preventDefault();
  const row = document.createElement("div");
  const item = document.createElement("div");
  input.focus();
  const deleteIcon = document.createElement("div");

  row.classList.add("row");
  row.id = Date.now();
  deleteIcon.classList.add("deleteIcon", "cursor");
  
  if (input.value === "") {
    return;
  }
  item.innerText = input.value;
  input.value = "";
  deleteIcon.innerText = "🗑"
  
  row.append(item);
  row.append(deleteIcon);
  section.append(row);
};

const deleteItem = e => {
  if (e.target.classList.contains("deleteIcon")) {
    const id = e.target.parentNode.id;
    const deletedItem = document.getElementById(`${id}`);
    deletedItem.remove();
  }
};

section.addEventListener("click", deleteItem)
btn.addEventListener("click", onSubmit);
form.addEventListener("submit", onSubmit);
