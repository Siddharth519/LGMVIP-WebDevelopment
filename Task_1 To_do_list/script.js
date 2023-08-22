// JavaScript code for ToDo List

let selectAllState = false;

// Function to add a task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('taskList');

    // Create a new list item for the task
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
      <label class="form-check-label">
        <input type="checkbox" class="form-check-input">
        ${taskText}
      </label>
      <button class="delete-btn"><i class="fas fa-trash-alt"></i> Delete</button>
    `;

    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';

    // Save tasks to localStorage
    saveTasksToLocalStorage();
  }
}

// Function to delete a task
function deleteTask(event) {
  if (event.target.classList.contains('delete-btn')) {
    const listItem = event.target.parentElement;
    const taskList = document.getElementById('taskList');
    taskList.removeChild(listItem);

    // Save tasks to localStorage after deleting
    saveTasksToLocalStorage();
  }
}

// Function to handle Enter key press in the input field
function handleEnterKeyPress(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent form submission on Enter key press
    addTask();
  }
}

// Function to save tasks to localStorage
function saveTasksToLocalStorage() {
  const taskList = document.getElementById('taskList').innerHTML;
  localStorage.setItem('tasks', JSON.stringify(taskList)); // Store as JSON string
}

// Function to load tasks from localStorage
function loadTasksFromLocalStorage() {
  const tasksJson = localStorage.getItem('tasks');
  if (tasksJson) {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = JSON.parse(tasksJson); // Parse the JSON string
  }
}

// Function to select all tasks
function selectAllTasks() {
  const checkboxes = document.querySelectorAll('.form-check-input');
  checkboxes.forEach((checkbox) => (checkbox.checked = !selectAllState));
  selectAllState = !selectAllState;
}

// Event listener for "Select All" button
document.getElementById('selectAllBtn').addEventListener('click', selectAllTasks);

// Event listener for "Delete Selected" button
document.getElementById('deleteSelectedBtn').addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('.form-check-input:checked');
  const numSelected = checkboxes.length;
  if (numSelected > 0) {// JavaScript code for ToDo List

let selectAllState = false;

// Function to add a task
function addTask() {
  // ... Previous code ...
}

// Function to delete a task
function deleteTask(event) {
  // ... Previous code ...
}

// Function to handle Enter key press in the input field
function handleEnterKeyPress(event) {
  // ... Previous code ...
}

// Function to save tasks to localStorage
function saveTasksToLocalStorage() {
  const taskList = document.querySelectorAll('.list-group-item');
  const tasks = [];

  taskList.forEach((taskItem) => {
    const taskText = taskItem.querySelector('.form-check-label').textContent.trim();
    const completed = taskItem.querySelector('.form-check-input').checked;
    tasks.push({ text: taskText, completed: completed });
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasksFromLocalStorage() {
  const tasksJson = localStorage.getItem('tasks');
  if (tasksJson) {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = ''; // Clear the task list before adding tasks

    const tasks = JSON.parse(tasksJson);
    tasks.forEach((task) => {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      li.innerHTML = `
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input" ${task.completed ? 'checked' : ''}>
          ${task.text}
        </label>
        <button class="delete-btn"><i class="fas fa-trash-alt"></i> Delete</button>
      `;

      taskListElement.appendChild(li);
    });
  }
}

// Function to select all tasks
function selectAllTasks() {
  // ... Previous code ...
}

// Event listener for "Select All" button
document.getElementById('selectAllBtn').addEventListener('click', selectAllTasks);

// Event listener for "Delete Selected" button
document.getElementById('deleteSelectedBtn').addEventListener('click', () => {
  // ... Previous code ...
});

// Event listener to detect Ctrl + A (Select All)
document.addEventListener('keydown', (event) => {
  // ... Previous code ...
});

// Event listeners for addTask, deleteTask, handleEnterKeyPress, and loadTasksFromLocalStorage (as before)
document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskList').addEventListener('click', deleteTask);
document.getElementById('taskInput').addEventListener('keypress', handleEnterKeyPress);
document.addEventListener('DOMContentLoaded', loadTasksFromLocalStorage);

    const confirmation = confirm(`Are you sure you want to delete these ${numSelected} tasks?`);
    if (confirmation) {
      checkboxes.forEach((checkbox) => {
        const listItem = checkbox.parentElement.parentElement; // Adjusted the target element for proper deletion
        listItem.remove();
      });
      saveTasksToLocalStorage(); // Save updated tasks to localStorage after deleting
    }
  } else {
    alert('Please select tasks to delete.');
  }
});

// Event listener to detect Ctrl + A (Select All)
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.key === 'a') {
    event.preventDefault(); // Prevent the default behavior of Ctrl + A (selecting all text)
    selectAllTasks();
  }
});

// Event listeners for addTask, deleteTask, handleEnterKeyPress, and loadTasksFromLocalStorage (as before)
document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskList').addEventListener('click', deleteTask);
document.getElementById('taskInput').addEventListener('keypress', handleEnterKeyPress);
document.addEventListener('DOMContentLoaded', loadTasksFromLocalStorage);
