uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;

varying vec2 vUv;
varying vec3 vPosition;
varying float vFrontShadow;





void main()	{
    vec4 t = texture2D(texture1, vUv);
    gl_FragColor = t;
}