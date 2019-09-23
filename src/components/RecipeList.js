import React from 'react';


const RecipeList = (props) =>(
  <header style={props.style}>
    <h2>Recipes</h2>
    <ul>
      <li>
        <span>Something Here</span>
        <span>Desert</span>
      </li>
      <li>
        <span>Something Else Here</span>
        <span>Entree</span>
      </li>
      <li>
        <span>Something Here 4</span>
        <span>Desert</span>
      </li>
    </ul>
  </header>
);

export default RecipeList
