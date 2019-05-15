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
		let halfSide = 15;
		let margin = 0.0005;

		// reference to the vertices of the cube. Each vertex has been declared three times
		// for all the faces that meet at a single vertex (used for normal vector declaring)
		this.vertices = [
			/* top and bottom */
			halfSide, halfSide, -halfSide,			//0
			-halfSide, halfSide, -halfSide,			//1
			-halfSide, halfSide, halfSide,			//2
			halfSide, halfSide, halfSide,			//3
			halfSide, -halfSide, -halfSide,			//4
			-halfSide, -halfSide, -halfSide,		//5
			-halfSide, -halfSide, halfSide,			//6
			halfSide, -halfSide, halfSide,			//7
			/* left and right */
			halfSide, halfSide, -halfSide,			//0
			-halfSide, halfSide, -halfSide,			//1
			-halfSide, halfSide, halfSide,			//2
			halfSide, halfSide, halfSide,			//3
			halfSide, -halfSide, -halfSide,			//4
			-halfSide, -halfSide, -halfSide,		//5
			-halfSide, -halfSide, halfSide,			//6
			halfSide, -halfSide, halfSide,			//7
			/* front and back */
			halfSide, halfSide, -halfSide,			//0
			-halfSide, halfSide, -halfSide,			//1
			-halfSide, halfSide, halfSide,			//2
			halfSide, halfSide, halfSide,			//3
			halfSide, -halfSide, -halfSide,			//4
			-halfSide, -halfSide, -halfSide,		//5
			-halfSide, -halfSide, halfSide,			//6
			halfSide, -halfSide, halfSide			//7
		];
		
		// reference to the normal-vectors of the cube's vertices. Each vertex has 3 normals declared to account 
		// for all the faces that meet at a single vertex
		this.normals = [
			0,-1,0,				//0
			0,-1,0,				//1
			0,-1,0,				//2
			0,-1,0,				//3
			0,1,0,				//4
			0,1,0,				//5
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
			0,0,-1,				//2
			0,0,-1,				//3
			0,0,1,				//4
			0,0,1,				//5
			0,0,-1,				//6
			0,0,-1				//7
		];
		

		//Counter-clockwise reference of vertices
		this.indices = [
			/* top face */
			3, 2, 1,
			1, 0, 3,
			/* bottom face */
			7, 4, 5,
			5, 6, 7,
			/* right face */
			11, 8, 12,
			12, 15, 11,
			/* left face */
			13, 9, 10,
			10, 14, 13,
			/* front face */
			16, 17, 21,
			16, 21, 20,
			/* back face */
			19, 23, 22,
			18, 19, 22
		];

		this.texCoords = [
			0.5 - margin, 1/3,
			0.25 + margin, 1/3,
			0.25 + margin, 0,
			0.5 - margin, 0,
			0.5 - margin, 2/3,
			0.25 + margin, 2/3,
			0.25 + margin, 1,
			0.5 - margin, 1,

			0.5 - margin, 1/3 + margin,
			0.25 + margin, 1/3 + margin,
			0, 1/3 + margin,
			0.75, 1/3 + margin,
			0.5 - margin, 2/3 - margin,
			0.25 + margin, 2/3 - margin,
			0, 2/3 - margin,
			0.75, 2/3 - margin,
			
			0.5, 1/3,
			0.25, 1/3,
			1, 1/3 + margin,
			0.75, 1/3 + margin,
			0.5, 2/3,
			0.25, 2/3,
			1, 2/3 - margin,
			0.75, 2/3 - margin
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

