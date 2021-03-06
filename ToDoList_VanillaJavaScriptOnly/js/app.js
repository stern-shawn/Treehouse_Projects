// Problem: User interaction doesn't exist/isn't working as intended
// Solution: Add interactivity to let user make/modify todo list app

// Feedback from client:
// Input field doesn't clear after new item is appended
// Enable adding more handlers to the add item button

// More Feedback from client:
// When editing, the edit button should display "Save" instead
// Prevent creation of elements with no task description

var taskInput = document.getElementById("new-task");  // id: new-task
var addButton = document.getElementsByTagName("button")[0];  // first button on page
var incompleteTasksHolder = document.getElementById("incomplete-tasks");  // id: incomplete-tasks
var completeTasksHolder = document.getElementById("completed-tasks");  // id: completed-tasks

// New task list item
var createNewTaskElement = function(taskString) {
  // Create the list item and the elements it will contain
  var listItem = document.createElement("li");
  // input checkbox
  var checkBox = document.createElement("input"); // type checkbox
  // label
  var label = document.createElement("label");
  // input text
  var editInput = document.createElement("input"); // type text
  // button (edit)
  var editButton = document.createElement("button");
  // button (delete)
  var deleteButton = document.createElement("button");

  // Each element needs to be customized
  checkBox.type = "checkbox";
  editInput.type = "text";

  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  label.innerText = taskString;

  // ..and then appended to the list
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

// Add a new task
var addTask = function () {
  // Only create a new task if input is defined
  if (taskInput.value !== "") {
    console.log("Adding task...");
    // Create a new listitem with the text from the new task containing:
    var listItem = createNewTaskElement(taskInput.value);

    // Append listItem to incompleteTasksHolder
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value = "";
  }
}

// Edit existing task
var editTask = function () {
  console.log("Edit task...");
  var listItem = this.parentNode;

  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");

  var containsClass = listItem.classList.contains("editMode");

  // If in editMode
  if (containsClass) {
    // Label text becomes value of input
    label.innerText = editInput.value;
    // No longer editing, visually indicate user can edit again
    this.innerText = "Edit";
  } else {
    // input value becomes value of label
    editInput.value = label.innerText;
    // Entering edit mode, let user know that clicking again will "save"
    this.innerText = "Save";
  }

  // Toggle .editMode of parent
  listItem.classList.toggle("editMode");
}

// Mark a task complete
var taskCompleted = function () {
  console.log("Task Done...");
  // append task to the complete list
  var listItem = this.parentNode
  completeTasksHolder.appendChild(listItem);

  // Bind the opposing handler to the checkbox
  bindTaskEvents(listItem, taskIncomplete);
}

// Mark a task incomplete
var taskIncomplete = function () {
  console.log("Task not done...");
  // Append to todo list
  var listItem = this.parentNode
  incompleteTasksHolder.appendChild(listItem);

  // Bind the opposing handler to the checkbox
  bindTaskEvents(listItem, taskCompleted);
}

var deleteTask = function () {
  console.log("Delete task...");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  // remove the parent item (li element) from the ul of tasks
  ul.removeChild(listItem);
}

// Helper function to bind given checkbox handler and other handlers to the given item
var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Binding list item events...");
  // Select li's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  // bind editTask to edit button
  editButton.onclick = editTask;
  // bind deleteTask to the delete button
  deleteButton.onclick = deleteTask;
  // bind given checkboxEventHandler to the checkbox
  checkBox.onchange = checkBoxEventHandler;
}

// Hypothetical AJAX request by the client
var ajaxRequest = function () {
  console.log("AJAX Request");
}

// Event handler attachments

// Set the click handler to the addTask function as well as the ajax request dummy to see that we can have multiple event handlers
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

// Cycle over the incomplete task holder ul list items
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
  // bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

// Cycle over the completed task holder ul list items
for (var i = 0; i < completeTasksHolder.children.length; i++) {
  // bind events to list item's children (taskIncomplete)
  bindTaskEvents(completeTasksHolder.children[i], taskIncomplete);
}
