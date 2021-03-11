import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { loadGameDetails } from '../redux/actions/gameActions';
import { resizeImage } from '../utils';
import { popup } from '../animations';

const Game = ({ name, released, id, image }) => {
  const dispatch = useDispatch();

  //const { isLoading: gamesLoading } = useSelector((state) => state.game, shallowEqual);

  const loadGameDetailsHandler = () => {
    // Hide the main scrollbar when we open modal
    document.body.style.overflow = 'hidden';
    dispatch(loadGameDetails(id));
  };

  return (
    <StyledGame
      variants={popup}
      initial='hidden'
      animate='show'
      layoutId={id}
      onClick={loadGameDetailsHandler}
    >
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={resizeImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden; // hides images overflowing over modal borders
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    //padding-top: 1.5rem;
    //padding-bottom: 2rem;
  }
`;

export default Game;
