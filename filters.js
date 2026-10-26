// One Euro low-pass filter: adaptive cutoff keeps slow motion stable and fast motion responsive.
export class OneEuroFilter {
  constructor(minCutoff=1,beta=.02,dCutoff=1){this.minCutoff=minCutoff;this.beta=beta;this.dCutoff=dCutoff;this.x=null;this.dx=0;this.t=null;}
  alpha(c,dt){const tau=1/(2*Math.PI*c);return 1/(1+tau/dt)}
  filter(x,t){if(this.t===null){this.t=t;this.x=x;return x}const dt=Math.max(1e-4,(t-this.t)/1000),d=(x-this.x)/dt;this.dx+=this.alpha(this.dCutoff,dt)*(d-this.dx);const cutoff=this.minCutoff+this.beta*Math.abs(this.dx);this.x+=this.alpha(cutoff,dt)*(x-this.x);this.t=t;return this.x}
}
export class LandmarkSmoother {
  constructor(){this.filters=Array.from({length:21},()=>[new OneEuroFilter(),new OneEuroFilter(),new OneEuroFilter()])}
  apply(points,t){return points.map((p,i)=>({x:this.filters[i][0].filter(p.x,t),y:this.filters[i][1].filter(p.y,t),z:this.filters[i][2].filter(p.z||0,t)}))}
}
