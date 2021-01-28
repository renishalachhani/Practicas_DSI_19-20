# Práctica 5: Mario Kart
# Renisha Lachhani Punjabi

## Proyecto Parcel

En este proyecto se creó una estructura similar al que se creó en la [Práctica 1](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0101028026).

![Screenshot from 2020-05-06 14-27-51](https://user-images.githubusercontent.com/43814161/81182669-05086200-8fa6-11ea-9620-65e67c93a023.png)

Antes de hacer cualquier push debemos añadir dist, node_modules, .cache y build al .gitignore para que no se suban al repositorio.

![Screenshot from 2020-05-06 14-28-12](https://user-images.githubusercontent.com/43814161/81182702-16516e80-8fa6-11ea-81c3-6ffbe79ee3bd.png)


## Assets

En la carpeta assets añadimos una carpeta images para poner nuestras imágenes de los personajes del juego de Mario Kart:

![image](https://user-images.githubusercontent.com/43814161/81120942-9aafdd00-8f25-11ea-8c64-49176554f550.png)

En la misma carpeta tenemos dos gifs: uno para el fondo de pantalla y otro para la trofeo de ganador.


## Código HTML y CSS

### HTML

Dentro del ``<head>`` ponemos el titulo, el link donde añadimos el fichero de ``.css`` y el srcipt donde añadimos el fichero ``.js``.

En el **body** tenemos:
- El titulo de la página (nombre de la práctica).
- Un div que será la carretera.
- Otro div para el resultado del ganador que contiene una imagen de la copa.
- Y un tercero div que contiene los dos botones de start y restart.

![image](https://user-images.githubusercontent.com/43814161/81182990-7ba55f80-8fa6-11ea-9fab-3ea84e7c43aa.png)


### CSS

En nuestro fichero ``index.css`` tenemos los siguiente:

- un fondo de pantalla gif.
- el título de la página(h1)
- una carretera negra con distintos tipos de bordes y todo el rectángulo centrado en el centro de la página.
- el trofeo
- la imagen del carácter que gana la carrera que gira rotateY(360deg)
- los botones en el centro que que son de colores verde y rojo y cambian al pasar el ratón y se convierten en negro cuando se deshabilitan.

```

body {

	background: url(../assets/images/back.gif) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
}

h1 { 

  text-align: center;
  font-size: 80px;
  font-weight: bold;
  
  
}



.track {
  background-color: black;
  width: 1100px;
  height: 550px;
  border-bottom: 20px dashed white;
  border-top: 20px dashed white;
  border-right: 20px solid yellow;
  border-left: 20px double green;
  display: flex;
  align-items: flex-end;
  
  margin: auto;
  
  
  position: relative;
}


.result {

  display: flex;
  text-align: center;
  align-items: flex-end;
  background-color: white;
  width: 300px;
  height: 400px;
  border: 10px solid green;
  border-radius: 5%;
  margin: auto;
  
  margin-top: 20px;
  position: relative;
  
  

}

.tro {
	width: 150px;
	
	margin-left: 80px;
	margin-top: 200px;
	position: absolute;
	
}

.win {
	width: 200px;
	
	margin-left: 60px;
	margin-bottom: 190px;
	margin-top: 20px;
	animation: circle 5s linear infinite;
}
	

@keyframes circle {
    from { transform:  rotateY(0deg); }
    to { transform:  rotateY(360deg); }
}


.btns{
 
  text-align: center;
  margin-top: 20px;
   
}


button {
  
  width: 150px;
  height: 50px;
  border: 10px solid black;
  border-radius: 10%;
  background-color: white;
  font-size: 20px;
  font-weight: bold;
	
}

.start {

	color: green;
}

.start:hover {
	color: #90EE90;

}

button:disabled {
	color: black;

}



.restart:hover {
	color: #eb636b;

}

.restart {

	color: red;
}



```


## Código JavaScript

El código se encuentra en los ficheros ``index.js`` y ``KartPlayer`` :

**index.js**
Importamos las imágenes de los karts (png), la case KartPlayer y el gif del trofeo que vamos a utilizar. Creamos los constantes para los diferentes componentes del html (botones, resultado y track). Iteramos por las imágenes de los karts y guardamos la imágen, la posición ``y`` y el nombre y se lo pasamos a la clase KartPlayer. Aumentamos la posicion de **y** para que los karts estén separados y no encima de uno y otro. Añadimos los karts al track.

Creamos cuatro funciones de flechas:

- startRace(): para empezar la carrera establecemos un intervalo que ejecuta la funcion de startIteration cada **1000/30** tiempo. Añadimos el trofeo al html y deshabilitamos los dos botones.
- endRace() : limpiamos el intervalo e iteramos por los karts y si es ganador pues ejecutamos el método **win()** y añadimos su imágen con el trofeo, sino ejecutamos **lose()** y habilitamos el boton restart.
- restartRace(): iteramos por los karts y ejecutamos el método para reiniciarlas en su posicion inicial. Añadimos la imagen del trofeo y se quita la imagen del kart ganador en la última carrera y deshabilitamos el botón restart y habilitamos start.
- startIteration(): iteramos los karts e incrementamos sus posiciones y si alguno es ganador pues terminamos la carrera.

Finalmente en hacer click en el botón start ejecutamos **startRace()** y al hacer click en restart ejecutamos **restartRace()**.

```
import players from "../assets/images/kart-*.png";
import { KartPlayer } from "./KartPlayer.js";
import trophy from "../assets/images/trophy.gif";

const start = document.querySelector(".start");
const restart = document.querySelector(".restart");
const track = document.querySelector(".track");
const fin = document.querySelector(".result");
const p = [];
let t  = null;
let i = 10;




for(var j in players) {

const image = players[j];
const y = i;
const name = players[j].toString().split('/').pop().split('.')[0];

const k= new KartPlayer(name, image, y);
track.appendChild(k);
p.push(k);
i += 80;
}


const startRace = () => {
  t  = setInterval(() => startIteration(), 1000/30);
  fin.innerHTML = `<img class="tro" src="${trophy}" />`;
  start.disabled = true;
  restart.disabled = true;

};

const endRace = () => {
  clearInterval(t );

  for ( var i of p) {
	if(i.isWinner() ){
		
		i.win();
		const done = i.getWinner();
		fin.innerHTML = `<img class="win" src="${done}" />
<img class="tro" src="${trophy}" />`;
		 
	} else {
		i.lose();
	}
  }
  restart.disabled = false;
};

const restartRace = () => {

  for ( var i of p) {
	i.restart();
  }
  fin.innerHTML = `<img class="tro" src="${trophy}" />`;
  start.disabled = false;
  restart.disabled = true;
  
};

const startIteration = () => {

  for ( var i of p) {
	i.inc();
	if( i.isWinner()) {
		endRace();
	}
  }

};




start.onclick = () => startRace();
restart.onclick = () => restartRace();
```

**KartPlayer.js**

Obtenemos los parámetros necesarios y declaramos las variables de cada uno, la posición x, la opacidad de los karts (que cambiará) y el color del borde de las imágenes.
 
- En get styles además de los nos proporcionó añadimos el código para el cambio de opacidad y el color de borde de los karts para diferenciar el ganador (que tendrá un borde grueso) y de los que pierden (no tendrán borde).
- render() nos fue proporcionado por el profesor que nos demostrará por pantalla los karts cada vez que muevan.
- inc() aumenta la velocidad y llama a render().
- setSpeed(): establece la velocidad entre 10 y 40 dependiendo del número aleatorio recibido entre 1 y 0.
- rand() : genera número aleatorio entre 1 y 0.
- win() : ofrece los cambios de imágen para el ganador.
- lose(): ofrece los cambios de imágen para los perdedores.
- isWinner(): devuelve true si la posición del es mayor o igual que 1010 ( no 950 porque no llegaba a la línea con ese número), entonces es ganador, sino false.
- restart() : reinicia las varibles para cada kart y sus posiciones.
- getWinner() : devuelve la imágen del ganador.

```

export class KartPlayer extends HTMLElement {
  constructor(name, image, y) {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.name = name;
    this.image = image;
    this.y = y;
    this.x = 0;
    this.op = 1;
    this.border = -1;
   

  }

  connectedCallback() {
    this.render();
  }

  get styles() {
    return `
    :host {
      --x: ${this.x}px;
      position: absolute;
      display: inline-block;
      top: ${this.y}px;
      transform: translateX(var(--x)) ;
      transition: transform 0.25s;
      will-change: transform;
    }
    
    .pic{
      opacity: ${this.op};
      width: 140px;
      height: 140px;
      -webkit-filter: drop-shadow(${this.border}px  ${this.border}px  0 yellow)
                      drop-shadow(-${this.border}px  -${this.border}px 0 yellow);
      filter: drop-shadow(${this.border}px  ${this.border}px  0 yellow) 
          drop-shadow(-${this.border}px -${this.border}px 0 yellow);
     }
   `;
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>${this.styles}</style>
        <item-kart></item-kart>
        <img class="pic" src="${this.image}" alt="${this.name}">
      `;
	
  }

 

  inc() {
	
    this.x += this.setSpeed();    
    this.render();
  }


  setSpeed() {
        
      	let r;
	if (this.rand() == 0) {
	    
	     
	     r = 10;
	    
	    } else {
	    
	      r = 40; 
	    
	    }
	return r;
}	

	
  rand() {
   
    return (Math.random()>0.5)? 1 : 0;
    
  }

  win() {
    this.border = 8;
    this.op = 1;
    this.render();
  }

  lose() {
    this.op = 0.3;
    this.border = -1;
    this.render();
  }

  isWinner() {
    if (this.x >= 1010 ) {
	
      return true;
    }
    return false;
  }

  restart() {
    this.x = 0;
    this.op = 1;
    this.border = -1;
    this.render();
  }

  getWinner() {
	
	if(this.isWinner()) {
		
		
		return this.image;}
	return;
 }

}

customElements.define("kart-player", KartPlayer);
```

## Extra 

Se añadió en el juego una cuadro donde aparecerá la imagén del ganador con el método getWinner().

![image](https://user-images.githubusercontent.com/43814161/81180729-56fbb880-8fa3-11ea-9771-ec96e85c01ed.png)


## Github Pages, Eslint y Prettier

Para publicarlo en Github pages, utilizar Eslint y Prettier hacemos los mismos pasos en la [Práctica 1](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0101028026) con lo siguiente en el ``package.json`` :


![Screenshot from 2020-05-06 14-28-36](https://user-images.githubusercontent.com/43814161/81182854-413bc280-8fa6-11ea-964b-d00e0d53e325.png)

El link de la página está en el repositorio que por defecto nos lleva a la página de ``index.html``:


![image](https://user-images.githubusercontent.com/43814161/81180914-962a0980-8fa3-11ea-875e-b9086df4bcd2.png)

![image](https://user-images.githubusercontent.com/43814161/81181015-ba85e600-8fa3-11ea-8549-aa1648dea5e4.png)



