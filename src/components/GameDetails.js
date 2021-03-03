import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GameDetails = () => {
  const { name, rating, platforms, background_image, description_raw } = useSelector(
    (state) => state.game.details,
    shallowEqual
  );
  const screenshots = useSelector((state) => state.game.screenshots);

  return (
    <CardShadow>
      {/* {screenshots && name && rating && platforms && background_image && ( */}
      <Details>
        <div className='stats'>
          <div className='rating'>
            <h3>{name}</h3>
            <p>Rating: {rating}</p>
          </div>
          <div className='info'>
            <h3>Platforms</h3>
            <div className='platforms'>
              {platforms?.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className='media'>
          <img src={background_image} alt='game-bg-img' />
        </div>
        <div className='description'>
          <p>{description_raw}</p>
        </div>
        <div className='gallery'>
          {screenshots?.map((screenshot) => (
            <img src={screenshot.image} key={screenshot.id} alt='game' />
          ))}
        </div>
      </Details>
      {/* )} */}
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Details = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

export default GameDetails;
