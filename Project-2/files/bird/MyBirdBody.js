class MyBirdBody extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initMaterials();
        this.initBuffers();
	}
	initBuffers() {
        this.cylinder = new MyCylinder(this.scene, 5);
        this.cone = new MyCone(this.scene, 5);
        this.triangle = new MyTriangle(this.scene);
        this.quad = new MyQuad(this.scene);

        this.coneLength = 0.2;
        this.cylinderLength = 0.4;
        this.tailLength = 0.1;
    }

    initMaterials(){
        
    }

	display() {
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 0, 0, 0.5);
        this.scene.scale(1, this.cylinderLength, 1);
        this.scene.translate(0, -0.5, 0);
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.cylinderLength / 2 + this.coneLength / 2, 0, 0);   
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);        
        this.scene.scale(1, this.coneLength, 1);
        this.scene.rotate(-Math.PI / 5, 0, 1, 0);
        this.scene.translate(0, -0.5, 0);
        this.cone.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(- this.cylinderLength / 2 - this.coneLength / 2, 0, 0);   
        this.scene.rotate(Math.PI / 2, 0, 0, 1);        
        this.scene.scale(1, this.coneLength, 1);
        this.scene.translate(0, -0.5, 0);
        this.cone.display();
        this.scene.popMatrix();

        this.displayTail();
    }

    displayTail() {
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.3 * Math.cos(Math.PI / 4));
        this.scene.rotate(Math.PI / 4, 1, 0, 0);
        this.scene.translate(- this.coneLength - this.cylinderLength / 2, 0.3, 0);
        this.scene.scale(this.tailLength, 0.3, 1);
        this.triangle.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0, 0, - 0.3 * Math.cos(Math.PI / 4));
        this.scene.rotate(- Math.PI / 4, 1, 0, 0);
        this.scene.translate(- this.coneLength - this.cylinderLength / 2, 0.3, 0);
        this.scene.scale(this.tailLength, 0.3, 1);
        this.triangle.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.3 * Math.cos(Math.PI / 4));
        this.scene.rotate(-Math.PI / 4, 1, 0, 0);
        this.scene.translate(- this.coneLength - this.cylinderLength / 2, 0.15, 0);
        this.scene.scale(this.tailLength * 2, 0.3, 1);
        this.quad.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0, 0, - 0.3 * Math.cos(Math.PI / 4));
        this.scene.rotate(Math.PI / 4, 1, 0, 0);
        this.scene.translate(- this.coneLength - this.cylinderLength / 2, 0.15, 0);
        this.scene.scale(this.tailLength * 2, 0.3, 1);
        this.quad.display();
        this.scene.popMatrix();
        
    }
}
    