const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

// const unsplashLink = (id: string, width: number, height: number) =>
//   `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashLink = (id: string) =>
  `https://raw.githubusercontent.com/aavendan/album/main/src/assets/imagenes/${id}.jpg`;

const unsplashPhotos = [
    { id: "photo4", width: 720, height: 540 },
    { id: "photo9", width: 787, height: 1600 },
    { id: "photo12", width: 720, height: 559 },
    { id: "photo10", width: 787, height: 1600 },
    { id: "photo11", width: 1280, height: 720 },
    { id: "photo5", width: 1243, height: 1223 },
    { id: "photo6", width: 720, height: 960 },
    { id: "photo7", width: 960, height: 720 },
    { id: "photo8", width: 473, height: 593 },
    { id: "photo1", width: 1152, height: 864 },
    { id: "photo2", width: 1280, height: 720 },
    { id: "photo3", width: 665, height: 540 },
    { id: "photo13", width: 1290, height: 961 },
    { id: "photo14", width: 1599, height: 899 },
    
]

const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const photos = shuffle(unsplashPhotos).map((photo) => ({
  src: unsplashLink(photo.id),
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: unsplashLink(photo.id),
      width: breakpoint,
      height,
    };
  }),
}));

export default photos;
