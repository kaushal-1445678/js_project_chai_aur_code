// 🎨 FILE 3: app.js - The Connector (Brings It All Together)
// This file connects the HTML page to the TodoApp logic
// It's like a waiter - takes user clicks and brings results back

// ===== PART 1: CREATE APP AND GET HTML REFERENCES =====
const app = new TodoApp();  // Create ONE TodoApp object to manage our todos

// Get references to HTML elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');
const filterBtns = document.querySelectorAll('.filter-btn');
const totalSpan = document.getElementById('totalCount');
const activeSpan = document.getElementById('activeCount');
const completedSpan = document.getElementById('completedCount');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');

// ===== PART 2: renderTodos() - Display All Todos =====
/**
 * This function is called whenever we need to update the display
 * It shows/hides todos based on current filter
 */
function renderTodos() {
    // Get the todos that should be displayed based on current filter
    const filteredTodos = app.getFilteredTodos(app.currentFilter);

    // Clear the old list from the page
    todoList.innerHTML = '';

    // Show empty state if no todos, otherwise hide it
    if (filteredTodos.length === 0) {
        emptyState.style.display = 'block';
    } else {
        emptyState.style.display = 'none';
    }

    // For EACH todo in the array
    filteredTodos.forEach(todo => {
        // Create a new <li> tag
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;

        // Put HTML code inside the <li> with the todo data
        li.innerHTML = `
            <input 
                type="checkbox" 
                class="todo-checkbox"
                ${todo.completed ? 'checked' : ''}
                onchange="handleToggleTodo(${todo.id})"
            >
            <span class="todo-title">${todo.title}</span>
            <div class="todo-buttons">
                <button class="btn-small btn-edit" onclick="handleEditTodo(${todo.id})">Edit</button>
                <button class="btn-small btn-delete" onclick="handleDeleteTodo(${todo.id})">Delete</button>
            </div>
        `;

        // Add the <li> to the <ul> list
        todoList.appendChild(li);
    });

    // Update the statistics display
    updateStats();
}

// ===== PART 3: handleAddTodo() - When User Clicks Add =====
/**
 * This function runs when user clicks "Add Todo" button
 */
function handleAddTodo() {
    // Get what user typed (trim removes extra spaces)
    const title = todoInput.value.trim();

    // If empty, show alert and stop
    if (title === '') {
        alert('Please enter a todo!');
        return;
    }

    // Call the TodoApp's addTodo method to add it
    app.addTodo(title);

    // Clear the input field
    todoInput.value = '';

    // Put cursor back in input so user can type next todo
    todoInput.focus();

    // Update the display
    renderTodos();
}

// ===== PART 4: handleDeleteTodo() - When User Clicks Delete =====
/**
 * This function runs when user clicks the delete button
 * @param {number} id - The ID of the todo to delete
 */
function handleDeleteTodo(id) {
    // Ask user for confirmation
    if (confirm('Are you sure you want to delete this todo?')) {
        // Delete it and refresh the display
        app.deleteTodo(id);
        renderTodos();
    }
}

// ===== PART 5: handleToggleTodo() - When User Clicks Checkbox =====
/**
 * This function runs when user clicks the checkbox
 * @param {number} id - The ID of the todo to toggle
 */
function handleToggleTodo(id) {
    // Mark as complete/incomplete and refresh display
    app.toggleTodo(id);
    renderTodos();
}

// ===== PART 6: handleEditTodo() - When User Clicks Edit =====
/**
 * This function runs when user clicks the edit button
 * @param {number} id - The ID of the todo to edit
 */
function handleEditTodo(id) {
    // Find the todo with this id
    const todo = app.todos.find(t => t.id === id);

    if (!todo) return;

    // Show a popup asking user for new text
    const newTitle = prompt('Edit your todo:', todo.title);

    // If user entered something (didn't click Cancel and didn't leave empty)
    if (newTitle !== null && newTitle.trim() !== '') {
        app.editTodo(id, newTitle.trim());
        renderTodos();
    }
}

// ===== PART 7: Filter Handlers =====
/**
 * Change the current filter and refresh display
 * @param {string} filterType - The filter type (all, active, completed)
 */
function setFilter(filterType) {
    app.currentFilter = filterType;

    // Update the active button styling
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filterType) {
            btn.classList.add('active');
        }
    });

    // Refresh display with new filter
    renderTodos();
}

// ===== PART 8: updateStats() - Show Counts =====
/**
 * Update the statistics display
 */
function updateStats() {
    const stats = app.getStats();
    totalSpan.textContent = stats.total;
    activeSpan.textContent = stats.active;
    completedSpan.textContent = stats.completed;

    // Enable/disable clear completed button
    clearCompletedBtn.disabled = stats.completed === 0;
}

// ===== PART 9: EVENT LISTENERS - Listen for User Interactions =====

// When user clicks Add button, run handleAddTodo
addBtn.addEventListener('click', handleAddTodo);

// When user presses Enter key in input, add the todo
todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleAddTodo();
    }
});

// When user clicks filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setFilter(btn.dataset.filter);
    });
});

// When user clicks "Clear Completed" button
clearCompletedBtn.addEventListener('click', () => {
    if (confirm('Delete all completed todos?')) {
        app.clearCompleted();
        renderTodos();
    }
});

// ===== INITIALIZATION =====
// When page first loads, display the todos
renderTodos();

