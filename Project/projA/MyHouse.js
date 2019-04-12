/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
	constructor(scene) {
		super(scene);
        this.initBuffers();
	}
	initBuffers() {
        this.pyramid = new MyPyramid(this.scene, 4, 10,'images/bark.jpg');
        this.cube = new MyUnitCubeQuad(this.scene);
        this.prism = new MyPrism(this.scene, 8, 10,'images/david.jpg');
    }
    /**
     * Applies the normal vizualization for each element of the tangram
     */
    enableNormalViz() {
        this.pyramid.enableNormalViz();
        this.cube.enableNormalViz();
        this.prism.enableNormalViz();
    }

    /**
     * Disables the normal vizualization for each element of the tangram
     */
    disableNormalViz() {
        this.pyramid.disableNormalViz();
        this.cube.disableNormalViz();
        this.prism.disableNormalViz();
    }

	display() {
        this.scene.pushMatrix();
        
        this.scene.translate(0, 0.5, 0);

        this.cube.display();
        
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.scene.translate(0, 0.5, 0);

        this.pyramid.display();

        this.scene.popMatrix();
        
        for (let i = 0; i < 4; i++) {
            this.scene.pushMatrix();
            this.scene.rotate(i * Math.PI / 2, 0, 1, 0);
            this.scene.translate(0.6, 0, 0.6);
            this.scene.scale(0.1, 1, 0.1);
            this.prism.display();
            this.scene.popMatrix();
        }
    }
}
    