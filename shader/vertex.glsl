
uniform float time;
uniform float angle;
uniform float progress;
uniform vec4 resolution;
varying vec2 vUv;
varying float vFrontShadow;
// varying float vBackShadow;
// varying float vProgress;

uniform sampler2D texture1;
uniform sampler2D texture2;
uniform vec2 pixels;

const float pi = 3.1415925;

void main() {
  vUv = (uv - vec2(0.5))*0.9 + vec2(0.5);


  float pi = 3.14159265359;
  vec3 pos = position;
  pos.y -= sin(pi*uv.x)*0.01;
  pos.z += sin(pi*uv.x)*0.02;
  pos.y += sin(time*0.3)*0.02;
  vUv.y -= sin(time*0.3)*0.02;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0 );
}