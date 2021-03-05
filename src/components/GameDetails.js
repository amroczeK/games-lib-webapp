import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import LinearProgress from "@material-ui/core/LinearProgress";

const GameDetails = () => {
  const history = useHistory();
  const { isLoading } = useSelector((state) => state.game, shallowEqual);
  const { name, rating, platforms, background_image, description_raw } = useSelector((state) => state.game.details, shallowEqual);
  const screenshots = useSelector((state) => state.game.screenshots);

  const closeGameDetailsHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  return (
    <>
      {!isLoading ? (
        <CardShadow className="shadow" onClick={closeGameDetailsHandler}>
          {/* {screenshots && name && rating && platforms && background_image && ( */}
          <Details>
            <DetailsContainer>
              <Stats>
                <div className="rating">
                  <h3>{name}</h3>
                  <p>Rating: {rating}</p>
                </div>
                <Info>
                  <h4>Platforms</h4>
                  <Platforms className="platforms">
                    {platforms?.map((data) => (
                      <h5 key={data.platform.id}>{data.platform.name}</h5>
                    ))}
                  </Platforms>
                </Info>
              </Stats>
              <Media>
                <img src={background_image} alt="game-bg-img" />
              </Media>
              <Description>
                <p>{description_raw}</p>
              </Description>
              <Gallery>
                {screenshots?.map((screenshot) => (
                  <img src={screenshot.image} key={screenshot.id} alt="game" />
                ))}
              </Gallery>
            </DetailsContainer>
          </Details>
          {/* )} */}
        </CardShadow>
      ) : (
        <CardShadow className="shadow">
          <Details>
            <DetailsContainer>
              <LinearProgress color="secondary" />
            </DetailsContainer>
          </Details>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;

const Details = styled(motion.div)`
  top: 3rem;
  bottom: 3rem;
  width: 80%;
  border-radius: 1rem;
  background: white;
  position: fixed;
  left: 10%;
  color: black;
  overflow: hidden; // Hide the scroll bar corners
  img {
    width: 100%;
  }
`;

/**
 * This container puts the scroll bar into the modal
 */
const DetailsContainer = styled(motion.div)`
  position: absolute;
  padding: 2rem 4rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
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
