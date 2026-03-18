"use strict";var HMWC=(()=>{var lr=Object.defineProperty;var no=Object.getOwnPropertyDescriptor;var lo=Object.getOwnPropertyNames;var co=Object.prototype.hasOwnProperty;var ho=(n,t)=>{for(var e in t)lr(n,e,{get:t[e],enumerable:!0})},po=(n,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of lo(t))!co.call(n,o)&&o!==e&&lr(n,o,{get:()=>t[o],enumerable:!(r=no(t,o))||r.enumerable});return n};var mo=n=>po(lr({},"__esModule",{value:!0}),n);var jo={};ho(jo,{Accordion:()=>K,AccordionGroup:()=>ct,Alert:()=>L,AlertPresets:()=>wr,Attachment:()=>O,Avatar:()=>it,Badge:()=>V,Banner:()=>Ot,Breadcrumb:()=>I,Breadcrumbs:()=>$t,Button:()=>w,Calendar:()=>H,Card:()=>P,Chart:()=>bt,Checkbox:()=>at,Col:()=>Mt,DataTable:()=>C,Divider:()=>G,Dropdown:()=>N,Grid:()=>st,HMWCAlert:()=>Mo,HMWCComponent:()=>p,HMWCContainerComponent:()=>F,HMWCFormComponent:()=>j,HMWCPopup:()=>Ro,Header:()=>pt,Icon:()=>x,Image:()=>Dt,Input:()=>_,List:()=>Jt,Menu:()=>B,MenuItem:()=>A,Navbar:()=>wt,Page:()=>yt,Pagination:()=>Y,Popup:()=>E,PopupPresets:()=>_r,Progress:()=>W,Radio:()=>Ft,RadioGroup:()=>Tt,Row:()=>Wt,Skeleton:()=>ft,Spinner:()=>J,Stepper:()=>Ct,Switch:()=>ie,Tab:()=>nt,TabContent:()=>zt,TabGroup:()=>ot,Table:()=>jt,TableCell:()=>tt,TableField:()=>oe,TableRow:()=>gt,Tag:()=>Q,Text:()=>$,Tooltip:()=>U,Tree:()=>Nt,TreeItem:()=>lt});var Ye=globalThis,Ke=Ye.ShadowRoot&&(Ye.ShadyCSS===void 0||Ye.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,cr=Symbol(),zr=new WeakMap,Me=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==cr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Ke&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=zr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&zr.set(e,t))}return t}toString(){return this.cssText}},Sr=n=>new Me(typeof n=="string"?n:n+"",void 0,cr),d=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((r,o,i)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+n[i+1],n[0]);return new Me(e,n,cr)},Ar=(n,t)=>{if(Ke)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),o=Ye.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=e.cssText,n.appendChild(r)}},hr=Ke?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return Sr(e)})(n):n;var{is:uo,defineProperty:fo,getOwnPropertyDescriptor:go,getOwnPropertyNames:vo,getOwnPropertySymbols:bo,getPrototypeOf:wo}=Object,Ge=globalThis,Er=Ge.trustedTypes,yo=Er?Er.emptyScript:"",_o=Ge.reactiveElementPolyfillSupport,Oe=(n,t)=>n,Re={toAttribute(n,t){switch(t){case Boolean:n=n?yo:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Xe=(n,t)=>!uo(n,t),Br={attribute:!0,type:String,converter:Re,reflect:!1,useDefault:!1,hasChanged:Xe};Symbol.metadata??=Symbol("metadata"),Ge.litPropertyMetadata??=new WeakMap;var ae=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Br){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(t,r,e);o!==void 0&&fo(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){let{get:o,set:i}=go(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:o,set(a){let l=o?.call(this);i?.call(this,a),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Br}static _$Ei(){if(this.hasOwnProperty(Oe("elementProperties")))return;let t=wo(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Oe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Oe("properties"))){let e=this.properties,r=[...vo(e),...bo(e)];for(let o of r)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,o]of e)this.elementProperties.set(r,o)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let o=this._$Eu(e,r);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let o of r)e.unshift(hr(o))}else t!==void 0&&e.push(hr(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ar(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:Re).toAttribute(e,r.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,e){let r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let i=r.getPropertyOptions(o),a=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Re;this._$Em=o;let l=a.fromAttribute(e,i.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(t,e,r,o=!1,i){if(t!==void 0){let a=this.constructor;if(o===!1&&(i=this[t]),r??=a.getPropertyOptions(t),!((r.hasChanged??Xe)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:o,wrapped:i},a){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),i!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r){let{wrapped:a}=i,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,i,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};ae.elementStyles=[],ae.shadowRootOptions={mode:"open"},ae[Oe("elementProperties")]=new Map,ae[Oe("finalized")]=new Map,_o?.({ReactiveElement:ae}),(Ge.reactiveElementVersions??=[]).push("2.1.2");var pr=globalThis,Mr=n=>n,Je=pr.trustedTypes,Or=Je?Je.createPolicy("lit-html",{createHTML:n=>n}):void 0,mr="$lit$",se=`lit$${Math.random().toFixed(9).slice(2)}$`,ur="?"+se,xo=`<${ur}>`,ge=document,Te=()=>ge.createComment(""),je=n=>n===null||typeof n!="object"&&typeof n!="function",fr=Array.isArray,Fr=n=>fr(n)||typeof n?.[Symbol.iterator]=="function",dr=`[ 	
\f\r]`,De=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rr=/-->/g,Dr=/>/g,ue=RegExp(`>|${dr}(?:([^\\s"'>=/]+)(${dr}*=${dr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Tr=/'/g,jr=/"/g,Nr=/^(?:script|style|textarea|title)$/i,gr=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),c=gr(1),Lr=gr(2),Hr=gr(3),Et=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),Pr=new WeakMap,fe=ge.createTreeWalker(ge,129);function Ir(n,t){if(!fr(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Or!==void 0?Or.createHTML(t):t}var Ur=(n,t)=>{let e=n.length-1,r=[],o,i=t===2?"<svg>":t===3?"<math>":"",a=De;for(let l=0;l<e;l++){let h=n[l],m,f,v=-1,z=0;for(;z<h.length&&(a.lastIndex=z,f=a.exec(h),f!==null);)z=a.lastIndex,a===De?f[1]==="!--"?a=Rr:f[1]!==void 0?a=Dr:f[2]!==void 0?(Nr.test(f[2])&&(o=RegExp("</"+f[2],"g")),a=ue):f[3]!==void 0&&(a=ue):a===ue?f[0]===">"?(a=o??De,v=-1):f[1]===void 0?v=-2:(v=a.lastIndex-f[2].length,m=f[1],a=f[3]===void 0?ue:f[3]==='"'?jr:Tr):a===jr||a===Tr?a=ue:a===Rr||a===Dr?a=De:(a=ue,o=void 0);let qt=a===ue&&n[l+1].startsWith("/>")?" ":"";i+=a===De?h+xo:v>=0?(r.push(m),h.slice(0,v)+mr+h.slice(v)+se+qt):h+se+(v===-2?l:qt)}return[Ir(n,i+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},Pe=class n{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let i=0,a=0,l=t.length-1,h=this.parts,[m,f]=Ur(t,e);if(this.el=n.createElement(m,r),fe.currentNode=this.el.content,e===2||e===3){let v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(o=fe.nextNode())!==null&&h.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(let v of o.getAttributeNames())if(v.endsWith(mr)){let z=f[a++],qt=o.getAttribute(v).split(se),Lt=/([.?@])?(.*)/.exec(z);h.push({type:1,index:i,name:Lt[2],strings:qt,ctor:Lt[1]==="."?Qe:Lt[1]==="?"?tr:Lt[1]==="@"?er:be}),o.removeAttribute(v)}else v.startsWith(se)&&(h.push({type:6,index:i}),o.removeAttribute(v));if(Nr.test(o.tagName)){let v=o.textContent.split(se),z=v.length-1;if(z>0){o.textContent=Je?Je.emptyScript:"";for(let qt=0;qt<z;qt++)o.append(v[qt],Te()),fe.nextNode(),h.push({type:2,index:++i});o.append(v[z],Te())}}}else if(o.nodeType===8)if(o.data===ur)h.push({type:2,index:i});else{let v=-1;for(;(v=o.data.indexOf(se,v+1))!==-1;)h.push({type:7,index:i}),v+=se.length-1}i++}}static createElement(t,e){let r=ge.createElement("template");return r.innerHTML=t,r}};function ve(n,t,e=n,r){if(t===Et)return t;let o=r!==void 0?e._$Co?.[r]:e._$Cl,i=je(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(n),o._$AT(n,e,r)),r!==void 0?(e._$Co??=[])[r]=o:e._$Cl=o),o!==void 0&&(t=ve(n,o._$AS(n,t.values),o,r)),t}var Ze=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,o=(t?.creationScope??ge).importNode(e,!0);fe.currentNode=o;let i=fe.nextNode(),a=0,l=0,h=r[0];for(;h!==void 0;){if(a===h.index){let m;h.type===2?m=new ke(i,i.nextSibling,this,t):h.type===1?m=new h.ctor(i,h.name,h.strings,this,t):h.type===6&&(m=new rr(i,this,t)),this._$AV.push(m),h=r[++l]}a!==h?.index&&(i=fe.nextNode(),a++)}return fe.currentNode=ge,o}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},ke=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ve(this,t,e),je(t)?t===T||t==null||t===""?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==Et&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Fr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==T&&je(this._$AH)?this._$AA.nextSibling.data=t:this.T(ge.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Pe.createElement(Ir(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(e);else{let i=new Ze(o,this),a=i.u(this.options);i.p(e),this.T(a),this._$AH=i}}_$AC(t){let e=Pr.get(t.strings);return e===void 0&&Pr.set(t.strings,e=new Pe(t)),e}k(t){fr(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,o=0;for(let i of t)o===e.length?e.push(r=new n(this.O(Te()),this.O(Te()),this,this.options)):r=e[o],r._$AI(i),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let r=Mr(t).nextSibling;Mr(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},be=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,i){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=T}_$AI(t,e=this,r,o){let i=this.strings,a=!1;if(i===void 0)t=ve(this,t,e,0),a=!je(t)||t!==this._$AH&&t!==Et,a&&(this._$AH=t);else{let l=t,h,m;for(t=i[0],h=0;h<i.length-1;h++)m=ve(this,l[r+h],e,h),m===Et&&(m=this._$AH[h]),a||=!je(m)||m!==this._$AH[h],m===T?t=T:t!==T&&(t+=(m??"")+i[h+1]),this._$AH[h]=m}a&&!o&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Qe=class extends be{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}},tr=class extends be{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}},er=class extends be{constructor(t,e,r,o,i){super(t,e,r,o,i),this.type=5}_$AI(t,e=this){if((t=ve(this,t,e,0)??T)===Et)return;let r=this._$AH,o=t===T&&r!==T||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==T&&(r===T||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},rr=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){ve(this,t)}},Wr={M:mr,P:se,A:ur,C:1,L:Ur,R:Ze,D:Fr,V:ve,I:ke,H:be,N:tr,U:er,B:Qe,F:rr},$o=pr.litHtmlPolyfillSupport;$o?.(Pe,ke),(pr.litHtmlVersions??=[]).push("3.3.2");var Vr=(n,t,e)=>{let r=e?.renderBefore??t,o=r._$litPart$;if(o===void 0){let i=e?.renderBefore??null;r._$litPart$=o=new ke(t.insertBefore(Te(),i),i,void 0,e??{})}return o._$AI(n),o};var vr=globalThis,ne=class extends ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Vr(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Et}};ne._$litElement$=!0,ne.finalized=!0,vr.litElementHydrateSupport?.({LitElement:ne});var ko=vr.litElementPolyfillSupport;ko?.({LitElement:ne});(vr.litElementVersions??=[]).push("4.2.2");var Co={attribute:!0,type:String,converter:Re,reflect:!1,hasChanged:Xe},zo=(n=Co,t,e)=>{let{kind:r,metadata:o}=e,i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),r==="setter"&&((n=Object.create(n)).wrapped=!0),i.set(e.name,n),r==="accessor"){let{name:a}=e;return{set(l){let h=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,h,n,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,n,l),l}}}if(r==="setter"){let{name:a}=e;return function(l){let h=this[a];t.call(this,l),this.requestUpdate(a,h,n,!0,l)}}throw Error("Unsupported decorator location: "+r)};function s(n){return(t,e)=>typeof e=="object"?zo(n,t,e):((r,o,i)=>{let a=o.hasOwnProperty(i);return o.constructor.createProperty(i,r),a?Object.getOwnPropertyDescriptor(o,i):void 0})(n,t,e)}function b(n){return s({...n,state:!0,attribute:!1})}var we=(n,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(n,t,e),e);function R(n,t){return(e,r,o)=>{let i=a=>a.renderRoot?.querySelector(n)??null;if(t){let{get:a,set:l}=typeof r=="object"?e:o??(()=>{let h=Symbol();return{get(){return this[h]},set(m){this[h]=m}}})();return we(e,r,{get(){let h=a.call(this);return h===void 0&&(h=i(this),(h!==null||this.hasUpdated)&&l.call(this,h)),h}})}return we(e,r,{get(){return i(this)}})}}var Fe={class:"hmwc-scroll-lock",prop:"--hmwc-scroll-lock-size"},ir=class n{get scrollbarWidth(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}lockBodyScrolling(t){if(n.locks.add(t),document.body.classList.contains(Fe.class))return;let e=this.scrollbarWidth;document.body.classList.add(Fe.class),document.body.style.setProperty(Fe.prop,`${e}px`)}unlockBodyScrolling(t){n.locks.delete(t),!(n.locks.size>0)&&(document.body.classList.remove(Fe.class),document.body.style.removeProperty(Fe.prop))}scrollIntoView(t,e,r="vertical",o="smooth"){let i={top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)},a=i.top+e.scrollTop,l=i.left+e.scrollLeft,h=e.scrollLeft,m=e.scrollLeft+e.offsetWidth,f=e.scrollTop,v=e.scrollTop+e.offsetHeight;(r==="horizontal"||r==="both")&&(l<h?e.scrollTo({left:l,behavior:o}):l+t.clientWidth>m&&e.scrollTo({left:l-e.offsetWidth+t.clientWidth,behavior:o})),(r==="vertical"||r==="both")&&(a<f?e.scrollTo({top:a,behavior:o}):a+t.clientHeight>v&&e.scrollTo({top:a-e.offsetHeight+t.clientHeight,behavior:o}))}constructor(t){this.host=t,t.addController(this)}hostConnected(){}hostDisconnected(){}};ir.locks=new Set;var qr=ir;var Ne=class{hasDefaultSlot(){return Array.from(this.host.childNodes).some(t=>{let e=t.nodeType===t.TEXT_NODE,r=t.nodeType===t.ELEMENT_NODE,o=t.textContent.trim()==="",i=t.parentElement?.hasAttribute("slot");return e&&!o||r&&!i})}hasNamedSlot(t){let e=`[slot="${t}"]`;return this.host.querySelector(e)!==null}getDefaultSlot(){return Array.from(this.host.children).filter(t=>{let e=t.nodeType===t.TEXT_NODE,r=t.nodeType===t.ELEMENT_NODE,o=t.textContent.trim()==="",i=t.parentElement?.hasAttribute("slot");return t.slot?!1:e&&!o||r&&!i})}getNamedSlot(t){let e=`[slot="${t}"]`;return this.host.querySelector(e)}insert(t,e){let r=Array.from(this.host.shadowRoot?.querySelectorAll("slot")||[]);e?r.find(o=>o.name===e)?.appendChild(t):r.filter(o=>!o.name)[0]?.appendChild(t)}prepend(t,e){let r=Array.from(this.host.shadowRoot?.querySelectorAll("slot")||[]);e?r.find(o=>o.name===e)?.prepend(t):r.filter(o=>!o.name)[0]?.prepend(t)}test(t){return t?this.hasNamedSlot(t):this.hasDefaultSlot()}get(t){if(t){let e=this.getNamedSlot(t);return e?[e]:[]}else return this.getDefaultSlot()}constructor(t){this.slots=[],this.handleUpdate=e=>{let r=e.target,o=this.slots.includes("[default]")&&!r.name,i=r.name&&this.slots.includes(r.name);!o&&!i||this.host.requestUpdate()},this.host=t,this.slots=t.constructor.slots,t.addController(this)}hostConnected(){this.root=this.host.shadowRoot,this.root?.addEventListener("slotchange",this.handleUpdate)}hostDisconnected(){this.root?.removeEventListener("slotchange",this.handleUpdate)}};function u(n,t){let e={waitUntilFirstUpdate:!1,...t};return(r,o)=>{let{update:i}=r,a=Array.isArray(n)?n:[n];r.update=function(l){l&&(a.forEach(h=>{let m=h;if(l.has(m)){let f=l.get(m),v=this[m];f!==v&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[o](f,v)}}),i.call(this,l))}}}var Yr=d`
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
`;var ut=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},So=function(n,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?n!==t||!r:!t.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(n):r?r.value:t.get(n)},Ao=function(n,t,e,r,o){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?n!==t||!o:!t.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?o.call(n,e):o?o.value=e:t.set(n,e),e},or,p=class extends ne{static get styles(){let t=this._styles?this._styles:[];return[Yr,...Array.isArray(t)?t:[t]]}static set styles(t){let e=this._styles?this._styles:[];this._styles=[e,t]}tooltipChanged(){this.tooltip?this._tooltipEl?this._tooltipEl.textContent=this.tooltip:this._setupTooltip():this._teardownTooltip()}spanChanged(){this.span?this.reposition():(this.style.removeProperty("--colspan"),this.style.removeProperty("--rowspan"))}emit(t,e){let r=new CustomEvent(t,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...e});return this.dispatchEvent(r),r}changeStep(t){this.controllers.form?.changeStep(t)}static define(t,e=this){customElements.get(t)||customElements.define(t,class extends e{})}reposition(){let t=this.parentElement,e={cols:1,rows:1};this.span===!0?e.cols=t.cols:this.span instanceof Array?(e.cols=this.span[0]===!0?t.cols:this.span[0]||1,e.rows=this.span[1]===!0?t.rows:this.span[1]||1):e.cols=this.span||e.cols,e.cols>1&&this.style.setProperty("--colspan",`${e.cols}`),e.rows>1&&this.style.setProperty("--rowspan",`${e.rows+1}`),["col","row","justify"].forEach(o=>{let i=this[o];i&&this.style.setProperty(`--${o}`,`${i}`)})}applyStyles(){let t={xxs:"0.125rem",xs:"var(--hmwc-spacing-3x-small)",sm:"var(--hmwc-spacing-2x-small)",md:"var(--hmwc-spacing-x-small)",lg:"var(--hmwc-spacing-large)",xl:"var(--hmwc-spacing-x-large)",xxl:"var(--hmwc-spacing-2x-large)",auto:"auto"};this.top&&this.style.setProperty("--top",`${t[this.top]}`),this.bottom&&this.style.setProperty("--bottom",`${t[this.bottom]}`)}applyAnimation(){["HMWC-CARD","HMWC-ALERT","HMWC-ACCORDION","HMWC-ACCORDION-GROUP"].includes(this.tagName)&&this.style.setProperty("--animation","scale-in"),this.animation&&(this.animation instanceof Object?(this.animation.name&&this.style.setProperty("--animation",`${this.animation.name}`),this.animation.duration&&this.style.setProperty("--animation-duration",`${this.animation.duration}ms`),this.animation.easing&&this.style.setProperty("--animation-easing",`${this.animation.easing}`)):this.style.setProperty("--animation",`${this.animation}`))}firstUpdated(t){super.firstUpdated(t)}connectedCallback(){super.connectedCallback(),this.parentElement?.tagName==="HMWC-GRID"&&this.reposition(),this.applyStyles(),this.applyAnimation(),this.notificationStack&&this._ensureStackContainer(),this.tooltip&&this._setupTooltip(),this._revealObserver=new MutationObserver(t=>{for(let e of t)e.attributeName==="hidden"&&!this.hasAttribute("hidden")&&this._playReveal()}),this._revealObserver.observe(this,{attributes:!0,attributeFilter:["hidden"]})}_playReveal(){let t=Array.from(this.children).filter(i=>i instanceof HTMLElement&&!i.classList.contains("hmwc-notification-stack"));if(!t.length){this.classList.add("hmwc-reveal"),this.addEventListener("animationend",()=>this.classList.remove("hmwc-reveal"),{once:!0});return}let e=50,r=350,o="cubic-bezier(0.2, 0, 0.13, 1.5)";t.forEach((i,a)=>{i.animate([{opacity:0,transform:"translateY(12px)",filter:"blur(2px)"},{opacity:1,transform:"translateY(0)",filter:"blur(0)"}],{duration:r,delay:a*e,easing:o,fill:"both"})})}_ensureStackContainer(){this._stackContainer||(this._stackContainer=Object.assign(document.createElement("div"),{className:"hmwc-notification-stack"}),this.global||(this.style.position="relative"),this.appendChild(this._stackContainer))}_positionTooltip(){if(!this._tooltipEl)return;let t=this.getBoundingClientRect(),e=this._tooltipEl.getBoundingClientRect(),r=this.tooltipPlacement||"top",o=6,i=0,a=0;switch(r){case"top":default:i=t.top-e.height-o,a=t.left+t.width/2-e.width/2;break;case"top-start":i=t.top-e.height-o,a=t.left;break;case"top-end":i=t.top-e.height-o,a=t.right-e.width;break;case"bottom":i=t.bottom+o,a=t.left+t.width/2-e.width/2;break;case"bottom-start":i=t.bottom+o,a=t.left;break;case"bottom-end":i=t.bottom+o,a=t.right-e.width;break;case"left":i=t.top+t.height/2-e.height/2,a=t.left-e.width-o;break;case"left-start":i=t.top,a=t.left-e.width-o;break;case"left-end":i=t.bottom-e.height,a=t.left-e.width-o;break;case"right":i=t.top+t.height/2-e.height/2,a=t.right+o;break;case"right-start":i=t.top,a=t.right+o;break;case"right-end":i=t.bottom-e.height,a=t.right+o;break}this._tooltipEl.style.top=`${i}px`,this._tooltipEl.style.left=`${a}px`}_setupTooltip(){if(this._tooltipEl)return;let t=document.createElement("div");t.setAttribute("role","tooltip"),t.setAttribute("aria-live","off"),t.textContent=this.tooltip||"",Object.assign(t.style,{display:"none",position:"fixed",width:"max-content",maxWidth:"20rem",borderRadius:"var(--hmwc-tooltip-border-radius)",backgroundColor:"var(--hmwc-tooltip-background-color)",fontFamily:"var(--hmwc-tooltip-font-family)",fontSize:"var(--hmwc-tooltip-font-size)",fontWeight:"var(--hmwc-tooltip-font-weight)",lineHeight:"var(--hmwc-tooltip-line-height)",color:"var(--hmwc-tooltip-color)",padding:"var(--hmwc-tooltip-padding)",pointerEvents:"none",userSelect:"none",zIndex:"var(--hmwc-z-index-tooltip)"}),this._tooltipEl=t,document.body.appendChild(t),this.addEventListener("mouseenter",this._tooltipShow),this.addEventListener("mouseleave",this._tooltipHide),this.addEventListener("focusin",this._tooltipShow),this.addEventListener("focusout",this._tooltipHide),document.addEventListener("keydown",this._tooltipKeyDown)}_teardownTooltip(){this._tooltipEl&&(this._tooltipEl.remove(),this._tooltipEl=void 0),clearTimeout(this._tooltipTimeout),this.removeEventListener("mouseenter",this._tooltipShow),this.removeEventListener("mouseleave",this._tooltipHide),this.removeEventListener("focusin",this._tooltipShow),this.removeEventListener("focusout",this._tooltipHide),document.removeEventListener("keydown",this._tooltipKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this._teardownTooltip(),this._revealObserver?.disconnect()}constructor(){super(),this.controllers=this._createControllers(),this._tooltipShow=()=>{this._tooltipEl&&(clearTimeout(this._tooltipTimeout),this._tooltipTimeout=window.setTimeout(()=>{this._tooltipEl&&(this._tooltipEl.style.display="block",this._tooltipEl.setAttribute("aria-live","polite"),this._positionTooltip())},150))},this._tooltipHide=()=>{this._tooltipEl&&(clearTimeout(this._tooltipTimeout),this._tooltipTimeout=window.setTimeout(()=>{this._tooltipEl&&(this._tooltipEl.style.display="none",this._tooltipEl.setAttribute("aria-live","off"))},150))},this._tooltipKeyDown=t=>{t.key==="Escape"&&this._tooltipEl&&(this._tooltipEl.style.display="none")},or.set(this,!1),this.initialReflectedProperties=new Map}_createControllers(){let t,e,r=this;return{get slot(){return t??=new Ne(r)},get scroll(){return e??=new qr(r)}}}attributeChangedCallback(t,e,r){So(this,or,"f")||(this.constructor.elementProperties.forEach((o,i)=>{o.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),Ao(this,or,!0,"f")),super.attributeChangedCallback(t,e,r)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,r)=>{t.has(r)&&this[r]==null&&(this[r]=e)})}};or=new WeakMap;p.dependencies=[];p.slots=[];ut([s({type:String})],p.prototype,"tooltip",void 0);ut([s({type:String,attribute:"tooltip-placement"})],p.prototype,"tooltipPlacement",void 0);ut([u("tooltip")],p.prototype,"tooltipChanged",null);ut([s({type:Boolean,reflect:!0})],p.prototype,"notificationStack",void 0);ut([s({type:Boolean,reflect:!0})],p.prototype,"global",void 0);ut([s({type:Boolean})],p.prototype,"formTemplate",void 0);ut([s({type:Boolean})],p.prototype,"formGroup",void 0);ut([s({type:String})],p.prototype,"name",void 0);ut([s({type:Number})],p.prototype,"step",void 0);ut([s({type:Object})],p.prototype,"animation",void 0);ut([s({type:Number})],p.prototype,"span",void 0);ut([s({type:Number})],p.prototype,"col",void 0);ut([s({type:Number})],p.prototype,"row",void 0);ut([s({type:String})],p.prototype,"justify",void 0);ut([s({type:String})],p.prototype,"top",void 0);ut([s({type:String})],p.prototype,"bottom",void 0);ut([u("span")],p.prototype,"spanChanged",null);var Kr=d`
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
`;var Bt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},j=class extends p{static get styles(){let t=super.styles;return[...Array.isArray(t)?t:[t],Kr]}static set styles(t){super.styles=t}get(){return this.toggleComponent?this.checked:this.value}set(t){this.toggleComponent?this.checked=!!t:this.value=t}validate(){return!0}showValidity(){}checkValidity(){return!(this.required&&!String(this.value??"").trim())}reportValidity(){return!(this.required&&!String(this.value??"").trim())}hideValidation(){}connectedCallback(){super.connectedCallback()}constructor(){super(),this.value=""}};j.formComponent=!0;Bt([s({type:String,reflect:!0})],j.prototype,"name",void 0);Bt([s({type:String,reflect:!0})],j.prototype,"value",void 0);Bt([s({type:Boolean,reflect:!0})],j.prototype,"checked",void 0);Bt([s({type:Boolean,reflect:!0})],j.prototype,"required",void 0);Bt([s({type:Boolean,reflect:!0,attribute:"required-indicator"})],j.prototype,"requiredIndicator",void 0);Bt([s({type:Boolean,reflect:!0})],j.prototype,"disabled",void 0);Bt([s({type:Boolean,reflect:!0})],j.prototype,"invalid",void 0);Bt([s({type:String})],j.prototype,"error",void 0);Bt([s({type:String})],j.prototype,"label",void 0);Bt([s({type:String,reflect:!0,attribute:"label-pos"})],j.prototype,"labelPos",void 0);Bt([s({type:Boolean,reflect:!0})],j.prototype,"sm",void 0);Bt([s({type:Boolean,reflect:!0})],j.prototype,"md",void 0);Bt([s({type:Boolean,reflect:!0})],j.prototype,"lg",void 0);Bt([s({type:Boolean})],j.prototype,"autofocus",void 0);var ar=class n{edit(t){this.setAll(t),this.editing=!0,this.accordionGroups.size>0&&this.accordionGroups.forEach(e=>{e.forEach(r=>r.hide())}),queueMicrotask(()=>{this.snapshot=this.getFormData()??null,this.updateButtonState()})}cancelEdit(){this.editing=!1,this.snapshot=null,this.updateButtonState()}isDirty(){if(!this.editing||!this.snapshot)return!0;let t=this.getFormData();return t?JSON.stringify(t)!==JSON.stringify(this.snapshot):!1}set(t,e){if(!e)return;let r;try{r=JSON.parse(e)}catch{r=e}let o=l=>this.components.find(h=>h.getAttribute("name")===l),i=(l,h)=>{if(h&&typeof h=="object"&&!Array.isArray(h)&&l.hasAttribute("formGroup")&&Array.from(l.children).forEach(m=>{let f=m;if(!f.hasAttribute("name"))return;let v=f.getAttribute("name");v&&i(f,h[v])}),!this.FORM_COMPONENTS.includes(this.HMWCName(l))&&(typeof h!="object"||h===null)){this.getFormComponentsInElement(l).forEach(f=>i(f,h));return}if(["checkbox","switch"].includes(this.HMWCName(l)))h===!0||h==="true"||h===1||h==="1"?l.setAttribute("checked","true"):l.removeAttribute("checked");else{let m=typeof h=="string"?decodeURIComponent(h):String(h??"");if(m==null||m==="null"||m==='""')return;this.HMWCName(l)==="input"&&l.getAttribute("type")==="date"&&(l.initialValueDateParsed=!1),l.setAttribute("value",m)}},a=o(t);a&&(a.hasAttribute("formGroup")?Array.isArray(r)?Array.from(a.children).forEach((l,h)=>{i(l,r[h])}):r&&typeof r=="object"&&Object.keys(r).forEach(l=>{let h=o(l);h&&i(h,r[l])}):i(a,r))}setAll(t){let e={};Object.keys(t).forEach(r=>{e[r]=JSON.stringify(t[r])}),this.components.forEach(r=>{let o=r.name??r.id;o&&Object.keys(t).includes(o)&&this.set(o,e[o])})}validate(){this.components.forEach(t=>{this.FORM_COMPONENTS.includes(this.HMWCName(t))&&t.checkValidity&&(t.invalid=!t.checkValidity(),t.invalid&&t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}))}),this.updateButtonState()}validateEl(t){t?.checkValidity&&(t.invalid=!t.checkValidity()),this.updateButtonState()}clear(){this.editing=!1,this.snapshot=null,this.removeAllFromTemplates(),this.components.forEach(t=>{t.setAttribute("value",""),t.removeAttribute("value"),t.removeAttribute("checked"),t.removeAttribute("invalid")})}submit(t){if(t&&t.key!=="Enter")return;let e=!0;if(this.accordionGroups.size>0){for(let o=1;o<=this.steps;o++)if(!this.validateStep(o)){e=!1;let i=this.getAccordionForStep(o);i&&this.getComponentsInAccordion(i).forEach(a=>{this.validateEl(a)}),this.updateAccordionErrorIndicator(o),this.changeStep(o);break}e&&this.getOuterFormComponents().forEach(o=>{o.checkValidity&&!o.checkValidity()&&(e=!1,this.validateEl(o))})}else this.components.forEach(o=>{o.hasAttribute("formGroup")||(this.stepComponents.length?o.step===this.step&&o.checkValidity&&!o.checkValidity()&&(e=!1):o.checkValidity&&!o.checkValidity()&&(e=!1))});if(!e){this.validate();return}let r=this.getFormData(t);if(r)return this.host.emit("submit",{detail:{value:r}}),this.editing=!1,this.snapshot=null,r}changeStep(t){this.step=t,this.updateStepUI(),this.updateButtonState(),this.host.emit("hmwc-change",{detail:{value:this.getFormData()}})}increment(){if(this.step!==void 0&&this.step<this.steps){if(this.accordionGroups.size>0){if(this.isAccordionMultipleMode()){let e=!0;if(this.accordionGroups.forEach(o=>{o.forEach(i=>{i.active&&i.step!==void 0&&(this.validateStep(i.step)||(e=!1,this.getComponentsInAccordion(i).forEach(a=>{this.validateEl(a)}),this.updateAccordionErrorIndicator(i.step)))})}),!e)return;let r=this.findNextInactiveStep();r!==void 0&&this.changeStep(r);return}if(!this.validateStep(this.step)){let e=this.getAccordionForStep(this.step);e&&this.getComponentsInAccordion(e).forEach(r=>{this.validateEl(r)}),this.updateAccordionErrorIndicator(this.step);return}}this.changeStep(this.step+1)}}decrement(){if(this.step===void 0)return;let t=this.accordionGroups.size>0?1:0;this.step>t&&this.changeStep(this.step-1)}getFormData(t){if(t&&t?.key!=="Enter"||t&&this.HMWCName(document.activeElement||void 0)!=="input")return;t&&t.preventDefault();let e={},r=new Set;return this.components.forEach(o=>{if(o.hasAttribute("formGroup")){if(r.has(o)||this.findFormGroup(o))return;r.add(o);let l=o.name;l&&(e[l]=this.collectGroupData(o));return}if(!this.FORM_COMPONENTS.includes(this.HMWCName(o)))return;let i=this.findFormGroup(o);if(i){if(r.has(i))return;if(this.findFormGroup(i)){r.add(i);return}r.add(i);let l=this.collectGroupData(i),h=i.name;h&&(e[h]=l)}else{if(!o.name)return;let a=this.getComponentValue(o);if(Object.keys(e).includes(o.name)){let l=e[o.name];e[o.name]=[...Array.isArray(l)?l:[l],a]}else e[o.name]=a}}),e}findFormGroup(t){let e=t.parentElement;for(;e&&e!==this.host;){if(e.hasAttribute("formGroup"))return e;e=e.parentElement}return null}getComponentValue(t){if(["checkbox","switch"].includes(this.HMWCName(t)))return this.binary?t.checked?1:0:t.checked;let e=String(t.value??""),r;try{r=decodeURIComponent(e)}catch{r=e}if(this.HMWCName(t)==="input"&&t.getAttribute("type")==="number"){if(r==="")return;let o=Number(r);return isNaN(o)?r:o}if(!(this.HMWCName(t)==="input"&&t.getAttribute("type")==="date"&&r===""))return r}collectGroupData(t){let r=Array.from(t.children).filter(i=>!i.formTemplate);return this.shouldCollectAsArray(r)?r.map(i=>this.collectRowData(i)).filter(i=>!(i==null||typeof i=="object"&&!Array.isArray(i)&&Object.keys(i).length===0)):this.collectObjectData(t)}shouldCollectAsArray(t){if(t.length===0)return!1;let e=t[0];return this.FORM_COMPONENTS.includes(this.HMWCName(e))&&e.name?!1:this.FORM_COMPONENTS.includes(this.HMWCName(e))?t.every(i=>!i.name):!0}collectRowData(t){let e={};return this.FORM_COMPONENTS.includes(this.HMWCName(t))?this.getComponentValue(t):(this.getFormComponentsInElement(t).forEach(o=>{o.name&&(e[o.name]=this.getComponentValue(o))}),e)}collectObjectData(t){let e={};return this.getFormComponentsInElement(t).forEach(o=>{o.name&&(e[o.name]=this.getComponentValue(o))}),e}getFormComponentsInElement(t){let e=[],r=o=>{Array.from(o.children).forEach(i=>{i.hasAttribute("formGroup")||(this.FORM_COMPONENTS.includes(this.HMWCName(i))?e.push(i):r(i))})};return r(t),e}addFromTemplate(t,e=1,r=!1){let o=this.findTemplate(t);if(!o)return console.warn("FormController: No formTemplate found"),[];let i=o.parentElement;if(!i)return[];let a=[];for(let l=0;l<e;l++){let h=o.cloneNode(!0);h.removeAttribute("formTemplate"),h.formTemplate=!1,h.setAttribute("data-template-clone",""),h.style.display="",h.removeAttribute("hidden"),r||this.clearElementValues(h);let m=i.lastElementChild;m&&this.HMWCName(m)==="button"?i.insertBefore(h,m):i.appendChild(h),a.push(h)}return this.refreshHMWCFormComponents(),this.updateData(),a}addTemplateRow(t){let e=this.addFromTemplate(t);return e.length>0?e[0]:null}findTemplate(t){let e=t.parentElement;if(e){let i=Array.from(e.children).find(a=>a.formTemplate);if(i)return i}let r=t.closest("[formGroup]");if(r){let i=r.querySelector("[formTemplate]");if(i)return i}let o=e;for(;o&&o!==this.host;){let i=Array.from(o.children).find(a=>a.formTemplate);if(i)return i;o=o.parentElement}return null}removeFromTemplate(t){if(t.formTemplate){console.warn("FormController: Cannot remove a formTemplate element");return}t.remove(),this.refreshHMWCFormComponents(),this.updateData()}removeTemplateRow(t){this.removeFromTemplate(t)}removeAllFromTemplates(){this.templates.forEach((t,e)=>{Array.from(e.children).forEach(r=>{r!==t&&r.hasAttribute("data-template-clone")&&r.remove()})}),this.refreshHMWCFormComponents(),this.updateData()}clearElementValues(t){if(this.FORM_COMPONENTS.includes(this.HMWCName(t))){let r=t;r.value="",r.checked=!1,r.removeAttribute("value"),r.removeAttribute("checked"),r.removeAttribute("invalid")}this.getFormComponentsInElement(t).forEach(r=>{r.value="",r.checked=!1,r.removeAttribute("value"),r.removeAttribute("checked"),r.removeAttribute("invalid")})}initializeTemplates(){this.templates.clear(),this.host.querySelectorAll("[formTemplate]").forEach(e=>{let r=e.parentElement;r&&this.templates.set(r,e),e.style.display="none"}),this.templates.forEach((e,r)=>{Array.from(r.children).some(i=>{if(i===e)return!1;let a=i;return!(this.HMWCName(i)==="button"&&(a.templateAdd||a.templateRemove))})||this.addFromTemplate(r)})}initializeAccordionGroups(){if(this.accordionGroups.clear(),!this.controls.some(r=>r.increment||r.decrement))return;this.host.querySelectorAll("hmwc-accordion-group").forEach(r=>{let o=r,i=Array.from(r.querySelectorAll("hmwc-accordion"));i.length!==0&&(i.forEach((a,l)=>{a.step===void 0&&(a.step=l+1)}),this.accordionGroups.set(o,i),this.steps=i.length,(this.step===void 0||this.step===0)&&(this.step=1),i.forEach(a=>{this.listenerMap.has(a)||(this.listenerMap.set(a,!0),a.addEventListener("hmwc-expand",()=>{if(a.step!==void 0){if(this.accordionStepLock&&a.step!==this.step){a.hide();return}if(a.step>this.step)for(let l=this.step;l<a.step;l++)this.updateAccordionErrorIndicator(l);this.changeStep(a.step)}}))}))}),this.accordionGroups.size>0&&this.updateAccordionStepUI()}getComponentsInAccordion(t){return this.components.filter(e=>e.hasAttribute("formGroup")||!this.FORM_COMPONENTS.includes(this.HMWCName(e))?!1:t.contains(e))}getOuterFormComponents(){return this.components.filter(t=>{if(t.hasAttribute("formGroup")||!this.FORM_COMPONENTS.includes(this.HMWCName(t)))return!1;for(let[e]of this.accordionGroups)if(e.contains(t))return!1;return!0})}validateStep(t){let e=this.getAccordionForStep(t);if(!e)return!0;let r=this.getComponentsInAccordion(e),o=!0;return r.forEach(i=>{i.checkValidity&&!i.checkValidity()&&(o=!1)}),o}getAccordionForStep(t){for(let[,e]of this.accordionGroups){let r=e.find(o=>o.step===t);if(r)return r}}isAccordionMultipleMode(){for(let[t]of this.accordionGroups)if(t.multiple)return!0;return!1}findNextInactiveStep(){for(let[,t]of this.accordionGroups){let e=[...t].sort((r,o)=>(r.step??0)-(o.step??0));for(let r of e)if(!r.active&&r.step!==void 0)return r.step}}updateAccordionErrorIndicator(t){let e=this.getAccordionForStep(t);if(!e)return;let r=this.validateStep(t),o=this.accordionErrorIndicators.get(e);if(!r&&!o){let i=document.createElement("hmwc-icon");i.setAttribute("src","exclamation-circle"),i.setAttribute("slot","controls"),i.setAttribute("tooltip","This step has validation errors"),i.setAttribute("style","color: var(--hmwc-color-danger-600); font-size: 1.1em;"),e.appendChild(i),this.accordionErrorIndicators.set(e,i)}else r&&o&&(o.remove(),this.accordionErrorIndicators.delete(e))}refreshAccordionErrorIndicators(){this.accordionGroups.forEach(t=>{t.forEach(e=>{e.step!==void 0&&this.updateAccordionErrorIndicator(e.step)})})}updateAccordionStepUI(){this.step!==void 0&&this.accordionGroups.forEach((t,e)=>{let r=e.multiple;t.forEach(o=>{o.step===this.step?(o.show(),o.disabled=!1):r?this.accordionStepLock&&o.step!==void 0&&o.step>this.step?o.disabled=!0:o.disabled=!1:(o.hide(),this.accordionStepLock&&o.step!==void 0&&o.step>this.step?o.disabled=!0:o.disabled=!1)})})}handleKeydown(t){t.key==="Enter"&&this.HMWCName(document.activeElement||void 0)==="input"&&this.submit(t)}updateData(){let t=this.getFormData();t&&(this.data=t)}HMWCName(t){return t?t.tagName.split("HMWC-")[1]?.toLowerCase()??"":""}updateButtonState(){let t=!0;if(this.accordionGroups.size>0){if(this.step!==void 0&&this.step>=this.steps){for(let r=1;r<=this.steps;r++)if(!this.validateStep(r)){t=!1;break}t&&this.getOuterFormComponents().forEach(r=>{r.checkValidity&&!r.checkValidity()&&(t=!1)})}else this.step!==void 0&&!this.validateStep(this.step)&&(t=!1);this.refreshAccordionErrorIndicators()}else this.components.forEach(e=>{e.hasAttribute("formGroup")||(this.stepComponents.length?e.step===this.step&&e.checkValidity&&!e.checkValidity()&&(t=!1):e.checkValidity&&!e.checkValidity()&&(t=!1))});t&&this.editing&&!this.isDirty()&&(t=!1),t?this.getControl()?.removeAttribute("disabled"):this.getControl()?.setAttribute("disabled","true")}updateStepUI(){if(this.step===void 0)return;this.stepper&&(this.stepper.step=this.step),this.accordionGroups.size===0&&this.stepComponents.forEach(i=>{i.step===this.step?i.removeAttribute("hidden"):i.setAttribute("hidden","true")}),this.accordionGroups.size>0&&this.updateAccordionStepUI();let t=this.controls.find(i=>i.begin),e=this.controls.find(i=>i.increment),r=this.controls.find(i=>i.decrement),o=this.controls.find(i=>i.submit);this.accordionGroups.size>0?(t?.removeAttribute("hidden"),e?.removeAttribute("hidden"),r?.removeAttribute("hidden"),o?.removeAttribute("hidden"),t&&this.step===0?(t.removeAttribute("disabled"),e?.setAttribute("disabled","true"),r?.setAttribute("disabled","true"),o?.setAttribute("disabled","true")):this.step<this.steps?(t?.setAttribute("disabled","true"),e?.removeAttribute("disabled"),this.step===1?r?.setAttribute("disabled","true"):r?.removeAttribute("disabled"),o?.setAttribute("disabled","true")):this.step===this.steps&&(t?.setAttribute("disabled","true"),e?.setAttribute("disabled","true"),r?.removeAttribute("disabled"),o?.removeAttribute("disabled"))):t&&this.step===0?(t.removeAttribute("hidden"),e?.setAttribute("hidden","true"),r?.setAttribute("hidden","true"),o?.setAttribute("hidden","true")):this.step<this.steps?(t?.setAttribute("hidden","true"),e?.removeAttribute("hidden"),r?.removeAttribute("hidden"),o?.setAttribute("hidden","true")):this.step===this.steps&&(t?.setAttribute("hidden","true"),e?.setAttribute("hidden","true"),r?.removeAttribute("hidden"),o?.removeAttribute("hidden"))}getControl(){let t;return this.controls.forEach(e=>{this.step!==void 0&&this.step<this.steps?e.increment&&(t=e):e.submit&&(t=e)}),t}getHMWCFormComponents(){let t=[],e=[],r=[],o=i=>(i.forEach(a=>{let l=a,h=a;(a.hasAttribute("formGroup")||this.FORM_COMPONENTS.includes(this.HMWCName(a))&&!t.includes(l))&&t.push(l),this.HMWCName(a)==="button"&&(h.begin||h.submit||h.increment||h.decrement||h.templateAdd||h.templateRemove)&&!e.includes(h)&&e.push(h),l.step!==void 0&&(this.HMWCName(a)==="stepper"?this.stepper=a:this.HMWCName(a)!=="accordion"&&!r.includes(l)&&r.push(l));let m=a.querySelectorAll("*");m.length&&o(Array.from(m))}),{components:t,controls:e,stepComponents:r});return o(Array.from(this.host.children))}addElementListeners(t){if(this.listenerMap.has(t))return;this.listenerMap.set(t,!0);let e=this.HMWCName(t),r=i=>{let a=i.target;if(a?.hasAttribute("formGroup"))return!1;if(!i.detail?.autoFocused)return!0;let l=a?.getAttribute("value");return!(i.detail?.autoFocused&&!l)},o=()=>{this.validateEl(t),this.updateData()};t.addEventListener("hmwc-input",o),e==="dropdown"?t.addEventListener("hmwc-change",o):t.addEventListener("hmwc-blur",i=>r(i)&&this.validateEl(t))}addControlListeners(t){if(this.listenerMap.has(t))return;this.listenerMap.set(t,!0);let e=t,r=o=>()=>{let i=Date.now(),a=this.lastActionTime.get(t)??0;i-a<n.ACTION_COOLDOWN_MS||(this.lastActionTime.set(t,i),o())};e.begin?t.addEventListener("hmwc-click",r(()=>this.increment())):e.increment?t.addEventListener("hmwc-click",r(()=>this.increment())):e.decrement?t.addEventListener("hmwc-click",r(()=>this.decrement())):e.submit?t.addEventListener("hmwc-click",r(()=>this.submit())):e.templateAdd?t.addEventListener("hmwc-click",r(()=>this.handleTemplateAdd(t))):e.templateRemove&&t.addEventListener("hmwc-click",r(()=>this.handleTemplateRemove(t)))}handleTemplateAdd(t){this.addFromTemplate(t).length===0&&console.warn("FormController: No template found for add button. Add formTemplate attribute to the element to clone.")}handleTemplateRemove(t){let e=t.parentElement;for(;e;){let o=e.parentElement;if(o?.hasAttribute("formGroup")){this.removeFromTemplate(e);return}e=o}let r=t.parentElement;r&&r!==this.host?this.removeFromTemplate(r):console.warn("FormController: Cannot determine which element to remove")}refreshHMWCFormComponents(){let{components:t,controls:e,stepComponents:r}=this.getHMWCFormComponents();this.components=this.components.filter(o=>t.includes(o)),this.controls=this.controls.filter(o=>e.includes(o)),this.stepComponents=this.stepComponents.filter(o=>r.includes(o)),t.forEach(o=>{this.components.includes(o)||(this.components.push(o),this.addElementListeners(o))}),e.forEach(o=>{this.controls.includes(o)||(this.controls.push(o),this.addControlListeners(o))}),r.forEach(o=>{this.stepComponents.includes(o)||this.stepComponents.push(o)}),this.updateButtonState()}setupObserver(){if(this.observer)return;let t=e=>{let r=this.HMWCName(e),o=e;return this.FORM_COMPONENTS.includes(r)||r==="button"||e.hasAttribute("formGroup")||o.step!==void 0};this.observer=new MutationObserver(e=>{let r=!1;e.forEach(o=>{o.type==="childList"&&(o.addedNodes.forEach(i=>{if(i.nodeType===Node.ELEMENT_NODE){let a=i;t(a)&&(r=!0),a.querySelectorAll("*").forEach(h=>{t(h)&&(r=!0)})}}),o.removedNodes.forEach(i=>{if(i.nodeType===Node.ELEMENT_NODE){let a=i;t(a)&&(r=!0),a.querySelectorAll("*").forEach(h=>{t(h)&&(r=!0)})}}))}),r&&this.refreshHMWCFormComponents()}),this.observer.observe(this.host,{childList:!0,subtree:!0})}hostUpdated(){if(this.refreshHMWCFormComponents(),this.stepComponents.length&&this.accordionGroups.size===0){let r=this.controls.find(o=>o.begin);this.step=r?0:1}if(this.initialized)return;this.initialized=!0;let t=this.root.querySelector("div");if(!t)return;let e=Object.assign(document.createElement("form"),{styleMap:new Map([["display","contents"]])});e.append(t),this.root.append(e),this.initializeTemplates(),this.initializeAccordionGroups(),this.updateStepUI(),this.host.addEventListener("keydown",this.boundKeydownHandler),this.setupObserver()}hostDisconnected(){this.observer&&(this.observer.disconnect(),this.observer=null),this.host.removeEventListener("keydown",this.boundKeydownHandler)}constructor(t){this.initialized=!1,this.binary=!1,this.FORM_COMPONENTS=["input","dropdown","checkbox","switch","radio-group","calendar"],this.observer=null,this.listenerMap=new WeakMap,this.boundKeydownHandler=this.handleKeydown.bind(this),this.lastActionTime=new WeakMap,this.templates=new Map,this.accordionGroups=new Map,this.accordionStepLock=!1,this.accordionErrorIndicators=new WeakMap,this.editing=!1,this.snapshot=null,this.components=[],this.controls=[],this.stepComponents=[],this.errors=[],this.data={},this.host=t,this.root=this.host.shadowRoot,this.step=this.host.step,this.steps=this.host.steps??1,t.addController(this)}};ar.ACTION_COOLDOWN_MS=500;var Gr=ar;var Xr=d`
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
`;var _t=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},F=class extends p{connectedCallback(){super.connectedCallback(),this.form&&(this.controllers.form=new Gr(this)),this.img&&this.style.setProperty("--image-url",`url(${this.img})`),this.label&&this.controllers.slot.insert(Object.assign(document.createElement("slot"),{name:"label",part:"label",innerHTML:this.label})),this.validationType==="alert"&&this.controllers.slot.prepend(Object.assign(document.createElement("hmwc-alert"),{label:`Submission failed with ${this.controllers.form?.errors.length} error(s).`,message:"Please fix all errors and try again.",danger:!0,open:!!this.controllers.form?.errors.length}))}disconnectedCallback(){super.disconnectedCallback(),delete this.controllers.form}constructor(){super(),this.validationType="outline"}};F.styles=Xr;_t([s({type:String})],F.prototype,"label",void 0);_t([s({type:Boolean,reflect:!0})],F.prototype,"fluid",void 0);_t([s({type:Boolean,reflect:!0})],F.prototype,"scrollable",void 0);_t([s({type:Boolean,reflect:!0})],F.prototype,"center",void 0);_t([s({type:String,reflect:!0})],F.prototype,"align",void 0);_t([s({type:String,reflect:!0})],F.prototype,"justify",void 0);_t([s({type:String,reflect:!0})],F.prototype,"gap",void 0);_t([s({type:String,reflect:!0})],F.prototype,"pad",void 0);_t([s({type:String,reflect:!0})],F.prototype,"round",void 0);_t([s({type:Number,reflect:!0})],F.prototype,"elevation",void 0);_t([s({type:String,reflect:!0})],F.prototype,"img",void 0);_t([s({type:Boolean,reflect:!0})],F.prototype,"square",void 0);_t([s({type:Boolean,reflect:!0})],F.prototype,"form",void 0);_t([s({type:Number})],F.prototype,"steps",void 0);_t([s({type:String})],F.prototype,"validationType",void 0);var le={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},sr=n=>(...t)=>({_$litDirective$:n,values:t}),Ce=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var g=sr(class extends Ce{constructor(n){if(super(n),n.type!==le.ATTRIBUTE||n.name!=="class"||n.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(t=>n[t]).join(" ")+" "}update(n,[t]){if(this.st===void 0){this.st=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(let r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}let e=n.element.classList;for(let r of this.st)r in t||(e.remove(r),this.st.delete(r));for(let r in t){let o=!!t[r];o===this.st.has(r)||this.nt?.has(r)||(o?(e.add(r),this.st.add(r)):(e.remove(r),this.st.delete(r)))}return Et}});var y=n=>n??T;var Jr=d`
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
`;var Ht=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},x=class extends p{labelUpdate(){this.label?(this.setAttribute("role","img"),this.removeAttribute("aria-hidden"),this.setAttribute("aria-label",this.label)):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}connectedCallback(){super.connectedCallback()}render(){let o="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css",i=g({icon:!0,bi:!0,[`bi-${this.src}`]:!0,sm:!!this.sm,md:!!this.md,lg:!!this.lg,xl:!!this.xl,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
      <link rel="stylesheet" href=${o} />
      <i part="base" class=${i}></i>
    `}};x.styles=Jr;Ht([s({type:String,reflect:!0})],x.prototype,"src",void 0);Ht([s({type:String,reflect:!0})],x.prototype,"label",void 0);Ht([s({type:Boolean,reflect:!0})],x.prototype,"sm",void 0);Ht([s({type:Boolean,reflect:!0})],x.prototype,"md",void 0);Ht([s({type:Boolean,reflect:!0})],x.prototype,"lg",void 0);Ht([s({type:Boolean,reflect:!0})],x.prototype,"xl",void 0);Ht([s({type:Boolean,reflect:!0})],x.prototype,"primary",void 0);Ht([s({type:Boolean,reflect:!0})],x.prototype,"success",void 0);Ht([s({type:Boolean,reflect:!0})],x.prototype,"neutral",void 0);Ht([s({type:Boolean,reflect:!0})],x.prototype,"warning",void 0);Ht([s({type:Boolean,reflect:!0})],x.prototype,"danger",void 0);Ht([u("label")],x.prototype,"labelUpdate",null);x.define("hmwc-icon",x);var Zr=d`
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
    border-radius: var(--accordion-border-radius);
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
`;var Kt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},K=class extends F{show(){this.disabled||(this.active=!0)}hide(){this.disabled||(this.active=!1)}toggle(t){t&&t.preventDefault(),this.active?this.hide():this.show()}focus(){this.summary.focus()}blur(){this.body?.blur(),this.summary.blur()}handleControlsClick(t){t.stopPropagation()}handleKeyboardInput(t){let e=["Enter"," "],r=["ArrowUp","ArrowLeft"],o=["ArrowDown","ArrowRight"];[...e,...r,...o].includes(t.key)&&(t.preventDefault(),e.includes(t.key)?this.active?this.hide():this.show():r.includes(t.key)?this.hide():o.includes(t.key)&&this.show())}iconUpdate(){this.icon&&this.icon instanceof Object&&(this.iconColor=this.icon.color,this.icon=this.icon.icon)}activityUpdate(){this.emit(`hmwc-${this.active?"expand":"collapse"}`)}firstUpdated(){this.solo=!(this.parentElement instanceof ct)}render(){let t=g({accordion:!0,active:!!this.active,disabled:!!this.disabled,basic:!!this.basic,solo:!!this.solo,icon:!!this.icon||this.controllers.slot.test("icon")});return c`
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
    `}};K.styles=Zr;K.dependencies=[x];K.slots=["controls"];Kt([b()],K.prototype,"solo",void 0);Kt([s({type:Boolean,reflect:!0})],K.prototype,"active",void 0);Kt([s({type:String,reflect:!0})],K.prototype,"label",void 0);Kt([s({type:String,reflect:!0})],K.prototype,"icon",void 0);Kt([s({type:Boolean,reflect:!0})],K.prototype,"disabled",void 0);Kt([s({type:Boolean,reflect:!0})],K.prototype,"basic",void 0);Kt([R(".accordion__summary")],K.prototype,"summary",void 0);Kt([R(".accordion__body")],K.prototype,"body",void 0);Kt([b()],K.prototype,"iconColor",void 0);Kt([u("icon")],K.prototype,"iconUpdate",null);Kt([u("active")],K.prototype,"activityUpdate",null);var ti=Symbol.for(""),Eo=n=>{if(n?.r===ti)return n?._$litStatic$};var ze=(n,...t)=>({_$litStatic$:t.reduce((e,r,o)=>e+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+n[o+1],n[0]),r:ti}),Qr=new Map,br=n=>(t,...e)=>{let r=e.length,o,i,a=[],l=[],h,m=0,f=!1;for(;m<r;){for(h=t[m];m<r&&(i=e[m],(o=Eo(i))!==void 0);)h+=o+t[++m],f=!0;m!==r&&l.push(i),a.push(h),m++}if(m===r&&a.push(t[r]),f){let v=a.join("$$lit$$");(t=Qr.get(v))===void 0&&(a.raw=a,Qr.set(v,t=a)),e=l}return n(t,...e)},X=br(c),Qs=br(Lr),tn=br(Hr);var ei=d`
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
`;var Pt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},V=class extends p{connectedCallback(){super.connectedCallback()}render(){let t=g({badge:!0,icon:!!this.icon||this.controllers.slot.test("icon"),pill:!!this.pill,pulse:!!this.pulse,selectable:!!this.selectable,sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
      <div part="base" class=${t} role="status">
        <slot part="label" class="badge__label">${this.label?this.label:""}</slot>
        <slot name="icon" part="icon" class="badge__icon">${this.icon?c`<hmwc-icon src=${this.icon}></hmwc-icon>`:""}</slot>
      </div>
    `}};V.styles=ei;V.dependencies=[x];V.slots=["label","icon"];Pt([s({type:String})],V.prototype,"label",void 0);Pt([s({type:String,reflect:!0})],V.prototype,"icon",void 0);Pt([s({type:Boolean,reflect:!0})],V.prototype,"pill",void 0);Pt([s({type:Boolean,reflect:!0})],V.prototype,"selectable",void 0);Pt([s({type:Boolean,reflect:!0})],V.prototype,"pulse",void 0);Pt([s({type:Boolean,reflect:!0})],V.prototype,"sm",void 0);Pt([s({type:Boolean,reflect:!0})],V.prototype,"md",void 0);Pt([s({type:Boolean,reflect:!0})],V.prototype,"lg",void 0);Pt([s({type:Boolean,reflect:!0})],V.prototype,"primary",void 0);Pt([s({type:Boolean,reflect:!0})],V.prototype,"success",void 0);Pt([s({type:Boolean,reflect:!0})],V.prototype,"neutral",void 0);Pt([s({type:Boolean,reflect:!0})],V.prototype,"warning",void 0);Pt([s({type:Boolean,reflect:!0})],V.prototype,"danger",void 0);var ri=d`
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
`;var Qt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},J=class extends p{constructor(){super(...arguments),this.active=!0}start(){this.active||(this.active=!0)}stop(){this.active&&(this.active=!1)}toggle(){this.active=!this.active}render(){let t=g({spinner:!0,active:!!this.active,"speed-slower":this.speed==="slower","speed-slow":this.speed==="slow","speed-fast":this.speed==="fast","speed-faster":this.speed==="faster",sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
      <svg part="base" class=${t} role="progressbar" aria-label="loading">
        <circle part="track" class="spinner__track"></circle>
        <circle part="indicator" class="spinner__indicator"></circle>
      </svg>
    `}};J.styles=ri;Qt([s({type:Boolean,reflect:!0})],J.prototype,"active",void 0);Qt([s({type:String,reflect:!0})],J.prototype,"speed",void 0);Qt([s({type:Boolean,reflect:!0})],J.prototype,"sm",void 0);Qt([s({type:Boolean,reflect:!0})],J.prototype,"md",void 0);Qt([s({type:Boolean,reflect:!0})],J.prototype,"lg",void 0);Qt([s({type:Boolean,reflect:!0})],J.prototype,"primary",void 0);Qt([s({type:Boolean,reflect:!0})],J.prototype,"success",void 0);Qt([s({type:Boolean,reflect:!0})],J.prototype,"neutral",void 0);Qt([s({type:Boolean,reflect:!0})],J.prototype,"warning",void 0);Qt([s({type:Boolean,reflect:!0})],J.prototype,"danger",void 0);J.define("hmwc-spinner",J);var ii=d`
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
`;var M=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},w=class extends p{constructor(){super(...arguments),this.target="_blank"}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}isLink(){return!!this.href}handleClick(){if(this.disabled){if(this.submit){let t=this.closest("[form]");t&&t.controllers.form?.validate()}return}this.emit("hmwc-click")}handleFocus(){this.emit("hmwc-focus")}handleBlur(){this.emit("hmwc-blur")}handleMouseIn(){this.labelOnHover&&(this.label=this.labelOnHover)}handleMouseOut(){this.labelOnHover&&(this.label=this._label)}connectedCallback(){super.connectedCallback(),this._label=this.label||this.textContent||"",!this.sm&&!this.md&&!this.lg&&(this.md=!0)}render(){let t=this.isLink()?ze`a`:ze`button`,e=g({button:!0,icon:!!this.icon,prefix:!!this.prefix||!!this.img,suffix:!!this.suffix,invert:!!this.invert,basic:!!this.basic,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger,small:!!this.sm,medium:!!this.md,large:!!this.lg,loading:!!this.loading,circle:!!this.circle,pill:!!this.pill,outline:!!this.outline,disabled:!!this.disabled,fluid:!!this.fluid}),r=X`
      <${t}
        part='base'
        class='${e}'
        type=${this.submit?"submit":this.reset?"reset":"button"}
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
          ${this.prefix?X`<hmwc-icon src=${this.prefix}></hmwc-icon>`:this.img?X`<img src=${this.img} alt="btn-img" />`:""}
        </slot>

        <slot name='icon' class='button__icon'>
          ${this.icon&&!this.loading?X`<hmwc-icon part="icon" src=${this.icon} ?flex=${this.basic}></hmwc-icon>`:""}
        </slot>

        ${this.icon?"":X`<slot name="label" part="label" class="button__label">${this.label}</slot>`}

        <slot name="suffix" part="suffix" class="button__suffix">
          ${this.suffix?X`<hmwc-icon src=${this.suffix}></hmwc-icon>`:""}
        </slot>

        <slot name="badge" part="badge" class="button__badge"></slot>

        ${this.loading?X`<hmwc-spinner sm part="spinner"></hmwc-spinner>`:""}

      </${t}>
    `;return this.disabled&&this.disabledReason?X` <hmwc-tooltip label=${this.disabledReason} placement="top"> ${r} </hmwc-tooltip> `:r}};w.styles=ii;w.dependencies=[x,J,V];w.slots=["prefix"];M([s({type:String})],w.prototype,"label",void 0);M([s({type:String})],w.prototype,"labelOnHover",void 0);M([s({type:String})],w.prototype,"icon",void 0);M([s({type:String})],w.prototype,"prefix",void 0);M([s({type:String})],w.prototype,"suffix",void 0);M([s({type:String})],w.prototype,"img",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"primary",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"success",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"neutral",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"warning",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"danger",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"invert",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"basic",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"sm",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"md",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"lg",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"outline",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"pill",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"circle",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"fluid",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"disabled",void 0);M([s({type:String,attribute:"disabled-reason"})],w.prototype,"disabledReason",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"loading",void 0);M([s({type:String})],w.prototype,"value",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"submit",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"begin",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"increment",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"decrement",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"templateAdd",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"templateRemove",void 0);M([s({type:Boolean,reflect:!0})],w.prototype,"reset",void 0);M([s({type:String,reflect:!1})],w.prototype,"href",void 0);M([s({type:String})],w.prototype,"target",void 0);M([s({type:String})],w.prototype,"download",void 0);M([R(".button")],w.prototype,"button",void 0);var oi=d`
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
    overflow: hidden;
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
`;var Le=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},ct=class extends F{constructor(){super(...arguments),this.index=-1,this.accordions=[],this.listeners=new Map}showAll(){this.accordions.forEach(t=>t.show())}hideAll(){this.accordions.forEach(t=>t.hide())}getAccordions(){return this.controllers.slot.get().filter(t=>t instanceof K)}handleExpand(t){this.index=t,this.multiple||this.accordions.forEach((e,r)=>{r!==t&&e.hide()})}handleCollapse(t){this.index===t&&(this.index=-1)}indexUpdate(){this.emit("hmwc-change",{detail:{index:this.index,accordion:this.accordions[this.index]}})}accordionsUpdate(){let t={"--accordion-background":"var(--accordion-group-background)","--accordion-font-color":"var(--accordion-group-font-color)","--accordion-font-size":"var(--accordion-group-font-size)","--accordion-font-weight":"var(--accordion-group-font-weight)","--accordion-icon-color":"var(--accordion-group-icon-color)","--accordion-icon-size":"var(--accordion-group-icon-size)","--accordion-trigger-size":"var(--accordion-group-trigger-size)","--accordion-trigger-color":"var(--accordion-group-trigger-color)","--accordion-summary-padding":"var(--accordion-group-summary-padding)"},e=Object.keys(t).map(r=>`${r}: ${t[r]}`).join("; ");this.listeners.forEach((r,o)=>{o.removeEventListener("hmwc-expand",r.expand),o.removeEventListener("hmwc-collapse",r.collapse)}),this.listeners.clear(),this.accordions.forEach((r,o)=>{r.setAttribute("style",e);let i=()=>this.handleExpand(o),a=()=>this.handleCollapse(o);this.listeners.set(r,{expand:i,collapse:a}),r.addEventListener("hmwc-expand",i),r.addEventListener("hmwc-collapse",a)})}firstUpdated(){this.accordions=this.getAccordions()}render(){let t=g({"accordion-group":!0});return c`
      <div part="base" class=${t}>
        <slot></slot>
      </div>
    `}};ct.styles=oi;ct.dependencies=[w];ct.slots=["[default]"];Le([b()],ct.prototype,"index",void 0);Le([b()],ct.prototype,"accordions",void 0);Le([s({type:Boolean,reflect:!0})],ct.prototype,"multiple",void 0);Le([u("index",{waitUntilFirstUpdate:!0})],ct.prototype,"indexUpdate",null);Le([u("accordions")],ct.prototype,"accordionsUpdate",null);ct.define("hmwc-accordion-group",ct);K.define("hmwc-accordion",K);customElements.get("hmwc-button")||w.define("hmwc-button",w);var ai=d`
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

  :host(:not([notification])) {
    width: 100%;
  }

  .alert {
    position: relative;
    display: flex;
    margin: inherit;
    line-height: 1.6;
    color: var(--hmwc-color-neutral-700);
    background-color: var(--alert-background);
    border: solid var(--hmwc-panel-border-width) var(--hmwc-panel-border-color);
    border-top-width: calc(var(--hmwc-panel-border-width) * 3);
    border-top-color: var(--alert-font-color);
    border-radius: calc(1.5 * var(--hmwc-border-radius-medium));
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
      padding-inline-start: var(--hmwc-spacing-large);
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
      width: min-content;
      font-size: calc(1 * var(--hmwc-font-size-medium));

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
    &:not(success):not(neutral):not(warning):not(danger) {
      --alert-font-color: var(--hmwc-color-primary-600);
    }

    &.success {
      --alert-font-color: var(--hmwc-color-success-600);
    }

    &.neutral {
      --alert-font-color: var(--hmwc-color-neutral-600);
    }

    &.warning {
      --alert-font-color: var(--hmwc-color-warning-600);
    }

    &.danger {
      --alert-font-color: var(--hmwc-color-danger-600);
    }

    &:not(.notification) {
      width: 100%;
    }
  }
`,si=`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: var(--hmwc-spacing-small);
  position: fixed;
  top: var(--hmwc-navbar-width);
  inset-inline-end: 0;
  z-index: 950;
  width: 28rem;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
`;var wr={info:{variant:"primary",icon:"info-circle",dismissible:!0,duration:5e3},success:{variant:"success",icon:"check2-circle",dismissible:!0,duration:5e3},warning:{variant:"warning",icon:"exclamation-triangle",dismissible:!0,duration:8e3},error:{variant:"danger",icon:"exclamation-octagon",dismissible:!0,duration:1/0}};var et=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Bo=250,L=class extends p{constructor(){super(...arguments),this.closing=!1,this.active=!1,this.duration=1/0}show(){if(this.active||(this.active=!0,!this.stack))return;li(this).appendChild(this)}hide(){if(!this.active)return;this.closing=!0,setTimeout(()=>{this.closing=!1,this.active=!1,this.stack&&this.remove()},Bo)}cacheAlert(){let t=JSON.parse(localStorage.getItem("alerts")||"[]");localStorage.setItem("alerts",JSON.stringify(t.filter(e=>e!==this.id)))}removeCache(){if(!this.id)return;let t=[...JSON.parse(localStorage.getItem("alerts")||"[]"),this.id];localStorage.setItem("alerts",JSON.stringify(t))}activityUpdate(){this.resetTimeout(),this.emit(`hmwc-${this.active?"show":"hide"}`)}resetTimeout(){this.active&&(this.duration||0)<1/0&&(clearTimeout(this.timeout),this.timeout=window.setTimeout(()=>this.hide(),this.duration))}cacheUpdate(){this.cache&&(this.cached=JSON.parse(localStorage.getItem("alerts")||"[]").includes(this.id))}stackUpdate(){this.stack&&(this.duration=this.duration===1/0?5e3:this.duration)}connectedCallback(){super.connectedCallback(),!this.stack&&(this.active=this.active===void 0?!0:this.cached?!1:this.active)}render(){let t=g({alert:!0,active:!!this.active,closing:this.closing,dismissible:!!this.dismissible,stack:!!this.stack,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
      <div
        part="base"
        class=${t}
        role="alert"
        ?hidden=${!this.active}
        aria-hidden=${this.active?"false":"true"}
        @mousemove=${this.resetTimeout}>
        <slot name="icon" part="icon" class="alert__icon">
          <hmwc-icon
            src=${this.icon||this.primary?"info-circle":this.success?"check2-circle":this.neutral?"gear":this.warning?"exclamation-triangle":this.danger?"exclamation-octagon":"exclamation-circle"}></hmwc-icon>
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
    `}};L.styles=ai;L.dependencies=[x,w];et([b()],L.prototype,"cached",void 0);et([b()],L.prototype,"closing",void 0);et([b()],L.prototype,"timeout",void 0);et([s({type:Boolean,reflect:!0})],L.prototype,"active",void 0);et([s({type:Number})],L.prototype,"duration",void 0);et([s({type:String})],L.prototype,"title",void 0);et([s({type:String})],L.prototype,"label",void 0);et([s({type:String})],L.prototype,"icon",void 0);et([s({type:Boolean,reflect:!0})],L.prototype,"dismissible",void 0);et([s({type:Boolean,reflect:!0})],L.prototype,"cache",void 0);et([s({type:Boolean,reflect:!0})],L.prototype,"stack",void 0);et([s({type:Boolean,reflect:!0})],L.prototype,"primary",void 0);et([s({type:Boolean,reflect:!0})],L.prototype,"success",void 0);et([s({type:Boolean,reflect:!0})],L.prototype,"neutral",void 0);et([s({type:Boolean,reflect:!0})],L.prototype,"warning",void 0);et([s({type:Boolean,reflect:!0})],L.prototype,"danger",void 0);et([u("active",{waitUntilFirstUpdate:!0})],L.prototype,"activityUpdate",null);et([u("duration")],L.prototype,"resetTimeout",null);et([u("cache")],L.prototype,"cacheUpdate",null);et([u("stack")],L.prototype,"stackUpdate",null);var ye;function ni(){return ye||(ye=Object.assign(document.createElement("div"),{className:"hmwc-notification-stack"}),ye.style.cssText=si,ye.style.position="fixed"),ye.parentElement||document.body.appendChild(ye),ye}function li(n,t=!1){if(t){let e=document.querySelector("[notificationstack][global]");if(e?._stackContainer)return e._stackContainer;let r=document.querySelectorAll("[notificationstack]");if(r.length){let o=r[0];if(o._stackContainer)return o._stackContainer}return ni()}if(n){let e=n.closest("[notificationstack]");if(e?._stackContainer)return e._stackContainer}return ni()}function Mo(n={}){let t=Object.fromEntries(Object.entries(n).filter(([,i])=>i!==void 0)),e=n.preset?{...wr[n.preset],...t}:n,r=document.createElement("hmwc-alert"),o=li(n.relativeTo,!!e.global);return r.stack=!0,o.appendChild(r),e.title&&(r.title=e.title),e.label&&(r.label=e.label),e.icon&&(r.icon=e.icon),e.dismissible&&(r.dismissible=!0),e.duration!==void 0&&(r.duration=e.duration),e.variant&&(r[e.variant]=!0),n.className&&(r.className+=` ${n.className}`),n.style&&(typeof n.style=="string"?r.setAttribute("style",n.style):Object.assign(r.style,n.style)),n.onShow&&r.addEventListener("hmwc-show",()=>n.onShow(r)),n.onHide&&r.addEventListener("hmwc-hide",()=>n.onHide(r)),r.active=!0,{alert:r,close:()=>r.hide()}}L.define("hmwc-alert",L);var{I:xl}=Wr;var ci=n=>n.strings===void 0;var Oo={},hi=(n,t=Oo)=>n._$AH=t;var Gt=sr(class extends Ce{constructor(n){if(super(n),n.type!==le.PROPERTY&&n.type!==le.ATTRIBUTE&&n.type!==le.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ci(n))throw Error("`live` bindings can only contain a single expression")}render(n){return n}update(n,[t]){if(t===Et||t===T)return t;let e=n.element,r=n.name;if(n.type===le.PROPERTY){if(t===e[r])return Et}else if(n.type===le.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(r))return Et}else if(n.type===le.ATTRIBUTE&&e.getAttribute(r)===t+"")return Et;return hi(n),t}});var di=d`
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
`,pi=c`
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
`,mi=c`
  <svg part="icon" viewBox="0 0 16 16">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
      <g stroke="currentColor" stroke-width="2">
        <g transform="translate(2.285714, 6.857143)">
          <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
        </g>
      </g>
    </g>
  </svg>
`;var yr=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},at=class extends j{handleStateChange(){this.input.checked=!!this.checked,this.input.indeterminate=this.indeterminate}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return!0}reportValidity(){return this.input.reportValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("hmwc-change",{detail:{value:this.checked}})}handleBlur(){this.emit("blur",{})}handleFocus(){this.emit("focus",{})}handleInput(){this.emit("hmwc-input",{})}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0)}render(){let t=!this.checked&&this.indeterminate,e=g({checkbox:!0,checked:this.checked,indeterminate:t,sm:!!this.sm,md:!!this.md,lg:!!this.lg,disabled:!!this.disabled,required:!!this.required});return c`
      <label part="base" class=${e}>
        <input
          class="checkbox__input"
          type="checkbox"
          name=${y(this.name)}
          value=${y(this.value)}
          .indeterminate=${Gt(this.indeterminate)}
          .checked=${Gt(this.checked)}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-checked=${this.checked}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur} />

        <span part="control" class="checkbox__control"> ${this.checked?pi:""} ${t?mi:""} </span>

        <slot part="label" class="checkbox__label">${this.label}</slot>
      </label>
    `}};at.styles=di;at.toggle=!0;yr([s({type:Boolean,reflect:!0})],at.prototype,"indeterminate",void 0);yr([R(".checkbox__input")],at.prototype,"input",void 0);yr([u(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],at.prototype,"handleStateChange",null);at.define("hmwc-checkbox",at);var ui=d`
  :host {
    --divider-color: var(--hmwc-panel-border-color);
    --divider-size: var(--hmwc-panel-border-width);
    --divider-radius: 3rem / 3rem;
    --divider-spacing-start: inherit;
    --divider-spacing-end: inherit;

    display: contents;
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
`;var It=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},G=class extends p{constructor(){super(...arguments),this.horizontal=!0}orientationUpdate(){this.vertical&&(this.horizontal=!1)}render(){let t=g({divider:!0,horizontal:!!this.horizontal,vertical:!!this.vertical,"spacing-xs":this.spacing==="xs","spacing-sm":this.spacing==="sm","spacing-md":this.spacing==="md","spacing-lg":this.spacing==="lg","spacing-xl":this.spacing==="xl",sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`<div part="base" class=${t} role="separator" aria-orientation=${this.vertical?"vertical":"horizontal"}></div>`}};G.styles=ui;It([s({type:Boolean,reflect:!0})],G.prototype,"horizontal",void 0);It([s({type:Boolean,reflect:!0})],G.prototype,"vertical",void 0);It([s({type:String,reflect:!0})],G.prototype,"spacing",void 0);It([s({type:Boolean,reflect:!0})],G.prototype,"sm",void 0);It([s({type:Boolean,reflect:!0})],G.prototype,"md",void 0);It([s({type:Boolean,reflect:!0})],G.prototype,"lg",void 0);It([s({type:Boolean,reflect:!0})],G.prototype,"primary",void 0);It([s({type:Boolean,reflect:!0})],G.prototype,"success",void 0);It([s({type:Boolean,reflect:!0})],G.prototype,"neutral",void 0);It([s({type:Boolean,reflect:!0})],G.prototype,"warning",void 0);It([s({type:Boolean,reflect:!0})],G.prototype,"danger",void 0);It([u("vertical")],G.prototype,"orientationUpdate",null);G.define("hmwc-divider",G);var fi=d`
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
`;var ht=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},H=class extends p{constructor(){super(...arguments),this.MONTHS=[...Array(12).keys()].map(t=>new Date(0,t).toLocaleString("en",{month:"long"})),this.DAYS=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],this.dates=[],this.selection=[],this.dragAction="add",this.value=[],this.placeholder=[],this.month=new Date().getMonth(),this.year=new Date().getFullYear(),this.yearRange=100,this.yearRangeFuture=10,this.valueUpdate=()=>this.parseDates(),this.selectionUpdate=()=>this.emit("hmwc-change",{detail:{value:this.selection}}),this.dateUpdate=()=>this.dates=this.getDates(),this.multipleUpdate=()=>this.selection=this.selection.slice(0,1)}navigate(t,e=this.year){t!==void 0&&(e===this.year&&(t<0?(t=11,e--):t>11&&(t=0,e++)),this.month=t,this.year=e)}getYearOptions(){let t=new Date().getFullYear(),e=[],r=t-this.yearRange,o=t+this.yearRangeFuture;for(let i=r;i<=o;i++)e.push(i);return e}handleMonthSelect(t){let e=parseInt(t.detail?.value);isNaN(e)||(this.navigate(e,this.year),this.renderRoot.querySelector(".calendar__month-picker")?.hide())}handleYearSelect(t){let e=parseInt(t.detail?.value);isNaN(e)||(this.navigate(this.month,e),this.renderRoot.querySelector(".calendar__year-picker")?.hide())}closeSiblingPicker(t){let e=t==="month"?"calendar__year-picker":"calendar__month-picker",r=this.renderRoot.querySelector(`.${e}`);r?.active&&r.hide()}select(t){new Date(t).getMonth()===this.month&&(this.emit("select",{detail:{value:t}}),this.selection.find(e=>+e==+t)?this.selection=this.selection.filter(e=>+e!=+t):this.selection=[...this.multiple?this.selection:[],t])}parseDates(){this.selection=this.value.map(t=>new Date(t))}getDates(){let t=[],e={start:new Date(this.year,this.month,1),end:new Date(this.year,this.month+1,0)};for(let a=e.start.getDay()-1;a>=0;a--){let l=new Date(e.start);l.setDate(l.getDate()-(a+1)),t.push(l)}for(let a=1;a<=e.end.getDate();a++)t.push(new Date(this.year,this.month,a));let r=42-t.length;for(let a=1;a<=r;a++)t.push(new Date(this.year,this.month+1,a));let o=[];for(let a=0;a<t.length;a+=7)o.push(t.slice(a,a+7));return o.filter(a=>a.some(l=>l.getMonth()===this.month)).flat()}getDate(t){return this.dates.find(e=>{let r=new Date(e);return[r.getDate()===parseInt(t.innerText),r.getMonth()===this.month,r.getFullYear()===this.year,t.hasAttribute("current")].every(i=>i)})}startDrag(t){if(this.disabled)return;this.dragTarget=t.target;let e=this.getDate(this.dragTarget);e&&this.select(e),this.dragAction=this.dragTarget?.hasAttribute("selected")?"remove":"add"}drag(t){if(!this.dragTarget)return;let e=t.target;if(document.activeElement,[e===this.dragTarget,e.className!=="calendar__date",this.dragAction==="add"&&e.hasAttribute("selected"),this.dragAction==="remove"&&!e.hasAttribute("selected")].some(i=>i))return;let o=this.getDate(e);o&&this.select(o)}stopDrag(){this.dragAction="add",this.dragTarget=void 0}render(){let t=g({calendar:!0,navigation:!!this.navigation,basic:!!this.basic,disabled:!!this.disabled});return c`
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
    `}};H.styles=fi;H.dependencies=[w];ht([b()],H.prototype,"dates",void 0);ht([b()],H.prototype,"selection",void 0);ht([b()],H.prototype,"dragAction",void 0);ht([b()],H.prototype,"dragTarget",void 0);ht([s({type:Array,reflect:!0})],H.prototype,"value",void 0);ht([s({type:Array,reflect:!0})],H.prototype,"placeholder",void 0);ht([s({type:Number,reflect:!0})],H.prototype,"month",void 0);ht([s({type:Number,reflect:!0})],H.prototype,"year",void 0);ht([s({type:Boolean,reflect:!0})],H.prototype,"navigation",void 0);ht([s({type:Boolean,reflect:!0})],H.prototype,"multiple",void 0);ht([s({type:Boolean,reflect:!0})],H.prototype,"disabled",void 0);ht([s({type:Boolean,reflect:!0})],H.prototype,"basic",void 0);ht([s({type:Number,attribute:"year-range"})],H.prototype,"yearRange",void 0);ht([s({type:Number,attribute:"year-range-future"})],H.prototype,"yearRangeFuture",void 0);ht([u("value")],H.prototype,"valueUpdate",void 0);ht([u("selection",{waitUntilFirstUpdate:!0})],H.prototype,"selectionUpdate",void 0);ht([u(["month","year"])],H.prototype,"dateUpdate",void 0);ht([u("multiple",{waitUntilFirstUpdate:!0})],H.prototype,"multipleUpdate",void 0);H.define("hmwc-calendar",H);var gi=d`
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
`;var k=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},_=class n extends j{constructor(){super(...arguments),this.initialValueDateParsed=!1,this.autoFocusLost=!1,this.isManuallyTyping=!1,this._isDeleting=!1,this.lockCalendarNavigation=!1,this.dates=[],this.type="text",this.dateFormat="MM/DD/YYYY",this.open=!1,this._calendarLoseFocus=null}handleValueChange(){if(this.type==="tel"){let t=this.value.toString().split("").filter(e=>e!=="-");t.length===3?this.value=`${t.slice(0,3).join("")}-`:t.length===6?this.value=`${t.slice(0,3).join("")}-${t.slice(3,6).join("")}-`:t.length===10?this.value=`${t.slice(0,3).join("")}-${t.slice(3,6).join("")}-${t.slice(6).join("")}`:t.length===11?this.value=`${t[0]}-${t.slice(1,4).join("")}-${t.slice(4,7).join("")}-${t.slice(7).join("")}`:this.value=this.value.toString()}if(this.type==="date"){if(!this.value){this.dates=[],this.initialValueDateParsed=!1;return}if(!this.isManuallyTyping&&!this.initialValueDateParsed&&(this.initialValueDateParsed=!0,!isNaN(Date.parse(this.value)))){let t=new Date(this.value);this.updateDates([t])}}}handleValueMaxLength(){this.type!=="date"&&(this.enforceMaxLength(),this.checkDesiredLength())}handleCalendarToggle(){this.type==="date"&&(this._calendarLoseFocus&&(document.removeEventListener("mousedown",this._calendarLoseFocus),this._calendarLoseFocus=null),this.open&&(this._calendarLoseFocus=t=>{t.composedPath().includes(this)||(this.open=!1,this.emit("hmwc-hide",{}))},document.addEventListener("mousedown",this._calendarLoseFocus)))}handleLabelChange(){this.toggleAttribute("no-label",!this.label)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}clear(){this.value=this.input.value="",this.dates=[],this.valid=!1,this.invalid=!1,this.error="",this.emit("hmwc-change"),this.emit("hmwc-input")}getDates(){return this.dates}checkValidity(){let t=String(this.value??"");return this.required&&!t.trim()||this.minlength!=null&&t.trim().length>0&&t.length<this.minlength?!1:this.input?.checkValidity()}reportValidity(){let t=String(this.value??"");return this.required&&!t.trim()?(this.invalid=!0,this.emit("hmwc-invalid"),!1):this.minlength!=null&&t.trim().length>0&&t.length<this.minlength?(this.invalid=!0,this.error=`Value must be at least ${this.minlength} characters`,this.emit("hmwc-invalid"),!1):this.input?.reportValidity()}get validationMessage(){return this.input.validationMessage}set validationMessage(t){this.input.setCustomValidity(t)}formatDate(t){let e=t.getFullYear().toString(),r=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getDate().toString().padStart(2,"0");switch(this.dateFormat){case"YYYY-MM-DD":return`${e}-${r}-${o}`;case"YYYY/MM/DD":return`${e}/${r}/${o}`;case"DD/MM/YYYY":return`${o}/${r}/${e}`;case"DD-MM-YYYY":return`${o}-${r}-${e}`;case"MM-DD-YYYY":return`${r}-${o}-${e}`;case"MM/DD/YYYY":default:return`${r}/${o}/${e}`}}parseDate(t){if(!t||!t.trim())return null;let e=this.parseDateByFormat(t);if(e)return e;let r=Date.parse(t);if(!isNaN(r))return new Date(r);let o=[/^(\d{1,2})[\\-](\d{1,2})[\\-](\d{4})$/,/^(\d{4})[\\-](\d{1,2})[\\-](\d{1,2})$/,/^(\d{1,2})[\\-](\d{1,2})[\\-](\d{2})$/];for(let i of o){let a=t.match(i);if(a){let l,h,m;i===o[1]?[,l,h,m]=a.map(Number):i===o[2]?([,h,m,l]=a.map(Number),l+=2e3):[,h,m,l]=a.map(Number);let f=new Date(l,h-1,m);if(f.getFullYear()===l&&f.getMonth()===h-1&&f.getDate()===m)return f}}return null}parseDateByFormat(t){let e=this.dateFormat.includes("/")?"/":"-",r=t.split(e);if(r.length!==3)return null;let o=this.dateFormat.split(e),i=o.findIndex(z=>z==="YYYY"),a=o.findIndex(z=>z==="MM"),l=o.findIndex(z=>z==="DD");if(i===-1||a===-1||l===-1)return null;let h=parseInt(r[i],10),m=parseInt(r[a],10),f=parseInt(r[l],10);if(isNaN(h)||isNaN(m)||isNaN(f))return null;let v=new Date(h,m-1,f);return v.getFullYear()===h&&v.getMonth()===m-1&&v.getDate()===f?v:null}updateDates(t,e=!1){if(!t.length){e&&(this.dates=[]);return}t.length===0?this.value="":t.length===1?(t[0]instanceof Date||(t[0]=new Date(t[0])),e||(this.value=this.formatDate(t[0])),this.month=t[0].getMonth(),this.year=t[0].getFullYear()):t.length>1&&(e||(this.value=`Multiple Dates Selected (${t.length})`)),this.dates=t}handleFocus(){this.type==="date"&&(this.isManuallyTyping=!0),this.emit("hmwc-focus")}handleBlur(){if(this.type==="date"&&this.isManuallyTyping&&(this.parseAndUpdateDate(),this.isManuallyTyping=!1),this.type==="email"&&this.value){let e=String(this.value).trim();e!==this.value&&(this.value=e,this.input&&(this.input.value=e)),this.validateEmail()}this.type==="filepath"&&this.validateFilePath(),this.required&&!String(this.value??"").trim()?(this.invalid=!0,this.emit("hmwc-invalid")):this.required&&this.invalid&&(this.invalid=!1,this.error="");let t=String(this.value??"");this.minlength!=null&&t.trim().length>0&&t.length<this.minlength?(this.invalid=!0,this.error=`Value must be at least ${this.minlength} characters`,this.emit("hmwc-invalid")):this.minlength!=null&&this.invalid&&t.length>=this.minlength&&(this.invalid=!1,this.error=""),this.emit("hmwc-blur"),this.autoFocusLost=!0}handleInput(t){if(this.type==="date"&&this.isManuallyTyping){let r=this.input.value,o=this.input.selectionStart??r.length,i=this.countDigitsBefore(r,o),a=r.replace(/\D/g,""),l=!this._isDeleting,h=this.formatDateDigits(a,l);h!==r&&(this.input.value=h),this.value=h;let m=this.findCursorPosition(h,i);this.input.setSelectionRange(m,m)}else this.value=this.input.value;this.type==="number"&&this.input.validity?.badInput&&(this.input.value="",this.value="");let e=t?.inputType;if((e==="insertReplacementText"||e==="insertFromPaste")&&this.sanitizeAutofill(),this.enforceMaxLength(),this.checkDesiredLength(),this.invalid){let r=String(this.value??""),o=!this.required||r.trim().length>0,i=this.minlength==null||r.length>=this.minlength;o&&i&&(this.invalid=!1,this.error="")}this.emit("hmwc-input",{detail:{value:this.value}})}handleChange(){this.input.value&&(this.value=this.input.value),this.enforceMaxLength(),this.type==="date"&&this.parseAndUpdateDate(),this.type==="email"&&this.value&&this.validateEmail(),this.type==="filepath"&&this.value&&this.validateFilePath(),this.checkDesiredLength(),this.emit("hmwc-change")}handleKeyDown(t){this.type==="date"&&(t.key==="Backspace"||t.key==="Delete"?this._isDeleting=!0:this._isDeleting=!1,t.key==="Enter"&&(t.preventDefault(),this.parseAndUpdateDate(),this.blur()),t.key==="Escape"&&(t.preventDefault(),this.dates.length===1?this.value=this.formatDate(this.dates[0]):this.dates.length>1?this.value=`Multiple Dates Selected (${this.dates.length})`:this.value="",this.input.value=this.value,this.blur()),t.key.length===1&&!t.ctrlKey&&!t.metaKey&&!/\d/.test(t.key)&&t.preventDefault())}parseAndUpdateDate(){let t=this.input.value;if(!t||!t.trim()){this.updateDates([],!0);return}let e=this.parseDate(t);e?(this.updateDates([e],!0),this.value=this.formatDate(e),this.input.value=this.value,this.invalid=!1,this.error=""):(this.invalid=!0,this.error=`Invalid date format. Try ${this.dateFormat}`)}validateFilePath(){let t=this.value;if(!t||!t.trim()){this.invalid=!0,this.error="File path cannot be blank or whitespace only",this.emit("hmwc-invalid");return}let e=t.trim();if(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/u.test(e)){this.invalid=!0,this.error="File path cannot contain emojis",this.emit("hmwc-invalid");return}if(/[<>"|?*]/.test(e)||e.includes("\0")){this.invalid=!0,this.error='Path contains invalid characters: < > " | ? *',this.emit("hmwc-invalid");return}let i=e.replace(/\\/g,"/"),a=/^[a-zA-Z]:\//.test(i),l=i.startsWith("//"),h=i.startsWith("/")&&!l,m=/^\.{0,2}\//.test(i)||/^[^/]/.test(i);if(!(a||l||h||m)){this.invalid=!0,this.error="Please enter a valid file path",this.emit("hmwc-invalid");return}let f=l?i.slice(2):a?i.slice(3):h?i.slice(1):i;if(/\/{2,}/.test(f)){this.invalid=!0,this.error="Path contains empty segments",this.emit("hmwc-invalid");return}if(l&&i.slice(2).split("/").filter(Boolean).length<2){this.invalid=!0,this.error="UNC path must include a server and share name (e.g. \\\\server\\share)",this.emit("hmwc-invalid");return}this.invalid=!1,this.error=""}validateEmail(){let t=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e=this.value.trim();e&&(t.test(e)?(this.invalid=!1,this.error=""):(this.invalid=!0,this.error="Please enter a valid email address",this.emit("hmwc-invalid")))}getEffectiveMaxLength(){return this.maxlength!=null?this.maxlength:n.MAX_LENGTH_BY_TYPE[this.type]??n.DEFAULT_MAX_LENGTH}enforceMaxLength(){let t=this.getEffectiveMaxLength(),e=String(this.value??"");if(e.length<=t)return!1;let r=e.slice(0,t);return this.value=r,this.input&&(this.input.value=r),this.invalid=!0,this.error=`Value exceeds maximum length of ${t} characters`,this.emit("hmwc-invalid"),!0}checkDesiredLength(){if(this.minlength==null||this.maxlength==null||this.minlength!==this.maxlength)return;String(this.value??"").length===this.minlength?(this.valid=!0,this.invalid=!1):this.valid=!1}sanitizeAutofill(){let t=String(this.value??"");if(t)switch(this.enforceMaxLength(),this.type){case"email":{/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t.trim())||(this.value=this.input.value="",this.invalid=!0,this.error="Autofill value is not a valid email address",this.emit("hmwc-invalid"));break}case"tel":{/^[\d\s+().-]+$/.test(t)||(this.value=this.input.value="",this.invalid=!0,this.error="Autofill value is not a valid phone number",this.emit("hmwc-invalid"));break}case"number":{isNaN(Number(t))&&(this.value=this.input.value="",this.invalid=!0,this.error="Autofill value is not a valid number",this.emit("hmwc-invalid"));break}case"filepath":{this.validateFilePath(),this.invalid&&(this.value=this.input.value="");break}case"url":{try{new URL(t)}catch{this.value=this.input.value="",this.invalid=!0,this.error="Autofill value is not a valid URL",this.emit("hmwc-invalid")}break}default:break}}getDateFormatInfo(){let t=this.dateFormat.includes("/")?"/":"-",e=this.dateFormat.split(t).map(r=>r.length);return{separator:t,partLengths:e}}formatDateDigits(t,e=!1){let{separator:r,partLengths:o}=this.getDateFormatInfo(),i=o.reduce((m,f)=>m+f,0),a=t.slice(0,i),l="",h=0;for(let m=0;m<o.length&&h<a.length;m++){m>0&&(l+=r);let f=a.slice(h,h+o[m]);l+=f,h+=o[m]}if(e&&a.length>0&&a.length<i){let m=0;for(let f=0;f<o.length;f++)if(m+=o[f],a.length===m&&f<o.length-1){l+=r;break}}return l}countDigitsBefore(t,e){let r=0;for(let o=0;o<e&&o<t.length;o++)/\d/.test(t[o])&&r++;return r}findCursorPosition(t,e){let r=0;for(let o=0;o<t.length;o++){if(r===e){for(;o<t.length&&!/\d/.test(t[o]);)o++;return o}/\d/.test(t[o])&&r++}return t.length}handlePaste(t){if(this.type==="number"){let Yt=t.clipboardData?.getData("text");if(!Yt)return;t.preventDefault();let qe=Number(Yt.trim());if(!isNaN(qe)&&Yt.trim()!==""){let At=String(qe);this.input.value=At,this.value=At,this.emit("hmwc-input",{detail:{value:this.value}});return}let St="",he=!1;for(let At of Yt.trim())At==="-"&&St===""?St+=At:At==="."&&!he?(he=!0,St+=At):At>="0"&&At<="9"&&(St+=At);St&&!isNaN(Number(St))&&St!=="-"&&St!=="."&&(this.input.value=St,this.value=St,this.emit("hmwc-input",{detail:{value:this.value}}));return}if(this.type!=="date")return;let e=t.clipboardData?.getData("text");if(!e)return;t.preventDefault();let r=this.parseDate(e);if(r){let Yt=this.formatDate(r);this.input.value=Yt,this.value=Yt,this.updateDates([r],!0),this.invalid=!1,this.error="",this.input.setSelectionRange(Yt.length,Yt.length),this.emit("hmwc-input",{detail:{value:this.value}});return}let o=this.input.value,i=this.input.selectionStart??o.length,a=this.input.selectionEnd??i,l=o.slice(0,i),h=o.slice(a),f=(l+e+h).replace(/\D/g,""),v=this.formatDateDigits(f,!0),z=e.replace(/\D/g,"").length,qt=this.countDigitsBefore(o,i),Lt=this.findCursorPosition(v,qt+z);this.input.value=v,this.value=v,this.input.setSelectionRange(Lt,Lt),this.emit("hmwc-input",{detail:{value:this.value}})}handleClick(){!this.disabled&&this.type!=="date"||this.type==="date"&&!this.isManuallyTyping&&(this.open=!this.open)}handleClear(){this.clear(),this.input.focus()}handleToggle(){this.visible=!this.visible}handleCalendarChange(t){let e=t.detail.value;this.updateDates(e),this.multiSelect||document.addEventListener("mouseup",()=>{this.open=!1},{once:!0,capture:!0}),this.emit("hmwc-change")}connectedCallback(){super.connectedCallback(),this.toggleAttribute("no-label",!this.label),this.updateDates(this.dates),this.type==="tel"&&(this.pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}"),this.type==="email"&&!this.pattern&&(this.pattern="[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}"),this.type==="filepath"&&!this.pattern&&(this.pattern='([a-zA-Z]:\\\\|\\\\\\\\|/|\\.\\.?/|[^<>"|?*\\x00])([^<>"|?*\\x00]*)'),this.type==="filepath"&&!this.placeholder&&(this.placeholder="C:\\folder\\file.txt or /path/to/file"),!this.sm&&!this.md&&!this.lg&&(this.md=!0),this.type==="password"&&this.minlength===void 0&&(this.minlength=8),this.autofocus||(this.autoFocusLost=!0),this.type==="date"&&!this.placeholder&&(this.placeholder=this.dateFormat),(this.month||this.month&&this.year)&&(this.lockCalendarNavigation=!0),this.maxlength==null&&(this.maxlength=n.MAX_LENGTH_BY_TYPE[this.type]??n.DEFAULT_MAX_LENGTH),this.autocomplete==null&&["filepath","number"].includes(this.type)&&(this.autocomplete="off")}disconnectedCallback(){super.disconnectedCallback(),this._calendarLoseFocus&&(document.removeEventListener("mousedown",this._calendarLoseFocus),this._calendarLoseFocus=null)}render(){let t=this.textarea?ze`textarea`:ze`input`,e=this.type==="password"&&this.visible||this.type==="date"||this.type==="filepath",r=g({input:!0,"no-label":!this.label,small:!!this.sm,medium:!!this.md,large:!!this.lg,filled:!!this.filled,underline:!!this.underline,prefix:!!this.prefix,suffix:!!this.suffix||!!this.toggle,units:!this.units,pill:!!this.pill,toggle:!!this.toggle,clearable:!!this.clearable,textarea:!!this.textarea,disabled:!!this.disabled,date:this.type==="date",number:this.type==="number","no-spin":this.type==="number"&&(!this.max||Number(this.max)>100)||this.minlength!=null&&this.maxlength!=null&&this.minlength===this.maxlength&&this.minlength>3,calendar:this.open,valid:!!this.valid,invalid:!!this.invalid});return X`
      <div part='base' class=${r}>

        <!-- Label -->
        <label part="label" class="input__label" for='hmwc-input' aria-hidden=${!this.label}>
          <slot>${this.label}</slot>
        </label>

        <!-- Styling Wrappers -->
        <span class="input__wrapper">

            <!-- Calendar Toggle Button -->
            ${this.type==="date"&&!this.suffix?X`
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
                ${this.prefix?X`<hmwc-icon src=${this.prefix}></hmwc-icon>`:""}
              </slot>

              <!-- Input/Textarea Element -->
              <${t}
                part="input"
                id='hmwc-input'
                class="input__control"
                .value=${Gt(this.value)||""}
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
               ${this.suffix||this.loading||this.valid||this.invalid?X` <slot
                       name="suffix"
                       part="suffix"
                       class="input__suffix"
                       @click=${this.type==="date"?()=>this.open=!this.open:void 0}
                       style=${this.type==="date"?"cursor: pointer;":""}>
                       ${this.suffix?X`<hmwc-icon src=${this.suffix}></hmwc-icon>`:""}
                       ${!this.valid&&this.loading?X`<hmwc-spinner primary></hmwc-spinner>`:""}
                       ${this.loading?"":X` ${this.valid?X`<hmwc-icon success src="check-circle-fill"></hmwc-icon>`:""}
                           ${this.invalid&&!this.valid?X`<hmwc-icon danger src="x-circle-fill"></hmwc-icon>`:""}`}
                     </slot>`:""}

             ${this.units?X`<div part="units" class="input__units">${this.units}</div>`:""}

              <!-- Clear Button -->
               ${!this.loading&&this.clearable&&this.value&&!this.loading&&!this.valid?X` <slot name="clear" part="clear" class="input__clear">
                       <hmwc-button basic sm icon="x-circle-fill" @hmwc-click=${this.handleClear}></hmwc-button>
                     </slot>`:""}

              <!-- Password Visibility Toggle -->
              <slot name='toggle' part='toggle' class='input__toggle'>
                ${this.toggle?X` <hmwc-button basic sm icon=${this.visible?"eye-slash":"eye"} @hmwc-click=${this.handleToggle}> </hmwc-button> `:""}
              </slot>
            </div>


            <!-- Help Text -->
            <slot name="help" part="help" class="input__help" aria-hidden=${!this.help}>
                ${this.invalid&&this.error||this.help}
            </slot>


            <!-- Calendar -->
            ${this.type==="date"?X` <div part="calendar" class="input__calendar" @mouseup=${o=>o.stopPropagation()}>
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
    `}};_.styles=gi;_.dependencies=[x,w,H,J];_.DEFAULT_MAX_LENGTH=2e3;_.MAX_LENGTH_BY_TYPE={email:254,tel:17,url:2083,filepath:4096,number:20,password:128};k([b()],_.prototype,"initialValueDateParsed",void 0);k([b()],_.prototype,"autoFocusLost",void 0);k([b()],_.prototype,"isManuallyTyping",void 0);k([b()],_.prototype,"_isDeleting",void 0);k([b()],_.prototype,"lockCalendarNavigation",void 0);k([s({type:Array,reflect:!0})],_.prototype,"dates",void 0);k([s({type:String,reflect:!0})],_.prototype,"type",void 0);k([s({type:Boolean,reflect:!0})],_.prototype,"fluid",void 0);k([s({type:Boolean,reflect:!0})],_.prototype,"filled",void 0);k([s({type:Boolean,reflect:!0})],_.prototype,"pill",void 0);k([s({type:Boolean,reflect:!0})],_.prototype,"underline",void 0);k([s({type:String})],_.prototype,"prefix",void 0);k([s({type:String})],_.prototype,"suffix",void 0);k([s({type:String})],_.prototype,"pattern",void 0);k([s({type:String,attribute:"date-format"})],_.prototype,"dateFormat",void 0);k([s({type:Boolean})],_.prototype,"multiSelect",void 0);k([s({type:String,reflect:!0})],_.prototype,"units",void 0);k([s({type:Boolean,reflect:!0})],_.prototype,"loading",void 0);k([s({type:Boolean})],_.prototype,"valid",void 0);k([s({type:String})],_.prototype,"help",void 0);k([s({type:Boolean,reflect:!0})],_.prototype,"clearable",void 0);k([s({type:Boolean,reflect:!0})],_.prototype,"textarea",void 0);k([s({type:String})],_.prototype,"placeholder",void 0);k([s({type:Boolean,reflect:!0})],_.prototype,"readonly",void 0);k([s({type:Boolean,reflect:!0})],_.prototype,"toggle",void 0);k([s({type:Boolean})],_.prototype,"visible",void 0);k([s({type:Number})],_.prototype,"rows",void 0);k([s({type:Number})],_.prototype,"minlength",void 0);k([s({type:Number})],_.prototype,"maxlength",void 0);k([s({type:String})],_.prototype,"min",void 0);k([s({type:String})],_.prototype,"max",void 0);k([s({type:Number})],_.prototype,"month",void 0);k([s({type:Number})],_.prototype,"year",void 0);k([s({type:String})],_.prototype,"autocapitalize",void 0);k([s({type:Boolean,reflect:!0})],_.prototype,"autocorrect",void 0);k([s({type:String})],_.prototype,"autocomplete",void 0);k([s({type:Boolean})],_.prototype,"spellcheck",void 0);k([s({type:String})],_.prototype,"inputmode",void 0);k([b()],_.prototype,"open",void 0);k([R(".input__control")],_.prototype,"input",void 0);k([R("hmwc-calendar")],_.prototype,"datepicker",void 0);k([u("value")],_.prototype,"handleValueChange",null);k([u("value")],_.prototype,"handleValueMaxLength",null);k([u("open")],_.prototype,"handleCalendarToggle",null);k([u("label")],_.prototype,"handleLabelChange",null);_.define("hmwc-input",_);var vi=d`
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
`;var xt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},A=class extends p{constructor(){super(...arguments),this.expanded=!1,this.isExpanded=()=>{if(!this.item)return;let t=this.item.matches(":hover");return y(this.submenu)&&t},this.handleClick=t=>{if(this.disabled){t.preventDefault(),t.stopImmediatePropagation();return}this.emit("hmwc-select",{detail:{value:this.value}}),this.checkable&&(this.checked=!this.checked,this.emit("hmwc-change",{detail:{value:this}}))},this.handleMouseOver=t=>{t.stopPropagation(),this.closest("hmwc-menu")?.isTypeaheadActive||this.focus(),this.emit("focus",{detail:{value:this}}),(this.submenu||this.controllers.slot.test("submenu"))&&(this.expanded=!0)},this.handleMouseOut=t=>{t.stopPropagation(),this.emit("blur",{detail:{value:this}}),(this.submenu||this.controllers.slot.test("submenu"))&&(this.expanded=!1)}}handleExpandedChange(){if(!this.controllers.slot.test("submenu"))return;let t=this.controllers.slot.get("submenu")[0];t.active=this.expanded}render(){let t=!!this.submenu||this.controllers.slot.test("submenu"),e=g({"menu-item":!0,expanded:this.expanded,checked:!!this.checked,loading:!!this.loading,center:!!this.center,disabled:!!this.disabled,active:!!this.active,prefix:!!this.prefix||this.controllers.slot.test("prefix"),suffix:!!this.suffix||this.controllers.slot.test("suffix"),submenu:t,small:!!this.sm});return c`
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
    `}};A.styles=vi;A.dependencies=[x,J,at];A.slots=["prefix","suffix","submenu"];xt([b()],A.prototype,"expanded",void 0);xt([s({type:String})],A.prototype,"value",void 0);xt([s({type:String})],A.prototype,"label",void 0);xt([s({type:Boolean,reflect:!0})],A.prototype,"checkable",void 0);xt([s({type:Boolean,reflect:!0})],A.prototype,"checked",void 0);xt([s({type:Boolean,reflect:!0})],A.prototype,"loading",void 0);xt([s({type:String})],A.prototype,"prefix",void 0);xt([s({type:String})],A.prototype,"suffix",void 0);xt([s({type:Array})],A.prototype,"submenu",void 0);xt([s({type:Boolean,reflect:!0})],A.prototype,"disabled",void 0);xt([s({type:Boolean,reflect:!0})],A.prototype,"sm",void 0);xt([s({type:Boolean,reflect:!0})],A.prototype,"active",void 0);xt([s({type:Boolean,reflect:!0})],A.prototype,"center",void 0);xt([R(".menu-item")],A.prototype,"item",void 0);xt([u("expanded")],A.prototype,"handleExpandedChange",null);A.define("hmwc-menu-item",A);var bi=d`
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
      padding: var(--hmwc-spacing-3x-small) var(--hmwc-spacing-3x-small) var(--hmwc-spacing-3x-small) var(--hmwc-spacing-x-small);
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
`;var rt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},B=class extends p{constructor(){super(...arguments),this.filteredItems=[],this.menuItems=[],this._hasSlottedItems=!1,this._searchVisible=!1,this._typeaheadBuffer="",this._typeaheadMatchIndex=0,this._boundHandleTypeahead=this.handleTypeahead.bind(this),this.align="start"}get isTypeaheadActive(){return this._typeaheadBuffer.length>0}show(){this.active=!0}hide(){this.active=!1}toggle(){this.active=!this.active}select(t){this.menuItems.every(e=>!(e instanceof A)||e.value!==t)||this.emit("hmwc-select",{detail:{value:t}})}playAnimation(){window.requestAnimationFrame(()=>{let t=this.style.getPropertyValue("animation");this.style.setProperty("animation","none"),this.style.setProperty("animation",t)})}filterItems(){this.filteredItems=this.filter===""?this.menuItems:this.menuItems.filter(t=>(t.value||t.label)?.toLowerCase().includes(this.filter?.toLowerCase()||"")),this._hasSlottedItems&&this.menuItems.forEach(t=>{t.hidden=!this.filteredItems.includes(t)})}handleSearch(t){this.filter=t.target.value,this.filterItems()}getCheckableItems(){return this.menuItems.filter(t=>t instanceof A&&!!t.checkable)}areAllChecked(){let t=this.getCheckableItems();return t.length>0&&t.every(e=>e.checked)}areSomeChecked(){let t=this.getCheckableItems();return t.some(e=>e.checked)&&!t.every(e=>e.checked)}checkAll(){this.getCheckableItems().forEach(t=>{t.checked=!0}),this.requestUpdate(),this.emit("hmwc-change",{detail:{value:"all"}})}uncheckAll(){this.getCheckableItems().forEach(t=>{t.checked=!1}),this.requestUpdate(),this.emit("hmwc-change",{detail:{value:"none"}})}handleSelectAll(){this.areAllChecked()?this.uncheckAll():this.checkAll()}async toggleSearch(){this._searchVisible=!this._searchVisible,this._searchVisible?(await this.updateComplete,this.shadowRoot?.querySelector(".menu__search")?.focus()):(this.filter="",this.filterItems())}hideSearch(){this.filter||(this._searchVisible=!1)}applyActiveState(){this.menuItems.forEach(t=>{if(!(t instanceof A))return;let e=this.activeValue!==void 0&&String(t.value)===String(this.activeValue);t.active=e})}scrollToActive(){let t=0,e=20,r=()=>{let o=this.shadowRoot?.querySelector(".menu__items");if(!o)return;if(o.clientHeight===0&&t<e){t++,requestAnimationFrame(r);return}let i=this._hasSlottedItems?Array.from(this.querySelectorAll("hmwc-menu-item")):Array.from(o.querySelectorAll("hmwc-menu-item")),a=i.findIndex(l=>{let h=l;return this.activeValue!==void 0&&String(h.value)===String(this.activeValue)});if(a>=0&&i.length>0){let l=o.scrollHeight/i.length,h=a*l;o.scrollTop=h-o.clientHeight/2+l/2}};requestAnimationFrame(r)}handleTypeahead(t){if(this.filter!==void 0&&(this.searchOpen||this._searchVisible))return;if(t.key==="Escape"){this._typeaheadBuffer="",this._typeaheadMatchIndex=0,clearTimeout(this._typeaheadTimeout);return}if(t.key==="Tab"&&this._typeaheadBuffer){t.preventDefault();let r=this.getTypeaheadMatches(this._typeaheadBuffer.toLowerCase());r.length>1&&(this._typeaheadMatchIndex=t.shiftKey?(this._typeaheadMatchIndex-1+r.length)%r.length:(this._typeaheadMatchIndex+1)%r.length,this.selectTypeaheadMatch(r[this._typeaheadMatchIndex]),this.resetTypeaheadBufferTimer());return}if(t.key==="Backspace"){if(!this._typeaheadBuffer)return;if(t.preventDefault(),this._typeaheadBuffer=this._typeaheadBuffer.slice(0,-1),this._typeaheadMatchIndex=0,this._typeaheadBuffer){let r=this.getTypeaheadMatches(this._typeaheadBuffer.toLowerCase());r.length&&this.selectTypeaheadMatch(r[0])}this.resetTypeaheadBufferTimer();return}if(t.key===" "&&!this._typeaheadBuffer||t.key.length!==1||t.ctrlKey||t.metaKey||t.altKey)return;t.preventDefault(),this._typeaheadBuffer+=t.key,this._typeaheadMatchIndex=0;let e=this.getTypeaheadMatches(this._typeaheadBuffer.toLowerCase());e.length&&this.selectTypeaheadMatch(e[0]),this.resetTypeaheadBufferTimer()}getTypeaheadMatches(t){return(this._hasSlottedItems?Array.from(this.querySelectorAll("hmwc-menu-item")).filter(r=>!r.hidden):(this.filter!==void 0?this.filteredItems:this.menuItems).filter(r=>r instanceof A)).filter(r=>(r.label??r.value??"").toString().toLowerCase().startsWith(t))}selectTypeaheadMatch(t){this.menuItems.forEach(r=>{r instanceof A&&(r.active=!1)}),t.active=!0;let e=this.shadowRoot?.querySelector(".menu__items");if(e&&e.scrollHeight>e.clientHeight){let r=this._hasSlottedItems?Array.from(this.querySelectorAll("hmwc-menu-item")):Array.from(e.querySelectorAll("hmwc-menu-item")),o=r.indexOf(t);if(o>=0&&r.length>0){let i=e.scrollHeight/r.length,a=o*i;e.scrollTop=a-e.clientHeight/2+i/2}}requestAnimationFrame(()=>this._focusBase())}resetTypeaheadBufferTimer(){clearTimeout(this._typeaheadTimeout),this._typeaheadTimeout=setTimeout(()=>{this._typeaheadBuffer="",this._typeaheadMatchIndex=0,this.applyActiveState()},1e3)}handleSearchKeydown(t){t.key==="Enter"&&(t.preventDefault(),this.emit("hmwc-search-submit",{detail:{value:this.filter??""}}))}openUpdate(){this.playAnimation(),this.emit(this.active?"hmwc-show":"hmwc-hide"),this.active||(this._typeaheadBuffer="",this._typeaheadMatchIndex=0,clearTimeout(this._typeaheadTimeout)),this.active&&this.searchOpen&&this.filter!==void 0&&this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".menu__search")?.focus()})}activeValueUpdate(){this.applyActiveState()}itemsUpdate(){this.items&&!this.items.length||(this.menuItems=[],this.items?.forEach(t=>{let e=Object.assign(document.createElement("hmwc-menu-item"),{label:t,value:t});this.menuItems.push(e)}))}menuItemsUpdate(){let t=e=>this.select(e.target?.value||"");this.menuItems?.forEach(e=>e.removeEventListener("hmwc-select",t)),this.menuItems?.forEach(e=>e.addEventListener("hmwc-select",t)),this.activeValue!==void 0&&this.applyActiveState(),this.align&&this.align!=="start"&&this.alignUpdate()}prefixUpdate(){setTimeout(()=>{!this.prefix&&!this.suffix||this.menuItems.forEach(t=>{t instanceof A&&(t.prefix=this.prefix,t.suffix=this.suffix)})},1)}alignUpdate(){setTimeout(()=>{this.menuItems.forEach(t=>{t instanceof A&&(t.center=this.align==="center")})},1)}handleSlotChange(){let t=this.controllers.slot.get(),e=t.filter(r=>r instanceof A||r instanceof G);t.length&&(this._hasSlottedItems=!0,this.menuItems=e,this.filterItems())}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._typeaheadTimeout),this.removeEventListener("keydown",this._boundHandleTypeahead)}connectedCallback(){super.connectedCallback(),this.itemsUpdate(),this.handleSlotChange(),this.active===void 0&&(this.active=!0),this.parentElement?.tagName,this.addEventListener("keydown",this._boundHandleTypeahead)}get _baseDiv(){return this.shadowRoot?.querySelector('[part="base"]')}_focusBase(){let t=this._baseDiv;t&&this.active&&t.focus({preventScroll:!0})}updated(t){super.updated(t),t.has("active")&&this.active&&(this.activeValue!==void 0&&this.scrollToActive(),requestAnimationFrame(()=>this._focusBase()))}render(){let t=g({menu:!0,active:!!this.active,submenu:this.slot==="submenu",filter:this.filter!==void 0,"select-all":!!this.selectAll}),e=this.filter!==void 0?this.filteredItems:this.menuItems,r=this.searchOpen&&this.filter!==void 0,o=this.selectAll||this.filter!==void 0&&!this.searchOpen,i=this.filter!==void 0&&!this.searchOpen,a=this.filter!==void 0&&(this._searchVisible||r);return c`
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
              ${a?c`
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
    `}};B.styles=bi;B.dependencies=[A,G,_,at,x];rt([b()],B.prototype,"filteredItems",void 0);rt([b()],B.prototype,"menuItems",void 0);rt([b()],B.prototype,"_hasSlottedItems",void 0);rt([b()],B.prototype,"_searchVisible",void 0);rt([s({type:Boolean,reflect:!0})],B.prototype,"active",void 0);rt([s({type:Array})],B.prototype,"items",void 0);rt([s({type:String,reflect:!0})],B.prototype,"filter",void 0);rt([s({type:Boolean,attribute:"search-open",reflect:!0})],B.prototype,"searchOpen",void 0);rt([s({type:String,attribute:"search-placeholder"})],B.prototype,"searchPlaceholder",void 0);rt([s({attribute:"active-value"})],B.prototype,"activeValue",void 0);rt([s({type:Boolean,reflect:!0})],B.prototype,"selectAll",void 0);rt([s({type:String,reflect:!0})],B.prototype,"prefix",void 0);rt([s({type:String,reflect:!0})],B.prototype,"suffix",void 0);rt([s({type:String,reflect:!0})],B.prototype,"align",void 0);rt([u("active")],B.prototype,"openUpdate",null);rt([u("activeValue")],B.prototype,"activeValueUpdate",null);rt([u("items")],B.prototype,"itemsUpdate",null);rt([u("menuItems")],B.prototype,"menuItemsUpdate",null);rt([u(["prefix","suffix"])],B.prototype,"prefixUpdate",null);rt([u("align")],B.prototype,"alignUpdate",null);B.define("hmwc-menu",B);var wi=d`
  :host {
    --attachment-width: auto;
    --attachment-distance: 0px;
    --attachment-skidding: 0px;
    --attachment-arrow-size: 8px;
    --hmwc-panel-transparency: 0%;

    display: contents;
  }

  ::slotted(.attachment__content.active) {
    display: block;
  }

  ::slotted(.attachment__content) {
    display: none;
    position: fixed;
    width: var(--attachment-popup-width);
    box-shadow: var(--hmwc-shadow-large);
    z-index: var(--hmwc-z-index-dialog);
    margin: 0;
  }

  ::slotted(.attachment__anchor) {
    position: relative;
    height: fit-content;
    cursor: pointer;
  }

  .attachment__arrow {
    display: none;
    position: fixed;
    z-index: calc(var(--hmwc-z-index-dialog) + 2);
    width: var(--attachment-arrow-size);
    height: var(--attachment-arrow-size);
    background: var(--hmwc-menu-background, var(--hmwc-color-neutral-0));
    border: solid var(--hmwc-panel-border-width) var(--hmwc-panel-border-color);
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

    /* Bottom placements */
    &.placement-bottom {
      ::slotted(.attachment__content) {
        top: calc(anchor(bottom) + var(--distance));
        left: anchor(center);
        translate: -50% 0;
      }
    }
    &.placement-bottom-start {
      ::slotted(.attachment__content) {
        top: calc(anchor(bottom) + var(--distance));
        left: calc(anchor(left) + var(--skidding));
      }
    }
    &.placement-bottom-end {
      ::slotted(.attachment__content) {
        top: calc(anchor(bottom) + var(--distance));
        right: calc(anchor(right) - var(--skidding));
      }
    }

    /* Top placements */
    &.placement-top {
      ::slotted(.attachment__content) {
        bottom: calc(anchor(top) + var(--distance));
        left: anchor(center);
        translate: -50% 0;
      }
    }
    &.placement-top-start {
      ::slotted(.attachment__content) {
        bottom: calc(anchor(top) + var(--distance));
        left: calc(anchor(left) + var(--skidding));
      }
    }
    &.placement-top-end {
      ::slotted(.attachment__content) {
        bottom: calc(anchor(top) + var(--distance));
        right: calc(anchor(right) - var(--skidding));
      }
    }

    /* Right placements */
    &.placement-right {
      ::slotted(.attachment__content) {
        left: calc(anchor(right) + var(--distance));
        top: anchor(center);
        translate: 0 -50%;
      }
    }
    &.placement-right-start {
      ::slotted(.attachment__content) {
        left: calc(anchor(right) + var(--distance));
        top: calc(anchor(top) + var(--skidding));
      }
    }
    &.placement-right-end {
      ::slotted(.attachment__content) {
        left: calc(anchor(right) + var(--distance));
        bottom: calc(anchor(bottom) - var(--skidding));
      }
    }

    /* Left placements */
    &.placement-left {
      ::slotted(.attachment__content) {
        right: calc(anchor(left) + var(--distance));
        top: anchor(center);
        translate: 0 -50%;
      }
    }
    &.placement-left-start {
      ::slotted(.attachment__content) {
        right: calc(anchor(left) + var(--distance));
        top: calc(anchor(top) + var(--skidding));
      }
    }
    &.placement-left-end {
      ::slotted(.attachment__content) {
        right: calc(anchor(left) + var(--distance));
        bottom: calc(anchor(bottom) - var(--skidding));
      }
    }
  }
`;var vt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},O=class extends p{constructor(){super(...arguments),this.active=!1,this.name=Math.random().toString(36).substring(7),this.trigger="click",this.placement="bottom",this.distance=2,this.skidding=0,this.flip=!0,this.sync=!1,this.stayOpen=!1,this.arrow=!1,this.nameUpdate=this.register}show(){this.active=!0}hide(){this.active=!1}toggle(){this.content&&(this.active=!this.active,this.content instanceof B&&(this.content.active=this.active))}register(){nr.includes(this.name)&&(this.name=Math.random().toString(36).substring(7)),nr.push(this.name)}unregister(){nr.splice(nr.indexOf(this.name),1)}retrieve(){this.content=this.controllers.slot.get()[0],this.content?.tagName==="SLOT"&&(this.content=this.content.children[0]),this.anchor||(this.anchor=this.controllers.slot.get("anchor")[0]),this.anchor instanceof String&&(this.anchor=document.querySelector(`#${this.anchor}`),this.append(this.anchor)),this.content&&this.content.classList.add("attachment__content"),this.anchor&&(this.anchor.classList.add("attachment__anchor"),this.anchor.slot="anchor",this.anchor.style.setProperty("anchor-name",`--${this.name}`),this.content&&this.content.style.setProperty("position-anchor",`--${this.name}`))}triggerOnClick(t){if(!this.anchor||!(this.anchor instanceof HTMLElement))return;if(this._clickHandler){let r=this.anchor instanceof p?"hmwc-click":"click";this.anchor.removeEventListener(r,this._clickHandler),this._clickHandler=void 0}if(this._documentHandler&&(document.removeEventListener("mousedown",this._documentHandler),this._documentHandler=void 0),!t)return;let e=this.anchor instanceof p?"hmwc-click":"click";this._clickHandler=()=>{this.toggle()},this._documentHandler=r=>{if(!this.content)return;let o=r.composedPath();if(!o.includes(this.anchor)){if(o.includes(this.content)){this.stayOpen||this.hide();return}this.hide()}},this.anchor.addEventListener(e,this._clickHandler),document.addEventListener("mouseup",this._documentHandler)}triggerOnHover(t){if(!this.anchor||!(this.anchor instanceof HTMLElement))return;t&&this.triggerOnHover(!1);let e=t?"add":"remove";this[`${e}EventListener`]("mouseover",this.show),this[`${e}EventListener`]("mouseout",this.hide)}activityUpdate(){this.trigger==="hover"&&this.emit(`hmwc-${this.active?"focus":"blur"}`),!(!this.anchor||!(this.anchor instanceof HTMLElement))&&(this.width=this.anchor.offsetWidth,this.anchor.style.setProperty("anchor-name",`--${this.name}`),this.content&&(this.content.classList.add("attachment__content"),this.content.classList.toggle("active",!!this.active),this.content.style.setProperty("position-anchor",`--${this.name}`),this.content instanceof B&&(this.content.active=this.active),this.arrow&&this.active&&requestAnimationFrame(()=>this.positionArrow())))}positionArrow(){let t=this.shadowRoot?.querySelector(".attachment__arrow");if(!t||!this.anchor||!(this.anchor instanceof HTMLElement))return;let e=this.anchor.getBoundingClientRect(),r=e.left+e.width/2;t.style.top="",t.style.bottom="",t.style.left="",t.style.right="",t.style.translate="",t.style.borderTop="",t.style.borderBottom="",t.style.borderLeft="",t.style.borderRight="",t.style.clipPath="",this.placement.startsWith("bottom")?(t.style.top=`${e.bottom+this.distance}px`,t.style.left=`${r}px`,t.style.translate="-50% -50%",t.style.borderRight="none",t.style.borderBottom="none",t.style.clipPath="polygon(0 0, 100% 0, 0 100%)"):this.placement.startsWith("top")&&(t.style.top=`${e.top-this.distance}px`,t.style.left=`${r}px`,t.style.translate="-50% -50%",t.style.borderLeft="none",t.style.borderTop="none",t.style.clipPath="polygon(100% 0, 100% 100%, 0 100%)")}triggerUpdate(){this.trigger==="click"?(this.triggerOnClick(!0),this.triggerOnHover(!1)):this.trigger==="hover"&&(this.triggerOnHover(!0),this.triggerOnClick(!1))}disconnectedCallback(){super.disconnectedCallback(),this.unregister(),this.triggerOnClick(!1),this.triggerOnHover(!1)}connectedCallback(){super.connectedCallback(),this.retrieve()}firstUpdated(){this.shadowRoot?.querySelectorAll("slot")?.forEach(e=>{e.addEventListener("slotchange",()=>this.handleSlotChange())})}handleSlotChange(){this.retrieve(),this.triggerUpdate(),this.content instanceof B&&(this.content.active=this.active)}render(){let t=g({attachment:!0,active:!!this.active,flip:!!this.flip,sync:!!this.sync,arrow:!!this.arrow,[`placement-${this.placement}`]:!0});return c`
      <div
        part="base"
        class=${t}
        style=${`--attachment-width: ${this.width}px; --distance:${this.distance}px; --skidding:${this.skidding}px;`}>
        <slot name="anchor" part="anchor"></slot>
        ${this.arrow?c`<div part="arrow" class="attachment__arrow"></div>`:""}
        <slot part="content"> </slot>
      </div>
    `}};O.styles=wi;O.slots=["[default]","anchor"];vt([s({type:Boolean,reflect:!0})],O.prototype,"active",void 0);vt([s({type:String})],O.prototype,"name",void 0);vt([s({type:String})],O.prototype,"anchor",void 0);vt([s({type:String})],O.prototype,"trigger",void 0);vt([s({type:String,reflect:!0})],O.prototype,"placement",void 0);vt([s({type:Number})],O.prototype,"distance",void 0);vt([s({type:Number})],O.prototype,"skidding",void 0);vt([s({type:Boolean,reflect:!0})],O.prototype,"flip",void 0);vt([s({type:Boolean,reflect:!0})],O.prototype,"sync",void 0);vt([s({type:Boolean,reflect:!0})],O.prototype,"stayOpen",void 0);vt([s({type:Boolean,reflect:!0})],O.prototype,"arrow",void 0);vt([b()],O.prototype,"content",void 0);vt([b()],O.prototype,"width",void 0);vt([u("name",{waitUntilFirstUpdate:!0})],O.prototype,"nameUpdate",void 0);vt([u("active")],O.prototype,"activityUpdate",null);vt([u("trigger")],O.prototype,"triggerUpdate",null);var nr=[];O.define("hmwc-attachment",O);var yi=d`
  :host {
    --avatar-size: 2rem;
    --avatar-color: var(--hmwc-color-neutral-400);
    --avatar-status-color: none;
    --avatar-font-size: calc(1.22 * var(--hmwc-font-size-x-small));
    display: flex;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--avatar-size);
    height: var(--avatar-size);
    background-color: var(--avatar-color);
    font-family: var(--hmwc-font-sans);
    font-size: calc(var(--avatar-size) * 0.5);
    font-weight: var(--hmwc-font-weight-normal);
    color: var(--hmwc-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;

    & .avatar__label {
      display: flex;
      font-weight: var(--hmwc-font-weight-bold);
      color: var(--hmwc-color-neutral-0);
      text-transform: uppercase;
      line-height: 1;
    }

    & .avatar__icon {
      --avatar-size: calc(var(--hmwc-font-size-x-large) * 1.1);
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &.status-active,
    &.status-inactive,
    &.status-busy {
      &::after {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--avatar-status-color);
        position: absolute;
        right: 0;
        bottom: 0;
        animation: pulse 6s infinite;
      }
    }

    &.circle {
      border-radius: var(--hmwc-border-radius-circle);
    }

    &.rounded {
      border-radius: var(--hmwc-border-radius-medium);
    }

    &.square {
      border-radius: 0;
    }

    &.sm {
      --avatar-size: 1.8rem;
    }

    &.md {
      --avatar-size: 3.5rem;
      --avatar-font-size: var(--hmwc-font-size-x-large);
      gap: var(--hmwc-spacing-x-small);
    }

    &.lg {
      --avatar-size: 5rem;
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
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--avatar-status-color);
    }
    35% {
      box-shadow: 0 0 0 0.15rem transparent;
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
`;var te=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},it=class extends p{constructor(){super(...arguments),this.icon="person-fill",this.shape="circle"}updateInitials(){this.name&&(this.initials=this.name.split(" ").map(t=>t[0]).join(""))}render(){let t=g({avatar:!0,circle:this.shape==="circle",square:this.shape==="square",[`status-${this.status}`]:!0,selectable:!!this.selectable,sm:!!this.sm,md:!!this.md,lg:!!this.lg});return c`
      <slot part="base" class=${t} aria-label=${y(this.name)}>
        ${this.name?c`<div part="label" class="avatar__label">${this.initials}</div>`:c`<hmwc-icon part="icon" class="avatar__icon" src=${this.icon}></hmwc-icon>`}
      </slot>
    `}};it.styles=yi;it.dependencies=[x];te([b()],it.prototype,"initials",void 0);te([s({type:String})],it.prototype,"name",void 0);te([s({type:String})],it.prototype,"icon",void 0);te([s({type:String,reflect:!0})],it.prototype,"shape",void 0);te([s({type:String,reflect:!0})],it.prototype,"status",void 0);te([s({type:Boolean,reflect:!0})],it.prototype,"selectable",void 0);te([s({type:Boolean,reflect:!0})],it.prototype,"sm",void 0);te([s({type:Boolean,reflect:!0})],it.prototype,"md",void 0);te([s({type:Boolean,reflect:!0})],it.prototype,"lg",void 0);te([u("name")],it.prototype,"updateInitials",null);it.define("hmwc-avatar",it);V.define("hmwc-badge",V);var _i=d`
  :host {
    display: block;
  }
`;var xi=d`
  :host {
    display: contents;
  }

  :host([fluid]) {
    --container-height: 100%;
  }

  .col {
    height: var(--container-height);

    & .col__label {
      display: block;
      color: var(--hmwc-color-text-secondary);
      font-size: var(--hmwc-font-size-small);
      font-family: var(--hmwc-font-sans);
      line-height: 2;
    }

    .col__content {
      display: flex;
      flex-direction: column;
      background-size: cover;
      align-items: var(--container-alignment);
      justify-content: var(--container-justification);
      gap: var(--container-spacing);
      padding: var(--container-padding);
      border-radius: var(--container-border-radius);
      aspect-ratio: var(--container-aspect-ratio);
      height: var(--container-height);
      width: var(--container-width);
      //   overflow-y: var(--container-scrollbar);
      box-shadow: var(--container-shadow);
      background: var(--container-background);
      background-size: cover;

      &.wrap {
        flex-wrap: wrap;
      }

      &.min {
        width: min-content;
      }

      &.max {
        width: max-content;
      }

      &.outline {
        border: 1px solid var(--hmwc-panel-border-color);
      }
    }
  }
`;var He=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Mt=class extends F{render(){let t=g({col__content:!0,wrap:!!this.wrap,min:!!this.min,max:!!this.max,outline:!!this.outline,fit:!!this.fit});return c`
      <div part="base" class="col">
        <slot name="label" part="label"></slot>
        <slot part="content" class=${t}></slot>
      </div>
    `}};Mt.styles=xi;He([s({type:Boolean,reflect:!0})],Mt.prototype,"wrap",void 0);He([s({type:Boolean,reflect:!0})],Mt.prototype,"fit",void 0);He([s({type:Boolean,reflect:!0})],Mt.prototype,"min",void 0);He([s({type:Boolean,reflect:!0})],Mt.prototype,"max",void 0);He([s({type:Boolean,reflect:!0})],Mt.prototype,"outline",void 0);Mt.define("hmwc-col",Mt);var $i=d`
  :host {
    --radius: var(--hmwc-border-radius-pill);
    --color: var(--hmwc-color-neutral-100);
    --sheen-color: var(--hmwc-color-neutral-200);

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
      background: var(--color);
      border-radius: var(--radius);
    }

    &.sheen {
      & .skeleton__indicator {
        background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
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
      --color: GrayText;
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
`;var ki=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},ft=class extends p{constructor(){super(...arguments),this.sheen=!0}render(){let t=g({skeleton:!0,pulse:!!this.pulse,sheen:!!this.sheen});return c`
      <div part="base" class=${t}>
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};ft.styles=$i;ft.dependencies=[];ft.slots=[];ki([s({type:Boolean,reflect:!0})],ft.prototype,"sheen",void 0);ki([s({type:Boolean,reflect:!0})],ft.prototype,"pulse",void 0);ft.define("hmwc-skeleton",ft);var Ci=d`


  :host {
    --text-size: var(--hmwc-font-size-medium);
    --text-weight: var(--hmwc-font-weight-normal);
    --text-family: var(--hmwc-font-sans);
    --text-color: var(--hmwc-color-neutral-900);
    --text-label-color: var(--hmwc-color-neutral-600);
    --text-spacing: var(--hmwc-letter-spacing-normal);
    --text-icon-color: var(--hmwc-color-neutral-800) display: block;
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
        font-weight: normal !important;
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
      --text-size: var(--hmwc-font-size-x-large);
    }

    &.subheading {
      --text-size: var(--hmwc-font-size-x-large);
      --text-weight: var(--hmwc-font-weight-semibold);
    }

    &.subtitle {
      --text-size: calc(var(--hmwc-font-size-x-large) * 1.035);
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
      --text-icon-color: var(--hmwc-color-primary-500);
    }

    &.secondary {
      --text-color: var(--hmwc-color-neutral-700);
    }

    &.tertiary {
      --text-color: var(--hmwc-color-neutral-600);
    }

    &.success {
      --text-icon-color: var(--hmwc-color-success-500);
    }

    &.neutral {
      --text-color: var(--hmwc-color-neutral-500);
    }

    &.warning {
      --text-icon-color: var(--hmwc-color-warning-500);
    }

    &.danger {
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
`;var S=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},$=class extends p{handleValueChange(){this.formatValue()}handleMouseover(){this.emit("mouseenter",{detail:{value:this.value}})}handleMouseout(){this.emit("mouseleave",{detail:{value:this.value}})}formatValue(){this.format&&this.value!==void 0&&(this.value=Math.round(parseInt(this.value)).toLocaleString())}connectedCallback(){super.connectedCallback(),!this.sans&&!this.serif&&!this.monospace&&(this.sans=!0),this.formatValue()}render(){let t=g({text:!0,xs:!!this.xs,sm:!!this.sm,md:!!this.md,lg:!!this.lg,xl:!!this.xl,xxl:!!this.xxl,flex:!!this.flex,heading:!!this.heading,subheading:!!this.subheading,label:!!this.label,subtitle:!!this.subtitle,caption:!!this.caption,sans:!!this.sans,serif:!!this.serif,monospace:!!this.monospace,center:!!this.center||this.align==="center",light:!!this.light,semibold:!!this.semibold,bold:!!this.bold,primary:!!this.primary,secondary:!!this.secondary,tertiary:!!this.tertiary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger,uppercase:!!this.uppercase,lowercase:!!this.lowercase,capitalize:!!this.capitalize,wrap:!!this.wrap,invert:!!this.invert,"align-start":this.align==="start","align-end":this.align==="end"});return c`
      <div part="base" class=${t} @click=${this.handleMouseover} @mouseover=${this.handleMouseover} @mouseout=${this.handleMouseout}>
        ${this.prefix?c`<slot name="prefix" class="text__prefix">
              <hmwc-icon
                ?primary=${this.primary}
                ?neutral=${this.neutral}
                ?warning=${this.warning}
                ?danger=${this.danger}
                ?invert=${this.invert}
                src=${this.prefix}></hmwc-icon>
            </slot>`:""}
        <div
          part="content"
          class="text__content"
          style=${this.parentElement?.parentElement?.nodeName==="HMWC-TEXT"?"margin-left: var(--hmwc-spacing-2x-small)":""}>
          ${this.label?c`<span class="text__label">${this.label}</span>`:null}
          ${y(this.value)?c`${this.value||c`<hmwc-skeleton></hmwc-skeleton>`}`:c``}
          ${this.amount?c`<span class="text__amount">(${this.amount})</span>`:""}
          <slot></slot>
        </div>

        ${this.suffix?c`<slot name="suffix" class="text__suffix">
              <hmwc-icon
                ?primary=${this.primary}
                ?neutral=${this.neutral}
                ?warning=${this.warning}
                ?danger=${this.danger}
                ?invert=${this.invert}
                src=${this.suffix}></hmwc-icon>
            </slot>`:""}
      </div>
    `}};$.styles=Ci;$.dependencies=[x,ft];S([s({type:String})],$.prototype,"value",void 0);S([s({type:Number})],$.prototype,"amount",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"xs",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"sm",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"md",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"lg",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"xl",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"xxl",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"heading",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"subheading",void 0);S([s({type:String})],$.prototype,"label",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"subtitle",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"caption",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"sans",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"serif",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"monospace",void 0);S([s({type:String})],$.prototype,"align",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"center",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"light",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"semibold",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"bold",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"primary",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"secondary",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"tertiary",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"success",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"neutral",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"warning",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"danger",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"uppercase",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"lowercase",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"capitalize",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"wrap",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"invert",void 0);S([s({type:Boolean,reflect:!0})],$.prototype,"flex",void 0);S([s({type:String})],$.prototype,"prefix",void 0);S([s({type:String})],$.prototype,"suffix",void 0);S([s({type:Boolean})],$.prototype,"format",void 0);S([u("value")],$.prototype,"handleValueChange",null);$.define("hmwc-text",$);var Se=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Ot=class extends p{render(){return c`
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
    `}};Ot.styles=_i;Ot.dependencies=[Mt,$,x,w];Se([s({type:String})],Ot.prototype,"img",void 0);Se([s({type:String})],Ot.prototype,"label",void 0);Se([s({type:String})],Ot.prototype,"message",void 0);Se([s({type:String})],Ot.prototype,"href",void 0);Se([s({type:String})],Ot.prototype,"action",void 0);Se([s({type:Boolean,reflect:!0})],Ot.prototype,"invert",void 0);Ot.define("hmwc-banner",Ot);var zi=d`
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
`;var Rt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},I=class extends p{constructor(){super(...arguments),this.route=!0,this.valueUpdate=()=>this.emit("hmwc-change")}select(){!this.route||this.items!==void 0||this.emit("hmwc-navigate",{detail:{route:this.path}})}setValue(t){t instanceof CustomEvent&&(t=t.detail.value),this.value=t}render(){let t=g({breadcrumb__crumb:!0,active:!!this.active,route:!!this.route,home:!!this.home,"color-green":this.color==="green","color-purple":this.color==="purple"});return c`
      <div part="base" class="breadcrumb">
        <hmwc-tooltip ?disabled=${!this.route} label=${this.path==="/"?"Dashboard":this.path||""} sm delay="700" placement="top-start">
          <hmwc-attachment
            distance="8"
            ?search=${this.search||!1}
            prefix=${this.prefix}
            .?items=${this.items}
            placement="bottom-end"
            @hmwc-select=${this.setValue}>
            <div part="content" class=${t} slot="anchor" @click=${this.select}>
              ${this.prefix?c`<div class="breadcrumb__prefix"><hmwc-icon flex src=${this.prefix}></hmwc-icon></div>`:""}
              ${this.icon?c`<div class="breadcrumb__icon"><hmwc-icon flex src=${this.icon}></hmwc-icon></div>`:""}
              ${this.label?c`<div class="breadcrumb__label">${this.value||this.label}</div>`:""}
              ${this.suffix?c`<div class="breadcrumb__suffix"><hmwc-icon flex src=${this.suffix}></hmwc-icon></div>`:""}
              ${this.items?c`<div class="breadcrumb__dropdown-arrow"><hmwc-icon flex src="caret-down"></hmwc-icon></div>`:""}
            </div>
          </hmwc-attachment>
        </hmwc-tooltip>
        <slot name="actions" part="actions" class="breadcrumb__actions">
          ${this.actions?c`<hmwc-attachment
                icon="three-dots-vertical"
                .items=${this.actions}
                @hmwc-select=${e=>this.emit("hmwc-select",{detail:{value:e.detail.value}})}></hmwc-attachment>`:""}
        </slot>
      </div>
    `}};I.styles=zi;I.dependencies=[];I.slots=[];Rt([s({type:String,reflect:!0})],I.prototype,"prefix",void 0);Rt([s({type:String,reflect:!0})],I.prototype,"suffix",void 0);Rt([s({type:String,reflect:!0})],I.prototype,"icon",void 0);Rt([s({type:String,reflect:!0})],I.prototype,"color",void 0);Rt([s({type:String,reflect:!0})],I.prototype,"label",void 0);Rt([s({type:String,reflect:!0})],I.prototype,"path",void 0);Rt([s({type:Boolean,reflect:!0})],I.prototype,"active",void 0);Rt([s({type:Array,reflect:!0})],I.prototype,"items",void 0);Rt([s({type:String,reflect:!0})],I.prototype,"value",void 0);Rt([s({type:Boolean,reflect:!0})],I.prototype,"search",void 0);Rt([s({type:Boolean,reflect:!0})],I.prototype,"home",void 0);Rt([s({type:Boolean,reflect:!0})],I.prototype,"route",void 0);Rt([s({type:Array})],I.prototype,"actions",void 0);Rt([u("value",{waitUntilFirstUpdate:!0})],I.prototype,"valueUpdate",void 0);I.define("hmwc-breadcrumb",I);var Si=d`
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
`;var Xt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},U=class extends p{constructor(){super(...arguments),this.trigger="hover",this.placement="top",this.arrow=!0,this.distance=6,this.skidding=0,this.delay=150,this.handleBlur=()=>{this.trigger==="focus"&&this.hide()},this.handleFocus=()=>{this.trigger==="focus"&&this.show()},this.handleClick=()=>{this.trigger==="click"&&this.toggle()},this.handleMouseEnter=()=>{if(this.trigger!=="hover")return;clearTimeout(this.timeout);let t=this.delay instanceof Object?this.delay.show:this.delay;this.timeout=window.setTimeout(()=>this.show(),t)},this.handleMouseLeave=()=>{if(this.trigger!=="hover")return;clearTimeout(this.timeout);let t=this.delay instanceof Object?this.delay.hide:this.delay;this.timeout=window.setTimeout(()=>this.hide(),t)},this.handleKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())}}handleActiveChange(){this.active?(this.emit("hmwc-show"),document.addEventListener("keydown",this.handleKeyDown)):(this.emit("hmwc-hide"),document.removeEventListener("keydown",this.handleKeyDown))}handleDisabledChange(){this.disabled&&this.active&&this.hide()}show(){this.active||this.disabled||(this.active=!0)}hide(){this.active&&(this.active=!1)}toggle(){this.active?this.hide():this.show()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),document.removeEventListener("keydown",this.handleKeyDown)}render(){let t=g({tooltip:!0,active:!!this.active,disabled:!!this.disabled,[this.placement]:!0});return c`
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
    `}};U.styles=Si;U.dependencies=[O];U.slots=["[default]","content"];Xt([s({type:String})],U.prototype,"label",void 0);Xt([s({type:String})],U.prototype,"trigger",void 0);Xt([s({type:String,reflect:!0})],U.prototype,"placement",void 0);Xt([s({type:Boolean,reflect:!0})],U.prototype,"active",void 0);Xt([s({type:Boolean,reflect:!0})],U.prototype,"disabled",void 0);Xt([s({type:Boolean,reflect:!0})],U.prototype,"arrow",void 0);Xt([s({type:Number})],U.prototype,"distance",void 0);Xt([s({type:Number})],U.prototype,"skidding",void 0);Xt([s({type:Number})],U.prototype,"delay",void 0);Xt([u("active")],U.prototype,"handleActiveChange",null);Xt([u("disabled")],U.prototype,"handleDisabledChange",null);U.define("hmwc-tooltip",U);var Ai=d`
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
`;var Ae=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},$t=class extends p{constructor(){super(...arguments),this.breadcrumbs=[],this.routes=[],this.seperator="chevron-right",this.routeUpdate=this.updateCrumbs}updateCrumbs(){if(!this.route||!this.routes.length)return;let t=[],e=this.route.path.split("/");e.forEach((r,o)=>{r===""&&(r="/");let i=this.overrides?.find(a=>a.path===r);if(i){let a=this.routes.find(l=>l.path===e.slice(0,o+1).join("/"));i.label=i.value,i.route=!!a?.component,i.path=a?.path||i.path,i.home=o===0,!i.prefix&&i.items!==void 0&&(i.prefix="x-diamond-fill"),i.active=o===e.length-1,t.push(i);return}else{let a=document.createElement("hmwc-breadcrumb"),l=this.routes.find(h=>h.path===e.slice(0,o+1).join("/"));a.home=o===0,a.setAttribute("path",l?.path||""),a.active=o===e.length-1,a.route=!!l?.component,r==="/"?(a.icon="house-door-fill",a.path="/",a.route=!0):a.label=l?.title||"",t.push(a)}}),this.breadcrumbs=t}connectedCallback(){super.connectedCallback()}render(){return c`
      <div part="base" class="breadcrumbs">
        ${this.breadcrumbs.map((t,e)=>c`
            ${t}
            ${e!==this.breadcrumbs.length-1?c`<slot name="seperator" class="breadcrumbs__seperator"><hmwc-icon flex src=${this.seperator}></hmwc-icon></slot>`:""}
          `)}
        <slot></slot>
      </div>
    `}};$t.styles=Ai;$t.dependencies=[x,O,U,I];$t.slots=[];Ae([s({type:Array})],$t.prototype,"overrides",void 0);Ae([b()],$t.prototype,"breadcrumbs",void 0);Ae([s({type:String,reflect:!0})],$t.prototype,"route",void 0);Ae([s({type:Array})],$t.prototype,"routes",void 0);Ae([s({type:String,reflect:!0})],$t.prototype,"seperator",void 0);Ae([u("route")],$t.prototype,"routeUpdate",void 0);$t.define("hmwc-breadcrumbs",$t);var Ei=d`
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
    z-index: var(--hmwc-z-index-panel);
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
`;var Z=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},P=class extends F{handleClick(){this.emit("hmwc-click",{})}connectedCallback(){super.connectedCallback(),this.pad||(this.pad="sm")}render(){let t=g({card:!0,fluid:!!this.fluid,header:this.header||this.controllers.slot.test("header"),footer:this.footer||this.controllers.slot.test("footer"),image:this.img||this.controllers.slot.test("image"),primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger,alt:!!this.alt,blue:this.color==="blue",purple:this.color==="purple",green:this.color==="green",yellow:this.color==="yellow",orange:this.color==="orange",red:this.color==="red",xs:!!this.xs,sm:!!this.sm,md:!!this.md,lg:!!this.lg,"scale-small":!!this.scaleSm,"scale-medium":!!this.scaleMd,"scale-large":!!this.scaleLg});return c`
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
    `}};P.styles=Ei;P.slots=["header","footer","image"];Z([s({type:String})],P.prototype,"label",void 0);Z([s({type:String})],P.prototype,"header",void 0);Z([s({type:String})],P.prototype,"footer",void 0);Z([s({type:String})],P.prototype,"img",void 0);Z([s({type:String})],P.prototype,"prefix",void 0);Z([s({type:String})],P.prototype,"suffix",void 0);Z([s({type:String,reflect:!0})],P.prototype,"color",void 0);Z([s({type:Boolean,reflect:!0})],P.prototype,"primary",void 0);Z([s({type:Boolean,reflect:!0})],P.prototype,"alt",void 0);Z([s({type:Boolean,reflect:!0})],P.prototype,"success",void 0);Z([s({type:Boolean,reflect:!0})],P.prototype,"neutral",void 0);Z([s({type:Boolean,reflect:!0})],P.prototype,"warning",void 0);Z([s({type:Boolean,reflect:!0})],P.prototype,"danger",void 0);Z([s({type:Boolean,reflect:!0})],P.prototype,"xs",void 0);Z([s({type:Boolean,reflect:!0})],P.prototype,"sm",void 0);Z([s({type:Boolean,reflect:!0})],P.prototype,"md",void 0);Z([s({type:Boolean,reflect:!0})],P.prototype,"lg",void 0);Z([s({type:String})],P.prototype,"shadow",void 0);Z([s({type:Boolean,reflect:!0})],P.prototype,"scaleSm",void 0);Z([s({type:Boolean,reflect:!0})],P.prototype,"scaleMd",void 0);Z([s({type:Boolean,reflect:!0})],P.prototype,"scaleLg",void 0);Z([s({type:Boolean,reflect:!0})],P.prototype,"fluid",void 0);P.define("hmwc-card",P);var Bi=d`
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
`;var de=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},bt=class extends p{calculatePieGradient(){if(!this.data)return;let t=this.data.sort((r,o)=>o.value-r.value),e="conic-gradient(";return t.forEach((r,o)=>{let i=r.color||`hsl(${o*360/t.length}, 100%, 50%)`,a=o===0?0:t[o-1].value;e+=`${i} ${a} ${r.value}%,`}),e+")"}connectedCallback(){super.connectedCallback(),this.animation="scale-in",this.indicators||(this.indicators=[{value:25,label:"25%"},{value:50,label:"50%"},{value:75,label:"75%"}]),this.bar||(this.bar=!0)}render(){let t=this.parentElement?.clientHeight||this.clientHeight,e=g({chart:!0,pie:!!this.pie,bar:!!this.bar,small:!!this.sm,medium:!!this.md,large:!!this.lg});return c` <div part="base" class=${e}>
      ${this.pie?c`<div class="chart__pie" style="background: ${this.calculatePieGradient()}"></div>`:c`${this.indicators?.map(({value:r,label:o})=>c`
                <div class="chart__indicator" style="top: ${t-t*(r/100)}px">
                  <span class="chart__indicator-label">${o}</span>
                  <div class="chart__indicator-line"></div>
                </div>
              `)}
            <div part="chart" class="chart__chart">
              ${this.data?.map(({label:r,value:o})=>c`
                  <hmwc-tooltip label=${r} arrow placement="right" delay="200">
                    <div class="chart__item">
                      <div class="chart__item-progress ${o?"":"null"}" style="height: ${t*(o/100)}px"></div>
                      ${this.labeled?c`<div class="chart__item-label">${r}</div>`:""}
                    </div>
                  </hmwc-tooltip>
                `)}

              <slot></slot>
            </div> `}
    </div>`}};bt.styles=Bi;bt.dependencies=[U];de([s({type:Array})],bt.prototype,"data",void 0);de([s({type:Boolean})],bt.prototype,"pie",void 0);de([s({type:Array})],bt.prototype,"indicators",void 0);de([s({type:Boolean})],bt.prototype,"bar",void 0);de([s({type:Boolean})],bt.prototype,"labeled",void 0);de([s({type:Boolean})],bt.prototype,"sm",void 0);de([s({type:Boolean})],bt.prototype,"md",void 0);de([s({type:Boolean})],bt.prototype,"lg",void 0);bt.define("hmwc-chart",bt);var Mi=d`
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
    --menu-item-placeholder-display: none;

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
        --menu-item-spacing: var(--hmwc-spacing-2x-small) var(--hmwc-spacing-small);
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
`;var dt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},N=class extends j{constructor(){super(...arguments),this.active=!1,this.labelPos="top",this.items=[],this.placeholder="",this.placement="bottom-start",this.sync=!0,this.distance=1,this.skidding=this.prefix?8:0}show(){this.disabled||(this.active=!0)}hide(){this.disabled||(this.active=!1)}toggle(){this.disabled||(this.active=!this.active)}select(t){this.value=t,this.emit("hmwc-select",{detail:{value:t}})}listen(t){t==="add"&&this.listen("remove"),this.menu?.[`${t}EventListener`]("hmwc-select",e=>{this.select(e.detail.value)}),document[`${t}EventListener`]("mousedown",e=>{let r=e.target;this.contains(r)||this.hide()})}handleValueChange(){this.emit("hmwc-change",{detail:{value:this.value}})}handleOpenChange(){this.emit(this.active?"hmwc-show":"hmwc-hide")}handleLabelChange(){this.toggleAttribute("no-label",!this.label)}disconnectedCallback(){super.disconnectedCallback(),this.listen("remove")}firstUpdated(){super.connectedCallback(),this.listen("add"),this.toggleAttribute("no-label",!this.label)}render(){let t=g({dropdown:!0,disabled:!!this.disabled,small:!!this.sm,medium:!!this.md,large:!!this.lg,filled:!!this.filled,label:!!this.label,pill:!!this.pill,invalid:!!this.invalid,top:this.placement==="top","top-start":this.placement==="top-start","top-end":this.placement==="top-end",bottom:this.placement==="bottom","bottom-start":this.placement==="bottom-start","bottom-end":this.placement==="bottom-end",right:this.placement==="right","right-start":this.placement==="right-start","right-end":this.placement==="right-end",left:this.placement==="left","left-start":this.placement==="left-start","left-end":this.placement==="left-end"});return c`
      <div part="base" class=${t} @click=${()=>this.active=!this.active}>
        <slot name="label" part="label" class="dropdown__label">${this.label}</slot>

        <hmwc-attachment .?distance=${this.distance} .?skidding=${this.skidding} ?sync=${this.sync} ?active=${this.active}>
          ${this.items.length?c` <hmwc-menu
                part="anchor"
                class="dropdown__menu"
                .filter=${this.filter}
                .items=${this.items}
                @hmwc-select=${e=>this.select(e.detail.value)}></hmwc-menu>`:c`<slot></slot>`}

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
            suffix="chevron-down"></hmwc-button>
        </hmwc-attachment>

        <!-- Help Text -->
        <slot name="help" part="help" class="dropdown__help" aria-hidden=${!this.help}> ${this.invalid&&this.error||this.help} </slot>
      </div>
    `}};N.styles=Mi;N.slots=["menu"];N.dependencies=[O,w,B];dt([s({type:Boolean,reflect:!0})],N.prototype,"active",void 0);dt([s({type:String,reflect:!0,attribute:"label-pos"})],N.prototype,"labelPos",void 0);dt([s({type:Array,reflect:!0})],N.prototype,"items",void 0);dt([s({type:String})],N.prototype,"placeholder",void 0);dt([s({type:String})],N.prototype,"placement",void 0);dt([s({type:String,reflect:!0})],N.prototype,"filter",void 0);dt([s({type:String})],N.prototype,"help",void 0);dt([s({type:Boolean})],N.prototype,"sync",void 0);dt([s({type:Boolean,reflect:!0})],N.prototype,"pill",void 0);dt([s({type:Boolean,reflect:!0})],N.prototype,"filled",void 0);dt([s({type:Number})],N.prototype,"distance",void 0);dt([s({type:Number})],N.prototype,"skidding",void 0);dt([s({type:Boolean,reflect:!0})],N.prototype,"fluid",void 0);dt([R(".dropdown__trigger")],N.prototype,"trigger",void 0);dt([R(".dropdown__menu")],N.prototype,"menu",void 0);dt([u("value",{waitUntilFirstUpdate:!0})],N.prototype,"handleValueChange",null);dt([u("active",{waitUntilFirstUpdate:!0})],N.prototype,"handleOpenChange",null);dt([u("label")],N.prototype,"handleLabelChange",null);N.define("hmwc-dropdown",N);var Oi=d`
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
`;var kt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Y=class extends p{constructor(){super(...arguments),this.range=[],this.page=1,this.siblings=1,this.boundary=1}updateRange(){let t=(r,o)=>Array.from({length:o-r+1},(i,a)=>r+a),e=(this.siblings+this.boundary)*2;if(this.count>e+3){let r=Math.max(2,this.page-this.siblings),o=Math.min(this.count-1,this.page+this.siblings),i=t(r,o),a=r>2,l=this.count-o>1,h=e-i.length;a&&!l?i=[-1,...t(r-h,r-1),...i]:!a&&l?i=[...i,...t(o+1,o+h),-1]:i=[-1,...i,-1],this.range=[1,...i,this.count]}else this.range=t(1,this.count)}handlePageChange(){this.updateRange(),this.emit("hmwc-change",{detail:{page:this.page}})}handleCountChange(){this.updateRange()}render(){let t=g({pagination:!0,sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
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
    `}};Y.styles=Oi;Y.dependencies=[x,w];kt([b()],Y.prototype,"range",void 0);kt([s({type:Number})],Y.prototype,"page",void 0);kt([s({type:Number})],Y.prototype,"count",void 0);kt([s({type:Number})],Y.prototype,"siblings",void 0);kt([s({type:Number})],Y.prototype,"boundary",void 0);kt([s({type:Boolean,reflect:!0})],Y.prototype,"sm",void 0);kt([s({type:Boolean,reflect:!0})],Y.prototype,"md",void 0);kt([s({type:Boolean,reflect:!0})],Y.prototype,"lg",void 0);kt([s({type:Boolean,reflect:!0})],Y.prototype,"primary",void 0);kt([s({type:Boolean,reflect:!0})],Y.prototype,"success",void 0);kt([s({type:Boolean,reflect:!0})],Y.prototype,"neutral",void 0);kt([s({type:Boolean,reflect:!0})],Y.prototype,"warning",void 0);kt([s({type:Boolean,reflect:!0})],Y.prototype,"danger",void 0);kt([u("page",{waitUntilFirstUpdate:!0})],Y.prototype,"handlePageChange",null);kt([u(["count","siblings","boundary"])],Y.prototype,"handleCountChange",null);Y.define("hmwc-pagination",Y);var Ri=d`
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
  }
`;var D=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},C=class extends p{constructor(){super(...arguments),this.selections=[],this._sizingId=0,this._tableIsSized=!1,this._resizing=null,this._didResize=!1,this._columnWidths={},this._boundResizeMove=null,this._boundResizeEnd=null,this._filterableFields={},this._columnFilters={},this.fieldKeys=[],this.ready=!1,this.results=[],this.entries=[],this.total=0,this.data=[],this.fields=[],this.page=1,this.amount=10,this.sizing={},this.filter="",this.sort="",this.order="descending",this.pagination=!0,this.dataUpdate=()=>this.parseData(),this.entriesUpdate=()=>this.entries=this.getEntries()}getColumnStyle(t){return this._columnWidths[t]?`width: ${this._columnWidths[t]}px`:this.sizing&&this.sizing[t]?`width: ${this.sizing[t]}`:""}hasFields(){return!!(Array.isArray(this.fields)&&this.fields.length>0)}getDisplayName(t){return Array.isArray(this.fields)&&this.fields.length>0&&typeof this.fields[0]=="object"&&this.fields[0][t]?this.fields[0][t]:t}computeFilterableFields(){let e={};for(let r of this.fieldKeys){if(this.isSkeletonField(r))continue;let o=[];for(let a of this.data){let l=a[r];l!=null&&l!==""&&o.push(l)}if(o.length===0)continue;let i=this.detectColumnType(o);if(i==="categorical"){let a=Array.from(new Set(o.map(String))).sort((l,h)=>l.localeCompare(h));a.length<10&&(e[r]={type:"categorical",values:a})}else if(i==="numeric"){let a=o.map(l=>this.parseNumericValue(l)).filter(l=>l!=null).sort((l,h)=>l-h);if(a.length>0){let l=(h,m)=>{let f=(h.length-1)*m,v=Math.floor(f),z=Math.ceil(f);return v===z?h[v]:h[v]*(z-f)+h[z]*(f-v)};e[r]={type:"numeric",values:[],numericStats:{min:a[0],max:a[a.length-1],q1:l(a,.25),median:l(a,.5),q3:l(a,.75)}}}}else e[r]={type:i,values:[]}}this._filterableFields=e}detectColumnType(t){let e=0,r=0;for(let i of t){let a=String(i),l=a.replace(/[$,%k]/gi,"").replace(/,/g,"").trim();if(l!==""&&!isNaN(Number(l))){e++;continue}if(this.isValidDate(a)){r++;continue}}let o=t.length;return e/o>=.8?"numeric":r/o>=.8?"date":"categorical"}parseNumericValue(t){if(typeof t=="number")return t;let r=String(t).trim().replace(/[$,%k]/gi,"").replace(/,/g,""),o=Number(r);return isNaN(o)?null:o}isColumnFilterActive(t){let e=this._columnFilters[t];if(!e)return!1;let r=this._filterableFields[t];if(!r)return!1;switch(e.type){case"categorical":return e.selected.size<r.values.length;case"numeric":return e.min!=null||e.max!=null;case"date":return e.from!=null||e.to!=null;case"text":return e.query.length>0}}isFilterValueSelected(t,e){let r=this._columnFilters[t];return!r||r.type!=="categorical"?!0:r.selected.has(e)}toTitleCase(t){return t.toLowerCase().replace(/(?:^|\s)\S/g,e=>e.toUpperCase())}handleCategoricalFilterChange(t,e){let r=e.detail?.value,o=this._filterableFields[t];if(o){if(r==="all"){delete this._columnFilters[t],this._columnFilters={...this._columnFilters},this.page=1,this.parseData();return}if(r==="none"){this._columnFilters[t]={type:"categorical",selected:new Set},this._columnFilters={...this._columnFilters},this.page=1,this.parseData();return}if(r instanceof A){let i=r.value;if(!i)return;let a=this._columnFilters[t];(!a||a.type!=="categorical")&&(a={type:"categorical",selected:new Set(o.values)},this._columnFilters[t]=a),r.checked?a.selected.add(i):a.selected.delete(i),a.selected.size===o.values.length&&delete this._columnFilters[t],this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}}}handleNumericFilterChange(t,e,r){let o=r.target,i=String(o.value??"").trim(),a=this._columnFilters[t];(!a||a.type!=="numeric")&&(a={type:"numeric"},this._columnFilters[t]=a),!i||i===""?delete a[e]:a[e]=Number(i),a.min==null&&a.max==null&&delete this._columnFilters[t],this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}handleDateFilterChange(t,e,r){let o=r.target,i=String(o.value??"").trim(),a=this._columnFilters[t];(!a||a.type!=="date")&&(a={type:"date"},this._columnFilters[t]=a),!i||i===""?delete a[e]:a[e]=i,a.from==null&&a.to==null&&delete this._columnFilters[t],this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}handleTextFilterChange(t,e){let r=e.target,o=String(r.value??"").trim();o?this._columnFilters[t]={type:"text",query:o}:delete this._columnFilters[t],this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}clearColumnFilter(t){delete this._columnFilters[t],this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}applyNumericPreset(t,e,r){let o={type:"numeric"};e!=null&&(o.min=e),r!=null&&(o.max=r),this._columnFilters[t]=o,this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}formatPresetValue(t){return Math.abs(t)>=1e6?`${(t/1e6).toFixed(1).replace(/\.0$/,"")}M`:Math.abs(t)>=1e4?`${(t/1e3).toFixed(1).replace(/\.0$/,"")}k`:t.toLocaleString("en-US",{maximumFractionDigits:0})}parseData(){this.fieldKeys=this.resolveFieldKeys(),this.computeFilterableFields();let t=this.filterData(),e=[];t.forEach(()=>e.push(!1)),this.selections=e,this.results=this.sortData(t);let r=Math.max(1,Math.ceil(this.results.length/this.amount));this.page>r&&(this.page=1),this.entries=this.getEntries(this.results),this.total=this.results.length,this.amount===1/0&&(this.amount=this.results.length),t.length&&(this.ready=!0),this.setTableSizing()}filterData(t=this.data){t=structuredClone(t);let e=Object.keys(this._columnFilters);if(e.length>0&&(t=t.filter(o=>e.every(i=>{let a=this._columnFilters[i],l=o[i];if(l==null)return!1;switch(a.type){case"categorical":return a.selected.has(String(l));case"numeric":{let h=this.parseNumericValue(l);return!(h==null||a.min!=null&&h<a.min||a.max!=null&&h>a.max)}case"date":{let h=new Date(String(l));return!(isNaN(h.getTime())||a.from!=null&&h<new Date(a.from)||a.to!=null&&h>new Date(a.to))}case"text":return a.query?String(l).toLowerCase().includes(a.query.toLowerCase()):!0;default:return!0}}))),!this.filter.length)return t;let r=this.filter.toLowerCase();return t.filter(o=>Object.values(o).some(i=>i?i.toString().toLowerCase().includes(r):!1))}sortData(t=this.filterData()){let e={month:{trigger:()=>this.sort.toLowerCase()==="month",value:r=>new Date(`${r[this.sort]} ${r.Year||r.year||2025}`)},year:{trigger:()=>this.sort.toLowerCase()==="year",value:r=>new Date(`${r.Month||r.month||"January"} ${r[this.sort]}`)},percentage:{trigger:r=>r[this.sort]!=null&&r[this.sort]?.toString().includes("%"),value:r=>Number(r[this.sort].toString().split("%")[0])},money:{trigger:r=>{let o=r[this.sort];return o!=null&&typeof o=="string"&&o[o.length-1]==="k"&&!isNaN(Number(o.slice(0,-1)))},value:r=>Number(r[this.sort].toString().split("k")[0])},number:{trigger:r=>r[this.sort]!=null&&r[this.sort].toString()[0]==="$",value:r=>parseInt(r[this.sort].toString().split("$")[1])},other:{trigger:()=>!0,value:r=>r[this.sort]}};return this.sort?t.sort((r,o)=>{let i,a;if(Object.keys(e).some(h=>{if(e[h].trigger(r))return i=e[h].value(r),a=e[h].value(o),!0}),i==null&&a==null)return 0;if(i==null)return 1;if(a==null)return-1;let l=this.order==="descending";return i>a?l?-1:1:a>i?l?1:-1:0}):t}sortByField(t){if(this._didResize){this._didResize=!1;return}this.fieldKeys.includes(t)&&(this.sort===t?this.order=this.order==="ascending"?"descending":"ascending":(this.sort=t,this.order="ascending"),this.parseData())}selectAll(){this.selectable&&(this.selections=this.selections.map(()=>!0))}deselectAll(){this.selectable&&(this.selections=this.selections.map(()=>!1))}resolveFieldKeys(){return!this.hasFields()&&!this.data.length?[...Array(5).keys()].map((e,r)=>`#SKELETON-${r}`):this.hasFields()&&Array.isArray(this.fields)&&this.fields.length>0?typeof this.fields[0]=="object"?Object.keys(this.fields[0]):[...this.fields]:Object.keys(this.data[0])}getEntries(t=this.results){if(!this.ready&&t.length===0)return Array.from({length:this.amount},()=>this.fieldKeys.reduce((e,r)=>({...e,[r]:"#SKELETON"}),{}));{let e=this.amount-t.length;if(e>0)return[...t,...Array.from({length:e},()=>this.fieldKeys.reduce((r,o)=>({...r,[o]:"\u200E "}),{}))];{let r=(this.page-1)*this.amount,o=this.page*this.amount,i=t.slice(r,o),a=this.amount-i.length;return a>0?[...i,...Array.from({length:a},()=>this.fieldKeys.reduce((l,h)=>({...l,[h]:"\u200E "}),{}))]:i}}}isValidDate(t){let e=new Date(t);return!isNaN(e.getTime())}setTableSizing(){if(this._tableIsSized)return;let t=++this._sizingId;this.updateComplete.then(()=>{if(t!==this._sizingId)return;let e=this.shadowRoot?.querySelector("table");if(!e||this.isSkeletonField(this.fieldKeys[0]))return;let r=e.querySelector("tbody");if(!r)return;let o=Array.from(e.querySelectorAll("th.data-table__col-head"));if(!o.length)return;let i=this.action?[...this.fieldKeys,this.action.field]:this.fieldKeys,a=this.selectable?1:0;o.forEach((f,v)=>{let z=i[v-a];z&&(this.sizing?.[z]||this._columnWidths[z])||f.style.removeProperty("width")}),e.style.tableLayout="auto";let l={};for(let f of this.fieldKeys){l[f]="";for(let v of this.results){let z=v[f]?.toString()??"";z.length>l[f].length&&(l[f]=z)}}let h=document.createElement("tr");if(h.className="data-table__table-row",h.setAttribute("aria-hidden","true"),h.style.cssText="visibility:hidden;height:0;overflow:hidden;",this.selectable){let f=document.createElement("td");f.className="data-table__item checkbox",f.style.cssText="height:0;line-height:0;border:none;",h.appendChild(f)}for(let f of this.fieldKeys){let v=document.createElement("td");v.className="data-table__item",v.style.cssText="white-space:nowrap;height:0;line-height:0;border:none;",v.textContent=l[f],h.appendChild(v)}if(this.action){let f=document.createElement("td");f.className="data-table__item action",f.style.cssText="height:0;line-height:0;border:none;",h.appendChild(f)}r.appendChild(h);let m=o.map(f=>f.offsetWidth);h.remove(),o.forEach((f,v)=>{let z=i[v-a];z&&(this.sizing?.[z]||this._columnWidths[z])||(f.style.width=`${m[v]}px`)}),e.style.tableLayout="fixed",this._tableIsSized=!0})}getSelectionStatus(t){return this.selections[(this.page-1)*this.amount+t]}isSkeletonField(t){return typeof t=="string"&&t.includes("#SKELETON")}getStorageKey(){return`hmwc-data-table-col-widths:${this.label||this.fieldKeys.join(",")}`}loadColumnWidths(){if(this.cache)try{let t=localStorage.getItem(this.getStorageKey());t&&(this._columnWidths=JSON.parse(t))}catch{}}saveColumnWidths(){if(this.cache)try{localStorage.setItem(this.getStorageKey(),JSON.stringify(this._columnWidths))}catch{}}handleResizeStart(t,e){t.preventDefault(),t.stopPropagation();let r=t.target.parentElement;if(!r)return;let o=this.shadowRoot?.querySelector("table");o&&(this._resizing={field:e,startX:t.clientX,startWidth:r.offsetWidth,minWidth:40,maxWidth:1/0,th:r,table:o,activated:!1},this._boundResizeMove=this.handleResizeMove.bind(this),this._boundResizeEnd=this.handleResizeEnd.bind(this),document.addEventListener("mousemove",this._boundResizeMove),document.addEventListener("mouseup",this._boundResizeEnd))}activateResize(){if(!this._resizing||this._resizing.activated)return;this._resizing.activated=!0;let{table:t,th:e}=this._resizing,r=Array.from(t.querySelectorAll("th.data-table__col-head")),o=this.action?[...this.fieldKeys,this.action.field]:this.fieldKeys,i=this.selectable?1:0,a=0,l=0;for(let f=0;f<r.length;f++){let v=r[f],z=o[f-i];if(z&&this._columnWidths[z]&&v!==e){a+=v.offsetWidth;continue}let Lt=getComputedStyle(v),Yt=parseFloat(Lt.paddingLeft)+parseFloat(Lt.paddingRight),qe=parseFloat(Lt.borderLeftWidth)+parseFloat(Lt.borderRightWidth),St=40,he=v.querySelector(".data-table__col-head-content");if(he){let At=he.querySelector(".data-table__col-filter"),oo=At?At.offsetWidth:0,ao=At?parseFloat(getComputedStyle(he).gap||"0"):0,Be=he.cloneNode(!0);Be.style.cssText="position:absolute;visibility:hidden;width:min-content;pointer-events:none;";let kr=Be.querySelector(".data-table__col-filter");kr&&kr.remove(),he.parentElement.appendChild(Be);let Cr=v.querySelector(".data-table__col-resize"),so=Cr?Cr.offsetWidth*2:0;St=Be.offsetWidth+oo+ao+Yt+qe+so,Be.remove()}v===e?this._resizing.minWidth=St:l+=St}let h=Array.from(t.querySelectorAll("th:not(.data-table__col-head)"));for(let f of h)a+=f.offsetWidth;let m=t.offsetWidth;this._resizing.maxWidth=Math.max(this._resizing.minWidth,m-a-l);for(let f=0;f<r.length;f++){let v=r[f];if(v===e)continue;let z=o[f-i];z&&this._columnWidths[z]||v.style.removeProperty("width")}t.style.width=`${m}px`,e.style.width=`${e.offsetWidth}px`,t.style.tableLayout="fixed",this._resizing.startWidth=e.offsetWidth,document.body.style.cursor="col-resize",document.body.style.userSelect="none"}handleResizeMove(t){if(!this._resizing)return;let e=t.clientX-this._resizing.startX;if(!this._resizing.activated){if(Math.abs(e)<5)return;this.activateResize()}let r=Math.min(this._resizing.maxWidth,Math.max(this._resizing.minWidth,this._resizing.startWidth+e));this._resizing.th.style.width=`${r}px`}handleResizeEnd(){if(this._resizing){if(this._resizing.activated){let{table:t}=this._resizing;this._didResize=!0,this._columnWidths[this._resizing.field]=this._resizing.th.offsetWidth,this.saveColumnWidths();let e=Array.from(t.querySelectorAll("th.data-table__col-head"));for(let r of e)r.style.width=`${r.offsetWidth}px`;t.style.width=""}this._boundResizeMove&&document.removeEventListener("mousemove",this._boundResizeMove),this._boundResizeEnd&&document.removeEventListener("mouseup",this._boundResizeEnd),document.body.style.cursor="",document.body.style.userSelect="",this._resizing=null,this._boundResizeMove=null,this._boundResizeEnd=null}}connectedCallback(){super.connectedCallback(),this.parseData(),this.loadColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this._boundResizeMove&&document.removeEventListener("mousemove",this._boundResizeMove),this._boundResizeEnd&&document.removeEventListener("mouseup",this._boundResizeEnd)}renderFilterToolbar(t){return this.isColumnFilterActive(t)?c`
      <div class="data-table__filter-toolbar">
        <span class="data-table__filter-toolbar-label">Clear filter</span>
        <hmwc-icon src="x-lg" class="data-table__filter-clear" @click=${()=>this.clearColumnFilter(t)}> </hmwc-icon>
      </div>
    `:""}renderNumericPresets(t){let e=this._filterableFields[t];if(!e?.numericStats)return"";let r=e.numericStats,o=this._columnFilters[t],i=(h,m)=>!o||o.type!=="numeric"?!1:o.min===h&&o.max===m,a=h=>this.formatPresetValue(h),l=[{label:`\u2264 ${a(r.median)}`,max:r.median},{label:`${a(r.q1)} \u2013 ${a(r.q3)}`,min:r.q1,max:r.q3},{label:`\u2265 ${a(r.median)}`,min:r.median}];return c`
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
        `}}render(){return c`
      <div
        part="base"
        class=${g({"data-table":!0,search:!1,pagination:!!this.pagination,fluid:this.amount===1/0,small:!!this.sm,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger})}>
        <table part="table" class="data-table__table" rules="none">
          <thead>
            <tr part="header" role="row" class="data-table__table-head">
              ${this.selectable?c`
                      <th part="field" class="data-table__col-head checkbox">
                        <hmwc-checkbox
                          part="field-checkbox"
                          small
                          @hmwc-change=${t=>t.detail.value?this.selectAll():this.deselectAll()}></hmwc-checkbox>
                      </th>
                    `:""}
              ${this.fieldKeys.length&&this.isSkeletonField(this.fieldKeys[0])?c`
                      <th part="field" colspan=${this.fieldKeys.length} class="data-table__col-head skeleton">
                        <span class="visually-hidden">Loading data</span>
                        <hmwc-skeleton></hmwc-skeleton>
                      </th>
                    `:(this.action?[...this.fieldKeys,this.action.field]:this.fieldKeys).map(t=>c`
                        <th
                          part="field"
                          class="data-table__col-head"
                          active=${this.sort===t}
                          descending=${this.sort===t&&this.order==="descending"}
                          skeleton=${this.isSkeletonField(this.fieldKeys[0])}
                          action=${t===this.action?.field}
                          style=${this.getColumnStyle(t)}
                          @click=${()=>this.sortByField(t)}>
                          <div class="data-table__col-head-content">
                            ${this.getDisplayName(t)}
                            ${t!==this.action?.field?c`<span class="data-table__col-sort">
                                  <hmwc-icon flex part="sort-icon" src="chevron-down"></hmwc-icon>
                                </span>`:""}
                            ${t!==this.action?.field&&this._filterableFields[t]?c`
                                  <hmwc-attachment
                                    class="data-table__col-filter"
                                    placement="bottom-end"
                                    .distance=${8}
                                    .skidding=${8}
                                    arrow
                                    stayOpen
                                    @click=${e=>e.stopPropagation()}>
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
                          ${t!==this.action?.field?c`<div class="data-table__col-resize" @mousedown=${e=>this.handleResizeStart(e,t)}></div>`:""}
                        </th>
                      `)}
            </tr>
          </thead>

          <tbody part="data" class="data-table__body">
            ${this.entries.map((t,e)=>c`
                <tr
                  part="row"
                  class="data-table__table-row"
                  role="row"
                  @click=${()=>Object.values(t)[0]!=="\u200E "&&this.emit("hmwc-click",{detail:{value:t}})}>
                  ${this.selectable?c`
                        <td class="data-table__item checkbox">
                          <hmwc-checkbox
                            part="row-checkbox"
                            small
                            ?checked=${Gt(this.getSelectionStatus(e))}
                            @hmwc-change=${r=>this.selections[(this.page-1)*this.amount+e]=r.detail.value}></hmwc-checkbox>
                        </td>
                      `:""}
                  ${this.fieldKeys.map(r=>{let o=t[r];return/^\d+(\.\d+)?%$/.test(o)?c`
                          <td class="data-table__item percent">
                            <hmwc-progress
                              part="progress"
                              ?primary=${this.primary}
                              ?success=${this.success}
                              ?neutral=${this.neutral}
                              ?warning=${this.warning}
                              ?danger=${this.danger}
                              value=${parseInt(o.split("%")[0])}>
                            </hmwc-progress>
                          </td>
                        `:o==="#SKELETON"?c` <td class="data-table__item skeleton"><hmwc-skeleton></hmwc-skeleton></td> `:c`<td class="data-table__item">
                          ${o===!0?c`<hmwc-icon src="check" success></hmwc-icon>`:o===!1?c`<hmwc-icon src="x" danger></hmwc-icon>`:o&&this.isValidDate(o)?new Date(o).toLocaleDateString():o}
                        </td>`})}
                  ${this.action?c`<td class="data-table__item action">
                        <hmwc-button
                          sm
                          label=${this.action.label}
                          ?primary=${!this.action.variant||this.action.variant==="primary"}
                          ?success=${this.action.variant==="success"}
                          ?warning=${this.action.variant==="warning"}
                          ?neutral=${this.action.variant==="neutral"}
                          ?danger=${this.action.variant==="danger"}
                          @hmwc-click=${()=>this.emit("hmwc-action",{detail:{data:t}})}></hmwc-button>
                      </td> `:""}
                </tr>
              `)}
          </tbody>
        </table>

        ${this.pagination?c`
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
              `:""}
        </div>
      </div>
      </div>
    `}};C.styles=Ri;C.dependencies=[O,x,_,w,ft,N,at,B,A,Y];D([b()],C.prototype,"selections",void 0);D([b()],C.prototype,"_filterableFields",void 0);D([b()],C.prototype,"_columnFilters",void 0);D([b()],C.prototype,"fieldKeys",void 0);D([b()],C.prototype,"ready",void 0);D([b()],C.prototype,"results",void 0);D([b()],C.prototype,"entries",void 0);D([b()],C.prototype,"total",void 0);D([s({type:Array})],C.prototype,"data",void 0);D([s({type:Object})],C.prototype,"fields",void 0);D([s({type:Number,reflect:!0})],C.prototype,"page",void 0);D([s({type:Number,reflect:!0})],C.prototype,"amount",void 0);D([s({type:String})],C.prototype,"label",void 0);D([s({type:Object})],C.prototype,"sizing",void 0);D([s({type:String})],C.prototype,"filter",void 0);D([s({type:String})],C.prototype,"sort",void 0);D([s({type:String})],C.prototype,"order",void 0);D([s({type:Boolean})],C.prototype,"pagination",void 0);D([s({type:Boolean,reflect:!0})],C.prototype,"selectable",void 0);D([s({type:Boolean,reflect:!0})],C.prototype,"sm",void 0);D([s({type:Boolean,reflect:!0})],C.prototype,"md",void 0);D([s({type:Boolean,reflect:!0})],C.prototype,"lg",void 0);D([s({type:Object})],C.prototype,"action",void 0);D([s({type:Boolean,reflect:!0})],C.prototype,"cache",void 0);D([s({type:Boolean,reflect:!0})],C.prototype,"primary",void 0);D([s({type:Boolean,reflect:!0})],C.prototype,"success",void 0);D([s({type:Boolean,reflect:!0})],C.prototype,"neutral",void 0);D([s({type:Boolean,reflect:!0})],C.prototype,"warning",void 0);D([s({type:Boolean,reflect:!0})],C.prototype,"danger",void 0);D([u(["data","filter","order","fields"])],C.prototype,"dataUpdate",void 0);D([u(["amount","page"],{waitUntilFirstUpdate:!0})],C.prototype,"entriesUpdate",void 0);C.define("hmwc-data-table",C);var Di=d`
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
`;var ee=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},st=class extends p{constructor(){super(...arguments),this.align="center"}connectedCallback(){super.connectedCallback(),this.page&&(this.animation="scale-in");let t=this.controllers.slot.get();this.rows||(this.rows=Math.ceil(t.length/(this.cols||1))),t.forEach((e,r)=>{e.style.setProperty("z-index",`${t.length-(r+1)}`)})}render(){let t=g({grid:!0,"gap-xs":this.gap==="xs","gap-sm":this.gap==="sm","gap-md":this.gap==="md","gap-lg":this.gap==="lg","gap-xl":this.gap==="xl","gap-row-xs":this.gap?.includes("/")&&this.gap?.split("/")[0]==="xs"||!1,"gap-row-sm":this.gap?.includes("/")&&this.gap?.split("/")[0]==="sm"||!1,"gap-row-md":this.gap?.includes("/")&&this.gap?.split("/")[0]==="md"||!1,"gap-row-lg":this.gap?.includes("/")&&this.gap?.split("/")[0]==="lg"||!1,"gap-row-xl":this.gap?.includes("/")&&this.gap?.split("/")[0]==="xl"||!1,"gap-col-xs":this.gap?.includes("/")&&this.gap?.split("/")[1]==="xs"||!1,"gap-col-sm":this.gap?.includes("/")&&this.gap?.split("/")[1]==="sm"||!1,"gap-col-md":this.gap?.includes("/")&&this.gap?.split("/")[1]==="md"||!1,"gap-col-lg":this.gap?.includes("/")&&this.gap?.split("/")[1]==="lg"||!1,"gap-col-xl":this.gap?.includes("/")&&this.gap?.split("/")[1]==="xl"||!1,"justify-start":this.justify==="start","justify-end":this.justify==="end","justify-center":this.justify==="center","justify-stretch":this.justify==="stretch","justify-around":this.justify==="around","justify-between":this.justify==="between","justify-even":this.justify==="even","align-start":this.align==="start","align-end":this.align==="end","align-center":this.align==="center",fluid:!!this.fit,page:!!this.page});return c`
      <div part="base" class=${t}>
        ${this.label?c`<slot name="label" part="label">${this.label}</slot>`:""}

        <div
          part="content"
          class="grid__content"
          style="--rows: ${this.rows-1||1}; --cols: ${this.cols||1}; ${this.template?this.template instanceof Object?`--template-col: ${this.template.col}; --template-row: ${this.template.row}`:`--template-col: ${this.template}`:""}">
          <slot></slot>
        </div>
      </div>
    `}};st.styles=Di;st.dependencies=[];st.slots=[];ee([s({type:Number,reflect:!0})],st.prototype,"rows",void 0);ee([s({type:Number,reflect:!0})],st.prototype,"cols",void 0);ee([s({type:String})],st.prototype,"gap",void 0);ee([s({type:String})],st.prototype,"label",void 0);ee([s({type:String})],st.prototype,"template",void 0);ee([s({type:String})],st.prototype,"justify",void 0);ee([s({type:String})],st.prototype,"align",void 0);ee([s({type:Boolean})],st.prototype,"form",void 0);ee([s({type:Boolean,reflect:!0})],st.prototype,"fit",void 0);ee([s({type:Boolean,reflect:!0})],st.prototype,"page",void 0);st.define("hmwc-grid",st);var Ti=d`
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
`;var _r={info:{icon:"info-circle-fill",iconVariant:"primary",variant:"primary",fluid:!0,size:"sm",confirmLabel:"OK",hideCancel:!0,confirmation:!0},success:{icon:"check-circle-fill",iconVariant:"success",variant:"success",fluid:!0,size:"sm",confirmLabel:"OK",confirmVariant:"success",hideCancel:!0,confirmation:!0},warning:{icon:"exclamation-triangle-fill",iconVariant:"warning",variant:"warning",fluid:!0,size:"sm",confirmLabel:"OK",confirmVariant:"warning",hideCancel:!0,confirmation:!0},error:{icon:"x-circle-fill",iconVariant:"danger",variant:"danger",fluid:!0,size:"sm",confirmLabel:"OK",confirmVariant:"danger",hideCancel:!0,confirmation:!0},confirm:{icon:"question-circle-fill",iconVariant:"primary",variant:"primary",fluid:!0,size:"sm",confirmLabel:"Confirm",cancelLabel:"Cancel",confirmVariant:"primary",confirmation:!0},delete:{icon:"exclamation-triangle-fill",iconVariant:"danger",variant:"danger",fluid:!0,size:"sm",confirmLabel:"Delete",cancelLabel:"Cancel",confirmVariant:"danger",confirmation:!0},retry:{icon:"x-circle-fill",variant:"danger",fluid:!0,size:"sm",confirmLabel:"Retry",cancelLabel:"Cancel",confirmVariant:"danger",confirmation:!0}};var q=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},E=class extends p{constructor(){super(...arguments),this.variant="default",this.confirmLabel="Confirm",this.cancelLabel="Cancel",this.confirmVariant="primary",this.dismissible=!0,this.overlayDismiss=!0,this.escapeDismiss=!0,this.overlay=!0,this._keydownHandler=this._handleKeyDown.bind(this),this._autoDestroy=!1}connectedCallback(){super.connectedCallback(),this.route&&this._enableRouting(),!this.id&&this.title&&(this.id=this.title.toLowerCase().replace(/\s+/g,"-"))}firstUpdated(){if(this._popup.hidden=!this.active,this.active){let t=this._popup.querySelector(".popup__overlay");t&&t.style.setProperty("opacity","1"),this._panel.style.setProperty("opacity","1"),this._panel.style.setProperty("transform",this.drawer?"translateX(0)":"translateY(0) scale(1)"),this._addListeners(),this.controllers.scroll.lockBodyScrolling(this)}}disconnectedCallback(){super.disconnectedCallback(),this._removeListeners(),this.controllers.scroll.unlockBodyScrolling(this)}handleOpenChange(){let t=this._popup.querySelector(".popup__overlay");this.active?(this._popup.hidden=!1,this._panel.focus(),requestAnimationFrame(()=>{t&&t.style.setProperty("opacity","1"),this._panel.style.setProperty("opacity","1"),this._panel.style.setProperty("transform",this.drawer?"translateX(0)":"translateY(0) scale(1)")}),this._addListeners(),this.controllers.scroll.lockBodyScrolling(this),this.emit("hmwc-show")):(requestAnimationFrame(()=>{t&&t.style.setProperty("opacity","0"),this._panel.style.setProperty("opacity",this.drawer?"1":"0"),this._panel.style.setProperty("transform",this.drawer?"translateX(100%)":"translateY(8px) scale(0.96)")}),setTimeout(()=>{this.active||(this._popup.hidden=!0,this._autoDestroy&&this.remove())},350),this._removeListeners(),this.controllers.scroll.unlockBodyScrolling(this),this.emit("hmwc-hide"))}show(){this.active||(this._syncRoute(!0),this.active=!0)}hide(){this.active&&(this._syncRoute(!1),this.active=!1,this._resultResolver?.(!1),this._resultResolver=void 0)}async confirm(){this.emit("hmwc-submit",{cancelable:!0}).defaultPrevented||(this._resultResolver?.(!0),this._resultResolver=void 0,this.hide())}getResult(){return new Promise(t=>{this._resultResolver=t})}_addListeners(){document.addEventListener("keydown",this._keydownHandler)}_removeListeners(){document.removeEventListener("keydown",this._keydownHandler)}_handleKeyDown(t){t.key==="Escape"&&this.active&&(t.stopPropagation(),this.escapeDismiss&&this.hide())}_handleOverlayClick(){this.overlayDismiss&&this.hide()}_handleCancel(){this.emit("hmwc-cancel"),this.hide()}_syncRoute(t){if(!this.route)return;let e=window.location.pathname;window.location.href.includes("?")&&(e+=`?${window.location.href.split("?")[1].split("#")[0]}`),window.history.replaceState(null,"",t?`${e}#${this.route}`:e)}_enableRouting(){window.addEventListener("popstate",()=>{window.location.hash===`#${this.route}`?this.show():this.hide()})}_renderHeader(){return this.title||this.controllers.slot.test("header")||this.controllers.slot.test("title")?c`
      <slot name="header" part="header" class="popup__header">
        <div class="popup__header-content">
          ${this.icon||this.controllers.slot.test("icon")?c`
                <slot name="icon" part="icon" class="popup__icon ${this.iconVariant?`icon-${this.iconVariant}`:""}">
                  <hmwc-icon src=${y(this.icon)}></hmwc-icon>
                </slot>
              `:T}
          <slot name="title" part="title" class="popup__title"> ${this.title} </slot>
        </div>
        <div part="controls" class="popup__controls">
          <slot name="controls"></slot>
          ${this.dismissible?c`<hmwc-button sm basic icon="x-lg" @hmwc-click=${()=>this.hide()}></hmwc-button>`:T}
        </div>
      </slot>
    `:T}_renderFooter(){return this.controllers.slot.test("footer")||this.confirmation?c`
      <div part="footer" class="popup__footer">
        <slot name="footer" class="popup__footer-actions">
          ${this.confirmation?c`
                ${this.hideCancel?T:c`<hmwc-button sm neutral label=${this.cancelLabel} @hmwc-click=${()=>this._handleCancel()}></hmwc-button>`}
                <hmwc-button
                  sm
                  ?primary=${this.confirmVariant==="primary"}
                  ?success=${this.confirmVariant==="success"}
                  ?warning=${this.confirmVariant==="warning"}
                  ?danger=${this.confirmVariant==="danger"}
                  ?neutral=${this.confirmVariant==="neutral"}
                  label=${this.confirmLabel}
                  @hmwc-click=${()=>this.confirm()}></hmwc-button>
              `:T}
        </slot>
      </div>
    `:T}render(){let t=g({popup:!0,open:!!this.active,drawer:!!this.drawer,confirmation:!!this.confirmation,fluid:!!this.fluid,sm:!!this.sm,md:!!this.md||!this.sm&&!this.lg&&!this.xl&&!this.full,lg:!!this.lg,xl:!!this.xl,full:!!this.full,[`variant-${this.variant}`]:this.variant!=="default",header:!!this.title||this.controllers.slot.test("header")||this.controllers.slot.test("title"),footer:!!this.confirmation||this.controllers.slot.test("footer")});return c`
      <div part="base" class=${t}>
        ${this.overlay?c`<div part="overlay" class="popup__overlay" @click=${()=>this._handleOverlayClick()}></div>`:T}
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
    `}};E.styles=Ti;E.dependencies=[w,x];E.slots=["title","icon","controls","header","footer"];q([s({type:Boolean,reflect:!0})],E.prototype,"active",void 0);q([s({type:String})],E.prototype,"title",void 0);q([s({type:String})],E.prototype,"message",void 0);q([s({type:String})],E.prototype,"icon",void 0);q([s({type:String,attribute:"icon-variant"})],E.prototype,"iconVariant",void 0);q([s({type:Boolean,reflect:!0})],E.prototype,"sm",void 0);q([s({type:Boolean,reflect:!0})],E.prototype,"md",void 0);q([s({type:Boolean,reflect:!0})],E.prototype,"lg",void 0);q([s({type:Boolean,reflect:!0})],E.prototype,"xl",void 0);q([s({type:Boolean,reflect:!0})],E.prototype,"full",void 0);q([s({type:String,reflect:!0})],E.prototype,"variant",void 0);q([s({type:Boolean,reflect:!0})],E.prototype,"drawer",void 0);q([s({type:Boolean,reflect:!0})],E.prototype,"confirmation",void 0);q([s({type:Boolean,attribute:"hide-cancel"})],E.prototype,"hideCancel",void 0);q([s({type:String,attribute:"confirm-label"})],E.prototype,"confirmLabel",void 0);q([s({type:String,attribute:"cancel-label"})],E.prototype,"cancelLabel",void 0);q([s({type:String,attribute:"confirm-variant"})],E.prototype,"confirmVariant",void 0);q([s({type:Boolean,reflect:!0})],E.prototype,"fluid",void 0);q([s({type:Boolean,reflect:!0})],E.prototype,"dismissible",void 0);q([s({type:Boolean,attribute:"overlay-dismiss"})],E.prototype,"overlayDismiss",void 0);q([s({type:Boolean,attribute:"escape-dismiss"})],E.prototype,"escapeDismiss",void 0);q([s({type:Boolean,reflect:!0})],E.prototype,"overlay",void 0);q([s({type:String})],E.prototype,"route",void 0);q([R(".popup")],E.prototype,"_popup",void 0);q([R(".popup__panel")],E.prototype,"_panel",void 0);q([u("active",{waitUntilFirstUpdate:!0})],E.prototype,"handleOpenChange",null);function Ro(n={}){let t=Object.fromEntries(Object.entries(n).filter(([,i])=>i!==void 0)),e=n.preset?{..._r[n.preset],...t}:n,r=document.createElement("hmwc-popup");if(n.content&&(typeof n.content=="string"?r.innerHTML=n.content:r.appendChild(n.content)),n.buttons?.length){let i=document.createElement("div");i.slot="footer";for(let a of n.buttons){let l=document.createElement("hmwc-button");l.sm=!0,l.label=a.label,a.variant&&(l[a.variant]=!0),a.icon&&(l.icon=a.icon),a.basic&&(l.basic=!0),a.action&&l.addEventListener("hmwc-click",()=>a.action(r)),i.appendChild(l)}r.appendChild(i)}n.className&&(r.className=n.className),n.style&&(typeof n.style=="string"?r.setAttribute("style",n.style):Object.assign(r.style,n.style)),n.onShow&&r.addEventListener("hmwc-show",()=>n.onShow(r)),n.onHide&&r.addEventListener("hmwc-hide",()=>n.onHide(r)),n.onCancel&&r.addEventListener("hmwc-cancel",()=>n.onCancel(r)),n.onSubmit&&r.addEventListener("hmwc-submit",async i=>{await n.onSubmit(r)===!1&&i.preventDefault()}),document.body.appendChild(r),e.title&&(r.title=e.title),e.message&&(r.message=e.message),e.icon&&(r.icon=e.icon),e.iconVariant&&(r.iconVariant=e.iconVariant),e.size?r[e.size]=!0:r.sm=!0,e.variant&&(r.variant=e.variant),e.drawer&&(r.drawer=!0),e.confirmation&&(r.confirmation=!0),e.hideCancel&&(r.hideCancel=!0),e.confirmLabel&&(r.confirmLabel=e.confirmLabel),e.cancelLabel&&(r.cancelLabel=e.cancelLabel),e.confirmVariant&&(r.confirmVariant=e.confirmVariant),e.fluid&&(r.fluid=!0),e.dismissible===!1&&(r.dismissible=!1),e.overlayDismiss===!1&&(r.overlayDismiss=!1),e.escapeDismiss===!1&&(r.escapeDismiss=!1),e.overlay===!1&&(r.overlay=!1),r._autoDestroy=n.autoDestroy!==!1;let o=r.getResult();return requestAnimationFrame(()=>r.show()),{popup:r,result:o,close:()=>r.hide()}}E.define("hmwc-popup",E);var ji=d`
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
`;var re=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},pt=class extends p{constructor(){super(...arguments),this.userUpdate=()=>this.updateProxyUser(),this.logoUpdate=()=>this._logo=this.getLogoVariant()}return(){this.emit("hmwc-navigate",{detail:{route:"/"}})}handleSettingsClick(){window.location.hash="#settings"}handleMenuSelection(t){t.detail.value==="account"?(t.stopImmediatePropagation(),window.location.hash="#settings"):t.detail.value==="logout"&&this.emit("hmwc-navigate",{detail:{route:"/logout"}})}updateProxyUser(){this.proxyUser=this.user?.proxyHost?.firstName?this.user:{}}observeTheme(){new MutationObserver(t=>{t.forEach(e=>{e.type!=="attributes"&&e.attributeName!=="class"||(this._logo=this.getLogoVariant())})}).observe(document.documentElement,{attributes:!0})}getLogoVariant(){let t=document.documentElement.className.includes("theme-dark")?"dark":"light";return this.logo instanceof String?this.logo:!(this.logo instanceof Object)||!this.logo[t]?"":this.logo[t]}navigateFAQ(){this.emit("hmwc-navigate",{detail:{route:"/help-support/faq"}})}setDefaultHMWCLogo(){this.logo||(this.logo={light:"/src/assets/images/hmwc-dark.png",dark:"/src/assets/images/hmwc-light.png"})}connectedCallback(){super.connectedCallback(),this.setDefaultHMWCLogo(),this.observeTheme()}render(){let t=[{value:"account",label:"My Account"},{value:"logout",label:"Logout"}],e=this.user?(this.user.proxyHost?.firstName||this.user.firstName)+" "+(this.user.proxyHost?.lastName||this.user.lastName):"";return c`
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
    `}};pt.styles=ji;pt.dependencies=[O,it,V,w,_,E,U];re([b()],pt.prototype,"_logo",void 0);re([b()],pt.prototype,"proxyUser",void 0);re([s({type:String,reflect:!0})],pt.prototype,"title",void 0);re([s()],pt.prototype,"logo",void 0);re([s({type:Object})],pt.prototype,"user",void 0);re([s({type:Boolean,reflect:!0})],pt.prototype,"beta",void 0);re([R("#search")],pt.prototype,"popup",void 0);re([R("hmwc-menu")],pt.prototype,"menu",void 0);re([u("user")],pt.prototype,"userUpdate",void 0);re([u("logo")],pt.prototype,"logoUpdate",void 0);pt.define("hmwc-header",pt);var Pi=d`
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
`;var _e=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Dt=class extends p{render(){let t=g({image:!0,xs:!!this.xs,sm:!!this.sm,md:!!this.md,lg:!!this.lg,xl:!!this.xl});return c`
      <div part="base" class=${t}>
        <slot>
          <img src=${y(this.src)} alt=${this.alt??""} />
        </slot>
      </div>
    `}};Dt.styles=Pi;_e([s({type:String})],Dt.prototype,"src",void 0);_e([s({type:String})],Dt.prototype,"alt",void 0);_e([s({type:Boolean})],Dt.prototype,"xs",void 0);_e([s({type:Boolean})],Dt.prototype,"sm",void 0);_e([s({type:Boolean})],Dt.prototype,"md",void 0);_e([s({type:Boolean})],Dt.prototype,"lg",void 0);_e([s({type:Boolean})],Dt.prototype,"xl",void 0);Dt.define("hmwc-image",Dt);var Fi=d`
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
`;var Ni=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Jt=class extends p{constructor(){super(...arguments),this._items=[],this.items=[]}getItems(){return this.items.length?this.items:this.controllers.slot.get()}connectedCallback(){super.connectedCallback(),this.items.length||(this._items=this.getItems())}render(){return c`
      <div part="base" class="list">
        <ul part="list" class="list__list">
          <slot> ${this._items.map(t=>c` <li part="item" class="list__item">${t}</li> `)} </slot>
        </ul>
      </div>
    `}};Jt.styles=Fi;Jt.dependencies=[];Jt.slots=[];Ni([b()],Jt.prototype,"_items",void 0);Ni([s({type:String})],Jt.prototype,"items",void 0);Jt.define("hmwc-list",Jt);var Li=d`
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
`;var pe=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},wt=class extends p{constructor(){super(...arguments),this.groups=[]}open(){this.active=!0}close(){this.active=!1}toggle(){this.active=!this.active}openGroup(){this.active=!0}autoClose(){document.querySelector("#root")?.addEventListener("click",t=>{if(!["HMWC-NAVBAR","HMWC-HEADER"].includes(t.target.tagName)){if(document.body.classList.contains("hmwc-scroll-lock"))return;this.active=!1}})}enableKeyboardInteraction(){document.addEventListener("keypress",t=>{document.activeElement?.tagName!=="HMWC-INPUT"&&(t.preventDefault(),t.key==="s"&&(this.active=!this.active))})}handleOpenChange(){this.active||this.group?.hideAll()}handleRouteChange(){this.active=!1}handleRoutesChange(){if(!this.routes)return;let t=[];this.routes.forEach(e=>{let r=this.routes?.filter(o=>!(!o.path.startsWith(e.path)||o.path===e.path||o.path.split("/").length-1!==e.path.split("/").length));e.path.split("/").length<3&&(e.path!=="/"&&(e.routes=r),t.push(e))}),this.groups=t}connectedCallback(){super.connectedCallback(),this.autoClose(),this.enableKeyboardInteraction()}render(){let t=g({navbar:!0,open:!!this.active});return c`
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
    `}};wt.styles=Li;wt.dependencies=[ct,K,G];pe([b()],wt.prototype,"groups",void 0);pe([b()],wt.prototype,"route",void 0);pe([s({type:Array})],wt.prototype,"routes",void 0);pe([s({type:Boolean,reflect:!0})],wt.prototype,"active",void 0);pe([R(".navbar__group")],wt.prototype,"group",void 0);pe([u("open")],wt.prototype,"handleOpenChange",null);pe([u("route",{waitUntilFirstUpdate:!0})],wt.prototype,"handleRouteChange",null);pe([u("routes")],wt.prototype,"handleRoutesChange",null);wt.define("hmwc-navbar",wt);var Hi=d`
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
`;var Ut=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Q=class extends p{handleClick(){this.emit("click",{})}handleRemove(){this.emit("click",{detail:{tag:this.label}})}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0),!this.primary&&!this.success&&!this.neutral&&!this.warning&&!this.danger&&(this.primary=!0)}render(){let t=g({tag:!0,icon:!!this.icon,sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger,pill:!!this.pill,removable:!!this.removable});return c`
      <div part="base" class=${t} role="status" @click=${this.handleClick}>
        <slot class="tag__label" part="label"> ${this.icon&&c` <hmwc-icon src=${this.icon}></hmwc-icon> `} ${this.label} </slot>
        <div part="remove" class="tag__remove">
          ${this.removable&&c` <hmwc-button sm basic icon="x" @hmwc-click=${this.handleRemove}></hmwc-button> `}
        </div>
      </div>
    `}};Q.styles=Hi;Q.dependencies=[x];Ut([s({type:String})],Q.prototype,"label",void 0);Ut([s({type:String})],Q.prototype,"icon",void 0);Ut([s({type:Boolean,reflect:!0})],Q.prototype,"sm",void 0);Ut([s({type:Boolean,reflect:!0})],Q.prototype,"md",void 0);Ut([s({type:Boolean,reflect:!0})],Q.prototype,"lg",void 0);Ut([s({type:Boolean,reflect:!0})],Q.prototype,"primary",void 0);Ut([s({type:Boolean,reflect:!0})],Q.prototype,"success",void 0);Ut([s({type:Boolean,reflect:!0})],Q.prototype,"neutral",void 0);Ut([s({type:Boolean,reflect:!0})],Q.prototype,"warning",void 0);Ut([s({type:Boolean,reflect:!0})],Q.prototype,"danger",void 0);Ut([s({type:Boolean,reflect:!0})],Q.prototype,"pill",void 0);Ut([s({type:Boolean,reflect:!0})],Q.prototype,"removable",void 0);Q.define("hmwc-tag",Q);var Ii=d`
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
`;var xe=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},yt=class extends p{constructor(){super(...arguments),this.overrides=[],this.breadcrumbs=!0}updateOverrides(){let t=Array.from(this.children);this.overrides=t.filter(e=>e instanceof I)}connectedCallback(){super.connectedCallback(),this.updateOverrides()}render(){let t=g({page:!0,title:!!this.title||this.controllers.slot.test("title")});return c`
      <div part="base" class=${t}>
        ${this.route?c`<hmwc-breadcrumbs
              part="breadcrumbs"
              class="page__breadcrumbs"
              .route=${this.route}
              .routes=${this.routes}
              .overrides=${this.overrides}
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
    `}};yt.styles=Ii;yt.dependencies=[x,w,Q,I];yt.slots=["breadcrumb"];xe([b()],yt.prototype,"overrides",void 0);xe([s({type:String})],yt.prototype,"title",void 0);xe([s({type:String})],yt.prototype,"group",void 0);xe([s({type:String})],yt.prototype,"icon",void 0);xe([s({type:Boolean,reflect:!0})],yt.prototype,"breadcrumbs",void 0);xe([s({type:Object})],yt.prototype,"route",void 0);xe([s({type:Array})],yt.prototype,"routes",void 0);yt.define("hmwc-page",yt);var Ui=d`
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
        transition: 400ms width, 400ms background-color;
        user-select: none;
        -webkit-user-select: none;
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
        transition-property: stroke-dashoffset;
        transition-duration: 0.33s;
        stroke-dasharray: var(--circumference) var(--circumference);
        stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
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
`;var mt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},W=class extends p{constructor(){super(...arguments),this.current=0,this.value=0}handleValueChange(){this.current=this.value}connectedCallback(){super.connectedCallback(),!this.bar&&!this.ring&&(this.bar=!0),!this.small&&!this.medium&&!this.large&&(this.small=!0),this.current=this.value}render(){let t=g({progress:!0,bar:!!this.bar,ring:!!this.ring,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger,small:!!this.small,medium:!!this.medium,large:!!this.large,xl:!!this.xl,indeterminate:!!this.indeterminate,status:!!this.status});return c`
      <div
        part="base"
        class=${t}
        role="progressbar"
        title=${y(this.title)}
        aria-label=${this.label?this.label:"progress"}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.current}
        style="--percentage: ${this.current/100}">
        ${this.bar?c`
              <div part="indicator" class="progress__indicator" style="width: ${this.current}%">
                ${this.indeterminate?"":c` <slot part="label" class="progress__label"> ${this.status?`${this.current}%`:""} </slot> `}
              </div>
            `:this.ring?c`
              <svg class="progress__ring">
                <circle class="progress__track"></circle>
                <circle class="progress__indicator" style="stroke-dashoffset: ${this.offset}"></circle>
              </svg>

              <slot id="label" part="label" class="progress__label"> ${this.status?`${this.current}%`:""} </slot>
            `:""}
      </div>
    `}};W.styles=Ui;mt([b()],W.prototype,"offset",void 0);mt([b()],W.prototype,"current",void 0);mt([s({type:Boolean,reflect:!0})],W.prototype,"bar",void 0);mt([s({type:Boolean,reflect:!0})],W.prototype,"ring",void 0);mt([s({type:Boolean,reflect:!0})],W.prototype,"primary",void 0);mt([s({type:Boolean,reflect:!0})],W.prototype,"success",void 0);mt([s({type:Boolean,reflect:!0})],W.prototype,"neutral",void 0);mt([s({type:Boolean,reflect:!0})],W.prototype,"warning",void 0);mt([s({type:Boolean,reflect:!0})],W.prototype,"danger",void 0);mt([s({type:Boolean,reflect:!0})],W.prototype,"small",void 0);mt([s({type:Boolean,reflect:!0})],W.prototype,"medium",void 0);mt([s({type:Boolean,reflect:!0})],W.prototype,"xl",void 0);mt([s({type:Boolean,reflect:!0})],W.prototype,"large",void 0);mt([s({type:Number,reflect:!0})],W.prototype,"value",void 0);mt([s({type:Boolean})],W.prototype,"status",void 0);mt([s({type:Boolean,reflect:!0})],W.prototype,"indeterminate",void 0);mt([s({type:String})],W.prototype,"label",void 0);mt([u("value")],W.prototype,"handleValueChange",null);W.define("hmwc-progress",W);var Wi=d`
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
`;var xr=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Ft=class extends j{handleCheckedChange(){this.emit("hmwc-select",{detail:{value:this.checked}})}handleClick(){this.disabled||(this.checked=!0)}handleBlur(){this.emit("hmwc-blur")}handleFocus(){this.emit("hmwc-focus")}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0)}render(){let t=g({radio:!0,checked:!!this.checked,sm:!!this.sm,md:!!this.md,lg:!!this.lg,disabled:!!this.disabled,img:!!this.img});return c`
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
    `}};Ft.styles=Wi;Ft.dependencies=[x];xr([s({type:Boolean,reflect:!0})],Ft.prototype,"checked",void 0);xr([s({type:String,reflect:!0})],Ft.prototype,"img",void 0);xr([u("checked")],Ft.prototype,"handleCheckedChange",null);Ft.define("hmwc-radio",Ft);var Vi=d`
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
`;var Ie=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Tt=class extends j{handleValueChange(){this.emit("hmwc-change",{detail:{value:this.value}}),this.getRadios()?.forEach(t=>{t.checked=t.value===this.value})}getRadios(){return this.items?this.shadowRoot?.querySelectorAll("hmwc-radio"):this.controllers.slot.get()}handleClick(t){let e=t.target.closest("hmwc-radio");e.disabled||e.value&&(this.value=e.value,this.emit("hmwc-input"))}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0);let t=this.getRadios();t?.length&&(this.inline&&t.forEach(e=>e.style.setProperty("width","100%")),this.sm?t.forEach(e=>e.sm=!0):this.md?t.forEach(e=>e.md=!0):this.lg&&t.forEach(e=>e.lg=!0))}render(){let t=this.label||this.controllers.slot.test("label"),e=this.help||this.controllers.slot.test("help"),r=g({radiogroup:!0,small:!!this.sm,medium:!!this.md,large:!!this.lg,required:!!this.required,row:!!this.inline});return c`
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
                  ?checked=${(typeof o=="string"?o:o.value)===Gt(this.value)}
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
    `}};Tt.styles=Vi;Tt.dependencies=[Ft];Tt.slots=["label","help"];Ie([s({type:String})],Tt.prototype,"label",void 0);Ie([s({type:Array})],Tt.prototype,"items",void 0);Ie([s({type:String})],Tt.prototype,"help",void 0);Ie([s({type:Boolean,reflect:!0})],Tt.prototype,"inline",void 0);Ie([u("value")],Tt.prototype,"handleValueChange",null);Tt.define("hmwc-radio-group",Tt);var qi=d`
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
      padding: var(--col-padding);
      border-radius: var(--container-border-radius);
      aspect-ratio: var(--container-aspect-ratio);
      height: var(--container-height);
      max-height: var(--container-max-height);
      width: var(--container-width);
      max-width: var(--container-max-width);
      overflow-y: var(--container-scrollbar);
      box-shadow: var(--container-shadow);
      background: var(--container-background);
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
`;var Ue=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Wt=class extends F{connectedCallback(){if(super.connectedCallback(),this.align||(this.align="end"),this.wrap){if(this.wrap==="auto")return;let t=this.controllers.slot.get(),e=this.wrap===!0?t.length:this.wrap,r=e,o=100/parseInt(e.toString());t.forEach(i=>{let a=`calc(${o}% - calc(var(--container-spacing) / ${r}))`;i.style.setProperty("max-width",a)})}}render(){let t=g({row:!0,wrap:!!this.wrap,min:!!this.min,max:!!this.max,outline:!!this.outline,fit:!!this.fit,label:!!this.label||this.controllers.slot.test("label"),scrollable:!!this.scrollable});return c`
      <div part="base" class=${t}>
        <slot name="label" part="label" class="row__label">${this.label}</slot>
        <slot part="content" class="row__content"></slot>
      </div>
    `}};Wt.styles=qi;Ue([s({type:Boolean,reflect:!0})],Wt.prototype,"wrap",void 0);Ue([s({type:Boolean,reflect:!0})],Wt.prototype,"fit",void 0);Ue([s({type:Boolean,reflect:!0})],Wt.prototype,"min",void 0);Ue([s({type:Boolean,reflect:!0})],Wt.prototype,"max",void 0);Ue([s({type:Boolean,reflect:!0})],Wt.prototype,"outline",void 0);Wt.define("hmwc-row",Wt);var Yi=d`
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
`;var $e=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Ct=class extends p{constructor(){super(...arguments),this.step=1,this.value=[],this.placement="bottom"}updateSteps(){this.current=this.value.map((t,e)=>{let r="pending",o="Pending",i=t.progress||0,a=t.icon;return e===this.step-1&&(r="active",o="In Progress"),e<this.step-1&&(r="complete",o="Completed",i||(i=50),a="check2-circle"),{...t,progress:i,state:r,status:o,icon:a}}),this.emit("hmwc-change",{detail:{value:this.current}})}render(){let t=g({stepper:!0,fluid:!!this.fluid,status:!!this.status,"placement-top":this.placement==="top","placement-bottom":this.placement==="bottom","placement-left":this.placement==="left","placement-right":this.placement==="right"});return c`
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
    `}};Ct.styles=Yi;Ct.dependencies=[x];$e([b()],Ct.prototype,"current",void 0);$e([s({type:Number,reflect:!0})],Ct.prototype,"step",void 0);$e([s({type:Array})],Ct.prototype,"value",void 0);$e([s({type:Boolean,reflect:!0})],Ct.prototype,"fluid",void 0);$e([s({type:Boolean,reflect:!0})],Ct.prototype,"status",void 0);$e([s({type:String})],Ct.prototype,"placement",void 0);$e([u(["steps","step"])],Ct.prototype,"updateSteps",null);Ct.define("hmwc-stepper",Ct);var Ki=d`
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
`;var Do=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},ie=class extends j{click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input?.checkValidity()}reportValidity(){return this.input?.reportValidity()}handleClick(){this.checked=!this.checked,this.emit("hmwc-change")}handleInput(){this.emit("hmwc-input")}handleFocus(){this.emit("hmwc-focus")}handleBlur(){this.emit("hmwc-blur")}handleKeyDown(t){["ArrowLeft","ArrowRight"].includes(t.key)&&(t.preventDefault(),this.checked=t.key==="ArrowRight",this.emit("hmwc-change",{detail:{value:this.checked}}),this.emit("hmwc-input"))}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0)}render(){let t=g({switch:!0,checked:!!this.checked,sm:!!this.sm,md:!!this.md,lg:!!this.lg,disabled:!!this.disabled,required:!!this.required,label:!!this.label||this.controllers.slot.test("label")});return c`
      <label part="base" class=${t}>
        <input
          class="switch__input"
          type="checkbox"
          title=${this.label||""}
          name=${y(this.name)}
          value=${y(this.value)}
          ?checked=${Gt(this.checked)}
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
    `}};ie.styles=Ki;ie.slots=["label"];ie.toggle=!0;Do([R(".switch__input")],ie.prototype,"input",void 0);ie.define("hmwc-switch",ie);var Gi=d`
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
`;var $r=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},zt=class extends p{handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tabpanel")}render(){let t=g({"tab-content":!0,active:this.active});return c` <slot part="base" class=${t}></slot> `}};zt.styles=Gi;zt.dependencies=[];$r([b()],zt.prototype,"active",void 0);$r([s({type:String,reflect:!0})],zt.prototype,"name",void 0);$r([u("active")],zt.prototype,"handleActiveChange",null);zt.define("hmwc-tab-content",zt);var Xi=d`
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
`;var ce=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},nt=class extends p{constructor(){super(...arguments),this.name=Math.random().toString(36).substr(2,9)}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.tab.focus(t)}blur(){this.tab.blur()}handleClose(t){t.stopPropagation(),this.emit("close")}updateContent(){let t=this.closest("hmwc-tab-group"),e=this.children;if(!e||!t||Array.from(t.children).find(o=>o instanceof zt&&o.name===this.name))return;let r=Object.assign(document.createElement("hmwc-tab-content"),{name:this.name,active:this.active});e instanceof Element?r.appendChild(e):Array.from(e).forEach(o=>{r.appendChild(o)}),t?.appendChild(r)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab"),this.setAttribute("slot","tab"),this.updateContent()}render(){let t=g({tab:!0,active:!!this.active,closable:!!this.closeable,disabled:!!this.disabled});return c`
      <div part="base" class=${t} tabindex=${this.disabled?"-1":"0"}>
        <slot name="icon" class="tab__icon">${this.icon?c`<hmwc-icon src=${this.icon}></hmwc-icon>`:""}</slot>
        <slot>${this.label}</slot>
        ${this.closeable?c`<span class="tab__close"><hmwc-button part="close" basic medium icon="x" @hmwc-click=${this.handleClose}> </hmwc-button></span>`:""}
      </div>
    `}};nt.styles=Xi;nt.dependencies=[w];ce([s({type:String})],nt.prototype,"name",void 0);ce([s({type:String})],nt.prototype,"label",void 0);ce([s({type:Boolean,reflect:!0})],nt.prototype,"active",void 0);ce([s({type:Boolean,reflect:!0})],nt.prototype,"closeable",void 0);ce([s({type:Boolean,reflect:!0})],nt.prototype,"disabled",void 0);ce([s({type:String})],nt.prototype,"icon",void 0);ce([R(".tab")],nt.prototype,"tab",void 0);ce([u("active")],nt.prototype,"handleActiveChange",null);ce([u("disabled")],nt.prototype,"handleDisabledChange",null);nt.define("hmwc-tab",nt);var Ji=d`
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
`;var Vt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},ot=class extends p{constructor(){super(...arguments),this.scrollable=!1,this.tabs=[],this.content=[],this.placement="top",this.active=""}handlePlacementChange(){this.indicator&&(this.getCurrentTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none")}handleTabsChange(){this.getTabs().find(e=>e.active)||this.setCurrentTab(this.getCurrentTab())}show(t){setTimeout(()=>{let e=this.tabs.find(r=>r.name===t);e&&this.setCurrentTab(e)},1)}getTabs(){let t=this.querySelectorAll("hmwc-tab");return Array.from(t)}getContent(){let t=this.querySelectorAll("hmwc-tab-content");return Array.from(t)}getCurrentTab(){return this.getTabs().find(t=>t.active)||this.tabs[0]}setAria(){this.tabs.forEach(t=>{let e=this.content.find(r=>r.name===t.name);e&&(t.setAttribute("aria-controls",e.id),e.setAttribute("aria-labelledby",t.id))})}setCurrentTab(t){if(t===this.current||t.disabled)return;let e=this.current;this.current=t,this.active=t.name||"";let r=o=>o.active=o.name===t.name;this.tabs.forEach(r),this.content.forEach(r),this.handlePlacementChange(),!(!this.current||!this.tabsEl)&&(["top","bottom"].includes(this.placement)&&this.autoScroll&&this.controllers.scroll.scrollIntoView(this.current,this.tabsEl,"horizontal"),e?this.emit("hmwc-hide",{bubbles:!1}):this.emit("hmwc-show"))}repositionIndicator(){if(!this.current)return;let t=this.indicator.style,e=this.current.clientWidth,r=this.current.clientHeight,o=this.tabs.indexOf(this.current),a=this.tabs.slice(0,o).reduce((l,h)=>({left:l.left+h.clientWidth,top:l.top+h.clientHeight}),{left:0,top:0});["top","bottom"].includes(this.placement)?(t.width=`${e}px`,t.height="auto",t.transform=`translateX(${a.left}px)`):["start","end"].includes(this.placement)&&(t.width="auto",t.height=`${r}px`,t.transform=`translateY(${a.top}px)`)}handleClick(t){let r=t.target.closest("hmwc-tab");r?.closest("hmwc-tab-group")!==this||!r||this.setCurrentTab(r)}handleKeyDown(t){let r=t.target.closest("hmwc-tab"),o=r?.closest("hmwc-tab-group"),i=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"];if(!(o!==this||!r)&&i.includes(t.key)){let a=["top","bottom"].includes(this.placement),l=["start","end"].includes(this.placement),h=this.tabs.find(f=>f.matches(":focus"));if(!h)return;let m=this.tabs.indexOf(h);if(t.key==="Home"?m=0:t.key==="End"?m=this.tabs.length-1:t.key==="ArrowLeft"&&a||t.key==="ArrowUp"&&l?m--:(t.key==="ArrowRight"&&a||t.key==="ArrowDown"&&l)&&m++,m<0?m=this.tabs.length-1:m>this.tabs.length-1&&(m=0),this.tabs[m].focus({preventScroll:!0}),this.setCurrentTab(this.tabs[m]),!this.current||!this.tabsEl)return;a&&this.controllers.scroll.scrollIntoView(this.current,this.tabsEl,"horizontal")}}handleScroll(t){let e=0;t==="left"?e=this.nav.scrollLeft-this.nav.clientWidth:t==="right"&&(e=this.nav.scrollLeft+this.nav.clientWidth),this.nav.scroll({left:e,behavior:"smooth"})}handleSlotChange(){this.handlePlacementChange(),this.tabs=this.getTabs(),this.content=this.getContent()}reset(){this.setCurrentTab(this.tabs[0])}connectedCallback(){if(super.connectedCallback(),this.setAttribute("role","tablist"),this.tabs=this.getTabs(),this.content=this.getContent(),!this.tabs&&!this.content||(this.setCurrentTab(this.getCurrentTab()),this.setAria(),!this.nav))return;let t=["top","bottom"].includes(this.placement),e=this.nav.scrollWidth>this.nav.clientWidth;this.scrollable=t&&e}render(){let t=g({"tab-group":!0,scrollable:this.scrollable,fluid:!!this.fluid});return c`
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
    `}};ot.styles=Ji;ot.dependencies=[nt,zt,w];Vt([b()],ot.prototype,"scrollable",void 0);Vt([b()],ot.prototype,"tabs",void 0);Vt([b()],ot.prototype,"content",void 0);Vt([s({type:String,reflect:!0})],ot.prototype,"placement",void 0);Vt([s({type:Boolean})],ot.prototype,"autoScroll",void 0);Vt([s({type:String,reflect:!0})],ot.prototype,"active",void 0);Vt([s({type:Boolean,reflect:!0})],ot.prototype,"fluid",void 0);Vt([R(".tab-group__tabs")],ot.prototype,"tabsEl",void 0);Vt([R(".tab-group__nav")],ot.prototype,"nav",void 0);Vt([R(".tab-group__indicator")],ot.prototype,"indicator",void 0);Vt([u("placement",{waitUntilFirstUpdate:!0})],ot.prototype,"handlePlacementChange",null);Vt([u("tabs",{waitUntilFirstUpdate:!0})],ot.prototype,"handleTabsChange",null);ot.define("hmwc-tab-group",ot);var Zi=d`
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
`;var Zt=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},tt=class extends p{constructor(){super(...arguments),this.alignment="start"}valueUpdated(){this.emit("hmwc-change",{detail:{value:this.label}})}firstUpdated(){this.label||(this.label=this.shadowRoot?.querySelector("table-cell__body")?.textContent||"")}render(){let t=g({"table-cell":!0,"align-start":this.alignment==="start","align-center":this.alignment==="center","align-end":this.alignment==="end",icon:!!this.icon,progress:!!this.progress,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
      <div
        part="base"
        class=${t}
        @hover=${()=>this.emit("hmwc-hover")}
        @focus=${()=>this.emit("hmwc-focus")}
        @blur=${()=>this.emit("hmwc-blur")}>
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
    `}};tt.styles=Zi;tt.dependencies=[x,U,W,ft];Zt([s({type:String,reflect:!0})],tt.prototype,"label",void 0);Zt([s({type:String,reflect:!0})],tt.prototype,"icon",void 0);Zt([s({type:Number,reflect:!0})],tt.prototype,"progress",void 0);Zt([s({type:String,reflect:!0})],tt.prototype,"alignment",void 0);Zt([s({type:Number,reflect:!0})],tt.prototype,"index",void 0);Zt([s({type:Boolean,reflect:!0})],tt.prototype,"primary",void 0);Zt([s({type:Boolean,reflect:!0})],tt.prototype,"success",void 0);Zt([s({type:Boolean,reflect:!0})],tt.prototype,"neutral",void 0);Zt([s({type:Boolean,reflect:!0})],tt.prototype,"warning",void 0);Zt([s({type:Boolean,reflect:!0})],tt.prototype,"danger",void 0);Zt([u(["value"])],tt.prototype,"valueUpdated",null);tt.define("hmwc-table-cell",tt);var Qi=d` 
  :host { 
    display: block;
   } 

   .table-field {
    
   }
`;var To=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},oe=class extends p{render(){return c`
            <div part='base' class='table-field'>
                <slot></slot>
            </div>
        `}};oe.styles=Qi;oe.dependencies=[];oe.slots=[];To([s({type:String})],oe.prototype,"prop",void 0);oe.define("hmwc-table-field",oe);var to=d`
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
`;var Ee=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},gt=class extends p{constructor(){super(...arguments),this.hover=!0,this.cells=[]}cellsUpdate(){let t=this.cells.filter(e=>e.index);t.length?this.cells.filter(r=>r.index===void 0).forEach((r,o)=>{t.find(i=>i.index===o)||(r.index=o),o++}):this.cells.map((e,r)=>e.index=r),this.cells=this.cells.sort((e,r)=>e.index-r.index)}firstUpdated(){this.cells=this.controllers.slot.get().filter(t=>t instanceof tt)}render(){let t=g({"table-row":!0,alt:this.index%2!==0});return c`<div part="base" class=${t}>
        ${this.selectable?c`<hmwc-checkbox></hmwc-checkbox>`:""}${this.cells}${this.removable?c`<hmwc-button basic danger icon="x"></hmwc-button>`:""}
      </div>
      <slot></slot>`}};gt.styles=to;gt.dependencies=[];gt.slots=[];Ee([s({type:Number,reflect:!0})],gt.prototype,"index",void 0);Ee([s({type:Boolean,reflect:!0})],gt.prototype,"hover",void 0);Ee([s({type:Boolean,reflect:!0})],gt.prototype,"selectable",void 0);Ee([s({type:Boolean,reflect:!0})],gt.prototype,"removable",void 0);Ee([b()],gt.prototype,"cells",void 0);Ee([u("cells",{waitUntilFirstUpdate:!0})],gt.prototype,"cellsUpdate",null);gt.define("hmwc-table-row",gt);var eo=d`
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
`;var We=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},jt=class extends p{constructor(){super(...arguments),this.rows=[],this.fields=[]}rowsUpdate(){let t=this.rows.filter(e=>e.index);t.length?this.rows.filter(e=>e.index===void 0).forEach((e,r)=>{t.find(o=>o.index===r)||(e.index=r),r++}):this.rows.map((e,r)=>e.index=r),this.rows=this.rows.sort((e,r)=>e.index-r.index),this.rows[0]?.cells&&(this.fields.length||(this.fields=Array.from(Array(this.rows[0]?.cells.length).keys()).map(()=>""))),this.rows.find(e=>e.selectable)&&(this.fields=["",...this.fields]),this.rows.find(e=>e.removable)&&(this.fields=[...this.fields,""])}fieldsUpdate(){}firstUpdated(){this.rows=this.controllers.slot.get().filter(t=>t instanceof gt)}render(){let t=g({table:!0,fluid:!!this.fluid,fields:this.fields.some(e=>e!=="")});return c`
      <div part="base" class=${t}>
        <div part="head" class="table__head">
          <div class="table__head-row">${this.fields?.map(e=>c`<div part="col-head" class="table__head-item">${e}</div>`)}</div>
        </div>
        ${this.rows.map(e=>e)}
        <slot></slot>
      </div>
    `}};jt.styles=eo;jt.dependencies=[];jt.slots=["[Default]"];We([b()],jt.prototype,"rows",void 0);We([s({type:Array})],jt.prototype,"fields",void 0);We([s({type:Boolean,reflect:!0})],jt.prototype,"fluid",void 0);We([u("rows")],jt.prototype,"rowsUpdate",null);We([u("fields")],jt.prototype,"fieldsUpdate",null);jt.define("hmwc-table",jt);var ro=d`
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
`;var me=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},lt=class n extends p{constructor(){super(...arguments),this.selection="single",this.checked=!1,this.items=[]}getTreeItems(){return this.items.length||this.controllers.slot.get().forEach(t=>{t instanceof n&&this.items.push({label:t.controllers.slot.get("label")[0].textContent||"",icon:t.controllers.slot.get("icon")[0].src,selected:t.selected,expanded:t.expanded,items:t.getTreeItems()})}),this.items}handleClick(){this.selected=!this.selected,this.selection==="multiple"&&(this.checked=this.selected),this.emit("select",{detail:{value:this}}),this.items&&(this.expanded=this.selected)}connectedCallback(){super.connectedCallback()}render(){let t=g({"tree-item":!0,items:!!this.items.length,expanded:!!this.expanded,disabled:!!this.disabled,selected:!!this.selected&&!this.disabled});return c`
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
    `}};lt.styles=ro;lt.dependencies=[x,at];lt.slots=["label","icon"];me([s({type:String})],lt.prototype,"selection",void 0);me([s({type:String})],lt.prototype,"label",void 0);me([s({type:String})],lt.prototype,"icon",void 0);me([s({type:Boolean,reflect:!0})],lt.prototype,"selected",void 0);me([s({type:Boolean,reflect:!0})],lt.prototype,"checked",void 0);me([s({type:Boolean,reflect:!0})],lt.prototype,"expanded",void 0);me([s({type:Boolean,reflect:!0})],lt.prototype,"disabled",void 0);me([s({type:Array})],lt.prototype,"items",void 0);lt.define("hmwc-tree-item",lt);var io=d`
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
`;var Ve=function(n,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,r);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},Nt=class extends p{constructor(){super(...arguments),this.selection="single",this.items=[]}handleSelectionChange(){this.controllers.slot.get().forEach(t=>{t.selection=this.selection})}singleSelect(t,e){return e.map(r=>(r.label===t.label?(r.selected=!0,r.items&&(r.expanded=!0)):r.selected=!1,r.items&&(r.items=this.singleSelect(t,r.items),r.items.some(o=>o.selected)&&(r.expanded=!0)),r))}multiSelect(t,e){return e.map(r=>(r.label===t.label&&(r.selected=!0,r.checked=!0,r.items&&(r.expanded=!0)),r.items&&(r.items=this.multiSelect(t,r.items),r.items.some(o=>o.selected)&&(r.expanded=!0)),r))}handleSelection(t){let e=t.detail.value;this.selection==="single"?this.items=this.singleSelect(e,this.items):this.selection==="multiple"&&(this.items=this.multiSelect(e,this.items))}connectedCallback(){super.connectedCallback(),this.controllers.slot.get().forEach(t=>{t.selection=this.selection})}render(){let t=g({tree:!0,label:!!this.label||this.controllers.slot.test("label")});return c`
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
    `}};Nt.styles=io;Nt.dependencies=[lt];Ve([s()],Nt.prototype,"selection",void 0);Ve([s({type:Boolean,reflect:!0})],Nt.prototype,"expanded",void 0);Ve([s({type:Array})],Nt.prototype,"items",void 0);Ve([s({type:String,reflect:!0})],Nt.prototype,"label",void 0);Ve([u("selection")],Nt.prototype,"handleSelectionChange",null);Nt.define("hmwc-tree",Nt);return mo(jo);})();

// Expose imperative functions globally
if (typeof window !== 'undefined') {
  window.HMWCPopup = HMWC.HMWCPopup;
  window.HMWCAlert = HMWC.HMWCAlert;
}

