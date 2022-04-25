const sharp = require('sharp');
const path = require('path');


class ResizeImageApi {

  options;
  fileInfo;

  constructor(options, fileInfo) {
    this.options = options;
    this.fileInfo = fileInfo;
  }


  async makeResize() {
    try {
      this.options.size.forEach(el => {
        this.options.ext.forEach(ext => {
          if (ext === 'webp') {
            this.options['multi'].forEach(x => {
              sharp(this.fileInfo['imagePath'], this.fileInfo['fileName'])
                .resize(el * x)
                .webp()
                .toFile(path.join(this.fileInfo['pathForSaveImage'], this.fileInfo['fileName']))
            })
          }
          if (ext === 'png') {
            this.options['multi'].forEach(x => {
              sharp(this.fileInfo['imagePath'], this.fileInfo['fileName'])
                .resize(el * x)
                .png({
                  quality: 50,
                  compression: 6
                })
                .toFile(path.join(this.fileInfo['pathForSaveImage'], this.fileInfo['fileName']));
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
