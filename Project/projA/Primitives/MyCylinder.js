/**
* MyCylinder
* @constructor
*/
class MyCylinder extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;

        this.initBuffers();

    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2 * Math.PI / this.slices;

        for (var i = 0; i <= this.slices; i++) {
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different

            var sa = Math.sin(ang);
            var ca = Math.cos(ang);

            this.vertices.push(ca, 0, -sa);
            this.vertices.push(ca, 1, -sa);

            // The normal of the vertices the bisector of the angle created by two edges
            var normal = [
                ca,
                0,
                -sa
            ];

            // push normal once for each vertex of this triangle
            this.normals.push(...normal);
            this.normals.push(...normal);

            if (i != this.slices) {
                this.indices.push(2 * i + 1, 2 * i, 2 * i + 2);
                this.indices.push(2 * i + 2, 2 * i + 3, 2 * i + 1);
            }

            this.texCoords.push(i / this.slices, 1);
            this.texCoords.push(i / this.slices, 0);

            ang += alphaAng;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    updateBuffers(complexity) {
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
        this.enableNormalViz();
    }



}


