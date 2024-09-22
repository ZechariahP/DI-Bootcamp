import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import { fetchRecipesAsync } from '../features/dataSlice';
import { RootState } from '../store';
import '../App.css';

const DataFetcher: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { recipes, loading, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchRecipesAsync());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="fixed-title">Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} className="recipe-container">
            <h2 className="recipe-title">{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <div
              className="recipe-instructions"
              dangerouslySetInnerHTML={{ __html: recipe.instructions }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;