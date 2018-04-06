import {mesh} from '../resource/Resource';
export default class Building {

	buildingGroup = new THREE.Object3D();

	constructor() {
		this.group1();
	}

	group1() {
		//officelarge_blue
		//building shop
		//SM_Building_StoreSmall_Video
		//SM_Building_Shop_01
		//SM_Building_OfficeSmall_Grey
		//SM_Building_Apartment_Small3
		//SM_Building_BarberShop
		//SM_Building_StoreCorner_Drug2

		const officeLarge = mesh.office_large_blue.clone();
		officeLarge.rotation.y = - Math.PI/2;
		this.buildingGroup.add(officeLarge);
		const shop1 = mesh.shop1.clone();
		shop1.position.z += 16;
		shop1.rotation.y = -Math.PI/2;
		this.buildingGroup.add(shop1);
		const storeCorner = mesh.store_corner1.clone()
		storeCorner.position.z += 28;
		this.buildingGroup.add(storeCorner);

		const officeSmall = mesh.office_small_grey.clone();
		officeSmall.position.x += 12;
		officeSmall.position.z += 24;
		this.buildingGroup.add(officeSmall);

		const apartmentSmall = mesh.apartment_small.clone();

		apartmentSmall.position.x += 27;
		apartmentSmall.position.z += 25;
		apartmentSmall.rotation.y = Math.PI/2;
		this.buildingGroup.add(apartmentSmall);

		const baberShop = mesh.baber_shop.clone();
		baberShop.position.x += 27;
		baberShop.rotation.y = Math.PI/2;
		this.buildingGroup.add(baberShop);

	}

	group2() {
		//SM_Building_Shop_03
		//SM_Building_CoffeeShop
		//SM_Building_CoffeeShop
		//SM_Building_Apartment_Large
		//SM_Building_OfficeMedium_Grey
		//SM_Building_Shop_05
		//SM_Building_Shop_3
		//SM_Building_StoreSmall_Pawn2
	}

	group3() {

	}

	group4() {

	}

	group5() {

	}

	group6() {

	}
}