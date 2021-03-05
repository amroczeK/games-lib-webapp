import axios from "axios";
import { FETCH_GAMES, LOADING_GAMES } from "../types";
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from "../../api";

export const loadGames = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING_GAMES,
    });

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
