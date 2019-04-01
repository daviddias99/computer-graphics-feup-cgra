/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyVoxelHill object
 */

function layerSideLength(h) {
    return 2 * h - 1;
}

class MyVoxelHill extends CGFobject {
	constructor(scene,height) {
        super(scene);
        this.height = height;
        this.initBuffers();
        this.initPieceMaterials();
	}
	initBuffers() {
        
        this.x = 0;
        this.y = 0;
        this.baseLength =  layerSideLength(this.height);
        this.numCubes = 0;

        this.cube = new MyUnitCubeQuad(this.scene,null);
    }

    
	display() {
        this.scene.pushMatrix();
        
        for(let i = 0; i < this.height; i++){

            for(let j = 0; j < Math.pow(this.baseLength - i * 2, 2); j++){

                this.scene.pushMatrix();
                this.scene.translate( j % layerSideLength(this.height - i) + i ,i,  Math.floor(j / layerSideLength(this.height - i)) + i);
                this.cube.display();
                this.scene.popMatrix();
                
            }


        }

        
       
        this.scene.popMatrix();
    }
    
    // Updates the complexity of each element of the tangram
    updateBuffers(complexity){
        
        this.diamond.updateBuffers(complexity);
        this.triangle.updateBuffers(complexity);
        this.parallelogram.updateBuffers(complexity);
        this.triangleBig1.updateBuffers(complexity);
        this.triangleSmall1.updateBuffers(complexity);
        this.triangleBig2.updateBuffers(complexity);
        this.triangleSmall2.updateBuffers(complexity);

    }
    initPieceMaterials() {

        let factor = 0.5;
        //this.texLines = new CGFtexture(this, 'images/tangram-lines.png');
        
        this.tangram = new CGFappearance(this.scene);
        this.tangram.setAmbient(factor, factor, factor, 1.0);
        this.tangram.setDiffuse(factor, factor, factor, 1.0);
        this.tangram.setSpecular(factor, factor, factor, 1.0);
        this.tangram.setShininess(10.0);  
        this.tangram.loadTexture('images/tangram.png');
    }
}