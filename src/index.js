const resizeImageApi = require('./ResizeImage');

const options = {
  size: [400, 491, 516, 665],
  ext: ['webp', 'png'],
  multi: [1, 2, 3]
}

const file = {
  fileName: 'Avtolider.png',
  imagePath: 'C:\\Users\\mic\\code\\my\\nodejs\\src\\images',
  pathForSaveImage: 'C:\\Users\\mic\\code\\my\\nodejs\\src\\images\\resImages'
}

// const resize = new resizeImageApi(options, file);

console.log(resizeImageApi);
// resize.makeResize()
