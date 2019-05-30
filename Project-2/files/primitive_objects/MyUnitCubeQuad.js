/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene, topMaterial, bottomMaterial, sideMaterial) {
		super(scene);
		this.initBuffers();
		this.bottom = bottomMaterial;
		this.top = topMaterial;
		this.side = sideMaterial;
	}
	
	initBuffers() {
		this.quad = new MyQuad(this.scene);
	}

	display () {

		if (this.side != undefined)
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
		
		if (this.bottom != undefined)
			this.bottom.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.quad.display();

		// -----

		this.scene.popMatrix();
		this.scene.pushMatrix();

		this.scene.translate(0, 0.5, 0)
		this.scene.rotate(-Math.PI / 2, 1, 0, 0);

		if (this.top != undefined)
			this.top.apply();

		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.quad.display();

		this.scene.popMatrix();
	}
}

