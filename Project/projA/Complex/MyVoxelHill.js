/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyVoxelHill object
 */

/**
 * layerSideLength - gives the number of cubes per side of a layer of a given height (the top layer as height 1 and as 1 cube)
 * @function
 * @param h     height of the current layer
 */
function layerSideLength(h) {
    return 2 * h - 1;
}

/**
 * isInside - checks if a cube in a given position is inside of the voxelhill
 * @function
 * @param i                 i grid position in the currentHeight
 * @param j                 j grid position in the currentHeight
 * @param maxHeight         maxHeight of the voxelHill
 * @param currentHeight     height of the current grid in the voxelhill
 */
function isInside(i, j, maxHeight, currentHeight){

    var sidelength = layerSideLength(maxHeight - currentHeight);

    if( (i == 0) || (i == sidelength - 1) || (j == 0) || (j == sidelength - 1))
        return false;
    else
        return true;
}

class MyVoxelHill extends CGFobject {
	constructor(scene,height) {
        super(scene);
        this.height = height;
        this.initMaterials();
        this.initBuffers();

	}
	initBuffers() {
        
        this.baseLength =  layerSideLength(this.height);

        this.cube = new MyUnitCubeQuad(this.scene,this.waterMaterial,this.waterMaterial,this.waterMaterial);
    }

    initMaterials() {

        let factorT = 0.6;
        this.waterMaterial = new CGFappearance(this.scene);
        this.waterMaterial.setAmbient(factorT, factorT, factorT, 1.0);
        this.waterMaterial.setDiffuse(0.6, 0.6, 0.6, 1.0);
        this.waterMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.waterMaterial.setShininess(2.0);  
        this.waterMaterial.loadTexture('images/mountain2.jpg');
        this.waterMaterial.setTextureWrap('REPEAT', 'REPEAT');

    }

	display() {
        
        for(let i = 0; i < this.height; i++){

            for(let j = 0; j < Math.pow(this.baseLength - i * 2, 2); j++){

                this.scene.pushMatrix();
                let inLayerX = j%layerSideLength(this.height - i);
                let inLayerZ = Math.floor(j / layerSideLength(this.height - i));
                
                // don't draw the inner cubes as they aren't  visible
                if( ! isInside(inLayerX,inLayerZ,this.height,i) || i == 0){ 

                    this.scene.translate( inLayerX + i ,i, inLayerZ + i);
                    
                    this.cube.display();
                }
                else{
                    this.scene.popMatrix();
                    continue;
                }
                    

                
                this.scene.popMatrix();
            }

        }
        
    }
    

}