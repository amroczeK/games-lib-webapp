import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";
import { loadGames } from "../redux/actions/gamesActions";
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";
import styled from "styled-components";
import { motion } from "framer-motion";
import LinearProgress from "@material-ui/core/LinearProgress";

const Home = () => {
  const dispatch = useDispatch();
  const { popular, upcoming, newGames, isLoading: gamesLoading } = useSelector((state) => state.games, shallowEqual);
  const { details } = useSelector((state) => state.game);
  const dummyGameCards = [1, 2, 3, 4];

  let { id } = useParams();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // Set homepage scroll bar to primary if modal not open
  useEffect(() => {
    id ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");
  }, [id]);

  return (
    <GameList>
      {id && details.id && <GameDetails />}
      <h2>Upcoming Games</h2>
      {!gamesLoading ? (
        <Games>{upcoming && upcoming.map((game) => <Game key={game.id} name={game.name} released={game.released} id={game.id} image={game.background_image} />)}</Games>
      ) : (
        <Games>
          {dummyGameCards.map(() => (
            //<Game>
            <LinearProgress color="secondary" />
            //</Game>
          ))}
        </Games>
      )}
      <h2>Popular Games</h2>
      {!gamesLoading ? (
        <Games>{popular && popular.map((game) => <Game key={game.id} name={game.name} released={game.released} id={game.id} image={game.background_image} />)}</Games>
      ) : (
        <Games>
          {dummyGameCards.map(() => (
            //<Game>
            <LinearProgress color="secondary" />
            //</Game>
          ))}
        </Games>
      )}
      <h2>New Games</h2>
      {!gamesLoading ? (
        <Games>{newGames && newGames.map((game) => <Game key={game.id} name={game.name} released={game.released} id={game.id} image={game.background_image} />)}</Games>
      ) : (
        <Games>
          {dummyGameCards.map(() => (
            //<Game>
            <LinearProgress color="secondary" />
            //</Game>
          ))}
        </Games>
      )}
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
