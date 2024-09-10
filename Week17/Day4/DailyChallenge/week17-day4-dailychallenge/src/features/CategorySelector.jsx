import React, { useState } from 'react';
import { addCategory, editCategory, deleteCategory } from './tasks/state/categoriesSlice';
import { useDispatch, useSelector } from 'react-redux';

function CategorySelector({ category }) {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories); // Get the categories from Redux store
    const [newCategory, setNewCategory] = useState(''); // State to hold the new category input
    const [editMode, setEditMode] = useState(false); // State to track if edit mode is enabled

    const handleAddCategory = () => {
        if (editMode) {
            dispatch(editCategory(category.id, newCategory)); // Dispatch the action to edit the category
            setEditMode(false); // Disable edit mode
        } else {
            dispatch(addCategory(newCategory)); // Dispatch the action to add the new category
        }
        setNewCategory(''); // Clear the new category input
    };

    const handleEditCategory = () => {
        setEditMode(true); // Enable edit mode
        setNewCategory(category.name); // Set the new category input to the current category name
    };

    const handleDeleteCategory = () => {
        dispatch(deleteCategory(category.id)); // Dispatch the action to delete the category
    };

    return (
        <div>
            <h2>Category</h2>
            <span>
                <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
            </span>
            <button onClick={handleAddCategory}>{editMode ? 'Save Category' : 'Add Category'}</button>
            {category && (
                <div>
                    <h3>Edit Category</h3>
                    <select value={category.id} onChange={handleEditCategory}>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                    <button onClick={handleDeleteCategory}>Delete Category</button>
                </div>
            )}
        </div>
    );
}

export default CategorySelector;