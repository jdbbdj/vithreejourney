import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

//controls
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
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
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
            aspect: window.innerWidth / window.innerHeight,
        }

        const camera = new THREE.PerspectiveCamera(75, sizes.aspect, 0.1, 1000)

        window.addEventListener('resize', () => {
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()

            renderer.setSize(sizes.width, sizes.height)
        })
        const controls = new OrbitControls(camera, canvas)
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(sizes.width, sizes.height)
        document.body.appendChild(renderer.domElement)

        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)

        camera.position.z = 5

        controls.enableDamping = true
        function animate() {
            controls.update()
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
        }

        animate()
    }

    resize() {}

    update() {}
}
