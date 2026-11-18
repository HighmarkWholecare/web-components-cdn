"use strict";var HMWC=(()=>{var qr=Object.defineProperty;var qa=Object.getOwnPropertyDescriptor;var Wa=Object.getOwnPropertyNames;var Va=Object.prototype.hasOwnProperty;var Ka=(s,e)=>{for(var t in e)qr(s,t,{get:e[t],enumerable:!0})},Ga=(s,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Wa(e))!Va.call(s,i)&&i!==t&&qr(s,i,{get:()=>e[i],enumerable:!(r=qa(e,i))||r.enumerable});return s};var Ya=s=>Ga(qr({},"__esModule",{value:!0}),s);var rn={};Ka(rn,{Accordion:()=>Z,AccordionGroup:()=>de,Alert:()=>U,AlertPresets:()=>ri,Attachment:()=>P,Avatar:()=>W,Badge:()=>J,Banner:()=>it,Breadcrumb:()=>Y,Breadcrumbs:()=>Ae,Button:()=>k,Calendar:()=>re,Card:()=>ae,Chart:()=>ye,Checkbox:()=>we,CheckboxGroup:()=>Be,Col:()=>rt,Combobox:()=>V,ContextMenu:()=>je,DataTable:()=>S,Description:()=>ue,DescriptionList:()=>Ue,Divider:()=>H,Dropdown:()=>q,EmptyState:()=>Ge,Feed:()=>Xe,FeedItem:()=>le,Grid:()=>he,HMWCAlert:()=>ii,HMWCComponent:()=>g,HMWCContainerComponent:()=>j,HMWCFormComponent:()=>L,HMWCPopup:()=>va,Header:()=>Oe,Icon:()=>$,Image:()=>fe,Input:()=>C,List:()=>bt,Menu:()=>O,MenuItem:()=>R,Navbar:()=>He,Page:()=>qe,Pagination:()=>se,Popup:()=>M,PopupPresets:()=>ui,Progress:()=>X,Radio:()=>Ee,RadioGroup:()=>Pe,Row:()=>ht,Skeleton:()=>oe,Spinner:()=>ie,Stepper:()=>Qe,Switch:()=>dt,Tab:()=>_e,TabContent:()=>Je,TabGroup:()=>Q,Table:()=>st,TableCell:()=>ke,TableField:()=>Ie,TableRow:()=>Ne,Tag:()=>ne,Text:()=>z,Tooltip:()=>K,Tree:()=>pt,TreeItem:()=>ee,ensureIconFont:()=>Gi,shortcutModifier:()=>Qt});var _r=globalThis,xr=_r.ShadowRoot&&(_r.ShadyCSS===void 0||_r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Wr=Symbol(),bi=new WeakMap,sr=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Wr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(xr&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=bi.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&bi.set(t,e))}return e}toString(){return this.cssText}},wi=s=>new sr(typeof s=="string"?s:s+"",void 0,Wr),f=(s,...e)=>{let t=s.length===1?s[0]:e.reduce((r,i,o)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[o+1],s[0]);return new sr(t,s,Wr)},yi=(s,e)=>{if(xr)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let r=document.createElement("style"),i=_r.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,s.appendChild(r)}},Vr=xr?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return wi(t)})(s):s;var{is:Xa,defineProperty:Qa,getOwnPropertyDescriptor:Ja,getOwnPropertyNames:Za,getOwnPropertySymbols:es,getPrototypeOf:ts}=Object,kr=globalThis,_i=kr.trustedTypes,rs=_i?_i.emptyScript:"",is=kr.reactiveElementPolyfillSupport,nr=(s,e)=>s,lr={toAttribute(s,e){switch(e){case Boolean:s=s?rs:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},$r=(s,e)=>!Xa(s,e),xi={attribute:!0,type:String,converter:lr,reflect:!1,useDefault:!1,hasChanged:$r};Symbol.metadata??=Symbol("metadata"),kr.litPropertyMetadata??=new WeakMap;var Ct=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=xi){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Qa(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:o}=Ja(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:i,set(a){let l=i?.call(this);o?.call(this,a),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??xi}static _$Ei(){if(this.hasOwnProperty(nr("elementProperties")))return;let e=ts(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(nr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(nr("properties"))){let t=this.properties,r=[...Za(t),...es(t)];for(let i of r)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[t,r]of this.elementProperties){let i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)t.unshift(Vr(i))}else e!==void 0&&t.push(Vr(e));return t}static _$Eu(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yi(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){let o=(r.converter?.toAttribute!==void 0?r.converter:lr).toAttribute(t,r.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let o=r.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:lr;this._$Em=i;let l=a.fromAttribute(t,o.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,r,i=!1,o){if(e!==void 0){let a=this.constructor;if(i===!1&&(o=this[e]),r??=a.getPropertyOptions(e),!((r.hasChanged??$r)(o,t)||r.useDefault&&r.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:o},a){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),o!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,o]of r){let{wrapped:a}=o,l=this[i];a!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Ct.elementStyles=[],Ct.shadowRootOptions={mode:"open"},Ct[nr("elementProperties")]=new Map,Ct[nr("finalized")]=new Map,is?.({ReactiveElement:Ct}),(kr.reactiveElementVersions??=[]).push("2.1.2");var Gr=globalThis,ki=s=>s,Cr=Gr.trustedTypes,$i=Cr?Cr.createPolicy("lit-html",{createHTML:s=>s}):void 0,Yr="$lit$",St=`lit$${Math.random().toFixed(9).slice(2)}$`,Xr="?"+St,os=`<${Xr}>`,Lt=document,hr=()=>Lt.createComment(""),dr=s=>s===null||typeof s!="object"&&typeof s!="function",Qr=Array.isArray,Ti=s=>Qr(s)||typeof s?.[Symbol.iterator]=="function",Kr=`[ 	
\f\r]`,cr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ci=/-->/g,Si=/>/g,Nt=RegExp(`>|${Kr}(?:([^\\s"'>=/]+)(${Kr}*=${Kr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ai=/'/g,Ei=/"/g,Oi=/^(?:script|style|textarea|title)$/i,Jr=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),c=Jr(1),Ri=Jr(2),Mi=Jr(3),ze=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),zi=new WeakMap,Ft=Lt.createTreeWalker(Lt,129);function Di(s,e){if(!Qr(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return $i!==void 0?$i.createHTML(e):e}var Bi=(s,e)=>{let t=s.length-1,r=[],i,o=e===2?"<svg>":e===3?"<math>":"",a=cr;for(let l=0;l<t;l++){let h=s[l],d,p,m=-1,y=0;for(;y<h.length&&(a.lastIndex=y,p=a.exec(h),p!==null);)y=a.lastIndex,a===cr?p[1]==="!--"?a=Ci:p[1]!==void 0?a=Si:p[2]!==void 0?(Oi.test(p[2])&&(i=RegExp("</"+p[2],"g")),a=Nt):p[3]!==void 0&&(a=Nt):a===Nt?p[0]===">"?(a=i??cr,m=-1):p[1]===void 0?m=-2:(m=a.lastIndex-p[2].length,d=p[1],a=p[3]===void 0?Nt:p[3]==='"'?Ei:Ai):a===Ei||a===Ai?a=Nt:a===Ci||a===Si?a=cr:(a=Nt,i=void 0);let _=a===Nt&&s[l+1].startsWith("/>")?" ":"";o+=a===cr?h+os:m>=0?(r.push(d),h.slice(0,m)+Yr+h.slice(m)+St+_):h+St+(m===-2?l:_)}return[Di(s,o+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},pr=class s{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,a=0,l=e.length-1,h=this.parts,[d,p]=Bi(e,t);if(this.el=s.createElement(d,r),Ft.currentNode=this.el.content,t===2||t===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(i=Ft.nextNode())!==null&&h.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let m of i.getAttributeNames())if(m.endsWith(Yr)){let y=p[a++],_=i.getAttribute(m).split(St),A=/([.?@])?(.*)/.exec(y);h.push({type:1,index:o,name:A[2],strings:_,ctor:A[1]==="."?Ar:A[1]==="?"?Er:A[1]==="@"?zr:Ut}),i.removeAttribute(m)}else m.startsWith(St)&&(h.push({type:6,index:o}),i.removeAttribute(m));if(Oi.test(i.tagName)){let m=i.textContent.split(St),y=m.length-1;if(y>0){i.textContent=Cr?Cr.emptyScript:"";for(let _=0;_<y;_++)i.append(m[_],hr()),Ft.nextNode(),h.push({type:2,index:++o});i.append(m[y],hr())}}}else if(i.nodeType===8)if(i.data===Xr)h.push({type:2,index:o});else{let m=-1;for(;(m=i.data.indexOf(St,m+1))!==-1;)h.push({type:7,index:o}),m+=St.length-1}o++}}static createElement(e,t){let r=Lt.createElement("template");return r.innerHTML=e,r}};function jt(s,e,t=s,r){if(e===ze)return e;let i=r!==void 0?t._$Co?.[r]:t._$Cl,o=dr(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(s),i._$AT(s,t,r)),r!==void 0?(t._$Co??=[])[r]=i:t._$Cl=i),i!==void 0&&(e=jt(s,i._$AS(s,e.values),i,r)),e}var Sr=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??Lt).importNode(t,!0);Ft.currentNode=i;let o=Ft.nextNode(),a=0,l=0,h=r[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new Gt(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new Tr(o,this,e)),this._$AV.push(d),h=r[++l]}a!==h?.index&&(o=Ft.nextNode(),a++)}return Ft.currentNode=Lt,i}p(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Gt=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=jt(this,e,t),dr(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==ze&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ti(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&dr(this._$AH)?this._$AA.nextSibling.data=e:this.T(Lt.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=pr.createElement(Di(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{let o=new Sr(i,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=zi.get(e.strings);return t===void 0&&zi.set(e.strings,t=new pr(e)),t}k(e){Qr(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let o of e)i===t.length?t.push(r=new s(this.O(hr()),this.O(hr()),this,this.options)):r=t[i],r._$AI(o),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let r=ki(e).nextSibling;ki(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ut=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,o){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=x}_$AI(e,t=this,r,i){let o=this.strings,a=!1;if(o===void 0)e=jt(this,e,t,0),a=!dr(e)||e!==this._$AH&&e!==ze,a&&(this._$AH=e);else{let l=e,h,d;for(e=o[0],h=0;h<o.length-1;h++)d=jt(this,l[r+h],t,h),d===ze&&(d=this._$AH[h]),a||=!dr(d)||d!==this._$AH[h],d===x?e=x:e!==x&&(e+=(d??"")+o[h+1]),this._$AH[h]=d}a&&!i&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ar=class extends Ut{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}},Er=class extends Ut{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}},zr=class extends Ut{constructor(e,t,r,i,o){super(e,t,r,i,o),this.type=5}_$AI(e,t=this){if((e=jt(this,e,t,0)??x)===ze)return;let r=this._$AH,i=e===x&&r!==x||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==x&&(r===x||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Tr=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){jt(this,e)}},Pi={M:Yr,P:St,A:Xr,C:1,L:Bi,R:Sr,D:Ti,V:jt,I:Gt,H:Ut,N:Er,U:zr,B:Ar,F:Tr},as=Gr.litHtmlPolyfillSupport;as?.(pr,Gt),(Gr.litHtmlVersions??=[]).push("3.3.2");var Ii=(s,e,t)=>{let r=t?.renderBefore??e,i=r._$litPart$;if(i===void 0){let o=t?.renderBefore??null;r._$litPart$=i=new Gt(e.insertBefore(hr(),o),o,void 0,t??{})}return i._$AI(s),i};var Zr=globalThis,At=class extends Ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ii(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ze}};At._$litElement$=!0,At.finalized=!0,Zr.litElementHydrateSupport?.({LitElement:At});var ss=Zr.litElementPolyfillSupport;ss?.({LitElement:At});(Zr.litElementVersions??=[]).push("4.2.2");var ns={attribute:!0,type:String,converter:lr,reflect:!1,hasChanged:$r},ls=(s=ns,e,t)=>{let{kind:r,metadata:i}=t,o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),r==="setter"&&((s=Object.create(s)).wrapped=!0),o.set(t.name,s),r==="accessor"){let{name:a}=t;return{set(l){let h=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,h,s,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,s,l),l}}}if(r==="setter"){let{name:a}=t;return function(l){let h=this[a];e.call(this,l),this.requestUpdate(a,h,s,!0,l)}}throw Error("Unsupported decorator location: "+r)};function n(s){return(e,t)=>typeof t=="object"?ls(s,e,t):((r,i,o)=>{let a=i.hasOwnProperty(o);return i.constructor.createProperty(o,r),a?Object.getOwnPropertyDescriptor(i,o):void 0})(s,e,t)}function w(s){return n({...s,state:!0,attribute:!1})}var Ht=(s,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(s,e,t),t);function I(s,e){return(t,r,i)=>{let o=a=>a.renderRoot?.querySelector(s)??null;if(e){let{get:a,set:l}=typeof r=="object"?t:i??(()=>{let h=Symbol();return{get(){return this[h]},set(d){this[h]=d}}})();return Ht(t,r,{get(){let h=a.call(this);return h===void 0&&(h=o(this),(h!==null||this.hasUpdated)&&l.call(this,h)),h}})}return Ht(t,r,{get(){return o(this)}})}}var mr={class:"hmwc-scroll-lock",prop:"--hmwc-scroll-lock-size"},Or=class s{get scrollbarWidth(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}lockBodyScrolling(e){if(s.locks.add(e),document.body.classList.contains(mr.class))return;let t=this.scrollbarWidth;document.body.classList.add(mr.class),document.body.style.setProperty(mr.prop,`${t}px`)}unlockBodyScrolling(e){s.locks.delete(e),!(s.locks.size>0)&&(document.body.classList.remove(mr.class),document.body.style.removeProperty(mr.prop))}scrollIntoView(e,t,r="vertical",i="smooth"){let o={top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)},a=o.top+t.scrollTop,l=o.left+t.scrollLeft,h=t.scrollLeft,d=t.scrollLeft+t.offsetWidth,p=t.scrollTop,m=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(l<h?t.scrollTo({left:l,behavior:i}):l+e.clientWidth>d&&t.scrollTo({left:l-t.offsetWidth+e.clientWidth,behavior:i})),(r==="vertical"||r==="both")&&(a<p?t.scrollTo({top:a,behavior:i}):a+e.clientHeight>m&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:i}))}constructor(e){this.host=e,e.addController(this)}hostConnected(){}hostDisconnected(){}};Or.locks=new Set;var Ni=Or;var ur=class{isNamedSlotContent(e){return e.nodeType===e.ELEMENT_NODE&&!!e.getAttribute("slot")}hasDefaultSlot(){return Array.from(this.host.childNodes).some(e=>{let t=e.nodeType===e.TEXT_NODE,r=e.nodeType===e.ELEMENT_NODE,i=e.textContent.trim()==="";return t&&!i||r&&!this.isNamedSlotContent(e)})}hasNamedSlot(e){let t=`[slot="${e}"]`;return this.host.querySelector(t)!==null}getDefaultSlot(){return Array.from(this.host.children).filter(e=>!this.isNamedSlotContent(e))}getNamedSlot(e){let t=`[slot="${e}"]`;return this.host.querySelector(t)}insert(e,t){let r=Array.from(this.host.shadowRoot?.querySelectorAll("slot")||[]);t?r.find(i=>i.name===t)?.appendChild(e):r.filter(i=>!i.name)[0]?.appendChild(e)}prepend(e,t){let r=Array.from(this.host.shadowRoot?.querySelectorAll("slot")||[]);t?r.find(i=>i.name===t)?.prepend(e):r.filter(i=>!i.name)[0]?.prepend(e)}test(e){return e?this.hasNamedSlot(e):this.hasDefaultSlot()}get(e){if(e){let t=this.getNamedSlot(e);return t?[t]:[]}else return this.getDefaultSlot()}constructor(e){this.slots=[],this.handleUpdate=t=>{let r=t.target,i=this.slots.includes("[default]")&&!r.name,o=r.name&&this.slots.includes(r.name);!i&&!o||this.host.requestUpdate()},this.host=e,this.slots=e.constructor.slots,e.addController(this)}hostConnected(){this.root=this.host.shadowRoot,this.root?.addEventListener("slotchange",this.handleUpdate)}hostDisconnected(){this.root?.removeEventListener("slotchange",this.handleUpdate)}};function u(s,e){let t={waitUntilFirstUpdate:!1,...e};return(r,i)=>{let{update:o}=r,a=Array.isArray(s)?s:[s];r.update=function(l){l&&(a.forEach(h=>{let d=h;if(l.has(d)){let p=l.get(d),m=this[d];p!==m&&(!t.waitUntilFirstUpdate||this.hasUpdated)&&this[i](p,m)}}),o.call(this,l))}}}var Fi=f`
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

  /* Input groups ("hmwc-row attached"). The row sets --hmwc-attached on each
     child (first, middle or last). A component whose base part draws its
     border then squares the corners that meet a neighbour, whatever radius
     its own size classes set. The base part resets the property so it does
     not reach components nested further in. Browsers without style queries
     keep the rounded corners. */
  [part~='base'] {
    --hmwc-attached: initial;
  }

  @container style(--hmwc-attached: first) {
    [part~='base'] {
      border-start-end-radius: 0 !important;
      border-end-end-radius: 0 !important;
    }
  }

  @container style(--hmwc-attached: middle) {
    [part~='base'] {
      border-radius: 0 !important;
    }
  }

  @container style(--hmwc-attached: last) {
    [part~='base'] {
      border-start-start-radius: 0 !important;
      border-end-start-radius: 0 !important;
    }
  }
`,mt=f`
  :host {
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    font-feature-settings: inherit;
    user-select: text;
  }

  [part~='label'],
  [part~='summary'],
  [part~='header'],
  [part~='footer'] {
    user-select: none;
    font-size: var(--settings-font-size, 16px);
    font-feature-settings: 'c2sc', 'smcp';
    font-family: var(--hmwc-font-sans);
    line-height: var(--hmwc-line-height-normal);
    letter-spacing: var(--hmwc-letter-spacing-normal);
  }
`;var Re=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},cs=function(s,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?s!==e||!r:!e.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(s):r?r.value:e.get(s)},hs=function(s,e,t,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?s!==e||!i:!e.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(s,t):i?i.value=t:e.set(s,t),t},Rr,g=class extends At{static get styles(){let e=this._styles?this._styles:[];return[Fi,...Array.isArray(e)?e:[e]]}static set styles(e){let t=this._styles?this._styles:[];this._styles=[t,e]}tooltipChanged(){this.tooltip?this._tooltipEl?this._tooltipEl.textContent=this.tooltip:this._setupTooltip():this._teardownTooltip()}spanChanged(){this.span?this.reposition():(this.style.removeProperty("--colspan"),this.style.removeProperty("--rowspan"))}emit(e,t){let r=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...t});return this.dispatchEvent(r),r}contextMenuItems(e){return[]}changeStep(e){this.controllers.form?.changeStep(e)}static define(e,t=this){customElements.get(e)||customElements.define(e,class extends t{})}reposition(){let e=this.parentElement,t={cols:1,rows:1};this.span===!0?t.cols=e.cols:this.span instanceof Array?(t.cols=this.span[0]===!0?e.cols:this.span[0]||1,t.rows=this.span[1]===!0?e.rows:this.span[1]||1):t.cols=this.span||t.cols,t.cols>1&&this.style.setProperty("--colspan",`${t.cols}`),t.rows>1&&this.style.setProperty("--rowspan",`${t.rows+1}`),["col","row","justify"].forEach(i=>{let o=this[i];o&&this.style.setProperty(`--${i}`,`${o}`)})}applyStyles(){let e={xxs:"0.125rem",xs:"var(--hmwc-spacing-3x-small)",sm:"var(--hmwc-spacing-2x-small)",md:"var(--hmwc-spacing-x-small)",lg:"var(--hmwc-spacing-large)",xl:"var(--hmwc-spacing-x-large)",xxl:"var(--hmwc-spacing-2x-large)",auto:"auto"};this.top&&this.style.setProperty("--top",`${e[this.top]}`),this.bottom&&this.style.setProperty("--bottom",`${e[this.bottom]}`)}applyAnimation(){["HMWC-CARD","HMWC-ALERT","HMWC-ACCORDION","HMWC-ACCORDION-GROUP"].includes(this.tagName)&&this.style.setProperty("--animation","scale-in"),this.animation&&(this.animation instanceof Object?(this.animation.name&&this.style.setProperty("--animation",`${this.animation.name}`),this.animation.duration&&this.style.setProperty("--animation-duration",`${this.animation.duration}ms`),this.animation.easing&&this.style.setProperty("--animation-easing",`${this.animation.easing}`)):this.style.setProperty("--animation",`${this.animation}`))}firstUpdated(e){super.firstUpdated(e)}connectedCallback(){super.connectedCallback(),this.parentElement?.tagName==="HMWC-GRID"&&this.reposition(),this.applyStyles(),this.applyAnimation(),this.notificationStack&&this._ensureStackContainer(),this.tooltip&&this._setupTooltip(),this._revealObserver=new MutationObserver(e=>{for(let t of e)t.attributeName==="hidden"&&!this.hasAttribute("hidden")&&this._playReveal()}),this._revealObserver.observe(this,{attributes:!0,attributeFilter:["hidden"]})}_playReveal(){let e=Array.from(this.children).filter(o=>o instanceof HTMLElement&&!o.classList.contains("hmwc-notification-stack"));if(!e.length){this.classList.add("hmwc-reveal"),this.addEventListener("animationend",()=>this.classList.remove("hmwc-reveal"),{once:!0});return}let t=50,r=350,i="cubic-bezier(0.2, 0, 0.13, 1.5)";e.forEach((o,a)=>{o.animate([{opacity:0,transform:"translateY(12px)",filter:"blur(2px)"},{opacity:1,transform:"translateY(0)",filter:"blur(0)"}],{duration:r,delay:a*t,easing:i,fill:"both"})})}_ensureStackContainer(){this._stackContainer||(this._stackContainer=Object.assign(document.createElement("div"),{className:"hmwc-notification-stack"}),this.global||(this.style.position="relative"),this.appendChild(this._stackContainer))}_positionTooltip(){if(!this._tooltipEl)return;let e=this.getBoundingClientRect(),t=this._tooltipEl.getBoundingClientRect(),r=this.tooltipPlacement||"top",i=6,o=0,a=0;switch(r){case"top":default:o=e.top-t.height-i,a=e.left+e.width/2-t.width/2;break;case"top-start":o=e.top-t.height-i,a=e.left;break;case"top-end":o=e.top-t.height-i,a=e.right-t.width;break;case"bottom":o=e.bottom+i,a=e.left+e.width/2-t.width/2;break;case"bottom-start":o=e.bottom+i,a=e.left;break;case"bottom-end":o=e.bottom+i,a=e.right-t.width;break;case"left":o=e.top+e.height/2-t.height/2,a=e.left-t.width-i;break;case"left-start":o=e.top,a=e.left-t.width-i;break;case"left-end":o=e.bottom-t.height,a=e.left-t.width-i;break;case"right":o=e.top+e.height/2-t.height/2,a=e.right+i;break;case"right-start":o=e.top,a=e.right+i;break;case"right-end":o=e.bottom-t.height,a=e.right+i;break}this._tooltipEl.style.top=`${o}px`,this._tooltipEl.style.left=`${a}px`}_setupTooltip(){if(this._tooltipEl)return;let e=document.createElement("div");e.setAttribute("role","tooltip"),e.setAttribute("aria-live","off"),e.textContent=this.tooltip||"",Object.assign(e.style,{display:"none",position:"fixed",width:"max-content",maxWidth:"20rem",borderRadius:"var(--hmwc-tooltip-border-radius)",backgroundColor:"var(--hmwc-tooltip-background-color)",fontFamily:"var(--hmwc-tooltip-font-family)",fontSize:"var(--hmwc-tooltip-font-size)",fontWeight:"var(--hmwc-tooltip-font-weight)",lineHeight:"var(--hmwc-tooltip-line-height)",color:"var(--hmwc-tooltip-color)",padding:"var(--hmwc-tooltip-padding)",pointerEvents:"none",userSelect:"none",zIndex:"var(--hmwc-z-index-tooltip)"}),this._tooltipEl=e,document.body.appendChild(e),this.addEventListener("mouseenter",this._tooltipShow),this.addEventListener("mouseleave",this._tooltipHide),this.addEventListener("focusin",this._tooltipShow),this.addEventListener("focusout",this._tooltipHide),document.addEventListener("keydown",this._tooltipKeyDown)}_teardownTooltip(){this._tooltipEl&&(this._tooltipEl.remove(),this._tooltipEl=void 0),clearTimeout(this._tooltipTimeout),this.removeEventListener("mouseenter",this._tooltipShow),this.removeEventListener("mouseleave",this._tooltipHide),this.removeEventListener("focusin",this._tooltipShow),this.removeEventListener("focusout",this._tooltipHide),document.removeEventListener("keydown",this._tooltipKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this._teardownTooltip(),this._revealObserver?.disconnect()}constructor(){super(),this.controllers=this._createControllers(),this._tooltipShow=()=>{this._tooltipEl&&(clearTimeout(this._tooltipTimeout),this._tooltipTimeout=window.setTimeout(()=>{this._tooltipEl&&(this._tooltipEl.style.display="block",this._tooltipEl.setAttribute("aria-live","polite"),this._positionTooltip())},150))},this._tooltipHide=()=>{this._tooltipEl&&(clearTimeout(this._tooltipTimeout),this._tooltipTimeout=window.setTimeout(()=>{this._tooltipEl&&(this._tooltipEl.style.display="none",this._tooltipEl.setAttribute("aria-live","off"))},150))},this._tooltipKeyDown=e=>{e.key==="Escape"&&this._tooltipEl&&(this._tooltipEl.style.display="none")},Rr.set(this,!1),this.initialReflectedProperties=new Map}_createControllers(){let e,t,r=this;return{get slot(){return e??=new ur(r)},get scroll(){return t??=new Ni(r)}}}attributeChangedCallback(e,t,r){cs(this,Rr,"f")||(this.constructor.elementProperties.forEach((i,o)=>{i.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),hs(this,Rr,!0,"f")),super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&this[r]==null&&(this[r]=t)})}};Rr=new WeakMap;g.dependencies=[];g.slots=[];Re([n({type:String})],g.prototype,"tooltip",void 0);Re([n({type:String,attribute:"tooltip-placement"})],g.prototype,"tooltipPlacement",void 0);Re([u("tooltip")],g.prototype,"tooltipChanged",null);Re([n({type:Boolean,reflect:!0})],g.prototype,"notificationStack",void 0);Re([n({type:Boolean,reflect:!0})],g.prototype,"global",void 0);Re([n({type:Boolean})],g.prototype,"formTemplate",void 0);Re([n({type:Boolean})],g.prototype,"formGroup",void 0);Re([n({type:String})],g.prototype,"name",void 0);Re([n({type:Number})],g.prototype,"step",void 0);Re([n({type:Object})],g.prototype,"animation",void 0);Re([n({type:Number})],g.prototype,"span",void 0);Re([n({type:Number})],g.prototype,"col",void 0);Re([n({type:Number})],g.prototype,"row",void 0);Re([n({type:String})],g.prototype,"justify",void 0);Re([n({type:String})],g.prototype,"top",void 0);Re([n({type:String})],g.prototype,"bottom",void 0);Re([u("span")],g.prototype,"spanChanged",null);var Li=f`
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
    column-gap: var(--hmwc-spacing-medium);
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
    column-gap: var(--hmwc-spacing-medium);
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
    display: flex;
    align-items: center;
    gap: 0.35em;
  }

  /* Error messages lead with an icon (status icons never sit inside a field). */
  .hmwc-error__icon {
    flex: none;
    --icon-size: 1em;
    --icon-color: currentColor;
  }

  /* ── Control states ──
     One vocabulary for every control that draws a border; the model is
     written down in docs/v2/specs/CONTROL_STATES.md. Validity decides WHICH
     colors these hold; a component only decides WHEN to use one (rest,
     hover, focus). A hover rule reads "--control-border-color-hover", so it
     can never fall back to the neutral hover color on an invalid control,
     and the ring is only ever drawn by a focus rule.

       --control-border-color          the border at rest
       --control-border-color-hover    the border under the pointer
       --control-border-color-focus    the border while focused
       --control-border-color-checked  a checked toggle's border at rest
       --control-border-color-checked-hover   ... and under the pointer
       --control-ring                  a field's focus halo (a box-shadow)
       --control-ring-color            that halo's color alone
       --control-focus-outline         a toggle's keyboard ring (an outline)
       --control-focus-outline-offset  the gap between a toggle and its ring

     A group hands its validity to the toggles inside it through the
     "--form-group-*" properties, which the toggles read first.
  */

  :host {
    --control-border-color: var(--hmwc-input-border-color);
    --control-border-color-hover: var(--hmwc-input-border-color-hover);
    --control-border-color-focus: var(--hmwc-input-border-color-focus);
    --control-border-color-checked: var(--hmwc-color-primary-600);
    --control-border-color-checked-hover: var(--hmwc-color-primary-700);
    --control-ring-color: var(--hmwc-input-focus-ring-color);
    --control-ring: 0 0 0 var(--hmwc-input-focus-ring-width) var(--control-ring-color);
    --control-focus-outline-color: var(--hmwc-focus-ring-color);
    --control-focus-outline: var(--hmwc-focus-ring-style) var(--hmwc-focus-ring-width)
      var(--form-group-focus-outline-color, var(--control-focus-outline-color));
    --control-focus-outline-offset: var(--hmwc-toggle-focus-ring-offset, 2px);
  }

  :host([invalid]) {
    --control-border-color: var(--hmwc-input-border-color-invalid);
    --control-border-color-hover: var(--hmwc-input-border-color-invalid-hover);
    --control-border-color-focus: var(--hmwc-input-border-color-invalid-focus);
    --control-border-color-checked: var(--hmwc-input-border-color-invalid);
    --control-border-color-checked-hover: var(--hmwc-input-border-color-invalid-hover);
    --control-ring-color: var(--hmwc-input-focus-ring-color-invalid);
    --control-focus-outline-color: var(--hmwc-focus-ring-color-invalid, var(--hmwc-color-danger-600));
  }

  /* Disabled wins over validity, and has no hover or focus look. */
  :host([disabled]) {
    --control-border-color: var(--hmwc-input-border-color-disabled);
    --control-border-color-hover: var(--hmwc-input-border-color-disabled);
    --control-border-color-focus: var(--hmwc-input-border-color-disabled);
    --control-border-color-checked: var(--hmwc-color-primary-600);
    --control-border-color-checked-hover: var(--hmwc-color-primary-600);
    --control-ring: none;
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
`;var Me=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o};function ji(s,e){let t=String(s??"").trim();if(!t)return null;if(e.getAttribute("type")==="date"||/^\d{1,4}[-/]\d{1,2}[-/]\d{1,4}$/.test(t)){let o=t.split(/[-/]/).map(Number),a=e.dateFormat??e.getAttribute("date-format")??"MM/DD/YYYY",l=t.split(/[-/]/)[0].length===4?["Y","M","D"]:a.split(/[-/]/).map(p=>p[0]),h=p=>o[l.indexOf(p)],d=new Date(h("Y"),h("M")-1,h("D")).getTime();if(!Number.isNaN(d))return{kind:"date",value:d}}let i=Number(t);return Number.isNaN(i)?{kind:"text",value:t}:{kind:"number",value:i}}var L=class extends g{static get styles(){let e=super.styles;return[...Array.isArray(e)?e:[e],Li]}static set styles(e){super.styles=e}get(){return this.toggleComponent?this.checked:this.value}set(e){this.toggleComponent?this.checked=!!e:this.value=e}get validity(){return{...this._validity}}_isEmpty(){return this.toggleComponent?!this.checked:!String(this.value??"").trim()}_focusableControl(){return this}_resolveError(){return this._validity.customError&&this._customError?this._customError:this._validity.valueMissing?"Please fill out this field.":this._validatorError?this._validatorError:"Invalid value."}validatorMessage(){return this._checkValidator().message}_checkValidator(){if(this.disabled)return{message:""};let e=this.get();for(let[t,r]of[[this.minField,"min"],[this.maxField,"max"]]){if(!t)continue;let i=this._findField(t),o=ji(e,this),a=i?ji(i.get?i.get():i.value,i):null;if(!o||!a||o.kind!==a.kind)continue;let l=String(i.value);if(r==="min"&&o.value<a.value)return{message:o.kind==="date"?`Must be on or after ${l}.`:`Must be ${l} or more.`,key:"rangeUnderflow"};if(r==="max"&&o.value>a.value)return{message:o.kind==="date"?`Must be on or before ${l}.`:`Must be ${l} or less.`,key:"rangeOverflow"}}if(!this.validator)return{message:""};try{let t=this.validator(e,this._formData())||"";return{message:t,key:t?"customError":void 0}}catch(t){return console.error("[hmwc] validator threw:",t),{message:""}}}_formData(){return this.closest("[form]")?.controllers?.form?.getFormData()??{}}_findField(e){let r=(this.closest("[form]")??this.getRootNode()).querySelector?.(`[name="${CSS.escape(e)}"]`);return r&&r!==this?r:null}_resetValidity(){this._validity={valid:!0,valueMissing:!1,tooShort:!1,tooLong:!1,patternMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,typeMismatch:!1,badInput:!1,customError:!1},this._validatorError=""}validate(){return this.reportValidity()}showValidity(){}checkValidity(){if(this._resetValidity(),this.disabled)return!0;if(this._customError!==null&&(this._validity.customError=!0),this.required&&this._isEmpty())this._validity.valueMissing=!0;else{let{message:e,key:t}=this._checkValidator();e&&t&&(this._validatorError=e,this._validity[t]=!0)}return this._validity.valid=!(this._validity.valueMissing||this._validity.tooShort||this._validity.tooLong||this._validity.patternMismatch||this._validity.rangeUnderflow||this._validity.rangeOverflow||this._validity.typeMismatch||this._validity.badInput||this._validity.customError),this._validity.valid}reportValidity(){let e=!!this.invalid;return this.checkValidity()?(e&&(this.invalid=!1,this.error=void 0,this._emitValid()),!0):(this.invalid=!0,this.error=this._resolveError(),this._focusableControl()?.focus(),this._emitInvalid(),!1)}setCustomError(e,t={}){this._customError=e,this._customErrorClearsOnInput=!!t.clearOnInput,this._validity.customError=!0,this._validity.valid=!1,this.invalid=!0,this.error=e,this._emitInvalid()}setCustomValidity(e){e?this.setCustomError(e):this.clearValidity()}clearValidity(){let e=!!this.invalid;this._customError=null,this._customErrorClearsOnInput=!1,this._resetValidity(),this.invalid=!1,this.error=void 0,e&&this._emitValid()}hideValidation(){}_clearCustomErrorOnInput(){this._customError!==null&&this._customErrorClearsOnInput&&this.clearValidity()}willUpdate(e){this._customError!==null&&(this.invalid=!0,this.error=this._customError),super.willUpdate(e)}_emitInvalid(){let e={field:this.name??this.id??"",value:this.toggleComponent?this.checked:this.value,error:this.error??"",validity:{...this._validity}};this.emit("hmwc-invalid",{detail:e})}_emitValid(){let e={field:this.name??this.id??"",value:this.toggleComponent?this.checked:this.value};this.emit("hmwc-valid",{detail:e})}_errorId(){return`${this.id||"hmwc-form"}-error`}_ariaInvalid(){return this.invalid?"true":"false"}_ariaErrorMessage(){if(this.invalid&&this.error)return this._errorId()}_renderError(){if(!this.invalid||!this.error)return x;let e=c`<hmwc-icon part="error-icon" class="hmwc-error__icon" src="exclamation-circle-fill" aria-hidden="true"></hmwc-icon>`;return c` <div part="error" class="hmwc-error" id=${this._errorId()} role="alert" aria-live="polite">${e}${this.error}</div> `}_renderRequiredIndicator(){return!this.required||!this.requiredIndicator?x:c`<span part="required-indicator" class="hmwc-required-indicator" aria-hidden="true">*</span>`}connectedCallback(){super.connectedCallback()}constructor(){super(),this.value="",this._validity={valid:!0,valueMissing:!1,tooShort:!1,tooLong:!1,patternMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,typeMismatch:!1,badInput:!1,customError:!1},this._customError=null,this._validatorError="",this._customErrorClearsOnInput=!1}};L.formComponent=!0;Me([n({type:String,reflect:!0})],L.prototype,"name",void 0);Me([n({type:String,reflect:!0})],L.prototype,"value",void 0);Me([n({type:Boolean,reflect:!0})],L.prototype,"checked",void 0);Me([n({type:Boolean,reflect:!0})],L.prototype,"required",void 0);Me([n({type:Boolean,reflect:!0,attribute:"required-indicator"})],L.prototype,"requiredIndicator",void 0);Me([n({type:Boolean,reflect:!0})],L.prototype,"disabled",void 0);Me([n({type:Boolean,reflect:!0})],L.prototype,"invalid",void 0);Me([n({type:String})],L.prototype,"error",void 0);Me([n({type:String})],L.prototype,"label",void 0);Me([n({type:String,reflect:!0,attribute:"label-pos"})],L.prototype,"labelPos",void 0);Me([n({type:Boolean,reflect:!0})],L.prototype,"sm",void 0);Me([n({type:Boolean,reflect:!0})],L.prototype,"md",void 0);Me([n({type:Boolean,reflect:!0})],L.prototype,"lg",void 0);Me([n({type:Boolean})],L.prototype,"autofocus",void 0);Me([n({type:String,reflect:!0,attribute:"min-field"})],L.prototype,"minField",void 0);Me([n({type:String,reflect:!0,attribute:"max-field"})],L.prototype,"maxField",void 0);Me([n({attribute:!1})],L.prototype,"validator",void 0);var Ui="data-auto-disabled",Mr=["checkbox","switch"];function ds(s){if(typeof s=="string"&&s)return s;let e=s?.message;return typeof e=="string"&&e?e:"Something went wrong. Please try again."}var Dr=class s{edit(e){this.setAll(e),this.editing=!0,this.accordionGroups.size>0&&this.accordionGroups.forEach(t=>{t.forEach(r=>r.hide())}),queueMicrotask(()=>{this.snapshot=this.getFormData()??null,this.updateButtonState()}),this.resetBaseline()}cancelEdit(){this.editing=!1,this.snapshot=null,this.updateButtonState(),this.host.emit("hmwc-cancel")}isDirty(){if(!this.editing||!this.snapshot)return!0;let e=this.getFormData();return e?JSON.stringify(e)!==JSON.stringify(this.snapshot):!1}set(e,t){let r=l=>this.components.find(h=>h.getAttribute("name")===l),i=r(e);if(!i)return;if(this.resetBaseline(),t==null||t===""){this.clearComponent(i);return}let o;try{o=JSON.parse(t)}catch{o=t}typeof o=="number"&&(o=t);let a=(l,h)=>{if(h&&typeof h=="object"&&!Array.isArray(h)&&l.hasAttribute("formGroup")&&Array.from(l.children).forEach(d=>{let p=d;if(!p.hasAttribute("name"))return;let m=p.getAttribute("name");m&&a(p,h[m])}),!this.FORM_COMPONENTS.includes(this.HMWCName(l))&&(typeof h!="object"||h===null)){this.getFormComponentsInElement(l).forEach(p=>a(p,h));return}if(this.FORM_COMPONENTS.includes(this.HMWCName(l))){if(h==null||h===""){this.clearComponent(l);return}Mr.includes(this.HMWCName(l))?h===!0||h==="true"||h===1||h==="1"?l.setAttribute("checked","true"):l.removeAttribute("checked"):Array.isArray(h)?l.value=[...h]:typeof h!="object"&&(this.HMWCName(l)==="input"&&l.getAttribute("type")==="date"&&(l.initialValueDateParsed=!1),l.setAttribute("value",String(h))),this.forgetError(l)}};if(i.hasAttribute("formGroup"))if(Array.isArray(o)){let l=Array.from(i.children).find(h=>h.formTemplate);l?(Array.from(i.children).forEach(h=>{!h.formTemplate&&this.HMWCName(h)!=="button"&&h.remove()}),o.length>0&&a(l,o[0]),o.length>1&&this.addFromTemplate(l,o.length-1).forEach((d,p)=>{a(d,o[p+1])})):Array.from(i.children).forEach((h,d)=>{a(h,o[d])})}else o&&typeof o=="object"&&Object.keys(o).forEach(l=>{let h=r(l);h&&a(h,o[l])});else a(i,o)}clearComponent(e){let t=this.HMWCName(e);if(!this.FORM_COMPONENTS.includes(t)){this.getFormComponentsInElement(e).forEach(r=>this.clearComponent(r));return}if(Mr.includes(t))e.checked=!1,e.removeAttribute("checked");else{let r=Array.isArray(e.value);e.removeAttribute("value"),e.value=r?[]:""}e.removeAttribute("invalid"),e.invalid=!1,this.forgetError(e)}forgetError(e){this.validatorErrors.delete(e),e.clearValidity?.()}setAll(e){let t={};Object.keys(e).forEach(r=>{t[r]=JSON.stringify(e[r])}),this.components.forEach(r=>{let i=r.name??r.id;i&&Object.keys(e).includes(i)&&this.set(i,t[i])}),this.resetBaseline()}validate(){let e=[];this.components.forEach(r=>{if(this.FORM_COMPONENTS.includes(this.HMWCName(r))&&r.checkValidity){if(this.fieldValid(r)){r.invalid=!1;return}this.reportField(r),e.push(r)}});let t=e.sort((r,i)=>r.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)[0];t&&(t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),t.focus({preventScroll:!0})),e.length&&this.host.validationType==="alert"&&this.setError(`Please fix the ${e.length} highlighted field${e.length===1?"":"s"} and try again.`),this.updateButtonState()}validateEl(e){if(e?.checkValidity){let t=this.fieldValid(e);e.invalid=!t;let r=t||!e.checkValidity()?"":this.validatorMessageOf(e),i=this.validatorErrors.get(e);r?(e.error=r,this.validatorErrors.set(e,r)):i!==void 0&&(e.error===i&&(e.error=""),this.validatorErrors.delete(e))}this.updateButtonState()}fieldValid(e){return this.skipsField(e)?!0:e.checkValidity&&!e.checkValidity()?!1:!this.validatorMessageOf(e)}validatorMessageOf(e){return e.validatorMessage?.()??""}reportField(e){if(!e.checkValidity||!e.checkValidity()){e.reportValidity?.(),e.invalid=!0;return}let t=this.validatorMessageOf(e);e.invalid=!0,e.error=t,this.validatorErrors.set(e,t);let r=e.toggleComponent?e.checked:e.value;e.dispatchEvent(new CustomEvent("hmwc-invalid",{bubbles:!0,composed:!0,detail:{field:e.name??e.id??"",value:r,error:t,validity:{...e.validity,valid:!1,customError:!0}}}))}skipsField(e){if(this.host.hasAttribute("validate-hidden"))return!1;let t=e;for(;t&&t!==this.host;){if(t.hasAttribute("hidden")||t.hasAttribute("inert")||getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}revalidateDependents(e){let t=e.name;t&&this.components.forEach(r=>{if(r===e||!this.FORM_COMPONENTS.includes(this.HMWCName(r)))return;let i=r.getAttribute("min-field")===t||r.getAttribute("max-field")===t,o=String(r.value??"").trim()!=="";(i&&o||r.invalid&&this.validatorErrors.has(r))&&this.validateEl(r)})}setError(e,t){if(t){let i=this.components.find(o=>o.getAttribute("name")===t);if(!i)return;i.setCustomError?i.setCustomError(e,{clearOnInput:!0}):(i.invalid=!0,i.error=e);return}let r=this.host.querySelector("hmwc-alert[form-error]");r||(r=document.createElement("hmwc-alert"),r.setAttribute("form-error",""),r.setAttribute("danger",""),r.setAttribute("icon","exclamation-octagon"),r.style.setProperty("flex-basis","100%"),r.style.setProperty("grid-column","1 / -1"),this.host.prepend(r)),r.setAttribute("label",e),r.label=e,r.removeAttribute("hidden"),r.setAttribute("active",""),r.active=!0}clearError(){let e=this.host.querySelector("hmwc-alert[form-error]");e&&(e.removeAttribute("active"),e.active=!1)}get dirty(){return this._dirty}setDirty(e){this._dirty=e,this.host.toggleAttribute("dirty",e),this.syncUnloadGuard()}updateDirty(){this.userEdited=!0,this.baseline!==null&&this.setDirty(JSON.stringify(this.getFormData()??{})!==this.baseline)}resetBaseline(){if(this.userEdited=!1,this.setDirty(!1),this.baselineQueued)return;this.baselineQueued=!0;let e=this.components.map(t=>t.updateComplete);Promise.all(e).then(()=>{this.baselineQueued=!1,this.baseline=JSON.stringify(this.getFormData()??{}),this.userEdited&&this.updateDirty()})}handleBeforeUnload(e){!this._dirty||!this.host.hasAttribute("guard-dirty")||(e.preventDefault(),e.returnValue="")}syncUnloadGuard(){this._dirty&&this.host.hasAttribute("guard-dirty")&&this.host.isConnected?window.addEventListener("beforeunload",this.boundBeforeUnload):window.removeEventListener("beforeunload",this.boundBeforeUnload)}clear(){this.editing=!1,this.snapshot=null,this.removeAllFromTemplates(),this.components.forEach(e=>{e.hasAttribute("formGroup")||this.clearComponent(e)}),this.clearError(),this.updateData(),this.resetBaseline(),this.host.emit("hmwc-reset")}submit(e){if(e&&e.key!=="Enter"||this.pending)return;let t=!0;if(this.accordionGroups.size>0){for(let p=1;p<=this.steps;p++)if(!this.validateStep(p)){t=!1;let m=this.getAccordionForStep(p);m&&this.getComponentsInAccordion(m).forEach(y=>{this.validateEl(y)}),this.updateAccordionErrorIndicator(p),this.changeStep(p);break}t&&this.getOuterFormComponents().forEach(p=>{this.fieldValid(p)||(t=!1,this.validateEl(p))})}else this.components.forEach(p=>{p.hasAttribute("formGroup")||(this.stepComponents.length?p.step===this.step&&(this.fieldValid(p)||(t=!1)):this.fieldValid(p)||(t=!1))});if(!t){this.validate();return}let r=this.getFormData(e);if(!r)return;this.clearError();let i=[],o=!0,a,l=new Promise(p=>a=p),h={data:r,settled:l,waitUntil:p=>{if(!o){console.warn("[FormController] waitUntil() must be called while hmwc-submit is dispatched, not after an await.");return}i.push(Promise.resolve(p))}};if(this.host.emit("submit",{detail:{value:r}}),this.host.emit("hmwc-submit",{detail:h}),o=!1,!i.length){try{this.submitSucceeded(!1)}finally{a(!0)}return r}this.setPending(!0),this.settling=l;let d=(p,m)=>{try{m()}catch(y){console.error("[FormController] finishing the submit failed:",y)}a(p)};return Promise.all(i).then(()=>d(!0,()=>{this.setPending(!1),this.submitSucceeded(!0)}),p=>d(!1,()=>{this.setPending(!1),this.setError(ds(p))})),l.then(()=>{this.settling===l&&(this.settling=null)}),r}submitSucceeded(e){this.editing=!1,this.snapshot=null;let t=this.host.getAttribute("success-message");t&&e?this.toast(t):t&&!this.warnedUnconfirmedToast&&(this.warnedUnconfirmedToast=!0,console.warn("[FormController] success-message is shown only after the promise passed to hmwc-submit detail.waitUntil() resolves.")),this.host.hasAttribute("reset-on-success")?this.clear():this.resetBaseline(),this.updateButtonState()}toast(e){let t=document.createElement("hmwc-alert");t.setAttribute("stack",""),t.setAttribute("success",""),t.setAttribute("dismissible",""),t.setAttribute("icon","check2-circle"),t.setAttribute("label",e),t.duration=5e3,(this.host.isConnected?this.host:document.body).append(t),t.updateComplete&&t.updateComplete.then(()=>t.show?.())}setPending(e){this.pending=e,this.host.toggleAttribute("pending",e),e?this.host.setAttribute("aria-busy","true"):this.host.removeAttribute("aria-busy"),e?this.submitButtons().forEach(t=>{this.pendingButtons.set(t,{loading:!!t.loading,disabled:!!t.disabled}),t.loading=!0,t.disabled=!0}):(this.pendingButtons.forEach((t,r)=>{r.loading=t.loading,r.disabled=t.disabled}),this.pendingButtons.clear()),this.updateButtonState()}submitButtons(){let e=[...this.controls,...this.actionControls,...this.linkedButtons()];return[...new Set(e)].filter(t=>t.action==="submit"||!t.action&&t.submit)}linkedButtons(){let e=this.host.id;if(!e||!this.host.isConnected)return[];let t=this.host.getRootNode();return Array.from(t.querySelectorAll(`hmwc-button[for="${CSS.escape(e)}"]`))}changeStep(e){let t=this.step??0;this.step=e,this.updateStepUI(),this.updateButtonState(),this.host.emit("hmwc-change",{detail:{value:this.getFormData()}}),this.host.emit("hmwc-step",{detail:{from:t,to:e}})}increment(){if(this.step!==void 0&&this.step<this.steps){if(this.accordionGroups.size>0){if(this.isAccordionMultipleMode()){let t=!0;if(this.accordionGroups.forEach(i=>{i.forEach(o=>{o.active&&o.step!==void 0&&(this.validateStep(o.step)||(t=!1,this.getComponentsInAccordion(o).forEach(a=>{this.validateEl(a)}),this.updateAccordionErrorIndicator(o.step)))})}),!t)return;let r=this.findNextInactiveStep();r!==void 0&&this.changeStep(r);return}if(!this.validateStep(this.step)){let t=this.getAccordionForStep(this.step);t&&this.getComponentsInAccordion(t).forEach(r=>{this.validateEl(r)}),this.updateAccordionErrorIndicator(this.step);return}}this.changeStep(this.step+1)}}decrement(){if(this.step===void 0)return;let e=this.accordionGroups.size>0?1:0;this.step>e&&this.changeStep(this.step-1)}canPerform(e,t){switch(e){case"submit":return!(this.pending||this.editing&&!this.isDirty());case"reset":return!(!this.data||Object.keys(this.data).length===0);case"cancel":return!0;case"next":return this.step===void 0?!1:this.step<this.steps;case"previous":{if(this.step===void 0)return!1;let r=this.accordionGroups.size>0?1:0;return this.step>r}case"add":{if(!t)return this.templates.size>0;let r=this.findTemplate(t);if(!r)return!1;let i=this.templateLimit(r,"max");return i===void 0||this.templateRowCount(r)<i}case"remove":{if(!t)return this.templates.size>0;let r=this.findTemplateRow(t);if(!r||r.formTemplate)return!1;let i=this.findTemplate(r);if(!i)return!0;let o=this.templateLimit(i,"min")??1;return this.templateRowCount(i)>o}default:return!1}}templateLimit(e,t){let r=e.parentElement?.getAttribute(`template-${t}`);if(r==null||r==="")return;let i=Number(r);return Number.isInteger(i)&&i>=1?i:void 0}templateRowCount(e){let t=e.parentElement;return t?1+Array.from(t.children).filter(r=>r.hasAttribute("data-template-clone")).length:1}async perform(e,t){if(!this.canPerform(e,t))return!1;if(t&&this.cooldownMs>0){let i=this.lastActionTime.get(t)??0;if(Date.now()-i<this.cooldownMs)return!1}let r=()=>t&&this.lastActionTime.set(t,Date.now());switch(e){case"submit":return this.submit()?(r(),this.settling??!0):!1;case"reset":return r(),this.clear(),!0;case"cancel":return r(),this.editing?this.cancelEdit():this.host.emit("hmwc-cancel"),!0;case"next":return r(),this.increment(),!0;case"previous":return r(),this.decrement(),!0;case"add":return t?(r(),this.handleTemplateAdd(t),!0):(console.warn('FormController.perform("add"): a source element is required.'),!1);case"remove":return t?(r(),this.handleTemplateRemove(t),!0):(console.warn('FormController.perform("remove"): a source element is required.'),!1);default:return!1}}getFormData(e){if(e&&e?.key!=="Enter"||e&&!this.SUBMIT_ON_ENTER.includes(this.HMWCName(document.activeElement||void 0)))return;e&&e.preventDefault();let t={},r=new Set;return this.components.forEach(i=>{if(i.hasAttribute("formGroup")){if(r.has(i)||this.findFormGroup(i))return;r.add(i);let l=i.name;l&&(t[l]=this.collectGroupData(i));return}if(!this.FORM_COMPONENTS.includes(this.HMWCName(i)))return;let o=this.findFormGroup(i);if(o){if(r.has(o))return;if(this.findFormGroup(o)){r.add(o);return}r.add(o);let l=this.collectGroupData(o),h=o.name;h&&(t[h]=l)}else{if(!i.name)return;let a=this.getComponentValue(i);if(this.submitsToggleValue(i)){if(this.components.filter(h=>h.name===i.name&&this.submitsToggleValue(h)).length>1){let h=Array.isArray(t[i.name])?t[i.name]:[];a!==void 0&&h.push(a),t[i.name]=h}else a!==void 0&&(t[i.name]=a);return}if(Object.keys(t).includes(i.name)){let l=t[i.name];t[i.name]=[...Array.isArray(l)?l:[l],a]}else t[i.name]=a}}),t}submitsToggleValue(e){if(!this.host.hasAttribute("checkbox-values")||!Mr.includes(this.HMWCName(e)))return!1;let t=e.value;return t!=null&&String(t)!==""}findFormGroup(e){let t=e.parentElement;for(;t&&t!==this.host;){if(t.hasAttribute("formGroup"))return t;t=t.parentElement}return null}getComponentValue(e){if(Mr.includes(this.HMWCName(e)))return this.submitsToggleValue(e)?e.checked?String(e.value):void 0:this.binary?e.checked?1:0:e.checked;if(Array.isArray(e.value))return[...e.value];let t=String(e.value??"");if(this.HMWCName(e)==="input"&&e.getAttribute("type")==="number"){if(t==="")return;let r=Number(t);return isNaN(r)?t:r}if(!(this.HMWCName(e)==="input"&&e.getAttribute("type")==="date"&&t===""))return t}collectGroupData(e){let t=Array.from(e.children);return this.shouldCollectAsArray(t)?t.map(i=>this.collectRowData(i)).filter(i=>!(i==null||typeof i=="object"&&!Array.isArray(i)&&Object.keys(i).length===0)):this.collectObjectData(e)}shouldCollectAsArray(e){if(e.length===0)return!1;let t=e[0];return this.FORM_COMPONENTS.includes(this.HMWCName(t))&&t.name?!1:this.FORM_COMPONENTS.includes(this.HMWCName(t))?e.every(o=>!o.name):!0}collectRowData(e){let t={};return this.FORM_COMPONENTS.includes(this.HMWCName(e))?this.getComponentValue(e):(this.getFormComponentsInElement(e).forEach(i=>{i.name&&(t[i.name]=this.getComponentValue(i))}),this.collectNestedFormGroups(e,t),t)}collectObjectData(e){let t={};return this.getFormComponentsInElement(e).forEach(i=>{i.name&&(t[i.name]=this.getComponentValue(i))}),this.collectNestedFormGroups(e,t),t}collectNestedFormGroups(e,t){let r=i=>{Array.from(i.children).forEach(o=>{if(o.hasAttribute("formGroup")){let a=o.name;a&&(t[a]=this.collectGroupData(o))}else this.FORM_COMPONENTS.includes(this.HMWCName(o))||r(o)})};r(e)}getFormComponentsInElement(e){let t=[],r=i=>{Array.from(i.children).forEach(o=>{o.hasAttribute("formGroup")||(this.FORM_COMPONENTS.includes(this.HMWCName(o))?t.push(o):r(o))})};return r(e),t}addFromTemplate(e,t=1,r=!1){let i=this.findTemplate(e);if(!i)return console.warn("FormController: No formTemplate found"),[];let o=i.parentElement;if(!o)return[];let a=this.templateLimit(i,"max");a!==void 0&&(t=Math.min(t,a-this.templateRowCount(i)));let l=[],h=r?i:this.pristineTemplates.get(i)??i;for(let p=0;p<t;p++){let m=h.cloneNode(!0);m.removeAttribute("formTemplate"),m.formTemplate=!1,m.setAttribute("data-template-clone",""),m.style.display="",m.removeAttribute("hidden"),r||this.clearElementValues(m);let y=o.lastElementChild;y&&this.HMWCName(y)==="button"?o.insertBefore(m,y):o.appendChild(m),l.push(m)}this.refreshHMWCFormComponents(),this.updateData();let d=this.resolveTemplateGroup(i);return l.forEach(p=>{let m=p.parentElement,y=m?Array.prototype.indexOf.call(m.children,p):-1;this.host.emit("hmwc-template-add",{detail:{group:d,index:y}})}),l}addTemplateRow(e){let t=this.addFromTemplate(e);return t.length>0?t[0]:null}findTemplate(e){let t=e.parentElement;if(t){let o=Array.from(t.children).find(a=>a.formTemplate);if(o)return o}let r=e.closest("[formGroup]");if(r){let o=r.querySelector("[formTemplate]");if(o)return o}let i=t;for(;i&&i!==this.host;){let o=Array.from(i.children).find(a=>a.formTemplate);if(o)return o;i=i.parentElement}return null}removeFromTemplate(e){if(e.formTemplate){console.warn("FormController: Cannot remove a formTemplate element");return}if(e.hasAttribute("data-template-clone")){let o=this.findTemplate(e),a=o?this.templateLimit(o,"min")??1:1;if(o&&this.templateRowCount(o)<=a)return}let t=this.resolveTemplateGroup(e),r=e.parentElement,i=r?Array.prototype.indexOf.call(r.children,e):-1;e.remove(),this.refreshHMWCFormComponents(),this.updateData(),this.host.emit("hmwc-template-remove",{detail:{group:t,index:i}})}resolveTemplateGroup(e){let t=e.getAttribute("name");if(t)return t;let r=e.closest("[formGroup]");if(r){let i=r.getAttribute("name");if(i)return i}return null}removeTemplateRow(e){this.removeFromTemplate(e)}removeAllFromTemplates(){this.templates.forEach((e,t)=>{Array.from(t.children).forEach(r=>{r!==e&&r.hasAttribute("data-template-clone")&&r.remove()})}),this.refreshHMWCFormComponents(),this.updateData()}clearElementValues(e){if(this.FORM_COMPONENTS.includes(this.HMWCName(e))){let r=e;r.value="",r.checked=!1,r.removeAttribute("value"),r.removeAttribute("checked"),r.removeAttribute("invalid")}this.getFormComponentsInElement(e).forEach(r=>{r.value="",r.checked=!1,r.removeAttribute("value"),r.removeAttribute("checked"),r.removeAttribute("invalid")})}initializeTemplates(){this.templates.clear(),this.host.querySelectorAll("[formTemplate]").forEach(t=>{let r=t.parentElement;r&&this.templates.set(r,t),this.snapshotTemplate(t)})}snapshotTemplate(e){if(!(this.pristineTemplates.has(e)||this.pendingTemplates.has(e))){if(document.readyState==="loading"){this.pendingTemplates.add(e),document.addEventListener("DOMContentLoaded",()=>{this.pendingTemplates.delete(e),this.snapshotTemplate(e)},{once:!0});return}this.pristineTemplates.set(e,e.cloneNode(!0))}}initializeAccordionGroups(){if(this.accordionGroups.clear(),!this.controls.some(r=>r.increment||r.decrement))return;this.host.querySelectorAll("hmwc-accordion-group").forEach(r=>{let i=r,o=Array.from(r.querySelectorAll("hmwc-accordion"));o.length!==0&&(o.forEach((a,l)=>{a.step===void 0&&(a.step=l+1)}),this.accordionGroups.set(i,o),this.steps=o.length,(this.step===void 0||this.step===0)&&(this.step=1),o.forEach(a=>{this.listenerMap.has(a)||(this.listenerMap.set(a,!0),a.addEventListener("hmwc-expand",()=>{if(a.step!==void 0){if(this.accordionStepLock&&a.step!==this.step){a.hide();return}if(a.step>this.step)for(let l=this.step;l<a.step;l++)this.updateAccordionErrorIndicator(l);this.changeStep(a.step)}}))}))}),this.accordionGroups.size>0&&this.updateAccordionStepUI()}guardStepperAccordionConflict(){this.warnedStepperAccordionConflict||this.stepper&&this.accordionGroups.size>0&&(console.warn("[FormController] Both <hmwc-stepper> and <hmwc-accordion-group> are wired to the same form container. Declare one or the other, never both. See FORM_BUTTON_BEHAVIORS \xA73.6."),this.warnedStepperAccordionConflict=!0)}getComponentsInAccordion(e){return this.components.filter(t=>t.hasAttribute("formGroup")||!this.FORM_COMPONENTS.includes(this.HMWCName(t))?!1:e.contains(t))}getOuterFormComponents(){return this.components.filter(e=>{if(e.hasAttribute("formGroup")||!this.FORM_COMPONENTS.includes(this.HMWCName(e)))return!1;for(let[t]of this.accordionGroups)if(t.contains(e))return!1;return!0})}validateStep(e){let t=this.getAccordionForStep(e);if(!t)return!0;let r=this.getComponentsInAccordion(t),i=!0;return r.forEach(o=>{this.fieldValid(o)||(i=!1)}),i}getAccordionForStep(e){for(let[,t]of this.accordionGroups){let r=t.find(i=>i.step===e);if(r)return r}}isAccordionMultipleMode(){for(let[e]of this.accordionGroups)if(e.multiple)return!0;return!1}findNextInactiveStep(){for(let[,e]of this.accordionGroups){let t=[...e].sort((r,i)=>(r.step??0)-(i.step??0));for(let r of t)if(!r.active&&r.step!==void 0)return r.step}}updateAccordionErrorIndicator(e){let t=this.getAccordionForStep(e);if(!t)return;let r=this.validateStep(e),i=this.accordionErrorIndicators.get(t);if(!r&&!i){let o=document.createElement("hmwc-icon");o.setAttribute("src","exclamation-circle"),o.setAttribute("slot","controls"),o.setAttribute("tooltip","This step has validation errors"),o.setAttribute("style","color: var(--hmwc-color-danger-600); font-size: 1.1em;"),t.appendChild(o),this.accordionErrorIndicators.set(t,o)}else r&&i&&(i.remove(),this.accordionErrorIndicators.delete(t))}refreshAccordionErrorIndicators(){this.accordionGroups.forEach(e=>{e.forEach(t=>{t.step!==void 0&&this.updateAccordionErrorIndicator(t.step)})})}updateAccordionStepUI(){this.step!==void 0&&this.accordionGroups.forEach((e,t)=>{let r=t.multiple;e.forEach(i=>{i.step===this.step?(i.show(),i.disabled=!1):r?this.accordionStepLock&&i.step!==void 0&&i.step>this.step?i.disabled=!0:i.disabled=!1:(i.hide(),this.accordionStepLock&&i.step!==void 0&&i.step>this.step?i.disabled=!0:i.disabled=!1)})})}handleKeydown(e){if(e.key!=="Enter"||e.defaultPrevented||e.isComposing)return;let t=e.composedPath().filter(i=>i instanceof Element&&this.SUBMIT_ON_ENTER.includes(this.HMWCName(i))),r=t.find(i=>this.components.includes(i))??t[0];!r||r.textarea||this.submit(e)}updateData(){let e=this.getFormData();e&&(this.data=e)}HMWCName(e){return e?e.tagName.split("HMWC-")[1]?.toLowerCase()??"":""}updateButtonState(){let e=!0;if(this.accordionGroups.size>0){if(this.step!==void 0&&this.step>=this.steps){for(let r=1;r<=this.steps;r++)if(!this.validateStep(r)){e=!1;break}e&&this.getOuterFormComponents().forEach(r=>{this.fieldValid(r)||(e=!1)})}else this.step!==void 0&&!this.validateStep(this.step)&&(e=!1);this.refreshAccordionErrorIndicators()}else this.components.forEach(t=>{t.hasAttribute("formGroup")||(this.stepComponents.length?t.step===this.step&&(this.fieldValid(t)||(e=!1)):this.fieldValid(t)||(e=!1))});e&&this.editing&&!this.isDirty()&&(e=!1),this.pending&&(e=!1),e?this.getControl()?.removeAttribute("disabled"):this.getControl()?.setAttribute("disabled","true"),new Set([...this.actionControls,...this.linkedButtons()]).forEach(t=>t.refreshAutoDisable?.()),this.controls.forEach(t=>{if(!t.templateAdd&&!t.templateRemove)return;let r=t.hasAttribute(Ui);if(t.hasAttribute("disabled")&&!r)return;let i=!this.canPerform(t.templateAdd?"add":"remove",t);t.toggleAttribute("disabled",i),t.toggleAttribute(Ui,i)})}updateStepUI(){if(this.step===void 0)return;this.stepper&&(this.stepper.step=this.step),this.accordionGroups.size===0&&this.stepComponents.forEach(o=>{o.step===this.step?o.removeAttribute("hidden"):o.setAttribute("hidden","true")}),this.accordionGroups.size>0&&this.updateAccordionStepUI();let e=this.controls.find(o=>o.begin),t=this.controls.find(o=>o.increment),r=this.controls.find(o=>o.decrement),i=this.controls.find(o=>o.submit);this.accordionGroups.size>0?(e?.removeAttribute("hidden"),t?.removeAttribute("hidden"),r?.removeAttribute("hidden"),i?.removeAttribute("hidden"),e&&this.step===0?(e.removeAttribute("disabled"),t?.setAttribute("disabled","true"),r?.setAttribute("disabled","true"),i?.setAttribute("disabled","true")):this.step<this.steps?(e?.setAttribute("disabled","true"),t?.removeAttribute("disabled"),this.step===1?r?.setAttribute("disabled","true"):r?.removeAttribute("disabled"),i?.setAttribute("disabled","true")):this.step===this.steps&&(e?.setAttribute("disabled","true"),t?.setAttribute("disabled","true"),r?.removeAttribute("disabled"),i?.removeAttribute("disabled"))):e&&this.step===0?(e.removeAttribute("hidden"),t?.setAttribute("hidden","true"),r?.setAttribute("hidden","true"),i?.setAttribute("hidden","true")):this.step<this.steps?(e?.setAttribute("hidden","true"),t?.removeAttribute("hidden"),r?.removeAttribute("hidden"),i?.setAttribute("hidden","true")):this.step===this.steps&&(e?.setAttribute("hidden","true"),t?.setAttribute("hidden","true"),r?.removeAttribute("hidden"),i?.removeAttribute("hidden"))}getControl(){let e;return this.controls.forEach(t=>{this.step!==void 0&&this.step<this.steps?t.increment&&(e=t):t.submit&&(e=t)}),e}getHMWCFormComponents(){let e=[],t=[],r=[],i=[],o=a=>(a.forEach(l=>{let h=l,d=l;(l.hasAttribute("formGroup")||this.FORM_COMPONENTS.includes(this.HMWCName(l))&&!this.inFieldGroup(l)&&!e.includes(h))&&e.push(h),this.HMWCName(l)==="button"&&((d.begin||d.submit||d.increment||d.decrement||d.templateAdd||d.templateRemove)&&!t.includes(d)&&t.push(d),d.action&&!r.includes(d)&&r.push(d)),h.step!==void 0&&(this.HMWCName(l)==="stepper"?this.stepper=l:this.HMWCName(l)!=="accordion"&&!i.includes(h)&&i.push(h));let p=l.querySelectorAll("*");p.length&&o(Array.from(p))}),{components:e,controls:t,actionControls:r,stepComponents:i});return o(Array.from(this.host.children))}inFieldGroup(e){let t=e.parentElement;for(;t&&t!==this.host;){if(this.FIELD_GROUPS.includes(this.HMWCName(t)))return!0;t=t.parentElement}return!1}addElementListeners(e){if(this.listenerMap.has(e))return;this.listenerMap.set(e,!0);let t=this.HMWCName(e),r=o=>{let a=o.target;if(a?.hasAttribute("formGroup"))return!1;if(!o.detail?.autoFocused)return!0;let l=a?.getAttribute("value");return!(o.detail?.autoFocused&&!l)},i=()=>{this.validateEl(e),this.revalidateDependents(e),this.updateData(),this.updateDirty()};e.addEventListener("hmwc-input",i),t==="dropdown"?e.addEventListener("hmwc-change",i):(t!=="input"&&e.addEventListener("hmwc-change",i),e.addEventListener("hmwc-blur",o=>r(o)&&this.validateEl(e)))}addControlListeners(e){if(this.listenerMap.has(e))return;this.listenerMap.set(e,!0);let t=e,r=i=>()=>{let o=Date.now(),a=this.lastActionTime.get(e)??0;this.cooldownMs>0&&o-a<this.cooldownMs||i()!==!1&&this.lastActionTime.set(e,o)};t.begin?e.addEventListener("hmwc-click",r(()=>this.increment())):t.increment?e.addEventListener("hmwc-click",r(()=>this.increment())):t.decrement?e.addEventListener("hmwc-click",r(()=>this.decrement())):t.submit?e.addEventListener("hmwc-click",r(()=>!!this.submit())):t.templateAdd?e.addEventListener("hmwc-click",r(()=>this.handleTemplateAdd(e))):t.templateRemove&&e.addEventListener("hmwc-click",r(()=>this.handleTemplateRemove(e)))}handleTemplateAdd(e){if(!this.findTemplate(e)){console.warn("FormController: No template found for add button. Add formTemplate attribute to the element to clone.");return}this.addFromTemplate(e)}handleTemplateRemove(e){let t=this.findTemplateRow(e);t?this.removeFromTemplate(t):console.warn("FormController: Cannot determine which element to remove")}findTemplateRow(e){let t=e.parentElement;for(;t;){let i=t.parentElement;if(i?.hasAttribute("formGroup"))return t;t=i}let r=e.parentElement;return r&&r!==this.host?r:null}refreshHMWCFormComponents(){this.initializeTemplates();let{components:e,controls:t,actionControls:r,stepComponents:i}=this.getHMWCFormComponents();this.components=this.components.filter(a=>e.includes(a)),this.controls=this.controls.filter(a=>t.includes(a)),this.actionControls=this.actionControls.filter(a=>r.includes(a)),this.stepComponents=this.stepComponents.filter(a=>i.includes(a));let o=!1;e.forEach(a=>{this.components.includes(a)||(this.components.push(a),this.addElementListeners(a),o=!0)}),o&&!this.userEdited&&this.resetBaseline(),t.forEach(a=>{this.controls.includes(a)||(this.controls.push(a),this.addControlListeners(a))}),r.forEach(a=>{this.actionControls.includes(a)||this.actionControls.push(a)}),i.forEach(a=>{this.stepComponents.includes(a)||this.stepComponents.push(a)}),this.updateButtonState()}setupObserver(){if(this.observer)return;let e=t=>{let r=this.HMWCName(t),i=t;return this.FORM_COMPONENTS.includes(r)||r==="button"||t.hasAttribute("formGroup")||i.step!==void 0};this.observer=new MutationObserver(t=>{let r=!1;t.forEach(i=>{i.type==="childList"&&(i.addedNodes.forEach(o=>{if(o.nodeType===Node.ELEMENT_NODE){let a=o;e(a)&&(r=!0),a.querySelectorAll("*").forEach(h=>{e(h)&&(r=!0)})}}),i.removedNodes.forEach(o=>{if(o.nodeType===Node.ELEMENT_NODE){let a=o;e(a)&&(r=!0),a.querySelectorAll("*").forEach(h=>{e(h)&&(r=!0)})}}))}),r&&this.refreshHMWCFormComponents()}),this.observer.observe(this.host,{childList:!0,subtree:!0})}hostUpdated(){let e=this.host.getAttribute("form-cooldown");if(e!==null&&e!==""){let r=Number(e);this.cooldownMs=Number.isFinite(r)&&r>=0?r:s.ACTION_COOLDOWN_MS}else this.cooldownMs=s.ACTION_COOLDOWN_MS;if(this.refreshHMWCFormComponents(),this.syncUnloadGuard(),!this.stepInitialized&&this.stepComponents.length&&this.accordionGroups.size===0){this.stepInitialized=!0;let r=this.controls.find(i=>i.begin);this.step=r?0:1}if(this.initialized)return;this.initialized=!0;let t=this.root.querySelector("div");if(t){if(!(t.parentNode instanceof HTMLFormElement)){let r=Object.assign(document.createElement("form"),{styleMap:new Map([["display","contents"]])});r.append(t),this.root.append(r)}this.initializeTemplates(),this.initializeAccordionGroups(),this.guardStepperAccordionConflict(),this.updateStepUI(),this.host.addEventListener("keydown",this.boundKeydownHandler),this.setupObserver(),this.resetBaseline()}}hostConnected(){this.refreshHMWCFormComponents(),this.setupObserver(),this.host.addEventListener("keydown",this.boundKeydownHandler),this.syncUnloadGuard()}hostDisconnected(){this.observer&&(this.observer.disconnect(),this.observer=null),this.host.removeEventListener("keydown",this.boundKeydownHandler),window.removeEventListener("beforeunload",this.boundBeforeUnload)}constructor(e){this.initialized=!1,this.warnedUnconfirmedToast=!1,this.stepInitialized=!1,this.binary=!1,this.FORM_COMPONENTS=["input","dropdown","checkbox","switch","radio-group","checkbox-group","calendar","combobox"],this.FIELD_GROUPS=["checkbox-group","radio-group"],this.SUBMIT_ON_ENTER=["input","combobox"],this.observer=null,this.listenerMap=new WeakMap,this.boundKeydownHandler=this.handleKeydown.bind(this),this.boundBeforeUnload=this.handleBeforeUnload.bind(this),this.pending=!1,this.settling=null,this.pendingButtons=new Map,this.validatorErrors=new WeakMap,this.baseline=null,this.baselineQueued=!1,this.userEdited=!1,this._dirty=!1,this.cooldownMs=s.ACTION_COOLDOWN_MS,this.lastActionTime=new WeakMap,this.warnedStepperAccordionConflict=!1,this.templates=new Map,this.pristineTemplates=new WeakMap,this.pendingTemplates=new WeakSet,this.accordionGroups=new Map,this.accordionStepLock=!1,this.accordionErrorIndicators=new WeakMap,this.editing=!1,this.snapshot=null,this.components=[],this.controls=[],this.actionControls=[],this.stepComponents=[],this.errors=[],this.data={},this.host=e,this.root=this.host.shadowRoot,this.step=this.host.step,this.steps=this.host.steps??1,e.addController(this)}};Dr.ACTION_COOLDOWN_MS=500;var Hi=Dr;var qi=f`
  ${mt}

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
`;var $e=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},j=class extends g{get pending(){return this.hasAttribute("pending")}get dirty(){return this.hasAttribute("dirty")}connectedCallback(){super.connectedCallback(),this.form&&(this.controllers.form??=new Hi(this)),this.img&&this.style.setProperty("--image-url",`url(${this.img})`),this.label&&!this.hasUpdated&&this.controllers.slot.insert(Object.assign(document.createElement("slot"),{name:"label",part:"label",innerHTML:this.label}))}constructor(){super(),this.validationType="outline"}};j.styles=qi;$e([n({type:String})],j.prototype,"label",void 0);$e([n({type:Boolean,reflect:!0})],j.prototype,"fluid",void 0);$e([n({type:Boolean,reflect:!0})],j.prototype,"scrollable",void 0);$e([n({type:Boolean,reflect:!0})],j.prototype,"center",void 0);$e([n({type:String,reflect:!0})],j.prototype,"align",void 0);$e([n({type:String,reflect:!0})],j.prototype,"justify",void 0);$e([n({type:String,reflect:!0})],j.prototype,"gap",void 0);$e([n({type:String,reflect:!0})],j.prototype,"pad",void 0);$e([n({type:String,reflect:!0})],j.prototype,"round",void 0);$e([n({type:Number,reflect:!0})],j.prototype,"elevation",void 0);$e([n({type:String,reflect:!0})],j.prototype,"img",void 0);$e([n({type:Boolean,reflect:!0})],j.prototype,"square",void 0);$e([n({type:Boolean,reflect:!0})],j.prototype,"form",void 0);$e([n({type:Number})],j.prototype,"steps",void 0);$e([n({type:String})],j.prototype,"validationType",void 0);$e([n({type:Boolean,reflect:!0,attribute:"validate-hidden"})],j.prototype,"validateHidden",void 0);$e([n({type:String,reflect:!0,attribute:"success-message"})],j.prototype,"successMessage",void 0);$e([n({type:Boolean,reflect:!0,attribute:"reset-on-success"})],j.prototype,"resetOnSuccess",void 0);$e([n({type:Boolean,reflect:!0,attribute:"guard-dirty"})],j.prototype,"guardDirty",void 0);$e([n({type:Boolean,reflect:!0,attribute:"checkbox-values"})],j.prototype,"checkboxValues",void 0);var nt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ot=s=>(...e)=>({_$litDirective$:s,values:e}),xt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var v=Ot(class extends xt{constructor(s){if(super(s),s.type!==nt.ATTRIBUTE||s.name!=="class"||s.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(let r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}let t=s.element.classList;for(let r of this.st)r in e||(t.remove(r),this.st.delete(r));for(let r in e){let i=!!e[r];i===this.st.has(r)||this.nt?.has(r)||(i?(t.add(r),this.st.add(r)):(t.remove(r),this.st.delete(r)))}return ze}});var b=s=>s??x;var Wi=f`
  :host {
    --icon-color: inherit;
    --icon-size: inherit;

    display: contents;
  }

  /* "box": a real box on the host, for margins, cursor and drag handles. */
  :host([box]) {
    display: inline-flex;
    vertical-align: middle;
  }

  /* An icon with a tooltip is focusable, so it needs a box: to take focus,
     to show the focus ring, and to place the tooltip against. */
  :host([tabindex]) {
    display: inline-flex;
    vertical-align: middle;
    border-radius: var(--hmwc-border-radius-small);
    cursor: default;
  }

  :host([tabindex]:focus-visible) {
    outline: var(--hmwc-focus-ring);
    outline-offset: var(--hmwc-focus-ring-offset);
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
`;var et=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},ei="1.13.1",ps=`https://cdn.jsdelivr.net/npm/bootstrap-icons@${ei}/font/bootstrap-icons.css`,Vi=`https://cdn.jsdelivr.net/npm/bootstrap-icons@${ei}/font/fonts/bootstrap-icons`,Ki="__hmwcIconFont",ms=(s,e)=>{let t=s.split(".").map(Number),r=e.split(".").map(Number);for(let i=0;i<3;i++){let o=(t[i]||0)-(r[i]||0);if(o)return o}return 0};function Gi(s=typeof document>"u"?null:document){let e=s;if(!s||!e||e[Ki]||(e[Ki]=!0,Array.from(s.querySelectorAll('link[rel~="stylesheet"][href*="bootstrap-icons"]')).some(o=>{let a=/bootstrap-icons@(\d+(?:\.\d+){0,2})/.exec(o.getAttribute("href")??"")?.[1];return!a||ms(a,ei)>=0}))||typeof CSSStyleSheet>"u"||!("adoptedStyleSheets"in s))return;let i=new CSSStyleSheet;i.replaceSync(`@font-face { font-display: block; font-family: "bootstrap-icons"; src: url("${Vi}.woff2") format("woff2"), url("${Vi}.woff") format("woff"); }`),s.adoptedStyleSheets=[...s.adoptedStyleSheets,i]}var $=class extends g{constructor(){super(...arguments),this._ownTabIndex=!1}labelUpdate(){let e=this.label||this.tooltip;e?(this.setAttribute("role","img"),this.removeAttribute("aria-hidden"),this.setAttribute("aria-label",e)):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true")),this.tooltip&&!this.hasAttribute("tabindex")?(this.setAttribute("tabindex","0"),this._ownTabIndex=!0):!this.tooltip&&this._ownTabIndex&&(this.removeAttribute("tabindex"),this._ownTabIndex=!1)}connectedCallback(){super.connectedCallback(),Gi()}firstUpdated(){this.labelUpdate()}render(){if(!this.src)return x;let e=v({icon:!0,bi:!0,[`bi-${this.src}`]:!0,xs:!!this.xs,sm:!!this.sm,md:!!this.md,lg:!!this.lg,xl:!!this.xl,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`<link rel="stylesheet" href=${ps} /><i part="base" class=${e}></i>`}};$.styles=Wi;et([n({type:String,reflect:!0})],$.prototype,"src",void 0);et([n({type:String,reflect:!0})],$.prototype,"label",void 0);et([n({type:Boolean,reflect:!0})],$.prototype,"primary",void 0);et([n({type:Boolean,reflect:!0})],$.prototype,"success",void 0);et([n({type:Boolean,reflect:!0})],$.prototype,"neutral",void 0);et([n({type:Boolean,reflect:!0})],$.prototype,"warning",void 0);et([n({type:Boolean,reflect:!0})],$.prototype,"danger",void 0);et([n({type:Boolean,reflect:!0})],$.prototype,"xs",void 0);et([n({type:Boolean,reflect:!0})],$.prototype,"sm",void 0);et([n({type:Boolean,reflect:!0})],$.prototype,"md",void 0);et([n({type:Boolean,reflect:!0})],$.prototype,"lg",void 0);et([n({type:Boolean,reflect:!0})],$.prototype,"xl",void 0);et([n({type:Boolean,reflect:!0})],$.prototype,"box",void 0);et([u(["label","tooltip"])],$.prototype,"labelUpdate",null);$.define("hmwc-icon",$);var Yi=f`
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

  /* No variant: when the page sets an accent colour (--hmwc-accent-color),
     a soft tint of it; otherwise unchanged. The tint properties are invalid
     while the accent is unset, so the fallbacks apply. */
  :host(:not([primary]):not([success]):not([neutral]):not([warning]):not([danger])) {
    --accent-soft: color-mix(in srgb, var(--hmwc-accent-color) 12%, var(--hmwc-panel-background-color));
    --accent-ink: color-mix(in srgb, var(--hmwc-accent-color) 80%, var(--hmwc-color-neutral-1000));
    --accent-line: color-mix(in srgb, var(--hmwc-accent-color) 24%, var(--hmwc-panel-background-color));
    --badge-background: var(--accent-soft, var(--hmwc-panel-background-color));
    --badge-label-color: var(--accent-ink, var(--hmwc-color-neutral-750));
    --badge-border-color: var(--accent-line, var(--hmwc-panel-border-color));
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
      box-shadow: 0 0 0 calc(0.5 * var(--hmwc-rem, 1rem)) transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;var lt=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},J=class extends g{render(){let e=v({badge:!0,icon:!!this.icon||this.controllers.slot.test("icon"),pill:!!this.pill,pulse:!!this.pulse,selectable:!!this.selectable,sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
      <div part="base" class=${e} role="status">
        <slot part="label" class="badge__label">${this.label?this.label:""}</slot>
        <slot name="icon" part="icon" class="badge__icon">${this.icon?c`<hmwc-icon src=${this.icon}></hmwc-icon>`:""}</slot>
      </div>
    `}};J.styles=Yi;J.dependencies=[$];J.slots=["[default]","icon"];lt([n({type:Boolean,reflect:!0})],J.prototype,"selectable",void 0);lt([n({type:Boolean,reflect:!0})],J.prototype,"pulse",void 0);lt([n({type:Boolean,reflect:!0})],J.prototype,"primary",void 0);lt([n({type:Boolean,reflect:!0})],J.prototype,"success",void 0);lt([n({type:Boolean,reflect:!0})],J.prototype,"neutral",void 0);lt([n({type:Boolean,reflect:!0})],J.prototype,"warning",void 0);lt([n({type:Boolean,reflect:!0})],J.prototype,"danger",void 0);lt([n({type:Boolean,reflect:!0})],J.prototype,"sm",void 0);lt([n({type:Boolean,reflect:!0})],J.prototype,"md",void 0);lt([n({type:Boolean,reflect:!0})],J.prototype,"lg",void 0);lt([n({type:Boolean,reflect:!0})],J.prototype,"pill",void 0);lt([n({type:String})],J.prototype,"label",void 0);lt([n({type:String,reflect:!0})],J.prototype,"icon",void 0);J.define("hmwc-badge",J);var Qi=Symbol.for(""),us=s=>{if(s?.r===Qi)return s?._$litStatic$};var Yt=(s,...e)=>({_$litStatic$:e.reduce((t,r,i)=>t+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+s[i+1],s[0]),r:Qi}),Xi=new Map,ti=s=>(e,...t)=>{let r=t.length,i,o,a=[],l=[],h,d=0,p=!1;for(;d<r;){for(h=e[d];d<r&&(o=t[d],(i=us(o))!==void 0);)h+=i+e[++d],p=!0;d!==r&&l.push(o),a.push(h),d++}if(d===r&&a.push(e[r]),p){let m=a.join("$$lit$$");(e=Xi.get(m))===void 0&&(a.raw=a,Xi.set(m,e=a)),t=l}return s(e,...t)},ve=ti(c),Ac=ti(Ri),Ec=ti(Mi);var Ji=f`
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
      --spinner-size: calc(1 * var(--hmwc-rem, 1rem));
    }
    &.md {
      --spinner-size: calc(1.5 * var(--hmwc-rem, 1rem));
    }
    &.lg {
      --spinner-size: calc(2.25 * var(--hmwc-rem, 1rem));
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
`;var vt=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},ie=class extends g{constructor(){super(...arguments),this.active=!0,this.label="Loading"}start(){this.active||(this.active=!0)}stop(){this.active&&(this.active=!1)}toggle(){this.active=!this.active}render(){let e=v({spinner:!0,active:!!this.active,"speed-slower":this.speed==="slower","speed-slow":this.speed==="slow","speed-fast":this.speed==="fast","speed-faster":this.speed==="faster",sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
      <svg part="base" class=${e} role="progressbar" aria-label=${this.label}>
        <circle part="track" class="spinner__track"></circle>
        <circle part="indicator" class="spinner__indicator"></circle>
      </svg>
    `}};ie.styles=Ji;vt([n({type:Boolean,reflect:!0})],ie.prototype,"active",void 0);vt([n({type:Boolean,reflect:!0})],ie.prototype,"primary",void 0);vt([n({type:Boolean,reflect:!0})],ie.prototype,"success",void 0);vt([n({type:Boolean,reflect:!0})],ie.prototype,"neutral",void 0);vt([n({type:Boolean,reflect:!0})],ie.prototype,"warning",void 0);vt([n({type:Boolean,reflect:!0})],ie.prototype,"danger",void 0);vt([n({type:Boolean,reflect:!0})],ie.prototype,"sm",void 0);vt([n({type:Boolean,reflect:!0})],ie.prototype,"md",void 0);vt([n({type:Boolean,reflect:!0})],ie.prototype,"lg",void 0);vt([n({type:String,reflect:!0})],ie.prototype,"speed",void 0);vt([n({type:String})],ie.prototype,"label",void 0);ie.define("hmwc-spinner",ie);var Zi=f`
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
        width: calc(1.25 * var(--hmwc-rem, 1rem));
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

      /* Filled buttons darken on hover. Lightening to 500 left white text at
         under 3:1 (2.8:1 on primary-500); 700 keeps it above 5:1. No glow:
         the colour change is the hover. */
      &.primary {
        --button-color: var(--hmwc-color-neutral-0);
        --button-background: var(--hmwc-color-primary-700);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-primary-700);
        --button-shadow: none;

        &.outline {
          --button-color: var(--hmwc-color-neutral-0);
        }
        &.basic.icon {
          --icon-color: var(--hmwc-color-primary-400);
        }
      }

      &.success {
        --button-color: var(--hmwc-color-neutral-0);
        --button-background: var(--hmwc-color-success-700);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-success-700);
        --button-shadow: none;

        &.outline {
          --button-color: var(--hmwc-color-neutral-0);
        }

        &.basic.icon {
          --icon-color: var(--hmwc-color-success-400);
        }
      }

      &.neutral {
        --button-color: var(--hmwc-color-neutral-0);
        --button-background: var(--hmwc-color-neutral-700);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-neutral-700);
        --button-shadow: none;

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
        --button-background: var(--hmwc-color-danger-700);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-danger-700);
        --button-shadow: none;

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

      /* Filled (and outline, which fill on hover) go one step darker again
         when pressed, rather than flipping to a pale fill. The outline case
         used to put primary-700 text on a primary-700 fill. */
      &.primary {
        --button-color: var(--hmwc-color-neutral-0);
        --button-background: var(--hmwc-color-primary-800);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-primary-800);
      }

      &.success {
        --button-color: var(--hmwc-color-neutral-0);
        --button-background: var(--hmwc-color-success-800);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-success-800);
      }

      &.neutral {
        --button-color: var(--hmwc-color-neutral-0);
        --button-background: var(--hmwc-color-neutral-800);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-neutral-800);
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
        --button-color: var(--hmwc-color-neutral-0);
        --button-background: var(--hmwc-color-danger-800);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-danger-800);
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
`;var B=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},Br="data-auto-disabled",k=class s extends g{constructor(){super(...arguments),this._autoDisabledLastValue=null}click(){this.button?this.button.click():this.updateComplete.then(()=>this.button?.click())}focus(e){this.button?this.button.focus(e):this.updateComplete.then(()=>this.button?.focus(e))}blur(){this.button?this.button.blur():this.updateComplete.then(()=>this.button?.blur())}isLink(){return!!this.href}findFormContainer(){return this.for?this.getRootNode().getElementById?.(this.for)??document.getElementById(this.for):this.closest("[form]")}handleClick(){if(this.disabled){if(this.submit||this.action==="submit"){let e=this.findFormContainer()?.controllers?.form;e&&!e.pending&&e.validate()}return}if(this.emit("hmwc-click"),this.action){let e=this.findFormContainer();if(e?.controllers?.form){e.controllers.form.perform(this.action,this);return}if(this.for&&s._warnForMissing(this.for),this.action==="cancel"){this.emit("hmwc-cancel");return}this.action!=="submit"&&this.action!=="reset"&&s._warnNoContainer(this.action)}}static _warnForMissing(e){s._warnedFor.has(e)||(s._warnedFor.add(e),console.warn(`[hmwc-button] for="${e}" but no <hmwc-* form> container with that id was found.`))}static _warnNoContainer(e){s._warnedActions.has(e)||(s._warnedActions.add(e),console.warn(`[hmwc-button] action="${e}" but no surrounding <hmwc-* form> container or native <form> found.`))}refreshAutoDisable(){if(!this.action)return;let t=this.findFormContainer()?.controllers?.form;if(!t||typeof t.canPerform!="function")return;let r=!t.canPerform(this.action,this);if(this._autoDisabledLastValue===null&&this.disabled&&this.hasAttribute(Br)&&(this._autoDisabledLastValue=!0),this._autoDisabledLastValue===null){if(r&&!this.disabled)this.disabled=!0,this.toggleAttribute(Br,!0);else if(!r&&this.disabled){this._autoDisabledLastValue=!1;return}this._autoDisabledLastValue=!!this.disabled;return}!!this.disabled===this._autoDisabledLastValue&&r!==this._autoDisabledLastValue&&(this.disabled=r,this.toggleAttribute(Br,r),this._autoDisabledLastValue=r)}handleActionChange(){this._autoDisabledLastValue!==null&&!!this.disabled===this._autoDisabledLastValue&&(this.disabled=!1,this.removeAttribute(Br)),this._autoDisabledLastValue=null,this.refreshAutoDisable()}handleFocus(){this.emit("hmwc-focus")}handleBlur(){this.emit("hmwc-blur")}handleMouseIn(){this.labelOnHover&&(this.label=this.labelOnHover)}handleMouseOut(){this.labelOnHover&&(this.label=this._label)}connectedCallback(){super.connectedCallback(),this._label=this.label||this.textContent||"",!this.sm&&!this.md&&!this.lg&&(this.md=!0)}render(){let e=this.isLink()?Yt`a`:Yt`button`,t=v({button:!0,icon:!!this.icon,prefix:!!this.prefix||!!this.img,suffix:!!this.suffix,invert:!!this.invert,basic:!!this.basic,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger,small:!!this.sm,medium:!!this.md,large:!!this.lg,loading:!!this.loading,circle:!!this.circle,pill:!!this.pill,outline:!!this.outline,disabled:!!this.disabled,fluid:!!this.fluid}),r=ve`
      <${e}
        part='base'
        class='${t}'
        type=${this.submit||this.action==="submit"?"submit":this.reset||this.action==="reset"?"reset":"button"}
        title=${b(this.title||void 0)}
        target=${b(this.isLink()?this.target:void 0)}
        download=${b(this.isLink()?this.download:void 0)}
        href=${b(this.isLink()?this.href:void 0)}
        value=${b(this.isLink()?void 0:this.value)}
        role=${b(this.isLink()?void 0:"button")}
        aria-disabled=${b(this.disabled)}
        aria-label=${b(this.label||this.accessibleLabel||void 0)}
        aria-expanded=${b(this.isLink()?void 0:this.accessibleExpanded)}
        aria-pressed=${b(this.isLink()?void 0:this.accessiblePressed)}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @mouseenter=${this.handleMouseIn}
        @mouseout=${this.handleMouseOut}
      >

        <slot name="prefix" part="prefix" class="button__prefix">
          ${this.prefix?ve`<hmwc-icon src=${this.prefix}></hmwc-icon>`:this.img?ve`<img src=${this.img} alt="btn-img" />`:""}
        </slot>

        <slot name='icon' class='button__icon'>
          ${this.icon&&!this.loading?ve`<hmwc-icon part="icon" src=${this.icon} ?flex=${this.basic}></hmwc-icon>`:""}
        </slot>

        ${this.icon?"":ve`<slot name="label" part="label" class="button__label">${this.label}</slot>`}

        <slot name="suffix" part="suffix" class="button__suffix">
          ${this.suffix?ve`<hmwc-icon src=${this.suffix}></hmwc-icon>`:""}
        </slot>

        <slot name="badge" part="badge" class="button__badge"></slot>

        ${this.loading?ve`<hmwc-spinner sm part="spinner"></hmwc-spinner>`:""}

      </${e}>
    `;return this.disabled&&this.disabledReason?ve` <hmwc-tooltip label=${this.disabledReason} placement="top" ?fluid=${this.fluid}> ${r} </hmwc-tooltip> `:r}};k.styles=Zi;k.dependencies=[$,ie,J];k.slots=["prefix"];k._warnedActions=new Set;k._warnedFor=new Set;B([n({type:String})],k.prototype,"label",void 0);B([n({type:String})],k.prototype,"labelOnHover",void 0);B([n({type:String})],k.prototype,"icon",void 0);B([n({type:String})],k.prototype,"prefix",void 0);B([n({type:String})],k.prototype,"suffix",void 0);B([n({type:String})],k.prototype,"img",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"primary",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"success",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"neutral",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"warning",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"danger",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"invert",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"basic",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"sm",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"md",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"lg",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"outline",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"pill",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"circle",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"fluid",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"disabled",void 0);B([n({type:String,attribute:"disabled-reason"})],k.prototype,"disabledReason",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"loading",void 0);B([n({type:String,attribute:"aria-label"})],k.prototype,"accessibleLabel",void 0);B([n({type:String,attribute:"aria-expanded"})],k.prototype,"accessibleExpanded",void 0);B([n({type:String,attribute:"aria-pressed"})],k.prototype,"accessiblePressed",void 0);B([n({type:String})],k.prototype,"value",void 0);B([n({type:String,reflect:!0})],k.prototype,"action",void 0);B([n({type:String,reflect:!0})],k.prototype,"for",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"submit",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"begin",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"increment",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"decrement",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"templateAdd",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"templateRemove",void 0);B([n({type:Boolean,reflect:!0})],k.prototype,"reset",void 0);B([n({type:String,reflect:!1})],k.prototype,"href",void 0);B([n({type:String})],k.prototype,"target",void 0);B([n({type:String})],k.prototype,"download",void 0);B([I(".button")],k.prototype,"button",void 0);B([u("action")],k.prototype,"handleActionChange",null);customElements.get("hmwc-button")||k.define("hmwc-button",k);var eo=f`
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
    --accordion-count-background: var(--hmwc-color-neutral-100);
    --accordion-count-color: var(--hmwc-color-neutral-700);

    --container-padding: var(--hmwc-spacing-large);
    --container-width: 100%;

    display: block;
  }

  /* A standalone accordion scales and fades in as it joins the page (the base
     component's "scale-in"). That entrance is a transform, so it is dropped
     for people who ask for less motion. */
  @media (prefers-reduced-motion: reduce) {
    :host {
      animation: none;
    }
  }

  .accordion {
    position: relative;
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
      /* The summary's own background (hover, open) follows the accordion's
         corners, so it doesn't square off a rounded group border. */
      border-top-left-radius: var(--accordion-border-top-left-radius, var(--accordion-border-radius));
      border-top-right-radius: var(--accordion-border-top-right-radius, var(--accordion-border-radius));
      border-bottom-left-radius: var(--accordion-border-bottom-left-radius, var(--accordion-border-radius));
      border-bottom-right-radius: var(--accordion-border-bottom-right-radius, var(--accordion-border-radius));
      transition: background-color var(--hmwc-transition-fast) var(--hmwc-easing-standard);

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
          transition: color var(--hmwc-transition-fast) var(--hmwc-easing-standard);
        }
      }

      & .accordion__controls {
        display: flex;
        justify-content: end;
        width: 100%;
        margin-right: var(--hmwc-spacing-x-large);

        & hmwc-button {
          --icon-size: calc(1.1 * var(--hmwc-rem, 1rem));
        }
      }

      & .accordion__trigger {
        display: flex;
        align-items: center;
        font-size: var(--accordion-trigger-size);
        color: var(--accordion-trigger-color);
        /* The chevron turns about its own centre and never changes place:
           hover is colour only. It used to nudge on hover (sideways when
           closed, downwards when open), which put it out of line with an icon
           beside it. This is the closing turn; the opening one is set on
           ".active" below, so each keeps time with the panel. */
        transition: rotate var(--accordion-collapse-duration) var(--hmwc-easing-standard),
          color var(--hmwc-transition-fast) var(--hmwc-easing-standard);
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
      background: var(--accordion-summary-hover-background, none);

      & .accordion__details .accordion__label {
        color: var(--hmwc-color-neutral-1000);
      }

      & .accordion__trigger {
        color: var(--hmwc-color-neutral-900);
      }
    }

    &.active {
      & .accordion__trigger {
        rotate: 90deg;
        transition: rotate var(--accordion-expand-duration) var(--hmwc-easing-standard),
          color var(--hmwc-transition-fast) var(--hmwc-easing-standard);
      }

      /* An open accordion's icon takes the page's accent colour, when it
         sets one (--hmwc-accent-color); otherwise it stays as it was. */
      & .accordion__details {
        --icon-color: var(--hmwc-accent-color, var(--accordion-icon-color));
      }

      & .accordion__summary {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        box-shadow: inset 0 calc(-1 * var(--hmwc-panel-border-width)) 0 var(--accordion-summary-active-border-color, transparent);
        background: var(--accordion-summary-active-background, none);
      }
    }

    /* The header's own controls: help, refresh and count, after any slotted
       controls and before the chevron, each centred in the same small box. */
    & .accordion__extras {
      display: inline-flex;
      align-items: center;
      gap: var(--hmwc-spacing-2x-small);
      margin-inline-end: var(--hmwc-spacing-small);

      & > * {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: var(--hmwc-input-height-small);
      }
    }

    &.extras .accordion__controls {
      margin-right: var(--hmwc-spacing-2x-small);
    }

    &.trigger-start .accordion__extras {
      margin-inline-end: 0;
    }

    & .accordion__refresh-space {
      width: var(--hmwc-input-height-small);
      height: var(--hmwc-input-height-small);
    }

    /* Laid over its space in the header (placed by the component). */
    & .accordion__refresh {
      position: absolute;
      top: 0;
      left: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--hmwc-input-height-small);
      height: var(--hmwc-input-height-small);
      z-index: 1;
    }

    & .accordion__help {
      height: var(--hmwc-input-height-small);
      color: var(--hmwc-color-neutral-500);
      --icon-color: var(--hmwc-color-neutral-500);
      font-size: var(--hmwc-font-size-large);
      cursor: help;
      transition: opacity var(--hmwc-transition-fast) var(--hmwc-easing-standard);
    }

    /* With a pointer, the help icon shows while it is over the header, so a
       long list of sections isn't a column of icons. */
    @media (hover: hover) {
      & .accordion__help {
        opacity: 0;
      }

      /* Also while the icon itself has keyboard focus: it is a tab stop (for
         its tooltip), and was focused while still invisible. */
      & .accordion__summary:hover .accordion__help,
      & .accordion__summary:focus-visible .accordion__help,
      & .accordion__help:focus-visible {
        opacity: 1;
      }
    }

    /* The count: a soft tint of the page's accent colour when it sets one,
       otherwise a quiet grey pill. Zero is muted. */
    & .accordion__count {
      --accent-soft: color-mix(in srgb, var(--hmwc-accent-color) 12%, var(--hmwc-panel-background-color));
      --accent-ink: color-mix(in srgb, var(--hmwc-accent-color) 80%, var(--hmwc-color-neutral-1000));
      --badge-background: var(--accent-soft, var(--accordion-count-background));
      --badge-label-color: var(--accent-ink, var(--accordion-count-color));
      --badge-border-color: transparent;
      --badge-shadow: none;

      &.muted {
        --badge-background: var(--hmwc-color-neutral-100);
        --badge-label-color: var(--hmwc-color-neutral-600);
      }
    }

    & .accordion__sr {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
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
        /* A grid item's automatic minimum width is its content's min-content
           width once it stops clipping (open: overflow visible). Without this,
           wide content (a data-table's nowrap rows) widened the column past
           the accordion, so the content ran out of it and never scrolled. */
        min-width: 0;
        /* And its automatic minimum height is its content's height, which is
           what the 0fr to 1fr row animates against: see the open state. */
        min-height: 0;
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

    /* The content keeps clipping until the row has finished opening, then
       stops (a menu or tooltip inside an open accordion must be able to leave
       it). "overflow" used to switch to visible the moment the accordion
       opened; an unclipped grid item cannot be shorter than its content, so
       the row jumped straight to the content's height and only the padding
       animated. Opening now grows from nothing, as closing always shrank to
       it. The switch is a discrete transition with no duration, held back by
       the opening time. A browser without discrete transitions switches at
       once and would paint the content over whatever follows while the row
       grows, so there the content keeps its automatic minimum height and
       opens as it did before. */
    @supports (transition-behavior: allow-discrete) {
      &.active > .accordion__body > slot {
        transition: padding-block var(--accordion-expand-duration) var(--hmwc-easing-decelerate),
          opacity var(--hmwc-transition-fast) var(--hmwc-easing-standard) var(--hmwc-transition-x-fast),
          translate var(--hmwc-transition-fast) var(--hmwc-easing-decelerate) var(--hmwc-transition-x-fast),
          overflow 0s linear var(--accordion-expand-duration);
        transition-behavior: allow-discrete;
      }
    }

    @supports not (transition-behavior: allow-discrete) {
      &.active > .accordion__body > slot {
        min-height: auto;
      }
    }

    /* DoD §9. The accordion animates grid-template-rows, rotate, translate,
       opacity, padding-block and (as a held-back switch) overflow. State
       changes still apply — only the motion stops. */
    @media (prefers-reduced-motion: reduce) {
      /* The trigger is named through the summary, and again for the open
         state: its transitions are declared at that depth, and the shorter
         selector here lost to them, so the chevron kept turning. */
      & .accordion__label,
      & .accordion__summary .accordion__trigger,
      &.active .accordion__summary .accordion__trigger,
      & .accordion__summary,
      & .accordion__help,
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
`;var We=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},Z=class extends j{constructor(){super(...arguments),this.opened=!1,this.triggerPlacement="end",this.placeRefresh=()=>{let e=this.shadowRoot?.querySelector(".accordion__refresh-space"),t=this.shadowRoot?.querySelector(".accordion__refresh"),r=this.shadowRoot?.querySelector(".accordion");if(!e||!t||!r)return;let i=e.getBoundingClientRect(),o=r.getBoundingClientRect();t.style.top=`${i.top-o.top-r.clientTop}px`,t.style.left=`${i.left-o.left-r.clientLeft}px`}}show(){this.disabled||(this.active=!0)}hide(){this.disabled||(this.active=!1)}toggle(e){e&&e.preventDefault(),this.active?this.hide():this.show()}contextMenuItems(e){if(!this.isHeaderPath(e.path))return[];let t=this.parentElement;if(!t||t.tagName==="HMWC-ACCORDION-GROUP")return[];let r=Array.from(t.children).filter(i=>i.tagName==="HMWC-ACCORDION"&&!i.disabled);return r.length<2?[]:[{value:"expand-all",label:"Expand all",icon:"arrows-expand",disabled:r.every(i=>i.active),action:()=>r.forEach(i=>i.show())},{value:"collapse-all",label:"Collapse all",icon:"arrows-collapse",disabled:r.every(i=>!i.active),action:()=>r.forEach(i=>i.hide())}]}isHeaderPath(e=[]){return!this.body||!e.includes(this.body)}focus(){this.summary.focus()}blur(){this.body?.blur(),this.summary.blur()}handleControlsClick(e){if(e.target===e.currentTarget)return;e.stopPropagation(),e.composedPath().some(r=>r instanceof HTMLAnchorElement&&!!r.href)||e.preventDefault()}handleExtrasClick(e){e.target!==e.currentTarget&&(e.stopPropagation(),e.preventDefault())}handleRefresh(e){e.stopPropagation(),this.emit("hmwc-click",{detail:{action:"refresh"}})}handleKeyboardInput(e){let t=["Enter"," "],r=["ArrowUp","ArrowLeft"],i=["ArrowDown","ArrowRight"];[...t,...r,...i].includes(e.key)&&(e.preventDefault(),t.includes(e.key)?this.active?this.hide():this.show():r.includes(e.key)?this.hide():i.includes(e.key)&&this.show())}iconUpdate(){this.icon&&this.icon instanceof Object&&(this.iconColor=this.icon.color,this.icon=this.icon.icon)}activityUpdate(e){if(!this.active){e&&this.emit("hmwc-collapse");return}let t=!this.opened;this.opened=!0,this.emit("hmwc-expand",{detail:{first:t}})}firstUpdated(){this.solo=!(this.parentElement instanceof de)}hasCount(){return typeof this.count=="number"&&!Number.isNaN(this.count)}_renderExtras(){let e=this.refreshable&&this.active;return!this.help&&!e&&!this.hasCount()?x:c`
      <span class="accordion__extras" @click=${this.handleExtrasClick}>
        ${this.help?c`<hmwc-icon part="help" class="accordion__help" src="info-circle" tooltip=${this.help} aria-hidden="true"></hmwc-icon>`:x}
        ${e?c`<span class="accordion__refresh-space" aria-hidden="true"></span>`:x}
        ${this.hasCount()?c`<hmwc-badge
              part="count"
              id="count"
              class=${v({accordion__count:!0,muted:this.count===0})}
              pill
              sm
              label=${String(this.count)}></hmwc-badge>`:x}
      </span>
    `}_renderRefresh(){return!this.refreshable||!this.active?x:c`<hmwc-button
      part="refresh"
      class="accordion__refresh"
      basic
      sm
      circle
      icon="arrow-clockwise"
      aria-label=${this.label?`Refresh ${this.label}`:"Refresh"}
      tooltip="Refresh"
      ?disabled=${this.disabled}
      @hmwc-click=${this.handleRefresh}></hmwc-button>`}updated(){if(!(!!this.refreshable&&!!this.active)){this.headerObserver?.disconnect(),this.headerObserver=void 0;return}if(!this.headerObserver&&typeof ResizeObserver<"u"){this.headerObserver=new ResizeObserver(this.placeRefresh),this.headerObserver.observe(this.summary);let t=this.shadowRoot?.querySelector(".accordion__extras");t&&this.headerObserver.observe(t)}this.placeRefresh()}disconnectedCallback(){super.disconnectedCallback(),this.headerObserver?.disconnect(),this.headerObserver=void 0}render(){let e=[this.help?"help":"",this.hasCount()?"count":""].filter(Boolean).join(" "),t=v({accordion:!0,active:!!this.active,disabled:!!this.disabled,basic:!!this.basic,solo:!!this.solo,icon:!!this.icon||this.controllers.slot.test("icon"),"trigger-start":this.triggerPlacement==="start",extras:!!this.help||!!this.refreshable&&!!this.active||this.hasCount()});return c`
      <details part="base" class=${t} open>
        <summary
          part="summary"
          id="summary"
          class="accordion__summary"
          role="button"
          aria-expanded=${b(this.active)}
          aria-controls="content"
          aria-label=${b(this.label)}
          aria-describedby=${b(e||void 0)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @keydown=${this.handleKeyboardInput}
          @click=${this.toggle}
          @focus=${()=>this.emit("hmwc-focus")}
          @blur=${()=>this.emit("hmwc-blur")}
          style="--accordion-icon-color: ${b(this.iconColor)}">
          <div part="details" class="accordion__details">
            <slot name="icon" part="icon" class="accordion__icon">${this.icon&&c`<hmwc-icon flex src=${this.icon}></hmwc-icon>`}</slot>
            <slot name="label" part="label" class="accordion__label">${this.label}</slot>
          </div>
          <slot name="controls" part="controls" class="accordion__controls" @click=${this.handleControlsClick}></slot>
          ${this._renderExtras()}
          <slot name="trigger" part="trigger" class="accordion__trigger">
            <hmwc-icon part="summary-icon" src="chevron-right"></hmwc-icon>
          </slot>
        </summary>
        ${this._renderRefresh()}
        ${this.help?c`<span id="help" class="accordion__sr">${this.help}</span>`:x}
        <div id="content" class="accordion__body" part="body" role="region" aria-labelledby="summary">
          <slot></slot>
        </div>
      </details>
    `}};Z.styles=eo;Z.dependencies=[$,J,k];Z.slots=["[default]","icon","label","controls","trigger"];We([w()],Z.prototype,"solo",void 0);We([n({type:Boolean,reflect:!0})],Z.prototype,"active",void 0);We([n({type:String,reflect:!0})],Z.prototype,"label",void 0);We([n({type:String,reflect:!0})],Z.prototype,"icon",void 0);We([n({type:Boolean,reflect:!0})],Z.prototype,"disabled",void 0);We([n({type:Boolean,reflect:!0})],Z.prototype,"basic",void 0);We([n({type:Boolean,reflect:!0})],Z.prototype,"refreshable",void 0);We([n({type:String})],Z.prototype,"help",void 0);We([n({type:String,reflect:!0,attribute:"trigger-placement"})],Z.prototype,"triggerPlacement",void 0);We([n({type:Number,reflect:!0})],Z.prototype,"count",void 0);We([I(".accordion__summary")],Z.prototype,"summary",void 0);We([I(".accordion__body")],Z.prototype,"body",void 0);We([w()],Z.prototype,"iconColor",void 0);We([u("icon")],Z.prototype,"iconUpdate",null);We([u("active")],Z.prototype,"activityUpdate",null);var to=f`
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
    --accordion-group-trigger-size: calc(0.75 * var(--hmwc-rem, 1rem));
    --accordion-group-trigger-color: var(--hmwc-color-neutral-700);
    --accordion-group-summary-padding: var(--hmwc-spacing-medium) var(--hmwc-spacing-large) var(--hmwc-spacing-small);
    --accordion-group-heading-inset: calc(var(--hmwc-spacing-large) + var(--hmwc-panel-border-width));

    display: block;
  }

  /* The group scales and fades in as it joins the page (the base component's
     "scale-in"). That entrance is a transform, so it is dropped for people who
     ask for less motion. */
  @media (prefers-reduced-motion: reduce) {
    :host {
      animation: none;
    }
  }

  /* No accordions (none rendered for this user, say): nothing to show, heading included. */
  :host([empty]) {
    display: none;
  }

  /* divided: the sections look. Even header padding, semibold labels and
     quieter icons. */
  :host([divided]) {
    --accordion-group-summary-padding: var(--hmwc-spacing-small) var(--hmwc-spacing-large);
    --accordion-group-font-weight: var(--hmwc-font-weight-semibold);
    --accordion-group-font-color: var(--hmwc-color-neutral-900);
    --accordion-group-icon-color: var(--hmwc-color-neutral-500);
  }

  /* A small heading over the group: its icon in the column of the accordions' icons. */
  .accordion-group__heading {
    display: flex;
    align-items: center;
    gap: var(--hmwc-spacing-x-small);
    margin: 0 0 var(--hmwc-spacing-x-small) var(--accordion-group-heading-inset);
    color: var(--hmwc-color-neutral-700);
    font-family: var(--hmwc-font-sans);
    font-size: var(--hmwc-font-size-small);
    font-weight: var(--hmwc-font-weight-semibold);
    letter-spacing: var(--hmwc-letter-spacing-loose);
    text-transform: uppercase;
    --icon-size: var(--hmwc-font-size-medium);
    --icon-color: var(--hmwc-accent-color, var(--hmwc-color-neutral-500));
  }

  .accordion-group__heading-icon {
    color: var(--hmwc-accent-color, var(--hmwc-color-neutral-500));
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
     shadow DOM boundary to the inner .accordion element.
     First/last accordion, not first/last child: pages often slot scripts,
     modals or hidden inputs alongside, and the end accordion then kept
     square corners that covered the group's rounded border. */
  .accordion-group ::slotted(hmwc-accordion:first-of-type) {
    --accordion-border-top-left-radius: calc(var(--accordion-group-border-radius) - var(--hmwc-panel-border-width, 1px));
    --accordion-border-top-right-radius: calc(var(--accordion-group-border-radius) - var(--hmwc-panel-border-width, 1px));
  }

  .accordion-group ::slotted(hmwc-accordion:last-of-type) {
    --accordion-border-bottom-left-radius: calc(var(--accordion-group-border-radius) - var(--hmwc-panel-border-width, 1px));
    --accordion-border-bottom-right-radius: calc(var(--accordion-group-border-radius) - var(--hmwc-panel-border-width, 1px));
  }

  /* divided: a line between accordions (darker under an open one, so a long
     open section has a visible end), and an open header tinted with a rule
     under it. */
  .accordion-group.divided ::slotted(hmwc-accordion) {
    --accordion-summary-hover-background: var(--hmwc-color-neutral-50);
    --accordion-summary-active-background: var(--hmwc-color-neutral-50);
    --accordion-summary-active-border-color: var(--hmwc-color-neutral-200);
  }

  .accordion-group.divided ::slotted(hmwc-accordion:not(:last-of-type)) {
    border-bottom: var(--hmwc-panel-border-width) solid var(--hmwc-color-neutral-100);
  }

  .accordion-group.divided ::slotted(hmwc-accordion[active]:not(:last-of-type)) {
    border-bottom-color: var(--hmwc-color-neutral-200);
  }
`;var Et=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},de=class extends j{constructor(){super(...arguments),this.index=-1,this.accordions=[],this.empty=!1,this.restored=new WeakSet,this.listeners=new Map}showAll(){this.accordions.forEach(e=>e.show())}hideAll(){this.accordions.forEach(e=>e.hide())}contextMenuItems(e){let t=e.path??[],r=this.getAccordions(),i=r.find(l=>t.includes(l));if(i?!i.isHeaderPath(t):t.some(l=>l instanceof HTMLSlotElement&&l.getRootNode()===this.shadowRoot))return[];let o=r.filter(l=>!l.disabled);if(o.length<2)return[];let a=[];return this.multiple&&a.push({value:"expand-all",label:"Expand all",icon:"arrows-expand",disabled:o.every(l=>l.active),action:()=>this.showAll()}),a.push({value:"collapse-all",label:"Collapse all",icon:"arrows-collapse",disabled:o.every(l=>!l.active),action:()=>this.hideAll()}),a}getAccordions(){return this.controllers.slot.get().filter(e=>e instanceof Z)}handleSlotChange(){let e=this.getAccordions();e.length===this.accordions.length&&e.every((r,i)=>r===this.accordions[i])||(this.accordions=e),this.empty=!this.querySelector(":scope > hmwc-accordion")}storageKey(){return`hmwc-accordion-group:${this.persist}`}keyOf(e){return e.id||String(this.accordions.indexOf(e))}readRemembered(){if(this.persist)try{let e=JSON.parse(localStorage.getItem(this.storageKey())||"null");return Array.isArray(e)?new Set(e.map(String)):void 0}catch{return}}restore(){this.remembered&&this.accordions.forEach(e=>{this.restored.has(e)||(this.restored.add(e),this.remembered.has(this.keyOf(e))&&e.show())})}save(){if(!this.persist)return;let e=new Set(this.accordions.map(i=>this.keyOf(i))),t=[...this.remembered||[]].filter(i=>!e.has(i)),r=this.accordions.filter(i=>i.active).map(i=>this.keyOf(i));this.remembered=new Set([...t,...r]);try{localStorage.setItem(this.storageKey(),JSON.stringify([...this.remembered]))}catch{}}handleExpand(e){this.index=e,this.save(),this.multiple||this.accordions.forEach((t,r)=>{r!==e&&t.hide()})}handleCollapse(e){this.index===e&&(this.index=-1),this.save()}indexUpdate(){this.emit("hmwc-change",{detail:{index:this.index,accordion:this.accordions[this.index]}})}accordionsUpdate(){let e={"--accordion-background":"var(--accordion-group-background)","--accordion-font-color":"var(--accordion-group-font-color)","--accordion-font-size":"var(--accordion-group-font-size)","--accordion-font-weight":"var(--accordion-group-font-weight)","--accordion-icon-color":"var(--accordion-group-icon-color)","--accordion-icon-size":"var(--accordion-group-icon-size)","--accordion-trigger-size":"var(--accordion-group-trigger-size)","--accordion-trigger-color":"var(--accordion-group-trigger-color)","--accordion-summary-padding":"var(--accordion-group-summary-padding)"},t=Object.keys(e).map(r=>`${r}: ${e[r]}`).join("; ");this.listeners.forEach((r,i)=>{i.removeEventListener("hmwc-expand",r.expand),i.removeEventListener("hmwc-collapse",r.collapse)}),this.listeners.clear(),this.accordions.forEach((r,i)=>{r.setAttribute("style",t);let o=l=>{l.target===r&&this.handleExpand(i)},a=l=>{l.target===r&&this.handleCollapse(i)};this.listeners.set(r,{expand:o,collapse:a}),r.addEventListener("hmwc-expand",o),r.addEventListener("hmwc-collapse",a)})}connectedCallback(){super.connectedCallback(),this.remembered=this.readRemembered()}firstUpdated(){this.accordions=this.getAccordions(),this.empty=!this.querySelector(":scope > hmwc-accordion")}updated(){this.restore()}_renderHeading(){return this.label?c`
      <div part="heading" class="accordion-group__heading" id="heading">
        ${this.icon?c`<hmwc-icon part="heading-icon" class="accordion-group__heading-icon" src=${this.icon}></hmwc-icon>`:x}
        <span class="accordion-group__heading-label">${this.label}</span>
      </div>
    `:x}render(){let e=v({"accordion-group":!0,divided:!!this.divided});return c`
      ${this._renderHeading()}
      <div part="base" class=${e} role=${this.label?"group":x} aria-labelledby=${this.label?"heading":x}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};de.styles=to;de.dependencies=[k,$];de.slots=["[default]"];Et([w()],de.prototype,"index",void 0);Et([w()],de.prototype,"accordions",void 0);Et([n({type:Boolean,reflect:!0})],de.prototype,"multiple",void 0);Et([n({type:Boolean,reflect:!0})],de.prototype,"divided",void 0);Et([n({type:Boolean,reflect:!0})],de.prototype,"empty",void 0);Et([n({type:String,reflect:!0})],de.prototype,"icon",void 0);Et([n({type:String,reflect:!0})],de.prototype,"persist",void 0);Et([u("index",{waitUntilFirstUpdate:!0})],de.prototype,"indexUpdate",null);Et([u("accordions")],de.prototype,"accordionsUpdate",null);de.define("hmwc-accordion-group",de);Z.define("hmwc-accordion",Z);var ro=f`
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
    color: var(--hmwc-color-neutral-700);
    background-color: var(--alert-background);
    border: solid var(--hmwc-panel-border-width) var(--hmwc-panel-border-color);
    border-top-width: var(--alert-border-width);
    border-top-color: var(--alert-border-color);
    border-radius: var(--alert-border-radius);
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

    /* Content host: text slotted into the body takes the page typography
       and can be selected (see contentStyles). The alert's own text keeps the
       chrome typography; the title and label are the message, so they stay
       selectable too. */
    .alert__icon,
    .alert__title,
    .alert__label,
    .alert__dismiss {
      font-family: var(--hmwc-font-sans);
      font-feature-settings: 'c2sc', 'smcp';
      line-height: var(--hmwc-line-height-normal);
      letter-spacing: var(--hmwc-letter-spacing-normal);
    }

    .alert__icon,
    .alert__dismiss {
      user-select: none;
    }

    .alert__title,
    .alert__label {
      user-select: text;
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

    &.sm {
      --alert-padding: var(--hmwc-spacing-small);
      --alert-spacing: var(--hmwc-spacing-medium);
      --alert-title-size: var(--hmwc-font-size-small);
      --alert-label-size: var(--hmwc-font-size-small);
      --alert-icon-size: var(--hmwc-font-size-medium);

      & .alert__icon {
        font-size: var(--alert-icon-size);
      }

      & .alert__body {
        gap: 0;
      }

      & .alert__dismiss {
        padding-inline-end: var(--hmwc-spacing-x-small);
        --icon-size: var(--hmwc-font-size-small);
      }
    }
  }
`,io=`
  display: flex;
  flex-direction: column;
  gap: var(--hmwc-spacing-medium, calc(1 * var(--hmwc-rem, 1rem)));
  padding: var(--hmwc-spacing-small);
  position: fixed;
  top: var(--hmwc-navbar-width);
  inset-inline-end: 0;
  z-index: 950;
  width: calc(28 * var(--hmwc-rem, 1rem));
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
`;var ri={info:{variant:"primary",icon:"info-circle",dismissible:!0,duration:5e3},success:{variant:"success",icon:"check2-circle",dismissible:!0,duration:5e3},warning:{variant:"warning",icon:"exclamation-triangle",dismissible:!0,duration:8e3},error:{variant:"danger",icon:"exclamation-octagon",dismissible:!0,duration:1/0}};var be=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},fs=250,U=class extends g{constructor(){super(...arguments),this.closing=!1,this.active=!1,this.duration=1/0}show(){if(this.active||(this.active=!0,!this.stack))return;ao(this).appendChild(this)}hide(){if(!this.active)return;this.closing=!0,setTimeout(()=>{this.closing=!1,this.active=!1,this.stack&&this.remove()},fs)}cacheAlert(){let e=JSON.parse(localStorage.getItem("alerts")||"[]");localStorage.setItem("alerts",JSON.stringify(e.filter(t=>t!==this.id)))}removeCache(){if(!this.id)return;let e=[...JSON.parse(localStorage.getItem("alerts")||"[]"),this.id];localStorage.setItem("alerts",JSON.stringify(e))}activityUpdate(){this.resetTimeout(),this.emit(`hmwc-${this.active?"show":"hide"}`)}resetTimeout(){this.active&&(this.duration||0)<1/0&&(clearTimeout(this.timeout),this.timeout=window.setTimeout(()=>this.hide(),this.duration))}cacheUpdate(){this.cache&&(this.cached=JSON.parse(localStorage.getItem("alerts")||"[]").includes(this.id))}stackUpdate(){this.stack&&(this.duration=this.duration===1/0?5e3:this.duration)}static get observedAttributes(){return[...super.observedAttributes,"hidden"]}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),!(e!=="hidden"||t===null==(r===null))&&(r===null?this.show():this.hasUpdated&&(this.active=!1))}connectedCallback(){super.connectedCallback(),!this.stack&&(this.cacheUpdate(),this.cached&&(this.active=!1))}render(){let e=v({alert:!0,active:!!this.active,closing:this.closing,dismissible:!!this.dismissible,stack:!!this.stack,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger,sm:!!this.sm});return c`
      <div
        part="base"
        class=${e}
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
    `}};U.styles=[mt,ro];U.dependencies=[$,k];U.slots=["[default]","title","label","icon","dismiss"];be([w()],U.prototype,"cached",void 0);be([w()],U.prototype,"closing",void 0);be([w()],U.prototype,"timeout",void 0);be([n({type:Boolean,reflect:!0})],U.prototype,"active",void 0);be([n({type:Number})],U.prototype,"duration",void 0);be([n({type:String})],U.prototype,"title",void 0);be([n({type:String})],U.prototype,"label",void 0);be([n({type:String})],U.prototype,"icon",void 0);be([n({type:Boolean,reflect:!0})],U.prototype,"dismissible",void 0);be([n({type:Boolean,reflect:!0})],U.prototype,"cache",void 0);be([n({type:Boolean,reflect:!0})],U.prototype,"stack",void 0);be([n({type:Boolean,reflect:!0})],U.prototype,"primary",void 0);be([n({type:Boolean,reflect:!0})],U.prototype,"success",void 0);be([n({type:Boolean,reflect:!0})],U.prototype,"neutral",void 0);be([n({type:Boolean,reflect:!0})],U.prototype,"warning",void 0);be([n({type:Boolean,reflect:!0})],U.prototype,"danger",void 0);be([n({type:Boolean,reflect:!0})],U.prototype,"sm",void 0);be([u("active",{waitUntilFirstUpdate:!0})],U.prototype,"activityUpdate",null);be([u("duration")],U.prototype,"resetTimeout",null);be([u("cache")],U.prototype,"cacheUpdate",null);be([u("stack")],U.prototype,"stackUpdate",null);var qt;function oo(){return qt||(qt=Object.assign(document.createElement("div"),{className:"hmwc-notification-stack"}),qt.style.cssText=io,qt.style.position="fixed"),qt.parentElement||document.body.appendChild(qt),qt}function ao(s,e=!1){if(e){let t=document.querySelector("[notificationstack][global]");if(t?._stackContainer)return t._stackContainer;let r=document.querySelectorAll("[notificationstack]");if(r.length){let i=r[0];if(i._stackContainer)return i._stackContainer}return oo()}if(s){let t=s.closest("[notificationstack]");if(t?._stackContainer)return t._stackContainer}return oo()}function ii(s={}){let e=Object.fromEntries(Object.entries(s).filter(([,o])=>o!==void 0)),t=s.preset?{...ri[s.preset],...e}:s,r=document.createElement("hmwc-alert"),i=ao(s.relativeTo,!!t.global);return r.stack=!0,i.appendChild(r),t.title&&(r.title=t.title),t.label&&(r.label=t.label),t.icon&&(r.icon=t.icon),t.dismissible&&(r.dismissible=!0),t.duration!==void 0&&(r.duration=t.duration),t.variant&&(r[t.variant]=!0),s.className&&(r.className+=` ${s.className}`),s.style&&(typeof s.style=="string"?r.setAttribute("style",s.style):Object.assign(r.style,s.style)),s.onShow&&r.addEventListener("hmwc-show",o=>{o.target===r&&s.onShow(r)}),s.onHide&&r.addEventListener("hmwc-hide",o=>{o.target===r&&s.onHide(r)}),r.updateComplete.then(()=>{r.active=!0}),{alert:r,close:()=>r.hide()}}U.define("hmwc-alert",U);var{I:gs}=Pi,so=s=>s;var lo=s=>s.strings===void 0,no=()=>document.createComment(""),Xt=(s,e,t)=>{let r=s._$AA.parentNode,i=e===void 0?s._$AB:e._$AA;if(t===void 0){let o=r.insertBefore(no(),i),a=r.insertBefore(no(),i);t=new gs(o,a,s,s.options)}else{let o=t._$AB.nextSibling,a=t._$AM,l=a!==s;if(l){let h;t._$AQ?.(s),t._$AM=s,t._$AP!==void 0&&(h=s._$AU)!==a._$AU&&t._$AP(h)}if(o!==i||l){let h=t._$AA;for(;h!==o;){let d=so(h).nextSibling;so(r).insertBefore(h,i),h=d}}}return t},Rt=(s,e,t=s)=>(s._$AI(e,t),s),vs={},Pr=(s,e=vs)=>s._$AH=e,co=s=>s._$AH,Ir=s=>{s._$AR(),s._$AA.remove()};var tt=Ot(class extends xt{constructor(s){if(super(s),s.type!==nt.PROPERTY&&s.type!==nt.ATTRIBUTE&&s.type!==nt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!lo(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[e]){if(e===ze||e===x)return e;let t=s.element,r=s.name;if(s.type===nt.PROPERTY){if(e===t[r])return ze}else if(s.type===nt.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(r))return ze}else if(s.type===nt.ATTRIBUTE&&t.getAttribute(r)===e+"")return ze;return Pr(s),e}});var ho=f`
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

    /* ── States (docs/v2/specs/CONTROL_STATES.md) ──
       The box's border carries the state, in the colors validity has already
       resolved: the checkbox's own ("--control-*", see the form styles) or,
       inside an invalid group, the group's ("--form-group-*"). Hover only
       ever picks the hover color of the same pair, so it can't undo
       validity, and nothing but keyboard focus draws a ring. */
    --toggle-border-color: var(--form-group-border-color, var(--control-border-color));
    --toggle-border-color-hover: var(--form-group-border-color-hover, var(--control-border-color-hover));
    --toggle-border-color-checked: var(--form-group-border-color, var(--control-border-color-checked));
    --toggle-border-color-checked-hover: var(--form-group-border-color-hover, var(--control-border-color-checked-hover));

    & .checkbox__control {
      flex: 0 0 auto;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--toggle-size);
      height: var(--toggle-size);
      border: solid var(--hmwc-input-border-width) var(--toggle-border-color);
      border-radius: var(--hmwc-border-radius-small);
      background-color: var(--hmwc-input-background-color);
      color: var(--hmwc-color-neutral-0);
      transition: var(--hmwc-transition-fast) border-color, var(--hmwc-transition-fast) background-color, var(--hmwc-transition-fast) color,
        var(--hmwc-transition-fast) scale ease;

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
        border-color: var(--toggle-border-color-checked);
        background-color: var(--hmwc-color-primary-600);

        & > * {
          animation: checkmark-pop 250ms cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards;
        }
      }

      &:not(.disabled) {
        &:hover .checkbox__control {
          border-color: var(--toggle-border-color-checked-hover);
          background-color: var(--hmwc-color-primary-700);
          scale: 1.05;
        }

        &:hover .checkbox__label {
          color: var(--hmwc-color-primary-600);
        }
      }
    }

    &:not(.checked):not(.indeterminate):not(.disabled) {
      &:hover .checkbox__control {
        border-color: var(--toggle-border-color-hover);
        background-color: var(--hmwc-input-background-color-hover);
        scale: 1.05;
      }

      &:hover .checkbox__label {
        color: var(--hmwc-color-primary-600);
      }
    }

    /* Keyboard focus only: a click already answers with the tick. The ring
       stands off the box, so it shows round a checked (filled) one too. */
    &:not(.disabled):has(.checkbox__input:focus-visible) .checkbox__control {
      outline: var(--control-focus-outline);
      outline-offset: var(--control-focus-outline-offset);
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
      --toggle-border-color: var(--control-border-color);
      --toggle-border-color-checked: var(--control-border-color-checked);
      opacity: 0.5;
      cursor: not-allowed;

      & .checkbox__input {
        cursor: not-allowed;
      }
    }
  }
`,po=c`
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
`,mo=c`
  <svg part="icon" viewBox="0 0 16 16">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
      <g stroke="currentColor" stroke-width="2">
        <g transform="translate(2.285714, 6.857143)">
          <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
        </g>
      </g>
    </g>
  </svg>
`;var oi=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},we=class extends L{handleStateChange(){this.input.checked=!!this.checked,this.input.indeterminate=this.indeterminate}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}_isEmpty(){return!this.checked}_resolveError(){return this._validity.valueMissing&&!this._validity.customError?"Please check this box to continue.":super._resolveError()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.invalid&&this.checkValidity()&&this.reportValidity(),this.emit("hmwc-change",{detail:{value:this.checked}})}handleBlur(){this.emit("hmwc-blur",{})}handleFocus(){this.emit("hmwc-focus",{})}handleInput(){this.emit("hmwc-input",{})}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0)}render(){let e=!this.checked&&this.indeterminate,t=v({checkbox:!0,checked:this.checked,indeterminate:e,sm:!!this.sm,md:!!this.md,lg:!!this.lg,disabled:!!this.disabled,required:!!this.required});return c`
      <label part="base" class=${t}>
        <input
          class="checkbox__input"
          type="checkbox"
          name=${b(this.name)}
          value=${b(this.value)}
          .indeterminate=${tt(this.indeterminate)}
          .checked=${tt(this.checked)}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-checked=${this.checked}
          aria-invalid=${this._ariaInvalid()}
          aria-errormessage=${b(this._ariaErrorMessage())}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur} />

        <span part="control" class="checkbox__control"> ${this.checked?po:""} ${e?mo:""} </span>

        <slot part="label" class="checkbox__label">${this.label}</slot>
      </label>
      ${this._renderError()}
    `}};we.styles=ho;we.dependencies=[$];we.toggle=!0;oi([n({type:Boolean,reflect:!0})],we.prototype,"indeterminate",void 0);oi([I(".checkbox__input")],we.prototype,"input",void 0);oi([u(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],we.prototype,"handleStateChange",null);we.define("hmwc-checkbox",we);var uo=f`
  :host {
    --divider-color: var(--hmwc-panel-border-color);
    --divider-size: var(--hmwc-panel-border-width);
    --divider-radius: calc(3 * var(--hmwc-rem, 1rem)) / calc(3 * var(--hmwc-rem, 1rem));
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
      --divider-radius: calc(2.25 * var(--hmwc-rem, 1rem)) / calc(2.25 * var(--hmwc-rem, 1rem));
    }
    &.md {
      --divider-size: calc(2.5 * var(--hmwc-panel-border-width));
      --divider-radius: calc(2.5 * var(--hmwc-rem, 1rem)) / calc(2.5 * var(--hmwc-rem, 1rem));
    }
    &.lg {
      --divider-size: calc(4 * var(--hmwc-panel-border-width));
      --divider-radius: calc(4 * var(--hmwc-rem, 1rem)) / calc(4 * var(--hmwc-rem, 1rem));
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
`;var ut=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},H=class extends g{constructor(){super(...arguments),this.horizontal=!0}orientationUpdate(){this.vertical&&(this.horizontal=!1)}render(){let e=v({divider:!0,horizontal:!!this.horizontal,vertical:!!this.vertical,"spacing-xs":this.spacing==="xs","spacing-sm":this.spacing==="sm","spacing-md":this.spacing==="md","spacing-lg":this.spacing==="lg","spacing-xl":this.spacing==="xl",sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`<div part="base" class=${e} role="separator" aria-orientation=${this.vertical?"vertical":"horizontal"}></div>`}};H.styles=uo;ut([n({type:Boolean,reflect:!0})],H.prototype,"horizontal",void 0);ut([n({type:Boolean,reflect:!0})],H.prototype,"vertical",void 0);ut([n({type:String,reflect:!0})],H.prototype,"spacing",void 0);ut([n({type:Boolean,reflect:!0})],H.prototype,"sm",void 0);ut([n({type:Boolean,reflect:!0})],H.prototype,"md",void 0);ut([n({type:Boolean,reflect:!0})],H.prototype,"lg",void 0);ut([n({type:Boolean,reflect:!0})],H.prototype,"primary",void 0);ut([n({type:Boolean,reflect:!0})],H.prototype,"success",void 0);ut([n({type:Boolean,reflect:!0})],H.prototype,"neutral",void 0);ut([n({type:Boolean,reflect:!0})],H.prototype,"warning",void 0);ut([n({type:Boolean,reflect:!0})],H.prototype,"danger",void 0);ut([u("vertical")],H.prototype,"orientationUpdate",null);H.define("hmwc-divider",H);var fo=f`
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
      width: calc(1.5 * var(--hmwc-rem, 1rem));
      padding-inline-end: var(--hmwc-spacing-x-small);
    }

    & .menu-item__spinner {
      position: absolute;
      font-size: calc(0.8 * var(--hmwc-rem, 1rem));
      top: calc(50% - 0.65 * var(--hmwc-rem, 1rem));
      left: calc(0.5 * var(--hmwc-rem, 1rem));
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

    /* Group heading: a quiet label row above its items. It is not
       interactive, so it keeps the default cursor and has no hover. It
       keeps the items' inline padding, so it lines up with their start. */
    &.heading {
      cursor: default;
      padding-block: var(--hmwc-spacing-x-small) var(--hmwc-spacing-3x-small);

      &:hover {
        background-color: transparent;
      }

      & .menu-item__label {
        font-size: var(--hmwc-font-size-x-small);
        font-weight: var(--hmwc-font-weight-semibold);
        letter-spacing: var(--hmwc-letter-spacing-loose);
        text-transform: uppercase;
        color: var(--hmwc-color-neutral-600);
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
`;var Fe=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},R=class extends g{constructor(){super(...arguments),this.expanded=!1,this.isExpanded=()=>{if(!this.item)return;let e=this.item.matches(":hover");return b(this.submenu)&&e},this.handleClick=e=>{if(this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}this.emit("hmwc-select",{detail:{value:this.value}}),this.checkable&&(this.checked=!this.checked,this.emit("hmwc-change",{detail:{value:this}}))},this.handleMouseOver=e=>{e.stopPropagation(),this.closest("hmwc-menu")?.isTypeaheadActive||this.focus(),this.emit("hmwc-focus"),(this.submenu||this.controllers.slot.test("submenu"))&&(this.expanded=!0)},this.handleMouseOut=e=>{e.stopPropagation(),this.emit("hmwc-blur"),(this.submenu||this.controllers.slot.test("submenu"))&&(this.expanded=!1)}}handleExpandedChange(){if(!this.controllers.slot.test("submenu"))return;let e=this.controllers.slot.get("submenu")[0];e.active=this.expanded}_renderHeading(){return c`
      <div part="base" class=${v({"menu-item":!0,heading:!0,small:!!this.sm})} role="presentation">
        <span part="label" class="menu-item__label">${this.label}</span>
      </div>
    `}render(){if(this.heading)return this._renderHeading();let e=!!this.submenu||this.controllers.slot.test("submenu"),t=v({"menu-item":!0,expanded:this.expanded,checked:!!this.checked,loading:!!this.loading,center:!!this.center,disabled:!!this.disabled,active:!!this.active,prefix:!!this.prefix||this.controllers.slot.test("prefix"),suffix:!!this.suffix||this.controllers.slot.test("suffix"),submenu:e,small:!!this.sm});return c`
      <div
        part="base"
        class=${t}
        role="menuitem"
        tabindex="-1"
        aria-label=${b(this.label||void 0)}
        aria-haspopup=${e?"true":"false"}
        aria-expanded=${e&&this.isExpanded()?"true":"false"}
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
    `}};R.styles=fo;R.dependencies=[$,ie,we];R.slots=["prefix","suffix","submenu"];Fe([w()],R.prototype,"expanded",void 0);Fe([n({type:String})],R.prototype,"value",void 0);Fe([n({type:String})],R.prototype,"label",void 0);Fe([n({type:Boolean,reflect:!0})],R.prototype,"checkable",void 0);Fe([n({type:Boolean,reflect:!0})],R.prototype,"checked",void 0);Fe([n({type:Boolean,reflect:!0})],R.prototype,"loading",void 0);Fe([n({type:String})],R.prototype,"prefix",void 0);Fe([n({type:String})],R.prototype,"suffix",void 0);Fe([n({type:Array})],R.prototype,"submenu",void 0);Fe([n({type:Boolean,reflect:!0})],R.prototype,"disabled",void 0);Fe([n({type:Boolean,reflect:!0})],R.prototype,"heading",void 0);Fe([n({type:Boolean,reflect:!0})],R.prototype,"sm",void 0);Fe([n({type:Boolean,reflect:!0})],R.prototype,"active",void 0);Fe([n({type:Boolean,reflect:!0})],R.prototype,"center",void 0);Fe([I(".menu-item")],R.prototype,"item",void 0);Fe([u("expanded")],R.prototype,"handleExpandedChange",null);R.define("hmwc-menu-item",R);var go=f`
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
          color: var(--calendar-date-inactive-color);
          font-weight: var(--hmwc-font-weight-normal);
          cursor: not-allowed;
        }
      }
    }

    &.disabled {
      & .calendar__body .calendar__date {
        cursor: not-allowed;
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
`;var Te=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},re=class extends g{constructor(){super(...arguments),this.MONTHS=[...Array(12).keys()].map(e=>new Date(0,e).toLocaleString("en",{month:"long"})),this.DAYS=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],this.dates=[],this.selection=[],this.dragAction="add",this.value=[],this.placeholder=[],this.month=new Date().getMonth(),this.year=new Date().getFullYear(),this.yearRange=100,this.yearRangeFuture=10,this.valueUpdate=()=>this.parseDates(),this.selectionUpdate=()=>this.emit("hmwc-change",{detail:{value:this.selection}}),this.dateUpdate=()=>this.dates=this.getDates(),this.multipleUpdate=()=>this.selection=this.selection.slice(0,1)}static get dependencies(){return[P,k,O,R]}navigate(e,t=this.year){e!==void 0&&(t===this.year&&(e<0?(e=11,t--):e>11&&(e=0,t++)),this.month=e,this.year=t)}getYearOptions(){let e=new Date().getFullYear(),t=[],r=e-this.yearRange,i=e+this.yearRangeFuture;for(let o=r;o<=i;o++)t.push(o);return t}handleMonthSelect(e){e.stopPropagation();let t=parseInt(e.detail?.value);isNaN(t)||(this.navigate(t,this.year),this.renderRoot.querySelector(".calendar__month-picker")?.hide())}handleYearSelect(e){e.stopPropagation();let t=parseInt(e.detail?.value);isNaN(t)||(this.navigate(this.month,t),this.renderRoot.querySelector(".calendar__year-picker")?.hide())}closeSiblingPicker(e){let t=e==="month"?"calendar__year-picker":"calendar__month-picker",r=this.renderRoot.querySelector(`.${t}`);r?.active&&r.hide()}select(e){new Date(e).getMonth()===this.month&&(this.emit("hmwc-select",{detail:{value:e}}),this.selection.find(t=>+t==+e)?this.selection=this.selection.filter(t=>+t!=+e):this.selection=[...this.multiple?this.selection:[],e])}parseDates(){this.selection=this.value.map(e=>new Date(e))}getDates(){let e=[],t={start:new Date(this.year,this.month,1),end:new Date(this.year,this.month+1,0)};for(let a=t.start.getDay()-1;a>=0;a--){let l=new Date(t.start);l.setDate(l.getDate()-(a+1)),e.push(l)}for(let a=1;a<=t.end.getDate();a++)e.push(new Date(this.year,this.month,a));let r=42-e.length;for(let a=1;a<=r;a++)e.push(new Date(this.year,this.month+1,a));let i=[];for(let a=0;a<e.length;a+=7)i.push(e.slice(a,a+7));return i.filter(a=>a.some(l=>l.getMonth()===this.month)).flat()}getDate(e){return this.dates.find(t=>{let r=new Date(t);return[r.getDate()===parseInt(e.innerText),r.getMonth()===this.month,r.getFullYear()===this.year,e.hasAttribute("current")].every(o=>o)})}startDrag(e){if(this.disabled)return;this.dragTarget=e.target;let t=this.getDate(this.dragTarget);t&&this.select(t),this.dragAction=this.dragTarget?.hasAttribute("selected")?"remove":"add"}drag(e){if(!this.dragTarget)return;let t=e.target;if(document.activeElement,[t===this.dragTarget,t.className!=="calendar__date",this.dragAction==="add"&&t.hasAttribute("selected"),this.dragAction==="remove"&&!t.hasAttribute("selected")].some(o=>o))return;let i=this.getDate(t);i&&this.select(i)}stopDrag(){this.dragAction="add",this.dragTarget=void 0}render(){let e=v({calendar:!0,navigation:!!this.navigation,basic:!!this.basic,disabled:!!this.disabled});return c`
      <div part="base" class=${e} @mouseup=${this.stopDrag} @mouseleave=${this.stopDrag} @mousemove=${this.drag}>
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
            ?disabled=${!this.navigation||!!this.disabled}
            @hmwc-click=${()=>this.navigate(this.month-1)}>
          </hmwc-button>

          <div slot="label" part="label" class="calendar__label">
            ${this.navigation?c`
                  <hmwc-attachment
                    class="calendar__month-picker"
                    placement="bottom-start"
                    .distance=${4}
                    @hmwc-select=${t=>this.handleMonthSelect(t)}>
                    <hmwc-button
                      slot="anchor"
                      basic
                      sm
                      part="month"
                      class="calendar__label-month clickable"
                      ?disabled=${this.disabled}
                      label=${this.MONTHS[this.month]}
                      @hmwc-click=${()=>this.closeSiblingPicker("month")}>
                    </hmwc-button>
                    <hmwc-menu active-value=${this.month}>
                      ${this.MONTHS.map((t,r)=>c` <hmwc-menu-item sm label=${t} value=${r}> </hmwc-menu-item> `)}
                    </hmwc-menu>
                  </hmwc-attachment>
                  <hmwc-attachment
                    class="calendar__year-picker"
                    placement="bottom-start"
                    .distance=${4}
                    @hmwc-select=${t=>this.handleYearSelect(t)}>
                    <hmwc-button
                      slot="anchor"
                      basic
                      sm
                      part="year"
                      class="calendar__label-year clickable"
                      ?disabled=${this.disabled}
                      label=${this.year}
                      @hmwc-click=${()=>this.closeSiblingPicker("year")}>
                    </hmwc-button>
                    <hmwc-menu active-value=${this.year} align="center">
                      ${this.getYearOptions().map(t=>c` <hmwc-menu-item sm label=${t} value=${t}> </hmwc-menu-item> `)}
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
            ?disabled=${!this.navigation||!!this.disabled}
            @hmwc-click=${()=>this.navigate(this.month+1)}>
          </hmwc-button>
        </div>

        <div part="body" class="calendar__body" @mousedown=${this.startDrag}>
          ${this.DAYS.map(t=>c` <div part="days" class="calendar__days">${t}</div> `)}
          ${this.dates.map(t=>c`
              <div
                class="calendar__date"
                part="date"
                ?current=${t.getMonth()===this.month}
                ?selected=${this.selection.find(r=>+r==+t)}
                ?placeholder=${this.placeholder.find(r=>+t==+r)}>
                ${t.getDate()}
              </div>
            `)}
        </div>
      </div>
    `}};re.styles=go;Te([w()],re.prototype,"dates",void 0);Te([w()],re.prototype,"selection",void 0);Te([w()],re.prototype,"dragAction",void 0);Te([w()],re.prototype,"dragTarget",void 0);Te([n({type:Array,reflect:!0})],re.prototype,"value",void 0);Te([n({type:Array,reflect:!0})],re.prototype,"placeholder",void 0);Te([n({type:Number,reflect:!0})],re.prototype,"month",void 0);Te([n({type:Number,reflect:!0})],re.prototype,"year",void 0);Te([n({type:Boolean,reflect:!0})],re.prototype,"navigation",void 0);Te([n({type:Boolean,reflect:!0})],re.prototype,"multiple",void 0);Te([n({type:Boolean,reflect:!0})],re.prototype,"disabled",void 0);Te([n({type:Boolean,reflect:!0})],re.prototype,"basic",void 0);Te([n({type:Number,attribute:"year-range"})],re.prototype,"yearRange",void 0);Te([n({type:Number,attribute:"year-range-future"})],re.prototype,"yearRangeFuture",void 0);Te([u("value")],re.prototype,"valueUpdate",void 0);Te([u("selection",{waitUntilFirstUpdate:!0})],re.prototype,"selectionUpdate",void 0);Te([u(["month","year"])],re.prototype,"dateUpdate",void 0);Te([u("multiple",{waitUntilFirstUpdate:!0})],re.prototype,"multipleUpdate",void 0);re.define("hmwc-calendar",re);var Qt=()=>typeof navigator<"u"&&/Mac|iPhone|iPad/.test(navigator.platform)?"\u2318":"Ctrl+";var vo=f`
  @keyframes icon-sheen {
    0%,
    100% {
      color: var(--hmwc-input-icon-color);
    }
    50% {
      color: color-mix(in srgb, var(--hmwc-input-icon-color) 60%, var(--hmwc-color-primary-600));
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
  }

  /* While a date field's calendar is open, the field sits above the content
     after it, so the calendar does too. The calendar's own z-index only ranks
     it within the nearest stacking context; when each field is one (a reveal
     animation, a transform or opacity on the field), later fields would
     otherwise paint over it. */
  :host([calendar-open]) {
    position: relative;
    z-index: var(--hmwc-z-index-dropdown);
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
    --input-box-width: 100%;
    --input-help-align: end;
    --input-help-font-size: var(--hmwc-font-size-small);

    --icon-size: calc(1 * var(--hmwc-rem, 1rem));

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
    /* An auto track won't go below the native <input>'s intrinsic width
       (~20 characters), so a shrunk host let the field spill out over its
       neighbours. minmax(0, 1fr) keeps the field inside the host. */
    grid-template-columns: minmax(0, 1fr);

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
      /* A block of text, not a flex box: the required indicator ("::after")
         then follows the label's last word, however the label wraps, as on
         the other form controls, and a cut-off label ends in an ellipsis. */
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &[aria-hidden='true'] {
        display: none;
      }
    }

    /* label-wrap: a long label (a survey question) wraps instead of being cut off. */
    &.label-wrap .input__label {
      overflow: visible;
      text-overflow: clip;
      white-space: normal;
      overflow-wrap: anywhere;
    }

    & .input__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      anchor-name: --wrapper;

      /* Only a date field draws a box round the toggle and the field. */
      & .input__box {
        display: contents;
      }

      & .input__help {
        text-align: var(--input-help-align);
        display: block;
        color: var(--hmwc-input-help-text-color);
        font-size: var(--input-help-font-size);
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
        width: var(--input-box-width);
        max-width: 100%;
        align-self: flex-start;
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
      /* The calendar opens under the box, not under the help text. */
      & .input__wrapper {
        anchor-name: none;
      }

      & .input__box {
        anchor-name: --wrapper;
        width: var(--input-box-width);
        max-width: 100%;
        align-self: flex-start;
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
        width: 100%;
        align-self: stretch;
        border: none;
        border-radius: 0;
        box-shadow: none;
      }
    }

    /** underline + date — strip wrapper chrome, keep only a bottom line */
    &.underline.date {
      & .input__box {
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
        border-bottom: 1px solid var(--input-border-color);
        border-radius: 0;
        box-shadow: none;
        transition: border-color var(--hmwc-transition-fast) ease;
      }
    }

    /* ── States (docs/v2/specs/CONTROL_STATES.md) ──
       The border color carries the state; the ring means focus and nothing
       else. Every state color is a "--control-*" property that validity has
       already resolved (see the form styles), so hover can't undo what focus
       or validity drew. At rest the border is "--input-border", which a page
       or a parent component may set. */

    /* valid: a confirmed value gets a success border (no icon in the field),
       which hover keeps. Focus returns to the focus color. */
    &.valid:not(.invalid):not(.disabled) {
      --control-border-color: var(--hmwc-color-success-500);
      --control-border-color-hover: var(--hmwc-color-success-500);
    }

    &.valid:not(.disabled),
    &.invalid:not(.disabled) {
      --input-border-color: var(--control-border-color);
      --input-border: var(--hmwc-input-border-width) solid var(--input-border-color);
    }

    /* Focus, by mouse or keyboard alike: a text field shows where typing
       goes. An open calendar counts, though DOM focus has moved into it. */
    &:not(.disabled):has(.input__field:focus-within),
    &.date.calendar:not(.disabled) {
      --input-background: var(--hmwc-input-background-color-focus);
      --input-color: var(--hmwc-input-color-focus);
      --input-border-color: var(--control-border-color-focus);
      --input-border: var(--hmwc-input-border-width) solid var(--input-border-color);
      --input-shadow: var(--control-ring);

      &.filled {
        --input-background: var(--hmwc-input-filled-background-color-focus);
      }

      & .input__prefix,
      & .input__suffix {
        &::slotted(hmwc-icon),
        & hmwc-icon:not([success]):not([danger]) {
          --icon-color: inherit;
          animation: icon-sheen 3s ease-in-out infinite;
        }
      }
    }

    /** filled */
    &.filled:not(.disabled) {
      --input-color: var(--hmwc-input-color);
      --input-background: var(--hmwc-input-filled-background-color);
    }

    /** underline — borderless input with only a bottom line. There is no
        box to ring, so focus is the line in the focus color with a soft
        glow under it. */
    &.underline {
      & .input__field {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--input-border-color);
        border-radius: 0;
        box-shadow: none;
        outline: none;
        transition: border-color var(--hmwc-transition-fast) ease, box-shadow var(--hmwc-transition-fast) ease;
      }

      &.date .input__box {
        box-shadow: none;
      }

      &:not(.disabled):has(.input__field:focus-within) .input__field,
      &.date.calendar:not(.disabled) .input__field {
        box-shadow: 0 2px 6px -2px var(--control-ring-color);
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

        &.date .input__box {
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
        --input-width: calc(6 * var(--hmwc-rem, 1rem));

        &.units {
          --input-width: calc(3 * var(--hmwc-rem, 1rem));
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
            padding-top: calc(0.075 * var(--hmwc-rem, 1rem));
            padding-bottom: calc(0.075 * var(--hmwc-rem, 1rem));
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

        &.date .input__box {
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

        &.date .input__box {
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
      &:has(.input__field:focus-within) {
        & .input__prefix,
        & .input__suffix {
          &::slotted(hmwc-icon),
          & hmwc-icon:not([success]):not([danger]) {
            --icon-color: var(--hmwc-input-border-color-invalid);
            animation: none;
          }
        }
      }


      & .input__help {
        color: var(--hmwc-input-border-color-invalid);
      }

      /* The error message leads with an icon, so the state reads at a
         glance without putting an icon inside the field that looks like
         the clear button. */
      & .input__error {
        display: inline-flex;
        align-items: center;
        gap: 0.35em;
        line-height: 1.4;
      }

      & .input__error-icon {
        flex: none;
        --icon-size: 1em;
        --icon-color: var(--hmwc-input-border-color-invalid);
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

    &.date.calendar:not(.disabled) {
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

  /* Hover: the border alone, in the color validity resolved. Not while the
     field is focused or its calendar is open (focus has the border then),
     and not on a disabled or readonly field. */
  :host(:not([readonly])) .input:not(.disabled):not(.calendar):not(:has(.input__field:focus-within)):is(:has(.input__field:hover), :has(.input__calendar_toggle:hover)) {
    --input-background: var(--hmwc-input-background-color-hover);
    --input-border-color: var(--control-border-color-hover);
    --input-border: var(--hmwc-input-border-width) solid var(--input-border-color);

    &.filled {
      --input-background: var(--hmwc-input-filled-background-color-hover);
    }
  }
`;var T=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},bs={phone:[3,3,4],ssn:[3,2,4]},ws={phone:"[0-9]{3}-[0-9]{3}-[0-9]{4}",ssn:"[0-9]{3}-[0-9]{2}-[0-9]{4}"},ys={phone:"Enter a 10-digit phone number.",ssn:"Enter a 9-digit Social Security number."},_s={digits:"numeric",phone:"tel",ssn:"numeric"},xs="[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}",ks="([0-9]{1}-?)?[0-9]{3}-?[0-9]{3}-?[0-9]{4}",C=class s extends L{constructor(){super(...arguments),this.initialValueDateParsed=!1,this.autoFocusLost=!1,this.isManuallyTyping=!1,this._isDeleting=!1,this.lockCalendarNavigation=!1,this.dates=[],this.type="text",this.dateFormat="MM/DD/YYYY",this.open=!1,this._calendarLoseFocus=null}static get dependencies(){return[$,k,re,ie]}handleValueChange(){if(this.type==="tel"&&!this.noFormat&&!this.mask){let t=this.value.toString().split("").filter(r=>r!=="-");t.length===3?this.value=`${t.slice(0,3).join("")}-`:t.length===6?this.value=`${t.slice(0,3).join("")}-${t.slice(3,6).join("")}-`:t.length===10?this.value=`${t.slice(0,3).join("")}-${t.slice(3,6).join("")}-${t.slice(6).join("")}`:t.length===11?this.value=`${t[0]}-${t.slice(1,4).join("")}-${t.slice(4,7).join("")}-${t.slice(7).join("")}`:this.value=this.value.toString()}if(this.type!=="date")return;if(!this.value){this.dates=[],this.initialValueDateParsed=!1;return}if(this.isManuallyTyping||this.value===this._datesText())return;let e=this.parseDate(String(this.value));e&&(this.initialValueDateParsed=!0,this.updateDates([e]))}_datesText(){return this.dates.length===1?this.formatDate(new Date(this.dates[0])):this.dates.length>1?`Multiple Dates Selected (${this.dates.length})`:""}handleValueMaxLength(){this.type!=="date"&&(this.enforceMaxLength(),this.checkDesiredLength())}handleMaskChange(){if(!this.mask||this.type==="date"||this.textarea)return;let e=String(this.value??"");if(!e)return;let t=this.applyMask(e);t!==e&&(this.value=t)}handleCalendarToggle(){this.toggleAttribute("calendar-open",this.type==="date"&&this.open),this.type==="date"&&(this._calendarLoseFocus&&(document.removeEventListener("mousedown",this._calendarLoseFocus),this._calendarLoseFocus=null),this.open&&(this._calendarLoseFocus=e=>{e.composedPath().includes(this)||(this.open=!1,this.emit("hmwc-hide",{}))},document.addEventListener("mousedown",this._calendarLoseFocus)))}handleLabelChange(){this.toggleAttribute("no-label",!this.label)}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}clear(){this.value=this.input.value="",this.dates=[],this.valid=!1,this.invalid=!1,this.error="",this.emit("hmwc-change"),this.emit("hmwc-input")}contextMenuItems(e){if(this.textarea)return null;let t=this.input;if(!t)return[];let r=e.path??[],i=this.shadowRoot?.querySelectorAll('[part="label"], [part="help"], [part="calendar"]')??[];if(Array.from(i).some(A=>r.includes(A)))return[];let o=t.value,a=t.selectionStart!==null&&t.selectionEnd!==null,l=a?t.selectionStart:0,h=a?t.selectionEnd:o.length,d=o.slice(l,h),p=this.type==="password"&&!this.visible,m=!this.disabled&&!this.readonly,y=Qt(),_=A=>{a?t.setRangeText(A,l,h,"end"):t.value=A,t.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))};return[{value:"cut",label:"Cut",icon:"scissors",shortcut:`${y}X`,disabled:!m||p||!d,action:async A=>{await A.copy(d)&&_("")}},{value:"copy",label:"Copy",icon:"copy",shortcut:`${y}C`,disabled:p||!o,action:async A=>{await A.copy(d||o)}},{value:"paste",label:"Paste",icon:"clipboard",shortcut:`${y}V`,disabled:!m,action:async A=>{let N=await A.paste();N!==null&&_(N)}},{value:"select-all",label:"Select all",icon:"cursor-text",shortcut:`${y}A`,disabled:!!this.disabled||!o,action:()=>{this.focus(),this.select()}},{value:"clear",label:"Clear",icon:"eraser",disabled:!m||!o,action:()=>this.clear()}]}getDates(){return this.dates}checkValidity(){if(this._resetValidity(),this.disabled)return!0;if(this._customError!==null)return this.failValidity("customError");let e=String(this.value??"");if(this.required&&!e.trim())return this.failValidity("valueMissing");if(this.minlength!=null&&e.trim().length>0&&e.length<this.minlength)return this.failValidity("tooShort");if(this._isUnparseableDate(e))return this.failValidity("badInput");let t=this.input?.checkValidity();if(t===!1){let r=this.input.validity,i=["valueMissing","tooShort","tooLong","patternMismatch","rangeUnderflow","rangeOverflow","typeMismatch","badInput","customError"];for(let o of i)r[o]&&(this._validity[o]=!0);this._validity.valid=!1}return t}failValidity(e){return this._validity[e]=!0,this._validity.valid=!1,!1}_isUnparseableDate(e){return this.type!=="date"||!e.trim()?!1:e!==this._datesText()&&!this.parseDate(e)}nativeErrorMessage(){let e=this.input.validity;if(e.patternMismatch&&!e.customError){if(this.patternMessage)return this.patternMessage;let t=this.mask&&!this.pattern?ys[this.mask]:void 0;if(t)return t}return this.input.validationMessage}reportValidity(){if(this.disabled)return!0;if(this.checkValidity(),this._customError!==null)return this.invalid=!0,this.error=this._customError,this.emit("hmwc-invalid"),!1;let e=String(this.value??"");return this.required&&!e.trim()?(this.invalid=!0,this.error="Please fill out this field.",this.emit("hmwc-invalid"),!1):this.minlength!=null&&e.trim().length>0&&e.length<this.minlength?(this.invalid=!0,this.error=`Value must be at least ${this.minlength} characters`,this.emit("hmwc-invalid"),!1):this._validity.badInput&&this.type==="date"?(this.invalid=!0,this.error=`Invalid date format. Try ${this.dateFormat}`,this.emit("hmwc-invalid"),!1):this.input&&!this.input.checkValidity()?(this.invalid=!0,this.error=this.nativeErrorMessage(),this.emit("hmwc-invalid"),!1):(this.invalid&&(this.invalid=!1,this.error="",this._emitValid()),!0)}get validationMessage(){return this.input.validationMessage}set validationMessage(e){this.input.setCustomValidity(e)}formatDate(e){let t=e.getFullYear().toString(),r=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getDate().toString().padStart(2,"0");switch(this.dateFormat){case"YYYY-MM-DD":return`${t}-${r}-${i}`;case"YYYY/MM/DD":return`${t}/${r}/${i}`;case"DD/MM/YYYY":return`${i}/${r}/${t}`;case"DD-MM-YYYY":return`${i}-${r}-${t}`;case"MM-DD-YYYY":return`${r}-${i}-${t}`;case"MM/DD/YYYY":default:return`${r}/${i}/${t}`}}parseDate(e){if(!e||!e.trim())return null;let t=this.parseDateByFormat(e);if(t)return t;let r=Date.parse(e);if(!isNaN(r))return new Date(r);let i=[/^(\d{1,2})[\\-](\d{1,2})[\\-](\d{4})$/,/^(\d{4})[\\-](\d{1,2})[\\-](\d{1,2})$/,/^(\d{1,2})[\\-](\d{1,2})[\\-](\d{2})$/];for(let o of i){let a=e.match(o);if(a){let l,h,d;o===i[1]?[,l,h,d]=a.map(Number):o===i[2]?([,h,d,l]=a.map(Number),l+=2e3):[,h,d,l]=a.map(Number);let p=new Date(l,h-1,d);if(p.getFullYear()===l&&p.getMonth()===h-1&&p.getDate()===d)return p}}return null}parseDateByFormat(e){let t=this.dateFormat.includes("/")?"/":"-",r=e.split(t);if(r.length!==3)return null;let i=this.dateFormat.split(t),o=i.findIndex(y=>y==="YYYY"),a=i.findIndex(y=>y==="MM"),l=i.findIndex(y=>y==="DD");if(o===-1||a===-1||l===-1)return null;let h=parseInt(r[o],10),d=parseInt(r[a],10),p=parseInt(r[l],10);if(isNaN(h)||isNaN(d)||isNaN(p))return null;let m=new Date(h,d-1,p);return m.getFullYear()===h&&m.getMonth()===d-1&&m.getDate()===p?m:null}updateDates(e,t=!1){if(!e.length){t&&(this.dates=[]);return}e.length===0?this.value="":e.length===1?(e[0]instanceof Date||(e[0]=new Date(e[0])),t||(this.value=this.formatDate(e[0])),this.month=e[0].getMonth(),this.year=e[0].getFullYear()):e.length>1&&(t||(this.value=`Multiple Dates Selected (${e.length})`)),this.dates=e}handleFocus(){this.type==="date"&&(this.isManuallyTyping=!0),this.emit("hmwc-focus")}handleBlur(){if(this.type==="date"&&this.isManuallyTyping&&(this.parseAndUpdateDate(),this.isManuallyTyping=!1),this.type==="email"&&this.value){let t=String(this.value).trim();t!==this.value&&(this.value=t,this.input&&(this.input.value=t)),this.validateEmail()}this.type==="filepath"&&this.validateFilePath(),this.required&&!String(this.value??"").trim()?(this.invalid=!0,this.emit("hmwc-invalid")):this.required&&this.invalid&&this._customError===null&&!this._isUnparseableDate(String(this.value??""))&&(this.invalid=!1,this.error="");let e=String(this.value??"");this.minlength!=null&&e.trim().length>0&&e.length<this.minlength?(this.invalid=!0,this.error=`Value must be at least ${this.minlength} characters`,this.emit("hmwc-invalid")):this.minlength!=null&&this.invalid&&this._customError===null&&e.length>=this.minlength&&(this.invalid=!1,this.error=""),this.emit("hmwc-blur"),this.autoFocusLost=!0}handleInput(e){if(this.mask&&!this.textarea&&e?.isComposing)return;if(this._clearCustomErrorOnInput(),this.type==="date"&&this.isManuallyTyping){let r=this.input.value,i=this.input.selectionStart??r.length,o=this.countDigitsBefore(r,i),a=r.replace(/\D/g,""),l=!this._isDeleting,h=this.formatDateDigits(a,l);h!==r&&(this.input.value=h),this.value=h;let d=this.findCursorPosition(h,o);this.input.setSelectionRange(d,d)}else this.mask&&!this.textarea?this.handleMaskedInput(e):this.value=this.input.value;this.type==="number"&&this.input.validity?.badInput&&(this.input.value="",this.value="");let t=e?.inputType;if(t==="insertReplacementText"||t==="insertFromPaste"){let r=this.invalid?this.error:null;if(this.sanitizeAutofill(),this.invalid&&this.error!==r){this.emit("hmwc-input",{detail:{value:this.value}});return}}if(this.enforceMaxLength(),this.checkDesiredLength(),this.invalid&&this._customError===null){let r=String(this.value??""),i=!this.required||r.trim().length>0,o=this.minlength==null||r.length>=this.minlength;i&&o&&(this.invalid=!1,this.error="")}this.emit("hmwc-input",{detail:{value:this.value}})}handleChange(){this.input.value&&(this.value=this.input.value),this.enforceMaxLength(),this.type==="date"&&this.parseAndUpdateDate(),this.type==="email"&&this.value&&this.validateEmail(),this.type==="filepath"&&this.value&&this.validateFilePath(),this.checkDesiredLength(),this.emit("hmwc-change")}handleKeyDown(e){this.type==="date"&&(e.key==="Backspace"||e.key==="Delete"?this._isDeleting=!0:this._isDeleting=!1,e.key==="Enter"&&(e.preventDefault(),this.parseAndUpdateDate(),this.blur()),e.key==="Escape"&&(e.preventDefault(),this.dates.length===1?this.value=this.formatDate(this.dates[0]):this.dates.length>1?this.value=`Multiple Dates Selected (${this.dates.length})`:this.value="",this.input.value=this.value,this.blur()),e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!/\d/.test(e.key)&&e.preventDefault())}parseAndUpdateDate(){let e=this.input.value;if(!e||!e.trim()){this.updateDates([],!0);return}let t=this.parseDate(e);t?(this.updateDates([t],!0),this.value=this.formatDate(t),this.input.value=this.value,this.invalid=!1,this.error=""):(this.invalid=!0,this.error=`Invalid date format. Try ${this.dateFormat}`)}validateFilePath(){let e=this.value;if(!e||!e.trim()){this.invalid=!0,this.error="File path cannot be blank or whitespace only",this.emit("hmwc-invalid");return}let t=e.trim();if(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{E0020}-\u{E007F}]|[\u{FE00}-\u{FE0F}]|\u{200D}|\u{20E3}/u.test(t)){this.invalid=!0,this.error="File path cannot contain emojis",this.emit("hmwc-invalid");return}if(/[<>"|?*]/.test(t)||t.includes("\0")){this.invalid=!0,this.error='Path contains invalid characters: < > " | ? *',this.emit("hmwc-invalid");return}let o=t.replace(/\\/g,"/"),a=/^[a-zA-Z]:\//.test(o),l=o.startsWith("//"),h=o.startsWith("/")&&!l,d=/^\.{0,2}\//.test(o)||/^[^/]/.test(o);if(!(a||l||h||d)){this.invalid=!0,this.error="Please enter a valid file path",this.emit("hmwc-invalid");return}let p=l?o.slice(2):a?o.slice(3):h?o.slice(1):o;if(/\/{2,}/.test(p)){this.invalid=!0,this.error="Path contains empty segments",this.emit("hmwc-invalid");return}if(l&&o.slice(2).split("/").filter(Boolean).length<2){this.invalid=!0,this.error="UNC path must include a server and share name (e.g. \\\\server\\share)",this.emit("hmwc-invalid");return}this.invalid=!1,this.error=""}validateEmail(){let e=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,t=this.value.trim();t&&(e.test(t)?(this.invalid=!1,this.error=""):(this.invalid=!0,this.error="Please enter a valid email address",this.emit("hmwc-invalid")))}getEffectiveMaxLength(){return this.maxlength!=null?this.maxlength:s.MAX_LENGTH_BY_TYPE[this.type]??s.DEFAULT_MAX_LENGTH}enforceMaxLength(){let e=this.getEffectiveMaxLength(),t=String(this.value??"");if(t.length<=e)return!1;let r=t.slice(0,e);return this.value=r,this.input&&(this.input.value=r),this.invalid=!0,this.error=`Value exceeds maximum length of ${e} characters`,this.emit("hmwc-invalid"),!0}checkDesiredLength(){if(this.minlength==null||this.maxlength==null||this.minlength!==this.maxlength)return;String(this.value??"").length===this.minlength?(this.valid=!0,this.invalid=!1):this.valid=!1}sanitizeAutofill(){let e=String(this.value??"");if(e)switch(this.enforceMaxLength(),this.type){case"email":{/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.trim())||(this.value=this.input.value="",this.invalid=!0,this.error="Autofill value is not a valid email address",this.emit("hmwc-invalid"));break}case"tel":{/^[\d\s+().-]+$/.test(e)||(this.value=this.input.value="",this.invalid=!0,this.error="Autofill value is not a valid phone number",this.emit("hmwc-invalid"));break}case"number":{isNaN(Number(e))&&(this.value=this.input.value="",this.invalid=!0,this.error="Autofill value is not a valid number",this.emit("hmwc-invalid"));break}case"filepath":{this.validateFilePath(),this.invalid&&(this.value=this.input.value="");break}case"url":{try{new URL(e)}catch{this.value=this.input.value="",this.invalid=!0,this.error="Autofill value is not a valid URL",this.emit("hmwc-invalid")}break}default:break}}applyMask(e,t=!0){let r=e.replace(/\D/g,""),i=this.mask?bs[this.mask]:void 0;if(!i)return r.slice(0,this.getEffectiveMaxLength());let o=i.reduce((h,d)=>h+d,0);t&&this.mask==="phone"&&r.length===o+1&&r.startsWith("1")&&(r=r.slice(1)),r=r.slice(0,o);let a=[],l=0;for(let h of i){if(l>=r.length)break;a.push(r.slice(l,l+h)),l+=h}return a.join("-")}handleMaskedInput(e){let t=this.input,r=t.value,i=t.selectionStart??r.length,o=e?.inputType,a=this.countDigitsBefore(r,i),l=r,h=r.replace(/\D/g,""),d=h===String(this.value??"").replace(/\D/g,"");d&&o==="deleteContentBackward"&&a>0?(l=h.slice(0,a-1)+h.slice(a),a-=1):d&&o==="deleteContentForward"&&a<h.length&&(l=h.slice(0,a)+h.slice(a+1));let p=this.applyMask(l,o!=="insertText");p!==r&&(t.value=p),this.value=p;let m=this.findCaretAfterDigits(p,a);this.shadowRoot?.activeElement===t&&t.setSelectionRange(m,m)}handleCompositionEnd(){this.mask&&!this.textarea&&this.input.value!==String(this.value??"")&&this.handleInput()}findCaretAfterDigits(e,t){if(t<=0)return 0;let r=0;for(let i=0;i<e.length;i++)if(/\d/.test(e[i])&&r++,r===t)return i+1;return e.length}getDateFormatInfo(){let e=this.dateFormat.includes("/")?"/":"-",t=this.dateFormat.split(e).map(r=>r.length);return{separator:e,partLengths:t}}formatDateDigits(e,t=!1){let{separator:r,partLengths:i}=this.getDateFormatInfo(),o=i.reduce((d,p)=>d+p,0),a=e.slice(0,o),l="",h=0;for(let d=0;d<i.length&&h<a.length;d++){d>0&&(l+=r);let p=a.slice(h,h+i[d]);l+=p,h+=i[d]}if(t&&a.length>0&&a.length<o){let d=0;for(let p=0;p<i.length;p++)if(d+=i[p],a.length===d&&p<i.length-1){l+=r;break}}return l}countDigitsBefore(e,t){let r=0;for(let i=0;i<t&&i<e.length;i++)/\d/.test(e[i])&&r++;return r}findCursorPosition(e,t){let r=0;for(let i=0;i<e.length;i++){if(r===t){for(;i<e.length&&!/\d/.test(e[i]);)i++;return i}/\d/.test(e[i])&&r++}return e.length}handlePaste(e){if(this.type==="number"){let N=e.clipboardData?.getData("text");if(!N)return;e.preventDefault();let Ze=Number(N.trim());if(!isNaN(Ze)&&N.trim()!==""){let ge=String(Ze);this.input.value=ge,this.value=ge,this.emit("hmwc-input",{detail:{value:this.value}});return}let D="",te=!1;for(let ge of N.trim())ge==="-"&&D===""?D+=ge:ge==="."&&!te?(te=!0,D+=ge):ge>="0"&&ge<="9"&&(D+=ge);D&&!isNaN(Number(D))&&D!=="-"&&D!=="."&&(this.input.value=D,this.value=D,this.emit("hmwc-input",{detail:{value:this.value}}));return}if(this.type!=="date")return;let t=e.clipboardData?.getData("text");if(!t)return;e.preventDefault();let r=this.parseDate(t);if(r){let N=this.formatDate(r);this.input.value=N,this.value=N,this.updateDates([r],!0),this.invalid=!1,this.error="",this.input.setSelectionRange(N.length,N.length),this.emit("hmwc-input",{detail:{value:this.value}});return}let i=this.input.value,o=this.input.selectionStart??i.length,a=this.input.selectionEnd??o,l=i.slice(0,o),h=i.slice(a),p=(l+t+h).replace(/\D/g,""),m=this.formatDateDigits(p,!0),y=t.replace(/\D/g,"").length,_=this.countDigitsBefore(i,o),A=this.findCursorPosition(m,_+y);this.input.value=m,this.value=m,this.input.setSelectionRange(A,A),this.emit("hmwc-input",{detail:{value:this.value}})}get interactive(){return!this.disabled&&!this.readonly}toggleCalendar(){this.type!=="date"||!this.interactive||(this.open=!this.open)}handleClick(){this.isManuallyTyping||this.toggleCalendar()}handleClear(){this.clear(),this.input.focus()}handleToggle(){this.visible=!this.visible}handleCalendarChange(e){let t=e.detail.value;this.updateDates(t),this.multiSelect||document.addEventListener("mouseup",()=>{this.open=!1},{once:!0,capture:!0}),this.emit("hmwc-change")}connectedCallback(){super.connectedCallback(),this.toggleAttribute("no-label",!this.label),this.updateDates(this.dates),this.type==="tel"&&!this.pattern&&!this.mask&&(this.pattern=this.noFormat?ks:xs),this.type==="email"&&!this.pattern&&!this.mask&&(this.pattern="[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}"),this.type==="filepath"&&!this.pattern&&!this.mask&&(this.pattern='([a-zA-Z]:\\\\|\\\\\\\\|/|\\.\\.?/|[^<>"|?*\\x00])([^<>"|?*\\x00]*)'),this.type==="filepath"&&!this.placeholder&&(this.placeholder="C:\\folder\\file.txt or /path/to/file"),!this.sm&&!this.md&&!this.lg&&(this.md=!0),this.type==="password"&&this.minlength===void 0&&(this.minlength=8),this.autofocus||(this.autoFocusLost=!0),this.type==="date"&&!this.placeholder&&(this.placeholder=this.dateFormat),(this.month||this.month&&this.year)&&(this.lockCalendarNavigation=!0),this.maxlength==null&&(this.maxlength=s.MAX_LENGTH_BY_TYPE[this.type]??s.DEFAULT_MAX_LENGTH),this.autocomplete==null&&["filepath","number"].includes(this.type)&&(this.autocomplete="off")}disconnectedCallback(){super.disconnectedCallback(),this._calendarLoseFocus&&(document.removeEventListener("mousedown",this._calendarLoseFocus),this._calendarLoseFocus=null)}get fallbackAccessibleName(){if(!(this.label||this.controllers.slot.test()))return this.placeholder||this.name||void 0}get controlAccessibleName(){return this.accessibleLabel||this.fallbackAccessibleName}render(){let e=this.textarea?Yt`textarea`:Yt`input`,t=this.type==="password"&&this.visible||this.type==="date"||this.type==="filepath",r=v({input:!0,"no-label":!this.label,"label-wrap":!!this.labelWrap,small:!!this.sm,medium:!!this.md,large:!!this.lg,filled:!!this.filled,underline:!!this.underline,prefix:!!this.prefix,suffix:!!this.suffix||!!this.toggle,units:!this.units,pill:!!this.pill,toggle:!!this.toggle,clearable:!!this.clearable,textarea:!!this.textarea,disabled:!!this.disabled,date:this.type==="date",number:this.type==="number","no-spin":this.type==="number"&&(!this.max||Number(this.max)>100)||this.minlength!=null&&this.maxlength!=null&&this.minlength===this.maxlength&&this.minlength>3,calendar:this.open,valid:!!this.valid,invalid:!!this.invalid});return ve`
      <div part='base' class=${r}>

        <!-- Label -->
        <!-- No whitespace after the slot: it would show as a space before the required indicator. -->
        <label part="label" class="input__label" for='hmwc-input' aria-hidden=${!this.label}><slot>${this.label}</slot></label>

        <!-- Styling Wrappers -->
        <span class="input__wrapper">

          <!-- Field box: the calendar toggle and the field. A date field draws
               its border round both; for other types it is display: contents.
               The help text stays outside it, below the box. -->
          <span part="box" class="input__box">

            <!-- Calendar Toggle Button -->
            ${this.type==="date"&&!this.suffix?ve`
                    <slot name="calendar-toggle" part="calendar-toggle" class="input__calendar_toggle">
                      <hmwc-button
                        ?sm=${this.sm}
                        ?lg=${this.lg}
                        ?disabled=${!this.interactive}
                        fit
                        icon="calendar"
                        @hmwc-click=${this.toggleCalendar}></hmwc-button>
                    </slot>
                  `:""}

            <!-- Input Box -->
            <div class='input__field' part="field">

              <!-- Prefix Icon -->
              <slot name="prefix" part="prefix" class="input__prefix">
                ${this.prefix?ve`<hmwc-icon src=${this.prefix}></hmwc-icon>`:""}
              </slot>

              <!-- Input/Textarea Element -->
              <${e}
                part="input"
                id='hmwc-input'
                class="input__control"
                .value=${tt(this.value)||""}
                name=${b(this.name)}
                title=${this.title}
                type=${this.textarea?void 0:t?"text":this.type}
                placeholder=${b(this.placeholder)}
                pattern=${b(this.pattern??(this.mask?ws[this.mask]:void 0))}
                ?readonly=${this.readonly}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?autofocus=${this.autofocus}
                minlength=${b(this.minlength)}
                maxlength=${b(this.mask?void 0:this.maxlength)}
                min=${b(this.min)}
                max=${b(this.max)}
                rows=${b(this.rows)}
                autocapitalize=${b(this.autocapitalize)}
                autocomplete=${b(this.autocomplete)}
                autocorrect=${b(this.autocorrect)}
                spellcheck=${b(this.spellcheck)}
                inputmode=${b(this.inputmode??(this.mask?_s[this.mask]:void 0))}
                aria-describedby="help"
                aria-label=${b(this.controlAccessibleName)}
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
                @input=${this.handleInput}
                @change=${this.handleChange}
                @click=${this.handleClick}
                @keydown=${this.handleKeyDown}
                @paste=${this.handlePaste}
                @compositionend=${this.handleCompositionEnd}
                /></${e}>

              <!-- Suffix Icon -->
               ${this.suffix||this.loading?ve` <slot
                       name="suffix"
                       part="suffix"
                       class="input__suffix"
                       @click=${this.type==="date"?this.toggleCalendar:void 0}
                       style=${this.type==="date"&&this.interactive?"cursor: pointer;":""}>
                       ${this.suffix?ve`<hmwc-icon src=${this.suffix}></hmwc-icon>`:""}
                       ${!this.valid&&this.loading?ve`<hmwc-spinner primary></hmwc-spinner>`:""}
                     </slot>`:""}

             ${this.units?ve`<div part="units" class="input__units">${this.units}</div>`:""}

              <!-- Clear Button -->
               ${!this.loading&&this.clearable&&this.interactive&&this.value&&!this.valid?ve` <slot name="clear" part="clear" class="input__clear">
                       <hmwc-button basic sm icon="x-circle-fill" @hmwc-click=${this.handleClear}></hmwc-button>
                     </slot>`:""}

              <!-- Password Visibility Toggle -->
              <slot name='toggle' part='toggle' class='input__toggle'>
                ${this.toggle?ve` <hmwc-button basic sm ?disabled=${this.disabled} icon=${this.visible?"eye-slash":"eye"} @hmwc-click=${this.handleToggle}> </hmwc-button> `:""}
              </slot>
            </div>
          </span>


            <!-- Help Text -->
            <!-- The error replaces the help text, led by an icon so it reads as a status, not a button -->
            <slot name="help" part="help" id="help" class="input__help" aria-hidden=${!this.help&&!(this.invalid&&this.error)}>
                ${this.invalid&&this.error?ve`<span part="error" class="input__error"><hmwc-icon part="error-icon" class="input__error-icon" src="exclamation-circle-fill"></hmwc-icon>${this.error}</span>`:this.help}
            </slot>


            <!-- Calendar -->
            ${this.type==="date"?ve` <div part="calendar" class="input__calendar" @mouseup=${i=>i.stopPropagation()}>
                    <hmwc-calendar
                      ?multiple=${this.multiSelect}
                      .value=${this.dates instanceof Array?this.dates:[this.dates]}
                      month=${b(this.month)}
                      year=${b(this.year)}
                      ?navigation=${!this.lockCalendarNavigation}
                      @hmwc-change=${this.handleCalendarChange}
                      @blur=${()=>this.emit("hmwc-hide")}></hmwc-calendar>
                  </div>`:""}

        </span>

    </div>
    `}};C.styles=vo;C.DEFAULT_MAX_LENGTH=2e3;C.MAX_LENGTH_BY_TYPE={email:254,tel:17,url:2083,filepath:4096,number:20,password:128};T([w()],C.prototype,"initialValueDateParsed",void 0);T([w()],C.prototype,"autoFocusLost",void 0);T([w()],C.prototype,"isManuallyTyping",void 0);T([w()],C.prototype,"_isDeleting",void 0);T([w()],C.prototype,"lockCalendarNavigation",void 0);T([n({type:Array,reflect:!0})],C.prototype,"dates",void 0);T([n({type:String,reflect:!0})],C.prototype,"type",void 0);T([n({type:Boolean,reflect:!0})],C.prototype,"fluid",void 0);T([n({type:Boolean,reflect:!0})],C.prototype,"filled",void 0);T([n({type:Boolean,reflect:!0})],C.prototype,"pill",void 0);T([n({type:Boolean,reflect:!0})],C.prototype,"underline",void 0);T([n({type:String})],C.prototype,"prefix",void 0);T([n({type:String})],C.prototype,"suffix",void 0);T([n({type:Boolean,reflect:!0,attribute:"label-wrap"})],C.prototype,"labelWrap",void 0);T([n({type:Boolean,reflect:!0,attribute:"no-format"})],C.prototype,"noFormat",void 0);T([n({type:String})],C.prototype,"pattern",void 0);T([n({type:String,attribute:"pattern-message"})],C.prototype,"patternMessage",void 0);T([n({type:String,reflect:!0})],C.prototype,"mask",void 0);T([n({type:String,attribute:"aria-label"})],C.prototype,"accessibleLabel",void 0);T([n({type:String,attribute:"date-format"})],C.prototype,"dateFormat",void 0);T([n({type:Boolean})],C.prototype,"multiSelect",void 0);T([n({type:String,reflect:!0})],C.prototype,"units",void 0);T([n({type:Boolean,reflect:!0})],C.prototype,"loading",void 0);T([n({type:Boolean})],C.prototype,"valid",void 0);T([n({type:String})],C.prototype,"help",void 0);T([n({type:Boolean,reflect:!0})],C.prototype,"clearable",void 0);T([n({type:Boolean,reflect:!0})],C.prototype,"textarea",void 0);T([n({type:String})],C.prototype,"placeholder",void 0);T([n({type:Boolean,reflect:!0})],C.prototype,"readonly",void 0);T([n({type:Boolean,reflect:!0})],C.prototype,"toggle",void 0);T([n({type:Boolean})],C.prototype,"visible",void 0);T([n({type:Number})],C.prototype,"rows",void 0);T([n({type:Number})],C.prototype,"minlength",void 0);T([n({type:Number})],C.prototype,"maxlength",void 0);T([n({type:String})],C.prototype,"min",void 0);T([n({type:String})],C.prototype,"max",void 0);T([n({type:Number})],C.prototype,"month",void 0);T([n({type:Number})],C.prototype,"year",void 0);T([n({type:String})],C.prototype,"autocapitalize",void 0);T([n({type:Boolean,reflect:!0})],C.prototype,"autocorrect",void 0);T([n({type:String})],C.prototype,"autocomplete",void 0);T([n({type:Boolean})],C.prototype,"spellcheck",void 0);T([n({type:String})],C.prototype,"inputmode",void 0);T([w()],C.prototype,"open",void 0);T([I(".input__control")],C.prototype,"input",void 0);T([I("hmwc-calendar")],C.prototype,"datepicker",void 0);T([u("value")],C.prototype,"handleValueChange",null);T([u("value")],C.prototype,"handleValueMaxLength",null);T([u(["value","mask"])],C.prototype,"handleMaskChange",null);T([u("open")],C.prototype,"handleCalendarToggle",null);T([u("label")],C.prototype,"handleLabelChange",null);C.define("hmwc-input",C);var bo=f`
  :host {
    --menu-width: 100%;
    --menu-max-height: calc(16 * var(--hmwc-rem, 1rem));
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
      --input-height: calc(1.5 * var(--hmwc-rem, 1rem));
      --input-font-size: var(--hmwc-font-size-x-small);
    }

    & .menu__search--always {
      padding: var(--menu-search-padding, var(--hmwc-spacing-x-small) var(--hmwc-spacing-x-small) var(--hmwc-spacing-2x-small));
      flex-shrink: 0;
      contain: inline-size;

      --input-width: 100%;
      --input-height: var(--menu-search-height, calc(1.75 * var(--hmwc-rem, 1rem)));
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
      outline: none;
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
      transform: translateY(calc(-0.55 * var(--hmwc-rem, 1rem)));
    }
  }
`;var pe=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},O=class extends g{constructor(){super(...arguments),this.filteredItems=[],this.menuItems=[],this._hasSlottedItems=!1,this._searchVisible=!1,this._typeaheadBuffer="",this._typeaheadMatchIndex=0,this._boundHandleTypeahead=this.handleTypeahead.bind(this),this._upgradeRequeued=!1,this.align="start"}static get dependencies(){return[R,H,C,we,$]}get isTypeaheadActive(){return this._typeaheadBuffer.length>0}show(){this.active=!0}hide(){this.active=!1}toggle(){this.active=!this.active}select(e){this.menuItems.every(t=>!(t instanceof R)||t.heading||t.value!==e)||this.emit("hmwc-select",{detail:{value:e}})}focusItem(e="first"){let t=this._navigableItems(),r=e==="first"?t[0]:t[t.length-1];r&&this._focusItem(r)}_navigableItems(){return(this.filter!==void 0?this.filteredItems:this.menuItems).filter(t=>t instanceof R&&!t.heading&&!t.hidden&&t.isConnected)}_focusItem(e){e.item?.focus()}handleNavigation(e){if(!this.active||e.altKey||e.ctrlKey||e.metaKey||e.composedPath().some(o=>o instanceof C))return!1;let t=this._navigableItems();if(!t.length)return!1;let r=t.findIndex(o=>!!o.shadowRoot?.activeElement),i;switch(e.key){case"ArrowDown":i=r<0?0:(r+1)%t.length;break;case"ArrowUp":i=r<0?t.length-1:(r-1+t.length)%t.length;break;case"Home":i=0;break;case"End":i=t.length-1;break;case"Enter":case" ":{if(e.key===" "&&this._typeaheadBuffer)return!1;let o=r>=0?t[r]:this._typeaheadBuffer?t.find(a=>a.active):void 0;return o?(e.preventDefault(),o.item?.click(),!0):!1}default:return!1}return e.preventDefault(),this._focusItem(t[i]),!0}playAnimation(){window.requestAnimationFrame(()=>{let e=this.style.getPropertyValue("animation");this.style.setProperty("animation","none"),this.style.setProperty("animation",e)})}filterItems(){let e=this.filter?.toLowerCase()||"",t=i=>((i.value||i.label)??"").toString().toLowerCase().includes(e),r=i=>{for(let o of this.menuItems.slice(i+1)){if(o instanceof H||o instanceof R&&o.heading)return!1;if(o instanceof R&&t(o))return!0}return!1};this.filteredItems=this.filter===""?this.menuItems:this.menuItems.filter((i,o)=>i instanceof H?!0:i.heading?r(o):t(i)),this._hasSlottedItems&&this.menuItems.forEach(i=>{i instanceof H||(i.hidden=!this.filteredItems.includes(i))})}handleSearch(e){this.filter=e.target.value,this.filterItems()}getCheckableItems(){return this.menuItems.filter(e=>e instanceof R&&!!e.checkable&&!e.heading)}areAllChecked(){let e=this.getCheckableItems();return e.length>0&&e.every(t=>t.checked)}areSomeChecked(){let e=this.getCheckableItems();return e.some(t=>t.checked)&&!e.every(t=>t.checked)}checkAll(){this.getCheckableItems().forEach(e=>{e.checked=!0}),this.requestUpdate(),this.emit("hmwc-change",{detail:{value:"all"}})}uncheckAll(){this.getCheckableItems().forEach(e=>{e.checked=!1}),this.requestUpdate(),this.emit("hmwc-change",{detail:{value:"none"}})}handleSelectAll(){this.areAllChecked()?this.uncheckAll():this.checkAll()}async toggleSearch(){this._searchVisible=!this._searchVisible,this._searchVisible?(await this.updateComplete,this.shadowRoot?.querySelector(".menu__search")?.focus()):(this.filter="",this.filterItems())}hideSearch(){this.filter||(this._searchVisible=!1)}applyActiveState(){this.menuItems.forEach(e=>{if(!(e instanceof R))return;let t=this.activeValue!==void 0&&String(e.value)===String(this.activeValue);e.active=t})}scrollToActive(){let e=0,t=20,r=()=>{let i=this.shadowRoot?.querySelector(".menu__items");if(!i)return;if(i.clientHeight===0&&e<t){e++,requestAnimationFrame(r);return}let o=this._hasSlottedItems?Array.from(this.querySelectorAll("hmwc-menu-item")):Array.from(i.querySelectorAll("hmwc-menu-item")),a=o.findIndex(l=>{let h=l;return this.activeValue!==void 0&&String(h.value)===String(this.activeValue)});if(a>=0&&o.length>0){let l=i.scrollHeight/o.length,h=a*l;i.scrollTop=h-i.clientHeight/2+l/2}};requestAnimationFrame(r)}handleTypeahead(e){if(this.handleNavigation(e)||this.filter!==void 0&&(this.searchOpen||this._searchVisible))return;if(e.key==="Escape"){this._typeaheadBuffer="",this._typeaheadMatchIndex=0,clearTimeout(this._typeaheadTimeout);return}if(e.key==="Tab"&&this._typeaheadBuffer){e.preventDefault();let r=this.getTypeaheadMatches(this._typeaheadBuffer.toLowerCase());r.length>1&&(this._typeaheadMatchIndex=e.shiftKey?(this._typeaheadMatchIndex-1+r.length)%r.length:(this._typeaheadMatchIndex+1)%r.length,this.selectTypeaheadMatch(r[this._typeaheadMatchIndex]),this.resetTypeaheadBufferTimer());return}if(e.key==="Backspace"){if(!this._typeaheadBuffer)return;if(e.preventDefault(),this._typeaheadBuffer=this._typeaheadBuffer.slice(0,-1),this._typeaheadMatchIndex=0,this._typeaheadBuffer){let r=this.getTypeaheadMatches(this._typeaheadBuffer.toLowerCase());r.length&&this.selectTypeaheadMatch(r[0])}this.resetTypeaheadBufferTimer();return}if(e.key===" "&&!this._typeaheadBuffer||e.key.length!==1||e.ctrlKey||e.metaKey||e.altKey)return;e.preventDefault(),this._typeaheadBuffer+=e.key,this._typeaheadMatchIndex=0;let t=this.getTypeaheadMatches(this._typeaheadBuffer.toLowerCase());t.length&&this.selectTypeaheadMatch(t[0]),this.resetTypeaheadBufferTimer()}getTypeaheadMatches(e){return(this._hasSlottedItems?Array.from(this.querySelectorAll("hmwc-menu-item")).filter(r=>!r.hidden):(this.filter!==void 0?this.filteredItems:this.menuItems).filter(r=>r instanceof R)).filter(r=>r.heading?!1:(r.label??r.value??"").toString().toLowerCase().startsWith(e))}selectTypeaheadMatch(e){this.menuItems.forEach(i=>{i instanceof R&&(i.active=!1)}),e.active=!0;let t=this.shadowRoot?.querySelector(".menu__items");if(t&&t.scrollHeight>t.clientHeight){let i=this._hasSlottedItems?Array.from(this.querySelectorAll("hmwc-menu-item")):Array.from(t.querySelectorAll("hmwc-menu-item")),o=i.indexOf(e);if(o>=0&&i.length>0){let a=t.scrollHeight/i.length,l=o*a;t.scrollTop=l-t.clientHeight/2+a/2}}let r=this.menuItems.some(i=>i instanceof R&&!!i.shadowRoot?.activeElement);requestAnimationFrame(()=>r?this._focusItem(e):this._focusBase())}resetTypeaheadBufferTimer(){clearTimeout(this._typeaheadTimeout),this._typeaheadTimeout=setTimeout(()=>{this._typeaheadBuffer="",this._typeaheadMatchIndex=0,this.applyActiveState()},1e3)}handleSearchKeydown(e){e.key==="Enter"?(e.preventDefault(),this.emit("hmwc-search-submit",{detail:{value:this.filter??""}})):e.key==="ArrowDown"&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&(e.preventDefault(),this.focusItem("first"))}openUpdate(){this.playAnimation(),this.active||(this._typeaheadBuffer="",this._typeaheadMatchIndex=0,clearTimeout(this._typeaheadTimeout)),this.active&&this.searchOpen&&this.filter!==void 0&&this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".menu__search")?.focus()})}activeValueUpdate(){this.applyActiveState()}itemsUpdate(){this.items&&!this.items.length||(this.menuItems=[],this.items?.forEach(e=>{let t=Object.assign(document.createElement("hmwc-menu-item"),{label:e,value:e});this.menuItems.push(t)}))}menuItemsUpdate(){this.activeValue!==void 0&&this.applyActiveState(),this.align&&this.align!=="start"&&this.alignUpdate()}prefixUpdate(){setTimeout(()=>{!this.prefix&&!this.suffix&&!this.sm||this.menuItems.forEach(e=>{e instanceof R&&(this.prefix&&(e.prefix=this.prefix),this.suffix&&(e.suffix=this.suffix),this.sm&&(e.sm=!0))})},1)}alignUpdate(){setTimeout(()=>{this.menuItems.forEach(e=>{e instanceof R&&(e.center=this.align==="center")})},1)}handleSlotChange(){let e=this.controllers.slot.get();e.some(i=>i.tagName==="HMWC-MENU-ITEM"&&!(i instanceof R)||i.tagName==="HMWC-DIVIDER"&&!(i instanceof H))&&!this._upgradeRequeued&&(this._upgradeRequeued=!0,Promise.all([customElements.whenDefined("hmwc-menu-item"),customElements.whenDefined("hmwc-divider")]).then(()=>{this._upgradeRequeued=!1,this.handleSlotChange()}));let r=e.filter(i=>i instanceof R||i instanceof H);e.length&&(this._hasSlottedItems=!0,this.menuItems=r,this.filterItems(),this.prefixUpdate())}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._typeaheadTimeout),this.removeEventListener("keydown",this._boundHandleTypeahead)}connectedCallback(){super.connectedCallback(),this.itemsUpdate(),this.handleSlotChange(),this.active===void 0&&!this.closest("hmwc-dropdown, hmwc-attachment")&&(this.active=!0),this.addEventListener("keydown",this._boundHandleTypeahead)}get _baseDiv(){return this.shadowRoot?.querySelector('[role="menu"]')}_focusBase(){let e=this._baseDiv;this.matches(":focus-within")||e&&this.active&&e.focus({preventScroll:!0})}updated(e){super.updated(e),e.has("active")&&this.active&&(this.activeValue!==void 0&&this.scrollToActive(),requestAnimationFrame(()=>this._focusBase()))}render(){let e=v({menu:!0,active:!!this.active,submenu:this.slot==="submenu",filter:this.filter!==void 0,"select-all":!!this.selectAll}),t=this.filter!==void 0?this.filteredItems:this.menuItems,r=this.searchOpen&&this.filter!==void 0,i=this.selectAll||this.filter!==void 0&&!this.searchOpen,o=this.filter!==void 0&&!this.searchOpen,a=this.filter!==void 0&&(this._searchVisible||r);return c`
      <div part="base" class=${e}>
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
                        <hmwc-checkbox
                          sm
                          ?checked=${this.areAllChecked()}
                          ?indeterminate=${this.areSomeChecked()}
                          @hmwc-change=${l=>l.stopPropagation()}></hmwc-checkbox>
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
        <div
          class="menu__items"
          part="items"
          role="menu"
          tabindex="-1"
          @focus=${()=>this.emit("hmwc-focus")}
          @blur=${()=>this.emit("hmwc-blur")}>
          ${this._hasSlottedItems?"":t}
          <slot @slotchange=${()=>this.handleSlotChange()}></slot>
        </div>
        ${this.filter!==void 0&&this.filteredItems.length===0?c`<div class="menu__empty">No matches</div>`:""}
      </div>
    `}};O.styles=bo;pe([w()],O.prototype,"filteredItems",void 0);pe([w()],O.prototype,"menuItems",void 0);pe([w()],O.prototype,"_hasSlottedItems",void 0);pe([w()],O.prototype,"_searchVisible",void 0);pe([n({type:Boolean,reflect:!0})],O.prototype,"active",void 0);pe([n({type:Array})],O.prototype,"items",void 0);pe([n({type:String,reflect:!0})],O.prototype,"filter",void 0);pe([n({type:Boolean,attribute:"search-open",reflect:!0})],O.prototype,"searchOpen",void 0);pe([n({type:String,attribute:"search-placeholder"})],O.prototype,"searchPlaceholder",void 0);pe([n({attribute:"active-value"})],O.prototype,"activeValue",void 0);pe([n({type:Boolean,reflect:!0})],O.prototype,"compact",void 0);pe([n({type:Boolean,reflect:!0})],O.prototype,"selectAll",void 0);pe([n({type:String,reflect:!0})],O.prototype,"prefix",void 0);pe([n({type:String,reflect:!0})],O.prototype,"suffix",void 0);pe([n({type:Boolean,reflect:!0})],O.prototype,"sm",void 0);pe([n({type:String,reflect:!0})],O.prototype,"align",void 0);pe([u("active")],O.prototype,"openUpdate",null);pe([u("activeValue")],O.prototype,"activeValueUpdate",null);pe([u("items")],O.prototype,"itemsUpdate",null);pe([u("menuItems")],O.prototype,"menuItemsUpdate",null);pe([u(["prefix","suffix","sm"])],O.prototype,"prefixUpdate",null);pe([u("align")],O.prototype,"alignUpdate",null);O.define("hmwc-menu",O);var ai=f`
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

  /* A menu draws its own border, background and shadow on its inner panel,
     so its host must not paint a second one. The host is only the positioned
     box and can be wider than the panel (a context menu's min-width), which
     showed as a stray shadow beside the menu. */
  hmwc-menu.attachment__content {
    box-shadow: none;
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
`,wo=f`
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
`;var De=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},yo=new WeakSet;function $s(s){let e=s;!("adoptedStyleSheets"in e)||yo.has(e)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,ai.styleSheet??Cs()],yo.add(e))}var Nr;function Cs(){return Nr||(Nr=new CSSStyleSheet,Nr.replaceSync(ai.cssText)),Nr}var P=class extends g{constructor(){super(...arguments),this.trigger="click",this.placement="bottom",this.distance=2,this.skidding=0,this.flip=!0,this._forwardedSlots=new WeakSet,this._menuUpgradeQueued=!1,this._menuSelectHandler=e=>{e.stopPropagation();let t=e.detail??{};this.emit("hmwc-select",{detail:t})},this._menuChangeHandler=e=>{e.stopPropagation();let t=e.detail??{};this.emit("hmwc-change",{detail:t})}}static get dependencies(){return[O]}show(){this.active=!0}hide(){this.active=!1}toggle(){this.content&&(this.active=!this.active,this.content instanceof O&&(this.content.active=this.active))}get _anchorId(){return this.name??this._uid??""}get _anchorNameCarrier(){let e=this.anchor instanceof HTMLElement?this.anchor:null;if(!e||!this.content)return e;let t=this.content.getRootNode(),r=e;for(;r.getRootNode()!==t;){let i=r.getRootNode();if(!(i instanceof ShadowRoot))return e;r=i.host}return r}register(){let e=this._anchorId;e&&(Jt.includes(e)||Jt.push(e))}unregister(){let e=this._anchorId;if(!e)return;let t=Jt.indexOf(e);t>=0&&Jt.splice(t,1)}retrieve(){let e=this.content;if(this.content=this.controllers.slot.get()[0],this.content?.tagName==="SLOT"){let t=this.content;this._forwardedSlots.has(t)||(this._forwardedSlots.add(t),t.addEventListener("slotchange",()=>this.handleSlotChange())),this.content=t.assignedElements({flatten:!0})[0]??t.children[0]}this.content&&this.content.tagName==="HMWC-MENU"&&!(this.content instanceof O)&&!this._menuUpgradeQueued&&(this._menuUpgradeQueued=!0,customElements.whenDefined("hmwc-menu").then(()=>{this._menuUpgradeQueued=!1,this.handleSlotChange()})),this.anchor||(this.anchor=this.controllers.slot.get("anchor")[0]),this.anchor instanceof String&&(this.anchor=document.querySelector(`#${this.anchor}`),this.append(this.anchor)),this.content&&(this.content.classList.add("attachment__content"),this.decorateContent()),e&&e!==this.content&&e instanceof O&&(e.removeEventListener("hmwc-select",this._menuSelectHandler),e.removeEventListener("hmwc-change",this._menuChangeHandler)),this.content instanceof O&&(this.content.removeEventListener("hmwc-select",this._menuSelectHandler),this.content.removeEventListener("hmwc-change",this._menuChangeHandler),this.content.addEventListener("hmwc-select",this._menuSelectHandler),this.content.addEventListener("hmwc-change",this._menuChangeHandler)),this.anchor&&(this.anchor.classList.add("attachment__anchor"),this.anchor.slot="anchor",this._anchorNameCarrier?.style.setProperty("anchor-name",`--${this._anchorId}`),this.content&&this.content.style.setProperty("position-anchor",`--${this._anchorId}`))}decorateContent(){if(!this.content)return;let e=this.content;e.dataset.placement=this.placement,e.classList.toggle("flip",!!this.flip),e.style.setProperty("--distance",`${this.distance}px`),e.style.setProperty("--skidding",`${this.skidding}px`),this.sync&&this.width&&e.style.setProperty("--attachment-popup-width",`${this.width}px`),$s(e.getRootNode())}triggerOnClick(e){if(!this.anchor||!(this.anchor instanceof HTMLElement))return;if(this._clickHandler){let r=this.anchor instanceof g?"hmwc-click":"click";this.anchor.removeEventListener(r,this._clickHandler),this._clickHandler=void 0}if(this._documentHandler&&(document.removeEventListener("mouseup",this._documentHandler),this._documentHandler=void 0),!e)return;let t=this.anchor instanceof g?"hmwc-click":"click";this._clickHandler=()=>{this.toggle()},this._documentHandler=r=>{if(!this.content)return;let i=r.composedPath();if(!i.includes(this.anchor)){if(i.includes(this.content)){this.stayOpen||this.hide();return}this.hide()}},this.anchor.addEventListener(t,this._clickHandler),document.addEventListener("mouseup",this._documentHandler)}triggerOnHover(e){if(!this.anchor||!(this.anchor instanceof HTMLElement))return;e&&this.triggerOnHover(!1);let t=e?"add":"remove";this[`${t}EventListener`]("mouseover",this.show),this[`${t}EventListener`]("mouseout",this.hide)}nameUpdate(e){let t=(typeof e=="string"?e:void 0)??this._uid??"",r=Jt.indexOf(t);r>=0&&Jt.splice(r,1),this.register()}placementUpdate(){this.decorateContent()}activityUpdate(){this.emit(`hmwc-${this.active?"show":"hide"}`),this.trigger==="hover"&&this.emit(`hmwc-${this.active?"focus":"blur"}`),!(!this.anchor||!(this.anchor instanceof HTMLElement))&&(this.width=this.anchor.offsetWidth,this._anchorNameCarrier?.style.setProperty("anchor-name",`--${this._anchorId}`),this.content&&(this.content.classList.add("attachment__content"),this.content.classList.toggle("active",!!this.active),this.decorateContent(),this.content.style.setProperty("position-anchor",`--${this._anchorId}`),this.content instanceof O&&(this.content.active=this.active),this.arrow&&this.active&&requestAnimationFrame(()=>this.positionArrow())))}positionArrow(){let e=this.shadowRoot?.querySelector(".attachment__arrow");if(!e||!this.anchor||!(this.anchor instanceof HTMLElement))return;let t=this.anchor.getBoundingClientRect(),r=t.left+t.width/2;e.style.top="",e.style.bottom="",e.style.left="",e.style.right="",e.style.translate="",e.style.borderTop="",e.style.borderBottom="",e.style.borderLeft="",e.style.borderRight="",e.style.clipPath="",this.placement.startsWith("bottom")?(e.style.top=`${t.bottom+this.distance}px`,e.style.left=`${r}px`,e.style.translate="-50% -50%",e.style.borderRight="none",e.style.borderBottom="none",e.style.clipPath="polygon(0 0, 100% 0, 0 100%)"):this.placement.startsWith("top")&&(e.style.top=`${t.top-this.distance}px`,e.style.left=`${r}px`,e.style.translate="-50% -50%",e.style.borderLeft="none",e.style.borderTop="none",e.style.clipPath="polygon(100% 0, 100% 100%, 0 100%)")}triggerUpdate(){this.trigger==="click"?(this.triggerOnClick(!0),this.triggerOnHover(!1)):this.trigger==="hover"?(this.triggerOnHover(!0),this.triggerOnClick(!1)):this.trigger==="manual"&&(this.triggerOnClick(!1),this.triggerOnHover(!1))}disconnectedCallback(){super.disconnectedCallback(),this.unregister(),this.triggerOnClick(!1),this.triggerOnHover(!1),this.content instanceof O&&(this.content.removeEventListener("hmwc-select",this._menuSelectHandler),this.content.removeEventListener("hmwc-change",this._menuChangeHandler))}connectedCallback(){if(super.connectedCallback(),!this._uid){let e=globalThis.crypto;this._uid=e?.randomUUID?.()??`a${Math.random().toString(36).slice(2,10)}`}this.register(),this.retrieve(),this.hasUpdated&&this.triggerUpdate()}firstUpdated(){this.shadowRoot?.querySelectorAll("slot")?.forEach(t=>{t.addEventListener("slotchange",()=>this.handleSlotChange())})}handleSlotChange(){this.retrieve(),this.triggerUpdate(),this.content&&this.content.classList.toggle("active",!!this.active),this.content instanceof O&&(this.content.active=this.active)}render(){let e=v({attachment:!0,active:!!this.active,flip:!!this.flip,sync:!!this.sync,arrow:!!this.arrow,[`placement-${this.placement}`]:!0});return c`
      <div
        part="base"
        class=${e}
        style=${`--attachment-width: ${this.width}px; --distance:${this.distance}px; --skidding:${this.skidding}px;`}>
        <slot name="anchor" part="anchor"></slot>
        ${this.arrow?c`<div part="arrow" class="attachment__arrow"></div>`:""}
        <slot part="content"> </slot>
      </div>
    `}};P.styles=wo;P.slots=["[default]","anchor"];De([n({type:Boolean,reflect:!0})],P.prototype,"active",void 0);De([n({type:String})],P.prototype,"name",void 0);De([n({type:String})],P.prototype,"anchor",void 0);De([n({type:String})],P.prototype,"trigger",void 0);De([n({type:String,reflect:!0})],P.prototype,"placement",void 0);De([n({type:Number})],P.prototype,"distance",void 0);De([n({type:Number})],P.prototype,"skidding",void 0);De([n({type:Boolean,reflect:!0})],P.prototype,"flip",void 0);De([n({type:Boolean,reflect:!0})],P.prototype,"sync",void 0);De([n({type:Boolean,reflect:!0})],P.prototype,"stayOpen",void 0);De([n({type:Boolean,reflect:!0})],P.prototype,"arrow",void 0);De([w()],P.prototype,"content",void 0);De([w()],P.prototype,"width",void 0);De([u("name",{waitUntilFirstUpdate:!0})],P.prototype,"nameUpdate",null);De([u("placement",{waitUntilFirstUpdate:!0}),u("distance",{waitUntilFirstUpdate:!0}),u("skidding",{waitUntilFirstUpdate:!0}),u("flip",{waitUntilFirstUpdate:!0})],P.prototype,"placementUpdate",null);De([u("active")],P.prototype,"activityUpdate",null);De([u("trigger")],P.prototype,"triggerUpdate",null);var Jt=[];P.define("hmwc-attachment",P);var _o=f`
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
      --avatar-size: calc(1.5 * var(--hmwc-rem, 1rem));
      --avatar-label-size: calc(1.5 * var(--hmwc-rem, 1rem) * 0.42);
      --avatar-icon-size: calc(1.5 * var(--hmwc-rem, 1rem) * 0.55);
    }

    &.md {
      --avatar-size: calc(3 * var(--hmwc-rem, 1rem));
      --avatar-label-size: calc(3 * var(--hmwc-rem, 1rem) * 0.42);
      --avatar-icon-size: calc(3 * var(--hmwc-rem, 1rem) * 0.55);
    }

    &.lg {
      --avatar-size: calc(4.5 * var(--hmwc-rem, 1rem));
      --avatar-label-size: calc(4.5 * var(--hmwc-rem, 1rem) * 0.42);
      --avatar-icon-size: calc(4.5 * var(--hmwc-rem, 1rem) * 0.55);
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
`;var Ce=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},W=class s extends g{constructor(){super(...arguments),this._hasImageError=!1,this.icon="person-fill",this.shape="circle",this.loading="eager",this._handleClick=()=>{this.emit("hmwc-click",{})}}updateInitials(){let e=(this.name||"").trim().split(/\s+/).filter(Boolean),t=i=>i?Array.from(i)[0]:"",r=e.length>1?t(e[0])+t(e[e.length-1]):t(e[0]);this.initials=r.toLocaleUpperCase()}handleSrcChange(){this._hasImageError=!1}_handleImageError(){this._hasImageError=!0}_canShowImage(){return this.src&&!this._hasImageError}get _accessibleName(){return this.label||this.name||s.FALLBACK_LABEL}render(){let e=v({avatar:!0,circle:this.shape==="circle",square:this.shape==="square",[`status-${this.status}`]:!!this.status,selectable:!!this.selectable,sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
      <div part="base" class=${e} role="img" aria-label=${this._accessibleName} @click=${this._handleClick}>
        <slot>
          ${this._canShowImage()?c`<img
                part="image"
                class="avatar__image"
                src=${this.src}
                alt=${this._accessibleName}
                loading=${this.loading}
                @error=${this._handleImageError} />`:this.initials?c`<div part="label" class="avatar__label">${this.initials}</div>`:c`<hmwc-icon part="icon" class="avatar__icon" src=${this.icon}></hmwc-icon>`}
        </slot>
      </div>
    `}};W.styles=_o;W.dependencies=[$];W.slots=["[default]"];W.FALLBACK_LABEL="Avatar";Ce([w()],W.prototype,"_hasImageError",void 0);Ce([w()],W.prototype,"initials",void 0);Ce([n({type:Boolean,reflect:!0})],W.prototype,"selectable",void 0);Ce([n({type:Boolean,reflect:!0})],W.prototype,"primary",void 0);Ce([n({type:Boolean,reflect:!0})],W.prototype,"success",void 0);Ce([n({type:Boolean,reflect:!0})],W.prototype,"neutral",void 0);Ce([n({type:Boolean,reflect:!0})],W.prototype,"warning",void 0);Ce([n({type:Boolean,reflect:!0})],W.prototype,"danger",void 0);Ce([n({type:Boolean,reflect:!0})],W.prototype,"sm",void 0);Ce([n({type:Boolean,reflect:!0})],W.prototype,"md",void 0);Ce([n({type:Boolean,reflect:!0})],W.prototype,"lg",void 0);Ce([n({type:String})],W.prototype,"src",void 0);Ce([n({type:String})],W.prototype,"name",void 0);Ce([n({type:String})],W.prototype,"label",void 0);Ce([n({type:String})],W.prototype,"icon",void 0);Ce([n({type:String,reflect:!0})],W.prototype,"shape",void 0);Ce([n({type:String,reflect:!0})],W.prototype,"status",void 0);Ce([n({type:String})],W.prototype,"loading",void 0);Ce([u("name")],W.prototype,"updateInitials",null);Ce([u("src")],W.prototype,"handleSrcChange",null);W.define("hmwc-avatar",W);var xo=f`
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
`;var ko=f`
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
      color: var(--hmwc-color-text-secondary, var(--hmwc-color-neutral-800));
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
`;var fr=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},rt=class extends j{render(){let e=v({col:!0,wrap:!!this.wrap,min:!!this.min,max:!!this.max,outline:!!this.outline,fit:!!this.fit,label:!!this.label||this.controllers.slot.test("label"),scrollable:!!this.scrollable});return c`
      <div part="base" class=${e}>
        <slot name="label" part="label" class="col__label">${this.label}</slot>
        <slot part="content" class="col__content"></slot>
      </div>
    `}};rt.styles=ko;fr([n({type:Boolean,reflect:!0})],rt.prototype,"wrap",void 0);fr([n({type:Boolean,reflect:!0})],rt.prototype,"fit",void 0);fr([n({type:Boolean,reflect:!0})],rt.prototype,"min",void 0);fr([n({type:Boolean,reflect:!0})],rt.prototype,"max",void 0);fr([n({type:Boolean,reflect:!0})],rt.prototype,"outline",void 0);rt.define("hmwc-col",rt);var $o=f`
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
    min-height: calc(1.8 * var(--hmwc-rem, 1rem));
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
`;var Co=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},oe=class extends g{constructor(){super(...arguments),this.sheen=!0}render(){let e=!!this.pulse,t=!!this.sheen&&!e,r=v({skeleton:!0,pulse:e,sheen:t});return c`
      <div part="base" class=${r} aria-hidden="true">
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};oe.styles=$o;oe.dependencies=[];oe.slots=[];Co([n({type:Boolean,reflect:!0})],oe.prototype,"sheen",void 0);Co([n({type:Boolean,reflect:!0})],oe.prototype,"pulse",void 0);oe.define("hmwc-skeleton",oe);var So=f`
  :host {
    --text-size: var(--hmwc-font-size-medium);
    --text-weight: var(--hmwc-font-weight-normal);
    --text-family: var(--hmwc-font-sans);
    --text-color: var(--hmwc-color-neutral-900);
    --text-label-color: var(--hmwc-color-neutral-600);
    --text-spacing: var(--hmwc-letter-spacing-normal);
    --text-icon-color: var(--hmwc-color-neutral-800);
    display: block;
    user-select: text;
  }

  /* Ruled title: a rule under the text, a small step below it. */
  .text__divider {
    --divider-spacing-start: var(--hmwc-spacing-x-small);
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
    --icon-size: calc(1 * var(--hmwc-rem, 1rem));
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
      --icon-size: calc(1 * var(--hmwc-rem, 1rem));

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
`;var F=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},z=class extends g{constructor(){super(...arguments),this.prefix=null}handleEnter(){this.emit("hmwc-enter",{detail:{value:this.value}})}handleLeave(){this.emit("hmwc-leave",{detail:{value:this.value}})}formatted(){if(!this.format||this.value==null)return this.value;let e=Number(this.value);return Number.isFinite(e)?Math.round(e).toLocaleString():this.value}resolveFamily(){return this.serif?"serif":this.monospace?"monospace":"sans"}headingLevel(){let e=Number(this.level);return Number.isInteger(e)&&e>=1&&e<=6?e:void 0}_renderIcon(e){return c`<hmwc-icon
      ?primary=${this.primary}
      ?neutral=${this.neutral}
      ?warning=${this.warning}
      ?danger=${this.danger}
      ?invert=${this.invert}
      src=${e}></hmwc-icon>`}_renderValue(){if(this.value==null)return c``;let e=this.formatted();return e===""||e==null?c`<hmwc-skeleton></hmwc-skeleton>`:c`${e}`}render(){let e=this.resolveFamily(),t=this.headingLevel(),r=v({text:!0,xs:!!this.xs,sm:!!this.sm,md:!!this.md,lg:!!this.lg,xl:!!this.xl,xxl:!!this.xxl,flex:!!this.flex,heading:!!this.heading,subheading:!!this.subheading,label:!!this.label,subtitle:!!this.subtitle,caption:!!this.caption,sans:e==="sans",serif:e==="serif",monospace:e==="monospace",center:!!this.center||this.align==="center",light:!!this.light,semibold:!!this.semibold,bold:!!this.bold,primary:!!this.primary,secondary:!!this.secondary,tertiary:!!this.tertiary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger,uppercase:!!this.uppercase,lowercase:!!this.lowercase,capitalize:!!this.capitalize,wrap:!!this.wrap,invert:!!this.invert,"align-start":this.align==="start","align-end":this.align==="end"});return c`
      <div
        part="base"
        class=${r}
        role=${t?"heading":x}
        aria-level=${t??x}
        @mouseenter=${this.handleEnter}
        @mouseleave=${this.handleLeave}>
        ${this.prefix?c`<slot name="prefix" class="text__prefix">${this._renderIcon(this.prefix)}</slot>`:null}
        <div part="content" class="text__content">
          ${this.label?c`<span class="text__label">${this.label}</span>`:null} ${this._renderValue()}
          ${this.amount!=null?c`<span class="text__amount">(${this.amount})</span>`:null}
          <slot></slot>
        </div>
        ${this.suffix?c`<slot name="suffix" class="text__suffix">${this._renderIcon(this.suffix)}</slot>`:null}
      </div>
      ${this.divider?c`<hmwc-divider part="divider" class="text__divider" aria-hidden="true"></hmwc-divider>`:null}
    `}};z.styles=So;z.dependencies=[H,$,oe];z.slots=["prefix","suffix"];F([n({type:Boolean,reflect:!0})],z.prototype,"xs",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"sm",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"md",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"lg",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"xl",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"xxl",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"heading",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"subheading",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"subtitle",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"caption",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"sans",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"serif",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"monospace",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"light",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"semibold",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"bold",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"primary",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"secondary",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"tertiary",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"success",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"neutral",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"warning",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"danger",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"invert",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"uppercase",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"lowercase",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"capitalize",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"wrap",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"flex",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"center",void 0);F([n({type:Boolean,reflect:!0})],z.prototype,"divider",void 0);F([n({type:Boolean})],z.prototype,"format",void 0);F([n({type:String})],z.prototype,"value",void 0);F([n({type:String})],z.prototype,"label",void 0);F([n({type:String})],z.prototype,"prefix",void 0);F([n({type:String})],z.prototype,"suffix",void 0);F([n({type:String})],z.prototype,"align",void 0);F([n({type:Number,reflect:!0})],z.prototype,"level",void 0);F([n({type:Number})],z.prototype,"amount",void 0);z.define("hmwc-text",z);var Fr=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},it=class s extends j{render(){return c`
      <hmwc-col
        part="base"
        class="banner"
        fluid
        pad=${this.pad??s.DEFAULTS.pad}
        gap=${this.gap??s.DEFAULTS.gap}
        round=${this.round??s.DEFAULTS.round}
        elevation=${this.elevation??s.DEFAULTS.elevation}
        img=${b(this.img)}>
        <hmwc-col gap="sm">
          <slot name="label" part="label">
            <hmwc-text secondary bold ?invert=${this.invert} xl value=${b(this.label)} class="banner__label"></hmwc-text>
          </slot>
          <slot part="message">
            <hmwc-text secondary flex wrap ?invert=${this.invert} value=${b(this.message)}></hmwc-text>
          </slot>
        </hmwc-col>
        <slot name="action" part="action">
          ${this.action?c`
                <hmwc-button
                  class="banner__action"
                  href=${b(this.href)}
                  label=${this.action}
                  suffix="box-arrow-up-right"></hmwc-button>
              `:""}
        </slot>
      </hmwc-col>
    `}};it.styles=xo;it.dependencies=[rt,z,k];it.slots=["[default]","label","action"];it.DEFAULTS={pad:"lg",gap:"xxl",round:"xl",elevation:3};Fr([n({type:Boolean,reflect:!0})],it.prototype,"invert",void 0);Fr([n({type:String})],it.prototype,"message",void 0);Fr([n({type:String})],it.prototype,"href",void 0);Fr([n({type:String})],it.prototype,"action",void 0);it.define("hmwc-banner",it);var Ao=f`
  :host {
    --tooltip-max-width: calc(20 * var(--hmwc-rem, 1rem));
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

  :host([fluid]) {
    display: block;
    width: 100%;
  }

  :host([fluid]) .tooltip__anchor {
    display: block;
    width: 100%;
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
`;var ft=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},K=class extends g{constructor(){super(...arguments),this.trigger="hover",this.placement="top",this.arrow=!0,this.distance=6,this.skidding=0,this.delay=150,this.handleBlur=()=>{this.trigger==="focus"&&this.hide()},this.handleFocus=()=>{this.trigger==="focus"&&this.show()},this.handleClick=()=>{this.trigger==="click"&&this.toggle()},this.handleMouseEnter=()=>{if(this.trigger!=="hover")return;clearTimeout(this.timeout);let e=this.delay instanceof Object?this.delay.show:this.delay;this.timeout=window.setTimeout(()=>this.show(),e)},this.handleMouseLeave=()=>{if(this.trigger!=="hover")return;clearTimeout(this.timeout);let e=this.delay instanceof Object?this.delay.hide:this.delay;this.timeout=window.setTimeout(()=>this.hide(),e)},this.handleKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())}}handleActiveChange(){this.active?(this.emit("hmwc-show"),document.addEventListener("keydown",this.handleKeyDown)):(this.emit("hmwc-hide"),document.removeEventListener("keydown",this.handleKeyDown))}handleDisabledChange(){this.disabled&&this.active&&this.hide()}show(){this.active||this.disabled||(this.active=!0)}hide(){this.active&&(this.active=!1)}toggle(){this.active?this.hide():this.show()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),document.removeEventListener("keydown",this.handleKeyDown)}render(){let e=v({tooltip:!0,active:!!this.active,disabled:!!this.disabled,[this.placement]:!0});return c`
      <div
        part="base"
        class=${e}
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
    `}};K.styles=Ao;K.dependencies=[P];K.slots=["[default]","content"];ft([n({type:String})],K.prototype,"label",void 0);ft([n({type:String})],K.prototype,"trigger",void 0);ft([n({type:String,reflect:!0})],K.prototype,"placement",void 0);ft([n({type:Boolean,reflect:!0})],K.prototype,"active",void 0);ft([n({type:Boolean,reflect:!0})],K.prototype,"disabled",void 0);ft([n({type:Boolean,reflect:!0})],K.prototype,"arrow",void 0);ft([n({type:Number})],K.prototype,"distance",void 0);ft([n({type:Number})],K.prototype,"skidding",void 0);ft([n({type:Number})],K.prototype,"delay",void 0);ft([n({type:Boolean,reflect:!0})],K.prototype,"fluid",void 0);ft([u("active")],K.prototype,"handleActiveChange",null);ft([u("disabled")],K.prototype,"handleDisabledChange",null);K.define("hmwc-tooltip",K);var Eo=f`
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
        --icon-size: calc(0.975 * var(--hmwc-rem, 1rem));
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
        --icon-size: calc(0.95 * var(--hmwc-rem, 1rem));
      }

      & .breadcrumb__label {
        position: relative;
      }

      & .breadcrumb__dropdown-arrow {
        --icon-color: var(--hmwc-color-neutral-600);
        --icon-size: calc(0.66 * var(--hmwc-rem, 1rem));
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
`;var Ve=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},zo=!1,Y=class extends g{constructor(){super(...arguments),this._onOptionSelect=e=>{e.stopPropagation(),this.setValue(e)},this._onActionSelect=e=>{e.stopPropagation(),this.emit("hmwc-select",{detail:{value:e.detail.value}})}}valueUpdate(){this.emit("hmwc-change",{detail:{value:this.value}})}itemsDeprecation(){this.items!==void 0&&(zo||(zo=!0,console.warn("[hmwc-breadcrumb] `items` is deprecated; use `options` instead. See docs/v2/specs/BREADCRUMB_CONSOLIDATION.md \xA73.2.")))}select(){this.route!==!1&&(this.options!==void 0||this.items!==void 0||this.emit("hmwc-navigate",{detail:{route:this.path}}))}setValue(e){e instanceof CustomEvent&&(e=e.detail.value),this.value=e}render(){let e=this.options??this.items,t=v({breadcrumb__crumb:!0,active:!!this.active,route:this.route!==!1,home:!!this.home});return c`
      <div part="base" class="breadcrumb">
        <hmwc-tooltip
          ?disabled=${this.route===!1}
          label=${this.path==="/"?"Dashboard":this.path||""}
          sm
          delay="700"
          placement="top-start">
          <hmwc-attachment distance="8" placement="bottom-end" @hmwc-select=${this._onOptionSelect}>
            <div part="content" class=${t} slot="anchor" @click=${this.select}>
              ${this.prefix?c`<div class="breadcrumb__prefix"><hmwc-icon flex src=${this.prefix}></hmwc-icon></div>`:""}
              ${this.icon?c`<div class="breadcrumb__icon"><hmwc-icon flex src=${this.icon}></hmwc-icon></div>`:""}
              ${this.label?c`<div class="breadcrumb__label">${this.value||this.label}</div>`:""}
              ${this.suffix?c`<div class="breadcrumb__suffix"><hmwc-icon flex src=${this.suffix}></hmwc-icon></div>`:""}
              ${e?c`<div class="breadcrumb__dropdown-arrow"><hmwc-icon flex src="caret-down"></hmwc-icon></div>`:""}
            </div>
            ${e?c`<hmwc-menu part="options" class="breadcrumb__options" .items=${e} .filter=${this.search?"":void 0}></hmwc-menu>`:""}
          </hmwc-attachment>
        </hmwc-tooltip>
        <slot name="actions" part="actions" class="breadcrumb__actions">
          ${this.actions?c`<hmwc-attachment distance="4" placement="bottom-end" @hmwc-select=${this._onActionSelect}>
                <hmwc-button
                  slot="anchor"
                  part="action-trigger"
                  class="breadcrumb__action"
                  basic
                  sm
                  icon="three-dots-vertical"
                  label="Actions"></hmwc-button>
                <hmwc-menu part="action-menu" .items=${this.actions}></hmwc-menu>
              </hmwc-attachment>`:""}
        </slot>
      </div>
    `}};Y.styles=Eo;Y.dependencies=[$,K,P,k,O];Y.slots=["actions"];Ve([n({type:String,reflect:!0})],Y.prototype,"prefix",void 0);Ve([n({type:String,reflect:!0})],Y.prototype,"suffix",void 0);Ve([n({type:String,reflect:!0})],Y.prototype,"icon",void 0);Ve([n({type:String,reflect:!0})],Y.prototype,"label",void 0);Ve([n({type:String,reflect:!0})],Y.prototype,"path",void 0);Ve([n({type:Boolean,reflect:!0})],Y.prototype,"active",void 0);Ve([n({type:Array,reflect:!0})],Y.prototype,"options",void 0);Ve([n({type:Array,reflect:!0})],Y.prototype,"items",void 0);Ve([n({type:String,reflect:!0})],Y.prototype,"value",void 0);Ve([n({type:Boolean,reflect:!0})],Y.prototype,"search",void 0);Ve([n({type:Boolean,reflect:!0})],Y.prototype,"home",void 0);Ve([n({type:Boolean,reflect:!0})],Y.prototype,"route",void 0);Ve([n({type:Array})],Y.prototype,"actions",void 0);Ve([u("value",{waitUntilFirstUpdate:!0})],Y.prototype,"valueUpdate",null);Ve([u("items",{waitUntilFirstUpdate:!0})],Y.prototype,"itemsDeprecation",null);Y.define("hmwc-breadcrumb",Y);var To=(s,e,t)=>{if(!s||!e||e.length===0)return[];let r=s.path.split("/"),i=[];return r.forEach((o,a)=>{let l=o===""?"/":e.find(m=>m.path===r.slice(0,a+1).join("/"))?.path||o,h=e.find(m=>m.path===r.slice(0,a+1).join("/")),d=t?.find(m=>m.path===l),p=d?{...d,path:l,home:a===0}:{path:l,label:l==="/"?void 0:h?.title||"",icon:l==="/"?"house-door-fill":void 0,home:a===0};i.push(p)}),i};var Oo=f`
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
    left: calc(-0.25 * var(--hmwc-rem, 1rem));

    & .breadcrumbs__seperator {
      hmwc-icon {
        color: var(--hmwc-color-neutral-600);
      }
    }
  }
`;var Mt=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},Ro=!1,Mo=!1,Ss=s=>({label:s.label,path:s.path,icon:s.icon??void 0,prefix:s.prefix??void 0,suffix:s.suffix??void 0,home:s.home,options:s.options??s.items,actions:s.actions}),Ae=class extends g{constructor(){super(...arguments),this.routes=[],this.separator="chevron-right",this._onNavigate=e=>{let t=e;e.stopPropagation(),this.emit("hmwc-navigate",{detail:t.detail})},this._onChange=e=>{let t=e;e.stopPropagation(),this.emit("hmwc-change",{detail:t.detail})},this._onSelect=e=>{let t=e;e.stopPropagation(),this.emit("hmwc-select",{detail:t.detail})}}seperatorDeprecation(){this.seperator!==void 0&&(Ro||(Ro=!0,console.warn("[hmwc-breadcrumbs] `seperator` is misspelled and deprecated; use `separator`. See docs/v2/specs/BREADCRUMB_CONSOLIDATION.md \xA73.3.")),this.separator=this.seperator)}overridesDeprecation(){this.overrides!==void 0&&(Mo||(Mo=!0,console.warn("[hmwc-breadcrumbs] `overrides` is deprecated; pass plain-object `crumbs: BreadcrumbDescriptor[]` instead. See docs/v2/specs/BREADCRUMB_CONSOLIDATION.md \xA73.2 + \xA74.2.")))}_resolveCrumbs(){let e=this.crumbs??this.overrides?.map(Ss);return this.route?To(this.route,this.routes,e):this.crumbs&&this.crumbs.length>0?this.crumbs:e??[]}_renderSeparator(){return c`<slot name="separator" part="separator" class="breadcrumbs__separator"><hmwc-icon flex src=${this.separator}></hmwc-icon></slot>`}render(){let e=this._resolveCrumbs();return c`
      <div part="base" class="breadcrumbs" @hmwc-navigate=${this._onNavigate} @hmwc-change=${this._onChange} @hmwc-select=${this._onSelect}>
        ${e.map((t,r)=>c`
            <hmwc-breadcrumb
              .label=${t.label}
              .path=${t.path}
              .icon=${t.icon}
              .prefix=${t.prefix}
              .suffix=${t.suffix}
              ?home=${!!t.home}
              ?active=${r===e.length-1}
              .options=${t.options}
              .actions=${t.actions}></hmwc-breadcrumb>
            ${r<e.length-1?this._renderSeparator():""}
          `)}
        <slot></slot>
      </div>
    `}};Ae.styles=Oo;Ae.dependencies=[$,Y];Ae.slots=["separator"];Mt([n({type:Array})],Ae.prototype,"crumbs",void 0);Mt([n({type:Array})],Ae.prototype,"overrides",void 0);Mt([n({type:String,reflect:!0})],Ae.prototype,"route",void 0);Mt([n({type:Array})],Ae.prototype,"routes",void 0);Mt([n({type:String,reflect:!0})],Ae.prototype,"separator",void 0);Mt([n({type:String,attribute:"seperator"})],Ae.prototype,"seperator",void 0);Mt([u("seperator",{waitUntilFirstUpdate:!1})],Ae.prototype,"seperatorDeprecation",null);Mt([u("overrides",{waitUntilFirstUpdate:!1})],Ae.prototype,"overridesDeprecation",null);Ae.define("hmwc-breadcrumbs",Ae);var Do=f`
  :host {
    --card-height: auto;
    --card-padding: var(--hmwc-spacing-medium) var(--hmwc-spacing-large);
    --card-border-color: var(--hmwc-panel-border-color);
    --card-border-width: var(--hmwc-panel-border-width);
    --card-border-radius: var(--hmwc-border-radius-x-large);
    /* The names the styles read. They default to the documented names above, so
       either works; a page setting these directly (as before) still wins. */
    --card-radius: var(--card-border-radius);
    --card-spacing: initial;
    --card-icon-color: var(--hmwc-color-neutral-400);
    --card-border: var(--card-border-color);
    --card-description-color: var(--hmwc-color-neutral-600);
    --card-description-size: var(--hmwc-font-size-small);
    --card-background: var(--hmwc-panel-background-color);
    --card-prefix-icon-size: calc(0.88 * var(--hmwc-rem, 1rem));

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

  /* The body is a flex column that stretches its children. A button keeps its
     own width there (as it does in a row) unless it is "fluid", or the card
     sets "align" or "center", which then place it. */
  :host(:not([align]):not([center])) .card__body ::slotted(hmwc-button:not([fluid])) {
    align-self: flex-start;
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
    border: solid var(--card-border-width) var(--card-border);
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

      & .card__description {
        display: block;
        margin: 0 0 var(--hmwc-spacing-small) 0;
        font-family: var(--hmwc-font-sans);
        font-size: var(--card-description-size);
        font-weight: var(--hmwc-font-weight-normal);
        font-feature-settings: normal;
        line-height: var(--hmwc-line-height-normal);
        color: var(--card-description-color);
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

    &:not(.description) {
      & .card__description {
        display: none;
      }
    }

    /* The description sits close under the label it describes. */
    &.description .card__body .card__label {
      margin-bottom: var(--hmwc-spacing-3x-small);
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

    /* An outlined panel: the border and panel background stay, the shadow goes. */
    &.flat {
      box-shadow: none;
      --card-background: var(--hmwc-panel-background-color);
    }

    /* Stretched link: the link wraps the header (or label, or body) text and
       its ::after covers the whole card, so any point of the card navigates.
       Controls are raised above it (below) so they stay clickable. */
    &.link {
      cursor: pointer;
      transition: border-color var(--hmwc-transition-fast) var(--hmwc-easing-standard);

      &:hover {
        --card-border: var(--hmwc-input-border-color-hover);
      }

      &:has(.card__link:focus-visible) {
        outline: var(--hmwc-focus-ring);
        outline-offset: var(--hmwc-focus-ring-offset);
      }

      & .card__link {
        color: inherit;
        text-decoration: none;
        outline: none;

        &::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: var(--card-radius);
        }
      }

      /* Controls stay above the overlay so they keep their own clicks: the
         control slot, the footer, and controls slotted directly into the
         body. A control nested deeper in the body is covered by the link. */
      & .card__header-control,
      & .card__footer,
      & .card__body
        ::slotted(:is(a[href], [tabindex], hmwc-button, hmwc-checkbox, hmwc-combobox, hmwc-dropdown, hmwc-input, hmwc-radio-group, hmwc-switch)) {
        position: relative;
        z-index: 1;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      &.link {
        transition: none;
      }
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
      --card-prefix-icon-size: calc(0.75 * var(--hmwc-rem, 1rem));
    }

    &.sm {
      min-width: 200px;
      --card-radius: var(--hmwc-border-radius-medium);
      --card-padding: var(--hmwc-spacing-small) calc(1.5 * var(--hmwc-spacing-x-small));
      --card-prefix-icon-size: calc(0.8 * var(--hmwc-rem, 1rem));

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
      --card-prefix-icon-size: calc(0.95 * var(--hmwc-rem, 1rem));

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
      --card-prefix-icon-size: calc(1.1 * var(--hmwc-rem, 1rem));

      & .card__header {
        padding: calc(var(--hmwc-spacing-x-large) / 2) var(--hmwc-spacing-x-large);
      }

      & .card__body {
        gap: calc(var(--hmwc-spacing-2x-small) + var(--hmwc-spacing-x-large));
      }
    }

    &.gap-xs {
      --card-spacing: var(--hmwc-spacing-2x-small);
    }
    &.gap-sm {
      --card-spacing: var(--hmwc-spacing-x-small);
    }

    &.gap-md {
      --card-spacing: var(--hmwc-spacing-medium);
    }

    &.gap-lg {
      --card-spacing: calc(2 * var(--hmwc-rem, 1rem));
    }

    &.gap-xl {
      --card-spacing: calc(4 * var(--hmwc-rem, 1rem));
    }

    &.gap-xxl {
      --card-spacing: calc(12 * var(--hmwc-rem, 1rem));
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
`;var Le=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},ae=class extends j{handleClick(){this.emit("hmwc-click",{})}_link(e){return c`<a part="link" class="card__link" href=${this.href}>${e}</a>`}render(){let e=!!this.header||this.controllers.slot.test("header"),t=this.href?e?"header":this.label?"label":"body":"",r=c`${this.header}<slot name="header"></slot>`,i=v({card:!0,flat:!!this.flat,link:!!this.href,fluid:!!this.fluid,header:this.header||this.controllers.slot.test("header"),footer:this.footer||this.controllers.slot.test("footer"),description:!!this.description||this.controllers.slot.test("description"),image:this.img||this.controllers.slot.test("image"),primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger,alt:!!this.alt});return c`
      <div part="base" class=${i} @click=${this.handleClick}>
        <slot name="image" part="image" class="card__image"> ${this.img&&c`<img src=${this.img} alt="Card Image" />`} </slot>

        <div part="header" class="card__header">
          ${this.prefix&&this.header?c`<span class="card__prefix"> <hmwc-icon src=${this.prefix}></hmwc-icon> </span>`:""}
          ${t==="header"?this._link(r):r}
          ${this.suffix&&this.header?c`<span class="card__suffix"> <hmwc-icon src=${this.suffix}></hmwc-icon> </span>`:""}
          <div part="header-control" class="card__header-control">
            <slot name="control"></slot>
          </div>
        </div>

        <div part="body" class="card__body">
          ${this.label?c`
                <div part="label" class="card__label">
                  ${this.prefix?c`<span class="card__prefix"> <hmwc-icon src=${this.prefix}></hmwc-icon> </span>`:""}
                  ${t==="label"?this._link(this.label):this.label}
                  ${this.suffix?c`<span class="card__suffix"> <hmwc-icon src=${this.suffix}></hmwc-icon> </span>`:""}
                </div>
              `:""}
          <div part="description" class="card__description">${this.description}<slot name="description"></slot></div>
          ${t==="body"?this._link(c`<slot></slot>`):c`<slot></slot>`}
        </div>

        <slot name="footer" part="footer" class="card__footer"> ${this.footer} </slot>
      </div>
    `}};ae.styles=Do;ae.dependencies=[$];ae.slots=["header","description","control","footer","image"];Le([n({type:Boolean,reflect:!0})],ae.prototype,"primary",void 0);Le([n({type:Boolean,reflect:!0})],ae.prototype,"success",void 0);Le([n({type:Boolean,reflect:!0})],ae.prototype,"neutral",void 0);Le([n({type:Boolean,reflect:!0})],ae.prototype,"warning",void 0);Le([n({type:Boolean,reflect:!0})],ae.prototype,"danger",void 0);Le([n({type:Boolean,reflect:!0})],ae.prototype,"alt",void 0);Le([n({type:Boolean,reflect:!0})],ae.prototype,"flat",void 0);Le([n({type:String})],ae.prototype,"label",void 0);Le([n({type:String})],ae.prototype,"description",void 0);Le([n({type:String})],ae.prototype,"header",void 0);Le([n({type:String})],ae.prototype,"footer",void 0);Le([n({type:String})],ae.prototype,"img",void 0);Le([n({type:String})],ae.prototype,"prefix",void 0);Le([n({type:String})],ae.prototype,"suffix",void 0);Le([n({type:String,reflect:!0})],ae.prototype,"href",void 0);Le([n({type:String})],ae.prototype,"shadow",void 0);ae.define("hmwc-card",ae);var Bo=f`
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
      margin-left: var(--hmwc-spacing-2x-large);
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
        min-width: calc(1.25 * var(--hmwc-rem, 1rem));
        justify-content: end;
      }

      & .chart__indicator-line {
        display: flex;
        flex-grow: 1;
        width: 100%;
        height: 0;
        border-bottom: 0.1px solid var(--hmwc-color-neutral-300);
        margin-left: var(--hmwc-spacing-medium);
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
`;var Po=Object.freeze(["primary","success","warning","danger","alt","neutral"]),As=s=>`var(--hmwc-color-${s}-600)`,Es=(s,e)=>s||Po[e%Po.length],Io=(s,e)=>As(Es(s,e));var si="var(--hmwc-color-neutral-200)",zs=s=>Number.isFinite(s)?s<0?0:s:0,No=s=>`${Math.max(0,Math.min(100,s)).toFixed(4).replace(/\.?0+$/,"")}%`,Fo=s=>{if(!s||s.length===0)return`conic-gradient(${si} 0% 100%)`;let e=[...s].map(o=>({...o,value:zs(o.value)})).filter(o=>o.value>0).sort((o,a)=>a.value-o.value);if(e.length===0)return`conic-gradient(${si} 0% 100%)`;let t=e.reduce((o,a)=>o+a.value,0);if(t===0)return`conic-gradient(${si} 0% 100%)`;let r=[],i=0;return e.forEach((o,a)=>{let l=o.value/t*100,h=i,d=a===e.length-1?100:i+l;i=d;let p=Io(o.color,a);r.push(`${p} ${No(h)} ${No(d)}`)}),`conic-gradient(${r.join(", ")})`};var Lr=s=>{let e=s.kind==="donut",t=Fo(s.data);return c`<div part="pie" class="chart__pie ${e?"chart__pie--donut":""}" style="background: ${t}"></div>`};var Dt=s=>{let{parentHeight:e,indicators:t,data:r,labeled:i}=s;return c`${t?.map(({value:o,label:a})=>c`
        <div class="chart__indicator" style="top: ${e-e*(o/100)}px">
          <span class="chart__indicator-label">${a}</span>
          <div class="chart__indicator-line"></div>
        </div>
      `)}
    <div part="chart" class="chart__chart">
      ${r?.map(({label:o,value:a})=>c`
          <hmwc-tooltip label=${o} arrow placement="right" delay="200">
            <div class="chart__item">
              <div class="chart__item-progress ${a?"":"null"}" style="height: ${e*(a/100)}px"></div>
              ${i?c`<div class="chart__item-label">${o}</div>`:""}
            </div>
          </hmwc-tooltip>
        `)}

      <slot></slot>
    </div>`};var Lo=new Set(["line","area","progress","gauge","sparkline"]),ni=Object.freeze({pie:Lr,donut:Lr,bar:Dt,line:Dt,area:Dt,progress:Dt,gauge:Dt,sparkline:Dt});var ct=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},jo=!1,Uo=!1,Ho=!1,ye=class extends g{constructor(){super(...arguments),this.kind="bar"}pieDeprecation(){this.pie&&(this.kind="pie",!jo&&(jo=!0,console.warn('[hmwc-chart] `pie` is deprecated; use `kind="pie"` instead. See docs/v2/specs/CHART_EXPANSION.md \xA7PR4.')))}donutDeprecation(){this.donut&&(this.kind="donut",!Ho&&(Ho=!0,console.warn('[hmwc-chart] `donut` is deprecated; use `kind="donut"` instead. See docs/v2/specs/CHART_EXPANSION.md \xA7PR4.')))}barDeprecation(){this.bar&&(this.kind="bar",!Uo&&(Uo=!0,console.warn('[hmwc-chart] `bar` is deprecated; use `kind="bar"` instead (default). See docs/v2/specs/CHART_EXPANSION.md \xA7PR4.')))}connectedCallback(){super.connectedCallback(),this.animation="scale-in",this.indicators||(this.indicators=[{value:25,label:"25%"},{value:50,label:"50%"},{value:75,label:"75%"}])}renderContext(){return{kind:this.kind,data:this.data,indicators:this.indicators,labeled:this.labeled,parentHeight:this.parentElement?.clientHeight||this.clientHeight}}render(){let e=this.renderContext(),t=e.kind==="pie"||e.kind==="donut",r=e.kind==="donut",i=e.kind==="bar"||Lo.has(e.kind),o=v({chart:!0,pie:t,donut:r,bar:i,small:!!this.sm,medium:!!this.md,large:!!this.lg}),a=ni[e.kind]??ni.bar;return c`<div part="base" class=${o}>${a(e)}</div>`}};ye.styles=Bo;ye.dependencies=[K];ct([n({type:String,reflect:!0})],ye.prototype,"kind",void 0);ct([n({type:Array})],ye.prototype,"data",void 0);ct([n({type:Boolean})],ye.prototype,"pie",void 0);ct([n({type:Boolean})],ye.prototype,"donut",void 0);ct([n({type:Array})],ye.prototype,"indicators",void 0);ct([n({type:Boolean})],ye.prototype,"bar",void 0);ct([n({type:Boolean})],ye.prototype,"labeled",void 0);ct([n({type:Boolean})],ye.prototype,"sm",void 0);ct([n({type:Boolean})],ye.prototype,"md",void 0);ct([n({type:Boolean})],ye.prototype,"lg",void 0);ct([u("pie")],ye.prototype,"pieDeprecation",null);ct([u("donut")],ye.prototype,"donutDeprecation",null);ct([u("bar")],ye.prototype,"barDeprecation",null);ye.define("hmwc-chart",ye);var qo=f`
  :host {
    --checkbox-group-gap: var(--hmwc-spacing-2x-small);
    --checkbox-group-inline-gap: var(--hmwc-spacing-medium);
    --font-size: inherit;
    display: block;
  }

  /* An invalid group has no border of its own, so it lends its validity to
     the checkboxes inside it: they take the danger border, its darker hover and
     the danger keyboard ring (docs/v2/specs/CONTROL_STATES.md). */
  :host([invalid]:not([disabled])) {
    --form-group-border-color: var(--control-border-color);
    --form-group-border-color-hover: var(--control-border-color-hover);
    --form-group-focus-outline-color: var(--control-focus-outline-color);
  }

  [hidden] {
    display: none !important;
  }

  .checkboxgroup {
    display: block;

    &.small {
      --font-size: var(--hmwc-font-size-small);
      --checkbox-group-inline-gap: var(--hmwc-spacing-small);
    }

    &.medium {
      --font-size: var(--hmwc-font-size-medium);
    }

    &.large {
      --font-size: var(--hmwc-font-size-large);
      --checkbox-group-inline-gap: var(--hmwc-spacing-large);
    }

    .checkboxgroup__control {
      position: relative;
      min-inline-size: 0;
      border: none;
      padding: 0;
      margin: 0;
    }

    .checkboxgroup__input {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: var(--checkbox-group-gap);
    }

    /* Inline: checkboxes sit in a row at their natural width and wrap when
       they run out of room. */
    &.row .checkboxgroup__input {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      column-gap: var(--checkbox-group-inline-gap);
    }

    .checkboxgroup__label {
      padding: 0;
      line-height: 2;
      font-family: var(--hmwc-font-sans);
      font-size: var(--font-size);
      color: var(--hmwc-input-label-color);
    }

    .checkboxgroup__help {
      color: var(--hmwc-input-help-text-color);
      font-size: var(--hmwc-font-size-small);
      font-family: var(--hmwc-font-sans);
      line-height: 2;
    }
  }
`;var Wt=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},li={fromAttribute:s=>{let e=(s??"").trim();if(!e)return[];if(e.startsWith("["))try{let t=JSON.parse(e);if(Array.isArray(t))return t.map(String)}catch{}return e.split(",").map(t=>t.trim()).filter(Boolean)}},Be=class s extends L{constructor(){super(...arguments),this._ownDisabled=new WeakMap,this.value=[]}handleDisabledChange(){this._syncCheckboxes()}set(e){this.value=Array.isArray(e)?e.map(String):li.fromAttribute(e==null?"":String(e))}focus(e){this._focusTarget()?.focus(e)}getCheckboxes(){return this.items?Array.from(this.shadowRoot?.querySelectorAll("hmwc-checkbox")??[]):Array.from(this.querySelectorAll("hmwc-checkbox")).filter(e=>e.closest("hmwc-checkbox-group")===this)}get _values(){return Array.isArray(this.value)?this.value.map(String):li.fromAttribute(this.value==null?"":String(this.value))}_focusTarget(){let e=this.getCheckboxes().filter(t=>!t.disabled);return e.find(t=>t.checked)??e[0]}_syncCheckboxes(){let e=this._values;this.getCheckboxes().forEach(t=>{t.checked=e.includes(String(t.value)),t.sm=!!this.sm,t.md=!!this.md,t.lg=!!this.lg,this.disabled?(this._ownDisabled.has(t)||this._ownDisabled.set(t,!!t.disabled),t.disabled=!0):this._ownDisabled.has(t)&&(t.disabled=this._ownDisabled.get(t),this._ownDisabled.delete(t))})}handleBoxChange(e){let t=e.composedPath()[0];t instanceof we&&(t.getRootNode()!==this.shadowRoot&&t.closest("hmwc-checkbox-group")!==this||(e.stopPropagation(),this.value=this.getCheckboxes().filter(r=>r.checked).map(r=>String(r.value)),this._clearCustomErrorOnInput(),this.invalid&&this.reportValidity(),this.emit("hmwc-input"),this.emit("hmwc-change",{detail:{value:[...this.value]}})))}stopBoxEvent(e){e.stopPropagation()}handleFocusIn(e){e.relatedTarget instanceof Node&&this._contains(e.relatedTarget)||this.emit("hmwc-focus")}handleFocusOut(e){e.relatedTarget instanceof Node&&this._contains(e.relatedTarget)||this.emit("hmwc-blur")}_contains(e){let t=e;for(;t;){if(t===this)return!0;t=t.parentNode??(t instanceof ShadowRoot?t.host:null)}return!1}get _checkedCount(){return this._values.length}_isEmpty(){return this._checkedCount===0}checkValidity(){if(super.checkValidity(),this.disabled)return!0;let e=this._checkedCount;return this.min!==void 0&&this.min!==null&&e<this.min&&(e>0||this.required)&&!this._validity.valueMissing&&(this._validity.rangeUnderflow=!0),this.max!==void 0&&this.max!==null&&e>this.max&&(this._validity.rangeOverflow=!0),this._validity.valid=this._validity.valid&&!this._validity.rangeUnderflow&&!this._validity.rangeOverflow,this._validity.valid}_resolveError(){if(this._validity.customError&&this._customError)return this._customError;let e=this.min&&this.min>1?`Choose at least ${this.min} options.`:"Choose at least one option.";return this._validity.valueMissing||this._validity.rangeUnderflow?e:this._validity.rangeOverflow?`Choose no more than ${this.max} ${this.max===1?"option":"options"}.`:super._resolveError()}_focusableControl(){return this._focusTarget()??null}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0)}firstUpdated(e){super.firstUpdated(e),!(s._warnedNoName||this.name||!this.closest("[form]"))&&(s._warnedNoName=!0,console.warn('[hmwc-checkbox-group] inside a [form] container without a name: its value is left out of the form data. Add name="\u2026".'))}willUpdate(e){super.willUpdate(e),Array.isArray(this.value)||(this.value=this._values)}updated(e){super.updated(e),this._syncCheckboxes()}render(){let e=!!this.label||this.controllers.slot.test("label"),t=!!this.help||this.controllers.slot.test("help"),r=v({checkboxgroup:!0,small:!!this.sm,medium:!!this.md,large:!!this.lg,required:!!this.required,row:!!this.inline});return c`
      <div part="base" class=${r}>
        <!-- No whitespace after the slot: it would show as a space before the required indicator. -->
        <div part="label" id="label" class="checkboxgroup__label" ?hidden=${!e}><slot name="label">${this.label}</slot></div>
        <fieldset
          part="control"
          class="checkboxgroup__control"
          role="group"
          aria-labelledby=${b(e?"label":void 0)}
          aria-describedby=${b(t?"help":void 0)}
          aria-invalid=${this._ariaInvalid()}
          aria-errormessage=${b(this._ariaErrorMessage())}
          @hmwc-change=${this.handleBoxChange}
          @hmwc-input=${this.stopBoxEvent}
          @hmwc-focus=${this.stopBoxEvent}
          @hmwc-blur=${this.stopBoxEvent}
          @focusin=${this.handleFocusIn}
          @focusout=${this.handleFocusOut}>
          <div part="input" class="checkboxgroup__input">
            <slot @slotchange=${()=>this.requestUpdate()}>
              ${this.items?.map(i=>{let o=String(typeof i=="string"?i:i.value);return c`
                  <hmwc-checkbox
                    value=${o}
                    label=${typeof i=="string"?i:i.label}
                    ?disabled=${typeof i!="string"&&!!i.disabled}
                    ?sm=${!!this.sm}
                    ?md=${!!this.md}
                    ?lg=${!!this.lg}></hmwc-checkbox>
                `})}
            </slot>
          </div>
          <div part="help" id="help" class="checkboxgroup__help" ?hidden=${!t}>
            <slot name="help">${this.help}</slot>
          </div>
        </fieldset>
        ${this._renderError()}
      </div>
    `}};Be.styles=qo;Be.dependencies=[we,$];Be.slots=["label","help"];Be._warnedNoName=!1;Wt([n({type:Boolean,reflect:!0})],Be.prototype,"inline",void 0);Wt([n({type:String})],Be.prototype,"help",void 0);Wt([n({type:Number})],Be.prototype,"min",void 0);Wt([n({type:Number})],Be.prototype,"max",void 0);Wt([n({converter:li})],Be.prototype,"value",void 0);Wt([n({type:Array})],Be.prototype,"items",void 0);Wt([u("disabled",{waitUntilFirstUpdate:!0})],Be.prototype,"handleDisabledChange",null);Be.define("hmwc-checkbox-group",Be);var Wo=f`
  :host {
    --combobox-max-height: calc(16 * var(--hmwc-rem, 1rem));
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

  /* The chevron follows the toggle rule: not-allowed when disabled, plain
     default when readonly (there is nothing to open, but nothing is
     forbidden either). */
  :host([disabled]) .combobox__trigger,
  :host([readonly]) .combobox__trigger {
    cursor: default;
    opacity: 0.5;
  }

  :host([disabled]) .combobox__trigger {
    cursor: not-allowed;
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
`;var ce=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},Ts=48,Os={fromAttribute(s){if(!s)return[];try{let e=JSON.parse(s);return Array.isArray(e)?e:[]}catch{return console.warn("[hmwc-combobox] The options attribute is not valid JSON; ignoring it."),[]}}},V=class extends L{constructor(){super(...arguments),this._activeIndex=-1,this._renderCount=0,this._query="",this.emptyText="No matches",this.loadMoreText="Load more",this.loadingText="Loading\u2026",this.renderBatch=50,this.options=[],this._uid=`hmwc-combobox-${Math.random().toString(36).slice(2,10)}`,this._wantOpen=!1,this._programmaticFocus=!1,this._focused=!1,this._typedValue=null,this._loadMoreRequested=!1,this._edited=!1,this._handleKeydown=e=>{if(!(e.isComposing||!this._interactive))switch(e.key){case"ArrowDown":{e.preventDefault(),this.active?this._move(1):(this.show(),this._activeIndex=e.altKey||!this._rowCount?-1:0);break}case"ArrowUp":{e.preventDefault(),this.active?this._move(-1):(this.show(),this._activeIndex=this._rowCount-1);break}case"Enter":{let t=this.active?this._rowAt(this._activeIndex):void 0;t?(e.preventDefault(),this._activate(t)):this.active&&this.hide();break}case"Escape":{this.active?(e.preventDefault(),e.stopPropagation(),this.hide()):String(this.value??"")!==""&&(e.preventDefault(),e.stopPropagation(),this._typedValue="",this._query="",this.value="",this.emit("hmwc-input",{detail:{value:""}}),this.emit("hmwc-change",{detail:{value:""}}));break}case"Tab":{this.active&&this.hide();break}}},this._handleInnerInput=e=>{e.stopPropagation();let t=String(this._inner?.value??e.detail?.value??"");this._typedValue=t,this._edited=!0,this._query=t,this.value=t,this._activeIndex=-1,this._renderCount=this.renderBatch,this._clearCustomErrorOnInput(),this._clearRequiredError(),this.emit("hmwc-input",{detail:{value:t}}),this._requestOpen()},this._handleInnerChange=e=>{e.stopPropagation(),this.emit("hmwc-change",{detail:{value:String(this.value??"")}})},this._handleInnerFocus=e=>{e.stopPropagation(),this._focused=!0,this.emit("hmwc-focus"),this._programmaticFocus||this._requestOpen()},this._handleInnerBlur=e=>{e.stopPropagation(),this._focused=!1,this.hide(),this._edited&&!this.disabled&&this.required&&!String(this.value??"").trim()&&(this.checkValidity(),this.invalid=!0,this.error=this._resolveError(),this._emitInvalid()),this.emit("hmwc-blur")},this._swallow=e=>{e.stopPropagation()},this._handleAttachmentToggle=e=>{if(e.target!==e.currentTarget)return;e.stopPropagation(),!(e.type==="hmwc-show")&&this.active&&this.hide()},this._handleTriggerMousedown=e=>{e.preventDefault()},this._handleTriggerClick=e=>{e.stopPropagation(),this._interactive&&(this._focused||this.focus(),this.toggle())},this._handlePanelMousedown=e=>{e.preventDefault()},this._handlePanelClick=e=>{let t=this._rowAt(this._rowIndexFromEvent(e));t&&this._activate(t)},this._handlePanelMouseover=e=>{let t=this._rowIndexFromEvent(e);t>=0&&t!==this._activeIndex&&(this._activeIndex=t)},this._handlePanelScroll=()=>{let e=this._panel;e&&(e.scrollTop+e.clientHeight<e.scrollHeight-Ts||this._extendOrRequestMore())}}get _options(){let e=Array.isArray(this.options)?this.options:[];if(this._normalized?.source===e)return this._normalized.result;let t=e.filter(r=>r!=null).map(r=>typeof r=="object"?r:{value:String(r)});return this._normalized={source:e,result:t},t}get filteredOptions(){let e=this._options,t=this._query.trim().toLowerCase(),r=!!this.noFilter,i=this._filtered;if(i&&i.source===e&&i.query===t&&i.noFilter===r)return i.result;let o=r||!t?e:e.filter(a=>[a.value,a.label,a.description].some(l=>l!==void 0&&String(l).toLowerCase().includes(t)));return this._filtered={source:e,query:t,noFilter:r,result:o},o}get _visibleOptions(){return this.filteredOptions.slice(0,Math.max(this._renderCount,this.renderBatch>0?this.renderBatch:1))}get _showLoadMore(){return!!this.hasMore&&!this.loading&&this._visibleOptions.length>=this.filteredOptions.length}get _rowCount(){return this._visibleOptions.length+(this._showLoadMore?1:0)}get _hasContent(){return this._options.length>0||!!this.loading||!!this.hasMore}get _interactive(){return!this.disabled&&!this.readonly}handleActiveChange(){this.active||(this._activeIndex=-1),this.emit(`hmwc-${this.active?"show":"hide"}`)}handleInteractiveChange(){this._interactive||this.hide()}handleLabelChange(){this.toggleAttribute("no-label",!this.label)}connectedCallback(){super.connectedCallback(),this.toggleAttribute("no-label",!this.label)}willUpdate(e){e.has("value")&&String(this.value??"")!==this._typedValue&&(this._query="",this._typedValue=null),(e.has("options")||e.has("hasMore")||e.has("loading")&&!this.loading)&&(this._loadMoreRequested=!1),e.has("renderBatch")&&this._renderCount<this.renderBatch&&(this._renderCount=this.renderBatch),this._activeIndex>=this._rowCount&&(this._activeIndex=-1),this._wantOpen&&this._focused&&!this.active&&this._hasContent&&this._interactive&&(this.active=!0),super.willUpdate(e)}updated(e){super.updated(e),e.has("_query")&&this._panel&&(this._panel.scrollTop=0),e.has("_activeIndex")&&this._scrollActiveIntoView(),this._inner?.updateComplete.then(()=>this._syncAria())}disconnectedCallback(){super.disconnectedCallback(),this._wantOpen=!1,this._focused=!1}show(){this._interactive&&(this._wantOpen=!0,this.active=!0)}hide(){this._wantOpen=!1,this.active=!1}toggle(){this.active?this.hide():this.show()}appendOptions(e){this.options=[...Array.isArray(this.options)?this.options:[],...Array.isArray(e)?e:[]]}focus(e){if(this._inner?.input){this._programmaticFocus=!0;try{this._inner.focus(e)}finally{this._programmaticFocus=!1}}}blur(){this._inner?.input?.blur()}_emitInvalid(){this.emit("hmwc-invalid",{detail:{field:this.name??this.id??"",value:String(this.value??""),error:this.error??"",validity:this.validity}})}_emitValid(){this.emit("hmwc-valid",{detail:{field:this.name??this.id??"",value:String(this.value??"")}})}_requestOpen(){this._interactive&&(this._wantOpen=!0,this._hasContent&&(this.active=!0))}_select(e){let t=String(e.value??"");this._typedValue=null,this._query="",this.value=t,this.hide(),this._clearRequiredError(),this.emit("hmwc-select",{detail:{value:t,option:e}}),this.emit("hmwc-change",{detail:{value:t}})}_requestMore(e){!this.hasMore||this.loading||!e&&this._loadMoreRequested||(this._loadMoreRequested=!0,this.emit("hmwc-load-more",{detail:{query:this._query,count:this._options.length}}))}_extendOrRequestMore(){return this._visibleOptions.length<this.filteredOptions.length?(this._renderCount=this._visibleOptions.length+Math.max(1,this.renderBatch),!0):(this._requestMore(!1),!1)}_clearRequiredError(){!this.invalid||this._customError!==null||(!this.required||String(this.value??"").trim())&&(this.invalid=!1,this.error=void 0)}_activate(e){e==="load-more"?this._requestMore(!0):this._select(e)}_rowAt(e){let t=this._visibleOptions;if(e>=0&&e<t.length)return t[e];if(e===t.length&&this._showLoadMore)return"load-more"}_move(e){let t=this._rowCount;if(!t)return;let r=this._activeIndex+e;if(e>0&&r>=this._visibleOptions.length&&this._visibleOptions.length<this.filteredOptions.length){this._extendOrRequestMore(),this._activeIndex=this._visibleOptions.length>r?r:this._activeIndex;return}r>=t&&(r=t-1),r<-1&&(r=-1),this._activeIndex=r}_rowIndexFromEvent(e){let t=e.composedPath().find(r=>r instanceof HTMLElement&&r.dataset.index!==void 0);return t?Number(t.dataset.index):-1}_scrollActiveIntoView(){let e=this._panel,t=this._activeRowElement();if(!e||!t)return;let r=t.offsetTop,i=r+t.offsetHeight;r<e.scrollTop?e.scrollTop=r:i>e.scrollTop+e.clientHeight&&(e.scrollTop=i-e.clientHeight)}_activeRowElement(){return this._activeIndex<0?null:this.shadowRoot?.querySelector(`[data-index="${this._activeIndex}"]`)??null}_syncAria(){let e=this._inner?.input;e&&(e.setAttribute("role","combobox"),e.setAttribute("aria-autocomplete","list"),e.setAttribute("aria-haspopup","listbox"),e.setAttribute("aria-expanded",this.active?"true":"false"),e.setAttribute("aria-label",this.accessibleLabel||this.label||this.placeholder||this.name||"Combobox"),e.setAttribute("aria-invalid",this._ariaInvalid()),this.required?e.setAttribute("aria-required","true"):e.removeAttribute("aria-required"),"ariaControlsElements"in e&&(e.ariaControlsElements=this._listbox?[this._listbox]:null),"ariaActiveDescendantElement"in e&&(e.ariaActiveDescendantElement=this.active?this._activeRowElement():null))}_renderTrigger(){return c`<hmwc-icon
      slot="toggle"
      part="trigger"
      class="combobox__trigger"
      src="chevron-down"
      aria-hidden="true"
      @mousedown=${this._handleTriggerMousedown}
      @click=${this._handleTriggerClick}></hmwc-icon>`}_renderOption(e,t){let r=t===this._activeIndex;return c`
      <div
        part="option"
        class=${v({combobox__option:!0,active:r})}
        role="option"
        id=${`${this._uid}-option-${t}`}
        data-index=${t}
        aria-selected=${r?"true":"false"}>
        <span part="option-label" class="combobox__option-label">${e.label??e.value}</span>
        ${e.description?c`<span part="option-description" class="combobox__option-description">${e.description}</span>`:x}
      </div>
    `}_renderPanel(){let e=this._visibleOptions,t=e.length,r=!this.loading&&this.filteredOptions.length===0;return c`
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
          aria-label=${this.accessibleLabel||this.label||this.placeholder||this.name||"Suggestions"}
          ?hidden=${!this._rowCount}>
          ${e.map((i,o)=>this._renderOption(i,o))}
          ${this._showLoadMore?c`
                <div
                  part="load-more"
                  class=${v({combobox__option:!0,"combobox__load-more":!0,active:this._activeIndex===t})}
                  role="option"
                  id=${`${this._uid}-load-more`}
                  data-index=${t}
                  aria-selected=${this._activeIndex===t?"true":"false"}>
                  ${this.loadMoreText}
                </div>
              `:x}
        </div>
        <div part="status" class="combobox__status" role="status" aria-live="polite" ?hidden=${!this.loading&&!r}>
          ${this.loading?c`<hmwc-spinner class="combobox__spinner"></hmwc-spinner><span>${this.loadingText}</span>`:r?c`<span>${this.emptyText}</span>`:x}
        </div>
      </div>
    `}render(){let e=v({combobox:!0,active:!!this.active,disabled:!!this.disabled,invalid:!!this.invalid});return c`
      <div part="base" class=${e}>
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
            .value=${tt(String(this.value??""))}
            label=${b(this.label)}
            label-pos=${b(this.labelPos)}
            placeholder=${b(this.placeholder)}
            .help=${this.help}
            .invalid=${tt(!!this.invalid)}
            .error=${tt(this.error??"")}
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
    `}};V.styles=Wo;V.dependencies=[P,$,C,ie];V.slots=[];ce([w()],V.prototype,"_activeIndex",void 0);ce([w()],V.prototype,"_renderCount",void 0);ce([w()],V.prototype,"_query",void 0);ce([n({type:Boolean,reflect:!0})],V.prototype,"active",void 0);ce([n({type:Boolean,reflect:!0})],V.prototype,"fluid",void 0);ce([n({type:Boolean,reflect:!0,attribute:"has-more"})],V.prototype,"hasMore",void 0);ce([n({type:Boolean,reflect:!0})],V.prototype,"loading",void 0);ce([n({type:Boolean,reflect:!0,attribute:"no-filter"})],V.prototype,"noFilter",void 0);ce([n({type:Boolean,reflect:!0})],V.prototype,"readonly",void 0);ce([n({type:String,attribute:"empty-text"})],V.prototype,"emptyText",void 0);ce([n({type:String})],V.prototype,"help",void 0);ce([n({type:String,attribute:"load-more-text"})],V.prototype,"loadMoreText",void 0);ce([n({type:String,attribute:"loading-text"})],V.prototype,"loadingText",void 0);ce([n({type:String})],V.prototype,"placeholder",void 0);ce([n({type:String,attribute:"aria-label"})],V.prototype,"accessibleLabel",void 0);ce([n({type:Number,attribute:"render-batch"})],V.prototype,"renderBatch",void 0);ce([n({converter:Os})],V.prototype,"options",void 0);ce([I(".combobox__input")],V.prototype,"_inner",void 0);ce([I(".combobox__panel")],V.prototype,"_panel",void 0);ce([I(".combobox__listbox")],V.prototype,"_listbox",void 0);ce([u("active",{waitUntilFirstUpdate:!0})],V.prototype,"handleActiveChange",null);ce([u(["disabled","readonly"],{waitUntilFirstUpdate:!0})],V.prototype,"handleInteractiveChange",null);ce([u("label")],V.prototype,"handleLabelChange",null);V.define("hmwc-combobox",V);var Vo="important",Rs=" !"+Vo,Zt=Ot(class extends xt{constructor(s){if(super(s),s.type!==nt.ATTRIBUTE||s.name!=="style"||s.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((e,t)=>{let r=s[t];return r==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(s,[e]){let{style:t}=s.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?t.removeProperty(r):t[r]=null);for(let r in e){let i=e[r];if(i!=null){this.ft.add(r);let o=typeof i=="string"&&i.endsWith(Rs);r.includes("-")||o?t.setProperty(r,o?i.slice(0,-11):i,o?Vo:""):t[r]=i}}return ze}});var Ko=f`
  :host {
    --context-menu-min-width: calc(10 * var(--hmwc-rem, 1rem));
    --context-menu-max-height: calc(24 * var(--hmwc-rem, 1rem));
    --context-menu-shortcut-color: var(--hmwc-color-neutral-500);

    display: contents;
  }

  /* The zero-size point the attachment anchors the menu to: the pointer,
     or the bottom-left corner of the focused element. */
  .context-menu__anchor {
    position: fixed;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  /* Shown as a popover (top layer) so a transformed or clipped ancestor
     cannot offset it. Reset the user-agent popover box; the menu draws its
     own border, background and shadow. The host is the sized box (min and
     max width, shrink-to-fit otherwise), so the panel fills it: a narrower
     panel left the host's extra width as an empty box beside the menu.
     Small (sm) rows keep their usual inline padding. */
  .context-menu__menu {
    --menu-width: 100%;
    --menu-max-height: var(--context-menu-max-height);
    --menu-item-spacing-override: var(--hmwc-spacing-3x-small) var(--hmwc-spacing-small);
    --icon-size: var(--hmwc-font-size-small);

    min-width: var(--context-menu-min-width);
    max-width: calc(100vw - 2 * var(--hmwc-spacing-small));
    padding: 0;
    border: none;
    background: transparent;
    color: inherit;
    overflow: visible;
  }

  .context-menu__menu.active {
    animation: context-menu-in var(--hmwc-transition-fast) var(--hmwc-easing-decelerate);
    transform-origin: top left;
  }

  /* Shortcut hints read as quiet keycaps: mono, small, hairline-bordered,
     never competing with the label. */
  .context-menu__shortcut {
    margin-inline-start: var(--hmwc-spacing-large);
    padding: 0 var(--hmwc-spacing-3x-small);
    border: solid var(--hmwc-panel-border-width) var(--hmwc-panel-border-color);
    border-radius: var(--hmwc-border-radius-medium);
    font-family: var(--hmwc-font-mono);
    font-size: var(--hmwc-font-size-x-small);
    font-weight: var(--hmwc-font-weight-normal);
    line-height: var(--hmwc-line-height-dense);
    letter-spacing: var(--hmwc-letter-spacing-dense);
    color: var(--context-menu-shortcut-color);
    white-space: nowrap;
  }

  @keyframes context-menu-in {
    from {
      opacity: 0;
      transform: scale(0.97);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes context-menu-fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .context-menu__menu.active {
      animation-name: context-menu-fade;
    }
  }

  @media (forced-colors: active) {
    .context-menu__shortcut {
      border-color: CanvasText;
      color: CanvasText;
    }
  }
`;var er=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},gr=new Set,kt={},Ms=new Set(["text","search","email","url","tel","password","number","date","datetime-local","month","time","week"]),ci=()=>{let s=document.activeElement;for(;s?.shadowRoot?.activeElement;)s=s.shadowRoot.activeElement;return s},Ds=s=>{let e=[],t=s;for(;t;)e.push(t),t=t instanceof ShadowRoot?t.host:t.assignedSlot??t.parentNode;return e.push(window),e},Go=s=>typeof s.showPopover=="function"&&s.matches(":popover-open"),hi=s=>s instanceof HTMLElement,Bs=s=>s instanceof HTMLTextAreaElement||s instanceof HTMLInputElement&&Ms.has(s.type)||s.isContentEditable,Qo=s=>s.filter(e=>hi(e)&&e.tagName.startsWith("HMWC-")&&typeof e.contextMenuItems=="function"),Ps=(s,e)=>{if(s.global)return Qo(e).some(r=>!(r instanceof je))?e.length:-1;let t=s.for?document.getElementById(s.for):s;return t?e.indexOf(t):-1},Jo=s=>{let e,t=1/0;return gr.forEach(r=>{let i=Ps(r,s);i>=0&&i<t&&(e=r,t=i)}),e},Yo=s=>{if(s.defaultPrevented)return;let e=s.composedPath();if(kt.menu?.ownsPath(e)){s.preventDefault();return}if(s.button!==2&&kt.menu?.openedByKeyboard&&performance.now()-kt.menu.openedAt<1e3){s.preventDefault();return}if(s.shiftKey)return;let t=Jo(e),r=e.find(i=>i instanceof Element);!t||!r||t.openFor({target:r,path:e,x:s.clientX,y:s.clientY,keyboard:!1})&&s.preventDefault()},Xo=s=>{if(!(s.key==="ContextMenu"||s.key==="F10"&&s.shiftKey&&!s.ctrlKey&&!s.altKey&&!s.metaKey)||s.defaultPrevented)return;let t=s.composedPath();if(kt.menu?.ownsPath(t))return;let r=ci()??t.find(a=>a instanceof Element),i=Jo(t);if(!i||!r||r===document.body)return;let o=r.getBoundingClientRect();i.openFor({target:r,path:t,x:o.left,y:o.bottom,keyboard:!0})&&s.preventDefault()},je=class extends g{constructor(){super(...arguments),this._items=[],this._point={x:0,y:0},this.openedAt=0,this.openedByKeyboard=!1,this._onPointerDown=e=>{this.ownsPath(e.composedPath())||this.hide(!1)},this._onKeyDown=e=>{e.key==="Escape"?(e.preventDefault(),e.stopPropagation(),this.hide()):e.key==="Tab"&&this.hide()},this._onViewportChange=e=>{this.ownsPath(e.composedPath())||this.hide(!1)},this._onBlur=()=>this.hide(!1),this._handleSelect=async e=>{let t=e.target;if(t.tagName!=="HMWC-MENU-ITEM")return;let r=this._items[Number(t.dataset.index)],i=this._context;if(!r||r.disabled||!i)return;let o=this.emit("hmwc-select",{cancelable:!0,detail:{value:r.value,option:r,context:i}});if(this.hide(),!(o.defaultPrevented||!r.action))try{await r.action(i)}catch(a){console.error(a),this._toast(`\u201C${r.label}\u201D didn\u2019t work. Please try again.`,i.target)}},this._stop=e=>e.stopPropagation()}connectedCallback(){super.connectedCallback(),gr.size||(document.addEventListener("contextmenu",Yo),document.addEventListener("keydown",Xo)),gr.add(this)}disconnectedCallback(){super.disconnectedCallback(),this.hide(!1),gr.delete(this),gr.size||(document.removeEventListener("contextmenu",Yo),document.removeEventListener("keydown",Xo))}show(e,t,r){let i=r??document.elementFromPoint(e,t);return i?this.openFor({target:i,path:Ds(i),x:e,y:t,keyboard:!1}):!1}hide(e=!0){if(!this.active)return;this.active=!1,kt.menu===this&&(kt.menu=void 0),this._removeDismissListeners();let t=this._menu;t&&Go(t)&&t.hidePopover?.(),e&&this._returnFocus?.focus?.(),this._returnFocus=void 0,this.emit("hmwc-hide")}ownsPath(e){return!!this.active&&!!this._menu&&e.includes(this._menu)}openFor({target:e,path:t,x:r,y:i,keyboard:o}){let a={target:e,path:t,x:r,y:i,keyboard:o,selection:window.getSelection()?.toString()??"",copy:m=>this._copy(m),paste:()=>this._paste(),download:(m,y,_)=>this._download(m,y,_)},l=this._collectItems(a);if(!l)return!1;let h=this.emit("hmwc-show",{cancelable:!0,detail:{items:l,context:a}}),d=h.detail.items??[];if(h.defaultPrevented||!d.length)return!1;kt.menu&&kt.menu!==this&&kt.menu.hide(!1);let p=this.active?this._returnFocus:ci();return this._context=a,this._items=d,this._point={x:r,y:i},this._returnFocus=p instanceof HTMLElement&&p!==document.body?p:void 0,this.openedAt=performance.now(),this.openedByKeyboard=o,kt.menu=this,this.active||(this.active=!0,this._addDismissListeners()),this._present(o),!0}_collectItems(e){let{path:t,target:r}=e,i=t.filter(hi);if(i.some(_=>_.hasAttribute("nocontextmenu"))||Bs(r)&&!i.some(_=>_.tagName==="HMWC-INPUT"))return null;let o=[],a=i.find(_=>_ instanceof HTMLAnchorElement&&!!_.href);a&&o.push(this._linkItems(a.href));let l=[];for(let _ of Qo(t)){if(_===this)continue;let A=_.contextMenuItems(e);if(A===null)return null;A.length&&l.push(A)}let h=new Set(l.flat().map(_=>_.value)),d=Qt();e.selection.trim()&&!h.has("copy")&&o.push([{value:"copy",label:"Copy",icon:"copy",shortcut:`${d}C`,action:_=>_.copy(_.selection).then(()=>{})}]),o.push(...l);let p=this._declaredItems();if(p.length&&o.push(p),!o.length){let _=this._textOf(t);_&&o.push([{value:"copy-text",label:"Copy text",icon:"copy",action:A=>A.copy(_).then(()=>{})}])}let m=new Set,y=[];return o.forEach(_=>{let A=!0;_.forEach(N=>{m.has(N.value)||(m.add(N.value),y.push(A&&y.length?{...N,divider:!0}:N),A=!1)})}),y}_linkItems(e){return[{value:"open-link",label:"Open link in new tab",icon:"box-arrow-up-right",action:()=>void window.open(e,"_blank","noopener")},{value:"copy-link",label:"Copy link address",icon:"link-45deg",action:t=>t.copy(e).then(()=>{})}]}_declaredItems(){let e=[],t=!1;return Array.from(this.children).forEach(r=>{if(r.slot!=="items")return;if(r.tagName==="HMWC-DIVIDER"){t=!0;return}if(r.tagName!=="HMWC-MENU-ITEM")return;let i=r,o=i.label??r.getAttribute("label")??r.textContent?.trim()??"";e.push({value:i.value??r.getAttribute("value")??o,label:o,icon:i.prefix||r.getAttribute("prefix")||void 0,shortcut:r.getAttribute("shortcut")??void 0,disabled:i.disabled??r.hasAttribute("disabled"),divider:t&&e.length>0}),t=!1}),e}_textOf(e){for(let t of e){if(!hi(t)||t===document.body||t===document.documentElement)continue;let r=t.innerText?.trim();if(r)return r}return""}async _present(e){await this.updateComplete,await this._attachment?.updateComplete;let t=this._menu;!t||!this.active||(await t.updateComplete,t.showPopover&&!Go(t)&&t.showPopover(),this._placeWithoutAnchorPositioning(t),requestAnimationFrame(()=>{this.active&&e&&t.focusItem("first")}))}_placeWithoutAnchorPositioning(e){if(typeof CSS<"u"&&CSS.supports?.("anchor-name","--a"))return;let{width:t,height:r}=e.getBoundingClientRect(),{x:i,y:o}=this._point,a=i+t>window.innerWidth?Math.max(0,i-t):i,l=o+r>window.innerHeight?Math.max(0,o-r):o;e.style.setProperty("left",`${a}px`),e.style.setProperty("top",`${l}px`)}_addDismissListeners(){document.addEventListener("pointerdown",this._onPointerDown,!0),document.addEventListener("keydown",this._onKeyDown,!0),window.addEventListener("scroll",this._onViewportChange,!0),window.addEventListener("resize",this._onViewportChange),window.addEventListener("blur",this._onBlur)}_removeDismissListeners(){document.removeEventListener("pointerdown",this._onPointerDown,!0),document.removeEventListener("keydown",this._onKeyDown,!0),window.removeEventListener("scroll",this._onViewportChange,!0),window.removeEventListener("resize",this._onViewportChange),window.removeEventListener("blur",this._onBlur)}async _copy(e){try{return await navigator.clipboard.writeText(e),!0}catch{return this._copyWithSelection(e)?!0:(this._toast("Couldn\u2019t copy to the clipboard. Select the text and press Ctrl+C instead.",this._context?.target),!1)}}_copyWithSelection(e){let t=ci(),r=document.createElement("textarea");r.value=e,r.setAttribute("readonly",""),r.setAttribute("aria-hidden","true"),Object.assign(r.style,{position:"fixed",top:"0",left:"0",opacity:"0",pointerEvents:"none"}),document.body.appendChild(r),r.select();let i=!1;try{i=document.execCommand("copy")}catch{i=!1}return r.remove(),t?.focus?.(),i}async _paste(){try{return await navigator.clipboard.readText()}catch{return this._toast("Your browser didn\u2019t allow pasting from this menu. Press Ctrl+V instead.",this._context?.target),null}}_download(e,t,r="text/plain"){let i=URL.createObjectURL(new Blob([t],{type:r})),o=Object.assign(document.createElement("a"),{href:i,download:e});o.style.display="none",document.body.appendChild(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}_toast(e,t){ii({preset:"error",label:e,duration:6e3,relativeTo:t})}_renderItem(e,t){return c`
      ${e.divider?c`<hmwc-divider></hmwc-divider>`:x}
      <hmwc-menu-item
        part="item"
        data-index=${t}
        value=${e.value}
        label=${e.label}
        prefix=${b(e.icon)}
        ?disabled=${!!e.disabled}>
        ${e.shortcut?c`<span slot="suffix" part="shortcut" class="context-menu__shortcut" aria-hidden="true">${e.shortcut}</span>`:x}
      </hmwc-menu-item>
    `}render(){return c`
      <slot></slot>
      <!-- Declared items are definitions, read when the menu opens; never shown in place. -->
      <slot name="items" hidden></slot>
      <hmwc-attachment
        part="attachment"
        trigger="manual"
        placement="bottom-start"
        .distance=${0}
        ?flip=${!0}
        ?active=${!!this.active}
        @hmwc-show=${this._stop}
        @hmwc-hide=${this._stop}
        @hmwc-select=${this._stop}
        @hmwc-change=${this._stop}
        @hmwc-focus=${this._stop}
        @hmwc-blur=${this._stop}>
        <span slot="anchor" class="context-menu__anchor" style=${Zt({left:`${this._point.x}px`,top:`${this._point.y}px`})}></span>
        <hmwc-menu part="menu" class="context-menu__menu" compact sm popover="manual" @hmwc-select=${this._handleSelect}>
          ${this._items.map((e,t)=>this._renderItem(e,t))}
        </hmwc-menu>
      </hmwc-attachment>
    `}};je.styles=Ko;je.dependencies=[U,P,H,$,O,R];je.slots=["items"];er([w()],je.prototype,"_items",void 0);er([w()],je.prototype,"_point",void 0);er([n({type:Boolean,reflect:!0})],je.prototype,"active",void 0);er([n({type:String})],je.prototype,"for",void 0);er([I("hmwc-attachment")],je.prototype,"_attachment",void 0);er([I("hmwc-menu")],je.prototype,"_menu",void 0);je.define("hmwc-context-menu",je);var Zo=f`
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

  /* Size and shape defaults live on :host so a page can still override
     --dropdown-radius on the element (e.g. to join it to an adjacent input).
     The radii match <hmwc-input> at each size. */
  :host([sm]) {
    --dropdown-radius: calc(1.15 * var(--hmwc-input-border-radius-medium));
  }

  :host([pill]) {
    --dropdown-radius: var(--hmwc-border-radius-pill);
  }

  /* When the dropdown has no label, center-align in the row
     so the trigger lines up with checkboxes / other controls. */
  :host([no-label]) {
    align-self: center;
  }

  :host([fluid]) {
    width: 100%;
  }

  /* While open, the field sits above the content after it, so its menu does
     too. The menu's own z-index only ranks it within the nearest stacking
     context; when each field is one (a reveal animation, a transform or
     opacity on the field), later fields would otherwise paint over it. */
  :host([active]) {
    z-index: var(--hmwc-z-index-dropdown);
  }

  /* Open: no press movement on the trigger. Its focus look is the last rule
     in this sheet. */
  :host([active]:not([disabled])) .dropdown {
    --dropdown-background: var(--hmwc-input-background-color-focus);
  }

  :host([active]:not([disabled])) .dropdown .dropdown__trigger::part(base) {
    transform: none;
  }

  :host([active]:not([disabled])) .dropdown .dropdown__trigger::part(suffix) {
    transform: rotate(-180deg);
    transform-origin: center;
    transition: transform 0.15s ease-out;
    padding-inline-end: var(--hmwc-spacing-x-small);
    padding-inline-start: 0;
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
      overflow: hidden;
      text-overflow: ellipsis;
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
      --button-shadow: 0 0 0 var(--hmwc-input-focus-ring-width) var(--hmwc-input-focus-ring-color);

      --icon-color: var(--hmwc-color-neutral-500);
      --icon-size: calc(0.75 * var(--hmwc-rem, 1rem));

      /* Radius and shadow are set on the part, not through --button-radius:
         the button's size classes redeclare that inside its own shadow root,
         which used to override --dropdown-radius. */
      /* Border on the part too: the button's own :hover redeclares
         --button-border (primary blue) inside its shadow root, which turned
         the trigger's border blue on hover instead of the input hover grey. */
      &::part(base) {
        border: var(--dropdown-border);
        font-family: var(--hmwc-font-sans);
        color: var(--hmwc-input-color);
        font-weight: var(--hmwc-font-weight-normal);
        width: var(--dropdown-width);
        border-radius: var(--dropdown-radius);
        box-shadow: var(--dropdown-shadow);
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
        --icon-size: calc(0.8 * var(--hmwc-rem, 1rem));
        height: fit-content;
        transition: transform var(--hmwc-transition-fast) ease;
      }
    }

    /* A block of text, as on <hmwc-input> and the groups, so the required
       indicator follows the label's last word, however it wraps. */
    &.label-wrap .dropdown__label {
      overflow: visible;
      text-overflow: clip;
      white-space: normal;
      overflow-wrap: anywhere;
    }

    &.label {
      & .dropdown__label {
        display: block;
        /* Same token <hmwc-input> uses for its label — was neutral-600, which
           read a shade lighter than the input label beside it. */
        color: var(--hmwc-input-color);
        font-size: calc(0.95 * var(--hmwc-button-font-size-medium));
      }
    }

    /* ── States (docs/v2/specs/CONTROL_STATES.md) ──
       The trigger is a field: the same border and ring as <hmwc-input> in
       every state. The colors are the "--control-*" properties validity has
       already resolved (see the form styles), set on the part so neither the
       button's own hover nor a page's --dropdown-border / --dropdown-shadow
       can hide a state. At rest the border is --dropdown-border. */
    &.invalid .dropdown__trigger::part(base),
    &.disabled .dropdown__trigger::part(base) {
      border-color: var(--control-border-color);
    }

    /* Hover is the border alone. Not while focused or open: focus has the
       border then. */
    &:hover:not(.disabled):not(:focus-within) {
      --dropdown-background: var(--hmwc-input-background-color-hover);

      & .dropdown__trigger::part(base) {
        border-color: var(--control-border-color-hover);
      }
    }

    /* Focused (tabbed to, clicked, or after choosing) or open: the focus
       border and the ring, in place of the button's own dark outline. */
    &:not(.disabled):focus-within .dropdown__trigger::part(base) {
      border-color: var(--control-border-color-focus);
      box-shadow: var(--control-ring);
      outline: none;
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
      /* The error under an invalid dropdown, in the error colour. (This
         targeted .input__help, a class the dropdown doesn't have, so its
         errors showed in the grey of help text.) */
      & .dropdown__help {
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

  /* Open counts as focused wherever DOM focus is, and comes last so hover
     can't take the border back. */
  :host([active]:not([disabled])) .dropdown .dropdown__trigger::part(base) {
    border-color: var(--control-border-color-focus);
    box-shadow: var(--control-ring);
  }
`;var me=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},q=class extends L{constructor(){super(...arguments),this.active=!1,this.items=[],this.placeholder="",this.placement="bottom-start",this.sync=!0,this.distance=1,this.skidding=0,this._menuSelectHandler=e=>{let t=this.matches(":focus-within");this.select(e.detail.value),this.hide(),t&&this.trigger?.focus()},this._stopInnerEvent=e=>e.stopPropagation(),this._reEmitTrigger=e=>{e.stopPropagation(),this.emit(`hmwc-${e.type==="hmwc-focus"?"focus":"blur"}`)},this._keydownHandler=e=>{if(!(this.disabled||e.ctrlKey||e.metaKey)){if(e.key==="Escape"){if(!this.active)return;e.preventDefault(),e.stopPropagation(),this.hide(),this.trigger?.focus();return}if(!(!this.trigger||!e.composedPath().includes(this.trigger))&&["ArrowDown","ArrowUp","Enter"," "].includes(e.key)){if(e.preventDefault(),this.active&&(e.key==="Enter"||e.key===" ")){this.hide();return}this._openAndFocus(e.key==="ArrowUp"?"last":"first")}}},this._documentMousedownHandler=e=>{let t=e.target;this.contains(t)||this.hide()},this._baseClickHandler=e=>{let t=this._menu;t&&e.composedPath().includes(t)||this.toggle()}}show(){this.disabled||(this.active=!0)}hide(){this.disabled||(this.active=!1)}toggle(){this.disabled||(this.active=!this.active)}select(e){this.value=e,this.emit("hmwc-select",{detail:{value:e}})}focus(e){this.trigger?this.trigger.focus(e):this.updateComplete.then(()=>this.trigger?.focus(e))}blur(){this.trigger?.blur()}async _openAndFocus(e){this.show(),await this.updateComplete;let t=this._menu;t&&(await t.updateComplete,await new Promise(r=>requestAnimationFrame(r)),!(!this.active||!this.isConnected)&&(t.searchOpen&&t.filter!==void 0||t.focusItem(e)))}_forwardToMenu(){if(this.menu)return;let e=this.querySelector("hmwc-menu");e&&(this.filter!==void 0&&this.filter!==null&&(e.filter=this.filter),this.searchOpen!==void 0&&(e.searchOpen=this.searchOpen),this.searchPlaceholder!==void 0&&(e.searchPlaceholder=this.searchPlaceholder))}handleSearchOptionsChange(){this._forwardToMenu()}get _menu(){return this.menu??this.querySelector("hmwc-menu")}get _triggerName(){return this.label?[this.label,this._displayLabel].filter(Boolean).join(", "):this.name||void 0}get _displayLabel(){let e=this.value;if(e==null||e==="")return this.placeholder||"";let t=Array.from(this.querySelectorAll("hmwc-menu-item"));for(let r of t){let i=r.getAttribute("value");if(i!==null&&i===String(e))return r.getAttribute("label")??String(e)}return String(e)}listen(e){e==="add"&&this.listen("remove"),this._menu?.[`${e}EventListener`]("hmwc-select",this._menuSelectHandler),document[`${e}EventListener`]("mousedown",this._documentMousedownHandler)}_handleSlotChange(){this.querySelector("hmwc-menu")?.toggleAttribute("compact",!0),this._forwardToMenu(),this.listen("add")}handleValueChange(){this.emit("hmwc-change",{detail:{value:this.value}})}async handleItemsChange(){await this.updateComplete,this.listen("add")}handleOpenChange(){this.emit(`hmwc-${this.active?"show":"hide"}`)}handleLabelChange(){this.toggleAttribute("no-label",!this.label)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.listen("add"),typeof MutationObserver<"u"&&(this._itemObserver??=new MutationObserver(()=>{this.listen("add"),this.requestUpdate()}),this._itemObserver.observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["label","value"]}))}disconnectedCallback(){super.disconnectedCallback(),this.listen("remove"),this._itemObserver?.disconnect()}firstUpdated(){super.connectedCallback(),this.listen("add"),this.toggleAttribute("no-label",!this.label)}render(){let e=v({dropdown:!0,disabled:!!this.disabled,small:!!this.sm,medium:!!this.md,large:!!this.lg,filled:!!this.filled,label:!!this.label,"label-wrap":!!this.labelWrap,pill:!!this.pill,invalid:!!this.invalid});return c`
      <div part="base" class=${e} @click=${this._baseClickHandler} @keydown=${this._keydownHandler}>
        <slot name="label" part="label" class="dropdown__label">${this.label}</slot>

        <hmwc-attachment
          .placement=${this.placement}
          .distance=${this.distance??2}
          .skidding=${this.skidding??0}
          ?sync=${this.sync}
          ?active=${this.active}
          @hmwc-select=${this._stopInnerEvent}
          @hmwc-change=${this._stopInnerEvent}
          @hmwc-show=${this._stopInnerEvent}
          @hmwc-hide=${this._stopInnerEvent}>
          ${this.items.length?c` <hmwc-menu
                compact
                part="anchor"
                class="dropdown__menu"
                .filter=${this.filter}
                .searchOpen=${this.searchOpen}
                .searchPlaceholder=${this.searchPlaceholder}
                .items=${this.items}></hmwc-menu>`:c`<slot @slotchange=${()=>this._handleSlotChange()}></slot>`}

          <hmwc-button
            slot="anchor"
            part="trigger"
            class="dropdown__trigger"
            aria-label=${b(this._triggerName)}
            ?fluid=${this.fluid}
            ?disabled=${this.disabled}
            ?pill=${this.pill}
            ?sm=${this.sm}
            ?md=${this.md}
            ?lg=${this.lg}
            label=${this._displayLabel}
            suffix="chevron-down"
            @hmwc-focus=${this._reEmitTrigger}
            @hmwc-blur=${this._reEmitTrigger}></hmwc-button>
        </hmwc-attachment>

        <!-- Help Text -->
        <slot name="help" part="help" class="dropdown__help" aria-hidden=${!this.help}> ${this.invalid&&this.error||this.help} </slot>
      </div>
    `}};q.styles=Zo;q.slots=["menu"];q.dependencies=[P,k,O];me([n({type:Boolean,reflect:!0})],q.prototype,"active",void 0);me([n({type:Array})],q.prototype,"items",void 0);me([n({type:String})],q.prototype,"placeholder",void 0);me([n({type:String})],q.prototype,"placement",void 0);me([n({type:String,reflect:!0})],q.prototype,"filter",void 0);me([n({type:Boolean,reflect:!0,attribute:"search-open"})],q.prototype,"searchOpen",void 0);me([n({type:String,attribute:"search-placeholder"})],q.prototype,"searchPlaceholder",void 0);me([n({type:String})],q.prototype,"help",void 0);me([n({type:Boolean})],q.prototype,"sync",void 0);me([n({type:Boolean,reflect:!0})],q.prototype,"pill",void 0);me([n({type:Boolean,reflect:!0})],q.prototype,"filled",void 0);me([n({type:Number})],q.prototype,"distance",void 0);me([n({type:Number})],q.prototype,"skidding",void 0);me([n({type:Boolean,reflect:!0})],q.prototype,"fluid",void 0);me([n({type:Boolean,reflect:!0,attribute:"label-wrap"})],q.prototype,"labelWrap",void 0);me([I(".dropdown__trigger")],q.prototype,"trigger",void 0);me([I(".dropdown__menu")],q.prototype,"menu",void 0);me([u(["filter","searchOpen","searchPlaceholder"],{waitUntilFirstUpdate:!0})],q.prototype,"handleSearchOptionsChange",null);me([u("value",{waitUntilFirstUpdate:!0})],q.prototype,"handleValueChange",null);me([u("items",{waitUntilFirstUpdate:!0})],q.prototype,"handleItemsChange",null);me([u("active",{waitUntilFirstUpdate:!0})],q.prototype,"handleOpenChange",null);me([u("label")],q.prototype,"handleLabelChange",null);q.define("hmwc-dropdown",q);var ea=f`
  :host {
    --pagination-color: var(--hmwc-accent-color, var(--hmwc-color-primary-600));

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
        --icon-size: calc(0.8 * var(--hmwc-rem, 1rem));
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
      --hmwc-input-height-small: calc(2 * var(--hmwc-rem, 1rem));
      --hmwc-button-font-size-small: var(--hmwc-font-size-small);
      gap: var(--hmwc-spacing-2x-small);

      & .pagination-page {
        margin: 0;

        &.nav {
          margin: 0 var(--hmwc-spacing-x-small);
          --icon-size: calc(0.75 * var(--hmwc-rem, 1rem));
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
`;var Ke=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},Is=s=>s.toLocaleString("en-US",{maximumFractionDigits:0}),se=class extends g{constructor(){super(...arguments),this.range=[],this.page=1,this.siblings=1,this.boundary=1}updateRange(){let e=(r,i)=>Array.from({length:i-r+1},(o,a)=>r+a),t=(this.siblings+this.boundary)*2;if(this.count>t+3){let r=Math.max(2,this.page-this.siblings),i=Math.min(this.count-1,this.page+this.siblings),o=e(r,i),a=r>2,l=this.count-i>1,h=t-o.length;a&&!l?o=[-1,...e(r-h,r-1),...o]:!a&&l?o=[...o,...e(i+1,i+h),-1]:o=[-1,...o,-1],this.range=[1,...o,this.count]}else this.range=e(1,this.count)}handlePageChange(){this.updateRange(),this.emit("hmwc-change",{detail:{page:this.page}})}handleCountChange(){this.updateRange()}render(){let e=v({pagination:!0,sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
      <nav part="base" class=${e} aria-label="Pagination">
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

        ${this.range.map(t=>t===-1?c`<div class="pagination-page elipsis"><hmwc-icon sm part="elipsis" src="three-dots"></hmwc-icon></div>`:c`
                <div class="pagination-page ${this.page===t?"active":""}">
                  <hmwc-button
                    part="page page-${this.page===t?"active":"inactive"}"
                    circle
                    ?sm=${!!this.sm}
                    ?md=${!!this.md}
                    ?lg=${!!this.lg}
                    ?primary=${!!this.primary&&t===this.page}
                    ?success=${!!this.success&&t===this.page}
                    ?neutral=${!!this.neutral&&t===this.page}
                    ?warning=${!!this.warning&&t===this.page}
                    ?danger=${!!this.danger&&t===this.page}
                    label=${Is(t)}
                    @hmwc-click=${()=>this.page=t}></hmwc-button>
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
    `}};se.styles=ea;se.dependencies=[$,k];Ke([w()],se.prototype,"range",void 0);Ke([n({type:Number})],se.prototype,"page",void 0);Ke([n({type:Number})],se.prototype,"count",void 0);Ke([n({type:Number})],se.prototype,"siblings",void 0);Ke([n({type:Number})],se.prototype,"boundary",void 0);Ke([n({type:Boolean,reflect:!0})],se.prototype,"sm",void 0);Ke([n({type:Boolean,reflect:!0})],se.prototype,"md",void 0);Ke([n({type:Boolean,reflect:!0})],se.prototype,"lg",void 0);Ke([n({type:Boolean,reflect:!0})],se.prototype,"primary",void 0);Ke([n({type:Boolean,reflect:!0})],se.prototype,"success",void 0);Ke([n({type:Boolean,reflect:!0})],se.prototype,"neutral",void 0);Ke([n({type:Boolean,reflect:!0})],se.prototype,"warning",void 0);Ke([n({type:Boolean,reflect:!0})],se.prototype,"danger",void 0);Ke([u("page",{waitUntilFirstUpdate:!0})],se.prototype,"handlePageChange",null);Ke([u(["count","siblings","boundary"])],se.prototype,"handleCountChange",null);se.define("hmwc-pagination",se);var ta=f`
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
    /* The header, its rule, the action buttons and the current row take the
       inherited --hmwc-accent-color (a group's colour) when a page sets it.
       Each mix falls back to its own neutral, so with no accent the result
       is exactly the plain look: neutral header, primary rule. */
    /* Secondary to the section label above the table (neutral-900). */
    --data-table-header-color: color-mix(in srgb, var(--hmwc-accent-color, var(--hmwc-color-neutral-600)) 55%, var(--hmwc-color-neutral-600));
    --data-table-header-background: color-mix(in srgb, var(--hmwc-accent-color, var(--hmwc-color-neutral-50)) 7%, var(--hmwc-color-neutral-50));
    --data-table-header-border-color: var(--hmwc-accent-color, var(--hmwc-color-primary-400));
    --data-table-header-active-background: color-mix(in srgb, var(--hmwc-accent-color, var(--hmwc-color-neutral-100)) 12%, var(--hmwc-color-neutral-100));
    --data-table-current-background: color-mix(in srgb, var(--hmwc-accent-color, var(--hmwc-color-primary-600)) 10%, transparent);
    --data-table-sort-icon-color: var(--hmwc-color-neutral-750);
    --data-table-progress-color: var(--hmwc-color-neutral-200);
    --data-table-alt-progress-color: var(--hmwc-color-primary-300);
    --data-table-pagination-color: var(--hmwc-color-neutral-200);
    /* Icon and label colour of plain ("alt") row action buttons. */
    --data-table-action-color: color-mix(in srgb, var(--hmwc-accent-color, var(--hmwc-color-neutral-700)) 55%, var(--hmwc-color-neutral-700));
    /* Height the body scrolls within when "scrollable" is set. */
    --data-table-max-height: calc(20 * var(--hmwc-rem, 1rem));

    display: block;
    width: 100%;
  }

  /* Content host (contentStyles): the host takes the page typography, so the
     slotted empty and error content reads like the page and can be selected.
     The table's own chrome (toolbar, rows, footer) keeps the library look;
     the header row is a "header" part and gets it from contentStyles. */
  .data-table__toolbar,
  .data-table__table-row:not(.empty),
  .data-table__footer {
    font-size: var(--settings-font-size, 16px);
    font-family: var(--hmwc-font-sans);
    font-feature-settings: 'c2sc', 'smcp';
    line-height: var(--hmwc-line-height-normal);
    letter-spacing: var(--hmwc-letter-spacing-normal);
    user-select: none;
  }

  .data-table {
    display: flex;
    flex-direction: column;

    /* The caption (a hint) and the search box share one line above the
       table, the box pushed to the end; they wrap on a narrow host. */
    & .data-table__toolbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: var(--hmwc-spacing-x-small) var(--hmwc-spacing-small);
      margin-bottom: var(--hmwc-spacing-small);
    }

    & .data-table__caption {
      flex: 1 1 calc(12 * var(--hmwc-rem, 1rem));
      margin: 0;
      color: var(--hmwc-color-neutral-600);
      font-family: var(--hmwc-font-sans);
      font-size: var(--hmwc-font-size-small);
      line-height: var(--hmwc-line-height-normal);
    }

    & .data-table__search {
      flex: 0 1 calc(20 * var(--hmwc-rem, 1rem));
      min-width: calc(12 * var(--hmwc-rem, 1rem));
      margin-left: auto;
    }

    & .data-table__error {
      display: flex;
      align-items: flex-start;
      gap: var(--hmwc-spacing-x-small);
      color: var(--hmwc-color-danger-700);
      user-select: text;

      & hmwc-icon {
        flex-shrink: 0;
        --icon-size: var(--hmwc-font-size-medium);
      }
    }

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
      /* Top and bottom only: sideways, a negative margin reached past the
         host, so any scrolling ancestor (a tab panel, a popup body) showed a
         scrollbar under every table. The shadow is cast downward, so the
         sides lose next to nothing. */
      padding: var(--hmwc-spacing-x-small) 0;
      margin: calc(-1 * var(--hmwc-spacing-x-small)) 0;

      &.scrollable {
        overflow-x: auto;
        /* Room between the table's bottom edge and the horizontal scrollbar,
           which otherwise sat right on the last row, and none of the pull-up
           below it, which laid the next content over the scrollbar. */
        padding-bottom: var(--hmwc-spacing-small);
        margin-bottom: 0;
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
          /* The form-label scale (as "hmwc-input" labels): small, with the
             normal letter spacing, labels as written. Was bold, uppercase and
             loosely tracked, which read a size larger than the labels around
             the table. Semibold keeps the header distinct from the rows; no
             small caps from the base host style's font features. */
          font-size: var(--hmwc-font-size-small);
          font-weight: var(--hmwc-font-weight-semibold);
          letter-spacing: var(--hmwc-letter-spacing-normal);
          font-feature-settings: normal;
          text-align: left;
          white-space: nowrap;
          cursor: pointer;
          border-bottom: calc(0.125 * var(--hmwc-rem, 1rem)) solid var(--data-table-header-border-color);
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

          /* "no-sort", or a "sortable: false" column: clicking does nothing. */
          &[sortable='false'] {
            cursor: default;
          }

          /* A sortable header is a Tab stop: Enter or Space sorts it. The ring
             is drawn inside the cell, so the table's overflow can't clip it. */
          &[sortable='true']:focus-visible {
            outline: var(--hmwc-focus-ring);
            outline-offset: calc(-1 * var(--hmwc-focus-ring-width));
          }

          &[action='true'] {
            text-align: center;

            & .data-table__col-head-content {
              justify-content: center;
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

          /* The caret is an up chevron: up for ascending (and for the hover
             preview, since the first click sorts ascending), turned down for
             descending. */
          &[active='true'][descending='true'] .data-table__col-head-content .data-table__col-sort {
            transform: rotate(180deg);
          }

          & .data-table__col-head-content {
            display: flex;
            align-items: center;
            gap: var(--hmwc-spacing-x-small);

            /* Resizing never takes a column below its label (see
               "measureColumnMin"), so the label only ellipsizes when the
               consumer's "sizing" makes the column narrower; the icons keep
               their size either way. */
            & .data-table__col-label {
              min-width: 0;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            & .data-table__col-sort,
            & .data-table__col-filter {
              flex-shrink: 0;
            }

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
                --menu-width: calc(13.75 * var(--hmwc-rem, 1rem));
                --menu-max-height: calc(17.5 * var(--hmwc-rem, 1rem));
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
                min-width: calc(2 * var(--hmwc-rem, 1rem));
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
            right: calc(-0.1875 * var(--hmwc-rem, 1rem));
            width: calc(0.375 * var(--hmwc-rem, 1rem));
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

            &:hover::after,
            &:focus-visible::after {
              background-color: var(--data-table-header-border-color);
            }

            /* The border is a focusable separator: Left / Right resize. */
            &:focus-visible {
              outline: var(--hmwc-focus-ring);
              outline-offset: calc(-1 * var(--hmwc-focus-ring-width));
              border-radius: var(--hmwc-border-radius-small);
            }
          }
        }
      }

      & .data-table__body {
        overflow-x: auto;

        & .data-table__table-row {
          cursor: pointer;
          background-color: var(--data-table-background);

          /* Rows are Tab stops (Enter opens the row, as a click does). */
          &:focus-visible {
            outline: var(--hmwc-focus-ring);
            outline-offset: calc(-1 * var(--hmwc-focus-ring-width));
          }

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
            /* Cell values are data, not labels: no small caps (as the header). */
            font-feature-settings: normal;

            /* The empty state is the page's own content (the "empty" slot or
               its default text): page typography, like any other text. */
            &.empty {
              font-family: inherit;
              font-size: inherit;
              line-height: inherit;
              letter-spacing: inherit;
              font-feature-settings: inherit;
            }

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

            /* sizing "wrap": the value wraps within the column. With a line
               count, it stops after that many lines and ends in an ellipsis. */
            &.wrap {
              white-space: normal;
              overflow-wrap: break-word;
            }

            & .data-table__lines {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: var(--data-table-lines);
              line-clamp: var(--data-table-lines);
              overflow: hidden;
            }

            &.action {
              width: 0px;
              overflow: visible;
              line-height: 0;
              text-align: center;
              vertical-align: middle;

              /* A flex box round the button centres it in the cell. Inline, the
                 tooltip round an icon-only button put it on a line of the
                 attachment's own height (its base host style), about a third
                 of a line below the middle: the row's text read as off centre
                 beside it, and the row grew taller than its text. The tooltip's anchor
                 is a flex box too, so the button isn't set on its line either. */
              & .data-table__action-box,
              & .data-table__action-box > hmwc-tooltip::part(anchor) {
                display: flex;
                align-items: center;
                justify-content: center;
              }

              & hmwc-button::part(base) {
                height: calc(0.8 * var(--hmwc-input-height-small)) !important;
                min-height: calc(0.8 * var(--hmwc-input-height-small)) !important;
                --button-padding: 0 calc(0.75 * var(--hmwc-spacing-small));
              }

              /* Plain ("alt") action buttons take their icon and label colour
                 from the table, so a page can tint them with its theme. The
                 coloured variants keep their own. */
              & hmwc-button[alt] {
                --button-color: var(--data-table-action-color);
              }

              /* While loading, a placeholder the size of the button. */
              & .data-table__action-skeleton {
                --skeleton-radius: calc(1.25 * var(--hmwc-input-border-radius-small));

                &::part(base) {
                  box-sizing: border-box;
                  width: calc(0.8 * var(--hmwc-input-height-small));
                  height: calc(0.8 * var(--hmwc-input-height-small));
                  min-height: 0;
                  padding: 0;
                  margin-inline: auto;
                }

                &.label::part(base) {
                  width: calc(2.4 * var(--hmwc-input-height-small));
                }
              }
            }

            &[percent='true'] {
              & hmwc-progress {
                --progress-track: calc(0.25 * var(--hmwc-rem, 1rem));

                &::part(base) {
                  height: calc(0.625 * var(--hmwc-rem, 1rem));
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
            box-shadow: inset calc(0.1875 * var(--hmwc-rem, 1rem)) 0 0 0 var(--data-table-header-border-color);

            & .data-table__item:not(.action) {
              color: var(--hmwc-color-neutral-700);
            }
          }

          /* The "current" row: tinted, with the hover rule kept on. After the
             stripe rule so it wins on even rows too. */
          &.current {
            background-image: linear-gradient(var(--data-table-current-background), var(--data-table-current-background));
            box-shadow: inset calc(0.1875 * var(--hmwc-rem, 1rem)) 0 0 0 var(--data-table-header-border-color);

            & .data-table__item:not(.action) {
              color: var(--hmwc-color-neutral-800);
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
          }
        }
      }
      & .data-table__item {
        padding: var(--hmwc-spacing-3x-small) var(--hmwc-spacing-x-small);

        &.percent {
          & hmwc-progress {
            --progress-track: calc(0.1875 * var(--hmwc-rem, 1rem));
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

    /* "scrollable": every row, in a body that scrolls within
       --data-table-max-height, with the header row kept in view. The scroll
       container drops its top padding (kept elsewhere for the table's
       shadow) so rows don't show through above the stuck header, and the
       table clips instead of hiding overflow — "hidden" would make the
       table its own scroll container and the header would not stick. */
    &.scroll-body {
      & .data-table__scroll {
        max-height: var(--data-table-max-height);
        overflow-y: auto;
        padding-top: 0;
        margin-top: 0;
        /* Room between the table's end edge and the vertical scrollbar, which
           otherwise sat right on the rows. The gutter is kept while the rows
           fit too, so the columns don't shift when the scrollbar comes. */
        padding-inline-end: var(--hmwc-spacing-x-small);
        scrollbar-gutter: stable;
      }

      & .data-table__table {
        overflow: clip;

        & .data-table__table-head .data-table__col-head {
          position: sticky;
          top: 0;
          z-index: 2;
        }
      }
    }

    /* No rows at all: just the empty slot, without the table's frame, so a
       "nothing on record" line reads like any other text. */
    &.no-data .data-table__table {
      box-shadow: none;
      border-radius: 0;
      background: transparent;

      & .data-table__table-row.empty,
      & .data-table__item.empty {
        background: transparent;
        padding: 0;
        border: 0;
        text-align: start;
      }

      /* The empty text is prose: it wraps rather than running past the
         host, which made the empty state scroll sideways. */
      & .data-table__item.empty {
        white-space: normal;
      }
    }

    /* ... and never scrolls: no scrollbar either way, and no "scrollable"
       height limit, whatever the table held before. */
    &.no-data .data-table__scroll {
      overflow: hidden;
      max-height: none;
    }

    &.fluid-width {
      width: 100%;

      & .data-table__table {
        width: 100%;
        min-width: 0;
      }
    }
  }
`;function ia(s,e=[]){return s==null?e.map(t=>({key:t,label:t})):Array.isArray(s)?s.length===0?e.map(t=>({key:t,label:t})):typeof s[0]=="object"&&s[0]!==null?ra(s[0]):s.filter(t=>typeof t=="string").map(t=>({key:t,label:t})):typeof s=="object"?ra(s):e.map(t=>({key:t,label:t}))}var Ns=["text","number","date","percent"];function ra(s){return Object.keys(s).map(e=>{let t=s[e];if(t!=null&&typeof t=="object"){let r=t,i={key:e,label:typeof r.label=="string"&&r.label.length>0?r.label:e};return r.type&&Ns.includes(r.type)&&(i.type=r.type),r.sortable===!1&&(i.sortable=!1),i}return{key:e,label:typeof t=="string"&&t.length>0?t:e}})}var E=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},Fs=s=>{let e=/^[=+\-@\t\r]/.test(s)&&Number.isNaN(Number(s))?`'${s}`:s;return/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e},di=s=>s.toLocaleString("en-US",{maximumFractionDigits:0}),Ls=(s,e,t)=>{let r=URL.createObjectURL(new Blob([e],{type:t})),i=Object.assign(document.createElement("a"),{href:r,download:s});i.style.display="none",document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(r),1e3)},vr=(s,e,t)=>typeof s=="function"?s(e,t):s,pi=s=>{let e=String(s).trim();return/^\d+(\.\d+)?$/.test(e)?`${e}px`:e},js=300,oa=/^(\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:?\d{2})?)?|\d{4}\/\d{1,2}\/\d{1,2}|\d{1,2}\/\d{1,2}\/\d{4}( \d{1,2}:\d{2}(:\d{2})?( ?[AP]M)?)?|\/Date\(-?\d+([+-]\d{4})?\)\/)$/i,Us=/^\d+(\.\d+)?%$/,br=s=>{if(s==null||s===""||typeof s=="boolean")return null;let e=String(s).trim(),t=/^\/Date\((-?\d+)([+-]\d{4})?\)\/$/.exec(e),r=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),i=t?new Date(Number(t[1])):r?new Date(Number(r[1]),Number(r[2])-1,Number(r[3])):new Date(typeof s=="number"?s:e);return isNaN(i.getTime())?null:i},S=class s extends g{constructor(){super(...arguments),this.selections=[],this._fillerRows=new WeakSet,this._readyEmitted=!1,this._sizingId=0,this._tableIsSized=!1,this._resizing=null,this._didResize=!1,this._columnWidths={},this._boundResizeMove=null,this._boundResizeEnd=null,this._filterableFields={},this._columnFilters={},this.fieldKeys=[],this._normalizedFields=[],this.ready=!1,this.results=[],this.entries=[],this._awaiting=!1,this._selectedSources=new Set,this._applySelected=!1,this._sources=new WeakMap,this._data=[],this._dataSet=!1,this.fields=[],this.page=1,this.amount=10,this.label="",this.sizing={},this.filter="",this.sort="",this.order="ascending",this.pagination=!0,this.actions=[],this.searchPlaceholder="Search",this.total=0,this.dataUpdate=()=>this.parseData(),this.selectedUpdate=()=>{this._applySelected=!0,this.parseData()},this.errorUpdate=()=>{this._awaiting&&(this._awaiting=!1,this.entries=this.getEntries())},this.entriesUpdate=()=>this.entries=this.getEntries(),this.loadingUpdate=(e,t)=>{e&&!t&&(this._dataSet=!0,this.parseData())},this.sizingUpdate=()=>{this._resetTableSizing(),this.setTableSizing()},this._rowPointerOrigin=null,this._rowPointerDown=e=>{this._rowPointerOrigin={x:e.clientX,y:e.clientY}},this._footerInScroll=!1,this._scrollable=!1,this._resizeFrame=0,this._measureFooter=()=>{let e=this.shadowRoot?.querySelector(".data-table__scroll");if(e){let a=!this._isNoData&&e.scrollWidth>e.clientWidth+1;a!==this._scrollable&&(this._scrollable=a)}let t=this.shadowRoot?.querySelector(".data-table__footer");if(!t)return;let r=t.scrollWidth,i=this.clientWidth,o=r>i;o!==this._footerInScroll&&(this._footerInScroll=o)},this.titleCutOffCell=e=>{let t=e.target.closest?.("td.data-table__item");if(!t||t.matches(".action, .checkbox, .percent, .skeleton, .empty"))return;let r=t.querySelector(".data-table__lines"),i=r?r.scrollHeight>r.clientHeight+1:t.scrollWidth>t.clientWidth+1,o=t.textContent?.trim()??"";i&&o?t.title=o:t.removeAttribute("title")}}get data(){return this._data}set data(e){this._data=e??[],this._dataSet=!0,this._awaiting=!1,this._applySelected=!0}getColumnStyle(e){if(this._columnWidths[e])return`width: ${this._columnWidths[e]}px`;let{width:t}=this.columnSizing(e);return t?`width: ${pi(t)}`:""}columnSizing(e){let t=e?this.sizing?.[e]:void 0;return t==null||t===""?{}:typeof t=="object"?t:{width:t}}isPinnedColumn(e){return!!e&&(!!this._columnWidths[e]||!!this.columnSizing(e).width)}lengthToPx(e,t){if(e==null||e==="")return;let r=document.createElement("div");if(r.style.cssText="flex:none;visibility:hidden;height:0;margin:0;padding:0;border:0;",r.style.width=pi(e),!r.style.width)return;t.appendChild(r);let i=r.getBoundingClientRect().width;return r.remove(),i}hasFields(){return this.fields==null?!1:Array.isArray(this.fields)?this.fields.length>0:typeof this.fields=="object"?Object.keys(this.fields).length>0:!1}getDisplayName(e){let t=this._normalizedFields.find(r=>r.key===e);return t?t.label:e}computeFilterableFields(){let t={};for(let r of this.fieldKeys){if(this.isSkeletonField(r))continue;let i=[];for(let l of this.data){let h=l[r];h!=null&&h!==""&&i.push(h)}if(i.length===0)continue;let o=new Set(i.map(String));if(o.size<=1)continue;let a=this.detectColumnType(i,r);if(a==="categorical"){let l=Array.from(o).sort((h,d)=>h.localeCompare(d));l.length<10&&(t[r]={type:"categorical",values:l})}else if(a==="numeric"){let l=i.map(h=>this.parseNumericValue(h)).filter(h=>h!=null).sort((h,d)=>h-d);if(l.length>0){let h=(d,p)=>{let m=(d.length-1)*p,y=Math.floor(m),_=Math.ceil(m);return y===_?d[y]:d[y]*(_-m)+d[_]*(m-y)};t[r]={type:"numeric",values:[],numericStats:{min:l[0],max:l[l.length-1],q1:h(l,.25),median:h(l,.5),q3:h(l,.75)}}}}else t[r]={type:a,values:[]}}this._filterableFields=t}detectColumnType(e,t){let r=t?this.getFieldType(t):void 0;if(r==="date")return"date";if(r==="number"||r==="percent")return"numeric";let i=0,o=0;for(let l of e){let h=String(l),d=h.replace(/[$,%k]/gi,"").replace(/,/g,"").trim();if(d!==""&&!isNaN(Number(d))){i++;continue}if(r!=="text"&&oa.test(h.trim())){o++;continue}}let a=e.length;return i/a>=.8?"numeric":o/a>=.8?"date":"categorical"}parseNumericValue(e){if(typeof e=="number")return e;let r=String(e).trim().replace(/[$,%k]/gi,"").replace(/,/g,""),i=Number(r);return isNaN(i)?null:i}isColumnFilterActive(e){let t=this._columnFilters[e];if(!t)return!1;let r=this._filterableFields[e];if(!r)return!1;switch(t.type){case"categorical":return t.selected.size<r.values.length;case"numeric":return t.min!=null||t.max!=null;case"date":return t.from!=null||t.to!=null;case"text":return t.query.length>0}}getColumnFilterIcon(e){let t=this.isColumnFilterActive(e);return this._filterableFields[e]?.type==="date"?t?"calendar-range-fill":"calendar-range":t?"funnel-fill":"funnel"}isFilterValueSelected(e,t){let r=this._columnFilters[e];return!r||r.type!=="categorical"?!0:r.selected.has(t)}handleCategoricalFilterChange(e,t){let r=t.detail?.value,i=this._filterableFields[e];if(i){if(r==="all"){delete this._columnFilters[e],this._columnFilters={...this._columnFilters},this.page=1,this.parseData();return}if(r==="none"){this._columnFilters[e]={type:"categorical",selected:new Set},this._columnFilters={...this._columnFilters},this.page=1,this.parseData();return}if(r instanceof R){let o=r.value;if(!o)return;let a=this._columnFilters[e];(!a||a.type!=="categorical")&&(a={type:"categorical",selected:new Set(i.values)},this._columnFilters[e]=a),r.checked?a.selected.add(o):a.selected.delete(o),a.selected.size===i.values.length&&delete this._columnFilters[e],this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}}}handleNumericFilterChange(e,t,r){let i=r.target,o=String(i.value??"").trim(),a=this._columnFilters[e];(!a||a.type!=="numeric")&&(a={type:"numeric"},this._columnFilters[e]=a),!o||o===""?delete a[t]:a[t]=Number(o),a.min==null&&a.max==null&&delete this._columnFilters[e],this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}handleDateFilterChange(e,t,r){let i=r.target,o=String(i.value??"").trim(),a=this._columnFilters[e];(!a||a.type!=="date")&&(a={type:"date"},this._columnFilters[e]=a),!o||o===""?delete a[t]:a[t]=o,a.from==null&&a.to==null&&delete this._columnFilters[e],this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}handleTextFilterChange(e,t){let r=t.target,i=String(r.value??"").trim();i?this._columnFilters[e]={type:"text",query:i}:delete this._columnFilters[e],this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}clearColumnFilter(e){delete this._columnFilters[e],this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}applyNumericPreset(e,t,r){let i={type:"numeric"};t!=null&&(i.min=t),r!=null&&(i.max=r),this._columnFilters[e]=i,this._columnFilters={...this._columnFilters},this.page=1,this.parseData()}formatPresetValue(e){return Math.abs(e)>=1e6?`${(e/1e6).toFixed(1).replace(/\.0$/,"")}M`:Math.abs(e)>=1e4?`${(e/1e3).toFixed(1).replace(/\.0$/,"")}k`:e.toLocaleString("en-US",{maximumFractionDigits:0})}parseData(){let e=(this.fieldKeys??[]).join("\0");this.fieldKeys=this.resolveFieldKeys(),(e!==this.fieldKeys.join("\0")||!this.loading&&!this.data?.length)&&this._resetTableSizing(),this.server?this._filterableFields={}:this.computeFilterableFields();let t=this.filterData();this.results=this.server?t:this.sortData(t),this.selections=this.resolveSelections(this.results),this.amount===1/0&&(this.amount=this.results.length);let r=Math.max(1,Math.ceil(this.results.length/this.amount));!this.server&&this.page>r&&(this.page=1),(t.length||this._dataSet)&&(this.ready=!0),this.entries=this.getEntries(this.results),this.ready&&!this._readyEmitted&&(this._readyEmitted=!0,this.emit("hmwc-ready")),this.setTableSizing()}filterData(e=this.data){if(e=e.map((i,o)=>{let a=structuredClone(i);return this._sources.set(a,{source:i,index:o}),a}),this.server)return e;let t=Object.keys(this._columnFilters);if(t.length>0&&(e=e.filter(i=>t.every(o=>{let a=this._columnFilters[o],l=i[o];if(l==null)return!1;switch(a.type){case"categorical":return a.selected.has(String(l));case"numeric":{let h=this.parseNumericValue(l);return!(h==null||a.min!=null&&h<a.min||a.max!=null&&h>a.max)}case"date":{let h=br(l);return!(!h||a.from!=null&&h<(br(a.from)??new Date(a.from))||a.to!=null&&h>(br(a.to)??new Date(a.to)))}case"text":return a.query?String(l).toLowerCase().includes(a.query.toLowerCase()):!0;default:return!0}}))),!this.filter.length)return e;let r=this.filter.toLowerCase();return e.filter(i=>Object.entries(i).some(([o,a])=>{if(!a)return!1;if(a.toString().toLowerCase().includes(r))return!0;let h=this.getCellDate(a,o);return!!(h&&this.formatDate(h).toLowerCase().includes(r))}))}sortData(e=this.filterData()){let t={month:{trigger:()=>this.sort.toLowerCase()==="month",value:r=>new Date(`${r[this.sort]} ${r.Year||r.year||2025}`)},year:{trigger:()=>this.sort.toLowerCase()==="year",value:r=>new Date(`${r.Month||r.month||"January"} ${r[this.sort]}`)},percentage:{trigger:r=>r[this.sort]!=null&&r[this.sort]?.toString().includes("%"),value:r=>Number(r[this.sort].toString().split("%")[0])},money:{trigger:r=>{let i=r[this.sort];return i!=null&&typeof i=="string"&&i[i.length-1]==="k"&&!isNaN(Number(i.slice(0,-1)))},value:r=>Number(r[this.sort].toString().split("k")[0])},number:{trigger:r=>r[this.sort]!=null&&r[this.sort].toString()[0]==="$",value:r=>parseInt(r[this.sort].toString().split("$")[1])},other:{trigger:()=>!0,value:r=>r[this.sort]}};return this.sort?e.sort((r,i)=>{let o,a;if(Object.keys(t).some(h=>{if(t[h].trigger(r))return o=t[h].value(r),a=t[h].value(i),!0}),o==null&&a==null)return 0;if(o==null)return 1;if(a==null)return-1;let l=this.order==="descending";return o>a?l?-1:1:a>o?l?1:-1:0}):e}contextMenuItems(e){if(this.isLoading||!this.results.length||this.error&&!this.loading)return[];let t=this.shadowRoot?.querySelector("tbody"),r=e.path.find(p=>p instanceof HTMLTableRowElement&&p.parentElement===t),i=r&&t?this.entries[Array.from(t.rows).indexOf(r)]:void 0,o=!!i&&!this._fillerRows.has(i),a=r&&e.path.find(p=>p instanceof HTMLTableCellElement&&p.parentElement===r),l=a?this.fieldKeys[a.cellIndex-(this.selectable?1:0)]:void 0,h=p=>p.map(m=>m.replace(/[\t\r\n]+/g," ")).join("	"),d=[];return o&&i&&(l&&d.push({value:"copy-cell",label:"Copy cell",icon:"copy",action:async p=>{await p.copy(this.cellText(i,l))}}),d.push({value:"copy-row",label:"Copy row",icon:"distribute-vertical",action:async p=>{await p.copy(h(this.fieldKeys.map(m=>this.cellText(i,m))))}})),d.push({value:"copy-table",label:"Copy table",icon:"table",action:async p=>{await p.copy(this.tableCells().map(h).join(`
`))}},{value:"export-csv",label:"Export CSV",icon:"download",action:p=>p.download(this.csvFilename(),`\uFEFF${this.toCSV()}`,"text/csv;charset=utf-8")}),d}toCSV(){return this.tableCells().map(e=>e.map(Fs).join(",")).join(`\r
`)}exportCSV(e=this.csvFilename()){Ls(e,`\uFEFF${this.toCSV()}`,"text/csv;charset=utf-8")}tableCells(){let e=this.fieldKeys.map(r=>this.getDisplayName(r)),t=this.results.filter(r=>!this._fillerRows.has(r)).map(r=>this.fieldKeys.map(i=>this.cellText(r,i)));return[e,...t]}csvFilename(){return`${(this.label||"table").trim().replace(/[^\w-]+/g,"-").toLowerCase()||"table"}.csv`}cellText(e,t){let r=e[t];if(r===!0)return"Yes";if(r===!1)return"No";if(r==null)return"";let i=this.getCellDate(r,t);return i?this.formatDate(i):String(r)}sortByField(e){if(this._didResize){this._didResize=!1;return}!this.fieldKeys.includes(e)||!this.isSortable(e)||(this.sort===e?this.order=this.order==="ascending"?"descending":"ascending":(this.sort=e,this.order="ascending"),this.server&&(this.page=1,this.requestQuery()),this.parseData())}isSortable(e){return!this.noSort&&this._normalizedFields.find(t=>t.key===e)?.sortable!==!1}requestQuery(){clearTimeout(this._searchTimer);let e={page:this.page,amount:this.amount,sort:this.sort,order:this.order,filter:this.filter};this._awaiting=!0,this.emit("hmwc-query",{detail:e})}handleSearch(e){let t=String(e.target.value??"");t!==this.filter&&(this.filter=t,this.page=1,this.server&&(clearTimeout(this._searchTimer),this._searchTimer=setTimeout(()=>this.requestQuery(),js)))}handlePage(e){!e||e===this.page||(this.page=e,this.server&&this.requestQuery())}resolveSelections(e){let t=new Set(this.data);this._selectedSources.forEach(i=>!t.has(i)&&this._selectedSources.delete(i));let r=this.selected;if(this._applySelected&&r){let i=typeof r=="function"?null:new Set(r);this.data.forEach((o,a)=>{(i?i.has(o)||i.has(a):r(o,a))&&this._selectedSources.add(o)})}return this._applySelected=!1,e.map(i=>{let o=this._sources.get(i)?.source;return!!o&&this._selectedSources.has(o)})}setRowSelected(e,t){this.selections[e]=t;let r=this._sources.get(this.results[e])?.source;r&&(t?this._selectedSources.add(r):this._selectedSources.delete(r))}selectAll(){this.selectable&&(this.results.forEach((e,t)=>this.setRowSelected(t,!0)),this.selections=[...this.selections],this.emitSelectionChange())}deselectAll(){this.selectable&&(this.results.forEach((e,t)=>this.setRowSelected(t,!1)),this.selections=[...this.selections],this.emitSelectionChange())}getSelectedRows(){if(!this.selectable)return[];let e=[];for(let t=0;t<this.selections.length;t++)this.selections[t]&&this.results[t]&&e.push(this.results[t]);return e}emitSelectionChange(){let e=this.getSelectedRows(),t=e.map(r=>this._sources.get(r));this.emit("hmwc-select",{detail:{rows:e,sources:t.map(r=>r?.source),indexes:t.map(r=>r?.index)}})}getRowSource(e){let t=this._sources.get(e);return{source:t?.source,index:t?.index}}resolveFieldKeys(){if(!this.hasFields()&&!this.data.length)return this._normalizedFields=[],this._dataSet&&!this.loading?[]:[...Array(5).keys()].map((i,o)=>`#SKELETON-${o}`);let t=this.hasFields()?[]:Object.keys(this.data[0]??{}),r=ia(this.fields,t);return this._normalizedFields=r,r.map(i=>i.key)}getEntries(e=this.results){this._fillerRows=new WeakSet;let t=()=>{let r=this.fieldKeys.reduce((i,o)=>({...i,[o]:"\u200E "}),{});return this._fillerRows.add(r),r};if(this.isLoading)return Array.from({length:this.amount===1/0?5:this.amount},()=>(this.fieldKeys.length?this.fieldKeys:["#SKELETON-0"]).reduce((i,o)=>({...i,[o]:"#SKELETON"}),{}));{if(!this.isPaged||this.fitsOnePage)return[...e];if(this.server){let i=this.amount-e.length;return i>0?[...e,...Array.from({length:i},t)]:[...e]}let r=this.amount-e.length;if(r>0)return[...e,...Array.from({length:r},t)];{let i=(this.page-1)*this.amount,o=this.page*this.amount,a=e.slice(i,o),l=this.amount-a.length;return l>0?[...a,...Array.from({length:l},t)]:a}}}formatDate(e){return this.dateStyle?e.toLocaleDateString("en-US",{dateStyle:this.dateStyle}):e.toLocaleDateString()}getFieldType(e){return this._normalizedFields.find(t=>t.key===e)?.type}getCellDate(e,t){let r=this.getFieldType(t);return r==="date"?br(e):r||typeof e!="string"||!oa.test(e.trim())?null:br(e)}getCellPercent(e,t){let r=this.getFieldType(t);return r==="percent"?e==null||e===""||typeof e=="boolean"?null:this.parseNumericValue(e):r||typeof e!="string"||!Us.test(e)?null:parseFloat(e)}setTableSizing(){if(this._tableIsSized)return;let e=++this._sizingId;this.updateComplete.then(()=>{if(e!==this._sizingId||!this.offsetWidth)return;let t=this.shadowRoot?.querySelector("table");if(!t||this.isSkeletonField(this.fieldKeys[0]))return;let r=t.querySelector("tbody");if(!r)return;let i=Array.from(t.querySelectorAll("th.data-table__col-head"));if(!i.length)return;let o=[...this.fieldKeys,...this.getActionFields()],a=this.selectable?1:0;i.forEach((D,te)=>{this.isPinnedColumn(o[te-a])||D.style.removeProperty("width")}),t.style.tableLayout="auto";let l={};for(let D of this.fieldKeys){l[D]="";for(let te of this.results){let ge=te[D]?.toString()??"";ge.length>l[D].length&&(l[D]=ge)}}let h=document.createElement("tr");if(h.className="data-table__table-row",h.setAttribute("aria-hidden","true"),h.style.cssText="visibility:hidden;height:0;overflow:hidden;",this.selectable){let D=document.createElement("td");D.className="data-table__item checkbox",D.style.cssText="height:0;line-height:0;border:none;",h.appendChild(D)}for(let D of this.fieldKeys){let te=document.createElement("td");te.className="data-table__item",te.style.cssText="white-space:nowrap;height:0;line-height:0;border:none;",te.textContent=l[D],h.appendChild(te)}let d=this.getActions().length;for(let D=0;D<d;D++){let te=document.createElement("td");te.className="data-table__item action",te.style.cssText="height:0;line-height:0;border:none;",h.appendChild(te)}r.appendChild(h),t.style.width="max-content";let p=i.map(D=>D.offsetWidth);h.remove(),t.style.removeProperty("width");let m=t.parentElement,y=0,_=[],A=p.map((D,te)=>{let ge=o[te-a],{width:yr,minWidth:ja,maxWidth:Ua}=this.columnSizing(ge);if(ge&&this._columnWidths[ge])return this._columnWidths[ge];if(ge&&yr)return pi(yr).endsWith("%")&&(y+=parseFloat(yr)),this.lengthToPx(yr,m)??Math.min(D,s.MAX_COLUMN_FLOOR);let Ha=this.lengthToPx(ja,m)??0,vi=this.lengthToPx(Ua,m);return _[te]=vi==null,Math.max(Math.min(D,vi??s.MAX_COLUMN_FLOOR),Ha)}),N=A.reduce((D,te)=>D+te,0),Ze=A.reduce((D,te,ge)=>_[ge]?D+te:D,0)||1;i.forEach((D,te)=>{this.isPinnedColumn(o[te-a])||(D.style.width=_[te]?`${(A[te]/Ze*(100-y)).toFixed(4)}%`:`${A[te]}px`)}),t.style.tableLayout="fixed",t.style.minWidth=`${Math.ceil(N)}px`,this._tableIsSized=!0,this._measureFooter()})}_resetTableSizing(){if(!this._tableIsSized)return;this._tableIsSized=!1;let e=this.shadowRoot?.querySelector("table");e&&(e.style.removeProperty("min-width"),e.style.removeProperty("table-layout"))}_wasDrag(e){let t=this._rowPointerOrigin;return this._rowPointerOrigin=null,t?Math.abs(e.clientX-t.x)>4||Math.abs(e.clientY-t.y)>4:!1}get isPaged(){return!!this.pagination&&!this.scrollable}get fitsOnePage(){return!this.fixedHeight&&!this.isLoading&&(this.server?this._count:this.data.length)<=this.amount}get _count(){return this.server?Math.max(this.total||0,this.results.length):this.results.length}getPageOffset(){return this.isPaged&&!this.server?(this.page-1)*this.amount:0}getSelectionStatus(e){return this.selections[this.getPageOffset()+e]}isSkeletonField(e){return typeof e=="string"&&e.includes("#SKELETON")}getActions(){let e=[];return Array.isArray(this.actions)&&e.push(...this.actions),this.action&&e.push(this.action),e}getActionFields(){return this.getActions().map(e=>e.field)}isActionField(e){return this.getActionFields().includes(e)}get isLoading(){return!!this.loading||!this.ready||this._awaiting}get _isNoData(){return!this.isLoading&&this.data.length===0&&!(this.server&&(this.filter||this.total>0))}getTotalColumnCount(){return this.fieldKeys.length+(this.selectable?1:0)+this.getActions().length}getStorageKey(){return`hmwc-data-table-col-widths:${this.label||this.fieldKeys.join(",")}`}loadColumnWidths(){if(this.cache)try{let e=localStorage.getItem(this.getStorageKey());e&&(this._columnWidths=JSON.parse(e))}catch{}}saveColumnWidths(){if(this.cache)try{localStorage.setItem(this.getStorageKey(),JSON.stringify(this._columnWidths))}catch{}}handleResizeStart(e,t){e.preventDefault(),e.stopPropagation();let r=e.target.parentElement;!r||!this.beginResize(t,r,e.clientX)||(this._boundResizeMove=this.handleResizeMove.bind(this),this._boundResizeEnd=this.handleResizeEnd.bind(this),document.addEventListener("mousemove",this._boundResizeMove),document.addEventListener("mouseup",this._boundResizeEnd))}beginResize(e,t,r){let i=this.shadowRoot?.querySelector("table");return i?(this._resizing={field:e,startX:r,startWidth:t.offsetWidth,minWidth:40,maxWidth:1/0,th:t,table:i,activated:!1,flex:[],shared:0,fixed:0},!0):!1}handleResizeKey(e,t){let r=e.key==="ArrowRight"?s.RESIZE_STEP:e.key==="ArrowLeft"?-s.RESIZE_STEP:0;if(!r)return;e.preventDefault(),e.stopPropagation();let i=e.currentTarget;this.beginResize(t,i.parentElement,0)&&(this.activateResize(),this.applyResize(r),this.finishResize(),this.describeResizeHandle(i))}describeResizeHandle(e){let t=Math.round(e.parentElement.offsetWidth);e.setAttribute("aria-valuenow",String(t)),e.setAttribute("aria-valuetext",`${t} pixels`)}measureColumnMin(e,t){let r=getComputedStyle(e),i=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),o=parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),a=0,l=e.querySelector(".data-table__col-head-content");if(l){let m=l.style.width;l.style.width="max-content",a=l.getBoundingClientRect().width,l.style.width=m}else a=Array.from(e.children).reduce((m,y)=>m+y.getBoundingClientRect().width,0);let h=e.querySelector(".data-table__col-resize"),d=h?h.offsetWidth:0,p=a+i+o+d;if(e.getAttribute("action")==="true"){let m=this.shadowRoot?.querySelector("tbody")?.rows??[];for(let y of Array.from(m)){let _=y.cells[t],A=_?.querySelector("hmwc-button");if(!_||!A)continue;let N=getComputedStyle(_),Ze=parseFloat(N.paddingLeft)+parseFloat(N.paddingRight);p=Math.max(p,A.getBoundingClientRect().width+Ze)}}return Math.ceil(p)+1}activateResize(){if(!this._resizing||this._resizing.activated)return;this._resizing.activated=!0;let{table:e,th:t}=this._resizing,r=Array.from(e.querySelectorAll("th.data-table__col-head")),i=[...this.fieldKeys,...this.getActionFields()],o=this.selectable?1:0,a=0,l=e.parentElement;for(let m=0;m<r.length;m++){let y=r[m],_=i[m-o],{minWidth:A,maxWidth:N}=this.columnSizing(_);if(y!==t&&_&&(this._columnWidths[_]||this.lengthToPx(N,l)!=null)){a+=y.offsetWidth;continue}let Ze=Math.max(this.measureColumnMin(y,m),this.lengthToPx(A,l)??0);y===t?(this._resizing.minWidth=Ze,this._resizing.maxWidth=Math.max(Ze,this.lengthToPx(N,l)??1/0)):this._resizing.flex.push({th:y,min:Ze,start:y.offsetWidth})}let h=Array.from(e.querySelectorAll("th:not(.data-table__col-head)"));for(let m of h)a+=m.offsetWidth;let d=e.offsetWidth,p=Math.max(l.clientWidth,parseFloat(e.style.minWidth)||0);this._resizing.shared=p-a,this._resizing.fixed=a;for(let m=0;m<r.length;m++){let y=r[m];if(y===t)continue;let _=i[m-o];_&&this._columnWidths[_]||this.lengthToPx(this.columnSizing(_).maxWidth,l)==null&&y.style.removeProperty("width")}e.style.width=`${d}px`,t.style.width=`${t.offsetWidth}px`,e.style.tableLayout="fixed",this._resizing.startWidth=t.offsetWidth,document.body.style.cursor="col-resize",document.body.style.userSelect="none"}handleResizeMove(e){if(!this._resizing)return;let t=e.clientX-this._resizing.startX;if(!this._resizing.activated){if(Math.abs(t)<5)return;this.activateResize()}this.applyResize(t)}applyResize(e){let t=this._resizing,r=Math.min(t.maxWidth,Math.max(t.minWidth,t.startWidth+e));t.th.style.width=`${r}px`;let{flex:i,shared:o,fixed:a}=t,l=0;if(i.length){let h=Math.max(0,o-r-i.reduce((m,y)=>m+y.min,0)),d=i.map(m=>Math.max(0,m.start-m.min)),p=d.reduce((m,y)=>m+y,0);i.forEach((m,y)=>{let _=p?d[y]/p:1/i.length,A=m.min+h*_;m.th.style.width=`${A}px`,l+=A})}t.table.style.width=`${Math.max(a+r+l,a+o)}px`,this._measureFooter()}handleResizeEnd(){this._resizing&&(this._resizing.activated&&(this._didResize=!0),this.finishResize(),this._boundResizeMove&&document.removeEventListener("mousemove",this._boundResizeMove),this._boundResizeEnd&&document.removeEventListener("mouseup",this._boundResizeEnd),this._boundResizeMove=null,this._boundResizeEnd=null)}finishResize(){if(this._resizing){if(this._resizing.activated){let{table:e}=this._resizing;this._columnWidths[this._resizing.field]=this._resizing.th.offsetWidth,this.saveColumnWidths();let t=Array.from(e.querySelectorAll("th.data-table__col-head"));for(let r of t)r.style.width=`${r.offsetWidth}px`;e.style.width="",this._measureFooter()}document.body.style.cursor="",document.body.style.userSelect="",this._resizing=null}}connectedCallback(){super.connectedCallback(),this.parseData(),this.loadColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this._boundResizeMove&&document.removeEventListener("mousemove",this._boundResizeMove),this._boundResizeEnd&&document.removeEventListener("mouseup",this._boundResizeEnd),this._footerResizeObserver?.disconnect(),cancelAnimationFrame(this._resizeFrame),this._footerResizeObserver=void 0,clearTimeout(this._searchTimer),this._readyEmitted=!1}firstUpdated(){typeof ResizeObserver<"u"&&(this._footerResizeObserver=new ResizeObserver(()=>{cancelAnimationFrame(this._resizeFrame),this._resizeFrame=requestAnimationFrame(()=>{this._measureFooter(),this._tableIsSized||this.setTableSizing()})}),this._footerResizeObserver.observe(this)),this._measureFooter()}updated(){this._measureFooter()}renderFilterToolbar(e){return this.isColumnFilterActive(e)?c`
      <div class="data-table__filter-toolbar">
        <span class="data-table__filter-toolbar-label">Clear filter</span>
        <hmwc-icon src="x-lg" class="data-table__filter-clear" @click=${()=>this.clearColumnFilter(e)}> </hmwc-icon>
      </div>
    `:""}renderNumericPresets(e){let t=this._filterableFields[e];if(!t?.numericStats)return"";let r=t.numericStats,i=this._columnFilters[e],o=(h,d)=>!i||i.type!=="numeric"?!1:i.min===h&&i.max===d,a=h=>this.formatPresetValue(h),l=[{label:`\u2264 ${a(r.median)}`,max:r.median},{label:`${a(r.q1)} \u2013 ${a(r.q3)}`,min:r.q1,max:r.q3},{label:`\u2265 ${a(r.median)}`,min:r.median}];return c`
      <div class="data-table__filter-presets">
        <span class="data-table__filter-presets-label">Quick filters</span>
        <div class="data-table__filter-presets-list">
          ${l.map(h=>c`
              <button
                class="data-table__filter-preset ${o(h.min,h.max)?"active":""}"
                @click=${()=>o(h.min,h.max)?this.clearColumnFilter(e):this.applyNumericPreset(e,h.min,h.max)}>
                ${h.label}
              </button>
            `)}
        </div>
      </div>
    `}renderColumnFilter(e){let t=this._filterableFields[e];if(!t)return"";let r=this._columnFilters[e];switch(t.type){case"categorical":return c`
          <hmwc-menu filter="" selectAll @hmwc-change=${i=>this.handleCategoricalFilterChange(e,i)}>
            ${t.values.map(i=>c`
                <hmwc-menu-item checkable ?checked=${this.isFilterValueSelected(e,i)} label=${i} value=${i}> </hmwc-menu-item>
              `)}
          </hmwc-menu>
        `;case"numeric":return c`
          <hmwc-menu>
            <div class="data-table__range-filter">
              ${this.renderFilterToolbar(e)}
              <div class="data-table__range-inputs">
                <hmwc-input
                  underline
                  sm
                  fluid
                  type="number"
                  placeholder="Min"
                  .value=${r?.type==="numeric"&&r.min!=null?String(r.min):""}
                  @hmwc-change=${i=>this.handleNumericFilterChange(e,"min",i)}>
                </hmwc-input>
                <span class="data-table__range-separator">–</span>
                <hmwc-input
                  underline
                  sm
                  fluid
                  type="number"
                  placeholder="Max"
                  .value=${r?.type==="numeric"&&r.max!=null?String(r.max):""}
                  @hmwc-change=${i=>this.handleNumericFilterChange(e,"max",i)}>
                </hmwc-input>
              </div>
              ${this.renderNumericPresets(e)}
            </div>
          </hmwc-menu>
        `;case"date":return c`
          <hmwc-menu>
            <div class="data-table__range-filter">
              ${this.renderFilterToolbar(e)}
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
                  @hmwc-change=${i=>this.handleDateFilterChange(e,"from",i)}>
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
                  @hmwc-change=${i=>this.handleDateFilterChange(e,"to",i)}>
                </hmwc-input>
              </div>
            </div>
          </hmwc-menu>
        `;case"text":default:return c`
          <hmwc-menu>
            <div class="data-table__range-filter">
              ${this.renderFilterToolbar(e)}
              <hmwc-input
                underline
                sm
                fluid
                placeholder="Search..."
                .value=${r?.type==="text"&&r.query?r.query:""}
                @hmwc-input=${i=>this.handleTextFilterChange(e,i)}>
              </hmwc-input>
            </div>
          </hmwc-menu>
        `}}_renderBaseClasses(){return{"data-table":!0,search:!1,pagination:this.isPaged,"scroll-body":!!this.scrollable,"no-data":this._isNoData,fluid:this.amount===1/0,"fluid-width":!!this.fluid,small:!!this.sm,loading:this.isLoading,primary:!!this.primary,alt:!!this.alt,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger}}_renderHeaderSkeletonCell(){return c`
      <th part="field" colspan=${this.fieldKeys.length} class="data-table__col-head skeleton">
        <span class="visually-hidden">Loading data</span>
        <hmwc-skeleton></hmwc-skeleton>
      </th>
    `}_renderSelectionHeaderCell(){return this.selectable?c`
      <th part="field" class="data-table__col-head checkbox">
        <hmwc-checkbox
          part="field-checkbox"
          small
          @hmwc-change=${e=>e.detail.value?this.selectAll():this.deselectAll()}></hmwc-checkbox>
      </th>
    `:""}_renderActionHeaderLabel(e){let t=this.getActions().find(i=>i.field===e);return(t?.headerLabel??(typeof t?.label=="string"?t.label:""))||c`<span class="visually-hidden">Actions</span>`}_renderHeaderCell(e){let t=this.isActionField(e),r=!t&&this.isSortable(e),i=r&&this.sort===e,o=!t&&!this.isSkeletonField(e)&&this.sort===e;return c`
      <th
        part="field"
        class="data-table__col-head"
        active=${i}
        descending=${i&&this.order==="descending"}
        skeleton=${this.isSkeletonField(this.fieldKeys[0])}
        action=${t}
        sortable=${r}
        aria-sort=${b(o?this.order:void 0)}
        tabindex=${b(r?"0":void 0)}
        style=${this.getColumnStyle(e)}
        @click=${()=>this.sortByField(e)}
        @keydown=${a=>this._headKeyDown(a,e)}>
        <div class="data-table__col-head-content">
          <span class="data-table__col-label">${t?this._renderActionHeaderLabel(e):this.getDisplayName(e)}</span>
          ${r?c`<span class="data-table__col-sort">
                <hmwc-icon part="sort-icon" src="chevron-up"></hmwc-icon>
              </span>`:""}
          ${!t&&this._filterableFields[e]?c`
                <hmwc-attachment
                  class="data-table__col-filter"
                  placement="bottom-end"
                  .distance=${8}
                  .skidding=${8}
                  arrow
                  stayOpen
                  @click=${a=>a.stopPropagation()}>
                  <hmwc-button
                    slot="anchor"
                    basic
                    sm
                    icon=${this.getColumnFilterIcon(e)}
                    .accessibleLabel=${`Filter ${this.getDisplayName(e)}`}
                    part="filter-icon"
                    class="data-table__col-filter-icon ${this.isColumnFilterActive(e)?"active":""}">
                  </hmwc-button>
                  ${this.renderColumnFilter(e)}
                </hmwc-attachment>
              `:""}
        </div>
        ${t?"":c`<div
              class="data-table__col-resize"
              role="separator"
              aria-orientation="vertical"
              aria-label=${`Resize ${this.getDisplayName(e)}`}
              aria-valuenow=${Math.round(this._columnWidths[e]??0)}
              tabindex="0"
              @focus=${a=>this.describeResizeHandle(a.currentTarget)}
              @keydown=${a=>this.handleResizeKey(a,e)}
              @mousedown=${a=>this.handleResizeStart(a,e)}></div>`}
      </th>
    `}_renderHeader(){if(this._isNoData)return"";let e=this.fieldKeys.length&&this.isSkeletonField(this.fieldKeys[0]);return c`
      <thead>
        <tr part="header" role="row" class="data-table__table-head">
          ${this._renderSelectionHeaderCell()}
          ${e?this._renderHeaderSkeletonCell():[...this.fieldKeys,...this.getActionFields()].map(t=>this._renderHeaderCell(t))}
        </tr>
      </thead>
    `}_renderEmptyRow(){return c`
      <tr part="row" class="data-table__table-row empty" role="row">
        <td class="data-table__item empty" colspan=${this.getTotalColumnCount()}>
          <slot name="empty">No entries found.</slot>
        </td>
      </tr>
    `}_renderSelectionRowCell(e,t){return this.selectable?c`
      <td class="data-table__item checkbox">
        <hmwc-checkbox
          part="row-checkbox"
          small
          ?disabled=${this._fillerRows.has(e)}
          ?checked=${tt(this.getSelectionStatus(t))}
          @hmwc-change=${r=>{this._fillerRows.has(e)||(this.setRowSelected(this.getPageOffset()+t,!!r.detail.value),this.emitSelectionChange())}}></hmwc-checkbox>
      </td>
    `:""}_renderDataCell(e,t){let r=e[t];if(r==="#SKELETON")return c`<td class="data-table__item skeleton"><hmwc-skeleton></hmwc-skeleton></td>`;let i=this._fillerRows.has(e)?null:this.getCellPercent(r,t);if(i!=null)return c`
        <td class="data-table__item percent">
          <hmwc-progress
            part="progress"
            ?primary=${this.primary}
            ?alt=${this.alt}
            ?success=${this.success}
            ?neutral=${this.neutral}
            ?warning=${this.warning}
            ?danger=${this.danger}
            value=${i}>
          </hmwc-progress>
        </td>
      `;let o=this._fillerRows.has(e)?null:this.getCellDate(r,t),a=r===!0?c`<hmwc-icon src="check" success></hmwc-icon>`:r===!1?c`<hmwc-icon src="x" danger></hmwc-icon>`:o?this.formatDate(o):r,{wrap:l}=this.columnSizing(t),h=typeof l=="number"&&l>0?Math.floor(l):0;return c`<td class=${v({"data-table__item":!0,wrap:!!l})}>
      ${h?c`<span class="data-table__lines" style=${`--data-table-lines: ${h}`}>${a}</span>`:a}
    </td>`}_renderActionCell(e,t){if(this.isLoading){let N=t.icon?t.display??"icon":"label";return c`<td class="data-table__item action skeleton">
        <hmwc-skeleton class=${v({"data-table__action-skeleton":!0,label:N!=="icon"})}></hmwc-skeleton>
      </td>`}let{source:r,index:i}=this.getRowSource(e),o=r??e,a=i??-1,l=N=>N.stopPropagation();if(vr(t.hidden,o,a))return c`<td class="data-table__item action" @click=${l}></td>`;let h=String(vr(t.label,o,a)??""),d=vr(t.icon,o,a)||"",p=vr(t.variant,o,a)||"primary",m=d?t.display??"icon":"label",y=vr(t.disabled,o,a),_=typeof y=="string"?y:"",A=c`<hmwc-button
      class="data-table__action"
      sm
      label=${h}
      icon=${m==="icon"?d:""}
      prefix=${m==="both"?d:""}
      ?disabled=${!!y}
      disabled-reason=${_}
      ?primary=${p==="primary"}
      ?alt=${p==="alt"}
      ?success=${p==="success"}
      ?warning=${p==="warning"}
      ?neutral=${p==="neutral"}
      ?danger=${p==="danger"}
      @hmwc-click=${()=>this.emit("hmwc-action",{detail:{value:e,action:t.field,source:r,index:i}})}></hmwc-button>`;return c`<td class="data-table__item action" @click=${l}>
      <span class="data-table__action-box"
        >${m==="icon"&&!_?c`<hmwc-tooltip label=${h} placement="top">${A}</hmwc-tooltip>`:A}</span
      >
    </td>`}_headKeyDown(e,t){e.target!==e.currentTarget||e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.sortByField(t))}_rowKeyDown(e,t){e.target!==e.currentTarget||e.key!=="Enter"||(e.preventDefault(),this.emit("hmwc-click",{detail:{value:t,...this.getRowSource(t)}}))}_renderRow(e,t){let r=this._fillerRows.has(e),i=!r&&this.isCurrentRow(e),o=!r&&!this.isLoading;return c`
      <tr
        part=${i?"row current":"row"}
        class=${v({"data-table__table-row":!0,filler:r,current:i})}
        role="row"
        aria-current=${b(i?"true":void 0)}
        tabindex=${b(o?"0":void 0)}
        @keydown=${o?a=>this._rowKeyDown(a,e):void 0}
        @mousedown=${this._rowPointerDown}
        @click=${a=>!r&&!this._wasDrag(a)&&this.emit("hmwc-click",{detail:{value:e,...this.getRowSource(e)}})}>
        ${this._renderSelectionRowCell(e,t)} ${this.fieldKeys.map(a=>this._renderDataCell(e,a))}
        ${this.getActions().map(a=>r?c`<td class="data-table__item action"></td>`:this._renderActionCell(e,a))}
      </tr>
    `}isCurrentRow(e){if(this.current==null)return!1;let{source:t,index:r}=this.getRowSource(e);return typeof this.current=="number"?r===this.current:t===this.current}_renderBody(){return c`
      <tbody part="data" class="data-table__body" @mouseover=${this.titleCutOffCell}>
        ${!this.isLoading&&this.results.length===0?this._renderEmptyRow():this.entries.map((e,t)=>this._renderRow(e,t))}
      </tbody>
    `}_renderFooter(){if(!this.isPaged||this.fitsOnePage)return"";let e=this._count;if(!this.isLoading&&e===0)return"";let t=!this.isLoading&&this.results.length===0;return c`
      <div class="data-table__footer">
        <div part="entries" class="data-table__info">
          ${!t&&(e!==0||this.isSkeletonField(this.fieldKeys[0]))?`Showing ${di((this.page-1)*this.amount+1)} to ${di(e<this.page*this.amount?e||this.amount:this.page*this.entries.length)} of ${di(e)} entries.`:"No entries found."}
        </div>

        <hmwc-pagination
          sm
          part="pagination"
          class="data-table__pagination"
          primary
          page=${this.page}
          count=${Math.ceil(e/this.amount)||1}
          @hmwc-change=${r=>this.handlePage(r.detail.page)}
          @hmwc-click=${r=>r.stopImmediatePropagation()}
          siblings=${this.sm?0:1}></hmwc-pagination>
      </div>
    `}_renderToolbar(){let e=this.searchable&&(!this._isNoData||!!this.filter);return!this.caption&&!e?"":c`
      <div part="toolbar" class="data-table__toolbar">
        ${this.caption?c`<p part="caption" class="data-table__caption">${this.caption}</p>`:""}
        ${e?c`<hmwc-input
              part="search"
              class="data-table__search"
              sm
              clearable
              prefix="search"
              label=${this.searchLabel??""}
              placeholder=${this.searchPlaceholder}
              .value=${tt(this.filter)}
              @hmwc-input=${this.handleSearch}></hmwc-input>`:""}
      </div>
    `}_renderError(){return c`
      <div part="error" class="data-table__error" role="alert">
        <slot name="error"><hmwc-icon src="exclamation-triangle" danger></hmwc-icon><span>${this.error}</span></slot>
      </div>
    `}render(){return this.error&&!this.loading?c`<div part="base" class=${v(this._renderBaseClasses())}>${this._renderToolbar()} ${this._renderError()}</div>`:c`
      <div part="base" class=${v(this._renderBaseClasses())}>
        ${this._renderToolbar()}
        <div part="scroll" class=${v({"data-table__scroll":!0,scrollable:this._scrollable&&!this._isNoData})}>
          <table part="table" class="data-table__table" rules="none">
            ${this._renderHeader()} ${this._renderBody()}
          </table>
          ${this._footerInScroll?this._renderFooter():""}
        </div>
        ${this._footerInScroll?"":this._renderFooter()}
      </div>
    `}};S.styles=[mt,ta];S.dependencies=[P,$,C,k,oe,q,we,O,R,se,K];S.slots=["empty","error"];S.MAX_COLUMN_FLOOR=280;S.RESIZE_STEP=16;E([w()],S.prototype,"selections",void 0);E([w()],S.prototype,"_filterableFields",void 0);E([w()],S.prototype,"_columnFilters",void 0);E([w()],S.prototype,"fieldKeys",void 0);E([w()],S.prototype,"_normalizedFields",void 0);E([w()],S.prototype,"ready",void 0);E([w()],S.prototype,"results",void 0);E([w()],S.prototype,"entries",void 0);E([w()],S.prototype,"_awaiting",void 0);E([n({type:Array})],S.prototype,"data",null);E([n({type:Object})],S.prototype,"fields",void 0);E([n({type:Number,reflect:!0})],S.prototype,"page",void 0);E([n({type:Number,reflect:!0})],S.prototype,"amount",void 0);E([n({type:String})],S.prototype,"label",void 0);E([n({type:Object})],S.prototype,"sizing",void 0);E([n({type:String})],S.prototype,"filter",void 0);E([n({type:String})],S.prototype,"sort",void 0);E([n({type:String})],S.prototype,"order",void 0);E([n({type:String,attribute:"date-style"})],S.prototype,"dateStyle",void 0);E([n({type:Boolean})],S.prototype,"pagination",void 0);E([n({type:Boolean,reflect:!0})],S.prototype,"scrollable",void 0);E([n({type:Boolean,reflect:!0,attribute:"fixed-height"})],S.prototype,"fixedHeight",void 0);E([n({type:Boolean,reflect:!0})],S.prototype,"selectable",void 0);E([n({type:Boolean,reflect:!0})],S.prototype,"sm",void 0);E([n({type:Boolean,reflect:!0})],S.prototype,"md",void 0);E([n({type:Boolean,reflect:!0})],S.prototype,"lg",void 0);E([n({type:Boolean,reflect:!0})],S.prototype,"fluid",void 0);E([n({type:Boolean,reflect:!0})],S.prototype,"loading",void 0);E([n({type:Object})],S.prototype,"action",void 0);E([n({type:Array})],S.prototype,"actions",void 0);E([n({type:Boolean,reflect:!0})],S.prototype,"cache",void 0);E([n({type:Boolean,reflect:!0})],S.prototype,"primary",void 0);E([n({type:Boolean,reflect:!0})],S.prototype,"alt",void 0);E([n({type:Boolean,reflect:!0})],S.prototype,"success",void 0);E([n({type:Boolean,reflect:!0})],S.prototype,"neutral",void 0);E([n({type:Boolean,reflect:!0})],S.prototype,"warning",void 0);E([n({type:Boolean,reflect:!0})],S.prototype,"danger",void 0);E([n({type:Boolean,reflect:!0,attribute:"no-sort"})],S.prototype,"noSort",void 0);E([n({type:Boolean,reflect:!0})],S.prototype,"searchable",void 0);E([n({type:String,attribute:"search-label"})],S.prototype,"searchLabel",void 0);E([n({type:String,attribute:"search-placeholder"})],S.prototype,"searchPlaceholder",void 0);E([n({type:String})],S.prototype,"caption",void 0);E([n({type:String})],S.prototype,"error",void 0);E([n({attribute:!1})],S.prototype,"selected",void 0);E([n({converter:{fromAttribute:s=>s==null||s===""?void 0:Number(s)}})],S.prototype,"current",void 0);E([n({type:Boolean,reflect:!0})],S.prototype,"server",void 0);E([n({type:Number})],S.prototype,"total",void 0);E([u(["data","filter","order","fields","server"])],S.prototype,"dataUpdate",void 0);E([u("selected")],S.prototype,"selectedUpdate",void 0);E([u("error")],S.prototype,"errorUpdate",void 0);E([u(["amount","page","loading","pagination","scrollable","fixedHeight","total","_awaiting"],{waitUntilFirstUpdate:!0})],S.prototype,"entriesUpdate",void 0);E([u("loading")],S.prototype,"loadingUpdate",void 0);E([u("sizing",{waitUntilFirstUpdate:!0})],S.prototype,"sizingUpdate",void 0);E([w()],S.prototype,"_footerInScroll",void 0);E([w()],S.prototype,"_scrollable",void 0);S.define("hmwc-data-table",S);var aa=(s,e,t)=>{let r=new Map;for(let i=e;i<=t;i++)r.set(s[i],i);return r},sa=Ot(class extends xt{constructor(s){if(super(s),s.type!==nt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,e,t){let r;t===void 0?t=e:e!==void 0&&(r=e);let i=[],o=[],a=0;for(let l of s)i[a]=r?r(l,a):a,o[a]=t(l,a),a++;return{values:o,keys:i}}render(s,e,t){return this.dt(s,e,t).values}update(s,[e,t,r]){let i=co(s),{values:o,keys:a}=this.dt(e,t,r);if(!Array.isArray(i))return this.ut=a,o;let l=this.ut??=[],h=[],d,p,m=0,y=i.length-1,_=0,A=o.length-1;for(;m<=y&&_<=A;)if(i[m]===null)m++;else if(i[y]===null)y--;else if(l[m]===a[_])h[_]=Rt(i[m],o[_]),m++,_++;else if(l[y]===a[A])h[A]=Rt(i[y],o[A]),y--,A--;else if(l[m]===a[A])h[A]=Rt(i[m],o[A]),Xt(s,h[A+1],i[m]),m++,A--;else if(l[y]===a[_])h[_]=Rt(i[y],o[_]),Xt(s,i[m],i[y]),y--,_++;else if(d===void 0&&(d=aa(a,_,A),p=aa(l,m,y)),d.has(l[m]))if(d.has(l[y])){let N=p.get(a[_]),Ze=N!==void 0?i[N]:null;if(Ze===null){let D=Xt(s,i[m]);Rt(D,o[_]),h[_]=D}else h[_]=Rt(Ze,o[_]),Xt(s,i[m],Ze),i[N]=null;_++}else Ir(i[y]),y--;else Ir(i[m]),m++;for(;_<=A;){let N=Xt(s,h[A+1]);Rt(N,o[_]),h[_++]=N}for(;m<=y;){let N=i[m++];N!==null&&Ir(N)}return this.ut=a,Pr(s,h),ze}});var mi=f`
  .term {
    overflow-wrap: anywhere;
  }

  .help {
    vertical-align: middle;
    margin-block: calc(-1 * var(--hmwc-spacing-2x-small));
    margin-inline-start: var(--hmwc-spacing-3x-small);
  }

  .help::part(base) {
    width: 1.5em;
    height: 1.5em;
    padding: 0;
  }
`,na=f`
  :host {
    --description-label-color: var(--hmwc-color-neutral-600);
    --description-value-color: var(--hmwc-color-neutral-900);
    --description-value-weight: var(--hmwc-font-weight-semibold);
    --description-empty-color: var(--hmwc-color-neutral-600);
    --description-skeleton-width: 8em;
    display: block;
    min-width: 0;
    line-height: var(--hmwc-line-height-normal);
  }

  /* Standalone: a one-entry list, label beside value. */
  .description {
    margin: 0;
  }

  .group {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: var(--hmwc-spacing-3x-small) var(--hmwc-spacing-medium);
  }

  .label {
    color: var(--description-label-color);
    font-weight: var(--hmwc-font-weight-normal);
  }

  .definition {
    flex: 1 1 calc(12 * var(--hmwc-rem, 1rem));
    min-width: 0;
    margin: 0;
  }

  /* The value, its empty, loading and error states, and the copy button on one line. */
  .value {
    display: flex;
    align-items: center;
    gap: var(--hmwc-spacing-2x-small);
    min-width: 0;
    color: var(--description-value-color);
    font-weight: var(--description-value-weight);
    font-variant-numeric: tabular-nums;
  }

  /* Lists set the white-space through "--description-white-space": tiles use nowrap to truncate. */
  .text {
    min-width: 0;
    overflow: hidden;
    overflow-wrap: anywhere;
    text-overflow: ellipsis;
    white-space: var(--description-white-space, pre-line);
  }

  .slot {
    display: contents;
  }

  .slot--hidden {
    display: none;
  }

  .empty {
    color: var(--description-empty-color);
    font-weight: var(--hmwc-font-weight-normal);
  }

  /* Data that couldn't be loaded: amber, so it isn't read as "none". */
  .error {
    display: inline-flex;
    align-items: center;
    gap: var(--hmwc-spacing-2x-small);
    color: var(--hmwc-color-warning-700);
    font-weight: var(--hmwc-font-weight-normal);
  }

  .skeleton {
    width: var(--description-skeleton-width);
    max-width: 100%;
    height: 0.9em;
  }

  /* Sized to the text it sits next to, and overhanging so every value sits at the same height. */
  .copy {
    flex: none;
    margin-block: calc(-1 * var(--hmwc-spacing-x-small));
  }

  .copy::part(base) {
    width: 1.75em;
    height: 1.75em;
    padding: 0;
    cursor: copy;
  }

  .copy--done {
    --button-color: var(--hmwc-color-success-600);
  }

  /* Copy buttons appear when you point at the value they copy; always shown on touch and while focused. */
  @media (hover: hover) {
    .copy:not(.copy--done) {
      opacity: 0;
      transition: opacity var(--hmwc-transition-fast) var(--hmwc-easing-standard);
    }

    :host(:hover) .copy,
    .copy:focus-within {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .copy {
      transition: none;
    }
  }

  .status {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  ${mi}
`;var zt=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},Hs=1500,ue=class s extends g{constructor(){super(...arguments),this._copyResult=null}connectedCallback(){super.connectedCallback(),this.requestUpdate()}updated(e){super.updated(e),(e.has("label")||e.has("help"))&&this._list()?.requestUpdate?.()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._copyTimer)}async copy(){let e=this._copySource();this._copyResult&&(this._copyResult=null,await this.updateComplete);let t;try{await navigator.clipboard.writeText(e),t=!0}catch{t=this._copyWithSelection(e)}return this._copyResult=t?"copied":"failed",clearTimeout(this._copyTimer),this._copyTimer=window.setTimeout(()=>this._copyResult=null,Hs),t}static renderTerm(e,t){let r=t?c`<hmwc-button part="help" class="help" basic circle sm icon="info-circle" .accessibleLabel=${t} tooltip=${t}></hmwc-button>`:x;return c`<span class="term">${e??""}</span>${r}`}_list(){let e=this.parentElement;return e?.tagName==="HMWC-DESCRIPTION-LIST"?e:null}_embedded(){return!!this._list()||this.parentElement?.tagName==="DD"}_isLoading(){let e=this._list();return!!(this.loading||e?.loading||e&&!("loading"in e)&&e.hasAttribute("loading"))}_hasValue(){return this.value!=null&&String(this.value).trim()!==""}_hasSlotted(){return this.controllers.slot.test()}_copySource(){return this.copyText?this.copyText:this._hasValue()?String(this.value):(this.textContent||"").trim()}_copyWithSelection(e){let t=this.shadowRoot??document.body,r=document.createElement("textarea");r.value=e,r.setAttribute("readonly",""),r.setAttribute("aria-hidden","true"),r.tabIndex=-1,Object.assign(r.style,{position:"fixed",insetBlockStart:"0",opacity:"0",pointerEvents:"none"}),t.appendChild(r),r.focus({preventScroll:!0}),r.select();let i=!1;try{i=document.execCommand("copy")}catch{i=!1}return r.remove(),this.shadowRoot?.querySelector('[part~="copy"]')?.focus({preventScroll:!0}),i}_handleCopy(){this.copy()}_renderState(){if(this._isLoading())return c`<hmwc-skeleton part="skeleton" class="skeleton"></hmwc-skeleton>`;if(this.error!=null)return c`<span part="error" class="error"
        ><hmwc-icon src="exclamation-triangle" warning label="Warning"></hmwc-icon>${this.error||"Couldn\u2019t be loaded"}</span
      >`;if(this._hasValue())return c`<span class="text">${this.value}</span>`;if(this._hasSlotted())return x;let e=this.emptyText??this._list()?.emptyText??"Not recorded";return c`<span part="empty" class="empty">${e}</span>`}_renderCopy(){if(!this.copyable||this._isLoading()||this.error!=null)return x;if(!this._hasValue()&&!this._hasSlotted()&&!this.copyText)return x;let e=this.label?`Copy ${this.label}`:"Copy",t=this._copyResult==="copied"?"check2":this._copyResult==="failed"?"x-lg":"copy",r=this._copyResult==="copied"?"Copied":this._copyResult==="failed"?"Couldn\u2019t copy":e;return c`<hmwc-button
      part="copy"
      class=${v({copy:!0,"copy--done":!!this._copyResult})}
      basic
      circle
      sm
      icon=${t}
      .accessibleLabel=${e}
      tooltip=${r}
      @hmwc-click=${this._handleCopy}></hmwc-button>`}_renderValue(){let e=this._isLoading(),t=this._hasValue()||e||this.error!=null,r=this._copyResult==="copied"?"Copied":this._copyResult==="failed"?"Couldn\u2019t copy":"";return c`
      <span part="value" class="value" aria-busy=${e?"true":"false"}>
        ${this._renderState()}
        <slot class=${v({slot:!0,"slot--hidden":t})}></slot>
        ${this._renderCopy()}
      </span>
      ${this.copyable?c`<span class="status" role="status">${r}</span>`:x}
    `}render(){return this._embedded()?this._renderValue():c`
      <dl part="base" class="description">
        <div class="group">
          <dt part="label" class="label">${s.renderTerm(this.label,this.help)}</dt>
          <dd class="definition">${this._renderValue()}</dd>
        </div>
      </dl>
    `}};ue.styles=na;ue.dependencies=[k,$,oe];ue.slots=["[default]"];zt([w()],ue.prototype,"_copyResult",void 0);zt([n({type:Boolean,reflect:!0})],ue.prototype,"copyable",void 0);zt([n({type:Boolean,reflect:!0})],ue.prototype,"loading",void 0);zt([n({type:String,reflect:!0})],ue.prototype,"label",void 0);zt([n({type:String})],ue.prototype,"value",void 0);zt([n({type:String,attribute:"empty-text"})],ue.prototype,"emptyText",void 0);zt([n({type:String,reflect:!0})],ue.prototype,"help",void 0);zt([n({type:String,attribute:"copy-text"})],ue.prototype,"copyText",void 0);zt([n({type:String})],ue.prototype,"error",void 0);ue.define("hmwc-description",ue);var la=f`
  :host {
    --description-list-label-width: fit-content(40%);
    --description-list-label-color: var(--hmwc-color-neutral-600);
    --description-list-tile-width: calc(9.5 * var(--hmwc-rem, 1rem));
    --description-list-row-gap: var(--hmwc-spacing-x-small);
    --description-list-column-gap: var(--hmwc-spacing-medium);
    display: block;
    container-type: inline-size;
    line-height: var(--hmwc-line-height-normal);
  }

  .list {
    margin: 0;
    padding: 0;
  }

  .sm {
    font-size: var(--hmwc-font-size-small);
  }

  .label,
  .definition {
    min-width: 0;
    margin: 0;
  }

  .label {
    color: var(--description-list-label-color);
    font-weight: var(--hmwc-font-weight-normal);
  }

  /* Columns: label beside value, every label in one column. */
  .columns {
    display: grid;
    grid-template-columns: var(--description-list-label-width) minmax(0, 1fr);
    gap: var(--description-list-row-gap) var(--description-list-column-gap);
    align-items: baseline;
  }

  .columns .group {
    display: contents;
  }

  /* Too narrow for two columns: the label goes over its value. */
  @container (max-width: 30rem) {
    .columns {
      grid-template-columns: minmax(0, 1fr);
      row-gap: 0;
    }

    .columns .definition {
      margin-block-end: var(--description-list-row-gap);
    }
  }

  /* Stacked: label over value, one entry per row (questions and answers). */
  .stacked {
    display: flex;
    flex-direction: column;
    gap: var(--hmwc-spacing-small);
  }

  .stacked .group {
    display: flex;
    flex-direction: column;
    gap: var(--hmwc-spacing-3x-small);
  }

  /* Tiles: label over value, in columns that wrap whole at any width. */
  .tiles {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(var(--description-list-tile-width), 100%), 1fr));
    gap: var(--hmwc-spacing-small) var(--hmwc-spacing-large);
  }

  .tiles .group {
    --description-white-space: nowrap;
    display: flex;
    flex-direction: column;
    gap: var(--hmwc-spacing-3x-small);
    min-width: 0;
  }

  .tiles .label {
    overflow: hidden;
    font-size: var(--hmwc-font-size-small);
    line-height: var(--hmwc-line-height-dense);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ${mi}
`;var tr=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},qs=["hidden","label","help"],Ue=class extends g{constructor(){super(...arguments),this.layout="columns",this.items=[]}connectedCallback(){super.connectedCallback(),this._observer=new MutationObserver(e=>{e.some(r=>r.type==="childList"?r.target===this:r.target.parentNode===this)&&this.requestUpdate()}),this._observer.observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:qs})}updated(e){super.updated(e),this._assignSlots(),(e.has("loading")||e.has("emptyText"))&&this._entries().forEach(t=>t.requestUpdate?.())}disconnectedCallback(){super.disconnectedCallback(),this._observer?.disconnect(),this._observer=void 0}_entries(){return Array.from(this.children).filter(e=>e.tagName==="HMWC-DESCRIPTION"&&!e.hidden)}_assignSlots(){let e=Array.from(this.shadowRoot?.querySelectorAll("slot[data-entry]")??[]),t=this.items.length?[]:this._entries();e.forEach((r,i)=>t[i]?r.assign(t[i]):r.assign())}_read(e,t){return e[t]??e.getAttribute(t)??void 0}_renderEntries(){return sa(this._entries(),e=>e,e=>c`
        <div part="item" class="group">
          <dt part="label" class="label">${ue.renderTerm(this._read(e,"label"),this._read(e,"help"))}</dt>
          <dd part="definition" class="definition"><slot data-entry></slot></dd>
        </div>
      `)}_renderItems(){return this.items.map(e=>c`
        <div part="item" class="group">
          <dt part="label" class="label">${ue.renderTerm(e.label,e.help)}</dt>
          <dd part="definition" class="definition">
            <hmwc-description
              label=${e.label}
              .value=${e.value}
              .emptyText=${e.emptyText??this.emptyText}
              .copyText=${e.copyText}
              .error=${e.error}
              ?copyable=${e.copyable}
              ?loading=${e.loading||this.loading}></hmwc-description>
          </dd>
        </div>
      `)}render(){let e=["columns","stacked","tiles"].includes(this.layout)?this.layout:"columns",t=v({list:!0,[e]:!0,sm:!!this.sm}),r=Zt({"--description-list-label-width":this.labelWidth});return c`
      <dl part="base" class=${t} style=${r} aria-busy=${this.loading?"true":"false"}>
        ${this.items.length?this._renderItems():this._renderEntries()}
      </dl>
    `}};Ue.styles=la;Ue.dependencies=[ue];Ue.slots=["[default]"];Ue.shadowRootOptions={...g.shadowRootOptions,slotAssignment:"manual"};tr([n({type:Boolean,reflect:!0})],Ue.prototype,"loading",void 0);tr([n({type:Boolean,reflect:!0})],Ue.prototype,"sm",void 0);tr([n({type:String,reflect:!0})],Ue.prototype,"layout",void 0);tr([n({type:String,attribute:"label-width"})],Ue.prototype,"labelWidth",void 0);tr([n({type:String,attribute:"empty-text"})],Ue.prototype,"emptyText",void 0);tr([n({type:Array})],Ue.prototype,"items",void 0);Ue.define("hmwc-description-list",Ue);var ca=f`
  :host {
    --empty-state-color: var(--hmwc-color-neutral-700);
    --empty-state-label-color: var(--hmwc-color-neutral-800);
    --empty-state-icon-color: var(--hmwc-color-neutral-400);
    --empty-state-icon-size: var(--hmwc-font-size-x-large);
    --empty-state-border-color: var(--hmwc-color-neutral-300);
    display: block;
  }

  /* The small variant's quieter colours are defaults, so a page can still set its own. */
  :host([sm]) {
    --empty-state-color: var(--hmwc-color-neutral-600);
    --empty-state-label-color: var(--hmwc-color-neutral-700);
  }

  .empty-state {
    display: flex;
    align-items: flex-start;
    gap: var(--hmwc-spacing-medium);
    color: var(--empty-state-color);
    line-height: var(--hmwc-line-height-normal);
  }

  .icon {
    --icon-color: var(--empty-state-icon-color);
    --icon-size: var(--empty-state-icon-size);
    flex: none;
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: var(--hmwc-spacing-2x-small);
    min-width: 0;
  }

  .label {
    --text-color: var(--empty-state-label-color);
  }

  .content {
    overflow-wrap: anywhere;
  }

  .content ::slotted(:is(p, ol, ul)) {
    margin: 0;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--hmwc-spacing-x-small);
    margin-block-start: var(--hmwc-spacing-x-small);
  }

  .actions--empty {
    display: none;
  }

  /* A placeholder box where content will appear. */
  .dashed {
    padding: var(--hmwc-spacing-medium);
    border: var(--hmwc-panel-border-width) dashed var(--empty-state-border-color);
    border-radius: var(--hmwc-border-radius-large);
  }

  /* One muted line inside a section: icon and text side by side. */
  .sm {
    align-items: center;
    gap: var(--hmwc-spacing-x-small);
    font-size: var(--hmwc-font-size-small);

    .icon {
      --icon-size: var(--hmwc-font-size-medium);
    }

    .body {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 0 var(--hmwc-spacing-x-small);
    }

    .label {
      --text-size: var(--hmwc-font-size-small);
    }

    .actions {
      margin-block-start: 0;
    }
  }

  .sm.dashed {
    padding: var(--hmwc-spacing-x-small) var(--hmwc-spacing-small);
  }
`;var jr=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},Ge=class extends g{render(){let e=this.controllers.slot.test("actions"),t=v({"empty-state":!0,dashed:!!this.dashed,sm:!!this.sm});return c`
      <div part="base" class=${t}>
        ${this.icon?c`<hmwc-icon part="icon" class="icon" src=${this.icon}></hmwc-icon>`:x}
        <div part="body" class="body">
          ${this.label?c`<hmwc-text part="label" class="label" semibold wrap>${this.label}</hmwc-text>`:x}
          <div class="content"><slot></slot></div>
          <div part="actions" class=${v({actions:!0,"actions--empty":!e})}><slot name="actions"></slot></div>
        </div>
      </div>
    `}};Ge.styles=ca;Ge.dependencies=[$,z];Ge.slots=["[default]","actions"];jr([n({type:Boolean,reflect:!0})],Ge.prototype,"dashed",void 0);jr([n({type:Boolean,reflect:!0})],Ge.prototype,"sm",void 0);jr([n({type:String,reflect:!0})],Ge.prototype,"icon",void 0);jr([n({type:String})],Ge.prototype,"label",void 0);Ge.define("hmwc-empty-state",Ge);var ha=f`
  :host {
    --feed-item-color: var(--hmwc-accent-color, var(--hmwc-color-primary-600));
    --feed-item-label-color: var(--hmwc-color-neutral-900);
    --feed-item-muted-color: var(--hmwc-color-neutral-600);
    --feed-item-hover-background: var(--hmwc-color-neutral-50);
    --feed-item-reply-border-color: var(--hmwc-color-neutral-200);
    display: block;
    min-width: 0;
  }

  .feed-item {
    position: relative;
    isolation: isolate;
    display: flex;
    align-items: flex-start;
    gap: var(--hmwc-spacing-small);
    padding-block: var(--hmwc-spacing-2x-small);
    line-height: var(--hmwc-line-height-normal);
  }

  /* Status variants colour the marker; without one it takes the inherited accent. */
  .primary {
    --feed-item-color: var(--hmwc-color-primary-500);
  }

  .success {
    --feed-item-color: var(--hmwc-color-success-600);
  }

  .neutral {
    --feed-item-color: var(--hmwc-color-neutral-400);
  }

  .warning {
    --feed-item-color: var(--hmwc-color-warning-500);
  }

  .danger {
    --feed-item-color: var(--hmwc-color-danger-600);
  }

  .loading {
    --feed-item-color: var(--hmwc-color-neutral-200);
  }

  .icon {
    --icon-color: var(--feed-item-color);
    flex: none;
    margin-block-start: var(--hmwc-spacing-3x-small);
  }

  /* With a status and no icon: a level stripe the height of the entry. */
  .stripe {
    flex: none;
    align-self: stretch;
    width: var(--hmwc-spacing-2x-small);
    border-radius: var(--hmwc-border-radius-pill);
    background: var(--feed-item-color);
  }

  .body {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: var(--hmwc-spacing-3x-small);
    min-width: 0;
  }

  .label {
    color: var(--feed-item-label-color);
    font-weight: var(--hmwc-font-weight-semibold);
    line-height: var(--hmwc-line-height-dense);
    overflow-wrap: anywhere;
  }

  .meta,
  .time {
    color: var(--feed-item-muted-color);
    font-size: var(--hmwc-font-size-small);
  }

  .meta {
    overflow-wrap: anywhere;
  }

  .time {
    flex: none;
    white-space: nowrap;
  }

  .content {
    overflow-wrap: anywhere;
    white-space: pre-line;
  }

  .content--empty,
  .actions--empty {
    display: none;
  }

  .actions {
    position: relative;
    z-index: 1;
    display: flex;
    flex: none;
    gap: var(--hmwc-spacing-3x-small);
    margin-block: calc(-1 * var(--hmwc-spacing-2x-small));
  }

  .skeleton--label {
    width: 70%;
    height: 0.9em;
  }

  .skeleton--meta {
    width: 40%;
    height: 0.75em;
  }

  /* A linked entry: the link covers the whole entry; the hover tint sits behind the content. */
  .link {
    color: inherit;
    text-decoration: none;
    outline: none;
  }

  .link::after {
    content: '';
    position: absolute;
    inset: 0 calc(-1 * var(--hmwc-spacing-x-small));
    border-radius: var(--hmwc-border-radius-medium);
  }

  .link:focus-visible::after {
    outline: var(--hmwc-focus-ring);
    outline-offset: calc(-1 * var(--hmwc-focus-ring-width));
  }

  .is-link::before {
    content: '';
    position: absolute;
    inset: 0 calc(-1 * var(--hmwc-spacing-x-small));
    z-index: -1;
    border-radius: var(--hmwc-border-radius-medium);
    transition: background-color var(--hmwc-transition-fast) var(--hmwc-easing-standard);
  }

  .is-link {
    cursor: pointer;
  }

  .is-link:hover::before,
  .is-link:focus-within::before {
    background: var(--feed-item-hover-background);
  }

  .is-link:hover .link {
    text-decoration: underline;
  }

  /* A reply: indented on a rule under the entry it answers. */
  :host([reply]) {
    margin-inline-start: var(--hmwc-spacing-x-small);
    padding-inline-start: var(--hmwc-spacing-medium);
    border-inline-start: calc(2 * var(--hmwc-panel-border-width)) solid var(--feed-item-reply-border-color);
  }

  .sm {
    gap: var(--hmwc-spacing-x-small);
    font-size: var(--hmwc-font-size-small);

    .meta,
    .time {
      font-size: var(--hmwc-font-size-x-small);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .is-link::before {
      transition: none;
    }
  }
`;var Ye=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},Ws=24*60*60*1e3,Vs=30,Ks=/^\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:?\d{2})?$/i,Gs=/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?\s*([AP]M)?)?$/i;function Ys(s){if(s==null||s==="")return null;if(s instanceof Date)return isNaN(s.getTime())?null:{date:s,hasTime:!0};let e=String(s).trim(),t=(l,h)=>isNaN(l.getTime())?null:{date:l,hasTime:h},r=(l,h,d,p=0,m=0,y=0,_=!1)=>{let A=new Date(l,h-1,d,p,m,y);return A.getMonth()===h-1&&A.getDate()===d?t(A,_):null},i=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(i)return r(+i[1],+i[2],+i[3]);let o=/^\/Date\((-?\d+)(?:[+-]\d{4})?\)\/$/.exec(e);if(o)return t(new Date(+o[1]),!0);if(Ks.test(e))return t(new Date(e.replace(" ","T")),!0);let a=Gs.exec(e);if(a){let[,l,h,d,p,m,y,_]=a,A=p?+p%12:0;return p&&!_?A=+p:_?.toUpperCase()==="PM"&&(A+=12),r(+d,+l,+h,A,m?+m:0,y?+y:0,!!p)}return null}function Xs(){let s=document.documentElement.lang;if(s)try{return Intl.getCanonicalLocales(s)[0]}catch{return}}function da(s,e,t=new Date,r){let{date:i,hasTime:o}=s,a=i.toLocaleDateString(r,{month:"short",day:"numeric",year:"numeric"}),l=i.toLocaleTimeString(r,{hour:"numeric",minute:"2-digit"});if(e==="datetime")return o?`${a}, ${l}`:a;if(e==="date")return a;let h=p=>new Date(p.getFullYear(),p.getMonth(),p.getDate()).getTime(),d=Math.round((h(i)-h(t))/Ws);return Math.abs(d)>=Vs?a:new Intl.RelativeTimeFormat(r,{numeric:"auto"}).format(d,"day")}var le=class extends g{constructor(){super(...arguments),this.timeStyle="relative",this._ownRole=!1}connectedCallback(){super.connectedCallback(),this._applyRole()}updated(e){super.updated(e),e.has("reply")&&this._applyRole()}_applyRole(){let e=this.parentElement?.tagName==="HMWC-FEED";e&&(this._ownRole||!this.hasAttribute("role"))?(this.setAttribute("role","listitem"),this._ownRole=!0):!e&&this._ownRole&&(this.removeAttribute("role"),this._ownRole=!1),this._ownRole&&this.reply?this.setAttribute("aria-level","2"):this._ownRole&&this.removeAttribute("aria-level")}_variant(){for(let e of["primary","success","neutral","warning","danger"])if(this[e])return e;return null}_renderMarker(e){return this.icon?c`<hmwc-icon part="marker" class="marker icon" src=${this.icon}></hmwc-icon>`:e||this.loading?c`<span part="marker" class="marker stripe"></span>`:x}_renderTime(){if(!this.time)return x;let e=Ys(this.time);if(!e)return c`<span part="time" class="time">${this.time}</span>`;let t=Xs(),r=e.hasTime?e.date.toISOString():this._dateOnlyIso(e.date),i=da(e,"datetime",void 0,t);return c`<time part="time" class="time" datetime=${r} title=${i}>${da(e,this.timeStyle,void 0,t)}</time>`}_dateOnlyIso(e){let t=r=>String(r).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}_renderLabel(){return this.label?this.href?c`<a
        part="label"
        class="label link"
        href=${this.href}
        target=${b(this.target)}
        rel=${b(this.target==="_blank"?"noopener":void 0)}
        >${this.label}</a
      >`:c`<span part="label" class="label">${this.label}</span>`:x}render(){let e=this._variant(),t=this.controllers.slot.test(),r=this.controllers.slot.test("actions"),i=v({"feed-item":!0,[e??"accent"]:!0,"is-link":!!this.href&&!!this.label&&!this.loading,loading:!!this.loading,reply:!!this.reply,sm:!!this.sm});return c`
      <div part="base" class=${i} aria-busy=${this.loading?"true":"false"}>
        ${this._renderMarker(e)}
        <div part="body" class="body">
          ${this.loading?c`<hmwc-skeleton class="skeleton skeleton--label"></hmwc-skeleton><hmwc-skeleton class="skeleton skeleton--meta"></hmwc-skeleton>`:c`${this._renderLabel()} ${this.meta?c`<span part="meta" class="meta">${this.meta}</span>`:x}`}
          <div part="content" class=${v({content:!0,"content--empty":!t||!!this.loading})}><slot></slot></div>
        </div>
        ${this.loading?x:this._renderTime()}
        <div part="actions" class=${v({actions:!0,"actions--empty":!r||!!this.loading})}><slot name="actions"></slot></div>
      </div>
    `}};le.styles=ha;le.dependencies=[$,oe];le.slots=["[default]","actions"];Ye([n({type:Boolean,reflect:!0})],le.prototype,"loading",void 0);Ye([n({type:Boolean,reflect:!0})],le.prototype,"primary",void 0);Ye([n({type:Boolean,reflect:!0})],le.prototype,"success",void 0);Ye([n({type:Boolean,reflect:!0})],le.prototype,"neutral",void 0);Ye([n({type:Boolean,reflect:!0})],le.prototype,"warning",void 0);Ye([n({type:Boolean,reflect:!0})],le.prototype,"danger",void 0);Ye([n({type:Boolean,reflect:!0})],le.prototype,"sm",void 0);Ye([n({type:Boolean,reflect:!0})],le.prototype,"reply",void 0);Ye([n({type:String,reflect:!0})],le.prototype,"icon",void 0);Ye([n({type:String})],le.prototype,"label",void 0);Ye([n({type:String})],le.prototype,"meta",void 0);Ye([n({type:String})],le.prototype,"time",void 0);Ye([n({type:String,attribute:"time-style"})],le.prototype,"timeStyle",void 0);Ye([n({type:String})],le.prototype,"href",void 0);Ye([n({type:String})],le.prototype,"target",void 0);le.define("hmwc-feed-item",le);var pa=f`
  :host {
    --feed-gap: var(--hmwc-spacing-x-small);
    --feed-divider-color: var(--hmwc-color-neutral-200);
    --feed-max-height: none;
    display: block;
  }

  /* Room either side for a linked entry's hover tint, which overhangs the content. */
  .feed {
    margin-inline: calc(-1 * var(--hmwc-spacing-x-small));
    padding-inline: var(--hmwc-spacing-x-small);
    max-height: var(--feed-max-height);
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--hmwc-color-neutral-300) transparent;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: var(--feed-gap);
  }

  .list--hidden,
  .empty--hidden {
    display: none;
  }

  /* Divided: a rule above every entry but the first, never between an entry and its reply. */
  .divided .list {
    --feed-gap: var(--hmwc-spacing-small);
  }

  .divided ::slotted(hmwc-feed-item:not(:first-child):not([reply])) {
    padding-block-start: var(--hmwc-spacing-small);
    border-block-start: var(--hmwc-panel-border-width) solid var(--feed-divider-color);
  }

  .sm {
    --feed-gap: var(--hmwc-spacing-2x-small);
    font-size: var(--hmwc-font-size-small);
  }

  .loading {
    display: flex;
    flex-direction: column;
    gap: var(--feed-gap);
  }

  .loading__row {
    display: flex;
    align-items: flex-start;
    gap: var(--hmwc-spacing-small);
    padding-block: var(--hmwc-spacing-2x-small);
  }

  .loading__marker {
    flex: none;
    width: 1em;
    height: 1em;
    --skeleton-radius: var(--hmwc-border-radius-circle);
  }

  .loading__body {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: var(--hmwc-spacing-2x-small);
  }

  .loading__label {
    width: 70%;
    height: 0.9em;
  }

  .loading__meta {
    width: 40%;
    height: 0.75em;
  }
`;var rr=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},Qs=3,Xe=class extends g{constructor(){super(...arguments),this._count=0}connectedCallback(){super.connectedCallback(),this._countEntries(),this._observer=new MutationObserver(()=>this._countEntries()),this._observer.observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["hidden"]})}disconnectedCallback(){super.disconnectedCallback(),this._observer?.disconnect(),this._observer=void 0}_countEntries(){this._count=Array.from(this.children).filter(e=>e.tagName==="HMWC-FEED-ITEM"&&!e.hidden).length}_renderLoading(){return c`<div part="loading" class="loading" aria-hidden="true">
      ${Array.from({length:Qs},()=>c`<div class="loading__row">
            <hmwc-skeleton class="loading__marker"></hmwc-skeleton>
            <div class="loading__body">
              <hmwc-skeleton class="loading__label"></hmwc-skeleton>
              <hmwc-skeleton class="loading__meta"></hmwc-skeleton>
            </div>
          </div>`)}
    </div>`}render(){let e=!this.loading&&this._count===0;return c`
      <div part="base" class=${v({feed:!0,divided:!!this.divided,sm:!!this.sm})} aria-busy=${this.loading?"true":"false"}>
        ${this.loading?this._renderLoading():x}
        <div
          part="list"
          class=${v({list:!0,"list--hidden":!!this.loading||e})}
          role=${b(e?void 0:"list")}
          aria-label=${b(e?void 0:this.label)}>
          <slot @slotchange=${this._countEntries}></slot>
        </div>
        <div part="empty" class=${v({empty:!0,"empty--hidden":!e})}>
          <slot name="empty">${this.emptyText?c`<hmwc-empty-state sm>${this.emptyText}</hmwc-empty-state>`:x}</slot>
        </div>
      </div>
    `}};Xe.styles=pa;Xe.dependencies=[Ge,oe];Xe.slots=["[default]","empty"];rr([w()],Xe.prototype,"_count",void 0);rr([n({type:Boolean,reflect:!0})],Xe.prototype,"divided",void 0);rr([n({type:Boolean,reflect:!0})],Xe.prototype,"loading",void 0);rr([n({type:Boolean,reflect:!0})],Xe.prototype,"sm",void 0);rr([n({type:String})],Xe.prototype,"label",void 0);rr([n({type:String,attribute:"empty-text"})],Xe.prototype,"emptyText",void 0);Xe.define("hmwc-feed",Xe);var ma=f`
  :host {
    --grid-row-gap: 0px;
    --grid-col-gap: 0px;
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
      color: var(--hmwc-color-text-secondary, var(--hmwc-color-neutral-800));
      font-size: var(--hmwc-font-size-small);
      font-family: var(--hmwc-font-sans);
      line-height: 2;
    }

    & [part~='label'] {
      color: var(--hmwc-color-neutral-800);
    }

    & .grid__content {
      position: relative;
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

    /* Column rules for "divided": a layer over the content, out of the grid
       flow, holding one vertical divider per gap. Offsets are measured from
       the resolved column tracks. */
    & .grid__dividers {
      position: absolute;
      inset: 0;
      pointer-events: none;

      & hmwc-divider {
        position: absolute;
        top: 0;
        bottom: 0;
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
`;var ot=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},he=class extends g{constructor(){super(...arguments),this._rules=[],this.align="center"}connectedCallback(){super.connectedCallback(),this.page&&(this.animation="scale-in");let e=this.controllers.slot.get();this.rows||(this.rows=Math.ceil(e.length/(this.cols||1))),e.forEach((t,r)=>{t.style.setProperty("z-index",`${e.length-(r+1)}`)}),this.hasUpdated&&this.divided&&this._observe()}updated(e){super.updated?.(e),(e.has("divided")||e.has("cols")||e.has("minCol")||e.has("gap")||e.has("template"))&&this._observe()}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0}_observe(){if(!this.divided){this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._rules.length&&(this._rules=[]);return}!this._resizeObserver&&this._content&&(this._resizeObserver=new ResizeObserver(()=>this._measureRules()),this._resizeObserver.observe(this._content)),this._measureRules()}_measureRules(){if(!this._content)return;let e=getComputedStyle(this._content),t=parseFloat(e.columnGap)||0,r=e.gridTemplateColumns.split(" ").map(a=>parseFloat(a)).filter(a=>a>0),i=[],o=0;r.slice(0,-1).forEach(a=>{o+=a,i.push(Math.round((o+t/2)*100)/100),o+=t}),i.join()!==this._rules.join()&&(this._rules=i)}_minColTemplate(){return`repeat(auto-fit, minmax(min(100%, ${this.cols?`max(${this.minCol}, calc((100% - ${this.cols-1} * var(--grid-col-gap)) / ${this.cols}))`:this.minCol}), 1fr))`}_contentStyle(){return this.template?this.template instanceof Object?`--template-col: ${this.template.col}; --template-row: ${this.template.row}`:`--template-col: ${this.template}`:this.minCol?`--template-col: ${this._minColTemplate()}; --template-row: none`:""}render(){let e=v({grid:!0,"gap-xs":this.gap==="xs","gap-sm":this.gap==="sm","gap-md":this.gap==="md","gap-lg":this.gap==="lg","gap-xl":this.gap==="xl","gap-row-xs":this.gap?.includes("/")&&this.gap?.split("/")[0]==="xs"||!1,"gap-row-sm":this.gap?.includes("/")&&this.gap?.split("/")[0]==="sm"||!1,"gap-row-md":this.gap?.includes("/")&&this.gap?.split("/")[0]==="md"||!1,"gap-row-lg":this.gap?.includes("/")&&this.gap?.split("/")[0]==="lg"||!1,"gap-row-xl":this.gap?.includes("/")&&this.gap?.split("/")[0]==="xl"||!1,"gap-col-xs":this.gap?.includes("/")&&this.gap?.split("/")[1]==="xs"||!1,"gap-col-sm":this.gap?.includes("/")&&this.gap?.split("/")[1]==="sm"||!1,"gap-col-md":this.gap?.includes("/")&&this.gap?.split("/")[1]==="md"||!1,"gap-col-lg":this.gap?.includes("/")&&this.gap?.split("/")[1]==="lg"||!1,"gap-col-xl":this.gap?.includes("/")&&this.gap?.split("/")[1]==="xl"||!1,"justify-start":this.justify==="start","justify-end":this.justify==="end","justify-center":this.justify==="center","justify-stretch":this.justify==="stretch","justify-around":this.justify==="around","justify-between":this.justify==="between","justify-even":this.justify==="even","align-start":this.align==="start","align-end":this.align==="end","align-center":this.align==="center",fluid:!!this.fit,page:!!this.page,divided:!!this.divided});return c`
      <div part="base" class=${e}>
        ${this.label?c`<slot name="label" part="label">${this.label}</slot>`:""}

        <div part="content" class="grid__content" style="--rows: ${this.rows-1||1}; --cols: ${this.cols||1}; ${this._contentStyle()}">
          <slot @slotchange=${()=>this.divided&&this._measureRules()}></slot>
          ${this.divided?c`<div part="dividers" class="grid__dividers" aria-hidden="true">
                ${this._rules.map(t=>c`<hmwc-divider vertical style="inset-inline-start: ${t}px"></hmwc-divider>`)}
              </div>`:""}
        </div>
      </div>
    `}};he.styles=[mt,ma];he.dependencies=[H];he.slots=["label"];ot([w()],he.prototype,"_rules",void 0);ot([n({type:Boolean,reflect:!0})],he.prototype,"divided",void 0);ot([n({type:Boolean})],he.prototype,"form",void 0);ot([n({type:Boolean,reflect:!0})],he.prototype,"fit",void 0);ot([n({type:Boolean,reflect:!0})],he.prototype,"page",void 0);ot([n({type:String})],he.prototype,"gap",void 0);ot([n({type:String})],he.prototype,"label",void 0);ot([n({type:String})],he.prototype,"template",void 0);ot([n({type:String})],he.prototype,"justify",void 0);ot([n({type:String,attribute:"min-col",reflect:!0})],he.prototype,"minCol",void 0);ot([n({type:String})],he.prototype,"align",void 0);ot([n({type:Number,reflect:!0})],he.prototype,"rows",void 0);ot([n({type:Number,reflect:!0})],he.prototype,"cols",void 0);ot([I(".grid__content")],he.prototype,"_content",void 0);he.define("hmwc-grid",he);var ua=f`
  :host {
    --popup-width: calc(31 * var(--hmwc-rem, 1rem));
    /* --popup-height is not defined here, so a value the consumer sets on
       the host wins over the size class's --popup-size-height below. */
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
      /* Grows with its content from --popup-height up to the window, then
         the content scrolls. "min-height: fit-content" let a tall popup grow
         past the window, since a min-height wins over max-height; min() keeps
         the floor under the cap. With --popup-height: auto the min() is
         invalid, min-height falls back to its initial auto, and the panel is
         sized to its content. */
      min-height: min(var(--popup-height, var(--popup-size-height, auto)), calc(100% - var(--hmwc-spacing-2x-large)));
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: var(--hmwc-spacing-2x-small);
      z-index: var(--hmwc-z-index-dialog);
      width: var(--popup-width);
      max-width: calc(100% - var(--hmwc-spacing-2x-large));
      max-height: calc(100% - var(--hmwc-spacing-2x-large));
      height: auto;
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
        /* Lets the content shrink below its height and scroll, rather than
           pushing the panel past its max-height. */
        min-height: 0;
        padding: 0 var(--popup-spacing) var(--popup-spacing);
        overflow: hidden auto;
        -webkit-overflow-scrolling: touch;
        width: 100%;
        display: block;
        height: 100%;
        box-sizing: border-box;
        color: var(--hmwc-color-neutral-700);

        &[hidden] {
          display: none;
        }
      }

      & .popup__skeleton {
        display: flex;
        flex-direction: column;
        gap: var(--hmwc-spacing-small);
        padding: 0 var(--popup-spacing) var(--popup-spacing);

        & hmwc-skeleton {
          height: var(--hmwc-font-size-large);
        }

        & .popup__skeleton-short {
          width: 60%;
        }
      }

      & .popup__error {
        flex: 0 0 auto;
        margin: 0 var(--popup-spacing);
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

        /* Start-of-footer content sits opposite the actions. */
        & .popup__footer-start {
          display: flex;
          flex: 1 1 auto;
          align-items: center;
          gap: var(--hmwc-spacing-x-small);
          margin-inline-end: auto;
        }

        /* A wrapper element lays out its buttons at the end. Buttons slotted
           directly are laid out by the slot itself: stretched to full width
           like a wrapper, two of them split to opposite ends of the footer. */
        & ::slotted(:not(hmwc-button)) {
          display: flex;
          align-items: center;
          gap: var(--hmwc-spacing-x-small);
          justify-content: flex-end;
          width: 100%;
        }
      }
    }

    /* ── Header ───────────────────────────────────
       The title is on the library's subtitle scale (as hmwc-text "subtitle"):
       large, semibold, dense tracking, on a dense line. The icon and the
       controls are each centred on the title's first line, so a title that
       wraps keeps them at the top beside it. The close button is the
       library's quiet icon button: the alert's dismiss glyph, in a square the
       height of a small button, neutral at rest, darker on a neutral fill on
       hover (200: the 100 step is the panel's own shade in dark). */
    & .popup__header {
      --popup-title-line: calc(var(--hmwc-font-size-large) * var(--hmwc-line-height-dense));
      flex: 0 0 auto;
      display: flex;
      align-items: flex-start;
      gap: var(--hmwc-spacing-small);

      & .popup__header-content {
        flex: 1 1 auto;
        display: flex;
        align-items: flex-start;
        gap: var(--hmwc-spacing-x-small);
        min-width: 0;
      }

      & .popup__icon {
        --icon-size: var(--hmwc-font-size-x-large);
        --icon-color: var(--hmwc-color-neutral-600);
        flex-shrink: 0;
        display: flex;
        align-items: center;
        height: var(--popup-title-line);
        font-size: var(--hmwc-font-size-x-large);
        color: var(--icon-color);

        &.icon-primary {
          --icon-color: var(--hmwc-color-primary-600);
        }
        &.icon-success {
          --icon-color: var(--hmwc-color-success-600);
        }
        &.icon-warning {
          --icon-color: var(--hmwc-color-warning-600);
        }
        &.icon-danger {
          --icon-color: var(--hmwc-color-danger-600);
        }
        &.icon-neutral {
          --icon-color: var(--hmwc-color-neutral-600);
        }
      }

      & .popup__title {
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        min-width: 0;
        min-height: var(--popup-title-line);
        margin: 0;
        font: inherit;
        font-size: var(--hmwc-font-size-large);
        font-weight: var(--hmwc-font-weight-semibold);
        line-height: var(--hmwc-line-height-dense);
        letter-spacing: var(--hmwc-letter-spacing-dense);
        overflow-wrap: anywhere;
        color: var(--hmwc-color-neutral-900);
      }

      & .popup__controls {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        gap: var(--hmwc-spacing-2x-small);
        height: var(--popup-title-line);
      }

      & .popup__close {
        --icon-size: var(--hmwc-font-size-medium);
        /* The glyph, not the square, lines up with the content's edge. */
        margin-inline-end: calc((var(--hmwc-font-size-medium) - var(--hmwc-input-height-small)) / 2);

        &::part(base) {
          width: var(--hmwc-input-height-small);
          height: var(--hmwc-input-height-small);
          border-radius: var(--hmwc-border-radius-medium);
          --button-color: var(--hmwc-color-neutral-600);
        }

        &:not([disabled])::part(base):hover {
          --button-color: var(--hmwc-color-neutral-900);
          background-color: var(--hmwc-color-neutral-200);
        }

        &:not([disabled])::part(base):active {
          --button-color: var(--hmwc-color-neutral-900);
          background-color: var(--hmwc-color-neutral-300);
        }
      }
    }

    &.header,
    &.confirmation {
      & .popup__panel {
        & .popup__header {
          /* The title's text, not its line box, sits --popup-spacing in from
             the panel's top edge and lines up with the content's left edge.
             The title line's own leading makes up the rest of the gap below. */
          padding: calc(var(--popup-spacing) - (var(--popup-title-line) - var(--hmwc-font-size-large)) / 2) var(--popup-spacing)
            var(--hmwc-spacing-x-small);
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

    &.footer-start .popup__footer .popup__footer-actions {
      width: auto;
    }

    &.open {
      display: flex;
    }

    /* ── Sizes ────────────────────────────────── */

    &.sm {
      --popup-width: calc(30 * var(--hmwc-rem, 1rem));
      --popup-spacing: var(--hmwc-spacing-large);
      --popup-radius: calc(1.15 * var(--hmwc-border-radius-large));

      &.drawer {
        --popup-width: calc(20 * var(--hmwc-rem, 1rem));
        --popup-spacing: calc(1.5 * var(--hmwc-spacing-large));
      }
    }

    &.md {
      --popup-width: calc(42 * var(--hmwc-rem, 1rem));
      --popup-spacing: calc(1.25 * var(--hmwc-spacing-large));

      &.drawer {
        --popup-width: calc(26 * var(--hmwc-rem, 1rem));
        --popup-spacing: calc(1.5 * var(--hmwc-spacing-large));
      }
    }

    &.lg {
      --popup-width: calc(45 * var(--hmwc-rem, 1rem));
      --popup-spacing: calc(1.25 * var(--hmwc-spacing-large));

      &.drawer {
        --popup-width: calc(32 * var(--hmwc-rem, 1rem));
        --popup-spacing: calc(1.5 * var(--hmwc-spacing-large));
      }
    }

    &.xl {
      --popup-width: calc(60 * var(--hmwc-rem, 1rem));
      --popup-spacing: calc(1.25 * var(--hmwc-spacing-large));

      &.drawer {
        --popup-width: calc(42 * var(--hmwc-rem, 1rem));
        --popup-spacing: calc(1.5 * var(--hmwc-spacing-large));
      }
    }

    &.full {
      --popup-width: calc(100% - var(--hmwc-spacing-2x-large));
      --popup-size-height: calc(100% - var(--hmwc-spacing-2x-large));
      --popup-spacing: calc(1.25 * var(--hmwc-spacing-large));
    }

    &.drawer {
      display: none;
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
          padding: var(--popup-spacing);
          padding-bottom: var(--hmwc-spacing-small);
          border-bottom: 1px solid var(--hmwc-panel-border-color);
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
`;var ui={info:{icon:"info-circle-fill",iconVariant:"primary",variant:"primary",fluid:!0,size:"sm",confirmLabel:"OK",hideCancel:!0,confirmation:!0},success:{icon:"check-circle-fill",iconVariant:"success",variant:"success",fluid:!0,size:"sm",confirmLabel:"OK",confirmVariant:"success",hideCancel:!0,confirmation:!0},warning:{icon:"exclamation-triangle-fill",iconVariant:"warning",variant:"warning",fluid:!0,size:"sm",confirmLabel:"OK",confirmVariant:"warning",hideCancel:!0,confirmation:!0},error:{icon:"x-circle-fill",iconVariant:"danger",variant:"danger",fluid:!0,size:"sm",confirmLabel:"OK",confirmVariant:"danger",hideCancel:!0,confirmation:!0},confirm:{icon:"question-circle-fill",iconVariant:"primary",variant:"primary",fluid:!0,size:"sm",confirmLabel:"Confirm",cancelLabel:"Cancel",confirmVariant:"primary",confirmation:!0},delete:{icon:"exclamation-triangle-fill",iconVariant:"danger",variant:"danger",fluid:!0,size:"sm",confirmLabel:"Delete",cancelLabel:"Cancel",confirmVariant:"danger",confirmation:!0},retry:{icon:"x-circle-fill",variant:"danger",fluid:!0,size:"sm",confirmLabel:"Retry",cancelLabel:"Cancel",confirmVariant:"danger",confirmation:!0}};var G=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},ir=[],fa=new WeakSet;function ga(){let s=document.activeElement;for(;s?.shadowRoot?.activeElement;)s=s.shadowRoot.activeElement;return s}function Js(s){let e=[],t=r=>{if(!(r instanceof HTMLElement&&(r.hidden||r.inert))){if(r instanceof HTMLSlotElement){let i=r.assignedElements({flatten:!0});(i.length?i:Array.from(r.children)).forEach(t);return}r instanceof HTMLElement&&r.tabIndex>=0&&!r.hasAttribute("disabled")&&r.checkVisibility?.()!==!1&&e.push(r),Array.from((r.shadowRoot??r).children).forEach(t)}};return t(s),e}function Zs(s){if(typeof s=="string"&&s)return s;let e=s?.message;return typeof e=="string"&&e?e:"Something went wrong. Please try again."}var M=class extends g{constructor(){super(),this.variant="default",this.confirmLabel="Confirm",this.cancelLabel="Cancel",this.confirmVariant="primary",this.dismissible=!0,this.overlayDismiss=!0,this.escapeDismiss=!0,this.overlay=!0,this._keydownHandler=this._handleKeyDown.bind(this),this._busy=!1,this._error="",this._opener=null,this._autoDestroy=!1,this.addEventListener("hmwc-cancel",e=>{let t=e.target;t===this||t.closest("hmwc-popup")!==this||!this.active||this._requestClose()}),this.addEventListener("hmwc-submit",e=>{let t=e.target;if(t===this||!this.closeOnSubmit||t.closest("hmwc-popup")!==this)return;let r=e.detail?.settled;Promise.resolve(r??!0).then(i=>i&&this.hide(!0))})}connectedCallback(){super.connectedCallback(),this.route&&this._enableRouting(),!this.id&&this.title&&(this.id=this.title.toLowerCase().replace(/\s+/g,"-"))}firstUpdated(){if(this._popup.hidden=!this.active,this.active){let e=this._popup.querySelector(".popup__overlay");e&&e.style.setProperty("opacity","1"),this._panel.style.setProperty("opacity","1"),this._panel.style.setProperty("transform","none"),this._addListeners(),this.controllers.scroll.lockBodyScrolling(this)}}disconnectedCallback(){super.disconnectedCallback(),this._removeListeners(),this.controllers.scroll.unlockBodyScrolling(this)}handleOpenChange(){let e=this._popup.querySelector(".popup__overlay");if(this.active){this._popup.hidden=!1;let t=ga();this._opener=t&&!this.contains(t)&&!this.shadowRoot.contains(t)?t:null,this.updateComplete.then(()=>this.active&&this._panel.focus()),requestAnimationFrame(()=>{e&&e.style.setProperty("opacity","1"),this._panel.style.setProperty("opacity","1"),this._panel.style.setProperty("transform","none")}),this._addListeners(),this.controllers.scroll.lockBodyScrolling(this),this.emit("hmwc-show")}else{requestAnimationFrame(()=>{e&&e.style.setProperty("opacity","0"),this._panel.style.setProperty("opacity",this.drawer?"1":"0"),this._panel.style.setProperty("transform",this.drawer?"translateX(100%)":"translateY(8px) scale(0.96)")}),setTimeout(()=>{this.active||(this._popup.hidden=!0,this._autoDestroy&&this.remove())},350),this._removeListeners(),this.controllers.scroll.unlockBodyScrolling(this),this._error="";let t=this._opener;this._opener=null,t?.isConnected&&t.focus(),this.emit("hmwc-hide")}}show(){this.active||(this._syncRoute(!0),this.active=!0)}hide(e=!1){this.active&&(this._syncRoute(!1),this.active=!1,this._resultResolver?.(e),this._resultResolver=void 0)}async confirm(){if(this._busy)return;let e=[],t=!0,r=this.emit("hmwc-submit",{cancelable:!0,detail:{waitUntil:i=>{t?e.push(Promise.resolve(i)):console.warn("[hmwc-popup] waitUntil() must be called while hmwc-submit is dispatched, not after an await.")}}});if(t=!1,!r.defaultPrevented){if(e.length){this._error="",this._busy=!0;try{if((await Promise.all(e)).includes(!1))return}catch(i){this._error=Zs(i);return}finally{this._busy=!1}}this.hide(!0)}}getResult(){return new Promise(e=>{this._resultResolver=e})}_addListeners(){document.addEventListener("keydown",this._keydownHandler);let e=ir.indexOf(this);e!==-1&&ir.splice(e,1),ir.push(this)}_removeListeners(){document.removeEventListener("keydown",this._keydownHandler);let e=ir.indexOf(this);e!==-1&&ir.splice(e,1)}_isTopmost(){return ir.filter(e=>e.isConnected&&e.active).pop()===this}_handleKeyDown(e){if(this.active){if(e.key==="Tab"){this._isTopmost()&&this._trapFocus(e);return}e.key==="Escape"&&(fa.has(e)||!this._isTopmost()||(fa.add(e),e.stopPropagation(),this.escapeDismiss&&this._requestClose()))}}_trapFocus(e){let t=Js(this._panel);if(!t.length){e.preventDefault(),this._panel.focus();return}let r=t.indexOf(ga());e.shiftKey&&r<=0?(e.preventDefault(),t[t.length-1].focus()):!e.shiftKey&&(r===-1||r===t.length-1)&&(e.preventDefault(),t[0].focus())}async _requestClose(){if(this._busy)return!1;if(this.guardDirty&&this.querySelector("[form][dirty]")){let{result:e}=va({preset:"confirm",title:"Discard changes?",message:"You have unsaved changes. Close without saving them?",confirmLabel:"Discard",cancelLabel:"Keep editing",confirmVariant:"danger"});if(!await e)return!1}return this.hide(),!0}_handleOverlayClick(){this.overlayDismiss&&this._requestClose()}async _handleCancel(){this._busy||await this._requestClose()&&this.emit("hmwc-cancel")}_syncRoute(e){if(!this.route)return;let t=window.location.pathname;window.location.href.includes("?")&&(t+=`?${window.location.href.split("?")[1].split("#")[0]}`),window.history.replaceState(null,"",e?`${t}#${this.route}`:t)}_enableRouting(){window.addEventListener("popstate",()=>{window.location.hash===`#${this.route}`?this.show():this.hide()})}_renderHeader(){return this.title||this.controllers.slot.test("header")||this.controllers.slot.test("title")?c`
      <slot name="header" part="header" class="popup__header">
        <div class="popup__header-content">
          ${this.icon||this.controllers.slot.test("icon")?c`
                <slot name="icon" part="icon" class="popup__icon ${this.iconVariant?`icon-${this.iconVariant}`:""}">
                  <hmwc-icon src=${b(this.icon)}></hmwc-icon>
                </slot>
              `:x}
          <slot name="title" part="title" id="title" class="popup__title"> ${this.title} </slot>
        </div>
        <div part="controls" class="popup__controls">
          <slot name="controls"></slot>
          ${this.dismissible?c`<hmwc-button
                class="popup__close"
                sm
                basic
                icon="x"
                aria-label="Close"
                ?disabled=${this._busy}
                @hmwc-click=${()=>this._requestClose()}></hmwc-button>`:x}
        </div>
      </slot>
    `:x}_renderFooter(){let e=this.controllers.slot.test("footer"),t=this.controllers.slot.test("footer-start");return e||t||this.confirmation?c`
      ${this._error?c`<hmwc-alert part="error" class="popup__error" danger active icon="exclamation-octagon" label=${this._error}></hmwc-alert>`:x}
      <div part="footer" class="popup__footer">
        ${t?c`<slot name="footer-start" part="footer-start" class="popup__footer-start"></slot>`:x}
        <slot name="footer" class="popup__footer-actions">
          ${this.confirmation?c`
                ${this.hideCancel?x:c`<hmwc-button sm neutral label=${this.cancelLabel} ?disabled=${this._busy} @hmwc-click=${()=>this._handleCancel()}></hmwc-button>`}
                <hmwc-button
                  sm
                  ?loading=${this._busy}
                  ?disabled=${this._busy}
                  ?primary=${this.confirmVariant==="primary"}
                  ?success=${this.confirmVariant==="success"}
                  ?warning=${this.confirmVariant==="warning"}
                  ?danger=${this.confirmVariant==="danger"}
                  ?neutral=${this.confirmVariant==="neutral"}
                  label=${this.confirmLabel}
                  @hmwc-click=${()=>this.confirm()}></hmwc-button>
              `:x}
        </slot>
      </div>
    `:x}render(){let e=v({popup:!0,open:!!this.active,drawer:!!this.drawer,confirmation:!!this.confirmation,fluid:!!this.fluid,sm:!!this.sm,md:!!this.md||!this.sm&&!this.lg&&!this.xl&&!this.full,lg:!!this.lg,xl:!!this.xl,full:!!this.full,[`variant-${this.variant}`]:this.variant!=="default",header:!!this.title||this.controllers.slot.test("header")||this.controllers.slot.test("title"),footer:!!this.confirmation||this.controllers.slot.test("footer")||this.controllers.slot.test("footer-start"),"footer-start":this.controllers.slot.test("footer-start"),loading:!!this.loading});return c`
      <div part="base" class=${e}>
        ${this.overlay?c`<div part="overlay" class="popup__overlay" @click=${()=>this._handleOverlayClick()}></div>`:x}
        <div
          part="panel"
          class="popup__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.active?"false":"true"}
          aria-label=${b(this.title||void 0)}
          aria-labelledby=${b(this.title||this.controllers.slot.test("title")?"title":void 0)}
          aria-busy=${this.loading||this._busy?"true":"false"}
          tabindex="-1">
          ${this._renderHeader()}

          ${this.loading?c`
                <div part="skeleton" class="popup__skeleton">
                  <hmwc-skeleton></hmwc-skeleton>
                  <hmwc-skeleton></hmwc-skeleton>
                  <hmwc-skeleton class="popup__skeleton-short"></hmwc-skeleton>
                </div>
              `:x}
          <slot part="content" class="popup__content" tabindex="-1" ?hidden=${!!this.loading}> ${this.message} </slot>

          ${this._renderFooter()}
        </div>
      </div>
    `}};M.styles=[mt,ua];M.dependencies=[U,k,$,oe];M.slots=["title","icon","controls","header","footer","footer-start"];G([n({type:Boolean,reflect:!0})],M.prototype,"active",void 0);G([n({type:String})],M.prototype,"title",void 0);G([n({type:String})],M.prototype,"message",void 0);G([n({type:String})],M.prototype,"icon",void 0);G([n({type:String,attribute:"icon-variant"})],M.prototype,"iconVariant",void 0);G([n({type:Boolean,reflect:!0})],M.prototype,"sm",void 0);G([n({type:Boolean,reflect:!0})],M.prototype,"md",void 0);G([n({type:Boolean,reflect:!0})],M.prototype,"lg",void 0);G([n({type:Boolean,reflect:!0})],M.prototype,"xl",void 0);G([n({type:Boolean,reflect:!0})],M.prototype,"full",void 0);G([n({type:String,reflect:!0})],M.prototype,"variant",void 0);G([n({type:Boolean,reflect:!0})],M.prototype,"drawer",void 0);G([n({type:Boolean,reflect:!0})],M.prototype,"confirmation",void 0);G([n({type:Boolean,attribute:"hide-cancel"})],M.prototype,"hideCancel",void 0);G([n({type:String,attribute:"confirm-label"})],M.prototype,"confirmLabel",void 0);G([n({type:String,attribute:"cancel-label"})],M.prototype,"cancelLabel",void 0);G([n({type:String,attribute:"confirm-variant"})],M.prototype,"confirmVariant",void 0);G([n({type:Boolean,reflect:!0})],M.prototype,"fluid",void 0);G([n({type:Boolean,reflect:!0})],M.prototype,"loading",void 0);G([n({type:Boolean,reflect:!0,attribute:"close-on-submit"})],M.prototype,"closeOnSubmit",void 0);G([n({type:Boolean,reflect:!0,attribute:"guard-dirty"})],M.prototype,"guardDirty",void 0);G([n({type:Boolean,reflect:!0})],M.prototype,"dismissible",void 0);G([n({type:Boolean,attribute:"overlay-dismiss"})],M.prototype,"overlayDismiss",void 0);G([n({type:Boolean,attribute:"escape-dismiss"})],M.prototype,"escapeDismiss",void 0);G([n({type:Boolean,reflect:!0})],M.prototype,"overlay",void 0);G([n({type:String})],M.prototype,"route",void 0);G([I(".popup")],M.prototype,"_popup",void 0);G([I(".popup__panel")],M.prototype,"_panel",void 0);G([w()],M.prototype,"_busy",void 0);G([w()],M.prototype,"_error",void 0);G([u("active",{waitUntilFirstUpdate:!0})],M.prototype,"handleOpenChange",null);function va(s={}){let e=Object.fromEntries(Object.entries(s).filter(([,o])=>o!==void 0)),t=s.preset?{...ui[s.preset],...e}:s,r=document.createElement("hmwc-popup");if(s.content&&(typeof s.content=="string"?r.innerHTML=s.content:r.appendChild(s.content)),s.buttons?.length){let o=document.createElement("div");o.slot="footer";for(let a of s.buttons){let l=document.createElement("hmwc-button");l.sm=!0,l.label=a.label,a.variant&&(l[a.variant]=!0),a.icon&&(l.icon=a.icon),a.basic&&(l.basic=!0),a.action&&l.addEventListener("hmwc-click",()=>a.action(r)),o.appendChild(l)}r.appendChild(o)}s.className&&(r.className=s.className),s.style&&(typeof s.style=="string"?r.setAttribute("style",s.style):Object.assign(r.style,s.style)),s.onShow&&r.addEventListener("hmwc-show",o=>o.target===r&&s.onShow(r)),s.onHide&&r.addEventListener("hmwc-hide",o=>o.target===r&&s.onHide(r)),s.onCancel&&r.addEventListener("hmwc-cancel",o=>o.target===r&&s.onCancel(r)),(s.onSubmit||s.action)&&r.addEventListener("hmwc-submit",o=>{if(o.target!==r)return;let a=o.detail;s.onSubmit&&a.waitUntil(Promise.resolve(s.onSubmit(r))),s.action&&a.waitUntil(Promise.resolve().then(()=>s.action(r)))}),document.body.appendChild(r),t.title&&(r.title=t.title),t.message&&(r.message=t.message),t.icon&&(r.icon=t.icon),t.iconVariant&&(r.iconVariant=t.iconVariant),t.size?r[t.size]=!0:r.sm=!0,t.variant&&(r.variant=t.variant),t.drawer&&(r.drawer=!0),t.confirmation&&(r.confirmation=!0),t.hideCancel&&(r.hideCancel=!0),t.confirmLabel&&(r.confirmLabel=t.confirmLabel),t.cancelLabel&&(r.cancelLabel=t.cancelLabel),t.confirmVariant&&(r.confirmVariant=t.confirmVariant),t.fluid&&(r.fluid=!0),t.dismissible===!1&&(r.dismissible=!1),t.overlayDismiss===!1&&(r.overlayDismiss=!1),t.escapeDismiss===!1&&(r.escapeDismiss=!1),t.overlay===!1&&(r.overlay=!1),r._autoDestroy=s.autoDestroy!==!1;let i=r.getResult();return requestAnimationFrame(()=>r.show()),{popup:r,result:i,close:()=>r.hide()}}M.define("hmwc-popup",M);var ba=f`
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
        --icon-size: calc(0.5 * var(--hmwc-rem, 1rem));
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
            height: calc(2 * var(--hmwc-rem, 1rem));
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
            --icon-size: calc(0.7 * var(--hmwc-rem, 1rem));
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
`;var $t=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},Oe=class extends g{constructor(){super(...arguments),this.userUpdate=()=>this.updateProxyUser(),this.logoUpdate=()=>this._logo=this.getLogoVariant()}return(){this.emit("hmwc-navigate",{detail:{route:"/"}})}handleSettingsClick(){window.location.hash="#settings"}handleMenuSelection(e){e.detail.value==="account"?(e.stopImmediatePropagation(),window.location.hash="#settings"):e.detail.value==="logout"&&this.emit("hmwc-navigate",{detail:{route:"/logout"}})}updateProxyUser(){this.proxyUser=this.user?.proxyHost?.firstName?this.user:{}}observeTheme(){new MutationObserver(e=>{e.forEach(t=>{t.type!=="attributes"&&t.attributeName!=="class"||(this._logo=this.getLogoVariant())})}).observe(document.documentElement,{attributes:!0})}getLogoVariant(){let e=document.documentElement.className.includes("theme-dark")?"dark":"light";return this.logo instanceof String?this.logo:!(this.logo instanceof Object)||!this.logo[e]?"":this.logo[e]}navigateFAQ(){this.emit("hmwc-navigate",{detail:{route:"/help-support/faq"}})}setDefaultHMWCLogo(){this.logo||(this.logo={light:"/src/assets/images/hmwc-dark.png",dark:"/src/assets/images/hmwc-light.png"})}connectedCallback(){super.connectedCallback(),this.setDefaultHMWCLogo(),this.observeTheme()}render(){let e=[{value:"account",label:"My Account"},{value:"logout",label:"Logout"}],t=this.user?(this.user.proxyHost?.firstName||this.user.firstName)+" "+(this.user.proxyHost?.lastName||this.user.lastName):"";return c`
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
            <hmwc-attachment distance="8" placement="bottom" @hmwc-select=${this.handleMenuSelection}>
              <div part="user" class="header__avatar" slot="anchor">
                <hmwc-avatar small status="active" name=${t}></hmwc-avatar>
                <span part="user-name" class="header__user-name">${t}</span>
                <hmwc-icon flex src="caret-down-fill"></hmwc-icon>
              </div>
              <hmwc-menu>
                ${e.map(r=>c`<hmwc-menu-item value=${r.value} label=${r.label}></hmwc-menu-item>`)}
              </hmwc-menu>
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
    `}};Oe.styles=ba;Oe.dependencies=[P,W,J,k,$,C,O,R,M,K];$t([w()],Oe.prototype,"_logo",void 0);$t([w()],Oe.prototype,"proxyUser",void 0);$t([n({type:String,reflect:!0})],Oe.prototype,"title",void 0);$t([n()],Oe.prototype,"logo",void 0);$t([n({type:Object})],Oe.prototype,"user",void 0);$t([n({type:Boolean,reflect:!0})],Oe.prototype,"beta",void 0);$t([I("#search")],Oe.prototype,"popup",void 0);$t([I("hmwc-menu")],Oe.prototype,"menu",void 0);$t([u("user")],Oe.prototype,"userUpdate",void 0);$t([u("logo")],Oe.prototype,"logoUpdate",void 0);Oe.define("hmwc-header",Oe);var wa=f`
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
      --image-height: calc(1.25 * var(--hmwc-rem, 1rem));
    }

    &.sm {
      --image-height: calc(2.5 * var(--hmwc-rem, 1rem));
    }

    &.md {
      --image-height: calc(5 * var(--hmwc-rem, 1rem));
    }

    &.lg {
      --image-height: calc(10 * var(--hmwc-rem, 1rem));
    }

    &.xl {
      --image-height: calc(20 * var(--hmwc-rem, 1rem));
    }
  }
`;var at=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},fe=class extends g{constructor(){super(...arguments),this.errored=!1,this.loading="lazy",this.fit="cover",this.radius="none"}handleSrcChange(){this.errored=!1}handleLoad(){this.errored=!1,this.emit("hmwc-ready",{detail:{src:this.src??""}})}handleError(){this.errored=!0}dimension(e){if(!(e==null||e===""))return typeof e=="number"||/^\d+$/.test(e)?`${e}px`:e}dimensionAttribute(e){if(e==null||e==="")return;let t=typeof e=="number"?e:/^\d+$/.test(e)?Number(e):NaN;return Number.isNaN(t)?void 0:`${t}`}render(){let e=v({image:!0,xs:!!this.xs,sm:!!this.sm,md:!!this.md,lg:!!this.lg,xl:!!this.xl}),t=this.dimension(this.width),r=this.dimension(this.height),i=Zt({...t?{"--image-width":t}:{},...r?{"--image-height":r}:{}}),o=this.errored&&this.controllers.slot.test("fallback");return c`
      <div part="base" class=${e} data-fit=${this.fit} data-radius=${this.radius} style=${i}>
        ${o?c`<slot name="fallback"></slot>`:c`
              <img
                part="image"
                src=${b(this.src)}
                alt=${this.alt??""}
                loading=${this.loading}
                width=${b(this.dimensionAttribute(this.width))}
                height=${b(this.dimensionAttribute(this.height))}
                @load=${this.handleLoad}
                @error=${this.handleError} />
            `}
      </div>
    `}};fe.styles=wa;fe.slots=["fallback"];at([w()],fe.prototype,"errored",void 0);at([n({type:Boolean,reflect:!0})],fe.prototype,"xs",void 0);at([n({type:Boolean,reflect:!0})],fe.prototype,"sm",void 0);at([n({type:Boolean,reflect:!0})],fe.prototype,"md",void 0);at([n({type:Boolean,reflect:!0})],fe.prototype,"lg",void 0);at([n({type:Boolean,reflect:!0})],fe.prototype,"xl",void 0);at([n({type:String})],fe.prototype,"src",void 0);at([n({type:String})],fe.prototype,"alt",void 0);at([n({type:String,reflect:!0})],fe.prototype,"loading",void 0);at([n({type:String,reflect:!0})],fe.prototype,"fit",void 0);at([n({type:String,reflect:!0})],fe.prototype,"radius",void 0);at([n()],fe.prototype,"width",void 0);at([n()],fe.prototype,"height",void 0);at([u("src",{waitUntilFirstUpdate:!0})],fe.prototype,"handleSrcChange",null);fe.define("hmwc-image",fe);var ya=f`
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
`;var _a=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},bt=class extends g{constructor(){super(...arguments),this._items=[],this.items=[]}getItems(){return this.items.length?this.items:this.controllers.slot.get()}connectedCallback(){super.connectedCallback(),this.items.length||(this._items=this.getItems())}render(){return c`
      <div part="base" class="list">
        <ul part="list" class="list__list">
          <slot> ${this._items.map(e=>c` <li part="item" class="list__item">${e}</li> `)} </slot>
        </ul>
      </div>
    `}};bt.styles=ya;bt.dependencies=[];bt.slots=[];_a([w()],bt.prototype,"_items",void 0);_a([n({type:String})],bt.prototype,"items",void 0);bt.define("hmwc-list",bt);var xa=f`
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
        top: calc(0.1 * var(--hmwc-rem, 1rem));
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
      height: calc(1 * var(--hmwc-rem, 1rem));
    }

    & .navbar__item:not(:first-of-type) {
      margin-bottom: --calendar-date-color(0.8 * (--hmwc-spacing-3x-small));
    }

    & .navbar__item {
      hmwc-button {
        --button-padding: 0 var(--hmwc-spacing-2x-small);
        --button-border: transparent;
        --icon-size: calc(0.64 * var(--hmwc-rem, 1rem));
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
        --icon-size: calc(1 * var(--hmwc-rem, 1rem));
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
        --icon-size: calc(0.8 * var(--hmwc-rem, 1rem));
        --icon-color: var(--hmwc-color-neutral-500);

        font-size: calc(0.94 * var(--hmwc-rem, 1rem));
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
        --icon-size: calc(0.75 * var(--hmwc-rem, 1rem));
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
`;var Bt=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},He=class extends g{constructor(){super(...arguments),this.groups=[]}open(){this.active=!0}close(){this.active=!1}toggle(){this.active=!this.active}openGroup(){this.active=!0}autoClose(){document.querySelector("#root")?.addEventListener("click",e=>{if(!["HMWC-NAVBAR","HMWC-HEADER"].includes(e.target.tagName)){if(document.body.classList.contains("hmwc-scroll-lock"))return;this.active=!1}})}enableKeyboardInteraction(){document.addEventListener("keypress",e=>{document.activeElement?.tagName!=="HMWC-INPUT"&&(e.preventDefault(),e.key==="s"&&(this.active=!this.active))})}handleOpenChange(){this.active||this.group?.hideAll()}handleRouteChange(){this.active=!1}handleRoutesChange(){if(!this.routes)return;let e=[];this.routes.forEach(t=>{let r=this.routes?.filter(i=>!(!i.path.startsWith(t.path)||i.path===t.path||i.path.split("/").length-1!==t.path.split("/").length));t.path.split("/").length<3&&(t.path!=="/"&&(t.routes=r),e.push(t))}),this.groups=e}connectedCallback(){super.connectedCallback(),this.autoClose(),this.enableKeyboardInteraction()}render(){let e=v({navbar:!0,open:!!this.active});return c`
      <div part="base" class=${e}>
        <hmwc-accordion-group class="navbar__group" part="group">
          ${this.groups?.map((t,r)=>c` ${r===1?c`
                      ${this.active?c` <span class="navbar__section">Applications</span> `:c`<hmwc-divider spacing="md"></hmwc-divider>`}
                    `:""}
                <hmwc-accordion
                  basic
                  class=${`navbar__item ${t.path===this.route?.path||t.path!=="/"&&this.route?.path.includes(t.path)?"active":""}`}
                  label=${this.active?t.title:""}
                  icon=${t.icon||""}
                  @click=${i=>!t.routes?.length&&(i.target.hide(),this.emit("hmwc-navigate",{detail:{route:t.path}}))}
                  @hmwc-expand=${()=>t.routes?.length&&(this.active=!0)}>
                  <span slot="trigger" style="display: flex;">
                    ${t.routes?.length?c`<hmwc-button
                          sm
                          basic
                          icon="chevron-right"
                          label="Show routes"
                          style="--button-padding: 0 var(--hmwc-spacing-2x-small); --button-border:transparent;"></hmwc-button>`:""}
                  </span>
                  ${t.routes?.length?c` <ul class="navbar__pages">
                        ${t.routes.map(i=>c`
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
          <hmwc-button
            circle
            sm
            icon=${`chevron-${this.active?"left":"right"}`}
            label=${this.active?"Collapse navigation":"Expand navigation"}
            @hmwc-click=${this.toggle}></hmwc-button>
        </div>
      </div>
    `}};He.styles=xa;He.dependencies=[de,Z,H];Bt([w()],He.prototype,"groups",void 0);Bt([w()],He.prototype,"route",void 0);Bt([n({type:Array})],He.prototype,"routes",void 0);Bt([n({type:Boolean,reflect:!0})],He.prototype,"active",void 0);Bt([I(".navbar__group")],He.prototype,"group",void 0);Bt([u("open")],He.prototype,"handleOpenChange",null);Bt([u("route",{waitUntilFirstUpdate:!0})],He.prototype,"handleRouteChange",null);Bt([u("routes")],He.prototype,"handleRoutesChange",null);He.define("hmwc-navbar",He);var ka=f`
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
      /* As md and lg: the line fills the tag. Left at the base rule's line-height of 1, the label's
         box (which clips, for the ellipsis) was one em tall and cut the text's descenders. */
      line-height: calc(var(--hmwc-input-height-small) * 0.75 - var(--hmwc-input-border-width) * 2);
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
`;var gt=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},ne=class extends g{handleClick(){this.emit("hmwc-click",{})}handleRemove(){this.emit("hmwc-remove",{detail:{value:this.label}})}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0),!this.primary&&!this.success&&!this.neutral&&!this.warning&&!this.danger&&(this.primary=!0)}render(){let e=v({tag:!0,icon:!!this.icon,sm:!!this.sm,md:!!this.md,lg:!!this.lg,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger,pill:!!this.pill,removable:!!this.removable});return c`
      <div part="base" class=${e} role="status" @click=${this.handleClick}>
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
    `}};ne.styles=ka;ne.dependencies=[$,k];ne.slots=["[default]"];gt([n({type:Boolean,reflect:!0})],ne.prototype,"removable",void 0);gt([n({type:Boolean,reflect:!0})],ne.prototype,"primary",void 0);gt([n({type:Boolean,reflect:!0})],ne.prototype,"success",void 0);gt([n({type:Boolean,reflect:!0})],ne.prototype,"neutral",void 0);gt([n({type:Boolean,reflect:!0})],ne.prototype,"warning",void 0);gt([n({type:Boolean,reflect:!0})],ne.prototype,"danger",void 0);gt([n({type:Boolean,reflect:!0})],ne.prototype,"sm",void 0);gt([n({type:Boolean,reflect:!0})],ne.prototype,"md",void 0);gt([n({type:Boolean,reflect:!0})],ne.prototype,"lg",void 0);gt([n({type:Boolean,reflect:!0})],ne.prototype,"pill",void 0);gt([n({type:String})],ne.prototype,"label",void 0);gt([n({type:String})],ne.prototype,"icon",void 0);ne.define("hmwc-tag",ne);var $a=f`
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
`;var Vt=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},qe=class extends g{constructor(){super(...arguments),this.overrides=[],this.breadcrumbs=!0,this._breadcrumbUpgradeQueued=!1,this.handleBreadcrumbNavigate=e=>{e.stopPropagation(),this.emit("hmwc-navigate",{detail:{route:e.detail.route}})}}updateOverrides(){let e=Array.from(this.children);this.overrides=e.filter(t=>t instanceof Y).map(t=>({label:t.label,path:t.path,icon:t.icon??void 0,prefix:t.prefix??void 0,suffix:t.suffix??void 0,home:t.home,options:t.options??t.items,actions:t.actions}))}connectedCallback(){super.connectedCallback(),this.updateOverrides()}handleSlotChange(){this.updateOverrides(),Array.from(this.children).some(t=>t.tagName==="HMWC-BREADCRUMB"&&!(t instanceof Y))&&!this._breadcrumbUpgradeQueued&&(this._breadcrumbUpgradeQueued=!0,customElements.whenDefined("hmwc-breadcrumb").then(()=>{this._breadcrumbUpgradeQueued=!1,this.updateOverrides()}))}render(){let e=v({page:!0,title:!!this.title||this.controllers.slot.test("title")});return c`
      <div part="base" class=${e}>
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
            <div>${this.group&&c`<hmwc-tag part="group" sm label=${this.group} icon=${b(this.icon)}></hmwc-tag>`}</div>
          </slot>
          <div part="controls" class="page__controls">
            <slot name="controls"></slot>
          </div>
        </div>

        <div part="content" class="page__content">
          <slot @slotchange=${()=>this.handleSlotChange()}></slot>
        </div>
      </div>
    `}};qe.styles=$a;qe.dependencies=[Ae,Y,ne,$];qe.slots=["title","group","controls"];Vt([w()],qe.prototype,"overrides",void 0);Vt([n({type:Boolean,reflect:!0})],qe.prototype,"breadcrumbs",void 0);Vt([n({type:String})],qe.prototype,"title",void 0);Vt([n({type:String})],qe.prototype,"group",void 0);Vt([n({type:String})],qe.prototype,"icon",void 0);Vt([n({type:Object})],qe.prototype,"route",void 0);Vt([n({type:Array})],qe.prototype,"routes",void 0);qe.define("hmwc-page",qe);var Ca=f`
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
        --progress-track: calc(0.55 * var(--hmwc-rem, 1rem));
      }

      &.medium {
        --progress-track: calc(1 * var(--hmwc-rem, 1rem));
      }

      &.large {
        --progress-track: calc(1.3 * var(--hmwc-rem, 1rem));
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
        line-height: calc(1 * var(--hmwc-rem, 1rem));
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
`;var Se=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},X=class extends g{constructor(){super(...arguments),this.value=0,this.hasAnimatedIn=!1}get clampedValue(){return Math.max(0,Math.min(100,this.value))}get displayValue(){return this.hasAnimatedIn?this.clampedValue:0}handleValueChange(){this.emit("hmwc-change",{detail:{value:this.clampedValue,complete:this.clampedValue>=100}})}connectedCallback(){super.connectedCallback(),!this.bar&&!this.ring&&(this.bar=!0),(this.small||this.medium||this.large)&&console.warn("[hmwc-progress] The `small`, `medium`, and `large` size attributes are deprecated. Use `sm`, `md`, and `lg` instead."),!this.sm&&!this.md&&!this.lg&&!this.xl&&!this.small&&!this.medium&&!this.large&&(this.sm=!0)}firstUpdated(){requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.hasAnimatedIn=!0})})}render(){let e=this.clampedValue,t=this.indeterminate?50:this.displayValue,r=v({progress:!0,bar:!!this.bar,ring:!!this.ring,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger,small:!!this.sm||!!this.small,medium:!!this.md||!!this.medium,large:!!this.lg||!!this.large,xl:!!this.xl,indeterminate:!!this.indeterminate,status:!!this.status});return c`
      <div
        part="base"
        class=${r}
        role="progressbar"
        title=${b(this.title)}
        aria-label=${this.label?this.label:"progress"}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${b(this.indeterminate?void 0:e)}
        style="--percentage: ${t/100}">
        ${this.bar?c`
              <div part="indicator" class="progress__indicator" style="width: ${t}%">
                ${this.indeterminate?"":c` <slot part="label" class="progress__label"> ${this.status?`${e}%`:""} </slot> `}
              </div>
            `:this.ring?c`
              <svg class="progress__ring">
                <circle class="progress__track"></circle>
                <circle class="progress__indicator"></circle>
                ${!this.indeterminate&&e>0?c`<circle class="progress__indicator progress__glimmer" pathLength="100"></circle>`:""}
              </svg>

              <slot id="label" part="label" class="progress__label"> ${this.status?`${e}%`:""} </slot>
            `:""}
      </div>
    `}};X.styles=Ca;Se([n({type:Boolean,reflect:!0})],X.prototype,"bar",void 0);Se([n({type:Boolean,reflect:!0})],X.prototype,"ring",void 0);Se([n({type:Boolean,reflect:!0})],X.prototype,"primary",void 0);Se([n({type:Boolean,reflect:!0})],X.prototype,"success",void 0);Se([n({type:Boolean,reflect:!0})],X.prototype,"neutral",void 0);Se([n({type:Boolean,reflect:!0})],X.prototype,"warning",void 0);Se([n({type:Boolean,reflect:!0})],X.prototype,"danger",void 0);Se([n({type:Boolean,reflect:!0})],X.prototype,"sm",void 0);Se([n({type:Boolean,reflect:!0})],X.prototype,"md",void 0);Se([n({type:Boolean,reflect:!0})],X.prototype,"lg",void 0);Se([n({type:Boolean,reflect:!0})],X.prototype,"xl",void 0);Se([n({type:Boolean,reflect:!0})],X.prototype,"small",void 0);Se([n({type:Boolean,reflect:!0})],X.prototype,"medium",void 0);Se([n({type:Boolean,reflect:!0})],X.prototype,"large",void 0);Se([n({type:Boolean})],X.prototype,"status",void 0);Se([n({type:Boolean,reflect:!0})],X.prototype,"indeterminate",void 0);Se([n({type:String})],X.prototype,"label",void 0);Se([n({type:Number,reflect:!0})],X.prototype,"value",void 0);Se([w()],X.prototype,"hasAnimatedIn",void 0);Se([u("value",{waitUntilFirstUpdate:!0})],X.prototype,"handleValueChange",null);X.define("hmwc-progress",X);var Sa=f`
  /* The tick of a checked card radio pops in. */
  @keyframes radio-card-check {
    from {
      opacity: 0;
      transform: scale(0.4);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .radio.card .radio__check {
      animation: none;
    }
  }

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

    /* ── States (docs/v2/specs/CONTROL_STATES.md) ──
       The circle's (or the pill's) border carries the state, in the colors
       validity has already resolved: the radio's own ("--control-*", see the
       form styles) or, inside an invalid group, the group's
       ("--form-group-*"). Hover only ever picks the hover color of the same
       pair, so it can't undo validity, and nothing but keyboard focus draws
       a ring. */
    --toggle-border-color: var(--form-group-border-color, var(--control-border-color));
    --toggle-border-color-hover: var(--form-group-border-color-hover, var(--control-border-color-hover));
    --toggle-border-color-checked: var(--form-group-border-color, var(--control-border-color-checked));
    --toggle-border-color-checked-hover: var(--form-group-border-color-hover, var(--control-border-color-checked-hover));

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
        border: solid var(--hmwc-input-border-width) var(--toggle-border-color);
        border-radius: 50%;
        background-color: var(--hmwc-input-background-color);
        color: transparent;
        transition: var(--hmwc-transition-fast) border-color, var(--hmwc-transition-fast) background-color, var(--hmwc-transition-fast) color;

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
        border-color: var(--toggle-border-color-checked);
        background-color: var(--hmwc-color-primary-600);
      }

      /* Darker under the pointer, like every other control. */
      &:not(.disabled) .radio__radio:hover {
        border-color: var(--toggle-border-color-checked-hover);
        background-color: var(--hmwc-color-primary-700);
      }
    }

    &:not(.checked) {
      svg circle {
        opacity: 0;
      }

      &:not(.disabled) .radio__radio:hover {
        border-color: var(--toggle-border-color-hover);
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

    /* Pill: a rounded button the height of a field of the same size, so a
       row of pills sits level with the inputs beside it. Quiet (the field's
       border and text) until checked; checked, it takes a primary tint, a
       primary border and a tick, so the choice doesn't rest on color alone.
       Only colors transition, which reduced motion keeps. */
    &.pill {
      --pill-height: var(--hmwc-input-height-medium);
      --pill-padding: var(--hmwc-spacing-medium);
      box-sizing: border-box;
      align-items: center;
      height: var(--pill-height);
      margin: 0;
      padding: 0 var(--pill-padding);
      border: var(--hmwc-input-border-width) solid var(--toggle-border-color);
      border-radius: var(--hmwc-border-radius-pill);
      background-color: var(--hmwc-input-background-color);
      color: var(--hmwc-input-color);
      white-space: nowrap;
      transition: var(--hmwc-transition-fast) border-color, var(--hmwc-transition-fast) background-color, var(--hmwc-transition-fast) color;

      .radio__control {
        padding: 0;
        gap: var(--hmwc-spacing-2x-small);
      }

      .radio__radio {
        display: none;
      }

      .radio__label {
        margin: 0;
        color: inherit;
        line-height: 1;
      }

      .radio__check {
        --icon-size: 1em;
        flex: 0 0 auto;
      }

      &.sm {
        --pill-height: var(--hmwc-input-height-small);
        --pill-padding: var(--hmwc-spacing-small);
      }

      &.lg {
        --pill-height: var(--hmwc-input-height-large);
        --pill-padding: var(--hmwc-spacing-large);
      }

      &:not(.checked):not(.disabled):hover {
        border-color: var(--toggle-border-color-hover);
        background-color: var(--hmwc-color-neutral-50);
        color: var(--hmwc-color-neutral-900);
      }

      &.checked {
        border-color: var(--toggle-border-color-checked);
        background-color: var(--hmwc-color-primary-50);
        color: var(--hmwc-color-primary-800);
      }

      &.checked:not(.disabled):hover {
        border-color: var(--toggle-border-color-checked-hover);
      }

      /* The ring sits just outside the pill, clear of its own border. */
      &:focus-visible {
        outline: var(--control-focus-outline);
        outline-offset: var(--control-focus-outline-offset);
      }
    }

    /* Card: a selectable tile. One row of three boxes, each centered on the
       tile's height, so they share one axis whatever the text wraps to:
       [prefix icon] [text block] [circle], "--card-gap" apart. The text block
       is the label with the tag on its line (the tag never makes the
       title row taller, and drops under a label too long to share a line
       with it), and the description under them. The circle keeps its place when a disabled
       tile hides it, so every tile's text has the same width.
       Rest is quiet (field border, flat). Hover darkens the border and tints
       the icon square. Checked is unmistakable three ways: a primary border
       (an inset line doubles it without moving anything), a primary tint,
       and a filled circle with a tick that pops in. The tile is the box of
       the control state model (docs/v2/specs/CONTROL_STATES.md): its border
       reads "--toggle-border-color*", so validity owns the border color,
       doubled line included, while the tint, the icon square and the circle
       go on saying "selected"; and only keyboard focus draws a ring. Disabled is flat and
       muted, not faded, and loses its circle, so a tile that says why it is
       taken still reads. Colors transition; the tick's pop is the one
       movement, and reduced motion drops it. */
    &.card {
      --card-padding: var(--hmwc-spacing-medium);
      --card-gap: var(--hmwc-spacing-small);
      --card-prefix-size: calc(2.25 * var(--hmwc-rem, 1rem));
      box-sizing: border-box;
      display: flex;
      align-items: center;
      gap: var(--card-gap);
      width: 100%;
      height: 100%;
      margin: 0;
      padding: var(--card-padding);
      border: var(--hmwc-input-border-width) solid var(--toggle-border-color);
      border-radius: var(--hmwc-border-radius-large);
      background-color: var(--hmwc-input-background-color);
      transition: var(--hmwc-transition-fast) border-color, var(--hmwc-transition-fast) background-color, var(--hmwc-transition-fast) box-shadow;

      .radio__prefix {
        flex: 0 0 auto;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--card-prefix-size);
        height: var(--card-prefix-size);
        border-radius: var(--hmwc-border-radius-medium);
        background-color: var(--hmwc-color-neutral-100);
        --icon-color: var(--hmwc-color-neutral-700);
        --icon-size: var(--hmwc-font-size-large);
        transition: var(--hmwc-transition-fast) background-color, var(--hmwc-transition-fast) color;
      }

      .radio__body {
        flex: 1 1 auto;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: var(--hmwc-spacing-3x-small);
      }

      .radio__title {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--hmwc-spacing-3x-small) var(--hmwc-spacing-x-small);
        min-width: 0;
      }

      .radio__label {
        flex: 0 1 auto;
        min-width: 0;
        margin: 0;
        font-weight: var(--hmwc-font-weight-semibold);
        line-height: var(--hmwc-line-height-dense);
      }

      /* Centered on the label's line, which puts the two texts on one
         baseline. A small tag is three quarters of a small
         field tall, more than the label's line, so the difference is taken
         off its margins: in the layout the tag is exactly one label line
         tall. The title row is the label's height with or without a tag,
         and a tag that has dropped under a long label takes one line. */
      .radio__tag {
        flex: 0 0 auto;
        max-width: 100%;
        margin-block: calc((var(--hmwc-line-height-dense) * 1em - 0.75 * var(--hmwc-input-height-small)) / 2);
      }

      .radio__description {
        display: block;
        color: var(--hmwc-color-neutral-600);
        font-size: var(--hmwc-font-size-small);
        font-weight: var(--hmwc-font-weight-normal);
        line-height: var(--hmwc-line-height-dense);
        transition: var(--hmwc-transition-fast) color;
      }

      .radio__control {
        flex: 0 0 auto;
        padding: 0;
      }

      .radio__icon {
        padding: 0;
      }

      .radio__check {
        --icon-size: calc(0.75 * var(--toggle-size));
        --icon-color: var(--hmwc-color-neutral-0);
        animation: radio-card-check var(--hmwc-transition-medium) var(--hmwc-easing-overshoot);
      }

      &.sm {
        --card-padding: var(--hmwc-spacing-small);
        --card-gap: var(--hmwc-spacing-x-small);
        --card-prefix-size: calc(1.75 * var(--hmwc-rem, 1rem));
        border-radius: var(--hmwc-border-radius-medium);

        .radio__prefix {
          --icon-size: var(--hmwc-font-size-medium);
        }
      }

      &.lg {
        --card-padding: var(--hmwc-spacing-large);
        --card-gap: var(--hmwc-spacing-medium);
        --card-prefix-size: calc(2.75 * var(--hmwc-rem, 1rem));

        .radio__prefix {
          --icon-size: var(--hmwc-font-size-x-large);
        }
      }

      /* Hover: the border alone, in the color validity resolved, on the tile
         and its circle. No shadow: nothing but focus draws round a control.
         The icon square's tint is the tile's own invitation. */
      &:not(.checked):not(.disabled):hover {
        border-color: var(--toggle-border-color-hover);

        .radio__prefix {
          background-color: var(--hmwc-color-primary-50);
          --icon-color: var(--hmwc-color-primary-700);
        }

        .radio__radio {
          border-color: var(--toggle-border-color-hover);
        }
      }

      /* The doubled line is inset and the border's own color, so it reads as
         a thicker border, not as a ring. */
      &.checked {
        --card-border-color: var(--toggle-border-color-checked);
        border-color: var(--card-border-color);
        background-color: var(--hmwc-color-primary-50);
        box-shadow: inset 0 0 0 var(--hmwc-input-border-width) var(--card-border-color);

        .radio__prefix {
          background-color: var(--hmwc-color-primary-600);
          --icon-color: var(--hmwc-color-neutral-0);
        }

        .radio__description {
          color: var(--hmwc-color-neutral-700);
        }
      }

      &.checked:not(.disabled):hover {
        --card-border-color: var(--toggle-border-color-checked-hover);
      }

      /* Disabled: a flat, muted tile that still reads, without the circle it
         can't offer. Not the faded look of other disabled radios. */
      &.disabled {
        opacity: 1;
        border-color: var(--hmwc-color-neutral-200);
        background-color: var(--hmwc-color-neutral-100);

        .radio__label,
        .radio__description {
          color: var(--hmwc-color-neutral-600);
        }

        .radio__prefix {
          background-color: var(--hmwc-color-neutral-200);
          --icon-color: var(--hmwc-color-neutral-600);
        }

        &:not(.checked) .radio__radio {
          visibility: hidden;
        }
      }

      /* The ring goes round the card, not the circle inside it. */
      &:focus-visible {
        outline: var(--control-focus-outline);
        outline-offset: var(--control-focus-outline-offset);

        .radio__radio {
          outline: none;
        }
      }
    }

    /* Disabled by its own attribute or by its group: the disabled border,
       whatever the validity, and no hover (the hover rules exclude it). */
    &.disabled {
      --toggle-border-color: var(--hmwc-input-border-color-disabled);
      --toggle-border-color-checked: var(--hmwc-color-primary-600);
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Keyboard focus only: a click already answers with the dot. One ring,
       round the circle and standing off it (the focused element is the whole
       radio, whose own outline would box the label in as well). */
    &:focus-visible {
      outline: none;
    }

    &:focus-visible .radio__radio {
      outline: var(--control-focus-outline);
      outline-offset: var(--control-focus-outline-offset);
    }
  }
`;var Tt=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},Ee=class extends L{constructor(){super(...arguments),this.prefix=null}handleCheckedChange(){this.emit("hmwc-select",{detail:{value:this.checked}}),this.hasUpdated&&this.emit("hmwc-change",{detail:{value:this.value,checked:!!this.checked}})}focus(e){this.shadowRoot?.querySelector('[part="base"]')?.focus(e)}blur(){this.shadowRoot?.querySelector('[part="base"]')?.blur()}get isDisabled(){if(this.disabled)return!0;let e=this.getRootNode(),t=this.closest("hmwc-radio-group")??(e instanceof ShadowRoot?e.host:null);return t?.localName!=="hmwc-radio-group"?!1:t.disabled??t.hasAttribute("disabled")}handleClick(){this.isDisabled||(this.checked=!0)}handleKeyDown(e){e.key!==" "&&!(e.key==="Enter"&&this.pill)||(e.preventDefault(),!this.isDisabled&&e.currentTarget.click())}handleBlur(){this.emit("hmwc-blur")}handleFocus(){this.emit("hmwc-focus")}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0)}_renderRadio(){return c`
        ${this.img?c`<div class="radio__image"><img src="${this.img}" class="radio__image" /></div>`:""}
        <div class="radio__control">
          ${this.pill&&this.checked?c`<hmwc-icon part="check" class="radio__check" src="check2"></hmwc-icon>`:""}
          <span part="control" class="radio__radio">
            <slot name="icon" part="icon" class="radio__icon"> ${this.checked?c` <span class="radio__indicator"></span> `:""} </slot>
          </span>

          <slot part="label" class="radio__label"> ${this.label?this.label:this.value} </slot>
        </div>
    `}_renderCard(e,t){return c`
      ${this.prefix?c`<hmwc-icon part="prefix" class="radio__prefix" src=${this.prefix} aria-hidden="true"></hmwc-icon>`:""}
      <span class="radio__body">
        <span class="radio__title">
          <slot part="label" class="radio__label"> ${this.label?this.label:this.value} </slot>
          ${e?c`<hmwc-tag part="tag" id="tag" class="radio__tag" sm pill ?primary=${!!this.checked} ?neutral=${!this.checked} label=${e}></hmwc-tag>`:""}
        </span>
        ${t?c`<span part="description" id="description" class="radio__description">${t}</span>`:""}
      </span>
      <span class="radio__control">
        <span part="control" class="radio__radio">
          <slot name="icon" part="icon" class="radio__icon">
            ${this.checked?c`<hmwc-icon part="check" class="radio__check" src="check2"></hmwc-icon>`:""}
          </slot>
        </span>
      </span>
    `}render(){let e=v({radio:!0,checked:!!this.checked,sm:!!this.sm,md:!!this.md,lg:!!this.lg,disabled:this.isDisabled,img:!!this.img,pill:!!this.pill,card:!!this.card}),t=this.card&&this.description?this.description:void 0,r=this.card&&this.tag?this.tag:void 0,i=[r?"tag":"",t?"description":""].filter(Boolean).join(" "),o=this.tabStop??!!this.checked;return c`
      <span
        part="base"
        class=${e}
        role="radio"
        tabindex=${o?"0":"-1"}
        aria-checked="${this.checked?"true":"false"}"
        aria-disabled=${b(this.isDisabled||void 0)}
        aria-label="${b(this.label||this.value||void 0)}"
        aria-describedby=${b(i||void 0)}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}>
        ${this.card?this._renderCard(r,t):this._renderRadio()}
      </span>
    `}};Ee.styles=Sa;Ee.dependencies=[$,ne];Tt([n({type:Boolean,reflect:!0})],Ee.prototype,"checked",void 0);Tt([n({type:Boolean,reflect:!0})],Ee.prototype,"pill",void 0);Tt([n({type:Boolean,reflect:!0})],Ee.prototype,"card",void 0);Tt([n({type:String})],Ee.prototype,"description",void 0);Tt([n({type:String})],Ee.prototype,"prefix",void 0);Tt([n({type:String})],Ee.prototype,"tag",void 0);Tt([n({type:String,reflect:!0})],Ee.prototype,"img",void 0);Tt([n({attribute:!1})],Ee.prototype,"tabStop",void 0);Tt([u("checked")],Ee.prototype,"handleCheckedChange",null);Ee.define("hmwc-radio",Ee);var Aa=f`
  :host {
    --font-size: inherit;
    display: block;
  }

  /* An invalid group has no border of its own, so it lends its validity to
     the radios inside it: they take the danger border, its darker hover and
     the danger keyboard ring (docs/v2/specs/CONTROL_STATES.md). */
  :host([invalid]:not([disabled])) {
    --form-group-border-color: var(--control-border-color);
    --form-group-border-color-hover: var(--control-border-color-hover);
    --form-group-focus-outline-color: var(--control-focus-outline-color);
  }

  [hidden] {
    display: none !important;
  }

  .radiogroup {
    display: block;

    /* Inline: radios sit in a row at their natural width and wrap when they
       run out of room (they used to be stretched across the whole row). */
    &.row {
      .radiogroup__input {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        column-gap: var(--hmwc-spacing-medium);
      }
    }

    &.small {
      --font-size: var(--hmwc-font-size-small);
      &.row .radiogroup__input {
        column-gap: var(--hmwc-spacing-small);
      }
    }

    &.medium {
      --font-size: var(--hmwc-font-size-medium);
    }

    &.large {
      --font-size: var(--hmwc-font-size-large);
      &.row .radiogroup__input {
        column-gap: var(--hmwc-spacing-large);
      }
    }

    /* Pills: a wrapping row, close together, with or without "inline". The
       label takes a field label's size and spacing (see "input__label" in the
       input styles), so pills beside a field line up with its box. */
    &.pill {
      .radiogroup__input {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }

      &:is(.small, .medium, .large) .radiogroup__input {
        gap: var(--hmwc-spacing-x-small);
      }

      .radiogroup__label {
        color: var(--hmwc-input-color);
        line-height: 1.4;
        padding-block: 0.15em;
      }

      &.small .radiogroup__label {
        font-size: var(--hmwc-input-font-size-small);
      }

      &.medium .radiogroup__label {
        font-size: calc(0.95 * var(--hmwc-button-font-size-medium));
      }
    }

    /* Cards: equal columns that stack when there is no room for them side
       by side. Each card fills its cell, so cards in a row are the same
       height whatever the length of their descriptions. The label is a
       field label (weight, size and line as "input__label" in the input
       styles), so a card group in a form reads like the fields around it;
       the card titles are the semibold text. */
    &.card {
      .radiogroup__input {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--radio-group-card-min-width, calc(14 * var(--hmwc-rem, 1rem)))), 1fr));
        gap: var(--hmwc-spacing-small);
      }

      .radiogroup__label {
        padding-top: 0.15em;
        padding-bottom: var(--hmwc-spacing-x-small);
        color: var(--hmwc-input-color);
        font-weight: var(--hmwc-font-weight-normal);
        line-height: 1.4;
      }

      &.small .radiogroup__label {
        font-size: var(--hmwc-input-font-size-small);
      }

      &.medium .radiogroup__label {
        font-size: calc(0.95 * var(--hmwc-button-font-size-medium));
      }

      .radiogroup__help {
        padding-top: var(--hmwc-spacing-2x-small);
      }
    }

    .radiogroup__control {
      position: relative;
      min-inline-size: 0;
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
`;var Pt=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},en=["ArrowDown","ArrowRight","ArrowUp","ArrowLeft","Home","End"],Pe=class extends L{handleValueChange(){this.emit("hmwc-change",{detail:{value:this.value}}),this.getRadios().forEach(e=>{e.checked=e.value===this.value})}handleDisabledChange(){this.getRadios().forEach(e=>e.requestUpdate?.())}focus(e){this._tabStop()?.focus(e)}getRadios(){return this.items?Array.from(this.shadowRoot?.querySelectorAll("hmwc-radio")??[]):Array.from(this.querySelectorAll("hmwc-radio")).filter(e=>e.closest("hmwc-radio-group")===this)}_enabledRadios(){return this.disabled?[]:this.getRadios().filter(e=>!e.disabled&&!this._isHidden(e))}_isHidden(e){let t=e.closest("[hidden]");return!!t&&(t===e||this.contains(t))}_tabStop(){let e=this._enabledRadios();return e.find(t=>t.checked)??e[0]}_syncRadios(){let e=this.getRadios();this.value!==""&&this.value!==void 0&&this.value!==null&&e.forEach(r=>r.checked=r.value===this.value);let t=this._tabStop();e.forEach(r=>{r.sm=!!this.sm,r.md=!!this.md,r.lg=!!this.lg,r.pill=!!this.pill,r.card=!!this.card,r.tabStop=r===t})}_choose(e){this.disabled||e.disabled||e.value&&(this.value=e.value,this._clearCustomErrorOnInput(),this.invalid&&this.reportValidity(),this.emit("hmwc-input"))}handleClick(e){let t=e.target.closest("hmwc-radio");t&&this._choose(t)}handleKeyDown(e){if(e.defaultPrevented||!en.includes(e.key)||e.altKey||e.ctrlKey||e.metaKey)return;let t=this._enabledRadios();if(!t.length)return;let r=e.composedPath(),i=t.findIndex(l=>r.includes(l));i<0&&(i=t.findIndex(l=>l.checked));let o;switch(e.key){case"ArrowDown":case"ArrowRight":o=(i+1)%t.length;break;case"ArrowUp":case"ArrowLeft":o=i<0?t.length-1:(i-1+t.length)%t.length;break;case"Home":o=0;break;default:o=t.length-1}e.preventDefault();let a=t[o];this._choose(a),a.focus()}stopRadioChange(e){e.stopPropagation()}_focusableControl(){return this._tabStop()??null}_resolveError(){return this._validity.valueMissing&&!this._validity.customError?"Please select an option.":super._resolveError()}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0),this._radioObserver??=new MutationObserver(()=>this.requestUpdate()),this._radioObserver.observe(this,{attributes:!0,attributeFilter:["disabled","hidden"],subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this._radioObserver?.disconnect()}updated(e){super.updated(e),this._syncRadios()}render(){let e=!!this.label||this.controllers.slot.test("label"),t=!!this.help||this.controllers.slot.test("help"),r=v({radiogroup:!0,small:!!this.sm,medium:!!this.md,large:!!this.lg,required:!!this.required,row:!!this.inline,pill:!!this.pill,card:!!this.card});return c`
      <div part="base" class=${r}>
        <!-- No whitespace after the slot: it would show as a space before the required indicator. -->
        <div part="label" id="label" class="radiogroup__label" ?hidden=${!e}><slot name="label">${this.label}</slot></div>
        <fieldset
          part="control"
          class="radiogroup__control"
          role="radiogroup"
          aria-labelledby=${b(e?"label":void 0)}
          aria-describedby=${b(t?"help":void 0)}
          aria-required=${this.required?"true":"false"}
          aria-invalid=${this._ariaInvalid()}
          aria-errormessage=${b(this._ariaErrorMessage())}
          @keydown=${this.handleKeyDown}
          @hmwc-change=${this.stopRadioChange}>
          <div part="input" class="radiogroup__input">
            <slot @click=${this.handleClick} @slotchange=${()=>this.requestUpdate()}>
              ${this.items?.map(i=>{let o=typeof i=="string"?i:i.value;return c`
                  <hmwc-radio
                    value=${String(o)}
                    label=${typeof i=="string"?i:i.label}
                    ?disabled=${typeof i!="string"&&!!i.disabled}
                    ?checked=${String(o)===String(this.value)}
                    ?sm=${!!this.sm}
                    ?md=${!!this.md}
                    ?lg=${!!this.lg}
                    ?pill=${!!this.pill}
                    ?card=${!!this.card}
                    description=${b(typeof i=="string"?void 0:i.description)}
                    tag=${b(typeof i=="string"?void 0:i.tag)}
                    .prefix=${typeof i=="string"?null:i.prefix??null}></hmwc-radio>
                `})}
            </slot>
          </div>
          <div part="help" id="help" class="radiogroup__help" ?hidden=${!t}>
            <slot name="help">${this.help}</slot>
          </div>
        </fieldset>
        ${this._renderError()}
      </div>
    `}};Pe.styles=Aa;Pe.dependencies=[Ee,$];Pe.slots=["label","help"];Pt([n({type:String})],Pe.prototype,"label",void 0);Pt([n({type:Array})],Pe.prototype,"items",void 0);Pt([n({type:String})],Pe.prototype,"help",void 0);Pt([n({type:Boolean,reflect:!0})],Pe.prototype,"inline",void 0);Pt([n({type:Boolean,reflect:!0})],Pe.prototype,"pill",void 0);Pt([n({type:Boolean,reflect:!0})],Pe.prototype,"card",void 0);Pt([u("value")],Pe.prototype,"handleValueChange",null);Pt([u("disabled",{waitUntilFirstUpdate:!0})],Pe.prototype,"handleDisabledChange",null);Pe.define("hmwc-radio-group",Pe);var Ea=f`
  :host {
    display: block;
  }

  .row {
    display: contents;

    & .row__label {
      display: none;
      color: var(--hmwc-color-text-secondary, var(--hmwc-color-neutral-800));
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

    /* Input group. Inputs and dropdowns take their corner radius from a
       custom property on their host (--input-radius, --dropdown-radius); a
       multi-value radius rounds only the outer corners. Other children (the
       button) square their inner corners from --hmwc-attached, a style query
       in the shared base styles.
       Neighbours overlap by one border width so the shared edge is a single
       line, and the focused (or hovered) child is raised so its whole border
       shows. */
    &.attached {
      --row-attached-radius: var(--hmwc-input-border-radius-large);

      .row__content {
        gap: 0;
      }

      .row__content::slotted(*) {
        --hmwc-attached: middle;
        --input-radius: 0;
        --dropdown-radius: 0;
      }

      .row__content::slotted(:not(:first-child)) {
        margin-inline-start: calc(-1 * var(--hmwc-input-border-width));
      }

      .row__content::slotted(:first-child:not(:last-child)) {
        --hmwc-attached: first;
        --input-radius: var(--row-attached-radius) 0 0 var(--row-attached-radius);
        --dropdown-radius: var(--row-attached-radius) 0 0 var(--row-attached-radius);
      }

      .row__content::slotted(:last-child:not(:first-child)) {
        --hmwc-attached: last;
        --input-radius: 0 var(--row-attached-radius) var(--row-attached-radius) 0;
        --dropdown-radius: 0 var(--row-attached-radius) var(--row-attached-radius) 0;
      }

      .row__content::slotted(:only-child) {
        --hmwc-attached: none;
        --input-radius: var(--row-attached-radius);
        --dropdown-radius: var(--row-attached-radius);
      }

      .row__content::slotted(:hover),
      .row__content::slotted(:focus-within) {
        position: relative;
        z-index: 1;
      }
    }
  }

  /* Right to left the first child sits on the right. The input and dropdown
     radii above are physical (top-left first), so mirror them; buttons square
     logical corners and need nothing. */
  :host(:dir(rtl)) .row.attached .row__content::slotted(:first-child:not(:last-child)) {
    --input-radius: 0 var(--row-attached-radius) var(--row-attached-radius) 0;
    --dropdown-radius: 0 var(--row-attached-radius) var(--row-attached-radius) 0;
  }

  :host(:dir(rtl)) .row.attached .row__content::slotted(:last-child:not(:first-child)) {
    --input-radius: var(--row-attached-radius) 0 0 var(--row-attached-radius);
    --dropdown-radius: var(--row-attached-radius) 0 0 var(--row-attached-radius);
  }
`;var or=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},ht=class extends j{connectedCallback(){if(super.connectedCallback(),this.wrap){let e=this.controllers.slot.get(),t=e.length,r=t,i=100/t;e.forEach(o=>{let a=`calc(${i}% - calc(var(--container-spacing) / ${r}))`;o.style.setProperty("max-width",a)})}}render(){let e=v({row:!0,wrap:!!this.wrap,min:!!this.min,max:!!this.max,outline:!!this.outline,attached:!!this.attached,fit:!!this.fit,label:!!this.label||this.controllers.slot.test("label"),scrollable:!!this.scrollable});return c`
      <div part="base" class=${e}>
        <slot name="label" part="label" class="row__label">${this.label}</slot>
        <slot part="content" class="row__content"></slot>
      </div>
    `}};ht.styles=Ea;or([n({type:Boolean,reflect:!0})],ht.prototype,"wrap",void 0);or([n({type:Boolean,reflect:!0})],ht.prototype,"fit",void 0);or([n({type:Boolean,reflect:!0})],ht.prototype,"min",void 0);or([n({type:Boolean,reflect:!0})],ht.prototype,"max",void 0);or([n({type:Boolean,reflect:!0})],ht.prototype,"outline",void 0);or([n({type:Boolean,reflect:!0})],ht.prototype,"attached",void 0);ht.define("hmwc-row",ht);var za=f`
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
        max-width: calc(1.75 * var(--hmwc-rem, 1rem));

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
          min-width: calc(3 * var(--hmwc-rem, 1rem));
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
          width: calc(1.75 * var(--hmwc-rem, 1rem));
          height: calc(1.75 * var(--hmwc-rem, 1rem));
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
              --icon-size: calc(1 * var(--hmwc-rem, 1rem));
              --icon-color: var(--hmwc-color-neutral-0);
            }
          }

          & hmwc-icon {
            --icon-size: calc(0.75 * var(--hmwc-rem, 1rem));
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
          padding-top: var(--hmwc-spacing-3x-small);
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
      gap: calc(2.5 * var(--hmwc-rem, 1rem));
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
`;var Kt=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},Qe=class extends g{constructor(){super(...arguments),this.step=1,this.value=[],this.placement="bottom"}updateSteps(){this.current=this.value.map((e,t)=>{let r="pending",i="Pending",o=e.progress||0,a=e.icon;return t===this.step-1&&(r="active",i="In Progress"),t<this.step-1&&(r="complete",i="Completed",o||(o=50),a="check2-circle"),{...e,progress:o,state:r,status:i,icon:a}}),this.emit("hmwc-change",{detail:{value:this.current}})}render(){let e=v({stepper:!0,fluid:!!this.fluid,status:!!this.status,"placement-top":this.placement==="top","placement-bottom":this.placement==="bottom","placement-left":this.placement==="left","placement-right":this.placement==="right"});return c`
      <div part="base" class=${e}>
        ${this.current.map((t,r)=>c`
            <div part="step" class="stepper__step ${t.state}">
              <div class="stepper__status">
                <span class="stepper__circle ${t.icon==="check2-circle"?"check":""}">
                  ${t.icon?c`<hmwc-icon src=${t.icon} />`:r+1}
                </span>
                ${r!==this.current.length-1?c`
                      <div class="stepper__progress">
                        <span class="stepper__progress-indicator" style="width: ${t.progress}%"></span>
                      </div>
                    `:""}
              </div>

              <div class="stepper__info">
                <span class="stepper__index">STEP ${r+1}</span>
                <span class="stepper__description">${t.label}</span>
                ${this.status?c`<span class="stepper__status">${t.status}</span>`:""}
              </div>
            </div>
          `)}
      </div>
    `}};Qe.styles=za;Qe.dependencies=[$];Kt([w()],Qe.prototype,"current",void 0);Kt([n({type:Number,reflect:!0})],Qe.prototype,"step",void 0);Kt([n({type:Array})],Qe.prototype,"value",void 0);Kt([n({type:Boolean,reflect:!0})],Qe.prototype,"fluid",void 0);Kt([n({type:Boolean,reflect:!0})],Qe.prototype,"status",void 0);Kt([n({type:String})],Qe.prototype,"placement",void 0);Kt([u(["steps","step"])],Qe.prototype,"updateSteps",null);Qe.define("hmwc-stepper",Qe);var Ta=f`
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

    /* ── States (docs/v2/specs/CONTROL_STATES.md) ──
       The track is filled, so at rest its border is the fill. The track
       color says on or off and darkens under the pointer; an invalid switch
       swaps the border alone for the danger pair (the last rules in this
       sheet), which hover keeps. Nothing but keyboard focus draws a ring. */
    --switch-track-color: var(--hmwc-color-neutral-400);
    --switch-track-color-hover: var(--hmwc-color-neutral-500);
    --switch-border-color: var(--switch-track-color);
    --switch-border-color-hover: var(--switch-track-color-hover);

    &.checked {
      /* The resting checked look applies to disabled switches too, so a
         read-only switch still shows whether it is on. Hover and focus
         feedback below stay limited to enabled switches. */
      --switch-track-color: var(--hmwc-color-primary-600);
      --switch-track-color-hover: var(--hmwc-color-primary-700);

      .switch__control .switch__thumb {
        translate: calc((var(--width) - var(--height)) / 2);
      }
    }

    &:not(.disabled) {
      .switch__control:hover {
        background-color: var(--switch-track-color-hover);
        border-color: var(--switch-border-color-hover);

        .switch__thumb {
          border-color: var(--switch-track-color-hover);
          scale: 1.1;
        }
      }

      /* Keyboard focus only: a click already answers by moving the thumb.
         The ring goes round the thumb, the part that moves, and stands off
         it so it shows against the track. */
      .switch__input:focus-visible ~ .switch__control .switch__thumb {
        border-color: var(--hmwc-color-primary-600);
        outline: var(--control-focus-outline);
        outline-offset: var(--control-focus-outline-offset);
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
      background-color: var(--switch-track-color);
      border: solid var(--hmwc-input-border-width) var(--switch-border-color);
      border-radius: var(--height);
      transition: var(--hmwc-transition-fast) border-color, var(--hmwc-transition-fast) background-color;

      .switch__thumb {
        width: var(--thumb-size);
        height: var(--thumb-size);
        background-color: var(--hmwc-color-neutral-0);
        border-radius: 50%;
        border: solid var(--hmwc-input-border-width) var(--switch-track-color);
        translate: calc((var(--width) - var(--height)) / -2);
        transition: var(--hmwc-transition-fast) translate ease, var(--hmwc-transition-fast) background-color, var(--hmwc-transition-fast) border-color,
          var(--hmwc-transition-fast) scale ease;
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

    /* Described: the track, then the label as the choice's title over its
       description, both wrapping in one column beside the track. The track
       and the first line of the label share a centre line, whichever of the
       two is taller. */
    &.described {
      --switch-text-line: calc(var(--hmwc-line-height-dense) * 1em);

      display: flex;
      align-items: flex-start;
      column-gap: var(--hmwc-spacing-small);

      .switch__control {
        margin-block-start: max(0px, calc((var(--switch-text-line) - var(--height)) / 2));
      }

      .switch__text {
        display: grid;
        min-inline-size: 0;
        row-gap: var(--hmwc-spacing-2x-small);
        padding-block-start: max(0px, calc((var(--height) - var(--switch-text-line)) / 2));
      }

      .switch__label {
        display: block;
        margin-inline-start: 0;
        font-weight: var(--hmwc-font-weight-semibold);
        line-height: var(--hmwc-line-height-dense);
      }

      .switch__description {
        color: var(--hmwc-color-neutral-600);
        font-size: var(--hmwc-font-size-small);
        font-weight: var(--hmwc-font-weight-normal);
        line-height: var(--hmwc-line-height-dense);
        user-select: none;
        -webkit-user-select: none;
      }
    }
  }

  /* A described switch is a block of text beside its track: it takes the
     width it is given and wraps, rather than sitting inline. */
  :host([description]:not([description=''])) {
    display: block;
  }

  /* Invalid: the danger border round the track, on or off, and its darker
     hover. Disabled wins (the form styles resolve these to nothing new). */
  :host([invalid]:not([disabled])) .switch {
    --switch-border-color: var(--control-border-color);
    --switch-border-color-hover: var(--control-border-color-hover);
  }

  @media (forced-colors: active) {
    .switch.checked:not(.disabled) .switch__control:hover .switch__thumb,
    .checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`;var Ur=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},dt=class extends L{get forwardedName(){if(!(this.label||this.textContent?.trim())){if(this.accessibleLabelledBy){let e=this.getRootNode(),t=this.accessibleLabelledBy.split(/\s+/).map(r=>r?e.getElementById?.(r)?.textContent??"":"").join(" ").replace(/\s+/g," ").trim();if(t)return t}return this.accessibleLabel||void 0}}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input?.checkValidity()}reportValidity(){return this.input?.reportValidity()}handleClick(){this.checked=!this.checked,this.emit("hmwc-change")}handleInput(){this.emit("hmwc-input")}handleFocus(){this.emit("hmwc-focus")}handleBlur(){this.emit("hmwc-blur")}handleKeyDown(e){this.disabled||!["ArrowLeft","ArrowRight"].includes(e.key)||(e.preventDefault(),this.checked=e.key==="ArrowRight",this.emit("hmwc-change",{detail:{value:this.checked}}),this.emit("hmwc-input"))}connectedCallback(){super.connectedCallback(),!this.sm&&!this.md&&!this.lg&&(this.md=!0)}_renderText(e){return c`
      <span class="switch__text">
        <slot part="label" class="switch__label">${this.label}</slot>
        <span part="description" id="description" class="switch__description" aria-hidden="true">${e}</span>
      </span>
    `}render(){let e=this.description||void 0,t=v({switch:!0,checked:!!this.checked,sm:!!this.sm,md:!!this.md,lg:!!this.lg,disabled:!!this.disabled,required:!!this.required,label:!!this.label||this.controllers.slot.test("label"),described:!!e});return c`
      <label part="base" class=${t}>
        <input
          class="switch__input"
          type="checkbox"
          title=${this.label||""}
          name=${b(this.name)}
          value=${b(this.value)}
          ?checked=${tt(this.checked)}
          ?required=${this.required}
          ?disabled=${this.disabled}
          role="switch"
          aria-label=${b(this.forwardedName)}
          aria-describedby=${b(e?"description":void 0)}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          @keydown=${this.handleKeyDown} />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        ${e?this._renderText(e):c`<slot part="label" class="switch__label">${this.label}</slot>`}
      </label>
    `}};dt.styles=Ta;dt.slots=["label"];dt.toggle=!0;Ur([n({type:String,reflect:!0})],dt.prototype,"description",void 0);Ur([n({type:String,attribute:"aria-label"})],dt.prototype,"accessibleLabel",void 0);Ur([n({type:String,attribute:"aria-labelledby"})],dt.prototype,"accessibleLabelledBy",void 0);Ur([I(".switch__input")],dt.prototype,"input",void 0);dt.define("hmwc-switch",dt);var Oa=f`
  :host {
    display: block;
    overflow-y: auto;
  }

  :host([aria-hidden='false']) {
    height: 100%;
  }

  /* An inactive panel takes no space, so padding, margins or gaps a page sets
     on the panels don't stack up under the open one. */
  :host([aria-hidden='true']) {
    display: none;
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
      animation: tab-content-in var(--hmwc-transition-medium) var(--hmwc-easing-decelerate);
    }
  }

  /* The panel being shown fades up into place. */
  @keyframes tab-content-in {
    from {
      opacity: 0;
      translate: 0 4px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .tab-content.active {
      animation: none;
    }
  }
`;var fi=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},Je=class extends g{handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tabpanel")}render(){let e=v({"tab-content":!0,active:this.active});return c` <slot part="base" class=${e}></slot> `}};Je.styles=[mt,Oa];Je.dependencies=[];fi([w()],Je.prototype,"active",void 0);fi([n({type:String,reflect:!0})],Je.prototype,"name",void 0);fi([u("active")],Je.prototype,"handleActiveChange",null);Je.define("hmwc-tab-content",Je);var Ra=f`
  :host {
    /* The icon's colour, at rest and on the active tab. Set --tab-icon-color
       alone to colour both (a section's accent, say). */
    --tab-icon-color: var(--hmwc-color-neutral-400);
    --tab-icon-color-active: var(--tab-icon-color);

    display: inline-block;
    transition: background-color var(--hmwc-transition-fast) var(--hmwc-easing-standard);
  }

  :host([active]) {
    background: var(--hmwc-color-primary-100);
  }

  :host(:hover:not([active]):not([disabled])) {
    background: var(--hmwc-color-neutral-100);
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      transition: none;
    }
  }

  /* A heading: a small muted title over a run of side tabs, not a tab. */
  :host([heading]) {
    display: block;
    background: none;
    pointer-events: none;
  }

  :host([heading]:not(:first-child)) {
    margin-block-start: var(--hmwc-spacing-medium);
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

    .tab__icon {
      transition: color var(--hmwc-transition-fast) var(--hmwc-easing-standard);
    }

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
        --icon-size: calc(1.2 * var(--hmwc-rem, 1rem));
        position: relative;
        top: -1px;
      }
    }

    /* No icon: drop its slot, or the gap after the empty slot put extra
       space before the label and the text sat off centre. */
    &:not(.icon) .tab__icon {
      display: none;
    }

    .tab__icon {
      --icon-size: calc(1.15 * var(--hmwc-rem, 1rem));
      display: flex;
      align-items: center;
      color: var(--tab-icon-color);
      --icon-color: var(--tab-icon-color);
    }

    &.active:not(.disabled) {
      color: var(--hmwc-color-primary-700);

      .tab__icon {
        color: var(--tab-icon-color-active);
        --icon-color: var(--tab-icon-color-active);
      }
    }

    &.closable {
      padding-inline-end: var(--hmwc-spacing-small);
    }

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.heading {
      display: flex;
      color: var(--hmwc-color-neutral-600);
      font-size: var(--hmwc-font-size-x-small);
      letter-spacing: var(--hmwc-letter-spacing-loose);
      text-transform: uppercase;
      line-height: var(--hmwc-line-height-normal);
      padding-block: var(--hmwc-spacing-x-small) var(--hmwc-spacing-2x-small);
      cursor: default;

      .tab__icon {
        --icon-size: 1em;
      }
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
`;var wt=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},_e=class extends g{constructor(){super(...arguments),this.name=Math.random().toString(36).substr(2,9)}handleActiveChange(){this.heading||this.setAttribute("aria-selected",this.active?"true":"false")}handleHeadingChange(){this.setAttribute("role",this.heading?"presentation":"tab"),this.heading?(this.removeAttribute("aria-selected"),this.removeAttribute("aria-disabled")):this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.heading||this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}handleClose(e){e.stopPropagation(),this.emit("hmwc-close")}updateContent(){let e=this.closest("hmwc-tab-group"),t=Array.from(this.children).filter(i=>!i.hasAttribute("slot"));if(!t.length||!e||this.hasAttribute("heading")||Array.from(e.children).find(i=>i instanceof Je&&i.name===this.name))return;let r=Object.assign(document.createElement("hmwc-tab-content"),{name:this.name,active:this.active});t.forEach(i=>{r.appendChild(i)}),e?.appendChild(r)}connectedCallback(){super.connectedCallback(),this.setAttribute("role",this.hasAttribute("heading")?"presentation":"tab"),this.setAttribute("slot","tab"),this.updateContent()}render(){let e=v({tab:!0,icon:!!this.icon||this.controllers.slot.test("icon"),active:!!this.active,closable:!!this.closeable,disabled:!!this.disabled,heading:!!this.heading});return c`
      <div part="base" class=${e} tabindex=${b(this.heading?void 0:this.disabled?"-1":"0")}>
        <slot name="icon" class="tab__icon">${this.icon?c`<hmwc-icon src=${this.icon}></hmwc-icon>`:""}</slot>
        <slot>${this.label}</slot>
        ${this.closeable&&!this.heading?c`<span class="tab__close"><hmwc-button part="close" basic medium icon="x" ?disabled=${this.disabled} @hmwc-click=${this.handleClose}> </hmwc-button></span>`:""}
      </div>
    `}};_e.styles=Ra;_e.dependencies=[k];wt([n({type:String})],_e.prototype,"name",void 0);wt([n({type:String})],_e.prototype,"label",void 0);wt([n({type:Boolean,reflect:!0})],_e.prototype,"active",void 0);wt([n({type:Boolean,reflect:!0})],_e.prototype,"closeable",void 0);wt([n({type:Boolean,reflect:!0})],_e.prototype,"disabled",void 0);wt([n({type:Boolean,reflect:!0})],_e.prototype,"heading",void 0);wt([n({type:String})],_e.prototype,"icon",void 0);wt([I(".tab")],_e.prototype,"tab",void 0);wt([u("active")],_e.prototype,"handleActiveChange",null);wt([u("heading")],_e.prototype,"handleHeadingChange",null);wt([u("disabled")],_e.prototype,"handleDisabledChange",null);_e.define("hmwc-tab",_e);var Ma=f`
  :host {
    --tabgroup-color: var(--hmwc-accent-color, var(--hmwc-color-primary-600));
    --tabgroup-spacing: calc(1.2 * var(--hmwc-spacing-medium));
    --tabgroup-flush-inset: var(--hmwc-spacing-large);
    --tabgroup-content-spacing: var(--hmwc-spacing-x-large);
    /* The fallbacks keep the bar drawn under a theme stylesheet older than the bundle. */
    --tabgroup-indicator-width: var(--hmwc-tab-indicator-width, 3px);
    --tabgroup-track-width: var(--hmwc-tab-track-width, 2px);

    display: block;
    overflow: hidden;
  }

  /* The panels are page content: they take the page's text size and stay
     selectable (the base host rule sets 16px, small caps and no selection). */
  :host {
    font-size: inherit;
    font-feature-settings: normal;
    user-select: auto;
  }

  /* flush: the tab bar spans the padded panel the group is the first thing in,
     on a tinted strip; the panels keep the panel's side padding. */
  :host([flush][placement='top']),
  :host([flush][collapsed]) {
    margin: calc(-1 * var(--tabgroup-flush-inset)) calc(-1 * var(--tabgroup-flush-inset)) var(--hmwc-spacing-medium);
    --tabgroup-spacing: var(--hmwc-spacing-medium);
    --tabgroup-track-width: var(--hmwc-panel-border-width, 1px);
  }

  /* Heading tabs title a run of side tabs; a tab bar along the top has no room for them. */
  .tab-group[placement='top'] ::slotted(hmwc-tab[heading]),
  .tab-group[placement='bottom'] ::slotted(hmwc-tab[heading]) {
    display: none;
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

        /* The indicator is moved with transform (see repositionIndicator), so
           that is what transitions; it used to name translate and never animated. */
        .tab-group__indicator {
          position: absolute;
          left: 0;
          top: 0;
          transition:
            transform var(--hmwc-transition-medium) var(--hmwc-easing-standard),
            width var(--hmwc-transition-medium) var(--hmwc-easing-standard),
            height var(--hmwc-transition-medium) var(--hmwc-easing-standard);

          @media (prefers-reduced-motion: reduce) {
            transition: none;
          }
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
      --tab-content-padding: var(--tabgroup-content-spacing) 0 var(--tabgroup-spacing);

      flex-direction: column;

      .tab-group__navigation {
        order: 1;

        .tab-group__nav {
          overflow-x: auto;

          .tab-group__tabs {
            flex: 1 1 auto;
            flex-direction: row;
            border-bottom: solid var(--tabgroup-track-width) var(--hmwc-color-neutral-200);

            /* Sits on the rule, covering it, and stands above it. */
            .tab-group__indicator {
              bottom: calc(-1 * var(--tabgroup-track-width));
              border-bottom: solid var(--tabgroup-indicator-width) var(--tabgroup-color);
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
      --tab-content-padding: var(--tabgroup-spacing) 0 var(--tabgroup-content-spacing);
      flex-direction: column;

      .tab-group__navigation {
        order: 2;

        .tab-group__nav {
          overflow-x: auto;

          .tab-group__tabs {
            flex: 1 1 auto;
            flex-direction: row;
            border-top: solid var(--tabgroup-track-width) var(--hmwc-color-neutral-200);

            .tab-group__indicator {
              top: calc(-1 * var(--tabgroup-track-width));
              border-top: solid var(--tabgroup-indicator-width) var(--tabgroup-color);
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
          min-width: calc(11 * var(--hmwc-rem, 1rem));

          .tab-group__tabs {
            height: 100%;
            flex: 0 0 auto;
            flex-direction: column;
            border-inline-end: solid var(--tabgroup-track-width) var(--hmwc-color-neutral-200);

            .tab-group__indicator {
              right: calc(-1 * var(--tabgroup-track-width));
              border-right: solid var(--tabgroup-indicator-width) var(--tabgroup-color);
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
      --tab-content-padding: var(--hmwc-spacing-x-small) calc(var(--tabgroup-spacing) + var(--hmwc-spacing-3x-small));

      flex-direction: row;

      .tab-group__navigation {
        order: 2;

        .tab-group__nav {
          flex-direction: column;
          overflow-y: auto;

          .tab-group__tabs {
            flex: 0 0 auto;
            flex-direction: column;
            border-inline-start: solid var(--tabgroup-track-width) var(--hmwc-color-neutral-200);

            .tab-group__indicator {
              left: calc(-1 * var(--tabgroup-track-width));
              border-left: solid var(--tabgroup-indicator-width) var(--tabgroup-color);
            }
          }
        }
      }

      .tab-group__content {
        order: 1;
      }
    }
  }

  /* After the placement rules, which it refines. */
  .tab-group.flush[placement='top'] {
    & .tab-group__navigation .tab-group__nav .tab-group__tabs {
      padding-inline: var(--hmwc-spacing-small);
      background: var(--hmwc-color-neutral-50);
      border-bottom: var(--tabgroup-track-width) solid var(--hmwc-panel-border-color);
    }

    & .tab-group__content {
      padding-inline: var(--tabgroup-flush-inset);
      box-sizing: border-box;
    }
  }
`;var xe=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},Q=class extends g{constructor(){super(...arguments),this.scrollable=!1,this.tabs=[],this.content=[],this.narrow=!1,this.collapsed=!1,this.placement="top",this.active="",this.handleHashChange=()=>{let e=this.readHash(),t=e?this.tabs.find(r=>r.name===e):void 0;t&&(this.restoring=void 0,this.setCurrentTab(t))},this.indicatorPlaced=!1}get effectivePlacement(){return this.collapsed?"top":this.placement}handlePlacementChange(){this.indicator&&(this.getCurrentTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none")}updateCollapsed(){this.collapsed=this.narrow&&["start","end"].includes(this.placement)}handleCollapseAtChange(){this.measureWidth()}handleTabsChange(){this.observeTabs(),this.setCurrentTab(this.getCurrentTab()),this.setAria()}handleActiveChange(){if(!this.current||this.active===this.current.name)return;let e=this.tabs.find(t=>t.name===this.active&&!t.disabled&&!t.hasAttribute("heading"));if(!e){this.active=this.current.name||"";return}this.restoring=void 0,this.setCurrentTab(e)}show(e){this.restoring=void 0,setTimeout(()=>{let t=this.tabs.find(r=>r.name===e);t&&this.setCurrentTab(t)},1)}getTabs(){let e=this.querySelectorAll("hmwc-tab:not([heading])");return Array.from(e)}getContent(){let e=this.querySelectorAll("hmwc-tab-content");return Array.from(e)}getCurrentTab(){let e=this.getTabs(),t=this.restoring?e.find(r=>r.name===this.restoring&&!r.disabled):void 0;return t||e.find(r=>r.active&&r!==this.current)||e.find(r=>r.active)||this.tabs[0]}setAria(){this.tabs.forEach(e=>{let t=this.content.find(i=>i.name===e.name);if(!t)return;let r=`hmwc-tab-${e.name}`;e.id||(e.id=r),t.id||(t.id=`${r}-panel`),e.setAttribute("aria-controls",t.id),t.setAttribute("aria-labelledby",e.id)})}setCurrentTab(e){if(!e||e.disabled)return;if(e===this.current){this.content.forEach(o=>o.active=o.name===e.name);return}let t=e.name===this.restoring;t&&(this.restoring=void 0);let r=this.current;r&&this.emit("hmwc-hide",{detail:{name:r.name||""}}),this.current=e,this.active=e.name||"";let i=o=>o.active=o.name===e.name;this.tabs.forEach(i),this.content.forEach(i),this.handlePlacementChange(),this.remember(e.name,!!r&&!t),this.emit("hmwc-show",{detail:{name:e.name||""}}),!(!this.current||!this.tabsEl)&&["top","bottom"].includes(this.effectivePlacement)&&this.autoScroll&&this.controllers.scroll.scrollIntoView(this.current,this.tabsEl,"horizontal")}storageKey(){return`hmwc-tab-group:${this.persist}`}readRemembered(){if(this.syncHash){let e=this.readHash();if(e)return e}if(this.persist)try{return localStorage.getItem(this.storageKey())||void 0}catch{return}}readHash(){let e=location.hash.replace(/^#/,"");try{return decodeURIComponent(e)}catch{return e}}remember(e,t=!0){if(!(!e||this.restoring)){if(this.persist)try{localStorage.setItem(this.storageKey(),e)}catch{}t&&this.syncHash&&this.readHash()!==e&&history.replaceState(history.state,"",`#${encodeURIComponent(e)}`)}}measureWidth(){if(!this.collapseAt){this.narrow=!1,this.widthObserver?.disconnect(),this.widthObserver=void 0;return}if(typeof ResizeObserver>"u")return;this.widthObserver||(this.widthObserver=new ResizeObserver(t=>{let r=t[t.length-1].contentRect.width;r&&requestAnimationFrame(()=>{this.widthObserver&&(this.narrow=r<(this.collapseAt||0))})}),this.widthObserver.observe(this));let e=this.getBoundingClientRect().width;e&&(this.narrow=e<this.collapseAt)}repositionIndicator(){if(!this.current||!this.indicator)return;let e=this.indicator.style,t=this.indicator.offsetParent;if(!t)return;let r=this.current.getBoundingClientRect(),i=t.getBoundingClientRect(),o=r.left-i.left-t.clientLeft,a=r.top-i.top-t.clientTop,l=r.width,h=r.height;!l&&!h||(this.indicatorPlaced||(e.transition="none"),["top","bottom"].includes(this.effectivePlacement)?(e.width=`${l}px`,e.height="auto",e.transform=`translateX(${o}px)`):["start","end"].includes(this.effectivePlacement)&&(e.width="auto",e.height=`${h}px`,e.transform=`translateY(${a}px)`),this.indicatorPlaced||(this.indicatorPlaced=!0,this.indicator.offsetWidth,e.transition=""))}observeTabs(){typeof ResizeObserver>"u"||(this.resizeObserver?.disconnect(),this.resizeObserver=new ResizeObserver(()=>this.repositionIndicator()),this.tabs.forEach(e=>this.resizeObserver.observe(e,{box:"border-box"})))}firstUpdated(e){super.firstUpdated(e),this.observeTabs(),this.repositionIndicator(),document.fonts?.ready.then(()=>this.repositionIndicator())}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.widthObserver?.disconnect(),this.widthObserver=void 0,window.removeEventListener("hashchange",this.handleHashChange)}handleClick(e){let r=e.target.closest("hmwc-tab");r?.closest("hmwc-tab-group")!==this||!r||r.hasAttribute("heading")||(this.restoring=void 0,this.setCurrentTab(r))}handleKeyDown(e){let r=e.target.closest("hmwc-tab"),i=r?.closest("hmwc-tab-group"),o=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"];if(!(i!==this||!r)&&o.includes(e.key)){let a=["top","bottom"].includes(this.effectivePlacement),l=["start","end"].includes(this.effectivePlacement),h=this.tabs.find(p=>p.matches(":focus"));if(!h)return;this.restoring=void 0;let d=this.tabs.indexOf(h);if(e.key==="Home"?d=0:e.key==="End"?d=this.tabs.length-1:e.key==="ArrowLeft"&&a||e.key==="ArrowUp"&&l?d--:(e.key==="ArrowRight"&&a||e.key==="ArrowDown"&&l)&&d++,d<0?d=this.tabs.length-1:d>this.tabs.length-1&&(d=0),this.tabs[d].focus({preventScroll:!0}),this.setCurrentTab(this.tabs[d]),!this.current||!this.tabsEl)return;a&&this.controllers.scroll.scrollIntoView(this.current,this.tabsEl,"horizontal")}}handleScroll(e){let t=0;e==="left"?t=this.nav.scrollLeft-this.nav.clientWidth:e==="right"&&(t=this.nav.scrollLeft+this.nav.clientWidth),this.nav.scroll({left:t,behavior:"smooth"})}handleSlotChange(){this.handlePlacementChange(),this.tabs=this.getTabs(),this.content=this.getContent()}reset(){this.restoring=void 0,this.setCurrentTab(this.tabs[0])}connectedCallback(){if(super.connectedCallback(),this.restoring=this.readRemembered(),this.syncHash&&window.addEventListener("hashchange",this.handleHashChange),this.measureWidth(),this.tabs=this.getTabs(),this.content=this.getContent(),!this.tabs&&!this.content||(this.setCurrentTab(this.getCurrentTab()),this.setAria(),!this.nav))return;let e=["top","bottom"].includes(this.effectivePlacement),t=this.nav.scrollWidth>this.nav.clientWidth;this.scrollable=e&&t}render(){let e=v({"tab-group":!0,scrollable:this.scrollable,fluid:!!this.fluid,flush:!!this.flush});return c`
      <div part="base" class=${e} placement=${this.effectivePlacement} @click=${this.handleClick} @keydown=${this.handleKeyDown}>
        <div class="tab-group__navigation">
          ${this.scrollable?c`
                <hmwc-button class="tab-group__scroll start" basic small icon="chevron-left" @hmwc-click=${()=>this.handleScroll("left")}>
                </hmwc-button>
              `:""}
          <div part="navigation" class="tab-group__nav">
            <div
              part="tabs"
              class="tab-group__tabs"
              role="tablist"
              aria-orientation=${["start","end"].includes(this.effectivePlacement)?"vertical":"horizontal"}>
              <div part="indicator" class="tab-group__indicator"></div>
              <slot name="tab" @slotchange=${this.handleSlotChange}></slot>
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
    `}};Q.styles=Ma;Q.dependencies=[_e,Je,k];xe([w()],Q.prototype,"scrollable",void 0);xe([w()],Q.prototype,"tabs",void 0);xe([w()],Q.prototype,"content",void 0);xe([w()],Q.prototype,"narrow",void 0);xe([n({type:Boolean})],Q.prototype,"autoScroll",void 0);xe([n({type:Boolean,reflect:!0})],Q.prototype,"fluid",void 0);xe([n({type:Boolean,reflect:!0})],Q.prototype,"flush",void 0);xe([n({type:Boolean,reflect:!0,attribute:"sync-hash"})],Q.prototype,"syncHash",void 0);xe([n({type:Boolean,reflect:!0})],Q.prototype,"collapsed",void 0);xe([n({type:String,reflect:!0})],Q.prototype,"placement",void 0);xe([n({type:String,reflect:!0})],Q.prototype,"active",void 0);xe([n({type:String,reflect:!0})],Q.prototype,"persist",void 0);xe([n({type:Number,attribute:"collapse-at"})],Q.prototype,"collapseAt",void 0);xe([I(".tab-group__tabs")],Q.prototype,"tabsEl",void 0);xe([I(".tab-group__nav")],Q.prototype,"nav",void 0);xe([I(".tab-group__indicator")],Q.prototype,"indicator",void 0);xe([u(["collapsed","placement"],{waitUntilFirstUpdate:!0})],Q.prototype,"handlePlacementChange",null);xe([u(["narrow","placement"])],Q.prototype,"updateCollapsed",null);xe([u("collapseAt",{waitUntilFirstUpdate:!0})],Q.prototype,"handleCollapseAtChange",null);xe([u("tabs",{waitUntilFirstUpdate:!0})],Q.prototype,"handleTabsChange",null);xe([u("active",{waitUntilFirstUpdate:!0})],Q.prototype,"handleActiveChange",null);Q.define("hmwc-tab-group",Q);var Da=f`
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
`;var yt=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},ke=class extends g{constructor(){super(...arguments),this.alignment="start"}valueUpdated(){this.hasUpdated&&this.emit("hmwc-change",{detail:{value:this.label}})}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","cell")}firstUpdated(){if(!this.label){let r=(this.shadowRoot?.querySelector("slot.table-cell__body")?.assignedNodes({flatten:!0})??[]).map(i=>i.nodeType===Node.TEXT_NODE?i.nodeValue:i.textContent).join("").trim();r&&(this.label=r)}}render(){let e=v({"table-cell":!0,"align-start":this.alignment==="start","align-center":this.alignment==="center","align-end":this.alignment==="end",icon:!!this.icon,progress:!!this.progress,primary:!!this.primary,success:!!this.success,neutral:!!this.neutral,warning:!!this.warning,danger:!!this.danger});return c`
      <div part="base" class=${e} @mouseenter=${()=>this.emit("hmwc-hover")}>
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
                  @hmwc-change=${t=>this.progress=t.detail.value}></hmwc-progress>
              `:c`<hmwc-skeleton></hmwc-skeleton>`}
        </slot>
      </div>
    `}};ke.styles=Da;ke.dependencies=[$,K,X,oe];yt([n({type:String,reflect:!0})],ke.prototype,"label",void 0);yt([n({type:String,reflect:!0})],ke.prototype,"icon",void 0);yt([n({type:Number,reflect:!0})],ke.prototype,"progress",void 0);yt([n({type:String,reflect:!0})],ke.prototype,"alignment",void 0);yt([n({type:Number,reflect:!0})],ke.prototype,"index",void 0);yt([n({type:Boolean,reflect:!0})],ke.prototype,"primary",void 0);yt([n({type:Boolean,reflect:!0})],ke.prototype,"success",void 0);yt([n({type:Boolean,reflect:!0})],ke.prototype,"neutral",void 0);yt([n({type:Boolean,reflect:!0})],ke.prototype,"warning",void 0);yt([n({type:Boolean,reflect:!0})],ke.prototype,"danger",void 0);yt([u(["label","progress"])],ke.prototype,"valueUpdated",null);ke.define("hmwc-table-cell",ke);var Ba=f`
  :host {
    /*
     * <hmwc-table-field> is a configuration-only primitive — it
     * declares how a data-driven host (e.g. <hmwc-data-table>)
     * should render a column. It has no visible representation
     * of its own.
     */
    display: none;
  }
`;var It=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},Ie=class extends g{handleConfigChange(){this.hasUpdated&&this.emit("hmwc-change",{detail:{field:this.prop,config:this.toConfig()}})}toConfig(){let e={prop:this.prop};return this.label!==void 0&&(e.label=this.label),this.width!==void 0&&(e.width=this.width),this.alignment!==void 0&&(e.alignment=this.alignment),this.sortable!==void 0&&(e.sortable=this.sortable),this.filterable!==void 0&&(e.filterable=this.filterable),this.template!==void 0&&(e.template=this.template),e}render(){return x}};Ie.styles=Ba;Ie.dependencies=[];Ie.slots=[];It([n({type:String,reflect:!0})],Ie.prototype,"prop",void 0);It([n({type:String,reflect:!0})],Ie.prototype,"label",void 0);It([n({type:String,reflect:!0})],Ie.prototype,"width",void 0);It([n({type:String,reflect:!0})],Ie.prototype,"alignment",void 0);It([n({type:Boolean,reflect:!0})],Ie.prototype,"sortable",void 0);It([n({type:Boolean,reflect:!0})],Ie.prototype,"filterable",void 0);It([n({type:String,reflect:!0})],Ie.prototype,"template",void 0);It([u(["prop","label","width","alignment","sortable","filterable","template"])],Ie.prototype,"handleConfigChange",null);Ie.define("hmwc-table-field",Ie);var Pa=f`
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
`;var ar=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},Ne=class extends g{constructor(){super(...arguments),this.hover=!0,this.cells=[]}cellsUpdate(){let e=this.cells.filter(t=>t.index);e.length?this.cells.filter(r=>r.index===void 0).forEach((r,i)=>{e.find(o=>o.index===i)||(r.index=i),i++}):this.cells.map((t,r)=>t.index=r),this.cells=this.cells.sort((t,r)=>t.index-r.index)}firstUpdated(){this.cells=this.controllers.slot.get().filter(e=>e instanceof ke)}render(){let e=v({"table-row":!0,alt:this.index%2!==0});return c`<div part="base" class=${e}>
        ${this.selectable?c`<hmwc-checkbox></hmwc-checkbox>`:""}${this.cells}${this.removable?c`<hmwc-button basic danger icon="x"></hmwc-button>`:""}
      </div>
      <slot></slot>`}};Ne.styles=Pa;Ne.dependencies=[];Ne.slots=[];ar([n({type:Number,reflect:!0})],Ne.prototype,"index",void 0);ar([n({type:Boolean,reflect:!0})],Ne.prototype,"hover",void 0);ar([n({type:Boolean,reflect:!0})],Ne.prototype,"selectable",void 0);ar([n({type:Boolean,reflect:!0})],Ne.prototype,"removable",void 0);ar([w()],Ne.prototype,"cells",void 0);ar([u("cells",{waitUntilFirstUpdate:!0})],Ne.prototype,"cellsUpdate",null);Ne.define("hmwc-table-row",Ne);var Ia=f`
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
`;var wr=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},st=class extends g{constructor(){super(...arguments),this.rows=[],this.fields=[]}rowsUpdate(){let e=this.rows.filter(t=>t.index);e.length?this.rows.filter(t=>t.index===void 0).forEach((t,r)=>{e.find(i=>i.index===r)||(t.index=r),r++}):this.rows.map((t,r)=>t.index=r),this.rows=this.rows.sort((t,r)=>t.index-r.index),this.rows[0]?.cells&&(this.fields.length||(this.fields=Array.from(Array(this.rows[0]?.cells.length).keys()).map(()=>""))),this.rows.find(t=>t.selectable)&&(this.fields=["",...this.fields]),this.rows.find(t=>t.removable)&&(this.fields=[...this.fields,""])}fieldsUpdate(){}firstUpdated(){this.rows=this.controllers.slot.get().filter(e=>e instanceof Ne)}render(){let e=v({table:!0,fluid:!!this.fluid,fields:this.fields.some(t=>t!=="")});return c`
      <div part="base" class=${e}>
        <div part="head" class="table__head">
          <div class="table__head-row">${this.fields?.map(t=>c`<div part="col-head" class="table__head-item">${t}</div>`)}</div>
        </div>
        ${this.rows.map(t=>t)}
        <slot></slot>
      </div>
    `}};st.styles=Ia;st.dependencies=[];st.slots=["[Default]"];wr([w()],st.prototype,"rows",void 0);wr([n({type:Array})],st.prototype,"fields",void 0);wr([n({type:Boolean,reflect:!0})],st.prototype,"fluid",void 0);wr([u("rows")],st.prototype,"rowsUpdate",null);wr([u("fields")],st.prototype,"fieldsUpdate",null);st.define("hmwc-table",st);var Na=f`
  :host {
    display: block;
    outline: none;
    min-width: 0;
  }

  .tree-item {
    /* The public --tree-* properties are declared on hmwc-tree and inherited.
       The fallbacks repeat the tree's defaults so an item rendered on its own
       (in a story, say) still looks right. */
    --item-padding-block: var(--tree-item-padding-block, var(--hmwc-spacing-2x-small));
    --item-padding-inline: var(--tree-item-padding-inline, var(--hmwc-spacing-x-small));
    --item-gap: var(--tree-item-gap, var(--hmwc-spacing-x-small));
    --item-toggle-size: var(--tree-item-toggle-size, var(--hmwc-spacing-medium));
    --item-indent: var(--tree-indent, calc(var(--item-toggle-size) + var(--item-gap)));
    --item-guide-width: var(--tree-guide-width, var(--hmwc-panel-border-width));
    --item-guide-color: var(--tree-guide-color, var(--hmwc-color-neutral-200));
    --item-expand-duration: var(--tree-expand-duration, var(--hmwc-transition-medium));
    --item-collapse-duration: var(--tree-collapse-duration, var(--hmwc-transition-fast));

    display: flex;
    flex-direction: column;
    min-width: 0;
    /* The base host style turns on small caps (font-feature-settings) for
       every component. In a tree it set labels in small caps beside
       full-height digits ("MAR 2026") and body text in small caps. Items
       reset it so labels, meta and body read as ordinary text; slotted
       content inherits from here. */
    font-feature-settings: normal;
    font-variant: normal;
  }

  /* ---- Row ------------------------------------------------------------ */

  .tree-item__row {
    display: flex;
    align-items: flex-start;
    gap: var(--item-gap);
    min-width: 0;
    padding: var(--item-padding-block) var(--item-padding-inline);
    border-radius: var(--tree-item-border-radius, var(--hmwc-border-radius-medium));
    color: var(--tree-item-color, var(--hmwc-color-neutral-800));
    font-size: var(--tree-item-font-size, var(--hmwc-font-size-medium));
    line-height: var(--hmwc-line-height-dense);
    cursor: pointer;
    transition: background-color var(--hmwc-transition-fast) var(--hmwc-easing-standard),
      box-shadow var(--hmwc-transition-fast) var(--hmwc-easing-standard);
  }

  .tree-item:not(.disabled) > .tree-item__row:hover {
    background-color: var(--tree-item-background-hover, var(--hmwc-color-neutral-100));
  }

  /* Keyboard focus uses the form-control focus style: a primary-600 border
     (which carries the 3:1 contrast) and a soft halo. The border is inset so
     it never shifts the row. */
  :host(:focus-visible) .tree-item__row {
    box-shadow: inset 0 0 0 var(--hmwc-input-border-width) var(--hmwc-input-border-color-focus),
      0 0 0 var(--hmwc-input-focus-ring-width) var(--hmwc-input-focus-ring-color);
  }

  /* The chevron column is always reserved, so labels line up whether or not
     an item can expand. Its height is one line of the label, which keeps the
     chevron on the first line when a long label wraps. */
  .tree-item__toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 var(--item-toggle-size);
    width: var(--item-toggle-size);
    height: 1lh;
    color: var(--hmwc-color-neutral-500);
    --icon-size: var(--hmwc-font-size-x-small);
    transition: rotate var(--item-expand-duration) var(--hmwc-easing-overshoot), color var(--hmwc-transition-fast) var(--hmwc-easing-standard);

    & hmwc-icon {
      display: flex;
    }
  }

  .tree-item:not(.disabled) > .tree-item__row:hover .tree-item__toggle {
    color: var(--hmwc-color-neutral-800);
  }

  .tree-item.expanded > .tree-item__row .tree-item__toggle {
    rotate: 90deg;
  }

  .tree-item__prefix {
    display: none;
    align-items: center;
    flex: 0 0 auto;
    height: 1lh;
    color: var(--hmwc-color-neutral-600);
    --icon-size: 1em;
  }

  .tree-item.has-prefix .tree-item__prefix {
    display: flex;
  }

  /* Label and meta share a wrapping line. The label grows, which pushes the
     meta to the end of the row; when the row is too narrow for both, the
     meta wraps and starts under the label, reading as a subtitle. */
  .tree-item__text {
    display: flex;
    flex: 1 1 auto;
    flex-wrap: wrap;
    align-items: baseline;
    column-gap: var(--item-gap);
    min-width: 0;
  }

  .tree-item__label {
    flex: 1 1 auto;
    min-width: 0;
    overflow-wrap: anywhere;
    letter-spacing: var(--hmwc-letter-spacing-dense);
  }

  .tree-item.branch > .tree-item__row .tree-item__label {
    font-weight: var(--tree-item-branch-font-weight, var(--hmwc-font-weight-semibold));
  }

  .tree-item__meta {
    display: none;
    flex: 0 0 auto;
    color: var(--tree-item-meta-color, var(--hmwc-color-neutral-600));
    font-size: var(--tree-item-meta-font-size, var(--hmwc-font-size-small));
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  .tree-item.has-meta .tree-item__meta {
    display: block;
  }

  .tree-item.selected > .tree-item__row {
    background-color: var(--tree-item-background-selected, var(--hmwc-color-primary-50));
    color: var(--tree-item-color-selected, var(--hmwc-color-primary-800));

    & .tree-item__toggle {
      color: var(--tree-item-color-selected, var(--hmwc-color-primary-800));
    }
  }

  .tree-item.disabled > .tree-item__row {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* ---- Children: body + nested items ------------------------------------ */

  /* Collapse is the resting transition: it accelerates away quickly, and
     visibility flips only once the row has closed, so collapsed content is
     out of the accessibility tree and the tab order. Expand overrides it
     below with a longer, decelerating curve. */
  .tree-item__children {
    display: grid;
    grid-template-rows: 0fr;
    visibility: hidden;
    transition: grid-template-rows var(--item-collapse-duration) var(--hmwc-easing-accelerate),
      visibility 0s linear var(--item-collapse-duration);
  }

  .tree-item__clip {
    position: relative;
    min-height: 0;
    overflow: hidden;
    padding-inline-start: var(--item-indent);
    opacity: 0;
    translate: 0 calc(-1 * var(--hmwc-spacing-2x-small));
    transition: opacity var(--hmwc-transition-x-fast) var(--hmwc-easing-accelerate),
      translate var(--hmwc-transition-x-fast) var(--hmwc-easing-accelerate);

    /* The guide runs down the toggle column, beside the children. */
    &::before {
      content: '';
      position: absolute;
      inset-block: 0;
      inset-inline-start: calc(var(--item-padding-inline) + (var(--item-toggle-size) - var(--item-guide-width)) / 2);
      border-inline-start: var(--item-guide-width) solid var(--item-guide-color);
      transition: border-color var(--hmwc-transition-fast) var(--hmwc-easing-standard);
    }
  }

  .tree-item.expanded > .tree-item__children {
    grid-template-rows: 1fr;
    visibility: visible;
    transition: grid-template-rows var(--item-expand-duration) var(--hmwc-easing-decelerate), visibility 0s;

    & > .tree-item__clip {
      /* Leave room for a focused child's halo, which would otherwise be
         clipped at the region's edge. */
      overflow: clip;
      overflow-clip-margin: var(--hmwc-input-focus-ring-width);
      opacity: 1;
      translate: 0;
      /* Content arrives just behind the opening row, rather than being
         uncovered by it. */
      transition: opacity var(--hmwc-transition-fast) var(--hmwc-easing-standard) var(--hmwc-transition-x-fast),
        translate var(--hmwc-transition-fast) var(--hmwc-easing-decelerate) var(--hmwc-transition-x-fast);
    }
  }

  /* The guides along the path to the focused item darken, so a deep focus
     position reads as a trail back to the top. */
  :host(:focus-within) .tree-item.expanded > .tree-item__children > .tree-item__clip::before {
    border-color: var(--tree-guide-color-active, var(--hmwc-color-neutral-400));
  }

  /* Body content is running text, not a label: it is selectable, and set at
     the body size and weight whatever the row above it uses. */
  .tree-item__body {
    display: none;
    padding: 0 var(--item-padding-inline) var(--hmwc-spacing-x-small);
    color: var(--tree-item-body-color, var(--hmwc-color-neutral-700));
    font-size: var(--tree-item-body-font-size, var(--hmwc-font-size-medium));
    font-weight: var(--hmwc-font-weight-normal);
    line-height: var(--hmwc-line-height-dense);
    letter-spacing: var(--hmwc-letter-spacing-normal);
    cursor: auto;
    user-select: text;
    -webkit-user-select: text;
  }

  .tree-item.has-body .tree-item__body {
    display: block;
  }

  slot[name='body']::slotted(ul),
  slot[name='body']::slotted(ol) {
    margin: 0;
    padding-inline-start: var(--hmwc-spacing-medium);
  }

  slot[name='body']::slotted(p) {
    margin: 0;
  }

  /* DoD §9. State changes still apply — only the motion stops. */
  @media (prefers-reduced-motion: reduce) {
    .tree-item__row,
    .tree-item__toggle,
    .tree-item__children,
    .tree-item__clip,
    .tree-item__clip::before,
    .tree-item.expanded > .tree-item__children,
    .tree-item.expanded > .tree-item__children > .tree-item__clip {
      transition: none;
    }

    .tree-item__clip {
      translate: none;
    }
  }

  @media (forced-colors: active) {
    :host(:focus-visible) .tree-item__row {
      outline: var(--hmwc-focus-ring-width) solid Highlight;
    }

    .tree-item.selected > .tree-item__row {
      outline: var(--hmwc-panel-border-width) dashed SelectedItem;
    }
  }
`;var _t=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},Fa=s=>(s?.assignedNodes({flatten:!0})??[]).map(e=>e.textContent??"").join("").replace(/\s+/g," ").trim(),gi=s=>s.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.ELEMENT_NODE||!!e.textContent?.trim()),ee=class s extends g{constructor(){super(...arguments),this.hasItems=!1,this.hasBody=!1,this.hasPrefix=!1,this.hasMeta=!1}handleExpandedChange(){this.emit(`hmwc-${this.expanded?"expand":"collapse"}`)}connectedCallback(){super.connectedCallback(),this.hasAttribute("tabindex")||(this.tabIndex=-1)}updated(){this.syncHostAttributes()}get expandable(){return this.hasItems||this.hasBody}get labelText(){return this.label??Fa(this.renderRoot?.querySelector('slot[name="label"]'))}expand(){this.disabled||!this.expandable||(this.expanded=!0)}collapse(){this.disabled||(this.expanded=!1)}toggle(){this.expanded?this.collapse():this.expand()}get tree(){return this.closest("hmwc-tree")}get level(){let e=1;for(let t=this.parentElement;t&&t.tagName!=="HMWC-TREE";t=t.parentElement)t instanceof s&&e++;return e}get siblings(){return Array.from(this.parentElement?.children??[]).filter(e=>e instanceof s&&!e.hidden)}syncHostAttributes(){let e=(this.tree?.selection??"none")!=="none",t=this.siblings,r=[this.labelText,this.meta??Fa(this.renderRoot.querySelector('slot[name="meta"]'))].filter(Boolean).join(", "),i=(o,a)=>a===null?this.removeAttribute(o):this.getAttribute(o)!==a&&this.setAttribute(o,a);i("role","treeitem"),i("aria-level",String(this.level)),i("aria-setsize",String(Math.max(t.length,1))),i("aria-posinset",String(Math.max(t.indexOf(this)+1,1))),i("aria-expanded",this.expandable?String(!!this.expanded):null),i("aria-selected",e?String(!!this.selected):null),i("aria-disabled",this.disabled?"true":null),i("aria-label",r||null)}handleItemsSlotChange(e){this.hasItems=e.target.assignedElements().some(t=>t.tagName==="HMWC-TREE-ITEM")}handleBodySlotChange(e){this.hasBody=gi(e.target)}handlePrefixSlotChange(e){this.hasPrefix=gi(e.target)}handleMetaSlotChange(e){this.hasMeta=gi(e.target)}render(){let e=(this.tree?.selection??"none")!=="none",t=v({"tree-item":!0,expandable:this.expandable,expanded:!!this.expanded&&this.expandable,branch:this.hasItems,disabled:!!this.disabled,selected:!!this.selected&&e,"has-prefix":!!this.icon||this.hasPrefix,"has-meta":!!this.meta||this.hasMeta,"has-body":this.hasBody});return c`
      <div part="base" class=${t}>
        <div part="row" class="tree-item__row">
          <span part="toggle" class="tree-item__toggle" aria-hidden="true">
            ${this.expandable?c`<hmwc-icon src="chevron-right"></hmwc-icon>`:x}
          </span>
          <span part="prefix" class="tree-item__prefix">
            <slot name="prefix" @slotchange=${this.handlePrefixSlotChange}>${this.icon?c`<hmwc-icon src=${this.icon}></hmwc-icon>`:x}</slot>
          </span>
          <span class="tree-item__text">
            <span part="label" class="tree-item__label"><slot name="label" @slotchange=${()=>this.requestUpdate()}>${this.label}</slot></span>
            <span part="meta" class="tree-item__meta"><slot name="meta" @slotchange=${this.handleMetaSlotChange}>${this.meta}</slot></span>
          </span>
        </div>
        <div part="children" class="tree-item__children">
          <div class="tree-item__clip">
            <div part="body" class="tree-item__body"><slot name="body" @slotchange=${this.handleBodySlotChange}></slot></div>
            <div part="group" class="tree-item__group" role=${b(this.hasItems?"group":void 0)}>
              <slot @slotchange=${this.handleItemsSlotChange}></slot>
            </div>
          </div>
        </div>
      </div>
    `}};ee.styles=Na;ee.dependencies=[$];ee.slots=["[default]","label","prefix","meta","body"];_t([w()],ee.prototype,"hasItems",void 0);_t([w()],ee.prototype,"hasBody",void 0);_t([w()],ee.prototype,"hasPrefix",void 0);_t([w()],ee.prototype,"hasMeta",void 0);_t([n({type:Boolean,reflect:!0})],ee.prototype,"expanded",void 0);_t([n({type:Boolean,reflect:!0})],ee.prototype,"disabled",void 0);_t([n({type:Boolean,reflect:!0})],ee.prototype,"selected",void 0);_t([n({type:String,reflect:!0})],ee.prototype,"label",void 0);_t([n({type:String,reflect:!0})],ee.prototype,"meta",void 0);_t([n({type:String,reflect:!0})],ee.prototype,"icon",void 0);_t([u("expanded",{waitUntilFirstUpdate:!0})],ee.prototype,"handleExpandedChange",null);ee.define("hmwc-tree-item",ee);var La=f`
  :host {
    /* Every item reads these, so they are set once here and inherited by the
       nested items. Set any of them on a single item to restyle that branch. */
    --tree-item-padding-block: var(--hmwc-spacing-2x-small);
    --tree-item-padding-inline: var(--hmwc-spacing-x-small);
    --tree-item-gap: var(--hmwc-spacing-x-small);
    --tree-item-toggle-size: var(--hmwc-spacing-medium);
    --tree-item-border-radius: var(--hmwc-border-radius-medium);
    --tree-item-font-size: var(--hmwc-font-size-medium);
    --tree-item-color: var(--hmwc-color-neutral-800);
    --tree-item-branch-font-weight: var(--hmwc-font-weight-semibold);
    --tree-item-meta-font-size: var(--hmwc-font-size-small);
    --tree-item-meta-color: var(--hmwc-color-neutral-600);
    --tree-item-body-font-size: var(--hmwc-font-size-medium);
    --tree-item-body-color: var(--hmwc-color-neutral-700);
    --tree-item-background-hover: var(--hmwc-color-neutral-100);
    --tree-item-background-selected: var(--hmwc-color-primary-50);
    --tree-item-color-selected: var(--hmwc-color-primary-800);
    /* A child's chevron lines up under its parent's label. */
    --tree-indent: calc(var(--tree-item-toggle-size) + var(--tree-item-gap));
    --tree-guide-color: var(--hmwc-color-neutral-200);
    --tree-guide-color-active: var(--hmwc-color-neutral-400);
    --tree-guide-width: var(--hmwc-panel-border-width);
    /* Opening is unhurried, closing immediate — the same asymmetry as
       hmwc-accordion, so disclosures feel alike across the library. */
    --tree-expand-duration: var(--hmwc-transition-medium);
    --tree-collapse-duration: var(--hmwc-transition-fast);

    display: block;
    width: 100%;
    min-width: 0;
  }

  .tree {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 0;

    & .tree__label {
      /* Aligned with the item labels, not the row edge. */
      padding-inline: calc(var(--tree-item-padding-inline) + var(--tree-item-toggle-size) + var(--tree-item-gap));
      margin-bottom: var(--hmwc-spacing-2x-small);
      color: var(--hmwc-color-neutral-600);
      font-size: var(--hmwc-font-size-small);
      font-weight: var(--hmwc-font-weight-semibold);
      line-height: var(--hmwc-line-height-dense);
    }
  }
`;var Hr=function(s,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var l=s.length-1;l>=0;l--)(a=s[l])&&(o=(i<3?a(o):i>3?a(e,t,o):a(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},tn=500,pt=class extends g{constructor(){super(...arguments),this.selection="none",this.typeahead="",this.observer=new MutationObserver(()=>this.sync()),this.handleClick=e=>{let t=e.composedPath(),r=t.findIndex(a=>a instanceof HTMLElement&&a.classList.contains("tree-item__row"));if(r===-1)return;let i=t.slice(r).find(a=>a instanceof ee);if(!i)return;t.slice(0,r).some(a=>a instanceof HTMLElement&&a.classList.contains("tree-item__toggle"))&&!i.disabled?i.toggle():this.activate(i)},this.handleFocusIn=e=>{e.target instanceof ee&&e.target!==this.current&&this.updateTabStop(e.target)},this.handleExpandedChange=e=>{let t=e.target;if(!(t instanceof ee))return;let r=document.activeElement;!t.expanded&&r&&r!==t&&t.contains(r)?this.focusItem(t):this.updateTabStop()},this.handleKeyDown=e=>{let t=e.target;if(!(t instanceof ee)||e.altKey||e.ctrlKey||e.metaKey)return;let r=this.getVisibleItems(),i=r.indexOf(t);switch(e.key){case"ArrowDown":this.focusItem(r[i+1]);break;case"ArrowUp":this.focusItem(r[i-1]);break;case"Home":this.focusItem(r[0]);break;case"End":this.focusItem(r[r.length-1]);break;case"ArrowRight":if(t.expandable&&!t.expanded)t.expand();else if(t.expanded){let o=r[i+1];o&&this.getParentItem(o)===t&&this.focusItem(o)}break;case"ArrowLeft":t.expandable&&t.expanded&&!t.disabled?t.collapse():this.focusItem(this.getParentItem(t));break;case"Enter":case" ":this.activate(t);break;case"*":Array.from(t.parentElement?.children??[]).filter(o=>o instanceof ee).forEach(o=>o.expand());break;default:if(e.key.length!==1||!this.handleTypeahead(e.key,r,i))return}e.preventDefault()}}get selectedItems(){return this.getItems().filter(e=>e.selected)}handleSelectionChange(){this.selection==="single"&&this.selectedItems.slice(1).forEach(e=>e.selected=!1),this.sync()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("hmwc-expand",this.handleExpandedChange),this.addEventListener("hmwc-collapse",this.handleExpandedChange),this.observer.observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["hidden"]})}updated(){let e=(t,r)=>r===null?this.removeAttribute(t):this.setAttribute(t,r);e("aria-label",this.label||null),e("aria-multiselectable",this.selection==="multiple"?"true":null)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("focusin",this.handleFocusIn),this.removeEventListener("hmwc-expand",this.handleExpandedChange),this.removeEventListener("hmwc-collapse",this.handleExpandedChange),this.observer.disconnect(),clearTimeout(this.typeaheadTimer)}expandAll(){this.getItems().forEach(e=>e.expand())}collapseAll(){this.getItems().forEach(e=>e.collapse())}getItems(){return Array.from(this.querySelectorAll("hmwc-tree-item"))}getVisibleItems(){return this.getItems().filter(e=>{if(e.hidden)return!1;for(let t=e.parentElement;t&&t!==this;t=t.parentElement)if(t instanceof ee&&(!t.expanded||t.hidden))return!1;return!0})}getParentItem(e){return e.parentElement?.closest("hmwc-tree-item")??void 0}sync(){this.getItems().forEach(e=>e.requestUpdate?.()),this.updateTabStop()}updateTabStop(e=this.current){let t=this.getVisibleItems(),r=e&&t.includes(e)&&e||t.find(i=>i.selected)||t[0];this.current=r,this.getItems().forEach(i=>i.tabIndex=i===r?0:-1)}focusItem(e){e&&(this.updateTabStop(e),e.focus())}select(e){if(!(e.disabled||this.selection==="none")){if(this.selection==="single"){if(e.selected)return;this.getItems().forEach(t=>t.selected=t===e)}else e.selected=!e.selected;this.emit("hmwc-select",{detail:{value:e}})}}activate(e){e.disabled||(this.selection==="none"?e.toggle():this.select(e))}handleTypeahead(e,t,r){clearTimeout(this.typeaheadTimer),this.typeaheadTimer=window.setTimeout(()=>this.typeahead="",tn),this.typeahead+=e.toLowerCase();let i=this.typeahead.length===1?r+1:r,a=[...t.slice(i),...t.slice(0,i)].find(l=>l.labelText.toLowerCase().startsWith(this.typeahead));return this.focusItem(a),!!a}render(){return c`
      <div part="base" class="tree">
        ${this.label&&!this.hideLabel?c`<div part="label" class="tree__label" aria-hidden="true">${this.label}</div>`:x}
        <slot @slotchange=${()=>this.sync()}></slot>
      </div>
    `}};pt.styles=La;pt.dependencies=[ee];pt.slots=["[default]"];Hr([n({type:Boolean,reflect:!0,attribute:"hide-label"})],pt.prototype,"hideLabel",void 0);Hr([n({type:String,reflect:!0})],pt.prototype,"label",void 0);Hr([n({type:String,reflect:!0})],pt.prototype,"selection",void 0);Hr([u("selection")],pt.prototype,"handleSelectionChange",null);pt.define("hmwc-tree",pt);return Ya(rn);})();

// Expose imperative functions globally
if (typeof window !== 'undefined') {
  window.HMWCPopup = HMWC.HMWCPopup;
  window.HMWCAlert = HMWC.HMWCAlert;
}

