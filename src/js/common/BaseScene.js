export default class BaseScene {
	
	renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
	scene = new THREE.Scene();

	controls = new THREE.OrbitControls( this.camera );
	animate = [];
	constructor() {
		this.initRenderer();
		this.initCamera();
		this.initLight();
		this.drawScene();
		this.render();
	}

	initRenderer() {
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		document.body.appendChild(this.renderer.domElement );
	}

	render() {
		this.renderer.render(this.scene, this.camera);
		this.controls.update();
		this.animate.forEach(func=>func());
		requestAnimationFrame(this.render.bind(this));
	}

	addAnimateFunc(func) {
		this.animate.push(func);
	}

	initCamera() {
		this.camera.position.set( 0, 100, 0);
	}

	initLight(light) {
		const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.4 );
				//hemiLight.color.setHSL( 0.6, 1, 0.6 );
				hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
				hemiLight.position.set( 200, 200, 0 );
				this.scene.add( hemiLight );


				//

				const dirLight = new THREE.DirectionalLight( 0xffffff, .9 );
				dirLight.target = this.scene;
				dirLight.color.setHSL( 0.1, 1, 0.95 );
				dirLight.position.set( 5, 10, 10 );
				dirLight.castShadow = true;
				dirLight.receiveShadow= true;
				dirLight.position.multiplyScalar( 30 );

				var d = 1000;
				dirLight.shadow.camera.left = -d;
				dirLight.shadow.camera.right = d;
				dirLight.shadow.camera.top = d;
				dirLight.shadow.camera.bottom = -d;

				dirLight.shadow.camera.far = 3500;
				dirLight.shadow.camera.near = 1;

				// define the resolution of the shadow; the higher the better, 
				// but also the more expensive and less performant
				dirLight.shadow.mapSize.width = 2048;
				dirLight.shadow.mapSize.height = 2048;


				this.scene.add( dirLight );
	}

	drawScene() {}
}