const initialState = {
  popular: [],
  upcoming: [],
  newGames: [],
  searched: [],
  isLoading: false,
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES": {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    }
    case "LOADING_GAMES": {
      return {
        ...state,
        isLoading: true,
      };
    }
    default:
      return { ...state };
  }
};
