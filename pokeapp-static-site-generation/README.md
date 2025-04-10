![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![styles](https://img.shields.io/badge/nextUI-purple?style=for-the-badge&logo=json&logoColor=white)
![NodeJS](https://img.shields.io/badge/nodejs-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/axios-orange?style=for-the-badge&logo=axios&logoColor=white)

<div>&nbsp;</div>
<div>&nbsp;</div>

# Aplicación Next.Js - Pokemon API Static

Creacion de proyecto de tarjetas de personajes **POKEMON** con uso del API `PokeAPI` , en el cual se ponen en practica tecnicas de construccion estaticas del lado del servidor como: `Incremental Static Generation (ISG)` e `Incremental Static Regeneration (ISR)`.  Asi como tambien se pusieron en practica los siguientes principios:

Elaborado en Next.Js `v12.3.4`, React `v17.0.2`, NextUI `v1.0.2-beta.2`, carga de datos desde API externa `PokeAPI`.

**pokeapi-static**
[DEMO](https://rgomez-next-pokeapi-ssg.vercel.app/)

**pokeapi-incremental-static**
[DEMO](https://rgomez-next-pokeapi-incremental-static.vercel.app/)

<div>&nbsp;</div>


## Screenshots del proyecto

<img src="./public/img/capture_1.png" alt="drawing" style="width:700px;"/>

<img src="./public/img/capture_2.png" alt="drawing" style="width:700px;"/>

<img src="./public/img/capture_3.png" alt="drawing" style="width:700px;"/>

<img src="./public/img/capture_4.png" alt="drawing" style="width:300px;"/>


## Descripción del proyecto
<div>&nbsp;</div>


**1) Propiedades y funciones de Next,js**
   - Control general del documento mendiante el archivo `_document.tsx` con la propiedad `DocumentContext`

   - Ejecucion del lado del servidor `getStaticProps` ,`getStaticPaths`,

   - Uso de propiedades de componentes `FC`, `<NextPage>`, `<Image>`, `<Html>`, `<Head>`, `<Main>`, `<NextScript>`

  - Creacion de paginas dinamicas `[id]`

  - Uso de variables de entorno `.env`
    
  - Manejo de tipado `interface`, `type`

<div>&nbsp; </div>

**2) Propiedades y funciones de React JS**
- Propiedades de React JS: `useEffect`,  `useState`, `useRouter`.

<div>&nbsp; </div>


**3) Actividades y acciones atraves de API**
- Manejo de libreria de conexion API con `axios`
  
- Creacion de CRUD con `API Rest Full` de Next.js

<div>&nbsp; </div>


**4) Librerias externas y de componentes**

- Uso de librerias externas `canvas-confetti`

- Uso de componentes Next/UI `<Row>`, `<Text>`, `<Image>`, `<Button>`, `<Container>`, `<Spacer>`, `<Link>`, `<Card>, <Card.Body>, <Card.Header>`, `<Grid>`, `<createTheme>`

- Uso de `drag and drop`

<div>&nbsp; </div>
<div>&nbsp; </div>



## Como levantar proyecto
    npm run dev    (modo desarrollo)
    npm run start  (despues de hacer build)
<div>&nbsp; </div>


## Exportar proyecto - Build
Ejecute el comando `npm run build` para exportar el proyecto. Al exportar el proyecto se almacenarán en el directorio `.next`.

    npm run build


