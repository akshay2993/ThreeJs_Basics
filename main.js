import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Camera
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000)

// Renderer
const renderer = new THREE.WebGLRenderer({canvas})

renderer.setSize(window.innerWidth, window.innerHeight)

// document.body.appendChild(renderer.domElement)

//Box Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1)

const material = new THREE.MeshBasicMaterial({color: 0x00ff00})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

//Plane Geometry
const planeGeometry = new THREE.PlaneGeometry(30, 30 )
const planeMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.DoubleSide})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)

plane.rotation.x = -0.5*Math.PI

scene.add(plane)

//Sphere Geometry
const sphereGeometry = new THREE.SphereGeometry(4, 50, 50)
const sphereMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff, wireframe: true})
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

scene.add(sphere)

//Grid Helper
const gridHelper = new THREE.GridHelper(30, 30)
scene.add(gridHelper)

// Axes helper
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

// camera.position.z = 5
// camera.position.x = 2
camera.position.set(-10, 30, 30)

//OrbitControls
const orbit = new OrbitControls(camera, renderer.domElement)
orbit.update()

function animate () {
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  requestAnimationFrame(animate)

  renderer.render(scene, camera)
}

animate()