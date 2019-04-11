/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyVoxelHill object
 */


function layerSideLength(h) {
    return 2 * h - 1;
}

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
        this.initBuffers();

	}
	initBuffers() {
        
        this.baseLength =  layerSideLength(this.height);

        this.cube = new MyUnitCubeQuad(this.scene,null);
    }

    
	display() {
        this.scene.pushMatrix();
        
        for(let i = 0; i < this.height; i++){

            for(let j = 0; j < Math.pow(this.baseLength - i * 2, 2); j++){

                this.scene.pushMatrix();
                let inLayerX = j%layerSideLength(this.height - i);
                let inLayerZ = Math.floor(j / layerSideLength(this.height - i));
                
                if( ! isInside(inLayerX,inLayerZ,this.height,i) || i == 0){ 

                    this.scene.translate( inLayerX + i ,i, inLayerZ + i);
                    this.cube.display();
                }
                else
                    continue;

                this.scene.popMatrix();
                
            }
        }

        this.scene.popMatrix();
    }
    

}