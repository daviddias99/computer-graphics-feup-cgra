/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		let side = 50;
		let halfSide = side / 2;

		this.vertices = [
			halfSide, side, -halfSide,		//0
			-halfSide, side, -halfSide,		//1
			-halfSide, 0, -halfSide,		//2
			halfSide, 0, -halfSide,			//3
			halfSide, side, halfSide,		//4
			-halfSide, side, halfSide,		//5
			-halfSide, 0, halfSide,			//6
			halfSide, 0, halfSide,			//7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			/* down face */
			0, 1, 2,
			2, 3, 0,
			/* top face */
			6, 5, 4,
			4, 7, 6,
			/* right face */
			6, 7, 3,
			6, 3, 2,
			/* left face */
			5, 1, 0,
			4, 5, 0,
			/* front face */
			4, 0, 3,
			3, 7, 4,
			/* back face */
			2, 1, 5,
			5, 6, 2
		];

		this.texCoords = [
			 0.25, 1,
			 0.5, 1,
			 0.25, 2/3,
			 0.5, 2/3,
			 0, 0,
			 0, 0, 
			 0, 0, 
			 0, 0
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

