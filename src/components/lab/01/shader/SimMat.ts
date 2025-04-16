import { DataTexture, ShaderMaterial } from "three";

export default class LabOne extends ShaderMaterial {
  constructor(pos: DataTexture) {
    super({
      uniforms: {
        uPositions: { value: pos },
        uTime: { value: 0 },
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
          }
      `,
      fragmentShader: /* glsl */ `
       uniform sampler2D uPositions;

       uniform float uTime;
       varying vec2 vUv;  
       #define PI 3.141592653

    // FRACTAL SNOISE----------------
    // 	<www.shadertoy.com/view/XsX3zB>
    //	by Nikita Miropolskiy
    /* discontinuous pseudorandom uniformly distributed in [-0.5, +0.5]^3 */
    vec3 random3(vec3 c) {
    	float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
    	vec3 r;
    	r.z = fract(512.0*j);
    	j *= .125;
    	r.x = fract(512.0*j);
    	j *= .125;
    	r.y = fract(512.0*j);
    	return r-0.5;
    }
    
    const float F3 =  0.3333333;
    const float G3 =  0.1666667;
    float snoise(vec3 p) {
    
    	vec3 s = floor(p + dot(p, vec3(F3)));
    	vec3 x = p - s + dot(s, vec3(G3));
    
    	vec3 e = step(vec3(0.0), x - x.yzx);
    	vec3 i1 = e*(1.0 - e.zxy);
    	vec3 i2 = 1.0 - e.zxy*(1.0 - e);
    
    	vec3 x1 = x - i1 + G3;
    	vec3 x2 = x - i2 + 2.0*G3;
    	vec3 x3 = x - 1.0 + 3.0*G3;
    
    	vec4 w, d;
    
    	w.x = dot(x, x);
    	w.y = dot(x1, x1);
    	w.z = dot(x2, x2);
    	w.w = dot(x3, x3);
    
    	w = max(0.6 - w, 0.0);
    
    	d.x = dot(random3(s), x);
    	d.y = dot(random3(s + i1), x1);
    	d.z = dot(random3(s + i2), x2);
    	d.w = dot(random3(s + 1.0), x3);
    
    	w *= w;
    	w *= w;
    	d *= w;
    
    	return dot(d, vec4(52.0));
    }

    float snoiseFractal(vec3 m) {
    	return   0.5333333* snoise(m)
    				+0.2666667* snoise(2.0*m)
    				+0.1333333* snoise(4.0*m)
    				+0.0666667* snoise(8.0*m);
    }
    // -------------------
    float map(in float v, in float iMin, in float iMax, in float oMin, in float oMax) { return oMin + (oMax - oMin) * (v - iMin) / (iMax - iMin); }

    void main(){
      vec2 uv = vUv;
      float time = mod(mod(uTime*0.15 , 1.0) + 1.0, 1.0);
      float repeat = sin(time * 2. * PI);

      vec4 pos = texture2D( uPositions, uv );
      vec4 ip = pos;
      float angle = atan(pos.x, pos.y);
      float radius = length(pos.xy);
      
      for(int i = 0; i<4; i++){
        // zoom
        float r = pow(0.8, repeat * float(i) ) * pow(1./0.8, repeat * float(i));
        float t1 = pow((radius*float(i)), .75 / r ) ;
        // noise
        float n = snoiseFractal(vec3( angle *8., radius * (.1 / r) ,  uTime*0.2) ) *.75 ;
        // fractal stuff
        float z1 = log(abs(sin(((radius  + n )) * 4. - uTime *2. * PI *0.4))) *.5;
        float z2 = exp(-pos.z / radius * z1 ) *.25;
        pos.z = z2 * t1;
        if(pos.z > 2.) pos.z = ip.z;
        // rotation
        pos.x = radius * cos(angle + uTime * .3) ;
        pos.y = radius * sin(angle + uTime * .3) ;
      }

      if(pos.x > 2.5 || pos.x < -2.5) pos.x = ip.x;
      if(pos.y > 2.5 || pos.y < -2.5) pos.y = ip.y;
      if(pos.z > 2.) pos.z = ip.z;
      gl_FragColor = vec4( pos);
    }
`,
    });
  }
}
// float test = 0.01;
// vec3 attract;
// float steps;
// float start = 0.;

// start += 0.01;

//   test = map(start, 3.,6.);
//   steps = step(0., test);
//   float A = steps * 0.01;
