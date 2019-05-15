attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float timeFactor;

varying vec2 vTextureCoord;

uniform sampler2D uSampler2;

void main() {

	vec2 newCoords =  aTextureCoord + timeFactor * 0.08 *vec2(0.1,0.1) ;
	vec4 filter = texture2D(uSampler2, newCoords);
	vec3 offset = aVertexNormal*filter.b*1.5;
	vec3 newPosition = aVertexPosition + offset * 0.05;

	gl_Position = uPMatrix * uMVMatrix * vec4(newPosition, 1.0);

	vTextureCoord = aTextureCoord + timeFactor * 0.1 *vec2(0.1,0.1) ;
}

