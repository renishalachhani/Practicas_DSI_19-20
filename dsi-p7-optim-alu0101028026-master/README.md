# Práctica 7: Optimización Web

# Renisha Lachhani Punjabi

## Fase Inicial de la práctica

### 1.

Modificamos lo siguiente en el archivo ``index.js``:

![image](https://user-images.githubusercontent.com/43814161/82949924-58197780-9f9c-11ea-9c17-9e76945d3523.png)

![image](https://user-images.githubusercontent.com/43814161/82949960-65cefd00-9f9c-11ea-82eb-3e55873525b8.png)



### 2.

Video colocado (version optimizada) :

![image](https://user-images.githubusercontent.com/43814161/82942103-585f4600-9f8f-11ea-8e81-ddff2619a3f1.png)

### 3.

Audios colocados (versiones optimizadas):

![image](https://user-images.githubusercontent.com/43814161/82942211-88a6e480-9f8f-11ea-9ba8-52b268d1b62e.png)


### 4.

4 imágenes (optimizadas) de los cuales las de extensión .png son capturas y de extensión .jpg son fotografías:

![image](https://user-images.githubusercontent.com/43814161/82942325-b12ede80-9f8f-11ea-9ae5-225c878d0fdd.png)


### 5.

Utilizamos los dev tools de firefox para analizar y rellenar la tabla REPORT.md:

![image](https://user-images.githubusercontent.com/43814161/82949777-17b9f980-9f9c-11ea-867e-7b96547ee5b3.png)


## Fase Optimización

### 1.

Instalamos **ffmpeg** :

```
$ sudo snap install ffmpeg
```

Convertimos nuestro audio **dsi.mp3** con diferente codec (.ogg):

![image](https://user-images.githubusercontent.com/43814161/82942759-5f3a8880-9f90-11ea-89e8-57a40aaafd74.png)

Para realizar esto utilizamos el siguiente comando: 
```
$ ffmpeg -i dsi.mp3 -b:a 96K -map ? dsi_out.ogg
```

### 2.

Primero optimizamos nuestro video para cambiar el codec (.ogv):

![image](https://user-images.githubusercontent.com/43814161/82943086-eee03700-9f90-11ea-8438-a35b02552e36.png)

Luego lo recortamos empezando en los 10 segundos y desde allí 15 segundos de video:

![Screenshot from 2020-05-26 20-00-58](https://user-images.githubusercontent.com/43814161/82943168-146d4080-9f91-11ea-8acc-dc12f9555ca8.png)

Para realizar esto ejecutamos :
```
$ ffmpeg -ss 10 -i dsi7_out.ogv -c copy -t 15 dsi7_out_cut.ogv
```

### 3.

- HTMLNANO
Para optimizar los archivos de html, css y js utilizamos htmlnano con el cual los archivos se minifican al realizar el build con un archivo. Creamos el archivo ``.htmlnanorc`` con el contenido que se copio de las transparencias ofrecidas por el profesor:

![image](https://user-images.githubusercontent.com/43814161/82943424-82196c80-9f91-11ea-801f-8d544dabc5ed.png)

- OPTIPNG
Para optimizar las imágenes PNG utilizamos la herramienta optiPNG.
Lo instalamos de la siguiente forma:

![Screenshot from 2020-05-26 18-00-12](https://user-images.githubusercontent.com/43814161/82948001-e25fdc80-9f98-11ea-8eb1-296135bd1d2c.png)

Luego empezamos a optimizar las imágenes:

![Screenshot from 2020-05-26 18-04-48](https://user-images.githubusercontent.com/43814161/82948052-f86d9d00-9f98-11ea-8aca-bce31cb02c4d.png)

![Screenshot from 2020-05-26 18-05-19](https://user-images.githubusercontent.com/43814161/82948062-fc99ba80-9f98-11ea-9e47-6190aa30506f.png)

![Screenshot from 2020-05-26 18-05-57](https://user-images.githubusercontent.com/43814161/82948066-002d4180-9f99-11ea-8ba8-3714e8e34aa6.png)


- SVGO

Para optimizar los archivos .svg utilizamos la herramienta **svgo** que lo instalamos con npm:

![Screenshot from 2020-05-26 18-09-58](https://user-images.githubusercontent.com/43814161/82948153-2b179580-9f99-11ea-836d-c30d03bdb35d.png)

Luego optimizamos los archivos:

![Screenshot from 2020-05-26 18-15-51](https://user-images.githubusercontent.com/43814161/82948185-3b2f7500-9f99-11ea-87d7-02fbd27df633.png)


- ImageOptim, jpegoptim

Para optimizar las imágenes de extensión .jpg empezamos con utilizar el optimizador jpegoptim:

![Screenshot from 2020-05-26 19-32-07](https://user-images.githubusercontent.com/43814161/82948335-8053a700-9f99-11ea-9bcc-05efbcb1f2cc.png)

Pero al ejecutarlo no se veía mucha diferencia, los optimizaba poco pues utilizamos el optimizador online ImageOptim y se optimizaba mejor la imágen.

Esto es cómo optimiza jpegoptim:

![Screenshot from 2020-05-26 19-33-46](https://user-images.githubusercontent.com/43814161/82948484-c446ac00-9f99-11ea-879e-0d8748870622.png)

En la siguiente imágen vemos la diferencia. La imágen ``ball.jpg`` está optimizada por jpegoptim, mientras que ``ball_out.jpg`` está optimizada por ImageOptim:

![image](https://user-images.githubusercontent.com/43814161/82948628-05d75700-9f9a-11ea-8d5f-300d69ca9612.png)

Se ve que da mejor resultados no solo en esta sino en todas imágenes .jpg.

![Screenshot from 2020-05-26 19-52-17](https://user-images.githubusercontent.com/43814161/82948798-61094980-9f9a-11ea-8361-d61af721c9c8.png)





