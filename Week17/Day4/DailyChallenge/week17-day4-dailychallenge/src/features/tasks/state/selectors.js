import { createSelector } from '@reduxjs/toolkit';
import { addTask, editTask, deleteTask, updateTaskProgress } from './tasksSlice';
import { addCategory, editCategory, deleteCategory } from './categoriesSlice';

export const selectTasks = state => state.tasks.tasks;
export const selectCategories = state => state.categories.categories;
export const selectCategoryId = (_, props) => props?.categoryId;

export const selectTasksByCategory = createSelector(
    [selectTasks, selectCategoryId],
    (tasks, categoryId) => tasks.filter(task => task.categoryId === categoryId)
);

export const selectCompletedTasks = createSelector(
    [selectTasks],
    tasks => tasks.filter(task => task.completed).length
);

export const selectCategoryById = createSelector(
    [selectCategories, selectCategoryId],
    (categories, categoryId) => categories.find(category => category.id === categoryId)
);

export default {
    selectTasksByCategory,
    selectCompletedTasks,
    selectCategoryById,
};