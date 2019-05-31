#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform sampler2D uSampler2;		// stores the heightmap

varying vec2 vTextureCoord;			

void main(){

	float offsetMultiplier = 7.0;
	vec3 offset=vec3(0.0,0.0, texture2D(uSampler2, aTextureCoord).b); // get the offset of the vertex from the heightmap
	vec3 newCoords = aVertexPosition + offset * offsetMultiplier;	  // calculate the new coordinates of the vertex

	gl_Position = uPMatrix * uMVMatrix * vec4(newCoords, 1.0);

	vTextureCoord = aTextureCoord;	

}
