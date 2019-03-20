/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();
		this.initPieceMaterials();
		//if (coords != undefined)
		//	this.updateTexCoords(coords);
	}
	
	initBuffers() {
		this.quad = new MyQuad(this.scene);
	}

	initPieceMaterials() {

		let factor = 0.5;

		this.bottom = new CGFappearance(this.scene);
		this.bottom.setAmbient(factor, factor, factor, 1.0);
        this.bottom.setDiffuse(factor, factor, factor, 1.0);
        this.bottom.setSpecular(factor, factor, factor, 1.0);
        this.bottom.setShininess(10.0);  
		this.bottom.loadTexture('images/mineBottom.png');
		
		this.side = new CGFappearance(this.scene);
		this.side.setAmbient(factor, factor, factor, 1.0);
        this.side.setDiffuse(factor, factor, factor, 1.0);
        this.side.setSpecular(factor, factor, factor, 1.0);
        this.side.setShininess(10.0);  
		this.side.loadTexture('images/mineSide.png');
		
		this.top = new CGFappearance(this.scene);
		this.top.setAmbient(factor, factor, factor, 1.0);
        this.top.setDiffuse(factor, factor, factor, 1.0);
        this.top.setSpecular(factor, factor, factor, 1.0);
        this.top.setShininess(10.0);  
        this.top.loadTexture('images/mineTop.png');
	}

	display () {

		this.side.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

		this.scene.pushMatrix();

		this.scene.translate(0, 0, -0.5);
		this.scene.rotate(Math.PI, 0, 1, 0);

		this.quad.display();

		// -----

		this.scene.popMatrix();
		this.scene.pushMatrix();
		
		this.scene.translate(0, 0, 0.5);

		this.quad.display();

		// -----

		this.scene.popMatrix();
		this.scene.pushMatrix();

		this.scene.translate(0.5, 0, 0)
		this.scene.rotate(Math.PI / 2, 0, 1, 0);

		this.quad.display();

		// -----

		this.scene.popMatrix();
		this.scene.pushMatrix();

		this.scene.translate(-0.5, 0, 0)
		this.scene.rotate(- Math.PI / 2, 0, 1, 0);

		this.quad.display();

		// -----

		this.scene.popMatrix();
		this.scene.pushMatrix();

		this.scene.translate(0, -0.5, 0)
		this.scene.rotate(Math.PI / 2, 1, 0, 0);

		this.bottom.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.quad.display();

		// -----

		this.scene.popMatrix();
		this.scene.pushMatrix();

		this.scene.translate(0, 0.5, 0)
		this.scene.rotate(-Math.PI / 2, 1, 0, 0);

		this.top.apply();

		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.quad.display();

		this.scene.popMatrix();
	}
}

