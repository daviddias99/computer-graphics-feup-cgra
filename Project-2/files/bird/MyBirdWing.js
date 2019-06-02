class MyBirdWing extends CGFobject { 
    
	constructor(scene) {
        super(scene);
        this.initMaterials();
        this.initBuffers();
        this.alfa0 = Math.PI * 28 / 180;
        this.alfa;

        this.time = 0;
        this.last_t = 0;
    }
	initBuffers() {
        this.rectangle = new MyQuad(this.scene);
        this.triangle = new MyTriangle(this.scene);
    }

    initMaterials(){
        
    }

    update(wingRange, wingAng) {        
        this.alfa = this.alfa0 / 2 - wingAng / 2 / wingRange * this.alfa0;
    }

	displayLeft() {
        let alfa = this.alfa;
        let rectangleLength = 0.5;
        let wingWidth = 0.3;

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

    displayRight() {
        let alfa = this.alfa;
        let rectangleLength = 0.5;
        let wingWidth = 0.3;

        this.scene.pushMatrix();
        
        this.scene.rotate(- alfa, 1, 0, 0);
        this.scene.translate(0, 0, rectangleLength / 2);
        this.scene.rotate(- Math.PI / 2, 1, 0, 0);
        this.scene.scale(wingWidth, rectangleLength, 1);
        this.rectangle.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(0, Math.sin(alfa) * rectangleLength, Math.cos(alfa) * rectangleLength);
        this.scene.rotate(alfa, 1, 0, 0);
        this.scene.translate(0, 0, rectangleLength / 2);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(wingWidth / 2, rectangleLength / 2, 1);

        this.triangle.display();

        this.scene.popMatrix();
    }
}
    