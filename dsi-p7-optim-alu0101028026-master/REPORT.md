| ##  | Nombre del fichero | Formato | Prioridad | Tamaño inicial --> final | Herramienta         |
| --- | ------------------ | ------- | --------- | ------------------------ | ------------------- |
| 1   | `index.html`       | HTML    | HIGH  | `7.6KB` --> `7.47KB`     | `htmlnano` (parcel) |
| 2   |  `index.js`        |  JS       |  LOW         |`1.4KB` --> `1.34KB`  | `htmlnano` (parcel)                    |
| 3   |   `index.css`      |   CSS      |  HIGHEST         |`4.2KB` --> `4.12KB`                          |`htmlnano` (parcel)                     |
| 4   |   `ball.jpg`       |   JPEG      |LOW           |`2.5MB` --> `1.1MB`                          | `ImageOptim`                    |
| 5   |    `campus.png`       |  PNG       |LOW           |`149.71KB` --> `107KB`                          |`optiPNG`                     |
| 6   |`classroom.jpg`  |   JPEG      | HIGH          |`227.1KB` --> `192.7KB`                          |`ImageOptim`                       |
| 7   |`dark.jpg`        |  JPEG       |LOW           |`65.1KB` --> `51.7KB`                          |`ImageOptim`                       |
| 8   | `docker.svg`    | SVG Y XML        |LOW           |`5.08KB` --> `474KB`                          | `SVGO`                     |
| 9   |`do-more.jpg`    |   JPEG      |LOW           |`158.0KB` --> `135.0KB`                          |`ImageOptim`                       |
| 10  |`github.png`  |   PNG      | LOW          |`103.64KB` --> `72.8KB`                          |`optiPNG`                      |
| 11  |`js.svg`      |  SVG Y XML       |LOW           | `3.68KB` --> `0.857KB`                         | `SVGO`                    |
| 12  |`laptop.jpg`   |  JPEG       |LOW           |`128.1KB` --> `99.5KB`                          |`ImageOptim`                       |
| 13  |`optimization.svg`  |   SVG      | LOW          |`9.55KB` --> `1.6KB`                          |`SVGO`                     |
| 14  |`parcel.png`    |  PNG       |LOW           |`799.58KB` --> `433KB`                          |`optiPNG`                      |
| 15  |`postcss.svg`   |   SVG Y XML     | LOW          |`17.31KB` --> `17.26KB`                          |`SVGO`                     |
| 16  |`postureo.jpg`   |  JPEG       | LOW          |`67.7KB` --> `54.7KB`                          |`ImageOptim`                       |
| 17  |`reunion.jpg`    |  JPEG       | LOW          |`176.6KB` --> `153.4KB`                          |`ImageOptim`                       |
| 18  |`semicolon.jpg` |JPEG         | LOW          |`585.7KB` --> `243.1KB`                          |`ImageOptim`                       |
| 19  |`speakers.jpg`  |  JPEG       | LOW          |`3.0MB` --> `1.3MB`                          |`ImageOptim`                       |
| 20  |`speech.svg`    |    SVG Y XML    | LOW          |`5.71KB` --> `1.59KB`                          |`SVGO`                     |
| 21  |`thinking.jpg`    |  JPEG       | LOW          |`69.1KB` --> `64.2KB`                          |`ImageOptim`                       |
| 22  |`vuejs.svg`   |   SVG Y XML      | LOW          |`2.42KB` --> `0.31KB`                          |`SVGO`                     |
| 23  |`webcomponents.svg`  |  SVG Y XML      | LOW          |`1.212KB` --> `1.208KB`                          |`SVGO`                     |

Los archivos multimedia (audio / video):

| ##  | Nombre       | Formato - Codec (Video/Audio) | Duración | Prioridad | Tamaño inicial --> final   | Herramienta |
| --- | ------------ | ----------------------------- | -------- | --------- | -------------------------- | ----------- |
| 23  | `typing.mp4` | MP4 - h264/AVC1               | `20seg`  | LOW       | `13.8MB` --> `12.2MB` | `ffmpeg` |
| 24  |`dsi7.mkv`   |  Matroska Video  | `40seg`         | LOW          |`4.9MB` --> `1.5MB`                   |`ffmpeg`          |
| 25  |`dsi.mp3`  |  MP3                    |`50seg`          | LOW          |`807.5KB` --> `514KB`              |`ffmpeg`             |
| 25  |`havana.mpeg`   |MPEG      |`3.38min`          | LOW          |`5.3MB` --> `2.25MB`                       | `ffmpeg`            |


- Los ficheros que en la pestaña `Protocol` indiquen `chrome-extension` o `websocket` no se incluirán en la tabla anterior.
- Si lo ejecutas en local, el fichero `localhost` es realmente el `index.html`.
