/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0.5, 0.5, -0.5,		//0
			-0.5, 0.5, -0.5,	//1
			-0.5, -0.5, -0.5,	//2
			0.5, -0.5, -0.5,	//3
			0.5, 0.5, 0.5,		//4
			-0.5, 0.5, 0.5,		//5
			-0.5, -0.5, 0.5,	//6
			0.5, -0.5, 0.5,		//7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			/* down face */
			2, 1, 0,
			0, 3, 2,
			/* top face */
			4, 5, 6,
			6, 7, 4,
			/* right face */
			3, 7, 6,
			2, 3, 6,
			/* left face */
			0, 1, 5,
			0, 5, 4,
			/* front face */
			3, 0, 4,
			4, 7, 3,
			/* back face */
			5, 1, 2,
			2, 6, 5
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

