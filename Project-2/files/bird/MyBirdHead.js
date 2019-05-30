class MyBirdHead extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initMaterials();
        this.initBuffers();
	}
	initBuffers() {
        this.cube = new MyUnitCubeQuad(this.scene);
        this.sphere = new MySphere(this.scene, 20);
        this.pyramid = new MyCone(this.scene, 4, 4, 'centered');
        this.eye = new MySphere(this.scene, 20);
    }

    initMaterials(){
        this.beak = new CGFappearance(this.scene);
        this.beak.setAmbient(1, 1, 1, 1);
        this.beak.setDiffuse(1, 1, 1, 1);
        this.beak.setSpecular(1, 1, 1, 1);
        this.beak.setShininess(10);
        this.beak.loadTexture('images/bico.jpg');
        this.beak.setTextureWrap('REPEAT', 'REPEAT');   
        this.eyeMaterial = new CGFappearance(this.scene);
        this.eyeMaterial.setAmbient(1, 1, 1, 1);
        this.eyeMaterial.setDiffuse(1, 1, 1, 1);
        this.eyeMaterial.setSpecular(1, 1, 1, 1);
        this.eyeMaterial.setShininess(10);
        this.eyeMaterial.loadTexture('images/eye.jpg');
        this.eyeMaterial.setTextureWrap('REPEAT', 'REPEAT');   
    }

	display() {
        this.scene.pushMatrix();
        this.sphere.display();
        this.scene.popMatrix();

        this.beak.apply();

        this.scene.pushMatrix();
        this.scene.translate(1.4, 0, 0);
        this.scene.rotate(- Math.PI / 2, 0, 0, 1);
        this.scene.translate(0, -0.5, 0);
        this.scene.scale(0.3, 0.4, 0.3);
        this.pyramid.display();
        this.scene.popMatrix();

        let eyesAng = Math.PI * 35 / 180;

        this.eyeMaterial.apply();

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