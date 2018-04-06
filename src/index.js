import BaseScene from './js/common/BaseScene';

import Floor from './js/common/Floor';
import Block from  './js/block/Block';
import Grass from './js/grass/Grass';
import {load}from './js/resource/Resource';
export default class CoupangScene extends BaseScene {
	drawScene() {
		load().then(() => {
			new Block(this);
		})
	}
}

new CoupangScene();