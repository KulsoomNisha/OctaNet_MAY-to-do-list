
// Function to add a task to the list
function addTask() {
    // Get the input value
    var taskInput = document.getElementById("writespace").value;

    // Check if the input value is not empty
    if (taskInput.trim() !== "") {
        // Create a new list item
        var li = document.createElement("li");
        var textNode = document.createTextNode(taskInput);
        li.appendChild(textNode);

        // Append the new list item to the existing list
        document.getElementById("list").appendChild(li);

        // Clear the input field after adding the task
        document.getElementById("writespace").value = "";
    }
}

  // Function to add a task to the list
function addTask() {
// Get the input value
var taskInput = document.getElementById("writespace").value;

// Find the first empty input field among task1 to task10
for (var i = 1; i <= 10; i++) {
var taskField = document.getElementById("task" + i);
if (taskField.value === "") {
    taskField.value = taskInput;
    break;
}
}

// Clear the input field after adding the task
document.getElementById("writespace").value = "";
}
// Function to remove all tasks from the list
function removeAllTasks() {
    var list = document.getElementById("list");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}