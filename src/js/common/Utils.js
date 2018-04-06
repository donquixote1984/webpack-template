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
				resolve(obj);
			});
		});
	});
	
}