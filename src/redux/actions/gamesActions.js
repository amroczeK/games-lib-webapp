import axios from 'axios';
import { FETCH_GAMES, LOADING_GAMES, SEARCHING_GAMES, FETCH_SEARCHED_GAMES } from '../types';
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl, searchGameUrl } from '../../api';

export const loadGames = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING_GAMES,
    });

    console.log(popularGamesUrl());
    const popularGames = await axios.get(popularGamesUrl());
    const upcomingGames = await axios.get(upcomingGamesUrl());
    const newGames = await axios.get(newGamesUrl());

    dispatch({
      type: FETCH_GAMES,
      payload: {
        popular: popularGames.data.results,
        upcoming: upcomingGames.data.results,
        newGames: newGames.data.results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearch = (game_name) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCHING_GAMES,
    });

    const searchGames = await axios.get(searchGameUrl(game_name));

    dispatch({
      type: FETCH_SEARCHED_GAMES,
      payload: {
        searched: searchGames.data.results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
