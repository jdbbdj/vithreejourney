import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as dat from 'dat.gui'
//Global UTILS
import { gsap } from 'gsap'

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

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )

        const renderer = new THREE.WebGLRenderer()
        const gui = new dat.GUI({ closed: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)

        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)

        //debug
        const parameters = {
            color: 0xff0000,
            spin: () => {
                gsap.to(cube.rotation, {
                    duration: 1,
                    y: cube.rotation.y + 10,
                })
            },
        }
        gui.addColor(parameters, 'color').onChange(() => {
            material.color.set(parameters.color)
        })

        gui.add(parameters, 'spin')
        gui.add(cube.position, 'y').min(-3).max(3).step(0.01).name('Elevation')
        gui.add(material, 'wireframe')
        gui.add(cube, 'visible')

        camera.position.z = 5
        const controls = new OrbitControls(camera, canvas)
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
