# Practica de Adolfo Clemente Palacios

### La practica se basa en una API REST que implementa todos los servicios CRUD que trabaja con datos de coches y tiene un LogIn con gestión de token JWT de autenticación
---
## Servidor (Backend)

> **Todo el servidor a sido construdio con Typescript**    
> Paquetes que se han utilizado para crear el servidor:
> 1. @tpes/Express
> 2. TypeORM
> 3. @types/dotenv
> 4. nodemon
> 5. @types/cors
> 6. @types/jsonwebtoken
> 7. @types/bcryptjs

---
## Vista (Frontend)

> **La parte frontal se ha creado con Angular**    
> Paquetes que se han utilizado para crear el servidor:
> 1. @angular/common
> 1. @angular/compile
> 1. @angular/core
> 1. @angular/form
> 1. @angular/route
> 1. @popperjs/cor
> 1. boostrap
> 1. bootstrap
> 1. cors

# ¿Cómo desplegar la aplicación?


Desde la carpeta raiz del proyecto (Practica) ponemos por consola:
````bash
$ npm build
````
Este comando nos instalará todas las dependencias necesarias, tanto para Express como para Angular. A continuación ya podemos desplegar la aplicación por completo, desde la misma carpeta raiz del proyecto escribimos en la consola:
````bash
$ npm start
````

Automaticamente se abrirá un navegador