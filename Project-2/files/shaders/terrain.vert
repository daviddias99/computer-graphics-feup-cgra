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
uniform sampler2D uSampler4;		// stores the water heigthmap
uniform sampler2D uSampler5;		// check if it's water

varying vec2 vTextureCoord;			
uniform float timeFactor;

void main(){

	
	float offsetMultiplier = 7.0;
	vec3 offset=vec3(0.0,0.0, texture2D(uSampler2, aTextureCoord).b); // get the offset of the vertex from the heightmap
	vec3 newCoord = aVertexPosition + offset * offsetMultiplier;	  // calculate the new coordinates of the vertex
	

	gl_Position = uPMatrix * uMVMatrix * vec4(newCoord, 1.0);

	vTextureCoord = aTextureCoord;	

}
