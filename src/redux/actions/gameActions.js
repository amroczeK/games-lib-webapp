import axios from 'axios';
import { GET_GAME_DETAILS } from '../types';
import { gameDetailsUrl, gameScreenshotsUrl } from '../../api';

export const loadGameDetails = (id) => async (dispatch) => {
  try {
    const gameDetails = await axios.get(gameDetailsUrl(id));
    const gameScreenshots = await axios.get(gameScreenshotsUrl(id));

    dispatch({
      type: GET_GAME_DETAILS,
      payload: { details: gameDetails.data, screenshots: gameScreenshots.data.results },
    });
  } catch (error) {
    console.log(error);
  }
};
