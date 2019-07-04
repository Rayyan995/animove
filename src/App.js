import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Layout from './HOC/Layout/Layout';
import Cards from './components/Cards/Cards';
import AddMovie from './components/AddMovie/AddMovie';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Cards} />
        <Route path='/add-movie' exact component={AddMovie} />
      </Switch>
    </Layout>
  );
}

export default App;
