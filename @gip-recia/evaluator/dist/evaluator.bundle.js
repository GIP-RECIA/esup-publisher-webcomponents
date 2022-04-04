(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.esupEvaluator = {}));
})(this, (function (exports) { 'use strict';

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$2=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$3=Symbol(),n$3=new Map;class s$3{constructor(t,n){if(this._$cssResult$=!0,n!==e$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$3.get(this.cssText);return t$2&&void 0===e&&(n$3.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$4=t=>new s$3("string"==typeof t?t:t+"",e$3),r$2=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$3(o,e$3)},i$2=(e,n)=>{t$2?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$4(e)})(t):t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var s$2;const e$2=window.trustedTypes,r$1=e$2?e$2.emptyScript:"",h$1=window.reactiveElementPolyfillSupport,o$3={toAttribute(t,i){switch(i){case Boolean:t=t?r$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$2=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:o$3,reflect:!1,hasChanged:n$2};class a$1 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1);}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$2(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$ES(t,i,s=l$2){var e,r;const h=this.constructor._$Eh(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$3.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null;}}_$AK(t,i){var s,e,r;const h=this.constructor,n=h._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=h.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r?r:o$3.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$2)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_());}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU();}updated(t){}firstUpdated(t){}}a$1.finalized=!0,a$1.elementProperties=new Map,a$1.elementStyles=[],a$1.shadowRootOptions={mode:"open"},null==h$1||h$1({ReactiveElement:a$1}),(null!==(s$2=globalThis.reactiveElementVersions)&&void 0!==s$2?s$2:globalThis.reactiveElementVersions=[]).push("1.3.0");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var t$1;const i$1=globalThis.trustedTypes,s$1=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$1=`lit$${(Math.random()+"").slice(9)}$`,o$2="?"+e$1,n$1=`<${o$2}>`,l$1=document,h=(t="")=>l$1.createComment(t),r=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var i;return d(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea|title)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p(1),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$1.createTreeWalker(l$1,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v||d===a?d=c:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n$1:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e$1+y):s+e$1+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$1?s$1.createHTML(u):u,l]};class E{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=E.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$1)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$1),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e$1),s=t.length-1;if(s>0){l.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h());}}}else if(8===l.nodeType)if(l.data===o$2)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$1,t+1));)c.push({type:7,index:r}),t+=e$1.length-1;}r++;}}static createElement(t,i){const s=l$1.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$1).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),r(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.$(t);}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t));}$(t){this._$AH!==w&&r(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$1.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new E(t)),i}S(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.A(h()),this.A(h()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!r(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.C(t);}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}C(t){this.element[this.name]=t===w?void 0:t;}}const k=i$1?i$1.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4;}C(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name);}}class I extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=window.litHtmlPolyfillSupport;null==z||z(E,N),(null!==(t$1=globalThis.litHtmlVersions)&&void 0!==t$1?t$1:globalThis.litHtmlVersions=[]).push("2.2.0");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var l,o$1;class s extends a$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;null==n||n({LitElement:s});(null!==(o$1=globalThis.litElementVersions)&&void 0!==o$1?o$1:globalThis.litElementVersions=[]).push("3.2.0");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const o=e(class extends i{constructor(t$1){var i;if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||(null===(i=t$1.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.et){this.et=new Set,void 0!==i.strings&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.st)||void 0===r?void 0:r.has(t))&&this.et.add(t);return this.render(s)}const e=i.element.classList;this.et.forEach((t=>{t in s||(e.remove(t),this.et.delete(t));}));for(const t in s){const i=!!s[t];i===this.et.has(t)||(null===(o=this.st)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.et.add(t)):(e.remove(t),this.et.delete(t)));}return b}});

  const subjectInfosStyle = r$2`
    a:hover, a:focus, a:link {
        text-decoration: none;
        outline: none;
    }
    a {
        color: var(--subject-infos-text-color, #000)
    }
    a:hover,
    a:focus,
    a:hover>div,
    a:focus>div {
        color: var(--subject-infos-focus-text-color, #25B2F3);
        background-color: var(--subject-infos-focus-background-color, transparent);
    }

    .icon {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
        margin: 0px 2px;
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
    }
    .icon:before {
        content: '\\f128';
    }

    .icon-question {
        font-family: var(--icon-question-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-question-font-weight, 900);
    }
    .icon-question:before {
        content: var(--icon-question-content, '\\f128');
    }
    .icon-users {
        font-family: var(--icon-users-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-users-font-weight, 900);
    }
    .icon-users:before {
        content: var(--icon-users-content, '\\f0c0');
    }
    .icon-user {
        font-family: var(--icon-user-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-user-font-weight, 900);
    }
    .icon-user:before {
        content: var(--icon-user-content, '\\f007');
    }

    [data-tooltip] {
        position: relative;
    }
  `;

  const subjectInfoLabel = {
    fr: {
      disappear: " n'est plus présent"
    },
    en: {
      disappear: " isn't more present"
    }
  };

  /**
   * Classe permettant de récupérer un label selon la langue définie.
   */
  class Localization {

    /**
     * Constructeur avec arguments.
     *
     * @param {Object} labels Labels
     * @param {String} lang Langue
     */
    constructor(labels, lang) {
      this.labels = labels;
      this.lang = lang;
    }

    /**
     * Merge des labels dans ceux déjà définis.
     *
     * @param {Object} labels Labels à merger
     */
    mergeLabels(labels) {
      Object.keys(labels).forEach(lang => {
        if (!Object.keys(this.labels).includes(lang)) {
          this.labels[lang] = labels[lang];
        } else {
          Object.keys(labels[lang]).forEach(key => {
            this.labels[lang][key] = labels[lang][key];
          });
        }
      });
    }

    /**
     * Retourne un label dans la langue définie.
     *
     * @param {String} key    Clé du label
     * @param {Object} params Paramètres à insérer dans le label
     * @returns Label dans la langue définie
     */
    getLabel(key, params) {
      var label;
      if (this.labels[this.lang]) {
        label = this.labels[this.lang][key] || key;
      } else {
        label = key;
      }
      if (params) {
        label = label.replace(/{([^}]+)}/g, function (match, param) {
          return typeof params[param] != 'undefined' ? params[param] : match
        });
      }
      return label
    }
  }

  /**
   * Classe permettant de gérer l'affichage d'un ToolTip.
   */
  class ToolTip {

    /**
     * Constructeur avec argument.
     *
     * @param {String} id Identifiant HTML du ToolTip
     */
    constructor(id) {
      this.id = id || 'tooltip';
      this.tooltip = null;
      this.tooltipClosing = false;
    }

    /**
     * Mise à jour du tooltip.
     *
     * @param {Object} shadowRoot ShadowRoot du Lit-Element parent
     */
    updateToolTip(shadowRoot) {
      this.tooltip = shadowRoot.querySelector('#' + this.id);
      this.tooltipClosing = false;
    }

    /**
     * Retourne le code HTML du tooltip.
     *
     * @param {String} tooltip Texte du tooltip
     * @returns Code HTML
     */
    renderToolTip(tooltip) {
      if (tooltip && tooltip.length > 0) {
        // prettier-ignore
        return $`
        <div class="tooltip fade bs-tooltip-top" id="${this.id}" role="tooltip" style="display: none"
          @mouseover="${() => { this.hideToolTip(); }}">
          <div class="tooltip-arrow"></div>
          <div class="tooltip-inner">${tooltip}</div>
        </div>
      `
      } else {
        return $``
      }
    }

    /**
     * Méthode affichant le tooltip.
     */
    showToolTip() {
      if (this.tooltip) {
        if (this.tooltipClosing) {
          setTimeout(() => this.showToolTip(), 50);
        } else {
          // Affichage et positionnement du tooltip
          this.tooltip.style.display = 'block';
          this.tooltip.style.width = 'max-content';
          if (this.tooltip.offsetWidth >= this.tooltip.parentNode.offsetWidth) {
            this.tooltip.style.left = '0px';
            this.tooltip.style.transform = 'none';
          } else {
            this.tooltip.style.left =
              Math.round(this.tooltip.parentNode.offsetWidth / 2) + 'px';
            this.tooltip.style.transform = 'translateX(-50%)';
          }
          this.tooltip.style.top = -(this.tooltip.offsetHeight + 1) + 'px';
          this.tooltip.classList.add('show');

          // Positionnement de la flèche
          const arrow = this.tooltip.querySelector('.tooltip-arrow');
          arrow.style.position = 'absolute';
          arrow.style.transform = 'translateX(-50%)';
          const left = Math.round(
            Math.min(
              this.tooltip.offsetWidth,
              this.tooltip.parentNode.offsetWidth
            ) / 2
          );
          arrow.style.left = left + 'px';
        }
      }
    }

    /**
     * Méthode masquant le tooltip.
     */
    hideToolTip() {
      if (
        this.tooltip &&
        !this.tooltipClosing &&
        this.tooltip.classList.contains('show')
      ) {
        // Masquage du tooltip
        this.tooltip.classList.remove('show');

        this.tooltipClosing = true;
        setTimeout(() => {
          this.tooltip.style.display = 'none';
          this.tooltipClosing = false;
        }, 100);
      }
    }
  }

  const bootstrapToolTipStyle = r$2`
  @charset "UTF-8";
  /*!
    * Bootstrap v5.1.3 (https://getbootstrap.com/)
    * Copyright 2011-2021 The Bootstrap Authors
    * Copyright 2011-2021 Twitter, Inc.
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    */
  :root {
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-gray-100: #f8f9fa;
    --bs-gray-200: #e9ecef;
    --bs-gray-300: #dee2e6;
    --bs-gray-400: #ced4da;
    --bs-gray-500: #adb5bd;
    --bs-gray-600: #6c757d;
    --bs-gray-700: #495057;
    --bs-gray-800: #343a40;
    --bs-gray-900: #212529;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-info: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #212529;
    --bs-primary-rgb: 13, 110, 253;
    --bs-secondary-rgb: 108, 117, 125;
    --bs-success-rgb: 25, 135, 84;
    --bs-info-rgb: 13, 202, 240;
    --bs-warning-rgb: 255, 193, 7;
    --bs-danger-rgb: 220, 53, 69;
    --bs-light-rgb: 248, 249, 250;
    --bs-dark-rgb: 33, 37, 41;
    --bs-white-rgb: 255, 255, 255;
    --bs-black-rgb: 0, 0, 0;
    --bs-body-color-rgb: 33, 37, 41;
    --bs-body-bg-rgb: 255, 255, 255;
    --bs-font-sans-serif: system-ui, -apple-system, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
      'Liberation Mono', 'Courier New', monospace;
    --bs-gradient: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0)
    );
    --bs-body-font-family: var(--bs-font-sans-serif);
    --bs-body-font-size: 1rem;
    --bs-body-font-weight: 400;
    --bs-body-line-height: 1.5;
    --bs-body-color: #212529;
    --bs-body-bg: #fff;
  }

  .tooltip {
    position: absolute;
    z-index: 1080;
    display: block;
    margin: 0;
    font-family: var(--bs-font-sans-serif);
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.875rem;
    word-wrap: break-word;
    opacity: 0;
  }
  .tooltip.show {
    opacity: 0.9;
  }
  .tooltip .tooltip-arrow {
    position: absolute;
    display: block;
    width: 0.8rem;
    height: 0.4rem;
  }
  .tooltip .tooltip-arrow::before {
    position: absolute;
    content: '';
    border-color: transparent;
    border-style: solid;
  }

  .bs-tooltip-top,
  .bs-tooltip-auto[data-popper-placement^='top'] {
    padding: 0.4rem 0;
  }
  .bs-tooltip-top .tooltip-arrow,
  .bs-tooltip-auto[data-popper-placement^='top'] .tooltip-arrow {
    bottom: 0;
  }
  .bs-tooltip-top .tooltip-arrow::before,
  .bs-tooltip-auto[data-popper-placement^='top'] .tooltip-arrow::before {
    top: -1px;
    border-width: 0.4rem 0.4rem 0;
    border-top-color: #000;
  }

  .bs-tooltip-end,
  .bs-tooltip-auto[data-popper-placement^='right'] {
    padding: 0 0.4rem;
  }
  .bs-tooltip-end .tooltip-arrow,
  .bs-tooltip-auto[data-popper-placement^='right'] .tooltip-arrow {
    left: 0;
    width: 0.4rem;
    height: 0.8rem;
  }
  .bs-tooltip-end .tooltip-arrow::before,
  .bs-tooltip-auto[data-popper-placement^='right'] .tooltip-arrow::before {
    right: -1px;
    border-width: 0.4rem 0.4rem 0.4rem 0;
    border-right-color: #000;
  }

  .bs-tooltip-bottom,
  .bs-tooltip-auto[data-popper-placement^='bottom'] {
    padding: 0.4rem 0;
  }
  .bs-tooltip-bottom .tooltip-arrow,
  .bs-tooltip-auto[data-popper-placement^='bottom'] .tooltip-arrow {
    top: 0;
  }
  .bs-tooltip-bottom .tooltip-arrow::before,
  .bs-tooltip-auto[data-popper-placement^='bottom'] .tooltip-arrow::before {
    bottom: -1px;
    border-width: 0 0.4rem 0.4rem;
    border-bottom-color: #000;
  }

  .bs-tooltip-start,
  .bs-tooltip-auto[data-popper-placement^='left'] {
    padding: 0 0.4rem;
  }
  .bs-tooltip-start .tooltip-arrow,
  .bs-tooltip-auto[data-popper-placement^='left'] .tooltip-arrow {
    right: 0;
    width: 0.4rem;
    height: 0.8rem;
  }
  .bs-tooltip-start .tooltip-arrow::before,
  .bs-tooltip-auto[data-popper-placement^='left'] .tooltip-arrow::before {
    left: -1px;
    border-width: 0.4rem 0 0.4rem 0.4rem;
    border-left-color: #000;
  }

  .tooltip-inner {
    max-width: 200px;
    padding: 0.25rem 0.5rem;
    color: #fff;
    text-align: center;
    background-color: #000;
    border-radius: 0.25rem;
  }

  .fade {
    transition: opacity 0.15s linear;
  }
  @media (prefers-reduced-motion: reduce) {
    .fade {
      transition: none;
    }
  }
  .fade:not(.show) {
    opacity: 0;
  }
`;

  /**
   * Classe contenant des méthodes utilitaires.
   */
  class Utils {

    /**
     * Retourne true si la valeur fournit est définie.
     *
     * @param {Object} value Objet à traiter
     * @returns True si l'objet est défini, False sinon
     */
    static isDefined(value) {
      return typeof value !== 'undefined'
    }

    /**
     * Retourne true si la valeur fournit est un tableau.
     *
     * @param {Object} arr Objet à traiter
     * @returns True si l'objet est un tableau, False sinon
     */
    static isArray(arr) {
      return Array.isArray(arr) || arr instanceof Array
    }
  }

  /**
   * Subject Infos component.
   */
  class SubjectInfos extends s {
    static get styles() {
      return [subjectInfosStyle, bootstrapToolTipStyle]
    }

    static get properties() {
      return {
        /**
         * Objet contenant les données à afficher.
         * @type {Object}
         */
        subject: { attribute: false },

        /**
         * Configuration du subject-infos.
         * @type {Object}
         */
        config: { attribute: false },

        /**
         * Fonction appelée au clic sur l'élément.
         * @type {Function}
         */
        onSubjectClicked: { attribute: false }
      }
    }

    constructor() {
      super();
      this._subject = null;
      this._localization = new Localization(subjectInfoLabel, 'fr');
      this._tooltip = new ToolTip();
    }

    render() {
      var rendering = $``;
      if (this._subject) {
        if ('modelId' in this._subject) {
          rendering = this._htmlFromDTO(this._subject);
        } else if ('keyType' in this._subject && 'keyId' in this._subject) {
          rendering = this._htmlFromKey(this._subject);
        } else if (
          'keyValue' in this._subject &&
          'keyAttribute' in this._subject &&
          'keyType' in this._subject
        ) {
          rendering = this._htmlFromExtendedKey(this._subject);
        }
      }
      // prettier-ignore
      return $`
      <div class="subject-infos">
        <slot></slot>
        ${rendering}
      </div>
    `
    }

    willUpdate(changedProperties) {
      super.willUpdate(changedProperties);

      // Si les propriétés subject ou config sont modifiées, on initialise les éléments
      let initDatas = false;
      if (changedProperties) {
        initDatas =
          changedProperties.has('subject') || changedProperties.has('config');
      }
      if (initDatas) {
        this._localization.labels = subjectInfoLabel;
        this._localization.lang = this.config && this.config.lang ? this.config.lang : this._localization.lang;
        // Surcharge des labels
        if (this.config && this.config.labels) {
          this._localization.mergeLabels(this.config.labels);
        }
        // to resolve and complete subject
        if (
          this.config.getSubjectInfos &&
          (!Utils.isDefined(this.config.resolveKey) || this.config.resolveKey)
        ) {
          if (
            Utils.isDefined(this.subject) &&
            Utils.isDefined(this.subject.modelId) &&
            !Utils.isDefined(this.subject.attributes) &&
            'GROUP' !== this.subject.modelId.keyType
          ) {
            // is DTO
            // On teste si on n'a pas déjà récupéré les infos
            if (
              this._subject === null ||
              !Utils.isDefined(this._subject) ||
              this.subject.modelId.keyType !== this._subject.modelId.keyType ||
              this.subject.modelId.keyId !== this._subject.modelId.keyId
            ) {
              this.config
                .getSubjectInfos(
                  this.subject.modelId.keyType,
                  this.subject.modelId.keyId
                )
                .then(result => {
                  this._subject = result;
                  this.requestUpdate();
                });
            }
          } else if (
            Utils.isDefined(this.subject) &&
            'keyType' in this.subject &&
            'keyId' in this.subject
          ) {
            // is key Id
            // On teste si on n'a pas déjà récupéré les infos
            if (
              this._subject === null ||
              !Utils.isDefined(this._subject) ||
              this.subject.keyType !== this._subject.modelId.keyType ||
              this.subject.keyId !== this._subject.modelId.keyId
            ) {
              this.config
                .getSubjectInfos(this.subject.keyType, this.subject.keyId)
                .then(result => {
                  this._subject = result;
                  this.requestUpdate();
                });
            }
          } else {
            this._subject = this.subject;
          }
        } else {
          this._subject = this.subject;
        }
      }
    }

    updated(changedProperties) {
      super.updated(changedProperties);

      this._tooltip.updateToolTip(this.shadowRoot);
    }

    /**
     * Retourne le html à afficher dans le contexte où l'attribut 'modelId'
     * est fournit dans le subject.
     *
     * @param {Object} subject Objet contenant les valeurs nécessaire à l'affichage
     * @returns Html à afficher
     */
    _htmlFromDTO(subject) {
      const type = subject.modelId.keyType;
      if (['PERSON', 'GROUP'].includes(type)) {
        const isFound =
          subject.foundOnExternalSource === true ||
          (subject.displayName && subject.displayName.length > 0);
        const cssLink = {
          'icon-users': type === 'GROUP',
          'icon-user': type === 'PERSON'
        };
        const cssSpan = {
          'icon-question': !isFound
        };
        // prettier-ignore
        return $`
        <a href="" class="subject-infos ${o(cssLink)}" data-subject-id="${subject.modelId.keyId}" @click="${(e) => this._onClick(e)}">
          <span class="${o(cssSpan)}" data-tooltip aria-describedby="tooltip" @mouseenter="${() => this._tooltip.showToolTip()}" @mouseleave="${() => this._tooltip.hideToolTip()}">
            ${isFound ? subject.displayName : ''}
            ${this._tooltip.renderToolTip(this._tooltipSubject(subject))}
          </span>
        </a>
      `
      } else {
        // prettier-ignore
        return $`<span class="icon-question subject-infos"></span>`
      }
    }

    /**
     * Retourne le html à afficher dans le contexte où les attributs 'keyType' et 'keyId'
     * sont fournit dans le subject.
     *
     * @param {Object} subject Objet contenant les valeurs nécessaire à l'affichage
     * @returns Html à afficher
     */
    _htmlFromKey(subject) {
      const type = subject.keyType;
      if (['PERSON', 'GROUP'].includes(type)) {
        const cssLink = {
          'icon-users': type === 'GROUP',
          'icon-user': type === 'PERSON'
        };
        // prettier-ignore
        return $`
        <a href="" class="subject-infos ${o(cssLink)}" data-subject-id="${subject.keyId}" @click="${(e) => this._onClick(e)}">
          <span class="icon-question" data-tooltip aria-describedby="tooltip" @mouseenter="${() => this._tooltip.showToolTip()}" @mouseleave="${() => this._tooltip.hideToolTip()}">
            ${this._tooltip.renderToolTip(this._tooltipSubject(subject))}
          </span>
        </a>
      `
      } else {
        throw new Error(
          'Subject Type not managed and should not be tested :' + type
        )
      }
    }

    /**
     * Retourne le html à afficher dans le contexte où les attributs 'keyValue', 'keyAttribute' et 'keyType'
     * sont fournit dans le subject.
     *
     * @param {Object} subject Objet contenant les valeurs nécessaire à l'affichage
     * @returns Html à afficher
     */
    _htmlFromExtendedKey(subject) {
      var elem = null;
      const type = subject.keyType;
      const id = subject.keyValue;
      const attr = subject.keyAttribute;
      switch (type) {
        case 'GROUP':
        case 'PERSON':
          // prettier-ignore
          elem = $`
          <a href="" class="subject-infos icon-user" data-subject-id="${id}" @click="${(e) => this._onClick(e)}">
            <span class="icon-question" data-tooltip aria-describedby="tooltip" @mouseenter="${() => this._tooltip.showToolTip()}" @mouseleave="${() => this._tooltip.hideToolTip()}">
              ${this._tooltip.renderToolTip(this._tooltipSubject(subject))}
            </span>
          </a>`;
          break
        case 'PERSON_ATTR':
        case 'PERSON_ATTR_REGEX':
          // prettier-ignore
          elem = $`<span class="subject-infos icon-users" data-subject-id="${id}"> ${attr + ' = "' + id + '"'}</span>`;
          break
        default:
          throw new Error('Subject Type not managed :' + type)
      }
      return elem
    }

    /**
     * Méthode appelé au clic sur l'élément.
     *
     * @param {Object} event Evènement
     */
    _onClick(event) {
      event.preventDefault();
      event.stopPropagation();
      if (this.onSubjectClicked) {
        this.onSubjectClicked();
      }
    }

    /**
     * Retourne le label à afficher dans le tooltip.
     *
     * @param {Object} subject Objet contenant les valeurs nécessaire à l'affichage
     * @returns Label à afficher dans le tooltip
     */
    _tooltipSubject(subject) {
      const userAttrs = this.config.userDisplayedAttrs || [];
      if (!Utils.isDefined(userAttrs) || !Utils.isDefined(subject)) return ''
      if (Utils.isDefined(subject.keyId)) {
        return "'" + subject.keyId + "'" + this._localization.getLabel('disappear')
      }
      if (!Utils.isDefined(subject.modelId)) return ''
      if (
        Utils.isDefined(subject.modelId) &&
        subject.foundOnExternalSource !== true
      ) {
        return "'" + subject.modelId.keyId + "'" + this._localization.getLabel('disappear')
      }
      if (subject.modelId.keyType === 'GROUP') {
        return subject.modelId.keyId
      }
      if (!Utils.isDefined(subject.attributes)) return subject.modelId.keyId
      var index;
      var attrs = subject.attributes;
      var resHtml = '';
      for (index = 0; index < userAttrs.length; ++index) {
        if (
          index > 0 &&
          Utils.isDefined(attrs[userAttrs[index]]) &&
          resHtml !== ''
        ) {
          resHtml += ' - ';
        }
        if (
          Utils.isDefined(attrs[userAttrs[index]]) &&
          Array.isArray(attrs[userAttrs[index]])
        ) {
          var subIndex;
          for (
            subIndex = 0;
            subIndex < attrs[userAttrs[index]].length;
            ++subIndex
          ) {
            if (subIndex > 0) {
              resHtml += ', ';
            }
            resHtml += attrs[userAttrs[index]][subIndex];
          }
        } else if (Utils.isDefined(attrs[userAttrs[index]])) {
          resHtml += attrs[userAttrs[index]];
        }
      }
      return resHtml
    }
  }

  if (!customElements.get('esup-subject-infos')) {
    customElements.define('esup-subject-infos', SubjectInfos);
  }

  const subjectSearchButtonStyle = r$2`
  .icon {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    margin: 0px 2px;
  }
  .icon-plus {
    font-family: var(--icon-plus-font-family, 'Font Awesome 5 Free');
    font-weight: var(--icon-plus-font-weight, 900);
  }
  .icon-plus:before {
    content: var(--icon-plus-content, '\\f067');
  }
  .icon-cancel {
    font-family: var(--icon-cancel-font-family, 'Font Awesome 5 Free');
    font-weight: var(--icon-cancel-font-weight, 900);
  }
  .icon-cancel:before {
    content: var(--icon-cancel-content, '\\f05e');
  }
  .icon-validate {
    font-family: var(--icon-validate-font-family, 'Font Awesome 5 Free');
    font-weight: var(--icon-validate-font-weight, 900);
  }
  .icon-validate:before {
    content: var(--icon-validate-content, '\\f019');
  }
  .icon-question {
    font-family: var(--icon-question-font-family, 'Font Awesome 5 Free');
    font-weight: var(--icon-question-font-weight, 900);
  }
  .icon-question:before {
    content: var(--icon-question-content, '\\f059');
  }
  .icon-search {
    font-family: var(--icon-search-font-family, 'Font Awesome 5 Free');
    font-weight: var(--icon-search-font-weight, 900);
  }
  .icon-search:before {
    content: var(--icon-search-content, '\\f002');
  }
  ul.pagination li .page-link,
  ul.pagination li.disabled .page-link {
    color: var(--text-color-pagination, #25b2f3);
    border-color: #D0D0D0;
  }
  ul.pagination li.page-item.active .page-link {
    color: var(--selected-text-color-pagination, #fff);
    background-color: var(--selected-background-color-pagination, #25b2f3);
    border-color: #D0D0D0;
  }
  button:disabled,
  .page-item.disabled {
    cursor: not-allowed;
    pointer-events: all !important;
  }
  button.btn-primary.validate {
    color: var(--validate-button-text-color, #fff);
    background-color: var(--validate-button-background-color, #0d6efd);
    border-color: var(--validate-button-border-color, #0d6efd);
  }
  button.btn-primary.validate:not(:disabled):hover {
    opacity: 0.75;
  }
  [data-tooltip] {
    position: relative;
  }
`;

  const subjectSearchButtonLabel = {
    fr: {
      'type.group': 'Groupe',
      'type.user': 'Personne',
      'type.userfromgroup': "Personne d'un groupe",
      'type.userfromattr': "Valeur d'un attribut utilisateur",
      'type.userfromregexattr':
        'Expression régulière sur un attribut utilisateur',
      cancel: 'Annuler',
      validate: 'Valider',
      'search.targets.group': "Recherche d'un groupe",
      'search.targets.user': "Recherche d'un utilisateur",
      'search.targets.userFromGroup':
        "Recherche d'un utilisateur à partir d'un groupe",
      'search.targets.userAttrs':
        "Définition d'une valeur vérifiant un attribut utilisateur",
      'search.targets.userRegexAttr':
        "Définition d'une expression régulière vérifiant une valeur d'un attribut utilisateur",
      'user.search.label': 'Rechercher un utilisateur',
      'user.search.desc':
        'Recherche sous la forme : NOM Prénom, sans accent, saisissez un maximum de caractères, 3 caractères minimum',
      'user.search.placeholder': 'Recherche...',
      'filter.label': 'Filtre :',
      'filter.placeholder': 'filtre',
      'pager.nbItems': 'Nb items par page :',
      'userFromGroup.label':
        'Cliquez sur un groupe pour en sélectionner les membres : ',
      'userAttr.attribute.label': 'Attribut utilisateur',
      'userAttr.value.label': "Valeur de l'attribut",
      'userRegexAttr.attribute.label': 'Attribut utilisateur',
      'userRegexAttr.value.label': 'Expression régulière'
    },
    en: {
      'type.group': 'Group',
      'type.user': 'Person',
      'type.userfromgroup': 'Person from group',
      'type.userfromattr': 'Person with an attribute value',
      'type.userfromregexattr':
        'Person with an attribute matching a regular expression',
      cancel: 'Cancel',
      validate: 'Ok',
      'search.targets.group': 'Search on group',
      'search.targets.user': 'Search on user',
      'search.targets.userFromGroup': 'Search on user from group',
      'search.targets.userAttrs':
        'Setting a value that will match a user attribute',
      'search.targets.userRegexAttr':
        'Setting a regular expression matching the value of a user attribute',
      'user.search.label': 'Search a person',
      'user.search.desc':
        'Search style : NAME Firstname, without accent, enter the maximum of characters, 3 characters minimum',
      'user.search.placeholder': 'Search...',
      'filter.label': 'Filter :',
      'filter.placeholder': 'filter',
      'pager.nbItems': 'Nb items per page :',
      'userFromGroup.label': 'Select a group to see members: ',
      'userAttr.attribute.label': "User's attribute",
      'userAttr.value.label': "Attribute's value",
      'userRegexAttr.attribute.label': "User's attribute",
      'userRegexAttr.value.label': 'Regular expression'
    }
  };

  const bootstrapStyle$1 = r$2`
  @charset "UTF-8";
  /*!
    * Bootstrap v5.1.3 (https://getbootstrap.com/)
    * Copyright 2011-2021 The Bootstrap Authors
    * Copyright 2011-2021 Twitter, Inc.
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h4,
  .h4 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  h4,
  .h4 {
    font-size: calc(1.275rem + 0.3vw);
  }
  @media (min-width: 1200px) {
    h4,
    .h4 {
      font-size: 1.5rem;
    }
  }

  ul {
    padding-left: 2rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ul ul {
    margin-bottom: 0;
  }

  a {
    color: #0d6efd;
    text-decoration: underline;
  }
  a:hover {
    color: #0a58ca;
  }

  a:not([href]):not([class]),
  a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }

  label {
    display: inline-block;
  }

  button {
    border-radius: 0;
  }

  button:focus:not(:focus-visible) {
    outline: 0;
  }

  input,
  button,
  select {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  select {
    text-transform: none;
  }

  [role='button'] {
    cursor: pointer;
  }

  select {
    word-wrap: normal;
  }
  select:disabled {
    opacity: 1;
  }

  button,
  [type='button'] {
    -webkit-appearance: button;
  }
  button:not(:disabled),
  [type='button']:not(:disabled) {
    cursor: pointer;
  }

  [hidden] {
    display: none !important;
  }

  .list-unstyled {
    padding-left: 0;
    list-style: none;
  }

  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));
  }
  .row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }

  .col-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .g-3 {
    --bs-gutter-x: 1rem;
    --bs-gutter-y: 1rem;
  }

  .form-label {
    margin-bottom: 0.5rem;
  }

  .col-form-label {
    padding-top: calc(0.375rem + 1px);
    padding-bottom: calc(0.375rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-control {
      transition: none;
    }
  }
  .form-control:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .form-control::-moz-placeholder {
    color: #6c757d;
    opacity: 1;
  }
  .form-control::placeholder {
    color: #6c757d;
    opacity: 1;
  }
  .form-control:disabled,
  .form-control[readonly] {
    background-color: #e9ecef;
    opacity: 1;
  }

  .form-select {
    display: block;
    width: 100%;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    -moz-padding-start: calc(0.75rem - 3px);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-select {
      transition: none;
    }
  }
  .form-select:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .form-select[multiple],
  .form-select[size]:not([size='1']) {
    padding-right: 0.75rem;
    background-image: none;
  }
  .form-select:disabled {
    background-color: #e9ecef;
  }
  .form-select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #212529;
  }

  .input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
  }
  .input-group > .form-control {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
  }
  .input-group > .form-control:focus {
    z-index: 3;
  }
  .input-group .btn {
    position: relative;
    z-index: 2;
  }
  .input-group .btn:focus {
    z-index: 3;
  }

  .input-group:not(.has-validation)
    > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
  .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n + 3) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input-group.has-validation
    > :nth-last-child(n + 3):not(.dropdown-toggle):not(.dropdown-menu),
  .input-group.has-validation > .dropdown-toggle:nth-last-child(n + 4) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input-group
    > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
  }
  .btn:hover {
    color: #212529;
  }
  .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .btn:disabled,
  .btn.disabled {
    pointer-events: none;
    opacity: 0.65;
  }

  .btn-primary {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .btn-primary:hover {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }
  .btn-primary:focus {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
  }
  .btn-primary:active,
  .btn-primary.active,
  .show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #0a58ca;
    border-color: #0a53be;
  }
  .btn-primary:active:focus,
  .btn-primary.active:focus,
  .show > .btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
  }
  .btn-primary:disabled,
  .btn-primary.disabled {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }

  .btn-outline-secondary {
    color: #6c757d;
    border-color: #6c757d;
  }
  .btn-outline-secondary:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
  .btn-outline-secondary:focus {
    box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
  }
  .btn-outline-secondary:active,
  .btn-outline-secondary.active,
  .btn-outline-secondary.dropdown-toggle.show {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
  .btn-outline-secondary:active:focus,
  .btn-outline-secondary.active:focus,
  .btn-outline-secondary.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
  }
  .btn-outline-secondary:disabled,
  .btn-outline-secondary.disabled {
    color: #6c757d;
    background-color: transparent;
  }

  .btn-outline-dark {
    color: #212529;
    border-color: #212529;
  }
  .btn-outline-dark:hover {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
  }
  .btn-check:focus + .btn-outline-dark,
  .btn-outline-dark:focus {
    box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
  }
  .btn-check:checked + .btn-outline-dark,
  .btn-check:active + .btn-outline-dark,
  .btn-outline-dark:active,
  .btn-outline-dark.active,
  .btn-outline-dark.dropdown-toggle.show {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
  }
  .btn-check:checked + .btn-outline-dark:focus,
  .btn-check:active + .btn-outline-dark:focus,
  .btn-outline-dark:active:focus,
  .btn-outline-dark.active:focus,
  .btn-outline-dark.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
  }
  .btn-outline-dark:disabled,
  .btn-outline-dark.disabled {
    color: #212529;
    background-color: transparent;
  }

  .fade {
    transition: opacity 0.15s linear;
  }
  @media (prefers-reduced-motion: reduce) {
    .fade {
      transition: none;
    }
  }
  .fade:not(.show) {
    opacity: 0;
  }

  .collapse:not(.show) {
    display: none;
  }

  .collapsing {
    height: 0;
    overflow: hidden;
    transition: height 0.35s ease;
  }
  @media (prefers-reduced-motion: reduce) {
    .collapsing {
      transition: none;
    }
  }
  .collapsing.collapse-horizontal {
    width: 0;
    height: auto;
    transition: width 0.35s ease;
  }
  @media (prefers-reduced-motion: reduce) {
    .collapsing.collapse-horizontal {
      transition: none;
    }
  }

  .btn-group {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
  }
  .btn-group > .btn {
    position: relative;
    flex: 1 1 auto;
  }
  .btn-group > .btn-check:checked + .btn,
  .btn-group > .btn-check:focus + .btn,
  .btn-group > .btn:hover,
  .btn-group > .btn:focus,
  .btn-group > .btn:active,
  .btn-group > .btn.active {
    z-index: 1;
  }

  .btn-group > .btn:not(:first-child),
  .btn-group > .btn-group:not(:first-child) {
    margin-left: -1px;
  }
  .btn-group > .btn:not(:last-child):not(.dropdown-toggle),
  .btn-group > .btn-group:not(:last-child) > .btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .btn-group > .btn:nth-child(n + 3),
  .btn-group > :not(.btn-check) + .btn,
  .btn-group > .btn-group:not(:first-child) > .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
  }

  .card-body {
    flex: 1 1 auto;
    padding: 1rem 1rem;
  }

  .card-header {
    padding: 0.5rem 1rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
  .card-header:first-child {
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  }

  .card-footer {
    padding: 0.5rem 1rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(0, 0, 0, 0.125);
  }
  .card-footer:last-child {
    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
  }

  .pagination {
    display: flex;
    padding-left: 0;
    list-style: none;
  }

  .page-link {
    position: relative;
    display: block;
    color: #0d6efd;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #dee2e6;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .page-link {
      transition: none;
    }
  }
  .page-link:hover {
    z-index: 2;
    color: #0a58ca;
    background-color: #e9ecef;
    border-color: #dee2e6;
  }
  .page-link:focus {
    z-index: 3;
    color: #0a58ca;
    background-color: #e9ecef;
    outline: 0;
  }

  .page-item:not(:first-child) .page-link {
    margin-left: -1px;
  }
  .page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .page-item.disabled .page-link {
    color: #6c757d;
    pointer-events: none;
    background-color: #fff;
    border-color: #dee2e6;
  }

  .page-link {
    padding: 0.375rem 0.75rem;
  }

  .page-item:first-child .page-link {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .page-item:last-child .page-link {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  .btn-close {
    box-sizing: content-box;
    width: 1em;
    height: 1em;
    padding: 0.25em 0.25em;
    color: #000;
    background: transparent
      url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
      center/1em auto no-repeat;
    border: 0;
    border-radius: 0.25rem;
    opacity: 0.5;
  }
  .btn-close:hover {
    color: #000;
    text-decoration: none;
    opacity: 0.75;
  }
  .btn-close:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    opacity: 1;
  }
  .btn-close:disabled,
  .btn-close.disabled {
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    opacity: 0.25;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1055;
    display: none;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  }

  .modal-dialog {
    position: relative;
    width: auto;
    margin: 0.5rem;
    pointer-events: none;
  }
  .modal.fade .modal-dialog {
    transition: transform 0.3s ease-out;
    transform: translate(0, -50px);
  }
  @media (prefers-reduced-motion: reduce) {
    .modal.fade .modal-dialog {
      transition: none;
    }
  }
  .modal.show .modal-dialog {
    transform: none;
  }

  .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100vw;
    height: 100vh;
    background-color: #000;
  }
  .modal-backdrop.fade {
    opacity: 0;
  }
  .modal-backdrop.show {
    opacity: 0.5;
  }

  .modal-header {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
  }
  .modal-header .btn-close {
    padding: 0.5rem 0.5rem;
    margin: -0.5rem -0.5rem -0.5rem auto;
  }

  .modal-title {
    margin-bottom: 0;
    line-height: 1.5;
  }

  .modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
  }

  .modal-footer {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    padding: 0.75rem;
    border-top: 1px solid #dee2e6;
    border-bottom-right-radius: calc(0.3rem - 1px);
    border-bottom-left-radius: calc(0.3rem - 1px);
  }
  .modal-footer > * {
    margin: 0.25rem;
  }

  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 500px;
      margin: 1.75rem auto;
    }
  }
  @media (min-width: 992px) {
    .modal-lg {
      max-width: 800px;
    }
  }

  .align-items-center {
    align-items: center !important;
  }

  .fw-bold {
    font-weight: 700 !important;
  }

  .mt-2 {
    margin-top: 0.5rem !important;
  }

  .mt-3 {
    margin-top: 1rem !important;
  }
`;

  const jsTreeStyle = r$2`
  /* tree */
  .root-tree {
    padding-left: 0;
    margin-left: 1px;
    margin-right: 1px;
    --min-dimension: var(--min-clickable-dimension, 24px);
  }
  .root-tree li {
    list-style-type: none;
  }
  .root-tree .row-data:focus,
  .root-tree .row-data:hover {
    color: var(--hover-text-color, black);
  }
  .root-tree .row-data.jstree-clicked,
  .root-tree .row-data.jstree-clicked span {
    background-color: var(--selected-background-color, transparent);
    color: var(--selected-text-color, black);
  }
  .root-tree .row,
  .root-tree .row-data {
    display: inline-block;
    min-height: var(--min-dimension);
    min-width: var(--min-dimension);
  }
  .root-tree .row-data span {
    margin-right: 3px;
    margin-left: 3px;
  }
  .root-tree .subtree {
    display: none;
  }
  .root-tree .subtree-active {
    display: block;
  }
  .row {
    width: calc(100% - var(--min-dimension));
    cursor: pointer;
    position: relative;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-right: 1px;
    padding-left: var(--min-dimension);
  }
  .align-items-center {
    align-items: center !important;
  }
  .d-flex {
    display: flex !important;
  }
  .icon-indicator {
    left: calc(var(--min-dimension) / 2);
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
  .row-data {
    width: 100%;
  }
  i.icon {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    margin: 0px 2px;
    font-family: var(--icon-font-family, 'Font Awesome 5 Free');
    font-weight: var(--icon-font-weight, 900);
  }
  i.icon:before {
    content: var(--icon-content, '\\f07b');
  }
  .item-subtree > div > .icon-indicator {
    font-family: var(--icon-fold-font-family, 'Font Awesome 5 Free');
    font-weight: var(--icon-fold-font-weight, 900);
  }
  .item-subtree > div > .icon-indicator:before {
    content: var(--icon-fold-content, '\\f0da');
  }
  .item-active > div > .icon-indicator {
    font-family: var(--icon-unfold-font-family, 'Font Awesome 5 Free');
    font-weight: var(--icon-unfold-font-weight, 900);
  }
  .item-active > div > .icon-indicator:before {
    content: var(--icon-unfold-content, '\\f0d7');
  }
  i.icon-0 {
    font-family: var(--icon-0-font-family, 'Font Awesome 5 Free');
    font-weight: var(--icon-0-font-weight, 900);
  }
  i.icon-0:before {
    content: var(--icon-0-content, '\\f07b');
  }
  i.icon-1 {
    font-family: var(--icon-1-font-family, 'Font Awesome 5 Free');
    font-weight: var(--icon-1-font-weight, 900);
  }
  i.icon-1:before {
    content: var(--icon-1-content, '\\f07b');
  }
  i.icon-2 {
    font-family: var(--icon-2-font-family, 'Font Awesome 5 Free');
    font-weight: var(--icon-2-font-weight, 900);
  }
  i.icon-2:before {
    content: var(--icon-2-content, '\\f07b');
  }
  i.icon-3 {
    font-family: var(--icon-3-font-family, 'Font Awesome 5 Free');
    font-weight: var(--icon-3-font-weight, 900);
  }
  i.icon-3:before {
    content: var(--icon-3-content, '\\f07b');
  }
  i.icon-4 {
    font-family: var(--icon-4-font-family, 'Font Awesome 5 Free');
    font-weight: var(--icon-4-font-weight, 900);
  }
  i.icon-4:before {
    content: var(--icon-4-content, '\\f07b');
  }
  i.icon-5 {
    font-family: var(--icon-5-font-family, 'Font Awesome 5 Free');
    font-weight: var(--icon-5-font-weight, 900);
  }
  i.icon-5:before {
    content: var(--icon-5-content, '\\f07b');
  }
  i.icon-6 {
    font-family: var(--icon-6-font-family, 'Font Awesome 5 Free');
    font-weight: var(--icon-6-font-weight, 900);
  }
  i.icon-6:before {
    content: var(--icon-6-content, '\\f07b');
  }
  i.icon-7 {
    font-family: var(--icon-7-font-family, 'Font Awesome 5 Free');
    font-weight: var(--icon-7-font-weight, 900);
  }
  i.icon-7:before {
    content: var(--icon-7-content, '\\f07b');
  }
  i.icon-8 {
    font-family: var(--icon-8-font-family, 'Font Awesome 5 Free');
    font-weight: var(--icon-8-font-weight, 900);
  }
  i.icon-8:before {
    content: var(--icon-8-content, '\\f07b');
  }
  i.icon-9 {
    font-family: var(--icon-9-font-family, 'Font Awesome 5 Free');
    font-weight: var(--icon-9-font-weight, 900);
  }
  i.icon-9:before {
    content: var(--icon-9-content, '\\f07b');
  }
  i.icon-10 {
    font-family: var(--icon-10-font-family, 'Font Awesome 5 Free');
    font-weight: var(--icon-10-font-weight, 900);
  }
  i.icon-10:before {
    content: var(--icon-10-content, '\\f07b');
  }
`;

  /**
   * Js-Tree component.
   */
  class JsTree extends s {
    static get styles() {
      return [jsTreeStyle]
    }

    static get properties() {
      return {
        /**
         * Tableau des valeurs racine de l'arbre.
         * @type {Array}
         */
        datas: { attribute: false },

        /**
         * Configuration de l'arbre.
         * @type {Object}
         */
        config: { attribute: false },

        /**
         * Fonction appelée à la sélection d'un élement de l'arbre.
         * @type {Function}
         */
        onSelection: { attribute: false }
      }
    }

    constructor() {
      super();

      this._datas = [];
      this._initKeyboardNavigation = false;
      this._activeElement = null;
    }

    render() {
      return this._renderTree(this._datas, 0, null)
    }

    willUpdate(changedProperties) {
      super.willUpdate(changedProperties);

      // Si les propriétés datas ou config sont modifiées, on initialise les éléments
      let initDatas = false;
      if (changedProperties) {
        initDatas = changedProperties.has('datas') || changedProperties.has('config');
      }

      if (initDatas) {
        // Initialisation des données
        this._datas = this.datas;
        this._initKeyboardNavigation = false;
        this._initDataList(this._datas, this.config.identifier);

        // Initialisation de la navigation au clavier
        this._activeElement =
          this._datas && this._datas.length > 0 ? this._datas[0] : null;
      }
    }

    updated(changedProperties) {
      super.updated(changedProperties);

      // Cochage des checkbox des éléments sélectionnés
      this.shadowRoot.querySelectorAll('input[type="checkbox"]').forEach(el => {
        const data = this._findDatasByProperty(
          this._datas,
          'idHtml',
          el.id.replace('-checkbox', '')
        );
        if (data && data.length === 1) {
          el.checked = data[0].selected;
        }
      });

      // Focus sur l'élément actif
      if (this._initKeyboardNavigation && this.activeElement) {
        this.shadowRoot.querySelectorAll('li').forEach(el => {
          if (el.id === this.activeElement.idHtml) {
            el.focus();
          }
        });
      }
    }

    /**
     * Méthode permettant de sélectionner un noeud à partir de son id.
     *
     * @param {String} id Identifiant du noeud
     */
    selectNode(id) {
      if (id) {
        const data = this._findDatasByProperty(this._datas, 'id', id);
        if (data && data.length > 0 && !data[0].selected) {
          this._onClickItem(null, data[0]);
        }
      }
    }

    /**
     * Méthode permettant de désélectionner tous les noeuds.
     */
    deselectAllNodes() {
      const previousSelectedDatas = this._findDatasByProperty(
        this._datas,
        'selected',
        true
      );
      if (previousSelectedDatas && previousSelectedDatas.length > 0) {
        this._unSelectDatas(this._datas);

        this.requestUpdate();

        // Information d'une sélection/désélection
        this._sendSelection();
      }
    }

    /**
     * Méthode permettant d'ajouter un nouveau noeud.
     *
     * @param {String} idParent Identifiant du noeud parent
     * @param {Object} properties Propriétés du nouveau noeud
     */
    addNode(idParent, properties) {
      if (idParent) {
        const parent = this._findDatasByProperty(this._datas, 'id', idParent);
        if (parent && parent.length > 0 && parent[0].areChildrenLoaded) {
          this._initDataList([properties], parent[0].idHtml);
          properties.parent = parent[0];
          parent[0].loadedChildren.push(properties);

          this.requestUpdate();
        }
      } else {
        this._initDataList([properties], this.config.identifier);
        properties.parent = null;
        this._datas.push(properties);

        this.requestUpdate();
      }
    }

    /**
     * Méthode permettant de supprimer un noeud à partir de son id.
     *
     * @param {String} id Identifiant du noeud
     */
    deleteNode(id) {
      if (id) {
        const data = this._findDatasByProperty(this._datas, 'id', id);
        if (data && data.length > 0) {
          const previousSelectedDatas = this._findDatasByProperty(
            this._datas,
            'selected',
            true
          );
          if (data[0].parent) {
            data[0].parent.loadedChildren = data[0].parent.loadedChildren.filter(
              child => child.id !== data[0].id
            );
          } else {
            this._datas = this._datas.filter(child => child.id !== data[0].id);
          }

          this.requestUpdate();

          const nextSelectedDatas = this._findDatasByProperty(
            this._datas,
            'selected',
            true
          );
          if (previousSelectedDatas.length !== nextSelectedDatas.length) {
            // Information d'une désélection
            this._sendSelection();
          }
        }
      }
    }

    /**
     * Méthode permettant de recharger un noeud.
     *
     * @param {String} id Identifiant du noeud
     * @param {Object} properties Nouvelles propriétés du noeud
     * @param {Boolean} refreshChildren Indique s'il faut rafraichir les enfants
     */
    refreshNode(id, properties, refreshChildren = false) {
      if (id) {
        const data = this._findDatasByProperty(this._datas, 'id', id);
        if (data && data.length > 0) {
          const previousSelectedDatas = this._findDatasByProperty(
            this._datas,
            'selected',
            true
          );

          this._refreshNodes(data[0], properties, refreshChildren).then(() => {
            this.requestUpdate();

            const nextSelectedDatas = this._findDatasByProperty(
              this._datas,
              'selected',
              true
            );
            if (previousSelectedDatas.length !== nextSelectedDatas.length) {
              // Information d'une désélection
              this._sendSelection();
            }
          });
        }
      }
    }

    /**
     * Fonction récursive pour construire un niveau de l'arborescence.
     *
     * @param {Array} datas Tableau des éléments du niveau actuel
     * @param {Number} level Profondeur du niveau actuel
     * @param {Object} parent Elément parent du niveau actuel
     * @returns Code HTML
     */
    _renderTree(datas, level, parent) {
      // Tri des noeuds si demandé
      if (this.config.sort) {
        datas.sort((node1, node2) =>
          node1.text.localeCompare(node2.text)
        );
      }
      // prettier-ignore
      return $`
      <ul id="${this.config.identifier}" class="${level === 0 ? 'root-tree' : parent.ulClasses.join(' ')}"
          role="${level === 0 ? (this.config.isMultipleSelection ? 'listbox' : 'tree') : 'group'}"
          aria-multiselectable="${level === 0 && this.config.isMultipleSelection ? 'true' : 'false'}" tabindex="${level === 0 ? '0' : '-1'}"
          aria-activedescendant="${level === 0 && this.activeElement ? this.activeElement.idHtml : ''}"
          aria-labelledby="${parent ? parent.idHtml + '-text' : ''}" @keydown="${(e) => this._onKeyDown(e)}">
        ${(datas || []).map((data) => {
          return $`
            <li id ="${data.idHtml}" class="${data.liClasses.join(' ')}" tabindex="-1" aria-expanded="${data.expanded}" 
                role="${this.config.showCheckbox ? 'option' : 'treeitem'}" aria-selected="${data.selected}">
                <div class="row" @click="${(e) => this._onClickRow(e, data)}">
                  ${this._renderIconIndicator(data)}
                  <div class="row-data d-flex align-items-center ${data.selected ? 'jstree-clicked' : ''}" @click="${(e) => this._onClickItem(e, data)}">
                    ${this._renderCheckbox(data)}
                    <i class="icon ${data.iconIndex !== null ? 'icon-' + data.iconIndex : ''}" aria-hidden="true"></i>
                    <span id="${data.idHtml}-text">${data.text}</span>
                  </div>
                </div>
                ${data.loadedChildren ? this._renderTree(data.loadedChildren, level + 1 , data) : ''}
            </li>`
        })}
      </ul>
    `
    }

    /**
     * Retourne le code HTML de l'icône plié/déplié d'un élement.
     *
     * @param {Object} data Elément
     * @returns Code HTML
     */
    _renderIconIndicator(data) {
      if (data.children && (!data.areChildrenLoaded || (data.loadedChildren && data.loadedChildren.length > 0))) {
        // prettier-ignore
        return  $`<i class="icon icon-indicator"></i>`
      } else {
        return $``
      }
    }

    /**
     * Retourne le code HTML de la checkbox d'un élement.
     *
     * @param {Object} data Elément
     * @returns Code HTML
     */
    _renderCheckbox(data) {
      if (this.config.showCheckbox) {
        // prettier-ignore
        return  $`<input type="checkbox" id ="${data.idHtml}-checkbox"
        tabindex="-1" ?checked="${data.selected}" aria-checked="${data.selected}" aria-labelledby="${data.idHtml}-text"
        ?disabled="${this.config.allowDeselection === false && data.selected}">`
      } else {
        return $``
      }
    }

    /**
     * Méthode appelé au clic sur un élément entrainant sa sélection/désélection.
     *
     * @param {Object} event Evènement
     * @param {Object} data Elément cliqué
     */
    _onClickItem(event, data) {
      if (event) {
        event.stopPropagation();
      }
      this.activeElement = data;

      if (this.config.allowDeselection !== false || !data.selected) {
        const oldValue = data.selected;
        // Si sélection simple, on désélectionne les éléments préalablement sélectionnés
        if (!this.config.isMultipleSelection) {
          this._unSelectDatas(this._datas);
        }
        data.selected = !oldValue;

        this.requestUpdate();

        // Information d'une sélection/désélection
        this._sendSelection();
      }
    }

    /**
     * Méthode appelé au clic sur une ligne de l'arborescence entrainant son dépliage/repliage.
     *
     * @param {Object} event Evènement
     * @param {Object} data Elément cliqué
     */
    _onClickRow(event, data) {
      event.stopPropagation();
      this.activeElement = data;
      if (data.children) {
        if (data.expanded) {
          // On replie l'élément
          data.expanded = false;
          if (data.ulClasses.includes('subtree-active')) {
            data.ulClasses.splice(data.ulClasses.indexOf('subtree-active'), 1);
          }
          if (data.liClasses.includes('item-active')) {
            data.liClasses.splice(data.liClasses.indexOf('item-active'), 1);
          }
          this.requestUpdate();
        } else {
          // On déplie l'élément
          if (data.children) {
            data.expanded = true;
            data.ulClasses.push('subtree-active');
            data.liClasses.push('item-active');
            if (!data.areChildrenLoaded) {
              this._loadDataChildren(data, () => this.requestUpdate());
            } else {
              this.requestUpdate();
            }
          }
        }
      }
    }

    /**
     * Méthode appelé à la navigation au clavier dans l'arborescence.
     *
     * @param {Object} event Evènement
     */
    _onKeyDown(event) {
      if (event.keyCode === 13 || event.keyCode === 32) {
        // Touche entrée ou Espace
        this._onClickItem(event, this.activeElement);
      } else if (event.keyCode === 37) {
        // Touche gauche
        // On replie l'élément actif
        if (this.activeElement.expanded) {
          this.activeElement.expanded = false;
          if (this.activeElement.ulClasses.includes('subtree-active')) {
            this.activeElement.ulClasses.splice(
              this.activeElement.ulClasses.indexOf('subtree-active'),
              1
            );
          }
          if (this.activeElement.liClasses.includes('item-active')) {
            this.activeElement.liClasses.splice(
              this.activeElement.liClasses.indexOf('item-active'),
              1
            );
          }
        } else if (
          this.activeElement.parent &&
          this.activeElement.parent.expanded
        ) {
          this.activeElement = this.activeElement.parent;
        }
        event.preventDefault();
        event.stopPropagation();
        this.requestUpdate();
      } else if (event.keyCode === 38) {
        // Touche haut
        // On se déplace sur l'élement au dessus
        const sibbling = this._getUpVisibleSiblingElement(this.activeElement);
        if (sibbling != null) {
          this.activeElement = sibbling;
        }
        event.preventDefault();
        event.stopPropagation();
        this.requestUpdate();
      } else if (event.keyCode === 39) {
        // Touche droite
        // On déplie l'élément actif
        if (this.activeElement.children) {
          if (this.activeElement.expanded) {
            if (
              this.activeElement.loadedChildren &&
              this.activeElement.loadedChildren.length > 0
            ) {
              this.activeElement = this.activeElement.loadedChildren[0];
            }
            event.preventDefault();
            event.stopPropagation();
            this.requestUpdate();
          } else {
            this.activeElement.expanded = true;
            this.activeElement.ulClasses.push('subtree-active');
            this.activeElement.liClasses.push('item-active');
            this._loadDataChildren(this.activeElement, () => {
              event.preventDefault();
              event.stopPropagation();
              this.requestUpdate();
            });
          }
        } else {
          event.preventDefault();
          event.stopPropagation();
        }
      } else if (event.keyCode === 40) {
        // Touche bas
        // On se déplace sur l'élement en dessus
        if (this._initKeyboardNavigation) {
          if (
            this.activeElement.expanded &&
            this.activeElement.loadedChildren &&
            this.activeElement.loadedChildren.length > 0
          ) {
            this.activeElement = this.activeElement.loadedChildren[0];
          } else {
            const sibbling = this._getDownVisibleSiblingElement(
              this.activeElement
            );
            if (sibbling != null) {
              this.activeElement = sibbling;
            }
          }
        }
        event.preventDefault();
        event.stopPropagation();
        this.requestUpdate();
      }
      this._initKeyboardNavigation = true;
    }

    /**
     * Initialisation des données des éléments.
     *
     * @param {Array} datas Tableau des éléments
     * @param {String} parentIdHtml Identifiant HTML du parent des éléments
     */
    _initDataList(datas, parentIdHtml) {
      if (datas && datas.length > 0) {
        datas.forEach(data => {
          data.ulClasses = ['subtree'];
          data.liClasses = [];
          if (data.children) {
            data.liClasses.push('item-subtree');
          }
          data.expanded = false;
          data.parent = null;
          data.idHtml = (parentIdHtml || '') + '-' + data.id;
          data.selected = false;
          data.loadedChildren = null;
          data.areChildrenLoaded = false;
        });
      }
    }

    /**
     * Méthode récursive permettant de désélectionner tous les éléments.
     *
     * @param {Array} datas Tableau des éléments
     */
    _unSelectDatas(datas) {
      datas.forEach(data => {
        data.selected = false;
        if (data.loadedChildren) {
          this._unSelectDatas(data.loadedChildren);
        }
      });
    }

    /**
     * Méthode récursive permettant de recherche des éléments selon une propriété.
     *
     * @param {Array} datas Tableau des éléments
     * @param {String} propertyName Nom de la propriété recherchée
     * @param {String|Number} propertyValue Valeur de la propriété recherchée
     * @returns Tableau des éléments trouvés
     */
    _findDatasByProperty(datas, propertyName, propertyValue) {
      let result = [];
      datas.forEach(data => {
        if (data[propertyName] === propertyValue) {
          result.push(data);
        }
        if (data.children && data.loadedChildren) {
          result = result.concat(
            this._findDatasByProperty(
              data.loadedChildren,
              propertyName,
              propertyValue
            )
          );
        }
      });
      return result
    }

    /**
     * Méthode chargeant les enfants d'un élément.
     *
     * @param {Object} data Elément
     * @param {Function} callback Fonction appelé après le chargement des enfants
     */
    _loadDataChildren(data, callback) {
      this._getChildren(data, children => {
        this._initDataList(children, data.idHtml);
        data.loadedChildren = children;
        data.loadedChildren.forEach(child => (child.parent = data));
        data.areChildrenLoaded = true;
        if (callback) {
          callback();
        }
      });
    }

    /**
     * Méthode récupérant les enfants d'un élément.
     *
     * @param {Object} data Elément
     * @param {Function} callback Fonction appelé après la récupération des enfants
     */
    _getChildren(data, callback) {
      if (typeof data.getChildren === 'function') {
        data.getChildren().then(children => {
          callback(children);
        });
      } else if (
        Array.isArray(data.getChildren) ||
        data.getChildren instanceof Array
      ) {
        callback(data.getChildren);
      }
    }

    /**
     * Méthode récursive permettant de trouver l'élément en dessous d'un élément donné.
     *
     * @param {Object} element Elément
     * @returns Elément en dessous
     */
    _getDownVisibleSiblingElement(element) {
      if (element.parent) {
        for (let i = 0; i < element.parent.loadedChildren.length; i++) {
          if (element.parent.loadedChildren[i].id === element.id) {
            if (i < element.parent.loadedChildren.length - 1) {
              return element.parent.loadedChildren[i + 1]
            } else {
              return this._getDownVisibleSiblingElement(element.parent)
            }
          }
        }
      } else {
        for (let i = 0; i < this._datas.length; i++) {
          if (this._datas[i].id === element.id) {
            if (i < this._datas.length - 1) {
              return this._datas[i + 1]
            }
          }
        }
      }
      return null
    }

    /**
     * Méthode permettant de trouver l'élément au dessus d'un élément donné.
     *
     * @param {Object} element Elément
     * @returns Elément au dessus
     */
    _getUpVisibleSiblingElement(element) {
      if (element.parent) {
        for (let i = 0; i < element.parent.loadedChildren.length; i++) {
          if (element.parent.loadedChildren[i].id === element.id) {
            if (i > 0) {
              return this._getLastVisibleChild(
                element.parent.loadedChildren[i - 1]
              )
            } else {
              return element.parent
            }
          }
        }
      } else {
        for (let i = 0; i < this._datas.length; i++) {
          if (this._datas[i].id === element.id) {
            if (i > 0) {
              return this._getLastVisibleChild(this._datas[i - 1])
            }
          }
        }
      }
      return null
    }

    /**
     * Méthode récursive permettant de trouver l'élément enfant le plus bas d'un élément donné.
     *
     * @param {Object} element Elément
     * @returns Elément le plus bas
     */
    _getLastVisibleChild(element) {
      if (
        element.expanded &&
        element.loadedChildren &&
        element.loadedChildren.length > 0
      ) {
        return this._getLastVisibleChild(
          element.loadedChildren[element.loadedChildren.length - 1]
        )
      } else {
        return element
      }
    }

    /**
     * Méthode pour indiquer qu'une sélection/désélection a été faite.
     */
    _sendSelection() {
      // Appel de la méthode pour informer d'une sélection/désélection
      if (this.onSelection) {
        const selectedDatas = this._findDatasByProperty(
          this._datas,
          'selected',
          true
        );
        this.onSelection(selectedDatas);
      }
    }

    /**
     * Méthode permettant de recharger des noeuds.
     *
     * @param {Object} oldNode Anciennes données du noeud
     * @param {Object} newNode Nouvelles données du noeud
     * @param {Boolean} refreshChildren Indique s'il faut rafraichir les enfants du noeud
     */
    _refreshNodes(oldNode, newNode, refreshChildren) {
      return new Promise(resolve => {
        Object.assign(oldNode, newNode);
        if (refreshChildren && oldNode.children && oldNode.areChildrenLoaded) {
          this._getChildren(oldNode, newChildren => {
            // Suppresson des enfants qui ne sont plus là
            const newIds = newChildren.map(c => c.id);
            oldNode.loadedChildren = oldNode.loadedChildren.filter(child =>
              newIds.includes(child.id)
            );
            // Ajout/Mise à jour des enfants
            let index = 0;
            const promises = [];
            newChildren.forEach(newChild => {
              const oldChild = oldNode.loadedChildren.find(
                c => c.id === newChild.id
              );
              if (!oldChild) {
                this._initDataList([newChild], oldNode.idHtml);
                newChild.parent = oldNode;
                oldNode.loadedChildren.splice(index, 0, newChild);
              } else {
                promises.push(
                  this._refreshNodes(oldChild, newChild, refreshChildren)
                );
              }
              index++;
            });
            Promise.all(promises).then(() => resolve());
          });
        } else {
          resolve();
        }
      })
    }
  }

  if (!customElements.get('esup-js-tree')) {
    customElements.define('esup-js-tree', JsTree);
  }

  /**
   * Subject Search Button component.
   */
  class SubjectSearchButton extends s {
    static get styles() {
      return [subjectSearchButtonStyle, bootstrapStyle$1, bootstrapToolTipStyle]
    }

    static get properties() {
      return {
        /**
         * Type de recherche.
         * @type {String}
         */
        searchType: { attribute: false },

        /**
         * Recherche étendue ou non.
         * @type {Boolean}
         */
        withExtended: { attribute: false },

        /**
         * Identifiant unique du composant.
         * @type {String}
         */
        searchId: { attribute: false },

        /**
         * Indique si on est en multisélection.
         * @type {Boolean}
         */
        multiSelection: { attribute: false },

        /**
         * Configuration du subject-search-button.
         * @type {Object}
         */
        config: { attribute: false },

        /**
         * Fonction appelée à la sélection de données.
         * @type {Function}
         */
        onSelection: { attribute: false }
      }
    }

    constructor() {
      super();
      this._localization = new Localization(subjectSearchButtonLabel, 'fr');
      this._container = { subjects: [] };
      this._tooltips = [];
      this._search = { queryUserTerm: '', filter: '' };
      this._resultsArr = [];
      this._userResult = [];
      this._nbTotalItems = 0;
      this._currentPage = 1;
      this._numPerPage = 10;
      this._listNumPerPage = [5, 10, 25, 50, 100];
    }

    render() {
      var rendering = $``;
      var modals = $``;
      if (this.searchType !== 'PERSON') {
        // prettier-ignore
        rendering = $`
        ${rendering}
        <button type="button" class="btn btn-default btn-outline-dark" @click="${() => this._showGroupListModal()}">
          <i class="icon icon-plus"></i><span>&nbsp;${this._localization.getLabel('type.group')}</span>
        </button>
      `;
        modals = $` ${modals} ${this._renderGroupListModal()} `;
      }
      if (this.searchType !== 'GROUP') {
        // prettier-ignore
        rendering = $`
        ${rendering}
        <button type="button" class="btn btn-default btn-outline-dark" @click="${() => this._showUserListModal()}">
          <i class="icon icon-plus"></i><span>&nbsp;${this._localization.getLabel('type.user')}</span>
        </button>
        <button type="button" class="btn btn-default btn-outline-dark"  @click="${() => this._showUserFromGroupListModal()}">
          <i class="icon icon-plus"></i><span>&nbsp;${this._localization.getLabel('type.userfromgroup')}</span>
        </button>
      `;
        modals = $`
        ${modals} ${this._renderUserListModal()}
        ${this._renderUserFromGroupListModal()}
      `;
      }
      // prettier-ignore
      rendering = $`
      <div class="btn-group" role="group" aria-label="SearchOnUserType">
        ${rendering}
      </div>
    `;
      if (this.withExtended) {
        // prettier-ignore
        rendering = $`
        ${rendering}
        <div class="btn-group" role="group" aria-label="SearchOnUserType">
          <button type="button" class="btn btn-default btn-outline-dark" @click="${() => this._showUserAttributeModal()}">
            <i class="icon icon-plus"></i><span>&nbsp;${this._localization.getLabel('type.userfromattr')}</span>
          </button>
          <button type="button" class="btn btn-default btn-outline-dark" @click="${() => this._showUserAttributeRegexModal()}">
            <i class="icon icon-plus"></i><span>&nbsp;${this._localization.getLabel('type.userfromregexattr')}</span>
          </button>
        </div>
      `;
        modals = $`
        ${modals} ${this._renderUserAttributeModal()}
        ${this._renderUserAttributeRegexModal()}
      `;
      }
      // prettier-ignore
      return $`
      <div class="subject-search-button">
        ${rendering}
        ${modals}
      </div>
    `
    }

    willUpdate(changedProperties) {
      super.willUpdate(changedProperties);

      // Si la propriété config est modifiée, on initialise les éléments
      let initDatas = false;
      if (changedProperties) {
        initDatas = changedProperties.has('config');
      }
      if (initDatas) {
        this._localization.labels = subjectSearchButtonLabel;
        this._localization.lang = this.config && this.config.lang ? this.config.lang : this._localization.lang;
        // Surcharge des labels
        if (this.config && this.config.labels) {
          this._localization.mergeLabels(this.config.labels);
        }
      }

      this._tooltips.length = 0;
    }

    updated(changedProperties) {
      super.updated(changedProperties);

      // Sélection des radiobuton/checkbox des utilisateur sélectionnés dans la modal des utilisateurs
      this.shadowRoot
        .querySelectorAll(
          '#userListModal' + this.searchId + ' input[type="radio"]'
        )
        .forEach(el => {
          el.checked =
            this._resultsArr[el.dataset.index] === this._container.subject;
        });
      this.shadowRoot
        .querySelectorAll(
          '#userListModal' + this.searchId + ' input[type="checkbox"]'
        )
        .forEach(el => {
          el.checked = this._container.subjects.includes(
            this._resultsArr[el.dataset.index]
          );
        });

      // Sélection des radiobuton/checkbox des utilisateurs sélectionnés dans la modal des utilisateurs de groupe
      this.shadowRoot
        .querySelectorAll(
          '#userFromGroupListModal' + this.searchId + ' input[type="radio"]'
        )
        .forEach(el => {
          el.checked =
            this._resultsArr[el.dataset.index] === this._container.subject;
        });
      this.shadowRoot
        .querySelectorAll(
          '#userFromGroupListModal' + this.searchId + ' input[type="checkbox"]'
        )
        .forEach(el => {
          el.checked = this._container.subjects.includes(
            this._resultsArr[el.dataset.index]
          );
        });

      this._tooltips.forEach(tt => tt.updateToolTip(this.shadowRoot));
    }

    _renderGroupListModal() {
      // prettier-ignore
      return $`
      <div class="modal fade" id="${'groupListModal' + this.searchId}" tabindex="-1" role="dialog" aria-labelledby="myGroupListLabel" aria-hidden="true"
        @click="${() => this._hideGroupListModal()}">
        <div class="modal-dialog modal-lg">
          <div class="modal-content" @click="${(e) => e.stopPropagation()}">
            <div class="modal-header">
              <h4 id="myGroupListLabel" class="modal-title">${this._localization.getLabel('search.targets.group')}</h4>
              <button type="button" class="btn-close" @click="${() => this._hideGroupListModal()}" aria-hidden="true"></button>
            </div>
            <div class="modal-body tree">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default btn-outline-dark" @click="${() => this._hideGroupListModal()}">
                <span class="icon icon-cancel"></span>&nbsp;<span>${this._localization.getLabel('cancel')}</span>
              </button>
              <button type="button" class="btn btn-primary validate" @click="${() => this._submitGroupListModal()}" .disabled="${!this._canSubmit()}">
                <span class="icon icon-validate"></span>&nbsp;<span>${this._localization.getLabel('validate')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `
    }

    _renderUserListModal() {
      // prettier-ignore
      return $`
      <div class="modal fade" id="${'userListModal' + this.searchId}" tabindex="-1" role="dialog" aria-labelledby="myUserListLabel" aria-hidden="true"
        @click="${() => this._hideUserListModal()}">
        <div class="modal-dialog modal-lg">
          <div class="modal-content" @click="${(e) => e.stopPropagation()}">
            <div class="modal-header">
              <h4 id="myUserListLabel" class="modal-title">${this._localization.getLabel('search.targets.user')}</h4>
              <button type="button" class="btn-close" @click="${() => this._hideUserListModal()}" aria-hidden="true"></button>
            </div>
            <div class="modal-body">
              <form name="searchUserForm" role="form" novalidate @keydown="${(e) => { if (e.keyCode === 13) { e.preventDefault();this._searchUser(); } }}">
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label for="search" class="col-form-label fw-bold">
                      <span>${this._localization.getLabel('user.search.label')}</span>
                      <span class="icon icon-question" data-tooltip aria-describedby="tooltipuserListModal" @mouseenter="${() => this._showToolTip('userListModal')}" @mouseleave="${() => this._hideToolTip('userListModal')}">
                        ${this._renderToolTip('userListModal', this._localization.getLabel('user.search.desc'))}
                      </span>
                    </label>
                  </div>
                  <div class="col-auto">
                    <div class="input-group">
                      <input class="form-control" type="text" id="search" name="search" placeholder="${this._localization.getLabel('user.search.placeholder')}"
                        value="${this._search.queryUserTerm}" required minlength="3" @keyup="${(e) => this._onInputUserTerm(e.target.value)}">
                      <button type="button" class="btn btn-outline-secondary search" .disabled="${this._search.queryUserTerm.length < 3}" @click="${() => this._searchUser()}">
                        <i class="icon icon-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              ${this._userResult.length > 0 ? $`
                <div class="card mt-3">
                  <div class="card-header">
                    <div class="row g-3 align-items-center">
                      <div class="col-auto">
                        <div class="row g-3 align-items-center">
                          <div class="col-auto">
                            <label for="filter">${this._localization.getLabel('filter.label')}</label>
                          </div>
                          <div class="col-auto">
                            <input id="filter" type="text" @keyup="${(e) => this._onInputFilter(e.target.value)}"
                              class="form-control" placeholder="${this._localization.getLabel('filter.placeholder')}">
                          </div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <div class="row g-3 align-items-center">
                          <div class="col-auto">
                            <label for="nbItems">${this._localization.getLabel('pager.nbItems')}</label>
                          </div>
                          <div class="col-auto">
                            <select id="nbItems" class="form-select" @change="${(e) => this._onChangeNumPerPage(e.target.value)}">
                              ${this._listNumPerPage.map(num => $`
                                <option value="${num}" ?selected=${this._numPerPage === num}>${num}</option>
                              `)}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-body">
                    <ul class="list-unstyled">
                      ${this._resultsArr.map((user, idx) => $`
                        <li>
                          <input type="${this.multiSelection ? 'checkbox' : 'radio'}" name="user" id="${'user' + idx}" data-index="${idx}" @click="${() => this._onUserListSelection(user)}">
                          <label for="${'user' + idx}" data-tooltip aria-describedby="${'tooltipuser' + idx}" @mouseenter="${() => this._showToolTip('user' + idx)}" @mouseleave="${() => this._hideToolTip('user' + idx)}">
                            ${user.displayName}
                            ${this._renderToolTip('user' + idx, this._tooltipUser(user))}
                          </label>
                        </li>
                      `)}
                    </ul>
                  </div>
                  <div class="card-footer">
                    <nav>
                      <ul class="pagination" aria-label="Navigation par page">
                        <li @click="${(e) => this._goToPage(e, 1)}" class="page-item ${this._currentPage <= 1 ? 'disabled' : ''}">
                          <a class="page-link" href="" tabindex="${this._currentPage <= 1 ? -1 : 0}" aria-disabled="${this._currentPage <= 1}">&lt;&lt;</a>
                        </li>
                        <li @click="${(e) => this._goToPage(e, this._currentPage - 1)}" class="page-item ${this._currentPage <= 1 ? 'disabled' : ''}">
                          <a class="page-link" href="" tabindex="${this._currentPage <= 1 ? -1 : 0}" aria-disabled="${this._currentPage <= 1}">&lt;</a>
                        </li>
                        ${this._getVisiblePages().map(page =>  $`
                          <li class="page-item ${this._currentPage === page ? 'active' : ''}" @click="${(e) => this._goToPage(e, page)}"><a class="page-link" href="">${page}</a></li>
                        `)}
                        <li @click="${(e) => this._goToPage(e, this._currentPage + 1)}" class="page-item ${this._currentPage >= this._getTotalPage() ? 'disabled' : ''}">
                          <a class="page-link" href="" tabindex="${this._currentPage >= this._getTotalPage() ? -1 : 0}" aria-disabled="${this._currentPage >= this._getTotalPage()}">&gt;</a>
                        </li>
                        <li @click="${(e) => this._goToPage(e, this._getTotalPage())}" class="page-item ${this._currentPage >= this._getTotalPage() ? 'disabled' : ''}">
                          <a class="page-link" href="" tabindex="${this._currentPage >= this._getTotalPage() ? -1 : 0}" aria-disabled="${this._currentPage >= this._getTotalPage()}">&gt;&gt;</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              ` : $``}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default btn-outline-dark" @click="${() => this._hideUserListModal()}">
                <span class="icon icon-cancel"></span>&nbsp;<span>${this._localization.getLabel('cancel')}</span>
              </button>
              <button type="button" class="btn btn-primary validate" @click="${() => this._submitUserListModal()}" .disabled="${!this._canSubmit()}">
                <span class="icon icon-validate"></span>&nbsp;<span>${this._localization.getLabel('validate')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `
    }

    _renderUserFromGroupListModal() {
      // prettier-ignore
      return $`
      <div class="modal fade" id="${'userFromGroupListModal' + this.searchId}" tabindex="-1" role="dialog" aria-labelledby="myUserFromGroupListLabel" aria-hidden="true"
        @click="${() => this._hideUserFromGroupListModal()}">
        <div class="modal-dialog modal-lg">
          <div class="modal-content" @click="${(e) => e.stopPropagation()}">
            <div class="modal-header">
              <h4 id="myUserFromGroupListLabel" class="modal-title">${this._localization.getLabel('search.targets.userFromGroup')}</h4>
              <button type="button" class="btn-close" @click="${() => this._hideUserFromGroupListModal()}" aria-hidden="true"></button>
            </div>
            <div class="modal-body">
              <div class="card">
                <div class="card-header">
                  <span>${this._localization.getLabel('userFromGroup.label')}</span>
                </div>
                <div class="card-body tree">
                </div>
              </div>

              ${this._userResult.length > 0 ? $`
                <div class="card mt-2">
                  <div class="card-header">
                    <div class="row g-3 align-items-center">
                      <div class="col-auto">
                        <div class="row g-3 align-items-center">
                          <div class="col-auto">
                            <label for="grpFilter">${this._localization.getLabel('filter.label')}</label>
                          </div>
                          <div class="col-auto">
                            <input id="grpFilter" type="text" @keyup="${(e) => this._onInputFilter(e.target.value)}"
                              class="form-control" placeholder="${this._localization.getLabel('filter.placeholder')}">
                          </div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <div class="row g-3 align-items-center">
                          <div class="col-auto">
                            <label for="grpNbItems">${this._localization.getLabel('pager.nbItems')}</label>
                          </div>
                          <div class="col-auto">
                            <select id="grpNbItems" class="form-select" @change="${(e) => this._onChangeNumPerPage(e.target.value)}">
                              ${this._listNumPerPage.map(num => $`
                                <option value="${num}" ?selected=${this._numPerPage === num}>${num}</option>
                              `)}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-body">
                    <ul class="list-unstyled">
                      ${this._resultsArr.map((user, idx) => $`
                        <li>
                          <input type="${this.multiSelection ? 'checkbox' : 'radio'}" name="grpUser" id="${'grpUser' + idx}" data-index="${idx}" @click="${() => this._onUserFromGroupListSelection(user)}">
                          <label for="${'grpUser' + idx}" data-tooltip aria-describedby="${'tooltipgrpUser' + idx}" @mouseenter="${() => this._showToolTip('grpUser' + idx)}" @mouseleave="${() => this._hideToolTip('grpUser' + idx)}">
                            ${user.displayName}
                            ${this._renderToolTip('grpUser' + idx, this._tooltipUser(user))}
                          </label>
                        </li>
                      `)}
                    </ul>
                  </div>
                  <div class="card-footer">
                    <nav>
                      <ul class="pagination" aria-label="Navigation par page">
                        <li @click="${(e) => this._goToPage(e, 1)}" class="page-item ${this._currentPage <= 1 ? 'disabled' : ''}">
                          <a class="page-link" href="" tabindex="${this._currentPage <= 1 ? -1 : 0}" aria-disabled="${this._currentPage <= 1}">&lt;&lt;</a>
                        </li>
                        <li @click="${(e) => this._goToPage(e, this._currentPage - 1)}" class="page-item ${this._currentPage <= 1 ? 'disabled' : ''}">
                          <a class="page-link" href="" tabindex="${this._currentPage <= 1 ? -1 : 0}" aria-disabled="${this._currentPage <= 1}">&lt;</a>
                        </li>
                        ${this._getVisiblePages().map(page =>  $`
                          <li class="page-item ${this._currentPage === page ? 'active' : ''}" @click="${(e) => this._goToPage(e, page)}"><a class="page-link" href="">${page}</a></li>
                        `)}
                        <li @click="${(e) => this._goToPage(e, this._currentPage + 1)}" class="page-item ${this._currentPage >= this._getTotalPage() ? 'disabled' : ''}">
                          <a class="page-link" href="" tabindex="${this._currentPage >= this._getTotalPage() ? -1 : 0}" aria-disabled="${this._currentPage >= this._getTotalPage()}">&gt;</a>
                        </li>
                        <li @click="${(e) => this._goToPage(e, this._getTotalPage())}" class="page-item ${this._currentPage >= this._getTotalPage() ? 'disabled' : ''}">
                          <a class="page-link" href="" tabindex="${this._currentPage >= this._getTotalPage() ? -1 : 0}" aria-disabled="${this._currentPage >= this._getTotalPage()}">&gt;&gt;</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              ` : $``}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default btn-outline-dark" @click="${() => this._hideUserFromGroupListModal()}">
                <span class="icon icon-cancel"></span>&nbsp;<span>${this._localization.getLabel('cancel')}</span>
              </button>
              <button type="button" class="btn btn-primary validate" @click="${() => this._submitUserFromGroupListModal()}" .disabled="${!this._canSubmit()}">
                <span class="icon icon-validate"></span>&nbsp;<span>${this._localization.getLabel('validate')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `
    }

    _renderUserAttributeModal() {
      // prettier-ignore
      return $`
      <div class="modal fade" id="${'userAttributeModal' + this.searchId}" tabindex="-1" role="dialog" aria-labelledby="myUserAttributeLabel" aria-hidden="true"
        @click="${() => this._hideUserAttributeModal()}">
        <div class="modal-dialog modal-lg">
          <div class="modal-content" @click="${(e) => e.stopPropagation()}">
            <div class="modal-header">
              <h4 class="modal-title" id="myUserAttributeLabel">${this._localization.getLabel('search.targets.userAttrs')}</h4>
              <button type="button" class="btn-close" @click="${() => this._hideUserAttributeModal()}" aria-hidden="true"></button>
            </div>
            <div class="modal-body">
              <label class="form-label fw-bold" for="userAttribute">${this._localization.getLabel('userAttr.attribute.label')}</label>
              <select id="userAttribute" name="userAttribute" class="form-select" @change="${(e) => this._onChangeUserAttribute(e.target.value)}" required>
                <option value="" selected></option>
                ${(this.config.extendedAttrs || []).sort((a, b) => a.localeCompare(b)).map(attr => $`
                  <option value="${attr}">${attr}</option>
                `)}
              </select>
              <label class="form-label fw-bold mt-3" for="userValue">${this._localization.getLabel('userAttr.value.label')}</label>
              <input type="text" class="form-control" id="userValue" name="userValue" required minlength="3" maxlength="512"
                @keyup="${(e) => this._onInputUserAttrValue(e.target.value)}">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default btn-outline-dark" @click="${() => this._hideUserAttributeModal()}">
                <span class="icon icon-cancel"></span>&nbsp;<span>${this._localization.getLabel('cancel')}</span>
              </button>
              <button type="button" class="btn btn-primary validate" @click="${() => this._submitUserAttributeModal()}" .disabled="${!this._canSubmit()}">
                <span class="icon icon-validate"></span>&nbsp;<span>${this._localization.getLabel('validate')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `
    }

    _renderUserAttributeRegexModal() {
      // prettier-ignore
      return $`
      <div class="modal fade" id="${'userAttributeRegexModal' + this.searchId}" tabindex="-1" role="dialog" aria-labelledby="myUserAttributeRegexLabel" aria-hidden="true"
        @click="${() => this._hideUserAttributeRegexModal()}">
        <div class="modal-dialog modal-lg">
          <div class="modal-content" @click="${(e) => e.stopPropagation()}">
            <div class="modal-header">
              <h4 id="myUserAttributeRegexLabel" class="modal-title">${this._localization.getLabel('search.targets.userRegexAttr')}</h4>
              <button type="button" class="btn-close" @click="${() => this._hideUserAttributeRegexModal()}" aria-hidden="true"></button>
            </div>
            <div class="modal-body">
              <label class="form-label fw-bold" for="userRegexAttribute">${this._localization.getLabel('userRegexAttr.attribute.label')}</label>
              <select id="userRegexAttribute" name="userRegexAttribute" class="form-select" @change="${(e) => this._onChangeUserRegexAttribute(e.target.value)}" required>
                <option value="" selected></option>
                ${(this.config.extendedAttrs || []).sort((a, b) => a.localeCompare(b)).map(attr => $`
                  <option value="${attr}">${attr}</option>
                `)}
              </select>
              <label class="form-label fw-bold mt-3" for="userRegexValue">${this._localization.getLabel('userRegexAttr.value.label')}</label>
              <input type="text" class="form-control" id="userRegexValue" name="userRegexValue" required minlength="3" maxlength="512"
                @keyup="${(e) => this._onInputUserRegexAttrValue(e.target.value)}">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default btn-outline-dark" @click="${() => this._hideUserAttributeRegexModal()}">
                <span class="icon icon-cancel"></span>&nbsp;<span>${this._localization.getLabel('cancel')}</span>
              </button>
              <button type="button" class="btn btn-primary validate" @click="${() => this._submitUserAttributeRegexModal()}" .disabled="${!this._canSubmit()}">
                <span class="icon icon-validate"></span>&nbsp;<span>${this._localization.getLabel('validate')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `
    }

    /**
     * Retourne le code HTML d'un tooltip.
     *
     * @param {String} id Identifiant du tooltip
     * @param {String} tooltip Texte du tooltip
     * @returns Code HTML
     */
    _renderToolTip(id, tooltip) {
      const newToolTip = new ToolTip('tooltip' + id);
      this._tooltips.push(newToolTip);
      return newToolTip.renderToolTip(tooltip)
    }

    /**
     * Méthode affichant un tooltip.
     *
     * @param {String} id Identifiant du tooltip
     */
    _showToolTip(id) {
      const tooltip = this._tooltips.find(tt => tt.id === 'tooltip' + id);
      if (tooltip) {
        tooltip.showToolTip();
      }
    }

    /**
     * Méthode masquant un tooltip.
     *
     * @param {String} id Identifiant du tooltip
     */
    _hideToolTip(id) {
      const tooltip = this._tooltips.find(tt => tt.id === 'tooltip' + id);
      if (tooltip) {
        tooltip.hideToolTip();
      }
    }

    /**
     * Affichage de la modal de liste des groupes.
     */
    _showGroupListModal() {
      this._clearSubject();
      var tree = this.shadowRoot.querySelector('#jsTreeGroup' + this.searchId);
      if (!tree) {
        tree = document.createElement('esup-js-tree');
        tree.setAttribute('id', 'jsTreeGroup' + this.searchId);
        tree.datas = this.config.treeGroupDatas;
        tree.config = Object.assign(
          {
            showCheckbox: true,
            isMultipleSelection: this.multiSelection,
            sort: true
          },
          this.config
        );
        tree.onSelection = datas => this._onTreeGroupSelection(datas);
        this.shadowRoot
          .querySelector('#groupListModal' + this.searchId + ' .tree')
          .appendChild(tree);
      }
      this.shadowRoot.querySelector(
        '#groupListModal' + this.searchId + ' button.validate'
      ).disabled = !this._canSubmit();
      this._showModal('groupListModal' + this.searchId);
    }

    /**
     * Masquage de la modal de liste des groupes.
     */
    _hideGroupListModal() {
      this._clearSubject();
      const tree = this.shadowRoot.querySelector('#jsTreeGroup' + this.searchId);
      if (tree) {
        tree.remove();
      }
      this._hideModal('groupListModal' + this.searchId);
    }

    /**
     * Validation de la modal de liste des groupes.
     */
    _submitGroupListModal() {
      this._submitSubject();
      this._hideGroupListModal();
    }

    /**
     * Affichage de la modal de liste des utilisateurs.
     */
    _showUserListModal() {
      this._clearSubject();
      this.shadowRoot.querySelector(
        '#userListModal' + this.searchId + ' #search'
      ).value = this._search.queryUserTerm;
      this.shadowRoot.querySelector(
        '#userListModal' + this.searchId + ' button.search'
      ).disabled = this._search.queryUserTerm.length < 3;
      this.shadowRoot.querySelector(
        '#userListModal' + this.searchId + ' button.validate'
      ).disabled = !this._canSubmit();
      this._showModal('userListModal' + this.searchId);
    }

    /**
     * Masquage de la modal de liste des utilisateurs.
     */
    _hideUserListModal() {
      this._clearSubject();
      this._hideModal('userListModal' + this.searchId);
    }

    /**
     * Validation de la modal de liste des utilisateurs.
     */
    _submitUserListModal() {
      this._submitSubject();
      this._hideUserListModal();
    }

    /**
     * Affichage de la modal de liste des utilisateurs par groupe.
     */
    _showUserFromGroupListModal() {
      this._clearSubject();
      var tree = this.shadowRoot.querySelector(
        '#jsTreeUserFromGroup' + this.searchId
      );
      if (!tree) {
        tree = document.createElement('esup-js-tree');
        tree.setAttribute('id', 'jsTreeUserFromGroup' + this.searchId);
        tree.datas = this.config.treeGroupDatas;
        tree.config = Object.assign(
          {
            showCheckbox: false,
            isMultipleSelection: false,
            allowDeselection: false,
            sort: true
          },
          this.config
        );
        tree.onSelection = datas => this._onTreeUserFromGroupSelection(datas);
        this.shadowRoot
          .querySelector('#userFromGroupListModal' + this.searchId + ' .tree')
          .appendChild(tree);
      }
      this.shadowRoot.querySelector(
        '#userFromGroupListModal' + this.searchId + ' button.validate'
      ).disabled = !this._canSubmit();
      this._showModal('userFromGroupListModal' + this.searchId);
    }

    /**
     * Masquage de la modal de liste des utilisateurs par groupe.
     */
    _hideUserFromGroupListModal() {
      this._clearSubject();
      const tree = this.shadowRoot.querySelector(
        '#jsTreeUserFromGroup' + this.searchId
      );
      if (tree) {
        tree.remove();
      }
      this._hideModal('userFromGroupListModal' + this.searchId);
    }

    /**
     * Validation de la modal de liste des utilisateurs par groupe.
     */
    _submitUserFromGroupListModal() {
      this._submitSubject();
      this._hideUserFromGroupListModal();
    }

    /**
     * Affichage de la modal d'attribut utilisateur.
     */
    _showUserAttributeModal() {
      this._clearSubject();
      this._container.extendedSubject = {
        keyAttribute: null,
        keyValue: null,
        keyType: 'PERSON_ATTR'
      };
      this.shadowRoot.querySelector(
        '#userAttributeModal' + this.searchId + ' option[value=""]'
      ).selected = true;
      this.shadowRoot.querySelector(
        '#userAttributeModal' + this.searchId + ' #userValue'
      ).value = '';
      this.shadowRoot.querySelector(
        '#userAttributeModal' + this.searchId + ' button.validate'
      ).disabled = !this._canSubmit();
      this._showModal('userAttributeModal' + this.searchId);
    }

    /**
     * Masquage de la modal d'attribut utilisateur.
     */
    _hideUserAttributeModal() {
      this._clearSubject();
      this._hideModal('userAttributeModal' + this.searchId);
    }

    /**
     * Validation de la modal d'attribut utilisateur.
     */
    _submitUserAttributeModal() {
      this._submitSubject();
      this._hideUserAttributeModal();
    }

    /**
     * Affichage de la modal d'attribut utilisateur avec expression régulière.
     */
    _showUserAttributeRegexModal() {
      this._clearSubject();
      this._container.extendedSubject = {
        keyAttribute: null,
        keyValue: null,
        keyType: 'PERSON_ATTR_REGEX'
      };
      this.shadowRoot.querySelector(
        '#userAttributeRegexModal' + this.searchId + ' option[value=""]'
      ).selected = true;
      this.shadowRoot.querySelector(
        '#userAttributeRegexModal' + this.searchId + ' #userRegexValue'
      ).value = '';
      this.shadowRoot.querySelector(
        '#userAttributeRegexModal' + this.searchId + ' button.validate'
      ).disabled = !this._canSubmit();
      this._showModal('userAttributeRegexModal' + this.searchId);
    }

    /**
     * Masquage de la modal d'attribut utilisateur avec expression régulière.
     */
    _hideUserAttributeRegexModal() {
      this._clearSubject();
      this._hideModal('userAttributeRegexModal' + this.searchId);
    }

    /**
     * Validation de la modal d'attribut utilisateur avec expression régulière.
     */
    _submitUserAttributeRegexModal() {
      this._submitSubject();
      this._hideUserAttributeRegexModal();
    }

    /**
     * Indique si le formulaire d'une modale peut être validé.
     *
     * @returns True si le formulaire peut être validée, False sinon
     */
    _canSubmit() {
      return (
        (Utils.isDefined(this._container.subject) &&
          Utils.isDefined(this._container.subject.modelId) &&
          this._container.subject.modelId !== {}) ||
        (Utils.isDefined(this._container.extendedSubject) &&
          this._container.extendedSubject !== {} &&
          this._container.extendedSubject.keyAttribute !== null &&
          this._container.extendedSubject.keyAttribute !== '' &&
          this._container.extendedSubject.keyValue !== null &&
          this._container.extendedSubject.keyValue.length >= 3 &&
          this._container.extendedSubject.keyValue.length <= 512) ||
        (Utils.isDefined(this._container.subjects) &&
          this._container.subjects.length > 0 &&
          Utils.isDefined(
            this._container.subjects[this._container.subjects.length - 1].modelId
          ) &&
          this._container.subjects[this._container.subjects.length - 1]
            .modelId !== {})
      )
    }

    /**
     * Soumission des données sélectionnées.
     */
    _submitSubject() {
      let result = [];
      if (
        this._container.subjects &&
        Utils.isArray(this._container.subjects) &&
        this._container.subjects.length > 0
      ) {
        if (this.multiSelection) {
          result = this._container.subjects;
        } else {
          result.push(
            this._container.subjects[this._container.subjects.length - 1]
          );
        }
      } else if (
        Utils.isDefined(this._container.subject) &&
        Utils.isDefined(this._container.subject.modelId) &&
        this._container.subject.modelId !== {}
      ) {
        result.push(this._container.subject);
      } else if (
        Utils.isDefined(this._container.extendedSubject) &&
        this._container.extendedSubject !== {}
      ) {
        result.push(this._container.extendedSubject);
      }
      if (this.onSelection) {
        this.onSelection(result);
      }
    }

    /**
     * Méthode affichant une modal.
     *
     * @param {String} id Identifiant HTML de la modal
     */
    _showModal(id) {
      let modal = this.shadowRoot.querySelector('#' + id);
      if (modal) {
        // Add backdrop
        let backdrop = this.shadowRoot.querySelector('.modal-backdrop');
        if (!backdrop) {
          const newBackdrop = document.createElement('div');
          newBackdrop.className = 'modal-backdrop fade';
          this.shadowRoot.append(newBackdrop);
          newBackdrop.classList.add('show');
        }

        // Show modal
        modal.style.display = 'block';
        modal.removeAttribute('aria-hidden');
        modal.setAttribute('aria-modal', true);
        modal.setAttribute('role', 'dialog');
        modal.scrollTop = 0;
        modal.querySelector('.modal-body').scrollTop = 0;
        modal.classList.add('show');
        modal.focus();
      }
    }

    /**
     * Méthode masquant une modal.
     *
     * @param {String} id Identifiant HTML de la modal
     */
    _hideModal(id) {
      let modal = this.shadowRoot.querySelector('#' + id);
      if (modal) {
        // Hide modal
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', true);
        modal.removeAttribute('aria-modal');
        modal.removeAttribute('role');
        setTimeout(() => {
          modal.style.display = 'none';

          // Remove backdrop
          const backdrop = this.shadowRoot.querySelector('.modal-backdrop');
          backdrop.classList.remove('show');
          setTimeout(() => {
            backdrop.remove();
          }, 200);
        }, 200);
      }
    }

    /**
     * Retourne le label à afficher dans le tooltip.
     *
     * @param {Object} user Objet contenant les valeurs nécessaire à l'affichage
     * @returns Label à afficher dans le tooltip
     */
    _tooltipUser(user) {
      const userAttrs = this.config.userDisplayedAttrs || [];
      if (
        !Utils.isDefined(userAttrs) ||
        !Utils.isDefined(user) ||
        !Utils.isDefined(user.attributes)
      )
        return
      var index;
      var attrs = user.attributes;
      var resHtml = '';
      for (index = 0; index < userAttrs.length; ++index) {
        if (index > 0 && Utils.isDefined(attrs[userAttrs[index]])) {
          resHtml += ' - ';
        }
        if (
          Utils.isDefined(attrs[userAttrs[index]]) &&
          Utils.isArray(attrs[userAttrs[index]])
        ) {
          var subIndex;
          for (
            subIndex = 0;
            subIndex < attrs[userAttrs[index]].length;
            ++subIndex
          ) {
            if (subIndex > 0) {
              resHtml += ', ';
            }
            resHtml += attrs[userAttrs[index]][subIndex];
          }
        } else if (Utils.isDefined(attrs[userAttrs[index]])) {
          resHtml += attrs[userAttrs[index]];
        }
      }
      return resHtml
    }

    /**
     * Méthode appelé à la sélection/désélection d'un groupe dans l'arbre des goupes.
     *
     * @param {Array} selectedGroups Liste des groupes sélectionnés
     */
    _onTreeGroupSelection(selectedGroups) {
      this._container.subjects = selectedGroups.map(group => group.a_attr.model);
      // Activation/désactivation du bouton de validation de la modale
      this.shadowRoot.querySelector(
        '#groupListModal' + this.searchId + ' button.validate'
      ).disabled = !this._canSubmit();
    }

    /**
     * Méthode appelé à la sélection/désélection d'un groupe dans l'arbre des utilisateurs par groupe.
     *
     * @param {Array} selectedGroups Liste des groupes sélectionnés
     */
    _onTreeUserFromGroupSelection(selectedGroups) {
      this._resultsArr = [];
      this._userResult = [];
      this._search.filter = '';
      this._currentPage = 1;
      this._nbTotalItems = 0;
      if (this.config.getGroupMembers && selectedGroups.length > 0) {
        this.config
          .getGroupMembers(selectedGroups[0].a_attr.model.modelId.keyId)
          .then(result => {
            if (result.length > 0) {
              this._userResult = result;
              this._userResult.sort((user1, user2) =>
                user1.displayName.localeCompare(user2.displayName)
              );
              this._nbTotalItems = this._userResult.length;
              this._resultsArr = this._userResult.slice(0, this._numPerPage);
              this.requestUpdate();
            }
          });
      }
      this._container.subject = undefined;
      this._container.subjects = [];
      // Activation/désactivation du bouton de validation de la modale
      this.shadowRoot.querySelector(
        '#userFromGroupListModal' + this.searchId + ' button.validate'
      ).disabled = !this._canSubmit();
    }

    /**
     * Méthode appelée à la sélection d'un utilisateur d'un groupe.
     *
     * @param {Object} selectedUser utilisateur sélectionné
     */
    _onUserFromGroupListSelection(selectedUser) {
      if (!this.multiSelection) {
        this._container.subject = selectedUser;
      } else {
        if (
          Utils.isDefined(this._container.subjects) &&
          this._container.subjects.length > 0
        ) {
          let index = -1;
          for (let i = 0; i < this._container.subjects.length; i++) {
            if (this._container.subjects[i] === selectedUser) {
              index = i;
              break
            }
          }
          if (index > -1) {
            this._container.subjects.splice(index, 1);
          } else {
            this._container.subjects.push(selectedUser);
          }
        } else {
          this._container.subjects = [selectedUser];
        }
      }
      // Activation/désactivation du bouton de validation de la modale
      this.shadowRoot.querySelector(
        '#userFromGroupListModal' + this.searchId + ' button.validate'
      ).disabled = !this._canSubmit();
    }

    /**
     * Méthode appelé à la saisie dans le champs de recherche utilisateur.
     *
     * @param {String} val Valeur saisie
     */
    _onInputUserTerm(val) {
      this._search.queryUserTerm = val;
      // Activation/désactivation du bouton de recherche
      this.shadowRoot.querySelector(
        '#userListModal' + this.searchId + ' button.search'
      ).disabled = this._search.queryUserTerm.length < 3;
    }

    /**
     * Méthode appelé à la saisie dans le champs de filtre utilisateur.
     *
     * @param {String} val Valeur saisie
     */
    _onInputFilter(val) {
      if (this._search.filter !== val) {
        this._search.filter = val;
        this._currentPage = 1;
        var tmpArray = this._filterOnDisplayName(this._userResult, val);
        this._resultsArr = tmpArray.slice(0, this._numPerPage);
        this._nbTotalItems = tmpArray.length;
        this.requestUpdate();
      }
    }

    /**
     * Méthode appelée au changement de la taille des pages.
     *
     * @param {Numer} val Taille des pages
     */
    _onChangeNumPerPage(val) {
      const _val = Number(val);
      if (this._numPerPage !== _val) {
        this._numPerPage = _val;
        this._currentPage = 1;
        this._resultsArr = this._filterOnDisplayName(
          this._userResult,
          this._search.filter
        ).slice(0, this._numPerPage);
        this.requestUpdate();
      }
    }

    /**
     * Retourne le nombre total de pages.
     *
     * @returns Nombre de pages
     */
    _getTotalPage() {
      return Math.max(1, Math.ceil(this._nbTotalItems / this._numPerPage))
    }

    /**
     * Navigation à une page.
     *
     * @param {Object} event Evenement
     * @param {Number} page Page à afficher
     */
    _goToPage(event, page) {
      event.preventDefault();
      event.stopPropagation();
      if (
        page > 0 &&
        page <= this._getTotalPage() &&
        page !== this._currentPage
      ) {
        this._currentPage = page;
        this._resultsArr = this._filterOnDisplayName(
          this._userResult,
          this._search.filter
        ).slice(
          this._numPerPage * (this._currentPage - 1),
          this._numPerPage * (this._currentPage - 1) + this._numPerPage
        );
        this.requestUpdate();
      }
    }

    /**
     * Méthode retournant les pages visibles dans la pagination.
     *
     * @returns Tableau des pages visibles
     */
    _getVisiblePages() {
      const startPage = Math.max(1, this._currentPage - 2);
      const endPage = Math.min(this._getTotalPage(), this._currentPage + 2);
      const pages = [];
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      if (pages.length < this._getTotalPage()) {
        while (pages.length < Math.min(this._getTotalPage(), 5)) {
          if (pages[0] > 1) {
            pages.splice(0, 0, pages[0] - 1);
          }
          if (pages[pages.length - 1] < this._getTotalPage()) {
            pages.splice(pages.length, 0, pages[pages.length - 1] + 1);
          }
        }
      }
      return pages
    }

    /**
     * Méthode appelée à la sélection d'un utilisateur.
     *
     * @param {Object} selectedUser utilisateur sélectionné
     */
    _onUserListSelection(selectedUser) {
      if (!this.multiSelection) {
        this._container.subject = selectedUser;
      } else {
        if (
          Utils.isDefined(this._container.subjects) &&
          this._container.subjects.length > 0
        ) {
          let index = -1;
          for (let i = 0; i < this._container.subjects.length; i++) {
            if (this._container.subjects[i] === selectedUser) {
              index = i;
              break
            }
          }
          if (index > -1) {
            this._container.subjects.splice(index, 1);
          } else {
            this._container.subjects.push(selectedUser);
          }
        } else {
          this._container.subjects = [selectedUser];
        }
      }
      // Activation/désactivation du bouton de validation de la modale
      this.shadowRoot.querySelector(
        '#userListModal' + this.searchId + ' button.validate'
      ).disabled = !this._canSubmit();
    }

    /**
     * Filtre un tableau utlilisateur selon la propriété displayName.
     *
     * @param {Array} inputArray Tableau d'utlilisateurs
     * @param {String} criteria Critère de filtre
     * @returns Tableau filtré
     */
    _filterOnDisplayName(inputArray, criteria) {
      if (!Utils.isDefined(criteria) || criteria === '') {
        return inputArray
      }
      var data = [];
      inputArray.forEach(item => {
        if (
          item.displayName.toLowerCase().indexOf(criteria.toLowerCase()) !== -1
        ) {
          data.push(item);
        }
      });
      return data
    }

    /**
     * Recherche des utilisateurs.
     */
    _searchUser() {
      if (this._search.queryUserTerm && this._search.queryUserTerm.length >= 3) {
        this._resultsArr = [];
        this._userResult = [];
        this._search.filter = '';
        this._currentPage = 1;
        this._nbTotalItems = 0;
        if (this.config.searchUsers) {
          this.config.searchUsers(this._search.queryUserTerm).then(result => {
            if (result.length > 0) {
              this._userResult = result;
              this._userResult.sort((user1, user2) =>
                user1.displayName.localeCompare(user2.displayName)
              );
              this._nbTotalItems = this._userResult.length;
              this._resultsArr = this._userResult.slice(0, this._numPerPage);
              this.requestUpdate();
            }
          });
        }
        this._container.subject = undefined;
        this._container.subjects = [];
        // Activation/désactivation du bouton de validation de la modale
        this.shadowRoot.querySelector(
          '#userListModal' + this.searchId + ' button.validate'
        ).disabled = !this._canSubmit();
      }
    }

    /**
     * Méthode appelé à la sélection d'un attribut utilisateur.
     *
     * @param {String} val Attribut sélectionné
     */
    _onChangeUserAttribute(val) {
      this._container.extendedSubject.keyAttribute = val;
      // Activation/désactivation du bouton de validation
      this.shadowRoot.querySelector(
        '#userAttributeModal' + this.searchId + ' button.validate'
      ).disabled = !this._canSubmit();
    }

    /**
     * Méthode appelé à la saisie d'une valeur attribut utilisateur.
     *
     * @param {String} val Valeur saisie
     */
    _onInputUserAttrValue(val) {
      this._container.extendedSubject.keyValue = val;
      // Activation/désactivation du bouton de validation
      this.shadowRoot.querySelector(
        '#userAttributeModal' + this.searchId + ' button.validate'
      ).disabled = !this._canSubmit();
    }

    /**
     * Méthode appelé à la sélection d'un attribut utilisateur avec expression régulière.
     *
     * @param {String} val Attribut sélectionné
     */
    _onChangeUserRegexAttribute(val) {
      this._container.extendedSubject.keyAttribute = val;
      // Activation/désactivation du bouton de validation
      this.shadowRoot.querySelector(
        '#userAttributeRegexModal' + this.searchId + ' button.validate'
      ).disabled = !this._canSubmit();
    }

    /**
     * Méthode appelé à la saisie d'une valeur attribut utilisateur avec expression régulière.
     *
     * @param {String} val Valeur saisie
     */
    _onInputUserRegexAttrValue(val) {
      this._container.extendedSubject.keyValue = val;
      // Activation/désactivation du bouton de validation
      this.shadowRoot.querySelector(
        '#userAttributeRegexModal' + this.searchId + ' button.validate'
      ).disabled = !this._canSubmit();
    }

    /**
     * Nettoyages des données.
     */
    _clearSubject() {
      this._container.subject = undefined;
      this._container.extendedSubject = undefined;
      this._container.subjects = [];
      this._search = { queryUserTerm: '', filter: '' };
      this._resultsArr = [];
      this._userResult = [];
      this._currentPage = 1;
      this._numPerPage = 10;

      this.requestUpdate();
    }
  }

  if (!customElements.get('esup-subject-search-button')) {
    customElements.define('esup-subject-search-button', SubjectSearchButton);
  }

  const evaluatorStyle = r$2`
  .evaluator {
    list-style: none;
  }
`;

  const evaluatorLabel = {
    fr: {
      forAdvancedOnly:
        'Vous devez être en mode avancé pour voir ces informations !',
      'authenticatedUsers.text': 'Tous les utilisateurs authentifiés',
      'userAttribute.subjetIs': 'Utilisateur ',
      'userAttribute.attribute': "Utilisateurs avec l'attribut '{attribute}'",
      'userAttribute.mode': " est '{mode}'",
      'userAttribute.value': " la valeur '{value}'",
      'userGroup.memberOf': 'Membres du groupe '
    },
    en: {
      forAdvancedOnly: 'Only Administrators can access to this information !',
      'authenticatedUsers.text': 'All authenticated users',
      'userAttribute.subjetIs': 'User is ',
      'userAttribute.attribute': 'Users with attribute {attribute}',
      'userAttribute.mode': ' is {mode}',
      'userAttribute.value': " to value '{value}'",
      'userGroup.memberOf': 'Members of the group '
    }
  };

  /**
   * Evaluator component.
   */
  class Evaluator extends s {
    static get styles() {
      return [
        evaluatorStyle,
        r$2`
        :host > ul {
          padding: 0;
          margin: 0;
        }
      `
      ]
    }

    static get properties() {
      return {
        /**
         * Objet contenant les données à afficher.
         * @type {Object}
         */
        evaluator: { attribute: false },

        /**
         * Indique si on utilise l'affichage simple ou non
         * @type {Boolean}
         */
        simple: { attribute: false },

        /**
         * Indique si l'élément est affiché dans une liste ou non
         * @type {Boolean}
         */
        isChild: { attribute: false },

        /**
         * Configuration de l'évaluateur.
         * @type {Object}
         */
        config: { attribute: false }
      }
    }

    constructor() {
      super();
      this._localization = new Localization(evaluatorLabel, 'fr');
    }

    render() {
      var rendering = $``;
      if (this.evaluator && this.evaluator.class) {
        switch (this.evaluator.class) {
          case 'OPERATOR':
            if (this.simple) {
              // prettier-ignore
              rendering = $`<esup-simple-evaluators .collection="${this.evaluator.evaluators}" .config="${this.config}"></esup-simple-evaluators>`;
              if (this.isChild || this.evaluator.type !== 'OR') {
                // prettier-ignore
                rendering = $`<span>${this._localization.getLabel('forAdvancedOnly')}</span>`;
              }
            } else {
              // prettier-ignore
              rendering = $`<span>${this.evaluator.type}</span><esup-evaluators .collection="${this.evaluator.evaluators}" .config="${this.config}"></esup-evaluators>`;
            }
            if (!(this.isChild || this.simple)) {
              // prettier-ignore
              rendering = $`<ul class="evaluator"><li>${rendering}</li></ul>`;
            }
            break
          case 'AUTHENTICATED':
            if (!this.simple) {
              // prettier-ignore
              rendering = $`<span>${this._localization.getLabel('authenticatedUsers.text')}</span>`;
            } else {
              // prettier-ignore
              rendering = $`<span>${this._localization.getLabel('forAdvancedOnly')}</span>`;
            }
            break
          case 'USERATTRIBUTES':
          case 'USERMULTIVALUEDATTRIBUTES':
            if (
              this.evaluator.attribute === 'uid' &&
              this.evaluator.mode === 'EQUALS'
            ) {
              const userModelId = {
                keyType: 'PERSON',
                keyId: this.evaluator.value
              };
              if (!this.simple) {
                // prettier-ignore
                rendering = $`<esup-subject-infos .subject="${userModelId}" .config="${this.config}"><span>${this._localization.getLabel('userAttribute.subjetIs')}</span></esup-subject-infos>`;
              } else {
                // prettier-ignore
                rendering = $`<esup-subject-infos .subject="${userModelId}" .config="${this.config}"></esup-subject-infos>`;
              }
            } else {
              if (!this.simple) {
                // prettier-ignore
                rendering = $`
                <span>${this._localization.getLabel('userAttribute.attribute', { attribute: this.evaluator.attribute })}</span>
                <span>${this._localization.getLabel('userAttribute.mode', { mode: this.evaluator.mode })}</span>
                <span>${this._localization.getLabel('userAttribute.value', { value: this.evaluator.value })}</span>
              `;
              } else {
                // prettier-ignore
                rendering = $`<span>${this._localization.getLabel('forAdvancedOnly')}</span>`;
              }
            }
            break
          case 'USERGROUP': {
            const groupModelId = { keyType: 'GROUP', keyId: this.evaluator.group };
            if (!this.simple) {
              // prettier-ignore
              rendering = $`<esup-subject-infos .subject="${groupModelId}" .config="${this.config}"><span>${this._localization.getLabel('userGroup.memberOf')}</span></esup-subject-infos>`;
            } else {
              // prettier-ignore
              rendering = $`<esup-subject-infos .subject="${groupModelId}" .config="${this.config}"></esup-subject-infos>`;
            }
            break
          }
        }
      }
      return rendering
    }

    willUpdate(changedProperties) {
      super.willUpdate(changedProperties);

      // Si la propriété config est modifiée, on initialise les éléments
      let initDatas = false;
      if (changedProperties) {
        initDatas = changedProperties.has('config');
      }

      if (initDatas) {
        // Initialisation des données
        this._localization.labels = evaluatorLabel;
        this._localization.lang = this.config && this.config.lang ? this.config.lang : this._localization.lang;
        // Surcharge des labels
        if (this.config && this.config.labels) {
          this._localization.mergeLabels(this.config.labels);
        }
      }
    }
  }

  if (!customElements.get('esup-evaluator')) {
    customElements.define('esup-evaluator', Evaluator);
  }

  /**
   * Evaluators component.
   */
  class Evaluators extends s {
    static get styles() {
      return [evaluatorStyle]
    }

    static get properties() {
      return {
        /**
         * Tableau des évaluateurs à afficher.
         * @type {Array}
         */
        collection: { attribute: false },

        /**
         * Configuration des évaluateurs.
         * @type {Object}
         */
        config: { attribute: false }
      }
    }

    render() {
      // prettier-ignore
      return $`
      <ul class="evaluator">
        ${(this.collection || []).map((member) => {
          return $`
            <li>
              <esup-evaluator .evaluator="${member}" .config="${this.config}" .isChild="${true}" .simple="${false}"></esup-evaluator>
            </li>
          `
        })}
      </ul>
    `
    }
  }

  if (!customElements.get('esup-evaluators')) {
    customElements.define('esup-evaluators', Evaluators);
  }

  /**
   * Simple Evaluators component.
   */
  class SimpleEvaluators extends s {
    static get styles() {
      return [
        evaluatorStyle,
        r$2`
        :host > ul {
          padding: 0;
          margin: 0;
        }
      `
      ]
    }

    static get properties() {
      return {
        /**
         * Tableau des évaluateurs à afficher.
         * @type {Array}
         */
        collection: { attribute: false },

        /**
         * Configuration des évaluateurs.
         * @type {Object}
         */
        config: { attribute: false }
      }
    }

    render() {
      // prettier-ignore
      return $`
      <ul class="evaluator">
        ${(this.collection || []).map((member) => {
          return $`
            <li>
              <esup-evaluator .evaluator="${member}" .config="${this.config}" .isChild="${true}" .simple="${true}"></esup-evaluator>
            </li>
          `
        })}
      </ul>
    `
    }
  }

  if (!customElements.get('esup-simple-evaluators')) {
    customElements.define('esup-simple-evaluators', SimpleEvaluators);
  }

  const editEvaluatorStyle = r$2`
  .evaluator {
    list-style: none;
  }

  [data-tooltip] {
    position: relative;
  }

  .icon {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    margin: 0px 2px;
  }
  .icon-remove {
    font-family: var(--icon-remove-font-family, 'Font Awesome 5 Free');
    font-weight: var(--icon-remove-font-weight, 900);
  }
  .icon-remove:before {
    content: var(--icon-remove-content, '\\f057');
  }
`;

  const editEvaluatorLabel = {
    fr: {
      'add.button': 'Ajouter',
      'add.operator': 'Opérateur Logique',
      'add.user': 'Personne',
      'add.group': 'Groupe',
      'add.userAttribute': 'Évaluation attribut utilisateur',
      'add.authenticatedUsers': 'Personnes authentifiées',
      'operator.removeChilds': 'Supprimer les enfants ',
      'delete.button': 'Supprimer cet élément',
      'authenticatedUsers.text': 'Tous les utilisateurs authentifiés',
      'userAttribute.subjetIs': 'Utilisateur ',
      'unknown.text': 'Évaluateur inconnu',
      'userGroup.memberOf': 'Membres du groupe '
    },
    en: {
      'add.button': 'Add',
      'add.operator': 'Logical Operator',
      'add.user': 'User',
      'add.group': 'Group',
      'add.userAttribute': "User's attribute",
      'add.authenticatedUsers': 'Authenticated Users',
      'operator.removeChilds': 'Remove children ',
      'delete.button': 'Remove this Evaluator',
      'authenticatedUsers.text': 'All authenticated users',
      'userAttribute.subjetIs': 'User is ',
      'unknown.text': 'Unknown Evaluator',
      'userGroup.memberOf': 'Members of the group '
    }
  };

  const bootstrapStyle = r$2`
  @charset "UTF-8";
  /*!
    * Bootstrap v5.1.3 (https://getbootstrap.com/)
    * Copyright 2011-2021 The Bootstrap Authors
    * Copyright 2011-2021 Twitter, Inc.
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .text-danger {
    --bs-text-opacity: 1;
    color: rgba(220, 53, 69, var(--bs-text-opacity)) !important;
  }

  ul {
    padding-left: 2rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ul ul {
    margin-bottom: 0;
  }

  a {
    color: #0d6efd;
    text-decoration: underline;
  }
  a:hover {
    color: #0a58ca;
  }

  a:not([href]):not([class]),
  a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }

  button {
    border-radius: 0;
  }

  button:focus:not(:focus-visible) {
    outline: 0;
  }

  input,
  button,
  select {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  select {
    text-transform: none;
  }

  [role='button'] {
    cursor: pointer;
  }

  select {
    word-wrap: normal;
  }
  select:disabled {
    opacity: 1;
  }

  button,
  [type='button'] {
    -webkit-appearance: button;
  }
  button:not(:disabled),
  [type='button']:not(:disabled) {
    cursor: pointer;
  }

  [hidden] {
    display: none !important;
  }

  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));
  }
  .row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }

  .col-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .g-0 {
    --bs-gutter-x: 0;
    --bs-gutter-y: 0;
  }

  .g-1 {
    --bs-gutter-x: 0.25rem;
    --bs-gutter-y: 0.25rem;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-control {
      transition: none;
    }
  }
  .form-control:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .form-control::-moz-placeholder {
    color: #6c757d;
    opacity: 1;
  }
  .form-control::placeholder {
    color: #6c757d;
    opacity: 1;
  }
  .form-control:disabled,
  .form-control[readonly] {
    background-color: #e9ecef;
    opacity: 1;
  }

  .form-select {
    display: block;
    width: 100%;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    -moz-padding-start: calc(0.75rem - 3px);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-select {
      transition: none;
    }
  }
  .form-select:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .form-select[multiple],
  .form-select[size]:not([size='1']) {
    padding-right: 0.75rem;
    background-image: none;
  }
  .form-select:disabled {
    background-color: #e9ecef;
  }
  .form-select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #212529;
  }

  .input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
  }

  .input-group:not(.has-validation)
    > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
  .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n + 3) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input-group.has-validation
    > :nth-last-child(n + 3):not(.dropdown-toggle):not(.dropdown-menu),
  .input-group.has-validation > .dropdown-toggle:nth-last-child(n + 4) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input-group
    > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
  }
  .btn:hover {
    color: #212529;
  }
  .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .btn:disabled,
  .btn.disabled {
    pointer-events: none;
    opacity: 0.65;
  }

  .btn-outline-dark {
    color: #212529;
    border-color: #212529;
  }
  .btn-outline-dark:hover {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
  }
  .btn-check:focus + .btn-outline-dark,
  .btn-outline-dark:focus {
    box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
  }
  .btn-check:checked + .btn-outline-dark,
  .btn-check:active + .btn-outline-dark,
  .btn-outline-dark:active,
  .btn-outline-dark.active,
  .btn-outline-dark.dropdown-toggle.show {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
  }
  .btn-check:checked + .btn-outline-dark:focus,
  .btn-check:active + .btn-outline-dark:focus,
  .btn-outline-dark:active:focus,
  .btn-outline-dark.active:focus,
  .btn-outline-dark.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
  }
  .btn-outline-dark:disabled,
  .btn-outline-dark.disabled {
    color: #212529;
    background-color: transparent;
  }

  .collapse:not(.show) {
    display: none;
  }

  .collapsing {
    height: 0;
    overflow: hidden;
    transition: height 0.35s ease;
  }
  @media (prefers-reduced-motion: reduce) {
    .collapsing {
      transition: none;
    }
  }
  .collapsing.collapse-horizontal {
    width: 0;
    height: auto;
    transition: width 0.35s ease;
  }
  @media (prefers-reduced-motion: reduce) {
    .collapsing.collapse-horizontal {
      transition: none;
    }
  }

  .dropdown-toggle {
    white-space: nowrap;
  }
  .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: '';
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }
  .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropdown-menu {
    position: absolute;
    z-index: 1000;
    display: none;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
  }
  .dropdown-menu[data-bs-popper] {
    top: 100%;
    left: 0;
    margin-top: 0.125rem;
  }

  .dropdown-item {
    display: block;
    width: 100%;
    padding: 0.25rem 1rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
  }
  .dropdown-item:hover,
  .dropdown-item:focus {
    color: #1e2125;
    background-color: #e9ecef;
  }
  .dropdown-item.active,
  .dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: #0d6efd;
  }
  .dropdown-item.disabled,
  .dropdown-item:disabled {
    color: #adb5bd;
    pointer-events: none;
    background-color: transparent;
  }

  .dropdown-menu.show {
    display: block;
  }

  .btn-group {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
  }
  .btn-group > .btn {
    position: relative;
    flex: 1 1 auto;
  }
  .btn-group > .btn-check:checked + .btn,
  .btn-group > .btn-check:focus + .btn,
  .btn-group > .btn:hover,
  .btn-group > .btn:focus,
  .btn-group > .btn:active,
  .btn-group > .btn.active {
    z-index: 1;
  }

  .btn-group > .btn:not(:first-child),
  .btn-group > .btn-group:not(:first-child) {
    margin-left: -1px;
  }
  .btn-group > .btn:not(:last-child):not(.dropdown-toggle),
  .btn-group > .btn-group:not(:last-child) > .btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .btn-group > .btn:nth-child(n + 3),
  .btn-group > :not(.btn-check) + .btn,
  .btn-group > .btn-group:not(:first-child) > .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .btn-close {
    box-sizing: content-box;
    width: 1em;
    height: 1em;
    padding: 0.25em 0.25em;
    color: #000;
    background: transparent
      url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
      center/1em auto no-repeat;
    border: 0;
    border-radius: 0.25rem;
    opacity: 0.5;
  }
  .btn-close:hover {
    color: #000;
    text-decoration: none;
    opacity: 0.75;
  }
  .btn-close:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    opacity: 1;
  }
  .btn-close:disabled,
  .btn-close.disabled {
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    opacity: 0.25;
  }

  .align-items-center {
    align-items: center !important;
  }

  .fw-bold {
    font-weight: 700 !important;
  }
`;

  /**
   * Edit Evaluator component.
   */
  class EditEvaluator extends s {
    static get styles() {
      return [
        editEvaluatorStyle,
        bootstrapStyle,
        bootstrapToolTipStyle,
        r$2`
        :host > ul {
          padding: 0;
        }
      `
      ]
    }

    static get properties() {
      return {
        /**
         * Objet contenant les données à éditer.
         * @type {Object}
         */
        evaluator: { attribute: false },

        /**
         * Indique si l'élément est affiché dans une liste ou non
         * @type {Boolean}
         */
        isChild: { attribute: false },

        /**
         * Configuration de l'edit-evaluator.
         * @type {Object}
         */
        config: { attribute: false },

        /**
         * Fonction appelée à la modification de l'évaluateur.
         * @type {Function}
         */
        onModification: { attribute: false }
      }
    }

    constructor() {
      super();
      this._evaluator = undefined;
      this._localization = new Localization(editEvaluatorLabel, 'fr');
      this._tooltip = new ToolTip();
      this._dropdown = null;
      this._userAttributes = [];
    }

    render() {
      var rendering = $``;
      if (
        Utils.isDefined(this.config.operators) &&
        Utils.isDefined(this.config.stringEvaluators) &&
        Utils.isDefined(this._userAttributes) &&
        Utils.isDefined(this._evaluator) &&
        Utils.isDefined(this._evaluator.class)
      ) {
        switch (this._evaluator.class) {
          case 'OPERATOR':
            if (this.isChild) {
              // prettier-ignore
              rendering = $`
              <div class="row g-1 align-items-center">
                <div class="col-auto">
                  <div class="row g-0 align-items-center">
                    <div class="col-auto">
                      <select class="form-select" @change="${(e) => this._onChangeType(e.target.value)}">
                        ${this.config.operators.map(op => $`
                          <option value="${op}" ?selected=${this._evaluator.type === op}>${op}</option>
                        `)}
                      </select>
                    </div>
                    <div class="col-auto">
                      ${this._renderButtons()}
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  ${this._renderDeleteEvaluator()}
                </div>
              </div>
              <esup-edit-evaluators .collection="${this._evaluator.evaluators}" .config="${this.config}"
                @childDeletion="${(e) => this._onChildDeletionEvent(e)}"
                @childUpdate="${(e) => this._onChildUpdateEvent(e)}">
              </esup-edit-evaluators>
            `;
            } else {
              // prettier-ignore
              rendering = $`
              <ul class="evaluator">
                <li>
                  <div class="row g-0 align-items-center">
                    <div class="col-auto">
                      <select class="form-select" @change="${(e) => this._onChangeType(e.target.value)}">
                        ${this.config.operators.map(op => $`
                          <option value="${op}" ?selected=${this._evaluator.type === op}>${op}</option>
                        `)}
                      </select>
                    </div>
                    <div class="col-auto">
                      ${this._renderButtons()}
                    </div>
                  </div>
                  <esup-edit-evaluators .collection="${this._evaluator.evaluators}" .config="${this.config}"
                    @childDeletion="${(e) => this._onChildDeletionEvent(e)}"
                    @childUpdate="${(e) => this._onChildUpdateEvent(e)}">
                  </esup-edit-evaluators>
                </li>
              </ul>
            `;
            }
            break
          case 'AUTHENTICATED':
            // prettier-ignore
            rendering = $`
            <div class="row g-1 align-items-center">
              <div class="col-auto">
                <span>${this._localization.getLabel('authenticatedUsers.text')}</span>
              </div>
              <div class="col-auto">
                ${this._renderDeleteEvaluator()}
              </div>
            </div>
          `;
            break
          case 'USERATTRIBUTES':
          case 'USERMULTIVALUEDATTRIBUTES':
            var userRendering = null;
            if (
              this._evaluator.value &&
              this._evaluator.attribute === 'uid' &&
              this._evaluator.mode === 'EQUALS'
            ) {
              const userModelId = {
                keyType: 'PERSON',
                keyId: this._evaluator.value
              };
              // prettier-ignore
              userRendering = $`
              <esup-subject-infos .subject="${userModelId}" .config="${this.config}">
                <span>${this._localization.getLabel('userAttribute.subjetIs')}</span>
              </esup-subject-infos>
            `;
            } else if (
              this._evaluator.attribute === 'uid' &&
              this._evaluator.mode === 'EQUALS'
            ) {
              // prettier-ignore
              userRendering = $`
              <esup-subject-search-button .multiSelection="${false}" .searchType="${'PERSON'}" .searchId="${this._generateId()}"
                .config="${this.config}" .onSelection="${(subjects) => this._onPersonSelection(subjects)}" class="input-group">
              </esup-subject-search-button>
            `;
            } else {
              // prettier-ignore
              userRendering = $`
              <div class="row g-0 align-items-center">
                <div class="col-auto">
                  <select class="form-select" @change="${(e) => this._onChangeAttribute(e.target.value)}">
                    ${this._userAttributes.map(attr => $`
                      <option value="${attr}" ?selected=${this._evaluator.attribute === attr}>${attr}</option>
                    `)}
                  </select>
                </div>
                <div class="col-auto">
                  <select class="form-select" @change="${(e) => this._onChangeMode(e.target.value)}">
                    ${this.config.stringEvaluators.map(mode => $`
                      <option value="${mode}" ?selected=${this._evaluator.mode === mode}>${mode}</option>
                    `)}
                  </select>
                </div>
                <div class="col-auto">
                  <input type="text" class="form-control" value="${this._evaluator.value || ''}" required @keyup="${(e) => this._onChangeValue(e.target.value)}">
                </div>
              </div>
            `;
            }
            // prettier-ignore
            rendering = $`
            <div class="row g-1 align-items-center">
              <div class="col-auto">
                ${userRendering}
              </div>
              <div class="col-auto">
                ${this._renderDeleteEvaluator()}
              </div>
            </div>
          `;
            break
          case 'USERGROUP':
            var groupRendering = null;
            if (this._evaluator.group && this._evaluator.group !== '') {
              const userModelId = {
                keyType: 'GROUP',
                keyId: this._evaluator.group
              };
              // prettier-ignore
              groupRendering = $`
              <esup-subject-infos .subject="${userModelId}" .config="${this.config}">
                <span>${this._localization.getLabel('userGroup.memberOf')}</span>
              </esup-subject-infos>
            `;
            } else {
              // prettier-ignore
              groupRendering = $`
              <esup-subject-search-button .multiSelection="${false}" .searchType="${'GROUP'}" .searchId="${this._generateId()}"
                .config="${this.config}" .onSelection="${(subjects) => this._onGroupSelection(subjects)}" class="input-group">
              </esup-subject-search-button>
            `;
            }
            // prettier-ignore
            rendering = $`
            <div class="row g-1 align-items-center">
              <div class="col-auto">
                ${groupRendering}
              </div>
              <div class="col-auto">
                ${this._renderDeleteEvaluator()}
              </div>
            </div>
          `;
            break
          default:
            // prettier-ignore
            rendering = $`
            <div class="row g-1 align-items-center">
              <div class="col-auto">
                <span>${this._localization.getLabel('unknown.text')}</span>
              </div>
              <div class="col-auto">
                ${this._renderDeleteEvaluator()}
              </div>
            </div>
          `;
            break
        }
      }
      return rendering
    }

    willUpdate(changedProperties) {
      super.willUpdate(changedProperties);

      // Si les propriétés evaluator ou config sont modifiées, on initialise les éléments
      let initDatas = false;
      if (changedProperties) {
        initDatas = changedProperties.has('evaluator') || changedProperties.has('config');
      }
      if (initDatas) {
        this._evaluator = this.evaluator;
        this._userAttributes = this.config.userAttributes.filter(
          attr => attr !== 'uid'
        );
        this._localization.labels = editEvaluatorLabel;
        this._localization.lang = this.config && this.config.lang ? this.config.lang : this._localization.lang;
        // Surcharge des labels
        if (this.config && this.config.labels) {
          this._localization.mergeLabels(this.config.labels);
        }
      }
    }

    updated(changedProperties) {
      super.updated(changedProperties);

      this._tooltip.updateToolTip(this.shadowRoot);
      this._dropdown = this.shadowRoot.querySelector('#dropdown');
    }

    /**
     * Méthode indiquant si l'évaluateur édité est valide.
     *
     * @returns True si valide, False sinon
     */
    isValid() {
      return this._isValidEvaluator(this._evaluator)
    }

    /**
     * Retourne le code HTML des boutons d'ajout/suppression des évaluateurs.
     *
     * @returns Code HTML
     */
    _renderButtons() {
      // prettier-ignore
      return $`
      <div class="btn-group" role="group">
        <div class="btn-group" role="group" id="dropdown" @focusout="${(e) => this._onDropDownFocusOut(e)}" @keydown="${(e) => this._onDropDownKeyDown(e)}">
          <button type="button" id="dropdown-btn" class="btn btn-default btn-outline-dark dropdown-toggle" aria-expanded="false"
            @click="${() => this._toggleDropDown()}" >
            ${this._localization.getLabel('add.button')}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdown-btn">
            <li><a class="dropdown-item" href="" @click="${(e) => this._addEvaluator(e, 'OPERATOR')}">${this._localization.getLabel('add.operator')}</a></li>
            <li><a class="dropdown-item" href="" @click="${(e) => this._addEvaluator(e, 'USER')}">${this._localization.getLabel('add.user')}</a></li>
            <li><a class="dropdown-item" href="" @click="${(e) => this._addEvaluator(e, 'GROUP')}">${this._localization.getLabel('add.group')}</a></li>
            <li><a class="dropdown-item" href="" @click="${(e) => this._addEvaluator(e, 'AUTH')}">${this._localization.getLabel('add.authenticatedUsers')}</a></li>
            <li><a class="dropdown-item" href="" @click="${(e) => this._addEvaluator(e, 'ATTRIBUTE')}">${this._localization.getLabel('add.userAttribute')}</a></li>
          </ul>
        </div>
        ${this._evaluator.evaluators && this._evaluator.evaluators.length > 0 ? $`
          <button type="button" class="btn btn-default btn-outline-dark" @click="${() => this._deleteEvaluators()}">
            <span>${this._localization.getLabel('operator.removeChilds')}</span>
          </button>
        ` : ''}
      </div>
    `
    }

    /**
     * Retourne le code HTML du bouton de suppression de l'évaluateur.
     *
     * @returns Code HTML
     */
    _renderDeleteEvaluator() {
      // prettier-ignore
      return $`
      <a class="text-danger" href="" @click="${(e) => this._deleteEvaluator(e)}" data-tooltip aria-describedby="tooltip" @mouseenter="${() => this._tooltip.showToolTip()}" @mouseleave="${() => this._tooltip.hideToolTip()}">
        <i class="icon icon-remove"></i>
        ${this._tooltip.renderToolTip(this._localization.getLabel('delete.button'))}
      </a>
    `
    }

    /**
     * Génère un identifiant (utilisation de la date courante).
     *
     * @returns Identifiant
     */
    _generateId() {
      return Date.now()
    }

    /**
     * Retourne true si l'évaluateur est valide'.
     *
     * @param {Object} evaluator Evaluateur à traiter
     * @returns Booléen
     */
    _isValidEvaluator(evaluator) {
      if (Utils.isDefined(evaluator) && Utils.isDefined(evaluator.class)) {
        switch (evaluator.class) {
          case 'OPERATOR':
            if (evaluator.evaluators.length > 0) {
              for (var i = 0; i < evaluator.evaluators.length; i++) {
                if (!this._isValidEvaluator(evaluator.evaluators[i])) {
                  return false
                }
              }
              return true
            }
            return false
          case 'AUTHENTICATED':
            return true
          case 'USERATTRIBUTES':
          case 'USERMULTIVALUEDATTRIBUTES':
            return (
              Utils.isDefined(evaluator.value) &&
              Utils.isDefined(evaluator.attribute) &&
              Utils.isDefined(evaluator.mode) &&
              evaluator.value !== '' &&
              evaluator.attribute !== '' &&
              evaluator.mode !== '' &&
              evaluator.value !== null &&
              evaluator.attribute !== null &&
              evaluator.mode !== null
            )
          case 'USERGROUP':
            return (
              Utils.isDefined(evaluator.group) &&
              evaluator.group !== '' &&
              evaluator.group !== null
            )
          default:
            return false
        }
      }
      return false
    }

    /**
     * Méthode permettant d'ajouter un nouvel évaluateur.
     *
     * @param {Object} event Evènement
     * @param {String} type Type de l'évaluateur à ajouter
     */
    _addEvaluator(event, type) {
      event.preventDefault();
      event.stopPropagation();

      this._toggleDropDown();

      switch (type) {
        case 'OPERATOR':
          this._evaluator.evaluators = this._evaluator.evaluators.concat([
            {
              class: 'OPERATOR',
              id: null,
              type: 'OR',
              evaluators: []
            }
          ]);
          break
        case 'USER':
          this._evaluator.evaluators = this._evaluator.evaluators.concat([
            {
              class: 'USERATTRIBUTES',
              id: null,
              mode: 'EQUALS',
              attribute: 'uid',
              value: null
            }
          ]);
          break
        case 'GROUP':
          this._evaluator.evaluators = this._evaluator.evaluators.concat([
            {
              class: 'USERGROUP',
              id: null,
              group: null
            }
          ]);
          break
        case 'AUTH':
          this._evaluator.evaluators = this._evaluator.evaluators.concat([
            {
              class: 'AUTHENTICATED',
              id: null
            }
          ]);
          break
        case 'ATTRIBUTE':
          this._evaluator.evaluators = this._evaluator.evaluators.concat([
            {
              class: 'USERMULTIVALUEDATTRIBUTES',
              id: null,
              mode: this.config.stringEvaluators[0],
              attribute: this._userAttributes[0],
              value: null
            }
          ]);
          break
      }
      this.requestUpdate();

      // Envoi d'un évènement au parent
      this._sendEvent('childUpdate');
    }

    /**
     * Méthode supprimant tous les évaluateurs
     */
    _deleteEvaluators() {
      this._evaluator.evaluators = [];
      this.requestUpdate();

      // Envoi d'un évènement au parent
      this._sendEvent('childUpdate');
    }

    /**
     * Méthode supprimant un évaluateur
     *
     * @param {Object} event Evènement
     */
    _deleteEvaluator(event) {
      event.preventDefault();
      event.stopPropagation();

      // Envoi d'un évènement au parent
      this._sendEvent('childDeletion');
    }

    /**
     * Méthode appelé à la réception d'un evènement de suppression d'évaluateur.
     *
     * @param {Object} event Evènement
     */
    _onChildDeletionEvent(event) {
      event.stopPropagation();

      const tmp = [];
      this._evaluator.evaluators.forEach(evaluator => {
        if (evaluator !== event.detail.evaluator) {
          tmp.push(evaluator);
        }
      });
      this._evaluator.evaluators = tmp;

      this.requestUpdate();

      // Envoi d'un évènement au parent
      this._sendEvent('childUpdate');
    }

    /**
     * Méthode appelé à la réception d'un evènement de mise à jour d'évaluateur.
     *
     * @param {Object} event Evènement
     */
    _onChildUpdateEvent(event) {
      event.stopPropagation();
      this._evaluator.evaluators[event.detail.index] = event.detail.evaluator;

      // Envoi d'un évènement au parent
      this._sendEvent('childUpdate');
    }

    /**
     * Méthode appelé à la modification du type de l'évaluateur.
     *
     * @param {Object} val Nouvelle valeur
     */
    _onChangeType(val) {
      this._evaluator.type = val;

      // Envoi d'un évènement au parent
      this._sendEvent('childUpdate');
    }

    /**
     * Méthode appelé à la modification de la valeur de l'évaluateur.
     *
     * @param {Object} val Nouvelle valeur
     */
    _onChangeValue(val) {
      this._evaluator.value = val;

      // Envoi d'un évènement au parent
      this._sendEvent('childUpdate');
    }

    /**
     * Méthode appelé à la modification de l'attribut de l'évaluateur.
     *
     * @param {Object} val Nouvelle valeur
     */
    _onChangeAttribute(val) {
      this._evaluator.attribute = val;

      // Envoi d'un évènement au parent
      this._sendEvent('childUpdate');
    }

    /**
     * Méthode appelé à la modification du mode de l'évaluateur.
     *
     * @param {Object} val Nouvelle valeur
     */
    _onChangeMode(val) {
      this._evaluator.mode = val;

      // Envoi d'un évènement au parent
      this._sendEvent('childUpdate');
    }

    /**
     * Méthode appelé à la sélection d'une personne.
     *
     * @param {Array} persons Tableau des personnes sélectionnées
     */
    _onPersonSelection(persons) {
      if (persons && persons.length > 0) {
        if (persons[0].modelId) {
          this._evaluator.value = persons[0].modelId.keyId;
        } else if (persons[0].extendedSubject) {
          this._evaluator.value =
            persons[0].extendedSubject.keyValue +
            persons[0].extendedSubject.keyAttribute;
        }

        this.requestUpdate();

        // Envoi d'un évènement au parent
        this._sendEvent('childUpdate');
      }
    }

    /**
     * Méthode appelé à la sélection d'un groupe.
     *
     * @param {Array} groups Tableau des groupes sélectionnées
     */
    _onGroupSelection(groups) {
      if (groups && groups.length > 0) {
        if (groups[0].modelId) {
          this._evaluator.group = groups[0].modelId.keyId;
        } else if (groups[0].extendedSubject) {
          this._evaluator.group =
            groups[0].extendedSubject.keyValue +
            groups[0].extendedSubject.keyAttribute;
        }

        this.requestUpdate();

        // Envoi d'un évènement au parent
        this._sendEvent('childUpdate');
      }
    }

    /**
     * Méthode affichant ou masquant le dropdown.
     */
    _toggleDropDown() {
      const dropdownBtn = this._dropdown.querySelector('.dropdown-toggle');
      if (!dropdownBtn.classList.contains('show')) {
        // Affichage dropdown
        this._showDropDown();
      } else {
        // Masquage dropdown
        this._hideDropDown();
      }
    }

    /**
     * Méthode affichant le dropdown.
     */
    _showDropDown() {
      const dropdownBtn = this._dropdown.querySelector('.dropdown-toggle');
      if (!dropdownBtn.classList.contains('show')) {
        dropdownBtn.classList.add('show');
        dropdownBtn.setAttribute('aria-expanded', true);
        this._dropdown.querySelector('.dropdown-menu').style.transform =
          'translateY(' + (this._dropdown.offsetHeight + 2) + 'px)';
        this._dropdown.querySelector('.dropdown-menu').classList.add('show');
      }
    }

    /**
     * Méthode masquant le dropdown.
     */
    _hideDropDown() {
      const dropdownBtn = this._dropdown.querySelector('.dropdown-toggle');
      if (dropdownBtn.classList.contains('show')) {
        dropdownBtn.classList.remove('show');
        dropdownBtn.setAttribute('aria-expanded', false);
        this._dropdown.querySelector('.dropdown-menu').classList.remove('show');
      }
    }

    /**
     * Méthode appelée à la navigation au clavier dans le dropdown.
     *
     * @param {Object} event Evènement
     */
    _onDropDownKeyDown(event) {
      if (event.keyCode === 27) {
        // Touche Echappe
        this._hideDropDown();
        this._dropdown.querySelector('.dropdown-toggle').focus();

        event.preventDefault();
        event.stopPropagation();
      } else if (event.keyCode === 38) {
        // Touche Haut
        if (event.target !== this._dropdown.querySelector('.dropdown-toggle')) {
          // On est dans le menu, on focus l'entrée précédente
          const previousSibling = event.target.parentNode.previousElementSibling;
          if (previousSibling) {
            previousSibling.childNodes[0].focus();
            event.preventDefault();
            event.stopPropagation();
          }
        }
      } else if (event.keyCode === 40) {
        // Touche Bas
        if (event.target !== this._dropdown.querySelector('.dropdown-toggle')) {
          // On est dans le menu, on focus l'entrée suivante
          const nextSibling = event.target.parentNode.nextElementSibling;
          if (nextSibling) {
            nextSibling.childNodes[0].focus();
            event.preventDefault();
            event.stopPropagation();
          }
        } else {
          // On est sûr le bouton, on déplie le menu et on sélectionne la première entrée
          this._showDropDown();
          this._dropdown
            .querySelector('.dropdown-menu li:first-child')
            .childNodes[0].focus();
          event.preventDefault();
          event.stopPropagation();
        }
      }
    }

    /**
     * Méthode appelée à la perte de focus dans le dropdown.
     *
     * @param {Object} event Evènement
     */
    _onDropDownFocusOut(event) {
      const dropdownBtn = this._dropdown.querySelector('.dropdown-toggle');
      const dropDownItems = Array.from(
        this._dropdown.querySelectorAll('.dropdown-item')
      );
      if (
        event.relatedTarget !== dropdownBtn &&
        !dropDownItems.includes(event.relatedTarget)
      ) {
        this._hideDropDown();
      }
    }

    /**
     * Envoi un évènement au composant parrent.
     *
     * @param {String} eventName Nom de l'évènement
     */
    _sendEvent(eventName) {
      if (!this.isChild && eventName === 'childUpdate') {
        // Si on est sur l'évaluateur racine et qu'il s'ait d'une mise à jour, appel à la méthode callBack
        if (this.onModification) {
          this.onModification(this._evaluator);
        }
      } else {
        const options = {
          detail: {
            evaluator: this._evaluator
          },
          bubbles: true,
          composed: true
        };
        this.dispatchEvent(new CustomEvent(eventName, options));
      }
    }
  }

  if (!customElements.get('esup-edit-evaluator')) {
    customElements.define('esup-edit-evaluator', EditEvaluator);
  }

  /**
   * EditEvaluators component.
   */
  class EditEvaluators extends s {
    static get properties() {
      return {
        /**
         * Tableau des évaluateurs à traiter.
         * @type {Array}
         */
        collection: { attribute: false },

        /**
         * Configuration des edit-evaluator.
         * @type {Object}
         */
        config: { attribute: false }
      }
    }

    render() {
      // prettier-ignore
      return $`
      <ul class='edit-evaluator'>
        ${(this.collection || []).map((member) => {
          return $`
            <li>
              <esup-edit-evaluator .evaluator="${member}" .isChild="${true}" .config="${this.config}"
                @childUpdate="${(e) => this._onChildUpdateEvent(e, member)}">
              </edit-evaluator>
            </li>
          `
        })}
      </ul>
    `
    }

    /**
     * Méthode appelé à la réception d'un evènement de mise à jour d'un évaluateur.
     *
     * @param {Object} event Evènement
     * @param {Object} evaluator Evaluateur modifié
     */
    _onChildUpdateEvent(event, evaluator) {
      // Ajout de l'index de l'évaluateur modifié dans l'évènement qu'on laisse se propager au parent
      event.detail.index = this.collection.indexOf(evaluator);
    }
  }

  if (!customElements.get('esup-edit-evaluators')) {
    customElements.define('esup-edit-evaluators', EditEvaluators);
  }

  exports.EditEvaluator = EditEvaluator;
  exports.EditEvaluators = EditEvaluators;
  exports.Evaluator = Evaluator;
  exports.Evaluators = Evaluators;
  exports.SimpleEvaluators = SimpleEvaluators;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
