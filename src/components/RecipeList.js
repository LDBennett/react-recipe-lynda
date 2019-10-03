import React from 'react';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({style, favorites, recipes, ...props}) => (
  <ul style={style} className="list-reset">
    {recipes.map(recipe => (
      <RecipeListItem
        recipe={recipe}
        favorited={favorites.includes(recipe.id)}
        key={recipe.id}
        {...props}
      />
    ))}
  </ul>
);

export default RecipeList;
