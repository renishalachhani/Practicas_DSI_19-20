# Práctica 4: Pokedex
# Renisha Lachhani Punjabi

## Proyecto

En este proyecto se creó una estructura similar al que se creó en la [Práctica 1](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0101028026).

![image](https://user-images.githubusercontent.com/43814161/80312032-ed2d2300-87da-11ea-9308-6beaf5a23d4e.png)

Antes de hacer cualquier push debemos añadir dist, node_modules, .cache y build al .gitignore para que no se suban al repositorio.

![image](https://user-images.githubusercontent.com/43814161/80312055-0f26a580-87db-11ea-9050-37bbbed3e77e.png)

## Código HTML y CSS

### HTML

Dentro del ``<head>`` ponemos el titulo, el link donde añadimos el fichero de ``.css`` y el srcipt donde añadimos el fichero ``.js``.

Nuestro código HTML no es tan largo, sólo tiene tres componentes: 
- div: que contendrá el pokedex.
- h1: el título de la página (Pokedex)
- ol (orederedlist): en el cuál se demostrar las tarjetas de los pokemons.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title> Pokedex</title>
    <link rel="stylesheet" href="./css/index.css" />
    <script defer src="./js/index.js"></script>   

  </head>
  <body>
    <div class="container">
      <h1>Pokedex</h1>
      <ol id="pokedex"></ol>
    </div>

  </body>
</html>
```

### CSS

En nuestro fichero ``index.css`` tenemos los siguiente:

El título está en letras mayúsculas y con un tamaño de 54px y alineado en el centro:
  
  ```
  h1 {
  text-transform: uppercase;
  text-align: center;
  font-size: 54px;
}
  ```


Las tarjetas contienen la imágen, el número de id y el nombre del pokemón. Al principio el pokemón está de espalda y la imágen de frente está escondida. Al pasar el ratón por encima de la tarjeta se esconde la imágen de espalda y se muestra la imágen de frente y crece en tamaño y al mismo tiempo se agita la tarjeta:

```
#card {
  list-style: none;
  padding: 30px;
  background-color: #f4f4f4;
  color: #222;
  text-align: center;	
    

}

#card #front {

	display: none;

  }

#card:hover #back {

 	display : none;	
  }


#card:hover #front  {
	display: inline-block;
	-webkit-font-smoothing: subpixel-antialiased;
	backface-visibility: hidden;
	
	animation: bigger 5s infinite;	     
}


#card-title {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  
}


#back {
  height: 100px;
}

#front {
  height: 100px;
}

#pokedex {
  padding-inline-start: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 20px;
}


@keyframes bigger {

	from { transform: scale(1); }
	to { transform: scale(1.6); }
}


#card:hover {
	
	animation: shake 1s cubic-bezier(.36, .07, .19, .97) both;
	transform: translate3d(0,0,0);
	backface-visibility: hidden;
	perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
```

Para aumentar el tamaño del la imagen se ha utilizado una animación y **scale()** para aumentar el tamaño pero se puede aumentar utilizando sólo scale() pero con la animación es posible especificar el tiempo que quieres que tarde el efecto.

```

#card:hover #front  {
	display: inline-block;
	-webkit-font-smoothing: subpixel-antialiased;
	backface-visibility: hidden;
	
	animation: bigger 5s infinite;	     
}

@keyframes bigger {

	from { transform: scale(1); }
	to { transform: scale(1.6); }
}
```

La imágen se vuelve borrosa normalmente al aumentar en tamaño pues se encontró lo siguiente para intentar evitarlo:

```
-webkit-font-smoothing: subpixel-antialiased;
	backface-visibility: hidden;
```

## Código JavaScript

El código se encuentra en el fichero ``index.js``:

```
const pokedex = document.getElementById('pokedex');


const getPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image_back: result.sprites['back_default'],
            image_front: result.sprites['front_default'],
            id: result.id
        }));
        show(pokemon);
    });
};

const show = (pokemon) => {
    
   
pokedex.innerHTML = pokemon
        .map(
            (pok) => `
        <div id="card">
            <img id="back" src="${pok.image_back}"/>
	    <img id="front" " src="${pok.image_front} "/>
            <h2 id="card-title">${pok.id}. ${pok.name}</h2>
        </div>
    `
        )
        .join('');
    


};

getPokemon();

```

Se ha utilizado Promise.all() para la implementación del código. Con un **for** que llega hasta 151 guardamos los pokemóns y después con ellos recojemos sus datos (nombre, id, imágen de atrás  e imágen de frente) y lo guardamos en **pokemon** y luego llamamos a la función  de **show()** para demostrarlos. En **show()** creamos un div en el html y dentro ponemos las dos imágenes, la id y el título. Finalmente llamamos a la función getPokemon que implementamos.

Finalmente se queda sí el resultado:

![image](https://user-images.githubusercontent.com/43814161/80289348-c10b9680-8735-11ea-805e-6c95f7497247.png)


## Retos

### Reto 1 : Postcss Plugins

Entre todos los [plugins](https://www.postcss.parts/) destacamos los siguientes:

- Postcss-contrast: plugin para cambiar el color del texto según el contraste del color de fondo. Esto generalmente es útil si escribe un mixin o un selector de marcador de posición que se aplica a muchos escenarios. Se puede encontrar más información en su [Github](https://github.com/stephenway/postcss-contrast).

- Postcss-color-emoji: plugin que nos da todo acceso a los emojis en nuestro sistema windows, masOS y linux. Pueden ser útil cuando se quieren utilizarlos en lugar de palabras o texto en una página. Más información [aquí](https://github.com/philipbordallo/postcss-color-emoji).

### Reto 2: Reloj Digital

Para crear el reloj digital utilizamos ``new Date()`` para conseguir las horas, minutos y segundos (``.getHours().toString()``) y lo convertimos en string. Utilizamos ``.padStart()`` para especificar que sean de dos dígitos y se pone un 0 adelante si el número es de un dígito sólo.

Utilizamos ``setInterval()`` que ejeuta el método de ``Time()``, que contiene el código, cada 1 segundo (100 milisegundos).

![image](https://user-images.githubusercontent.com/43814161/80309086-84d64580-87ca-11ea-9076-fd94741abae3.png)


**Resultado:**

![image](https://user-images.githubusercontent.com/43814161/80309121-cbc43b00-87ca-11ea-9f46-bbcf784ba049.png)

### Reto 3: Reloj Analógico

En este reto conseguimos la fecha y de ella las horas, minutos y segundos de la misma manera que en el reto 2. Para cada uno (horas, minutos y segundos) calculamos los grados en la que tiene que girar las manos del reloj y después se lo pasamos a la propiedad css de ``rotate()`` para que giren en esos grados. Utilizamos ``setInterval()`` de la misma forma que en el reto anterior.

![image](https://user-images.githubusercontent.com/43814161/80309265-e21ec680-87cb-11ea-9d70-d71e5547c296.png)

**Resultado:**

![image](https://user-images.githubusercontent.com/43814161/80309237-abe14700-87cb-11ea-9c07-414d5c3bc1c0.png)

## gh-pages

El link de la página está en el repositorio que por defecto nos lleva a la página de ``index.html``. Para ver los dos tipos de relojes sepone **analog** o **digital** al final del enlace dependiendo de cual se quiere ver.


![image](https://user-images.githubusercontent.com/43814161/80313510-29fd1800-87e3-11ea-9a0d-1427adc49596.png)

![image](https://user-images.githubusercontent.com/43814161/80313527-413c0580-87e3-11ea-8e2e-a42953c25868.png)

