# AdoptMe - Backend 3

Este proyecto consiste en el desarrollo del backend para la aplicación de adopción de mascotas **"AdoptMe"**. Fue desarrollado como parte del curso **"Programación Backend III: Testing y Escalabilidad Backend"** de CODERHOUSE, en la comisión **70070**. La aplicación original ha sido ampliada para incorporar:

- Pruebas y documentación de las rutas API.
- Dockerización de la aplicación.

## Imagen DockerHub

Puedes acceder a la imagen Docker desde el siguiente enlace:
[AdoptMe en DockerHub](https://hub.docker.com/repository/docker/micaela770/adoptme/general).

---

## Características del Proyecto

- **Endpoints de la API**: Permiten la creación y almacenamiento de datos de prueba, así como el registro de adopciones de mascotas.
- **Pruebas y documentación**: Incluye pruebas unitarias y de integración para validar los endpoints y garantizar el correcto funcionamiento del sistema.

---

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto:

1. **Clonar el repositorio**:
   **bash**
   `git clone https://github.com/scerminati/AdoptMe1.git`

2. **Instalar dependencias**:
   **bash**
   `npm install`

3. **Configurar variables de entorno**:

   - Crear un archivo `.env` en la raíz del proyecto.
   - Utilizar el archivo `.env.example` como referencia para configurar las variables necesarias.

4. **Iniciar el servidor**:
   - **Modo Producción**:
     `npm run dev`
     `
   - **Modo Testeo**:
     `npm test`

---

## Documentación de APIs

Este proyecto incluye una documentación interactiva para la API utilizando **Swagger**. Esto permite explorar y probar los diferentes endpoints directamente desde un navegador.

### Acceso a la Documentación

La documentación interactiva de Swagger está disponible en la siguiente URL (reemplazar con el puerto configurado en las variables de entorno):

`http://localhost:8080/api-docs`

### Vista de Swagger

![Swagger Screenshot](src/assetes/swagger.jpg)

---

### Pruebas Incluidas

**Router: adoption.router.js**

- **GET /api/adoptions**: Devuelve todas las adopciones.
- **GET /api/adoptions/{aid}**: Devuelve una adopción específica.
- **POST /api/adoptions/{uid}/{pid}**: Crea una adopción.

---

! [mongo Screenshot](src/assets/mongo_atlas.jpg)

### ¡Gracias por utilizar AdoptMe!

Si tienes dudas o sugerencias, no dudes en contactarme.

```

```
