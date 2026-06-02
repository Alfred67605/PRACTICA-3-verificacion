# Explicación de la Práctica 3 – INF780

## Contexto de la práctica
La práctica tiene como objetivo **diseñar e implementar pruebas avanzadas de API REST** utilizando **Postman**. Se deben aplicar los siguientes requisitos:

1. **Filtrado por parámetros de consulta** en el endpoint `GET /movies`.
2. **Variables dinámicas** para encadenar peticiones dentro de la colección de Postman.
3. **Diseño propio de casos de prueba** con justificación técnica.

## Funcionalidades implementadas en el proyecto
- **DTO `FilterMovieDto`** con validaciones para los filtros `genre`, `year` y `rating`.
- **Modificaciones en `movies.controller.ts`**:
  - Importación de `@Query` y del nuevo DTO.
  - Actualización del método `findAll` para delegar el filtrado al servicio.
- **Actualizaciones en `movies.service.ts`**:
  - Uso de `QueryBuilder` de TypeORM para aplicar filtros condicionales.
- **Colección de Postman generada automáticamente** (`Practica3.postman_collection.json`).
- **Documentación y scripts** para generar la colección y ejecutar los tests.

## Enfoque de pruebas en Postman
- **Variables**: `base_url`, `movieId`, `newTitle`, `newRating`.
- **Tests encadenados**: Creación → Lectura → Actualización → Borrado → Verificación de error 404.
- **Validaciones**:
  - Código de respuesta (`pm.response.to.have.status`).
  - Estructura del cuerpo (`pm.expect`).
  - Valores específicos (p. ej., `title`, `rating`).

## Cómo ejecutar la colección
1. Instala las dependencias del proyecto (`npm install`).
2. Levanta la API (`npm run start:dev`).
3. Ejecuta `node generate-postman.js` para crear `Practica3.postman_collection.json`.
4. Importa la colección en Postman.
5. Usa el **Collection Runner** y ejecuta la colección completa.

---

# README – Configuración del proyecto en otra PC

## Prerrequisitos
- **Node.js** (v18 o superior) y **npm**.
- **Docker & Docker‑Compose** (para la base de datos PostgreSQL).
- **Git** (opcional, para clonar el repositorio).

## Paso a paso
1. **Clonar o copiar el proyecto**
   ```bash
   git clone <URL‑DEL‑REPOSITORIO> INF780-MoviesApi
   cd INF780-MoviesApi
   ```
2. **Instalar dependencias de Node**
   ```bash
   npm install
   ```
3. **Configurar variables de entorno**
   - Copia el archivo de ejemplo:
     ```bash
     cp .env.example .env   # Si existe
     ```
   - Edita `.env` para que coincida con tu configuración de PostgreSQL:
     ```text
     DB_HOST=localhost
     DB_PORT=5432
     DB_USERNAME=postgres
     DB_PASSWORD=postgres
     DB_DATABASE=movies_db
     PORT=3000
     ```
4. **Levantar la base de datos con Docker‑Compose**
   ```bash
   docker-compose up -d   # Inicia el contenedor de PostgreSQL
   ```
   - Espera a que el contenedor esté listo (puedes comprobar con `docker ps`).
5. **Ejecutar migraciones / sincronizar el esquema**
   ```bash
   npm run typeorm:schema:sync   # O el script que tengas configurado
   ```
6. **Iniciar la API**
   ```bash
   npm run start:dev   # Usa NestJS en modo desarrollo
   ```
   La API quedará disponible en `http://localhost:3000`.
7. **Generar la colección de Postman**
   ```bash
   node generate-postman.js
   ```
   Esto crea `Practica3.postman_collection.json` en la raíz del proyecto.
8. **Importar y ejecutar la colección en Postman**
   - Abre Postman → **Import** → selecciona el archivo JSON generado.
   - En la colección importada, abre el **Collection Runner**, configura la iteración y ejecuta.

## Notas adicionales
- Si prefieres usar una base de datos local sin Docker, crea una base `movies_db` en PostgreSQL y ajusta `.env` en consecuencia.
- Para crear el **PDF** de la explicación, instala `md-to-pdf` y ejecuta:
  ```bash
  npm install -D md-to-pdf
  npx md-to-pdf Explicacion_Practica3.md -o Explicacion_Practica3.pdf
  ```
- Los comandos anteriores pueden ejecutarse en cualquier terminal con permisos de escritura en la carpeta del proyecto.

---

Con estos pasos tendrás el proyecto completamente operativo en cualquier máquina.
