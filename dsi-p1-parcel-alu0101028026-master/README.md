# dsi-p1-parcel-alu0101028026

Primero clonamos nuestro directorio de trabajo con el link de github en nuestra máquina que ya estará inciciada con git:
```
git clone git@github.com:ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0101028026.git
```

## Entorno de desarrollo

Para crear el entorno de desarrollo debemos tener una estructura similar a la siguiente:

![image](https://user-images.githubusercontent.com/43814161/77375561-c60bad80-6d65-11ea-91c7-9cddd35507ae.png)

La carpeta src contiene las carpetas de assets (archivos multimedia), js (ficeros de código javascript), css (contiene ficheros de código css) y fuera en src/ ponemos nuestros ficheros de html.

Luego ejecutamos: 
```
npm init
```
Con este comando nos crea nuestros ficeros de packaje.json donde se irán guardando nuestras dependencias que vayamos instalando con ``npm``.


## Parcel

El primer paso es que instalamos [Parcel](https://en.parceljs.org/getting_started.html).
Luego ejecutamos:
```
parcel <fichero o ruta de fichero>
```

Al ejecutarlo vemos que nos ofrece el link que tiene por defecto que el de abrir nuestra página en http://localhost:1234 .

![image](https://user-images.githubusercontent.com/43814161/77375595-e2a7e580-6d65-11ea-8aea-0b2a3fc27c78.png)

Si se desea abrir la página en un host especificado y un puerto distinto al ofrecido por defecto, además del comando, ponemos `` --host <dir IP>`` para especificar el host y `` -p <número de puerto> `` para especificar el puerto como se demuestra en la siguiente imagen:

![image](https://user-images.githubusercontent.com/43814161/77375654-0e2ad000-6d66-11ea-9714-b33f400db15c.png)


## Eslint and Prettier

A continuación instalamos [ESlint](https://eslint.org/docs/user-guide/getting-started) y [Prettier](https://prettier.io/) siguiendo los pasos en las páginas y creando los ficheros que se indican (.eslinttrc.js). 

Para prettier añadimos la siguiente línea en el package.json:


![image](https://user-images.githubusercontent.com/43814161/77379924-d164d600-6d71-11ea-9533-4f1d9b6a5545.png)

Podemos probar prettier, como se indica en la página, intentado ejecutarlo contra un fichero:

![image](https://user-images.githubusercontent.com/43814161/77375778-6a8def80-6d66-11ea-9cf8-fec11fb1ed6d.png)

## gh-pages

Finalmente instalamos e utilizamos [gh-pages](https://github.com/meandavejustice/gh-pages-deploy) para crear una rama con el build de la página aparte.

En nuestro fichero package.json podemos ver que tenemos la opción de **build** que hace hace un build para todas los ficheros html que encuentra en ella. 
```
npm run build
```

![image](https://user-images.githubusercontent.com/43814161/77811166-9a076980-7090-11ea-8c8f-f1dca3493ebc.png)

y luego el comando para realizar el **deploy** :

![image](https://user-images.githubusercontent.com/43814161/77811192-c4592700-7090-11ea-841e-31bdffb51bd7.png)
  
 Esto es como se debe parecer el fichero package.json:
 
 ![image](https://user-images.githubusercontent.com/43814161/77811246-07b39580-7091-11ea-82fe-6134ea303210.png)
 
 Cada vez que se agrega un nuevo fichero html se debe hacer un build y luego el deploy para que sea publicado y aparezca en la rama gh-pages.

# Retos

## Vinyl

Para que se despliegue el dico de vinilo se dejó un enlace en el repositorio de github que apunta a la rama gh-pages. Por defecto demuestra el contenifo de fichero index.html: 

![image](https://user-images.githubusercontent.com/43814161/77811329-81e41a00-7091-11ea-9ddf-79f81d8e5838.png)

Para el ver el dico de vinilo se puede poner el nombre del fichero **vinyl.html** (gh-pages lo contiene también) y se mostrará el disco de vinilo:

![image](https://user-images.githubusercontent.com/43814161/77811385-bbb52080-7091-11ea-8132-d23a33d3dfce.png)


## Assets con Parcel 

### HTML

Se admite agregar enlaces a archivos que Parcel puede compilar (por ejemplo, JavaScript, TypeScript, SCSS, etc.) en HTML. Parcel procesará automáticamente el archivo y actualizará el enlace para que apunte al activo compilado.

```
<link rel="stylesheet" href="./my-styles/style.scss">
```
### Javascript
 El tipo de archivo más tradicional para los paquetes web es JavaScript. Parcel admite la sintaxis del módulo CommonJS y ES6 para importar archivos. También admite la sintaxis dinámica de la función import () para cargar módulos de forma asincrónica.Las importaciones dinámicas también pueden importar módulos desde URL.
 
 ![image](https://user-images.githubusercontent.com/43814161/77811751-73e3c880-7094-11ea-9405-cfc82a19c827.png)

También puede importar activos que no sean JavaScript desde un archivo JavaScript, p. CSS, HTML o incluso un archivo de imagen. Estas son algunas formas para realizarlo:

![image](https://user-images.githubusercontent.com/43814161/77811791-c91fda00-7094-11ea-9303-6b1106cdaf80.png)


### CSS

Los assets CSS se pueden importar desde un archivo JavaScript o HTML:

![image](https://user-images.githubusercontent.com/43814161/77811828-0dab7580-7095-11ea-9aea-55ec80afaa37.png)

Los activos CSS pueden contener dependencias a las que hace referencia la sintaxis @import `` @import './other.css'; ``, así como referencias a imágenes, fuentes, etc. a través de la función url () `` url('./images/background.png');``.




 
