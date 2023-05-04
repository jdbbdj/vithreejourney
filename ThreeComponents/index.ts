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

        //Groups

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
        //CAMERA
        //one render per one camera
        //switch camera whenever you want
        //parameters would be PerspectiveCamera(pov, aspect ratio)
        //huge pov you can see far left and far right
        //small pov seeing through a scope but very narrow
        //aspect ration is the width/height
        const sizes = {
            width: 800,
            height: 600,
        }

        //camera position
        const aspect = sizes.width / sizes.height
        const camera = new THREE.PerspectiveCamera(75, aspect)
        camera.position.z = 10
        camera.position.x = 1
        camera.position.y = 1

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
    }

    resize() {}

    update() {}
}
