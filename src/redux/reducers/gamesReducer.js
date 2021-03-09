const initialState = {
  popular: [],
  upcoming: [],
  newGames: [],
  searched: [],
  searching: false,
  isLoading: false,
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES': {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    }
    case 'LOADING_GAMES': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'FETCH_SEARCHED_GAMES': {
      return {
        ...state,
        searched: action.payload.searched,
        searching: false,
      };
    }
    case 'SEARCHING_GAMES': {
      return {
        ...state,
        searching: true,
      };
    }
    case 'CLEAR_SEARCHED_GAMES': {
      return {
        ...state,
        searched: [],
      };
    }
    default:
      return { ...state };
  }
};
