import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import gsap from 'gsap'

const canvas = document.querySelector('canvas.webgl')
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(2)
// document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(90, sizes.width/sizes.height, 0.1, 1000 )

// 3d ball

const ballGeometry = new THREE.SphereGeometry(3, 64, 64)
const ballMaterial = new THREE.MeshStandardMaterial({color: '#44d461'})
const ball = new THREE.Mesh(ballGeometry, ballMaterial)

scene.add(ball)

camera.position.set(0, 0, 10)

// Axes helper
// const axesHelper = new THREE.AxesHelper(5,5,5)
// scene.add(axesHelper)

//light
const light = new THREE.DirectionalLight( 0xffffff, 1, 100 )
light.position.set(0, 10, 10)
scene.add( light )

//orbit controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = false
controls.autoRotate = true


function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    controls.update()
}

animate()

window.addEventListener('resize', (e) => {
    sizes.width = window.innerWidth,
    sizes.height = window.innerHeight

    camera.aspect = sizes.width/sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
})

// Gsap timeline
const tl = new gsap.timeline({defaults: {duration: 1}})
tl.fromTo(ball.scale, {x: 0, y:0, z: 0}, {x: 1, y: 1, z: 1})
tl.fromTo('nav', {y: '-100%'}, {y: '0%'})
tl.fromTo('h2', {opacity : 0}, {opacity: 1})

// Change color
let mouseDown = false

window.addEventListener('mousedown', () => {mouseDown = true;console.log(mouseDown)})
window.addEventListener('mouseup', () => {mouseDown = false; console.log(mouseDown)})

let rgb = []

window.addEventListener('mousemove', (e) => {
    rgb = [
        Math.round((e.clientX/window.innerWidth)*255),
        Math.round((e.clientY/window.innerHeight)*255),
        155,
    ]
    console.log(rgb)
    // Animate color
    let newColor = new THREE.Color(`rgb(${rgb.join(",")})`)
    gsap.to(ball.material.color, {
        r: newColor.r,
        g: newColor.g,
        b: newColor.b
    })
    // if(mouseDown){
        
    // }
})