import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Layout from './HOC/Layout/Layout';
import Cards from './containers/Cards/Cards';
import AddMovie from './containers/AddMovie/AddMovie';
import ViewDetails from './components/ViewDetails/ViewDetails';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Cards} />
        <Route path='/add-movie' exact component={AddMovie} />
        <Route path='/user' exact component={ViewDetails} />
      </Switch>
    </Layout>
  );
}

export default App;
