/**
 * MyFirepit
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFirepit extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initMaterials();
        this.initBuffers();
        
	}
	initBuffers() {

        this.flame = new MyCone(this.scene,10,null,'centered');
        this.log = new MyCylinderWBottoms(this.scene, 15, 5, 5, this.woodMaterial, this.bottomMaterial)
    }


    initMaterials(){

        // wood

        let factorTT = 0.8;
        this.woodMaterial = new CGFappearance(this.scene);
        this.woodMaterial.setAmbient(factorTT, factorTT, factorTT, 1.0);
        this.woodMaterial.setDiffuse(0.3, 0.3, 0.3, 1.0);
        this.woodMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.woodMaterial.setShininess(5.0);  
        this.woodMaterial.loadTexture('images/bark.jpg');
        this.woodMaterial.setTextureWrap('REPEAT', 'REPEAT');

        // bottomWood

        let factorT = 0.6;
        this.bottomMaterial = new CGFappearance(this.scene);
        this.bottomMaterial.setAmbient(factorT, factorT, factorT, 1.0);
        this.bottomMaterial.setDiffuse(0.3, 0.3, 0.3, 1.0);
        this.bottomMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.bottomMaterial.setShininess(4.0);  
        this.bottomMaterial.loadTexture('images/wood_rings.jpg');
        this.bottomMaterial.setTextureWrap('REPEAT', 'REPEAT');

        // fire
  
        this.fireMaterial = new CGFappearance(this.scene);
        this.fireMaterial.setAmbient(factorT, factorT, factorT, 1.0);
        this.fireMaterial.setEmission(0.6, 0.6, 0.6, 1);
        this.fireMaterial.loadTexture('images/fire.jpg');
        this.fireMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
    }


	display() {
        this.scene.pushMatrix();
        
        this.fireMaterial.apply();
        this.scene.scale(0.5,1,0.5);
        this.flame.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.scale(0.35,1.1,0.4);
        this.scene.rotate(Math.PI/8,1,0,0);
        this.flame.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(0,0,0.3);
        this.scene.scale(0.2,0.6,0.3);
        this.scene.rotate(Math.PI/8,1,1,1);
        this.flame.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(0.3,0,0);
        this.scene.scale(0.3,0.53,0.4);
        this.scene.rotate(-Math.PI/7,0,0,1);
        this.flame.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(0.3,0,0.2);
        this.scene.scale(0.2,0.6,0.3);
        this.scene.rotate(-Math.PI/5,-1,0,1);
        this.flame.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(-0.3,0,-0.2);
        this.scene.scale(0.2,0.6,0.3);
        this.scene.rotate(Math.PI/5,-1,0,1);
        this.flame.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

    
        this.scene.translate(-0.2,0.1,+0.2);
        this.scene.scale(0.4,0.3,0.20);
        this.scene.rotate(Math.PI/6,1,0,1);
        this.flame.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

 
        this.scene.translate(0.2,0.1,-0.2);
        this.scene.scale(0.4,0.3,0.20);
        this.scene.rotate(Math.PI/6,1,0,1);
        this.flame.display();


        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(0.25,0.1,-0.4);
        this.scene.rotate(Math.PI/7,0,1,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.scale(0.1,0.15,0.1);
        this.log.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(-0.3,0.1,0.1);
        this.scene.rotate(Math.PI/5,0,1,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.scale(0.1,0.15,0.1);
        this.log.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(-0.5,0.1,-0.1);
        this.scene.rotate(2*Math.PI/3,0,1,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.scale(0.1,0.15,0.1);
        this.log.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(-0.2,0.4,0.3);
        this.scene.rotate(3*Math.PI/6,0.6,0.8,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.scale(0.1,0.15,0.1);
        this.log.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
       
       
        this.scene.popMatrix();

    }
}
    