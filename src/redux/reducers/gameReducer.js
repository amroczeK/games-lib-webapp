const initialState = {
  details: {},
  screenshots: {},
  isLoading: false
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GAME_DETAILS': {
      return {
        ...state,
        details: action.payload.details,
        screenshots: action.payload.screenshots,
        isLoading: false
      };
    }
    case 'LOADING_GAME_DETAILS': {
      return {
        ...state,
        isLoading: true
      }
    }
    default:
      return { ...state };
  }
};
