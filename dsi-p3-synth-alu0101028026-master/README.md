# Práctica 3: Game Dialogue Synth
# Renisha Lachhani Punjabi

## Proyecto Parcel

En este proyecto se creó una estructura similar al que se creó en la [Práctica 1](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0101028026).

![Screenshot from 2020-04-19 01-05-36](https://user-images.githubusercontent.com/43814161/79674529-e6e7e700-81db-11ea-8482-cfefa369557e.png)

Antes de hacer cualquier push debemos añadir dist, node_modules, .cache y build al .gitignore para que no se suban al repositorio.

![Screenshot from 2020-04-19 01-06-00](https://user-images.githubusercontent.com/43814161/79674557-27476500-81dc-11ea-8dfc-7c3c2974596d.png)

## Assets

En la carpeta assets añadimos una carpeta images para poner nuestras imágenes de los personajes del chat del proyecto.

![Screenshot from 2020-04-19 01-06-32](https://user-images.githubusercontent.com/43814161/79674598-991fae80-81dc-11ea-8484-5703877e70d5.png)

Añadimos nuestras imágenes en ``index.js`` importándolas par utilizarlos como parámetros para la clase ``Profile`` de la siguiente forma :

![Screenshot from 2020-04-19 01-07-25](https://user-images.githubusercontent.com/43814161/79674630-de43e080-81dc-11ea-9626-fc4849899ab4.png)


## Código HTML y CSS

### HTML


Dentro del ``<head>`` ponemos el titulo, el link donde añadimos el fichero de ``.css`` y el srcipt donde añadimos el fichero ``.js``.

![Screenshot from 2020-04-19 01-10-48](https://user-images.githubusercontent.com/43814161/79676384-a5583b80-81dd-11ea-84d8-1bcb12de3a97.png)

Nuestro código HTML no es tan largo, sólo tiene dos componentes: 
- un boton: que se utiliza para empezar el diálogo una vez que se hace click sobre él.
- un div: que contendrá el diálogo.

### CSS

Creamos un btotón y poneos sus características (colores, tamaños, imágenes, display, etc) en el fichero ``.css``:

![Screenshot from 2020-04-19 01-13-34](https://user-images.githubusercontent.com/43814161/79676395-b5701b00-81dd-11ea-9ef1-31737161194f.png)

Se trata de un botón en forma de círculo de color rosa con un triángulo dentro (símbolo de play) que tiene pulsos en forma de círculo y se ve de la siguiente forma:
![Screenshot from 2020-04-19 01-16-21](https://user-images.githubusercontent.com/43814161/79676413-d59fda00-81dd-11ea-86f1-5923e9d835df.png)


## Código JavaScript

Tenemos tres ficheros de javaScript: ``index.js``, ``Profile.js``  y ``Conversation.js``.

En ``index.js``, como vimos antes, importamos las clases **Profile** y **Conversation** y las imágenes para nuestros personajes. Creamos 4 objetos de la clase **Profile** que definen 4 personajes.

![Screenshot from 2020-04-19 01-07-53](https://user-images.githubusercontent.com/43814161/79701983-34765980-8299-11ea-9fc0-930547729548.png)

Un objeto de la clase **Conversation** que define la conversación de esos personajes y le pasamos como parámetro le **id** del **div** del diálogo en nuestro fichero html. 
Luego creamos un **addEventLitener()** para que cuando pilsamos en nuestro botón se desaparezca el botón y aparezca el diálogo. dentro llamamos los métodos de la clase **Conversation** para ejecutar los diálogos de tres formas: ``àddMessage``, ``wordToWord`` y ``etterToLetter``.

![Screenshot from 2020-04-19 01-09-25](https://user-images.githubusercontent.com/43814161/79702063-d72ed800-8299-11ea-8b0b-56dc52cf2bbe.png)


En ``Profile.js`` exportamos la clase **Profile** que obtiene como parámetros el nombre del personaje, su imágen y las características del diálogo:
- color
- lang
- rate
- pitch
- volume

![Screenshot from 2020-04-19 01-10-05](https://user-images.githubusercontent.com/43814161/79702152-95eaf800-829a-11ea-92fb-6300f5842ceb.png)

Estas características se entienden mejor y saber cómo utilizarlos con [SpeechSynthesisUtterance()](https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API#demo).

En ``Conversation.js`` exportamos la clase **Conversation** donde obtenemos el diálogo y declaramos tres métodos que mencionasmos antes para representar el diálogo de tres formas:
- addMessage: para leerlo como una línea entera.
- wordToWord: leer palabra por palabra.
- letterToLetter: leer letra por letra.

En cada método tenemos ``onstart``que es para que cuando empieze el mensaje haga lo que contenga dentro, que en caso es crear otros divs en el div del diálogo con el nombre, imágen y texto del diálogo. Luego el ``speak()`` se utiliza para la lectura del texto con voz que tiene por defecto y en forma del lenguaje que le asignamos en **lang**.

![Screenshot from 2020-04-19 01-11-39](https://user-images.githubusercontent.com/43814161/79702294-b9fb0900-829b-11ea-9b0a-caa79874e51c.png)

Los otros dos métodos utilizan el método de [``onboundary()``](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onboundary) para la lectura de las palabras y letras. Están en forma de comentario porque no funcionan correctamente en el navegador.

![Screenshot from 2020-04-19 01-12-18](https://user-images.githubusercontent.com/43814161/79702365-532a1f80-829c-11ea-9845-8f10075cc502.png)


## Github Pages, Eslint y Prettier

Para publicarlo en Github pages, utilizar Eslint y Prettier hacemos los mismos pasos en la [Práctica 1](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0101028026) con lo siguiente en el ``package.json`` :

![image](https://user-images.githubusercontent.com/43814161/79676529-10564200-81df-11ea-9d4a-209a86aa987e.png)

El link de la página está en el repositorio que por defecto nos lleva a la página de ``index.html``:

![Screenshot from 2020-04-19 01-17-37](https://user-images.githubusercontent.com/43814161/79676675-58c22f80-81e0-11ea-8cda-ce55b9f4cc5e.png)
