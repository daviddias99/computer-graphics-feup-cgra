/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
        this.initBuffers();
        this.initPieceMaterials();
	}
	initBuffers() {
		this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.triangleBig1 = new MyTriangleBig(this.scene);
        this.triangleSmall1 = new MyTriangleSmall(this.scene);
        this.triangleBig2 = new MyTriangleBig(this.scene);
		this.triangleSmall2 = new MyTriangleSmall(this.scene);
    }
    
    /**
     * Applies the normal vizualization for each element of the tangram
     */
    enableNormalViz() {

        this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.triangleBig1.enableNormalViz();
        this.triangleSmall1.enableNormalViz();
        this.triangleBig2.enableNormalViz();
        this.triangleSmall2.enableNormalViz();

    }

    /**
     * Disables the normal vizualization for each element of the tangram
     */
    disableNormalViz() {

        this.diamond.disableNormalViz();
        this.triangle.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.triangleBig1.disableNormalViz();
        this.triangleSmall1.disableNormalViz();
        this.triangleBig2.disableNormalViz();
        this.triangleSmall2.disableNormalViz();

    }


	display() {
		this.scene.pushMatrix();

        
        var diamondR = [Math.cos(Math.PI / 4.0), Math.sin(Math.PI / 4.0), 0.0, 0.0,
                        -Math.sin(Math.PI / 4.0), Math.cos(Math.PI / 4.0), 0.0, 0.0,
                        0.0, 0.0, 1.0, 0.0,
                        0.0, 0.0, 0.0, 1.0];

        var diamondR2 = [Math.cos(-Math.PI / 6.0), Math.sin(-Math.PI / 6.0), 0.0, 0.0,
                        -Math.sin(-Math.PI / 6.0), Math.cos(-Math.PI / 6.0), 0.0, 0.0,
                        0.0, 0.0, 1.0, 0.0,
                        0.0, 0.0, 0.0, 1.0];
                    
        var diamondT = [1.0, 0.0, 0.0, 0.0,
                        0.0, 1.0, 0.0, 0.0,
                        0.0, 0.0, 1.0, 0.0,
                        -Math.sqrt(2) / 2.0, Math.sqrt(2) / 2.0, 0.0, 1.0];
        
        this.scene.multMatrix(diamondR2);
        this.scene.multMatrix(diamondT);
        this.scene.multMatrix(diamondR);

        this.diamondMt.apply();

        this.diamond.display(); 
        // ---- 

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.rotate(-Math.PI / 4 - Math.PI / 6, 0.0, 0.0, 1.0);
        this.scene.translate(0, -1, 0);
        
        this.triSmall1Mt.apply();
        this.triangleSmall1.display();

        // ----

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.rotate(- Math.PI / 6, 0.0, 0.0, 1.0);
        this.scene.translate(-Math.sqrt(2.0), 0.0, 0);
        this.scene.rotate(-Math.PI / 4, 0.0, 0.0, 1.0);
        this.scene.scale(1.0, -1.0, 1.0);

        this.parallelMt.apply();
        this.parallelogram.display();  

        // ----

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.rotate(- Math.PI / 6, 0.0, 0.0, 1.0);
        this.scene.translate(0, Math.sqrt(2), 0);
        this.scene.rotate(3 * Math.PI / 4, 0.0, 0.0, 1.0);
        this.scene.translate(-2, 0, 0);

        this.triBig1Mt.apply();
        this.triangleBig1.display();

        // ----

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.rotate(- Math.PI / 6, 0.0, 0.0, 1.0);
        this.scene.translate(Math.sqrt(8), 2 - Math.sqrt(2), 0);
        this.scene.rotate(Math.PI, 0.0, 0.0, 1.0);

        this.triBig2Mt.apply();
        this.triangleBig2.display();
    
        // ----

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.rotate(- Math.PI / 6, 0.0, 0.0, 1.0);
        this.scene.translate(- Math.sqrt(2), Math.sqrt(2), 0);
        this.scene.rotate(- 3 * Math.PI / 4, 0, 0, 1);

        this.triangleMt.apply();
        this.triangle.display();

        // ----

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.rotate(- Math.PI / 6, 0.0, 0.0, 1.0);
        this.scene.translate(2 + Math.sqrt(8), 2 - Math.sqrt(2), 0);
        this.scene.rotate(- 3 * Math.PI / 4, 0, 0, 1);
        this.scene.translate(0, -1, 0);
        
        this.triSmall2Mt.apply();
        this.triangleSmall2.display();
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

        // diamond material
        this.diamondMt = new CGFappearance(this.scene);

        this.diamondMt.setAmbient(0.0, 1.0, 0.0, 1.0);
        this.diamondMt.setDiffuse(1, 0, 0, 1.0);
        this.diamondMt.setSpecular(0, 0, 0, 1.0);
        this.diamondMt.setShininess(10.0);       

        // triangle material
        this.triangleMt = new CGFappearance(this.scene);

        this.triangleMt.setAmbient(1.0, 0.61, 0.82, 1.0);
        this.triangleMt.setDiffuse(1, 0, 0, 1.0);
        this.triangleMt.setSpecular(0, 0, 0, 1.0);
        this.triangleMt.setShininess(10.0);     

        // parallelogram material
        this.parallelMt = new CGFappearance(this.scene);

        this.parallelMt.setAmbient(1.0, 1.0, 0.0, 1.0);
        this.parallelMt.setDiffuse(1, 0, 0, 1.0);
        this.parallelMt.setSpecular(0, 0, 0, 1.0);
        this.parallelMt.setShininess(10.0);   
        
        // triangleBig 1 material
        this.triBig1Mt = new CGFappearance(this.scene);

        this.triBig1Mt.setAmbient(1.0, 0.61, 0.0, 1.0);
        this.triBig1Mt.setDiffuse(1, 0, 0, 1.0);
        this.triBig1Mt.setSpecular(0, 0, 0, 1.0);
        this.triBig1Mt.setShininess(10.0);  

        // triangleBig 2 material
        this.triBig2Mt = new CGFappearance(this.scene);

        this.triBig2Mt.setAmbient(0.0, 0.61, 1.0, 1.0);
        this.triBig2Mt.setDiffuse(1, 0, 0, 1.0);
        this.triBig2Mt.setSpecular(0, 0, 0, 1.0);
        this.triBig2Mt.setShininess(10.0);  

        // triangleSmall 1 material
        this.triSmall1Mt = new CGFappearance(this.scene);

        this.triSmall1Mt.setAmbient(1.0, 0.0, 0.0, 1.0);
        this.triSmall1Mt.setDiffuse(1, 0, 0, 1.0);
        this.triSmall1Mt.setSpecular(0, 0, 0, 1.0);
        this.triSmall1Mt.setShininess(10.0);  

        // triangleSmall 2 material
        this.triSmall2Mt = new CGFappearance(this.scene);

        this.triSmall2Mt.setAmbient(0.67, 0.31, 0.76, 1.0);
        this.triSmall2Mt.setDiffuse(1, 0, 0, 1.0);
        this.triSmall2Mt.setSpecular(0, 0, 0, 1.0);
        this.triSmall2Mt.setShininess(10.0);  

    }
}