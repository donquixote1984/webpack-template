export default class BaseScene {
	
	renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
	scene = new THREE.Scene();

	light = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.9 ); 

	controls = new THREE.OrbitControls( this.camera );

	constructor() {
		this.initRenderer();
		this.initCamera();
		this.initLight();
		this.drawScene();
		this.render();
	}

	initRenderer() {
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild(this.renderer.domElement );
	}

	render() {
		console.log('render');
		this.renderer.render(this.scene, this.camera);
		this.controls.update();
		requestAnimationFrame(this.render.bind(this));
	}

	initCamera() {
		this.camera.position.set( 0, 100, 0);
	}

	initLight(light) {
		const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
				//hemiLight.color.setHSL( 0.6, 1, 0.6 );
				//hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
				hemiLight.position.set( 200, 200, 0 );
				this.scene.add( hemiLight );


				//

				const dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
				dirLight.color.setHSL( 0.1, 1, 0.95 );
				dirLight.position.set( 100, 100, 100 );
				dirLight.position.multiplyScalar( 30 );
				this.scene.add( dirLight );
	}

	drawScene() {}
}