import playstation from './images/playstation.svg';
import steam from './images/steam.svg';
import xbox from './images/xbox.svg';
import nintendo from './images/nintendo.svg';
import apple from './images/apple.svg';
import gamepad from './images/gamepad.svg';
import starEmpty from './images/star-empty.png';
import starFull from './images/star-full.png';

// Resize image paths because RAWG IO API's only return 4k images
// Reduce it to 1080p for quicker loading
export const resizeImage = (imagePath, size) => {
  if (imagePath) {
    const image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace('media/screenshots', `media/resize/${size}/-/screenshots`)
      : imagePath.replace('/media/games/', `/media/resize/${size}/-/games/`);
    return image;
  }
  return imagePath;
};

export const getPlatforms = (platform) => {
  switch (platform) {
    case 'PlayStation 4':
      return playstation;
    case 'Xbox One':
      return xbox;
    case 'PC':
      return steam;
    case 'Nintendo Switch':
      return nintendo;
    case 'iOS':
      return apple;
    default:
      return gamepad;
  }
};

export const getStars = (rating) => {
  const stars = [];
  const ratings = Math.floor(rating);
  for (let i = 1; i <= 5; i++) {
    if (i <= ratings) {
      stars.push(<img alt='star' key={i} src={starFull}></img>);
    } else {
      stars.push(<img alt='star' key={i} src={starEmpty}></img>);
    }
  }
  return stars;
};
