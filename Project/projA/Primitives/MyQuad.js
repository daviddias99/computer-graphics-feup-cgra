/**
 * MyQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyQuad extends CGFobject {
	constructor(scene, coords, complexity) {
		super(scene);
		
		this.initBuffers();
		if (coords != undefined)
			this.updateTexCoords(coords);
	}
	
	initBuffers() {
		this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

		let delta = 1 / this.complexity;
		let ind_offset = 0;

		for (let i = 0; i < this.complexity; i++) {
		
			for (let j = 0; j < this.complexity; j++) { 
				
				let ver = [
					-0.5 + i * delta, -0.5 + j * delta, 0,
					-0.5 + (i + 1) * delta, -0.5 + j * delta, 0,
					-0.5 + i * delta, -0.5 + (j + 1) * delta, 0,
					-0.5 + (i + 1) * delta, -0.5 + (j + 1) * delta, 0
				];

				ind_offset += 4;
				this.vertices.push(...ver);
				
				let ind = [
					ind_offset, ind_offset + 1, ind_offset + 2,
					ind_offset + 1, ind_offset + 3, ind_offset + 2
				]

				this.indices.push(...ind);

				let nor = [
					0, 0, 1,
					0, 0, 1,
					0, 0, 1,
					0, 0, 1
				];

				this.normals.push(...nor);

				let tex = [
					i * delta, j * delta,
					(i + 1) * delta, j * delta,
					i * delta, (j + 1) * delta,
					(i + 1) * delta, (j + 1) * delta
				]

				this.texCoords.push(...tex);
			}
		}
		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
	updateTexCoords(coords) {
		this.texCoords = [...coords];










		this.updateTexCoordsGLBuffers();
	}


}

