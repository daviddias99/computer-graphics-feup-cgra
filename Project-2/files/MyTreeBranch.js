/**
 * MyTreeBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeBranch extends CGFobject {

	constructor(scene, x, z) {
        super(scene);
        this.x = x;
        this.z = z;
        
        this.height = 1.2;
        this.radius = 0.15;
        this.orientation = Math.PI * 45 / 180;

        this.initMaterials();
        this.initBuffers();
    }
    
    initMaterials() {
/*
        // treeTop material

        let factorTT = 0.8;
        this.treeTopMaterial = new CGFappearance(this.scene);
        this.treeTopMaterial.setAmbient(factorTT, factorTT, factorTT, 1.0);
        this.treeTopMaterial.setDiffuse(factorTT, factorTT, factorTT, 1.0);
        this.treeTopMaterial.setSpecular(0.6, 0.6, 0.6, 1.0);
        this.treeTopMaterial.setShininess(5.0);  
        this.treeTopMaterial.loadTexture(this.treeTopTexture);
        this.treeTopMaterial.setTextureWrap('REPEAT', 'REPEAT');

        // trunk material

        let factorT = 0.8;
        this.trunkMaterial = new CGFappearance(this.scene);
        this.trunkMaterial.setAmbient(factorT, factorT, factorT, 1.0);
        this.trunkMaterial.setDiffuse(factorT, factorT, factorT, 1.0);
        this.trunkMaterial.setSpecular(0.2, 0.2, 0.2, 1.0);
        this.trunkMaterial.setShininess(3.0);  
        this.trunkMaterial.loadTexture(this.trunkTexture);
        this.trunkMaterial.setTextureWrap('REPEAT', 'REPEAT');
*/
    }
	initBuffers() {
		this.cylinder = new MyCylinder(this.scene,10,5);
    }
	display() {
        this.scene.pushMatrix();
        
        this.scene.translate(this.x, 0, this.z);
        this.scene.rotate(this.orientation, 0, 1, 0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.translate(0, -this.height / 2, 0);
        this.scene.scale(this.radius, this.height, this.radius);
        this.cylinder.display();
    }
}