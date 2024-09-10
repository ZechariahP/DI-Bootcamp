import React, { useState, useEffect } from 'react';
import { addCategory, editCategory, deleteCategory } from './tasks/state/categoriesSlice';
import { useCategoryById } from './tasks/state/hooks';
import { useDispatch, useSelector } from 'react-redux';

function CategorySelector({ category }) {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);
    const [newCategory, setNewCategory] = useState('');
    const [editMode, setEditMode] = useState(false);

    const handleAddCategory = () => {
        if (editMode) {
            dispatch(editCategory(category.id, newCategory));
            setEditMode(false);
        } else {
            dispatch(addCategory(newCategory));
        }
        setNewCategory('');
    };

    const handleEditCategory = () => {
        setEditMode(true);
        setNewCategory(category.name);
    };

    const handleDeleteCategory = () => {
        dispatch(deleteCategory(category.id));
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