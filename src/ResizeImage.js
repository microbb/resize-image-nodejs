const sharp = require('sharp');
const path = require('path');


class ResizeImageApi {

    imagePath = path.resolve(__dirname, 'images')
	pathForSaveImage = path.resolve(__dirname, 'images', 'resImg')

	options = {
		size: [400, 491, 516, 665],
		ext: ['webp', 'png'],
		multi: [1, 2, 3]
	};


  async makeResize(fileName, extension) {
    try {
      this.options.size.forEach(el => {
        this.options.ext.forEach(ext => {
          if (ext === 'webp') {
            this.options['multi'].forEach(x => {
              sharp(path.join(this.imagePath, fileName + extension))
                .resize(el * x)
                .webp()
                .toFile(path.join(this.pathForSaveImage, `${fileName}[${el * x}]${x !== 1 ? `@${x}x` : ''}.webp`))
            })
          }
          if (ext === 'png') {
            this.options['multi'].forEach(x => {
              sharp(path.join(this.imagePath, fileName + extension))
                .resize(el * x)
                .png({
                  quality: 50,
                  compression: 6
                })
                .toFile(path.join(this.pathForSaveImage, `${fileName}[${el * x}]${x !== 1 ? `@${x}x` : ''}.png`));
            })
          }
        })
      })
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new ResizeImageApi()
