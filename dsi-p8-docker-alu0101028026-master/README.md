# Práctica 8: Docker

# Renisha Lachhani Punjabi

## Instalación

Primero tenemos que instalar docker y para ello seguimos los siguientes pasos:

- Eliminamos versiones antiguas de Docker si los tenemos instalados en nuestra máquina: 
```
 $ sudo apt-get remove docker docker-engine docker.io containerd runc
```

- Hacemos un update:
```
$ sudo apt-get updat
```

- Instalamos el paquetes:
```
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

- Añdimos la llave GPG de Docker y lo verificamos:
```
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

$ sudo apt-key fingerprint 0EBFCD88

pub   rsa4096 2017-02-22 [SCEA]
      9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid           [ unknown] Docker Release (CE deb) <docker@docker.com>
sub   rsa4096 2017-02-22 [S]
```

- Añadimos el repositorio:
```


$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

```

- Instalamos Docker Engine:
```
 $ sudo apt-get update
 $ sudo apt-get install docker-ce docker-ce-cli containerd.io
 ```
 
 - Para ver la versión:
 ```
 $ sudo docker --version
 ```

- Para utilizar docker sin el sudo ejecutamos el siguiente comando, salimos y volvemos a entrar en la máquina para crear el cambio:
```
$ sudo usermod -aG docker $USER
```

Instalamos **docker-compose**, que utilizaremos luego:

- Intalamos la nueva versión de docker-compose:
```
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

- Agregamos permisos:
```
$ sudo chmod +x /usr/local/bin/docker-compose
```

- Comprobamos la versión para ver si se ha instalado bien:
```
$ docker-compose --version
docker-compose version 1.25.5, build 1110ad01
```

## Paso 1

Ya tenemos creado el código para la petición a la página principal ``/``  en el fichero server.js:
```
const PORT = 8081;
const HOST = "0.0.0.0";
const VERSION = "1.0";

const app = require("express")();

app.get("/", (req, res) => {
  res.send(`API VERSION ${VERSION}`);
});

app.listen(PORT, HOST);
console.log(`Running NODE on http://localhost:${PORT} (private)`);
```
Añadimos el código que nos mostrará por pantalla el contenido del fichero **data.json** propocionado por el profesor. Usamos el método ``get()`` para llamar a una función allback dada cuando visitamos la ruta ``/api``. Pasamos un objeto de request y response (req, res) a la función callback. En el callback llamamos al ``res.sendFile()`` (método para devolver archivos estáticos) para devolver el nombre actual del directorio **(__ dirname)** más el archivo ``data.json``. También agregamos el método ``res.header()``, que es un método CORS, que es una respuesta para permitir que el sitio acceda al contenido de ciertos orígenes.

![image](https://user-images.githubusercontent.com/43814161/82767956-81fb5e80-9e23-11ea-8ce1-f94f29d0d15a.png)


## Paso 2

Dockerizamos el backend y para eso primero rellenamos el Dockerfile:

![image](https://user-images.githubusercontent.com/43814161/82767986-ace5b280-9e23-11ea-8ce7-cfdc96440046.png)

- En la primera línea ponemos la imagen en la que basaremos y que se creará de la versión 12.12.0-buster-slim.
- En la segunda línea escribimos el directorio de tabajo en la imagen.
- Copiamos nuestro ``package.json`` al directorio de trabajo y luego con **RUN** ejecutamos **npm install** para instalar las dependencias en el package.json.
- Luego copiamos los ficheros importantes al directorio de trabajo, **server.js** y **data.json**.
- Con **EXPOSE** indicamos el puerto por el que inicia.
- Finalmente con **CMD** (sólo se utiliza una vez en el fichero) ponemos el comando final que queremos ejecutar `` node server.js``.

Luego para crear la imagen tenemos que ejecutar dos comandos que pondremos en el fichero ``run.sh``:

![image](https://user-images.githubusercontent.com/43814161/82768362-81b09280-9e26-11ea-8fad-bc054ca205c0.png)

El primero lee el fichero ``Dockerfile`` y realiza los pasos puestas en ella para crear la imágen que se llamará **app-node**. Una vez creada la imágen se ejecuta con el **run** creando el contenedor en la imágen **app-node** en puerto 8081 ``-p 8081:8081`` mapeado al 8081 y después de su ejecución se hará un remove (--rm) del contendor. Cuando se esté ejecutando se puede vistar la página web en su ip:8081 o loacalhost:8081.

![Screenshot from 2020-05-23 00-19-52](https://user-images.githubusercontent.com/43814161/82768530-8aee2f00-9e27-11ea-9701-9e81300392cf.png)



Los comandos se pueden ejecutar separadamente por terminal o como hecho aquí ponerlos en el fichero **run.sh** y ejecutarlo de la siguiente manera para ejecutar en órden todos los comandos que se escriben en ello:
```
$ ./run.sh
```


![Screenshot from 2020-05-23 00-36-39](https://user-images.githubusercontent.com/43814161/82770439-8bd78e80-9e30-11ea-8ded-cb1f55ecc9ff.png)


Si le viene un error de permiso denegado, damos los permisos y volvemos ejecutar el fichero:
```
$ chmod a+x run.sh
$ ./run.sh
```

![Screenshot from 2020-05-23 00-32-45](https://user-images.githubusercontent.com/43814161/82768628-1cf63780-9e28-11ea-8838-b737c26bab01.png)

## Paso 3

En este paso podemos utilizar el código utilizado en la [Práctica 4: Pokedex](https://github.com/ULL-ESIT-DSI-1920/dsi-p4-pokedex-alu0101028026).

El código del HTML se queda igual y en el de css solo añadimos el tamaño de la imágen. En el fichero ``index.js`` utilizando **fetch()** añadimos la ruta de la página en la que aparece el contenido del **data.json** y definimos la IP de es ruta en el fichero de **nginx.conf** del cuál hablaremos luego. En el **data.json** no aparecen imágenes , pues añadimos las imágenes importándolas desde ``../assets/images/*.png`` y creando una nueva variable para el array de datos recogidos y empujándolos en el array de promesas para utilizarlas. 

CSS: 

![image](https://user-images.githubusercontent.com/43814161/82768860-76129b00-9e29-11ea-864f-7fb8f5caf9aa.png)

JS:

![image](https://user-images.githubusercontent.com/43814161/82768895-a5290c80-9e29-11ea-8a99-af645feb88cc.png)


Teniendo todas las variables iteramos por los datos para crear el div y en ello ponemos como el color de fondo de la carta el color que nos ofrece el fichero json:

![image](https://user-images.githubusercontent.com/43814161/82768942-f2a57980-9e29-11ea-8c82-24c6a50e8dfc.png)

Asi se muestra ejecutandolo con ``parcel src/index.html``:

![Screenshot from 2020-05-23 18-32-17](https://user-images.githubusercontent.com/43814161/82770546-d953fb80-9e30-11ea-92be-028fad9bff5d.png)



## Paso 4

Para dockerizar el frontend seguimos los pasos en el **Paso 2**. 

En nuestro Dockerfile tenemos que crear una [imágen multi-stage](https://docs.docker.com/develop/develop-images/multistage-build/) , de node de la misma versión como en el paso 2 y de nginx de version 1.17.6:

![image](https://user-images.githubusercontent.com/43814161/82769026-70698500-9e2a-11ea-95d8-ce6ad68ad66d.png)

Para la de node (lo llamamos como **stage 1** para poder trabajar en varios stages en el mismo fichero y poder referenciar al contenido de este stage en la de nginx llamandola con el nombre dado después de **as**) copiamos el package.json, el directorio ``/src`` con nuestro código, instalamos parcel-bundler en la imágen y después creamos el build con parcel en el directorio de ``dist``.

En la de nginx copiamos desde el stage1 (utilizando **--from=stage1***) el directorio ``dist`` que contiene el build y lo guardamos en ``/usr/share/nginx/html`` copiamos el fichero de configuracion de nginx.conf y lo copiamos a ``/etc/nginx/conf.d/default.conf`` (ruta de fichero del servidor de nginx que contiene la información de puertos y rutas para nginx), ponemos el puerto y finalmento el comando para arrancar el servidor de nginx ``CMD ["nginx", "-g", "daemon off;"]``.


## Paso 5

Configuramos el nginx.conf que tiene la configuración para el servidor nginx:

![image](https://user-images.githubusercontent.com/43814161/82770300-f936ef80-9e2f-11ea-8aca-794fd7f179be.png)

- El servidor escucha en el puerto 80.
- Su domino es localhost.
- Utiliza location / para servir los archivos estáticos en el cual root tiene el build y  luego envía la página del index.html.
- Los otros location tienen la ruta que el cliente puede pedir y dentro de las llaves la dirección de esa ruta. El **node** se refiere al network que se establecerá en el docker-compose.yml.

## Paso 6

docker-compose.yml:

![image](https://user-images.githubusercontent.com/43814161/82771319-8465b480-9e33-11ea-9163-3c58f4c50819.png)

Lo importante al realizar el fichero es la identación del contenido como en Python, si la identación no está bien, da error.

Primero ponemos la version de nuestra Docker Engine 3.7 porque es la de version 18.06.0 y más adelante, en nuestro caso tenemos de 19+. Después nos ofrece los servicios de nginx  del frontend en el puerto 80 mapeado al 80 con el networkque llamanos **backend** y el servio de node del backend que tiene como nombre del contenedor **app-node** que también etá en el network **backend**. Al final unimos los servicios en un network indicando que los dos son del netwok **backend** y lo unimos a darle el nombre **app-backend**.

En el fichero ``run.sh`` escribimos los comandos para realizar el build del docker compose y despueś levantar el servicio para ver la página web:

![image](https://user-images.githubusercontent.com/43814161/82772144-330af480-9e36-11ea-8128-bbdcc8b23dfa.png)

Después de ejecutar el fichero hará el build donde ejecutará el contenido del fichero Dockfile del backend y frontend y al levantarlo (up) se verá de la siguiente forma, sin errores para indicar que ya está listo para verlo:

![Screenshot from 2020-05-24 21-02-18](https://user-images.githubusercontent.com/43814161/82772245-841ae880-9e36-11ea-8fbe-a3367c2e2840.png)

![Screenshot from 2020-05-24 21-40-12](https://user-images.githubusercontent.com/43814161/82772258-909f4100-9e36-11ea-9fe7-a281c1ea3348.png)

![Screenshot from 2020-05-24 21-40-46](https://user-images.githubusercontent.com/43814161/82772268-96952200-9e36-11ea-8a2b-429a1d08dd46.png)




