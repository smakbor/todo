window.addEventListener("load", () => {
  const form = document.querySelector(".new-task-form");
  const input = document.querySelector(".new-task-input");
  const list_el = document.querySelector(".tasks");
  let TodoArr = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo(input.value);

  });

  const addTodo = (item) => {
    if (!item == "") {
      const todo = {
        id: Date.now(),
        name: item,
        completed: false,
      };
      TodoArr.push(todo);
      //   addToStorage(TodoArr);
      input.value = "";
    }

    renderTodo(TodoArr);
  };

  const renderTodo = (itemArr) => {
    let items = "";
    itemArr.forEach((element) => {
      let item = ` <div class="task">
            <div class="content">
             <input type="text" class="text" value="${element.name}">
            </div>
            <div class="actions">
             <button  class="edit">Edit</button>
             <button  onclick="deleteTodo(${element.id})" class="delete">Delete</button>
         </div>
        </div>`;
      items += item;
    });
    list_el.innerHTML = items;
  };

  const deleteTodo = (id) => {
    const updateData = TodoArr.filter((item) => item.id !== id);
    id = null;
    renderTodo(TodoArr);
  };

  

});
