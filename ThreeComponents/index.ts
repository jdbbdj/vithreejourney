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
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        const controls = new OrbitControls(camera, canvas)
        const renderer = new THREE.WebGLRenderer()
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setSize(sizes.width, sizes.height)
        document.body.appendChild(renderer.domElement)

        /***************BUFFER GEOMETRY****************************/
        const geometry = new THREE.BufferGeometry()
        const count = 100
        const positionArray = new Float32Array(count * 3 * 3)

        for (let i = 0; i < count * 3 * 3; i++) {
            positionArray[i] = (Math.random() - 0.5) * 3
        }

        const positionAttribute = new THREE.BufferAttribute(positionArray, 3)
        geometry.setAttribute('position', positionAttribute)

        const material = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
            wireframe: true,
        })
        const triangle = new THREE.Mesh(geometry, material)
        scene.add(triangle)
        /************END OF BUFFER GEOMETRY*********************** */

        camera.position.z = 5
        window.addEventListener('dblclick', () => {
            if (!document.fullscreenElement) {
                renderer.domElement.requestFullscreen()
            } else {
                document.exitFullscreen()
            }
        })
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
