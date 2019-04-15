/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
	constructor(scene) {
		super(scene);
        this.initBuffers();
        this.initMaterials();
	}
	initBuffers() {
        this.pyramid = new MyPyramid(this.scene, 4, 10);
        this.cube = new MyUnitCubeQuad(this.scene);
        this.prism = new MyPrism(this.scene, 8, 10);
    }


    initMaterials(){

        // roof

        let factorTT = 0.8;
        this.pyramidMaterial = new CGFappearance(this.scene);
        this.pyramidMaterial.setAmbient(factorTT, factorTT, factorTT, 1.0);
        this.pyramidMaterial.setDiffuse(factorTT, factorTT, factorTT, 1.0);
        this.pyramidMaterial.setSpecular(factorTT, factorTT, factorTT, 1.0);
        this.pyramidMaterial.setShininess(10.0);  
        this.pyramidMaterial.loadTexture('images/bark.jpg');
        this.pyramidMaterial.setTextureWrap('REPEAT', 'REPEAT');

        // columns

        let factorT = 0.8;
        this.prismMaterial = new CGFappearance(this.scene);
        this.prismMaterial.setAmbient(factorT, factorT, factorT, 1.0);
        this.prismMaterial.setDiffuse(factorT, factorT, factorT, 1.0);
        this.prismMaterial.setSpecular(factorT, factorT, factorT, 1.0);
        this.prismMaterial.setShininess(10.0);  
        this.prismMaterial.loadTexture('images/david.jpg');
        this.prismMaterial.setTextureWrap('REPEAT', 'REPEAT');

    }


	display() {
        this.scene.pushMatrix();
        
        this.scene.translate(0, 0.5, 0);

        this.cube.display();
        
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.scene.translate(0, 0.5, 0);

        this.pyramidMaterial.apply();
        this.pyramid.display();

        this.scene.popMatrix();
        
        this.prismMaterial.apply();
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
    