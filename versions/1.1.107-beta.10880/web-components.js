"use strict";var HMWC=(()=>{var fr=Object.defineProperty;var jo=Object.getOwnPropertyDescriptor;var No=Object.getOwnPropertyNames;var Io=Object.prototype.hasOwnProperty;var Lo=(s,t)=>{for(var e in t)fr(s,e,{get:t[e],enumerable:!0})},Uo=(s,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of No(t))!Io.call(s,i)&&i!==e&&fr(s,i,{get:()=>t[i],enumerable:!(r=jo(t,i))||r.enumerable});return s};var Ho=s=>Uo(fr({},"__esModule",{value:!0}),s);var ka={};Lo(ka,{Accordion:()=>Q,AccordionGroup:()=>vt,Alert:()=>H,AlertPresets:()=>Sr,Attachment:()=>O,Avatar:()=>F,Badge:()=>Y,Banner:()=>Ut,Breadcrumb:()=>U,Breadcrumbs:()=>mt,Button:()=>y,Calendar:()=>q,Card:()=>it,Chart:()=>nt,Checkbox:()=>pt,Col:()=>Lt,Combobox:()=>L,DataTable:()=>$,Divider:()=>K,Dropdown:()=>W,Grid:()=>ut,HMWCAlert:()=>ca,HMWCComponent:()=>u,HMWCContainerComponent:()=>I,HMWCFormComponent:()=>P,HMWCPopup:()=>ya,Header:()=>yt,Icon:()=>_,Image:()=>at,Input:()=>x,List:()=>ne,Menu:()=>S,MenuItem:()=>E,Navbar:()=>zt,Page:()=>Et,Pagination:()=>Z,Popup:()=>T,PopupPresets:()=>Br,Progress:()=>V,Radio:()=>Xt,RadioGroup:()=>Wt,Row:()=>ee,Skeleton:()=>$t,Spinner:()=>X,Stepper:()=>Pt,Switch:()=>he,Tab:()=>ft,TabContent:()=>Ft,TabGroup:()=>dt,Table:()=>Vt,TableCell:()=>st,TableField:()=>Ct,TableRow:()=>St,Tag:()=>et,Text:()=>k,Tooltip:()=>G,Tree:()=>Jt,TreeItem:()=>gt});var Qe=globalThis,Ze=Qe.ShadowRoot&&(Qe.ShadyCSS===void 0||Qe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gr=Symbol(),Fr=new WeakMap,Fe=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==gr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Ze&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=Fr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Fr.set(e,t))}return t}toString(){return this.cssText}},jr=s=>new Fe(typeof s=="string"?s:s+"",void 0,gr),m=(s,...t)=>{let e=s.length===1?s[0]:t.reduce((r,i,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[o+1],s[0]);return new Fe(e,s,gr)},Nr=(s,t)=>{if(Ze)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),i=Qe.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,s.appendChild(r)}},vr=Ze?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return jr(e)})(s):s;var{is:Wo,defineProperty:Vo,getOwnPropertyDescriptor:qo,getOwnPropertyNames:Go,getOwnPropertySymbols:Ko,getPrototypeOf:Yo}=Object,tr=globalThis,Ir=tr.trustedTypes,Xo=Ir?Ir.emptyScript:"",Jo=tr.reactiveElementPolyfillSupport,je=(s,t)=>s,Ne={toAttribute(s,t){switch(t){case Boolean:s=s?Xo:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},er=(s,t)=>!Wo(s,t),Lr={attribute:!0,type:String,converter:Ne,reflect:!1,useDefault:!1,hasChanged:er};Symbol.metadata??=Symbol("metadata"),tr.litPropertyMetadata??=new WeakMap;var de=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Lr){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(t,r,e);i!==void 0&&Vo(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){let{get:i,set:o}=qo(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let l=i?.call(this);o?.call(this,n),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Lr}static _$Ei(){if(this.hasOwnProperty(je("elementProperties")))return;let t=Yo(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(je("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(je("properties"))){let e=this.properties,r=[...Go(e),...Ko(e)];for(let i of r)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,i]of e)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let i=this._$Eu(e,r);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let i of r)e.unshift(vr(i))}else t!==void 0&&e.push(vr(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Nr(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){let o=(r.converter?.toAttribute!==void 0?r.converter:Ne).toAttribute(e,r.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=r.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Ne;this._$Em=i;let l=n.fromAttribute(e,o.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,r,i=!1,o){if(t!==void 0){let n=this.constructor;if(i===!1&&(o=this[t]),r??=n.getPropertyOptions(t),!((r.hasChanged??er)(o,e)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:i,wrapped:o},n){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,o]of r){let{wrapped:n}=o,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};de.elementStyles=[],de.shadowRootOptions={mode:"open"},de[je("elementProperties")]=new Map,de[je("finalized")]=new Map,Jo?.({ReactiveElement:de}),(tr.reactiveElementVersions??=[]).push("2.1.2");var wr=globalThis,Ur=s=>s,rr=wr.trustedTypes,Hr=rr?rr.createPolicy("lit-html",{createHTML:s=>s}):void 0,yr="$lit$",pe=`lit$${Math.random().toFixed(9).slice(2)}$`,_r="?"+pe,Qo=`<${_r}>`,$e=document,Le=()=>$e.createComment(""),Ue=s=>s===null||typeof s!="object"&&typeof s!="function",xr=Array.isArray,Yr=s=>xr(s)||typeof s?.[Symbol.iterator]=="function",br=`[ 	
\f\r]`,Ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wr=/-->/g,Vr=/>/g,xe=RegExp(`>|${br}(?:([^\\s"'>=/]+)(${br}*=${br}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qr=/'/g,Gr=/"/g,Xr=/^(?:script|style|textarea|title)$/i,kr=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),c=kr(1),Jr=kr(2),Qr=kr(3),At=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Kr=new WeakMap,ke=$e.createTreeWalker($e,129);function Zr(s,t){if(!xr(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Hr!==void 0?Hr.createHTML(t):t}var ti=(s,t)=>{let e=s.length-1,r=[],i,o=t===2?"<svg>":t===3?"<math>":"",n=Ie;for(let l=0;l<e;l++){let h=s[l],d,g,b=-1,j=0;for(;j<h.length&&(n.lastIndex=j,g=n.exec(h),g!==null);)j=n.lastIndex,n===Ie?g[1]==="!--"?n=Wr:g[1]!==void 0?n=Vr:g[2]!==void 0?(Xr.test(g[2])&&(i=RegExp("</"+g[2],"g")),n=xe):g[3]!==void 0&&(n=xe):n===xe?g[0]===">"?(n=i??Ie,b=-1):g[1]===void 0?b=-2:(b=n.lastIndex-g[2].length,d=g[1],n=g[3]===void 0?xe:g[3]==='"'?Gr:qr):n===Gr||n===qr?n=xe:n===Wr||n===Vr?n=Ie:(n=xe,i=void 0);let _t=n===xe&&s[l+1].startsWith("/>")?" ":"";o+=n===Ie?h+Qo:b>=0?(r.push(d),h.slice(0,b)+yr+h.slice(b)+pe+_t):h+pe+(b===-2?l:_t)}return[Zr(s,o+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},He=class s{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let o=0,n=0,l=t.length-1,h=this.parts,[d,g]=ti(t,e);if(this.el=s.createElement(d,r),ke.currentNode=this.el.content,e===2||e===3){let b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(i=ke.nextNode())!==null&&h.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let b of i.getAttributeNames())if(b.endsWith(yr)){let j=g[n++],_t=i.getAttribute(b).split(pe),z=/([.?@])?(.*)/.exec(j);h.push({type:1,index:o,name:z[2],strings:_t,ctor:z[1]==="."?or:z[1]==="?"?ar:z[1]==="@"?nr:Se}),i.removeAttribute(b)}else b.startsWith(pe)&&(h.push({type:6,index:o}),i.removeAttribute(b));if(Xr.test(i.tagName)){let b=i.textContent.split(pe),j=b.length-1;if(j>0){i.textContent=rr?rr.emptyScript:"";for(let _t=0;_t<j;_t++)i.append(b[_t],Le()),ke.nextNode(),h.push({type:2,index:++o});i.append(b[j],Le())}}}else if(i.nodeType===8)if(i.data===_r)h.push({type:2,index:o});else{let b=-1;for(;(b=i.data.indexOf(pe,b+1))!==-1;)h.push({type:7,index:o}),b+=pe.length-1}o++}}static createElement(t,e){let r=$e.createElement("template");return r.innerHTML=t,r}};function Ce(s,t,e=s,r){if(t===At)return t;let i=r!==void 0?e._$Co?.[r]:e._$Cl,o=Ue(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(s),i._$AT(s,e,r)),r!==void 0?(e._$Co??=[])[r]=i:e._$Cl=i),i!==void 0&&(t=Ce(s,i._$AS(s,t.values),i,r)),t}var ir=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??$e).importNode(e,!0);ke.currentNode=i;let o=ke.nextNode(),n=0,l=0,h=r[0];for(;h!==void 0;){if(n===h.index){let d;h.type===2?d=new Me(o,o.nextSibling,this,t):h.type===1?d=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(d=new sr(o,this,t)),this._$AV.push(d),h=r[++l]}n!==h?.index&&(o=ke.nextNode(),n++)}return ke.currentNode=$e,i}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},Me=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ce(this,t,e),Ue(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==At&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Yr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==A&&Ue(this._$AH)?this._$AA.nextSibling.data=t:this.T($e.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=He.createElement(Zr(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{let o=new ir(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=Kr.get(t.strings);return e===void 0&&Kr.set(t.strings,e=new He(t)),e}k(t){xr(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,i=0;for(let o of t)i===e.length?e.push(r=new s(this.O(Le()),this.O(Le()),this,this.options)):r=e[i],r._$AI(o),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let r=Ur(t).nextSibling;Ur(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Se=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}_$AI(t,e=this,r,i){let o=this.strings,n=!1;if(o===void 0)t=Ce(this,t,e,0),n=!Ue(t)||t!==this._$AH&&t!==At,n&&(this._$AH=t);else{let l=t,h,d;for(t=o[0],h=0;h<o.length-1;h++)d=Ce(this,l[r+h],e,h),d===At&&(d=this._$AH[h]),n||=!Ue(d)||d!==this._$AH[h],d===A?t=A:t!==A&&(t+=(d??"")+o[h+1]),this._$AH[h]=d}n&&!i&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},or=class extends Se{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}},ar=class extends Se{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A)}},nr=class extends Se{constructor(t,e,r,i,o){super(t,e,r,i,o),this.type=5}_$AI(t,e=this){if((t=Ce(this,t,e,0)??A)===At)return;let r=this._$AH,i=t===A&&r!==A||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==A&&(r===A||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},sr=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Ce(this,t)}},ei={M:yr,P:pe,A:_r,C:1,L:ti,R:ir,D:Yr,V:Ce,I:Me,H:Se,N:ar,U:nr,B:or,F:sr},Zo=wr.litHtmlPolyfillSupport;Zo?.(He,Me),(wr.litHtmlVersions??=[]).push("3.3.2");var ri=(s,t,e)=>{let r=e?.renderBefore??t,i=r._$litPart$;if(i===void 0){let o=e?.renderBefore??null;r._$litPart$=i=new Me(t.insertBefore(Le(),o),o,void 0,e??{})}return i._$AI(s),i};var $r=globalThis,me=class extends de{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ri(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return At}};me._$litElement$=!0,me.finalized=!0,$r.litElementHydrateSupport?.({LitElement:me});var ta=$r.litElementPolyfillSupport;ta?.({LitElement:me});($r.litElementVersions??=[]).push("4.2.2");var ea={attribute:!0,type:String,converter:Ne,reflect:!1,hasChanged:er},ra=(s=ea,t,e)=>{let{kind:r,metadata:i}=e,o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),r==="setter"&&((s=Object.create(s)).wrapped=!0),o.set(e.name,s),r==="accessor"){let{name:n}=e;return{set(l){let h=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,h,s,!0,l)},init(l){return l!==void 0&&this.C(n,void 0,s,l),l}}}if(r==="setter"){let{name:n}=e;return function(l){let h=this[n];t.call(this,l),this.requestUpdate(n,h,s,!0,l)}}throw Error("Unsupported decorator location: "+r)};function a(s){return(t,e)=>typeof e=="object"?ra(s,t,e):((r,i,o)=>{let n=i.hasOwnProperty(o);return i.constructor.createProperty(o,r),n?Object.getOwnPropertyDescriptor(i,o):void 0})(s,t,e)}function v(s){return a({...s,state:!0,attribute:!1})}var Ae=(s,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(s,t,e),e);function R(s,t){return(e,r,i)=>{let o=n=>n.renderRoot?.querySelector(s)??null;if(t){let{get:n,set:l}=typeof r=="object"?e:i??(()=>{let h=Symbol();return{get(){return this[h]},set(d){this[h]=d}}})();return Ae(e,r,{get(){let h=n.call(this);return h===void 0&&(h=o(this),(h!==null||this.hasUpdated)&&l.call(this,h)),h}})}return Ae(e,r,{get(){return o(this)}})}}var We={class:"hmwc-scroll-lock",prop:"--hmwc-scroll-lock-size"},lr=class s{get scrollbarWidth(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}lockBodyScrolling(t){if(s.locks.add(t),document.body.classList.contains(We.class))return;let e=this.scrollbarWidth;document.body.classList.add(We.class),document.body.style.setProperty(We.prop,`${e}px`)}unlockBodyScrolling(t){s.locks.delete(t),!(s.locks.size>0)&&(document.body.classList.remove(We.class),document.body.style.removeProperty(We.prop))}scrollIntoView(t,e,r="vertical",i="smooth"){let o={top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)},n=o.top+e.scrollTop,l=o.left+e.scrollLeft,h=e.scrollLeft,d=e.scrollLeft+e.offsetWidth,g=e.scrollTop,b=e.scrollTop+e.offsetHeight;(r==="horizontal"||r==="both")&&(l<h?e.scrollTo({left:l,behavior:i}):l+t.clientWidth>d&&e.scrollTo({left:l-e.offsetWidth+t.clientWidth,behavior:i})),(r==="vertical"||r==="both")&&(n<g?e.scrollTo({top:n,behavior:i}):n+t.clientHeight>b&&e.scrollTo({top:n-e.offsetHeight+t.clientHeight,behavior:i}))}constructor(t){this.host=t,t.addController(this)}hostConnected(){}hostDisconnected(){}};lr.locks=new Set;var ii=lr;var Ve=class{hasDefaultSlot(){return Array.from(this.host.childNodes).some(t=>{let e=t.nodeType===t.TEXT_NODE,r=t.nodeType===t.ELEMENT_NODE,i=t.textContent.trim()==="",o=t.parentElement?.hasAttribute("slot");return e&&!i||r&&!o})}hasNamedSlot(t){let e=`[slot="${t}"]`;return this.host.querySelector(e)!==null}getDefaultSlot(){return Array.from(this.host.children).filter(t=>{let e=t.nodeType===t.TEXT_NODE,r=t.nodeType===t.ELEMENT_NODE,i=t.textContent.trim()==="",o=t.parentElement?.hasAttribute("slot");return t.slot?!1:e&&!i||r&&!o})}getNamedSlot(t){let e=`[slot="${t}"]`;return this.host.querySelector(e)}insert(t,e){let r=Array.from(this.host.shadowRoot?.querySelectorAll("slot")||[]);e?r.find(i=>i.name===e)?.appendChild(t):r.filter(i=>!i.name)[0]?.appendChild(t)}prepend(t,e){let r=Array.from(this.host.shadowRoot?.querySelectorAll("slot")||[]);e?r.find(i=>i.name===e)?.prepend(t):r.filter(i=>!i.name)[0]?.prepend(t)}test(t){return t?this.hasNamedSlot(t):this.hasDefaultSlot()}get(t){if(t){let e=this.getNamedSlot(t);return e?[e]:[]}else return this.getDefaultSlot()}constructor(t){this.slots=[],this.handleUpdate=e=>{let r=e.target,i=this.slots.includes("[default]")&&!r.name,o=r.name&&this.slots.includes(r.name);!i&&!o||this.host.requestUpdate()},this.host=t,this.slots=t.constructor.slots,t.addController(this)}hostConnected(){this.root=this.host.shadowRoot,this.root?.addEventListener("slotchange",this.handleUpdate)}hostDisconnected(){this.root?.removeEventListener("slotchange",this.handleUpdate)}};function p(s,t){let e={waitUntilFirstUpdate:!1,...t};return(r,i)=>{let{update:o}=r,n=Array.isArray(s)?s:[s];r.update=function(l){l&&(n.forEach(h=>{let d=h;if(l.has(d)){let g=l.get(d),b=this[d];g!==b&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[i](g,b)}}),o.call(this,l))}}}var oi=m`
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
`;var xt=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},ia=function(s,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?s!==t||!r:!t.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(s):r?r.value:t.get(s)},oa=function(s,t,e,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?s!==t||!i:!t.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(s,e):i?i.value=e:t.set(s,e),e},cr,u=class extends me{static get styles(){let t=this._styles?this._styles:[];return[oi,...Array.isArray(t)?t:[t]]}static set styles(t){let e=this._styles?this._styles:[];this._styles=[e,t]}tooltipChanged(){this.tooltip?this._tooltipEl?this._tooltipEl.textContent=this.tooltip:this._setupTooltip():this._teardownTooltip()}spanChanged(){this.span?this.reposition():(this.style.removeProperty("--colspan"),this.style.removeProperty("--rowspan"))}emit(t,e){let r=new CustomEvent(t,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...e});return this.dispatchEvent(r),r}changeStep(t){this.controllers.form?.changeStep(t)}static define(t,e=this){customElements.get(t)||customElements.define(t,class extends e{})}reposition(){let t=this.parentElement,e={cols:1,rows:1};this.span===!0?e.cols=t.cols:this.span instanceof Array?(e.cols=this.span[0]===!0?t.cols:this.span[0]||1,e.rows=this.span[1]===!0?t.rows:this.span[1]||1):e.cols=this.span||e.cols,e.cols>1&&this.style.setProperty("--colspan",`${e.cols}`),e.rows>1&&this.style.setProperty("--rowspan",`${e.rows+1}`),["col","row","justify"].forEach(i=>{let o=this[i];o&&this.style.setProperty(`--${i}`,`${o}`)})}applyStyles(){let t={xxs:"0.125rem",xs:"var(--hmwc-spacing-3x-small)",sm:"var(--hmwc-spacing-2x-small)",md:"var(--hmwc-spacing-x-small)",lg:"var(--hmwc-spacing-large)",xl:"var(--hmwc-spacing-x-large)",xxl:"var(--hmwc-spacing-2x-large)",auto:"auto"};this.top&&this.style.setProperty("--top",`${t[this.top]}`),this.bottom&&this.style.setProperty("--bottom",`${t[this.bottom]}`)}applyAnimation(){["HMWC-CARD","HMWC-ALERT","HMWC-ACCORDION","HMWC-ACCORDION-GROUP"].includes(this.tagName)&&this.style.setProperty("--animation","scale-in"),this.animation&&(this.animation instanceof Object?(this.animation.name&&this.style.setProperty("--animation",`${this.animation.name}`),this.animation.duration&&this.style.setProperty("--animation-duration",`${this.animation.duration}ms`),this.animation.easing&&this.style.setProperty("--animation-easing",`${this.animation.easing}`)):this.style.setProperty("--animation",`${this.animation}`))}firstUpdated(t){super.firstUpdated(t)}connectedCallback(){super.connectedCallback(),this.parentElement?.tagName==="HMWC-GRID"&&this.reposition(),this.applyStyles(),this.applyAnimation(),this.notificationStack&&this._ensureStackContainer(),this.tooltip&&this._setupTooltip(),this._revealObserver=new MutationObserver(t=>{for(let e of t)e.attributeName==="hidden"&&!this.hasAttribute("hidden")&&this._playReveal()}),this._revealObserver.observe(this,{attributes:!0,attributeFilter:["hidden"]})}_playReveal(){let t=Array.from(this.children).filter(o=>o instanceof HTMLElement&&!o.classList.contains("hmwc-notification-stack"));if(!t.length){this.classList.add("hmwc-reveal"),this.addEventListener("animationend",()=>this.classList.remove("hmwc-reveal"),{once:!0});return}let e=50,r=350,i="cubic-bezier(0.2, 0, 0.13, 1.5)";t.forEach((o,n)=>{o.animate([{opacity:0,transform:"translateY(12px)",filter:"blur(2px)"},{opacity:1,transform:"translateY(0)",filter:"blur(0)"}],{duration:r,delay:n*e,easing:i,fill:"both"})})}_ensureStackContainer(){this._stackContainer||(this._stackContainer=Object.assign(document.createElement("div"),{className:"hmwc-notification-stack"}),this.global||(this.style.position="relative"),this.appendChild(this._stackContainer))}_positionTooltip(){if(!this._tooltipEl)return;let t=this.getBoundingClientRect(),e=this._tooltipEl.getBoundingClientRect(),r=this.tooltipPlacement||"top",i=6,o=0,n=0;switch(r){case"top":default:o=t.top-e.height-i,n=t.left+t.width/2-e.width/2;break;case"top-start":o=t.top-e.height-i,n=t.left;break;case"top-end":o=t.top-e.height-i,n=t.right-e.width;break;case"bottom":o=t.bottom+i,n=t.left+t.width/2-e.width/2;break;case"bottom-start":o=t.bottom+i,n=t.left;break;case"bottom-end":o=t.bottom+i,n=t.right-e.width;break;case"left":o=t.top+t.height/2-e.height/2,n=t.left-e.width-i;break;case"left-start":o=t.top,n=t.left-e.width-i;break;case"left-end":o=t.bottom-e.height,n=t.left-e.width-i;break;case"right":o=t.top+t.height/2-e.height/2,n=t.right+i;break;case"right-start":o=t.top,n=t.right+i;break;case"right-end":o=t.bottom-e.height,n=t.right+i;break}this._tooltipEl.style.top=`${o}px`,this._tooltipEl.style.left=`${n}px`}_setupTooltip(){if(this._tooltipEl)return;let t=document.createElement("div");t.setAttribute("role","tooltip"),t.setAttribute("aria-live","off"),t.textContent=this.tooltip||"",Object.assign(t.style,{display:"none",position:"fixed",width:"max-content",maxWidth:"20rem",borderRadius:"var(--hmwc-tooltip-border-radius)",backgroundColor:"var(--hmwc-tooltip-background-color)",fontFamily:"var(--hmwc-tooltip-font-family)",fontSize:"var(--hmwc-tooltip-font-size)",fontWeight:"var(--hmwc-tooltip-font-weight)",lineHeight:"var(--hmwc-tooltip-line-height)",color:"var(--hmwc-tooltip-color)",padding:"var(--hmwc-tooltip-padding)",pointerEvents:"none",userSelect:"none",zIndex:"var(--hmwc-z-index-tooltip)"}),this._tooltipEl=t,document.body.appendChild(t),this.addEventListener("mouseenter",this._tooltipShow),this.addEventListener("mouseleave",this._tooltipHide),this.addEventListener("focusin",this._tooltipShow),this.addEventListener("focusout",this._tooltipHide),document.addEventListener("keydown",this._tooltipKeyDown)}_teardownTooltip(){this._tooltipEl&&(this._tooltipEl.remove(),this._tooltipEl=void 0),clearTimeout(this._tooltipTimeout),this.removeEventListener("mouseenter",this._tooltipShow),this.removeEventListener("mouseleave",this._tooltipHide),this.removeEventListener("focusin",this._tooltipShow),this.removeEventListener("focusout",this._tooltipHide),document.removeEventListener("keydown",this._tooltipKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this._teardownTooltip(),this._revealObserver?.disconnect()}constructor(){super(),this.controllers=this._createControllers(),this._tooltipShow=()=>{this._tooltipEl&&(clearTimeout(this._tooltipTimeout),this._tooltipTimeout=window.setTimeout(()=>{this._tooltipEl&&(this._tooltipEl.style.display="block",this._tooltipEl.setAttribute("aria-live","polite"),this._positionTooltip())},150))},this._tooltipHide=()=>{this._tooltipEl&&(clearTimeout(this._tooltipTimeout),this._tooltipTimeout=window.setTimeout(()=>{this._tooltipEl&&(this._tooltipEl.style.display="none",this._tooltipEl.setAttribute("aria-live","off"))},150))},this._tooltipKeyDown=t=>{t.key==="Escape"&&this._tooltipEl&&(this._tooltipEl.style.display="none")},cr.set(this,!1),this.initialReflectedProperties=new Map}_createControllers(){let t,e,r=this;return{get slot(){return t??=new Ve(r)},get scroll(){return e??=new ii(r)}}}attributeChangedCallback(t,e,r){ia(this,cr,"f")||(this.constructor.elementProperties.forEach((i,o)=>{i.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),oa(this,cr,!0,"f")),super.attributeChangedCallback(t,e,r)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,r)=>{t.has(r)&&this[r]==null&&(this[r]=e)})}};cr=new WeakMap;u.dependencies=[];u.slots=[];xt([a({type:String})],u.prototype,"tooltip",void 0);xt([a({type:String,attribute:"tooltip-placement"})],u.prototype,"tooltipPlacement",void 0);xt([p("tooltip")],u.prototype,"tooltipChanged",null);xt([a({type:Boolean,reflect:!0})],u.prototype,"notificationStack",void 0);xt([a({type:Boolean,reflect:!0})],u.prototype,"global",void 0);xt([a({type:Boolean})],u.prototype,"formTemplate",void 0);xt([a({type:Boolean})],u.prototype,"formGroup",void 0);xt([a({type:String})],u.prototype,"name",void 0);xt([a({type:Number})],u.prototype,"step",void 0);xt([a({type:Object})],u.prototype,"animation",void 0);xt([a({type:Number})],u.prototype,"span",void 0);xt([a({type:Number})],u.prototype,"col",void 0);xt([a({type:Number})],u.prototype,"row",void 0);xt([a({type:String})],u.prototype,"justify",void 0);xt([a({type:String})],u.prototype,"top",void 0);xt([a({type:String})],u.prototype,"bottom",void 0);xt([p("span")],u.prototype,"spanChanged",null);var ai=m`
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
`;var It=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},P=class extends u{static get styles(){let t=super.styles;return[...Array.isArray(t)?t:[t],ai]}static set styles(t){super.styles=t}get(){return this.toggleComponent?this.checked:this.value}set(t){this.toggleComponent?this.checked=!!t:this.value=t}get validity(){return{...this._validity}}_isEmpty(){return this.toggleComponent?!this.checked:!String(this.value??"").trim()}_focusableControl(){return this}_resolveError(){return this._validity.customError&&this._customError?this._customError:this._validity.valueMissing?"Please fill out this field.":"Invalid value."}_resetValidity(){this._validity={valid:!0,valueMissing:!1,tooShort:!1,tooLong:!1,patternMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,typeMismatch:!1,badInput:!1,customError:!1}}validate(){return this.reportValidity()}showValidity(){}checkValidity(){return this._resetValidity(),this.disabled?!0:(this._customError!==null&&(this._validity.customError=!0),this.required&&this._isEmpty()&&(this._validity.valueMissing=!0),this._validity.valid=!(this._validity.valueMissing||this._validity.tooShort||this._validity.tooLong||this._validity.patternMismatch||this._validity.rangeUnderflow||this._validity.rangeOverflow||this._validity.typeMismatch||this._validity.badInput||this._validity.customError),this._validity.valid)}reportValidity(){let t=!!this.invalid;return this.checkValidity()?(t&&(this.invalid=!1,this.error=void 0,this._emitValid()),!0):(this.invalid=!0,this.error=this._resolveError(),this._focusableControl()?.focus(),this._emitInvalid(),!1)}setCustomError(t){this._customError=t,this._validity.customError=!0,this._validity.valid=!1,this.invalid=!0,this.error=t,this._emitInvalid()}setCustomValidity(t){t?this.setCustomError(t):this.clearValidity()}clearValidity(){let t=!!this.invalid;this._customError=null,this._resetValidity(),this.invalid=!1,this.error=void 0,t&&this._emitValid()}hideValidation(){}willUpdate(t){this._customError!==null&&(this.invalid=!0,this.error=this._customError),super.willUpdate(t)}_emitInvalid(){let t={field:this.name??this.id??"",value:this.toggleComponent?this.checked:this.value,error:this.error??"",validity:{...this._validity}};this.emit("hmwc-invalid",{detail:t})}_emitValid(){let t={field:this.name??this.id??"",value:this.toggleComponent?this.checked:this.value};this.emit("hmwc-valid",{detail:t})}_errorId(){return`${this.id||"hmwc-form"}-error`}_ariaInvalid(){return this.invalid?"true":"false"}_ariaErrorMessage(){if(this.invalid&&this.error)return this._errorId()}_renderError(){return!this.invalid||!this.error?A:c` <div part="error" class="hmwc-error" id=${this._errorId()} role="alert" aria-live="polite">${this.error}</div> `}_renderRequiredIndicator(){return!this.required||!this.requiredIndicator?A:c`<span part="required-indicator" class="hmwc-required-indicator" aria-hidden="true">*</span>`}connectedCallback(){super.connectedCallback()}constructor(){super(),this.value="",this._validity={valid:!0,valueMissing:!1,tooShort:!1,tooLong:!1,patternMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,typeMismatch:!1,badInput:!1,customError:!1},this._customError=null}};P.formComponent=!0;It([a({type:String,reflect:!0})],P.prototype,"name",void 0);It([a({type:String,reflect:!0})],P.prototype,"value",void 0);It([a({type:Boolean,reflect:!0})],P.prototype,"checked",void 0);It([a({type:Boolean,reflect:!0})],P.prototype,"required",void 0);It([a({type:Boolean,reflect:!0,attribute:"required-indicator"})],P.prototype,"requiredIndicator",void 0);It([a({type:Boolean,reflect:!0})],P.prototype,"disabled",void 0);It([a({type:Boolean,reflect:!0})],P.prototype,"invalid",void 0);It([a({type:String})],P.prototype,"error",void 0);It([a({type:String})],P.prototype,"label",void 0);It([a({type:String,reflect:!0,attribute:"label-pos"})],P.prototype,"labelPos",void 0);It([a({type:Boolean,reflect:!0})],P.prototype,"sm",void 0);It([a({type:Boolean,reflect:!0})],P.prototype,"md",void 0);It([a({type:Boolean,reflect:!0})],P.prototype,"lg",void 0);It([a({type:Boolean})],P.prototype,"autofocus",void 0);var ni="data-auto-disabled",hr=class s{edit(t){this.setAll(t),this.editing=!0,this.accordionGroups.size>0&&this.accordionGroups.forEach(e=>{e.forEach(r=>r.hide())}),queueMicrotask(()=>{this.snapshot=this.getFormData()??null,this.updateButtonState()})}cancelEdit(){this.editing=!1,this.snapshot=null,this.updateButtonState(),this.host.emit("hmwc-cancel")}isDirty(){if(!this.editing||!this.snapshot)return!0;let t=this.getFormData();return t?JSON.stringify(t)!==JSON.stringify(this.snapshot):!1}set(t,e){if(!e)return;let r;try{r=JSON.parse(e)}catch{r=e}let i=l=>this.components.find(h=>h.getAttribute("name")===l),o=(l,h)=>{if(h&&typeof h=="object"&&!Array.isArray(h)&&l.hasAttribute("formGroup")&&Array.from(l.children).forEach(d=>{let g=d;if(!g.hasAttribute("name"))return;let b=g.getAttribute("name");b&&o(g,h[b])}),!this.FORM_COMPONENTS.includes(this.HMWCName(l))&&(typeof h!="object"||h===null)){this.getFormComponentsInElement(l).forEach(g=>o(g,h));return}if(["checkbox","switch"].includes(this.HMWCName(l)))h===!0||h==="true"||h===1||h==="1"?l.setAttribute("checked","true"):l.removeAttribute("checked");else{let d=typeof h=="string"?decodeURIComponent(h):String(h??"");if(d==null||d==="null"||d==='""')return;this.HMWCName(l)==="input"&&l.getAttribute("type")==="date"&&(l.initialValueDateParsed=!1),l.setAttribute("value",d)}},n=i(t);if(n)if(n.hasAttribute("formGroup"))if(Array.isArray(r)){let l=Array.from(n.children).find(h=>h.formTemplate);l?(Array.from(n.children).forEach(h=>{!h.formTemplate&&this.HMWCName(h)!=="button"&&h.remove()}),r.length>0&&o(l,r[0]),r.length>1&&this.addFromTemplate(l,r.length-1).forEach((d,g)=>{o(d,r[g+1])})):Array.from(n.children).forEach((h,d)=>{o(h,r[d])})}else r&&typeof r=="object"&&Object.keys(r).forEach(l=>{let h=i(l);h&&o(h,r[l])});else o(n,r)}setAll(t){let e={};Object.keys(t).forEach(r=>{e[r]=JSON.stringify(t[r])}),this.components.forEach(r=>{let i=r.name??r.id;i&&Object.keys(t).includes(i)&&this.set(i,e[i])})}validate(){let t=[];this.components.forEach(r=>{if(this.FORM_COMPONENTS.includes(this.HMWCName(r))&&r.checkValidity){if(r.checkValidity()){r.invalid=!1;return}r.reportValidity?.(),r.invalid=!0,t.push(r)}});let e=t.sort((r,i)=>r.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)[0];e&&(e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),e.focus({preventScroll:!0})),this.updateButtonState()}validateEl(t){t?.checkValidity&&(t.invalid=!t.checkValidity()),this.updateButtonState()}clear(){this.editing=!1,this.snapshot=null,this.removeAllFromTemplates(),this.components.forEach(t=>{t.setAttribute("value",""),t.removeAttribute("value"),t.removeAttribute("checked"),t.removeAttribute("invalid")}),this.host.emit("hmwc-reset")}submit(t){if(t&&t.key!=="Enter")return;let e=!0;if(this.accordionGroups.size>0){for(let i=1;i<=this.steps;i++)if(!this.validateStep(i)){e=!1;let o=this.getAccordionForStep(i);o&&this.getComponentsInAccordion(o).forEach(n=>{this.validateEl(n)}),this.updateAccordionErrorIndicator(i),this.changeStep(i);break}e&&this.getOuterFormComponents().forEach(i=>{i.checkValidity&&!i.checkValidity()&&(e=!1,this.validateEl(i))})}else this.components.forEach(i=>{i.hasAttribute("formGroup")||(this.stepComponents.length?i.step===this.step&&i.checkValidity&&!i.checkValidity()&&(e=!1):i.checkValidity&&!i.checkValidity()&&(e=!1))});if(!e){this.validate();return}let r=this.getFormData(t);if(r)return this.host.emit("submit",{detail:{value:r}}),this.host.emit("hmwc-submit",{detail:{data:r}}),this.editing=!1,this.snapshot=null,r}changeStep(t){let e=this.step??0;this.step=t,this.updateStepUI(),this.updateButtonState(),this.host.emit("hmwc-change",{detail:{value:this.getFormData()}}),this.host.emit("hmwc-step",{detail:{from:e,to:t}})}increment(){if(this.step!==void 0&&this.step<this.steps){if(this.accordionGroups.size>0){if(this.isAccordionMultipleMode()){let e=!0;if(this.accordionGroups.forEach(i=>{i.forEach(o=>{o.active&&o.step!==void 0&&(this.validateStep(o.step)||(e=!1,this.getComponentsInAccordion(o).forEach(n=>{this.validateEl(n)}),this.updateAccordionErrorIndicator(o.step)))})}),!e)return;let r=this.findNextInactiveStep();r!==void 0&&this.changeStep(r);return}if(!this.validateStep(this.step)){let e=this.getAccordionForStep(this.step);e&&this.getComponentsInAccordion(e).forEach(r=>{this.validateEl(r)}),this.updateAccordionErrorIndicator(this.step);return}}this.changeStep(this.step+1)}}decrement(){if(this.step===void 0)return;let t=this.accordionGroups.size>0?1:0;this.step>t&&this.changeStep(this.step-1)}canPerform(t,e){switch(t){case"submit":return!(this.editing&&!this.isDirty());case"reset":return!(!this.data||Object.keys(this.data).length===0);case"cancel":return this.editing;case"next":return this.step===void 0?!1:this.step<this.steps;case"previous":{if(this.step===void 0)return!1;let r=this.accordionGroups.size>0?1:0;return this.step>r}case"add":{if(!e)return this.templates.size>0;let r=this.findTemplate(e);if(!r)return!1;let i=this.templateLimit(r,"max");return i===void 0||this.templateRowCount(r)<i}case"remove":{if(!e)return this.templates.size>0;let r=this.findTemplateRow(e);if(!r||r.formTemplate)return!1;let i=this.findTemplate(r);if(!i)return!0;let o=this.templateLimit(i,"min")??1;return this.templateRowCount(i)>o}default:return!1}}templateLimit(t,e){let r=t.parentElement?.getAttribute(`template-${e}`);if(r==null||r==="")return;let i=Number(r);return Number.isInteger(i)&&i>=1?i:void 0}templateRowCount(t){let e=t.parentElement;return e?1+Array.from(e.children).filter(r=>r.hasAttribute("data-template-clone")).length:1}async perform(t,e){if(!this.canPerform(t,e))return!1;if(e&&this.cooldownMs>0){let r=Date.now(),i=this.lastActionTime.get(e)??0;if(r-i<this.cooldownMs)return!1;this.lastActionTime.set(e,r)}switch(t){case"submit":return!!this.submit();case"reset":return this.clear(),!0;case"cancel":return this.cancelEdit(),!0;case"next":return this.increment(),!0;case"previous":return this.decrement(),!0;case"add":return e?(this.handleTemplateAdd(e),!0):(console.warn('FormController.perform("add"): a source element is required.'),!1);case"remove":return e?(this.handleTemplateRemove(e),!0):(console.warn('FormController.perform("remove"): a source element is required.'),!1);default:return!1}}getFormData(t){if(t&&t?.key!=="Enter"||t&&!this.SUBMIT_ON_ENTER.includes(this.HMWCName(document.activeElement||void 0)))return;t&&t.preventDefault();let e={},r=new Set;return this.components.forEach(i=>{if(i.hasAttribute("formGroup")){if(r.has(i)||this.findFormGroup(i))return;r.add(i);let l=i.name;l&&(e[l]=this.collectGroupData(i));return}if(!this.FORM_COMPONENTS.includes(this.HMWCName(i)))return;let o=this.findFormGroup(i);if(o){if(r.has(o))return;if(this.findFormGroup(o)){r.add(o);return}r.add(o);let l=this.collectGroupData(o),h=o.name;h&&(e[h]=l)}else{if(!i.name)return;let n=this.getComponentValue(i);if(Object.keys(e).includes(i.name)){let l=e[i.name];e[i.name]=[...Array.isArray(l)?l:[l],n]}else e[i.name]=n}}),e}findFormGroup(t){let e=t.parentElement;for(;e&&e!==this.host;){if(e.hasAttribute("formGroup"))return e;e=e.parentElement}return null}getComponentValue(t){if(["checkbox","switch"].includes(this.HMWCName(t)))return this.binary?t.checked?1:0:t.checked;let e=String(t.value??""),r;try{r=decodeURIComponent(e)}catch{r=e}if(this.HMWCName(t)==="input"&&t.getAttribute("type")==="number"){if(r==="")return;let i=Number(r);return isNaN(i)?r:i}if(!(this.HMWCName(t)==="input"&&t.getAttribute("type")==="date"&&r===""))return r}collectGroupData(t){let e=Array.from(t.children);return this.shouldCollectAsArray(e)?e.map(i=>this.collectRowData(i)).filter(i=>!(i==null||typeof i=="object"&&!Array.isArray(i)&&Object.keys(i).length===0)):this.collectObjectData(t)}shouldCollectAsArray(t){if(t.length===0)return!1;let e=t[0];return this.FORM_COMPONENTS.includes(this.HMWCName(e))&&e.name?!1:this.FORM_COMPONENTS.includes(this.HMWCName(e))?t.every(o=>!o.name):!0}collectRowData(t){let e={};return this.FORM_COMPONENTS.includes(this.HMWCName(t))?this.getComponentValue(t):(this.getFormComponentsInElement(t).forEach(i=>{i.name&&(e[i.name]=this.getComponentValue(i))}),this.collectNestedFormGroups(t,e),e)}collectObjectData(t){let e={};return this.getFormComponentsInElement(t).forEach(i=>{i.name&&(e[i.name]=this.getComponentValue(i))}),this.collectNestedFormGroups(t,e),e}collectNestedFormGroups(t,e){let r=i=>{Array.from(i.children).forEach(o=>{if(o.hasAttribute("formGroup")){let n=o.name;n&&(e[n]=this.collectGroupData(o))}else this.FORM_COMPONENTS.includes(this.HMWCName(o))||r(o)})};r(t)}getFormComponentsInElement(t){let e=[],r=i=>{Array.from(i.children).forEach(o=>{o.hasAttribute("formGroup")||(this.FORM_COMPONENTS.includes(this.HMWCName(o))?e.push(o):r(o))})};return r(t),e}addFromTemplate(t,e=1,r=!1){let i=this.findTemplate(t);if(!i)return console.warn("FormController: No formTemplate found"),[];let o=i.parentElement;if(!o)return[];let n=this.templateLimit(i,"max");n!==void 0&&(e=Math.min(e,n-this.templateRowCount(i)));let l=[];for(let d=0;d<e;d++){let g=i.cloneNode(!0);g.removeAttribute("formTemplate"),g.formTemplate=!1,g.setAttribute("data-template-clone",""),g.style.display="",g.removeAttribute("hidden"),r||this.clearElementValues(g);let b=o.lastElementChild;b&&this.HMWCName(b)==="button"?o.insertBefore(g,b):o.appendChild(g),l.push(g)}this.refreshHMWCFormComponents(),this.updateData();let h=this.resolveTemplateGroup(i);return l.forEach(d=>{let g=d.parentElement,b=g?Array.prototype.indexOf.call(g.children,d):-1;this.host.emit("hmwc-template-add",{detail:{group:h,index:b}})}),l}addTemplateRow(t){let e=this.addFromTemplate(t);return e.length>0?e[0]:null}findTemplate(t){let e=t.parentElement;if(e){let o=Array.from(e.children).find(n=>n.formTemplate);if(o)return o}let r=t.closest("[formGroup]");if(r){let o=r.querySelector("[formTemplate]");if(o)return o}let i=e;for(;i&&i!==this.host;){let o=Array.from(i.children).find(n=>n.formTemplate);if(o)return o;i=i.parentElement}return null}removeFromTemplate(t){if(t.formTemplate){console.warn("FormController: Cannot remove a formTemplate element");return}if(t.hasAttribute("data-template-clone")){let o=this.findTemplate(t),n=o?this.templateLimit(o,"min")??1:1;if(o&&this.templateRowCount(o)<=n)return}let e=this.resolveTemplateGroup(t),r=t.parentElement,i=r?Array.prototype.indexOf.call(r.children,t):-1;t.remove(),this.refreshHMWCFormComponents(),this.updateData(),this.host.emit("hmwc-template-remove",{detail:{group:e,index:i}})}resolveTemplateGroup(t){let e=t.getAttribute("name");if(e)return e;let r=t.closest("[formGroup]");if(r){let i=r.getAttribute("name");if(i)return i}return null}removeTemplateRow(t){this.removeFromTemplate(t)}removeAllFromTemplates(){this.templates.forEach((t,e)=>{Array.from(e.children).forEach(r=>{r!==t&&r.hasAttribute("data-template-clone")&&r.remove()})}),this.refreshHMWCFormComponents(),this.updateData()}clearElementValues(t){if(this.FORM_COMPONENTS.includes(this.HMWCName(t))){let r=t;r.value="",r.checked=!1,r.removeAttribute("value"),r.removeAttribute("checked"),r.removeAttribute("invalid")}this.getFormComponentsInElement(t).forEach(r=>{r.value="",r.checked=!1,r.removeAttribute("value"),r.removeAttribute("checked"),r.removeAttribute("invalid")})}initializeTemplates(){this.templates.clear(),this.host.querySelectorAll("[formTemplate]").forEach(e=>{let r=e.parentElement;r&&this.templates.set(r,e)})}initializeAccordionGroups(){if(this.accordionGroups.clear(),!this.controls.some(r=>r.increment||r.decrement))return;this.host.querySelectorAll("hmwc-accordion-group").forEach(r=>{let i=r,o=Array.from(r.querySelectorAll("hmwc-accordion"));o.length!==0&&(o.forEach((n,l)=>{n.step===void 0&&(n.step=l+1)}),this.accordionGroups.set(i,o),this.steps=o.length,(this.step===void 0||this.step===0)&&(this.step=1),o.forEach(n=>{this.listenerMap.has(n)||(this.listenerMap.set(n,!0),n.addEventListener("hmwc-expand",()=>{if(n.step!==void 0){if(this.accordionStepLock&&n.step!==this.step){n.hide();return}if(n.step>this.step)for(let l=this.step;l<n.step;l++)this.updateAccordionErrorIndicator(l);this.changeStep(n.step)}}))}))}),this.accordionGroups.size>0&&this.updateAccordionStepUI()}guardStepperAccordionConflict(){this.warnedStepperAccordionConflict||this.stepper&&this.accordionGroups.size>0&&(console.warn("[FormController] Both <hmwc-stepper> and <hmwc-accordion-group> are wired to the same form container. Declare one or the other, never both. See FORM_BUTTON_BEHAVIORS \xA73.6."),this.warnedStepperAccordionConflict=!0)}getComponentsInAccordion(t){return this.components.filter(e=>e.hasAttribute("formGroup")||!this.FORM_COMPONENTS.includes(this.HMWCName(e))?!1:t.contains(e))}getOuterFormComponents(){return this.components.filter(t=>{if(t.hasAttribute("formGroup")||!this.FORM_COMPONENTS.includes(this.HMWCName(t)))return!1;for(let[e]of this.accordionGroups)if(e.contains(t))return!1;return!0})}validateStep(t){let e=this.getAccordionForStep(t);if(!e)return!0;let r=this.getComponentsInAccordion(e),i=!0;return r.forEach(o=>{o.checkValidity&&!o.checkValidity()&&(i=!1)}),i}getAccordionForStep(t){for(let[,e]of this.accordionGroups){let r=e.find(i=>i.step===t);if(r)return r}}isAccordionMultipleMode(){for(let[t]of this.accordionGroups)if(t.multiple)return!0;return!1}findNextInactiveStep(){for(let[,t]of this.accordionGroups){let e=[...t].sort((r,i)=>(r.step??0)-(i.step??0));for(let r of e)if(!r.active&&r.step!==void 0)return r.step}}updateAccordionErrorIndicator(t){let e=this.getAccordionForStep(t);if(!e)return;let r=this.validateStep(t),i=this.accordionErrorIndicators.get(e);if(!r&&!i){let o=document.createElement("hmwc-icon");o.setAttribute("src","exclamation-circle"),o.setAttribute("slot","controls"),o.setAttribute("tooltip","This step has validation errors"),o.setAttribute("style","color: var(--hmwc-color-danger-600); font-size: 1.1em;"),e.appendChild(o),this.accordionErrorIndicators.set(e,o)}else r&&i&&(i.remove(),this.accordionErrorIndicators.delete(e))}refreshAccordionErrorIndicators(){this.accordionGroups.forEach(t=>{t.forEach(e=>{e.step!==void 0&&this.updateAccordionErrorIndicator(e.step)})})}updateAccordionStepUI(){this.step!==void 0&&this.accordionGroups.forEach((t,e)=>{let r=e.multiple;t.forEach(i=>{i.step===this.step?(i.show(),i.disabled=!1):r?this.accordionStepLock&&i.step!==void 0&&i.step>this.step?i.disabled=!0:i.disabled=!1:(i.hide(),this.accordionStepLock&&i.step!==void 0&&i.step>this.step?i.disabled=!0:i.disabled=!1)})})}handleKeydown(t){if(t.key!=="Enter"||t.defaultPrevented||t.isComposing)return;let e=t.composedPath().filter(i=>i instanceof Element&&this.SUBMIT_ON_ENTER.includes(this.HMWCName(i))),r=e.find(i=>this.components.includes(i))??e[0];!r||r.textarea||this.submit(t)}updateData(){let t=this.getFormData();t&&(this.data=t)}HMWCName(t){return t?t.tagName.split("HMWC-")[1]?.toLowerCase()??"":""}updateButtonState(){let t=!0;if(this.accordionGroups.size>0){if(this.step!==void 0&&this.step>=this.steps){for(let r=1;r<=this.steps;r++)if(!this.validateStep(r)){t=!1;break}t&&this.getOuterFormComponents().forEach(r=>{r.checkValidity&&!r.checkValidity()&&(t=!1)})}else this.step!==void 0&&!this.validateStep(this.step)&&(t=!1);this.refreshAccordionErrorIndicators()}else this.components.forEach(e=>{e.hasAttribute("formGroup")||(this.stepComponents.length?e.step===this.step&&e.checkValidity&&!e.checkValidity()&&(t=!1):e.checkValidity&&!e.checkValidity()&&(t=!1))});t&&this.editing&&!this.isDirty()&&(t=!1),t?this.getControl()?.removeAttribute("disabled"):this.getControl()?.setAttribute("disabled","true"),this.actionControls.forEach(e=>e.refreshAutoDisable?.()),this.controls.forEach(e=>{if(!e.templateAdd&&!e.templateRemove)return;let r=e.hasAttribute(ni);if(e.hasAttribute("disabled")&&!r)return;let i=!this.canPerform(e.templateAdd?"add":"remove",e);e.toggleAttribute("disabled",i),e.toggleAttribute(ni,i)})}updateStepUI(){if(this.step===void 0)return;this.stepper&&(this.stepper.step=this.step),this.accordionGroups.size===0&&this.stepComponents.forEach(o=>{o.step===this.step?o.removeAttribute("hidden"):o.setAttribute("hidden","true")}),this.accordionGroups.size>0&&this.updateAccordionStepUI();let t=this.controls.find(o=>o.begin),e=this.controls.find(o=>o.increment),r=this.controls.find(o=>o.decrement),i=this.controls.find(o=>o.submit);this.accordionGroups.size>0?(t?.removeAttribute("hidden"),e?.removeAttribute("hidden"),r?.removeAttribute("hidden"),i?.removeAttribute("hidden"),t&&this.step===0?(t.removeAttribute("disabled"),e?.setAttribute("disabled","true"),r?.setAttribute("disabled","true"),i?.setAttribute("disabled","true")):this.step<this.steps?(t?.setAttribute("disabled","true"),e?.removeAttribute("disabled"),this.step===1?r?.setAttribute("disabled","true"):r?.removeAttribute("disabled"),i?.setAttribute("disabled","true")):this.step===this.steps&&(t?.setAttribute("disabled","true"),e?.setAttribute("disabled","true"),r?.removeAttribute("disabled"),i?.removeAttribute("disabled"))):t&&this.step===0?(t.removeAttribute("hidden"),e?.setAttribute("hidden","true"),r?.setAttribute("hidden","true"),i?.setAttribute("hidden","true")):this.step<this.steps?(t?.setAttribute("hidden","true"),e?.removeAttribute("hidden"),r?.removeAttribute("hidden"),i?.setAttribute("hidden","true")):this.step===this.steps&&(t?.setAttribute("hidden","true"),e?.setAttribute("hidden","true"),r?.removeAttribute("hidden"),i?.removeAttribute("hidden"))}getControl(){let t;return this.controls.forEach(e=>{this.step!==void 0&&this.step<this.steps?e.increment&&(t=e):e.submit&&(t=e)}),t}getHMWCFormComponents(){let t=[],e=[],r=[],i=[],o=n=>(n.forEach(l=>{let h=l,d=l;(l.hasAttribute("formGroup")||this.FORM_COMPONENTS.includes(this.HMWCName(l))&&!t.includes(h))&&t.push(h),this.HMWCName(l)==="button"&&((d.begin||d.submit||d.increment||d.decrement||d.templateAdd||d.templateRemove)&&!e.includes(d)&&e.push(d),d.action&&!r.includes(d)&&r.push(d)),h.step!==void 0&&(this.HMWCName(l)==="stepper"?this.stepper=l:this.HMWCName(l)!=="accordion"&&!i.includes(h)&&i.push(h));let g=l.querySelectorAll("*");g.length&&o(Array.from(g))}),{components:t,controls:e,actionControls:r,stepComponents:i});return o(Array.from(this.host.children))}addElementListeners(t){if(this.listenerMap.has(t))return;this.listenerMap.set(t,!0);let e=this.HMWCName(t),r=o=>{let n=o.target;if(n?.hasAttribute("formGroup"))return!1;if(!o.detail?.autoFocused)return!0;let l=n?.getAttribute("value");return!(o.detail?.autoFocused&&!l)},i=()=>{this.validateEl(t),this.updateData()};t.addEventListener("hmwc-input",i),e==="dropdown"?t.addEventListener("hmwc-change",i):(e==="combobox"&&t.addEventListener("hmwc-change",i),t.addEventListener("hmwc-blur",o=>r(o)&&this.validateEl(t)))}addControlListeners(t){if(this.listenerMap.has(t))return;this.listenerMap.set(t,!0);let e=t,r=i=>()=>{let o=Date.now(),n=this.lastActionTime.get(t)??0;this.cooldownMs>0&&o-n<this.cooldownMs||(this.lastActionTime.set(t,o),i())};e.begin?t.addEventListener("hmwc-click",r(()=>this.increment())):e.increment?t.addEventListener("hmwc-click",r(()=>this.increment())):e.decrement?t.addEventListener("hmwc-click",r(()=>this.decrement())):e.submit?t.addEventListener("hmwc-click",r(()=>this.submit())):e.templateAdd?t.addEventListener("hmwc-click",r(()=>this.handleTemplateAdd(t))):e.templateRemove&&t.addEventListener("hmwc-click",r(()=>this.handleTemplateRemove(t)))}handleTemplateAdd(t){if(!this.findTemplate(t)){console.warn("FormController: No template found for add button. Add formTemplate attribute to the element to clone.");return}this.addFromTemplate(t)}handleTemplateRemove(t){let e=this.findTemplateRow(t);e?this.removeFromTemplate(e):console.warn("FormController: Cannot determine which element to remove")}findTemplateRow(t){let e=t.parentElement;for(;e;){let i=e.parentElement;if(i?.hasAttribute("formGroup"))return e;e=i}let r=t.parentElement;return r&&r!==this.host?r:null}refreshHMWCFormComponents(){this.initializeTemplates();let{components:t,controls:e,actionControls:r,stepComponents:i}=this.getHMWCFormComponents();this.components=this.components.filter(o=>t.includes(o)),this.controls=this.controls.filter(o=>e.includes(o)),this.actionControls=this.actionControls.filter(o=>r.includes(o)),this.stepComponents=this.stepComponents.filter(o=>i.includes(o)),t.forEach(o=>{this.components.includes(o)||(this.components.push(o),this.addElementListeners(o))}),e.forEach(o=>{this.controls.includes(o)||(this.controls.push(o),this.addControlListeners(o))}),r.forEach(o=>{this.actionControls.includes(o)||this.actionControls.push(o)}),i.forEach(o=>{this.stepComponents.includes(o)||this.stepComponents.push(o)}),this.updateButtonState()}setupObserver(){if(this.observer)return;let t=e=>{let r=this.HMWCName(e),i=e;return this.FORM_COMPONENTS.includes(r)||r==="button"||e.hasAttribute("formGroup")||i.step!==void 0};this.observer=new MutationObserver(e=>{let r=!1;e.forEach(i=>{i.type==="childList"&&(i.addedNodes.forEach(o=>{if(o.nodeType===Node.ELEMENT_NODE){let n=o;t(n)&&(r=!0),n.querySelectorAll("*").forEach(h=>{t(h)&&(r=!0)})}}),i.removedNodes.forEach(o=>{if(o.nodeType===Node.ELEMENT_NODE){let n=o;t(n)&&(r=!0),n.querySelectorAll("*").forEach(h=>{t(h)&&(r=!0)})}}))}),r&&this.refreshHMWCFormComponents()}),this.observer.observe(this.host,{childList:!0,subtree:!0})}hostUpdated(){let t=this.host.getAttribute("form-cooldown");if(t!==null&&t!==""){let i=Number(t);this.cooldownMs=Number.isFinite(i)&&i>=0?i:s.ACTION_COOLDOWN_MS}else this.cooldownMs=s.ACTION_COOLDOWN_MS;if(this.refreshHMWCFormComponents(),this.stepComponents.length&&this.accordionGroups.size===0){let i=this.controls.find(o=>o.begin);this.step=i?0:1}if(this.initialized)return;this.initialized=!0;let e=this.root.querySelector("div");if(!e)return;let r=Object.assign(document.createElement("form"),{styleMap:new Map([["display","contents"]])});r.append(e),this.root.append(r),this.initializeTemplates(),this.initializeAccordionGroups(),this.guardStepperAccordionConflict(),this.updateStepUI(),this.host.addEventListener("keydown",this.boundKeydownHandler),this.setupObserver()}hostDisconnected(){this.observer&&(this.observer.disconnect(),this.observer=null),this.host.removeEventListener("keydown",this.boundKeydownHandler)}constructor(t){this.initialized=!1,this.binary=!1,this.FORM_COMPONENTS=["input","dropdown","checkbox","switch","radio-group","calendar","combobox"],this.SUBMIT_ON_ENTER=["input","combobox"],this.observer=null,this.listenerMap=new WeakMap,this.boundKeydownHandler=this.handleKeydown.bind(this),this.cooldownMs=s.ACTION_COOLDOWN_MS,this.lastActionTime=new WeakMap,this.warnedStepperAccordionConflict=!1,this.templates=new Map,this.accordionGroups=new Map,this.accordionStepLock=!1,this.accordionErrorIndicators=new WeakMap,this.editing=!1,this.snapshot=null,this.components=[],this.controls=[],this.actionControls=[],this.stepComponents=[],this.errors=[],this.data={},this.host=t,this.root=this.host.shadowRoot,this.step=this.host.step,this.steps=this.host.steps??1,t.addController(this)}};hr.ACTION_COOLDOWN_MS=500;var si=hr;var li=m`
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
`;var Mt=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},I=class extends u{connectedCallback(){super.connectedCallback(),this.form&&(this.controllers.form=new si(this)),this.img&&this.style.setProperty("--image-url",`url(${this.img})`),this.label&&this.controllers.slot.insert(Object.assign(document.createElement("slot"),{name:"label",part:"label",innerHTML:this.label})),this.validationType==="alert"&&this.controllers.slot.prepend(Object.assign(document.createElement("hmwc-alert"),{label:`Submission failed with ${this.controllers.form?.errors.length} error(s).`,message:"Please fix all errors and try again.",danger:!0,open:!!this.controllers.form?.errors.length}))}disconnectedCallback(){super.disconnectedCallback(),delete this.controllers.form}constructor(){super(),this.validationType="outline"}};I.styles=li;Mt([a({type:String})],I.prototype,"label",void 0);Mt([a({type:Boolean,reflect:!0})],I.prototype,"fluid",void 0);Mt([a({type:Boolean,reflect:!0})],I.prototype,"scrollable",void 0);Mt([a({type:Boolean,reflect:!0})],I.prototype,"center",void 0);Mt([a({type:String,reflect:!0})],I.prototype,"align",void 0);Mt([a({type:String,reflect:!0})],I.prototype,"justify",void 0);Mt([a({type:String,reflect:!0})],I.prototype,"gap",void 0);Mt([a({type:String,reflect:!0})],I.prototype,"pad",void 0);Mt([a({type:String,reflect:!0})],I.prototype,"round",void 0);Mt([a({type:Number,reflect:!0})],I.prototype,"elevation",void 0);Mt([a({type:String,reflect:!0})],I.prototype,"img",void 0);Mt([a({type:Boolean,reflect:!0})],I.prototype,"square",void 0);Mt([a({type:Boolean,reflect:!0})],I.prototype,"form",void 0);Mt([a({type:Number})],I.prototype,"steps",void 0);Mt([a({type:String})],I.prototype,"validationType",void 0);var ie={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Be=s=>(...t)=>({_$litDirective$:s,values:t}),ge=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var f=Be(class extends ge{constructor(s){if(super(s),s.type!==ie.ATTRIBUTE||s.name!=="class"||s.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(t=>s[t]).join(" ")+" "}update(s,[t]){if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(let r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}let e=s.element.classList;for(let r of this.st)r in t||(e.remove(r),this.st.delete(r));for(let r in t){let i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(e.add(r),this.st.add(r)):(e.remove(r),this.st.delete(r)))}return At}});var w=s=>s??A;var ci=m`
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
`;var qt=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},aa="1.13.1",na=`https://cdn.jsdelivr.net/npm/bootstrap-icons@${aa}/font/bootstrap-icons.css`,_=class extends u{labelUpdate(){this.label?(this.setAttribute("role","img"),this.removeAttribute("aria-hidden"),this.setAttribute("aria-label",this.label)):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}firstUpdated(){this.labelUpdate()}render(){if(!this.src)return A;let t=f({icon:!0,bi:!0,[`bi-${this.src}`]:!0,xs:!!this.xs,sm:!!this.sm,md:!!this.md,lg:!!this.lg,xl:!!this.xl,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`<link rel="stylesheet" href=${na} /><i part="base" class=${t}></i>`}};_.styles=ci;qt([a({type:String,reflect:!0})],_.prototype,"src",void 0);qt([a({type:String,reflect:!0})],_.prototype,"label",void 0);qt([a({type:Boolean,reflect:!0})],_.prototype,"primary",void 0);qt([a({type:Boolean,reflect:!0})],_.prototype,"success",void 0);qt([a({type:Boolean,reflect:!0})],_.prototype,"neutral",void 0);qt([a({type:Boolean,reflect:!0})],_.prototype,"warning",void 0);qt([a({type:Boolean,reflect:!0})],_.prototype,"danger",void 0);qt([a({type:Boolean,reflect:!0})],_.prototype,"xs",void 0);qt([a({type:Boolean,reflect:!0})],_.prototype,"sm",void 0);qt([a({type:Boolean,reflect:!0})],_.prototype,"md",void 0);qt([a({type:Boolean,reflect:!0})],_.prototype,"lg",void 0);qt([a({type:Boolean,reflect:!0})],_.prototype,"xl",void 0);qt([p("label")],_.prototype,"labelUpdate",null);_.define("hmwc-icon",_);var hi=m`
  :host {
    --accordion-background: var(--hmwc-panel-background-color);
    --accordion-border-color: none;
    --accordion-border-radius: none;
    --accordion-font-color: var(--hmwc-color-neutral-750);
    --accordion-font-size: var(--hmwc-font-size-medium);
    --accordion-font-weight: var(--hmwc-font-weight-normal);
    --accordion-icon-color: var(--hmwc-color-neutral-700);
    --accordion-icon-size: var(--accordion-font-size);
    /* Gap between the optional icon and the label. Matches the
       prefix/label spacing used by button and menu-item. */
    --accordion-icon-gap: var(--hmwc-spacing-small);
    /* The chevron scales with the label so large/small accordions
       stay visually balanced (previously a fixed 0.75rem). */
    --accordion-trigger-size: calc(0.7 * var(--accordion-font-size));
    --accordion-trigger-color: var(--hmwc-color-neutral-700);
    --accordion-summary-padding: var(--hmwc-spacing-medium) var(--hmwc-spacing-large) var(--hmwc-spacing-small);
    /* Expand runs longer than collapse on purpose — opening should feel
       unhurried, closing immediate. Both are overridable. */
    --accordion-expand-duration: var(--hmwc-transition-medium);
    --accordion-collapse-duration: var(--hmwc-transition-fast);

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
        gap: var(--accordion-icon-gap);
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
        /* The rotate settles with a slight overshoot rather than stopping
           dead; colour and the hover nudge stay on the standard curve. */
        transition: rotate var(--accordion-expand-duration) var(--hmwc-easing-overshoot),
          color var(--hmwc-transition-fast) var(--hmwc-easing-standard),
          translate var(--hmwc-transition-fast) var(--hmwc-easing-standard);
        translate: 0;
      }
    }

    /* trigger-placement="start" moves the chevron ahead of the icon and label,
       for nav- and tree-shaped disclosure. The summary is already flex, so this
       is ordering only — no template branch. */
    &.trigger-start {
      & .accordion__trigger {
        order: -1;
        margin-inline-end: var(--accordion-icon-gap);
      }

      & .accordion__controls {
        margin-right: 0;
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

    /* Collapse is the resting transition: it eases in and leaves quickly, so
       dismissing feels immediate. Expand overrides it below with a longer,
       decelerating curve — asymmetry is what stops a disclosure feeling mushy,
       and both used to share one generic 250ms "ease". */
    & .accordion__body {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows var(--accordion-collapse-duration) var(--hmwc-easing-accelerate);

      & > slot {
        display: block;
        overflow: hidden;
        padding-block: 0;
        padding-inline: var(--container-padding);
        /* The content used to be merely un-clipped by the row collapsing. It
           now arrives: a short lift and fade behind the opening row. */
        opacity: 0;
        translate: 0 calc(-1 * var(--hmwc-spacing-2x-small));
        transition: padding-block var(--accordion-collapse-duration) var(--hmwc-easing-accelerate),
          opacity var(--hmwc-transition-x-fast) var(--hmwc-easing-accelerate),
          translate var(--hmwc-transition-x-fast) var(--hmwc-easing-accelerate);
      }
    }

    &.active > .accordion__body {
      grid-template-rows: 1fr;
      transition: grid-template-rows var(--accordion-expand-duration) var(--hmwc-easing-decelerate);

      & > slot {
        overflow: visible;
        padding-block: var(--container-padding);
        opacity: 1;
        translate: 0;
        /* Delayed just past the row opening so the content reads as arriving
           into the space rather than being revealed by it. */
        transition: padding-block var(--accordion-expand-duration) var(--hmwc-easing-decelerate),
          opacity var(--hmwc-transition-fast) var(--hmwc-easing-standard) var(--hmwc-transition-x-fast),
          translate var(--hmwc-transition-fast) var(--hmwc-easing-decelerate) var(--hmwc-transition-x-fast);
      }
    }

    /* DoD §9. The accordion animates grid-template-rows, rotate, translate,
       opacity and padding-block, and previously had no reduced-motion
       companion at all. State changes still apply — only the motion stops. */
    @media (prefers-reduced-motion: reduce) {
      & .accordion__label,
      & .accordion__trigger,
      & .accordion__body,
      & .accordion__body > slot,
      &.active > .accordion__body,
      &.active > .accordion__body > slot {
        transition: none;
      }

      & .accordion__body > slot {
        opacity: 1;
        translate: none;
      }

      &:not(.disabled) .accordion__summary:hover .accordion__trigger,
      &:not(.disabled).active .accordion__summary:hover .accordion__trigger {
        translate: none;
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
      --accordion-trigger-size: calc(0.625 * var(--accordion-font-size));
      --accordion-summary-padding: 0;
      --container-padding: var(--hmwc-spacing-medium) 0;

      /* With no summary padding the label/icon start at the host's
         left edge — align the body content with them instead of
         indenting it. */
      & .accordion__body > slot {
        padding-inline: 0;
      }
    }
  }
`;var Qt=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},Q=class extends I{constructor(){super(...arguments),this.triggerPlacement="end"}show(){this.disabled||(this.active=!0)}hide(){this.disabled||(this.active=!1)}toggle(t){t&&t.preventDefault(),this.active?this.hide():this.show()}focus(){this.summary.focus()}blur(){this.body?.blur(),this.summary.blur()}handleControlsClick(t){t.stopPropagation()}handleKeyboardInput(t){let e=["Enter"," "],r=["ArrowUp","ArrowLeft"],i=["ArrowDown","ArrowRight"];[...e,...r,...i].includes(t.key)&&(t.preventDefault(),e.includes(t.key)?this.active?this.hide():this.show():r.includes(t.key)?this.hide():i.includes(t.key)&&this.show())}iconUpdate(){this.icon&&this.icon instanceof Object&&(this.iconColor=this.icon.color,this.icon=this.icon.icon)}activityUpdate(){this.emit(`hmwc-${this.active?"expand":"collapse"}`)}firstUpdated(){this.solo=!(this.parentElement instanceof vt)}render(){let t=f({accordion:!0,active:!!this.active,disabled:!!this.disabled,basic:!!this.basic,solo:!!this.solo,icon:!!this.icon||this.controllers.slot.test("icon"),"trigger-start":this.triggerPlacement==="start"});return c`
      <details part="base" class=${t} open>
        <summary
          part="summary"
          id="summary"
          class="accordion__summary"
          role="button"
          aria-expanded=${w(this.active)}
          aria-controls="content"
          aria-label=${w(this.label)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @keydown=${this.handleKeyboardInput}
          @click=${this.toggle}
          @focus=${()=>this.emit("hmwc-focus")}
          @blur=${()=>this.emit("hmwc-blur")}
          style="--accordion-icon-color: ${w(this.iconColor)}">
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
    `}};Q.styles=hi;Q.dependencies=[_];Q.slots=["[default]","icon","label","controls","trigger"];Qt([v()],Q.prototype,"solo",void 0);Qt([a({type:Boolean,reflect:!0})],Q.prototype,"active",void 0);Qt([a({type:String,reflect:!0})],Q.prototype,"label",void 0);Qt([a({type:String,reflect:!0})],Q.prototype,"icon",void 0);Qt([a({type:Boolean,reflect:!0})],Q.prototype,"disabled",void 0);Qt([a({type:Boolean,reflect:!0})],Q.prototype,"basic",void 0);Qt([a({type:String,reflect:!0,attribute:"trigger-placement"})],Q.prototype,"triggerPlacement",void 0);Qt([R(".accordion__summary")],Q.prototype,"summary",void 0);Qt([R(".accordion__body")],Q.prototype,"body",void 0);Qt([v()],Q.prototype,"iconColor",void 0);Qt([p("icon")],Q.prototype,"iconUpdate",null);Qt([p("active")],Q.prototype,"activityUpdate",null);var pi=Symbol.for(""),sa=s=>{if(s?.r===pi)return s?._$litStatic$};var De=(s,...t)=>({_$litStatic$:t.reduce((e,r,i)=>e+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+s[i+1],s[0]),r:pi}),di=new Map,Cr=s=>(t,...e)=>{let r=e.length,i,o,n=[],l=[],h,d=0,g=!1;for(;d<r;){for(h=t[d];d<r&&(o=e[d],(i=sa(o))!==void 0);)h+=i+t[++d],g=!0;d!==r&&l.push(o),n.push(h),d++}if(d===r&&n.push(t[r]),g){let b=n.join("$$lit$$");(t=di.get(b))===void 0&&(n.raw=n,di.set(b,t=n)),e=l}return s(t,...e)},tt=Cr(c),Gs=Cr(Jr),Ks=Cr(Qr);var mi=m`
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
`;var Gt=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},Y=class extends u{render(){let t=f({badge:!0,icon:!!this.icon||this.controllers.slot.test("icon"),pill:!!this.pill,pulse:!!this.pulse,selectable:!!this.selectable,sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
      <div part="base" class=${t} role="status">
        <slot part="label" class="badge__label">${this.label?this.label:""}</slot>
        <slot name="icon" part="icon" class="badge__icon">${this.icon?c`<hmwc-icon src=${this.icon}></hmwc-icon>`:""}</slot>
      </div>
    `}};Y.styles=mi;Y.dependencies=[_];Y.slots=["[default]","icon"];Gt([a({type:Boolean,reflect:!0})],Y.prototype,"selectable",void 0);Gt([a({type:Boolean,reflect:!0})],Y.prototype,"pulse",void 0);Gt([a({type:Boolean,reflect:!0})],Y.prototype,"primary",void 0);Gt([a({type:Boolean,reflect:!0})],Y.prototype,"success",void 0);Gt([a({type:Boolean,reflect:!0})],Y.prototype,"neutral",void 0);Gt([a({type:Boolean,reflect:!0})],Y.prototype,"warning",void 0);Gt([a({type:Boolean,reflect:!0})],Y.prototype,"danger",void 0);Gt([a({type:Boolean,reflect:!0})],Y.prototype,"sm",void 0);Gt([a({type:Boolean,reflect:!0})],Y.prototype,"md",void 0);Gt([a({type:Boolean,reflect:!0})],Y.prototype,"lg",void 0);Gt([a({type:Boolean,reflect:!0})],Y.prototype,"pill",void 0);Gt([a({type:String})],Y.prototype,"label",void 0);Gt([a({type:String,reflect:!0})],Y.prototype,"icon",void 0);var ui=m`
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
`;var oe=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},X=class extends u{constructor(){super(...arguments),this.active=!0,this.label="Loading"}start(){this.active||(this.active=!0)}stop(){this.active&&(this.active=!1)}toggle(){this.active=!this.active}render(){let t=f({spinner:!0,active:!!this.active,"speed-slower":this.speed==="slower","speed-slow":this.speed==="slow","speed-fast":this.speed==="fast","speed-faster":this.speed==="faster",sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
      <svg part="base" class=${t} role="progressbar" aria-label=${this.label}>
        <circle part="track" class="spinner__track"></circle>
        <circle part="indicator" class="spinner__indicator"></circle>
      </svg>
    `}};X.styles=ui;oe([a({type:Boolean,reflect:!0})],X.prototype,"active",void 0);oe([a({type:Boolean,reflect:!0})],X.prototype,"primary",void 0);oe([a({type:Boolean,reflect:!0})],X.prototype,"success",void 0);oe([a({type:Boolean,reflect:!0})],X.prototype,"neutral",void 0);oe([a({type:Boolean,reflect:!0})],X.prototype,"warning",void 0);oe([a({type:Boolean,reflect:!0})],X.prototype,"danger",void 0);oe([a({type:Boolean,reflect:!0})],X.prototype,"sm",void 0);oe([a({type:Boolean,reflect:!0})],X.prototype,"md",void 0);oe([a({type:Boolean,reflect:!0})],X.prototype,"lg",void 0);oe([a({type:String,reflect:!0})],X.prototype,"speed",void 0);oe([a({type:String})],X.prototype,"label",void 0);X.define("hmwc-spinner",X);var fi=m`
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
`;var B=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},dr="data-auto-disabled",y=class s extends u{constructor(){super(...arguments),this.target="_blank",this._autoDisabledLastValue=null}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}isLink(){return!!this.href}findFormContainer(){return this.closest("[form]")}handleClick(){if(this.disabled){if(this.submit||this.action==="submit"){let t=this.findFormContainer();t&&t.controllers.form?.validate()}return}if(this.emit("hmwc-click"),this.action){let t=this.findFormContainer();if(t?.controllers.form){t.controllers.form.perform(this.action,this);return}this.action!=="submit"&&this.action!=="reset"&&s._warnNoContainer(this.action)}}static _warnNoContainer(t){s._warnedActions.has(t)||(s._warnedActions.add(t),console.warn(`[hmwc-button] action="${t}" but no surrounding <hmwc-* form> container or native <form> found.`))}refreshAutoDisable(){if(!this.action)return;let e=this.findFormContainer()?.controllers.form;if(!e||typeof e.canPerform!="function")return;let r=!e.canPerform(this.action,this);if(this._autoDisabledLastValue===null&&this.disabled&&this.hasAttribute(dr)&&(this._autoDisabledLastValue=!0),this._autoDisabledLastValue===null){if(r&&!this.disabled)this.disabled=!0,this.toggleAttribute(dr,!0);else if(!r&&this.disabled){this._autoDisabledLastValue=!1;return}this._autoDisabledLastValue=!!this.disabled;return}!!this.disabled===this._autoDisabledLastValue&&r!==this._autoDisabledLastValue&&(this.disabled=r,this.toggleAttribute(dr,r),this._autoDisabledLastValue=r)}handleActionChange(){this._autoDisabledLastValue!==null&&!!this.disabled===this._autoDisabledLastValue&&(this.disabled=!1,this.removeAttribute(dr)),this._autoDisabledLastValue=null,this.refreshAutoDisable()}handleFocus(){this.emit("hmwc-focus")}handleBlur(){this.emit("hmwc-blur")}handleMouseIn(){this.labelOnHover&&(this.label=this.labelOnHover)}handleMouseOut(){this.labelOnHover&&(this.label=this._label)}connectedCallback(){super.connectedCallback(),this._label=this.label||this.textContent||"",!this.sm&&!this.md&&!this.lg&&(this.md=!0)}render(){let t=this.isLink()?De`a`:De`button`,e=f({button:!0,icon:!!this.icon,prefix:!!this.prefix||!!this.img,suffix:!!this.suffix,invert:!!this.invert,basic:!!this.basic,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger,small:!!this.sm,medium:!!this.md,large:!!this.lg,loading:!!this.loading,circle:!!this.circle,pill:!!this.pill,outline:!!this.outline,disabled:!!this.disabled,fluid:!!this.fluid}),r=tt`
      <${t}
        part='base'
        class='${e}'
        type=${this.submit||this.action==="submit"?"submit":this.reset||this.action==="reset"?"reset":"button"}
        title=${w(this.title||void 0)}
        target=${w(this.isLink()?this.target:void 0)}
        download=${w(this.isLink()?this.download:void 0)}
        href=${w(this.isLink()?this.href:void 0)}
        value=${w(this.isLink()?void 0:this.value)}
        role=${w(this.isLink()?void 0:"button")}
        aria-disabled=${w(this.disabled)}
        aria-label=${w(this.label||void 0)}
        tabindex=${w(this.disabled)?"-1":"0"}
        @click=${this.handleClick}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @mouseenter=${this.handleMouseIn}
        @mouseout=${this.handleMouseOut}
      >

        <slot name="prefix" part="prefix" class="button__prefix">
          ${this.prefix?tt`<hmwc-icon src=${this.prefix}></hmwc-icon>`:this.img?tt`<img src=${this.img} alt="btn-img" />`:""}
        </slot>

        <slot name='icon' class='button__icon'>
          ${this.icon&&!this.loading?tt`<hmwc-icon part="icon" src=${this.icon} ?flex=${this.basic}></hmwc-icon>`:""}
        </slot>

        ${this.icon?"":tt`<slot name="label" part="label" class="button__label">${this.label}</slot>`}

        <slot name="suffix" part="suffix" class="button__suffix">
          ${this.suffix?tt`<hmwc-icon src=${this.suffix}></hmwc-icon>`:""}
        </slot>

        <slot name="badge" part="badge" class="button__badge"></slot>

        ${this.loading?tt`<hmwc-spinner sm part="spinner"></hmwc-spinner>`:""}

      </${t}>
    `;return this.disabled&&this.disabledReason?tt` <hmwc-tooltip label=${this.disabledReason} placement="top"> ${r} </hmwc-tooltip> `:r}};y.styles=fi;y.dependencies=[_,X,Y];y.slots=["prefix"];y._warnedActions=new Set;B([a({type:String})],y.prototype,"label",void 0);B([a({type:String})],y.prototype,"labelOnHover",void 0);B([a({type:String})],y.prototype,"icon",void 0);B([a({type:String})],y.prototype,"prefix",void 0);B([a({type:String})],y.prototype,"suffix",void 0);B([a({type:String})],y.prototype,"img",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"primary",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"success",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"neutral",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"warning",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"danger",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"invert",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"basic",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"sm",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"md",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"lg",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"outline",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"pill",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"circle",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"fluid",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"disabled",void 0);B([a({type:String,attribute:"disabled-reason"})],y.prototype,"disabledReason",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"loading",void 0);B([a({type:String})],y.prototype,"value",void 0);B([a({type:String,reflect:!0})],y.prototype,"action",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"submit",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"begin",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"increment",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"decrement",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"templateAdd",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"templateRemove",void 0);B([a({type:Boolean,reflect:!0})],y.prototype,"reset",void 0);B([a({type:String,reflect:!1})],y.prototype,"href",void 0);B([a({type:String})],y.prototype,"target",void 0);B([a({type:String})],y.prototype,"download",void 0);B([R(".button")],y.prototype,"button",void 0);B([p("action")],y.prototype,"handleActionChange",null);var gi=m`
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
`;var qe=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},vt=class extends I{constructor(){super(...arguments),this.index=-1,this.accordions=[],this.listeners=new Map}showAll(){this.accordions.forEach(t=>t.show())}hideAll(){this.accordions.forEach(t=>t.hide())}getAccordions(){return this.controllers.slot.get().filter(t=>t instanceof Q)}handleExpand(t){this.index=t,this.multiple||this.accordions.forEach((e,r)=>{r!==t&&e.hide()})}handleCollapse(t){this.index===t&&(this.index=-1)}indexUpdate(){this.emit("hmwc-change",{detail:{index:this.index,accordion:this.accordions[this.index]}})}accordionsUpdate(){let t={"--accordion-background":"var(--accordion-group-background)","--accordion-font-color":"var(--accordion-group-font-color)","--accordion-font-size":"var(--accordion-group-font-size)","--accordion-font-weight":"var(--accordion-group-font-weight)","--accordion-icon-color":"var(--accordion-group-icon-color)","--accordion-icon-size":"var(--accordion-group-icon-size)","--accordion-trigger-size":"var(--accordion-group-trigger-size)","--accordion-trigger-color":"var(--accordion-group-trigger-color)","--accordion-summary-padding":"var(--accordion-group-summary-padding)"},e=Object.keys(t).map(r=>`${r}: ${t[r]}`).join("; ");this.listeners.forEach((r,i)=>{i.removeEventListener("hmwc-expand",r.expand),i.removeEventListener("hmwc-collapse",r.collapse)}),this.listeners.clear(),this.accordions.forEach((r,i)=>{r.setAttribute("style",e);let o=()=>this.handleExpand(i),n=()=>this.handleCollapse(i);this.listeners.set(r,{expand:o,collapse:n}),r.addEventListener("hmwc-expand",o),r.addEventListener("hmwc-collapse",n)})}firstUpdated(){this.accordions=this.getAccordions()}render(){let t=f({"accordion-group":!0});return c`
      <div part="base" class=${t}>
        <slot></slot>
      </div>
    `}};vt.styles=gi;vt.dependencies=[y];vt.slots=["[default]"];qe([v()],vt.prototype,"index",void 0);qe([v()],vt.prototype,"accordions",void 0);qe([a({type:Boolean,reflect:!0})],vt.prototype,"multiple",void 0);qe([p("index",{waitUntilFirstUpdate:!0})],vt.prototype,"indexUpdate",null);qe([p("accordions")],vt.prototype,"accordionsUpdate",null);vt.define("hmwc-accordion-group",vt);Q.define("hmwc-accordion",Q);customElements.get("hmwc-button")||y.define("hmwc-button",y);var vi=m`
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
`,bi=`
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
`;var Sr={info:{variant:"primary",icon:"info-circle",dismissible:!0,duration:5e3},success:{variant:"success",icon:"check2-circle",dismissible:!0,duration:5e3},warning:{variant:"warning",icon:"exclamation-triangle",dismissible:!0,duration:8e3},error:{variant:"danger",icon:"exclamation-octagon",dismissible:!0,duration:1/0}};var lt=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},la=250,H=class extends u{constructor(){super(...arguments),this.closing=!1,this.active=!1,this.duration=1/0}show(){if(this.active||(this.active=!0,!this.stack))return;yi(this).appendChild(this)}hide(){if(!this.active)return;this.closing=!0,setTimeout(()=>{this.closing=!1,this.active=!1,this.stack&&this.remove()},la)}cacheAlert(){let t=JSON.parse(localStorage.getItem("alerts")||"[]");localStorage.setItem("alerts",JSON.stringify(t.filter(e=>e!==this.id)))}removeCache(){if(!this.id)return;let t=[...JSON.parse(localStorage.getItem("alerts")||"[]"),this.id];localStorage.setItem("alerts",JSON.stringify(t))}activityUpdate(){this.resetTimeout(),this.emit(`hmwc-${this.active?"show":"hide"}`)}resetTimeout(){this.active&&(this.duration||0)<1/0&&(clearTimeout(this.timeout),this.timeout=window.setTimeout(()=>this.hide(),this.duration))}cacheUpdate(){this.cache&&(this.cached=JSON.parse(localStorage.getItem("alerts")||"[]").includes(this.id))}stackUpdate(){this.stack&&(this.duration=this.duration===1/0?5e3:this.duration)}connectedCallback(){super.connectedCallback(),!this.stack&&(this.active=this.active===void 0?!0:this.cached?!1:this.active)}render(){let t=f({alert:!0,active:!!this.active,closing:this.closing,dismissible:!!this.dismissible,stack:!!this.stack,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
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
    `}};H.styles=vi;H.dependencies=[_,y];H.slots=["[default]","title","label","icon","dismiss"];lt([v()],H.prototype,"cached",void 0);lt([v()],H.prototype,"closing",void 0);lt([v()],H.prototype,"timeout",void 0);lt([a({type:Boolean,reflect:!0})],H.prototype,"active",void 0);lt([a({type:Number})],H.prototype,"duration",void 0);lt([a({type:String})],H.prototype,"title",void 0);lt([a({type:String})],H.prototype,"label",void 0);lt([a({type:String})],H.prototype,"icon",void 0);lt([a({type:Boolean,reflect:!0})],H.prototype,"dismissible",void 0);lt([a({type:Boolean,reflect:!0})],H.prototype,"cache",void 0);lt([a({type:Boolean,reflect:!0})],H.prototype,"stack",void 0);lt([a({type:Boolean,reflect:!0})],H.prototype,"primary",void 0);lt([a({type:Boolean,reflect:!0})],H.prototype,"success",void 0);lt([a({type:Boolean,reflect:!0})],H.prototype,"neutral",void 0);lt([a({type:Boolean,reflect:!0})],H.prototype,"warning",void 0);lt([a({type:Boolean,reflect:!0})],H.prototype,"danger",void 0);lt([p("active",{waitUntilFirstUpdate:!0})],H.prototype,"activityUpdate",null);lt([p("duration")],H.prototype,"resetTimeout",null);lt([p("cache")],H.prototype,"cacheUpdate",null);lt([p("stack")],H.prototype,"stackUpdate",null);var ze;function wi(){return ze||(ze=Object.assign(document.createElement("div"),{className:"hmwc-notification-stack"}),ze.style.cssText=bi,ze.style.position="fixed"),ze.parentElement||document.body.appendChild(ze),ze}function yi(s,t=!1){if(t){let e=document.querySelector("[notificationstack][global]");if(e?._stackContainer)return e._stackContainer;let r=document.querySelectorAll("[notificationstack]");if(r.length){let i=r[0];if(i._stackContainer)return i._stackContainer}return wi()}if(s){let e=s.closest("[notificationstack]");if(e?._stackContainer)return e._stackContainer}return wi()}function ca(s={}){let t=Object.fromEntries(Object.entries(s).filter(([,o])=>o!==void 0)),e=s.preset?{...Sr[s.preset],...t}:s,r=document.createElement("hmwc-alert"),i=yi(s.relativeTo,!!e.global);return r.stack=!0,i.appendChild(r),e.title&&(r.title=e.title),e.label&&(r.label=e.label),e.icon&&(r.icon=e.icon),e.dismissible&&(r.dismissible=!0),e.duration!==void 0&&(r.duration=e.duration),e.variant&&(r[e.variant]=!0),s.className&&(r.className+=` ${s.className}`),s.style&&(typeof s.style=="string"?r.setAttribute("style",s.style):Object.assign(r.style,s.style)),s.onShow&&r.addEventListener("hmwc-show",()=>s.onShow(r)),s.onHide&&r.addEventListener("hmwc-hide",()=>s.onHide(r)),r.updateComplete.then(()=>{r.active=!0}),{alert:r,close:()=>r.hide()}}H.define("hmwc-alert",H);var{I:bc}=ei;var _i=s=>s.strings===void 0;var ha={},xi=(s,t=ha)=>s._$AH=t;var Bt=Be(class extends ge{constructor(s){if(super(s),s.type!==ie.PROPERTY&&s.type!==ie.ATTRIBUTE&&s.type!==ie.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!_i(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[t]){if(t===At||t===A)return t;let e=s.element,r=s.name;if(s.type===ie.PROPERTY){if(t===e[r])return At}else if(s.type===ie.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(r))return At}else if(s.type===ie.ATTRIBUTE&&e.getAttribute(r)===t+"")return At;return xi(s),t}});var ki=m`
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
`,$i=c`
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
`,Ci=c`
  <svg part="icon" viewBox="0 0 16 16">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
      <g stroke="currentColor" stroke-width="2">
        <g transform="translate(2.285714, 6.857143)">
          <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
        </g>
      </g>
    </g>
  </svg>
`;var Ar=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},pt=class extends P{handleStateChange(){this.input.checked=!!this.checked,this.input.indeterminate=this.indeterminate}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}_isEmpty(){return!this.checked}_resolveError(){return this._validity.valueMissing&&!this._validity.customError?"Please check this box to continue.":super._resolveError()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.invalid&&this.checkValidity()&&this.reportValidity(),this.emit("hmwc-change",{detail:{value:this.checked}})}handleBlur(){this.emit("hmwc-blur",{})}handleFocus(){this.emit("hmwc-focus",{})}handleInput(){this.emit("hmwc-input",{})}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0)}render(){let t=!this.checked&&this.indeterminate,e=f({checkbox:!0,checked:this.checked,indeterminate:t,sm:!!this.sm,md:!!this.md,lg:!!this.lg,disabled:!!this.disabled,required:!!this.required});return c`
      <label part="base" class=${e}>
        <input
          class="checkbox__input"
          type="checkbox"
          name=${w(this.name)}
          value=${w(this.value)}
          .indeterminate=${Bt(this.indeterminate)}
          .checked=${Bt(this.checked)}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-checked=${this.checked}
          aria-invalid=${this._ariaInvalid()}
          aria-errormessage=${w(this._ariaErrorMessage())}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur} />

        <span part="control" class="checkbox__control"> ${this.checked?$i:""} ${t?Ci:""} </span>

        <slot part="label" class="checkbox__label">${this.label}</slot>
      </label>
      ${this._renderError()}
    `}};pt.styles=ki;pt.toggle=!0;Ar([a({type:Boolean,reflect:!0})],pt.prototype,"indeterminate",void 0);Ar([R(".checkbox__input")],pt.prototype,"input",void 0);Ar([p(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],pt.prototype,"handleStateChange",null);pt.define("hmwc-checkbox",pt);var Si=m`
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
`;var Zt=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},K=class extends u{constructor(){super(...arguments),this.horizontal=!0}orientationUpdate(){this.vertical&&(this.horizontal=!1)}render(){let t=f({divider:!0,horizontal:!!this.horizontal,vertical:!!this.vertical,"spacing-xs":this.spacing==="xs","spacing-sm":this.spacing==="sm","spacing-md":this.spacing==="md","spacing-lg":this.spacing==="lg","spacing-xl":this.spacing==="xl",sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`<div part="base" class=${t} role="separator" aria-orientation=${this.vertical?"vertical":"horizontal"}></div>`}};K.styles=Si;Zt([a({type:Boolean,reflect:!0})],K.prototype,"horizontal",void 0);Zt([a({type:Boolean,reflect:!0})],K.prototype,"vertical",void 0);Zt([a({type:String,reflect:!0})],K.prototype,"spacing",void 0);Zt([a({type:Boolean,reflect:!0})],K.prototype,"sm",void 0);Zt([a({type:Boolean,reflect:!0})],K.prototype,"md",void 0);Zt([a({type:Boolean,reflect:!0})],K.prototype,"lg",void 0);Zt([a({type:Boolean,reflect:!0})],K.prototype,"primary",void 0);Zt([a({type:Boolean,reflect:!0})],K.prototype,"success",void 0);Zt([a({type:Boolean,reflect:!0})],K.prototype,"neutral",void 0);Zt([a({type:Boolean,reflect:!0})],K.prototype,"warning",void 0);Zt([a({type:Boolean,reflect:!0})],K.prototype,"danger",void 0);Zt([p("vertical")],K.prototype,"orientationUpdate",null);K.define("hmwc-divider",K);var Ai=m`
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
`;var bt=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},q=class extends u{constructor(){super(...arguments),this.MONTHS=[...Array(12).keys()].map(t=>new Date(0,t).toLocaleString("en",{month:"long"})),this.DAYS=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],this.dates=[],this.selection=[],this.dragAction="add",this.value=[],this.placeholder=[],this.month=new Date().getMonth(),this.year=new Date().getFullYear(),this.yearRange=100,this.yearRangeFuture=10,this.valueUpdate=()=>this.parseDates(),this.selectionUpdate=()=>this.emit("hmwc-change",{detail:{value:this.selection}}),this.dateUpdate=()=>this.dates=this.getDates(),this.multipleUpdate=()=>this.selection=this.selection.slice(0,1)}navigate(t,e=this.year){t!==void 0&&(e===this.year&&(t<0?(t=11,e--):t>11&&(t=0,e++)),this.month=t,this.year=e)}getYearOptions(){let t=new Date().getFullYear(),e=[],r=t-this.yearRange,i=t+this.yearRangeFuture;for(let o=r;o<=i;o++)e.push(o);return e}handleMonthSelect(t){let e=parseInt(t.detail?.value);isNaN(e)||(this.navigate(e,this.year),this.renderRoot.querySelector(".calendar__month-picker")?.hide())}handleYearSelect(t){let e=parseInt(t.detail?.value);isNaN(e)||(this.navigate(this.month,e),this.renderRoot.querySelector(".calendar__year-picker")?.hide())}closeSiblingPicker(t){let e=t==="month"?"calendar__year-picker":"calendar__month-picker",r=this.renderRoot.querySelector(`.${e}`);r?.active&&r.hide()}select(t){new Date(t).getMonth()===this.month&&(this.emit("hmwc-select",{detail:{value:t}}),this.selection.find(e=>+e==+t)?this.selection=this.selection.filter(e=>+e!=+t):this.selection=[...this.multiple?this.selection:[],t])}parseDates(){this.selection=this.value.map(t=>new Date(t))}getDates(){let t=[],e={start:new Date(this.year,this.month,1),end:new Date(this.year,this.month+1,0)};for(let n=e.start.getDay()-1;n>=0;n--){let l=new Date(e.start);l.setDate(l.getDate()-(n+1)),t.push(l)}for(let n=1;n<=e.end.getDate();n++)t.push(new Date(this.year,this.month,n));let r=42-t.length;for(let n=1;n<=r;n++)t.push(new Date(this.year,this.month+1,n));let i=[];for(let n=0;n<t.length;n+=7)i.push(t.slice(n,n+7));return i.filter(n=>n.some(l=>l.getMonth()===this.month)).flat()}getDate(t){return this.dates.find(e=>{let r=new Date(e);return[r.getDate()===parseInt(t.innerText),r.getMonth()===this.month,r.getFullYear()===this.year,t.hasAttribute("current")].every(o=>o)})}startDrag(t){if(this.disabled)return;this.dragTarget=t.target;let e=this.getDate(this.dragTarget);e&&this.select(e),this.dragAction=this.dragTarget?.hasAttribute("selected")?"remove":"add"}drag(t){if(!this.dragTarget)return;let e=t.target;if(document.activeElement,[e===this.dragTarget,e.className!=="calendar__date",this.dragAction==="add"&&e.hasAttribute("selected"),this.dragAction==="remove"&&!e.hasAttribute("selected")].some(o=>o))return;let i=this.getDate(e);i&&this.select(i)}stopDrag(){this.dragAction="add",this.dragTarget=void 0}render(){let t=f({calendar:!0,navigation:!!this.navigation,basic:!!this.basic,disabled:!!this.disabled});return c`
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
    `}};q.styles=Ai;q.dependencies=[y];bt([v()],q.prototype,"dates",void 0);bt([v()],q.prototype,"selection",void 0);bt([v()],q.prototype,"dragAction",void 0);bt([v()],q.prototype,"dragTarget",void 0);bt([a({type:Array,reflect:!0})],q.prototype,"value",void 0);bt([a({type:Array,reflect:!0})],q.prototype,"placeholder",void 0);bt([a({type:Number,reflect:!0})],q.prototype,"month",void 0);bt([a({type:Number,reflect:!0})],q.prototype,"year",void 0);bt([a({type:Boolean,reflect:!0})],q.prototype,"navigation",void 0);bt([a({type:Boolean,reflect:!0})],q.prototype,"multiple",void 0);bt([a({type:Boolean,reflect:!0})],q.prototype,"disabled",void 0);bt([a({type:Boolean,reflect:!0})],q.prototype,"basic",void 0);bt([a({type:Number,attribute:"year-range"})],q.prototype,"yearRange",void 0);bt([a({type:Number,attribute:"year-range-future"})],q.prototype,"yearRangeFuture",void 0);bt([p("value")],q.prototype,"valueUpdate",void 0);bt([p("selection",{waitUntilFirstUpdate:!0})],q.prototype,"selectionUpdate",void 0);bt([p(["month","year"])],q.prototype,"dateUpdate",void 0);bt([p("multiple",{waitUntilFirstUpdate:!0})],q.prototype,"multipleUpdate",void 0);q.define("hmwc-calendar",q);var zi=m`
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
`;var C=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},x=class s extends P{constructor(){super(...arguments),this.initialValueDateParsed=!1,this.autoFocusLost=!1,this.isManuallyTyping=!1,this._isDeleting=!1,this.lockCalendarNavigation=!1,this.dates=[],this.type="text",this.dateFormat="MM/DD/YYYY",this.open=!1,this._calendarLoseFocus=null}handleValueChange(){if(this.type==="tel"){let t=this.value.toString().split("").filter(e=>e!=="-");t.length===3?this.value=`${t.slice(0,3).join("")}-`:t.length===6?this.value=`${t.slice(0,3).join("")}-${t.slice(3,6).join("")}-`:t.length===10?this.value=`${t.slice(0,3).join("")}-${t.slice(3,6).join("")}-${t.slice(6).join("")}`:t.length===11?this.value=`${t[0]}-${t.slice(1,4).join("")}-${t.slice(4,7).join("")}-${t.slice(7).join("")}`:this.value=this.value.toString()}if(this.type==="date"){if(!this.value){this.dates=[],this.initialValueDateParsed=!1;return}if(!this.isManuallyTyping&&!this.initialValueDateParsed&&(this.initialValueDateParsed=!0,!isNaN(Date.parse(this.value)))){let t=new Date(this.value);this.updateDates([t])}}}handleValueMaxLength(){this.type!=="date"&&(this.enforceMaxLength(),this.checkDesiredLength())}handleCalendarToggle(){this.type==="date"&&(this._calendarLoseFocus&&(document.removeEventListener("mousedown",this._calendarLoseFocus),this._calendarLoseFocus=null),this.open&&(this._calendarLoseFocus=t=>{t.composedPath().includes(this)||(this.open=!1,this.emit("hmwc-hide",{}))},document.addEventListener("mousedown",this._calendarLoseFocus)))}handleLabelChange(){this.toggleAttribute("no-label",!this.label)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}clear(){this.value=this.input.value="",this.dates=[],this.valid=!1,this.invalid=!1,this.error="",this.emit("hmwc-change"),this.emit("hmwc-input")}getDates(){return this.dates}checkValidity(){if(this.disabled)return!0;if(this._customError!==null)return!1;let t=String(this.value??"");return this.required&&!t.trim()||this.minlength!=null&&t.trim().length>0&&t.length<this.minlength?!1:this.input?.checkValidity()}reportValidity(){if(this.disabled)return!0;if(this._customError!==null)return this.invalid=!0,this.error=this._customError,this.emit("hmwc-invalid"),!1;let t=String(this.value??"");return this.required&&!t.trim()?(this.invalid=!0,this.error="Please fill out this field.",this.emit("hmwc-invalid"),!1):this.minlength!=null&&t.trim().length>0&&t.length<this.minlength?(this.invalid=!0,this.error=`Value must be at least ${this.minlength} characters`,this.emit("hmwc-invalid"),!1):this.input&&!this.input.checkValidity()?(this.invalid=!0,this.error=this.input.validationMessage,this.emit("hmwc-invalid"),!1):!0}get validationMessage(){return this.input.validationMessage}set validationMessage(t){this.input.setCustomValidity(t)}formatDate(t){let e=t.getFullYear().toString(),r=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0");switch(this.dateFormat){case"YYYY-MM-DD":return`${e}-${r}-${i}`;case"YYYY/MM/DD":return`${e}/${r}/${i}`;case"DD/MM/YYYY":return`${i}/${r}/${e}`;case"DD-MM-YYYY":return`${i}-${r}-${e}`;case"MM-DD-YYYY":return`${r}-${i}-${e}`;case"MM/DD/YYYY":default:return`${r}/${i}/${e}`}}parseDate(t){if(!t||!t.trim())return null;let e=this.parseDateByFormat(t);if(e)return e;let r=Date.parse(t);if(!isNaN(r))return new Date(r);let i=[/^(\d{1,2})[\\-](\d{1,2})[\\-](\d{4})$/,/^(\d{4})[\\-](\d{1,2})[\\-](\d{1,2})$/,/^(\d{1,2})[\\-](\d{1,2})[\\-](\d{2})$/];for(let o of i){let n=t.match(o);if(n){let l,h,d;o===i[1]?[,l,h,d]=n.map(Number):o===i[2]?([,h,d,l]=n.map(Number),l+=2e3):[,h,d,l]=n.map(Number);let g=new Date(l,h-1,d);if(g.getFullYear()===l&&g.getMonth()===h-1&&g.getDate()===d)return g}}return null}parseDateByFormat(t){let e=this.dateFormat.includes("/")?"/":"-",r=t.split(e);if(r.length!==3)return null;let i=this.dateFormat.split(e),o=i.findIndex(j=>j==="YYYY"),n=i.findIndex(j=>j==="MM"),l=i.findIndex(j=>j==="DD");if(o===-1||n===-1||l===-1)return null;let h=parseInt(r[o],10),d=parseInt(r[n],10),g=parseInt(r[l],10);if(isNaN(h)||isNaN(d)||isNaN(g))return null;let b=new Date(h,d-1,g);return b.getFullYear()===h&&b.getMonth()===d-1&&b.getDate()===g?b:null}updateDates(t,e=!1){if(!t.length){e&&(this.dates=[]);return}t.length===0?this.value="":t.length===1?(t[0]instanceof Date||(t[0]=new Date(t[0])),e||(this.value=this.formatDate(t[0])),this.month=t[0].getMonth(),this.year=t[0].getFullYear()):t.length>1&&(e||(this.value=`Multiple Dates Selected (${t.length})`)),this.dates=t}handleFocus(){this.type==="date"&&(this.isManuallyTyping=!0),this.emit("hmwc-focus")}handleBlur(){if(this.type==="date"&&this.isManuallyTyping&&(this.parseAndUpdateDate(),this.isManuallyTyping=!1),this.type==="email"&&this.value){let e=String(this.value).trim();e!==this.value&&(this.value=e,this.input&&(this.input.value=e)),this.validateEmail()}this.type==="filepath"&&this.validateFilePath(),this.required&&!String(this.value??"").trim()?(this.invalid=!0,this.emit("hmwc-invalid")):this.required&&this.invalid&&(this.invalid=!1,this.error="");let t=String(this.value??"");this.minlength!=null&&t.trim().length>0&&t.length<this.minlength?(this.invalid=!0,this.error=`Value must be at least ${this.minlength} characters`,this.emit("hmwc-invalid")):this.minlength!=null&&this.invalid&&t.length>=this.minlength&&(this.invalid=!1,this.error=""),this.emit("hmwc-blur"),this.autoFocusLost=!0}handleInput(t){if(this.type==="date"&&this.isManuallyTyping){let r=this.input.value,i=this.input.selectionStart??r.length,o=this.countDigitsBefore(r,i),n=r.replace(/\D/g,""),l=!this._isDeleting,h=this.formatDateDigits(n,l);h!==r&&(this.input.value=h),this.value=h;let d=this.findCursorPosition(h,o);this.input.setSelectionRange(d,d)}else this.value=this.input.value;this.type==="number"&&this.input.validity?.badInput&&(this.input.value="",this.value="");let e=t?.inputType;if((e==="insertReplacementText"||e==="insertFromPaste")&&(this.sanitizeAutofill(),this.invalid)){this.emit("hmwc-input",{detail:{value:this.value}});return}if(this.enforceMaxLength(),this.checkDesiredLength(),this.invalid){let r=String(this.value??""),i=!this.required||r.trim().length>0,o=this.minlength==null||r.length>=this.minlength;i&&o&&(this.invalid=!1,this.error="")}this.emit("hmwc-input",{detail:{value:this.value}})}handleChange(){this.input.value&&(this.value=this.input.value),this.enforceMaxLength(),this.type==="date"&&this.parseAndUpdateDate(),this.type==="email"&&this.value&&this.validateEmail(),this.type==="filepath"&&this.value&&this.validateFilePath(),this.checkDesiredLength(),this.emit("hmwc-change")}handleKeyDown(t){this.type==="date"&&(t.key==="Backspace"||t.key==="Delete"?this._isDeleting=!0:this._isDeleting=!1,t.key==="Enter"&&(t.preventDefault(),this.parseAndUpdateDate(),this.blur()),t.key==="Escape"&&(t.preventDefault(),this.dates.length===1?this.value=this.formatDate(this.dates[0]):this.dates.length>1?this.value=`Multiple Dates Selected (${this.dates.length})`:this.value="",this.input.value=this.value,this.blur()),t.key.length===1&&!t.ctrlKey&&!t.metaKey&&!/\d/.test(t.key)&&t.preventDefault())}parseAndUpdateDate(){let t=this.input.value;if(!t||!t.trim()){this.updateDates([],!0);return}let e=this.parseDate(t);e?(this.updateDates([e],!0),this.value=this.formatDate(e),this.input.value=this.value,this.invalid=!1,this.error=""):(this.invalid=!0,this.error=`Invalid date format. Try ${this.dateFormat}`)}validateFilePath(){let t=this.value;if(!t||!t.trim()){this.invalid=!0,this.error="File path cannot be blank or whitespace only",this.emit("hmwc-invalid");return}let e=t.trim();if(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/u.test(e)){this.invalid=!0,this.error="File path cannot contain emojis",this.emit("hmwc-invalid");return}if(/[<>"|?*]/.test(e)||e.includes("\0")){this.invalid=!0,this.error='Path contains invalid characters: < > " | ? *',this.emit("hmwc-invalid");return}let o=e.replace(/\\/g,"/"),n=/^[a-zA-Z]:\//.test(o),l=o.startsWith("//"),h=o.startsWith("/")&&!l,d=/^\.{0,2}\//.test(o)||/^[^/]/.test(o);if(!(n||l||h||d)){this.invalid=!0,this.error="Please enter a valid file path",this.emit("hmwc-invalid");return}let g=l?o.slice(2):n?o.slice(3):h?o.slice(1):o;if(/\/{2,}/.test(g)){this.invalid=!0,this.error="Path contains empty segments",this.emit("hmwc-invalid");return}if(l&&o.slice(2).split("/").filter(Boolean).length<2){this.invalid=!0,this.error="UNC path must include a server and share name (e.g. \\\\server\\share)",this.emit("hmwc-invalid");return}this.invalid=!1,this.error=""}validateEmail(){let t=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e=this.value.trim();e&&(t.test(e)?(this.invalid=!1,this.error=""):(this.invalid=!0,this.error="Please enter a valid email address",this.emit("hmwc-invalid")))}getEffectiveMaxLength(){return this.maxlength!=null?this.maxlength:s.MAX_LENGTH_BY_TYPE[this.type]??s.DEFAULT_MAX_LENGTH}enforceMaxLength(){let t=this.getEffectiveMaxLength(),e=String(this.value??"");if(e.length<=t)return!1;let r=e.slice(0,t);return this.value=r,this.input&&(this.input.value=r),this.invalid=!0,this.error=`Value exceeds maximum length of ${t} characters`,this.emit("hmwc-invalid"),!0}checkDesiredLength(){if(this.minlength==null||this.maxlength==null||this.minlength!==this.maxlength)return;String(this.value??"").length===this.minlength?(this.valid=!0,this.invalid=!1):this.valid=!1}sanitizeAutofill(){let t=String(this.value??"");if(t)switch(this.enforceMaxLength(),this.type){case"email":{/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t.trim())||(this.value=this.input.value="",this.invalid=!0,this.error="Autofill value is not a valid email address",this.emit("hmwc-invalid"));break}case"tel":{/^[\d\s+().-]+$/.test(t)||(this.value=this.input.value="",this.invalid=!0,this.error="Autofill value is not a valid phone number",this.emit("hmwc-invalid"));break}case"number":{isNaN(Number(t))&&(this.value=this.input.value="",this.invalid=!0,this.error="Autofill value is not a valid number",this.emit("hmwc-invalid"));break}case"filepath":{this.validateFilePath(),this.invalid&&(this.value=this.input.value="");break}case"url":{try{new URL(t)}catch{this.value=this.input.value="",this.invalid=!0,this.error="Autofill value is not a valid URL",this.emit("hmwc-invalid")}break}default:break}}getDateFormatInfo(){let t=this.dateFormat.includes("/")?"/":"-",e=this.dateFormat.split(t).map(r=>r.length);return{separator:t,partLengths:e}}formatDateDigits(t,e=!1){let{separator:r,partLengths:i}=this.getDateFormatInfo(),o=i.reduce((d,g)=>d+g,0),n=t.slice(0,o),l="",h=0;for(let d=0;d<i.length&&h<n.length;d++){d>0&&(l+=r);let g=n.slice(h,h+i[d]);l+=g,h+=i[d]}if(e&&n.length>0&&n.length<o){let d=0;for(let g=0;g<i.length;g++)if(d+=i[g],n.length===d&&g<i.length-1){l+=r;break}}return l}countDigitsBefore(t,e){let r=0;for(let i=0;i<e&&i<t.length;i++)/\d/.test(t[i])&&r++;return r}findCursorPosition(t,e){let r=0;for(let i=0;i<t.length;i++){if(r===e){for(;i<t.length&&!/\d/.test(t[i]);)i++;return i}/\d/.test(t[i])&&r++}return t.length}handlePaste(t){if(this.type==="number"){let N=t.clipboardData?.getData("text");if(!N)return;t.preventDefault();let Ot=Number(N.trim());if(!isNaN(Ot)&&N.trim()!==""){let Nt=String(Ot);this.input.value=Nt,this.value=Nt,this.emit("hmwc-input",{detail:{value:this.value}});return}let jt="",fe=!1;for(let Nt of N.trim())Nt==="-"&&jt===""?jt+=Nt:Nt==="."&&!fe?(fe=!0,jt+=Nt):Nt>="0"&&Nt<="9"&&(jt+=Nt);jt&&!isNaN(Number(jt))&&jt!=="-"&&jt!=="."&&(this.input.value=jt,this.value=jt,this.emit("hmwc-input",{detail:{value:this.value}}));return}if(this.type!=="date")return;let e=t.clipboardData?.getData("text");if(!e)return;t.preventDefault();let r=this.parseDate(e);if(r){let N=this.formatDate(r);this.input.value=N,this.value=N,this.updateDates([r],!0),this.invalid=!1,this.error="",this.input.setSelectionRange(N.length,N.length),this.emit("hmwc-input",{detail:{value:this.value}});return}let i=this.input.value,o=this.input.selectionStart??i.length,n=this.input.selectionEnd??o,l=i.slice(0,o),h=i.slice(n),g=(l+e+h).replace(/\D/g,""),b=this.formatDateDigits(g,!0),j=e.replace(/\D/g,"").length,_t=this.countDigitsBefore(i,o),z=this.findCursorPosition(b,_t+j);this.input.value=b,this.value=b,this.input.setSelectionRange(z,z),this.emit("hmwc-input",{detail:{value:this.value}})}handleClick(){!this.disabled&&this.type!=="date"||this.type==="date"&&!this.isManuallyTyping&&(this.open=!this.open)}handleClear(){this.clear(),this.input.focus()}handleToggle(){this.visible=!this.visible}handleCalendarChange(t){let e=t.detail.value;this.updateDates(e),this.multiSelect||document.addEventListener("mouseup",()=>{this.open=!1},{once:!0,capture:!0}),this.emit("hmwc-change")}connectedCallback(){super.connectedCallback(),this.toggleAttribute("no-label",!this.label),this.updateDates(this.dates),this.type==="tel"&&(this.pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}"),this.type==="email"&&!this.pattern&&(this.pattern="[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}"),this.type==="filepath"&&!this.pattern&&(this.pattern='([a-zA-Z]:\\\\|\\\\\\\\|/|\\.\\.?/|[^<>"|?*\\x00])([^<>"|?*\\x00]*)'),this.type==="filepath"&&!this.placeholder&&(this.placeholder="C:\\folder\\file.txt or /path/to/file"),!this.sm&&!this.md&&!this.lg&&(this.md=!0),this.type==="password"&&this.minlength===void 0&&(this.minlength=8),this.autofocus||(this.autoFocusLost=!0),this.type==="date"&&!this.placeholder&&(this.placeholder=this.dateFormat),(this.month||this.month&&this.year)&&(this.lockCalendarNavigation=!0),this.maxlength==null&&(this.maxlength=s.MAX_LENGTH_BY_TYPE[this.type]??s.DEFAULT_MAX_LENGTH),this.autocomplete==null&&["filepath","number"].includes(this.type)&&(this.autocomplete="off")}disconnectedCallback(){super.disconnectedCallback(),this._calendarLoseFocus&&(document.removeEventListener("mousedown",this._calendarLoseFocus),this._calendarLoseFocus=null)}render(){let t=this.textarea?De`textarea`:De`input`,e=this.type==="password"&&this.visible||this.type==="date"||this.type==="filepath",r=f({input:!0,"no-label":!this.label,small:!!this.sm,medium:!!this.md,large:!!this.lg,filled:!!this.filled,underline:!!this.underline,prefix:!!this.prefix,suffix:!!this.suffix||!!this.toggle,units:!this.units,pill:!!this.pill,toggle:!!this.toggle,clearable:!!this.clearable,textarea:!!this.textarea,disabled:!!this.disabled,date:this.type==="date",number:this.type==="number","no-spin":this.type==="number"&&(!this.max||Number(this.max)>100)||this.minlength!=null&&this.maxlength!=null&&this.minlength===this.maxlength&&this.minlength>3,calendar:this.open,valid:!!this.valid,invalid:!!this.invalid});return tt`
      <div part='base' class=${r}>

        <!-- Label -->
        <label part="label" class="input__label" for='hmwc-input' aria-hidden=${!this.label}>
          <slot>${this.label}</slot>
        </label>

        <!-- Styling Wrappers -->
        <span class="input__wrapper">

            <!-- Calendar Toggle Button -->
            ${this.type==="date"&&!this.suffix?tt`
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
                ${this.prefix?tt`<hmwc-icon src=${this.prefix}></hmwc-icon>`:""}
              </slot>

              <!-- Input/Textarea Element -->
              <${t}
                part="input"
                id='hmwc-input'
                class="input__control"
                .value=${Bt(this.value)||""}
                name=${w(this.name)}
                title=${this.title}
                type=${this.textarea?void 0:e?"text":this.type}
                placeholder=${w(this.placeholder)}
                pattern=${w(this.pattern)}
                ?readonly=${this.readonly}
                ?required=${this.required}
                ?autofocus=${this.autofocus}
                minlength=${w(this.minlength)}
                maxlength=${w(this.maxlength)}
                min=${w(this.min)}
                max=${w(this.max)}
                rows=${w(this.rows)}
                autocapitalize=${w(this.autocapitalize)}
                autocomplete=${w(this.autocomplete)}
                autocorrect=${w(this.autocorrect)}
                spellcheck=${w(this.spellcheck)}
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
               ${this.suffix||this.loading||this.valid||this.invalid?tt` <slot
                       name="suffix"
                       part="suffix"
                       class="input__suffix"
                       @click=${this.type==="date"?()=>this.open=!this.open:void 0}
                       style=${this.type==="date"?"cursor: pointer;":""}>
                       ${this.suffix?tt`<hmwc-icon src=${this.suffix}></hmwc-icon>`:""}
                       ${!this.valid&&this.loading?tt`<hmwc-spinner primary></hmwc-spinner>`:""}
                       ${this.loading?"":tt` ${this.valid?tt`<hmwc-icon success src="check-circle-fill"></hmwc-icon>`:""}
                           ${this.invalid&&!this.valid?tt`<hmwc-icon danger src="x-circle-fill"></hmwc-icon>`:""}`}
                     </slot>`:""}

             ${this.units?tt`<div part="units" class="input__units">${this.units}</div>`:""}

              <!-- Clear Button -->
               ${!this.loading&&this.clearable&&this.value&&!this.loading&&!this.valid?tt` <slot name="clear" part="clear" class="input__clear">
                       <hmwc-button basic sm icon="x-circle-fill" @hmwc-click=${this.handleClear}></hmwc-button>
                     </slot>`:""}

              <!-- Password Visibility Toggle -->
              <slot name='toggle' part='toggle' class='input__toggle'>
                ${this.toggle?tt` <hmwc-button basic sm icon=${this.visible?"eye-slash":"eye"} @hmwc-click=${this.handleToggle}> </hmwc-button> `:""}
              </slot>
            </div>


            <!-- Help Text -->
            <slot name="help" part="help" class="input__help" aria-hidden=${!this.help}>
                ${this.invalid&&this.error||this.help}
            </slot>


            <!-- Calendar -->
            ${this.type==="date"?tt` <div part="calendar" class="input__calendar" @mouseup=${i=>i.stopPropagation()}>
                    <hmwc-calendar
                      ?multiple=${this.multiSelect}
                      .value=${this.dates instanceof Array?this.dates:[this.dates]}
                      month=${w(this.month)}
                      year=${w(this.year)}
                      ?navigation=${!this.lockCalendarNavigation}
                      @hmwc-change=${this.handleCalendarChange}
                      @blur=${()=>this.emit("hmwc-hide")}></hmwc-calendar>
                  </div>`:""}

        </span>

    </div>
    `}};x.styles=zi;x.dependencies=[_,y,q,X];x.DEFAULT_MAX_LENGTH=2e3;x.MAX_LENGTH_BY_TYPE={email:254,tel:17,url:2083,filepath:4096,number:20,password:128};C([v()],x.prototype,"initialValueDateParsed",void 0);C([v()],x.prototype,"autoFocusLost",void 0);C([v()],x.prototype,"isManuallyTyping",void 0);C([v()],x.prototype,"_isDeleting",void 0);C([v()],x.prototype,"lockCalendarNavigation",void 0);C([a({type:Array,reflect:!0})],x.prototype,"dates",void 0);C([a({type:String,reflect:!0})],x.prototype,"type",void 0);C([a({type:Boolean,reflect:!0})],x.prototype,"fluid",void 0);C([a({type:Boolean,reflect:!0})],x.prototype,"filled",void 0);C([a({type:Boolean,reflect:!0})],x.prototype,"pill",void 0);C([a({type:Boolean,reflect:!0})],x.prototype,"underline",void 0);C([a({type:String})],x.prototype,"prefix",void 0);C([a({type:String})],x.prototype,"suffix",void 0);C([a({type:String})],x.prototype,"pattern",void 0);C([a({type:String,attribute:"date-format"})],x.prototype,"dateFormat",void 0);C([a({type:Boolean})],x.prototype,"multiSelect",void 0);C([a({type:String,reflect:!0})],x.prototype,"units",void 0);C([a({type:Boolean,reflect:!0})],x.prototype,"loading",void 0);C([a({type:Boolean})],x.prototype,"valid",void 0);C([a({type:String})],x.prototype,"help",void 0);C([a({type:Boolean,reflect:!0})],x.prototype,"clearable",void 0);C([a({type:Boolean,reflect:!0})],x.prototype,"textarea",void 0);C([a({type:String})],x.prototype,"placeholder",void 0);C([a({type:Boolean,reflect:!0})],x.prototype,"readonly",void 0);C([a({type:Boolean,reflect:!0})],x.prototype,"toggle",void 0);C([a({type:Boolean})],x.prototype,"visible",void 0);C([a({type:Number})],x.prototype,"rows",void 0);C([a({type:Number})],x.prototype,"minlength",void 0);C([a({type:Number})],x.prototype,"maxlength",void 0);C([a({type:String})],x.prototype,"min",void 0);C([a({type:String})],x.prototype,"max",void 0);C([a({type:Number})],x.prototype,"month",void 0);C([a({type:Number})],x.prototype,"year",void 0);C([a({type:String})],x.prototype,"autocapitalize",void 0);C([a({type:Boolean,reflect:!0})],x.prototype,"autocorrect",void 0);C([a({type:String})],x.prototype,"autocomplete",void 0);C([a({type:Boolean})],x.prototype,"spellcheck",void 0);C([a({type:String})],x.prototype,"inputmode",void 0);C([v()],x.prototype,"open",void 0);C([R(".input__control")],x.prototype,"input",void 0);C([R("hmwc-calendar")],x.prototype,"datepicker",void 0);C([p("value")],x.prototype,"handleValueChange",null);C([p("value")],x.prototype,"handleValueMaxLength",null);C([p("open")],x.prototype,"handleCalendarToggle",null);C([p("label")],x.prototype,"handleLabelChange",null);x.define("hmwc-input",x);var Ei=m`
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
    /* Was "var(--hmwc-transition-fast) fill" — that animates the SVG fill
       property, which this element never sets, so the hover snapped instantly
       while the menu's own toolbar controls faded. Animate what actually
       changes, at the same x-fast timing the toolbar now uses. */
    transition: background-color var(--hmwc-transition-x-fast) ease, color var(--hmwc-transition-x-fast) ease;
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
          margin-inline-start: var(--hmwc-spacing-3x-small);
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
`;var Dt=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},E=class extends u{constructor(){super(...arguments),this.expanded=!1,this.isExpanded=()=>{if(!this.item)return;let t=this.item.matches(":hover");return w(this.submenu)&&t},this.handleClick=t=>{if(this.disabled){t.preventDefault(),t.stopImmediatePropagation();return}this.emit("hmwc-select",{detail:{value:this.value}}),this.checkable&&(this.checked=!this.checked,this.emit("hmwc-change",{detail:{value:this}}))},this.handleMouseOver=t=>{t.stopPropagation(),this.closest("hmwc-menu")?.isTypeaheadActive||this.focus(),this.emit("hmwc-focus"),(this.submenu||this.controllers.slot.test("submenu"))&&(this.expanded=!0)},this.handleMouseOut=t=>{t.stopPropagation(),this.emit("hmwc-blur"),(this.submenu||this.controllers.slot.test("submenu"))&&(this.expanded=!1)}}handleExpandedChange(){if(!this.controllers.slot.test("submenu"))return;let t=this.controllers.slot.get("submenu")[0];t.active=this.expanded}render(){let t=!!this.submenu||this.controllers.slot.test("submenu"),e=f({"menu-item":!0,expanded:this.expanded,checked:!!this.checked,loading:!!this.loading,center:!!this.center,disabled:!!this.disabled,active:!!this.active,prefix:!!this.prefix||this.controllers.slot.test("prefix"),suffix:!!this.suffix||this.controllers.slot.test("suffix"),submenu:t,small:!!this.sm});return c`
      <div
        part="base"
        class=${e}
        role="menuitem"
        aria-label=${w(this.label||void 0)}
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
    `}};E.styles=Ei;E.dependencies=[_,X,pt];E.slots=["prefix","suffix","submenu"];Dt([v()],E.prototype,"expanded",void 0);Dt([a({type:String})],E.prototype,"value",void 0);Dt([a({type:String})],E.prototype,"label",void 0);Dt([a({type:Boolean,reflect:!0})],E.prototype,"checkable",void 0);Dt([a({type:Boolean,reflect:!0})],E.prototype,"checked",void 0);Dt([a({type:Boolean,reflect:!0})],E.prototype,"loading",void 0);Dt([a({type:String})],E.prototype,"prefix",void 0);Dt([a({type:String})],E.prototype,"suffix",void 0);Dt([a({type:Array})],E.prototype,"submenu",void 0);Dt([a({type:Boolean,reflect:!0})],E.prototype,"disabled",void 0);Dt([a({type:Boolean,reflect:!0})],E.prototype,"sm",void 0);Dt([a({type:Boolean,reflect:!0})],E.prototype,"active",void 0);Dt([a({type:Boolean,reflect:!0})],E.prototype,"center",void 0);Dt([R(".menu-item")],E.prototype,"item",void 0);Dt([p("expanded")],E.prototype,"handleExpandedChange",null);E.define("hmwc-menu-item",E);var Oi=m`
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
      /* Left padding is deliberately 0: it lines this row's checkbox up with
         the menu-item checkboxes below it. Do not make this uniform — see the
         alignment test in menu.test.ts. */
      padding: var(--hmwc-spacing-3x-small) var(--hmwc-spacing-3x-small) var(--hmwc-spacing-3x-small) 0;
      transition: background-color var(--hmwc-transition-x-fast) ease, color var(--hmwc-transition-x-fast) ease;

      /* Matches <hmwc-menu-item>: same hover background, same hover text
         colour, same x-fast timing. Previously this faded at 150ms to
         neutral-700 while menu-items snapped instantly to neutral-1000,
         so the two rows behaved visibly differently on hover. */
      &:hover {
        background-color: var(--hmwc-color-neutral-100);
        color: var(--hmwc-color-neutral-1000);
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
      transition: color var(--hmwc-transition-x-fast) ease, background-color var(--hmwc-transition-x-fast) ease;

      /* Same padding, radius, hover background and timing as
         .menu__select-all so the two toolbar controls read as a pair. */
      &:hover {
        --icon-color: var(--hmwc-color-neutral-1000);
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
`;var rt=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},S=class extends u{constructor(){super(...arguments),this.filteredItems=[],this.menuItems=[],this._hasSlottedItems=!1,this._searchVisible=!1,this._typeaheadBuffer="",this._typeaheadMatchIndex=0,this._boundHandleTypeahead=this.handleTypeahead.bind(this),this._upgradeRequeued=!1,this.align="start"}get isTypeaheadActive(){return this._typeaheadBuffer.length>0}show(){this.active=!0}hide(){this.active=!1}toggle(){this.active=!this.active}select(t){this.menuItems.every(e=>!(e instanceof E)||e.value!==t)||this.emit("hmwc-select",{detail:{value:t}})}playAnimation(){window.requestAnimationFrame(()=>{let t=this.style.getPropertyValue("animation");this.style.setProperty("animation","none"),this.style.setProperty("animation",t)})}filterItems(){this.filteredItems=this.filter===""?this.menuItems:this.menuItems.filter(t=>t instanceof K?!0:(t.value||t.label)?.toLowerCase().includes(this.filter?.toLowerCase()||"")),this._hasSlottedItems&&this.menuItems.forEach(t=>{t instanceof K||(t.hidden=!this.filteredItems.includes(t))})}handleSearch(t){this.filter=t.target.value,this.filterItems()}getCheckableItems(){return this.menuItems.filter(t=>t instanceof E&&!!t.checkable)}areAllChecked(){let t=this.getCheckableItems();return t.length>0&&t.every(e=>e.checked)}areSomeChecked(){let t=this.getCheckableItems();return t.some(e=>e.checked)&&!t.every(e=>e.checked)}checkAll(){this.getCheckableItems().forEach(t=>{t.checked=!0}),this.requestUpdate(),this.emit("hmwc-change",{detail:{value:"all"}})}uncheckAll(){this.getCheckableItems().forEach(t=>{t.checked=!1}),this.requestUpdate(),this.emit("hmwc-change",{detail:{value:"none"}})}handleSelectAll(){this.areAllChecked()?this.uncheckAll():this.checkAll()}async toggleSearch(){this._searchVisible=!this._searchVisible,this._searchVisible?(await this.updateComplete,this.shadowRoot?.querySelector(".menu__search")?.focus()):(this.filter="",this.filterItems())}hideSearch(){this.filter||(this._searchVisible=!1)}applyActiveState(){this.menuItems.forEach(t=>{if(!(t instanceof E))return;let e=this.activeValue!==void 0&&String(t.value)===String(this.activeValue);t.active=e})}scrollToActive(){let t=0,e=20,r=()=>{let i=this.shadowRoot?.querySelector(".menu__items");if(!i)return;if(i.clientHeight===0&&t<e){t++,requestAnimationFrame(r);return}let o=this._hasSlottedItems?Array.from(this.querySelectorAll("hmwc-menu-item")):Array.from(i.querySelectorAll("hmwc-menu-item")),n=o.findIndex(l=>{let h=l;return this.activeValue!==void 0&&String(h.value)===String(this.activeValue)});if(n>=0&&o.length>0){let l=i.scrollHeight/o.length,h=n*l;i.scrollTop=h-i.clientHeight/2+l/2}};requestAnimationFrame(r)}handleTypeahead(t){if(this.filter!==void 0&&(this.searchOpen||this._searchVisible))return;if(t.key==="Escape"){this._typeaheadBuffer="",this._typeaheadMatchIndex=0,clearTimeout(this._typeaheadTimeout);return}if(t.key==="Tab"&&this._typeaheadBuffer){t.preventDefault();let r=this.getTypeaheadMatches(this._typeaheadBuffer.toLowerCase());r.length>1&&(this._typeaheadMatchIndex=t.shiftKey?(this._typeaheadMatchIndex-1+r.length)%r.length:(this._typeaheadMatchIndex+1)%r.length,this.selectTypeaheadMatch(r[this._typeaheadMatchIndex]),this.resetTypeaheadBufferTimer());return}if(t.key==="Backspace"){if(!this._typeaheadBuffer)return;if(t.preventDefault(),this._typeaheadBuffer=this._typeaheadBuffer.slice(0,-1),this._typeaheadMatchIndex=0,this._typeaheadBuffer){let r=this.getTypeaheadMatches(this._typeaheadBuffer.toLowerCase());r.length&&this.selectTypeaheadMatch(r[0])}this.resetTypeaheadBufferTimer();return}if(t.key===" "&&!this._typeaheadBuffer||t.key.length!==1||t.ctrlKey||t.metaKey||t.altKey)return;t.preventDefault(),this._typeaheadBuffer+=t.key,this._typeaheadMatchIndex=0;let e=this.getTypeaheadMatches(this._typeaheadBuffer.toLowerCase());e.length&&this.selectTypeaheadMatch(e[0]),this.resetTypeaheadBufferTimer()}getTypeaheadMatches(t){return(this._hasSlottedItems?Array.from(this.querySelectorAll("hmwc-menu-item")).filter(r=>!r.hidden):(this.filter!==void 0?this.filteredItems:this.menuItems).filter(r=>r instanceof E)).filter(r=>(r.label??r.value??"").toString().toLowerCase().startsWith(t))}selectTypeaheadMatch(t){this.menuItems.forEach(r=>{r instanceof E&&(r.active=!1)}),t.active=!0;let e=this.shadowRoot?.querySelector(".menu__items");if(e&&e.scrollHeight>e.clientHeight){let r=this._hasSlottedItems?Array.from(this.querySelectorAll("hmwc-menu-item")):Array.from(e.querySelectorAll("hmwc-menu-item")),i=r.indexOf(t);if(i>=0&&r.length>0){let o=e.scrollHeight/r.length,n=i*o;e.scrollTop=n-e.clientHeight/2+o/2}}requestAnimationFrame(()=>this._focusBase())}resetTypeaheadBufferTimer(){clearTimeout(this._typeaheadTimeout),this._typeaheadTimeout=setTimeout(()=>{this._typeaheadBuffer="",this._typeaheadMatchIndex=0,this.applyActiveState()},1e3)}handleSearchKeydown(t){t.key==="Enter"&&(t.preventDefault(),this.emit("hmwc-search-submit",{detail:{value:this.filter??""}}))}openUpdate(){this.playAnimation(),this.active||(this._typeaheadBuffer="",this._typeaheadMatchIndex=0,clearTimeout(this._typeaheadTimeout)),this.active&&this.searchOpen&&this.filter!==void 0&&this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".menu__search")?.focus()})}activeValueUpdate(){this.applyActiveState()}itemsUpdate(){this.items&&!this.items.length||(this.menuItems=[],this.items?.forEach(t=>{let e=Object.assign(document.createElement("hmwc-menu-item"),{label:t,value:t});this.menuItems.push(e)}))}menuItemsUpdate(){let t=e=>this.select(e.target?.value||"");this.menuItems?.forEach(e=>e.removeEventListener("hmwc-select",t)),this.menuItems?.forEach(e=>e.addEventListener("hmwc-select",t)),this.activeValue!==void 0&&this.applyActiveState(),this.align&&this.align!=="start"&&this.alignUpdate()}prefixUpdate(){setTimeout(()=>{!this.prefix&&!this.suffix&&!this.sm||this.menuItems.forEach(t=>{t instanceof E&&(this.prefix&&(t.prefix=this.prefix),this.suffix&&(t.suffix=this.suffix),this.sm&&(t.sm=!0))})},1)}alignUpdate(){setTimeout(()=>{this.menuItems.forEach(t=>{t instanceof E&&(t.center=this.align==="center")})},1)}handleSlotChange(){let t=this.controllers.slot.get();t.some(i=>i.tagName==="HMWC-MENU-ITEM"&&!(i instanceof E)||i.tagName==="HMWC-DIVIDER"&&!(i instanceof K))&&!this._upgradeRequeued&&(this._upgradeRequeued=!0,Promise.all([customElements.whenDefined("hmwc-menu-item"),customElements.whenDefined("hmwc-divider")]).then(()=>{this._upgradeRequeued=!1,this.handleSlotChange()}));let r=t.filter(i=>i instanceof E||i instanceof K);t.length&&(this._hasSlottedItems=!0,this.menuItems=r,this.filterItems())}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._typeaheadTimeout),this.removeEventListener("keydown",this._boundHandleTypeahead)}connectedCallback(){super.connectedCallback(),this.itemsUpdate(),this.handleSlotChange(),this.active===void 0&&!this.closest("hmwc-dropdown, hmwc-attachment")&&(this.active=!0),this.addEventListener("keydown",this._boundHandleTypeahead)}get _baseDiv(){return this.shadowRoot?.querySelector('[part="base"]')}_focusBase(){let t=this._baseDiv;t&&this.active&&t.focus({preventScroll:!0})}updated(t){super.updated(t),t.has("active")&&this.active&&(this.activeValue!==void 0&&this.scrollToActive(),requestAnimationFrame(()=>this._focusBase()))}render(){let t=f({menu:!0,active:!!this.active,submenu:this.slot==="submenu",filter:this.filter!==void 0,"select-all":!!this.selectAll}),e=this.filter!==void 0?this.filteredItems:this.menuItems,r=this.searchOpen&&this.filter!==void 0,i=this.selectAll||this.filter!==void 0&&!this.searchOpen,o=this.filter!==void 0&&!this.searchOpen,n=this.filter!==void 0&&(this._searchVisible||r);return c`
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
        ${i?c`
              <div class="menu__toolbar">
                ${this.selectAll?c`
                      <div class="menu__select-all" @click=${this.handleSelectAll}>
                        <hmwc-checkbox sm ?checked=${this.areAllChecked()} ?indeterminate=${this.areSomeChecked()}> </hmwc-checkbox>
                        <span class="menu__select-all-label">${this.areAllChecked()?"Deselect All":"Select All"}</span>
                      </div>
                    `:""}
                ${o?c`
                      <hmwc-icon
                        class="menu__search-toggle ${this._searchVisible?"active":""}"
                        src="search"
                        @click=${this.toggleSearch}></hmwc-icon>
                    `:""}
              </div>
              ${n?c`
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
          ${this._hasSlottedItems?"":e}
          <slot @slotchange=${()=>this.handleSlotChange()}></slot>
          ${this.filter!==void 0&&this.filteredItems.length===0?c`<div class="menu__empty">No matches</div>`:""}
        </div>
      </div>
    `}};S.styles=Oi;S.dependencies=[E,K,x,pt,_];rt([v()],S.prototype,"filteredItems",void 0);rt([v()],S.prototype,"menuItems",void 0);rt([v()],S.prototype,"_hasSlottedItems",void 0);rt([v()],S.prototype,"_searchVisible",void 0);rt([a({type:Boolean,reflect:!0})],S.prototype,"active",void 0);rt([a({type:Array})],S.prototype,"items",void 0);rt([a({type:String,reflect:!0})],S.prototype,"filter",void 0);rt([a({type:Boolean,attribute:"search-open",reflect:!0})],S.prototype,"searchOpen",void 0);rt([a({type:String,attribute:"search-placeholder"})],S.prototype,"searchPlaceholder",void 0);rt([a({attribute:"active-value"})],S.prototype,"activeValue",void 0);rt([a({type:Boolean,reflect:!0})],S.prototype,"compact",void 0);rt([a({type:Boolean,reflect:!0})],S.prototype,"selectAll",void 0);rt([a({type:String,reflect:!0})],S.prototype,"prefix",void 0);rt([a({type:String,reflect:!0})],S.prototype,"suffix",void 0);rt([a({type:Boolean,reflect:!0})],S.prototype,"sm",void 0);rt([a({type:String,reflect:!0})],S.prototype,"align",void 0);rt([p("active")],S.prototype,"openUpdate",null);rt([p("activeValue")],S.prototype,"activeValueUpdate",null);rt([p("items")],S.prototype,"itemsUpdate",null);rt([p("menuItems")],S.prototype,"menuItemsUpdate",null);rt([p(["prefix","suffix","sm"])],S.prototype,"prefixUpdate",null);rt([p("align")],S.prototype,"alignUpdate",null);S.define("hmwc-menu",S);var zr=m`
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
`,Mi=m`
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
`;var kt=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},Bi=new WeakSet;function da(s){let t=s;!("adoptedStyleSheets"in t)||Bi.has(t)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,zr.styleSheet??pa()],Bi.add(t))}var pr;function pa(){return pr||(pr=new CSSStyleSheet,pr.replaceSync(zr.cssText)),pr}var O=class extends u{constructor(){super(...arguments),this.trigger="click",this.placement="bottom",this.distance=2,this.skidding=0,this.flip=!0,this._forwardedSlots=new WeakSet,this._menuUpgradeQueued=!1,this._menuSelectHandler=t=>{let e=t.detail??{};this.emit("hmwc-select",{detail:e})},this._menuChangeHandler=t=>{let e=t.detail??{};this.emit("hmwc-change",{detail:e})}}show(){this.active=!0}hide(){this.active=!1}toggle(){this.content&&(this.active=!this.active,this.content instanceof S&&(this.content.active=this.active))}get _anchorId(){return this.name??this._uid??""}get _anchorNameCarrier(){let t=this.anchor instanceof HTMLElement?this.anchor:null;if(!t||!this.content)return t;let e=this.content.getRootNode(),r=t;for(;r.getRootNode()!==e;){let i=r.getRootNode();if(!(i instanceof ShadowRoot))return t;r=i.host}return r}register(){let t=this._anchorId;t&&(Te.includes(t)||Te.push(t))}unregister(){let t=this._anchorId;if(!t)return;let e=Te.indexOf(t);e>=0&&Te.splice(e,1)}retrieve(){let t=this.content;if(this.content=this.controllers.slot.get()[0],this.content?.tagName==="SLOT"){let e=this.content;this._forwardedSlots.has(e)||(this._forwardedSlots.add(e),e.addEventListener("slotchange",()=>this.handleSlotChange())),this.content=e.assignedElements({flatten:!0})[0]??e.children[0]}this.content&&this.content.tagName==="HMWC-MENU"&&!(this.content instanceof S)&&!this._menuUpgradeQueued&&(this._menuUpgradeQueued=!0,customElements.whenDefined("hmwc-menu").then(()=>{this._menuUpgradeQueued=!1,this.handleSlotChange()})),this.anchor||(this.anchor=this.controllers.slot.get("anchor")[0]),this.anchor instanceof String&&(this.anchor=document.querySelector(`#${this.anchor}`),this.append(this.anchor)),this.content&&(this.content.classList.add("attachment__content"),this.decorateContent()),t&&t!==this.content&&t instanceof S&&(t.removeEventListener("hmwc-select",this._menuSelectHandler),t.removeEventListener("hmwc-change",this._menuChangeHandler)),this.content instanceof S&&(this.content.removeEventListener("hmwc-select",this._menuSelectHandler),this.content.removeEventListener("hmwc-change",this._menuChangeHandler),this.content.addEventListener("hmwc-select",this._menuSelectHandler),this.content.addEventListener("hmwc-change",this._menuChangeHandler)),this.anchor&&(this.anchor.classList.add("attachment__anchor"),this.anchor.slot="anchor",this._anchorNameCarrier?.style.setProperty("anchor-name",`--${this._anchorId}`),this.content&&this.content.style.setProperty("position-anchor",`--${this._anchorId}`))}decorateContent(){if(!this.content)return;let t=this.content;t.dataset.placement=this.placement,t.classList.toggle("flip",!!this.flip),t.style.setProperty("--distance",`${this.distance}px`),t.style.setProperty("--skidding",`${this.skidding}px`),this.sync&&this.width&&t.style.setProperty("--attachment-popup-width",`${this.width}px`),da(t.getRootNode())}triggerOnClick(t){if(!this.anchor||!(this.anchor instanceof HTMLElement))return;if(this._clickHandler){let r=this.anchor instanceof u?"hmwc-click":"click";this.anchor.removeEventListener(r,this._clickHandler),this._clickHandler=void 0}if(this._documentHandler&&(document.removeEventListener("mousedown",this._documentHandler),this._documentHandler=void 0),!t)return;let e=this.anchor instanceof u?"hmwc-click":"click";this._clickHandler=()=>{this.toggle()},this._documentHandler=r=>{if(!this.content)return;let i=r.composedPath();if(!i.includes(this.anchor)){if(i.includes(this.content)){this.stayOpen||this.hide();return}this.hide()}},this.anchor.addEventListener(e,this._clickHandler),document.addEventListener("mouseup",this._documentHandler)}triggerOnHover(t){if(!this.anchor||!(this.anchor instanceof HTMLElement))return;t&&this.triggerOnHover(!1);let e=t?"add":"remove";this[`${e}EventListener`]("mouseover",this.show),this[`${e}EventListener`]("mouseout",this.hide)}nameUpdate(t){let e=(typeof t=="string"?t:void 0)??this._uid??"",r=Te.indexOf(e);r>=0&&Te.splice(r,1),this.register()}placementUpdate(){this.decorateContent()}activityUpdate(){this.emit(`hmwc-${this.active?"show":"hide"}`),this.trigger==="hover"&&this.emit(`hmwc-${this.active?"focus":"blur"}`),!(!this.anchor||!(this.anchor instanceof HTMLElement))&&(this.width=this.anchor.offsetWidth,this._anchorNameCarrier?.style.setProperty("anchor-name",`--${this._anchorId}`),this.content&&(this.content.classList.add("attachment__content"),this.content.classList.toggle("active",!!this.active),this.decorateContent(),this.content.style.setProperty("position-anchor",`--${this._anchorId}`),this.content instanceof S&&(this.content.active=this.active),this.arrow&&this.active&&requestAnimationFrame(()=>this.positionArrow())))}positionArrow(){let t=this.shadowRoot?.querySelector(".attachment__arrow");if(!t||!this.anchor||!(this.anchor instanceof HTMLElement))return;let e=this.anchor.getBoundingClientRect(),r=e.left+e.width/2;t.style.top="",t.style.bottom="",t.style.left="",t.style.right="",t.style.translate="",t.style.borderTop="",t.style.borderBottom="",t.style.borderLeft="",t.style.borderRight="",t.style.clipPath="",this.placement.startsWith("bottom")?(t.style.top=`${e.bottom+this.distance}px`,t.style.left=`${r}px`,t.style.translate="-50% -50%",t.style.borderRight="none",t.style.borderBottom="none",t.style.clipPath="polygon(0 0, 100% 0, 0 100%)"):this.placement.startsWith("top")&&(t.style.top=`${e.top-this.distance}px`,t.style.left=`${r}px`,t.style.translate="-50% -50%",t.style.borderLeft="none",t.style.borderTop="none",t.style.clipPath="polygon(100% 0, 100% 100%, 0 100%)")}triggerUpdate(){this.trigger==="click"?(this.triggerOnClick(!0),this.triggerOnHover(!1)):this.trigger==="hover"&&(this.triggerOnHover(!0),this.triggerOnClick(!1))}disconnectedCallback(){super.disconnectedCallback(),this.unregister(),this.triggerOnClick(!1),this.triggerOnHover(!1),this.content instanceof S&&(this.content.removeEventListener("hmwc-select",this._menuSelectHandler),this.content.removeEventListener("hmwc-change",this._menuChangeHandler))}connectedCallback(){if(super.connectedCallback(),!this._uid){let t=globalThis.crypto;this._uid=t?.randomUUID?.()??`a${Math.random().toString(36).slice(2,10)}`}this.register(),this.retrieve()}firstUpdated(){this.shadowRoot?.querySelectorAll("slot")?.forEach(e=>{e.addEventListener("slotchange",()=>this.handleSlotChange())})}handleSlotChange(){this.retrieve(),this.triggerUpdate(),this.content&&this.content.classList.toggle("active",!!this.active),this.content instanceof S&&(this.content.active=this.active)}render(){let t=f({attachment:!0,active:!!this.active,flip:!!this.flip,sync:!!this.sync,arrow:!!this.arrow,[`placement-${this.placement}`]:!0});return c`
      <div
        part="base"
        class=${t}
        style=${`--attachment-width: ${this.width}px; --distance:${this.distance}px; --skidding:${this.skidding}px;`}>
        <slot name="anchor" part="anchor"></slot>
        ${this.arrow?c`<div part="arrow" class="attachment__arrow"></div>`:""}
        <slot part="content"> </slot>
      </div>
    `}};O.styles=Mi;O.dependencies=[S];O.slots=["[default]","anchor"];kt([a({type:Boolean,reflect:!0})],O.prototype,"active",void 0);kt([a({type:String})],O.prototype,"name",void 0);kt([a({type:String})],O.prototype,"anchor",void 0);kt([a({type:String})],O.prototype,"trigger",void 0);kt([a({type:String,reflect:!0})],O.prototype,"placement",void 0);kt([a({type:Number})],O.prototype,"distance",void 0);kt([a({type:Number})],O.prototype,"skidding",void 0);kt([a({type:Boolean,reflect:!0})],O.prototype,"flip",void 0);kt([a({type:Boolean,reflect:!0})],O.prototype,"sync",void 0);kt([a({type:Boolean,reflect:!0})],O.prototype,"stayOpen",void 0);kt([a({type:Boolean,reflect:!0})],O.prototype,"arrow",void 0);kt([v()],O.prototype,"content",void 0);kt([v()],O.prototype,"width",void 0);kt([p("name",{waitUntilFirstUpdate:!0})],O.prototype,"nameUpdate",null);kt([p("placement",{waitUntilFirstUpdate:!0}),p("distance",{waitUntilFirstUpdate:!0}),p("skidding",{waitUntilFirstUpdate:!0}),p("flip",{waitUntilFirstUpdate:!0})],O.prototype,"placementUpdate",null);kt([p("active")],O.prototype,"activityUpdate",null);kt([p("trigger")],O.prototype,"triggerUpdate",null);var Te=[];O.define("hmwc-attachment",O);var Di=m`
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
`;var ct=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},F=class s extends u{constructor(){super(...arguments),this._hasImageError=!1,this.icon="person-fill",this.shape="circle",this.loading="eager",this._handleClick=()=>{this.emit("hmwc-click",{})}}updateInitials(){this.name&&(this.initials=this.name.split(" ").map(t=>t[0]).join(""))}handleSrcChange(){this._hasImageError=!1}_handleImageError(){this._hasImageError=!0}_canShowImage(){return this.src&&!this._hasImageError}get _accessibleName(){return this.label||this.name||s.FALLBACK_LABEL}render(){let t=f({avatar:!0,circle:this.shape==="circle",square:this.shape==="square",[`status-${this.status}`]:!!this.status,selectable:!!this.selectable,sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
      <div part="base" class=${t} role="img" aria-label=${this._accessibleName} @click=${this._handleClick}>
        <slot>
          ${this._canShowImage()?c`<img
                part="image"
                class="avatar__image"
                src=${this.src}
                alt=${this._accessibleName}
                loading=${this.loading}
                @error=${this._handleImageError} />`:this.name?c`<div part="label" class="avatar__label">${this.initials}</div>`:c`<hmwc-icon part="icon" class="avatar__icon" src=${this.icon}></hmwc-icon>`}
        </slot>
      </div>
    `}};F.styles=Di;F.dependencies=[_];F.slots=["[default]"];F.FALLBACK_LABEL="Avatar";ct([v()],F.prototype,"_hasImageError",void 0);ct([v()],F.prototype,"initials",void 0);ct([a({type:Boolean,reflect:!0})],F.prototype,"selectable",void 0);ct([a({type:Boolean,reflect:!0})],F.prototype,"primary",void 0);ct([a({type:Boolean,reflect:!0})],F.prototype,"success",void 0);ct([a({type:Boolean,reflect:!0})],F.prototype,"neutral",void 0);ct([a({type:Boolean,reflect:!0})],F.prototype,"warning",void 0);ct([a({type:Boolean,reflect:!0})],F.prototype,"danger",void 0);ct([a({type:Boolean,reflect:!0})],F.prototype,"sm",void 0);ct([a({type:Boolean,reflect:!0})],F.prototype,"md",void 0);ct([a({type:Boolean,reflect:!0})],F.prototype,"lg",void 0);ct([a({type:String})],F.prototype,"src",void 0);ct([a({type:String})],F.prototype,"name",void 0);ct([a({type:String})],F.prototype,"label",void 0);ct([a({type:String})],F.prototype,"icon",void 0);ct([a({type:String,reflect:!0})],F.prototype,"shape",void 0);ct([a({type:String,reflect:!0})],F.prototype,"status",void 0);ct([a({type:String})],F.prototype,"loading",void 0);ct([p("name")],F.prototype,"updateInitials",null);ct([p("src")],F.prototype,"handleSrcChange",null);F.define("hmwc-avatar",F);Y.define("hmwc-badge",Y);var Ti=m`
  :host {
    /* The call-to-action colour used to be a literal "black" inline on the
       button, which breaks the no-hard-coded-colours rule and never adapted to
       the dark theme. It is a real custom property now, so consumers can tune
       it for a background image that does not give enough contrast. */
    --banner-action-color: var(--hmwc-color-neutral-1000);
    --banner-action-background: transparent;
    /* Was an inline "-.75px" magic number. */
    --banner-label-spacing: var(--hmwc-letter-spacing-denser);

    display: block;
  }

  .banner__label {
    --text-spacing: var(--banner-label-spacing);
  }

  .banner__action {
    --button-color: var(--banner-action-color);
    --button-background: var(--banner-action-background);
  }
`;var Ri=m`
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
`;var Ge=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},Lt=class extends I{render(){let t=f({col:!0,wrap:!!this.wrap,min:!!this.min,max:!!this.max,outline:!!this.outline,fit:!!this.fit,label:!!this.label||this.controllers.slot.test("label"),scrollable:!!this.scrollable});return c`
      <div part="base" class=${t}>
        <slot name="label" part="label" class="col__label">${this.label}</slot>
        <slot part="content" class="col__content"></slot>
      </div>
    `}};Lt.styles=Ri;Ge([a({type:Boolean,reflect:!0})],Lt.prototype,"wrap",void 0);Ge([a({type:Boolean,reflect:!0})],Lt.prototype,"fit",void 0);Ge([a({type:Boolean,reflect:!0})],Lt.prototype,"min",void 0);Ge([a({type:Boolean,reflect:!0})],Lt.prototype,"max",void 0);Ge([a({type:Boolean,reflect:!0})],Lt.prototype,"outline",void 0);Lt.define("hmwc-col",Lt);var Pi=m`
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
`;var Fi=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},$t=class extends u{constructor(){super(...arguments),this.sheen=!0}render(){let t=!!this.pulse,e=!!this.sheen&&!t,r=f({skeleton:!0,pulse:t,sheen:e});return c`
      <div part="base" class=${r} aria-hidden="true">
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};$t.styles=Pi;$t.dependencies=[];$t.slots=[];Fi([a({type:Boolean,reflect:!0})],$t.prototype,"sheen",void 0);Fi([a({type:Boolean,reflect:!0})],$t.prototype,"pulse",void 0);$t.define("hmwc-skeleton",$t);var ji=m`
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
`;var D=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},k=class extends u{constructor(){super(...arguments),this.prefix=null}handleEnter(){this.emit("hmwc-enter",{detail:{value:this.value}})}handleLeave(){this.emit("hmwc-leave",{detail:{value:this.value}})}formatted(){if(!this.format||this.value==null)return this.value;let t=Number(this.value);return Number.isFinite(t)?Math.round(t).toLocaleString():this.value}resolveFamily(){return this.serif?"serif":this.monospace?"monospace":"sans"}_renderIcon(t){return c`<hmwc-icon
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
    `}};k.styles=ji;k.dependencies=[_,$t];k.slots=["prefix","suffix"];D([a({type:Boolean,reflect:!0})],k.prototype,"xs",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"sm",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"md",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"lg",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"xl",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"xxl",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"heading",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"subheading",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"subtitle",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"caption",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"sans",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"serif",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"monospace",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"light",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"semibold",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"bold",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"primary",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"secondary",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"tertiary",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"success",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"neutral",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"warning",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"danger",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"invert",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"uppercase",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"lowercase",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"capitalize",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"wrap",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"flex",void 0);D([a({type:Boolean,reflect:!0})],k.prototype,"center",void 0);D([a({type:Boolean})],k.prototype,"format",void 0);D([a({type:String})],k.prototype,"value",void 0);D([a({type:String})],k.prototype,"label",void 0);D([a({type:String})],k.prototype,"prefix",void 0);D([a({type:String})],k.prototype,"suffix",void 0);D([a({type:String})],k.prototype,"align",void 0);D([a({type:Number})],k.prototype,"amount",void 0);k.define("hmwc-text",k);var mr=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},Ut=class s extends I{render(){return c`
      <hmwc-col
        part="base"
        class="banner"
        fluid
        pad=${this.pad??s.DEFAULTS.pad}
        gap=${this.gap??s.DEFAULTS.gap}
        round=${this.round??s.DEFAULTS.round}
        elevation=${this.elevation??s.DEFAULTS.elevation}
        img=${w(this.img)}>
        <hmwc-col gap="sm">
          <slot name="label" part="label">
            <hmwc-text secondary bold ?invert=${this.invert} xl value=${w(this.label)} class="banner__label"></hmwc-text>
          </slot>
          <slot part="message">
            <hmwc-text secondary flex wrap ?invert=${this.invert} value=${w(this.message)}></hmwc-text>
          </slot>
        </hmwc-col>
        <slot name="action" part="action">
          ${this.action?c`
                <hmwc-button
                  class="banner__action"
                  href=${w(this.href)}
                  label=${this.action}
                  suffix="box-arrow-up-right"></hmwc-button>
              `:""}
        </slot>
      </hmwc-col>
    `}};Ut.styles=Ti;Ut.dependencies=[Lt,k,y];Ut.slots=["[default]","label","action"];Ut.DEFAULTS={pad:"lg",gap:"xxl",round:"xl",elevation:3};mr([a({type:Boolean,reflect:!0})],Ut.prototype,"invert",void 0);mr([a({type:String})],Ut.prototype,"message",void 0);mr([a({type:String})],Ut.prototype,"href",void 0);mr([a({type:String})],Ut.prototype,"action",void 0);Ut.define("hmwc-banner",Ut);var Ni=m`
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
`;var ae=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},G=class extends u{constructor(){super(...arguments),this.trigger="hover",this.placement="top",this.arrow=!0,this.distance=6,this.skidding=0,this.delay=150,this.handleBlur=()=>{this.trigger==="focus"&&this.hide()},this.handleFocus=()=>{this.trigger==="focus"&&this.show()},this.handleClick=()=>{this.trigger==="click"&&this.toggle()},this.handleMouseEnter=()=>{if(this.trigger!=="hover")return;clearTimeout(this.timeout);let t=this.delay instanceof Object?this.delay.show:this.delay;this.timeout=window.setTimeout(()=>this.show(),t)},this.handleMouseLeave=()=>{if(this.trigger!=="hover")return;clearTimeout(this.timeout);let t=this.delay instanceof Object?this.delay.hide:this.delay;this.timeout=window.setTimeout(()=>this.hide(),t)},this.handleKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())}}handleActiveChange(){this.active?(this.emit("hmwc-show"),document.addEventListener("keydown",this.handleKeyDown)):(this.emit("hmwc-hide"),document.removeEventListener("keydown",this.handleKeyDown))}handleDisabledChange(){this.disabled&&this.active&&this.hide()}show(){this.active||this.disabled||(this.active=!0)}hide(){this.active&&(this.active=!1)}toggle(){this.active?this.hide():this.show()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),document.removeEventListener("keydown",this.handleKeyDown)}render(){let t=f({tooltip:!0,active:!!this.active,disabled:!!this.disabled,[this.placement]:!0});return c`
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
    `}};G.styles=Ni;G.dependencies=[O];G.slots=["[default]","content"];ae([a({type:String})],G.prototype,"label",void 0);ae([a({type:String})],G.prototype,"trigger",void 0);ae([a({type:String,reflect:!0})],G.prototype,"placement",void 0);ae([a({type:Boolean,reflect:!0})],G.prototype,"active",void 0);ae([a({type:Boolean,reflect:!0})],G.prototype,"disabled",void 0);ae([a({type:Boolean,reflect:!0})],G.prototype,"arrow",void 0);ae([a({type:Number})],G.prototype,"distance",void 0);ae([a({type:Number})],G.prototype,"skidding",void 0);ae([a({type:Number})],G.prototype,"delay",void 0);ae([p("active")],G.prototype,"handleActiveChange",null);ae([p("disabled")],G.prototype,"handleDisabledChange",null);G.define("hmwc-tooltip",G);var Ii=m`
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
`;var Tt=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},Li=!1,U=class extends u{valueUpdate(){this.emit("hmwc-change",{detail:{value:this.value}})}itemsDeprecation(){this.items!==void 0&&(Li||(Li=!0,console.warn("[hmwc-breadcrumb] `items` is deprecated; use `options` instead. See docs/v2/specs/BREADCRUMB_CONSOLIDATION.md \xA73.2.")))}select(){this.route!==!1&&(this.options!==void 0||this.items!==void 0||this.emit("hmwc-navigate",{detail:{route:this.path}}))}setValue(t){t instanceof CustomEvent&&(t=t.detail.value),this.value=t}render(){let t=this.options??this.items,e=f({breadcrumb__crumb:!0,active:!!this.active,route:this.route!==!1,home:!!this.home});return c`
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
            prefix=${w(this.prefix)}
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
    `}};U.styles=Ii;U.dependencies=[_,G,O];U.slots=["actions"];Tt([a({type:String,reflect:!0})],U.prototype,"prefix",void 0);Tt([a({type:String,reflect:!0})],U.prototype,"suffix",void 0);Tt([a({type:String,reflect:!0})],U.prototype,"icon",void 0);Tt([a({type:String,reflect:!0})],U.prototype,"label",void 0);Tt([a({type:String,reflect:!0})],U.prototype,"path",void 0);Tt([a({type:Boolean,reflect:!0})],U.prototype,"active",void 0);Tt([a({type:Array,reflect:!0})],U.prototype,"options",void 0);Tt([a({type:Array,reflect:!0})],U.prototype,"items",void 0);Tt([a({type:String,reflect:!0})],U.prototype,"value",void 0);Tt([a({type:Boolean,reflect:!0})],U.prototype,"search",void 0);Tt([a({type:Boolean,reflect:!0})],U.prototype,"home",void 0);Tt([a({type:Boolean,reflect:!0})],U.prototype,"route",void 0);Tt([a({type:Array})],U.prototype,"actions",void 0);Tt([p("value",{waitUntilFirstUpdate:!0})],U.prototype,"valueUpdate",null);Tt([p("items",{waitUntilFirstUpdate:!0})],U.prototype,"itemsDeprecation",null);U.define("hmwc-breadcrumb",U);var Ui=(s,t,e)=>{if(!s||!t||t.length===0)return[];let r=s.path.split("/"),i=[];return r.forEach((o,n)=>{let l=o===""?"/":t.find(b=>b.path===r.slice(0,n+1).join("/"))?.path||o,h=t.find(b=>b.path===r.slice(0,n+1).join("/")),d=e?.find(b=>b.path===l),g=d?{...d,path:l,home:n===0}:{path:l,label:l==="/"?void 0:h?.title||"",icon:l==="/"?"house-door-fill":void 0,home:n===0};i.push(g)}),i};var Hi=m`
  :host {
    display: block;
    font-family: var(--hmwc-font-sans);
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
`;var ve=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},Wi=!1,Vi=!1,ma=s=>({label:s.label,path:s.path,icon:s.icon??void 0,prefix:s.prefix??void 0,suffix:s.suffix??void 0,home:s.home,options:s.options??s.items,actions:s.actions}),mt=class extends u{constructor(){super(...arguments),this.routes=[],this.separator="chevron-right",this._onNavigate=t=>{let e=t;t.stopPropagation(),this.emit("hmwc-navigate",{detail:e.detail})},this._onChange=t=>{let e=t;t.stopPropagation(),this.emit("hmwc-change",{detail:e.detail})},this._onSelect=t=>{let e=t;t.stopPropagation(),this.emit("hmwc-select",{detail:e.detail})}}seperatorDeprecation(){this.seperator!==void 0&&(Wi||(Wi=!0,console.warn("[hmwc-breadcrumbs] `seperator` is misspelled and deprecated; use `separator`. See docs/v2/specs/BREADCRUMB_CONSOLIDATION.md \xA73.3.")),this.separator=this.seperator)}overridesDeprecation(){this.overrides!==void 0&&(Vi||(Vi=!0,console.warn("[hmwc-breadcrumbs] `overrides` is deprecated; pass plain-object `crumbs: BreadcrumbDescriptor[]` instead. See docs/v2/specs/BREADCRUMB_CONSOLIDATION.md \xA73.2 + \xA74.2.")))}_resolveCrumbs(){let t=this.crumbs??this.overrides?.map(ma);return this.route?Ui(this.route,this.routes,t):this.crumbs&&this.crumbs.length>0?this.crumbs:t??[]}_renderSeparator(){return c`<slot name="separator" part="separator" class="breadcrumbs__separator"><hmwc-icon flex src=${this.separator}></hmwc-icon></slot>`}render(){let t=this._resolveCrumbs();return c`
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
    `}};mt.styles=Hi;mt.dependencies=[_,U];mt.slots=["separator"];ve([a({type:Array})],mt.prototype,"crumbs",void 0);ve([a({type:Array})],mt.prototype,"overrides",void 0);ve([a({type:String,reflect:!0})],mt.prototype,"route",void 0);ve([a({type:Array})],mt.prototype,"routes",void 0);ve([a({type:String,reflect:!0})],mt.prototype,"separator",void 0);ve([a({type:String,attribute:"seperator"})],mt.prototype,"seperator",void 0);ve([p("seperator",{waitUntilFirstUpdate:!1})],mt.prototype,"seperatorDeprecation",null);ve([p("overrides",{waitUntilFirstUpdate:!1})],mt.prototype,"overridesDeprecation",null);mt.define("hmwc-breadcrumbs",mt);var qi=m`
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
`;var Kt=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},it=class extends I{handleClick(){this.emit("hmwc-click",{})}render(){let t=f({card:!0,fluid:!!this.fluid,header:this.header||this.controllers.slot.test("header"),footer:this.footer||this.controllers.slot.test("footer"),image:this.img||this.controllers.slot.test("image"),primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger,alt:!!this.alt});return c`
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
    `}};it.styles=qi;it.dependencies=[_];it.slots=["header","control","footer","image"];Kt([a({type:Boolean,reflect:!0})],it.prototype,"primary",void 0);Kt([a({type:Boolean,reflect:!0})],it.prototype,"success",void 0);Kt([a({type:Boolean,reflect:!0})],it.prototype,"neutral",void 0);Kt([a({type:Boolean,reflect:!0})],it.prototype,"warning",void 0);Kt([a({type:Boolean,reflect:!0})],it.prototype,"danger",void 0);Kt([a({type:Boolean,reflect:!0})],it.prototype,"alt",void 0);Kt([a({type:String})],it.prototype,"label",void 0);Kt([a({type:String})],it.prototype,"header",void 0);Kt([a({type:String})],it.prototype,"footer",void 0);Kt([a({type:String})],it.prototype,"img",void 0);Kt([a({type:String})],it.prototype,"prefix",void 0);Kt([a({type:String})],it.prototype,"suffix",void 0);Kt([a({type:String})],it.prototype,"shadow",void 0);it.define("hmwc-card",it);var Gi=m`
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
`;var Ki=Object.freeze(["primary","success","warning","danger","alt","neutral"]),ua=s=>`var(--hmwc-color-${s}-600)`,fa=(s,t)=>s||Ki[t%Ki.length],Yi=(s,t)=>ua(fa(s,t));var Er="var(--hmwc-color-neutral-200)",ga=s=>Number.isFinite(s)?s<0?0:s:0,Xi=s=>`${Math.max(0,Math.min(100,s)).toFixed(4).replace(/\.?0+$/,"")}%`,Ji=s=>{if(!s||s.length===0)return`conic-gradient(${Er} 0% 100%)`;let t=[...s].map(o=>({...o,value:ga(o.value)})).filter(o=>o.value>0).sort((o,n)=>n.value-o.value);if(t.length===0)return`conic-gradient(${Er} 0% 100%)`;let e=t.reduce((o,n)=>o+n.value,0);if(e===0)return`conic-gradient(${Er} 0% 100%)`;let r=[],i=0;return t.forEach((o,n)=>{let l=o.value/e*100,h=i,d=n===t.length-1?100:i+l;i=d;let g=Yi(o.color,n);r.push(`${g} ${Xi(h)} ${Xi(d)}`)}),`conic-gradient(${r.join(", ")})`};var ur=s=>{let t=s.kind==="donut",e=Ji(s.data);return c`<div part="pie" class="chart__pie ${t?"chart__pie--donut":""}" style="background: ${e}"></div>`};var be=s=>{let{parentHeight:t,indicators:e,data:r,labeled:i}=s;return c`${e?.map(({value:o,label:n})=>c`
        <div class="chart__indicator" style="top: ${t-t*(o/100)}px">
          <span class="chart__indicator-label">${n}</span>
          <div class="chart__indicator-line"></div>
        </div>
      `)}
    <div part="chart" class="chart__chart">
      ${r?.map(({label:o,value:n})=>c`
          <hmwc-tooltip label=${o} arrow placement="right" delay="200">
            <div class="chart__item">
              <div class="chart__item-progress ${n?"":"null"}" style="height: ${t*(n/100)}px"></div>
              ${i?c`<div class="chart__item-label">${o}</div>`:""}
            </div>
          </hmwc-tooltip>
        `)}

      <slot></slot>
    </div>`};var Qi=new Set(["line","area","progress","gauge","sparkline"]),Or=Object.freeze({pie:ur,donut:ur,bar:be,line:be,area:be,progress:be,gauge:be,sparkline:be});var Yt=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},Zi=!1,to=!1,eo=!1,nt=class extends u{constructor(){super(...arguments),this.kind="bar"}pieDeprecation(){this.pie&&(this.kind="pie",!Zi&&(Zi=!0,console.warn('[hmwc-chart] `pie` is deprecated; use `kind="pie"` instead. See docs/v2/specs/CHART_EXPANSION.md \xA7PR4.')))}donutDeprecation(){this.donut&&(this.kind="donut",!eo&&(eo=!0,console.warn('[hmwc-chart] `donut` is deprecated; use `kind="donut"` instead. See docs/v2/specs/CHART_EXPANSION.md \xA7PR4.')))}barDeprecation(){this.bar&&(this.kind="bar",!to&&(to=!0,console.warn('[hmwc-chart] `bar` is deprecated; use `kind="bar"` instead (default). See docs/v2/specs/CHART_EXPANSION.md \xA7PR4.')))}connectedCallback(){super.connectedCallback(),this.animation="scale-in",this.indicators||(this.indicators=[{value:25,label:"25%"},{value:50,label:"50%"},{value:75,label:"75%"}])}renderContext(){return{kind:this.kind,data:this.data,indicators:this.indicators,labeled:this.labeled,parentHeight:this.parentElement?.clientHeight||this.clientHeight}}render(){let t=this.renderContext(),e=t.kind==="pie"||t.kind==="donut",r=t.kind==="donut",i=t.kind==="bar"||Qi.has(t.kind),o=f({chart:!0,pie:e,donut:r,bar:i,small:!!this.sm,medium:!!this.md,large:!!this.lg}),n=Or[t.kind]??Or.bar;return c`<div part="base" class=${o}>${n(t)}</div>`}};nt.styles=Gi;nt.dependencies=[G];Yt([a({type:String,reflect:!0})],nt.prototype,"kind",void 0);Yt([a({type:Array})],nt.prototype,"data",void 0);Yt([a({type:Boolean})],nt.prototype,"pie",void 0);Yt([a({type:Boolean})],nt.prototype,"donut",void 0);Yt([a({type:Array})],nt.prototype,"indicators",void 0);Yt([a({type:Boolean})],nt.prototype,"bar",void 0);Yt([a({type:Boolean})],nt.prototype,"labeled",void 0);Yt([a({type:Boolean})],nt.prototype,"sm",void 0);Yt([a({type:Boolean})],nt.prototype,"md",void 0);Yt([a({type:Boolean})],nt.prototype,"lg",void 0);Yt([p("pie")],nt.prototype,"pieDeprecation",null);Yt([p("donut")],nt.prototype,"donutDeprecation",null);Yt([p("bar")],nt.prototype,"barDeprecation",null);nt.define("hmwc-chart",nt);var ro=m`
  :host {
    --combobox-max-height: 16rem;
    --combobox-option-padding: var(--hmwc-spacing-x-small) var(--hmwc-spacing-small);
    --combobox-option-background-active: var(--hmwc-color-neutral-100);

    display: block;
    flex: 1 1 18ch;
    min-width: 10ch;
    max-height: fit-content;
  }

  :host([fluid]) {
    width: 100%;
  }

  /* Without a label, center in the row like <hmwc-input>. */
  :host([no-label]) {
    align-self: center;
  }

  .combobox {
    display: block;
    width: 100%;
  }

  .combobox__input {
    display: block;
    width: 100%;
  }

  /* The inner field is not "required" itself (the combobox owns validation),
     so draw the required indicator on its label from out here. */
  :host([required][required-indicator]) .combobox__input::part(label)::after {
    content: var(--hmwc-input-required-content, '*');
    margin-inline-start: var(--hmwc-input-required-content-offset, 2px);
    color: var(--hmwc-input-required-content-color, var(--hmwc-color-danger-500));
    font-weight: var(--hmwc-font-weight-semibold);
    line-height: 1;
  }

  /* Leave room for the chevron at the end of the field, and move the
     inner field's status icon (shown while invalid) in front of it. */
  .combobox__input::part(input) {
    padding-inline-end: var(--hmwc-spacing-3x-large);
  }

  .combobox__input::part(suffix) {
    right: calc(1em + var(--hmwc-input-spacing-medium));
  }

  .combobox__trigger {
    --icon-color: var(--hmwc-input-icon-color);
    display: inline-flex;
    align-items: center;
    padding-inline: var(--hmwc-input-spacing-medium);
    cursor: pointer;
    transition:
      rotate var(--hmwc-transition-fast) ease,
      color var(--hmwc-transition-fast) ease;

    &:hover {
      --icon-color: var(--hmwc-input-icon-color-hover);
    }
  }

  :host([active]) .combobox__trigger {
    rotate: 180deg;
  }

  :host([disabled]) .combobox__trigger,
  :host([readonly]) .combobox__trigger {
    cursor: default;
    opacity: 0.5;
  }

  /* The panel is the attachment's content: the attachment shows, hides and
     positions it (see attachment.styles.ts "contentStyles"). */
  .combobox__panel {
    box-sizing: border-box;
    max-height: var(--combobox-max-height);
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-width: thin;
    padding: var(--hmwc-spacing-2x-small) 0;
    background: var(--hmwc-menu-background);
    border: solid var(--hmwc-panel-border-width) var(--hmwc-panel-border-color);
    font-family: var(--hmwc-font-sans);
  }

  .combobox__listbox[hidden],
  .combobox__status[hidden] {
    display: none;
  }

  .combobox__option {
    display: flex;
    flex-direction: column;
    gap: var(--hmwc-spacing-3x-small);
    padding: var(--combobox-option-padding);
    cursor: pointer;
    user-select: none;
    transition: background-color var(--hmwc-transition-x-fast) ease;

    &.active {
      background-color: var(--combobox-option-background-active);
    }
  }

  .combobox__option-label,
  .combobox__option-description {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .combobox__option-label {
    font-size: calc(1.05 * var(--hmwc-font-size-small));
    font-weight: var(--hmwc-font-weight-semibold);
    line-height: var(--hmwc-line-height-normal);
    color: var(--hmwc-color-neutral-750);
  }

  .combobox__option-description {
    font-size: var(--hmwc-font-size-x-small);
    font-weight: var(--hmwc-font-weight-normal);
    line-height: var(--hmwc-line-height-normal);
    color: var(--hmwc-color-neutral-600);
  }

  .combobox__load-more {
    font-size: var(--hmwc-font-size-small);
    font-weight: var(--hmwc-font-weight-semibold);
    color: var(--hmwc-color-primary-600);
  }

  .combobox__status {
    display: flex;
    align-items: center;
    gap: var(--hmwc-spacing-x-small);
    padding: var(--combobox-option-padding);
    font-size: var(--hmwc-font-size-small);
    color: var(--hmwc-color-neutral-600);
  }

  @media (prefers-reduced-motion: reduce) {
    .combobox__trigger,
    .combobox__option {
      transition: none;
    }
  }
`;var ot=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},va=48,ba={fromAttribute(s){if(!s)return[];try{let t=JSON.parse(s);return Array.isArray(t)?t:[]}catch{return console.warn("[hmwc-combobox] The options attribute is not valid JSON; ignoring it."),[]}}},L=class extends P{constructor(){super(...arguments),this._activeIndex=-1,this._renderCount=0,this._query="",this.emptyText="No matches",this.loadMoreText="Load more",this.loadingText="Loading\u2026",this.renderBatch=50,this.options=[],this._uid=`hmwc-combobox-${Math.random().toString(36).slice(2,10)}`,this._wantOpen=!1,this._programmaticFocus=!1,this._focused=!1,this._typedValue=null,this._loadMoreRequested=!1,this._handleKeydown=t=>{if(!(t.isComposing||!this._interactive))switch(t.key){case"ArrowDown":{t.preventDefault(),this.active?this._move(1):(this.show(),this._activeIndex=t.altKey||!this._rowCount?-1:0);break}case"ArrowUp":{t.preventDefault(),this.active?this._move(-1):(this.show(),this._activeIndex=this._rowCount-1);break}case"Enter":{let e=this.active?this._rowAt(this._activeIndex):void 0;e?(t.preventDefault(),this._activate(e)):this.active&&this.hide();break}case"Escape":{this.active?(t.preventDefault(),t.stopPropagation(),this.hide()):String(this.value??"")!==""&&(t.preventDefault(),t.stopPropagation(),this._typedValue="",this._query="",this.value="",this.emit("hmwc-input",{detail:{value:""}}),this.emit("hmwc-change",{detail:{value:""}}));break}case"Tab":{this.active&&this.hide();break}}},this._handleInnerInput=t=>{t.stopPropagation();let e=String(this._inner?.value??t.detail?.value??"");this._typedValue=e,this._query=e,this.value=e,this._activeIndex=-1,this._renderCount=this.renderBatch,this._clearRequiredError(),this.emit("hmwc-input",{detail:{value:e}}),this._requestOpen()},this._handleInnerChange=t=>{t.stopPropagation(),this.emit("hmwc-change",{detail:{value:String(this.value??"")}})},this._handleInnerFocus=t=>{t.stopPropagation(),this._focused=!0,this.emit("hmwc-focus"),this._programmaticFocus||this._requestOpen()},this._handleInnerBlur=t=>{t.stopPropagation(),this._focused=!1,this.hide(),!this.disabled&&this.required&&!String(this.value??"").trim()&&(this.checkValidity(),this.invalid=!0,this.error=this._resolveError(),this._emitInvalid()),this.emit("hmwc-blur")},this._swallow=t=>{t.stopPropagation()},this._handleAttachmentToggle=t=>{if(t.target!==t.currentTarget)return;t.stopPropagation(),!(t.type==="hmwc-show")&&this.active&&this.hide()},this._handleTriggerMousedown=t=>{t.preventDefault()},this._handleTriggerClick=t=>{t.stopPropagation(),this._interactive&&(this._focused||this.focus(),this.toggle())},this._handlePanelMousedown=t=>{t.preventDefault()},this._handlePanelClick=t=>{let e=this._rowAt(this._rowIndexFromEvent(t));e&&this._activate(e)},this._handlePanelMouseover=t=>{let e=this._rowIndexFromEvent(t);e>=0&&e!==this._activeIndex&&(this._activeIndex=e)},this._handlePanelScroll=()=>{let t=this._panel;t&&(t.scrollTop+t.clientHeight<t.scrollHeight-va||this._extendOrRequestMore())}}get _options(){let t=Array.isArray(this.options)?this.options:[];if(this._normalized?.source===t)return this._normalized.result;let e=t.filter(r=>r!=null).map(r=>typeof r=="object"?r:{value:String(r)});return this._normalized={source:t,result:e},e}get filteredOptions(){let t=this._options,e=this._query.trim().toLowerCase(),r=!!this.noFilter,i=this._filtered;if(i&&i.source===t&&i.query===e&&i.noFilter===r)return i.result;let o=r||!e?t:t.filter(n=>[n.value,n.label,n.description].some(l=>l!==void 0&&String(l).toLowerCase().includes(e)));return this._filtered={source:t,query:e,noFilter:r,result:o},o}get _visibleOptions(){return this.filteredOptions.slice(0,Math.max(this._renderCount,this.renderBatch>0?this.renderBatch:1))}get _showLoadMore(){return!!this.hasMore&&!this.loading&&this._visibleOptions.length>=this.filteredOptions.length}get _rowCount(){return this._visibleOptions.length+(this._showLoadMore?1:0)}get _hasContent(){return this._options.length>0||!!this.loading||!!this.hasMore}get _interactive(){return!this.disabled&&!this.readonly}handleActiveChange(){this.active||(this._activeIndex=-1),this.emit(`hmwc-${this.active?"show":"hide"}`)}handleInteractiveChange(){this._interactive||this.hide()}handleLabelChange(){this.toggleAttribute("no-label",!this.label)}connectedCallback(){super.connectedCallback(),this.toggleAttribute("no-label",!this.label)}willUpdate(t){t.has("value")&&String(this.value??"")!==this._typedValue&&(this._query="",this._typedValue=null),(t.has("options")||t.has("hasMore")||t.has("loading")&&!this.loading)&&(this._loadMoreRequested=!1),t.has("renderBatch")&&this._renderCount<this.renderBatch&&(this._renderCount=this.renderBatch),this._activeIndex>=this._rowCount&&(this._activeIndex=-1),this._wantOpen&&this._focused&&!this.active&&this._hasContent&&this._interactive&&(this.active=!0),super.willUpdate(t)}updated(t){super.updated(t),t.has("_query")&&this._panel&&(this._panel.scrollTop=0),t.has("_activeIndex")&&this._scrollActiveIntoView(),this._inner?.updateComplete.then(()=>this._syncAria())}disconnectedCallback(){super.disconnectedCallback(),this._wantOpen=!1,this._focused=!1}show(){this._interactive&&(this._wantOpen=!0,this.active=!0)}hide(){this._wantOpen=!1,this.active=!1}toggle(){this.active?this.hide():this.show()}appendOptions(t){this.options=[...Array.isArray(this.options)?this.options:[],...Array.isArray(t)?t:[]]}focus(t){if(this._inner?.input){this._programmaticFocus=!0;try{this._inner.focus(t)}finally{this._programmaticFocus=!1}}}blur(){this._inner?.input?.blur()}_emitInvalid(){this.emit("hmwc-invalid",{detail:{field:this.name??this.id??"",value:String(this.value??""),error:this.error??"",validity:this.validity}})}_emitValid(){this.emit("hmwc-valid",{detail:{field:this.name??this.id??"",value:String(this.value??"")}})}_requestOpen(){this._interactive&&(this._wantOpen=!0,this._hasContent&&(this.active=!0))}_select(t){let e=String(t.value??"");this._typedValue=null,this._query="",this.value=e,this.hide(),this._clearRequiredError(),this.emit("hmwc-select",{detail:{value:e,option:t}}),this.emit("hmwc-change",{detail:{value:e}})}_requestMore(t){!this.hasMore||this.loading||!t&&this._loadMoreRequested||(this._loadMoreRequested=!0,this.emit("hmwc-load-more",{detail:{query:this._query,count:this._options.length}}))}_extendOrRequestMore(){return this._visibleOptions.length<this.filteredOptions.length?(this._renderCount=this._visibleOptions.length+Math.max(1,this.renderBatch),!0):(this._requestMore(!1),!1)}_clearRequiredError(){!this.invalid||this._customError!==null||(!this.required||String(this.value??"").trim())&&(this.invalid=!1,this.error=void 0)}_activate(t){t==="load-more"?this._requestMore(!0):this._select(t)}_rowAt(t){let e=this._visibleOptions;if(t>=0&&t<e.length)return e[t];if(t===e.length&&this._showLoadMore)return"load-more"}_move(t){let e=this._rowCount;if(!e)return;let r=this._activeIndex+t;if(t>0&&r>=this._visibleOptions.length&&this._visibleOptions.length<this.filteredOptions.length){this._extendOrRequestMore(),this._activeIndex=this._visibleOptions.length>r?r:this._activeIndex;return}r>=e&&(r=e-1),r<-1&&(r=-1),this._activeIndex=r}_rowIndexFromEvent(t){let e=t.composedPath().find(r=>r instanceof HTMLElement&&r.dataset.index!==void 0);return e?Number(e.dataset.index):-1}_scrollActiveIntoView(){let t=this._panel,e=this._activeRowElement();if(!t||!e)return;let r=e.offsetTop,i=r+e.offsetHeight;r<t.scrollTop?t.scrollTop=r:i>t.scrollTop+t.clientHeight&&(t.scrollTop=i-t.clientHeight)}_activeRowElement(){return this._activeIndex<0?null:this.shadowRoot?.querySelector(`[data-index="${this._activeIndex}"]`)??null}_syncAria(){let t=this._inner?.input;t&&(t.setAttribute("role","combobox"),t.setAttribute("aria-autocomplete","list"),t.setAttribute("aria-haspopup","listbox"),t.setAttribute("aria-expanded",this.active?"true":"false"),t.setAttribute("aria-label",this.label||this.placeholder||this.name||"Combobox"),t.setAttribute("aria-invalid",this._ariaInvalid()),this.required?t.setAttribute("aria-required","true"):t.removeAttribute("aria-required"),"ariaControlsElements"in t&&(t.ariaControlsElements=this._listbox?[this._listbox]:null),"ariaActiveDescendantElement"in t&&(t.ariaActiveDescendantElement=this.active?this._activeRowElement():null))}_renderTrigger(){return c`<hmwc-icon
      slot="toggle"
      part="trigger"
      class="combobox__trigger"
      src="chevron-down"
      aria-hidden="true"
      @mousedown=${this._handleTriggerMousedown}
      @click=${this._handleTriggerClick}></hmwc-icon>`}_renderOption(t,e){let r=e===this._activeIndex;return c`
      <div
        part="option"
        class=${f({combobox__option:!0,active:r})}
        role="option"
        id=${`${this._uid}-option-${e}`}
        data-index=${e}
        aria-selected=${r?"true":"false"}>
        <span part="option-label" class="combobox__option-label">${t.label??t.value}</span>
        ${t.description?c`<span part="option-description" class="combobox__option-description">${t.description}</span>`:A}
      </div>
    `}_renderPanel(){let t=this._visibleOptions,e=t.length,r=!this.loading&&this.filteredOptions.length===0;return c`
      <div
        part="panel"
        class="combobox__panel"
        @mousedown=${this._handlePanelMousedown}
        @click=${this._handlePanelClick}
        @mouseover=${this._handlePanelMouseover}
        @scroll=${this._handlePanelScroll}>
        <div
          part="listbox"
          class="combobox__listbox"
          role="listbox"
          id=${`${this._uid}-listbox`}
          aria-label=${this.label||this.placeholder||this.name||"Suggestions"}
          ?hidden=${!this._rowCount}>
          ${t.map((i,o)=>this._renderOption(i,o))}
          ${this._showLoadMore?c`
                <div
                  part="load-more"
                  class=${f({combobox__option:!0,"combobox__load-more":!0,active:this._activeIndex===e})}
                  role="option"
                  id=${`${this._uid}-load-more`}
                  data-index=${e}
                  aria-selected=${this._activeIndex===e?"true":"false"}>
                  ${this.loadMoreText}
                </div>
              `:A}
        </div>
        <div part="status" class="combobox__status" role="status" aria-live="polite" ?hidden=${!this.loading&&!r}>
          ${this.loading?c`<hmwc-spinner class="combobox__spinner"></hmwc-spinner><span>${this.loadingText}</span>`:r?c`<span>${this.emptyText}</span>`:A}
        </div>
      </div>
    `}render(){let t=f({combobox:!0,active:!!this.active,disabled:!!this.disabled,invalid:!!this.invalid});return c`
      <div part="base" class=${t}>
        <hmwc-attachment
          .placement=${"bottom-start"}
          .distance=${2}
          .stayOpen=${!0}
          ?sync=${!0}
          ?active=${!!this.active}
          @hmwc-show=${this._handleAttachmentToggle}
          @hmwc-hide=${this._handleAttachmentToggle}>
          ${this._renderPanel()}
          <hmwc-input
            slot="anchor"
            part="input"
            class="combobox__input"
            fluid
            autocomplete="off"
            .value=${Bt(String(this.value??""))}
            label=${w(this.label)}
            label-pos=${w(this.labelPos)}
            placeholder=${w(this.placeholder)}
            .help=${this.help}
            .invalid=${Bt(!!this.invalid)}
            .error=${Bt(this.error??"")}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?sm=${this.sm}
            ?md=${this.md}
            ?lg=${this.lg}
            ?autofocus=${this.autofocus}
            @keydown=${this._handleKeydown}
            @hmwc-input=${this._handleInnerInput}
            @hmwc-change=${this._handleInnerChange}
            @hmwc-focus=${this._handleInnerFocus}
            @hmwc-blur=${this._handleInnerBlur}
            @hmwc-invalid=${this._swallow}
            @hmwc-valid=${this._swallow}
            @hmwc-clear=${this._swallow}
            @hmwc-hide=${this._swallow}>${this._renderTrigger()}</hmwc-input>
        </hmwc-attachment>
      </div>
    `}};L.styles=ro;L.dependencies=[O,_,x,X];L.slots=[];ot([v()],L.prototype,"_activeIndex",void 0);ot([v()],L.prototype,"_renderCount",void 0);ot([v()],L.prototype,"_query",void 0);ot([a({type:Boolean,reflect:!0})],L.prototype,"active",void 0);ot([a({type:Boolean,reflect:!0})],L.prototype,"fluid",void 0);ot([a({type:Boolean,reflect:!0,attribute:"has-more"})],L.prototype,"hasMore",void 0);ot([a({type:Boolean,reflect:!0})],L.prototype,"loading",void 0);ot([a({type:Boolean,reflect:!0,attribute:"no-filter"})],L.prototype,"noFilter",void 0);ot([a({type:Boolean,reflect:!0})],L.prototype,"readonly",void 0);ot([a({type:String,attribute:"empty-text"})],L.prototype,"emptyText",void 0);ot([a({type:String})],L.prototype,"help",void 0);ot([a({type:String,attribute:"load-more-text"})],L.prototype,"loadMoreText",void 0);ot([a({type:String,attribute:"loading-text"})],L.prototype,"loadingText",void 0);ot([a({type:String})],L.prototype,"placeholder",void 0);ot([a({type:Number,attribute:"render-batch"})],L.prototype,"renderBatch",void 0);ot([a({converter:ba})],L.prototype,"options",void 0);ot([R(".combobox__input")],L.prototype,"_inner",void 0);ot([R(".combobox__panel")],L.prototype,"_panel",void 0);ot([R(".combobox__listbox")],L.prototype,"_listbox",void 0);ot([p("active",{waitUntilFirstUpdate:!0})],L.prototype,"handleActiveChange",null);ot([p(["disabled","readonly"],{waitUntilFirstUpdate:!0})],L.prototype,"handleInteractiveChange",null);ot([p("label")],L.prototype,"handleLabelChange",null);L.define("hmwc-combobox",L);var io=m`
  :host {
    --dropdown-width: initial;
    /* The input-family token, not the generic one — same value today, but it
       keeps the dropdown tracking <hmwc-input> if the input radius is retuned. */
    --dropdown-radius: var(--hmwc-input-border-radius-large);
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
    /* No gap: the label→field distance comes from the label's own
       padding-block, matching <hmwc-input>'s gapless grid. The help text
       carries its own margin instead (see .dropdown__help). */
    gap: 0;

    &.disabled {
      --dropdown-background: var(--hmwc-input-filled-background-color-disabled);
    }

    /* Label box must match <hmwc-input>'s exactly, or a dropdown and an input
       sitting side by side in a row render their fields at different vertical
       offsets. Input builds its spacing from the label's own line-height +
       padding-block (its wrapper is a gapless grid); this used to inherit
       line-height 1.8 and add a flex gap instead, leaving the two ~3.5px out. */
    & .dropdown__label {
      display: none;
      width: 100%;
      padding: 0;
      padding-block: 0.15em;
      line-height: 1.4;
      font-family: var(--hmwc-font-sans);
      white-space: nowrap;
    }

    & .dropdown__help {
      text-align: end;
      width: 100%;
      display: block;
      /* Replaces the flex gap that used to separate it from the trigger. */
      margin-block-start: var(--hmwc-spacing-3x-small);
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
        align-items: center;
        /* Same token <hmwc-input> uses for its label — was neutral-600, which
           read a shade lighter than the input label beside it. */
        color: var(--hmwc-input-color);
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
`;var wt=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},W=class extends P{constructor(){super(...arguments),this.active=!1,this.items=[],this.placeholder="",this.placement="bottom-start",this.sync=!0,this.distance=1,this.skidding=0,this._menuSelectHandler=t=>{this.select(t.detail.value),this.hide()},this._documentMousedownHandler=t=>{let e=t.target;this.contains(e)||this.hide()},this._baseClickHandler=t=>{let e=this._menu;e&&t.composedPath().includes(e)||(this.active=!this.active)}}show(){this.disabled||(this.active=!0)}hide(){this.disabled||(this.active=!1)}toggle(){this.disabled||(this.active=!this.active)}select(t){this.value=t,this.emit("hmwc-select",{detail:{value:t}})}get _menu(){return this.menu??this.querySelector("hmwc-menu")}get _displayLabel(){let t=this.value;if(t==null||t==="")return this.placeholder||"";let e=Array.from(this.querySelectorAll("hmwc-menu-item"));for(let r of e){let i=r.getAttribute("value");if(i!==null&&i===String(t))return r.getAttribute("label")??String(t)}return String(t)}listen(t){t==="add"&&this.listen("remove"),this._menu?.[`${t}EventListener`]("hmwc-select",this._menuSelectHandler),document[`${t}EventListener`]("mousedown",this._documentMousedownHandler)}_handleSlotChange(){this.querySelector("hmwc-menu")?.toggleAttribute("compact",!0),this.listen("add")}handleValueChange(){this.emit("hmwc-change",{detail:{value:this.value}})}async handleItemsChange(){await this.updateComplete,this.listen("add")}handleOpenChange(){this.emit(`hmwc-${this.active?"show":"hide"}`)}handleLabelChange(){this.toggleAttribute("no-label",!this.label)}disconnectedCallback(){super.disconnectedCallback(),this.listen("remove")}firstUpdated(){super.connectedCallback(),this.listen("add"),this.toggleAttribute("no-label",!this.label)}render(){let t=f({dropdown:!0,disabled:!!this.disabled,small:!!this.sm,medium:!!this.md,large:!!this.lg,filled:!!this.filled,label:!!this.label,pill:!!this.pill,invalid:!!this.invalid});return c`
      <div part="base" class=${t} @click=${this._baseClickHandler}>
        <slot name="label" part="label" class="dropdown__label">${this.label}</slot>

        <hmwc-attachment
          .placement=${this.placement}
          .distance=${this.distance??2}
          .skidding=${this.skidding??0}
          ?sync=${this.sync}
          ?active=${this.active}>
          ${this.items.length?c` <hmwc-menu compact part="anchor" class="dropdown__menu" .filter=${this.filter} .items=${this.items}></hmwc-menu>`:c`<slot @slotchange=${()=>this._handleSlotChange()}></slot>`}

          <hmwc-button
            slot="anchor"
            part="trigger"
            class="dropdown__trigger"
            aria-label=${w(this.name)}
            ?fluid=${this.fluid}
            ?disabled=${this.disabled}
            ?pill=${this.pill}
            ?sm=${this.sm}
            ?md=${this.md}
            ?lg=${this.lg}
            label=${this._displayLabel}
            suffix="chevron-down"
            @hmwc-focus=${()=>this.emit("hmwc-focus")}
            @hmwc-blur=${()=>this.emit("hmwc-blur")}></hmwc-button>
        </hmwc-attachment>

        <!-- Help Text -->
        <slot name="help" part="help" class="dropdown__help" aria-hidden=${!this.help}> ${this.invalid&&this.error||this.help} </slot>
      </div>
    `}};W.styles=io;W.slots=["menu"];W.dependencies=[O,y,S];wt([a({type:Boolean,reflect:!0})],W.prototype,"active",void 0);wt([a({type:Array})],W.prototype,"items",void 0);wt([a({type:String})],W.prototype,"placeholder",void 0);wt([a({type:String})],W.prototype,"placement",void 0);wt([a({type:String,reflect:!0})],W.prototype,"filter",void 0);wt([a({type:String})],W.prototype,"help",void 0);wt([a({type:Boolean})],W.prototype,"sync",void 0);wt([a({type:Boolean,reflect:!0})],W.prototype,"pill",void 0);wt([a({type:Boolean,reflect:!0})],W.prototype,"filled",void 0);wt([a({type:Number})],W.prototype,"distance",void 0);wt([a({type:Number})],W.prototype,"skidding",void 0);wt([a({type:Boolean,reflect:!0})],W.prototype,"fluid",void 0);wt([R(".dropdown__trigger")],W.prototype,"trigger",void 0);wt([R(".dropdown__menu")],W.prototype,"menu",void 0);wt([p("value",{waitUntilFirstUpdate:!0})],W.prototype,"handleValueChange",null);wt([p("items",{waitUntilFirstUpdate:!0})],W.prototype,"handleItemsChange",null);wt([p("active",{waitUntilFirstUpdate:!0})],W.prototype,"handleOpenChange",null);wt([p("label")],W.prototype,"handleLabelChange",null);W.define("hmwc-dropdown",W);var oo=m`
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
`;var Rt=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},wa=s=>s.toLocaleString("en-US",{maximumFractionDigits:0}),Z=class extends u{constructor(){super(...arguments),this.range=[],this.page=1,this.siblings=1,this.boundary=1}updateRange(){let t=(r,i)=>Array.from({length:i-r+1},(o,n)=>r+n),e=(this.siblings+this.boundary)*2;if(this.count>e+3){let r=Math.max(2,this.page-this.siblings),i=Math.min(this.count-1,this.page+this.siblings),o=t(r,i),n=r>2,l=this.count-i>1,h=e-o.length;n&&!l?o=[-1,...t(r-h,r-1),...o]:!n&&l?o=[...o,...t(i+1,i+h),-1]:o=[-1,...o,-1],this.range=[1,...o,this.count]}else this.range=t(1,this.count)}handlePageChange(){this.updateRange(),this.emit("hmwc-change",{detail:{page:this.page}})}handleCountChange(){this.updateRange()}render(){let t=f({pagination:!0,sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
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
                    label=${wa(e)}
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
    `}};Z.styles=oo;Z.dependencies=[_,y];Rt([v()],Z.prototype,"range",void 0);Rt([a({type:Number})],Z.prototype,"page",void 0);Rt([a({type:Number})],Z.prototype,"count",void 0);Rt([a({type:Number})],Z.prototype,"siblings",void 0);Rt([a({type:Number})],Z.prototype,"boundary",void 0);Rt([a({type:Boolean,reflect:!0})],Z.prototype,"sm",void 0);Rt([a({type:Boolean,reflect:!0})],Z.prototype,"md",void 0);Rt([a({type:Boolean,reflect:!0})],Z.prototype,"lg",void 0);Rt([a({type:Boolean,reflect:!0})],Z.prototype,"primary",void 0);Rt([a({type:Boolean,reflect:!0})],Z.prototype,"success",void 0);Rt([a({type:Boolean,reflect:!0})],Z.prototype,"neutral",void 0);Rt([a({type:Boolean,reflect:!0})],Z.prototype,"warning",void 0);Rt([a({type:Boolean,reflect:!0})],Z.prototype,"danger",void 0);Rt([p("page",{waitUntilFirstUpdate:!0})],Z.prototype,"handlePageChange",null);Rt([p(["count","siblings","boundary"])],Z.prototype,"handleCountChange",null);Z.define("hmwc-pagination",Z);var ao=m`
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
    /* Alternate-row stripe. Previously defaulted to
       --hmwc-color-neutral-50 (~97.5% lightness in the light theme),
       which is visually indistinguishable from the white/panel
       surfaces tables usually sit on — stripes only became apparent
       through the hover brightness filter. neutral-100 keeps the
       stripe subtle but actually visible on both white and panel
       surfaces. */
    --data-table-background-alt: var(--hmwc-color-neutral-100);
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
      /* Scrolling is opt-in: the component measures real horizontal
         overflow (with a 1px subpixel-rounding tolerance) and adds
         .scrollable only when the table is genuinely wider than the
         host. Keeping overflow-x hidden by default prevents the
         phantom scrollbar caused by the padding/negative-margin
         shadow-preservation trick rounding scrollWidth up. */
      overflow-x: hidden;
      scrollbar-width: thin;
      padding: var(--hmwc-spacing-x-small);
      margin: calc(-1 * var(--hmwc-spacing-x-small));

      &.scrollable {
        overflow-x: auto;
      }

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
          /* x-fast (50ms), not fast (150ms) — row hover is a pointer-tracking
             affordance, so it has to feel immediate. At 150ms the highlight
             visibly lags the cursor when scanning down a table. */
          transition: filter var(--hmwc-transition-x-fast) ease, box-shadow var(--hmwc-transition-x-fast) ease;

          /* Filler rows pad short pages for a stable height — they are
             not clickable and must not advertise interactivity. */
          &.filler,
          &.empty {
            cursor: default;
          }

          & .data-table__item {
            box-sizing: border-box;
            text-overflow: ellipsis;
            overflow: hidden;
            /* Cell values are data, so they must be selectable and copyable.
               The base component stylesheet sets user-select: none on :host
               for UI chrome, and cells inherit it — this opts the data back in.
               Chrome around the data (headers, checkboxes, action buttons,
               resize handles, pagination) deliberately stays unselectable.
               Row click is drag-guarded so selecting text cannot fire
               hmwc-click — see _rowPointerDown / _wasDrag. */
            user-select: text;
            -webkit-user-select: text;

            /* Control cells hold widgets, not data — dragging across them
               should not start a selection. */
            &.checkbox,
            &.action {
              user-select: none;
              -webkit-user-select: none;
            }

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

          &:hover:not(.filler):not(.empty) {
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
`;function so(s,t=[]){return s==null?t.map(e=>({key:e,label:e})):Array.isArray(s)?s.length===0?t.map(e=>({key:e,label:e})):typeof s[0]=="object"&&s[0]!==null?no(s[0]):s.filter(e=>typeof e=="string").map(e=>({key:e,label:e})):typeof s=="object"?no(s):t.map(e=>({key:e,label:e}))}function no(s){return Object.keys(s).map(t=>({key:t,label:typeof s[t]=="string"&&s[t].length>0?s[t]:t}))}var M=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},Mr=s=>s.toLocaleString("en-US",{maximumFractionDigits:0}),$=class extends u{constructor(){super(...arguments),this.selections=[],this._fillerRows=new WeakSet,this._readyEmitted=!1,this._sizingId=0,this._tableIsSized=!1,this._resizing=null,this._didResize=!1,this._columnWidths={},this._boundResizeMove=null,this._boundResizeEnd=null,this._filterableFields={},this._columnFilters={},this.fieldKeys=[],this._normalizedFields=[],this.ready=!1,this.results=[],this.entries=[],this.total=0,this.data=[],this.fields=[],this.page=1,this.amount=10,this.label="",this.sizing={},this.filter="",this.sort="",this.order="ascending",this.pagination=!0,this.actions=[],this.dataUpdate=()=>this.parseData(),this.entriesUpdate=()=>this.entries=this.getEntries(),this._rowPointerOrigin=null,this._rowPointerDown=t=>{this._rowPointerOrigin={x:t.clientX,y:t.clientY}},this._footerInScroll=!1,this._scrollable=!1,this._measureFooter=()=>{let t=this.shadowRoot?.querySelector(".data-table__scroll");if(t){let n=t.scrollWidth>t.clientWidth+1;n!==this._scrollable&&(this._scrollable=n)}let e=this.shadowRoot?.querySelector(".data-table__footer");if(!e)return;let r=e.scrollWidth,i=this.clientWidth,o=r>i;o!==this._footerInScroll&&(this._footerInScroll=o)}}getColumnStyle(t){return this._columnWidths[t]?`width: ${this._columnWidths[t]}px`:this.sizing&&this.sizing[t]?`width: ${this.sizing[t]}`:""}hasFields(){return this.fields==null?!1:Array.isArray(this.fields)?this.fields.length>0:typeof this.fields=="object"?Object.keys(this.fields).length>0:!1}getDisplayName(t){let e=this._normalizedFields.find(r=>r.key===t);return e?e.label:t}computeFilterableFields(){let e={};for(let r of this.fieldKeys){if(this.isSkeletonField(r))continue;let i=[];for(let l of this.data){let h=l[r];h!=null&&h!==""&&i.push(h)}if(i.length===0)continue;let o=new Set(i.map(String));if(o.size<=1)continue;let n=this.detectColumnType(i);if(n==="categorical"){let l=Array.from(o).sort((h,d)=>h.localeCompare(d));l.length<10&&(e[r]={type:"categorical",values:l})}else if(n==="numeric"){let l=i.map(h=>this.parseNumericValue(h)).filter(h=>h!=null).sort((h,d)=>h-d);if(l.length>0){let h=(d,g)=>{let b=(d.length-1)*g,j=Math.floor(b),_t=Math.ceil(b);return j===_t?d[j]:d[j]*(_t-b)+d[_t]*(b-j)};e[r]={type:"numeric",values:[],numericStats:{min:l[0],max:l[l.length-1],q1:h(l,.25),median:h(l,.5),q3:h(l,.75)}}}}else e[r]={type:n,values:[]}}this._filterableFields=e}detectColumnType(t){let e=0,r=0;for(let o of t){let n=String(o),l=n.replace(/[$,%k]/gi,"").replace(/,/g,"").trim();if(l!==""&&!isNaN(Number(l))){e++;continue}if(this.isValidDate(n)){r++;continue}}let i=t.length;return e/i>=.8?"numeric":r/i>=.8?"date":"categorical"}parseNumericValue(t){if(typeof t=="number")return t;let r=String(t).trim().replace(/[$,%k]/gi,"").replace(/,/g,""),i=Number(r);return isNaN(i)?null:i}isColumnFilterActive(t){let e=this._columnFilters[t];if(!e)return!1;let r=this._filterableFields[t];if(!r)return!1;switch(e.type){case"categorical":return e.selected.size<r.values.length;case"numeric":return e.min!=null||e.max!=null;case"date":return e.from!=null||e.to!=null;case"text":return e.query.length>0}}getColumnFilterIcon(t){let e=this.isColumnFilterActive(t);return this._filterableFields[t]?.type==="date"?e?"calendar-range-fill":"calendar-range":e?"funnel-fill":"funnel"}isFilterValueSelected(t,e){let r=this._columnFilters[t];return!r||r.type!=="categorical"?!0:r.selected.has(e)}handleCategoricalFilterChange(t,e){let r=e.detail?.value,i=this._filterableFields[t];if(i){if(r==="all"){delete this._columnFilters[t],this._columnFilters={...this._columnFilters},this.page=1,this.parseData();return}if(r==="none"){this._columnFilters[t]={type:"categorical",selected:new Set},this._columnFilters={...this._columnFilters},this.page=1,this.parseData();return}if(r instanceof E){let o=r.value;if(!o)return;let n=this._columnFilters[t];(!n||n.type!=="categorical")&&(n={type:"categorical",selected:new Set(i.values)},this._columnFilters[t]=n),r.checked?n.selected.add(o):n.selected.delete(o),n.selected.size===i.values.length&&delete this._columnFilters[t],this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}}}handleNumericFilterChange(t,e,r){let i=r.target,o=String(i.value??"").trim(),n=this._columnFilters[t];(!n||n.type!=="numeric")&&(n={type:"numeric"},this._columnFilters[t]=n),!o||o===""?delete n[e]:n[e]=Number(o),n.min==null&&n.max==null&&delete this._columnFilters[t],this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}handleDateFilterChange(t,e,r){let i=r.target,o=String(i.value??"").trim(),n=this._columnFilters[t];(!n||n.type!=="date")&&(n={type:"date"},this._columnFilters[t]=n),!o||o===""?delete n[e]:n[e]=o,n.from==null&&n.to==null&&delete this._columnFilters[t],this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}handleTextFilterChange(t,e){let r=e.target,i=String(r.value??"").trim();i?this._columnFilters[t]={type:"text",query:i}:delete this._columnFilters[t],this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}clearColumnFilter(t){delete this._columnFilters[t],this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}applyNumericPreset(t,e,r){let i={type:"numeric"};e!=null&&(i.min=e),r!=null&&(i.max=r),this._columnFilters[t]=i,this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}formatPresetValue(t){return Math.abs(t)>=1e6?`${(t/1e6).toFixed(1).replace(/\.0$/,"")}M`:Math.abs(t)>=1e4?`${(t/1e3).toFixed(1).replace(/\.0$/,"")}k`:t.toLocaleString("en-US",{maximumFractionDigits:0})}parseData(){this.fieldKeys=this.resolveFieldKeys(),this.computeFilterableFields();let t=this.filterData(),e=[];t.forEach(()=>e.push(!1)),this.selections=e,this.results=this.sortData(t),this.amount===1/0&&(this.amount=this.results.length);let r=Math.max(1,Math.ceil(this.results.length/this.amount));this.page>r&&(this.page=1),this.entries=this.getEntries(this.results),this.total=this.results.length,t.length&&(this.ready=!0),this.ready&&!this._readyEmitted&&(this._readyEmitted=!0,this.emit("hmwc-ready")),this.setTableSizing()}filterData(t=this.data){t=structuredClone(t);let e=Object.keys(this._columnFilters);if(e.length>0&&(t=t.filter(i=>e.every(o=>{let n=this._columnFilters[o],l=i[o];if(l==null)return!1;switch(n.type){case"categorical":return n.selected.has(String(l));case"numeric":{let h=this.parseNumericValue(l);return!(h==null||n.min!=null&&h<n.min||n.max!=null&&h>n.max)}case"date":{let h=new Date(String(l));return!(isNaN(h.getTime())||n.from!=null&&h<new Date(n.from)||n.to!=null&&h>new Date(n.to))}case"text":return n.query?String(l).toLowerCase().includes(n.query.toLowerCase()):!0;default:return!0}}))),!this.filter.length)return t;let r=this.filter.toLowerCase();return t.filter(i=>Object.values(i).some(o=>{if(!o)return!1;let n=o.toString().toLowerCase();return!!(n.includes(r)||this.isValidDate(n)&&new Date(n).toLocaleDateString().toLowerCase().includes(r))}))}sortData(t=this.filterData()){let e={month:{trigger:()=>this.sort.toLowerCase()==="month",value:r=>new Date(`${r[this.sort]} ${r.Year||r.year||2025}`)},year:{trigger:()=>this.sort.toLowerCase()==="year",value:r=>new Date(`${r.Month||r.month||"January"} ${r[this.sort]}`)},percentage:{trigger:r=>r[this.sort]!=null&&r[this.sort]?.toString().includes("%"),value:r=>Number(r[this.sort].toString().split("%")[0])},money:{trigger:r=>{let i=r[this.sort];return i!=null&&typeof i=="string"&&i[i.length-1]==="k"&&!isNaN(Number(i.slice(0,-1)))},value:r=>Number(r[this.sort].toString().split("k")[0])},number:{trigger:r=>r[this.sort]!=null&&r[this.sort].toString()[0]==="$",value:r=>parseInt(r[this.sort].toString().split("$")[1])},other:{trigger:()=>!0,value:r=>r[this.sort]}};return this.sort?t.sort((r,i)=>{let o,n;if(Object.keys(e).some(h=>{if(e[h].trigger(r))return o=e[h].value(r),n=e[h].value(i),!0}),o==null&&n==null)return 0;if(o==null)return 1;if(n==null)return-1;let l=this.order==="descending";return o>n?l?-1:1:n>o?l?1:-1:0}):t}sortByField(t){if(this._didResize){this._didResize=!1;return}this.fieldKeys.includes(t)&&(this.sort===t?this.order=this.order==="ascending"?"descending":"ascending":(this.sort=t,this.order="ascending"),this.parseData())}selectAll(){this.selectable&&(this.selections=this.selections.map(()=>!0),this.emitSelectionChange())}deselectAll(){this.selectable&&(this.selections=this.selections.map(()=>!1),this.emitSelectionChange())}getSelectedRows(){if(!this.selectable)return[];let t=[];for(let e=0;e<this.selections.length;e++)this.selections[e]&&this.results[e]&&t.push(this.results[e]);return t}emitSelectionChange(){this.emit("hmwc-select",{detail:{rows:this.getSelectedRows()}})}resolveFieldKeys(){if(!this.hasFields()&&!this.data.length)return this._normalizedFields=[],[...Array(5).keys()].map((i,o)=>`#SKELETON-${o}`);let e=this.hasFields()?[]:Object.keys(this.data[0]??{}),r=so(this.fields,e);return this._normalizedFields=r,r.map(i=>i.key)}getEntries(t=this.results){this._fillerRows=new WeakSet;let e=()=>{let r=this.fieldKeys.reduce((i,o)=>({...i,[o]:"\u200E "}),{});return this._fillerRows.add(r),r};if(this.isLoading)return Array.from({length:this.amount===1/0?5:this.amount},()=>(this.fieldKeys.length?this.fieldKeys:["#SKELETON-0"]).reduce((i,o)=>({...i,[o]:"#SKELETON"}),{}));{let r=this.amount-t.length;if(r>0)return[...t,...Array.from({length:r},e)];{let i=(this.page-1)*this.amount,o=this.page*this.amount,n=t.slice(i,o),l=this.amount-n.length;return l>0?[...n,...Array.from({length:l},e)]:n}}}isValidDate(t){let e=new Date(t);return!isNaN(e.getTime())}setTableSizing(){if(this._tableIsSized)return;let t=++this._sizingId;this.updateComplete.then(()=>{if(t!==this._sizingId)return;let e=this.shadowRoot?.querySelector("table");if(!e||this.isSkeletonField(this.fieldKeys[0]))return;let r=e.querySelector("tbody");if(!r)return;let i=Array.from(e.querySelectorAll("th.data-table__col-head"));if(!i.length)return;let o=[...this.fieldKeys,...this.getActionFields()],n=this.selectable?1:0;i.forEach((z,N)=>{let Ot=o[N-n];Ot&&(this.sizing?.[Ot]||this._columnWidths[Ot])||z.style.removeProperty("width")}),e.style.tableLayout="auto";let l={};for(let z of this.fieldKeys){l[z]="";for(let N of this.results){let Ot=N[z]?.toString()??"";Ot.length>l[z].length&&(l[z]=Ot)}}let h=document.createElement("tr");if(h.className="data-table__table-row",h.setAttribute("aria-hidden","true"),h.style.cssText="visibility:hidden;height:0;overflow:hidden;",this.selectable){let z=document.createElement("td");z.className="data-table__item checkbox",z.style.cssText="height:0;line-height:0;border:none;",h.appendChild(z)}for(let z of this.fieldKeys){let N=document.createElement("td");N.className="data-table__item",N.style.cssText="white-space:nowrap;height:0;line-height:0;border:none;",N.textContent=l[z],h.appendChild(N)}let d=this.getActions().length;for(let z=0;z<d;z++){let N=document.createElement("td");N.className="data-table__item action",N.style.cssText="height:0;line-height:0;border:none;",h.appendChild(N)}r.appendChild(h),e.style.width="max-content";let g=i.map(z=>z.offsetWidth);h.querySelectorAll("td").forEach(z=>z.style.whiteSpace="normal"),e.style.width="min-content";let b=i.map(z=>z.offsetWidth);h.remove(),e.style.removeProperty("width");let j=g.reduce((z,N)=>z+N,0)||1,_t=b.reduce((z,N)=>z+N,0);i.forEach((z,N)=>{let Ot=o[N-n];Ot&&(this.sizing?.[Ot]||this._columnWidths[Ot])||(z.style.width=`${(g[N]/j*100).toFixed(4)}%`)}),e.style.tableLayout="fixed",e.style.minWidth=`${Math.ceil(_t)}px`,this._tableIsSized=!0})}_wasDrag(t){let e=this._rowPointerOrigin;return this._rowPointerOrigin=null,e?Math.abs(t.clientX-e.x)>4||Math.abs(t.clientY-e.y)>4:!1}getSelectionStatus(t){return this.selections[(this.page-1)*this.amount+t]}isSkeletonField(t){return typeof t=="string"&&t.includes("#SKELETON")}getActions(){let t=[];return Array.isArray(this.actions)&&t.push(...this.actions),this.action&&t.push(this.action),t}getActionFields(){return this.getActions().map(t=>t.field)}isActionField(t){return this.getActionFields().includes(t)}get isLoading(){return!!this.loading||!this.ready}getTotalColumnCount(){return this.fieldKeys.length+(this.selectable?1:0)+this.getActions().length}getStorageKey(){return`hmwc-data-table-col-widths:${this.label||this.fieldKeys.join(",")}`}loadColumnWidths(){if(this.cache)try{let t=localStorage.getItem(this.getStorageKey());t&&(this._columnWidths=JSON.parse(t))}catch{}}saveColumnWidths(){if(this.cache)try{localStorage.setItem(this.getStorageKey(),JSON.stringify(this._columnWidths))}catch{}}handleResizeStart(t,e){t.preventDefault(),t.stopPropagation();let r=t.target.parentElement;if(!r)return;let i=this.shadowRoot?.querySelector("table");i&&(this._resizing={field:e,startX:t.clientX,startWidth:r.offsetWidth,minWidth:40,maxWidth:1/0,th:r,table:i,activated:!1},this._boundResizeMove=this.handleResizeMove.bind(this),this._boundResizeEnd=this.handleResizeEnd.bind(this),document.addEventListener("mousemove",this._boundResizeMove),document.addEventListener("mouseup",this._boundResizeEnd))}activateResize(){if(!this._resizing||this._resizing.activated)return;this._resizing.activated=!0;let{table:t,th:e}=this._resizing,r=Array.from(t.querySelectorAll("th.data-table__col-head")),i=[...this.fieldKeys,...this.getActionFields()],o=this.selectable?1:0,n=0,l=0;for(let g=0;g<r.length;g++){let b=r[g],j=i[g-o];if(j&&this._columnWidths[j]&&b!==e){n+=b.offsetWidth;continue}let z=getComputedStyle(b),N=parseFloat(z.paddingLeft)+parseFloat(z.paddingRight),Ot=parseFloat(z.borderLeftWidth)+parseFloat(z.borderRightWidth),jt=40,fe=b.querySelector(".data-table__col-head-content");if(fe){let Nt=fe.querySelector(".data-table__col-filter"),Ro=Nt?Nt.offsetWidth:0,Po=Nt?parseFloat(getComputedStyle(fe).gap||"0"):0,Pe=fe.cloneNode(!0);Pe.style.cssText="position:absolute;visibility:hidden;width:min-content;pointer-events:none;";let Rr=Pe.querySelector(".data-table__col-filter");Rr&&Rr.remove(),fe.parentElement.appendChild(Pe);let Pr=b.querySelector(".data-table__col-resize"),Fo=Pr?Pr.offsetWidth*2:0;jt=Pe.offsetWidth+Ro+Po+N+Ot+Fo,Pe.remove()}b===e?this._resizing.minWidth=jt:l+=jt}let h=Array.from(t.querySelectorAll("th:not(.data-table__col-head)"));for(let g of h)n+=g.offsetWidth;let d=t.offsetWidth;this._resizing.maxWidth=Math.max(this._resizing.minWidth,d-n-l);for(let g=0;g<r.length;g++){let b=r[g];if(b===e)continue;let j=i[g-o];j&&this._columnWidths[j]||b.style.removeProperty("width")}t.style.width=`${d}px`,e.style.width=`${e.offsetWidth}px`,t.style.tableLayout="fixed",this._resizing.startWidth=e.offsetWidth,document.body.style.cursor="col-resize",document.body.style.userSelect="none"}handleResizeMove(t){if(!this._resizing)return;let e=t.clientX-this._resizing.startX;if(!this._resizing.activated){if(Math.abs(e)<5)return;this.activateResize()}let r=Math.min(this._resizing.maxWidth,Math.max(this._resizing.minWidth,this._resizing.startWidth+e));this._resizing.th.style.width=`${r}px`}handleResizeEnd(){if(this._resizing){if(this._resizing.activated){let{table:t}=this._resizing;this._didResize=!0,this._columnWidths[this._resizing.field]=this._resizing.th.offsetWidth,this.saveColumnWidths();let e=Array.from(t.querySelectorAll("th.data-table__col-head"));for(let r of e)r.style.width=`${r.offsetWidth}px`;t.style.width=""}this._boundResizeMove&&document.removeEventListener("mousemove",this._boundResizeMove),this._boundResizeEnd&&document.removeEventListener("mouseup",this._boundResizeEnd),document.body.style.cursor="",document.body.style.userSelect="",this._resizing=null,this._boundResizeMove=null,this._boundResizeEnd=null}}connectedCallback(){super.connectedCallback(),this.parseData(),this.loadColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this._boundResizeMove&&document.removeEventListener("mousemove",this._boundResizeMove),this._boundResizeEnd&&document.removeEventListener("mouseup",this._boundResizeEnd),this._footerResizeObserver?.disconnect(),this._footerResizeObserver=void 0,this._readyEmitted=!1}firstUpdated(){typeof ResizeObserver<"u"&&(this._footerResizeObserver=new ResizeObserver(()=>this._measureFooter()),this._footerResizeObserver.observe(this)),this._measureFooter()}updated(){this._measureFooter()}renderFilterToolbar(t){return this.isColumnFilterActive(t)?c`
      <div class="data-table__filter-toolbar">
        <span class="data-table__filter-toolbar-label">Clear filter</span>
        <hmwc-icon src="x-lg" class="data-table__filter-clear" @click=${()=>this.clearColumnFilter(t)}> </hmwc-icon>
      </div>
    `:""}renderNumericPresets(t){let e=this._filterableFields[t];if(!e?.numericStats)return"";let r=e.numericStats,i=this._columnFilters[t],o=(h,d)=>!i||i.type!=="numeric"?!1:i.min===h&&i.max===d,n=h=>this.formatPresetValue(h),l=[{label:`\u2264 ${n(r.median)}`,max:r.median},{label:`${n(r.q1)} \u2013 ${n(r.q3)}`,min:r.q1,max:r.q3},{label:`\u2265 ${n(r.median)}`,min:r.median}];return c`
      <div class="data-table__filter-presets">
        <span class="data-table__filter-presets-label">Quick filters</span>
        <div class="data-table__filter-presets-list">
          ${l.map(h=>c`
              <button
                class="data-table__filter-preset ${o(h.min,h.max)?"active":""}"
                @click=${()=>o(h.min,h.max)?this.clearColumnFilter(t):this.applyNumericPreset(t,h.min,h.max)}>
                ${h.label}
              </button>
            `)}
        </div>
      </div>
    `}renderColumnFilter(t){let e=this._filterableFields[t];if(!e)return"";let r=this._columnFilters[t];switch(e.type){case"categorical":return c`
          <hmwc-menu filter="" selectAll @hmwc-change=${i=>this.handleCategoricalFilterChange(t,i)}>
            ${e.values.map(i=>c`
                <hmwc-menu-item checkable ?checked=${this.isFilterValueSelected(t,i)} label=${i} value=${i}> </hmwc-menu-item>
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
                  @hmwc-change=${i=>this.handleNumericFilterChange(t,"min",i)}>
                </hmwc-input>
                <span class="data-table__range-separator">–</span>
                <hmwc-input
                  underline
                  sm
                  fluid
                  type="number"
                  placeholder="Max"
                  .value=${r?.type==="numeric"&&r.max!=null?String(r.max):""}
                  @hmwc-change=${i=>this.handleNumericFilterChange(t,"max",i)}>
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
                  @hmwc-change=${i=>this.handleDateFilterChange(t,"from",i)}>
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
                  @hmwc-change=${i=>this.handleDateFilterChange(t,"to",i)}>
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
                @hmwc-input=${i=>this.handleTextFilterChange(t,i)}>
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
                    icon=${this.getColumnFilterIcon(t)}
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
          ?checked=${Bt(this.getSelectionStatus(e))}
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
    </td>`}_renderRow(t,e){let r=this._fillerRows.has(t);return c`
      <tr
        part="row"
        class=${f({"data-table__table-row":!0,filler:r})}
        role="row"
        @mousedown=${this._rowPointerDown}
        @click=${i=>!r&&!this._wasDrag(i)&&this.emit("hmwc-click",{detail:{value:t}})}>
        ${this._renderSelectionRowCell(t,e)} ${this.fieldKeys.map(i=>this._renderDataCell(t,i))}
        ${this.getActions().map(i=>this._renderActionCell(t,i))}
      </tr>
    `}_renderBody(){return c`
      <tbody part="data" class="data-table__body">
        ${!this.isLoading&&this.results.length===0?this._renderEmptyRow():this.entries.map((t,e)=>this._renderRow(t,e))}
      </tbody>
    `}_renderFooter(){return this.pagination?c`
      <div class="data-table__footer">
        <div part="entries" class="data-table__info">
          ${this.total!==0||this.isSkeletonField(this.fieldKeys[0])?`Showing ${Mr((this.page-1)*this.amount+1)} to ${Mr(this.total<this.page*this.amount?this.total||this.amount:this.page*this.entries.length)} of ${Mr(this.results.length)} entries.`:"No entries found!"}
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
        <div part="scroll" class=${f({"data-table__scroll":!0,scrollable:this._scrollable})}>
          <table part="table" class="data-table__table" rules="none">
            ${this._renderHeader()} ${this._renderBody()}
          </table>
          ${this._footerInScroll?this._renderFooter():""}
        </div>
        ${this._footerInScroll?"":this._renderFooter()}
      </div>
    `}};$.styles=ao;$.dependencies=[O,_,x,y,$t,W,pt,S,E,Z];$.slots=["empty"];M([v()],$.prototype,"selections",void 0);M([v()],$.prototype,"_filterableFields",void 0);M([v()],$.prototype,"_columnFilters",void 0);M([v()],$.prototype,"fieldKeys",void 0);M([v()],$.prototype,"_normalizedFields",void 0);M([v()],$.prototype,"ready",void 0);M([v()],$.prototype,"results",void 0);M([v()],$.prototype,"entries",void 0);M([v()],$.prototype,"total",void 0);M([a({type:Array})],$.prototype,"data",void 0);M([a({type:Object})],$.prototype,"fields",void 0);M([a({type:Number,reflect:!0})],$.prototype,"page",void 0);M([a({type:Number,reflect:!0})],$.prototype,"amount",void 0);M([a({type:String})],$.prototype,"label",void 0);M([a({type:Object})],$.prototype,"sizing",void 0);M([a({type:String})],$.prototype,"filter",void 0);M([a({type:String})],$.prototype,"sort",void 0);M([a({type:String})],$.prototype,"order",void 0);M([a({type:Boolean})],$.prototype,"pagination",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"selectable",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"sm",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"md",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"lg",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"fluid",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"loading",void 0);M([a({type:Object})],$.prototype,"action",void 0);M([a({type:Array})],$.prototype,"actions",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"cache",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"primary",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"alt",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"success",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"neutral",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"warning",void 0);M([a({type:Boolean,reflect:!0})],$.prototype,"danger",void 0);M([p(["data","filter","order","fields"])],$.prototype,"dataUpdate",void 0);M([p(["amount","page","loading"],{waitUntilFirstUpdate:!0})],$.prototype,"entriesUpdate",void 0);M([v()],$.prototype,"_footerInScroll",void 0);M([v()],$.prototype,"_scrollable",void 0);$.define("hmwc-data-table",$);var lo=m`
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
`;var le=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},ut=class extends u{constructor(){super(...arguments),this.align="center"}connectedCallback(){super.connectedCallback(),this.page&&(this.animation="scale-in");let t=this.controllers.slot.get();this.rows||(this.rows=Math.ceil(t.length/(this.cols||1))),t.forEach((e,r)=>{e.style.setProperty("z-index",`${t.length-(r+1)}`)})}render(){let t=f({grid:!0,"gap-xs":this.gap==="xs","gap-sm":this.gap==="sm","gap-md":this.gap==="md","gap-lg":this.gap==="lg","gap-xl":this.gap==="xl","gap-row-xs":this.gap?.includes("/")&&this.gap?.split("/")[0]==="xs"||!1,"gap-row-sm":this.gap?.includes("/")&&this.gap?.split("/")[0]==="sm"||!1,"gap-row-md":this.gap?.includes("/")&&this.gap?.split("/")[0]==="md"||!1,"gap-row-lg":this.gap?.includes("/")&&this.gap?.split("/")[0]==="lg"||!1,"gap-row-xl":this.gap?.includes("/")&&this.gap?.split("/")[0]==="xl"||!1,"gap-col-xs":this.gap?.includes("/")&&this.gap?.split("/")[1]==="xs"||!1,"gap-col-sm":this.gap?.includes("/")&&this.gap?.split("/")[1]==="sm"||!1,"gap-col-md":this.gap?.includes("/")&&this.gap?.split("/")[1]==="md"||!1,"gap-col-lg":this.gap?.includes("/")&&this.gap?.split("/")[1]==="lg"||!1,"gap-col-xl":this.gap?.includes("/")&&this.gap?.split("/")[1]==="xl"||!1,"justify-start":this.justify==="start","justify-end":this.justify==="end","justify-center":this.justify==="center","justify-stretch":this.justify==="stretch","justify-around":this.justify==="around","justify-between":this.justify==="between","justify-even":this.justify==="even","align-start":this.align==="start","align-end":this.align==="end","align-center":this.align==="center",fluid:!!this.fit,page:!!this.page});return c`
      <div part="base" class=${t}>
        ${this.label?c`<slot name="label" part="label">${this.label}</slot>`:""}

        <div
          part="content"
          class="grid__content"
          style="--rows: ${this.rows-1||1}; --cols: ${this.cols||1}; ${this.template?this.template instanceof Object?`--template-col: ${this.template.col}; --template-row: ${this.template.row}`:`--template-col: ${this.template}`:""}">
          <slot></slot>
        </div>
      </div>
    `}};ut.styles=lo;ut.dependencies=[];ut.slots=["label"];le([a({type:Boolean})],ut.prototype,"form",void 0);le([a({type:Boolean,reflect:!0})],ut.prototype,"fit",void 0);le([a({type:Boolean,reflect:!0})],ut.prototype,"page",void 0);le([a({type:String})],ut.prototype,"gap",void 0);le([a({type:String})],ut.prototype,"label",void 0);le([a({type:String})],ut.prototype,"template",void 0);le([a({type:String})],ut.prototype,"justify",void 0);le([a({type:String})],ut.prototype,"align",void 0);le([a({type:Number,reflect:!0})],ut.prototype,"rows",void 0);le([a({type:Number,reflect:!0})],ut.prototype,"cols",void 0);ut.define("hmwc-grid",ut);var co=m`
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
`;var Br={info:{icon:"info-circle-fill",iconVariant:"primary",variant:"primary",fluid:!0,size:"sm",confirmLabel:"OK",hideCancel:!0,confirmation:!0},success:{icon:"check-circle-fill",iconVariant:"success",variant:"success",fluid:!0,size:"sm",confirmLabel:"OK",confirmVariant:"success",hideCancel:!0,confirmation:!0},warning:{icon:"exclamation-triangle-fill",iconVariant:"warning",variant:"warning",fluid:!0,size:"sm",confirmLabel:"OK",confirmVariant:"warning",hideCancel:!0,confirmation:!0},error:{icon:"x-circle-fill",iconVariant:"danger",variant:"danger",fluid:!0,size:"sm",confirmLabel:"OK",confirmVariant:"danger",hideCancel:!0,confirmation:!0},confirm:{icon:"question-circle-fill",iconVariant:"primary",variant:"primary",fluid:!0,size:"sm",confirmLabel:"Confirm",cancelLabel:"Cancel",confirmVariant:"primary",confirmation:!0},delete:{icon:"exclamation-triangle-fill",iconVariant:"danger",variant:"danger",fluid:!0,size:"sm",confirmLabel:"Delete",cancelLabel:"Cancel",confirmVariant:"danger",confirmation:!0},retry:{icon:"x-circle-fill",variant:"danger",fluid:!0,size:"sm",confirmLabel:"Retry",cancelLabel:"Cancel",confirmVariant:"danger",confirmation:!0}};var J=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},T=class extends u{constructor(){super(...arguments),this.variant="default",this.confirmLabel="Confirm",this.cancelLabel="Cancel",this.confirmVariant="primary",this.dismissible=!0,this.overlayDismiss=!0,this.escapeDismiss=!0,this.overlay=!0,this._keydownHandler=this._handleKeyDown.bind(this),this._autoDestroy=!1}connectedCallback(){super.connectedCallback(),this.route&&this._enableRouting(),!this.id&&this.title&&(this.id=this.title.toLowerCase().replace(/\s+/g,"-"))}firstUpdated(){if(this._popup.hidden=!this.active,this.active){let t=this._popup.querySelector(".popup__overlay");t&&t.style.setProperty("opacity","1"),this._panel.style.setProperty("opacity","1"),this._panel.style.setProperty("transform",this.drawer?"translateX(0)":"translateY(0) scale(1)"),this._addListeners(),this.controllers.scroll.lockBodyScrolling(this)}}disconnectedCallback(){super.disconnectedCallback(),this._removeListeners(),this.controllers.scroll.unlockBodyScrolling(this)}handleOpenChange(){let t=this._popup.querySelector(".popup__overlay");this.active?(this._popup.hidden=!1,this._panel.focus(),requestAnimationFrame(()=>{t&&t.style.setProperty("opacity","1"),this._panel.style.setProperty("opacity","1"),this._panel.style.setProperty("transform",this.drawer?"translateX(0)":"translateY(0) scale(1)")}),this._addListeners(),this.controllers.scroll.lockBodyScrolling(this),this.emit("hmwc-show")):(requestAnimationFrame(()=>{t&&t.style.setProperty("opacity","0"),this._panel.style.setProperty("opacity",this.drawer?"1":"0"),this._panel.style.setProperty("transform",this.drawer?"translateX(100%)":"translateY(8px) scale(0.96)")}),setTimeout(()=>{this.active||(this._popup.hidden=!0,this._autoDestroy&&this.remove())},350),this._removeListeners(),this.controllers.scroll.unlockBodyScrolling(this),this.emit("hmwc-hide"))}show(){this.active||(this._syncRoute(!0),this.active=!0)}hide(){this.active&&(this._syncRoute(!1),this.active=!1,this._resultResolver?.(!1),this._resultResolver=void 0)}async confirm(){this.emit("hmwc-submit",{cancelable:!0}).defaultPrevented||(this._resultResolver?.(!0),this._resultResolver=void 0,this.hide())}getResult(){return new Promise(t=>{this._resultResolver=t})}_addListeners(){document.addEventListener("keydown",this._keydownHandler)}_removeListeners(){document.removeEventListener("keydown",this._keydownHandler)}_handleKeyDown(t){t.key==="Escape"&&this.active&&(t.stopPropagation(),this.escapeDismiss&&this.hide())}_handleOverlayClick(){this.overlayDismiss&&this.hide()}_handleCancel(){this.emit("hmwc-cancel"),this.hide()}_syncRoute(t){if(!this.route)return;let e=window.location.pathname;window.location.href.includes("?")&&(e+=`?${window.location.href.split("?")[1].split("#")[0]}`),window.history.replaceState(null,"",t?`${e}#${this.route}`:e)}_enableRouting(){window.addEventListener("popstate",()=>{window.location.hash===`#${this.route}`?this.show():this.hide()})}_renderHeader(){return this.title||this.controllers.slot.test("header")||this.controllers.slot.test("title")?c`
      <slot name="header" part="header" class="popup__header">
        <div class="popup__header-content">
          ${this.icon||this.controllers.slot.test("icon")?c`
                <slot name="icon" part="icon" class="popup__icon ${this.iconVariant?`icon-${this.iconVariant}`:""}">
                  <hmwc-icon src=${w(this.icon)}></hmwc-icon>
                </slot>
              `:A}
          <slot name="title" part="title" class="popup__title"> ${this.title} </slot>
        </div>
        <div part="controls" class="popup__controls">
          <slot name="controls"></slot>
          ${this.dismissible?c`<hmwc-button sm basic icon="x-lg" @hmwc-click=${()=>this.hide()}></hmwc-button>`:A}
        </div>
      </slot>
    `:A}_renderFooter(){return this.controllers.slot.test("footer")||this.confirmation?c`
      <div part="footer" class="popup__footer">
        <slot name="footer" class="popup__footer-actions">
          ${this.confirmation?c`
                ${this.hideCancel?A:c`<hmwc-button sm neutral label=${this.cancelLabel} @hmwc-click=${()=>this._handleCancel()}></hmwc-button>`}
                <hmwc-button
                  sm
                  ?primary=${this.confirmVariant==="primary"}
                  ?success=${this.confirmVariant==="success"}
                  ?warning=${this.confirmVariant==="warning"}
                  ?danger=${this.confirmVariant==="danger"}
                  ?neutral=${this.confirmVariant==="neutral"}
                  label=${this.confirmLabel}
                  @hmwc-click=${()=>this.confirm()}></hmwc-button>
              `:A}
        </slot>
      </div>
    `:A}render(){let t=f({popup:!0,open:!!this.active,drawer:!!this.drawer,confirmation:!!this.confirmation,fluid:!!this.fluid,sm:!!this.sm,md:!!this.md||!this.sm&&!this.lg&&!this.xl&&!this.full,lg:!!this.lg,xl:!!this.xl,full:!!this.full,[`variant-${this.variant}`]:this.variant!=="default",header:!!this.title||this.controllers.slot.test("header")||this.controllers.slot.test("title"),footer:!!this.confirmation||this.controllers.slot.test("footer")});return c`
      <div part="base" class=${t}>
        ${this.overlay?c`<div part="overlay" class="popup__overlay" @click=${()=>this._handleOverlayClick()}></div>`:A}
        <div
          part="panel"
          class="popup__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.active?"false":"true"}
          aria-label=${w(this.title||void 0)}
          aria-labelledby=${w(this.title?"title":void 0)}
          tabindex="-1">
          ${this._renderHeader()}

          <slot part="content" class="popup__content" tabindex="-1"> ${this.message} </slot>

          ${this._renderFooter()}
        </div>
      </div>
    `}};T.styles=co;T.dependencies=[y,_];T.slots=["title","icon","controls","header","footer"];J([a({type:Boolean,reflect:!0})],T.prototype,"active",void 0);J([a({type:String})],T.prototype,"title",void 0);J([a({type:String})],T.prototype,"message",void 0);J([a({type:String})],T.prototype,"icon",void 0);J([a({type:String,attribute:"icon-variant"})],T.prototype,"iconVariant",void 0);J([a({type:Boolean,reflect:!0})],T.prototype,"sm",void 0);J([a({type:Boolean,reflect:!0})],T.prototype,"md",void 0);J([a({type:Boolean,reflect:!0})],T.prototype,"lg",void 0);J([a({type:Boolean,reflect:!0})],T.prototype,"xl",void 0);J([a({type:Boolean,reflect:!0})],T.prototype,"full",void 0);J([a({type:String,reflect:!0})],T.prototype,"variant",void 0);J([a({type:Boolean,reflect:!0})],T.prototype,"drawer",void 0);J([a({type:Boolean,reflect:!0})],T.prototype,"confirmation",void 0);J([a({type:Boolean,attribute:"hide-cancel"})],T.prototype,"hideCancel",void 0);J([a({type:String,attribute:"confirm-label"})],T.prototype,"confirmLabel",void 0);J([a({type:String,attribute:"cancel-label"})],T.prototype,"cancelLabel",void 0);J([a({type:String,attribute:"confirm-variant"})],T.prototype,"confirmVariant",void 0);J([a({type:Boolean,reflect:!0})],T.prototype,"fluid",void 0);J([a({type:Boolean,reflect:!0})],T.prototype,"dismissible",void 0);J([a({type:Boolean,attribute:"overlay-dismiss"})],T.prototype,"overlayDismiss",void 0);J([a({type:Boolean,attribute:"escape-dismiss"})],T.prototype,"escapeDismiss",void 0);J([a({type:Boolean,reflect:!0})],T.prototype,"overlay",void 0);J([a({type:String})],T.prototype,"route",void 0);J([R(".popup")],T.prototype,"_popup",void 0);J([R(".popup__panel")],T.prototype,"_panel",void 0);J([p("active",{waitUntilFirstUpdate:!0})],T.prototype,"handleOpenChange",null);function ya(s={}){let t=Object.fromEntries(Object.entries(s).filter(([,o])=>o!==void 0)),e=s.preset?{...Br[s.preset],...t}:s,r=document.createElement("hmwc-popup");if(s.content&&(typeof s.content=="string"?r.innerHTML=s.content:r.appendChild(s.content)),s.buttons?.length){let o=document.createElement("div");o.slot="footer";for(let n of s.buttons){let l=document.createElement("hmwc-button");l.sm=!0,l.label=n.label,n.variant&&(l[n.variant]=!0),n.icon&&(l.icon=n.icon),n.basic&&(l.basic=!0),n.action&&l.addEventListener("hmwc-click",()=>n.action(r)),o.appendChild(l)}r.appendChild(o)}s.className&&(r.className=s.className),s.style&&(typeof s.style=="string"?r.setAttribute("style",s.style):Object.assign(r.style,s.style)),s.onShow&&r.addEventListener("hmwc-show",()=>s.onShow(r)),s.onHide&&r.addEventListener("hmwc-hide",()=>s.onHide(r)),s.onCancel&&r.addEventListener("hmwc-cancel",()=>s.onCancel(r)),s.onSubmit&&r.addEventListener("hmwc-submit",async o=>{await s.onSubmit(r)===!1&&o.preventDefault()}),document.body.appendChild(r),e.title&&(r.title=e.title),e.message&&(r.message=e.message),e.icon&&(r.icon=e.icon),e.iconVariant&&(r.iconVariant=e.iconVariant),e.size?r[e.size]=!0:r.sm=!0,e.variant&&(r.variant=e.variant),e.drawer&&(r.drawer=!0),e.confirmation&&(r.confirmation=!0),e.hideCancel&&(r.hideCancel=!0),e.confirmLabel&&(r.confirmLabel=e.confirmLabel),e.cancelLabel&&(r.cancelLabel=e.cancelLabel),e.confirmVariant&&(r.confirmVariant=e.confirmVariant),e.fluid&&(r.fluid=!0),e.dismissible===!1&&(r.dismissible=!1),e.overlayDismiss===!1&&(r.overlayDismiss=!1),e.escapeDismiss===!1&&(r.escapeDismiss=!1),e.overlay===!1&&(r.overlay=!1),r._autoDestroy=s.autoDestroy!==!1;let i=r.getResult();return requestAnimationFrame(()=>r.show()),{popup:r,result:i,close:()=>r.hide()}}T.define("hmwc-popup",T);var ho=m`
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
`;var ce=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},yt=class extends u{constructor(){super(...arguments),this.userUpdate=()=>this.updateProxyUser(),this.logoUpdate=()=>this._logo=this.getLogoVariant()}return(){this.emit("hmwc-navigate",{detail:{route:"/"}})}handleSettingsClick(){window.location.hash="#settings"}handleMenuSelection(t){t.detail.value==="account"?(t.stopImmediatePropagation(),window.location.hash="#settings"):t.detail.value==="logout"&&this.emit("hmwc-navigate",{detail:{route:"/logout"}})}updateProxyUser(){this.proxyUser=this.user?.proxyHost?.firstName?this.user:{}}observeTheme(){new MutationObserver(t=>{t.forEach(e=>{e.type!=="attributes"&&e.attributeName!=="class"||(this._logo=this.getLogoVariant())})}).observe(document.documentElement,{attributes:!0})}getLogoVariant(){let t=document.documentElement.className.includes("theme-dark")?"dark":"light";return this.logo instanceof String?this.logo:!(this.logo instanceof Object)||!this.logo[t]?"":this.logo[t]}navigateFAQ(){this.emit("hmwc-navigate",{detail:{route:"/help-support/faq"}})}setDefaultHMWCLogo(){this.logo||(this.logo={light:"/src/assets/images/hmwc-dark.png",dark:"/src/assets/images/hmwc-light.png"})}connectedCallback(){super.connectedCallback(),this.setDefaultHMWCLogo(),this.observeTheme()}render(){let t=[{value:"account",label:"My Account"},{value:"logout",label:"Logout"}],e=this.user?(this.user.proxyHost?.firstName||this.user.firstName)+" "+(this.user.proxyHost?.lastName||this.user.lastName):"";return c`
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
    `}};yt.styles=ho;yt.dependencies=[O,F,Y,y,x,T,G];ce([v()],yt.prototype,"_logo",void 0);ce([v()],yt.prototype,"proxyUser",void 0);ce([a({type:String,reflect:!0})],yt.prototype,"title",void 0);ce([a()],yt.prototype,"logo",void 0);ce([a({type:Object})],yt.prototype,"user",void 0);ce([a({type:Boolean,reflect:!0})],yt.prototype,"beta",void 0);ce([R("#search")],yt.prototype,"popup",void 0);ce([R("hmwc-menu")],yt.prototype,"menu",void 0);ce([p("user")],yt.prototype,"userUpdate",void 0);ce([p("logo")],yt.prototype,"logoUpdate",void 0);yt.define("hmwc-header",yt);var po="important",_a=" !"+po,mo=Be(class extends ge{constructor(s){if(super(s),s.type!==ie.ATTRIBUTE||s.name!=="style"||s.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((t,e)=>{let r=s[e];return r==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(s,[t]){let{style:e}=s.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?e.removeProperty(r):e[r]=null);for(let r in t){let i=t[r];if(i!=null){this.ft.add(r);let o=typeof i=="string"&&i.endsWith(_a);r.includes("-")||o?e.setProperty(r,o?i.slice(0,-11):i,o?po:""):e[r]=i}}return At}});var uo=m`
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
`;var Ht=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},at=class extends u{constructor(){super(...arguments),this.errored=!1,this.loading="lazy",this.fit="cover",this.radius="none"}handleSrcChange(){this.errored=!1}handleLoad(){this.errored=!1,this.emit("hmwc-ready",{detail:{src:this.src??""}})}handleError(){this.errored=!0}dimension(t){if(!(t==null||t===""))return typeof t=="number"||/^\d+$/.test(t)?`${t}px`:t}dimensionAttribute(t){if(t==null||t==="")return;let e=typeof t=="number"?t:/^\d+$/.test(t)?Number(t):NaN;return Number.isNaN(e)?void 0:`${e}`}render(){let t=f({image:!0,xs:!!this.xs,sm:!!this.sm,md:!!this.md,lg:!!this.lg,xl:!!this.xl}),e=this.dimension(this.width),r=this.dimension(this.height),i=mo({...e?{"--image-width":e}:{},...r?{"--image-height":r}:{}}),o=this.errored&&this.controllers.slot.test("fallback");return c`
      <div part="base" class=${t} data-fit=${this.fit} data-radius=${this.radius} style=${i}>
        ${o?c`<slot name="fallback"></slot>`:c`
              <img
                part="image"
                src=${w(this.src)}
                alt=${this.alt??""}
                loading=${this.loading}
                width=${w(this.dimensionAttribute(this.width))}
                height=${w(this.dimensionAttribute(this.height))}
                @load=${this.handleLoad}
                @error=${this.handleError} />
            `}
      </div>
    `}};at.styles=uo;at.slots=["fallback"];Ht([v()],at.prototype,"errored",void 0);Ht([a({type:Boolean,reflect:!0})],at.prototype,"xs",void 0);Ht([a({type:Boolean,reflect:!0})],at.prototype,"sm",void 0);Ht([a({type:Boolean,reflect:!0})],at.prototype,"md",void 0);Ht([a({type:Boolean,reflect:!0})],at.prototype,"lg",void 0);Ht([a({type:Boolean,reflect:!0})],at.prototype,"xl",void 0);Ht([a({type:String})],at.prototype,"src",void 0);Ht([a({type:String})],at.prototype,"alt",void 0);Ht([a({type:String,reflect:!0})],at.prototype,"loading",void 0);Ht([a({type:String,reflect:!0})],at.prototype,"fit",void 0);Ht([a({type:String,reflect:!0})],at.prototype,"radius",void 0);Ht([a()],at.prototype,"width",void 0);Ht([a()],at.prototype,"height",void 0);Ht([p("src",{waitUntilFirstUpdate:!0})],at.prototype,"handleSrcChange",null);at.define("hmwc-image",at);var fo=m`
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
`;var go=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},ne=class extends u{constructor(){super(...arguments),this._items=[],this.items=[]}getItems(){return this.items.length?this.items:this.controllers.slot.get()}connectedCallback(){super.connectedCallback(),this.items.length||(this._items=this.getItems())}render(){return c`
      <div part="base" class="list">
        <ul part="list" class="list__list">
          <slot> ${this._items.map(t=>c` <li part="item" class="list__item">${t}</li> `)} </slot>
        </ul>
      </div>
    `}};ne.styles=fo;ne.dependencies=[];ne.slots=[];go([v()],ne.prototype,"_items",void 0);go([a({type:String})],ne.prototype,"items",void 0);ne.define("hmwc-list",ne);var vo=m`
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
`;var we=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},zt=class extends u{constructor(){super(...arguments),this.groups=[]}open(){this.active=!0}close(){this.active=!1}toggle(){this.active=!this.active}openGroup(){this.active=!0}autoClose(){document.querySelector("#root")?.addEventListener("click",t=>{if(!["HMWC-NAVBAR","HMWC-HEADER"].includes(t.target.tagName)){if(document.body.classList.contains("hmwc-scroll-lock"))return;this.active=!1}})}enableKeyboardInteraction(){document.addEventListener("keypress",t=>{document.activeElement?.tagName!=="HMWC-INPUT"&&(t.preventDefault(),t.key==="s"&&(this.active=!this.active))})}handleOpenChange(){this.active||this.group?.hideAll()}handleRouteChange(){this.active=!1}handleRoutesChange(){if(!this.routes)return;let t=[];this.routes.forEach(e=>{let r=this.routes?.filter(i=>!(!i.path.startsWith(e.path)||i.path===e.path||i.path.split("/").length-1!==e.path.split("/").length));e.path.split("/").length<3&&(e.path!=="/"&&(e.routes=r),t.push(e))}),this.groups=t}connectedCallback(){super.connectedCallback(),this.autoClose(),this.enableKeyboardInteraction()}render(){let t=f({navbar:!0,open:!!this.active});return c`
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
                  @click=${i=>!e.routes?.length&&(i.target.hide(),this.emit("hmwc-navigate",{detail:{route:e.path}}))}
                  @hmwc-expand=${()=>e.routes?.length&&(this.active=!0)}>
                  <span slot="trigger" style="display: flex;">
                    ${e.routes?.length?c`<hmwc-button
                          sm
                          basic
                          icon="chevron-right"
                          style="--button-padding: 0 var(--hmwc-spacing-2x-small); --button-border:transparent;"></hmwc-button>`:""}
                  </span>
                  ${e.routes?.length?c` <ul class="navbar__pages">
                        ${e.routes.map(i=>c`
                            <li
                              class=${`navbar__page ${i.path===this.route?.path?"active":""}`}
                              @click=${()=>(this.group?.hideAll(),this.emit("hmwc-navigate",{detail:{route:i.path}}))}>
                              ${i.title}
                            </li>
                          `)}
                      </ul>`:""}
                </hmwc-accordion>`)}
        </hmwc-accordion-group>
        <div class="navbar__toggle">
          <hmwc-button circle sm icon=${`chevron-${this.active?"left":"right"}`} @hmwc-click=${this.toggle}></hmwc-button>
        </div>
      </div>
    `}};zt.styles=vo;zt.dependencies=[vt,Q,K];we([v()],zt.prototype,"groups",void 0);we([v()],zt.prototype,"route",void 0);we([a({type:Array})],zt.prototype,"routes",void 0);we([a({type:Boolean,reflect:!0})],zt.prototype,"active",void 0);we([R(".navbar__group")],zt.prototype,"group",void 0);we([p("open")],zt.prototype,"handleOpenChange",null);we([p("route",{waitUntilFirstUpdate:!0})],zt.prototype,"handleRouteChange",null);we([p("routes")],zt.prototype,"handleRoutesChange",null);zt.define("hmwc-navbar",zt);var bo=m`
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
`;var te=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},et=class extends u{handleClick(){this.emit("hmwc-click",{})}handleRemove(){this.emit("hmwc-remove",{detail:{value:this.label}})}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0),!this.primary&&!this.success&&!this.neutral&&!this.warning&&!this.danger&&(this.primary=!0)}render(){let t=f({tag:!0,icon:!!this.icon,sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger,pill:!!this.pill,removable:!!this.removable});return c`
      <div part="base" class=${t} role="status" @click=${this.handleClick}>
        <slot class="tag__label" part="label"> ${this.icon&&c` <hmwc-icon src=${this.icon}></hmwc-icon> `} ${this.label} </slot>
        <div part="remove" class="tag__remove">
          ${this.removable&&c`
            <hmwc-button
              sm
              basic
              icon="x"
              label=${this.label?`Remove ${this.label}`:"Remove"}
              @hmwc-click=${this.handleRemove}></hmwc-button>
          `}
        </div>
      </div>
    `}};et.styles=bo;et.dependencies=[_,y];et.slots=["[default]"];te([a({type:Boolean,reflect:!0})],et.prototype,"removable",void 0);te([a({type:Boolean,reflect:!0})],et.prototype,"primary",void 0);te([a({type:Boolean,reflect:!0})],et.prototype,"success",void 0);te([a({type:Boolean,reflect:!0})],et.prototype,"neutral",void 0);te([a({type:Boolean,reflect:!0})],et.prototype,"warning",void 0);te([a({type:Boolean,reflect:!0})],et.prototype,"danger",void 0);te([a({type:Boolean,reflect:!0})],et.prototype,"sm",void 0);te([a({type:Boolean,reflect:!0})],et.prototype,"md",void 0);te([a({type:Boolean,reflect:!0})],et.prototype,"lg",void 0);te([a({type:Boolean,reflect:!0})],et.prototype,"pill",void 0);te([a({type:String})],et.prototype,"label",void 0);te([a({type:String})],et.prototype,"icon",void 0);et.define("hmwc-tag",et);var wo=m`
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
`;var Ee=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},Et=class extends u{constructor(){super(...arguments),this.overrides=[],this.breadcrumbs=!0,this._breadcrumbUpgradeQueued=!1,this.handleBreadcrumbNavigate=t=>{t.stopPropagation(),this.emit("hmwc-navigate",{detail:{route:t.detail.route}})}}updateOverrides(){let t=Array.from(this.children);this.overrides=t.filter(e=>e instanceof U).map(e=>({label:e.label,path:e.path,icon:e.icon??void 0,prefix:e.prefix??void 0,suffix:e.suffix??void 0,home:e.home,options:e.options??e.items,actions:e.actions}))}connectedCallback(){super.connectedCallback(),this.updateOverrides()}handleSlotChange(){this.updateOverrides(),Array.from(this.children).some(e=>e.tagName==="HMWC-BREADCRUMB"&&!(e instanceof U))&&!this._breadcrumbUpgradeQueued&&(this._breadcrumbUpgradeQueued=!0,customElements.whenDefined("hmwc-breadcrumb").then(()=>{this._breadcrumbUpgradeQueued=!1,this.updateOverrides()}))}render(){let t=f({page:!0,title:!!this.title||this.controllers.slot.test("title")});return c`
      <div part="base" class=${t}>
        ${this.route?c`<hmwc-breadcrumbs
              part="breadcrumbs"
              class="page__breadcrumbs"
              .route=${this.route}
              .routes=${this.routes}
              .crumbs=${this.overrides.length>0?this.overrides:void 0}
              @hmwc-navigate=${this.handleBreadcrumbNavigate}>
            </hmwc-breadcrumbs>`:""}

        <div part="title" class="page__title">
          <slot name="title">${this.title}</slot>

          <slot name="group">
            <div>${this.group&&c`<hmwc-tag part="group" sm label=${this.group} icon=${w(this.icon)}></hmwc-tag>`}</div>
          </slot>
          <div part="controls" class="page__controls">
            <slot name="controls"></slot>
          </div>
        </div>

        <div part="content" class="page__content">
          <slot @slotchange=${()=>this.handleSlotChange()}></slot>
        </div>
      </div>
    `}};Et.styles=wo;Et.dependencies=[mt,U,et,_];Et.slots=["title","group","controls"];Ee([v()],Et.prototype,"overrides",void 0);Ee([a({type:Boolean,reflect:!0})],Et.prototype,"breadcrumbs",void 0);Ee([a({type:String})],Et.prototype,"title",void 0);Ee([a({type:String})],Et.prototype,"group",void 0);Ee([a({type:String})],Et.prototype,"icon",void 0);Ee([a({type:Object})],Et.prototype,"route",void 0);Ee([a({type:Array})],Et.prototype,"routes",void 0);Et.define("hmwc-page",Et);var yo=m`
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
`;var ht=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},V=class extends u{constructor(){super(...arguments),this.value=0,this.hasAnimatedIn=!1}get clampedValue(){return Math.max(0,Math.min(100,this.value))}get displayValue(){return this.hasAnimatedIn?this.clampedValue:0}handleValueChange(){this.emit("hmwc-change",{detail:{value:this.clampedValue,complete:this.clampedValue>=100}})}connectedCallback(){super.connectedCallback(),!this.bar&&!this.ring&&(this.bar=!0),(this.small||this.medium||this.large)&&console.warn("[hmwc-progress] The `small`, `medium`, and `large` size attributes are deprecated. Use `sm`, `md`, and `lg` instead."),!this.sm&&!this.md&&!this.lg&&!this.xl&&!this.small&&!this.medium&&!this.large&&(this.sm=!0)}firstUpdated(){requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.hasAnimatedIn=!0})})}render(){let t=this.clampedValue,e=this.indeterminate?50:this.displayValue,r=f({progress:!0,bar:!!this.bar,ring:!!this.ring,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger,small:!!this.sm||!!this.small,medium:!!this.md||!!this.medium,large:!!this.lg||!!this.large,xl:!!this.xl,indeterminate:!!this.indeterminate,status:!!this.status});return c`
      <div
        part="base"
        class=${r}
        role="progressbar"
        title=${w(this.title)}
        aria-label=${this.label?this.label:"progress"}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${w(this.indeterminate?void 0:t)}
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
    `}};V.styles=yo;ht([a({type:Boolean,reflect:!0})],V.prototype,"bar",void 0);ht([a({type:Boolean,reflect:!0})],V.prototype,"ring",void 0);ht([a({type:Boolean,reflect:!0})],V.prototype,"primary",void 0);ht([a({type:Boolean,reflect:!0})],V.prototype,"success",void 0);ht([a({type:Boolean,reflect:!0})],V.prototype,"neutral",void 0);ht([a({type:Boolean,reflect:!0})],V.prototype,"warning",void 0);ht([a({type:Boolean,reflect:!0})],V.prototype,"danger",void 0);ht([a({type:Boolean,reflect:!0})],V.prototype,"sm",void 0);ht([a({type:Boolean,reflect:!0})],V.prototype,"md",void 0);ht([a({type:Boolean,reflect:!0})],V.prototype,"lg",void 0);ht([a({type:Boolean,reflect:!0})],V.prototype,"xl",void 0);ht([a({type:Boolean,reflect:!0})],V.prototype,"small",void 0);ht([a({type:Boolean,reflect:!0})],V.prototype,"medium",void 0);ht([a({type:Boolean,reflect:!0})],V.prototype,"large",void 0);ht([a({type:Boolean})],V.prototype,"status",void 0);ht([a({type:Boolean,reflect:!0})],V.prototype,"indeterminate",void 0);ht([a({type:String})],V.prototype,"label",void 0);ht([a({type:Number,reflect:!0})],V.prototype,"value",void 0);ht([v()],V.prototype,"hasAnimatedIn",void 0);ht([p("value",{waitUntilFirstUpdate:!0})],V.prototype,"handleValueChange",null);V.define("hmwc-progress",V);var _o=m`
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
`;var Dr=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},Xt=class extends P{handleCheckedChange(){this.emit("hmwc-select",{detail:{value:this.checked}})}handleClick(){this.disabled||(this.checked=!0)}handleBlur(){this.emit("hmwc-blur")}handleFocus(){this.emit("hmwc-focus")}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0)}render(){let t=f({radio:!0,checked:!!this.checked,sm:!!this.sm,md:!!this.md,lg:!!this.lg,disabled:!!this.disabled,img:!!this.img});return c`
      <span
        part="base"
        class=${t}
        role="radio"
        tabindex=${this.checked?"0":"-1"}
        aria-checked="${this.checked?"true":"false"}"
        aria-disabled="${w(this.disabled)}"
        aria-label="${w(this.label||this.value||void 0)}"
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
    `}};Xt.styles=_o;Xt.dependencies=[_];Dr([a({type:Boolean,reflect:!0})],Xt.prototype,"checked",void 0);Dr([a({type:String,reflect:!0})],Xt.prototype,"img",void 0);Dr([p("checked")],Xt.prototype,"handleCheckedChange",null);Xt.define("hmwc-radio",Xt);var xo=m`
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
`;var Ke=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},Wt=class extends P{handleValueChange(){this.emit("hmwc-change",{detail:{value:this.value}}),this.getRadios()?.forEach(t=>{t.checked=t.value===this.value})}getRadios(){return this.items?this.shadowRoot?.querySelectorAll("hmwc-radio"):this.controllers.slot.get()}handleClick(t){let e=t.target.closest("hmwc-radio");e.disabled||e.value&&(this.value=e.value,this.invalid&&this.reportValidity(),this.emit("hmwc-input"))}_resolveError(){return this._validity.valueMissing&&!this._validity.customError?"Please select an option.":super._resolveError()}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0);let t=this.getRadios();t?.length&&(this.inline&&t.forEach(e=>e.style.setProperty("width","100%")),this.sm?t.forEach(e=>e.sm=!0):this.md?t.forEach(e=>e.md=!0):this.lg&&t.forEach(e=>e.lg=!0))}render(){let t=this.label||this.controllers.slot.test("label"),e=this.help||this.controllers.slot.test("help"),r=f({radiogroup:!0,small:!!this.sm,medium:!!this.md,large:!!this.lg,required:!!this.required,row:!!this.inline});return c`
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
          aria-invalid=${this._ariaInvalid()}
          aria-errormessage=${w(this._ariaErrorMessage())}>
          <slot @click=${this.handleClick}>
            ${this.items?.map(i=>c`
                <hmwc-radio
                  value=${typeof i=="string"?i:i.value}
                  label=${typeof i=="string"?i:i.label}
                  ?disabled=${typeof i!="string"&&i.disabled}
                  ?checked=${(typeof i=="string"?i:i.value)===Bt(this.value)}
                  ?small=${this.sm}
                  ?medium=${this.md}
                  ?large=${this.lg}></hmwc-radio>
              `)}
          </slot>
          ${this.help?c` <div part="help" class="radiogroup__help" aria-hidden="${!e}">
                <slot name="help">${this.help}</slot>
              </div>`:""}
        </fieldset>
        ${this._renderError()}
      </div>
    `}};Wt.styles=xo;Wt.dependencies=[Xt];Wt.slots=["label","help"];Ke([a({type:String})],Wt.prototype,"label",void 0);Ke([a({type:Array})],Wt.prototype,"items",void 0);Ke([a({type:String})],Wt.prototype,"help",void 0);Ke([a({type:Boolean,reflect:!0})],Wt.prototype,"inline",void 0);Ke([p("value")],Wt.prototype,"handleValueChange",null);Wt.define("hmwc-radio-group",Wt);var ko=m`
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
`;var Ye=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},ee=class extends I{connectedCallback(){if(super.connectedCallback(),this.wrap){let t=this.controllers.slot.get(),e=t.length,r=e,i=100/e;t.forEach(o=>{let n=`calc(${i}% - calc(var(--container-spacing) / ${r}))`;o.style.setProperty("max-width",n)})}}render(){let t=f({row:!0,wrap:!!this.wrap,min:!!this.min,max:!!this.max,outline:!!this.outline,fit:!!this.fit,label:!!this.label||this.controllers.slot.test("label"),scrollable:!!this.scrollable});return c`
      <div part="base" class=${t}>
        <slot name="label" part="label" class="row__label">${this.label}</slot>
        <slot part="content" class="row__content"></slot>
      </div>
    `}};ee.styles=ko;Ye([a({type:Boolean,reflect:!0})],ee.prototype,"wrap",void 0);Ye([a({type:Boolean,reflect:!0})],ee.prototype,"fit",void 0);Ye([a({type:Boolean,reflect:!0})],ee.prototype,"min",void 0);Ye([a({type:Boolean,reflect:!0})],ee.prototype,"max",void 0);Ye([a({type:Boolean,reflect:!0})],ee.prototype,"outline",void 0);ee.define("hmwc-row",ee);var $o=m`
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
`;var Oe=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},Pt=class extends u{constructor(){super(...arguments),this.step=1,this.value=[],this.placement="bottom"}updateSteps(){this.current=this.value.map((t,e)=>{let r="pending",i="Pending",o=t.progress||0,n=t.icon;return e===this.step-1&&(r="active",i="In Progress"),e<this.step-1&&(r="complete",i="Completed",o||(o=50),n="check2-circle"),{...t,progress:o,state:r,status:i,icon:n}}),this.emit("hmwc-change",{detail:{value:this.current}})}render(){let t=f({stepper:!0,fluid:!!this.fluid,status:!!this.status,"placement-top":this.placement==="top","placement-bottom":this.placement==="bottom","placement-left":this.placement==="left","placement-right":this.placement==="right"});return c`
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
    `}};Pt.styles=$o;Pt.dependencies=[_];Oe([v()],Pt.prototype,"current",void 0);Oe([a({type:Number,reflect:!0})],Pt.prototype,"step",void 0);Oe([a({type:Array})],Pt.prototype,"value",void 0);Oe([a({type:Boolean,reflect:!0})],Pt.prototype,"fluid",void 0);Oe([a({type:Boolean,reflect:!0})],Pt.prototype,"status",void 0);Oe([a({type:String})],Pt.prototype,"placement",void 0);Oe([p(["steps","step"])],Pt.prototype,"updateSteps",null);Pt.define("hmwc-stepper",Pt);var Co=m`
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
`;var xa=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},he=class extends P{click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input?.checkValidity()}reportValidity(){return this.input?.reportValidity()}handleClick(){this.checked=!this.checked,this.emit("hmwc-change")}handleInput(){this.emit("hmwc-input")}handleFocus(){this.emit("hmwc-focus")}handleBlur(){this.emit("hmwc-blur")}handleKeyDown(t){["ArrowLeft","ArrowRight"].includes(t.key)&&(t.preventDefault(),this.checked=t.key==="ArrowRight",this.emit("hmwc-change",{detail:{value:this.checked}}),this.emit("hmwc-input"))}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0)}render(){let t=f({switch:!0,checked:!!this.checked,sm:!!this.sm,md:!!this.md,lg:!!this.lg,disabled:!!this.disabled,required:!!this.required,label:!!this.label||this.controllers.slot.test("label")});return c`
      <label part="base" class=${t}>
        <input
          class="switch__input"
          type="checkbox"
          title=${this.label||""}
          name=${w(this.name)}
          value=${w(this.value)}
          ?checked=${Bt(this.checked)}
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
    `}};he.styles=Co;he.slots=["label"];he.toggle=!0;xa([R(".switch__input")],he.prototype,"input",void 0);he.define("hmwc-switch",he);var So=m`
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
`;var Tr=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},Ft=class extends u{handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tabpanel")}render(){let t=f({"tab-content":!0,active:this.active});return c` <slot part="base" class=${t}></slot> `}};Ft.styles=So;Ft.dependencies=[];Tr([v()],Ft.prototype,"active",void 0);Tr([a({type:String,reflect:!0})],Ft.prototype,"name",void 0);Tr([p("active")],Ft.prototype,"handleActiveChange",null);Ft.define("hmwc-tab-content",Ft);var Ao=m`
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
`;var ue=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},ft=class extends u{constructor(){super(...arguments),this.name=Math.random().toString(36).substr(2,9)}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.tab.focus(t)}blur(){this.tab.blur()}handleClose(t){t.stopPropagation(),this.emit("hmwc-close")}updateContent(){let t=this.closest("hmwc-tab-group"),e=this.children;if(!e||!t||Array.from(t.children).find(i=>i instanceof Ft&&i.name===this.name))return;let r=Object.assign(document.createElement("hmwc-tab-content"),{name:this.name,active:this.active});e instanceof Element?r.appendChild(e):Array.from(e).forEach(i=>{r.appendChild(i)}),t?.appendChild(r)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab"),this.setAttribute("slot","tab"),this.updateContent()}render(){let t=f({tab:!0,active:!!this.active,closable:!!this.closeable,disabled:!!this.disabled});return c`
      <div part="base" class=${t} tabindex=${this.disabled?"-1":"0"}>
        <slot name="icon" class="tab__icon">${this.icon?c`<hmwc-icon src=${this.icon}></hmwc-icon>`:""}</slot>
        <slot>${this.label}</slot>
        ${this.closeable?c`<span class="tab__close"><hmwc-button part="close" basic medium icon="x" @hmwc-click=${this.handleClose}> </hmwc-button></span>`:""}
      </div>
    `}};ft.styles=Ao;ft.dependencies=[y];ue([a({type:String})],ft.prototype,"name",void 0);ue([a({type:String})],ft.prototype,"label",void 0);ue([a({type:Boolean,reflect:!0})],ft.prototype,"active",void 0);ue([a({type:Boolean,reflect:!0})],ft.prototype,"closeable",void 0);ue([a({type:Boolean,reflect:!0})],ft.prototype,"disabled",void 0);ue([a({type:String})],ft.prototype,"icon",void 0);ue([R(".tab")],ft.prototype,"tab",void 0);ue([p("active")],ft.prototype,"handleActiveChange",null);ue([p("disabled")],ft.prototype,"handleDisabledChange",null);ft.define("hmwc-tab",ft);var zo=m`
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
`;var re=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},dt=class extends u{constructor(){super(...arguments),this.scrollable=!1,this.tabs=[],this.content=[],this.placement="top",this.active=""}handlePlacementChange(){this.indicator&&(this.getCurrentTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none")}handleTabsChange(){this.getTabs().find(e=>e.active)||this.setCurrentTab(this.getCurrentTab())}show(t){setTimeout(()=>{let e=this.tabs.find(r=>r.name===t);e&&this.setCurrentTab(e)},1)}getTabs(){let t=this.querySelectorAll("hmwc-tab");return Array.from(t)}getContent(){let t=this.querySelectorAll("hmwc-tab-content");return Array.from(t)}getCurrentTab(){return this.getTabs().find(t=>t.active)||this.tabs[0]}setAria(){this.tabs.forEach(t=>{let e=this.content.find(r=>r.name===t.name);e&&(t.setAttribute("aria-controls",e.id),e.setAttribute("aria-labelledby",t.id))})}setCurrentTab(t){if(t===this.current||t.disabled)return;let e=this.current;this.current=t,this.active=t.name||"";let r=i=>i.active=i.name===t.name;this.tabs.forEach(r),this.content.forEach(r),this.handlePlacementChange(),!(!this.current||!this.tabsEl)&&(["top","bottom"].includes(this.placement)&&this.autoScroll&&this.controllers.scroll.scrollIntoView(this.current,this.tabsEl,"horizontal"),e?this.emit("hmwc-hide",{bubbles:!1}):this.emit("hmwc-show"))}repositionIndicator(){if(!this.current)return;let t=this.indicator.style,e=this.current.clientWidth,r=this.current.clientHeight,i=this.tabs.indexOf(this.current),n=this.tabs.slice(0,i).reduce((l,h)=>({left:l.left+h.clientWidth,top:l.top+h.clientHeight}),{left:0,top:0});["top","bottom"].includes(this.placement)?(t.width=`${e}px`,t.height="auto",t.transform=`translateX(${n.left}px)`):["start","end"].includes(this.placement)&&(t.width="auto",t.height=`${r}px`,t.transform=`translateY(${n.top}px)`)}handleClick(t){let r=t.target.closest("hmwc-tab");r?.closest("hmwc-tab-group")!==this||!r||this.setCurrentTab(r)}handleKeyDown(t){let r=t.target.closest("hmwc-tab"),i=r?.closest("hmwc-tab-group"),o=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"];if(!(i!==this||!r)&&o.includes(t.key)){let n=["top","bottom"].includes(this.placement),l=["start","end"].includes(this.placement),h=this.tabs.find(g=>g.matches(":focus"));if(!h)return;let d=this.tabs.indexOf(h);if(t.key==="Home"?d=0:t.key==="End"?d=this.tabs.length-1:t.key==="ArrowLeft"&&n||t.key==="ArrowUp"&&l?d--:(t.key==="ArrowRight"&&n||t.key==="ArrowDown"&&l)&&d++,d<0?d=this.tabs.length-1:d>this.tabs.length-1&&(d=0),this.tabs[d].focus({preventScroll:!0}),this.setCurrentTab(this.tabs[d]),!this.current||!this.tabsEl)return;n&&this.controllers.scroll.scrollIntoView(this.current,this.tabsEl,"horizontal")}}handleScroll(t){let e=0;t==="left"?e=this.nav.scrollLeft-this.nav.clientWidth:t==="right"&&(e=this.nav.scrollLeft+this.nav.clientWidth),this.nav.scroll({left:e,behavior:"smooth"})}handleSlotChange(){this.handlePlacementChange(),this.tabs=this.getTabs(),this.content=this.getContent()}reset(){this.setCurrentTab(this.tabs[0])}connectedCallback(){if(super.connectedCallback(),this.setAttribute("role","tablist"),this.tabs=this.getTabs(),this.content=this.getContent(),!this.tabs&&!this.content||(this.setCurrentTab(this.getCurrentTab()),this.setAria(),!this.nav))return;let t=["top","bottom"].includes(this.placement),e=this.nav.scrollWidth>this.nav.clientWidth;this.scrollable=t&&e}render(){let t=f({"tab-group":!0,scrollable:this.scrollable,fluid:!!this.fluid});return c`
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
    `}};dt.styles=zo;dt.dependencies=[ft,Ft,y];re([v()],dt.prototype,"scrollable",void 0);re([v()],dt.prototype,"tabs",void 0);re([v()],dt.prototype,"content",void 0);re([a({type:String,reflect:!0})],dt.prototype,"placement",void 0);re([a({type:Boolean})],dt.prototype,"autoScroll",void 0);re([a({type:String,reflect:!0})],dt.prototype,"active",void 0);re([a({type:Boolean,reflect:!0})],dt.prototype,"fluid",void 0);re([R(".tab-group__tabs")],dt.prototype,"tabsEl",void 0);re([R(".tab-group__nav")],dt.prototype,"nav",void 0);re([R(".tab-group__indicator")],dt.prototype,"indicator",void 0);re([p("placement",{waitUntilFirstUpdate:!0})],dt.prototype,"handlePlacementChange",null);re([p("tabs",{waitUntilFirstUpdate:!0})],dt.prototype,"handleTabsChange",null);dt.define("hmwc-tab-group",dt);var Eo=m`
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
`;var se=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},st=class extends u{constructor(){super(...arguments),this.alignment="start"}valueUpdated(){this.hasUpdated&&this.emit("hmwc-change",{detail:{value:this.label}})}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","cell")}firstUpdated(){if(!this.label){let r=(this.shadowRoot?.querySelector("slot.table-cell__body")?.assignedNodes({flatten:!0})??[]).map(i=>i.nodeType===Node.TEXT_NODE?i.nodeValue:i.textContent).join("").trim();r&&(this.label=r)}}render(){let t=f({"table-cell":!0,"align-start":this.alignment==="start","align-center":this.alignment==="center","align-end":this.alignment==="end",icon:!!this.icon,progress:!!this.progress,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
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
    `}};st.styles=Eo;st.dependencies=[_,G,V,$t];se([a({type:String,reflect:!0})],st.prototype,"label",void 0);se([a({type:String,reflect:!0})],st.prototype,"icon",void 0);se([a({type:Number,reflect:!0})],st.prototype,"progress",void 0);se([a({type:String,reflect:!0})],st.prototype,"alignment",void 0);se([a({type:Number,reflect:!0})],st.prototype,"index",void 0);se([a({type:Boolean,reflect:!0})],st.prototype,"primary",void 0);se([a({type:Boolean,reflect:!0})],st.prototype,"success",void 0);se([a({type:Boolean,reflect:!0})],st.prototype,"neutral",void 0);se([a({type:Boolean,reflect:!0})],st.prototype,"warning",void 0);se([a({type:Boolean,reflect:!0})],st.prototype,"danger",void 0);se([p(["label","progress"])],st.prototype,"valueUpdated",null);st.define("hmwc-table-cell",st);var Oo=m`
  :host {
    /*
     * <hmwc-table-field> is a configuration-only primitive — it
     * declares how a data-driven host (e.g. <hmwc-data-table>)
     * should render a column. It has no visible representation
     * of its own.
     */
    display: none;
  }
`;var ye=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},Ct=class extends u{handleConfigChange(){this.hasUpdated&&this.emit("hmwc-change",{detail:{field:this.prop,config:this.toConfig()}})}toConfig(){let t={prop:this.prop};return this.label!==void 0&&(t.label=this.label),this.width!==void 0&&(t.width=this.width),this.alignment!==void 0&&(t.alignment=this.alignment),this.sortable!==void 0&&(t.sortable=this.sortable),this.filterable!==void 0&&(t.filterable=this.filterable),this.template!==void 0&&(t.template=this.template),t}render(){return A}};Ct.styles=Oo;Ct.dependencies=[];Ct.slots=[];ye([a({type:String,reflect:!0})],Ct.prototype,"prop",void 0);ye([a({type:String,reflect:!0})],Ct.prototype,"label",void 0);ye([a({type:String,reflect:!0})],Ct.prototype,"width",void 0);ye([a({type:String,reflect:!0})],Ct.prototype,"alignment",void 0);ye([a({type:Boolean,reflect:!0})],Ct.prototype,"sortable",void 0);ye([a({type:Boolean,reflect:!0})],Ct.prototype,"filterable",void 0);ye([a({type:String,reflect:!0})],Ct.prototype,"template",void 0);ye([p(["prop","label","width","alignment","sortable","filterable","template"])],Ct.prototype,"handleConfigChange",null);Ct.define("hmwc-table-field",Ct);var Mo=m`
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
`;var Re=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},St=class extends u{constructor(){super(...arguments),this.hover=!0,this.cells=[]}cellsUpdate(){let t=this.cells.filter(e=>e.index);t.length?this.cells.filter(r=>r.index===void 0).forEach((r,i)=>{t.find(o=>o.index===i)||(r.index=i),i++}):this.cells.map((e,r)=>e.index=r),this.cells=this.cells.sort((e,r)=>e.index-r.index)}firstUpdated(){this.cells=this.controllers.slot.get().filter(t=>t instanceof st)}render(){let t=f({"table-row":!0,alt:this.index%2!==0});return c`<div part="base" class=${t}>
        ${this.selectable?c`<hmwc-checkbox></hmwc-checkbox>`:""}${this.cells}${this.removable?c`<hmwc-button basic danger icon="x"></hmwc-button>`:""}
      </div>
      <slot></slot>`}};St.styles=Mo;St.dependencies=[];St.slots=[];Re([a({type:Number,reflect:!0})],St.prototype,"index",void 0);Re([a({type:Boolean,reflect:!0})],St.prototype,"hover",void 0);Re([a({type:Boolean,reflect:!0})],St.prototype,"selectable",void 0);Re([a({type:Boolean,reflect:!0})],St.prototype,"removable",void 0);Re([v()],St.prototype,"cells",void 0);Re([p("cells",{waitUntilFirstUpdate:!0})],St.prototype,"cellsUpdate",null);St.define("hmwc-table-row",St);var Bo=m`
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
`;var Xe=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},Vt=class extends u{constructor(){super(...arguments),this.rows=[],this.fields=[]}rowsUpdate(){let t=this.rows.filter(e=>e.index);t.length?this.rows.filter(e=>e.index===void 0).forEach((e,r)=>{t.find(i=>i.index===r)||(e.index=r),r++}):this.rows.map((e,r)=>e.index=r),this.rows=this.rows.sort((e,r)=>e.index-r.index),this.rows[0]?.cells&&(this.fields.length||(this.fields=Array.from(Array(this.rows[0]?.cells.length).keys()).map(()=>""))),this.rows.find(e=>e.selectable)&&(this.fields=["",...this.fields]),this.rows.find(e=>e.removable)&&(this.fields=[...this.fields,""])}fieldsUpdate(){}firstUpdated(){this.rows=this.controllers.slot.get().filter(t=>t instanceof St)}render(){let t=f({table:!0,fluid:!!this.fluid,fields:this.fields.some(e=>e!=="")});return c`
      <div part="base" class=${t}>
        <div part="head" class="table__head">
          <div class="table__head-row">${this.fields?.map(e=>c`<div part="col-head" class="table__head-item">${e}</div>`)}</div>
        </div>
        ${this.rows.map(e=>e)}
        <slot></slot>
      </div>
    `}};Vt.styles=Bo;Vt.dependencies=[];Vt.slots=["[Default]"];Xe([v()],Vt.prototype,"rows",void 0);Xe([a({type:Array})],Vt.prototype,"fields",void 0);Xe([a({type:Boolean,reflect:!0})],Vt.prototype,"fluid",void 0);Xe([p("rows")],Vt.prototype,"rowsUpdate",null);Xe([p("fields")],Vt.prototype,"fieldsUpdate",null);Vt.define("hmwc-table",Vt);var Do=m`
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
`;var _e=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},gt=class s extends u{constructor(){super(...arguments),this.selection="single",this.checked=!1,this.items=[]}getTreeItems(){return this.items.length||this.controllers.slot.get().forEach(t=>{t instanceof s&&this.items.push({label:t.controllers.slot.get("label")[0].textContent||"",icon:t.controllers.slot.get("icon")[0].src,selected:t.selected,expanded:t.expanded,items:t.getTreeItems()})}),this.items}handleClick(){this.selected=!this.selected,this.selection==="multiple"&&(this.checked=this.selected),this.emit("hmwc-select",{detail:{value:this}}),this.items&&(this.expanded=this.selected)}connectedCallback(){super.connectedCallback()}render(){let t=f({"tree-item":!0,items:!!this.items.length,expanded:!!this.expanded,disabled:!!this.disabled,selected:!!this.selected&&!this.disabled});return c`
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
                      icon=${w(e.icon)}
                      ?selected=${e.selected}
                      ?expanded=${e.expanded}
                      ?checked=${e.checked}
                      selection=${this.selection}
                      .items=${e.items||[]}></hmwc-tree-item>
                  `)}
              </slot>
            </div>`:""}
      </div>
    `}};gt.styles=Do;gt.dependencies=[_,pt];gt.slots=["label","icon"];_e([a({type:String})],gt.prototype,"selection",void 0);_e([a({type:String})],gt.prototype,"label",void 0);_e([a({type:String})],gt.prototype,"icon",void 0);_e([a({type:Boolean,reflect:!0})],gt.prototype,"selected",void 0);_e([a({type:Boolean,reflect:!0})],gt.prototype,"checked",void 0);_e([a({type:Boolean,reflect:!0})],gt.prototype,"expanded",void 0);_e([a({type:Boolean,reflect:!0})],gt.prototype,"disabled",void 0);_e([a({type:Array})],gt.prototype,"items",void 0);gt.define("hmwc-tree-item",gt);var To=m`
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
`;var Je=function(s,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,r);else for(var l=s.length-1;l>=0;l--)(n=s[l])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},Jt=class extends u{constructor(){super(...arguments),this.selection="single",this.items=[]}handleSelectionChange(){this.controllers.slot.get().forEach(t=>{t.selection=this.selection})}singleSelect(t,e){return e.map(r=>(r.label===t.label?(r.selected=!0,r.items&&(r.expanded=!0)):r.selected=!1,r.items&&(r.items=this.singleSelect(t,r.items),r.items.some(i=>i.selected)&&(r.expanded=!0)),r))}multiSelect(t,e){return e.map(r=>(r.label===t.label&&(r.selected=!0,r.checked=!0,r.items&&(r.expanded=!0)),r.items&&(r.items=this.multiSelect(t,r.items),r.items.some(i=>i.selected)&&(r.expanded=!0)),r))}handleSelection(t){let e=t.detail.value;this.selection==="single"?this.items=this.singleSelect(e,this.items):this.selection==="multiple"&&(this.items=this.multiSelect(e,this.items))}connectedCallback(){super.connectedCallback(),this.controllers.slot.get().forEach(t=>{t.selection=this.selection})}render(){let t=f({tree:!0,label:!!this.label||this.controllers.slot.test("label")});return c`
      <div part="base" class=${t}>
        <slot name="label" part="label" class="tree__label">${this.label}</slot>
        <slot>
          ${this.items.map(e=>c`
              <hmwc-tree-item
                label=${e.label}
                icon=${w(e.icon)}
                ?selected=${e.selected}
                ?expanded=${e.expanded}
                ?checked=${e.checked}
                .items=${e.items||[]}
                selection=${this.selection}
                @hmwc-select=${this.handleSelection}></hmwc-tree-item>
            `)}
        </slot>
      </div>
    `}};Jt.styles=To;Jt.dependencies=[gt];Je([a()],Jt.prototype,"selection",void 0);Je([a({type:Boolean,reflect:!0})],Jt.prototype,"expanded",void 0);Je([a({type:Array})],Jt.prototype,"items",void 0);Je([a({type:String,reflect:!0})],Jt.prototype,"label",void 0);Je([p("selection")],Jt.prototype,"handleSelectionChange",null);Jt.define("hmwc-tree",Jt);return Ho(ka);})();

// Expose imperative functions globally
if (typeof window !== 'undefined') {
  window.HMWCPopup = HMWC.HMWCPopup;
  window.HMWCAlert = HMWC.HMWCAlert;
}

