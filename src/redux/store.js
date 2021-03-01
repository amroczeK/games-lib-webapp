import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { gamesReducer } from '../redux/reducers/gamesReducer';
import { gameReducer } from '../redux/reducers/gameReducer';

const rootReducer = combineReducers({
  games: gamesReducer,
  game: gameReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
