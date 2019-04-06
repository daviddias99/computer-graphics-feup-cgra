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

		// reference to the vertices of the cube. Each vertex has been declared three times
		// for all the faces that meet at a single vertex (used for normal vector declaring)
		this.vertices = [
			halfSide, side, -halfSide,		//0
			-halfSide, side, -halfSide,		//1
			-halfSide, 0, -halfSide,		//2
			halfSide, 0, -halfSide,			//3
			halfSide, side, halfSide,		//4
			-halfSide, side, halfSide,		//5
			-halfSide, 0, halfSide,			//6
			halfSide, 0, halfSide,			//7

			halfSide, side, -halfSide,		//0
			-halfSide, side, -halfSide,		//1
			-halfSide, 0, -halfSide,		//2
			halfSide, 0, -halfSide,			//3
			halfSide, side, halfSide,		//4
			-halfSide, side, halfSide,		//5
			-halfSide, 0, halfSide,			//6
			halfSide, 0, halfSide,			//7

			halfSide, side, -halfSide,		//0
			-halfSide, side, -halfSide,		//1
			-halfSide, 0, -halfSide,		//2
			halfSide, 0, -halfSide,			//3
			halfSide, side, halfSide,		//4
			-halfSide, side, halfSide,		//5
			-halfSide, 0, halfSide,			//6
			halfSide, 0, halfSide			//7
		];

		// reference to the normal-vectors of the cube's vertices. Each vertex has 3 normals declared to account 
		// for all the faces that meet at a single vertex
		this.normals = [
			0,-1,0,				//0
			0,-1,0,				//1
			0,1,0,				//2
			0,1,0,				//3
			0,-1,0,				//4
			0,-1,0,				//5
			0,1,0,				//6
			0,1,0,				//7

			-1,0,0,				//0
			1,0,0,				//1
			1,0,0,				//2
			-1,0,0,				//3
			-1,0,0,				//4
			1,0,0,				//5
			1,0,0,				//6
			-1,0,0,				//7

			0,0,1,				//0
			0,0,1,				//1
			0,0,1,				//2
			0,0,1,				//3
			0,0,-1,				//4
			0,0,-1,				//5
			0,0,-1,				//6
			0,0,-1				//7
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

