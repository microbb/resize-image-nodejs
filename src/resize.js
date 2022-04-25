const sharp = require('sharp');
const fs = require('fs');
const path = require('path');


const imagePath = path.resolve(__dirname, 'images', 'Avtolider.png');

const options = {
    size: [400, 491, 516, 665],
    extends: ['webp', 'png'],
    multiplications: [1, 2, 3]
};


(async function() {
    try {
        options.size.forEach(el => {
            options.extends.forEach(ext => {
                if (ext === 'webp') {
                    options.multiplications.forEach(x => {
                        sharp(imagePath)
                            .resize(el)
                            .webp()
                            .toFile(path.resolve(__dirname, 'images', 'resImages', `Avtolider[${el * x}]${x !== 1 ? `@${x}x` : ''}.webp`), (err) => {
                                if (err) console.log(err);
                                console.log(`Avtolider[${el * x}]${x !== 1 ? `@${x}x` : ''}.webp`)
                            })
                    })
                }
                if (ext === 'png') {
                    options.multiplications.forEach(x => {
                        sharp(imagePath)
                            .resize(el)
                            .png({
                                quality: 50,
                                compression: 6
                            })
                            .toFile(path.resolve(__dirname, 'images', 'resImages', `Avtolider[${el * x}]${x !== 1 ? `@${x}x` : ''}.png`), (err) => {
                                if (err) console.log(err);
                                console.log(`Avtolider[${el * x}]${x !== 1 ? `@${x}x` : ''}.png`)
                            })
                    })
                }
            })
        })
    } catch (e) {
        console.log(e)
    }
}
)()
