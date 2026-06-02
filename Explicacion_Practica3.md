# INF780 — Práctica 3: Pruebas Avanzadas de API con Postman

Esta práctica tiene como objetivo principal implementar pruebas automatizadas avanzadas de una API REST (Movies API) usando Postman. Incluye validaciones y comprobaciones matemáticas en las aserciones, y el diseño de un flujo encadenado donde las peticiones comparten variables dinámicas de estado.

## Explicación de la Práctica

El proyecto original está construido con **NestJS, TypeORM y PostgreSQL**. Para esta práctica se añadieron filtros (query parameters) en el endpoint `GET /movies` para `genre`, `year`, y `rating`. 

### 📂 Parte 1: Filtrado Query Params
Verifica que la API reciba filtros por URL y devuelva los datos correctos, asegurándose de que *todos* los elementos de la respuesta cumplan la condición usando aserciones (`pm.expect(body.every(...))`).

*   **P1-01 GET `/movies?genre=sci-fi`**: Verifica que la API responda `200 OK` y que todas las películas devueltas tengan el género `sci-fi`.
*   **P1-02 GET `/movies?genre=drama`**: Verifica que no se cuele ninguna película que no sea de drama.
*   **P1-03 GET `/movies?year=2010`**: Filtra películas lanzadas exactamente en 2010 y verifica que cada campo `year` coincida.
*   **P1-04 GET `/movies?genre=sci-fi&year=2010`**: Combina dos filtros al mismo tiempo y verifica que se cumplan ambas condiciones.
*   **P1-05 GET `/movies?genre=musical`**: Envía un género inválido (fuera del enum). Espera recibir un error de validación `422 Unprocessable Entity` o un array vacío según la protección.
*   **P1-06 GET `/movies?year=1800`**: Envía un año inválido (límites). Evalúa el comportamiento ante este caso borde.
*   **P1-07 GET `/movies?rating=9`**: Filtra películas con calificación mayor o igual a 9.0.

### 📂 Parte 2: Flujo Encadenado
Esta parte evalúa el ciclo de vida de un recurso. Las peticiones dependen unas de otras de forma secuencial y comparten estado a través de variables dinámicas (`{{idA}}` y `{{idB}}`).

*   **P2-01 y P2-02 POST `/movies`**: Crean la Película A y Película B. El script captura automáticamente los UUIDs generados y los guarda como variables invisibles (`idA` e `idB`).
*   **P2-03 GET `/movies`**: Pide la lista de películas y verifica que `idA` e `idB` estén presentes.
*   **P2-04 PATCH `/movies/{{idA}}`**: Modifica el título y el rating de la Película A (`200 OK`).
*   **P2-05 GET `/movies/{{idA}}`**: Consulta la Película A para confirmar que los cambios realizados en el PATCH se hayan persistido en la BD.
*   **P2-06 DELETE `/movies/{{idA}}`**: Elimina la Película A de forma exitosa (`200 OK`).
*   **P2-07 GET `/movies/{{idA}}`**: Intenta consultar la película recién borrada y confirma que devuelve un error `404 Not Found`.
*   **P2-08 GET `/movies`**: Solicita todas las películas para comprobar que la Película B (`idB`) sigue ahí, pero la Película A (`idA`) ya no existe.
*   **P2-09 DELETE `/movies/{{idB}}`**: Elimina la Película B para devolver la base de datos a su estado original (limpieza total).
