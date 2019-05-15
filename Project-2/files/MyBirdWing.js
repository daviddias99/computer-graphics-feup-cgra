class MyBirdWing extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initMaterials();
        this.initBuffers();
	}
	initBuffers() {
        this.rectangle = new MyQuad(this.scene);
        this.triangle = new MyTiangle(this.scene);
    }

    initMaterials(){
        
    }

	display() {
        this.cube.display();
    }
}
    