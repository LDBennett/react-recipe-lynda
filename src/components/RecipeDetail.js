import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const RecipeDetail = props => {
  if (!props.recipe) {
    return (
      <p
        style={props.style}
        className={classNames('h3 p2 bg-white italic center', props.className)}
      >
        Please Select A Recipe
      </p>
    );
  }

  return (
    <div
      style={props.style}
      className={classNames('p2 bg-white', props.className)}
    >
      <h2 className="h2">{props.recipe.name}</h2>
      <img className="fit" src={props.recipe.image} alt="" />
      <div>
        <p><span>{props.recipe.category}</span></p>
        <p><span>{props.recipe.calories}</span></p>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {props.recipe.ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <Link to={`/recipe/${props.recipe.id}`}>See more</Link>
      <h3>Steps</h3>
      <ol>
        {props.recipe.steps.map(step => (
          <li key={step}>{step}</li>
        ))}
        <li></li>
      </ol>
    </div>
  );
};

export default RecipeDetail;
