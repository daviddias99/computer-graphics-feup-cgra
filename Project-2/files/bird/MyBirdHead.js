class MyBirdHead extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initMaterials();
        this.initBuffers();
	}
	initBuffers() {
        this.cube = new MyUnitCubeQuad(this.scene);
        this.sphere = new MySphere(this.scene, 20);
    }

    initMaterials(){
        
    }

	display() {
        this.scene.pushMatrix();
        this.sphere.display();
        this.scene.popMatrix();
    }
}
    