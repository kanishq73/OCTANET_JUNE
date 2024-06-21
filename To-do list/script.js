const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

let tasks = [];

addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        newTaskInput.value = '';
        renderTasks();
    }
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.className = 'task';
        taskElement.textContent = task.text;
        if (task.completed) {
            taskElement.className += 'ompleted';
        }
        taskList.appendChild(taskElement);
    });
}

renderTasks();