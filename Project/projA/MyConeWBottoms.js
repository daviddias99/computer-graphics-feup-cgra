/**
 * MyConeWBottoms
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyConeWBottoms extends CGFobject {

	constructor(scene, slices, stacks,height, sideTexture, bottomTexture) {
        super(scene);
        
        this.slices = slices;
        this.stacks = stacks;

        height === null ? this.height = 1 : this.height = height;
            
        this.sideTexture =sideTexture;
        this.bottomTexture =bottomTexture;

        this.initBuffers();
	}
	initBuffers() {

		this.cone = new MyCone(this.scene,this.slices,null);
        this.bottom = new MyRegPolygon(this.scene,this.slices,-1);

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

        
        this.bottom.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.scale(1,this.height,1);
        this.cone.display();

        this.scene.popMatrix();

    }
    
    // Updates the complexity of each element of the tangram
    updateBuffers(complexity){
        


    }

}