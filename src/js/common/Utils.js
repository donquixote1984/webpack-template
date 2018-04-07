export const loadModel = (path, name) => {

	return new Promise((resolve) => {
		const mtlLoader = new THREE.MTLLoader();
		const objLoader = new THREE.OBJLoader();
		if (path) {
			mtlLoader.setPath(path);
			objLoader.setPath(path)	;
		}

		mtlLoader.load(name + '.mtl', (materials) => {
			objLoader.setMaterials(materials);
			objLoader.load(name + '.obj', (obj) => {

				obj.traverse( child => {
			    	if (child instanceof THREE.Mesh) {
			        child.castShadow = true;
			        child.receiveShadow = true;
			    	}
				});
				resolve(obj);
			});
		});
	});
	
}