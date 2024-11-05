function addTodo() {
    const input = document.getElementById("todo-input");
    const todoText = input.value.trim();
  
    if (todoText) {
      const todoList = document.getElementById("todo-list");
  
      // Create new list item for todo
      const listItem = document.createElement("li");
      listItem.className = "todo-item";
  
      // Create span to hold the todo text
      const todoSpan = document.createElement("span");
      todoSpan.textContent = todoText;
      listItem.appendChild(todoSpan);
  
      // Create delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function() {
        todoList.removeChild(listItem);
      };
      listItem.appendChild(deleteButton);
  
      // Add the new todo item to the list
      todoList.appendChild(listItem);
  
      // Clear input field
      input.value = "";
    }
  }
  