/**
 * MyTree
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTree extends CGFobject {

	constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
        super(scene);
        
        this.trunkRadius = trunkRadius;
        this.trunkHeight = trunkHeight;

        this.treeTopRadius = treeTopRadius;
        this.treeTopHeigth = treeTopHeight;

        this.treeTopTexture = treeTopTexture;
        this.trunkTexture = trunkTexture;

        this.initMaterials();
        this.initBuffers();
    }
    
    initMaterials(){

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

    }
	initBuffers() {

		this.trunk = new MyCylinder(this.scene,10,5);
        this.treeTop = new MyCone(this.scene,10,null,'sliced');

    }
    

	display() {
		this.scene.pushMatrix();

        // trunk
        this.scene.scale(this.trunkRadius,this.trunkHeight,this.trunkRadius);
        this.trunkMaterial.apply();
        this.trunk.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // treetop
        this.scene.translate(0,this.trunkHeight,0);
        this.scene.scale(this.treeTopRadius,this.treeTopHeigth,this.treeTopRadius);
        this.treeTopMaterial.apply();
        this.treeTop.display();

        this.scene.popMatrix();
    }
    

}