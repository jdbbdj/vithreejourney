
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

# Transform Objects

 `There are 4 properties to transform objects`
 - Position(X,Y,Z)
 - Scale(X,Y,Z)
 - Rotation(X,Y,Z)
 - Quaternion

 `All classes that inerit from Object3D possess those properties like PerspectiveCamera or Mesh`

You can see ineritance on top of the Three.js documentation

### Review: Inheritance

`Inheritance is a fundamental concept in object-oriented programming (OOP) that allows one object to inherit properties and methods from another object. In JavaScript, inheritance is implemented using prototype-based inheritance, which means that objects can inherit from other objects by extending their prototype chain.`

Example:

```
// Define a "Person" class with a "name" property and a "greet" method
class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Define a "Student" class that inherits from "Person"
class Student extends Person {
  constructor(name, school) {
    super(name);
    this.school = school;
  }
  
  study() {
    console.log(`${this.name} is studying at ${this.school}`);
  }
}

// Create a new "Student" object and call its methods
const john = new Student('John', 'Harvard');
john.greet(); // outputs "Hello, my name is John"
john.study(); // outputs "John is studying at Harvard"

```

`So, in a way, you can think of inheritance as a way to reuse code from a superclass and extend it in a new subclass.`

### Going back Perspective Camera inherits from Object3D

soo the camera could access the transform properties such as scale, rotate, location, and the quartern properties.

Those properties will be compiled in matrices, you don't need to understand matrices.

### Setup with Vitejs
1. npm create vite . "on the designated folder" but if you're on the mother folder npm create vite foldername/projectname
2. Select Vanilla for the old approach of class components for threejs, the react would be good for react three fiber
3. Select Javascript or Typescript
4. `Optional: Create eslintrc prettierrc git files` for proper code practices
5. Delete unneeded files such as counter.ts and other header or icon on the index.html
6. Create a div container for canvas assign a class for canvas and div container, this should be above the scripts where you will call your main.ts
7. Create a component folder that will encapsulates all of the threejs components/classes of your 3D project

![[Pasted image 20230504012311.png]]
8. On the main.ts call the class and assign it on the canvas class of the project based on your index.html
![[Pasted image 20230504012415.png]]
9. Run `npm run dev`



### Move objects

Position has 3 properties x,y, and z

X - Horizontal: left and right
Y - Vertical: up and down
Z - Horizontal and Vertical Cross Product : near and far, forward and backward

always take note that on blender it woud be 


X - Horizontal: left and right
Z - Vertical: up and down
Y - Horizontal and Vertical Cross Product : near and far, forward and backward

soo 
THREEJS(X,Z,Y)
BLENDER(X,Y,Z)

always take this in note on yourself to create a manageable origin


![[Pasted image 20230504015334.png]]

if you have a mesh that has position of (0,0,0) but has dimensions of 1,1,1
your camera will starts at 0,0,0 resulting that you can't see a thing. But if you move it(the camera) it will show like this

![[Pasted image 20230504013826.png]]

if our theory is right if we adjust the position of camera to be (1,2,1) this represents (x,z,y)

it will move to the right

![[Pasted image 20230504013940.png]]

we can also set the properties in batch for example 

```
mesh.position.set(1,2,-3)
```
![[Pasted image 20230504020117.png]]

>Note: the position setting could be anywhere on t he code, and it will take effect as long as it doesnt past the line renderer.render(scene,camera)

`Position is not just an object but a Vector3 which has many useful methods. You can get the length of a vector.`

Which means that you can accurately position something from something. Just like what I've said if you have 2 vectors and you want to position it in front you can do the cross product method to place it in front or behind the object. This is mostly used for *Orthographic Cameras* on following lines

**mesh.position.length()** determines the `distance` of the `scene` to the object's position  

mesh position length is `2.449489742783178` for `mesh.position.set(1,2,-1)`

what if we change the z axis to -1 `mesh.position.set(1,2,-3)` the length would be `3.7416573867739413`

so the nearer `-1` the object's position to the scene, the lower the length, whilst the higher the distance the higher the length

### Getting distance of two position
`For example the distance of your camera to the object, we can use the distanceTo() `

```
mesh.position.distanceTo(camera.position);
```


```
### mesh.position.normalize();
```
> this sets the .length() into 1 no matter where is the position of the object on the scene

![[Pasted image 20230504030203.png]]

## AXES HELPER

`Virtual representation of axes in threejs for visual help`

```
const axesHelper = new THREE.AxesHelper(length:void);
scene.add(axesHelper)
```

![[Pasted image 20230504092512.png]]

> the length props could be void, but could also be assigned with a value


### Scale

**Just like position you can set the scale one by one by mesh.scale.x, y or z equal to designated value, or pass a list of values as props for mesh.scale.set***

```
mesh.scale.x = 1.5

or

mesh.scale.set(1.5, 1.5, 1.5)

mesh.scale.set(x,z,y) is also the pattern
```

>Note that position and scale are all Vector3 of threejs which could be modified by x,y,z properties with the same syntaxes

### Rotation and Quaternion

**Just like position you can set the rotate one by one by mesh.rotate.x, y or z equal to designated value, or pass a list of values as props for mesh.rotate.set but the value would be degrees and could be represented by pi***

**Quaternion is also another method of rotating objects but we'll deal with it later**


### Rotation is Euler
> this is quiete different than Vector3 for it uses degrees, imagine putting a stick through your objects center in the axis direction and then rotating that object in that stick

![[Pasted image 20230504145858.png]]

to be exact the value on

```
mesh.rotation.x = 1 semi rotation

mesh.rotation.x = 1.570795 half rotation

mesh.rotation.x = 2.3561925 quarter rotation

mesh.rotation.x = 3.14159 full rotation

but to get the exact number of 3.14159 we can use

Math.PI that is built in inside the javascript and available in any bundler

mesh.rotation.x = Math.PI/4

mesh.rotation.x = Math.PI/2

mesh.rotation.x = (Math.PI*3)/4

mesh.rotation.x = Math.PI

```

the x is a float number where the full rotation is equal to 3.14159 which is equal to pi value

>Be careful, when you rotate on an axis, you might also rotate the other axis. The rotation goes by default in the `x`, `y`, and `z` order and you can get strange result like an axis not working anymore. This is called gimbal lock.

Gimbal lock - is when the object has been rotated first on a single axis, the order would be x,y,z. Or it will have a lot of unnecessary rotation or the rotate function will not occur.

>You can change this order by using reorder(...) method 

```
object.rotation.reorder('yxz')
```

to bypass the default (xyz) order. Do this before changing the rotation



