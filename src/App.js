import React from 'react';
import './App.css';

import Layout from './HOC/Layout/Layout';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <Layout>
        <Cards />
      </Layout>
    </div>
    // <ImgHoverOverlay imgSrc="https://m.media-amazon.com/images/M/MV5BMTczNTIyNTQ5Ml5BMl5BanBnXkFtZTgwOTI2ODk2NzM@._V1_.jpg"/>
  );
}

export default App;
