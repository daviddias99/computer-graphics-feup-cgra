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

		// reference to the vertices of the cube. Each vertex has been declared three times
		// for all the faces that meet at a single vertex (used for normal vector declaring)

		this.vertices = [
			0.5, 0.5, -0.5,		//0
			-0.5, 0.5, -0.5,	//1
			-0.5, -0.5, -0.5,	//2
			0.5, -0.5, -0.5,	//3
			0.5, 0.5, 0.5,		//4
			-0.5, 0.5, 0.5,		//5
			-0.5, -0.5, 0.5,	//6
			0.5, -0.5, 0.5,		//7

			0.5, 0.5, -0.5,		//0
			-0.5, 0.5, -0.5,	//1
			-0.5, -0.5, -0.5,	//2
			0.5, -0.5, -0.5,	//3
			0.5, 0.5, 0.5,		//4
			-0.5, 0.5, 0.5,		//5
			-0.5, -0.5, 0.5,	//6
			0.5, -0.5, 0.5,		//7

			0.5, 0.5, -0.5,		//0
			-0.5, 0.5, -0.5,	//1
			-0.5, -0.5, -0.5,	//2
			0.5, -0.5, -0.5,	//3
			0.5, 0.5, 0.5,		//4
			-0.5, 0.5, 0.5,		//5
			-0.5, -0.5, 0.5,	//6
			0.5, -0.5, 0.5,		//7
		];

		// reference to the normal-vectors of the cube's vertices. Each vertex has 3 normals declared to account 
		// for all the faces that meet at a single vertex
		
		this.normals = [

			0,1,0,				//0
			0,1,0,				//1
			0,-1,0,				//2
			0,-1,0,				//3
			0,1,0,				//4
			0,1,0,				//5
			0,-1,0,				//6
			0,-1,0,				//7

			1,0,0,				//0
			-1,0,0,				//1
			-1,0,0,				//2
			1,0,0,				//3
			1,0,0,				//4
			-1,0,0,				//5
			-1,0,0,				//6
			1,0,0,				//7

			0,0,-1,				//0
			0,0,-1,				//1
			0,0,-1,				//2
			0,0,-1,				//3
			0,0,1,				//4
			0,0,1,				//5
			0,0,1,				//6
			0,0,1				//7

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

	/**
	 * Updates the complexity of the cube (currently nothing happens)
	 * @param {*} complexity 
	 */
	updateBuffers(complexity){
		
    }
}

