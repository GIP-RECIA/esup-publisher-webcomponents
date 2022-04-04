(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.esupSubjectSearchButton = {}));
})(this, (function (exports) { 'use strict';

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$2=Symbol(),n$3=new Map;class s$3{constructor(t,n){if(this._$cssResult$=!0,n!==e$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$3.get(this.cssText);return t$1&&void 0===e&&(n$3.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$3=t=>new s$3("string"==typeof t?t:t+"",e$2),r$2=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$3(o,e$2)},i$1=(e,n)=>{t$1?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$1?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$3(e)})(t):t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var s$2;const e$1=window.trustedTypes,r$1=e$1?e$1.emptyScript:"",h$1=window.reactiveElementPolyfillSupport,o$2={toAttribute(t,i){switch(i){case Boolean:t=t?r$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$2=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:o$2,reflect:!1,hasChanged:n$2};class a$1 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1);}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$ES(t,i,s=l$2){var e,r;const h=this.constructor._$Eh(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$2.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null;}}_$AK(t,i){var s,e,r;const h=this.constructor,n=h._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=h.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r?r:o$2.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$2)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_());}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU();}updated(t){}firstUpdated(t){}}a$1.finalized=!0,a$1.elementProperties=new Map,a$1.elementStyles=[],a$1.shadowRootOptions={mode:"open"},null==h$1||h$1({ReactiveElement:a$1}),(null!==(s$2=globalThis.reactiveElementVersions)&&void 0!==s$2?s$2:globalThis.reactiveElementVersions=[]).push("1.3.0");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var t;const i=globalThis.trustedTypes,s$1=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e=`lit$${(Math.random()+"").slice(9)}$`,o$1="?"+e,n$1=`<${o$1}>`,l$1=document,h=(t="")=>l$1.createComment(t),r=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var i;return d(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea|title)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p(1),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$1.createTreeWalker(l$1,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v||d===a?d=c:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n$1:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e+y):s+e+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$1?s$1.createHTML(u):u,l]};class E{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=E.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e),s=t.length-1;if(s>0){l.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h());}}}else if(8===l.nodeType)if(l.data===o$1)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e,t+1));)c.push({type:7,index:r}),t+=e.length-1;}r++;}}static createElement(t,i){const s=l$1.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$1).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),r(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.$(t);}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t));}$(t){this._$AH!==w&&r(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$1.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new E(t)),i}S(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.A(h()),this.A(h()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!r(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.C(t);}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}C(t){this.element[this.name]=t===w?void 0:t;}}const k=i?i.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4;}C(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name);}}class I extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=window.litHtmlPolyfillSupport;null==z||z(E,N),(null!==(t=globalThis.litHtmlVersions)&&void 0!==t?t:globalThis.litHtmlVersions=[]).push("2.2.0");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var l,o;class s extends a$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;null==n||n({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.2.0");

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

  const bootstrapStyle = r$2`
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
   * Subject Search Button component.
   */
  class SubjectSearchButton extends s {
    static get styles() {
      return [subjectSearchButtonStyle, bootstrapStyle, bootstrapToolTipStyle]
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

  exports.SubjectSearchButton = SubjectSearchButton;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
