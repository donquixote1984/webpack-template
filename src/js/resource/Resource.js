import {loadModel} from '../common/Utils';

export const mesh = {};

export const load = ()=>{

	return Promise.all([
		loadGrass(),
		loadBlock(),
		loadTree(),
		loadBuilding(),
		loadCloud()
	]);
}

const loadGrass = () => {
	return new Promise(resolve=>{
		loadModel('/grass/', 'grass').then(obj => {
			obj.scale.set(8,8,8);
			obj.position.y = obj.position.y + 1;
			mesh.grass = obj;
			resolve(obj);
		});
	});
}

const loadBlock = () => {
	return new Promise(resolve => {
		loadModel('/block/', 'block2').then(obj => {
			obj.position.set(0,0,0);
			mesh.block = obj;
			resolve(obj);
		});
	});
}

const loadTree = () => {
	return Promise.all([
		new Promise(resolve=> {
			loadModel('/tree/','tree1').then(obj=>{
				obj.position.x -= 10;
				obj.position.z += 5;
				mesh.tree1 = obj;
				resolve(obj);
			})
		}),
		new Promise(resolve=> {
			loadModel('/tree/','tree2').then(obj=>{
				obj.position.x -= 8;
				obj.position.z += 8;
				mesh.tree2 = obj;
				resolve(obj);
			})
		}),
		new Promise(resolve=> {
			loadModel('/tree/','tree3').then(obj=>{
				obj.position.x -= 8;
				obj.position.z += 8;
				mesh.tree3 = obj;
				resolve(obj);
			})
		}),
		new Promise(resolve=> {
			loadModel('/tree/','tree4').then(obj=>{
				obj.position.x -= 8;
				obj.position.z += 8;
				mesh.tree4 = obj;
				resolve(obj);
			})
		})
	])
}

const loadCloud = () => {
	return Promise.all([
		new Promise(resolve=>{
			loadModel('/cloud/', 'cloud1').then(obj => {
				obj.position.y += 70;
				obj.scale.set(12,12,12);
				obj.castShadow = true;
				mesh.cloud1 = obj;
				resolve(obj);
			})
		}),
		new Promise(resolve=>{
			loadModel('/cloud/', 'cloud2').then(obj => {
				obj.position.y += 90;
				obj.scale.set(12,12,12);
				obj.castShadow = true;
				mesh.cloud2 = obj;
				resolve(obj);
			})
		}),
		new Promise(resolve=>{
			loadModel('/cloud/', 'cloud3').then(obj => {
				obj.position.y += 70;
				obj.scale.set(12,12,12);
				obj.castShadow = true;
				mesh.cloud3 = obj;
				resolve(obj);
			})
		}),
		new Promise(resolve=>{
			loadModel('/cloud/', 'cloud4').then(obj => {
				obj.position.y += 80;
				obj.scale.set(12,12,12);
				obj.castShadow = true;
				mesh.cloud4 = obj;
				resolve(obj);
			})
		})
	])
}
const loadBuilding = () => {
	return Promise.all([
		new Promise(resolve => {
			loadModel('/building/', 'shop1').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.x -=4;
				obj.position.z += 11;
				obj.receiveShadow =true;
				mesh.shop1 = obj;
				resolve(obj);
			});
		}),
		new Promise(resolve => {
			loadModel('/building/', 'shop2').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.x -=4;
				obj.position.z += 11;
				mesh.shop2 = obj;
				resolve(obj);
			});
		}),
		new Promise(resolve => {
			loadModel('/building/', 'shop3').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.x -=4;
				obj.position.z += 11;
				mesh.shop3 = obj;
				resolve(obj);
			});
		}),
		new Promise(resolve => {
			loadModel('/building/', 'shop4').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.x -=4;
				obj.position.z += 11;
				mesh.shop4 = obj;
				resolve(obj);
			});
		}),
		new Promise(resolve => {
			loadModel('/building/', 'shop5').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.x -=4;
				obj.position.z += 11;
				mesh.shop5 = obj;
				resolve(obj);
			});
		}),
		new Promise(resolve => {
			loadModel('/building/', 'big1').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.x += 20;
				obj.position.z += 20;
				mesh.big1 = obj;
				resolve(obj);
			});
		}),
		new Promise(resolve => {
			loadModel('/building/', 'big_house1').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.x += 20;
				obj.position.z += 20;
				mesh.big_hourse1 = obj;
				resolve(obj);
			});
		}),
		new Promise(resolve => {
			loadModel('/building/', 'big_house2').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.x += 20;
				obj.position.z += 18;
				
				mesh.big_hourse2 = obj;
				resolve(obj);
			});
		}),new Promise(resolve => {
			loadModel('/building/', 'big_house3').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.z += 17;
				
				mesh.big_house3 = obj;
				resolve(obj);
			});
		}),
		new Promise(resolve => {
			loadModel('/building/', 'mall').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.x += 27;
				obj.position.z += 7;
				obj.scale.set(.9, .9, .9)
				mesh.mall = obj;
				resolve(obj);
			});
		}),
		new Promise(resolve => {
			loadModel('/building/', 'apartment_small').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.x -= 3;
				obj.position.z += 12;

				mesh.apartment_small = obj;
				resolve(obj);
			});
		}),
		new Promise(resolve => {
			loadModel('/building/', 'baber_shop').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.x -=4;
				obj.position.z += 12;

				mesh.baber_shop = obj;
				resolve(obj);
			});
		}),

		new Promise(resolve => {
			loadModel('/building/', 'gym').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.x -= 3;
				obj.position.z += 12;

				mesh.gym = obj;
				resolve(obj);
			});
		}),
		new Promise(resolve => {
			loadModel('/building/', 'office_large_blue').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.x -= 2;
				obj.position.z += 13;

				mesh.office_large_blue = obj;
				resolve(obj);
			});
		}),
		new Promise(resolve => {
			loadModel('/building/', 'office_large_brown').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.x += 20;
				obj.position.z += 20;

				mesh.office_large_brown = obj;
				resolve(obj);
			});
		}),
		new Promise(resolve => {
			loadModel('/building/', 'office_large_grey').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.x += 20;
				obj.position.z += 20;

				mesh.office_large_grey = obj;
				resolve(obj);
			});
		}),
		new Promise(resolve => {
			loadModel('/building/', 'office_small_grey').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.x -= 2;
				obj.position.z += 13;

				mesh.office_small_grey = obj;
				resolve(obj);
			});
		}),
		new Promise(resolve => {
			loadModel('/building/', 'store_corner1').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.x -=3;
				obj.position.z += 11;

				mesh.store_corner1 = obj;
				resolve(obj);
			});
		}),
		new Promise(resolve => {
			loadModel('/building/', 'office_step1').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.x -=3;
				obj.position.z += 11;

				mesh.office_step1 = obj;
				resolve(obj);
			});
		}),
		new Promise(resolve => {
			loadModel('/building/', 'coffee_shop').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.x -=3;
				obj.position.z += 13;

				mesh.coffee_shop = obj;
				resolve(obj);
			});
		}),
		new Promise(resolve => {
			loadModel('/building/', 'station').then(obj=>{
				obj.receiveShadow =true;
				obj.castShadow = true;
				obj.position.z += 17;

				mesh.station = obj;
				resolve(obj);
			});
		})
	])
}
