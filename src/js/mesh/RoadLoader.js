import {loadModel} from '../common/Utils';
export default class RoadLoader {
	static load() {
		loadModel('/road/', 'road_cell').then((obj) => {
			this.mesh.road = obj;	
		});
		loadModel('/road/', 'road_corner').then((obj) => {
			this.mesh.corner = obj;
		});
	}
}