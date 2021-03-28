import React from 'react';
import { createStore } from 'redux';
import { Provider, thunk } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { render, fireEvent, waitFor, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Game from '../components/Game';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

afterEach(cleanup);

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOADING_GAME_DETAILS': {
      return { ...state, isLoading: true };
    }
    default:
      return { ...state };
  }
};

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        <Router>{component}</Router>
      </Provider>
    ),
  };
};

it('renders with redux and component has props', () => {
  const { debug, getByTestId } = renderWithRedux(
    <Game name={'Call of Duty'} released={'2003'} id={'1234'} image={null} />
  );
  //debug()
  expect(document.querySelector('a').getAttribute('href')).toBe('/game/1234');
  expect(getByTestId('styled-game')).toBeTruthy();
  expect(getByTestId('game-name')).toBeTruthy();
  expect(getByTestId('game-name')).toHaveTextContent('Call of Duty');
  expect(getByTestId('game-released')).toHaveTextContent('2003');
  expect(getByTestId('game-image')).toHaveAttribute('alt');
});
