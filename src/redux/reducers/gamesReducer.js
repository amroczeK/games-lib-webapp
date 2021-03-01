const initialState = {
  popular: [],
  upcoming: [],
  newGames: [],
  searched: [],
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES': {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return { ...state };
  }
};
