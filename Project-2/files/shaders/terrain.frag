#ifdef GL_ES
precision highp float;
#endif

#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform sampler2D uSampler3;

void main() {
	
	vec4 color = texture2D(uSampler, vTextureCoord);

	float heightMapVValue = texture2D(uSampler2,vTextureCoord).b ;

	vec2 heightMapCoord = vec2(0,-heightMapVValue);
	color = texture2D(uSampler3, heightMapCoord);

	gl_FragColor = color;
}