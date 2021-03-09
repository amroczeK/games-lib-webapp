import React from 'react';
import Home from './pages/Home';
import Nav from './components/Nav';
import GlobalStyles from './components/GlobalStyles';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      {/**
       * Route allows /game/:id to render on the home component
       */}
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
};

export default App;
