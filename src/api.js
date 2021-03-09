const BASE_URL = 'https://api.rawg.io/api/';

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) return `0${month}`;
  else return month;
};

const getCurrentDay = () => {
  const day = new Date().getDay();
  if (day < 10) return `0${day}`;
  else return day;
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const POPULAR_GAMES = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const UPCOMING_GAMES = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const NEW_GAMES = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${BASE_URL}${POPULAR_GAMES}`;
export const upcomingGamesUrl = () => `${BASE_URL}${UPCOMING_GAMES}`;
export const newGamesUrl = () => `${BASE_URL}${NEW_GAMES}`;

export const gameDetailsUrl = (game_id) => `${BASE_URL}games/${game_id}`;
export const gameScreenshotsUrl = (game_id) => `${BASE_URL}games/${game_id}/screenshots`;
export const searchGameUrl = (game_name) => `${BASE_URL}games?search=${game_name}&page_size=9`;
