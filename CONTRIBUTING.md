# ¿Cómo desplegar la aplicación?

## 1. Despliegue de la aplicación
#### Para que se puedan ejecutar los scripts tenemos que instalar la dependencia "concurrently" en el mismo proyecto raiz, para ello desde la consola instalamos las dependencias:
````bash
$ npm i
````
#### Una vez hecho esto ya podemos construir el proyecto:
````bash
$ npm run build
````
#### Este comando nos instalará todas las dependencias necesarias, tanto para Express como para Angular y trasnpilará el código TypeScript a JavaScript. A continuación ya podemos desplegar la aplicación por completo, desde la misma carpeta raiz del proyecto escribimos en la consola:
````bash
$ npm start
````

#### Automaticamente se abrirá un navegador con la parte del cliente y ya estará conectado directamente con el servidor