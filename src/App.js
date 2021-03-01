import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from './redux/actions/gamesActions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div>
      <h1>HI</h1>
    </div>
  );
};

export default App;
