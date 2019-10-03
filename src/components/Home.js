import React from 'react';
import RecipeList from './RecipeList.js';
import RecipeDetail from './RecipeDetail.js';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRecipe: null,
    };

    this.onRecipeClick = this.onRecipeClick.bind(this);
  }

  onRecipeClick = id => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        this.setState({ currentRecipe: recipe });
      });
  };

  render() {
    const { currentRecipe } = this.state;
    const { recipes, favorites } = this.props.state;
    const { toggleFavorite }  = this.props;

    return (
      <div>
        <main className="px4 flex">
          <div style={{ flex: 3 }}>
            <h2 className="h2">Recipes</h2>
            <RecipeList
              recipes={recipes}
              favorites={favorites}
              onClick={this.onRecipeClick}
              onFavorited= {toggleFavorite}
            />
          </div>
          <RecipeDetail
            style={{ flex: 5 }}
            className="ml4"
            recipe={currentRecipe}
          />
        </main>
      </div>
    );
  }
}

export default Home;
