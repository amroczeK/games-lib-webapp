import moment from 'moment';
const BASE_URL = 'https://api.rawg.io/api/';

const currentDate = `${moment().format('YYYY-MM-DD')}`;
const lastYear = `${moment().subtract(1, 'year').format('YYYY-MM-DD')}`;
const nextYear = `${moment().add(1, 'year').format('YYYY-MM-DD')}`;

const POPULAR_GAMES = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const UPCOMING_GAMES = `games?key=${process.env.REACT_APP_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const NEW_GAMES = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${BASE_URL}${POPULAR_GAMES}`;
export const upcomingGamesUrl = () => `${BASE_URL}${UPCOMING_GAMES}`;
export const newGamesUrl = () => `${BASE_URL}${NEW_GAMES}`;

export const gameDetailsUrl = (game_id) => `${BASE_URL}games/${game_id}`;
export const gameScreenshotsUrl = (game_id) => `${BASE_URL}games/${game_id}/screenshots`;
export const searchGameUrl = (game_name) => `${BASE_URL}games?search=${game_name}&page_size=9`;
