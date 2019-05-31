/**
 * MyTreeBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeBranch extends CGFobject {

	constructor(scene, x, y, z, o) {
        super(scene);
        this.x = x;
        this.z = z;
        this.y = y;
        
        this.height = 1;
        this.radius = 0.05;
        this.orientation = o;

        this.initMaterials();
        this.initBuffers();
    }
    
    initMaterials() {

        // wood

        let factorTT = 0.8;
        this.woodMaterial = new CGFappearance(this.scene);
        this.woodMaterial.setAmbient(factorTT, factorTT, factorTT, 1.0);
        this.woodMaterial.setDiffuse(0.3, 0.3, 0.3, 1.0);
        this.woodMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.woodMaterial.setShininess(5.0);  
        this.woodMaterial.loadTexture('images/bark2.jpeg');
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

    }
	initBuffers() {
		this.log = new MyCylinderWBottoms(this.scene, 15, 5, 1, this.woodMaterial, this.bottomMaterial)
		this.leaf = new MyLeaf(this.scene);
    }
	display() {
        this.scene.pushMatrix();
        
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.orientation, 0, 1, 0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.translate(0, -this.height / 2, 0);
        this.scene.scale(this.radius, this.height, this.radius);
        this.log.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.orientation, 0, 1, 0);
        this.scene.translate(this.height/6,0,0);
        this.scene.rotate(-Math.PI/4, 0, 1, 0);
        this.scene.translate(this.height/6,0,0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.scale(this.radius/2, this.height/4, this.radius/2);
        this.scene.translate(0, -this.height / 2, 0);
        this.log.display(); 

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.orientation, 0, 1, 0);
        this.scene.translate(this.height/6,0,0);
        this.scene.rotate(-Math.PI/4, 0, 1, 0);
        this.scene.translate(this.height/6 + 0.15,0.01,0);
        this.scene.scale(0.01, 1, 0.01);
        this.leaf.display();

        this.scene.popMatrix();

    }
}