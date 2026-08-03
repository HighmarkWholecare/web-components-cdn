"use strict";var HMWC=(()=>{var pr=Object.defineProperty;var Mo=Object.getOwnPropertyDescriptor;var Do=Object.getOwnPropertyNames;var Ro=Object.prototype.hasOwnProperty;var To=(n,t)=>{for(var e in t)pr(n,e,{get:t[e],enumerable:!0})},jo=(n,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Do(t))!Ro.call(n,o)&&o!==e&&pr(n,o,{get:()=>t[o],enumerable:!(r=Mo(t,o))||r.enumerable});return n};var Fo=n=>jo(pr({},"__esModule",{value:!0}),n);var ua={};To(ua,{Accordion:()=>K,AccordionGroup:()=>mt,Alert:()=>H,AlertPresets:()=>kr,Attachment:()=>R,Avatar:()=>j,Badge:()=>q,Banner:()=>jt,Breadcrumb:()=>N,Breadcrumbs:()=>yt,Button:()=>w,Calendar:()=>U,Card:()=>rt,Chart:()=>it,Checkbox:()=>ct,Col:()=>Tt,DataTable:()=>$,Divider:()=>V,Dropdown:()=>L,Grid:()=>ht,HMWCAlert:()=>ia,HMWCComponent:()=>u,HMWCContainerComponent:()=>P,HMWCFormComponent:()=>F,HMWCPopup:()=>da,Header:()=>gt,Icon:()=>_,Image:()=>tt,Input:()=>x,List:()=>ie,Menu:()=>z,MenuItem:()=>A,Navbar:()=>$t,Page:()=>Ct,Pagination:()=>Y,Popup:()=>D,PopupPresets:()=>Ar,Progress:()=>I,Radio:()=>Wt,RadioGroup:()=>Pt,Row:()=>Kt,Skeleton:()=>wt,Spinner:()=>X,Stepper:()=>Bt,Switch:()=>ne,Tab:()=>dt,TabContent:()=>Ot,TabGroup:()=>lt,Table:()=>Nt,TableCell:()=>ot,TableField:()=>_t,TableRow:()=>xt,Tag:()=>et,Text:()=>k,Tooltip:()=>W,Tree:()=>Vt,TreeItem:()=>pt});var Je=globalThis,Ze=Je.ShadowRoot&&(Je.ShadyCSS===void 0||Je.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mr=Symbol(),Dr=new WeakMap,Te=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==mr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Ze&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=Dr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Dr.set(e,t))}return t}toString(){return this.cssText}},Rr=n=>new Te(typeof n=="string"?n:n+"",void 0,mr),m=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+n[i+1],n[0]);return new Te(e,n,mr)},Tr=(n,t)=>{if(Ze)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),o=Je.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=e.cssText,n.appendChild(r)}},ur=Ze?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return Rr(e)})(n):n;var{is:Po,defineProperty:No,getOwnPropertyDescriptor:Lo,getOwnPropertyNames:Io,getOwnPropertySymbols:Ho,getPrototypeOf:Uo}=Object,Qe=globalThis,jr=Qe.trustedTypes,Wo=jr?jr.emptyScript:"",Vo=Qe.reactiveElementPolyfillSupport,je=(n,t)=>n,Fe={toAttribute(n,t){switch(t){case Boolean:n=n?Wo:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},tr=(n,t)=>!Po(n,t),Fr={attribute:!0,type:String,converter:Fe,reflect:!1,useDefault:!1,hasChanged:tr};Symbol.metadata??=Symbol("metadata"),Qe.litPropertyMetadata??=new WeakMap;var le=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Fr){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(t,r,e);o!==void 0&&No(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){let{get:o,set:i}=Lo(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:o,set(s){let l=o?.call(this);i?.call(this,s),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Fr}static _$Ei(){if(this.hasOwnProperty(je("elementProperties")))return;let t=Uo(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(je("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(je("properties"))){let e=this.properties,r=[...Io(e),...Ho(e)];for(let o of r)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,o]of e)this.elementProperties.set(r,o)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let o=this._$Eu(e,r);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let o of r)e.unshift(ur(o))}else t!==void 0&&e.push(ur(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Tr(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:Fe).toAttribute(e,r.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,e){let r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let i=r.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Fe;this._$Em=o;let l=s.fromAttribute(e,i.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(t,e,r,o=!1,i){if(t!==void 0){let s=this.constructor;if(o===!1&&(i=this[t]),r??=s.getPropertyOptions(t),!((r.hasChanged??tr)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r){let{wrapped:s}=i,l=this[o];s!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,i,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};le.elementStyles=[],le.shadowRootOptions={mode:"open"},le[je("elementProperties")]=new Map,le[je("finalized")]=new Map,Vo?.({ReactiveElement:le}),(Qe.reactiveElementVersions??=[]).push("2.1.2");var gr=globalThis,Pr=n=>n,er=gr.trustedTypes,Nr=er?er.createPolicy("lit-html",{createHTML:n=>n}):void 0,vr="$lit$",ce=`lit$${Math.random().toFixed(9).slice(2)}$`,br="?"+ce,qo=`<${br}>`,_e=document,Ne=()=>_e.createComment(""),Le=n=>n===null||typeof n!="object"&&typeof n!="function",wr=Array.isArray,Vr=n=>wr(n)||typeof n?.[Symbol.iterator]=="function",fr=`[ 	
\f\r]`,Pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lr=/-->/g,Ir=/>/g,we=RegExp(`>|${fr}(?:([^\\s"'>=/]+)(${fr}*=${fr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Hr=/'/g,Ur=/"/g,qr=/^(?:script|style|textarea|title)$/i,yr=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),c=yr(1),Gr=yr(2),Yr=yr(3),kt=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),Wr=new WeakMap,ye=_e.createTreeWalker(_e,129);function Kr(n,t){if(!wr(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Nr!==void 0?Nr.createHTML(t):t}var Xr=(n,t)=>{let e=n.length-1,r=[],o,i=t===2?"<svg>":t===3?"<math>":"",s=Pe;for(let l=0;l<e;l++){let h=n[l],d,g,v=-1,S=0;for(;S<h.length&&(s.lastIndex=S,g=s.exec(h),g!==null);)S=s.lastIndex,s===Pe?g[1]==="!--"?s=Lr:g[1]!==void 0?s=Ir:g[2]!==void 0?(qr.test(g[2])&&(o=RegExp("</"+g[2],"g")),s=we):g[3]!==void 0&&(s=we):s===we?g[0]===">"?(s=o??Pe,v=-1):g[1]===void 0?v=-2:(v=s.lastIndex-g[2].length,d=g[1],s=g[3]===void 0?we:g[3]==='"'?Ur:Hr):s===Ur||s===Hr?s=we:s===Lr||s===Ir?s=Pe:(s=we,o=void 0);let Z=s===we&&n[l+1].startsWith("/>")?" ":"";i+=s===Pe?h+qo:v>=0?(r.push(d),h.slice(0,v)+vr+h.slice(v)+ce+Z):h+ce+(v===-2?l:Z)}return[Kr(n,i+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},Ie=class n{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let i=0,s=0,l=t.length-1,h=this.parts,[d,g]=Xr(t,e);if(this.el=n.createElement(d,r),ye.currentNode=this.el.content,e===2||e===3){let v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(o=ye.nextNode())!==null&&h.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(let v of o.getAttributeNames())if(v.endsWith(vr)){let S=g[s++],Z=o.getAttribute(v).split(ce),qt=/([.?@])?(.*)/.exec(S);h.push({type:1,index:i,name:qt[2],strings:Z,ctor:qt[1]==="."?ir:qt[1]==="?"?or:qt[1]==="@"?ar:ke}),o.removeAttribute(v)}else v.startsWith(ce)&&(h.push({type:6,index:i}),o.removeAttribute(v));if(qr.test(o.tagName)){let v=o.textContent.split(ce),S=v.length-1;if(S>0){o.textContent=er?er.emptyScript:"";for(let Z=0;Z<S;Z++)o.append(v[Z],Ne()),ye.nextNode(),h.push({type:2,index:++i});o.append(v[S],Ne())}}}else if(o.nodeType===8)if(o.data===br)h.push({type:2,index:i});else{let v=-1;for(;(v=o.data.indexOf(ce,v+1))!==-1;)h.push({type:7,index:i}),v+=ce.length-1}i++}}static createElement(t,e){let r=_e.createElement("template");return r.innerHTML=t,r}};function xe(n,t,e=n,r){if(t===kt)return t;let o=r!==void 0?e._$Co?.[r]:e._$Cl,i=Le(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(n),o._$AT(n,e,r)),r!==void 0?(e._$Co??=[])[r]=o:e._$Cl=o),o!==void 0&&(t=xe(n,o._$AS(n,t.values),o,r)),t}var rr=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,o=(t?.creationScope??_e).importNode(e,!0);ye.currentNode=o;let i=ye.nextNode(),s=0,l=0,h=r[0];for(;h!==void 0;){if(s===h.index){let d;h.type===2?d=new Ae(i,i.nextSibling,this,t):h.type===1?d=new h.ctor(i,h.name,h.strings,this,t):h.type===6&&(d=new sr(i,this,t)),this._$AV.push(d),h=r[++l]}s!==h?.index&&(i=ye.nextNode(),s++)}return ye.currentNode=_e,o}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},Ae=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=xe(this,t,e),Le(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==kt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Vr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&Le(this._$AH)?this._$AA.nextSibling.data=t:this.T(_e.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Ie.createElement(Kr(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(e);else{let i=new rr(o,this),s=i.u(this.options);i.p(e),this.T(s),this._$AH=i}}_$AC(t){let e=Wr.get(t.strings);return e===void 0&&Wr.set(t.strings,e=new Ie(t)),e}k(t){wr(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,o=0;for(let i of t)o===e.length?e.push(r=new n(this.O(Ne()),this.O(Ne()),this,this.options)):r=e[o],r._$AI(i),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let r=Pr(t).nextSibling;Pr(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},ke=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,i){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=E}_$AI(t,e=this,r,o){let i=this.strings,s=!1;if(i===void 0)t=xe(this,t,e,0),s=!Le(t)||t!==this._$AH&&t!==kt,s&&(this._$AH=t);else{let l=t,h,d;for(t=i[0],h=0;h<i.length-1;h++)d=xe(this,l[r+h],e,h),d===kt&&(d=this._$AH[h]),s||=!Le(d)||d!==this._$AH[h],d===E?t=E:t!==E&&(t+=(d??"")+i[h+1]),this._$AH[h]=d}s&&!o&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ir=class extends ke{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}},or=class extends ke{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}},ar=class extends ke{constructor(t,e,r,o,i){super(t,e,r,o,i),this.type=5}_$AI(t,e=this){if((t=xe(this,t,e,0)??E)===kt)return;let r=this._$AH,o=t===E&&r!==E||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==E&&(r===E||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},sr=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){xe(this,t)}},Jr={M:vr,P:ce,A:br,C:1,L:Xr,R:rr,D:Vr,V:xe,I:Ae,H:ke,N:or,U:ar,B:ir,F:sr},Go=gr.litHtmlPolyfillSupport;Go?.(Ie,Ae),(gr.litHtmlVersions??=[]).push("3.3.2");var Zr=(n,t,e)=>{let r=e?.renderBefore??t,o=r._$litPart$;if(o===void 0){let i=e?.renderBefore??null;r._$litPart$=o=new Ae(t.insertBefore(Ne(),i),i,void 0,e??{})}return o._$AI(n),o};var _r=globalThis,he=class extends le{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Zr(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return kt}};he._$litElement$=!0,he.finalized=!0,_r.litElementHydrateSupport?.({LitElement:he});var Yo=_r.litElementPolyfillSupport;Yo?.({LitElement:he});(_r.litElementVersions??=[]).push("4.2.2");var Ko={attribute:!0,type:String,converter:Fe,reflect:!1,hasChanged:tr},Xo=(n=Ko,t,e)=>{let{kind:r,metadata:o}=e,i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),r==="setter"&&((n=Object.create(n)).wrapped=!0),i.set(e.name,n),r==="accessor"){let{name:s}=e;return{set(l){let h=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,h,n,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,n,l),l}}}if(r==="setter"){let{name:s}=e;return function(l){let h=this[s];t.call(this,l),this.requestUpdate(s,h,n,!0,l)}}throw Error("Unsupported decorator location: "+r)};function a(n){return(t,e)=>typeof e=="object"?Xo(n,t,e):((r,o,i)=>{let s=o.hasOwnProperty(i);return o.constructor.createProperty(i,r),s?Object.getOwnPropertyDescriptor(o,i):void 0})(n,t,e)}function b(n){return a({...n,state:!0,attribute:!1})}var $e=(n,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(n,t,e),e);function T(n,t){return(e,r,o)=>{let i=s=>s.renderRoot?.querySelector(n)??null;if(t){let{get:s,set:l}=typeof r=="object"?e:o??(()=>{let h=Symbol();return{get(){return this[h]},set(d){this[h]=d}}})();return $e(e,r,{get(){let h=s.call(this);return h===void 0&&(h=i(this),(h!==null||this.hasUpdated)&&l.call(this,h)),h}})}return $e(e,r,{get(){return i(this)}})}}var He={class:"hmwc-scroll-lock",prop:"--hmwc-scroll-lock-size"},nr=class n{get scrollbarWidth(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}lockBodyScrolling(t){if(n.locks.add(t),document.body.classList.contains(He.class))return;let e=this.scrollbarWidth;document.body.classList.add(He.class),document.body.style.setProperty(He.prop,`${e}px`)}unlockBodyScrolling(t){n.locks.delete(t),!(n.locks.size>0)&&(document.body.classList.remove(He.class),document.body.style.removeProperty(He.prop))}scrollIntoView(t,e,r="vertical",o="smooth"){let i={top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)},s=i.top+e.scrollTop,l=i.left+e.scrollLeft,h=e.scrollLeft,d=e.scrollLeft+e.offsetWidth,g=e.scrollTop,v=e.scrollTop+e.offsetHeight;(r==="horizontal"||r==="both")&&(l<h?e.scrollTo({left:l,behavior:o}):l+t.clientWidth>d&&e.scrollTo({left:l-e.offsetWidth+t.clientWidth,behavior:o})),(r==="vertical"||r==="both")&&(s<g?e.scrollTo({top:s,behavior:o}):s+t.clientHeight>v&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:o}))}constructor(t){this.host=t,t.addController(this)}hostConnected(){}hostDisconnected(){}};nr.locks=new Set;var Qr=nr;var Ue=class{hasDefaultSlot(){return Array.from(this.host.childNodes).some(t=>{let e=t.nodeType===t.TEXT_NODE,r=t.nodeType===t.ELEMENT_NODE,o=t.textContent.trim()==="",i=t.parentElement?.hasAttribute("slot");return e&&!o||r&&!i})}hasNamedSlot(t){let e=`[slot="${t}"]`;return this.host.querySelector(e)!==null}getDefaultSlot(){return Array.from(this.host.children).filter(t=>{let e=t.nodeType===t.TEXT_NODE,r=t.nodeType===t.ELEMENT_NODE,o=t.textContent.trim()==="",i=t.parentElement?.hasAttribute("slot");return t.slot?!1:e&&!o||r&&!i})}getNamedSlot(t){let e=`[slot="${t}"]`;return this.host.querySelector(e)}insert(t,e){let r=Array.from(this.host.shadowRoot?.querySelectorAll("slot")||[]);e?r.find(o=>o.name===e)?.appendChild(t):r.filter(o=>!o.name)[0]?.appendChild(t)}prepend(t,e){let r=Array.from(this.host.shadowRoot?.querySelectorAll("slot")||[]);e?r.find(o=>o.name===e)?.prepend(t):r.filter(o=>!o.name)[0]?.prepend(t)}test(t){return t?this.hasNamedSlot(t):this.hasDefaultSlot()}get(t){if(t){let e=this.getNamedSlot(t);return e?[e]:[]}else return this.getDefaultSlot()}constructor(t){this.slots=[],this.handleUpdate=e=>{let r=e.target,o=this.slots.includes("[default]")&&!r.name,i=r.name&&this.slots.includes(r.name);!o&&!i||this.host.requestUpdate()},this.host=t,this.slots=t.constructor.slots,t.addController(this)}hostConnected(){this.root=this.host.shadowRoot,this.root?.addEventListener("slotchange",this.handleUpdate)}hostDisconnected(){this.root?.removeEventListener("slotchange",this.handleUpdate)}};function p(n,t){let e={waitUntilFirstUpdate:!1,...t};return(r,o)=>{let{update:i}=r,s=Array.isArray(n)?n:[n];r.update=function(l){l&&(s.forEach(h=>{let d=h;if(l.has(d)){let g=l.get(d),v=this[d];g!==v&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[o](g,v)}}),i.call(this,l))}}}var ti=m`
  *,
  *::before,
  *::after,
  :host {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
  }

  :host {
    --rowspan: reset;
    --colspan: reset;
    --justify: reset;
    --top: reset;
    --bottom: reset;

    --animation: reset;
    --animation-duration: 250ms;
    --animation-easing: ease-in;

    user-select: none;
    box-sizing: border-box;

    margin-top: var(--top);
    margin-bottom: var(--bottom);

    grid-column: var(--col, span var(--colspan, auto));
    grid-row: var(--row) / calc(var(--rowspan) - 1);
    justify-self: var(--justify);

    animation: var(--animation) var(--animation-duration) var(--animation-easing);
    font-size: var(--settings-font-size, 16px);
    font-variant: none;
    font-feature-settings: 'c2sc', 'smcp';
    font-family: var(--hmwc-font-sans);
    line-height: var(--hmwc-line-height-normal);
    letter-spacing: var(--hmwc-letter-spacing-normal);
    color: var(--hmwc-color-neutral-800);
    zoom: var(--settings-zoom, 1);
    scrollbar-width: thin;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([defined]) {
    opacity: 1;
    transition: 0.1s opacity;
  }

  :host:not(:defined),
  :host:not(:defined) * {
    opacity: 0;
  }

  :host([hidden]) {
    display: none !important;
  }

  @keyframes hmwc-reveal {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  :host(.hmwc-reveal) {
    animation: hmwc-reveal 0.3s cubic-bezier(0.2, 0, 0.13, 1.5) both;
  }

  :host {
    form {
      display: contents;
    }
  }
`;var vt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Jo=function(n,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?n!==t||!r:!t.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(n):r?r.value:t.get(n)},Zo=function(n,t,e,r,o){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?n!==t||!o:!t.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?o.call(n,e):o?o.value=e:t.set(n,e),e},lr,u=class extends he{static get styles(){let t=this._styles?this._styles:[];return[ti,...Array.isArray(t)?t:[t]]}static set styles(t){let e=this._styles?this._styles:[];this._styles=[e,t]}tooltipChanged(){this.tooltip?this._tooltipEl?this._tooltipEl.textContent=this.tooltip:this._setupTooltip():this._teardownTooltip()}spanChanged(){this.span?this.reposition():(this.style.removeProperty("--colspan"),this.style.removeProperty("--rowspan"))}emit(t,e){let r=new CustomEvent(t,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...e});return this.dispatchEvent(r),r}changeStep(t){this.controllers.form?.changeStep(t)}static define(t,e=this){customElements.get(t)||customElements.define(t,class extends e{})}reposition(){let t=this.parentElement,e={cols:1,rows:1};this.span===!0?e.cols=t.cols:this.span instanceof Array?(e.cols=this.span[0]===!0?t.cols:this.span[0]||1,e.rows=this.span[1]===!0?t.rows:this.span[1]||1):e.cols=this.span||e.cols,e.cols>1&&this.style.setProperty("--colspan",`${e.cols}`),e.rows>1&&this.style.setProperty("--rowspan",`${e.rows+1}`),["col","row","justify"].forEach(o=>{let i=this[o];i&&this.style.setProperty(`--${o}`,`${i}`)})}applyStyles(){let t={xxs:"0.125rem",xs:"var(--hmwc-spacing-3x-small)",sm:"var(--hmwc-spacing-2x-small)",md:"var(--hmwc-spacing-x-small)",lg:"var(--hmwc-spacing-large)",xl:"var(--hmwc-spacing-x-large)",xxl:"var(--hmwc-spacing-2x-large)",auto:"auto"};this.top&&this.style.setProperty("--top",`${t[this.top]}`),this.bottom&&this.style.setProperty("--bottom",`${t[this.bottom]}`)}applyAnimation(){["HMWC-CARD","HMWC-ALERT","HMWC-ACCORDION","HMWC-ACCORDION-GROUP"].includes(this.tagName)&&this.style.setProperty("--animation","scale-in"),this.animation&&(this.animation instanceof Object?(this.animation.name&&this.style.setProperty("--animation",`${this.animation.name}`),this.animation.duration&&this.style.setProperty("--animation-duration",`${this.animation.duration}ms`),this.animation.easing&&this.style.setProperty("--animation-easing",`${this.animation.easing}`)):this.style.setProperty("--animation",`${this.animation}`))}firstUpdated(t){super.firstUpdated(t)}connectedCallback(){super.connectedCallback(),this.parentElement?.tagName==="HMWC-GRID"&&this.reposition(),this.applyStyles(),this.applyAnimation(),this.notificationStack&&this._ensureStackContainer(),this.tooltip&&this._setupTooltip(),this._revealObserver=new MutationObserver(t=>{for(let e of t)e.attributeName==="hidden"&&!this.hasAttribute("hidden")&&this._playReveal()}),this._revealObserver.observe(this,{attributes:!0,attributeFilter:["hidden"]})}_playReveal(){let t=Array.from(this.children).filter(i=>i instanceof HTMLElement&&!i.classList.contains("hmwc-notification-stack"));if(!t.length){this.classList.add("hmwc-reveal"),this.addEventListener("animationend",()=>this.classList.remove("hmwc-reveal"),{once:!0});return}let e=50,r=350,o="cubic-bezier(0.2, 0, 0.13, 1.5)";t.forEach((i,s)=>{i.animate([{opacity:0,transform:"translateY(12px)",filter:"blur(2px)"},{opacity:1,transform:"translateY(0)",filter:"blur(0)"}],{duration:r,delay:s*e,easing:o,fill:"both"})})}_ensureStackContainer(){this._stackContainer||(this._stackContainer=Object.assign(document.createElement("div"),{className:"hmwc-notification-stack"}),this.global||(this.style.position="relative"),this.appendChild(this._stackContainer))}_positionTooltip(){if(!this._tooltipEl)return;let t=this.getBoundingClientRect(),e=this._tooltipEl.getBoundingClientRect(),r=this.tooltipPlacement||"top",o=6,i=0,s=0;switch(r){case"top":default:i=t.top-e.height-o,s=t.left+t.width/2-e.width/2;break;case"top-start":i=t.top-e.height-o,s=t.left;break;case"top-end":i=t.top-e.height-o,s=t.right-e.width;break;case"bottom":i=t.bottom+o,s=t.left+t.width/2-e.width/2;break;case"bottom-start":i=t.bottom+o,s=t.left;break;case"bottom-end":i=t.bottom+o,s=t.right-e.width;break;case"left":i=t.top+t.height/2-e.height/2,s=t.left-e.width-o;break;case"left-start":i=t.top,s=t.left-e.width-o;break;case"left-end":i=t.bottom-e.height,s=t.left-e.width-o;break;case"right":i=t.top+t.height/2-e.height/2,s=t.right+o;break;case"right-start":i=t.top,s=t.right+o;break;case"right-end":i=t.bottom-e.height,s=t.right+o;break}this._tooltipEl.style.top=`${i}px`,this._tooltipEl.style.left=`${s}px`}_setupTooltip(){if(this._tooltipEl)return;let t=document.createElement("div");t.setAttribute("role","tooltip"),t.setAttribute("aria-live","off"),t.textContent=this.tooltip||"",Object.assign(t.style,{display:"none",position:"fixed",width:"max-content",maxWidth:"20rem",borderRadius:"var(--hmwc-tooltip-border-radius)",backgroundColor:"var(--hmwc-tooltip-background-color)",fontFamily:"var(--hmwc-tooltip-font-family)",fontSize:"var(--hmwc-tooltip-font-size)",fontWeight:"var(--hmwc-tooltip-font-weight)",lineHeight:"var(--hmwc-tooltip-line-height)",color:"var(--hmwc-tooltip-color)",padding:"var(--hmwc-tooltip-padding)",pointerEvents:"none",userSelect:"none",zIndex:"var(--hmwc-z-index-tooltip)"}),this._tooltipEl=t,document.body.appendChild(t),this.addEventListener("mouseenter",this._tooltipShow),this.addEventListener("mouseleave",this._tooltipHide),this.addEventListener("focusin",this._tooltipShow),this.addEventListener("focusout",this._tooltipHide),document.addEventListener("keydown",this._tooltipKeyDown)}_teardownTooltip(){this._tooltipEl&&(this._tooltipEl.remove(),this._tooltipEl=void 0),clearTimeout(this._tooltipTimeout),this.removeEventListener("mouseenter",this._tooltipShow),this.removeEventListener("mouseleave",this._tooltipHide),this.removeEventListener("focusin",this._tooltipShow),this.removeEventListener("focusout",this._tooltipHide),document.removeEventListener("keydown",this._tooltipKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this._teardownTooltip(),this._revealObserver?.disconnect()}constructor(){super(),this.controllers=this._createControllers(),this._tooltipShow=()=>{this._tooltipEl&&(clearTimeout(this._tooltipTimeout),this._tooltipTimeout=window.setTimeout(()=>{this._tooltipEl&&(this._tooltipEl.style.display="block",this._tooltipEl.setAttribute("aria-live","polite"),this._positionTooltip())},150))},this._tooltipHide=()=>{this._tooltipEl&&(clearTimeout(this._tooltipTimeout),this._tooltipTimeout=window.setTimeout(()=>{this._tooltipEl&&(this._tooltipEl.style.display="none",this._tooltipEl.setAttribute("aria-live","off"))},150))},this._tooltipKeyDown=t=>{t.key==="Escape"&&this._tooltipEl&&(this._tooltipEl.style.display="none")},lr.set(this,!1),this.initialReflectedProperties=new Map}_createControllers(){let t,e,r=this;return{get slot(){return t??=new Ue(r)},get scroll(){return e??=new Qr(r)}}}attributeChangedCallback(t,e,r){Jo(this,lr,"f")||(this.constructor.elementProperties.forEach((o,i)=>{o.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),Zo(this,lr,!0,"f")),super.attributeChangedCallback(t,e,r)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,r)=>{t.has(r)&&this[r]==null&&(this[r]=e)})}};lr=new WeakMap;u.dependencies=[];u.slots=[];vt([a({type:String})],u.prototype,"tooltip",void 0);vt([a({type:String,attribute:"tooltip-placement"})],u.prototype,"tooltipPlacement",void 0);vt([p("tooltip")],u.prototype,"tooltipChanged",null);vt([a({type:Boolean,reflect:!0})],u.prototype,"notificationStack",void 0);vt([a({type:Boolean,reflect:!0})],u.prototype,"global",void 0);vt([a({type:Boolean})],u.prototype,"formTemplate",void 0);vt([a({type:Boolean})],u.prototype,"formGroup",void 0);vt([a({type:String})],u.prototype,"name",void 0);vt([a({type:Number})],u.prototype,"step",void 0);vt([a({type:Object})],u.prototype,"animation",void 0);vt([a({type:Number})],u.prototype,"span",void 0);vt([a({type:Number})],u.prototype,"col",void 0);vt([a({type:Number})],u.prototype,"row",void 0);vt([a({type:String})],u.prototype,"justify",void 0);vt([a({type:String})],u.prototype,"top",void 0);vt([a({type:String})],u.prototype,"bottom",void 0);vt([p("span")],u.prototype,"spanChanged",null);var ei=m`
  :host([required][required-indicator]) [part='label']::after {
    content: var(--hmwc-input-required-content, '*');
    margin-inline-start: var(--hmwc-input-required-content-offset, 2px);
    color: var(--hmwc-input-required-content-color, var(--hmwc-color-danger-500));
    font-size: var(--hmwc-input-required-content-font-size, 1em);
    font-weight: var(--hmwc-input-required-content-font-weight, var(--hmwc-font-weight-semibold, 600));
    line-height: 1;
    vertical-align: middle;
    align-self: center;
    pointer-events: none;
  }

  /* ── Label positioning ── */

  :host([label-pos='top']) [part='base'] {
    display: grid;
    align-content: end;
  }

  :host([label-pos='top']) [part='label'] {
    grid-row: 1;
    grid-column: 1;
  }

  :host([label-pos='bottom']) [part='base'] {
    display: grid;
  }

  :host([label-pos='bottom']) [part='label'] {
    grid-row: 2;
    grid-column: 1;
  }

  :host([label-pos='left']) [part='base'] {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
    align-items: center;
  }

  :host([label-pos='left']) [part='label'] {
    grid-row: 1;
    grid-column: 1;
    text-align: end;
  }

  :host([label-pos='right']) [part='base'] {
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 1rem;
    align-items: center;
  }

  :host([label-pos='right']) [part='label'] {
    grid-row: 1;
    grid-column: 2;
    text-align: end;
  }

  /* ── Standardized error region ──
     Rendered by HMWCFormComponent#_renderError(). Components
     opt in by including the helper in their template. See
     docs/v2/specs/VALIDATION.md §7.
  */

  [part='error'],
  .hmwc-error {
    color: var(--hmwc-form-error-color, var(--hmwc-color-danger-500));
    font-size: var(--hmwc-form-error-font-size, var(--hmwc-font-size-small));
    line-height: var(--hmwc-form-error-line-height, 1.4);
    margin-top: var(--hmwc-form-error-spacing, var(--hmwc-spacing-2x-small));
    min-height: 1em; /* prevent layout shift on appearance */
  }

  /* ── Standardized invalid-state border colors ──
     Components that draw a focusable control with a border
     pick this up via :host([invalid]) [part='control'].
  */

  :host([invalid]) [part='field'],
  :host([invalid]) [part='control'] {
    border-color: var(--hmwc-input-border-color-invalid, var(--hmwc-color-danger-500));
  }

  /* ── Standardized inline required-indicator ──
     Rendered by HMWCFormComponent#_renderRequiredIndicator().
     The historical [part='label']::after mechanism above
     remains for components that render their label as a
     part="label" element.
  */

  [part='required-indicator'],
  .hmwc-required-indicator {
    color: var(--hmwc-input-required-content-color, var(--hmwc-color-danger-500));
    margin-inline-start: var(--hmwc-input-required-content-offset, 2px);
    font-weight: var(--hmwc-font-weight-semibold, 600);
    line-height: 1;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    /* No transitions on error appearance — values render instantly. */
  }
`;var Rt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},F=class extends u{static get styles(){let t=super.styles;return[...Array.isArray(t)?t:[t],ei]}static set styles(t){super.styles=t}get(){return this.toggleComponent?this.checked:this.value}set(t){this.toggleComponent?this.checked=!!t:this.value=t}get validity(){return{...this._validity}}_isEmpty(){return this.toggleComponent?!this.checked:!String(this.value??"").trim()}_focusableControl(){return this}_resolveError(){return this._validity.customError&&this._customError?this._customError:this._validity.valueMissing?"Please fill out this field.":"Invalid value."}_resetValidity(){this._validity={valid:!0,valueMissing:!1,tooShort:!1,tooLong:!1,patternMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,typeMismatch:!1,badInput:!1,customError:!1}}validate(){return this.reportValidity()}showValidity(){}checkValidity(){return this._resetValidity(),this.disabled?!0:(this._customError!==null&&(this._validity.customError=!0),this.required&&this._isEmpty()&&(this._validity.valueMissing=!0),this._validity.valid=!(this._validity.valueMissing||this._validity.tooShort||this._validity.tooLong||this._validity.patternMismatch||this._validity.rangeUnderflow||this._validity.rangeOverflow||this._validity.typeMismatch||this._validity.badInput||this._validity.customError),this._validity.valid)}reportValidity(){let t=!!this.invalid;return this.checkValidity()?(t&&(this.invalid=!1,this.error=void 0,this._emitValid()),!0):(this.invalid=!0,this.error=this._resolveError(),this._focusableControl()?.focus(),this._emitInvalid(),!1)}setCustomError(t){this._customError=t,this._validity.customError=!0,this._validity.valid=!1,this.invalid=!0,this.error=t,this._emitInvalid()}setCustomValidity(t){t?this.setCustomError(t):this.clearValidity()}clearValidity(){let t=!!this.invalid;this._customError=null,this._resetValidity(),this.invalid=!1,this.error=void 0,t&&this._emitValid()}hideValidation(){}_emitInvalid(){let t={field:this.name??this.id??"",value:this.toggleComponent?this.checked:this.value,error:this.error??"",validity:{...this._validity}};this.emit("hmwc-invalid",{detail:t})}_emitValid(){let t={field:this.name??this.id??"",value:this.toggleComponent?this.checked:this.value};this.emit("hmwc-valid",{detail:t})}_errorId(){return`${this.id||"hmwc-form"}-error`}_ariaInvalid(){return this.invalid?"true":"false"}_ariaErrorMessage(){if(this.invalid&&this.error)return this._errorId()}_renderError(){return!this.invalid||!this.error?E:c` <div part="error" class="hmwc-error" id=${this._errorId()} role="alert" aria-live="polite">${this.error}</div> `}_renderRequiredIndicator(){return!this.required||!this.requiredIndicator?E:c`<span part="required-indicator" class="hmwc-required-indicator" aria-hidden="true">*</span>`}connectedCallback(){super.connectedCallback()}constructor(){super(),this.value="",this._validity={valid:!0,valueMissing:!1,tooShort:!1,tooLong:!1,patternMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,typeMismatch:!1,badInput:!1,customError:!1},this._customError=null}};F.formComponent=!0;Rt([a({type:String,reflect:!0})],F.prototype,"name",void 0);Rt([a({type:String,reflect:!0})],F.prototype,"value",void 0);Rt([a({type:Boolean,reflect:!0})],F.prototype,"checked",void 0);Rt([a({type:Boolean,reflect:!0})],F.prototype,"required",void 0);Rt([a({type:Boolean,reflect:!0,attribute:"required-indicator"})],F.prototype,"requiredIndicator",void 0);Rt([a({type:Boolean,reflect:!0})],F.prototype,"disabled",void 0);Rt([a({type:Boolean,reflect:!0})],F.prototype,"invalid",void 0);Rt([a({type:String})],F.prototype,"error",void 0);Rt([a({type:String})],F.prototype,"label",void 0);Rt([a({type:String,reflect:!0,attribute:"label-pos"})],F.prototype,"labelPos",void 0);Rt([a({type:Boolean,reflect:!0})],F.prototype,"sm",void 0);Rt([a({type:Boolean,reflect:!0})],F.prototype,"md",void 0);Rt([a({type:Boolean,reflect:!0})],F.prototype,"lg",void 0);Rt([a({type:Boolean})],F.prototype,"autofocus",void 0);var cr=class n{edit(t){this.setAll(t),this.editing=!0,this.accordionGroups.size>0&&this.accordionGroups.forEach(e=>{e.forEach(r=>r.hide())}),queueMicrotask(()=>{this.snapshot=this.getFormData()??null,this.updateButtonState()})}cancelEdit(){this.editing=!1,this.snapshot=null,this.updateButtonState(),this.host.emit("hmwc-cancel")}isDirty(){if(!this.editing||!this.snapshot)return!0;let t=this.getFormData();return t?JSON.stringify(t)!==JSON.stringify(this.snapshot):!1}set(t,e){if(!e)return;let r;try{r=JSON.parse(e)}catch{r=e}let o=l=>this.components.find(h=>h.getAttribute("name")===l),i=(l,h)=>{if(h&&typeof h=="object"&&!Array.isArray(h)&&l.hasAttribute("formGroup")&&Array.from(l.children).forEach(d=>{let g=d;if(!g.hasAttribute("name"))return;let v=g.getAttribute("name");v&&i(g,h[v])}),!this.FORM_COMPONENTS.includes(this.HMWCName(l))&&(typeof h!="object"||h===null)){this.getFormComponentsInElement(l).forEach(g=>i(g,h));return}if(["checkbox","switch"].includes(this.HMWCName(l)))h===!0||h==="true"||h===1||h==="1"?l.setAttribute("checked","true"):l.removeAttribute("checked");else{let d=typeof h=="string"?decodeURIComponent(h):String(h??"");if(d==null||d==="null"||d==='""')return;this.HMWCName(l)==="input"&&l.getAttribute("type")==="date"&&(l.initialValueDateParsed=!1),l.setAttribute("value",d)}},s=o(t);if(s)if(s.hasAttribute("formGroup"))if(Array.isArray(r)){let l=Array.from(s.children).find(h=>h.formTemplate);l?(Array.from(s.children).forEach(h=>{!h.formTemplate&&this.HMWCName(h)!=="button"&&h.remove()}),r.length>0&&i(l,r[0]),r.length>1&&this.addFromTemplate(l,r.length-1).forEach((d,g)=>{i(d,r[g+1])})):Array.from(s.children).forEach((h,d)=>{i(h,r[d])})}else r&&typeof r=="object"&&Object.keys(r).forEach(l=>{let h=o(l);h&&i(h,r[l])});else i(s,r)}setAll(t){let e={};Object.keys(t).forEach(r=>{e[r]=JSON.stringify(t[r])}),this.components.forEach(r=>{let o=r.name??r.id;o&&Object.keys(t).includes(o)&&this.set(o,e[o])})}validate(){this.components.forEach(t=>{this.FORM_COMPONENTS.includes(this.HMWCName(t))&&t.checkValidity&&(t.invalid=!t.checkValidity(),t.invalid&&t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}))}),this.updateButtonState()}validateEl(t){t?.checkValidity&&(t.invalid=!t.checkValidity()),this.updateButtonState()}clear(){this.editing=!1,this.snapshot=null,this.removeAllFromTemplates(),this.components.forEach(t=>{t.setAttribute("value",""),t.removeAttribute("value"),t.removeAttribute("checked"),t.removeAttribute("invalid")}),this.host.emit("hmwc-reset")}submit(t){if(t&&t.key!=="Enter")return;let e=!0;if(this.accordionGroups.size>0){for(let o=1;o<=this.steps;o++)if(!this.validateStep(o)){e=!1;let i=this.getAccordionForStep(o);i&&this.getComponentsInAccordion(i).forEach(s=>{this.validateEl(s)}),this.updateAccordionErrorIndicator(o),this.changeStep(o);break}e&&this.getOuterFormComponents().forEach(o=>{o.checkValidity&&!o.checkValidity()&&(e=!1,this.validateEl(o))})}else this.components.forEach(o=>{o.hasAttribute("formGroup")||(this.stepComponents.length?o.step===this.step&&o.checkValidity&&!o.checkValidity()&&(e=!1):o.checkValidity&&!o.checkValidity()&&(e=!1))});if(!e){this.validate();return}let r=this.getFormData(t);if(r)return this.host.emit("submit",{detail:{value:r}}),this.host.emit("hmwc-submit",{detail:{data:r}}),this.editing=!1,this.snapshot=null,r}changeStep(t){let e=this.step??0;this.step=t,this.updateStepUI(),this.updateButtonState(),this.host.emit("hmwc-change",{detail:{value:this.getFormData()}}),this.host.emit("hmwc-step",{detail:{from:e,to:t}})}increment(){if(this.step!==void 0&&this.step<this.steps){if(this.accordionGroups.size>0){if(this.isAccordionMultipleMode()){let e=!0;if(this.accordionGroups.forEach(o=>{o.forEach(i=>{i.active&&i.step!==void 0&&(this.validateStep(i.step)||(e=!1,this.getComponentsInAccordion(i).forEach(s=>{this.validateEl(s)}),this.updateAccordionErrorIndicator(i.step)))})}),!e)return;let r=this.findNextInactiveStep();r!==void 0&&this.changeStep(r);return}if(!this.validateStep(this.step)){let e=this.getAccordionForStep(this.step);e&&this.getComponentsInAccordion(e).forEach(r=>{this.validateEl(r)}),this.updateAccordionErrorIndicator(this.step);return}}this.changeStep(this.step+1)}}decrement(){if(this.step===void 0)return;let t=this.accordionGroups.size>0?1:0;this.step>t&&this.changeStep(this.step-1)}canPerform(t){switch(t){case"submit":return!(this.editing&&!this.isDirty());case"reset":return!(!this.data||Object.keys(this.data).length===0);case"cancel":return this.editing;case"next":return this.step===void 0?!1:this.step<this.steps;case"previous":{if(this.step===void 0)return!1;let e=this.accordionGroups.size>0?1:0;return this.step>e}case"add":return this.templates.size>0;case"remove":return this.templates.size>0;default:return!1}}async perform(t,e){if(!this.canPerform(t))return!1;if(e&&this.cooldownMs>0){let r=Date.now(),o=this.lastActionTime.get(e)??0;if(r-o<this.cooldownMs)return!1;this.lastActionTime.set(e,r)}switch(t){case"submit":return!!this.submit();case"reset":return this.clear(),!0;case"cancel":return this.cancelEdit(),!0;case"next":return this.increment(),!0;case"previous":return this.decrement(),!0;case"add":return e?(this.handleTemplateAdd(e),!0):(console.warn('FormController.perform("add"): a source element is required.'),!1);case"remove":return e?(this.handleTemplateRemove(e),!0):(console.warn('FormController.perform("remove"): a source element is required.'),!1);default:return!1}}getFormData(t){if(t&&t?.key!=="Enter"||t&&this.HMWCName(document.activeElement||void 0)!=="input")return;t&&t.preventDefault();let e={},r=new Set;return this.components.forEach(o=>{if(o.hasAttribute("formGroup")){if(r.has(o)||this.findFormGroup(o))return;r.add(o);let l=o.name;l&&(e[l]=this.collectGroupData(o));return}if(!this.FORM_COMPONENTS.includes(this.HMWCName(o)))return;let i=this.findFormGroup(o);if(i){if(r.has(i))return;if(this.findFormGroup(i)){r.add(i);return}r.add(i);let l=this.collectGroupData(i),h=i.name;h&&(e[h]=l)}else{if(!o.name)return;let s=this.getComponentValue(o);if(Object.keys(e).includes(o.name)){let l=e[o.name];e[o.name]=[...Array.isArray(l)?l:[l],s]}else e[o.name]=s}}),e}findFormGroup(t){let e=t.parentElement;for(;e&&e!==this.host;){if(e.hasAttribute("formGroup"))return e;e=e.parentElement}return null}getComponentValue(t){if(["checkbox","switch"].includes(this.HMWCName(t)))return this.binary?t.checked?1:0:t.checked;let e=String(t.value??""),r;try{r=decodeURIComponent(e)}catch{r=e}if(this.HMWCName(t)==="input"&&t.getAttribute("type")==="number"){if(r==="")return;let o=Number(r);return isNaN(o)?r:o}if(!(this.HMWCName(t)==="input"&&t.getAttribute("type")==="date"&&r===""))return r}collectGroupData(t){let e=Array.from(t.children);return this.shouldCollectAsArray(e)?e.map(o=>this.collectRowData(o)).filter(o=>!(o==null||typeof o=="object"&&!Array.isArray(o)&&Object.keys(o).length===0)):this.collectObjectData(t)}shouldCollectAsArray(t){if(t.length===0)return!1;let e=t[0];return this.FORM_COMPONENTS.includes(this.HMWCName(e))&&e.name?!1:this.FORM_COMPONENTS.includes(this.HMWCName(e))?t.every(i=>!i.name):!0}collectRowData(t){let e={};return this.FORM_COMPONENTS.includes(this.HMWCName(t))?this.getComponentValue(t):(this.getFormComponentsInElement(t).forEach(o=>{o.name&&(e[o.name]=this.getComponentValue(o))}),this.collectNestedFormGroups(t,e),e)}collectObjectData(t){let e={};return this.getFormComponentsInElement(t).forEach(o=>{o.name&&(e[o.name]=this.getComponentValue(o))}),this.collectNestedFormGroups(t,e),e}collectNestedFormGroups(t,e){let r=o=>{Array.from(o.children).forEach(i=>{if(i.hasAttribute("formGroup")){let s=i.name;s&&(e[s]=this.collectGroupData(i))}else this.FORM_COMPONENTS.includes(this.HMWCName(i))||r(i)})};r(t)}getFormComponentsInElement(t){let e=[],r=o=>{Array.from(o.children).forEach(i=>{i.hasAttribute("formGroup")||(this.FORM_COMPONENTS.includes(this.HMWCName(i))?e.push(i):r(i))})};return r(t),e}addFromTemplate(t,e=1,r=!1){let o=this.findTemplate(t);if(!o)return console.warn("FormController: No formTemplate found"),[];let i=o.parentElement;if(!i)return[];let s=[];for(let h=0;h<e;h++){let d=o.cloneNode(!0);d.removeAttribute("formTemplate"),d.formTemplate=!1,d.setAttribute("data-template-clone",""),d.style.display="",d.removeAttribute("hidden"),r||this.clearElementValues(d);let g=i.lastElementChild;g&&this.HMWCName(g)==="button"?i.insertBefore(d,g):i.appendChild(d),s.push(d)}this.refreshHMWCFormComponents(),this.updateData();let l=this.resolveTemplateGroup(o);return s.forEach(h=>{let d=h.parentElement,g=d?Array.prototype.indexOf.call(d.children,h):-1;this.host.emit("hmwc-template-add",{detail:{group:l,index:g}})}),s}addTemplateRow(t){let e=this.addFromTemplate(t);return e.length>0?e[0]:null}findTemplate(t){let e=t.parentElement;if(e){let i=Array.from(e.children).find(s=>s.formTemplate);if(i)return i}let r=t.closest("[formGroup]");if(r){let i=r.querySelector("[formTemplate]");if(i)return i}let o=e;for(;o&&o!==this.host;){let i=Array.from(o.children).find(s=>s.formTemplate);if(i)return i;o=o.parentElement}return null}removeFromTemplate(t){if(t.formTemplate){console.warn("FormController: Cannot remove a formTemplate element");return}let e=this.resolveTemplateGroup(t),r=t.parentElement,o=r?Array.prototype.indexOf.call(r.children,t):-1;t.remove(),this.refreshHMWCFormComponents(),this.updateData(),this.host.emit("hmwc-template-remove",{detail:{group:e,index:o}})}resolveTemplateGroup(t){let e=t.getAttribute("name");if(e)return e;let r=t.closest("[formGroup]");if(r){let o=r.getAttribute("name");if(o)return o}return null}removeTemplateRow(t){this.removeFromTemplate(t)}removeAllFromTemplates(){this.templates.forEach((t,e)=>{Array.from(e.children).forEach(r=>{r!==t&&r.hasAttribute("data-template-clone")&&r.remove()})}),this.refreshHMWCFormComponents(),this.updateData()}clearElementValues(t){if(this.FORM_COMPONENTS.includes(this.HMWCName(t))){let r=t;r.value="",r.checked=!1,r.removeAttribute("value"),r.removeAttribute("checked"),r.removeAttribute("invalid")}this.getFormComponentsInElement(t).forEach(r=>{r.value="",r.checked=!1,r.removeAttribute("value"),r.removeAttribute("checked"),r.removeAttribute("invalid")})}initializeTemplates(){this.templates.clear(),this.host.querySelectorAll("[formTemplate]").forEach(e=>{let r=e.parentElement;r&&this.templates.set(r,e)})}initializeAccordionGroups(){if(this.accordionGroups.clear(),!this.controls.some(r=>r.increment||r.decrement))return;this.host.querySelectorAll("hmwc-accordion-group").forEach(r=>{let o=r,i=Array.from(r.querySelectorAll("hmwc-accordion"));i.length!==0&&(i.forEach((s,l)=>{s.step===void 0&&(s.step=l+1)}),this.accordionGroups.set(o,i),this.steps=i.length,(this.step===void 0||this.step===0)&&(this.step=1),i.forEach(s=>{this.listenerMap.has(s)||(this.listenerMap.set(s,!0),s.addEventListener("hmwc-expand",()=>{if(s.step!==void 0){if(this.accordionStepLock&&s.step!==this.step){s.hide();return}if(s.step>this.step)for(let l=this.step;l<s.step;l++)this.updateAccordionErrorIndicator(l);this.changeStep(s.step)}}))}))}),this.accordionGroups.size>0&&this.updateAccordionStepUI()}guardStepperAccordionConflict(){this.warnedStepperAccordionConflict||this.stepper&&this.accordionGroups.size>0&&(console.warn("[FormController] Both <hmwc-stepper> and <hmwc-accordion-group> are wired to the same form container. Declare one or the other, never both. See FORM_BUTTON_BEHAVIORS \xA73.6."),this.warnedStepperAccordionConflict=!0)}getComponentsInAccordion(t){return this.components.filter(e=>e.hasAttribute("formGroup")||!this.FORM_COMPONENTS.includes(this.HMWCName(e))?!1:t.contains(e))}getOuterFormComponents(){return this.components.filter(t=>{if(t.hasAttribute("formGroup")||!this.FORM_COMPONENTS.includes(this.HMWCName(t)))return!1;for(let[e]of this.accordionGroups)if(e.contains(t))return!1;return!0})}validateStep(t){let e=this.getAccordionForStep(t);if(!e)return!0;let r=this.getComponentsInAccordion(e),o=!0;return r.forEach(i=>{i.checkValidity&&!i.checkValidity()&&(o=!1)}),o}getAccordionForStep(t){for(let[,e]of this.accordionGroups){let r=e.find(o=>o.step===t);if(r)return r}}isAccordionMultipleMode(){for(let[t]of this.accordionGroups)if(t.multiple)return!0;return!1}findNextInactiveStep(){for(let[,t]of this.accordionGroups){let e=[...t].sort((r,o)=>(r.step??0)-(o.step??0));for(let r of e)if(!r.active&&r.step!==void 0)return r.step}}updateAccordionErrorIndicator(t){let e=this.getAccordionForStep(t);if(!e)return;let r=this.validateStep(t),o=this.accordionErrorIndicators.get(e);if(!r&&!o){let i=document.createElement("hmwc-icon");i.setAttribute("src","exclamation-circle"),i.setAttribute("slot","controls"),i.setAttribute("tooltip","This step has validation errors"),i.setAttribute("style","color: var(--hmwc-color-danger-600); font-size: 1.1em;"),e.appendChild(i),this.accordionErrorIndicators.set(e,i)}else r&&o&&(o.remove(),this.accordionErrorIndicators.delete(e))}refreshAccordionErrorIndicators(){this.accordionGroups.forEach(t=>{t.forEach(e=>{e.step!==void 0&&this.updateAccordionErrorIndicator(e.step)})})}updateAccordionStepUI(){this.step!==void 0&&this.accordionGroups.forEach((t,e)=>{let r=e.multiple;t.forEach(o=>{o.step===this.step?(o.show(),o.disabled=!1):r?this.accordionStepLock&&o.step!==void 0&&o.step>this.step?o.disabled=!0:o.disabled=!1:(o.hide(),this.accordionStepLock&&o.step!==void 0&&o.step>this.step?o.disabled=!0:o.disabled=!1)})})}handleKeydown(t){t.key==="Enter"&&this.HMWCName(document.activeElement||void 0)==="input"&&this.submit(t)}updateData(){let t=this.getFormData();t&&(this.data=t)}HMWCName(t){return t?t.tagName.split("HMWC-")[1]?.toLowerCase()??"":""}updateButtonState(){let t=!0;if(this.accordionGroups.size>0){if(this.step!==void 0&&this.step>=this.steps){for(let r=1;r<=this.steps;r++)if(!this.validateStep(r)){t=!1;break}t&&this.getOuterFormComponents().forEach(r=>{r.checkValidity&&!r.checkValidity()&&(t=!1)})}else this.step!==void 0&&!this.validateStep(this.step)&&(t=!1);this.refreshAccordionErrorIndicators()}else this.components.forEach(e=>{e.hasAttribute("formGroup")||(this.stepComponents.length?e.step===this.step&&e.checkValidity&&!e.checkValidity()&&(t=!1):e.checkValidity&&!e.checkValidity()&&(t=!1))});t&&this.editing&&!this.isDirty()&&(t=!1),t?this.getControl()?.removeAttribute("disabled"):this.getControl()?.setAttribute("disabled","true"),this.actionControls.forEach(e=>e.refreshAutoDisable?.())}updateStepUI(){if(this.step===void 0)return;this.stepper&&(this.stepper.step=this.step),this.accordionGroups.size===0&&this.stepComponents.forEach(i=>{i.step===this.step?i.removeAttribute("hidden"):i.setAttribute("hidden","true")}),this.accordionGroups.size>0&&this.updateAccordionStepUI();let t=this.controls.find(i=>i.begin),e=this.controls.find(i=>i.increment),r=this.controls.find(i=>i.decrement),o=this.controls.find(i=>i.submit);this.accordionGroups.size>0?(t?.removeAttribute("hidden"),e?.removeAttribute("hidden"),r?.removeAttribute("hidden"),o?.removeAttribute("hidden"),t&&this.step===0?(t.removeAttribute("disabled"),e?.setAttribute("disabled","true"),r?.setAttribute("disabled","true"),o?.setAttribute("disabled","true")):this.step<this.steps?(t?.setAttribute("disabled","true"),e?.removeAttribute("disabled"),this.step===1?r?.setAttribute("disabled","true"):r?.removeAttribute("disabled"),o?.setAttribute("disabled","true")):this.step===this.steps&&(t?.setAttribute("disabled","true"),e?.setAttribute("disabled","true"),r?.removeAttribute("disabled"),o?.removeAttribute("disabled"))):t&&this.step===0?(t.removeAttribute("hidden"),e?.setAttribute("hidden","true"),r?.setAttribute("hidden","true"),o?.setAttribute("hidden","true")):this.step<this.steps?(t?.setAttribute("hidden","true"),e?.removeAttribute("hidden"),r?.removeAttribute("hidden"),o?.setAttribute("hidden","true")):this.step===this.steps&&(t?.setAttribute("hidden","true"),e?.setAttribute("hidden","true"),r?.removeAttribute("hidden"),o?.removeAttribute("hidden"))}getControl(){let t;return this.controls.forEach(e=>{this.step!==void 0&&this.step<this.steps?e.increment&&(t=e):e.submit&&(t=e)}),t}getHMWCFormComponents(){let t=[],e=[],r=[],o=[],i=s=>(s.forEach(l=>{let h=l,d=l;(l.hasAttribute("formGroup")||this.FORM_COMPONENTS.includes(this.HMWCName(l))&&!t.includes(h))&&t.push(h),this.HMWCName(l)==="button"&&((d.begin||d.submit||d.increment||d.decrement||d.templateAdd||d.templateRemove)&&!e.includes(d)&&e.push(d),d.action&&!r.includes(d)&&r.push(d)),h.step!==void 0&&(this.HMWCName(l)==="stepper"?this.stepper=l:this.HMWCName(l)!=="accordion"&&!o.includes(h)&&o.push(h));let g=l.querySelectorAll("*");g.length&&i(Array.from(g))}),{components:t,controls:e,actionControls:r,stepComponents:o});return i(Array.from(this.host.children))}addElementListeners(t){if(this.listenerMap.has(t))return;this.listenerMap.set(t,!0);let e=this.HMWCName(t),r=i=>{let s=i.target;if(s?.hasAttribute("formGroup"))return!1;if(!i.detail?.autoFocused)return!0;let l=s?.getAttribute("value");return!(i.detail?.autoFocused&&!l)},o=()=>{this.validateEl(t),this.updateData()};t.addEventListener("hmwc-input",o),e==="dropdown"?t.addEventListener("hmwc-change",o):t.addEventListener("hmwc-blur",i=>r(i)&&this.validateEl(t))}addControlListeners(t){if(this.listenerMap.has(t))return;this.listenerMap.set(t,!0);let e=t,r=o=>()=>{let i=Date.now(),s=this.lastActionTime.get(t)??0;this.cooldownMs>0&&i-s<this.cooldownMs||(this.lastActionTime.set(t,i),o())};e.begin?t.addEventListener("hmwc-click",r(()=>this.increment())):e.increment?t.addEventListener("hmwc-click",r(()=>this.increment())):e.decrement?t.addEventListener("hmwc-click",r(()=>this.decrement())):e.submit?t.addEventListener("hmwc-click",r(()=>this.submit())):e.templateAdd?t.addEventListener("hmwc-click",r(()=>this.handleTemplateAdd(t))):e.templateRemove&&t.addEventListener("hmwc-click",r(()=>this.handleTemplateRemove(t)))}handleTemplateAdd(t){this.addFromTemplate(t).length===0&&console.warn("FormController: No template found for add button. Add formTemplate attribute to the element to clone.")}handleTemplateRemove(t){let e=t.parentElement;for(;e;){let o=e.parentElement;if(o?.hasAttribute("formGroup")){this.removeFromTemplate(e);return}e=o}let r=t.parentElement;r&&r!==this.host?this.removeFromTemplate(r):console.warn("FormController: Cannot determine which element to remove")}refreshHMWCFormComponents(){let{components:t,controls:e,actionControls:r,stepComponents:o}=this.getHMWCFormComponents();this.components=this.components.filter(i=>t.includes(i)),this.controls=this.controls.filter(i=>e.includes(i)),this.actionControls=this.actionControls.filter(i=>r.includes(i)),this.stepComponents=this.stepComponents.filter(i=>o.includes(i)),t.forEach(i=>{this.components.includes(i)||(this.components.push(i),this.addElementListeners(i))}),e.forEach(i=>{this.controls.includes(i)||(this.controls.push(i),this.addControlListeners(i))}),r.forEach(i=>{this.actionControls.includes(i)||this.actionControls.push(i)}),o.forEach(i=>{this.stepComponents.includes(i)||this.stepComponents.push(i)}),this.updateButtonState()}setupObserver(){if(this.observer)return;let t=e=>{let r=this.HMWCName(e),o=e;return this.FORM_COMPONENTS.includes(r)||r==="button"||e.hasAttribute("formGroup")||o.step!==void 0};this.observer=new MutationObserver(e=>{let r=!1;e.forEach(o=>{o.type==="childList"&&(o.addedNodes.forEach(i=>{if(i.nodeType===Node.ELEMENT_NODE){let s=i;t(s)&&(r=!0),s.querySelectorAll("*").forEach(h=>{t(h)&&(r=!0)})}}),o.removedNodes.forEach(i=>{if(i.nodeType===Node.ELEMENT_NODE){let s=i;t(s)&&(r=!0),s.querySelectorAll("*").forEach(h=>{t(h)&&(r=!0)})}}))}),r&&this.refreshHMWCFormComponents()}),this.observer.observe(this.host,{childList:!0,subtree:!0})}hostUpdated(){let t=this.host.getAttribute("form-cooldown");if(t!==null&&t!==""){let o=Number(t);this.cooldownMs=Number.isFinite(o)&&o>=0?o:n.ACTION_COOLDOWN_MS}else this.cooldownMs=n.ACTION_COOLDOWN_MS;if(this.refreshHMWCFormComponents(),this.stepComponents.length&&this.accordionGroups.size===0){let o=this.controls.find(i=>i.begin);this.step=o?0:1}if(this.initialized)return;this.initialized=!0;let e=this.root.querySelector("div");if(!e)return;let r=Object.assign(document.createElement("form"),{styleMap:new Map([["display","contents"]])});r.append(e),this.root.append(r),this.initializeTemplates(),this.initializeAccordionGroups(),this.guardStepperAccordionConflict(),this.updateStepUI(),this.host.addEventListener("keydown",this.boundKeydownHandler),this.setupObserver()}hostDisconnected(){this.observer&&(this.observer.disconnect(),this.observer=null),this.host.removeEventListener("keydown",this.boundKeydownHandler)}constructor(t){this.initialized=!1,this.binary=!1,this.FORM_COMPONENTS=["input","dropdown","checkbox","switch","radio-group","calendar"],this.observer=null,this.listenerMap=new WeakMap,this.boundKeydownHandler=this.handleKeydown.bind(this),this.cooldownMs=n.ACTION_COOLDOWN_MS,this.lastActionTime=new WeakMap,this.warnedStepperAccordionConflict=!1,this.templates=new Map,this.accordionGroups=new Map,this.accordionStepLock=!1,this.accordionErrorIndicators=new WeakMap,this.editing=!1,this.snapshot=null,this.components=[],this.controls=[],this.actionControls=[],this.stepComponents=[],this.errors=[],this.data={},this.host=t,this.root=this.host.shadowRoot,this.step=this.host.step,this.steps=this.host.steps??1,t.addController(this)}};cr.ACTION_COOLDOWN_MS=500;var ri=cr;var ii=m`
  :host {
    --container-alignment: none;
    --container-justification: none;
    --container-spacing: 0;
    --container-padding: 0;
    --container-border-radius: none;
    --container-aspect-ratio: none;
    --container-height: auto;
    --container-max-height: none;
    --container-width: fit-content;
    --container-max-width: none;
    --container-scrollbar: hidden;
    --container-shadow: none;
    --container-background: none;

    display: contents;
  }

  :host([fluid]) {
    --container-width: 100%;
  }

  :host([scrollable]) {
    --container-scrollbar: visible;
  }

  :host([center]) {
    --container-alignment: center;
    --container-justification: center;
  }

  :host([square]) {
    --container-aspect-ratio: 1;
  }

  :host([img]) {
    --container-background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), var(--image-url) no-repeat center center;
  }

  :host([align='start']) {
    --container-alignment: start;
  }
  :host([align='center']) {
    --container-alignment: center;
  }
  :host([align='end']) {
    --container-alignment: end;
  }
  :host([justify='start']) {
    --container-justification: start;
  }
  :host([justify='center']) {
    --container-justification: center;
  }
  :host([justify='end']) {
    --container-justification: end;
  }
  :host([justify='between']) {
    --container-justification: space-between;
  }
  :host([justify='around']) {
    --container-justification: space-around;
  }
  :host([justify='stretch']) {
    --container-justification: stretch;
  }
  :host([justify='even']) {
    --container-justification: space-evenly;
  }
  :host([gap='xxs']) {
    --container-spacing: var(--hmwc-spacing-2x-small);
  }

  :host([gap='xs']) {
    --container-spacing: var(--hmwc-spacing-x-small);
  }

  :host([gap='sm']) {
    --container-spacing: var(--hmwc-spacing-small);
  }

  :host([gap='md']) {
    --container-spacing: var(--hmwc-spacing-medium);
  }

  :host([gap='lg']) {
    --container-spacing: var(--hmwc-spacing-large);
  }

  :host([gap='xl']) {
    --container-spacing: var(--hmwc-spacing-x-large);
  }

  :host([gap='xxl']) {
    --container-spacing: var(--hmwc-spacing-2x-large);
  }

  :host([pad='xxs']) {
    --container-padding: var(--hmwc-spacing-2x-small);
  }

  :host([pad='xs']) {
    --container-padding: var(--hmwc-spacing-x-small);
  }

  :host([pad='sm']) {
    --container-padding: var(--hmwc-spacing-small);
  }

  :host([pad='md']) {
    --container-padding: var(--hmwc-spacing-medium);
  }

  :host([pad='lg']) {
    --container-padding: var(--hmwc-spacing-large);
  }

  :host([pad='xl']) {
    --container-padding: var(--hmwc-spacing-x-large);
  }

  :host([pad='xxl']) {
    --container-padding: var(--hmwc-spacing-2x-large);
  }

  :host([round='xxs']) {
    --container-border-radius: var(--hmwc-border-radius-2x-small);
  }

  :host([round='xs']) {
    --container-border-radius: var(--hmwc-border-radius-x-small);
  }

  :host([round='sm']) {
    --container-border-radius: var(--hmwc-border-radius-small);
  }

  :host([round='md']) {
    --container-border-radius: var(--hmwc-border-radius-medium);
  }

  :host([round='lg']) {
    --container-border-radius: var(--hmwc-border-radius-large);
  }

  :host([round='xl']) {
    --container-border-radius: var(--hmwc-border-radius-x-large);
  }

  :host([round='xxl']) {
    --container-border-radius: var(--hmwc-border-radius-2x-large);
  }

  :host([elevation='1']) {
    --container-shadow: var(--hmwc-shadow-small);
  }

  :host([elevation='2']) {
    --container-shadow: var(--hmwc-shadow-medium);
  }

  :host([elevation='3']) {
    --container-shadow: var(--hmwc-shadow-large);
  }

  :host([elevation='4']) {
    --container-shadow: var(--hmwc-shadow-x-large);
  }

  :host([elevation='5']) {
    --container-shadow: var(--hmwc-shadow-2x-large);
  }
`;var St=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},P=class extends u{connectedCallback(){super.connectedCallback(),this.form&&(this.controllers.form=new ri(this)),this.img&&this.style.setProperty("--image-url",`url(${this.img})`),this.label&&this.controllers.slot.insert(Object.assign(document.createElement("slot"),{name:"label",part:"label",innerHTML:this.label})),this.validationType==="alert"&&this.controllers.slot.prepend(Object.assign(document.createElement("hmwc-alert"),{label:`Submission failed with ${this.controllers.form?.errors.length} error(s).`,message:"Please fix all errors and try again.",danger:!0,open:!!this.controllers.form?.errors.length}))}disconnectedCallback(){super.disconnectedCallback(),delete this.controllers.form}constructor(){super(),this.validationType="outline"}};P.styles=ii;St([a({type:String})],P.prototype,"label",void 0);St([a({type:Boolean,reflect:!0})],P.prototype,"fluid",void 0);St([a({type:Boolean,reflect:!0})],P.prototype,"scrollable",void 0);St([a({type:Boolean,reflect:!0})],P.prototype,"center",void 0);St([a({type:String,reflect:!0})],P.prototype,"align",void 0);St([a({type:String,reflect:!0})],P.prototype,"justify",void 0);St([a({type:String,reflect:!0})],P.prototype,"gap",void 0);St([a({type:String,reflect:!0})],P.prototype,"pad",void 0);St([a({type:String,reflect:!0})],P.prototype,"round",void 0);St([a({type:Number,reflect:!0})],P.prototype,"elevation",void 0);St([a({type:String,reflect:!0})],P.prototype,"img",void 0);St([a({type:Boolean,reflect:!0})],P.prototype,"square",void 0);St([a({type:Boolean,reflect:!0})],P.prototype,"form",void 0);St([a({type:Number})],P.prototype,"steps",void 0);St([a({type:String})],P.prototype,"validationType",void 0);var Zt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ee=n=>(...t)=>({_$litDirective$:n,values:t}),me=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var f=Ee(class extends me{constructor(n){if(super(n),n.type!==Zt.ATTRIBUTE||n.name!=="class"||n.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(t=>n[t]).join(" ")+" "}update(n,[t]){if(this.st===void 0){this.st=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(let r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}let e=n.element.classList;for(let r of this.st)r in t||(e.remove(r),this.st.delete(r));for(let r in t){let o=!!t[r];o===this.st.has(r)||this.nt?.has(r)||(o?(e.add(r),this.st.add(r)):(e.remove(r),this.st.delete(r)))}return kt}});var y=n=>n??E;var oi=m`
  :host {
    --icon-color: inherit;
    --icon-size: inherit;

    display: contents;
  }

  .icon {
    color: var(--icon-color);
    font-size: var(--icon-size);
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;

    &.primary {
      --icon-color: var(--hmwc-color-primary-600);
    }

    &.success {
      --icon-color: var(--hmwc-color-success-600);
    }

    &.neutral {
      --icon-color: var(--hmwc-color-neutral-600);
    }

    &.warning {
      --icon-color: var(--hmwc-color-warning-600);
    }

    &.danger {
      --icon-color: var(--hmwc-color-danger-600);
    }

    &.xs {
      --icon-size: var(--hmwc-font-size-small);
    }

    &.sm {
      --icon-size: var(--hmwc-font-size-medium);
    }

    &.md {
      --icon-size: var(--hmwc-font-size-x-large);
    }

    &.lg {
      --icon-size: var(--hmwc-font-size-2x-large);
    }

    &.xl {
      --icon-size: calc(1.2 * var(--hmwc-font-size-2x-large));
    }
  }
`;var Lt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Qo="1.13.1",ta=`https://cdn.jsdelivr.net/npm/bootstrap-icons@${Qo}/font/bootstrap-icons.css`,_=class extends u{labelUpdate(){this.label?(this.setAttribute("role","img"),this.removeAttribute("aria-hidden"),this.setAttribute("aria-label",this.label)):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}firstUpdated(){this.labelUpdate()}render(){if(!this.src)return E;let t=f({icon:!0,bi:!0,[`bi-${this.src}`]:!0,xs:!!this.xs,sm:!!this.sm,md:!!this.md,lg:!!this.lg,xl:!!this.xl,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`<link rel="stylesheet" href=${ta} /><i part="base" class=${t}></i>`}};_.styles=oi;Lt([a({type:String,reflect:!0})],_.prototype,"src",void 0);Lt([a({type:String,reflect:!0})],_.prototype,"label",void 0);Lt([a({type:Boolean,reflect:!0})],_.prototype,"primary",void 0);Lt([a({type:Boolean,reflect:!0})],_.prototype,"success",void 0);Lt([a({type:Boolean,reflect:!0})],_.prototype,"neutral",void 0);Lt([a({type:Boolean,reflect:!0})],_.prototype,"warning",void 0);Lt([a({type:Boolean,reflect:!0})],_.prototype,"danger",void 0);Lt([a({type:Boolean,reflect:!0})],_.prototype,"xs",void 0);Lt([a({type:Boolean,reflect:!0})],_.prototype,"sm",void 0);Lt([a({type:Boolean,reflect:!0})],_.prototype,"md",void 0);Lt([a({type:Boolean,reflect:!0})],_.prototype,"lg",void 0);Lt([a({type:Boolean,reflect:!0})],_.prototype,"xl",void 0);Lt([p("label")],_.prototype,"labelUpdate",null);_.define("hmwc-icon",_);var ai=m`
  :host {
    --accordion-background: var(--hmwc-panel-background-color);
    --accordion-border-color: none;
    --accordion-border-radius: none;
    --accordion-font-color: var(--hmwc-color-neutral-750);
    --accordion-font-size: var(--hmwc-font-size-medium);
    --accordion-font-weight: var(--hmwc-font-weight-normal);
    --accordion-icon-color: var(--hmwc-color-neutral-700);
    --accordion-icon-size: var(--accordion-font-size);
    --accordion-trigger-size: 0.75rem;
    --accordion-trigger-color: var(--hmwc-color-neutral-700);
    --accordion-summary-padding: var(--hmwc-spacing-medium) var(--hmwc-spacing-large) var(--hmwc-spacing-small);

    --container-padding: var(--hmwc-spacing-large);
    --container-width: 100%;

    display: block;
  }

  .accordion {
    display: block;
    font-family: var(--hmwc-font-sans);
    background: var(--accordion-background);
    border: var(--hmwc-panel-border-width) solid var(--accordion-border-color);
    border-top-left-radius: var(--accordion-border-top-left-radius, var(--accordion-border-radius));
    border-top-right-radius: var(--accordion-border-top-right-radius, var(--accordion-border-radius));
    border-bottom-left-radius: var(--accordion-border-bottom-left-radius, var(--accordion-border-radius));
    border-bottom-right-radius: var(--accordion-border-bottom-right-radius, var(--accordion-border-radius));
    overflow-anchor: none;

    & .accordion__summary {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--accordion-summary-padding);
      color: var(--hmwc-color-neutral-750);
      font-size: var(--accordion-font-size);
      font-weight: var(--accordion-font-weight);
      white-space: nowrap;
      cursor: pointer;

      &::-webkit-details-marker {
        display: none;
      }

      &:focus {
        outline: none;
      }

      &:focus-visible {
        outline: var(--hmwc-focus-ring);
        outline-offset: calc(1px + var(--hmwc-focus-ring-offset));
      }

      & .accordion__details {
        display: flex;
        align-items: center;
        gap: var(--hmwc-spacing-large);
        color: var(--hmwc-color-neutral-750);
        --icon-color: var(--accordion-icon-color);
        --icon-size: var(--accordion-icon-size);

        & .accordion__label {
          color: var(--accordion-font-color);
          font-size: var(--accordion-font-size);
          font-weight: var(--accordion-font-weight);
          letter-spacing: var(--hmwc-letter-spacing-dense);
          transition: var(--hmwc-transition-fast) color ease;
        }
      }

      & .accordion__controls {
        display: flex;
        justify-content: end;
        width: 100%;
        margin-right: var(--hmwc-spacing-x-large);

        & hmwc-button {
          --icon-size: 1.1rem;
        }
      }

      & .accordion__trigger {
        display: flex;
        align-items: center;
        font-size: var(--accordion-trigger-size);
        color: var(--accordion-trigger-color);
        transition: var(--hmwc-transition-medium) rotate ease, var(--hmwc-transition-fast) color ease, var(--hmwc-transition-fast) translate ease;
        translate: 0;
      }
    }

    &:not(.disabled) .accordion__summary:hover {
      & .accordion__details .accordion__label {
        color: var(--hmwc-color-neutral-1000);
      }

      & .accordion__trigger {
        color: var(--hmwc-color-neutral-900);
        translate: var(--hmwc-spacing-2x-small);
      }
    }

    &:not(.disabled).active .accordion__summary:hover {
      & .accordion__trigger {
        translate: 0 var(--hmwc-spacing-2x-small);
      }
    }

    &.active {
      & .accordion__trigger {
        rotate: 90deg;
      }
    }

    & .accordion__body {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows var(--hmwc-transition-medium) ease;

      & > slot {
        overflow: hidden;
        padding-block: 0;
        padding-inline: var(--container-padding);
        transition: padding-block var(--hmwc-transition-medium) ease;
      }
    }

    &.active > .accordion__body {
      grid-template-rows: 1fr;

      & > slot {
        overflow: visible;
        padding-block: var(--container-padding);
      }
    }

    & .accordion__body > slot {
      display: block;
      align-items: var(--container-alignment);
      justify-content: var(--container-justification);
      gap: var(--container-spacing);
      border-radius: var(--container-border-radius);
      aspect-ratio: var(--container-aspect-ratio);
      width: var(--container-width);
      box-shadow: var(--container-shadow);
      background: var(--container-background);

      /* Promote nested surface level so child panels (cards, etc.)
         automatically contrast against the accordion background. */
      --hmwc-panel-background-color: var(--hmwc-input-background-color);
    }

    &.disabled {
      opacity: 0.5;

      & .accordion__summary {
        cursor: not-allowed;

        &:focus-visible {
          outline: none;
          box-shadow: none;
        }
      }
    }

    &.icon {
      & .accordion__details .accordion__icon {
        display: block;
        font-size: var(--accordion-icon-size);
      }
    }

    &.solo {
      --accordion-border-radius: var(--hmwc-border-radius-x-large);
      --accordion-border-color: var(--hmwc-panel-border-color);
    }

    &.basic {
      --accordion-background: none;
      --accordion-border-color: none;
      --accordion-trigger-size: 0.625rem;
      --accordion-summary-padding: 0;
      --container-padding: var(--hmwc-spacing-medium) 0;
    }
  }
`;var Qt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},K=class extends P{show(){this.disabled||(this.active=!0)}hide(){this.disabled||(this.active=!1)}toggle(t){t&&t.preventDefault(),this.active?this.hide():this.show()}focus(){this.summary.focus()}blur(){this.body?.blur(),this.summary.blur()}handleControlsClick(t){t.stopPropagation()}handleKeyboardInput(t){let e=["Enter"," "],r=["ArrowUp","ArrowLeft"],o=["ArrowDown","ArrowRight"];[...e,...r,...o].includes(t.key)&&(t.preventDefault(),e.includes(t.key)?this.active?this.hide():this.show():r.includes(t.key)?this.hide():o.includes(t.key)&&this.show())}iconUpdate(){this.icon&&this.icon instanceof Object&&(this.iconColor=this.icon.color,this.icon=this.icon.icon)}activityUpdate(){this.emit(`hmwc-${this.active?"expand":"collapse"}`)}firstUpdated(){this.solo=!(this.parentElement instanceof mt)}render(){let t=f({accordion:!0,active:!!this.active,disabled:!!this.disabled,basic:!!this.basic,solo:!!this.solo,icon:!!this.icon||this.controllers.slot.test("icon")});return c`
      <details part="base" class=${t} open>
        <summary
          part="summary"
          id="summary"
          class="accordion__summary"
          role="button"
          aria-expanded=${y(this.active)}
          aria-controls="content"
          aria-label=${y(this.label)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @keydown=${this.handleKeyboardInput}
          @click=${this.toggle}
          @focus=${()=>this.emit("hmwc-focus")}
          @blur=${()=>this.emit("hmwc-blur")}
          style="--accordion-icon-color: ${y(this.iconColor)}">
          <div part="details" class="accordion__details">
            <slot name="icon" part="icon" class="accordion__icon">${this.icon&&c`<hmwc-icon flex src=${this.icon}></hmwc-icon>`}</slot>
            <slot name="label" part="label" class="accordion__label">${this.label}</slot>
          </div>
          <slot name="controls" part="controls" class="accordion__controls" @click=${this.handleControlsClick}></slot>
          <slot name="trigger" part="trigger" class="accordion__trigger">
            <hmwc-icon part="summary-icon" src="chevron-right"></hmwc-icon>
          </slot>
        </summary>
        <div id="content" class="accordion__body" part="body" role="region" aria-labelledby="summary">
          <slot></slot>
        </div>
      </details>
    `}};K.styles=ai;K.dependencies=[_];K.slots=["controls"];Qt([b()],K.prototype,"solo",void 0);Qt([a({type:Boolean,reflect:!0})],K.prototype,"active",void 0);Qt([a({type:String,reflect:!0})],K.prototype,"label",void 0);Qt([a({type:String,reflect:!0})],K.prototype,"icon",void 0);Qt([a({type:Boolean,reflect:!0})],K.prototype,"disabled",void 0);Qt([a({type:Boolean,reflect:!0})],K.prototype,"basic",void 0);Qt([T(".accordion__summary")],K.prototype,"summary",void 0);Qt([T(".accordion__body")],K.prototype,"body",void 0);Qt([b()],K.prototype,"iconColor",void 0);Qt([p("icon")],K.prototype,"iconUpdate",null);Qt([p("active")],K.prototype,"activityUpdate",null);var ni=Symbol.for(""),ea=n=>{if(n?.r===ni)return n?._$litStatic$};var Be=(n,...t)=>({_$litStatic$:t.reduce((e,r,o)=>e+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+n[o+1],n[0]),r:ni}),si=new Map,xr=n=>(t,...e)=>{let r=e.length,o,i,s=[],l=[],h,d=0,g=!1;for(;d<r;){for(h=t[d];d<r&&(i=e[d],(o=ea(i))!==void 0);)h+=o+t[++d],g=!0;d!==r&&l.push(i),s.push(h),d++}if(d===r&&s.push(t[r]),g){let v=s.join("$$lit$$");(t=si.get(v))===void 0&&(s.raw=s,si.set(v,t=s)),e=l}return n(t,...e)},J=xr(c),Pn=xr(Gr),Nn=xr(Yr);var li=m`
  :host {
    --badge-padding: var(--hmwc-spacing-2x-small) var(--hmwc-spacing-x-small);
    --badge-background: var(--hmwc-panel-background-color);
    --badge-background-hover: var(--badge-background);
    --badge-shadow: var(--hmwc-shadow-medium);
    --badge-border-radius: var(--hmwc-border-radius-medium);
    --badge-border-color: var(--hmwc-panel-border-color);
    --badge-border-width: var(--hmwc-panel-border-width);
    --badge-letter-spacing: var(--hmwc-letter-spacing-dense);
    --badge-label-size: calc(1.05 * var(--hmwc-font-size-x-small));
    --badge-label-size-hover: var(--badge-label-size);
    --badge-label-color: var(--hmwc-color-neutral-750);
    --badge-label-color-hover: var(--badge-label-color);
    --badge-label-weight: var(--hmwc-font-weight-bold);
    --badge-label-weight-hover: var(--badge-label-weight);
    --badge-label-family: var(--hmwc-font-sans);
    --badge-icon-size: var(--hmwc-label-size);
    --badge-icon-color: var(--hmwc-label-color);
    --badge-animation: none;
    --badge-pulse-speed: 1.5s;
    display: contents;
  }

  .badge {
    width: fit-content;
    height: var(--badge-label-size);
    box-sizing: content-box;
    padding: var(--badge-padding);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: var(--badge-border-color) solid var(--badge-border-width);
    border-radius: var(--badge-border-radius);
    box-shadow: var(--badge-shadow);
    background: var(--badge-background);
    white-space: nowrap;
    cursor: inherit;
    user-select: none;
    animation: var(--badge-animation);
    line-height: var(--badge-label-size);
    & .badge__label {
      display: inline;
      color: var(--badge-label-color);
      font-family: var(--badge-label-family);
      font-size: var(--badge-label-size);
      font-weight: var(--badge-label-weight);
      letter-spacing: var(--badge-letter-spacing);
    }

    & .badge__icon {
      display: none;
      font-size: var(--badge-icon-size);
      --icon-color: var(--badge-label-color);
    }

    &.icon {
      --badge-padding: var(--hmwc-spacing-2x-small) var(--hmwc-spacing-3x-small);
      & .badge__icon {
        display: flex;
        aspect-ratio: 1;
      }
    }

    &.pill {
      --badge-border-radius: var(--hmwc-border-radius-pill);
    }

    &.pulse {
      --badge-animation: pulse var(--badge-pulse-speed) infinite;
    }

    &.selectable {
      cursor: pointer;
    }

    &.sm {
      --badge-label-size: max(11px, 0.66em);
      --badge-padding: var(--hmwc-spacing-2x-small) calc(0.85 * var(--hmwc-spacing-x-small));
      --badge-border-radius: var(--hmwc-border-radius-medium);
    }

    &.md {
      --badge-label-size: calc(1.05 * var(--hmwc-font-size-x-small));
      --badge-padding: calc(0.6 * var(--hmwc-spacing-x-small)) var(--hmwc-spacing-x-small);
      --badge-border-radius: var(--hmwc-border-radius-medium);
    }

    &.lg {
      --badge-label-size: max(14px, 0.86em);
      --badge-padding: calc(0.76 * var(--hmwc-spacing-x-small)) calc(0.88 * var(--hmwc-spacing-small));
      --badge-border-radius: calc(1.1 * var(--hmwc-border-radius-medium));
    }

    &.primary {
      --badge-label-color: var(--hmwc-color-primary-50);
      --badge-background: var(--hmwc-color-primary-500);
      --badge-border-color: var(--hmwc-color-primary-100);
    }

    &.success {
      --badge-label-color: var(--hmwc-color-success-50);
      --badge-background: var(--hmwc-color-success-500);
      --badge-border-color: var(--hmwc-color-success-100);
    }

    &.neutral {
      --badge-label-color: var(--hmwc-color-success-50);
      --badge-background: var(--hmwc-color-neutral-500);
      --badge-border-color: var(--hmwc-color-neutral-100);
    }

    &.warning {
      --badge-label-color: var(--hmwc-color-warning-50);
      --badge-background: var(--hmwc-color-warning-500);
      --badge-border-color: var(--hmwc-color-warning-100);
    }

    &.danger {
      --badge-label-color: var(--hmwc-color-danger-50);
      --badge-background: var(--hmwc-color-danger-500);
      --badge-border-color: var(--hmwc-color-danger-100);
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--badge-background);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;var It=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},q=class extends u{connectedCallback(){super.connectedCallback()}render(){let t=f({badge:!0,icon:!!this.icon||this.controllers.slot.test("icon"),pill:!!this.pill,pulse:!!this.pulse,selectable:!!this.selectable,sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
      <div part="base" class=${t} role="status">
        <slot part="label" class="badge__label">${this.label?this.label:""}</slot>
        <slot name="icon" part="icon" class="badge__icon">${this.icon?c`<hmwc-icon src=${this.icon}></hmwc-icon>`:""}</slot>
      </div>
    `}};q.styles=li;q.dependencies=[_];q.slots=["label","icon"];It([a({type:String})],q.prototype,"label",void 0);It([a({type:String,reflect:!0})],q.prototype,"icon",void 0);It([a({type:Boolean,reflect:!0})],q.prototype,"pill",void 0);It([a({type:Boolean,reflect:!0})],q.prototype,"selectable",void 0);It([a({type:Boolean,reflect:!0})],q.prototype,"pulse",void 0);It([a({type:Boolean,reflect:!0})],q.prototype,"sm",void 0);It([a({type:Boolean,reflect:!0})],q.prototype,"md",void 0);It([a({type:Boolean,reflect:!0})],q.prototype,"lg",void 0);It([a({type:Boolean,reflect:!0})],q.prototype,"primary",void 0);It([a({type:Boolean,reflect:!0})],q.prototype,"success",void 0);It([a({type:Boolean,reflect:!0})],q.prototype,"neutral",void 0);It([a({type:Boolean,reflect:!0})],q.prototype,"warning",void 0);It([a({type:Boolean,reflect:!0})],q.prototype,"danger",void 0);var ci=m`
  :host {
    --spinner-color: currentColor;
    --spinner-size: 1em;
    --spinner-speed: 2s;
    --spinner-track-width: 0.15em;

    display: contents;
  }

  .spinner {
    width: var(--spinner-size);
    height: var(--spinner-size);
    display: inline-flex;
    flex: 1 1 auto;
    font-size: var(--spinner-size);
    & .spinner__track,
    & .spinner__indicator {
      fill: none;
      stroke-width: var(--spinner-track-width);
      r: calc(0.5em - var(--spinner-track-width) / 2);
      cx: 0.5em;
      cy: 0.5em;

      &.spinner__track {
        stroke: rgb(128 128 128 / 25%);
        transform-origin: 0% 0%;
      }

      &.spinner__indicator {
        stroke: var(--spinner-color);
        stroke-linecap: round;
        stroke-dasharray: 150% 75%;
        animation: spin var(--spinner-speed) linear infinite;
        animation-play-state: paused;
        transform-origin: 50% 50%;
      }
    }

    &.active {
      & .spinner__indicator {
        animation-play-state: running;
      }
    }

    &.speed-slower {
      --spinner-speed: 8s;
    }
    &.speed-slow {
      --spinner-speed: 4s;
    }
    &.speed-fast {
      --spinner-speed: 1.5s;
    }
    &.speed-faster {
      --spinner-speed: 1s;
    }

    &.sm {
      --spinner-size: 1rem;
    }
    &.md {
      --spinner-size: 1.5rem;
    }
    &.lg {
      --spinner-size: 2.25rem;
    }

    &.primary {
      --spinner-color: var(--hmwc-color-primary-600);
    }

    &.success {
      --spinner-color: var(--hmwc-color-success-600);
    }

    &.neutral {
      --spinner-color: var(--hmwc-color-neutral-600);
    }

    &.warning {
      --spinner-color: var(--hmwc-color-warning-600);
    }

    &.danger {
      --spinner-color: var(--hmwc-color-danger-600);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    /*
     * Disable the rotating keyframe animation for motion-sensitive
     * users. The loading state stays perceivable via a gentle
     * opacity pulse instead of a spinning transform.
     */
    @keyframes spin {
      0%,
      100% {
        transform: none;
        stroke-dasharray: 1.375em, 1.375em;
        opacity: 1;
      }
      50% {
        transform: none;
        stroke-dasharray: 1.375em, 1.375em;
        opacity: 0.35;
      }
    }
  }
`;var te=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},X=class extends u{constructor(){super(...arguments),this.active=!0,this.label="Loading"}start(){this.active||(this.active=!0)}stop(){this.active&&(this.active=!1)}toggle(){this.active=!this.active}render(){let t=f({spinner:!0,active:!!this.active,"speed-slower":this.speed==="slower","speed-slow":this.speed==="slow","speed-fast":this.speed==="fast","speed-faster":this.speed==="faster",sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
      <svg part="base" class=${t} role="progressbar" aria-label=${this.label}>
        <circle part="track" class="spinner__track"></circle>
        <circle part="indicator" class="spinner__indicator"></circle>
      </svg>
    `}};X.styles=ci;te([a({type:Boolean,reflect:!0})],X.prototype,"active",void 0);te([a({type:Boolean,reflect:!0})],X.prototype,"primary",void 0);te([a({type:Boolean,reflect:!0})],X.prototype,"success",void 0);te([a({type:Boolean,reflect:!0})],X.prototype,"neutral",void 0);te([a({type:Boolean,reflect:!0})],X.prototype,"warning",void 0);te([a({type:Boolean,reflect:!0})],X.prototype,"danger",void 0);te([a({type:Boolean,reflect:!0})],X.prototype,"sm",void 0);te([a({type:Boolean,reflect:!0})],X.prototype,"md",void 0);te([a({type:Boolean,reflect:!0})],X.prototype,"lg",void 0);te([a({type:String,reflect:!0})],X.prototype,"speed",void 0);te([a({type:String})],X.prototype,"label",void 0);X.define("hmwc-spinner",X);var hi=m`
  :host {
    --button-color: var(--hmwc-color-neutral-700);
    --button-background: var(--hmwc-input-background-color);
    --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-neutral-300);
    --button-radius: var(--hmwc-input-border-radius-medium);
    --button-padding: none;
    --button-outline: none;
    --button-shadow: var(--hmwc-shadow-x-small);
    display: inline-flex;
    position: relative;
    width: auto;
  }

  :host([fluid]) {
    width: 100%;
  }

  .button {
    --icon-color: var(--button-color);

    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: auto;
    padding: var(--button-padding) !important;
    vertical-align: middle;
    color: var(--button-color);
    background: var(--button-background);
    box-sizing: border-box;
    border: var(--button-border);
    border-radius: var(--button-radius);
    outline: var(--button-outline);
    font-family: var(--hmwc-input-font-family);
    font-weight: var(--hmwc-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
    box-shadow: var(--button-shadow);
    transition: var(--hmwc-transition-x-fast) background-color, var(--hmwc-transition-x-fast) color, var(--hmwc-transition-x-fast) border,
      var(--hmwc-transition-x-fast) box-shadow;

    .button__prefix,
    .button__suffix {
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      line-height: 0;

      img {
        width: 1.25rem;
      }

      hmwc-icon {
        --icon-size: var(--button-prefix-icon-size, 1em);
        display: inline-flex;
        align-items: center;
      }
    }

    .button__label {
      display: flex;
      height: fit-content;
      line-height: 1;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .button__icon {
      color: var(--button-color);
      font-size: inherit;
    }

    .button__badge {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      translate: 50% -50%;
      pointer-events: none;
    }

    hmwc-spinner::part(base) {
      --spinner-color: currentColor;
      position: absolute;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }

    &.primary {
      --button-color: var(--hmwc-color-primary-50);
      --button-background: var(--hmwc-color-primary-600);
      --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-primary-600);

      &.outline {
        --button-color: var(--hmwc-color-primary-600);
      }

      &.basic {
        --button-color: var(--hmwc-color-primary-300);
      }

      &.icon {
        --button-color: var(--hmwc-color-primary-100);

        &.basic {
          --button-color: var(--hmwc-color-primary-500);

          --button-background: transparent;
        }
      }

      &.disabled {
        --button-background: var(--hmwc-color-primary-300);
        &:not(.basic) {
          --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-primary-400);
        }
      }
    }

    &.success {
      --button-color: var(--hmwc-color-success-50);
      --button-background: var(--hmwc-color-success-600);
      --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-success-600);

      &.outline {
        --button-color: var(--hmwc-color-success-600);
      }
      &.icon.success {
        --button-color: var(--hmwc-color-success-500);
        &.basic {
          --button-background: transparent;
        }
      }
    }

    &.neutral {
      --button-color: var(--hmwc-color-neutral-50);
      --button-background: var(--hmwc-color-neutral-600);
      --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-neutral-600);

      &.outline {
        --button-color: var(--hmwc-color-neutral-600);
      }

      &.icon.basic {
        --button-color: var(--hmwc-color-neutral-500);
        --button-background: transparent;
      }
    }

    &.warning {
      --button-color: var(--hmwc-color-warning-900);
      --button-background: var(--hmwc-color-warning-400);
      --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-warning-400);

      &.outline {
        --button-color: var(--hmwc-color-warning-600);
      }

      &.icon.warning {
        --button-color: var(--hmwc-color-warning-500);
        &.basic {
          --button-background: transparent;
        }
      }
    }

    &.danger {
      --button-color: var(--hmwc-color-danger-50);
      --button-background: var(--hmwc-color-danger-600);
      --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-danger-600);

      &.outline {
        --button-color: var(--hmwc-color-danger-600);
      }

      &.icon.danger {
        --button-color: var(--hmwc-color-danger-500);
        &.basic {
          --button-background: transparent;
        }
      }
    }

    &.basic {
      --button-color: var(--hmwc-color-neutral-600);
      --button-background: transparent;
      --button-border: transparent;
      --button-shadow: none;
      min-height: 0 !important;
    }

    &.invert {
      --button-color: var(--hmwc-color-neutral-50);
      --button-background: var(--hmwc-color-neutral-950);
      --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-neutral-600);
    }

    &.small {
      font-size: var(--hmwc-button-font-size-small);
      --button-radius: calc(1.25 * var(--hmwc-input-border-radius-small));
      --button-prefix-icon-size: var(--hmwc-font-size-small);
      line-height: calc(var(--hmwc-input-height-small) - var(--hmwc-input-border-width) * 2);

      &:not(.basic):not(.icon) {
        --button-padding: 0 calc(1.1 * var(--hmwc-spacing-small));
        height: var(--hmwc-input-height-small);
        min-height: var(--hmwc-input-height-small);

        &.circle {
          --button-padding: 0;
        }
      }

      &.circle {
        width: var(--hmwc-input-height-small);
      }

      &.icon {
        font-size: var(--hmwc-font-size-small);
      }

      &.pill {
        --button-radius: var(--hmwc-border-radius-pill);
      }

      &.prefix {
        &.basic {
          .button__prefix {
            padding-inline-end: var(--hmwc-spacing-x-small);
          }
        }
        .button__prefix {
          padding-inline-end: var(--hmwc-spacing-x-small);
        }
      }

      &.suffix {
        .button__suffix {
          padding-inline-start: var(--hmwc-spacing-x-small);
        }
      }
    }

    &.medium {
      min-height: var(--hmwc-input-height-medium);
      font-size: calc(0.95 * var(--hmwc-button-font-size-medium));
      --button-radius: calc(1.25 * var(--hmwc-input-border-radius-large));
      --button-prefix-icon-size: calc(0.95 * var(--hmwc-font-size-medium));
      line-height: calc(0.95 * var(--hmwc-input-height-medium) - var(--hmwc-input-border-width) * 2);

      &:not(.basic):not(.icon) {
        --button-padding: 0 var(--hmwc-spacing-medium);
      }

      &.circle {
        width: var(--hmwc-input-height-medium);
      }

      &.icon {
        font-size: var(--hmwc-font-size-large);
      }

      &.pill {
        --button-radius: var(--hmwc-border-radius-pill);
      }

      &.prefix {
        .button__prefix {
          padding-inline-end: var(--hmwc-spacing-x-small);
        }
      }

      &.suffix {
        .button__suffix {
          padding-inline-start: var(--hmwc-spacing-x-small);
        }
      }
    }

    &.large {
      min-height: var(--hmwc-input-height-large);
      font-size: var(--hmwc-button-font-size-large);
      --button-radius: var(--hmwc-input-border-radius-large);
      --button-prefix-icon-size: var(--hmwc-font-size-large);
      line-height: calc(var(--hmwc-input-height-large) - var(--hmwc-input-border-width) * 3);

      &:not(.basic):not(.icon) {
        --button-padding: 0 var(--hmwc-spacing-large);
      }

      &.circle {
        width: var(--hmwc-input-height-large);
      }

      &.icon {
        font-size: calc(1.08 * var(--hmwc-font-size-x-large));
      }

      &.pill {
        --button-radius: var(--hmwc-border-radius-pill);
      }

      &.prefix {
        .button__prefix {
          padding-inline-end: var(--hmwc-spacing-small);
        }
      }

      &.suffix {
        .button__suffix {
          padding-inline-start: var(--hmwc-spacing-small);
        }
      }
    }

    &.outline {
      --button-color: var(--hmwc-color-neutral-700);
      --button-background: transparent;
    }

    &.circle {
      --button-radius: 50%;
      aspect-ratio: 1;

      .button__prefix,
      .button__suffix {
        visibility: hidden;
      }
    }

    &.icon {
      .button__label,
      .button__prefix,
      .button__suffix {
        visibility: hidden;
      }

      .button__badge {
        translate: 50% -50%;
        top: none;
      }

      hmwc-icon {
        &::part(base) {
          -webkit-text-stroke: var(--hmwc-button-icon-stroke);
        }
      }
      &.basic {
        --button-background: transparent !important;
        --button-shadow: none !important;

        min-height: 0;

        &:hover {
          transition: var(--hmwc-transition-fast) transform ease;
          hmwc-icon {
            transform: scale(1.05);
          }
        }
      }
    }

    &.loading {
      cursor: wait;

      hmwc-spinner {
        --spinner-color: var(--button-color);
      }

      .button__label,
      .button__prefix,
      .button__suffix .button__icon {
        visibility: hidden;
      }
    }

    &.fluid {
      width: 100%;
      max-width: 100%;
      flex-grow: 1;
    }

    &.disabled {
      opacity: 0.6;
      cursor: not-allowed;
      --button-background: var(--hmwc-color-neutral-100);
      &.basic {
        --button-background: transparent !important;
      }
      * {
        pointer-events: none;
      }
    }

    /* &:not(.disabled):not(.basic):focus {
      --button-outline: 1px solid var(--hmwc-color-primary-600);
    } */

    &:not(.disabled):focus-visible {
      outline: var(--hmwc-focus-ring);
      outline-offset: var(--hmwc-focus-ring-offset);
    }

    &:hover:not(.disabled) {
      --button-color: var(--hmwc-color-neutral-0);
      --button-background: var(--hmwc-color-primary-500);
      --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-primary-500);
      --button-shadow: 0 2px 8px hsl(from var(--hmwc-color-primary-500) h s l / 0.25);

      &.primary {
        --button-color: var(--hmwc-color-neutral-0);
        --button-background: var(--hmwc-color-primary-500);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-primary-500);
        --button-shadow: 0 2px 8px hsl(from var(--hmwc-color-primary-500) h s l / 0.3);

        &.outline {
          --button-color: var(--hmwc-color-neutral-0);
        }
        &.basic.icon {
          --icon-color: var(--hmwc-color-primary-400);
        }
      }

      &.success {
        --button-color: var(--hmwc-color-neutral-0);
        --button-background: var(--hmwc-color-success-500);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-success-500);
        --button-shadow: 0 2px 8px hsl(from var(--hmwc-color-success-500) h s l / 0.3);

        &.outline {
          --button-color: var(--hmwc-color-neutral-0);
        }

        &.basic.icon {
          --icon-color: var(--hmwc-color-success-400);
        }
      }

      &.neutral {
        --button-color: var(--hmwc-color-neutral-0);
        --button-background: var(--hmwc-color-neutral-500);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-neutral-500);
        --button-shadow: 0 2px 8px hsl(from var(--hmwc-color-neutral-500) h s l / 0.25);

        &.outline {
          --button-color: var(--hmwc-color-neutral-0);
        }

        &.basic.icon {
          --icon-color: var(--hmwc-color-neutral-50);
        }
      }

      &.warning {
        --button-color: var(--hmwc-color-warning-900);
        --button-background: var(--hmwc-color-warning-300);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-warning-300);
        --button-shadow: 0 2px 8px hsl(from var(--hmwc-color-warning-400) h s l / 0.3);

        &.outline {
          --button-color: var(--hmwc-color-warning-900);
        }

        &.basic.icon {
          --icon-color: var(--hmwc-color-warning-400);
        }
      }

      &.danger {
        --button-color: var(--hmwc-color-neutral-0);
        --button-background: var(--hmwc-color-danger-500);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-danger-500);
        --button-shadow: 0 2px 8px hsl(from var(--hmwc-color-danger-500) h s l / 0.3);

        &.outline {
          --button-color: var(--hmwc-color-neutral-0);
        }

        &.basic.icon {
          --icon-color: var(--hmwc-color-danger-400);
        }
      }

      &.basic {
        --button-color: var(--hmwc-color-primary-500);
        --button-background: transparent;
        --button-border: none;
        --button-shadow: none;
      }

      &.invert {
        --button-color: var(--hmwc-color-neutral-800);
        --button-background: var(--hmwc-color-neutral-100);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-neutral-500);
        --button-shadow: 0 2px 8px hsl(from var(--hmwc-color-neutral-500) h s l / 0.2);
      }
    }

    &:active:not(.disabled) {
      --button-color: var(--hmwc-color-primary-700);
      --button-background: var(--hmwc-color-primary-100);
      --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-primary-400);
      --button-shadow: var(--hmwc-shadow-x-small);

      &.primary {
        --button-color: var(--hmwc-color-primary-700);
        --button-background: var(--hmwc-color-primary-100);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-primary-400);

        &.outline {
          --button-background: var(--hmwc-color-primary-700);
          --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-primary-700);
        }
      }

      &.success {
        --button-color: var(--hmwc-color-success-700);
        --button-background: var(--hmwc-color-success-100);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-success-400);

        &.outline {
          --button-background: var(--hmwc-color-success-700);
          --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-success-700);
        }
      }

      &.neutral {
        --button-color: var(--hmwc-color-neutral-700);
        --button-background: var(--hmwc-color-neutral-100);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-neutral-400);

        &.outline {
          --button-background: var(--hmwc-color-neutral-700);
          --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-neutral-700);
        }
      }

      &.warning {
        --button-color: var(--hmwc-color-warning-900);
        --button-background: var(--hmwc-color-warning-200);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-warning-400);

        &.outline {
          --button-background: var(--hmwc-color-warning-600);
          --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-warning-600);
        }
      }

      &.danger {
        --button-color: var(--hmwc-color-danger-700);
        --button-background: var(--hmwc-color-danger-100);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-danger-400);

        &.outline {
          --button-background: var(--hmwc-color-danger-700);
          --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-danger-700);
        }
      }

      &.basic {
        --button-color: var(--hmwc-color-primary-600);
        --button-background: transparent;
        --button-border: none;
      }

      &.invert {
        --button-color: var(--hmwc-color-neutral-700);
        --button-background: var(--hmwc-color-neutral-100);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-neutral-400);
      }
    }
  }
`;var B=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},w=class n extends u{constructor(){super(...arguments),this.target="_blank",this._autoDisabledLastValue=null}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}isLink(){return!!this.href}findFormContainer(){return this.closest("[form]")}handleClick(){if(this.disabled){if(this.submit||this.action==="submit"){let t=this.findFormContainer();t&&t.controllers.form?.validate()}return}if(this.emit("hmwc-click"),this.action){let t=this.findFormContainer();if(t?.controllers.form){t.controllers.form.perform(this.action,this);return}this.action!=="submit"&&this.action!=="reset"&&n._warnNoContainer(this.action)}}static _warnNoContainer(t){n._warnedActions.has(t)||(n._warnedActions.add(t),console.warn(`[hmwc-button] action="${t}" but no surrounding <hmwc-* form> container or native <form> found.`))}refreshAutoDisable(){if(!this.action)return;let e=this.findFormContainer()?.controllers.form;if(!e||typeof e.canPerform!="function")return;let r=!e.canPerform(this.action);if(this._autoDisabledLastValue===null){if(r&&!this.disabled)this.disabled=!0;else if(!r&&this.disabled){this._autoDisabledLastValue=!1;return}this._autoDisabledLastValue=!!this.disabled;return}!!this.disabled===this._autoDisabledLastValue&&r!==this._autoDisabledLastValue&&(this.disabled=r,this._autoDisabledLastValue=r)}handleActionChange(){this._autoDisabledLastValue!==null&&!!this.disabled===this._autoDisabledLastValue&&(this.disabled=!1),this._autoDisabledLastValue=null,this.refreshAutoDisable()}handleFocus(){this.emit("hmwc-focus")}handleBlur(){this.emit("hmwc-blur")}handleMouseIn(){this.labelOnHover&&(this.label=this.labelOnHover)}handleMouseOut(){this.labelOnHover&&(this.label=this._label)}connectedCallback(){super.connectedCallback(),this._label=this.label||this.textContent||"",!this.sm&&!this.md&&!this.lg&&(this.md=!0)}render(){let t=this.isLink()?Be`a`:Be`button`,e=f({button:!0,icon:!!this.icon,prefix:!!this.prefix||!!this.img,suffix:!!this.suffix,invert:!!this.invert,basic:!!this.basic,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger,small:!!this.sm,medium:!!this.md,large:!!this.lg,loading:!!this.loading,circle:!!this.circle,pill:!!this.pill,outline:!!this.outline,disabled:!!this.disabled,fluid:!!this.fluid}),r=J`
      <${t}
        part='base'
        class='${e}'
        type=${this.submit||this.action==="submit"?"submit":this.reset||this.action==="reset"?"reset":"button"}
        title=${y(this.title||void 0)}
        target=${y(this.isLink()?this.target:void 0)}
        download=${y(this.isLink()?this.download:void 0)}
        href=${y(this.isLink()?this.href:void 0)}
        value=${y(this.isLink()?void 0:this.value)}
        role=${y(this.isLink()?void 0:"button")}
        aria-disabled=${y(this.disabled)}
        aria-label=${y(this.label||void 0)}
        tabindex=${y(this.disabled)?"-1":"0"}
        @click=${this.handleClick}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @mouseenter=${this.handleMouseIn}
        @mouseout=${this.handleMouseOut}
      >

        <slot name="prefix" part="prefix" class="button__prefix">
          ${this.prefix?J`<hmwc-icon src=${this.prefix}></hmwc-icon>`:this.img?J`<img src=${this.img} alt="btn-img" />`:""}
        </slot>

        <slot name='icon' class='button__icon'>
          ${this.icon&&!this.loading?J`<hmwc-icon part="icon" src=${this.icon} ?flex=${this.basic}></hmwc-icon>`:""}
        </slot>

        ${this.icon?"":J`<slot name="label" part="label" class="button__label">${this.label}</slot>`}

        <slot name="suffix" part="suffix" class="button__suffix">
          ${this.suffix?J`<hmwc-icon src=${this.suffix}></hmwc-icon>`:""}
        </slot>

        <slot name="badge" part="badge" class="button__badge"></slot>

        ${this.loading?J`<hmwc-spinner sm part="spinner"></hmwc-spinner>`:""}

      </${t}>
    `;return this.disabled&&this.disabledReason?J` <hmwc-tooltip label=${this.disabledReason} placement="top"> ${r} </hmwc-tooltip> `:r}};w.styles=hi;w.dependencies=[_,X,q];w.slots=["prefix"];w._warnedActions=new Set;B([a({type:String})],w.prototype,"label",void 0);B([a({type:String})],w.prototype,"labelOnHover",void 0);B([a({type:String})],w.prototype,"icon",void 0);B([a({type:String})],w.prototype,"prefix",void 0);B([a({type:String})],w.prototype,"suffix",void 0);B([a({type:String})],w.prototype,"img",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"primary",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"success",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"neutral",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"warning",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"danger",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"invert",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"basic",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"sm",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"md",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"lg",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"outline",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"pill",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"circle",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"fluid",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"disabled",void 0);B([a({type:String,attribute:"disabled-reason"})],w.prototype,"disabledReason",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"loading",void 0);B([a({type:String})],w.prototype,"value",void 0);B([a({type:String,reflect:!0})],w.prototype,"action",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"submit",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"begin",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"increment",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"decrement",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"templateAdd",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"templateRemove",void 0);B([a({type:Boolean,reflect:!0})],w.prototype,"reset",void 0);B([a({type:String,reflect:!1})],w.prototype,"href",void 0);B([a({type:String})],w.prototype,"target",void 0);B([a({type:String})],w.prototype,"download",void 0);B([T(".button")],w.prototype,"button",void 0);B([p("action")],w.prototype,"handleActionChange",null);var di=m`
  :host {
    --accordion-group-spacing: none;
    --accordion-group-background: var(--hmwc-panel-background-color);
    --accordion-group-border-color: var(--hmwc-panel-border-color);
    --accordion-group-border-radius: var(--hmwc-border-radius-x-large);
    --accordion-group-font-color: var(--hmwc-color-neutral-750);
    --accordion-group-font-size: var(--hmwc-font-size-medium);
    --accordion-group-font-weight: var(--hmwc-font-weight-normal);
    --accordion-group-icon-color: var(--hmwc-color-neutral-700);
    --accordion-group-icon-size: var(--accordion-font-size);
    --accordion-group-trigger-size: 0.75rem;
    --accordion-group-trigger-color: var(--hmwc-color-neutral-700);
    --accordion-group-summary-padding: var(--hmwc-spacing-medium) var(--hmwc-spacing-large) var(--hmwc-spacing-small);

    display: block;
  }

  .accordion-group {
    display: flex;
    flex-direction: column;
    gap: var(--accordion-group-spacing);
    border: var(--hmwc-panel-border-width) solid var(--accordion-group-border-color);
    border-radius: var(--accordion-group-border-radius);
    align-items: var(--container-alignment);
    justify-content: var(--container-justification);
    padding: var(--container-padding);
    box-shadow: var(--container-shadow);
    background: var(--container-background);
    background-size: cover;
    aspect-ratio: var(--container-aspect-ratio);
  }

  /* Preserve border-radius clipping on first/last children
     without using overflow:hidden on the group (which clips
     dropdown menus that extend beyond the accordion).
     We set CSS custom properties so they propagate through the
     shadow DOM boundary to the inner .accordion element. */
  .accordion-group ::slotted(:first-child) {
    --accordion-border-top-left-radius: calc(var(--accordion-group-border-radius) - var(--hmwc-panel-border-width, 1px));
    --accordion-border-top-right-radius: calc(var(--accordion-group-border-radius) - var(--hmwc-panel-border-width, 1px));
  }

  .accordion-group ::slotted(:last-child) {
    --accordion-border-bottom-left-radius: calc(var(--accordion-group-border-radius) - var(--hmwc-panel-border-width, 1px));
    --accordion-border-bottom-right-radius: calc(var(--accordion-group-border-radius) - var(--hmwc-panel-border-width, 1px));
  }
`;var We=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},mt=class extends P{constructor(){super(...arguments),this.index=-1,this.accordions=[],this.listeners=new Map}showAll(){this.accordions.forEach(t=>t.show())}hideAll(){this.accordions.forEach(t=>t.hide())}getAccordions(){return this.controllers.slot.get().filter(t=>t instanceof K)}handleExpand(t){this.index=t,this.multiple||this.accordions.forEach((e,r)=>{r!==t&&e.hide()})}handleCollapse(t){this.index===t&&(this.index=-1)}indexUpdate(){this.emit("hmwc-change",{detail:{index:this.index,accordion:this.accordions[this.index]}})}accordionsUpdate(){let t={"--accordion-background":"var(--accordion-group-background)","--accordion-font-color":"var(--accordion-group-font-color)","--accordion-font-size":"var(--accordion-group-font-size)","--accordion-font-weight":"var(--accordion-group-font-weight)","--accordion-icon-color":"var(--accordion-group-icon-color)","--accordion-icon-size":"var(--accordion-group-icon-size)","--accordion-trigger-size":"var(--accordion-group-trigger-size)","--accordion-trigger-color":"var(--accordion-group-trigger-color)","--accordion-summary-padding":"var(--accordion-group-summary-padding)"},e=Object.keys(t).map(r=>`${r}: ${t[r]}`).join("; ");this.listeners.forEach((r,o)=>{o.removeEventListener("hmwc-expand",r.expand),o.removeEventListener("hmwc-collapse",r.collapse)}),this.listeners.clear(),this.accordions.forEach((r,o)=>{r.setAttribute("style",e);let i=()=>this.handleExpand(o),s=()=>this.handleCollapse(o);this.listeners.set(r,{expand:i,collapse:s}),r.addEventListener("hmwc-expand",i),r.addEventListener("hmwc-collapse",s)})}firstUpdated(){this.accordions=this.getAccordions()}render(){let t=f({"accordion-group":!0});return c`
      <div part="base" class=${t}>
        <slot></slot>
      </div>
    `}};mt.styles=di;mt.dependencies=[w];mt.slots=["[default]"];We([b()],mt.prototype,"index",void 0);We([b()],mt.prototype,"accordions",void 0);We([a({type:Boolean,reflect:!0})],mt.prototype,"multiple",void 0);We([p("index",{waitUntilFirstUpdate:!0})],mt.prototype,"indexUpdate",null);We([p("accordions")],mt.prototype,"accordionsUpdate",null);mt.define("hmwc-accordion-group",mt);K.define("hmwc-accordion",K);customElements.get("hmwc-button")||w.define("hmwc-button",w);var pi=m`
  @keyframes alert-enter {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes alert-enter-stack {
    from {
      opacity: 0;
      transform: translateX(16px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes alert-exit {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  @keyframes alert-exit-stack {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(16px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    @keyframes alert-enter {
      from,
      to {
        opacity: 1;
        transform: none;
      }
    }
    @keyframes alert-enter-stack {
      from,
      to {
        opacity: 1;
        transform: none;
      }
    }
    @keyframes alert-exit {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
    @keyframes alert-exit-stack {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }

  :host {
    --alert-padding: var(--hmwc-spacing-large);
    --alert-spacing: var(--hmwc-spacing-large);
    --alert-border-radius: calc(1.5 * var(--hmwc-border-radius-medium));
    --alert-border-color: var(--hmwc-color-primary-600);
    --alert-border-width: calc(var(--hmwc-panel-border-width) * 3);
    --alert-title-size: var(--hmwc-font-size-medium);
    --alert-title-color: var(--hmwc-color-neutral-700);
    --alert-title-weight: var(--hmwc-font-weight-bold);
    --alert-label-size: var(--hmwc-font-size-medium);
    --alert-label-color: var(--hmwc-color-neutral-700);
    --alert-label-weight: var(--hmwc-font-weight-normal);
    --alert-icon-size: var(--hmwc-font-size-large);
    --alert-icon-color: var(--hmwc-color-neutral-700);
    --alert-background: var(--hmwc-panel-background-color);

    --alert-font-color: var(--hmwc-color-neutral-700);

    display: contents;
  }

  :host(:not([active])) {
    display: none;
  }

  :host(:not([stack])) {
    width: 100%;
  }

  .alert {
    position: relative;
    display: flex;
    margin: inherit;
    line-height: var(--hmwc-line-height-normal);
    color: var(--hmwc-color-neutral-700);
    background-color: var(--alert-background);
    border: solid var(--hmwc-panel-border-width) var(--hmwc-panel-border-color);
    border-top-width: var(--alert-border-width);
    border-top-color: var(--alert-border-color);
    border-radius: var(--alert-border-radius);
    font-family: var(--hmwc-font-sans);
    font-size: var(--hmwc-font-size-small);
    font-weight: var(--hmwc-font-weight-normal);
    overflow: auto;

    /* Entrance animation — inline alerts slide down gently */
    animation: alert-enter 250ms cubic-bezier(0.2, 0, 0, 1) both;

    /* Notification/stack alerts slide in from the right */
    &.stack {
      animation: alert-enter-stack 300ms cubic-bezier(0.16, 1, 0.3, 1) both;
    }

    /* Exit animation */
    &.closing {
      animation: alert-exit 250ms cubic-bezier(0.3, 0, 1, 1) both;
    }

    &.closing.stack {
      animation: alert-exit-stack 250ms cubic-bezier(0.3, 0, 1, 1) both;
    }

    .alert__icon {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      padding-inline-start: var(--alert-spacing);
      font-size: var(--hmwc-font-size-large);
      color: var(--alert-font-color);
    }

    .alert__body {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      padding: var(--alert-padding);
      padding-left: calc(1.15 * var(--alert-padding));
      overflow: hidden;
      gap: var(--hmwc-spacing-3x-small);
      width: auto;
      font-size: var(--hmwc-font-size-medium);

      & .alert__title {
        display: flex;
        font-size: var(--alert-title-size);
        color: var(--alert-title-color);
        font-weight: var(--alert-title-weight);
      }

      & .alert__label {
        display: flex;
        font-size: var(--alert-label-size);
        color: var(--alert-label-color);
        font-weight: var(--alert-label-weight);
      }
    }

    .alert__dismiss {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      font-size: var(--hmwc-font-size-medium);
      padding-inline-end: var(--hmwc-spacing-medium);
      color: var(--hmwc-color-neutral-700);
    }

    &[hidden] {
      display: none;
    }

    &.primary,
    &:not(.success):not(.neutral):not(.warning):not(.danger) {
      --alert-font-color: var(--hmwc-color-primary-600);
      --alert-border-color: var(--hmwc-color-primary-600);
    }

    &.success {
      --alert-font-color: var(--hmwc-color-success-600);
      --alert-border-color: var(--hmwc-color-success-600);
    }

    &.neutral {
      --alert-font-color: var(--hmwc-color-neutral-600);
      --alert-border-color: var(--hmwc-color-neutral-600);
    }

    &.warning {
      --alert-font-color: var(--hmwc-color-warning-600);
      --alert-border-color: var(--hmwc-color-warning-600);
    }

    &.danger {
      --alert-font-color: var(--hmwc-color-danger-600);
      --alert-border-color: var(--hmwc-color-danger-600);
    }

    &:not(.stack) {
      width: 100%;
    }
  }
`,mi=`
  display: flex;
  flex-direction: column;
  gap: var(--hmwc-spacing-medium, 1rem);
  padding: var(--hmwc-spacing-small);
  position: fixed;
  top: var(--hmwc-navbar-width);
  inset-inline-end: 0;
  z-index: 950;
  width: 28rem;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
`;var kr={info:{variant:"primary",icon:"info-circle",dismissible:!0,duration:5e3},success:{variant:"success",icon:"check2-circle",dismissible:!0,duration:5e3},warning:{variant:"warning",icon:"exclamation-triangle",dismissible:!0,duration:8e3},error:{variant:"danger",icon:"exclamation-octagon",dismissible:!0,duration:1/0}};var at=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},ra=250,H=class extends u{constructor(){super(...arguments),this.closing=!1,this.active=!1,this.duration=1/0}show(){if(this.active||(this.active=!0,!this.stack))return;fi(this).appendChild(this)}hide(){if(!this.active)return;this.closing=!0,setTimeout(()=>{this.closing=!1,this.active=!1,this.stack&&this.remove()},ra)}cacheAlert(){let t=JSON.parse(localStorage.getItem("alerts")||"[]");localStorage.setItem("alerts",JSON.stringify(t.filter(e=>e!==this.id)))}removeCache(){if(!this.id)return;let t=[...JSON.parse(localStorage.getItem("alerts")||"[]"),this.id];localStorage.setItem("alerts",JSON.stringify(t))}activityUpdate(){this.resetTimeout(),this.emit(`hmwc-${this.active?"show":"hide"}`)}resetTimeout(){this.active&&(this.duration||0)<1/0&&(clearTimeout(this.timeout),this.timeout=window.setTimeout(()=>this.hide(),this.duration))}cacheUpdate(){this.cache&&(this.cached=JSON.parse(localStorage.getItem("alerts")||"[]").includes(this.id))}stackUpdate(){this.stack&&(this.duration=this.duration===1/0?5e3:this.duration)}connectedCallback(){super.connectedCallback(),!this.stack&&(this.active=this.active===void 0?!0:this.cached?!1:this.active)}render(){let t=f({alert:!0,active:!!this.active,closing:this.closing,dismissible:!!this.dismissible,stack:!!this.stack,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
      <div
        part="base"
        class=${t}
        role="alert"
        ?hidden=${!this.active}
        aria-hidden=${this.active?"false":"true"}
        @mousemove=${this.resetTimeout}>
        <slot name="icon" part="icon" class="alert__icon">
          <hmwc-icon
            src=${this.icon?this.icon:this.primary?"info-circle":this.success?"check2-circle":this.neutral?"gear":this.warning?"exclamation-triangle":this.danger?"exclamation-octagon":"exclamation-circle"}></hmwc-icon>
        </slot>

        <slot part="body" class="alert__body" aria-live="polite">
          <slot name="title" part="title" class="alert__title">${this.title}</slot>
          <slot name="label" part="label" class="alert__label">${this.label}</slot>
        </slot>

        ${this.dismissible?c`
              <slot name="dismiss" part="dismiss" class="alert__dismiss">
                <hmwc-button basic icon="x" aria-label="close alert" @hmwc-click=${this.hide}></hmwc-button>
              </slot>
            `:""}
      </div>
    `}};H.styles=pi;H.dependencies=[_,w];at([b()],H.prototype,"cached",void 0);at([b()],H.prototype,"closing",void 0);at([b()],H.prototype,"timeout",void 0);at([a({type:Boolean,reflect:!0})],H.prototype,"active",void 0);at([a({type:Number})],H.prototype,"duration",void 0);at([a({type:String})],H.prototype,"title",void 0);at([a({type:String})],H.prototype,"label",void 0);at([a({type:String})],H.prototype,"icon",void 0);at([a({type:Boolean,reflect:!0})],H.prototype,"dismissible",void 0);at([a({type:Boolean,reflect:!0})],H.prototype,"cache",void 0);at([a({type:Boolean,reflect:!0})],H.prototype,"stack",void 0);at([a({type:Boolean,reflect:!0})],H.prototype,"primary",void 0);at([a({type:Boolean,reflect:!0})],H.prototype,"success",void 0);at([a({type:Boolean,reflect:!0})],H.prototype,"neutral",void 0);at([a({type:Boolean,reflect:!0})],H.prototype,"warning",void 0);at([a({type:Boolean,reflect:!0})],H.prototype,"danger",void 0);at([p("active",{waitUntilFirstUpdate:!0})],H.prototype,"activityUpdate",null);at([p("duration")],H.prototype,"resetTimeout",null);at([p("cache")],H.prototype,"cacheUpdate",null);at([p("stack")],H.prototype,"stackUpdate",null);var Ce;function ui(){return Ce||(Ce=Object.assign(document.createElement("div"),{className:"hmwc-notification-stack"}),Ce.style.cssText=mi,Ce.style.position="fixed"),Ce.parentElement||document.body.appendChild(Ce),Ce}function fi(n,t=!1){if(t){let e=document.querySelector("[notificationstack][global]");if(e?._stackContainer)return e._stackContainer;let r=document.querySelectorAll("[notificationstack]");if(r.length){let o=r[0];if(o._stackContainer)return o._stackContainer}return ui()}if(n){let e=n.closest("[notificationstack]");if(e?._stackContainer)return e._stackContainer}return ui()}function ia(n={}){let t=Object.fromEntries(Object.entries(n).filter(([,i])=>i!==void 0)),e=n.preset?{...kr[n.preset],...t}:n,r=document.createElement("hmwc-alert"),o=fi(n.relativeTo,!!e.global);return r.stack=!0,o.appendChild(r),e.title&&(r.title=e.title),e.label&&(r.label=e.label),e.icon&&(r.icon=e.icon),e.dismissible&&(r.dismissible=!0),e.duration!==void 0&&(r.duration=e.duration),e.variant&&(r[e.variant]=!0),n.className&&(r.className+=` ${n.className}`),n.style&&(typeof n.style=="string"?r.setAttribute("style",n.style):Object.assign(r.style,n.style)),n.onShow&&r.addEventListener("hmwc-show",()=>n.onShow(r)),n.onHide&&r.addEventListener("hmwc-hide",()=>n.onHide(r)),r.active=!0,{alert:r,close:()=>r.hide()}}H.define("hmwc-alert",H);var{I:cc}=Jr;var gi=n=>n.strings===void 0;var oa={},vi=(n,t=oa)=>n._$AH=t;var ee=Ee(class extends me{constructor(n){if(super(n),n.type!==Zt.PROPERTY&&n.type!==Zt.ATTRIBUTE&&n.type!==Zt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!gi(n))throw Error("`live` bindings can only contain a single expression")}render(n){return n}update(n,[t]){if(t===kt||t===E)return t;let e=n.element,r=n.name;if(n.type===Zt.PROPERTY){if(t===e[r])return kt}else if(n.type===Zt.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(r))return kt}else if(n.type===Zt.ATTRIBUTE&&e.getAttribute(r)===t+"")return kt;return vi(n),t}});var bi=m`
  :host {
    display: flex;
    flex: 0 0 auto;
  }

  @keyframes checkmark-pop {
    0% {
      opacity: 0;
      scale: 0.5;
    }
    60% {
      opacity: 1;
      scale: 1.15;
    }
    100% {
      opacity: 1;
      scale: 1;
    }
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--hmwc-input-font-family);
    font-weight: var(--hmwc-input-font-weight);
    color: var(--hmwc-input-label-color);
    vertical-align: middle;
    cursor: pointer;

    & .checkbox__control {
      flex: 0 0 auto;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--toggle-size);
      height: var(--toggle-size);
      border: solid var(--hmwc-input-border-width) var(--hmwc-input-border-color);
      border-radius: var(--hmwc-border-radius-small);
      background-color: var(--hmwc-input-background-color);
      color: var(--hmwc-color-neutral-0);
      transition: var(--hmwc-transition-fast) border-color, var(--hmwc-transition-fast) background-color, var(--hmwc-transition-fast) color,
        var(--hmwc-transition-fast) box-shadow, var(--hmwc-transition-fast) scale ease;

      & > * {
        display: inline-flex;
      }
    }

    & .checkbox__input {
      position: absolute;
      opacity: 0;
      padding: 0;
      margin: 0;
      pointer-events: none;
    }

    & .checkbox__label {
      display: inline-block;
      color: var(--hmwc-input-label-color);
      line-height: 1.4;
      margin-inline-start: 0.3em;
      user-select: none;
      -webkit-user-select: none;
      transition: var(--hmwc-transition-fast) color;
    }

    &.checked,
    &.indeterminate {
      & .checkbox__control {
        border-color: var(--hmwc-color-primary-600);
        background-color: var(--hmwc-color-primary-600);

        & > * {
          animation: checkmark-pop 250ms cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards;
        }
      }

      &:not(.disabled) {
        &:hover .checkbox__control {
          border-color: var(--hmwc-color-primary-700);
          background-color: var(--hmwc-color-primary-700);
          scale: 1.05;
          box-shadow: 0 0 0 3px hsl(from var(--hmwc-color-primary-600) h s l / 0.2);
        }

        &:hover .checkbox__label {
          color: var(--hmwc-color-primary-600);
        }

        & .checkbox__input:focus-visible {
          & ~ .checkbox__control {
            outline: var(--hmwc-focus-ring);
            outline-offset: var(--hmwc-focus-ring-offset);
          }
        }
      }
    }

    &:not(.checked):not(.disabled) {
      &:hover .checkbox__control {
        border-color: var(--hmwc-input-border-color-hover);
        background-color: var(--hmwc-input-background-color-hover);
        scale: 1.05;
        box-shadow: 0 0 0 3px hsl(from var(--hmwc-color-neutral-400) h s l / 0.2);
      }

      &:hover .checkbox__label {
        color: var(--hmwc-color-primary-600);
      }

      &:has(.checkbox__input:focus-visible) {
        & .checkbox__control {
          outline: var(--hmwc-focus-ring);
          outline-offset: var(--hmwc-focus-ring-offset);
        }
      }
    }

    &.sm {
      height: var(--hmwc-input-height-small);
      font-size: var(--hmwc-input-font-size-small);

      & .checkbox__control {
        --toggle-size: var(--hmwc-toggle-size-small);
      }
    }

    &.md {
      height: var(--hmwc-input-height-medium);
      font-size: var(--hmwc-input-font-size-medium);

      & .checkbox__control {
        --toggle-size: var(--hmwc-toggle-size-medium);
      }
    }

    &.lg {
      height: var(--hmwc-input-height-large);
      font-size: var(--hmwc-input-font-size-large);

      & .checkbox__control {
        --toggle-size: var(--hmwc-toggle-size-large);
      }
    }

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;

      & .checkbox__input {
        cursor: not-allowed;
      }
    }
  }
`,wi=c`
  <svg part="icon" viewBox="0 0 16 16">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
      <g stroke="currentColor">
        <g transform="translate(3.428571, 3.428571)">
          <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
          <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
        </g>
      </g>
    </g>
  </svg>
`,yi=c`
  <svg part="icon" viewBox="0 0 16 16">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
      <g stroke="currentColor" stroke-width="2">
        <g transform="translate(2.285714, 6.857143)">
          <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
        </g>
      </g>
    </g>
  </svg>
`;var $r=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},ct=class extends F{handleStateChange(){this.input.checked=!!this.checked,this.input.indeterminate=this.indeterminate}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return!0}reportValidity(){return this.input.reportValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("hmwc-change",{detail:{value:this.checked}})}handleBlur(){this.emit("blur",{})}handleFocus(){this.emit("focus",{})}handleInput(){this.emit("hmwc-input",{})}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0)}render(){let t=!this.checked&&this.indeterminate,e=f({checkbox:!0,checked:this.checked,indeterminate:t,sm:!!this.sm,md:!!this.md,lg:!!this.lg,disabled:!!this.disabled,required:!!this.required});return c`
      <label part="base" class=${e}>
        <input
          class="checkbox__input"
          type="checkbox"
          name=${y(this.name)}
          value=${y(this.value)}
          .indeterminate=${ee(this.indeterminate)}
          .checked=${ee(this.checked)}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-checked=${this.checked}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur} />

        <span part="control" class="checkbox__control"> ${this.checked?wi:""} ${t?yi:""} </span>

        <slot part="label" class="checkbox__label">${this.label}</slot>
      </label>
    `}};ct.styles=bi;ct.toggle=!0;$r([a({type:Boolean,reflect:!0})],ct.prototype,"indeterminate",void 0);$r([T(".checkbox__input")],ct.prototype,"input",void 0);$r([p(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],ct.prototype,"handleStateChange",null);ct.define("hmwc-checkbox",ct);var _i=m`
  :host {
    --divider-color: var(--hmwc-panel-border-color);
    --divider-size: var(--hmwc-panel-border-width);
    --divider-radius: 3rem / 3rem;
    --divider-spacing-start: inherit;
    --divider-spacing-end: inherit;

    display: block;
  }

  :host([vertical]) {
    display: flex;
    align-self: stretch;
  }

  .divider {
    height: fit-content;
    box-sizing: border-box;
    border-radius: var(--divider-radius);
    margin: var(--divider-spacing);

    &.horizontal {
      --divider-spacing: var(--divider-spacing-start, 0) 0 var(--divider-spacing-end, 0) 0;
      width: 100%;
      border-top: var(--divider-size) solid var(--divider-color);
    }
    &.vertical {
      --divider-spacing: 0 var(--divider-spacing-start, 0) 0 var(--divider-spacing-end, 0);
      height: 100%;
      min-height: max(100%, var(--divider-container-size));
      border-right: var(--divider-size) solid var(--divider-color);
    }

    &.spacing-xs {
      --divider-spacing-start: var(--hmwc-spacing-x-small);
      --divider-spacing-end: var(--hmwc-spacing-x-small);
    }
    &.spacing-sm {
      --divider-spacing-start: var(--hmwc-spacing-small);
      --divider-spacing-end: var(--hmwc-spacing-small);
    }
    &.spacing-md {
      --divider-spacing-start: var(--hmwc-spacing-large);
      --divider-spacing-end: var(--hmwc-spacing-large);
    }
    &.spacing-lg {
      --divider-spacing-start: var(--hmwc-spacing-x-large);
      --divider-spacing-end: var(--hmwc-spacing-x-large);
    }
    &.spacing-xl {
      --divider-spacing-start: var(--hmwc-spacing-2x-large);
      --divider-spacing-end: var(--hmwc-spacing-2x-large);
    }

    &.sm {
      --divider-size: calc(1.25 * var(--hmwc-panel-border-width));
      --divider-radius: 2.25rem / 2.25rem;
    }
    &.md {
      --divider-size: calc(2.5 * var(--hmwc-panel-border-width));
      --divider-radius: 2.5rem / 2.5rem;
    }
    &.lg {
      --divider-size: calc(4 * var(--hmwc-panel-border-width));
      --divider-radius: 4rem / 4rem;
    }

    &.primary {
      --divider-color: var(--hmwc-color-primary-100);
    }
    &.success {
      --divider-color: var(--hmwc-color-success-100);
    }
    &.neutral {
      --divider-color: var(--hmwc-color-neutral-100);
    }
    &.warning {
      --divider-color: var(--hmwc-color-warning-100);
    }
    &.danger {
      --divider-color: var(--hmwc-color-danger-100);
    }
  }
`;var Gt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},V=class extends u{constructor(){super(...arguments),this.horizontal=!0}orientationUpdate(){this.vertical&&(this.horizontal=!1)}render(){let t=f({divider:!0,horizontal:!!this.horizontal,vertical:!!this.vertical,"spacing-xs":this.spacing==="xs","spacing-sm":this.spacing==="sm","spacing-md":this.spacing==="md","spacing-lg":this.spacing==="lg","spacing-xl":this.spacing==="xl",sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`<div part="base" class=${t} role="separator" aria-orientation=${this.vertical?"vertical":"horizontal"}></div>`}};V.styles=_i;Gt([a({type:Boolean,reflect:!0})],V.prototype,"horizontal",void 0);Gt([a({type:Boolean,reflect:!0})],V.prototype,"vertical",void 0);Gt([a({type:String,reflect:!0})],V.prototype,"spacing",void 0);Gt([a({type:Boolean,reflect:!0})],V.prototype,"sm",void 0);Gt([a({type:Boolean,reflect:!0})],V.prototype,"md",void 0);Gt([a({type:Boolean,reflect:!0})],V.prototype,"lg",void 0);Gt([a({type:Boolean,reflect:!0})],V.prototype,"primary",void 0);Gt([a({type:Boolean,reflect:!0})],V.prototype,"success",void 0);Gt([a({type:Boolean,reflect:!0})],V.prototype,"neutral",void 0);Gt([a({type:Boolean,reflect:!0})],V.prototype,"warning",void 0);Gt([a({type:Boolean,reflect:!0})],V.prototype,"danger",void 0);Gt([p("vertical")],V.prototype,"orientationUpdate",null);V.define("hmwc-divider",V);var xi=m`
  :host {
    --calendar-background: var(--hmwc-panel-background-color, var(--hmwc-color-neutral-0, #fff));
    --calendar-radius: var(--hmwc-border-radius-x-large);
    --calendar-padding: var(--hmwc-spacing-large);
    --calendar-label-size: calc(0.9 * var(--hmwc-font-size-large));
    --calendar-label-color: var(--hmwc-color-neutral-900);
    --calendar-label-weight: var(--hmwc-font-weight-bold);
    --calendar-navigation-color: var(--hmwc-color-neutral-600);
    --calendar-navigation-inactive-color: var(--hmwc-color-neutral-300);
    --calendar-days-size: var(--hmwc-font-size-small);
    --calendar-days-color: var(--hmwc-color-neutral-800);
    --calendar-days-weight: var(--hmwc-font-weight-bold);
    --calendar-date-size: var(--hmwc-font-size-small);
    --calendar-date-color: var(--hmwc-color-neutral-700);
    --calendar-date-background: transparent;
    --calendar-date-weight: var(--hmwc-font-weight-bold);
    --calendar-date-selected-color: var(--hmwc-color-neutral-200);
    --calendar-date-selected-background: linear-gradient(to left top, var(--hmwc-color-primary-400), var(--hmwc-color-primary-700));
    --calendar-date-selected-inactive-color: var(--hmwc-color-neutral-300);
    --calendar-date-selected-inactive-background: linear-gradient(to left top, var(--hmwc-color-primary-300), var(--hmwc-color-primary-400));
    --calendar-date-placeholder-color: var(--hmwc-color-neutral-600);
    --calendar-date-placeholder-background: var(--hmwc-color-neutral-50);
    --calendar-date-inactive-color: var(--hmwc-color-neutral-600);
    --calendar-date-disabled-color: var(--hmwc-color-neutral-600);

    display: block;
  }

  .calendar {
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: var(--hmwc-spacing-medium);
    padding: var(--calendar-padding);
    background-color: var(--calendar-background);
    box-shadow: var(--hmwc-shadow-x-large);
    border: var(--hmwc-color-panel-border-weight) solid var(--hmwc-color-panel-border-color);
    border-radius: var(--calendar-radius);
    box-sizing: border-box;

    & .calendar__header {
      display: flex;
      gap: var(--hmwc-spacing-2x-small);
      padding-inline: var(--hmwc-spacing-x-small);
      align-items: center;
      justify-content: space-between;

      & .calendar__label {
        gap: var(--hmwc-spacing-3x-small);
        display: flex;
        align-items: center;
        color: var(--calendar-label-color);
        font-size: var(--calendar-label-size);
        font-weight: var(--calendar-label-weight);

        & .clickable {
          cursor: pointer;
          border-radius: var(--hmwc-border-radius-medium);
          transition: background-color 150ms ease-in-out;

          &::part(base) {
            gap: var(--hmwc-spacing-3x-small);
            color: var(--calendar-label-color);
            font-size: var(--calendar-label-size);
            font-weight: var(--calendar-label-weight);
            padding: var(--hmwc-spacing-3x-small) var(--hmwc-spacing-x-small);
            border-radius: var(--hmwc-border-radius-medium);
            transition: background-color 150ms ease-in-out, color 150ms ease-in-out;
          }

          &:hover::part(base) {
            background-color: var(--hmwc-color-neutral-100);
          }
        }
      }

      & .calendar__month-picker,
      & .calendar__year-picker {
        & hmwc-menu {
          width: fit-content;
          box-shadow: none;
          --menu-width: fit-content;
          --menu-padding: var(--hmwc-spacing-3x-small) 0;
          --menu-label-size: var(--hmwc-font-size-small);
          --menu-label-weight: var(--hmwc-font-weight-semibold);
          --menu-border-radius: var(--hmwc-border-radius-large);
          --menu-border: solid var(--hmwc-color-panel-border-weight, 1px) var(--hmwc-color-panel-border-color);
          --menu-shadow: var(--hmwc-shadow-x-large);
          --menu-item-placeholder-display: none;

          & hmwc-menu-item {
            --menu-item-spacing-override: var(--hmwc-spacing-3x-small) var(--hmwc-spacing-medium);
          }
        }
      }

      & .calendar__month-picker hmwc-menu {
        min-width: 150px;
        --menu-max-height: 220px;
      }

      & .calendar__year-picker hmwc-menu {
        min-width: 120px;
        --menu-max-height: 220px;

        & hmwc-menu-item {
          --menu-item-spacing-override: var(--hmwc-spacing-3x-small) var(--hmwc-spacing-medium);
        }
      }

      & .calendar__navigation {
        flex-shrink: 0;
        border-radius: var(--hmwc-border-radius-medium);
        transition: background-color 150ms ease-in-out;

        &:hover {
          background-color: var(--hmwc-color-neutral-100);
        }

        &::part(icon) {
          --icon-color: var(--calendar-navigation-color);
        }
      }
    }

    & .calendar__body {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      justify-items: center;
      column-gap: var(--hmwc-spacing-small);
      row-gap: var(--hmwc-spacing-x-small);

      & .calendar__days {
        display: flex;
        text-align: center;
        font-size: var(--calendar-days-size);
        margin-bottom: var(--hmwc-spacing-2x-small);
        color: var(--calendar-days-color);
        font-weight: var(--calendar-days-weight);
      }

      & .calendar__date {
        display: flex;
        width: 100%;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        text-align: center;
        aspect-ratio: 1;
        line-height: 1;
        cursor: pointer;
        font-size: var(--calendar-date-size);
        font-weight: var(--calendar-date-weight);
        font-family: var(--hmwc-font-sans);
        color: var(--calendar-date-color);
        background: var(--calendar-date-background);
        transition: all 150ms ease-in-out 25ms;

        &:active:hover {
          transform: scale(1.05, 1.05);
          opacity: 0.85;
        }

        &:hover {
          color: var(--hmwc-color-neutral-900);
        }

        &[placeholder] {
          color: var(--calendar-date-placeholder-color);
          background: var(--calendar-date-placeholder-background);
          box-shadow: var(--hmwc-shadow-2x-small);
        }

        &[selected] {
          color: var(--calendar-date-selected-color);
          background: var(--calendar-date-selected-background);
          box-shadow: var(--hmwc-shadow-x-small);
          border: 1px solid var(--hmwc-color-neutral-600);
          &:not([current]) {
            color: var(--calendar-date-selected-inactive-color);
            background: var(--calendar-date-selected-inactive-background);
          }

          &:hover {
            color: var(--hmwc-color-neutral-100);
            box-shadow: var(--hmwc-shadow-small);
          }
        }

        &:not([current]) {
          cursor: default;
          color: var(--calendar-date-inactive-color);
          font-weight: var(--hmwc-font-weight-normal);
          cursor: not-allowed;
        }
      }
    }

    &.disabled {
      & .calendar__body .calendar__date {
        cursor: default;
        color: var(--calendar-date-disabled-color);
      }
    }

    &:not(.navigation) {
      & .calendar__header .calendar__navigation {
        &::part(icon) {
          --icon-color: var(--calendar-navigation-inactive-color);
        }
      }
    }

    &.basic {
      padding: 0;
      background-color: transparent;
      box-shadow: none;
      border: none;

      & .calendar__header {
        display: none;
      }
    }
  }
`;var ut=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},U=class extends u{constructor(){super(...arguments),this.MONTHS=[...Array(12).keys()].map(t=>new Date(0,t).toLocaleString("en",{month:"long"})),this.DAYS=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],this.dates=[],this.selection=[],this.dragAction="add",this.value=[],this.placeholder=[],this.month=new Date().getMonth(),this.year=new Date().getFullYear(),this.yearRange=100,this.yearRangeFuture=10,this.valueUpdate=()=>this.parseDates(),this.selectionUpdate=()=>this.emit("hmwc-change",{detail:{value:this.selection}}),this.dateUpdate=()=>this.dates=this.getDates(),this.multipleUpdate=()=>this.selection=this.selection.slice(0,1)}navigate(t,e=this.year){t!==void 0&&(e===this.year&&(t<0?(t=11,e--):t>11&&(t=0,e++)),this.month=t,this.year=e)}getYearOptions(){let t=new Date().getFullYear(),e=[],r=t-this.yearRange,o=t+this.yearRangeFuture;for(let i=r;i<=o;i++)e.push(i);return e}handleMonthSelect(t){let e=parseInt(t.detail?.value);isNaN(e)||(this.navigate(e,this.year),this.renderRoot.querySelector(".calendar__month-picker")?.hide())}handleYearSelect(t){let e=parseInt(t.detail?.value);isNaN(e)||(this.navigate(this.month,e),this.renderRoot.querySelector(".calendar__year-picker")?.hide())}closeSiblingPicker(t){let e=t==="month"?"calendar__year-picker":"calendar__month-picker",r=this.renderRoot.querySelector(`.${e}`);r?.active&&r.hide()}select(t){new Date(t).getMonth()===this.month&&(this.emit("select",{detail:{value:t}}),this.selection.find(e=>+e==+t)?this.selection=this.selection.filter(e=>+e!=+t):this.selection=[...this.multiple?this.selection:[],t])}parseDates(){this.selection=this.value.map(t=>new Date(t))}getDates(){let t=[],e={start:new Date(this.year,this.month,1),end:new Date(this.year,this.month+1,0)};for(let s=e.start.getDay()-1;s>=0;s--){let l=new Date(e.start);l.setDate(l.getDate()-(s+1)),t.push(l)}for(let s=1;s<=e.end.getDate();s++)t.push(new Date(this.year,this.month,s));let r=42-t.length;for(let s=1;s<=r;s++)t.push(new Date(this.year,this.month+1,s));let o=[];for(let s=0;s<t.length;s+=7)o.push(t.slice(s,s+7));return o.filter(s=>s.some(l=>l.getMonth()===this.month)).flat()}getDate(t){return this.dates.find(e=>{let r=new Date(e);return[r.getDate()===parseInt(t.innerText),r.getMonth()===this.month,r.getFullYear()===this.year,t.hasAttribute("current")].every(i=>i)})}startDrag(t){if(this.disabled)return;this.dragTarget=t.target;let e=this.getDate(this.dragTarget);e&&this.select(e),this.dragAction=this.dragTarget?.hasAttribute("selected")?"remove":"add"}drag(t){if(!this.dragTarget)return;let e=t.target;if(document.activeElement,[e===this.dragTarget,e.className!=="calendar__date",this.dragAction==="add"&&e.hasAttribute("selected"),this.dragAction==="remove"&&!e.hasAttribute("selected")].some(i=>i))return;let o=this.getDate(e);o&&this.select(o)}stopDrag(){this.dragAction="add",this.dragTarget=void 0}render(){let t=f({calendar:!0,navigation:!!this.navigation,basic:!!this.basic,disabled:!!this.disabled});return c`
      <div part="base" class=${t} @mouseup=${this.stopDrag} @mouseleave=${this.stopDrag} @mousemove=${this.drag}>
        <div part="header" class="calendar__header">
          <hmwc-button
            slot="navigate-back"
            part="navigation"
            class="calendar__navigation"
            role="navigation"
            title="previous"
            sm
            basic
            icon="chevron-left"
            ?disabled=${!this.navigation}
            @hmwc-click=${()=>this.navigate(this.month-1)}>
          </hmwc-button>

          <div slot="label" part="label" class="calendar__label">
            ${this.navigation?c`
                  <hmwc-attachment
                    class="calendar__month-picker"
                    placement="bottom-start"
                    .distance=${4}
                    @hmwc-select=${e=>this.handleMonthSelect(e)}>
                    <hmwc-button
                      slot="anchor"
                      basic
                      sm
                      part="month"
                      class="calendar__label-month clickable"
                      label=${this.MONTHS[this.month]}
                      @hmwc-click=${()=>this.closeSiblingPicker("month")}>
                    </hmwc-button>
                    <hmwc-menu active-value=${this.month}>
                      ${this.MONTHS.map((e,r)=>c` <hmwc-menu-item sm label=${e} value=${r}> </hmwc-menu-item> `)}
                    </hmwc-menu>
                  </hmwc-attachment>
                  <hmwc-attachment
                    class="calendar__year-picker"
                    placement="bottom-start"
                    .distance=${4}
                    @hmwc-select=${e=>this.handleYearSelect(e)}>
                    <hmwc-button
                      slot="anchor"
                      basic
                      sm
                      part="year"
                      class="calendar__label-year clickable"
                      label=${this.year}
                      @hmwc-click=${()=>this.closeSiblingPicker("year")}>
                    </hmwc-button>
                    <hmwc-menu active-value=${this.year} align="center">
                      ${this.getYearOptions().map(e=>c` <hmwc-menu-item sm label=${e} value=${e}> </hmwc-menu-item> `)}
                    </hmwc-menu>
                  </hmwc-attachment>
                `:c`
                  <div part="month" class="calendar__label-month">${this.MONTHS[this.month]}</div>
                  <div part="year" class="calendar__label-year">${this.year}</div>
                `}
          </div>

          <hmwc-button
            slot="navigate-forward"
            part="navigation"
            class="calendar__navigation"
            role="navigation"
            title="next"
            sm
            basic
            icon="chevron-right"
            ?disabled=${!this.navigation}
            @hmwc-click=${()=>this.navigate(this.month+1)}>
          </hmwc-button>
        </div>

        <div part="body" class="calendar__body" @mousedown=${this.startDrag}>
          ${this.DAYS.map(e=>c` <div part="days" class="calendar__days">${e}</div> `)}
          ${this.dates.map(e=>c`
              <div
                class="calendar__date"
                part="date"
                ?current=${e.getMonth()===this.month}
                ?selected=${this.selection.find(r=>+r==+e)}
                ?placeholder=${this.placeholder.find(r=>+e==+r)}>
                ${e.getDate()}
              </div>
            `)}
        </div>
      </div>
    `}};U.styles=xi;U.dependencies=[w];ut([b()],U.prototype,"dates",void 0);ut([b()],U.prototype,"selection",void 0);ut([b()],U.prototype,"dragAction",void 0);ut([b()],U.prototype,"dragTarget",void 0);ut([a({type:Array,reflect:!0})],U.prototype,"value",void 0);ut([a({type:Array,reflect:!0})],U.prototype,"placeholder",void 0);ut([a({type:Number,reflect:!0})],U.prototype,"month",void 0);ut([a({type:Number,reflect:!0})],U.prototype,"year",void 0);ut([a({type:Boolean,reflect:!0})],U.prototype,"navigation",void 0);ut([a({type:Boolean,reflect:!0})],U.prototype,"multiple",void 0);ut([a({type:Boolean,reflect:!0})],U.prototype,"disabled",void 0);ut([a({type:Boolean,reflect:!0})],U.prototype,"basic",void 0);ut([a({type:Number,attribute:"year-range"})],U.prototype,"yearRange",void 0);ut([a({type:Number,attribute:"year-range-future"})],U.prototype,"yearRangeFuture",void 0);ut([p("value")],U.prototype,"valueUpdate",void 0);ut([p("selection",{waitUntilFirstUpdate:!0})],U.prototype,"selectionUpdate",void 0);ut([p(["month","year"])],U.prototype,"dateUpdate",void 0);ut([p("multiple",{waitUntilFirstUpdate:!0})],U.prototype,"multipleUpdate",void 0);U.define("hmwc-calendar",U);var ki=m`
  @keyframes icon-sheen {
    0%,
    100% {
      color: var(--hmwc-input-icon-color);
    }
    50% {
      color: color-mix(in srgb, var(--hmwc-input-icon-color) 60%, var(--hmwc-color-primary-600));
    }
  }

  /* Entrance pop for valid/invalid status icons */
  @keyframes validity-icon-enter {
    0% {
      opacity: 0;
      scale: 0.5;
    }
    60% {
      opacity: 1;
      scale: 1.15;
    }
    100% {
      opacity: 1;
      scale: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    @keyframes icon-sheen {
      0%,
      50%,
      100% {
        color: var(--hmwc-input-icon-color);
      }
    }
    @keyframes validity-icon-enter {
      from,
      to {
        opacity: 1;
        scale: 1;
      }
    }
  }

  :host {
    --input-background: var(--hmwc-input-background-color);
    --input-color: var(--hmwc-input-color);
    --input-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color);
    --input-border-color: var(--hmwc-input-border-color);
    --input-radius: var(--hmwc-input-border-radius-large);
    --input-shadow: var(--hmwc-shadow-x-small);
    --input-width: auto;
    --input-outline: none;
    --input-flex: 1 1 18ch;
    --input-min-width: 10ch;

    --icon-size: 1rem;

    display: block;
    flex: var(--input-flex);
    min-width: var(--input-min-width);
    max-height: fit-content;
  }

  /* When the input has no label, center-align in the row
     so the field lines up with checkboxes / other controls. */
  :host([no-label]) {
    align-self: center;
  }

  :host([fluid]) {
    width: 100%;
    min-width: 0;
    flex-basis: 100%;
  }

  :host([type='date']) {
    --input-flex: 1.5 1 22ch;
    --input-min-width: 16ch;
  }

  :host([type='number']) {
    --input-flex: 1 1 10ch;
    --input-min-width: 3ch;
  }

  :host([type='tel']) {
    --input-flex: 1.25 1 18ch;
    --input-min-width: 14ch;
  }

  :host([type='time']) {
    --input-flex: 1 1 10ch;
    --input-min-width: 8ch;
  }

  :host([type='email']),
  :host([type='url']),
  :host([type='filepath']) {
    --input-flex: 1.25 1 22ch;
    --input-min-width: 14ch;
  }

  :host([type='search']) {
    --input-flex: 1.25 1 20ch;
    --input-min-width: 12ch;
  }

  .input {
    display: grid;

    /* Center content when no label is present,
       keeping the field aligned with sibling controls in a row. */
    &.no-label {
      align-content: center;
    }

    & .input__label {
      width: 100%;
      color: var(--hmwc-input-color);
      font-family: var(--hmwc-font-sans);
      font-weight: var(--hmwc-font-weight-normal);
      line-height: 1.4;
      padding-block: 0.15em;
      display: flex;
      align-items: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &[aria-hidden='true'] {
        display: none;
      }
    }

    & .input__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      anchor-name: --wrapper;

      & .input__help {
        text-align: end;
        display: block;
        color: var(--hmwc-input-help-text-color);
        font-size: var(--hmwc-font-size-small);
        font-family: var(--hmwc-font-sans);
        line-height: 2;
        width: 100%;
      }

      & .input__field {
        font-family: var(--hmwc-input-font-family);

        box-sizing: border-box;
        box-shadow: var(--input-shadow);
        flex: 1 1 auto;
        display: inline-flex;
        align-items: stretch;
        justify-content: start;
        position: relative;
        width: 100%;
        background-color: var(--input-background);
        border: var(--input-border);
        border-radius: var(--input-radius);
        font-weight: var(--hmwc-input-font-weight);
        letter-spacing: var(--hmwc-input-letter-spacing);
        vertical-align: middle;
        overflow: hidden;
        cursor: text;
        transition: var(--hmwc-transition-fast) color, var(--hmwc-transition-fast) border, var(--hmwc-transition-fast) box-shadow,
          var(--hmwc-transition-fast) background-color;

        & .input__clear,
        & .input__toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: inherit;
          color: var(--hmwc-input-icon-color);
          border: none;
          background: none;
          padding: 0;
          transition: var(--hmwc-transition-fast) color;
          cursor: pointer;

          &:hover {
            color: var(--hmwc-input-icon-color-hover);
          }
        }

        & .input__control {
          flex: 1 1 auto;
          font-family: var(--hmwc-input-font-family);
          font-weight: var(--hmwc-input-font-weight);
          letter-spacing: var(--hmwc-input-letter-spacing);
          border-radius: var(--input-radius);
          min-width: 0;
          width: var(--input-width);
          height: 100%;
          color: var(--hmwc-input-color) !important;
          border: none;
          background: inherit;
          box-shadow: none;
          padding: 0;
          margin: 0;
          cursor: inherit;
          appearance: none;
          -webkit-appearance: none;

          &:focus-within {
            outline: none !important;
          }

          &::placeholder {
            color: var(--hmwc-input-placeholder-color);
            user-select: none;
            -webkit-user-select: none;
          }

          &::webkit-search-decoration,
          &::webkit-search-cancel,
          &::webkit-search-results,
          &::webkit-search-results {
            appearance: none;
            -webkit-appearance: none;
          }

          &::-ms-reveal {
            display: none;
          }

          &::-webkit-inner-spin-button,
          &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            appearance: none;
            display: none;
            margin: 0;
          }
        }

        & .input__prefix,
        & .input__suffix,
        & .input__toggle,
        & .input__clear {
          position: absolute;
          transform: translateY(-50%);
          top: 50%;
          right: 0;

          hmwc-icon {
            &::part(base) {
              display: block;
            }
          }
        }

        & .input__prefix {
          left: 0;
          right: initial;
          padding-inline-start: var(--hmwc-input-spacing-medium);
        }

        & .input__prefix,
        & .input__suffix {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          cursor: default;
          --icon-size: 0.875em;

          &::slotted(hmwc-icon),
          & hmwc-icon {
            --icon-color: var(--hmwc-input-icon-color);
            transition: var(--hmwc-transition-fast) color;
          }

          /* Validity status icons pop in when they appear */
          & hmwc-icon[success],
          & hmwc-icon[danger] {
            animation: validity-icon-enter 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28) both;
          }
        }

        & .input__suffix {
          height: 100%;
          right: 0;
          padding-inline-end: var(--hmwc-input-spacing-medium);
        }

        & .input__units {
          border-left: calc(0.66 * var(--hmwc-input-border-width)) solid var(--hmwc-input-border-color);
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          font-size: calc(0.875 * var(--hmwc-font-size-small));
          color: var(--hmwc-color-neutral-600);
          padding-inline: var(--hmwc-spacing-x-small);
          letter-spacing: -0.2px;
        }

        .input__clear,
        .input__toggle {
          hmwc-button {
            --button-color: var(--hmwc-input-icon-color);
          }
        }
      }

      & .input__calendar_toggle {
        display: flex;
        align-items: stretch;
        & hmwc-button {
          --button-padding: 0 var(--hmwc-spacing-small);
          --icon-color: var(--hmwc-input-icon-color);
          display: flex;
          align-items: stretch;
          &::part(base) {
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            background: transparent !important;
            transform: none !important;
            color: var(--hmwc-input-icon-color) !important;
            --icon-color: var(--hmwc-input-icon-color) !important;
            --button-color: var(--hmwc-input-icon-color) !important;
            transition: var(--hmwc-transition-fast) color ease !important;
          }
          &:hover::part(base) {
            color: var(--hmwc-color-primary-400) !important;
            --icon-color: var(--hmwc-color-primary-400) !important;
            --button-color: var(--hmwc-color-primary-400) !important;
          }
        }
      }
    }

    & .input__calendar {
      z-index: var(--hmwc-z-index-tooltip);
      display: none;
      position: fixed;
      top: calc(var(--hmwc-spacing-2x-small) + anchor(bottom));
      position-anchor: --wrapper;
    }

    &.date {
      & .input__wrapper {
        display: grid;
        grid-template-columns: auto 1fr;
        border: var(--input-border);
        border-radius: var(--input-radius);
        box-shadow: var(--input-shadow);
        background-color: var(--input-background);
        overflow: hidden;
        transition: var(--hmwc-transition-fast) border, var(--hmwc-transition-fast) box-shadow, var(--hmwc-transition-fast) background-color;
      }

      & .input__calendar_toggle {
        align-self: stretch;
        display: flex;
        align-items: stretch;
        grid-row: 1 / -1;
        border-inline-end: var(--hmwc-input-border-width) solid var(--input-border-color);
        transition: var(--hmwc-transition-fast) border-color;

        & hmwc-button {
          align-self: stretch;

          &::part(base) {
            min-height: 0;
            height: 100%;
            border-radius: 0;
          }
        }
      }

      & .input__field {
        border: none;
        border-radius: 0;
        box-shadow: none;
      }

      & .input__help {
        grid-column: 1 / -1;
      }
    }

    /** underline + date — strip wrapper chrome, keep only a bottom line */
    &.underline.date {
      & .input__wrapper {
        border: none;
        border-radius: 0;
        box-shadow: none;
        background-color: transparent;
      }

      & .input__calendar_toggle {
        border-inline-end: none;
      }

      & .input__field {
        border: none;
        border-bottom: 1px solid var(--hmwc-input-border-color);
        border-radius: 0;
        box-shadow: none;
        transition: border-color var(--hmwc-transition-fast) ease;
      }
    }

    /** hover (exclude focus-within so the focus ring is never overridden,
         exclude invalid so the error styles are not disrupted,
         and exclude calendar so the open-calendar focus ring persists) */
    &:not(.disabled) {
      &:not(.invalid):not(.calendar):not(:has(.input__field:focus-within)):has(.input__field:hover),
      &:not(.invalid):not(.calendar):not(:has(.input__field:focus-within)):has(.input__calendar_toggle:hover) {
        --input-background: var(--hmwc-input-background-color-hover);
        --input-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color-hover);
        --input-border-color: var(--hmwc-input-border-color-hover);

        & .input__field {
          box-shadow: 0 2px 8px hsl(from var(--hmwc-color-primary-600) h s l / 0.2);
        }

        &.date .input__field {
          box-shadow: none;
        }

        &.date .input__wrapper {
          box-shadow: 0 4px 12px hsl(from var(--hmwc-color-primary-600) h s l / 0.2);
        }

        &.underline {
          --input-background: transparent;
          --input-border: none;
          --input-shadow: none;

          & .input__field {
            border-bottom: 1px solid var(--hmwc-input-border-color-hover);
            box-shadow: 0 2px 4px -2px hsl(from var(--hmwc-color-primary-600) h s l / 0.3);
          }
        }

        &.underline.date {
          & .input__wrapper {
            box-shadow: none;
          }

          & .input__field {
            border: none;
            border-bottom: 1px solid var(--hmwc-input-border-color-hover);
            box-shadow: 0 2px 4px -2px hsl(from var(--hmwc-color-primary-600) h s l / 0.3);
          }
        }

        &.filled {
          --input-background: var(--hmwc-input-filled-background-color-hover);
        }
      }
      &:has(.input__field:focus-within) {
        --input-background: var(--hmwc-input-background-color-focus);
        --input-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color-focus);
        --input-border-color: var(--hmwc-input-border-color-focus);
        --input-color: var(--hmwc-input-color-focus);
        --input-shadow: 0 0 0 var(--hmwc-focus-ring-width) var(--hmwc-input-focus-ring-color);
        --input-outline: var(--hmwc-focus-ring-style) var(--hmwc-focus-ring-width) var(--hmwc-focus-ring-color);

        & .input__field {
          box-shadow: 0 0 0 var(--hmwc-focus-ring-width) var(--hmwc-input-focus-ring-color);
        }

        & .input__prefix,
        & .input__suffix {
          &::slotted(hmwc-icon),
          & hmwc-icon:not([success]):not([danger]) {
            --icon-color: inherit;
            animation: icon-sheen 3s ease-in-out infinite;
          }
        }

        &.date .input__field {
          box-shadow: none;
        }

        &.date .input__wrapper {
          box-shadow: 0 0 0 var(--hmwc-focus-ring-width) var(--hmwc-input-focus-ring-color);
        }

        &.underline {
          --input-background: transparent;
          --input-border: none;
          --input-shadow: none;
          --input-outline: none;

          & .input__field {
            border-bottom: 1px solid var(--hmwc-color-primary-600);
            box-shadow: 0 2px 6px -2px var(--hmwc-input-focus-ring-color);
          }
        }

        &.underline.date {
          & .input__wrapper {
            box-shadow: none;
          }

          & .input__field {
            border: none;
            border-bottom: 1px solid var(--hmwc-color-primary-600);
            box-shadow: 0 2px 6px -2px var(--hmwc-input-focus-ring-color);
          }
        }

        &.filled {
          --input-background: var(--hmwc-input-filled-background-color-focus);
        }
      }
    }

    /** filled */
    &.filled:not(.disabled) {
      --input-color: var(--hmwc-input-color);
      --input-background: var(--hmwc-input-filled-background-color);
    }

    /** underline — borderless input with only a bottom line */
    &.underline {
      & .input__field {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--hmwc-input-border-color);
        border-radius: 0;
        box-shadow: none;
        transition: border-color var(--hmwc-transition-fast) ease;
      }

      &:not(.disabled) {
        & .input__field:not(:focus-within):hover {
          border-bottom-color: var(--hmwc-input-border-color-hover);
        }

        & .input__field:focus-within {
          border-bottom-color: var(--hmwc-input-border-color-focus);
          outline: none;
          box-shadow: none;
        }
      }

      & .input__field:focus-within {
        outline: none;
      }
    }

    /** disabled */
    &.disabled {
      --input-background: var(--hmwc-input-filled-background-color-disabled);
      --input-color: var(--hmwc-input-color-disabled);
      --input-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color-disabled);
      --input-border-color: var(--hmwc-input-border-color-disabled);

      &.filled {
        --input-background: var(--hmwc-input-filled-background-color-disabled);
      }

      & .input__field {
        opacity: 0.5;
        cursor: not-allowed;
      }

      & .input__control {
        pointer-events: none;

        &::placeholder {
          color: var(--hmwc-input-placeholder-color-disabled);
        }
      }
    }

    &.no-spin {
      & .input__control {
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          -webkit-appearance: none;
          appearance: none;
          margin: 0;
        }

        -moz-appearance: textfield;
      }
    }

    &.small {
      --input-radius: calc(1.15 * var(--hmwc-input-border-radius-medium));

      & .input__field,
      & .input__control,
      & .input__label {
        font-size: var(--hmwc-input-font-size-small);
      }

      &:not(.textarea) {
        & .input__field {
          height: var(--hmwc-input-height-small);
        }

        &.date .input__field {
          height: auto;
        }

        &.date .input__wrapper {
          height: var(--hmwc-input-height-small);
          box-sizing: border-box;
        }

        &.prefix {
          & .input__control {
            padding-left: var(--hmwc-spacing-2x-large);
          }
        }

        &.suffix {
          & .input__control {
            padding-right: var(--hmwc-spacing-2x-large);
          }
        }
        & .input__control {
          height: calc(var(--hmwc-input-height-small) - var(--hmwc-input-border-width) * 2);
          padding: 0 var(--hmwc-input-spacing-small);
        }
      }

      &.number {
        --input-width: 6rem;

        &.units {
          --input-width: 3rem;
        }
      }

      &.pill {
        --input-radius: var(--hmwc-input-height-small);
      }

      & textarea {
        padding: var(--hmwc-input-spacing-small) !important;
        min-height: var(--hmwc-input-height-small);
      }

      & .input__prefix {
        padding-inline-start: var(--hmwc-input-spacing-small);
      }

      & .input__suffix {
        padding-inline-end: var(--hmwc-input-spacing-small);
      }

      &.clearable .input__clear,
      &.toggle .input__toggle {
        width: calc(1em + var(--hmwc-input-spacing-small) * 2);
      }

      & .input__calendar_toggle {
        & hmwc-button {
          --icon-size: reset;
          display: flex;
          align-self: stretch;

          &::part(base) {
            padding-top: 0.075rem;
            padding-bottom: 0.075rem;
            height: 100%;
          }
        }
      }
    }

    &.medium {
      & .input__field,
      & .input__control,
      & .input__label {
        font-size: calc(0.95 * var(--hmwc-button-font-size-medium));
      }

      &:not(.textarea) {
        & .input__field {
          height: var(--hmwc-input-height-medium);
        }

        &.date .input__field {
          height: auto;
        }

        &.date .input__wrapper {
          height: var(--hmwc-input-height-medium);
          box-sizing: border-box;
        }

        &.prefix {
          & .input__control {
            padding-left: var(--hmwc-spacing-3x-large);
          }
        }

        &.suffix {
          & .input__control {
            padding-right: var(--hmwc-spacing-3x-large);
          }
        }

        & .input__control {
          height: calc(var(--hmwc-input-height-medium) - var(--hmwc-input-border-width) * 2);
          padding: 0 var(--hmwc-input-spacing-medium);
        }
      }

      &.pill {
        --input-radius: var(--hmwc-input-height-medium);
      }

      & textarea {
        padding: var(--hmwc-input-spacing-medium) !important;
        min-height: var(--hmwc-input-height-medium);
      }

      & .input__prefix {
        padding-inline-start: var(--hmwc-input-spacing-medium);
      }

      & .input__suffix {
        padding-inline-end: var(--hmwc-input-spacing-medium);
      }

      &.clearable .input__clear,
      &.toggle .input__toggle {
        width: calc(1em + var(--hmwc-input-spacing-medium) * 2);
      }
    }

    &.large {
      --input-radius: var(--hmwc-input-border-radius-large);

      & .input__field,
      & .input__control,
      & .input__label {
        font-size: var(--hmwc-input-font-size-large);
      }

      &:not(.textarea) {
        & .input__field {
          height: var(--hmwc-input-height-large);
        }

        &.date .input__field {
          height: auto;
        }

        &.date .input__wrapper {
          height: var(--hmwc-input-height-large);
          box-sizing: border-box;
        }

        &.prefix {
          & .input__control {
            padding-left: var(--hmwc-spacing-3x-large);
          }
        }

        &.suffix {
          & .input__control {
            padding-right: var(--hmwc-spacing-3x-large);
          }
        }

        & .input__control {
          height: calc(var(--hmwc-input-height-large) - var(--hmwc-input-border-width) * 2);
          padding: 0 var(--hmwc-input-spacing-large);
        }
      }

      &.pill {
        --input-radius: var(--hmwc-input-height-large);
      }

      & textarea {
        padding: var(--hmwc-input-spacing-large) !important;
        min-height: var(--hmwc-input-height-large);
      }

      & .input__prefix {
        padding-inline-start: var(--hmwc-input-spacing-large);
      }

      & .input__suffix {
        padding-inline-end: var(--hmwc-input-spacing-large);
      }

      &.clearable .input__clear,
      &.toggle .input__toggle {
        width: calc(1em + var(--hmwc-input-spacing-large) * 2);
      }
    }

    &.secondary {
      &.disabled {
        & .input__field {
          opacity: 1;

          & .input__control {
            opacity: 0.5;
          }
        }
        & .input__prefix,
        & .input__suffix {
          color: var(--hmwc-color-neutral-600);
          opacity: 0.9;
        }
      }

      &:not(.disabled) {
        --input-background: var(--hmwc-color-neutral-100);

        & .input__field {
          opacity: 0.5;
        }
      }

      & .input__prefix {
        border-right: inherit;
      }

      & .input__suffix {
        border-left: inherit;
      }
    }

    &.invalid:not(.disabled) {
      --input-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color-invalid);
      --input-border-color: var(--hmwc-input-border-color-invalid);
      --input-shadow: 0 0 0 var(--hmwc-focus-ring-width) var(--hmwc-input-focus-ring-color-invalid);

      /** invalid + hover (not focused) */
      &:not(:has(.input__field:focus-within)):has(.input__field:hover),
      &:not(:has(.input__field:focus-within)):has(.input__calendar_toggle:hover) {
        --input-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color-invalid-hover);
        --input-border-color: var(--hmwc-input-border-color-invalid-hover);

        & .input__field {
          box-shadow: 0 2px 8px hsl(from var(--hmwc-input-border-color-invalid) h s l / 0.2);
        }

        &.date .input__field {
          box-shadow: none;
        }

        &.date .input__wrapper {
          box-shadow: 0 4px 12px hsl(from var(--hmwc-input-border-color-invalid) h s l / 0.2);
        }

        &.underline {
          --input-background: transparent;
          --input-border: none;
          --input-shadow: none;

          & .input__field {
            border-bottom: 1px solid var(--hmwc-input-border-color-invalid-hover);
            box-shadow: 0 2px 4px -2px hsl(from var(--hmwc-input-border-color-invalid) h s l / 0.3);
          }
        }

        &.underline.date {
          & .input__wrapper {
            box-shadow: none;
          }

          & .input__field {
            border: none;
            border-bottom: 1px solid var(--hmwc-input-border-color-invalid-hover);
            box-shadow: 0 2px 4px -2px hsl(from var(--hmwc-input-border-color-invalid) h s l / 0.3);
          }
        }

        &.filled {
          --input-background: var(--hmwc-input-filled-background-color-hover);
        }
      }

      &:has(.input__field:focus-within) {
        --input-shadow: 0 0 0 var(--hmwc-focus-ring-width) var(--hmwc-input-focus-ring-color-invalid);
        --input-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color-invalid);
        --input-border-color: var(--hmwc-input-border-color-invalid);
        --input-outline: var(--hmwc-focus-ring-style) var(--hmwc-focus-ring-width) var(--hmwc-focus-ring-color-invalid);

        & .input__field {
          box-shadow: 0 0 0 var(--hmwc-focus-ring-width) var(--hmwc-input-focus-ring-color-invalid);
        }

        & .input__prefix,
        & .input__suffix {
          &::slotted(hmwc-icon),
          & hmwc-icon:not([success]):not([danger]) {
            --icon-color: var(--hmwc-input-border-color-invalid);
            animation: none;
          }
        }

        &.date .input__field {
          box-shadow: none;
        }

        &.date .input__wrapper {
          box-shadow: 0 0 0 var(--hmwc-focus-ring-width) var(--hmwc-input-focus-ring-color-invalid);
        }

        &.underline .input__field {
          border-bottom: 1px solid var(--hmwc-input-border-color-invalid);
          box-shadow: 0 2px 6px -2px var(--hmwc-input-focus-ring-color-invalid);
        }

        &.underline.date {
          & .input__wrapper {
            box-shadow: none;
          }

          & .input__field {
            border: none;
            border-bottom: 1px solid var(--hmwc-input-border-color-invalid);
            box-shadow: 0 2px 6px -2px var(--hmwc-input-focus-ring-color-invalid);
          }
        }
      }

      & .input__help {
        color: var(--hmwc-input-border-color-invalid);
      }

      & .input__prefix,
      & .input__suffix {
        &::slotted(hmwc-icon),
        & hmwc-icon:not([success]):not([danger]) {
          --icon-color: var(--hmwc-input-border-color-invalid);
        }
      }
    }

    &.textarea {
      & .input__control {
        resize: vertical;
        height: auto;
      }
    }

    &.calendar {
      & .input__calendar {
        display: block;
      }
    }

    /* When the calendar popup is open the component is logically
       focused, so show the focus ring on the date wrapper even if
       the actual DOM focus has moved into the calendar. */
    &.date.calendar:not(.disabled) {
      --input-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color-focus);
      --input-border-color: var(--hmwc-input-border-color-focus);

      & .input__wrapper {
        box-shadow: 0 0 0 var(--hmwc-focus-ring-width) var(--hmwc-input-focus-ring-color);
      }

      /* Keep the calendar icon in its active/hover color while
         the calendar popup is open so it stays visually connected
         to the open dropdown. */
      & .input__calendar_toggle hmwc-button::part(base) {
        color: var(--hmwc-color-primary-400) !important;
        --icon-color: var(--hmwc-color-primary-400) !important;
        --button-color: var(--hmwc-color-primary-400) !important;
      }
    }
  }
`;var C=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},x=class n extends F{constructor(){super(...arguments),this.initialValueDateParsed=!1,this.autoFocusLost=!1,this.isManuallyTyping=!1,this._isDeleting=!1,this.lockCalendarNavigation=!1,this.dates=[],this.type="text",this.dateFormat="MM/DD/YYYY",this.open=!1,this._calendarLoseFocus=null}handleValueChange(){if(this.type==="tel"){let t=this.value.toString().split("").filter(e=>e!=="-");t.length===3?this.value=`${t.slice(0,3).join("")}-`:t.length===6?this.value=`${t.slice(0,3).join("")}-${t.slice(3,6).join("")}-`:t.length===10?this.value=`${t.slice(0,3).join("")}-${t.slice(3,6).join("")}-${t.slice(6).join("")}`:t.length===11?this.value=`${t[0]}-${t.slice(1,4).join("")}-${t.slice(4,7).join("")}-${t.slice(7).join("")}`:this.value=this.value.toString()}if(this.type==="date"){if(!this.value){this.dates=[],this.initialValueDateParsed=!1;return}if(!this.isManuallyTyping&&!this.initialValueDateParsed&&(this.initialValueDateParsed=!0,!isNaN(Date.parse(this.value)))){let t=new Date(this.value);this.updateDates([t])}}}handleValueMaxLength(){this.type!=="date"&&(this.enforceMaxLength(),this.checkDesiredLength())}handleCalendarToggle(){this.type==="date"&&(this._calendarLoseFocus&&(document.removeEventListener("mousedown",this._calendarLoseFocus),this._calendarLoseFocus=null),this.open&&(this._calendarLoseFocus=t=>{t.composedPath().includes(this)||(this.open=!1,this.emit("hmwc-hide",{}))},document.addEventListener("mousedown",this._calendarLoseFocus)))}handleLabelChange(){this.toggleAttribute("no-label",!this.label)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}clear(){this.value=this.input.value="",this.dates=[],this.valid=!1,this.invalid=!1,this.error="",this.emit("hmwc-change"),this.emit("hmwc-input")}getDates(){return this.dates}checkValidity(){let t=String(this.value??"");return this.required&&!t.trim()||this.minlength!=null&&t.trim().length>0&&t.length<this.minlength?!1:this.input?.checkValidity()}reportValidity(){let t=String(this.value??"");return this.required&&!t.trim()?(this.invalid=!0,this.emit("hmwc-invalid"),!1):this.minlength!=null&&t.trim().length>0&&t.length<this.minlength?(this.invalid=!0,this.error=`Value must be at least ${this.minlength} characters`,this.emit("hmwc-invalid"),!1):this.input?.reportValidity()}get validationMessage(){return this.input.validationMessage}set validationMessage(t){this.input.setCustomValidity(t)}formatDate(t){let e=t.getFullYear().toString(),r=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getDate().toString().padStart(2,"0");switch(this.dateFormat){case"YYYY-MM-DD":return`${e}-${r}-${o}`;case"YYYY/MM/DD":return`${e}/${r}/${o}`;case"DD/MM/YYYY":return`${o}/${r}/${e}`;case"DD-MM-YYYY":return`${o}-${r}-${e}`;case"MM-DD-YYYY":return`${r}-${o}-${e}`;case"MM/DD/YYYY":default:return`${r}/${o}/${e}`}}parseDate(t){if(!t||!t.trim())return null;let e=this.parseDateByFormat(t);if(e)return e;let r=Date.parse(t);if(!isNaN(r))return new Date(r);let o=[/^(\d{1,2})[\\-](\d{1,2})[\\-](\d{4})$/,/^(\d{4})[\\-](\d{1,2})[\\-](\d{1,2})$/,/^(\d{1,2})[\\-](\d{1,2})[\\-](\d{2})$/];for(let i of o){let s=t.match(i);if(s){let l,h,d;i===o[1]?[,l,h,d]=s.map(Number):i===o[2]?([,h,d,l]=s.map(Number),l+=2e3):[,h,d,l]=s.map(Number);let g=new Date(l,h-1,d);if(g.getFullYear()===l&&g.getMonth()===h-1&&g.getDate()===d)return g}}return null}parseDateByFormat(t){let e=this.dateFormat.includes("/")?"/":"-",r=t.split(e);if(r.length!==3)return null;let o=this.dateFormat.split(e),i=o.findIndex(S=>S==="YYYY"),s=o.findIndex(S=>S==="MM"),l=o.findIndex(S=>S==="DD");if(i===-1||s===-1||l===-1)return null;let h=parseInt(r[i],10),d=parseInt(r[s],10),g=parseInt(r[l],10);if(isNaN(h)||isNaN(d)||isNaN(g))return null;let v=new Date(h,d-1,g);return v.getFullYear()===h&&v.getMonth()===d-1&&v.getDate()===g?v:null}updateDates(t,e=!1){if(!t.length){e&&(this.dates=[]);return}t.length===0?this.value="":t.length===1?(t[0]instanceof Date||(t[0]=new Date(t[0])),e||(this.value=this.formatDate(t[0])),this.month=t[0].getMonth(),this.year=t[0].getFullYear()):t.length>1&&(e||(this.value=`Multiple Dates Selected (${t.length})`)),this.dates=t}handleFocus(){this.type==="date"&&(this.isManuallyTyping=!0),this.emit("hmwc-focus")}handleBlur(){if(this.type==="date"&&this.isManuallyTyping&&(this.parseAndUpdateDate(),this.isManuallyTyping=!1),this.type==="email"&&this.value){let e=String(this.value).trim();e!==this.value&&(this.value=e,this.input&&(this.input.value=e)),this.validateEmail()}this.type==="filepath"&&this.validateFilePath(),this.required&&!String(this.value??"").trim()?(this.invalid=!0,this.emit("hmwc-invalid")):this.required&&this.invalid&&(this.invalid=!1,this.error="");let t=String(this.value??"");this.minlength!=null&&t.trim().length>0&&t.length<this.minlength?(this.invalid=!0,this.error=`Value must be at least ${this.minlength} characters`,this.emit("hmwc-invalid")):this.minlength!=null&&this.invalid&&t.length>=this.minlength&&(this.invalid=!1,this.error=""),this.emit("hmwc-blur"),this.autoFocusLost=!0}handleInput(t){if(this.type==="date"&&this.isManuallyTyping){let r=this.input.value,o=this.input.selectionStart??r.length,i=this.countDigitsBefore(r,o),s=r.replace(/\D/g,""),l=!this._isDeleting,h=this.formatDateDigits(s,l);h!==r&&(this.input.value=h),this.value=h;let d=this.findCursorPosition(h,i);this.input.setSelectionRange(d,d)}else this.value=this.input.value;this.type==="number"&&this.input.validity?.badInput&&(this.input.value="",this.value="");let e=t?.inputType;if((e==="insertReplacementText"||e==="insertFromPaste")&&(this.sanitizeAutofill(),this.invalid)){this.emit("hmwc-input",{detail:{value:this.value}});return}if(this.enforceMaxLength(),this.checkDesiredLength(),this.invalid){let r=String(this.value??""),o=!this.required||r.trim().length>0,i=this.minlength==null||r.length>=this.minlength;o&&i&&(this.invalid=!1,this.error="")}this.emit("hmwc-input",{detail:{value:this.value}})}handleChange(){this.input.value&&(this.value=this.input.value),this.enforceMaxLength(),this.type==="date"&&this.parseAndUpdateDate(),this.type==="email"&&this.value&&this.validateEmail(),this.type==="filepath"&&this.value&&this.validateFilePath(),this.checkDesiredLength(),this.emit("hmwc-change")}handleKeyDown(t){this.type==="date"&&(t.key==="Backspace"||t.key==="Delete"?this._isDeleting=!0:this._isDeleting=!1,t.key==="Enter"&&(t.preventDefault(),this.parseAndUpdateDate(),this.blur()),t.key==="Escape"&&(t.preventDefault(),this.dates.length===1?this.value=this.formatDate(this.dates[0]):this.dates.length>1?this.value=`Multiple Dates Selected (${this.dates.length})`:this.value="",this.input.value=this.value,this.blur()),t.key.length===1&&!t.ctrlKey&&!t.metaKey&&!/\d/.test(t.key)&&t.preventDefault())}parseAndUpdateDate(){let t=this.input.value;if(!t||!t.trim()){this.updateDates([],!0);return}let e=this.parseDate(t);e?(this.updateDates([e],!0),this.value=this.formatDate(e),this.input.value=this.value,this.invalid=!1,this.error=""):(this.invalid=!0,this.error=`Invalid date format. Try ${this.dateFormat}`)}validateFilePath(){let t=this.value;if(!t||!t.trim()){this.invalid=!0,this.error="File path cannot be blank or whitespace only",this.emit("hmwc-invalid");return}let e=t.trim();if(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/u.test(e)){this.invalid=!0,this.error="File path cannot contain emojis",this.emit("hmwc-invalid");return}if(/[<>"|?*]/.test(e)||e.includes("\0")){this.invalid=!0,this.error='Path contains invalid characters: < > " | ? *',this.emit("hmwc-invalid");return}let i=e.replace(/\\/g,"/"),s=/^[a-zA-Z]:\//.test(i),l=i.startsWith("//"),h=i.startsWith("/")&&!l,d=/^\.{0,2}\//.test(i)||/^[^/]/.test(i);if(!(s||l||h||d)){this.invalid=!0,this.error="Please enter a valid file path",this.emit("hmwc-invalid");return}let g=l?i.slice(2):s?i.slice(3):h?i.slice(1):i;if(/\/{2,}/.test(g)){this.invalid=!0,this.error="Path contains empty segments",this.emit("hmwc-invalid");return}if(l&&i.slice(2).split("/").filter(Boolean).length<2){this.invalid=!0,this.error="UNC path must include a server and share name (e.g. \\\\server\\share)",this.emit("hmwc-invalid");return}this.invalid=!1,this.error=""}validateEmail(){let t=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e=this.value.trim();e&&(t.test(e)?(this.invalid=!1,this.error=""):(this.invalid=!0,this.error="Please enter a valid email address",this.emit("hmwc-invalid")))}getEffectiveMaxLength(){return this.maxlength!=null?this.maxlength:n.MAX_LENGTH_BY_TYPE[this.type]??n.DEFAULT_MAX_LENGTH}enforceMaxLength(){let t=this.getEffectiveMaxLength(),e=String(this.value??"");if(e.length<=t)return!1;let r=e.slice(0,t);return this.value=r,this.input&&(this.input.value=r),this.invalid=!0,this.error=`Value exceeds maximum length of ${t} characters`,this.emit("hmwc-invalid"),!0}checkDesiredLength(){if(this.minlength==null||this.maxlength==null||this.minlength!==this.maxlength)return;String(this.value??"").length===this.minlength?(this.valid=!0,this.invalid=!1):this.valid=!1}sanitizeAutofill(){let t=String(this.value??"");if(t)switch(this.enforceMaxLength(),this.type){case"email":{/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t.trim())||(this.value=this.input.value="",this.invalid=!0,this.error="Autofill value is not a valid email address",this.emit("hmwc-invalid"));break}case"tel":{/^[\d\s+().-]+$/.test(t)||(this.value=this.input.value="",this.invalid=!0,this.error="Autofill value is not a valid phone number",this.emit("hmwc-invalid"));break}case"number":{isNaN(Number(t))&&(this.value=this.input.value="",this.invalid=!0,this.error="Autofill value is not a valid number",this.emit("hmwc-invalid"));break}case"filepath":{this.validateFilePath(),this.invalid&&(this.value=this.input.value="");break}case"url":{try{new URL(t)}catch{this.value=this.input.value="",this.invalid=!0,this.error="Autofill value is not a valid URL",this.emit("hmwc-invalid")}break}default:break}}getDateFormatInfo(){let t=this.dateFormat.includes("/")?"/":"-",e=this.dateFormat.split(t).map(r=>r.length);return{separator:t,partLengths:e}}formatDateDigits(t,e=!1){let{separator:r,partLengths:o}=this.getDateFormatInfo(),i=o.reduce((d,g)=>d+g,0),s=t.slice(0,i),l="",h=0;for(let d=0;d<o.length&&h<s.length;d++){d>0&&(l+=r);let g=s.slice(h,h+o[d]);l+=g,h+=o[d]}if(e&&s.length>0&&s.length<i){let d=0;for(let g=0;g<o.length;g++)if(d+=o[g],s.length===d&&g<o.length-1){l+=r;break}}return l}countDigitsBefore(t,e){let r=0;for(let o=0;o<e&&o<t.length;o++)/\d/.test(t[o])&&r++;return r}findCursorPosition(t,e){let r=0;for(let o=0;o<t.length;o++){if(r===e){for(;o<t.length&&!/\d/.test(t[o]);)o++;return o}/\d/.test(t[o])&&r++}return t.length}handlePaste(t){if(this.type==="number"){let Jt=t.clipboardData?.getData("text");if(!Jt)return;t.preventDefault();let Xe=Number(Jt.trim());if(!isNaN(Xe)&&Jt.trim()!==""){let Dt=String(Xe);this.input.value=Dt,this.value=Dt,this.emit("hmwc-input",{detail:{value:this.value}});return}let Mt="",pe=!1;for(let Dt of Jt.trim())Dt==="-"&&Mt===""?Mt+=Dt:Dt==="."&&!pe?(pe=!0,Mt+=Dt):Dt>="0"&&Dt<="9"&&(Mt+=Dt);Mt&&!isNaN(Number(Mt))&&Mt!=="-"&&Mt!=="."&&(this.input.value=Mt,this.value=Mt,this.emit("hmwc-input",{detail:{value:this.value}}));return}if(this.type!=="date")return;let e=t.clipboardData?.getData("text");if(!e)return;t.preventDefault();let r=this.parseDate(e);if(r){let Jt=this.formatDate(r);this.input.value=Jt,this.value=Jt,this.updateDates([r],!0),this.invalid=!1,this.error="",this.input.setSelectionRange(Jt.length,Jt.length),this.emit("hmwc-input",{detail:{value:this.value}});return}let o=this.input.value,i=this.input.selectionStart??o.length,s=this.input.selectionEnd??i,l=o.slice(0,i),h=o.slice(s),g=(l+e+h).replace(/\D/g,""),v=this.formatDateDigits(g,!0),S=e.replace(/\D/g,"").length,Z=this.countDigitsBefore(o,i),qt=this.findCursorPosition(v,Z+S);this.input.value=v,this.value=v,this.input.setSelectionRange(qt,qt),this.emit("hmwc-input",{detail:{value:this.value}})}handleClick(){!this.disabled&&this.type!=="date"||this.type==="date"&&!this.isManuallyTyping&&(this.open=!this.open)}handleClear(){this.clear(),this.input.focus()}handleToggle(){this.visible=!this.visible}handleCalendarChange(t){let e=t.detail.value;this.updateDates(e),this.multiSelect||document.addEventListener("mouseup",()=>{this.open=!1},{once:!0,capture:!0}),this.emit("hmwc-change")}connectedCallback(){super.connectedCallback(),this.toggleAttribute("no-label",!this.label),this.updateDates(this.dates),this.type==="tel"&&(this.pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}"),this.type==="email"&&!this.pattern&&(this.pattern="[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}"),this.type==="filepath"&&!this.pattern&&(this.pattern='([a-zA-Z]:\\\\|\\\\\\\\|/|\\.\\.?/|[^<>"|?*\\x00])([^<>"|?*\\x00]*)'),this.type==="filepath"&&!this.placeholder&&(this.placeholder="C:\\folder\\file.txt or /path/to/file"),!this.sm&&!this.md&&!this.lg&&(this.md=!0),this.type==="password"&&this.minlength===void 0&&(this.minlength=8),this.autofocus||(this.autoFocusLost=!0),this.type==="date"&&!this.placeholder&&(this.placeholder=this.dateFormat),(this.month||this.month&&this.year)&&(this.lockCalendarNavigation=!0),this.maxlength==null&&(this.maxlength=n.MAX_LENGTH_BY_TYPE[this.type]??n.DEFAULT_MAX_LENGTH),this.autocomplete==null&&["filepath","number"].includes(this.type)&&(this.autocomplete="off")}disconnectedCallback(){super.disconnectedCallback(),this._calendarLoseFocus&&(document.removeEventListener("mousedown",this._calendarLoseFocus),this._calendarLoseFocus=null)}render(){let t=this.textarea?Be`textarea`:Be`input`,e=this.type==="password"&&this.visible||this.type==="date"||this.type==="filepath",r=f({input:!0,"no-label":!this.label,small:!!this.sm,medium:!!this.md,large:!!this.lg,filled:!!this.filled,underline:!!this.underline,prefix:!!this.prefix,suffix:!!this.suffix||!!this.toggle,units:!this.units,pill:!!this.pill,toggle:!!this.toggle,clearable:!!this.clearable,textarea:!!this.textarea,disabled:!!this.disabled,date:this.type==="date",number:this.type==="number","no-spin":this.type==="number"&&(!this.max||Number(this.max)>100)||this.minlength!=null&&this.maxlength!=null&&this.minlength===this.maxlength&&this.minlength>3,calendar:this.open,valid:!!this.valid,invalid:!!this.invalid});return J`
      <div part='base' class=${r}>

        <!-- Label -->
        <label part="label" class="input__label" for='hmwc-input' aria-hidden=${!this.label}>
          <slot>${this.label}</slot>
        </label>

        <!-- Styling Wrappers -->
        <span class="input__wrapper">

            <!-- Calendar Toggle Button -->
            ${this.type==="date"&&!this.suffix?J`
                    <slot name="calendar-toggle" part="calendar-toggle" class="input__calendar_toggle">
                      <hmwc-button
                        ?sm=${this.sm}
                        ?lg=${this.lg}
                        ?disabled=${this.disabled}
                        fit
                        icon="calendar"
                        @hmwc-click=${()=>this.open=!this.open}></hmwc-button>
                    </slot>
                  `:""}

            <!-- Input Box -->
            <div class='input__field' part="field">

              <!-- Prefix Icon -->
              <slot name="prefix" part="prefix" class="input__prefix">
                ${this.prefix?J`<hmwc-icon src=${this.prefix}></hmwc-icon>`:""}
              </slot>

              <!-- Input/Textarea Element -->
              <${t}
                part="input"
                id='hmwc-input'
                class="input__control"
                .value=${ee(this.value)||""}
                name=${y(this.name)}
                title=${this.title}
                type=${this.textarea?void 0:e?"text":this.type}
                placeholder=${y(this.placeholder)}
                pattern=${y(this.pattern)}
                ?readonly=${this.readonly}
                ?required=${this.required}
                ?autofocus=${this.autofocus}
                minlength=${y(this.minlength)}
                maxlength=${y(this.maxlength)}
                min=${y(this.min)}
                max=${y(this.max)}
                rows=${y(this.rows)}
                autocapitalize=${y(this.autocapitalize)}
                autocomplete=${y(this.autocomplete)}
                autocorrect=${y(this.autocorrect)}
                spellcheck=${y(this.spellcheck)}
                aria-describedby="help"
                aria-label="input"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
                @input=${this.handleInput}
                @change=${this.handleChange}
                @click=${this.handleClick}
                @keydown=${this.handleKeyDown}
                @paste=${this.handlePaste}
                /></${t}>

              <!-- Suffix Icon -->
               ${this.suffix||this.loading||this.valid||this.invalid?J` <slot
                       name="suffix"
                       part="suffix"
                       class="input__suffix"
                       @click=${this.type==="date"?()=>this.open=!this.open:void 0}
                       style=${this.type==="date"?"cursor: pointer;":""}>
                       ${this.suffix?J`<hmwc-icon src=${this.suffix}></hmwc-icon>`:""}
                       ${!this.valid&&this.loading?J`<hmwc-spinner primary></hmwc-spinner>`:""}
                       ${this.loading?"":J` ${this.valid?J`<hmwc-icon success src="check-circle-fill"></hmwc-icon>`:""}
                           ${this.invalid&&!this.valid?J`<hmwc-icon danger src="x-circle-fill"></hmwc-icon>`:""}`}
                     </slot>`:""}

             ${this.units?J`<div part="units" class="input__units">${this.units}</div>`:""}

              <!-- Clear Button -->
               ${!this.loading&&this.clearable&&this.value&&!this.loading&&!this.valid?J` <slot name="clear" part="clear" class="input__clear">
                       <hmwc-button basic sm icon="x-circle-fill" @hmwc-click=${this.handleClear}></hmwc-button>
                     </slot>`:""}

              <!-- Password Visibility Toggle -->
              <slot name='toggle' part='toggle' class='input__toggle'>
                ${this.toggle?J` <hmwc-button basic sm icon=${this.visible?"eye-slash":"eye"} @hmwc-click=${this.handleToggle}> </hmwc-button> `:""}
              </slot>
            </div>


            <!-- Help Text -->
            <slot name="help" part="help" class="input__help" aria-hidden=${!this.help}>
                ${this.invalid&&this.error||this.help}
            </slot>


            <!-- Calendar -->
            ${this.type==="date"?J` <div part="calendar" class="input__calendar" @mouseup=${o=>o.stopPropagation()}>
                    <hmwc-calendar
                      ?multiple=${this.multiSelect}
                      .value=${this.dates instanceof Array?this.dates:[this.dates]}
                      month=${y(this.month)}
                      year=${y(this.year)}
                      ?navigation=${!this.lockCalendarNavigation}
                      @hmwc-change=${this.handleCalendarChange}
                      @blur=${()=>this.emit("hmwc-hide")}></hmwc-calendar>
                  </div>`:""}

        </span>

    </div>
    `}};x.styles=ki;x.dependencies=[_,w,U,X];x.DEFAULT_MAX_LENGTH=2e3;x.MAX_LENGTH_BY_TYPE={email:254,tel:17,url:2083,filepath:4096,number:20,password:128};C([b()],x.prototype,"initialValueDateParsed",void 0);C([b()],x.prototype,"autoFocusLost",void 0);C([b()],x.prototype,"isManuallyTyping",void 0);C([b()],x.prototype,"_isDeleting",void 0);C([b()],x.prototype,"lockCalendarNavigation",void 0);C([a({type:Array,reflect:!0})],x.prototype,"dates",void 0);C([a({type:String,reflect:!0})],x.prototype,"type",void 0);C([a({type:Boolean,reflect:!0})],x.prototype,"fluid",void 0);C([a({type:Boolean,reflect:!0})],x.prototype,"filled",void 0);C([a({type:Boolean,reflect:!0})],x.prototype,"pill",void 0);C([a({type:Boolean,reflect:!0})],x.prototype,"underline",void 0);C([a({type:String})],x.prototype,"prefix",void 0);C([a({type:String})],x.prototype,"suffix",void 0);C([a({type:String})],x.prototype,"pattern",void 0);C([a({type:String,attribute:"date-format"})],x.prototype,"dateFormat",void 0);C([a({type:Boolean})],x.prototype,"multiSelect",void 0);C([a({type:String,reflect:!0})],x.prototype,"units",void 0);C([a({type:Boolean,reflect:!0})],x.prototype,"loading",void 0);C([a({type:Boolean})],x.prototype,"valid",void 0);C([a({type:String})],x.prototype,"help",void 0);C([a({type:Boolean,reflect:!0})],x.prototype,"clearable",void 0);C([a({type:Boolean,reflect:!0})],x.prototype,"textarea",void 0);C([a({type:String})],x.prototype,"placeholder",void 0);C([a({type:Boolean,reflect:!0})],x.prototype,"readonly",void 0);C([a({type:Boolean,reflect:!0})],x.prototype,"toggle",void 0);C([a({type:Boolean})],x.prototype,"visible",void 0);C([a({type:Number})],x.prototype,"rows",void 0);C([a({type:Number})],x.prototype,"minlength",void 0);C([a({type:Number})],x.prototype,"maxlength",void 0);C([a({type:String})],x.prototype,"min",void 0);C([a({type:String})],x.prototype,"max",void 0);C([a({type:Number})],x.prototype,"month",void 0);C([a({type:Number})],x.prototype,"year",void 0);C([a({type:String})],x.prototype,"autocapitalize",void 0);C([a({type:Boolean,reflect:!0})],x.prototype,"autocorrect",void 0);C([a({type:String})],x.prototype,"autocomplete",void 0);C([a({type:Boolean})],x.prototype,"spellcheck",void 0);C([a({type:String})],x.prototype,"inputmode",void 0);C([b()],x.prototype,"open",void 0);C([T(".input__control")],x.prototype,"input",void 0);C([T("hmwc-calendar")],x.prototype,"datepicker",void 0);C([p("value")],x.prototype,"handleValueChange",null);C([p("value")],x.prototype,"handleValueMaxLength",null);C([p("open")],x.prototype,"handleCalendarToggle",null);C([p("label")],x.prototype,"handleLabelChange",null);x.define("hmwc-input",x);var $i=m`
  :host {
    --submenu-offset: -2px;
    --menu-item-spacing: var(--hmwc-spacing-2x-small) var(--hmwc-spacing-small) var(--hmwc-spacing-2x-small) var(--hmwc-spacing-x-small);
    --menu-item-font-size: calc(1.05 * var(--hmwc-font-size-small));
    --menu-item-letter-spacing: var(--hmwc-letter-spacing-normal);
    --menu-item-background: var(--hmwc-color-neutral-0);

    display: contents;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--hmwc-font-sans);
    font-size: var(--menu-item-font-size);
    font-weight: var(--hmwc-font-weight-semibold);
    line-height: var(--hmwc-line-height-normal);
    letter-spacing: var(--menu-item-letter-spacing);
    color: var(--hmwc-color-neutral-900);
    padding: var(--menu-item-spacing);
    transition: var(--hmwc-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
    &:hover:not(.disabled, :focus-visible),
    [aria-expanded='true'] {
      background-color: var(--hmwc-color-neutral-100);
      color: var(--hmwc-color-neutral-1000);
    }

    & .menu-item__label {
      flex: 1 1 auto;
      display: inline-block;
      text-overflow: ellipsis;
      color: var(--hmwc-color-neutral-750);
      overflow: hidden;
      letter-spacing: var(--menu-item-letter-spacing);
    }

    & .menu-item__prefix,
    & .menu-item__suffix {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      --icon-color: var(--hmwc-color-neutral-700);
    }

    & .menu-item__check,
    & .menu-item__chevron {
      flex: 0 0 auto;
      display: var(--menu-item-placeholder-display, flex);
      align-items: center;
      justify-content: center;
      visibility: hidden;

      hmwc-checkbox {
        pointer-events: none;
      }
    }

    & .menu-item__chevron {
      width: 1.5rem;
      padding-inline-end: var(--hmwc-spacing-x-small);
    }

    & .menu-item__spinner {
      position: absolute;
      font-size: 0.8rem;
      top: calc(50% - 0.65rem);
      left: 0.5rem;
      opacity: 1;
    }

    &.loading {
      outline: none;
      cursor: wait;
      opacity: 0.5;
    }

    &.checked {
      & .menu-item__check {
        visibility: visible;
      }
    }

    /* Show the check area whenever a checkbox is present (checkable items) */
    & .menu-item__check:has(hmwc-checkbox) {
      visibility: visible;
      margin-inline-end: var(--hmwc-spacing-2x-small);
    }

    &.prefix {
      & .menu-item__prefix {
        margin-inline-start: var(--hmwc-spacing-3x-small);
        margin-inline-end: var(--hmwc-spacing-small);
      }
    }

    &.suffix {
      & .menu-item__suffix {
        margin-inline-start: var(--hmwc-spacing-small);

        &::slotted(hmwc-badge) {
          margin-inline-start: var(--hmwc-spacing-3small);
        }
      }
    }

    &.disabled {
      outline: none;
      opacity: 0.5;
      cursor: not-allowed;

      &:hover {
        background-color: transparent;
        color: var(--hmwc-color-neutral-700);
      }
    }

    &.active {
      background-color: var(--hmwc-color-primary-50, hsl(from var(--hmwc-color-primary-600) h s l / 0.08));
      color: var(--hmwc-color-primary-700);

      & .menu-item__label {
        color: var(--hmwc-color-primary-700);
        font-weight: var(--hmwc-font-weight-bold);
      }

      &:hover:not(.disabled, :focus-visible) {
        background-color: var(--hmwc-color-primary-100, hsl(from var(--hmwc-color-primary-600) h s l / 0.14));
      }
    }

    &.small {
      --menu-item-spacing: var(--menu-item-spacing-override, var(--hmwc-spacing-3x-small));
      --menu-item-letter-spacing: var(--hmwc-letter-spacing-normal);
      --menu-item-font-size: var(--hmwc-font-size-small);
    }

    &.submenu {
      & .menu-item__label {
        margin-inline-end: 1.5em;
      }

      & .menu-item__chevron {
        visibility: visible;
        padding-left: var(--hmwc-spacing-small);
      }

      & .menu-item__submenu {
        position: absolute;
        left: 100%;
        top: -20%;
        box-shadow: var(--hmwc-shadow-large);
        z-index: var(--hmwc-z-index-dropdown);
        margin-left: var(--submenu-offset);
      }
    }

    &.center {
      text-align: center;
    }

    &:focus-visible {
      outline: none;
      background-color: var(--hmwc-color-primary-600);
      color: var(--hmwc-color-neutral-0);
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;var zt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},A=class extends u{constructor(){super(...arguments),this.expanded=!1,this.isExpanded=()=>{if(!this.item)return;let t=this.item.matches(":hover");return y(this.submenu)&&t},this.handleClick=t=>{if(this.disabled){t.preventDefault(),t.stopImmediatePropagation();return}this.emit("hmwc-select",{detail:{value:this.value}}),this.checkable&&(this.checked=!this.checked,this.emit("hmwc-change",{detail:{value:this}}))},this.handleMouseOver=t=>{t.stopPropagation(),this.closest("hmwc-menu")?.isTypeaheadActive||this.focus(),this.emit("hmwc-focus"),(this.submenu||this.controllers.slot.test("submenu"))&&(this.expanded=!0)},this.handleMouseOut=t=>{t.stopPropagation(),this.emit("hmwc-blur"),(this.submenu||this.controllers.slot.test("submenu"))&&(this.expanded=!1)}}handleExpandedChange(){if(!this.controllers.slot.test("submenu"))return;let t=this.controllers.slot.get("submenu")[0];t.active=this.expanded}render(){let t=!!this.submenu||this.controllers.slot.test("submenu"),e=f({"menu-item":!0,expanded:this.expanded,checked:!!this.checked,loading:!!this.loading,center:!!this.center,disabled:!!this.disabled,active:!!this.active,prefix:!!this.prefix||this.controllers.slot.test("prefix"),suffix:!!this.suffix||this.controllers.slot.test("suffix"),submenu:t,small:!!this.sm});return c`
      <div
        part="base"
        class=${e}
        role="menuitem"
        aria-label=${y(this.label||void 0)}
        aria-haspopup=${t?"true":"false"}
        aria-expanded=${t&&this.isExpanded()?"true":"false"}
        aria-disabled=${this.disabled?"true":"false"}
        @click=${this.handleClick}
        @mouseover=${this.handleMouseOver}
        @mouseleave=${this.handleMouseOut}>
        <slot name="check" part="check" class="menu-item__check">
          ${this.checkable?c`<hmwc-checkbox sm ?checked=${this.checked} @hmwc-change=${r=>r.stopPropagation()} tabindex="-1"></hmwc-checkbox>`:""}
        </slot>
        <slot name="prefix" part="prefix" class="menu-item__prefix"> ${this.prefix&&c`<hmwc-icon src=${this.prefix}></hmwc-icon>`} </slot>

        <span part="label" class="menu-item__label"> ${this.label} </span>

        <slot name="suffix" part="suffix" class="menu-item__suffix"> ${this.suffix&&c`<hmwc-icon src=${this.suffix}></hmwc-icon>`} </slot>

        <span part="chevron" class="menu-item__chevron">
          <hmwc-icon flex src="chevron-right" aria-hidden="true"></hmwc-icon>
        </span>

        ${this.loading&&c`
          <span class="menu-item__spinner">
            <hmwc-spinner part="spinner"></hmwc-spinner>
          </span>
        `}

        <slot name="submenu" part="submenu" class="menu-item__submenu">
          ${this.submenu&&c`<hmwc-menu submenu slot="submenu" ?active=${this.expanded} .items=${this.submenu}></hmwc-menu>`}
        </slot>
      </div>
    `}};A.styles=$i;A.dependencies=[_,X,ct];A.slots=["prefix","suffix","submenu"];zt([b()],A.prototype,"expanded",void 0);zt([a({type:String})],A.prototype,"value",void 0);zt([a({type:String})],A.prototype,"label",void 0);zt([a({type:Boolean,reflect:!0})],A.prototype,"checkable",void 0);zt([a({type:Boolean,reflect:!0})],A.prototype,"checked",void 0);zt([a({type:Boolean,reflect:!0})],A.prototype,"loading",void 0);zt([a({type:String})],A.prototype,"prefix",void 0);zt([a({type:String})],A.prototype,"suffix",void 0);zt([a({type:Array})],A.prototype,"submenu",void 0);zt([a({type:Boolean,reflect:!0})],A.prototype,"disabled",void 0);zt([a({type:Boolean,reflect:!0})],A.prototype,"sm",void 0);zt([a({type:Boolean,reflect:!0})],A.prototype,"active",void 0);zt([a({type:Boolean,reflect:!0})],A.prototype,"center",void 0);zt([T(".menu-item")],A.prototype,"item",void 0);zt([p("expanded")],A.prototype,"handleExpandedChange",null);A.define("hmwc-menu-item",A);var Ci=m`
  :host {
    --menu-width: 100%;
    --menu-max-height: 16rem;
    --menu-padding: var(--hmwc-spacing-2x-small) 0;
    --menu-spacing: none;
    --menu-border: solid var(--hmwc-panel-border-width) var(--hmwc-panel-border-color);
    --menu-border-radius: var(--hmwc-border-radius-large);
    --menu-shadow: var(--hmwc-shadow-medium);
    --menu-background: var(--hmwc-menu-background);
    --menu-label-size: var(--hmwc-font-size-medium);
    --menu-label-color: var(--hmwc-color-neutral-750);
    --menu-label-weight: var(--hmwc-font-weight-semibold);
    --menu-label-family: var(--hmwc-font-sans);
    --menu-prefix-size: var(--hmwc-font-size-medium);
    --menu-prefix-color: var(--hmwc-color-neutral-700);
    --menu-suffix-size: var(--hmwc-font-size-medium);
    --menu-suffix-color: var(--hmwc-color-neutral-700);

    display: contents;
    border-radius: var(--menu-border-radius);
    outline: none;
  }

  :host([compact]) {
    --menu-item-placeholder-display: none;

    & hmwc-menu-item {
      --menu-item-spacing: var(--hmwc-spacing-2x-small) var(--hmwc-spacing-small);
    }

    slot::slotted(hmwc-menu-item) {
      --menu-item-spacing: var(--hmwc-spacing-2x-small) var(--hmwc-spacing-small);
    }
  }

  .menu {
    max-height: var(--menu-max-height);
    width: var(--menu-width);
    position: relative;
    display: none;
    border: var(--menu-border);
    border-radius: var(--menu-border-radius);
    box-shadow: var(--menu-shadow);
    padding: var(--menu-padding);
    background: var(--menu-background);
    scrollbar-width: thin;
    overscroll-behavior: none;
    overflow: hidden;
    flex-direction: column;
    outline: none;

    & .menu__toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--hmwc-spacing-x-small) var(--hmwc-spacing-x-small) var(--hmwc-spacing-3x-small) var(--hmwc-spacing-x-small);
      flex-shrink: 0;
    }

    & .menu__select-all {
      display: flex;
      align-items: center;
      gap: var(--hmwc-spacing-2x-small);
      cursor: pointer;
      user-select: none;
      font-family: var(--hmwc-font-sans);
      font-size: var(--hmwc-font-size-x-small);
      color: var(--hmwc-color-neutral-500);
      border-radius: var(--hmwc-border-radius-small);
      padding: var(--hmwc-spacing-3x-small) var(--hmwc-spacing-3x-small) var(--hmwc-spacing-3x-small) 0;
      transition: background-color var(--hmwc-transition-fast) ease, color var(--hmwc-transition-fast) ease;

      &:hover {
        background-color: var(--hmwc-color-neutral-100);
        color: var(--hmwc-color-neutral-700);
      }

      hmwc-checkbox {
        pointer-events: none;
      }

      & .menu__select-all-label {
        font-weight: var(--hmwc-font-weight-semibold);
        letter-spacing: 0.01em;
      }
    }

    & .menu__search-toggle {
      --icon-size: var(--hmwc-font-size-x-small);
      --icon-color: var(--hmwc-color-neutral-400);
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: var(--hmwc-spacing-3x-small);
      border-radius: var(--hmwc-border-radius-small);
      transition: color var(--hmwc-transition-fast) ease, background-color var(--hmwc-transition-fast) ease;

      &:hover {
        --icon-color: var(--hmwc-color-neutral-700);
        background-color: var(--hmwc-color-neutral-100);
      }

      &.active {
        --icon-color: var(--hmwc-color-primary-600);
      }
    }

    & .menu__search {
      padding: 0 var(--hmwc-spacing-x-small) var(--hmwc-spacing-3x-small);
      flex-shrink: 0;

      --input-width: 100%;
      --input-height: 1.5rem;
      --input-font-size: var(--hmwc-font-size-x-small);
    }

    & .menu__search--always {
      padding: var(--menu-search-padding, var(--hmwc-spacing-x-small) var(--hmwc-spacing-x-small) var(--hmwc-spacing-2x-small));
      flex-shrink: 0;
      contain: inline-size;

      --input-width: 100%;
      --input-height: var(--menu-search-height, 1.75rem);
      --input-font-size: var(--menu-search-font-size, var(--hmwc-font-size-small));
      --input-radius: var(--menu-search-border-radius, var(--hmwc-border-radius-medium));
      --input-background: var(--menu-search-background, var(--hmwc-color-neutral-50));
      --input-border: var(--menu-search-border, 1px solid var(--hmwc-color-neutral-200));
      --input-border-color: var(--menu-search-border-color, var(--hmwc-color-neutral-200));
      --input-shadow: none;

      transition: all var(--hmwc-transition-fast) ease;
    }

    & .menu__search--always:focus-within {
      --input-border: var(--menu-search-focus-border, 1px solid var(--hmwc-color-primary-400));
      --input-border-color: var(--menu-search-focus-border-color, var(--hmwc-color-primary-400));
    }

    & .menu__items {
      overflow-y: auto;
      scrollbar-width: thin;
      flex: 1;
    }

    & .menu__empty {
      padding: var(--hmwc-spacing-small);
      text-align: center;
      font-family: var(--hmwc-font-sans);
      font-size: var(--hmwc-font-size-small);
      color: var(--hmwc-color-neutral-400);
      font-style: italic;
    }

    & hmwc-menu-item {
      --menu-item-label-color: var(--menu-label-color);
      --menu-item-label-weight: var(--menu-label-weight);
      --menu-item-label-family: var(--menu-label-family);
      --menu-item-prefix-size: var(--menu-prefix-size);
      --menu-item-prefix-color: var(--menu-prefix-color);
      --menu-item-suffix-size: var(--menu-suffix-size);
      --menu-item-suffix-color: var(--menu-suffix-color);
    }

    & hmwc-divider {
      --divider-color: var(--hmwc-color-neutral-100);
      --divider-radius: 0;
      --divider-spacing-start: var(--hmwc-spacing-2x-small) !important;
      --divider-spacing-end: var(--hmwc-spacing-3x-small) !important;
    }

    slot::slotted(hmwc-menu-item) {
      --menu-item-label-color: var(--menu-label-color);
      --menu-item-label-weight: var(--menu-label-weight);
      --menu-item-label-family: var(--menu-label-family);
      --menu-item-prefix-size: var(--menu-prefix-size);
      --menu-item-prefix-color: var(--menu-prefix-color);
      --menu-item-suffix-size: var(--menu-suffix-size);
      --menu-item-suffix-color: var(--menu-suffix-color);
    }

    slot::slotted(hmwc-divider) {
      --divider-color: var(--hmwc-color-neutral-100);
      --divider-radius: 0;
      --divider-spacing-start: var(--hmwc-spacing-2x-small) !important;
      --divider-spacing-end: var(--hmwc-spacing-3x-small) !important;
    }

    &.active {
      display: flex;
    }

    &.filter {
      overflow: hidden;
    }

    &.submenu {
      overflow: visible;
      position: absolute;
      top: 0;
      left: 100%;
      transform: translateY(-0.55rem);
    }
  }
`;var Q=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},z=class extends u{constructor(){super(...arguments),this.filteredItems=[],this.menuItems=[],this._hasSlottedItems=!1,this._searchVisible=!1,this._typeaheadBuffer="",this._typeaheadMatchIndex=0,this._boundHandleTypeahead=this.handleTypeahead.bind(this),this._upgradeRequeued=!1,this.align="start"}get isTypeaheadActive(){return this._typeaheadBuffer.length>0}show(){this.active=!0}hide(){this.active=!1}toggle(){this.active=!this.active}select(t){this.menuItems.every(e=>!(e instanceof A)||e.value!==t)||this.emit("hmwc-select",{detail:{value:t}})}playAnimation(){window.requestAnimationFrame(()=>{let t=this.style.getPropertyValue("animation");this.style.setProperty("animation","none"),this.style.setProperty("animation",t)})}filterItems(){this.filteredItems=this.filter===""?this.menuItems:this.menuItems.filter(t=>t instanceof V?!0:(t.value||t.label)?.toLowerCase().includes(this.filter?.toLowerCase()||"")),this._hasSlottedItems&&this.menuItems.forEach(t=>{t instanceof V||(t.hidden=!this.filteredItems.includes(t))})}handleSearch(t){this.filter=t.target.value,this.filterItems()}getCheckableItems(){return this.menuItems.filter(t=>t instanceof A&&!!t.checkable)}areAllChecked(){let t=this.getCheckableItems();return t.length>0&&t.every(e=>e.checked)}areSomeChecked(){let t=this.getCheckableItems();return t.some(e=>e.checked)&&!t.every(e=>e.checked)}checkAll(){this.getCheckableItems().forEach(t=>{t.checked=!0}),this.requestUpdate(),this.emit("hmwc-change",{detail:{value:"all"}})}uncheckAll(){this.getCheckableItems().forEach(t=>{t.checked=!1}),this.requestUpdate(),this.emit("hmwc-change",{detail:{value:"none"}})}handleSelectAll(){this.areAllChecked()?this.uncheckAll():this.checkAll()}async toggleSearch(){this._searchVisible=!this._searchVisible,this._searchVisible?(await this.updateComplete,this.shadowRoot?.querySelector(".menu__search")?.focus()):(this.filter="",this.filterItems())}hideSearch(){this.filter||(this._searchVisible=!1)}applyActiveState(){this.menuItems.forEach(t=>{if(!(t instanceof A))return;let e=this.activeValue!==void 0&&String(t.value)===String(this.activeValue);t.active=e})}scrollToActive(){let t=0,e=20,r=()=>{let o=this.shadowRoot?.querySelector(".menu__items");if(!o)return;if(o.clientHeight===0&&t<e){t++,requestAnimationFrame(r);return}let i=this._hasSlottedItems?Array.from(this.querySelectorAll("hmwc-menu-item")):Array.from(o.querySelectorAll("hmwc-menu-item")),s=i.findIndex(l=>{let h=l;return this.activeValue!==void 0&&String(h.value)===String(this.activeValue)});if(s>=0&&i.length>0){let l=o.scrollHeight/i.length,h=s*l;o.scrollTop=h-o.clientHeight/2+l/2}};requestAnimationFrame(r)}handleTypeahead(t){if(this.filter!==void 0&&(this.searchOpen||this._searchVisible))return;if(t.key==="Escape"){this._typeaheadBuffer="",this._typeaheadMatchIndex=0,clearTimeout(this._typeaheadTimeout);return}if(t.key==="Tab"&&this._typeaheadBuffer){t.preventDefault();let r=this.getTypeaheadMatches(this._typeaheadBuffer.toLowerCase());r.length>1&&(this._typeaheadMatchIndex=t.shiftKey?(this._typeaheadMatchIndex-1+r.length)%r.length:(this._typeaheadMatchIndex+1)%r.length,this.selectTypeaheadMatch(r[this._typeaheadMatchIndex]),this.resetTypeaheadBufferTimer());return}if(t.key==="Backspace"){if(!this._typeaheadBuffer)return;if(t.preventDefault(),this._typeaheadBuffer=this._typeaheadBuffer.slice(0,-1),this._typeaheadMatchIndex=0,this._typeaheadBuffer){let r=this.getTypeaheadMatches(this._typeaheadBuffer.toLowerCase());r.length&&this.selectTypeaheadMatch(r[0])}this.resetTypeaheadBufferTimer();return}if(t.key===" "&&!this._typeaheadBuffer||t.key.length!==1||t.ctrlKey||t.metaKey||t.altKey)return;t.preventDefault(),this._typeaheadBuffer+=t.key,this._typeaheadMatchIndex=0;let e=this.getTypeaheadMatches(this._typeaheadBuffer.toLowerCase());e.length&&this.selectTypeaheadMatch(e[0]),this.resetTypeaheadBufferTimer()}getTypeaheadMatches(t){return(this._hasSlottedItems?Array.from(this.querySelectorAll("hmwc-menu-item")).filter(r=>!r.hidden):(this.filter!==void 0?this.filteredItems:this.menuItems).filter(r=>r instanceof A)).filter(r=>(r.label??r.value??"").toString().toLowerCase().startsWith(t))}selectTypeaheadMatch(t){this.menuItems.forEach(r=>{r instanceof A&&(r.active=!1)}),t.active=!0;let e=this.shadowRoot?.querySelector(".menu__items");if(e&&e.scrollHeight>e.clientHeight){let r=this._hasSlottedItems?Array.from(this.querySelectorAll("hmwc-menu-item")):Array.from(e.querySelectorAll("hmwc-menu-item")),o=r.indexOf(t);if(o>=0&&r.length>0){let i=e.scrollHeight/r.length,s=o*i;e.scrollTop=s-e.clientHeight/2+i/2}}requestAnimationFrame(()=>this._focusBase())}resetTypeaheadBufferTimer(){clearTimeout(this._typeaheadTimeout),this._typeaheadTimeout=setTimeout(()=>{this._typeaheadBuffer="",this._typeaheadMatchIndex=0,this.applyActiveState()},1e3)}handleSearchKeydown(t){t.key==="Enter"&&(t.preventDefault(),this.emit("hmwc-search-submit",{detail:{value:this.filter??""}}))}openUpdate(){this.playAnimation(),this.active||(this._typeaheadBuffer="",this._typeaheadMatchIndex=0,clearTimeout(this._typeaheadTimeout)),this.active&&this.searchOpen&&this.filter!==void 0&&this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".menu__search")?.focus()})}activeValueUpdate(){this.applyActiveState()}itemsUpdate(){this.items&&!this.items.length||(this.menuItems=[],this.items?.forEach(t=>{let e=Object.assign(document.createElement("hmwc-menu-item"),{label:t,value:t});this.menuItems.push(e)}))}menuItemsUpdate(){let t=e=>this.select(e.target?.value||"");this.menuItems?.forEach(e=>e.removeEventListener("hmwc-select",t)),this.menuItems?.forEach(e=>e.addEventListener("hmwc-select",t)),this.activeValue!==void 0&&this.applyActiveState(),this.align&&this.align!=="start"&&this.alignUpdate()}prefixUpdate(){setTimeout(()=>{!this.prefix&&!this.suffix&&!this.sm||this.menuItems.forEach(t=>{t instanceof A&&(this.prefix&&(t.prefix=this.prefix),this.suffix&&(t.suffix=this.suffix),this.sm&&(t.sm=!0))})},1)}alignUpdate(){setTimeout(()=>{this.menuItems.forEach(t=>{t instanceof A&&(t.center=this.align==="center")})},1)}handleSlotChange(){let t=this.controllers.slot.get();t.some(o=>o.tagName==="HMWC-MENU-ITEM"&&!(o instanceof A)||o.tagName==="HMWC-DIVIDER"&&!(o instanceof V))&&!this._upgradeRequeued&&(this._upgradeRequeued=!0,Promise.all([customElements.whenDefined("hmwc-menu-item"),customElements.whenDefined("hmwc-divider")]).then(()=>{this._upgradeRequeued=!1,this.handleSlotChange()}));let r=t.filter(o=>o instanceof A||o instanceof V);t.length&&(this._hasSlottedItems=!0,this.menuItems=r,this.filterItems())}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._typeaheadTimeout),this.removeEventListener("keydown",this._boundHandleTypeahead)}connectedCallback(){super.connectedCallback(),this.itemsUpdate(),this.handleSlotChange(),this.active===void 0&&!this.closest("hmwc-dropdown, hmwc-attachment")&&(this.active=!0),this.addEventListener("keydown",this._boundHandleTypeahead)}get _baseDiv(){return this.shadowRoot?.querySelector('[part="base"]')}_focusBase(){let t=this._baseDiv;t&&this.active&&t.focus({preventScroll:!0})}updated(t){super.updated(t),t.has("active")&&this.active&&(this.activeValue!==void 0&&this.scrollToActive(),requestAnimationFrame(()=>this._focusBase()))}render(){let t=f({menu:!0,active:!!this.active,submenu:this.slot==="submenu",filter:this.filter!==void 0,"select-all":!!this.selectAll}),e=this.filter!==void 0?this.filteredItems:this.menuItems,r=this.searchOpen&&this.filter!==void 0,o=this.selectAll||this.filter!==void 0&&!this.searchOpen,i=this.filter!==void 0&&!this.searchOpen,s=this.filter!==void 0&&(this._searchVisible||r);return c`
      <div part="base" class=${t} role="menu" tabindex="-1" @focus=${()=>this.emit("hmwc-focus")} @blur=${()=>this.emit("hmwc-blur")}>
        ${r?c`
              <hmwc-input
                part="search"
                class="menu__search menu__search--always"
                sm
                fluid
                placeholder=${this.searchPlaceholder??"Search..."}
                .value=${this.filter??""}
                @hmwc-input=${this.handleSearch}
                @keydown=${this.handleSearchKeydown}></hmwc-input>
              <hmwc-divider></hmwc-divider>
            `:""}
        ${o?c`
              <div class="menu__toolbar">
                ${this.selectAll?c`
                      <div class="menu__select-all" @click=${this.handleSelectAll}>
                        <hmwc-checkbox sm ?checked=${this.areAllChecked()} ?indeterminate=${this.areSomeChecked()}> </hmwc-checkbox>
                        <span class="menu__select-all-label">${this.areAllChecked()?"Deselect All":"Select All"}</span>
                      </div>
                    `:""}
                ${i?c`
                      <hmwc-icon
                        class="menu__search-toggle ${this._searchVisible?"active":""}"
                        src="search"
                        @click=${this.toggleSearch}></hmwc-icon>
                    `:""}
              </div>
              ${s?c`
                    <hmwc-input
                      part="search"
                      class="menu__search"
                      sm
                      fluid
                      underline
                      .value=${this.filter??""}
                      @hmwc-input=${this.handleSearch}
                      @hmwc-blur=${this.hideSearch}
                      @keydown=${this.handleSearchKeydown}></hmwc-input>
                  `:""}
              <hmwc-divider></hmwc-divider>
            `:""}
        <div class="menu__items" part="items">
          ${this._hasSlottedItems?c`<slot @slotchange=${()=>this.handleSlotChange()}></slot>`:e}
          ${this.filter!==void 0&&this.filteredItems.length===0?c`<div class="menu__empty">No matches</div>`:""}
        </div>
      </div>
    `}};z.styles=Ci;z.dependencies=[A,V,x,ct,_];Q([b()],z.prototype,"filteredItems",void 0);Q([b()],z.prototype,"menuItems",void 0);Q([b()],z.prototype,"_hasSlottedItems",void 0);Q([b()],z.prototype,"_searchVisible",void 0);Q([a({type:Boolean,reflect:!0})],z.prototype,"active",void 0);Q([a({type:Array})],z.prototype,"items",void 0);Q([a({type:String,reflect:!0})],z.prototype,"filter",void 0);Q([a({type:Boolean,attribute:"search-open",reflect:!0})],z.prototype,"searchOpen",void 0);Q([a({type:String,attribute:"search-placeholder"})],z.prototype,"searchPlaceholder",void 0);Q([a({attribute:"active-value"})],z.prototype,"activeValue",void 0);Q([a({type:Boolean,reflect:!0})],z.prototype,"compact",void 0);Q([a({type:Boolean,reflect:!0})],z.prototype,"selectAll",void 0);Q([a({type:String,reflect:!0})],z.prototype,"prefix",void 0);Q([a({type:String,reflect:!0})],z.prototype,"suffix",void 0);Q([a({type:Boolean,reflect:!0})],z.prototype,"sm",void 0);Q([a({type:String,reflect:!0})],z.prototype,"align",void 0);Q([p("active")],z.prototype,"openUpdate",null);Q([p("activeValue")],z.prototype,"activeValueUpdate",null);Q([p("items")],z.prototype,"itemsUpdate",null);Q([p("menuItems")],z.prototype,"menuItemsUpdate",null);Q([p(["prefix","suffix","sm"])],z.prototype,"prefixUpdate",null);Q([p("align")],z.prototype,"alignUpdate",null);z.define("hmwc-menu",z);var Cr=m`
  .attachment__content {
    display: none;
    position: fixed;
    width: var(--attachment-popup-width);
    box-shadow: var(--hmwc-shadow-large);
    border-radius: var(--hmwc-border-radius-large);
    z-index: var(--hmwc-z-index-dropdown);
    margin: 0;
    /* Ensure auto is set on all insets so position-try-fallbacks
       can override whichever sides are not explicitly set. */
    inset: auto;
  }

  .attachment__content.active {
    display: block;
  }

  .attachment__content.flip {
    position-try-fallbacks: flip-inline, flip-block, flip-block flip-inline;
  }

  /* Bottom placements */
  .attachment__content[data-placement='bottom'] {
    top: calc(anchor(bottom) + var(--distance));
    left: anchor(center);
    translate: -50% 0;
  }
  .attachment__content[data-placement='bottom-start'] {
    top: calc(anchor(bottom) + var(--distance));
    left: calc(anchor(left) + var(--skidding));
  }
  .attachment__content[data-placement='bottom-end'] {
    top: calc(anchor(bottom) + var(--distance));
    right: calc(anchor(right) - var(--skidding));
  }

  /* Top placements */
  .attachment__content[data-placement='top'] {
    bottom: calc(anchor(top) + var(--distance));
    left: anchor(center);
    translate: -50% 0;
  }
  .attachment__content[data-placement='top-start'] {
    bottom: calc(anchor(top) + var(--distance));
    left: calc(anchor(left) + var(--skidding));
  }
  .attachment__content[data-placement='top-end'] {
    bottom: calc(anchor(top) + var(--distance));
    right: calc(anchor(right) - var(--skidding));
  }

  /* Right placements */
  .attachment__content[data-placement='right'] {
    left: calc(anchor(right) + var(--distance));
    top: anchor(center);
    translate: 0 -50%;
  }
  .attachment__content[data-placement='right-start'] {
    left: calc(anchor(right) + var(--distance));
    top: calc(anchor(top) + var(--skidding));
  }
  .attachment__content[data-placement='right-end'] {
    left: calc(anchor(right) + var(--distance));
    bottom: calc(anchor(bottom) - var(--skidding));
  }

  /* Left placements */
  .attachment__content[data-placement='left'] {
    right: calc(anchor(left) + var(--distance));
    top: anchor(center);
    translate: 0 -50%;
  }
  .attachment__content[data-placement='left-start'] {
    right: calc(anchor(left) + var(--distance));
    top: calc(anchor(top) + var(--skidding));
  }
  .attachment__content[data-placement='left-end'] {
    right: calc(anchor(left) + var(--distance));
    bottom: calc(anchor(bottom) - var(--skidding));
  }
`,Si=m`
  :host {
    --attachment-width: auto;
    --attachment-distance: 0px;
    --attachment-skidding: 0px;
    --attachment-arrow-size: var(--hmwc-spacing-x-small);
    --hmwc-panel-transparency: 0%;

    display: contents;
  }

  ::slotted(.attachment__anchor) {
    position: relative;
    height: fit-content;
    cursor: pointer;
  }

  .attachment__arrow {
    display: none;
    position: fixed;
    z-index: calc(var(--hmwc-z-index-dropdown) + 2);
    width: var(--attachment-arrow-size);
    height: var(--attachment-arrow-size);
    background: var(--hmwc-menu-background, var(--hmwc-color-neutral-0));
    border: solid var(--hmwc-panel-border-width) var(--hmwc-panel-border-color);
    border-radius: var(--hmwc-border-radius-small);
    transform: rotate(45deg);
    pointer-events: none;
    clip-path: none;
  }

  .attachment.arrow.active .attachment__arrow {
    display: block;
  }

  .attachment {
    display: contents;

    &.sync {
      --attachment-popup-width: var(--attachment-width);
    }
  }

  /* NOTE: All content hiding/positioning rules previously expressed
     here via ::slotted(.attachment__content…) now live in
     \`contentStyles\` (adopted into the content's own root node),
     because ::slotted() cannot match content forwarded through
     nested slots — e.g. a <hmwc-menu> slotted into <hmwc-dropdown>. */
`;var bt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},zi=new WeakSet;function aa(n){let t=n;!("adoptedStyleSheets"in t)||zi.has(t)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,Cr.styleSheet??sa()],zi.add(t))}var hr;function sa(){return hr||(hr=new CSSStyleSheet,hr.replaceSync(Cr.cssText)),hr}var R=class extends u{constructor(){super(...arguments),this.trigger="click",this.placement="bottom",this.distance=2,this.skidding=0,this.flip=!0,this._forwardedSlots=new WeakSet,this._menuUpgradeQueued=!1,this._menuSelectHandler=t=>{let e=t.detail??{};this.emit("hmwc-select",{detail:e})},this._menuChangeHandler=t=>{let e=t.detail??{};this.emit("hmwc-change",{detail:e})}}show(){this.active=!0}hide(){this.active=!1}toggle(){this.content&&(this.active=!this.active,this.content instanceof z&&(this.content.active=this.active))}get _anchorId(){return this.name??this._uid??""}register(){let t=this._anchorId;t&&(Oe.includes(t)||Oe.push(t))}unregister(){let t=this._anchorId;if(!t)return;let e=Oe.indexOf(t);e>=0&&Oe.splice(e,1)}retrieve(){let t=this.content;if(this.content=this.controllers.slot.get()[0],this.content?.tagName==="SLOT"){let e=this.content;this._forwardedSlots.has(e)||(this._forwardedSlots.add(e),e.addEventListener("slotchange",()=>this.handleSlotChange())),this.content=e.assignedElements({flatten:!0})[0]??e.children[0]}this.content&&this.content.tagName==="HMWC-MENU"&&!(this.content instanceof z)&&!this._menuUpgradeQueued&&(this._menuUpgradeQueued=!0,customElements.whenDefined("hmwc-menu").then(()=>{this._menuUpgradeQueued=!1,this.handleSlotChange()})),this.anchor||(this.anchor=this.controllers.slot.get("anchor")[0]),this.anchor instanceof String&&(this.anchor=document.querySelector(`#${this.anchor}`),this.append(this.anchor)),this.content&&(this.content.classList.add("attachment__content"),this.decorateContent()),t&&t!==this.content&&t instanceof z&&(t.removeEventListener("hmwc-select",this._menuSelectHandler),t.removeEventListener("hmwc-change",this._menuChangeHandler)),this.content instanceof z&&(this.content.removeEventListener("hmwc-select",this._menuSelectHandler),this.content.removeEventListener("hmwc-change",this._menuChangeHandler),this.content.addEventListener("hmwc-select",this._menuSelectHandler),this.content.addEventListener("hmwc-change",this._menuChangeHandler)),this.anchor&&(this.anchor.classList.add("attachment__anchor"),this.anchor.slot="anchor",this.anchor.style.setProperty("anchor-name",`--${this._anchorId}`),this.content&&this.content.style.setProperty("position-anchor",`--${this._anchorId}`))}decorateContent(){if(!this.content)return;let t=this.content;t.dataset.placement=this.placement,t.classList.toggle("flip",!!this.flip),t.style.setProperty("--distance",`${this.distance}px`),t.style.setProperty("--skidding",`${this.skidding}px`),this.sync&&this.width&&t.style.setProperty("--attachment-popup-width",`${this.width}px`),aa(t.getRootNode())}triggerOnClick(t){if(!this.anchor||!(this.anchor instanceof HTMLElement))return;if(this._clickHandler){let r=this.anchor instanceof u?"hmwc-click":"click";this.anchor.removeEventListener(r,this._clickHandler),this._clickHandler=void 0}if(this._documentHandler&&(document.removeEventListener("mousedown",this._documentHandler),this._documentHandler=void 0),!t)return;let e=this.anchor instanceof u?"hmwc-click":"click";this._clickHandler=()=>{this.toggle()},this._documentHandler=r=>{if(!this.content)return;let o=r.composedPath();if(!o.includes(this.anchor)){if(o.includes(this.content)){this.stayOpen||this.hide();return}this.hide()}},this.anchor.addEventListener(e,this._clickHandler),document.addEventListener("mouseup",this._documentHandler)}triggerOnHover(t){if(!this.anchor||!(this.anchor instanceof HTMLElement))return;t&&this.triggerOnHover(!1);let e=t?"add":"remove";this[`${e}EventListener`]("mouseover",this.show),this[`${e}EventListener`]("mouseout",this.hide)}nameUpdate(t){let e=(typeof t=="string"?t:void 0)??this._uid??"",r=Oe.indexOf(e);r>=0&&Oe.splice(r,1),this.register()}placementUpdate(){this.decorateContent()}activityUpdate(){this.emit(`hmwc-${this.active?"show":"hide"}`),this.trigger==="hover"&&this.emit(`hmwc-${this.active?"focus":"blur"}`),!(!this.anchor||!(this.anchor instanceof HTMLElement))&&(this.width=this.anchor.offsetWidth,this.anchor.style.setProperty("anchor-name",`--${this._anchorId}`),this.content&&(this.content.classList.add("attachment__content"),this.content.classList.toggle("active",!!this.active),this.decorateContent(),this.content.style.setProperty("position-anchor",`--${this._anchorId}`),this.content instanceof z&&(this.content.active=this.active),this.arrow&&this.active&&requestAnimationFrame(()=>this.positionArrow())))}positionArrow(){let t=this.shadowRoot?.querySelector(".attachment__arrow");if(!t||!this.anchor||!(this.anchor instanceof HTMLElement))return;let e=this.anchor.getBoundingClientRect(),r=e.left+e.width/2;t.style.top="",t.style.bottom="",t.style.left="",t.style.right="",t.style.translate="",t.style.borderTop="",t.style.borderBottom="",t.style.borderLeft="",t.style.borderRight="",t.style.clipPath="",this.placement.startsWith("bottom")?(t.style.top=`${e.bottom+this.distance}px`,t.style.left=`${r}px`,t.style.translate="-50% -50%",t.style.borderRight="none",t.style.borderBottom="none",t.style.clipPath="polygon(0 0, 100% 0, 0 100%)"):this.placement.startsWith("top")&&(t.style.top=`${e.top-this.distance}px`,t.style.left=`${r}px`,t.style.translate="-50% -50%",t.style.borderLeft="none",t.style.borderTop="none",t.style.clipPath="polygon(100% 0, 100% 100%, 0 100%)")}triggerUpdate(){this.trigger==="click"?(this.triggerOnClick(!0),this.triggerOnHover(!1)):this.trigger==="hover"&&(this.triggerOnHover(!0),this.triggerOnClick(!1))}disconnectedCallback(){super.disconnectedCallback(),this.unregister(),this.triggerOnClick(!1),this.triggerOnHover(!1),this.content instanceof z&&(this.content.removeEventListener("hmwc-select",this._menuSelectHandler),this.content.removeEventListener("hmwc-change",this._menuChangeHandler))}connectedCallback(){if(super.connectedCallback(),!this._uid){let t=globalThis.crypto;this._uid=t?.randomUUID?.()??`a${Math.random().toString(36).slice(2,10)}`}this.register(),this.retrieve()}firstUpdated(){this.shadowRoot?.querySelectorAll("slot")?.forEach(e=>{e.addEventListener("slotchange",()=>this.handleSlotChange())})}handleSlotChange(){this.retrieve(),this.triggerUpdate(),this.content&&this.content.classList.toggle("active",!!this.active),this.content instanceof z&&(this.content.active=this.active)}render(){let t=f({attachment:!0,active:!!this.active,flip:!!this.flip,sync:!!this.sync,arrow:!!this.arrow,[`placement-${this.placement}`]:!0});return c`
      <div
        part="base"
        class=${t}
        style=${`--attachment-width: ${this.width}px; --distance:${this.distance}px; --skidding:${this.skidding}px;`}>
        <slot name="anchor" part="anchor"></slot>
        ${this.arrow?c`<div part="arrow" class="attachment__arrow"></div>`:""}
        <slot part="content"> </slot>
      </div>
    `}};R.styles=Si;R.dependencies=[z];R.slots=["[default]","anchor"];bt([a({type:Boolean,reflect:!0})],R.prototype,"active",void 0);bt([a({type:String})],R.prototype,"name",void 0);bt([a({type:String})],R.prototype,"anchor",void 0);bt([a({type:String})],R.prototype,"trigger",void 0);bt([a({type:String,reflect:!0})],R.prototype,"placement",void 0);bt([a({type:Number})],R.prototype,"distance",void 0);bt([a({type:Number})],R.prototype,"skidding",void 0);bt([a({type:Boolean,reflect:!0})],R.prototype,"flip",void 0);bt([a({type:Boolean,reflect:!0})],R.prototype,"sync",void 0);bt([a({type:Boolean,reflect:!0})],R.prototype,"stayOpen",void 0);bt([a({type:Boolean,reflect:!0})],R.prototype,"arrow",void 0);bt([b()],R.prototype,"content",void 0);bt([b()],R.prototype,"width",void 0);bt([p("name",{waitUntilFirstUpdate:!0})],R.prototype,"nameUpdate",null);bt([p("placement",{waitUntilFirstUpdate:!0}),p("distance",{waitUntilFirstUpdate:!0}),p("skidding",{waitUntilFirstUpdate:!0}),p("flip",{waitUntilFirstUpdate:!0})],R.prototype,"placementUpdate",null);bt([p("active")],R.prototype,"activityUpdate",null);bt([p("trigger")],R.prototype,"triggerUpdate",null);var Oe=[];R.define("hmwc-attachment",R);var Ai=m`
  :host {
    --avatar-size: 1em;
    --avatar-padding: 0;
    --avatar-background: var(--hmwc-color-neutral-400);
    --avatar-background-hover: var(--avatar-background);
    --avatar-color: var(--hmwc-color-neutral-0);
    --avatar-color-hover: var(--avatar-color);
    --avatar-border-color: transparent;
    --avatar-border-width: 0;
    --avatar-border-radius: var(--hmwc-border-radius-circle);
    --avatar-shadow: none;
    --avatar-label-size: calc(var(--avatar-size) * 0.42);
    --avatar-label-weight: var(--hmwc-font-weight-bold);
    --avatar-label-family: var(--hmwc-font-sans);
    --avatar-icon-size: calc(var(--avatar-size) * 0.55);
    --avatar-status-color: none;
    display: flex;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--avatar-size);
    height: var(--avatar-size);
    padding: var(--avatar-padding);
    background: var(--avatar-background);
    border: var(--avatar-border-width) solid var(--avatar-border-color);
    border-radius: var(--avatar-border-radius);
    box-shadow: var(--avatar-shadow);
    font-family: var(--avatar-label-family);
    font-size: var(--avatar-label-size);
    font-weight: var(--avatar-label-weight);
    color: var(--avatar-color);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
    overflow: hidden;
    box-sizing: border-box;
    transition: background var(--hmwc-transition-fast) ease, color var(--hmwc-transition-fast) ease, box-shadow var(--hmwc-transition-fast) ease;

    & .avatar__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }

    & .avatar__label {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      text-transform: uppercase;
      letter-spacing: var(--hmwc-letter-spacing-dense);
    }

    & .avatar__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--avatar-icon-size);
      --icon-color: var(--avatar-color);
    }

    /* Shapes */
    &.circle {
      --avatar-border-radius: var(--hmwc-border-radius-circle);
    }

    &.square {
      --avatar-border-radius: var(--hmwc-border-radius-medium);
    }

    /* Sizes */
    &.sm {
      --avatar-size: 1.5rem;
      --avatar-label-size: calc(1.5rem * 0.42);
      --avatar-icon-size: calc(1.5rem * 0.55);
    }

    &.md {
      --avatar-size: 3rem;
      --avatar-label-size: calc(3rem * 0.42);
      --avatar-icon-size: calc(3rem * 0.55);
    }

    &.lg {
      --avatar-size: 4.5rem;
      --avatar-label-size: calc(4.5rem * 0.42);
      --avatar-icon-size: calc(4.5rem * 0.55);
    }

    /* Color variants */
    &.primary {
      --avatar-background: var(--hmwc-color-primary-500);
      --avatar-color: var(--hmwc-color-primary-50);
      --avatar-border-color: var(--hmwc-color-primary-100);
    }

    &.success {
      --avatar-background: var(--hmwc-color-success-500);
      --avatar-color: var(--hmwc-color-success-50);
      --avatar-border-color: var(--hmwc-color-success-100);
    }

    &.neutral {
      --avatar-background: var(--hmwc-color-neutral-500);
      --avatar-color: var(--hmwc-color-neutral-50);
      --avatar-border-color: var(--hmwc-color-neutral-100);
    }

    &.warning {
      --avatar-background: var(--hmwc-color-warning-500);
      --avatar-color: var(--hmwc-color-warning-50);
      --avatar-border-color: var(--hmwc-color-warning-100);
    }

    &.danger {
      --avatar-background: var(--hmwc-color-danger-500);
      --avatar-color: var(--hmwc-color-danger-50);
      --avatar-border-color: var(--hmwc-color-danger-100);
    }

    /* Status indicator */
    &.status-active,
    &.status-inactive,
    &.status-busy {
      &::after {
        content: '';
        width: var(--hmwc-spacing-2x-small);
        height: var(--hmwc-spacing-2x-small);
        border-radius: var(--hmwc-border-radius-circle);
        border: calc(0.5 * var(--hmwc-spacing-3x-small)) solid var(--hmwc-color-neutral-0);
        background-color: var(--avatar-status-color);
        position: absolute;
        right: 0;
        bottom: 0;
        animation: pulse 6s infinite;
      }
    }

    &.status-active {
      --avatar-status-color: var(--hmwc-color-success-600);
    }

    &.status-inactive {
      --avatar-status-color: var(--hmwc-color-warning-600);
    }

    &.status-busy {
      --avatar-status-color: var(--hmwc-color-danger-600);
    }

    /* Selectable / interactive */
    &.selectable {
      cursor: pointer;

      &:hover {
        background: var(--avatar-background-hover);
        color: var(--avatar-color-hover);
      }

      &:focus-visible {
        outline: var(--hmwc-spacing-3x-small) solid var(--hmwc-color-primary-500);
        outline-offset: var(--hmwc-spacing-3x-small);
      }
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--avatar-status-color);
    }
    35% {
      box-shadow: 0 0 0 var(--hmwc-spacing-3x-small) transparent;
    }
    50% {
      box-shadow: 0 0 0 0 transparent;
    }
    51% {
      box-shadow: 0 0 0 0 var(--avatar-status-color);
    }
    100% {
      box-shadow: 0 0 0 0 var(--avatar-status-color);
    }
  }
`;var st=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},j=class extends u{constructor(){super(...arguments),this._hasImageError=!1,this.icon="person-fill",this.shape="circle",this.loading="eager"}updateInitials(){this.name&&(this.initials=this.name.split(" ").map(t=>t[0]).join(""))}handleSrcChange(){this._hasImageError=!1}_handleImageError(){this._hasImageError=!0}_canShowImage(){return this.src&&!this._hasImageError}render(){let t=f({avatar:!0,circle:this.shape==="circle",square:this.shape==="square",[`status-${this.status}`]:!!this.status,selectable:!!this.selectable,sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
      <div part="base" class=${t} role="img" aria-label=${y(this.label||this.name)}>
        <slot>
          ${this._canShowImage()?c`<img
                part="image"
                class="avatar__image"
                src=${this.src}
                alt=${y(this.label||this.name)}
                loading=${this.loading}
                @error=${this._handleImageError} />`:this.name?c`<div part="label" class="avatar__label">${this.initials}</div>`:c`<hmwc-icon part="icon" class="avatar__icon" src=${this.icon}></hmwc-icon>`}
        </slot>
      </div>
    `}};j.styles=Ai;j.dependencies=[_];j.slots=["default"];st([b()],j.prototype,"_hasImageError",void 0);st([b()],j.prototype,"initials",void 0);st([a({type:String})],j.prototype,"src",void 0);st([a({type:String})],j.prototype,"name",void 0);st([a({type:String})],j.prototype,"label",void 0);st([a({type:String})],j.prototype,"icon",void 0);st([a({type:String,reflect:!0})],j.prototype,"shape",void 0);st([a({type:String,reflect:!0})],j.prototype,"status",void 0);st([a({type:String})],j.prototype,"loading",void 0);st([a({type:Boolean,reflect:!0})],j.prototype,"selectable",void 0);st([a({type:Boolean,reflect:!0})],j.prototype,"sm",void 0);st([a({type:Boolean,reflect:!0})],j.prototype,"md",void 0);st([a({type:Boolean,reflect:!0})],j.prototype,"lg",void 0);st([a({type:Boolean,reflect:!0})],j.prototype,"primary",void 0);st([a({type:Boolean,reflect:!0})],j.prototype,"success",void 0);st([a({type:Boolean,reflect:!0})],j.prototype,"neutral",void 0);st([a({type:Boolean,reflect:!0})],j.prototype,"warning",void 0);st([a({type:Boolean,reflect:!0})],j.prototype,"danger",void 0);st([p("name")],j.prototype,"updateInitials",null);st([p("src")],j.prototype,"handleSrcChange",null);j.define("hmwc-avatar",j);q.define("hmwc-badge",q);var Ei=m`
  :host {
    display: block;
  }
`;var Bi=m`
  :host {
    --col-max-width: var(--container-max-width);
    --col-padding: var(--container-padding);
    --col-background: var(--container-background);

    display: contents;
  }

  :host([fluid]) {
    --container-height: 100%;
  }

  .col {
    height: var(--container-height);

    & .col__label {
      display: none;
      color: var(--hmwc-color-text-secondary);
      font-size: var(--hmwc-font-size-small);
      font-family: var(--hmwc-font-sans);
      line-height: 2;
      margin-bottom: var(--hmwc-spacing-2x-small);
    }

    .col__content {
      display: flex;
      flex-direction: column;
      align-items: var(--container-alignment);
      justify-content: var(--container-justification);
      gap: var(--container-spacing);
      padding: var(--col-padding);
      border-radius: var(--container-border-radius);
      aspect-ratio: var(--container-aspect-ratio);
      height: var(--container-height);
      width: var(--container-width);
      max-width: var(--col-max-width);
      box-shadow: var(--container-shadow);
      background: var(--col-background);
      background-size: cover;
    }

    &.label {
      & .col__label {
        display: flex;
      }
    }

    &.wrap {
      .col__content {
        flex-wrap: wrap;
      }
    }

    &.scrollable {
      overflow-y: auto;
    }

    &.min {
      .col__content {
        width: min-content;
      }
    }

    &.max {
      .col__content {
        width: max-content;
      }
    }

    &.outline {
      .col__content {
        border: 1px solid var(--hmwc-panel-border-color);
      }
    }
  }
`;var Ve=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Tt=class extends P{render(){let t=f({col:!0,wrap:!!this.wrap,min:!!this.min,max:!!this.max,outline:!!this.outline,fit:!!this.fit,label:!!this.label||this.controllers.slot.test("label"),scrollable:!!this.scrollable});return c`
      <div part="base" class=${t}>
        <slot name="label" part="label" class="col__label">${this.label}</slot>
        <slot part="content" class="col__content"></slot>
      </div>
    `}};Tt.styles=Bi;Ve([a({type:Boolean,reflect:!0})],Tt.prototype,"wrap",void 0);Ve([a({type:Boolean,reflect:!0})],Tt.prototype,"fit",void 0);Ve([a({type:Boolean,reflect:!0})],Tt.prototype,"min",void 0);Ve([a({type:Boolean,reflect:!0})],Tt.prototype,"max",void 0);Ve([a({type:Boolean,reflect:!0})],Tt.prototype,"outline",void 0);Tt.define("hmwc-col",Tt);var Oi=m`
  :host {
    /*
     * Canonical, prefixed custom properties. The unprefixed legacy names
     * (--radius / --color / --sheen-color) are honored as fallbacks for one
     * minor so existing consumers keep working. Prefer the prefixed names.
     */
    --skeleton-radius: var(--radius, var(--hmwc-border-radius-pill));
    --skeleton-color: var(--color, var(--hmwc-color-neutral-100));
    --skeleton-sheen-color: var(--sheen-color, var(--hmwc-color-neutral-200));

    display: contents;
    position: relative;
  }

  .skeleton {
    display: flex;

    width: 100%;
    height: 100%;
    min-height: 1.8rem;
    padding: var(--hmwc-spacing-x-small);

    .skeleton__indicator {
      flex: 1 1 auto;
      background: var(--skeleton-color);
      border-radius: var(--skeleton-radius);
    }

    &.sheen {
      & .skeleton__indicator {
        background: linear-gradient(270deg, var(--skeleton-sheen-color), var(--skeleton-color), var(--skeleton-color), var(--skeleton-sheen-color));
        background-size: 400% 100%;
        animation: sheen 4s ease-in-out infinite;
      }
    }

    &.pulse {
      & .skeleton__indicator {
        animation: pulse 2s ease-in-out 0.5s infinite;
      }
    }
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --skeleton-color: GrayText;
    }
  }

  /*
   * Motion-sensitive users get a static placeholder. Both the sheen sweep
   * and the pulse fade are disabled; the indicator renders as a solid block.
   */
  @media (prefers-reduced-motion: reduce) {
    .skeleton.sheen .skeleton__indicator,
    .skeleton.pulse .skeleton__indicator {
      animation: none;
      background: var(--skeleton-color);
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;var Mi=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},wt=class extends u{constructor(){super(...arguments),this.sheen=!0}render(){let t=!!this.pulse,e=!!this.sheen&&!t,r=f({skeleton:!0,pulse:t,sheen:e});return c`
      <div part="base" class=${r} aria-hidden="true">
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};wt.styles=Oi;wt.dependencies=[];wt.slots=[];Mi([a({type:Boolean,reflect:!0})],wt.prototype,"sheen",void 0);Mi([a({type:Boolean,reflect:!0})],wt.prototype,"pulse",void 0);wt.define("hmwc-skeleton",wt);var Di=m`
  :host {
    --text-size: var(--hmwc-font-size-medium);
    --text-weight: var(--hmwc-font-weight-normal);
    --text-family: var(--hmwc-font-sans);
    --text-color: var(--hmwc-color-neutral-900);
    --text-label-color: var(--hmwc-color-neutral-600);
    --text-spacing: var(--hmwc-letter-spacing-normal);
    --text-icon-color: var(--hmwc-color-neutral-800);
    display: block;
  }

  hmwc-text {
    margin-left: var(--hmwc-spacing-small);
  }

  .text {
    display: flex;
    gap: var(--hmwc-spacing-x-small);
    align-items: center;
    color: var(--text-color);
    font-size: var(--text-size);
    font-weight: var(--text-weight);
    font-family: var(--text-family);
    letter-spacing: var(--text-spacing);
    white-space: nowrap;
    --icon-size: 1rem;
    font-variant: none;
    font-feature-settings: 'c2sc', 'smcp';

    & .text__content {
      display: flex;
      gap: var(--hmwc-spacing-3x-small);

      & .text__label {
        color: var(--text-label-color);
        margin-right: var(--hmwc-spacing-small);
      }

      & .text__amount {
        margin-left: var(--hmwc-spacing-2x-small);
        font-weight: var(--hmwc-font-weight-normal) !important;
      }

      hmwc-text {
        margin-left: var(--hmwc-spacing-small);
      }

      hmwc-skeleton {
        min-width: 100px;
      }
    }

    & .text__prefix {
      hmwc-button {
        --hmwc-spacing-small: 0;
      }
    }

    & .text__suffix {
      margin-left: var(--hmwc-spacing-small);
      --icon-size: 1rem;

      hmwc-icon {
        display: flex;

        &::part(base) {
          display: flex;
        }
      }
    }

    &.flex {
      display: flex;
      align-items: center;
      gap: var(--hmwc-spacing-x-small);

      &.center {
        justify-content: center;
      }
    }

    &.xs {
      --text-size: var(--hmwc-font-size-x-small);
      hmwc-skeleton {
        height: var(--hmwc-font-size-x-small);
      }
    }

    &.sm {
      --text-size: var(--hmwc-font-size-small);
      --text-spacing: -0.25px;
      hmwc-skeleton {
        height: var(--hmwc-font-size-small);
      }
    }
    &.md {
      --text-size: var(--hmwc-font-size-medium);
      hmwc-skeleton {
        height: var(--hmwc-font-size-medium);
      }
    }

    &.lg {
      --text-size: var(--hmwc-font-size-large);
      hmwc-skeleton {
        height: var(--hmwc-font-size-large);
        &::part(base) {
          padding: var(--hmwc-spacing-2x-small);
        }
      }
      &.semibold {
        --text-spacing: -0.2px;
      }
    }

    &.xl {
      --text-size: var(--hmwc-font-size-x-large);
      hmwc-skeleton {
        height: var(--hmwc-font-size-x-large);

        &::part(base) {
          padding: var(--hmwc-spacing-2x-small) 0;
        }
      }
    }

    &.xxl {
      --text-size: calc(var(--hmwc-font-size-x-large) * 1.25);
      hmwc-skeleton {
        height: var(--hmwc-font-size-2x-large);
      }
    }

    &.flex {
      line-height: 1;
    }

    &.heading {
      --text-size: var(--hmwc-font-size-2x-large);
      --text-weight: var(--hmwc-font-weight-bold);
    }

    &.subheading {
      --text-size: var(--hmwc-font-size-x-large);
      --text-weight: var(--hmwc-font-weight-semibold);
    }

    &.subtitle {
      --text-size: var(--hmwc-font-size-large);
      --text-weight: var(--hmwc-font-weight-semibold);
      --text-spacing: var(--hmwc-letter-spacing-dense);
    }

    &.caption {
      --text-size: var(--hmwc-font-size-small);
    }

    &.sans {
      --text-family: var(--hmwc-font-sans);
    }

    &.serif {
      --text-family: var(--hmwc-font-serif);
    }

    &.center {
      text-align: center;
    }

    &.monospace {
      --text-family: var(--hmwc-font-mono);
    }

    &.light {
      --text-weight: var(--hmwc-font-weight-light);
    }

    &.semibold {
      --text-weight: var(--hmwc-font-weight-semibold);
    }

    &.bold {
      --text-weight: var(--hmwc-font-weight-bold);
    }

    &.primary {
      --text-color: var(--hmwc-color-primary-600);
      --text-icon-color: var(--hmwc-color-primary-500);
    }

    &.secondary {
      --text-color: var(--hmwc-color-neutral-700);
    }

    &.tertiary {
      --text-color: var(--hmwc-color-neutral-600);
    }

    &.success {
      --text-color: var(--hmwc-color-success-600);
      --text-icon-color: var(--hmwc-color-success-500);
    }

    &.neutral {
      --text-color: var(--hmwc-color-neutral-500);
    }

    &.warning {
      --text-color: var(--hmwc-color-warning-700);
      --text-icon-color: var(--hmwc-color-warning-500);
    }

    &.danger {
      --text-color: var(--hmwc-color-danger-600);
      --text-icon-color: var(--hmwc-color-danger-500);
    }

    &.uppercase {
      text-transform: uppercase;
    }

    &.lowercase {
      text-transform: lowercase;
    }

    &.capitalize {
      text-transform: capitalize;
    }

    &.wrap {
      white-space: wrap;
    }
    &.invert {
      --text-color: var(--hmwc-color-neutral-100);
    }

    &.align-start {
      text-align: start;
    }

    &.align-end {
      text-align: end;
    }
  }
`;var O=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},k=class extends u{constructor(){super(...arguments),this.prefix=null}handleEnter(){this.emit("hmwc-enter",{detail:{value:this.value}})}handleLeave(){this.emit("hmwc-leave",{detail:{value:this.value}})}formatted(){if(!this.format||this.value==null)return this.value;let t=Number(this.value);return Number.isFinite(t)?Math.round(t).toLocaleString():this.value}resolveFamily(){return this.serif?"serif":this.monospace?"monospace":"sans"}_renderIcon(t){return c`<hmwc-icon
      ?primary=${this.primary}
      ?neutral=${this.neutral}
      ?warning=${this.warning}
      ?danger=${this.danger}
      ?invert=${this.invert}
      src=${t}></hmwc-icon>`}_renderValue(){if(this.value==null)return c``;let t=this.formatted();return t===""||t==null?c`<hmwc-skeleton></hmwc-skeleton>`:c`${t}`}render(){let t=this.resolveFamily(),e=f({text:!0,xs:!!this.xs,sm:!!this.sm,md:!!this.md,lg:!!this.lg,xl:!!this.xl,xxl:!!this.xxl,flex:!!this.flex,heading:!!this.heading,subheading:!!this.subheading,label:!!this.label,subtitle:!!this.subtitle,caption:!!this.caption,sans:t==="sans",serif:t==="serif",monospace:t==="monospace",center:!!this.center||this.align==="center",light:!!this.light,semibold:!!this.semibold,bold:!!this.bold,primary:!!this.primary,secondary:!!this.secondary,tertiary:!!this.tertiary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger,uppercase:!!this.uppercase,lowercase:!!this.lowercase,capitalize:!!this.capitalize,wrap:!!this.wrap,invert:!!this.invert,"align-start":this.align==="start","align-end":this.align==="end"});return c`
      <div part="base" class=${e} @mouseenter=${this.handleEnter} @mouseleave=${this.handleLeave}>
        ${this.prefix?c`<slot name="prefix" class="text__prefix">${this._renderIcon(this.prefix)}</slot>`:null}
        <div part="content" class="text__content">
          ${this.label?c`<span class="text__label">${this.label}</span>`:null} ${this._renderValue()}
          ${this.amount!=null?c`<span class="text__amount">(${this.amount})</span>`:null}
          <slot></slot>
        </div>
        ${this.suffix?c`<slot name="suffix" class="text__suffix">${this._renderIcon(this.suffix)}</slot>`:null}
      </div>
    `}};k.styles=Di;k.dependencies=[_,wt];k.slots=["prefix","suffix"];O([a({type:Boolean,reflect:!0})],k.prototype,"xs",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"sm",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"md",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"lg",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"xl",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"xxl",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"heading",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"subheading",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"subtitle",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"caption",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"sans",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"serif",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"monospace",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"light",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"semibold",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"bold",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"primary",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"secondary",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"tertiary",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"success",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"neutral",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"warning",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"danger",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"invert",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"uppercase",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"lowercase",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"capitalize",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"wrap",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"flex",void 0);O([a({type:Boolean,reflect:!0})],k.prototype,"center",void 0);O([a({type:Boolean})],k.prototype,"format",void 0);O([a({type:String})],k.prototype,"value",void 0);O([a({type:String})],k.prototype,"label",void 0);O([a({type:String})],k.prototype,"prefix",void 0);O([a({type:String})],k.prototype,"suffix",void 0);O([a({type:String})],k.prototype,"align",void 0);O([a({type:Number})],k.prototype,"amount",void 0);k.define("hmwc-text",k);var Me=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},jt=class extends u{render(){return c`
      <hmwc-col part="base" class="banner" fluid pad="lg" gap="xxl" round="xl" elevation="3" img=${this.img}>
        <hmwc-col gap="sm">
          <slot name="label" part="label">
            <hmwc-text secondary bold ?invert=${this.invert} xl value=${this.label} style="--text-spacing: -.75px;"></hmwc-text>
          </slot>
          <slot part="message">
            <hmwc-text secondary flex wrap ?invert=${this.invert} value=${this.message}></hmwc-text>
          </slot>
        </hmwc-col>
        <slot name="action" part="action">
          <hmwc-button
            href=${this.href}
            label=${this.action}
            suffix="box-arrow-up-right"
            style="--button-color: black; --button-background: transparent;"></hmwc-button>
        </slot>
      </hmwc-col>
    `}};jt.styles=Ei;jt.dependencies=[Tt,k,_,w];Me([a({type:String})],jt.prototype,"img",void 0);Me([a({type:String})],jt.prototype,"label",void 0);Me([a({type:String})],jt.prototype,"message",void 0);Me([a({type:String})],jt.prototype,"href",void 0);Me([a({type:String})],jt.prototype,"action",void 0);Me([a({type:Boolean,reflect:!0})],jt.prototype,"invert",void 0);jt.define("hmwc-banner",jt);var Ri=m`
  :host {
    --tooltip-max-width: 20rem;
    --tooltip-background: var(--hmwc-tooltip-background-color);
    --tooltip-color: var(--hmwc-tooltip-color);
    --tooltip-padding: var(--hmwc-tooltip-padding);
    --tooltip-border-radius: var(--hmwc-tooltip-border-radius);
    --tooltip-font-family: var(--hmwc-tooltip-font-family);
    --tooltip-font-size: var(--hmwc-tooltip-font-size);
    --tooltip-font-weight: var(--hmwc-tooltip-font-weight);
    --tooltip-line-height: var(--hmwc-tooltip-line-height);

    display: contents;
  }

  .tooltip {
    display: contents;
  }

  /*
   * The anchor wrapper gives the <slot> a real CSS box so
   * that CSS anchor-positioning (anchor-name / anchor())
   * has something to resolve against.  Without this,
   * <slot> defaults to display:contents in the UA sheet,
   * producing no box and broken placement.
   */
  .tooltip__anchor {
    display: inline-block;
    /* Let the anchored element keep its own cursor. */
    cursor: inherit;
  }

  /*
   * The tooltip body is slotted into hmwc-attachment's
   * default slot. The attachment adds the
   * .attachment__content class and handles position: fixed,
   * display toggling, and anchor positioning. We only need
   * to add the visual (cosmetic) styles here.
   */
  .tooltip__body {
    width: max-content;
    max-width: var(--tooltip-max-width);
    border-radius: var(--tooltip-border-radius);
    background-color: var(--tooltip-background);
    font-family: var(--tooltip-font-family);
    font-size: var(--tooltip-font-size);
    font-weight: var(--tooltip-font-weight);
    line-height: var(--tooltip-line-height);
    color: var(--tooltip-color);
    padding: var(--tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
    z-index: var(--hmwc-z-index-tooltip);
    box-shadow: none;
  }

  /* Disabled state */
  :host([disabled]) .tooltip__body {
    display: none !important;
  }
`;var re=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},W=class extends u{constructor(){super(...arguments),this.trigger="hover",this.placement="top",this.arrow=!0,this.distance=6,this.skidding=0,this.delay=150,this.handleBlur=()=>{this.trigger==="focus"&&this.hide()},this.handleFocus=()=>{this.trigger==="focus"&&this.show()},this.handleClick=()=>{this.trigger==="click"&&this.toggle()},this.handleMouseEnter=()=>{if(this.trigger!=="hover")return;clearTimeout(this.timeout);let t=this.delay instanceof Object?this.delay.show:this.delay;this.timeout=window.setTimeout(()=>this.show(),t)},this.handleMouseLeave=()=>{if(this.trigger!=="hover")return;clearTimeout(this.timeout);let t=this.delay instanceof Object?this.delay.hide:this.delay;this.timeout=window.setTimeout(()=>this.hide(),t)},this.handleKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())}}handleActiveChange(){this.active?(this.emit("hmwc-show"),document.addEventListener("keydown",this.handleKeyDown)):(this.emit("hmwc-hide"),document.removeEventListener("keydown",this.handleKeyDown))}handleDisabledChange(){this.disabled&&this.active&&this.hide()}show(){this.active||this.disabled||(this.active=!0)}hide(){this.active&&(this.active=!1)}toggle(){this.active?this.hide():this.show()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),document.removeEventListener("keydown",this.handleKeyDown)}render(){let t=f({tooltip:!0,active:!!this.active,disabled:!!this.disabled,[this.placement]:!0});return c`
      <div
        part="base"
        class=${t}
        @focusin=${this.handleFocus}
        @focusout=${this.handleBlur}
        @click=${this.handleClick}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}>
        <hmwc-attachment
          placement=${this.placement}
          .distance=${this.distance}
          .skidding=${this.skidding}
          ?arrow=${this.arrow}
          ?active=${this.active}>
          <span slot="anchor" class="tooltip__anchor" part="anchor">
            <slot></slot>
          </span>

          <div part="body" class="tooltip__body" role="tooltip" aria-live=${this.active?"polite":"off"}>
            <slot name="content">${this.label}</slot>
          </div>
        </hmwc-attachment>
      </div>
    `}};W.styles=Ri;W.dependencies=[R];W.slots=["[default]","content"];re([a({type:String})],W.prototype,"label",void 0);re([a({type:String})],W.prototype,"trigger",void 0);re([a({type:String,reflect:!0})],W.prototype,"placement",void 0);re([a({type:Boolean,reflect:!0})],W.prototype,"active",void 0);re([a({type:Boolean,reflect:!0})],W.prototype,"disabled",void 0);re([a({type:Boolean,reflect:!0})],W.prototype,"arrow",void 0);re([a({type:Number})],W.prototype,"distance",void 0);re([a({type:Number})],W.prototype,"skidding",void 0);re([a({type:Number})],W.prototype,"delay",void 0);re([p("active")],W.prototype,"handleActiveChange",null);re([p("disabled")],W.prototype,"handleDisabledChange",null);W.define("hmwc-tooltip",W);var Ti=m`
  :host {
    display: block;
    --hmwc-panel-transparency: 70%;
  }

  .breadcrumb {
    display: flex;
    align-items: center;

    & .breadcrumb__crumb {
      display: flex;
      align-items: center;
      gap: var(--hmwc-spacing-2x-small);
      padding: 0 var(--hmwc-spacing-3x-small);
      border-radius: var(--hmwc-border-radius-large);
      border: var(--hmwc-panel-border-width) solid transparent;
      cursor: default;
      line-height: 1;
      color: var(--hmwc-color-neutral-600);
      font-weight: var(--hmwc-font-weight-semibold);
      letter-spacing: var(--hmwc-letter-spacing-normal);
      text-transform: capitalize;

      &:hover {
        --icon-color: var(--hmwc-color-primary-300);
      }

      &.active {
        &:not(.color-green):not(.color-purple) {
          color: var(--hmwc-color-neutral-750) !important;
        }
        letter-spacing: var(--hmwc-letter-spacing-normal);
        font-weight: var(--hmwc-font-weight-bold);
      }

      &.home {
        color: var(--hmwc-color-cyan-50) !important;
        --icon-size: 0.975rem;
        position: relative;
        top: 1px;
        &:hover {
          transform: scale(1.05);
        }
      }

      &.route,
      &.home {
        padding: var(--hmwc-spacing-3x-small) var(--hmwc-spacing-2x-small);
        cursor: pointer;
        letter-spacing: var(--hmwc-letter-spacing-normal);
        color: var(--hmwc-color-neutral-700);
        font-weight: var(--hmwc-font-weight-bold);
        transition: all var(--hmwc-transition-fast) ease-out;

        &:hover {
          color: var(--hmwc-color-primary-400);
          background: var(--hmwc-panel-background-color);
          border: var(--hmwc-panel-border-width) solid var(--hmwc-panel-border-color);
          box-shadow: var(--hmwc-shadow-small);
          -webkit-text-stroke: 0.1px var(--hmwc-color-primary-500);
          transform: scale(1.01);
        }
      }

      &.color-green {
        --icon-color: var(--hmwc-icon-color-green);
        color: var(--hmwc-icon-color-green) !important;
      }

      &.color-purple {
        --icon-color: var(--hmwc-icon-color-purple);
        color: var(--hmwc-icon-color-purple) !important;
      }

      & .breadcrumb__prefix,
      & .breadcrumb__suffix {
        --icon-size: 0.95rem;
      }

      & .breadcrumb__label {
        position: relative;
      }

      & .breadcrumb__dropdown-arrow {
        --icon-color: var(--hmwc-color-neutral-600);
        --icon-size: 0.66rem;
        position: relative;
        top: 1px;
      }
    }
    & .breadcrumb__action {
      top: -0.75px;
      position: relative;

      --icon-color: var(--hmwc-color-neutral-600);
    }
  }
`;var At=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},ji=!1,N=class extends u{valueUpdate(){this.emit("hmwc-change",{detail:{value:this.value}})}itemsDeprecation(){this.items!==void 0&&(ji||(ji=!0,console.warn("[hmwc-breadcrumb] `items` is deprecated; use `options` instead. See docs/v2/specs/BREADCRUMB_CONSOLIDATION.md \xA73.2.")))}select(){this.route!==!1&&(this.options!==void 0||this.items!==void 0||this.emit("hmwc-navigate",{detail:{route:this.path}}))}setValue(t){t instanceof CustomEvent&&(t=t.detail.value),this.value=t}render(){let t=this.options??this.items,e=f({breadcrumb__crumb:!0,active:!!this.active,route:this.route!==!1,home:!!this.home});return c`
      <div part="base" class="breadcrumb">
        <hmwc-tooltip
          ?disabled=${this.route===!1}
          label=${this.path==="/"?"Dashboard":this.path||""}
          sm
          delay="700"
          placement="top-start">
          <hmwc-attachment
            distance="8"
            ?search=${this.search||!1}
            prefix=${y(this.prefix)}
            .items=${t}
            placement="bottom-end"
            @hmwc-select=${this.setValue}>
            <div part="content" class=${e} slot="anchor" @click=${this.select}>
              ${this.prefix?c`<div class="breadcrumb__prefix"><hmwc-icon flex src=${this.prefix}></hmwc-icon></div>`:""}
              ${this.icon?c`<div class="breadcrumb__icon"><hmwc-icon flex src=${this.icon}></hmwc-icon></div>`:""}
              ${this.label?c`<div class="breadcrumb__label">${this.value||this.label}</div>`:""}
              ${this.suffix?c`<div class="breadcrumb__suffix"><hmwc-icon flex src=${this.suffix}></hmwc-icon></div>`:""}
              ${t?c`<div class="breadcrumb__dropdown-arrow"><hmwc-icon flex src="caret-down"></hmwc-icon></div>`:""}
            </div>
          </hmwc-attachment>
        </hmwc-tooltip>
        <slot name="actions" part="actions" class="breadcrumb__actions">
          ${this.actions?c`<hmwc-attachment
                icon="three-dots-vertical"
                .items=${this.actions}
                @hmwc-select=${r=>this.emit("hmwc-select",{detail:{value:r.detail.value}})}></hmwc-attachment>`:""}
        </slot>
      </div>
    `}};N.styles=Ti;N.dependencies=[_,W,R];N.slots=["actions"];At([a({type:String,reflect:!0})],N.prototype,"prefix",void 0);At([a({type:String,reflect:!0})],N.prototype,"suffix",void 0);At([a({type:String,reflect:!0})],N.prototype,"icon",void 0);At([a({type:String,reflect:!0})],N.prototype,"label",void 0);At([a({type:String,reflect:!0})],N.prototype,"path",void 0);At([a({type:Boolean,reflect:!0})],N.prototype,"active",void 0);At([a({type:Array,reflect:!0})],N.prototype,"options",void 0);At([a({type:Array,reflect:!0})],N.prototype,"items",void 0);At([a({type:String,reflect:!0})],N.prototype,"value",void 0);At([a({type:Boolean,reflect:!0})],N.prototype,"search",void 0);At([a({type:Boolean,reflect:!0})],N.prototype,"home",void 0);At([a({type:Boolean,reflect:!0})],N.prototype,"route",void 0);At([a({type:Array})],N.prototype,"actions",void 0);At([p("value",{waitUntilFirstUpdate:!0})],N.prototype,"valueUpdate",null);At([p("items",{waitUntilFirstUpdate:!0})],N.prototype,"itemsDeprecation",null);N.define("hmwc-breadcrumb",N);var Fi=(n,t,e)=>{if(!n||!t||t.length===0)return[];let r=n.path.split("/"),o=[];return r.forEach((i,s)=>{let l=i===""?"/":t.find(v=>v.path===r.slice(0,s+1).join("/"))?.path||i,h=t.find(v=>v.path===r.slice(0,s+1).join("/")),d=e?.find(v=>v.path===l),g=d?{...d,path:l,home:s===0}:{path:l,label:l==="/"?void 0:h?.title||"",icon:l==="/"?"house-door-fill":void 0,home:s===0};o.push(g)}),o};var Pi=m`
  :host {
    display: block;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    width: 100%;
    gap: calc(0.5 * var(--hmwc-spacing-3x-small));
    position: relative;
    left: -0.25rem;

    & .breadcrumbs__seperator {
      hmwc-icon {
        color: var(--hmwc-color-neutral-600);
      }
    }
  }
`;var ue=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Ni=!1,Li=!1,na=n=>({label:n.label,path:n.path,icon:n.icon??void 0,prefix:n.prefix??void 0,suffix:n.suffix??void 0,home:n.home,options:n.options??n.items,actions:n.actions}),yt=class extends u{constructor(){super(...arguments),this.routes=[],this.separator="chevron-right",this._onNavigate=t=>{let e=t;t.stopPropagation(),this.emit("hmwc-navigate",{detail:e.detail})},this._onChange=t=>{let e=t;t.stopPropagation(),this.emit("hmwc-change",{detail:e.detail})},this._onSelect=t=>{let e=t;t.stopPropagation(),this.emit("hmwc-select",{detail:e.detail})}}seperatorDeprecation(){this.seperator!==void 0&&(Ni||(Ni=!0,console.warn("[hmwc-breadcrumbs] `seperator` is misspelled and deprecated; use `separator`. See docs/v2/specs/BREADCRUMB_CONSOLIDATION.md \xA73.3.")),this.separator=this.seperator)}overridesDeprecation(){this.overrides!==void 0&&(Li||(Li=!0,console.warn("[hmwc-breadcrumbs] `overrides` is deprecated; pass plain-object `crumbs: BreadcrumbDescriptor[]` instead. See docs/v2/specs/BREADCRUMB_CONSOLIDATION.md \xA73.2 + \xA74.2.")))}_resolveCrumbs(){let t=this.crumbs??this.overrides?.map(na);return this.route?Fi(this.route,this.routes,t):this.crumbs&&this.crumbs.length>0?this.crumbs:t??[]}_renderSeparator(){return c`<slot name="separator" part="separator" class="breadcrumbs__separator"><hmwc-icon flex src=${this.separator}></hmwc-icon></slot>`}render(){let t=this._resolveCrumbs();return c`
      <div part="base" class="breadcrumbs" @hmwc-navigate=${this._onNavigate} @hmwc-change=${this._onChange} @hmwc-select=${this._onSelect}>
        ${t.map((e,r)=>c`
            <hmwc-breadcrumb
              .label=${e.label}
              .path=${e.path}
              .icon=${e.icon}
              .prefix=${e.prefix}
              .suffix=${e.suffix}
              ?home=${!!e.home}
              ?active=${r===t.length-1}
              .options=${e.options}
              .actions=${e.actions}></hmwc-breadcrumb>
            ${r<t.length-1?this._renderSeparator():""}
          `)}
        <slot></slot>
      </div>
    `}};yt.styles=Pi;yt.dependencies=[_,N];yt.slots=["separator"];ue([a({type:Array})],yt.prototype,"crumbs",void 0);ue([a({type:Array})],yt.prototype,"overrides",void 0);ue([a({type:String,reflect:!0})],yt.prototype,"route",void 0);ue([a({type:Array})],yt.prototype,"routes",void 0);ue([a({type:String,reflect:!0})],yt.prototype,"separator",void 0);ue([a({type:String,attribute:"seperator"})],yt.prototype,"seperator",void 0);ue([p("seperator",{waitUntilFirstUpdate:!1})],yt.prototype,"seperatorDeprecation",null);ue([p("overrides",{waitUntilFirstUpdate:!1})],yt.prototype,"overridesDeprecation",null);yt.define("hmwc-breadcrumbs",yt);var Ii=m`
  :host {
    --card-height: auto;
    --card-padding: var(--hmwc-spacing-medium) var(--hmwc-spacing-large);
    --card-radius: var(--hmwc-border-radius-x-large);
    --card-spacing: initial;
    --card-icon-color: var(--hmwc-color-neutral-400);
    --card-border: var(--hmwc-panel-border-color);
    --card-background: var(--hmwc-panel-background-color);
    --card-prefix-icon-size: 0.88rem;

    --container-height: fit-content;
    --alert-background: var(--hmwc-color-neutral-100);

    display: block;
  }
  hmwc-input {
    --input-background: var(--hmwc-color-neutral-300);
    --input-border: var(--hmwc-input-border-width) solid var(--hmwc-panel-border-color);
  }
  :host([fluid]) {
    width: 100%;
  }

  hmwc-text {
    --text-color: var(--hmwc-color-neutral-700);
    color: var(--text-color);
  }

  hmwc-button {
    &::part(base) {
      box-shadow: var(--hmwc-shadow-small);
      background: var(--hmwc-color-neutral-800);
    }
  }

  .card {
    display: block;
    height: var(--card-height);
    background-color: var(--card-background);
    box-shadow: var(--hmwc-shadow-x-small);
    border: solid var(--hmwc-panel-border-width) var(--card-border);
    border-radius: var(--card-radius);
    font-family: var(--hmwc-font-sans);
    line-height: 1.8;
    color: var(--hmwc-color-neutral-900);
    box-shadow: var(--hmwc-shadow-medium);
    --text-color: var(--hmwc-color-neutral-700);
    color: var(--text-color);
    position: relative;
    // overflow: hidden;
    height: var(--container-height);
    width: var(--container-width);
    &::slotted(hmwc-text) {
      --text-color: var(--hmwc-color-neutral-700);
      color: var(--text-color);
    }

    & .card__prefix,
    & .card__suffix {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: var(--card-prefix-icon-size);
      height: var(--card-prefix-icon-size);
      line-height: 0;
    }

    & .card__body {
      display: flex;
      flex-direction: column;
      height: var(--container-height);
      width: 100%;
      align-items: var(--container-alignment);
      justify-content: var(--container-justification);
      gap: var(--container-spacing);
      padding: var(--card-padding);
      border-radius: var(--container-border-radius);
      aspect-ratio: var(--container-aspect-ratio);
      //   overflow-y: var(--container-scrollbar);
      overflow: visible;
      box-shadow: var(--container-shadow);
      background: var(--container-background);
      background-size: cover;

      &::slotted(p) {
        margin: 0;
      }

      &::slotted(hmwc-text) {
        --text-color: var(--hmwc-color-neutral-700);
        color: var(--text-color);
      }

      & .card__label {
        display: inline-flex;
        align-items: center;
        gap: var(--hmwc-spacing-x-small);
        font-weight: var(--hmwc-font-weight-bold);
        white-space: nowrap;
        margin: var(--hmwc-spacing-3x-small) 0 var(--hmwc-spacing-small) 0;
        color: var(--hmwc-color-neutral-700);
        line-height: 1;
        hmwc-icon {
          --icon-color: var(--card-icon-color);
          --icon-size: var(--card-prefix-icon-size);
          flex-shrink: 0;
          &::part(base) {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }

    & .card__header {
      display: inline-flex;
      border-bottom: solid 1px var(--card-border);
      padding: var(--hmwc-spacing-x-small) var(--hmwc-spacing-medium);
      font-weight: var(--hmwc-font-weight-bold);
      color: var(--hmwc-color-neutral-700);
      white-space: nowrap;
      align-items: center;
      gap: var(--hmwc-spacing-x-small);
      width: 100%;
      hmwc-icon {
        --icon-color: var(--card-icon-color);
        --icon-size: var(--card-prefix-icon-size);
        flex-shrink: 0;
        &::part(base) {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      & .card__header-control {
        display: flex;
        margin-left: auto;
      }
    }

    & .card__footer {
      display: block;
      border-top: solid 1px var(--card-border);
      padding: calc(var(--hmwc-spacing-medium) / 1.5) calc(1.5 * var(--hmwc-spacing-medium));
    }

    & .card__image {
      display: flex;
      border-top-left-radius: var(--card-radius);
      border-top-right-radius: var(--card-radius);
      margin: calc(-1 * 1px);
      overflow: hidden;

      &::slotted(img),
      img {
        display: block;
        width: 100%;
      }
    }

    &:not(.header) {
      & .card__header {
        display: none;
      }
    }

    &:not(.footer) {
      & .card__footer {
        display: none;
      }
    }

    &:not(.image) {
      & .card__header {
        border-top-left-radius: var(--card-radius);
        border-top-right-radius: var(--card-radius);
      }

      & .card__image {
        display: none;
      }
    }

    &.label {
      & .card__body {
        padding-bottom: var(--hmwx-spacing-x-large);
      }
    }

    &.fluid {
      height: 100%;
    }

    &:not(.blue):not(.purple):not(.green):not(.yellow):not(.orange):not(.red) {
      & .card__body {
        & .card__label hmwc-accordion {
          --icon-color: var(--card-icon-color);
          opacity: 0.75;
        }
      }
    }

    &.blue {
      --card-icon-color: var(--hmwc-icon-color-blue);
    }
    &.purple {
      --card-icon-color: var(--hmwc-icon-color-purple);
    }
    &.green {
      --card-icon-color: var(--hmwc-icon-color-green);
    }
    &.yellow {
      --card-icon-color: var(--hmwc-icon-color-yellow);
    }
    &.orange {
      --card-icon-color: var(--hmwc-icon-color-orange);
    }
    &.red {
      --card-icon-color: var(--hmwc-icon-color-red);
    }

    &.primary {
      --card-icon-color: var(--hmwc-color-primary-600);
    }

    &.success {
      --card-icon-color: var(--hmwc-color-success-600);
    }

    &.neutral {
      --card-icon-color: var(--hmwc-color-neutral-600);
    }

    &.warning {
      --card-icon-color: var(--hmwc-color-warning-600);
    }

    &.danger {
      --card-icon-color: var(--hmwc-color-danger-600);
    }
    &.alt {
      --card-background: var(--hmwc-panel-border-color);
    }
    &.xs {
      min-width: 200px;
      --card-radius: var(--hmwc-border-radius-medium);
      --card-padding: 0;
      --card-prefix-icon-size: 0.75rem;
    }

    &.sm {
      min-width: 200px;
      --card-radius: var(--hmwc-border-radius-medium);
      --card-padding: var(--hmwc-spacing-small) calc(1.5 * var(--hmwc-spacing-x-small));
      --card-prefix-icon-size: 0.8rem;

      & .card__header {
        padding: calc(var(--hmwc-spacing-x-small) / 2) var(--hmwc-spacing-x-small);
      }

      & .card__body {
        gap: var(--hmwc-spacing-small);
      }
    }

    &.md {
      min-width: 300px;
      max-width: 500px;
      --card-radius: calc(0.95 * var(--hmwc-border-radius-x-large));
      --card-padding: var(--hmwc-spacing-medium) calc(1.5 * var(--hmwc-spacing-medium));
      --card-prefix-icon-size: 0.95rem;

      & .card__body {
        gap: var(--hmwc-spacing-x-large);
      }
    }

    &.lg {
      width: 100%;
      flex: 1;
      box-shadow: var(--hmwc-shadow-x-large);
      --card-padding: calc(1.33 * var(--hmwc-spacing-x-large)) calc(1.5 * var(--hmwc-spacing-x-large));
      --card-radius: var(--hmwc-border-radius-x-large);
      --card-prefix-icon-size: 1.1rem;

      & .card__header {
        padding: calc(var(--hmwc-spacing-x-large) / 2) var(--hmwc-spacing-x-large);
      }

      & .card__body {
        gap: calc(0.25rem + var(--hmwc-spacing-x-large));
      }
    }

    &.gap-xs {
      --card-spacing: 0.25rem;
    }
    &.gap-sm {
      --card-spacing: 0.5rem;
    }

    &.gap-md {
      --card-spacing: 1rem;
    }

    &.gap-lg {
      --card-spacing: 2rem;
    }

    &.gap-xl {
      --card-spacing: 4rem;
    }

    &.gap-xxl {
      --card-spacing: 12rem;
    }

    &.elevation-x-small {
      box-shadow: var(--hmwc-shadow-x-small);
    }

    &.elevation-small {
      box-shadow: var(--hmwc-shadow-small);
    }

    &.elevation-medium {
      box-shadow: var(--hmwc-shadow-medium);
    }

    &.elevation-large {
      box-shadow: var(--hmwc-shadow-large);
    }

    &.elevation-x-large {
      box-shadow: var(--hmwc-shadow-x-large);
    }

    &.pad-none {
      --card-padding: 0;
    }

    &.pad-xs {
      --card-padding: var(--hmwc-spacing-x-small);
    }

    &.pad-sm {
      --card-padding: var(--hmwc-spacing-small);
    }

    &.pad-md {
      --card-padding: var(--hmwc-spacing-medium);
    }

    &.pad-lg {
      --card-padding: var(--hmwc-spacing-large);
    }

    &.pad-xl {
      --card-padding: var(--hmwc-spacing-x-large);
    }

    &.scale-small,
    &.scale-medium,
    &.scale-large {
      cursor: pointer;
      transition: transform 0.15s ease-out;
      transform: scale(1);
    }

    &.scale-small {
      &:hover:not(:has(&:hover)) {
        transform: scale(1.02);
      }
    }

    &.scale-medium {
      &:hover:not(:has(&:hover)) {
        transform: scale(1.05);
      }
    }

    &.scale-large {
      &:hover:not(:has(&:hover)) {
        transform: scale(1.08);
      }
    }

    & hmwc-calendar {
      &::part(base) {
        background-color: var(--hmwc-color-neutral-100);
      }
    }

    & hmwc-input {
      &:part(calendar) {
        & hmwc-calendar {
          &::part(base) {
            background-color: var(--hmwc-color-neutral-100);
          }
        }
      }
    }

    & hmwc-dropdown {
      &::part(trigger) {
        & hmwc-menu {
          background: var(--hmwc-color-neutral-0);
          border-radius: var(--hmwc-border-radius-large);
        }
      }
    }
  }
`;var Ht=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},rt=class extends P{handleClick(){this.emit("hmwc-click",{})}render(){let t=f({card:!0,fluid:!!this.fluid,header:this.header||this.controllers.slot.test("header"),footer:this.footer||this.controllers.slot.test("footer"),image:this.img||this.controllers.slot.test("image"),primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger,alt:!!this.alt});return c`
      <div part="base" class=${t} @click=${this.handleClick}>
        <slot name="image" part="image" class="card__image"> ${this.img&&c`<img src=${this.img} alt="Card Image" />`} </slot>

        <div part="header" class="card__header">
          ${this.prefix&&this.header?c`<span class="card__prefix"> <hmwc-icon src=${this.prefix}></hmwc-icon> </span>`:""} ${this.header}
          ${this.suffix&&this.header?c`<span class="card__suffix"> <hmwc-icon src=${this.suffix}></hmwc-icon> </span>`:""}
          <slot name="header"></slot>
          <div part="header-control" class="card__header-control">
            <slot name="control"></slot>
          </div>
        </div>

        <div part="body" class="card__body">
          ${this.label?c`
                <div part="label" class="card__label">
                  ${this.prefix?c`<span class="card__prefix"> <hmwc-icon src=${this.prefix}></hmwc-icon> </span>`:""} ${this.label}
                  ${this.suffix?c`<span class="card__suffix"> <hmwc-icon src=${this.suffix}></hmwc-icon> </span>`:""}
                </div>
              `:""}
          <slot></slot>
        </div>

        <slot name="footer" part="footer" class="card__footer"> ${this.footer} </slot>
      </div>
    `}};rt.styles=Ii;rt.slots=["header","footer","image"];Ht([a({type:String})],rt.prototype,"label",void 0);Ht([a({type:String})],rt.prototype,"header",void 0);Ht([a({type:String})],rt.prototype,"footer",void 0);Ht([a({type:String})],rt.prototype,"img",void 0);Ht([a({type:String})],rt.prototype,"prefix",void 0);Ht([a({type:String})],rt.prototype,"suffix",void 0);Ht([a({type:Boolean,reflect:!0})],rt.prototype,"primary",void 0);Ht([a({type:Boolean,reflect:!0})],rt.prototype,"alt",void 0);Ht([a({type:Boolean,reflect:!0})],rt.prototype,"success",void 0);Ht([a({type:Boolean,reflect:!0})],rt.prototype,"neutral",void 0);Ht([a({type:Boolean,reflect:!0})],rt.prototype,"warning",void 0);Ht([a({type:Boolean,reflect:!0})],rt.prototype,"danger",void 0);Ht([a({type:String})],rt.prototype,"shadow",void 0);rt.define("hmwc-card",rt);var Hi=m`
  :host {
    display: inline-block;
    height: 100%;
    width: 100%;
  }

  .chart {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;

    & .chart__pie {
      height: 100%;
      width: 100%;
      border-radius: 50%;

      /*
       * Donut variant — punch a concentric circular hole in the
       * pie using a radial-gradient mask. The cutout radius is
       * exposed as --chart-donut-cutout so consumers can theme
       * the hole's size (e.g. for a center-stat readout).
       *
       * Default cutout = 55% of the radius — leaves a generous
       * stroke for color recognition while keeping room for a
       * 3-4 character center stat.
       */
      &.chart__pie--donut {
        --chart-donut-cutout: 55%;

        -webkit-mask: radial-gradient(circle, transparent calc(var(--chart-donut-cutout) - 0.5px), black var(--chart-donut-cutout));
        mask: radial-gradient(circle, transparent calc(var(--chart-donut-cutout) - 0.5px), black var(--chart-donut-cutout));
      }
    }

    & .chart__chart {
      display: flex;
      height: 100%;
      width: 100%;
      justify-content: space-between;
      gap: var(--hmwc-spacing-x-small);
      margin-top: auto;
      margin-left: 2.25rem;
      overflow: hidden;
      animation: animation 500ms ease-out;
      z-index: 1;

      .chart__item {
        justify-content: end;
        display: flex;
        flex-direction: column;
        width: 100%;

        & .chart__item-progress {
          display: flex;
          border-radius: var(--hmwc-border-radius-small);
          background-color: var(--hmwc-color-primary-600);
          box-shadow: var(--hmwc-shadow-small);

          &.null {
            height: 100% !important;
            opacity: 0;
          }
        }
      }
    }

    & .chart__indicator {
      display: flex;
      position: absolute;
      align-items: center;
      left: 0;
      width: 100%;
      font-size: var(--hmwc-font-size-x-small);
      color: var(--hmwc-color-neutral-600);
      transform: translateY(-50%);

      & .chart__indicator-label {
        display: flex;
        min-width: 1.25rem;
        justify-content: end;
      }

      & .chart__indicator-line {
        display: flex;
        flex-grow: 1;
        width: 100%;
        height: 0;
        border-bottom: 0.1px solid var(--hmwc-color-neutral-300);
        margin-left: 1rem;
        opacity: 0.5;
      }
    }

    &.small {
      --chart-size: 32px;
    }

    &.medium {
      --chart-size: 64px;
    }

    &.large {
      --chart-size: 156px;
    }
  }

  @keyframes animation {
    0% {
      height: 0;
    }

    100% {
      height: 100%;
    }
  }
`;var Ui=Object.freeze(["primary","success","warning","danger","alt","neutral"]),la=n=>`var(--hmwc-color-${n}-600)`,ca=(n,t)=>n||Ui[t%Ui.length],Wi=(n,t)=>la(ca(n,t));var Sr="var(--hmwc-color-neutral-200)",ha=n=>Number.isFinite(n)?n<0?0:n:0,Vi=n=>`${Math.max(0,Math.min(100,n)).toFixed(4).replace(/\.?0+$/,"")}%`,qi=n=>{if(!n||n.length===0)return`conic-gradient(${Sr} 0% 100%)`;let t=[...n].map(i=>({...i,value:ha(i.value)})).filter(i=>i.value>0).sort((i,s)=>s.value-i.value);if(t.length===0)return`conic-gradient(${Sr} 0% 100%)`;let e=t.reduce((i,s)=>i+s.value,0);if(e===0)return`conic-gradient(${Sr} 0% 100%)`;let r=[],o=0;return t.forEach((i,s)=>{let l=i.value/e*100,h=o,d=s===t.length-1?100:o+l;o=d;let g=Wi(i.color,s);r.push(`${g} ${Vi(h)} ${Vi(d)}`)}),`conic-gradient(${r.join(", ")})`};var dr=n=>{let t=n.kind==="donut",e=qi(n.data);return c`<div part="pie" class="chart__pie ${t?"chart__pie--donut":""}" style="background: ${e}"></div>`};var fe=n=>{let{parentHeight:t,indicators:e,data:r,labeled:o}=n;return c`${e?.map(({value:i,label:s})=>c`
        <div class="chart__indicator" style="top: ${t-t*(i/100)}px">
          <span class="chart__indicator-label">${s}</span>
          <div class="chart__indicator-line"></div>
        </div>
      `)}
    <div part="chart" class="chart__chart">
      ${r?.map(({label:i,value:s})=>c`
          <hmwc-tooltip label=${i} arrow placement="right" delay="200">
            <div class="chart__item">
              <div class="chart__item-progress ${s?"":"null"}" style="height: ${t*(s/100)}px"></div>
              ${o?c`<div class="chart__item-label">${i}</div>`:""}
            </div>
          </hmwc-tooltip>
        `)}

      <slot></slot>
    </div>`};var Gi=new Set(["line","area","progress","gauge","sparkline"]),zr=Object.freeze({pie:dr,donut:dr,bar:fe,line:fe,area:fe,progress:fe,gauge:fe,sparkline:fe});var Ut=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Yi=!1,Ki=!1,Xi=!1,it=class extends u{constructor(){super(...arguments),this.kind="bar"}pieDeprecation(){this.pie&&(this.kind="pie",!Yi&&(Yi=!0,console.warn('[hmwc-chart] `pie` is deprecated; use `kind="pie"` instead. See docs/v2/specs/CHART_EXPANSION.md \xA7PR4.')))}donutDeprecation(){this.donut&&(this.kind="donut",!Xi&&(Xi=!0,console.warn('[hmwc-chart] `donut` is deprecated; use `kind="donut"` instead. See docs/v2/specs/CHART_EXPANSION.md \xA7PR4.')))}barDeprecation(){this.bar&&(this.kind="bar",!Ki&&(Ki=!0,console.warn('[hmwc-chart] `bar` is deprecated; use `kind="bar"` instead (default). See docs/v2/specs/CHART_EXPANSION.md \xA7PR4.')))}connectedCallback(){super.connectedCallback(),this.animation="scale-in",this.indicators||(this.indicators=[{value:25,label:"25%"},{value:50,label:"50%"},{value:75,label:"75%"}])}renderContext(){return{kind:this.kind,data:this.data,indicators:this.indicators,labeled:this.labeled,parentHeight:this.parentElement?.clientHeight||this.clientHeight}}render(){let t=this.renderContext(),e=t.kind==="pie"||t.kind==="donut",r=t.kind==="donut",o=t.kind==="bar"||Gi.has(t.kind),i=f({chart:!0,pie:e,donut:r,bar:o,small:!!this.sm,medium:!!this.md,large:!!this.lg}),s=zr[t.kind]??zr.bar;return c`<div part="base" class=${i}>${s(t)}</div>`}};it.styles=Hi;it.dependencies=[W];Ut([a({type:String,reflect:!0})],it.prototype,"kind",void 0);Ut([a({type:Array})],it.prototype,"data",void 0);Ut([a({type:Boolean})],it.prototype,"pie",void 0);Ut([a({type:Boolean})],it.prototype,"donut",void 0);Ut([a({type:Array})],it.prototype,"indicators",void 0);Ut([a({type:Boolean})],it.prototype,"bar",void 0);Ut([a({type:Boolean})],it.prototype,"labeled",void 0);Ut([a({type:Boolean})],it.prototype,"sm",void 0);Ut([a({type:Boolean})],it.prototype,"md",void 0);Ut([a({type:Boolean})],it.prototype,"lg",void 0);Ut([p("pie")],it.prototype,"pieDeprecation",null);Ut([p("donut")],it.prototype,"donutDeprecation",null);Ut([p("bar")],it.prototype,"barDeprecation",null);it.define("hmwc-chart",it);var Ji=m`
  :host {
    --dropdown-width: initial;
    --dropdown-radius: var(--hmwc-border-radius-large);
    --dropdown-background: var(--hmwc-input-background-color);
    --dropdown-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color);
    --dropdown-outline: none;
    --dropdown-shadow: var(--hmwc-shadow-x-small);

    display: inline-block;
    position: relative;
    width: fit-content;
  }

  /* When the dropdown has no label, center-align in the row
     so the trigger lines up with checkboxes / other controls. */
  :host([no-label]) {
    align-self: center;
  }

  :host([fluid]) {
    width: 100%;
  }

  /* Active state — input-like focus ring */
  :host([active]:not([disabled])) .dropdown {
    --dropdown-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color-focus);
    --dropdown-background: var(--hmwc-input-background-color-focus);
  }

  :host([active]:not([disabled])) .dropdown .dropdown__trigger::part(base) {
    border-color: var(--hmwc-input-border-color-focus);
    box-shadow: 0 0 0 var(--hmwc-focus-ring-width) var(--hmwc-input-focus-ring-color);
    transform: none;
  }

  :host([active]:not([disabled])) .dropdown .dropdown__trigger::part(suffix) {
    transform: rotate(-180deg);
    transform-origin: center;
    transition: transform 0.15s ease-out;
    padding-inline-end: var(--hmwc-spacing-x-small);
    padding-inline-start: 0;
  }

  /* Active + invalid — use invalid focus ring colors */
  :host([active]:not([disabled])) .dropdown.invalid {
    --dropdown-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color-invalid);
  }

  :host([active]:not([disabled])) .dropdown.invalid .dropdown__trigger::part(base) {
    border-color: var(--hmwc-input-border-color-invalid);
    box-shadow: 0 0 0 var(--hmwc-focus-ring-width) var(--hmwc-input-focus-ring-color-invalid);
  }

  .dropdown {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: var(--hmwc-spacing-3x-small);

    &.disabled {
      --dropdown-background: var(--hmwc-input-filled-background-color-disabled);
    }

    & .dropdown__label {
      display: none;
      width: 100%;
      padding: 0;
      font-family: var(--hmwc-font-sans);
      white-space: nowrap;
    }

    & .dropdown__help {
      text-align: end;
      width: 100%;
      display: block;
      color: var(--hmwc-input-help-text-color);
      font-size: var(--hmwc-font-size-small);
      font-family: var(--hmwc-font-sans);
      line-height: 2;
    }

    & .dropdown__menu {
      hmwc-menu-item {
        --menu-item-spacing: var(--hmwc-spacing-2x-small) var(--hmwc-spacing-small) var(--hmwc-spacing-2x-small) calc(1.1 * var(--hmwc-spacing-small));
      }
    }

    & .dropdown__trigger {
      --button-width: var(--dropdown-width);
      --button-radius: var(--dropdown-radius);
      --button-border: var(--dropdown-border);
      --button-outline: var(--dropdown-outline);
      --button-shadow: 0 0 0 var(--hmwc-focus-ring-width) var(--hmwc-input-focus-ring-color);

      --icon-color: var(--hmwc-color-neutral-500);
      --icon-size: 0.75rem;

      &::part(base) {
        font-family: var(--hmwc-font-sans);
        color: var(--hmwc-input-color);
        font-weight: var(--hmwc-font-weight-normal);
        width: var(--dropdown-width);
        box-shadow: var(--hmwc-shadow-x-small);
        background-color: var(--dropdown-background);
        transition: var(--hmwc-transition-fast) color, var(--hmwc-transition-fast) border, var(--hmwc-transition-fast) box-shadow,
          var(--hmwc-transition-fast) background-color, var(--hmwc-transition-fast) transform ease;
      }

      &::part(label) {
        line-height: 2;
        flex-grow: 1;
        text-align: start;
        max-width: var(--dropdown-width);
        overflow: hidden;
        font-size: var(--hmwc-input-font-size-medium);
      }

      &::part(suffix) {
        --icon-color: var(--hmwc-color-neutral-500);
        --icon-size: 0.8rem;
        height: fit-content;
        transition: transform var(--hmwc-transition-fast) ease;
      }
    }

    &.label {
      & .dropdown__label {
        display: flex;
        color: var(--hmwc-color-neutral-600);
        font-size: calc(0.95 * var(--hmwc-button-font-size-medium));
      }
    }

    &:hover:not(.disabled):not(:focus-within) {
      --dropdown-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color-hover);
      --dropdown-background: var(--hmwc-input-background-color-hover);

      & .dropdown__trigger::part(base) {
        box-shadow: 0 2px 8px hsl(from var(--hmwc-color-primary-600) h s l / 0.2);
      }
    }

    /** filled */
    &.filled:not(.disabled) {
      --dropdown-background: var(--hmwc-input-filled-background-color);

      &:hover:not(:focus-within) {
        --dropdown-background: var(--hmwc-input-filled-background-color-hover);
      }

      &:focus-within {
        --dropdown-background: var(--hmwc-input-filled-background-color-focus);
      }
    }

    &.invalid:not(.disabled) {
      --dropdown-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color-invalid);

      &:hover:not(:focus-within) {
        --dropdown-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color-invalid-hover);
      }

      &:focus-within {
        --dropdown-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color-invalid);
        --dropdown-outline: var(--hmwc-focus-ring-style) var(--hmwc-focus-ring-width) var(--hmwc-focus-ring-color-invalid);
        --dropdown-shadow: 0 0 0 var(--hmwc-focus-ring-width) var(--hmwc-input-focus-ring-color-invalid);
      }

      & .input__help {
        color: var(--hmwc-input-border-color-invalid);
      }
    }

    &.small {
      & .dropdown__trigger::part(label) {
        font-size: var(--hmwc-font-size-small);
      }
    }

    &.medium {
      & .dropdown__trigger::part(label) {
        font-size: var(--hmwc-font-size-medium);
      }
    }

    &.large {
      & .dropdown__trigger::part(label) {
        font-size: var(--hmwc-font-size-large);
      }
    }

    &.pill {
      & .dropdown__menu {
        & hmwc-menu::part(base) {
          border-radius: var(--hmwc-border-radius-x-large);
        }
      }
    }
  }
`;var ft=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},L=class extends F{constructor(){super(...arguments),this.active=!1,this.items=[],this.placeholder="",this.placement="bottom-start",this.sync=!0,this.distance=1,this.skidding=0,this._menuSelectHandler=t=>{this.select(t.detail.value),this.hide()},this._documentMousedownHandler=t=>{let e=t.target;this.contains(e)||this.hide()},this._baseClickHandler=t=>{let e=this._menu;e&&t.composedPath().includes(e)||(this.active=!this.active)}}show(){this.disabled||(this.active=!0)}hide(){this.disabled||(this.active=!1)}toggle(){this.disabled||(this.active=!this.active)}select(t){this.value=t,this.emit("hmwc-select",{detail:{value:t}})}get _menu(){return this.menu??this.querySelector("hmwc-menu")}listen(t){t==="add"&&this.listen("remove"),this._menu?.[`${t}EventListener`]("hmwc-select",this._menuSelectHandler),document[`${t}EventListener`]("mousedown",this._documentMousedownHandler)}handleValueChange(){this.emit("hmwc-change",{detail:{value:this.value}})}async handleItemsChange(){await this.updateComplete,this.listen("add")}handleOpenChange(){this.emit(`hmwc-${this.active?"show":"hide"}`)}handleLabelChange(){this.toggleAttribute("no-label",!this.label)}disconnectedCallback(){super.disconnectedCallback(),this.listen("remove")}firstUpdated(){super.connectedCallback(),this.listen("add"),this.toggleAttribute("no-label",!this.label)}render(){let t=f({dropdown:!0,disabled:!!this.disabled,small:!!this.sm,medium:!!this.md,large:!!this.lg,filled:!!this.filled,label:!!this.label,pill:!!this.pill,invalid:!!this.invalid});return c`
      <div part="base" class=${t} @click=${this._baseClickHandler}>
        <slot name="label" part="label" class="dropdown__label">${this.label}</slot>

        <hmwc-attachment
          .placement=${this.placement}
          .distance=${this.distance??2}
          .skidding=${this.skidding??0}
          ?sync=${this.sync}
          ?active=${this.active}>
          ${this.items.length?c` <hmwc-menu compact part="anchor" class="dropdown__menu" .filter=${this.filter} .items=${this.items}></hmwc-menu>`:c`<slot @slotchange=${()=>this.listen("add")}></slot>`}

          <hmwc-button
            slot="anchor"
            part="trigger"
            class="dropdown__trigger"
            aria-label=${y(this.name)}
            ?fluid=${this.fluid}
            ?disabled=${this.disabled}
            ?pill=${this.pill}
            ?sm=${this.sm}
            ?md=${this.md}
            ?lg=${this.lg}
            label=${this.value||this.placeholder||""}
            suffix="chevron-down"
            @hmwc-focus=${()=>this.emit("hmwc-focus")}
            @hmwc-blur=${()=>this.emit("hmwc-blur")}></hmwc-button>
        </hmwc-attachment>

        <!-- Help Text -->
        <slot name="help" part="help" class="dropdown__help" aria-hidden=${!this.help}> ${this.invalid&&this.error||this.help} </slot>
      </div>
    `}};L.styles=Ji;L.slots=["menu"];L.dependencies=[R,w,z];ft([a({type:Boolean,reflect:!0})],L.prototype,"active",void 0);ft([a({type:Array})],L.prototype,"items",void 0);ft([a({type:String})],L.prototype,"placeholder",void 0);ft([a({type:String})],L.prototype,"placement",void 0);ft([a({type:String,reflect:!0})],L.prototype,"filter",void 0);ft([a({type:String})],L.prototype,"help",void 0);ft([a({type:Boolean})],L.prototype,"sync",void 0);ft([a({type:Boolean,reflect:!0})],L.prototype,"pill",void 0);ft([a({type:Boolean,reflect:!0})],L.prototype,"filled",void 0);ft([a({type:Number})],L.prototype,"distance",void 0);ft([a({type:Number})],L.prototype,"skidding",void 0);ft([a({type:Boolean,reflect:!0})],L.prototype,"fluid",void 0);ft([T(".dropdown__trigger")],L.prototype,"trigger",void 0);ft([T(".dropdown__menu")],L.prototype,"menu",void 0);ft([p("value",{waitUntilFirstUpdate:!0})],L.prototype,"handleValueChange",null);ft([p("items",{waitUntilFirstUpdate:!0})],L.prototype,"handleItemsChange",null);ft([p("active",{waitUntilFirstUpdate:!0})],L.prototype,"handleOpenChange",null);ft([p("label")],L.prototype,"handleLabelChange",null);L.define("hmwc-dropdown",L);var Zi=m`
  :host {
    --pagination-color: var(--hmwc-color-primary-600);

    display: block;
  }

  .pagination {
    display: flex;
    gap: var(--hmwc-spacing-x-small);
    align-items: center;
    padding: 0;
    margin: 0;

    & .pagination-page {
      margin: 0 calc(0.75 * var(--hmwc-spacing-3x-small));
      align-items: center;
      justify-content: center;
      display: flex;

      &.nav {
        margin: 0 var(--hmwc-spacing-small);
        --icon-size: 0.8rem;
        transition: var(--hmwc-transition-fast) scale ease;

        &:hover:not([disabled]) {
          scale: 1.08;
        }

        &:active:not([disabled]) {
          scale: 0.95;
        }
      }

      &:not(.nav):not(.elipsis) {
        transition: var(--hmwc-transition-fast) scale ease;

        &::part(base) {
          border: var(--hmwc-input-border-width) solid var(--hmwc-panel-border-color);
        }

        &:hover:not(.active) {
          scale: 1.05;
          --button-shadow: 0 0 0 3px hsl(from var(--pagination-color) h s l / 0.15);
          z-index: 1;
        }

        &:active:not(.active) {
          scale: 0.95;
        }
      }

      &.active {
        --button-background: var(--pagination-color);
        --button-color: var(--hmwc-color-primary-100);
        --button-border: var(--hmwc-input-border-width) solid var(--pagination-color);
        --button-shadow: 0 0 0 3px hsl(from var(--pagination-color) h s l / 0.2);
      }

      &.elipsis {
        margin: 0 var(--hmwc-spacing-2x-small);
        color: var(--hmwc-color-neutral-300);
        --button-border: none;
      }
    }

    &.sm {
      --hmwc-input-height-small: 2rem;
      --hmwc-button-font-size-small: var(--hmwc-font-size-small);
      gap: var(--hmwc-spacing-2x-small);

      & .pagination-page {
        margin: 0;

        &.nav {
          margin: 0 var(--hmwc-spacing-x-small);
          --icon-size: 0.75rem;
        }

        &.elipsis {
          margin: 0 var(--hmwc-spacing-2x-small);
        }
      }
    }

    &.primary {
      --pagination-color: var(--hmwc-color-primary-600);
    }

    &.success {
      --pagination-color: var(--hmwc-color-success-600);
    }

    &.neutral {
      --pagination-color: var(--hmwc-color-neutral-600);
    }

    &.warning {
      --pagination-color: var(--hmwc-color-warning-600);
    }

    &.danger {
      --pagination-color: var(--hmwc-color-danger-600);
    }
  }
`;var Et=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Y=class extends u{constructor(){super(...arguments),this.range=[],this.page=1,this.siblings=1,this.boundary=1}updateRange(){let t=(r,o)=>Array.from({length:o-r+1},(i,s)=>r+s),e=(this.siblings+this.boundary)*2;if(this.count>e+3){let r=Math.max(2,this.page-this.siblings),o=Math.min(this.count-1,this.page+this.siblings),i=t(r,o),s=r>2,l=this.count-o>1,h=e-i.length;s&&!l?i=[-1,...t(r-h,r-1),...i]:!s&&l?i=[...i,...t(o+1,o+h),-1]:i=[-1,...i,-1],this.range=[1,...i,this.count]}else this.range=t(1,this.count)}handlePageChange(){this.updateRange(),this.emit("hmwc-change",{detail:{page:this.page}})}handleCountChange(){this.updateRange()}render(){let t=f({pagination:!0,sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
      <nav part="base" class=${t} aria-label="Pagination">
        <div class="pagination-page nav">
          <slot name="nav-back" part="nav">
            <hmwc-button
              ?sm=${!!this.sm}
              ?md=${!!this.md}
              ?lg=${!!this.lg}
              basic
              icon="chevron-left"
              label="Previous page"
              title="Previous page"
              ?primary=${!!this.primary}
              ?success=${!!this.success}
              ?neutral=${!!this.neutral}
              ?warning=${!!this.warning}
              ?danger=${!!this.danger}
              ?disabled=${!this.count||this.page===1}
              @hmwc-click=${()=>this.page--}></hmwc-button>
          </slot>
        </div>

        ${this.range.map(e=>e===-1?c`<div class="pagination-page elipsis"><hmwc-icon sm part="elipsis" src="three-dots"></hmwc-icon></div>`:c`
                <div class="pagination-page ${this.page===e?"active":""}">
                  <hmwc-button
                    part="page page-${this.page===e?"active":"inactive"}"
                    circle
                    ?sm=${!!this.sm}
                    ?md=${!!this.md}
                    ?lg=${!!this.lg}
                    ?primary=${!!this.primary&&e===this.page}
                    ?success=${!!this.success&&e===this.page}
                    ?neutral=${!!this.neutral&&e===this.page}
                    ?warning=${!!this.warning&&e===this.page}
                    ?danger=${!!this.danger&&e===this.page}
                    label=${e}
                    @hmwc-click=${()=>this.page=e}></hmwc-button>
                </div>
              `)}

        <div class="pagination-page nav">
          <slot name="nav-forward" part="nav">
            <hmwc-button
              ?sm=${!!this.sm}
              ?md=${!!this.md}
              ?lg=${!!this.lg}
              basic
              icon="chevron-right"
              label="Next page"
              title="Next page"
              ?primary=${!!this.primary}
              ?success=${!!this.success}
              ?neutral=${!!this.neutral}
              ?warning=${!!this.warning}
              ?danger=${!!this.danger}
              ?disabled=${!this.count||this.page===this.count}
              @hmwc-click=${()=>this.page++}></hmwc-button>
          </slot>
        </div>
      </nav>
    `}};Y.styles=Zi;Y.dependencies=[_,w];Et([b()],Y.prototype,"range",void 0);Et([a({type:Number})],Y.prototype,"page",void 0);Et([a({type:Number})],Y.prototype,"count",void 0);Et([a({type:Number})],Y.prototype,"siblings",void 0);Et([a({type:Number})],Y.prototype,"boundary",void 0);Et([a({type:Boolean,reflect:!0})],Y.prototype,"sm",void 0);Et([a({type:Boolean,reflect:!0})],Y.prototype,"md",void 0);Et([a({type:Boolean,reflect:!0})],Y.prototype,"lg",void 0);Et([a({type:Boolean,reflect:!0})],Y.prototype,"primary",void 0);Et([a({type:Boolean,reflect:!0})],Y.prototype,"success",void 0);Et([a({type:Boolean,reflect:!0})],Y.prototype,"neutral",void 0);Et([a({type:Boolean,reflect:!0})],Y.prototype,"warning",void 0);Et([a({type:Boolean,reflect:!0})],Y.prototype,"danger",void 0);Et([p("page",{waitUntilFirstUpdate:!0})],Y.prototype,"handlePageChange",null);Et([p(["count","siblings","boundary"])],Y.prototype,"handleCountChange",null);Y.define("hmwc-pagination",Y);var Qi=m`
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  :host {
    --data-table-background: transparent;
    --data-table-background-alt: var(--hmwc-panel-background-color);
    --data-table-color: var(--hmwc-color-neutral-500);
    --data-table-color-alt: var(--hmwc-color-neutral-700);
    --data-table-header-color: var(--hmwc-color-neutral-700);
    --data-table-header-background: var(--hmwc-color-neutral-50);
    --data-table-header-border-color: var(--hmwc-color-primary-400);
    --data-table-header-active-background: var(--hmwc-color-neutral-100);
    --data-table-sort-icon-color: var(--hmwc-color-neutral-750);
    --data-table-progress-color: var(--hmwc-color-neutral-200);
    --data-table-alt-progress-color: var(--hmwc-color-primary-300);
    --data-table-pagination-color: var(--hmwc-color-neutral-200);

    display: block;
    width: 100%;
  }

  .data-table {
    display: flex;
    flex-direction: column;

    /* ── Horizontal overflow ─────────────────────────────
       The scroll container lets wide tables scroll sideways
       instead of overflowing their parent. The scrollbar only
       appears when content is actually wider than the host.
       Padding + negative margin keep the table's box-shadow
       and rounded corners from being clipped by the overflow
       context. The pagination footer normally renders *outside*
       this container (scrollbar directly under the table); it
       is moved inside by the component when it cannot fit the
       host's width (scrollbar under both). */
    & .data-table__scroll {
      display: flex;
      flex-direction: column;
      overflow-x: auto;
      scrollbar-width: thin;
      padding: var(--hmwc-spacing-x-small);
      margin: calc(-1 * var(--hmwc-spacing-x-small));

      /* When the footer has been moved inside the scroll container
         (because it can't fit the host's width), let it size to its
         content so the shared scrollbar spans table + footer. */
      & .data-table__footer {
        min-width: max-content;
      }
    }

    & .data-table__table {
      border-spacing: 0;
      border-collapse: separate;
      box-sizing: border-box;
      border-radius: var(--hmwc-border-radius-large);
      box-shadow: var(--hmwc-shadow-small);
      overflow: hidden;
      width: 100%;
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      & .data-table__table-head {
        width: 100%;
        background-color: var(--data-table-header-background);

        & .data-table__col-head {
          position: relative;
          box-sizing: border-box;
          padding: var(--hmwc-spacing-x-small) var(--hmwc-spacing-small);
          color: var(--data-table-header-color);
          font-family: var(--hmwc-font-sans);
          font-size: var(--hmwc-font-size-small);
          font-weight: var(--hmwc-font-weight-bold);
          letter-spacing: var(--hmwc-letter-spacing-loose);
          text-transform: uppercase;
          text-align: left;
          white-space: nowrap;
          cursor: pointer;
          border-bottom: 0.125rem solid var(--data-table-header-border-color);
          border-right: 1px solid var(--hmwc-color-neutral-200);
          transition: background-color var(--hmwc-transition-fast) ease;

          &:last-child {
            border-right: none;
          }

          &:hover {
            background-color: var(--data-table-header-active-background);
          }

          &[checkbox='true'] {
            text-align: center;
          }

          &[action='true'] {
            & .data-table__col-head-content {
              //   justify-content: center;
            }
          }

          &[active='true'],
          &:hover {
            & .data-table__col-head-content .data-table__col-sort hmwc-icon {
              opacity: 1;
            }
          }

          &[active='true'] {
            background-color: var(--data-table-header-active-background);
          }

          &[active='true'][descending='true'] .data-table__col-head-content .data-table__col-sort {
            transform: rotate(180deg);
          }

          & .data-table__col-head-content {
            display: flex;
            align-items: center;
            gap: var(--hmwc-spacing-x-small);

            & .data-table__col-sort {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              transform-origin: center;
              transition: transform 0.15s ease-out;
              hmwc-icon {
                display: flex;
                opacity: 0;
                --icon-size: var(--hmwc-font-size-x-small);
                --icon-color: var(--data-table-sort-icon-color);
                transition: opacity 0.15s ease-out;
              }
            }

            & .data-table__col-filter {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              margin-left: auto;

              & .data-table__col-filter-icon {
                --button-padding: 0;
                --icon-size: var(--hmwc-font-size-small);
                --icon-color: var(--data-table-filter-icon-color, var(--data-table-header-color));
                opacity: 0.45;
                transition: opacity 0.15s ease-out;

                &:hover {
                  opacity: 1;
                }

                &.active {
                  opacity: 1;
                  --icon-color: var(--data-table-header-border-color);
                }
              }

              hmwc-menu {
                --menu-width: 13.75rem;
                --menu-max-height: 17.5rem;
                --menu-padding: var(--hmwc-spacing-3x-small) 0;
                --menu-label-size: var(--hmwc-font-size-small);
                --menu-label-weight: var(--hmwc-font-weight-normal);
                --menu-item-spacing: var(--hmwc-spacing-3x-small) var(--hmwc-spacing-small) var(--hmwc-spacing-3x-small) var(--hmwc-spacing-x-small);
                text-transform: none;
              }

              & .data-table__range-filter {
                display: flex;
                flex-direction: column;
                gap: 0;
                padding: var(--hmwc-spacing-x-small) 0;
              }

              & .data-table__range-inputs {
                display: flex;
                align-items: center;
                gap: var(--hmwc-spacing-3x-small);
                padding: 0 var(--hmwc-spacing-small);

                & hmwc-input {
                  flex: 1;
                  min-width: 0;
                  overflow: hidden;
                }
              }

              & .data-table__range-separator {
                font-size: var(--hmwc-font-size-x-small);
                color: var(--hmwc-color-neutral-400);
                flex-shrink: 0;
              }

              & .data-table__range-group {
                display: flex;
                align-items: center;
                gap: var(--hmwc-spacing-x-small);
                padding: var(--hmwc-spacing-3x-small) var(--hmwc-spacing-small);

                & hmwc-input {
                  flex: 1;
                  min-width: 0;

                  &::part(suffix) {
                    right: 5%;
                  }
                }
              }

              & .data-table__range-label {
                font-size: var(--hmwc-font-size-x-small);
                color: var(--hmwc-color-neutral-400);
                font-weight: var(--hmwc-font-weight-medium);
                flex-shrink: 0;
                min-width: 2rem;
              }

              & .data-table__filter-toolbar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: var(--hmwc-spacing-3x-small) var(--hmwc-spacing-small);
                margin-bottom: var(--hmwc-spacing-3x-small);
                cursor: pointer;
                transition: background var(--hmwc-transition-fast) ease;
                border-radius: var(--hmwc-border-radius-small);

                &:hover {
                  background: var(--hmwc-color-neutral-100);
                }
              }

              & .data-table__filter-toolbar-label {
                font-family: var(--hmwc-font-sans);
                font-size: var(--hmwc-font-size-x-small);
                color: var(--hmwc-color-neutral-500);
                font-weight: var(--hmwc-font-weight-medium);
              }

              & .data-table__filter-clear {
                --icon-size: var(--hmwc-font-size-2x-small);
                --icon-color: var(--hmwc-color-neutral-400);
              }

              & .data-table__filter-presets {
                display: flex;
                flex-direction: column;
                padding-top: var(--hmwc-spacing-x-small);
              }

              & .data-table__filter-presets-label {
                font-family: var(--hmwc-font-sans);
                font-size: var(--hmwc-font-size-2x-small);
                color: var(--hmwc-color-neutral-400);
                font-weight: var(--hmwc-font-weight-semibold);
                text-transform: uppercase;
                letter-spacing: 0.05em;
                padding: var(--hmwc-spacing-3x-small) var(--hmwc-spacing-small);
              }

              & .data-table__filter-presets-list {
                display: flex;
                flex-direction: column;
              }

              & .data-table__filter-preset {
                all: unset;
                cursor: pointer;
                font-family: var(--hmwc-font-sans);
                font-size: calc(1.05 * var(--hmwc-font-size-small));
                font-weight: var(--hmwc-font-weight-normal);
                color: var(--hmwc-color-neutral-700);
                padding: var(--hmwc-spacing-3x-small) var(--hmwc-spacing-small);
                transition: background var(--hmwc-transition-fast) ease;

                &:hover {
                  background: var(--hmwc-color-neutral-100);
                }

                &.active {
                  color: var(--hmwc-color-primary-600);
                  font-weight: var(--hmwc-font-weight-semibold);
                }
              }
            }
          }

          &:hover .data-table__col-filter-icon {
            opacity: 0.85;
          }

          & .data-table__col-resize {
            position: absolute;
            top: 0;
            right: -0.1875rem;
            width: 0.375rem;
            height: 100%;
            cursor: ew-resize;
            z-index: 1;
            user-select: none;

            &::after {
              content: '';
              position: absolute;
              top: 25%;
              right: 2px;
              width: 2px;
              height: 50%;
              border-radius: 1px;
              background-color: transparent;
              transition: background-color var(--hmwc-transition-fast) ease;
            }

            &:hover::after {
              background-color: var(--data-table-header-border-color);
            }
          }
        }
      }

      & .data-table__body {
        overflow-x: auto;

        & .data-table__table-row {
          cursor: pointer;
          background-color: var(--data-table-background);
          transition: filter var(--hmwc-transition-fast) ease, box-shadow var(--hmwc-transition-fast) ease;

          & .data-table__item {
            box-sizing: border-box;
            text-overflow: ellipsis;
            overflow: hidden;
            padding: var(--hmwc-spacing-x-small) var(--hmwc-spacing-small);
            color: var(--data-table-color);
            font-family: var(--hmwc-font-sans);
            font-size: var(--hmwc-font-size-medium);
            white-space: nowrap;
            border-bottom: 1px solid var(--hmwc-color-neutral-100);

            &[checkbox='true'] {
              text-align: center;
            }

            &.action {
              width: 0px;
              overflow: visible;
              line-height: 0;
              & hmwc-button::part(base) {
                height: calc(0.8 * var(--hmwc-input-height-small)) !important;
                min-height: calc(0.8 * var(--hmwc-input-height-small)) !important;
                --button-padding: 0 calc(0.75 * var(--hmwc-spacing-small));
              }
            }

            &[percent='true'] {
              & hmwc-progress {
                --progress-track: 0.25rem;

                &::part(base) {
                  height: 0.625rem;
                  background-color: var(--hmwc-color-neutral-50);
                }
              }
            }
          }

          &:nth-child(even) {
            background-color: var(--data-table-background-alt);

            & .data-table__item {
              color: var(--data-table-color-alt);

              &[percent='true'] & hmwc-progress::part(base) {
                background-color: var(--hmwc-color-neutral-200);
              }
            }
          }

          &:last-of-type {
            & .data-table__item {
              border-bottom: none;
            }
          }

          &:hover {
            filter: brightness(0.96);
            box-shadow: inset 0.1875rem 0 0 0 var(--data-table-header-border-color);

            & .data-table__item:not(.action) {
              color: var(--hmwc-color-neutral-700);
            }
          }
        }
      }
    }

    & .data-table__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: var(--hmwc-spacing-small);

      & .data-table__info {
        color: var(--hmwc-color-neutral-600);
        font-family: var(--hmwc-font-sans);
        font-size: calc(1.05 * var(--hmwc-font-size-small));
        font-weight: var(--hmwc-font-weight-normal);
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      & .data-table__pagination {
        display: flex;
        gap: var(--hmwc-spacing-x-small);
      }
    }

    &.small {
      & .data-table__table {
        & .data-table__table-head {
          & .data-table__col-head {
            padding: var(--hmwc-spacing-3x-small) var(--hmwc-spacing-x-small);
            font-size: var(--hmwc-font-size-x-small);
            letter-spacing: var(--hmwc-letter-spacing-loose);
          }
        }
      }
      & .data-table__item {
        padding: var(--hmwc-spacing-3x-small) var(--hmwc-spacing-x-small);

        &.percent {
          & hmwc-progress {
            --progress-track: 0.1875rem;
          }
        }
      }

      & .data-table__footer {
        padding-top: var(--hmwc-spacing-x-small);
        & .data-table__info {
          font-size: var(--hmwc-font-size-small);
        }
      }
    }

    &.primary {
      --data-table-header-background: var(--hmwc-color-primary-300);
      --data-table-header-active-background: var(--hmwc-color-primary-400);
      --data-table-sort-icon-color: var(--hmwc-color-primary-900);
      --data-table-progress-color: var(--hmwc-color-primary-200);
      --data-table-alt-progress-color: var(--hmwc-color-primary-300);
      --data-table-pagination-color: var(--hmwc-color-primary-300);
      --data-table-header-border-color: var(--hmwc-color-neutral-200);
    }

    &.success {
      --data-table-header-background: var(--hmwc-color-success-300);
      --data-table-header-active-background: var(--hmwc-color-success-400);
      --data-table-sort-icon-color: var(--hmwc-color-success-900);
      --data-table-progress-color: var(--hmwc-color-success-200);
      --data-table-alt-progress-color: var(--hmwc-color-success-300);
      --data-table-pagination-color: var(--hmwc-color-success-300);
      --data-table-header-border-color: var(--hmwc-color-neutral-200);
    }

    &.neutral {
      --data-table-header-background: var(--hmwc-color-neutral-300);
      --data-table-header-active-background: var(--hmwc-color-neutral-400);
      --data-table-sort-icon-color: var(--hmwc-color-neutral-900);
      --data-table-progress-color: var(--hmwc-color-neutral-200);
      --data-table-alt-progress-color: var(--hmwc-color-neutral-300);
      --data-table-pagination-color: var(--hmwc-color-neutral-300);
      --data-table-header-border-color: var(--hmwc-color-neutral-200);
    }

    &.warning {
      --data-table-header-background: var(--hmwc-color-warning-300);
      --data-table-header-active-background: var(--hmwc-color-warning-400);
      --data-table-sort-icon-color: var(--hmwc-color-warning-900);
      --data-table-progress-color: var(--hmwc-color-warning-200);
      --data-table-alt-progress-color: var(--hmwc-color-warning-300);
      --data-table-pagination-color: var(--hmwc-color-warning-300);
      --data-table-header-border-color: var(--hmwc-color-neutral-200);
    }

    &.danger {
      --data-table-header-background: var(--hmwc-color-danger-300);
      --data-table-header-active-background: var(--hmwc-color-danger-400);
      --data-table-sort-icon-color: var(--hmwc-color-danger-900);
      --data-table-progress-color: var(--hmwc-color-danger-200);
      --data-table-alt-progress-color: var(--hmwc-color-danger-300);
      --data-table-pagination-color: var(--hmwc-color-danger-300);
      --data-table-header-border-color: var(--hmwc-color-neutral-200);
    }

    &.alt {
      --data-table-background: var(--hmwc-panel-background-color);
      --data-table-background-alt: var(--hmwc-color-neutral-50);
      --data-table-header-background: var(--hmwc-panel-border-color);
      --data-table-header-active-background: var(--hmwc-color-neutral-300);
      --data-table-sort-icon-color: var(--hmwc-color-neutral-900);
      --data-table-progress-color: var(--hmwc-color-neutral-200);
      --data-table-alt-progress-color: var(--hmwc-color-neutral-400);
      --data-table-pagination-color: var(--hmwc-panel-border-color);
      --data-table-header-border-color: var(--hmwc-color-neutral-300);
    }

    &.fluid-width {
      width: 100%;

      & .data-table__table {
        width: 100%;
        min-width: 0;
      }
    }
  }
`;function eo(n,t=[]){return n==null?t.map(e=>({key:e,label:e})):Array.isArray(n)?n.length===0?t.map(e=>({key:e,label:e})):typeof n[0]=="object"&&n[0]!==null?to(n[0]):n.filter(e=>typeof e=="string").map(e=>({key:e,label:e})):typeof n=="object"?to(n):t.map(e=>({key:e,label:e}))}function to(n){return Object.keys(n).map(t=>({key:t,label:typeof n[t]=="string"&&n[t].length>0?n[t]:t}))}var M=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},$=class extends u{constructor(){super(...arguments),this.selections=[],this._fillerRows=new WeakSet,this._readyEmitted=!1,this._sizingId=0,this._tableIsSized=!1,this._resizing=null,this._didResize=!1,this._columnWidths={},this._boundResizeMove=null,this._boundResizeEnd=null,this._filterableFields={},this._columnFilters={},this.fieldKeys=[],this._normalizedFields=[],this.ready=!1,this.results=[],this.entries=[],this.total=0,this.data=[],this.fields=[],this.page=1,this.amount=10,this.label="",this.sizing={},this.filter="",this.sort="",this.order="ascending",this.pagination=!0,this.actions=[],this.dataUpdate=()=>this.parseData(),this.entriesUpdate=()=>this.entries=this.getEntries(),this._footerInScroll=!1,this._measureFooter=()=>{let t=this.shadowRoot?.querySelector(".data-table__footer");if(!t)return;let e=t.scrollWidth,r=this.clientWidth,o=e>r;o!==this._footerInScroll&&(this._footerInScroll=o)}}getColumnStyle(t){return this._columnWidths[t]?`width: ${this._columnWidths[t]}px`:this.sizing&&this.sizing[t]?`width: ${this.sizing[t]}`:""}hasFields(){return this.fields==null?!1:Array.isArray(this.fields)?this.fields.length>0:typeof this.fields=="object"?Object.keys(this.fields).length>0:!1}getDisplayName(t){let e=this._normalizedFields.find(r=>r.key===t);return e?e.label:t}computeFilterableFields(){let e={};for(let r of this.fieldKeys){if(this.isSkeletonField(r))continue;let o=[];for(let s of this.data){let l=s[r];l!=null&&l!==""&&o.push(l)}if(o.length===0)continue;let i=this.detectColumnType(o);if(i==="categorical"){let s=Array.from(new Set(o.map(String))).sort((l,h)=>l.localeCompare(h));s.length<10&&(e[r]={type:"categorical",values:s})}else if(i==="numeric"){let s=o.map(l=>this.parseNumericValue(l)).filter(l=>l!=null).sort((l,h)=>l-h);if(s.length>0){let l=(h,d)=>{let g=(h.length-1)*d,v=Math.floor(g),S=Math.ceil(g);return v===S?h[v]:h[v]*(S-g)+h[S]*(g-v)};e[r]={type:"numeric",values:[],numericStats:{min:s[0],max:s[s.length-1],q1:l(s,.25),median:l(s,.5),q3:l(s,.75)}}}}else e[r]={type:i,values:[]}}this._filterableFields=e}detectColumnType(t){let e=0,r=0;for(let i of t){let s=String(i),l=s.replace(/[$,%k]/gi,"").replace(/,/g,"").trim();if(l!==""&&!isNaN(Number(l))){e++;continue}if(this.isValidDate(s)){r++;continue}}let o=t.length;return e/o>=.8?"numeric":r/o>=.8?"date":"categorical"}parseNumericValue(t){if(typeof t=="number")return t;let r=String(t).trim().replace(/[$,%k]/gi,"").replace(/,/g,""),o=Number(r);return isNaN(o)?null:o}isColumnFilterActive(t){let e=this._columnFilters[t];if(!e)return!1;let r=this._filterableFields[t];if(!r)return!1;switch(e.type){case"categorical":return e.selected.size<r.values.length;case"numeric":return e.min!=null||e.max!=null;case"date":return e.from!=null||e.to!=null;case"text":return e.query.length>0}}isFilterValueSelected(t,e){let r=this._columnFilters[t];return!r||r.type!=="categorical"?!0:r.selected.has(e)}toTitleCase(t){return t.toLowerCase().replace(/(?:^|\s)\S/g,e=>e.toUpperCase())}handleCategoricalFilterChange(t,e){let r=e.detail?.value,o=this._filterableFields[t];if(o){if(r==="all"){delete this._columnFilters[t],this._columnFilters={...this._columnFilters},this.page=1,this.parseData();return}if(r==="none"){this._columnFilters[t]={type:"categorical",selected:new Set},this._columnFilters={...this._columnFilters},this.page=1,this.parseData();return}if(r instanceof A){let i=r.value;if(!i)return;let s=this._columnFilters[t];(!s||s.type!=="categorical")&&(s={type:"categorical",selected:new Set(o.values)},this._columnFilters[t]=s),r.checked?s.selected.add(i):s.selected.delete(i),s.selected.size===o.values.length&&delete this._columnFilters[t],this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}}}handleNumericFilterChange(t,e,r){let o=r.target,i=String(o.value??"").trim(),s=this._columnFilters[t];(!s||s.type!=="numeric")&&(s={type:"numeric"},this._columnFilters[t]=s),!i||i===""?delete s[e]:s[e]=Number(i),s.min==null&&s.max==null&&delete this._columnFilters[t],this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}handleDateFilterChange(t,e,r){let o=r.target,i=String(o.value??"").trim(),s=this._columnFilters[t];(!s||s.type!=="date")&&(s={type:"date"},this._columnFilters[t]=s),!i||i===""?delete s[e]:s[e]=i,s.from==null&&s.to==null&&delete this._columnFilters[t],this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}handleTextFilterChange(t,e){let r=e.target,o=String(r.value??"").trim();o?this._columnFilters[t]={type:"text",query:o}:delete this._columnFilters[t],this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}clearColumnFilter(t){delete this._columnFilters[t],this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}applyNumericPreset(t,e,r){let o={type:"numeric"};e!=null&&(o.min=e),r!=null&&(o.max=r),this._columnFilters[t]=o,this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}formatPresetValue(t){return Math.abs(t)>=1e6?`${(t/1e6).toFixed(1).replace(/\.0$/,"")}M`:Math.abs(t)>=1e4?`${(t/1e3).toFixed(1).replace(/\.0$/,"")}k`:t.toLocaleString("en-US",{maximumFractionDigits:0})}parseData(){this.fieldKeys=this.resolveFieldKeys(),this.computeFilterableFields();let t=this.filterData(),e=[];t.forEach(()=>e.push(!1)),this.selections=e,this.results=this.sortData(t),this.amount===1/0&&(this.amount=this.results.length);let r=Math.max(1,Math.ceil(this.results.length/this.amount));this.page>r&&(this.page=1),this.entries=this.getEntries(this.results),this.total=this.results.length,t.length&&(this.ready=!0),this.ready&&!this._readyEmitted&&(this._readyEmitted=!0,this.emit("hmwc-ready")),this.setTableSizing()}filterData(t=this.data){t=structuredClone(t);let e=Object.keys(this._columnFilters);if(e.length>0&&(t=t.filter(o=>e.every(i=>{let s=this._columnFilters[i],l=o[i];if(l==null)return!1;switch(s.type){case"categorical":return s.selected.has(String(l));case"numeric":{let h=this.parseNumericValue(l);return!(h==null||s.min!=null&&h<s.min||s.max!=null&&h>s.max)}case"date":{let h=new Date(String(l));return!(isNaN(h.getTime())||s.from!=null&&h<new Date(s.from)||s.to!=null&&h>new Date(s.to))}case"text":return s.query?String(l).toLowerCase().includes(s.query.toLowerCase()):!0;default:return!0}}))),!this.filter.length)return t;let r=this.filter.toLowerCase();return t.filter(o=>Object.values(o).some(i=>{if(!i)return!1;let s=i.toString().toLowerCase();return!!(s.includes(r)||this.isValidDate(s)&&new Date(s).toLocaleDateString().toLowerCase().includes(r))}))}sortData(t=this.filterData()){let e={month:{trigger:()=>this.sort.toLowerCase()==="month",value:r=>new Date(`${r[this.sort]} ${r.Year||r.year||2025}`)},year:{trigger:()=>this.sort.toLowerCase()==="year",value:r=>new Date(`${r.Month||r.month||"January"} ${r[this.sort]}`)},percentage:{trigger:r=>r[this.sort]!=null&&r[this.sort]?.toString().includes("%"),value:r=>Number(r[this.sort].toString().split("%")[0])},money:{trigger:r=>{let o=r[this.sort];return o!=null&&typeof o=="string"&&o[o.length-1]==="k"&&!isNaN(Number(o.slice(0,-1)))},value:r=>Number(r[this.sort].toString().split("k")[0])},number:{trigger:r=>r[this.sort]!=null&&r[this.sort].toString()[0]==="$",value:r=>parseInt(r[this.sort].toString().split("$")[1])},other:{trigger:()=>!0,value:r=>r[this.sort]}};return this.sort?t.sort((r,o)=>{let i,s;if(Object.keys(e).some(h=>{if(e[h].trigger(r))return i=e[h].value(r),s=e[h].value(o),!0}),i==null&&s==null)return 0;if(i==null)return 1;if(s==null)return-1;let l=this.order==="descending";return i>s?l?-1:1:s>i?l?1:-1:0}):t}sortByField(t){if(this._didResize){this._didResize=!1;return}this.fieldKeys.includes(t)&&(this.sort===t?this.order=this.order==="ascending"?"descending":"ascending":(this.sort=t,this.order="ascending"),this.parseData())}selectAll(){this.selectable&&(this.selections=this.selections.map(()=>!0),this.emitSelectionChange())}deselectAll(){this.selectable&&(this.selections=this.selections.map(()=>!1),this.emitSelectionChange())}getSelectedRows(){if(!this.selectable)return[];let t=[];for(let e=0;e<this.selections.length;e++)this.selections[e]&&this.results[e]&&t.push(this.results[e]);return t}emitSelectionChange(){this.emit("hmwc-select",{detail:{rows:this.getSelectedRows()}})}resolveFieldKeys(){if(!this.hasFields()&&!this.data.length)return this._normalizedFields=[],[...Array(5).keys()].map((o,i)=>`#SKELETON-${i}`);let e=this.hasFields()?[]:Object.keys(this.data[0]??{}),r=eo(this.fields,e);return this._normalizedFields=r,r.map(o=>o.key)}getEntries(t=this.results){this._fillerRows=new WeakSet;let e=()=>{let r=this.fieldKeys.reduce((o,i)=>({...o,[i]:"\u200E "}),{});return this._fillerRows.add(r),r};if(this.isLoading)return Array.from({length:this.amount===1/0?5:this.amount},()=>(this.fieldKeys.length?this.fieldKeys:["#SKELETON-0"]).reduce((o,i)=>({...o,[i]:"#SKELETON"}),{}));{let r=this.amount-t.length;if(r>0)return[...t,...Array.from({length:r},e)];{let o=(this.page-1)*this.amount,i=this.page*this.amount,s=t.slice(o,i),l=this.amount-s.length;return l>0?[...s,...Array.from({length:l},e)]:s}}}isValidDate(t){let e=new Date(t);return!isNaN(e.getTime())}setTableSizing(){if(this._tableIsSized)return;let t=++this._sizingId;this.updateComplete.then(()=>{if(t!==this._sizingId)return;let e=this.shadowRoot?.querySelector("table");if(!e||this.isSkeletonField(this.fieldKeys[0]))return;let r=e.querySelector("tbody");if(!r)return;let o=Array.from(e.querySelectorAll("th.data-table__col-head"));if(!o.length)return;let i=[...this.fieldKeys,...this.getActionFields()],s=this.selectable?1:0;o.forEach((v,S)=>{let Z=i[S-s];Z&&(this.sizing?.[Z]||this._columnWidths[Z])||v.style.removeProperty("width")}),e.style.tableLayout="auto";let l={};for(let v of this.fieldKeys){l[v]="";for(let S of this.results){let Z=S[v]?.toString()??"";Z.length>l[v].length&&(l[v]=Z)}}let h=document.createElement("tr");if(h.className="data-table__table-row",h.setAttribute("aria-hidden","true"),h.style.cssText="visibility:hidden;height:0;overflow:hidden;",this.selectable){let v=document.createElement("td");v.className="data-table__item checkbox",v.style.cssText="height:0;line-height:0;border:none;",h.appendChild(v)}for(let v of this.fieldKeys){let S=document.createElement("td");S.className="data-table__item",S.style.cssText="white-space:nowrap;height:0;line-height:0;border:none;",S.textContent=l[v],h.appendChild(S)}let d=this.getActions().length;for(let v=0;v<d;v++){let S=document.createElement("td");S.className="data-table__item action",S.style.cssText="height:0;line-height:0;border:none;",h.appendChild(S)}r.appendChild(h);let g=o.map(v=>v.offsetWidth);h.remove(),o.forEach((v,S)=>{let Z=i[S-s];Z&&(this.sizing?.[Z]||this._columnWidths[Z])||(v.style.width=`${g[S]}px`)}),e.style.tableLayout="fixed",this._tableIsSized=!0})}getSelectionStatus(t){return this.selections[(this.page-1)*this.amount+t]}isSkeletonField(t){return typeof t=="string"&&t.includes("#SKELETON")}getActions(){let t=[];return Array.isArray(this.actions)&&t.push(...this.actions),this.action&&t.push(this.action),t}getActionFields(){return this.getActions().map(t=>t.field)}isActionField(t){return this.getActionFields().includes(t)}get isLoading(){return!!this.loading||!this.ready}getTotalColumnCount(){return this.fieldKeys.length+(this.selectable?1:0)+this.getActions().length}getStorageKey(){return`hmwc-data-table-col-widths:${this.label||this.fieldKeys.join(",")}`}loadColumnWidths(){if(this.cache)try{let t=localStorage.getItem(this.getStorageKey());t&&(this._columnWidths=JSON.parse(t))}catch{}}saveColumnWidths(){if(this.cache)try{localStorage.setItem(this.getStorageKey(),JSON.stringify(this._columnWidths))}catch{}}handleResizeStart(t,e){t.preventDefault(),t.stopPropagation();let r=t.target.parentElement;if(!r)return;let o=this.shadowRoot?.querySelector("table");o&&(this._resizing={field:e,startX:t.clientX,startWidth:r.offsetWidth,minWidth:40,maxWidth:1/0,th:r,table:o,activated:!1},this._boundResizeMove=this.handleResizeMove.bind(this),this._boundResizeEnd=this.handleResizeEnd.bind(this),document.addEventListener("mousemove",this._boundResizeMove),document.addEventListener("mouseup",this._boundResizeEnd))}activateResize(){if(!this._resizing||this._resizing.activated)return;this._resizing.activated=!0;let{table:t,th:e}=this._resizing,r=Array.from(t.querySelectorAll("th.data-table__col-head")),o=[...this.fieldKeys,...this.getActionFields()],i=this.selectable?1:0,s=0,l=0;for(let g=0;g<r.length;g++){let v=r[g],S=o[g-i];if(S&&this._columnWidths[S]&&v!==e){s+=v.offsetWidth;continue}let qt=getComputedStyle(v),Jt=parseFloat(qt.paddingLeft)+parseFloat(qt.paddingRight),Xe=parseFloat(qt.borderLeftWidth)+parseFloat(qt.borderRightWidth),Mt=40,pe=v.querySelector(".data-table__col-head-content");if(pe){let Dt=pe.querySelector(".data-table__col-filter"),Eo=Dt?Dt.offsetWidth:0,Bo=Dt?parseFloat(getComputedStyle(pe).gap||"0"):0,Re=pe.cloneNode(!0);Re.style.cssText="position:absolute;visibility:hidden;width:min-content;pointer-events:none;";let Or=Re.querySelector(".data-table__col-filter");Or&&Or.remove(),pe.parentElement.appendChild(Re);let Mr=v.querySelector(".data-table__col-resize"),Oo=Mr?Mr.offsetWidth*2:0;Mt=Re.offsetWidth+Eo+Bo+Jt+Xe+Oo,Re.remove()}v===e?this._resizing.minWidth=Mt:l+=Mt}let h=Array.from(t.querySelectorAll("th:not(.data-table__col-head)"));for(let g of h)s+=g.offsetWidth;let d=t.offsetWidth;this._resizing.maxWidth=Math.max(this._resizing.minWidth,d-s-l);for(let g=0;g<r.length;g++){let v=r[g];if(v===e)continue;let S=o[g-i];S&&this._columnWidths[S]||v.style.removeProperty("width")}t.style.width=`${d}px`,e.style.width=`${e.offsetWidth}px`,t.style.tableLayout="fixed",this._resizing.startWidth=e.offsetWidth,document.body.style.cursor="col-resize",document.body.style.userSelect="none"}handleResizeMove(t){if(!this._resizing)return;let e=t.clientX-this._resizing.startX;if(!this._resizing.activated){if(Math.abs(e)<5)return;this.activateResize()}let r=Math.min(this._resizing.maxWidth,Math.max(this._resizing.minWidth,this._resizing.startWidth+e));this._resizing.th.style.width=`${r}px`}handleResizeEnd(){if(this._resizing){if(this._resizing.activated){let{table:t}=this._resizing;this._didResize=!0,this._columnWidths[this._resizing.field]=this._resizing.th.offsetWidth,this.saveColumnWidths();let e=Array.from(t.querySelectorAll("th.data-table__col-head"));for(let r of e)r.style.width=`${r.offsetWidth}px`;t.style.width=""}this._boundResizeMove&&document.removeEventListener("mousemove",this._boundResizeMove),this._boundResizeEnd&&document.removeEventListener("mouseup",this._boundResizeEnd),document.body.style.cursor="",document.body.style.userSelect="",this._resizing=null,this._boundResizeMove=null,this._boundResizeEnd=null}}connectedCallback(){super.connectedCallback(),this.parseData(),this.loadColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this._boundResizeMove&&document.removeEventListener("mousemove",this._boundResizeMove),this._boundResizeEnd&&document.removeEventListener("mouseup",this._boundResizeEnd),this._footerResizeObserver?.disconnect(),this._footerResizeObserver=void 0,this._readyEmitted=!1}firstUpdated(){typeof ResizeObserver<"u"&&(this._footerResizeObserver=new ResizeObserver(()=>this._measureFooter()),this._footerResizeObserver.observe(this)),this._measureFooter()}renderFilterToolbar(t){return this.isColumnFilterActive(t)?c`
      <div class="data-table__filter-toolbar">
        <span class="data-table__filter-toolbar-label">Clear filter</span>
        <hmwc-icon src="x-lg" class="data-table__filter-clear" @click=${()=>this.clearColumnFilter(t)}> </hmwc-icon>
      </div>
    `:""}renderNumericPresets(t){let e=this._filterableFields[t];if(!e?.numericStats)return"";let r=e.numericStats,o=this._columnFilters[t],i=(h,d)=>!o||o.type!=="numeric"?!1:o.min===h&&o.max===d,s=h=>this.formatPresetValue(h),l=[{label:`\u2264 ${s(r.median)}`,max:r.median},{label:`${s(r.q1)} \u2013 ${s(r.q3)}`,min:r.q1,max:r.q3},{label:`\u2265 ${s(r.median)}`,min:r.median}];return c`
      <div class="data-table__filter-presets">
        <span class="data-table__filter-presets-label">Quick filters</span>
        <div class="data-table__filter-presets-list">
          ${l.map(h=>c`
              <button
                class="data-table__filter-preset ${i(h.min,h.max)?"active":""}"
                @click=${()=>i(h.min,h.max)?this.clearColumnFilter(t):this.applyNumericPreset(t,h.min,h.max)}>
                ${h.label}
              </button>
            `)}
        </div>
      </div>
    `}renderColumnFilter(t){let e=this._filterableFields[t];if(!e)return"";let r=this._columnFilters[t];switch(e.type){case"categorical":return c`
          <hmwc-menu filter="" selectAll @hmwc-change=${o=>this.handleCategoricalFilterChange(t,o)}>
            ${e.values.map(o=>c`
                <hmwc-menu-item checkable ?checked=${this.isFilterValueSelected(t,o)} label=${this.toTitleCase(o)} value=${o}>
                </hmwc-menu-item>
              `)}
          </hmwc-menu>
        `;case"numeric":return c`
          <hmwc-menu>
            <div class="data-table__range-filter">
              ${this.renderFilterToolbar(t)}
              <div class="data-table__range-inputs">
                <hmwc-input
                  underline
                  sm
                  fluid
                  type="number"
                  placeholder="Min"
                  .value=${r?.type==="numeric"&&r.min!=null?String(r.min):""}
                  @hmwc-change=${o=>this.handleNumericFilterChange(t,"min",o)}>
                </hmwc-input>
                <span class="data-table__range-separator">–</span>
                <hmwc-input
                  underline
                  sm
                  fluid
                  type="number"
                  placeholder="Max"
                  .value=${r?.type==="numeric"&&r.max!=null?String(r.max):""}
                  @hmwc-change=${o=>this.handleNumericFilterChange(t,"max",o)}>
                </hmwc-input>
              </div>
              ${this.renderNumericPresets(t)}
            </div>
          </hmwc-menu>
        `;case"date":return c`
          <hmwc-menu>
            <div class="data-table__range-filter">
              ${this.renderFilterToolbar(t)}
              <div class="data-table__range-group">
                <label class="data-table__range-label">From</label>
                <hmwc-input
                  underline
                  sm
                  fluid
                  type="date"
                  suffix="calendar"
                  placeholder="MM/DD/YYYY"
                  .value=${r?.type==="date"&&r.from!=null?r.from:""}
                  @hmwc-change=${o=>this.handleDateFilterChange(t,"from",o)}>
                </hmwc-input>
              </div>
              <div class="data-table__range-group">
                <label class="data-table__range-label">To</label>
                <hmwc-input
                  underline
                  sm
                  fluid
                  type="date"
                  suffix="calendar"
                  placeholder="MM/DD/YYYY"
                  .value=${r?.type==="date"&&r.to!=null?r.to:""}
                  @hmwc-change=${o=>this.handleDateFilterChange(t,"to",o)}>
                </hmwc-input>
              </div>
            </div>
          </hmwc-menu>
        `;case"text":default:return c`
          <hmwc-menu>
            <div class="data-table__range-filter">
              ${this.renderFilterToolbar(t)}
              <hmwc-input
                underline
                sm
                fluid
                placeholder="Search..."
                .value=${r?.type==="text"&&r.query?r.query:""}
                @hmwc-input=${o=>this.handleTextFilterChange(t,o)}>
              </hmwc-input>
            </div>
          </hmwc-menu>
        `}}_renderBaseClasses(){return{"data-table":!0,search:!1,pagination:!!this.pagination,fluid:this.amount===1/0,"fluid-width":!!this.fluid,small:!!this.sm,loading:this.isLoading,primary:!!this.primary,alt:!!this.alt,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger}}_renderHeaderSkeletonCell(){return c`
      <th part="field" colspan=${this.fieldKeys.length} class="data-table__col-head skeleton">
        <span class="visually-hidden">Loading data</span>
        <hmwc-skeleton></hmwc-skeleton>
      </th>
    `}_renderSelectionHeaderCell(){return this.selectable?c`
      <th part="field" class="data-table__col-head checkbox">
        <hmwc-checkbox
          part="field-checkbox"
          small
          @hmwc-change=${t=>t.detail.value?this.selectAll():this.deselectAll()}></hmwc-checkbox>
      </th>
    `:""}_renderHeaderCell(t){let e=this.isActionField(t);return c`
      <th
        part="field"
        class="data-table__col-head"
        active=${this.sort===t}
        descending=${this.sort===t&&this.order==="descending"}
        skeleton=${this.isSkeletonField(this.fieldKeys[0])}
        action=${e}
        style=${this.getColumnStyle(t)}
        @click=${()=>this.sortByField(t)}>
        <div class="data-table__col-head-content">
          ${this.getDisplayName(t)}
          ${e?"":c`<span class="data-table__col-sort">
                <hmwc-icon flex part="sort-icon" src="chevron-down"></hmwc-icon>
              </span>`}
          ${!e&&this._filterableFields[t]?c`
                <hmwc-attachment
                  class="data-table__col-filter"
                  placement="bottom-end"
                  .distance=${8}
                  .skidding=${8}
                  arrow
                  stayOpen
                  @click=${r=>r.stopPropagation()}>
                  <hmwc-button
                    slot="anchor"
                    basic
                    sm
                    icon=${this.isColumnFilterActive(t)?"funnel-fill":"funnel"}
                    part="filter-icon"
                    class="data-table__col-filter-icon ${this.isColumnFilterActive(t)?"active":""}">
                  </hmwc-button>
                  ${this.renderColumnFilter(t)}
                </hmwc-attachment>
              `:""}
        </div>
        ${e?"":c`<div class="data-table__col-resize" @mousedown=${r=>this.handleResizeStart(r,t)}></div>`}
      </th>
    `}_renderHeader(){let t=this.fieldKeys.length&&this.isSkeletonField(this.fieldKeys[0]);return c`
      <thead>
        <tr part="header" role="row" class="data-table__table-head">
          ${this._renderSelectionHeaderCell()}
          ${t?this._renderHeaderSkeletonCell():[...this.fieldKeys,...this.getActionFields()].map(e=>this._renderHeaderCell(e))}
        </tr>
      </thead>
    `}_renderEmptyRow(){return c`
      <tr part="row" class="data-table__table-row empty" role="row">
        <td class="data-table__item empty" colspan=${this.getTotalColumnCount()}>
          <slot name="empty">No entries found.</slot>
        </td>
      </tr>
    `}_renderSelectionRowCell(t,e){return this.selectable?c`
      <td class="data-table__item checkbox">
        <hmwc-checkbox
          part="row-checkbox"
          small
          ?disabled=${this._fillerRows.has(t)}
          ?checked=${ee(this.getSelectionStatus(e))}
          @hmwc-change=${r=>{this._fillerRows.has(t)||(this.selections[(this.page-1)*this.amount+e]=r.detail.value,this.emitSelectionChange())}}></hmwc-checkbox>
      </td>
    `:""}_renderDataCell(t,e){let r=t[e];return/^\d+(\.\d+)?%$/.test(r)?c`
        <td class="data-table__item percent">
          <hmwc-progress
            part="progress"
            ?primary=${this.primary}
            ?alt=${this.alt}
            ?success=${this.success}
            ?neutral=${this.neutral}
            ?warning=${this.warning}
            ?danger=${this.danger}
            value=${parseInt(r.split("%")[0])}>
          </hmwc-progress>
        </td>
      `:r==="#SKELETON"?c`<td class="data-table__item skeleton"><hmwc-skeleton></hmwc-skeleton></td>`:c`<td class="data-table__item">
      ${r===!0?c`<hmwc-icon src="check" success></hmwc-icon>`:r===!1?c`<hmwc-icon src="x" danger></hmwc-icon>`:r&&this.isValidDate(r)?new Date(r).toLocaleDateString():r}
    </td>`}_renderActionCell(t,e){return c`<td class="data-table__item action">
      <hmwc-button
        sm
        label=${e.label}
        icon=${e.icon??""}
        ?primary=${!e.variant||e.variant==="primary"}
        ?alt=${e.variant==="alt"}
        ?success=${e.variant==="success"}
        ?warning=${e.variant==="warning"}
        ?neutral=${e.variant==="neutral"}
        ?danger=${e.variant==="danger"}
        @hmwc-click=${()=>this.emit("hmwc-action",{detail:{value:t,action:e.field}})}></hmwc-button>
    </td>`}_renderRow(t,e){return c`
      <tr
        part="row"
        class="data-table__table-row"
        role="row"
        @click=${()=>!this._fillerRows.has(t)&&this.emit("hmwc-click",{detail:{value:t}})}>
        ${this._renderSelectionRowCell(t,e)} ${this.fieldKeys.map(r=>this._renderDataCell(t,r))}
        ${this.getActions().map(r=>this._renderActionCell(t,r))}
      </tr>
    `}_renderBody(){return c`
      <tbody part="data" class="data-table__body">
        ${!this.isLoading&&this.results.length===0?this._renderEmptyRow():this.entries.map((t,e)=>this._renderRow(t,e))}
      </tbody>
    `}_renderFooter(){return this.pagination?c`
      <div class="data-table__footer">
        <div part="entries" class="data-table__info">
          ${this.total!==0||this.isSkeletonField(this.fieldKeys[0])?`Showing ${(this.page-1)*this.amount+1} to ${this.total<this.page*this.amount?this.total||this.amount:this.page*this.entries.length} of ${this.results.length} entries.`:"No entries found!"}
        </div>

        <hmwc-pagination
          sm
          part="pagination"
          class="data-table__pagination"
          primary
          page=${this.page}
          count=${Math.ceil(this.results.length/this.amount)||1}
          @hmwc-change=${t=>this.page=t.detail.page}
          @hmwc-click=${t=>t.stopImmediatePropagation()}
          siblings=${this.sm?0:1}></hmwc-pagination>
      </div>
    `:""}render(){return c`
      <div part="base" class=${f(this._renderBaseClasses())}>
        <div part="scroll" class="data-table__scroll">
          <table part="table" class="data-table__table" rules="none">
            ${this._renderHeader()} ${this._renderBody()}
          </table>
          ${this._footerInScroll?this._renderFooter():""}
        </div>
        ${this._footerInScroll?"":this._renderFooter()}
      </div>
    `}};$.styles=Qi;$.dependencies=[R,_,x,w,wt,L,ct,z,A,Y];$.slots=["empty"];M([b()],$.prototype,"selections",void 0);M([b()],$.prototype,"_filterableFields",void 0);M([b()],$.prototype,"_columnFilters",void 0);M([b()],$.prototype,"fieldKeys",void 0);M([b()],$.prototype,"_normalizedFields",void 0);M([b()],$.prototype,"ready",void 0);M([b()],$.prototype,"results",void 0);M([b()],$.prototype,"entries",void 0);M([b()],$.prototype,"total",void 0);M([a({type:Array})],$.prototype,"data",void 0);M([a({type:Object})],$.prototype,"fields",void 0);M([a({type:Number,reflect:!0})],$.prototype,"page",void 0);M([a({type:Number,reflect:!0})],$.prototype,"amount",void 0);M([a({type:String})],$.prototype,"label",void 0);M([a({type:Object})],$.prototype,"sizing",void 0);M([a({type:String})],$.prototype,"filter",void 0);M([a({type:String})],$.prototype,"sort",void 0);M([a({type:String})],$.prototype,"order",void 0);M([a({type:Boolean})],$.prototype,"pagination",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"selectable",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"sm",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"md",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"lg",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"fluid",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"loading",void 0);M([a({type:Object})],$.prototype,"action",void 0);M([a({type:Array})],$.prototype,"actions",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"cache",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"primary",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"alt",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"success",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"neutral",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"warning",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"danger",void 0);M([p(["data","filter","order","fields"])],$.prototype,"dataUpdate",void 0);M([p(["amount","page","loading"],{waitUntilFirstUpdate:!0})],$.prototype,"entriesUpdate",void 0);M([b()],$.prototype,"_footerInScroll",void 0);$.define("hmwc-data-table",$);var ro=m`
  :host {
    --grid-row-gap: none;
    --grid-col-gap: none;
    --grid-justification: initial;
    --grid-alignment: initial;

    display: block;
    width: 100%;
  }

  :host([fit]) {
    width: fit-content;
  }

  :host([page]) {
    overflow-y: auto;
    height: 100%;
  }

  .grid {
    display: block;
    width: 100%;
    height: 100%;

    & .grid__label {
      display: block;
      color: var(--hmwc-color-text-secondary);
      font-size: var(--hmwc-font-size-small);
      font-family: var(--hmwc-font-sans);
      line-height: 2;
    }

    & .grid__content {
      display: grid;
      grid-template-columns: var(--template-col, repeat(var(--cols, 1), auto));
      grid-template-rows: var(--template-row, repeat(var(--rows, 1), min-content));
      row-gap: var(--grid-row-gap);
      column-gap: var(--grid-col-gap);
      justify-content: var(--grid-justification);
      align-items: var(--grid-alignment);
      height: 100%;
    }

    &.page {
      margin: var(--hmwc-spacing-2x-large) auto;

      transition: max-width 0.3s ease-in-out;

      @media (min-width: 768px) {
        max-width: 900px;
      }
      @media (min-width: 1024px) {
        max-width: 1100px;
      }
      @media (min-width: 1280px) {
        max-width: 1200px;
      }
      @media (min-width: 1440px) {
        max-width: 1350px;
      }
      @media (min-width: 1800px) {
        max-width: 1700px;
      }
    }

    &.auto {
      grid-template-columns: repeat(var(--cols, 1), auto);
    }

    &.gap-row-xs {
      --grid-row-gap: var(--hmwc-spacing-3x-small);
    }

    &.gap-row-sm {
      --grid-row-gap: var(--hmwc-spacing-2x-small);
    }

    &.gap-row-md {
      --grid-row-gap: var(--hmwc-spacing-x-small);
    }

    &.gap-row-lg {
      --grid-row-gap: var(--hmwc-spacing-medium);
    }

    &.gap-row-xl {
      --grid-row-gap: var(--hmwc-spacing-x-large);
    }

    &.gap-col-xs {
      --grid-col-gap: var(--hmwc-spacing-3x-small);
    }

    &.gap-col-sm {
      --grid-col-gap: var(--hmwc-spacing-2x-small);
    }

    &.gap-col-md {
      --grid-col-gap: var(--hmwc-spacing-x-small);
    }

    &.gap-col-lg {
      --grid-col-gap: var(--hmwc-spacing-medium);
    }

    &.gap-col-xl {
      --grid-col-gap: var(--hmwc-spacing-x-large);
    }

    &.gap-xs {
      --grid-row-gap: var(--hmwc-spacing-3x-small);
      --grid-col-gap: var(--hmwc-spacing-3x-small);
    }

    &.gap-sm {
      --grid-row-gap: var(--hmwc-spacing-2x-small);
      --grid-col-gap: var(--hmwc-spacing-2x-small);
    }

    &.gap-md {
      --grid-row-gap: var(--hmwc-spacing-x-small);
      --grid-col-gap: var(--hmwc-spacing-x-small);
    }

    &.gap-lg {
      --grid-row-gap: var(--hmwc-spacing-medium);
      --grid-col-gap: var(--hmwc-spacing-medium);
    }

    &.gap-xl {
      --grid-row-gap: var(--hmwc-spacing-x-large);
      --grid-col-gap: var(--hmwc-spacing-x-large);
    }

    &.justify-start {
      --grid-justification: start;
    }

    &.justify-end {
      --grid-justification: end;
    }

    &.justify-center {
      --grid-justification: center;
    }

    &.justify-stretch {
      --grid-justification: stretch;
    }

    &.justify-around {
      --grid-justification: space-around;
    }

    &.justify-between {
      --grid-justification: space-between;
    }

    &.justify-even {
      --grid-justification: space-evenly;
    }

    &.align-start {
      --grid-alignment: start;
    }

    &.align-end {
      --grid-alignment: end;
    }

    &.align-center {
      --grid-alignment: center;
    }
  }
`;var ae=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},ht=class extends u{constructor(){super(...arguments),this.align="center"}connectedCallback(){super.connectedCallback(),this.page&&(this.animation="scale-in");let t=this.controllers.slot.get();this.rows||(this.rows=Math.ceil(t.length/(this.cols||1))),t.forEach((e,r)=>{e.style.setProperty("z-index",`${t.length-(r+1)}`)})}render(){let t=f({grid:!0,"gap-xs":this.gap==="xs","gap-sm":this.gap==="sm","gap-md":this.gap==="md","gap-lg":this.gap==="lg","gap-xl":this.gap==="xl","gap-row-xs":this.gap?.includes("/")&&this.gap?.split("/")[0]==="xs"||!1,"gap-row-sm":this.gap?.includes("/")&&this.gap?.split("/")[0]==="sm"||!1,"gap-row-md":this.gap?.includes("/")&&this.gap?.split("/")[0]==="md"||!1,"gap-row-lg":this.gap?.includes("/")&&this.gap?.split("/")[0]==="lg"||!1,"gap-row-xl":this.gap?.includes("/")&&this.gap?.split("/")[0]==="xl"||!1,"gap-col-xs":this.gap?.includes("/")&&this.gap?.split("/")[1]==="xs"||!1,"gap-col-sm":this.gap?.includes("/")&&this.gap?.split("/")[1]==="sm"||!1,"gap-col-md":this.gap?.includes("/")&&this.gap?.split("/")[1]==="md"||!1,"gap-col-lg":this.gap?.includes("/")&&this.gap?.split("/")[1]==="lg"||!1,"gap-col-xl":this.gap?.includes("/")&&this.gap?.split("/")[1]==="xl"||!1,"justify-start":this.justify==="start","justify-end":this.justify==="end","justify-center":this.justify==="center","justify-stretch":this.justify==="stretch","justify-around":this.justify==="around","justify-between":this.justify==="between","justify-even":this.justify==="even","align-start":this.align==="start","align-end":this.align==="end","align-center":this.align==="center",fluid:!!this.fit,page:!!this.page});return c`
      <div part="base" class=${t}>
        ${this.label?c`<slot name="label" part="label">${this.label}</slot>`:""}

        <div
          part="content"
          class="grid__content"
          style="--rows: ${this.rows-1||1}; --cols: ${this.cols||1}; ${this.template?this.template instanceof Object?`--template-col: ${this.template.col}; --template-row: ${this.template.row}`:`--template-col: ${this.template}`:""}">
          <slot></slot>
        </div>
      </div>
    `}};ht.styles=ro;ht.dependencies=[];ht.slots=[];ae([a({type:Number,reflect:!0})],ht.prototype,"rows",void 0);ae([a({type:Number,reflect:!0})],ht.prototype,"cols",void 0);ae([a({type:String})],ht.prototype,"gap",void 0);ae([a({type:String})],ht.prototype,"label",void 0);ae([a({type:String})],ht.prototype,"template",void 0);ae([a({type:String})],ht.prototype,"justify",void 0);ae([a({type:String})],ht.prototype,"align",void 0);ae([a({type:Boolean})],ht.prototype,"form",void 0);ae([a({type:Boolean,reflect:!0})],ht.prototype,"fit",void 0);ae([a({type:Boolean,reflect:!0})],ht.prototype,"page",void 0);ht.define("hmwc-grid",ht);var io=m`
  :host {
    --popup-width: 31rem;
    --popup-height: auto;
    --popup-radius: var(--hmwc-border-radius-x-large);
    --popup-spacing: var(--hmwc-spacing-x-large);
    --popup-background: var(--hmwc-panel-background-color);
    display: contents;

    *::-webkit-scrollbar {
      background-color: var(--hmwc-panel-background-color);
      width: 16px;
    }

    *::-webkit-scrollbar-track {
      margin-top: calc(0.8 * var(--hmwc-spacing-x-small));
      background-color: var(--hmwc-panel-background-color);
    }

    *::-webkit-scrollbar-thumb {
      background-color: var(--hmwc-color-neutral-200);
      border-radius: 16px;
      border: 4px solid var(--hmwc-panel-background-color);
    }

    *::-webkit-scrollbar-button {
      display: none;
    }
  }

  :host([dark]) {
    & > hmwc-tab-group > hmwc-tab-content {
      hmwc-dropdown[disabled]::part(trigger) {
        hmwc-button::part(base) {
          opacity: 1;
          background-color: var(--hmwc-input-background-color);
        }
      }
    }
  }

  :host {
    & *,
    & *::part(base) {
      *::-webkit-scrollbar {
        background-color: var(--hmwc-panel-background-color);
        width: 16px;
      }

      *::-webkit-scrollbar-track {
        margin-top: calc(0.8 * var(--hmwc-spacing-x-small));
        background-color: var(--hmwc-panel-background-color);
      }

      *::-webkit-scrollbar-thumb {
        background-color: var(--hmwc-color-neutral-200);
        border-radius: 16px;
        border: 4px solid var(--hmwc-panel-background-color);
      }
    }

    hmwc-card {
      hmwc-button::part(base) {
        --card-radius: var(--hmwc-border-radius-large);
        --card-background: var(--hmwc-color-neutral-100);
      }

      hmwc-input::part(field) {
        border: none;
      }
    }
  }

  .popup {
    &:not(.drawer) {
      display: none;
      align-items: center;
      justify-content: center;
      font-family: var(--hmwc-font-sans);
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: var(--hmwc-z-index-dialog);
    }
    & .popup__overlay {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: var(--hmwc-overlay-background-color);
      opacity: 0;
      transition: opacity 250ms ease;
    }

    & .popup__panel {
      min-height: fit-content;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: var(--hmwc-spacing-2x-small);
      z-index: var(--hmwc-z-index-dialog);
      width: var(--popup-width);
      max-width: calc(100% - var(--hmwc-spacing-2x-large));
      max-height: calc(100% - var(--hmwc-spacing-2x-large));
      height: var(--popup-height);
      background-color: var(--popup-background);
      border-radius: var(--popup-radius);
      box-shadow: var(--hmwc-shadow-x-large);
      position: relative;
      border: var(--hmwc-panel-border-width) solid var(--hmwc-panel-border-color);
      overflow: hidden;
      opacity: 0;
      transform: translateY(8px) scale(0.96);
      transition: opacity 200ms cubic-bezier(0.2, 0, 0, 1), transform 300ms cubic-bezier(0.2, 0.9, 0.3, 1);

      &:focus {
        outline: none;
      }

      @media (forced-colors: active) {
        border: solid 1px var(--hmwc-color-neutral-0);
      }

      @media screen and (max-width: 420px) {
        max-height: 80vh;
      }
      &::-webkit-scrollbar {
        background-color: var(--popup-background);
        width: 16px;
      }

      &::-webkit-scrollbar-track {
        margin-top: calc(0.8 * var(--hmwc-spacing-x-small));
        background-color: var(--popup-background);
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--hmwc-color-neutral-200);
        border-radius: 16px;
        border: 4px solid var(--popup-background);
      }

      &::-webkit-scrollbar-button {
        display: none;
      }

      & .popup__content {
        flex: 1 1 auto;
        padding: 0 var(--popup-spacing) var(--popup-spacing);
        overflow: hidden auto;
        -webkit-overflow-scrolling: touch;
        width: 100%;
        display: block;
        height: 100%;
        box-sizing: border-box;
        color: var(--hmwc-color-neutral-700);
      }

      & .popup__footer {
        display: flex;
        flex: 0 0 auto;
        gap: var(--hmwc-spacing-small);
        text-align: right;
        justify-content: end;
        padding: var(--hmwc-spacing-small) var(--popup-spacing) var(--popup-spacing);

        & .popup__footer-actions {
          display: flex;
          align-items: center;
          width: 100%;
          gap: var(--hmwc-spacing-x-small);
          justify-content: flex-end;
        }

        &::slotted(*),
        & ::slotted(*) {
          display: flex;
          align-items: center;
          gap: var(--hmwc-spacing-x-small);
          justify-content: flex-end;
          width: 100%;
        }
      }
    }

    &.header,
    &.confirmation {
      & .popup__panel {
        & .popup__header {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--hmwc-spacing-medium) calc(1.1 * var(--hmwc-spacing-large)) var(--hmwc-spacing-small);

          & .popup__header-content {
            flex: 1 1 auto;
            display: flex;
            align-items: center;
            gap: var(--hmwc-spacing-small);
            min-width: 0;
          }

          & .popup__icon {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            font-size: var(--hmwc-font-size-x-large);

            &.icon-primary {
              color: var(--hmwc-color-primary-600);
            }
            &.icon-success {
              color: var(--hmwc-color-success-600);
            }
            &.icon-warning {
              color: var(--hmwc-color-warning-600);
            }
            &.icon-danger {
              color: var(--hmwc-color-danger-600);
            }
            &.icon-neutral {
              color: var(--hmwc-color-neutral-600);
            }
          }

          & .popup__title {
            flex: 1 1 auto;
            font: inherit;
            font-size: calc(0.05rem + var(--hmwc-font-size-large));
            font-weight: var(--hmwc-font-weight-semibold);
            letter-spacing: -0.2px;
            display: flex;
            align-items: center;
            line-height: 1rem;
            margin: 0 auto 0 0;
            color: var(--hmwc-color-neutral-900);
          }

          & .popup__controls {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            gap: var(--hmwc-spacing-2x-small);
          }
        }
      }
    }

    /* Variant accent borders */
    &.variant-primary {
      & .popup__panel {
        border-top: 3px solid var(--hmwc-color-primary-600);
      }
    }
    &.variant-success {
      & .popup__panel {
        border-top: 3px solid var(--hmwc-color-success-600);
      }
    }
    &.variant-warning {
      & .popup__panel {
        border-top: 3px solid var(--hmwc-color-warning-600);
      }
    }
    &.variant-danger {
      & .popup__panel {
        border-top: 3px solid var(--hmwc-color-danger-600);
      }
    }
    &.variant-neutral {
      & .popup__panel {
        border-top: 3px solid var(--hmwc-color-neutral-600);
      }
    }

    &.fluid {
      & .popup__panel {
        min-height: 0;
      }
    }

    &.open {
      display: flex;
    }

    /* ── Sizes ────────────────────────────────── */

    &.sm {
      --popup-width: 30rem;
      --popup-spacing: var(--hmwc-spacing-large);
      --popup-radius: calc(1.15 * var(--hmwc-border-radius-large));

      &.drawer {
        --popup-width: 20rem;
        --popup-spacing: calc(1.5 * var(--hmwc-spacing-large));
      }
    }

    &.md {
      --popup-width: 42rem;
      --popup-height: min(42rem, 65%);
      --popup-spacing: calc(1.25 * var(--hmwc-spacing-large));

      &.drawer {
        --popup-width: 26rem;
        --popup-spacing: calc(1.5 * var(--hmwc-spacing-large));
      }
    }

    &.lg {
      --popup-width: 45rem;
      --popup-height: 65%;
      --popup-spacing: calc(1.25 * var(--hmwc-spacing-large));

      &.drawer {
        --popup-width: 32rem;
        --popup-spacing: calc(1.5 * var(--hmwc-spacing-large));
      }
    }

    &.xl {
      --popup-width: 60rem;
      --popup-height: 75%;
      --popup-spacing: calc(1.25 * var(--hmwc-spacing-large));

      &.drawer {
        --popup-width: 42rem;
        --popup-spacing: calc(1.5 * var(--hmwc-spacing-large));
      }
    }

    &.full {
      --popup-width: calc(100% - var(--hmwc-spacing-2x-large));
      --popup-height: calc(100% - var(--hmwc-spacing-2x-large));
      --popup-spacing: calc(1.25 * var(--hmwc-spacing-large));
    }

    &.drawer {
      display: none;
      font-family: var(--hmwc-font-sans);
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: var(--hmwc-z-index-dialog);

      &.open {
        display: block;
      }

      & .popup__panel {
        display: flex;
        flex-direction: column;
        gap: var(--hmwc-spacing-2x-small);
        z-index: 2;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        width: var(--popup-width);
        max-width: calc(100% - var(--hmwc-spacing-2x-large));
        max-height: none;
        height: 100%;
        background-color: var(--hmwc-panel-background-color);
        box-shadow: var(--hmwc-shadow-x-large);
        border-radius: 0;
        border-left: var(--hmwc-panel-border-width) solid var(--hmwc-panel-border-color);
        overflow: hidden;
        transform: translateX(100%);
        transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 350ms cubic-bezier(0.22, 1, 0.36, 1);

        &:focus {
          outline: none;
        }

        & .popup__header {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--popup-spacing);
          padding-bottom: var(--hmwc-spacing-small);
          border-bottom: 1px solid var(--hmwc-panel-border-color);

          & .popup__header-content {
            flex: 1 1 auto;
            display: flex;
            align-items: center;
            gap: var(--hmwc-spacing-small);
            min-width: 0;
          }

          & .popup__icon {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            font-size: var(--hmwc-font-size-x-large);

            &.icon-primary {
              color: var(--hmwc-color-primary-600);
            }
            &.icon-success {
              color: var(--hmwc-color-success-600);
            }
            &.icon-warning {
              color: var(--hmwc-color-warning-600);
            }
            &.icon-danger {
              color: var(--hmwc-color-danger-600);
            }
            &.icon-neutral {
              color: var(--hmwc-color-neutral-600);
            }
          }

          & .popup__title {
            flex: 1 1 auto;
            font: inherit;
            font-size: calc(0.05rem + var(--hmwc-font-size-large));
            font-weight: var(--hmwc-font-weight-semibold);
            letter-spacing: -0.2px;
            display: flex;
            align-items: center;
            line-height: 1rem;
            margin: 0;
            color: var(--hmwc-color-neutral-900);
          }

          & .popup__controls {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            gap: var(--hmwc-spacing-2x-small);
          }
        }

        & .popup__content {
          flex: 1 1 auto;
          width: 100%;
          margin: 0;
          padding: var(--popup-spacing);
          overflow-y: auto;
          overflow-x: hidden;
          box-sizing: border-box;
          color: var(--hmwc-color-neutral-700);

          &::-webkit-scrollbar {
            background-color: transparent;
            width: 8px;
          }

          &::-webkit-scrollbar-track {
            background-color: transparent;
          }

          &::-webkit-scrollbar-thumb {
            background-color: transparent;
            border-radius: 8px;
            transition: background-color 0.2s;
          }

          &:hover::-webkit-scrollbar-thumb {
            background-color: var(--hmwc-color-neutral-300);
          }

          &::-webkit-scrollbar-button {
            display: none;
          }
        }

        & .popup__footer {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: var(--hmwc-spacing-x-small);
          padding: var(--hmwc-spacing-medium) var(--popup-spacing);
          border-top: 1px solid var(--hmwc-panel-border-color);
        }
      }
    }

    &:not(.header) {
      & .popup__header {
        display: none;
      }
    }

    &:not(.footer) {
      & .popup__footer {
        display: none;
      }
    }
  }
`;var Ar={info:{icon:"info-circle-fill",iconVariant:"primary",variant:"primary",fluid:!0,size:"sm",confirmLabel:"OK",hideCancel:!0,confirmation:!0},success:{icon:"check-circle-fill",iconVariant:"success",variant:"success",fluid:!0,size:"sm",confirmLabel:"OK",confirmVariant:"success",hideCancel:!0,confirmation:!0},warning:{icon:"exclamation-triangle-fill",iconVariant:"warning",variant:"warning",fluid:!0,size:"sm",confirmLabel:"OK",confirmVariant:"warning",hideCancel:!0,confirmation:!0},error:{icon:"x-circle-fill",iconVariant:"danger",variant:"danger",fluid:!0,size:"sm",confirmLabel:"OK",confirmVariant:"danger",hideCancel:!0,confirmation:!0},confirm:{icon:"question-circle-fill",iconVariant:"primary",variant:"primary",fluid:!0,size:"sm",confirmLabel:"Confirm",cancelLabel:"Cancel",confirmVariant:"primary",confirmation:!0},delete:{icon:"exclamation-triangle-fill",iconVariant:"danger",variant:"danger",fluid:!0,size:"sm",confirmLabel:"Delete",cancelLabel:"Cancel",confirmVariant:"danger",confirmation:!0},retry:{icon:"x-circle-fill",variant:"danger",fluid:!0,size:"sm",confirmLabel:"Retry",cancelLabel:"Cancel",confirmVariant:"danger",confirmation:!0}};var G=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},D=class extends u{constructor(){super(...arguments),this.variant="default",this.confirmLabel="Confirm",this.cancelLabel="Cancel",this.confirmVariant="primary",this.dismissible=!0,this.overlayDismiss=!0,this.escapeDismiss=!0,this.overlay=!0,this._keydownHandler=this._handleKeyDown.bind(this),this._autoDestroy=!1}connectedCallback(){super.connectedCallback(),this.route&&this._enableRouting(),!this.id&&this.title&&(this.id=this.title.toLowerCase().replace(/\s+/g,"-"))}firstUpdated(){if(this._popup.hidden=!this.active,this.active){let t=this._popup.querySelector(".popup__overlay");t&&t.style.setProperty("opacity","1"),this._panel.style.setProperty("opacity","1"),this._panel.style.setProperty("transform",this.drawer?"translateX(0)":"translateY(0) scale(1)"),this._addListeners(),this.controllers.scroll.lockBodyScrolling(this)}}disconnectedCallback(){super.disconnectedCallback(),this._removeListeners(),this.controllers.scroll.unlockBodyScrolling(this)}handleOpenChange(){let t=this._popup.querySelector(".popup__overlay");this.active?(this._popup.hidden=!1,this._panel.focus(),requestAnimationFrame(()=>{t&&t.style.setProperty("opacity","1"),this._panel.style.setProperty("opacity","1"),this._panel.style.setProperty("transform",this.drawer?"translateX(0)":"translateY(0) scale(1)")}),this._addListeners(),this.controllers.scroll.lockBodyScrolling(this),this.emit("hmwc-show")):(requestAnimationFrame(()=>{t&&t.style.setProperty("opacity","0"),this._panel.style.setProperty("opacity",this.drawer?"1":"0"),this._panel.style.setProperty("transform",this.drawer?"translateX(100%)":"translateY(8px) scale(0.96)")}),setTimeout(()=>{this.active||(this._popup.hidden=!0,this._autoDestroy&&this.remove())},350),this._removeListeners(),this.controllers.scroll.unlockBodyScrolling(this),this.emit("hmwc-hide"))}show(){this.active||(this._syncRoute(!0),this.active=!0)}hide(){this.active&&(this._syncRoute(!1),this.active=!1,this._resultResolver?.(!1),this._resultResolver=void 0)}async confirm(){this.emit("hmwc-submit",{cancelable:!0}).defaultPrevented||(this._resultResolver?.(!0),this._resultResolver=void 0,this.hide())}getResult(){return new Promise(t=>{this._resultResolver=t})}_addListeners(){document.addEventListener("keydown",this._keydownHandler)}_removeListeners(){document.removeEventListener("keydown",this._keydownHandler)}_handleKeyDown(t){t.key==="Escape"&&this.active&&(t.stopPropagation(),this.escapeDismiss&&this.hide())}_handleOverlayClick(){this.overlayDismiss&&this.hide()}_handleCancel(){this.emit("hmwc-cancel"),this.hide()}_syncRoute(t){if(!this.route)return;let e=window.location.pathname;window.location.href.includes("?")&&(e+=`?${window.location.href.split("?")[1].split("#")[0]}`),window.history.replaceState(null,"",t?`${e}#${this.route}`:e)}_enableRouting(){window.addEventListener("popstate",()=>{window.location.hash===`#${this.route}`?this.show():this.hide()})}_renderHeader(){return this.title||this.controllers.slot.test("header")||this.controllers.slot.test("title")?c`
      <slot name="header" part="header" class="popup__header">
        <div class="popup__header-content">
          ${this.icon||this.controllers.slot.test("icon")?c`
                <slot name="icon" part="icon" class="popup__icon ${this.iconVariant?`icon-${this.iconVariant}`:""}">
                  <hmwc-icon src=${y(this.icon)}></hmwc-icon>
                </slot>
              `:E}
          <slot name="title" part="title" class="popup__title"> ${this.title} </slot>
        </div>
        <div part="controls" class="popup__controls">
          <slot name="controls"></slot>
          ${this.dismissible?c`<hmwc-button sm basic icon="x-lg" @hmwc-click=${()=>this.hide()}></hmwc-button>`:E}
        </div>
      </slot>
    `:E}_renderFooter(){return this.controllers.slot.test("footer")||this.confirmation?c`
      <div part="footer" class="popup__footer">
        <slot name="footer" class="popup__footer-actions">
          ${this.confirmation?c`
                ${this.hideCancel?E:c`<hmwc-button sm neutral label=${this.cancelLabel} @hmwc-click=${()=>this._handleCancel()}></hmwc-button>`}
                <hmwc-button
                  sm
                  ?primary=${this.confirmVariant==="primary"}
                  ?success=${this.confirmVariant==="success"}
                  ?warning=${this.confirmVariant==="warning"}
                  ?danger=${this.confirmVariant==="danger"}
                  ?neutral=${this.confirmVariant==="neutral"}
                  label=${this.confirmLabel}
                  @hmwc-click=${()=>this.confirm()}></hmwc-button>
              `:E}
        </slot>
      </div>
    `:E}render(){let t=f({popup:!0,open:!!this.active,drawer:!!this.drawer,confirmation:!!this.confirmation,fluid:!!this.fluid,sm:!!this.sm,md:!!this.md||!this.sm&&!this.lg&&!this.xl&&!this.full,lg:!!this.lg,xl:!!this.xl,full:!!this.full,[`variant-${this.variant}`]:this.variant!=="default",header:!!this.title||this.controllers.slot.test("header")||this.controllers.slot.test("title"),footer:!!this.confirmation||this.controllers.slot.test("footer")});return c`
      <div part="base" class=${t}>
        ${this.overlay?c`<div part="overlay" class="popup__overlay" @click=${()=>this._handleOverlayClick()}></div>`:E}
        <div
          part="panel"
          class="popup__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.active?"false":"true"}
          aria-label=${y(this.title||void 0)}
          aria-labelledby=${y(this.title?"title":void 0)}
          tabindex="-1">
          ${this._renderHeader()}

          <slot part="content" class="popup__content" tabindex="-1"> ${this.message} </slot>

          ${this._renderFooter()}
        </div>
      </div>
    `}};D.styles=io;D.dependencies=[w,_];D.slots=["title","icon","controls","header","footer"];G([a({type:Boolean,reflect:!0})],D.prototype,"active",void 0);G([a({type:String})],D.prototype,"title",void 0);G([a({type:String})],D.prototype,"message",void 0);G([a({type:String})],D.prototype,"icon",void 0);G([a({type:String,attribute:"icon-variant"})],D.prototype,"iconVariant",void 0);G([a({type:Boolean,reflect:!0})],D.prototype,"sm",void 0);G([a({type:Boolean,reflect:!0})],D.prototype,"md",void 0);G([a({type:Boolean,reflect:!0})],D.prototype,"lg",void 0);G([a({type:Boolean,reflect:!0})],D.prototype,"xl",void 0);G([a({type:Boolean,reflect:!0})],D.prototype,"full",void 0);G([a({type:String,reflect:!0})],D.prototype,"variant",void 0);G([a({type:Boolean,reflect:!0})],D.prototype,"drawer",void 0);G([a({type:Boolean,reflect:!0})],D.prototype,"confirmation",void 0);G([a({type:Boolean,attribute:"hide-cancel"})],D.prototype,"hideCancel",void 0);G([a({type:String,attribute:"confirm-label"})],D.prototype,"confirmLabel",void 0);G([a({type:String,attribute:"cancel-label"})],D.prototype,"cancelLabel",void 0);G([a({type:String,attribute:"confirm-variant"})],D.prototype,"confirmVariant",void 0);G([a({type:Boolean,reflect:!0})],D.prototype,"fluid",void 0);G([a({type:Boolean,reflect:!0})],D.prototype,"dismissible",void 0);G([a({type:Boolean,attribute:"overlay-dismiss"})],D.prototype,"overlayDismiss",void 0);G([a({type:Boolean,attribute:"escape-dismiss"})],D.prototype,"escapeDismiss",void 0);G([a({type:Boolean,reflect:!0})],D.prototype,"overlay",void 0);G([a({type:String})],D.prototype,"route",void 0);G([T(".popup")],D.prototype,"_popup",void 0);G([T(".popup__panel")],D.prototype,"_panel",void 0);G([p("active",{waitUntilFirstUpdate:!0})],D.prototype,"handleOpenChange",null);function da(n={}){let t=Object.fromEntries(Object.entries(n).filter(([,i])=>i!==void 0)),e=n.preset?{...Ar[n.preset],...t}:n,r=document.createElement("hmwc-popup");if(n.content&&(typeof n.content=="string"?r.innerHTML=n.content:r.appendChild(n.content)),n.buttons?.length){let i=document.createElement("div");i.slot="footer";for(let s of n.buttons){let l=document.createElement("hmwc-button");l.sm=!0,l.label=s.label,s.variant&&(l[s.variant]=!0),s.icon&&(l.icon=s.icon),s.basic&&(l.basic=!0),s.action&&l.addEventListener("hmwc-click",()=>s.action(r)),i.appendChild(l)}r.appendChild(i)}n.className&&(r.className=n.className),n.style&&(typeof n.style=="string"?r.setAttribute("style",n.style):Object.assign(r.style,n.style)),n.onShow&&r.addEventListener("hmwc-show",()=>n.onShow(r)),n.onHide&&r.addEventListener("hmwc-hide",()=>n.onHide(r)),n.onCancel&&r.addEventListener("hmwc-cancel",()=>n.onCancel(r)),n.onSubmit&&r.addEventListener("hmwc-submit",async i=>{await n.onSubmit(r)===!1&&i.preventDefault()}),document.body.appendChild(r),e.title&&(r.title=e.title),e.message&&(r.message=e.message),e.icon&&(r.icon=e.icon),e.iconVariant&&(r.iconVariant=e.iconVariant),e.size?r[e.size]=!0:r.sm=!0,e.variant&&(r.variant=e.variant),e.drawer&&(r.drawer=!0),e.confirmation&&(r.confirmation=!0),e.hideCancel&&(r.hideCancel=!0),e.confirmLabel&&(r.confirmLabel=e.confirmLabel),e.cancelLabel&&(r.cancelLabel=e.cancelLabel),e.confirmVariant&&(r.confirmVariant=e.confirmVariant),e.fluid&&(r.fluid=!0),e.dismissible===!1&&(r.dismissible=!1),e.overlayDismiss===!1&&(r.overlayDismiss=!1),e.escapeDismiss===!1&&(r.escapeDismiss=!1),e.overlay===!1&&(r.overlay=!1),r._autoDestroy=n.autoDestroy!==!1;let o=r.getResult();return requestAnimationFrame(()=>r.show()),{popup:r,result:o,close:()=>r.hide()}}D.define("hmwc-popup",D);var oo=m`
  :host {
    --hmwc-panel-transparency: 70%;

    display: flex;
  }

  .header {
    width: 100%;
    z-index: calc(1 + var(--hmwc-z-index-drawer));

    .header__proxy {
      width: 100%;
      padding: 0 var(--hmwc-spacing-3x-small);
      color: var(--hmwc-color-neutral-100);
      background: var(--hmwc-color-warning-600);
      border-bottom: var(--hmwc-panel-border-width) solid var(--hmwc-panel-border-color);
      font-size: var(--hmwc-font-size-small);
      text-align: center;

      & hmwc-icon {
        --icon-size: 0.5rem;
      }

      & .header__proxy-name {
        margin-left: var(--hmwc-spacing-3x-small);
        font-weight: var(--hmwc-font-weight-bold);
      }
    }

    & .header__bar {
      display: flex;
      padding: var(--hmwc-spacing-small) var(--hmwc-spacing-medium);
      align-items: center;
      font-family: var(--hmwc-font-sans);
      color: var(--hmwc-color-neutral-800);
      background-color: var(--hmwc-panel-background-color);
      border-bottom: calc(1.5 * var(--hmwc-panel-border-width)) solid var(--hmwc-panel-border-color);
      box-shadow: var(--hmwc-shadow-large);
      border-radius: var(--hmwc-spacing-2x-small);

      & .header__brand {
        display: flex;
        align-items: center;

        & .header__logo {
          display: flex;
          align-items: center;
          margin-right: calc(1.1 * var(--hmwc-spacing-medium));
          cursor: pointer;

          &:hover {
            filter: brightness(1.2);
            transition: all 0.1s ease-in-out;
          }

          & img {
            height: 2rem;
          }
        }

        & .header__title {
          font-size: var(--hmwc-font-size-medium);
          font-weight: var(--hmwc-font-weight-semibold);
          letter-spacing: var(--hmwc-letter-spacing-dense);
          cursor: pointer;

          &:hover {
            color: var(--hmwc-color-neutral-1000);
            transition: all 0.1s ease-in-out;

            & + .header__badge {
              hmwc-badge::part(base) {
                --badge-background: var(--hmwc-color-warning-600) !important;
                font-weight: var(--hmwc-font-weight-bold);
                transition: all 0.1s ease-in-out;
              }
            }
          }
        }

        & .header__badge {
          display: flex;
          margin-left: var(--hmwc-spacing-x-small);
        }
      }

      & .header__user {
        margin-left: auto;

        & .header__avatar {
          display: flex;
          gap: var(--hmwc-spacing-2x-small);
          align-items: center;
          margin-right: calc(1.15 * var(--hmwc-spacing-medium));

          & .header__user-name {
            color: var(--hmwc-color-neutral-700);
            font-size: var(--hmwc-font-size-medium);
            letter-spacing: var(--hmwc-letter-spacing-dense);
            font-weight: var(--hmwc-font-weight-semibold);
            margin-inline: var(--hmwc-spacing-3x-small);
          }

          & hmwc-icon {
            --icon-size: 0.7rem;
            position: relative;
            top: 1px;
            --icon-color: var(--hmwc-color-neutral-700);
          }
        }
      }

      & .header__controls {
        display: flex;
        gap: calc(1.2 * var(--hmwc-spacing-small));
        margin-right: var(--hmwc-spacing-2x-small);
        align-items: center;
        color: var(--hmwc-color-neutral-950);

        & .header__control::part(icon) {
          --icon-size: calc(1.25 * var(--hmwc-font-size-small));
          --icon-color: var(--hmwc-color-neutral-700);
        }
      }
    }
  }
`;var se=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},gt=class extends u{constructor(){super(...arguments),this.userUpdate=()=>this.updateProxyUser(),this.logoUpdate=()=>this._logo=this.getLogoVariant()}return(){this.emit("hmwc-navigate",{detail:{route:"/"}})}handleSettingsClick(){window.location.hash="#settings"}handleMenuSelection(t){t.detail.value==="account"?(t.stopImmediatePropagation(),window.location.hash="#settings"):t.detail.value==="logout"&&this.emit("hmwc-navigate",{detail:{route:"/logout"}})}updateProxyUser(){this.proxyUser=this.user?.proxyHost?.firstName?this.user:{}}observeTheme(){new MutationObserver(t=>{t.forEach(e=>{e.type!=="attributes"&&e.attributeName!=="class"||(this._logo=this.getLogoVariant())})}).observe(document.documentElement,{attributes:!0})}getLogoVariant(){let t=document.documentElement.className.includes("theme-dark")?"dark":"light";return this.logo instanceof String?this.logo:!(this.logo instanceof Object)||!this.logo[t]?"":this.logo[t]}navigateFAQ(){this.emit("hmwc-navigate",{detail:{route:"/help-support/faq"}})}setDefaultHMWCLogo(){this.logo||(this.logo={light:"/src/assets/images/hmwc-dark.png",dark:"/src/assets/images/hmwc-light.png"})}connectedCallback(){super.connectedCallback(),this.setDefaultHMWCLogo(),this.observeTheme()}render(){let t=[{value:"account",label:"My Account"},{value:"logout",label:"Logout"}],e=this.user?(this.user.proxyHost?.firstName||this.user.firstName)+" "+(this.user.proxyHost?.lastName||this.user.lastName):"";return c`
      <div part="base" class="header">
        <slot></slot>

        ${this.proxyUser?.firstName?c`
              <div part="proxy" class="header__proxy">
                <hmwc-icon src="exclamation-circle-fill-circle"></hmwc-icon>
                Currently proxying as:
                <span class="header__proxy-name">${this.proxyUser.firstName} ${this.proxyUser.lastName}</span>
              </div>
            `:""}

        <div part="bar" class="header__bar">
          <div part="brand" class="header__brand" @click=${this.return}>
            <slot name="logo" class="header__logo"> ${this.logo?c` <img part="logo" src=${this._logo} alt="Logo" /> `:""} </slot>
            <slot name="title" part="title" class="header__title"> ${this.title} </slot>
            <slot name="badge" class="header__badge"> ${this.beta?c`<hmwc-badge part="badge" sm warning label="BETA"></hmwc-badge>`:""} </slot>
          </div>

          <div class="header__user">
            <hmwc-attachment distance="8" placement="bottom" .items=${t} @hmwc-select=${this.handleMenuSelection}>
              <div part="user" class="header__avatar" slot="anchor">
                <hmwc-avatar small status="active" name=${e}></hmwc-avatar>
                <span part="user-name" class="header__user-name">${e}</span>
                <hmwc-icon flex src="caret-down-fill"></hmwc-icon>
              </div>
            </hmwc-attachment>
          </div>

          <div part="controls" class="header__controls">
            <hmwc-tooltip arrow label="Search" placement="bottom-end" distance="7" delay="400">
              <hmwc-button part="control" class="header__control" sm basic icon="search" label="Search"></hmwc-button>
            </hmwc-tooltip>

            <hmwc-tooltip arrow label="Secure Messaging" placement="bottom-end" distance="7" delay="400">
              <hmwc-button part="control" class="header__control" sm basic disabled icon="chat" label="Secure Messaging">
                <hmwc-badge small primary pill slot="badge">1</hmwc-badge>
              </hmwc-button>
            </hmwc-tooltip>

            <hmwc-tooltip arrow label="Help / FAQ" placement="bottom-end" distance="7" delay="400">
              <hmwc-button
                part="control"
                class="header__control"
                sm
                basic
                icon="question-circle"
                label="Help / FAQ"
                @hmwc-click=${this.navigateFAQ}></hmwc-button>
            </hmwc-tooltip>

            <hmwc-tooltip arrow label="Settings" placement="bottom-end" distance="7" delay="400">
              <hmwc-button
                part="control"
                class="header__control"
                sm
                basic
                icon="gear"
                label="Settings"
                @hmwc-click=${this.handleSettingsClick}></hmwc-button>
            </hmwc-tooltip>
          </div>
        </div>
      </div>
    `}};gt.styles=oo;gt.dependencies=[R,j,q,w,x,D,W];se([b()],gt.prototype,"_logo",void 0);se([b()],gt.prototype,"proxyUser",void 0);se([a({type:String,reflect:!0})],gt.prototype,"title",void 0);se([a()],gt.prototype,"logo",void 0);se([a({type:Object})],gt.prototype,"user",void 0);se([a({type:Boolean,reflect:!0})],gt.prototype,"beta",void 0);se([T("#search")],gt.prototype,"popup",void 0);se([T("hmwc-menu")],gt.prototype,"menu",void 0);se([p("user")],gt.prototype,"userUpdate",void 0);se([p("logo")],gt.prototype,"logoUpdate",void 0);gt.define("hmwc-header",gt);var ao="important",pa=" !"+ao,so=Ee(class extends me{constructor(n){if(super(n),n.type!==Zt.ATTRIBUTE||n.name!=="style"||n.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((t,e)=>{let r=n[e];return r==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(n,[t]){let{style:e}=n.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?e.removeProperty(r):e[r]=null);for(let r in t){let o=t[r];if(o!=null){this.ft.add(r);let i=typeof o=="string"&&o.endsWith(pa);r.includes("-")||i?e.setProperty(r,i?o.slice(0,-11):o,i?ao:""):e[r]=o}}return kt}});var no=m`
  :host {
    --image-width: 100%;
    --image-height: 100%;

    display: flex;
    width: fit-content;
    height: fit-content;
  }

  .image {
    display: flex;
    width: var(--image-width);
    height: var(--image-height);
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Fit — maps to the img's object-fit */
    &[data-fit='cover'] img {
      object-fit: cover;
    }
    &[data-fit='contain'] img {
      object-fit: contain;
    }
    &[data-fit='fill'] img {
      object-fit: fill;
    }
    &[data-fit='none'] img {
      object-fit: none;
    }
    &[data-fit='scale-down'] img {
      object-fit: scale-down;
    }

    /* Radius — derived from the global border-radius tokens */
    &[data-radius='none'] {
      border-radius: 0;
    }
    &[data-radius='sm'] {
      border-radius: var(--hmwc-border-radius-small);
    }
    &[data-radius='md'] {
      border-radius: var(--hmwc-border-radius-medium);
    }
    &[data-radius='lg'] {
      border-radius: var(--hmwc-border-radius-large);
    }
    &[data-radius='full'] {
      border-radius: var(--hmwc-border-radius-circle);
    }

    &.xs {
      --image-height: 1.25rem;
    }

    &.sm {
      --image-height: 2.5rem;
    }

    &.md {
      --image-height: 5rem;
    }

    &.lg {
      --image-height: 10rem;
    }

    &.xl {
      --image-height: 20rem;
    }
  }
`;var Ft=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},tt=class extends u{constructor(){super(...arguments),this.errored=!1,this.loading="lazy",this.fit="cover",this.radius="none"}handleSrcChange(){this.errored=!1}handleLoad(){this.errored=!1,this.emit("hmwc-ready",{detail:{src:this.src??""}})}handleError(){this.errored=!0}dimension(t){if(!(t==null||t===""))return typeof t=="number"||/^\d+$/.test(t)?`${t}px`:t}dimensionAttribute(t){if(t==null||t==="")return;let e=typeof t=="number"?t:/^\d+$/.test(t)?Number(t):NaN;return Number.isNaN(e)?void 0:`${e}`}render(){let t=f({image:!0,xs:!!this.xs,sm:!!this.sm,md:!!this.md,lg:!!this.lg,xl:!!this.xl}),e=this.dimension(this.width),r=this.dimension(this.height),o=so({...e?{"--image-width":e}:{},...r?{"--image-height":r}:{}}),i=this.errored&&this.controllers.slot.test("fallback");return c`
      <div part="base" class=${t} data-fit=${this.fit} data-radius=${this.radius} style=${o}>
        ${i?c`<slot name="fallback"></slot>`:c`
              <img
                part="image"
                src=${y(this.src)}
                alt=${this.alt??""}
                loading=${this.loading}
                width=${y(this.dimensionAttribute(this.width))}
                height=${y(this.dimensionAttribute(this.height))}
                @load=${this.handleLoad}
                @error=${this.handleError} />
            `}
      </div>
    `}};tt.styles=no;tt.slots=["fallback"];Ft([b()],tt.prototype,"errored",void 0);Ft([a({type:Boolean,reflect:!0})],tt.prototype,"xs",void 0);Ft([a({type:Boolean,reflect:!0})],tt.prototype,"sm",void 0);Ft([a({type:Boolean,reflect:!0})],tt.prototype,"md",void 0);Ft([a({type:Boolean,reflect:!0})],tt.prototype,"lg",void 0);Ft([a({type:Boolean,reflect:!0})],tt.prototype,"xl",void 0);Ft([a({type:String})],tt.prototype,"src",void 0);Ft([a({type:String})],tt.prototype,"alt",void 0);Ft([a({type:String,reflect:!0})],tt.prototype,"loading",void 0);Ft([a({type:String,reflect:!0})],tt.prototype,"fit",void 0);Ft([a({type:String,reflect:!0})],tt.prototype,"radius",void 0);Ft([a()],tt.prototype,"width",void 0);Ft([a()],tt.prototype,"height",void 0);Ft([p("src",{waitUntilFirstUpdate:!0})],tt.prototype,"handleSrcChange",null);tt.define("hmwc-image",tt);var lo=m`
  :host {
    display: flex;
    width: 100%;
  }

  .list {
    display: flex;
    width: 100%;
    flex-direction: column;

    & .list__list {
      width: 100%;

      padding: 0;
      margin: 0;
      display: inline-block;
      list-style: inside;

      .list__item {
        & hmwc-button {
          display: inline;
        }
        & + .list__item {
          padding-top: var(--hmwc-spacing-x-small);
        }
      }
    }
  }
`;var co=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},ie=class extends u{constructor(){super(...arguments),this._items=[],this.items=[]}getItems(){return this.items.length?this.items:this.controllers.slot.get()}connectedCallback(){super.connectedCallback(),this.items.length||(this._items=this.getItems())}render(){return c`
      <div part="base" class="list">
        <ul part="list" class="list__list">
          <slot> ${this._items.map(t=>c` <li part="item" class="list__item">${t}</li> `)} </slot>
        </ul>
      </div>
    `}};ie.styles=lo;ie.dependencies=[];ie.slots=[];co([b()],ie.prototype,"_items",void 0);co([a({type:String})],ie.prototype,"items",void 0);ie.define("hmwc-list",ie);var ho=m`
  :host {
    --navbar-width: var(--hmwc-navbar-width);
    --hmwc-panel-transparency: 70%;

    display: flex;
    height: 100%;
    z-index: var(--hmwc-z-index-drawer);
  }

  :host([dark]) {
    .navbar {
      box-shadow: 0 1px 2px rgb(99 99 99 / 24%);
      background-color: hsla(215, 28%, 17%, 15%);
    }
  }

  .navbar {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    width: var(--navbar-width);
    padding: var(--hmwc-spacing-x-large) calc(0.85 * var(--hmwc-spacing-small));
    font-family: var(--hmwc-font-sans);
    color: var(--hmwc-color-neutral-800);
    background-color: var(--hmwc-panel-background-color);
    // box-shadow: 0 1px 4px rgb(99 99 99 / 24%);
    /* border-right: var(--hmwc-panel-border-width) solid var(--hmwc-panel-border-color); */
    transition: width 350ms 50ms cubic-bezier(0.16, 1, 0.5, 1);

    & .navbar__group {
      --accordion-group-border-radius: none;

      &::part(base) {
        display: flex;
        flex-direction: column;
        gap: var(--hmwc-spacing-2x-small);
        overflow: hidden;
        border: none;
      }
      & hmwc-divider {
        position: relative;
        top: 0.1rem;
        --divider-color: var(--hmwc-color-neutral-50);
        margin: calc(3.5px + var(--hmwc-spacing-medium)) 0;
      }
    }

    & .navbar__section {
      font-size: var(--hmwc-font-size-small);
      font-weight: var(--hmwc-font-weight-semibold);
      letter-spacing: 0.35px;
      color: var(--hmwc-color-neutral-400);
      line-height: 1;
      margin: var(--hmwc-spacing-large) 0 var(--hmwc-spacing-3x-small) var(--hmwc-spacing-x-small);
      // display: flex;
      // width: 100%;
      opacity: 1;
      height: 1rem;
    }

    & .navbar__item:not(:first-of-type) {
      margin-bottom: --calendar-date-color(0.8 * (--hmwc-spacing-3x-small));
    }

    & .navbar__item {
      hmwc-button {
        --button-padding: 0 var(--hmwc-spacing-2x-small);
        --button-border: transparent;
        --icon-size: 0.64rem;
        --icon-color: var(--hmwc-color-neutral-500);
      }

      & .navbar__item-chevron {
        display: flex;
      }

      .navbar__item-label {
        display: flex;
        gap: var(--hmwc-spacing-x-small);
        align-items: center;
        font-size: calc(1.03 * var(--hmwc-font-size-small));
        font-weight: var(--hmwc-font-weight-semibold);
        letter-spacing: var(--hmwc-letter-spacing-normal);
        margin-left: var(--hmwc-spacing-2x-small);
        color: var(--hmwc-color-neutral-750);
      }

      &::part(summary) {
        color: var(--hmwc-color-neutral-700);
        font-weight: var(--hmwc-font-weight-bold);
        gap: calc(1.2 * var(--hmwc-spacing-small));
        --icon-size: 1rem;
        --icon-color: var(--hmwc-color-neutral-700);
        color: var(--hmwc-color-neutral-800);
        font-size: calc(1.16 * var(--hmwc-font-size-small));
        font-weight: var(--hmwc-font-weight-semibold);

        padding: calc(0.8 * var(--hmwc-spacing-small)) calc(0.75 * var(--hmwc-spacing-small));
        align-items: center;
        line-height: 1.9;
        width: 100%;
        border-radius: var(--hmwc-border-radius-large);
        box-sizing: border-box;
        --icon-size: 0.8rem;
        --icon-color: var(--hmwc-color-neutral-500);

        font-size: 0.94rem;
        font-weight: var(--hmwc-font-weight-semibold);
        letter-spacing: -0.35px;
        color: var(--hmwc-color-neutral-800);
        padding-right: var(--hmwc-spacing-x-small);
        &::part(label) {
          display: block;
          width: 100%;
          line-height: 1;
        }
      }

      &:hover {
        .navbar__item-label {
          color: var(--hmwc-color-neutral-800);
        }
      }

      &.active {
        --accordion-icon-color: var(--hmwc-color-primary-300);

        & .navbar__item-label {
          font-weight: var(--hmwc-font-weight-bold);
        }

        &::part(summary) {
          background-color: var(--hmwc-color-neutral-200);
          color: var(--hmwc-color-neutral-750);
          box-shadow: var(--hmwc-shadow-small);
          font-weight: var(--hmwc-font-weight-bold);

          &::part(label) {
            font-weight: var(--hmwc-font-weight-bold);
          }
        }
      }

      &::part(summary):hover {
        background: var(--hmwc-color-neutral-200);
        color: var(--hmwc-color-neutral-700);
        box-shadow: var(--hmwc-shadow-small);
        font-weight: var(--hmwc-font-weight-bold);
      }

      &::part(content) {
        padding-top: 0;
      }

      & .navbar__pages {
        padding: 0 0 0 var(--hmwc-spacing-small);
        margin: var(--hmwc-spacing-3x-small) 0 0 calc(4.2px + var(--hmwc-spacing-medium));
        list-style: none;
        color: var(--hmwc-color-neutral-600);
        box-shadow: -5px 0 0 -4px var(--hmwc-panel-border-color);
        display: flex;
        width: 100%;
        flex-direction: column;

        &:has(.navbar__item.active) {
          margin-top: var(--hmwc-spacing-2x-small);
        }

        & .navbar__page {
          padding: var(--hmwc-spacing-3x-small) var(--hmwc-spacing-small);
          cursor: pointer;
          border-radius: var(--hmwc-border-radius-large);
          width: 75%;
          font-size: calc(1.05 * var(--hmwc-font-size-small));
          &:hover {
            background-color: var(--hmwc-color-neutral-200);
            color: var(--hmwc-color-primary-600);
            box-shadow: var(--hmwc-shadow-small);
            font-weight: var(--hmwc-font-weight-bold);
          }

          &.active {
            background-color: var(--hmwc-color-neutral-100);
            color: var(--hmwc-color-neutral-800);
            box-shadow: var(--hmwc-shadow-small);
            font-weight: var(--hmwc-font-weight-bold);
            &:hover {
              color: var(--hmwc-color-primary-600);
            }
          }
        }
      }
    }

    & .navbar__toggle {
      position: relative;
      margin-top: auto;
      right: calc(-100% + 8px);
      transition: transform 350ms 50ms cubic-bezier(0.16, 1, 0.5, 1);
      z-index: var(--hmwc-z-index-tooltip);

      & hmwc-button {
        --button-border: calc(1 * var(--hmwc-panel-border-width)) solid var(--hmwc-panel-border-color);
        --button-background: var(--hmwc-color-primary-200);
        --button-color: var(--hmwc-color-primary-800);
        --button-shadow: var(--hmwc-shadow-large);
        --icon-size: 0.75rem;
        &::part(icon) {
          right: -1px;
          position: relative;
        }
      }
    }

    &.open {
      --navbar-width: var(--hmwc-navbar-width-open);

      & .navbar__section {
        margin: var(--hmwc-spacing-large) 0 var(--hmwc-spacing-2x-small) var(--hmwc-spacing-x-small);
        opacity: 1;
      }

      & .navbar__item {
        &::part(summary) {
          align-items: center;
        }
      }
      & .navbar__toggle {
        & hmwc-button {
          &::part(icon) {
            right: revert;
            left: -0.5px;
          }
        }
      }
    }
  }
`;var ge=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},$t=class extends u{constructor(){super(...arguments),this.groups=[]}open(){this.active=!0}close(){this.active=!1}toggle(){this.active=!this.active}openGroup(){this.active=!0}autoClose(){document.querySelector("#root")?.addEventListener("click",t=>{if(!["HMWC-NAVBAR","HMWC-HEADER"].includes(t.target.tagName)){if(document.body.classList.contains("hmwc-scroll-lock"))return;this.active=!1}})}enableKeyboardInteraction(){document.addEventListener("keypress",t=>{document.activeElement?.tagName!=="HMWC-INPUT"&&(t.preventDefault(),t.key==="s"&&(this.active=!this.active))})}handleOpenChange(){this.active||this.group?.hideAll()}handleRouteChange(){this.active=!1}handleRoutesChange(){if(!this.routes)return;let t=[];this.routes.forEach(e=>{let r=this.routes?.filter(o=>!(!o.path.startsWith(e.path)||o.path===e.path||o.path.split("/").length-1!==e.path.split("/").length));e.path.split("/").length<3&&(e.path!=="/"&&(e.routes=r),t.push(e))}),this.groups=t}connectedCallback(){super.connectedCallback(),this.autoClose(),this.enableKeyboardInteraction()}render(){let t=f({navbar:!0,open:!!this.active});return c`
      <div part="base" class=${t}>
        <hmwc-accordion-group class="navbar__group" part="group">
          ${this.groups?.map((e,r)=>c` ${r===1?c`
                      ${this.active?c` <span class="navbar__section">Applications</span> `:c`<hmwc-divider spacing="md"></hmwc-divider>`}
                    `:""}
                <hmwc-accordion
                  basic
                  class=${`navbar__item ${e.path===this.route?.path||e.path!=="/"&&this.route?.path.includes(e.path)?"active":""}`}
                  label=${this.active?e.title:""}
                  icon=${e.icon||""}
                  @click=${o=>!e.routes?.length&&(o.target.hide(),this.emit("hmwc-navigate",{detail:{route:e.path}}))}
                  @hmwc-expand=${()=>e.routes?.length&&(this.active=!0)}>
                  <span slot="trigger" style="display: flex;">
                    ${e.routes?.length?c`<hmwc-button
                          sm
                          basic
                          icon="chevron-right"
                          style="--button-padding: 0 var(--hmwc-spacing-2x-small); --button-border:transparent;"></hmwc-button>`:""}
                  </span>
                  ${e.routes?.length?c` <ul class="navbar__pages">
                        ${e.routes.map(o=>c`
                            <li
                              class=${`navbar__page ${o.path===this.route?.path?"active":""}`}
                              @click=${()=>(this.group?.hideAll(),this.emit("hmwc-navigate",{detail:{route:o.path}}))}>
                              ${o.title}
                            </li>
                          `)}
                      </ul>`:""}
                </hmwc-accordion>`)}
        </hmwc-accordion-group>
        <div class="navbar__toggle">
          <hmwc-button circle sm icon=${`chevron-${this.active?"left":"right"}`} @hmwc-click=${this.toggle}></hmwc-button>
        </div>
      </div>
    `}};$t.styles=ho;$t.dependencies=[mt,K,V];ge([b()],$t.prototype,"groups",void 0);ge([b()],$t.prototype,"route",void 0);ge([a({type:Array})],$t.prototype,"routes",void 0);ge([a({type:Boolean,reflect:!0})],$t.prototype,"active",void 0);ge([T(".navbar__group")],$t.prototype,"group",void 0);ge([p("open")],$t.prototype,"handleOpenChange",null);ge([p("route",{waitUntilFirstUpdate:!0})],$t.prototype,"handleRouteChange",null);ge([p("routes")],$t.prototype,"handleRoutesChange",null);$t.define("hmwc-navbar",$t);var po=m`
  :host {
    display: inline-flex;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    border: solid var(--hmwc-input-border-width) currentColor;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: default;
    font-family: var(--hmwc-font-sans);
    font-weight: var(--hmwc-font-weight-semibold);
    letter-spacing: var(--hmwc-letter-spacing-dense);

    & .tag__label {
      display: inline-flex;
      align-items: center;
      gap: var(--hmwc-spacing-2x-small);
      text-overflow: ellipsis;
      overflow: hidden;
    }

    & .tag__remove {
      display: none;
      margin-inline-start: var(--hmwc-spacing-2x-small);

      & hmwc-button {
        cursor: pointer;
        transition: var(--hmwc-transition-fast) color ease, var(--hmwc-transition-fast) transform ease;
      }

      & hmwc-button:hover {
        color: var(--hmwc-color-danger-500);
        transform: scale(1.1);
      }
    }

    &.removable .tag__remove {
      display: flex;
    }

    &.primary {
      background-color: var(--hmwc-color-primary-50);
      border-color: var(--hmwc-color-primary-200);
      color: var(--hmwc-color-primary-800);

      &:active > hmwc-button {
        color: var(--hmwc-color-primary-600);
      }
    }

    &.success {
      background-color: var(--hmwc-color-success-50);
      border-color: var(--hmwc-color-success-200);
      color: var(--hmwc-color-success-800);

      &:active > hmwc-button {
        color: var(--hmwc-color-success-600);
      }
    }

    &.neutral {
      background-color: var(--hmwc-color-neutral-50);
      border-color: var(--hmwc-color-neutral-200);
      color: var(--hmwc-color-neutral-800);

      &:active > hmwc-button {
        color: var(--hmwc-color-neutral-600);
      }
    }

    &.warning {
      background-color: var(--hmwc-color-warning-50);
      border-color: var(--hmwc-color-warning-200);
      color: var(--hmwc-color-warning-800);

      &:active > hmwc-button {
        color: var(--hmwc-color-warning-600);
      }
    }

    &.danger {
      background-color: var(--hmwc-color-danger-50);
      border-color: var(--hmwc-color-danger-200);
      color: var(--hmwc-color-danger-800);

      &:active > hmwc-button {
        color: var(--hmwc-color-danger-600);
      }
    }

    &.sm {
      font-size: var(--hmwc-button-font-size-small);
      height: calc(var(--hmwc-input-height-small) * 0.75);
      border-radius: calc(1.15 * var(--hmwc-input-border-radius-small));
      padding: 0 var(--hmwc-spacing-x-small);
    }

    &.md {
      font-size: calc(0.9 * var(--hmwc-button-font-size-medium));
      height: calc(var(--hmwc-input-height-medium) * 0.75);
      line-height: calc(var(--hmwc-input-height-medium) * 0.75 - var(--hmwc-input-border-width) * 2);
      border-radius: calc(1.15 * var(--hmwc-input-border-radius-medium));
      padding: 0 var(--hmwc-spacing-small);
    }

    &.lg {
      font-size: var(--hmwc-button-font-size-large);
      height: calc(var(--hmwc-input-height-large) * 0.75);
      line-height: calc(var(--hmwc-input-height-large) * 0.75 - var(--hmwc-input-border-width) * 2);
      border-radius: calc(1.15 * var(--hmwc-input-border-radius-large));
      padding: 0 var(--hmwc-spacing-medium);
    }

    &.pill {
      border-radius: var(--hmwc-border-radius-pill);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .tag .tag__remove hmwc-button {
      transition: none;
    }
  }
`;var Yt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},et=class extends u{handleClick(){this.emit("click",{})}handleRemove(){this.emit("click",{detail:{tag:this.label}})}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0),!this.primary&&!this.success&&!this.neutral&&!this.warning&&!this.danger&&(this.primary=!0)}render(){let t=f({tag:!0,icon:!!this.icon,sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger,pill:!!this.pill,removable:!!this.removable});return c`
      <div part="base" class=${t} role="status" @click=${this.handleClick}>
        <slot class="tag__label" part="label"> ${this.icon&&c` <hmwc-icon src=${this.icon}></hmwc-icon> `} ${this.label} </slot>
        <div part="remove" class="tag__remove">
          ${this.removable&&c` <hmwc-button sm basic icon="x" @hmwc-click=${this.handleRemove}></hmwc-button> `}
        </div>
      </div>
    `}};et.styles=po;et.dependencies=[_];Yt([a({type:String})],et.prototype,"label",void 0);Yt([a({type:String})],et.prototype,"icon",void 0);Yt([a({type:Boolean,reflect:!0})],et.prototype,"sm",void 0);Yt([a({type:Boolean,reflect:!0})],et.prototype,"md",void 0);Yt([a({type:Boolean,reflect:!0})],et.prototype,"lg",void 0);Yt([a({type:Boolean,reflect:!0})],et.prototype,"primary",void 0);Yt([a({type:Boolean,reflect:!0})],et.prototype,"success",void 0);Yt([a({type:Boolean,reflect:!0})],et.prototype,"neutral",void 0);Yt([a({type:Boolean,reflect:!0})],et.prototype,"warning",void 0);Yt([a({type:Boolean,reflect:!0})],et.prototype,"danger",void 0);Yt([a({type:Boolean,reflect:!0})],et.prototype,"pill",void 0);Yt([a({type:Boolean,reflect:!0})],et.prototype,"removable",void 0);et.define("hmwc-tag",et);var mo=m`
  :host {
    --page-max-width: 1800px;
    display: flex;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: var(--hmwc-spacing-2x-large) 0 var(--hmwc-spacing-large) 0;
    // background-color: var(--hmwc-color-neutral-0);
  }

  .page {
    display: flex;
    flex-direction: column;
    gap: calc(var(--hmwc-spacing-3x-small) + var(--hmwc-spacing-x-small));
    position: relative;
    transition: all 0.25s ease-in-out;
    // min-width: 856px;
    width: 100%;
    height: 100%;
    padding: 0 var(--hmwc-spacing-2x-large);

    max-width: var(--page-max-width);
    margin-inline: auto;

    *::-webkit-scrollbar {
      background-color: var(--hmwc-color-neutral-0);
      width: 16px;
    }

    *::-webkit-scrollbar-track {
      margin-top: calc(0.8 * var(--hmwc-spacing-x-small));
      background-color: var(--hmwc-color-neutral-0);
    }

    *::-webkit-scrollbar-thumb {
      background-color: var(--hmwc-panel-scrollbar-color);
      border-radius: 16px;
      border: 3px solid var(--hmwc-color-neutral-0);
    }

    *::-webkit-scrollbar-button {
      display: none;
    }
    & .page__breadcrumbs {
    }

    & .page__title {
      display: none;
      align-items: center;
      gap: var(--hmwc-spacing-small);
      font-size: calc(var(--hmwc-font-size-x-large) * 1.2);
      font-weight: var(--hmwc-font-weight-bold);
      font-family: var(--hmwc-font-sans);
      color: var(--hmwc-color-neutral-750);
      letter-spacing: var(--hmwc-letter-spacing-dense);
      white-space: nowrap;
      line-height: 1;
      padding: var(--hmwc-spacing-2x-small) 0 var(--hmwc-spacing-small);

      & .page__controls {
        display: flex;
        align-items: center;
        margin-left: auto;
      }
    }

    & .page__content {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      margin-top: var(--hmwc-spacing-x-large);
      //   margin-bottom: var(--hmwc-spacing-4x-large);
      //   padding: 0 var(--hmwc-spacing-2x-large);
    }

    &.title {
      & .page__title {
        display: flex;
      }
    }

    @media (min-width: 768px) {
      --page-max-width: 900px;
    }
    @media (min-width: 1024px) {
      --page-max-width: 1000px;
    }
    @media (min-width: 1280px) {
      --page-max-width: 1200px;
    }
    @media (min-width: 1440px) {
      --page-max-width: 1350px;
    }
    @media (min-width: 1800px) {
      --page-max-width: 1600px;
    }
  }
`;var Se=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Ct=class extends u{constructor(){super(...arguments),this.overrides=[],this.breadcrumbs=!0}updateOverrides(){let t=Array.from(this.children);this.overrides=t.filter(e=>e instanceof N).map(e=>({label:e.label,path:e.path,icon:e.icon??void 0,prefix:e.prefix??void 0,suffix:e.suffix??void 0,home:e.home,options:e.options??e.items,actions:e.actions}))}connectedCallback(){super.connectedCallback(),this.updateOverrides()}render(){let t=f({page:!0,title:!!this.title||this.controllers.slot.test("title")});return c`
      <div part="base" class=${t}>
        ${this.route?c`<hmwc-breadcrumbs
              part="breadcrumbs"
              class="page__breadcrumbs"
              .route=${this.route}
              .routes=${this.routes}
              .crumbs=${this.overrides.length>0?this.overrides:void 0}
              @hmwc-click=${e=>this.emit("click",{detail:{value:e.detail.value}})}>
            </hmwc-breadcrumbs>`:""}

        <div part="title" class="page__title">
          <slot name="title">${this.title}</slot>

          <slot name="group">
            <div>${this.group&&c`<hmwc-tag part="group" sm label=${this.group} icon=${y(this.icon)}></hmwc-tag>`}</div>
          </slot>
          <div part="controls" class="page__controls">
            <slot name="controls"></slot>
          </div>
        </div>

        <div part="content" class="page__content">
          <slot></slot>
        </div>
      </div>
    `}};Ct.styles=mo;Ct.dependencies=[_,w,et,N];Ct.slots=["breadcrumb"];Se([b()],Ct.prototype,"overrides",void 0);Se([a({type:String})],Ct.prototype,"title",void 0);Se([a({type:String})],Ct.prototype,"group",void 0);Se([a({type:String})],Ct.prototype,"icon",void 0);Se([a({type:Boolean,reflect:!0})],Ct.prototype,"breadcrumbs",void 0);Se([a({type:Object})],Ct.prototype,"route",void 0);Se([a({type:Array})],Ct.prototype,"routes",void 0);Ct.define("hmwc-page",Ct);var uo=m`
  :host {
    --progress-size: 64px;
    --progress-track: 6px;
    --progress-color: var(--hmwc-color-primary-600);

    display: block;
    height: fit-content;
    width: 100%;
  }

  :host([ring]) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: fit-content;
  }

  .progress {
    &.bar {
      position: relative;
      background-color: var(--hmwc-color-neutral-200);
      height: var(--progress-track);
      border-radius: var(--hmwc-border-radius-pill);
      box-shadow: inset var(--hmwc-shadow-small);
      overflow: hidden;

      &.small {
        --progress-track: 0.55rem;
      }

      &.medium {
        --progress-track: 1rem;
      }

      &.large {
        --progress-track: 1.3rem;
      }

      &.indeterminate {
        .progress__indicator {
          position: absolute;
          animation: indeterminate-bar 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
        }
      }

      .progress__indicator {
        align-items: center;
        display: flex;
        justify-content: center;
        position: relative;
        height: 100%;
        font-family: var(--hmwc-font-sans);
        font-size: 12px;
        font-weight: var(--hmwc-font-weight-normal);
        background-color: var(--progress-color);
        color: var(--hmwc-color-neutral-0);
        text-align: center;
        line-height: 1rem;
        white-space: nowrap;
        overflow: hidden;
        transition: width var(--hmwc-transition-slow) ease, background-color var(--hmwc-transition-slow) ease;
        user-select: none;
        -webkit-user-select: none;
      }

      &:not(.indeterminate) .progress__indicator::after {
        content: '';
        position: absolute;
        inset: 0;
        background-image: linear-gradient(120deg, transparent 30%, rgb(255 255 255 / 22%) 50%, transparent 70%);
        background-size: 300% 100%;
        background-repeat: no-repeat;
        animation: progress-glimmer calc(var(--hmwc-transition-x-slow) * 3) linear infinite;
        pointer-events: none;
      }
    }

    &.ring {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;

      &.small {
        --progress-size: 32px;
        --progress-track: 4px;
      }

      &.medium {
        --progress-size: 48px;
        --progress-track: 6px;
      }

      &.large {
        --progress-size: 64px;
        --progress-track: 8px;
      }

      &.xl {
        --progress-size: 156px;
        --progress-track: 16px;
      }

      .progress__ring {
        width: var(--progress-size);
        height: var(--progress-size);
        rotate: -90deg;
        transform-origin: 50% 50%;
      }

      .progress__track,
      .progress__indicator {
        --radius: calc(var(--progress-size) / 2 - max(var(--progress-track), var(--progress-track)) * 0.5);
        --circumference: calc(var(--radius) * 2 * 3.141592654);
        fill: none;
        r: var(--radius);
        cx: calc(var(--progress-size) / 2);
        cy: calc(var(--progress-size) / 2);
      }

      .progress__track {
        stroke: var(--hmwc-color-neutral-200);
        stroke-width: var(--progress-track);
      }

      .progress__indicator {
        stroke: var(--progress-color);
        stroke-width: var(--progress-track);
        stroke-linecap: round;
        transition-property: stroke-dashoffset, stroke;
        transition-duration: var(--hmwc-transition-slow);
        transition-timing-function: ease;
        stroke-dasharray: var(--circumference) var(--circumference);
        stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
      }

      /*
       * A bright highlight that sweeps along the filled arc, giving
       * the ring the same travelling glimmer the bar has. The circle
       * is normalised with pathLength="100" so the dash maths is in
       * plain 0–100 units that interpolate reliably (deriving the
       * sweep from --circumference proved fragile). A short white dash
       * travels from the arc start to the fill end (driven by
       * --percentage) and fades at both ends so it reads as a comet
       * riding the coloured portion. The inherited indicator
       * transition is cleared so it cannot fight the keyframes.
       */
      .progress__glimmer {
        stroke: var(--hmwc-color-neutral-0);
        stroke-width: calc(var(--progress-track) * 0.8);
        stroke-linecap: round;
        stroke-dasharray: 20 100;
        stroke-dashoffset: 20;
        transition: none;
        animation: progress-ring-glimmer calc(var(--hmwc-transition-x-slow) * 2) ease-in-out infinite;
        pointer-events: none;
      }

      .progress__label {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        user-select: none;
        -webkit-user-select: none;
      }
    }

    &.primary {
      --progress-color: var(--hmwc-color-primary-600);
    }

    &.success {
      --progress-color: var(--hmwc-color-success-600);
    }

    &.neutral {
      --progress-color: var(--hmwc-color-neutral-600);
    }

    &.warning {
      --progress-color: var(--hmwc-color-warning-600);
    }

    &.danger {
      --progress-color: var(--hmwc-color-danger-600);
    }
  }

  @media (forced-colors: active) {
    .progress.bar {
      outline: solid 1px SelectedItem;
      background-color: var(--hmwc-color-neutral-0);

      .progress__indicator {
        outline: solid 1px SelectedText;
        background-color: Highlight;
      }
    }
  }

  @keyframes indeterminate-bar {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes progress-glimmer {
    0% {
      background-position: 130% 0;
    }
    55%,
    100% {
      background-position: -130% 0;
    }
  }

  @keyframes progress-ring-glimmer {
    0% {
      stroke-dashoffset: 20;
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      stroke-dashoffset: calc((var(--percentage) * 100 + 20) * -1);
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    /*
     * Stop the sliding indeterminate stripe for motion-sensitive
     * users and fall back to a static, full-width indicator so the
     * pending state is still perceivable. Color/opacity transitions
     * are preserved per the animation guidelines.
     */
    .progress.bar.indeterminate .progress__indicator {
      position: static;
      animation: none;
      left: 0;
      width: 100%;
    }

    .progress.bar .progress__indicator {
      transition: background-color var(--hmwc-transition-medium);
    }

    /* Remove the decorative glimmer sweep entirely. */
    .progress.bar .progress__indicator::after {
      animation: none;
      background-image: none;
    }

    .progress.ring .progress__indicator {
      transition: stroke var(--hmwc-transition-medium);
    }

    /* Hide the ring glimmer rather than pulsing it. */
    .progress.ring .progress__glimmer {
      animation: none;
      opacity: 0;
    }
  }
`;var nt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},I=class extends u{constructor(){super(...arguments),this.value=0,this.hasAnimatedIn=!1}get clampedValue(){return Math.max(0,Math.min(100,this.value))}get displayValue(){return this.hasAnimatedIn?this.clampedValue:0}handleValueChange(){this.emit("hmwc-change",{detail:{value:this.clampedValue,complete:this.clampedValue>=100}})}connectedCallback(){super.connectedCallback(),!this.bar&&!this.ring&&(this.bar=!0),(this.small||this.medium||this.large)&&console.warn("[hmwc-progress] The `small`, `medium`, and `large` size attributes are deprecated. Use `sm`, `md`, and `lg` instead."),!this.sm&&!this.md&&!this.lg&&!this.xl&&!this.small&&!this.medium&&!this.large&&(this.sm=!0)}firstUpdated(){requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.hasAnimatedIn=!0})})}render(){let t=this.clampedValue,e=this.indeterminate?50:this.displayValue,r=f({progress:!0,bar:!!this.bar,ring:!!this.ring,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger,small:!!this.sm||!!this.small,medium:!!this.md||!!this.medium,large:!!this.lg||!!this.large,xl:!!this.xl,indeterminate:!!this.indeterminate,status:!!this.status});return c`
      <div
        part="base"
        class=${r}
        role="progressbar"
        title=${y(this.title)}
        aria-label=${this.label?this.label:"progress"}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${y(this.indeterminate?void 0:t)}
        style="--percentage: ${e/100}">
        ${this.bar?c`
              <div part="indicator" class="progress__indicator" style="width: ${e}%">
                ${this.indeterminate?"":c` <slot part="label" class="progress__label"> ${this.status?`${t}%`:""} </slot> `}
              </div>
            `:this.ring?c`
              <svg class="progress__ring">
                <circle class="progress__track"></circle>
                <circle class="progress__indicator"></circle>
                ${!this.indeterminate&&t>0?c`<circle class="progress__indicator progress__glimmer" pathLength="100"></circle>`:""}
              </svg>

              <slot id="label" part="label" class="progress__label"> ${this.status?`${t}%`:""} </slot>
            `:""}
      </div>
    `}};I.styles=uo;nt([a({type:Boolean,reflect:!0})],I.prototype,"bar",void 0);nt([a({type:Boolean,reflect:!0})],I.prototype,"ring",void 0);nt([a({type:Boolean,reflect:!0})],I.prototype,"primary",void 0);nt([a({type:Boolean,reflect:!0})],I.prototype,"success",void 0);nt([a({type:Boolean,reflect:!0})],I.prototype,"neutral",void 0);nt([a({type:Boolean,reflect:!0})],I.prototype,"warning",void 0);nt([a({type:Boolean,reflect:!0})],I.prototype,"danger",void 0);nt([a({type:Boolean,reflect:!0})],I.prototype,"sm",void 0);nt([a({type:Boolean,reflect:!0})],I.prototype,"md",void 0);nt([a({type:Boolean,reflect:!0})],I.prototype,"lg",void 0);nt([a({type:Boolean,reflect:!0})],I.prototype,"xl",void 0);nt([a({type:Boolean,reflect:!0})],I.prototype,"small",void 0);nt([a({type:Boolean,reflect:!0})],I.prototype,"medium",void 0);nt([a({type:Boolean,reflect:!0})],I.prototype,"large",void 0);nt([a({type:Boolean})],I.prototype,"status",void 0);nt([a({type:Boolean,reflect:!0})],I.prototype,"indeterminate",void 0);nt([a({type:String})],I.prototype,"label",void 0);nt([a({type:Number,reflect:!0})],I.prototype,"value",void 0);nt([b()],I.prototype,"hasAnimatedIn",void 0);nt([p("value",{waitUntilFirstUpdate:!0})],I.prototype,"handleValueChange",null);I.define("hmwc-progress",I);var fo=m`
  :host {
    display: block;
    flex: 0 0 auto;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--hmwc-input-font-family);
    font-size: var(--hmwc-input-font-size-medium);
    font-weight: var(--hmwc-input-font-weight);
    color: var(--hmwc-input-label-color);
    vertical-align: middle;
    cursor: pointer;

    &.img {
      display: flex;
      flex-direction: column;
      width: 100%;
      border-radius: var(--hmwc-border-radius-x-large);
      overflow: hidden;
      box-shadow: var(--hmwc-shadow-medium);
      transition: var(--hmwc-transition-fast);

      .radio__control {
        background-color: var(--hmwc-color-neutral-50);
        font-weight: var(--hmwc-font-weight-semibold);
        color: var(--hmwc-color-neutral-800);
      }
    }

    & .radio__control {
      display: flex;
      align-items: center;
      padding: var(--hmwc-spacing-small);
      gap: var(--hmwc-spacing-x-small);

      & .radio__radio {
        flex: 0 0 auto;
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--toggle-size);
        height: var(--toggle-size);
        border: solid var(--hmwc-input-border-width) var(--hmwc-input-border-color);
        border-radius: 50%;
        background-color: var(--hmwc-input-background-color);
        color: transparent;
        transition: var(--hmwc-transition-fast) border-color, var(--hmwc-transition-fast) background-color, var(--hmwc-transition-fast) color,
          var(--hmwc-transition-fast) box-shadow;

        & .radio__indicator {
          width: 100%;
          height: 100%;
          display: flex;
          border-radius: 50%;
          background-color: var(--hmwc-color-neutral-50);
          box-shadow: var(--hmwc-shadow-small);
        }
      }
    }

    .radio__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--toggle-size);
      height: var(--toggle-size);
      aspect-ratio: 1;
      padding: 4px;
    }

    .radio__input {
      position: absolute;
      opacity: 0;
      padding: 0;
      margin: 0;
      pointer-events: none;
    }

    .radio__label {
      display: inline-block;
      color: var(--hmwc-input-label-color);
      line-height: var(--toggle-size);
      margin-inline-start: 0.3em;
      user-select: none;
      -webkit-user-select: none;
    }

    & .radio__image {
      display: flex;
      flex: 1 1 100%;
      padding: var(--hmwc-spacing-x-small) var(--hmwc-spacing-x-small);
      align-items: center;
      justify-content: center;
      background: var(--hmwc-color-neutral-200);
      img {
        max-width: 160px;
        border-radius: var(--hmwc-spacing-medium);
      }
    }

    &.checked {
      &.img {
        border: calc(1.5 * var(--hmwc-panel-border-width)) solid var(--hmwc-color-primary-400);
      }

      .radio__radio {
        color: var(--hmwc-color-neutral-0);
        border-color: var(--hmwc-color-primary-600);
        background-color: var(--hmwc-color-primary-600);
        &:hover {
          border-color: var(--hmwc-color-primary-500);
          background-color: var(--hmwc-color-primary-500);
        }
      }
    }

    &:not(.checked) {
      svg circle {
        opacity: 0;
      }

      &:not(.disabled) .radio__radio:hover {
        border-color: var(--hmwc-input-border-color-hover);
        background-color: var(--hmwc-input-background-color-hover);
      }
    }

    &.sm {
      --toggle-size: var(--hmwc-toggle-size-small);
      font-size: var(--hmwc-input-font-size-small);

      .radio__icon {
        font-size: 5.5px;
      }

      &.img {
        border-radius: var(--hmwc-border-radius-large);

        .radio__image {
          padding: var(--hmwc-spacing-2x-small);
          img {
            max-width: 120px;
          }
        }
      }
    }

    &.md {
      --toggle-size: var(--hmwc-toggle-size-medium);
      font-size: var(--hmwc-input-font-size-medium);
      margin: var(--hmwc-spacing-3x-small) 0;

      .radio__icon {
        font-size: 8px;
      }
    }

    &.lg {
      --toggle-size: var(--hmwc-toggle-size-large);
      font-size: var(--hmwc-input-font-size-large);
      margin: var(--hmwc-spacing-2x-small) 0;

      .radio__icon {
        font-size: 10px;
      }
    }

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:focus-visible .radio__radio {
      outline: var(--hmwc-focus-ring);
      outline-offset: var(--hmwc-focus-ring-offset);
    }
  }
`;var Er=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Wt=class extends F{handleCheckedChange(){this.emit("hmwc-select",{detail:{value:this.checked}})}handleClick(){this.disabled||(this.checked=!0)}handleBlur(){this.emit("hmwc-blur")}handleFocus(){this.emit("hmwc-focus")}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0)}render(){let t=f({radio:!0,checked:!!this.checked,sm:!!this.sm,md:!!this.md,lg:!!this.lg,disabled:!!this.disabled,img:!!this.img});return c`
      <span
        part="base"
        class=${t}
        role="radio"
        tabindex=${this.checked?"0":"-1"}
        aria-checked="${this.checked?"true":"false"}"
        aria-disabled="${y(this.disabled)}"
        aria-label="${y(this.label||this.value||void 0)}"
        @click=${this.handleClick}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}>
        ${this.img?c`<div class="radio__image"><img src="${this.img}" class="radio__image" /></div>`:""}
        <div class="radio__control">
          <span part="control" class="radio__radio">
            <slot name="icon" part="icon" class="radio__icon"> ${this.checked?c` <span class="radio__indicator"></span> `:""} </slot>
          </span>

          <slot part="label" class="radio__label"> ${this.label?this.label:this.value} </slot>
        </div>
      </span>
    `}};Wt.styles=fo;Wt.dependencies=[_];Er([a({type:Boolean,reflect:!0})],Wt.prototype,"checked",void 0);Er([a({type:String,reflect:!0})],Wt.prototype,"img",void 0);Er([p("checked")],Wt.prototype,"handleCheckedChange",null);Wt.define("hmwc-radio",Wt);var go=m`
  :host {
    --font-size: inherit;
    display: block;
  }

  .radiogroup {
    display: block;
    &.row {
      .radiogroup__control {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
    }

    &.small {
      --font-size: var(--hmwc-font-size-small);
      .radiogroup__control {
        gap: var(--hmwc-spacing-small);
      }
    }

    &.medium {
      --font-size: var(--hmwc-font-size-medium);
      .radiogroup__control {
        gap: var(--hmwc-spacing-medium);
      }
    }

    &.large {
      --font-size: var(--hmwc-font-size-large);
      .radiogroup__control {
        gap: var(--hmwc-spacing-medium);
      }
    }

    .radiogroup__control {
      position: relative;
      border: none;
      padding: 0;
      margin: 0;
    }

    .radiogroup__label {
      padding: 0;
      line-height: 2;
      font-family: var(--hmwc-font-sans);
      font-size: var(--font-size);
    }

    .radiogroup__help {
      color: var(--hmwc-input-help-text-color);
      font-size: var(--hmwc-font-size-small);
      font-family: var(--hmwc-font-sans);
      line-height: 2;
    }
  }
`;var qe=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Pt=class extends F{handleValueChange(){this.emit("hmwc-change",{detail:{value:this.value}}),this.getRadios()?.forEach(t=>{t.checked=t.value===this.value})}getRadios(){return this.items?this.shadowRoot?.querySelectorAll("hmwc-radio"):this.controllers.slot.get()}handleClick(t){let e=t.target.closest("hmwc-radio");e.disabled||e.value&&(this.value=e.value,this.emit("hmwc-input"))}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0);let t=this.getRadios();t?.length&&(this.inline&&t.forEach(e=>e.style.setProperty("width","100%")),this.sm?t.forEach(e=>e.sm=!0):this.md?t.forEach(e=>e.md=!0):this.lg&&t.forEach(e=>e.lg=!0))}render(){let t=this.label||this.controllers.slot.test("label"),e=this.help||this.controllers.slot.test("help"),r=f({radiogroup:!0,small:!!this.sm,medium:!!this.md,large:!!this.lg,required:!!this.required,row:!!this.inline});return c`
      <div part="base" class=${r}>
        ${this.label?c` <label part="label" class="radiogroup__label" aria-hidden="${!t}">
              <slot name="label">${this.label}</slot>
            </label>`:""}
        <fieldset
          part="control"
          class="radiogroup__control"
          role="radiogroup"
          aria-labelledby="label"
          aria-describedby="help"
          aria-errormessage="error-message">
          <slot @click=${this.handleClick}>
            ${this.items?.map(o=>c`
                <hmwc-radio
                  value=${typeof o=="string"?o:o.value}
                  label=${typeof o=="string"?o:o.label}
                  ?disabled=${typeof o!="string"&&o.disabled}
                  ?checked=${(typeof o=="string"?o:o.value)===ee(this.value)}
                  ?small=${this.sm}
                  ?medium=${this.md}
                  ?large=${this.lg}></hmwc-radio>
              `)}
          </slot>
          ${this.help?c` <div part="help" class="radiogroup__help" aria-hidden="${!e}">
                <slot name="help">${this.help}</slot>
              </div>`:""}
        </fieldset>
      </div>
    `}};Pt.styles=go;Pt.dependencies=[Wt];Pt.slots=["label","help"];qe([a({type:String})],Pt.prototype,"label",void 0);qe([a({type:Array})],Pt.prototype,"items",void 0);qe([a({type:String})],Pt.prototype,"help",void 0);qe([a({type:Boolean,reflect:!0})],Pt.prototype,"inline",void 0);qe([p("value")],Pt.prototype,"handleValueChange",null);Pt.define("hmwc-radio-group",Pt);var vo=m`
  :host {
    display: block;
  }

  .row {
    display: contents;

    & .row__label {
      display: none;
      color: var(--hmwc-color-text-secondary);
      font-size: var(--hmwc-font-size-small);
      font-family: var(--hmwc-font-sans);
      line-height: 2;
      margin-bottom: var(--hmwc-spacing-2x-small);
    }

    .row__content {
      display: flex;
      background-size: cover;
      align-items: var(--container-alignment);
      justify-content: var(--container-justification);
      gap: var(--container-spacing);
      padding: var(--row-padding, var(--container-padding));
      border-radius: var(--container-border-radius);
      aspect-ratio: var(--container-aspect-ratio);
      height: var(--container-height);
      max-height: var(--container-max-height);
      width: var(--container-width);
      max-width: var(--row-max-width, var(--container-max-width));
      overflow-y: var(--container-scrollbar);
      box-shadow: var(--container-shadow);
      background: var(--row-background, var(--container-background));
      background-size: cover;
      overflow: visible;
    }

    &.label {
      display: block;

      & .row__label {
        display: flex;
      }
    }

    &.wrap {
      .row__content {
        flex-wrap: wrap;
      }
    }

    &.scrollable {
      overflow-y: auto;
    }

    &.min {
      --container-height: min-content;
    }

    &.max {
      --container-height: max-content;
    }

    &.outline {
      .row__content {
        border: 1px solid var(--hmwc-panel-border-color);
      }
    }
  }
`;var Ge=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Kt=class extends P{connectedCallback(){if(super.connectedCallback(),this.wrap){let t=this.controllers.slot.get(),e=t.length,r=e,o=100/e;t.forEach(i=>{let s=`calc(${o}% - calc(var(--container-spacing) / ${r}))`;i.style.setProperty("max-width",s)})}}render(){let t=f({row:!0,wrap:!!this.wrap,min:!!this.min,max:!!this.max,outline:!!this.outline,fit:!!this.fit,label:!!this.label||this.controllers.slot.test("label"),scrollable:!!this.scrollable});return c`
      <div part="base" class=${t}>
        <slot name="label" part="label" class="row__label">${this.label}</slot>
        <slot part="content" class="row__content"></slot>
      </div>
    `}};Kt.styles=vo;Ge([a({type:Boolean,reflect:!0})],Kt.prototype,"wrap",void 0);Ge([a({type:Boolean,reflect:!0})],Kt.prototype,"fit",void 0);Ge([a({type:Boolean,reflect:!0})],Kt.prototype,"min",void 0);Ge([a({type:Boolean,reflect:!0})],Kt.prototype,"max",void 0);Ge([a({type:Boolean,reflect:!0})],Kt.prototype,"outline",void 0);Kt.define("hmwc-row",Kt);var bo=m`
  :host {
    display: block;
  }

  :host([fluid]) {
    width: 100%;
  }

  .stepper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    & .stepper__step {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      gap: var(--hmwc-spacing-x-small);
      width: 100%;

      &:last-of-type {
        width: fit-content !important;
        max-width: 1.75rem;

        & .stepper__info {
          align-items: end;
        }
      }

      & .stepper__status {
        display: flex;
        align-items: center;
        width: 100%;

        & .stepper__progress {
          width: 100%;
          min-width: 3rem;
          border-radius: var(--hmwc-border-radius-pill);
          height: 1.5px;
          margin: 0 10px;
          background: var(--hmwc-color-neutral-200);
          white-space: nowrap;

          & .stepper__progress-indicator {
            display: flex;
            height: 100%;
          }
        }

        & .stepper__circle {
          width: 1.75rem;
          height: 1.75rem;
          aspect-ratio: 1;
          border-radius: 50%;
          display: flex;
          line-height: 1;
          text-align: center;
          justify-content: center;
          align-items: center;
          font-size: var(--hmwc-font-size-x-small);
          color: var(--hmwc-color-neutral-1000);
          box-shadow: var(--hmwc-shadow-large);

          &.check {
            & hmwc-icon {
              --icon-size: 1rem;
              --icon-color: var(--hmwc-color-neutral-0);
            }
          }

          & hmwc-icon {
            --icon-size: 0.75rem;
          }
        }
      }

      & .stepper__info {
        display: flex;
        flex-direction: column;
        gap: calc(0.75 * var(--hmwc-spacing-2x-small));
        width: 100%;

        & .stepper__index {
          font-size: calc(0.85 * var(--hmwc-font-size-2x-small));
          letter-spacing: 0.75px;
          color: var(--hmwc-color-neutral-600);
          font-weight: var(--hmwc-font-weight-semibold);
          line-height: 1.8;
          white-space: nowrap;
        }

        & .stepper__description {
          font-size: calc(1.15 * var(--hmwc-font-size-x-small));

          font-weight: var(--hmwc-font-weight-semibold);
          letter-spacing: -0.5px;
          line-height: 1;
          color: var(--hmwc-color-neutral-800);
          white-space: nowrap;
        }

        & .stepper__status {
          font-size: calc(0.8 * var(--hmwc-font-size-2x-small));
          color: var(--hmwc-color-neutral-600);
          font-weight: var(--hmwc-font-weight-semibold);
          letter-spacing: -0px;
          padding-top: 0.125rem;
          white-space: nowrap;
        }
      }

      &.active {
        & .stepper__progress {
          margin: 0 10px 0 16px;
          & .stepper__progress-indicator {
            background: var(--hmwc-color-primary-100);
          }
        }
        & .stepper__circle {
          background: var(--hmwc-color-primary-200);
          position: relative;

          &::after {
            content: '';
            position: absolute;

            background: transparent;
            top: -6px;
            left: -6px;
            right: -6px;
            bottom: -6px;

            border-radius: 50%;
            border: 1px solid var(--hmwc-color-primary-400);
            animation: pulse 1.5s infinite;
          }
        }

        & .stepper__info {
          & .stepper__status {
            color: var(--hmwc-color-primary-200);
          }
        }
      }

      &.complete {
        & .stepper__progress {
          background: var(--hmwc-color-success-200);
        }
        & .stepper__circle {
          background: var(--hmwc-color-success-200);
        }
        & .stepper__info {
          & .stepper__status {
            color: var(--hmwc-color-success-300);
          }
        }
      }

      &.pending {
        & .stepper__circle {
          background: var(--hmwc-color-primary-500);
        }
        & .stepper__info {
          & .stepper__status {
            color: var(--hmwc-color-neutral-400);
          }
        }
      }
    }

    &.fluid {
      gap: 2.5rem;
      width: 100%;

      & .stepper__step {
        width: 100%;

        & .stepper__status {
          & .stepper__progress {
            min-width: 100%;
          }
        }
      }
    }

    &.placement-top {
      & .stepper__step {
        flex-direction: column-reverse;
      }

      &:not(.status) {
        & .stepper__step {
          & .stepper__info {
            margin-bottom: var(--hmwc-spacing-2x-small);
          }
        }
      }
    }

    &.placement-bottom {
      & .stepper__step {
        flex-direction: column;
      }
    }

    &.placement-left {
      & .stepper__step {
        flex-direction: row;
      }
    }

    &.placement-right {
      & .stepper__step {
        flex-direction: row-reverse;
      }
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.65;
    }
    50% {
      transform: scale(1.02);
      opacity: 0.45;
    }
    100% {
      transform: scale(1);
      opacity: 0.85;
    }
  }
`;var ze=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Bt=class extends u{constructor(){super(...arguments),this.step=1,this.value=[],this.placement="bottom"}updateSteps(){this.current=this.value.map((t,e)=>{let r="pending",o="Pending",i=t.progress||0,s=t.icon;return e===this.step-1&&(r="active",o="In Progress"),e<this.step-1&&(r="complete",o="Completed",i||(i=50),s="check2-circle"),{...t,progress:i,state:r,status:o,icon:s}}),this.emit("hmwc-change",{detail:{value:this.current}})}render(){let t=f({stepper:!0,fluid:!!this.fluid,status:!!this.status,"placement-top":this.placement==="top","placement-bottom":this.placement==="bottom","placement-left":this.placement==="left","placement-right":this.placement==="right"});return c`
      <div part="base" class=${t}>
        ${this.current.map((e,r)=>c`
            <div part="step" class="stepper__step ${e.state}">
              <div class="stepper__status">
                <span class="stepper__circle ${e.icon==="check2-circle"?"check":""}">
                  ${e.icon?c`<hmwc-icon src=${e.icon} />`:r+1}
                </span>
                ${r!==this.current.length-1?c`
                      <div class="stepper__progress">
                        <span class="stepper__progress-indicator" style="width: ${e.progress}%"></span>
                      </div>
                    `:""}
              </div>

              <div class="stepper__info">
                <span class="stepper__index">STEP ${r+1}</span>
                <span class="stepper__description">${e.label}</span>
                ${this.status?c`<span class="stepper__status">${e.status}</span>`:""}
              </div>
            </div>
          `)}
      </div>
    `}};Bt.styles=bo;Bt.dependencies=[_];ze([b()],Bt.prototype,"current",void 0);ze([a({type:Number,reflect:!0})],Bt.prototype,"step",void 0);ze([a({type:Array})],Bt.prototype,"value",void 0);ze([a({type:Boolean,reflect:!0})],Bt.prototype,"fluid",void 0);ze([a({type:Boolean,reflect:!0})],Bt.prototype,"status",void 0);ze([a({type:String})],Bt.prototype,"placement",void 0);ze([p(["steps","step"])],Bt.prototype,"updateSteps",null);Bt.define("hmwc-stepper",Bt);var wo=m`
  :host {
    --switch-size: inherit;

    display: inline-block;
    flex: 0 0 auto;
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--hmwc-input-font-family);
    font-size: var(--switch-font-size);
    font-weight: var(--hmwc-input-font-weight);
    color: var(--hmwc-input-label-color);
    vertical-align: middle;
    cursor: pointer;

    &.sm {
      --height: var(--hmwc-toggle-size-small);
      --thumb-size: calc(var(--hmwc-toggle-size-small) + 4px);
      --width: calc(var(--hmwc-toggle-size-small) * 2);
      --switch-size: var(--hmwc-input-font-size-small);
    }

    &.md {
      --height: var(--hmwc-toggle-size-medium);
      --thumb-size: calc(var(--hmwc-toggle-size-medium) + 4px);
      --width: calc(var(--height) * 2);
      --switch-size: var(--hmwc-input-font-size-medium);
    }

    &.lg {
      --height: var(--hmwc-toggle-size-large);
      --thumb-size: calc(var(--hmwc-toggle-size-large) + 4px);
      --width: calc(var(--height) * 2);
      font-size: var(--hmwc-input-font-size-large);
    }

    &.checked {
      &:not(.disabled) {
        .switch__control:hover {
          background-color: var(--hmwc-color-primary-600);
          border-color: var(--hmwc-color-primary-600);
          .switch__thumb {
            background-color: var(--hmwc-color-neutral-0);
            border-color: var(--hmwc-color-primary-600);
            scale: 1.1;
            box-shadow: 0 0 0 3px hsl(from var(--hmwc-color-primary-600) h s l / 0.2);
          }
        }
        .switch__input:focus-visible ~ .switch__control {
          background-color: var(--hmwc-color-primary-600);
          border-color: var(--hmwc-color-primary-600);
          .switch__thumb {
            background-color: var(--hmwc-color-neutral-0);
            border-color: var(--hmwc-color-primary-600);
            outline: var(--hmwc-focus-ring);
            outline-offset: var(--hmwc-focus-ring-offset);
          }
        }
        .switch__control {
          background-color: var(--hmwc-color-primary-600);
          border-color: var(--hmwc-color-primary-600);
          .switch__thumb {
            background-color: var(--hmwc-color-neutral-0);
            border-color: var(--hmwc-color-primary-600);
            translate: calc((var(--width) - var(--height)) / 2);
          }
        }
      }
    }

    &:not(.checked):not(.disabled) {
      .switch__control:hover {
        background-color: var(--hmwc-color-neutral-400);
        border-color: var(--hmwc-color-neutral-400);
        .switch__thumb {
          background-color: var(--hmwc-color-neutral-0);
          border-color: var(--hmwc-color-neutral-400);
          scale: 1.1;
          box-shadow: 0 0 0 3px hsl(from var(--hmwc-color-neutral-400) h s l / 0.2);
        }
      }
      .switch__input:focus-visible ~ .switch__control {
        background-color: var(--hmwc-color-neutral-400);
        border-color: var(--hmwc-color-neutral-400);
        .switch__thumb {
          background-color: var(--hmwc-color-neutral-0);
          border-color: var(--hmwc-color-primary-600);
          outline: var(--hmwc-focus-ring);
          outline-offset: var(--hmwc-focus-ring-offset);
        }
      }
    }

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.label {
      .switch__label {
        display: inline-block;
      }
    }

    .switch__control {
      flex: 0 0 auto;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--width);
      height: var(--height);
      background-color: var(--hmwc-color-neutral-400);
      border: solid var(--hmwc-input-border-width) var(--hmwc-color-neutral-400);
      border-radius: var(--height);
      transition: var(--hmwc-transition-fast) border-color, var(--hmwc-transition-fast) background-color;

      .switch__thumb {
        width: var(--thumb-size);
        height: var(--thumb-size);
        background-color: var(--hmwc-color-neutral-0);
        border-radius: 50%;
        border: solid var(--hmwc-input-border-width) var(--hmwc-color-neutral-400);
        translate: calc((var(--width) - var(--height)) / -2);
        transition: var(--hmwc-transition-fast) translate ease, var(--hmwc-transition-fast) background-color, var(--hmwc-transition-fast) border-color,
          var(--hmwc-transition-fast) box-shadow, var(--hmwc-transition-fast) scale ease;
      }
    }
    .switch__input {
      position: absolute;
      opacity: 0;
      padding: 0;
      margin: 0;
      pointer-events: none;
    }

    .switch__label {
      display: none;
      line-height: var(--height);
      margin-inline-start: 0.3em;
      user-select: none;
      -webkit-user-select: none;
    }
  }

  @media (forced-colors: active) {
    .switch.checked:not(.disabled) .switch__control:hover .switch__thumb,
    .checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`;var ma=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},ne=class extends F{click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input?.checkValidity()}reportValidity(){return this.input?.reportValidity()}handleClick(){this.checked=!this.checked,this.emit("hmwc-change")}handleInput(){this.emit("hmwc-input")}handleFocus(){this.emit("hmwc-focus")}handleBlur(){this.emit("hmwc-blur")}handleKeyDown(t){["ArrowLeft","ArrowRight"].includes(t.key)&&(t.preventDefault(),this.checked=t.key==="ArrowRight",this.emit("hmwc-change",{detail:{value:this.checked}}),this.emit("hmwc-input"))}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0)}render(){let t=f({switch:!0,checked:!!this.checked,sm:!!this.sm,md:!!this.md,lg:!!this.lg,disabled:!!this.disabled,required:!!this.required,label:!!this.label||this.controllers.slot.test("label")});return c`
      <label part="base" class=${t}>
        <input
          class="switch__input"
          type="checkbox"
          title=${this.label||""}
          name=${y(this.name)}
          value=${y(this.value)}
          ?checked=${ee(this.checked)}
          ?required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          @keydown=${this.handleKeyDown} />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <slot part="label" class="switch__label">${this.label}</slot>
      </label>
    `}};ne.styles=wo;ne.slots=["label"];ne.toggle=!0;ma([T(".switch__input")],ne.prototype,"input",void 0);ne.define("hmwc-switch",ne);var yo=m`
  :host {
    display: block;
    overflow-y: auto;
  }

  :host([aria-hidden='false']) {
    height: 100%;
  }

  .tab-content {
    display: none;
    padding: var(--tab-content-padding);
    height: 100%;

    &.active {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      gap: var(--hmwc-spacing-medium);
    }
  }
`;var Br=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Ot=class extends u{handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tabpanel")}render(){let t=f({"tab-content":!0,active:this.active});return c` <slot part="base" class=${t}></slot> `}};Ot.styles=yo;Ot.dependencies=[];Br([b()],Ot.prototype,"active",void 0);Br([a({type:String,reflect:!0})],Ot.prototype,"name",void 0);Br([p("active")],Ot.prototype,"handleActiveChange",null);Ot.define("hmwc-tab-content",Ot);var _o=m`
  :host {
    display: inline-block;
  }

  :host([active]) {
    background: var(--hmwc-color-primary-100);
  }

  .tab {
    display: inline-flex;
    gap: var(--hmwc-spacing-medium);
    align-items: center;
    font-family: var(--hmwc-font-sans);
    font-size: calc(1.025 * var(--hmwc-font-size-small));
    letter-spacing: -0.175px;
    font-weight: var(--hmwc-font-weight-semibold);
    border-radius: var(--hmwc-border-radius-medium);
    color: var(--hmwc-color-neutral-800);
    padding: var(--padding);
    white-space: nowrap;
    user-select: none;
    line-height: 2;
    -webkit-user-select: none;
    cursor: pointer;
    box-sizing: border-box;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;

    .tab__label {
      display: inline-block;
    }

    .tab__close {
      display: flex;
      font-size: var(--hmwc-font-size-small);
      margin-inline-start: var(--hmwc-spacing-small);

      &::part(base) {
        padding: var(--hmwc-spacing-3x-small);
      }

      & hmwc-button {
        --icon-size: 1.2rem;
        position: relative;
        top: -1px;
      }
    }

    .tab__icon {
      --icon-size: 1.15rem;
      display: flex;
      align-items: center;
      color: var(--hmwc-color-neutral-400);
      --icon-color: var(--hmwc-color-neutral-400);
    }

    &.active:not(.disabled) {
      color: var(--hmwc-color-primary-700);

      .tab__icon {
        color: var(--hmwc-color-primary-400);
      }
    }

    &.closable {
      padding-inline-end: var(--hmwc-spacing-small);
    }

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:hover:not(.disabled) {
      color: var(--hmwc-color-primary-600);
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--hmwc-focus-ring);
      outline-offset: calc(-1 * var(--hmwc-focus-ring-width) - var(--hmwc-focus-ring-offset));

      &:not(.disabled) {
        color: var(--hmwc-color-primary-600);
      }
    }
  }

  @media (forced-colors: active) {
    .tab.active:not(.disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;var de=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},dt=class extends u{constructor(){super(...arguments),this.name=Math.random().toString(36).substr(2,9)}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.tab.focus(t)}blur(){this.tab.blur()}handleClose(t){t.stopPropagation(),this.emit("close")}updateContent(){let t=this.closest("hmwc-tab-group"),e=this.children;if(!e||!t||Array.from(t.children).find(o=>o instanceof Ot&&o.name===this.name))return;let r=Object.assign(document.createElement("hmwc-tab-content"),{name:this.name,active:this.active});e instanceof Element?r.appendChild(e):Array.from(e).forEach(o=>{r.appendChild(o)}),t?.appendChild(r)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab"),this.setAttribute("slot","tab"),this.updateContent()}render(){let t=f({tab:!0,active:!!this.active,closable:!!this.closeable,disabled:!!this.disabled});return c`
      <div part="base" class=${t} tabindex=${this.disabled?"-1":"0"}>
        <slot name="icon" class="tab__icon">${this.icon?c`<hmwc-icon src=${this.icon}></hmwc-icon>`:""}</slot>
        <slot>${this.label}</slot>
        ${this.closeable?c`<span class="tab__close"><hmwc-button part="close" basic medium icon="x" @hmwc-click=${this.handleClose}> </hmwc-button></span>`:""}
      </div>
    `}};dt.styles=_o;dt.dependencies=[w];de([a({type:String})],dt.prototype,"name",void 0);de([a({type:String})],dt.prototype,"label",void 0);de([a({type:Boolean,reflect:!0})],dt.prototype,"active",void 0);de([a({type:Boolean,reflect:!0})],dt.prototype,"closeable",void 0);de([a({type:Boolean,reflect:!0})],dt.prototype,"disabled",void 0);de([a({type:String})],dt.prototype,"icon",void 0);de([T(".tab")],dt.prototype,"tab",void 0);de([p("active")],dt.prototype,"handleActiveChange",null);de([p("disabled")],dt.prototype,"handleDisabledChange",null);dt.define("hmwc-tab",dt);var xo=m`
  :host {
    --tabgroup-color: var(--hmwc-color-primary-600);
    --tabgroup-spacing: calc(1.2 * var(--hmwc-spacing-medium));

    display: block;
    overflow: hidden;
  }

  :host([placement='start']) {
    height: 100%;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
    font-family: var(--hmwc-font-sans);

    .tab-group__navigation {
      .tab-group__nav {
        display: flex;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          width: 0;
          height: 0;
        }

        .tab-group__tabs {
          display: flex;
          position: relative;
        }

        .tab-group__indicator {
          position: absolute;
          transition: var(--hmwc-transition-fast) translate ease, var(--hmwc-transition-fast) width ease;
        }
      }

      .tab-group__scroll {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        bottom: 0;
        width: var(--hmwc-spacing-x-large);
      }
    }

    .tab-group__content {
      display: block;
      overflow: auto;
      width: 100%;
    }

    &.fluid {
      height: 100%;

      & .tab-group__nav {
        height: 100%;

        & .tab-group__tabs {
          height: 100%;
        }
      }
    }

    &.scrollable {
      .tab-group__navigation {
        position: relative;
        padding: 0 var(--hmwc-spacing-x-large);

        .tab-group__scroll.start {
          left: 0;
        }

        .tab-group__scroll.end {
          right: 0;
        }
      }
    }

    &[placement='top'] {
      --padding: 0 var(--tabgroup-spacing);
      --tab-content-padding: var(--tabgroup-spacing) 0;

      flex-direction: column;

      .tab-group__navigation {
        order: 1;

        .tab-group__nav {
          overflow-x: auto;

          .tab-group__tabs {
            flex: 1 1 auto;
            flex-direction: row;
            border-bottom: solid 2px var(--hmwc-color-neutral-200);

            .tab-group__indicator {
              bottom: -1px;
              border-bottom: solid 2px var(--tabgroup-color);
            }
          }
        }
      }

      .tab-group__content {
        order: 2;
      }
    }

    &[placement='bottom'] {
      --padding: var(--tabgroup-spacing) 0;
      --tab-content-padding: var(--tabgroup-spacing) 0;
      flex-direction: column;

      .tab-group__navigation {
        order: 2;

        .tab-group__nav {
          overflow-x: auto;

          .tab-group__tabs {
            flex: 1 1 auto;
            flex-direction: row;
            border-top: solid 2px var(--hmwc-color-neutral-200);

            .tab-group__indicator {
              top: -2px;
              border-top: solid 2px var(--tabgroup-color);
            }
          }
        }
      }

      .tab-group__content {
        order: 1;
      }
    }

    &[placement='start'] {
      --padding: 0 var(--tabgroup-spacing);
      --tab-content-padding: var(--hmwc-spacing-x-small) calc(var(--tabgroup-spacing) + var(--hmwc-spacing-3x-small));

      height: 100%;
      flex-direction: row;

      .tab-group__navigation {
        order: 1;

        .tab-group__nav {
          height: 100%;
          flex-direction: column;
          overflow-y: auto;
          min-width: 11rem;

          .tab-group__tabs {
            height: 100%;
            flex: 0 0 auto;
            flex-direction: column;
            border-inline-end: solid 2px var(--hmwc-color-neutral-200);

            .tab-group__indicator {
              right: -2px;
              border-right: solid 2px var(--tabgroup-color);
            }
          }
        }
      }

      .tab-group__content {
        order: 2;
      }
    }

    &[placement='end'] {
      --padding: 0 var(--tabgroup-spacing);
      --tab-content-padding: 0 var(--tabgroup-spacing);

      flex-direction: row;

      .tab-group__navigation {
        order: 2;

        .tab-group__nav {
          flex-direction: column;
          overflow-y: auto;

          .tab-group__tabs {
            flex: 0 0 auto;
            flex-direction: column;
            border-inline-start: solid 2px var(--hmwc-color-neutral-200);

            .tab-group__indicator {
              left: -2px;
              border-left: solid 2px var(--tabgroup-color);
            }
          }
        }
      }

      .tab-group__content {
        order: 1;
      }
    }
  }
`;var Xt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},lt=class extends u{constructor(){super(...arguments),this.scrollable=!1,this.tabs=[],this.content=[],this.placement="top",this.active=""}handlePlacementChange(){this.indicator&&(this.getCurrentTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none")}handleTabsChange(){this.getTabs().find(e=>e.active)||this.setCurrentTab(this.getCurrentTab())}show(t){setTimeout(()=>{let e=this.tabs.find(r=>r.name===t);e&&this.setCurrentTab(e)},1)}getTabs(){let t=this.querySelectorAll("hmwc-tab");return Array.from(t)}getContent(){let t=this.querySelectorAll("hmwc-tab-content");return Array.from(t)}getCurrentTab(){return this.getTabs().find(t=>t.active)||this.tabs[0]}setAria(){this.tabs.forEach(t=>{let e=this.content.find(r=>r.name===t.name);e&&(t.setAttribute("aria-controls",e.id),e.setAttribute("aria-labelledby",t.id))})}setCurrentTab(t){if(t===this.current||t.disabled)return;let e=this.current;this.current=t,this.active=t.name||"";let r=o=>o.active=o.name===t.name;this.tabs.forEach(r),this.content.forEach(r),this.handlePlacementChange(),!(!this.current||!this.tabsEl)&&(["top","bottom"].includes(this.placement)&&this.autoScroll&&this.controllers.scroll.scrollIntoView(this.current,this.tabsEl,"horizontal"),e?this.emit("hmwc-hide",{bubbles:!1}):this.emit("hmwc-show"))}repositionIndicator(){if(!this.current)return;let t=this.indicator.style,e=this.current.clientWidth,r=this.current.clientHeight,o=this.tabs.indexOf(this.current),s=this.tabs.slice(0,o).reduce((l,h)=>({left:l.left+h.clientWidth,top:l.top+h.clientHeight}),{left:0,top:0});["top","bottom"].includes(this.placement)?(t.width=`${e}px`,t.height="auto",t.transform=`translateX(${s.left}px)`):["start","end"].includes(this.placement)&&(t.width="auto",t.height=`${r}px`,t.transform=`translateY(${s.top}px)`)}handleClick(t){let r=t.target.closest("hmwc-tab");r?.closest("hmwc-tab-group")!==this||!r||this.setCurrentTab(r)}handleKeyDown(t){let r=t.target.closest("hmwc-tab"),o=r?.closest("hmwc-tab-group"),i=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"];if(!(o!==this||!r)&&i.includes(t.key)){let s=["top","bottom"].includes(this.placement),l=["start","end"].includes(this.placement),h=this.tabs.find(g=>g.matches(":focus"));if(!h)return;let d=this.tabs.indexOf(h);if(t.key==="Home"?d=0:t.key==="End"?d=this.tabs.length-1:t.key==="ArrowLeft"&&s||t.key==="ArrowUp"&&l?d--:(t.key==="ArrowRight"&&s||t.key==="ArrowDown"&&l)&&d++,d<0?d=this.tabs.length-1:d>this.tabs.length-1&&(d=0),this.tabs[d].focus({preventScroll:!0}),this.setCurrentTab(this.tabs[d]),!this.current||!this.tabsEl)return;s&&this.controllers.scroll.scrollIntoView(this.current,this.tabsEl,"horizontal")}}handleScroll(t){let e=0;t==="left"?e=this.nav.scrollLeft-this.nav.clientWidth:t==="right"&&(e=this.nav.scrollLeft+this.nav.clientWidth),this.nav.scroll({left:e,behavior:"smooth"})}handleSlotChange(){this.handlePlacementChange(),this.tabs=this.getTabs(),this.content=this.getContent()}reset(){this.setCurrentTab(this.tabs[0])}connectedCallback(){if(super.connectedCallback(),this.setAttribute("role","tablist"),this.tabs=this.getTabs(),this.content=this.getContent(),!this.tabs&&!this.content||(this.setCurrentTab(this.getCurrentTab()),this.setAria(),!this.nav))return;let t=["top","bottom"].includes(this.placement),e=this.nav.scrollWidth>this.nav.clientWidth;this.scrollable=t&&e}render(){let t=f({"tab-group":!0,scrollable:this.scrollable,fluid:!!this.fluid});return c`
      <div part="base" class=${t} placement=${this.placement} @click=${this.handleClick} @keydown=${this.handleKeyDown}>
        <div class="tab-group__navigation">
          ${this.scrollable?c`
                <hmwc-button class="tab-group__scroll start" basic small icon="chevron-left" @hmwc-click=${()=>this.handleScroll("left")}>
                </hmwc-button>
              `:""}
          <div part="navigation" class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs">
              <div part="indicator" class="tab-group__indicator"></div>
              <slot name="tab" @slotchange=${this.handlePlacementChange}></slot>
            </div>
          </div>
          ${this.scrollable?c`
                <hmwc-button class="tab-group__scroll end" basic small icon="chevron-right" @hmwc-click=${()=>this.handleScroll("right")}>
                </hmwc-button>
              `:""}
        </div>
        <div class="tab-group__content" part="content">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
      </div>
    `}};lt.styles=xo;lt.dependencies=[dt,Ot,w];Xt([b()],lt.prototype,"scrollable",void 0);Xt([b()],lt.prototype,"tabs",void 0);Xt([b()],lt.prototype,"content",void 0);Xt([a({type:String,reflect:!0})],lt.prototype,"placement",void 0);Xt([a({type:Boolean})],lt.prototype,"autoScroll",void 0);Xt([a({type:String,reflect:!0})],lt.prototype,"active",void 0);Xt([a({type:Boolean,reflect:!0})],lt.prototype,"fluid",void 0);Xt([T(".tab-group__tabs")],lt.prototype,"tabsEl",void 0);Xt([T(".tab-group__nav")],lt.prototype,"nav",void 0);Xt([T(".tab-group__indicator")],lt.prototype,"indicator",void 0);Xt([p("placement",{waitUntilFirstUpdate:!0})],lt.prototype,"handlePlacementChange",null);Xt([p("tabs",{waitUntilFirstUpdate:!0})],lt.prototype,"handleTabsChange",null);lt.define("hmwc-tab-group",lt);var ko=m`
  :host {
    --table-cell-width: fit-content;
    --table-cell-padding: var(--hmwc-spacing-x-small) var(--hmwc-spacing-small);
    --table-cell-alignment: start;
    --table-cell-background: none;
    --table-cell-border-color: var(--hmwc-panel-border-color);
    --table-cell-border-width: var(--hmwc-panel-border-width);
    --table-cell-size: var(--hmwc-font-size-medium);
    --table-cell-font-color: var(--hmwc-color-neutral-700);
    --table-cell-font-weight: var(--hmwc-font-weight-normal);
    --table-cell-font-family: var(--hmwc-font-sans);
    --table-cell-progress-size: var(--hmwc-font-size-x-small);
    --table-cell-progress-color: var(--hmwc-color-primary-600);

    display: contents;
  }

  .table-cell {
    width: var(--table-cell-width);
    padding: var(--table-cell-padding);
    display: table-cell;
    vertical-align: middle;
    text-align: var(--table-cell-alignment);
    color: var(--table-cell-font-color);

    & hmwc-tooltip .table-cell__body,
    & .table-cell__body {
      height: 100%;
      display: flex;
      justify-content: var(--table-cell-alignment);
      & .table-cell__label {
        font-size: var(--table-cell-size);
        font-weight: var(--table-cell-font-weight);
        font-family: var(--table-cell-font-family);
        text-wrap: nowrap;
        color: var(--table-cell-font-color);
      }

      & .table-cell__icon {
        --icon-size: var(--table-cell-size);
        --icon-color: var(--table-cell-font-color);

        &::part(base) {
          display: block;
        }
      }

      & .table-cell__progress {
        --progress-color: var(--table-cell-progress-color);

        &::part(base) {
          --progress-track: var(--table-cell-progress-size);
        }
      }
    }

    &.align-start {
      --table-cell-alignment: start;
    }
    &.align-center {
      --table-cell-alignment: center;
    }
    &.align-end {
      --table-cell-alignment: end;
    }

    &.primary {
      --table-cell-font-color: var(--hmwc-color-primary-600);
    }
    &.success {
      --table-cell-font-color: var(--hmwc-color-success-600);
    }
    &.neutral {
      --table-cell-font-color: var(--hmwc-color-neutral-600);
    }
    &.warning {
      --table-cell-font-color: var(--hmwc-color-warning-600);
    }
    &.danger {
      --table-cell-font-color: var(--hmwc-color-danger-600);
    }
  }
`;var oe=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},ot=class extends u{constructor(){super(...arguments),this.alignment="start"}valueUpdated(){this.hasUpdated&&this.emit("hmwc-change",{detail:{value:this.label}})}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","cell")}firstUpdated(){if(!this.label){let r=(this.shadowRoot?.querySelector("slot.table-cell__body")?.assignedNodes({flatten:!0})??[]).map(o=>o.nodeType===Node.TEXT_NODE?o.nodeValue:o.textContent).join("").trim();r&&(this.label=r)}}render(){let t=f({"table-cell":!0,"align-start":this.alignment==="start","align-center":this.alignment==="center","align-end":this.alignment==="end",icon:!!this.icon,progress:!!this.progress,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
      <div part="base" class=${t} @mouseenter=${()=>this.emit("hmwc-hover")}>
        <slot part="body" class="table-cell__body">
          ${this.icon?c`<hmwc-icon part="icon" class="table-cell__icon" src=${this.icon}></hmwc-icon>`:this.label?c`<div part="label" class="table-cell__label">${this.label}</div>`:this.progress?c`
                <hmwc-progress
                  part="progress"
                  class="table-cell__progress"
                  value=${this.progress}
                  ?primary=${this.primary}
                  ?success=${this.success}
                  ?neutral=${this.neutral}
                  ?warning=${this.warning}
                  ?danger=${this.danger}
                  @hmwc-change=${e=>this.progress=e.detail.value}></hmwc-progress>
              `:c`<hmwc-skeleton></hmwc-skeleton>`}
        </slot>
      </div>
    `}};ot.styles=ko;ot.dependencies=[_,W,I,wt];oe([a({type:String,reflect:!0})],ot.prototype,"label",void 0);oe([a({type:String,reflect:!0})],ot.prototype,"icon",void 0);oe([a({type:Number,reflect:!0})],ot.prototype,"progress",void 0);oe([a({type:String,reflect:!0})],ot.prototype,"alignment",void 0);oe([a({type:Number,reflect:!0})],ot.prototype,"index",void 0);oe([a({type:Boolean,reflect:!0})],ot.prototype,"primary",void 0);oe([a({type:Boolean,reflect:!0})],ot.prototype,"success",void 0);oe([a({type:Boolean,reflect:!0})],ot.prototype,"neutral",void 0);oe([a({type:Boolean,reflect:!0})],ot.prototype,"warning",void 0);oe([a({type:Boolean,reflect:!0})],ot.prototype,"danger",void 0);oe([p(["label","progress"])],ot.prototype,"valueUpdated",null);ot.define("hmwc-table-cell",ot);var $o=m`
  :host {
    /*
     * <hmwc-table-field> is a configuration-only primitive — it
     * declares how a data-driven host (e.g. <hmwc-data-table>)
     * should render a column. It has no visible representation
     * of its own.
     */
    display: none;
  }
`;var ve=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},_t=class extends u{handleConfigChange(){this.hasUpdated&&this.emit("hmwc-change",{detail:{field:this.prop,config:this.toConfig()}})}toConfig(){let t={prop:this.prop};return this.label!==void 0&&(t.label=this.label),this.width!==void 0&&(t.width=this.width),this.alignment!==void 0&&(t.alignment=this.alignment),this.sortable!==void 0&&(t.sortable=this.sortable),this.filterable!==void 0&&(t.filterable=this.filterable),this.template!==void 0&&(t.template=this.template),t}render(){return E}};_t.styles=$o;_t.dependencies=[];_t.slots=[];ve([a({type:String,reflect:!0})],_t.prototype,"prop",void 0);ve([a({type:String,reflect:!0})],_t.prototype,"label",void 0);ve([a({type:String,reflect:!0})],_t.prototype,"width",void 0);ve([a({type:String,reflect:!0})],_t.prototype,"alignment",void 0);ve([a({type:Boolean,reflect:!0})],_t.prototype,"sortable",void 0);ve([a({type:Boolean,reflect:!0})],_t.prototype,"filterable",void 0);ve([a({type:String,reflect:!0})],_t.prototype,"template",void 0);ve([p(["prop","label","width","alignment","sortable","filterable","template"])],_t.prototype,"handleConfigChange",null);_t.define("hmwc-table-field",_t);var Co=m`
  :host {
    --table-row-background: none;

    display: contents;
  }

  .table-row {
    display: table-row;
    background: var(--table-row-background);
    line-height: 2;
    &.alt {
      --table-row-background: var(--hmwc-panel-background-color);

      --table-cell-font-color: var(--hmwc-color-neutral-500);
    }
  }
`;var De=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},xt=class extends u{constructor(){super(...arguments),this.hover=!0,this.cells=[]}cellsUpdate(){let t=this.cells.filter(e=>e.index);t.length?this.cells.filter(r=>r.index===void 0).forEach((r,o)=>{t.find(i=>i.index===o)||(r.index=o),o++}):this.cells.map((e,r)=>e.index=r),this.cells=this.cells.sort((e,r)=>e.index-r.index)}firstUpdated(){this.cells=this.controllers.slot.get().filter(t=>t instanceof ot)}render(){let t=f({"table-row":!0,alt:this.index%2!==0});return c`<div part="base" class=${t}>
        ${this.selectable?c`<hmwc-checkbox></hmwc-checkbox>`:""}${this.cells}${this.removable?c`<hmwc-button basic danger icon="x"></hmwc-button>`:""}
      </div>
      <slot></slot>`}};xt.styles=Co;xt.dependencies=[];xt.slots=[];De([a({type:Number,reflect:!0})],xt.prototype,"index",void 0);De([a({type:Boolean,reflect:!0})],xt.prototype,"hover",void 0);De([a({type:Boolean,reflect:!0})],xt.prototype,"selectable",void 0);De([a({type:Boolean,reflect:!0})],xt.prototype,"removable",void 0);De([b()],xt.prototype,"cells",void 0);De([p("cells",{waitUntilFirstUpdate:!0})],xt.prototype,"cellsUpdate",null);xt.define("hmwc-table-row",xt);var So=m`
  :host {
    --table-width: auto;
    --table-item-padding: var(--hmwc-spacing-x-small) var(--hmwc-spacing-small);
    --table-header-background: transparent;
    --table-header-color: var(--hmwc-color-neutral-500);
    --table-header-border-color: var(--hmwc-color-primary-400);
    --data-table-header-color: var(--hmwc-color-neutral-700);
    display: contents;
  }

  .table {
    display: table;
    width: var(--table-width);
    border-spacing: 0;
    border-collapse: separate;
    box-sizing: border-box;
    border-radius: var(--hmwc-border-radius-large);
    box-shadow: var(--hmwc-shadow-medium);
    width: 100%;
    table-layout: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    border: var(--hmwc-panel-border-width) solid var(--hmwc-panel-border-color);

    & .table__head {
      background-color: var(--table-header-background);

      display: table-header-group;

      & .table__head-row {
        font-size: var(--hmwc-font-size-medium);
        display: none;
        padding: var(--hmwc-spacing-small) var(--hmwc-spacing-medium) var(--hmwc-spacing-x-small);
        color: var(--table-header-color);
        font-weight: var(--hmwc-font-weight-bold);
        letter-spacing: var(--hmwc-letter-spacing-dense);
        text-align: left;
        white-space: nowrap;
        cursor: pointer;
        & .table__head-item {
          display: table-cell;
          padding: var(--table-item-padding);

          border-bottom: 1.5px solid var(--table-header-border-color);
        }
      }
    }

    & .table__body {
      display: table-row-group;
    }

    &.fields {
      & .table__head {
        & .table__head-row {
          display: table-row;
        }
      }
    }

    &.fluid {
      --table-width: 100%;
    }
  }
`;var Ye=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Nt=class extends u{constructor(){super(...arguments),this.rows=[],this.fields=[]}rowsUpdate(){let t=this.rows.filter(e=>e.index);t.length?this.rows.filter(e=>e.index===void 0).forEach((e,r)=>{t.find(o=>o.index===r)||(e.index=r),r++}):this.rows.map((e,r)=>e.index=r),this.rows=this.rows.sort((e,r)=>e.index-r.index),this.rows[0]?.cells&&(this.fields.length||(this.fields=Array.from(Array(this.rows[0]?.cells.length).keys()).map(()=>""))),this.rows.find(e=>e.selectable)&&(this.fields=["",...this.fields]),this.rows.find(e=>e.removable)&&(this.fields=[...this.fields,""])}fieldsUpdate(){}firstUpdated(){this.rows=this.controllers.slot.get().filter(t=>t instanceof xt)}render(){let t=f({table:!0,fluid:!!this.fluid,fields:this.fields.some(e=>e!=="")});return c`
      <div part="base" class=${t}>
        <div part="head" class="table__head">
          <div class="table__head-row">${this.fields?.map(e=>c`<div part="col-head" class="table__head-item">${e}</div>`)}</div>
        </div>
        ${this.rows.map(e=>e)}
        <slot></slot>
      </div>
    `}};Nt.styles=So;Nt.dependencies=[];Nt.slots=["[Default]"];Ye([b()],Nt.prototype,"rows",void 0);Ye([a({type:Array})],Nt.prototype,"fields",void 0);Ye([a({type:Boolean,reflect:!0})],Nt.prototype,"fluid",void 0);Ye([p("rows")],Nt.prototype,"rowsUpdate",null);Ye([p("fields")],Nt.prototype,"fieldsUpdate",null);Nt.define("hmwc-table",Nt);var zo=m`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
    width: 100%;
  }

  :host(:focus) {
    outline: none;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--hmwc-focus-ring);
    outline-offset: var(--hmwc-focus-ring-offset);
    z-index: 2;
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    width: 100%;
    flex-direction: column;
    color: var(--hmwc-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;

    & .tree-item__item {
      display: flex;
      align-items: center;
      border-inline-start: solid 3px transparent;
      padding-right: var(--hmwc-spacing-medium);

      & .tree-item__expand,
      & .tree-item__checkbox,
      & .tree-item__label {
        font-family: var(--hmwc-font-sans);
        font-size: var(--hmwc-font-size-medium);
        font-weight: var(--hmwc-font-weight-normal);
        line-height: var(--hmwc-line-height-dense);
        letter-spacing: var(--hmwc-letter-spacing-normal);
      }

      & .tree-item__checkbox,
      & .tree-item__indentation {
        display: block;
        width: 1em;
        flex-shrink: 0;
      }

      & .tree-item__label {
        display: flex;
        align-items: center;
        transition: var(--hmwc-transition-fast) color;
      }

      & .tree-item__expand {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: content-box;
        color: var(--hmwc-color-neutral-500);
        padding: var(--hmwc-spacing-x-small);
        opacity: 0;
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
        cursor: pointer;
        transition: var(--hmwc-transition-medium) rotate ease;

        hmwc-icon {
          display: flex;
          height: fit-content;
          &::part(base) {
            display: flex;
            height: fit-content;
          }
        }
      }

      & .tree-item__checkbox {
        pointer-events: none;
        margin-inline-end: var(--hmwc-spacing-small);

        hmwc-checkbox::part(base) {
          display: flex;
          align-items: center;
        }
      }

      & .tree-item__icon {
        display: block;

        &:has(hmwc-icon) {
          margin-inline-end: var(--hmwc-spacing-x-small);
        }
      }
    }

    & .tree-item__items {
      display: block;
      position: relative;
      font-size: calc(1em + var(--indent-size, var(--hmwc-spacing-medium)));

      &::before {
        content: '';
        position: absolute;
        top: var(--indent-guide-offset);
        bottom: var(--indent-guide-offset);
        left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
        border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
        z-index: 1;
      }
    }

    &.expanded {
      & .tree-item__item {
        .tree-item__expand {
          rotate: 90deg;
        }
      }
    }

    &.disabled {
      & .tree-item__item {
        opacity: 0.5;
        outline: none;
        cursor: not-allowed;
      }
    }

    &.items {
      & .tree-item__item {
        & .tree-item__expand {
          opacity: 1;
        }
      }
    }

    &.selected:not(.disabled) {
      & .tree-item__item {
        background-color: var(--hmwc-color-neutral-100);
        border-inline-start-color: var(--hmwc-color-primary-600);
      }

      & .tree-item__expand {
        color: var(--hmwc-color-primary-600);
      }
    }
  }

  @media (forced-colors: active) {
    .tree-item.selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`;var be=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},pt=class n extends u{constructor(){super(...arguments),this.selection="single",this.checked=!1,this.items=[]}getTreeItems(){return this.items.length||this.controllers.slot.get().forEach(t=>{t instanceof n&&this.items.push({label:t.controllers.slot.get("label")[0].textContent||"",icon:t.controllers.slot.get("icon")[0].src,selected:t.selected,expanded:t.expanded,items:t.getTreeItems()})}),this.items}handleClick(){this.selected=!this.selected,this.selection==="multiple"&&(this.checked=this.selected),this.emit("select",{detail:{value:this}}),this.items&&(this.expanded=this.selected)}connectedCallback(){super.connectedCallback()}render(){let t=f({"tree-item":!0,items:!!this.items.length,expanded:!!this.expanded,disabled:!!this.disabled,selected:!!this.selected&&!this.disabled});return c`
      <div part="base" class=${t}>
        <div part="item" class="tree-item__item" @click=${this.handleClick}>
          <div class="tree-item__indentation" part="indentation"></div>
          <slot name="${this.expanded?"collapse":"expand"}-icon" part="icon" class="tree-item__expand">
            ${this.items?c`<hmwc-icon src="chevron-right"></hmwc-icon>`:""}
          </slot>

          ${this.selection==="multiple"?c`<div part="checkbox" class="tree-item__checkbox">
                <hmwc-checkbox ?checked=${this.checked} @hmwc-change=${this.handleClick}></hmwc-checkbox>
              </div>`:""}
          <slot name="icon" part="icon" class="tree-item__icon">
            ${this.icon?c`<hmwc-icon sm src=${this.icon}></hmwc-icon>`:""}
          </slot>
          <slot name="label" part="label" class="tree-item__label">${this.label}</slot>
        </div>
        ${this.expanded?c`<div part="items" class="tree-item__items">
              <slot>
                ${this.items.map(e=>c`
                    <hmwc-tree-item
                      label=${e.label}
                      icon=${y(e.icon)}
                      ?selected=${e.selected}
                      ?expanded=${e.expanded}
                      ?checked=${e.checked}
                      selection=${this.selection}
                      .items=${e.items||[]}></hmwc-tree-item>
                  `)}
              </slot>
            </div>`:""}
      </div>
    `}};pt.styles=zo;pt.dependencies=[_,ct];pt.slots=["label","icon"];be([a({type:String})],pt.prototype,"selection",void 0);be([a({type:String})],pt.prototype,"label",void 0);be([a({type:String})],pt.prototype,"icon",void 0);be([a({type:Boolean,reflect:!0})],pt.prototype,"selected",void 0);be([a({type:Boolean,reflect:!0})],pt.prototype,"checked",void 0);be([a({type:Boolean,reflect:!0})],pt.prototype,"expanded",void 0);be([a({type:Boolean,reflect:!0})],pt.prototype,"disabled",void 0);be([a({type:Array})],pt.prototype,"items",void 0);pt.define("hmwc-tree-item",pt);var Ao=m`
  :host {
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: flex;
    isolation: isolate;
    width: 100%;
    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }

  .tree {
    display: flex;
    flex-direction: column;
    width: 100%;

    & .tree__label {
      display: none;
      color: var(--hmwc-color-text-secondary);
      font-size: var(--hmwc-font-size-small);
      font-family: var(--hmwc-font-sans);
      line-height: 2;
      margin-bottom: var(--hmwc-spacing-2x-small);
    }

    &.label {
      & .tree__label {
        display: flex;
      }
    }
  }
`;var Ke=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(t,e,i):s(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Vt=class extends u{constructor(){super(...arguments),this.selection="single",this.items=[]}handleSelectionChange(){this.controllers.slot.get().forEach(t=>{t.selection=this.selection})}singleSelect(t,e){return e.map(r=>(r.label===t.label?(r.selected=!0,r.items&&(r.expanded=!0)):r.selected=!1,r.items&&(r.items=this.singleSelect(t,r.items),r.items.some(o=>o.selected)&&(r.expanded=!0)),r))}multiSelect(t,e){return e.map(r=>(r.label===t.label&&(r.selected=!0,r.checked=!0,r.items&&(r.expanded=!0)),r.items&&(r.items=this.multiSelect(t,r.items),r.items.some(o=>o.selected)&&(r.expanded=!0)),r))}handleSelection(t){let e=t.detail.value;this.selection==="single"?this.items=this.singleSelect(e,this.items):this.selection==="multiple"&&(this.items=this.multiSelect(e,this.items))}connectedCallback(){super.connectedCallback(),this.controllers.slot.get().forEach(t=>{t.selection=this.selection})}render(){let t=f({tree:!0,label:!!this.label||this.controllers.slot.test("label")});return c`
      <div part="base" class=${t}>
        <slot name="label" part="label" class="tree__label">${this.label}</slot>
        <slot>
          ${this.items.map(e=>c`
              <hmwc-tree-item
                label=${e.label}
                icon=${y(e.icon)}
                ?selected=${e.selected}
                ?expanded=${e.expanded}
                ?checked=${e.checked}
                .items=${e.items||[]}
                selection=${this.selection}
                @hmwc-select=${this.handleSelection}></hmwc-tree-item>
            `)}
        </slot>
      </div>
    `}};Vt.styles=Ao;Vt.dependencies=[pt];Ke([a()],Vt.prototype,"selection",void 0);Ke([a({type:Boolean,reflect:!0})],Vt.prototype,"expanded",void 0);Ke([a({type:Array})],Vt.prototype,"items",void 0);Ke([a({type:String,reflect:!0})],Vt.prototype,"label",void 0);Ke([p("selection")],Vt.prototype,"handleSelectionChange",null);Vt.define("hmwc-tree",Vt);return Fo(ua);})();

// Expose imperative functions globally
if (typeof window !== 'undefined') {
  window.HMWCPopup = HMWC.HMWCPopup;
  window.HMWCAlert = HMWC.HMWCAlert;
}

