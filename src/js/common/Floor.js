import {FLOOR_WIDTH} from './Constrants';
export default class Floor {
	
	constructor(context) {
		const planeGeo = new THREE.PlaneGeometry( FLOOR_WIDTH, FLOOR_WIDTH, 1);
		const material = new THREE.MeshBasicMaterial( {color: 0xeeeeee, side: THREE.DoubleSide} );
		const planeMesh = new THREE.Mesh( planeGeo, material );
		context.scene.add(planeMesh);
	}
}