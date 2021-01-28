# Práctica 6: win311

# Renisha Lachhani Punjabi

## Proyecto Vue

En este proyecto se creó una estructura del proyecto [Vue](https://cli.vuejs.org/) con el siguiente comando:
```
vue create my-project
```
Se ve de la siguiente forma: 

![image](https://user-images.githubusercontent.com/43814161/81832865-e884a080-9536-11ea-842c-5c19ab59f7ba.png)

![image](https://user-images.githubusercontent.com/43814161/81832929-fd613400-9536-11ea-9bfa-ce44299e45a5.png)

El .gitignore ya viene con la estructura que creamos.

## Assets

En los assets sólo tenemos a los íconos que proporcionan los profesores:

![image](https://user-images.githubusercontent.com/43814161/81833196-53ce7280-9537-11ea-91f7-8ca81e1d75c5.png)

## Componentes

### Win311Window

En estecomponente creamos la estructura de las ventanas. En **template**  creamos la estructura html en el cual creamos los divs y el componente **WinIcon** donde iteramos por el array de imágenes recogidos como props para poder demostrarlos por la pantalla.
```
<template>
  <div :style="pos"  class="win">
      <div class="tit">
        {{ theme }}
        <div id="arrow">&#x25BC;</div>
        <div v-on:click="hide" id="ex">&#10005;</div>
        <div  id="minus">&#8722;</div>

      </div>
      <div class="help">
        <div id="set">Settings</div>
        <div id="he">Help</div>
      </div>
      <div class="container">
        <WinIcon v-for="(n, i) in this.images" :name="images[i]" :key="i"></WinIcon>
      </div>
    <div class="inside">{{ message }}</div>
  </div>
</template>
```

Creamos 4 [props](https://vuejs.org/v2/guide/components-props.html):
- theme: que tendrá el título de la ventana.
- side: que tendrá la posición x de la ventana.
- position: tendrá la posición y de la ventana.
- images: recogerá un array de imágenes para esa ventana.

```
props: {
    theme: {
      type: String,
      required: true
    },
    side: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: false
    },
    images: {
      type: Array,
      required: true
    }
  },
  ```
  
  Tenemos un [computed](https://www.telerik.com/blogs/passing-variables-to-css-on-a-vue-component) para transaformar un valor ( en este caso las coordenadas de la ventana y el valor de visibility de la ventana) para poder utilizarlas en el css. Y un método para cambiar el valor de **visibility** de la ventana.
  
```
  computed: {
    pos () {
      return {
        '--side': this.side,
        '--position': this.position,
        '--hide': this.hid
      }
    }
  },
  methods: {
    hide: function () {
      this.hid = 'hidden'
    }
  }
  ```
  
 Finalmente añadimos el fichero de css para darle forma a la ventana.
 
```
</script>

<style src="./Win311Window.css" >

</style>
```

### Win311Icon

En este componente en **template** añadimos los imágenes y sus nombres que lo devuelve la función data que devuelve la imágen, el color del fondo del ícono, el valor de que si el ícono ha sido pinchado y el color de la letra. 

![image](https://user-images.githubusercontent.com/43814161/81836229-17047a80-953b-11ea-9dab-8a6bc6716a79.png)

![image](https://user-images.githubusercontent.com/43814161/81836794-e113c600-953b-11ea-8f82-8cfc999df658.png)

Luego creamos dos métodos:

- highlight: cuando se pincha una vez sobre el ícono su fondo cambia de color (azul) y el color de la letra (blanco). Comprueba con un booleano si se ha pichado, si está pinchado vuelve a estado normal y si se pincha otra vez tiene la forma describida antes.
- popup: al hacer doble-click sobre el ícono se demuestra un mensaje de confirm "open + nombre_de_ícono" con botonoes de **cancel** y **ok**.

![image](https://user-images.githubusercontent.com/43814161/81836870-f688f000-953b-11ea-960a-86afa9c520a2.png)

![image](https://user-images.githubusercontent.com/43814161/81836934-07d1fc80-953c-11ea-853a-bc752330240f.png)

![image](https://user-images.githubusercontent.com/43814161/81836957-128c9180-953c-11ea-991a-d0327405d0c7.png)


### Terminal (Extra)

Es un componente extra de una ventana del terminal que tiene un código similar al componente **Win311Window** con un cursor papadeante:

![image](https://user-images.githubusercontent.com/43814161/81837319-9ba3c880-953c-11ea-91d6-16621009da75.png)

## Extra

Se crea el botón del **X**. Al pinchar sobre ese botón de cualquier ventana se cierra/desaparece la ventana.

![image](https://user-images.githubusercontent.com/43814161/81837506-df96cd80-953c-11ea-942e-3fab8361362b.png)

![image](https://user-images.githubusercontent.com/43814161/81837576-ef161680-953c-11ea-84b1-10df5b473aa1.png)


## App.vue

Éste es el fichero principal que recoge todos los componentes y los demuestra por la pantalla. Importamos los omponentes y lo declaramos en la sección de **components**. Luego en la función data se devuelve los arrays que contienen los nombres de las ímagenes para las ventanas **Win311Window**.

```
<template>
  <div id="app">
    <WinIcon v-for="(n, i) in this.md" :name="md[i]" :key="i" />
    <WinWindow theme="Control Panel" side="200px" position="0px" :images= "panel" />
    <WinWindow theme="Application" side="100px" position="-80px" message="Select app to open..." :images="appl" />
    <terminal theme="Terminal" side="700px" position="-300px" />
  </div>
</template>

<script>
import WinWindow from './components/Win311Window.vue'
import WinIcon from './components/Win311Icon.vue'
import terminal from './components/Terminal.vue'

export default {
  name: 'App',
  components: {
    WinWindow,
    WinIcon,
    terminal
  },
  data: function () {
    return {
      panel: ['calendar', 'charmap', 'clipboard', 'colors', 'desktop', 'keyboard', 'cd', 'fonts', 'international', 'programs'],
      appl: ['paintbrush', 'calc', 'write', 'notepad', 'clock'],
      md: ['msdos']
    }
  }
}
</script>
```

## Github pages 

Se crea un fichero [``vue.config.js``](https://cli.vuejs.org/guide/deployment.html#github-pages):

![image](https://user-images.githubusercontent.com/43814161/81837906-5a5fe880-953d-11ea-8582-5567e587ff97.png)

Al ejecutar ``npm run build`` se hace un build en el directorio **/dist** . Luego para publicarlo (deploy) en gh-pages envés de build ponemos dist en el pakage.json:

![image](https://user-images.githubusercontent.com/43814161/81838170-b0349080-953d-11ea-8818-d3c63d9c3c64.png)





