/**
 * MyPool
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyPool extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initMaterials();
        this.initBuffers();
        
	}
	initBuffers() {

        this.water = new MyQuad(this.scene);
        this.tank = new MyPrismWBottoms(this.scene, 4, 5, 5, this.stoneMaterial, this.stoneMaterial)
    }


    initMaterials(){

        // stone

        let factorTT = 0.8;
        this.stoneMaterial = new CGFappearance(this.scene);
        this.stoneMaterial.setAmbient(factorTT, factorTT, factorTT, 1.0);
        this.stoneMaterial.setDiffuse(factorTT, factorTT, factorTT, 1.0);
        this.stoneMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.stoneMaterial.setShininess(10.0);  
        this.stoneMaterial.loadTexture('images/rock_wall.jpg');
        this.stoneMaterial.setTextureWrap('REPEAT', 'REPEAT');

        // water

        let factorT = 0.6;
        this.waterMaterial = new CGFappearance(this.scene);
        this.waterMaterial.setAmbient(factorT, factorT, factorT, 1.0);
        this.waterMaterial.setDiffuse(0.3, 0.3, 0.3, 1.0);
        this.waterMaterial.setSpecular(0.8, 0.8, 1, 1.0);
        this.waterMaterial.setShininess(10.0);  
        this.waterMaterial.loadTexture('images/water.png');
        this.waterMaterial.setTextureWrap('REPEAT', 'REPEAT');

    }


	display() {
        this.scene.pushMatrix();
        
        
        this.scene.scale(2,1,1);
        this.scene.translate(0,Math.sqrt(2)/2,-Math.sqrt(2)/2);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.scene.rotate(Math.PI/4,0,1,0);
    
        this.tank.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(0,0,8);
        this.scene.scale(2,1,1);
        this.scene.translate(0,Math.sqrt(2)/2,-Math.sqrt(2)/2);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.scene.rotate(Math.PI/4,0,1,0);
        this.tank.display();
        
        this.scene.popMatrix();
        this.scene.pushMatrix();

       
        this.scene.translate(0,0,-Math.sqrt(2));
        this.scene.scale(1,1,1.88);
        this.scene.translate(Math.sqrt(2)/2,Math.sqrt(2)/2,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.rotate(Math.PI/4,0,1,0);

        this.tank.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(-10-Math.sqrt(2),0,-Math.sqrt(2));
        this.scene.scale(1,1,1.88);
        this.scene.translate(Math.sqrt(2)/2,Math.sqrt(2)/2,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.rotate(Math.PI/4,0,1,0);

        this.tank.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(Math.sqrt(2)+2,0.7,-Math.sqrt(2));
        
        this.scene.scale(12,1,7);
        this.scene.translate(-Math.sqrt(2)/2,0,Math.sqrt(2)/2);
        
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.waterMaterial.apply()
        this.water.display();

        this.scene.popMatrix();

    }
}
    