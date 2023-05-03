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

        //redcube
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        //color could be string :"red"; could be hex: ##ff0000; or could be the most accurate a threejs class 0xff00000
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
        const mesh = new THREE.Mesh(geometry, material)
        //shows the box on the screen
        scene.add(mesh)
        //but it will not show on this point we need camera

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
        const aspect = sizes.width / sizes.height
        const camera = new THREE.PerspectiveCamera(75, aspect)
        camera.position.z = 3
        scene.add(camera)

        //at this point the object will not show still because we need to render it
        const renderer = new THREE.WebGLRenderer()
        //setsize of renderer
        renderer.setSize(sizes.width, sizes.height)
        //finds the canvas
        document.body.appendChild(renderer.domElement)

        //renders
        renderer.render(scene, camera)
    }

    resize() {}

    update() {}
}
