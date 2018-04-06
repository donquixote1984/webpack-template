import {mesh} from '../resource/Resource';
import Tree from '../tree/Tree';
import Building from '../building/Building';
export default class Block {

	blockNum = 10;

	constructor(context) {
		const obj = mesh.block;
		const grass = mesh.grass;
		for (let i = 0 ; i< this.blockNum; i++) {
			for (let j = 0 ;j< this.blockNum; j ++ ){
				const addGrass = Math.random() < .1;
				const blockObj = new THREE.Object3D();
				blockObj.add(obj.clone());
				if (addGrass){
					const grassClone = grass.clone();
					grassClone.position.x += 30;
					grassClone.position.z +=5;
					blockObj.add(grassClone);

					const tree = new Tree({random: Math.random() > .5});

					blockObj.add(tree.treeGroup);
				} else {
					//building
					const addBuilding = Math.random() < .5;
					if(addBuilding) {
						const building = new Building();
						blockObj.add(building.buildingGroup);
					}
				}

				blockObj.position.x = blockObj.position.x + i * 60;
				blockObj.position.z = blockObj.position.z + j * 60;
				context.scene.add(blockObj);
			}
		}
	}


}