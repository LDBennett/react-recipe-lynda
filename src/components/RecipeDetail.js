import React from 'react'
import classNames from 'classnames'


const RecipeDetail = (props) =>{

  if (!props.recipe){
    return(
      <p style={props.style} className={classNames('h3 p2 bg-white italic center',props.className)}>Please Select A Recipe</p>
    )
  }

  return(
    <div style={props.style} className={classNames('p2 bg-white',props.className)}>

      <h2 className="h2">{props.recipe.name}</h2>
      <img className="fit" src={props.recipe.image} alt=""/>
      <div>
        <span>{props.recipe.category}</span>
        <span>{props.recipe.calories}</span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {props.recipe.ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
        <li></li>
      </ul>
      <h3>Steps</h3>
      <ul>
        {props.recipe.steps.map(step => (
          <li key={step}>{step}</li>
        ))}
        <li></li>
      </ul>
    </div>
  )

};

export default RecipeDetail;
