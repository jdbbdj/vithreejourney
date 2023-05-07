
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
And for our future reference, we can use this on any fps games where we can rotate the head of the camera rotate left or right which is y, move it up and down which is z, or side by side like pubg which is x or in any order we want

This is an example of gimbal lock

> ![[Pasted image 20230504154442.png]]


This is an example of using the order

>![[Pasted image 20230504154518.png]]

***EULER*** is easy to understand but this axis order can be problematic. This is why the most engines and 3D  softwares use ***Quaternion***

### Quaternion

>Quaternion also expresses a rotation, but in a more mathematical way,
>but remember that the quaternion updates when you change the rotation.

### LookAt method

Object3D instances have a lookAt(...) method which rotates the object so that its `-z` faces the target you provided, The target must be `Vector3`

```
camera.lookAt(new THREE.Vector3(3, 0, 0))

or we can use the Vector3 position of the object

camera.lookAt(mesh.position)

```

![[Pasted image 20230504160525.png]]

>Note: Always keep in mind that this will not by pass the positioning of the camera if you've given it initial x,y,z position it will just add to the look at movement

![[Pasted image 20230504160638.png]]

### Combining Transformations

- We can combine position, rotation, and scale in any order

## Scene Graph

> Sometimes we will create a house, dogs, gardens and realized that those aren't on the right place and take hours to move it

We can put objects inside groups and use position, rotation, and scale on those groups. To do that, use the `Group` class.

```
const group = new THREE.Group()

        scene.add(group)

  

        const cube1 = new THREE.Mesh(

            new THREE.BoxGeometry(1, 2, 1),

            new THREE.MeshBasicMaterial({ color: 0xff0000 })

        )

  

        const cube2 = new THREE.Mesh(

            new THREE.BoxGeometry(1, 2, 1),

            new THREE.MeshBasicMaterial({ color: 0xff0000 })

        )

  

        cube2.position.set(3, 3, 2)

  

        const cube3 = new THREE.Mesh(

            new THREE.BoxGeometry(1, 2, 1),

            new THREE.MeshBasicMaterial({ color: 0xff0000 })

        )

  

        cube3.position.set(1, 2, 3)

  

        group.add(cube1)

        group.add(cube2)

        group.add(cube3)

  

        group.position.x = 3

```


![[Pasted image 20230504162152.png]]


# Animations

- Animating is like doing stop motion
- Move the object
- Take a picture
- Move the object a bit more
- Take apicture and so on

***Most screens run at 60 frames per seconds, but not always. Your animation must look the same regardless of the framerate***

>***We need to update objects and do a render on each frame. We are going to do that in a function and call this function with window.requestAnimationFrame(...)***

### Request Animation Frame

>The purpose of requestAnimationFrame is to call the function provided on the next frame. We are going to call the same function on each new frame.

```

const tick = () => {
	console.log('tick')
	window.requestAnimationFrame(tick)
}

tick()
```

following our pattern, we can move the render.render function on the tick function and also the update of position or rotation or scale to call it each time for 60fps remember - Animating is like doing stop motion->Move the object->Take a picture->Move the object a bit more->Take apicture and so on

```
const tick = () => {
	console.log('tick')
	//move the object
	cube1.rotation.y+=0.03
	//take a picture
	renderer.render(scene, camera)
	window.requestAnimationFrame(tick)
}

tick()
```

### Adapt to the framerate

We need to know how much time it's been since the last tick,
we can use `Date.now()` to get the current timestamp

```
const tick = () => {
	//Current Time
	const time = Date.now()
	//move the object
	cube1.rotation.y+=0.03
	//take a picture
	renderer.render(scene, camera)
	window.requestAnimationFrame(tick)
}

tick()
```

But doing this we can't get the time elapsed from the past time(outside tick), and the currentTime inside the tick, so we need a time ***basis*** for this to get the time elapsed which we can call `delta`


```
 //this will be the basis time

	let time = Date.now()

        const tick = () => {
            //Time
            const currentTime = Date.now()
            //delta
            const delta = currentTime-time;
			//update the time to be the currentTime
			time=currentTime
            console.log(delta)
            //move the object according to delta
            cube1.rotation.y += 0.01*delta
            //take a picture
            renderer.render(scene, camera)
            window.requestAnimationFrame(tick)
        }

        tick()
```

This is a good solution but this will be choppy based on your computer, the animation will align to your framerate.

### Clock method is a built-in solution named Clock

```
 const clock = new THREE.Clock()

        const tick = () => {
			const elapsedTime = clock.getElapsedTime()
            //move the object according to delta
            cube1.rotation.y = elapsedTime
            //take a picture
            renderer.render(scene, camera)
            window.requestAnimationFrame(tick)
        }

        tick()
```

>Note: Clock always starts at 0 and will be in seconds

```
 const clock = new THREE.Clock()

        const tick = () => {
			const elapsedTime = clock.getElapsedTime()
            //move the object according to delta
            cube1.rotation.y = Math.sin(elapsedTime)
            //take a picture
            renderer.render(scene, camera)
            window.requestAnimationFrame(tick)
        }

        tick()
```

We can use the Math.sin() to create a back n forth scenario for rotation and position, the sin function behaves like a wave that has highest positive that comesback to zero and lowest negative that comesback to zero and so on. Also add cos with x property to create a circular motion.

# GSAP Library

>If you want to have more control, create tweens, create timelines, etc. you can use library like `GSAP`


GSAP.to(element/object,{properties})

```
//to on what object that we want to animate

        GSAP.to(cube1.position, {
            //what properties
            x: 2,
            //duration
            duration: 1,
            //delay
            delay: 1,
        })

//to return the object
        GSAP.to(cube1.position, {
            //what properties
            x: 0,
            //duration
            duration: 1,
            //delay
            delay: 2,
        })
```

>Always watch the delay, if you put the same delay it will run the same time, the same time if you remove the delay it will run at the same time

>GSAP has its own tick and runs its own requestAnimationFrame, knowing this we still need an all running requestAnimationFrame and render.render inside our tick function or it will not run the way we want it to.

# Choosing the right solution:
No right answer it depends on the project and your preferences.


# Cameras

>is an abstract class, you're not supposed to use it directly, An abstract class is a class that cannot be instantiated directly and is typically used as a base class to define a set of common properties and methods that derived classes should implement. In JavaScript, you can create a similar abstraction by defining a constructor function and adding abstract methods to its prototype.


```

function Shape() {
  if (this.constructor === Shape) {
    throw new Error("Cannot instantiate abstract class");
  }
}

Shape.prototype.getArea = function() {
  throw new Error("Abstract method not implemented");
};

function Rectangle(width, height) {
  Shape.call(this); // call super constructor.
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};

```


**This means that it is like Object3D that has inheritance of position, rotation, and scale. You need to call the subclass that inherits those properties, types of cameras are: 

- ***ArrayCamera*** render the scene from multiple cameras on specific areas of render, in example the Crash Bandicoot old camera setup
-  ***StereoCamera*** render the scene through two cameras that mimic the eyes to create a parallax effect, in example for devices like VR headset, red and blue glasses or cardboard
- ***CubeCamera*** do 6 renders on all direction of cubes, can render the surrounding for things like environment map, reflection, or shadow map
- ***OrthographicCamera*** render the scene without perspective, no matter how far the object to the camera the object remains the same. 
- ***PerspectiveCamera*** render the scene with perspective

>OrthographicCamera and PerspectiveCamera is widely used, especially for isometric point of view


## PerspectiveCamera

```
const camera = new THREE.PerspectiveCamera(
			//fov
            75,
			//aspect ratio
            window.innerWidth / window.innerHeight,
			//near
            0.1,
			//far
            1000)
```

![[Pasted image 20230505005126.png]]

- FOV(Field of view): Vertical vision angle, in degrees, the height covered of the camera: wider FOV produces `distortion` so be careful, you can use scale to avoid zooming or moving the position of the camera `45 and 75 is quiete a lot`
- Aspect ratio: The width of the render divided by height of the render
> low aspect ratio on ***observing*** camera could result on this, always keep on practice to get the window size and width and use it for a more proportional point of view of your camera ![[Pasted image 20230505010455.png]]
- Camera frustum `near` plane. Default is `0.1` how close the camera can see, object `closer` than near `can't be seen`.
- Camera frustum `far` plane. Default is `1000` how far the camera can see, object `further` than far `can't be seen`.

> Avoid using `0.0001` and `9999999` to prevent `z-fighting`, zfighting is two face on the same location that could result in `glitching`
> 


### CameraHelpers

>this could be effective if you are using two or more camera, in your model. FOV, near, and far could be easily distinguished here. The setup is pretty easy

```
 const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        const camera2 = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.51,
            0.75
        )
        camera2.position.z = 2
        camera2.rotation.y = Math.PI / 2
        camera.position.set(0, 0, 5)
        scene.add(camera2)
        const helper = new THREE.CameraHelper(camera2)
        scene.add(helper)
```

## OrthographicCamera

>differes from the PerspectiveCamera by its `lack of perspective`, objects has the same size regardless of their distance to the camera

***Instead of field of view, we provide how far the camera can see in each direction(`left`, `right`,`top`, and `bottom`), then the `near` and `far`

```
		const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )

        const camera2 = new THREE.OrthographicCamera(
	        //left indicates the negative
			window.innerWidth / -128,
			//right which is positive
            window.innerWidth / 256,
            //top
            window.innerHeight / 32,
            //bottom which indicates negative
            window.innerHeight / -32,
            0.1,
            100
        )
        camera2.position.z = 2
        const helper = new THREE.CameraHelper(camera2)
        scene.add(helper)
```

![[Pasted image 20230505014353.png]]

We can assign our own numbers on left,right,top,and left but doing so it could result on unwanted result, just like this we change the render.render to see the point of view of orthographic camera we get this result, knowing the box is 1,1,1 it becomes rectangular but why?

```
const camera2 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100)
        camera2.position.z = 2
        camera2.position.y = 2
        camera2.position.z = 2
        camera2.lookAt(cube.position)
        const helper = new THREE.CameraHelper(camera2)
        scene.add(helper)
```

![[Pasted image 20230505014812.png]]

`Knowing this, we adjusted something earlier, like the aspect ratio that affects how we see things, so there is also a standard for us to don't disturb this.`

```
const aspectRatio = window.innerWidth / window.innerHeight

const camera2 = new THREE.OrthographicCamera( 
			//left indicates the negative
            aspectRatio * -1,
            //right which is positive
            aspectRatio * 1, //top
            (aspectRatio * 1) / 2, 
            //bottom which indicates negative
            (aspectRatio * -1) / 2,
            0.1,
            100)
        camera2.position.z = 100
        camera2.position.y = 20
        camera2.position.z = 2
        camera2.lookAt(cube.position)
        const helper = new THREE.CameraHelper(camera2)
        scene.add(helper)
```
![[Pasted image 20230505020227.png]]

>Keep in mind that this scenario works with the adjustment of camera position and the top,left etc of the OrthographicCamera that's why you can see it as a cube, once you adjust the chrome size it will be `distorted` even if you refresh this. We'll tackle the refresh resize later.

### Custom Controls

>It's hard to move around, we want to control the camera position with the mouse

Doing these needs some steps:

- First we need the mouse coordinates on the page
>Listen to the mousemove event with `addEventListener` and retrieve the `event.clientX` and `event.clientY`

```
window.addEventListener('mousemove',(e)=>{
console.log(e.clientX,e.clientY)
})
```
***the most left is 0 for X, and the most top is 0 for Y, also you don't need to call this inside the animate or the function with requestAnimationFrame and we can improve the code by storing tis values in correspondence with screen's height and width in percentage representation***

```
const cursor = {
            x: 0,
            y: 0,
            }

        window.addEventListener('mousemove', (e) => {
            cursor.x = e.clientX/window.innerWidth  - 0.5;
            cursor.y = e.clientY/ window.innerHeight - 0.5;
            console.log(cursor);
            })
```


so if the cursor is on the left most part, and it is divided by the screenWidth it will return a very low value `x` as its percentage close to `-0.5` and the most right is close to `0.5`. The same thing on the height `y`, we can use this on `tweens` and `timeline` with `gsap` for `ease`

- Update the camera ***position*** in the ***animate*** function with the cursor coordinates
```
const cursor = {
            x: 0,
            y: 0,
        }

        window.addEventListener('mousemove', (e) => {
            cursor.x = e.clientX / window.innerWidth - 0.5
            cursor.y = e.clientY / window.innerHeight - 0.5
            console.log(cursor)
        })

        function animate() {
            camera.position.set(-cursor.x, cursor.y, 2)
            renderer.render(scene, camera)
            requestAnimationFrame(animate)
        }
```

with this function the box will stick to the center as optical illusion but the real thing  that's happening is you're moving the camera with respect to its percentage, thinking you're moving the box on the screen, we removed the lookAt to override the whole process

```
const cursor = {
    x: 0,
    y: 0,
}

window.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX / window.innerWidth - 0.5
    cursor.y = -(e.clientY / window.innerHeight - 0.5)
    console.log(cursor)
})



function animate() {
    camera.position.set(cursor.x * 3, cursor.y * 3, 2)
    camera.lookAt(cube.position)
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}
```

we can adjust the negative value of y on the event listener to avoid modifying things on animate function and for consistencies that we can reuse those  values on other part of our code. We can also put multiplier to add some speed on our hover of camera, and return the lookAt after setting the camera position to make sure the box is always on center

## BUT, doing these will just only hover in front of the cube and we can't see its back. So we need our previous thing we've done so far

- Use sin and cosine to create a circular movement
```
function animate() {

		camera.position.set(
			Math.sin(cursor.x * Math.PI * 2) * 2,
			cursor.y * 3,
			Math.cos(cursor.x * Math.PI * 2) * 2
		)
		camera.lookAt(cube.position)
		renderer.render(scene, camera)
		requestAnimationFrame(animate)
        }
```


# BUILT IN CONTROLS

>ThreeJS has their own built in controls that we can use with similar results after all of these things  we've done

- **Device Orientation Controls**

>This will automatically retrieve the device orientation if your device, OS, and browser allow it and rotate the camera accordingly, Useful in cases to create immersive universes or VR experiences

- Fly Controls

>enable moving the camera like if you were on a spaceship, you canrotate on all 3 axes, go forward and go backward

- First Person Control

>Like a fly controls but cannot change the up axis. Its useful for playing but cannot do barrel roll, got nothing to do with FPS games

- Pointer Lock Controls

>uses the pointer lock javascript API, hard to use and almost only handles the pointer lock and camera rotation, could go forward upward, jump, and can be controllled by key strokes

- Orbit Controls
>similar to the controls we made with more features

- Transform Controls
>nothing to do with th camera, move the object

- Drag controls
> nothing to do the camera, move the object on the plane facing the camera

***We will on ly use Orbit Controls but feel free to test the other classes***




## Orbit Controls

- Going back on our code, we will just disable the updating of camera inside our animate function.





