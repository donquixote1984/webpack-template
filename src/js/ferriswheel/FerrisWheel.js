import {METAL_MATERIAL_RED, METAL_MATERIAL_BLUE, PLASTIC_MATERIAL_BLUE, METAL_MATERIAL_WHITE} from '../resource/Materials';
import {mesh} from '../resource/Resource';
export default class FerrisWheel {
	SEAT_NUM = 12;
	ferrisWheel = new THREE.Object3D();
	holder= new THREE.Object3D();

	overallMesh = new THREE.Object3D();

	seatSample = new THREE.Object3D();

	seats = [];

	randomSeatColor = [
		0x2c7d,
		0x858c98,
		0x346AFf,
		0xff3b00,
		0xfffe00
	]


	

	blueMeterial = new THREE.MeshPhongMaterial({
		color:0x156289,
		emissive: 0x072534,
		opacity:.8,
		shading:THREE.FlatShading,
	});

	getRandomColor(){
		return this.randomSeatColor[Math.floor(Math.random()*this.randomSeatColor.length)];
	}
	constructor(context, z) {
		this.context = context;
		this.rolling = Math.random()>.5;
		this.initWheel();
		this.initHolder();
		this.initSeat();

		this.initEnv();
		this.overallMesh.position.x += 10 ;
		this.overallMesh.position.y += 28;
		this.overallMesh.position.z += 25;
		this.overallMesh.receiveShadow = true;
		this.overallMesh.castShadow = true;
	}

	getMesh() {
		return this.overallMesh;
	}
	initWheel(){
		const geometry = new THREE.TorusGeometry( 20, .7, 5, 50 );

		var torus = new THREE.Mesh( geometry, PLASTIC_MATERIAL_BLUE);

		

		const torus1 = torus.clone();
		const torus2 = torus.clone();

		torus1.position.z += 2.2;
		torus2.position.z -= 2.2;
		this.ferrisWheel.add(torus1);
		this.ferrisWheel.add(torus2);


		const centerGeo = new THREE.CylinderGeometry( 1.5, 1.5, 8, 30 );
		
		const center = new THREE.Mesh(centerGeo, METAL_MATERIAL_RED);
		center.rotation.x = Math.PI/2;
		this.ferrisWheel.add(center);



		const tubeGeo = new THREE.CylinderBufferGeometry( .2, .2,39, 4);
		const tubeSample = new THREE.Mesh(tubeGeo, METAL_MATERIAL_WHITE);
		const  tubeSide1 = tubeSample.clone();
		tubeSide1.receiveShadow = true;
		tubeSide1.castShadow = true;
		tubeSide1.position.z += 2;

		for(let i = 0;i < 4 ; i++) {
			const _tubeSide1 = tubeSide1.clone();
			_tubeSide1.rotation.z += Math.PI/4*i;
			this.ferrisWheel.add(_tubeSide1);
		}

		const tubeSide2 = tubeSample.clone();

		tubeSide2.receiveShadow = true;
		tubeSide2.castShadow = true;
		tubeSide2.position.z -=2;
		tubeSide2.rotation.z += Math.PI/8;
		for (let i = 0 ;i< 4; i++) {
			const _tubeSide2 = tubeSide2.clone();
			_tubeSide2.rotation.z += Math.PI/4*i;
			this.ferrisWheel.add(_tubeSide2);
		}
		this.overallMesh.add(this.ferrisWheel);

		if (this.rolling) {
		this.context.addAnimateFunc(() => {
			this.ferrisWheel.rotation.z += Math.PI/360;
		});
		}
	}

	initHolder() {
		const geometry = new THREE.TorusGeometry( 2, .3, 5, 20 );
		const material = new THREE.MeshPhongMaterial( { color: 0xffff00 } );

		const torus = new THREE.Mesh( geometry, material );
		const torusSide1 = torus.clone();
		const torusSide2 = torus.clone();

		torusSide1.receiveShadow = true;
		torusSide1.castShadow = true;

		torusSide1.position.z +=3.9;
		torusSide2.position.z -=3.9;

		torusSide2.receiveShadow = true;
		torusSide2.castShadow = true;

		this.holder.add(torusSide1);
		this.holder.add(torusSide2);

		const torusGeo = new THREE.TorusGeometry( 18, 1, 20, 3 );
		const torusMaterial = new THREE.MeshPhongMaterial( { color: 0xffff00 } );

		const torus1 = new THREE.Mesh( torusGeo, METAL_MATERIAL_RED );

		const torus1Side1 = torus1.clone();
		torus1Side1.position.z += 4;
		torus1Side1.rotation.z += Math.PI/2;
		torus1Side1.position.y -= 15;
		this.holder.add(torus1Side1);

		const torus1Side2 = torus1Side1.clone();
		torus1Side2.position.z -=8;
		this.holder.add(torus1Side2);

		

		const planeGeo = new THREE.BoxGeometry( 40, 2, 15 );
		const planeMesh = new THREE.Mesh(planeGeo, new THREE.MeshLambertMaterial({color:0x2d2d2d}));
		planeMesh.position.y -= 24;
		this.holder.add(planeMesh);

		this.overallMesh.add(this.holder);
	}

	createSeat() {
		const seatSample = new THREE.Object3D();

		const seatTopGeo = new THREE.CylinderBufferGeometry(4,8,3,6);
		const color = this.getRandomColor();
		const seatTopMat= new THREE.MeshPhongMaterial({
			color:color,
			emissive: 0x072534,
			flatShading: true,
		});
		const topMesh = new THREE.Mesh(seatTopGeo, seatTopMat);
		seatSample.add(topMesh);
		const footMesh = topMesh.clone();
		footMesh.position.y -= 15;
		footMesh.rotation.z += Math.PI;
		seatSample.add(footMesh);

		const seatGeo = new THREE.CylinderBufferGeometry(7,7,13,6);
		const seatMaterial =  new THREE.MeshPhongMaterial({
			color,
			transparent: true,
			emissive: 0x072534,
			opacity:.7,
			flatShading: true
		});
		const seatMesh = new THREE.Mesh(seatGeo, seatMaterial);
		seatMesh.position.y -=  8;
		seatSample.add(seatMesh);
		seatSample.scale.set(.3, .3, .3);
		seatSample.position.y += 2;
		return seatSample;
	}
	initSeat() {

		for(let i= 0; i< this.SEAT_NUM; i++) {
			const seat = this.createSeat();
			seat.position.y = 20 * Math.sin(Math.PI*i/6) + 2;
			seat.position.x = 20 * Math.cos(Math.PI*i/6);
			this.seats.push({seat, thetha: Math.PI * i/6});
			this.overallMesh.add(seat);
		}

		const deltaDegree = Math.PI/360;
		if (this.rolling) {
		this.context.addAnimateFunc(() => {
			this.seats.forEach((seatObj) => {
				seatObj.thetha += deltaDegree;
				seatObj.seat.position.set(0,0,0);
				seatObj.seat.position.y = 20 * Math.sin(seatObj.thetha) + 2;
				seatObj.seat.position.x = 20 * Math.cos(seatObj.thetha);
				//seat.position.y += 20*Math.sin(deltaDegree);
				//seat.position.x += 28*Math.cos(deltaDegree);
			});
		})
		}
	}


	initEnv() {
		const grass = mesh.grass.clone();
		grass.position.x += 20;
		grass.position.y -= 28;
		grass.position.z -= 20;
		this.overallMesh.add(grass);
	}
}