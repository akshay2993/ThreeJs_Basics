import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Camera
const camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innerHeight, 0.1, 1000)

// Renderer
const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

// Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1)

const material = new THREE.MeshBasicMaterial({color: 0x00ff00})

const cube = new THREE.Mesh(geometry, material)

scene.add(cube)

camera.position.z = 5

function animate () {
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  requestAnimationFrame(animate)

  renderer.render(scene, camera)
}

animate()