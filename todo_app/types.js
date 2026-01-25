// 📋 FILE 1: types.js - The Blueprint
// This file defines the rules for what objects should look like

const FilterStatus = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
};

/**
 * @typedef {Object} Todo
 * @property {number} id - Unique identifier using timestamp
 * @property {string} title - The todo text
 * @property {boolean} completed - Whether it's marked as complete
 * @property {number} createdAt - When it was created
 * @property {number} updatedAt - When it was last modified
 * 
 * Example:
 * {
 *   id: 1706028390123,
 *   title: "Learn JavaScript",
 *   completed: false,
 *   createdAt: 1706028390123,
 *   updatedAt: 1706028390123
 * }
 */

/**
 * Project Structure:
 * ├── index.html (The page structure)
 * ├── styles.css (The appearance)
 * ├── types.js (The rules - YOU ARE HERE)
 * ├── todoManager.js (The logic - TodoApp class)
 * └── app.js (The connector - event handlers)
 */
