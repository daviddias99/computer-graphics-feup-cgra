class MyBirdWing extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initMaterials();
        this.initBuffers();
	}
	initBuffers() {
        this.rectangle = new MyQuad(this.scene);
        this.triangle = new MyTriangle(this.scene);
    }

    initMaterials(){
        
    }

	display() {
        let alfa = Math.PI * 18 / 180;
        let rectangleLength = 0.6;
        let wingWidth = 0.4;

        this.scene.pushMatrix();
        
        this.scene.rotate(alfa, 1, 0, 0);
        this.scene.translate(0, 0, - rectangleLength / 2);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(wingWidth, rectangleLength, 1);
        this.rectangle.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(0, Math.sin(alfa) * rectangleLength, - Math.cos(alfa) * rectangleLength);
        this.scene.rotate(-alfa, 1, 0, 0);
        this.scene.translate(0, 0, -rectangleLength / 2);
        this.scene.rotate(- Math.PI / 2, 1, 0, 0);
        this.scene.scale(wingWidth / 2, rectangleLength / 2, 1);

        this.triangle.display();

        this.scene.popMatrix();
    }
}
    