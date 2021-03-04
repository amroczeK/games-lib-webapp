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
        <Stats>
          <div className='rating'>
            <h3>{name}</h3>
            <p>Rating: {rating}</p>
          </div>
          <Info>
            <h4>Platforms</h4>
            <Platforms className='platforms'>
              {platforms?.map((data) => (
                <h5 key={data.platform.id}>{data.platform.name}</h5>
              ))}
            </Platforms>
          </Info>
        </Stats>
        <Media>
          <img src={background_image} alt='game-bg-img' />
        </Media>
        <Description>
          <p>{description_raw}</p>
        </Description>
        <Gallery>
          {screenshots?.map((screenshot) => (
            <img src={screenshot.image} key={screenshot.id} alt='game' />
          ))}
        </Gallery>
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
  margin-top: 5rem;
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 4rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 2rem;
  img {
    width: 100%;
    // Remove lines below for full image
    //height: 60vh; // fixed height for all images
    //object-fit: cover; // stops the stretching of image due to height
  }
`;

const Gallery = styled(motion.div)`
  img {
    width: 100%;
    margin-bottom: 1.5rem;
    // Remove lines below for full image
    //height: 60vh; // fixed height for all images
    //object-fit: cover; // stops the stretching of image due to height
  }
`;

const Description = styled(motion.div)`
  margin: 3rem 0rem;
`;

export default GameDetails;
