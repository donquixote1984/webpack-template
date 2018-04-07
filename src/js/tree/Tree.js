import {mesh} from '../resource/Resource';

export default class Tree {
	treeGroup = new THREE.Object3D();
	constructor({random}){

		const treeStyle = [mesh.tree1, mesh.tree2, mesh.tree3, mesh.tree4];
		if (random) {
			const randomTreeNum = Math.floor(Math.random() * 6 + 1);
			for (let i = 0; i< Math.floor(randomTreeNum) ; i++ ) {
				const randomTreeStyle =treeStyle[Math.floor(Math.random() * 4)].clone();

				randomTreeStyle.position.x += Math.random() * 36;
				randomTreeStyle.position.z += Math.random() * 36;

				this.treeGroup.add(randomTreeStyle);
			}
		} else {
			const randomTreeStyle = treeStyle[Math.floor(Math.random() * 4)];
			for (let i = 0; i< 2; i ++) {
				for (let j = 0; j<2; j++) {
					const randomTreeStyleClone = randomTreeStyle.clone();
					randomTreeStyleClone.castShadow = true;
					randomTreeStyleClone.receiveShadow = true;
					randomTreeStyleClone.position.x += (i*36);
					randomTreeStyleClone.position.z += (j*36);
					this.treeGroup.add(randomTreeStyleClone);
				}
			}
		}
	} 
}