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

	vec3 newCoord;

	if( texture2D(uSampler5, aTextureCoord).b < 0.5){

		vec2 newCoords =  aTextureCoord + timeFactor * 0.08 *vec2(0.1,0.1) ;
		vec4 filter = texture2D(uSampler4, newCoords);
		vec3 offset = aVertexNormal*filter.b*1.5;
		newCoord = aVertexPosition + offset * 0.05;
	}
	else{

		float offsetMultiplier = 7.0;
		vec3 offset=vec3(0.0,0.0, texture2D(uSampler2, aTextureCoord).b); // get the offset of the vertex from the heightmap
		newCoord = aVertexPosition + offset * offsetMultiplier;	  // calculate the new coordinates of the vertex
	}


	gl_Position = uPMatrix * uMVMatrix * vec4(newCoord, 1.0);

	vTextureCoord = aTextureCoord;	

}
