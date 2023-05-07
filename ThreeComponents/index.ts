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

        const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2)
        //vertices and create our own geometry
        const vertices = [
            // front
            { pos: [-1, -1, 1], norm: [0, 0, 1], uv: [0, 0] },
            { pos: [1, -1, 1], norm: [0, 0, 1], uv: [1, 0] },
            { pos: [-1, 1, 1], norm: [0, 0, 1], uv: [0, 1] },
        ]

        const positions = []
        const normals = []
        const uvs = []
        for (const vertex of vertices) {
            positions.push(...vertex.pos)
            normals.push(...vertex.norm)
            uvs.push(...vertex.uv)
        }

        const geometry2 = new THREE.BufferGeometry()
        const positionNumComponents = 3
        const normalNumComponents = 3
        const uvNumComponents = 2
        geometry2.setAttribute(
            'position',
            new THREE.BufferAttribute(
                new Float32Array(positions),
                positionNumComponents
            )
        )
        geometry2.setAttribute(
            'normal',
            new THREE.BufferAttribute(
                new Float32Array(normals),
                normalNumComponents
            )
        )
        geometry2.setAttribute(
            'uv',
            new THREE.BufferAttribute(new Float32Array(uvs), uvNumComponents)
        )

        const material2 = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
        })
        const plane = new THREE.Mesh(geometry2, material2)
        scene.add(plane)
        const material = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
            wireframe: true,
        })
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)

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
