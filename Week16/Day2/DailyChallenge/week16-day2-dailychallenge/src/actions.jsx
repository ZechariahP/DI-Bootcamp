/* Defining Actions And Reducers
2. Action Definitions:

Define action types for adding, editing, and deleting tasks for specific days.
Create action creators that handle these operations, considering day identifiers and task details. */

export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const addTask = (day, task) => {
    return {
        type: ADD_TASK,
        payload: {
        day,
        task,
        },
    };
    };

export const editTask = (day, index, task) => {
    return {
        type: EDIT_TASK,
        payload: {
        day,
        index,
        task,
        },
    };
    }

export const deleteTask = (day, index) => {
    return {
        type: DELETE_TASK,
        payload: {
        day,
        index,
        },
    };
    }

