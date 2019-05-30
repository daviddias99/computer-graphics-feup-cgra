class MyBirdHead extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initMaterials();
        this.initBuffers();
	}
	initBuffers() {
        this.cube = new MyUnitCubeQuad(this.scene);
        this.sphere = new MySphere(this.scene, 20);
        this.pyramid = new MyPyramid(this.scene, 4);
        this.eye = new MySphere(this.scene, 20);
    }

    initMaterials(){
        
    }

	display() {
        this.scene.pushMatrix();
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.4, 0, 0);
        this.scene.rotate(- Math.PI / 2, 0, 0, 1);
        this.scene.translate(0, -0.5, 0);
        this.scene.scale(0.3, 0.4, 0.3);
        this.pyramid.display();
        this.scene.popMatrix();

        let eyesAng = Math.PI * 35 / 180;

        this.scene.pushMatrix();        
        this.scene.translate(Math.cos(eyesAng) - 0.02, 0.3, Math.sin(eyesAng) - 0.02);
        this.scene.rotate(- eyesAng, 0, 1, 0);
        this.scene.scale(0.05, 0.2, 0.2);
        this.eye.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(Math.cos(eyesAng) - 0.02, 0.3, - Math.sin(eyesAng) - 0.02);
        this.scene.rotate(eyesAng, 0, 1, 0);
        this.scene.scale(0.05, 0.2, 0.2);
        this.eye.display();
        this.scene.popMatrix();
    }
}