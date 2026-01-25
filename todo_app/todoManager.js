// 🧠 FILE 2: todoManager.js - The Brain (TodoApp Class)
// This is the most important file. It contains all the todo logic.

class TodoApp {
    constructor() {
        // Initialize with empty todos array
        this.todos = [];
        
        // Start with showing all todos
        this.currentFilter = FilterStatus.ALL;
        
        // Load any previously saved todos
        this.loadFromStorage();
    }

    /**
     * Method 1: addTodo() - Adding a Todo
     * @param {string} title - The text of the todo
     * @returns {Todo} - The newly created todo
     */
    addTodo(title) {
        const newTodo = {
            id: Date.now(),           // Unique ID using current time in milliseconds
            title: title,             // The todo text
            completed: false,         // Start as not completed
            createdAt: Date.now(),    // Record when created
            updatedAt: Date.now()     // Record when last changed
        };

        this.todos.push(newTodo);     // Add to the list
        this.saveToStorage();         // Save to browser storage
        return newTodo;               // Give back the todo
    }

    /**
     * Method 2: deleteTodo() - Removing a Todo
     * @param {number} id - The ID of the todo to delete
     */
    deleteTodo(id) {
        // Keep all todos EXCEPT the one with this id
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.saveToStorage();         // Save the updated list
    }

    /**
     * Method 3: toggleTodo() - Mark Complete/Incomplete
     * @param {number} id - The ID of the todo to toggle
     */
    toggleTodo(id) {
        this.todos = this.todos.map(todo => {
            // If this is the todo we want to toggle
            if (todo.id === id) {
                // Create NEW object with all properties from original
                return {
                    ...todo,
                    completed: !todo.completed,    // Flip the completed status
                    updatedAt: Date.now()          // Update timestamp
                };
            }
            // If it's not the one we want, keep it unchanged
            return todo;
        });
        this.saveToStorage();
    }

    /**
     * Method 4: editTodo() - Change Todo Text
     * @param {number} id - The ID of the todo to edit
     * @param {string} newTitle - The new text for the todo
     */
    editTodo(id, newTitle) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    title: newTitle,               // Update the text
                    updatedAt: Date.now()          // Update timestamp
                };
            }
            return todo;
        });
        this.saveToStorage();
    }

    /**
     * Method 5: getFilteredTodos() - Show Only Certain Todos
     * @param {string} filterType - The filter to apply (all, active, completed)
     * @returns {Array} - Filtered array of todos
     */
    getFilteredTodos(filterType) {
        switch(filterType) {
            case FilterStatus.ACTIVE:
                // Return only incomplete todos
                return this.todos.filter(todo => !todo.completed);
            
            case FilterStatus.COMPLETED:
                // Return only complete todos
                return this.todos.filter(todo => todo.completed);
            
            case FilterStatus.ALL:
            default:
                // Return all todos
                return this.todos;
        }
    }

    /**
     * Method 6: getStats() - Count Todos
     * @returns {Object} - Object with counts of total, active, completed
     */
    getStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(todo => todo.completed).length;
        const active = total - completed;

        return { total, active, completed };
    }

    /**
     * Method 7: saveToStorage() - Save to Browser Memory
     * localStorage can only store TEXT, so we convert to JSON
     */
    saveToStorage() {
        const todosJSON = JSON.stringify(this.todos);  // Convert to text
        localStorage.setItem('todos', todosJSON);       // Save in browser storage
    }

    /**
     * Method 8: loadFromStorage() - Load from Browser Memory
     * Retrieves previously saved todos from localStorage
     */
    loadFromStorage() {
        const todosJSON = localStorage.getItem('todos');  // Get saved JSON text

        if (todosJSON) {
            try {
                this.todos = JSON.parse(todosJSON);      // Convert back to JavaScript objects
            } catch (error) {
                console.error('Error loading todos:', error);
                this.todos = [];                         // Start fresh if parsing fails
            }
        }
    }

    /**
     * Method 9: clearCompleted() - Delete All Completed Todos
     */
    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
        this.saveToStorage();
    }
}
