import {mesh} from '../resource/Resource';
export default class Cloud {
	CLOUD_NUM = 20;
	BOUNDARY = 550;
	cloudMesh = [
			mesh.cloud1,
			mesh.cloud2,
			mesh.cloud3,
			mesh.cloud4]
		

	clouds = [];
	constructor(context) {

		for (let i = 0 ;i < this.CLOUD_NUM; i++) {
			const cloud = this.getRandomCloud();
			cloud.castShadow = true;
			cloud.position.x += Math.random()*this.BOUNDARY;
			cloud.position.z += Math.random()*this.BOUNDARY;
			this.clouds.push({
				cloud,
				speedX: Math.random()*.1,
				speedY: Math.random()*.1
			});

			context.scene.add(cloud);
		}

		context.addAnimateFunc(() => {
			this.clouds.forEach(cloudObj => {
				cloudObj.cloud.position.x -= cloudObj.speedX;
				if (cloudObj.cloud.position.x <= 0 ) {
					cloudObj.cloud.position.x = Math.random()*this.BOUNDARY;
				}
				cloudObj.cloud.position.z -= cloudObj.speedY;
				if (cloudObj.cloud.position.z  <= 0 ) {
					cloudObj.cloud.position.z = Math.random()*this.BOUNDARY;
				}
			});
		});
	}


	getRandomCloud(){
		return this.cloudMesh[Math.floor(Math.random() * this.cloudMesh.length)].clone();
	}

}