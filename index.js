const input = document.querySelector(".inp");
const button = document.querySelector(".btn");
const todos = document.querySelector(".todos");





const getTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

//   if(input.value === '') return

  data.forEach((el) => {
    const titles = el.title;
    const p = document.createElement("p");
    p.textContent = titles;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    p.append(deleteButton);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = el.completed;
    p.append(checkbox);

    todos.append(p);

    deleteButton.addEventListener("click", () => {
      todos.removeChild(p);
    });

    checkbox.addEventListener("change", () => {
      if (checkbox.checked === true) {
        p.classList.add("finish");
      } else if (checkbox.checked === false) {
        p.classList.remove("finish");
      }
    });
  });

  button.addEventListener("click", () => {
    const mytodo = document.createElement("p");
    mytodo.textContent = input.value;
    const del = document.createElement("button");
    del.textContent = "X";
    mytodo.append(del);
    todos.prepend(mytodo);
    input.value = "";
    const checkboxMy = document.createElement("input");
    checkboxMy.type = "checkbox";
    mytodo.append(checkboxMy);

    del.addEventListener("click", () => {
      todos.removeChild(mytodo);
    });
  });
};

getTodos();
