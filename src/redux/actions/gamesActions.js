import axios from 'axios';
import { FETCH_GAMES } from '../types/games';
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from '../../api';

export const loadGames = () => async (dispatch) => {
  try {
    const popularGamesData = await axios.get(popularGamesUrl());
    const upcomingGamesData = await axios.get(upcomingGamesUrl());
    const newGamesData = await axios.get(newGamesUrl());

    dispatch({
      type: FETCH_GAMES,
      payload: {
        popular: popularGamesData.data.results,
        upcoming: upcomingGamesData.data.results,
        newGames: newGamesData.data.results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
