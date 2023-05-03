
### 1 - Basics
- Creating a first scene **1A**
- Adding objects **1B**
- Choosing the right materials **1C**
- Adding textures **1D**
- Animating everything **1E**

### 2 - Traditional Skills
- Creating our own geometries **2A**
- Adding lights and shadows **2B**
- Interacting with 3D objects **2C**
- Adding Particles **2D**

### 3 - Advanced Techniques
- Physics **3A**
- Realistic Renders **3B**
- Writing custom shaders **3C**
- Adding post-processing **3D**
- Creating our own models with Blender **3E**

## WebGL and Three JS

## Three JS 
> is a 3D javascript library that enables developers to create 3D experiences for the web. It works with WebGL, but you can make it work with SVG and CSS but those two are quiete limited, and we wont cover them in this course.

## WebGL
- Javascript API
- Renders triangles at remarkable speed
- Result can be drawn in a "<"canvas">""
- Compatible with most modern browsers
- Uses the Graphic Processsing Unit

>Web GL can also be used with 2D

> The CPU can do calculations really fast but one by one, whilst the GPU is a little slower but can do thousands of ***PARALLEL CALCULATIONS***

> To draw a 3D model, the idea is to draw many triangles at the right position and colorize them so that they will look the way we wanted, the GPU will position at once according to many factors
![image](https://user-images.githubusercontent.com/75722677/235986773-3e7a68cf-b535-4cb2-9d56-12d4c4f15c72.png)

![image](https://user-images.githubusercontent.com/75722677/235986854-93379ab7-44a6-4e1a-9459-c7de008a23bc.png)

>Once the points are placed, the GPU will draw each visible pixel of those triangles. Again, those thousands of pixels will be calculated and drawn in parallel extremely fast
![image](https://user-images.githubusercontent.com/75722677/235986932-0ae98dd1-71fe-4360-8daf-31b33f80a5d0.png)


The instructions to place the points and draw the pixels are written in ***SHADERS***
We provide a bunch of informations to those shaders like the points positions, model
transformations, the camera coordinates and things get positions and colorized the way ***WE WANT***

### WEBGL is so hard
> Drawing a single triangle on the canvas would take at least 100 lines of codes

### Native WebGL benefits from existing at a low level which enables optimizations and more control

## That's why ***THREE JS*** came to the rescue
- is a Javascript Library
- MIT License
- Right above WebGL
- Creator: Ricardo Cabello, aka Mr.doob

# THREEJS DRASTICALLY MAKES THINGS EASIER
- we can still interact with the WebGL and we can create our own shader and provide our own information

>You can find hundreds of examples with public code https://threejs.org/examples/#webgl_tonemapping

- is a link where you can learn things when you cant find tutorials

## First step: Making things work without other libraries,  threejs work the wimplest possible way

### Loading HTML with bare html and script file
> - Go to threejs.org/
> - Click on the ***download*** button
> - Unzip
> - Get the ***three.min.js*** from the ***build/*** folder
> - Always load your three.min.js script before the index.js

![image](https://user-images.githubusercontent.com/75722677/235987042-0bc2e8e4-6c29-4c09-bff5-aef86e9a7a3c.png)

### Exploring ***THREE***
> if you console logged the THREE in the index.js here are the results

![image](https://user-images.githubusercontent.com/75722677/235987105-3a48c6f2-1fd9-4607-8ee6-56a0bdb1fdbb.png)

> **these are classes, but there are also missing classes**

## FIRST SCENE
- A scene will contain ***OBJECTS***
- Some objects
- A camera
- A renderer

### SCENE
- A container
- We put objects models lights, etc, in it
- At some point we ask Three.js to render that scene

> const scene = new THREE.Scene();

here is the result if you console.log that scene

![image](https://user-images.githubusercontent.com/75722677/235987181-f9ee0ae3-f2a9-4b3c-b650-6dee4a036c0a.png)

### OBJECTS
> can be many things

- Primitive geometries
- imported models
- particles
- lights
- etc

> Let's start with a simple red cube

> Note: We need to create a ***MESH***, Combination of **geometry** (the shape) and a **material** (how it looks)

- ***BoxGeometry and MeshBasicMaterial are basics of it***

`THIS IS A CODE`


## Webpack

- Loading three.js with a `<script>` has limitations
- Doesn't include some of the classes
- We need those classes
- We need to run a server to emulate a website and for security reasons

Bundler
- is a tool in which you send Javascript, CSS, HTML, images, Typescript, Stylus, Sass, etc.
- The bundler apply potential modifications and output a web-friendly "bundle"
- Transpile your javascript for old browsers
- Can do more like local server, manage dependencies, improve compatibility, add modules support, optimize files, deploy etc

## Webpack is a bundler
- Most popular
- Handle most of our needs
- Good documentation
- Good community
- Well maintained
- Hard to configure

## Webpack bundler vs Vitejs Bundler

`Unlike traditional bundlers like Webpack or Rollup, the ViteJS bundler operates on a per-module basis, which allows it to quickly rebuild only the parts of the application that have changed during development. This makes the development process faster and more efficient, especially for larger applications that have a lot of dependencies.`

### Why vitejs is applicable for threejs than webpack?

ViteJS is particularly well-suited for Three.js development because of its fast development server and its ability to handle modern web development features like ES modules, TypeScript, and hot module replacement.

Three.js is a popular library for creating 3D graphics and animations on the web, and requires a modern development environment to work with effectively. ViteJS's development server is designed to provide fast and efficient development feedback by only rebuilding the parts of the application that have changed, which can greatly speed up the development process.

In addition, ViteJS has built-in support for modern web development features like ES modules and TypeScript, which are commonly used in Three.js development. This can make it easier to work with Three.js and other modern web technologies in a single project without needing to configure and manage multiple build tools.

Finally, ViteJS also includes built-in support for hot module replacement, which allows changes to be seen in real time without needing to manually refresh the page. This can be particularly useful for Three.js development, where even small changes can require a long rebuild and reload time.

Overall, while Webpack is a powerful and flexible build tool, ViteJS's fast development server and support for modern web development features make it a strong choice for Three.js development.

