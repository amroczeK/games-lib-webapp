import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { loadGames } from '../redux/actions/gamesActions';
import Game from '../components/Game';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
  const dispatch = useDispatch();
  const { popular, upcoming, newGames } = useSelector((state) => state.games, shallowEqual);

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming &&
          upcoming.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
            />
          ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular &&
          popular.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
            />
          ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames &&
          newGames.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
            />
          ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem; // 5 top and bottom, 0 left and right
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  // Responsive iamge resizing 'css-tricks.com'
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); // min 500, max fit rest of screen
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
