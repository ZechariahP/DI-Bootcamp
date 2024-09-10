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
            const category = state.categories.find((category) => category.id === action.payload.id);
            if (category) {
                category.title = action.payload.title;
            }
        },
        deleteCategory: (state, action) => {
            state.categories = state.categories.filter((category) => category.id !== action.payload);
        },
    },
});

export const { addCategory, editCategory, deleteCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;