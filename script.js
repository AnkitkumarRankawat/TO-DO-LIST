
const timeDisplay = document.getElementById('time-display');
const themeToggle = document.getElementById('theme-toggle');
const newTaskInput = document.getElementById('new-task');
const taskPriority = document.getElementById('task-priority');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const clearAllButton = document.getElementById('clear-all');

// Update time
setInterval(() => {
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString();
}, 1000);

// Light/Dark mode toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Add task
addTaskButton.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();
    if (!taskText) {
        newTaskInput.classList.add('shake');
        setTimeout(() => newTaskInput.classList.remove('shake'), 300);
        return;
    }

    const priority = taskPriority.value;
    const li = document.createElement('li');
    li.className = `priority-${priority}`;
    li.innerHTML = `
        ${taskText}
        <button class="remove-btn">Remove</button>
    `;
    taskList.appendChild(li);
    newTaskInput.value = '';
});

// Remove task
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
        e.target.closest('li').remove();
    }
});

// Clear all tasks
clearAllButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all tasks?')) {
        taskList.innerHTML = '';
    }
});
