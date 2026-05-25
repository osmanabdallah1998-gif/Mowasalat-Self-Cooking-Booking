import{f as dh,h as fh,e as q,u as Bl,O as mh,N as ph,i as gh,c as yh,b as Nt,a as Ul,H as _h}from"./vendor-lW1UZJaj.js";import{b as xh,L as Rs,d as Eh,I as vh,c as wh,F as Fr,N as Mr,D as Lr,O as lt,G as Or,a as ya}from"./data-bmQhm5Te.js";import{R as bn,a as Br,C as Ur,X as qr,Y as zr,T as In,L as _a,B as Sn,c as xa,P as Ea,b as $r}from"./charts-CU8OzNO1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();var Kr={exports:{}},Rn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var va;function Ah(){if(va)return Rn;va=1;var n=dh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(u,d,f){var p,y={},v=null,R=null;f!==void 0&&(v=""+f),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(R=d.ref);for(p in d)s.call(d,p)&&!o.hasOwnProperty(p)&&(y[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)y[p]===void 0&&(y[p]=d[p]);return{$$typeof:e,type:u,key:v,ref:R,props:y,_owner:r.current}}return Rn.Fragment=t,Rn.jsx=a,Rn.jsxs=a,Rn}var wa;function Th(){return wa||(wa=1,Kr.exports=Ah()),Kr.exports}var c=Th(),ms={},Aa;function bh(){if(Aa)return ms;Aa=1;var n=fh();return ms.createRoot=n.createRoot,ms.hydrateRoot=n.hydrateRoot,ms}var Ih=bh();const Sh=()=>{};var Ta={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Rh=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=n[t++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=n[t++],a=n[t++],u=n[t++],d=((r&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[s++]=String.fromCharCode(55296+(d>>10)),e[s++]=String.fromCharCode(56320+(d&1023))}else{const o=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},zl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const o=n[r],a=r+1<n.length,u=a?n[r+1]:0,d=r+2<n.length,f=d?n[r+2]:0,p=o>>2,y=(o&3)<<4|u>>4;let v=(u&15)<<2|f>>6,R=f&63;d||(R=64,a||(v=64)),s.push(t[p],t[y],t[v],t[R])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ql(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Rh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const o=t[n.charAt(r++)],u=r<n.length?t[n.charAt(r)]:0;++r;const f=r<n.length?t[n.charAt(r)]:64;++r;const y=r<n.length?t[n.charAt(r)]:64;if(++r,o==null||u==null||f==null||y==null)throw new Ch;const v=o<<2|u>>4;if(s.push(v),f!==64){const R=u<<4&240|f>>2;if(s.push(R),y!==64){const j=f<<6&192|y;s.push(j)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ch extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nh=function(n){const e=ql(n);return zl.encodeByteArray(e,!0)},Cs=function(n){return Nh(n).replace(/\./g,"")},Ph=function(n){try{return zl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=()=>Dh().__FIREBASE_DEFAULTS__,kh=()=>{if(typeof process>"u"||typeof Ta>"u")return;const n=Ta.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},jh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ph(n[1]);return e&&JSON.parse(e)},ji=()=>{try{return Sh()||Vh()||kh()||jh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Fh=n=>{var e,t;return(t=(e=ji())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Mh=n=>{const e=Fh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},$l=()=>{var n;return(n=ji())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Cs(JSON.stringify(t)),Cs(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uh(){var e;const n=(e=ji())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qh(){return!Uh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zh(){try{return typeof indexedDB=="object"}catch{return!1}}function $h(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var o;e(((o=r.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="FirebaseError";class sn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Kh,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kl.prototype.create)}}class Kl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?Hh(o,s):"Error",u=`${this.serviceName}: ${a} (${r}).`;return new sn(r,u,s)}}function Hh(n,e){return n.replace(Gh,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Gh=/\{\$([^}]+)}/g;function Ns(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const o=n[r],a=e[r];if(ba(o)&&ba(a)){if(!Ns(o,a))return!1}else if(o!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function ba(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Wh(n){return(await fetch(n,{credentials:"include"})).ok}class On{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Lh;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yh(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=Vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vt){return this.instances.has(e)}getOptions(e=Vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);s===u&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Xh(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Vt){return this.component?this.component.multipleInstances?e:Vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xh(n){return n===Vt?void 0:n}function Yh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Qh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const Zh={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},ed=ee.INFO,td={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},nd=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=td[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gl{constructor(e){this.name=e,this._logLevel=ed,this._logHandler=nd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const sd=(n,e)=>e.some(t=>n instanceof t);let Ia,Sa;function rd(){return Ia||(Ia=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function id(){return Sa||(Sa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wl=new WeakMap,ci=new WeakMap,Ql=new WeakMap,Hr=new WeakMap,Fi=new WeakMap;function od(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(ut(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Wl.set(t,n)}).catch(()=>{}),Fi.set(e,n),e}function ad(n){if(ci.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ci.set(n,e)}let ui={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ci.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ql.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ut(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ld(n){ui=n(ui)}function cd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Gr(this),e,...t);return Ql.set(s,e.sort?e.sort():[e]),ut(s)}:id().includes(n)?function(...e){return n.apply(Gr(this),e),ut(Wl.get(this))}:function(...e){return ut(n.apply(Gr(this),e))}}function ud(n){return typeof n=="function"?cd(n):(n instanceof IDBTransaction&&ad(n),sd(n,rd())?new Proxy(n,ui):n)}function ut(n){if(n instanceof IDBRequest)return od(n);if(Hr.has(n))return Hr.get(n);const e=ud(n);return e!==n&&(Hr.set(n,e),Fi.set(e,n)),e}const Gr=n=>Fi.get(n);function hd(n,e,{blocked:t,upgrade:s,blocking:r,terminated:o}={}){const a=indexedDB.open(n,e),u=ut(a);return s&&a.addEventListener("upgradeneeded",d=>{s(ut(a.result),d.oldVersion,d.newVersion,ut(a.transaction),d)}),t&&a.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),u.then(d=>{o&&d.addEventListener("close",()=>o()),r&&d.addEventListener("versionchange",f=>r(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const dd=["get","getKey","getAll","getAllKeys","count"],fd=["put","add","delete","clear"],Wr=new Map;function Ra(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wr.get(e))return Wr.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=fd.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||dd.includes(t)))return;const o=async function(a,...u){const d=this.transaction(a,r?"readwrite":"readonly");let f=d.store;return s&&(f=f.index(u.shift())),(await Promise.all([f[t](...u),r&&d.done]))[0]};return Wr.set(e,o),o}ld(n=>({...n,get:(e,t,s)=>Ra(e,t)||n.get(e,t,s),has:(e,t)=>!!Ra(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pd(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function pd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hi="@firebase/app",Ca="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new Gl("@firebase/app"),gd="@firebase/app-compat",yd="@firebase/analytics-compat",_d="@firebase/analytics",xd="@firebase/app-check-compat",Ed="@firebase/app-check",vd="@firebase/auth",wd="@firebase/auth-compat",Ad="@firebase/database",Td="@firebase/data-connect",bd="@firebase/database-compat",Id="@firebase/functions",Sd="@firebase/functions-compat",Rd="@firebase/installations",Cd="@firebase/installations-compat",Nd="@firebase/messaging",Pd="@firebase/messaging-compat",Dd="@firebase/performance",Vd="@firebase/performance-compat",kd="@firebase/remote-config",jd="@firebase/remote-config-compat",Fd="@firebase/storage",Md="@firebase/storage-compat",Ld="@firebase/firestore",Od="@firebase/ai",Bd="@firebase/firestore-compat",Ud="firebase",qd="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="[DEFAULT]",zd={[hi]:"fire-core",[gd]:"fire-core-compat",[_d]:"fire-analytics",[yd]:"fire-analytics-compat",[Ed]:"fire-app-check",[xd]:"fire-app-check-compat",[vd]:"fire-auth",[wd]:"fire-auth-compat",[Ad]:"fire-rtdb",[Td]:"fire-data-connect",[bd]:"fire-rtdb-compat",[Id]:"fire-fn",[Sd]:"fire-fn-compat",[Rd]:"fire-iid",[Cd]:"fire-iid-compat",[Nd]:"fire-fcm",[Pd]:"fire-fcm-compat",[Dd]:"fire-perf",[Vd]:"fire-perf-compat",[kd]:"fire-rc",[jd]:"fire-rc-compat",[Fd]:"fire-gcs",[Md]:"fire-gcs-compat",[Ld]:"fire-fst",[Bd]:"fire-fst-compat",[Od]:"fire-vertex","fire-js":"fire-js",[Ud]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new Map,fi=new Map,mi=new Map;function Na(n,e){try{n.container.addComponent(e)}catch(t){Je.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ps(n){const e=n.name;if(mi.has(e))return Je.debug(`There were multiple attempts to register component ${e}.`),!1;mi.set(e,n);for(const t of Mt.values())Na(t,n);for(const t of fi.values())Na(t,n);return!0}function $d(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Kd(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ht=new Kl("app","Firebase",Hd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ht.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=qd;function Xl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:di,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw ht.create("bad-app-name",{appName:String(r)});if(t||(t=$l()),!t)throw ht.create("no-options");const o=Mt.get(r);if(o){if(Ns(t,o.options)&&Ns(s,o.config))return o;throw ht.create("duplicate-app",{appName:r})}const a=new Jh(r);for(const d of mi.values())a.addComponent(d);const u=new Gd(t,s,a);return Mt.set(r,u),u}function Qd(n=di){const e=Mt.get(n);if(!e&&n===di&&$l())return Xl();if(!e)throw ht.create("no-app",{appName:n});return e}function Xd(){return Array.from(Mt.values())}async function Yd(n){let e=!1;const t=n.name;Mt.has(t)?(e=!0,Mt.delete(t)):fi.has(t)&&n.decRefCount()<=0&&(fi.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(s=>s.delete())),n.isDeleted=!0)}function Xt(n,e,t){let s=zd[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Je.warn(a.join(" "));return}Ps(new On(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="firebase-heartbeat-database",Zd=1,Bn="firebase-heartbeat-store";let Qr=null;function Yl(){return Qr||(Qr=hd(Jd,Zd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Bn)}catch(t){console.warn(t)}}}}).catch(n=>{throw ht.create("idb-open",{originalErrorMessage:n.message})})),Qr}async function ef(n){try{const t=(await Yl()).transaction(Bn),s=await t.objectStore(Bn).get(Jl(n));return await t.done,s}catch(e){if(e instanceof sn)Je.warn(e.message);else{const t=ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Je.warn(t.message)}}}async function Pa(n,e){try{const s=(await Yl()).transaction(Bn,"readwrite");await s.objectStore(Bn).put(e,Jl(n)),await s.done}catch(t){if(t instanceof sn)Je.warn(t.message);else{const s=ht.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Je.warn(s.message)}}}function Jl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=1024,nf=30;class sf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new of(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Da();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats.length>nf){const a=af(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Je.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Da(),{heartbeatsToSend:s,unsentEntries:r}=rf(this._heartbeatsCache.heartbeats),o=Cs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Je.warn(t),""}}}function Da(){return new Date().toISOString().substring(0,10)}function rf(n,e=tf){const t=[];let s=n.slice();for(const r of n){const o=t.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),Va(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Va(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class of{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zh()?$h().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ef(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Pa(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Pa(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Va(n){return Cs(JSON.stringify({version:2,heartbeats:n})).length}function af(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(n){Ps(new On("platform-logger",e=>new md(e),"PRIVATE")),Ps(new On("heartbeat",e=>new sf(e),"PRIVATE")),Xt(hi,Ca,n),Xt(hi,Ca,"esm2020"),Xt("fire-js","")}lf("");var cf="firebase",uf="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt(cf,uf,"app");var ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dt,Zl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,g){function E(){}E.prototype=g.prototype,x.F=g.prototype,x.prototype=new E,x.prototype.constructor=x,x.D=function(A,w,I){for(var _=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)_[Ae-2]=arguments[Ae];return g.prototype[w].apply(A,_)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(x,g,E){E||(E=0);const A=Array(16);if(typeof g=="string")for(var w=0;w<16;++w)A[w]=g.charCodeAt(E++)|g.charCodeAt(E++)<<8|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<24;else for(w=0;w<16;++w)A[w]=g[E++]|g[E++]<<8|g[E++]<<16|g[E++]<<24;g=x.g[0],E=x.g[1],w=x.g[2];let I=x.g[3],_;_=g+(I^E&(w^I))+A[0]+3614090360&4294967295,g=E+(_<<7&4294967295|_>>>25),_=I+(w^g&(E^w))+A[1]+3905402710&4294967295,I=g+(_<<12&4294967295|_>>>20),_=w+(E^I&(g^E))+A[2]+606105819&4294967295,w=I+(_<<17&4294967295|_>>>15),_=E+(g^w&(I^g))+A[3]+3250441966&4294967295,E=w+(_<<22&4294967295|_>>>10),_=g+(I^E&(w^I))+A[4]+4118548399&4294967295,g=E+(_<<7&4294967295|_>>>25),_=I+(w^g&(E^w))+A[5]+1200080426&4294967295,I=g+(_<<12&4294967295|_>>>20),_=w+(E^I&(g^E))+A[6]+2821735955&4294967295,w=I+(_<<17&4294967295|_>>>15),_=E+(g^w&(I^g))+A[7]+4249261313&4294967295,E=w+(_<<22&4294967295|_>>>10),_=g+(I^E&(w^I))+A[8]+1770035416&4294967295,g=E+(_<<7&4294967295|_>>>25),_=I+(w^g&(E^w))+A[9]+2336552879&4294967295,I=g+(_<<12&4294967295|_>>>20),_=w+(E^I&(g^E))+A[10]+4294925233&4294967295,w=I+(_<<17&4294967295|_>>>15),_=E+(g^w&(I^g))+A[11]+2304563134&4294967295,E=w+(_<<22&4294967295|_>>>10),_=g+(I^E&(w^I))+A[12]+1804603682&4294967295,g=E+(_<<7&4294967295|_>>>25),_=I+(w^g&(E^w))+A[13]+4254626195&4294967295,I=g+(_<<12&4294967295|_>>>20),_=w+(E^I&(g^E))+A[14]+2792965006&4294967295,w=I+(_<<17&4294967295|_>>>15),_=E+(g^w&(I^g))+A[15]+1236535329&4294967295,E=w+(_<<22&4294967295|_>>>10),_=g+(w^I&(E^w))+A[1]+4129170786&4294967295,g=E+(_<<5&4294967295|_>>>27),_=I+(E^w&(g^E))+A[6]+3225465664&4294967295,I=g+(_<<9&4294967295|_>>>23),_=w+(g^E&(I^g))+A[11]+643717713&4294967295,w=I+(_<<14&4294967295|_>>>18),_=E+(I^g&(w^I))+A[0]+3921069994&4294967295,E=w+(_<<20&4294967295|_>>>12),_=g+(w^I&(E^w))+A[5]+3593408605&4294967295,g=E+(_<<5&4294967295|_>>>27),_=I+(E^w&(g^E))+A[10]+38016083&4294967295,I=g+(_<<9&4294967295|_>>>23),_=w+(g^E&(I^g))+A[15]+3634488961&4294967295,w=I+(_<<14&4294967295|_>>>18),_=E+(I^g&(w^I))+A[4]+3889429448&4294967295,E=w+(_<<20&4294967295|_>>>12),_=g+(w^I&(E^w))+A[9]+568446438&4294967295,g=E+(_<<5&4294967295|_>>>27),_=I+(E^w&(g^E))+A[14]+3275163606&4294967295,I=g+(_<<9&4294967295|_>>>23),_=w+(g^E&(I^g))+A[3]+4107603335&4294967295,w=I+(_<<14&4294967295|_>>>18),_=E+(I^g&(w^I))+A[8]+1163531501&4294967295,E=w+(_<<20&4294967295|_>>>12),_=g+(w^I&(E^w))+A[13]+2850285829&4294967295,g=E+(_<<5&4294967295|_>>>27),_=I+(E^w&(g^E))+A[2]+4243563512&4294967295,I=g+(_<<9&4294967295|_>>>23),_=w+(g^E&(I^g))+A[7]+1735328473&4294967295,w=I+(_<<14&4294967295|_>>>18),_=E+(I^g&(w^I))+A[12]+2368359562&4294967295,E=w+(_<<20&4294967295|_>>>12),_=g+(E^w^I)+A[5]+4294588738&4294967295,g=E+(_<<4&4294967295|_>>>28),_=I+(g^E^w)+A[8]+2272392833&4294967295,I=g+(_<<11&4294967295|_>>>21),_=w+(I^g^E)+A[11]+1839030562&4294967295,w=I+(_<<16&4294967295|_>>>16),_=E+(w^I^g)+A[14]+4259657740&4294967295,E=w+(_<<23&4294967295|_>>>9),_=g+(E^w^I)+A[1]+2763975236&4294967295,g=E+(_<<4&4294967295|_>>>28),_=I+(g^E^w)+A[4]+1272893353&4294967295,I=g+(_<<11&4294967295|_>>>21),_=w+(I^g^E)+A[7]+4139469664&4294967295,w=I+(_<<16&4294967295|_>>>16),_=E+(w^I^g)+A[10]+3200236656&4294967295,E=w+(_<<23&4294967295|_>>>9),_=g+(E^w^I)+A[13]+681279174&4294967295,g=E+(_<<4&4294967295|_>>>28),_=I+(g^E^w)+A[0]+3936430074&4294967295,I=g+(_<<11&4294967295|_>>>21),_=w+(I^g^E)+A[3]+3572445317&4294967295,w=I+(_<<16&4294967295|_>>>16),_=E+(w^I^g)+A[6]+76029189&4294967295,E=w+(_<<23&4294967295|_>>>9),_=g+(E^w^I)+A[9]+3654602809&4294967295,g=E+(_<<4&4294967295|_>>>28),_=I+(g^E^w)+A[12]+3873151461&4294967295,I=g+(_<<11&4294967295|_>>>21),_=w+(I^g^E)+A[15]+530742520&4294967295,w=I+(_<<16&4294967295|_>>>16),_=E+(w^I^g)+A[2]+3299628645&4294967295,E=w+(_<<23&4294967295|_>>>9),_=g+(w^(E|~I))+A[0]+4096336452&4294967295,g=E+(_<<6&4294967295|_>>>26),_=I+(E^(g|~w))+A[7]+1126891415&4294967295,I=g+(_<<10&4294967295|_>>>22),_=w+(g^(I|~E))+A[14]+2878612391&4294967295,w=I+(_<<15&4294967295|_>>>17),_=E+(I^(w|~g))+A[5]+4237533241&4294967295,E=w+(_<<21&4294967295|_>>>11),_=g+(w^(E|~I))+A[12]+1700485571&4294967295,g=E+(_<<6&4294967295|_>>>26),_=I+(E^(g|~w))+A[3]+2399980690&4294967295,I=g+(_<<10&4294967295|_>>>22),_=w+(g^(I|~E))+A[10]+4293915773&4294967295,w=I+(_<<15&4294967295|_>>>17),_=E+(I^(w|~g))+A[1]+2240044497&4294967295,E=w+(_<<21&4294967295|_>>>11),_=g+(w^(E|~I))+A[8]+1873313359&4294967295,g=E+(_<<6&4294967295|_>>>26),_=I+(E^(g|~w))+A[15]+4264355552&4294967295,I=g+(_<<10&4294967295|_>>>22),_=w+(g^(I|~E))+A[6]+2734768916&4294967295,w=I+(_<<15&4294967295|_>>>17),_=E+(I^(w|~g))+A[13]+1309151649&4294967295,E=w+(_<<21&4294967295|_>>>11),_=g+(w^(E|~I))+A[4]+4149444226&4294967295,g=E+(_<<6&4294967295|_>>>26),_=I+(E^(g|~w))+A[11]+3174756917&4294967295,I=g+(_<<10&4294967295|_>>>22),_=w+(g^(I|~E))+A[2]+718787259&4294967295,w=I+(_<<15&4294967295|_>>>17),_=E+(I^(w|~g))+A[9]+3951481745&4294967295,x.g[0]=x.g[0]+g&4294967295,x.g[1]=x.g[1]+(w+(_<<21&4294967295|_>>>11))&4294967295,x.g[2]=x.g[2]+w&4294967295,x.g[3]=x.g[3]+I&4294967295}s.prototype.v=function(x,g){g===void 0&&(g=x.length);const E=g-this.blockSize,A=this.C;let w=this.h,I=0;for(;I<g;){if(w==0)for(;I<=E;)r(this,x,I),I+=this.blockSize;if(typeof x=="string"){for(;I<g;)if(A[w++]=x.charCodeAt(I++),w==this.blockSize){r(this,A),w=0;break}}else for(;I<g;)if(A[w++]=x[I++],w==this.blockSize){r(this,A),w=0;break}}this.h=w,this.o+=g},s.prototype.A=function(){var x=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);x[0]=128;for(var g=1;g<x.length-8;++g)x[g]=0;g=this.o*8;for(var E=x.length-8;E<x.length;++E)x[E]=g&255,g/=256;for(this.v(x),x=Array(16),g=0,E=0;E<4;++E)for(let A=0;A<32;A+=8)x[g++]=this.g[E]>>>A&255;return x};function o(x,g){var E=u;return Object.prototype.hasOwnProperty.call(E,x)?E[x]:E[x]=g(x)}function a(x,g){this.h=g;const E=[];let A=!0;for(let w=x.length-1;w>=0;w--){const I=x[w]|0;A&&I==g||(E[w]=I,A=!1)}this.g=E}var u={};function d(x){return-128<=x&&x<128?o(x,function(g){return new a([g|0],g<0?-1:0)}):new a([x|0],x<0?-1:0)}function f(x){if(isNaN(x)||!isFinite(x))return y;if(x<0)return C(f(-x));const g=[];let E=1;for(let A=0;x>=E;A++)g[A]=x/E|0,E*=4294967296;return new a(g,0)}function p(x,g){if(x.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(x.charAt(0)=="-")return C(p(x.substring(1),g));if(x.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=f(Math.pow(g,8));let A=y;for(let I=0;I<x.length;I+=8){var w=Math.min(8,x.length-I);const _=parseInt(x.substring(I,I+w),g);w<8?(w=f(Math.pow(g,w)),A=A.j(w).add(f(_))):(A=A.j(E),A=A.add(f(_)))}return A}var y=d(0),v=d(1),R=d(16777216);n=a.prototype,n.m=function(){if(b(this))return-C(this).m();let x=0,g=1;for(let E=0;E<this.g.length;E++){const A=this.i(E);x+=(A>=0?A:4294967296+A)*g,g*=4294967296}return x},n.toString=function(x){if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(j(this))return"0";if(b(this))return"-"+C(this).toString(x);const g=f(Math.pow(x,6));var E=this;let A="";for(;;){const w=D(E,g).g;E=G(E,w.j(g));let I=((E.g.length>0?E.g[0]:E.h)>>>0).toString(x);if(E=w,j(E))return I+A;for(;I.length<6;)I="0"+I;A=I+A}},n.i=function(x){return x<0?0:x<this.g.length?this.g[x]:this.h};function j(x){if(x.h!=0)return!1;for(let g=0;g<x.g.length;g++)if(x.g[g]!=0)return!1;return!0}function b(x){return x.h==-1}n.l=function(x){return x=G(this,x),b(x)?-1:j(x)?0:1};function C(x){const g=x.g.length,E=[];for(let A=0;A<g;A++)E[A]=~x.g[A];return new a(E,~x.h).add(v)}n.abs=function(){return b(this)?C(this):this},n.add=function(x){const g=Math.max(this.g.length,x.g.length),E=[];let A=0;for(let w=0;w<=g;w++){let I=A+(this.i(w)&65535)+(x.i(w)&65535),_=(I>>>16)+(this.i(w)>>>16)+(x.i(w)>>>16);A=_>>>16,I&=65535,_&=65535,E[w]=_<<16|I}return new a(E,E[E.length-1]&-2147483648?-1:0)};function G(x,g){return x.add(C(g))}n.j=function(x){if(j(this)||j(x))return y;if(b(this))return b(x)?C(this).j(C(x)):C(C(this).j(x));if(b(x))return C(this.j(C(x)));if(this.l(R)<0&&x.l(R)<0)return f(this.m()*x.m());const g=this.g.length+x.g.length,E=[];for(var A=0;A<2*g;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(let w=0;w<x.g.length;w++){const I=this.i(A)>>>16,_=this.i(A)&65535,Ae=x.i(w)>>>16,Xe=x.i(w)&65535;E[2*A+2*w]+=_*Xe,k(E,2*A+2*w),E[2*A+2*w+1]+=I*Xe,k(E,2*A+2*w+1),E[2*A+2*w+1]+=_*Ae,k(E,2*A+2*w+1),E[2*A+2*w+2]+=I*Ae,k(E,2*A+2*w+2)}for(x=0;x<g;x++)E[x]=E[2*x+1]<<16|E[2*x];for(x=g;x<2*g;x++)E[x]=0;return new a(E,0)};function k(x,g){for(;(x[g]&65535)!=x[g];)x[g+1]+=x[g]>>>16,x[g]&=65535,g++}function O(x,g){this.g=x,this.h=g}function D(x,g){if(j(g))throw Error("division by zero");if(j(x))return new O(y,y);if(b(x))return g=D(C(x),g),new O(C(g.g),C(g.h));if(b(g))return g=D(x,C(g)),new O(C(g.g),g.h);if(x.g.length>30){if(b(x)||b(g))throw Error("slowDivide_ only works with positive integers.");for(var E=v,A=g;A.l(x)<=0;)E=L(E),A=L(A);var w=N(E,1),I=N(A,1);for(A=N(A,2),E=N(E,2);!j(A);){var _=I.add(A);_.l(x)<=0&&(w=w.add(E),I=_),A=N(A,1),E=N(E,1)}return g=G(x,w.j(g)),new O(w,g)}for(w=y;x.l(g)>=0;){for(E=Math.max(1,Math.floor(x.m()/g.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),I=f(E),_=I.j(g);b(_)||_.l(x)>0;)E-=A,I=f(E),_=I.j(g);j(I)&&(I=v),w=w.add(I),x=G(x,_)}return new O(w,x)}n.B=function(x){return D(this,x).h},n.and=function(x){const g=Math.max(this.g.length,x.g.length),E=[];for(let A=0;A<g;A++)E[A]=this.i(A)&x.i(A);return new a(E,this.h&x.h)},n.or=function(x){const g=Math.max(this.g.length,x.g.length),E=[];for(let A=0;A<g;A++)E[A]=this.i(A)|x.i(A);return new a(E,this.h|x.h)},n.xor=function(x){const g=Math.max(this.g.length,x.g.length),E=[];for(let A=0;A<g;A++)E[A]=this.i(A)^x.i(A);return new a(E,this.h^x.h)};function L(x){const g=x.g.length+1,E=[];for(let A=0;A<g;A++)E[A]=x.i(A)<<1|x.i(A-1)>>>31;return new a(E,x.h)}function N(x,g){const E=g>>5;g%=32;const A=x.g.length-E,w=[];for(let I=0;I<A;I++)w[I]=g>0?x.i(I+E)>>>g|x.i(I+E+1)<<32-g:x.i(I+E);return new a(w,x.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Zl=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,dt=a}).apply(typeof ka<"u"?ka:typeof self<"u"?self:typeof window<"u"?window:{});var ps=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ec,Pn,tc,ws,pi,nc,sc,rc;(function(){var n,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof ps=="object"&&ps];for(var l=0;l<i.length;++l){var h=i[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=t(this);function r(i,l){if(l)e:{var h=s;i=i.split(".");for(var m=0;m<i.length-1;m++){var T=i[m];if(!(T in h))break e;h=h[T]}i=i[i.length-1],m=h[i],l=l(m),l!=m&&l!=null&&e(h,i,{configurable:!0,writable:!0,value:l})}}r("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(i){return i||function(l){var h=[],m;for(m in l)Object.prototype.hasOwnProperty.call(l,m)&&h.push([m,l[m]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function d(i,l,h){return i.call.apply(i.bind,arguments)}function f(i,l,h){return f=d,f.apply(null,arguments)}function p(i,l){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),i.apply(this,m)}}function y(i,l){function h(){}h.prototype=l.prototype,i.Z=l.prototype,i.prototype=new h,i.prototype.constructor=i,i.Ob=function(m,T,S){for(var F=Array(arguments.length-2),X=2;X<arguments.length;X++)F[X-2]=arguments[X];return l.prototype[T].apply(m,F)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function R(i){const l=i.length;if(l>0){const h=Array(l);for(let m=0;m<l;m++)h[m]=i[m];return h}return[]}function j(i,l){for(let m=1;m<arguments.length;m++){const T=arguments[m];var h=typeof T;if(h=h!="object"?h:T?Array.isArray(T)?"array":h:"null",h=="array"||h=="object"&&typeof T.length=="number"){h=i.length||0;const S=T.length||0;i.length=h+S;for(let F=0;F<S;F++)i[h+F]=T[F]}else i.push(T)}}class b{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function C(i){a.setTimeout(()=>{throw i},0)}function G(){var i=x;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class k{constructor(){this.h=this.g=null}add(l,h){const m=O.get();m.set(l,h),this.h?this.h.next=m:this.g=m,this.h=m}}var O=new b(()=>new D,i=>i.reset());class D{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let L,N=!1,x=new k,g=()=>{const i=Promise.resolve(void 0);L=()=>{i.then(E)}};function E(){for(var i;i=G();){try{i.h.call(i.g)}catch(h){C(h)}var l=O;l.j(i),l.h<100&&(l.h++,i.next=l.g,l.g=i)}N=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return i})();function _(i){return/^[\s\xa0]*$/.test(i)}function Ae(i,l){w.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,l)}y(Ae,w),Ae.prototype.init=function(i,l){const h=this.type=i.type,m=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget,l||(h=="mouseover"?l=i.fromElement:h=="mouseout"&&(l=i.toElement)),this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&Ae.Z.h.call(this)},Ae.prototype.h=function(){Ae.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Xe="closure_listenable_"+(Math.random()*1e6|0),hr=0;function z(i,l,h,m,T){this.listener=i,this.proxy=null,this.src=l,this.type=h,this.capture=!!m,this.ha=T,this.key=++hr,this.da=this.fa=!1}function K(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Q(i,l,h){for(const m in i)l.call(h,i[m],m,i)}function he(i,l){for(const h in i)l.call(void 0,i[h],h,i)}function ne(i){const l={};for(const h in i)l[h]=i[h];return l}const tt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _o(i,l){let h,m;for(let T=1;T<arguments.length;T++){m=arguments[T];for(h in m)i[h]=m[h];for(let S=0;S<tt.length;S++)h=tt[S],Object.prototype.hasOwnProperty.call(m,h)&&(i[h]=m[h])}}function ts(i){this.src=i,this.g={},this.h=0}ts.prototype.add=function(i,l,h,m,T){const S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);const F=fr(i,l,m,T);return F>-1?(l=i[F],h||(l.fa=!1)):(l=new z(l,this.src,S,!!m,T),l.fa=h,i.push(l)),l};function dr(i,l){const h=l.type;if(h in i.g){var m=i.g[h],T=Array.prototype.indexOf.call(m,l,void 0),S;(S=T>=0)&&Array.prototype.splice.call(m,T,1),S&&(K(l),i.g[h].length==0&&(delete i.g[h],i.h--))}}function fr(i,l,h,m){for(let T=0;T<i.length;++T){const S=i[T];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==m)return T}return-1}var mr="closure_lm_"+(Math.random()*1e6|0),pr={};function xo(i,l,h,m,T){if(Array.isArray(l)){for(let S=0;S<l.length;S++)xo(i,l[S],h,m,T);return null}return h=wo(h),i&&i[Xe]?i.J(l,h,u(m)?!!m.capture:!1,T):Mu(i,l,h,!1,m,T)}function Mu(i,l,h,m,T,S){if(!l)throw Error("Invalid event type");const F=u(T)?!!T.capture:!!T;let X=yr(i);if(X||(i[mr]=X=new ts(i)),h=X.add(l,h,m,F,S),h.proxy)return h;if(m=Lu(),h.proxy=m,m.src=i,m.listener=h,i.addEventListener)I||(T=F),T===void 0&&(T=!1),i.addEventListener(l.toString(),m,T);else if(i.attachEvent)i.attachEvent(vo(l.toString()),m);else if(i.addListener&&i.removeListener)i.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Lu(){function i(h){return l.call(i.src,i.listener,h)}const l=Ou;return i}function Eo(i,l,h,m,T){if(Array.isArray(l))for(var S=0;S<l.length;S++)Eo(i,l[S],h,m,T);else m=u(m)?!!m.capture:!!m,h=wo(h),i&&i[Xe]?(i=i.i,S=String(l).toString(),S in i.g&&(l=i.g[S],h=fr(l,h,m,T),h>-1&&(K(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete i.g[S],i.h--)))):i&&(i=yr(i))&&(l=i.g[l.toString()],i=-1,l&&(i=fr(l,h,m,T)),(h=i>-1?l[i]:null)&&gr(h))}function gr(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Xe])dr(l.i,i);else{var h=i.type,m=i.proxy;l.removeEventListener?l.removeEventListener(h,m,i.capture):l.detachEvent?l.detachEvent(vo(h),m):l.addListener&&l.removeListener&&l.removeListener(m),(h=yr(l))?(dr(h,i),h.h==0&&(h.src=null,l[mr]=null)):K(i)}}}function vo(i){return i in pr?pr[i]:pr[i]="on"+i}function Ou(i,l){if(i.da)i=!0;else{l=new Ae(l,this);const h=i.listener,m=i.ha||i.src;i.fa&&gr(i),i=h.call(m,l)}return i}function yr(i){return i=i[mr],i instanceof ts?i:null}var _r="__closure_events_fn_"+(Math.random()*1e9>>>0);function wo(i){return typeof i=="function"?i:(i[_r]||(i[_r]=function(l){return i.handleEvent(l)}),i[_r])}function Te(){A.call(this),this.i=new ts(this),this.M=this,this.G=null}y(Te,A),Te.prototype[Xe]=!0,Te.prototype.removeEventListener=function(i,l,h,m){Eo(this,i,l,h,m)};function Re(i,l){var h,m=i.G;if(m)for(h=[];m;m=m.G)h.push(m);if(i=i.M,m=l.type||l,typeof l=="string")l=new w(l,i);else if(l instanceof w)l.target=l.target||i;else{var T=l;l=new w(m,i),_o(l,T)}T=!0;let S,F;if(h)for(F=h.length-1;F>=0;F--)S=l.g=h[F],T=ns(S,m,!0,l)&&T;if(S=l.g=i,T=ns(S,m,!0,l)&&T,T=ns(S,m,!1,l)&&T,h)for(F=0;F<h.length;F++)S=l.g=h[F],T=ns(S,m,!1,l)&&T}Te.prototype.N=function(){if(Te.Z.N.call(this),this.i){var i=this.i;for(const l in i.g){const h=i.g[l];for(let m=0;m<h.length;m++)K(h[m]);delete i.g[l],i.h--}}this.G=null},Te.prototype.J=function(i,l,h,m){return this.i.add(String(i),l,!1,h,m)},Te.prototype.K=function(i,l,h,m){return this.i.add(String(i),l,!0,h,m)};function ns(i,l,h,m){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();let T=!0;for(let S=0;S<l.length;++S){const F=l[S];if(F&&!F.da&&F.capture==h){const X=F.listener,me=F.ha||F.src;F.fa&&dr(i.i,F),T=X.call(me,m)!==!1&&T}}return T&&!m.defaultPrevented}function Bu(i,l){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=f(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(i,l||0)}function Ao(i){i.g=Bu(()=>{i.g=null,i.i&&(i.i=!1,Ao(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Uu extends A{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ao(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cn(i){A.call(this),this.h=i,this.g={}}y(cn,A);var To=[];function bo(i){Q(i.g,function(l,h){this.g.hasOwnProperty(h)&&gr(l)},i),i.g={}}cn.prototype.N=function(){cn.Z.N.call(this),bo(this)},cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xr=a.JSON.stringify,qu=a.JSON.parse,zu=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function Io(){}function So(){}var un={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Er(){w.call(this,"d")}y(Er,w);function vr(){w.call(this,"c")}y(vr,w);var bt={},Ro=null;function ss(){return Ro=Ro||new Te}bt.Ia="serverreachability";function Co(i){w.call(this,bt.Ia,i)}y(Co,w);function hn(i){const l=ss();Re(l,new Co(l))}bt.STAT_EVENT="statevent";function No(i,l){w.call(this,bt.STAT_EVENT,i),this.stat=l}y(No,w);function Ce(i){const l=ss();Re(l,new No(l,i))}bt.Ja="timingevent";function Po(i,l){w.call(this,bt.Ja,i),this.size=l}y(Po,w);function dn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},l)}function fn(){this.g=!0}fn.prototype.ua=function(){this.g=!1};function $u(i,l,h,m,T,S){i.info(function(){if(i.g)if(S){var F="",X=S.split("&");for(let se=0;se<X.length;se++){var me=X[se].split("=");if(me.length>1){const _e=me[0];me=me[1];const Oe=_e.split("_");F=Oe.length>=2&&Oe[1]=="type"?F+(_e+"="+me+"&"):F+(_e+"=redacted&")}}}else F=null;else F=S;return"XMLHTTP REQ ("+m+") [attempt "+T+"]: "+l+`
`+h+`
`+F})}function Ku(i,l,h,m,T,S,F){i.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+T+"]: "+l+`
`+h+`
`+S+" "+F})}function zt(i,l,h,m){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Gu(i,h)+(m?" "+m:"")})}function Hu(i,l){i.info(function(){return"TIMEOUT: "+l})}fn.prototype.info=function(){};function Gu(i,l){if(!i.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(i=0;i<S.length;i++)if(Array.isArray(S[i])){var h=S[i];if(!(h.length<2)){var m=h[1];if(Array.isArray(m)&&!(m.length<1)){var T=m[0];if(T!="noop"&&T!="stop"&&T!="close")for(let F=1;F<m.length;F++)m[F]=""}}}}return xr(S)}catch{return l}}var rs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Do={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Vo;function wr(){}y(wr,Io),wr.prototype.g=function(){return new XMLHttpRequest},Vo=new wr;function mn(i){return encodeURIComponent(String(i))}function Wu(i){var l=1;i=i.split(":");const h=[];for(;l>0&&i.length;)h.push(i.shift()),l--;return i.length&&h.push(i.join(":")),h}function nt(i,l,h,m){this.j=i,this.i=l,this.l=h,this.S=m||1,this.V=new cn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ko}function ko(){this.i=null,this.g="",this.h=!1}var jo={},Ar={};function Tr(i,l,h){i.M=1,i.A=os(Le(l)),i.u=h,i.R=!0,Fo(i,null)}function Fo(i,l){i.F=Date.now(),is(i),i.B=Le(i.A);var h=i.B,m=i.S;Array.isArray(m)||(m=[String(m)]),Qo(h.i,"t",m),i.C=0,h=i.j.L,i.h=new ko,i.g=fa(i.j,h?l:null,!i.u),i.P>0&&(i.O=new Uu(f(i.Y,i,i.g),i.P)),l=i.V,h=i.g,m=i.ba;var T="readystatechange";Array.isArray(T)||(T&&(To[0]=T.toString()),T=To);for(let S=0;S<T.length;S++){const F=xo(h,T[S],m||l.handleEvent,!1,l.h||l);if(!F)break;l.g[F.key]=F}l=i.J?ne(i.J):{},i.u?(i.v||(i.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,l)):(i.v="GET",i.g.ea(i.B,i.v,null,l)),hn(),$u(i.i,i.v,i.B,i.l,i.S,i.u)}nt.prototype.ba=function(i){i=i.target;const l=this.O;l&&it(i)==3?l.j():this.Y(i)},nt.prototype.Y=function(i){try{if(i==this.g)e:{const X=it(this.g),me=this.g.ya(),se=this.g.ca();if(!(X<3)&&(X!=3||this.g&&(this.h.h||this.g.la()||na(this.g)))){this.K||X!=4||me==7||(me==8||se<=0?hn(3):hn(2)),br(this);var l=this.g.ca();this.X=l;var h=Qu(this);if(this.o=l==200,Ku(this.i,this.v,this.B,this.l,this.S,X,l),this.o){if(this.U&&!this.L){t:{if(this.g){var m,T=this.g;if((m=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(m)){var S=m;break t}}S=null}if(i=S)zt(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ir(this,i);else{this.o=!1,this.m=3,Ce(12),It(this),pn(this);break e}}if(this.R){i=!0;let _e;for(;!this.K&&this.C<h.length;)if(_e=Xu(this,h),_e==Ar){X==4&&(this.m=4,Ce(14),i=!1),zt(this.i,this.l,null,"[Incomplete Response]");break}else if(_e==jo){this.m=4,Ce(15),zt(this.i,this.l,h,"[Invalid Chunk]"),i=!1;break}else zt(this.i,this.l,_e,null),Ir(this,_e);if(Mo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),X!=4||h.length!=0||this.h.h||(this.m=1,Ce(16),i=!1),this.o=this.o&&i,!i)zt(this.i,this.l,h,"[Invalid Chunked Response]"),It(this),pn(this);else if(h.length>0&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.aa&&!F.P&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),kr(F),F.P=!0,Ce(11))}}else zt(this.i,this.l,h,null),Ir(this,h);X==4&&It(this),this.o&&!this.K&&(X==4?ca(this.j,this):(this.o=!1,is(this)))}else uh(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,Ce(12)):(this.m=0,Ce(13)),It(this),pn(this)}}}catch{}finally{}};function Qu(i){if(!Mo(i))return i.g.la();const l=na(i.g);if(l==="")return"";let h="";const m=l.length,T=it(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return It(i),pn(i),"";i.h.i=new a.TextDecoder}for(let S=0;S<m;S++)i.h.h=!0,h+=i.h.i.decode(l[S],{stream:!(T&&S==m-1)});return l.length=0,i.h.g+=h,i.C=0,i.h.g}function Mo(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function Xu(i,l){var h=i.C,m=l.indexOf(`
`,h);return m==-1?Ar:(h=Number(l.substring(h,m)),isNaN(h)?jo:(m+=1,m+h>l.length?Ar:(l=l.slice(m,m+h),i.C=m+h,l)))}nt.prototype.cancel=function(){this.K=!0,It(this)};function is(i){i.T=Date.now()+i.H,Lo(i,i.H)}function Lo(i,l){if(i.D!=null)throw Error("WatchDog timer not null");i.D=dn(f(i.aa,i),l)}function br(i){i.D&&(a.clearTimeout(i.D),i.D=null)}nt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Hu(this.i,this.B),this.M!=2&&(hn(),Ce(17)),It(this),this.m=2,pn(this)):Lo(this,this.T-i)};function pn(i){i.j.I==0||i.K||ca(i.j,i)}function It(i){br(i);var l=i.O;l&&typeof l.dispose=="function"&&l.dispose(),i.O=null,bo(i.V),i.g&&(l=i.g,i.g=null,l.abort(),l.dispose())}function Ir(i,l){try{var h=i.j;if(h.I!=0&&(h.g==i||Sr(h.h,i))){if(!i.L&&Sr(h.h,i)&&h.I==3){try{var m=h.Ba.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var T=m;if(T[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<i.F)hs(h),cs(h);else break e;Vr(h),Ce(18)}}else h.xa=T[1],0<h.xa-h.K&&T[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=dn(f(h.Va,h),6e3));Uo(h.h)<=1&&h.ta&&(h.ta=void 0)}else Rt(h,11)}else if((i.L||h.g==i)&&hs(h),!_(l))for(T=h.Ba.g.parse(l),l=0;l<T.length;l++){let se=T[l];const _e=se[0];if(!(_e<=h.K))if(h.K=_e,se=se[1],h.I==2)if(se[0]=="c"){h.M=se[1],h.ba=se[2];const Oe=se[3];Oe!=null&&(h.ka=Oe,h.j.info("VER="+h.ka));const Ct=se[4];Ct!=null&&(h.za=Ct,h.j.info("SVER="+h.za));const ot=se[5];ot!=null&&typeof ot=="number"&&ot>0&&(m=1.5*ot,h.O=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const at=i.g;if(at){const fs=at.g?at.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fs){var S=m.h;S.g||fs.indexOf("spdy")==-1&&fs.indexOf("quic")==-1&&fs.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Rr(S,S.h),S.h=null))}if(m.G){const jr=at.g?at.g.getResponseHeader("X-HTTP-Session-Id"):null;jr&&(m.wa=jr,ie(m.J,m.G,jr))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-i.F,h.j.info("Handshake RTT: "+h.T+"ms")),m=h;var F=i;if(m.na=da(m,m.L?m.ba:null,m.W),F.L){qo(m.h,F);var X=F,me=m.O;me&&(X.H=me),X.D&&(br(X),is(X)),m.g=F}else aa(m);h.i.length>0&&us(h)}else se[0]!="stop"&&se[0]!="close"||Rt(h,7);else h.I==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Rt(h,7):Dr(h):se[0]!="noop"&&h.l&&h.l.qa(se),h.A=0)}}hn(4)}catch{}}var Yu=class{constructor(i,l){this.g=i,this.map=l}};function Oo(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Bo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Uo(i){return i.h?1:i.g?i.g.size:0}function Sr(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function Rr(i,l){i.g?i.g.add(l):i.h=l}function qo(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Oo.prototype.cancel=function(){if(this.i=zo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function zo(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const h of i.g.values())l=l.concat(h.G);return l}return R(i.i)}var $o=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ju(i,l){if(i){i=i.split("&");for(let h=0;h<i.length;h++){const m=i[h].indexOf("=");let T,S=null;m>=0?(T=i[h].substring(0,m),S=i[h].substring(m+1)):T=i[h],l(T,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function st(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;i instanceof st?(this.l=i.l,gn(this,i.j),this.o=i.o,this.g=i.g,yn(this,i.u),this.h=i.h,Cr(this,Xo(i.i)),this.m=i.m):i&&(l=String(i).match($o))?(this.l=!1,gn(this,l[1]||"",!0),this.o=_n(l[2]||""),this.g=_n(l[3]||"",!0),yn(this,l[4]),this.h=_n(l[5]||"",!0),Cr(this,l[6]||"",!0),this.m=_n(l[7]||"")):(this.l=!1,this.i=new En(null,this.l))}st.prototype.toString=function(){const i=[];var l=this.j;l&&i.push(xn(l,Ko,!0),":");var h=this.g;return(h||l=="file")&&(i.push("//"),(l=this.o)&&i.push(xn(l,Ko,!0),"@"),i.push(mn(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&i.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(xn(h,h.charAt(0)=="/"?th:eh,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",xn(h,sh)),i.join("")},st.prototype.resolve=function(i){const l=Le(this);let h=!!i.j;h?gn(l,i.j):h=!!i.o,h?l.o=i.o:h=!!i.g,h?l.g=i.g:h=i.u!=null;var m=i.h;if(h)yn(l,i.u);else if(h=!!i.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var T=l.h.lastIndexOf("/");T!=-1&&(m=l.h.slice(0,T+1)+m)}if(T=m,T==".."||T==".")m="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){m=T.lastIndexOf("/",0)==0,T=T.split("/");const S=[];for(let F=0;F<T.length;){const X=T[F++];X=="."?m&&F==T.length&&S.push(""):X==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),m&&F==T.length&&S.push("")):(S.push(X),m=!0)}m=S.join("/")}else m=T}return h?l.h=m:h=i.i.toString()!=="",h?Cr(l,Xo(i.i)):h=!!i.m,h&&(l.m=i.m),l};function Le(i){return new st(i)}function gn(i,l,h){i.j=h?_n(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function yn(i,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);i.u=l}else i.u=null}function Cr(i,l,h){l instanceof En?(i.i=l,rh(i.i,i.l)):(h||(l=xn(l,nh)),i.i=new En(l,i.l))}function ie(i,l,h){i.i.set(l,h)}function os(i){return ie(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function _n(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function xn(i,l,h){return typeof i=="string"?(i=encodeURI(i).replace(l,Zu),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Zu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Ko=/[#\/\?@]/g,eh=/[#\?:]/g,th=/[#\?]/g,nh=/[#\?@]/g,sh=/#/g;function En(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function St(i){i.g||(i.g=new Map,i.h=0,i.i&&Ju(i.i,function(l,h){i.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=En.prototype,n.add=function(i,l){St(this),this.i=null,i=$t(this,i);let h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(l),this.h+=1,this};function Ho(i,l){St(i),l=$t(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Go(i,l){return St(i),l=$t(i,l),i.g.has(l)}n.forEach=function(i,l){St(this),this.g.forEach(function(h,m){h.forEach(function(T){i.call(l,T,m,this)},this)},this)};function Wo(i,l){St(i);let h=[];if(typeof l=="string")Go(i,l)&&(h=h.concat(i.g.get($t(i,l))));else for(i=Array.from(i.g.values()),l=0;l<i.length;l++)h=h.concat(i[l]);return h}n.set=function(i,l){return St(this),this.i=null,i=$t(this,i),Go(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=Wo(this,i),i.length>0?String(i[0]):l):l};function Qo(i,l,h){Ho(i,l),h.length>0&&(i.i=null,i.g.set($t(i,l),R(h)),i.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(let m=0;m<l.length;m++){var h=l[m];const T=mn(h);h=Wo(this,h);for(let S=0;S<h.length;S++){let F=T;h[S]!==""&&(F+="="+mn(h[S])),i.push(F)}}return this.i=i.join("&")};function Xo(i){const l=new En;return l.i=i.i,i.g&&(l.g=new Map(i.g),l.h=i.h),l}function $t(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function rh(i,l){l&&!i.j&&(St(i),i.i=null,i.g.forEach(function(h,m){const T=m.toLowerCase();m!=T&&(Ho(this,m),Qo(this,T,h))},i)),i.j=l}function ih(i,l){const h=new fn;if(a.Image){const m=new Image;m.onload=p(rt,h,"TestLoadImage: loaded",!0,l,m),m.onerror=p(rt,h,"TestLoadImage: error",!1,l,m),m.onabort=p(rt,h,"TestLoadImage: abort",!1,l,m),m.ontimeout=p(rt,h,"TestLoadImage: timeout",!1,l,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=i}else l(!1)}function oh(i,l){const h=new fn,m=new AbortController,T=setTimeout(()=>{m.abort(),rt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:m.signal}).then(S=>{clearTimeout(T),S.ok?rt(h,"TestPingServer: ok",!0,l):rt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(T),rt(h,"TestPingServer: error",!1,l)})}function rt(i,l,h,m,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),m(h)}catch{}}function ah(){this.g=new zu}function Nr(i){this.i=i.Sb||null,this.h=i.ab||!1}y(Nr,Io),Nr.prototype.g=function(){return new as(this.i,this.h)};function as(i,l){Te.call(this),this.H=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(as,Te),n=as.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=l,this.readyState=1,wn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(l.body=i),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,vn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Yo(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function Yo(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?vn(this):wn(this),this.readyState==3&&Yo(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,vn(this))},n.Na=function(i){this.g&&(this.response=i,vn(this))},n.ga=function(){this.g&&vn(this)};function vn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,wn(i)}n.setRequestHeader=function(i,l){this.A.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=l.next();return i.join(`\r
`)};function wn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(as.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Jo(i){let l="";return Q(i,function(h,m){l+=m,l+=":",l+=h,l+=`\r
`}),l}function Pr(i,l,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=Jo(h),typeof i=="string"?h!=null&&mn(h):ie(i,l,h))}function ce(i){Te.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(ce,Te);var lh=/^https?$/i,ch=["POST","PUT"];n=ce.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,l,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Vo.g(),this.g.onreadystatechange=v(f(this.Ca,this));try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(S){Zo(this,S);return}if(i=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var T in m)h.set(T,m[T]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const S of m.keys())h.set(S,m.get(S));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),T=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(ch,l,void 0)>=0)||m||T||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,F]of h)this.g.setRequestHeader(S,F);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(S){Zo(this,S)}};function Zo(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.o=5,ea(i),ls(i)}function ea(i){i.A||(i.A=!0,Re(i,"complete"),Re(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Re(this,"complete"),Re(this,"abort"),ls(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ls(this,!0)),ce.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ta(this):this.Xa())},n.Xa=function(){ta(this)};function ta(i){if(i.h&&typeof o<"u"){if(i.v&&it(i)==4)setTimeout(i.Ca.bind(i),0);else if(Re(i,"readystatechange"),it(i)==4){i.h=!1;try{const S=i.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var m;if(m=S===0){let F=String(i.D).match($o)[1]||null;!F&&a.self&&a.self.location&&(F=a.self.location.protocol.slice(0,-1)),m=!lh.test(F?F.toLowerCase():"")}h=m}if(h)Re(i,"complete"),Re(i,"success");else{i.o=6;try{var T=it(i)>2?i.g.statusText:""}catch{T=""}i.l=T+" ["+i.ca()+"]",ea(i)}}finally{ls(i)}}}}function ls(i,l){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const h=i.g;i.g=null,l||Re(i,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function it(i){return i.g?i.g.readyState:0}n.ca=function(){try{return it(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),qu(l)}};function na(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function uh(i){const l={};i=(i.g&&it(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<i.length;m++){if(_(i[m]))continue;var h=Wu(i[m]);const T=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[T]||[];l[T]=S,S.push(h)}he(l,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function An(i,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||l}function sa(i){this.za=0,this.i=[],this.j=new fn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=An("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=An("baseRetryDelayMs",5e3,i),this.Za=An("retryDelaySeedMs",1e4,i),this.Ta=An("forwardChannelMaxRetries",2,i),this.va=An("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Oo(i&&i.concurrentRequestLimit),this.Ba=new ah,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=sa.prototype,n.ka=8,n.I=1,n.connect=function(i,l,h,m){Ce(0),this.W=i,this.H=l||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.J=da(this,null,this.W),us(this)};function Dr(i){if(ra(i),i.I==3){var l=i.V++,h=Le(i.J);if(ie(h,"SID",i.M),ie(h,"RID",l),ie(h,"TYPE","terminate"),Tn(i,h),l=new nt(i,i.j,l),l.M=2,l.A=os(Le(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=fa(l.j,null),l.g.ea(l.A)),l.F=Date.now(),is(l)}ha(i)}function cs(i){i.g&&(kr(i),i.g.cancel(),i.g=null)}function ra(i){cs(i),i.v&&(a.clearTimeout(i.v),i.v=null),hs(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function us(i){if(!Bo(i.h)&&!i.m){i.m=!0;var l=i.Ea;L||g(),N||(L(),N=!0),x.add(l,i),i.D=0}}function hh(i,l){return Uo(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=l.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=dn(f(i.Ea,i,l),ua(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const T=new nt(this,this.j,i);let S=this.o;if(this.U&&(S?(S=ne(S),_o(S,this.U)):S=this.U),this.u!==null||this.R||(T.J=S,S=null),this.S)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,l>4096){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=oa(this,T,l),h=Le(this.J),ie(h,"RID",i),ie(h,"CVER",22),this.G&&ie(h,"X-HTTP-Session-Id",this.G),Tn(this,h),S&&(this.R?l="headers="+mn(Jo(S))+"&"+l:this.u&&Pr(h,this.u,S)),Rr(this.h,T),this.Ra&&ie(h,"TYPE","init"),this.S?(ie(h,"$req",l),ie(h,"SID","null"),T.U=!0,Tr(T,h,null)):Tr(T,h,l),this.I=2}}else this.I==3&&(i?ia(this,i):this.i.length==0||Bo(this.h)||ia(this))};function ia(i,l){var h;l?h=l.l:h=i.V++;const m=Le(i.J);ie(m,"SID",i.M),ie(m,"RID",h),ie(m,"AID",i.K),Tn(i,m),i.u&&i.o&&Pr(m,i.u,i.o),h=new nt(i,i.j,h,i.D+1),i.u===null&&(h.J=i.o),l&&(i.i=l.G.concat(i.i)),l=oa(i,h,1e3),h.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Rr(i.h,h),Tr(h,m,l)}function Tn(i,l){i.H&&Q(i.H,function(h,m){ie(l,m,h)}),i.l&&Q({},function(h,m){ie(l,m,h)})}function oa(i,l,h){h=Math.min(i.i.length,h);const m=i.l?f(i.l.Ka,i.l,i):null;e:{var T=i.i;let X=-1;for(;;){const me=["count="+h];X==-1?h>0?(X=T[0].g,me.push("ofs="+X)):X=0:me.push("ofs="+X);let se=!0;for(let _e=0;_e<h;_e++){var S=T[_e].g;const Oe=T[_e].map;if(S-=X,S<0)X=Math.max(0,T[_e].g-100),se=!1;else try{S="req"+S+"_"||"";try{var F=Oe instanceof Map?Oe:Object.entries(Oe);for(const[Ct,ot]of F){let at=ot;u(ot)&&(at=xr(ot)),me.push(S+Ct+"="+encodeURIComponent(at))}}catch(Ct){throw me.push(S+"type="+encodeURIComponent("_badmap")),Ct}}catch{m&&m(Oe)}}if(se){F=me.join("&");break e}}F=void 0}return i=i.i.splice(0,h),l.G=i,F}function aa(i){if(!i.g&&!i.v){i.Y=1;var l=i.Da;L||g(),N||(L(),N=!0),x.add(l,i),i.A=0}}function Vr(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=dn(f(i.Da,i),ua(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,la(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=dn(f(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ce(10),cs(this),la(this))};function kr(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function la(i){i.g=new nt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var l=Le(i.na);ie(l,"RID","rpc"),ie(l,"SID",i.M),ie(l,"AID",i.K),ie(l,"CI",i.F?"0":"1"),!i.F&&i.ia&&ie(l,"TO",i.ia),ie(l,"TYPE","xmlhttp"),Tn(i,l),i.u&&i.o&&Pr(l,i.u,i.o),i.O&&(i.g.H=i.O);var h=i.g;i=i.ba,h.M=1,h.A=os(Le(l)),h.u=null,h.R=!0,Fo(h,i)}n.Va=function(){this.C!=null&&(this.C=null,cs(this),Vr(this),Ce(19))};function hs(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function ca(i,l){var h=null;if(i.g==l){hs(i),kr(i),i.g=null;var m=2}else if(Sr(i.h,l))h=l.G,qo(i.h,l),m=1;else return;if(i.I!=0){if(l.o)if(m==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var T=i.D;m=ss(),Re(m,new Po(m,h)),us(i)}else aa(i);else if(T=l.m,T==3||T==0&&l.X>0||!(m==1&&hh(i,l)||m==2&&Vr(i)))switch(h&&h.length>0&&(l=i.h,l.i=l.i.concat(h)),T){case 1:Rt(i,5);break;case 4:Rt(i,10);break;case 3:Rt(i,6);break;default:Rt(i,2)}}}function ua(i,l){let h=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(h*=2),h*l}function Rt(i,l){if(i.j.info("Error code "+l),l==2){var h=f(i.bb,i),m=i.Ua;const T=!m;m=new st(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||gn(m,"https"),os(m),T?ih(m.toString(),h):oh(m.toString(),h)}else Ce(2);i.I=0,i.l&&i.l.pa(l),ha(i),ra(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))};function ha(i){if(i.I=0,i.ja=[],i.l){const l=zo(i.h);(l.length!=0||i.i.length!=0)&&(j(i.ja,l),j(i.ja,i.i),i.h.i.length=0,R(i.i),i.i.length=0),i.l.oa()}}function da(i,l,h){var m=h instanceof st?Le(h):new st(h);if(m.g!="")l&&(m.g=l+"."+m.g),yn(m,m.u);else{var T=a.location;m=T.protocol,l=l?l+"."+T.hostname:T.hostname,T=+T.port;const S=new st(null);m&&gn(S,m),l&&(S.g=l),T&&yn(S,T),h&&(S.h=h),m=S}return h=i.G,l=i.wa,h&&l&&ie(m,h,l),ie(m,"VER",i.ka),Tn(i,m),m}function fa(i,l,h){if(l&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Aa&&!i.ma?new ce(new Nr({ab:h})):new ce(i.ma),l.Fa(i.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ma(){}n=ma.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ds(){}ds.prototype.g=function(i,l){return new De(i,l)};function De(i,l){Te.call(this),this.g=new sa(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(i?i["X-WebChannel-Client-Profile"]=l.sa:i={"X-WebChannel-Client-Profile":l.sa}),this.g.U=i,(i=l&&l.Qb)&&!_(i)&&(this.g.u=i),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!_(l)&&(this.g.G=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Kt(this)}y(De,Te),De.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},De.prototype.close=function(){Dr(this.g)},De.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.v&&(h={},h.__data__=xr(i),i=h);l.i.push(new Yu(l.Ya++,i)),l.I==3&&us(l)},De.prototype.N=function(){this.g.l=null,delete this.j,Dr(this.g),delete this.g,De.Z.N.call(this)};function pa(i){Er.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const h in l){i=h;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}y(pa,Er);function ga(){vr.call(this),this.status=1}y(ga,vr);function Kt(i){this.g=i}y(Kt,ma),Kt.prototype.ra=function(){Re(this.g,"a")},Kt.prototype.qa=function(i){Re(this.g,new pa(i))},Kt.prototype.pa=function(i){Re(this.g,new ga)},Kt.prototype.oa=function(){Re(this.g,"b")},ds.prototype.createWebChannel=ds.prototype.g,De.prototype.send=De.prototype.o,De.prototype.open=De.prototype.m,De.prototype.close=De.prototype.close,rc=function(){return new ds},sc=function(){return ss()},nc=bt,pi={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},rs.NO_ERROR=0,rs.TIMEOUT=8,rs.HTTP_ERROR=6,ws=rs,Do.COMPLETE="complete",tc=Do,So.EventType=un,un.OPEN="a",un.CLOSE="b",un.ERROR="c",un.MESSAGE="d",Te.prototype.listen=Te.prototype.J,Pn=So,ce.prototype.listenOnce=ce.prototype.K,ce.prototype.getLastError=ce.prototype.Ha,ce.prototype.getLastErrorCode=ce.prototype.ya,ce.prototype.getStatus=ce.prototype.ca,ce.prototype.getResponseJson=ce.prototype.La,ce.prototype.getResponseText=ce.prototype.la,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Fa,ec=ce}).apply(typeof ps<"u"?ps:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rn="12.13.0";function hf(n){rn=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new Gl("@firebase/firestore");function Ht(){return Lt.logLevel}function M(n,...e){if(Lt.logLevel<=ee.DEBUG){const t=e.map(Mi);Lt.debug(`Firestore (${rn}): ${n}`,...t)}}function Ze(n,...e){if(Lt.logLevel<=ee.ERROR){const t=e.map(Mi);Lt.error(`Firestore (${rn}): ${n}`,...t)}}function Ot(n,...e){if(Lt.logLevel<=ee.WARN){const t=e.map(Mi);Lt.warn(`Firestore (${rn}): ${n}`,...t)}}function Mi(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,ic(n,s,t)}function ic(n,e,t){let s=`FIRESTORE (${rn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Ze(s),new Error(s)}function te(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||ic(e,r,s)}function W(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends sn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class df{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ie.UNAUTHENTICATED)))}shutdown(){}}class ff{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class mf{constructor(e){this.t=e,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){te(this.o===void 0,42304);let s=this.i;const r=d=>this.i!==s?(s=this.i,t(d)):Promise.resolve();let o=new ft;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ft,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const d=o;e.enqueueRetryable((async()=>{await d.promise,await r(this.currentUser)}))},u=d=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((d=>u(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?u(d):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ft)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(te(typeof s.accessToken=="string",31837,{l:s}),new oc(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string",2055,{h:e}),new Ie(e)}}class pf{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class gf{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new pf(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ie.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ja{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yf{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Kd(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){te(this.o===void 0,3512);const s=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>s(o)))};const r=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>r(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?r(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ja(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(te(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ja(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=_f(40);for(let o=0;o<r.length;++o)s.length<20&&r[o]<t&&(s+=e.charAt(r[o]%62))}return s}}function Y(n,e){return n<e?-1:n>e?1:0}function gi(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),o=e.charAt(s);if(r!==o)return Xr(r)===Xr(o)?Y(r,o):Xr(r)?1:-1}return Y(n.length,e.length)}const xf=55296,Ef=57343;function Xr(n){const e=n.charCodeAt(0);return e>=xf&&e<=Ef}function Zt(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="__name__";class Ue{constructor(e,t,s){t===void 0?t=0:t>e.length&&$(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&$(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ue.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ue?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const o=Ue.compareSegments(e.get(r),t.get(r));if(o!==0)return o}return Y(e.length,t.length)}static compareSegments(e,t){const s=Ue.isNumericId(e),r=Ue.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?Ue.extractNumericId(e).compare(Ue.extractNumericId(t)):gi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dt.fromString(e.substring(4,e.length-2))}}class oe extends Ue{construct(e,t,s){return new oe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new B(V.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new oe(t)}static emptyPath(){return new oe([])}}const vf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ve extends Ue{construct(e,t,s){return new ve(e,t,s)}static isValidIdentifier(e){return vf.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ve.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Fa}static keyField(){return new ve([Fa])}static fromServerFormat(e){const t=[];let s="",r=0;const o=()=>{if(s.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const u=e[r];if(u==="\\"){if(r+1===e.length)throw new B(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[r+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new B(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=d,r+=2}else u==="`"?(a=!a,r++):u!=="."||a?(s+=u,r++):(o(),r++)}if(o(),a)throw new B(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ve(t)}static emptyPath(){return new ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(oe.fromString(e))}static fromName(e){return new U(oe.fromString(e).popFirst(5))}static empty(){return new U(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new oe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(n,e,t){if(!t)throw new B(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function wf(n,e,t,s){if(e===!0&&s===!0)throw new B(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ma(n){if(!U.isDocumentKey(n))throw new B(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function La(n){if(U.isDocumentKey(n))throw new B(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function lc(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Oi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$(12329,{type:typeof n})}function qe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Oi(n);throw new B(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(n,e){const t={typeString:n};return e&&(t.value=e),t}function Wn(n,e){if(!lc(n))throw new B(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,o="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${s}' field to equal '${o.value}'`;break}}if(t)throw new B(V.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=-62135596800,Ba=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Ba);return new ae(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Oa)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ba}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Wn(e,ae._jsonSchema))return new ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Oa;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ae._jsonSchemaVersion="firestore/timestamp/1.0",ae._jsonSchema={type:fe("string",ae._jsonSchemaVersion),seconds:fe("number"),nanoseconds:fe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{static fromTimestamp(e){return new H(e)}static min(){return new H(new ae(0,0))}static max(){return new H(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=-1;function Af(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=H.fromTimestamp(s===1e9?new ae(t+1,0):new ae(t,s));return new pt(r,U.empty(),e)}function Tf(n){return new pt(n.readTime,n.key,Un)}class pt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new pt(H.min(),U.empty(),Un)}static max(){return new pt(H.max(),U.empty(),Un)}}function bf(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Sf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==If)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((s,r)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(s,r)},this.catchCallback=o=>{this.wrapFailure(t,o).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,s)=>{t(e)}))}static reject(e){return new P(((t,s)=>{s(e)}))}static waitFor(e){return new P(((t,s)=>{let r=0,o=0,a=!1;e.forEach((u=>{++r,u.next((()=>{++o,a&&o===r&&t()}),(d=>s(d)))})),a=!0,o===r&&t()}))}static or(e){let t=P.resolve(!1);for(const s of e)t=t.next((r=>r?P.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,o)=>{s.push(t.call(this,r,o))})),this.waitFor(s)}static mapArray(e,t){return new P(((s,r)=>{const o=e.length,a=new Array(o);let u=0;for(let d=0;d<o;d++){const f=d;t(e[f]).next((p=>{a[f]=p,++u,u===o&&s(a)}),(p=>r(p)))}}))}static doWhile(e,t){return new P(((s,r)=>{const o=()=>{e()===!0?t().next((()=>{o()}),r):s()};o()}))}}function Rf(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function an(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ws.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=-1;function Qs(n){return n==null}function Ds(n){return n===0&&1/n==-1/0}function Cf(n){return typeof n=="number"&&Number.isInteger(n)&&!Ds(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="";function Nf(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ua(e)),e=Pf(n.get(t),e);return Ua(e)}function Pf(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const o=n.charAt(r);switch(o){case"\0":t+="";break;case cc:t+="";break;default:t+=o}}return t}function Ua(n){return n+cc+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function wt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function uc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t){this.comparator=e,this.root=t||Ee.EMPTY}insert(e,t){return new le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gs(this.root,e,this.comparator,!1)}getReverseIterator(){return new gs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gs(this.root,e,this.comparator,!0)}}class gs{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?s(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,t,s,r,o){this.key=e,this.value=t,this.color=s??Ee.RED,this.left=r??Ee.EMPTY,this.right=o??Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,o){return new Ee(e??this.key,t??this.value,s??this.color,r??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const o=s(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,s),null):o===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Ee.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $(43730,{key:this.key,value:this.value});if(this.right.isRed())throw $(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw $(27949);return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw $(57766)}get value(){throw $(16141)}get color(){throw $(16727)}get left(){throw $(29726)}get right(){throw $(36894)}copy(e,t,s,r,o){return this}insert(e,t,s){return new Ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new za(this.data.getIterator())}getIteratorFrom(e){return new za(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=s.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ye(this.comparator);return t.data=e,t}}class za{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.fields=e,e.sort(ve.comparator)}static empty(){return new Ve([])}unionWith(e){let t=new ye(ve.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ve(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zt(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new hc("Invalid base64 string: "+o):o}})(e);return new we(t)}static fromUint8Array(e){const t=(function(r){let o="";for(let a=0;a<r.length;++a)o+=String.fromCharCode(r[a]);return o})(e);return new we(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const Df=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gt(n){if(te(!!n,39018),typeof n=="string"){let e=0;const t=Df.exec(n);if(te(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function yt(n){return typeof n=="string"?we.fromBase64String(n):we.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="server_timestamp",fc="__type__",mc="__previous_value__",pc="__local_write_time__";function Ui(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[fc])==null?void 0:s.stringValue)===dc}function Xs(n){const e=n.mapValue.fields[mc];return Ui(e)?Xs(e):e}function qn(n){const e=gt(n.mapValue.fields[pc].timestampValue);return new ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,t,s,r,o,a,u,d,f,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=d,this.useFetchStreams=f,this.isUsingEmulator=p,this.apiKey=y}}const Vs="(default)";class zn{constructor(e,t){this.projectId=e,this.database=t||Vs}static empty(){return new zn("","")}get isDefaultDatabase(){return this.database===Vs}isEqual(e){return e instanceof zn&&e.projectId===this.projectId&&e.database===this.database}}function kf(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new B(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zn(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="__type__",jf="__max__",ys={mapValue:{}},yc="__vector__",ks="value";function _t(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ui(n)?4:Mf(n)?9007199254740991:Ff(n)?10:11:$(28295,{value:n})}function Ge(n,e){if(n===e)return!0;const t=_t(n);if(t!==_t(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return qn(n).isEqual(qn(e));case 3:return(function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;const a=gt(r.timestampValue),u=gt(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,o){return yt(r.bytesValue).isEqual(yt(o.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,o){return ue(r.geoPointValue.latitude)===ue(o.geoPointValue.latitude)&&ue(r.geoPointValue.longitude)===ue(o.geoPointValue.longitude)})(n,e);case 2:return(function(r,o){if("integerValue"in r&&"integerValue"in o)return ue(r.integerValue)===ue(o.integerValue);if("doubleValue"in r&&"doubleValue"in o){const a=ue(r.doubleValue),u=ue(o.doubleValue);return a===u?Ds(a)===Ds(u):isNaN(a)&&isNaN(u)}return!1})(n,e);case 9:return Zt(n.arrayValue.values||[],e.arrayValue.values||[],Ge);case 10:case 11:return(function(r,o){const a=r.mapValue.fields||{},u=o.mapValue.fields||{};if(qa(a)!==qa(u))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(u[d]===void 0||!Ge(a[d],u[d])))return!1;return!0})(n,e);default:return $(52216,{left:n})}}function $n(n,e){return(n.values||[]).find((t=>Ge(t,e)))!==void 0}function en(n,e){if(n===e)return 0;const t=_t(n),s=_t(e);if(t!==s)return Y(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return(function(o,a){const u=ue(o.integerValue||o.doubleValue),d=ue(a.integerValue||a.doubleValue);return u<d?-1:u>d?1:u===d?0:isNaN(u)?isNaN(d)?0:-1:1})(n,e);case 3:return $a(n.timestampValue,e.timestampValue);case 4:return $a(qn(n),qn(e));case 5:return gi(n.stringValue,e.stringValue);case 6:return(function(o,a){const u=yt(o),d=yt(a);return u.compareTo(d)})(n.bytesValue,e.bytesValue);case 7:return(function(o,a){const u=o.split("/"),d=a.split("/");for(let f=0;f<u.length&&f<d.length;f++){const p=Y(u[f],d[f]);if(p!==0)return p}return Y(u.length,d.length)})(n.referenceValue,e.referenceValue);case 8:return(function(o,a){const u=Y(ue(o.latitude),ue(a.latitude));return u!==0?u:Y(ue(o.longitude),ue(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Ka(n.arrayValue,e.arrayValue);case 10:return(function(o,a){var v,R,j,b;const u=o.fields||{},d=a.fields||{},f=(v=u[ks])==null?void 0:v.arrayValue,p=(R=d[ks])==null?void 0:R.arrayValue,y=Y(((j=f==null?void 0:f.values)==null?void 0:j.length)||0,((b=p==null?void 0:p.values)==null?void 0:b.length)||0);return y!==0?y:Ka(f,p)})(n.mapValue,e.mapValue);case 11:return(function(o,a){if(o===ys.mapValue&&a===ys.mapValue)return 0;if(o===ys.mapValue)return 1;if(a===ys.mapValue)return-1;const u=o.fields||{},d=Object.keys(u),f=a.fields||{},p=Object.keys(f);d.sort(),p.sort();for(let y=0;y<d.length&&y<p.length;++y){const v=gi(d[y],p[y]);if(v!==0)return v;const R=en(u[d[y]],f[p[y]]);if(R!==0)return R}return Y(d.length,p.length)})(n.mapValue,e.mapValue);default:throw $(23264,{he:t})}}function $a(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=gt(n),s=gt(e),r=Y(t.seconds,s.seconds);return r!==0?r:Y(t.nanos,s.nanos)}function Ka(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const o=en(t[r],s[r]);if(o)return o}return Y(t.length,s.length)}function tn(n){return yi(n)}function yi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=gt(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return yt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return U.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const o of t.values||[])r?r=!1:s+=",",s+=yi(o);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${yi(t.fields[a])}`;return r+"}"})(n.mapValue):$(61005,{value:n})}function As(n){switch(_t(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xs(n);return e?16+As(e):16;case 5:return 2*n.stringValue.length;case 6:return yt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,o)=>r+As(o)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return wt(s.fields,((o,a)=>{r+=o.length+As(a)})),r})(n.mapValue);default:throw $(13486,{value:n})}}function _i(n){return!!n&&"integerValue"in n}function qi(n){return!!n&&"arrayValue"in n}function Ha(n){return!!n&&"nullValue"in n}function Ga(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ts(n){return!!n&&"mapValue"in n}function Ff(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[gc])==null?void 0:s.stringValue)===yc}function jn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return wt(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=jn(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=jn(n.arrayValue.values[t]);return e}return{...n}}function Mf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===jf}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.value=e}static empty(){return new Pe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ts(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=jn(t)}setAll(e){let t=ve.emptyPath(),s={},r=[];e.forEach(((a,u)=>{if(!t.isImmediateParentOf(u)){const d=this.getFieldsMap(t);this.applyChanges(d,s,r),s={},r=[],t=u.popLast()}a?s[u.lastSegment()]=jn(a):r.push(u.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,s,r)}delete(e){const t=this.field(e.popLast());Ts(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ge(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Ts(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){wt(t,((r,o)=>e[r]=o));for(const r of s)delete e[r]}clone(){return new Pe(jn(this.value))}}function _c(n){const e=[];return wt(n.fields,((t,s)=>{const r=new ve([t]);if(Ts(s)){const o=_c(s.mapValue).fields;if(o.length===0)e.push(r);else for(const a of o)e.push(r.child(a))}else e.push(r)})),new Ve(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t,s,r,o,a,u){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Se(e,0,H.min(),H.min(),H.min(),Pe.empty(),0)}static newFoundDocument(e,t,s,r){return new Se(e,1,t,H.min(),s,r,0)}static newNoDocument(e,t){return new Se(e,2,t,H.min(),H.min(),Pe.empty(),0)}static newUnknownDocument(e,t){return new Se(e,3,t,H.min(),H.min(),Pe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t){this.position=e,this.inclusive=t}}function Wa(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const o=e[r],a=n.position[r];if(o.field.isKeyField()?s=U.comparator(U.fromName(a.referenceValue),t.key):s=en(a,t.data.field(o.field)),o.dir==="desc"&&(s*=-1),s!==0)break}return s}function Qa(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ge(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Lf(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{}class pe extends xc{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Bf(e,t,s):t==="array-contains"?new zf(e,s):t==="in"?new $f(e,s):t==="not-in"?new Kf(e,s):t==="array-contains-any"?new Hf(e,s):new pe(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Uf(e,s):new qf(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(en(t,this.value)):t!==null&&_t(this.value)===_t(t)&&this.matchesComparison(en(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class We extends xc{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new We(e,t)}matches(e){return Ec(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ec(n){return n.op==="and"}function vc(n){return Of(n)&&Ec(n)}function Of(n){for(const e of n.filters)if(e instanceof We)return!1;return!0}function xi(n){if(n instanceof pe)return n.field.canonicalString()+n.op.toString()+tn(n.value);if(vc(n))return n.filters.map((e=>xi(e))).join(",");{const e=n.filters.map((t=>xi(t))).join(",");return`${n.op}(${e})`}}function wc(n,e){return n instanceof pe?(function(s,r){return r instanceof pe&&s.op===r.op&&s.field.isEqual(r.field)&&Ge(s.value,r.value)})(n,e):n instanceof We?(function(s,r){return r instanceof We&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((o,a,u)=>o&&wc(a,r.filters[u])),!0):!1})(n,e):void $(19439)}function Ac(n){return n instanceof pe?(function(t){return`${t.field.canonicalString()} ${t.op} ${tn(t.value)}`})(n):n instanceof We?(function(t){return t.op.toString()+" {"+t.getFilters().map(Ac).join(" ,")+"}"})(n):"Filter"}class Bf extends pe{constructor(e,t,s){super(e,t,s),this.key=U.fromName(s.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class Uf extends pe{constructor(e,t){super(e,"in",t),this.keys=Tc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class qf extends pe{constructor(e,t){super(e,"not-in",t),this.keys=Tc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Tc(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>U.fromName(s.referenceValue)))}class zf extends pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qi(t)&&$n(t.arrayValue,this.value)}}class $f extends pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$n(this.value.arrayValue,t)}}class Kf extends pe{constructor(e,t){super(e,"not-in",t)}matches(e){if($n(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$n(this.value.arrayValue,t)}}class Hf extends pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>$n(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t=null,s=[],r=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=o,this.startAt=a,this.endAt=u,this.Te=null}}function Xa(n,e=null,t=[],s=[],r=null,o=null,a=null){return new Gf(n,e,t,s,r,o,a)}function zi(n){const e=W(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>xi(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(o){return o.field.canonicalString()+o.dir})(s))).join(","),Qs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>tn(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>tn(s))).join(",")),e.Te=t}return e.Te}function $i(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Lf(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!wc(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Qa(n.startAt,e.startAt)&&Qa(n.endAt,e.endAt)}function Ei(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t=null,s=[],r=[],o=null,a="F",u=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=d,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Wf(n,e,t,s,r,o,a,u){return new Ys(n,e,t,s,r,o,a,u)}function Ki(n){return new Ys(n)}function Ya(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Qf(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Xf(n){return n.collectionGroup!==null}function Fn(n){const e=W(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ye(ve.comparator);return a.filters.forEach((d=>{d.getFlattenedFilters().forEach((f=>{f.isInequality()&&(u=u.add(f.field))}))})),u})(e).forEach((o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new Fs(o,s))})),t.has(ve.keyField().canonicalString())||e.Ie.push(new Fs(ve.keyField(),s))}return e.Ie}function ze(n){const e=W(n);return e.Ee||(e.Ee=Yf(e,Fn(n))),e.Ee}function Yf(n,e){if(n.limitType==="F")return Xa(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const o=r.dir==="desc"?"asc":"desc";return new Fs(r.field,o)}));const t=n.endAt?new js(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new js(n.startAt.position,n.startAt.inclusive):null;return Xa(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function vi(n,e,t){return new Ys(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Js(n,e){return $i(ze(n),ze(e))&&n.limitType===e.limitType}function bc(n){return`${zi(ze(n))}|lt:${n.limitType}`}function Gt(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>Ac(r))).join(", ")}]`),Qs(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>tn(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>tn(r))).join(",")),`Target(${s})`})(ze(n))}; limitType=${n.limitType})`}function Zs(n,e){return e.isFoundDocument()&&(function(s,r){const o=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(o):U.isDocumentKey(s.path)?s.path.isEqual(o):s.path.isImmediateParentOf(o)})(n,e)&&(function(s,r){for(const o of Fn(s))if(!o.field.isKeyField()&&r.data.field(o.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const o of s.filters)if(!o.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(a,u,d){const f=Wa(a,u,d);return a.inclusive?f<=0:f<0})(s.startAt,Fn(s),r)||s.endAt&&!(function(a,u,d){const f=Wa(a,u,d);return a.inclusive?f>=0:f>0})(s.endAt,Fn(s),r))})(n,e)}function Jf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ic(n){return(e,t)=>{let s=!1;for(const r of Fn(n)){const o=Zf(r,e,t);if(o!==0)return o;s=s||r.field.isKeyField()}return 0}}function Zf(n,e,t){const s=n.field.isKeyField()?U.comparator(e.key,t.key):(function(o,a,u){const d=a.data.field(o),f=u.data.field(o);return d!==null&&f!==null?en(d,f):$(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return $(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,o]of s)if(this.equalsFn(r,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){wt(this.inner,((t,s)=>{for(const[r,o]of s)e(r,o)}))}isEmpty(){return uc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=new le(U.comparator);function et(){return em}const Sc=new le(U.comparator);function Dn(...n){let e=Sc;for(const t of n)e=e.insert(t.key,t);return e}function Rc(n){let e=Sc;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function kt(){return Mn()}function Cc(){return Mn()}function Mn(){return new Ut((n=>n.toString()),((n,e)=>n.isEqual(e)))}const tm=new le(U.comparator),nm=new ye(U.comparator);function J(...n){let e=nm;for(const t of n)e=e.add(t);return e}const sm=new ye(Y);function rm(){return sm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ds(e)?"-0":e}}function Nc(n){return{integerValue:""+n}}function im(n,e){return Cf(e)?Nc(e):Hi(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this._=void 0}}function om(n,e,t){return n instanceof Ms?(function(r,o){const a={fields:{[fc]:{stringValue:dc},[pc]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return o&&Ui(o)&&(o=Xs(o)),o&&(a.fields[mc]=o),{mapValue:a}})(t,e):n instanceof Kn?Dc(n,e):n instanceof Hn?Vc(n,e):(function(r,o){const a=Pc(r,o),u=Ja(a)+Ja(r.Ae);return _i(a)&&_i(r.Ae)?Nc(u):Hi(r.serializer,u)})(n,e)}function am(n,e,t){return n instanceof Kn?Dc(n,e):n instanceof Hn?Vc(n,e):t}function Pc(n,e){return n instanceof Ls?(function(s){return _i(s)||(function(o){return!!o&&"doubleValue"in o})(s)})(e)?e:{integerValue:0}:null}class Ms extends er{}class Kn extends er{constructor(e){super(),this.elements=e}}function Dc(n,e){const t=kc(e);for(const s of n.elements)t.some((r=>Ge(r,s)))||t.push(s);return{arrayValue:{values:t}}}class Hn extends er{constructor(e){super(),this.elements=e}}function Vc(n,e){let t=kc(e);for(const s of n.elements)t=t.filter((r=>!Ge(r,s)));return{arrayValue:{values:t}}}class Ls extends er{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ja(n){return ue(n.integerValue||n.doubleValue)}function kc(n){return qi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function lm(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof Kn&&r instanceof Kn||s instanceof Hn&&r instanceof Hn?Zt(s.elements,r.elements,Ge):s instanceof Ls&&r instanceof Ls?Ge(s.Ae,r.Ae):s instanceof Ms&&r instanceof Ms})(n.transform,e.transform)}class cm{constructor(e,t){this.version=e,this.transformResults=t}}class ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ke}static exists(e){return new ke(void 0,e)}static updateTime(e){return new ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class tr{}function jc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new nr(n.key,ke.none()):new Qn(n.key,n.data,ke.none());{const t=n.data,s=Pe.empty();let r=new ye(ve.comparator);for(let o of e.fields)if(!r.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?s.delete(o):s.set(o,a),r=r.add(o)}return new At(n.key,s,new Ve(r.toArray()),ke.none())}}function um(n,e,t){n instanceof Qn?(function(r,o,a){const u=r.value.clone(),d=el(r.fieldTransforms,o,a.transformResults);u.setAll(d),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):n instanceof At?(function(r,o,a){if(!bs(r.precondition,o))return void o.convertToUnknownDocument(a.version);const u=el(r.fieldTransforms,o,a.transformResults),d=o.data;d.setAll(Fc(r)),d.setAll(u),o.convertToFoundDocument(a.version,d).setHasCommittedMutations()})(n,e,t):(function(r,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Ln(n,e,t,s){return n instanceof Qn?(function(o,a,u,d){if(!bs(o.precondition,a))return u;const f=o.value.clone(),p=tl(o.fieldTransforms,d,a);return f.setAll(p),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(n,e,t,s):n instanceof At?(function(o,a,u,d){if(!bs(o.precondition,a))return u;const f=tl(o.fieldTransforms,d,a),p=a.data;return p.setAll(Fc(o)),p.setAll(f),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((y=>y.field)))})(n,e,t,s):(function(o,a,u){return bs(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u})(n,e,t)}function hm(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),o=Pc(s.transform,r||null);o!=null&&(t===null&&(t=Pe.empty()),t.set(s.field,o))}return t||null}function Za(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Zt(s,r,((o,a)=>lm(o,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Qn extends tr{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class At extends tr{constructor(e,t,s,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Fc(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function el(n,e,t){const s=new Map;te(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const o=n[r],a=o.transform,u=e.data.field(o.field);s.set(o.field,am(a,u,t[r]))}return s}function tl(n,e,t){const s=new Map;for(const r of n){const o=r.transform,a=t.data.field(r.field);s.set(r.field,om(o,a,e))}return s}class nr extends tr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dm extends tr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const o=this.mutations[r];o.key.isEqual(e.key)&&um(o,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ln(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ln(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Cc();return this.mutations.forEach((r=>{const o=e.get(r.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(r.key)?null:u;const d=jc(a,u);d!==null&&s.set(r.key,d),a.isValidDocument()||a.convertToNoDocument(H.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),J())}isEqual(e){return this.batchId===e.batchId&&Zt(this.mutations,e.mutations,((t,s)=>Za(t,s)))&&Zt(this.baseMutations,e.baseMutations,((t,s)=>Za(t,s)))}}class Gi{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){te(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return tm})();const o=e.mutations;for(let a=0;a<o.length;a++)r=r.insert(o[a].key,s[a].version);return new Gi(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de,Z;function gm(n){switch(n){case V.OK:return $(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return $(15467,{code:n})}}function Mc(n){if(n===void 0)return Ze("GRPC error has no .code"),V.UNKNOWN;switch(n){case de.OK:return V.OK;case de.CANCELLED:return V.CANCELLED;case de.UNKNOWN:return V.UNKNOWN;case de.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case de.INTERNAL:return V.INTERNAL;case de.UNAVAILABLE:return V.UNAVAILABLE;case de.UNAUTHENTICATED:return V.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case de.NOT_FOUND:return V.NOT_FOUND;case de.ALREADY_EXISTS:return V.ALREADY_EXISTS;case de.PERMISSION_DENIED:return V.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case de.ABORTED:return V.ABORTED;case de.OUT_OF_RANGE:return V.OUT_OF_RANGE;case de.UNIMPLEMENTED:return V.UNIMPLEMENTED;case de.DATA_LOSS:return V.DATA_LOSS;default:return $(39323,{code:n})}}(Z=de||(de={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=new dt([4294967295,4294967295],0);function nl(n){const e=ym().encode(n),t=new Zl;return t.update(e),new Uint8Array(t.digest())}function sl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new dt([t,s],0),new dt([r,o],0)]}class Wi{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Vn(`Invalid padding: ${t}`);if(s<0)throw new Vn(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Vn(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Vn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=dt.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(dt.fromNumber(s)));return r.compare(_m)===1&&(r=new dt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=nl(e),[s,r]=sl(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(s,r,o);if(!this.we(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Wi(o,r,t);return s.forEach((u=>a.insert(u))),a}insert(e){if(this.ge===0)return;const t=nl(e),[s,r]=sl(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(s,r,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Vn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t,s,r,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Yn.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Xn(H.min(),r,new le(Y),et(),J())}}class Yn{constructor(e,t,s,r,o){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Yn(s,t,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t,s,r){this.be=e,this.removedTargetIds=t,this.key=s,this.De=r}}class Lc{constructor(e,t){this.targetId=e,this.Ce=t}}class Oc{constructor(e,t,s=we.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class rl{constructor(){this.ve=0,this.Fe=il(),this.Me=we.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=J(),t=J(),s=J();return this.Fe.forEach(((r,o)=>{switch(o){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:$(38017,{changeType:o})}})),new Yn(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=il()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,te(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class xm{constructor(e){this.Ge=e,this.ze=new Map,this.je=et(),this.Je=_s(),this.He=_s(),this.Ze=new le(Y)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:$(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const o=r.target;if(Ei(o))if(s===0){const a=new U(o.path);this.et(t,a,Se.newNoDocument(a,H.min()))}else te(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const u=this.ut(e),d=u?this.ct(u,e,a):1;if(d!==0){this.it(t);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,f)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:o=0}=t;let a,u;try{a=yt(s).toUint8Array()}catch(d){if(d instanceof hc)return Ot("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{u=new Wi(a,r,o)}catch(d){return Ot(d instanceof Vn?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return u.ge===0?null:u}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((o=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.et(t,o,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((o,a)=>{const u=this.ot(a);if(u){if(o.current&&Ei(u.target)){const d=new U(u.target.path);this.It(d).has(a)||this.Et(a,d)||this.et(a,d,Se.newNoDocument(d,e))}o.Be&&(t.set(a,o.ke()),o.Ke())}}));let s=J();this.He.forEach(((o,a)=>{let u=!0;a.forEachWhile((d=>{const f=this.ot(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(s=s.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(e)));const r=new Xn(e,t,this.Ze,this.je,s);return this.je=et(),this.Je=_s(),this.He=_s(),this.Ze=new le(Y),r}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new rl,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new ye(Y),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new ye(Y),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new rl),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function _s(){return new le(U.comparator)}function il(){return new le(U.comparator)}const Em={asc:"ASCENDING",desc:"DESCENDING"},vm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wm={and:"AND",or:"OR"};class Am{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wi(n,e){return n.useProto3Json||Qs(e)?e:{value:e}}function Os(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bc(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Tm(n,e){return Os(n,e.toTimestamp())}function $e(n){return te(!!n,49232),H.fromTimestamp((function(t){const s=gt(t);return new ae(s.seconds,s.nanos)})(n))}function Qi(n,e){return Ai(n,e).canonicalString()}function Ai(n,e){const t=(function(r){return new oe(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Uc(n){const e=oe.fromString(n);return te(Hc(e),10190,{key:e.toString()}),e}function Ti(n,e){return Qi(n.databaseId,e.path)}function Yr(n,e){const t=Uc(e);if(t.get(1)!==n.databaseId.projectId)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(zc(t))}function qc(n,e){return Qi(n.databaseId,e)}function bm(n){const e=Uc(n);return e.length===4?oe.emptyPath():zc(e)}function bi(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function zc(n){return te(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ol(n,e,t){return{name:Ti(n,e),fields:t.value.mapValue.fields}}function Im(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:$(39313,{state:f})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],o=(function(f,p){return f.useProto3Json?(te(p===void 0||typeof p=="string",58123),we.fromBase64String(p||"")):(te(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),we.fromUint8Array(p||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&(function(f){const p=f.code===void 0?V.UNKNOWN:Mc(f.code);return new B(p,f.message||"")})(a);t=new Oc(s,r,o,u||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Yr(n,s.document.name),o=$e(s.document.updateTime),a=s.document.createTime?$e(s.document.createTime):H.min(),u=new Pe({mapValue:{fields:s.document.fields}}),d=Se.newFoundDocument(r,o,a,u),f=s.targetIds||[],p=s.removedTargetIds||[];t=new Is(f,p,d.key,d)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Yr(n,s.document),o=s.readTime?$e(s.readTime):H.min(),a=Se.newNoDocument(r,o),u=s.removedTargetIds||[];t=new Is([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Yr(n,s.document),o=s.removedTargetIds||[];t=new Is([],o,r,null)}else{if(!("filter"in e))return $(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:o}=s,a=new pm(r,o),u=s.targetId;t=new Lc(u,a)}}return t}function Sm(n,e){let t;if(e instanceof Qn)t={update:ol(n,e.key,e.value)};else if(e instanceof nr)t={delete:Ti(n,e.key)};else if(e instanceof At)t={update:ol(n,e.key,e.data),updateMask:Fm(e.fieldMask)};else{if(!(e instanceof dm))return $(16599,{dt:e.type});t={verify:Ti(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(o,a){const u=a.transform;if(u instanceof Ms)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Kn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Hn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Ls)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw $(20930,{transform:a.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,o){return o.updateTime!==void 0?{updateTime:Tm(r,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:$(27497)})(n,e.precondition)),t}function Rm(n,e){return n&&n.length>0?(te(e!==void 0,14353),n.map((t=>(function(r,o){let a=r.updateTime?$e(r.updateTime):$e(o);return a.isEqual(H.min())&&(a=$e(o)),new cm(a,r.transformResults||[])})(t,e)))):[]}function Cm(n,e){return{documents:[qc(n,e.path)]}}function Nm(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=qc(n,r);const o=(function(f){if(f.length!==0)return Kc(We.create(f,"and"))})(e.filters);o&&(t.structuredQuery.where=o);const a=(function(f){if(f.length!==0)return f.map((p=>(function(v){return{field:Wt(v.field),direction:Vm(v.dir)}})(p)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=wi(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(e.endAt)),{ft:t,parent:r}}function Pm(n){let e=bm(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){te(s===1,65062);const p=t.from[0];p.allDescendants?r=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=(function(y){const v=$c(y);return v instanceof We&&vc(v)?v.getFilters():[v]})(t.where));let a=[];t.orderBy&&(a=(function(y){return y.map((v=>(function(j){return new Fs(Qt(j.field),(function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(j.direction))})(v)))})(t.orderBy));let u=null;t.limit&&(u=(function(y){let v;return v=typeof y=="object"?y.value:y,Qs(v)?null:v})(t.limit));let d=null;t.startAt&&(d=(function(y){const v=!!y.before,R=y.values||[];return new js(R,v)})(t.startAt));let f=null;return t.endAt&&(f=(function(y){const v=!y.before,R=y.values||[];return new js(R,v)})(t.endAt)),Wf(e,r,a,o,u,"F",d,f)}function Dm(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function $c(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Qt(t.unaryFilter.field);return pe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Qt(t.unaryFilter.field);return pe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Qt(t.unaryFilter.field);return pe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Qt(t.unaryFilter.field);return pe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return $(61313);default:return $(60726)}})(n):n.fieldFilter!==void 0?(function(t){return pe.create(Qt(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return $(58110);default:return $(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return We.create(t.compositeFilter.filters.map((s=>$c(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return $(1026)}})(t.compositeFilter.op))})(n):$(30097,{filter:n})}function Vm(n){return Em[n]}function km(n){return vm[n]}function jm(n){return wm[n]}function Wt(n){return{fieldPath:n.canonicalString()}}function Qt(n){return ve.fromServerFormat(n.fieldPath)}function Kc(n){return n instanceof pe?(function(t){if(t.op==="=="){if(Ga(t.value))return{unaryFilter:{field:Wt(t.field),op:"IS_NAN"}};if(Ha(t.value))return{unaryFilter:{field:Wt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ga(t.value))return{unaryFilter:{field:Wt(t.field),op:"IS_NOT_NAN"}};if(Ha(t.value))return{unaryFilter:{field:Wt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wt(t.field),op:km(t.op),value:t.value}}})(n):n instanceof We?(function(t){const s=t.getFilters().map((r=>Kc(r)));return s.length===1?s[0]:{compositeFilter:{op:jm(t.op),filters:s}}})(n):$(54877,{filter:n})}function Fm(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Hc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Gc(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t,s,r,o=H.min(),a=H.min(),u=we.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=d}withSequenceNumber(e){return new Ye(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ye(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ye(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ye(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e){this.yt=e}}function Lm(n){const e=Pm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?vi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.bn=new Bm}addToCollectionParentIndex(e,t){return this.bn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(pt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(pt.min())}updateCollectionGroup(e,t,s){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class Bm{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new ye(oe.comparator),o=!r.has(s);return this.index[t]=r.add(s),o}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ye(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Wc=41943040;class Ne{static withCacheSize(e){return new Ne(e,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ne.DEFAULT_COLLECTION_PERCENTILE=10,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ne.DEFAULT=new Ne(Wc,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ne.DISABLED=new Ne(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new xt(0)}static ar(){return new xt(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="LruGarbageCollector",Um=1048576;function cl([n,e],[t,s]){const r=Y(n,t);return r===0?Y(e,s):r}class qm{constructor(e){this.Pr=e,this.buffer=new ye(cl),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();cl(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class zm{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){M(ll,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){an(t)?M(ll,"Ignoring IndexedDB error during garbage collection: ",t):await on(t)}await this.Ar(3e5)}))}}class $m{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Ws.ce);const s=new qm(t);return this.Vr.forEachTarget(e,(r=>s.Er(r.sequenceNumber))).next((()=>this.Vr.mr(e,(r=>s.Er(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(al)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),al):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,o,a,u,d,f;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),r=this.params.maximumSequenceNumbersToCollect):r=y,a=Date.now(),this.nthSequenceNumber(e,r)))).next((y=>(s=y,u=Date.now(),this.removeTargets(e,s,t)))).next((y=>(o=y,d=Date.now(),this.removeOrphanedDocuments(e,s)))).next((y=>(f=Date.now(),Ht()<=ee.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${r} in `+(u-a)+`ms
	Removed ${o} targets in `+(d-u)+`ms
	Removed ${y} documents in `+(f-d)+`ms
Total Duration: ${f-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:o,documentsRemoved:y}))))}}function Km(n,e){return new $m(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(){this.changes=new Ut((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Se.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?P.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&Ln(s.mutation,r,Ve.empty(),ae.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,J()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=J()){const r=kt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((o=>{let a=Dn();return o.forEach(((u,d)=>{a=a.insert(u,d.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const s=kt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,J())))}populateOverlays(e,t,s){const r=[];return s.forEach((o=>{t.has(o)||r.push(o)})),this.documentOverlayCache.getOverlays(e,r).next((o=>{o.forEach(((a,u)=>{t.set(a,u)}))}))}computeViews(e,t,s,r){let o=et();const a=Mn(),u=(function(){return Mn()})();return t.forEach(((d,f)=>{const p=s.get(f.key);r.has(f.key)&&(p===void 0||p.mutation instanceof At)?o=o.insert(f.key,f):p!==void 0?(a.set(f.key,p.mutation.getFieldMask()),Ln(p.mutation,f,p.mutation.getFieldMask(),ae.now())):a.set(f.key,Ve.empty())})),this.recalculateAndSaveOverlays(e,o).next((d=>(d.forEach(((f,p)=>a.set(f,p))),t.forEach(((f,p)=>u.set(f,new Gm(p,a.get(f)??null)))),u)))}recalculateAndSaveOverlays(e,t){const s=Mn();let r=new le(((a,u)=>a-u)),o=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const u of a)u.keys().forEach((d=>{const f=t.get(d);if(f===null)return;let p=s.get(d)||Ve.empty();p=u.applyToLocalView(f,p),s.set(d,p);const y=(r.get(u.batchId)||J()).add(d);r=r.insert(u.batchId,y)}))})).next((()=>{const a=[],u=r.getReverseIterator();for(;u.hasNext();){const d=u.getNext(),f=d.key,p=d.value,y=Cc();p.forEach((v=>{if(!o.has(v)){const R=jc(t.get(v),s.get(v));R!==null&&y.set(v,R),o=o.add(v)}})),a.push(this.documentOverlayCache.saveOverlays(e,f,y))}return P.waitFor(a)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return Qf(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Xf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((o=>{const a=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-o.size):P.resolve(kt());let u=Un,d=o;return a.next((f=>P.forEach(f,((p,y)=>(u<y.largestBatchId&&(u=y.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next((v=>{d=d.insert(p,v)}))))).next((()=>this.populateOverlays(e,f,o))).next((()=>this.computeViews(e,d,f,J()))).next((p=>({batchId:u,changes:Rc(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next((s=>{let r=Dn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const o=t.collectionGroup;let a=Dn();return this.indexManager.getCollectionParents(e,o).next((u=>P.forEach(u,(d=>{const f=(function(y,v){return new Ys(v,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(t,d.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,s,r).next((p=>{p.forEach(((y,v)=>{a=a.insert(y,v)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,o,r)))).next((a=>{o.forEach(((d,f)=>{const p=f.getKey();a.get(p)===null&&(a=a.insert(p,Se.newInvalidDocument(p)))}));let u=Dn();return a.forEach(((d,f)=>{const p=o.get(d);p!==void 0&&Ln(p.mutation,f,Ve.empty(),ae.now()),Zs(t,f)&&(u=u.insert(d,f))})),u}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return P.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:$e(r.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(r){return{name:r.name,query:Lm(r.bundledQuery),readTime:$e(r.readTime)}})(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.overlays=new le(U.comparator),this.Lr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const s=kt();return P.forEach(t,(r=>this.getOverlay(e,r).next((o=>{o!==null&&s.set(r,o)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,o)=>{this.St(e,t,o)})),P.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach((o=>this.overlays=this.overlays.remove(o))),this.Lr.delete(s)),P.resolve()}getOverlaysForCollection(e,t,s){const r=kt(),o=t.length+1,a=new U(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const d=u.getNext().value,f=d.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>s&&r.set(d.getKey(),d)}return P.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let o=new le(((f,p)=>f-p));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>s){let p=o.get(f.largestBatchId);p===null&&(p=kt(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const u=kt(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach(((f,p)=>u.set(f,p))),!(u.size()>=r)););return P.resolve(u)}St(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new mm(t,s));let o=this.Lr.get(t);o===void 0&&(o=J(),this.Lr.set(t,o)),this.Lr.set(t,o.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(){this.sessionToken=we.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.kr=new ye(xe.Kr),this.qr=new ye(xe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new xe(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new xe(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new U(new oe([])),s=new xe(t,e),r=new xe(t,e+1),o=[];return this.qr.forEachInRange([s,r],(a=>{this.Wr(a),o.push(a.key)})),o}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new U(new oe([])),s=new xe(t,e),r=new xe(t,e+1);let o=J();return this.qr.forEachInRange([s,r],(a=>{o=o.add(a.key)})),o}containsKey(e){const t=new xe(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class xe{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return U.comparator(e.key,t.key)||Y(e.Jr,t.Jr)}static Ur(e,t){return Y(e.Jr,t.Jr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new ye(xe.Kr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new fm(o,t,s,r);this.mutationQueue.push(a);for(const u of r)this.Hr=this.Hr.add(new xe(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),o=r<0?0:r;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Bi:this.Yn-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new xe(t,0),r=new xe(t,Number.POSITIVE_INFINITY),o=[];return this.Hr.forEachInRange([s,r],(a=>{const u=this.Zr(a.Jr);o.push(u)})),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ye(Y);return t.forEach((r=>{const o=new xe(r,0),a=new xe(r,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([o,a],(u=>{s=s.add(u.Jr)}))})),P.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let o=s;U.isDocumentKey(o)||(o=o.child(""));const a=new xe(new U(o),0);let u=new ye(Y);return this.Hr.forEachWhile((d=>{const f=d.key.path;return!!s.isPrefixOf(f)&&(f.length===r&&(u=u.add(d.Jr)),!0)}),a),P.resolve(this.Yr(u))}Yr(e){const t=[];return e.forEach((s=>{const r=this.Zr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){te(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return P.forEach(t.mutations,(r=>{const o=new xe(r.key,t.batchId);return s=s.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new xe(t,0),r=this.Hr.firstAfterOrEqual(s);return P.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){this.ti=e,this.docs=(function(){return new le(U.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),o=r?r.size:0,a=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return P.resolve(s?s.document.mutableCopy():Se.newInvalidDocument(t))}getEntries(e,t){let s=et();return t.forEach((r=>{const o=this.docs.get(r);s=s.insert(r,o?o.document.mutableCopy():Se.newInvalidDocument(r))})),P.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let o=et();const a=t.path,u=new U(a.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(u);for(;d.hasNext();){const{key:f,value:{document:p}}=d.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||bf(Tf(p),s)<=0||(r.has(p.key)||Zs(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,t,s,r){$(9500)}ni(e,t){return P.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new ep(this)}getSize(e){return P.resolve(this.size)}}class ep extends Hm{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)})),P.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){this.persistence=e,this.ri=new Ut((t=>zi(t)),$i),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.ii=0,this.si=new Xi,this.targetCount=0,this.oi=xt._r()}forEachTarget(e,t){return this.ri.forEach(((s,r)=>t(r))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),P.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new xt(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.lr(t),P.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,s){let r=0;const o=[];return this.ri.forEach(((a,u)=>{u.sequenceNumber<=t&&s.get(u.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),r++)})),P.waitFor(o).next((()=>r))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return P.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),P.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,o=[];return r&&t.forEach((a=>{o.push(r.markPotentiallyOrphaned(e,a))})),P.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return P.resolve(s)}containsKey(e,t){return P.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,t){this._i={},this.overlays={},this.ai=new Ws(0),this.ui=!1,this.ui=!0,this.ci=new Ym,this.referenceDelegate=e(this),this.li=new tp(this),this.indexManager=new Om,this.remoteDocumentCache=(function(r){return new Zm(r)})((s=>this.referenceDelegate.hi(s))),this.serializer=new Mm(t),this.Pi=new Qm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Xm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new Jm(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){M("MemoryPersistence","Starting transaction:",e);const r=new np(this.ai.next());return this.referenceDelegate.Ti(),s(r).next((o=>this.referenceDelegate.Ii(r).next((()=>o)))).toPromise().then((o=>(r.raiseOnCommittedEvent(),o)))}Ei(e,t){return P.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class np extends Sf{constructor(e){super(),this.currentSequenceNumber=e}}class Yi{constructor(e){this.persistence=e,this.Ri=new Xi,this.Ai=null}static Vi(e){return new Yi(e)}get di(){if(this.Ai)return this.Ai;throw $(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),P.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((r=>this.di.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((o=>this.di.add(o.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,(s=>{const r=U.fromPath(s);return this.mi(e,r).next((o=>{o||t.removeEntry(r,H.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Bs{constructor(e,t){this.persistence=e,this.fi=new Ut((s=>Nf(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=Km(this,t)}static Vi(e,t){return new Bs(e,t)}Ti(){}Ii(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return P.forEach(this.fi,((s,r)=>this.wr(e,s,r).next((o=>o?P.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),o=r.newChangeBuffer();return r.ni(e,(a=>this.wr(e,a,t).next((u=>{u||(s++,o.removeEntry(a,H.min()))})))).next((()=>o.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),P.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=As(e.data.value)),t}wr(e,t,s){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return P.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=r}static Es(e,t){let s=J(),r=J();for(const o of t.docChanges)switch(o.type){case 0:s=s.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new Ji(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return qh()?8:Rf(Bh())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const o={result:null};return this.gs(e,t).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ps(e,t,r,s).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new sp;return this.ys(e,t,a).next((u=>{if(o.result=u,this.As)return this.ws(e,t,a,u.size)}))})).next((()=>o.result))}ws(e,t,s,r){return s.documentReadCount<this.Vs?(Ht()<=ee.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Gt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(Ht()<=ee.DEBUG&&M("QueryEngine","Query:",Gt(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(Ht()<=ee.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Gt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ze(t))):P.resolve())}gs(e,t){if(Ya(t))return P.resolve(null);let s=ze(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=vi(t,null,"F"),s=ze(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((o=>{const a=J(...o);return this.fs.getDocuments(e,a).next((u=>this.indexManager.getMinOffset(e,s).next((d=>{const f=this.Ss(t,u);return this.bs(t,f,a,d.readTime)?this.gs(e,vi(t,null,"F")):this.Ds(e,f,t,d)}))))})))))}ps(e,t,s,r){return Ya(t)||r.isEqual(H.min())?P.resolve(null):this.fs.getDocuments(e,s).next((o=>{const a=this.Ss(t,o);return this.bs(t,a,s,r)?P.resolve(null):(Ht()<=ee.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Gt(t)),this.Ds(e,a,t,Af(r,Un)).next((u=>u)))}))}Ss(e,t){let s=new ye(Ic(e));return t.forEach(((r,o)=>{Zs(e,o)&&(s=s.add(o))})),s}bs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}ys(e,t,s){return Ht()<=ee.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Gt(t)),this.fs.getDocumentsMatchingQuery(e,t,pt.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next((o=>(t.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="LocalStore",ip=3e8;class op{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new le(Y),this.Fs=new Ut((o=>zi(o)),$i),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Wm(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function ap(n,e,t,s){return new op(n,e,t,s)}async function Xc(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((o=>(r=o,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((o=>{const a=[],u=[];let d=J();for(const f of r){a.push(f.batchId);for(const p of f.mutations)d=d.add(p.key)}for(const f of o){u.push(f.batchId);for(const p of f.mutations)d=d.add(p.key)}return t.localDocuments.getDocuments(s,d).next((f=>({Ns:f,removedBatchIds:a,addedBatchIds:u})))}))}))}function lp(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),o=t.xs.newChangeBuffer({trackRemovals:!0});return(function(u,d,f,p){const y=f.batch,v=y.keys();let R=P.resolve();return v.forEach((j=>{R=R.next((()=>p.getEntry(d,j))).next((b=>{const C=f.docVersions.get(j);te(C!==null,48541),b.version.compareTo(C)<0&&(y.applyToRemoteDocument(b,f),b.isValidDocument()&&(b.setReadTime(f.commitVersion),p.addEntry(b)))}))})),R.next((()=>u.mutationQueue.removeMutationBatch(d,y)))})(t,s,e,o).next((()=>o.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(u){let d=J();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(d=d.add(u.batch.mutations[f].key));return d})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function Yc(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function cp(n,e){const t=W(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const u=[];e.targetChanges.forEach(((p,y)=>{const v=r.get(y);if(!v)return;u.push(t.li.removeMatchingKeys(o,p.removedDocuments,y).next((()=>t.li.addMatchingKeys(o,p.addedDocuments,y))));let R=v.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(y)!==null?R=R.withResumeToken(we.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,s)),r=r.insert(y,R),(function(b,C,G){return b.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=ip?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(v,R,p)&&u.push(t.li.updateTargetData(o,R))}));let d=et(),f=J();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))})),u.push(up(o,a,e.documentUpdates).next((p=>{d=p.Bs,f=p.Ls}))),!s.isEqual(H.min())){const p=t.li.getLastRemoteSnapshotVersion(o).next((y=>t.li.setTargetsMetadata(o,o.currentSequenceNumber,s)));u.push(p)}return P.waitFor(u).next((()=>a.apply(o))).next((()=>t.localDocuments.getLocalViewOfDocuments(o,d,f))).next((()=>d))})).then((o=>(t.vs=r,o)))}function up(n,e,t){let s=J(),r=J();return t.forEach((o=>s=s.add(o))),e.getEntries(n,s).next((o=>{let a=et();return t.forEach(((u,d)=>{const f=o.get(u);d.isFoundDocument()!==f.isFoundDocument()&&(r=r.add(u)),d.isNoDocument()&&d.version.isEqual(H.min())?(e.removeEntry(u,d.readTime),a=a.insert(u,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(d),a=a.insert(u,d)):M(Zi,"Ignoring outdated watch update for ",u,". Current version:",f.version," Watch version:",d.version)})),{Bs:a,Ls:r}}))}function hp(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Bi),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function dp(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.li.getTargetData(s,e).next((o=>o?(r=o,P.resolve(r)):t.li.allocateTargetId(s).next((a=>(r=new Ye(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function Ii(n,e,t){const s=W(n),r=s.vs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",o,(a=>s.persistence.referenceDelegate.removeTarget(a,r)))}catch(a){if(!an(a))throw a;M(Zi,`Failed to update sequence numbers for target ${e}: ${a}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function ul(n,e,t){const s=W(n);let r=H.min(),o=J();return s.persistence.runTransaction("Execute query","readwrite",(a=>(function(d,f,p){const y=W(d),v=y.Fs.get(p);return v!==void 0?P.resolve(y.vs.get(v)):y.li.getTargetData(f,p)})(s,a,ze(e)).next((u=>{if(u)return r=u.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(a,u.targetId).next((d=>{o=d}))})).next((()=>s.Cs.getDocumentsMatchingQuery(a,e,t?r:H.min(),t?o:J()))).next((u=>(fp(s,Jf(e),u),{documents:u,ks:o})))))}function fp(n,e,t){let s=n.Ms.get(e)||H.min();t.forEach(((r,o)=>{o.readTime.compareTo(s)>0&&(s=o.readTime)})),n.Ms.set(e,s)}class hl{constructor(){this.activeTargetIds=rm()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mp{constructor(){this.vo=new hl,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new hl,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="ConnectivityMonitor";class fl{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){M(dl,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){M(dl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs=null;function Si(){return xs===null?xs=(function(){return 268435456+Math.round(2147483648*Math.random())})():xs++,"0x"+xs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="RestConnection",gp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class yp{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===Vs?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,o){const a=Si(),u=this.Qo(e,t.toUriEncodedString());M(Jr,`Sending RPC '${e}' ${a}:`,u,s);const d={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(d,r,o);const{host:f}=new URL(u),p=Hl(f);return this.zo(e,u,d,s,p).then((y=>(M(Jr,`Received RPC '${e}' ${a}: `,y),y)),(y=>{throw Ot(Jr,`RPC '${e}' ${a} failed with error: `,y,"url: ",u,"request:",s),y}))}jo(e,t,s,r,o,a){return this.Wo(e,t,s,r,o)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+rn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,o)=>e[o]=r)),s&&s.headers.forEach(((r,o)=>e[o]=r))}Qo(e,t){const s=gp[e];let r=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="WebChannelConnection",Cn=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(r){setTimeout((()=>{throw r}),0)}}))};class Yt extends yp{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Yt.c_){const e=sc();Cn(e,nc.STAT_EVENT,(t=>{t.stat===pi.PROXY?M(be,"STAT_EVENT: detected buffering proxy"):t.stat===pi.NOPROXY&&M(be,"STAT_EVENT: detected no buffering proxy")})),Yt.c_=!0}}zo(e,t,s,r,o){const a=Si();return new Promise(((u,d)=>{const f=new ec;f.setWithCredentials(!0),f.listenOnce(tc.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case ws.NO_ERROR:const y=f.getResponseJson();M(be,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),u(y);break;case ws.TIMEOUT:M(be,`RPC '${e}' ${a} timed out`),d(new B(V.DEADLINE_EXCEEDED,"Request time out"));break;case ws.HTTP_ERROR:const v=f.getStatus();if(M(be,`RPC '${e}' ${a} failed with status:`,v,"response text:",f.getResponseText()),v>0){let R=f.getResponseJson();Array.isArray(R)&&(R=R[0]);const j=R==null?void 0:R.error;if(j&&j.status&&j.message){const b=(function(G){const k=G.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(k)>=0?k:V.UNKNOWN})(j.status);d(new B(b,j.message))}else d(new B(V.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new B(V.UNAVAILABLE,"Connection failed."));break;default:$(9055,{l_:e,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{M(be,`RPC '${e}' ${a} completed.`)}}));const p=JSON.stringify(r);M(be,`RPC '${e}' ${a} sending request:`,r),f.send(t,"POST",p,s,15)}))}T_(e,t,s){const r=Si(),o=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Go(u.initMessageHeaders,t,s),u.encodeInitMessageHeaders=!0;const f=o.join("");M(be,`Creating RPC '${e}' stream ${r}: ${f}`,u);const p=a.createWebChannel(f,u);this.I_(p);let y=!1,v=!1;const R=new _p({Jo:j=>{v?M(be,`Not sending because RPC '${e}' stream ${r} is closed:`,j):(y||(M(be,`Opening RPC '${e}' stream ${r} transport.`),p.open(),y=!0),M(be,`RPC '${e}' stream ${r} sending:`,j),p.send(j))},Ho:()=>p.close()});return Cn(p,Pn.EventType.OPEN,(()=>{v||(M(be,`RPC '${e}' stream ${r} transport opened.`),R.i_())})),Cn(p,Pn.EventType.CLOSE,(()=>{v||(v=!0,M(be,`RPC '${e}' stream ${r} transport closed`),R.o_(),this.E_(p))})),Cn(p,Pn.EventType.ERROR,(j=>{v||(v=!0,Ot(be,`RPC '${e}' stream ${r} transport errored. Name:`,j.name,"Message:",j.message),R.o_(new B(V.UNAVAILABLE,"The operation could not be completed")))})),Cn(p,Pn.EventType.MESSAGE,(j=>{var b;if(!v){const C=j.data[0];te(!!C,16349);const G=C,k=(G==null?void 0:G.error)||((b=G[0])==null?void 0:b.error);if(k){M(be,`RPC '${e}' stream ${r} received error:`,k);const O=k.status;let D=(function(x){const g=de[x];if(g!==void 0)return Mc(g)})(O),L=k.message;O==="NOT_FOUND"&&L.includes("database")&&L.includes("does not exist")&&L.includes(this.databaseId.database)&&Ot(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=V.INTERNAL,L="Unknown error status: "+O+" with message "+k.message),v=!0,R.o_(new B(D,L)),p.close()}else M(be,`RPC '${e}' stream ${r} received:`,C),R.__(C)}})),Yt.u_(),setTimeout((()=>{R.s_()}),0),R}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return rc()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(n){return new Yt(n)}function Zr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(n){return new Am(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.c_=!1;class Jc{constructor(e,t,s=1e3,r=1.5,o=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&M("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="PersistentStream";class Zc{constructor(e,t,s,r,o,a,u,d){this.Ci=e,this.S_=s,this.b_=r,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Jc(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Ze(t.toString()),Ze("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new B(V.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return M(ml,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(M(ml,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ep extends Zc{constructor(e,t,s,r,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Im(this.serializer,e),s=(function(o){if(!("targetChange"in o))return H.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?$e(a.readTime):H.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=bi(this.serializer),t.addTarget=(function(o,a){let u;const d=a.target;if(u=Ei(d)?{documents:Cm(o,d)}:{query:Nm(o,d).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Bc(o,a.resumeToken);const f=wi(o,a.expectedCount);f!==null&&(u.expectedCount=f)}else if(a.snapshotVersion.compareTo(H.min())>0){u.readTime=Os(o,a.snapshotVersion.toTimestamp());const f=wi(o,a.expectedCount);f!==null&&(u.expectedCount=f)}return u})(this.serializer,e);const s=Dm(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=bi(this.serializer),t.removeTarget=e,this.K_(t)}}class vp extends Zc{constructor(e,t,s,r,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Rm(e.writeResults,e.commitTime),s=$e(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=bi(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>Sm(this.serializer,s)))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{}class Ap extends wp{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(e,Ai(t,s),r,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(V.UNKNOWN,o.toString())}))}jo(e,t,s,r,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.jo(e,Ai(t,s),r,a,u,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(V.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function Tp(n,e,t,s){return new Ap(n,e,t,s)}class bp{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ze(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="RemoteStore";class Ip{constructor(e,t,s,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new xt(1e3),this.Va=new xt(1001),this.da=new Set,this.ma=[],this.fa=o,this.fa.Mo((a=>{s.enqueueAndForget((async()=>{qt(this)&&(M(Qe,"Restarting streams for network reachability change."),await(async function(d){const f=W(d);f.da.add(4),await Jn(f),f.ga.set("Unknown"),f.da.delete(4),await rr(f)})(this))}))})),this.ga=new bp(s,r)}}async function rr(n){if(qt(n))for(const e of n.ma)await e(!0)}async function Jn(n){for(const e of n.ma)await e(!1)}function Ri(n,e){return n.Ea.get(e)||void 0}function eu(n,e){const t=W(n),s=Ri(t,e.targetId);if(s!==void 0&&t.Ia.has(s))return;const r=(function(u,d){const f=Ri(u,d);f!==void 0&&u.Ra.delete(f);const p=(function(v,R){return R%2!=0?v.Va.next():v.Aa.next()})(u,d);return u.Ea.set(d,p),u.Ra.set(p,d),p})(t,e.targetId);M(Qe,"remoteStoreListen mapping SDK target ID to remote",e.targetId,r);const o=new Ye(e.target,r,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(r,o),so(t)?no(t):ln(t).O_()&&to(t,o)}function eo(n,e){const t=W(n),s=ln(t),r=Ri(t,e);M(Qe,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,r),t.Ia.delete(r),t.Ea.delete(e),t.Ra.delete(r),s.O_()&&tu(t,r),t.Ia.size===0&&(s.O_()?s.L_():qt(t)&&t.ga.set("Unknown"))}function to(n,e){if(n.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=n.Ra.get(e.targetId);if(t===void 0)return void M(Qe,"SDK target ID not found for remote ID: "+e.targetId);const s=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(s)}ln(n).Z_(e)}function tu(n,e){n.pa.$e(e),ln(n).X_(e)}function no(n){n.pa=new xm({getRemoteKeysForTarget:e=>{const t=n.Ra.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):J()},At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ln(n).start(),n.ga.ua()}function so(n){return qt(n)&&!ln(n).x_()&&n.Ia.size>0}function qt(n){return W(n).da.size===0}function nu(n){n.pa=void 0}async function Sp(n){n.ga.set("Online")}async function Rp(n){n.Ia.forEach(((e,t)=>{to(n,e)}))}async function Cp(n,e){nu(n),so(n)?(n.ga.ha(e),no(n)):n.ga.set("Unknown")}async function Np(n,e,t){if(n.ga.set("Online"),e instanceof Oc&&e.state===2&&e.cause)try{await(async function(r,o){const a=o.cause;for(const u of o.targetIds){if(r.Ia.has(u)){const d=r.Ra.get(u);d!==void 0&&(await r.remoteSyncer.rejectListen(d,a),r.Ea.delete(d),r.Ra.delete(u)),r.Ia.delete(u)}r.pa.removeTarget(u)}})(n,e)}catch(s){M(Qe,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Us(n,s)}else if(e instanceof Is?n.pa.Xe(e):e instanceof Lc?n.pa.st(e):n.pa.tt(e),!t.isEqual(H.min()))try{const s=await Yc(n.localStore);t.compareTo(s)>=0&&await(function(o,a){const u=o.pa.Tt(a);u.targetChanges.forEach(((f,p)=>{if(f.resumeToken.approximateByteSize()>0){const y=o.Ia.get(p);y&&o.Ia.set(p,y.withResumeToken(f.resumeToken,a))}})),u.targetMismatches.forEach(((f,p)=>{const y=o.Ia.get(f);if(!y)return;o.Ia.set(f,y.withResumeToken(we.EMPTY_BYTE_STRING,y.snapshotVersion)),tu(o,f);const v=new Ye(y.target,f,p,y.sequenceNumber);to(o,v)}));const d=(function(p,y){const v=new Map;y.targetChanges.forEach(((j,b)=>{const C=p.Ra.get(b);C!==void 0&&v.set(C,j)}));let R=new le(Y);return y.targetMismatches.forEach(((j,b)=>{const C=p.Ra.get(j);C!==void 0&&(R=R.insert(C,b))})),new Xn(y.snapshotVersion,v,R,y.documentUpdates,y.resolvedLimboDocuments)})(o,u);return o.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(s){M(Qe,"Failed to raise snapshot:",s),await Us(n,s)}}async function Us(n,e,t){if(!an(e))throw e;n.da.add(1),await Jn(n),n.ga.set("Offline"),t||(t=()=>Yc(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M(Qe,"Retrying IndexedDB access"),await t(),n.da.delete(1),await rr(n)}))}function su(n,e){return e().catch((t=>Us(n,t,e)))}async function ir(n){const e=W(n),t=Et(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Bi;for(;Pp(e);)try{const r=await hp(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,Dp(e,r)}catch(r){await Us(e,r)}ru(e)&&iu(e)}function Pp(n){return qt(n)&&n.Ta.length<10}function Dp(n,e){n.Ta.push(e);const t=Et(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function ru(n){return qt(n)&&!Et(n).x_()&&n.Ta.length>0}function iu(n){Et(n).start()}async function Vp(n){Et(n).ra()}async function kp(n){const e=Et(n);for(const t of n.Ta)e.ea(t.mutations)}async function jp(n,e,t){const s=n.Ta.shift(),r=Gi.from(s,e,t);await su(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await ir(n)}async function Fp(n,e){e&&Et(n).Y_&&await(async function(s,r){if((function(a){return gm(a)&&a!==V.ABORTED})(r.code)){const o=s.Ta.shift();Et(s).B_(),await su(s,(()=>s.remoteSyncer.rejectFailedWrite(o.batchId,r))),await ir(s)}})(n,e),ru(n)&&iu(n)}async function pl(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),M(Qe,"RemoteStore received new credentials");const s=qt(t);t.da.add(3),await Jn(t),s&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await rr(t)}async function Mp(n,e){const t=W(n);e?(t.da.delete(2),await rr(t)):e||(t.da.add(2),await Jn(t),t.ga.set("Unknown"))}function ln(n){return n.ya||(n.ya=(function(t,s,r){const o=W(t);return o.sa(),new Ep(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)})(n.datastore,n.asyncQueue,{Zo:Sp.bind(null,n),Yo:Rp.bind(null,n),t_:Cp.bind(null,n),H_:Np.bind(null,n)}),n.ma.push((async e=>{e?(n.ya.B_(),so(n)?no(n):n.ga.set("Unknown")):(await n.ya.stop(),nu(n))}))),n.ya}function Et(n){return n.wa||(n.wa=(function(t,s,r){const o=W(t);return o.sa(),new vp(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Vp.bind(null,n),t_:Fp.bind(null,n),ta:kp.bind(null,n),na:jp.bind(null,n)}),n.ma.push((async e=>{e?(n.wa.B_(),await ir(n)):(await n.wa.stop(),n.Ta.length>0&&(M(Qe,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t,s,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=o,this.deferred=new ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,o){const a=Date.now()+s,u=new ro(e,t,a,r,o);return u.start(s),u}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function io(n,e){if(Ze("AsyncQueue",`${e}: ${n}`),an(n))return new B(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{static emptySet(e){return new Jt(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||U.comparator(t.key,s.key):(t,s)=>U.comparator(t.key,s.key),this.keyedMap=Dn(),this.sortedSet=new le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Jt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=s.getNext().key;if(!r.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Jt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(){this.Sa=new le(U.comparator)}track(e){const t=e.doc.key,s=this.Sa.get(t);s?e.type!==0&&s.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&s.type!==1?this.Sa=this.Sa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Sa=this.Sa.remove(t):e.type===1&&s.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):$(63341,{Vt:e,ba:s}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class nn{constructor(e,t,s,r,o,a,u,d,f){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(e,t,s,r,o){const a=[];return t.forEach((u=>{a.push({type:0,doc:u})})),new nn(e,t,Jt.emptySet(t),a,s,r,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Js(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some((e=>e.Ma()))}}class Op{constructor(){this.queries=yl(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,s){const r=W(t),o=r.queries;r.queries=yl(),o.forEach(((a,u)=>{for(const d of u.va)d.onError(s)}))})(this,new B(V.ABORTED,"Firestore shutting down"))}}function yl(){return new Ut((n=>bc(n)),Js)}async function ou(n,e){const t=W(n);let s=3;const r=e.query;let o=t.queries.get(r);o?!o.Fa()&&e.Ma()&&(s=2):(o=new Lp,s=e.Ma()?0:1);try{switch(s){case 0:o.Ca=await t.onListen(r,!0);break;case 1:o.Ca=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const u=io(a,`Initialization of query '${Gt(e.query)}' failed`);return void e.onError(u)}t.queries.set(r,o),o.va.push(e),e.Oa(t.onlineState),o.Ca&&e.Na(o.Ca)&&oo(t)}async function au(n,e){const t=W(n),s=e.query;let r=3;const o=t.queries.get(s);if(o){const a=o.va.indexOf(e);a>=0&&(o.va.splice(a,1),o.va.length===0?r=e.Ma()?0:1:!o.Fa()&&e.Ma()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Bp(n,e){const t=W(n);let s=!1;for(const r of e){const o=r.query,a=t.queries.get(o);if(a){for(const u of a.va)u.Na(r)&&(s=!0);a.Ca=r}}s&&oo(t)}function Up(n,e,t){const s=W(n),r=s.queries.get(e);if(r)for(const o of r.va)o.onError(t);s.queries.delete(e)}function oo(n){n.xa.forEach((e=>{e.next()}))}var Ci,_l;(_l=Ci||(Ci={})).Ba="default",_l.Cache="cache";class lu{constructor(e,t,s){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=s||{}}Na(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new nn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const s=t!=="Offline";return(!this.options.Wa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=nn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Ci.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e){this.key=e}}class uu{constructor(e){this.key=e}}class qp{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=J(),this.mutatedKeys=J(),this.iu=Ic(e),this.su=new Jt(this.iu)}get ou(){return this.tu}_u(e,t){const s=t?t.au:new gl,r=t?t.su:this.su;let o=t?t.mutatedKeys:this.mutatedKeys,a=r,u=!1;const d=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,f=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((p,y)=>{const v=r.get(p),R=Zs(this.query,y)?y:null,j=!!v&&this.mutatedKeys.has(v.key),b=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let C=!1;v&&R?v.data.isEqual(R.data)?j!==b&&(s.track({type:3,doc:R}),C=!0):this.uu(v,R)||(s.track({type:2,doc:R}),C=!0,(d&&this.iu(R,d)>0||f&&this.iu(R,f)<0)&&(u=!0)):!v&&R?(s.track({type:0,doc:R}),C=!0):v&&!R&&(s.track({type:1,doc:v}),C=!0,(d||f)&&(u=!0)),C&&(R?(a=a.add(R),o=b?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),s.track({type:1,doc:p})}return{su:a,au:s,bs:u,mutatedKeys:o}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const o=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const a=e.au.Da();a.sort(((p,y)=>(function(R,j){const b=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $(20277,{Vt:C})}};return b(R)-b(j)})(p.type,y.type)||this.iu(p.doc,y.doc))),this.cu(s),r=r??!1;const u=t&&!r?this.lu():[],d=this.ru.size===0&&this.current&&!r?1:0,f=d!==this.nu;return this.nu=d,a.length!==0||f?{snapshot:new nn(this.query,e.su,o,a,e.mutatedKeys,d===0,f,!1,!!s&&s.resumeToken.approximateByteSize()>0),hu:u}:{hu:u}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new gl,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach((t=>this.tu=this.tu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.tu=this.tu.delete(t))),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=J(),this.su.forEach((s=>{this.Pu(s.key)&&(this.ru=this.ru.add(s.key))}));const t=[];return e.forEach((s=>{this.ru.has(s)||t.push(new uu(s))})),this.ru.forEach((s=>{e.has(s)||t.push(new cu(s))})),t}Tu(e){this.tu=e.ks,this.ru=J();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return nn.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const ao="SyncEngine";class zp{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class $p{constructor(e){this.key=e,this.Eu=!1}}class Kp{constructor(e,t,s,r,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new Ut((u=>bc(u)),Js),this.Vu=new Map,this.du=new Set,this.mu=new le(U.comparator),this.fu=new Map,this.gu=new Xi,this.pu={},this.yu=new Map,this.wu=xt.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function Hp(n,e,t=!0){const s=gu(n);let r;const o=s.Au.get(e);return o?(s.sharedClientState.addLocalQueryTarget(o.targetId),r=o.view.Iu()):r=await hu(s,e,t,!0),r}async function Gp(n,e){const t=gu(n);await hu(t,e,!0,!1)}async function hu(n,e,t,s){const r=await dp(n.localStore,ze(e)),o=r.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let u;return s&&(u=await Wp(n,e,o,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&eu(n.remoteStore,r),u}async function Wp(n,e,t,s,r){n.bu=(y,v,R)=>(async function(b,C,G,k){let O=C.view._u(G);O.bs&&(O=await ul(b.localStore,C.query,!1).then((({documents:x})=>C.view._u(x,O))));const D=k&&k.targetChanges.get(C.targetId),L=k&&k.targetMismatches.get(C.targetId)!=null,N=C.view.applyChanges(O,b.isPrimaryClient,D,L);return El(b,C.targetId,N.hu),N.snapshot})(n,y,v,R);const o=await ul(n.localStore,e,!0),a=new qp(e,o.ks),u=a._u(o.documents),d=Yn.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),f=a.applyChanges(u,n.isPrimaryClient,d);El(n,t,f.hu);const p=new zp(e,t,a);return n.Au.set(e,p),n.Vu.has(t)?n.Vu.get(t).push(e):n.Vu.set(t,[e]),f.snapshot}async function Qp(n,e,t){const s=W(n),r=s.Au.get(e),o=s.Vu.get(r.targetId);if(o.length>1)return s.Vu.set(r.targetId,o.filter((a=>!Js(a,e)))),void s.Au.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Ii(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&eo(s.remoteStore,r.targetId),Ni(s,r.targetId)})).catch(on)):(Ni(s,r.targetId),await Ii(s.localStore,r.targetId,!0))}async function Xp(n,e){const t=W(n),s=t.Au.get(e),r=t.Vu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),eo(t.remoteStore,s.targetId))}async function Yp(n,e,t){const s=rg(n);try{const r=await(function(a,u){const d=W(a),f=ae.now(),p=u.reduce(((R,j)=>R.add(j.key)),J());let y,v;return d.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let j=et(),b=J();return d.xs.getEntries(R,p).next((C=>{j=C,j.forEach(((G,k)=>{k.isValidDocument()||(b=b.add(G))}))})).next((()=>d.localDocuments.getOverlayedDocuments(R,j))).next((C=>{y=C;const G=[];for(const k of u){const O=hm(k,y.get(k.key).overlayedDocument);O!=null&&G.push(new At(k.key,O,_c(O.value.mapValue),ke.exists(!0)))}return d.mutationQueue.addMutationBatch(R,f,G,u)})).next((C=>{v=C;const G=C.applyToLocalDocumentSet(y,b);return d.documentOverlayCache.saveOverlays(R,C.batchId,G)}))})).then((()=>({batchId:v.batchId,changes:Rc(y)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(a,u,d){let f=a.pu[a.currentUser.toKey()];f||(f=new le(Y)),f=f.insert(u,d),a.pu[a.currentUser.toKey()]=f})(s,r.batchId,t),await Zn(s,r.changes),await ir(s.remoteStore)}catch(r){const o=io(r,"Failed to persist write");t.reject(o)}}async function du(n,e){const t=W(n);try{const s=await cp(t.localStore,e);e.targetChanges.forEach(((r,o)=>{const a=t.fu.get(o);a&&(te(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.Eu=!0:r.modifiedDocuments.size>0?te(a.Eu,14607):r.removedDocuments.size>0&&(te(a.Eu,42227),a.Eu=!1))})),await Zn(t,s,e)}catch(s){await on(s)}}function xl(n,e,t){const s=W(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Au.forEach(((o,a)=>{const u=a.view.Oa(e);u.snapshot&&r.push(u.snapshot)})),(function(a,u){const d=W(a);d.onlineState=u;let f=!1;d.queries.forEach(((p,y)=>{for(const v of y.va)v.Oa(u)&&(f=!0)})),f&&oo(d)})(s.eventManager,e),r.length&&s.Ru.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Jp(n,e,t){const s=W(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.fu.get(e),o=r&&r.key;if(o){let a=new le(U.comparator);a=a.insert(o,Se.newNoDocument(o,H.min()));const u=J().add(o),d=new Xn(H.min(),new Map,new le(Y),a,u);await du(s,d),s.mu=s.mu.remove(o),s.fu.delete(e),lo(s)}else await Ii(s.localStore,e,!1).then((()=>Ni(s,e,t))).catch(on)}async function Zp(n,e){const t=W(n),s=e.batch.batchId;try{const r=await lp(t.localStore,e);mu(t,s,null),fu(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Zn(t,r)}catch(r){await on(r)}}async function eg(n,e,t){const s=W(n);try{const r=await(function(a,u){const d=W(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let p;return d.mutationQueue.lookupMutationBatch(f,u).next((y=>(te(y!==null,37113),p=y.keys(),d.mutationQueue.removeMutationBatch(f,y)))).next((()=>d.mutationQueue.performConsistencyCheck(f))).next((()=>d.documentOverlayCache.removeOverlaysForBatchId(f,p,u))).next((()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p))).next((()=>d.localDocuments.getDocuments(f,p)))}))})(s.localStore,e);mu(s,e,t),fu(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Zn(s,r)}catch(r){await on(r)}}function fu(n,e){(n.yu.get(e)||[]).forEach((t=>{t.resolve()})),n.yu.delete(e)}function mu(n,e,t){const s=W(n);let r=s.pu[s.currentUser.toKey()];if(r){const o=r.get(e);o&&(t?o.reject(t):o.resolve(),r=r.remove(e)),s.pu[s.currentUser.toKey()]=r}}function Ni(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Vu.get(e))n.Au.delete(s),t&&n.Ru.Du(s,t);n.Vu.delete(e),n.isPrimaryClient&&n.gu.Gr(e).forEach((s=>{n.gu.containsKey(s)||pu(n,s)}))}function pu(n,e){n.du.delete(e.path.canonicalString());const t=n.mu.get(e);t!==null&&(eo(n.remoteStore,t),n.mu=n.mu.remove(e),n.fu.delete(t),lo(n))}function El(n,e,t){for(const s of t)s instanceof cu?(n.gu.addReference(s.key,e),tg(n,s)):s instanceof uu?(M(ao,"Document no longer in limbo: "+s.key),n.gu.removeReference(s.key,e),n.gu.containsKey(s.key)||pu(n,s.key)):$(19791,{Cu:s})}function tg(n,e){const t=e.key,s=t.path.canonicalString();n.mu.get(t)||n.du.has(s)||(M(ao,"New document in limbo: "+t),n.du.add(s),lo(n))}function lo(n){for(;n.du.size>0&&n.mu.size<n.maxConcurrentLimboResolutions;){const e=n.du.values().next().value;n.du.delete(e);const t=new U(oe.fromString(e)),s=n.wu.next();n.fu.set(s,new $p(t)),n.mu=n.mu.insert(t,s),eu(n.remoteStore,new Ye(ze(Ki(t.path)),s,"TargetPurposeLimboResolution",Ws.ce))}}async function Zn(n,e,t){const s=W(n),r=[],o=[],a=[];s.Au.isEmpty()||(s.Au.forEach(((u,d)=>{a.push(s.bu(d,e,t).then((f=>{var p;if((f||t)&&s.isPrimaryClient){const y=f?!f.fromCache:(p=t==null?void 0:t.targetChanges.get(d.targetId))==null?void 0:p.current;s.sharedClientState.updateQueryState(d.targetId,y?"current":"not-current")}if(f){r.push(f);const y=Ji.Es(d.targetId,f);o.push(y)}})))})),await Promise.all(a),s.Ru.H_(r),await(async function(d,f){const p=W(d);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>P.forEach(f,(v=>P.forEach(v.Ts,(R=>p.persistence.referenceDelegate.addReference(y,v.targetId,R))).next((()=>P.forEach(v.Is,(R=>p.persistence.referenceDelegate.removeReference(y,v.targetId,R)))))))))}catch(y){if(!an(y))throw y;M(Zi,"Failed to update sequence numbers: "+y)}for(const y of f){const v=y.targetId;if(!y.fromCache){const R=p.vs.get(v),j=R.snapshotVersion,b=R.withLastLimboFreeSnapshotVersion(j);p.vs=p.vs.insert(v,b)}}})(s.localStore,o))}async function ng(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){M(ao,"User change. New user:",e.toKey());const s=await Xc(t.localStore,e);t.currentUser=e,(function(o,a){o.yu.forEach((u=>{u.forEach((d=>{d.reject(new B(V.CANCELLED,a))}))})),o.yu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Zn(t,s.Ns)}}function sg(n,e){const t=W(n),s=t.fu.get(e);if(s&&s.Eu)return J().add(s.key);{let r=J();const o=t.Vu.get(e);if(!o)return r;for(const a of o){const u=t.Au.get(a);r=r.unionWith(u.view.ou)}return r}}function gu(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=du.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Jp.bind(null,e),e.Ru.H_=Bp.bind(null,e.eventManager),e.Ru.Du=Up.bind(null,e.eventManager),e}function rg(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Zp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eg.bind(null,e),e}class qs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sr(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return ap(this.persistence,new rp,e.initialUser,this.serializer)}xu(e){return new Qc(Yi.Vi,this.serializer)}Mu(e){return new mp}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qs.provider={build:()=>new qs};class ig extends qs{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){te(this.persistence.referenceDelegate instanceof Bs,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new zm(s,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?Ne.withCacheSize(this.cacheSizeBytes):Ne.DEFAULT;return new Qc((s=>Bs.Vi(s,t)),this.serializer)}}class Pi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>xl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ng.bind(null,this.syncEngine),await Mp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Op})()}createDatastore(e){const t=sr(e.databaseInfo.databaseId),s=xp(e.databaseInfo);return Tp(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,o,a,u){return new Ip(s,r,o,a,u)})(this.localStore,this.datastore,e.asyncQueue,(t=>xl(this.syncEngine,t,0)),(function(){return fl.v()?new fl:new pp})())}createSyncEngine(e,t){return(function(r,o,a,u,d,f,p){const y=new Kp(r,o,a,u,d,f);return p&&(y.Su=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const o=W(r);M(Qe,"RemoteStore shutting down."),o.da.add(5),await Jn(o),o.fa.shutdown(),o.ga.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Pi.provider={build:()=>new Pi};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Ze("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="FirestoreClient";class og{constructor(e,t,s,r,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=Ie.UNAUTHENTICATED,this.clientId=Li.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(s,(async a=>{M(vt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(s,(a=>(M(vt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=io(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function ei(n,e){n.asyncQueue.verifyOperationInProgress(),M(vt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await Xc(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function vl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ag(n);M(vt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>pl(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>pl(e.remoteStore,r))),n._onlineComponents=e}async function ag(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(vt,"Using user provided OfflineComponentProvider");try{await ei(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===V.FAILED_PRECONDITION||r.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Ot("Error using user provided cache. Falling back to memory cache: "+t),await ei(n,new qs)}}else M(vt,"Using default OfflineComponentProvider"),await ei(n,new ig(void 0));return n._offlineComponents}async function _u(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(vt,"Using user provided OnlineComponentProvider"),await vl(n,n._uninitializedComponentsProvider._online)):(M(vt,"Using default OnlineComponentProvider"),await vl(n,new Pi))),n._onlineComponents}function lg(n){return _u(n).then((e=>e.syncEngine))}async function Di(n){const e=await _u(n),t=e.eventManager;return t.onListen=Hp.bind(null,e.syncEngine),t.onUnlisten=Qp.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Gp.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Xp.bind(null,e.syncEngine),t}function cg(n,e,t,s){const r=new yu(s),o=new lu(e,r,t);return n.asyncQueue.enqueueAndForget((async()=>ou(await Di(n),o))),()=>{r.Ku(),n.asyncQueue.enqueueAndForget((async()=>au(await Di(n),o)))}}function ug(n,e,t={}){const s=new ft;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,u,d,f){const p=new yu({next:v=>{p.Ku(),a.enqueueAndForget((()=>au(o,y))),v.fromCache&&d.source==="server"?f.reject(new B(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(v)},error:v=>f.reject(v)}),y=new lu(u,p,{includeMetadataChanges:!0,Wa:!0});return ou(o,y)})(await Di(n),n.asyncQueue,e,t,s))),s.promise}function hg(n,e){const t=new ft;return n.asyncQueue.enqueueAndForget((async()=>Yp(await lg(n),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="ComponentProvider",wl=new Map;function fg(n,e,t,s,r){return new Vf(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,xu(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="firestore.googleapis.com",Al=!0;class Tl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Eu,this.ssl=Al}else this.host=e.host,this.ssl=e.ssl??Al;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Wc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Um)throw new B(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xu(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class or{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new df;switch(s.type){case"firstParty":return new gf(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new B(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=wl.get(t);s&&(M(dg,"Removing Datastore"),wl.delete(t),s.terminate())})(this),Promise.resolve()}}function mg(n,e,t,s={}){var f;n=qe(n,or);const r=Hl(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},u=`${e}:${t}`;r&&Wh(`https://${u}`),o.host!==Eu&&o.host!==u&&Ot("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...o,host:u,ssl:r,emulatorOptions:s};if(!Ns(d,a)&&(n._setSettings(d),s.mockUserToken)){let p,y;if(typeof s.mockUserToken=="string")p=s.mockUserToken,y=Ie.MOCK_USER;else{p=Oh(s.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new B(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Ie(v)}n._authCredentials=new ff(new oc(p,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new es(this.firestore,e,this._query)}}class ge{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ge(this.firestore,e,this._key)}toJSON(){return{type:ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Wn(t,ge._jsonSchema))return new ge(e,s||null,new U(oe.fromString(t.referencePath)))}}ge._jsonSchemaVersion="firestore/documentReference/1.0",ge._jsonSchema={type:fe("string",ge._jsonSchemaVersion),referencePath:fe("string")};class mt extends es{constructor(e,t,s){super(e,t,Ki(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ge(this.firestore,null,new U(e))}withConverter(e){return new mt(this.firestore,e,this._path)}}function Fe(n,e,...t){if(n=He(n),ac("collection","path",e),n instanceof or){const s=oe.fromString(e,...t);return La(s),new mt(n,null,s)}{if(!(n instanceof ge||n instanceof mt))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(oe.fromString(e,...t));return La(s),new mt(n.firestore,null,s)}}function Pt(n,e,...t){if(n=He(n),arguments.length===1&&(e=Li.newId()),ac("doc","path",e),n instanceof or){const s=oe.fromString(e,...t);return Ma(s),new ge(n,null,new U(s))}{if(!(n instanceof ge||n instanceof mt))throw new B(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(oe.fromString(e,...t));return Ma(s),new ge(n.firestore,n instanceof mt?n.converter:null,new U(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="AsyncQueue";class Il{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Jc(this,"async_queue_retry"),this.lc=()=>{const s=Zr();s&&M(bl,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.hc=e;const t=Zr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=Zr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise((()=>{}));const t=new ft;return this.Tc((()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.rc.push(e),this.Ic())))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!an(e))throw e;M(bl,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_((()=>this.Ic()))}}Tc(e){const t=this.hc.then((()=>(this.ac=!0,e().catch((s=>{throw this._c=s,this.ac=!1,Ze("INTERNAL UNHANDLED ERROR: ",Sl(s)),s})).then((s=>(this.ac=!1,s))))));return this.hc=t,t}enqueueAfterDelay(e,t,s){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const r=ro.createAndSchedule(this,e,t,s,(o=>this.Ec(o)));return this.oc.push(r),r}Pc(){this._c&&$(47125,{Rc:Sl(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then((()=>{this.oc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()}))}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function Sl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Bt extends or{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Il,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Il(e),this._firestoreClient=void 0,await e}}}function pg(n,e){const t=typeof n=="object"?n:Qd(),s=typeof n=="string"?n:Vs,r=$d(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const o=Mh("firestore");o&&mg(r,...o)}return r}function ar(n){if(n._terminated)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||gg(n),n._firestoreClient}function gg(n){var s,r,o,a;const e=n._freezeSettings(),t=fg(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new og(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this._byteString=e}static fromBase64String(e){try{return new je(we.fromBase64String(e))}catch(t){throw new B(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new je(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:je._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Wn(e,je._jsonSchema))return je.fromBase64String(e.bytes)}}je._jsonSchemaVersion="firestore/bytes/1.0",je._jsonSchema={type:fe("string",je._jsonSchemaVersion),bytes:fe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ke._jsonSchemaVersion}}static fromJSON(e){if(Wn(e,Ke._jsonSchema))return new Ke(e.latitude,e.longitude)}}Ke._jsonSchemaVersion="firestore/geoPoint/1.0",Ke._jsonSchema={type:fe("string",Ke._jsonSchemaVersion),latitude:fe("number"),longitude:fe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==r[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Me._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Wn(e,Me._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Me(e.vectorValues);throw new B(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Me._jsonSchemaVersion="firestore/vectorValue/1.0",Me._jsonSchema={type:fe("string",Me._jsonSchemaVersion),vectorValues:fe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=/^__.*__$/;class _g{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new At(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qn(e,this.data,t,this.fieldTransforms)}}class vu{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new At(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function wu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $(40011,{dataSource:n})}}class ho{constructor(e,t,s,r,o,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,o===void 0&&this.fc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new ho({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.i({path:t,arrayElement:!1});return s.wc(e),s}Sc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.i({path:t,arrayElement:!1});return s.fc(),s}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return zs(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(wu(this.dataSource)&&yg.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class xg{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||sr(e)}V(e,t,s,r=!1){return new ho({dataSource:e,methodName:t,targetDoc:s,path:ve.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Au(n){const e=n._freezeSettings(),t=sr(n._databaseId);return new xg(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Tu(n,e,t,s,r,o={}){const a=n.V(o.merge||o.mergeFields?2:0,e,t,r);fo("Data must be an object, but it was:",a,s);const u=bu(s,a);let d,f;if(o.merge)d=new Ve(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const y of o.mergeFields){const v=Gn(e,y,t);if(!a.contains(v))throw new B(V.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Ru(p,v)||p.push(v)}d=new Ve(p),f=a.fieldTransforms.filter((y=>d.covers(y.field)))}else d=null,f=a.fieldTransforms;return new _g(new Pe(u),d,f)}class lr extends uo{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lr}}function Eg(n,e,t,s){const r=n.V(1,e,t);fo("Data must be an object, but it was:",r,s);const o=[],a=Pe.empty();wt(s,((d,f)=>{const p=Su(e,d,t);f=He(f);const y=r.Sc(p);if(f instanceof lr)o.push(p);else{const v=cr(f,y);v!=null&&(o.push(p),a.set(p,v))}}));const u=new Ve(o);return new vu(a,u,r.fieldTransforms)}function vg(n,e,t,s,r,o){const a=n.V(1,e,t),u=[Gn(e,s,t)],d=[r];if(o.length%2!=0)throw new B(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<o.length;v+=2)u.push(Gn(e,o[v])),d.push(o[v+1]);const f=[],p=Pe.empty();for(let v=u.length-1;v>=0;--v)if(!Ru(f,u[v])){const R=u[v];let j=d[v];j=He(j);const b=a.Sc(R);if(j instanceof lr)f.push(R);else{const C=cr(j,b);C!=null&&(f.push(R),p.set(R,C))}}const y=new Ve(f);return new vu(p,y,a.fieldTransforms)}function cr(n,e){if(Iu(n=He(n)))return fo("Unsupported field value:",e,n),bu(n,e);if(n instanceof uo)return(function(s,r){if(!wu(r.dataSource))throw r.Dc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Dc(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(r);o&&r.fieldTransforms.push(o)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return(function(s,r){const o=[];let a=0;for(const u of s){let d=cr(u,r.bc(a));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),a++}return{arrayValue:{values:o}}})(n,e)}return(function(s,r){if((s=He(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return im(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=ae.fromDate(s);return{timestampValue:Os(r.serializer,o)}}if(s instanceof ae){const o=new ae(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Os(r.serializer,o)}}if(s instanceof Ke)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof je)return{bytesValue:Bc(r.serializer,s._byteString)};if(s instanceof ge){const o=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(o))throw r.Dc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Qi(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Me)return(function(a,u){const d=a instanceof Me?a.toArray():a;return{mapValue:{fields:{[gc]:{stringValue:yc},[ks]:{arrayValue:{values:d.map((p=>{if(typeof p!="number")throw u.Dc("VectorValues must only contain numeric values.");return Hi(u.serializer,p)}))}}}}}})(s,r);if(Gc(s))return s._toProto(r.serializer);throw r.Dc(`Unsupported field value: ${Oi(s)}`)})(n,e)}function bu(n,e){const t={};return uc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wt(n,((s,r)=>{const o=cr(r,e.yc(s));o!=null&&(t[s]=o)})),{mapValue:{fields:t}}}function Iu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ae||n instanceof Ke||n instanceof je||n instanceof ge||n instanceof uo||n instanceof Me||Gc(n))}function fo(n,e,t){if(!Iu(t)||!lc(t)){const s=Oi(t);throw s==="an object"?e.Dc(n+" a custom object"):e.Dc(n+" "+s)}}function Gn(n,e,t){if((e=He(e))instanceof co)return e._internalPath;if(typeof e=="string")return Su(n,e);throw zs("Field path arguments must be of type string or ",n,!1,void 0,t)}const wg=new RegExp("[~\\*/\\[\\]]");function Su(n,e,t){if(e.search(wg)>=0)throw zs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new co(...e.split("."))._internalPath}catch{throw zs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function zs(n,e,t,s,r){const o=s&&!s.isEmpty(),a=r!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let d="";return(o||a)&&(d+=" (found",o&&(d+=` in field ${s}`),a&&(d+=` in document ${r}`),d+=")"),new B(V.INVALID_ARGUMENT,u+n+d)}function Ru(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{convertValue(e,t="none"){switch(_t(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return wt(e,((r,o)=>{s[r]=this.convertValue(o,t)})),s}convertVectorValue(e){var s,r,o;const t=(o=(r=(s=e.fields)==null?void 0:s[ks].arrayValue)==null?void 0:r.values)==null?void 0:o.map((a=>ue(a.doubleValue)));return new Me(t)}convertGeoPoint(e){return new Ke(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Xs(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(qn(e));default:return null}}convertTimestamp(e){const t=gt(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=oe.fromString(e);te(Hc(s),9688,{name:e});const r=new zn(s.get(1),s.get(3)),o=new U(s.popFirst(5));return r.isEqual(t)||Ze(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends Ag{constructor(e){super(),this.firestore=e}convertBytes(e){return new je(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ge(this.firestore,null,t)}}const Rl="@firebase/firestore",Cl="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const r=t;for(const o of s)if(o in r&&typeof r[o]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t,s,r,o){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Tg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Gn("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Tg extends Cu{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function Pu(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class kn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jt extends Cu{constructor(e,t,s,r,o,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ss(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Gn("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=jt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}jt._jsonSchemaVersion="firestore/documentSnapshot/1.0",jt._jsonSchema={type:fe("string",jt._jsonSchemaVersion),bundleSource:fe("string","DocumentSnapshot"),bundleName:fe("string"),bundle:fe("string")};class Ss extends jt{data(e={}){return super.data(e)}}class Ft{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new kn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Ss(this._firestore,this._userDataWriter,s.key,s,new kn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,o){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((u=>{const d=new Ss(r._firestore,r._userDataWriter,u.doc.key,u.doc,new kn(r._snapshot.mutatedKeys.has(u.doc.key),r._snapshot.fromCache),r.query.converter);return u.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((u=>o||u.type!==3)).map((u=>{const d=new Ss(r._firestore,r._userDataWriter,u.doc.key,u.doc,new kn(r._snapshot.mutatedKeys.has(u.doc.key),r._snapshot.fromCache),r.query.converter);let f=-1,p=-1;return u.type!==0&&(f=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:bg(u.type),doc:d,oldIndex:f,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ft._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Li.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((o=>{o._document!==null&&(t.push(o._document),s.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),r.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function bg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft._jsonSchemaVersion="firestore/querySnapshot/1.0",Ft._jsonSchema={type:fe("string",Ft._jsonSchemaVersion),bundleSource:fe("string","QuerySnapshot"),bundleName:fe("string"),bundle:fe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Au(e)}set(e,t,s){this._verifyNotCommitted();const r=ti(e,this._firestore),o=Pu(r.converter,t,s),a=Tu(this._dataReader,"WriteBatch.set",r._key,o,r.converter!==null,s);return this._mutations.push(a.toMutation(r._key,ke.none())),this}update(e,t,s,...r){this._verifyNotCommitted();const o=ti(e,this._firestore);let a;return a=typeof(t=He(t))=="string"||t instanceof co?vg(this._dataReader,"WriteBatch.update",o._key,t,s,r):Eg(this._dataReader,"WriteBatch.update",o._key,t),this._mutations.push(a.toMutation(o._key,ke.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ti(e,this._firestore);return this._mutations=this._mutations.concat(new nr(t._key,ke.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ti(n,e){if((n=He(n)).firestore!==e)throw new B(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function Sg(n){n=qe(n,es);const e=qe(n.firestore,Bt),t=ar(e),s=new mo(e);return Nu(n._query),ug(t,n._query).then((r=>new Ft(e,s,n,r)))}function Rg(n,e,t){n=qe(n,ge);const s=qe(n.firestore,Bt),r=Pu(n.converter,e,t),o=Au(s);return po(s,[Tu(o,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,ke.none())])}function Cg(n){return po(qe(n.firestore,Bt),[new nr(n._key,ke.none())])}function ni(n,...e){var f,p,y;n=He(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Nl(e[s])||(t=e[s++]);const r={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Nl(e[s])){const v=e[s];e[s]=(f=v.next)==null?void 0:f.bind(v),e[s+1]=(p=v.error)==null?void 0:p.bind(v),e[s+2]=(y=v.complete)==null?void 0:y.bind(v)}let o,a,u;if(n instanceof ge)a=qe(n.firestore,Bt),u=Ki(n._key.path),o={next:v=>{e[s]&&e[s](Ng(a,n,v))},error:e[s+1],complete:e[s+2]};else{const v=qe(n,es);a=qe(v.firestore,Bt),u=v._query;const R=new mo(a);o={next:j=>{e[s]&&e[s](new Ft(a,R,v,j))},error:e[s+1],complete:e[s+2]},Nu(n._query)}const d=ar(a);return cg(d,u,r,o)}function po(n,e){const t=ar(n);return hg(t,e)}function Ng(n,e,t){const s=t.docs.get(e._key),r=new mo(n);return new jt(n,r,e._key,s,new kn(t.hasPendingWrites,t.fromCache),e.converter)}function si(n){return n=qe(n,Bt),ar(n),new Ig(n,(e=>po(n,e)))}(function(e,t=!0){hf(Wd),Ps(new On("firestore",((s,{instanceIdentifier:r,options:o})=>{const a=s.getProvider("app").getImmediate(),u=new Bt(new mf(s.getProvider("auth-internal")),new yf(a,s.getProvider("app-check-internal")),kf(a,r),a);return o={useFetchStreams:t,...o},u._setSettings(o),u}),"PUBLIC").setMultipleInstances(!0)),Xt(Rl,Cl,e),Xt(Rl,Cl,"esm2020")})();let $s=null;function Pg(n){const e=Xd().find(s=>s.name==="karwa");e&&Yd(e);const t=Xl(n,"karwa");return $s=pg(t),$s}function Dt(){return $s}function Es(){return $s!==null}const Du=q.createContext(null);function Nn(n,e){try{const t=localStorage.getItem(n);return t?JSON.parse(t):e}catch{return e}}function Dg({children:n}){const[e,t]=q.useState(()=>Nn("karwa_user",null)),[s,r]=q.useState(()=>Nn("karwa_locations",Rs)),[o,a]=q.useState(()=>Nn("karwa_tenants",Eh)),[u,d]=q.useState(()=>Nn("karwa_maintenance",vh)),[f,p]=q.useState(()=>Nn("karwa_gym",wh)),[y]=q.useState(xh),[v,R]=q.useState("offline"),j=q.useRef([]);q.useEffect(()=>{localStorage.setItem("karwa_locations",JSON.stringify(s))},[s]),q.useEffect(()=>{localStorage.setItem("karwa_tenants",JSON.stringify(o))},[o]),q.useEffect(()=>{localStorage.setItem("karwa_maintenance",JSON.stringify(u))},[u]),q.useEffect(()=>{e?localStorage.setItem("karwa_user",JSON.stringify(e)):localStorage.removeItem("karwa_user")},[e]),q.useEffect(()=>{const z=localStorage.getItem("karwa_firebase_config");if(z)try{b(JSON.parse(z))}catch{}},[]);function b(z){R("connecting");try{const K=Pg(z),Q=[];return Q.push(ni(Fe(K,"locations"),he=>{he.empty||r(he.docs.map(ne=>({...ne.data(),id:ne.id})))})),Q.push(ni(Fe(K,"tenants"),he=>{a(he.docs.map(ne=>({...ne.data(),id:ne.id})))})),Q.push(ni(Fe(K,"maintenance"),he=>{d(he.docs.map(ne=>({...ne.data(),id:ne.id})))})),j.current.forEach(he=>he()),j.current=Q,R("online"),!0}catch{return R("error"),!1}}const C=async z=>{const K=b(z);if(K){localStorage.setItem("karwa_firebase_config",JSON.stringify(z));const Q=Dt();(await Sg(Fe(Q,"locations"))).empty&&await k(Q)}return K},G=()=>{j.current.forEach(z=>z()),j.current=[],localStorage.removeItem("karwa_firebase_config"),R("offline")},k=async z=>{const K=si(z);s.forEach(Q=>K.set(Pt(Fe(z,"locations"),Q.id),Q)),o.forEach(Q=>K.set(Pt(Fe(z,"tenants"),Q.id),Q)),u.forEach(Q=>K.set(Pt(Fe(z,"maintenance"),Q.id),Q)),await K.commit()};async function O(z,K){Es()&&await Rg(Pt(Fe(Dt(),z),K.id),K)}async function D(z,K){Es()&&await Cg(Pt(Fe(Dt(),z),K))}const L=(z,K)=>z==="admin"&&K==="karwa2024"?(t({username:"admin",name:"Admin User",role:"Administrator"}),!0):!1,N=()=>t(null),x=async(z,K,Q)=>{const he=s.map(tt=>tt.id===z?{...tt,capacity:Number(K),occupancy:Number(Q)}:tt);r(he);const ne=he.find(tt=>tt.id===z);ne&&await O("locations",ne)},g=async z=>{if(r(z),Es()){const K=si(Dt());z.forEach(Q=>K.set(Pt(Fe(Dt(),"locations"),Q.id),Q)),await K.commit()}},E=async z=>{const K={...z,id:`T${Date.now()}`};a(Q=>[...Q,K]),await O("tenants",K)},A=async z=>{a(K=>K.filter(Q=>Q.id!==z)),await D("tenants",z)},w=async(z,K)=>{const Q=o.map(ne=>ne.id===z?{...ne,status:K}:ne);a(Q);const he=Q.find(ne=>ne.id===z);he&&await O("tenants",he)},I=async z=>{if(a(z),Es()){const K=si(Dt());z.forEach(Q=>K.set(Pt(Fe(Dt(),"tenants"),Q.id),Q)),await K.commit()}},_=async z=>{const K={...z,id:`MR${Date.now()}`,reportedDate:new Date().toISOString().slice(0,10),resolvedDate:null};d(Q=>[...Q,K]),await O("maintenance",K)},Ae=async(z,K)=>{const Q=u.map(ne=>ne.id===z?{...ne,status:K,resolvedDate:K==="Resolved"?new Date().toISOString().slice(0,10):ne.resolvedDate}:ne);d(Q);const he=Q.find(ne=>ne.id===z);he&&await O("maintenance",he)},Xe=z=>{d(z),localStorage.setItem("karwa_maintenance",JSON.stringify(z))},hr=z=>{p(z),localStorage.setItem("karwa_gym",JSON.stringify(z))};return c.jsx(Du.Provider,{value:{user:e,login:L,logout:N,locations:s,tenants:o,maintenance:u,gymMembers:f,familyUnits:y,syncStatus:v,connectToFirebase:C,disconnectFirebase:G,pushLocalDataToFirebase:k,addTenant:E,removeTenant:A,updateTenantStatus:w,importTenants:I,addMaintenanceRequest:_,updateMaintenanceStatus:Ae,importMaintenance:Xe,importGymMembers:hr,updateLocationCapacity:x,importLocations:g},children:n})}const Tt=()=>q.useContext(Du);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Vu=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=q.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:r="",children:o,iconNode:a,...u},d)=>q.createElement("svg",{ref:d,...kg,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:Vu("lucide",r),...u},[...a.map(([f,p])=>q.createElement(f,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=(n,e)=>{const t=q.forwardRef(({className:s,...r},o)=>q.createElement(jg,{ref:o,iconNode:e,className:Vu(`lucide-${Vg(n)}`,s),...r}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=re("BedDouble",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=re("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=re("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=re("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=re("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=re("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=re("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=re("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=re("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=re("Dumbbell",[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=re("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=re("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=re("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=re("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=re("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=re("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=re("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=re("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=re("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=re("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=re("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=re("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=re("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=re("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=re("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=re("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=re("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Yg="modulepreload",Jg=function(n){return"/Mowasalat-Self-Cooking-Booking/"+n},kl={},Zg=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){let a=function(f){return Promise.all(f.map(p=>Promise.resolve(p).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),d=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));r=a(t.map(f=>{if(f=Jg(f),f in kl)return;kl[f]=!0;const p=f.endsWith(".css"),y=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${y}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":Yg,p||(v.as="script"),v.crossOrigin="",v.href=f,d&&v.setAttribute("nonce",d),document.head.appendChild(v),p)return new Promise((R,j)=>{v.addEventListener("load",R),v.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(a){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=a,window.dispatchEvent(u),!u.defaultPrevented)throw a}return r.then(a=>{for(const u of a||[])u.status==="rejected"&&o(u.reason);return e().catch(o)})};function ju({title:n,onClose:e,children:t,wide:s=!1}){return q.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4",onClick:e,children:c.jsxs("div",{className:`bg-white rounded-3xl shadow-2xl border border-slate-100 w-full mx-4 ${s?"max-w-2xl":"max-w-lg"} max-h-[90vh] flex flex-col animate-fade-in`,onClick:r=>r.stopPropagation(),children:[c.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0] shrink-0",children:[c.jsx("h3",{className:"text-base font-bold text-[#0F172A]",children:n}),c.jsx("button",{onClick:e,className:"w-8 h-8 flex items-center justify-center rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all duration-200",children:c.jsx(Xg,{size:18})})]}),c.jsx("div",{className:"p-6 overflow-y-auto",children:t})]})})}const Fu=[{key:"masterList",label:"MASTER LIST",desc:"Staff accommodation occupancy (NEW_MASTER_LIST…)",sheetHints:["MASTER LIST","TOTAL SUMMARY"],color:"bg-blue-50 border-blue-200 text-blue-700"},{key:"facilities",label:"Facilities Inspection",desc:"Maintenance & inspection actions (Facilities_Inspection…)",sheetHints:["query","Location Summary"],color:"bg-amber-50 border-amber-200 text-amber-700"},{key:"gym",label:"GYM Subscription",desc:"Gym members data (GYM_SUBSCRIPTION_DATA…)",sheetHints:["GYM MASTER LIST","COST CENTER"],color:"bg-green-50 border-green-200 text-green-700"}];function Gs(n){return!n||typeof n!="number"?"":new Date((n-25569)*864e5).toISOString().slice(0,10)}const ey={Dukhan:"DUKHAN","AL Ghuwariyah":"ALGHUWARIYAH","Al Ghuwariyah":"ALGHUWARIYAH","Al Khor Depot":"AKD","Al Khor Old Depot":"AKD","Al Rayyan Depot":"ARD","Al Sadd Accommodations":"AL-SAAD","Al Shamal":"AL-SHAMAL","Al Thumama":"AL-THUMAMA","Al Wakra Depot ":"AL-WAKRA","Al Wakra Depot":"AL-WAKRA","Industrial Area Depot ":"IND","Industrial Area Depot":"IND","Karwa City":"KARWA-CITY","Lusail Depot":"LUD","Mesaimeer Depot":"MSD","Mowasalat HQ":"MSD","QE Zekrit Al Mukthar Camp ":"QE-ZEKREET","QE Zekrit Al Mukthar Camp":"QE-ZEKREET","Wadi Aba Saleel Depot ":"WAD","Wadi Aba Saleel Depot":"WAD","Zekreet - Dukhan":"DUKHAN"},ty={"KARWA CITY":"KARWA-CITY",MSD:"MSD",WAD:"WAD",ARD:"ARD",LUD:"LUD",AKD:"AKD","INDUSTRIAL AREA":"IND","AL WAKRA":"AL-WAKRA","AL SHAMAL":"AL-SHAMAL","NEW ALKHOR":"NEW-ALKHOR","QE- ZEKREET":"QE-ZEKREET","MEHE DUKHAN":"DUKHAN",ALGHUWARIYAH:"ALGHUWARIYAH"},ny={"Karwa City":"KARWA-CITY",MSD:"MSD",AKD:"AKD",ARD:"ARD",IND:"IND",LUD:"LUD",WAD:"WAD"},sy={High:"Critical",Mid:"High",Low:"Medium"},ry={Completed:"Resolved",Pending:"Open","Pending (Internal)":"In Progress",Cancelled:"Resolved"};function iy(n){const e=n.SheetNames;for(const t of Fu)if(t.sheetHints.some(s=>e.some(r=>r.trim().toLowerCase().includes(s.toLowerCase()))))return t.key;return null}function oy(n){const e=n.Sheets["MASTER LIST"];if(!e)throw new Error('Sheet "MASTER LIST" not found');const r=window._XLSX.utils.sheet_to_json(e,{defval:""}).filter(a=>a["Empl#"]!==""&&a["                Name"]!=="");let o=1;return r.map(a=>({id:"T"+String(o++).padStart(4,"0"),name:(a["                Name"]||"").trim(),employeeId:String(a["Empl#"]),department:(a.Department||"").trim(),nationality:a.Nationality||"",locationId:ty[a.Location]||a.Location,room:a["Room no."]||"",phone:a["Mobile no."]?String(a["Mobile no."]):"",status:"Active",checkIn:"2024-01-01",remarks:a.Remarks||""}))}function ay(n){const e=n.Sheets.query;if(!e)throw new Error('Sheet "query" not found');return window._XLSX.utils.sheet_to_json(e,{defval:""}).map((r,o)=>{const a=(r.Action||"").replace(/\r\n/g," ").trim().slice(0,120);return a.length<3?null:{id:"FAC-"+String(o+1).padStart(4,"0"),title:a,description:a,locationId:ey[String(r.Location||"").trim()]||"KARWA-CITY",locationName:String(r.Location||"").trim(),discipline:String(r.Discipline||""),service:String(r.Service||""),status:ry[r.Status]||"Open",priority:sy[r.Priority]||"Medium",reportedDate:Gs(r.Date)||"2026-01-01",resolvedDate:Gs(r["Closing Date "]),reportedBy:String(r["Created By"]||"Facilities Team"),assignedTo:String(r.AssignedTo||"")}}).filter(Boolean)}function ly(n){const e=n.Sheets["GYM MASTER LIST"];if(!e)throw new Error('Sheet "GYM MASTER LIST" not found');return window._XLSX.utils.sheet_to_json(e,{header:1,defval:""}).slice(5).filter(r=>r[0]!==""&&r[2]!=="").map(r=>({id:"GYM-"+String(r[0]).padStart(4,"0"),srNo:r[0],depot:r[1]||"",locationId:ny[r[1]]||"KARWA-CITY",empNo:String(r[2]).trim(),name:String(r[3]).trim(),nationality:r[4]||"",department:r[5]||"",contact:r[6]?String(r[6]):"",subscriptionDate:Gs(r[7]),expiryDate:Gs(r[8]),daysLeft:typeof r[9]=="number"?r[9]:0,status:r[10]||"Active"}))}function cy({onClose:n}){const{importMaintenance:e,importTenants:t,importGymMembers:s}=Tt(),[r,o]=q.useState({}),[a,u]=q.useState(!!window._XLSX),[d,f]=q.useState(!1),p=q.useRef(),y=async()=>{if(window._XLSX){u(!0);return}f(!0);try{const b=await Zg(()=>import("./xlsx-CkFp8p6R.js"),[]);window._XLSX=b,u(!0)}catch{alert("Failed to load xlsx library")}f(!1)},v=async b=>{window._XLSX||await y();const C=window._XLSX;try{const G=await b.arrayBuffer(),k=C.read(G,{type:"array"}),O=iy(k);if(!O){o(N=>({...N,unknown:{name:b.name,status:"error",error:"Unrecognized file format"}}));return}o(N=>({...N,[O]:{name:b.name,status:"parsing"}}));let D,L;O==="masterList"?(D=oy(k),L=D.length,t(D)):O==="facilities"?(D=ay(k),L=D.length,e(D)):O==="gym"&&(D=ly(k),L=D.length,s(D)),o(N=>({...N,[O]:{name:b.name,status:"done",count:L}}))}catch(G){const k="error_"+Date.now();o(O=>({...O,[k]:{name:b.name,status:"error",error:G.message}}))}},R=b=>{b.preventDefault(),Array.from(b.dataTransfer.files).forEach(v)},j=Object.values(r).filter(b=>b.status==="done").length;return c.jsx(ju,{title:"Import / Refresh Data",onClose:n,wide:!0,children:c.jsxs("div",{className:"space-y-5",children:[c.jsx("p",{className:"text-sm text-gray-500",children:"Upload any of the 3 Excel files to refresh the live data. The app auto-detects the file type."}),c.jsx("div",{className:"grid grid-cols-1 gap-2",children:Fu.map(b=>{var C;return c.jsxs("div",{className:`flex items-center gap-3 rounded-xl border px-4 py-3 ${b.color}`,children:[c.jsx(zg,{size:16,className:"shrink-0"}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("div",{className:"font-semibold text-sm",children:b.label}),c.jsx("div",{className:"text-xs opacity-80",children:b.desc})]}),r[b.key]&&c.jsxs("div",{className:"shrink-0 text-xs font-medium flex items-center gap-1",children:[r[b.key].status==="parsing"&&c.jsx(Vl,{size:12,className:"animate-spin"}),r[b.key].status==="done"&&c.jsxs(c.Fragment,{children:[c.jsx(Dl,{size:13})," ",(C=r[b.key].count)==null?void 0:C.toLocaleString()," rows"]}),r[b.key].status==="error"&&c.jsxs(c.Fragment,{children:[c.jsx(Pl,{size:13,className:"text-red-500"})," Error"]})]})]},b.key)})}),a?c.jsxs("div",{onDrop:R,onDragOver:b=>b.preventDefault(),onClick:()=>{var b;return(b=p.current)==null?void 0:b.click()},className:"border-2 border-dashed border-gray-300 hover:border-[#8CC63F] rounded-xl p-8 text-center cursor-pointer transition-colors group",children:[c.jsx(Vi,{size:28,className:"mx-auto text-gray-300 group-hover:text-[#8CC63F] mb-3 transition-colors"}),c.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Drop Excel files here or click to browse"}),c.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Supports .xlsx and .xls · Multiple files at once"}),c.jsx("input",{ref:p,type:"file",accept:".xlsx,.xls",multiple:!0,className:"hidden",onChange:b=>Array.from(b.target.files).forEach(v)})]}):c.jsx("button",{onClick:y,disabled:d,className:"w-full bg-[#8CC63F] hover:bg-[#7AB035] disabled:opacity-50 text-white py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2",children:d?c.jsxs(c.Fragment,{children:[c.jsx(Vl,{size:15,className:"animate-spin"})," Loading…"]}):c.jsxs(c.Fragment,{children:[c.jsx(Vi,{size:15})," Load Excel Library First"]})}),Object.values(r).filter(b=>b.status==="error").map((b,C)=>c.jsxs("div",{className:"flex items-start gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3",children:[c.jsx(Pl,{size:15,className:"mt-0.5 shrink-0"}),c.jsxs("span",{children:[c.jsxs("strong",{children:[b.name,":"]})," ",b.error]})]},C)),j>0&&c.jsxs("div",{className:"flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl p-3",children:[c.jsx(Dl,{size:15,className:"shrink-0"}),j," file",j>1?"s":""," imported successfully — data updated live."]}),c.jsxs("div",{className:"flex gap-3 pt-1",children:[c.jsx("button",{onClick:n,className:"flex-1 border border-gray-300 text-gray-600 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50",children:"Close"}),j>0&&c.jsx("button",{onClick:()=>{n(),window.location.reload()},className:"flex-1 bg-[#8CC63F] hover:bg-[#7AB035] text-white py-2.5 rounded-lg text-sm font-medium",children:"Reload App"})]})]})})}const uy=[{to:"/",label:"Dashboard",icon:$g,end:!0},{to:"/housing",label:"Housing Info",icon:Hs},{to:"/maintenance",label:"Maintenance",icon:yo},{to:"/gym",label:"Gym Members",icon:ur}];function hy(){const{user:n,logout:e,maintenance:t}=Tt(),s=Bl(),[r,o]=q.useState(!1),[a,u]=q.useState(!1),d=t.filter(y=>y.status==="Open"||y.status==="Pending"||y.status==="In Progress"||y.status==="Pending (Internal)").length,f=()=>{e(),s("/login")},p=()=>{var y;return c.jsxs("aside",{className:"w-64 bg-[#0F172A] text-white flex flex-col h-full",children:[c.jsx("div",{className:"px-5 py-5 border-b border-white/[0.07]",children:c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"w-10 h-10 bg-[#8CC63F] rounded-xl flex items-center justify-center shrink-0 shadow-lg",children:c.jsx("span",{className:"text-white font-black text-lg",children:"M"})}),c.jsxs("div",{children:[c.jsx("div",{className:"font-bold text-sm leading-tight text-white tracking-wide",children:"MOWASALAT"}),c.jsx("div",{className:"text-[#8CC63F] text-xs font-medium mt-0.5",children:"Accommodation"})]})]})}),c.jsx("nav",{className:"flex-1 px-3 py-4 space-y-1",children:uy.map(({to:v,label:R,icon:j,end:b})=>c.jsxs(ph,{to:v,end:b,onClick:()=>o(!1),className:({isActive:C})=>`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${C?"bg-[#8CC63F] text-white shadow-sm":"text-slate-400 hover:text-white hover:bg-white/5"}`,children:[c.jsx(j,{size:18}),c.jsx("span",{className:"flex-1",children:R}),R==="Maintenance"&&d>0&&c.jsx("span",{className:"bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shrink-0",children:d>99?"99+":d})]},v))}),c.jsxs("div",{className:"px-3 py-4 border-t border-white/[0.07] space-y-2",children:[c.jsxs("div",{className:"flex items-center gap-3 px-2 py-1",children:[c.jsx("div",{className:"w-8 h-8 bg-[#8CC63F] rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0",children:(y=n==null?void 0:n.name)==null?void 0:y[0]}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("div",{className:"text-sm font-semibold text-white truncate",children:n==null?void 0:n.name}),c.jsx("div",{className:"text-xs text-slate-500",children:n==null?void 0:n.role})]})]}),c.jsxs("button",{onClick:f,className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200",children:[c.jsx(Hg,{size:15})," Sign Out"]})]})]})};return c.jsxs("div",{className:"flex h-screen bg-[#F1F5F9] overflow-hidden",children:[c.jsx("div",{className:"hidden md:flex shrink-0",children:c.jsx(p,{})}),r&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden",onClick:()=>o(!1)}),c.jsx("div",{className:"fixed inset-y-0 left-0 z-50 md:hidden",children:c.jsx(p,{})})]}),c.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[c.jsxs("header",{className:"bg-white border-b border-[#E2E8F0] px-4 md:px-6 py-3 flex items-center gap-3 shrink-0",children:[c.jsx("button",{className:"md:hidden text-slate-500 hover:text-slate-800 transition-colors",onClick:()=>o(!0),children:c.jsx(Gg,{size:22})}),c.jsx("span",{className:"font-bold text-[#0F172A] text-sm",children:"Karwa Accommodation"}),c.jsxs("button",{onClick:()=>u(!0),className:"ml-auto flex items-center gap-1.5 border border-[#E2E8F0] text-slate-600 hover:border-[#8CC63F] hover:text-[#6BA32D] px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200",children:[c.jsx(Vi,{size:13})," Import Data"]}),c.jsx("span",{className:"text-sm text-slate-400 hidden sm:block",children:new Date().toLocaleDateString("en-GB",{weekday:"short",year:"numeric",month:"short",day:"numeric"})})]}),c.jsx("main",{className:"flex-1 overflow-y-auto p-4 md:p-6",children:c.jsx(mh,{})})]}),a&&c.jsx(cy,{onClose:()=>u(!1)})]})}const dy=[{icon:Ks,label:"Total Beds",value:"15,619",sub:"Across 13 depots"},{icon:ur,label:"Gym Members",value:"1,755",sub:"Active subscriptions"},{icon:Og,label:"Inspection Records",value:"2,179",sub:"Facilities tracked"}];function fy(){const{login:n}=Tt(),e=Bl(),[t,s]=q.useState({username:"",password:""}),[r,o]=q.useState(!1),[a,u]=q.useState(""),[d,f]=q.useState(!1),p=async y=>{y.preventDefault(),u(""),f(!0),await new Promise(v=>setTimeout(v,400)),n(t.username,t.password)?e("/"):u("Invalid username or password."),f(!1)};return c.jsxs("div",{className:"min-h-screen flex",children:[c.jsxs("div",{className:"hidden md:flex md:w-1/2 bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex-col justify-between p-10 relative overflow-hidden",children:[c.jsx("div",{className:"absolute inset-0 opacity-[0.04]",style:{backgroundImage:"radial-gradient(circle at 1px 1px, #8CC63F 1px, transparent 0)",backgroundSize:"28px 28px"}}),c.jsxs("div",{className:"relative z-10",children:[c.jsx("div",{className:"w-14 h-14 rounded-2xl bg-[#8CC63F] flex items-center justify-center shadow-lg mb-6",children:c.jsx("span",{className:"text-white font-black text-2xl",children:"M"})}),c.jsx("h1",{className:"text-white font-bold text-2xl leading-snug",children:"MOWASALAT"}),c.jsx("p",{className:"text-[#8CC63F] font-semibold text-sm tracking-wide mt-1",children:"Accommodation Management Portal"}),c.jsx("p",{className:"text-slate-400 text-sm mt-4 leading-relaxed max-w-xs",children:"Centralised housing and facilities management for Karwa Transport operations across Qatar."})]}),c.jsx("div",{className:"relative z-10 space-y-3",children:dy.map(({icon:y,label:v,value:R,sub:j})=>c.jsxs("div",{className:"flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#8CC63F]/20 flex items-center justify-center shrink-0",children:c.jsx(y,{size:18,className:"text-[#8CC63F]"})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("div",{className:"text-white font-bold text-lg leading-none",children:R}),c.jsx("div",{className:"text-slate-400 text-xs mt-0.5",children:v})]}),c.jsx("div",{className:"text-slate-500 text-xs text-right hidden sm:block",children:j})]},v))}),c.jsxs("div",{className:"relative z-10 text-slate-600 text-xs",children:["© ",new Date().getFullYear()," Mowasalat (Karwa). All rights reserved."]})]}),c.jsx("div",{className:"flex-1 bg-white flex items-center justify-center p-6 sm:p-10",children:c.jsxs("div",{className:"w-full max-w-sm animate-fade-in",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-8 md:hidden",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#8CC63F] flex items-center justify-center shadow",children:c.jsx("span",{className:"text-white font-black text-lg",children:"M"})}),c.jsxs("div",{children:[c.jsx("div",{className:"font-bold text-[#0F172A] text-sm leading-tight",children:"MOWASALAT"}),c.jsx("div",{className:"text-[#8CC63F] text-xs font-medium",children:"Accommodation Portal"})]})]}),c.jsx("div",{className:"hidden md:flex w-12 h-12 rounded-2xl bg-[#8CC63F] items-center justify-center shadow mb-6",children:c.jsx("span",{className:"text-white font-black text-xl",children:"K"})}),c.jsx("h2",{className:"text-2xl font-bold text-[#0F172A] mb-1",children:"Welcome back"}),c.jsx("p",{className:"text-slate-500 text-sm mb-7",children:"Sign in to your account to continue"}),a&&c.jsx("div",{className:"bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-5",children:a}),c.jsxs("form",{onSubmit:p,className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-[#0F172A] mb-1.5",children:"Username"}),c.jsx("input",{type:"text",value:t.username,onChange:y=>s(v=>({...v,username:y.target.value})),className:"w-full border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-transparent transition-all duration-200",placeholder:"Enter your username",required:!0,autoComplete:"username"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-[#0F172A] mb-1.5",children:"Password"}),c.jsxs("div",{className:"relative",children:[c.jsx("input",{type:r?"text":"password",value:t.password,onChange:y=>s(v=>({...v,password:y.target.value})),className:"w-full border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 pr-11 focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-transparent transition-all duration-200",placeholder:"Enter your password",required:!0,autoComplete:"current-password"}),c.jsx("button",{type:"button",onClick:()=>o(y=>!y),className:"absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors",children:r?c.jsx(Ug,{size:16}):c.jsx(qg,{size:16})})]})]}),c.jsx("button",{type:"submit",disabled:d,className:"w-full bg-[#8CC63F] hover:bg-[#6BA32D] disabled:opacity-60 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200 mt-2 shadow-sm",children:d?c.jsx("span",{className:"w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"}):c.jsxs(c.Fragment,{children:[c.jsx(Kg,{size:16})," Sign In"]})})]}),c.jsxs("p",{className:"text-center text-xs text-slate-400 mt-6",children:["Default credentials:"," ",c.jsx("code",{className:"bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono",children:"admin"})," / ",c.jsx("code",{className:"bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono",children:"karwa2024"})]})]})})]})}const vs="#8CC63F",my="#F59E0B",py="#CBD5E1",Be=["#8CC63F","#3B82F6","#F59E0B","#6366F1","#EF4444","#10B981","#F97316","#EC4899","#14B8A6","#374151","#A855F7","#84CC16","#06B6D4","#64748B"];function ct({icon:n,label:e,value:t,sub:s,accent:r}){return c.jsxs("div",{className:"bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-5 flex items-center gap-4",children:[c.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${r}`,children:c.jsx(n,{size:22,className:"text-white"})}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("div",{className:"text-2xl font-bold text-[#0F172A] leading-none",children:t}),c.jsx("div",{className:"text-sm font-medium text-[#64748B] mt-1",children:e}),s&&c.jsx("div",{className:"text-xs text-[#94A3B8] mt-0.5",children:s})]})]})}const ii=({active:n,payload:e,label:t})=>!n||!(e!=null&&e.length)?null:c.jsxs("div",{className:"bg-white border border-[#E2E8F0] rounded-xl shadow-lg p-3 text-sm",children:[c.jsx("p",{className:"font-semibold text-[#0F172A] mb-1",children:t}),e.map((s,r)=>c.jsxs("p",{style:{color:s.color},className:"font-medium",children:[s.name,": ",Number(s.value).toLocaleString()]},r))]}),jl=({active:n,payload:e})=>{var r,o,a,u;if(!n||!(e!=null&&e.length))return null;const t=((o=(r=e[0])==null?void 0:r.payload)==null?void 0:o.total)||1,s=((a=e[0])==null?void 0:a.value)||0;return c.jsxs("div",{className:"bg-white border border-[#E2E8F0] rounded-xl shadow-lg p-3 text-sm",children:[c.jsx("p",{className:"font-semibold text-[#0F172A]",children:(u=e[0])==null?void 0:u.name}),c.jsxs("p",{className:"text-[#64748B]",children:[s.toLocaleString()," (",Math.round(s/t*100),"%)"]})]})},Fl=({cx:n,cy:e,midAngle:t,innerRadius:s,outerRadius:r,percent:o})=>{if(o<.05)return null;const a=Math.PI/180,u=s+(r-s)*.55;return c.jsx("text",{x:n+u*Math.cos(-t*a),y:e+u*Math.sin(-t*a),fill:"white",textAnchor:"middle",dominantBaseline:"central",fontSize:11,fontWeight:"700",children:`${(o*100).toFixed(0)}%`})};function gy(){const{maintenance:n}=Tt(),e=lt.occupiedMowasalat+lt.occupiedContractor,t=Math.round(e/lt.totalBeds*100),s=n.filter(b=>b.status==="Open"||b.status==="Pending"||b.status==="In Progress"||b.status==="Pending (Internal)").length,r=Rs.filter(b=>b.category.includes("Staff")).map(b=>({name:b.name.replace(" Depot","").replace(" (MSD)","").replace(" (AKD)","").replace(" (ARD)","").replace(" (LUD)","").replace(" (WAD)",""),Occupied:b.occupancy,Vacant:(b.capacity||0)-(b.occupancy||0)})).sort((b,C)=>C.Occupied-b.Occupied),o=[...Fr].sort((b,C)=>C.total-b.total).slice(0,8),a=Mr.reduce((b,C)=>b+C.value,0),u=Lr.reduce((b,C)=>b+C.value,0),d=Mr.map(b=>({...b,total:a})),f=Lr.map(b=>({...b,total:u})),p=Fr.reduce((b,C)=>b+C.completed,0),y=Fr.reduce((b,C)=>b+C.pending,0),v=p+y,R=v>0?Math.round(p/v*100):0,j=new Date().toLocaleDateString("en-GB",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return c.jsxs("div",{className:"space-y-6 animate-fade-in",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-bold text-[#0F172A]",children:"Analytics Dashboard"}),c.jsxs("p",{className:"text-sm text-[#64748B]",children:["Mowasalat Accommodation — Live overview · ",j]})]}),c.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4",children:[c.jsx(ct,{icon:Hs,label:"Total Beds",value:lt.totalBeds.toLocaleString(),sub:"Across 13 depots",accent:"bg-slate-800"}),c.jsx(ct,{icon:ki,label:"Occupied",value:e.toLocaleString(),sub:`${t}% utilisation`,accent:"bg-[#8CC63F]"}),c.jsx(ct,{icon:Ks,label:"Vacant Beds",value:lt.vacant.toLocaleString(),sub:"Available now",accent:"bg-indigo-500"}),c.jsx(ct,{icon:yo,label:"Pending Issues",value:s.toLocaleString(),sub:"Open maintenance",accent:"bg-red-500"})]}),c.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4",children:[c.jsx(ct,{icon:ur,label:"Gym Members",value:lt.gymMembers.toLocaleString(),sub:"Active subscriptions",accent:"bg-amber-500"}),c.jsx(ct,{icon:ku,label:"Family Units",value:lt.familyUnits.toLocaleString(),sub:"Al Thumama / Al Saad / Mansoura",accent:"bg-teal-500"}),c.jsx(ct,{icon:Qg,label:"Utilisation %",value:`${t}%`,sub:"Across all depots",accent:"bg-[#8CC63F]"}),c.jsx(ct,{icon:ki,label:"Contractor Beds",value:lt.occupiedContractor.toLocaleString(),sub:"External contractors",accent:"bg-slate-500"})]}),c.jsxs("div",{className:"bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-5",children:[c.jsx("h3",{className:"font-bold text-[#0F172A] mb-1",children:"Depot Occupancy Overview"}),c.jsx("p",{className:"text-xs text-[#94A3B8] mb-4",children:"Occupied vs vacant beds across all 13 staff depots"}),c.jsx(bn,{width:"100%",height:300,children:c.jsxs(Br,{data:r,margin:{top:4,right:20,left:0,bottom:64},children:[c.jsx(Ur,{strokeDasharray:"3 3",stroke:"#F1F5F9"}),c.jsx(qr,{dataKey:"name",tick:{fontSize:11,fill:"#64748B"},angle:-40,textAnchor:"end",interval:0}),c.jsx(zr,{tick:{fontSize:11,fill:"#64748B"},tickFormatter:b=>b>=1e3?`${b/1e3}k`:b}),c.jsx(In,{content:c.jsx(ii,{})}),c.jsx(_a,{wrapperStyle:{fontSize:12,paddingTop:8}}),c.jsx(Sn,{dataKey:"Occupied",fill:vs,radius:[3,3,0,0]}),c.jsx(Sn,{dataKey:"Vacant",fill:"#E2E8F0",radius:[3,3,0,0]})]})})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-5",children:[c.jsxs("div",{className:"bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-5",children:[c.jsx("h3",{className:"font-bold text-[#0F172A] mb-1",children:"By Nationality"}),c.jsxs("p",{className:"text-xs text-[#94A3B8] mb-3",children:["Total: ",a.toLocaleString()," residents"]}),c.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-4",children:[c.jsx("div",{className:"shrink-0",children:c.jsx(bn,{width:190,height:190,children:c.jsxs(xa,{children:[c.jsx(Ea,{data:d,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:85,innerRadius:45,labelLine:!1,label:c.jsx(Fl,{}),children:d.map((b,C)=>c.jsx($r,{fill:Be[C%Be.length]},C))}),c.jsx(In,{content:c.jsx(jl,{})})]})})}),c.jsx("div",{className:"flex-1 grid grid-cols-1 gap-1.5 min-w-0",children:Mr.map((b,C)=>c.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[c.jsx("span",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{backgroundColor:Be[C%Be.length]}}),c.jsx("span",{className:"text-[#64748B] flex-1 truncate",children:b.name}),c.jsx("span",{className:"font-semibold text-[#0F172A]",children:b.value.toLocaleString()})]},b.name))})]})]}),c.jsxs("div",{className:"bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-5",children:[c.jsx("h3",{className:"font-bold text-[#0F172A] mb-1",children:"By Department"}),c.jsxs("p",{className:"text-xs text-[#94A3B8] mb-3",children:["Total: ",u.toLocaleString()," residents"]}),c.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-4",children:[c.jsx("div",{className:"shrink-0",children:c.jsx(bn,{width:190,height:190,children:c.jsxs(xa,{children:[c.jsx(Ea,{data:f,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:85,innerRadius:45,labelLine:!1,label:c.jsx(Fl,{}),children:f.map((b,C)=>c.jsx($r,{fill:Be[C%Be.length]},C))}),c.jsx(In,{content:c.jsx(jl,{})})]})})}),c.jsx("div",{className:"flex-1 grid grid-cols-1 gap-1.5 min-w-0",children:Lr.map((b,C)=>c.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[c.jsx("span",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{backgroundColor:Be[C%Be.length]}}),c.jsx("span",{className:"text-[#64748B] flex-1 truncate",children:b.name}),c.jsx("span",{className:"font-semibold text-[#0F172A]",children:b.value.toLocaleString()})]},b.name))})]})]})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-5",children:[c.jsxs("div",{className:"bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-5",children:[c.jsx("h3",{className:"font-bold text-[#0F172A] mb-1",children:"Inspection Status by Location"}),c.jsx("p",{className:"text-xs text-[#94A3B8] mb-3",children:"Top 8 locations by total inspections"}),c.jsx(bn,{width:"100%",height:260,children:c.jsxs(Br,{data:o,layout:"vertical",margin:{top:0,right:20,left:100,bottom:0},children:[c.jsx(Ur,{strokeDasharray:"3 3",stroke:"#F1F5F9",horizontal:!1}),c.jsx(qr,{type:"number",tick:{fontSize:10,fill:"#64748B"}}),c.jsx(zr,{type:"category",dataKey:"name",tick:{fontSize:10,fill:"#0F172A"},width:100}),c.jsx(In,{content:c.jsx(ii,{})}),c.jsx(_a,{wrapperStyle:{fontSize:11}}),c.jsx(Sn,{dataKey:"completed",name:"Completed",fill:vs,stackId:"a",radius:[0,0,0,0]}),c.jsx(Sn,{dataKey:"pending",name:"Pending",fill:my,stackId:"a",radius:[0,3,3,0]})]})})]}),c.jsxs("div",{className:"bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-5",children:[c.jsx("h3",{className:"font-bold text-[#0F172A] mb-1",children:"Gym Members by Depot"}),c.jsxs("p",{className:"text-xs text-[#94A3B8] mb-3",children:["Total: ",Or.reduce((b,C)=>b+C.count,0).toLocaleString()," members"]}),c.jsx(bn,{width:"100%",height:260,children:c.jsxs(Br,{data:Or,margin:{top:4,right:20,left:0,bottom:10},children:[c.jsx(Ur,{strokeDasharray:"3 3",stroke:"#F1F5F9"}),c.jsx(qr,{dataKey:"name",tick:{fontSize:11,fill:"#64748B"}}),c.jsx(zr,{tick:{fontSize:11,fill:"#64748B"}}),c.jsx(In,{content:c.jsx(ii,{})}),c.jsx(Sn,{dataKey:"count",name:"Members",radius:[4,4,0,0],children:Or.map((b,C)=>c.jsx($r,{fill:C===0?vs:py},C))})]})})]})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-5",children:[c.jsxs("div",{className:"bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-5",children:[c.jsx("h3",{className:"font-bold text-[#0F172A] mb-4",children:"Inspection Completion Rate"}),c.jsx("div",{className:"flex items-center justify-center mb-5",children:c.jsxs("div",{className:"relative w-36 h-36",children:[c.jsxs("svg",{viewBox:"0 0 36 36",className:"w-full h-full -rotate-90",children:[c.jsx("circle",{cx:"18",cy:"18",r:"15.9155",fill:"none",stroke:"#F1F5F9",strokeWidth:"3.5"}),c.jsx("circle",{cx:"18",cy:"18",r:"15.9155",fill:"none",stroke:vs,strokeWidth:"3.5",strokeDasharray:`${R} 100`,strokeLinecap:"round"})]}),c.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:[c.jsxs("span",{className:"text-2xl font-black text-[#0F172A]",children:[R,"%"]}),c.jsx("span",{className:"text-xs text-[#94A3B8]",children:"Done"})]})]})}),c.jsxs("div",{className:"grid grid-cols-2 gap-4 text-center",children:[c.jsxs("div",{className:"bg-[#F0F9E8] rounded-xl p-3",children:[c.jsx("div",{className:"text-xl font-bold text-green-700",children:p.toLocaleString()}),c.jsx("div",{className:"text-xs text-green-600 mt-0.5",children:"Completed"})]}),c.jsxs("div",{className:"bg-amber-50 rounded-xl p-3",children:[c.jsx("div",{className:"text-xl font-bold text-amber-700",children:y.toLocaleString()}),c.jsx("div",{className:"text-xs text-amber-600 mt-0.5",children:"Pending"})]})]})]}),c.jsxs("div",{className:"bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-5",children:[c.jsx("h3",{className:"font-bold text-[#0F172A] mb-4",children:"By Discipline"}),c.jsx("div",{className:"space-y-4",children:ya.map((b,C)=>{const G=ya.reduce((O,D)=>O+D.value,0),k=G>0?Math.round(b.value/G*100):0;return c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center justify-between text-xs mb-1.5",children:[c.jsxs("span",{className:"text-[#64748B] flex items-center gap-1.5",children:[c.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:Be[C]}}),b.name]}),c.jsx("span",{className:"font-bold text-[#0F172A]",children:b.value.toLocaleString()})]}),c.jsx("div",{className:"h-2 bg-[#F1F5F9] rounded-full overflow-hidden",children:c.jsx("div",{className:"h-2 rounded-full transition-all duration-500",style:{width:`${k}%`,backgroundColor:Be[C]}})})]},b.name)})})]})]})]})}const oi={"KARWA-CITY":"Karwa City",MSD:"Mesaimeer (MSD)",AKD:"Al Khor (AKD)",ARD:"Al Rayyan (ARD)",IND:"Industrial Area",LUD:"Lusail (LUD)",WAD:"Wadi Aba Saleel (WAD)"};function yy(){const{gymMembers:n}=Tt(),[e,t]=q.useState(""),[s,r]=q.useState("all"),[o,a]=q.useState("all"),[u,d]=q.useState(1),f=50,p=q.useMemo(()=>[...new Set(n.map(k=>k.locationId))].filter(Boolean).sort(),[n]),y=q.useMemo(()=>{const k=e.toLowerCase();return n.filter(O=>(!k||O.name.toLowerCase().includes(k)||O.empNo.includes(k)||O.department.toLowerCase().includes(k))&&(s==="all"||O.locationId===s)&&(o==="all"||O.status===o))},[n,e,s,o]),v=Math.ceil(y.length/f),R=y.slice((u-1)*f,u*f),j=q.useMemo(()=>{const k={};return n.forEach(O=>{k[O.locationId]=(k[O.locationId]||0)+1}),k},[n]),b=k=>O=>{k(O.target.value),d(1)},C=k=>{t(k.target.value),d(1)},G=k=>k<30?"text-red-600":k<60?"text-amber-600":"text-green-700";return c.jsxs("div",{className:"space-y-6 animate-fade-in",children:[c.jsx("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:c.jsxs("div",{children:[c.jsxs("h2",{className:"text-xl font-bold text-[#0F172A] flex items-center gap-2",children:[c.jsx(ur,{size:22,className:"text-[#8CC63F]"})," Gym Members"]}),c.jsxs("p",{className:"text-sm text-[#64748B] mt-0.5",children:[n.length.toLocaleString()," total members across all depots"]})]})}),c.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3",children:Object.entries(oi).map(([k,O])=>c.jsxs("button",{onClick:()=>{r(s===k?"all":k),d(1)},className:`p-3 rounded-xl border text-left transition-all duration-200 ${s===k?"border-[#8CC63F] bg-[#F0F9E8] shadow-sm":"bg-white border-[#E2E8F0] hover:border-[#8CC63F]/50 shadow-[0_1px_3px_rgba(0,0,0,0.07)]"}`,children:[c.jsx("div",{className:`text-xl font-bold leading-none ${s===k?"text-[#6BA32D]":"text-[#0F172A]"}`,children:(j[k]||0).toLocaleString()}),c.jsx("div",{className:`text-xs leading-tight mt-1 ${s===k?"text-[#6BA32D]":"text-[#64748B]"}`,children:O})]},k))}),c.jsxs("div",{className:"bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-4 flex flex-col sm:flex-row gap-3",children:[c.jsxs("div",{className:"relative flex-1",children:[c.jsx(go,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"}),c.jsx("input",{type:"text",value:e,onChange:C,placeholder:"Search name, employee ID or department…",className:"w-full pl-9 pr-4 py-2.5 text-sm border border-[#E2E8F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-transparent transition-all duration-200 text-[#0F172A] placeholder-[#94A3B8]"})]}),c.jsxs("select",{value:s,onChange:b(r),className:"border border-[#E2E8F0] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F] text-[#0F172A] bg-white transition-all duration-200",children:[c.jsx("option",{value:"all",children:"All Depots"}),p.map(k=>c.jsx("option",{value:k,children:oi[k]||k},k))]}),c.jsxs("select",{value:o,onChange:b(a),className:"border border-[#E2E8F0] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F] text-[#0F172A] bg-white transition-all duration-200",children:[c.jsx("option",{value:"all",children:"All Statuses"}),c.jsx("option",{value:"Not Expired",children:"Active"}),c.jsx("option",{value:"Expired",children:"Expired"})]})]}),c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("p",{className:"text-sm text-[#64748B]",children:[y.length.toLocaleString()," result",y.length!==1?"s":""]}),v>1&&c.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[c.jsx("button",{disabled:u===1,onClick:()=>d(k=>k-1),className:"p-1.5 rounded-xl border border-[#E2E8F0] disabled:opacity-40 hover:bg-slate-50 transition-colors",children:c.jsx(Mg,{size:16,className:"text-[#64748B]"})}),c.jsxs("span",{className:"text-[#64748B] px-2",children:[u," / ",v]}),c.jsx("button",{disabled:u===v,onClick:()=>d(k=>k+1),className:"p-1.5 rounded-xl border border-[#E2E8F0] disabled:opacity-40 hover:bg-slate-50 transition-colors",children:c.jsx(Lg,{size:16,className:"text-[#64748B]"})})]})]}),c.jsx("div",{className:"bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden",children:c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"bg-[#F8FAFC] border-b border-[#E2E8F0]",children:[c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8]",children:"#"}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8]",children:"Name"}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden md:table-cell",children:"Emp No."}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden lg:table-cell",children:"Nationality"}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden sm:table-cell",children:"Department"}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8]",children:"Depot"}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden xl:table-cell",children:c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(Fg,{size:12})," Subscribed"]})}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden xl:table-cell",children:c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(Bg,{size:12})," Expires"]})}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden lg:table-cell",children:"Days Left"}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8]",children:"Status"})]})}),c.jsx("tbody",{className:"divide-y divide-[#F1F5F9]",children:R.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:10,className:"text-center py-16 text-sm text-[#94A3B8]",children:"No members found."})}):R.map((k,O)=>c.jsxs("tr",{className:"hover:bg-[#F8FAFC] transition-colors duration-150",children:[c.jsx("td",{className:"px-4 py-3 text-xs text-[#94A3B8]",children:(u-1)*f+O+1}),c.jsx("td",{className:"px-4 py-3",children:c.jsxs("div",{className:"flex items-center gap-2.5",children:[c.jsx("div",{className:"w-8 h-8 rounded-full bg-[#F0F9E8] flex items-center justify-center text-[#6BA32D] text-xs font-bold shrink-0",children:k.name.split(" ").map(D=>D[0]).join("").slice(0,2).toUpperCase()}),c.jsx("span",{className:"text-sm font-semibold text-[#0F172A]",children:k.name})]})}),c.jsx("td",{className:"px-4 py-3 text-sm text-[#64748B] hidden md:table-cell",children:k.empNo}),c.jsx("td",{className:"px-4 py-3 text-sm text-[#64748B] hidden lg:table-cell",children:k.nationality}),c.jsx("td",{className:"px-4 py-3 text-sm text-[#64748B] hidden sm:table-cell",children:c.jsx("span",{className:"truncate block max-w-[160px]",children:k.department})}),c.jsx("td",{className:"px-4 py-3 text-sm text-[#64748B]",children:oi[k.locationId]||k.depot}),c.jsx("td",{className:"px-4 py-3 text-sm text-[#94A3B8] hidden xl:table-cell",children:k.subscriptionDate||"—"}),c.jsx("td",{className:"px-4 py-3 text-sm text-[#94A3B8] hidden xl:table-cell",children:k.expiryDate||"—"}),c.jsx("td",{className:"px-4 py-3 hidden lg:table-cell",children:c.jsx("span",{className:`text-sm font-semibold ${G(k.daysLeft)}`,children:k.daysLeft>0?k.daysLeft:"—"})}),c.jsx("td",{className:"px-4 py-3",children:c.jsx("span",{className:`px-2.5 py-1 rounded-full text-xs font-semibold ${k.status==="Not Expired"?"bg-[#F0F9E8] text-[#6BA32D]":"bg-red-50 text-red-600"}`,children:k.status==="Not Expired"?"Active":k.status})})]},k.id))})]})})}),v>1&&c.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm",children:[c.jsx("button",{disabled:u===1,onClick:()=>d(1),className:"px-3 py-1.5 rounded-xl border border-[#E2E8F0] disabled:opacity-40 hover:bg-slate-50 text-[#64748B] transition-colors",children:"«"}),c.jsx("button",{disabled:u===1,onClick:()=>d(k=>k-1),className:"px-3 py-1.5 rounded-xl border border-[#E2E8F0] disabled:opacity-40 hover:bg-slate-50 text-[#64748B] transition-colors",children:"‹ Prev"}),c.jsxs("span",{className:"px-4 py-1.5 text-[#64748B]",children:["Page ",u," of ",v]}),c.jsx("button",{disabled:u===v,onClick:()=>d(k=>k+1),className:"px-3 py-1.5 rounded-xl border border-[#E2E8F0] disabled:opacity-40 hover:bg-slate-50 text-[#64748B] transition-colors",children:"Next ›"}),c.jsx("button",{disabled:u===v,onClick:()=>d(v),className:"px-3 py-1.5 rounded-xl border border-[#E2E8F0] disabled:opacity-40 hover:bg-slate-50 text-[#64748B] transition-colors",children:"»"})]})]})}const Ml=["Low","Medium","High","Critical"],_y=["Open","In Progress","Resolved"],xy={Critical:"bg-red-50 text-red-600",High:"bg-orange-50 text-orange-600",Medium:"bg-amber-50 text-amber-600",Low:"bg-blue-50 text-blue-600",Mid:"bg-amber-50 text-amber-600"},Ll={Open:"bg-red-50 text-red-600","In Progress":"bg-amber-50 text-amber-600",Resolved:"bg-[#F0F9E8] text-[#6BA32D]",Completed:"bg-[#F0F9E8] text-[#6BA32D]","Pending (Internal)":"bg-amber-50 text-amber-600",Pending:"bg-red-50 text-red-600",Cancelled:"bg-slate-100 text-slate-500"},ai={locationId:"",title:"",description:"",priority:"Medium",reportedBy:""};function Ey(){const{locations:n,maintenance:e,addMaintenanceRequest:t,updateMaintenanceStatus:s}=Tt(),[r]=gh(),[o,a]=q.useState(""),[u,d]=q.useState(r.get("location")||"all"),[f,p]=q.useState("all"),[y,v]=q.useState("all"),[R,j]=q.useState(!1),[b,C]=q.useState({...ai}),G=e.filter(N=>{const x=o.toLowerCase();return(!x||N.title.toLowerCase().includes(x)||N.reportedBy.toLowerCase().includes(x))&&(u==="all"||N.locationId===u)&&(f==="all"||N.status===f)&&(y==="all"||N.priority===y)}).sort((N,x)=>x.reportedDate.localeCompare(N.reportedDate)),k={Open:0,"In Progress":0,Resolved:0};e.forEach(N=>{N.status==="Open"||N.status==="Pending"?k.Open++:N.status==="In Progress"||N.status==="Pending (Internal)"?k["In Progress"]++:(N.status==="Resolved"||N.status==="Completed")&&k.Resolved++});const O=(N,x)=>{var g;return((g=n.find(E=>E.id===N))==null?void 0:g.name)||x||N},D="w-full border border-[#E2E8F0] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-transparent text-[#0F172A] transition-all duration-200",L={Open:"bg-red-500 text-white border-red-500","In Progress":"bg-amber-500 text-white border-amber-500",Resolved:"bg-[#8CC63F] text-white border-[#8CC63F]"};return c.jsxs("div",{className:"space-y-6 animate-fade-in",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[c.jsxs("div",{children:[c.jsxs("h2",{className:"text-xl font-bold text-[#0F172A] flex items-center gap-2",children:[c.jsx(yo,{size:22,className:"text-[#8CC63F]"})," Maintenance & Inspections"]}),c.jsxs("p",{className:"text-sm text-[#64748B] mt-0.5",children:[e.length.toLocaleString()," total records"]})]}),c.jsxs("button",{onClick:()=>{C({...ai,locationId:u!=="all"?u:""}),j(!0)},className:"flex items-center gap-2 bg-[#8CC63F] hover:bg-[#6BA32D] text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm shrink-0",children:[c.jsx(Wg,{size:16})," New Request"]})]}),c.jsx("div",{className:"flex gap-3 flex-wrap",children:Object.entries(k).map(([N,x])=>c.jsxs("button",{onClick:()=>p(f===N?"all":N),className:`px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 flex items-center gap-2 ${f===N?L[N]:"bg-white border-[#E2E8F0] text-[#64748B] hover:border-slate-300 shadow-[0_1px_3px_rgba(0,0,0,0.07)]"}`,children:[N,c.jsx("span",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${f===N?"bg-white/25 text-white":Ll[N]}`,children:x})]},N))}),c.jsxs("div",{className:"bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-4 flex flex-col sm:flex-row gap-3",children:[c.jsxs("div",{className:"relative flex-1",children:[c.jsx(go,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"}),c.jsx("input",{type:"text",value:o,onChange:N=>a(N.target.value),placeholder:"Search issues or reported by…",className:"w-full pl-9 pr-4 py-2.5 text-sm border border-[#E2E8F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-transparent text-[#0F172A] placeholder-[#94A3B8] transition-all duration-200"})]}),c.jsxs("select",{value:u,onChange:N=>d(N.target.value),className:"border border-[#E2E8F0] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F] text-[#0F172A] bg-white transition-all duration-200",children:[c.jsx("option",{value:"all",children:"All Locations"}),n.map(N=>c.jsx("option",{value:N.id,children:N.name},N.id))]}),c.jsxs("select",{value:y,onChange:N=>v(N.target.value),className:"border border-[#E2E8F0] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F] text-[#0F172A] bg-white transition-all duration-200",children:[c.jsx("option",{value:"all",children:"All Priorities"}),Ml.map(N=>c.jsx("option",{children:N},N))]})]}),c.jsxs("p",{className:"text-sm text-[#64748B]",children:[G.length.toLocaleString()," result",G.length!==1?"s":""]}),c.jsx("div",{className:"bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden",children:c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"bg-[#F8FAFC] border-b border-[#E2E8F0]",children:[c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8]",children:"Issue"}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden sm:table-cell",children:"Location"}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden md:table-cell",children:"Reported By"}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden lg:table-cell",children:"Date"}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8]",children:"Priority"}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8]",children:"Status"}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden xl:table-cell",children:"Resolved"})]})}),c.jsx("tbody",{className:"divide-y divide-[#F1F5F9]",children:G.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:7,className:"text-center py-16 text-sm text-[#94A3B8]",children:"No requests found."})}):G.map(N=>c.jsxs("tr",{className:"hover:bg-[#F8FAFC] transition-colors duration-150",children:[c.jsxs("td",{className:"px-4 py-3",children:[c.jsx("div",{className:"text-sm font-semibold text-[#0F172A]",children:N.title}),c.jsx("div",{className:"text-xs text-[#94A3B8] truncate max-w-xs hidden sm:block mt-0.5",children:N.description})]}),c.jsx("td",{className:"px-4 py-3 text-sm text-[#64748B] hidden sm:table-cell",children:O(N.locationId,N.locationName)}),c.jsx("td",{className:"px-4 py-3 text-sm text-[#64748B] hidden md:table-cell",children:N.reportedBy}),c.jsx("td",{className:"px-4 py-3 text-sm text-[#94A3B8] hidden lg:table-cell",children:N.reportedDate}),c.jsx("td",{className:"px-4 py-3",children:c.jsx("span",{className:`px-2.5 py-1 rounded-full text-xs font-semibold ${xy[N.priority]||"bg-slate-100 text-slate-500"}`,children:N.priority})}),c.jsx("td",{className:"px-4 py-3",children:c.jsx("select",{value:N.status,onChange:x=>s(N.id,x.target.value),className:`text-xs font-semibold rounded-full px-2.5 py-1 border-0 cursor-pointer focus:outline-none ${Ll[N.status]||"bg-slate-100 text-slate-500"}`,children:_y.map(x=>c.jsx("option",{children:x},x))})}),c.jsx("td",{className:"px-4 py-3 text-sm text-[#94A3B8] hidden xl:table-cell",children:N.resolvedDate||"—"})]},N.id))})]})})}),R&&c.jsx(ju,{title:"New Maintenance Request",onClose:()=>j(!1),wide:!0,children:c.jsxs("form",{onSubmit:N=>{N.preventDefault(),t({...b,status:"Open"}),C({...ai}),j(!1)},className:"space-y-4",children:[c.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c.jsxs("div",{className:"col-span-2",children:[c.jsx("label",{className:"block text-sm font-medium text-[#0F172A] mb-1.5",children:"Location *"}),c.jsxs("select",{required:!0,value:b.locationId,onChange:N=>C(x=>({...x,locationId:N.target.value})),className:D,children:[c.jsx("option",{value:"",children:"-- Select --"}),n.map(N=>c.jsx("option",{value:N.id,children:N.name},N.id))]})]}),c.jsxs("div",{className:"col-span-2",children:[c.jsx("label",{className:"block text-sm font-medium text-[#0F172A] mb-1.5",children:"Issue Title *"}),c.jsx("input",{required:!0,type:"text",value:b.title,onChange:N=>C(x=>({...x,title:N.target.value})),className:D,placeholder:"Brief description of the issue"})]}),c.jsxs("div",{className:"col-span-2",children:[c.jsx("label",{className:"block text-sm font-medium text-[#0F172A] mb-1.5",children:"Description *"}),c.jsx("textarea",{required:!0,rows:3,value:b.description,onChange:N=>C(x=>({...x,description:N.target.value})),className:`${D} resize-none`,placeholder:"Detailed description…"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-[#0F172A] mb-1.5",children:"Priority *"}),c.jsx("select",{required:!0,value:b.priority,onChange:N=>C(x=>({...x,priority:N.target.value})),className:D,children:Ml.map(N=>c.jsx("option",{children:N},N))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-[#0F172A] mb-1.5",children:"Reported By *"}),c.jsx("input",{required:!0,type:"text",value:b.reportedBy,onChange:N=>C(x=>({...x,reportedBy:N.target.value})),className:D,placeholder:"Your name"})]})]}),c.jsxs("div",{className:"flex gap-3 pt-2",children:[c.jsx("button",{type:"button",onClick:()=>j(!1),className:"flex-1 border border-[#E2E8F0] text-[#64748B] py-2.5 rounded-xl text-sm font-medium hover:bg-slate-50 transition-all duration-200",children:"Cancel"}),c.jsx("button",{type:"submit",className:"flex-1 bg-[#8CC63F] hover:bg-[#6BA32D] text-white py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",children:"Submit Request"})]})]})})]})}function li(n,e){return e?Math.round(n/e*100):0}function Ol({value:n}){const e=n>=95?"bg-red-500":n>=80?"bg-amber-400":"bg-[#8CC63F]",t=n>=95?"text-red-600 bg-red-50":n>=80?"text-amber-600 bg-amber-50":"text-[#6BA32D] bg-[#F0F9E8]";return c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"flex-1 bg-[#F1F5F9] rounded-full h-2",children:c.jsx("div",{className:`${e} h-2 rounded-full transition-all`,style:{width:`${Math.min(n,100)}%`}})}),c.jsxs("span",{className:`text-xs font-bold px-1.5 py-0.5 rounded-lg w-10 text-center ${t}`,children:[n,"%"]})]})}function vy(){const{tenants:n,familyUnits:e}=Tt(),[t,s]=q.useState("staff"),[r,o]=q.useState(""),[a,u]=q.useState("occupancy"),[d,f]=q.useState("desc"),p=Rs.filter(D=>D.category.includes("Staff")),y=Rs.filter(D=>D.category.includes("Admin")),v=D=>{a===D?f(L=>L==="asc"?"desc":"asc"):(u(D),f("desc"))},R=({k:D})=>c.jsx("span",{className:"ml-1 text-[#94A3B8]",children:a===D?d==="asc"?"↑":"↓":"↕"}),j=q.useMemo(()=>{const D=r.toLowerCase();let L=p.map(N=>({...N,tenantCount:n.filter(x=>x.locationId===N.id).length,util:li(N.occupancy,N.capacity),available:(N.capacity||0)-(N.occupancy||0)})).filter(N=>!D||N.name.toLowerCase().includes(D)||N.location.toLowerCase().includes(D));return L.sort((N,x)=>{const g={name:N.name>x.name?1:-1,capacity:N.capacity-x.capacity,occupancy:N.occupancy-x.occupancy,util:N.util-x.util,available:N.available-x.available};return d==="asc"?g[a]||0:-(g[a]||0)}),L},[p,n,r,a,d]),b=p.reduce((D,L)=>D+(L.capacity||0),0),C=p.reduce((D,L)=>D+(L.occupancy||0),0),G=b-C,k=q.useMemo(()=>{const D={};return e.forEach(L=>{D[L.location]||(D[L.location]={occupied:0,vacant:0,total:0,units:[]}),D[L.location].total++,D[L.location].units.push(L),(L.status||"").toLowerCase().includes("occupied")||(L.status||"").toLowerCase().includes("bed space")||(L.status||"").toLowerCase().includes("shop")||(L.status||"").toLowerCase().includes("office")?D[L.location].occupied++:D[L.location].vacant++}),D},[e]),O="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] cursor-pointer hover:text-[#0F172A] select-none transition-colors";return c.jsxs("div",{className:"space-y-6 animate-fade-in",children:[c.jsxs("div",{children:[c.jsxs("h2",{className:"text-xl font-bold text-[#0F172A] flex items-center gap-2",children:[c.jsx(Hs,{size:22,className:"text-[#8CC63F]"})," Housing Information"]}),c.jsx("p",{className:"text-sm text-[#64748B] mt-0.5",children:"Full accommodation status across all Mowasalat locations"})]}),c.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[{label:"Total Beds",value:b.toLocaleString(),icon:Ks,accent:"bg-slate-800"},{label:"Occupied",value:C.toLocaleString(),icon:ki,accent:"bg-[#8CC63F]"},{label:"Available",value:G.toLocaleString(),icon:Ks,accent:"bg-indigo-500"},{label:"Utilisation",value:`${li(C,b)}%`,icon:Hs,accent:"bg-amber-500"}].map(({label:D,value:L,icon:N,accent:x})=>c.jsxs("div",{className:"bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-4 flex items-center gap-3",children:[c.jsx("div",{className:`w-10 h-10 rounded-xl ${x} flex items-center justify-center shrink-0`,children:c.jsx(N,{size:18,className:"text-white"})}),c.jsxs("div",{children:[c.jsx("div",{className:"text-xl font-bold text-[#0F172A]",children:L}),c.jsx("div",{className:"text-xs text-[#64748B] mt-0.5",children:D})]})]},D))}),c.jsx("div",{className:"flex bg-[#F1F5F9] rounded-2xl p-1 w-fit gap-1",children:[["staff","Staff Depots (13)"],["admin","Admin / Family (3)"]].map(([D,L])=>c.jsx("button",{onClick:()=>s(D),className:`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${t===D?"bg-[#8CC63F] text-white shadow-sm":"text-[#64748B] hover:text-[#0F172A]"}`,children:L},D))}),t==="staff"&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07)] p-3",children:c.jsxs("div",{className:"relative",children:[c.jsx(go,{size:15,className:"absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"}),c.jsx("input",{type:"text",value:r,onChange:D=>o(D.target.value),placeholder:"Search depot or location…",className:"w-full pl-9 pr-4 py-2.5 text-sm border border-[#E2E8F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-transparent text-[#0F172A] placeholder-[#94A3B8] transition-all duration-200"})]})}),c.jsx("div",{className:"bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden",children:c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full",children:[c.jsx("thead",{className:"bg-[#F8FAFC] border-b border-[#E2E8F0]",children:c.jsxs("tr",{children:[c.jsxs("th",{className:O,onClick:()=>v("name"),children:["Depot ",c.jsx(R,{k:"name"})]}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden sm:table-cell",children:"Location"}),c.jsxs("th",{className:O,onClick:()=>v("capacity"),children:["Capacity ",c.jsx(R,{k:"capacity"})]}),c.jsxs("th",{className:O,onClick:()=>v("occupancy"),children:["Occupied ",c.jsx(R,{k:"occupancy"})]}),c.jsxs("th",{className:O,onClick:()=>v("available"),children:["Available ",c.jsx(R,{k:"available"})]}),c.jsxs("th",{className:`${O} hidden md:table-cell`,onClick:()=>v("util"),children:["Utilisation ",c.jsx(R,{k:"util"})]}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden lg:table-cell",children:"Blocks"})]})}),c.jsx("tbody",{className:"divide-y divide-[#F1F5F9]",children:j.map(D=>c.jsxs("tr",{className:"hover:bg-[#F8FAFC] transition-colors duration-150",children:[c.jsxs("td",{className:"px-4 py-3",children:[c.jsx("div",{className:"font-semibold text-sm text-[#0F172A]",children:D.name}),c.jsxs("div",{className:"text-xs text-[#94A3B8] sm:hidden flex items-center gap-1 mt-0.5",children:[c.jsx(ri,{size:10}),D.location]})]}),c.jsx("td",{className:"px-4 py-3 text-sm text-[#64748B] hidden sm:table-cell",children:c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(ri,{size:12,className:"text-[#94A3B8]"}),D.location]})}),c.jsx("td",{className:"px-4 py-3 text-sm font-semibold text-[#0F172A]",children:(D.capacity||0).toLocaleString()}),c.jsx("td",{className:"px-4 py-3 text-sm font-semibold text-[#0F172A]",children:D.occupancy.toLocaleString()}),c.jsx("td",{className:"px-4 py-3",children:c.jsx("span",{className:`text-sm font-bold ${D.available<200?"text-red-600":"text-[#6BA32D]"}`,children:D.available.toLocaleString()})}),c.jsx("td",{className:"px-4 py-3 hidden md:table-cell w-48",children:c.jsx(Ol,{value:D.util})}),c.jsx("td",{className:"px-4 py-3 hidden lg:table-cell",children:c.jsxs("div",{className:"flex flex-wrap gap-1",children:[(D.blocks||[]).slice(0,4).map(L=>c.jsx("span",{className:"text-xs bg-[#F1F5F9] text-[#64748B] px-2 py-0.5 rounded-lg",children:L},L)),(D.blocks||[]).length>4&&c.jsxs("span",{className:"text-xs text-[#94A3B8]",children:["+",D.blocks.length-4]})]})})]},D.id))}),c.jsx("tfoot",{className:"bg-[#F0F9E8] border-t border-[#E2E8F0]",children:c.jsxs("tr",{children:[c.jsxs("td",{className:"px-4 py-3 text-sm font-bold text-[#0F172A]",colSpan:2,children:["TOTAL (",j.length," depots)"]}),c.jsx("td",{className:"px-4 py-3 text-sm font-bold text-[#0F172A]",children:j.reduce((D,L)=>D+(L.capacity||0),0).toLocaleString()}),c.jsx("td",{className:"px-4 py-3 text-sm font-bold text-[#0F172A]",children:j.reduce((D,L)=>D+L.occupancy,0).toLocaleString()}),c.jsx("td",{className:"px-4 py-3 text-sm font-bold text-[#6BA32D]",children:j.reduce((D,L)=>D+L.available,0).toLocaleString()}),c.jsx("td",{className:"px-4 py-3 hidden md:table-cell",children:c.jsx(Ol,{value:li(j.reduce((D,L)=>D+L.occupancy,0),j.reduce((D,L)=>D+(L.capacity||0),0))})}),c.jsx("td",{className:"hidden lg:table-cell"})]})})]})})})]}),t==="admin"&&c.jsxs("div",{className:"space-y-6",children:[c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:y.map(D=>{const L=D.name==="Al Thumama Villas"?"Al Thumama":D.name==="Al Saad Accommodation"?"Al Saad":"Mansoura Tower",N=k[L]||{occupied:0};return c.jsxs("div",{className:"bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-5",children:[c.jsxs("div",{className:"flex items-start gap-3 mb-4",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#F0F9E8] flex items-center justify-center shrink-0",children:c.jsx(ku,{size:18,className:"text-[#6BA32D]"})}),c.jsxs("div",{children:[c.jsx("div",{className:"font-bold text-[#0F172A] text-sm",children:D.name}),c.jsxs("div",{className:"text-xs text-[#94A3B8] flex items-center gap-1 mt-0.5",children:[c.jsx(ri,{size:10}),D.location]})]})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3 text-center mb-3",children:[c.jsxs("div",{className:"bg-[#F8FAFC] rounded-xl p-3",children:[c.jsx("div",{className:"text-lg font-bold text-[#0F172A]",children:D.totalUnits}),c.jsx("div",{className:"text-xs text-[#94A3B8] mt-0.5",children:"Total Units"})]}),c.jsxs("div",{className:"bg-[#F0F9E8] rounded-xl p-3",children:[c.jsx("div",{className:"text-lg font-bold text-[#6BA32D]",children:N.occupied}),c.jsx("div",{className:"text-xs text-[#94A3B8] mt-0.5",children:"Occupied"})]})]}),c.jsx("div",{className:"text-xs text-[#94A3B8] text-center",children:D.type})]},D.id)})}),c.jsxs("div",{className:"bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden",children:[c.jsxs("div",{className:"px-5 py-4 border-b border-[#E2E8F0]",children:[c.jsx("h3",{className:"font-bold text-[#0F172A]",children:"Family Accommodation Units"}),c.jsxs("p",{className:"text-xs text-[#94A3B8] mt-0.5",children:[e.length," units · Al Thumama, Al Saad, Mansoura Tower"]})]}),c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full",children:[c.jsx("thead",{className:"bg-[#F8FAFC] border-b border-[#E2E8F0]",children:c.jsxs("tr",{children:[c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8]",children:"Unit"}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden sm:table-cell",children:"Location"}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8]",children:"Status"}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden md:table-cell",children:"Occupant"}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden lg:table-cell",children:"Job Title"}),c.jsx("th",{className:"px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden xl:table-cell",children:"Rent (QAR)"}),c.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden xl:table-cell",children:"Allocated"})]})}),c.jsx("tbody",{className:"divide-y divide-[#F1F5F9]",children:e.map(D=>{const L=(D.status||"").toLowerCase().includes("occupied");return c.jsxs("tr",{className:"hover:bg-[#F8FAFC] transition-colors duration-150",children:[c.jsx("td",{className:"px-4 py-2.5 text-sm font-semibold text-[#0F172A]",children:D.unit}),c.jsx("td",{className:"px-4 py-2.5 text-sm text-[#64748B] hidden sm:table-cell",children:D.location}),c.jsx("td",{className:"px-4 py-2.5",children:c.jsx("span",{className:`px-2.5 py-1 rounded-full text-xs font-semibold ${L?"bg-[#F0F9E8] text-[#6BA32D]":"bg-[#F8FAFC] text-[#64748B]"}`,children:D.status||"—"})}),c.jsx("td",{className:"px-4 py-2.5 text-sm text-[#0F172A] hidden md:table-cell",children:D.occupant||"—"}),c.jsx("td",{className:"px-4 py-2.5 text-sm text-[#64748B] hidden lg:table-cell",children:D.jobTitle||"—"}),c.jsx("td",{className:"px-4 py-2.5 text-sm font-semibold text-right text-[#0F172A] hidden xl:table-cell",children:D.rent?Number(D.rent).toLocaleString():"—"}),c.jsx("td",{className:"px-4 py-2.5 text-sm text-[#94A3B8] hidden xl:table-cell",children:D.allocationDate||"—"})]},D.id)})})]})})]})]})]})}function wy({children:n}){const{user:e}=Tt();return e?n:c.jsx(Ul,{to:"/login",replace:!0})}function Ay(){return c.jsxs(yh,{children:[c.jsx(Nt,{path:"/login",element:c.jsx(fy,{})}),c.jsxs(Nt,{path:"/",element:c.jsx(wy,{children:c.jsx(hy,{})}),children:[c.jsx(Nt,{index:!0,element:c.jsx(gy,{})}),c.jsx(Nt,{path:"gym",element:c.jsx(yy,{})}),c.jsx(Nt,{path:"maintenance",element:c.jsx(Ey,{})}),c.jsx(Nt,{path:"housing",element:c.jsx(vy,{})})]}),c.jsx(Nt,{path:"*",element:c.jsx(Ul,{to:"/",replace:!0})})]})}Ih.createRoot(document.getElementById("root")).render(c.jsx(q.StrictMode,{children:c.jsx(_h,{children:c.jsx(Dg,{children:c.jsx(Ay,{})})})}));
