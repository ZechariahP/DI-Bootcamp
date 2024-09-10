import { createSelector } from '@reduxjs/toolkit';

export const selectTasksByCategory = createSelector(
    (state) => state.tasks.tasks,
    (_, categoryId) => categoryId,
    (tasks, categoryId) => {
        if (!categoryId) {
            return tasks;
        }
        return tasks.filter((task) => task.category === categoryId);
    }
);

export const selectCompletedTasks = createSelector(
    (state) => state.tasks.tasks,
    (tasks) => tasks.filter((task) => task.completed).length
);

export const selectCategoryById = createSelector(
    (state) => state.categories.categories,
    (_, categoryId) => categoryId,
    (categories, categoryId) => categories.find((category) => category.id === categoryId)
);

