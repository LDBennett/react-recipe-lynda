import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';
import Recipe from './Recipe';
import Header from './Header';
import NotFound from './NotFound';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
      favorites: [],
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(recipes => {
        this.setState({ recipes });
      });
  }

  toggleFavorite = id => {
    console.log(id);
    this.setState( ( {favorites, ...state} )  => {

      const idx = favorites.indexOf(id);

      if( idx !== -1){
        console.log(favorites);
        return {...state, favorites: favorites.filter( f => f !== id) }
      }

      return { ...state, favorites: [...favorites, id] }
    });
  }

  render(){
    return(
      <main>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect from="/home" to="/"/>
            <Route
              exact
              path="/"
              render={() => (
                <Home state={this.state} toggleFavorite={this.toggleFavorite}/>
              )}
            />

            <Route
              path="/favorites"
              render={() => (
                <Favorites state={this.state} toggleFavorite={this.toggleFavorite}/>
              )}
            />
            <Route
              path="/recipe/:id"
              component={Recipe}
            />
            
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </main>
    )
  }
}


export default App;
