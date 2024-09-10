import { useSelector } from 'react-redux';
import { selectTasksByCategory, selectCompletedTasks, selectCategoryById } from './selectors.js';

export const useTasksByCategory = categoryId => {
    return useSelector(state => selectTasksByCategory(state, categoryId));
};

export const useCompletedTasks = () => {
    return useSelector(selectCompletedTasks);
};

export const useCategoryById = categoryId => {
    return useSelector(state => selectCategoryById(state, categoryId));
};