/**
* MySphere
* @constructor
*/
class MySphere extends CGFobject {
    constructor(scene, complexity) {
        super(scene);
        this.complexity = complexity;

        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        let theta = 2 * Math.PI / this.complexity;
        let fi = (Math.PI / 2) / this.complexity;

        for (let j = 0; j <= this.complexity; j++) {
            for (let i = 0; i <= this.complexity; i++) {
                this.vertices.push(Math.cos(theta * i) * Math.cos(fi * j), Math.sin(theta * i) * Math.cos(fi * j), Math.sin(fi * j));
                this.normals.push(Math.cos(theta * i) * Math.cos(fi * j), Math.sin(theta * i) * Math.cos(fi * j), Math.sin(fi * j));
                this.texCoords.push(i * 1 / this.complexity, j * 1 / this.complexity);
            }
        }

        for (let i = 0; i < this.complexity; i++) {
            for (let j = 0; j < this.complexity; j++) {
                this.indices.push(i * (this.complexity + 1) + j, i * (this.complexity + 1) + 1 + j, (i + 1) * (this.complexity + 1) + j);
                this.indices.push(i * (this.complexity + 1) + 1 + j, (i + 1) * (this.complexity + 1) + 1 + j, (i + 1) * (this.complexity + 1) + j);
               }
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    display() {
        super.display();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 1, 0, 0);
        super.display();
        this.scene.popMatrix();
    }
}
