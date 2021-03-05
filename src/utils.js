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
