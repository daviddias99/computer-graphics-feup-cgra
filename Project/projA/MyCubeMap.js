/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
		this.initPieceMaterials();
	}

	initBuffers() {
		this.quad = new MyQuad(this.scene);
	}

	initPieceMaterials() {
		this.bottom = new CGFappearance(this.scene);
		this.bottom.setAmbient(1.0, 1.0, 1.0, 1.0);
        this.bottom.setDiffuse(0.5, 0.5, 0.5, 1.0);
        this.bottom.setSpecular(0, 0, 0, 1.0);
        this.bottom.setShininess(10.0);  
		this.bottom.loadTexture('images/spires_dn.png');
		
		this.side = new CGFappearance(this.scene);
		this.side.setAmbient(1.0, 1.0, 1.0, 1.0);
        this.side.setDiffuse(0, 0, 0, 1.0);
        this.side.setSpecular(0, 0, 0, 1.0);
        this.side.setShininess(10.0);
		this.side.loadTexture('images/spires_bk.png');
		
		this.top = new CGFappearance(this.scene);
		this.top.setAmbient(1.0, 1.0, 1.0, 1.0);
        this.top.setDiffuse(0, 0, 0, 1.0);
        this.top.setSpecular(0, 0, 0, 1.0);
		this.top.setShininess(10.0);
		this.top.loadTexture('images/spires_up.png');
	}

	display() {

		// reference to the vertices of the cube. Each vertex has been declared three times
		// for all the faces that meet at a single vertex (used for normal vector declaring)

		let coord = 50;

		this.side.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

		this.scene.pushMatrix();

		this.scene.translate(0, coord, coord);
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.scene.scale(2 * coord, 2 * coord, 2 * coord);
		this.quad.display();

		// -----

		this.scene.popMatrix();
		this.scene.pushMatrix();
		
		this.scene.translate(0, coord, -coord);

		this.scene.scale(2 * coord, 2 * coord, 2 * coord);
		this.quad.display();

		// -----

		this.scene.popMatrix();
		this.scene.pushMatrix();

		this.scene.translate(-coord, coord, 0)
		this.scene.rotate(Math.PI / 2, 0, 1, 0);

		this.scene.scale(2 * coord, 2 * coord, 2 * coord);
		this.quad.display();

		// -----

		this.scene.popMatrix();
		this.scene.pushMatrix();

		this.scene.translate(coord, coord, 0)
		this.scene.rotate(- Math.PI / 2, 0, 1, 0);

		this.scene.scale(2 * coord, 2 * coord, 2 * coord);
		this.quad.display();

		// -----

		this.scene.popMatrix();
		this.scene.pushMatrix();

		this.scene.translate(0, 2 * coord, 0)
		this.scene.rotate(Math.PI / 2, 1, 0, 0);

		this.top.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.scene.scale(2 * coord, 2 * coord, 2 * coord);
		this.quad.display();

		// -----

		this.scene.popMatrix();
		this.scene.pushMatrix();


		this.scene.rotate(-Math.PI / 2, 1, 0, 0);

		this.bottom.apply();

		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.scene.scale(2 * coord, 2 * coord, 2 * coord);
		this.quad.display();

		this.scene.popMatrix();
	}

	/**
	 * Updates the complexity of the cube (currently nothing happens)
	 * @param {*} complexity 
	 */
	updateBuffers(complexity){
		
    }
}

