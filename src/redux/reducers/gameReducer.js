const initialState = {
  details: {},
  screenshots: {},
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GAME_DETAILS': {
      return {
        ...state,
        details: action.payload.details,
        screenshots: action.payload.screenshots
      };
    }
    default:
      return { ...state };
  }
};
