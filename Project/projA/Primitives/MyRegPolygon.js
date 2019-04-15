/**
* MyCylinder
* @constructor
*/
class MyRegPolygon extends CGFobject {
    constructor(scene, slices, orientation) {

        super(scene);
        this.slices = slices;
        this.orientation = orientation;
        this.initBuffers();
  
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        this.vertices.push(0,0,0);
        this.normals.push(0, this.orientation, 0);
        this.texCoords.push(0.5,0.5);

        for(var i = 0; i < this.slices; i++){
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different

            var sa = Math.sin(ang);
            var ca = Math.cos(ang);

            this.vertices.push(ca, 0, -sa);
            this.texCoords.push(0.5 + ca*0.5, -0.5*sa+0.5);
            
            // The normal of the vertices the bisector of the angle created by two edges
            var normal= [
                0,
                this.orientation,
                0
            ];

            // push normal once for each vertex of this triangle
            this.normals.push(...normal);

            if (i < this.slices -1 ) 
                this.indices.push(i+1,i+2,0);
            else
                this.indices.push(i+1,1,0);
            
            

            ang += alphaAng;
        }

        if(this.orientation == -1)
            this.indices.reverse();

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
        this.enableNormalViz();
    }



}

