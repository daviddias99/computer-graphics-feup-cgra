/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			2, 0, 0,	//1
			1, 1, 0,	//2
			3, 1, 0,	//3

			0, 0, 0,	//0 - 4
			2, 0, 0,	//1 - 5
			1, 1, 0,	//2 - 6
			3, 1, 0		//3 - 7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			1, 3, 2,
			6, 5, 4,
			6, 7, 5
		];

		this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,-1,
			0,0,-1,
			0,0,-1,
			0,0,-1
		];

		this.texCoords = [
			/* needs fix on the scaling of the parallelogram */
			1, 1,
			0.5, 1,
			0.75, 0.75,
			0.25, 0.75,
			1, 1,
			0.5, 1,
			0.75, 0.75,
			0.25, 0.75
		]

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	updateBuffers(complexity){
        

    }
}
