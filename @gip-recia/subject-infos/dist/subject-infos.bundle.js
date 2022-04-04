(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.esupSubjectInfos = {}));
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

    .icon:before {
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
        content: '\\f128';
    }

    .icon-question:before {
        font-family: var(--icon-question-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-question-font-weight, 900);
        content: var(--icon-question-content, '\\f128');
    }
    .icon-users:before {
        font-family: var(--icon-users-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-users-font-weight, 900);
        content: var(--icon-users-content, '\\f0c0');
    }
    .icon-user:before {
        font-family: var(--icon-user-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-user-font-weight, 900);
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
  .tooltip {
    position: absolute;
    z-index: 1080;
    display: block;
    margin: 0;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
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

  exports.SubjectInfos = SubjectInfos;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
