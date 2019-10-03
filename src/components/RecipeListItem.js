import React from 'react';

const RecipeListItem = ({recipe,favorited, onClick, onFavorited}) => (
  <li
    className="py2 border-bottom border-bottom-dashed pointer"
    key={recipe.id}
    onClick={() => onClick(recipe.id)}
  >
    <span
      className="mr1"
      onClick={e => {
        e.stopPropagation();
        onFavorited(recipe.id);
      }

      }
      role="img"
      aria-label="favorite"
    >
      {favorited ? <i className="fas fa-check"></i> : <i className="fas fa-square-full"></i>}

    </span>
    <span>{recipe.name}</span>
    <span>{recipe.category}</span>
  </li>

);

export default RecipeListItem;
