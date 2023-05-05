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

        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)

        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        const aspectRatio = window.innerWidth / window.innerHeight
        const camera2 = new THREE.OrthographicCamera( //left indicates the negative
            aspectRatio * -1,
            //right which is positive
            aspectRatio * 1, //top
            (aspectRatio * 1) / 2, //bottom which indicates negative
            (aspectRatio * -1) / 2,
            0.1,
            100
        )
        camera.position.z = 5
        camera2.position.z = 5
        const helper = new THREE.CameraHelper(camera2)
        scene.add(helper)

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
            camera.position.set(
                Math.sin(cursor.x * Math.PI * 2) * 2,
                cursor.y * 3,
                Math.cos(cursor.x * Math.PI * 2) * 2
            )
            camera.lookAt(cube.position)
            renderer.render(scene, camera)
            requestAnimationFrame(animate)
        }

        animate()
    }

    resize() {}

    update() {}
}
