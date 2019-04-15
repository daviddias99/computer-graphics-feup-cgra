/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initMaterials();
        this.initBuffers();
	}
	initBuffers() {
        this.pyramid = new MyPyramidWBottoms(this.scene, 4, 10, 0.5, this.roofMaterial, this.wallMaterial);
        this.cube = new MyUnitCubeQuad(this.scene, this.wallMaterial, this.wallMaterial, this.wallMaterial);
        this.prism = new MyPrism(this.scene, 8, 10);
        this.prism2 = new MyPrismWBottoms(this.scene, 4, 10, 3, this.wallMaterial, this.wallMaterial);
        this.prism3 = new MyPrismWBottoms(this.scene, 3, 10, 3, this.roofMaterial, this.wallMaterial);

        this.door = new MyQuad(this.scene);
    }


    initMaterials(){

        // roof

        let factorTT = 0.8;
        this.roofMaterial = new CGFappearance(this.scene);
        this.roofMaterial.setAmbient(factorTT, factorTT, factorTT, 1.0);
        this.roofMaterial.setDiffuse(factorTT, factorTT, factorTT, 1.0);
        this.roofMaterial.setSpecular(factorTT, factorTT, factorTT, 1.0);
        this.roofMaterial.setShininess(10.0);  
        this.roofMaterial.loadTexture('images/bark.jpg');
        this.roofMaterial.setTextureWrap('REPEAT', 'REPEAT');

        // columns

        let factorT = 0.8;
        this.wallMaterial = new CGFappearance(this.scene);
        this.wallMaterial.setAmbient(factorT, factorT, factorT, 1.0);
        this.wallMaterial.setDiffuse(factorT, factorT, factorT, 1.0);
        this.wallMaterial.setSpecular(factorT, factorT, factorT, 1.0);
        this.wallMaterial.setShininess(10.0);  
        this.wallMaterial.loadTexture('images/wall2.jpg');
        this.wallMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.columnsMaterial = new CGFappearance(this.scene);
        this.columnsMaterial.setAmbient(factorT, factorT, factorT, 1.0);
        this.columnsMaterial.setDiffuse(factorT, factorT, factorT, 1.0);
        this.columnsMaterial.setSpecular(factorT, factorT, factorT, 1.0);
        this.columnsMaterial.setShininess(10.0);  
        this.columnsMaterial.loadTexture('images/columns.jpg');
        this.columnsMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.doorMaterial = new CGFappearance(this.scene);
        this.doorMaterial.setAmbient(factorT, factorT, factorT, 1.0);
        this.doorMaterial.setDiffuse(factorT, factorT, factorT, 1.0);
        this.doorMaterial.setSpecular(factorT, factorT, factorT, 1.0);
        this.doorMaterial.setShininess(10.0);  
        this.doorMaterial.loadTexture('images/door.jpg');
        this.doorMaterial.setTextureWrap('REPEAT', 'REPEAT');

    }


	display() {
        
        this.scene.pushMatrix();
        
        this.scene.translate(0, 0.5, 0);

        this.cube.display();
        
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.scene.translate(0, 0.5, 0);


        this.pyramid.display();

        this.scene.popMatrix();

        this.columnsMaterial.apply();

        for (let i = 0; i < 4; i++) {
            this.scene.pushMatrix();
            this.scene.rotate(i * Math.PI / 2, 0, 1, 0);
            this.scene.translate(0.6, 0, 0.6);
            this.scene.scale(0.1, 1, 0.1);
            this.prism.display();
            this.scene.popMatrix();
        }

        this.scene.pushMatrix();
        this.scene.translate(-0.1, Math.sqrt(2) / 2, -0.5 - Math.sqrt(2) / 2);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.translate(0, -1.5, 0);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.prism2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.1, Math.sqrt(2) + 0.15, -0.5 - Math.sqrt(2) / 2);
        this.scene.scale(1, 0.5, 1);
        this.scene.rotate(Math.PI / 2, 0, 0, 1)
        this.scene.translate(0, -1.5, 0);
        this.scene.rotate(Math.PI / 2 + Math.PI / 6, 0, 1, 0);
        this.prism3.display();
        this.scene.popMatrix();
    
        this.doorMaterial.apply();
        this.scene.pushMatrix();
       this.scene.translate(0, 0.35, 0.51); 
       this.scene.scale(0.4, 0.7, 1);
       this.door.display();
       this.scene.popMatrix();
    }
}
    