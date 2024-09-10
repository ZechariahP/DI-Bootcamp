import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategoryById } from '../state/selectors';
import { addCategory, editCategory, deleteCategory } from '../state/categoriesSlice';

const CategorySelector = ({ categoryId, onSelect }) => {
    const category = useSelector((state) => selectCategoryById(state, categoryId));
    const dispatch = useDispatch();
    const [newCategoryTitle, setNewCategoryTitle] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    const handleSelect = () => {
        setSelectedCategoryId(categoryId);
        onSelect();
    };

    const handleAddCategory = (e) => {
        e.preventDefault(); // Prevent form submission
        dispatch(addCategory(newCategoryTitle));
        setNewCategoryTitle('');
        
    };
    

    const handleEditCategory = () => {
        dispatch(editCategory(category));
    };

    const handleDeleteCategory = () => {
        dispatch(deleteCategory(category.id));
    };

    return (
        <div>
            {category && (
                <>
                    <h2>Category: {category.title}</h2>
                    <button onClick={handleSelect}>Select</button>
                    <button onClick={handleEditCategory}>Edit Category</button>
                    <button onClick={handleDeleteCategory}>Delete Category</button>
                </>
            )}
            <div>
                <input
                    type="text"
                    value={newCategoryTitle}
                    onChange={(e) => setNewCategoryTitle(e.target.value)}
                />
                <button onClick={handleAddCategory}>Add Category</button>
            </div>

        </div>
    );
};

export default CategorySelector;



