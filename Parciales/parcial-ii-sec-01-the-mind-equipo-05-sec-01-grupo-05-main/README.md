[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/6snIhXxa)
# Parcial 02 - Trivia App (The Mind)

- [Parcial 02 - Trivia App (The Mind)](#parcial-02---trivia-app-the-mind)
  - [Equipo \<##\> - Sec 01](#equipo----sec-01)
    - [Integrantes](#integrantes)
  - [Indicaciones generales](#indicaciones-generales)
    - [Dinámica de la evaluación](#dinámica-de-la-evaluación)
    - [Referencia espacio temporal de la evaluación](#referencia-espacio-temporal-de-la-evaluación)
    - [Sobre trabajo en equipo](#sobre-trabajo-en-equipo)
    - [Entrega de la evaluación](#entrega-de-la-evaluación)
    - [Sobre material de apoyo](#sobre-material-de-apoyo)
    - [Sobre archivos blindados](#sobre-archivos-blindados)
    - [Sobre plagio](#sobre-plagio)
  - [Material brindado](#material-brindado)
  - [Contexto de la aplicación](#contexto-de-la-aplicación)
    - [Conversación con cliente](#conversación-con-cliente)
    - [Anotaciones del Product Manager:](#anotaciones-del-product-manager)
      - [Puntos importantes](#puntos-importantes)
  - [Requisitos de entrega](#requisitos-de-entrega)
  - [Criterios de evaluación](#criterios-de-evaluación)
    - [Módulo de Prueba Aleatoria (7 puntos)](#módulo-de-prueba-aleatoria-7-puntos)
    - [Módulo de Estadísticas (3 puntos)](#módulo-de-estadísticas-3-puntos)


## Equipo <##> - Sec 01

### Integrantes

| #   | Nombre | Carnet |
| --- | ------ | ------ |
| 01  |        |        |
| 02  |        |        |
| 03  |        |        |


## Indicaciones generales

### Dinámica de la evaluación

Previamente en clase se brindó la REST API de [Open Trivia Database](https://opentdb.com/). Haciendo uso de las rutas que sean necesarias, se debe de desarrollar una aplicación web que permita realizar diferentes tipos de *quizzes* (Posteriormente se explicará la dinámica), almacenando los resultados y mostrándolo al usuario.

Los estilos para esta entrega son flexibles; esto significa que no habrá una línea de diseño explicita, pero siempre se evaluará que la estructura del contenido sea la más óptima, garantizando buena UI y UX. Se adjuntará capturas de un resultado aproximado.

Toda la aplicación se deberá desarrollar con la librería para la creación de interfaces de usuario ReactJS. No habrá limitación con las tecnologías o librerías que puedan añadirse en este contexto, a excepción de Bootstrap y JQuery.

### Referencia espacio temporal de la evaluación

La evaluación debe de realizarse en los espacios designados por el docente, que para este caso son los laboratorios de computación del departamento de electrónica e informática.

El tiempo de realización de la prueba es de **2.00 horas** de reloj. Iniciará a la 13:30 y finalizará a las 15:30.

### Sobre trabajo en equipo

La evaluación se debe realizar en los equipos de proyecto, seleccionados al inicio de la materia.

Además, en todo momento se tiene que llevar control exhaustivo de versionamiento de código, utilizando la herramienta git. **Todos los integrantes deberán aportar al repositorio de forma equitativa,** garantizando al menos 5 commits descriptivos y semánticos por integrante.

Para esta evaluación no se requerirá la administración exhaustiva por ramas. Pueden trabajar en la rama principal, aunque no se recomienda el uso exclusivo de la misma. 

### Entrega de la evaluación

La entrega deberá realizarse sobre este mismo repositorio. Teniendo como hora límite las 15:30 para realizar el último commit.

Además, el docente (o los instructores) les brindarán una hoja impresa con varios *checkpoints* del parcial, donde deberán de anotar los primeros 5 caracteres del commit que respalde esa funcionalidad en la rama principal.

**No se evaluará nada que no se encuentre en la rama principal del proyecto, ni que esté detallado en los commits presentados en la hoja**

> Puedes consultar los commits con el comando `git log` dentro de la carpeta del proyecto. El id del commit tiene la siguiente estructura: `da4e0064fe4d418a42212ad447642e6ca2df52da`, por lo que solo anotarás **`da4e0`**;

### Sobre material de apoyo

Durante la evaluación se puede utilizar cualquier material de apoyo que se tenga a disposición, como referencia.

Se puede hacer uso de Inteligencias Artificiales como Chat GPT, Bard AI, Bing, siempre y cuando se referencie en la evaluación donde se utilizó, y que esto no represente mas del 20% de la solución de cualquier sección. 

### Sobre archivos blindados 

Dentro del repositorio se revisará que los siguientes archivos no se modifiquen en ningún commit:

- *.gitignore*

La modificación de estos archivos anulará la entrega de la evaluación

### Sobre plagio

El material de apoyo a utilizar, debe de ser solo referencia y no una solución de la evaluación.

Cualquier indicio de copia directa de código se tomará como plagio. Además, los repositorios de entrega son privados, por lo que, no deberían existir dos soluciones parecidas entre los grupos de trabajo.

**No se permite la plática entre personas que no sean del mismo equipo, y los diálogos entre integrantes debe de ser a un volumen bajo.**

## Material brindado

En este repositorio se brinda una estructura base para un proyecto de React JS gestionado por Vite. Las dependencias referentes al proyecto han sido gestionadas con Yarn. Se han eliminado todos aquellas estructuras o archivos de prueba.

## Contexto de la aplicación

A continuación se mostrará una conversación simulada entre un cliente y un product manager. La idea de esta sección es que se desarrolle la lectura compresiva y la recolección de requerimientos.

Además, se añadirá una sección con un monólogo y las posibles anotaciones del Product Manager. Con el fin de aclarar situaciones puntuales en la conversación.

### Conversación con cliente

**Cliente**: ¡Hola! Estoy emocionado por la idea de esta nueva aplicación web que permitirá a las personas hacer quizzes aleatorios.

**Product Manager**: ¡Hola! Me alegra escuchar tu entusiasmo. Cuéntame, ¿qué te gustaría que esta aplicación pueda hacer?

**Cliente**: Queremos que los usuarios puedan realizar quizzes aleatorios, donde puedan elegir si quieren un quiz fácil, medio o difícil antes de comenzar. Las preguntas vendrán de una fuente externa llamada la Open Trivia Database.

**Product Manager**: ¡Muy bien! ¿Cómo te imaginas que las personas usarán la aplicación?

**Cliente**: La aplicación tendrá dos partes principales. La primera es para hacer "quizzes aleatorios", y la otra es de "estadísticas". 

Te explico la primera: Cuando alguien elija el nivel de dificultad, empezará un quiz con una pregunta por cada categoría disponible. Las categorías se actualizarán automáticamente desde la base de datos. Las preguntas se mostrarán una por una, con las opciones mezcladas en un orden diferente cada vez, para evitar que la respuesta correcta siempre esté en el mismo sitio. 

Queremos que el usuario pueda navegar entre las preguntas, que vea cuantas ha resuelto y cuales le faltan.

También, habrá un botón que termina el intento y guarda el progreso del quiz, incluso si cierran la aplicación.

**Product Manager**: Entendido. ¿Qué información adicional debería aparecer en las preguntas durante el quiz?

**Cliente**: Cada pregunta debería mostrar la categoría y la dificultad, además de las opciones. Las opciones se deben desordenar por lo que te dije de evitar que sea predecible.

**Product Manager**: Perfecto. ¿Y el segundo componente, el de "estadísticas"?

**Cliente**: En el módulo de estadísticas, los usuarios podrán ver los quizzes que han hecho. En esta lista se mostrará la fecha y cuántas respuestas correctas tuvieron en cada intento. Al abrir un intento, se mostrarán las preguntas con las respuestas dadas y se indicará si la respuesta fue correcta, incorrecta o si no respondieron. Los intentos se basan en la información almacenada en el primer componente.

**Product Manager**: Claro. ¿Tienes alguna preferencia en cuanto a las tecnologías que utilizaremos para desarrollar la aplicación?

**Cliente**: Sí, estamos usando React JS para construir las interfaces de usuario y React Router para gestionar las rutas. También, usamos Vite y Yarn para administrar el proyecto.

**Product Manager**: Genial, eso ayudará en el desarrollo. ¿Hay alguna otra cosa importante que debamos tener en cuenta?

**Cliente**: Les dejo a discreción el estilo de la página, me han dicho que su trabajo es excelente, pero deben ser consistentes con lo que hemos hablado, aunque no es tan crítico en este momento. Nos centramos más en que la aplicación sea fácil de usar y que la información se presente de manera organizada.

### Anotaciones del Product Manager:

La aplicación consta de dos módulos fundamentales: el "Módulo de prueba aleatoria" y el "Módulo de estadísticas". 

En el primero, nuestra prioridad es brindar a los usuarios la posibilidad de elegir el nivel de dificultad que mejor se adapte a sus preferencias: fácil, medio o difícil. Además, nos apoyamos en la Open Trivia Database para obtener preguntas las preguntas y las categorías. Aseguramos que los niveles de dificultad se obtengan de manera clara y que las categorías se actualicen de forma dinámica.

En el "Módulo de prueba aleatoria", la experiencia del usuario es esencial. Queremos que los usuarios sientan que están participando en un quiz real, con la posibilidad de avanzar de manera intuitiva a través de las preguntas. Es importante recordar que debe de ser una pregunta por categoría disponible.

Mostramos una pregunta en pantalla a la vez, permitiendo a los usuarios navegar de manera sencilla e intuitiva entre ellas. Además, en todo momento, los usuarios deben poder ver cuántas preguntas han respondido y cuántas faltan por contestar. 

Cada pregunta muestra información esencial, como la categoría y la dificultad, y las opciones de respuesta se mezclan aleatoriamente para evitar que la respuesta correcta sea predecible. La implementación de la función de terminar y guardar el progreso del quiz es fundamental, lo que permitirá que los intentos persistan incluso si cierran el navegador o la aplicación. Queremos que la aplicación sea confiable y que los usuarios tengan una experiencia sin problemas.

En el "Módulo de estadísticas", nos enfocamos en brindar a los usuarios una visión completa de su progreso. Mostramos la fecha y hora de realización de los intentos, junto con la cantidad de respuestas correctas obtenidas en cada intento. 

Al acceder a un intento en particular, la aplicación presenta las preguntas junto con las respuestas proporcionadas, y utilizamos iconografía semántica para indicar si las respuestas fueron correctas, incorrectas o si no se brindó una respuesta. Esto proporciona una retroalimentación clara a los usuarios y les permite aprender de sus intentos anteriores.

En términos de tecnología, estamos aprovechando React JS para crear las interfaces de usuario, React Router para gestionar las rutas, y Vite y Yarn para administrar el proyecto. Esto nos brinda una base sólida para el desarrollo de la aplicación.

En resumen, nuestra misión como equipo de desarrollo es crear una aplicación web que combine la emoción de los quizzes con una experiencia de usuario excepcional. Priorizamos la usabilidad y la organización de la información, asegurándonos de que los estilos sean coherentes con lo que el cliente solicitó, aunque con un enfoque menos intenso en este momento. Realizaremos pruebas exhaustivas para garantizar que la aplicación funcione sin problemas en diferentes escenarios y navegadores.

#### Puntos importantes

- Asegurarse de que los niveles de dificultad sean claros para los usuarios y se obtengan de la API correctamente.
- El cliente fue claro con que debe de ser una pregunta por categoría.
- Dejar claro al usuario en todo momento cuantas preguntas ha respondido y cuales le faltan.
- Implementar la función de terminar y guardar el progreso del quiz de manera robusta, de modo que los intentos persistan incluso si el navegador se cierra o la aplicación se reinicia.
- Asegurarse de que la información de categorías se actualice dinámicamente desde la Open Trivia Database.
- Mezclar aleatoriamente las opciones de respuesta en cada pregunta del quiz para evitar patrones predecibles.
- En el "Módulo de estadísticas", utilizar iconos o indicadores visuales claros para mostrar si la respuesta fue correcta, incorrecta o si no se respondió en cada pregunta.
- Realizar pruebas exhaustivas de la aplicación en diferentes escenarios y navegadores para garantizar una experiencia de usuario sin problemas.
- Priorizar la usabilidad y la organización de la información en la interfaz, teniendo en cuenta la experiencia del usuario.

## Requisitos de entrega

Los requisitos de entrega, como tal no son parte de la rúbrica de evaluación, pero cualquier incumplimiento de estos requisitos, anulará la entrega de la evaluación.   

- Estructura ordenada de código, garantizando la modularización del proyecto en sus componentes principales (archivos generales, componentes, servicios y herramientas, por lo menos).
- No modificar los archivos blindados del proyecto
- Al menos 5 commits por integrante. Se realiza un commit por checkpoint planteado.
- No se puede utilizar ninguna tecnología que no tenga relación directa con ReactJS
- No se puede utilizar Bootstrap ni JQuery
- El comando `yarn build` genera los archivos estáticos del proyecto. Se ejecutará `yarn preview` sobre la carpeta *dist* resultante de este proceso. **La carpeta dist no se debe de subir**
- Solo se podrá cambiar el token de sesión de la API, al momento de la revisión.

## Criterios de evaluación

### Módulo de Prueba Aleatoria (7 puntos)

1. **Selección de dificultad (1 punto)**:
   - La aplicación permite al usuario elegir entre los niveles de dificultad (fácil, medio, difícil) de manera clara y efectiva.

2. **Obtención de preguntas (1 punto)**:
   - Las preguntas se obtienen de la Open Trivia Database utilizando rutas apropiadas.
   - Las categorías de las preguntas se actualizan de manera dinámica desde el servicio web.
   - Se garantiza que haya al menos una pregunta por cada categoría disponible en la API.

3. **Navegación de preguntas (1 punto)**:
   - El usuario puede navegar de manera sencilla y clara entre las preguntas del quiz.
   - En todo momento, el usuario puede ver cuántas preguntas ha respondido y cuántas faltan por contestar.

4. **Presentación de preguntas (1 punto)**:
   - Cada pregunta se muestra en pantalla de manera legible y atractiva.
   - La pregunta incluye información sobre la categoría y la dificultad.
   - Las opciones de respuesta se presentan de manera ordenada y se mezclan aleatoriamente en cada pregunta.

5. **Guardado de progreso (1 punto)**:
   - La función para guardar el progreso del quiz funciona de manera robusta, incluso si el navegador se cierra o la aplicación se reinicia.

6. **Estilo y organización (1 punto)**:
   - La aplicación muestra coherencia en la estructuración del contenido y la organización de la información.
   - Aunque los estilos son flexibles, se evaluará que la interfaz sea atractiva y fácil de usar.

7. **Pruebas y funcionamiento (1 punto)**:
   - La aplicación se somete a pruebas exhaustivas en diferentes escenarios y navegadores.
   - La aplicación debe funcionar sin problemas y proporcionar una experiencia de usuario óptima.

### Módulo de Estadísticas (3 puntos)

1. **Listado de intentos (1 punto)**:
   - El módulo de estadísticas muestra una lista de los intentos realizados por el usuario.
   - Cada intento debe incluir información sobre la fecha y hora de realización y la cantidad de respuestas correctas obtenidas.

2. **Detalles del intento (1 punto)**:
   - Al acceder a un intento en particular, se presentan las preguntas junto con las respuestas proporcionadas.
   - Se utiliza iconografía semántica para indicar si la respuesta fue correcta, incorrecta o si no se brindó una respuesta.

3. **Integración con el módulo de prueba aleatoria (1 punto)**:
   - Los intentos del módulo de estadísticas se basan en la información almacenada en el módulo de prueba aleatoria.
   - Los intentos deben ser accesibles en cualquier momento y mostrar la información almacenada.

