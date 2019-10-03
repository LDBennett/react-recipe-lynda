import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';
import Header from './Header';
import NotFound from './NotFound';

const App = () => (
  <main>
    <BrowserRouter>
      <Header />

      <Switch>
        <Redirect from="/home" to="/"/>
        <Route exact path="/" component={Home}/>
        <Route path="/favorites" component={Favorites}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  </main>

);

export default App;
