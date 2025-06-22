import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const canvas = document.getElementById('canvas');

// scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// camera
const camera = new THREE.PerspectiveCamera(100, window.innerHeight/window.innerWidth, 0.1,1000)
camera.position.z=5;

// object
const geometry = new THREE.DodecahedronGeometry(0.8,0)
const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive:"#468585" });
const dodecahedran = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2)
const material2 = new THREE.MeshStandardMaterial({ color: '#B4B4B3', emissive: "#B4B4B3" });
const box = new THREE.Mesh(boxGeometry, material2);
box.position.y = -1.5;

scene.add(dodecahedran);
scene.add(box);

// light
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);

// renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true
// controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.enablePan = true;

//add animations
function animate(){
    requestAnimationFrame(animate)
    dodecahedran.rotation.x += 0.01;
    dodecahedran.rotation.y += 0.01;
    dodecahedran.rotation.z += 0.01;
    
    box.rotation.y = 0.005
    controls.update();
    renderer.render(scene, camera);
}

// handle window resizing
window.addEventListener('resize',()=>{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight);
})
animate()