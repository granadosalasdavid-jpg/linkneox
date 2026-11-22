(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,ee=1029,O=1030,k=1031,te=1033,A=33776,ne=33777,j=33778,re=33779,M=35840,ie=35841,ae=35842,oe=35843,se=36196,ce=37492,le=37496,ue=37488,de=37489,fe=37490,pe=37491,me=37808,he=37809,ge=37810,_e=37811,ve=37812,ye=37813,be=37814,xe=37815,Se=37816,Ce=37817,we=37818,Te=37819,Ee=37820,De=37821,Oe=36492,ke=36494,Ae=36495,je=36283,Me=36284,Ne=36285,Pe=36286,Fe=2300,Ie=2301,N=2302,Le=2303,Re=2400,ze=2401,P=2402,Be=3200,Ve=`srgb`,F=`srgb-linear`,He=`linear`,Ue=`srgb`,We=7680,Ge=35044,Ke=2e3;function qe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Je(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ye(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Xe(){let e=Ye(`canvas`);return e.style.display=`block`,e}var Ze={};function Qe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function $e(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function I(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function L(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function et(...e){let t=e.join(` `);t in Ze||(Ze[t]=!0,I(...e))}function tt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var nt={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},rt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},it=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),at=1234567,ot=Math.PI/180,st=180/Math.PI;function ct(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(it[e&255]+it[e>>8&255]+it[e>>16&255]+it[e>>24&255]+`-`+it[t&255]+it[t>>8&255]+`-`+it[t>>16&15|64]+it[t>>24&255]+`-`+it[n&63|128]+it[n>>8&255]+`-`+it[n>>16&255]+it[n>>24&255]+it[r&255]+it[r>>8&255]+it[r>>16&255]+it[r>>24&255]).toLowerCase()}function lt(e,t,n){return Math.max(t,Math.min(n,e))}function ut(e,t){return(e%t+t)%t}function dt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ft(e,t,n){return e===t?0:(n-e)/(t-e)}function pt(e,t,n){return(1-n)*e+n*t}function mt(e,t,n,r){return pt(e,t,1-Math.exp(-n*r))}function ht(e,t=1){return t-Math.abs(ut(e,t*2)-t)}function gt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function _t(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function vt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function yt(e,t){return e+Math.random()*(t-e)}function bt(e){return e*(.5-Math.random())}function xt(e){e!==void 0&&(at=e);let t=at+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function St(e){return e*ot}function Ct(e){return e*st}function wt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Tt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Et(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Dt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:I(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ot(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function kt(e,t){if(t.constructor===Float32Array)return e;let n=Ot(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function At(e,t){if(t.constructor===Float32Array)return e;let n=Ot(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var jt={DEG2RAD:ot,RAD2DEG:st,generateUUID:ct,clamp:lt,euclideanModulo:ut,mapLinear:dt,inverseLerp:ft,lerp:pt,damp:mt,pingpong:ht,smoothstep:gt,smootherstep:_t,randInt:vt,randFloat:yt,randFloatSpread:bt,seededRandom:xt,degToRad:St,radToDeg:Ct,isPowerOfTwo:wt,ceilPowerOfTwo:Tt,floorPowerOfTwo:Et,setQuaternionFromProperEuler:Dt,normalize:At,denormalize:kt},Mt=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:I(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ft.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ft.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pt.copy(this).projectOnVector(e),this.sub(Pt)}reflect(e){return this.sub(Pt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pt=new R,Ft=new Nt,It=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return et(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Lt.makeScale(e,t)),this}rotate(e){return et(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Lt.makeRotation(-e)),this}translate(e,t){return et(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Lt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lt=new It,Rt=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zt=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bt(){let e={enabled:!0,workingColorSpace:F,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Ht(e.r),e.g=Ht(e.g),e.b=Ht(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ut(e.r),e.g=Ut(e.g),e.b=Ut(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?He:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[F]:{primaries:t,whitePoint:r,transfer:He,toXYZ:Rt,fromXYZ:zt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:r,transfer:Ue,toXYZ:Rt,fromXYZ:zt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),e}var Vt=Bt();function Ht(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ut(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Wt,Gt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wt===void 0&&(Wt=Ye(`canvas`)),Wt.width=e.width,Wt.height=e.height;let t=Wt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Wt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ye(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ht(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ht(t[e]/255)*255):t[e]=Ht(t[e]);return{data:t,width:e.width,height:e.height}}return I(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Kt=0,qt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kt++}),this.uuid=ct(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Jt(r[t].image)):e.push(Jt(r[t]))}else e=Jt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Jt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Gt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(I(`Texture: Unable to serialize Texture.`),{})}var Yt=0,Xt=new R,Zt=class r extends rt{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yt++}),this.uuid=ct(),this.name=``,this.source=new qt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Xt).x}get height(){return this.source.getSize(Xt).y}get depth(){return this.source.getSize(Xt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){I(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null,Zt.DEFAULT_MAPPING=300,Zt.DEFAULT_ANISOTROPY=1;var Qt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$t=class extends rt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Zt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new qt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},en=class extends $t{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},tn=class extends Zt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},nn=class extends Zt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},rn=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/an.setFromMatrixColumn(e,0).length(),i=1/an.setFromMatrixColumn(e,1).length(),a=1/an.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sn,e,cn)}lookAt(e,t,n){let r=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),ln.crossVectors(n,dn),ln.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),ln.crossVectors(n,dn)),ln.normalize(),un.crossVectors(dn,ln),r[0]=ln.x,r[4]=un.x,r[8]=dn.x,r[1]=ln.y,r[5]=un.y,r[9]=dn.y,r[2]=ln.z,r[6]=un.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],O=r[2],k=r[6],te=r[10],A=r[14],ne=r[3],j=r[7],re=r[11],M=r[15];return i[0]=a*x+o*T+s*O+c*ne,i[4]=a*S+o*E+s*k+c*j,i[8]=a*C+o*D+s*te+c*re,i[12]=a*w+o*ee+s*A+c*M,i[1]=l*x+u*T+d*O+f*ne,i[5]=l*S+u*E+d*k+f*j,i[9]=l*C+u*D+d*te+f*re,i[13]=l*w+u*ee+d*A+f*M,i[2]=p*x+m*T+h*O+g*ne,i[6]=p*S+m*E+h*k+g*j,i[10]=p*C+m*D+h*te+g*re,i[14]=p*w+m*ee+h*A+g*M,i[3]=_*x+v*T+y*O+b*ne,i[7]=_*S+v*E+y*k+b*j,i[11]=_*C+v*D+y*te+b*re,i[15]=_*w+v*ee+y*A+b*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,O=_*ee-v*D+y*E+b*T-x*w+S*C;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return e[0]=(o*ee-s*D+c*E)*k,e[1]=(r*D-n*ee-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*ee-c*w)*k,e[5]=(t*ee-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=an.set(r[0],r[1],r[2]).length(),o=an.set(r[4],r[5],r[6]).length(),s=an.set(r[8],r[9],r[10]).length();i<0&&(a=-a),on.copy(this);let c=1/a,l=1/o,u=1/s;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=l,on.elements[5]*=l,on.elements[6]*=l,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,t.setFromRotationMatrix(on),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},an=new R,on=new rn,sn=new R(0,0,0),cn=new R(1,1,1),ln=new R,un=new R,dn=new R,fn=new rn,pn=new Nt,mn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-lt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:I(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pn.setFromEuler(this),this.setFromQuaternion(pn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER=`XYZ`;var hn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},gn=0,_n=new R,vn=new Nt,yn=new rn,bn=new R,xn=new R,Sn=new R,Cn=new Nt,wn=new R(1,0,0),Tn=new R(0,1,0),En=new R(0,0,1),Dn={type:`added`},On={type:`removed`},kn={type:`childadded`,child:null},An={type:`childremoved`,child:null},jn=class e extends rt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gn++}),this.uuid=ct(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new R,n=new mn,r=new Nt,i=new R(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rn},normalMatrix:{value:new It}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vn.setFromAxisAngle(e,t),this.quaternion.multiply(vn),this}rotateOnWorldAxis(e,t){return vn.setFromAxisAngle(e,t),this.quaternion.premultiply(vn),this}rotateX(e){return this.rotateOnAxis(wn,e)}rotateY(e){return this.rotateOnAxis(Tn,e)}rotateZ(e){return this.rotateOnAxis(En,e)}translateOnAxis(e,t){return _n.copy(e).applyQuaternion(this.quaternion),this.position.add(_n.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wn,e)}translateY(e){return this.translateOnAxis(Tn,e)}translateZ(e){return this.translateOnAxis(En,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bn.copy(e):bn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),xn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(xn,bn,this.up):yn.lookAt(bn,xn,this.up),this.quaternion.setFromRotationMatrix(yn),r&&(yn.extractRotation(r.matrixWorld),vn.setFromRotationMatrix(yn),this.quaternion.premultiply(vn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(L(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dn),kn.child=e,this.dispatchEvent(kn),kn.child=null):L(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(On),An.child=e,this.dispatchEvent(An),An.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dn),kn.child=e,this.dispatchEvent(kn),kn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xn,e,Sn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xn,Cn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};jn.DEFAULT_UP=new R(0,1,0),jn.DEFAULT_MATRIX_AUTO_UPDATE=!0,jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var z=class extends jn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Mn={type:`move`},Nn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new z,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new z,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new z,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new z;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},In={h:0,s:0,l:0};function Ln(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var B=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ve){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Vt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Vt.workingColorSpace){if(e=ut(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Ln(i,r,e+1/3),this.g=Ln(i,r,e),this.b=Ln(i,r,e-1/3)}return Vt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ve){function n(t){t!==void 0&&parseFloat(t)<1&&I(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:I(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);I(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ve){let n=Pn[e.toLowerCase()];return n===void 0?I(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ht(e.r),this.g=Ht(e.g),this.b=Ht(e.b),this}copyLinearToSRGB(e){return this.r=Ut(e.r),this.g=Ut(e.g),this.b=Ut(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ve){return Vt.workingToColorSpace(Rn.copy(this),e),Math.round(lt(Rn.r*255,0,255))*65536+Math.round(lt(Rn.g*255,0,255))*256+Math.round(lt(Rn.b*255,0,255))}getHexString(e=Ve){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vt.workingColorSpace){Vt.workingToColorSpace(Rn.copy(this),t);let n=Rn.r,r=Rn.g,i=Rn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Vt.workingColorSpace){return Vt.workingToColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=Ve){Vt.workingToColorSpace(Rn.copy(this),e);let t=Rn.r,n=Rn.g,r=Rn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(In);let n=pt(Fn.h,In.h,t),r=pt(Fn.s,In.s,t),i=pt(Fn.l,In.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new B;B.NAMES=Pn;var zn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new B(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Bn=class extends jn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vn=new R,Hn=new R,Un=new R,Wn=new R,Gn=new R,Kn=new R,qn=new R,Jn=new R,Yn=new R,Xn=new R,Zn=new Qt,Qn=new Qt,$n=new Qt,er=class e{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vn.subVectors(e,t),r.cross(Vn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Vn.subVectors(r,t),Hn.subVectors(n,t),Un.subVectors(e,t);let a=Vn.dot(Vn),o=Vn.dot(Hn),s=Vn.dot(Un),c=Hn.dot(Hn),l=Hn.dot(Un),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Wn)!==null&&Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Wn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Wn.x),s.addScaledVector(a,Wn.y),s.addScaledVector(o,Wn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Zn.setScalar(0),Qn.setScalar(0),$n.setScalar(0),Zn.fromBufferAttribute(e,t),Qn.fromBufferAttribute(e,n),$n.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Zn,i.x),a.addScaledVector(Qn,i.y),a.addScaledVector($n,i.z),a}static isFrontFacing(e,t,n,r){return Vn.subVectors(n,t),Hn.subVectors(e,t),Vn.cross(Hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Vn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Gn.subVectors(r,n),Kn.subVectors(i,n),Jn.subVectors(e,n);let s=Gn.dot(Jn),c=Kn.dot(Jn);if(s<=0&&c<=0)return t.copy(n);Yn.subVectors(e,r);let l=Gn.dot(Yn),u=Kn.dot(Yn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Gn,a);Xn.subVectors(e,i);let f=Gn.dot(Xn),p=Kn.dot(Xn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Kn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return qn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(qn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Gn,a).addScaledVector(Kn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tr=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=rr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,rr):rr.fromBufferAttribute(r,t),rr.applyMatrix4(e.matrixWorld),this.expandByPoint(rr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ir.copy(e.boundingBox)),ir.applyMatrix4(e.matrixWorld),this.union(ir)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rr),rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),fr.subVectors(this.max,dr),ar.subVectors(e.a,dr),or.subVectors(e.b,dr),sr.subVectors(e.c,dr),cr.subVectors(or,ar),lr.subVectors(sr,or),ur.subVectors(ar,sr);let t=[0,-cr.z,cr.y,0,-lr.z,lr.y,0,-ur.z,ur.y,cr.z,0,-cr.x,lr.z,0,-lr.x,ur.z,0,-ur.x,-cr.y,cr.x,0,-lr.y,lr.x,0,-ur.y,ur.x,0];return!hr(t,ar,or,sr,fr)||(t=[1,0,0,0,1,0,0,0,1],!hr(t,ar,or,sr,fr))?!1:(pr.crossVectors(cr,lr),t=[pr.x,pr.y,pr.z],hr(t,ar,or,sr,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},nr=[new R,new R,new R,new R,new R,new R,new R,new R],rr=new R,ir=new tr,ar=new R,or=new R,sr=new R,cr=new R,lr=new R,ur=new R,dr=new R,fr=new R,pr=new R,mr=new R;function hr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){mr.fromArray(e,a);let o=i.x*Math.abs(mr.x)+i.y*Math.abs(mr.y)+i.z*Math.abs(mr.z),s=t.dot(mr),c=n.dot(mr),l=r.dot(mr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var gr=new R,_r=new Mt,vr=0,yr=class extends rt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ge,this.updateRanges=[],this.gpuType=h,this.version=0,this._normalizationScale=e===void 0?void 0:Ot(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix3(e),this.setXY(t,_r.x,_r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix4(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyNormalMatrix(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.transformDirection(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?kt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?At(e,this.array):Math.round(e*t)}},br=class extends yr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},xr=class extends yr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Sr=class extends yr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Cr=new tr,wr=new R,Tr=new R,Er=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Cr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(wr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(Tr)),this.expandByPoint(wr.copy(e.center).sub(Tr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Dr=0,Or=new rn,kr=new jn,Ar=new R,jr=new tr,Mr=new tr,Nr=new R,Pr=class e extends rt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dr++}),this.uuid=ct(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(qe(e)?xr:br)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new It().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Or.makeRotationFromQuaternion(e),this.applyMatrix4(Or),this}rotateX(e){return Or.makeRotationX(e),this.applyMatrix4(Or),this}rotateY(e){return Or.makeRotationY(e),this.applyMatrix4(Or),this}rotateZ(e){return Or.makeRotationZ(e),this.applyMatrix4(Or),this}translate(e,t,n){return Or.makeTranslation(e,t,n),this.applyMatrix4(Or),this}scale(e,t,n){return Or.makeScale(e,t,n),this.applyMatrix4(Or),this}lookAt(e){return kr.lookAt(e),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Sr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&I(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Nr.addVectors(this.boundingBox.min,jr.min),this.boundingBox.expandByPoint(Nr),Nr.addVectors(this.boundingBox.max,jr.max),this.boundingBox.expandByPoint(Nr)):(this.boundingBox.expandByPoint(jr.min),this.boundingBox.expandByPoint(jr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&L(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new R,1/0);else if(e){let n=this.boundingSphere.center;if(jr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Mr.setFromBufferAttribute(n),this.morphTargetsRelative?(Nr.addVectors(jr.min,Mr.min),jr.expandByPoint(Nr),Nr.addVectors(jr.max,Mr.max),jr.expandByPoint(Nr)):(jr.expandByPoint(Mr.min),jr.expandByPoint(Mr.max))}jr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Nr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Nr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Nr.fromBufferAttribute(a,t),o&&(Ar.fromBufferAttribute(e,t),Nr.add(Ar)),r=Math.max(r,n.distanceToSquared(Nr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&L(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){L(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new yr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new R,s[e]=new R;let l=new R,u=new R,d=new R,f=new Mt,p=new Mt,m=new Mt,h=new R,g=new R;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new R,b=new R,x=new R,S=new R;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new yr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new R,i=new R,a=new R,o=new R,s=new R,c=new R,l=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nr.fromBufferAttribute(e,t),Nr.normalize(),e.setXYZ(t,Nr.x,Nr.y,Nr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new yr(a,r,i)}if(this.index===null)return I(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Fr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ge,this.updateRanges=[],this.version=0,this.uuid=ct()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ir(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ir(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Ir(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=ct()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var Lr=new R,Rr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:Ot(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix4(e),this.setXYZ(t,Lr.x,Lr.y,Lr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyNormalMatrix(e),this.setXYZ(t,Lr.x,Lr.y,Lr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.transformDirection(e),this.setXYZ(t,Lr.x,Lr.y,Lr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Qe(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new yr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Qe(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?kt(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?At(e,this.data.array):Math.round(e*t)}},zr=new R,Br=new R,Vr=new It,Hr=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=zr.subVectors(n,t).cross(Br.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(zr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vr.getNormalMatrix(e),r=this.coplanarPoint(zr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ur=0,Wr=class extends rt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ur++}),this.uuid=ct(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new B(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=We,this.stencilZFail=We,this.stencilZPass=We,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){I(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new B().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Hr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new Mt().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Gr=class extends Wr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new B(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Kr,qr=new R,Jr=new R,Yr=new R,Xr=new Mt,Zr=new Mt,Qr=new rn,$r=new R,ei=new R,ti=new R,ni=new Mt,ri=new Mt,ii=new Mt,ai=class extends jn{constructor(e=new Gr){if(super(),this.isSprite=!0,this.type=`Sprite`,Kr===void 0){Kr=new Pr;let e=new Fr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Kr.setIndex([0,1,2,0,2,3]),Kr.setAttribute(`position`,new Rr(e,3,0,!1)),Kr.setAttribute(`uv`,new Rr(e,2,3,!1))}this.geometry=Kr,this.material=e,this.center=new Mt(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&L(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Jr.setFromMatrixScale(this.matrixWorld),Qr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Jr.multiplyScalar(-Yr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;oi($r.set(-.5,-.5,0),Yr,a,Jr,r,i),oi(ei.set(.5,-.5,0),Yr,a,Jr,r,i),oi(ti.set(.5,.5,0),Yr,a,Jr,r,i),ni.set(0,0),ri.set(1,0),ii.set(1,1);let o=e.ray.intersectTriangle($r,ei,ti,!1,qr);if(o===null&&(oi(ei.set(-.5,.5,0),Yr,a,Jr,r,i),ri.set(0,1),o=e.ray.intersectTriangle($r,ti,ei,!1,qr),o===null))return;let s=e.ray.origin.distanceTo(qr);s<e.near||s>e.far||t.push({distance:s,point:qr.clone(),uv:er.getInterpolation(qr,$r,ei,ti,ni,ri,ii,new Mt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function oi(e,t,n,r,i,a){Xr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Zr.copy(Xr):(Zr.x=a*Xr.x-i*Xr.y,Zr.y=i*Xr.x+a*Xr.y),e.copy(t),e.x+=Zr.x,e.y+=Zr.y,e.applyMatrix4(Qr)}var si=new R,ci=new R,li=new R,ui=new R,di=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ci.copy(e).add(t).multiplyScalar(.5),li.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(ci);let i=e.distanceTo(t)*.5,a=-this.direction.dot(li),o=ui.dot(this.direction),s=-ui.dot(li),c=ui.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ci).addScaledVector(li,d),f}intersectSphere(e,t){if(e.radius<0)return null;si.subVectors(e.center,this.origin);let n=si.dot(this.direction),r=si.dot(si)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,ee,O,k,te,A,ne;if(y>=b&&y>=x?(w=s,D=u,k=p,ne=g,s>=0?(S=c,C=l,T=d,E=f,ee=m,O=h,te=_,A=v):(S=l,C=c,T=f,E=d,ee=h,O=m,te=v,A=_)):b>=x?(w=c,D=d,k=m,ne=_,c>=0?(S=l,C=s,T=f,E=u,ee=h,O=p,te=v,A=g):(S=s,C=l,T=u,E=f,ee=p,O=h,te=g,A=v)):(w=l,D=f,k=h,ne=v,l>=0?(S=s,C=c,T=u,E=d,ee=p,O=m,te=g,A=_):(S=c,C=s,T=d,E=u,ee=m,O=p,te=_,A=g)),w===0)return null;let j=S/w,re=C/w,M=1/w,ie=T-j*D,ae=E-re*D,oe=ee-j*k,se=O-re*k,ce=te-j*ne,le=A-re*ne,ue=ce*se-le*oe,de=ie*le-ae*ce,fe=oe*ae-se*ie;if(r){if(ue<0||de<0||fe<0)return null}else if((ue<0||de<0||fe<0)&&(ue>0||de>0||fe>0))return null;let pe=ue+de+fe;if(pe===0)return null;let me=M*(ue*D+de*k+fe*ne);return(pe>0?me<0:me>0)?null:this.at(me/pe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fi=class extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new B(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pi=new rn,mi=new di,hi=new Er,gi=new R,_i=new R,vi=new R,yi=new R,bi=new R,xi=new R,Si=new R,Ci=new R,V=class extends jn{constructor(e=new Pr,t=new fi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){xi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(bi.fromBufferAttribute(s,e),a?xi.addScaledVector(bi,r):xi.addScaledVector(bi.sub(t),r))}t.add(xi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hi.copy(n.boundingSphere),hi.applyMatrix4(i),mi.copy(e.ray).recast(e.near),hi.containsPoint(mi.origin)===!1&&(mi.intersectSphere(hi,gi)===null||mi.origin.distanceToSquared(gi)>(e.far-e.near)**2)||(pi.copy(i).invert(),mi.copy(e.ray).applyMatrix4(pi),(n.boundingBox===null||mi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ti(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ti(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ti(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ti(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function wi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ci.copy(s),Ci.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ci);return l<n.near||l>n.far?null:{distance:l,point:Ci.clone(),object:e}}function Ti(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,_i),e.getVertexPosition(c,vi),e.getVertexPosition(l,yi);let u=wi(e,t,n,r,_i,vi,yi,Si);if(u){let e=new R;er.getBarycoord(Si,_i,vi,yi,e),i&&(u.uv=er.getInterpolatedAttribute(i,s,c,l,e,new Mt)),a&&(u.uv1=er.getInterpolatedAttribute(a,s,c,l,e,new Mt)),o&&(u.normal=er.getInterpolatedAttribute(o,s,c,l,e,new R),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new R,materialIndex:0};er.getNormal(_i,vi,yi,t.normal),u.face=t,u.barycoord=e}return u}var Ei=class extends Zt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Di=class extends yr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Oi=new rn,ki=new rn,Ai=[],ji=new tr,Mi=new rn,Ni=new V,Pi=new Er,Fi=class extends V{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Mi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new tr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Oi),ji.copy(e.boundingBox).applyMatrix4(Oi),this.boundingBox.union(ji)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Er),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Oi),Pi.copy(e.boundingSphere).applyMatrix4(Oi),this.boundingSphere.union(Pi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ni.geometry=this.geometry,Ni.material=this.material,Ni.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pi.copy(this.boundingSphere),Pi.applyMatrix4(n),e.ray.intersectsSphere(Pi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Oi),ki.multiplyMatrices(n,Oi),Ni.matrixWorld=ki,Ni.raycast(e,Ai);for(let e=0,n=Ai.length;e<n;e++){let n=Ai[e];n.instanceId=i,n.object=this,t.push(n)}Ai.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ei(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ii=new Er,Li=new Mt(.5,.5),Ri=new R,zi=class{constructor(e=new Hr,t=new Hr,n=new Hr,r=new Hr,i=new Hr,a=new Hr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ke,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476+Li.distanceTo(e.center),Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ri.x=r.normal.x>0?e.max.x:e.min.x,Ri.y=r.normal.y>0?e.max.y:e.min.y,Ri.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ri)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Bi=new rn,Vi=class e{constructor(){this.coordinateSystem=Ke,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Bi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new zi),n[e].setFromProjectionMatrix(Bi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new zi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Hi=class extends Wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new B(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ui=new R,Wi=new R,Gi=new rn,Ki=new di,qi=new Er,Ji=new R,Yi=new R,Xi=class extends jn{constructor(e=new Pr,t=new Hi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ui.fromBufferAttribute(t,e-1),Wi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ui.distanceTo(Wi);e.setAttribute(`lineDistance`,new Sr(n,1))}else I(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(r),qi.radius+=i,e.ray.intersectsSphere(qi)===!1)return;Gi.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(Gi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Zi(this,e,Ki,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Zi(this,e,Ki,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Zi(this,e,Ki,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Zi(this,e,Ki,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Zi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ui.fromBufferAttribute(s,i),Wi.fromBufferAttribute(s,a),n.distanceSqToSegment(Ui,Wi,Ji,Yi)>r)return;Ji.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ji);if(!(c<t.near||c>t.far))return{distance:c,point:Yi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Qi=class extends Wr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new B(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$i=new rn,ea=new di,ta=new Er,na=new R,ra=class extends jn{constructor(e=new Pr,t=new Qi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(r),ta.radius+=i,e.ray.intersectsSphere(ta)===!1)return;$i.copy(r).invert(),ea.copy(e.ray).applyMatrix4($i);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);na.fromBufferAttribute(l,n),ia(na,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)na.fromBufferAttribute(l,a),ia(na,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ia(e,t,n,r,i,a,o){let s=ea.distanceSqToPoint(e);if(s<n){let n=new R;ea.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var aa=class extends Zt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oa=class extends Zt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},sa=class extends Zt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ca=class extends sa{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},la=class extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},H=class e extends Pr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Sr(c,3)),this.setAttribute(`normal`,new Sr(l,3)),this.setAttribute(`uv`,new Sr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new R;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ua=class e extends Pr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new R,g=new R;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new Sr(o,3)),this.setAttribute(`normal`,new Sr(s,3)),this.setAttribute(`uv`,new Sr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},da=class e extends Pr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new R,l=new Mt;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Sr(a,3)),this.setAttribute(`normal`,new Sr(o,3)),this.setAttribute(`uv`,new Sr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},U=class e extends Pr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Sr(u,3)),this.setAttribute(`normal`,new Sr(d,3)),this.setAttribute(`uv`,new Sr(f,2));function _(){let a=new R,_=new R,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new Mt,m=new R,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fa=class e extends U{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},pa=class e extends Pr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Sr(i,3)),this.setAttribute(`normal`,new Sr(i.slice(),3)),this.setAttribute(`uv`,new Sr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new R,r=new R,i=new R;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new R;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new R;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new R,t=new R,n=new R,r=new R,o=new Mt,s=new Mt,c=new Mt;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},ma=class e extends pa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ha=class e extends pa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ga=class e extends pa{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},_a=class e extends Pr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Sr(p,3)),this.setAttribute(`normal`,new Sr(m,3)),this.setAttribute(`uv`,new Sr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},va=class e extends Pr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new R,p=new Mt;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Sr(s,3)),this.setAttribute(`normal`,new Sr(c,3)),this.setAttribute(`uv`,new Sr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},W=class e extends Pr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new R,d=new R,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Sr(p,3)),this.setAttribute(`normal`,new Sr(m,3)),this.setAttribute(`uv`,new Sr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},ya=class e extends pa{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type=`TetrahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ba=class e extends Pr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new R,f=new R,p=new R;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Sr(c,3)),this.setAttribute(`normal`,new Sr(l,3)),this.setAttribute(`uv`,new Sr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function xa(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ca(i))i.isRenderTargetTexture?(I(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ca(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Sa(e){let t={};for(let n=0;n<e.length;n++){let r=xa(e[n]);for(let e in r)t[e]=r[e]}return t}function Ca(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function wa(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ta(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Vt.workingColorSpace}var Ea={clone:xa,merge:Sa},Da=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ka=class extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Da,this.fragmentShader=Oa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xa(e.uniforms),this.uniformsGroups=wa(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new B().setHex(r.value);break;case`v2`:this.uniforms[n].value=new Mt().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new R().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Qt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new It().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new rn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Aa=class extends ka{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ja=class extends Wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new B(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ma=class extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Be,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Na=class extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Pa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Fa(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ia=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},La=class extends Ia{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Re,endingEnd:Re}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ze:i=e,o=2*t-n;break;case P:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case ze:a=e,s=2*n-t;break;case P:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ra=class extends Ia{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},za=class extends Ia{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ba=class extends Ia{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Ua(n,t,g,y,r);i[p]=Va(x,o,_,b,m)}return i}};function Va(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ha(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Ua(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Va(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ha(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Wa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Pa(t,this.TimeBufferType),this.values=Pa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pa(e.times,Array),values:Pa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Fa(e.settings)&&(n.settings={inTangents:Pa(e.settings.inTangents,Array),outTangents:Pa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new La(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ba(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fe:t=this.InterpolantFactoryMethodDiscrete;break;case Ie:t=this.InterpolantFactoryMethodLinear;break;case N:t=this.InterpolantFactoryMethodSmooth;break;case Le:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return I(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fe;case this.InterpolantFactoryMethodLinear:return Ie;case this.InterpolantFactoryMethodSmooth:return N;case this.InterpolantFactoryMethodBezier:return Le}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Fa(this.settings)&&(Ga(this.settings.inTangents,e),Ga(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Fa(this.settings)&&(Ka(this.settings.inTangents,e),Ka(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(L(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(L(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){L(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){L(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Je(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){L(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===N,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Fa(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ga(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Ka(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Wa.prototype.ValueTypeName=``,Wa.prototype.TimeBufferType=Float32Array,Wa.prototype.ValueBufferType=Float32Array,Wa.prototype.DefaultInterpolation=Ie;var qa=class extends Wa{constructor(e,t,n){super(e,t,n)}};qa.prototype.ValueTypeName=`bool`,qa.prototype.ValueBufferType=Array,qa.prototype.DefaultInterpolation=Fe,qa.prototype.InterpolantFactoryMethodLinear=void 0,qa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends Wa{constructor(e,t,n,r){super(e,t,n,r)}};Ja.prototype.ValueTypeName=`color`;var Ya=class extends Wa{constructor(e,t,n,r){super(e,t,n,r)}};Ya.prototype.ValueTypeName=`number`;var Xa=class extends Ia{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Nt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Za=class extends Wa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Xa(this.times,this.values,this.getValueSize(),e)}};Za.prototype.ValueTypeName=`quaternion`,Za.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends Wa{constructor(e,t,n){super(e,t,n)}};Qa.prototype.ValueTypeName=`string`,Qa.prototype.ValueBufferType=Array,Qa.prototype.DefaultInterpolation=Fe,Qa.prototype.InterpolantFactoryMethodLinear=void 0,Qa.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends Wa{constructor(e,t,n,r){super(e,t,n,r)}};$a.prototype.ValueTypeName=`vector`;var eo=class extends jn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new B(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},to=class extends eo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(jn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new B(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},no=new rn,ro=new R,io=new R,ao=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zi,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ro.setFromMatrixPosition(e.matrixWorld),t.position.copy(ro),io.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(io),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){no.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(no,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(no)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},oo=new R,so=new Nt,co=new R,lo=class extends jn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Ke,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oo,so,co),co.x===1&&co.y===1&&co.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,so,co.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(oo,so,co),co.x===1&&co.y===1&&co.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,so,co.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},uo=new R,fo=new Mt,po=new Mt,mo=class extends lo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=st*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ot*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return st*2*Math.atan(Math.tan(ot*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){uo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(uo.x,uo.y).multiplyScalar(-e/uo.z),uo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(uo.x,uo.y).multiplyScalar(-e/uo.z)}getViewSize(e,t){return this.getViewBounds(e,fo,po),t.subVectors(po,fo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ot*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ho=class extends ao{constructor(){super(new mo(90,1,.5,500)),this.isPointLightShadow=!0}},go=class extends eo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ho}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},_o=class extends lo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vo=class extends ao{constructor(){super(new _o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yo=class extends eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(jn.DEFAULT_UP),this.updateMatrix(),this.target=new jn,this.shadow=new vo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},bo=-90,xo=1,So=class extends jn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new mo(bo,xo,e,t);r.layers=this.layers,this.add(r);let i=new mo(bo,xo,e,t);i.layers=this.layers,this.add(i);let a=new mo(bo,xo,e,t);a.layers=this.layers,this.add(a);let o=new mo(bo,xo,e,t);o.layers=this.layers,this.add(o);let s=new mo(bo,xo,e,t);s.layers=this.layers,this.add(s);let c=new mo(bo,xo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Co=class extends mo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},wo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=To.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function To(){this._document.hidden===!1&&this.reset()}var Eo=`\\[\\]\\.:\\/`,Do=RegExp(`[\\[\\]\\.:\\/]`,`g`),Oo=`[^\\[\\]\\.:\\/]`,ko=`[^`+Eo.replace(`\\.`,``)+`]`,Ao=`((?:WC+[\\/:])*)`.replace(`WC`,Oo),jo=`(WCOD+)?`.replace(`WCOD`,ko),Mo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Oo),No=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Oo),Po=RegExp(`^`+Ao+jo+Mo+No+`$`),Fo=[`material`,`materials`,`bones`,`map`],Io=class{constructor(e,t,n){let r=n||Lo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Do,``)}static parseTrackName(e){let t=Po.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Fo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){I(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){L(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){L(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){L(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){L(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){L(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;L(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lo.Composite=Io,Lo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Lo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Lo.prototype.GetterByBindingType=[Lo.prototype._getValue_direct,Lo.prototype._getValue_array,Lo.prototype._getValue_arrayElement,Lo.prototype._getValue_toArray],Lo.prototype.SetterByBindingTypeAndVersioning=[[Lo.prototype._setValue_direct,Lo.prototype._setValue_direct_setNeedsUpdate,Lo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lo.prototype._setValue_array,Lo.prototype._setValue_array_setNeedsUpdate,Lo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lo.prototype._setValue_arrayElement,Lo.prototype._setValue_arrayElement_setNeedsUpdate,Lo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lo.prototype._setValue_fromArray,Lo.prototype._setValue_fromArray_setNeedsUpdate,Lo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ro=new rn,zo=class{constructor(e,t,n=0,r=1/0){this.ray=new di(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new hn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):L(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Ro.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ro),this}intersectObject(e,t=!0,n=[]){return Vo(e,this,n,t),n.sort(Bo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Vo(e[r],this,n,t);return n.sort(Bo),n}};function Bo(e,t){return e.distance-t.distance}function Vo(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Vo(r[e],t,n,!0)}}(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function Ho(e,t,n,r){let i=Uo(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case O:return e*t*2/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case te:return e*t*4/i.components*i.byteLength;case A:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case j:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ie:case oe:return Math.max(e,16)*Math.max(t,8)/4;case M:case ae:return Math.max(e,8)*Math.max(t,8)/2;case se:case ce:case ue:case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case le:case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ee:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case De:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Oe:case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*16;case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ne:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Uo(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?I(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Wo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Go(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Ko={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},G={common:{diffuse:{value:new B(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new B(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new B(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new B(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},qo={basic:{uniforms:Sa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:Ko.meshbasic_vert,fragmentShader:Ko.meshbasic_frag},lambert:{uniforms:Sa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new B(0)},envMapIntensity:{value:1}}]),vertexShader:Ko.meshlambert_vert,fragmentShader:Ko.meshlambert_frag},phong:{uniforms:Sa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new B(0)},specular:{value:new B(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ko.meshphong_vert,fragmentShader:Ko.meshphong_frag},standard:{uniforms:Sa([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new B(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ko.meshphysical_vert,fragmentShader:Ko.meshphysical_frag},toon:{uniforms:Sa([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new B(0)}}]),vertexShader:Ko.meshtoon_vert,fragmentShader:Ko.meshtoon_frag},matcap:{uniforms:Sa([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:Ko.meshmatcap_vert,fragmentShader:Ko.meshmatcap_frag},points:{uniforms:Sa([G.points,G.fog]),vertexShader:Ko.points_vert,fragmentShader:Ko.points_frag},dashed:{uniforms:Sa([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ko.linedashed_vert,fragmentShader:Ko.linedashed_frag},depth:{uniforms:Sa([G.common,G.displacementmap]),vertexShader:Ko.depth_vert,fragmentShader:Ko.depth_frag},normal:{uniforms:Sa([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:Ko.meshnormal_vert,fragmentShader:Ko.meshnormal_frag},sprite:{uniforms:Sa([G.sprite,G.fog]),vertexShader:Ko.sprite_vert,fragmentShader:Ko.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ko.background_vert,fragmentShader:Ko.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ko.backgroundCube_vert,fragmentShader:Ko.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ko.cube_vert,fragmentShader:Ko.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ko.equirect_vert,fragmentShader:Ko.equirect_frag},distance:{uniforms:Sa([G.common,G.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ko.distance_vert,fragmentShader:Ko.distance_frag},shadow:{uniforms:Sa([G.lights,G.fog,{color:{value:new B(0)},opacity:{value:1}}]),vertexShader:Ko.shadow_vert,fragmentShader:Ko.shadow_frag}};qo.physical={uniforms:Sa([qo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new It},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new B(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new B(0)},specularColor:{value:new B(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ko.meshphysical_vert,fragmentShader:Ko.meshphysical_frag};var Jo={r:0,b:0,g:0},Yo=new rn,Xo=new It;Xo.set(-1,0,0,0,1,0,0,0,1);function Zo(e,t,n,r,i,a){let o=new B(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new V(new H(1,1,1),new ka({name:`BackgroundCubeMaterial`,uniforms:xa(qo.backgroundCube.uniforms),vertexShader:qo.backgroundCube.vertexShader,fragmentShader:qo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Yo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Xo),l.material.toneMapped=Vt.getTransfer(i.colorSpace)!==Ue,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new V(new _a(2,2),new ka({name:`BackgroundMaterial`,uniforms:xa(qo.background.uniforms),vertexShader:qo.background.vertexShader,fragmentShader:qo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Vt.getTransfer(i.colorSpace)!==Ue,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Jo,Ta(e)),n.buffers.color.setClear(Jo.r,Jo.g,Jo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Qo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function $o(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function es(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(I(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&I(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&I(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function ts(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Hr,s=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ns=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new aa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new H(5,5,5),i=new ka({name:`CubemapFromEquirect`,uniforms:xa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new V(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new So(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},rs=256,is=3,as=20,os=256,ss=16,cs=3,ls=new R,us=new B,ds=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new So(1,10,null),this._boxMesh=new V(new H(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ls}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(us));let h=new So(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_s(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(rs,Et(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?rs:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=fs(e,!1,!1),n=Math.log2(e)-is;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=fs(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=vs()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=_s()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=ms(),this._integrationMaterial=hs());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/ss);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-cs)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(os*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=gs());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function fs(e,t,n){return new ns(e,{minFilter:c,generateMipmaps:t,type:g,colorSpace:F,depthBuffer:n})}function ps(e,t,n){return new ka({name:e,uniforms:t,vertexShader:Ko.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function ms(){return ps(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${os}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function hs(){return ps(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ss}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function gs(){return ps(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${as}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function _s(){return ps(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function vs(){return ps(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ys(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new ns(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ds(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ds(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function bs(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&et(`WebGLRenderer: `+e+` extension not supported.`),t}}}function xs(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?xr:br)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Ss(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Cs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:L(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ws(e,t,n){let r=new WeakMap,i=new Qt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new tn(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new Mt(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ts(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Es={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ds(e,t,n,r,i,a){let o=new en(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Pr;u.setAttribute(`position`,new Sr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Sr([0,2,0,0,2,0],2));let d=new Aa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new V(u,d),p=new _o(-1,1,1,-1,0,1),m=null,h=null,_=!1,v,b=null,x=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<x.length;n++){let r=x[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){x=e,S=x.length>0&&x[0].isRenderPass===!0;let t=o.width,n=o.height;x.length>0&&s===null&&(s=new en(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new en(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&x.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new sa(t,n),a===!0&&(l.format=E,l.type=y)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<x.length;e++){let i=x[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(_||e.toneMapping===0&&x.length===0)return!1;if(b=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=v,_=!0;let n=o,r=s;for(let i=0;i<x.length;i++){let a=x[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Vt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Es[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(b),e.render(f,p),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Os=new Zt,ks=new sa(1,1),As=new ca(1),js=new tn,Ms=new nn,Ns=new aa,Ps=[],Fs=[],Is=new Float32Array(16),Ls=new Float32Array(9),Rs=new Float32Array(4);function zs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ps[i];if(a===void 0&&(a=new Float32Array(i),Ps[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Bs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Vs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Hs(e,t){let n=Fs[t];n===void 0&&(n=new Int32Array(t),Fs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Us(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ws(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Bs(n,t))return;e.uniform2fv(this.addr,t),Vs(n,t)}}function Gs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Bs(n,t))return;e.uniform3fv(this.addr,t),Vs(n,t)}}function Ks(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Bs(n,t))return;e.uniform4fv(this.addr,t),Vs(n,t)}}function qs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Bs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Vs(n,t)}else{if(Bs(n,r))return;Rs.set(r),e.uniformMatrix2fv(this.addr,!1,Rs),Vs(n,r)}}function Js(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Bs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Vs(n,t)}else{if(Bs(n,r))return;Ls.set(r),e.uniformMatrix3fv(this.addr,!1,Ls),Vs(n,r)}}function Ys(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Bs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Vs(n,t)}else{if(Bs(n,r))return;Is.set(r),e.uniformMatrix4fv(this.addr,!1,Is),Vs(n,r)}}function Xs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Zs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Bs(n,t))return;e.uniform2iv(this.addr,t),Vs(n,t)}}function Qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Bs(n,t))return;e.uniform3iv(this.addr,t),Vs(n,t)}}function $s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Bs(n,t))return;e.uniform4iv(this.addr,t),Vs(n,t)}}function ec(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function tc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Bs(n,t))return;e.uniform2uiv(this.addr,t),Vs(n,t)}}function nc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Bs(n,t))return;e.uniform3uiv(this.addr,t),Vs(n,t)}}function rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Bs(n,t))return;e.uniform4uiv(this.addr,t),Vs(n,t)}}function ic(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function ac(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?ic(ks):Os,n.setTexture2D(t||a,i)}function oc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ms,i)}function sc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?ic(As):Ns,n.setTextureCube(t||a,i)}function cc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||js,i)}function lc(e){switch(e){case 5126:return Us;case 35664:return Ws;case 35665:return Gs;case 35666:return Ks;case 35674:return qs;case 35675:return Js;case 35676:return Ys;case 5124:case 35670:return Xs;case 35667:case 35671:return Zs;case 35668:case 35672:return Qs;case 35669:case 35673:return $s;case 5125:return ec;case 36294:return tc;case 36295:return nc;case 36296:return rc;case 35678:case 36198:case 36298:case 36306:case 35682:return ac;case 35679:case 36299:case 36307:return oc;case 35680:case 36300:case 36308:case 36293:return sc;case 36289:case 36303:case 36311:case 36292:return cc}}function uc(e,t){e.uniform1fv(this.addr,t)}function dc(e,t){let n=zs(t,this.size,2);e.uniform2fv(this.addr,n)}function fc(e,t){let n=zs(t,this.size,3);e.uniform3fv(this.addr,n)}function pc(e,t){let n=zs(t,this.size,4);e.uniform4fv(this.addr,n)}function mc(e,t){let n=zs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function hc(e,t){let n=zs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function gc(e,t){let n=zs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function _c(e,t){e.uniform1iv(this.addr,t)}function vc(e,t){e.uniform2iv(this.addr,t)}function yc(e,t){e.uniform3iv(this.addr,t)}function bc(e,t){e.uniform4iv(this.addr,t)}function xc(e,t){e.uniform1uiv(this.addr,t)}function Sc(e,t){e.uniform2uiv(this.addr,t)}function Cc(e,t){e.uniform3uiv(this.addr,t)}function wc(e,t){e.uniform4uiv(this.addr,t)}function Tc(e,t,n){let r=this.cache,i=t.length,a=Hs(n,i);Bs(r,a)||(e.uniform1iv(this.addr,a),Vs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?ic(ks):Os;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Ec(e,t,n){let r=this.cache,i=t.length,a=Hs(n,i);Bs(r,a)||(e.uniform1iv(this.addr,a),Vs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ms,a[e])}function Dc(e,t,n){let r=this.cache,i=t.length,a=Hs(n,i);Bs(r,a)||(e.uniform1iv(this.addr,a),Vs(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?ic(As):Ns;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Oc(e,t,n){let r=this.cache,i=t.length,a=Hs(n,i);Bs(r,a)||(e.uniform1iv(this.addr,a),Vs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||js,a[e])}function kc(e){switch(e){case 5126:return uc;case 35664:return dc;case 35665:return fc;case 35666:return pc;case 35674:return mc;case 35675:return hc;case 35676:return gc;case 5124:case 35670:return _c;case 35667:case 35671:return vc;case 35668:case 35672:return yc;case 35669:case 35673:return bc;case 5125:return xc;case 36294:return Sc;case 36295:return Cc;case 36296:return wc;case 35678:case 36198:case 36298:case 36306:case 35682:return Tc;case 35679:case 36299:case 36307:return Ec;case 35680:case 36300:case 36308:case 36293:return Dc;case 36289:case 36303:case 36311:case 36292:return Oc}}var Ac=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lc(t.type)}},jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kc(t.type)}},Mc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Nc=/(\w+)(\])?(\[|\.)?/g;function Pc(e,t){e.seq.push(t),e.map[t.id]=t}function Fc(e,t,n){let r=e.name,i=r.length;for(Nc.lastIndex=0;;){let a=Nc.exec(r),o=Nc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Pc(n,l===void 0?new Ac(s,e,t):new jc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Mc(s),Pc(n,e)),n=e}}}var Ic=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Fc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Lc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Rc=37297,zc=0;function Bc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Vc=new It;function Hc(e){Vt._getMatrix(Vc,Vt.workingColorSpace,e);let t=`mat3( ${Vc.elements.map(e=>e.toFixed(4))} )`;switch(Vt.getTransfer(e)){case He:return[t,`LinearTransferOETF`];case Ue:return[t,`sRGBTransferOETF`];default:return I(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Uc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Bc(e.getShaderSource(t),r)}return i}function Wc(e,t){let n=Hc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Gc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Kc(e,t){let n=Gc[t];return n===void 0?(I(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var qc=new R;function Jc(){return Vt.getLuminanceCoefficients(qc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${qc.x.toFixed(4)}, ${qc.y.toFixed(4)}, ${qc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Yc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Qc).join(`
`)}function Xc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Zc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Qc(e){return e!==``}function $c(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function el(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var tl=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(e){return e.replace(tl,rl)}function rl(e,t){let n=Ko[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return nl(n)}var il=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(e){return e.replace(il,ol)}function ol(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function sl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var cl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ll(e){return cl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ul={302:`ENVMAP_MODE_REFRACTION`};function dl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:ul[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var fl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function pl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:fl[e.combine]||`ENVMAP_BLENDING_NONE`}function ml(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ll(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=dl(n),d=pl(n),f=Yc(n),p=Xc(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Qc).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Qc).join(`
`),g.length>0&&(g+=`
`)):(h=[sl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Qc).join(`
`),g=[sl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Ko.tonemapping_pars_fragment,n.toneMapping===0?``:Kc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Ko.colorspace_pars_fragment,Wc(`linearToOutputTexel`,n.outputColorSpace),Jc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Qc).join(`
`)),o=nl(o),o=$c(o,n),o=el(o,n),s=nl(s),s=$c(s,n),s=el(s,n),o=al(o),s=al(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Lc(i,i.VERTEX_SHADER,v),x=Lc(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Uc(i,b,`vertex`),n=Uc(i,x,`fragment`);L(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):I(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Ic(i,m),w=Zc(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Rc)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zc++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var hl=0,gl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _l(e),t.set(e,n)),n}},_l=class{constructor(e){this.id=hl++,this.code=e,this.usedTimes=0}};function vl(e){return e===1030||e===37490||e===36285}function yl(e,t,n,r,i,a){let o=new hn,s=new gl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&I(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,ee,O;if(x){let e=qo[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,O=t.id}let k=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),A=m.isInstancedMesh===!0,ne=m.isBatchedMesh===!0,j=!!i.map,re=!!i.matcap,M=!!b,ie=M&&b.isPMREMTexture===!0,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,de=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.diffuseRoughness>0,ge=i.dispersion>0,_e=i.retroreflectivity>0,ve=i.iridescence>0,ye=i.sheen>0,be=i.transmission>0,xe=pe&&!!i.anisotropyMap,Se=me&&!!i.clearcoatMap,Ce=me&&!!i.clearcoatNormalMap,we=me&&!!i.clearcoatRoughnessMap,Te=he&&!!i.diffuseRoughnessMap,Ee=ve&&!!i.iridescenceMap,De=ve&&!!i.iridescenceThicknessMap,Oe=ye&&!!i.sheenColorMap,ke=ye&&!!i.sheenRoughnessMap,Ae=!!i.specularMap,je=!!i.specularColorMap,Me=!!i.specularIntensityMap,Ne=be&&!!i.transmissionMap,Pe=be&&!!i.thicknessMap,Fe=!!i.gradientMap,Ie=!!i.alphaMap,N=i.alphaTest>0,Le=!!i.alphaHash,Re=!!i.extensions,ze=0;i.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ze=e.toneMapping);let P=ie?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Be={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:O,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:ne,batchingColor:ne&&m._colorsTexture!==null,instancing:A,instancingColor:A&&m.instanceColor!==null,instancingMorph:A&&m.morphTexture!==null,outputColorSpace:k===null?e.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Vt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:j,matcap:re,envMap:M,envMapMode:M&&b.mapping,envMapPMREM:ie,envMapMaxLod:ie?P.length-1:null,envMapSize:ie?P[0].width:null,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&vl(i.normalMap.format),metalnessMap:de,roughnessMap:fe,anisotropy:pe,anisotropyMap:xe,clearcoat:me,clearcoatMap:Se,clearcoatNormalMap:Ce,clearcoatRoughnessMap:we,diffuseRoughness:he,diffuseRoughnessMap:Te,dispersion:ge,retroreflection:_e,iridescence:ve,iridescenceMap:Ee,iridescenceThicknessMap:De,sheen:ye,sheenColorMap:Oe,sheenRoughnessMap:ke,specularMap:Ae,specularColorMap:je,specularIntensityMap:Me,transmission:be,transmissionMap:Ne,thicknessMap:Pe,gradientMap:Fe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ie,alphaTest:N,alphaHash:Le,combine:i.combine,mapUv:j&&p(i.map.channel),aoMapUv:ae&&p(i.aoMap.channel),lightMapUv:oe&&p(i.lightMap.channel),bumpMapUv:se&&p(i.bumpMap.channel),normalMapUv:ce&&p(i.normalMap.channel),displacementMapUv:le&&p(i.displacementMap.channel),emissiveMapUv:ue&&p(i.emissiveMap.channel),metalnessMapUv:de&&p(i.metalnessMap.channel),roughnessMapUv:fe&&p(i.roughnessMap.channel),anisotropyMapUv:xe&&p(i.anisotropyMap.channel),clearcoatMapUv:Se&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Te&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:Ee&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:De&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:ke&&p(i.sheenRoughnessMap.channel),specularMapUv:Ae&&p(i.specularMap.channel),specularColorMapUv:je&&p(i.specularColorMap.channel),specularIntensityMapUv:Me&&p(i.specularIntensityMap.channel),transmissionMapUv:Ne&&p(i.transmissionMap.channel),thicknessMapUv:Pe&&p(i.thicknessMap.channel),alphaMapUv:Ie&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ce||pe),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(j||Ie),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ze,decodeVideoTexture:j&&i.map.isVideoTexture===!0&&Vt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Re&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Re&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=qo[t];n=Ea.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new ml(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function bl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function xl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Sl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Cl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||xl),r.length>1&&r.sort(t||Sl),i.length>1&&i.sort(t||Sl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function wl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Cl,e.set(t,[i])):n>=r.length?(i=new Cl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Tl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new R,color:new B};break;case`SpotLight`:n={position:new R,direction:new R,color:new B,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new R,color:new B,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new R,skyColor:new B,groundColor:new B};break;case`RectAreaLight`:n={color:new B,position:new R,halfWidth:new R,halfHeight:new R}}return e[t.id]=n,n}}}function El(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Dl=0;function Ol(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function kl(e){let t=new Tl,n=El(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new R);let i=new R,a=new rn,o=new rn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Ol);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Dl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Al(e){let t=new kl(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function jl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Al(e),t.set(n,[a])):r>=i.length?(a=new Al(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ml=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Pl=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Fl=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Il=new rn,Ll=new R,Rl=new R;function zl(e,t,n){let i=new zi,a=new Mt,s=new Mt,c=new Qt,l=new Ma,u=new Na,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:Ml,fragmentShader:Nl}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Pr;y.setAttribute(`position`,new yr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new V(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(I(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){I(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){I(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new en(a.x,a.y,{format:O,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new sa(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new ns(a.x),p.map.depthTexture=new ca(a.x,m)):(p.map=new en(a.x,a.y),p.map.depthTexture=new sa(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Ll.setFromMatrixPosition(d.matrixWorld),e.position.copy(Ll),Rl.copy(e.position),Rl.add(Pl[t]),e.up.copy(Fl[t]),e.lookAt(Rl),e.updateMatrixWorld(),n.makeTranslation(-Ll.x,-Ll.y,-Ll.z),Il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Il,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new en(a.x,a.y,{format:O,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),s=n.material;if(Array.isArray(s)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)E(l[e],r,a,o,s,c)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Bl(e,t){function n(){let t=!1,n=new Qt,r=null,i=new Qt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?de(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=nt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?de(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new B(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,te=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,j=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ne=j>=2):(j=parseFloat(/^WebGL (\d)/.exec(re)[1]),ne=j>=1);let M=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Qt().fromArray(ae),ce=new Qt().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),de(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),de(e.CULL_FACE),ve(0);function de(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(fe(e.BLEND),g=!1);else if(g===!1&&(de(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:L(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:L(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:L(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:L(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):de(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?de(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(de(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function Se(t){t!==O&&(ne&&e.lineWidth(t),O=t)}function Ce(t,n,r){t?(de(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?de(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+A-1),M!==t&&(e.activeTexture(t),M=t)}function Ee(t,n,r){r===void 0&&(r=M===null?e.TEXTURE0+A-1:M);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(M!==r&&(e.activeTexture(r),M=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function De(){let t=ie[M];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ie(){try{e.texImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function N(){try{e.texImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function ze(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function P(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function Be(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Ve(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function F(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},M=null,ie={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new B(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,te=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:de,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:Ie,texImage3D:N,pixelStorei:Re,getParameter:Le,updateUBOMapping:Be,uniformBlockBinding:Ve,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:ze,viewport:P,reset:F}}function Vl(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new Mt,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function D(e,t){return T?new OffscreenCanvas(e,t):Ye(`canvas`)}function ee(e,t,n){let r=1,i=F(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=D(n,a));let o=t?D(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),I(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&I(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function O(e){return e.generateMipmaps}function k(e){l.generateMipmap(e)}function te(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function A(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];I(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||I(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?He:Vt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function ne(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,I(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function j(e,t){return O(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function M(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function ie(e){oe(e.target)}function ae(e){se(e.target)}function oe(e){e.removeEventListener(`dispose`,ie),M(e),le(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function se(e){e.removeEventListener(`dispose`,ae),M(e),de(e)}function ce(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?se(t):oe(t))}C.clear(),b.clear()}function le(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&ue(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function ue(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function de(e){let t=f.get(e);t.__depthDisposeCallback&&t.__depthDisposeCallback();let n=e.depthTexture;if(n&&n.renderTarget===e&&oe(n),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,t=r.length;e<t;e++){let t=f.get(r[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(r[e])}f.remove(e)}let fe=0;function pe(){fe=0}function me(){return fe}function he(e){fe=e}function ge(){let e=fe;return e>=p.maxTextures&&I(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),fe+=1,e}function _e(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ve(e,t){let n=f.get(e);if(e.isVideoTexture&&Be(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)I(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)I(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ke(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function ye(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?ke(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function be(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?ke(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function xe(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?Ae(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let Se={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},Ce={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},we={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function Te(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&I(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,Se[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,Se[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,Se[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,Ce[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,Ce[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,we[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function Ee(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,ie),re(t));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=_e(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&ue(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function De(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Oe(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=De(r.start,t.width,4),c=De(n.start,t.width,4);r.start<=o+1&&s===c&&De(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function ke(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=Ee(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Vt.getPrimaries(Vt.workingColorSpace),n=t.colorSpace===``?null:Vt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=ee(t.image,!1,p.maxTextureSize);e=Ve(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=A(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);Te(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=j(t,e);if(t.isDepthTexture)u=ne(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&Oe(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=Ho(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=Ho(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=F(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=F(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);O(t)&&t.mipmapsAutoUpdate===!0&&k(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Ae(e,t,n){if(t.image.length!==6)return;let r=Ee(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Vt.getPrimaries(Vt.workingColorSpace),o=t.colorSpace===``?null:Vt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=ee(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Ve(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=A(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=j(t,h);Te(l.TEXTURE_CUBE_MAP,t);let C;if(t.isDepthTexture){if(v=ne(t.format===E,t.type),b){if(y)d.texStorage2D(l.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let e=0;e<6;e++)d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,h.width,h.height,0,g,_,null)}}else if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=F(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}O(t)&&t.mipmapsAutoUpdate===!0&&k(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function je(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=A(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),P(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,ze(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Me(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=ne(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;P(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,ze(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,ze(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=A(i.internalFormat,a,o,i.normalized,i.colorSpace);P(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,ze(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,ze(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Ne(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);i.__renderTarget=t;let a=r?t.depthTexture.image[0]:t.depthTexture.image;i.__webglTexture&&a.width===t.width&&a.height===t.height||(a.width=t.width,a.height=t.height,t.depthTexture.needsUpdate=!0),r?xe(t.depthTexture,0):ve(t.depthTexture,0);let o=i.__webglTexture,s=ze(t),c=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,u=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)P(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else if(t.depthTexture.format===1027)P(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Pe(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Ne(t.__webglFramebuffer[n],e,n);else e.texture.mipmaps.length>0?Ne(t.__webglFramebuffer[0],e,0):Ne(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Me(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(e.texture.mipmaps.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Me(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Fe(e,t,n){let r=f.get(e);t!==void 0&&je(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Pe(e)}function Ie(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,ae),re(e);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&P(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=A(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=ze(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Me(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),Te(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)je(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else je(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);O(t)?k(l.TEXTURE_CUBE_MAP):t.mipmaps.length>0&&l.texParameteri(l.TEXTURE_CUBE_MAP,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),Te(o,r),je(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),O(r)&&k(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),Te(i,t),t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)je(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else je(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);O(t)?k(i):t.mipmaps.length>0&&l.texParameteri(i,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}e.depthBuffer&&Pe(e)}function N(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(O(r)&&r.mipmapsAutoUpdate===!0){let t=te(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),k(t),d.unbindTexture()}}}let Le=[];function Re(e){if(e.samples>0){if(P(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.texture.mipmaps.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Le.length=0,Le.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&Le.push(a),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Le))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function ze(e){return Math.min(p.maxSamples,e.samples)}function P(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Be(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ve(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Vt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&I(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):L(`WebGLTextures: Unsupported texture color space:`,n)),t}function F(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ge,this.resetTextureUnits=pe,this.getTextureUnits=me,this.setTextureUnits=he,this.setTexture2D=ve,this.setTexture2DArray=ye,this.setTexture3D=be,this.setTextureCube=xe,this.rebindTextures=Fe,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=je,this.useMultisampledRTT=P,this.dispose=ce}function Hl(e,t){function n(n,r=``){let i,a=Vt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Ul=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Gl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new la(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ka({vertexShader:Ul,fragmentShader:Wl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new V(new _a(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kl=class extends rt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Gl,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],ee=new Mt,O=null,k=null,te=new mo;te.viewport=new Qt;let A=new mo;A.viewport=new Qt;let ne=[te,A],j=new Co,re=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Nn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Nn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Nn,C[e]=t),t.getHandSpace()};function ie(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,ie),r.removeEventListener(`selectstart`,ie),r.removeEventListener(`selectend`,ie),r.removeEventListener(`squeeze`,ie),r.removeEventListener(`squeezestart`,ie),r.removeEventListener(`squeezeend`,ie),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}re=null,M=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(ee.width,ee.height,!1),k!==null){let e=k.camera;e.fov=k.fov,e.zoom=k.zoom,e.updateProjectionMatrix(),k=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ie),r.addEventListener(`selectstart`,ie),r.addEventListener(`selectend`,ie),r.addEventListener(`squeeze`,ie),r.addEventListener(`squeezestart`,ie),r.addEventListener(`squeezeend`,ie),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),b.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(ee),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new en(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new sa(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new en(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),j.near=A.near=te.near=t,j.far=A.far=te.far=n,(re!==j.near||M!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),re=j.near,M=j.far),j.layers.mask=e.layers.mask|6,te.layers.mask=j.layers.mask&-5,A.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;se(j,i);for(let e=0;e<a.length;e++)se(a[e],i);j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),k===null&&e.isPerspectiveCamera&&(k={camera:e,fov:e.fov,zoom:e.zoom}),ce(e,j,i)};function ce(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=st*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(j)},this.getCameraTexture=function(e){return v[e]};let le=null;function ue(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ne[n];o===void 0&&(o=new mo,o.layers.enable(n),o.viewport=new Qt,ne[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new la,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}le&&le(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let de=new Wo;de.setAnimationLoop(ue),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},ql=new rn,Jl=new It;Jl.set(-1,0,0,0,1,0,0,0,1);function Yl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ta(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ql.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Jl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Xl(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?I(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):I(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Zl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ql=null;function $l(){return Ql===null&&(Ql=new Ei(Zl,16,16,O,g),Ql.name=`DFG_LUT`,Ql.minFilter=o,Ql.magFilter=o,Ql.wrapS=t,Ql.wrapT=t,Ql.generateMipmaps=!1,Ql.needsUpdate=!0),Ql}var eu=class{constructor(e={}){let{canvas:t=Xe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([te,k,ee]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},O=null,A=null,ne=[],j=[],re=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,ie=!1,ae=null,oe=null,se=null,ce=null;this._outputColorSpace=Ve;let le=0,ue=0,de=null,fe=-1,pe=null,me=new Qt,he=new Qt,ge=null,_e=new B(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new Qt(0,0,ye,be),Te=new Qt(0,0,ye,be),Ee=!1,De=new zi,Oe=new Vi,ke=!1,Ae=!1,je=new rn,Me=new R,Ne=new Qt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function Ie(){return de===null?xe:1}let N=n;function Le(e,n){return t.getContext(e,n)}let Re,ze,P,Be,F,He,Ue,We,Ge,qe,Je,Ye,Ze,$e,et,nt,rt,it,at,ot,st,ct,lt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ft,!1),t.addEventListener(`webglcontextrestored`,pt,!1),t.addEventListener(`webglcontextcreationerror`,mt,!1),N===null){let t=`webgl2`;if(N=Le(t,e),N===null)throw Le(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ut()}catch(e){throw t.removeEventListener(`webglcontextlost`,ft,!1),t.removeEventListener(`webglcontextrestored`,pt,!1),t.removeEventListener(`webglcontextcreationerror`,mt,!1),L(`WebGLRenderer: `+e.message),e}function ut(){Re=new bs(N),Re.init(),st=new Hl(N,Re),ze=new es(N,Re,e,st),P=new Bl(N,Re),ze.reversedDepthBuffer&&h&&P.buffers.depth.setReversed(!0),oe=N.createFramebuffer(),se=N.createFramebuffer(),ce=N.createFramebuffer(),Be=new Cs(N),F=new bl,He=new Vl(N,Re,P,F,ze,st,Be),Ue=new ys(M),We=new Go(N),ct=new Qo(N,We),Ge=new xs(N,We,Be,ct),qe=new Ts(N,Ge,We,ct,Be),it=new ws(N,ze,He),et=new ts(F),Je=new yl(M,Ue,Re,ze,ct,et),Ye=new Yl(M,F),Ze=new wl,$e=new jl(Re),rt=new Zo(M,Ue,P,qe,x,s),nt=new zl(M,qe,ze),lt=new Xl(N,Be,ze,P),at=new $o(N,Re,Be),ot=new Ss(N,Re,Be),Be.programs=Je.programs,M.capabilities=ze,M.extensions=Re,M.properties=F,M.renderLists=Ze,M.shadowMap=nt,M.state=P,M.info=Be}S!==1009&&(re=new Ds(S,t.width,t.height,o,r,i));let dt=new Kl(M,N);this.xr=dt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){dt.isPresenting?I(`WebGLRenderer: Can't change size while VR device is presenting.`):(ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),re!==null&&re.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)L(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){I(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}re.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(me)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),P.viewport(me.copy(we).multiplyScalar(Ie()).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),P.scissor(he.copy(Te).multiplyScalar(Ie()).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){P.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(de!==null){let t=de.texture.format;e=C.has(t)}if(e){let e=de.texture.type,t=w.has(e),n=rt.getClearColor(),r=rt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,N.clearBufferuiv(N.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,N.clearBufferiv(N.COLOR,0,E))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ae=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ft,!1),t.removeEventListener(`webglcontextrestored`,pt,!1),t.removeEventListener(`webglcontextcreationerror`,mt,!1),rt.dispose(),Ze.dispose(),$e.dispose(),He.dispose(),F.dispose(),Ue.dispose(),qe.dispose(),Ge.dispose(),ct.dispose(),lt.dispose(),Je.dispose(),dt.dispose(),dt.removeEventListener(`sessionstart`,xt),dt.removeEventListener(`sessionend`,St),Ct.stop()};function ft(e){e.preventDefault(),Qe(`WebGLRenderer: Context Lost.`),ie=!0}function pt(){Qe(`WebGLRenderer: Context Restored.`),ie=!1;let e=Be.autoReset,t=nt.enabled,n=nt.autoUpdate,r=nt.needsUpdate,i=nt.type;ut(),Be.autoReset=e,nt.enabled=t,nt.autoUpdate=n,nt.needsUpdate=r,nt.type=i}function mt(e){L(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ht(e){let t=e.target;t.removeEventListener(`dispose`,ht),gt(t)}function gt(e){_t(e),F.remove(e)}function _t(e){let t=F.get(e).programs;t!==void 0&&(t.forEach(function(e){Je.releaseProgram(e)}),e.isShaderMaterial&&Je.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Pe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Pt(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ge.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ct.setup(i,r,s,n,c);let h,g=at;if(c!==null&&(h=We.get(c),g=ot,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*Ie()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*Ie()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(Re.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?We.get(c).bytesPerElement:1,o=F.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function vt(e,t,n,r){ae!==null&&e.isNodeMaterial&&ae.setObject(r,e),ke===!0&&et.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,At(e,t,r),e.side=0,e.needsUpdate=!0,At(e,t,r),e.side=2):At(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ae!==null&&ae.renderStart(e,t,n),A=$e.get(n),A.init(t),j.push(A),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),A.setupLights(),ae!==null&&ae.updateLights(A.state.lightsArray),Ae=this.localClippingEnabled,ke=et.init(this.clippingPlanes,Ae),ke===!0&&et.setGlobalState(this.clippingPlanes,t),ae!==null&&nt.render(A.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];vt(o,n,t,e),r.add(o)}else vt(i,n,t,e),r.add(i)}}),A=j.pop(),ae!==null&&ae.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=F.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Re.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let yt=null;function bt(e){yt&&yt(e)}function xt(){Ct.stop()}function St(){Ct.start()}let Ct=new Wo;Ct.setAnimationLoop(bt),typeof self<`u`&&Ct.setContext(self),this.setAnimationLoop=function(e){yt=e,dt.setAnimationLoop(e),e===null?Ct.stop():Ct.start()},dt.addEventListener(`sessionstart`,xt),dt.addEventListener(`sessionend`,St),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){L(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ie===!0)return;ae!==null&&ae.renderStart(e,t);let n=dt.enabled===!0&&dt.isPresenting===!0,r=re!==null&&(de===null||n)&&re.begin(M,de);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(re===null||re.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(t),t=dt.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,de),A=$e.get(e,j.length),A.init(t),A.state.textureUnits=He.getTextureUnits(),j.push(A),je.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Oe.setFromArrayCamera(t):De.setFromProjectionMatrix(je,Ke,t.reversedDepth),Ae=this.localClippingEnabled,ke=et.init(this.clippingPlanes,Ae),O=Ze.get(e,ne.length),O.init(),ne.push(O),this.info.render.frame++,dt.enabled===!0&&dt.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&wt(e,t,-1/0,M.sortObjects)}wt(e,t,0,M.sortObjects),O.finish(),ae!==null&&ae.updateLights(A.state.lightsArray),M.sortObjects===!0&&O.sort(Se,Ce),Fe=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Fe&&rt.addToRenderList(O,e),this.info.autoReset===!0&&this.info.reset(),ke===!0&&et.beginShadows();let i=A.state.shadowsArray;if(nt.render(i,e,t),ke===!0&&et.endShadows(),(r&&re.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(A.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Et(n,r,e,a)}Fe&&rt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Tt(O,e,n,n.viewport)}}else r.length>0&&Et(n,r,e,t),Fe&&rt.render(e),Tt(O,e,t)}de!==null&&ue===0&&(He.updateMultisampleRenderTarget(de),He.updateRenderTargetMipmap(de)),r&&re.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),ct.resetDefaultState(),fe=-1,pe=null,j.pop(),j.length>0?(A=j[j.length-1],He.setTextureUnits(A.state.textureUnits),ke===!0&&et.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,ne.pop(),O=ne.length>0?ne[ne.length-1]:null,ae!==null&&ae.renderEnd()};function wt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)A.pushLight(e),e.castShadow&&A.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Oe:De;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Ne.setFromMatrixPosition(e.matrixWorld).applyMatrix4(je);let i=qe.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Ne.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Oe:De;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=qe.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ne.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ne.copy(e.boundingSphere.center)),Ne.applyMatrix4(e.matrixWorld).applyMatrix4(je)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Ne.z,s,t)}}else a.visible&&O.push(e,i,a,n,Ne.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)wt(i[e],t,n,r)}function Tt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;A.setupLightsView(n),ke===!0&&et.setGlobalState(M.clippingPlanes,n),r&&P.viewport(me.copy(r)),i.length>0&&Dt(i,t,n),a.length>0&&Dt(a,t,n),o.length>0&&Dt(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Et(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[r.id]===void 0){let e=Re.has(`EXT_color_buffer_half_float`)||Re.has(`EXT_color_buffer_float`);A.state.transmissionRenderTarget[r.id]=new en(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,ze.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Vt.workingColorSpace})}let a=A.state.transmissionRenderTarget[r.id],o=r.viewport||me;a.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),u=M.getActiveCubeFace(),d=M.getActiveMipmapLevel();M.setRenderTarget(a),M.getClearColor(_e),ve=M.getClearAlpha(),ve<1&&M.setClearColor(16777215,.5),M.clear(),Fe&&rt.render(n);let f=M.toneMapping;M.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),A.setupLightsView(r),ke===!0&&et.setGlobalState(M.clippingPlanes,r),Dt(e,n,r),He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a),Re.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ot(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a))}M.setRenderTarget(s,u,d),M.setClearColor(_e,ve),p!==void 0&&(r.viewport=p),M.toneMapping=f}function Dt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ot(o,t,n,s,l,c)}}function Ot(e,t,n,r,i,a){ae!==null&&i.isNodeMaterial&&ae.setObject(e,i),e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function kt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function At(e,t,n){t.isScene!==!0&&(t=Pe);let r=F.get(e),i=A.state.lights,a=A.state.shadowsArray,o=i.state.version,s=Je.getParameters(e,i.state,a,t,n,A.state.lightProbeGridArray),c=Je.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ue.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ht),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Nt(e,s),d}else s.uniforms=Je.getUniforms(e),ae!==null&&e.isNodeMaterial&&ae.build(e,n,s),e.onBeforeCompile(s,M),d=Je.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=et.uniform),Nt(e,s),r.needsLights=It(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=kt(A.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function jt(e,t,n,r,i){let a=F.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=At(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Mt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ic.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Nt(e,t){let n=F.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Pt(e,t,n,r,i){t.isScene!==!0&&(t=Pe),He.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=de===null?M.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Vt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ue.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(h=M.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=F.get(r),y=A.state.lights;if(ke===!0&&(Ae===!0||e!==pe)){let t=e===pe&&r.id===fe;et.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==et.numPlanes||v.numIntersection!==et.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===kt(A.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?jt(r,t,i,s,h):At(r,t,i),ae&&r.isNodeMaterial&&ae.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),ee=v.uniforms;if(P.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==fe&&(fe=r.id,w=!0),C||pe!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(N,`projectionMatrix`,e.projectionMatrix),E.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(N,Me.setFromMatrixPosition(e.matrixWorld)),ze.logarithmicDepthBuffer&&E.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),pe!==e&&(pe=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(N,`sunShadowMap`,y.state.sunShadowMap,He),y.state.directionalShadowMap.length>0&&E.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,He),y.state.spotShadowMap.length>0&&E.setValue(N,`spotShadowMap`,y.state.spotShadowMap,He),y.state.pointShadowMap.length>0&&E.setValue(N,`pointShadowMap`,y.state.pointShadowMap,He)),i.isSkinnedMesh){E.setOptional(N,i,`bindMatrix`),E.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(N,`boneTexture`,e.boneTexture,He))}i.isBatchedMesh&&(E.setOptional(N,i,`batchingTexture`),E.setValue(N,`batchingTexture`,i._matricesTexture,He),E.setOptional(N,i,`batchingIdTexture`),E.setValue(N,`batchingIdTexture`,i._indirectTexture,He),E.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(N,`batchingColorTexture`,i._colorsTexture,He));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&it.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(ee.envMapIntensity.value=t.environmentIntensity),ee.dfgLUT!==void 0&&(ee.dfgLUT.value=$l()),w){if(E.setValue(N,`toneMappingExposure`,M.toneMappingExposure),v.needsLights&&Ft(ee,T),a&&r.fog===!0&&Ye.refreshFogUniforms(ee,a),Ye.refreshMaterialUniforms(ee,r,xe,be,A.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of A.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;ee.probesSH.value=e.textures,ee.probesMin.value=e.min,ee.probesMax.value=e.max,ee.probesResolution.value=e.resolution}Ic.upload(N,Mt(v),ee,He)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ic.upload(N,Mt(v),ee,He),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(N,`center`,i.center),E.setValue(N,`modelViewMatrix`,i.modelViewMatrix),E.setValue(N,`normalMatrix`,i.normalMatrix),E.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];lt.update(n,S),lt.bind(n,S)}}return S}function Ft(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function It(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return de},this.setRenderTargetTextures=function(e,t,n){let r=F.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),F.get(e.texture).__webglTexture=t,F.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=F.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){de=e,le=t,ue=n;let r=null,i=!1,a=!1;if(e){let o=F.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest,P.viewport(me),P.scissor(he),P.setScissorTest(ge),fe=-1;return}if(o.__webglFramebuffer===void 0)He.setupRenderTarget(e);else if(o.__hasExternalTextures)He.rebindTextures(e,F.get(e.texture).__webglTexture,F.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&F.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);He.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=F.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&He.useMultisampledRTT(e)===!1?F.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest}else me.copy(we).multiplyScalar(xe).floor(),he.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=oe),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(me),P.scissor(he),P.setScissorTest(ge),i){let r=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=F.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}fe=-1};function Lt(e){let t=F.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=ze.textureFormatReadable(e.format),t.__typeReadable=ze.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let u=Lt(o);if(u.__formatReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,st.convert(c),st.convert(l),a)}finally{let e=de===null?null:F.get(de).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let d=Lt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,st.convert(l),st.convert(u),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let p=de===null?null:F.get(de).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,p);let m=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await tt(N,m,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(f),N.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;He.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=st.convert(t.format),_=st.convert(t.type),v;t.isData3DTexture?(He.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(He.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(He.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=F.get(e),r=F.get(t),h=F.get(n.__renderTarget),g=F.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||F.has(e)){let n=F.get(e),r=F.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,se),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,ce);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){F.get(e).__webglFramebuffer===void 0&&He.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?He.setTextureCube(e,0):e.isData3DTexture?He.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?He.setTexture2DArray(e,0):He.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){le=0,ue=0,de=null,P.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ke}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Vt._getUnpackColorSpace()}},tu={destructor:{id:`destructor`,name:`Destructor`,emoji:`💥`,color:`#ff7043`,weapon:`Dos pistolas con balas infinitas`,powerName:`Golpe Sísmico`,powerDesc:`Golpea el suelo, rompe rocas y empuja a los enemigos.`,pros:[`Mucha vida`,`Rompe rocas y árboles más rápido`],cons:[`Lento corriendo y nadando`],stars:{vida:5,velocidad:2,dano:4},speed:.85,cooldown:6,duration:0,maxHealth:150,needs:1,regen:.15,swim:.7,breath:1},curador:{id:`curador`,name:`Curador`,emoji:`💚`,color:`#66bb6a`,weapon:`Botiquines`,powerName:`Aura Sanadora`,powerDesc:`Te cura mucha vida de golpe (y a tus amigos cuando haya multijugador).`,pros:[`Se cura solo poco a poco`,`Tiene menos hambre y sed`,`La comida le da más energía`],cons:[`Hace menos daño`],stars:{vida:4,velocidad:3,dano:2},speed:1,cooldown:8,duration:2,maxHealth:110,needs:.75,regen:.6,swim:1,breath:1},asesino:{id:`asesino`,name:`Asesino`,emoji:`🗡️`,color:`#7e57c2`,weapon:`Dos dagas`,powerName:`Invisibilidad`,powerDesc:`Te vuelves invisible unos segundos y los enemigos no te ven.`,pros:[`El más rápido`,`Mucho daño por la espalda`,`Hace poco ruido`],cons:[`Tiene menos vida`],stars:{vida:2,velocidad:5,dano:5},speed:1.25,cooldown:10,duration:5,maxHealth:80,needs:1,regen:.15,swim:1.1,breath:1},alien:{id:`alien`,name:`Alien`,emoji:`👽`,color:`#26c6da`,weapon:`Pistola de rayos`,powerName:`Vuelo Alien`,powerDesc:`Flotas y vuelas unos segundos.`,pros:[`Bucea más tiempo`,`Ve mejor de noche y bajo el agua`],cons:[`Su pistola tiene que recargar energía`],stars:{vida:3,velocidad:3,dano:4},speed:1,cooldown:9,duration:4,maxHealth:100,needs:1,regen:.15,swim:1.15,breath:1.8}},nu=[tu.destructor,tu.curador,tu.asesino,tu.alien];function ru(e){return typeof e==`string`&&e in tu}function iu(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,{c:n,g:n.getContext(`2d`)}}function au(e){let t=new oa(e);return t.colorSpace=Ve,t.anisotropy=4,t}function ou(e){let{c:t,g:n}=iu(512,256);n.fillStyle=e.skin,n.fillRect(0,0,512,256),n.fillStyle=`rgba(255,110,110,0.20)`;for(let e of[-1,1])n.beginPath(),n.arc(128+e*44,152,14,0,Math.PI*2),n.fill();switch(n.fillStyle=e.facePaintColor,n.strokeStyle=e.facePaintColor,e.facePaint){case`rayas`:for(let e of[-1,1])for(let t of[0,12])n.beginPath(),n.moveTo(128+e*24,142+t),n.lineTo(128+e*66,138+t),n.lineTo(128+e*66,144+t),n.lineTo(128+e*24,148+t),n.closePath(),n.fill();break;case`antifaz`:n.beginPath(),n.ellipse(128,118,78,20,0,0,Math.PI*2),n.fill();break;case`puntos`:for(let[e,t]of[[0,128],[-12,126],[12,126],[-50,140],[-58,150],[-44,152],[50,140],[58,150],[44,152]])n.beginPath(),n.arc(128+e,t,4.5,0,Math.PI*2),n.fill();break;case`rayo`:n.beginPath(),n.moveTo(164,84),n.lineTo(150,120),n.lineTo(162,120),n.lineTo(148,158),n.lineTo(174,112),n.lineTo(162,112),n.lineTo(174,84),n.closePath(),n.fill()}n.strokeStyle=`#8a3f3f`,n.lineWidth=4,n.lineCap=`round`;let r=(e,t,r,i,a)=>{n.beginPath(),n.moveTo(e,t),n.lineTo(r,i),n.stroke(),n.lineWidth=2;for(let o=1;o<=a;o++){let s=o/(a+1),c=e+(r-e)*s,l=t+(i-t)*s,u=-(i-t),d=r-e,f=Math.hypot(u,d)/6;n.beginPath(),n.moveTo(c-u/f,l-d/f),n.lineTo(c+u/f,l+d/f),n.stroke()}n.lineWidth=4};switch(e.scar){case`mejilla`:r(94,134,70,164,3);break;case`ceja`:r(158,82,166,110,2);break;case`nariz`:r(112,130,144,136,2)}return au(t)}function su(e){let{c:t,g:n}=iu(256,128);n.fillStyle=e.skin,n.fillRect(0,0,256,128),n.fillStyle=`#1f2a44`,n.strokeStyle=`#1f2a44`,n.lineWidth=5,n.lineCap=`round`;for(let t of[64,192])switch(e.tattoo){case`ancla`:n.beginPath(),n.moveTo(t,42),n.lineTo(t,84),n.moveTo(t-12,52),n.lineTo(t+12,52),n.stroke(),n.beginPath(),n.arc(t,70,16,.2,Math.PI-.2),n.stroke(),n.beginPath(),n.arc(t,38,5,0,Math.PI*2),n.stroke();break;case`estrella`:n.beginPath();for(let e=0;e<10;e++){let r=e%2?9:22,i=-Math.PI/2+e*Math.PI/5;n.lineTo(t+Math.cos(i)*r,64+Math.sin(i)*r)}n.closePath(),n.fill();break;case`rayo`:n.beginPath(),n.moveTo(t+8,38),n.lineTo(t-8,66),n.lineTo(t+2,66),n.lineTo(t-8,90),n.lineTo(t+12,58),n.lineTo(t+2,58),n.closePath(),n.fill();break;case`tribal`:n.lineWidth=6;for(let e of[-16,0,16])n.beginPath(),n.moveTo(t-26,64+e),n.quadraticCurveTo(t,64+e-14,t+26,64+e),n.stroke()}return au(t)}function cu(e,t){let{c:n,g:r}=iu(512,128);r.font=`bold 64px "Trebuchet MS", "Segoe UI", system-ui, sans-serif`;let i=Math.min(500,r.measureText(e).width+60),a=(512-i)/2;return r.fillStyle=`rgba(10,20,40,0.55)`,r.beginPath(),r.roundRect(a,18,i,92,46),r.fill(),r.strokeStyle=t,r.lineWidth=6,r.stroke(),r.fillStyle=`#ffffff`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(e,256,66,460),{tex:au(n),aspect:4}}var lu=new Map;function uu(e,t){let n=lu.get(e);return n||(n=t(),lu.set(e,n)),n}var du=(e,t)=>uu(`cap${e}_${t}`,()=>new ua(e,t,6,14)),fu=e=>uu(`sph${e}`,()=>new W(e,20,14)),pu=(e,t,n)=>uu(`box${e}_${t}_${n}`,()=>new H(e,t,n)),mu=(e,t,n,r=16,i=!1)=>uu(`cyl${e}_${t}_${n}_${r}_${i}`,()=>new U(e,t,n,r,1,i)),hu=1.86,gu=2.12,_u=.85,vu=class{root=new z;body=new z;mats=[];textures=[];hipL=new z;hipR=new z;shoulderL=new z;shoulderR=new z;head=new z;nameTag=null;phase=0;opacity=1;look;classId;tool=null;tools={};swingT=0;aimL=0;aimR=0;classWeapon;flashMats=null;armor=null;shield=null;gearParts=[];gearMats=[];bw=1;tw=1;constructor(e,t,n={}){this.look=e,this.classId=t,this.classWeapon=n.classWeapon??!0,this.root.add(this.body),this.build()}dispose(){this.clear(),this.setName(null)}hurtGlow(e){this.flashMats||=this.mats.filter(e=>e instanceof ja).map(e=>({m:e,e:e.emissive.clone(),i:e.emissiveIntensity}));for(let t of this.flashMats)e<=0?(t.m.emissive.copy(t.e),t.m.emissiveIntensity=t.i):(t.m.emissive.setRGB(1,.1,.05),t.m.emissiveIntensity=e*.9)}get scale(){return this.look.height*_u}get height(){return gu*this.scale}set(e,t){this.look=e,this.classId=t,this.clear(),this.build(),this.setOpacity(this.opacity)}setName(e){if(this.nameTag&&=(this.root.remove(this.nameTag),this.nameTag.material.map?.dispose(),this.nameTag.material.dispose(),null),!e)return;let{tex:t,aspect:n}=cu(e,tu[this.classId].color),r=new ai(new Gr({map:t,depthWrite:!1,transparent:!0}));r.scale.set(.45*n,.45,1),r.position.y=this.height+.45,r.renderOrder=10,this.nameTag=r,this.root.add(r)}showName(e){this.nameTag&&(this.nameTag.visible=e)}setOpacity(e){this.opacity=e;for(let t of this.mats)t.transparent=e<1,t.opacity=e,t.depthWrite=e>=1;this.nameTag&&(this.nameTag.material.opacity=e<1?.3:1)}clear(){this.flashMats=null,this.body.clear();for(let e of this.mats)e.dispose();for(let e of this.textures)e.dispose();this.mats=[],this.textures=[],this.nameTag&&(this.nameTag.position.y=this.height+.45)}mat(e,t={}){let n=new ja({color:e,roughness:.7,...t});return this.mats.push(n),n}mesh(e,t,n,r=0,i=0,a=0){let o=new V(e,t);return o.position.set(r,i,a),o.castShadow=!0,n.add(o),o}build(){let e=this.look,t=e.gender===`chica`,n=e.build===`delgado`?.86:e.build===`fuerte`?1.2:1,r=t?.92:1,i=t?1.06:1;this.body.scale.setScalar(this.scale);let a=this.mat(e.skin,{roughness:.6}),o=this.mat(e.shirtColor),s=this.mat(e.pantsColor),c=this.mat(e.shoesColor),l=this.mat(e.hairColor,{roughness:.55}),u=this.mat(`#ffffff`),d=this.mat(`#1a1414`,{roughness:.4}),f=.12+.02*(n-1);for(let[t,r]of[[this.hipL,1],[this.hipR,-1]]){t.clear(),t.position.set(r*f*i,.86,0),t.rotation.set(0,0,0),this.body.add(t);let o=e.pantsStyle===`falda`?a:s,l=e.pantsStyle===`largos`?s:a;switch(this.mesh(du(.105*n,.26),o,t,0,-.2,0),this.mesh(du(.095*n,.28),l,t,0,-.53,0),e.shoesStyle){case`zapatillas`:this.mesh(pu(.19,.12,.3),c,t,0,-.78,.05),this.mesh(pu(.2,.04,.31),u,t,0,-.84,.05);break;case`botas`:this.mesh(mu(.11,.115,.24),c,t,0,-.68,0),this.mesh(pu(.2,.13,.3),c,t,0,-.795,.05);break;case`sandalias`:this.mesh(pu(.17,.1,.27),a,t,0,-.79,.05),this.mesh(pu(.2,.035,.3),c,t,0,-.845,.05),this.mesh(pu(.18,.03,.05),c,t,0,-.75,.1);break;default:this.mesh(pu(.17,.1,.27),a,t,0,-.81,.05)}}if(this.mesh(fu(.2),s,this.body,0,.92,0).scale.set(1.25*i*n,.7,.85*n),e.pantsStyle===`falda`){let t=this.mesh(mu(.24*i*n,.36*i*n,.34,18,!0),this.mat(e.pantsColor,{side:2}),this.body,0,.8,0);t.scale.z=.85}if(this.mesh(du(.2,.32),o,this.body,0,1.2,0).scale.set(1.2*r*n,1,.75*n),this.mesh(mu(.07,.08,.14),a,this.body,0,1.58,0),e.shirtStyle===`sudadera`){let t=this.mesh(uu(`hood`,()=>new ba(.17,.07,8,18)),o,this.body,0,1.52,-.1);t.rotation.x=Math.PI/2-.3;let i=this.mesh(pu(.28,.12,.04),this.mat(e.shirtColor,{color:new B(e.shirtColor).multiplyScalar(.8)}),this.body,0,1.06,.15*n);i.scale.x=r*n}else if(e.shirtStyle===`tirantes`)for(let e of[-1,1])this.mesh(pu(.06,.04,.3*n),o,this.body,e*.13,1.53,0);else{let e=this.mesh(uu(`collar`,()=>new ba(.09,.025,6,16)),o,this.body,0,1.53,0);e.rotation.x=Math.PI/2}let p=.3*r*n+.04,m=e.tattoo===`ninguno`?null:su(e);m&&this.textures.push(m);let h=m?this.mat(`#ffffff`,{map:m,roughness:.6}):a;for(let[t,r]of[[this.shoulderL,1],[this.shoulderR,-1]]){t.clear(),t.position.set(r*p,1.47,0),t.rotation.set(0,0,r*.08),this.body.add(t);let i=e.shirtStyle===`tirantes`?a:o,s=e.shirtStyle===`mangaLarga`||e.shirtStyle===`sudadera`?o:r===1?h:a;this.mesh(du(e.shirtStyle===`camiseta`?.085*n:.077*n,.2),i,t,0,-.15,0),this.mesh(du(.07*n,.2),s,t,0,-.4,0),this.mesh(fu(.075),a,t,0,-.58,0);let c=new z;c.position.set(0,-.6,.02),c.name=r===1?`handL`:`handR`,t.add(c)}this.classWeapon&&this.buildWeapon(),this.buildTools(),this.bw=n,this.tw=r,this.gearParts=[],this.gearMats=[],this.buildGear(),this.head.clear(),this.head.position.set(0,hu,0),this.head.rotation.set(0,0,0),this.body.add(this.head);let g=ou(e);this.textures.push(g);let _=this.mat(`#ffffff`,{map:g,roughness:.6});this.mesh(fu(.26),_,this.head);for(let e of[-1,1])this.mesh(fu(.06),a,this.head,e*.255,0,0).scale.set(.5,1,.8);this.mesh(fu(.035),a,this.head,0,-.035,.255);let v=this.mesh(uu(`mouth`,()=>new ba(.05,.012,6,14,Math.PI)),this.mat(`#a33a3a`),this.head,0,-.1,.235);v.rotation.z=Math.PI,this.buildEyes(l,u,d,t),this.buildHair(l),this.buildHat(),this.buildGlasses(d)}buildEyes(e,t,n,r){let i=this.look,a=this.mat(i.eyeColor,{roughness:.3}),o=i.eyeShape===`grandes`?1.22:1,s=i.eyeShape===`almendra`?.62:1;for(let c of[-1,1]){let l=c*.09;i.eyeShape===`felices`?this.mesh(uu(`happy`,()=>new ba(.042,.013,6,14,Math.PI)),n,this.head,l,0,.25):(this.mesh(fu(.06),t,this.head,l,.02,.232).scale.set(o,o*s,.45),this.mesh(uu(`iris`,()=>new da(.032,20)),a,this.head,l,.015,.262).scale.set(o,o*Math.max(s,.75),1),this.mesh(uu(`pupil`,()=>new da(.016,16)),n,this.head,l,.015,.263).scale.setScalar(o),this.mesh(uu(`shine`,()=>new da(.008,10)),t,this.head,l+.012,.028,.264));let u=this.mesh(pu(.09,.022,.02),e,this.head,l,.105,.24);if(u.rotation.z=-c*.1,r){let e=this.mesh(pu(.035,.012,.012),n,this.head,l+c*.055,.06,.235);e.rotation.z=c*.5}}}buildHair(e){let t=this.look,n=t.hat!==`ninguno`,r=()=>{let t=this.mesh(uu(`hairCap`,()=>new W(.285,24,12,0,Math.PI*2,0,1.35)),e,this.head);return t.rotation.x=-.35,t};switch(t.hairStyle){case`calvo`:break;case`corto`:r();break;case`pinchos`:if(r(),!n){let t=uu(`spike`,()=>new fa(.07,.2,6));for(let[n,r]of[[0,0],[.5,.6],[-.5,.6],[.5,-.6],[-.5,-.6],[0,1],[.9,0],[-.9,0],[0,-1]])this.mesh(t,e,this.head,n*.13,.27-Math.abs(n)*.04,r*.11-.04).rotation.set(r*.5,0,-n*.6)}break;case`largo`:{r();let t=this.mesh(pu(.5,.55,.12),e,this.head,0,-.18,-.19);t.rotation.x=.08;for(let t of[-1,1])this.mesh(pu(.08,.42,.16),e,this.head,t*.26,-.12,-.04);break}case`coleta`:{r();let t=this.mesh(du(.07,.3),e,this.head,0,-.05,-.36);t.rotation.x=.6,this.mesh(fu(.06),this.mat(`#ff4f8b`),this.head,0,.1,-.29);break}case`mono`:r(),n||this.mesh(fu(.13),e,this.head,0,.27,-.12);break;case`cresta`:{if(!n)for(let t=0;t<6;t++){let n=-.4+t*.32,r=this.mesh(pu(.06,.16,.1),e,this.head,0,Math.cos(n)*.29,Math.sin(n)*.29);r.rotation.x=n}let t=this.mesh(uu(`buzz`,()=>new W(.268,24,12,0,Math.PI*2,0,1.2)),e,this.head);t.rotation.x=-.4;break}case`afro`:{r();let t=this.mesh(uu(`afro`,()=>new W(.4,22,16,Math.PI/2+.95,Math.PI*2-1.9,0,2.2)),e,this.head,0,.08,-.04);t.material.side=2;break}}}buildHat(){let e=this.look;if(e.hat===`ninguno`)return;let t=new z;e.hairStyle===`afro`&&(t.scale.setScalar(1.3),t.position.y=.08),this.head.add(t);let n=this.mat(e.hatColor);switch(e.hat){case`gorra`:{let e=this.mesh(uu(`capTop`,()=>new W(.29,22,10,0,Math.PI*2,0,1.2)),n,t);e.rotation.x=-.25;let r=this.mesh(mu(.2,.2,.025,20),n,t,0,.13,.22);r.rotation.x=.15;break}case`pirata`:{let e=this.mesh(mu(.42,.42,.04,20),n,t,0,.2,0);e.scale.z=.8,this.mesh(mu(.2,.27,.22,18),n,t,0,.32,0),this.mesh(fu(.045),this.mat(`#ffffff`),t,0,.32,.24);break}case`lana`:{let e=this.mesh(uu(`beanie`,()=>new W(.3,22,12,0,Math.PI*2,0,1.45)),n,t);e.rotation.x=-.2;let r=this.mesh(uu(`beanieBand`,()=>new ba(.28,.045,8,24)),n,t,0,.05,-.02);r.rotation.x=Math.PI/2-.2,this.mesh(fu(.08),this.mat(`#ffffff`),t,0,.33,-.05);break}case`paja`:this.mesh(mu(.5,.5,.03,24),n,t,0,.19,0),this.mesh(mu(.22,.25,.18,20),n,t,0,.3,0),this.mesh(mu(.255,.255,.05,20),this.mat(`#d84343`),t,0,.23,0);break;case`corona`:{let e=this.mat(`#f5c542`,{metalness:.9,roughness:.25,side:2});this.mesh(mu(.24,.24,.14,24,!0),e,t,0,.27,0);for(let n=0;n<6;n++){let r=n/6*Math.PI*2;this.mesh(uu(`crownSpike`,()=>new fa(.045,.12,6)),e,t,Math.sin(r)*.24,.39,Math.cos(r)*.24)}this.mesh(uu(`gem`,()=>new ga(.04)),this.mat(`#e53935`,{emissive:`#7a0000`}),t,0,.27,.245);break}}}buildGlasses(e){let t=this.look;if(t.glasses!==`ninguna`){if(t.glasses===`buceo`){this.mesh(pu(.36,.13,.06),this.mat(`#7fdfff`,{transparent:!0,opacity:.55,roughness:.1}),this.head,0,.02,.25);let t=this.mesh(pu(.38,.15,.04),this.mat(`#ff9800`),this.head,0,.02,.235);t.scale.z=.8;let n=this.mesh(uu(`strap`,()=>new ba(.268,.02,6,32)),e,this.head,0,.02,0);n.rotation.x=Math.PI/2}else{for(let n of[-1,1]){if(t.glasses===`normales`)this.mesh(uu(`lensRing`,()=>new ba(.06,.012,6,18)),e,this.head,n*.09,.02,.265);else{let e=this.mesh(mu(.066,.066,.02,18),this.mat(`#151515`,{roughness:.1,metalness:.4}),this.head,n*.09,.02,.265);e.rotation.x=Math.PI/2}let r=this.mesh(pu(.012,.012,.26),e,this.head,n*.245,.03,.13);r.rotation.y=n*.1}this.mesh(pu(.06,.012,.012),e,this.head,0,.03,.27)}}}buildWeapon(){let e=this.shoulderL.getObjectByName(`handL`),t=this.shoulderR.getObjectByName(`handR`);switch(this.classId){case`destructor`:{let n=this.mat(`#37474f`,{metalness:.6,roughness:.4}),r=this.mat(`#ff7043`);for(let i of[e,t]){this.mesh(pu(.05,.12,.06),n,i,0,-.03,0),this.mesh(pu(.065,.07,.24),n,i,0,.03,.08),this.mesh(pu(.067,.02,.18),r,i,0,.05,.08);let e=this.mesh(mu(.02,.02,.08,10),n,i,0,.04,.23);e.rotation.x=Math.PI/2}break}case`curador`:{let e=new z;e.position.set(0,-.12,.02),t.add(e),this.mesh(pu(.24,.17,.09),this.mat(`#f5f5f5`),e);let n=this.mat(`#e53935`);for(let t of[.047,-.047])this.mesh(pu(.11,.035,.004),n,e,0,0,t),this.mesh(pu(.035,.11,.004),n,e,0,0,t);this.mesh(pu(.1,.03,.03),this.mat(`#9e9e9e`),e,0,.1,0);break}case`asesino`:{let n=this.mat(`#dfe6ee`,{metalness:.9,roughness:.2}),r=this.mat(`#3b2a4d`);for(let i of[e,t]){let e=new z;e.rotation.x=Math.PI/2,i.add(e),this.mesh(mu(.022,.022,.1,8),r,e,0,0,0),this.mesh(pu(.1,.02,.03),this.mat(`#b39ddb`,{metalness:.7}),e,0,.06,0);let t=this.mesh(uu(`blade`,()=>new fa(.03,.28,4)),n,e,0,.2,0);t.scale.z=.3}break}case`alien`:{let e=this.mat(`#b0bec5`,{metalness:.8,roughness:.3}),n=this.mat(`#69f0ae`,{emissive:`#00e676`,emissiveIntensity:2});this.mesh(pu(.05,.12,.06),e,t,0,-.03,0);let r=this.mesh(du(.045,.18),e,t,0,.04,.1);r.rotation.x=Math.PI/2,this.mesh(fu(.05),n,t,0,.04,.24),this.mesh(uu(`rayRing`,()=>new ba(.06,.012,6,16)),n,t,0,.04,.12).rotation.set(0,0,0);break}}}buildTools(){let e=this.shoulderR.getObjectByName(`handR`),t=this.mat(`#8d6e4a`),n=this.mat(`#9aa0a6`,{metalness:.3,roughness:.5}),r=new z;r.rotation.x=-.35;let i=this.mesh(mu(.025,.03,.7,8),t,r,0,0,.22);i.rotation.x=Math.PI/2,this.mesh(pu(.04,.2,.16),n,r,0,.08,.5);let a=new z;a.rotation.x=-.35;let o=this.mesh(mu(.025,.03,.7,8),t,a,0,0,.22);o.rotation.x=Math.PI/2;let s=this.mesh(uu(`picoHead`,()=>new fa(.04,.5,6).rotateZ(Math.PI/2)),n,a,0,.02,.54);s.rotation.y=Math.PI/2,s.rotation.z=.15;let c=new z;c.rotation.x=-.2;let l=this.mat(`#e0e6ec`,{metalness:.85,roughness:.25}),u=this.mat(`#ffca28`,{metalness:.7,roughness:.3}),d=this.mesh(mu(.024,.024,.14,8),this.mat(`#4e342e`),c,0,0,.02);d.rotation.x=Math.PI/2,this.mesh(pu(.18,.03,.04),u,c,0,0,.1);let f=this.mesh(pu(.025,.07,.62),l,c,0,.01,.42);f.rotation.x=-.08;let p=new z;p.rotation.x=-.15;let m=this.mesh(mu(.022,.026,1.7,8),t,p,0,0,.35);m.rotation.x=Math.PI/2;let h=this.mesh(uu(`lanzaTip`,()=>new fa(.06,.22,5)),n,p,0,0,1.28);h.rotation.x=Math.PI/2,this.mesh(mu(.032,.032,.08,8),this.mat(`#d7ccc8`),p,0,0,1.15).rotation.x=Math.PI/2;let g=new z;g.position.y=.4,this.mesh(uu(`arcoBow`,()=>new ba(.42,.022,6,18,Math.PI).rotateZ(Math.PI).rotateY(-Math.PI/2)),this.mat(`#6d4c41`),g,0,0,0),this.mesh(pu(.008,.008,.84),this.mat(`#fafafa`),g,0,0,0);let _=new z;_.rotation.x=-.25;let v=this.mesh(mu(.024,.024,1.1,8),this.mat(`#5d4037`),_,0,0,.25);v.rotation.x=Math.PI/2;let y=this.mat(`#cfd8dc`,{metalness:.85,roughness:.25}),b=this.mesh(uu(`arponTip`,()=>new fa(.05,.25,4)),y,_,0,0,.9);b.rotation.x=Math.PI/2;for(let e of[-1,1]){let t=this.mesh(pu(.012,.012,.12),y,_,e*.04,0,.78);t.rotation.y=e*.6}this.mesh(uu(`arponRope`,()=>new ba(.05,.015,6,12)),this.mat(`#fff59d`),_,0,0,.05).rotation.y=Math.PI/2;let x=new z,S=this.mat(`#ffb300`,{metalness:.75,roughness:.3});this.mesh(pu(.06,.13,.08),this.mat(`#6d4c41`),x,0,-.03,0),this.mesh(pu(.07,.07,.2),this.mat(`#6d4c41`),x,0,.04,.06);let C=this.mesh(mu(.03,.03,.34,10),S,x,0,.05,.28);C.rotation.x=Math.PI/2;let w=this.mesh(mu(.065,.035,.1,12,!0),S,x,0,.05,.47);w.rotation.x=Math.PI/2,this.tools={hacha:r,pico:a,espada:c,lanza:p,arco:g,arpon:_,trabuco:x},e.add(r,a,c,p,g,_,x),this.applyTool()}applyTool(){let e=this.shoulderR.getObjectByName(`handR`);if(!e)return;let t=Object.values(this.tools);for(let n of e.children)n.visible=t.includes(n)?n===this.tools[this.tool??`hacha`]&&!!this.tool:!this.tool}setTool(e){e!==this.tool&&(this.tool=e,this.applyTool())}setGear(e,t){if(e!==this.armor||t!==this.shield){this.armor=e,this.shield=t;for(let e of this.gearParts)e.removeFromParent();for(let e of this.gearMats)e.dispose(),this.mats.splice(this.mats.indexOf(e),1);this.gearParts=[],this.gearMats=[],this.flashMats=null,this.buildGear(),this.setOpacity(this.opacity)}}gearMat(e,t={}){let n=this.mat(e,t);return this.gearMats.push(n),n}buildGear(){let e=this.bw,t=this.tw;if(this.armor){let[n,r,i]=this.armor===`armadura-madera`?[`#a1887f`,`#5d4037`,{flatShading:!0}]:this.armor===`armadura-piel`?[`#9e9e9e`,`#f5f5f5`,{roughness:1,flatShading:!0}]:this.armor===`armadura-pirata`?[`#4e342e`,`#ffca28`,{roughness:.5}]:[`#b0bec5`,`#18ffff`,{metalness:.8,roughness:.3}],a=this.gearMat(n,i),o=this.gearMat(r,this.armor===`armadura-robot`?{emissive:`#00e5ff`,emissiveIntensity:1.5}:{metalness:this.armor===`armadura-pirata`?.7:0}),s=this.mesh(du(.2,.32),a,this.body,0,1.2,.005);if(s.scale.set(1.3*t*e,.92,.86*e),this.gearParts.push(s),this.armor===`armadura-robot`)this.gearParts.push(this.mesh(fu(.06),o,this.body,0,1.28,.2*e));else if(this.armor===`armadura-piel`){let e=this.mesh(uu(`furCollar`,()=>new ba(.12,.05,6,14)),o,this.body,0,1.52,0);e.rotation.x=Math.PI/2,this.gearParts.push(e)}else for(let t of[1.08,1.22,1.36])this.gearParts.push(this.mesh(pu(.05,.035,.03),o,this.body,0,t,.205*e));for(let t of[this.shoulderL,this.shoulderR]){let n=this.mesh(fu(.1),a,t,0,-.03,0);n.scale.set(1.25*e,.75,1.2*e),this.gearParts.push(n)}}if(this.shield){let t=new z;if(t.position.set(.1*e,-.4,.03),t.rotation.z=-Math.PI/2,this.shoulderL.add(t),this.gearParts.push(t),this.shield===`escudo-madera`){let e=this.gearMat(`#8d6e4a`,{flatShading:!0}),n=this.gearMat(`#9aa0a6`,{metalness:.6,roughness:.4});this.mesh(mu(.25,.25,.04,16),e,t);let r=this.mesh(uu(`shieldRim`,()=>new ba(.25,.022,6,20)),n,t);r.rotation.x=Math.PI/2,this.mesh(fu(.05),n,t,0,.03,0)}else{let e=this.gearMat(`#f8bbd0`,{roughness:.35,emissive:`#f48fb1`,emissiveIntensity:.25}),n=this.gearMat(`#fff0f5`,{roughness:.3}),r=this.mesh(uu(`shellDisc`,()=>new W(.27,16,8,0,Math.PI*2,0,Math.PI/2.6)),e,t,0,-.1,0);r.scale.y=.55;for(let e=0;e<7;e++){let r=e/7*Math.PI*2,i=this.mesh(pu(.025,.02,.24),n,t,Math.sin(r)*.11,.035,Math.cos(r)*.11);i.rotation.y=r}this.mesh(fu(.045),this.gearMat(`#ffffff`,{emissive:`#ffffff`,emissiveIntensity:.6}),t,0,.06,0)}}}swing(){this.swingT=.4}shoot(e=`R`){e!==`L`&&(this.aimR=.22),e!==`R`&&(this.aimL=.22)}animate(e,t,n,r,i,a=!1,o=!1){let s=1-Math.exp(-14*e),c=this.scale;if(o){let t=1-Math.exp(-4*e);this.body.rotation.x+=(-1.45-this.body.rotation.x)*t,this.body.position.y+=(.22*c-this.body.position.y)*t,this.body.position.z+=(0-this.body.position.z)*t,this.shoulderL.rotation.z+=(1.2-this.shoulderL.rotation.z)*t,this.shoulderR.rotation.z+=(-1.2-this.shoulderR.rotation.z)*t;return}if(a){this.phase+=e*(3+4*t);let n=.2+1.05*t;this.body.rotation.x+=(n-this.body.rotation.x)*s;let r=this.body.rotation.x;this.body.position.y=.16-hu*c*Math.cos(r)+Math.sin(i*2)*.03,this.body.position.z=-1.86*c*Math.sin(r)*.55,t>.15?(this.shoulderL.rotation.x=-this.phase,this.shoulderR.rotation.x=-this.phase-Math.PI,this.shoulderL.rotation.z+=(.25-this.shoulderL.rotation.z)*s,this.shoulderR.rotation.z+=(-.25-this.shoulderR.rotation.z)*s):(this.shoulderL.rotation.x=Math.sin(this.phase)*.4-.3,this.shoulderR.rotation.x=-Math.sin(this.phase)*.4-.3,this.shoulderL.rotation.z+=(1.1-this.shoulderL.rotation.z)*s,this.shoulderR.rotation.z+=(-1.1-this.shoulderR.rotation.z)*s),this.hipL.rotation.x=Math.sin(this.phase*2)*.45,this.hipR.rotation.x=-Math.sin(this.phase*2)*.45,this.head.rotation.y=0;return}this.body.rotation.x+=(0-this.body.rotation.x)*s,this.body.position.z+=(0-this.body.position.z)*s,this.shoulderL.rotation.x=yu(this.shoulderL.rotation.x),this.shoulderR.rotation.x=yu(this.shoulderR.rotation.x),t>.05&&!n&&(this.phase+=e*(5+6*t));let l=Math.sin(this.phase)*.8*Math.min(1,t),u=l,d=-l,f=-l*.8,p=l*.8,m=.08;if(n&&!r&&(u=-.5,d=.25,f=-.4,p=-.4,m=.5),r&&(u=.15,d=.25,f=0,p=0,m=1.35),this.hipL.rotation.x+=(u-this.hipL.rotation.x)*s,this.hipR.rotation.x+=(d-this.hipR.rotation.x)*s,this.shoulderL.rotation.x+=(f-this.shoulderL.rotation.x)*s,this.shoulderR.rotation.x+=(p-this.shoulderR.rotation.x)*s,this.shoulderL.rotation.z+=(m-this.shoulderL.rotation.z)*s,this.shoulderR.rotation.z+=(-m-this.shoulderR.rotation.z)*s,this.swingT>0){this.swingT=Math.max(0,this.swingT-e);let t=1-this.swingT/.4;this.shoulderR.rotation.x=t<.4?t/.4*-2.6:-2.6+2.9*((t-.4)/.6)}else this.aimR>0?(this.aimR=Math.max(0,this.aimR-e),this.shoulderR.rotation.x=-1.5+(.22-this.aimR)*1.2,this.shoulderR.rotation.z=-.05):this.tool&&t<.05&&!n&&(this.shoulderR.rotation.x+=(-.5-this.shoulderR.rotation.x)*s);this.aimL>0&&(this.aimL=Math.max(0,this.aimL-e),this.shoulderL.rotation.x=-1.5+(.22-this.aimL)*1.2,this.shoulderL.rotation.z=.05);let h=Math.sin(i*2.2)*.012,g=(n?0:Math.abs(Math.sin(this.phase))*.06*t)+h;this.body.position.y+=(g-this.body.position.y)*Math.min(1,s*2),this.head.rotation.y=Math.sin(i*.7)*.08*(1-t)}standUp(){this.body.rotation.set(0,0,0),this.body.position.set(0,0,0)}};function yu(e){return Math.atan2(Math.sin(e),Math.cos(e))}var bu=[{id:`chico`,label:`Chico`},{id:`chica`,label:`Chica`}],xu=[{id:`delgado`,label:`Delgado`},{id:`normal`,label:`Normal`},{id:`fuerte`,label:`Fuerte`}],Su=[{id:`corto`,label:`Corto`},{id:`pinchos`,label:`Pinchos`},{id:`largo`,label:`Largo`},{id:`coleta`,label:`Coleta`},{id:`mono`,label:`Moño`},{id:`cresta`,label:`Cresta`},{id:`afro`,label:`Afro`},{id:`calvo`,label:`Calvo`}],Cu=[{id:`redondos`,label:`Redondos`},{id:`grandes`,label:`Grandes`},{id:`almendra`,label:`Almendra`},{id:`felices`,label:`Felices`}],wu=[{id:`camiseta`,label:`Camiseta`},{id:`mangaLarga`,label:`Manga larga`},{id:`tirantes`,label:`Tirantes`},{id:`sudadera`,label:`Sudadera`}],Tu=[{id:`largos`,label:`Largos`},{id:`cortos`,label:`Cortos`},{id:`falda`,label:`Falda`}],Eu=[{id:`zapatillas`,label:`Zapatillas`},{id:`botas`,label:`Botas`},{id:`sandalias`,label:`Sandalias`},{id:`descalzo`,label:`Descalzo`}],Du=[{id:`ninguno`,label:`Nada`},{id:`gorra`,label:`Gorra`},{id:`pirata`,label:`Pirata`},{id:`lana`,label:`Gorro de lana`},{id:`paja`,label:`Paja`},{id:`corona`,label:`Corona`}],Ou=[{id:`ninguna`,label:`Nada`},{id:`normales`,label:`Gafas`},{id:`sol`,label:`De sol`},{id:`buceo`,label:`De buceo`}],ku=[{id:`ninguno`,label:`Nada`},{id:`ancla`,label:`Ancla`},{id:`estrella`,label:`Estrella`},{id:`rayo`,label:`Rayo`},{id:`tribal`,label:`Tribal`}],Au=[{id:`ninguna`,label:`Nada`},{id:`mejilla`,label:`Mejilla`},{id:`ceja`,label:`Ceja`},{id:`nariz`,label:`Nariz`}],ju=[{id:`ninguna`,label:`Nada`},{id:`rayas`,label:`Rayas`},{id:`antifaz`,label:`Antifaz`},{id:`puntos`,label:`Puntos`},{id:`rayo`,label:`Rayo`}],Mu=[`#ffe0c4`,`#f5c9a0`,`#e3ab7c`,`#c68650`,`#9a5f34`,`#6b3e22`,`#4a2a17`],Nu=[`#1b1210`,`#3b2414`,`#6e4423`,`#b07a3c`,`#e3c27a`,`#f3ecd9`,`#a83224`,`#e0632a`,`#3a6fd8`,`#c04bd1`,`#3fbf6a`,`#ff7fb6`],Pu=[`#3b2414`,`#6e4423`,`#2f7bd8`,`#3aa35a`,`#7f8a96`,`#a24ad6`,`#e0a000`],Fu=[`#e53935`,`#fb8c00`,`#fdd835`,`#43a047`,`#00acc1`,`#1e88e5`,`#3949ab`,`#8e24aa`,`#ec407a`,`#ffffff`,`#9e9e9e`,`#212121`,`#6d4c41`,`#c5e1a5`],Iu=[`#e53935`,`#1e88e5`,`#fdd835`,`#43a047`,`#ffffff`,`#212121`,`#8e24aa`],Lu=.85,Ru=1.15;function zu(){return{gender:`chico`,skin:Mu[1],height:1,build:`normal`,hairStyle:`pinchos`,hairColor:Nu[2],eyeShape:`redondos`,eyeColor:Pu[2],shirtStyle:`camiseta`,shirtColor:Fu[5],pantsStyle:`cortos`,pantsColor:Fu[12],shoesStyle:`zapatillas`,shoesColor:Fu[0],hat:`ninguno`,hatColor:Fu[11],glasses:`ninguna`,tattoo:`ninguno`,scar:`ninguna`,facePaint:`ninguna`,facePaintColor:Iu[0]}}function Bu(e,t){return e[Math.floor(t()*e.length)%e.length]}function Vu(e=Math.random){let t=(t,n)=>e()<n?Bu(t.slice(1),e).id:t[0].id;return{gender:Bu(bu,e).id,skin:Bu(Mu,e),height:Math.round((Lu+e()*.29999999999999993)*100)/100,build:Bu(xu,e).id,hairStyle:Bu(Su,e).id,hairColor:Bu(Nu,e),eyeShape:Bu(Cu,e).id,eyeColor:Bu(Pu,e),shirtStyle:Bu(wu,e).id,shirtColor:Bu(Fu,e),pantsStyle:Bu(Tu,e).id,pantsColor:Bu(Fu,e),shoesStyle:Bu(Eu,e).id,shoesColor:Bu(Fu,e),hat:t(Du,.5),hatColor:Bu(Fu,e),glasses:t(Ou,.3),tattoo:t(ku,.3),scar:t(Au,.2),facePaint:t(ju,.3),facePaintColor:Bu(Iu,e)}}var Hu=/^#[0-9a-f]{6}$/i;function Uu(e,t,n){return t.some(t=>t.id===e)?e:n}function Wu(e,t){return typeof e==`string`&&Hu.test(e)?e.toLowerCase():t}function Gu(e){let t=zu(),n=e&&typeof e==`object`?e:{},r=typeof n.height==`number`&&Number.isFinite(n.height)?n.height:t.height;return{gender:Uu(n.gender,bu,t.gender),skin:Wu(n.skin,t.skin),height:Math.min(Ru,Math.max(Lu,r)),build:Uu(n.build,xu,t.build),hairStyle:Uu(n.hairStyle,Su,t.hairStyle),hairColor:Wu(n.hairColor,t.hairColor),eyeShape:Uu(n.eyeShape,Cu,t.eyeShape),eyeColor:Wu(n.eyeColor,t.eyeColor),shirtStyle:Uu(n.shirtStyle,wu,t.shirtStyle),shirtColor:Wu(n.shirtColor,t.shirtColor),pantsStyle:Uu(n.pantsStyle,Tu,t.pantsStyle),pantsColor:Wu(n.pantsColor,t.pantsColor),shoesStyle:Uu(n.shoesStyle,Eu,t.shoesStyle),shoesColor:Wu(n.shoesColor,t.shoesColor),hat:Uu(n.hat,Du,t.hat),hatColor:Wu(n.hatColor,t.hatColor),glasses:Uu(n.glasses,Ou,t.glasses),tattoo:Uu(n.tattoo,ku,t.tattoo),scar:Uu(n.scar,Au,t.scar),facePaint:Uu(n.facePaint,ju,t.facePaint),facePaintColor:Wu(n.facePaintColor,t.facePaintColor)}}var Ku=[`suelo`,`pared`,`puerta`,`techo`,`baul`,`cama`];function qu(e){return typeof e==`string`&&Ku.includes(e)}var K=Object.fromEntries([{id:`palo`,name:`Palo`,icon:`🥢`,stack:20,desc:`Sirve para fabricar cosas`},{id:`piedra`,name:`Piedra`,icon:`🪨`,stack:20,desc:`Sirve para fabricar cosas`},{id:`coco`,name:`Coco`,icon:`🥥`,stack:20,desc:`Tiene agua dulce dentro`,food:{hunger:6,thirst:14}},{id:`bayas`,name:`Bayas`,icon:`🫐`,stack:20,desc:`Un poco de comida`,food:{hunger:7,thirst:2}},{id:`pez`,name:`Pescado crudo`,icon:`🐟`,stack:20,desc:`Crudo alimenta poco. ¡Ásalo en la hoguera!`,food:{hunger:8,thirst:0},cooksTo:`pez-asado`},{id:`pez-asado`,name:`Pescado asado`,icon:`🍢`,stack:20,desc:`¡Alimenta mucho!`,food:{hunger:32,thirst:0,health:5}},{id:`pez-dorado`,name:`Pez dorado crudo`,icon:`🐠`,stack:20,desc:`Un pez raro. Asado es buenísimo`,food:{hunger:12,thirst:0},cooksTo:`pez-dorado-asado`},{id:`pez-dorado-asado`,name:`Pez dorado asado`,icon:`🍤`,stack:20,desc:`¡El mejor plato de la isla!`,food:{hunger:50,thirst:5,health:20}},{id:`bota`,name:`Bota vieja`,icon:`🥾`,stack:20,desc:`No se come… ¡suéltala!`},{id:`galletas`,name:`Galletas`,icon:`🍪`,stack:20,desc:`Del equipaje del avión`,food:{hunger:15,thirst:-2}},{id:`botella`,name:`Botella vacía`,icon:`🫙`,stack:20,desc:`Llénala en el mar`},{id:`agua-mar`,name:`Agua de mar`,icon:`🧂`,stack:20,desc:`¡Tiene sal! Hiérvela en la hoguera`,food:{hunger:0,thirst:-8},cooksTo:`agua`,leaves:`botella`},{id:`agua`,name:`Agua hervida`,icon:`💧`,stack:20,desc:`Agua buena para beber`,food:{hunger:0,thirst:40},leaves:`botella`},{id:`cana`,name:`Caña de pescar`,icon:`🎣`,stack:1,desc:`Úsala en la orilla, mirando al mar`},{id:`hoguera`,name:`Hoguera`,icon:`🔥`,stack:5,desc:`Úsala para colocarla en el suelo`},{id:`botiquin`,name:`Botiquín`,icon:`🩹`,stack:10,desc:`Cura 35 de vida`,food:{hunger:0,thirst:0,health:35}},{id:`pistolas`,name:`Dos pistolas`,icon:`🔫`,stack:1,desc:`Balas infinitas. Pulsa atacar para disparar`},{id:`dagas`,name:`Dos dagas`,icon:`🗡️`,stack:1,desc:`Rápidas. ¡Por la espalda hacen muchísimo daño!`},{id:`pistola-rayos`,name:`Pistola de rayos`,icon:`🛸`,stack:1,desc:`Dispara rayos muy fuertes. Gasta energía y se recarga sola`},{id:`espada`,name:`Espada pirata`,icon:`⚔️`,stack:1,desc:`Muy fuerte. La llevan los capitanes pirata`},{id:`carne`,name:`Carne cruda`,icon:`🥩`,stack:20,desc:`Cruda alimenta poco. ¡Ásala en la hoguera!`,food:{hunger:8,thirst:0},cooksTo:`carne-asada`},{id:`carne-asada`,name:`Carne asada`,icon:`🍖`,stack:20,desc:`¡Alimenta muchísimo!`,food:{hunger:40,thirst:0,health:10}},{id:`madera`,name:`Madera`,icon:`🪵`,stack:20,desc:`Tala árboles con el hacha para conseguirla`},{id:`hojas`,name:`Hojas de palmera`,icon:`🌿`,stack:20,desc:`Para techos y camas. Tala palmeras`},{id:`fibra`,name:`Fibra`,icon:`🌾`,stack:20,desc:`De las plantas altas. Con 3 haces una cuerda`},{id:`cuerda`,name:`Cuerda`,icon:`🪢`,stack:20,desc:`Sirve para fabricar`},{id:`hacha`,name:`Hacha`,icon:`🪓`,stack:1,desc:`Tala árboles. En la mano, desmonta lo construido`},{id:`pico`,name:`Pico`,icon:`⛏️`,stack:1,desc:`Rompe rocas grandes para sacar piedras`},{id:`balsa`,name:`Balsa`,icon:`🛶`,stack:1,desc:`Úsala en la orilla, mirando al mar, para echarla al agua`},{id:`barca`,name:`Barca`,icon:`🚣`,stack:1,desc:`Más rápida que la balsa. Échala al agua desde la orilla`},{id:`barco`,name:`Barco`,icon:`⛵`,stack:1,desc:`¡El más rápido! Se puede mejorar con velas y timón`},{id:`vela`,name:`Velas grandes`,icon:`🏳️`,stack:1,desc:`Úsalas junto a tu barco: irá mucho más rápido`},{id:`timon`,name:`Timón dorado`,icon:`☸️`,stack:1,desc:`Úsalo junto a tu barco: gira mejor y corre más`},{id:`brujula`,name:`Brújula`,icon:`🧭`,stack:1,desc:`Llévala encima para saber hacia dónde vas`},{id:`oro`,name:`Monedas de oro`,icon:`🪙`,stack:99,desc:`¡Un tesoro pirata! Sirve para comprar cosas a los amigos de las islas`},{id:`perla`,name:`Perla`,icon:`🦪`,stack:20,desc:`Una perla preciosa del fondo del mar. ¡Los comerciantes te dan oro por ella!`},{id:`diente`,name:`Diente de tiburón`,icon:`🦷`,stack:20,desc:`Un trofeo de tiburón. Sirve para fabricar el arpón`},{id:`aire`,name:`Botella de aire`,icon:`🫧`,stack:5,desc:`Úsala buceando para llenar todo tu aire`},{id:`lanza`,name:`Lanza`,icon:`🔱`,stack:1,desc:`Llega más lejos que la espada y empuja mucho`},{id:`arco`,name:`Arco`,icon:`🏹`,stack:1,desc:`Dispara flechas muy lejos. ¡Flechas infinitas!`},{id:`arpon`,name:`Arpón`,icon:`🎯`,stack:1,desc:`El arma del mar: bajo el agua hace muchísimo daño`},{id:`trabuco`,name:`Pistola pirata`,icon:`💥`,stack:1,desc:`Un trabuco pirata: ¡pum! Cada disparo es muy fuerte`},{id:`armadura-madera`,name:`Armadura de madera`,icon:`🦺`,stack:1,desc:`Llévala en la mochila: los golpes te quitan un 20% menos`},{id:`armadura-piel`,name:`Abrigo de lobo`,icon:`🧥`,stack:1,desc:`Llévalo en la mochila: los golpes te quitan un 30% menos`},{id:`armadura-pirata`,name:`Armadura pirata`,icon:`🥋`,stack:1,desc:`Llévala en la mochila: los golpes te quitan un 40% menos`},{id:`armadura-robot`,name:`Armadura robot`,icon:`🦾`,stack:1,desc:`¡La mejor! Los golpes te quitan la mitad`},{id:`escudo-madera`,name:`Escudo de madera`,icon:`🛡️`,stack:1,desc:`Llévalo en la mochila: para 1 de cada 5 golpes`},{id:`escudo-concha`,name:`Escudo de concha`,icon:`🐚`,stack:1,desc:`Llévalo en la mochila: para 1 de cada 3 golpes`},{id:`piel`,name:`Piel de lobo`,icon:`🐺`,stack:20,desc:`Calentita. Con 3 haces un abrigo de lobo`},{id:`tornillo`,name:`Tuerca de robot`,icon:`🔩`,stack:20,desc:`De los robots malos. Sirve para la armadura robot`},{id:`corona`,name:`Corona del ogro`,icon:`👑`,stack:1,desc:`¡El trofeo de los héroes! Venciste al ogro de la isla misteriosa`},{id:`suelo`,name:`Suelo de madera`,icon:`🟫`,stack:10,desc:`Úsalo para colocarlo delante de ti`},{id:`pared`,name:`Pared de madera`,icon:`🧱`,stack:10,desc:`Úsala para colocarla delante de ti`},{id:`puerta`,name:`Puerta`,icon:`🚪`,stack:10,desc:`Se abre y se cierra`},{id:`techo`,name:`Techo de hojas`,icon:`🛖`,stack:10,desc:`Va encima de un suelo o en el sitio de delante`},{id:`baul`,name:`Baúl`,icon:`🧰`,stack:5,desc:`Guarda 10 huecos más de cosas`},{id:`cama`,name:`Cama`,icon:`🛏️`,stack:5,desc:`Duerme de noche para que se haga de día`}].map(e=>[e.id,e]));function Ju(e){return typeof e==`string`&&Object.prototype.hasOwnProperty.call(K,e)}var Yu={destructor:[[`pistolas`,1]],curador:[[`botiquin`,3]],asesino:[[`dagas`,1]],alien:[[`pistola-rayos`,1]]};function Xu(e,t){return e===`curador`?{...t,hunger:t.hunger>0?Math.round(t.hunger*1.25):t.hunger}:t}var Zu=[{id:`herramientas`,label:`🛠️ Herramientas`},{id:`armas`,label:`⚔️ Armas y armaduras`},{id:`supervivencia`,label:`🔥 Supervivencia`},{id:`construir`,label:`🏠 Construir`},{id:`barcos`,label:`⛵ Barcos`}],Qu=[{out:`hacha`,n:1,needs:[[`palo`,2],[`piedra`,2]],desc:`Para talar árboles y conseguir madera`,group:`herramientas`},{out:`cuerda`,n:1,needs:[[`fibra`,3]],desc:`Junta fibra de las plantas altas`,group:`herramientas`},{out:`pico`,n:1,needs:[[`palo`,3],[`piedra`,3],[`cuerda`,1]],desc:`Para sacar piedras de las rocas grandes`,group:`herramientas`},{out:`cana`,n:1,needs:[[`palo`,3]],desc:`Para pescar en la orilla`,group:`herramientas`},{out:`lanza`,n:1,needs:[[`palo`,3],[`piedra`,2],[`cuerda`,1]],desc:`Llega lejos y empuja a los enemigos`,group:`armas`},{out:`arco`,n:1,needs:[[`madera`,2],[`cuerda`,3]],desc:`Para luchar desde lejos`,group:`armas`},{out:`arpon`,n:1,needs:[[`madera`,2],[`cuerda`,2],[`diente`,2]],desc:`Con dientes de tiburón. ¡El mejor bajo el agua!`,group:`armas`},{out:`escudo-madera`,n:1,needs:[[`madera`,4],[`cuerda`,1]],desc:`Para algunos golpes`,group:`armas`},{out:`escudo-concha`,n:1,needs:[[`perla`,3],[`madera`,2]],desc:`Brilla y para muchos golpes`,group:`armas`},{out:`armadura-madera`,n:1,needs:[[`madera`,8],[`cuerda`,3]],desc:`Los golpes te quitan menos vida`,group:`armas`},{out:`armadura-piel`,n:1,needs:[[`piel`,3],[`cuerda`,2]],desc:`Con pieles de lobo de la isla de nieve`,group:`armas`},{out:`armadura-robot`,n:1,needs:[[`tornillo`,6],[`cuerda`,2]],desc:`Con tuercas de los robots de la isla de cristal`,group:`armas`},{out:`hoguera`,n:1,needs:[[`palo`,4],[`piedra`,3]],desc:`Para asar pescado y hervir agua`,group:`supervivencia`},{out:`botella`,n:1,needs:[[`coco`,1]],desc:`Te bebes el coco y te quedas la cáscara`,group:`supervivencia`},{out:`suelo`,n:1,needs:[[`madera`,4]],desc:`Un suelo de 3 × 3 metros. ¡Vale también para muelles!`,group:`construir`},{out:`pared`,n:1,needs:[[`madera`,4]],desc:`Se pone en el borde que tienes delante`,group:`construir`},{out:`puerta`,n:1,needs:[[`madera`,4],[`cuerda`,1]],desc:`Una pared con puerta`,group:`construir`},{out:`techo`,n:1,needs:[[`madera`,2],[`hojas`,4]],desc:`Para que no te mojes`,group:`construir`},{out:`baul`,n:1,needs:[[`madera`,6],[`cuerda`,1]],desc:`Guarda 10 huecos más de cosas`,group:`construir`},{out:`cama`,n:1,needs:[[`madera`,4],[`hojas`,4]],desc:`Duerme de noche para que amanezca`,group:`construir`},{out:`brujula`,n:1,needs:[[`piedra`,2],[`palo`,1],[`cuerda`,1]],desc:`Para saber hacia dónde vas en el mar`,group:`barcos`},{out:`balsa`,n:1,needs:[[`madera`,6],[`cuerda`,2]],desc:`Para viajar a otras islas. Echa la balsa al agua desde la orilla`,group:`barcos`},{out:`barca`,n:1,needs:[[`madera`,12],[`cuerda`,3],[`palo`,4]],desc:`Una barca con remos, más rápida`,group:`barcos`},{out:`barco`,n:1,needs:[[`madera`,20],[`cuerda`,6],[`hojas`,8]],desc:`¡Un barco de verdad! Muy rápido y se puede mejorar`,group:`barcos`},{out:`vela`,n:1,needs:[[`hojas`,12],[`cuerda`,4],[`madera`,4]],desc:`Mejora el barco: velas más grandes = más rápido`,group:`barcos`},{out:`timon`,n:1,needs:[[`madera`,6],[`piedra`,6],[`cuerda`,2]],desc:`Mejora el barco: gira mejor y corre más`,group:`barcos`}],$u={arbol:3,palmera:2,roca:3};function ed(e,t){return Math.max(1,$u[e]-+(t===`destructor`))}var td={arbol:`hacha`,palmera:`hacha`,roca:`pico`},nd={arbol:[[`madera`,4],[`palo`,2]],palmera:[[`madera`,2],[`hojas`,3]],roca:[[`piedra`,3]]},rd=[[[`cana`,1],[`botella`,1]],[[`botella`,2],[`galletas`,2]],[[`galletas`,3],[`botiquin`,1]]],id=class{slots=Array.from({length:10},()=>null);selected=0;onChange=()=>{};add(e,t=1){let n=K[e].stack,r=t;for(let t of this.slots){if(r<=0)break;if(t&&t.id===e&&t.n<n){let e=Math.min(n-t.n,r);t.n+=e,r-=e}}for(let t=0;t<10&&r>0;t++)if(!this.slots[t]){let i=Math.min(n,r);this.slots[t]={id:e,n:i},r-=i}return r!==t&&this.onChange(),r}fits(e){return this.slots.some(t=>!t||t.id===e&&t.n<K[e].stack)}count(e){return this.slots.reduce((t,n)=>t+(n&&n.id===e?n.n:0),0)}take(e,t=1){if(this.count(e)<t)return!1;let n=t;for(let t=9;t>=0&&n>0;t--){let r=this.slots[t];if(r&&r.id===e){let e=Math.min(r.n,n);r.n-=e,n-=e,r.n===0&&(this.slots[t]=null)}}return this.onChange(),!0}takeFrom(e,t=1){let n=this.slots[e];if(!n)return null;let r=Math.min(t,n.n);return n.n-=r,n.n===0&&(this.slots[e]=null),this.onChange(),{id:n.id,n:r}}get current(){return this.slots[this.selected]}select(e){this.selected=(e%10+10)%10,this.onChange()}canCraft(e){return e.needs.every(([e,t])=>this.count(e)>=t)}craft(e){if(!this.canCraft(e))return`faltan`;let t=this.slots.map(e=>e?{...e}:null);for(let[t,n]of e.needs)this.take(t,n);return this.add(e.out,e.n)>0?(this.slots=t,this.onChange(),`lleno`):`ok`}clear(){this.slots=Array.from({length:10},()=>null),this.selected=0,this.onChange()}toJSON(){return this.slots.map(e=>e?{id:e.id,n:e.n}:null)}load(e){this.slots=ad(e),this.onChange()}};function ad(e){let t=Array.from({length:10},()=>null);if(!Array.isArray(e))return t;for(let n=0;n<10;n++){let r=e[n];r&&Ju(r.id)&&typeof r.n==`number`&&Number.isFinite(r.n)&&r.n>=1&&(t[n]={id:r.id,n:Math.min(Math.floor(r.n),K[r.id].stack)})}return t}function od(e,t,n){let r=e.slots[t];if(!r)return 0;let i=n.add(r.id,r.n),a=r.n-i;return a>0&&e.takeFrom(t,a),a}var sd={puno:{id:`puno`,name:`Puñetazo`,damage:7,rate:.45,range:1.7,ranged:!1,knock:.4},pistolas:{id:`pistolas`,name:`Dos pistolas`,damage:9,rate:.22,range:28,ranged:!0,knock:.15},dagas:{id:`dagas`,name:`Dos dagas`,damage:13,rate:.28,range:1.9,ranged:!1,knock:.3},"pistola-rayos":{id:`pistola-rayos`,name:`Pistola de rayos`,damage:22,rate:.35,range:32,ranged:!0,energy:14,knock:.6},espada:{id:`espada`,name:`Espada pirata`,damage:20,rate:.5,range:2.3,ranged:!1,knock:.8},hacha:{id:`hacha`,name:`Hacha`,damage:11,rate:.5,range:2,ranged:!1,knock:.5},pico:{id:`pico`,name:`Pico`,damage:10,rate:.55,range:2,ranged:!1,knock:.5},lanza:{id:`lanza`,name:`Lanza`,damage:18,rate:.5,range:3.2,ranged:!1,knock:1.1},arco:{id:`arco`,name:`Arco`,damage:16,rate:.55,range:30,ranged:!0,knock:.3},arpon:{id:`arpon`,name:`Arpón`,damage:20,rate:.7,range:16,ranged:!0,knock:.6,sea:1.6},trabuco:{id:`trabuco`,name:`Pistola pirata`,damage:34,rate:.8,range:20,ranged:!0,knock:1.2}},cd=[`pistola-rayos`,`trabuco`,`espada`,`lanza`,`arpon`,`arco`,`pistolas`,`dagas`];function ld(e){return!!e&&cd.includes(e)}function ud(e,t,n=!1){if(e===`hacha`||e===`pico`||ld(e))return e;if(n&&t.includes(`arpon`))return`arpon`;for(let e of cd)if(t.includes(e))return e;return`puno`}var dd=2.5;function fd(e,t,n,r=!1){let i=sd[e].damage;return r&&(i*=sd[e].sea??1),t===`curador`&&(i*=.75),t===`asesino`&&n&&!sd[e].ranged&&(i*=dd),Math.round(i)}function pd(e,t,n,r,i){let a=r-t,o=i-n,s=Math.hypot(a,o)||1;return(a*Math.sin(e)+o*Math.cos(e))/s<-.3}function md(e,t,n,r,i,a){let o=Math.sin(n),s=Math.cos(n),c=null,l=1/0;for(let n of a){let a=n.x-e,u=n.z-t,d=Math.hypot(a,u);if(d-n.r>r)continue;let f=d<.01?1:(a*o+u*s)/d,p=Math.acos(Math.max(-1,Math.min(1,f))),m=d<n.r+1.6;if(p>i&&!m)continue;let h=m?d:d+p*4+2;h<l&&(l=h,c=n)}return c}var hd=class e{value=100;wait=0;static MAX=100;static RECHARGE=22;static DELAY=.8;spend(t){return this.value<t?!1:(this.value-=t,this.wait=e.DELAY,!0)}update(t){this.wait>0?this.wait-=t:this.value=Math.min(e.MAX,this.value+e.RECHARGE*t)}},gd={"armadura-madera":.2,"armadura-piel":.3,"armadura-pirata":.4,"armadura-robot":.5},_d={"escudo-madera":.2,"escudo-concha":.34};function vd(e){let t=t=>{let n=null;for(let r of e)r&&(t[r]??0)>(n?t[n]:0)&&(n=r);return n};return{armor:t(gd),shield:t(_d)}}function yd(e,t,n,r){let{armor:i,shield:a}=vd(t);if(a&&r<_d[a])return{damage:0,blocked:!0};let o=e*(n===`destructor`?.8:1);return i&&(o*=1-gd[i]),{damage:Math.max(1,Math.round(o)),blocked:!1}}var bd={balsa:{name:`Balsa`,icon:`🛶`,speed:6.5,turn:1.5,length:3,width:2.1,deck:.32,seatBack:.3},barca:{name:`Barca`,icon:`🚣`,speed:9.5,turn:1.8,length:4.4,width:1.7,deck:.35,seatBack:1},barco:{name:`Barco`,icon:`⛵`,speed:12,turn:1.1,length:8,width:3,deck:1,seatBack:2.1}},xd={vela:{name:`Velas grandes`,speed:4,turn:0},timon:{name:`Timón dorado`,speed:3,turn:.5}};function Sd(e){return e===`balsa`||e===`barca`||e===`barco`}function Cd(e){return e===`vela`||e===`timon`}var wd=-.55;function Td(e){return Math.atan2(Math.sin(e),Math.cos(e))}var Ed=class e{kind;x;z;yaw;speed=0;ups=new Set;constructor(e,t,n,r=0){this.kind=e,this.x=t,this.z=n,this.yaw=r}static from(t){let n=new e(t.k,t.x,t.z,t.yaw);if(t.k===`barco`)for(let e of t.up??[])n.ups.add(e);return n}save(){let e={k:this.kind,x:Math.round(this.x*100)/100,z:Math.round(this.z*100)/100,yaw:Math.round(this.yaw*1e3)/1e3};return this.ups.size&&(e.up=[...this.ups]),e}get def(){return bd[this.kind]}get maxSpeed(){let e=this.def.speed;for(let t of this.ups)e+=xd[t].speed;return e}get turnRate(){let e=this.def.turn;for(let t of this.ups)e+=xd[t].turn;return e}seat(){let e=this.def.seatBack;return{x:this.x-Math.sin(this.yaw)*e,z:this.z-Math.cos(this.yaw)*e}}hull(e=this.x,t=this.z,n=this.yaw){let r=this.def.length/2,i=Math.sin(n),a=Math.cos(n);return[{x:e+i*r,z:t+a*r},{x:e,z:t},{x:e-i*r,z:t-a*r}]}step(e,t,n,r){let i=1;if(n!==null){let t=Td(n-this.yaw),a=this.turnRate*(.45+.55*Math.min(1,Math.abs(this.speed)/this.def.speed)),o=Math.sign(t)*Math.min(Math.abs(t),a*e),s=Td(this.yaw+o);this.hull(this.x,this.z,s).every(e=>r(e.x,e.z))&&(this.yaw=s),i=Math.max(0,Math.cos(t))}let a=this.maxSpeed*Math.max(0,Math.min(1,t))*(.2+.8*i),o=a>this.speed?.9:1.6;if(this.speed+=(a-this.speed)*(1-Math.exp(-o*e)),this.speed<.01)return this.speed=0,!1;let s=this.x+Math.sin(this.yaw)*this.speed*e,c=this.z+Math.cos(this.yaw)*this.speed*e;return this.hull(s,c).every(e=>r(e.x,e.z))?(this.x=s,this.z=c,!1):(this.speed=0,!0)}};function Dd(e,t,n,r,i){let a=bd[e].length/2,o=Math.sin(r),s=Math.cos(r),c=new Ed(e,0,0,r);for(let l=1.5;l<=18;l+=.5){let u=t+o*(l+a),d=n+s*(l+a);if(c.hull(u,d,r).every(e=>i(e.x,e.z)<-.65)&&i(u+s*bd[e].width*.5,d-o*bd[e].width*.5)<-.55&&i(u-s*bd[e].width*.5,d+o*bd[e].width*.5)<-.55)return{x:u,z:d}}return null}function Od(e,t,n,r=6){let i=null,a=1/0;for(let o=1.5;o<=r;o+=.5){for(let r=0;r<24;r++){let s=r/24*Math.PI*2,c=e+Math.cos(s)*o,l=t+Math.sin(s)*o,u=n(c,l);u>.15&&u<4&&o<a&&(a=o,i={x:c,z:l})}if(i)return i}return i}var kd=`sobreviviendo-a-la-isla.v1`,Ad=`sobreviviendo-a-la-isla.visita`,jd=kd;function Md(e){jd=e?Ad:kd}var Nd=400,Pd=/^-?\d{1,4},-?\d{1,4}$/;function Fd(e){let t=[];for(let n of Array.isArray(e)?e:[]){let e=n;if(!e||!qu(e.k))continue;let r=Bd(e.x,-1e3,1e3),i=Bd(e.z,-1e3,1e3),a=Bd(e.r,-100,100),o=Bd(e.y,-50,100);if(r===null||i===null||a===null||o===null)continue;let s={k:e.k,x:r,z:i,r:a,y:o};if(e.k===`puerta`&&e.open===!0&&(s.open=!0),e.k===`baul`&&(s.items=ad(e.items)),t.push(s),t.length>=150)break}return t}var Id=40;function Ld(e){let t=Rd(e);if(!t)return;let n=e,r={inv:ad(n.inv),...t};if(n.isles&&typeof n.isles==`object`){let e={},t=0;for(let[r,i]of Object.entries(n.isles)){if(!Pd.test(r)||t>=40)continue;let n=Rd(i);n&&(e[r]=n,t++)}r.isles=e}if(Array.isArray(n.boats)){let e=[];for(let t of n.boats){let n=t;if(!n||!Sd(n.k))continue;let r=Bd(n.x,-1e6,1e6),i=Bd(n.z,-1e6,1e6),a=Bd(n.yaw,-100,100);if(r===null||i===null||a===null)continue;let o={k:n.k,x:r,z:i,yaw:a},s=Array.isArray(n.up)?[...new Set(n.up.filter(Cd))]:[];if(s.length&&n.k===`barco`&&(o.up=s),e.push(o),e.length>=8)break}r.boats=e}if(Array.isArray(n.seen)&&(r.seen=[...new Set(n.seen.filter(e=>typeof e==`string`&&Pd.test(e)))].slice(0,Nd)),n.quests&&typeof n.quests==`object`){let e={};for(let[t,r]of Object.entries(n.quests))Pd.test(t)&&Number.isInteger(r)&&r>0&&r<=10&&(e[t]=r);r.quests=e}return Array.isArray(n.bosses)&&(r.bosses=[...new Set(n.bosses.filter(e=>typeof e==`string`&&(Pd.test(e)||e===`monstruo`||e===`ogro`)))].slice(0,60)),n.won===!0&&(r.won=!0),Number.isInteger(n.ride)&&n.ride>=0&&n.ride<(r.boats?.length??0)&&(r.ride=n.ride),r}function Rd(e){if(!e||typeof e!=`object`)return;let t=e,n=e=>{let t=e;if(!t)return null;let n=Bd(t.x,-1e3,1e3),r=Bd(t.z,-1e3,1e3);return n===null||r===null?null:{x:n,z:r}},r=(Array.isArray(t.fires)?t.fires:[]).map(n).filter(e=>!!e).slice(0,4),i=(Array.isArray(t.bags)?t.bags:[]).filter(e=>Number.isInteger(e)&&e>=0&&e<10),a={};if(t.taken&&typeof t.taken==`object`)for(let[e,n]of Object.entries(t.taken)){let t=Bd(n,0,3600);t!==null&&/^[a-z]+-\d+$/.test(e)&&(a[e]=t)}let o=[];for(let e of Array.isArray(t.drops)?t.drops:[]){let t=n(e),r=e,i=Bd(r?.n,1,1e3);t&&i!==null&&Ju(r.id)&&o.length<Id&&o.push({...t,id:r.id,n:Math.floor(i)})}return{fires:r,bags:[...new Set(i)],taken:a,drops:o,builds:Fd(t.builds)}}function zd(e){return typeof e==`string`?e.replace(/[\u0000-\u001f<>]/g,``).replace(/\s+/g,` `).trim().slice(0,16):``}function Bd(e,t,n){return typeof e==`number`&&Number.isFinite(e)&&e>=t&&e<=n?e:null}function Vd(e){if(!e||typeof e!=`object`)return null;let t=e,n=Bd(t.seed,1,1e9),r=Bd(t.x,-1e3,1e3),i=Bd(t.z,-1e3,1e3),a=Bd(t.yaw,-1e3,1e3),o=Bd(t.hour,0,24),s=Bd(t.day,1,1e6),c=Bd(t.health,0,1e3),l=Bd(t.hunger,0,100),u=Bd(t.thirst,0,100);if(n===null||r===null||i===null||a===null||o===null||s===null||c===null||l===null||u===null||c<=0)return null;let d={seed:Math.floor(n),x:r,z:i,yaw:a,hour:o,day:Math.floor(s),health:c,hunger:l,thirst:u},f=Ld(t.world);f&&(d.world=f);let p=Bd(t.ci,-1e3,1e3),m=Bd(t.cj,-1e3,1e3);return p!==null&&m!==null&&Number.isInteger(p)&&Number.isInteger(m)&&(d.ci=p,d.cj=m),d}function Hd(e){if(!e)return null;try{let t=JSON.parse(e);if(t.version!==1&&t.version!==2||!t.character)return null;let n=zd(t.character.name);return!n||!ru(t.character.classId)?null:{version:2,character:{name:n,classId:t.character.classId,look:Gu(t.character.look)},game:t.version===2?Vd(t.game):null}}catch{return null}}function Ud(){try{return typeof localStorage>`u`?null:localStorage}catch{return null}}function Wd(e=Ud()){try{return Hd(e?.getItem(jd)??null)}catch{return null}}function Gd(e,t=null,n=Ud()){try{if(!n)return!1;let r={version:2,character:e,game:t};return n.setItem(jd,JSON.stringify(r)),!0}catch{return!1}}function Kd(){return{moveX:0,moveY:0,lookX:0,lookY:0,zoom:0,jump:!1,jumpHeld:!1,power:!1,action:!1,use:!1,drop:!1,craft:!1,slot:-1,slotDelta:0,attack:!1,attackHeld:!1,map:!1,dive:!1,zoomWrap:!1}}function qd(e){let t=/^(?:Digit|Numpad)(\d)$/.exec(e);if(!t)return-1;let n=Number(t[1]);return n===0?9:n-1}function Jd(e,t=.18){let n=Math.abs(e);return n<t?0:Math.sign(e)*(n-t)/(1-t)}function Yd(e,t,n){let r=Math.hypot(e,t);if(r===0||n<=0)return{x:0,y:0};let i=Math.min(r,n)/n;return{x:e/r*i,y:-t/r*i}}function Xd(e){let t=0,n=0;(e.has(`KeyW`)||e.has(`ArrowUp`))&&(n+=1),(e.has(`KeyS`)||e.has(`ArrowDown`))&&--n,(e.has(`KeyD`)||e.has(`ArrowRight`))&&(t+=1),(e.has(`KeyA`)||e.has(`ArrowLeft`))&&--t;let r=Math.hypot(t,n);return r>1?{x:t/r,y:n/r}:{x:t,y:n}}var Zd=.0028,Qd=.0065,$d=2.8,ef=class{canvas;widgets;enabled=!1;device=`teclado`;onDeviceChange=()=>{};keys=new Set;edge={jump:!1,power:!1,action:!1,use:!1,drop:!1,craft:!1,attack:!1,map:!1,slot:-1};look={x:0,y:0};zoom=0;joy={id:-1,sx:0,sy:0,x:0,y:0};lookTouch={id:-1,x:0,y:0};dragging=!1;touchJumpHeld=!1;touchAttackHeld=!1;touchDiveHeld=!1;mouseAttackHeld=!1;padPrev=[];joyRadius=60;constructor(e,t){this.canvas=e,this.widgets=t,window.addEventListener(`keydown`,e=>this.onKey(e,!0)),window.addEventListener(`keyup`,e=>this.onKey(e,!1)),window.addEventListener(`blur`,()=>this.reset()),e.addEventListener(`pointerdown`,e=>this.onDown(e)),window.addEventListener(`pointermove`,e=>this.onMove(e)),window.addEventListener(`pointerup`,e=>this.onUp(e)),window.addEventListener(`pointercancel`,e=>this.onUp(e)),document.addEventListener(`mousemove`,t=>{this.enabled&&document.pointerLockElement===e&&(this.look.x+=t.movementX*Zd,this.look.y+=t.movementY*Zd)}),e.addEventListener(`wheel`,e=>{this.enabled&&(this.zoom+=Math.sign(e.deltaY),e.preventDefault())},{passive:!1}),e.addEventListener(`contextmenu`,e=>e.preventDefault())}press(e){this.enabled&&(this.setDevice(`tactil`),e===`dive`?this.touchDiveHeld=!0:(this.edge[e]=!0,e===`jump`&&(this.touchJumpHeld=!0),e===`attack`&&(this.touchAttackHeld=!0)))}release(e){e===`dive`&&(this.touchDiveHeld=!1),e===`jump`&&(this.touchJumpHeld=!1),e===`attack`&&(this.touchAttackHeld=!1)}reset(){this.keys.clear(),this.edge={jump:!1,power:!1,action:!1,use:!1,drop:!1,craft:!1,attack:!1,map:!1,slot:-1},this.look={x:0,y:0},this.zoom=0,this.endJoystick(),this.lookTouch.id=-1,this.dragging=!1,this.touchJumpHeld=!1,this.touchAttackHeld=!1,this.touchDiveHeld=!1,this.mouseAttackHeld=!1}releasePointer(){document.pointerLockElement===this.canvas&&document.exitPointerLock()}setDevice(e){this.device!==e&&(this.device=e,this.onDeviceChange(e))}onKey(e,t){let n=e.target;if(!n||n.tagName!==`INPUT`&&n.tagName!==`TEXTAREA`){if(!this.enabled)t||this.keys.delete(e.code);else if(t){if(this.keys.add(e.code),!e.repeat){e.code===`Space`&&(this.edge.jump=!0),e.code===`KeyQ`&&(this.edge.power=!0),e.code===`KeyR`&&(this.edge.attack=!0),e.code===`KeyM`&&(this.edge.map=!0),e.code===`KeyE`&&(this.edge.action=!0),e.code===`KeyF`&&(this.edge.use=!0),e.code===`KeyG`&&(this.edge.drop=!0),(e.code===`KeyC`||e.code===`Tab`||e.code===`KeyI`)&&(this.edge.craft=!0);let t=qd(e.code);t>=0&&(this.edge.slot=t)}(e.code===`Space`||e.code===`Tab`||e.code.startsWith(`Arrow`)||e.code.startsWith(`Control`))&&e.preventDefault(),this.setDevice(`teclado`)}else this.keys.delete(e.code)}}onDown(e){if(this.enabled){if(e.pointerType===`touch`)this.setDevice(`tactil`),e.clientX<window.innerWidth*.45&&this.joy.id<0?(this.joy={id:e.pointerId,sx:e.clientX,sy:e.clientY,x:e.clientX,y:e.clientY},this.showJoystick(!0)):this.lookTouch.id<0&&(this.lookTouch={id:e.pointerId,x:e.clientX,y:e.clientY}),e.preventDefault();else if(this.setDevice(`teclado`),this.dragging=!0,document.pointerLockElement===this.canvas&&e.button===0&&(this.edge.attack=!0,this.mouseAttackHeld=!0),document.pointerLockElement!==this.canvas)try{this.canvas.requestPointerLock()?.catch?.(()=>{})}catch{}}}onMove(e){this.enabled&&(e.pointerId===this.joy.id?(this.joy.x=e.clientX,this.joy.y=e.clientY,this.updateKnob()):e.pointerId===this.lookTouch.id?(this.look.x+=(e.clientX-this.lookTouch.x)*Qd,this.look.y+=(e.clientY-this.lookTouch.y)*Qd,this.lookTouch.x=e.clientX,this.lookTouch.y=e.clientY):e.pointerType===`mouse`&&this.dragging&&document.pointerLockElement!==this.canvas&&(this.look.x+=e.movementX*Zd,this.look.y+=e.movementY*Zd))}onUp(e){e.pointerId===this.joy.id&&this.endJoystick(),e.pointerId===this.lookTouch.id&&(this.lookTouch.id=-1),e.pointerType===`mouse`&&(this.dragging=!1,this.mouseAttackHeld=!1)}endJoystick(){this.joy.id=-1,this.showJoystick(!1)}showJoystick(e){let{joyBase:t}=this.widgets;e?(t.style.left=`${this.joy.sx}px`,t.style.top=`${this.joy.sy}px`,t.classList.add(`active`)):t.classList.remove(`active`),this.updateKnob()}updateKnob(){let e=this.joy.id<0?{x:0,y:0}:Yd(this.joy.x-this.joy.sx,this.joy.y-this.joy.sy,this.joyRadius);this.widgets.joyKnob.style.transform=`translate(${e.x*this.joyRadius}px, ${-e.y*this.joyRadius}px)`}poll(e){let t=Kd();if(!this.enabled)return this.reset(),t;let n=Xd(this.keys);if(t.moveX=n.x,t.moveY=n.y,this.joy.id>=0){let e=Yd(this.joy.x-this.joy.sx,this.joy.y-this.joy.sy,this.joyRadius);Math.hypot(e.x,e.y)>Math.hypot(t.moveX,t.moveY)&&(t.moveX=e.x,t.moveY=e.y)}return t.lookX=this.look.x,t.lookY=this.look.y,t.zoom=this.zoom,t.jump=this.edge.jump,t.power=this.edge.power,t.action=this.edge.action,t.use=this.edge.use,t.drop=this.edge.drop,t.craft=this.edge.craft,t.slot=this.edge.slot,t.attack=this.edge.attack,t.map=this.edge.map,t.attackHeld=this.keys.has(`KeyR`)||this.touchAttackHeld||this.mouseAttackHeld,t.jumpHeld=this.keys.has(`Space`)||this.touchJumpHeld,t.dive=this.keys.has(`ShiftLeft`)||this.keys.has(`ShiftRight`)||this.keys.has(`ControlLeft`)||this.keys.has(`ControlRight`)||this.touchDiveHeld,this.pollGamepad(t,e),this.look={x:0,y:0},this.zoom=0,this.edge={jump:!1,power:!1,action:!1,use:!1,drop:!1,craft:!1,attack:!1,map:!1,slot:-1},t}pollGamepad(e,t){let n=typeof navigator.getGamepads==`function`?navigator.getGamepads():[],r=Array.from(n).find(e=>e&&e.connected);if(!r)return;let i=Jd(r.axes[0]??0),a=-Jd(r.axes[1]??0),o=Jd(r.axes[2]??0),s=Jd(r.axes[3]??0),c=r.buttons.map(e=>e.pressed),l=e=>!!c[e]&&!this.padPrev[e];if((i||a||o||s||c.some(Boolean))&&this.setDevice(`mando`),Math.hypot(i,a)>Math.hypot(e.moveX,e.moveY)){let t=Math.hypot(i,a);e.moveX=t>1?i/t:i,e.moveY=t>1?a/t:a}e.lookX+=o*$d*t,e.lookY+=s*$d*t,l(0)&&(e.jump=!0),l(1)&&(e.use=!0),l(3)&&(e.power=!0),l(2)&&(e.action=!0),(l(8)||l(12))&&(e.craft=!0),l(9)&&(e.map=!0),l(13)&&(e.drop=!0),(l(7)||l(6))&&(e.attack=!0),e.attackHeld=e.attackHeld||!!c[7]||!!c[6],l(14)&&--e.slotDelta,l(15)&&(e.slotDelta+=1),e.dive=e.dive||!!c[4],l(5)&&(e.zoom+=1,e.zoomWrap=!0),e.jumpHeld=e.jumpHeld||!!c[0],this.padPrev=c}},tf=.6,nf=1.4;function rf(e){return e<.1?`bota`:e<.22?`pez-dorado`:`pez`}var af=class{rnd;state=`nada`;timer=0;x=0;z=0;constructor(e=Math.random){this.rnd=e}get active(){return this.state!==`nada`}cast(e,t){this.state=`lanzando`,this.timer=tf,this.x=e,this.z=t}cancel(){this.state=`nada`}pull(){return this.state===`pica`?(this.state=`nada`,{kind:`pesca`,item:rf(this.rnd())}):(this.state=`nada`,{kind:`pronto`})}update(e){return this.state===`nada`||(this.timer-=e,this.timer>0)?null:this.state===`lanzando`?(this.state=`esperando`,this.timer=3+this.rnd()*4,null):this.state===`esperando`?(this.state=`pica`,this.timer=nf,{kind:`pica`}):(this.state=`nada`,{kind:`escapa`})}},of=.55,sf=3.2,cf=.4,lf=8.5,uf=.35,df=3.5,ff=-.25,pf=1.15;function mf(e,t,n,r){return t+(e-t)*Math.exp(-n*r)}function hf(e,t,n){let r=(t-e+Math.PI)%(Math.PI*2)-Math.PI;return r<-Math.PI&&(r+=Math.PI*2),e+r*n}var gf=class{x;y;z;vx=0;vy=0;vz=0;yaw;onGround=!0;flyTime=0;camYaw;camPitch=.32;camDist=6;speedMul=1;swimMul=1;swimming=!1;bodyHeight=1.8;blockedByBound=!1;impact=0;constructor(e,t,n,r=Math.PI){this.x=e,this.z=t;let i=n.heightAt(e,t);this.y=i<-1.3?0:i,this.yaw=r,this.camYaw=r+Math.PI}get flying(){return this.flyTime>0}get diving(){return this.swimming&&this.y<-.6}takeImpact(){let e=this.impact;return this.impact=0,e}get speed01(){return Math.min(1,Math.hypot(this.vx,this.vz)/6)}teleport(e,t,n,r=this.yaw){this.x=e,this.z=t;let i=n.heightAt(e,t);this.y=i<-1.3?0:i,this.vx=this.vy=this.vz=0,this.yaw=r,this.camYaw=r+Math.PI,this.flyTime=0,this.swimming=!1,this.impact=0}steerCamera(e,t=10){this.camYaw-=e.lookX,this.camPitch=Math.min(pf,Math.max(ff,this.camPitch+e.lookY)),this.camDist=e.zoomWrap&&e.zoom>0&&this.camDist>=t-.01?3:Math.min(t,Math.max(3,this.camDist+e.zoom*.7))}wish(e){let t=-Math.sin(this.camYaw),n=-Math.cos(this.camYaw),r=Math.cos(this.camYaw),i=-Math.sin(this.camYaw),a=r*e.moveX+t*e.moveY,o=i*e.moveX+n*e.moveY;return{x:a,z:o,mag:Math.min(1,Math.hypot(a,o))}}update(e,t,n){this.steerCamera(t);let r=-Math.sin(this.camYaw),i=-Math.cos(this.camYaw),a=Math.cos(this.camYaw),o=-Math.sin(this.camYaw),s=a*t.moveX+r*t.moveY,c=o*t.moveX+i*t.moveY,l=this.swimming?6*of*this.swimMul:6*this.speedMul*(this.flying?1.25:1);this.vx=mf(this.vx,s*l,12,e),this.vz=mf(this.vz,c*l,12,e);let u=n.heightAt(this.x,this.z);if(this.flying){this.flyTime=Math.max(0,this.flyTime-e);let n=u+df+(t.jumpHeld?1.5:0);this.vy=(n-this.y)*3,this.onGround=!1}else this.swimming?(t.dive?this.vy=mf(this.vy,-3.2,6,e):this.y<-.25?(this.vy=mf(this.vy,t.jumpHeld?sf:cf,t.jumpHeld?6:2.5,e),this.y+this.vy*e>0&&(this.vy=(0-this.y)/e)):this.vy=(0-this.y)*6,this.onGround=!1):(this.vy-=24*e,t.jump&&this.onGround&&(this.vy=lf,this.onGround=!1));this.blockedByBound=!1;let d=this.x+this.vx*e;n.walkable(d,this.z)?this.x=d:(this.vx=0,this.blockedByBound=!0);let f=this.z+this.vz*e;n.walkable(this.x,f)?this.z=f:(this.vz=0,this.blockedByBound=!0);for(let e of n.colliders){if(!e.enabled)continue;let t=this.x-e.x,r=this.z-e.z,i=e.r+uf,a=t*t+r*r;if(a<i*i&&this.y<n.heightAt(e.x,e.z)+2.5){let o=Math.sqrt(a)||1e-4,s=e.x+t/o*i,c=e.z+r/o*i;n.walkable(s,c)&&(this.x=s,this.z=c)}}let p=this.vy;this.y+=this.vy*e;let m=n.heightAt(this.x,this.z),h=m<-1.3;!this.flying&&h&&this.y<=.05?(this.swimming||(this.vy=0),this.swimming=!0,this.onGround=!1,this.y<m+.35&&(this.y=m+.35,this.vy=Math.max(0,this.vy))):(this.swimming=!1,this.y<=m?(!this.onGround&&p<0&&(this.impact=-p),this.y=m,this.vy=0,this.onGround=!0):this.flying||(this.onGround=this.y-m<.05&&this.vy<=0)),Math.hypot(this.vx,this.vz)>.3&&(this.yaw=hf(this.yaw,Math.atan2(this.vx,this.vz),1-Math.exp(-12*e)))}},_f=class{scene;cooldown=0;active=0;shake=0;ring;ringMat;ringTime=-1;heal;healMat;healTime=-1;chunks=[];chunkGeo=new ya(.3);chunkMat=new ja({color:`#8d6fd1`,emissive:`#3b1d80`,emissiveIntensity:.5,flatShading:!0});constructor(e){this.scene=e,this.ringMat=new fi({color:`#ffb74d`,transparent:!0,opacity:0,side:2,depthWrite:!1,blending:2}),this.ring=new V(new va(.8,1,48).rotateX(-Math.PI/2),this.ringMat),this.ring.visible=!1,e.add(this.ring);let t=new Float32Array(210);for(let e=0;e<70;e++){let n=Math.random()*Math.PI*2,r=.4+Math.random()*.6;t.set([Math.cos(n)*r,Math.random()*2,Math.sin(n)*r],e*3)}let n=new Pr;n.setAttribute(`position`,new yr(t,3)),this.healMat=new Qi({color:`#7dff9a`,size:.18,transparent:!0,opacity:0,depthWrite:!1,blending:2}),this.heal=new ra(n,this.healMat),this.heal.visible=!1,e.add(this.heal)}get ready(){return this.cooldown<=0&&this.active<=0}readiness(e){let t=tu[e];return this.active>0?0:1-Math.max(0,this.cooldown)/t.cooldown}reset(e,t){this.cooldown=0,this.active=0,t.flyTime=0,e.setOpacity(1)}use(e,t,n,r){if(!this.ready)return null;let i=tu[e];switch(this.active=i.duration,i.duration===0&&(this.cooldown=i.cooldown),e){case`destructor`:{this.ringTime=0,this.ring.visible=!0,this.ring.position.set(t.x,t.y+.1,t.z),this.shake=.4;let e=0;for(let n of r)n.broken||Math.hypot(n.collider.x-t.x,n.collider.z-t.z)<6&&(this.smash(n),e++);return e?`¡Golpe Sísmico! Has roto ${e===1?`una roca`:`${e} rocas`}`:`¡Golpe Sísmico!`}case`curador`:return this.healTime=0,this.heal.visible=!0,`¡Aura Sanadora!`;case`asesino`:return n.setOpacity(.22),`¡Invisible!`;case`alien`:return t.flyTime=i.duration,`¡Vuelo Alien! (mantén saltar para subir más)`}}smash(e){e.broken=!0,e.timer=20,e.mesh.visible=!1,e.collider.enabled=!1;for(let t=0;t<9;t++){let t=new V(this.chunkGeo,this.chunkMat);t.position.copy(e.mesh.position),t.castShadow=!0,this.scene.add(t);let n=Math.random()*Math.PI*2,r=2+Math.random()*4;this.chunks.push({mesh:t,vx:Math.cos(n)*r,vy:4+Math.random()*5,vz:Math.sin(n)*r,life:1.6})}}update(e,t,n,r,i){let a=tu[t];if(this.active>0?(this.active-=e,this.active<=0&&(this.active=0,this.cooldown=a.cooldown,t===`asesino`&&r.setOpacity(1))):this.cooldown>0&&(this.cooldown-=e),this.shake=Math.max(0,this.shake-e),this.ringTime>=0){this.ringTime+=e;let t=this.ringTime/.7;this.ring.scale.setScalar(1+t*7),this.ringMat.opacity=Math.max(0,1-t),t>=1&&(this.ringTime=-1,this.ring.visible=!1)}if(this.healTime>=0){this.healTime+=e;let t=this.healTime/2;this.heal.position.set(n.x,n.y+t*.8,n.z),this.heal.rotation.y+=e*4,this.healMat.opacity=Math.sin(Math.min(1,t)*Math.PI),t>=1&&(this.healTime=-1,this.heal.visible=!1)}for(let t=this.chunks.length-1;t>=0;t--){let n=this.chunks[t];n.vy-=20*e,n.mesh.position.x+=n.vx*e,n.mesh.position.y+=n.vy*e,n.mesh.position.z+=n.vz*e;let r=i(n.mesh.position.x,n.mesh.position.z);n.mesh.position.y<r+.1&&(n.mesh.position.y=r+.1,n.vy*=-.3,n.vx*=.6,n.vz*=.6),n.mesh.rotation.x+=e*6,n.mesh.rotation.z+=e*4,n.life-=e,n.mesh.scale.setScalar(Math.max(.01,Math.min(1,n.life*2))),n.life<=0&&(this.scene.remove(n.mesh),this.chunks.splice(t,1))}}},vf=1.2,yf=1.6,bf=1.15,xf=class{classId;maxHealth;health;hunger=100;thirst=100;oxygen=100;breath=1;lastCause=null;warned={hambre:!1,sed:!1,aire:!1};constructor(e,t){this.classId=e,this.maxHealth=tu[e].maxHealth,this.health=this.maxHealth,t&&this.restore(t)}get dead(){return this.health<=0}restore(e){let t=(e,t)=>Number.isFinite(e)?Math.min(t,Math.max(0,e)):t;this.health=t(e.health,this.maxHealth),this.hunger=t(e.hunger,100),this.thirst=t(e.thirst,100),this.warned={hambre:this.hunger<25,sed:this.thirst<25,aire:!1}}snapshot(){return{health:this.health,hunger:this.hunger,thirst:this.thirst}}update(e,t){let n={warning:null,damage:0};if(this.dead)return n;let r=0;t.underwater?(this.oxygen=Math.max(0,this.oxygen-100/(30*this.breath)*e),this.oxygen<=0&&(r=10*e),this.oxygen<30&&!this.warned.aire&&(this.warned.aire=!0,n.warning=`aire`)):(this.oxygen=Math.min(100,this.oxygen+45*e),this.oxygen>=30&&(this.warned.aire=!1));let i=tu[this.classId],a=t.swimming?yf:t.moving?bf:1;this.hunger=Math.max(0,this.hunger-100/1080*i.needs*a*e),this.thirst=Math.max(0,this.thirst-100/720*i.needs*a*e);let o=0;return this.hunger<=0&&(o+=vf*e,this.lastCause=`hambre`),this.thirst<=0&&(o+=vf*e,this.lastCause=`sed`),r>0&&(o+=r,this.lastCause=`ahogado`),o>0?(this.health=Math.max(0,this.health-o),n.damage=o):this.hunger>50&&this.thirst>50?this.health=Math.min(this.maxHealth,this.health+i.regen*e):this.classId===`curador`&&(this.health=Math.min(this.maxHealth,this.health+i.regen*.5*e)),n.warning||(this.hunger<25&&!this.warned.hambre?(this.warned.hambre=!0,n.warning=`hambre`):this.thirst<25&&!this.warned.sed&&(this.warned.sed=!0,n.warning=`sed`)),this.hunger>=25&&(this.warned.hambre=!1),this.thirst>=25&&(this.warned.sed=!1),n}damage(e,t){e<=0||this.dead||(this.health=Math.max(0,this.health-e),this.lastCause=t)}breathe(){this.oxygen=100,this.warned.aire=!1}heal(e){this.dead||(this.health=Math.min(this.maxHealth,this.health+e))}consume(e){this.dead||(this.hunger=Math.min(100,Math.max(0,this.hunger+e.hunger)),this.thirst=Math.min(100,Math.max(0,this.thirst+e.thirst)),e.health&&this.heal(e.health))}};function Sf(e){return e>16?(e-16)*4:0}var Cf=[{id:`tu`,label:`Tú`,icon:`🙂`,sections:[{kind:`name`},{kind:`chips`,key:`gender`,label:`Chico o chica`,options:bu},{kind:`colors`,key:`skin`,label:`Color de piel`,colors:Mu},{kind:`height`,label:`Altura`},{kind:`chips`,key:`build`,label:`Cuerpo`,options:xu}]},{id:`pelo`,label:`Pelo`,icon:`💇`,sections:[{kind:`chips`,key:`hairStyle`,label:`Peinado`,options:Su},{kind:`colors`,key:`hairColor`,label:`Color de pelo`,colors:Nu}]},{id:`cara`,label:`Cara`,icon:`👀`,sections:[{kind:`chips`,key:`eyeShape`,label:`Ojos`,options:Cu},{kind:`colors`,key:`eyeColor`,label:`Color de ojos`,colors:Pu},{kind:`chips`,key:`facePaint`,label:`Pintura de cara`,options:ju},{kind:`colors`,key:`facePaintColor`,label:`Color de la pintura`,colors:Iu},{kind:`chips`,key:`scar`,label:`Cicatriz`,options:Au}]},{id:`ropa`,label:`Ropa`,icon:`👕`,sections:[{kind:`chips`,key:`shirtStyle`,label:`Camiseta`,options:wu},{kind:`colors`,key:`shirtColor`,label:`Color de la camiseta`,colors:Fu},{kind:`chips`,key:`pantsStyle`,label:`Pantalón`,options:Tu},{kind:`colors`,key:`pantsColor`,label:`Color del pantalón`,colors:Fu},{kind:`chips`,key:`shoesStyle`,label:`Zapatos`,options:Eu},{kind:`colors`,key:`shoesColor`,label:`Color de los zapatos`,colors:Fu}]},{id:`extras`,label:`Extras`,icon:`🎩`,sections:[{kind:`chips`,key:`hat`,label:`Sombrero`,options:Du},{kind:`colors`,key:`hatColor`,label:`Color del sombrero`,colors:Fu},{kind:`chips`,key:`glasses`,label:`Gafas`,options:Ou},{kind:`chips`,key:`tattoo`,label:`Tatuaje (brazo)`,options:ku}]}];function wf(e,t,n){let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.textContent=n),r}var Tf=class{ev;root=wf(`div`,`creator hidden`);body=wf(`div`,`creator-body`);tabBar=wf(`div`,`tabs`);tab=`tu`;character;nameInput=null;playBtn=wf(`button`,`btn big primary`,`¡A jugar!`);hint=wf(`div`,`creator-hint`);lockClass=!1;titleEl=wf(`h2`,``,`Espejo Mágico`);subEl=wf(`p`,``,`Diseña tu aventurero y elige tu clase`);constructor(e,t,n){this.ev=n,this.character=structuredClone(t);let r=wf(`div`,`creator-header`);r.append(this.titleEl,this.subEl);let i=wf(`div`,`creator-footer`),a=wf(`button`,`btn`,`🎲 Al azar`);a.addEventListener(`click`,()=>{this.character.look=Vu(),this.renderBody(),this.emit()}),this.playBtn.addEventListener(`click`,()=>this.finish()),i.append(a,this.playBtn),this.root.append(r,this.tabBar,this.body,this.hint,i),e.append(this.root),this.renderTabs(),this.renderBody(),this.updatePlay()}get visible(){return!this.root.classList.contains(`hidden`)}open(e,t={}){this.character=structuredClone(e),this.tab=`tu`,this.lockClass=!!t.lockClass,this.titleEl.textContent=this.lockClass?`Cambiar de aspecto`:`Espejo Mágico`,this.subEl.textContent=this.lockClass?`La clase no se puede cambiar en mitad de la partida`:`Diseña tu aventurero y elige tu clase`,this.playBtn.textContent=this.lockClass?`¡Listo!`:`¡A jugar!`,this.root.classList.remove(`hidden`),this.renderTabs(),this.renderBody(),this.updatePlay()}close(){this.root.classList.add(`hidden`)}panelRect(){return this.root.getBoundingClientRect()}emit(){this.updatePlay(),this.ev.onChange(structuredClone(this.character))}finish(){let e=zd(this.character.name);e?(this.character.name=e,this.ev.onDone(structuredClone(this.character))):(this.tab=`tu`,this.renderTabs(),this.renderBody(),this.nameInput?.focus(),this.hint.textContent=`✏️ Escribe un nombre para tu personaje`)}updatePlay(){let e=zd(this.character.name).length>0;this.playBtn.classList.toggle(`disabled`,!e),this.hint.textContent=e?``:`✏️ Falta el nombre (pestaña «Tú»)`}renderTabs(){this.tabBar.replaceChildren();let e=this.lockClass?Cf:[...Cf,{id:`clase`,label:`Clase`,icon:`⚔️`,sections:[]}];for(let t of e){let e=wf(`button`,`tab${t.id===this.tab?` active`:``}`);e.append(wf(`span`,`tab-icon`,t.icon),wf(`span`,`tab-label`,t.label)),e.addEventListener(`click`,()=>{this.tab=t.id,this.renderTabs(),this.renderBody()}),this.tabBar.append(e)}}renderBody(){if(this.body.replaceChildren(),this.body.scrollTop=0,this.tab===`clase`){this.renderClasses();return}let e=Cf.find(e=>e.id===this.tab);for(let t of e.sections)this.body.append(this.section(t))}section(e){let t=wf(`div`,`section`),n=this.character.look;if(e.kind===`name`){t.append(wf(`label`,`section-label`,`Nombre`));let e=wf(`input`,`name-input`);return e.type=`text`,e.maxLength=16,e.placeholder=`Escribe tu nombre`,e.autocomplete=`off`,e.value=this.character.name,e.addEventListener(`input`,()=>{this.character.name=e.value,this.emit()}),e.addEventListener(`keydown`,t=>{t.key===`Enter`&&e.blur()}),this.nameInput=e,t.append(e),t}if(t.append(wf(`div`,`section-label`,e.label)),e.kind===`height`){let e=wf(`div`,`height-row`),n=wf(`input`,`range`);n.type=`range`,n.min=String(Lu),n.max=String(Ru),n.step=`0.01`,n.value=String(this.character.look.height);let r=wf(`span`,`height-value`),i=()=>{r.textContent=`${Math.round(this.character.look.height*170)} cm`};return i(),n.addEventListener(`input`,()=>{this.character.look.height=Number(n.value),i(),this.emit()}),e.append(wf(`span`,``,`🐜`),n,wf(`span`,``,`🦒`),r),t.append(e),t}let r=wf(`div`,e.kind===`chips`?`chips`:`swatches`);if(e.kind===`chips`)for(let t of e.options){let i=wf(`button`,`chip${n[e.key]===t.id?` active`:``}`,t.label);i.addEventListener(`click`,()=>{n[e.key]=t.id,r.querySelectorAll(`.chip`).forEach(e=>e.classList.remove(`active`)),i.classList.add(`active`),this.emit()}),r.append(i)}else for(let t of e.colors){let i=wf(`button`,`swatch${n[e.key]===t?` active`:``}`);i.style.background=t,i.setAttribute(`aria-label`,t),i.addEventListener(`click`,()=>{n[e.key]=t,r.querySelectorAll(`.swatch`).forEach(e=>e.classList.remove(`active`)),i.classList.add(`active`),this.emit()}),r.append(i)}return t.append(r),t}renderClasses(){let e=wf(`div`,`class-grid`);for(let t of nu){let n=wf(`button`,`class-card${this.character.classId===t.id?` active`:``}`);n.style.setProperty(`--class-color`,t.color);let r=wf(`div`,`class-top`);r.append(wf(`span`,`class-emoji`,t.emoji),wf(`span`,`class-name`,t.name));let i=wf(`div`,`class-stars`);for(let[e,n]of[[`Vida`,t.stars.vida],[`Velocidad`,t.stars.velocidad],[`Daño`,t.stars.dano]]){let t=wf(`div`,`star-row`);t.append(wf(`span`,``,e),wf(`span`,`stars`,`★`.repeat(n)+`☆`.repeat(5-n))),i.append(t)}let a=wf(`div`,`class-line`);a.append(wf(`b`,``,`Empieza con: `),document.createTextNode(t.weapon));let o=wf(`div`,`class-line`);o.append(wf(`b`,``,`Poder: ${t.powerName}. `),document.createTextNode(t.powerDesc));let s=wf(`ul`,`class-pros`);for(let e of t.pros)s.append(wf(`li`,`pro`,e));for(let e of t.cons)s.append(wf(`li`,`con`,e));n.append(r,i,a,o,s),n.addEventListener(`click`,()=>{this.character.classId=t.id,e.querySelectorAll(`.class-card`).forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`),this.emit()}),e.append(n)}this.body.append(e)}};function q(e,t,n){let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.textContent=n),r}var Ef=class{ev;root=q(`div`,`hud hidden`);joyBase=q(`div`,`joy-base`);joyKnob=q(`div`,`joy-knob`);badge=q(`div`,`badge`);toastEl=q(`div`,`toast`);toastTimer=0;prompt=q(`div`,`prompt`);powerBtn=q(`button`,`power-btn`);powerIcon=q(`span`,`power-icon`);powerKey=q(`span`,`power-key`,`Q`);actionBtn=q(`button`,`touch-btn action-btn`,`✋`);jumpBtn=q(`button`,`touch-btn jump-btn`,`⤒`);attackBtn=q(`button`,`touch-btn attack-btn`,`⚔️`);diveBtn=q(`button`,`touch-btn dive-btn`,`🤿`);water=q(`div`,`underwater hidden`);energy=q(`div`,`energy hidden`);energyFill=q(`div`,`energy-fill`);help=q(`div`,`help`);touch=q(`div`,`touch`);helpTimer=0;vitals=q(`div`,`vitals hidden`);bars;clock=q(`div`,`clock hidden`);flashEl=q(`div`,`damage-flash`);death=q(`div`,`death hidden`);biteEl=q(`div`,`bite hidden`);fadeEl=q(`div`,`fade`);helpShownOnce=!1;mapBtn=q(`button`,`btn small map-btn`,`🗺️`);compass=q(`div`,`compass hidden`);compassStrip=q(`div`,`compass-strip`);compassMarks=[];homeMark=q(`span`,`compass-home`,`✈️`);boatInfo=q(`div`,`boat-info hidden`);bossEl=q(`div`,`boss hidden`);bossName=q(`div`,`boss-name`);bossFill=q(`div`,`boss-fill`);piecesEl=q(`div`,`pieces hidden`);playersEl=q(`div`,`players hidden`);musicBtn=q(`button`,`btn small music-btn`,`🎵`);constructor(e,t){this.ev=t;let n=q(`div`,`top-right`),r=q(`button`,`btn small`,`👕 Personaje`);r.addEventListener(`click`,()=>t.onEditCharacter());let i=q(`button`,`btn small help-btn`,`?`);i.title=`Controles`,i.addEventListener(`click`,()=>{this.help.classList.toggle(`hidden`),this.helpTimer=0}),this.mapBtn.title=`Mapa (M)`,this.mapBtn.addEventListener(`click`,()=>t.onPress(`map`)),this.musicBtn.title=`Música`,this.musicBtn.addEventListener(`click`,e=>{e.stopPropagation(),t.onMusic?.()}),n.append(this.musicBtn,this.mapBtn,i,r);let a=q(`div`,`boss-track`);a.append(this.bossFill),this.bossEl.append(this.bossName,a);let o=[`N`,`NE`,`E`,`SE`,`S`,`SO`,`O`,`NO`];for(let e=0;e<24;e++){let t=e/24*Math.PI*2,n=e%3==0,r=q(`span`,n?`compass-mark major${e===0?` north`:``}`:`compass-mark`,n?o[e/3]:`·`);this.compassStrip.append(r),this.compassMarks.push({el:r,b:t})}if(this.compassStrip.append(this.homeMark),this.compass.append(this.compassStrip,q(`div`,`compass-needle`)),document.fullscreenEnabled){let e=q(`button`,`btn small`,`⛶`);e.title=`Pantalla completa`,e.addEventListener(`click`,()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})}),n.append(e)}this.powerBtn.append(this.powerIcon,this.powerKey),this.bindTouch(this.powerBtn,`power`),this.bindTouch(this.actionBtn,`action`),this.bindTouch(this.jumpBtn,`jump`),this.bindTouch(this.attackBtn,`attack`),this.bindTouch(this.diveBtn,`dive`),this.diveBtn.title=`Bucear (mantén pulsado)`,this.joyBase.append(this.joyKnob),this.touch.append(this.joyBase,this.jumpBtn,this.actionBtn,this.attackBtn,this.diveBtn),this.energy.append(q(`span`,`energy-icon`,`⚡`),q(`div`,`energy-track`)),this.energy.lastElementChild.append(this.energyFill),this.energy.title=`Energía de la pistola de rayos`,this.help.innerHTML=`
      <b>Controles</b>
      <div><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> moverse</div>
      <div><kbd>Ratón</kbd> mirar (haz clic en el juego)</div>
      <div><kbd>Espacio</kbd> saltar · <kbd>Q</kbd> poder · <kbd>E</kbd> coger / hacer · <kbd>Clic</kbd> o <kbd>R</kbd> atacar</div>
      <div><kbd>1</kbd>…<kbd>0</kbd> elegir hueco · <kbd>F</kbd> usar · <kbd>G</kbd> soltar · <kbd>C</kbd> fabricar</div>
      <div><kbd>M</kbd> mapa · <kbd>E</kbd> junto a un barco: subir y bajar · <kbd>E</kbd> junto a un amigo ❗: hablar y comprar</div>
      <div>En el agua: <kbd>Shift</kbd> bucear hacia abajo · <kbd>Espacio</kbd> subir</div>
      <div><kbd>Rueda</kbd> acercar o alejar · <kbd>Esc</kbd> soltar el ratón</div>
      <div>👑 Vence a los jefes de las islas: cada uno da un trozo del mapa 🗺️. ¡Con 5 llegas a la Isla Misteriosa! · 🎵 música sí/no</div>
      <div class="help-pad">🎮 Mando: stick izq. moverse, der. mirar, A saltar, Y poder, X coger, B usar, RT atacar, LB bucear, cruceta ◀▶ hueco, ▼ soltar, ▲ fabricar, Start mapa</div>`;let s=q(`button`,`help-close`,`×`);s.addEventListener(`click`,()=>this.help.classList.add(`hidden`)),this.help.append(s);let c=(e,t,n)=>{let r=q(`div`,`vital vital-${e}`);r.title=n;let i=q(`div`,`vital-track`),a=q(`div`,`vital-fill`),o=q(`span`,`vital-num`);return i.append(a,o),r.append(q(`span`,`vital-icon`,t),i),this.vitals.append(r),{row:r,fill:a,num:o}};this.bars={vida:c(`vida`,`❤️`,`Vida`),hambre:c(`hambre`,`🍗`,`Hambre`),sed:c(`sed`,`💧`,`Sed`),aire:c(`aire`,`🫧`,`Aire (para bucear)`)},this.bars.aire.row.classList.add(`hidden`),this.root.append(this.water,this.flashEl,this.badge,this.vitals,this.clock,this.compass,this.boatInfo,this.piecesEl,this.playersEl,this.bossEl,n,this.prompt,this.toastEl,this.powerBtn,this.energy,this.help,this.touch,this.biteEl,this.fadeEl,this.death),e.append(this.root)}bindTouch(e,t){if(e.addEventListener(`pointerdown`,e=>{e.preventDefault(),e.stopPropagation(),this.ev.onPress(t)}),t===`jump`||t===`attack`||t===`dive`){let n=()=>this.ev.onRelease(t);e.addEventListener(`pointerup`,n),e.addEventListener(`pointercancel`,n),e.addEventListener(`pointerleave`,n)}}show(e){let t=tu[e.classId];this.badge.replaceChildren(q(`span`,`badge-emoji`,t.emoji),q(`span`,`badge-name`,e.name),q(`span`,`badge-class`,t.name)),this.badge.style.setProperty(`--class-color`,t.color),this.powerIcon.textContent=t.emoji,this.powerBtn.title=t.powerName,this.powerBtn.style.setProperty(`--class-color`,t.color),this.root.classList.remove(`hidden`),this.root.dataset.device===`teclado`&&!this.helpShownOnce?(this.helpShownOnce=!0,this.help.classList.remove(`hidden`),this.helpTimer=15):this.help.classList.add(`hidden`)}hide(){this.root.classList.add(`hidden`)}showSurvival(e){this.vitals.classList.toggle(`hidden`,!e),this.clock.classList.toggle(`hidden`,!e),this.mapBtn.classList.toggle(`hidden`,!e),e||(this.setCompass(null),this.setBoat(null)),this.root.classList.toggle(`survival`,e)}setVitals(e,t,n,r){let i=(e,t,n)=>{let r=Math.max(0,Math.min(1,t/n));e.fill.style.width=`${r*100}%`,e.num.textContent=String(Math.ceil(t)),e.row.classList.toggle(`low`,r<.25)};i(this.bars.vida,e,t),i(this.bars.hambre,n,100),i(this.bars.sed,r,100)}setOxygen(e){let t=this.bars.aire;if(t.row.classList.toggle(`hidden`,e===null),e===null)return;let n=Math.max(0,Math.min(1,e/100));t.fill.style.width=`${n*100}%`,t.num.textContent=String(Math.ceil(e)),t.row.classList.toggle(`low`,n<.3)}setWater(e,t){this.diveBtn.classList.toggle(`show`,e),this.water.classList.toggle(`hidden`,!t)}setClock(e,t){this.clock.textContent=`${t?`🌙`:`☀️`} ${e}`,this.clock.classList.toggle(`night`,t)}bite(e,t){let n=t===`mando`?`X`:t===`tactil`?`✋`:`E`;this.biteEl.textContent=`🎣 ¡Pica! ¡Pulsa ${n}!`,this.biteEl.classList.toggle(`hidden`,!e)}fade(e,t){this.fadeEl.textContent=e,this.fadeEl.classList.add(`on`),setTimeout(()=>{t(),setTimeout(()=>this.fadeEl.classList.remove(`on`),900)},1300)}flash(){this.flashEl.classList.remove(`on`),this.flashEl.offsetWidth,this.flashEl.classList.add(`on`)}showDeath(e,t,n){this.death.replaceChildren();let r=q(`div`,`death-card`),i=q(`button`,`btn big primary`,`🔄 Volver a empezar`);i.addEventListener(`click`,()=>{this.death.classList.add(`hidden`),n()}),r.append(q(`div`,`death-icon`,`💀`),q(`h2`,``,e),q(`p`,``,t),i),this.death.append(r),this.death.classList.remove(`hidden`)}setDevice(e){this.root.dataset.device=e,this.powerKey.textContent=e===`mando`?`Y`:e===`tactil`?``:`Q`,e!==`teclado`&&this.help.classList.add(`hidden`)}setCompass(e,t=null){if(this.compass.classList.toggle(`hidden`,e===null),e===null)return;let n=e=>Math.atan2(Math.sin(e),Math.cos(e));for(let t of this.compassMarks){let r=n(t.b-e);t.el.style.transform=`translateX(${r*70}px)`,t.el.style.opacity=String(Math.max(0,1-Math.abs(r)/1.7))}if(this.homeMark.classList.toggle(`hidden`,t===null),t!==null){let r=Math.max(-1.75,Math.min(1.75,n(t-e)));this.homeMark.style.transform=`translateX(${r*70}px)`}}setBoss(e,t=1){this.bossEl.classList.toggle(`hidden`,!e),e&&(this.bossName.textContent=`👑 ${e}`,this.bossFill.style.width=`${Math.max(0,Math.min(1,t))*100}%`)}setPieces(e,t=5){this.piecesEl.classList.toggle(`hidden`,e===null||e<=0),e&&(this.piecesEl.textContent=e>=t?`🗺️ ¡Mapa completo! 💀`:`🗺️ Trozos del mapa: ${e}/${t}`)}setPlayers(e,t=``){if(this.playersEl.classList.toggle(`hidden`,!e),!e)return;let n=e.length?`👫 ${e.join(`, `)}`:`👫 Esperando amigos…`;this.playersEl.textContent=t?`🔑 ${t} · ${n}`:n,this.playersEl.title=t?`El código de tu partida: dáselo solo a tus amigos`:``}setMusic(e){this.musicBtn.textContent=e?`🎵`:`🔇`,this.musicBtn.title=e?`Quitar la música`:`Poner la música`}showWin(e,t,n){this.death.replaceChildren();let r=q(`div`,`death-card`),i=q(`button`,`btn big primary`,`🌴 Seguir jugando`);i.addEventListener(`click`,()=>{this.death.classList.add(`hidden`),this.death.classList.remove(`win`),n()}),r.append(q(`div`,`death-icon`,`🏆`),q(`h2`,``,e),q(`p`,``,t),i),this.death.append(r),this.death.classList.add(`win`),this.death.classList.remove(`hidden`)}setBoat(e){this.boatInfo.classList.toggle(`hidden`,!e),e&&(this.boatInfo.textContent=e)}setEnergy(e){this.energy.classList.toggle(`hidden`,e===null),e!==null&&(this.energyFill.style.width=`${Math.max(0,Math.min(1,e))*100}%`,this.energy.classList.toggle(`low`,e<.15))}setPower(e){this.powerBtn.style.setProperty(`--ready`,String(Math.max(0,Math.min(1,e)))),this.powerBtn.classList.toggle(`ready`,e>=1)}setPrompt(e,t){if(!e){this.prompt.classList.remove(`show`),this.actionBtn.classList.remove(`show`);return}let n=t===`mando`?`X`:t===`tactil`?`✋`:`E`;this.prompt.textContent=`${n}  ${e}`,this.prompt.classList.add(`show`),this.actionBtn.classList.add(`show`)}toast(e,t=2.5){this.toastEl.textContent=e,this.toastEl.classList.add(`show`),this.toastTimer=t}update(e){this.helpTimer>0&&(this.helpTimer-=e,this.helpTimer<=0&&this.help.classList.add(`hidden`)),this.toastTimer>0&&(this.toastTimer-=e,this.toastTimer<=0&&this.toastEl.classList.remove(`show`))}};function Df(e,t,n){let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.textContent=n),r}var Of=550,kf=class{inv;ev;root=Df(`div`,`inv hidden`);bar=Df(`div`,`inv-bar`);slots=[];label=Df(`div`,`inv-label`);labelTimer=0;craftBtn=Df(`button`,`inv-craft`);panel=Df(`div`,`craft hidden`);list=Df(`div`,`craft-list`);focus=0;device=`teclado`;lastSelected=-1;constructor(e,t,n){this.inv=t,this.ev=n;for(let e=0;e<10;e++){let t=Df(`button`,`inv-slot`),n=Df(`span`,`inv-icon`),r=Df(`span`,`inv-num`);t.append(Df(`span`,`inv-key`,String((e+1)%10)),n,r),this.bindSlot(t,e),this.bar.append(t),this.slots.push({box:t,icon:n,num:r})}this.craftBtn.append(Df(`span`,`inv-icon`,`🔨`),Df(`span`,`inv-key craft-key`,`C`)),this.craftBtn.title=`Fabricar`,this.craftBtn.addEventListener(`click`,e=>{e.stopPropagation(),this.toggleCraft()}),this.bar.append(this.craftBtn);let r=Df(`div`,`craft-head`),i=Df(`button`,`help-close`,`×`);i.addEventListener(`click`,()=>this.toggleCraft(!1)),r.append(Df(`b`,``,`🔨 Fabricar`),i),this.panel.append(r,this.list),this.root.append(this.label,this.bar),e.append(this.root,this.panel),t.onChange=()=>this.render(),this.render()}bindSlot(e,t){let n=0,r=!1;e.addEventListener(`pointerdown`,e=>{e.preventDefault(),e.stopPropagation(),r=!1,n=window.setTimeout(()=>{r=!0,this.inv.slots[t]&&this.ev.onDrop(t)},Of)});let i=(e,i)=>{e.stopPropagation(),clearTimeout(n),i&&!r&&(this.inv.selected===t&&this.inv.slots[t]?this.ev.onUse(t):this.inv.select(t))};e.addEventListener(`pointerup`,e=>i(e,!0)),e.addEventListener(`pointerleave`,e=>i(e,!1)),e.addEventListener(`pointercancel`,e=>i(e,!1)),e.addEventListener(`contextmenu`,e=>e.preventDefault())}show(e){this.root.classList.toggle(`hidden`,!e),e||this.toggleCraft(!1)}get craftOpen(){return!this.panel.classList.contains(`hidden`)}toggleCraft(e=!this.craftOpen){e!==this.craftOpen&&(this.panel.classList.toggle(`hidden`,!e),this.focus=0,this.renderCraft(),this.ev.onCraftPanel(e))}moveFocus(e){this.focus=(this.focus+e+Qu.length)%Qu.length,this.renderCraft()}craftFocused(){this.ev.onCraft(Qu[this.focus])}setDevice(e){this.device=e,this.root.dataset.device=e,this.renderCraft()}flashLabel(e,t=2.5){this.label.textContent=e,this.label.classList.add(`show`),this.labelTimer=t}update(e){this.labelTimer>0&&(this.labelTimer-=e,this.labelTimer<=0&&this.label.classList.remove(`show`))}render(){this.inv.slots.forEach((e,t)=>{let n=this.slots[t];n.box.classList.toggle(`selected`,t===this.inv.selected),n.box.classList.toggle(`empty`,!e),n.icon.textContent=e?K[e.id].icon:``,n.num.textContent=e&&e.n>1?String(e.n):``,n.box.title=e?K[e.id].name:``});let e=Qu.some(e=>this.inv.canCraft(e));if(this.craftBtn.classList.toggle(`can`,e),this.inv.selected!==this.lastSelected){this.lastSelected=this.inv.selected;let e=this.inv.current;e?this.flashLabel(this.describe(e.id)):this.label.classList.remove(`show`)}this.craftOpen&&this.renderCraft()}describe(e){let t=K[e],n=this.device===`teclado`?` · F usar · G soltar`:this.device===`mando`?` · B usar`:` · toca otra vez para usar`;return`${t.icon} ${t.name}: ${t.desc}${n}`}renderCraft(){this.list.replaceChildren();let e=``;Qu.forEach((t,n)=>{t.group!==e&&(e=t.group,this.list.append(Df(`div`,`craft-group`,Zu.find(t=>t.id===e)?.label??``)));let r=this.inv.canCraft(t),i=Df(`div`,`craft-row${r?` can`:``}${this.device===`mando`&&n===this.focus?` focus`:``}`),a=K[t.out],o=Df(`div`,`craft-info`);o.append(Df(`div`,`craft-name`,`${a.icon} ${a.name}`),Df(`div`,`craft-desc`,t.desc));let s=Df(`div`,`craft-needs`);for(let[e,n]of t.needs){let t=this.inv.count(e);s.append(Df(`span`,`need${t>=n?` ok`:``}`,`${K[e].icon} ${Math.min(t,n)}/${n}`))}o.append(s);let c=Df(`button`,`btn small${r?` primary`:` disabled`}`,this.device===`mando`&&n===this.focus?`A Fabricar`:`Fabricar`);c.addEventListener(`click`,()=>this.ev.onCraft(t)),i.append(o,c),this.list.append(i)})}},Af=class{bag;ev;root=Df(`div`,`chest hidden`);rows=[Df(`div`,`chest-row`),Df(`div`,`chest-row`)];chest=null;focus=0;device=`teclado`;constructor(e,t,n){this.bag=t,this.ev=n;let r=Df(`div`,`craft-head`),i=Df(`button`,`help-close`,`×`);i.addEventListener(`click`,()=>this.close()),r.append(Df(`b`,``,`🧰 Baúl`),i),this.root.append(r,Df(`div`,`chest-title`,`Dentro del baúl`),this.rows[0],Df(`div`,`chest-title`,`Tu mochila`),this.rows[1],Df(`div`,`craft-foot`,`Toca un hueco para pasarlo al otro lado`)),e.append(this.root)}get open(){return!!this.chest}show(e){this.chest=e,this.focus=0,this.root.classList.remove(`hidden`),this.render()}close(){this.chest&&(this.chest=null,this.root.classList.add(`hidden`),this.ev.onClose())}setDevice(e){this.device=e,this.chest&&this.render()}moveFocus(e){this.focus=(this.focus+e+20)%20,this.render()}pickFocused(){this.move(this.focus<10?0:1,this.focus%10)}move(e,t){if(!this.chest)return;let[n,r]=e===0?[this.chest,this.bag]:[this.bag,this.chest];od(n,t,r)>0&&this.ev.onMove(),this.render()}render(){this.chest&&[this.chest,this.bag].forEach((e,t)=>{let n=this.rows[t];n.replaceChildren(),e.slots.forEach((e,r)=>{let i=Df(`button`,`inv-slot${e?``:` empty`}${this.device===`mando`&&this.focus===t*10+r?` selected`:``}`);i.append(Df(`span`,`inv-icon`,e?K[e.id].icon:``),Df(`span`,`inv-num`,e&&e.n>1?String(e.n):``)),i.title=e?K[e.id].name:``,i.addEventListener(`click`,()=>this.move(t,r)),n.append(i)})})}};function jf(e,t,n=0){let r=Math.imul(e|0,374761393)^Math.imul(t|0,668265263)^Math.imul(n|0,1442695041);return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967295}function Mf(e,t,n){let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)}function Nf(e,t,n=0){let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=a*a*(3-2*a),c=o*o*(3-2*o),l=jf(r,i,n),u=jf(r+1,i,n),d=jf(r,i+1,n),f=jf(r+1,i+1,n);return l+(u-l)*s+(d-l)*c+(l-u-d+f)*s*c}function Pf(e,t,n=4,r=0){let i=0,a=.5,o=1,s=0;for(let c=0;c<n;c++)i+=a*Nf(e*o,t*o,r+c*17),s+=a,a*=.5,o*=2;return i/s}function Ff(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var If={cangrejo:{name:`Cangrejo`,hp:18,walk:1.1,chase:2.6,damage:4,attackRate:1.2,reach:1.1,sight:3.5,leash:8,radius:.45,respawn:150,enemy:!1},jabali:{name:`Jabalí`,hp:40,walk:1.5,chase:5.2,damage:9,attackRate:1.4,reach:1.5,sight:0,leash:30,radius:.7,respawn:240,enemy:!1},pirata:{name:`Pirata`,hp:55,walk:1.7,chase:4.4,damage:8,attackRate:1.3,reach:1.7,sight:13,leash:28,radius:.45,respawn:420,enemy:!0},capitan:{name:`Capitán pirata`,hp:110,walk:1.5,chase:4.2,damage:13,attackRate:1.5,reach:2.1,sight:14,leash:28,radius:.5,respawn:600,enemy:!0},tiburon:{name:`Tiburón`,hp:50,walk:2.6,chase:3.8,damage:8,attackRate:1.8,reach:1.9,sight:13,leash:45,radius:.8,respawn:300,enemy:!1,sea:!0,swimY:-.75,reachY:1.7,circle:11,retreat:2.5},pulpo:{name:`Pulpo gigante`,hp:80,walk:.6,chase:1.9,damage:9,attackRate:1.4,reach:2.7,sight:6,leash:10,radius:1,respawn:600,enemy:!1,sea:!0,swimY:null,reachY:3.4},zombi:{name:`Zombi`,hp:45,walk:.7,chase:2.3,damage:7,attackRate:1.5,reach:1.6,sight:10,leash:24,radius:.45,respawn:300,enemy:!0},robot:{name:`Robot malo`,hp:70,walk:1.2,chase:3.4,damage:10,attackRate:1.3,reach:1.8,sight:12,leash:26,radius:.55,respawn:420,enemy:!0},lobo:{name:`Lobo`,hp:35,walk:1.6,chase:5,damage:7,attackRate:1.2,reach:1.4,sight:9,leash:24,radius:.6,respawn:240,enemy:!1},golem:{name:`Gólem de lava`,hp:300,walk:1,chase:3,damage:14,attackRate:1.8,reach:2.9,sight:14,leash:22,radius:1.2,respawn:3600,enemy:!0,boss:!0},yeti:{name:`Yeti gigante`,hp:260,walk:1.4,chase:4,damage:13,attackRate:1.5,reach:2.7,sight:15,leash:24,radius:1.1,respawn:3600,enemy:!0,boss:!0},escorpion:{name:`Escorpión gigante`,hp:240,walk:1.5,chase:4.2,damage:12,attackRate:1.3,reach:2.9,sight:12,leash:22,radius:1.3,respawn:3600,enemy:!0,boss:!0},reyzombi:{name:`Rey de los zombis`,hp:280,walk:.8,chase:2.8,damage:14,attackRate:1.6,reach:2.5,sight:14,leash:22,radius:.9,respawn:3600,enemy:!0,boss:!0},robotron:{name:`Robot gigante`,hp:320,walk:1.2,chase:3.4,damage:15,attackRate:1.6,reach:2.9,sight:16,leash:24,radius:1.2,respawn:3600,enemy:!0,boss:!0},calavera:{name:`Capitán Calavera`,hp:280,walk:1.2,chase:3.8,damage:14,attackRate:1.5,reach:2.7,sight:14,leash:24,radius:.9,respawn:3600,enemy:!0,boss:!0},monstruo:{name:`Monstruo marino`,hp:480,walk:3,chase:4.6,damage:14,attackRate:2.2,reach:5,sight:45,leash:90,radius:2.2,respawn:3600,enemy:!0,boss:!0,sea:!0,swimY:-.4,reachY:4.5,circle:30,retreat:3,boats:!0},ogro:{name:`El Ogro`,hp:550,walk:1.3,chase:3.6,damage:16,attackRate:1.6,reach:3.3,sight:22,leash:16,radius:1.2,respawn:3600,enemy:!0,boss:!0},esqueleto:{name:`Esqueleto pirata`,hp:40,walk:.8,chase:2.2,damage:6,attackRate:1.3,reach:1.6,sight:7,leash:12,radius:.45,respawn:500,enemy:!0,sea:!0,swimY:null,reachY:2.4}},Lf=[[[`galletas`,2]],[[`botiquin`,1]],[[`cuerda`,2]],[[`coco`,2]],[[`galletas`,1],[`botella`,1]]];function Rf(e,t){switch(e){case`cangrejo`:return[[`carne`,1]];case`jabali`:return[[`carne`,3]];case`capitan`:return[[`espada`,1],[`galletas`,2]];case`pirata`:return Lf[Math.min(Lf.length-1,Math.floor(t*Lf.length))];case`tiburon`:return[[`carne`,2],[`diente`,1]];case`pulpo`:return[[`oro`,3],[`perla`,1]];case`zombi`:return t<.5?[[`oro`,2]]:[[`oro`,1],[`bayas`,2]];case`robot`:return[[`tornillo`,2],[`oro`,2]];case`lobo`:return[[`carne`,2],[`piel`,1]];case`esqueleto`:return t<.3?[[`oro`,5],[`aire`,1]]:[[`oro`,4]];case`golem`:case`yeti`:case`escorpion`:case`reyzombi`:case`robotron`:case`calavera`:return[[`oro`,15],[`botiquin`,2]];case`monstruo`:return[[`oro`,30],[`perla`,3]];case`ogro`:return[[`corona`,1],[`oro`,50]]}}var zf=class{key;kind;homeX;homeZ;x;z;y=0;yaw;hp;state=`paseo`;angry=0;attackCd=.5;deadTimer=0;hurt=0;moving=0;attacked=!1;wx;wz;wait=0;kx=0;kz=0;spin=0;away=0;calm=!1;constructor(e,t,n,r,i=0){this.key=e,this.kind=t,this.homeX=n,this.homeZ=r,this.x=n,this.z=r,this.yaw=i,this.hp=If[t].hp,this.wx=n,this.wz=r,this.wait=1+(n*7+r*13)%3,this.y=If[t].swimY??0,this.spin=Math.abs(n*.37+r*.11)%(Math.PI*2)}get def(){return If[this.kind]}get alive(){return this.state!==`muerto`}get r(){return this.def.radius}get aware(){return this.state===`persigue`}takeHit(e,t,n,r){if(!this.alive)return!1;this.hp=Math.max(0,this.hp-e),this.hurt=.3;let i=this.x-t,a=this.z-n,o=Math.hypot(i,a)||1;return this.kx+=i/o*r*6,this.kz+=a/o*r*6,this.hp<=0?(this.state=`muerto`,this.deadTimer=0,!0):(this.angry=20,this.state=`persigue`,!1)}revive(){this.hp=this.def.hp,this.x=this.homeX,this.z=this.homeZ,this.def.swimY!=null&&(this.y=this.def.swimY),this.state=`paseo`,this.angry=0,this.deadTimer=0,this.kx=this.kz=0}setDead(e){this.state=`muerto`,this.hp=0,this.deadTimer=this.def.respawn-e}get respawnLeft(){return Math.max(0,this.def.respawn-this.deadTimer)}step(e,t){if(this.hurt=Math.max(0,this.hurt-e),this.attacked=!1,!this.alive)return this.deadTimer+=e,this.deadTimer>=this.def.respawn&&Math.hypot(t.px-this.homeX,t.pz-this.homeZ)>30&&this.revive(),0;let n=this.def;this.attackCd=Math.max(0,this.attackCd-e),this.away=Math.max(0,this.away-e),this.angry=Math.max(0,this.angry-e);let r=Math.hypot(t.px-this.x,t.pz-this.z),i=Math.hypot(t.px-this.homeX,t.pz-this.homeZ),a=n.sea?n.boats?t.playerSwimming:!!t.playerInWater:!t.playerSwimming,o=!this.calm&&t.visible&&a&&(r<n.sight||this.angry>0)&&i<n.leash,s=(t.py??this.y)+.3,c=!n.sea||Math.abs(s-this.y)<(n.reachY??2);o?this.state=`persigue`:this.state===`persigue`&&(this.state=`vuelve`),this.state===`vuelve`&&Math.hypot(this.x-this.homeX,this.z-this.homeZ)<2&&(this.state=`paseo`);let l=this.x,u=this.z,d=0,f=0;if(this.state===`persigue`&&this.away>0){let e=r||1;l=this.x+(this.x-t.px)/e*4,u=this.z+(this.z-t.pz)/e*4,d=n.chase*.8}else if(this.state===`persigue`)r>n.reach*.85&&(l=t.px,u=t.pz,d=n.chase),this.yaw=Math.atan2(t.px-this.x,t.pz-this.z),r<n.reach&&c&&this.attackCd<=0&&(this.attackCd=n.attackRate,this.attacked=!0,f=n.damage,this.away=n.retreat??0);else if(this.state===`vuelve`)l=this.homeX,u=this.homeZ,d=n.walk*1.6;else if(n.circle)this.spin+=e*n.walk/n.circle,l=this.homeX+Math.cos(this.spin)*n.circle,u=this.homeZ+Math.sin(this.spin)*n.circle,d=Math.hypot(l-this.x,u-this.z)>.4?n.walk:0;else{if(this.wait-=e,this.wait<=0){let e=t.rng()*Math.PI*2,r=t.rng()*Math.min(6,n.leash*.4);this.wx=this.homeX+Math.cos(e)*r,this.wz=this.homeZ+Math.sin(e)*r,this.wait=3+t.rng()*5}Math.hypot(this.wx-this.x,this.wz-this.z)>.4&&(l=this.wx,u=this.wz,d=n.walk)}let p=0,m=0,h=Math.hypot(l-this.x,u-this.z);d>0&&h>.05&&(p=(l-this.x)/h*d,m=(u-this.z)/h*d,(this.state!==`persigue`||this.away>0)&&(this.yaw=Math.atan2(p,m))),p+=this.kx,m+=this.kz;let g=Math.exp(-8*e);this.kx*=g,this.kz*=g;let _=this.x+p*e,v=this.z+m*e,y=n.sea&&t.canSwim?(e,n)=>t.canSwim(e,n):(e,n)=>t.canStep(e,n);if(y(_,this.z)&&(this.x=_),y(this.x,v)&&(this.z=v),this.moving=d>0?d/n.chase:0,n.sea){let r=t.floorAt?t.floorAt(this.x,this.z):-8;if(n.swimY==null)this.y=r;else{let t=(this.state===`persigue`?Math.min(-.6,Math.max(r+.8,s)):Math.max(r+.8,n.swimY))-this.y;this.y+=Math.sign(t)*Math.min(Math.abs(t),2.6*e)}}let b=n.radius;for(let e of t.colliders){if(!e.enabled)continue;let t=this.x-e.x,n=this.z-e.z,r=e.r+b;if(Math.abs(t)>r||Math.abs(n)>r)continue;let i=Math.hypot(t,n);if(i<r){let a=i||1e-4,o=e.x+t/a*r,s=e.z+n/a*r;y(o,s)&&(this.x=o,this.z=s)}}return f}};function Bf(e,t,n,r,i={}){let{camp:a=!0,crabs:o=8,boars:s=5,zombies:c=0,robots:l=0,wolves:u=0,boss:d}=i,f=Ff(e*31+17),p=[],m=(e,t,n)=>r.every(r=>Math.hypot(r.x-e,r.z-t)>r.r+n),h=(e,r=400)=>{for(let i=0;i<r;i++){let r=f()*Math.PI*2,i=Math.sqrt(f())*n,a=Math.cos(r)*i,o=Math.sin(r)*i;if(e(a,o,t(a,o)))return{x:a,z:o}}return null},g=null,_=(e,n)=>{let r=1/0,i=-1/0;for(let[a,o]of[[0,0],[4,0],[-4,0],[0,4],[0,-4]]){let s=t(e+a,n+o);r=Math.min(r,s),i=Math.max(i,s)}return r>.8&&i-r<2.5};if(a&&(g=h((e,t)=>_(e,t)&&m(e,t,30),800)??h((e,t)=>_(e,t)&&m(e,t,18),800)),g){p.push({kind:`capitan`,key:`capitan-0`,x:g.x+1.5,z:g.z+1.5});for(let e=0;e<3;e++){let t=e/3*Math.PI*2+.5;p.push({kind:`pirata`,key:`pirata-${e}`,x:g.x+Math.cos(t)*5,z:g.z+Math.sin(t)*5})}}let v=(e,t)=>m(e,t,6)&&(!g||Math.hypot(g.x-e,g.z-t)>18);for(let e=0;e<o;e++){let t=h((e,t,n)=>n>.15&&n<1.1&&v(e,t));t&&p.push({kind:`cangrejo`,key:`cangrejo-${e}`,...t})}for(let e=0;e<s;e++){let t=h((e,t,n)=>n>2&&v(e,t)&&m(e,t,14));t&&p.push({kind:`jabali`,key:`jabali-${e}`,...t})}let y=[[`zombi`,c],[`robot`,l],[`lobo`,u]];for(let[e,t]of y)for(let n=0;n<t;n++){let t=h((t,n,r)=>r>1.2&&v(t,n)&&m(t,n,16)&&p.every(r=>r.kind!==e||Math.hypot(r.x-t,r.z-n)>7));t&&p.push({kind:e,key:`${e}-${n}`,...t})}if(d){let e=e=>(t,n,r)=>r>1.5&&v(t,n)&&m(t,n,e)&&p.every(e=>Math.hypot(e.x-t,e.z-n)>6),t=h(e(22),600)??h(e(12),600)??h(e(4),600);t&&p.push({kind:d,key:`${d}-0`,...t})}return{spawns:p,camp:g}}var Vf={selva:{},pirata:{camp:!0,crabs:6,boars:2,boss:`calavera`},volcan:{camp:!1,crabs:4,boars:0,robots:2,boss:`golem`},nieve:{camp:!1,crabs:2,boars:1,wolves:4,boss:`yeti`},desierto:{camp:!1,crabs:9,boars:0,boss:`escorpion`},pantano:{camp:!1,crabs:4,boars:2,zombies:4,boss:`reyzombi`},cristal:{camp:!1,crabs:4,boars:1,robots:3,boss:`robotron`},misteriosa:{camp:!1,crabs:0,boars:0}},Hf=new WeakMap;function Uf(e){let t=Hf.get(e);if(t)return t;let n=[{x:e.spawn.x,z:e.spawn.z,r:10}];e.wreck&&n.push({x:e.wreck.x,z:e.wreck.z,r:12}),e.crater&&n.push({x:e.crater.x,z:e.crater.z,r:e.crater.r+6});let r=Bf(e.seed,e.heightAt,e.size*.36,n,Vf[e.kind]??{});return e.kind===`misteriosa`&&r.spawns.push({kind:`ogro`,key:`ogro-0`,x:0,z:-2}),Hf.set(e,r),r}var Wf=(e,t)=>({get:[`oro`,t],price:[e,1]}),Gf=(e,t,n=1)=>({get:[e,n],price:[`oro`,t]}),Kf={marina:{id:`marina`,name:`Marina la náufraga`,icon:`👩`,hello:`¡Hola! Yo también acabé en estas islas cuando se hundió mi barco. ¿Me ayudas?`,done:`¡Eres la mejor ayuda del océano! Vuelve cuando quieras a mi tienda.`,look:{gender:`chica`,skin:`#e0ac69`,hairStyle:`coleta`,hairColor:`#e65100`,shirtStyle:`tirantes`,shirtColor:`#4fc3f7`,pantsStyle:`cortos`,pantsColor:`#1565c0`,shoesStyle:`sandalias`,hat:`paja`,hatColor:`#f9e79f`},missions:[{want:[`coco`,3],reward:[[`oro`,5],[`botiquin`,1]],text:`Tengo muchísima sed… ¿Me traes 3 cocos?`,thanks:`¡Glu, glu! ¡Qué ricos! Toma, para ti.`},{want:[`pez-asado`,2],reward:[[`oro`,8],[`escudo-madera`,1]],text:`Ahora tengo hambre. ¿Me traes 2 pescados asados?`,thanks:`¡Ñam! Te doy mi escudo de madera: ¡para algunos golpes!`},{want:[`carne-asada`,2],reward:[[`lanza`,1],[`oro`,10]],text:`Los jabalíes no me dejan dormir. Tráeme 2 carnes asadas y te regalo mi lanza.`,thanks:`¡Gracias! Con la lanza llegas lejos y empujas a los enemigos.`}],shop:[Gf(`botiquin`,6),Gf(`aire`,4),Gf(`galletas`,3,2),Wf(`perla`,6),Wf(`diente`,4)]},bigotes:{id:`bigotes`,name:`Bigotes, el pirata bueno`,icon:`🦜`,hello:`¡Arrr! No todos los piratas somos malos. Yo ya me he jubilado.`,done:`¡Arrr! Eres el mejor grumete de los siete mares.`,look:{gender:`chico`,skin:`#d9a066`,build:`fuerte`,height:1.05,hairStyle:`corto`,hairColor:`#9e9e9e`,shirtStyle:`mangaLarga`,shirtColor:`#1565c0`,pantsStyle:`largos`,pantsColor:`#5d4037`,shoesStyle:`botas`,hat:`pirata`,hatColor:`#1565c0`,tattoo:`ancla`},missions:[{want:[`espada`,1],reward:[[`trabuco`,1]],text:`El capitán de esta isla es malísimo. Vence al capitán, tráeme su espada y te doy mi pistola pirata.`,thanks:`¡Arrr! ¡Por fin! Toma mi trabuco: ¡pum, pum!`},{want:[`perla`,2],reward:[[`oro`,20]],text:`Quiero hacerle un collar a mi loro. ¿Me traes 2 perlas del fondo del mar?`,thanks:`¡Qué bonitas! Mi loro está contentísimo.`},{want:[`diente`,3],reward:[[`armadura-pirata`,1]],text:`Colecciono dientes de tiburón. ¡Tráeme 3 y te doy mi armadura pirata!`,thanks:`¡Arrr! Póntela: los golpes te harán mucho menos daño.`}],shop:[Gf(`trabuco`,30),Gf(`armadura-pirata`,40),Gf(`escudo-concha`,25),Gf(`aire`,4),Wf(`perla`,6),Wf(`diente`,4)]},robi:{id:`robi`,name:`Robi, el robot bueno`,icon:`🤖`,hello:`¡Bip, bup! Mis hermanos robots se han vuelto malos. ¡Necesito tu ayuda!`,done:`¡Bip! Misión completada. ¡Eres mi mejor amigo humano!`,look:{gender:`chico`,skin:`#b0bec5`,hairStyle:`calvo`,eyeShape:`grandes`,eyeColor:`#00e5ff`,shirtStyle:`mangaLarga`,shirtColor:`#eceff1`,pantsStyle:`largos`,pantsColor:`#607d8b`,shoesStyle:`botas`,shoesColor:`#37474f`,glasses:`sol`,facePaint:`rayas`,facePaintColor:`#00e5ff`},missions:[{want:[`tornillo`,4],reward:[[`oro`,10],[`aire`,2]],text:`Necesito 4 tuercas para arreglarme. Los robots malos llevan tuercas 🔩`,thanks:`¡Bip! Ya estoy como nuevo. ¡Gracias!`},{want:[`perla`,2],reward:[[`pistola-rayos`,1]],text:`Mi batería funciona con perlas brillantes. Tráeme 2 y te doy una pistola de rayos.`,thanks:`¡Bzzz! Batería llena. ¡Toma, dispara rayos!`},{want:[`tornillo`,6],reward:[[`armadura-robot`,1]],text:`Con 6 tuercas más te fabrico la armadura robot. ¡La más fuerte de todas!`,thanks:`¡Bip, bip! Armadura robot lista. ¡Ahora eres casi indestructible!`}],shop:[Gf(`pistola-rayos`,45),Gf(`aire`,4),Gf(`botiquin`,6),Wf(`tornillo`,3),Wf(`perla`,6)]},nuk:{id:`nuk`,name:`Nuk el pescador`,icon:`🧣`,hello:`¡Brrr, qué frío! Los lobos me han quitado la ropa de abrigo…`,done:`¡Gracias, amigo! Ya no paso nada de frío.`,look:{gender:`chico`,skin:`#c68642`,build:`fuerte`,hairStyle:`corto`,hairColor:`#212121`,shirtStyle:`sudadera`,shirtColor:`#d32f2f`,pantsStyle:`largos`,pantsColor:`#37474f`,shoesStyle:`botas`,hat:`lana`,hatColor:`#fbc02d`},missions:[{want:[`piel`,2],reward:[[`oro`,8]],text:`Tráeme 2 pieles de lobo para hacerme un gorro nuevo.`,thanks:`¡Qué calentito! Muchas gracias.`},{want:[`pez-dorado`,1],reward:[[`arpon`,1]],text:`¡Me encantan los peces dorados! Pesca uno y te doy mi arpón.`,thanks:`¡Qué pez tan bonito! Toma mi arpón: bajo el agua es el mejor.`},{want:[`piel`,3],reward:[[`armadura-piel`,1],[`oro`,5]],text:`Con 3 pieles más te coso un abrigo de lobo. ¡Protege mucho!`,thanks:`¡Aquí lo tienes! Abrigado y protegido.`}],shop:[Gf(`armadura-piel`,25),Gf(`arpon`,20),Gf(`aire`,4),Wf(`piel`,3),Wf(`diente`,4)]},fragua:{id:`fragua`,name:`Fragua la herrera`,icon:`⚒️`,hello:`¡Aquí, junto al volcán, hago las mejores armas de todas las islas!`,done:`¡Eres una gran ayudante de herrería!`,look:{gender:`chica`,skin:`#8d5524`,build:`fuerte`,hairStyle:`afro`,hairColor:`#212121`,shirtStyle:`tirantes`,shirtColor:`#5d4037`,pantsStyle:`largos`,pantsColor:`#3e2723`,shoesStyle:`botas`,glasses:`normales`,scar:`mejilla`},missions:[{want:[`piedra`,6],reward:[[`oro`,6]],text:`Necesito 6 piedras para mi horno.`,thanks:`¡Perfecto! El horno ya calienta.`},{want:[`madera`,8],reward:[[`arco`,1]],text:`Tráeme 8 de madera y te hago un arco.`,thanks:`¡Aquí tienes tu arco! Las flechas no se acaban nunca.`},{want:[`tornillo`,3],reward:[[`espada`,1],[`oro`,10]],text:`Con 3 tuercas de robot hago una espada brillante. ¿Me las traes?`,thanks:`¡Mira qué espada! Es para ti.`}],shop:[Gf(`lanza`,10),Gf(`arco`,14),Gf(`arpon`,20),Gf(`espada`,30),Gf(`escudo-madera`,8),Gf(`armadura-madera`,12)]},kadir:{id:`kadir`,name:`Kadir el mercader`,icon:`🐪`,hello:`¡Bienvenido a mi tienda! En el desierto todo vale oro… ¡y agua!`,done:`¡Eres el mejor cliente que he tenido nunca!`,look:{gender:`chico`,skin:`#c68642`,hairStyle:`corto`,hairColor:`#3e2723`,shirtStyle:`mangaLarga`,shirtColor:`#fff8e1`,pantsStyle:`largos`,pantsColor:`#ffb74d`,shoesStyle:`sandalias`,hat:`paja`,hatColor:`#ffffff`},missions:[{want:[`agua`,3],reward:[[`oro`,12]],text:`Tengo muchísima sed. ¿Me traes 3 botellas de agua hervida?`,thanks:`¡Aaah! El agua es el mayor tesoro del desierto.`},{want:[`coco`,4],reward:[[`oro`,10],[`aire`,2]],text:`Quiero vender cocos en mi tienda. ¿Me traes 4?`,thanks:`¡Estupendo! Toma tu parte.`},{want:[`perla`,3],reward:[[`oro`,25]],text:`Un rey me ha pedido 3 perlas. ¡Te pagaré muy bien!`,thanks:`¡El rey estará feliz! Y tú, ¡rico!`}],shop:[Gf(`agua`,5,2),Gf(`galletas`,4,3),Gf(`botiquin`,6),Gf(`vela`,20),Gf(`timon`,20),Wf(`perla`,7),Wf(`diente`,5)]},rana:{id:`rana`,name:`Yaya Rana, la bruja buena`,icon:`🐸`,hello:`¡Croac! Soy una bruja buena. Los zombis del pantano no me dejan hacer pócimas…`,done:`¡Croac, croac! Mis pócimas son un éxito gracias a ti.`,look:{gender:`chica`,skin:`#ffdbac`,height:.9,hairStyle:`largo`,hairColor:`#eeeeee`,shirtStyle:`mangaLarga`,shirtColor:`#6a1b9a`,pantsStyle:`falda`,pantsColor:`#4a148c`,shoesStyle:`botas`,shoesColor:`#1b5e20`,glasses:`normales`,facePaint:`puntos`,facePaintColor:`#43a047`},missions:[{want:[`bayas`,5],reward:[[`botiquin`,2]],text:`Para mi pócima de curar necesito 5 bayas.`,thanks:`¡Burbujea! Toma dos botiquines.`},{want:[`pez`,3],reward:[[`oro`,8]],text:`Mi gato tiene hambre. ¿Me traes 3 pescados crudos?`,thanks:`¡Miau! Dice mi gato que gracias.`},{want:[`perla`,2],reward:[[`escudo-concha`,1]],text:`Con 2 perlas hago un escudo mágico de concha. ¿Me las traes?`,thanks:`¡Abracadabra! Tu escudo de concha para muchos golpes.`}],shop:[Gf(`botiquin`,5),Gf(`aire`,4),Gf(`escudo-madera`,8),Wf(`perla`,6),Wf(`diente`,4)]}},qf={selva:`marina`,pirata:`bigotes`,cristal:`robi`,nieve:`nuk`,volcan:`fragua`,desierto:`kadir`,pantano:`rana`};function Jf(e){let t=e.kind===`magica`?void 0:qf[e.kind];return t?Kf[t]:null}var Yf=new WeakMap;function Xf(e){if(Yf.has(e))return Yf.get(e);if(!Jf(e))return null;let t=e.heightAt,n=Ff(e.seed*23+11),r=Uf(e),i=r.camp,a=[{x:e.spawn.x,z:e.spawn.z,r:9}];e.wreck&&a.push({x:e.wreck.x,z:e.wreck.z,r:11}),e.crater&&a.push({x:e.crater.x,z:e.crater.z,r:e.crater.r+10}),i&&a.push({x:i.x,z:i.z,r:38});for(let e of r.spawns)If[e.kind].boss&&a.push({x:e.x,z:e.z,r:30});let o=e.cell?.i===0&&e.cell?.j===0,s=null,c=1/0;for(let r=0;r<900;r++){let r=n()*Math.PI*2,i=Math.sqrt(n())*e.radius,l=Math.cos(r)*i,u=Math.sin(r)*i,d=t(l,u);if(d<.9||d>3.2||[[1.5,0],[-1.5,0],[0,1.5],[0,-1.5]].some(([e,n])=>Math.abs(t(l+e,u+n)-d)>.8)||a.some(e=>Math.hypot(e.x-l,e.z-u)<e.r))continue;let f=o?Math.hypot(l-e.spawn.x,u-e.spawn.z):0;if(f<c&&(c=f,s={x:l,z:u,yaw:Math.atan2(l,u)},!o))break}return Yf.set(e,s),s}function Zf(e,t){return e.missions[t]??null}function Qf(e,t,n){if(e.count(t[0])<t[1])return`faltan`;let r=e.slots.map(e=>e?{...e}:null);e.take(t[0],t[1]);for(let[t,i]of n)if(e.add(t,i)>0)return e.slots=r,e.onChange(),`lleno`;return`ok`}function $f(e,t){return Qf(e,t.want,t.reward)}function ep(e,t){return Qf(e,t.price,[t.get])}function tp(e,t,n){let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.textContent=n),r}var np=e=>e.map(([e,t])=>`${K[e].icon} ${K[e].name}${t>1?` ×${t}`:``}`).join(` + `),rp=class{inv;ev;root=tp(`div`,`friend hidden`);title=tp(`b`);say=tp(`div`,`friend-say`);body=tp(`div`,`friend-body`);friend=null;done=0;focus=0;device=`teclado`;buttons=[];constructor(e,t,n){this.inv=t,this.ev=n;let r=tp(`div`,`craft-head`),i=tp(`button`,`help-close`,`×`);i.addEventListener(`click`,()=>this.close()),r.append(this.title,i),this.root.append(r,this.say,this.body),e.append(this.root)}get open(){return!!this.friend}show(e,t,n){this.friend=e,this.done=t,this.focus=0,this.root.classList.remove(`hidden`),this.render(n)}refresh(e,t){this.friend&&(this.done=e,this.render(t))}close(){this.friend&&(this.friend=null,this.root.classList.add(`hidden`),this.ev.onClose())}setDevice(e){this.device=e,this.friend&&this.render()}moveFocus(e){this.buttons.length&&(this.focus=(this.focus+e+this.buttons.length)%this.buttons.length,this.render(this.say.textContent??void 0))}pressFocused(){this.buttons[this.focus]?.()}button(e,t,n){let r=this.buttons.length;this.buttons.push(n);let i=this.device===`mando`&&r===this.focus,a=tp(`button`,`btn small${t?` primary`:` disabled`}${i?` focus`:``}`,i?`A ${e}`:e);return a.addEventListener(`click`,n),a}render(e){let t=this.friend;if(!t)return;this.buttons=[],this.title.textContent=`${t.icon} ${t.name}`;let n=Zf(t,this.done);this.say.textContent=e??(n?this.done===0?`${t.hello} ${n.text}`:n.text:t.done),this.body.replaceChildren();let r=tp(`div`,`friend-quest`);if(n){let[e,i]=n.want,a=this.inv.count(e),o=tp(`div`,`craft-info`);o.append(tp(`div`,`craft-name`,`📜 Misión ${this.done+1} de ${t.missions.length}: ${K[e].icon} ${K[e].name} ×${i}`),tp(`div`,`craft-desc`,`Premio: ${np(n.reward)}`));let s=tp(`div`,`craft-needs`);s.append(tp(`span`,`need${a>=i?` ok`:``}`,`${K[e].icon} ${Math.min(a,i)}/${i}`)),o.append(s),r.append(o,this.button(`Entregar`,a>=i,()=>this.ev.onDeliver(n)))}else r.append(tp(`div`,`craft-name`,`⭐ ¡Has hecho todas las misiones de ${t.name.split(/[ ,]/)[0]}!`));this.body.append(r),this.body.append(tp(`div`,`craft-group`,`🛒 Tienda · tienes ${K.oro.icon} ${this.inv.count(`oro`)}`));for(let e of t.shop){let t=e.get[0]===`oro`,n=tp(`div`,`craft-row`),r=tp(`div`,`craft-info`),[i,a]=e.get,[o,s]=e.price;t?r.append(tp(`div`,`craft-name`,`Vender ${K[o].icon} ${K[o].name}`),tp(`div`,`craft-desc`,`Te dan ${K.oro.icon} ${a} · tienes ${this.inv.count(o)}`)):r.append(tp(`div`,`craft-name`,`${K[i].icon} ${K[i].name}${a>1?` ×${a}`:``}`),tp(`div`,`craft-desc`,K[i].desc));let c=this.inv.count(o)>=s;n.classList.toggle(`can`,c),n.append(r,this.button(t?`Vender`:`${K[o].icon} ${s}`,c,()=>this.ev.onTrade(e))),this.body.append(n)}this.device===`mando`&&this.body.querySelector(`.focus`)?.scrollIntoView({block:`nearest`})}};function ip(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=new oa(e);n.colorSpace=Ve;let r=new ai(new Gr({map:n,depthWrite:!1,transparent:!0}));r.scale.set(.8,.8,1),r.renderOrder=12;let i=``;return{sprite:r,set(e){e!==i&&(i=e,t.clearRect(0,0,128,128),t.fillStyle=`rgba(255,255,255,0.92)`,t.beginPath(),t.arc(64,64,54,0,Math.PI*2),t.fill(),t.lineWidth=6,t.strokeStyle=`#ffb300`,t.stroke(),t.font=`70px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(e,64,70),n.needsUpdate=!0)}}}var ap=class{def;spot;avatar;marker=ip();waved=!1;yaw;constructor(e,t,n,r){this.def=t,this.spot=n,this.avatar=new vu({...zu(),...t.look},`curador`,{classWeapon:!1}),this.avatar.setName(t.name),this.yaw=n.yaw,this.avatar.root.position.set(n.x,r,n.z),this.avatar.root.rotation.y=n.yaw,this.marker.sprite.position.y=this.avatar.height+1.05,this.avatar.root.add(this.marker.sprite),e.add(this.avatar.root)}get x(){return this.spot.x}get z(){return this.spot.z}update(e,t,n,r,i){let a=Math.hypot(n-this.spot.x,r-this.spot.z),o=(a<9?Math.atan2(n-this.spot.x,r-this.spot.z):this.spot.yaw)-this.yaw;o=Math.atan2(Math.sin(o),Math.cos(o)),this.yaw+=o*Math.min(1,e*4),this.avatar.root.rotation.y=this.yaw,a<7&&!this.waved&&(this.waved=!0,this.avatar.swing()),a>14&&(this.waved=!1),this.avatar.animate(e,0,!1,!1,t),this.marker.set(i?`❗`:`💬`),this.marker.sprite.position.y=this.avatar.height+1.05+Math.sin(t*3)*.08,this.marker.sprite.visible=a>2.2}},op=`sobreviviendo-musica`,sp={explorar:{bpm:112,wave:`triangle`,melody:[[12,null,15,17,19,null,17,15],[17,null,15,12,15,null,null,null],[10,null,12,15,17,null,19,17],[15,null,12,10,12,null,null,null],[12,15,19,null,22,null,19,17],[19,null,17,15,17,null,15,12],[10,12,15,null,17,15,12,10],[12,null,null,null,7,null,12,null]],bass:[[0,null,0,null,7,null,0,null],[-4,null,-4,null,3,null,-4,null],[-2,null,-2,null,5,null,-2,null],[-5,null,-5,null,2,null,-5,null]],drums:[`k.h.s.h.`,`k.hks.h.`,`k.h.s.h.`,`k.hks.ss`]},jefe:{bpm:150,wave:`square`,melody:[[12,12,15,12,18,17,15,12],[11,11,15,11,17,15,14,11],[12,12,15,12,18,17,15,17],[19,18,17,15,14,15,11,null]],bass:[[0,0,0,0,0,0,3,0],[-1,-1,-1,-1,-1,-1,2,-1]],drums:[`k.skk.s.`,`k.skksss`]},victoria:{bpm:128,wave:`triangle`,melody:[[12,16,19,24,null,19,24,null],[14,17,21,26,null,21,26,null],[16,19,24,28,null,26,28,null],[24,null,null,null,null,null,null,null]],bass:[[0,null,7,null,12,null,7,null],[2,null,9,null,14,null,9,null],[4,null,11,null,16,null,11,null],[0,null,null,null,-12,null,null,null]],drums:[`k.h.s.h.`,`k.h.s.h.`,`k.h.s.hs`,`k...k...`]},intro:{bpm:96,wave:`sine`,melody:[[12,null,14,null,16,null,19,null],[17,null,16,null,14,null,null,null],[12,null,14,null,16,null,12,null],[11,null,null,null,7,null,null,null]],bass:[[0,null,null,null,7,null,null,null],[-3,null,null,null,4,null,null,null]],drums:[`....h...`,`....h..h`]}},cp=e=>220*2**(e/12);function lp(){try{return localStorage.getItem(op)!==`no`}catch{return!0}}var up=class{ctx=null;master=null;filter=null;noise=null;mode=`explorar`;step=0;nextTime=0;timer=0;enabled=lp();unlock(){if(this.ctx){this.ctx.state===`suspended`&&this.ctx.resume();return}let e=window.AudioContext??window.webkitAudioContext;if(!e)return;let t=new e;this.ctx=t,this.filter=t.createBiquadFilter(),this.filter.type=`lowpass`,this.filter.frequency.value=12e3,this.master=t.createGain(),this.master.gain.value=this.enabled?.16:0,this.filter.connect(this.master).connect(t.destination);let n=t.sampleRate*.3;this.noise=t.createBuffer(1,n,t.sampleRate);let r=this.noise.getChannelData(0);for(let e=0;e<n;e++)r[e]=Math.random()*2-1;this.nextTime=t.currentTime+.1,this.timer=window.setInterval(()=>this.schedule(),60)}play(e){e!==this.mode&&(this.mode=e,this.step=0)}get current(){return this.mode}setEnabled(e){this.enabled=e;try{localStorage.setItem(op,e?`si`:`no`)}catch{}this.ctx&&this.master&&this.master.gain.setTargetAtTime(e?.16:0,this.ctx.currentTime,.15)}setUnderwater(e){this.ctx&&this.filter&&this.filter.frequency.setTargetAtTime(e?700:12e3,this.ctx.currentTime,.2)}dispose(){window.clearInterval(this.timer),this.ctx?.close(),this.ctx=null}schedule(){let e=this.ctx;if(!e||!this.enabled){e&&(this.nextTime=e.currentTime+.1);return}this.nextTime<e.currentTime-.3&&(this.nextTime=e.currentTime+.05);let t=sp[this.mode],n=60/t.bpm/2;for(;this.nextTime<e.currentTime+.25;){let e=Math.floor(this.step/8),r=this.step%8,i=this.nextTime,a=t.melody[e%t.melody.length][r];a!==null&&this.tone(cp(a),i,n*.9,t.wave,.5);let o=t.bass[e%t.bass.length][r];o!==null&&this.tone(cp(o-12),i,n*.95,`sawtooth`,.32,900);let s=t.drums[e%t.drums.length][r];s===`k`?this.kick(i):s===`s`?this.hit(i,.12,1800,.5):s===`h`&&this.hit(i,.04,7e3,.18),this.step=(this.step+1)%256,this.nextTime+=n}}tone(e,t,n,r,i,a){let o=this.ctx,s=o.createOscillator();s.type=r,s.frequency.value=e;let c=o.createGain();c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(i,t+.01),c.gain.exponentialRampToValueAtTime(.001,t+n);let l=c;if(a){let e=o.createBiquadFilter();e.type=`lowpass`,e.frequency.value=a,c.connect(e),l=e}s.connect(c),l.connect(this.filter),s.start(t),s.stop(t+n+.02)}kick(e){let t=this.ctx,n=t.createOscillator();n.frequency.setValueAtTime(140,e),n.frequency.exponentialRampToValueAtTime(45,e+.12);let r=t.createGain();r.gain.setValueAtTime(.9,e),r.gain.exponentialRampToValueAtTime(.001,e+.18),n.connect(r).connect(this.filter),n.start(e),n.stop(e+.2)}hit(e,t,n,r){let i=this.ctx,a=i.createBufferSource();a.buffer=this.noise;let o=i.createBiquadFilter();o.type=`highpass`,o.frequency.value=n;let s=i.createGain();s.gain.setValueAtTime(r,e),s.gain.exponentialRampToValueAtTime(.001,e+t),a.connect(o).connect(s).connect(this.filter),a.start(e),a.stop(e+t+.02)}},dp=`/multi`,fp=`ACDEFGHJKMNPRTWXY34679`;function pp(e){return typeof e==`string`?e.toUpperCase().split(``).filter(e=>fp.includes(e)).join(``).slice(0,4):``}var mp=[`sin-partida`,`ya-hay`,`llena`,`codigo`,`ocupado`],hp=[`destructor`,`asesino`,`curador`,`alien`],gp=(e,t,n,r=0)=>typeof e==`number`&&Number.isFinite(e)?Math.min(n,Math.max(t,e)):r,_p=1e6;function vp(e){return Array.isArray(e)?e.filter(e=>typeof e==`string`&&/^(-?\d{1,4},-?\d{1,4}|monstruo|ogro)$/.test(e)).slice(0,60):[]}function yp(e){if(!e||typeof e!=`object`)return null;let t=e;return t.kind===`jefe`&&typeof t.key==`string`&&vp([t.key]).length?{kind:`jefe`,key:t.key,name:typeof t.name==`string`?t.name.slice(0,40):``}:t.kind===`curar`?{kind:`curar`,x:gp(t.x,-1e6,_p),z:gp(t.z,-1e6,_p),amount:gp(t.amount,0,60)}:t.kind===`saludo`?{kind:`saludo`}:null}function bp(e){return{x:gp(e.x,-1e6,_p),y:gp(e.y,-50,500),z:gp(e.z,-1e6,_p),yaw:gp(e.yaw,-100,100),speed:gp(e.speed,0,1),swim:e.swim===!0,dive:e.dive===!0,down:e.down===!0,boat:typeof e.boat==`string`?e.boat.slice(0,4):null}}function xp(e){let t;try{let n=JSON.parse(e);if(!n||typeof n!=`object`)return null;t=n}catch{return null}let n=e=>{if(!e||typeof e!=`object`)return null;let t=e,n=zd(t.name);return!n||typeof t.id!=`number`?null:{id:t.id,name:n,classId:hp.includes(t.classId)?t.classId:`destructor`,look:Gu(t.look),host:t.host===!0}},r=typeof t.id==`number`?t.id:-1;switch(t.t){case`sala`:return{t:`sala`,host:typeof t.host==`string`&&zd(t.host)||null,players:gp(t.players,0,4)};case`bienvenida`:{if(typeof t.seed!=`number`)return null;let e=Array.isArray(t.players)?t.players.map(n).filter(e=>!!e):[];return{t:`bienvenida`,id:r,code:pp(t.code),seed:t.seed,hour:gp(t.hour,0,24,9),day:Math.round(gp(t.day,1,99999,1)),bosses:vp(t.bosses),players:e}}case`no`:return mp.includes(t.why)?{t:`no`,why:t.why}:null;case`entra`:{let e=n(t.player);return e?{t:`entra`,player:e}:null}case`sale`:return{t:`sale`,id:r,name:zd(t.name)};case`pos`:return{t:`pos`,id:r,...bp(t)};case`hora`:return{t:`hora`,hour:gp(t.hour,0,24,9),day:Math.round(gp(t.day,1,99999,1))};case`evento`:{let e=yp(t.ev);return e?{t:`evento`,id:r,ev:e}:null}case`fin`:return{t:`fin`,name:zd(t.name)};default:return null}}function Sp(e=location){return`${e.protocol===`https:`?`wss`:`ws`}://${e.host}${dp}`}function Cp(e){return/^(localhost|127\.\d+\.\d+\.\d+|\[::1\]|10\.\d+\.\d+\.\d+|192\.168\.\d+\.\d+|172\.(1[6-9]|2\d|3[01])\.\d+\.\d+|[a-z0-9-]+\.local)$/i.test(e)}async function wp(e=`multijugador.json`){try{let t=await fetch(e,{cache:`no-store`});return t.ok?Tp((await t.json()).internet):null}catch{return null}}function Tp(e){if(typeof e!=`string`||!e.trim())return null;let t;try{t=new URL(e.trim())}catch{return null}return t.protocol===`https:`?t.protocol=`wss:`:t.protocol===`http:`&&(t.protocol=`ws:`),t.protocol!==`wss:`&&t.protocol!==`ws:`?null:((t.pathname===`/`||t.pathname===``)&&(t.pathname=dp),t.toString())}function Ep(e){let t=new URL(e);return t.protocol=t.protocol===`wss:`?`https:`:`http:`,t.pathname=`/salud`,t.search=``,t.toString()}async function Dp(e,t,n=1e5){let r=Ep(e),i=Date.now(),a=window.setInterval(()=>t(Math.round((Date.now()-i)/1e3)),1e3);try{for(;Date.now()-i<n;){let e=new AbortController,t=window.setTimeout(()=>e.abort(),25e3);try{let t=await fetch(r,{cache:`no-store`,signal:e.signal});if(t.ok&&(await t.json()).ok===!0)return!0}catch{}finally{window.clearTimeout(t)}await new Promise(e=>window.setTimeout(e,3e3))}return!1}finally{window.clearInterval(a)}}var Op=class{ws=null;onMessage=()=>{};onClose=()=>{};get connected(){return this.ws?.readyState===WebSocket.OPEN}open(e=Sp(),t=4e3){return this.close(),new Promise(n=>{let r=!1,i=e=>{r||(r=!0,n(e))},a;try{a=new WebSocket(e)}catch{i(!1);return}this.ws=a;let o=window.setTimeout(()=>{i(!1),a.close()},t);a.onopen=()=>{window.clearTimeout(o),i(!0)},a.onerror=()=>{window.clearTimeout(o),i(!1)},a.onmessage=e=>{if(typeof e.data!=`string`)return;let t=xp(e.data);t&&this.onMessage(t)},a.onclose=()=>{window.clearTimeout(o),i(!1),this.ws===a&&(this.ws=null,this.onClose())}})}send(e){this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(e))}wait(e,t=4e3){return new Promise(n=>{let r=this.onMessage,i=window.setTimeout(()=>{this.onMessage=r,n(null)},t);this.onMessage=t=>{e.includes(t.t)?(window.clearTimeout(i),this.onMessage=r,n(t)):r(t)}})}close(){let e=this.ws;this.ws=null,e&&(e.onclose=null,e.close())}},kp=class{scene;list=new Map;hullGeo=new H(1.6,.5,3);hullMat=new ja({color:`#8d6e63`,roughness:.8});constructor(e){this.scene=e}get size(){return this.list.size}attach(e){this.scene=e;for(let t of this.list.values())e.add(t.avatar.root)}nameOf(e){return this.list.get(e)?.info.name??null}hideAll(){for(let e of this.list.values())e.avatar.root.visible=!1}names(){return[...this.list.values()].map(e=>e.info.name)}add(e){this.remove(e.id);let t=new vu(e.look,e.classId);t.root.rotation.order=`YXZ`,t.setName(e.name),t.root.visible=!1;let n=new V(this.hullGeo,this.hullMat);n.position.y=-.35,n.visible=!1,t.root.add(n),this.scene.add(t.root),this.list.set(e.id,{info:e,avatar:t,hull:n,now:null,goal:null,quiet:0})}remove(e){let t=this.list.get(e);t&&(this.scene.remove(t.avatar.root),this.list.delete(e))}clear(){for(let e of[...this.list.keys()])this.remove(e)}move(e,t){let n=this.list.get(e);n&&(n.goal=t,n.quiet=0,n.now||={...t})}positions(){return[...this.list.values()].flatMap(e=>e.now?[{x:e.now.x,z:e.now.z,name:e.info.name}]:[])}near(e,t,n){return[...this.list.values()].filter(r=>r.now&&Math.hypot(r.now.x-e,r.now.z-t)<n).map(e=>e.info.name)}update(e,t,n,r){let i=1-Math.exp(-10*e);for(let a of this.list.values()){a.quiet+=e;let o=a.now,s=a.goal,c=a.avatar.root;if(!o||!s||a.quiet>6){c.visible=!1;continue}Math.hypot(s.x-o.x,s.z-o.z)>30&&(o.x=s.x,o.z=s.z,o.y=s.y),o.x+=(s.x-o.x)*i,o.y+=(s.y-o.y)*i,o.z+=(s.z-o.z)*i;let l=s.yaw-o.yaw;l=Math.atan2(Math.sin(l),Math.cos(l)),o.yaw+=l*i,Object.assign(o,{speed:s.speed,swim:s.swim,dive:s.dive,down:s.down,boat:s.boat});let u=o.x-n,d=o.z-r;c.visible=Math.hypot(u,d)<400,c.visible&&(c.position.set(u,o.y,d),c.rotation.y=o.yaw,c.rotation.x+=((o.dive?.5:0)-c.rotation.x)*i,a.hull.visible=!!o.boat,a.avatar.animate(e,o.boat?0:o.speed,!1,!1,t,o.swim&&!o.boat,o.down),a.avatar.showName(!0))}}},Ap=[`#f5c9a0`,`#d9a066`,`#8d5524`,`#c68642`,`#ffdbac`];function jp(e,t){return{gender:`chico`,skin:Ap[e%Ap.length],height:t?1.1:.95+e%3*.04,build:t||e%2==0?`fuerte`:`normal`,hairStyle:[`largo`,`corto`,`calvo`][e%3],hairColor:[`#212121`,`#4e342e`,`#8d6e63`][e%3],eyeShape:`redondos`,eyeColor:`#3e2723`,shirtStyle:t?`mangaLarga`:e%2?`tirantes`:`camiseta`,shirtColor:t?`#b71c1c`:[`#eceff1`,`#1565c0`,`#f9a825`][e%3],pantsStyle:t?`largos`:`cortos`,pantsColor:t?`#212121`:`#5d4037`,shoesStyle:`botas`,shoesColor:`#212121`,hat:`pirata`,hatColor:t?`#111111`:`#3e2723`,glasses:`ninguna`,tattoo:`ancla`,scar:t?`ceja`:[`mejilla`,`nariz`,`ninguna`][e%3],facePaint:`ninguna`,facePaintColor:`#000000`}}function Mp(e){return{gender:e%3==1?`chica`:`chico`,skin:[`#9ccc65`,`#aed581`,`#8bc34a`][e%3],height:.95+e%3*.05,build:e%2?`delgado`:`normal`,hairStyle:[`pinchos`,`largo`,`calvo`,`cresta`][e%4],hairColor:[`#33691e`,`#4e342e`,`#212121`][e%3],eyeShape:`grandes`,eyeColor:`#d50000`,shirtStyle:e%2?`tirantes`:`camiseta`,shirtColor:[`#8d6e63`,`#78909c`,`#a1887f`][e%3],pantsStyle:`cortos`,pantsColor:`#5d4037`,shoesStyle:`descalzo`,shoesColor:`#212121`,hat:`ninguno`,hatColor:`#000000`,glasses:`ninguna`,tattoo:`ninguno`,scar:[`mejilla`,`nariz`,`ceja`][e%3],facePaint:`ninguna`,facePaintColor:`#000000`}}var Np={gender:`chico`,skin:`#7cb342`,height:1.1,build:`fuerte`,hairStyle:`pinchos`,hairColor:`#1b1b1b`,eyeShape:`almendra`,eyeColor:`#ffeb3b`,shirtStyle:`mangaLarga`,shirtColor:`#eceff1`,pantsStyle:`largos`,pantsColor:`#1a237e`,shoesStyle:`botas`,shoesColor:`#212121`,hat:`gorra`,hatColor:`#1a237e`,glasses:`sol`,tattoo:`rayo`,scar:`ceja`,facePaint:`ninguna`,facePaintColor:`#000000`},Pp={reyzombi:1.7,robotron:2.1,calavera:1.8,ogro:2.1},Fp=(e,t={})=>new ja({color:e,roughness:.75,...t});function Ip(e){let t=new z,n=new z;t.add(n);let r=[],i=[],a=[],o=(e,t)=>{let n=Fp(e,t);return i.push(n),n},s=(e,t,n,r,i,a)=>{let o=new V(e,t);return o.position.set(r,i,a),o.castShadow=!0,n.add(o),o};if(e===`cangrejo`){let e=o(`#e8552d`,{flatShading:!0}),c=o(`#b23b1c`),l=o(`#111111`);s(new W(.32,12,8),e,n,0,.22,0).scale.set(1.15,.5,.85);for(let t of[-1,1]){s(new W(.13,8,6),e,n,t*.32,.22,.32).scale.set(1,.7,1.4),s(new H(.05,.05,.22),c,n,t*.25,.2,.18),s(new U(.02,.02,.14),c,n,t*.08,.34,.18),s(new W(.04,6,4),l,n,t*.08,.42,.18);for(let e=0;e<3;e++){let i=new z;i.position.set(t*.28,.18,-.12+e*.13);let a=s(new U(.025,.02,.32),c,i,t*.12,-.08,0);a.rotation.z=t*1,n.add(i),r.push(i)}}return{root:t,legs:r,mats:i,height:.5,wiggle:a}}if(e===`tiburon`){let e=o(`#6f8796`,{flatShading:!0}),c=o(`#eef3f6`,{flatShading:!0}),l=o(`#111111`),u=o(`#8e1b1b`),d=o(`#ffffff`);s(new W(.5,14,10,0,Math.PI*2,0,Math.PI/2),e,n,0,0,.1).scale.set(.95,1,3.2),s(new W(.5,14,10,0,Math.PI*2,Math.PI/2,Math.PI/2),c,n,0,0,.1).scale.set(.95,.75,3.2);let f=s(new fa(.42,.95,4),e,n,0,.72,-.05);f.scale.set(.18,1,1),f.rotation.x=-.35;for(let t of[-1,1]){let r=s(new fa(.28,.8,4),e,n,t*.55,-.2,.45);r.scale.set(1,1,.2),r.rotation.set(.3,0,t*1.9),s(new W(.06,6,4),l,n,t*.32,.12,1.3)}s(new W(.22,10,6,0,Math.PI*2,Math.PI/2,Math.PI/2),u,n,0,-.12,1.25).scale.set(1.2,.6,.8);for(let e=0;e<6;e++)s(new fa(.035,.1,4),d,n,-.18+e*.072,-.1,1.34).rotation.x=Math.PI;let p=new z;p.position.set(0,0,-1.45),n.add(p);let m=s(new fa(.3,.9,4),e,p,0,.32,-.25);m.scale.set(.2,1,1),m.rotation.x=-.7;let h=s(new fa(.22,.6,4),e,p,0,-.2,-.2);return h.scale.set(.2,1,1),h.rotation.x=Math.PI+.7,s(new U(.12,.22,.6,8).rotateX(Math.PI/2),e,p,0,0,.1),a.push(p),{root:t,legs:r,mats:i,height:.9,wiggle:a}}if(e===`pulpo`){let e=o(`#c2185b`,{flatShading:!0}),c=o(`#f48fb1`),l=o(`#ffffff`),u=o(`#111111`);s(new W(.8,16,12),e,n,0,1.35,-.15).scale.set(1,1.2,1.05);for(let[e,t,r]of[[.3,1.9,.5],[-.4,2.1,.2],[.55,1.5,-.45],[-.2,1.6,-.7]])s(new W(.11,8,6),c,n,e,t,r);for(let e of[-1,1])s(new W(.24,12,8),l,n,e*.35,1.25,.55),s(new W(.12,8,6),u,n,e*.37,1.25,.76);for(let t=0;t<8;t++){let r=t/8*Math.PI*2,i=new z;i.position.set(Math.sin(r)*.45,.7,Math.cos(r)*.45),i.rotation.y=r,n.add(i);for(let t=0;t<4;t++){let n=new z;t>0&&(n.position.z=.42);let r=.17*(1-t*.2);s(new U(r*.8,r,.46,7).rotateX(Math.PI/2).translate(0,0,.21),e,n,0,0,0),i.add(n),a.push(n),i=n}}return{root:t,legs:r,mats:i,height:2.3,wiggle:a}}if(e===`robot`){let e=o(`#78909c`,{metalness:.75,roughness:.35}),c=o(`#c62828`,{metalness:.4,roughness:.4}),l=o(`#263238`,{metalness:.6}),u=o(`#ff1744`,{emissive:`#ff1744`,emissiveIntensity:2});s(new H(.72,.75,.5),e,n,0,1.15,0),s(new H(.5,.3,.05),c,n,0,1.2,.26),s(new W(.06,8,6),u,n,0,1.2,.29);let d=s(new H(.45,.36,.4),e,n,0,1.75,0);d.rotation.y=0,s(new H(.36,.09,.05),u,n,0,1.78,.21),s(new U(.015,.015,.3),l,n,0,2.05,0),s(new W(.05,8,6),u,n,0,2.2,0);for(let t of[-1,1]){let i=s(new U(.07,.07,.6,8),l,n,t*.46,1.15,.05);i.rotation.z=t*.15,s(new H(.16,.16,.16),c,n,t*.5,.82,.08);let a=new z;a.position.set(t*.2,.78,0),s(new U(.09,.08,.6,8),l,a,0,-.3,0),s(new H(.2,.12,.3),e,a,0,-.72,.05),n.add(a),r.push(a)}return{root:t,legs:r,mats:i,height:2.1,wiggle:a}}if(e===`esqueleto`){let e=o(`#f5f0e1`,{flatShading:!0}),c=o(`#111111`),l=o(`#c62828`);s(new W(.26,12,10),e,n,0,1.7,0).scale.set(.95,1,1.05),s(new H(.28,.1,.2),e,n,0,1.5,.06);for(let e of[-1,1])s(new W(.07,8,6),c,n,e*.1,1.72,.2);let u=s(new U(.27,.27,.1,14),l,n,0,1.83,0);u.rotation.x=-.15,s(new U(.04,.04,.6),e,n,0,1.1,-.05);for(let t=0;t<4;t++)s(new ba(.17-t*.015,.025,5,12,Math.PI*1.4),e,n,0,1.35-t*.11,0).rotation.set(Math.PI/2,0,-Math.PI*.2-Math.PI/2);s(new H(.32,.12,.16),e,n,0,.8,0);for(let t of[-1,1]){s(new U(.03,.03,.6),e,n,t*.26,1.15,.12).rotation.set(-.9,0,t*.15);let i=new z;i.position.set(t*.12,.78,0),s(new U(.035,.03,.72),e,i,0,-.38,0),s(new H(.1,.05,.2),e,i,0,-.76,.05),n.add(i),r.push(i)}return{root:t,legs:r,mats:i,height:1.9,wiggle:a}}if(e===`lobo`){let e=o(`#8a9199`,{flatShading:!0}),c=o(`#dfe3e6`,{flatShading:!0}),l=o(`#111111`),u=o(`#ffd54f`,{emissive:`#ffb300`,emissiveIntensity:.6}),d=s(new ua(.28,.75,4,10),e,n,0,.68,0);d.rotation.x=Math.PI/2,s(new W(.3,10,8),c,n,0,.66,.38).scale.set(.9,.95,.8);let f=new z;f.position.set(0,.92,.66),n.add(f),s(new W(.2,10,8),e,f,0,0,0);let p=s(new fa(.11,.3,8),c,f,0,-.05,.24);p.rotation.x=Math.PI/2,s(new W(.04,6,4),l,f,0,-.03,.39);for(let t of[-1,1])s(new fa(.07,.18,4),e,f,t*.11,.2,-.02),s(new W(.035,6,4),u,f,t*.09,.06,.16);let m=s(new fa(.09,.5,6),e,n,0,.78,-.72);m.rotation.x=-2.1,a.push(m);for(let[t,i]of[[-.16,.38],[.16,.38],[-.16,-.38],[.16,-.38]]){let a=new z;a.position.set(t,.5,i),s(new U(.06,.05,.5),e,a,0,-.24,0),n.add(a),r.push(a)}return{root:t,legs:r,mats:i,height:1.1,wiggle:a}}if(e===`golem`){let e=o(`#4e4440`,{flatShading:!0}),c=o(`#ff6d00`,{emissive:`#ff3d00`,emissiveIntensity:1.6});s(new ma(1,0),e,n,0,2.3,0).scale.set(1.2,1,.9),s(new ma(.55,0),e,n,0,3.45,.1);for(let t of[-1,1]){s(new W(.1,6,4),c,n,t*.2,3.5,.55),s(new ma(.55,0),e,n,t*1.35,2.6,0),s(new ma(.6,0),e,n,t*1.45,1.6,.2);let i=new z;i.position.set(t*.55,1.4,0),s(new ma(.55,0),e,i,0,-.75,0),n.add(i),r.push(i)}for(let[e,t,r]of[[.4,2.5,.85],[-.5,2.1,.8],[.1,1.9,.9],[.7,2.9,.5],[-.3,2.8,-.8]])s(new W(.13,6,4),c,n,e,t,r);return{root:t,legs:r,mats:i,height:4,wiggle:a}}if(e===`yeti`){let e=o(`#f5f7fa`,{flatShading:!0,roughness:1}),c=o(`#90caf9`),l=o(`#8d6e63`),u=o(`#111111`);s(new ua(.9,1,6,12),e,n,0,2.1,0).scale.set(1.1,1,.85),s(new W(.6,12,10),e,n,0,3.4,0),s(new W(.42,12,10),c,n,0,3.35,.32).scale.set(1,.9,.6);for(let t of[-1,1]){s(new W(.07,6,4),u,n,t*.15,3.45,.6);let i=s(new fa(.12,.5,6),l,n,t*.45,3.85,0);i.rotation.z=-t*.6;let a=s(new ua(.28,1.2,4,8),e,n,t*1.15,1.9,.1);a.rotation.z=t*.15;let o=new z;o.position.set(t*.45,1.1,0),s(new ua(.32,.5,4,8),e,o,0,-.55,0),n.add(o),r.push(o)}return s(new H(.3,.08,.05),u,n,0,3.18,.6),{root:t,legs:r,mats:i,height:4.1,wiggle:a}}if(e===`escorpion`){let e=o(`#c68a3e`,{flatShading:!0}),c=o(`#7b4f1d`,{flatShading:!0}),l=o(`#d50000`,{emissive:`#b71c1c`,emissiveIntensity:.5}),u=o(`#111111`);s(new W(1,12,8),e,n,0,.8,0).scale.set(1,.5,1.5);for(let t of[-1,1]){s(new W(.09,6,4),u,n,t*.25,1.15,1.25),s(new U(.12,.14,1.2,6),c,n,t*.75,.8,1.55).rotation.set(Math.PI/2,0,-t*.5),s(new W(.4,10,8),e,n,t*1.05,.85,2.15).scale.set(.9,.6,1.3);for(let e of[-1,1]){let r=s(new fa(.12,.6,5),c,n,t*1.05+e*.15,.85,2.65);r.rotation.x=Math.PI/2}for(let e=0;e<3;e++){let i=new z;i.position.set(t*.8,.7,-.6+e*.6);let a=s(new U(.06,.05,1,5),c,i,t*.35,-.3,0);a.rotation.z=t*.9,n.add(i),r.push(i)}}let d=new z;d.position.set(0,.9,-1.4),n.add(d),a.push(d);for(let t=0;t<5;t++){let n=new z;t>0&&(n.position.z=-.5),n.rotation.x=t===0?-.9:-.42,s(new W(.3-t*.03,8,6),e,n,0,0,-.25),d.add(n),d=n}let f=s(new fa(.15,.6,6),l,d,0,0,-.7);return f.rotation.x=-Math.PI/2,{root:t,legs:r,mats:i,height:2.8,wiggle:a}}if(e===`monstruo`){let e=o(`#00897b`,{flatShading:!0}),c=o(`#ffd54f`,{flatShading:!0}),l=o(`#7b1fa2`,{flatShading:!0}),u=o(`#ffffff`),d=o(`#111111`),f=o(`#b71c1c`),p=new z;p.position.set(0,.6,1.8),n.add(p),s(new W(1.2,14,10),e,p,0,.6,0).scale.set(1,.85,1.3),s(new W(.9,12,8,0,Math.PI*2,Math.PI/2,Math.PI/2),f,p,0,.3,1).scale.set(1,.6,1);for(let e=0;e<7;e++)s(new fa(.08,.25,4),u,p,-.6+e*.2,.25,1.55).rotation.x=Math.PI;for(let e of[-1,1])s(new W(.3,10,8),u,p,e*.55,1.15,.9),s(new W(.15,8,6),d,p,e*.6,1.17,1.15),s(new fa(.16,.9,6),l,p,e*.6,1.7,-.2).rotation.set(-.5,0,-e*.3);a.push(p);for(let t=0;t<7;t++){let r=new z;r.position.z=.4-t*1.5;let i=1.05-t*.1;s(new W(i,12,8),e,r,0,0,0).scale.set(1,1,1.2),s(new W(i*.8,10,6),c,r,0,-i*.35,0).scale.set(1,.6,1.1),s(new fa(.35,.9,4),l,r,0,i*.95,0).scale.set(.3,1,1),n.add(r),a.push(r)}return{root:t,legs:r,mats:i,height:2.6,wiggle:a}}let c=o(`#6d4c41`,{flatShading:!0}),l=o(`#3e2723`,{flatShading:!0}),u=o(`#d7a08a`),d=o(`#fffde7`),f=o(`#111111`),p=s(new ua(.36,.6,4,10),c,n,0,.62,0);p.rotation.x=Math.PI/2,s(new H(.16,.18,.8),l,n,0,.98,-.05);let m=new z;m.position.set(0,.62,.62),n.add(m),s(new H(.42,.38,.42),c,m,0,.02,.1);let h=s(new U(.11,.13,.16,10),u,m,0,-.04,.36);h.rotation.x=Math.PI/2;for(let e of[-1,1]){let t=s(new fa(.035,.18,6),d,m,e*.15,-.06,.3);t.rotation.x=-.4,s(new fa(.07,.16,4),c,m,e*.16,.26,.02),s(new W(.035,6,4),f,m,e*.14,.1,.31)}for(let[e,t]of[[-.2,.38],[.2,.38],[-.2,-.38],[.2,-.38]]){let i=new z;i.position.set(e,.42,t),s(new U(.07,.06,.42),l,i,0,-.2,0),n.add(i),r.push(i)}return{root:t,legs:r,mats:i,height:1.1,wiggle:a}}function Lp(e,t,n,r){let i=new z,a=r(n.x,n.z);i.position.set(n.x,a,n.z);let o=new V(new fa(2.2,2.6,4),Fp(`#c9a66b`,{flatShading:!0}));o.position.set(-3,1.2,-2.5),o.rotation.y=Math.PI/4,o.castShadow=!0;let s=new V(new _a(.9,1.2),Fp(`#3e2723`,{side:2}));s.position.set(-2.25,.6,-1.75),s.rotation.y=Math.PI/4,i.add(o,s);let c=new V(new U(.06,.08,4.5),Fp(`#5d4037`));c.position.set(2.5,2.25,-3),c.castShadow=!0;let l=document.createElement(`canvas`);l.width=128,l.height=80;let u=l.getContext(`2d`);u.fillStyle=`#111`,u.fillRect(0,0,128,80),u.font=`58px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif`,u.textAlign=`center`,u.textBaseline=`middle`,u.fillText(`☠️`,64,44);let d=new oa(l);d.colorSpace=Ve;let f=new V(new _a(1.4,.9),new ja({map:d,side:2,roughness:.9}));f.position.set(2.5+.72,4,-3),i.add(c,f);let p=Fp(`#8d8d8d`,{flatShading:!0});for(let e=0;e<7;e++){let t=e/7*Math.PI*2,n=new V(new ma(.18),p);n.position.set(Math.cos(t)*.6,.1,Math.sin(t)*.6),i.add(n)}let m=Fp(`#5d4037`);for(let e of[.3,1.9]){let t=new V(new U(.08,.08,.9),m);t.rotation.set(Math.PI/2,e,0),t.position.y=.12,i.add(t)}let h=Fp(`#8d6e4a`);for(let[e,r]of[[-1,-4.5],[-.2,-4.8]]){let a=new V(new U(.35,.35,.8,12),h);a.position.set(e,.4,r),a.castShadow=!0,i.add(a),t.colliders.push({x:n.x+e,z:n.z+r,r:.4,enabled:!0})}e.add(i),t.colliders.push({x:n.x-3,z:n.z-2.5,r:1.8,enabled:!0}),t.colliders.push({x:n.x+2.5,z:n.z-3,r:.2,enabled:!0})}var Rp=class{scene;shots=[];popups=[];sparks=[];bulletGeo=new W(.07,8,6);bulletMat=new fi({color:`#ffe082`});rayMat=new fi({color:`#69f0ae`});sparkGeo=new W(.25,10,8);constructor(e){this.scene=e}shot(e,t,n){let r=new V(this.bulletGeo,n?this.rayMat:this.bulletMat);r.scale.set(n?1.6:1,n?1.6:1,n?5:3),r.position.copy(e),r.lookAt(t),this.scene.add(r),this.shots.push({mesh:r,from:e.clone(),to:t.clone(),t:0,len:e.distanceTo(t)})}spark(e,t=`#fff59d`){let n=new V(this.sparkGeo,new fi({color:t,transparent:!0,opacity:.9,depthWrite:!1}));n.position.copy(e),this.scene.add(n),this.sparks.push({mesh:n,t:0})}number(e,t,n){let r=document.createElement(`canvas`),i=`bold 44px system-ui, sans-serif`,a=r.getContext(`2d`);a.font=i;let o=Math.max(128,Math.ceil(a.measureText(t).width)+24);r.width=o,r.height=64,a=r.getContext(`2d`),a.font=i,a.textAlign=`center`,a.textBaseline=`middle`,a.lineWidth=7,a.strokeStyle=`rgba(0,0,0,0.75)`,a.strokeText(t,o/2,34),a.fillStyle=n,a.fillText(t,o/2,34);let s=new oa(r);s.colorSpace=Ve;let c=new ai(new Gr({map:s,transparent:!0,depthWrite:!1,depthTest:!1}));c.scale.set(o/128,.5,1),c.position.copy(e),c.renderOrder=20,this.scene.add(c),this.popups.push({sprite:c,t:0})}update(e){for(let t=this.shots.length-1;t>=0;t--){let n=this.shots[t];n.t+=e*70/Math.max(1,n.len),n.mesh.position.lerpVectors(n.from,n.to,Math.min(1,n.t)),n.t>=1&&(this.scene.remove(n.mesh),this.shots.splice(t,1))}for(let t=this.sparks.length-1;t>=0;t--){let n=this.sparks[t];n.t+=e/.18,n.mesh.scale.setScalar(.4+n.t),n.mesh.material.opacity=Math.max(0,.9*(1-n.t)),n.t>=1&&(this.scene.remove(n.mesh),n.mesh.material.dispose(),this.sparks.splice(t,1))}for(let t=this.popups.length-1;t>=0;t--){let n=this.popups[t];n.t+=e/.9,n.sprite.position.y+=e*1.2,n.sprite.material.opacity=Math.min(1,2.5*(1-n.t)),n.t>=1&&(this.scene.remove(n.sprite),n.sprite.material.map?.dispose(),n.sprite.material.dispose(),this.popups.splice(t,1))}}},zp=class{scene;groundAt;list=[];camp;views=new Map;rng;barBgMat=new Gr({color:`#000000`,transparent:!0,opacity:.55,depthWrite:!1});constructor(e,t,n,r={},i,a=[],o=null,s=()=>!1){this.scene=e,this.groundAt=i,this.rng=Ff(t.seed*7+3);let c=Uf(t);this.camp=c.camp,c.camp&&Lp(e,n,c.camp,t.heightAt);let l=0;for(let e of[...c.spawns,...a]){if(o&&!If[e.kind].boss&&Math.hypot(e.x-o.x,e.z-o.z)<6||s(e.key))continue;let n=new zf(e.key,e.kind,e.x,e.z,this.rng()*Math.PI*2);If[e.kind].swimY===null&&(n.y=t.heightAt(e.x,e.z));let i=r[e.key];typeof i==`number`&&i>0&&n.setDead(i),this.list.push(n),this.views.set(n,this.makeView(n,l)),(e.kind===`pirata`||e.kind===`capitan`||e.kind===`zombi`)&&l++}}makeView(e,t){let n,r,i=[],a=[],o=[],s;if(e.kind===`pirata`||e.kind===`capitan`)r=new vu(jp(t,e.kind===`capitan`),`destructor`,{classWeapon:!1}),e.kind===`capitan`&&r.setTool(`espada`),n=r.root,s=r.height;else if(e.kind===`zombi`||e.kind===`reyzombi`){let i=Mp(t);e.kind===`reyzombi`&&Object.assign(i,{hat:`corona`,hatColor:`#ffd600`,build:`fuerte`,shirtStyle:`mangaLarga`,shirtColor:`#6a1b9a`}),r=new vu(i,`destructor`,{classWeapon:!1}),n=r.root,s=r.height}else if(e.kind===`ogro`)r=new vu(Np,`destructor`,{classWeapon:!1}),n=r.root,s=r.height;else{let t=Ip(e.kind===`robotron`?`robot`:e.kind===`calavera`?`esqueleto`:e.kind);n=t.root,i=t.legs,a=t.mats,s=t.height,o=t.wiggle}let c=Pp[e.kind];if(c){let e=new z;n.scale.setScalar(c),e.add(n),n=e,s*=c}let l=new ai(this.barBgMat),u=new ai(new Gr({color:`#66bb6a`,depthWrite:!1}));for(let e of[l,u])e.visible=!1,e.renderOrder=15,n.add(e);l.scale.set(.9,.12,1),l.position.y=s+.35,u.position.y=s+.35,this.scene.add(n);let d={c:e,root:n,avatar:r,legs:i,mats:a,height:s,wiggle:o,barBg:l,bar:u,phase:this.rng()*6,dieT:e.alive?-1:99,grab:0};return this.place(d),e.alive||(n.visible=!1),d}get alive(){return this.list.filter(e=>e.alive)}topOf(e){let t=this.views.get(e);return e.def.sea?e.y+(e.kind===`pulpo`?1.3:e.kind===`esqueleto`?1.5:e.kind===`monstruo`?1.6:.2):this.groundAt(e.x,e.z)+t.height*.75}place(e){e.root.position.set(e.c.x,e.c.def.sea?e.c.y:this.groundAt(e.c.x,e.c.z),e.c.z),e.root.rotation.y=e.c.yaw}update(e,t,n,r){let i=[];for(let a of this.list){let o=this.views.get(a),s=Math.hypot(a.x-n.px,a.z-n.pz)>70,c=a.alive,l=s&&a.state===`paseo`?0:a.step(e,n);l>0&&i.push({c:a,damage:l}),a.alive&&!s&&this.separate(a,n),!c&&a.alive&&(o.dieT=-1,o.root.visible=!0,o.root.rotation.z=0,o.avatar?.standUp()),s?o.root.visible=!1:(a.alive&&(o.root.visible=!0),this.animate(o,e,t,r))}return i}separate(e,t){for(let n of this.list){if(n===e||!n.alive)continue;let r=e.x-n.x,i=e.z-n.z,a=e.r+n.r;if(Math.abs(r)>a||Math.abs(i)>a)continue;let o=Math.hypot(r,i);if(o>=a)continue;let s=o||1e-4,c=(a-o)*.5,l=e.x+r/s*c,u=e.z+i/s*c;t.canStep(l,u)&&(e.x=l,e.z=u)}}animate(e,t,n,r){let i=e.c;if(this.place(e),i.alive||(e.dieT<0&&(e.dieT=0),e.dieT+=t,i.def.sea&&i.kind!==`esqueleto`?(e.root.rotation.z=Math.min(1,e.dieT*2)*Math.PI,e.root.position.y+=e.dieT*.5):(e.avatar||(e.root.rotation.z=Math.min(1,e.dieT*3)*Math.PI/2*.95),e.root.position.y-=Math.max(0,e.dieT-1.8)*.6),e.dieT>2.8&&(e.root.visible=!1)),e.avatar)i.attacked&&e.avatar.swing(),(i.kind===`zombi`||i.kind===`reyzombi`)&&i.alive&&e.avatar.shoot(`both`),e.avatar.animate(t,i.alive?i.moving:0,!1,!1,n,!1,!i.alive),e.avatar.hurtGlow(i.hurt/.3);else if(i.kind===`tiburon`){e.phase+=t*(3+7*i.moving),e.wiggle[0].rotation.y=Math.sin(e.phase)*.55,e.root.rotation.z=Math.sin(e.phase*.5)*.06,i.attacked&&(e.phase+=1.5);let n=i.hurt/.3;for(let t of e.mats)t.emissive.setRGB(n,n*.1,0),t.emissiveIntensity=n*.9}else if(i.kind===`monstruo`){e.phase+=t*(2+3*i.moving),i.attacked&&(e.grab=1),e.grab=Math.max(0,e.grab-t*1.5),e.wiggle.forEach((t,n)=>{n===0?(t.rotation.x=-Math.sin(e.grab*Math.PI)*.6,t.position.y=.6+Math.sin(e.phase)*.3):(t.position.y=Math.sin(e.phase-n*.9)*.8,t.position.x=Math.sin(e.phase*.5-n*.6)*.5)});let n=i.hurt/.3;for(let t of e.mats)t.emissive.setRGB(n,n*.1,0),t.emissiveIntensity=n*.9}else if(i.kind===`pulpo`){e.phase+=t*(1.6+3*i.moving),i.attacked&&(e.grab=1),e.grab=Math.max(0,e.grab-t*1.8);let n=i.alive?Math.sin(e.grab*Math.PI):0;e.wiggle.forEach((t,r)=>{let i=Math.floor(r/4),a=r%4;t.rotation.x=(a===0?.9:.35)+Math.sin(e.phase*1.3+i*.8+a*.7)*.28-(a===0?n*.6:n*.25)});let r=i.hurt/.3;for(let t of e.mats)t.emissive.setRGB(r,r*.1,0),t.emissiveIntensity=r*.9}else{i.moving>0&&(e.phase+=t*(i.kind===`cangrejo`?18:i.kind===`robot`?7:10)*(.4+i.moving));let r=e.legs.length===2;e.legs.forEach((t,n)=>{t.rotation.x=i.moving>0?Math.sin(e.phase+(r?n*Math.PI:n*1.7))*(r?.5:.6):0}),i.kind===`lobo`&&(e.wiggle[0].rotation.z=Math.sin(n*6)*.3),i.kind===`escorpion`&&(e.wiggle[0].rotation.x=Math.sin(n*2)*.12+(i.attacked?.6:0)),i.kind===`robot`&&i.alive&&(e.root.rotation.z=i.moving>0?Math.sin(e.phase)*.04:0),i.attacked&&(e.phase+=2);let a=i.hurt/.3;for(let t of e.mats)t.emissive.setRGB(a,a*.1,0),t.emissiveIntensity=a*.9}let a=i.hp/i.def.hp,o=i.alive&&a<1&&r.position.distanceTo(e.root.position)<30;e.barBg.visible=e.bar.visible=o,o&&(e.bar.scale.set(.86*a,.08,1),e.bar.center.set(.5/Math.max(.01,a),.5),e.bar.material.color.set(a>.5?`#66bb6a`:a>.25?`#ffca28`:`#ef5350`))}loot(e){return Rf(e.kind,this.rng())}save(){let e={};for(let t of this.list)t.alive||(e[t.key]=Math.round(t.respawnLeft));return e}nearestEnemy(e,t,n){let r=null,i=n;for(let n of this.list){if(!n.alive||!If[n.kind].enemy)continue;let a=Math.hypot(n.x-e,n.z-t);a<i&&(i=a,r=n)}return r}},Bp=[{t:0,text:`✈️ Vas de viaje en avión sobre el océano…`},{t:3.2,text:`🧢 Pero el piloto tiene una sonrisa muy rara…`},{t:5.4,text:`👹 «¡JA, JA, JA! ¡En realidad soy un OGRO!»`},{t:8,text:`💥 «¡Vamos a estrellarnos en mi océano!»`},{t:10.6,text:`🌊 ¡¡CATAPLUM!!`}],Vp=e=>new ja({color:e,roughness:.6});function Hp(){let e=new z,t=Vp(`#f5f5f5`),n=Vp(`#e53935`),r=new V(new U(1,.7,9,18),t);r.rotation.x=Math.PI/2,e.add(r);let i=new V(new W(1,18,12),t);i.scale.set(1,1,1.3),i.position.z=4.5,e.add(i);let a=new V(new U(1.02,.85,4,18,1,!0),n);a.rotation.x=Math.PI/2,a.position.z=-1,e.add(a);let o=new V(new H(12,.18,2),t);o.position.set(0,-.3,.6),e.add(o);let s=new V(new H(4,.15,1.2),t);s.position.set(0,.1,-4.2),e.add(s);let c=new V(new H(.15,2,1.4),n);c.position.set(0,1.1,-4.2),e.add(c);let l=new V(new W(1.05,16,10,0,Math.PI*2,0,Math.PI/2),new ja({color:`#81d4fa`,transparent:!0,opacity:.18,depthWrite:!1}));l.position.set(0,.7,2.6),e.add(l);let u=new V(new H(3.2,.25,.08),Vp(`#424242`));u.position.z=5.85,u.name=`prop`,e.add(u);for(let t of[-3.5,3.5]){let r=new V(new U(.4,.4,1.4,12),n);r.rotation.x=Math.PI/2,r.position.set(t,-.55,1),e.add(r)}return e}var Up=class{scene=new Bn;camera=new mo(50,1,.1,3e3);plane=Hp();pilot=new vu(Np,`destructor`,{classWeapon:!1});sea;splash;clouds=new z;root=document.createElement(`div`);caption=document.createElement(`div`);t=0;step=-1;onDone=null;constructor(e){this.scene.background=new B(`#8fd3ff`),this.scene.fog=new zn(`#8fd3ff`,120,900),this.scene.add(new to(`#ffffff`,`#2b6c8f`,1.6));let t=new yo(`#fff3d6`,2.2);t.position.set(30,60,20),this.scene.add(t),this.sea=new V(new _a(4e3,4e3),new ja({color:`#1e88c9`,roughness:.35})),this.sea.rotation.x=-Math.PI/2,this.scene.add(this.sea);let n=new ja({color:`#ffffff`,roughness:1});for(let e=0;e<40;e++){let e=new z;for(let t=0;t<4;t++){let r=new V(new W(4+Math.random()*4,10,8),n);r.position.set(t*5-8,Math.random()*2,Math.random()*4),e.add(r)}e.position.set((Math.random()-.5)*300,50+Math.random()*30,-Math.random()*1200+200),this.clouds.add(e)}this.scene.add(this.clouds),this.pilot.root.scale.setScalar(.62),this.pilot.root.position.set(0,.25,2.6),this.plane.add(this.pilot.root),this.scene.add(this.plane),this.splash=new V(new W(1,20,12,0,Math.PI*2,0,Math.PI/2),new ja({color:`#e1f5fe`,transparent:!0,opacity:.9})),this.splash.visible=!1,this.scene.add(this.splash),this.root.className=`intro hidden`,this.caption.className=`intro-caption`;let r=document.createElement(`button`);r.className=`btn small intro-skip`,r.textContent=`Saltar ⏭`,r.addEventListener(`click`,()=>this.finish()),this.root.append(this.caption,r),e.append(this.root)}get playing(){return!!this.onDone}play(e){this.onDone=e,this.t=0,this.step=-1,this.splash.visible=!1,this.root.classList.remove(`hidden`,`white`),this.update(0)}finish(){let e=this.onDone;e&&(this.onDone=null,this.root.classList.add(`hidden`),e())}update(e){if(!this.onDone)return;this.t+=e;let t=this.t,n=0;for(;n+1<Bp.length&&Bp[n+1].t<=t;)n++;n!==this.step&&(this.step=n,this.caption.textContent=Bp[n].text);let r=this.plane;r.getObjectByName(`prop`).rotation.z+=e*40;let i=jt.clamp((t-8)/2.6,0,1);r.position.set(Math.sin(t*.6)*2,60-i*i*60+Math.sin(t*1.3)*.6,t*35-300),r.rotation.set(i*.9,0,Math.sin(t*.6)*.12+i*Math.sin(t*9)*.25),t>5.4&&t<8&&Math.floor(t*4)%2==0&&this.pilot.swing(),this.pilot.root.position.y=.25+(t>5.4&&t<8?Math.abs(Math.sin(t*14))*.12:0),this.pilot.animate(e,0,!1,!1,t);let a=this.camera,o=r.position,s=t>=3&&t<8;if(t<3?a.position.set(o.x+14,o.y+5,o.z-22):s?a.position.set(o.x+1.2,o.y+1.9,o.z+6.6):a.position.set(o.x+34,Math.max(8,o.y+10),o.z+10),a.lookAt(o.x,o.y+(s?1.2:0),o.z+(s?2.6:0)),t>10.6){this.splash.visible=!0;let e=(t-10.6)/1.4;this.splash.position.set(o.x,0,o.z),this.splash.scale.set(4+e*18,3+e*22,4+e*18),this.splash.material.opacity=Math.max(0,.9-e*.4),r.visible=!1,this.root.classList.add(`white`)}else r.visible=!0;t>=13&&this.finish()}render(e){let t=e.domElement.clientWidth||window.innerWidth,n=e.domElement.clientHeight||window.innerHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),e.render(this.scene,this.camera)}};function Wp(e){let t=0;for(let n of e)/^-?\d+,-?\d+$/.test(n)&&t++;return Math.min(5,t)}function Gp(e){return Wp(e)>=5}function Kp(e,t,n,r,i){let a=e-n,o=t-r,s=Math.hypot(a,o),c=i+100;if(s>=c)return null;let l=s>.01?1/s:0,u=s>.01?a*l:1,d=s>.01?o*l:0;return{x:n+u*(c+2),z:r+d*(c+2)}}var qp=2.8,Jp=e=>Math.floor(e/3),Yp=e=>(e+.5)*3,Xp=(e,t)=>`${Jp(e)},${Jp(t)}`;function Zp(e,t,n,r,i=1.8){let a=Math.sin(r),o=Math.cos(r);if(e===`techo`)return{x:Yp(Jp(t)),z:Yp(Jp(n)),r:0};if(e===`suelo`){let e=t+a*2.4,r=n+o*2.4;return{x:Yp(Jp(e)),z:Yp(Jp(r)),r:0}}if(e===`pared`||e===`puerta`){let e=t+a*1.6,r=n+o*1.6;return Math.abs(a)>Math.abs(o)?{x:Math.round(e/3)*3,z:Yp(Jp(r)),r:Math.PI/2}:{x:Yp(Jp(e)),z:Math.round(r/3)*3,r:0}}let s=Math.round(r/(Math.PI/2))*(Math.PI/2);return{x:t+a*i,z:n+o*i,r:s+(e===`cama`?Math.PI/2:Math.PI)}}function Qp(e,t,n,r,i){return{x:e+r*Math.cos(n)+i*Math.sin(n),z:t-r*Math.sin(n)+i*Math.cos(n)}}function $p(e){switch(e){case`pared`:return[-1.2,-.6,0,.6,1.2].map(e=>[e,0,.35,!1]);case`puerta`:return[[-1.2,0,.32,!1],[-.85,0,.3,!1],[.85,0,.3,!1],[1.2,0,.32,!1],[-.3,0,.32,!0],[.3,0,.32,!0]];case`baul`:return[[0,0,.55,!1]];case`cama`:return[[0,-.6,.55,!1],[0,.5,.55,!1]];default:return[]}}function em(t,n,r){let i=document.createElement(`canvas`);i.width=i.height=128;let a=i.getContext(`2d`);a.fillStyle=t,a.fillRect(0,0,128,128);for(let e=0;e<4;e++)a.fillStyle=`rgba(0,0,0,${.04+e%2*.05})`,r?a.fillRect(e*32,0,32,128):a.fillRect(0,e*32,128,32),a.fillStyle=n,r?a.fillRect(e*32,0,3,128):a.fillRect(0,e*32,128,3);let o=new oa(i);return o.colorSpace=Ve,o.wrapS=o.wrapT=e,o}var tm=class{scene;island;world;pieces=[];floors=new Map;geo;mat;ghost=new z;ghostKey=``;ghostOk=new fi({color:`#4cff7a`,transparent:!0,opacity:.45,depthWrite:!1});ghostBad=new fi({color:`#ff4c4c`,transparent:!0,opacity:.45,depthWrite:!1});constructor(e,t,n,r=[]){this.scene=e,this.island=t,this.world=n;let i=em(`#b7834f`,`#7a5230`,!0);i.repeat.set(3,1.4);let a=em(`#c08d57`,`#7a5230`,!1);a.repeat.set(1.5,1.5);let o=e=>new ja({roughness:.85,...e});this.mat={pared:o({map:i}),suelo:o({map:a}),viga:o({color:`#6b4524`}),paja:o({color:`#d9b45a`,flatShading:!0}),paja2:o({color:`#c79a3f`,flatShading:!0}),baul:o({color:`#8d5a2b`}),hierro:o({color:`#5d5d5d`,metalness:.6,roughness:.4}),colchon:o({color:`#e3f2fd`}),manta:o({color:`#e57373`}),pomo:o({color:`#ffca28`,metalness:.7,roughness:.3})},this.geo={pared:new H(3,3.8,.2).translate(0,3.8/2-1,0),viga:new H(3.1,.16,.28),lado:new H(.9,3.8,.2).translate(0,3.8/2-1,0),dintel:new H(1.2,.6,.2),hoja:new H(1.18,2.18,.1).translate(.6,1.09,0),pomo:new W(.06,8,6),suelo:new H(3,.3,3).translate(0,-.15,0),poste:new U(.12,.14,1,6).translate(0,-.5,0),techo1:new H(3.4,.2,3.4),techo2:new H(2.5,.2,2.5),techo3:new H(1.5,.2,1.5),baul:new H(1,.55,.6).translate(0,.275,0),tapa:new H(1.04,.16,.64).translate(0,.08,0),banda:new H(.08,.74,.66).translate(0,.37,0),cama:new H(1.2,.35,2.3).translate(0,.175,0),colchon:new H(1.08,.16,2.1).translate(0,.43,0),manta:new H(1.12,.18,1.3).translate(0,.45,.35),almohada:new H(.8,.14,.4).translate(0,.55,-.8),cabecero:new H(1.2,.8,.1).translate(0,.4,-1.15)},this.ghost.visible=!1,e.add(this.ghost);let s=[...r].sort((e,t)=>(e.k===`suelo`?0:1)-(t.k===`suelo`?0:1));for(let e of s){let t=this.place(e.k,e.x,e.z,e.r,e.y);e.open&&t.kind===`puerta`&&this.toggleDoor(t),e.items&&t.inv&&t.inv.load(e.items)}}terrain(e,t){return this.island.heightAt(e,t)}groundAt(e,t){let n=this.terrain(e,t),r=this.floors.get(Xp(e,t));return r?Math.max(n,r.y):n}heightFor(e,t,n,r){if(e===`suelo`){let e=-1/0;for(let[r,i]of[[0,0],[-1,-1],[1,-1],[-1,1],[1,1],[0,1],[0,-1],[1,0],[-1,0]])e=Math.max(e,this.terrain(t+r*1.4,n+i*1.4));return Math.max(e,.2)+.12}if(e===`techo`){let e=this.floors.get(Xp(t,n));if(e)return e.y+qp;let r=-1/0;for(let[e,i]of[[0,0],[-1,-1],[1,-1],[-1,1],[1,1]])r=Math.max(r,this.terrain(t+e*1.4,n+i*1.4));return r+qp}if(e===`pared`||e===`puerta`){let e=-1/0;for(let i of[-1.3,0,1.3])for(let a of[-.4,.4]){let o=Qp(t,n,r,i,a);e=Math.max(e,this.groundAt(o.x,o.z))}return e}return this.groundAt(t,n)}check(e,t,n,r){if(this.pieces.length>=150)return`¡Has construido muchísimo! Desmonta algo antes`;let i=e=>Math.hypot(e.x-t,e.z-n)<.3;if(e===`suelo`){if(this.floors.has(Xp(t,n)))return`Ya hay un suelo aquí`;let e=1/0;for(let[r,i]of[[-1,-1],[1,-1],[-1,1],[1,1],[0,0]])e=Math.min(e,this.terrain(t+r*1.4,n+i*1.4));return e<-2.5?`Aquí el agua es muy honda`:this.heightFor(`suelo`,t,n,0)-e>4?`Hay demasiada cuesta aquí`:null}if(e===`techo`)return this.pieces.some(e=>e.kind===`techo`&&i(e))?`Ya hay un techo aquí`:this.terrain(t,n)<-2.5&&!this.floors.has(Xp(t,n))?`Aquí el agua es muy honda`:null;if(e===`pared`||e===`puerta`){if(this.pieces.some(e=>(e.kind===`pared`||e.kind===`puerta`)&&i(e)&&Math.abs(Math.sin(e.r-r))<.1))return`Ya hay una pared aquí`;let e=Qp(t,n,r,-1.4,0),a=Qp(t,n,r,1.4,0);return this.groundAt(e.x,e.z)<-2.5||this.groundAt(a.x,a.z)<-2.5?`Aquí el agua es muy honda`:null}return this.groundAt(t,n)<.05?`No se puede poner en el agua`:this.pieces.some(e=>(e.kind===`baul`||e.kind===`cama`)&&Math.hypot(e.x-t,e.z-n)<1.1)||this.world.colliders.some(e=>e.enabled&&Math.hypot(e.x-t,e.z-n)<e.r+.35)?`No cabe aquí`:null}mesh(e,t,n,r=0,i=0,a=0){let o=new V(this.geo[t],n);return o.position.set(r,i,a),o.castShadow=!0,o.receiveShadow=!0,e.add(o),o}model(e,t,n,r,i,a){let o=e=>n??this.mat[e],s=[],c;switch(e){case`suelo`:this.mesh(t,`suelo`,o(`suelo`));for(let[e,n]of[[-1.35,-1.35],[1.35,-1.35],[-1.35,1.35],[1.35,1.35]]){let s=a-this.terrain(r+e,i+n)+.4;if(s>.5){let r=this.mesh(t,`poste`,o(`viga`),e,-.2,n);r.scale.y=s}}break;case`pared`:s.push(this.mesh(t,`pared`,o(`pared`))),this.mesh(t,`viga`,o(`viga`),0,qp,0);break;case`puerta`:s.push(this.mesh(t,`lado`,o(`pared`),-1.05,0,0)),s.push(this.mesh(t,`lado`,o(`pared`),1.05,0,0)),this.mesh(t,`dintel`,o(`pared`),0,2.5,0),this.mesh(t,`viga`,o(`viga`),0,qp,0),c=new z,c.position.set(-.6,0,0),this.mesh(c,`hoja`,o(`viga`)),this.mesh(c,`pomo`,o(`pomo`),1,1.05,.08),t.add(c);break;case`techo`:s.push(this.mesh(t,`techo1`,o(`paja`),0,.1,0)),this.mesh(t,`techo2`,o(`paja2`),0,.3,0),this.mesh(t,`techo3`,o(`paja`),0,.5,0);break;case`baul`:this.mesh(t,`baul`,o(`baul`)),this.mesh(t,`tapa`,o(`baul`),0,.55,0);for(let e of[-.32,.32])this.mesh(t,`banda`,o(`hierro`),e,0,0);break;case`cama`:this.mesh(t,`cama`,o(`viga`)),this.mesh(t,`colchon`,o(`colchon`)),this.mesh(t,`manta`,o(`manta`)),this.mesh(t,`almohada`,o(`colchon`)),this.mesh(t,`cabecero`,o(`viga`))}return{leaf:c,blockers:s}}place(e,t,n,r,i=this.heightFor(e,t,n,r)){let a=new z;a.position.set(t,i,n),a.rotation.y=r;let{leaf:o,blockers:s}=this.model(e,a,null,t,n,i);this.scene.add(a);let c=$p(e).map(([e,i,a,o])=>{let s=Qp(t,n,r,e,i),c={x:s.x,z:s.z,r:a,enabled:!0};return this.world.colliders.push(c),{c,leaf:o}});this.world.cameraBlockers.push(...s);let l={kind:e,x:t,z:n,r,y:i,obj:a,colliders:c,blockers:s,open:!1,leaf:o};return e===`baul`&&(l.inv=new id),e===`suelo`&&this.floors.set(Xp(t,n),l),this.pieces.push(l),l}remove(e){this.scene.remove(e.obj);for(let{c:t}of e.colliders){let e=this.world.colliders.indexOf(t);e>=0&&this.world.colliders.splice(e,1)}for(let t of e.blockers){let e=this.world.cameraBlockers.indexOf(t);e>=0&&this.world.cameraBlockers.splice(e,1)}e.kind===`suelo`&&this.floors.delete(Xp(e.x,e.z)),this.pieces=this.pieces.filter(t=>t!==e)}toggleDoor(e){e.open=!e.open;for(let{c:t,leaf:n}of e.colliders)n&&(t.enabled=!e.open)}distTo(e,t,n){if(e.kind===`pared`||e.kind===`puerta`){let r=t-e.x,i=n-e.z,a=r*Math.cos(e.r)-i*Math.sin(e.r),o=r*Math.sin(e.r)+i*Math.cos(e.r);return Math.hypot(Math.max(0,Math.abs(a)-1.5),o)}return e.kind===`suelo`||e.kind===`techo`?Math.max(0,Math.max(Math.abs(t-e.x),Math.abs(n-e.z))-3/2)+(e.kind===`suelo`?1.2:.9):Math.hypot(t-e.x,n-e.z)-.6}nearest(e,t,n,r){let i=null,a=1/0;for(let o of this.pieces){let s=o.kind===`puerta`||o.kind===`baul`||o.kind===`cama`;if(!n&&!s)continue;let c=this.distTo(o,e,t);if(c>1.5)continue;let l=c;if(r!==void 0&&o.kind!==`suelo`&&o.kind!==`techo`){let n=o.x-e,i=o.z-t,a=Math.hypot(n,i);a>.05&&(l+=(1-(n*Math.sin(r)+i*Math.cos(r))/a)*.6)}l>=a||(a=l,i={piece:o,dist:c,action:n?`desmontar`:o.kind===`puerta`?`puerta`:o.kind===`baul`?`baul`:`dormir`})}return i}showGhost(e,t=0,n=0,r=0,i=!0){if(!e){this.ghost.visible=!1;return}let a=this.heightFor(e,t,n,r),o=e===`suelo`?`${e}${t},${n}`:e;o!==this.ghostKey&&(this.ghost.clear(),this.ghostKey=o,this.model(e,this.ghost,this.ghostOk,t,n,a));let s=i?this.ghostOk:this.ghostBad;this.ghost.traverse(e=>{e.isMesh&&(e.material=s,e.castShadow=!1)}),this.ghost.position.set(t,a+.02,n),this.ghost.rotation.y=r,this.ghost.visible=!0}update(e){for(let t of this.pieces)if(t.leaf){let n=t.open?-1.75:0;t.leaf.rotation.y+=(n-t.leaf.rotation.y)*(1-Math.exp(-8*e))}}save(){return this.pieces.map(e=>{let t={k:e.kind,x:e.x,z:e.z,r:e.r,y:e.y};return e.kind===`puerta`&&e.open&&(t.open=!0),e.inv&&(t.items=e.inv.toJSON()),t})}};function nm(e){let t=(e-6)/24*Math.PI*2,n=Math.cos(t),r=Math.sin(t),i=.35,a=Math.hypot(n,r,i);return{x:n/a,y:r/a,z:i/a}}function rm(e){return Mf(-.12,.2,nm(e).y)}function im(e){let t=(e%24+24)%24;return t<6||t>=18}function am(e,t,n){let r=e+(im(e)?12/180:12/480)*n,i=t;for(;r>=24;)r-=24,i+=1;return{hour:r,day:i}}function om(e){let t=(e%24+24)%24,n=Math.floor(t),r=Math.floor((t-n)*60);return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`}var sm={x:-15,z:-13,r:11,h:11},cm={x:-5,z:-4,r:4.5,level:1.5},lm={x:9,z:3},um={x:20,z:-15},dm={x:lm.x,z:lm.z+2.5,r:9,h:2.6};function fm(e,t){let n=Math.hypot(e,t),r=Math.atan2(t,e),i=1-n/(44*(.82+.3*Pf(Math.cos(r)*1.6+5,Math.sin(r)*1.6+5,3,7))),a=-7+7.6*Mf(-.45,.05,i);a+=2.2*Mf(.05,.45,i);let o=Pf(e*.06,t*.06,4,3);a+=(o-.45)*3.2*Mf(.1,.5,i);let s=Math.hypot(e-sm.x,t-sm.z)/sm.r;a+=sm.h*Math.exp(-s*s*1.6)*Mf(0,.3,i);let c=Math.hypot(e-cm.x,t-cm.z);if(c<cm.r+3){let e=Mf(cm.r+3,cm.r-1.2,c);a=a*(1-e)+(cm.level-.9)*e}let l=Math.hypot(e-dm.x,t-dm.z);if(l<dm.r){let e=Mf(dm.r,dm.r*.45,l);a=a*(1-e)+dm.h*e}let u=Math.hypot(e-um.x,t-um.z);if(u<6){let e=Mf(6,3,u);a=a*(1-e)+1.4*e}return a}var pm={selva:{name:`Isla de la Selva`,icon:`🌴`,color:`#43a047`},volcan:{name:`Isla del Volcán`,icon:`🌋`,color:`#795548`},nieve:{name:`Isla Nevada`,icon:`❄️`,color:`#e8f1f8`},desierto:{name:`Isla del Desierto`,icon:`🌵`,color:`#f0cf7a`},pantano:{name:`Isla del Pantano`,icon:`🐸`,color:`#6b8e4e`},cristal:{name:`Isla de Cristal`,icon:`💎`,color:`#b39ddb`},pirata:{name:`Isla Pirata`,icon:`☠️`,color:`#c9a86a`},misteriosa:{name:`Isla Misteriosa`,icon:`💀`,color:`#5e35b1`}},mm={kind:`magica`,seed:0,name:`Isla Mágica`,size:140,bound:110,radius:50,heightAt:fm,spawn:{x:lm.x,z:lm.z+3.5,yaw:Math.PI/2}};function hm(e,t,n){let r=.5,i=e(t+r,n)-e(t-r,n),a=e(t,n+r)-e(t,n-r);return Math.hypot(i,a)/(2*r)}function gm(){return Math.floor(Math.random()*1e6)+1}function _m(e){let t=Ff(e),n=e%9973,r=58+t()*14,i=Array.from({length:3+Math.floor(t()*3)},()=>{let e=t()*Math.PI*2,n=t()*r*.45;return{x:Math.cos(e)*n,z:Math.sin(e)*n,r:8+t()*10,h:4+t()*9}}),a=(e,t)=>{let a=Math.hypot(e,t),o=Math.atan2(t,e),s=1-a/(r*(.78+.35*Pf(Math.cos(o)*1.4+n,Math.sin(o)*1.4+n,3,n))),c=-8+8.6*Mf(-.4,.06,s);c+=1.8*Mf(.06,.4,s),c+=(Pf(e*.05+n,t*.05-n,4,n+3)-.45)*4*Mf(.1,.5,s);for(let n of i){let r=Math.hypot(e-n.x,t-n.z)/n.r;c+=n.h*Math.exp(-r*r*1.6)*Mf(0,.3,s)}return c},o=t()*Math.PI*2,s=Math.cos(o),c=Math.sin(o),l=r*1.4;for(;l>5&&a(s*l,c*l)<.7;)l-=.5;let u=s*(l-3),d=c*(l-3),f=Math.atan2(-s,-c),p=-c,m=s,h=u+p*9+s*2,g=d+m*9+c*2;for(let e=0;e<20&&a(h,g)<.2;e++)h-=s*.8,g-=c*.8;return{kind:`selva`,seed:e,name:`Isla de la Selva`,size:Math.ceil(r*2.9),bound:Math.ceil(r*1.13+55),radius:r*1.13,heightAt:a,spawn:{x:u,z:d,yaw:f},wreck:{x:h,z:g,rot:o+.6}}}var vm={selva:{r:54,rr:14,plateau:1.8,bumps:4,hills:1},pirata:{r:46,rr:12,plateau:1.6,bumps:3,hills:.7},volcan:{r:54,rr:10,plateau:1.4,bumps:3,hills:.4},nieve:{r:50,rr:14,plateau:2.2,bumps:5,hills:1.5},desierto:{r:50,rr:16,plateau:1.2,bumps:2,hills:.35},pantano:{r:54,rr:12,plateau:.35,bumps:1,hills:.12},cristal:{r:44,rr:12,plateau:1.8,bumps:4,hills:1.1},misteriosa:{r:50,rr:6,plateau:2.2,bumps:3,hills:.7}};function ym(e,t){let n=vm[t],r=Ff(e),i=e%9973,a=n.r+r()*n.rr,o=Array.from({length:3+Math.floor(r()*3)},()=>{let e=r()*Math.PI*2,t=r()*a*.45;return{x:Math.cos(e)*t,z:Math.sin(e)*t,r:8+r()*10,h:(4+r()*9)*n.hills}}),s=t===`volcan`?18+r()*4:0,c=(e,r)=>{let c=Math.hypot(e,r),l=Math.atan2(r,e),u=1-c/(a*(.78+.35*Pf(Math.cos(l)*1.4+i,Math.sin(l)*1.4+i,3,i))),d=-8+8.6*Mf(-.4,.06,u);d+=n.plateau*Mf(.06,.4,u),d+=(Pf(e*.05+i,r*.05-i,4,i+3)-.45)*n.bumps*Mf(.1,.5,u);for(let t of o){let n=Math.hypot(e-t.x,r-t.z)/t.r;d+=t.h*Math.exp(-n*n*1.6)*Mf(0,.3,u)}if(t===`desierto`)d+=.9*Math.sin(e*.11+Pf(e*.03,r*.03,2,i)*5)*Mf(.12,.4,u);else if(t===`pantano`){let t=Pf(e*.07+i,r*.07,3,i+9);d-=1.4*Mf(.55,.66,t)*Mf(.15,.35,u)}else if(t===`volcan`){let e=c/(a*.62);d+=s*Math.max(0,1-e)**1.25*Mf(0,.2,u),c<8.5&&(d-=10*Mf(8.5,3.5,c))}else t===`misteriosa`&&(d+=(5-d)*Mf(20,11,c));return d},l=r()*Math.PI*2,u=Math.cos(l),d=Math.sin(l),f=a*1.4;for(;f>5&&c(u*f,d*f)<.7;)f-=.5;let p={kind:t,seed:e,name:pm[t].name,size:Math.ceil(a*2.9),bound:Math.ceil(a*1.13+55),radius:a*1.13,heightAt:c,spawn:{x:u*(f-3),z:d*(f-3),yaw:Math.atan2(-u,-d)}};return t===`volcan`&&(p.crater={x:0,z:0,r:5.5,y:c(0,0)+1.2}),p}var bm=(e,t={})=>new ja({color:e,roughness:.8,...t});function xm(e,t,n){let r=new H(t,n,e,4,2,12),i=r.attributes.position;for(let t=0;t<i.count;t++){let r=i.getZ(t)/(e/2),a=i.getY(t),o=i.getX(t);o*=1-Mf(.25,1,r)*.9,o*=r<-.75?.88:1,a<0&&(o*=.62),i.setX(t,o),a>0&&i.setY(t,a+Mf(.4,1,r)*n*.35)}return r.computeVertexNormals(),r}function Sm(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);for(let e=0;e<6;e++)t.fillStyle=e%2?`#ffffff`:`#e53935`,t.fillRect(0,e*64/6,64,64/6+1);let n=new oa(e);return n.colorSpace=Ve,n}function Cm(e,t,n){let r=new _a(e,t,6,6),i=r.attributes.position;for(let t=0;t<i.count;t++){let r=i.getX(t)/e+.5;i.setZ(t,Math.sin(r*Math.PI)*n)}return r.computeVertexNormals(),r}function wm(e,t){let n=new z,r=(e,t,r,i,a,o=0,s=0,c=0)=>{let l=new V(e,t);return l.position.set(r,i,a),l.rotation.set(o,s,c),l.castShadow=!0,l.receiveShadow=!0,n.add(l),l},i=bm(`#8d6238`,{flatShading:!0}),a=bm(`#5d3e22`,{flatShading:!0}),o=bm(`#d8c38f`);if(e===`balsa`){let e=new U(.21,.21,3,8).rotateX(Math.PI/2);for(let t=0;t<5;t++)r(e,t%2?i:a,-.84+t*.42,.05,t%2*.12-.06);let t=new H(2.1,.08,.25);for(let e of[-1.05,1.05])r(t,a,0,.27,e);for(let e of[-1.05,1.05])for(let t of[-.6,.6])r(new ba(.2,.04,5,10),o,t,.22,e,0,Math.PI/2,0);return r(new U(.05,.06,2.4,6),a,0,1.3,.6),r(Cm(1.3,1.5,.25),bm(`#5aa83f`,{side:2}),0,1.6,.68),n}if(e===`barca`){let e=r(xm(4.4,1.7,.7),bm(`#2f80c8`,{flatShading:!0}),0,0,0);e.position.y=-.05,r(new H(1.4,.06,3.6),i,0,.22,-.1);for(let e of[-1,1])r(new H(.08,.1,3.3),bm(`#ffffff`),e*.78,.3,-.2);for(let e of[-.9,.5])r(new H(1.45,.08,.35),a,0,.4,e);let t=new U(.035,.035,2.4,5).rotateZ(Math.PI/2);for(let e of[-1,1])r(t,i,e*1.15,.45,-.2,0,0,e*.25),r(new H(.5,.04,.2),i,e*2.25,.2,-.2,0,0,e*.25);return n}let s=t.has(`vela`),c=t.has(`timon`);r(xm(8,3,1.7),bm(`#6d4527`,{flatShading:!0}),0,.05,0),r(new H(2.6,.08,7),i,0,.92,-.2);for(let e of[-1,1])r(new H(.1,.35,6.2),bm(`#f5f5f5`),e*1.33,1.1,-.4);r(new H(2.2,1.2,1.15),bm(`#a1714a`,{flatShading:!0}),0,1.55,-3.3),r(new H(2.5,.15,1.45),a,0,2.2,-3.3);for(let e of[-1,1])r(new da(.2,12),bm(`#bfe6ff`,{emissive:`#3a6a8a`,emissiveIntensity:.4}),e*1.11,1.6,-3.3,0,e*Math.PI/2,0);r(new U(.11,.14,s?7.5:6,8),a,0,s?4.6:3.9,.6),r(new U(.06,.06,s?3.6:2.8,6).rotateZ(Math.PI/2),a,0,s?7.6:6.1,.65);let l=s?bm(`#ffffff`,{map:Sm(),side:2}):bm(`#f4ecd8`,{side:2});r(s?Cm(3.4,4.6,.6):Cm(2.6,3.4,.45),l,0,s?5.25:4.35,.8),s&&(r(new U(.05,.05,3,6).rotateX(-.9),a,0,2.2,3.4),r(Cm(1.8,2.4,.3),l,0,2.7,2.6,-.2,0,0)),r(new _a(.9,.55),bm(c?`#ffd600`:`#1e88e5`,{side:2}),.48,s?8.2:6.8,.6,0,Math.PI/2,0);let u=c?bm(`#ffca28`,{metalness:.7,roughness:.3,emissive:`#5a4200`,emissiveIntensity:.3}):a;r(new U(.08,.08,.9,6),a,0,1.4,-1.45);let d=r(new ba(.42,.05,6,16),u,0,1.9,-1.4);for(let e=0;e<4;e++){let t=new V(new U(.025,.025,1.05,4),u);t.rotation.z=e/4*Math.PI,d.add(t)}return c&&r(new W(.18,10,8),new fi({color:`#fff3c4`}),0,2.6,3.4),n}var Tm=class e{scene;views=new Map;constructor(e){this.scene=e}static bob(e,t){return Math.sin(t*1.5+e.x*.13+e.z*.07)*.07}update(t,n,r,i){for(let[e,n]of this.views)t.includes(e)||(this.scene.remove(n.g),this.views.delete(e));for(let a of t){let t=a.x-n,o=a.z-r,s=Math.hypot(t,o)>700,c=[...a.ups].sort().join(`,`),l=this.views.get(a);if(l&&l.ups!==c&&(this.scene.remove(l.g),this.views.delete(a),l=void 0),l||(l={g:wm(a.kind,a.ups),ups:c},this.scene.add(l.g),this.views.set(a,l)),l.g.visible=!s,s)continue;let u=Math.sin(i*1.1+a.x*.2)*(a.kind===`barco`?.025:.05);l.g.position.set(t,e.bob(a,i),o),l.g.rotation.set(Math.sin(i*.9+a.z*.2)*.03-a.speed*.004,a.yaw,u)}}},Em=class e extends V{constructor(){let t=e.SkyShader,n=new ka({name:t.name,uniforms:Ea.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:1,depthWrite:!1});super(new H(1,1,1),n),this.isSky=!0}};Em.SkyShader={name:`SkyShader`,uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new R},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function Dm(e,t,n){return new ka({fog:!0,side:2,uniforms:Ea.merge([G.fog,{uTime:{value:0},uDepth:{value:e},uWorldSize:{value:t},uSunDir:{value:n.clone().normalize()},uDeep:{value:new B(`#0b5f8a`)},uShallow:{value:new B(`#33d6c8`)},uSky:{value:new B(`#bfe6ff`)},uLight:{value:1}}]),vertexShader:`
      uniform float uTime;
      varying vec3 vWorld;
      varying vec3 vNormalW;
      #include <fog_pars_vertex>
      vec3 wave(vec2 p, vec2 dir, float freq, float amp, float speed) {
        float ph = dot(dir, p) * freq + uTime * speed;
        return vec3(sin(ph) * amp, cos(ph) * amp * freq * dir.x, cos(ph) * amp * freq * dir.y);
      }
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vec3 a = wave(wp.xz, normalize(vec2(1.0, 0.3)), 0.18, 0.16, 1.1);
        vec3 b = wave(wp.xz, normalize(vec2(-0.4, 1.0)), 0.31, 0.08, 1.7);
        vec3 c = wave(wp.xz, normalize(vec2(0.7, -0.8)), 0.55, 0.04, 2.3);
        wp.y += a.x + b.x + c.x;
        vNormalW = normalize(vec3(-(a.y + b.y + c.y), 1.0, -(a.z + b.z + c.z)));
        vWorld = wp.xyz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform sampler2D uDepth;
      uniform float uWorldSize;
      uniform vec3 uSunDir;
      uniform vec3 uDeep;
      uniform vec3 uShallow;
      uniform vec3 uSky;
      uniform float uLight;
      varying vec3 vWorld;
      varying vec3 vNormalW;
      #include <fog_pars_fragment>
      void main() {
        vec2 uv = vWorld.xz / uWorldSize + 0.5;
        float inside = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
        float depth = mix(10.0, texture2D(uDepth, uv).r * 10.0, inside);
        vec3 N = normalize(vNormalW);
        vec3 V = normalize(cameraPosition - vWorld);
        vec3 col = mix(uShallow, uDeep, smoothstep(0.0, 5.5, depth));
        float fres = pow(1.0 - max(dot(N, V), 0.0), 3.0);
        col = mix(col, uSky, fres * 0.55);
        vec3 H = normalize(V + uSunDir);
        col += vec3(1.0, 0.95, 0.8) * pow(max(dot(N, H), 0.0), 140.0) * 1.6;
        float shore = 1.0 - smoothstep(0.0, 0.9, depth);
        float bands = sin(depth * 16.0 - uTime * 2.2 + sin(vWorld.x * 0.4) * 1.5) * 0.5 + 0.5;
        float foam = clamp(shore * smoothstep(0.55, 0.95, bands + shore * 0.5) + (1.0 - smoothstep(0.0, 0.12, depth)), 0.0, 1.0);
        col = mix(col, vec3(1.0), foam * 0.85);
        if (!gl_FrontFacing) {
          // visto desde abajo: un techo de luz que se mueve
          float ripple = sin(vWorld.x * 0.9 + uTime * 1.3) * sin(vWorld.z * 0.8 - uTime * 1.1);
          col = mix(vec3(0.3, 0.72, 0.86), vec3(0.85, 0.98, 1.0), 0.35 + 0.25 * ripple);
        }
        col *= uLight;
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }
    `})}function Om(){return new ka({fog:!0,transparent:!0,depthWrite:!1,side:2,uniforms:Ea.merge([G.fog,{uTime:{value:0}}]),vertexShader:`
      varying vec2 vUv;
      #include <fog_pars_vertex>
      void main() {
        vUv = uv;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }
    `,fragmentShader:`
      uniform float uTime;
      varying vec2 vUv;
      #include <fog_pars_fragment>
      void main() {
        float s = sin(vUv.y * 40.0 - uTime * 9.0 + sin(vUv.x * 12.0) * 2.0) * 0.5 + 0.5;
        float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
        vec3 col = mix(vec3(0.25, 0.75, 0.95), vec3(0.95, 1.0, 1.0), smoothstep(0.55, 0.95, s));
        gl_FragColor = vec4(col, 0.85 * edge);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }
    `})}function km(){return new ka({transparent:!0,depthWrite:!1,side:2,blending:2,uniforms:{uTime:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,fragmentShader:`
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        vec2 p = vUv * 2.0 - 1.0;
        float r = length(p);
        float a = atan(p.y, p.x);
        float s = sin(a * 5.0 + r * 12.0 - uTime * 3.0) * 0.5 + 0.5;
        vec3 col = mix(vec3(0.45, 0.15, 0.95), vec3(0.2, 0.95, 1.0), s);
        float alpha = smoothstep(1.0, 0.8, r) * (0.45 + 0.55 * s);
        gl_FragColor = vec4(col * 1.4, alpha);
      }
    `})}function Am(e){return new ka({transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:{value:0},uSize:{value:70*e}},vertexShader:`
      attribute float aSeed;
      attribute vec3 aColor;
      uniform float uTime;
      uniform float uSize;
      varying vec3 vColor;
      varying float vTw;
      void main() {
        vec3 p = position;
        p.y += sin(uTime * 0.8 + aSeed * 6.28) * 0.6;
        p.x += sin(uTime * 0.5 + aSeed * 12.0) * 0.5;
        p.z += cos(uTime * 0.45 + aSeed * 9.0) * 0.5;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        vTw = 0.55 + 0.45 * sin(uTime * 3.0 + aSeed * 40.0);
        vColor = aColor;
        gl_PointSize = uSize * vTw / -mv.z;
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vTw;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, d);
        gl_FragColor = vec4(vColor * 1.5, a * vTw);
      }
    `})}function jm(e){let{scene:t,rng:n,colliders:r,breakables:i,cameraBlockers:a,animated:o,heightAt:s,std:c}=e,l=new Mt(cm.x-sm.x,cm.z-sm.z),u=l.length();l.normalize(),e.reserved.push((e,t)=>Math.hypot(e-lm.x,t-(lm.z+2.5))<7,(e,t)=>Math.hypot(e-um.x,t-um.z)<5.5,(e,t)=>Math.hypot(e-cm.x,t-cm.z)<cm.r+1.5,(e,t)=>{let n=e-sm.x,r=t-sm.z,i=n*l.x+r*l.y;return i<0||i>u?!1:Math.abs(n*l.y-r*l.x)<2.6});let d=[new ja({color:`#b48cff`,emissive:`#7b3cff`,emissiveIntensity:.9,roughness:.15,metalness:.1,flatShading:!0}),new ja({color:`#7ff3ff`,emissive:`#1fb8e0`,emissiveIntensity:.9,roughness:.15,metalness:.1,flatShading:!0}),new ja({color:`#ff9ce6`,emissive:`#e03cb0`,emissiveIntensity:.8,roughness:.15,metalness:.1,flatShading:!0})],f=new ga(.5,0);function p(e,i,a){let o=new z,c=d[Math.floor(n()*d.length)],l=3+Math.floor(n()*3);for(let e=0;e<l;e++){let e=new V(f,c),t=a*(.5+n()*.8);e.scale.set(t*.6,t*2.2,t*.6),e.position.set((n()-.5)*a,t*.8,(n()-.5)*a),e.rotation.set((n()-.5)*.7,n()*3,(n()-.5)*.7),e.castShadow=!0,o.add(e)}o.position.set(e,s(e,i)-.1,i),t.add(o),r.push({x:e,z:i,r:a*.9,enabled:!0})}let m=new V(new da(cm.r+.8,40).rotateX(-Math.PI/2),new ja({color:`#3fd0d6`,roughness:.08,metalness:.2,transparent:!0,opacity:.88}));m.position.set(cm.x,cm.level,cm.z),t.add(m);let h=2.5,g=u-cm.r+1.2,_=1.7,v=[],y=[],b=[],x=new Mt(-l.y,l.x);for(let e=0;e<=48;e++){let t=h+(g-h)*e/48,n=sm.x+l.x*t,r=sm.z+l.y*t,i=s(n,r);for(let e of[-1.7/2,_/2])i=Math.max(i,s(n+x.x*e,r+x.y*e));i=Math.max(i+.1,cm.level+.02);for(let t of[0,1]){let a=(t-.5)*_;v.push(n+x.x*a,i,r+x.y*a),y.push(t,e/48*4)}if(e<48){let t=e*2;b.push(t,t+2,t+1,t+1,t+2,t+3)}}let S=new Pr;S.setAttribute(`position`,new Sr(v,3)),S.setAttribute(`uv`,new Sr(y,2)),S.setIndex(b);let C=Om();t.add(new V(S,C));let w=sm.x+l.x*h,T=sm.z+l.y*h,E=new V(new W(.5,16,10),d[1]);E.position.set(w,s(w,T)+.3,T),t.add(E),o.push(e=>{C.uniforms.uTime.value=e});let D=new R(lm.x,s(lm.x,lm.z),lm.z),ee=new z,O=new ja({color:`#f2c14e`,metalness:.9,roughness:.25}),k=new V(new ba(1,.11,12,48),O);k.scale.set(1,1.45,1),k.position.y=2.1;let te=new V(new da(.95,40),new ja({color:`#d9ecff`,metalness:1,roughness:.04,envMapIntensity:1.6}));te.scale.set(1,1.45,1),te.position.set(0,2.1,-.02);let A=new V(new da(1.02,40),O);A.scale.set(1,1.45,1),A.position.set(0,2.1,-.06),A.rotation.y=Math.PI;let ne=new V(new U(.7,.95,.5,16),c(`#cfc6e8`,{roughness:.5}));ne.position.y=.25;let j=new V(new U(.12,.16,.6,10),O);j.position.y=.6;let re=new V(new ga(.22,0),d[0]);re.position.y=3.75,ee.add(k,te,A,ne,j,re),ee.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),ee.position.copy(D),t.add(ee),r.push({x:lm.x,z:lm.z,r:1.1,enabled:!0}),a.push(ee),e.mirrorPos=D,o.push(e=>{re.rotation.y=e*1.5,re.position.y=3.75+Math.sin(e*2)*.08});let M=s(um.x,um.z),ie=new R(um.x,M,um.z),ae=new z,oe=c(`#8e86a8`,{flatShading:!0}),se=new V(new ba(2.2,.32,10,36),oe);se.position.y=2.6;let ce=new V(new ba(1.92,.06,6,48),new ja({color:`#8ff6ff`,emissive:`#3fe0ff`,emissiveIntensity:2}));ce.position.y=2.6;let le=km(),ue=new V(new da(1.9,48),le);ue.position.y=2.6;let de=new V(new U(2.8,3.1,.4,20),oe);de.position.y=.1;for(let e of[-1,1]){let t=new V(new H(.7,3.2,.7),oe);t.position.set(e*2.4,1.5,0),ae.add(t)}ae.add(se,ce,ue,de),ae.traverse(e=>{e.isMesh&&e!==ue&&(e.castShadow=!0)}),ae.position.copy(ie),ae.lookAt(0,M,0),t.add(ae),r.push({x:um.x,z:um.z,r:2.6,enabled:!0}),a.push(ae),e.portalPos=ie,o.push(e=>{le.uniforms.uTime.value=e,ce.rotation.z=e*.4});let fe=new ja({color:`#8d6fd1`,emissive:`#3b1d80`,emissiveIntensity:.5,roughness:.6,flatShading:!0}),pe=new ma(.8,0);for(let[a,o]of[[15,9],[3,12],[16,0],[-2,10],[13,-7],[4,-9]]){let c=new V(pe,fe);c.position.set(a,s(a,o)+.45,o),c.rotation.set(n(),n(),n()),c.scale.set(1,.8,1),c.castShadow=!0,c.receiveShadow=!0,t.add(c);let l={x:a,z:o,r:.85,enabled:!0};r.push(l),i.push({mesh:c,collider:l,broken:!1,timer:0}),e.reserved.push((e,t)=>Math.hypot(e-a,t-o)<1.6)}let me=e.quality===`alta`?320:200,he=new Float32Array(me*3),ge=new Float32Array(me),_e=new Float32Array(me*3),ve=[`#fff3a0`,`#9ffcff`,`#ffb3f0`,`#c8b0ff`].map(e=>new B(e));for(let e=0;e<me;e++){let t=n()*Math.PI*2,r=Math.sqrt(n())*38,i=Math.cos(t)*r,a=Math.sin(t)*r;he.set([i,Math.max(s(i,a),0)+.8+n()*6,a],e*3),ge[e]=n();let o=ve[e%ve.length];_e.set([o.r,o.g,o.b],e*3)}let ye=new Pr;ye.setAttribute(`position`,new yr(he,3)),ye.setAttribute(`aSeed`,new yr(ge,1)),ye.setAttribute(`aColor`,new yr(_e,3));let be=Am(e.pixelRatio),xe=new ra(ye,be);xe.frustumCulled=!1,t.add(xe),o.push(e=>{be.uniforms.uTime.value=e});let Se=s(sm.x,sm.z),Ce=[];for(let e=0;e<3;e++){let n=new V(f,d[e]);n.scale.set(1.4,3.2,1.4),n.castShadow=!0,t.add(n),Ce.push(n)}return o.push(e=>{Ce.forEach((t,n)=>{let r=e*.25+n*Math.PI*2/3;t.position.set(sm.x+Math.cos(r)*4,Se+6+Math.sin(e*1.2+n)*.6,sm.z+Math.sin(r)*4),t.rotation.y=e*.7+n})}),()=>{let i=new rn,o=new Nt,s=new R,l=new R,u=new mn,d=e.place(18,4,(t,n,r)=>r>2&&r<9&&e.slope(t,n)<.7),f=new Fi(new U(.22,.35,2.4,7).translate(0,1.2,0),c(`#7a5236`),d.length),m=new Fi(new ha(1.6,1),c(`#ffffff`,{flatShading:!0,roughness:.7}),d.length*2),h=[`#ff8fc8`,`#7fe0c8`,`#b49bff`,`#ffd36e`,`#6fd36a`].map(e=>new B(e));d.forEach((e,t)=>{let a=.8+n()*.5;i.compose(s.set(e.x,e.h-.1,e.z),o.identity(),l.setScalar(a)),f.setMatrixAt(t,i);let c=h[Math.floor(n()*h.length)];for(let r=0;r<2;r++)i.compose(s.set(e.x+(r?.6:-.3)*a,e.h+(2.7+r*.9)*a,e.z+(r?-.3:.4)*a),o.setFromEuler(u.set(n(),n(),n())),l.setScalar(a*(r?.75:1))),m.setMatrixAt(t*2+r,i),m.setColorAt(t*2+r,c);r.push({x:e.x,z:e.z,r:.6*a,enabled:!0})});for(let e of[f,m])e.castShadow=!0,e.receiveShadow=!0,t.add(e);a.push(m);let g=e.place(40,1.2,(t,n,r)=>r>1.5&&e.slope(t,n)<.7),_=new Fi(new U(.05,.07,.3,6).translate(0,.15,0),c(`#f4ecd8`),g.length),v=new Fi(new W(.17,10,6,0,Math.PI*2,0,Math.PI/2).translate(0,.28,0),new ja({color:`#40e0ff`,emissive:`#22b8ff`,emissiveIntensity:1.6}),g.length);g.forEach((e,t)=>{i.compose(s.set(e.x,e.h,e.z),o.identity(),l.setScalar(.8+n()*.9)),_.setMatrixAt(t,i),v.setMatrixAt(t,i)}),t.add(_,v);for(let t of e.place(10,5,(t,n,r)=>r>1.2&&e.slope(t,n)<1))p(t.x,t.z,.8+n()*.6);p(lm.x-3.2,lm.z-.3,.9),p(lm.x+3.3,lm.z-.2,.8),p(um.x-3.8,um.z+1.5,1)}}var Mm={arbol:420,palmera:360,roca:300},Nm=.9,Pm=3,Fm=new rn,Im=new rn,Lm=new rn,Rm=new rn,zm=new R,Bm=class{key;kind;x;z;h;reach;collider;alive=!0;timer=0;hits=0;idle=0;refs=[];wobble=0;fall=-1;fallDir=0;grow=1;constructor(e,t,n,r,i,a,o){this.key=e,this.kind=t,this.x=n,this.z=r,this.h=i,this.reach=a,this.collider=o}add(e,t){let n=new rn;e.getMatrixAt(t,n),this.refs.push({mesh:e,index:t,base:n})}shake(){this.wobble=1,this.idle=0}cut(e,t){this.alive=!1,this.hits=0,this.timer=Mm[this.kind],this.fallDir=Math.atan2(this.x-e,this.z-t),this.kind===`roca`?(this.grow=.55,this.apply(0)):this.fall=0,this.collider&&this.kind!==`roca`&&(this.collider.enabled=!1)}setCut(e){this.alive=!1,this.timer=e,this.grow=this.kind===`roca`?.55:0,this.collider&&this.kind!==`roca`&&(this.collider.enabled=!1),this.apply(0)}update(e){this.hits>0&&(this.idle+=e,this.idle>6&&(this.hits=0));let t=0,n=!1;if(this.wobble>0&&(this.wobble=Math.max(0,this.wobble-e*3),t=Math.sin(this.wobble*18)*.06*this.wobble,n=!0),this.fall>=0){this.fall+=e/Nm;let r=Math.min(1,this.fall);t=r*r*1.45,this.fall>=1.25&&(this.fall=-1,this.grow=0,t=0),n=!0}this.alive?this.grow<1&&(this.grow=Math.min(1,this.grow+e/Pm),n=!0):(this.timer-=e,this.timer<=0&&(this.alive=!0,this.collider&&(this.collider.enabled=!0),this.kind!==`roca`&&(this.grow=.01))),n&&this.apply(t)}apply(e){zm.set(Math.cos(this.fallDir),0,-Math.sin(this.fallDir)),Im.makeTranslation(this.x,this.h,this.z),Lm.makeRotationAxis(zm,e);let t=Math.max(this.grow,1e-4);Rm.makeScale(t,t,t);let n=new rn().makeTranslation(-this.x,-this.h,-this.z),r=Im.clone().multiply(Lm).multiply(Rm).multiply(n);for(let e of this.refs)Fm.copy(r).multiply(e.base),e.mesh.setMatrixAt(e.index,Fm),e.mesh.instanceMatrix.needsUpdate=!0}};function Vm(e){let{scene:t,rng:n,island:r,colliders:i,cameraBlockers:a,animated:o,heightAt:s,std:c}=e,{spawn:l,wreck:u}=r;return e.reserved.push((e,t)=>Math.hypot(e-l.x,t-l.z)<4),u&&(e.reserved.push((e,t)=>Math.hypot(e-u.x,t-u.z)<10),Hm(e,u.x,u.z,u.rot)),()=>{let r=new rn,l=new Nt,d=new R,f=new R,p=new mn,m=e.place(48,4.5,(t,n,r)=>r>1.6&&e.slope(t,n)<.8,1);e.spots.trees=m;let h=new Fi(new U(.28,.45,7,8).translate(0,3.5,0),c(`#6b4a30`),Math.max(1,m.length)),g=new Fi(new ha(1.8,1),c(`#ffffff`,{flatShading:!0,roughness:.8}),Math.max(1,m.length*3));h.count=m.length,g.count=m.length*3;let _=[`#2e7d32`,`#388e3c`,`#1b5e20`,`#43a047`,`#558b2f`].map(e=>new B(e));m.forEach((t,a)=>{let o=.8+n()*.6;r.compose(d.set(t.x,t.h-.2,t.z),l.setFromEuler(p.set((n()-.5)*.1,n()*6,(n()-.5)*.1)),f.setScalar(o)),h.setMatrixAt(a,r);let s=_[Math.floor(n()*_.length)];for(let e=0;e<3;e++){let i=e/3*Math.PI*2+n();r.compose(d.set(t.x+Math.cos(i)*1.1*o,t.h+(6.6+n()*1.2)*o,t.z+Math.sin(i)*1.1*o),l.setFromEuler(p.set(n(),n(),n())),f.set(o*(.9+n()*.4),o*.75,o*(.9+n()*.4))),g.setMatrixAt(a*3+e,r),g.setColorAt(a*3+e,s)}let c={x:t.x,z:t.z,r:.5*o,enabled:!0};i.push(c);let u=new Bm(`arbol-${a}`,`arbol`,t.x,t.z,t.h-.2,1.6+.5*o,c);u.add(h,a);for(let e=0;e<3;e++)u.add(g,a*3+e);e.chop.push(u)});for(let e of[h,g])e.castShadow=!0,e.receiveShadow=!0,t.add(e);a.push(g);let v=e.place(90,1.6,(t,n,r)=>r>1.2&&e.slope(t,n)<.9),y=new Fi(new ha(.9,1),c(`#ffffff`,{flatShading:!0,roughness:.85}),Math.max(1,v.length));y.count=v.length,v.forEach((e,t)=>{let i=.6+n()*.7;r.compose(d.set(e.x,e.h+.2*i,e.z),l.setFromEuler(p.set(0,n()*6,0)),f.set(i,i*.65,i)),y.setMatrixAt(t,r),y.setColorAt(t,_[Math.floor(n()*_.length)])}),y.castShadow=!0,y.receiveShadow=!0,t.add(y);let b=e.place(70,1.4,(t,n,r)=>r>1.3&&e.slope(t,n)<.7),x=new _a(.5,1.4,1,4);{let e=x.attributes.position;for(let t=0;t<e.count;t++){let n=e.getY(t)+.7;e.setX(t,e.getX(t)*Math.sin(n/1.4*Math.PI)),e.setZ(t,-n),e.setY(t,.6*n-.35*n*n)}x.computeVertexNormals()}let S=new Fi(x,c(`#4caf50`,{side:2}),Math.max(1,b.length*5));if(S.count=b.length*5,b.forEach((e,t)=>{for(let i=0;i<5;i++)r.compose(d.set(e.x,e.h,e.z),l.setFromEuler(new mn(0,i/5*Math.PI*2+n(),0)),f.setScalar(.8+n()*.5)),S.setMatrixAt(t*5+i,r)}),t.add(S),u){let e=new Float32Array(120),n=new Float32Array(40);for(let e=0;e<40;e++)n[e]=e/40;let r=new Pr;r.setAttribute(`position`,new yr(e,3));let i=document.createElement(`canvas`);i.width=i.height=64;let a=i.getContext(`2d`),c=a.createRadialGradient(32,32,0,32,32,32);c.addColorStop(0,`rgba(255,255,255,1)`),c.addColorStop(1,`rgba(255,255,255,0)`),a.fillStyle=c,a.fillRect(0,0,64,64);let l=new ra(r,new Qi({color:`#5f6368`,size:3,map:new oa(i),transparent:!0,opacity:.4,depthWrite:!1}));l.frustumCulled=!1,t.add(l);let d=new R(1.2,.8,6.5).applyAxisAngle(new R(0,1,0),u.rot),f=u.x+d.x,p=u.z+d.z,m=s(u.x,u.z)+d.y;o.push(t=>{for(let r=0;r<40;r++){let i=(n[r]+t*.08)%1;e[r*3]=f+Math.sin(r*12.9+t*.5)*i*1.5+i*2,e[r*3+1]=m+i*9,e[r*3+2]=p+Math.cos(r*7.3+t*.4)*i*1.5}r.attributes.position.needsUpdate=!0})}}}function Hm(e,t,n,r){let{scene:i,rng:a,colliders:o,cameraBlockers:s,heightAt:c,std:l}=e,u=new z,d=l(`#eef1f4`,{roughness:.5,metalness:.2}),f=l(`#1e63c8`,{roughness:.5}),p=l(`#2b2f36`,{roughness:.6}),m=l(`#9aa3ad`,{roughness:.4,metalness:.7}),h=(e,t,n,r,i,a=0,o=0,s=0)=>{let c=new V(e,t);return c.position.set(n,r,i),c.rotation.set(a,o,s),c.castShadow=!0,c.receiveShadow=!0,u.add(c),c},g=new z;g.rotation.set(.08,0,.1),u.add(g);let _=new V(new U(1.3,1.3,9,20,1,!0),l(`#eef1f4`,{roughness:.5,metalness:.2,side:2}));_.rotation.z=Math.PI/2,_.position.y=.9,_.castShadow=!0,g.add(_);let v=new V(new W(1.3,20,12,0,Math.PI*2,0,Math.PI/2),d);v.rotation.z=-Math.PI/2,v.scale.set(1,1.6,1),v.position.set(4.5,.9,0),v.castShadow=!0,g.add(v);let y=new V(new H(.9,.35,1.6),p);y.position.set(5.2,1.65,0),y.rotation.z=-.5,g.add(y);let b=new V(new ba(1.3,.12,6,20),p);b.rotation.y=Math.PI/2,b.position.set(-4.5,.9,0),g.add(b);for(let e of[-1,1]){let t=new V(new H(8.6,.28,.06),f);t.position.set(0,1.1,e*1.29),g.add(t)}let x=new Fi(new H(.32,.36,.06),p,20),S=new rn;for(let e=0;e<10;e++)for(let[t,n]of[[0,-1],[1,1]])S.makeTranslation(-3.4+e*.75,1.55,n*1.2),x.setMatrixAt(e*2+t,S);g.add(x),h(new H(1.9,.18,6.5),d,.6,.35,4.2,.22,.3,-.1),h(new H(1.9,.18,5),d,-5.5,.15,-5.5,-.15,1.1,.05),h(new H(.4,.2,5),f,-5.6,.25,-5.4,-.15,1.1,.05),h(new H(1.8,2.3,.18),f,-5.4,1.9,.4,0,0,-.45),h(new H(1.3,.12,3.2),d,-5.5,.9,.4,0,0,-.2),h(new U(.55,.62,1.7,14),m,1.2,.45,6.5,0,0,Math.PI/2),h(new da(.5,14),p,2.06,.45,6.5,0,Math.PI/2,0);let C=[`#e53935`,`#fdd835`,`#43a047`,`#8e24aa`,`#fb8c00`,`#00acc1`];for(let e=0;e<6;e++){let t=a()*Math.PI*2,n=3+a()*4,r=Math.cos(t)*n,i=Math.sin(t)*n+2.5;h(new H(.7,.45,.25),l(C[e]),r,.2,i,a()*.3,a()*6,Math.PI/2*Math.round(a()))}u.position.set(t,c(t,n)-.25,n),u.rotation.y=r,i.add(u),s.push(g);let w=Math.cos(r),T=Math.sin(r);for(let[e,r,i]of[[-4.5,0,1.4],[-1.5,0,1.4],[1.5,0,1.4],[4.5,0,1.4],[1.2,6.5,.8]])o.push({x:t+e*w+r*T,z:n-e*T+r*w,r:i,enabled:!0})}function Um(e,t){let{scene:n,rng:r,colliders:i,cameraBlockers:a,std:o}=e,s=e.place(t.count,t.minDist,t.ok,1);t.asTrees&&e.spots.trees.push(...s);let c=new rn,l=new Nt,u=new R,d=new R,f=new mn,p=new B,m=new Fi(t.trunkGeo,o(t.trunkColor,{flatShading:!0}),Math.max(1,s.length));m.count=s.length;let h=t.crownGeo&&t.crown?new Fi(t.crownGeo,o(`#ffffff`,{flatShading:!0,roughness:.75,...t.crownMat}),Math.max(1,s.length*t.crowns)):null;h&&(h.count=s.length*t.crowns);let[g,_]=t.scale??[.8,1.3];s.forEach((n,a)=>{let o=g+r()*(_-g);c.compose(u.set(n.x,n.h-.15,n.z),l.setFromEuler(f.set((r()-.5)*.12,r()*6,(r()-.5)*.12)),d.setScalar(o)),m.setMatrixAt(a,c);let s=null,v={x:n.x,z:n.z,r:t.colR*o,enabled:!0};if(i.push(v),t.chop&&(s=new Bm(`${t.prefix}-${a}`,t.chop,n.x,n.z,n.h-.15,1.5+.5*o,v),s.add(m,a),e.chop.push(s)),h&&t.crown)for(let e=0;e<t.crowns;e++){let i=t.crown(e,n,o,r);c.compose(u.set(n.x+i.x,n.h+i.y,n.z+i.z),l.setFromEuler(f.set(i.rx??0,i.ry??0,i.rz??0)),d.set(i.sx,i.sy,i.sz)),h.setMatrixAt(a*t.crowns+e,c),h.setColorAt(a*t.crowns+e,p.set(i.color??`#ffffff`)),s?.add(h,a*t.crowns+e)}});for(let e of[m,h])e&&(e.castShadow=!0,e.receiveShadow=!0,n.add(e));return t.blocksCamera!==!1&&a.push(h??m),s}var Wm=(e,t)=>t[Math.floor(e()*t.length)];function Gm(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),new oa(e)}function Km(e){let{island:t}=e;if(e.reserved.push((e,n)=>Math.hypot(e-t.spawn.x,n-t.spawn.z)<4),t.crater){let n=t.crater;e.reserved.push((e,t)=>Math.hypot(e-n.x,t-n.z)<n.r+4)}return t.kind===`misteriosa`&&e.reserved.push((e,t)=>Math.hypot(e,t)<16),()=>{switch(t.kind){case`nieve`:qm(e);break;case`desierto`:Jm(e);break;case`pantano`:Ym(e);break;case`volcan`:Xm(e);break;case`cristal`:Zm(e);break;case`misteriosa`:Qm(e)}}}function qm(e){let t=[`#1f5a3a`,`#235f40`,`#2b6b48`,`#1b4d33`];Um(e,{count:46,minDist:3.6,prefix:`arbol`,chop:`arbol`,colR:.45,asTrees:!0,ok:(t,n,r)=>r>1&&e.slope(t,n)<.9,trunkGeo:new U(.2,.3,2.2,7).translate(0,1.1,0),trunkColor:`#5d4030`,crownGeo:new fa(1.7,2.4,8).translate(0,1.2,0),crowns:4,crown:(e,n,r,i)=>{if(e===3)return{x:0,y:(4.1+1.3)*r,z:0,sx:.42*r,sy:.45*r,sz:.42*r,color:`#ffffff`};let a=(1-e*.24)*r;return{x:0,y:(1.6+e*1.25)*r,z:0,sx:a,sy:r,sz:a,ry:i()*3,color:e===2?`#e8f4fb`:Wm(i,t)}}});let{scene:n,rng:r,std:i,colliders:a}=e,o=e.place(3,6,(t,n,r)=>r>1.2&&e.slope(t,n)<.4),s=i(`#fbfdff`,{roughness:.6});for(let e of o){let t=new z;[[.55,.5],[.4,1.25],[.28,1.8]].forEach(([e,n])=>{let r=new V(new W(e,14,10),s);r.position.y=n,r.castShadow=!0,t.add(r)});let o=new V(new fa(.06,.3,6).rotateX(Math.PI/2),i(`#ff7a1a`));o.position.set(0,1.82,.32);let c=new V(new U(.2,.22,.3,10),i(`#263238`));c.position.y=2.15,t.add(o,c);for(let e of[-.1,.1]){let n=new V(new W(.035,6,5),i(`#111111`));n.position.set(e,1.9,.25),t.add(n)}t.position.set(e.x,e.h-.1,e.z),t.rotation.y=r()*6,n.add(t),a.push({x:e.x,z:e.z,r:.55,enabled:!0})}}function Jm(e){Um(e,{count:34,minDist:4,prefix:`cactus`,chop:null,colR:.4,ok:(t,n,r)=>r>1&&e.slope(t,n)<.8,trunkGeo:new ua(.32,2.4,4,8).translate(0,1.5,0),trunkColor:`#3f8f4a`,crownGeo:new ua(.2,.8,4,8),crownMat:{flatShading:!0},crowns:2,crown:(e,t,n,r)=>{let i=e===0?1:-1,a=r()*6;return{x:Math.cos(a)*.45*i*n,y:(1.4+e*.5)*n,z:Math.sin(a)*.45*i*n,sx:n,sy:n,sz:n,rz:i*.25,color:`#4caf50`}},blocksCamera:!1}),Um(e,{count:30,minDist:2,prefix:`matojo`,chop:null,colR:.01,blocksCamera:!1,ok:(e,t,n)=>n>.8,trunkGeo:new ha(.45,0).scale(1,.6,1),trunkColor:`#a8915a`,crowns:0})}function Ym(e){let t=[`#4f6b35`,`#5d7a3e`,`#3e5a2c`,`#6b7f3a`];Um(e,{count:40,minDist:4,prefix:`arbol`,chop:`arbol`,colR:.45,asTrees:!0,ok:(t,n,r)=>r>.4&&e.slope(t,n)<.8,trunkGeo:(()=>{let e=new U(.2,.5,5,7,6).translate(0,2.5,0),t=e.attributes.position;for(let e=0;e<t.count;e++)t.setX(e,t.getX(e)+Math.sin(t.getY(e)*.9)*.35);return e.computeVertexNormals(),e})(),trunkColor:`#4a3b2c`,crownGeo:new ha(1.6,1),crowns:3,crown:(e,n,r,i)=>{let a=e/3*Math.PI*2+i();return{x:Math.cos(a)*1.1*r,y:(4.6+i())*r,z:Math.sin(a)*1.1*r,sx:r*1.2,sy:r*.5,sz:r*1.2,ry:i()*3,color:Wm(i,t)}}});let{scene:n,rng:r,std:i}=e,a=e.place(160,.9,(e,t,n)=>n>-.8&&n<.9),o=new Fi(new fa(.05,1.5,4).translate(0,.7,0),i(`#7a8f3c`),Math.max(1,a.length*3));o.count=a.length*3;let s=new rn,c=new Nt,l=new mn,u=new R,d=new R;a.forEach((e,t)=>{for(let n=0;n<3;n++)s.compose(u.set(e.x+(r()-.5)*.5,e.h,e.z+(r()-.5)*.5),c.setFromEuler(l.set((r()-.5)*.3,0,(r()-.5)*.3)),d.setScalar(.7+r()*.6)),o.setMatrixAt(t*3+n,s)}),n.add(o);let f=e.place(60,1.4,(e,t,n)=>n<-.25&&n>-1.6),p=new Fi(new da(.45,10,.3,Math.PI*1.8).rotateX(-Math.PI/2),i(`#3f8f3a`,{side:2}),Math.max(1,f.length));p.count=f.length,f.forEach((e,t)=>{s.compose(u.set(e.x,.04,e.z),c.setFromEuler(l.set(0,r()*6,0)),d.setScalar(.7+r()*.7)),p.setMatrixAt(t,s)}),n.add(p);let m=new Float32Array(150),h=Array.from({length:50},()=>{let t=r()*Math.PI*2,n=Math.sqrt(r())*e.island.size*.3;return{x:Math.cos(t)*n,z:Math.sin(t)*n,ph:r()*6}}),g=new Pr;g.setAttribute(`position`,new yr(m,3));let _=new ra(g,new Qi({color:`#f4ff81`,size:.35,map:Gm(),transparent:!0,opacity:.95,depthWrite:!1}));_.frustumCulled=!1,n.add(_),e.animated.push(t=>{for(let n=0;n<50;n++){let r=h[n];m[n*3]=r.x+Math.sin(t*.4+r.ph)*2,m[n*3+1]=Math.max(0,e.heightAt(r.x,r.z))+1+Math.sin(t*.9+r.ph*2)*.6,m[n*3+2]=r.z+Math.cos(t*.3+r.ph)*2}g.attributes.position.needsUpdate=!0})}function Xm(e){let{scene:t,island:n,std:r,rng:i,animated:a}=e;Um(e,{count:18,minDist:4,prefix:`arbol`,chop:`arbol`,colR:.35,asTrees:!0,ok:(t,n,r)=>r>1&&r<9&&e.slope(t,n)<.9,trunkGeo:new U(.14,.32,4.5,6).translate(0,2.25,0),trunkColor:`#2b2523`,crownGeo:new U(.06,.1,1.8,5).translate(0,.9,0),crowns:2,crown:(e,t,n,r)=>({x:0,y:(2.2+e*.9)*n,z:0,sx:n,sy:n,sz:n,rz:(e?1:-1)*(.7+r()*.3),ry:r()*6,color:`#2b2523`}),blocksCamera:!1});let o=n.crater;if(!o)return;let s=new V(new da(o.r+1.5,28).rotateX(-Math.PI/2),new fi({color:`#ff6d00`}));s.position.set(o.x,o.y-.6,o.z),t.add(s);let c=new go(`#ff6d00`,30,30,1.4);c.position.set(o.x,o.y+2,o.z),t.add(c);let l=new Fi(new W(.35,8,6),new fi({color:`#ffd54f`}),8);t.add(l);let u=new rn,d=Array.from({length:8},()=>({a:i()*6,r:i()*o.r,ph:i()})),f=new Float32Array(138),p=Array.from({length:46},(e,t)=>t/46),m=new Pr;m.setAttribute(`position`,new yr(f,3));let h=new ra(m,new Qi({color:`#4e4a48`,size:8,map:Gm(),transparent:!0,opacity:.45,depthWrite:!1}));h.frustumCulled=!1,t.add(h),a.push(e=>{s.material.color.setHSL(.06+Math.sin(e*1.5)*.015,1,.5),c.intensity=26+Math.sin(e*3)*6,d.forEach((t,n)=>{let r=(t.ph+e*.5)%1,i=Math.sin(r*Math.PI);u.makeScale(i+.01,i+.01,i+.01).setPosition(o.x+Math.cos(t.a)*t.r,o.y-.6,o.z+Math.sin(t.a)*t.r),l.setMatrixAt(n,u)}),l.instanceMatrix.needsUpdate=!0;for(let t=0;t<46;t++){let n=(p[t]+e*.05)%1;f[t*3]=o.x+Math.sin(t*12.9+e*.3)*(1+n*5)+n*8,f[t*3+1]=o.y+n*30,f[t*3+2]=o.z+Math.cos(t*7.3+e*.25)*(1+n*5)}m.attributes.position.needsUpdate=!0});let g=e.place(30,2,(e,t,n)=>n>3),_=new Fi(new ma(.3,0),r(`#3a2a26`,{emissive:`#ff5722`,emissiveIntensity:.6,flatShading:!0}),Math.max(1,g.length));_.count=g.length,g.forEach((e,t)=>{u.makeScale(1,.7,1).setPosition(e.x,e.h+.1,e.z),_.setMatrixAt(t,u)}),t.add(_)}function Zm(e){let t=[`#f48fb1`,`#f8bbd0`,`#ce93d8`,`#ffccbc`];Um(e,{count:30,minDist:4.2,prefix:`arbol`,chop:`arbol`,colR:.4,asTrees:!0,ok:(t,n,r)=>r>1.2&&e.slope(t,n)<.8,trunkGeo:new U(.2,.32,4,7).translate(0,2,0),trunkColor:`#e0d4f0`,crownGeo:new ha(1.5,1),crowns:2,crown:(e,n,r,i)=>({x:(e-.5)*.8*r,y:(4.2+e*.7)*r,z:(i()-.5)*.6,sx:r,sy:r*.85,sz:r,color:Wm(i,t)})});let n=[`#80deea`,`#b388ff`,`#ff80ab`,`#a7ffeb`,`#ea80fc`];Um(e,{count:26,minDist:3.5,prefix:`cristal`,chop:`roca`,colR:.55,scale:[.7,1.4],ok:(t,n,r)=>r>.8&&e.slope(t,n)<1,trunkGeo:new ga(.5,0).scale(.9,2.4,.9).translate(0,1,0),trunkColor:`#b39ddb`,crownGeo:new ga(.35,0).scale(1,2.6,1),crownMat:{emissive:`#7c4dff`,emissiveIntensity:.35,roughness:.2,metalness:.1},crowns:4,crown:(e,t,r,i)=>{let a=e/4*Math.PI*2+i();return{x:Math.cos(a)*.5*r,y:.6*r,z:Math.sin(a)*.5*r,sx:r,sy:r*(.7+i()*.6),sz:r,rx:Math.sin(a)*.5,rz:-Math.cos(a)*.5,color:Wm(i,n)}},blocksCamera:!1})}function Qm(e){let{scene:t,std:n,colliders:r,cameraBlockers:i,animated:a,heightAt:o}=e;Um(e,{count:22,minDist:4.5,prefix:`arbol`,chop:`arbol`,colR:.35,asTrees:!0,ok:(t,n,r)=>r>1&&e.slope(t,n)<.9,trunkGeo:new U(.12,.3,4.2,6).translate(0,2.1,0),trunkColor:`#2c2340`,crownGeo:new U(.05,.09,1.7,5).translate(0,.85,0),crowns:3,crown:(e,t,n,r)=>({x:0,y:(2+e*.7)*n,z:0,sx:n,sy:n,sz:n,rz:(e%2?1:-1)*(.7+r()*.4),ry:r()*6,color:`#3a2d55`}),blocksCamera:!1});let s=e.place(24,3,(e,t,n)=>n>.8),c=new Fi(new ga(.5,0),n(`#76ff03`,{emissive:`#64dd17`,emissiveIntensity:.9,flatShading:!0}),Math.max(1,s.length));c.count=s.length;let l=new rn;s.forEach((e,t)=>{l.makeScale(.8,1.8,.8).setPosition(e.x,e.h+.6,e.z),c.setMatrixAt(t,l)}),t.add(c);let u=o(0,0),d=new z;d.position.y=u;let f=n(`#4a4058`,{flatShading:!0}),p=n(`#2c2340`,{flatShading:!0}),m=Math.PI/2;for(let e=0;e<22;e++){let t=e/22*Math.PI*2,n=Math.abs(t-m);if(n=Math.min(n,Math.PI*2-n),n<.2)continue;let i=Math.cos(t)*12,a=Math.sin(t)*12,o=new V(new H(3.6,4,1.2),f);o.position.set(i,2,a),o.rotation.y=-t+Math.PI/2,o.castShadow=!0,o.receiveShadow=!0,d.add(o);let s=new V(new H(1.2,.8,1.3),p);s.position.set(i,4.4,a),s.rotation.y=o.rotation.y,d.add(s),r.push({x:i,z:a,r:1.8,enabled:!0})}for(let e=0;e<4;e++){let t=e/4*Math.PI*2+Math.PI/4,o=Math.cos(t)*12,s=Math.sin(t)*12,c=new V(new U(2,2.3,9,10),f);c.position.set(o,4.5,s),c.castShadow=!0;let l=new V(new fa(2.7,3.5,10),n(`#6a1b9a`,{flatShading:!0}));l.position.set(o,10.7,s);let u=new V(new _a(1.4,.8),n(`#76ff03`,{side:2,emissive:`#33691e`,emissiveIntensity:.4}));u.position.set(o+.75,13.2,s);let m=new V(new U(.05,.05,1.8),p);m.position.set(o,12.9,s),d.add(c,l,u,m),r.push({x:o,z:s,r:2.4,enabled:!0}),i.push(c),a.push(t=>{u.rotation.y=Math.sin(t*2+e)*.3})}let h=new V(new H(2.4,3.2,1.2),n(`#6a1b9a`));h.position.set(0,1.6,-5);let g=new V(new H(2.4,.9,1.8),n(`#ffca28`,{metalness:.6,roughness:.4}));g.position.set(0,.45,-4.2),d.add(h,g),r.push({x:0,z:-5,r:1.3,enabled:!0}),t.add(d)}var $m=1e3;function eh(e,t={}){return new ja({color:e,roughness:.85,...t})}var th={magica:{sandWet:`#d6b47c`,sand:`#f3dca2`,grass:`#5ec45a`,grass2:`#57c98a`,accent:`#9b8cff`,accentAmount:.55,rock:`#9a8f86`,rock2:`#8b78b8`},selva:{sandWet:`#cfae76`,sand:`#efd49a`,grass:`#3f9e3a`,grass2:`#5cb85c`,accent:`#8a6a45`,accentAmount:.45,rock:`#8d8a80`,rock2:`#77736a`},pirata:{sandWet:`#cfae76`,sand:`#f1d9a0`,grass:`#5aa83f`,grass2:`#7cbf55`,accent:`#a07850`,accentAmount:.5,rock:`#8d8a80`,rock2:`#77736a`},volcan:{sandWet:`#4a4440`,sand:`#6b625a`,grass:`#5d6b3a`,grass2:`#4a4a3a`,accent:`#2f2a28`,accentAmount:.6,rock:`#3b3533`,rock2:`#5a3a30`},nieve:{sandWet:`#b9b2a6`,sand:`#ddd6c8`,grass:`#f4f8fb`,grass2:`#e3edf5`,accent:`#cfe3f2`,accentAmount:.5,rock:`#8c96a0`,rock2:`#a9b5c0`},desierto:{sandWet:`#d9b46c`,sand:`#f2d58c`,grass:`#efcf82`,grass2:`#e6bf6c`,accent:`#d9a85a`,accentAmount:.5,rock:`#c08a58`,rock2:`#a8714a`},pantano:{sandWet:`#6d6446`,sand:`#8a805a`,grass:`#56703a`,grass2:`#6b8048`,accent:`#3f5030`,accentAmount:.55,rock:`#6a6a5e`,rock2:`#55594a`},cristal:{sandWet:`#d8c7e6`,sand:`#f1e6f7`,grass:`#7fd3b0`,grass2:`#a8e3c8`,accent:`#c7a6ff`,accentAmount:.55,rock:`#b8a6d6`,rock2:`#8fd0e8`},misteriosa:{sandWet:`#4a4058`,sand:`#6d6080`,grass:`#4b3f63`,grass2:`#5b4a78`,accent:`#2c2340`,accentAmount:.55,rock:`#3a3348`,rock2:`#5e35b1`}},nh={magica:{palms:26,rocks:30,grass:1,grassColor:`#4fb848`,flowers:160,flowerColors:[`#ff5c8a`,`#ffd84d`,`#ffffff`,`#b98cff`,`#ff8a3d`]},selva:{palms:34,rocks:40,grass:1.4,grassColor:`#3a9a35`,flowers:90,flowerColors:[`#ff3d6e`,`#ffb300`,`#ff7043`,`#ffffff`]},pirata:{palms:32,rocks:30,grass:1.1,grassColor:`#4fa83a`,flowers:50,flowerColors:[`#ff3d6e`,`#ffb300`,`#ffffff`]},volcan:{palms:6,rocks:70,grass:.25,grassColor:`#5d6b3a`,flowers:0,flowerColors:[`#ff7043`]},nieve:{palms:0,rocks:40,grass:0,grassColor:`#ffffff`,flowers:0,flowerColors:[`#ffffff`]},desierto:{palms:12,rocks:30,grass:.2,grassColor:`#b8a25a`,flowers:12,flowerColors:[`#ff5c8a`,`#ffd84d`]},pantano:{palms:6,rocks:18,grass:1.7,grassColor:`#5f7d3a`,flowers:30,flowerColors:[`#fff59d`,`#ffffff`]},cristal:{palms:10,rocks:24,grass:1,grassColor:`#6fc9a0`,flowers:130,flowerColors:[`#f8bbd0`,`#b3e5fc`,`#e1bee7`,`#ffffff`]},misteriosa:{palms:0,rocks:40,grass:.5,grassColor:`#4a3d63`,flowers:20,flowerColors:[`#b388ff`,`#76ff03`]}};function rh(e,t,n,r){let i=r.heightAt,a=Ff(r.seed*7+20261119),s=[],c=[],l=[],u=[],d=[],f=[],p=r.size*.36,m={scene:e,island:r,quality:n,rng:a,pixelRatio:t.getPixelRatio(),colliders:s,breakables:c,cameraBlockers:l,animated:u,reserved:d,heightAt:i,slope:(e,t)=>hm(i,e,t),std:eh,mirrorPos:null,portalPos:null,spots:{palms:[],trees:[]},chop:[],place(e,t,n,r=0){let o=[];for(let s=0;o.length<e&&s<e*60;s++){let e=a()*Math.PI*2,s=Math.sqrt(a())*p,c=Math.cos(e)*s,l=Math.sin(e)*s,u=i(c,l);!d.some(e=>e(c,l))&&n(c,l,u)&&(f.some(e=>e.r>=r&&Math.hypot(e.x-c,e.z-l)<Math.max(e.r,t))||(f.push({x:c,z:l,r:t}),o.push({x:c,z:l,h:u})))}return o}},h=new Em;h.scale.setScalar(4e3);let g=h.material.uniforms;g.turbidity.value=4,g.rayleigh.value=1.4,g.mieCoefficient.value=.004,g.mieDirectionalG.value=.85,e.add(h);let _=nm(13),v=new ds(t),y=new Bn,b=new Em;b.scale.setScalar(1e3),b.material.uniforms.sunPosition.value.set(_.x,_.y,_.z).multiplyScalar(100),b.material.uniforms.rayleigh.value=1.4,b.material.uniforms.turbidity.value=4,y.add(b);let x=v.fromScene(y,.02).texture;e.environment=x,b.geometry.dispose(),b.material.dispose(),v.dispose();let S=new zn(`#b9def0`,120,470);e.fog=S;let C=new to(`#cfe9ff`,`#6f8a55`,.6);e.add(C);let T=new yo(`#fff0d6`,2.2);T.castShadow=!0;let E=n===`alta`?2048:1024;T.shadow.mapSize.set(E,E);let D=T.shadow.camera;D.left=-28,D.right=28,D.top=28,D.bottom=-28,D.near=1,D.far=140,T.shadow.bias=-5e-4,T.shadow.normalBias=.04,e.add(T,T.target);let ee=1400,O=new Float32Array(ee*3);for(let e=0;e<ee;e++){let t=a()*Math.PI*2,n=Math.acos(a()*.95);O.set([Math.sin(n)*Math.cos(t)*1800,Math.cos(n)*1800,Math.sin(n)*Math.sin(t)*1800],e*3)}let k=new Pr;k.setAttribute(`position`,new yr(O,3));let te=new Qi({color:`#ffffff`,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),A=new ra(k,te);A.frustumCulled=!1,e.add(A);let ne=new V(new W(45,24,16),new fi({color:`#f4f1de`,fog:!1}));e.add(ne);let j=th[r.kind],re=Math.round((n===`alta`?1.6:1.1)*r.size),M=new _a(r.size,r.size,re,re);M.rotateX(-Math.PI/2);let ie=M.attributes.position,ae=new Float32Array(ie.count*3),oe=new B(j.sandWet),se=new B(j.sand),ce=new B(j.grass),le=new B(j.grass2),ue=new B(j.accent),de=new B(j.rock),fe=new B(j.rock2),pe=new B,me=new B,he=11+r.seed%1e3;for(let e=0;e<ie.count;e++){let t=ie.getX(e),n=ie.getZ(e),r=i(t,n);ie.setY(e,r),pe.copy(oe).lerp(se,Mf(-.6,.5,r));let a=Pf(t*.08,n*.08,3,he);me.copy(ce).lerp(le,Mf(.35,.7,a)).lerp(ue,Mf(.62,.8,a)*j.accentAmount),pe.lerp(me,Mf(.7,1.3,r));let o=Math.max(Mf(.7,1.3,m.slope(t,n)),Mf(8,11,r));me.copy(de).lerp(fe,a),pe.lerp(me,o*Mf(.8,1.5,r)),ae[e*3]=pe.r,ae[e*3+1]=pe.g,ae[e*3+2]=pe.b}M.setAttribute(`color`,new yr(ae,3)),M.computeVertexNormals();let ge=new V(M,new ja({vertexColors:!0,roughness:.95}));ge.receiveShadow=!0,e.add(ge);let _e=new Uint8Array(262144);for(let e=0;e<256;e++)for(let t=0;t<256;t++){let n=(t/255-.5)*r.size,a=(e/255-.5)*r.size,o=Math.min(10,Math.max(0,-i(n,a))),s=(e*256+t)*4;_e[s]=Math.round(o/10*255),_e[s+3]=255}let ve=new Ei(_e,256,256,w);ve.magFilter=o,ve.minFilter=o,ve.needsUpdate=!0;let ye=Dm(ve,r.size,new R(_.x,_.y,_.z));ye.uniforms.uDepth.value=ve;let be=n===`alta`?260:180,xe=new _a($m,$m,be,be);xe.rotateX(-Math.PI/2);let Se=new V(xe,ye);Se.frustumCulled=!1,e.add(Se);let Ce=$m/be;u.push(e=>{ye.uniforms.uTime.value=e});let we=nh[r.kind],Te=r.kind===`magica`?jm(m):r.kind===`selva`||r.kind===`pirata`?Vm(m):Km(m),Ee=new rn,De=new Nt,Oe=new R,ke=new R,Ae=new mn,je=m.place(we.palms,3.2,(e,t,n)=>n>.6&&n<2.6&&m.slope(e,t)<.6);m.spots.palms=je;let Me=1.3,Ne=new U(.16,.26,5,8,10);Ne.translate(0,5/2,0);{let e=Ne.attributes.position;for(let t=0;t<e.count;t++){let n=e.getY(t),r=1+.08*Math.max(0,Math.sin(n*7));e.setX(t,e.getX(t)*r+Me*(n/5)**2),e.setZ(t,e.getZ(t)*r)}Ne.computeVertexNormals()}let Pe=new _a(.9,2.8,2,8);{let e=Pe.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),r=e.getY(t)+1.4,i=Math.sin(r/2.8*Math.PI);e.setX(t,n*i),e.setZ(t,-r),e.setY(t,-.12*r*r+.5*r-Math.abs(n)*.35)}Pe.computeVertexNormals()}let Fe=new Fi(Ne,eh(`#9c7448`),Math.max(1,je.length)),Ie=new Fi(Pe,eh(`#3fa83a`,{side:2,roughness:.7}),Math.max(1,je.length*7)),N=new Fi(new W(.17,8,6),eh(`#6b4a2a`),Math.max(1,je.length*3));Fe.count=je.length,Ie.count=je.length*7,N.count=je.length*3,je.forEach((e,t)=>{let n=a()*Math.PI*2,r=.85+a()*.4;De.setFromEuler(Ae.set(0,n,0));let i=new R(e.x,e.h-.1,e.z);Ee.compose(i,De,ke.setScalar(r)),Fe.setMatrixAt(t,Ee);let o=new R(Me,5,0).applyQuaternion(De).multiplyScalar(r).add(i);for(let e=0;e<7;e++){let n=new Nt().setFromEuler(new mn(.15-a()*.25,e/7*Math.PI*2+a()*.4,0,`YXZ`));Ee.compose(o,n,ke.setScalar(r*(.85+a()*.3))),Ie.setMatrixAt(t*7+e,Ee)}for(let e=0;e<3;e++){let i=e/3*Math.PI*2+n;Ee.compose(Oe.set(o.x+Math.cos(i)*.22,o.y-.25,o.z+Math.sin(i)*.22),De,ke.setScalar(r)),N.setMatrixAt(t*3+e,Ee)}let c={x:e.x,z:e.z,r:.45,enabled:!0};s.push(c);let l=new Bm(`palmera-${t}`,`palmera`,e.x,e.z,e.h-.1,1.6,c);l.add(Fe,t);for(let e=0;e<7;e++)l.add(Ie,t*7+e);for(let e=0;e<3;e++)l.add(N,t*3+e);m.chop.push(l)});for(let t of[Fe,Ie,N])t.castShadow=!0,t.receiveShadow=!0,e.add(t);let Le=m.place(we.rocks,2.2,(e,t,n)=>n>-1.5),Re=new Fi(new ha(.7,0),eh(r.kind===`volcan`?`#3a3433`:r.kind===`cristal`?`#c9b8e8`:r.kind===`desierto`?`#c99a68`:`#a59c93`,{flatShading:!0}),Math.max(1,Le.length));Re.count=Le.length,Le.forEach((e,t)=>{let n=.5+a()*1.1;Ee.compose(Oe.set(e.x,e.h+.1*n,e.z),De.setFromEuler(Ae.set(a()*3,a()*3,a()*3)),ke.set(n,n*.7,n)),Re.setMatrixAt(t,Ee);let r=null;n>.8&&(r={x:e.x,z:e.z,r:.6*n,enabled:!0},s.push(r));let i=new Bm(`roca-${t}`,`roca`,e.x,e.z,e.h,1.2+.6*n,r);i.add(Re,t),m.chop.push(i)}),Re.castShadow=!0,Re.receiveShadow=!0,e.add(Re),l.push(Re);let ze=(n===`alta`?700:400)*we.grass,P=m.place(Math.round(ze),.6,(e,t,n)=>n>1.1&&m.slope(e,t)<.8),Be=new Fi(new fa(.08,.55,3).translate(0,.25,0),eh(we.grassColor),Math.max(1,P.length*3));Be.count=P.length*3,P.forEach((e,t)=>{for(let n=0;n<3;n++)Ee.compose(Oe.set(e.x+(a()-.5)*.4,e.h,e.z+(a()-.5)*.4),De.setFromEuler(Ae.set((a()-.5)*.5,a()*3,(a()-.5)*.5)),ke.setScalar(.7+a()*.7)),Be.setMatrixAt(t*3+n,Ee)}),e.add(Be);let Ve=m.place(we.flowers,.8,(e,t,n)=>n>1.3&&m.slope(e,t)<.6),F=new Fi(new ha(.13,0),eh(`#ffffff`,{roughness:.5}),Math.max(1,Ve.length));F.count=Ve.length;let He=we.flowerColors.map(e=>new B(e));Ve.forEach((e,t)=>{Ee.compose(Oe.set(e.x,e.h+.18,e.z),De.identity(),ke.setScalar(.8+a()*.6)),F.setMatrixAt(t,Ee),F.setColorAt(t,He[Math.floor(a()*He.length)])}),e.add(F),Te();let Ue=new R(_.x,_.y,_.z),We=new B(`#fff0d6`),Ge=new B(`#ff9a5c`),Ke=new B(`#a9c4ff`),qe=new B(`#b9def0`),Je=new B(`#0d1b36`),Ye=new B(`#f2b38a`),Xe=new B(`#cfe9ff`),Ze=new B(`#3d5488`),Qe=new B(`#1a7fa8`),$e=new R,I=null,L=1,et=15;function tt(t){et=t;let n=nm(t),r=rm(t);g.sunPosition.value.set(n.x,n.y,n.z).multiplyScalar(100);let i=2.2*r,a=.55*(1-r);i>=a?(Ue.set(n.x,n.y,n.z),T.color.copy(Ge).lerp(We,Mf(0,.35,n.y)),T.intensity=i):(Ue.set(-n.x,-n.y,-n.z),T.color.copy(Ke),T.intensity=a),C.intensity=.18+.45*r,C.color.copy(Ze).lerp(Xe,r),e.environmentIntensity=.06+.24*r,L=r,S.color.copy(Je).lerp(qe,r).lerp(Ye,Mf(.3,.02,Math.abs(n.y))*.5),ye.uniforms.uSunDir.value.copy(Ue),ye.uniforms.uSky.value.copy(S.color).lerp(qe,.25*r),nt(),ye.uniforms.uLight.value=.22+.78*r,te.opacity=1-Mf(0,.5,r),A.visible=te.opacity>.01,ne.position.set(-n.x,-n.y,-n.z).multiplyScalar(1600),ne.visible=-n.y>-.1,T.position.copy($e).addScaledVector(Ue,60)}function nt(){I===null?(S.near=120,S.far=470):(S.color.copy(Qe).multiplyScalar(.18+.82*L),S.near=.5,S.far=I)}function rt(e){if(e===I)return;let t=I!==null;I=e,t&&e===null?tt(et):nt()}function it(e,t){$e.set(e,0,t),T.target.position.set(e,0,t),T.position.copy($e).addScaledVector(Ue,60),Se.position.set(Math.round(e/Ce)*Ce,0,Math.round(t/Ce)*Ce),A.position.set(e,0,t)}return tt(15),it(0,0),{island:r,colliders:s,breakables:c,sun:T,lightDir:Ue,mirrorPos:m.mirrorPos,portalPos:m.portalPos,cameraBlockers:l,spots:m.spots,chop:m.chop,setHour:tt,setUnderwater:rt,follow:it,update(e,t){for(let n of u)n(e,t);for(let e of c)if(e.broken)e.timer-=t,e.timer<=0&&(e.broken=!1,e.mesh.visible=!0,e.mesh.scale.set(.01,.01,.01),e.collider.enabled=!0);else if(e.mesh.scale.x<1){let n=Math.min(1,e.mesh.scale.x+t*1.5);e.mesh.scale.set(n,n*.8,n)}},dispose(){let t=new Set,n=new Set;e.traverse(e=>{let r=e;r.geometry&&n.add(r.geometry),r.material&&(Array.isArray(r.material)?r.material:[r.material]).forEach(e=>t.add(e))});for(let e of n)e.dispose();for(let e of t){for(let t of Object.values(e))t instanceof Zt&&t.dispose();e.dispose()}ve.dispose(),x.dispose(),e.clear()}}}var ih={selva:`#2e7d32`,pirata:`#388e3c`,nieve:`#1f5a3a`,pantano:`#4f6b35`,cristal:`#f48fb1`,volcan:`#2b2523`,desierto:`#3f8f4a`,misteriosa:`#2c2340`};function ah(e,t){let n=new z;n.name=`far-islands`;let r=new ja({vertexColors:!0,roughness:.95}),i=new ha(2.2,0);for(let{def:e,ox:a,oz:o}of t){let t=th[e.kind],s=new _a(e.size,e.size,56,56);s.rotateX(-Math.PI/2);let c=s.attributes.position,l=new Float32Array(c.count*3),u=new B(t.sand),d=new B(t.grass),f=new B(t.rock),p=new B;for(let t=0;t<c.count;t++){let n=e.heightAt(c.getX(t),c.getZ(t));c.setY(t,n),p.copy(u).lerp(d,Mf(.7,1.4,n)).lerp(f,Mf(8,12,n)),l.set([p.r,p.g,p.b],t*3)}s.setAttribute(`color`,new yr(l,3)),s.computeVertexNormals();let m=new V(s,r);m.position.set(a,0,o),n.add(m);let h=ih[e.kind];if(h){let t=Ff(e.seed+99),r=[];for(let n=0;n<400&&r.length<36;n++){let n=t()*Math.PI*2,i=Math.sqrt(t())*e.radius*.8,s=Math.cos(n)*i,c=Math.sin(n)*i,l=e.heightAt(s,c);l>1.4&&l<12&&r.push(new R(a+s,l+3,o+c))}let s=new Fi(i,new ja({color:h,flatShading:!0,roughness:.9}),Math.max(1,r.length));s.count=r.length;let c=new rn;r.forEach((t,n)=>s.setMatrixAt(n,c.makeScale(1,e.kind===`nieve`||e.kind===`desierto`?1.8:1.3,1).setPosition(t))),n.add(s)}if(e.crater){let t=new V(new da(e.crater.r+1.5,20).rotateX(-Math.PI/2),new fi({color:`#ff6d00`}));t.position.set(a+e.crater.x,e.crater.y-.6,o+e.crater.z),n.add(t)}}return e.add(n),n}var oh=(e,t)=>`${e},${t}`;function sh(e){let t=/^(-?\d{1,4}),(-?\d{1,4})$/.exec(e);return t?{i:Number(t[1]),j:Number(t[2])}:null}function ch(e,t,n){return t===0&&n===0?{x:0,z:0}:{x:t*380+(jf(t,n,e+11)-.5)*90,z:n*380+(jf(t,n,e+23)-.5)*90}}var lh=[`volcan`,`nieve`,`desierto`,`pantano`,`cristal`,`pirata`,`selva`],uh=[];for(let e=-2;e<=2;e++)for(let t=-2;t<=2;t++)Math.max(Math.abs(e),Math.abs(t))===2&&uh.push([e,t]);function dh(e){let[t,n]=uh[Math.floor(jf(0,0,e+77)*uh.length)%uh.length];return{i:t,j:n}}function fh(e,t,n){let r=dh(e);return r.i===t&&r.j===n}function ph(e,t,n){if(t===0&&n===0)return`selva`;if(fh(e,t,n))return`misteriosa`;if(Math.max(Math.abs(t),Math.abs(n))===1){let r=[...lh],i=Ff(e*13+7);for(let e=r.length-1;e>0;e--){let t=Math.floor(i()*(e+1));[r[e],r[t]]=[r[t],r[e]]}return r[[[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0]].findIndex(([e,r])=>e===t&&r===n)%r.length]}return lh[Math.floor(jf(t,n,e+5)*lh.length)%lh.length]}function mh(e,t,n){return t===0&&n===0?e:1+Math.floor(jf(t,n,e+31)*999e6)}var hh=new Map;function gh(e,t,n){let r=`${e}:${t},${n}`,i=hh.get(r);return i||(i=t===0&&n===0?_m(e):ym(mh(e,t,n),ph(e,t,n)),i.cell={i:t,j:n},hh.size>80&&hh.clear(),hh.set(r,i)),i}function _h(e,t,n){return t===0&&n===0?`Isla del Avión`:pm[ph(e,t,n)].name}function vh(e,t,n){let r=Math.round(t/380),i=Math.round(n/380),a={i:r,j:i,score:1/0};for(let o=r-1;o<=r+1;o++)for(let r=i-1;r<=i+1;r++){let i=ch(e,o,r),s=Math.hypot(t-i.x,n-i.z)-gh(e,o,r).radius;s<a.score&&(a={i:o,j:r,score:s})}return a}function yh(e,t,n,r){let i=ch(e,t.i,t.j);return Math.hypot(n-i.x,r-i.z)-gh(e,t.i,t.j).radius}function bh(e,t){let n=Math.atan2(e,-t);return n<0?n+Math.PI*2:n}var xh=1500,Sh={selva:{wrecks:1,sharks:2},pirata:{wrecks:2,sharks:3},volcan:{wrecks:1,sharks:2},nieve:{wrecks:1,sharks:2},desierto:{wrecks:1,sharks:2},pantano:{wrecks:1,sharks:1},cristal:{wrecks:1,sharks:2}},Ch=new WeakMap;function wh(e){let t=Ch.get(e);if(t)return t;let n=Sh[e.kind]??{wrecks:0,sharks:0},r=Ff(e.seed*13+101),i=e.heightAt,a=[],o=e.radius*.85,s=e.bound-12;for(let e=0;a.length<n.wrecks&&e<600;e++){let e=r()*Math.PI*2,t=o+r()*(s-o),n=Math.cos(e)*t,c=Math.sin(e)*t,l=r()*Math.PI*2,u=Math.sin(l),d=Math.cos(l),f=[[0,0],[u*4.5,d*4.5],[-u*4.5,-d*4.5],[d*2,-u*2],[-d*2,u*2]].map(([e,t])=>i(n+e,c+t));if(Math.max(...f)>-5||Math.max(...f)-Math.min(...f)>1.5||a.some(e=>Math.hypot(e.x-n,e.z-c)<40))continue;let p=Math.min(...f),m=`cofre-${a.length}`;a.push({key:m,x:n,z:c,yaw:l,tilt:(r()-.5)*.5,floor:p,chest:{x:n-u*1.2,z:c-d*1.2,y:p+.35}})}let c=[];a.forEach((e,t)=>{let n=t%2?1:-1;c.push({kind:`pulpo`,key:`pulpo-${t}`,x:e.x+Math.cos(e.yaw)*4*n,z:e.z-Math.sin(e.yaw)*4*n})});let l=Ff(e.seed*17+5);a.forEach((t,n)=>{if(e.kind!==`pirata`&&l()>.55)return;let r=n%2?-1:1;c.push({kind:`esqueleto`,key:`esqueleto-${n}`,x:t.x+Math.cos(t.yaw)*3*r+Math.sin(t.yaw)*2,z:t.z-Math.sin(t.yaw)*3*r+Math.cos(t.yaw)*2})});for(let t=0,o=0;o<n.sharks&&t<600;t++){let t=r()*Math.PI*2,n=e.radius+14+r()*Math.max(4,e.bound-e.radius-24),s=Math.cos(t)*n,l=Math.sin(t)*n;i(s,l)>-5||a.some(e=>Math.hypot(e.x-s,e.z-l)<25)||c.some(e=>e.kind===`tiburon`&&Math.hypot(e.x-s,e.z-l)<35)||(c.push({kind:`tiburon`,key:`tiburon-${o}`,x:s,z:l}),o++)}if(e.kind===`misteriosa`)for(let t=0;t<72;t++){let n=t/72*Math.PI*2,r=Math.cos(n)*(e.radius+22),a=Math.sin(n)*(e.radius+22);if(i(r,a)<-5){c.push({kind:`monstruo`,key:`monstruo-0`,x:r,z:a});break}}let u={wrecks:a,spawns:c};return Ch.set(e,u),u}var Th=[[[`oro`,6],[`aire`,1]],[[`oro`,4],[`perla`,1],[`botiquin`,1]],[[`oro`,9],[`galletas`,2]],[[`perla`,2],[`cuerda`,3],[`aire`,1]],[[`oro`,5],[`pez-dorado`,2]],[[`oro`,12],[`perla`,1]]];function Eh(e){return Th[Math.min(Th.length-1,Math.max(0,Math.floor(e*Th.length)))]}function Dh(e,t,n){return e.heightAt(t,n)<-2.2&&Math.hypot(t,n)<e.bound+30}function Oh(e,t,n){let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.textContent=n),r}var kh=`"Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif`,Ah=class{root=Oh(`div`,`map hidden`);canvas=Oh(`canvas`);title=Oh(`div`,`map-title`);hint=Oh(`div`,`map-hint`);zoom=1;shapes=new Map;last=null;constructor(e,t){let n=Oh(`div`,`map-card`),r=Oh(`button`,`btn small map-close`,`✕ Cerrar`);r.addEventListener(`click`,t);let i=Oh(`div`,`map-zoom`),a=Oh(`button`,`btn small`,`＋`),o=Oh(`button`,`btn small`,`－`);a.addEventListener(`click`,()=>{this.zoom=Math.min(4,this.zoom*1.5),this.last&&this.draw(this.last)}),o.addEventListener(`click`,()=>{this.zoom=Math.max(.5,this.zoom/1.5),this.last&&this.draw(this.last)}),i.append(a,o),n.append(this.canvas,this.title,r,i,this.hint),this.root.append(n),this.root.addEventListener(`pointerdown`,e=>{e.target===this.root&&t()}),e.append(this.root)}get isOpen(){return!this.root.classList.contains(`hidden`)}open(e,t){this.root.classList.remove(`hidden`);let n=t===`mando`?`Start`:t===`tactil`?`✕`:`M`;this.hint.textContent=`🔺 Tú · ✈️ El avión · ⚓ Barco hundido · ❗ Amigo · ❔ Sin descubrir · Pulsa ${n} para cerrar`,this.draw(e)}close(){this.root.classList.add(`hidden`)}shape(e,t){let n=`${e}:${oh(t.i,t.j)}`,r=this.shapes.get(n);if(r)return r;let i=gh(e,t.i,t.j),a=th[i.kind];r=document.createElement(`canvas`),r.width=r.height=72;let o=r.getContext(`2d`),s=o.createImageData(72,72),c=e=>[parseInt(e.slice(1,3),16),parseInt(e.slice(3,5),16),parseInt(e.slice(5,7),16)],l=c(a.sand),u=c(a.grass),d=c(a.rock);for(let e=0;e<72;e++)for(let t=0;t<72;t++){let n=(t/71-.5)*i.size,r=(e/71-.5)*i.size,a=i.heightAt(n,r),o=(e*72+t)*4,c=null,f=255;a<-1.6?(f=0,c=[0,0,0]):a<0?(c=[120,205,245],f=150):c=a<.8?l:a>9?d:u,i.crater&&Math.hypot(n-i.crater.x,r-i.crater.z)<i.crater.r+1&&(c=[255,109,0],f=255),s.data[o]=c[0],s.data[o+1]=c[1],s.data[o+2]=c[2],s.data[o+3]=f}return o.putImageData(s,0,0),this.shapes.size>60&&this.shapes.clear(),this.shapes.set(n,r),r}draw(e){if(this.last=e,!this.isOpen)return;let t=Math.min(2,window.devicePixelRatio||1),n=Math.max(1,Math.round(this.canvas.clientWidth*t)),r=Math.max(1,Math.round(this.canvas.clientHeight*t));(this.canvas.width!==n||this.canvas.height!==r)&&(this.canvas.width=n,this.canvas.height=r);let i=this.canvas.getContext(`2d`),a=[...e.seen].map(sh).filter(e=>!!e),o=e.player.x,s=e.player.x,c=e.player.z,l=e.player.z;for(let t of a){let n=ch(e.seed,t.i,t.j);o=Math.min(o,n.x),s=Math.max(s,n.x),c=Math.min(c,n.z),l=Math.max(l,n.z)}let u=Math.min(n/(s-o+860),r/(l-c+860))*this.zoom,d=this.zoom>1?e.player.x:(o+s)/2,f=this.zoom>1?e.player.z:(c+l)/2,p=e=>n/2+(e-d)*u,m=e=>r/2+(e-f)*u,h=i.createLinearGradient(0,0,0,r);h.addColorStop(0,`#1e88e5`),h.addColorStop(1,`#1559b0`),i.fillStyle=h,i.fillRect(0,0,n,r),i.strokeStyle=`rgba(255,255,255,0.13)`,i.lineWidth=2*t;for(let e=Math.floor((d-n/2/u)/95)*95;e<d+n/2/u;e+=95)for(let n=Math.floor((f-r/2/u)/95)*95;n<f+r/2/u;n+=95){let r=p(e+Math.abs(n/95)%2*95/2),a=m(n);i.beginPath(),i.moveTo(r-8*t,a),i.quadraticCurveTo(r-4*t,a-4*t,r,a),i.quadraticCurveTo(r+4*t,a+4*t,r+8*t,a),i.stroke()}let g=new Set(a.map(e=>oh(e.i,e.j))),_=new Set;for(let e of a)for(let t=e.i-1;t<=e.i+1;t++)for(let n=e.j-1;n<=e.j+1;n++){let e=oh(t,n);g.has(e)||_.add(e)}i.textAlign=`center`,i.textBaseline=`middle`,i.font=`${Math.round(22*t)}px ${kh}`,i.globalAlpha=.55;for(let t of _){let n=sh(t),r=ch(e.seed,n.i,n.j);i.fillText(`❔`,p(r.x),m(r.z))}i.globalAlpha=1;let v=Math.round(Math.max(11,Math.min(16,u*120))*t);for(let n of a){let r=gh(e.seed,n.i,n.j),a=ch(e.seed,n.i,n.j),o=r.size*u;i.imageSmoothingEnabled=!0,i.drawImage(this.shape(e.seed,n),p(a.x)-o/2,m(a.z)-o/2,o,o);let s=n.i===0&&n.j===0,c=s?`✈️`:pm[r.kind]?.icon??`🏝️`;i.font=`${Math.round(Math.max(16,Math.min(30,o*.22)))}px ${kh}`;let l=s&&r.wreck?p(a.x+r.wreck.x):p(a.x),d=s&&r.wreck?m(a.z+r.wreck.z):m(a.z);i.fillText(c,l,d),i.font=`800 ${v}px system-ui, sans-serif`;let f=_h(e.seed,n.i,n.j),h=m(a.z)+Math.max(o*.42,18*t);i.lineWidth=4*t,i.strokeStyle=`rgba(10,30,60,0.75)`,i.strokeText(f,p(a.x),h),i.fillStyle=n.i===e.current.i&&n.j===e.current.j?`#ffe082`:`#ffffff`,i.fillText(f,p(a.x),h)}i.font=`${Math.round(15*t)}px ${kh}`;for(let t of a){let n=ch(e.seed,t.i,t.j),r=gh(e.seed,t.i,t.j);for(let e of wh(r).wrecks)i.fillText(`⚓`,p(n.x+e.x),m(n.z+e.z));let a=Xf(r);a&&i.fillText(`❗`,p(n.x+a.x),m(n.z+a.z));let o=r.kind===`misteriosa`?`ogro`:oh(t.i,t.j);if(!e.beaten?.has(o)){let e=Uf(r).spawns.find(e=>If[e.kind].boss);e&&i.fillText(`👑`,p(n.x+e.x),m(n.z+e.z))}}i.font=`${Math.round(18*t)}px ${kh}`;for(let t of e.boats)i.fillText(t.icon,p(t.x),m(t.z));for(let n of e.players??[])i.font=`${Math.round(20*t)}px ${kh}`,i.fillText(`🧑`,p(n.x),m(n.z)),i.font=`800 ${Math.round(12*t)}px system-ui, sans-serif`,i.lineWidth=3*t,i.strokeStyle=`rgba(10,30,60,0.8)`,i.strokeText(n.name,p(n.x),m(n.z)-16*t),i.fillStyle=`#b2ff59`,i.fillText(n.name,p(n.x),m(n.z)-16*t);let y=p(e.player.x),b=m(e.player.z);i.save(),i.translate(y,b),i.rotate(Math.atan2(Math.sin(e.player.yaw),Math.cos(e.player.yaw))*-1+Math.PI);let x=11*t;i.beginPath(),i.moveTo(0,-x*1.3),i.lineTo(x,x),i.lineTo(0,x*.45),i.lineTo(-x,x),i.closePath(),i.fillStyle=`#ff3d3d`,i.strokeStyle=`#ffffff`,i.lineWidth=3*t,i.fill(),i.stroke(),i.restore();let S=n-46*t,C=78*t;i.fillStyle=`rgba(243,220,162,0.92)`,i.beginPath(),i.arc(S,C,26*t,0,Math.PI*2),i.fill(),i.fillStyle=`#e53935`,i.beginPath(),i.moveTo(S,C-20*t),i.lineTo(S+7*t,C),i.lineTo(S-7*t,C),i.fill(),i.fillStyle=`#4e342e`,i.beginPath(),i.moveTo(S,C+20*t),i.lineTo(S+7*t,C),i.lineTo(S-7*t,C),i.fill(),i.font=`900 ${Math.round(12*t)}px system-ui, sans-serif`,i.fillStyle=`#ffffff`,i.fillText(`N`,S,C-11*t),this.title.textContent=`🗺️ Mapa del océano · ${a.length} ${a.length===1?`isla descubierta`:`islas descubiertas`}`}},jh=(e,t={})=>new ja({color:e,roughness:.9,...t});function Mh(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new oa(e);return r.colorSpace=Ve,r}function Nh(e){let t=new z,n=jh(`#5b4a3a`,{flatShading:!0}),r=jh(`#3f3328`,{flatShading:!0}),i=jh(`#4f6b4a`,{flatShading:!0}),a=(e,n,r,i,a,o=0,s=0,c=0)=>{let l=new V(e,n);return l.position.set(r,i,a),l.rotation.set(o,s,c),l.castShadow=!0,l.receiveShadow=!0,t.add(l),l};a(new H(2.6,.25,7.6),r,0,.3,0),a(new H(.25,2,7.6),n,-1.45,1.2,0,0,0,-.12),a(new H(.25,2,3.2),n,1.45,1.2,-2.2,0,0,.12),a(new H(.25,.9,2.4),n,1.45,.7,2.6,0,0,.12);for(let e of[-1,1])a(new H(.25,2,2.6),n,e*.75,1.2,4.6,0,e*.55,0);a(new H(3.1,2.4,.3),n,0,1.4,-3.9),a(new H(2.4,.9,.5),r,0,2.6,-3.7);for(let[e,t,n]of[[-1.5,.7,1],[1.5,1.5,-3],[-1.4,1.9,-2.2],[.6,2.95,-3.7]])a(new W(.45,8,6),i,e,t,n).scale.set(1,.35,1.3);a(new U(.15,.18,4.2,8),r,0,2.3,.6,.5,0,.15),a(new U(.13,.15,3.6,8),r,2.6,-.1,3,Math.PI/2,.8,0);let o=a(new _a(1.8,2.2,3,3),jh(`#a89f88`,{side:2,transparent:!0,opacity:.85}),.2,3,1.4,.5,.2,.1).geometry.attributes.position;for(let e=0;e<o.count;e++)o.setZ(e,Math.sin(o.getX(e)*2+o.getY(e))*.2);return a(new _a(.8,.5),jh(`#151515`,{side:2}),.5,4.2,1.6,.3,Math.PI/2,0),t.position.set(e.x,e.floor-.4,e.z),t.rotation.set(0,e.yaw,e.tilt,`YXZ`),t}function Ph(e){let t=new z,n=jh(`#7a4a26`,{flatShading:!0}),r=jh(`#ffca28`,{metalness:.6,roughness:.35,emissive:`#5a4200`,emissiveIntensity:.4}),i=new V(new H(.95,.55,.62),n);i.castShadow=!0,t.add(i);for(let e of[-.3,.3]){let n=new V(new H(.07,.57,.64),r);n.position.x=e,t.add(n)}let a=new z,o=new ja({color:`#ffd54f`,metalness:.7,roughness:.3,emissive:`#b8860b`,emissiveIntensity:.6});for(let e=0;e<9;e++){let t=new V(new U(.09,.09,.03,10),o);t.position.set((e%3-1)*.22,.28+e%2*.03,(Math.floor(e/3)-1)*.15),t.rotation.set(e%2*.3,0,.2*(e*7%3-1)),a.add(t)}let s=new V(new ga(.09),new ja({color:`#e040fb`,emissive:`#7b1fa2`,emissiveIntensity:.6}));s.position.set(.1,.36,.05),a.add(s),t.add(a);let c=new z;c.position.set(0,.275,-.31);let l=new V(new U(.31,.31,.95,12,1,!1,0,Math.PI).rotateZ(Math.PI/2),n);l.position.z=.31,l.castShadow=!0,c.add(l);for(let e of[-.3,.3]){let t=new V(new U(.325,.325,.07,12,1,!1,0,Math.PI).rotateZ(Math.PI/2),r);t.position.set(e,0,.31),c.add(t)}t.add(c);let u=new ai(new Gr({map:e,color:`#ffd54f`,transparent:!0,opacity:.8,depthWrite:!1,blending:2}));return u.scale.setScalar(2.4),u.position.y=.45,t.add(u),{g:t,lid:c,gold:a,glow:u}}var Fh=class{scene;chests=[];wrecks;floor;floorStep=4;kelp;kelpData=[];fish;schools=[];columns=[];bubbles=[];bubbleGeo=new W(.07,6,4);bubbleMat=new fi({color:`#e8fbff`,transparent:!0,opacity:.7,depthWrite:!1});m4=new rn;q=new Nt;e=new mn;v=new R;s=new R;constructor(e,t,n,r={},i=[]){this.scene=e;let a=t.heightAt,o=Ff(t.seed*17+5),s=wh(t);this.wrecks=s.wrecks;let c=Mh(),l=new B(th[t.kind].sandWet).multiplyScalar(.85);this.floor=new V(new _a(1e3,1e3).rotateX(-Math.PI/2),new ja({color:l,roughness:1})),this.floor.position.y=-8.05,this.floor.receiveShadow=!0,e.add(this.floor);for(let t of s.wrecks){let n=Nh(t);e.add(n),i.push(n);let a=Ph(c);a.g.position.set(t.chest.x,t.chest.y,t.chest.z),a.g.rotation.y=t.yaw+Math.PI,e.add(a.g);let s={plan:t,open:!1,timer:0,lid:a.lid,gold:a.gold,glow:a.glow},l=r[t.key];typeof l==`number`&&l>0&&(s.open=!0,s.timer=l),this.setChest(s),this.chests.push(s);let u=new Fi(new W(.07,6,4),this.bubbleMat,14);u.frustumCulled=!1,e.add(u);let d=[];for(let n=0;n<7;n++){let n=new ai(new Gr({map:c,color:`#ffffff`,transparent:!0,opacity:.8,depthWrite:!1}));n.position.set(t.x+(o()-.5)*4,.3,t.z+(o()-.5)*4),e.add(n),d.push(n)}this.columns.push({mesh:u,x:t.x,z:t.z,floor:t.floor,seeds:Array.from({length:14},()=>o()),foam:d})}let u=(e,n)=>{let r=[];for(let i=0;r.length<e&&i<e*40;i++){let e=o()*Math.PI*2,i=t.radius*.6+o()*(t.bound-t.radius*.6),s=Math.cos(e)*i,c=Math.sin(e)*i,l=a(s,c);n(l)&&r.push({x:s,z:c,y:l})}return r},d=(e,t)=>s.wrecks.flatMap(n=>Array.from({length:e},()=>{let e=o()*Math.PI*2,r=4+o()*t,i=n.x+Math.cos(e)*r,s=n.z+Math.sin(e)*r;return{x:i,z:s,y:a(i,s)}})),f=[...u(n===`alta`?70:40,e=>e<-2.2&&e>-8.5),...d(8,6)],p=new _a(.4,1,1,6).translate(0,.5,0);{let e=p.attributes.position;for(let t=0;t<e.count;t++){let n=e.getY(t);e.setX(t,e.getX(t)*(1-n*.6)+Math.sin(n*5)*.08)}p.computeVertexNormals()}this.kelp=new Fi(p,jh(`#3f9a4a`,{side:2,roughness:.7}),Math.max(1,f.length*2)),this.kelp.count=f.length*2,f.forEach(e=>{let t=Math.max(1,-.8-e.y);for(let n=0;n<2;n++)this.kelpData.push({x:e.x+(o()-.5)*.6,y:e.y,z:e.z+(o()-.5)*.6,h:Math.min(t,1.8+o()*3.5),p:o()*6,ry:o()*Math.PI})}),e.add(this.kelp);let m=[...u(n===`alta`?60:35,e=>e<-1.8&&e>-8.5),...d(10,7)],h=new Fi(new ha(.45,0),jh(`#ffffff`,{flatShading:!0,roughness:.6}),Math.max(1,m.length*2)),g=new Fi(new fa(.12,1,5).translate(0,.5,0),jh(`#ffffff`,{roughness:.6}),Math.max(1,m.length*3));h.count=m.length*2,g.count=m.length*3;let _=[`#ff7aa2`,`#ff9f43`,`#b388ff`,`#ffd54f`,`#4dd0e1`,`#ff5252`].map(e=>new B(e));m.forEach((e,t)=>{let n=_[Math.floor(o()*_.length)];for(let r=0;r<2;r++){let i=.5+o()*.9;this.m4.compose(this.v.set(e.x+(o()-.5),e.y+.1,e.z+(o()-.5)),this.q.setFromEuler(this.e.set(o()*3,o()*3,o()*3)),this.s.set(i,i*.7,i)),h.setMatrixAt(t*2+r,this.m4),h.setColorAt(t*2+r,n)}for(let n=0;n<3;n++){let r=.6+o()*.9;this.m4.compose(this.v.set(e.x+(o()-.5)*.8,e.y,e.z+(o()-.5)*.8),this.q.setFromEuler(this.e.set((o()-.5)*.9,0,(o()-.5)*.9)),this.s.set(r,r,r)),g.setMatrixAt(t*3+n,this.m4),g.setColorAt(t*3+n,_[Math.floor(o()*_.length)])}}),h.receiveShadow=g.receiveShadow=!0,e.add(h,g);let v=u(5,e=>e<-3.5),y=0;for(let e of v){let t=9+Math.floor(o()*6);this.schools.push({x:e.x,z:e.z,y:Math.max(e.y+1.2,-4-o()*1.5),r:3+o()*4,speed:(.35+o()*.3)*(o()<.5?-1:1),n:t}),y+=t}this.fish=new Fi(new fa(.1,.42,5).rotateX(Math.PI/2),jh(`#ffffff`,{roughness:.4,emissive:`#222222`}),Math.max(1,y)),this.fish.count=y;let b=[`#ffb300`,`#29b6f6`,`#ff7043`,`#ffee58`,`#ab47bc`].map(e=>new B(e)),x=0;this.schools.forEach((e,t)=>{for(let n=0;n<e.n;n++)this.fish.setColorAt(x++,b[t%b.length])}),this.fish.frustumCulled=!1,e.add(this.fish)}setChest(e){e.gold.visible=!e.open,e.glow.visible=!e.open,e.lid.rotation.x=e.open?-1.9:-.35}nearestChest(e,t,n){let r=null;for(let i of this.chests){let a=Math.hypot(i.plan.chest.x-e,i.plan.chest.z-n);a>2.4||Math.abs(t-i.plan.chest.y)>2.2||(!r||a<r.dist)&&(r={chest:i,dist:a})}return r}open(e,t){return e.open?[]:(e.open=!0,e.timer=xh,this.setChest(e),Eh(t))}wreckNear(e,t,n){return this.wrecks.find(r=>Math.hypot(r.x-e,r.z-t)<n)??null}bubble(e,t,n){if(this.bubbles.length>40)return;let r=new V(this.bubbleGeo,this.bubbleMat);r.position.set(e+(Math.random()-.5)*.3,t,n+(Math.random()-.5)*.3),r.scale.setScalar(.6+Math.random()*.9),this.scene.add(r),this.bubbles.push({mesh:r,vy:1.2+Math.random()*.8,life:0})}update(e,t,n,r){this.floor.position.x=Math.round(n/this.floorStep)*this.floorStep,this.floor.position.z=Math.round(r/this.floorStep)*this.floorStep;for(let n of this.chests)n.open?(n.timer-=e,n.timer<=0&&(n.open=!1,n.timer=0,this.setChest(n))):n.glow.material.opacity=.55+.3*Math.sin(t*3);let{m4:i,q:a,e:o,v:s,s:c}=this;this.kelpData.forEach((e,n)=>{let r=Math.sin(t*1.3+e.p)*.18;i.compose(s.set(e.x,e.y,e.z),a.setFromEuler(o.set(r,e.ry,Math.cos(t*1.1+e.p)*.12,`YXZ`)),c.set(1,e.h,1)),this.kelp.setMatrixAt(n,i)}),this.kelp.instanceMatrix.needsUpdate=!0;let l=0;for(let e of this.schools)for(let n=0;n<e.n;n++){let r=t*e.speed+n/e.n*1.4+Math.sin(n*7.3)*.2,u=e.r+Math.sin(n*3.1)*.9,d=e.x+Math.cos(r)*u,f=e.z+Math.sin(r)*u,p=e.y+Math.sin(t*1.7+n)*.25+Math.cos(n*5.1)*.5,m=Math.atan2(-Math.sin(r)*e.speed,Math.cos(r)*e.speed);i.compose(s.set(d,p,f),a.setFromEuler(o.set(0,m+Math.sin(t*9+n)*.15,0)),c.set(1,1,1)),this.fish.setMatrixAt(l++,i)}this.fish.instanceMatrix.needsUpdate=!0;for(let e of this.columns){let n=-e.floor;e.seeds.forEach((r,o)=>{let l=(t*(.12+r*.08)+r)%1,u=e.floor+1+l*(n-1);i.compose(s.set(e.x+Math.sin(t+o)*.3+(r-.5)*2.5,Math.min(.05,u),e.z+Math.cos(t*1.3+o)*.3+(r-.3)*2),a.identity(),c.setScalar(.6+r*.6+l*.6)),e.mesh.setMatrixAt(o,i)}),e.mesh.instanceMatrix.needsUpdate=!0,e.foam.forEach((e,n)=>{let r=(t*.7+n*.37)%1;e.scale.setScalar(.5+r*1.2),e.material.opacity=.85*(1-r)})}for(let t=this.bubbles.length-1;t>=0;t--){let n=this.bubbles[t];n.life+=e,n.mesh.position.y+=n.vy*e,n.mesh.position.x+=Math.sin(n.life*8+t)*e*.3,(n.mesh.position.y>-.05||n.life>4)&&(this.scene.remove(n.mesh),this.bubbles.splice(t,1))}}save(){let e={};for(let t of this.chests)t.open&&(e[t.plan.key]=Math.max(1,Math.round(t.timer)));return e}},Ih={palo:300,piedra:300,coco:360,arbusto:240,maleta:1/0,fibra:240},Lh=5,Rh={palo:`Coger palo`,piedra:`Coger piedra`,coco:`Coger coco`,arbusto:`Coger bayas`,maleta:`Abrir maleta`,fibra:`Coger fibra`};function zh(e){switch(e.kind){case`palo`:return[[`palo`,1]];case`piedra`:return[[`piedra`,1]];case`coco`:return[[`coco`,1]];case`arbusto`:return[[`bayas`,3]];case`fibra`:return[[`fibra`,2]];case`maleta`:return rd[e.bag??0]??[]}}function Bh(e,t,n){let r=Ff(e.seed*31+5),i=[],a=e.heightAt,o=(e,t,r=.5)=>n.every(n=>Math.hypot(n.x-e,n.z-t)>n.r+r)&&i.every(n=>Math.hypot(n.x-e,n.z-t)>1.1),s=(e,t,n,i,a)=>{for(let s=0;s<12;s++){let s=r()*Math.PI*2,c=n+r()*(i-n),l=e+Math.cos(s)*c,u=t+Math.sin(s)*c;if(a(l,u)&&o(l,u))return{x:l,z:u}}return null},c=t=>s(0,0,0,e.size*.36,t),l=(e,t)=>a(e,t)>.35&&hm(a,e,t)<.9,u=e.wreck;if(u)for(let e=0;e<rd.length;e++){let t=s(u.x,u.z,4,8,(e,t)=>a(e,t)>.1);t&&i.push({kind:`maleta`,bag:e,...t})}for(let e of t.trees.slice(0,18))for(let t=0;t<2;t++){let t=s(e.x,e.z,1.4,3,l);t&&i.push({kind:`palo`,...t})}for(let e=0;e<12;e++){let e=c((e,t)=>l(e,t)&&a(e,t)>1);e&&i.push({kind:`palo`,...e})}for(let e=0;e<26;e++){let e=c(l);e&&i.push({kind:`piedra`,...e})}for(let e of t.palms)if(r()<.6){let t=s(e.x,e.z,.9,1.8,(e,t)=>a(e,t)>.2);t&&i.push({kind:`coco`,...t})}for(let e=0;e<16;e++){let e=c((e,t)=>a(e,t)>1.2&&hm(a,e,t)<.6);e&&i.push({kind:`arbusto`,...e})}for(let e=0;e<18;e++){let e=c((e,t)=>a(e,t)>1&&hm(a,e,t)<.8);e&&i.push({kind:`fibra`,...e})}return i}function Vh(e){let t=document.createElement(`canvas`);t.width=t.height=96;let n=t.getContext(`2d`);n.fillStyle=`rgba(255,255,255,0.88)`,n.beginPath(),n.arc(48,48,44,0,Math.PI*2),n.fill(),n.font=`58px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(e,48,52);let r=new oa(t);return r.colorSpace=Ve,r}var Hh=class{scene;island;world;nodes=[];drops=[];fires=[];icons=new Map;lights=[];geo;groundAt;mat;constructor(e,t,n,r,i){this.scene=e,this.island=t,this.world=n,this.groundAt=i??t.heightAt;let a=(e,t={})=>new ja({color:e,roughness:.85,...t});this.geo={palo:new U(.06,.07,1.1,6).rotateZ(Math.PI/2),rama:new U(.035,.04,.4,5).rotateZ(Math.PI/2-.7).translate(.15,.1,0),piedra:new ha(.22,0),coco:new W(.17,10,8),arbusto:new ha(.75,1),baya:new W(.085,8,6),maleta:new H(.8,.28,.52).translate(0,.14,0),tapa:new H(.8,.07,.52).translate(0,.035,.26),brillo:new ga(.16,0),piedraFuego:new ha(.16,0),tronco:new U(.07,.08,.9,6).rotateZ(Math.PI/2),llama:new fa(.28,.85,7).translate(0,.42,0),tallo:new fa(.05,1.3,4).translate(0,.65,0)},this.mat={palo:a(`#7a5230`),piedra:a(`#9e9a94`,{flatShading:!0}),coco:a(`#6b4a2a`),arbusto:a(`#3b8f3b`,{flatShading:!0}),baya:a(`#4a3bd1`,{emissive:`#1d1060`,roughness:.4}),tallo:a(`#b5cf4e`,{flatShading:!0}),brillo:new fi({color:`#ffd84d`}),llama:new fi({color:`#ff8a1f`,transparent:!0,opacity:.9,depthWrite:!1}),llama2:new fi({color:`#ffe066`,transparent:!0,opacity:.95,depthWrite:!1})};for(let t=0;t<2;t++){let t=new go(`#ff9a3c`,0,16,1.6);t.visible=!1,e.add(t),this.lights.push(t)}if(t.kind===`magica`)return;let o=r?.taken??{},s=new Set(r?.bags??[]),c=Bh(t,n.spots,n.colliders),l={};for(let e of c){let t=l[e.kind]=(l[e.kind]??-1)+1,n=this.makeNode(e.kind,`${e.kind}-${t}`,e.x,e.z,e.bag);e.kind===`maleta`?s.has(e.bag)&&this.setReady(n,!1):o[n.key]!==void 0&&(this.setReady(n,!1),n.timer=o[n.key]),this.nodes.push(n)}for(let e of n.chop)o[e.key]!==void 0&&e.setCut(o[e.key]);for(let e of r?.drops??[])this.addDrop(e.id,e.n,e.x,e.z);for(let e of r?.fires??[])this.addFire(e.x,e.z,!0)}makeNode(e,t,n,r,i){let a=this.island.heightAt(n,r),o=new z;o.position.set(n,a,r),o.rotation.y=(n*7.13+r*3.7)%(Math.PI*2);let s=(e,t,n=0,r=0,i=0)=>{let a=new V(this.geo[e],t);return a.position.set(n,r,i),a.castShadow=!0,o.add(a),a},c,l;if(e===`palo`&&(s(`palo`,this.mat.palo,0,.07,0),s(`rama`,this.mat.palo,0,.07,0)),e===`piedra`&&s(`piedra`,this.mat.piedra,0,.1,0).scale.set(1.2,.7,1),e===`coco`&&s(`coco`,this.mat.coco,0,.15,0),e===`fibra`)for(let e=0;e<9;e++){let t=e*2.4,n=s(`tallo`,this.mat.tallo,Math.cos(t)*.18*(e%3),0,Math.sin(t)*.18*(e%3));n.rotation.set(Math.cos(t)*.25,0,Math.sin(t)*.25),n.scale.y=.7+e%4*.15}if(e===`arbusto`){s(`arbusto`,this.mat.arbusto,0,.45,0).scale.set(1,.8,1);let e=new z;for(let t=0;t<9;t++){let n=t*2.4,r=.3+t%3*.2,i=.72-Math.abs(r-.45)*.5,a=new V(this.geo.baya,this.mat.baya);a.position.set(Math.cos(n)*i,r,Math.sin(n)*i),e.add(a)}o.add(e),c=e}if(e===`maleta`){let e=[`#e53935`,`#fdd835`,`#00acc1`],t=new ja({color:e[(i??0)%e.length],roughness:.6});s(`maleta`,t);let n=new z;n.position.set(0,.28,-.26);let r=new V(this.geo.tapa,t);r.castShadow=!0,n.add(r),o.add(n),c=n,l=new V(this.geo.brillo,this.mat.brillo),l.position.y=1.1,o.add(l)}return this.scene.add(o),{key:t,kind:e,x:n,z:r,y:a,ready:!0,timer:0,obj:o,bag:i,part:c,sparkle:l}}setReady(e,t){e.ready=t,e.kind===`arbusto`?e.part.visible=t:e.kind===`maleta`?(e.part.rotation.x=t?0:-1.9,e.sparkle.visible=t):e.obj.visible=t,t||(e.timer=Ih[e.kind])}nearest(e,t,n={}){let r=null,i=(e,t)=>{e.dist<t&&(!r||e.dist<r.dist)&&(r=e)};for(let n of this.nodes)n.ready&&i({type:`node`,node:n,dist:Math.hypot(n.x-e,n.z-t)},n.kind===`arbusto`||n.kind===`maleta`?1.9:1.6);for(let n of this.drops)i({type:`drop`,drop:n,dist:Math.hypot(n.x-e,n.z-t)},1.7);for(let n of this.fires)i({type:`fire`,fire:n,dist:Math.hypot(n.x-e,n.z-t)-.4},2.2);for(let r of this.world.chop)if(r.alive&&n[td[r.kind]]){let n=Math.hypot(r.x-e,r.z-t);n<r.reach&&i({type:`chop`,chop:r,dist:n-r.reach+1.2},1.2)}return r}hit(e,t,n,r){return!e.alive||(e.hits+=1,e.shake(),e.hits<ed(e.kind,t))?null:(e.cut(n,r),nd[e.kind])}harvest(e){return e.ready?(this.setReady(e,!1),zh(e)):[]}icon(e){let t=this.icons.get(e);return t||(t=new Gr({map:Vh(K[e].icon),depthWrite:!1}),this.icons.set(e,t)),t}addDrop(e,t,n,r){let i=this.drops.find(t=>t.id===e&&Math.hypot(t.x-n,t.z-r)<.8);if(i){i.n+=t;return}let a=new ai(this.icon(e));a.scale.setScalar(.55),this.scene.add(a);let o={id:e,n:t,x:n,z:r,obj:a};this.placeDrop(o),this.drops.push(o)}placeDrop(e){e.obj.position.set(e.x,Math.max(this.groundAt(e.x,e.z),0)+.45,e.z)}removeDrop(e){this.scene.remove(e.obj),this.drops=this.drops.filter(t=>t!==e)}canPlaceFire(e,t){return this.groundAt(e,t)<.25?`Las hogueras no se pueden poner en el agua`:hm(this.groundAt,e,t)>.6?`Aquí hay mucha cuesta. Busca un sitio llano`:this.fires.length>=4?`Ya tienes 4 hogueras. ¡Usa las que tienes!`:this.fires.some(n=>Math.hypot(n.x-e,n.z-t)<3)?`Hay otra hoguera muy cerca`:this.world.colliders.some(n=>n.enabled&&Math.hypot(n.x-e,n.z-t)<n.r+.8)?`No cabe aquí. Prueba en otro sitio`:null}addFire(e,t,n=!1){if(!n&&this.canPlaceFire(e,t))return!1;let r=new z;r.position.set(e,this.groundAt(e,t),t);for(let e=0;e<8;e++){let t=e/8*Math.PI*2,n=new V(this.geo.piedraFuego,this.mat.piedra);n.position.set(Math.cos(t)*.55,.08,Math.sin(t)*.55),n.castShadow=!0,r.add(n)}for(let e=0;e<3;e++){let t=new V(this.geo.tronco,this.mat.palo);t.position.y=.1+e*.04,t.rotation.y=e/3*Math.PI,r.add(t)}let i=new V(this.geo.llama,this.mat.llama),a=new V(this.geo.llama,this.mat.llama2);i.position.y=.12,a.position.y=.12,a.scale.setScalar(.6),r.add(i,a);let o=new ai;o.scale.setScalar(.5),o.position.y=1.4,o.visible=!1,r.add(o),this.scene.add(r);let s={x:e,z:t,r:.55,enabled:!0};return this.world.colliders.push(s),this.fires.push({x:e,z:t,obj:r,flames:[i,a],queue:[],t:0,cookingIcon:o,collider:s}),!0}cook(e,t){return e.queue.length>=Lh?!1:(e.queue.length===0&&(e.t=4),e.queue.push(t),!0)}update(e,t,n,r){let i=[];for(let e of this.world.chop)e.update(t);for(let n of this.nodes)!n.ready&&Number.isFinite(n.timer)&&(n.timer-=t,n.timer<=0&&this.setReady(n,!0)),n.sparkle?.visible&&(n.sparkle.rotation.y=e*2,n.sparkle.position.y=1.1+Math.sin(e*3)*.12);for(let t of this.drops)t.obj.position.y=Math.max(this.groundAt(t.x,t.z),0)+.45+Math.sin(e*2.5+t.x)*.08;for(let n of this.fires){let r=1+Math.sin(e*13+n.x)*.12+Math.sin(e*7.3)*.08;if(n.flames[0].scale.set(1,r,1),n.flames[1].scale.set(.6,.6*(2.1-r),.6),n.flames[0].rotation.y=e*1.5,n.queue.length){if(n.t-=t,n.cookingIcon.visible=!0,n.cookingIcon.material=this.icon(n.queue[0]),n.cookingIcon.position.y=1.35+Math.sin(e*4)*.05,n.t<=0){let e=n.queue.shift();i.push({fire:n,item:K[e].cooksTo??e}),n.t=4}}else n.cookingIcon.visible=!1}let a=[...this.fires].sort((e,t)=>Math.hypot(e.x-n,e.z-r)-Math.hypot(t.x-n,t.z-r));return this.lights.forEach((t,n)=>{let r=a[n];t.visible=!!r,r&&(t.position.set(r.x,r.obj.position.y+1,r.z),t.intensity=7*(1+Math.sin(e*11+n)*.08))}),i}save(){let e={};for(let t of this.nodes)!t.ready&&t.kind!==`maleta`&&(e[t.key]=Math.max(0,Math.round(t.timer)));for(let t of this.world.chop)t.alive||(e[t.key]=Math.max(1,Math.round(t.timer)));return{fires:this.fires.map(e=>({x:e.x,z:e.z})),bags:this.nodes.filter(e=>e.kind===`maleta`&&!e.ready).map(e=>e.bag),taken:e,drops:this.drops.map(e=>({id:e.id,n:e.n,x:e.x,z:e.z}))}}},Uh=window.matchMedia(`(pointer: coarse)`).matches,Wh=Uh?`baja`:`alta`,Gh=document.getElementById(`game`),Kh=document.getElementById(`ui`),qh=new eu({canvas:Gh,antialias:!0,powerPreference:`high-performance`});qh.setPixelRatio(Math.min(window.devicePixelRatio,Uh?1.5:2)),qh.setSize(window.innerWidth,window.innerHeight,!1),qh.toneMapping=7,qh.toneMappingExposure=.85,qh.shadowMap.enabled=!0,qh.shadowMap.type=1;var Jh=new mo(55,window.innerWidth/window.innerHeight,.1,5e3),Yh=Wd(),Xh=Yh?.character??{name:``,classId:`destructor`,look:zu()},Zh=Yh?.game??null,Qh=`titulo`,J=new vu(Xh.look,Xh.classId);J.root.rotation.order=`YXZ`;var $h=null,eg=mm,tg=new Bn,ng=new kp(tg),rg=rh(tg,qh,Wh,eg),ig=Vg(eg,rg),ag=new _f(tg),og=Hg(),sg=Ug();tg.add(J.root,og,sg.group);var Y=new gf(eg.spawn.x,eg.spawn.z,ig,eg.spawn.yaw),X=null,cg=null,Z=new id,lg=new af,ug=null,dg=new Rp(tg),fg=new hd,pg=0,mg=0,hg=15,gg=1,_g=1,vg={i:0,j:0},yg={x:0,z:0},bg={},xg=[],Sg=null,Cg=null,wg=new Set,Tg=0,Eg=null,Dg=null,Og={},kg=new Set,Ag=!1,jg=null,Mg=new Op,Ng=0,Pg=0,Fg=null,Ig=0,Lg=0,Rg=0,zg=0,Bg=0;function Vg(e,t){return{heightAt:(t,n)=>$h?$h.groundAt(t,n):e.heightAt(t,n),walkable:(t,n)=>{let r=Math.hypot(t,n);return r<e.bound||e.kind!==`magica`&&r<Math.hypot(Y.x,Y.z)},colliders:t.colliders}}function Hg(){let e=new V(new va(.55,.85,32).rotateX(-Math.PI/2),new fi({color:`#ffffff`,transparent:!0,opacity:.5,depthWrite:!1}));return e.visible=!1,e}function Ug(){let e=new z,t=new z,n=new V(new W(.12,12,8,0,Math.PI*2,0,Math.PI/2),new ja({color:`#e53935`,roughness:.4})),r=new V(new W(.12,12,8,0,Math.PI*2,Math.PI/2,Math.PI/2),new ja({color:`#ffffff`,roughness:.4}));t.add(n,r);let i=new Xi(new Pr().setFromPoints([new R,new R]),new Hi({color:`#f5f5f5`}));return i.frustumCulled=!1,e.add(t,i),e.visible=!1,{group:e,bob:t,line:i}}function Wg(e,t=!1){(e!==eg||t)&&(cg=null,$h=null,ug=null,Cg=null,Eg=null,Dg=null,Fg=null,Zg.close(),lg.cancel(),tg.remove(J.root),rg.dispose(),tg=new Bn,ng.attach(tg),dg=new Rp(tg),eg=e,rg=rh(tg,qh,Wh,e),ig=Vg(e,rg),ag=new _f(tg),og=Hg(),sg=Ug(),tg.add(J.root,og,sg.group))}var Q=new Ef(Kh,{onEditCharacter:()=>k_(),onPress:e=>e===`map`?rv():$.press(e),onRelease:e=>$.release(e),onMusic:()=>{Gg.unlock(),Gg.setEnabled(!Gg.enabled),Q.setMusic(Gg.enabled)}}),Gg=new up;Q.setMusic(Gg.enabled);var Kg=()=>Gg.unlock();window.addEventListener(`pointerdown`,Kg),window.addEventListener(`keydown`,Kg);var qg=new Up(Kh);window.addEventListener(`keydown`,e=>{Qh===`intro`&&(e.code===`Escape`||e.code===`Enter`||e.code===`Space`)&&qg.finish()});var $=new ef(Gh,{joyBase:Q.joyBase,joyKnob:Q.joyKnob}),Jg=new kf(Kh,Z,{onUse:e=>ty(e),onDrop:e=>ny(e),onCraft:e=>ry(e),onCraftPanel:e=>{e&&$.releasePointer()}}),Yg=null,Xg=new Af(Kh,Z,{onClose:()=>{Yg=null},onMove:()=>P_()}),Zg=new rp(Kh,Z,{onDeliver:e=>py(e),onTrade:e=>my(e),onClose:()=>{}}),Qg=new Ah(Kh,()=>rv(!1));$.onDeviceChange=e=>{Q.setDevice(e),Jg.setDevice(e),Xg.setDevice(e),Zg.setDevice(e)},Q.setDevice(Uh?`tactil`:`teclado`),Zg.setDevice(Uh?`tactil`:`teclado`),Jg.setDevice(Uh?`tactil`:`teclado`),Uh&&($.device=`tactil`);var $g=new Tf(Kh,Xh,{onChange:e=>{let t=e.classId!==Xh.classId;Xh=e,J.set(e.look,e.classId),t&&(E_=0)},onDone:e=>{Xh=e,X?(A_(),P_()):(Gd(e,null),j_(`¡Hola, ${e.name}! Explora la Isla Mágica y busca el portal`))}}),e_=document.createElement(`div`);e_.className=`title`,e_.innerHTML=`
  <div class="title-card">
    <div class="title-plane">✈️</div>
    <h1>Sobreviviendo<br/><span>a la Isla</span></h1>
    <p class="title-sub">Un juego diseñado por un aventurero de 8 años</p>
    <div class="title-buttons"></div>
    <p class="title-phase">Fase 10 · Jugar con amigos</p>
  </div>`,Kh.append(e_);var t_=e_.querySelector(`.title-buttons`);function n_(e,t,n){let r=document.createElement(`button`);r.className=t,r.textContent=e,r.addEventListener(`click`,n),t_.append(r)}if(Yh){let e=Zh;e?n_(`▶ Continuar con ${Xh.name} · Día ${e.day}`,`btn big primary`,()=>M_(e)):n_(`▶ Continuar con ${Xh.name}`,`btn big primary`,()=>j_(`¡Hola, ${Xh.name}! Busca el portal para empezar la aventura`)),n_(e?`✨ Nuevo personaje (empieza de cero)`:`✨ Nuevo personaje`,`btn big`,()=>{Xh={name:``,classId:`destructor`,look:zu()},Zh=null,J.set(Xh.look,Xh.classId),k_()})}else n_(`▶ Jugar`,`btn big primary`,()=>k_());Yh&&Cp(location.hostname)&&n_(`👫 Jugar con amigos en casa`,`btn big`,()=>void f_());var r_=null;Yh&&wp().then(e=>{r_=e,e&&n_(`🌍 Jugar con amigos por internet`,`btn big`,()=>void p_())});var i_=document.createElement(`div`);i_.className=`multi hidden`,e_.querySelector(`.title-phase`).before(i_);function a_(e,t,n,r){let i=document.createElement(`button`);i.className=n,i.textContent=t,i.addEventListener(`click`,r),e.append(i)}function o_(e,t,n){t_.classList.add(`hidden`),i_.classList.remove(`hidden`),i_.replaceChildren();let r=document.createElement(`p`);r.textContent=e;let i=document.createElement(`div`);i.className=`title-buttons`;for(let[e,n,r]of t)a_(i,e,n,r);if(i_.append(r,i),n){let e=document.createElement(`small`);e.textContent=n,i_.append(e)}return r}var s_=!1,c_=0,l_=``,u_={"sin-partida":`Ya no hay partida`,"ya-hay":`Otra persona ya ha creado una partida`,llena:`La partida está llena (4 jugadores)`,codigo:`Ese código no existe. Revisa las letras o pide a tu amigo que te lo diga otra vez`,ocupado:`El servidor está lleno ahora mismo. Prueba dentro de un rato`};function d_(){c_++,Mg.close(),i_.classList.add(`hidden`),t_.classList.remove(`hidden`)}async function f_(){if(s_=!1,o_(`📡 Buscando partidas en casa…`,[]),!await Mg.open()){o_(`😕 No encuentro el servidor del juego.`,[[`Volver`,`btn`,d_]],`El ordenador de casa tiene que tener el juego abierto con «npm run dev». Desde la tablet, abre la misma dirección que sale allí.`);return}Mg.send({t:`mirar`});let e=await Mg.wait([`sala`]);e?e.host?o_(`🏝️ ${e.host} está jugando (${e.players} ${e.players===1?`jugador`:`jugadores`}).`,[[`▶ Unirme a la partida de ${e.host}`,`btn big primary`,()=>void v_()],[`Volver`,`btn`,d_]],`Juegas con tu personaje en el océano de tu amigo. Tu partida de siempre no se toca.`):o_(`🏝️ Todavía no hay ninguna partida en casa.`,[[`🏠 Crear partida con mi isla`,`btn big primary`,()=>void __()],[`Volver`,`btn`,d_]],`Los demás podrán unirse desde otros ordenadores o la tablet de la misma wifi.`):o_(`😕 El servidor no contesta.`,[[`Volver`,`btn`,d_]])}async function p_(){if(!r_)return;s_=!0;let e=++c_,t=o_(`🌍 Conectando con el servidor…`,[[`Volver`,`btn`,d_]],`Si nadie ha jugado en un rato, el servidor está dormido y puede tardar hasta un minuto en despertar.`),n=await Dp(r_,n=>{e===c_&&n>=3&&(t.textContent=`⏳ Despertando el servidor… ${n} s`)});if(e!==c_)return;let r=n&&await Mg.open(r_,1e4);e===c_?r?(Mg.onClose=()=>{jg||o_(`📡 Se ha cortado la conexión.`,[[`Volver`,`btn`,d_]])},m_()):o_(`😕 No se puede conectar con el servidor.`,[[`Volver`,`btn`,d_]],`Comprueba que hay internet y prueba otra vez dentro de un rato.`):Mg.close()}function m_(){o_(`🌍 Jugar con amigos por internet`,[[`🏠 Crear partida con mi isla`,`btn big primary`,()=>void __()],[`🔑 Tengo un código`,`btn big`,h_],[`Volver`,`btn`,d_]],`Al crear la partida te damos un código. Dáselo solo a tus amigos y a tu familia: sin el código no puede entrar nadie.`)}function h_(){let e=document.createElement(`input`),t=()=>{let t=pp(e.value);t.length===4?v_(t):(n.textContent=`🔑 El código tiene 4 letras o números. ¡Mira bien!`,e.focus())},n=o_(`🔑 Escribe el código que te ha dado tu amigo:`,[[`▶ Unirme`,`btn big primary`,t],[`Volver`,`btn`,m_]]);e.className=`code-input`,e.maxLength=4,e.autocomplete=`off`,e.spellcheck=!1,e.placeholder=`····`,e.setAttribute(`aria-label`,`Código de la partida`),e.addEventListener(`input`,()=>{e.value=pp(e.value)}),e.addEventListener(`keydown`,e=>{e.stopPropagation(),e.key===`Enter`&&t()}),e.addEventListener(`keyup`,e=>e.stopPropagation()),n.after(e),e.focus()}function g_(e,t=``){Mg.send({t:`hola`,name:Xh.name,classId:Xh.classId,look:Xh.look,host:e,...e?{seed:_g,hour:hg,bosses:[...kg]}:t?{code:t}:{}})}async function __(){i_.classList.add(`hidden`),t_.classList.remove(`hidden`),M_(Zh),g_(!0);let e=await Mg.wait([`bienvenida`,`no`]);!e||e.t===`no`?(Mg.close(),Q.toast(`😕 ${e?.t===`no`?u_[e.why]:`No se ha podido crear la partida`}`,5)):(y_({host:!0,seed:_g,id:e.id},e.players,e.code),Q.toast(e.code?`🔑 ¡Partida creada! Dale este código a tus amigos: ${e.code} (lo tienes también arriba)`:`🏠 ¡Partida creada! Tus amigos ya pueden unirse desde «👫 Jugar con amigos en casa»`,9))}async function v_(e=``){g_(!1,e);let t=await Mg.wait([`bienvenida`,`no`]);if(!t||t.t===`no`){let e=t?.t===`no`?u_[t.why]:`El servidor no contesta`;s_&&Mg.connected&&t?.t===`no`?o_(`😕 ${e}.`,[[`🔑 Probar otra vez`,`btn big primary`,h_],[`Volver`,`btn`,d_]]):o_(`😕 ${e}.`,[[`Volver`,`btn`,d_]]);return}i_.classList.add(`hidden`),t_.classList.remove(`hidden`),Md(!0);let n=Wd(),r=n?.game&&n.game.seed===t.seed?n.game:null;jg={host:!1,seed:t.seed,id:t.id},kg=new Set(t.bosses),M_(r);for(let e of t.bosses)kg.add(e);hg=t.hour,gg=Math.max(gg,t.day),rg.setHour(hg),y_(jg,t.players,t.code),Q.toast(`👫 ¡Estás en la partida! Busca a tus amigos en el mapa (${tv()})`,5)}function y_(e,t,n=``){jg=e,l_=n,ng.clear();for(let e of t)ng.add(e);Mg.onMessage=C_,Mg.onClose=()=>b_(`📡 Se ha perdido la conexión. Sigues jugando solo`),Q.setPlayers(ng.names(),l_),Q.setPieces(Ag?null:Wp(kg),5)}function b_(e){Mg.close(),jg=null,s_=!1,l_=``,ng.clear(),Q.setPlayers(null),X&&Q.toast(e,5)}function x_(e){jg&&Mg.send({t:`evento`,ev:e})}var S_=e=>ng.nameOf(e)??`Un amigo`;function C_(e){switch(e.t){case`entra`:ng.add(e.player),Q.setPlayers(ng.names(),l_),Q.toast(`👋 ¡${e.player.name} se ha unido a la partida!`,4);break;case`sale`:ng.remove(e.id),Q.setPlayers(ng.names(),l_),Q.toast(`👋 ${e.name} se ha ido`,3);break;case`pos`:ng.move(e.id,e);break;case`hora`:jg&&!jg.host&&(hg=e.hour,gg=e.day,rg.setHour(hg));break;case`fin`:b_(`🏠 ${e.name} ha cerrado la partida. Sigues jugando solo`);break;case`evento`:w_(S_(e.id),e.ev)}}function w_(e,t){if(t.kind===`curar`){if(!X||Qh!==`explorar`||Math.hypot(t.x-(Y.x+yg.x),t.z-(Y.z+yg.z))>14)return;X.heal(t.amount),Q.toast(`💚 ¡${e} te ha curado con su Aura Sanadora!`,3)}else if(t.kind===`jefe`){if(kg.has(t.key))return;kg.add(t.key);let n=t.key===`monstruo`||t.key===`ogro`?t.key:t.key===oh(vg.i,vg.j)?`mini`:null;if(n&&ug)for(let e of ug.list)e.alive&&e.def.boss&&(n===`mini`?e.kind!==`monstruo`&&e.kind!==`ogro`:e.kind===n)&&e.takeHit(e.hp+1,e.x,e.z,0);if(t.key===`monstruo`)Fg&&=(tg.remove(Fg),null),Q.toast(`🐉 ¡${e} ha vencido al monstruo marino! El escudo del ogro ha desaparecido`,5);else if(t.key===`ogro`)Q.toast(`👹 ¡${e} ha vencido al ogro!`,4),cy();else{let n=Wp(kg);if(Q.setPieces(Ag?null:n,5),n>=5){let e=dh(_g);wg.add(oh(e.i,e.j))}Q.toast(`🗺️ ¡${e} ha vencido a ${t.name}! Trozo del mapa para todos: ${n} de 5`,5)}P_()}}function T_(e){if(jg){if(!X)ng.hideAll();else{if(ng.update(e,J_,yg.x,yg.z),Ng-=e,Ng<=0){Ng=.1;let e={x:Y.x+yg.x,y:Y.y,z:Y.z+yg.z,yaw:Y.yaw,speed:Y.speed01,swim:Y.swimming&&!Sg,dive:Y.diving,down:Qh===`muerto`,boat:Sg?bd[Sg.kind].icon:null};Mg.send({t:`pos`,...e})}jg.host&&(Pg-=e,Pg<=0&&(Pg=5,Mg.send({t:`hora`,hour:hg,day:gg})))}}}var E_=0,D_=1;function O_(){if(eg.kind===`magica`){let e=lm.x,t=lm.z+1.7;J.root.position.set(e,eg.heightAt(e,t),t)}else J.root.position.set(Y.x,Math.max(Y.y,0),Y.z);J.root.rotation.set(0,0,0)}function k_(){Qh=`creador`,e_.classList.add(`hidden`),Q.hide(),Jg.show(!1),Xg.close(),Zg.close(),Qg.close(),Qv(),$h?.showGhost(null),$.enabled=!1,$.releasePointer(),ag.reset(J,Y),J.setName(null),J.setTool(null),J.standUp(),O_(),E_=0,$g.open(Xh,{lockClass:!!X}),requestAnimationFrame(V_)}function A_(){Qh=`explorar`,e_.classList.add(`hidden`),$g.close(),Jh.clearViewOffset(),J.set(Xh.look,Xh.classId),J.setName(Xh.name),J.standUp(),J.setOpacity(1),Y.speedMul=tu[Xh.classId].speed,Y.swimMul=tu[Xh.classId].swim,Y.bodyHeight=J.height,X&&(X.breath=tu[Xh.classId].breath*(Xh.look.glasses===`buceo`?1.25:1)),Q.show(Xh),Q.showSurvival(!!X),Jg.show(!!X),$.enabled=!0}function j_(e){Wg(mm),Sg=null,xg=[],bg={},X=null,cg=null,$h=null,Z.clear(),Zh=null,hg=15,rg.setHour(hg),Y.teleport(eg.spawn.x,eg.spawn.z,ig,eg.spawn.yaw),ag.reset(J,Y),A_(),Q.setPieces(null),Q.setBoss(null),Q.toast(e,4)}function M_(e){_g=e?.seed??jg?.seed??gm(),bg={...e?.world?.isles??{}},xg=(e?.world?.boats??[]).map(e=>Ed.from(e)),wg=new Set(e?.world?.seen??[]),Og={...e?.world?.quests??{}};let t=jg?[...kg]:[];if(kg=new Set([...e?.world?.bosses??[],...t]),Ag=!!e?.world?.won,Sg=null,X=new xf(Xh.classId,e??void 0),L_({i:e?.ci??0,j:e?.cj??0},e?.world),fg.value=hd.MAX,Z.clear(),e?.world)Z.load(e.world.inv);else for(let[e,t]of Yu[Xh.classId])Z.add(e,t);Sv.clear(),Cv=[],hg=e?.hour??8,gg=e?.day??1,rg.setHour(hg),e?Y.teleport(e.x,e.z,ig,e.yaw):Y.teleport(eg.spawn.x,eg.spawn.z,ig,eg.spawn.yaw),ag.reset(J,Y),A_(),Q.setBoat(null),Q.setPieces(Ag?null:Wp(kg),5),Q.setBoss(null);let n=e?.world?.ride;n!==void 0&&xg[n]&&ov(xg[n],!0),e?Q.toast(`¡Hola de nuevo, ${Xh.name}! Día ${gg}`,3):(Q.toast(`✈️ ¡El avión se ha estrellado! Sobrevive en la isla…`,5),Cv.push({t:6,text:`🧳 Mira en las maletas brillantes que hay junto al avión`}),Cv.push({t:40,text:`⚔️ Para atacar: ${pv()}. ¡Cuidado con los cangrejos de la playa!`}),Cv.push({t:150,text:`🌊 ¿Ves otras islas en el horizonte? Mira el mapa (${tv()}) y fabrica una balsa para ir`})),Q_=im(hg),P_()}function N_(){Qh=`intro`,e_.classList.add(`hidden`),Q.hide(),Jg.show(!1),$.enabled=!1,$.releasePointer(),Gg.play(`intro`),qg.play(()=>{Gg.play(`explorar`),M_(null)})}function P_(){X&&Qh!==`muerto`&&(Zh={seed:_g,x:Y.x,z:Y.z,yaw:Y.yaw,hour:hg,day:gg,...X.snapshot(),world:cg?I_(cg):void 0,ci:vg.i,cj:vg.j},Gd(Xh,Zh))}function F_(e){let t=e.save();return{...t,taken:{...t.taken,...ug?.save()??{},...Eg?.save()??{}},builds:$h?.save()??[]}}function I_(e){let t=Object.keys(bg);if(t.length>40){let e=e=>e.builds.length*10+e.drops.length+e.fires.length;t.sort((t,n)=>e(bg[n])-e(bg[t])),bg=Object.fromEntries(t.slice(0,40).map(e=>[e,bg[e]]))}let n={inv:Z.toJSON(),...F_(e),isles:bg,boats:xg.map(e=>e.save()),seen:[...wg],quests:Og,bosses:[...kg]};return Ag&&(n.won=!0),Sg&&(n.ride=xg.indexOf(Sg)),n}function L_(e,t){vg=e,yg=ch(_g,e.i,e.j),wg.add(oh(e.i,e.j)),Wg(gh(_g,e.i,e.j),!0);let n=new tm(tg,eg,rg,t?.builds);$h=n,cg=new Hh(tg,eg,rg,t,(e,t)=>n.groundAt(e,t));let r=Xf(eg),i=Jf(eg),a=oh(e.i,e.j);ug=new zp(tg,eg,rg,t?.taken,(e,t)=>n.groundAt(e,t),wh(eg).spawns,r,e=>{let t=e.split(`-`)[0];return t===`monstruo`||t===`ogro`?kg.has(t):t in If&&!!If[t].boss&&kg.has(a)}),eg.kind===`misteriosa`&&ay(),r&&i&&(Dg=new ap(tg,i,r,eg.heightAt(r.x,r.z)),rg.colliders.push({x:r.x,z:r.z,r:.45,enabled:!0})),Eg=new Fh(tg,eg,Wh,t?.taken,rg.cameraBlockers);let o=[];for(let t=e.i-1;t<=e.i+1;t++)for(let n=e.j-1;n<=e.j+1;n++){if(t===e.i&&n===e.j)continue;let r=ch(_g,t,n);o.push({def:gh(_g,t,n),ox:r.x-yg.x,oz:r.z-yg.z})}ah(tg,o),Cg=new Tm(tg),rg.setHour(hg)}function R_(e){if(!cg)return;bg[oh(vg.i,vg.j)]=F_(cg);let t=Y.x+yg.x,n=Y.z+yg.z,r=oh(e.i,e.j),i=bg[r];delete bg[r],Xg.close(),Yg=null,Zg.close(),Qv(),L_({i:e.i,j:e.j},i),Y.x=t-yg.x,Y.z=n-yg.z,Sg&&iv(),ag.reset(J,Y),Q.toast(`🏝️ ${_h(_g,e.i,e.j)}`,3),eg.kind===`misteriosa`&&!Ag&&Q.toast(kg.has(`monstruo`)?`💀 La Isla Misteriosa… El ogro te espera en su castillo`:`💀 ¡La Isla Misteriosa! Algo enorme se mueve en el agua… 🐉`,5),P_()}var z_={hambre:`Te has quedado sin comida…`,sed:`Te has quedado sin agua…`,caida:`Te has caído desde muy alto…`,pirata:`¡Los piratas te han ganado!`,animal:`Un animal salvaje te ha ganado…`,lava:`¡La lava del volcán quema muchísimo!`,ahogado:`Te has quedado sin aire bajo el agua…`,tiburon:`¡Un tiburón te ha ganado!`,pulpo:`¡El pulpo gigante te ha atrapado!`,jefe:`¡El jefe de la isla era demasiado fuerte!`,monstruo:`¡El monstruo marino te ha ganado!`,ogro:`¡El ogro te ha ganado! ¡Inténtalo otra vez!`,zombi:`¡Los zombis del pantano te han atrapado!`,robot:`¡Un robot malo te ha ganado!`,esqueleto:`¡Un esqueleto pirata te ha ganado!`};function B_(){Qh=`muerto`,$.enabled=!1,$.releasePointer(),ag.reset(J,Y),Qv(),Jg.show(!1),Xg.close(),Zg.close(),Qg.close(),$h?.showGhost(null),Sg=null,Q.setBoat(null),Q.setOxygen(null),Zh=null,Gd(Xh,null);let e=X?.lastCause??`hambre`;setTimeout(()=>{Q.showDeath(`¡Has muerto!`,`${z_[e]} Hay que empezar de cero.`,()=>{j_(`🌀 Has vuelto a la Isla Mágica. Cruza el portal para empezar otra vez`)})},1500)}function V_(){if(Qh!==`creador`)return;let e=window.innerWidth,t=window.innerHeight,n=$g.panelRect();e>=t?(Jh.setViewOffset(e,t,n.width/2,0,e,t),D_=1):(Jh.setViewOffset(e,t,0,(t-n.top)/2,e,t),D_=Math.max(.3,n.top/t))}var H_=null;Gh.addEventListener(`pointerdown`,e=>{Qh===`creador`&&(H_=e.clientX)}),window.addEventListener(`pointermove`,e=>{Qh===`creador`&&H_!==null&&(E_+=(e.clientX-H_)*.012,H_=e.clientX)}),window.addEventListener(`pointerup`,()=>{H_=null}),window.addEventListener(`resize`,()=>{qh.setSize(window.innerWidth,window.innerHeight,!1),Jh.aspect=window.innerWidth/window.innerHeight,Jh.updateProjectionMatrix(),Qh===`creador`&&V_()}),document.addEventListener(`visibilitychange`,()=>{document.hidden&&P_()}),window.addEventListener(`pagehide`,()=>P_());var U_=new wo;U_.connect(document);var W_=new R,G_=new R,K_=new zo,q_=Y.camDist,J_=0,Y_=0,X_=0,Z_=0,Q_=!1;function $_(e){let t=$.poll(e);if(Jg.craftOpen&&$.device===`mando`&&(t.jump&&(t.jump=!1,Jg.craftFocused()),t.use&&(t.use=!1,Jg.toggleCraft(!1))),t.map&&rv(),Qg.isOpen){Bg-=e,Bg<=0&&(Bg=.5,Qg.draw(nv())),(t.use||t.craft)&&rv(!1);return}if(X||(t.dive=!1),Sg?av(e,t):Y.update(e,t,ig),t.power&&Sg&&Xh.classId===`alien`)Q.toast(`⛵ Baja del barco para volar`,2);else if(t.power){let e=ag.use(Xh.classId,Y,J,rg.breakables);if(e){if(Q.toast(e,2),Xh.classId===`curador`&&X){X.heal(40),x_({kind:`curar`,x:Y.x+yg.x,z:Y.z+yg.z,amount:40});let e=ng.near(Y.x+yg.x,Y.z+yg.z,14);e.length&&Q.toast(`💚 ¡Has curado a ${e.join(` y `)}!`,3)}Xh.classId===`destructor`&&bv()}else Q.toast(`El poder se está recargando…`,1.2)}if(ag.update(e,Xh.classId,Y,J,eg.heightAt),Q.setPower(ag.readiness(Xh.classId)),gv(t,e),X){let n=Sf(Y.takeImpact());n>0&&(X.damage(n,`caida`),Q.flash(),Q.toast(`¡Ay! ¡Qué caída!`,1.5));let r=X.update(e,{swimming:Y.swimming,moving:Y.speed01>.2,underwater:Y.diving});r.warning===`aire`&&Q.toast(`🫧 ¡Te queda poco aire! Sube a respirar (${Dv()})`,3),r.warning===`hambre`&&Q.toast(`🍗 ¡Tienes hambre! Come bayas o cocos, o pesca y asa el pescado`,4),r.warning===`sed`&&Q.toast(`💧 ¡Tienes sed! Bebe cocos o hierve agua del mar en una hoguera`,4),X_-=e,r.damage>0&&X_<=0&&(Q.flash(),X_=1.5),xv(e),fv(e),Q.setVitals(X.health,X.maxHealth,X.hunger,X.thirst),Q.setOxygen(Y.diving||X.oxygen<99.5?X.oxygen:null);let i=gg;if({hour:hg,day:gg}=am(hg,gg,e),rg.setHour(hg),Q.setClock(`Día ${gg} · ${om(hg)}`,im(hg)),im(hg)&&!Q_&&(Q_=!0,Q.toast(`🌙 Se hace de noche. ¡Mira las estrellas!`,3)),!im(hg)&&Q_&&(Q_=!1,(gg>i||hg<12)&&Q.toast(`☀️ ¡Amanece! Día ${gg}`,3)),Z_-=e,Z_<=0&&(P_(),Z_=10),X.dead){B_();return}if(iy(t,e))return}else Y.takeImpact();let n=rg.mirrorPos,r=rg.portalPos,i=!!n&&Math.hypot(Y.x-n.x,Y.z-n.z)<3.2,a=!!r&&Math.hypot(Y.x-r.x,Y.z-r.z)<4.6;X||(i?Q.setPrompt(`Cambiar tu personaje en el Espejo Mágico`,$.device):a?Q.setPrompt(`Entrar en el portal`,$.device):Q.setPrompt(null,$.device)),t.action&&(i?k_():a&&N_()),Y_-=e,Y.blockedByBound&&Y_<=0&&(Q.toast(X?`🦈 ¡Mar adentro hay tiburones! Fabrica una balsa 🛶 (en ⛵ Barcos) para viajar a otras islas`:`🌀 Por aquí no se puede salir. ¡Busca el portal!`,3.5),Y_=6)}var ev={balsa:`la balsa`,barca:`la barca`,barco:`el barco`};function tv(){return $.device===`mando`?`Start`:$.device===`tactil`?`🗺️`:`M`}function nv(){return{seed:_g,seen:wg,current:vg,player:{x:Y.x+yg.x,z:Y.z+yg.z,yaw:Sg?Sg.yaw:Y.yaw},boats:xg.map(e=>({x:e.x,z:e.z,icon:bd[e.kind].icon})),beaten:kg,players:ng.positions()}}function rv(e=!Qg.isOpen){X&&Qh===`explorar`||(e=!1),e?(Jg.toggleCraft(!1),Xg.close(),$.releasePointer(),Qg.open(nv(),$.device),Bg=.5):Qg.close()}function iv(){let e=Sg;if(!e)return;let t=e.seat();Y.x=t.x-yg.x,Y.z=t.z-yg.z,Y.y=0+bd[e.kind].deck+Tm.bob(e,J_),pg<=0&&(Y.yaw=e.yaw),Y.vx=Y.vy=Y.vz=0,Y.swimming=!1,Y.onGround=!0,Y.flyTime=0}function av(e,t){let n=Sg;Y.steerCamera(t,n.kind===`barco`?16:12);let r=Y.wish(t),i=r.mag>.1?Math.atan2(r.x,r.z):null,a=n.step(e,r.mag,i,(e,t)=>eg.heightAt(e-yg.x,t-yg.z)<wd);zg-=e,a&&zg<=0&&(Q.toast(`🏝️ ¡Tierra! Pulsa ${Ov(`action`)} para bajar`,2),zg=5),iv(),Q.setBoat(`${bd[n.kind].icon} ${bd[n.kind].name} · ${Math.round(n.speed*3.6)} km/h`)}function ov(e,t=!1){Sg=e,Qv(),e.speed=0,e.kind===`barco`&&(Y.camDist=Math.max(Y.camDist,9)),iv(),t||(Q.toast(`${bd[e.kind].icon} ¡A navegar! Muévete para ir hacia donde quieras. ${Ov(`action`)} para bajar`,4),Cv.push({t:5,text:`🗺️ Abre el mapa (${tv()}) para ver las islas que has descubierto`}),P_())}function sv(e){let t=Sg;if(!t)return;Sg=null,t.speed=0,Q.setBoat(null);let n=Y.camYaw;if(e)Y.teleport(e.x,e.z,ig,Y.yaw);else{let e=bd[t.kind].width/2+.9;Y.teleport(Y.x+Math.cos(t.yaw)*e,Y.z-Math.sin(t.yaw)*e,ig,Y.yaw),Y.y=0}Y.camYaw=n,Q.toast(e?`🏝️ ¡En tierra!`:`💦 ¡Al agua!`,1.5),P_()}function cv(){let e=null;for(let t of xg){let n=Math.hypot(t.x-yg.x-Y.x,t.z-yg.z-Y.z)-bd[t.kind].length/2;n<2.4&&(!e||n<e.dist)&&(e={b:t,dist:Math.max(0,n)})}return e}function lv(e){if(Sg){Q.toast(`⛵ ¡Ya vas en un barco!`,2);return}if(xg.length>=8){Q.toast(`⚓ Ya tienes 8 barcos. Recoge uno con el hacha`,3);return}let t=Y.swimming?Y.yaw:Y.camYaw+Math.PI,n=Dd(e,Y.x,Y.z,t,(e,t)=>eg.heightAt(e,t));n?(Z.take(e,1),xg.push(new Ed(e,n.x+yg.x,n.z+yg.z,t)),Q.toast(`${bd[e].icon} ¡${bd[e].name} al agua! Acércate y pulsa ${Ov(`action`)} para subir`,3.5),P_()):Q.toast(`🌊 Ponte en la orilla, mirando al mar, para echar ${ev[e]} al agua`,3)}function uv(e){if(!Z.fits(e.kind))Q.toast(`🎒 ¡No cabe! Suelta algo primero`,2.5);else{xg=xg.filter(t=>t!==e),J.swing(),Mv(e.kind,1);for(let t of e.ups)Mv(t,1);Jg.flashLabel(`🪓 Has recogido ${ev[e.kind]} ${bd[e.kind].icon}`,1.8),P_()}}function dv(e){let t=Sg?.kind===`barco`?Sg:xg.find(e=>e.kind===`barco`&&Math.hypot(e.x-yg.x-Y.x,e.z-yg.z-Y.z)<8);t?t.ups.has(e)?Q.toast(`⛵ Tu barco ya tiene ${xd[e].name.toLowerCase()}`,2.5):(Z.take(e,1),t.ups.add(e),Q.toast(e===`vela`?`🏳️ ¡Velas grandes puestas! Tu barco va mucho más rápido`:`☸️ ¡Timón dorado puesto! Tu barco gira mejor y corre más`,3.5),P_()):Q.toast(`⛵ Acércate a tu barco (el grande) para ponerle la mejora`,3)}function fv(e){let t=eg.crater;if(Rg-=e,t&&X&&!Y.flying&&Math.hypot(Y.x-t.x,Y.z-t.z)<t.r+.5&&Y.y<t.y&&(X.damage(25*e,`lava`),Rg<=0&&(Q.flash(),Q.toast(`🔥 ¡La lava quema! ¡Sal del cráter!`,2),Rg=1.5)),Tg-=e,Tg>0)return;Tg=.4;let n=Y.x+yg.x,r=Y.z+yg.z;for(let e=vg.i-1;e<=vg.i+1;e++)for(let t=vg.j-1;t<=vg.j+1;t++){let i=oh(e,t);wg.has(i)||yh(_g,{i:e,j:t},n,r)>230||(!fh(_g,e,t)||Gp(kg))&&(wg.add(i),(Sg||Y.swimming)&&Q.toast(`🔭 ¡Isla nueva a la vista: ${_h(_g,e,t)}! Mírala en el mapa (${tv()})`,4))}Ig-=.4;let i=dh(_g);if(!Gp(kg)&&!fh(_g,vg.i,vg.j)){let e=ch(_g,i.i,i.j),t=Kp(n,r,e.x,e.z,gh(_g,i.i,i.j).radius);if(t){Sg?(Sg.x=t.x,Sg.z=t.z,Sg.speed=0,iv()):(Y.x=t.x-yg.x,Y.z=t.z-yg.z),Ig<=0&&(Ig=6,Q.toast(`🌀 Una niebla mágica no te deja pasar… Necesitas los 5 trozos del mapa (tienes ${Wp(kg)}). ¡Vence a los jefes de las islas!`,5));return}}if(!Sg&&!Y.swimming)return;let a=vh(_g,n,r);(a.i!==vg.i||a.j!==vg.j)&&a.score<yh(_g,vg,n,r)-25&&R_(a)}function pv(){let e=$.device;return e===`mando`?`gatillo RT`:e===`tactil`?`botón ⚔️`:`clic izquierdo (o R)`}function mv(){return!(Xh.classId===`asesino`&&ag.active>0)}function hv(){return ud(Z.current?.id,Z.slots.map(e=>e?.id),Y.swimming)}function gv(e,t){pg-=t,fg.update(t);let n=sd[hv()];Q.setEnergy(X&&n.energy?fg.value/hd.MAX:null),Qh!==`explorar`||Yg||Jg.craftOpen||Zg.open||(e.attack||e.attackHeld)&&pg<=0&&_v(n)}function _v(e){if(e.energy&&!fg.spend(e.energy)){pg=.4,Jg.flashLabel(`⚡ Sin energía… espera un momento a que se recargue`,1.2);return}pg=e.rate;let t=ug?.alive??[],n=Y.camYaw+Math.PI,r=md(Y.x,Y.z,n,e.range,e.ranged?.55:1.1,t)??md(Y.x,Y.z,Y.yaw,e.ranged?Math.min(e.range,15):e.range,e.ranged?.6:1.3,t),i=r?Math.atan2(r.x-Y.x,r.z-Y.z):e.ranged?n:Y.yaw;Y.yaw=i;let a=mg++%2?`L`:`R`;e.id===`pistolas`||e.id===`dagas`?J.shoot(a):e.ranged||e.id===`lanza`?J.shoot(`R`):J.swing();let o=Math.sin(i),s=Math.cos(i);if(e.ranged){let t=new R(Y.x+o*.6,Y.y+J.height*.6,Y.z+s*.6),n=r&&ug?new R(r.x,ug.topOf(r),r.z):t.clone().add(new R(o*e.range,0,s*e.range));dg.shot(t,n,e.id===`pistola-rayos`)}if(!r)return;let c=!r.aware||pd(r.yaw,r.x,r.z,Y.x,Y.z),l=c&&Xh.classId===`asesino`&&!e.ranged;yv(r,fd(e.id,Xh.classId,c,!!r.def.sea),e.knock,l),e.sea&&r.def.sea&&Tv(`arpon`,`🎯 ¡El arpón hace muchísimo daño a los bichos del mar!`,3)}var vv={cangrejo:`🦀 ¡Has cazado un cangrejo!`,jabali:`🐗 ¡Has cazado un jabalí!`,pirata:`☠️ ¡Has vencido a un pirata!`,capitan:`⚔️ ¡Has vencido al capitán pirata! Ha soltado su espada`,tiburon:`🦈 ¡Has vencido a un tiburón!`,pulpo:`🐙 ¡Has vencido al pulpo gigante!`,zombi:`🧟 ¡Has vencido a un zombi!`,robot:`🤖 ¡Has vencido a un robot malo!`,lobo:`🐺 ¡Has vencido a un lobo!`,esqueleto:`💀 ¡Has vencido a un esqueleto pirata!`,golem:`🌋 ¡Has vencido al Gólem de lava!`,yeti:`❄️ ¡Has vencido al Yeti gigante!`,escorpion:`🦂 ¡Has vencido al Escorpión gigante!`,reyzombi:`🧟 ¡Has vencido al Rey de los zombis!`,robotron:`🤖 ¡Has vencido al Robot gigante!`,calavera:`☠️ ¡Has vencido al Capitán Calavera!`,monstruo:`🐉 ¡Has vencido al monstruo marino!`,ogro:`👹 ¡Has vencido al ogro!`};function yv(e,t,n,r){if(!ug)return;if(e.kind===`ogro`&&e.calm){dg.spark(new R(e.x,ug.topOf(e),e.z),`#b388ff`),Tv(`escudo-ogro`,`🔮 ¡Un escudo mágico protege al ogro! Primero vence al monstruo marino 🐉`,4);return}let i=e.takeHit(t,Y.x,Y.z,n),a=ug.topOf(e);if(dg.spark(new R(e.x,a,e.z),r?`#ff8a65`:`#fff59d`),dg.number(new R(e.x,a+.6,e.z),r?`¡${t}!`:String(t),r?`#ff7043`:`#ffffff`),r&&Tv(`espalda`,`🗡️ ¡Por la espalda haces muchísimo daño!`,3),!i)return;let o=ug.loot(e);if(e.def.sea)for(let[e,t]of o)Mv(e,t);else o.forEach(([t,n],r)=>cg?.addDrop(t,n,e.x+r*.6-.3,e.z+.3));Q.toast(`${vv[e.kind]}  ${o.map(([e,t])=>`+${t} ${K[e].icon}`).join(` `)}`,3),e.def.boss&&sy(e),(e.kind===`jabali`||e.kind===`cangrejo`||e.kind===`lobo`)&&Tv(`carne`,`🥩 La carne cruda alimenta poco. ¡Ásala en una hoguera!`,4),e.kind===`lobo`&&Tv(`piel`,`🐺 ¡Piel de lobo! Con 3 puedes fabricar un abrigo que te protege (${Ov(`craft`)})`,5),e.kind===`robot`&&Tv(`tornillo`,`🔩 ¡Tuercas de robot! Sirven para la armadura robot y para Robi, el robot bueno`,5),P_()}function bv(){if(!ug||!cg)return;for(let e of ug.alive)Math.hypot(e.x-Y.x,e.z-Y.z)<6&&yv(e,30,3,!1);let e=0;for(let t of rg.chop)if(!(t.kind!==`roca`||!t.alive||Math.hypot(t.x-Y.x,t.z-Y.z)>6)){t.cut(Y.x,Y.z);for(let[e,n]of nd.roca)Mv(e,n,t.x,t.z);e++}e&&Q.toast(`💥 ¡Golpe Sísmico! Has roto ${e===1?`una roca`:`${e} rocas`} 🪨`,2.5)}function xv(e){if(!ug||!X||!$h)return;let t=$h,n=ug.update(e,J_,{px:Y.x,pz:Y.z,visible:mv()&&Qh===`explorar`&&!Zg.open,playerSwimming:Y.swimming||!!Sg,playerInWater:Y.swimming&&!Sg,py:Y.y,canStep:(e,n)=>ig.walkable(e,n)&&t.groundAt(e,n)>-.6,canSwim:(e,t)=>Dh(eg,e,t),floorAt:(e,t)=>eg.heightAt(e,t),colliders:rg.colliders,rng:Math.random},Jh);for(let e of n){let t=yd(e.damage,Z.slots.map(e=>e?.id),Xh.classId,Math.random());if(t.blocked){dg.spark(new R(Y.x,Y.y+J.height*.6,Y.z),`#90caf9`),dg.number(new R(Y.x,Y.y+J.height+.3,Y.z),`¡Parado!`,`#90caf9`),J.shoot(`L`),Tv(`escudo`,`🛡️ ¡Tu escudo ha parado el golpe!`,2.5);continue}let n=t.damage,r=e.c.kind;X.damage(n,r===`tiburon`||r===`pulpo`||r===`zombi`||r===`robot`||r===`esqueleto`||r===`monstruo`||r===`ogro`?r:e.c.def.boss?`jefe`:e.c.def.enemy?`pirata`:`animal`),Q.flash(),ag.shake=Math.max(ag.shake,.12),dg.number(new R(Y.x,Y.y+J.height+.3,Y.z),`-${n}`,`#ff5252`);let i=Y.x-e.c.x,a=Y.z-e.c.z,o=Math.hypot(i,a)||1,s=Y.x+i/o*.6,c=Y.z+a/o*.6;ig.walkable(s,c)&&(Y.x=s,Y.z=c)}oy();let r=ug.nearestEnemy(Y.x,Y.z,18);(r?.kind===`pirata`||r?.kind===`capitan`)&&Tv(`piratas`,`☠️ ¡Piratas! Lucha (${pv()}) o escapa nadando: no saben nadar`,5);for(let e of ug.list)e.aware&&(e.kind===`tiburon`&&Tv(`tiburon`,`🦈 ¡Un tiburón! Lucha (${pv()}) o sal del agua: en tierra y en los barcos no te alcanza`,5),e.kind===`pulpo`&&Tv(`pulpo`,`🐙 ¡El pulpo gigante guarda el tesoro! Lucha (${pv()}) o aléjate nadando`,5),e.kind===`zombi`&&Tv(`zombi`,`🧟 ¡Zombis! Son lentos: lucha (${pv()}) o sal corriendo`,5),e.kind===`robot`&&Tv(`robot`,`🤖 ¡Un robot malo! Pega fuerte. Lucha (${pv()}) o escapa nadando`,5),e.kind===`lobo`&&Tv(`lobo`,`🐺 ¡Lobos! Corren mucho. Lucha (${pv()}) o escapa nadando`,5),e.def.boss&&e.kind!==`monstruo`&&e.kind!==`ogro`&&Tv(`jefe-${e.kind}`,`👑 ¡${e.def.name}! Es el jefe de esta isla: muy fuerte. Si lo vences te dará un trozo del mapa 🗺️`,6),e.kind===`monstruo`&&Tv(`monstruo`,`🐉 ¡El monstruo marino! Ataca también a los barcos. ¡Dispárale (${pv()})!`,6),e.kind===`esqueleto`&&Tv(`esqueleto`,`💀 ¡Un esqueleto pirata guarda el barco hundido! Lucha (${pv()}) o sube a la superficie`,5))}var Sv=new Set,Cv=[],wv=0;function Tv(e,t,n=4){Sv.has(e)||(Sv.add(e),Q.toast(t,n))}function Ev(){return $.device===`mando`?`LB`:$.device===`tactil`?`🤿`:`Shift`}function Dv(){return $.device===`mando`?`A`:$.device===`tactil`?`⤒`:`Espacio`}function Ov(e){let t=$.device;return t===`mando`?{action:`X`,use:`B`,drop:`▼`,craft:`▲`}[e]:t===`tactil`?{action:`✋`,use:`toca el hueco otra vez`,drop:`mantén pulsado el hueco`,craft:`🔨`}[e]:{action:`E`,use:`F`,drop:`G`,craft:`C`}[e]}function kv(){return{fx:Math.sin(Y.yaw),fz:Math.cos(Y.yaw)}}function Av(){if(Y.swimming||eg.heightAt(Y.x,Y.z)<-.1)return!0;for(let e=0;e<8;e++){let t=e/8*Math.PI*2;for(let e of[1,2,3,4])if(eg.heightAt(Y.x+Math.cos(t)*e,Y.z+Math.sin(t)*e)<-.25)return!0}return!1}function jv(){if(Y.swimming)return null;let{fx:e,fz:t}=kv();for(let n=2.5;n<=12;n+=.5){let r=Y.x+e*n,i=Y.z+t*n;if(eg.heightAt(r,i)<-.7)return{x:r+e*1.5,z:i+t*1.5}}return null}function Mv(e,t,n=Y.x,r=Y.z){let i=Z.add(e,t);return i>0&&cg&&(cg.addDrop(e,i,n+.6,r+.4),Q.toast(`🎒 ¡El inventario está lleno! Lo que no cabe se queda en el suelo`,3)),i}function Nv(){let e=Z.current;return e&&K[e.id].cooksTo?Z.selected:Z.slots.findIndex(e=>!!e&&!!K[e.id].cooksTo)}function Pv(e){return e===`agua-mar`?`Hervir agua de mar`:`Asar ${K[e].name.toLowerCase().replace(/ crud[oa]$/,``)}`}function Fv(e){return e.type===`node`?Rh[e.node.kind]:e.type===`drop`?`Coger ${K[e.drop.id].name}${e.drop.n>1?` ×${e.drop.n}`:``}`:e.type===`chop`?Lv(e.chop):Jv(e.fire)}var Iv={arbol:`🪓 Talar árbol`,palmera:`🪓 Talar palmera`,roca:`⛏️ Picar roca`};function Lv(e){let t=ed(e.kind,Xh.classId);return e.hits>0?`${Iv[e.kind]} (${e.hits}/${t})`:Iv[e.kind]}var Rv=0;function zv(e){if(!cg||Rv>0)return;Rv=.38,Y.yaw=Math.atan2(e.x-Y.x,e.z-Y.z),J.swing();let t=cg.hit(e,Xh.classId,Y.x,Y.z);if(!t){Jg.flashLabel(e.kind===`roca`?`⛏️ ¡Clinc!`:`🪓 ¡Toc!`,.8);return}for(let[n,r]of t)Mv(n,r,e.x,e.z);let n=t.map(([e,t])=>`+${t} ${K[e].icon}`).join(`  `);Q.toast(e.kind===`roca`?`⛏️ ¡La roca se ha roto! ${n}`:`🌳 ¡Cae el árbol! ${n}`,2.5)}function Bv(){let e=Z.current?.id;return e===`hacha`||e===`pico`?e:null}function Vv(){let e=Z.current?.id;return qu(e)?e:null}function Hv(e){let t=Y.camYaw+Math.PI;if(!$h)return{...Zp(e,Y.x,Y.z,t),why:`No se puede construir aquí`};let n=e===`baul`||e===`cama`?[1.8,1.5,1.2,1,.8,.6]:[1.8],r=null;for(let i of n){let n=Zp(e,Y.x,Y.z,t,i),a={...n,why:$h.check(e,n.x,n.z,n.r)};if(!a.why)return a;r??=a}return r}function Uv(e){if(!$h)return;if(Y.swimming||Sg){Q.toast(Sg?`⛵ Baja del barco para construir`:`💦 Sal del agua para construir`,2);return}let t=Hv(e);t.why?Q.toast(`🔨 ${t.why}`,2.5):(Z.take(e,1),$h.place(e,t.x,t.z,t.r),J.swing(),Jg.flashLabel(`🔨 ¡Hecho! ${K[e].icon} ${K[e].name}`,1.5),e===`baul`&&Tv(`baul`,`🧰 Pulsa ${Ov(`action`)} junto al baúl para guardar cosas`,4),e===`cama`&&Tv(`cama`,`🛏️ Por la noche, túmbate en la cama para que amanezca`,4),P_())}var Wv={puerta:e=>e.open?`🚪 Cerrar la puerta`:`🚪 Abrir la puerta`,baul:()=>`🧰 Abrir el baúl`,dormir:()=>`🛏️ Dormir`,desmontar:e=>`🪓 Desmontar ${K[e.kind].name.toLowerCase()}`};function Gv(e){e.inv&&(Yg=e,Jg.toggleCraft(!1),$.releasePointer(),Xg.show(e.inv))}function Kv(){X&&(im(hg)?($.enabled=!1,Q.setPrompt(null,$.device),Q.fade(`💤 Zzz…`,()=>{hg>=12&&(gg+=1),hg=6.2,rg.setHour(hg),X&&X.consume({hunger:-Math.min(10,Math.max(0,X.hunger-5)),thirst:-Math.min(10,Math.max(0,X.thirst-5))}),Q_=!1,$.enabled=Qh===`explorar`,Q.toast(`☀️ ¡Buenos días! Día ${gg}`,3),P_()})):Q.toast(`🛏️ Solo se puede dormir de noche`,2.5))}function qv(e){if(!$h||!cg)return;let t=e.piece;e.action===`puerta`?$h.toggleDoor(t):e.action===`baul`?Gv(t):e.action===`dormir`?Kv():(t.inv&&t.inv.slots.forEach((e,n)=>{e&&cg.addDrop(e.id,e.n,t.x+n%3*.5-.5,t.z+.8)}),J.swing(),$h.remove(t),Mv(t.kind,1,t.x,t.z),Jg.flashLabel(`🪓 Desmontado: +1 ${K[t.kind].icon} ${K[t.kind].name}`,1.8),P_())}function Jv(e){let t=Nv();return t>=0?`🔥 ${Pv(Z.slots[t].id)}${e.queue.length?` (cocinando ${e.queue.length})`:``}`:e.queue.length?`🔥 Cocinando ${K[e.queue[0]].name.toLowerCase()}… espera`:`🔥 Calentarte junto al fuego`}function Yv(e){if(!cg)return;if(e.type===`node`){let t=zh(e.node);if(e.node.kind!==`maleta`&&!Z.fits(t[0][0])){Q.toast(`🎒 ¡No cabe! Suelta algo (${Ov(`drop`)}) para coger más cosas`,3);return}cg.harvest(e.node);for(let[n,r]of t)Mv(n,r,e.node.x,e.node.z);if(e.node.kind===`maleta`)Q.toast(`🧳 ¡Dentro había: ${t.map(([e,t])=>`${K[e].icon} ${K[e].name}${t>1?` ×${t}`:``}`).join(`, `)}!`,4);else{let[e,n]=t[0];Jg.flashLabel(`+${n} ${K[e].icon} ${K[e].name}`,1.5)}return}if(e.type===`chop`){zv(e.chop);return}if(e.type===`drop`){let t=e.drop,n=Z.add(t.id,t.n);if(n===t.n){Q.toast(`🎒 ¡No cabe! Suelta algo (${Ov(`drop`)}) primero`,3);return}Jg.flashLabel(`+${t.n-n} ${K[t.id].icon} ${K[t.id].name}`,1.5),n>0?t.n=n:cg.removeDrop(t);return}let t=Nv();if(t<0){Q.toast(e.fire.queue.length?`🔥 Se está cocinando. ¡Espera un momento!`:`🔥 ¡Qué calentito! Trae pescado crudo o agua de mar para cocinar`,3);return}let n=Z.slots[t].id;cg.cook(e.fire,n)?(Z.takeFrom(t,1),Q.toast(n===`agua-mar`?`♨️ Hirviendo el agua…`:`🔥 Asando… ¡espera un momento!`,2)):Q.toast(`🔥 La hoguera está llena. Espera a que termine`,2.5)}function Xv(){return!Av()||Z.count(`botella`)===0?!1:(Z.take(`botella`,1),Z.add(`agua-mar`,1)>0?(Z.add(`botella`,1),Q.toast(`🎒 ¡No cabe! Suelta algo primero`,2.5),!0):(Tv(`agua-mar`,`🧂 Agua de mar: ¡tiene sal! Hiérvela en una hoguera antes de beberla`,4),Jg.flashLabel(`+1 🧂 Agua de mar`,1.5),!0))}function Zv(){if(Z.count(`cana`)===0)return!1;let e=jv();return e?(lg.cast(e.x,e.z),Q.toast(`🎣 Esperando a que pique… ¡No te muevas!`,2),!0):!1}function Qv(){lg.cancel(),Q.bite(!1,$.device),sg.group.visible=!1}function $v(e){let t=Z.slots[e];if(!t||!X)return;let n=K[t.id];if(!n.food)return;let r=Xu(Xh.classId,n.food),i=X.health>=X.maxHealth;if(t.id===`botiquin`&&i){Q.toast(`🩹 Ya tienes toda la vida`,2);return}if(t.id!==`botiquin`&&t.id!==`agua-mar`&&(r.hunger<=0||X.hunger>=99)&&(r.thirst<=0||X.thirst>=99)&&(!r.health||i)){Q.toast(`😌 ¡Estás lleno! Guárdalo para luego`,2);return}if(Z.takeFrom(e,1),X.consume(r),n.leaves&&Mv(n.leaves,1),t.id===`agua-mar`){Q.toast(`🤢 ¡Puaj! Está salada y da más sed. Hiérvela en la hoguera`,3),Q.flash();return}let a=[];r.hunger>0&&a.push(`+${r.hunger} 🍗`),r.thirst>0&&a.push(`+${r.thirst} 💧`),r.health&&a.push(`+${r.health} ❤️`);let o=t.id===`agua`||t.id===`coco`?`¡Glu, glu!`:t.id===`botiquin`?`¡Mucho mejor!`:`¡Ñam!`;Q.toast(`😋 ${o} ${n.icon} ${a.join(`  `)}`,2)}function ey(){if(!cg)return;if(Y.swimming){Q.toast(`💦 No se puede encender fuego en el agua`,2.5);return}let{fx:e,fz:t}=kv(),n=Y.x+e*1.8,r=Y.z+t*1.8,i=cg.canPlaceFire(n,r);i?Q.toast(`🔥 ${i}`,2.5):(Z.take(`hoguera`,1),cg.addFire(n,r),Q.toast(`🔥 ¡Hoguera encendida! Acércate con pescado crudo o agua de mar`,4),P_())}function ty(e){if(!X||Qh!==`explorar`)return;Z.select(e);let t=Z.slots[e];if(!t){Jg.flashLabel(`Este hueco está vacío`,1.5);return}let n=K[t.id];switch(t.id){case`cana`:if(lg.active)return;Zv()||Q.toast(`🎣 Ponte en la orilla, mirando al mar, para pescar`,2.5);return;case`botella`:Xv()||Q.toast(`🫙 Acércate al mar para llenar la botella`,2.5);return;case`hoguera`:ey();return;case`palo`:case`piedra`:Q.toast(`🔨 Sirve para fabricar. Pulsa ${Ov(`craft`)}`,2.5);return;case`bota`:Q.toast(`🥾 Una bota vieja… ¡no se come! 😝 Suéltala`,2.5);return;case`pistolas`:case`dagas`:case`pistola-rayos`:case`espada`:case`lanza`:case`arco`:case`arpon`:case`trabuco`:Q.toast(`${n.icon} ${n.desc}. Para atacar: ${pv()}`,3);return;case`armadura-madera`:case`armadura-piel`:case`armadura-pirata`:case`armadura-robot`:case`escudo-madera`:case`escudo-concha`:Q.toast(`${n.icon} ¡Ya lo llevas puesto! ${n.desc}`,3);return;case`piel`:case`tornillo`:Q.toast(`${n.icon} ${n.desc}. Pulsa ${Ov(`craft`)} para fabricar`,3);return;case`hacha`:Q.toast(`🪓 Acércate a un árbol o a una palmera y pulsa ${Ov(`action`)}`,2.5);return;case`balsa`:case`barca`:case`barco`:lv(t.id);return;case`vela`:case`timon`:dv(t.id);return;case`aire`:if(!Y.diving){Q.toast(`🫧 Úsala cuando estés buceando y te quede poco aire`,2.5);return}Z.takeFrom(e,1),X.breathe(),Q.toast(`🫧 ¡Aaah! Aire lleno`,2);return;case`oro`:case`perla`:case`diente`:Q.toast(`${n.icon} ${n.desc}${t.id===`oro`?` (tienes ${Z.count(`oro`)})`:``}`,3);return;case`brujula`:Q.toast(`🧭 Mira arriba: la brújula te dice hacia dónde vas, y ✈️ dónde está la isla del avión`,3.5);return;case`pico`:Q.toast(`⛏️ Acércate a una roca grande y pulsa ${Ov(`action`)}`,2.5);return;case`madera`:case`hojas`:case`fibra`:case`cuerda`:Q.toast(`🔨 Sirve para fabricar. Pulsa ${Ov(`craft`)}`,2.5);return;default:if(qu(t.id)){Uv(t.id);return}$v(e)}}function ny(e){if(!cg||Qh!==`explorar`)return;let t=Z.takeFrom(e,Z.slots[e]?.n??0);if(!t)return;let{fx:n,fz:r}=kv();cg.addDrop(t.id,t.n,Y.x+n*1.1,Y.z+r*1.1),Jg.flashLabel(`Has soltado ${K[t.id].icon} ${K[t.id].name}${t.n>1?` ×${t.n}`:``}`,1.8)}function ry(e){let t=Z.craft(e),n=K[e.out];if(t===`faltan`)Q.toast(`Te faltan materiales para ${n.name.toLowerCase()}`,2);else if(t===`lleno`)Q.toast(`🎒 ¡No cabe! Suelta algo primero`,2);else{if(Q.toast(`🔨 ¡Has fabricado: ${n.icon} ${n.name}!`,2.5),qu(e.out)){let t=Z.slots.findIndex(t=>t?.id===e.out);t>=0&&Z.select(t),Jg.toggleCraft(!1),Tv(`construir`,`🏠 Apunta con la cámara: verde = se puede poner. Pulsa ${Ov(`action`)} para colocarlo`,5)}if(e.out===`hacha`&&Tv(`hacha`,`🪓 ¡Un hacha! Acércate a un árbol y pulsa ${Ov(`action`)} para talarlo`,5),e.out===`hoguera`){let e=Z.slots.findIndex(e=>e?.id===`hoguera`);e>=0&&Z.select(e),Jg.toggleCraft(!1),Tv(`poner-hoguera`,`🔥 Ahora úsala (${Ov(`use`)}) para ponerla en el suelo`,4)}}}function iy(e,t){if(!cg||!$h)return!1;if(Rv-=t,$h.update(t),uy(),Dg?.update(t,J_,Y.x,Y.z,!!Zf(Dg.def,Og[oh(vg.i,vg.j)]??0)),Zg.open)return e.slotDelta&&Zg.moveFocus(e.slotDelta),$.device===`mando`&&e.jump&&Zg.pressFocused(),(e.action||e.use||e.craft||!Dg||Math.hypot(Y.x-Dg.x,Y.z-Dg.z)>4)&&Zg.close(),$h.showGhost(null),Q.setPrompt(null,$.device),cg.update(J_,t,Y.x,Y.z),!1;if(Yg)return e.slotDelta&&Xg.moveFocus(e.slotDelta),$.device===`mando`&&e.jump&&Xg.pickFocused(),(e.action||e.use||e.craft||Math.hypot(Y.x-Yg.x,Y.z-Yg.z)>3)&&Xg.close(),$h.showGhost(null),Q.setPrompt(null,$.device),cg.update(J_,t,Y.x,Y.z),!1;e.slot>=0&&Z.select(e.slot),e.slotDelta&&(Jg.craftOpen?Jg.moveFocus(e.slotDelta):Z.select(Z.selected+e.slotDelta)),e.craft&&Jg.toggleCraft(),e.use&&ty(Z.selected),e.drop&&ny(Z.selected),Jg.update(t);for(let e of cg.update(J_,t,Y.x,Y.z)){let t=Math.hypot(Y.x-e.fire.x,Y.z-e.fire.z)<6,n=K[e.item];t&&Z.add(e.item,1)===0?Q.toast(`✅ ¡Ya está! ${n.icon} ${n.name}`,2.5):(cg.addDrop(e.item,1,e.fire.x+1,e.fire.z),t&&Q.toast(`✅ ¡Ya está! ${n.icon} ${n.name} junto a la hoguera`,2.5))}if(lg.active){if(Y.speed01>.15||Y.swimming||!Y.onGround||Sg&&Sg.speed>.4)Qv(),Q.toast(`🎣 Te has movido y has recogido la caña`,1.5);else{let e=lg.update(t);e?.kind===`pica`&&Q.bite(!0,$.device),e?.kind===`escapa`&&(Q.bite(!1,$.device),Q.toast(`🐟 ¡Oh, no! Se ha escapado… Prueba otra vez`,2.5))}}for(let e of Cv)e.t-=t;let n=Cv.find(e=>e.t<=0);if(n&&(Q.toast(n.text,4),Cv=Cv.filter(e=>e!==n)),wv-=t,wv<=0&&(wv=.5,Z.count(`cana`)>0&&Tv(`cana`,`🎣 ¡Una caña! Ponte en la orilla mirando al mar y pulsa ${Ov(`action`)} para pescar`,5),Z.count(`botella`)>0&&Sv.has(`cana`)&&Tv(`botella`,`🫙 Llena la botella en el mar y hiérvela en una hoguera para tener agua`,5),Z.canCraft(Qu.find(e=>e.out===`hoguera`))&&Tv(`fabricar`,`🔨 ¡Ya puedes fabricar una hoguera! Pulsa ${Ov(`craft`)}`,5),Z.count(`pez`)>0&&Tv(`pez`,`🐟 Crudo alimenta poco. ¡Ásalo en una hoguera!`,4),Z.count(`madera`)>=6&&Z.count(`balsa`)===0&&xg.length===0&&Tv(`balsa`,`🛶 Con madera y cuerda puedes fabricar una balsa (${Ov(`craft`)} → ⛵ Barcos) y viajar a otras islas`,5),Z.count(`balsa`)+Z.count(`barca`)+Z.count(`barco`)>0&&Tv(`echar-barco`,`🌊 Ponte en la orilla mirando al mar y úsalo (${Ov(`use`)}) para echarlo al agua`,5)),lg.active){if(Q.setPrompt(lg.state===`pica`?`¡Tira ahora!`:`Recoger la caña`,$.device),e.action){let e=lg.pull();if(Q.bite(!1,$.device),e.kind===`pesca`){Mv(e.item,1);let t=e.item===`bota`?`🥾 Has pescado… ¡una bota vieja! 😂`:e.item===`pez-dorado`?`🐠 ¡Un pez dorado! ¡Qué suerte!`:`🐟 ¡Has pescado un pez!`;Q.toast(t,2.5)}else Q.toast(`🎣 ¡Demasiado pronto! Espera a que pique`,2)}return!1}let r=Sg?null:Vv();if(r){let t=Hv(r);return $h.showGhost(r,t.x,t.z,t.r,!t.why),Q.setPrompt(t.why?`🚫 ${t.why}`:`🔨 Colocar ${K[r].name.toLowerCase()}`,$.device),e.action&&Uv(r),!1}if($h.showGhost(null),Sg){let t=Od(Y.x,Y.z,(e,t)=>eg.heightAt(e,t),bd[Sg.kind].width/2+4);return Q.setPrompt(t?`🏝️ Bajar a tierra`:`💦 Bajar al agua`,$.device),e.action&&sv(t),!1}Y.swimming&&Tv(`bucear`,`🤿 ¡Puedes bucear! Mantén ${Ev()} para bajar y ${Dv()} para subir. ¡Vigila el aire 🫧!`,5),Eg?.wreckNear(Y.x,Y.z,30)&&Tv(`hundido`,`🫧 ¡Burbujas! Ahí debajo hay un barco hundido con un cofre del tesoro. Bucea (${Ev()}) para verlo`,5);let i=Y.swimming?Eg?.nearestChest(Y.x,Y.y,Y.z):null;if(i&&Eg){if(Q.setPrompt(i.chest.open?`🧰 Está vacío… vuelve otro día`:`🧰 Abrir el cofre del tesoro`,$.device),e.action&&!i.chest.open){let e=Eg.open(i.chest,Math.random());for(let[t,n]of e)Mv(t,n);Q.toast(`🧰 ¡Un tesoro! ${e.map(([e,t])=>`${K[e].icon} ${K[e].name}${t>1?` ×${t}`:``}`).join(`, `)}`,4),P_()}return!1}if(Dg&&!Y.swimming){let t=Math.hypot(Y.x-Dg.x,Y.z-Dg.z);if(t<16&&Tv(`amigo`,`${Dg.def.icon} ¡Alguien te saluda! Acércate y pulsa ${Ov(`action`)} para hablar`,4),t<2.6)return Q.setPrompt(`💬 Hablar con ${Dg.def.name.split(/[ ,]/)[0]}`,$.device),e.action&&fy(),!1}let a=Bv(),o=cg.nearest(Y.x,Y.z,{hacha:Z.count(`hacha`)>0,pico:Z.count(`pico`)>0}),s=$h.nearest(Y.x,Y.z,a===`hacha`,Y.yaw),c=cv();if(c&&(!o||c.dist<o.dist)&&(!s||c.dist<s.dist)){let t=ev[c.b.kind];return Q.setPrompt(a===`hacha`?`🪓 Recoger ${t}`:`${bd[c.b.kind].icon} Subir a ${t}`,$.device),e.action&&(a===`hacha`?uv(c.b):ov(c.b)),!1}let l=!!s&&(!o||s.dist<o.dist),u=!o&&!s&&Z.count(`botella`)>0&&Av(),d=!o&&!s&&!u&&Z.count(`cana`)>0&&!!jv();return l?Q.setPrompt(Wv[s.action](s.piece),$.device):o?Q.setPrompt(Fv(o),$.device):u?Q.setPrompt(`🫙 Llenar la botella con agua del mar`,$.device):d?Q.setPrompt(`🎣 Pescar`,$.device):Q.setPrompt(null,$.device),e.action&&(l?qv(s):o?.type===`chop`?zv(o.chop):o?Yv(o):u?Xv():d&&Zv()),!1}function ay(){kg.has(`monstruo`)||kg.has(`ogro`)||(Fg=new V(new W(7,32,20),new ja({color:`#b388ff`,emissive:`#7c4dff`,emissiveIntensity:.5,transparent:!0,opacity:.28,depthWrite:!1,side:2})),Fg.position.set(0,eg.heightAt(0,-2),-2),tg.add(Fg))}function oy(){if(!ug)return;let e=null,t=40;for(let n of ug.list){if(!n.alive||!n.def.boss)continue;n.kind===`ogro`&&(n.calm=!kg.has(`monstruo`),Math.hypot(n.x-Y.x,n.z-Y.z)<30&&!Y.swimming&&Tv(`ogro`,n.calm?`👹 Ogro: ¡JA, JA, JA! ¡Sí, era yo el piloto! ¡Mi escudo mágico me protege mientras viva mi monstruo marino!`:`👹 Ogro: ¡Has vencido a mi monstruo! ¡GRRR! ¡Ahora lucharás contra mí!`,6));let r=Math.hypot(n.x-Y.x,n.z-Y.z);(n.aware||n.hp<n.def.hp)&&r<t&&(t=r,e=n)}if(Q.setBoss(e?e.def.name:null,e?e.hp/e.def.hp:1),Gg.current!==`victoria`&&Gg.play(e?`jefe`:`explorar`),Fg){let e=Fg.material;e.opacity=.22+Math.sin(J_*2)*.06,Fg.rotation.y+=.004}}function sy(e){if(x_({kind:`jefe`,key:e.kind===`monstruo`||e.kind===`ogro`?e.kind:oh(vg.i,vg.j),name:e.def.name}),e.kind===`monstruo`)kg.add(`monstruo`),Fg&&=(tg.remove(Fg),null),setTimeout(()=>Q.toast(`🔮 ¡El escudo mágico del ogro ha desaparecido! Baja a tierra y ve a su castillo`,5),3200);else if(e.kind===`ogro`)kg.add(`ogro`),cy();else{kg.add(oh(vg.i,vg.j));let e=Wp(kg);Q.setPieces(e,5),setTimeout(()=>{if(e>=5){let e=dh(_g);wg.add(oh(e.i,e.j)),Q.toast(`🗺️ ¡El mapa está completo! La Isla Misteriosa 💀 ya sale en el mapa (${tv()}). ¡Ve a por el ogro!`,7)}else Q.toast(`🗺️ ¡Un trozo del mapa! Llevas ${e} de 5. Los demás los tienen los jefes de otras islas`,6);P_()},3200)}P_()}function cy(){Ag=!0,P_(),Gg.play(`victoria`),setTimeout(()=>{$.releasePointer(),Q.showWin(`¡Has ganado!`,`¡Bravo, ${Xh.name}! Has vencido al ogro: promete no volver a estrellar aviones nunca más. Los amigos de las islas hacen una fiesta en tu honor. Puedes seguir explorando el océano todo lo que quieras.`,()=>{Gg.play(`explorar`),Q.toast(`👑 ¡Eres el héroe de las islas!`,4)})},2500)}var ly=[`hacha`,`pico`,`espada`,`lanza`,`arco`,`arpon`,`trabuco`];function uy(){let e=hv();J.setTool(ly.includes(e)?e:null);let t=vd(Z.slots.map(e=>e?.id));J.setGear(t.armor,t.shield),(t.armor||t.shield)&&Tv(`armadura`,`🛡️ ¡Llevas protección! Basta con llevarla en la mochila: los enemigos te harán menos daño`,5)}function dy(){return Og[oh(vg.i,vg.j)]??0}function fy(){Dg&&($.releasePointer(),Zg.show(Dg.def,dy()),Qv())}function py(e){if(!Dg)return;let[t,n]=e.want,r=$f(Z,e);if(r===`faltan`){Zg.refresh(dy(),`Todavía te faltan ${K[t].icon} ${K[t].name}: tienes ${Z.count(t)} de ${n}.`);return}if(r===`lleno`){Zg.refresh(dy(),`🎒 ¡No te cabe el premio en la mochila! Suelta algo y vuelve.`);return}Og[oh(vg.i,vg.j)]=dy()+1,Q.toast(`⭐ ¡Misión cumplida! ${e.reward.map(([e,t])=>`+${t} ${K[e].icon}`).join(` `)}`,3.5);let i=Zf(Dg.def,dy());Zg.refresh(dy(),`${e.thanks}${i?` ${i.text}`:` ${Dg.def.done}`}`),P_()}function my(e){let t=ep(Z,e),[n,r]=e.get,[i]=e.price;t===`faltan`?Zg.refresh(dy(),i===`oro`?`¡Te falta oro! ${K.oro.icon} Lo encuentras en los cofres del tesoro y venciendo enemigos.`:`No tienes ${K[i].icon} ${K[i].name}.`):t===`lleno`?Zg.refresh(dy(),`🎒 ¡No te cabe en la mochila! Suelta algo primero.`):(Zg.refresh(dy(),n===`oro`?`¡Trato hecho! Toma ${K.oro.icon} ${r}.`:`¡Trato hecho! Aquí tienes: ${K[n].icon} ${K[n].name}${r>1?` ×${r}`:``}.`),P_())}function hy(){let e=sg;if(e.group.visible=lg.active&&Qh===`explorar`,!e.group.visible)return;let{fx:t,fz:n}=kv(),r=new R(Y.x+t*.9+n*.25,Y.y+J.height*.95,Y.z+n*.9-t*.25),i=new R(lg.x,0,lg.z);if(lg.state===`lanzando`){let t=1-Math.max(0,lg.timer)/tf;e.bob.position.lerpVectors(r,i,t),e.bob.position.y+=Math.sin(t*Math.PI)*2.5}else lg.state===`pica`?(e.bob.position.copy(i),e.bob.position.y=-.1+Math.sin(J_*28)*.07):(e.bob.position.copy(i),e.bob.position.y=.02+Math.sin(J_*2.2)*.04);let a=e.line.geometry.attributes.position;a.setXYZ(0,r.x,r.y,r.z),a.setXYZ(1,e.bob.position.x,e.bob.position.y+.1,e.bob.position.z),a.needsUpdate=!0}function gy(){U_.update();let e=Math.min(U_.getDelta(),.05);if(J_+=e,rg.update(J_,e),Q.update(e),dg.update(e),Qh===`intro`&&(qg.update(e),Qh===`intro`))qg.render(qh),requestAnimationFrame(gy);else{if(Qh===`titulo`){let t=J_*.05,n=eg.size*.45;Jh.position.set(Math.cos(t)*n,22,Math.sin(t)*n),Jh.lookAt(0,2,0),O_(),J.animate(e,0,!1,!1,J_),rg.follow(0,0)}else if(Qh===`creador`){J.showName(!0);let t=J.root.position;J.root.rotation.y=E_,J.animate(e,0,!1,!1,J_);let n=J.height,r=n*1.3/(2*Math.tan(jt.degToRad(Jh.fov/2))*D_);Jh.position.set(t.x,t.y+n*.6,t.z+Math.max(2.8,r)),Jh.lookAt(t.x,t.y+n*.52,t.z),rg.follow(t.x,t.z)}else{if(Qh===`explorar`&&$_(e),Qh===`creador`){qh.render(tg,Jh),requestAnimationFrame(gy);return}if(X){Cg?.update(xg,yg.x,yg.z,J_),Eg?.update(e,J_,Y.x,Y.z),Lg-=e,Eg&&Y.diving&&Lg<=0&&Qh===`explorar`&&(Lg=.22+Math.random()*.2,Eg.bubble(Y.x,Y.y+J.height*.4,Y.z));let t=Y.x+yg.x,n=Y.z+yg.z;Q.setCompass(Z.count(`brujula`)>0&&Qh===`explorar`?bh(-Math.sin(Y.camYaw),-Math.cos(Y.camYaw)):null,Math.hypot(t,n)>45?bh(-t,-n):null)}T_(e),J.root.position.set(Y.x,Y.y,Y.z),J.root.rotation.y=Y.yaw;let t=Y.diving?jt.clamp(-Y.vy*.2,-.6,.7):0;J.root.rotation.x+=(t-J.root.rotation.x)*(1-Math.exp(-6*e)),J.animate(e,Y.speed01,!Y.onGround&&!Y.swimming,Y.flying,J_,Y.swimming,Qh===`muerto`),hy(),og.visible=Y.swimming&&!Y.diving&&Qh===`explorar`,og.visible&&(og.position.set(Y.x,.05,Y.z),og.scale.setScalar(1+.15*Math.sin(J_*4)+Y.speed01*.5)),W_.set(Y.x,Y.y+J.height*(Y.swimming?.45:.78),Y.z);let n=Math.cos(Y.camPitch);G_.set(Math.sin(Y.camYaw)*n,Math.sin(Y.camPitch),Math.cos(Y.camYaw)*n),K_.set(W_,G_),K_.far=Y.camDist;let r=K_.intersectObjects(rg.cameraBlockers,!0)[0],i=r?Math.max(1.2,r.distance-.3):Y.camDist;q_=i<q_?i:q_+(i-q_)*(1-Math.exp(-4*e));let a=W_.x+G_.x*q_,o=W_.z+G_.z*q_,s=W_.y+G_.y*q_;if(s=Y.diving?Math.min(Math.max(s,eg.heightAt(a,o)+.5),-.7):Math.max(s,eg.heightAt(a,o)+.5,.6),ag.shake>0){let e=ag.shake*.5;a+=(Math.random()-.5)*e,s+=(Math.random()-.5)*e,o+=(Math.random()-.5)*e}Jh.position.set(a,s,o),Jh.lookAt(W_);let c=s<-.1,l=(Xh.classId===`alien`?70:38)+(Xh.look.glasses===`buceo`?15:0);rg.setUnderwater(c?l:null),Gg.setUnderwater(c),Q.setWater(Y.swimming&&!Sg&&Qh===`explorar`&&!!X,c),J.showName(q_>2.6),rg.follow(Y.x,Y.z)}qh.render(tg,Jh),requestAnimationFrame(gy)}}window.__juego={player:Y,avatar:J,camera:Jh,get mode(){return Qh},get world(){return rg},get survival(){return X},get things(){return cg},get builds(){return $h},get creatures(){return ug},energy:fg,get day(){return gg},chestUi:Xg,inventory:Z,fishing:lg,get hour(){return hg},setHour(e){hg=e},get sea(){return{seaSeed:_g,cell:vg,center:yg,boats:xg,riding:Sg,seen:wg,isles:bg}},get seaLife(){return Eg},get friend(){return Dg},get quests(){return Og},get bosses(){return kg},music:Gg,intro:qg,playIntro:N_,get multi(){return jg},net:Mg,remotes:ng,pieces(e){let t=[`-1,0`,`1,0`,`0,-1`,`-1,-1`,`1,1`,`-1,1`,`1,-1`];for(let n=0;n<e;n++)kg.add(t[n]);if(Q.setPieces(Wp(kg),5),Gp(kg)){let e=dh(_g);wg.add(oh(e.i,e.j))}},friendUi:Zg,mapUi:Qg,visit(e,t){Sg&&sv(null),R_({i:e,j:t}),Y.teleport(eg.spawn.x,eg.spawn.z,ig,eg.spawn.yaw)}},requestAnimationFrame(gy);