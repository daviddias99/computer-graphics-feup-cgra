class MyBirdBody extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initMaterials();
        this.initBuffers();
	}
	initBuffers() {
        this.cube = new MyUnitCubeQuad(this.scene);
    }

    initMaterials(){
        
    }

	display() {
        this.cube.display();
    }
}
    