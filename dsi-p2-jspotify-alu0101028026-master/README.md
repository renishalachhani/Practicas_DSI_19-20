# Renisha Lachhani Punjabi

## Proyecto Parcel

En este proyecto además de los ficheros que se crearon en la [Práctica 1](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0101028026) añadimos los ficheros asociados al reto de ``Howler.js`` .  

![image](https://user-images.githubusercontent.com/43814161/78251202-e9162a00-74e8-11ea-8ad2-d816538f96e0.png)

Antes de hacer cualquier push debemos añadir **dist**, **node_modules**, **.cache** y **build** al ``.gitignore`` para que no se suban al repositorio.


![image](https://user-images.githubusercontent.com/43814161/78251748-b3257580-74e9-11ea-8ea9-96c55b6048cf.png)

## Assets

En la carpeta ``assets`` añadimos dos carpetas ``music`` y ``images`` para poner nuestras imágenes y música (formato ``.mp3``) del proyecto.

![image](https://user-images.githubusercontent.com/43814161/78251962-026ba600-74ea-11ea-90e3-ccf62a73f5ff.png)

La música(cualquier canción) se puede descargar en este formato desde [mp3juices](https://www.mp3juices.cc/).

Las imágenes se pusieron en los ficheros ``.css`` utilizando ``url(ruta de la imágen)``. Se ha utilizado para las carátulas, los centros de los vinilos y el fondo de la pantalla.

![image](https://user-images.githubusercontent.com/43814161/78252392-ab1a0580-74ea-11ea-9e0f-4bd5259da0f7.png)

![image](https://user-images.githubusercontent.com/43814161/78252506-dbfa3a80-74ea-11ea-89d9-712bd753f46f.png)


## Código HTML y CSS

### HTML

![image](https://user-images.githubusercontent.com/43814161/78252746-3bf0e100-74eb-11ea-8971-efb13b2ded95.png)

Dentro del ``<head>`` ponemos el titulo, el link donde añadimos el fichero de ``.css`` y el srcipt donde añadimos el fichero ``.js``.

![image](https://user-images.githubusercontent.com/43814161/78252687-22e83000-74eb-11ea-8807-8a1cba17463e.png)

El código html es el que hemos utilizado que nos proporcionó en el nunciado de la pŕactica y se ha multiplicado 4 veces para poner 4 carátulas y vinilos. Añadimos 5 botones: recargar canción, unmute, mute, disminuir velocidad(queda hasta la velocidad normal, 1) y aumentar velocidad (aumenta velocidad, 3).

![image](https://user-images.githubusercontent.com/43814161/78253516-67c09680-74ec-11ea-866e-142f17f408a4.png)

Para los símbolos de los botones se han utilizado [unicódigos](https://www.w3schools.com/charsets/ref_utf_arrows.asp) de html. Ej: ``&#x1f507;``.

### CSS

En el fichero ``.css`` ponemos las características (colores, tamaños, imágenes, display, etc) de cada elemento utilizado en el fichero ``.html`` . 

Además del código ofrecido en el enunciado modificamos que el vinilo no solo salga de detrás de la carátula sino también gire 360°:

![image](https://user-images.githubusercontent.com/43814161/78254196-7491ba00-74ed-11ea-9703-934e5f44ee4b.png)

 En ``@keyframes circle`` ponemos los grados que debe girar (desde, hasta) y después en ``.open`` añadimos la característica de animación para acer girar al círculo infinitivamente tardando 5 segundos cada giro.

## Código JavaScript

Tenemos tres ficheros de javaScript: ``index.js``, ``Player.js``  y ``Song.js``.

En ``index.js`` importamos la música y lo guardamos en **audios** e importamos **Player**. Creamos un hash llamado **map**, creamos una variable **i** y lo iniciamos con el valor 1 e iteramos en audios con un **for** y guardamos en **map** una canción para cada ``.item-i``, i siendo el número del item y lo vamos aumentando en 1 cada iteración. Después de guardar todas las canciones en **map** creamos un nuevo **Player(map)**.

![image](https://user-images.githubusercontent.com/43814161/78255110-c9820000-74ee-11ea-95fc-c2bfba486a56.png)


En ``Player.js`` importamos **Song.js** y sufunción ``play_song``. Exportamos la clase **Player** donde le pasamos como parámetro en el constructor a **map**. Creamos variables donde guardamos elementos de html (.v{1..4}, .b{1..4}, .cov{1..4}, .n{1..4},...), cada uno asociado a los botones, vinilo y carátulas que luego pasamos a la clase **Song** con la canción.

Utilizamos **querySelector()** para elegir elegir el elemento de html que queremos utilizar ( en este caso carátula) y le ponemos un **addEventListner()** que llama al método de **play_song()** al hacer click sobre la carátula de la canción.

Se añade el **removeEventListener()** de desactivar la canción cuando se vuelve a hacer click sobre la carátula si está activado.

![image](https://user-images.githubusercontent.com/43814161/78256574-a1939c00-74f0-11ea-9192-0e4d7da14133.png)

En ``Song.js`` con los parámetros le pasamos, creamos un objeto **Audio()** para la canción, una variable para el resto de los parámetros y una variable booleana **on** que nos indicará si la canción está activada o desactivada.

![image](https://user-images.githubusercontent.com/43814161/78258433-27b0e200-74f3-11ea-81f5-3ebe3e0ac8d2.png)

En la función ``play_song()`` le pasamos el objeto **song** y si **song.on** es **true** pues con **classList.add()** hacemos que se añade esa clase y se ejecuta lo que hace que salga el vinilo y empieza a girar y luego ejecutamos los métos de la clase **Audio()**:
- play(): para reproducir la canción.
- pause(): pausar la canción y seguir desde ese punto.
- load(): para reprocir la canción desde el principio.
- muted : variable booleana que si está a **true** se silencia la canción y en **false** suena la canción.
- playbackRate: se le asigna el número para a velocidad a la que debe reproducir la canción, 1 es normal y hasta 3 va aunmentando velocidad.

Luego ponemos a **song.on** en **false** para que el método pueda leerlo y parar la canción cuando se vuelva a hacer click sobre la carátula.

```
export function play_song(song) {
    
    if (song.on === true) {
        var forward = 1;

      song.tag.classList.add('open');
      song.s.play();
      song.on = false;
      song.but.onclick = () => { 
              song.s.load();
              song.s.play();
        };
      song.m.onclick = () => { 
              song.s.muted = true;
              
              
        };
      song.n.onclick = () => { 
              song.s.muted = false;
        };
      song.bac.onclick = () => { 
              if(forward < 4){
                 forward++; }
              song.s.playbackRate = forward;
              
              
        };
      song.f.onclick = () => { 
              if(forward > 1){
                 forward--; }
              song.s.playbackRate = forward;
        };


      
    } else {
      song.tag.classList.remove('open');
      song.s.pause();
      song.on = true;
      song.but.onclick = () => {
              song.s.load();
              
        };
      
    }
  
}
```

## Funcionalidades Extra

Las funcionalidades extras que añadimos fueron:

- load(): para reprocir la canción desde el principio.
- muted : variable booleana que si está a **true** se silencia la canción y en **false** suena la canción.
- playbackRate: se le asigna el número para a velocidad a la que debe reproducir la canción, 1 es normal y hasta 3 va aunmentando velocidad.


## Howler.js

Utilizamos la página de github para ver el funcionamiento de [Hoeler.js](https://github.com/goldfire/howler.js).

A diferencia de ``Audio()`` en **Howl** ponemos el src del audio, y más elementos como autoplay, loop, volumen, etc. entre llaves.

![image](https://user-images.githubusercontent.com/43814161/78260056-6d6eaa00-74f5-11ea-9da0-fef1c833e3c2.png)

Ninguno de los dos es más difícil ni más fácil porque en **howl** también sólo podemos utilizar **src** pero a diferenci añadir más opciones de audio pues en de ésta forma se puede considerar mejor.

## Github Pages, Eslint y Prettier

Para publicarlo en Github pages, utilizar Eslint y Prettier hacemos los mismos pasos en la [Práctica 1](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0101028026) con lo siguiente en el ``package.json`` :

![image](https://user-images.githubusercontent.com/43814161/78258781-a0b03980-74f3-11ea-952c-ae2fe7ec3506.png)

El link de la página está en el repositorio que por defecto nos lleva a la página de ``index.html``:

![image](https://user-images.githubusercontent.com/43814161/78259327-714dfc80-74f4-11ea-8afb-0f1a83f2342c.png)

Para ver el de ``howl.html`` ponemos **howl.html** al final del enlace:

![image](https://user-images.githubusercontent.com/43814161/78259521-ba9e4c00-74f4-11ea-973b-acc13bcc2f37.png)



