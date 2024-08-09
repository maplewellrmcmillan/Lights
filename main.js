import * as THREE from 'three'

//const scene = new THREE.Scene();
//const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.2,1000);

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT);
camera.position.z = 50;
scene.add(camera);

var boxGeometry = new THREE.BoxGeometry(10, 10, 10);
var basicMaterial = new THREE.MeshBasicMaterial({color: 0x0095DD});
var cube = new THREE.Mesh(boxGeometry, basicMaterial);
scene.add(cube);
cube.rotation.set(0.4, 0.2, 0);

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();

function animate(){
     requestAnimationFrame(animate);

     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;

     renderer.render(scene, camera);

}
animate();
