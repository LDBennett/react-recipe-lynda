import React from 'react';
import Header from './Header.js'
import RecipeList from './RecipeList.js'
import RecipeDetail from './RecipeDetail.js'

const App = () => (
  <div>
    <Header/>
    <main style={{display:'flex'}}>
      <RecipeList style={{flex: 3}}/>
      <RecipeDetail style={{flex: 5}}/>
    </main>
  </div>
);


export default App;
