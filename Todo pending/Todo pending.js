let todoItemsContainer = document.getElementById("todoItemsContainer");
//we need to reuse the code for every toDOItems ,hence we create a function 

let todoList = [{
        text: "Html"
    },
    {
        text: "Css"
    },
    {
        text: "Java"
    }
];

function createAndAppendTodo(todo) {
    let toDOItems = document.createElement("li");
    toDOItems.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(toDOItems);
    console.log(todoItemsContainer);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = todo.text;
    inputElement.classList.add("checkbox-input");
    toDOItems.appendChild(inputElement);

    let labelContainer = document.createElement("Div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    toDOItems.appendChild(labelContainer);

    let label = document.createElement("label");
    label.setAttribute("for", todo.text);
    label.classList.add("checkbox-label");
    label.textContent = todo.text;
    labelContainer.appendChild(label);

    let iconContainer = document.createElement("Div");
    iconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(iconContainer);

    let icon = document.createElement("i");
    icon.classList.add("far", "fa-trash-alt", "delete-icon");
    iconContainer.appendChild(icon);


}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}
