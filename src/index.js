import BaseScene from './js/common/BaseScene';

import Floor from './js/common/Floor';
import Block from  './js/block/Block';
import FerrisWheel from './js/ferriswheel/FerrisWheel';
import Grass from './js/grass/Grass';
import {load}from './js/resource/Resource';
import Cloud from './js/cloud/Cloud';
export default class CoupangScene extends BaseScene {
	drawScene() {
		load().then(() => {
			new Block(this);
			new Cloud(this);
			new FerrisWheel(this);

	})
	}
}

new CoupangScene();
/*
const scene = new THREE.Scene();
scene.fog = new THREE.Fog( scene.background, 1, 5000 );

const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
				hemiLight.color.setHSL( 0.6, 1, 0.6 );
				hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
				hemiLight.position.set( 0, 50, 0 );
				scene.add( hemiLight );

scene.background = new THREE.Color().setHSL( 0.6, 0, 1 );
const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
const controls = new THREE.OrbitControls( camera );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement );
camera.position.set( 100, 100, 100);
const dirLight = new THREE.DirectionalLight( 0xffffff, .9 );
dirLight.target = scene;
dirLight.color.setHSL( 0.1, 1, 0.95 );
dirLight.position.set( 50, 50, 50 );
dirLight.castShadow = true;
dirLight.receiveShadow= true;
dirLight.position.multiplyScalar( 30 );
const dirLightHeper = new THREE.DirectionalLightHelper( dirLight, 10 ) 
				scene.add( dirLightHeper );

dirLight.castShadow = true;
				dirLight.shadow.mapSize.width = 1024;
				dirLight.shadow.mapSize.height = 1024;
				var d = 1000;
				dirLight.shadow.camera.left = -d;
				dirLight.shadow.camera.right = d;
				dirLight.shadow.camera.top = d;
				dirLight.shadow.camera.bottom = -d;

				dirLight.shadow.camera.far = 3500;
				dirLight.shadow.camera.near = 1;
scene.add( dirLight );


const floorGeo = new THREE.BoxGeometry( 100, 2, 100 );
const floorMat = new THREE.MeshLambertMaterial({color:0xffffff});
const floor = new THREE.Mesh(floorGeo, floorMat);

floor.receiveShadow = true;
floor.castShadow = true;

scene.add(floor);

const cubeGeo = new THREE.BoxGeometry(20, 20,20);
const cubeMesh= new THREE.MeshLambertMaterial({color:0xAe0000})
const cube = new THREE.Mesh(cubeGeo, cubeMesh);
cube.position.y += 20;
cube.castShadow = true;
cube.receiveShadow = true;
scene.add(cube);
render();
function render() {
	renderer.render(scene, camera);
	controls.update();
	requestAnimationFrame(render);
}*/