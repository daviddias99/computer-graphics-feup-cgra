#ifdef GL_ES
precision highp float;
#endif

#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;			// terrain texture
uniform sampler2D uSampler2;		// heightmap texture
uniform sampler2D uSampler3;		// altimetry texture

void main() {

	float colorMixPercentage = 0.5;
	
	vec4 color = texture2D(uSampler, vTextureCoord); //get the color
	float heightMapVValue = texture2D(uSampler2,vTextureCoord).b ;	// calculate the heigth of the point according to the heightmap
	vec2 heightMapCoord = vec2(0,-heightMapVValue);	
	color += colorMixPercentage*texture2D(uSampler3, heightMapCoord); // use the relative height given by the height map to calculate the corresponding color in the altimtery

	gl_FragColor = color;
}