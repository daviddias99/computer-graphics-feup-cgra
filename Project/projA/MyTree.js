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

        this.initBuffers();
	}
	initBuffers() {

		this.trunk = new MyCylinder(this.scene,10,5,'images/bark.jpg');
        this.treeTop = new MyCone(this.scene,10,5,'images/foliage.jpg');

    }
    
    /**
     * Applies the normal vizualization for each element of the tangram
     */
    enableNormalViz() {

    }

    /**
     * Disables the normal vizualization for each element of the tangram
     */
    disableNormalViz() {

    }


	display() {
		this.scene.pushMatrix();

        this.scene.scale(this.trunkRadius,this.trunkHeight,this.trunkRadius);
        this.trunk.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(0,this.trunkHeight,0);
        this.scene.scale(this.treeTopRadius,this.treeTopHeigth,this.treeTopRadius);
        this.treeTop.display();
        this.scene.popMatrix();
        

    }
    
    // Updates the complexity of each element of the tangram
    updateBuffers(complexity){
        


    }

}