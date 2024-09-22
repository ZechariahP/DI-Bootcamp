import { Recipe } from '../types/types';

const API_URL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=10';

export const fetchRecipes = async (): Promise<Recipe[]> => {
  const response = await fetch(API_URL, {
    headers: {
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': 'efdb49bc1amshce946bcdffcbae3p13da85jsn099f2670d519',
        },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }

  const data = await response.json();
  return data.recipes;
};