import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            state.categories.push(action.payload);
        },
        editCategory: (state, action) => {
            const { id, ...category } = action.payload;
            const existingCategory = state.categories.find(category => category.id === id);
            if (existingCategory) {
                Object.assign(existingCategory, category);
            }
        },
        deleteCategory: (state, action) => {
            state.categories = state.categories.filter(category => category.id !== action.payload);
        },
    },
});

export const { addCategory, editCategory, deleteCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;