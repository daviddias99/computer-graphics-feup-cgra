/**
 * MyHouse
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
        this.circle = new MyRegPolygon(this.scene, 30,1);
    }


    initMaterials(){

        // roof

       
        this.roofMaterial = new CGFappearance(this.scene);
        this.roofMaterial.setAmbient(0.8, 0.8, 0.8, 1.0);
        this.roofMaterial.setDiffuse(0.8, 0.8, 0.8, 1.0);
        this.roofMaterial.setSpecular(0.6, 0.6, 0.6, 1.0);
        this.roofMaterial.setShininess(10.0);  
        this.roofMaterial.loadTexture('images/bark.jpg');
        this.roofMaterial.setTextureWrap('REPEAT', 'REPEAT');

        // walls

      
        this.wallMaterial = new CGFappearance(this.scene);
        this.wallMaterial.setAmbient(0.7, 0.7, 0.7, 1.0);
        this.wallMaterial.setDiffuse(0.8, 0.8, 0.8, 1.0);
        this.wallMaterial.setSpecular(0.4, 0.4, 0.4, 1.0);
        this.wallMaterial.setShininess(7.0);  
        this.wallMaterial.loadTexture('images/wall2.jpg');
        this.wallMaterial.setTextureWrap('REPEAT', 'REPEAT');

        // columns

        this.columnsMaterial = new CGFappearance(this.scene);
        this.columnsMaterial.setAmbient(0.7, 0.7, 0.7, 1.0);
        this.columnsMaterial.setDiffuse(0.8, 0.8, 0.8, 1.0);
        this.columnsMaterial.setSpecular(0.2, 0.2, 0.2, 1.0);
        this.columnsMaterial.setShininess(4.0);  
        this.columnsMaterial.loadTexture('images/columns.jpg');
        this.columnsMaterial.setTextureWrap('REPEAT', 'REPEAT');

        // door

        this.doorMaterial = new CGFappearance(this.scene);
        this.doorMaterial.setAmbient(0.8, 0.8, 0.8, 1.0);
        this.doorMaterial.setDiffuse(0.8, 0.8, 0.8, 1.0);
        this.doorMaterial.setSpecular(0.4, 0.4, 0.4, 1.0);
        this.doorMaterial.setShininess(5);  
        this.doorMaterial.loadTexture('images/door.jpg');
        this.doorMaterial.setTextureWrap('REPEAT', 'REPEAT');

        // windows (square)

        this.windowMaterial = new CGFappearance(this.scene);
        this.windowMaterial.setAmbient(0.4, 0.4, 0.4, 1.0);
        this.windowMaterial.setDiffuse(0.4, 0.4, 0.4, 1.0);
        this.windowMaterial.setSpecular(0.8, 0.8, 0.8, 1.0);
        this.windowMaterial.setShininess(10.0);  
        this.windowMaterial.loadTexture('images/window.jpg');
        this.windowMaterial.setTextureWrap('REPEAT', 'REPEAT');

        // windows (round)

        this.roundWindowMaterial = new CGFappearance(this.scene);
        this.roundWindowMaterial.setAmbient(0.5, 0.5, 0.5, 1.0);
        this.roundWindowMaterial.setDiffuse(0.3, 0.3, 0.3, 1.0);
        this.roundWindowMaterial.setSpecular(1, 1, 1, 1.0);
        this.roundWindowMaterial.setShininess(10.0);  
        this.roundWindowMaterial.loadTexture('images/round_window.jpg');
        this.roundWindowMaterial.setTextureWrap('REPEAT', 'REPEAT');
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

    
        this.scene.pushMatrix();
        this.scene.rotate(0 * Math.PI / 2, 0, 1, 0);
        this.scene.translate(0.6, 0, 0.6);
        this.scene.scale(0.1, 1, 0.1);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(3 * Math.PI / 2, 0, 1, 0);
        this.scene.translate(0.6, 0, 0.6);
        this.scene.scale(0.1, 1, 0.1);
        this.prism.display();
        this.scene.popMatrix();
        

        this.scene.pushMatrix();
        this.scene.translate(-0.4, Math.sqrt(2) / 2, -0.5 - Math.sqrt(2) / 2);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.translate(0, -1.5, 0);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.prism2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.4, Math.sqrt(2) + 0.15, -0.5 - Math.sqrt(2) / 2);
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

        this.windowMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(-1.25, 0.7, -0.495);
        this.scene.scale(0.6, 0.6, 1);
        this.door.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.25, 0.7, -0.505 - Math.sqrt(2));
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.scale(0.6, 0.6, 1);
        this.door.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.45, 0.7, -0.505 - Math.sqrt(2));
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.scale(0.6, 0.6, 1);
        this.door.display();
        this.scene.popMatrix();

        this.roundWindowMaterial.apply();
        this.scene.pushMatrix();

        this.scene.translate(1.105, 1.2, -0.5 - Math.sqrt(2) / 2);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.25, 1, 0.25);
        this.circle.display();
        this.scene.popMatrix();
    }
}
    