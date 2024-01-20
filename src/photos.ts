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
    
    
]

// const unsplashPhotos = [
//   { id: "8gVv6nxq6gY", width: 1080, height: 800 },
//   { id: "Dhmn6ete6g8", width: 1080, height: 1620 },
//   { id: "RkBTPqPEGDo", width: 1080, height: 720 },
//   { id: "Yizrl9N_eDA", width: 1080, height: 721 },
//   { id: "KG3TyFi0iTU", width: 1080, height: 1620 },
//   { id: "Jztmx9yqjBw", width: 1080, height: 607 },
//   { id: "-heLWtuAN3c", width: 1080, height: 608 },
//   { id: "xOigCUcFdA8", width: 1080, height: 720 },
//   { id: "1azAjl8FTnU", width: 1080, height: 1549 },
//   { id: "ALrCdq-ui_Q", width: 1080, height: 720 },
//   { id: "twukN12EN7c", width: 1080, height: 694 },
//   { id: "9UjEyzA6pP4", width: 1080, height: 1620 },
//   { id: "sEXGgun3ZiE", width: 1080, height: 720 },
//   { id: "S-cdwrx-YuQ", width: 1080, height: 1440 },
//   { id: "q-motCAvPBM", width: 1080, height: 1620 },
//   { id: "Xn4L310ztMU", width: 1080, height: 810 },
//   { id: "iMchCC-3_fE", width: 1080, height: 610 },
//   { id: "X48pUOPKf7A", width: 1080, height: 160 },
//   { id: "GbLS6YVXj0U", width: 1080, height: 810 },
//   { id: "9CRd1J1rEOM", width: 1080, height: 720 },
//   { id: "xKhtkhc9HbQ", width: 1080, height: 1440 },
// ];

// const photos = unsplashPhotos.map((photo) => ({
//   src: unsplashLink(photo.id, photo.width, photo.height),
//   width: photo.width,
//   height: photo.height,
//   srcSet: breakpoints.map((breakpoint) => {
//     const height = Math.round((photo.height / photo.width) * breakpoint);
//     return {
//       src: unsplashLink(photo.id, breakpoint, height),
//       width: breakpoint,
//       height,
//     };
//   }),
// }));

const photos = unsplashPhotos.map((photo) => ({
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
