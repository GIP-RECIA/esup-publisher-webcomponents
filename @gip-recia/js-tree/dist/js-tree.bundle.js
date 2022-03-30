!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).esupJsTree={})}(this,(function(t){"use strict";
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new Map;class s{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=n.get(this.cssText);return e&&void 0===t&&(n.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",i))(e)})(t):t
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */;var r;const l=window.trustedTypes,a=l?l.emptyScript:"",d=window.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},c=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:c};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Eh(i,e);void 0!==n&&(this._$Eu.set(n,i),t.push(n))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),n=window.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=p){var n,s;const o=this.constructor._$Eh(t,i);if(void 0!==o&&!0===i.reflect){const r=(null!==(s=null===(n=i.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==s?s:h.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Ei=null}}_$AK(t,e){var i,n,s;const o=this.constructor,r=o._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=o.getPropertyOptions(r),l=t.converter,a=null!==(s=null!==(n=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==n?n:"function"==typeof l?l:null)&&void 0!==s?s:h.fromAttribute;this._$Ei=r,this[r]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var f;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:u}),(null!==(r=globalThis.reactiveElementVersions)&&void 0!==r?r:globalThis.reactiveElementVersions=[]).push("1.3.0");const v=globalThis.trustedTypes,m=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,g="?"+_,$=`<${g}>`,y=document,b=(t="")=>y.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,x=/>/g,S=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,P=/'/g,U=/"/g,k=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),H=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),T=new WeakMap,O=y.createTreeWalker(y,129,null,!1),L=(t,e)=>{const i=t.length-1,n=[];let s,o=2===e?"<svg>":"",r=w;for(let e=0;e<i;e++){const i=t[e];let l,a,d=-1,h=0;for(;h<i.length&&(r.lastIndex=h,a=r.exec(i),null!==a);)h=r.lastIndex,r===w?"!--"===a[1]?r=E:void 0!==a[1]?r=x:void 0!==a[2]?(k.test(a[2])&&(s=RegExp("</"+a[2],"g")),r=S):void 0!==a[3]&&(r=S):r===S?">"===a[0]?(r=null!=s?s:w,d=-1):void 0===a[1]?d=-2:(d=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?S:'"'===a[3]?U:P):r===U||r===P?r=S:r===E||r===x?r=w:(r=S,s=void 0);const c=r===S&&t[e+1].startsWith("/>")?" ":"";o+=r===w?i+$:d>=0?(n.push(l),i.slice(0,d)+"$lit$"+i.slice(d)+_+c):i+_+(-2===d?(n.push(void 0),e):c)}const l=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(l):l,n]};class R{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const r=t.length-1,l=this.parts,[a,d]=L(t,e);if(this.el=R.createElement(a,i),O.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=O.nextNode())&&l.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(_)){const i=d[o++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split(_),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?V:"@"===e[1]?z:I})}else l.push({type:6,index:s})}for(const e of t)n.removeAttribute(e)}if(k.test(n.tagName)){const t=n.textContent.split(_),e=t.length-1;if(e>0){n.textContent=v?v.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],b()),O.nextNode(),l.push({type:2,index:++s});n.append(t[e],b())}}}else if(8===n.nodeType)if(n.data===g)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(_,t+1));)l.push({type:7,index:s}),t+=_.length-1}s++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function M(t,e,i=t,n){var s,o,r,l;if(e===H)return e;let a=void 0!==n?null===(s=i._$Cl)||void 0===s?void 0:s[n]:i._$Cu;const d=C(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==d&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===d?a=void 0:(a=new d(t),a._$AT(t,i,n)),void 0!==n?(null!==(r=(l=i)._$Cl)&&void 0!==r?r:l._$Cl=[])[n]=a:i._$Cu=a),void 0!==a&&(e=M(t,a._$AS(t,e.values),a,n)),e}class F{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:y).importNode(i,!0);O.currentNode=s;let o=O.nextNode(),r=0,l=0,a=n[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new B(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new K(o,this,t)),this.v.push(e),a=n[++l]}r!==(null==a?void 0:a.index)&&(o=O.nextNode(),r++)}return s}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class B{constructor(t,e,i,n){var s;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cg=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),C(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==H&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==N&&C(this._$AH)?this._$AA.nextSibling.data=t:this.k(y.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,s="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=R.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(i);else{const t=new F(s,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=T.get(t.strings);return void 0===e&&T.set(t.strings,e=new R(t)),e}S(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new B(this.A(b()),this.A(b()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class I{constructor(t,e,i,n,s){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(void 0===s)t=M(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==H,o&&(this._$AH=t);else{const n=t;let r,l;for(t=s[0],r=0;r<s.length-1;r++)l=M(this,n[i+r],e,r),l===H&&(l=this._$AH[r]),o||(o=!C(l)||l!==this._$AH[r]),l===N?t=N:t!==N&&(t+=(null!=l?l:"")+s[r+1]),this._$AH[r]=l}o&&!n&&this.C(t)}C(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends I{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===N?void 0:t}}const j=v?v.emptyScript:"";class V extends I{constructor(){super(...arguments),this.type=4}C(t){t&&t!==N?this.element.setAttribute(this.name,j):this.element.removeAttribute(this.name)}}class z extends I{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=M(this,t,e,0))&&void 0!==i?i:N)===H)return;const n=this._$AH,s=t===N&&n!==N||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==N&&(n===N||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const W=window.litHtmlPolyfillSupport;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var J,Z;null==W||W(R,B),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.2.0");class X extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var n,s;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let r=o._$litPart$;if(void 0===r){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=r=new B(e.insertBefore(b(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return H}}X.finalized=!0,X._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:X});const Y=globalThis.litElementPolyfillSupport;null==Y||Y({LitElement:X}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.2.0");const G=((t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new s(n,i)})`.root-tree{padding-left:0;margin-left:1px;margin-right:1px;--min-dimension:var(--min-clickable-dimension, 24px)}.root-tree li{list-style-type:none}.root-tree .row-data:focus,.root-tree .row-data:hover{color:var(--hover-text-color,#000)}.root-tree .row-data.jstree-clicked,.root-tree .row-data.jstree-clicked span{background-color:var(--selected-background-color,transparent);color:var(--selected-text-color,#000)}.root-tree .row,.root-tree .row-data{display:inline-block;min-height:var(--min-dimension);min-width:var(--min-dimension)}.root-tree .row-data span{margin-right:3px;margin-left:3px}.root-tree .subtree{display:none}.root-tree .subtree-active{display:block}.row{width:calc(100% - var(--min-dimension));cursor:pointer;position:relative;padding-top:1px;padding-bottom:1px;padding-right:1px;padding-left:var(--min-dimension)}.align-items-center{align-items:center!important}.d-flex{display:flex!important}.icon-indicator{left:calc(var(--min-dimension)/ 2);position:absolute;top:50%;transform:translateY(-50%) translateX(-50%)}.row-data{width:100%}i.icon{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1;margin:0 2px;font-family:var(--icon-font-family, 'Font Awesome 5 Free');font-weight:var(--icon-font-weight,900)}i.icon:before{content:var(--icon-content, '\\f07b')}.item-subtree>div>.icon-indicator{font-family:var(--icon-fold-font-family, 'Font Awesome 5 Free');font-weight:var(--icon-fold-font-weight,900)}.item-subtree>div>.icon-indicator:before{content:var(--icon-fold-content, '\\f0da')}.item-active>div>.icon-indicator{font-family:var(--icon-unfold-font-family, 'Font Awesome 5 Free');font-weight:var(--icon-unfold-font-weight,900)}.item-active>div>.icon-indicator:before{content:var(--icon-unfold-content, '\\f0d7')}i.icon-0{font-family:var(--icon-0-font-family, 'Font Awesome 5 Free');font-weight:var(--icon-0-font-weight,900)}i.icon-0:before{content:var(--icon-0-content, '\\f07b')}i.icon-1{font-family:var(--icon-1-font-family, 'Font Awesome 5 Free');font-weight:var(--icon-1-font-weight,900)}i.icon-1:before{content:var(--icon-1-content, '\\f07b')}i.icon-2{font-family:var(--icon-2-font-family, 'Font Awesome 5 Free');font-weight:var(--icon-2-font-weight,900)}i.icon-2:before{content:var(--icon-2-content, '\\f07b')}i.icon-3{font-family:var(--icon-3-font-family, 'Font Awesome 5 Free');font-weight:var(--icon-3-font-weight,900)}i.icon-3:before{content:var(--icon-3-content, '\\f07b')}i.icon-4{font-family:var(--icon-4-font-family, 'Font Awesome 5 Free');font-weight:var(--icon-4-font-weight,900)}i.icon-4:before{content:var(--icon-4-content, '\\f07b')}i.icon-5{font-family:var(--icon-5-font-family, 'Font Awesome 5 Free');font-weight:var(--icon-5-font-weight,900)}i.icon-5:before{content:var(--icon-5-content, '\\f07b')}i.icon-6{font-family:var(--icon-6-font-family, 'Font Awesome 5 Free');font-weight:var(--icon-6-font-weight,900)}i.icon-6:before{content:var(--icon-6-content, '\\f07b')}i.icon-7{font-family:var(--icon-7-font-family, 'Font Awesome 5 Free');font-weight:var(--icon-7-font-weight,900)}i.icon-7:before{content:var(--icon-7-content, '\\f07b')}i.icon-8{font-family:var(--icon-8-font-family, 'Font Awesome 5 Free');font-weight:var(--icon-8-font-weight,900)}i.icon-8:before{content:var(--icon-8-content, '\\f07b')}i.icon-9{font-family:var(--icon-9-font-family, 'Font Awesome 5 Free');font-weight:var(--icon-9-font-weight,900)}i.icon-9:before{content:var(--icon-9-content, '\\f07b')}i.icon-10{font-family:var(--icon-10-font-family, 'Font Awesome 5 Free');font-weight:var(--icon-10-font-weight,900)}i.icon-10:before{content:var(--icon-10-content, '\\f07b')}`;class Q extends X{static get styles(){return[G]}static get properties(){return{datas:{attribute:!1},config:{attribute:!1},onSelection:{attribute:!1}}}constructor(){super(),this._datas=[],this._initKeyboardNavigation=!1,this._activeElement=null}render(){return this._renderTree(this._datas,0,null)}willUpdate(t){super.willUpdate(t);let e=!1;t&&(e=t.has("datas")||t.has("config")),e&&(this._datas=this.datas,this._initKeyboardNavigation=!1,this._initDataList(this._datas,this.config.identifier),this._activeElement=this._datas&&this._datas.length>0?this._datas[0]:null)}updated(t){super.updated(t),this.shadowRoot.querySelectorAll('input[type="checkbox"]').forEach((t=>{const e=this._findDatasByProperty(this._datas,"idHtml",t.id.replace("-checkbox",""));e&&1===e.length&&(t.checked=e[0].selected)})),this._initKeyboardNavigation&&this.activeElement&&this.shadowRoot.querySelectorAll("li").forEach((t=>{t.id===this.activeElement.idHtml&&t.focus()}))}selectNode(t){if(t){const e=this._findDatasByProperty(this._datas,"id",t);e&&e.length>0&&!e[0].selected&&this._onClickItem(null,e[0])}}deselectAllNodes(){const t=this._findDatasByProperty(this._datas,"selected",!0);t&&t.length>0&&(this._unSelectDatas(this._datas),this.requestUpdate(),this._sendSelection())}addNode(t,e){if(t){const i=this._findDatasByProperty(this._datas,"id",t);i&&i.length>0&&i[0].areChildrenLoaded&&(this._initDataList([e],i[0].idHtml),e.parent=i[0],i[0].loadedChildren.push(e),this.requestUpdate())}else this._initDataList([e],this.config.identifier),e.parent=null,this._datas.push(e),this.requestUpdate()}deleteNode(t){if(t){const e=this._findDatasByProperty(this._datas,"id",t);if(e&&e.length>0){const t=this._findDatasByProperty(this._datas,"selected",!0);e[0].parent?e[0].parent.loadedChildren=e[0].parent.loadedChildren.filter((t=>t.id!==e[0].id)):this._datas=this._datas.filter((t=>t.id!==e[0].id)),this.requestUpdate();const i=this._findDatasByProperty(this._datas,"selected",!0);t.length!==i.length&&this._sendSelection()}}}refreshNode(t,e,i=!1){if(t){const n=this._findDatasByProperty(this._datas,"id",t);if(n&&n.length>0){const t=this._findDatasByProperty(this._datas,"selected",!0);this._refreshNodes(n[0],e,i).then((()=>{this.requestUpdate();const e=this._findDatasByProperty(this._datas,"selected",!0);t.length!==e.length&&this._sendSelection()}))}}}_renderTree(t,e,i){return this.config.sort&&t.sort(((t,e)=>t.text.localeCompare(e.text))),D`<ul id="${this.config.identifier}" class="${0===e?"root-tree":i.ulClasses.join(" ")}" role="${0===e?this.config.isMultipleSelection?"listbox":"tree":"group"}" aria-multiselectable="${0===e&&this.config.isMultipleSelection?"true":"false"}" tabindex="${0===e?"0":"-1"}" aria-activedescendant="${0===e&&this.activeElement?this.activeElement.idHtml:""}" aria-labelledby="${i?i.idHtml+"-text":""}" @keydown="${t=>this._onKeyDown(t)}">${(t||[]).map((t=>D`<li id="${t.idHtml}" class="${t.liClasses.join(" ")}" tabindex="-1" aria-expanded="${t.expanded}" role="${this.config.showCheckbox?"option":"treeitem"}" aria-selected="${t.selected}"><div class="row" @click="${e=>this._onClickRow(e,t)}">${this._renderIconIndicator(t)}<div class="row-data d-flex align-items-center ${t.selected?"jstree-clicked":""}" @click="${e=>this._onClickItem(e,t)}">${this._renderCheckbox(t)} <i class="icon ${null!==t.iconIndex?"icon-"+t.iconIndex:""}" aria-hidden="true"></i> <span id="${t.idHtml}-text">${t.text}</span></div></div>${t.loadedChildren?this._renderTree(t.loadedChildren,e+1,t):""}</li>`))}</ul>`}_renderIconIndicator(t){return t.children&&(!t.areChildrenLoaded||t.loadedChildren&&t.loadedChildren.length>0)?D`<i class="icon icon-indicator"></i>`:D``}_renderCheckbox(t){return this.config.showCheckbox?D`<input type="checkbox" id="${t.idHtml}-checkbox" tabindex="-1" ?checked="${t.selected}" aria-checked="${t.selected}" aria-labelledby="${t.idHtml}-text" ?disabled="${!1===this.config.allowDeselection&&t.selected}">`:D``}_onClickItem(t,e){if(t&&t.stopPropagation(),this.activeElement=e,!1!==this.config.allowDeselection||!e.selected){const t=e.selected;this.config.isMultipleSelection||this._unSelectDatas(this._datas),e.selected=!t,this.requestUpdate(),this._sendSelection()}}_onClickRow(t,e){t.stopPropagation(),this.activeElement=e,e.children&&(e.expanded?(e.expanded=!1,e.ulClasses.includes("subtree-active")&&e.ulClasses.splice(e.ulClasses.indexOf("subtree-active"),1),e.liClasses.includes("item-active")&&e.liClasses.splice(e.liClasses.indexOf("item-active"),1),this.requestUpdate()):e.children&&(e.expanded=!0,e.ulClasses.push("subtree-active"),e.liClasses.push("item-active"),e.areChildrenLoaded?this.requestUpdate():this._loadDataChildren(e,(()=>this.requestUpdate()))))}_onKeyDown(t){if(13===t.keyCode||32===t.keyCode)this._onClickItem(t,this.activeElement);else if(37===t.keyCode)this.activeElement.expanded?(this.activeElement.expanded=!1,this.activeElement.ulClasses.includes("subtree-active")&&this.activeElement.ulClasses.splice(this.activeElement.ulClasses.indexOf("subtree-active"),1),this.activeElement.liClasses.includes("item-active")&&this.activeElement.liClasses.splice(this.activeElement.liClasses.indexOf("item-active"),1)):this.activeElement.parent&&this.activeElement.parent.expanded&&(this.activeElement=this.activeElement.parent),t.preventDefault(),t.stopPropagation(),this.requestUpdate();else if(38===t.keyCode){const e=this._getUpVisibleSiblingElement(this.activeElement);null!=e&&(this.activeElement=e),t.preventDefault(),t.stopPropagation(),this.requestUpdate()}else if(39===t.keyCode)this.activeElement.children?this.activeElement.expanded?(this.activeElement.loadedChildren&&this.activeElement.loadedChildren.length>0&&(this.activeElement=this.activeElement.loadedChildren[0]),t.preventDefault(),t.stopPropagation(),this.requestUpdate()):(this.activeElement.expanded=!0,this.activeElement.ulClasses.push("subtree-active"),this.activeElement.liClasses.push("item-active"),this._loadDataChildren(this.activeElement,(()=>{t.preventDefault(),t.stopPropagation(),this.requestUpdate()}))):(t.preventDefault(),t.stopPropagation());else if(40===t.keyCode){if(this._initKeyboardNavigation)if(this.activeElement.expanded&&this.activeElement.loadedChildren&&this.activeElement.loadedChildren.length>0)this.activeElement=this.activeElement.loadedChildren[0];else{const t=this._getDownVisibleSiblingElement(this.activeElement);null!=t&&(this.activeElement=t)}t.preventDefault(),t.stopPropagation(),this.requestUpdate()}this._initKeyboardNavigation=!0}_initDataList(t,e){t&&t.length>0&&t.forEach((t=>{t.ulClasses=["subtree"],t.liClasses=[],t.children&&t.liClasses.push("item-subtree"),t.expanded=!1,t.parent=null,t.idHtml=(e||"")+"-"+t.id,t.selected=!1,t.loadedChildren=null,t.areChildrenLoaded=!1}))}_unSelectDatas(t){t.forEach((t=>{t.selected=!1,t.loadedChildren&&this._unSelectDatas(t.loadedChildren)}))}_findDatasByProperty(t,e,i){let n=[];return t.forEach((t=>{t[e]===i&&n.push(t),t.children&&t.loadedChildren&&(n=n.concat(this._findDatasByProperty(t.loadedChildren,e,i)))})),n}_loadDataChildren(t,e){this._getChildren(t,(i=>{this._initDataList(i,t.idHtml),t.loadedChildren=i,t.loadedChildren.forEach((e=>e.parent=t)),t.areChildrenLoaded=!0,e&&e()}))}_getChildren(t,e){"function"==typeof t.getChildren?t.getChildren().then((t=>{e(t)})):(Array.isArray(t.getChildren)||t.getChildren instanceof Array)&&e(t.getChildren)}_getDownVisibleSiblingElement(t){if(t.parent){for(let e=0;e<t.parent.loadedChildren.length;e++)if(t.parent.loadedChildren[e].id===t.id)return e<t.parent.loadedChildren.length-1?t.parent.loadedChildren[e+1]:this._getDownVisibleSiblingElement(t.parent)}else for(let e=0;e<this._datas.length;e++)if(this._datas[e].id===t.id&&e<this._datas.length-1)return this._datas[e+1];return null}_getUpVisibleSiblingElement(t){if(t.parent){for(let e=0;e<t.parent.loadedChildren.length;e++)if(t.parent.loadedChildren[e].id===t.id)return e>0?this._getLastVisibleChild(t.parent.loadedChildren[e-1]):t.parent}else for(let e=0;e<this._datas.length;e++)if(this._datas[e].id===t.id&&e>0)return this._getLastVisibleChild(this._datas[e-1]);return null}_getLastVisibleChild(t){return t.expanded&&t.loadedChildren&&t.loadedChildren.length>0?this._getLastVisibleChild(t.loadedChildren[t.loadedChildren.length-1]):t}_sendSelection(){if(this.onSelection){const t=this._findDatasByProperty(this._datas,"selected",!0);this.onSelection(t)}}_refreshNodes(t,e,i){return new Promise((n=>{Object.assign(t,e),i&&t.children&&t.areChildrenLoaded?this._getChildren(t,(e=>{const s=e.map((t=>t.id));t.loadedChildren=t.loadedChildren.filter((t=>s.includes(t.id)));let o=0;const r=[];e.forEach((e=>{const n=t.loadedChildren.find((t=>t.id===e.id));n?r.push(this._refreshNodes(n,e,i)):(this._initDataList([e],t.idHtml),e.parent=t,t.loadedChildren.splice(o,0,e)),o++})),Promise.all(r).then((()=>n()))})):n()}))}}customElements.get("esup-js-tree")||customElements.define("esup-js-tree",Q),t.JsTree=Q,Object.defineProperty(t,"__esModule",{value:!0})}));
