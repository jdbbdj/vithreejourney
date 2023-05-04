import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
//Global UTILS

//assets

//Reusable

export default class ThreeModel {
    canvas: any
    static instance: any

    constructor(canvas: any) {
        if (ThreeModel.instance) {
            return ThreeModel.instance
        }
        ThreeModel.instance = this
        this.canvas = canvas

        const scene = new THREE.Scene()

        //Animations
        const cube1 = new THREE.Mesh(
            new THREE.BoxGeometry(1, 2, 1),
            new THREE.MeshBasicMaterial({ color: 0xff0000 })
        )

        scene.add(cube1)
        const sizes = {
            width: 800,
            height: 600,
        }

        //camera position
        const aspect = sizes.width / sizes.height
        const camera = new THREE.PerspectiveCamera(75, aspect)
        camera.position.z = 3

        scene.add(camera)

        //distance

        //at this point the object will not show still because we need to render it
        const renderer = new THREE.WebGLRenderer()
        //setsize of renderer
        renderer.setSize(sizes.width, sizes.height)
        //finds the canvas
        document.body.appendChild(renderer.domElement)

        //axes helper
        const axesHelper = new THREE.AxesHelper(5)
        scene.add(axesHelper)

        //renders
        renderer.render(scene, camera)

        //animations

        //CLOCK METHOD
        const clock = new THREE.Clock()
        const tick = () => {
            const elapsedTime = clock.getElapsedTime()

            cube1.rotation.y = elapsedTime
            //take a picture
            renderer.render(scene, camera)
            window.requestAnimationFrame(tick)
        }

        tick()
    }

    resize() {}

    update() {}
}
