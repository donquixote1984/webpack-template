import {ROAD_NUM, FLOOR_WIDTH, ROAD_WIDTH} from '../common/Constrants';
import {loadModel} from '../common/Utils';
export default class Road {
	
	roadMesh = new THREE.Object3D();
	constructor(context) {
		this.context = context;
		loadModel('/road/', 'road_cell').then((obj) => {
			this.context.scene.add(obj);
			for (let i = 0; i < 8 ; i++) {
				const mesh1 = obj.clone();
				const mesh2 = obj.clone();
				mesh1.position.x = mesh1.position.x + 5 * i;
				mesh2.position.x = mesh2.position.x + 5 * i;

				mesh2.position.x = mesh2.position.x + 5;
				mesh2.position.z = mesh2.position.z + 20;
				mesh2.rotation.y = Math.PI; 

				this.roadMesh.add(mesh1);
				this.roadMesh.add(mesh2);

				this.context.scene.add(this.roadMesh);
			}
		});
	}


}