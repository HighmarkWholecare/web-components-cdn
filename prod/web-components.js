"use strict";
var HMWC = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // index.js
  var index_exports = {};
  __export(index_exports, {
    Accordion: () => Accordion,
    AccordionGroup: () => AccordionGroup,
    Alert: () => Alert,
    AlertPresets: () => AlertPresets,
    Attachment: () => Attachment,
    Avatar: () => Avatar,
    Badge: () => Badge,
    Banner: () => Banner,
    Breadcrumb: () => Breadcrumb,
    Breadcrumbs: () => Breadcrumbs,
    Button: () => Button,
    Calendar: () => Calendar,
    Card: () => Card,
    Chart: () => Chart,
    Checkbox: () => Checkbox,
    Col: () => Col,
    DataTable: () => DataTable,
    Divider: () => Divider,
    Dropdown: () => Dropdown,
    Grid: () => Grid,
    HMWCAlert: () => HMWCAlert,
    HMWCComponent: () => HMWCComponent,
    HMWCContainerComponent: () => HMWCContainerComponent,
    HMWCFormComponent: () => HMWCFormComponent,
    HMWCPopup: () => HMWCPopup,
    Header: () => Header,
    Icon: () => Icon,
    Image: () => Image,
    Input: () => Input,
    List: () => List,
    Menu: () => Menu,
    MenuItem: () => MenuItem,
    Navbar: () => Navbar,
    Page: () => Page,
    Pagination: () => Pagination,
    Popup: () => Popup,
    PopupPresets: () => PopupPresets,
    Progress: () => Progress,
    Radio: () => Radio,
    RadioGroup: () => RadioGroup,
    Row: () => Row,
    Skeleton: () => Skeleton,
    Spinner: () => Spinner,
    Stepper: () => Stepper,
    Switch: () => Switch,
    Tab: () => Tab,
    TabContent: () => TabContent,
    TabGroup: () => TabGroup,
    Table: () => Table,
    TableCell: () => TableCell,
    TableField: () => TableField,
    TableRow: () => TableRow,
    Tag: () => Tag,
    Text: () => Text,
    Tooltip: () => Tooltip,
    Tree: () => Tree,
    TreeItem: () => TreeItem
  });

  // node_modules/@lit/reactive-element/css-tag.js
  var t = globalThis;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t5, e8, o8) {
      if (this._$cssResult$ = true, o8 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t5, this.t = e8;
    }
    get styleSheet() {
      let t5 = this.o;
      const s4 = this.t;
      if (e && void 0 === t5) {
        const e8 = void 0 !== s4 && 1 === s4.length;
        e8 && (t5 = o.get(s4)), void 0 === t5 && ((this.o = t5 = new CSSStyleSheet()).replaceSync(this.cssText), e8 && o.set(s4, t5));
      }
      return t5;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t5) => new n("string" == typeof t5 ? t5 : t5 + "", void 0, s);
  var i = (t5, ...e8) => {
    const o8 = 1 === t5.length ? t5[0] : e8.reduce((e9, s4, o9) => e9 + ((t6) => {
      if (true === t6._$cssResult$) return t6.cssText;
      if ("number" == typeof t6) return t6;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t6 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s4) + t5[o9 + 1], t5[0]);
    return new n(o8, t5, s);
  };
  var S = (s4, o8) => {
    if (e) s4.adoptedStyleSheets = o8.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet);
    else for (const e8 of o8) {
      const o9 = document.createElement("style"), n7 = t.litNonce;
      void 0 !== n7 && o9.setAttribute("nonce", n7), o9.textContent = e8.cssText, s4.appendChild(o9);
    }
  };
  var c = e ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
    let e8 = "";
    for (const s4 of t6.cssRules) e8 += s4.cssText;
    return r(e8);
  })(t5) : t5;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t5, s4) => t5;
  var u = { toAttribute(t5, s4) {
    switch (s4) {
      case Boolean:
        t5 = t5 ? l : null;
        break;
      case Object:
      case Array:
        t5 = null == t5 ? t5 : JSON.stringify(t5);
    }
    return t5;
  }, fromAttribute(t5, s4) {
    let i7 = t5;
    switch (s4) {
      case Boolean:
        i7 = null !== t5;
        break;
      case Number:
        i7 = null === t5 ? null : Number(t5);
        break;
      case Object:
      case Array:
        try {
          i7 = JSON.parse(t5);
        } catch (t6) {
          i7 = null;
        }
    }
    return i7;
  } };
  var f = (t5, s4) => !i2(t5, s4);
  var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
  Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  var y = class extends HTMLElement {
    static addInitializer(t5) {
      this._$Ei(), (this.l ??= []).push(t5);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t5, s4 = b) {
      if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t5) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t5, s4), !s4.noAccessor) {
        const i7 = Symbol(), h3 = this.getPropertyDescriptor(t5, i7, s4);
        void 0 !== h3 && e2(this.prototype, t5, h3);
      }
    }
    static getPropertyDescriptor(t5, s4, i7) {
      const { get: e8, set: r7 } = h(this.prototype, t5) ?? { get() {
        return this[s4];
      }, set(t6) {
        this[s4] = t6;
      } };
      return { get: e8, set(s5) {
        const h3 = e8?.call(this);
        r7?.call(this, s5), this.requestUpdate(t5, h3, i7);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t5) {
      return this.elementProperties.get(t5) ?? b;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties"))) return;
      const t5 = n2(this);
      t5.finalize(), void 0 !== t5.l && (this.l = [...t5.l]), this.elementProperties = new Map(t5.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t6 = this.properties, s4 = [...r2(t6), ...o2(t6)];
        for (const i7 of s4) this.createProperty(i7, t6[i7]);
      }
      const t5 = this[Symbol.metadata];
      if (null !== t5) {
        const s4 = litPropertyMetadata.get(t5);
        if (void 0 !== s4) for (const [t6, i7] of s4) this.elementProperties.set(t6, i7);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t6, s4] of this.elementProperties) {
        const i7 = this._$Eu(t6, s4);
        void 0 !== i7 && this._$Eh.set(i7, t6);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s4) {
      const i7 = [];
      if (Array.isArray(s4)) {
        const e8 = new Set(s4.flat(1 / 0).reverse());
        for (const s5 of e8) i7.unshift(c(s5));
      } else void 0 !== s4 && i7.push(c(s4));
      return i7;
    }
    static _$Eu(t5, s4) {
      const i7 = s4.attribute;
      return false === i7 ? void 0 : "string" == typeof i7 ? i7 : "string" == typeof t5 ? t5.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise((t5) => this.enableUpdating = t5), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t5) => t5(this));
    }
    addController(t5) {
      (this._$EO ??= /* @__PURE__ */ new Set()).add(t5), void 0 !== this.renderRoot && this.isConnected && t5.hostConnected?.();
    }
    removeController(t5) {
      this._$EO?.delete(t5);
    }
    _$E_() {
      const t5 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
      for (const i7 of s4.keys()) this.hasOwnProperty(i7) && (t5.set(i7, this[i7]), delete this[i7]);
      t5.size > 0 && (this._$Ep = t5);
    }
    createRenderRoot() {
      const t5 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t5, this.constructor.elementStyles), t5;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t5) => t5.hostConnected?.());
    }
    enableUpdating(t5) {
    }
    disconnectedCallback() {
      this._$EO?.forEach((t5) => t5.hostDisconnected?.());
    }
    attributeChangedCallback(t5, s4, i7) {
      this._$AK(t5, i7);
    }
    _$ET(t5, s4) {
      const i7 = this.constructor.elementProperties.get(t5), e8 = this.constructor._$Eu(t5, i7);
      if (void 0 !== e8 && true === i7.reflect) {
        const h3 = (void 0 !== i7.converter?.toAttribute ? i7.converter : u).toAttribute(s4, i7.type);
        this._$Em = t5, null == h3 ? this.removeAttribute(e8) : this.setAttribute(e8, h3), this._$Em = null;
      }
    }
    _$AK(t5, s4) {
      const i7 = this.constructor, e8 = i7._$Eh.get(t5);
      if (void 0 !== e8 && this._$Em !== e8) {
        const t6 = i7.getPropertyOptions(e8), h3 = "function" == typeof t6.converter ? { fromAttribute: t6.converter } : void 0 !== t6.converter?.fromAttribute ? t6.converter : u;
        this._$Em = e8;
        const r7 = h3.fromAttribute(s4, t6.type);
        this[e8] = r7 ?? this._$Ej?.get(e8) ?? r7, this._$Em = null;
      }
    }
    requestUpdate(t5, s4, i7, e8 = false, h3) {
      if (void 0 !== t5) {
        const r7 = this.constructor;
        if (false === e8 && (h3 = this[t5]), i7 ??= r7.getPropertyOptions(t5), !((i7.hasChanged ?? f)(h3, s4) || i7.useDefault && i7.reflect && h3 === this._$Ej?.get(t5) && !this.hasAttribute(r7._$Eu(t5, i7)))) return;
        this.C(t5, s4, i7);
      }
      false === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t5, s4, { useDefault: i7, reflect: e8, wrapped: h3 }, r7) {
      i7 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t5) && (this._$Ej.set(t5, r7 ?? s4 ?? this[t5]), true !== h3 || void 0 !== r7) || (this._$AL.has(t5) || (this.hasUpdated || i7 || (s4 = void 0), this._$AL.set(t5, s4)), true === e8 && this._$Em !== t5 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t5));
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t6) {
        Promise.reject(t6);
      }
      const t5 = this.scheduleUpdate();
      return null != t5 && await t5, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t7, s5] of this._$Ep) this[t7] = s5;
          this._$Ep = void 0;
        }
        const t6 = this.constructor.elementProperties;
        if (t6.size > 0) for (const [s5, i7] of t6) {
          const { wrapped: t7 } = i7, e8 = this[s5];
          true !== t7 || this._$AL.has(s5) || void 0 === e8 || this.C(s5, void 0, i7, e8);
        }
      }
      let t5 = false;
      const s4 = this._$AL;
      try {
        t5 = this.shouldUpdate(s4), t5 ? (this.willUpdate(s4), this._$EO?.forEach((t6) => t6.hostUpdate?.()), this.update(s4)) : this._$EM();
      } catch (s5) {
        throw t5 = false, this._$EM(), s5;
      }
      t5 && this._$AE(s4);
    }
    willUpdate(t5) {
    }
    _$AE(t5) {
      this._$EO?.forEach((t6) => t6.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), this.updated(t5);
    }
    _$EM() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t5) {
      return true;
    }
    update(t5) {
      this._$Eq &&= this._$Eq.forEach((t6) => this._$ET(t6, this[t6])), this._$EM();
    }
    updated(t5) {
    }
    firstUpdated(t5) {
    }
  };
  y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.2");

  // node_modules/lit-html/lit-html.js
  var t2 = globalThis;
  var i3 = (t5) => t5;
  var s2 = t2.trustedTypes;
  var e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t5) => t5 }) : void 0;
  var h2 = "$lit$";
  var o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
  var n3 = "?" + o3;
  var r3 = `<${n3}>`;
  var l2 = document;
  var c3 = () => l2.createComment("");
  var a2 = (t5) => null === t5 || "object" != typeof t5 && "function" != typeof t5;
  var u2 = Array.isArray;
  var d2 = (t5) => u2(t5) || "function" == typeof t5?.[Symbol.iterator];
  var f2 = "[ 	\n\f\r]";
  var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var _ = /-->/g;
  var m = />/g;
  var p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var g = /'/g;
  var $ = /"/g;
  var y2 = /^(?:script|style|textarea|title)$/i;
  var x = (t5) => (i7, ...s4) => ({ _$litType$: t5, strings: i7, values: s4 });
  var b2 = x(1);
  var w = x(2);
  var T = x(3);
  var E = Symbol.for("lit-noChange");
  var A = Symbol.for("lit-nothing");
  var C = /* @__PURE__ */ new WeakMap();
  var P = l2.createTreeWalker(l2, 129);
  function V(t5, i7) {
    if (!u2(t5) || !t5.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== e3 ? e3.createHTML(i7) : i7;
  }
  var N = (t5, i7) => {
    const s4 = t5.length - 1, e8 = [];
    let n7, l5 = 2 === i7 ? "<svg>" : 3 === i7 ? "<math>" : "", c5 = v;
    for (let i8 = 0; i8 < s4; i8++) {
      const s5 = t5[i8];
      let a4, u4, d3 = -1, f3 = 0;
      for (; f3 < s5.length && (c5.lastIndex = f3, u4 = c5.exec(s5), null !== u4); ) f3 = c5.lastIndex, c5 === v ? "!--" === u4[1] ? c5 = _ : void 0 !== u4[1] ? c5 = m : void 0 !== u4[2] ? (y2.test(u4[2]) && (n7 = RegExp("</" + u4[2], "g")), c5 = p2) : void 0 !== u4[3] && (c5 = p2) : c5 === p2 ? ">" === u4[0] ? (c5 = n7 ?? v, d3 = -1) : void 0 === u4[1] ? d3 = -2 : (d3 = c5.lastIndex - u4[2].length, a4 = u4[1], c5 = void 0 === u4[3] ? p2 : '"' === u4[3] ? $ : g) : c5 === $ || c5 === g ? c5 = p2 : c5 === _ || c5 === m ? c5 = v : (c5 = p2, n7 = void 0);
      const x2 = c5 === p2 && t5[i8 + 1].startsWith("/>") ? " " : "";
      l5 += c5 === v ? s5 + r3 : d3 >= 0 ? (e8.push(a4), s5.slice(0, d3) + h2 + s5.slice(d3) + o3 + x2) : s5 + o3 + (-2 === d3 ? i8 : x2);
    }
    return [V(t5, l5 + (t5[s4] || "<?>") + (2 === i7 ? "</svg>" : 3 === i7 ? "</math>" : "")), e8];
  };
  var S2 = class _S {
    constructor({ strings: t5, _$litType$: i7 }, e8) {
      let r7;
      this.parts = [];
      let l5 = 0, a4 = 0;
      const u4 = t5.length - 1, d3 = this.parts, [f3, v2] = N(t5, i7);
      if (this.el = _S.createElement(f3, e8), P.currentNode = this.el.content, 2 === i7 || 3 === i7) {
        const t6 = this.el.content.firstChild;
        t6.replaceWith(...t6.childNodes);
      }
      for (; null !== (r7 = P.nextNode()) && d3.length < u4; ) {
        if (1 === r7.nodeType) {
          if (r7.hasAttributes()) for (const t6 of r7.getAttributeNames()) if (t6.endsWith(h2)) {
            const i8 = v2[a4++], s4 = r7.getAttribute(t6).split(o3), e9 = /([.?@])?(.*)/.exec(i8);
            d3.push({ type: 1, index: l5, name: e9[2], strings: s4, ctor: "." === e9[1] ? I : "?" === e9[1] ? L : "@" === e9[1] ? z : H }), r7.removeAttribute(t6);
          } else t6.startsWith(o3) && (d3.push({ type: 6, index: l5 }), r7.removeAttribute(t6));
          if (y2.test(r7.tagName)) {
            const t6 = r7.textContent.split(o3), i8 = t6.length - 1;
            if (i8 > 0) {
              r7.textContent = s2 ? s2.emptyScript : "";
              for (let s4 = 0; s4 < i8; s4++) r7.append(t6[s4], c3()), P.nextNode(), d3.push({ type: 2, index: ++l5 });
              r7.append(t6[i8], c3());
            }
          }
        } else if (8 === r7.nodeType) if (r7.data === n3) d3.push({ type: 2, index: l5 });
        else {
          let t6 = -1;
          for (; -1 !== (t6 = r7.data.indexOf(o3, t6 + 1)); ) d3.push({ type: 7, index: l5 }), t6 += o3.length - 1;
        }
        l5++;
      }
    }
    static createElement(t5, i7) {
      const s4 = l2.createElement("template");
      return s4.innerHTML = t5, s4;
    }
  };
  function M(t5, i7, s4 = t5, e8) {
    if (i7 === E) return i7;
    let h3 = void 0 !== e8 ? s4._$Co?.[e8] : s4._$Cl;
    const o8 = a2(i7) ? void 0 : i7._$litDirective$;
    return h3?.constructor !== o8 && (h3?._$AO?.(false), void 0 === o8 ? h3 = void 0 : (h3 = new o8(t5), h3._$AT(t5, s4, e8)), void 0 !== e8 ? (s4._$Co ??= [])[e8] = h3 : s4._$Cl = h3), void 0 !== h3 && (i7 = M(t5, h3._$AS(t5, i7.values), h3, e8)), i7;
  }
  var R = class {
    constructor(t5, i7) {
      this._$AV = [], this._$AN = void 0, this._$AD = t5, this._$AM = i7;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t5) {
      const { el: { content: i7 }, parts: s4 } = this._$AD, e8 = (t5?.creationScope ?? l2).importNode(i7, true);
      P.currentNode = e8;
      let h3 = P.nextNode(), o8 = 0, n7 = 0, r7 = s4[0];
      for (; void 0 !== r7; ) {
        if (o8 === r7.index) {
          let i8;
          2 === r7.type ? i8 = new k(h3, h3.nextSibling, this, t5) : 1 === r7.type ? i8 = new r7.ctor(h3, r7.name, r7.strings, this, t5) : 6 === r7.type && (i8 = new Z(h3, this, t5)), this._$AV.push(i8), r7 = s4[++n7];
        }
        o8 !== r7?.index && (h3 = P.nextNode(), o8++);
      }
      return P.currentNode = l2, e8;
    }
    p(t5) {
      let i7 = 0;
      for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t5, s4, i7), i7 += s4.strings.length - 2) : s4._$AI(t5[i7])), i7++;
    }
  };
  var k = class _k {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t5, i7, s4, e8) {
      this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t5, this._$AB = i7, this._$AM = s4, this.options = e8, this._$Cv = e8?.isConnected ?? true;
    }
    get parentNode() {
      let t5 = this._$AA.parentNode;
      const i7 = this._$AM;
      return void 0 !== i7 && 11 === t5?.nodeType && (t5 = i7.parentNode), t5;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t5, i7 = this) {
      t5 = M(this, t5, i7), a2(t5) ? t5 === A || null == t5 || "" === t5 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t5 !== this._$AH && t5 !== E && this._(t5) : void 0 !== t5._$litType$ ? this.$(t5) : void 0 !== t5.nodeType ? this.T(t5) : d2(t5) ? this.k(t5) : this._(t5);
    }
    O(t5) {
      return this._$AA.parentNode.insertBefore(t5, this._$AB);
    }
    T(t5) {
      this._$AH !== t5 && (this._$AR(), this._$AH = this.O(t5));
    }
    _(t5) {
      this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t5 : this.T(l2.createTextNode(t5)), this._$AH = t5;
    }
    $(t5) {
      const { values: i7, _$litType$: s4 } = t5, e8 = "number" == typeof s4 ? this._$AC(t5) : (void 0 === s4.el && (s4.el = S2.createElement(V(s4.h, s4.h[0]), this.options)), s4);
      if (this._$AH?._$AD === e8) this._$AH.p(i7);
      else {
        const t6 = new R(e8, this), s5 = t6.u(this.options);
        t6.p(i7), this.T(s5), this._$AH = t6;
      }
    }
    _$AC(t5) {
      let i7 = C.get(t5.strings);
      return void 0 === i7 && C.set(t5.strings, i7 = new S2(t5)), i7;
    }
    k(t5) {
      u2(this._$AH) || (this._$AH = [], this._$AR());
      const i7 = this._$AH;
      let s4, e8 = 0;
      for (const h3 of t5) e8 === i7.length ? i7.push(s4 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s4 = i7[e8], s4._$AI(h3), e8++;
      e8 < i7.length && (this._$AR(s4 && s4._$AB.nextSibling, e8), i7.length = e8);
    }
    _$AR(t5 = this._$AA.nextSibling, s4) {
      for (this._$AP?.(false, true, s4); t5 !== this._$AB; ) {
        const s5 = i3(t5).nextSibling;
        i3(t5).remove(), t5 = s5;
      }
    }
    setConnected(t5) {
      void 0 === this._$AM && (this._$Cv = t5, this._$AP?.(t5));
    }
  };
  var H = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t5, i7, s4, e8, h3) {
      this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t5, this.name = i7, this._$AM = e8, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = A;
    }
    _$AI(t5, i7 = this, s4, e8) {
      const h3 = this.strings;
      let o8 = false;
      if (void 0 === h3) t5 = M(this, t5, i7, 0), o8 = !a2(t5) || t5 !== this._$AH && t5 !== E, o8 && (this._$AH = t5);
      else {
        const e9 = t5;
        let n7, r7;
        for (t5 = h3[0], n7 = 0; n7 < h3.length - 1; n7++) r7 = M(this, e9[s4 + n7], i7, n7), r7 === E && (r7 = this._$AH[n7]), o8 ||= !a2(r7) || r7 !== this._$AH[n7], r7 === A ? t5 = A : t5 !== A && (t5 += (r7 ?? "") + h3[n7 + 1]), this._$AH[n7] = r7;
      }
      o8 && !e8 && this.j(t5);
    }
    j(t5) {
      t5 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t5 ?? "");
    }
  };
  var I = class extends H {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t5) {
      this.element[this.name] = t5 === A ? void 0 : t5;
    }
  };
  var L = class extends H {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t5) {
      this.element.toggleAttribute(this.name, !!t5 && t5 !== A);
    }
  };
  var z = class extends H {
    constructor(t5, i7, s4, e8, h3) {
      super(t5, i7, s4, e8, h3), this.type = 5;
    }
    _$AI(t5, i7 = this) {
      if ((t5 = M(this, t5, i7, 0) ?? A) === E) return;
      const s4 = this._$AH, e8 = t5 === A && s4 !== A || t5.capture !== s4.capture || t5.once !== s4.once || t5.passive !== s4.passive, h3 = t5 !== A && (s4 === A || e8);
      e8 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t5), this._$AH = t5;
    }
    handleEvent(t5) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t5) : this._$AH.handleEvent(t5);
    }
  };
  var Z = class {
    constructor(t5, i7, s4) {
      this.element = t5, this.type = 6, this._$AN = void 0, this._$AM = i7, this.options = s4;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t5) {
      M(this, t5);
    }
  };
  var j = { M: h2, P: o3, A: n3, C: 1, L: N, R, D: d2, V: M, I: k, H, N: L, U: z, B: I, F: Z };
  var B = t2.litHtmlPolyfillSupport;
  B?.(S2, k), (t2.litHtmlVersions ??= []).push("3.3.2");
  var D = (t5, i7, s4) => {
    const e8 = s4?.renderBefore ?? i7;
    let h3 = e8._$litPart$;
    if (void 0 === h3) {
      const t6 = s4?.renderBefore ?? null;
      e8._$litPart$ = h3 = new k(i7.insertBefore(c3(), t6), t6, void 0, s4 ?? {});
    }
    return h3._$AI(t5), h3;
  };

  // node_modules/lit-element/lit-element.js
  var s3 = globalThis;
  var i4 = class extends y {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      const t5 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t5.firstChild, t5;
    }
    update(t5) {
      const r7 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t5), this._$Do = D(r7, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return E;
    }
  };
  i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
  var o4 = s3.litElementPolyfillSupport;
  o4?.({ LitElement: i4 });
  (s3.litElementVersions ??= []).push("4.2.2");

  // node_modules/@lit/reactive-element/decorators/property.js
  var o5 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  var r4 = (t5 = o5, e8, r7) => {
    const { kind: n7, metadata: i7 } = r7;
    let s4 = globalThis.litPropertyMetadata.get(i7);
    if (void 0 === s4 && globalThis.litPropertyMetadata.set(i7, s4 = /* @__PURE__ */ new Map()), "setter" === n7 && ((t5 = Object.create(t5)).wrapped = true), s4.set(r7.name, t5), "accessor" === n7) {
      const { name: o8 } = r7;
      return { set(r8) {
        const n8 = e8.get.call(this);
        e8.set.call(this, r8), this.requestUpdate(o8, n8, t5, true, r8);
      }, init(e9) {
        return void 0 !== e9 && this.C(o8, void 0, t5, e9), e9;
      } };
    }
    if ("setter" === n7) {
      const { name: o8 } = r7;
      return function(r8) {
        const n8 = this[o8];
        e8.call(this, r8), this.requestUpdate(o8, n8, t5, true, r8);
      };
    }
    throw Error("Unsupported decorator location: " + n7);
  };
  function n5(t5) {
    return (e8, o8) => "object" == typeof o8 ? r4(t5, e8, o8) : ((t6, e9, o9) => {
      const r7 = e9.hasOwnProperty(o9);
      return e9.constructor.createProperty(o9, t6), r7 ? Object.getOwnPropertyDescriptor(e9, o9) : void 0;
    })(t5, e8, o8);
  }

  // node_modules/@lit/reactive-element/decorators/state.js
  function r5(r7) {
    return n5({ ...r7, state: true, attribute: false });
  }

  // node_modules/@lit/reactive-element/decorators/base.js
  var e4 = (e8, t5, c5) => (c5.configurable = true, c5.enumerable = true, Reflect.decorate && "object" != typeof t5 && Object.defineProperty(e8, t5, c5), c5);

  // node_modules/@lit/reactive-element/decorators/query.js
  function e5(e8, r7) {
    return (n7, s4, i7) => {
      const o8 = (t5) => t5.renderRoot?.querySelector(e8) ?? null;
      if (r7) {
        const { get: e9, set: r8 } = "object" == typeof s4 ? n7 : i7 ?? (() => {
          const t5 = Symbol();
          return { get() {
            return this[t5];
          }, set(e10) {
            this[t5] = e10;
          } };
        })();
        return e4(n7, s4, { get() {
          let t5 = e9.call(this);
          return void 0 === t5 && (t5 = o8(this), (null !== t5 || this.hasUpdated) && r8.call(this, t5)), t5;
        } });
      }
      return e4(n7, s4, { get() {
        return o8(this);
      } });
    };
  }

  // dist/controllers/scroll.js
  var lock = {
    class: "hmwc-scroll-lock",
    prop: "--hmwc-scroll-lock-size"
  };
  var ScrollController = class _ScrollController {
    /** Returns the width of the document's scrollbar */
    get scrollbarWidth() {
      const width = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - width);
    }
    /**
     * Prevents body scrolling. Keeps track of which elements requested a lock so
     * multiple levels of locking are possible without premature unlocking.
     */
    lockBodyScrolling(element) {
      _ScrollController.locks.add(element);
      if (document.body.classList.contains(lock.class))
        return;
      const width = this.scrollbarWidth;
      document.body.classList.add(lock.class);
      document.body.style.setProperty(lock.prop, `${width}px`);
    }
    /**
     * Unlocks body scrolling. Scrolling will only be unlocked once all elements
     * that requested a lock call this method.
     */
    unlockBodyScrolling(element) {
      _ScrollController.locks.delete(element);
      if (_ScrollController.locks.size > 0)
        return;
      document.body.classList.remove(lock.class);
      document.body.style.removeProperty(lock.prop);
    }
    /** Scrolls an element into view of its container. If the element is already in view, nothing will happen. */
    scrollIntoView(element, container, direction = "vertical", behavior = "smooth") {
      const offset = {
        top: Math.round(element.getBoundingClientRect().top - container.getBoundingClientRect().top),
        left: Math.round(element.getBoundingClientRect().left - container.getBoundingClientRect().left)
      };
      const offsetTop = offset.top + container.scrollTop;
      const offsetLeft = offset.left + container.scrollLeft;
      const minX = container.scrollLeft;
      const maxX = container.scrollLeft + container.offsetWidth;
      const minY = container.scrollTop;
      const maxY = container.scrollTop + container.offsetHeight;
      if (direction === "horizontal" || direction === "both") {
        if (offsetLeft < minX) {
          container.scrollTo({ left: offsetLeft, behavior });
        } else if (offsetLeft + element.clientWidth > maxX) {
          container.scrollTo({
            left: offsetLeft - container.offsetWidth + element.clientWidth,
            behavior
          });
        }
      }
      if (direction === "vertical" || direction === "both") {
        if (offsetTop < minY) {
          container.scrollTo({ top: offsetTop, behavior });
        } else if (offsetTop + element.clientHeight > maxY) {
          container.scrollTo({
            top: offsetTop - container.offsetHeight + element.clientHeight,
            behavior
          });
        }
      }
    }
    constructor(host) {
      this.host = host;
      host.addController(this);
    }
    hostConnected() {
    }
    hostDisconnected() {
    }
  };
  ScrollController.locks = /* @__PURE__ */ new Set();
  var scroll_default = ScrollController;

  // dist/controllers/slot.js
  var SlotController = class {
    /** Returns true if the host element contains a default slot. */
    hasDefaultSlot() {
      return Array.from(this.host.childNodes).some((node) => {
        const isText = node.nodeType === node.TEXT_NODE;
        const isElement = node.nodeType === node.ELEMENT_NODE;
        const isEmpty = node.textContent.trim() === "";
        const isSlot = node.parentElement?.hasAttribute("slot");
        return isText && !isEmpty || isElement && !isSlot;
      });
    }
    /** Returns true if the host element contains a slot with the provided name. */
    hasNamedSlot(name) {
      const query = `[slot="${name}"]`;
      return this.host.querySelector(query) !== null;
    }
    /** Returns the default slot content from the host element. */
    getDefaultSlot() {
      return Array.from(this.host.children).filter((node) => {
        const isText = node.nodeType === node.TEXT_NODE;
        const isElement = node.nodeType === node.ELEMENT_NODE;
        const isEmpty = node.textContent.trim() === "";
        const isSlot = node.parentElement?.hasAttribute("slot");
        if (node.slot)
          return false;
        return isText && !isEmpty || isElement && !isSlot;
      });
    }
    /** Returns the named slot content from the host element. */
    getNamedSlot(name) {
      const query = `[slot="${name}"]`;
      return this.host.querySelector(query);
    }
    insert(element, slotName) {
      const slots = Array.from(this.host.shadowRoot?.querySelectorAll("slot") || []);
      if (!slotName)
        slots.filter((slot) => !slot.name)[0]?.appendChild(element);
      else
        slots.find((slot) => slot.name === slotName)?.appendChild(element);
    }
    prepend(element, slotName) {
      const slots = Array.from(this.host.shadowRoot?.querySelectorAll("slot") || []);
      if (!slotName)
        slots.filter((slot) => !slot.name)[0]?.prepend(element);
      else
        slots.find((slot) => slot.name === slotName)?.prepend(element);
    }
    /** Checks whether the provided slot exists on the host element. */
    test(slotName) {
      if (!slotName)
        return this.hasDefaultSlot();
      else
        return this.hasNamedSlot(slotName);
    }
    /** Returns the content of the provided slot from the host element. */
    get(slotName) {
      if (!slotName) {
        return this.getDefaultSlot();
      } else {
        const slot = this.getNamedSlot(slotName);
        return slot ? [slot] : [];
      }
    }
    constructor(host) {
      this.slots = [];
      this.handleUpdate = (event) => {
        const slot = event.target;
        const isDefaultSlot = this.slots.includes("[default]") && !slot.name;
        const isNamedSlot = slot.name && this.slots.includes(slot.name);
        if (!isDefaultSlot && !isNamedSlot)
          return;
        this.host.requestUpdate();
      };
      this.host = host;
      this.slots = host.constructor.slots;
      host.addController(this);
    }
    hostConnected() {
      this.root = this.host.shadowRoot;
      this.root?.addEventListener("slotchange", this.handleUpdate);
    }
    hostDisconnected() {
      this.root?.removeEventListener("slotchange", this.handleUpdate);
    }
  };

  // dist/decorators/watch.js
  function watch(propertyName, options) {
    const resolvedOptions = {
      waitUntilFirstUpdate: false,
      ...options
    };
    return (proto, decoratedFnName) => {
      const { update } = proto;
      const watchedProperties = Array.isArray(propertyName) ? propertyName : [propertyName];
      proto.update = function(changedProps) {
        if (!changedProps)
          return;
        watchedProperties.forEach((property) => {
          const key = property;
          if (changedProps.has(key)) {
            const oldValue = changedProps.get(key);
            const newValue = this[key];
            if (oldValue !== newValue) {
              if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
                ;
                this[decoratedFnName](oldValue, newValue);
              }
            }
          }
        });
        update.call(this, changedProps);
      };
    };
  }

  // dist/models/component/component.styles.js
  var styles = i`
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

  :host {
    form {
      display: contents;
    }
  }
`;

  // dist/models/component/component.component.js
  var __decorate = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var __classPrivateFieldGet = function(receiver, state, kind, f3) {
    if (kind === "a" && !f3) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f3 : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f3 : kind === "a" ? f3.call(receiver) : f3 ? f3.value : state.get(receiver);
  };
  var __classPrivateFieldSet = function(receiver, state, value, kind, f3) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f3) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f3 : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f3.call(receiver, value) : f3 ? f3.value = value : state.set(receiver, value), value;
  };
  var _HMWCComponent_hasRecordedInitialProperties;
  var HMWCComponent = class extends i4 {
    static get styles() {
      const derivedStyles = this._styles ? this._styles : [];
      return [styles, ...Array.isArray(derivedStyles) ? derivedStyles : [derivedStyles]];
    }
    static set styles(styles52) {
      const derivedStyles = this._styles ? this._styles : [];
      this._styles = [derivedStyles, styles52];
    }
    tooltipChanged() {
      if (this.tooltip) {
        if (this._tooltipEl) {
          this._tooltipEl.textContent = this.tooltip;
        } else {
          this._setupTooltip();
        }
      } else {
        this._teardownTooltip();
      }
    }
    spanChanged() {
      if (!this.span) {
        this.style.removeProperty("--colspan");
        this.style.removeProperty("--rowspan");
      } else {
        this.reposition();
      }
    }
    emit(name, options) {
      const event = new CustomEvent(name, { bubbles: true, cancelable: false, composed: true, detail: {}, ...options });
      this.dispatchEvent(event);
      return event;
    }
    changeStep(step) {
      this.controllers.form?.changeStep(step);
    }
    /**
     * Registers an element with the custom-elements
     * registry.
     *
     * - Used for loading dependencies.
     * - Ensures the element is available for use in the DOM.
     * - If the element has already been registered, it is
     *   ignored.
     */
    static define(name, element = this) {
      if (customElements.get(name))
        return;
      customElements.define(name, class extends element {
      });
    }
    /**
     * Applies custom css properties to the component which
     * control the placement of the component within the
     * parent grid.
     *
     * - Sets the `grid-column` and `grid-row` CSS properties
     *  of a component
     *   to span the full width or height of its parent grid.
     */
    reposition() {
      const grid = this.parentElement;
      const span = { cols: 1, rows: 1 };
      if (this.span === true) {
        span.cols = grid.cols;
      } else if (this.span instanceof Array) {
        span.cols = this.span[0] === true ? grid.cols : this.span[0] || 1;
        span.rows = this.span[1] === true ? grid.rows : this.span[1] || 1;
      } else {
        span.cols = this.span || span.cols;
      }
      span.cols > 1 && this.style.setProperty("--colspan", `${span.cols}`);
      span.rows > 1 && this.style.setProperty("--rowspan", `${span.rows + 1}`);
      const properties = ["col", "row", "justify"];
      properties.forEach((property) => {
        const value = this[property];
        value && this.style.setProperty(`--${property}`, `${value}`);
      });
    }
    /**
     * Applies custom css properties to the component based
     * on the properties set.
     */
    applyStyles() {
      const spacing = {
        xxs: "0.125rem",
        xs: "var(--hmwc-spacing-3x-small)",
        sm: "var(--hmwc-spacing-2x-small)",
        md: "var(--hmwc-spacing-x-small)",
        lg: "var(--hmwc-spacing-large)",
        xl: "var(--hmwc-spacing-x-large)",
        xxl: "var(--hmwc-spacing-2x-large)",
        auto: "auto"
      };
      if (this.top) {
        this.style.setProperty("--top", `${spacing[this.top]}`);
      }
      if (this.bottom) {
        this.style.setProperty("--bottom", `${spacing[this.bottom]}`);
      }
    }
    /**
     * Applies custom css properties to the component which
     * adds an animation to the component when it is loaded in
     * the DOM.
     */
    applyAnimation() {
      const animateElements = ["HMWC-CARD", "HMWC-ALERT", "HMWC-ACCORDION", "HMWC-ACCORDION-GROUP"];
      if (animateElements.includes(this.tagName)) {
        this.style.setProperty("--animation", "scale-in");
      }
      if (!this.animation)
        return;
      if (!(this.animation instanceof Object)) {
        this.style.setProperty("--animation", `${this.animation}`);
      } else {
        this.animation.name && this.style.setProperty("--animation", `${this.animation.name}`);
        this.animation.duration && this.style.setProperty("--animation-duration", `${this.animation.duration}ms`);
        this.animation.easing && this.style.setProperty("--animation-easing", `${this.animation.easing}`);
      }
    }
    firstUpdated(_changedProperties) {
      super.firstUpdated(_changedProperties);
    }
    connectedCallback() {
      super.connectedCallback();
      if (this.parentElement?.tagName === "HMWC-GRID")
        this.reposition();
      this.applyStyles();
      this.applyAnimation();
      if (this.notificationStack)
        this._ensureStackContainer();
      if (this.tooltip)
        this._setupTooltip();
    }
    /** Creates the notification stack container for this host. */
    _ensureStackContainer() {
      if (this._stackContainer)
        return;
      this._stackContainer = Object.assign(document.createElement("div"), {
        className: "hmwc-notification-stack"
      });
      if (!this.global)
        this.style.position = "relative";
      this.appendChild(this._stackContainer);
    }
    /**
     * Positions the portal tooltip relative to the host
     * element using `getBoundingClientRect()`.
     */
    _positionTooltip() {
      if (!this._tooltipEl)
        return;
      const anchor = this.getBoundingClientRect();
      const tip = this._tooltipEl.getBoundingClientRect();
      const placement = this.tooltipPlacement || "top";
      const distance = 6;
      let top = 0;
      let left = 0;
      switch (placement) {
        case "top":
        default:
          top = anchor.top - tip.height - distance;
          left = anchor.left + anchor.width / 2 - tip.width / 2;
          break;
        case "top-start":
          top = anchor.top - tip.height - distance;
          left = anchor.left;
          break;
        case "top-end":
          top = anchor.top - tip.height - distance;
          left = anchor.right - tip.width;
          break;
        case "bottom":
          top = anchor.bottom + distance;
          left = anchor.left + anchor.width / 2 - tip.width / 2;
          break;
        case "bottom-start":
          top = anchor.bottom + distance;
          left = anchor.left;
          break;
        case "bottom-end":
          top = anchor.bottom + distance;
          left = anchor.right - tip.width;
          break;
        case "left":
          top = anchor.top + anchor.height / 2 - tip.height / 2;
          left = anchor.left - tip.width - distance;
          break;
        case "left-start":
          top = anchor.top;
          left = anchor.left - tip.width - distance;
          break;
        case "left-end":
          top = anchor.bottom - tip.height;
          left = anchor.left - tip.width - distance;
          break;
        case "right":
          top = anchor.top + anchor.height / 2 - tip.height / 2;
          left = anchor.right + distance;
          break;
        case "right-start":
          top = anchor.top;
          left = anchor.right + distance;
          break;
        case "right-end":
          top = anchor.bottom - tip.height;
          left = anchor.right + distance;
          break;
      }
      this._tooltipEl.style.top = `${top}px`;
      this._tooltipEl.style.left = `${left}px`;
    }
    /**
     * Creates a floating tooltip portal anchored to this
     * element. The tooltip is appended directly to
     * `document.body` and positioned via JS using
     * `getBoundingClientRect()`, leaving the component's
     * DOM position completely untouched.
     */
    _setupTooltip() {
      if (this._tooltipEl)
        return;
      const el = document.createElement("div");
      el.setAttribute("role", "tooltip");
      el.setAttribute("aria-live", "off");
      el.textContent = this.tooltip || "";
      Object.assign(el.style, {
        display: "none",
        position: "fixed",
        width: "max-content",
        maxWidth: "20rem",
        borderRadius: "var(--hmwc-tooltip-border-radius)",
        backgroundColor: "var(--hmwc-tooltip-background-color)",
        fontFamily: "var(--hmwc-tooltip-font-family)",
        fontSize: "var(--hmwc-tooltip-font-size)",
        fontWeight: "var(--hmwc-tooltip-font-weight)",
        lineHeight: "var(--hmwc-tooltip-line-height)",
        color: "var(--hmwc-tooltip-color)",
        padding: "var(--hmwc-tooltip-padding)",
        pointerEvents: "none",
        userSelect: "none",
        zIndex: "var(--hmwc-z-index-tooltip)"
      });
      this._tooltipEl = el;
      document.body.appendChild(el);
      this.addEventListener("mouseenter", this._tooltipShow);
      this.addEventListener("mouseleave", this._tooltipHide);
      this.addEventListener("focusin", this._tooltipShow);
      this.addEventListener("focusout", this._tooltipHide);
      document.addEventListener("keydown", this._tooltipKeyDown);
    }
    /**
     * Removes the floating tooltip portal from the DOM and
     * cleans up all associated event listeners.
     */
    _teardownTooltip() {
      if (this._tooltipEl) {
        this._tooltipEl.remove();
        this._tooltipEl = void 0;
      }
      clearTimeout(this._tooltipTimeout);
      this.removeEventListener("mouseenter", this._tooltipShow);
      this.removeEventListener("mouseleave", this._tooltipHide);
      this.removeEventListener("focusin", this._tooltipShow);
      this.removeEventListener("focusout", this._tooltipHide);
      document.removeEventListener("keydown", this._tooltipKeyDown);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this._teardownTooltip();
    }
    constructor() {
      super();
      this.controllers = this._createControllers();
      this._tooltipShow = () => {
        if (!this._tooltipEl)
          return;
        clearTimeout(this._tooltipTimeout);
        this._tooltipTimeout = window.setTimeout(() => {
          if (this._tooltipEl) {
            this._tooltipEl.style.display = "block";
            this._tooltipEl.setAttribute("aria-live", "polite");
            this._positionTooltip();
          }
        }, 150);
      };
      this._tooltipHide = () => {
        if (!this._tooltipEl)
          return;
        clearTimeout(this._tooltipTimeout);
        this._tooltipTimeout = window.setTimeout(() => {
          if (this._tooltipEl) {
            this._tooltipEl.style.display = "none";
            this._tooltipEl.setAttribute("aria-live", "off");
          }
        }, 150);
      };
      this._tooltipKeyDown = (event) => {
        if (event.key === "Escape" && this._tooltipEl) {
          this._tooltipEl.style.display = "none";
        }
      };
      _HMWCComponent_hasRecordedInitialProperties.set(
        this,
        false
        // Store the constructor value of all `static properties = {}`
      );
      this.initialReflectedProperties = /* @__PURE__ */ new Map();
    }
    _createControllers() {
      let _slot;
      let _scroll;
      const host = this;
      return {
        get slot() {
          return _slot ??= new SlotController(host);
        },
        get scroll() {
          return _scroll ??= new scroll_default(host);
        }
      };
    }
    attributeChangedCallback(name, oldValue, newValue) {
      if (!__classPrivateFieldGet(this, _HMWCComponent_hasRecordedInitialProperties, "f")) {
        ;
        this.constructor.elementProperties.forEach((obj, prop) => {
          if (obj.reflect && this[prop] != null) {
            this.initialReflectedProperties.set(prop, this[prop]);
          }
        });
        __classPrivateFieldSet(this, _HMWCComponent_hasRecordedInitialProperties, true, "f");
      }
      super.attributeChangedCallback(name, oldValue, newValue);
    }
    //@ts-expect-error error
    willUpdate(changedProperties) {
      super.willUpdate(changedProperties);
      this.initialReflectedProperties.forEach((value, prop) => {
        if (changedProperties.has(prop) && this[prop] == null) {
          ;
          this[prop] = value;
        }
      });
    }
  };
  _HMWCComponent_hasRecordedInitialProperties = /* @__PURE__ */ new WeakMap();
  HMWCComponent.dependencies = [];
  HMWCComponent.slots = [];
  __decorate([
    n5({ type: String })
  ], HMWCComponent.prototype, "tooltip", void 0);
  __decorate([
    n5({ type: String, attribute: "tooltip-placement" })
  ], HMWCComponent.prototype, "tooltipPlacement", void 0);
  __decorate([
    watch("tooltip")
  ], HMWCComponent.prototype, "tooltipChanged", null);
  __decorate([
    n5({ type: Boolean, reflect: true })
  ], HMWCComponent.prototype, "notificationStack", void 0);
  __decorate([
    n5({ type: Boolean, reflect: true })
  ], HMWCComponent.prototype, "global", void 0);
  __decorate([
    n5({ type: Boolean })
  ], HMWCComponent.prototype, "formTemplate", void 0);
  __decorate([
    n5({ type: Boolean })
  ], HMWCComponent.prototype, "formGroup", void 0);
  __decorate([
    n5({ type: String })
  ], HMWCComponent.prototype, "name", void 0);
  __decorate([
    n5({ type: Number })
  ], HMWCComponent.prototype, "step", void 0);
  __decorate([
    n5({ type: Object })
  ], HMWCComponent.prototype, "animation", void 0);
  __decorate([
    n5({ type: Number })
  ], HMWCComponent.prototype, "span", void 0);
  __decorate([
    n5({ type: Number })
  ], HMWCComponent.prototype, "col", void 0);
  __decorate([
    n5({ type: Number })
  ], HMWCComponent.prototype, "row", void 0);
  __decorate([
    n5({ type: String })
  ], HMWCComponent.prototype, "justify", void 0);
  __decorate([
    n5({ type: String })
  ], HMWCComponent.prototype, "top", void 0);
  __decorate([
    n5({ type: String })
  ], HMWCComponent.prototype, "bottom", void 0);
  __decorate([
    watch("span")
  ], HMWCComponent.prototype, "spanChanged", null);

  // dist/models/form/form.component.js
  var __decorate2 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var HMWCFormComponent = class extends HMWCComponent {
    get() {
      if (this.toggleComponent)
        return this.checked;
      else
        return this.value;
    }
    set(value) {
      if (this.toggleComponent)
        this.checked = !!value;
      else
        this.value = value;
    }
    validate() {
      return true;
    }
    showValidity() {
    }
    /**
     * Checks for validity but does not show a validation message.
     * Returns true when valid and false when invalid.
     */
    checkValidity() {
      if (this.required && !this.value)
        return false;
      else
        return true;
    }
    /**
     * Checks for validity and shows the browser’s validation
     * message if the control is invalid.
     */
    reportValidity() {
      if (this.required && !this.value)
        return false;
      else
        return true;
    }
    hideValidation() {
    }
    connectedCallback() {
      super.connectedCallback();
    }
    constructor() {
      super();
      this.value = "";
    }
  };
  HMWCFormComponent.formComponent = true;
  __decorate2([
    n5({ type: String, reflect: true })
  ], HMWCFormComponent.prototype, "name", void 0);
  __decorate2([
    n5({ type: String, reflect: true })
  ], HMWCFormComponent.prototype, "value", void 0);
  __decorate2([
    n5({ type: Boolean, reflect: true })
  ], HMWCFormComponent.prototype, "checked", void 0);
  __decorate2([
    n5({ type: Boolean, reflect: true })
  ], HMWCFormComponent.prototype, "required", void 0);
  __decorate2([
    n5({ type: Boolean, reflect: true })
  ], HMWCFormComponent.prototype, "disabled", void 0);
  __decorate2([
    n5({ type: Boolean, reflect: true })
  ], HMWCFormComponent.prototype, "invalid", void 0);
  __decorate2([
    n5({ type: String })
  ], HMWCFormComponent.prototype, "error", void 0);
  __decorate2([
    n5({ type: String })
  ], HMWCFormComponent.prototype, "label", void 0);
  __decorate2([
    n5({ type: Boolean, reflect: true })
  ], HMWCFormComponent.prototype, "sm", void 0);
  __decorate2([
    n5({ type: Boolean, reflect: true })
  ], HMWCFormComponent.prototype, "md", void 0);
  __decorate2([
    n5({ type: Boolean, reflect: true })
  ], HMWCFormComponent.prototype, "lg", void 0);
  __decorate2([
    n5({ type: Boolean })
  ], HMWCFormComponent.prototype, "autofocus", void 0);

  // dist/controllers/form.js
  var FormController = class {
    /**
     * Enters edit mode by populating the form with data and
     * capturing a snapshot. The submit button stays disabled
     * until the user modifies a value.
     *
     * @param data The data to populate the form with.
     */
    edit(data) {
      this.setAll(data);
      this.editing = true;
      queueMicrotask(() => {
        this.snapshot = this.getFormData() ?? null;
        this.updateButtonState();
      });
    }
    /**
     * Exits edit mode and clears the snapshot.
     */
    cancelEdit() {
      this.editing = false;
      this.snapshot = null;
      this.updateButtonState();
    }
    /**
     * Returns whether the current form data differs from the
     * snapshot captured when edit mode was entered.
     */
    isDirty() {
      if (!this.editing || !this.snapshot)
        return true;
      const current = this.getFormData();
      if (!current)
        return false;
      return JSON.stringify(current) !== JSON.stringify(this.snapshot);
    }
    /**
     * Updates the value of a form component.
     */
    set(name, value) {
      if (!value)
        return;
      let parsedValue;
      try {
        parsedValue = JSON.parse(value);
      } catch {
        parsedValue = value;
      }
      const findComponent = (searchName) => {
        return this.components.find((c5) => {
          return c5.getAttribute("name") === searchName;
        });
      };
      const updateComponent = (comp, val) => {
        if (val && typeof val === "object" && !Array.isArray(val)) {
          if (comp.hasAttribute("formGroup")) {
            Array.from(comp.children).forEach((child) => {
              const childEl = child;
              if (!childEl.hasAttribute("name"))
                return;
              const childName = childEl.getAttribute("name");
              if (childName)
                updateComponent(childEl, val[childName]);
            });
          }
        }
        if (!this.FORM_COMPONENTS.includes(this.HMWCName(comp)) && (typeof val !== "object" || val === null)) {
          const innerComponents = this.getFormComponentsInElement(comp);
          innerComponents.forEach((inner) => updateComponent(inner, val));
          return;
        }
        if (!["checkbox", "switch"].includes(this.HMWCName(comp))) {
          const decoded = typeof val === "string" ? decodeURIComponent(val) : String(val ?? "");
          if (decoded == null || decoded === "null" || decoded === `""`)
            return;
          if (this.HMWCName(comp) === "input" && comp.getAttribute("type") === "date") {
            ;
            comp.initialValueDateParsed = false;
          }
          comp.setAttribute("value", decoded);
        } else {
          if (val === true || val === "true" || val === 1 || val === "1") {
            comp.setAttribute("checked", "true");
          } else {
            comp.removeAttribute("checked");
          }
        }
      };
      const component = findComponent(name);
      if (!component)
        return;
      if (component.hasAttribute("formGroup")) {
        if (Array.isArray(parsedValue)) {
          Array.from(component.children).forEach((child, i7) => {
            updateComponent(child, parsedValue[i7]);
          });
        } else if (parsedValue && typeof parsedValue === "object") {
          Object.keys(parsedValue).forEach((key) => {
            const _component = findComponent(key);
            if (_component)
              updateComponent(_component, parsedValue[key]);
          });
        }
      } else {
        updateComponent(component, parsedValue);
      }
    }
    /**
     * Updates the values of all form components.
     */
    setAll(data) {
      const _data = {};
      Object.keys(data).forEach((key) => {
        _data[key] = JSON.stringify(data[key]);
      });
      this.components.forEach((component) => {
        const compName = component.name ?? component.id;
        if (compName && Object.keys(data).includes(compName)) {
          this.set(compName, _data[compName]);
        }
      });
    }
    /**
     * Updates the validity of all form elements.
     *
     */
    validate() {
      this.components.forEach((component) => {
        if (!this.FORM_COMPONENTS.includes(this.HMWCName(component)))
          return;
        if (component.checkValidity) {
          component.invalid = !component.checkValidity();
          if (component.invalid) {
            component.scrollIntoView({
              behavior: "smooth",
              block: "center",
              // or 'center', 'end', 'nearest'
              inline: "nearest"
              // or 'start', 'center', 'end'
            });
          }
        }
      });
      this.updateButtonState();
    }
    /**
     * Checks the validity of the element and updates the
     * element accordingly.
     *
     * @param el The element to check the validity of.
     */
    validateEl(el) {
      if (el?.checkValidity)
        el.invalid = !el.checkValidity();
      this.updateButtonState();
    }
    /**
     * Clear the form data.
     */
    clear() {
      this.editing = false;
      this.snapshot = null;
      this.removeAllFromTemplates();
      this.components.forEach((el) => {
        el.setAttribute("value", "");
        el.removeAttribute("value");
        el.removeAttribute("checked");
        el.removeAttribute("invalid");
      });
    }
    /**
     * Submits the form by emitting the submit event with the
     * data from the form elements.
     *
     * @param e  The keyboard event that triggered the form submission.
     */
    submit(e8) {
      if (e8 && e8.key !== "Enter")
        return;
      const formData = this.getFormData(e8);
      this.host.emit("submit", { detail: { value: formData } });
      this.editing = false;
      this.snapshot = null;
      return formData;
    }
    changeStep(step) {
      this.step = step;
      this.updateStepUI();
      this.updateButtonState();
      this.host.emit("hmwc-change", { detail: { value: this.getFormData() } });
    }
    increment() {
      if (this.step === void 0)
        return;
      if (this.step < this.steps) {
        this.changeStep(this.step + 1);
      }
    }
    decrement() {
      if (this.step === void 0)
        return;
      if (this.step > 0) {
        this.changeStep(this.step - 1);
      }
    }
    /**
     * Collects form data from all form components.
     *
     * **formGroup behavior:**
     * - If children have `name` attributes → collects as object `{ childName: value }`
     * - If children don't have `name` attributes → collects as array `[value1, value2]`
     *
     * **formTemplate behavior:**
     * - Template rows are collected as array items within their parent formGroup
     * - The template itself is not included in the data
     *
     * @param e Optional keyboard event (for Enter key submission)
     * @returns Form data object or undefined if blocked by keyboard event
     */
    getFormData(e8) {
      if (e8 && e8?.key !== "Enter")
        return;
      if (e8 && this.HMWCName(document.activeElement || void 0) !== "input")
        return;
      e8 && e8.preventDefault();
      const data = {};
      const processedGroups = /* @__PURE__ */ new Set();
      this.components.forEach((component) => {
        if (component.hasAttribute("formGroup")) {
          if (processedGroups.has(component))
            return;
          const parentGroup = this.findFormGroup(component);
          if (parentGroup)
            return;
          processedGroups.add(component);
          const groupName = component.name;
          if (groupName) {
            data[groupName] = this.collectGroupData(component);
          }
          return;
        }
        if (!this.FORM_COMPONENTS.includes(this.HMWCName(component)))
          return;
        const formGroup = this.findFormGroup(component);
        if (formGroup) {
          if (processedGroups.has(formGroup))
            return;
          const parentOfGroup = this.findFormGroup(formGroup);
          if (parentOfGroup) {
            processedGroups.add(formGroup);
            return;
          }
          processedGroups.add(formGroup);
          const groupData = this.collectGroupData(formGroup);
          const groupName = formGroup.name;
          if (groupName) {
            data[groupName] = groupData;
          }
        } else {
          if (!component.name)
            return;
          const value = this.getComponentValue(component);
          if (Object.keys(data).includes(component.name)) {
            const existing = data[component.name];
            data[component.name] = [...Array.isArray(existing) ? existing : [existing], value];
          } else {
            data[component.name] = value;
          }
        }
      });
      return data;
    }
    /**
     * Finds the nearest ancestor with formGroup attribute.
     */
    findFormGroup(element) {
      let current = element.parentElement;
      while (current && current !== this.host) {
        if (current.hasAttribute("formGroup")) {
          return current;
        }
        current = current.parentElement;
      }
      return null;
    }
    /**
     * Gets the value from a form component.
     */
    getComponentValue(component) {
      if (["checkbox", "switch"].includes(this.HMWCName(component))) {
        return this.binary ? component.checked ? 1 : 0 : component.checked;
      }
      const raw = decodeURIComponent(String(component.value ?? ""));
      if (this.HMWCName(component) === "input" && component.getAttribute("type") === "number") {
        if (raw === "")
          return void 0;
        const num = Number(raw);
        return isNaN(num) ? raw : num;
      }
      if (this.HMWCName(component) === "input" && component.getAttribute("type") === "date") {
        if (raw === "")
          return void 0;
      }
      return raw;
    }
    /**
     * Collects data from a formGroup element.
     *
     * Auto-detects format based on children:
     * - If direct children have names → object format
     * - If direct children don't have names (or are template rows) → array format
     */
    collectGroupData(formGroup) {
      const children = Array.from(formGroup.children);
      const dataChildren = children.filter((child) => {
        if (child.formTemplate)
          return false;
        return true;
      });
      const isArrayGroup = this.shouldCollectAsArray(dataChildren);
      if (isArrayGroup) {
        return dataChildren.map((child) => this.collectRowData(child)).filter((item) => {
          if (item == null)
            return false;
          if (typeof item === "object" && !Array.isArray(item) && Object.keys(item).length === 0)
            return false;
          return true;
        });
      } else {
        return this.collectObjectData(formGroup);
      }
    }
    /**
     * Determines if a formGroup should be collected as an array.
     *
     * Returns true if:
     * - Children don't have name attributes (they're row containers)
     * - There are multiple similar child structures (repeatable rows)
     */
    shouldCollectAsArray(children) {
      if (children.length === 0)
        return false;
      const firstChild = children[0];
      if (this.FORM_COMPONENTS.includes(this.HMWCName(firstChild)) && firstChild.name) {
        return false;
      }
      const firstChildIsContainer = !this.FORM_COMPONENTS.includes(this.HMWCName(firstChild));
      if (firstChildIsContainer) {
        return true;
      }
      const hasNoNames = children.every((child) => !child.name);
      return hasNoNames;
    }
    /**
     * Collects data from a single row (container element with form components inside).
     */
    collectRowData(row) {
      const rowData = {};
      if (this.FORM_COMPONENTS.includes(this.HMWCName(row))) {
        return this.getComponentValue(row);
      }
      const formComponents = this.getFormComponentsInElement(row);
      formComponents.forEach((comp) => {
        if (comp.name) {
          rowData[comp.name] = this.getComponentValue(comp);
        }
      });
      return rowData;
    }
    /**
     * Collects data as an object from direct form component children.
     */
    collectObjectData(container) {
      const objData = {};
      const formComponents = this.getFormComponentsInElement(container);
      formComponents.forEach((comp) => {
        if (comp.name) {
          objData[comp.name] = this.getComponentValue(comp);
        }
      });
      return objData;
    }
    /**
     * Gets all form components within an element (recursive).
     */
    getFormComponentsInElement(element) {
      const components = [];
      const findComponents = (el) => {
        Array.from(el.children).forEach((child) => {
          if (child.hasAttribute("formGroup"))
            return;
          if (this.FORM_COMPONENTS.includes(this.HMWCName(child))) {
            components.push(child);
          } else {
            findComponents(child);
          }
        });
      };
      findComponents(element);
      return components;
    }
    // ==========================================
    // Form Template Methods
    // ==========================================
    /**
     * Adds new element(s) by cloning the nearest formTemplate.
     * The new elements are inserted at the end of the template's parent container.
     * If the last child is a button, inserts before the button.
     *
     * @param triggerElement The element that triggered the add (usually a button or formGroup)
     * @param count The number of clones to create. Defaults to 1.
     * @param keepValues When true, cloned elements retain the template's current values. Defaults to false.
     * @returns An array of the newly created elements, or an empty array if no template exists
     */
    addFromTemplate(triggerElement, count = 1, keepValues = false) {
      const template = this.findTemplate(triggerElement);
      if (!template) {
        console.warn("FormController: No formTemplate found");
        return [];
      }
      const parent = template.parentElement;
      if (!parent)
        return [];
      const results = [];
      for (let i7 = 0; i7 < count; i7++) {
        const newElement = template.cloneNode(true);
        newElement.removeAttribute("formTemplate");
        newElement.formTemplate = false;
        newElement.style.display = "";
        newElement.removeAttribute("hidden");
        if (!keepValues) {
          this.clearElementValues(newElement);
        }
        const lastChild = parent.lastElementChild;
        const isLastChildButton = lastChild && this.HMWCName(lastChild) === "button";
        if (isLastChildButton) {
          parent.insertBefore(newElement, lastChild);
        } else {
          parent.appendChild(newElement);
        }
        results.push(newElement);
      }
      this.refreshHMWCFormComponents();
      this.updateData();
      return results;
    }
    /**
     * @deprecated Use addFromTemplate instead
     */
    addTemplateRow(triggerElement) {
      const results = this.addFromTemplate(triggerElement);
      return results.length > 0 ? results[0] : null;
    }
    /**
     * Finds the formTemplate element relative to a trigger element.
     * Searches siblings and ancestors' children.
     */
    findTemplate(trigger) {
      const parent = trigger.parentElement;
      if (parent) {
        const template = Array.from(parent.children).find((child) => child.formTemplate);
        if (template)
          return template;
      }
      const formGroup = trigger.closest("[formGroup]");
      if (formGroup) {
        const template = formGroup.querySelector("[formTemplate]");
        if (template)
          return template;
      }
      let current = parent;
      while (current && current !== this.host) {
        const template = Array.from(current.children).find((child) => child.formTemplate);
        if (template)
          return template;
        current = current.parentElement;
      }
      return null;
    }
    /**
     * Removes an element that was created from a template.
     * Cannot remove the original template element.
     *
     * @param element The element to remove
     */
    removeFromTemplate(element) {
      if (element.formTemplate) {
        console.warn("FormController: Cannot remove a formTemplate element");
        return;
      }
      element.remove();
      this.refreshHMWCFormComponents();
      this.updateData();
    }
    /**
     * @deprecated Use removeFromTemplate instead
     */
    removeTemplateRow(element) {
      this.removeFromTemplate(element);
    }
    /**
     * Removes all elements that were created from templates,
     * restoring the form to its original template-only state.
     * The template elements themselves are preserved.
     */
    removeAllFromTemplates() {
      this.templates.forEach((template, parent) => {
        Array.from(parent.children).forEach((child) => {
          if (child !== template) {
            child.remove();
          }
        });
      });
      this.refreshHMWCFormComponents();
      this.updateData();
    }
    /**
     * Clears form values in an element (used when cloning templates).
     * Works for both single form components and containers with form components.
     */
    clearElementValues(element) {
      if (this.FORM_COMPONENTS.includes(this.HMWCName(element))) {
        const comp = element;
        comp.value = "";
        comp.checked = false;
        comp.removeAttribute("value");
        comp.removeAttribute("checked");
        comp.removeAttribute("invalid");
      }
      const components = this.getFormComponentsInElement(element);
      components.forEach((comp) => {
        comp.value = "";
        comp.checked = false;
        comp.removeAttribute("value");
        comp.removeAttribute("checked");
        comp.removeAttribute("invalid");
      });
    }
    /**
     * Initializes templates by finding all formTemplate elements and hiding them.
     */
    initializeTemplates() {
      this.templates.clear();
      const templateElements = this.host.querySelectorAll("[formTemplate]");
      templateElements.forEach((template) => {
        const parent = template.parentElement;
        if (parent) {
          this.templates.set(parent, template);
        }
        ;
        template.style.display = "none";
      });
    }
    /**
     * Updates the live `data` property with current form values.
     * Called automatically when form elements receive input.
     */
    updateData() {
      const formData = this.getFormData();
      if (formData) {
        this.data = formData;
      }
    }
    HMWCName(element) {
      if (!element)
        return "";
      const parts = element.tagName.split("HMWC-");
      return parts[1]?.toLowerCase() ?? "";
    }
    /**
     * Checks to see whether all the form elements pass
     * validation. If not, the button will be disabled.
     * In edit mode, also requires the form data to differ
     * from the original snapshot.
     */
    updateButtonState() {
      let allowSubmit = true;
      this.components.forEach((el) => {
        if (el.hasAttribute("formGroup"))
          return;
        if (this.stepComponents.length) {
          if (el.step === this.step) {
            if (el.checkValidity && !el.checkValidity())
              allowSubmit = false;
          }
        } else {
          if (el.checkValidity && !el.checkValidity())
            allowSubmit = false;
        }
      });
      if (allowSubmit && this.editing && !this.isDirty()) {
        allowSubmit = false;
      }
      if (allowSubmit) {
        this.getControl()?.removeAttribute("disabled");
      } else {
        this.getControl()?.setAttribute("disabled", "true");
      }
    }
    updateStepUI() {
      if (this.step === void 0)
        return;
      if (this.stepper) {
        this.stepper.step = this.step;
      }
      this.stepComponents.forEach((el) => {
        if (el.step === this.step)
          el.removeAttribute("hidden");
        else
          el.setAttribute("hidden", "true");
      });
      const begin = this.controls.find((c5) => c5.begin);
      const increment = this.controls.find((c5) => c5.increment);
      const decrement = this.controls.find((c5) => c5.decrement);
      const submit = this.controls.find((c5) => c5.submit);
      if (begin && this.step === 0) {
        begin.removeAttribute("hidden");
        increment?.setAttribute("hidden", "true");
        decrement?.setAttribute("hidden", "true");
        submit?.setAttribute("hidden", "true");
      } else if (this.step < this.steps) {
        begin?.setAttribute("hidden", "true");
        increment?.removeAttribute("hidden");
        decrement?.removeAttribute("hidden");
        submit?.setAttribute("hidden", "true");
      } else if (this.step === this.steps) {
        begin?.setAttribute("hidden", "true");
        increment?.setAttribute("hidden", "true");
        decrement?.removeAttribute("hidden");
        submit?.removeAttribute("hidden");
      }
    }
    /**
     * Returns the current control associated with the
     * current step of the form.
     */
    getControl() {
      let control = void 0;
      this.controls.forEach((el) => {
        if (this.step !== void 0 && this.step < this.steps) {
          if (el.increment)
            control = el;
        } else {
          if (el.submit)
            control = el;
        }
      });
      return control;
    }
    /**
     * Gets all the form elements inside the host element.
     * This includes the elements that are nested inside the
     * host element as well.
     */
    getHMWCFormComponents() {
      const components = [];
      const controls = [];
      const stepComponents = [];
      const getElements = (children) => {
        children.forEach((child) => {
          const formChild = child;
          const buttonChild = child;
          if (child.hasAttribute("formGroup"))
            components.push(formChild);
          else if (this.FORM_COMPONENTS.includes(this.HMWCName(child))) {
            !components.includes(formChild) && components.push(formChild);
          }
          if (this.HMWCName(child) === "button") {
            if (buttonChild.begin || buttonChild.submit || buttonChild.increment || buttonChild.decrement || buttonChild.templateAdd || buttonChild.templateRemove) {
              !controls.includes(buttonChild) && controls.push(buttonChild);
            }
          }
          if (formChild.step !== void 0) {
            if (this.HMWCName(child) !== "stepper") {
              !stepComponents.includes(formChild) && stepComponents.push(formChild);
            } else {
              this.stepper = child;
            }
          }
          const children2 = child.querySelectorAll("*");
          if (children2.length)
            getElements(Array.from(children2));
        });
        return { components, controls, stepComponents };
      };
      return getElements(Array.from(this.host.children));
    }
    /**
     * Adds listeners to a specific element.
     */
    addElementListeners(el) {
      if (this.listenerMap.has(el))
        return;
      this.listenerMap.set(el, true);
      const tag = this.HMWCName(el);
      const shouldValidate = (e8) => {
        const target = e8.target;
        if (target?.hasAttribute("formGroup"))
          return false;
        if (!e8.detail?.autoFocused)
          return true;
        const value = target?.getAttribute("value");
        const autoFocused = e8.detail?.autoFocused;
        if (autoFocused && !value)
          return false;
        return true;
      };
      const handleInput = () => {
        this.validateEl(el);
        this.updateData();
      };
      el.addEventListener("hmwc-input", handleInput);
      if (tag === "dropdown") {
        el.addEventListener("hmwc-change", handleInput);
      } else {
        el.addEventListener("hmwc-blur", (e8) => shouldValidate(e8) && this.validateEl(el));
      }
    }
    /**
     * Adds listeners to a specific control element.
     */
    addControlListeners(control) {
      if (this.listenerMap.has(control))
        return;
      this.listenerMap.set(control, true);
      const buttonControl = control;
      if (buttonControl.begin) {
        control.addEventListener("hmwc-click", () => this.increment());
      } else if (buttonControl.increment) {
        control.addEventListener("hmwc-click", () => this.increment());
      } else if (buttonControl.decrement) {
        control.addEventListener("hmwc-click", () => this.decrement());
      } else if (buttonControl.submit) {
        control.addEventListener("hmwc-click", () => this.submit());
      } else if (buttonControl.templateAdd) {
        control.addEventListener("hmwc-click", () => this.handleTemplateAdd(control));
      } else if (buttonControl.templateRemove) {
        control.addEventListener("hmwc-click", () => this.handleTemplateRemove(control));
      }
    }
    /**
     * Handles the add button click - finds the nearest template and clones it.
     * The template can be any element with formTemplate attribute.
     */
    handleTemplateAdd(button) {
      const results = this.addFromTemplate(button);
      if (results.length === 0) {
        console.warn("FormController: No template found for add button. Add formTemplate attribute to the element to clone.");
      }
    }
    /**
     * Handles the remove button click - removes the element containing the button.
     * If button is inside a formGroup, removes that row.
     * Otherwise, removes the button's immediate parent element.
     */
    handleTemplateRemove(button) {
      let current = button.parentElement;
      while (current) {
        const parent2 = current.parentElement;
        if (parent2?.hasAttribute("formGroup")) {
          this.removeFromTemplate(current);
          return;
        }
        current = parent2;
      }
      const parent = button.parentElement;
      if (parent && parent !== this.host) {
        this.removeFromTemplate(parent);
      } else {
        console.warn("FormController: Cannot determine which element to remove");
      }
    }
    /**
     * Refreshes the form elements and updates listeners.
     * Adds newly discovered elements and removes elements
     * that are no longer in the DOM.
     */
    refreshHMWCFormComponents() {
      const { components, controls, stepComponents } = this.getHMWCFormComponents();
      this.components = this.components.filter((comp) => components.includes(comp));
      this.controls = this.controls.filter((ctrl) => controls.includes(ctrl));
      this.stepComponents = this.stepComponents.filter((sc) => stepComponents.includes(sc));
      components.forEach((comp) => {
        if (!this.components.includes(comp)) {
          this.components.push(comp);
          this.addElementListeners(comp);
        }
      });
      controls.forEach((ctrl) => {
        if (!this.controls.includes(ctrl)) {
          this.controls.push(ctrl);
          this.addControlListeners(ctrl);
        }
      });
      stepComponents.forEach((stepComp) => {
        if (!this.stepComponents.includes(stepComp)) {
          this.stepComponents.push(stepComp);
        }
      });
      this.updateButtonState();
    }
    /**
     * Sets up a MutationObserver to watch for dynamically added or removed form elements.
     */
    setupObserver() {
      if (this.observer)
        return;
      const isRelevantElement = (el) => {
        const tag = this.HMWCName(el);
        const formEl = el;
        return this.FORM_COMPONENTS.includes(tag) || tag === "button" || el.hasAttribute("formGroup") || formEl.step !== void 0;
      };
      this.observer = new MutationObserver((mutations) => {
        let shouldRefresh = false;
        mutations.forEach((mutation) => {
          if (mutation.type === "childList") {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node;
                if (isRelevantElement(element)) {
                  shouldRefresh = true;
                }
                const descendants = element.querySelectorAll("*");
                descendants.forEach((desc) => {
                  if (isRelevantElement(desc)) {
                    shouldRefresh = true;
                  }
                });
              }
            });
            mutation.removedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node;
                if (isRelevantElement(element)) {
                  shouldRefresh = true;
                }
                const descendants = element.querySelectorAll("*");
                descendants.forEach((desc) => {
                  if (isRelevantElement(desc)) {
                    shouldRefresh = true;
                  }
                });
              }
            });
          }
        });
        if (shouldRefresh) {
          this.refreshHMWCFormComponents();
        }
      });
      this.observer.observe(this.host, {
        childList: true,
        subtree: true
      });
    }
    hostUpdated() {
      this.refreshHMWCFormComponents();
      if (this.stepComponents.length) {
        const begin = this.controls.find((c5) => c5.begin);
        this.step = begin ? 0 : 1;
      }
      if (this.initialized)
        return;
      this.initialized = true;
      const base = this.root.querySelector("div");
      if (!base)
        return;
      const form = Object.assign(document.createElement("form"), {
        styleMap: /* @__PURE__ */ new Map([["display", "contents"]])
      });
      form.append(base);
      this.root.append(form);
      this.initializeTemplates();
      this.updateStepUI();
      this.setupObserver();
    }
    hostDisconnected() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
    }
    constructor(host) {
      this.initialized = false;
      this.binary = false;
      this.FORM_COMPONENTS = ["input", "dropdown", "checkbox", "switch", "radio-group", "calendar"];
      this.observer = null;
      this.listenerMap = /* @__PURE__ */ new WeakMap();
      this.templates = /* @__PURE__ */ new Map();
      this.editing = false;
      this.snapshot = null;
      this.components = [];
      this.controls = [];
      this.stepComponents = [];
      this.errors = [];
      this.data = {};
      this.host = host;
      this.root = this.host.shadowRoot;
      this.step = this.host.step;
      this.steps = this.host.steps ?? 1;
      host.addController(this);
    }
  };

  // dist/models/container/container.styles.js
  var containerStyles = i`
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
`;

  // dist/models/container/container.component.js
  var __decorate3 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var HMWCContainerComponent = class extends HMWCComponent {
    connectedCallback() {
      super.connectedCallback();
      if (this.form)
        this.controllers.form = new FormController(this);
      if (this.img)
        this.style.setProperty(`--image-url`, `url(${this.img})`);
      if (this.label) {
        this.controllers.slot.insert(Object.assign(document.createElement("slot"), {
          name: "label",
          part: "label",
          innerHTML: this.label
        }));
      }
      if (this.validationType === "alert") {
        this.controllers.slot.prepend(Object.assign(document.createElement("hmwc-alert"), {
          label: `Submission failed with ${this.controllers.form?.errors.length} error(s).`,
          message: "Please fix all errors and try again.",
          danger: true,
          open: !!this.controllers.form?.errors.length
        }));
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      delete this.controllers.form;
    }
    constructor() {
      super();
      this.validationType = "outline";
    }
  };
  HMWCContainerComponent.styles = containerStyles;
  __decorate3([
    n5({ type: String })
  ], HMWCContainerComponent.prototype, "label", void 0);
  __decorate3([
    n5({ type: Boolean, reflect: true })
  ], HMWCContainerComponent.prototype, "fluid", void 0);
  __decorate3([
    n5({ type: Boolean, reflect: true })
  ], HMWCContainerComponent.prototype, "scrollable", void 0);
  __decorate3([
    n5({ type: Boolean, reflect: true })
  ], HMWCContainerComponent.prototype, "center", void 0);
  __decorate3([
    n5({ type: String, reflect: true })
  ], HMWCContainerComponent.prototype, "align", void 0);
  __decorate3([
    n5({ type: String, reflect: true })
  ], HMWCContainerComponent.prototype, "justify", void 0);
  __decorate3([
    n5({ type: String, reflect: true })
  ], HMWCContainerComponent.prototype, "gap", void 0);
  __decorate3([
    n5({ type: String, reflect: true })
  ], HMWCContainerComponent.prototype, "pad", void 0);
  __decorate3([
    n5({ type: String, reflect: true })
  ], HMWCContainerComponent.prototype, "round", void 0);
  __decorate3([
    n5({ type: Number, reflect: true })
  ], HMWCContainerComponent.prototype, "elevation", void 0);
  __decorate3([
    n5({ type: String, reflect: true })
  ], HMWCContainerComponent.prototype, "img", void 0);
  __decorate3([
    n5({ type: Boolean, reflect: true })
  ], HMWCContainerComponent.prototype, "square", void 0);
  __decorate3([
    n5({ type: Boolean, reflect: true })
  ], HMWCContainerComponent.prototype, "form", void 0);
  __decorate3([
    n5({ type: Number })
  ], HMWCContainerComponent.prototype, "steps", void 0);
  __decorate3([
    n5({ type: String })
  ], HMWCContainerComponent.prototype, "validationType", void 0);

  // node_modules/lit-html/directive.js
  var t3 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e6 = (t5) => (...e8) => ({ _$litDirective$: t5, values: e8 });
  var i5 = class {
    constructor(t5) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t5, e8, i7) {
      this._$Ct = t5, this._$AM = e8, this._$Ci = i7;
    }
    _$AS(t5, e8) {
      return this.update(t5, e8);
    }
    update(t5, e8) {
      return this.render(...e8);
    }
  };

  // node_modules/lit-html/directives/class-map.js
  var e7 = e6(class extends i5 {
    constructor(t5) {
      if (super(t5), t5.type !== t3.ATTRIBUTE || "class" !== t5.name || t5.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t5) {
      return " " + Object.keys(t5).filter((s4) => t5[s4]).join(" ") + " ";
    }
    update(s4, [i7]) {
      if (void 0 === this.st) {
        this.st = /* @__PURE__ */ new Set(), void 0 !== s4.strings && (this.nt = new Set(s4.strings.join(" ").split(/\s/).filter((t5) => "" !== t5)));
        for (const t5 in i7) i7[t5] && !this.nt?.has(t5) && this.st.add(t5);
        return this.render(i7);
      }
      const r7 = s4.element.classList;
      for (const t5 of this.st) t5 in i7 || (r7.remove(t5), this.st.delete(t5));
      for (const t5 in i7) {
        const s5 = !!i7[t5];
        s5 === this.st.has(t5) || this.nt?.has(t5) || (s5 ? (r7.add(t5), this.st.add(t5)) : (r7.remove(t5), this.st.delete(t5)));
      }
      return E;
    }
  });

  // node_modules/lit-html/directives/if-defined.js
  var o6 = (o8) => o8 ?? A;

  // dist/components/icon/icon.styles.js
  var styles2 = i`
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
`;

  // dist/components/icon/icon.component.js
  var __decorate4 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Icon = class extends HMWCComponent {
    labelUpdate() {
      if (this.label) {
        this.setAttribute("role", "img");
        this.removeAttribute("aria-hidden");
        this.setAttribute("aria-label", this.label);
      } else {
        this.removeAttribute("role");
        this.removeAttribute("aria-label");
        this.setAttribute("aria-hidden", "true");
      }
    }
    connectedCallback() {
      super.connectedCallback();
    }
    render() {
      const url = "https://cdn.jsdelivr.net/npm/bootstrap-icons";
      const path = "/font/bootstrap-icons.css";
      const version = "1.13.1";
      const css = `${url}@${version}${path}`;
      const classifier = e7({
        icon: true,
        bi: true,
        [`bi-${this.src}`]: true,
        sm: !!this.sm,
        md: !!this.md,
        lg: !!this.lg,
        xl: !!this.xl,
        primary: !!this.primary,
        success: !!this.success,
        neutral: !!this.neutral,
        warning: !!this.warning,
        danger: !!this.danger
      });
      return b2`
      <link rel="stylesheet" href=${css} />
      <i part="base" class=${classifier}></i>
    `;
    }
  };
  Icon.styles = styles2;
  __decorate4([
    n5({ type: String, reflect: true })
  ], Icon.prototype, "src", void 0);
  __decorate4([
    n5({ type: String, reflect: true })
  ], Icon.prototype, "label", void 0);
  __decorate4([
    n5({ type: Boolean, reflect: true })
  ], Icon.prototype, "sm", void 0);
  __decorate4([
    n5({ type: Boolean, reflect: true })
  ], Icon.prototype, "md", void 0);
  __decorate4([
    n5({ type: Boolean, reflect: true })
  ], Icon.prototype, "lg", void 0);
  __decorate4([
    n5({ type: Boolean, reflect: true })
  ], Icon.prototype, "xl", void 0);
  __decorate4([
    n5({ type: Boolean, reflect: true })
  ], Icon.prototype, "primary", void 0);
  __decorate4([
    n5({ type: Boolean, reflect: true })
  ], Icon.prototype, "success", void 0);
  __decorate4([
    n5({ type: Boolean, reflect: true })
  ], Icon.prototype, "neutral", void 0);
  __decorate4([
    n5({ type: Boolean, reflect: true })
  ], Icon.prototype, "warning", void 0);
  __decorate4([
    n5({ type: Boolean, reflect: true })
  ], Icon.prototype, "danger", void 0);
  __decorate4([
    watch("label")
  ], Icon.prototype, "labelUpdate", null);

  // dist/components/icon/index.js
  Icon.define("hmwc-icon", Icon);

  // dist/components/accordion/accordion.styles.js
  var styles3 = i`
  :host {
    --accordion-background: var(--hmwc-panel-background-color);
    --accordion-border-color: none;
    --accordion-border-radius: none;
    --accordion-font-color: var(--hmwc-color-neutral-750);
    --accordion-font-size: var(--hmwc-font-size-medium);
    --accordion-font-weight: var(--hmwc-font-weight-normal);
    --accordion-icon-color: var(--hmwc-color-neutral-700);
    --accordion-icon-size: var(--accordion-font-size);
    --accordion-trigger-size: var(--hmwc-font-size-small);
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
        transition: var(--hmwc-transition-medium) rotate ease, var(--hmwc-transition-fast) color ease;
      }
    }

    &:not(.disabled) .accordion__summary:hover {
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
      --accordion-trigger-size: 0.75rem;
      --accordion-summary-padding: 0;
      --container-padding: var(--hmwc-spacing-medium) 0;
    }
  }
`;

  // dist/components/accordion/accordion.component.js
  var __decorate5 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Accordion = class extends HMWCContainerComponent {
    /**
     * Expands the accordion, allowing it's content to be
     * visible.
     */
    show() {
      if (this.disabled)
        return;
      this.active = true;
    }
    /**
     * Collapses the accordion, hiding it's content.
     */
    hide() {
      if (this.disabled)
        return;
      this.active = false;
    }
    /**
     * Toggles the activity state of the accordion.
     */
    toggle(event) {
      if (event)
        event.preventDefault();
      this.active ? this.hide() : this.show();
    }
    /**
     * Sets focus to the accordion's summary.
     */
    focus() {
      this.summary.focus();
    }
    /**
     * Removes focus from the accordion.
     */
    blur() {
      this.body?.blur();
      this.summary.blur();
    }
    /**
     * Prevents clicks on the controls area from
     * toggling the accordion.
     */
    handleControlsClick(event) {
      event.stopPropagation();
    }
    handleKeyboardInput(event) {
      const toggleKeys = ["Enter", " "];
      const collapseKeys = ["ArrowUp", "ArrowLeft"];
      const expandKeys = ["ArrowDown", "ArrowRight"];
      if (![...toggleKeys, ...collapseKeys, ...expandKeys].includes(event.key))
        return;
      event.preventDefault();
      if (toggleKeys.includes(event.key))
        this.active ? this.hide() : this.show();
      else if (collapseKeys.includes(event.key))
        this.hide();
      else if (expandKeys.includes(event.key))
        this.show();
    }
    iconUpdate() {
      if (this.icon && this.icon instanceof Object) {
        this.iconColor = this.icon.color;
        this.icon = this.icon.icon;
      }
    }
    activityUpdate() {
      this.emit(`hmwc-${this.active ? "expand" : "collapse"}`);
    }
    firstUpdated() {
      this.solo = !(this.parentElement instanceof AccordionGroup);
    }
    render() {
      const classifier = e7({
        accordion: true,
        active: !!this.active,
        disabled: !!this.disabled,
        basic: !!this.basic,
        solo: !!this.solo,
        icon: !!this.icon || this.controllers.slot.test("icon")
      });
      return b2`
      <details part="base" class=${classifier} open>
        <summary
          part="summary"
          id="summary"
          class="accordion__summary"
          role="button"
          aria-expanded=${o6(this.active)}
          aria-controls="content"
          aria-disabled=${this.disabled ? "true" : "false"}
          tabindex=${this.disabled ? "-1" : "0"}
          @keydown=${this.handleKeyboardInput}
          @click=${this.toggle}
          @focus=${() => this.emit("hmwc-focus")}
          @blur=${() => this.emit("hmwc-blur")}
          style="--accordion-icon-color: ${o6(this.iconColor)}">
          <div part="details" class="accordion__details">
            <slot name="icon" part="icon" class="accordion__icon">${this.icon && b2`<hmwc-icon flex src=${this.icon}></hmwc-icon>`}</slot>
            <slot name="label" part="label" class="accordion__label">${this.label}</slot>
          </div>
          <slot name="controls" part="controls" class="accordion__controls" @click=${this.handleControlsClick}></slot>
          <slot name="trigger" part="trigger" class="accordion__trigger">
            <hmwc-icon part="summary-icon" src="chevron-right"></hmwc-icon>
          </slot>
        </summary>
        <div class="accordion__body" part="body" role="region" aria-labelledby="summary">
          <slot></slot>
        </div>
      </details>
    `;
    }
  };
  Accordion.styles = styles3;
  Accordion.dependencies = [Icon];
  Accordion.slots = ["controls"];
  __decorate5([
    r5()
  ], Accordion.prototype, "solo", void 0);
  __decorate5([
    n5({ type: Boolean, reflect: true })
  ], Accordion.prototype, "active", void 0);
  __decorate5([
    n5({ type: String, reflect: true })
  ], Accordion.prototype, "label", void 0);
  __decorate5([
    n5({ type: String, reflect: true })
  ], Accordion.prototype, "icon", void 0);
  __decorate5([
    n5({ type: Boolean, reflect: true })
  ], Accordion.prototype, "disabled", void 0);
  __decorate5([
    n5({ type: Boolean, reflect: true })
  ], Accordion.prototype, "basic", void 0);
  __decorate5([
    e5(".accordion__summary")
  ], Accordion.prototype, "summary", void 0);
  __decorate5([
    e5(".accordion__body")
  ], Accordion.prototype, "body", void 0);
  __decorate5([
    r5()
  ], Accordion.prototype, "iconColor", void 0);
  __decorate5([
    watch("icon")
  ], Accordion.prototype, "iconUpdate", null);
  __decorate5([
    watch("active")
  ], Accordion.prototype, "activityUpdate", null);

  // dist/components/accordion/index.js
  Accordion.define("hmwc-accordion", Accordion);

  // node_modules/lit-html/static.js
  var a3 = Symbol.for("");
  var o7 = (t5) => {
    if (t5?.r === a3) return t5?._$litStatic$;
  };
  var i6 = (t5, ...r7) => ({ _$litStatic$: r7.reduce((r8, e8, a4) => r8 + ((t6) => {
    if (void 0 !== t6._$litStatic$) return t6._$litStatic$;
    throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t6}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
  })(e8) + t5[a4 + 1], t5[0]), r: a3 });
  var l3 = /* @__PURE__ */ new Map();
  var n6 = (t5) => (r7, ...e8) => {
    const a4 = e8.length;
    let s4, i7;
    const n7 = [], u4 = [];
    let c5, $3 = 0, f3 = false;
    for (; $3 < a4; ) {
      for (c5 = r7[$3]; $3 < a4 && void 0 !== (i7 = e8[$3], s4 = o7(i7)); ) c5 += s4 + r7[++$3], f3 = true;
      $3 !== a4 && u4.push(i7), n7.push(c5), $3++;
    }
    if ($3 === a4 && n7.push(r7[a4]), f3) {
      const t6 = n7.join("$$lit$$");
      void 0 === (r7 = l3.get(t6)) && (n7.raw = n7, l3.set(t6, r7 = n7)), e8 = u4;
    }
    return t5(r7, ...e8);
  };
  var u3 = n6(b2);
  var c4 = n6(w);
  var $2 = n6(T);

  // dist/components/badge/badge.styles.js
  var styles4 = i`
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
`;

  // dist/components/badge/badge.component.js
  var __decorate6 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Badge = class extends HMWCComponent {
    connectedCallback() {
      super.connectedCallback();
    }
    render() {
      const classifier = e7({
        badge: true,
        icon: !!this.icon || this.controllers.slot.test("icon"),
        pill: !!this.pill,
        pulse: !!this.pulse,
        selectable: !!this.selectable,
        sm: !!this.sm,
        md: !!this.md,
        lg: !!this.lg,
        primary: !!this.primary,
        success: !!this.success,
        neutral: !!this.neutral,
        warning: !!this.warning,
        danger: !!this.danger
      });
      return b2`
      <div part="base" class=${classifier} role="status">
        <slot part="label" class="badge__label">${this.label ? this.label : ""}</slot>
        <slot name="icon" part="icon" class="badge__icon">${this.icon ? b2`<hmwc-icon src=${this.icon}></hmwc-icon>` : ""}</slot>
      </div>
    `;
    }
  };
  Badge.styles = styles4;
  Badge.dependencies = [Icon];
  Badge.slots = ["label", "icon"];
  __decorate6([
    n5({ type: String })
  ], Badge.prototype, "label", void 0);
  __decorate6([
    n5({ type: String, reflect: true })
  ], Badge.prototype, "icon", void 0);
  __decorate6([
    n5({ type: Boolean, reflect: true })
  ], Badge.prototype, "pill", void 0);
  __decorate6([
    n5({ type: Boolean, reflect: true })
  ], Badge.prototype, "selectable", void 0);
  __decorate6([
    n5({ type: Boolean, reflect: true })
  ], Badge.prototype, "pulse", void 0);
  __decorate6([
    n5({ type: Boolean, reflect: true })
  ], Badge.prototype, "sm", void 0);
  __decorate6([
    n5({ type: Boolean, reflect: true })
  ], Badge.prototype, "md", void 0);
  __decorate6([
    n5({ type: Boolean, reflect: true })
  ], Badge.prototype, "lg", void 0);
  __decorate6([
    n5({ type: Boolean, reflect: true })
  ], Badge.prototype, "primary", void 0);
  __decorate6([
    n5({ type: Boolean, reflect: true })
  ], Badge.prototype, "success", void 0);
  __decorate6([
    n5({ type: Boolean, reflect: true })
  ], Badge.prototype, "neutral", void 0);
  __decorate6([
    n5({ type: Boolean, reflect: true })
  ], Badge.prototype, "warning", void 0);
  __decorate6([
    n5({ type: Boolean, reflect: true })
  ], Badge.prototype, "danger", void 0);

  // dist/components/spinner/spinner.styles.js
  var styles5 = i`
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
`;

  // dist/components/spinner/spinner.component.js
  var __decorate7 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Spinner = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.active = true;
    }
    /**
     * Activates the component, starting the spinning
     * animation.
     */
    start() {
      if (this.active)
        return;
      this.active = true;
    }
    /**
     * Deactivates the component, pausing the spinning
     * animation at its current position.
     */
    stop() {
      if (!this.active)
        return;
      this.active = false;
    }
    /**
     * Toggles the activity state of the component. If not
     * active, the spinning animation will start and vise
     * versa.
     */
    toggle() {
      this.active = !this.active;
    }
    render() {
      const classifier = e7({
        spinner: true,
        active: !!this.active,
        "speed-slower": this.speed === "slower",
        "speed-slow": this.speed === "slow",
        "speed-fast": this.speed === "fast",
        "speed-faster": this.speed === "faster",
        sm: !!this.sm,
        md: !!this.md,
        lg: !!this.lg,
        primary: !!this.primary,
        success: !!this.success,
        neutral: !!this.neutral,
        warning: !!this.warning,
        danger: !!this.danger
      });
      return b2`
      <svg part="base" class=${classifier} role="progressbar" aria-label="loading">
        <circle part="track" class="spinner__track"></circle>
        <circle part="indicator" class="spinner__indicator"></circle>
      </svg>
    `;
    }
  };
  Spinner.styles = styles5;
  __decorate7([
    n5({ type: Boolean, reflect: true })
  ], Spinner.prototype, "active", void 0);
  __decorate7([
    n5({ type: String, reflect: true })
  ], Spinner.prototype, "speed", void 0);
  __decorate7([
    n5({ type: Boolean, reflect: true })
  ], Spinner.prototype, "sm", void 0);
  __decorate7([
    n5({ type: Boolean, reflect: true })
  ], Spinner.prototype, "md", void 0);
  __decorate7([
    n5({ type: Boolean, reflect: true })
  ], Spinner.prototype, "lg", void 0);
  __decorate7([
    n5({ type: Boolean, reflect: true })
  ], Spinner.prototype, "primary", void 0);
  __decorate7([
    n5({ type: Boolean, reflect: true })
  ], Spinner.prototype, "success", void 0);
  __decorate7([
    n5({ type: Boolean, reflect: true })
  ], Spinner.prototype, "neutral", void 0);
  __decorate7([
    n5({ type: Boolean, reflect: true })
  ], Spinner.prototype, "warning", void 0);
  __decorate7([
    n5({ type: Boolean, reflect: true })
  ], Spinner.prototype, "danger", void 0);

  // dist/components/spinner/index.js
  Spinner.define("hmwc-spinner", Spinner);

  // dist/components/button/button.styles.js
  var styles6 = i`
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
      --button-color: var(--hmwc-color-warning-50);
      --button-background: var(--hmwc-color-warning-600);
      --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-warning-600);

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

      &.primary {
        --button-color: var(--hmwc-color-neutral-0);
        --button-background: var(--hmwc-color-primary-500);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-primary-500);

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

        &.outline {
          --button-color: var(--hmwc-color-neutral-0);
        }

        &.basic.icon {
          --icon-color: var(--hmwc-color-neutral-50);
        }
      }

      &.warning {
        --button-color: var(--hmwc-color-neutral-0);
        --button-background: var(--hmwc-color-warning-500);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-warning-500);

        &.outline {
          --button-color: var(--hmwc-color-neutral-0);
        }

        &.basic.icon {
          --icon-color: var(--hmwc-color-warning-400);
        }
      }

      &.danger {
        --button-color: var(--hmwc-color-neutral-0);
        --button-background: var(--hmwc-color-danger-500);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-danger-500);

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
      }

      &.invert {
        --button-color: var(--hmwc-color-neutral-800);
        --button-background: var(--hmwc-color-neutral-100);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-neutral-500);
      }
    }

    &:active:not(.disabled) {
      --button-color: var(--hmwc-color-primary-700);
      --button-background: var(--hmwc-color-primary-100);
      --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-primary-400);

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
        --button-color: var(--hmwc-color-warning-700);
        --button-background: var(--hmwc-color-warning-100);
        --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-warning-400);

        &.outline {
          --button-background: var(--hmwc-color-warning-700);
          --button-border: var(--hmwc-input-border-width) solid var(--hmwc-color-warning-700);
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
`;

  // dist/components/button/button.component.js
  var __decorate8 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Button = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.target = "_blank";
    }
    /** Simulates a click on the button. */
    click() {
      this.button.click();
    }
    /** Sets focus on the button. */
    focus(options) {
      this.button.focus(options);
    }
    /** Removes focus from the button. */
    blur() {
      this.button.blur();
    }
    isLink() {
      return !!this.href;
    }
    handleClick() {
      if (this.disabled) {
        if (this.submit) {
          const formComponent = this.closest("[form]");
          if (formComponent) {
            formComponent.controllers.form?.validate();
          }
        }
        return;
      }
      this.emit("hmwc-click");
    }
    handleFocus() {
      this.emit("hmwc-focus");
    }
    handleBlur() {
      this.emit("hmwc-blur");
    }
    handleMouseIn() {
      if (this.labelOnHover) {
        this.label = this.labelOnHover;
      }
    }
    handleMouseOut() {
      if (this.labelOnHover) {
        this.label = this._label;
      }
    }
    connectedCallback() {
      super.connectedCallback();
      this._label = this.label || this.textContent || "";
      if (!this.sm && !this.md && !this.lg) {
        this.md = true;
      }
    }
    render() {
      const tag = this.isLink() ? i6`a` : i6`button`;
      const classifier = e7({
        button: true,
        icon: !!this.icon,
        prefix: !!this.prefix || !!this.img,
        suffix: !!this.suffix,
        invert: !!this.invert,
        basic: !!this.basic,
        primary: !!this.primary,
        success: !!this.success,
        neutral: !!this.neutral,
        warning: !!this.warning,
        danger: !!this.danger,
        small: !!this.sm,
        medium: !!this.md,
        large: !!this.lg,
        loading: !!this.loading,
        circle: !!this.circle,
        pill: !!this.pill,
        outline: !!this.outline,
        disabled: !!this.disabled,
        fluid: !!this.fluid
      });
      return u3`
      <${tag}
        part='base'
        class='${classifier}'
        type=${this.submit ? "submit" : this.reset ? "reset" : "button"}
        title=${this.title}
        target=${o6(this.isLink() ? this.target : void 0)}
        download=${o6(this.isLink() ? this.download : void 0)}
        href=${o6(this.isLink() ? this.href : void 0)}
        value=${o6(this.isLink() ? void 0 : this.value)}
        role=${o6(this.isLink() ? void 0 : "button")}
        aria-disabled=${o6(this.disabled)}
        aria-label=${o6(this.label)}
        tabindex=${o6(this.disabled) ? "-1" : "0"}
        @click=${this.handleClick}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @mouseenter=${this.handleMouseIn}
        @mouseout=${this.handleMouseOut}
      >

        <slot name="prefix" part="prefix" class="button__prefix">
          ${this.prefix ? u3`<hmwc-icon src=${this.prefix}></hmwc-icon>` : this.img ? u3`<img src=${this.img} alt="btn-img" />` : ""}
        </slot>

        <slot name='icon' class='button__icon'>
          ${this.icon && !this.loading ? u3`<hmwc-icon part="icon" src=${this.icon} ?flex=${this.basic}></hmwc-icon>` : ""}
        </slot>

        ${!this.icon ? u3`<slot name="label" part="label" class="button__label">${this.label}</slot>` : ""}

        <slot name="suffix" part="suffix" class="button__suffix">
          ${this.suffix ? u3`<hmwc-icon src=${this.suffix}></hmwc-icon>` : ""}
        </slot>

        <slot name="badge" part="badge" class="button__badge"></slot>

        ${this.loading ? u3`<hmwc-spinner sm part="spinner"></hmwc-spinner>` : ""}

      </${tag}>
    `;
    }
  };
  Button.styles = styles6;
  Button.dependencies = [Icon, Spinner, Badge];
  Button.slots = ["prefix"];
  __decorate8([
    n5({ type: String })
  ], Button.prototype, "label", void 0);
  __decorate8([
    n5({ type: String })
  ], Button.prototype, "labelOnHover", void 0);
  __decorate8([
    n5({ type: String })
  ], Button.prototype, "icon", void 0);
  __decorate8([
    n5({ type: String })
  ], Button.prototype, "prefix", void 0);
  __decorate8([
    n5({ type: String })
  ], Button.prototype, "suffix", void 0);
  __decorate8([
    n5({ type: String })
  ], Button.prototype, "img", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "primary", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "success", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "neutral", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "warning", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "danger", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "invert", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "basic", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "sm", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "md", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "lg", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "outline", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "pill", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "circle", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "fluid", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "disabled", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "loading", void 0);
  __decorate8([
    n5({ type: String })
  ], Button.prototype, "value", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "submit", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "begin", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "increment", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "decrement", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "templateAdd", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "templateRemove", void 0);
  __decorate8([
    n5({ type: Boolean, reflect: true })
  ], Button.prototype, "reset", void 0);
  __decorate8([
    n5({ type: String, reflect: false })
  ], Button.prototype, "href", void 0);
  __decorate8([
    n5({ type: String })
  ], Button.prototype, "target", void 0);
  __decorate8([
    n5({ type: String })
  ], Button.prototype, "download", void 0);
  __decorate8([
    e5(".button")
  ], Button.prototype, "button", void 0);

  // dist/components/accordion-group/accordion-group.styles.js
  var styles7 = i`
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
  }
`;

  // dist/components/accordion-group/accordion-group.component.js
  var __decorate9 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var AccordionGroup = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.index = -1;
      this.accordions = [];
      this.listeners = /* @__PURE__ */ new Map();
    }
    /**
     * Shows all accordions in the accordion-group.
     */
    showAll() {
      this.accordions.forEach((accordion) => accordion.show());
    }
    /**
     * Hides all accordions in the accordion-group.
     */
    hideAll() {
      this.accordions.forEach((accordion) => accordion.hide());
    }
    getAccordions() {
      return this.controllers.slot.get().filter((c5) => c5 instanceof Accordion);
    }
    handleExpand(index) {
      this.index = index;
      if (!this.multiple) {
        this.accordions.forEach((accordion, i7) => {
          if (i7 !== index)
            accordion.hide();
        });
      }
    }
    handleCollapse(index) {
      if (this.index === index)
        this.index = -1;
    }
    indexUpdate() {
      this.emit("hmwc-change", {
        detail: { index: this.index, accordion: this.accordions[this.index] }
      });
    }
    accordionsUpdate() {
      const transferredStyles = {
        "--accordion-background": "var(--accordion-group-background)",
        "--accordion-font-color": "var(--accordion-group-font-color)",
        "--accordion-font-size": "var(--accordion-group-font-size)",
        "--accordion-font-weight": "var(--accordion-group-font-weight)",
        "--accordion-icon-color": "var(--accordion-group-icon-color)",
        "--accordion-icon-size": "var(--accordion-group-icon-size)",
        "--accordion-trigger-size": "var(--accordion-group-trigger-size)",
        "--accordion-trigger-color": "var(--accordion-group-trigger-color)",
        "--accordion-summary-padding": "var(--accordion-group-summary-padding)"
      };
      const style = Object.keys(transferredStyles).map((s4) => `${s4}: ${transferredStyles[s4]}`).join("; ");
      this.listeners.forEach((fns, accordion) => {
        accordion.removeEventListener("hmwc-expand", fns.expand);
        accordion.removeEventListener("hmwc-collapse", fns.collapse);
      });
      this.listeners.clear();
      this.accordions.forEach((a4, i7) => {
        a4.setAttribute("style", style);
        const expand = () => this.handleExpand(i7);
        const collapse = () => this.handleCollapse(i7);
        this.listeners.set(a4, { expand, collapse });
        a4.addEventListener("hmwc-expand", expand);
        a4.addEventListener("hmwc-collapse", collapse);
      });
    }
    firstUpdated() {
      this.accordions = this.getAccordions();
    }
    render() {
      const classifier = e7({
        "accordion-group": true
      });
      return b2`
      <div part="base" class=${classifier}>
        <slot></slot>
      </div>
    `;
    }
  };
  AccordionGroup.styles = styles7;
  AccordionGroup.dependencies = [Button];
  AccordionGroup.slots = ["[default]"];
  __decorate9([
    r5()
  ], AccordionGroup.prototype, "index", void 0);
  __decorate9([
    r5()
  ], AccordionGroup.prototype, "accordions", void 0);
  __decorate9([
    n5({ type: Boolean, reflect: true })
  ], AccordionGroup.prototype, "multiple", void 0);
  __decorate9([
    watch("index", { waitUntilFirstUpdate: true })
  ], AccordionGroup.prototype, "indexUpdate", null);
  __decorate9([
    watch("accordions")
  ], AccordionGroup.prototype, "accordionsUpdate", null);

  // dist/components/accordion-group/index.js
  AccordionGroup.define("hmwc-accordion-group", AccordionGroup);

  // dist/components/button/index.js
  if (!customElements.get("hmwc-button")) {
    Button.define("hmwc-button", Button);
  }

  // dist/components/alert/alert.styles.js
  var styles8 = i`
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
`;
  var notificationStyles = `
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
`;

  // dist/components/alert/alert.types.js
  var AlertPresets = {
    info: {
      variant: "primary",
      icon: "info-circle",
      dismissible: true,
      duration: 5e3
    },
    success: {
      variant: "success",
      icon: "check2-circle",
      dismissible: true,
      duration: 5e3
    },
    warning: {
      variant: "warning",
      icon: "exclamation-triangle",
      dismissible: true,
      duration: 8e3
    },
    error: {
      variant: "danger",
      icon: "exclamation-octagon",
      dismissible: true,
      duration: Infinity
    }
  };

  // dist/components/alert/alert.component.js
  var __decorate10 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Alert = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.active = false;
      this.duration = Infinity;
    }
    /**
     * Shows the alert. If the `stack` attribute is set, the
     * alert will be placed in the nearest notification stack
     * (or the global fallback).
     */
    show() {
      if (this.active)
        return;
      this.active = true;
      if (!this.stack)
        return;
      const target = resolveStack(this);
      target.appendChild(this);
    }
    /**
     * Hides the alert. If the `stack` attribute is set, the
     * alert will be removed from the DOM.
     */
    hide() {
      if (!this.active)
        return;
      this.active = false;
      if (!this.stack)
        return;
      this.remove();
    }
    /**
     * Removes the alert from the application cache, allowing
     * it to be active by default (if not a notification).
     */
    cacheAlert() {
      const alerts = JSON.parse(localStorage.getItem("alerts") || "[]");
      localStorage.setItem("alerts", JSON.stringify(alerts.filter((a4) => a4 !== this.id)));
    }
    /**
     * Adds the alert to the application cache, which will
     * prevent the alert from showing again.
     */
    removeCache() {
      if (!this.id)
        return;
      const alerts = [...JSON.parse(localStorage.getItem("alerts") || "[]"), this.id];
      localStorage.setItem("alerts", JSON.stringify(alerts));
    }
    activityUpdate() {
      this.resetTimeout();
      this.emit(`hmwc-${this.active ? "show" : "hide"}`);
    }
    resetTimeout() {
      if (!(this.active && (this.duration || 0) < Infinity))
        return;
      clearTimeout(this.timeout);
      this.timeout = window.setTimeout(() => this.hide(), this.duration);
    }
    cacheUpdate() {
      if (!this.cache)
        return;
      this.cached = JSON.parse(localStorage.getItem("alerts") || "[]").includes(this.id);
    }
    stackUpdate() {
      if (!this.stack)
        return;
      this.duration = this.duration === Infinity ? 5e3 : this.duration;
    }
    connectedCallback() {
      super.connectedCallback();
      if (this.stack)
        return;
      this.active = this.active === void 0 ? true : this.cached ? false : this.active;
    }
    render() {
      const classifier = e7({
        alert: true,
        active: !!this.active,
        dismissible: !!this.dismissible,
        stack: !!this.stack,
        primary: !!this.primary,
        success: !!this.success,
        neutral: !!this.neutral,
        warning: !!this.warning,
        danger: !!this.danger
      });
      return b2`
      <div
        part="base"
        class=${classifier}
        role="alert"
        ?hidden=${!this.active}
        aria-hidden=${this.active ? "false" : "true"}
        @mousemove=${this.resetTimeout}>
        <slot name="icon" part="icon" class="alert__icon">
          <hmwc-icon
            src=${this.icon || this.primary ? "info-circle" : this.success ? "check2-circle" : this.neutral ? "gear" : this.warning ? "exclamation-triangle" : this.danger ? "exclamation-octagon" : "exclamation-circle"}></hmwc-icon>
        </slot>

        <slot part="body" class="alert__body" aria-live="polite">
          <slot name="title" part="title" class="alert__title">${this.title}</slot>
          <slot name="label" part="label" class="alert__label">${this.label}</slot>
        </slot>

        ${this.dismissible ? b2`
              <slot name="dismiss" part="dismiss" class="alert__dismiss">
                <hmwc-button basic icon="x" aria-label="close alert" @hmwc-click=${this.hide}></hmwc-button>
              </slot>
            ` : ""}
      </div>
    `;
    }
  };
  Alert.styles = styles8;
  Alert.dependencies = [Icon, Button];
  __decorate10([
    r5()
  ], Alert.prototype, "cached", void 0);
  __decorate10([
    r5()
  ], Alert.prototype, "timeout", void 0);
  __decorate10([
    n5({ type: Boolean, reflect: true })
  ], Alert.prototype, "active", void 0);
  __decorate10([
    n5({ type: Number })
  ], Alert.prototype, "duration", void 0);
  __decorate10([
    n5({ type: String })
  ], Alert.prototype, "title", void 0);
  __decorate10([
    n5({ type: String })
  ], Alert.prototype, "label", void 0);
  __decorate10([
    n5({ type: String })
  ], Alert.prototype, "icon", void 0);
  __decorate10([
    n5({ type: Boolean, reflect: true })
  ], Alert.prototype, "dismissible", void 0);
  __decorate10([
    n5({ type: Boolean, reflect: true })
  ], Alert.prototype, "cache", void 0);
  __decorate10([
    n5({ type: Boolean, reflect: true })
  ], Alert.prototype, "stack", void 0);
  __decorate10([
    n5({ type: Boolean, reflect: true })
  ], Alert.prototype, "primary", void 0);
  __decorate10([
    n5({ type: Boolean, reflect: true })
  ], Alert.prototype, "success", void 0);
  __decorate10([
    n5({ type: Boolean, reflect: true })
  ], Alert.prototype, "neutral", void 0);
  __decorate10([
    n5({ type: Boolean, reflect: true })
  ], Alert.prototype, "warning", void 0);
  __decorate10([
    n5({ type: Boolean, reflect: true })
  ], Alert.prototype, "danger", void 0);
  __decorate10([
    watch("active", { waitUntilFirstUpdate: true })
  ], Alert.prototype, "activityUpdate", null);
  __decorate10([
    watch("duration")
  ], Alert.prototype, "resetTimeout", null);
  __decorate10([
    watch("cache")
  ], Alert.prototype, "cacheUpdate", null);
  __decorate10([
    watch("stack")
  ], Alert.prototype, "stackUpdate", null);
  var _fallbackStack;
  function getFallbackStack() {
    if (!_fallbackStack) {
      _fallbackStack = Object.assign(document.createElement("div"), {
        className: "hmwc-notification-stack"
      });
      _fallbackStack.style.cssText = notificationStyles;
      _fallbackStack.style.position = "fixed";
    }
    if (!_fallbackStack.parentElement) {
      document.body.appendChild(_fallbackStack);
    }
    return _fallbackStack;
  }
  function resolveStack(from, useGlobal = false) {
    if (useGlobal) {
      const globalHost = document.querySelector("[notificationstack][global]");
      if (globalHost?._stackContainer)
        return globalHost._stackContainer;
      const allHosts = document.querySelectorAll("[notificationstack]");
      if (allHosts.length) {
        const outermost = allHosts[0];
        if (outermost._stackContainer)
          return outermost._stackContainer;
      }
      return getFallbackStack();
    }
    if (from) {
      const host = from.closest("[notificationstack]");
      if (host?._stackContainer)
        return host._stackContainer;
    }
    return getFallbackStack();
  }
  function HMWCAlert(options = {}) {
    const explicit = Object.fromEntries(Object.entries(options).filter(([, v2]) => v2 !== void 0));
    const resolved = options.preset ? { ...AlertPresets[options.preset], ...explicit } : options;
    const alert = document.createElement("hmwc-alert");
    const target = resolveStack(options.relativeTo, !!resolved.global);
    alert.stack = true;
    target.appendChild(alert);
    if (resolved.title)
      alert.title = resolved.title;
    if (resolved.label)
      alert.label = resolved.label;
    if (resolved.icon)
      alert.icon = resolved.icon;
    if (resolved.dismissible)
      alert.dismissible = true;
    if (resolved.duration !== void 0)
      alert.duration = resolved.duration;
    if (resolved.variant)
      alert[resolved.variant] = true;
    if (options.className)
      alert.className += ` ${options.className}`;
    if (options.style) {
      if (typeof options.style === "string") {
        alert.setAttribute("style", options.style);
      } else {
        Object.assign(alert.style, options.style);
      }
    }
    if (options.onShow)
      alert.addEventListener("hmwc-show", () => options.onShow(alert));
    if (options.onHide)
      alert.addEventListener("hmwc-hide", () => options.onHide(alert));
    alert.active = true;
    return {
      alert,
      close: () => alert.hide()
    };
  }

  // dist/components/alert/index.js
  Alert.define("hmwc-alert", Alert);

  // node_modules/lit-html/directive-helpers.js
  var { I: t4 } = j;
  var r6 = (o8) => void 0 === o8.strings;
  var m2 = {};
  var p3 = (o8, t5 = m2) => o8._$AH = t5;

  // node_modules/lit-html/directives/live.js
  var l4 = e6(class extends i5 {
    constructor(r7) {
      if (super(r7), r7.type !== t3.PROPERTY && r7.type !== t3.ATTRIBUTE && r7.type !== t3.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
      if (!r6(r7)) throw Error("`live` bindings can only contain a single expression");
    }
    render(r7) {
      return r7;
    }
    update(i7, [t5]) {
      if (t5 === E || t5 === A) return t5;
      const o8 = i7.element, l5 = i7.name;
      if (i7.type === t3.PROPERTY) {
        if (t5 === o8[l5]) return E;
      } else if (i7.type === t3.BOOLEAN_ATTRIBUTE) {
        if (!!t5 === o8.hasAttribute(l5)) return E;
      } else if (i7.type === t3.ATTRIBUTE && o8.getAttribute(l5) === t5 + "") return E;
      return p3(i7), t5;
    }
  });

  // dist/components/checkbox/checkbox.styles.js
  var styles9 = i`
  :host {
    display: flex;
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
        var(--hmwc-transition-fast) box-shadow;

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
      margin-inline-start: 0.5em;
      user-select: none;
      -webkit-user-select: none;
    }

    &.checked,
    &.indeterminate {
      & .checkbox__control {
        border-color: var(--hmwc-color-primary-600);
        background-color: var(--hmwc-color-primary-600);
      }

      &:not(.disabled) {
        & .checkbox__control {
          &:hover {
            border-color: var(--hmwc-color-primary-700);
            background-color: var(--hmwc-color-primary-700);
          }
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
      & .checkbox__control {
        &:hover {
          border-color: var(--hmwc-input-border-color-hover);
          background-color: var(--hmwc-input-background-color-hover);
        }
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

    &.required {
      & .checkbox__label {
        &::after {
          content: var(--hmwc-input-required-content);
          margin-inline-start: var(--hmwc-input-required-content-offset);
        }
      }
    }
  }
`;
  var check = b2`
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
`;
  var indeterminate = b2`
  <svg part="icon" viewBox="0 0 16 16">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
      <g stroke="currentColor" stroke-width="2">
        <g transform="translate(2.285714, 6.857143)">
          <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
        </g>
      </g>
    </g>
  </svg>
`;

  // dist/components/checkbox/checkbox.component.js
  var __decorate11 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Checkbox = class extends HMWCFormComponent {
    handleStateChange() {
      this.input.checked = !!this.checked;
      this.input.indeterminate = this.indeterminate;
    }
    /** Simulates a click on the checkbox. */
    click() {
      this.input.click();
    }
    /** Sets focus on the checkbox. */
    focus(options) {
      this.input.focus(options);
    }
    /** Removes focus from the checkbox. */
    blur() {
      this.input.blur();
    }
    /**
     * Checks for validity but does not show a validation message.
     * Returns true when valid and false when invalid.
     */
    checkValidity() {
      return true;
    }
    /**
     * Checks for validity and shows the browser’s validation
     * message if the control is invalid.
     */
    reportValidity() {
      return this.input.reportValidity();
    }
    handleClick() {
      this.checked = !this.checked;
      this.indeterminate = false;
      this.emit("hmwc-change", { detail: { value: this.checked } });
    }
    handleBlur() {
      this.emit("blur", {});
    }
    handleFocus() {
      this.emit("focus", {});
    }
    handleInput() {
      this.emit("hmwc-input", {});
    }
    connectedCallback() {
      super.connectedCallback();
      if (!this.sm && !this.md && !this.lg) {
        this.md = true;
      }
    }
    render() {
      const indeterminate2 = !this.checked && this.indeterminate;
      const classifier = e7({
        checkbox: true,
        checked: this.checked,
        indeterminate: indeterminate2,
        sm: !!this.sm,
        md: !!this.md,
        lg: !!this.lg,
        disabled: !!this.disabled,
        required: !!this.required
      });
      return b2`
      <label part="base" class=${classifier}>
        <input
          class="checkbox__input"
          type="checkbox"
          name=${o6(this.name)}
          value=${o6(this.value)}
          .indeterminate=${l4(this.indeterminate)}
          .checked=${l4(this.checked)}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-checked=${this.checked}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur} />

        <span part="control" class="checkbox__control"> ${this.checked ? check : ""} ${indeterminate2 ? indeterminate : ""} </span>

        <slot part="label" class="checkbox__label">${this.label}</slot>
      </label>
    `;
    }
  };
  Checkbox.styles = styles9;
  Checkbox.toggle = true;
  __decorate11([
    n5({ type: Boolean, reflect: true })
  ], Checkbox.prototype, "indeterminate", void 0);
  __decorate11([
    e5(".checkbox__input")
  ], Checkbox.prototype, "input", void 0);
  __decorate11([
    watch(["checked", "indeterminate"], { waitUntilFirstUpdate: true })
  ], Checkbox.prototype, "handleStateChange", null);

  // dist/components/checkbox/index.js
  Checkbox.define("hmwc-checkbox", Checkbox);

  // dist/components/divider/divider.styles.js
  var styles10 = i`
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
`;

  // dist/components/divider/divider.component.js
  var __decorate12 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Divider = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.horizontal = true;
    }
    orientationUpdate() {
      if (this.vertical)
        this.horizontal = false;
    }
    render() {
      const classifier = e7({
        divider: true,
        horizontal: !!this.horizontal,
        vertical: !!this.vertical,
        "spacing-xs": this.spacing === "xs",
        "spacing-sm": this.spacing === "sm",
        "spacing-md": this.spacing === "md",
        "spacing-lg": this.spacing === "lg",
        "spacing-xl": this.spacing === "xl",
        sm: !!this.sm,
        md: !!this.md,
        lg: !!this.lg,
        primary: !!this.primary,
        success: !!this.success,
        neutral: !!this.neutral,
        warning: !!this.warning,
        danger: !!this.danger
      });
      return b2`<div part="base" class=${classifier} role="separator" aria-orientation=${this.vertical ? "vertical" : "horizontal"}></div>`;
    }
  };
  Divider.styles = styles10;
  __decorate12([
    n5({ type: Boolean, reflect: true })
  ], Divider.prototype, "horizontal", void 0);
  __decorate12([
    n5({ type: Boolean, reflect: true })
  ], Divider.prototype, "vertical", void 0);
  __decorate12([
    n5({ type: String, reflect: true })
  ], Divider.prototype, "spacing", void 0);
  __decorate12([
    n5({ type: Boolean, reflect: true })
  ], Divider.prototype, "sm", void 0);
  __decorate12([
    n5({ type: Boolean, reflect: true })
  ], Divider.prototype, "md", void 0);
  __decorate12([
    n5({ type: Boolean, reflect: true })
  ], Divider.prototype, "lg", void 0);
  __decorate12([
    n5({ type: Boolean, reflect: true })
  ], Divider.prototype, "primary", void 0);
  __decorate12([
    n5({ type: Boolean, reflect: true })
  ], Divider.prototype, "success", void 0);
  __decorate12([
    n5({ type: Boolean, reflect: true })
  ], Divider.prototype, "neutral", void 0);
  __decorate12([
    n5({ type: Boolean, reflect: true })
  ], Divider.prototype, "warning", void 0);
  __decorate12([
    n5({ type: Boolean, reflect: true })
  ], Divider.prototype, "danger", void 0);
  __decorate12([
    watch("vertical")
  ], Divider.prototype, "orientationUpdate", null);

  // dist/components/divider/index.js
  Divider.define("hmwc-divider", Divider);

  // dist/components/calendar/calendar.styles.js
  var styles11 = i`
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
      gap: var(--hmwc-spacing-medium);
      padding-inline: var(--hmwc-spacing-large);
      align-items: center;
      justify-content: space-between;

      & .calendar__label {
        gap: calc(0.9 * var(--hmwc-spacing-x-small));
        display: flex;
        color: var(--calendar-label-color);
        font-size: var(--calendar-label-size);
        font-weight: var(--calendar-label-weight);
      }

      & .calendar__navigation {
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
`;

  // dist/components/calendar/calendar.component.js
  var __decorate13 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Calendar = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.MONTHS = [...Array(12).keys()].map((key) => new Date(0, key).toLocaleString("en", { month: "long" }));
      this.DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      this.dates = [];
      this.selection = [];
      this.dragAction = "add";
      this.value = [];
      this.placeholder = [];
      this.month = (/* @__PURE__ */ new Date()).getMonth();
      this.year = (/* @__PURE__ */ new Date()).getFullYear();
      this.valueUpdate = () => this.parseDates();
      this.selectionUpdate = () => this.emit("hmwc-change", { detail: { value: this.selection } });
      this.dateUpdate = () => this.dates = this.getDates();
      this.multipleUpdate = () => this.selection = this.selection.slice(0, 1);
    }
    /**
     * Navigates to a new month/year in the calendar and
     * updates the calendar accordingly.
     */
    navigate(month, year = this.year) {
      if (month === void 0)
        return;
      if (year === this.year) {
        if (month < 0)
          month = 11, year--;
        else if (month > 11)
          month = 0, year++;
      }
      this.month = month;
      this.year = year;
    }
    /**
     * Selects/deselects the provided date and updates the
     * calendar accordingly.
     */
    select(date) {
      if (new Date(date).getMonth() !== this.month) {
        return;
      }
      this.emit("select", { detail: { value: date } });
      if (this.selection.find((d3) => +d3 === +date)) {
        this.selection = this.selection.filter((d3) => +d3 !== +date);
      } else {
        this.selection = [...this.multiple ? this.selection : [], date];
      }
    }
    /**
     * Parses the selected dates and converts any string
     * representations into date objects.
     */
    parseDates() {
      this.selection = this.value.map((d3) => new Date(d3));
    }
    /**
     * Returns the dates associated with the current
     * month & year.
     */
    getDates() {
      const dates = [];
      const month = {
        start: new Date(this.year, this.month, 1),
        end: new Date(this.year, this.month + 1, 0)
      };
      for (let i7 = month.start.getDay() - 1; i7 >= 0; i7--) {
        const date = new Date(month.start);
        date.setDate(date.getDate() - (i7 + 1));
        dates.push(date);
      }
      for (let i7 = 1; i7 <= month.end.getDate(); i7++) {
        dates.push(new Date(this.year, this.month, i7));
      }
      const remainingDays = 42 - dates.length;
      for (let i7 = 1; i7 <= remainingDays; i7++) {
        dates.push(new Date(this.year, this.month + 1, i7));
      }
      const rows = [];
      for (let i7 = 0; i7 < dates.length; i7 += 7) {
        rows.push(dates.slice(i7, i7 + 7));
      }
      const filteredRows = rows.filter((row) => row.some((date) => date.getMonth() === this.month));
      return filteredRows.flat();
    }
    /**
     * Retrieves the date object associated with the provided
     * UI element.
     *
     * (if it is valid and of the currently selected month).
     */
    getDate(element) {
      return this.dates.find((d3) => {
        const date = new Date(d3);
        const validity = [
          date.getDate() === parseInt(element.innerText),
          date.getMonth() === this.month,
          date.getFullYear() === this.year,
          element.hasAttribute("current")
        ];
        return validity.every((v2) => v2);
      });
    }
    /**
     * Selects/deselects the targeted date and initiates drag
     * logic for multi-selection.
     */
    startDrag(e8) {
      if (this.disabled)
        return;
      this.dragTarget = e8.target;
      const date = this.getDate(this.dragTarget);
      date && this.select(date);
      this.dragAction = this.dragTarget?.hasAttribute("selected") ? "remove" : "add";
    }
    /**
     * Handle multi-selection/deselection of dates by
     * dragging.
     */
    drag(e8) {
      if (!this.dragTarget)
        return;
      const target = e8.target;
      document.activeElement;
      const validity = [
        target === this.dragTarget,
        target.className !== "calendar__date",
        this.dragAction === "add" && target.hasAttribute("selected"),
        this.dragAction === "remove" && !target.hasAttribute("selected")
      ];
      if (validity.some((v2) => v2))
        return;
      const date = this.getDate(target);
      date && this.select(date);
    }
    /**
     * Resets all drag logic to it's initial state.
     */
    stopDrag() {
      this.dragAction = "add";
      this.dragTarget = void 0;
    }
    render() {
      const classifier = e7({
        calendar: true,
        navigation: !!this.navigation,
        basic: !!this.basic,
        disabled: !!this.disabled
      });
      return b2`
      <div part="base" class=${classifier} @mouseup=${this.stopDrag} @mouseleave=${this.stopDrag} @mousemove=${this.drag}>
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
            @hmwc-click=${() => this.navigate(this.month - 1)}>
          </hmwc-button>

          <div slot="label" part="label" class="calendar__label">
            <div part="month" class="calendar__label-month">${this.MONTHS[this.month]}</div>
            <div part="year" class="calendar__label-year">${this.year}</div>
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
            @hmwc-click=${() => this.navigate(this.month + 1)}>
          </hmwc-button>
        </div>

        <div part="body" class="calendar__body" @mousedown=${this.startDrag}>
          ${this.DAYS.map((date) => b2` <div part="days" class="calendar__days">${date}</div> `)}
          ${this.dates.map((date) => b2`
              <div
                class="calendar__date"
                part="date"
                ?current=${date.getMonth() === this.month}
                ?selected=${this.selection.find((d3) => +d3 === +date)}
                ?placeholder=${this.placeholder.find((p4) => +date === +p4)}>
                ${date.getDate()}
              </div>
            `)}
        </div>
      </div>
    `;
    }
  };
  Calendar.styles = styles11;
  Calendar.dependencies = [Button];
  __decorate13([
    r5()
  ], Calendar.prototype, "dates", void 0);
  __decorate13([
    r5()
  ], Calendar.prototype, "selection", void 0);
  __decorate13([
    r5()
  ], Calendar.prototype, "dragAction", void 0);
  __decorate13([
    r5()
  ], Calendar.prototype, "dragTarget", void 0);
  __decorate13([
    n5({ type: Array, reflect: true })
  ], Calendar.prototype, "value", void 0);
  __decorate13([
    n5({ type: Array, reflect: true })
  ], Calendar.prototype, "placeholder", void 0);
  __decorate13([
    n5({ type: Number, reflect: true })
  ], Calendar.prototype, "month", void 0);
  __decorate13([
    n5({ type: Number, reflect: true })
  ], Calendar.prototype, "year", void 0);
  __decorate13([
    n5({ type: Boolean, reflect: true })
  ], Calendar.prototype, "navigation", void 0);
  __decorate13([
    n5({ type: Boolean, reflect: true })
  ], Calendar.prototype, "multiple", void 0);
  __decorate13([
    n5({ type: Boolean, reflect: true })
  ], Calendar.prototype, "disabled", void 0);
  __decorate13([
    n5({ type: Boolean, reflect: true })
  ], Calendar.prototype, "basic", void 0);
  __decorate13([
    watch("value")
  ], Calendar.prototype, "valueUpdate", void 0);
  __decorate13([
    watch("selection", { waitUntilFirstUpdate: true })
  ], Calendar.prototype, "selectionUpdate", void 0);
  __decorate13([
    watch(["month", "year"])
  ], Calendar.prototype, "dateUpdate", void 0);
  __decorate13([
    watch("multiple", { waitUntilFirstUpdate: true })
  ], Calendar.prototype, "multipleUpdate", void 0);

  // dist/components/calendar/index.js
  Calendar.define("hmwc-calendar", Calendar);

  // dist/components/input/input.styles.js
  var styles12 = i`
  :host {
    --input-background: var(--hmwc-input-background-color);
    --input-color: var(--hmwc-input-color);
    --input-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color);
    --input-border-color: var(--hmwc-input-border-color);
    --input-radius: var(--hmwc-input-border-radius-large);
    --input-shadow: var(--hmwc-shadow-x-small);
    --input-width: auto;
    --input-outline: none;

    --icon-size: 1rem;

    display: block;
    flex: var(--input-flex, 1 1 18ch);
    min-width: var(--input-min-width, 10ch);
  }

  :host([fluid]) {
    width: 100%;
    min-width: 0;
    flex-basis: 100%;
  }

  :host([type='date']) {
    flex: var(--input-flex, 1.5 1 22ch);
    min-width: var(--input-min-width, 16ch);
  }

  :host([type='number']) {
    flex: var(--input-flex, 1 1 10ch);
    min-width: var(--input-min-width, 3ch);
  }

  :host([type='tel']) {
    flex: var(--input-flex, 1.25 1 18ch);
    min-width: var(--input-min-width, 14ch);
  }

  :host([type='time']) {
    flex: var(--input-flex, 1 1 10ch);
    min-width: var(--input-min-width, 8ch);
  }

  :host([type='email']),
  :host([type='url']) {
    flex: var(--input-flex, 1.25 1 22ch);
    min-width: var(--input-min-width, 14ch);
  }

  :host([type='search']) {
    flex: var(--input-flex, 1.25 1 20ch);
    min-width: var(--input-min-width, 12ch);
  }

  .input {
    display: grid;

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
            position: relative;
            top: 1px;
          }
        }

        & .input__prefix {
          left: var(--hmwc-spacing-medium);
          right: initial;
          margin: auto;
        }

        & .input__prefix,
        & .input__suffix {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          cursor: default;

          &::slotted(hmwc-icon),
          & hmwc-icon {
            --icon-color: var(--hmwc-input-icon-color);
          }
        }

        & .input__suffix {
          height: 100%;
          right: 0;
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
        & hmwc-button {
          --button-padding: 0 var(--hmwc-spacing-small);
          &::part(base) {
            border: none;
            border-radius: 0;
            box-shadow: none;
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
      }

      & .input__calendar_toggle {
        border-inline-end: var(--hmwc-input-border-width) solid var(--input-border-color);
      }

      & .input__field {
        border: none;
        border-radius: 0;
        box-shadow: none;
      }
    }

    /** hover */
    &:not(.disabled) {
      &:has(.input__field:hover),
      &:has(.input__calendar_toggle:hover) {
        --input-background: var(--hmwc-input-background-color-hover);
        --input-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color-hover);
        --input-border-color: var(--hmwc-input-border-color-hover);

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
        & .input__field:hover {
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

    &.small {
      --input-radius: calc(1.15 * var(--hmwc-input-border-radius-medium));

      & .input__field,
      & .input__control,
      & .input__label {
        font-size: var(--hmwc-input-font-size-small);
      }

      &:not(.textarea) {
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
          height: var(--hmwc-input-height-small);
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

      & .input__prefix::slotted(*),
      & .input__prefix hmwc-icon {
        margin-inline-start: var(--hmwc-input-spacing-small);
      }

      & .input__suffix::slotted(*),
      & .input__suffix hmwc-icon {
        margin-inline-end: var(--hmwc-input-spacing-small);
      }

      &.clearable .input__clear,
      &.toggle .input__toggle {
        width: calc(1em + var(--hmwc-input-spacing-small) * 2);
      }

      & .input__calendar_toggle {
        & hmwc-button {
          --icon-size: reset;
          display: flex;

          &::part(base) {
            padding-top: 0.075rem;
            padding-bottom: 0.075rem;
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

      & .input__prefix::slotted(*),
      & .input__prefix hmwc-icon {
        margin-inline-start: var(--hmwc-input-spacing-medium);
      }

      & .input__suffix::slotted(*),
      & .input__suffix hmwc-icon {
        margin-inline-end: var(--hmwc-input-spacing-medium);
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

      & .input__prefix::slotted(*),
      & .input__prefix hmwc-icon {
        margin-inline-start: var(--hmwc-input-spacing-large);
      }

      & .input__suffix::slotted(*),
      & .input__suffix hmwc-icon {
        margin-inline-end: var(--hmwc-input-spacing-large);
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

      &:hover {
        --input-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color-invalid-hover);
        --input-border-color: var(--hmwc-input-border-color-invalid-hover);
      }

      &:focus-within {
        --input-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color-invalid);
        --input-border-color: var(--hmwc-input-border-color-invalid);
        --input-outline: var(--hmwc-focus-ring-style) var(--hmwc-focus-ring-width) var(--hmwc-focus-ring-color-invalid);
        --input-shadow: 0 0 0 var(--hmwc-focus-ring-width) var(--hmwc-input-focus-ring-color-invalid);
      }

      & .input__help {
        color: var(--hmwc-input-border-color-invalid);
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

    &.label-top {
      align-content: end;
      & .input__wrapper {
        grid-row: 2;
        grid-column: 1;
      }

      & .input__label {
        grid-row: 1;
        grid-column: 1;
      }
    }

    &.label-bottom {
      & .input__wrapper {
        grid-row: 1;
        grid-column: 1;
      }

      & .input__label {
        grid-row: 2;
        grid-column: 1;
      }
    }

    &.label-left {
      grid-template-columns: auto 1fr;
      column-gap: 1rem;

      & .input__wrapper {
        grid-row: 1;
        grid-column: 2;
      }

      & .input__label {
        grid-row: 1;
        grid-column: 1;
        text-align: end;
      }
    }

    &.label-right {
      grid-template-columns: 1fr auto;
      column-gap: 1rem;

      & .input__wrapper {
        grid-row: 1;
        grid-column: 1;
      }

      & .input__label {
        grid-row: 1;
        grid-column: 2;
        text-align: end;
      }
    }
  }
`;

  // dist/components/input/input.component.js
  var __decorate14 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Input = class extends HMWCFormComponent {
    constructor() {
      super(...arguments);
      this.initialValueDateParsed = false;
      this.autoFocusLost = false;
      this.isManuallyTyping = false;
      this._isDeleting = false;
      this.dates = [];
      this.type = "text";
      this.labelPos = "top";
      this.dateFormat = "MM/DD/YYYY";
      this.open = false;
      this._calendarLoseFocus = null;
    }
    handleLabelChange() {
      if (this.required) {
        if (!this.label)
          return;
        this.label = `${this.label} *`;
      } else {
        const chars = Array.from(this.label);
        if (chars[chars.length - 1] === "*") {
          this.label = chars.slice(0, chars.length - 1).join("");
        }
      }
    }
    handleValueChange() {
      if (this.type === "tel") {
        const numbers = this.value.toString().split("").filter((n7) => n7 !== "-");
        if (numbers.length === 3) {
          this.value = `${numbers.slice(0, 3).join("")}-`;
        } else if (numbers.length === 6) {
          this.value = `${numbers.slice(0, 3).join("")}-${numbers.slice(3, 6).join("")}-`;
        } else if (numbers.length === 10) {
          this.value = `${numbers.slice(0, 3).join("")}-${numbers.slice(3, 6).join("")}-${numbers.slice(6).join("")}`;
        } else if (numbers.length === 11) {
          this.value = `${numbers[0]}-${numbers.slice(1, 4).join("")}-${numbers.slice(4, 7).join("")}-${numbers.slice(7).join("")}`;
        } else {
          this.value = this.value.toString();
        }
      }
      if (this.type !== "date")
        return;
      if (!this.value) {
        this.dates = [];
        this.initialValueDateParsed = false;
        return;
      }
      if (this.isManuallyTyping)
        return;
      if (this.initialValueDateParsed)
        return;
      this.initialValueDateParsed = true;
      if (!isNaN(Date.parse(this.value))) {
        const date = new Date(this.value);
        this.updateDates([date]);
      }
    }
    handleCalendarToggle() {
      if (this.type !== "date")
        return;
      if (this._calendarLoseFocus) {
        document.removeEventListener("mousedown", this._calendarLoseFocus);
        this._calendarLoseFocus = null;
      }
      if (this.open) {
        this._calendarLoseFocus = (e8) => {
          const path = e8.composedPath();
          if (path.includes(this))
            return;
          this.open = false;
          this.emit("hmwc-hide", {});
        };
        document.addEventListener("mousedown", this._calendarLoseFocus);
      }
    }
    /** Sets focus on the input. */
    focus(options) {
      this.input.focus(options);
    }
    /** Removes focus from the input. */
    blur() {
      this.input.blur();
    }
    /** Selects all the text in the input. */
    select() {
      this.input.select();
    }
    /** Clears the input's value. */
    clear() {
      this.value = this.input.value = "";
      this.dates = [];
      this.emit("hmwc-change");
      this.emit("hmwc-input");
    }
    getDates() {
      return this.dates;
    }
    /**
     * Checks for validity but does not show a validation message.
     * Returns true when valid and false when invalid.
     */
    checkValidity() {
      return this.input?.checkValidity();
    }
    /**
     * Checks for validity and shows the browser's validation
     * message if the control is invalid.
     */
    reportValidity() {
      return this.input?.reportValidity();
    }
    get validationMessage() {
      return this.input.validationMessage;
    }
    set validationMessage(value) {
      this.input.setCustomValidity(value);
    }
    /**
     * Formats a Date object according to the configured dateFormat.
     */
    formatDate(date) {
      const yyyy = date.getFullYear().toString();
      const mm = (date.getMonth() + 1).toString().padStart(2, "0");
      const dd = date.getDate().toString().padStart(2, "0");
      switch (this.dateFormat) {
        case "YYYY-MM-DD":
          return `${yyyy}-${mm}-${dd}`;
        case "YYYY/MM/DD":
          return `${yyyy}/${mm}/${dd}`;
        case "DD/MM/YYYY":
          return `${dd}/${mm}/${yyyy}`;
        case "DD-MM-YYYY":
          return `${dd}-${mm}-${yyyy}`;
        case "MM-DD-YYYY":
          return `${mm}-${dd}-${yyyy}`;
        case "MM/DD/YYYY":
        default:
          return `${mm}/${dd}/${yyyy}`;
      }
    }
    /**
     * Parses a date string and returns a Date object if valid
     */
    parseDate(dateString) {
      if (!dateString || !dateString.trim())
        return null;
      const formatParsed = this.parseDateByFormat(dateString);
      if (formatParsed)
        return formatParsed;
      const parsed = Date.parse(dateString);
      if (!isNaN(parsed)) {
        return new Date(parsed);
      }
      const formats = [
        /^(\d{1,2})[\\-](\d{1,2})[\\-](\d{4})$/,
        // MM/DD/YYYY or DD/MM/YYYY
        /^(\d{4})[\\-](\d{1,2})[\\-](\d{1,2})$/,
        // YYYY-MM-DD
        /^(\d{1,2})[\\-](\d{1,2})[\\-](\d{2})$/
        // MM/DD/YY
      ];
      for (const format of formats) {
        const match = dateString.match(format);
        if (match) {
          let year, month, day;
          if (format === formats[1]) {
            ;
            [, year, month, day] = match.map(Number);
          } else if (format === formats[2]) {
            ;
            [, month, day, year] = match.map(Number);
            year += 2e3;
          } else {
            ;
            [, month, day, year] = match.map(Number);
          }
          const date = new Date(year, month - 1, day);
          if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day) {
            return date;
          }
        }
      }
      return null;
    }
    /**
     * Parses a date string according to the configured dateFormat.
     */
    parseDateByFormat(dateString) {
      const separator = this.dateFormat.includes("/") ? "/" : "-";
      const parts = dateString.split(separator);
      if (parts.length !== 3)
        return null;
      const formatParts = this.dateFormat.split(separator);
      const yearIndex = formatParts.findIndex((p4) => p4 === "YYYY");
      const monthIndex = formatParts.findIndex((p4) => p4 === "MM");
      const dayIndex = formatParts.findIndex((p4) => p4 === "DD");
      if (yearIndex === -1 || monthIndex === -1 || dayIndex === -1)
        return null;
      const year = parseInt(parts[yearIndex], 10);
      const month = parseInt(parts[monthIndex], 10);
      const day = parseInt(parts[dayIndex], 10);
      if (isNaN(year) || isNaN(month) || isNaN(day))
        return null;
      const date = new Date(year, month - 1, day);
      if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day) {
        return date;
      }
      return null;
    }
    updateDates(dates, fromManualInput = false) {
      if (!dates.length) {
        if (fromManualInput) {
          this.dates = [];
        }
        return;
      }
      if (dates.length === 0) {
        this.value = "";
      } else if (dates.length === 1) {
        if (!(dates[0] instanceof Date)) {
          dates[0] = new Date(dates[0]);
        }
        if (!fromManualInput) {
          this.value = this.formatDate(dates[0]);
        }
        this.month = dates[0].getMonth();
        this.year = dates[0].getFullYear();
      } else if (dates.length > 1) {
        if (!fromManualInput) {
          this.value = `Multiple Dates Selected (${dates.length})`;
        }
      }
      this.dates = dates;
    }
    handleFocus() {
      if (this.type === "date") {
        this.isManuallyTyping = true;
      }
      this.emit("hmwc-focus");
    }
    handleBlur() {
      if (this.type === "date" && this.isManuallyTyping) {
        this.parseAndUpdateDate();
        this.isManuallyTyping = false;
      }
      this.emit("hmwc-blur");
      this.autoFocusLost = true;
    }
    handleInput() {
      if (this.type === "date" && this.isManuallyTyping) {
        const rawValue = this.input.value;
        const cursorPos = this.input.selectionStart ?? rawValue.length;
        const digitsBefore = this.countDigitsBefore(rawValue, cursorPos);
        const digits = rawValue.replace(/\D/g, "");
        const addSeparator = !this._isDeleting;
        const formatted = this.formatDateDigits(digits, addSeparator);
        if (formatted !== rawValue) {
          this.input.value = formatted;
        }
        this.value = formatted;
        const newCursor = this.findCursorPosition(formatted, digitsBefore);
        this.input.setSelectionRange(newCursor, newCursor);
      } else {
        this.value = this.input.value;
      }
      this.emit("hmwc-input", { detail: { value: this.value } });
    }
    handleChange() {
      if (this.input.value) {
        this.value = this.input.value;
      }
      if (this.type === "date") {
        this.parseAndUpdateDate();
      }
      this.emit("hmwc-change");
    }
    handleKeyDown(e8) {
      if (this.type !== "date")
        return;
      if (e8.key === "Backspace" || e8.key === "Delete") {
        this._isDeleting = true;
      } else {
        this._isDeleting = false;
      }
      if (e8.key === "Enter") {
        e8.preventDefault();
        this.parseAndUpdateDate();
        this.blur();
      }
      if (e8.key === "Escape") {
        e8.preventDefault();
        if (this.dates.length === 1) {
          this.value = this.formatDate(this.dates[0]);
        } else if (this.dates.length > 1) {
          this.value = `Multiple Dates Selected (${this.dates.length})`;
        } else {
          this.value = "";
        }
        this.input.value = this.value;
        this.blur();
      }
      if (e8.key.length === 1 && !e8.ctrlKey && !e8.metaKey && !/\d/.test(e8.key)) {
        e8.preventDefault();
      }
    }
    parseAndUpdateDate() {
      const inputValue = this.input.value;
      if (!inputValue || !inputValue.trim()) {
        this.updateDates([], true);
        return;
      }
      const parsedDate = this.parseDate(inputValue);
      if (parsedDate) {
        this.updateDates([parsedDate], true);
        this.value = this.formatDate(parsedDate);
        this.input.value = this.value;
        this.invalid = false;
        this.error = "";
      } else {
        this.invalid = true;
        this.error = `Invalid date format. Try ${this.dateFormat}`;
      }
    }
    /**
     * Returns the separator character and the lengths of each part
     * based on the configured dateFormat.
     */
    getDateFormatInfo() {
      const separator = this.dateFormat.includes("/") ? "/" : "-";
      const partLengths = this.dateFormat.split(separator).map((p4) => p4.length);
      return { separator, partLengths };
    }
    /**
     * Takes raw digit characters and inserts separators at the
     * correct positions based on the configured dateFormat.
     * Limits input to 8 digits (the max for any date format).
     * When addTrailingSeparator is true, appends a separator
     * immediately after the user completes a date part (e.g. MM or DD).
     */
    formatDateDigits(digits, addTrailingSeparator = false) {
      const { separator, partLengths } = this.getDateFormatInfo();
      const maxDigits = partLengths.reduce((a4, b3) => a4 + b3, 0);
      const limited = digits.slice(0, maxDigits);
      let result = "";
      let digitIndex = 0;
      for (let i7 = 0; i7 < partLengths.length && digitIndex < limited.length; i7++) {
        if (i7 > 0)
          result += separator;
        const chunk = limited.slice(digitIndex, digitIndex + partLengths[i7]);
        result += chunk;
        digitIndex += partLengths[i7];
      }
      if (addTrailingSeparator && limited.length > 0 && limited.length < maxDigits) {
        let accumulated = 0;
        for (let i7 = 0; i7 < partLengths.length; i7++) {
          accumulated += partLengths[i7];
          if (limited.length === accumulated && i7 < partLengths.length - 1) {
            result += separator;
            break;
          }
        }
      }
      return result;
    }
    /**
     * Counts how many digit characters appear before a given
     * position in a string.
     */
    countDigitsBefore(str, pos) {
      let count = 0;
      for (let i7 = 0; i7 < pos && i7 < str.length; i7++) {
        if (/\d/.test(str[i7]))
          count++;
      }
      return count;
    }
    /**
     * Finds the cursor position in a formatted string that
     * corresponds to having `targetDigits` digit characters
     * before it. If the position falls on a separator, advances
     * past it so the cursor lands where the next digit would go.
     */
    findCursorPosition(formatted, targetDigits) {
      let count = 0;
      for (let i7 = 0; i7 < formatted.length; i7++) {
        if (count === targetDigits) {
          while (i7 < formatted.length && !/\d/.test(formatted[i7])) {
            i7++;
          }
          return i7;
        }
        if (/\d/.test(formatted[i7]))
          count++;
      }
      return formatted.length;
    }
    /**
     * Handles paste events for date inputs. Attempts to parse
     * the pasted text as a date; falls back to digit extraction.
     */
    handlePaste(e8) {
      if (this.type !== "date")
        return;
      const pasted = e8.clipboardData?.getData("text");
      if (!pasted)
        return;
      e8.preventDefault();
      const parsedDate = this.parseDate(pasted);
      if (parsedDate) {
        const formatted2 = this.formatDate(parsedDate);
        this.input.value = formatted2;
        this.value = formatted2;
        this.updateDates([parsedDate], true);
        this.invalid = false;
        this.error = "";
        this.input.setSelectionRange(formatted2.length, formatted2.length);
        this.emit("hmwc-input", { detail: { value: this.value } });
        return;
      }
      const currentValue = this.input.value;
      const selStart = this.input.selectionStart ?? currentValue.length;
      const selEnd = this.input.selectionEnd ?? selStart;
      const before = currentValue.slice(0, selStart);
      const after = currentValue.slice(selEnd);
      const combined = before + pasted + after;
      const digits = combined.replace(/\D/g, "");
      const formatted = this.formatDateDigits(digits, true);
      const pastedDigits = pasted.replace(/\D/g, "").length;
      const digitsBefore = this.countDigitsBefore(currentValue, selStart);
      const newCursor = this.findCursorPosition(formatted, digitsBefore + pastedDigits);
      this.input.value = formatted;
      this.value = formatted;
      this.input.setSelectionRange(newCursor, newCursor);
      this.emit("hmwc-input", { detail: { value: this.value } });
    }
    handleClick() {
      if (!this.disabled && this.type !== "date") {
        return;
      }
      if (this.type === "date" && !this.isManuallyTyping) {
        this.open = !this.open;
      }
    }
    handleClear() {
      this.clear();
      this.input.focus();
    }
    handleToggle() {
      this.visible = !this.visible;
    }
    handleCalendarChange(e8) {
      const dates = e8.detail.value;
      this.updateDates(dates);
      if (!this.multiSelect) {
        document.addEventListener("mouseup", () => {
          this.open = false;
        }, { once: true, capture: true });
      }
      this.emit("hmwc-change");
    }
    connectedCallback() {
      super.connectedCallback();
      this.updateDates(this.dates);
      if (this.type === "tel") {
        this.pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}";
      }
      if (!this.sm && !this.md && !this.lg)
        this.md = true;
      if (this.type === "password" && this.minlength === void 0) {
        this.minlength = 8;
      }
      if (!this.autofocus)
        this.autoFocusLost = true;
      if (this.type === "date" && !this.placeholder) {
        this.placeholder = this.dateFormat;
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      if (this._calendarLoseFocus) {
        document.removeEventListener("mousedown", this._calendarLoseFocus);
        this._calendarLoseFocus = null;
      }
    }
    render() {
      const tag = this.textarea ? i6`textarea` : i6`input`;
      const typeOverride = this.type === "password" && this.visible || this.type === "date";
      const classifier = e7({
        input: true,
        small: !!this.sm,
        medium: !!this.md,
        large: !!this.lg,
        filled: !!this.filled,
        underline: !!this.underline,
        prefix: !!this.prefix,
        suffix: !!this.suffix || !!this.toggle,
        units: !this.units,
        pill: !!this.pill,
        toggle: !!this.toggle,
        clearable: !!this.clearable,
        textarea: !!this.textarea,
        disabled: !!this.disabled,
        date: this.type === "date",
        number: this.type === "number",
        calendar: this.open,
        valid: !!this.valid,
        invalid: !!this.invalid,
        "label-top": this.labelPos === "top",
        "label-right": this.labelPos === "right",
        "label-bottom": this.labelPos === "bottom",
        "label-left": this.labelPos === "left"
      });
      return u3`
      <div part='base' class=${classifier}>

        <!-- Label -->
        <label part="label" class="input__label" for='hmwc-input' aria-hidden=${!this.label}>
          <slot>${this.label}</slot>
        </label>

        <!-- Styling Wrappers -->
        <span class="input__wrapper">

            <!-- Calendar Toggle Button -->
            ${this.type === "date" && !this.suffix ? u3`
                    <slot name="calendar-toggle" part="calendar-toggle" class="input__calendar_toggle">
                      <hmwc-button
                        ?sm=${this.sm}
                        ?lg=${this.lg}
                        ?disabled=${this.disabled}
                        fit
                        icon="calendar"
                        @hmwc-click=${() => this.open = !this.open}></hmwc-button>
                    </slot>
                  ` : ""}

            <!-- Input Box -->
            <div class='input__field' part="field">

              <!-- Prefix Icon -->
              <slot name="prefix" part="prefix" class="input__prefix">
                ${this.prefix ? u3`<hmwc-icon src=${this.prefix}></hmwc-icon>` : ""}
              </slot>

              <!-- Input/Textarea Element -->
              <${tag}
                part="input"
                id='hmwc-input'
                class="input__control"
                .value=${l4(this.value) || ""}
                name=${o6(this.name)}
                title=${this.title}
                type=${this.textarea ? void 0 : typeOverride ? "text" : this.type}
                placeholder=${o6(this.placeholder)}
                pattern=${o6(this.pattern)}
                ?readonly=${this.readonly}
                ?required=${this.required}
                ?autofocus=${this.autofocus}
                minlength=${o6(this.minlength)}
                maxlength=${o6(this.maxlength)}
                min=${o6(this.min)}
                max=${o6(this.max)}
                rows=${o6(this.rows)}
                autocapitalize=${o6(this.autocapitalize)}
                autocorrect=${o6(this.autocorrect)}
                spellcheck=${o6(this.spellcheck)}
                aria-describedby="help"
                aria-label="input"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
                @input=${this.handleInput}
                @change=${this.handleChange}
                @click=${this.handleClick}
                @keydown=${this.handleKeyDown}
                @paste=${this.handlePaste}
                /></${tag}>

              <!-- Suffix Icon -->
               ${this.suffix || this.loading || this.valid ? u3` <slot
                       name="suffix"
                       part="suffix"
                       class="input__suffix"
                       @click=${this.type === "date" ? () => this.open = !this.open : void 0}
                       style=${this.type === "date" ? "cursor: pointer;" : ""}>
                       ${this.suffix ? u3`<hmwc-icon src=${this.suffix}></hmwc-icon>` : ""}
                       ${!this.valid && this.loading ? u3`<hmwc-spinner primary></hmwc-spinner>` : ""}
                       ${!this.loading ? u3` ${this.valid ? u3`<hmwc-icon success src="check-circle-fill"></hmwc-icon>` : ""}
                           ${this.invalid ? u3`<hmwc-icon danger src="x-circle-fill"></hmwc-icon>` : ""}` : ""}
                     </slot>` : ""}

             ${this.units ? u3`<div part="units" class="input__units">${this.units}</div>` : ""}

              <!-- Clear Button -->
               ${!this.loading && this.clearable && this.value && !this.loading && !this.valid ? u3` <slot name="clear" part="clear" class="input__clear">
                       <hmwc-button basic sm icon="x-circle-fill" @hmwc-click=${this.handleClear}></hmwc-button>
                     </slot>` : ""}

              <!-- Password Visibility Toggle -->
              <slot name='toggle' part='toggle' class='input__toggle'>
                ${this.toggle ? u3` <hmwc-button basic sm icon=${this.visible ? "eye-slash" : "eye"} @hmwc-click=${this.handleToggle}> </hmwc-button> ` : ""}
              </slot>
            </div>


            <!-- Help Text -->
            <slot name="help" part="help" class="input__help" aria-hidden=${!this.help}>
                ${this.invalid && this.error || this.help}
            </slot>


            <!-- Calendar -->
            ${this.type === "date" ? u3` <div part="calendar" class="input__calendar" @mouseup=${(e8) => e8.stopPropagation()}>
                    <hmwc-calendar
                      ?multiple=${this.multiSelect}
                      .value=${this.dates instanceof Array ? this.dates : [this.dates]}
                      month=${o6(this.month)}
                      year=${o6(this.year)}
                      ?navigation=${this.month && this.year ? false : true}
                      @hmwc-change=${this.handleCalendarChange}
                      @blur=${() => this.emit("hmwc-hide")}></hmwc-calendar>
                  </div>` : ""}

        </span>

    </div>
    `;
    }
  };
  Input.styles = styles12;
  Input.dependencies = [Icon, Button, Calendar, Spinner];
  __decorate14([
    r5()
  ], Input.prototype, "initialValueDateParsed", void 0);
  __decorate14([
    r5()
  ], Input.prototype, "autoFocusLost", void 0);
  __decorate14([
    r5()
  ], Input.prototype, "isManuallyTyping", void 0);
  __decorate14([
    r5()
  ], Input.prototype, "_isDeleting", void 0);
  __decorate14([
    n5({ type: Array, reflect: true })
  ], Input.prototype, "dates", void 0);
  __decorate14([
    n5({ type: String, reflect: true })
  ], Input.prototype, "type", void 0);
  __decorate14([
    n5({ type: Boolean, reflect: true })
  ], Input.prototype, "fluid", void 0);
  __decorate14([
    n5({ type: Boolean, reflect: true })
  ], Input.prototype, "filled", void 0);
  __decorate14([
    n5({ type: Boolean, reflect: true })
  ], Input.prototype, "pill", void 0);
  __decorate14([
    n5({ type: Boolean, reflect: true })
  ], Input.prototype, "underline", void 0);
  __decorate14([
    n5({ type: String })
  ], Input.prototype, "labelPos", void 0);
  __decorate14([
    n5({ type: String })
  ], Input.prototype, "prefix", void 0);
  __decorate14([
    n5({ type: String })
  ], Input.prototype, "suffix", void 0);
  __decorate14([
    n5({ type: String })
  ], Input.prototype, "pattern", void 0);
  __decorate14([
    n5({ type: String, attribute: "date-format" })
  ], Input.prototype, "dateFormat", void 0);
  __decorate14([
    n5({ type: Boolean })
  ], Input.prototype, "multiSelect", void 0);
  __decorate14([
    n5({ type: String, reflect: true })
  ], Input.prototype, "units", void 0);
  __decorate14([
    n5({ type: Boolean, reflect: true })
  ], Input.prototype, "loading", void 0);
  __decorate14([
    n5({ type: Boolean })
  ], Input.prototype, "valid", void 0);
  __decorate14([
    n5({ type: String })
  ], Input.prototype, "help", void 0);
  __decorate14([
    n5({ type: Boolean, reflect: true })
  ], Input.prototype, "clearable", void 0);
  __decorate14([
    n5({ type: Boolean, reflect: true })
  ], Input.prototype, "textarea", void 0);
  __decorate14([
    n5({ type: String })
  ], Input.prototype, "placeholder", void 0);
  __decorate14([
    n5({ type: Boolean, reflect: true })
  ], Input.prototype, "readonly", void 0);
  __decorate14([
    n5({ type: Boolean, reflect: true })
  ], Input.prototype, "toggle", void 0);
  __decorate14([
    n5({ type: Boolean })
  ], Input.prototype, "visible", void 0);
  __decorate14([
    n5({ type: Number })
  ], Input.prototype, "rows", void 0);
  __decorate14([
    n5({ type: Number })
  ], Input.prototype, "minlength", void 0);
  __decorate14([
    n5({ type: Number })
  ], Input.prototype, "maxlength", void 0);
  __decorate14([
    n5({ type: String })
  ], Input.prototype, "min", void 0);
  __decorate14([
    n5({ type: String })
  ], Input.prototype, "max", void 0);
  __decorate14([
    n5({ type: Number })
  ], Input.prototype, "month", void 0);
  __decorate14([
    n5({ type: Number })
  ], Input.prototype, "year", void 0);
  __decorate14([
    n5({ type: String })
  ], Input.prototype, "autocapitalize", void 0);
  __decorate14([
    n5({ type: Boolean, reflect: true })
  ], Input.prototype, "autocorrect", void 0);
  __decorate14([
    n5({ type: String })
  ], Input.prototype, "autocomplete", void 0);
  __decorate14([
    n5({ type: Boolean })
  ], Input.prototype, "spellcheck", void 0);
  __decorate14([
    n5({ type: String })
  ], Input.prototype, "inputmode", void 0);
  __decorate14([
    r5()
  ], Input.prototype, "open", void 0);
  __decorate14([
    e5(".input__control")
  ], Input.prototype, "input", void 0);
  __decorate14([
    e5("hmwc-calendar")
  ], Input.prototype, "datepicker", void 0);
  __decorate14([
    watch("label")
  ], Input.prototype, "handleLabelChange", null);
  __decorate14([
    watch("value")
  ], Input.prototype, "handleValueChange", null);
  __decorate14([
    watch("open")
  ], Input.prototype, "handleCalendarToggle", null);

  // dist/components/input/index.js
  Input.define("hmwc-input", Input);

  // dist/components/menu-item/menu-item.styles.js
  var styles13 = i`
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
    align-items: stretch;
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

    &.small {
      --menu-item-spacing: var(--hmwc-spacing-3x-small);
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
`;

  // dist/components/menu-item/menu-item.component.js
  var __decorate15 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var MenuItem = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.expanded = false;
      this.isExpanded = () => {
        if (!this.item)
          return;
        const hover = this.item.matches(":hover");
        const expanded = o6(this.submenu) && hover;
        return expanded;
      };
      this.handleClick = (event) => {
        if (this.disabled) {
          event.preventDefault();
          event.stopImmediatePropagation();
          return;
        }
        this.emit("hmwc-select", {
          detail: {
            value: this.value
          }
        });
        if (this.checkable) {
          this.checked = !this.checked;
          this.emit("hmwc-change", {
            detail: {
              value: this
            }
          });
        }
      };
      this.handleMouseOver = (event) => {
        event.stopPropagation();
        this.focus();
        this.emit("focus", {
          detail: {
            value: this
          }
        });
        if (!!this.submenu || this.controllers.slot.test("submenu")) {
          this.expanded = true;
        }
      };
      this.handleMouseOut = (event) => {
        event.stopPropagation();
        this.emit("blur", {
          detail: {
            value: this
          }
        });
        if (!!this.submenu || this.controllers.slot.test("submenu")) {
          this.expanded = false;
        }
      };
    }
    handleExpandedChange() {
      if (!this.controllers.slot.test("submenu"))
        return;
      const menu = this.controllers.slot.get("submenu")[0];
      menu.active = this.expanded;
    }
    render() {
      const popup = !!this.submenu || this.controllers.slot.test("submenu");
      const classifier = e7({
        "menu-item": true,
        expanded: this.expanded,
        checked: !!this.checked,
        loading: !!this.loading,
        center: !!this.center,
        disabled: !!this.disabled,
        prefix: !!this.prefix || this.controllers.slot.test("prefix"),
        suffix: !!this.suffix || this.controllers.slot.test("suffix"),
        submenu: popup,
        small: !!this.sm
      });
      return b2`
      <div
        part="base"
        class=${classifier}
        role="menuitem"
        aria-haspopup=${popup ? "true" : "false"}
        aria-expanded=${popup && this.isExpanded() ? "true" : "false"}
        aria-disabled=${this.disabled ? "true" : "false"}
        @click=${this.handleClick}
        @mouseover=${this.handleMouseOver}
        @mouseleave=${this.handleMouseOut}>
        <slot name="check" part="check" class="menu-item__check">
          ${this.checkable ? b2`<hmwc-checkbox sm ?checked=${this.checked} @hmwc-change=${(e8) => e8.stopPropagation()} tabindex="-1"></hmwc-checkbox>` : ""}
        </slot>
        <slot name="prefix" part="prefix" class="menu-item__prefix"> ${this.prefix && b2`<hmwc-icon src=${this.prefix}></hmwc-icon>`} </slot>

        <span part="label" class="menu-item__label"> ${this.label} </span>

        <slot name="suffix" part="suffix" class="menu-item__suffix"> ${this.suffix && b2`<hmwc-icon src=${this.suffix}></hmwc-icon>`} </slot>

        <span part="chevron" class="menu-item__chevron">
          <hmwc-icon flex src="chevron-right" aria-hidden="true"></hmwc-icon>
        </span>

        ${this.loading && b2`
          <span class="menu-item__spinner">
            <hmwc-spinner part="spinner"></hmwc-spinner>
          </span>
        `}

        <slot name="submenu" part="submenu" class="menu-item__submenu">
          ${this.submenu && b2`<hmwc-menu submenu slot="submenu" ?active=${this.expanded} .items=${this.submenu}></hmwc-menu>`}
        </slot>
      </div>
    `;
    }
  };
  MenuItem.styles = styles13;
  MenuItem.dependencies = [Icon, Spinner, Checkbox];
  MenuItem.slots = ["prefix", "suffix", "submenu"];
  __decorate15([
    r5()
  ], MenuItem.prototype, "expanded", void 0);
  __decorate15([
    n5({ type: String })
  ], MenuItem.prototype, "value", void 0);
  __decorate15([
    n5({ type: String })
  ], MenuItem.prototype, "label", void 0);
  __decorate15([
    n5({ type: Boolean, reflect: true })
  ], MenuItem.prototype, "checkable", void 0);
  __decorate15([
    n5({ type: Boolean, reflect: true })
  ], MenuItem.prototype, "checked", void 0);
  __decorate15([
    n5({ type: Boolean, reflect: true })
  ], MenuItem.prototype, "loading", void 0);
  __decorate15([
    n5({ type: String })
  ], MenuItem.prototype, "prefix", void 0);
  __decorate15([
    n5({ type: String })
  ], MenuItem.prototype, "suffix", void 0);
  __decorate15([
    n5({ type: Array })
  ], MenuItem.prototype, "submenu", void 0);
  __decorate15([
    n5({ type: Boolean, reflect: true })
  ], MenuItem.prototype, "disabled", void 0);
  __decorate15([
    n5({ type: Boolean, reflect: true })
  ], MenuItem.prototype, "sm", void 0);
  __decorate15([
    n5({ type: Boolean, reflect: true })
  ], MenuItem.prototype, "center", void 0);
  __decorate15([
    e5(".menu-item")
  ], MenuItem.prototype, "item", void 0);
  __decorate15([
    watch("expanded")
  ], MenuItem.prototype, "handleExpandedChange", null);

  // dist/components/menu-item/index.js
  MenuItem.define("hmwc-menu-item", MenuItem);

  // dist/components/menu/menu.styles.js
  var styles14 = i`
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
      padding: var(--hmwc-spacing-3x-small);
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
      --icon-size: var(--hmwc-font-size-2x-small);
      --icon-color: var(--hmwc-color-neutral-400);
      cursor: pointer;
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
`;

  // dist/components/menu/menu.component.js
  var __decorate16 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Menu = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.filteredItems = [];
      this.menuItems = [];
      this._hasSlottedItems = false;
      this._searchVisible = false;
      this.align = "start";
    }
    /**
     * Activates the menu, making sure it is visible to the
     * user.
     */
    show() {
      this.active = true;
    }
    /**
     * Hides the menu from the DOM.
     */
    hide() {
      this.active = false;
    }
    /**
     * Toggles the visibility of the menu.
     */
    toggle() {
      this.active = !this.active;
    }
    /**
     * Selects the menu-item in the menu with a value
     * matching the provided value. If no such menu-item
     * exists, the selection will be cancelled.
     */
    select(value) {
      if (this.menuItems.every((item) => !(item instanceof MenuItem) || item.value !== value))
        return;
      this.emit("hmwc-select", { detail: { value } });
    }
    playAnimation() {
      window.requestAnimationFrame(() => {
        const animation = this.style.getPropertyValue("animation");
        this.style.setProperty("animation", "none");
        this.style.setProperty("animation", animation);
      });
    }
    filterItems() {
      this.filteredItems = this.filter === "" ? this.menuItems : this.menuItems.filter((item) => {
        return (item["value"] || item["label"])?.toLowerCase().includes(this.filter?.toLowerCase() || "");
      });
      if (this._hasSlottedItems) {
        this.menuItems.forEach((item) => {
          ;
          item.hidden = !this.filteredItems.includes(item);
        });
      }
    }
    handleSearch(e8) {
      this.filter = e8.target.value;
      this.filterItems();
    }
    /**
     * Returns all checkable menu-items currently in the menu.
     */
    getCheckableItems() {
      return this.menuItems.filter((item) => item instanceof MenuItem && !!item.checkable);
    }
    /**
     * Returns whether all checkable menu-items are currently checked.
     */
    areAllChecked() {
      const items = this.getCheckableItems();
      return items.length > 0 && items.every((item) => item.checked);
    }
    /**
     * Returns whether some (but not all) checkable menu-items are checked.
     */
    areSomeChecked() {
      const items = this.getCheckableItems();
      return items.some((item) => item.checked) && !items.every((item) => item.checked);
    }
    /**
     * Checks all checkable menu-items.
     */
    checkAll() {
      this.getCheckableItems().forEach((item) => {
        item.checked = true;
      });
      this.requestUpdate();
      this.emit("hmwc-change", { detail: { value: "all" } });
    }
    /**
     * Unchecks all checkable menu-items.
     */
    uncheckAll() {
      this.getCheckableItems().forEach((item) => {
        item.checked = false;
      });
      this.requestUpdate();
      this.emit("hmwc-change", { detail: { value: "none" } });
    }
    handleSelectAll() {
      if (this.areAllChecked()) {
        this.uncheckAll();
      } else {
        this.checkAll();
      }
    }
    async toggleSearch() {
      this._searchVisible = !this._searchVisible;
      if (this._searchVisible) {
        await this.updateComplete;
        const input = this.shadowRoot?.querySelector(".menu__search");
        input?.focus();
      } else {
        this.filter = "";
        this.filterItems();
      }
    }
    hideSearch() {
      if (!this.filter) {
        this._searchVisible = false;
      }
    }
    openUpdate() {
      this.playAnimation();
      this.emit(this.active ? "hmwc-show" : "hmwc-hide");
    }
    itemsUpdate() {
      if (this.items && !this.items.length)
        return;
      this.menuItems = [];
      this.items?.forEach((item) => {
        const _item = Object.assign(document.createElement("hmwc-menu-item"), { label: item, value: item });
        this.menuItems.push(_item);
      });
    }
    menuItemsUpdate() {
      const select = (e8) => this.select(e8.target?.value || "");
      this.menuItems?.forEach((item) => item.removeEventListener("hmwc-select", select));
      this.menuItems?.forEach((item) => item.addEventListener("hmwc-select", select));
    }
    prefixUpdate() {
      setTimeout(() => {
        if (!this.prefix && !this.suffix)
          return;
        this.menuItems.forEach((item) => {
          if (!(item instanceof MenuItem))
            return;
          item.prefix = this.prefix;
          item.suffix = this.suffix;
        });
      }, 1);
    }
    /**
     * Captures slotted light DOM children and populates menuItems.
     * Called on slotchange so that dynamically added items are picked up.
     */
    handleSlotChange() {
      const allSlotted = this.controllers.slot.get();
      const menuSlotted = allSlotted.filter((el) => el instanceof MenuItem || el instanceof Divider);
      if (allSlotted.length) {
        this._hasSlottedItems = true;
        this.menuItems = menuSlotted;
        this.filterItems();
      }
    }
    connectedCallback() {
      super.connectedCallback();
      this.itemsUpdate();
      this.handleSlotChange();
      if (this.active === void 0)
        this.active = true;
      if (this.parentElement?.tagName === "HMWC-ATTACHMENT") {
      }
    }
    render() {
      const classifier = e7({
        menu: true,
        active: !!this.active,
        submenu: this.slot === "submenu",
        filter: this.filter !== void 0,
        "select-all": !!this.selectAll
      });
      const items = this.filter !== void 0 ? this.filteredItems : this.menuItems;
      return b2`
      <div part="base" class=${classifier} @focus=${() => this.emit("hmwc-focus")} @blur=${() => this.emit("hmwc-blur")}>
        ${this.selectAll || this.filter !== void 0 ? b2`
              <div class="menu__toolbar">
                ${this.selectAll ? b2`
                      <div class="menu__select-all" @click=${this.handleSelectAll}>
                        <hmwc-checkbox sm ?checked=${this.areAllChecked()} ?indeterminate=${this.areSomeChecked()}> </hmwc-checkbox>
                        <span class="menu__select-all-label">${this.areAllChecked() ? "Deselect All" : "Select All"}</span>
                      </div>
                    ` : ""}
                ${this.filter !== void 0 ? b2`
                      <hmwc-icon
                        class="menu__search-toggle ${this._searchVisible ? "active" : ""}"
                        src="search"
                        @click=${this.toggleSearch}></hmwc-icon>
                    ` : ""}
              </div>
              ${this.filter !== void 0 && this._searchVisible ? b2`
                    <hmwc-input
                      part="search"
                      class="menu__search"
                      sm
                      fluid
                      underline
                      .value=${this.filter}
                      @hmwc-input=${this.handleSearch}
                      @hmwc-blur=${this.hideSearch}></hmwc-input>
                  ` : ""}
              <hmwc-divider></hmwc-divider>
            ` : ""}
        <div class="menu__items" part="items">
          ${this._hasSlottedItems ? b2`<slot @slotchange=${() => this.handleSlotChange()}></slot>` : items}
          ${this.filter !== void 0 && this.filteredItems.length === 0 ? b2`<div class="menu__empty">No matches</div>` : ""}
        </div>
      </div>
    `;
    }
  };
  Menu.styles = styles14;
  Menu.dependencies = [MenuItem, Divider, Input, Checkbox, Icon];
  __decorate16([
    r5()
  ], Menu.prototype, "filteredItems", void 0);
  __decorate16([
    r5()
  ], Menu.prototype, "menuItems", void 0);
  __decorate16([
    r5()
  ], Menu.prototype, "_hasSlottedItems", void 0);
  __decorate16([
    r5()
  ], Menu.prototype, "_searchVisible", void 0);
  __decorate16([
    n5({ type: Boolean, reflect: true })
  ], Menu.prototype, "active", void 0);
  __decorate16([
    n5({ type: Array })
  ], Menu.prototype, "items", void 0);
  __decorate16([
    n5({ type: String, reflect: true })
  ], Menu.prototype, "filter", void 0);
  __decorate16([
    n5({ type: Boolean, reflect: true })
  ], Menu.prototype, "selectAll", void 0);
  __decorate16([
    n5({ type: String, reflect: true })
  ], Menu.prototype, "prefix", void 0);
  __decorate16([
    n5({ type: String, reflect: true })
  ], Menu.prototype, "suffix", void 0);
  __decorate16([
    n5({ type: String, reflect: true })
  ], Menu.prototype, "align", void 0);
  __decorate16([
    watch("active")
  ], Menu.prototype, "openUpdate", null);
  __decorate16([
    watch("items")
  ], Menu.prototype, "itemsUpdate", null);
  __decorate16([
    watch("menuItems")
  ], Menu.prototype, "menuItemsUpdate", null);
  __decorate16([
    watch(["prefix", "suffix"])
  ], Menu.prototype, "prefixUpdate", null);

  // dist/components/menu/index.js
  Menu.define("hmwc-menu", Menu);

  // dist/components/attachment/attachment.styles.js
  var styles15 = i`
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
    z-index: calc(var(--hmwc-z-index-dialog) + 1);
    width: var(--attachment-arrow-size);
    height: var(--attachment-arrow-size);
    background: var(--hmwc-menu-background, var(--hmwc-color-neutral-0));
    border: solid var(--hmwc-panel-border-width) var(--hmwc-panel-border-color);
    transform: rotate(45deg);
    pointer-events: none;
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
`;

  // dist/components/attachment/attachment.component.js
  var __decorate17 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Attachment = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.active = false;
      this.name = Math.random().toString(36).substring(7);
      this.trigger = "click";
      this.placement = "bottom";
      this.distance = 2;
      this.skidding = 0;
      this.flip = true;
      this.sync = false;
      this.stayOpen = false;
      this.arrow = false;
      this.nameUpdate = this.register;
    }
    /**
     * Opens the attachment and emits corresponding
     * `hmwc-show` event.
     */
    show() {
      this.active = true;
    }
    /**
     * Hides the attachment and emits corresponding
     * `hmwc-hide` event.
     */
    hide() {
      this.active = false;
    }
    /**
     * Toggles the activity state of the attachment, showing
     * or hiding it from the view.
     */
    toggle() {
      if (!this.content)
        return;
      this.active = !this.active;
      if (this.content instanceof Menu)
        this.content.active = this.active;
    }
    register() {
      if (registry.includes(this.name)) {
        this.name = Math.random().toString(36).substring(7);
      }
      registry.push(this.name);
    }
    unregister() {
      registry.splice(registry.indexOf(this.name), 1);
    }
    retrieve() {
      this.content = this.controllers.slot.get()[0];
      if (this.content?.tagName === "SLOT")
        this.content = this.content.children[0];
      if (!this.anchor)
        this.anchor = this.controllers.slot.get("anchor")[0];
      if (this.anchor instanceof String) {
        this.anchor = document.querySelector(`#${this.anchor}`);
        this.append(this.anchor);
      }
      if (this.content) {
        this.content.classList.add("attachment__content");
      }
      if (!this.anchor)
        return;
      this.anchor.classList.add("attachment__anchor");
      this.anchor.slot = "anchor";
      this.anchor.style.setProperty("anchor-name", `--${this.name}`);
      if (this.content) {
        ;
        this.content.style.setProperty("position-anchor", `--${this.name}`);
      }
    }
    triggerOnClick(enable) {
      if (!this.anchor || !(this.anchor instanceof HTMLElement))
        return;
      if (this._clickHandler) {
        const prevEvent = this.anchor instanceof HMWCComponent ? "hmwc-click" : "click";
        this.anchor.removeEventListener(prevEvent, this._clickHandler);
        this._clickHandler = void 0;
      }
      if (this._documentHandler) {
        document.removeEventListener("mousedown", this._documentHandler);
        this._documentHandler = void 0;
      }
      if (!enable)
        return;
      const event = this.anchor instanceof HMWCComponent ? "hmwc-click" : "click";
      this._clickHandler = () => {
        this.toggle();
      };
      this._documentHandler = (e8) => {
        if (!this.content)
          return;
        const path = e8.composedPath();
        if (path.includes(this.anchor))
          return;
        if (path.includes(this.content)) {
          if (!this.stayOpen)
            this.hide();
          return;
        }
        this.hide();
      };
      this.anchor.addEventListener(event, this._clickHandler);
      document.addEventListener("mouseup", this._documentHandler);
    }
    triggerOnHover(enable) {
      if (!this.anchor || !(this.anchor instanceof HTMLElement))
        return;
      if (enable)
        this.triggerOnHover(false);
      const type = enable ? "add" : "remove";
      this[`${type}EventListener`]("mouseover", this.show);
      this[`${type}EventListener`]("mouseout", this.hide);
    }
    activityUpdate() {
      if (this.trigger === "hover")
        this.emit(`hmwc-${this.active ? "focus" : "blur"}`);
      if (!this.anchor || !(this.anchor instanceof HTMLElement))
        return;
      this.width = this.anchor.offsetWidth;
      this.anchor.style.setProperty("anchor-name", `--${this.name}`);
      if (!this.content)
        return;
      this.content.classList.add("attachment__content");
      this.content.classList.toggle("active", !!this.active);
      this.content.style.setProperty("position-anchor", `--${this.name}`);
      if (this.content instanceof Menu)
        this.content.active = this.active;
      if (this.arrow && this.active) {
        requestAnimationFrame(() => this.positionArrow());
      }
    }
    positionArrow() {
      const arrowEl = this.shadowRoot?.querySelector(".attachment__arrow");
      if (!arrowEl || !this.anchor || !(this.anchor instanceof HTMLElement))
        return;
      const anchorRect = this.anchor.getBoundingClientRect();
      const centerX = anchorRect.left + anchorRect.width / 2;
      arrowEl.style.top = "";
      arrowEl.style.bottom = "";
      arrowEl.style.left = "";
      arrowEl.style.right = "";
      arrowEl.style.translate = "";
      arrowEl.style.borderTop = "";
      arrowEl.style.borderBottom = "";
      arrowEl.style.borderLeft = "";
      arrowEl.style.borderRight = "";
      arrowEl.style.clipPath = "";
      if (this.placement.startsWith("bottom")) {
        arrowEl.style.top = `${anchorRect.bottom + this.distance}px`;
        arrowEl.style.left = `${centerX}px`;
        arrowEl.style.translate = "-50% -50%";
        arrowEl.style.borderRight = "none";
        arrowEl.style.borderBottom = "none";
        arrowEl.style.clipPath = "polygon(0 0, 100% 0, 0 100%)";
      } else if (this.placement.startsWith("top")) {
        arrowEl.style.top = `${anchorRect.top - this.distance}px`;
        arrowEl.style.left = `${centerX}px`;
        arrowEl.style.translate = "-50% -50%";
        arrowEl.style.borderLeft = "none";
        arrowEl.style.borderTop = "none";
        arrowEl.style.clipPath = "polygon(100% 0, 100% 100%, 0 100%)";
      }
    }
    triggerUpdate() {
      if (this.trigger === "click") {
        this.triggerOnClick(true);
        this.triggerOnHover(false);
      } else if (this.trigger === "hover") {
        this.triggerOnHover(true);
        this.triggerOnClick(false);
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.unregister();
      this.triggerOnClick(false);
      this.triggerOnHover(false);
    }
    connectedCallback() {
      super.connectedCallback();
      this.retrieve();
    }
    firstUpdated() {
      const slots = this.shadowRoot?.querySelectorAll("slot");
      slots?.forEach((slot) => {
        slot.addEventListener("slotchange", () => this.handleSlotChange());
      });
    }
    handleSlotChange() {
      this.retrieve();
      this.triggerUpdate();
      if (this.content instanceof Menu) {
        this.content.active = this.active;
      }
    }
    render() {
      const classifier = e7({
        attachment: true,
        active: !!this.active,
        flip: !!this.flip,
        sync: !!this.sync,
        arrow: !!this.arrow,
        [`placement-${this.placement}`]: true
      });
      return b2`
      <div
        part="base"
        class=${classifier}
        style=${`--attachment-width: ${this.width}px; --distance:${this.distance}px; --skidding:${this.skidding}px;`}>
        <slot name="anchor" part="anchor"></slot>
        ${this.arrow ? b2`<div part="arrow" class="attachment__arrow"></div>` : ""}
        <slot part="content"> </slot>
      </div>
    `;
    }
  };
  Attachment.styles = styles15;
  Attachment.slots = ["[default]", "anchor"];
  __decorate17([
    n5({ type: Boolean, reflect: true })
  ], Attachment.prototype, "active", void 0);
  __decorate17([
    n5({ type: String })
  ], Attachment.prototype, "name", void 0);
  __decorate17([
    n5({ type: String })
  ], Attachment.prototype, "anchor", void 0);
  __decorate17([
    n5({ type: String })
  ], Attachment.prototype, "trigger", void 0);
  __decorate17([
    n5({ type: String, reflect: true })
  ], Attachment.prototype, "placement", void 0);
  __decorate17([
    n5({ type: Number })
  ], Attachment.prototype, "distance", void 0);
  __decorate17([
    n5({ type: Number })
  ], Attachment.prototype, "skidding", void 0);
  __decorate17([
    n5({ type: Boolean, reflect: true })
  ], Attachment.prototype, "flip", void 0);
  __decorate17([
    n5({ type: Boolean, reflect: true })
  ], Attachment.prototype, "sync", void 0);
  __decorate17([
    n5({ type: Boolean, reflect: true })
  ], Attachment.prototype, "stayOpen", void 0);
  __decorate17([
    n5({ type: Boolean, reflect: true })
  ], Attachment.prototype, "arrow", void 0);
  __decorate17([
    r5()
  ], Attachment.prototype, "content", void 0);
  __decorate17([
    r5()
  ], Attachment.prototype, "width", void 0);
  __decorate17([
    watch("name", { waitUntilFirstUpdate: true })
  ], Attachment.prototype, "nameUpdate", void 0);
  __decorate17([
    watch("active")
  ], Attachment.prototype, "activityUpdate", null);
  __decorate17([
    watch("trigger")
  ], Attachment.prototype, "triggerUpdate", null);
  var registry = [];

  // dist/components/attachment/index.js
  Attachment.define("hmwc-attachment", Attachment);

  // dist/components/avatar/avatar.styles.js
  var styles16 = i`
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
`;

  // dist/components/avatar/avatar.component.js
  var __decorate18 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Avatar = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.icon = "person-fill";
      this.shape = "circle";
    }
    updateInitials() {
      if (!this.name)
        return;
      this.initials = this.name.split(" ").map((n7) => n7[0]).join("");
    }
    render() {
      const classifier = e7({
        avatar: true,
        circle: this.shape === "circle",
        square: this.shape === "square",
        [`status-${this.status}`]: true,
        selectable: !!this.selectable,
        sm: !!this.sm,
        md: !!this.md,
        lg: !!this.lg
      });
      return b2`
      <slot part="base" class=${classifier} aria-label=${o6(this.name)}>
        ${this.name ? b2`<div part="label" class="avatar__label">${this.initials}</div>` : b2`<hmwc-icon part="icon" class="avatar__icon" src=${this.icon}></hmwc-icon>`}
      </slot>
    `;
    }
  };
  Avatar.styles = styles16;
  Avatar.dependencies = [Icon];
  __decorate18([
    r5()
  ], Avatar.prototype, "initials", void 0);
  __decorate18([
    n5({ type: String })
  ], Avatar.prototype, "name", void 0);
  __decorate18([
    n5({ type: String })
  ], Avatar.prototype, "icon", void 0);
  __decorate18([
    n5({ type: String, reflect: true })
  ], Avatar.prototype, "shape", void 0);
  __decorate18([
    n5({ type: String, reflect: true })
  ], Avatar.prototype, "status", void 0);
  __decorate18([
    n5({ type: Boolean, reflect: true })
  ], Avatar.prototype, "selectable", void 0);
  __decorate18([
    n5({ type: Boolean, reflect: true })
  ], Avatar.prototype, "sm", void 0);
  __decorate18([
    n5({ type: Boolean, reflect: true })
  ], Avatar.prototype, "md", void 0);
  __decorate18([
    n5({ type: Boolean, reflect: true })
  ], Avatar.prototype, "lg", void 0);
  __decorate18([
    watch("name")
  ], Avatar.prototype, "updateInitials", null);

  // dist/components/avatar/index.js
  Avatar.define("hmwc-avatar", Avatar);

  // dist/components/badge/index.js
  Badge.define("hmwc-badge", Badge);

  // dist/components/banner/banner.styles.js
  var styles17 = i`
  :host {
    display: block;
  }
`;

  // dist/components/col/col.styles.js
  var styles18 = i`
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
`;

  // dist/components/col/col.component.js
  var __decorate19 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Col = class extends HMWCContainerComponent {
    render() {
      const classifier = e7({
        col__content: true,
        wrap: !!this.wrap,
        min: !!this.min,
        max: !!this.max,
        outline: !!this.outline,
        fit: !!this.fit
      });
      return b2`
      <div part="base" class="col">
        <slot name="label" part="label"></slot>
        <slot part="content" class=${classifier}></slot>
      </div>
    `;
    }
  };
  Col.styles = styles18;
  __decorate19([
    n5({ type: Boolean, reflect: true })
  ], Col.prototype, "wrap", void 0);
  __decorate19([
    n5({ type: Boolean, reflect: true })
  ], Col.prototype, "fit", void 0);
  __decorate19([
    n5({ type: Boolean, reflect: true })
  ], Col.prototype, "min", void 0);
  __decorate19([
    n5({ type: Boolean, reflect: true })
  ], Col.prototype, "max", void 0);
  __decorate19([
    n5({ type: Boolean, reflect: true })
  ], Col.prototype, "outline", void 0);

  // dist/components/col/index.js
  Col.define("hmwc-col", Col);

  // dist/components/skeleton/skeleton.styles.js
  var styles19 = i`
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
`;

  // dist/components/skeleton/skeleton.component.js
  var __decorate20 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Skeleton = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.sheen = true;
    }
    render() {
      const classifier = e7({
        skeleton: true,
        pulse: !!this.pulse,
        sheen: !!this.sheen
      });
      return b2`
      <div part="base" class=${classifier}>
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `;
    }
  };
  Skeleton.styles = styles19;
  Skeleton.dependencies = [];
  Skeleton.slots = [];
  __decorate20([
    n5({ type: Boolean, reflect: true })
  ], Skeleton.prototype, "sheen", void 0);
  __decorate20([
    n5({ type: Boolean, reflect: true })
  ], Skeleton.prototype, "pulse", void 0);

  // dist/components/skeleton/index.js
  Skeleton.define("hmwc-skeleton", Skeleton);

  // dist/components/text/text.styles.js
  var styles20 = i`


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
`;

  // dist/components/text/text.component.js
  var __decorate21 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Text = class extends HMWCComponent {
    handleValueChange() {
      this.formatValue();
    }
    handleMouseover() {
      this.emit("mouseenter", { detail: { value: this.value } });
    }
    handleMouseout() {
      this.emit("mouseleave", { detail: { value: this.value } });
    }
    formatValue() {
      if (this.format) {
        if (this.value !== void 0) {
          this.value = Math.round(parseInt(this.value)).toLocaleString();
        }
      }
    }
    connectedCallback() {
      super.connectedCallback();
      if (!this.sans && !this.serif && !this.monospace) {
        this.sans = true;
      }
      this.formatValue();
    }
    render() {
      const classifier = e7({
        text: true,
        xs: !!this.xs,
        sm: !!this.sm,
        md: !!this.md,
        lg: !!this.lg,
        xl: !!this.xl,
        xxl: !!this.xxl,
        flex: !!this.flex,
        heading: !!this.heading,
        subheading: !!this.subheading,
        label: !!this.label,
        subtitle: !!this.subtitle,
        caption: !!this.caption,
        sans: !!this.sans,
        serif: !!this.serif,
        monospace: !!this.monospace,
        center: !!this.center || this.align === "center",
        light: !!this.light,
        semibold: !!this.semibold,
        bold: !!this.bold,
        primary: !!this.primary,
        secondary: !!this.secondary,
        tertiary: !!this.tertiary,
        success: !!this.success,
        neutral: !!this.neutral,
        warning: !!this.warning,
        danger: !!this.danger,
        uppercase: !!this.uppercase,
        lowercase: !!this.lowercase,
        capitalize: !!this.capitalize,
        wrap: !!this.wrap,
        invert: !!this.invert,
        "align-start": this.align === "start",
        "align-end": this.align === "end"
      });
      return b2`
      <div part="base" class=${classifier} @click=${this.handleMouseover} @mouseover=${this.handleMouseover} @mouseout=${this.handleMouseout}>
        ${this.prefix ? b2`<slot name="prefix" class="text__prefix">
              <hmwc-icon
                ?primary=${this.primary}
                ?neutral=${this.neutral}
                ?warning=${this.warning}
                ?danger=${this.danger}
                ?invert=${this.invert}
                src=${this.prefix}></hmwc-icon>
            </slot>` : ""}
        <div
          part="content"
          class="text__content"
          style=${this.parentElement?.parentElement?.nodeName === "HMWC-TEXT" ? "margin-left: var(--hmwc-spacing-2x-small)" : ""}>
          ${this.label ? b2`<span class="text__label">${this.label}</span>` : null}
          ${o6(this.value) ? b2`${this.value || b2`<hmwc-skeleton></hmwc-skeleton>`}` : b2``}
          ${this.amount ? b2`<span class="text__amount">(${this.amount})</span>` : ""}
          <slot></slot>
        </div>

        ${this.suffix ? b2`<slot name="suffix" class="text__suffix">
              <hmwc-icon
                ?primary=${this.primary}
                ?neutral=${this.neutral}
                ?warning=${this.warning}
                ?danger=${this.danger}
                ?invert=${this.invert}
                src=${this.suffix}></hmwc-icon>
            </slot>` : ""}
      </div>
    `;
    }
  };
  Text.styles = styles20;
  Text.dependencies = [Icon, Skeleton];
  __decorate21([
    n5({ type: String })
  ], Text.prototype, "value", void 0);
  __decorate21([
    n5({ type: Number })
  ], Text.prototype, "amount", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "xs", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "sm", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "md", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "lg", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "xl", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "xxl", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "heading", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "subheading", void 0);
  __decorate21([
    n5({ type: String })
  ], Text.prototype, "label", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "subtitle", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "caption", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "sans", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "serif", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "monospace", void 0);
  __decorate21([
    n5({ type: String })
  ], Text.prototype, "align", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "center", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "light", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "semibold", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "bold", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "primary", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "secondary", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "tertiary", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "success", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "neutral", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "warning", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "danger", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "uppercase", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "lowercase", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "capitalize", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "wrap", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "invert", void 0);
  __decorate21([
    n5({ type: Boolean, reflect: true })
  ], Text.prototype, "flex", void 0);
  __decorate21([
    n5({ type: String })
  ], Text.prototype, "prefix", void 0);
  __decorate21([
    n5({ type: String })
  ], Text.prototype, "suffix", void 0);
  __decorate21([
    n5({ type: Boolean })
  ], Text.prototype, "format", void 0);
  __decorate21([
    watch("value")
  ], Text.prototype, "handleValueChange", null);

  // dist/components/text/index.js
  Text.define("hmwc-text", Text);

  // dist/components/banner/banner.component.js
  var __decorate22 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Banner = class extends HMWCComponent {
    render() {
      return b2`
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
    `;
    }
  };
  Banner.styles = styles17;
  Banner.dependencies = [Col, Text, Icon, Button];
  __decorate22([
    n5({ type: String })
  ], Banner.prototype, "img", void 0);
  __decorate22([
    n5({ type: String })
  ], Banner.prototype, "label", void 0);
  __decorate22([
    n5({ type: String })
  ], Banner.prototype, "message", void 0);
  __decorate22([
    n5({ type: String })
  ], Banner.prototype, "href", void 0);
  __decorate22([
    n5({ type: String })
  ], Banner.prototype, "action", void 0);
  __decorate22([
    n5({ type: Boolean, reflect: true })
  ], Banner.prototype, "invert", void 0);

  // dist/components/banner/index.js
  Banner.define("hmwc-banner", Banner);

  // dist/components/breadcrumb/breadcrumb.styles.js
  var styles21 = i`
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
`;

  // dist/components/breadcrumb/breadcrumb.component.js
  var __decorate23 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Breadcrumb = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.route = true;
      this.valueUpdate = () => this.emit("hmwc-change");
    }
    select() {
      if (!this.route || this.items !== void 0)
        return;
      this.emit("hmwc-navigate", { detail: { route: this.path } });
    }
    setValue(value) {
      if (value instanceof CustomEvent)
        value = value.detail.value;
      this.value = value;
    }
    render() {
      const classifier = e7({
        breadcrumb__crumb: true,
        active: !!this.active,
        route: !!this.route,
        home: !!this.home,
        "color-green": this.color === "green",
        "color-purple": this.color === "purple"
      });
      return b2`
      <div part="base" class="breadcrumb">
        <hmwc-tooltip ?disabled=${!this.route} label=${this.path === "/" ? "Dashboard" : this.path || ""} sm delay="700" placement="top-start">
          <hmwc-attachment
            distance="8"
            ?search=${this.search || false}
            prefix=${this.prefix}
            .?items=${this.items}
            placement="bottom-end"
            @hmwc-select=${this.setValue}>
            <div part="content" class=${classifier} slot="anchor" @click=${this.select}>
              ${this.prefix ? b2`<div class="breadcrumb__prefix"><hmwc-icon flex src=${this.prefix}></hmwc-icon></div>` : ""}
              ${this.icon ? b2`<div class="breadcrumb__icon"><hmwc-icon flex src=${this.icon}></hmwc-icon></div>` : ""}
              ${this.label ? b2`<div class="breadcrumb__label">${this.value || this.label}</div>` : ""}
              ${this.suffix ? b2`<div class="breadcrumb__suffix"><hmwc-icon flex src=${this.suffix}></hmwc-icon></div>` : ""}
              ${this.items ? b2`<div class="breadcrumb__dropdown-arrow"><hmwc-icon flex src="caret-down"></hmwc-icon></div>` : ""}
            </div>
          </hmwc-attachment>
        </hmwc-tooltip>
        <slot name="actions" part="actions" class="breadcrumb__actions">
          ${this.actions ? b2`<hmwc-attachment
                icon="three-dots-vertical"
                .items=${this.actions}
                @hmwc-select=${(e8) => this.emit("hmwc-select", { detail: { value: e8.detail.value } })}></hmwc-attachment>` : ""}
        </slot>
      </div>
    `;
    }
  };
  Breadcrumb.styles = styles21;
  Breadcrumb.dependencies = [];
  Breadcrumb.slots = [];
  __decorate23([
    n5({ type: String, reflect: true })
  ], Breadcrumb.prototype, "prefix", void 0);
  __decorate23([
    n5({ type: String, reflect: true })
  ], Breadcrumb.prototype, "suffix", void 0);
  __decorate23([
    n5({ type: String, reflect: true })
  ], Breadcrumb.prototype, "icon", void 0);
  __decorate23([
    n5({ type: String, reflect: true })
  ], Breadcrumb.prototype, "color", void 0);
  __decorate23([
    n5({ type: String, reflect: true })
  ], Breadcrumb.prototype, "label", void 0);
  __decorate23([
    n5({ type: String, reflect: true })
  ], Breadcrumb.prototype, "path", void 0);
  __decorate23([
    n5({ type: Boolean, reflect: true })
  ], Breadcrumb.prototype, "active", void 0);
  __decorate23([
    n5({ type: Array, reflect: true })
  ], Breadcrumb.prototype, "items", void 0);
  __decorate23([
    n5({ type: String, reflect: true })
  ], Breadcrumb.prototype, "value", void 0);
  __decorate23([
    n5({ type: Boolean, reflect: true })
  ], Breadcrumb.prototype, "search", void 0);
  __decorate23([
    n5({ type: Boolean, reflect: true })
  ], Breadcrumb.prototype, "home", void 0);
  __decorate23([
    n5({ type: Boolean, reflect: true })
  ], Breadcrumb.prototype, "route", void 0);
  __decorate23([
    n5({ type: Array })
  ], Breadcrumb.prototype, "actions", void 0);
  __decorate23([
    watch("value", { waitUntilFirstUpdate: true })
  ], Breadcrumb.prototype, "valueUpdate", void 0);

  // dist/components/breadcrumb/index.js
  Breadcrumb.define("hmwc-breadcrumb", Breadcrumb);

  // dist/components/tooltip/tooltip.styles.js
  var styles22 = i`
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
`;

  // dist/components/tooltip/tooltip.component.js
  var __decorate24 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Tooltip = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.trigger = "hover";
      this.placement = "top";
      this.arrow = true;
      this.distance = 6;
      this.skidding = 0;
      this.delay = 150;
      this.handleBlur = () => {
        if (this.trigger !== "focus")
          return;
        this.hide();
      };
      this.handleFocus = () => {
        if (this.trigger !== "focus")
          return;
        this.show();
      };
      this.handleClick = () => {
        if (this.trigger !== "click")
          return;
        this.toggle();
      };
      this.handleMouseEnter = () => {
        if (this.trigger !== "hover")
          return;
        clearTimeout(this.timeout);
        const delay = this.delay instanceof Object ? this.delay.show : this.delay;
        this.timeout = window.setTimeout(() => this.show(), delay);
      };
      this.handleMouseLeave = () => {
        if (this.trigger !== "hover")
          return;
        clearTimeout(this.timeout);
        const delay = this.delay instanceof Object ? this.delay.hide : this.delay;
        this.timeout = window.setTimeout(() => this.hide(), delay);
      };
      this.handleKeyDown = (event) => {
        if (event.key !== "Escape")
          return;
        event.stopPropagation();
        this.hide();
      };
    }
    handleActiveChange() {
      if (this.active) {
        this.emit("hmwc-show");
        document.addEventListener("keydown", this.handleKeyDown);
      } else {
        this.emit("hmwc-hide");
        document.removeEventListener("keydown", this.handleKeyDown);
      }
    }
    handleDisabledChange() {
      if (this.disabled && this.active) {
        this.hide();
      }
    }
    /** Shows the tooltip. */
    show() {
      if (this.active || this.disabled)
        return;
      this.active = true;
    }
    /** Hides the tooltip. */
    hide() {
      if (!this.active)
        return;
      this.active = false;
    }
    /** Toggles the tooltip's visibility. */
    toggle() {
      if (this.active)
        this.hide();
      else
        this.show();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      clearTimeout(this.timeout);
      document.removeEventListener("keydown", this.handleKeyDown);
    }
    render() {
      const classifier = e7({
        tooltip: true,
        active: !!this.active,
        disabled: !!this.disabled,
        [this.placement]: true
      });
      return b2`
      <div
        part="base"
        class=${classifier}
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

          <div part="body" class="tooltip__body" role="tooltip" aria-live=${this.active ? "polite" : "off"}>
            <slot name="content">${this.label}</slot>
          </div>
        </hmwc-attachment>
      </div>
    `;
    }
  };
  Tooltip.styles = styles22;
  Tooltip.dependencies = [Attachment];
  Tooltip.slots = ["[default]", "content"];
  __decorate24([
    n5({ type: String })
  ], Tooltip.prototype, "label", void 0);
  __decorate24([
    n5({ type: String })
  ], Tooltip.prototype, "trigger", void 0);
  __decorate24([
    n5({ type: String, reflect: true })
  ], Tooltip.prototype, "placement", void 0);
  __decorate24([
    n5({ type: Boolean, reflect: true })
  ], Tooltip.prototype, "active", void 0);
  __decorate24([
    n5({ type: Boolean, reflect: true })
  ], Tooltip.prototype, "disabled", void 0);
  __decorate24([
    n5({ type: Boolean, reflect: true })
  ], Tooltip.prototype, "arrow", void 0);
  __decorate24([
    n5({ type: Number })
  ], Tooltip.prototype, "distance", void 0);
  __decorate24([
    n5({ type: Number })
  ], Tooltip.prototype, "skidding", void 0);
  __decorate24([
    n5({ type: Number })
  ], Tooltip.prototype, "delay", void 0);
  __decorate24([
    watch("active")
  ], Tooltip.prototype, "handleActiveChange", null);
  __decorate24([
    watch("disabled")
  ], Tooltip.prototype, "handleDisabledChange", null);

  // dist/components/tooltip/index.js
  Tooltip.define("hmwc-tooltip", Tooltip);

  // dist/components/breadcrumbs/breadcrumbs.styles.js
  var styles23 = i`
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
`;

  // dist/components/breadcrumbs/breadcrumbs.component.js
  var __decorate25 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Breadcrumbs = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.breadcrumbs = [];
      this.routes = [];
      this.seperator = "chevron-right";
      this.routeUpdate = this.updateCrumbs;
    }
    updateCrumbs() {
      if (!this.route || !this.routes.length)
        return;
      const breadcrumbs = [];
      const routes = this.route.path.split("/");
      routes.forEach((crumb, i7) => {
        if (crumb === "")
          crumb = "/";
        const override = this.overrides?.find((o8) => o8.path === crumb);
        if (override) {
          const route = this.routes.find((r7) => r7.path === routes.slice(0, i7 + 1).join("/"));
          override.label = override.value;
          override.route = !!route?.component;
          override.path = route?.path || override.path;
          override.home = i7 === 0;
          if (!override.prefix && override.items !== void 0)
            override.prefix = "x-diamond-fill";
          override.active = i7 === routes.length - 1;
          breadcrumbs.push(override);
          return;
        } else {
          const breadcrumb = document.createElement("hmwc-breadcrumb");
          const route = this.routes.find((r7) => r7.path === routes.slice(0, i7 + 1).join("/"));
          breadcrumb.home = i7 === 0;
          breadcrumb.setAttribute("path", route?.path || "");
          breadcrumb.active = i7 === routes.length - 1;
          breadcrumb.route = !!route?.component;
          if (crumb === "/") {
            breadcrumb.icon = "house-door-fill";
            breadcrumb.path = "/";
            breadcrumb.route = true;
          } else
            breadcrumb.label = route?.title || "";
          breadcrumbs.push(breadcrumb);
        }
      });
      this.breadcrumbs = breadcrumbs;
    }
    connectedCallback() {
      super.connectedCallback();
    }
    render() {
      return b2`
      <div part="base" class="breadcrumbs">
        ${this.breadcrumbs.map((breadcrumb, index) => b2`
            ${breadcrumb}
            ${index !== this.breadcrumbs.length - 1 ? b2`<slot name="seperator" class="breadcrumbs__seperator"><hmwc-icon flex src=${this.seperator}></hmwc-icon></slot>` : ""}
          `)}
        <slot></slot>
      </div>
    `;
    }
  };
  Breadcrumbs.styles = styles23;
  Breadcrumbs.dependencies = [Icon, Attachment, Tooltip, Breadcrumb];
  Breadcrumbs.slots = [];
  __decorate25([
    n5({ type: Array })
  ], Breadcrumbs.prototype, "overrides", void 0);
  __decorate25([
    r5()
  ], Breadcrumbs.prototype, "breadcrumbs", void 0);
  __decorate25([
    n5({ type: String, reflect: true })
  ], Breadcrumbs.prototype, "route", void 0);
  __decorate25([
    n5({ type: Array })
  ], Breadcrumbs.prototype, "routes", void 0);
  __decorate25([
    n5({ type: String, reflect: true })
  ], Breadcrumbs.prototype, "seperator", void 0);
  __decorate25([
    watch("route")
  ], Breadcrumbs.prototype, "routeUpdate", void 0);

  // dist/components/breadcrumbs/index.js
  Breadcrumbs.define("hmwc-breadcrumbs", Breadcrumbs);

  // dist/components/card/card.styles.js
  var styles24 = i`
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
          &::part(base) {
            display: flex;
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
        &::part(base) {
          display: flex;
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
`;

  // dist/components/card/card.component.js
  var __decorate26 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Card = class extends HMWCContainerComponent {
    handleClick() {
      this.emit("hmwc-click", {});
    }
    connectedCallback() {
      super.connectedCallback();
      if (!this.pad)
        this.pad = "sm";
    }
    render() {
      const classifier = e7({
        card: true,
        fluid: !!this.fluid,
        header: this.header || this.controllers.slot.test("header"),
        footer: this.footer || this.controllers.slot.test("footer"),
        image: this.img || this.controllers.slot.test("image"),
        primary: !!this.primary,
        success: !!this.success,
        neutral: !!this.neutral,
        warning: !!this.warning,
        danger: !!this.danger,
        alt: !!this.alt,
        blue: this.color === "blue",
        purple: this.color === "purple",
        green: this.color === "green",
        yellow: this.color === "yellow",
        orange: this.color === "orange",
        red: this.color === "red",
        xs: !!this.xs,
        sm: !!this.sm,
        md: !!this.md,
        lg: !!this.lg,
        "scale-small": !!this.scaleSm,
        "scale-medium": !!this.scaleMd,
        "scale-large": !!this.scaleLg
      });
      return b2`
      <div part="base" class=${classifier} @click=${this.handleClick}>
        <slot name="image" part="image" class="card__image"> ${this.img && b2`<img src=${this.img} alt="Card Image" />`} </slot>

        <div part="header" class="card__header">
          ${this.prefix && this.header ? b2`<span class="card__prefix"> <hmwc-icon src=${this.prefix}></hmwc-icon> </span>` : ""} ${this.header}
          ${this.suffix && this.header ? b2`<span class="card__suffix"> <hmwc-icon src=${this.suffix}></hmwc-icon> </span>` : ""}
          <slot name="header"></slot>
          <div part="header-control" class="card__header-control">
            <slot name="control"></slot>
          </div>
        </div>

        <div part="body" class="card__body">
          ${this.label ? b2`
                <div part="label" class="card__label">
                  ${this.prefix ? b2`<span class="card__prefix"> <hmwc-icon src=${this.prefix}></hmwc-icon> </span>` : ""} ${this.label}
                  ${this.suffix ? b2`<span class="card__suffix"> <hmwc-icon src=${this.suffix}></hmwc-icon> </span>` : ""}
                </div>
              ` : ""}
          <slot></slot>
        </div>

        <slot name="footer" part="footer" class="card__footer"> ${this.footer} </slot>
      </div>
    `;
    }
  };
  Card.styles = styles24;
  Card.slots = ["header", "footer", "image"];
  __decorate26([
    n5({ type: String })
  ], Card.prototype, "label", void 0);
  __decorate26([
    n5({ type: String })
  ], Card.prototype, "header", void 0);
  __decorate26([
    n5({ type: String })
  ], Card.prototype, "footer", void 0);
  __decorate26([
    n5({ type: String })
  ], Card.prototype, "img", void 0);
  __decorate26([
    n5({ type: String })
  ], Card.prototype, "prefix", void 0);
  __decorate26([
    n5({ type: String })
  ], Card.prototype, "suffix", void 0);
  __decorate26([
    n5({ type: String, reflect: true })
  ], Card.prototype, "color", void 0);
  __decorate26([
    n5({ type: Boolean, reflect: true })
  ], Card.prototype, "primary", void 0);
  __decorate26([
    n5({ type: Boolean, reflect: true })
  ], Card.prototype, "alt", void 0);
  __decorate26([
    n5({ type: Boolean, reflect: true })
  ], Card.prototype, "success", void 0);
  __decorate26([
    n5({ type: Boolean, reflect: true })
  ], Card.prototype, "neutral", void 0);
  __decorate26([
    n5({ type: Boolean, reflect: true })
  ], Card.prototype, "warning", void 0);
  __decorate26([
    n5({ type: Boolean, reflect: true })
  ], Card.prototype, "danger", void 0);
  __decorate26([
    n5({ type: Boolean, reflect: true })
  ], Card.prototype, "xs", void 0);
  __decorate26([
    n5({ type: Boolean, reflect: true })
  ], Card.prototype, "sm", void 0);
  __decorate26([
    n5({ type: Boolean, reflect: true })
  ], Card.prototype, "md", void 0);
  __decorate26([
    n5({ type: Boolean, reflect: true })
  ], Card.prototype, "lg", void 0);
  __decorate26([
    n5({ type: String })
  ], Card.prototype, "shadow", void 0);
  __decorate26([
    n5({ type: Boolean, reflect: true })
  ], Card.prototype, "scaleSm", void 0);
  __decorate26([
    n5({ type: Boolean, reflect: true })
  ], Card.prototype, "scaleMd", void 0);
  __decorate26([
    n5({ type: Boolean, reflect: true })
  ], Card.prototype, "scaleLg", void 0);
  __decorate26([
    n5({ type: Boolean, reflect: true })
  ], Card.prototype, "fluid", void 0);

  // dist/components/card/index.js
  Card.define("hmwc-card", Card);

  // dist/components/chart/chart.styles.js
  var styles25 = i`
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
      opacity: 0.5;
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
`;

  // dist/components/chart/chart.component.js
  var __decorate27 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Chart = class extends HMWCComponent {
    calculatePieGradient() {
      if (!this.data) {
        return;
      }
      const sortedData = this.data.sort((a4, b3) => b3.value - a4.value);
      let gradient = "conic-gradient(";
      sortedData.forEach((item, index) => {
        const color = item.color || `hsl(${index * 360 / sortedData.length}, 100%, 50%)`;
        const prev = index === 0 ? 0 : sortedData[index - 1].value;
        gradient += `${color} ${prev} ${item.value}%,`;
      });
      return gradient + ")";
    }
    connectedCallback() {
      super.connectedCallback();
      this.animation = "scale-in";
      if (!this.indicators) {
        this.indicators = [
          { value: 25, label: "25%" },
          { value: 50, label: "50%" },
          { value: 75, label: "75%" }
        ];
      }
      if (!this.bar) {
        this.bar = true;
      }
    }
    render() {
      const parentHeight = this.parentElement?.clientHeight || this.clientHeight;
      const classifier = e7({
        chart: true,
        pie: !!this.pie,
        bar: !!this.bar,
        small: !!this.sm,
        medium: !!this.md,
        large: !!this.lg
      });
      return b2` <div part="base" class=${classifier}>
      ${this.pie ? b2`<div class="chart__pie" style="background: ${this.calculatePieGradient()}"></div>` : b2`${this.indicators?.map(({ value, label }) => b2`
                <div class="chart__indicator" style="top: ${parentHeight - parentHeight * (value / 100)}px">
                  <span class="chart__indicator-label">${label}</span>
                  <div class="chart__indicator-line"></div>
                </div>
              `)}
            <div part="chart" class="chart__chart">
              ${this.data?.map(({ label, value }) => b2`
                  <hmwc-tooltip label=${label} arrow placement="right" delay="200">
                    <div class="chart__item">
                      <div class="chart__item-progress ${!value ? "null" : ""}" style="height: ${parentHeight * (value / 100)}px"></div>
                      ${this.labeled ? b2`<div class="chart__item-label">${label}</div>` : ""}
                    </div>
                  </hmwc-tooltip>
                `)}

              <slot></slot>
            </div> `}
    </div>`;
    }
  };
  Chart.styles = styles25;
  Chart.dependencies = [Tooltip];
  __decorate27([
    n5({ type: Array })
  ], Chart.prototype, "data", void 0);
  __decorate27([
    n5({ type: Boolean })
  ], Chart.prototype, "pie", void 0);
  __decorate27([
    n5({ type: Array })
  ], Chart.prototype, "indicators", void 0);
  __decorate27([
    n5({ type: Boolean })
  ], Chart.prototype, "bar", void 0);
  __decorate27([
    n5({ type: Boolean })
  ], Chart.prototype, "labeled", void 0);
  __decorate27([
    n5({ type: Boolean })
  ], Chart.prototype, "sm", void 0);
  __decorate27([
    n5({ type: Boolean })
  ], Chart.prototype, "md", void 0);
  __decorate27([
    n5({ type: Boolean })
  ], Chart.prototype, "lg", void 0);

  // dist/components/chart/index.js
  Chart.define("hmwc-chart", Chart);

  // dist/components/dropdown/dropdown.styles.js
  var styles26 = i`
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

  :host([fluid]) {
    width: 100%;
  }

  /* Active state — input-like focus ring */
  :host([active]:not([disabled])) .dropdown {
    --dropdown-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color-focus);
  }

  :host([active]:not([disabled])) .dropdown .dropdown__trigger::part(base) {
    border-color: var(--hmwc-input-border-color-focus);
    box-shadow: 0 0 0 var(--hmwc-focus-ring-width) var(--hmwc-input-focus-ring-color);
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
    align-items: center;
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

    &:hover:not(.disabled) {
      --dropdown-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color-hover);
    }

    /** filled */
    &.filled:not(.disabled) {
      --dropdown-background: var(--hmwc-input-filled-background-color);

      &:hover {
        --dropdown-background: var(--hmwc-input-filled-background-color-hover);
      }

      &:focus-within {
        --dropdown-background: var(--hmwc-input-filled-background-color-focus);
      }
    }

    &.invalid:not(.disabled) {
      --dropdown-border: var(--hmwc-input-border-width) solid var(--hmwc-input-border-color-invalid);

      &:hover {
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

    &.label-top,
    &.label-bottom {
      flex-direction: column;
    }

    &.label-left,
    &.label-right {
      & .dropdown__label {
        width: fit-content;
      }
      gap: var(--hmwc-spacing-small);
    }
  }
`;

  // dist/components/dropdown/dropdown.component.js
  var __decorate28 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Dropdown = class extends HMWCFormComponent {
    constructor() {
      super(...arguments);
      this.active = false;
      this.items = [];
      this.placeholder = "";
      this.placement = "bottom-start";
      this.sync = true;
      this.distance = 1;
      this.skidding = this.prefix ? 8 : 0;
      this.labelPos = "top";
    }
    /**
     * Activates the dropdown menu, making sure it is visible
     * to the user.
     */
    show() {
      if (this.disabled)
        return;
      this.active = true;
    }
    /**
     * Hides the dropdown menu from the DOM.
     */
    hide() {
      if (this.disabled)
        return;
      this.active = false;
    }
    /**
     * Toggles the visibility of the menu.
     */
    toggle() {
      if (this.disabled)
        return;
      this.active = !this.active;
    }
    /**
     * Selects the menu-item in the menu with a value
     * matching the provided value. If no such menu-item
     * exists, the selection will be cancelled.
     */
    select(value) {
      this.value = value;
      this.emit("hmwc-select", { detail: { value } });
    }
    listen(action) {
      if (action === "add")
        this.listen("remove");
      this.menu?.[`${action}EventListener`]("hmwc-select", (e8) => {
        this.select(e8.detail.value);
      });
      document[`${action}EventListener`]("mousedown", (event) => {
        const target = event.target;
        if (!this.contains(target)) {
          this.hide();
        }
      });
    }
    handleValueChange() {
      this.emit("hmwc-change", { detail: { value: this.value } });
    }
    handleOpenChange() {
      this.emit(this.active ? "hmwc-show" : "hmwc-hide");
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.listen("remove");
    }
    firstUpdated() {
      super.connectedCallback();
      this.listen("add");
    }
    render() {
      const classifier = e7({
        dropdown: true,
        disabled: !!this.disabled,
        small: !!this.sm,
        medium: !!this.md,
        large: !!this.lg,
        filled: !!this.filled,
        label: !!this.label,
        pill: !!this.pill,
        invalid: !!this.invalid,
        "label-top": this.labelPos === "top",
        "label-right": this.labelPos === "right",
        "label-bottom": this.labelPos === "bottom",
        "label-left": this.labelPos === "left",
        top: this.placement === "top",
        "top-start": this.placement === "top-start",
        "top-end": this.placement === "top-end",
        bottom: this.placement === "bottom",
        "bottom-start": this.placement === "bottom-start",
        "bottom-end": this.placement === "bottom-end",
        right: this.placement === "right",
        "right-start": this.placement === "right-start",
        "right-end": this.placement === "right-end",
        left: this.placement === "left",
        "left-start": this.placement === "left-start",
        "left-end": this.placement === "left-end"
      });
      return b2`
      <div part="base" class=${classifier} @click=${() => this.active = !this.active}>
        ${["top", "left"].includes(this.labelPos) ? b2` <slot name="label" part="label" class="dropdown__label">${this.label}</slot> ` : ""}

        <hmwc-attachment .?distance=${this.distance} .?skidding=${this.skidding} ?sync=${this.sync} ?active=${this.active}>
          ${this.items.length ? b2` <hmwc-menu
                part="anchor"
                class="dropdown__menu"
                .filter=${this.filter}
                .items=${this.items}
                @hmwc-select=${(e8) => this.select(e8.detail.value)}></hmwc-menu>` : b2`<slot></slot>`}

          <hmwc-button
            slot="anchor"
            part="trigger"
            class="dropdown__trigger"
            aria-label=${o6(this.name)}
            ?fluid=${this.fluid}
            ?disabled=${this.disabled}
            ?pill=${this.pill}
            ?sm=${this.sm}
            ?md=${this.md}
            ?lg=${this.lg}
            label=${this.value || this.placeholder || ""}
            suffix="chevron-down"></hmwc-button>
        </hmwc-attachment>

        ${["bottom", "right"].includes(this.labelPos) ? b2` <slot name="label" part="label" class="dropdown__label"> ${this.label} </slot> ` : ""}

        <!-- Help Text -->
        <slot name="help" part="help" class="dropdown__help" aria-hidden=${!this.help}> ${this.invalid && this.error || this.help} </slot>
      </div>
    `;
    }
  };
  Dropdown.styles = styles26;
  Dropdown.slots = ["menu"];
  Dropdown.dependencies = [Attachment, Button, Menu];
  __decorate28([
    n5({ type: Boolean, reflect: true })
  ], Dropdown.prototype, "active", void 0);
  __decorate28([
    n5({ type: Array, reflect: true })
  ], Dropdown.prototype, "items", void 0);
  __decorate28([
    n5({ type: String })
  ], Dropdown.prototype, "placeholder", void 0);
  __decorate28([
    n5({ type: String })
  ], Dropdown.prototype, "placement", void 0);
  __decorate28([
    n5({ type: String, reflect: true })
  ], Dropdown.prototype, "filter", void 0);
  __decorate28([
    n5({ type: String })
  ], Dropdown.prototype, "help", void 0);
  __decorate28([
    n5({ type: Boolean })
  ], Dropdown.prototype, "sync", void 0);
  __decorate28([
    n5({ type: Boolean, reflect: true })
  ], Dropdown.prototype, "pill", void 0);
  __decorate28([
    n5({ type: Boolean, reflect: true })
  ], Dropdown.prototype, "filled", void 0);
  __decorate28([
    n5({ type: Number })
  ], Dropdown.prototype, "distance", void 0);
  __decorate28([
    n5({ type: Number })
  ], Dropdown.prototype, "skidding", void 0);
  __decorate28([
    n5({ type: Boolean, reflect: true })
  ], Dropdown.prototype, "fluid", void 0);
  __decorate28([
    n5({ type: String })
  ], Dropdown.prototype, "labelPos", void 0);
  __decorate28([
    e5(".dropdown__trigger")
  ], Dropdown.prototype, "trigger", void 0);
  __decorate28([
    e5(".dropdown__menu")
  ], Dropdown.prototype, "menu", void 0);
  __decorate28([
    watch("value", { waitUntilFirstUpdate: true })
  ], Dropdown.prototype, "handleValueChange", null);
  __decorate28([
    watch("active", { waitUntilFirstUpdate: true })
  ], Dropdown.prototype, "handleOpenChange", null);

  // dist/components/dropdown/index.js
  Dropdown.define("hmwc-dropdown", Dropdown);

  // dist/components/pagination/pagination.styles.js
  var styles27 = i`
  :host {
    --pagination-color: var(--hmwc-color-primary-600);

    display: block;
  }

  .pagination {
    display: flex;
    gap: var(--hmwc-spacing-x-small);
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;

    & .pagination-page {
      margin: 0 calc(0.75 * var(--hmwc-spacing-3x-small));
      align-items: center;
      justify-content: center;
      display: flex;

      &.nav {
        margin: 0 var(--hmwc-spacing-2x-small);
        --icon-size: 0.8rem;
      }

      &:not(.nav):not(.elipsis)::part(base) {
        border: var(--hmwc-input-border-width) solid var(--hmwc-panel-border-color);
      }

      &.active {
        --button-background: var(--pagination-color);
        --button-color: var(--hmwc-color-primary-100);
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
          margin: 0 var(--hmwc-spacing-3x-small);
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
`;

  // dist/components/pagination/pagination.component.js
  var __decorate29 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Pagination = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.range = [];
      this.page = 1;
      this.siblings = 1;
      this.boundary = 1;
    }
    updateRange() {
      const getRange = (start, end) => Array.from({ length: end - start + 1 }, (_2, i7) => start + i7);
      const total = (this.siblings + this.boundary) * 2;
      if (this.count > total + 3) {
        const start = Math.max(2, this.page - this.siblings);
        const stop = Math.min(this.count - 1, this.page + this.siblings);
        let pages = getRange(start, stop);
        const left = start > 2;
        const right = this.count - stop > 1;
        const offset = total - pages.length;
        if (left && !right)
          pages = [-1, ...getRange(start - offset, start - 1), ...pages];
        else if (!left && right)
          pages = [...pages, ...getRange(stop + 1, stop + offset), -1];
        else
          pages = [-1, ...pages, -1];
        this.range = [1, ...pages, this.count];
      } else {
        this.range = getRange(1, this.count);
      }
    }
    handlePageChange() {
      this.updateRange();
      this.emit("hmwc-change", { detail: { page: this.page } });
    }
    handleCountChange() {
      this.updateRange();
    }
    render() {
      const classifier = e7({
        pagination: true,
        sm: !!this.sm,
        md: !!this.md,
        lg: !!this.lg,
        primary: !!this.primary,
        success: !!this.success,
        neutral: !!this.neutral,
        warning: !!this.warning,
        danger: !!this.danger
      });
      return b2`
      <ul part="base" class=${classifier}>
        <slot name="nav-back" part="nav" class="pagination-page nav">
          <hmwc-button
            ?sm=${!!this.sm}
            ?md=${!!this.md}
            ?lg=${!!this.lg}
            basic
            icon="chevron-left"
            ?primary=${!!this.primary}
            ?success=${!!this.success}
            ?neutral=${!!this.neutral}
            ?warning=${!!this.warning}
            ?danger=${!!this.danger}
            ?disabled=${!this.count || this.page === 1}
            @hmwc-click=${() => this.page--}></hmwc-button>
        </slot>

        ${this.range.map((page) => page === -1 ? b2`<hmwc-icon sm part="elipsis" class="pagination-page elipsis" src="three-dots"></hmwc-icon>` : b2`
                <hmwc-button
                  part="page page-${this.page === page ? "active" : "inactive"}"
                  class="pagination-page ${this.page === page ? "active" : ""}"
                  circle
                  ?sm=${!!this.sm}
                  ?md=${!!this.md}
                  ?lg=${!!this.lg}
                  ?primary=${!!this.primary && page === this.page}
                  ?success=${!!this.success && page === this.page}
                  ?neutral=${!!this.neutral && page === this.page}
                  ?warning=${!!this.warning && page === this.page}
                  ?danger=${!!this.danger && page === this.page}
                  label=${page}
                  @hmwc-click=${() => this.page = page}></hmwc-button>
              `)}

        <slot name="nav-forward" part="nav" class="pagination-page nav">
          <hmwc-button
            ?sm=${!!this.sm}
            ?md=${!!this.md}
            ?lg=${!!this.lg}
            basic
            icon="chevron-right"
            ?primary=${!!this.primary}
            ?success=${!!this.success}
            ?neutral=${!!this.neutral}
            ?warning=${!!this.warning}
            ?danger=${!!this.danger}
            ?disabled=${!this.count || this.page === this.count}
            @hmwc-click=${() => this.page++}></hmwc-button>
        </slot>
      </ul>
    `;
    }
  };
  Pagination.styles = styles27;
  Pagination.dependencies = [Icon, Button];
  __decorate29([
    r5()
  ], Pagination.prototype, "range", void 0);
  __decorate29([
    n5({ type: Number })
  ], Pagination.prototype, "page", void 0);
  __decorate29([
    n5({ type: Number })
  ], Pagination.prototype, "count", void 0);
  __decorate29([
    n5({ type: Number })
  ], Pagination.prototype, "siblings", void 0);
  __decorate29([
    n5({ type: Number })
  ], Pagination.prototype, "boundary", void 0);
  __decorate29([
    n5({ type: Boolean, reflect: true })
  ], Pagination.prototype, "sm", void 0);
  __decorate29([
    n5({ type: Boolean, reflect: true })
  ], Pagination.prototype, "md", void 0);
  __decorate29([
    n5({ type: Boolean, reflect: true })
  ], Pagination.prototype, "lg", void 0);
  __decorate29([
    n5({ type: Boolean, reflect: true })
  ], Pagination.prototype, "primary", void 0);
  __decorate29([
    n5({ type: Boolean, reflect: true })
  ], Pagination.prototype, "success", void 0);
  __decorate29([
    n5({ type: Boolean, reflect: true })
  ], Pagination.prototype, "neutral", void 0);
  __decorate29([
    n5({ type: Boolean, reflect: true })
  ], Pagination.prototype, "warning", void 0);
  __decorate29([
    n5({ type: Boolean, reflect: true })
  ], Pagination.prototype, "danger", void 0);
  __decorate29([
    watch("page", { waitUntilFirstUpdate: true })
  ], Pagination.prototype, "handlePageChange", null);
  __decorate29([
    watch(["count", "siblings", "boundary"])
  ], Pagination.prototype, "handleCountChange", null);

  // dist/components/pagination/index.js
  Pagination.define("hmwc-pagination", Pagination);

  // dist/components/data-table/data-table.styles.js
  var styles28 = i`
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
          font-size: calc(0.9 * var(--hmwc-font-size-small));
          font-weight: var(--hmwc-font-weight-bold);
          letter-spacing: var(--hmwc-letter-spacing-loose);
          text-transform: uppercase;
          text-align: left;
          white-space: nowrap;
          cursor: pointer;
          border-bottom: 2px solid var(--data-table-header-border-color);
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
                --icon-size: var(--hmwc-font-size-2x-small);
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
                --icon-size: var(--hmwc-font-size-2x-small);
                --icon-color: var(--data-table-sort-icon-color);
                opacity: 0.35;
                transition: opacity 0.15s ease-out;

                &:hover {
                  opacity: 0.8;
                }

                &.active {
                  opacity: 1;
                  --icon-color: var(--data-table-header-border-color);
                }
              }

              hmwc-menu {
                --menu-width: 220px;
                --menu-max-height: 280px;
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
                  overflow: hidden;
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
            opacity: 0.6;
          }

          & .data-table__col-resize {
            position: absolute;
            top: 0;
            right: -3px;
            width: 6px;
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
            font-size: var(--hmwc-font-size-small);
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
                --progress-track: 4px;

                &::part(base) {
                  height: 10px;
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
            box-shadow: inset 3px 0 0 0 var(--data-table-header-border-color);

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
        font-size: var(--hmwc-font-size-small);
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
            font-size: calc(0.85 * var(--hmwc-font-size-small));
            letter-spacing: var(--hmwc-letter-spacing-loose);
          }
        }
      }
      & .data-table__item {
        padding: var(--hmwc-spacing-3x-small) var(--hmwc-spacing-x-small);

        &.percent {
          & hmwc-progress {
            --progress-track: 3px;
          }
        }
      }

      & .data-table__footer {
        padding-top: var(--hmwc-spacing-x-small);
        & .data-table__info {
          font-size: calc(0.9 * var(--hmwc-font-size-small));
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
`;

  // dist/components/data-table/data-table.component.js
  var __decorate30 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var DataTable = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.selections = [];
      this._sizingId = 0;
      this._tableIsSized = false;
      this._resizing = null;
      this._didResize = false;
      this._columnWidths = {};
      this._boundResizeMove = null;
      this._boundResizeEnd = null;
      this._filterableFields = {};
      this._columnFilters = {};
      this.fieldKeys = [];
      this.ready = false;
      this.results = [];
      this.entries = [];
      this.total = 0;
      this.data = [];
      this.fields = [];
      this.page = 1;
      this.amount = 10;
      this.sizing = {};
      this.filter = "";
      this.sort = "";
      this.order = "descending";
      this.pagination = true;
      this.dataUpdate = () => this.parseData();
      this.entriesUpdate = () => this.entries = this.getEntries();
    }
    //   @watch('page', { waitUntilFirstUpdate: true }) pageUpdate = () => this.emit('navigate',{detail: { page: this.page, value: this.results }})
    getColumnStyle(field) {
      if (this._columnWidths[field]) {
        return `width: ${this._columnWidths[field]}px`;
      }
      if (this.sizing && this.sizing[field]) {
        return `width: ${this.sizing[field]}`;
      }
      return "";
    }
    /**
     * Returns whether the user has provided fields (array or object).
     */
    hasFields() {
      if (Array.isArray(this.fields) && this.fields.length > 0) {
        return true;
      } else {
        return false;
      }
    }
    /**
     * Returns the display name for a given data field key.
     *
     * When `fields` is an object, the value is used as the display name.
     * Otherwise, the field key itself is returned.
     */
    getDisplayName(field) {
      if (Array.isArray(this.fields) && this.fields.length > 0) {
        if (typeof this.fields[0] === "object") {
          if (this.fields[0][field])
            return this.fields[0][field];
        }
      }
      return field;
    }
    /**
     * Detects the data type of a column and computes filterable metadata.
     * For numeric columns, also computes statistical presets (min, max, quartiles, median).
     */
    computeFilterableFields() {
      const maxCategoricalValues = 10;
      const filterable = {};
      for (const field of this.fieldKeys) {
        if (this.isSkeletonField(field))
          continue;
        const values = [];
        for (const row of this.data) {
          const val = row[field];
          if (val != null && val !== "")
            values.push(val);
        }
        if (values.length === 0)
          continue;
        const type = this.detectColumnType(values);
        if (type === "categorical") {
          const unique = Array.from(new Set(values.map(String))).sort((a4, b3) => a4.localeCompare(b3));
          if (unique.length < maxCategoricalValues) {
            filterable[field] = { type: "categorical", values: unique };
          }
        } else if (type === "numeric") {
          const nums = values.map((v2) => this.parseNumericValue(v2)).filter((n7) => n7 != null).sort((a4, b3) => a4 - b3);
          if (nums.length > 0) {
            const q = (arr, p4) => {
              const i7 = (arr.length - 1) * p4;
              const lo = Math.floor(i7);
              const hi = Math.ceil(i7);
              return lo === hi ? arr[lo] : arr[lo] * (hi - i7) + arr[hi] * (i7 - lo);
            };
            filterable[field] = {
              type: "numeric",
              values: [],
              numericStats: {
                min: nums[0],
                max: nums[nums.length - 1],
                q1: q(nums, 0.25),
                median: q(nums, 0.5),
                q3: q(nums, 0.75)
              }
            };
          }
        } else {
          filterable[field] = { type, values: [] };
        }
      }
      this._filterableFields = filterable;
    }
    /**
     * Detects whether a column contains numeric, date, or categorical data.
     */
    detectColumnType(values) {
      let numericCount = 0;
      let dateCount = 0;
      for (const val of values) {
        const str = String(val);
        const stripped = str.replace(/[$,%k]/gi, "").replace(/,/g, "").trim();
        if (stripped !== "" && !isNaN(Number(stripped))) {
          numericCount++;
          continue;
        }
        if (this.isValidDate(str)) {
          dateCount++;
          continue;
        }
      }
      const total = values.length;
      if (numericCount / total >= 0.8)
        return "numeric";
      if (dateCount / total >= 0.8)
        return "date";
      return "categorical";
    }
    /**
     * Extracts the raw numeric value from a formatted string (e.g. "$1,234", "45%", "120k").
     */
    parseNumericValue(val) {
      if (typeof val === "number")
        return val;
      const str = String(val).trim();
      const stripped = str.replace(/[$,%k]/gi, "").replace(/,/g, "");
      const num = Number(stripped);
      return isNaN(num) ? null : num;
    }
    /**
     * Checks if a column filter is active (has values constrained).
     */
    isColumnFilterActive(field) {
      const filter = this._columnFilters[field];
      if (!filter)
        return false;
      const meta = this._filterableFields[field];
      if (!meta)
        return false;
      switch (filter.type) {
        case "categorical":
          return filter.selected.size < meta.values.length;
        case "numeric":
          return filter.min != null || filter.max != null;
        case "date":
          return filter.from != null || filter.to != null;
        case "text":
          return filter.query.length > 0;
      }
    }
    /**
     * Checks if a specific value is selected in a categorical column filter.
     */
    isFilterValueSelected(field, value) {
      const filter = this._columnFilters[field];
      if (!filter || filter.type !== "categorical")
        return true;
      return filter.selected.has(value);
    }
    /**
     * Converts a string to Title Case for display in filter menus.
     */
    toTitleCase(str) {
      return str.toLowerCase().replace(/(?:^|\s)\S/g, (char) => char.toUpperCase());
    }
    /**
     * Handles a menu-item's checked state change within a categorical column filter.
     */
    handleCategoricalFilterChange(field, e8) {
      const detail = e8.detail?.value;
      const meta = this._filterableFields[field];
      if (!meta)
        return;
      if (detail === "all") {
        delete this._columnFilters[field];
        this._columnFilters = { ...this._columnFilters };
        this.page = 1;
        this.parseData();
        return;
      }
      if (detail === "none") {
        this._columnFilters[field] = { type: "categorical", selected: /* @__PURE__ */ new Set() };
        this._columnFilters = { ...this._columnFilters };
        this.page = 1;
        this.parseData();
        return;
      }
      if (detail instanceof MenuItem) {
        const value = detail.value;
        if (!value)
          return;
        let filter = this._columnFilters[field];
        if (!filter || filter.type !== "categorical") {
          filter = { type: "categorical", selected: new Set(meta.values) };
          this._columnFilters[field] = filter;
        }
        if (detail.checked) {
          filter.selected.add(value);
        } else {
          filter.selected.delete(value);
        }
        if (filter.selected.size === meta.values.length) {
          delete this._columnFilters[field];
        }
        this._columnFilters = { ...this._columnFilters };
        this.page = 1;
        this.parseData();
      }
    }
    /**
     * Handles range input changes for numeric column filters.
     */
    handleNumericFilterChange(field, bound, e8) {
      const input = e8.target;
      const raw = String(input.value ?? "").trim();
      let filter = this._columnFilters[field];
      if (!filter || filter.type !== "numeric") {
        filter = { type: "numeric" };
        this._columnFilters[field] = filter;
      }
      if (!raw || raw === "") {
        delete filter[bound];
      } else {
        filter[bound] = Number(raw);
      }
      if (filter.min == null && filter.max == null) {
        delete this._columnFilters[field];
      }
      this._columnFilters = { ...this._columnFilters };
      this.page = 1;
      this.parseData();
    }
    /**
     * Handles range input changes for date column filters.
     */
    handleDateFilterChange(field, bound, e8) {
      const input = e8.target;
      const raw = String(input.value ?? "").trim();
      let filter = this._columnFilters[field];
      if (!filter || filter.type !== "date") {
        filter = { type: "date" };
        this._columnFilters[field] = filter;
      }
      if (!raw || raw === "") {
        delete filter[bound];
      } else {
        filter[bound] = raw;
      }
      if (filter.from == null && filter.to == null) {
        delete this._columnFilters[field];
      }
      this._columnFilters = { ...this._columnFilters };
      this.page = 1;
      this.parseData();
    }
    /**
     * Handles text input changes for text column filters.
     */
    handleTextFilterChange(field, e8) {
      const input = e8.target;
      const raw = String(input.value ?? "").trim();
      if (!raw) {
        delete this._columnFilters[field];
      } else {
        this._columnFilters[field] = { type: "text", query: raw };
      }
      this._columnFilters = { ...this._columnFilters };
      this.page = 1;
      this.parseData();
    }
    /**
     * Clears a column filter, removing all constraints.
     */
    clearColumnFilter(field) {
      delete this._columnFilters[field];
      this._columnFilters = { ...this._columnFilters };
      this.page = 1;
      this.parseData();
    }
    /**
     * Applies a numeric preset range to a column filter.
     */
    applyNumericPreset(field, min, max) {
      const filter = { type: "numeric" };
      if (min != null)
        filter.min = min;
      if (max != null)
        filter.max = max;
      this._columnFilters[field] = filter;
      this._columnFilters = { ...this._columnFilters };
      this.page = 1;
      this.parseData();
    }
    /**
     * Formats a number for display in preset chips (e.g. 1234 → "1,234", 1500000 → "1.5M").
     */
    formatPresetValue(val) {
      if (Math.abs(val) >= 1e6)
        return `${(val / 1e6).toFixed(1).replace(/\.0$/, "")}M`;
      if (Math.abs(val) >= 1e4)
        return `${(val / 1e3).toFixed(1).replace(/\.0$/, "")}k`;
      return val.toLocaleString("en-US", { maximumFractionDigits: 0 });
    }
    /**
     * Parses the data provided to the component to apply filtering, sorting,
     * and pagination logic to the data.
     */
    parseData() {
      this.fieldKeys = this.resolveFieldKeys();
      this.computeFilterableFields();
      const filteredData = this.filterData();
      const selections = [];
      filteredData.forEach(() => selections.push(false));
      this.selections = selections;
      this.results = this.sortData(filteredData);
      const maxPage = Math.max(1, Math.ceil(this.results.length / this.amount));
      if (this.page > maxPage)
        this.page = 1;
      this.entries = this.getEntries(this.results);
      this.total = this.results.length;
      if (this.amount === Infinity)
        this.amount = this.results.length;
      if (filteredData.length)
        this.ready = true;
      this.setTableSizing();
    }
    /**
     * Filters the data within the data-table, removing entries that do not
     * include the query set by the `filter` property.
     *
     * Searches across all fields in the data, not just the displayed columns.
     * Also applies column-specific filters from the filter dropdowns.
     */
    filterData(data = this.data) {
      data = structuredClone(data);
      const columnFilterKeys = Object.keys(this._columnFilters);
      if (columnFilterKeys.length > 0) {
        data = data.filter((row) => {
          return columnFilterKeys.every((field) => {
            const filter2 = this._columnFilters[field];
            const rowValue = row[field];
            if (rowValue == null)
              return false;
            switch (filter2.type) {
              case "categorical":
                return filter2.selected.has(String(rowValue));
              case "numeric": {
                const num = this.parseNumericValue(rowValue);
                if (num == null)
                  return false;
                if (filter2.min != null && num < filter2.min)
                  return false;
                if (filter2.max != null && num > filter2.max)
                  return false;
                return true;
              }
              case "date": {
                const d3 = new Date(String(rowValue));
                if (isNaN(d3.getTime()))
                  return false;
                if (filter2.from != null && d3 < new Date(filter2.from))
                  return false;
                if (filter2.to != null && d3 > new Date(filter2.to))
                  return false;
                return true;
              }
              case "text": {
                if (!filter2.query)
                  return true;
                return String(rowValue).toLowerCase().includes(filter2.query.toLowerCase());
              }
              default:
                return true;
            }
          });
        });
      }
      if (!this.filter.length)
        return data;
      const filter = this.filter.toLowerCase();
      return data.filter((row) => {
        return Object.values(row).some((value) => {
          if (!value)
            return false;
          return value.toString().toLowerCase().includes(filter);
        });
      });
    }
    /**
     * Sorts the data within the data-table in either ascending or
     * descending order.
     *
     * The field that is used for sorting the data can be set using the
     * 'sort' property. The order can be configured using the 'order'
     * property.
     */
    sortData(data = this.filterData()) {
      const sort = {
        month: {
          trigger: () => this.sort.toLowerCase() === "month",
          value: (entry) => /* @__PURE__ */ new Date(`${entry[this.sort]} ${entry["Year"] || entry["year"] || 2025}`)
        },
        year: {
          trigger: () => this.sort.toLowerCase() === "year",
          value: (entry) => /* @__PURE__ */ new Date(`${entry["Month"] || entry["month"] || "January"} ${entry[this.sort]}`)
        },
        percentage: {
          trigger: (entry) => entry[this.sort] != null && entry[this.sort]?.toString().includes("%"),
          value: (entry) => Number(entry[this.sort].toString().split("%")[0])
        },
        money: {
          trigger: (entry) => {
            const val = entry[this.sort];
            return val != null && typeof val === "string" && val[val.length - 1] === "k" && !isNaN(Number(val.slice(0, -1)));
          },
          value: (entry) => Number(entry[this.sort].toString().split("k")[0])
        },
        number: {
          trigger: (entry) => entry[this.sort] != null && entry[this.sort].toString()[0] === "$",
          value: (entry) => parseInt(entry[this.sort].toString().split("$")[1])
        },
        other: {
          trigger: () => true,
          value: (entry) => entry[this.sort]
        }
      };
      if (!this.sort)
        return data;
      return data.sort((rowA, rowB) => {
        let a4;
        let b3;
        Object.keys(sort).some((type) => {
          if (sort[type].trigger(rowA)) {
            a4 = sort[type].value(rowA);
            b3 = sort[type].value(rowB);
            return true;
          }
          return;
        });
        if (a4 == null && b3 == null)
          return 0;
        if (a4 == null)
          return 1;
        if (b3 == null)
          return -1;
        const dir = this.order === "descending";
        return a4 > b3 ? dir ? -1 : 1 : b3 > a4 ? dir ? 1 : -1 : 0;
      });
    }
    /**
     * Sorts the data in the data-table using the provided field.
     *
     * If the field is already actively being used to sort the data, the order
     * that the data is being sorted in will be inversed.
     */
    sortByField(field) {
      if (this._didResize) {
        this._didResize = false;
        return;
      }
      if (!this.fieldKeys.includes(field))
        return;
      if (this.sort === field) {
        this.order = this.order === "ascending" ? "descending" : "ascending";
      } else {
        this.sort = field;
        this.order = "ascending";
      }
      this.parseData();
    }
    selectAll() {
      if (!this.selectable)
        return;
      this.selections = this.selections.map(() => true);
    }
    deselectAll() {
      if (!this.selectable)
        return;
      this.selections = this.selections.map(() => false);
    }
    /**
     * Resolves the data keys to use as columns from the `fields` property.
     *
     * Handles `fields` as either a `string[]` or a `{ [key: string]: string }` object.
     */
    resolveFieldKeys() {
      const defaultCols = 5;
      if (!this.hasFields() && !this.data.length) {
        return [...Array(defaultCols).keys()].map((_2, i7) => `#SKELETON-${i7}`);
      }
      if (this.hasFields()) {
        if (Array.isArray(this.fields) && this.fields.length > 0) {
          if (typeof this.fields[0] === "object") {
            return Object.keys(this.fields[0]);
          } else {
            return [...this.fields];
          }
        }
      }
      return Object.keys(this.data[0]);
    }
    /**
     * Get the entries associated with the current page of the data-table.
     */
    getEntries(data = this.results) {
      if (!this.ready && data.length === 0) {
        return Array.from({ length: this.amount }, () => {
          return this.fieldKeys.reduce((acc, field) => {
            return { ...acc, [field]: "#SKELETON" };
          }, {});
        });
      } else {
        const diff = this.amount - data.length;
        if (diff > 0) {
          return [
            ...data,
            ...Array.from({ length: diff }, () => {
              return this.fieldKeys.reduce((acc, field) => {
                return { ...acc, [field]: "\u200E " };
              }, {});
            })
          ];
        } else {
          const start = (this.page - 1) * this.amount;
          const end = this.page * this.amount;
          const entries = data.slice(start, end);
          const diff2 = this.amount - entries.length;
          if (diff2 > 0) {
            return [
              ...entries,
              ...Array.from({ length: diff2 }, () => {
                return this.fieldKeys.reduce((acc, field) => {
                  return { ...acc, [field]: "\u200E " };
                }, {});
              })
            ];
          } else {
            return entries;
          }
        }
      }
    }
    isValidDate(str) {
      const date = new Date(str);
      return !isNaN(date.getTime());
    }
    setTableSizing() {
      if (this._tableIsSized)
        return;
      const id = ++this._sizingId;
      this.updateComplete.then(() => {
        if (id !== this._sizingId)
          return;
        const table = this.shadowRoot?.querySelector("table");
        if (!table)
          return;
        if (this.isSkeletonField(this.fieldKeys[0]))
          return;
        const tbody = table.querySelector("tbody");
        if (!tbody)
          return;
        const heads = Array.from(table.querySelectorAll("th.data-table__col-head"));
        if (!heads.length)
          return;
        const allFields = this.action ? [...this.fieldKeys, this.action.field] : this.fieldKeys;
        const fieldOffset = this.selectable ? 1 : 0;
        heads.forEach((th, i7) => {
          const field = allFields[i7 - fieldOffset];
          if (field && (this.sizing?.[field] || this._columnWidths[field]))
            return;
          th.style.removeProperty("width");
        });
        table.style.tableLayout = "auto";
        const longest = {};
        for (const field of this.fieldKeys) {
          longest[field] = "";
          for (const row of this.results) {
            const val = row[field]?.toString() ?? "";
            if (val.length > longest[field].length) {
              longest[field] = val;
            }
          }
        }
        const sizingRow = document.createElement("tr");
        sizingRow.className = "data-table__table-row";
        sizingRow.setAttribute("aria-hidden", "true");
        sizingRow.style.cssText = "visibility:hidden;height:0;overflow:hidden;";
        if (this.selectable) {
          const td = document.createElement("td");
          td.className = "data-table__item checkbox";
          td.style.cssText = "height:0;line-height:0;border:none;";
          sizingRow.appendChild(td);
        }
        for (const field of this.fieldKeys) {
          const td = document.createElement("td");
          td.className = "data-table__item";
          td.style.cssText = "white-space:nowrap;height:0;line-height:0;border:none;";
          td.textContent = longest[field];
          sizingRow.appendChild(td);
        }
        if (this.action) {
          const td = document.createElement("td");
          td.className = "data-table__item action";
          td.style.cssText = "height:0;line-height:0;border:none;";
          sizingRow.appendChild(td);
        }
        tbody.appendChild(sizingRow);
        const widths = heads.map((th) => th.offsetWidth);
        sizingRow.remove();
        heads.forEach((th, i7) => {
          const field = allFields[i7 - fieldOffset];
          if (field && (this.sizing?.[field] || this._columnWidths[field]))
            return;
          th.style.width = `${widths[i7]}px`;
        });
        table.style.tableLayout = "fixed";
        this._tableIsSized = true;
      });
    }
    getSelectionStatus(i7) {
      return this.selections[(this.page - 1) * this.amount + i7];
    }
    isSkeletonField(field) {
      return typeof field === "string" && field.includes("#SKELETON");
    }
    getStorageKey() {
      const id = this.label || this.fieldKeys.join(",");
      return `hmwc-data-table-col-widths:${id}`;
    }
    loadColumnWidths() {
      if (!this.cache)
        return;
      try {
        const stored = localStorage.getItem(this.getStorageKey());
        if (stored) {
          this._columnWidths = JSON.parse(stored);
        }
      } catch {
      }
    }
    saveColumnWidths() {
      if (!this.cache)
        return;
      try {
        localStorage.setItem(this.getStorageKey(), JSON.stringify(this._columnWidths));
      } catch {
      }
    }
    handleResizeStart(e8, field) {
      e8.preventDefault();
      e8.stopPropagation();
      const th = e8.target.parentElement;
      if (!th)
        return;
      const table = this.shadowRoot?.querySelector("table");
      if (!table)
        return;
      this._resizing = {
        field,
        startX: e8.clientX,
        startWidth: th.offsetWidth,
        th,
        table,
        activated: false
      };
      this._boundResizeMove = this.handleResizeMove.bind(this);
      this._boundResizeEnd = this.handleResizeEnd.bind(this);
      document.addEventListener("mousemove", this._boundResizeMove);
      document.addEventListener("mouseup", this._boundResizeEnd);
    }
    activateResize() {
      if (!this._resizing || this._resizing.activated)
        return;
      this._resizing.activated = true;
      const { table, th } = this._resizing;
      const heads = Array.from(table.querySelectorAll("th.data-table__col-head"));
      heads.forEach((h3) => {
        h3.style.width = `${h3.offsetWidth}px`;
      });
      table.style.tableLayout = "fixed";
      this._resizing.startWidth = th.offsetWidth;
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    }
    handleResizeMove(e8) {
      if (!this._resizing)
        return;
      const diff = e8.clientX - this._resizing.startX;
      if (!this._resizing.activated) {
        if (Math.abs(diff) < 5)
          return;
        this.activateResize();
      }
      const newWidth = Math.max(40, this._resizing.startWidth + diff);
      this._resizing.th.style.width = `${newWidth}px`;
    }
    handleResizeEnd() {
      if (!this._resizing)
        return;
      if (this._resizing.activated) {
        this._didResize = true;
        this._columnWidths[this._resizing.field] = this._resizing.th.offsetWidth;
        this.saveColumnWidths();
      }
      if (this._boundResizeMove) {
        document.removeEventListener("mousemove", this._boundResizeMove);
      }
      if (this._boundResizeEnd) {
        document.removeEventListener("mouseup", this._boundResizeEnd);
      }
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
      this._resizing = null;
      this._boundResizeMove = null;
      this._boundResizeEnd = null;
    }
    connectedCallback() {
      super.connectedCallback();
      this.parseData();
      this.loadColumnWidths();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      if (this._boundResizeMove) {
        document.removeEventListener("mousemove", this._boundResizeMove);
      }
      if (this._boundResizeEnd) {
        document.removeEventListener("mouseup", this._boundResizeEnd);
      }
    }
    /**
     * Renders a filter toolbar with a clear button when a filter is active.
     */
    renderFilterToolbar(field) {
      if (!this.isColumnFilterActive(field))
        return "";
      return b2`
      <div class="data-table__filter-toolbar">
        <span class="data-table__filter-toolbar-label">Clear filter</span>
        <hmwc-icon src="x-lg" class="data-table__filter-clear" @click=${() => this.clearColumnFilter(field)}> </hmwc-icon>
      </div>
    `;
    }
    /**
     * Renders preset range chips for numeric column filters.
     */
    renderNumericPresets(field) {
      const meta = this._filterableFields[field];
      if (!meta?.numericStats)
        return "";
      const s4 = meta.numericStats;
      const filter = this._columnFilters[field];
      const isActive = (min, max) => {
        if (!filter || filter.type !== "numeric")
          return false;
        return filter.min === min && filter.max === max;
      };
      const fv = (v2) => this.formatPresetValue(v2);
      const presets = [
        { label: `\u2264 ${fv(s4.median)}`, max: s4.median },
        { label: `${fv(s4.q1)} \u2013 ${fv(s4.q3)}`, min: s4.q1, max: s4.q3 },
        { label: `\u2265 ${fv(s4.median)}`, min: s4.median }
      ];
      return b2`
      <div class="data-table__filter-presets">
        <span class="data-table__filter-presets-label">Quick filters</span>
        <div class="data-table__filter-presets-list">
          ${presets.map((p4) => b2`
              <button
                class="data-table__filter-preset ${isActive(p4.min, p4.max) ? "active" : ""}"
                @click=${() => isActive(p4.min, p4.max) ? this.clearColumnFilter(field) : this.applyNumericPreset(field, p4.min, p4.max)}>
                ${p4.label}
              </button>
            `)}
        </div>
      </div>
    `;
    }
    /**
     * Renders the complete filter UI for a column based on its detected type.
     * All types are wrapped in <hmwc-menu> for consistent styling and attachment behavior.
     */
    renderColumnFilter(field) {
      const meta = this._filterableFields[field];
      if (!meta)
        return "";
      const filter = this._columnFilters[field];
      switch (meta.type) {
        case "categorical":
          return b2`
          <hmwc-menu filter="" selectAll @hmwc-change=${(e8) => this.handleCategoricalFilterChange(field, e8)}>
            ${meta.values.map((value) => b2`
                <hmwc-menu-item checkable ?checked=${this.isFilterValueSelected(field, value)} label=${this.toTitleCase(value)} value=${value}>
                </hmwc-menu-item>
              `)}
          </hmwc-menu>
        `;
        case "numeric":
          return b2`
          <hmwc-menu>
            <div class="data-table__range-filter">
              ${this.renderFilterToolbar(field)}
              <div class="data-table__range-inputs">
                <hmwc-input
                  underline
                  sm
                  fluid
                  type="number"
                  placeholder="Min"
                  .value=${filter?.type === "numeric" && filter.min != null ? String(filter.min) : ""}
                  @hmwc-change=${(e8) => this.handleNumericFilterChange(field, "min", e8)}>
                </hmwc-input>
                <span class="data-table__range-separator">–</span>
                <hmwc-input
                  underline
                  sm
                  fluid
                  type="number"
                  placeholder="Max"
                  .value=${filter?.type === "numeric" && filter.max != null ? String(filter.max) : ""}
                  @hmwc-change=${(e8) => this.handleNumericFilterChange(field, "max", e8)}>
                </hmwc-input>
              </div>
              ${this.renderNumericPresets(field)}
            </div>
          </hmwc-menu>
        `;
        case "date":
          return b2`
          <hmwc-menu>
            <div class="data-table__range-filter">
              ${this.renderFilterToolbar(field)}
              <div class="data-table__range-group">
                <label class="data-table__range-label">From</label>
                <hmwc-input
                  underline
                  sm
                  fluid
                  type="date"
                  suffix="calendar"
                  placeholder="MM/DD/YYYY"
                  .value=${filter?.type === "date" && filter.from != null ? filter.from : ""}
                  @hmwc-change=${(e8) => this.handleDateFilterChange(field, "from", e8)}>
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
                  .value=${filter?.type === "date" && filter.to != null ? filter.to : ""}
                  @hmwc-change=${(e8) => this.handleDateFilterChange(field, "to", e8)}>
                </hmwc-input>
              </div>
            </div>
          </hmwc-menu>
        `;
        case "text":
        default:
          return b2`
          <hmwc-menu>
            <div class="data-table__range-filter">
              ${this.renderFilterToolbar(field)}
              <hmwc-input
                underline
                sm
                fluid
                placeholder="Search..."
                .value=${filter?.type === "text" && filter.query ? filter.query : ""}
                @hmwc-input=${(e8) => this.handleTextFilterChange(field, e8)}>
              </hmwc-input>
            </div>
          </hmwc-menu>
        `;
      }
    }
    render() {
      return b2`
      <div
        part="base"
        class=${e7({
        "data-table": true,
        search: false,
        pagination: !!this.pagination,
        fluid: this.amount === Infinity,
        small: !!this.sm,
        primary: !!this.primary,
        success: !!this.success,
        neutral: !!this.neutral,
        warning: !!this.warning,
        danger: !!this.danger
      })}>
        <table part="table" class="data-table__table" rules="none">
          <thead>
            <tr part="header" role="row" class="data-table__table-head">
              ${this.selectable ? b2`
                      <th part="field" class="data-table__col-head checkbox">
                        <hmwc-checkbox
                          part="field-checkbox"
                          small
                          @hmwc-change=${(e8) => e8.detail.value ? this.selectAll() : this.deselectAll()}></hmwc-checkbox>
                      </th>
                    ` : ""}
              ${this.fieldKeys.length && this.isSkeletonField(this.fieldKeys[0]) ? b2`
                      <th part="field" colspan=${this.fieldKeys.length} class="data-table__col-head skeleton">
                        <hmwc-skeleton></hmwc-skeleton>
                      </th>
                    ` : (this.action ? [...this.fieldKeys, this.action.field] : this.fieldKeys).map((field) => b2`
                        <th
                          part="field"
                          class="data-table__col-head"
                          active=${this.sort === field}
                          descending=${this.sort === field && this.order === "descending"}
                          skeleton=${this.isSkeletonField(this.fieldKeys[0])}
                          action=${field === this.action?.field}
                          style=${this.getColumnStyle(field)}
                          @click=${() => this.sortByField(field)}>
                          <div class="data-table__col-head-content">
                            ${this.getDisplayName(field)}
                            ${field !== this.action?.field ? b2`<span class="data-table__col-sort">
                                  <hmwc-icon flex part="sort-icon" src="chevron-down"></hmwc-icon>
                                </span>` : ""}
                            ${field !== this.action?.field && this._filterableFields[field] ? b2`
                                  <hmwc-attachment
                                    class="data-table__col-filter"
                                    placement="bottom-end"
                                    .distance=${8}
                                    .skidding=${8}
                                    arrow
                                    stayOpen
                                    @click=${(e8) => e8.stopPropagation()}>
                                    <hmwc-button
                                      slot="anchor"
                                      basic
                                      sm
                                      icon=${this.isColumnFilterActive(field) ? "funnel-fill" : "funnel"}
                                      part="filter-icon"
                                      class="data-table__col-filter-icon ${this.isColumnFilterActive(field) ? "active" : ""}">
                                    </hmwc-button>
                                    ${this.renderColumnFilter(field)}
                                  </hmwc-attachment>
                                ` : ""}
                          </div>
                          ${field !== this.action?.field ? b2`<div class="data-table__col-resize" @mousedown=${(e8) => this.handleResizeStart(e8, field)}></div>` : ""}
                        </th>
                      `)}
            </tr>
          </thead>

          <tbody part="data" class="data-table__body">
            ${this.entries.map((row, i7) => b2`
                <tr
                  part="row"
                  class="data-table__table-row"
                  role="row"
                  @click=${() => Object.values(row)[0] !== "\u200E " && this.emit("hmwc-click", { detail: { value: row } })}>
                  ${this.selectable ? b2`
                        <td class="data-table__item checkbox">
                          <hmwc-checkbox
                            part="row-checkbox"
                            small
                            ?checked=${l4(this.getSelectionStatus(i7))}
                            @hmwc-change=${(e8) => this.selections[(this.page - 1) * this.amount + i7] = e8.detail.value}></hmwc-checkbox>
                        </td>
                      ` : ""}
                  ${this.fieldKeys.map((field) => {
        const value = row[field];
        return /^\d+(\.\d+)?%$/.test(value) ? b2`
                          <td class="data-table__item percent">
                            <hmwc-progress
                              part="progress"
                              ?primary=${this.primary}
                              ?success=${this.success}
                              ?neutral=${this.neutral}
                              ?warning=${this.warning}
                              ?danger=${this.danger}
                              value=${parseInt(value.split("%")[0])}>
                            </hmwc-progress>
                          </td>
                        ` : value === "#SKELETON" ? b2` <td class="data-table__item skeleton"><hmwc-skeleton></hmwc-skeleton></td> ` : b2`<td class="data-table__item">
                          ${value === true ? b2`<hmwc-icon src="check" success></hmwc-icon>` : value === false ? b2`<hmwc-icon src="x" danger></hmwc-icon>` : value && this.isValidDate(value) ? new Date(value).toLocaleDateString() : value}
                        </td>`;
      })}
                  ${this.action ? b2`<td class="data-table__item action">
                        <hmwc-button
                          sm
                          label=${this.action.label}
                          ?primary=${!this.action.variant || this.action.variant === "primary"}
                          ?success=${this.action.variant === "success"}
                          ?warning=${this.action.variant === "warning"}
                          ?neutral=${this.action.variant === "neutral"}
                          ?danger=${this.action.variant === "danger"}
                          @hmwc-click=${() => this.emit("hmwc-action", { detail: { data: row } })}></hmwc-button>
                      </td> ` : ""}
                </tr>
              `)}
          </tbody>
        </table>

        ${this.pagination ? b2`
                <div class="data-table__footer">
                  <div part="entries" class="data-table__info">
                    ${this.total !== 0 || this.isSkeletonField(this.fieldKeys[0]) ? `Showing ${(this.page - 1) * this.amount + 1} to ${this.total < this.page * this.amount ? this.total || this.amount : this.page * this.entries.length} of ${this.results.length} entries.` : `No entries found!`}
                  </div>

                  <hmwc-pagination
                    sm
                    part="pagination"
                    class="data-table__pagination"
                    primary
                    page=${this.page}
                    count=${Math.ceil(this.results.length / this.amount) || 1}
                    @hmwc-change=${(e8) => this.page = e8.detail.page}
                    @hmwc-click=${(e8) => e8.stopImmediatePropagation()}
                    siblings=${this.sm ? 0 : 1}></hmwc-pagination>
                </div>
              ` : ""}
        </div>
      </div>
      </div>
    `;
    }
  };
  DataTable.styles = styles28;
  DataTable.dependencies = [Attachment, Icon, Input, Button, Skeleton, Dropdown, Checkbox, Menu, MenuItem, Pagination];
  __decorate30([
    r5()
  ], DataTable.prototype, "selections", void 0);
  __decorate30([
    r5()
  ], DataTable.prototype, "_filterableFields", void 0);
  __decorate30([
    r5()
  ], DataTable.prototype, "_columnFilters", void 0);
  __decorate30([
    r5()
  ], DataTable.prototype, "fieldKeys", void 0);
  __decorate30([
    r5()
  ], DataTable.prototype, "ready", void 0);
  __decorate30([
    r5()
  ], DataTable.prototype, "results", void 0);
  __decorate30([
    r5()
  ], DataTable.prototype, "entries", void 0);
  __decorate30([
    r5()
  ], DataTable.prototype, "total", void 0);
  __decorate30([
    n5({ type: Array })
  ], DataTable.prototype, "data", void 0);
  __decorate30([
    n5({ type: Object })
  ], DataTable.prototype, "fields", void 0);
  __decorate30([
    n5({ type: Number, reflect: true })
  ], DataTable.prototype, "page", void 0);
  __decorate30([
    n5({ type: Number, reflect: true })
  ], DataTable.prototype, "amount", void 0);
  __decorate30([
    n5({ type: String })
  ], DataTable.prototype, "label", void 0);
  __decorate30([
    n5({ type: Object })
  ], DataTable.prototype, "sizing", void 0);
  __decorate30([
    n5({ type: String })
  ], DataTable.prototype, "filter", void 0);
  __decorate30([
    n5({ type: String })
  ], DataTable.prototype, "sort", void 0);
  __decorate30([
    n5({ type: String })
  ], DataTable.prototype, "order", void 0);
  __decorate30([
    n5({ type: Boolean })
  ], DataTable.prototype, "pagination", void 0);
  __decorate30([
    n5({ type: Boolean, reflect: true })
  ], DataTable.prototype, "selectable", void 0);
  __decorate30([
    n5({ type: Boolean, reflect: true })
  ], DataTable.prototype, "sm", void 0);
  __decorate30([
    n5({ type: Boolean, reflect: true })
  ], DataTable.prototype, "md", void 0);
  __decorate30([
    n5({ type: Boolean, reflect: true })
  ], DataTable.prototype, "lg", void 0);
  __decorate30([
    n5({ type: Object })
  ], DataTable.prototype, "action", void 0);
  __decorate30([
    n5({ type: Boolean, reflect: true })
  ], DataTable.prototype, "cache", void 0);
  __decorate30([
    n5({ type: Boolean, reflect: true })
  ], DataTable.prototype, "primary", void 0);
  __decorate30([
    n5({ type: Boolean, reflect: true })
  ], DataTable.prototype, "success", void 0);
  __decorate30([
    n5({ type: Boolean, reflect: true })
  ], DataTable.prototype, "neutral", void 0);
  __decorate30([
    n5({ type: Boolean, reflect: true })
  ], DataTable.prototype, "warning", void 0);
  __decorate30([
    n5({ type: Boolean, reflect: true })
  ], DataTable.prototype, "danger", void 0);
  __decorate30([
    watch(["data", "filter", "order", "fields"])
  ], DataTable.prototype, "dataUpdate", void 0);
  __decorate30([
    watch(["amount", "page"], { waitUntilFirstUpdate: true })
  ], DataTable.prototype, "entriesUpdate", void 0);

  // dist/components/data-table/index.js
  DataTable.define("hmwc-data-table", DataTable);

  // dist/components/grid/grid.styles.js
  var styles29 = i`
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
`;

  // dist/components/grid/grid.component.js
  var __decorate31 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Grid = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.align = "center";
    }
    connectedCallback() {
      super.connectedCallback();
      if (this.page)
        this.animation = "scale-in";
      const items = this.controllers.slot.get();
      if (!this.rows)
        this.rows = Math.ceil(items.length / (this.cols || 1));
      items.forEach((item, i7) => {
        ;
        item.style.setProperty("z-index", `${items.length - (i7 + 1)}`);
      });
    }
    render() {
      const classifier = e7({
        grid: true,
        "gap-xs": this.gap === "xs",
        "gap-sm": this.gap === "sm",
        "gap-md": this.gap === "md",
        "gap-lg": this.gap === "lg",
        "gap-xl": this.gap === "xl",
        "gap-row-xs": this.gap?.includes("/") && this.gap?.split("/")[0] === "xs" || false,
        "gap-row-sm": this.gap?.includes("/") && this.gap?.split("/")[0] === "sm" || false,
        "gap-row-md": this.gap?.includes("/") && this.gap?.split("/")[0] === "md" || false,
        "gap-row-lg": this.gap?.includes("/") && this.gap?.split("/")[0] === "lg" || false,
        "gap-row-xl": this.gap?.includes("/") && this.gap?.split("/")[0] === "xl" || false,
        "gap-col-xs": this.gap?.includes("/") && this.gap?.split("/")[1] === "xs" || false,
        "gap-col-sm": this.gap?.includes("/") && this.gap?.split("/")[1] === "sm" || false,
        "gap-col-md": this.gap?.includes("/") && this.gap?.split("/")[1] === "md" || false,
        "gap-col-lg": this.gap?.includes("/") && this.gap?.split("/")[1] === "lg" || false,
        "gap-col-xl": this.gap?.includes("/") && this.gap?.split("/")[1] === "xl" || false,
        "justify-start": this.justify === "start",
        "justify-end": this.justify === "end",
        "justify-center": this.justify === "center",
        "justify-stretch": this.justify === "stretch",
        "justify-around": this.justify === "around",
        "justify-between": this.justify === "between",
        "justify-even": this.justify === "even",
        "align-start": this.align === "start",
        "align-end": this.align === "end",
        "align-center": this.align === "center",
        fluid: !!this.fit,
        page: !!this.page
      });
      return b2`
      <div part="base" class=${classifier}>
        ${this.label ? b2`<slot name="label" part="label">${this.label}</slot>` : ""}

        <div
          part="content"
          class="grid__content"
          style="--rows: ${this.rows - 1 || 1}; --cols: ${this.cols || 1}; ${this.template ? this.template instanceof Object ? `--template-col: ${this.template.col}; --template-row: ${this.template.row}` : `--template-col: ${this.template}` : ""}">
          <slot></slot>
        </div>
      </div>
    `;
    }
  };
  Grid.styles = styles29;
  Grid.dependencies = [];
  Grid.slots = [];
  __decorate31([
    n5({ type: Number, reflect: true })
  ], Grid.prototype, "rows", void 0);
  __decorate31([
    n5({ type: Number, reflect: true })
  ], Grid.prototype, "cols", void 0);
  __decorate31([
    n5({ type: String })
  ], Grid.prototype, "gap", void 0);
  __decorate31([
    n5({ type: String })
  ], Grid.prototype, "label", void 0);
  __decorate31([
    n5({ type: String })
  ], Grid.prototype, "template", void 0);
  __decorate31([
    n5({ type: String })
  ], Grid.prototype, "justify", void 0);
  __decorate31([
    n5({ type: String })
  ], Grid.prototype, "align", void 0);
  __decorate31([
    n5({ type: Boolean })
  ], Grid.prototype, "form", void 0);
  __decorate31([
    n5({ type: Boolean, reflect: true })
  ], Grid.prototype, "fit", void 0);
  __decorate31([
    n5({ type: Boolean, reflect: true })
  ], Grid.prototype, "page", void 0);

  // dist/components/grid/index.js
  Grid.define("hmwc-grid", Grid);

  // dist/components/popup/popup.styles.js
  var styles30 = i`
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
`;

  // dist/components/popup/popup.types.js
  var PopupPresets = {
    info: {
      icon: "info-circle-fill",
      iconVariant: "primary",
      variant: "primary",
      fluid: true,
      size: "sm",
      confirmLabel: "OK",
      hideCancel: true,
      confirmation: true
    },
    success: {
      icon: "check-circle-fill",
      iconVariant: "success",
      variant: "success",
      fluid: true,
      size: "sm",
      confirmLabel: "OK",
      confirmVariant: "success",
      hideCancel: true,
      confirmation: true
    },
    warning: {
      icon: "exclamation-triangle-fill",
      iconVariant: "warning",
      variant: "warning",
      fluid: true,
      size: "sm",
      confirmLabel: "OK",
      confirmVariant: "warning",
      hideCancel: true,
      confirmation: true
    },
    error: {
      icon: "x-circle-fill",
      iconVariant: "danger",
      variant: "danger",
      fluid: true,
      size: "sm",
      confirmLabel: "OK",
      confirmVariant: "danger",
      hideCancel: true,
      confirmation: true
    },
    confirm: {
      icon: "question-circle-fill",
      iconVariant: "primary",
      variant: "primary",
      fluid: true,
      size: "sm",
      confirmLabel: "Confirm",
      cancelLabel: "Cancel",
      confirmVariant: "primary",
      confirmation: true
    },
    delete: {
      icon: "exclamation-triangle-fill",
      iconVariant: "danger",
      variant: "danger",
      fluid: true,
      size: "sm",
      confirmLabel: "Delete",
      cancelLabel: "Cancel",
      confirmVariant: "danger",
      confirmation: true
    },
    retry: {
      icon: "x-circle-fill",
      variant: "danger",
      fluid: true,
      size: "sm",
      confirmLabel: "Retry",
      cancelLabel: "Cancel",
      confirmVariant: "danger",
      confirmation: true
    }
  };

  // dist/components/popup/popup.component.js
  var __decorate32 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Popup = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.variant = "default";
      this.confirmLabel = "Confirm";
      this.cancelLabel = "Cancel";
      this.confirmVariant = "primary";
      this.dismissible = true;
      this.overlayDismiss = true;
      this.escapeDismiss = true;
      this.overlay = true;
      this._keydownHandler = this._handleKeyDown.bind(this);
      this._autoDestroy = false;
    }
    // ── Lifecycle ────────────────────────────────────────────
    connectedCallback() {
      super.connectedCallback();
      if (this.route)
        this._enableRouting();
      if (!this.id && this.title) {
        this.id = this.title.toLowerCase().replace(/\s+/g, "-");
      }
    }
    firstUpdated() {
      this._popup.hidden = !this.active;
      if (this.active) {
        const overlay = this._popup.querySelector(".popup__overlay");
        if (overlay)
          overlay.style.setProperty("opacity", "1");
        this._panel.style.setProperty("opacity", "1");
        this._panel.style.setProperty("transform", this.drawer ? "translateX(0)" : "translateY(0) scale(1)");
        this._addListeners();
        this.controllers.scroll.lockBodyScrolling(this);
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this._removeListeners();
      this.controllers.scroll.unlockBodyScrolling(this);
    }
    // ── Watch ────────────────────────────────────────────────
    handleOpenChange() {
      const overlay = this._popup.querySelector(".popup__overlay");
      if (this.active) {
        this._popup.hidden = false;
        this._panel.focus();
        requestAnimationFrame(() => {
          if (overlay)
            overlay.style.setProperty("opacity", "1");
          this._panel.style.setProperty("opacity", "1");
          this._panel.style.setProperty("transform", this.drawer ? "translateX(0)" : "translateY(0) scale(1)");
        });
        this._addListeners();
        this.controllers.scroll.lockBodyScrolling(this);
        this.emit("hmwc-show");
      } else {
        requestAnimationFrame(() => {
          if (overlay)
            overlay.style.setProperty("opacity", "0");
          this._panel.style.setProperty("opacity", this.drawer ? "1" : "0");
          this._panel.style.setProperty("transform", this.drawer ? "translateX(100%)" : "translateY(8px) scale(0.96)");
        });
        setTimeout(() => {
          if (!this.active) {
            this._popup.hidden = true;
            if (this._autoDestroy)
              this.remove();
          }
        }, 350);
        this._removeListeners();
        this.controllers.scroll.unlockBodyScrolling(this);
        this.emit("hmwc-hide");
      }
    }
    // ── Public Methods ───────────────────────────────────────
    /** Opens the popup. */
    show() {
      if (this.active)
        return;
      this._syncRoute(true);
      this.active = true;
    }
    /** Closes the popup. Resolves the result promise with `false`. */
    hide() {
      if (!this.active)
        return;
      this._syncRoute(false);
      this.active = false;
      this._resultResolver?.(false);
      this._resultResolver = void 0;
    }
    /** Confirms and closes the popup. Resolves the result promise with `true`. */
    async confirm() {
      const event = this.emit("hmwc-submit", { cancelable: true });
      if (event.defaultPrevented)
        return;
      this._resultResolver?.(true);
      this._resultResolver = void 0;
      this.hide();
    }
    /**
     * Returns a promise that resolves when the popup is closed.
     * Resolves `true` if confirmed, `false` if cancelled/dismissed.
     */
    getResult() {
      return new Promise((resolve) => {
        this._resultResolver = resolve;
      });
    }
    // ── Private Methods ──────────────────────────────────────
    _addListeners() {
      document.addEventListener("keydown", this._keydownHandler);
    }
    _removeListeners() {
      document.removeEventListener("keydown", this._keydownHandler);
    }
    _handleKeyDown(event) {
      if (event.key === "Escape" && this.active) {
        event.stopPropagation();
        if (this.escapeDismiss)
          this.hide();
      }
    }
    _handleOverlayClick() {
      if (this.overlayDismiss)
        this.hide();
    }
    _handleCancel() {
      this.emit("hmwc-cancel");
      this.hide();
    }
    _syncRoute(opening) {
      if (!this.route)
        return;
      let path = window.location.pathname;
      if (window.location.href.includes("?")) {
        path += `?${window.location.href.split("?")[1].split("#")[0]}`;
      }
      window.history.replaceState(null, "", opening ? `${path}#${this.route}` : path);
    }
    _enableRouting() {
      window.addEventListener("popstate", () => {
        if (window.location.hash === `#${this.route}`) {
          this.show();
        } else {
          this.hide();
        }
      });
    }
    // ── Render Helpers ───────────────────────────────────────
    _renderHeader() {
      const hasHeader = this.title || this.controllers.slot.test("header") || this.controllers.slot.test("title");
      if (!hasHeader)
        return A;
      return b2`
      <slot name="header" part="header" class="popup__header">
        <div class="popup__header-content">
          ${this.icon || this.controllers.slot.test("icon") ? b2`
                <slot name="icon" part="icon" class="popup__icon ${this.iconVariant ? `icon-${this.iconVariant}` : ""}">
                  <hmwc-icon src=${o6(this.icon)}></hmwc-icon>
                </slot>
              ` : A}
          <slot name="title" part="title" class="popup__title"> ${this.title} </slot>
        </div>
        <div part="controls" class="popup__controls">
          <slot name="controls"></slot>
          ${this.dismissible ? b2`<hmwc-button sm basic icon="x-lg" @hmwc-click=${() => this.hide()}></hmwc-button>` : A}
        </div>
      </slot>
    `;
    }
    _renderFooter() {
      const hasFooterSlot = this.controllers.slot.test("footer");
      const showFooter = hasFooterSlot || this.confirmation;
      if (!showFooter)
        return A;
      return b2`
      <div part="footer" class="popup__footer">
        <slot name="footer" class="popup__footer-actions">
          ${this.confirmation ? b2`
                ${!this.hideCancel ? b2`<hmwc-button sm neutral label=${this.cancelLabel} @hmwc-click=${() => this._handleCancel()}></hmwc-button>` : A}
                <hmwc-button
                  sm
                  ?primary=${this.confirmVariant === "primary"}
                  ?success=${this.confirmVariant === "success"}
                  ?warning=${this.confirmVariant === "warning"}
                  ?danger=${this.confirmVariant === "danger"}
                  ?neutral=${this.confirmVariant === "neutral"}
                  label=${this.confirmLabel}
                  @hmwc-click=${() => this.confirm()}></hmwc-button>
              ` : A}
        </slot>
      </div>
    `;
    }
    // ── Render ───────────────────────────────────────────────
    render() {
      const classes = e7({
        popup: true,
        open: !!this.active,
        drawer: !!this.drawer,
        confirmation: !!this.confirmation,
        fluid: !!this.fluid,
        sm: !!this.sm,
        md: !!this.md || !this.sm && !this.lg && !this.xl && !this.full,
        lg: !!this.lg,
        xl: !!this.xl,
        full: !!this.full,
        [`variant-${this.variant}`]: this.variant !== "default",
        header: !!this.title || this.controllers.slot.test("header") || this.controllers.slot.test("title"),
        footer: !!this.confirmation || this.controllers.slot.test("footer")
      });
      return b2`
      <div part="base" class=${classes}>
        ${this.overlay ? b2`<div part="overlay" class="popup__overlay" @click=${() => this._handleOverlayClick()}></div>` : A}
        <div
          part="panel"
          class="popup__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.active ? "false" : "true"}
          aria-label=${o6(this.title || void 0)}
          aria-labelledby=${o6(this.title ? "title" : void 0)}
          tabindex="-1">
          ${this._renderHeader()}

          <slot part="content" class="popup__content" tabindex="-1"> ${this.message} </slot>

          ${this._renderFooter()}
        </div>
      </div>
    `;
    }
  };
  Popup.styles = styles30;
  Popup.dependencies = [Button, Icon];
  Popup.slots = ["title", "icon", "controls", "header", "footer"];
  __decorate32([
    n5({ type: Boolean, reflect: true })
  ], Popup.prototype, "active", void 0);
  __decorate32([
    n5({ type: String })
  ], Popup.prototype, "title", void 0);
  __decorate32([
    n5({ type: String })
  ], Popup.prototype, "message", void 0);
  __decorate32([
    n5({ type: String })
  ], Popup.prototype, "icon", void 0);
  __decorate32([
    n5({ type: String, attribute: "icon-variant" })
  ], Popup.prototype, "iconVariant", void 0);
  __decorate32([
    n5({ type: Boolean, reflect: true })
  ], Popup.prototype, "sm", void 0);
  __decorate32([
    n5({ type: Boolean, reflect: true })
  ], Popup.prototype, "md", void 0);
  __decorate32([
    n5({ type: Boolean, reflect: true })
  ], Popup.prototype, "lg", void 0);
  __decorate32([
    n5({ type: Boolean, reflect: true })
  ], Popup.prototype, "xl", void 0);
  __decorate32([
    n5({ type: Boolean, reflect: true })
  ], Popup.prototype, "full", void 0);
  __decorate32([
    n5({ type: String, reflect: true })
  ], Popup.prototype, "variant", void 0);
  __decorate32([
    n5({ type: Boolean, reflect: true })
  ], Popup.prototype, "drawer", void 0);
  __decorate32([
    n5({ type: Boolean, reflect: true })
  ], Popup.prototype, "confirmation", void 0);
  __decorate32([
    n5({ type: Boolean, attribute: "hide-cancel" })
  ], Popup.prototype, "hideCancel", void 0);
  __decorate32([
    n5({ type: String, attribute: "confirm-label" })
  ], Popup.prototype, "confirmLabel", void 0);
  __decorate32([
    n5({ type: String, attribute: "cancel-label" })
  ], Popup.prototype, "cancelLabel", void 0);
  __decorate32([
    n5({ type: String, attribute: "confirm-variant" })
  ], Popup.prototype, "confirmVariant", void 0);
  __decorate32([
    n5({ type: Boolean, reflect: true })
  ], Popup.prototype, "fluid", void 0);
  __decorate32([
    n5({ type: Boolean, reflect: true })
  ], Popup.prototype, "dismissible", void 0);
  __decorate32([
    n5({ type: Boolean, attribute: "overlay-dismiss" })
  ], Popup.prototype, "overlayDismiss", void 0);
  __decorate32([
    n5({ type: Boolean, attribute: "escape-dismiss" })
  ], Popup.prototype, "escapeDismiss", void 0);
  __decorate32([
    n5({ type: Boolean, reflect: true })
  ], Popup.prototype, "overlay", void 0);
  __decorate32([
    n5({ type: String })
  ], Popup.prototype, "route", void 0);
  __decorate32([
    e5(".popup")
  ], Popup.prototype, "_popup", void 0);
  __decorate32([
    e5(".popup__panel")
  ], Popup.prototype, "_panel", void 0);
  __decorate32([
    watch("active", { waitUntilFirstUpdate: true })
  ], Popup.prototype, "handleOpenChange", null);
  function HMWCPopup(options = {}) {
    const explicit = Object.fromEntries(Object.entries(options).filter(([, v2]) => v2 !== void 0));
    const resolved = options.preset ? { ...PopupPresets[options.preset], ...explicit } : options;
    const popup = document.createElement("hmwc-popup");
    if (options.content) {
      if (typeof options.content === "string") {
        popup.innerHTML = options.content;
      } else {
        popup.appendChild(options.content);
      }
    }
    if (options.buttons?.length) {
      const footerSlot = document.createElement("div");
      footerSlot.slot = "footer";
      for (const btn of options.buttons) {
        const el = document.createElement("hmwc-button");
        el.sm = true;
        el.label = btn.label;
        if (btn.variant)
          el[btn.variant] = true;
        if (btn.icon)
          el.icon = btn.icon;
        if (btn.basic)
          el.basic = true;
        if (btn.action) {
          el.addEventListener("hmwc-click", () => btn.action(popup));
        }
        footerSlot.appendChild(el);
      }
      popup.appendChild(footerSlot);
    }
    if (options.className)
      popup.className = options.className;
    if (options.style) {
      if (typeof options.style === "string") {
        popup.setAttribute("style", options.style);
      } else {
        Object.assign(popup.style, options.style);
      }
    }
    if (options.onShow)
      popup.addEventListener("hmwc-show", () => options.onShow(popup));
    if (options.onHide)
      popup.addEventListener("hmwc-hide", () => options.onHide(popup));
    if (options.onCancel)
      popup.addEventListener("hmwc-cancel", () => options.onCancel(popup));
    if (options.onSubmit) {
      popup.addEventListener("hmwc-submit", async (e8) => {
        const keep = await options.onSubmit(popup);
        if (keep === false)
          e8.preventDefault();
      });
    }
    document.body.appendChild(popup);
    if (resolved.title)
      popup.title = resolved.title;
    if (resolved.message)
      popup.message = resolved.message;
    if (resolved.icon)
      popup.icon = resolved.icon;
    if (resolved.iconVariant)
      popup.iconVariant = resolved.iconVariant;
    if (resolved.size)
      popup[resolved.size] = true;
    else
      popup.sm = true;
    if (resolved.variant)
      popup.variant = resolved.variant;
    if (resolved.drawer)
      popup.drawer = true;
    if (resolved.confirmation)
      popup.confirmation = true;
    if (resolved.hideCancel)
      popup.hideCancel = true;
    if (resolved.confirmLabel)
      popup.confirmLabel = resolved.confirmLabel;
    if (resolved.cancelLabel)
      popup.cancelLabel = resolved.cancelLabel;
    if (resolved.confirmVariant)
      popup.confirmVariant = resolved.confirmVariant;
    if (resolved.fluid)
      popup.fluid = true;
    if (resolved.dismissible === false)
      popup.dismissible = false;
    if (resolved.overlayDismiss === false)
      popup.overlayDismiss = false;
    if (resolved.escapeDismiss === false)
      popup.escapeDismiss = false;
    if (resolved.overlay === false)
      popup.overlay = false;
    popup._autoDestroy = options.autoDestroy !== false;
    const resultPromise = popup.getResult();
    requestAnimationFrame(() => popup.show());
    return {
      popup,
      result: resultPromise,
      close: () => popup.hide()
    };
  }

  // dist/components/popup/index.js
  Popup.define("hmwc-popup", Popup);

  // dist/components/header/header.styles.js
  var styles31 = i`
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
`;

  // dist/components/header/header.component.js
  var __decorate33 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Header = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.userUpdate = () => this.updateProxyUser();
      this.logoUpdate = () => this._logo = this.getLogoVariant();
    }
    return() {
      this.emit("hmwc-navigate", { detail: { route: "/" } });
    }
    handleSettingsClick() {
      window.location.hash = "#settings";
    }
    handleMenuSelection(event) {
      if (event.detail.value === "account") {
        event.stopImmediatePropagation();
        window.location.hash = "#settings";
      } else if (event.detail.value === "logout") {
        this.emit("hmwc-navigate", { detail: { route: "/logout" } });
      }
    }
    updateProxyUser() {
      this.proxyUser = this.user?.proxyHost?.firstName ? this.user : {};
    }
    observeTheme() {
      new MutationObserver((m3) => {
        m3.forEach((mu) => {
          if (mu.type !== "attributes" && mu.attributeName !== "class")
            return;
          this._logo = this.getLogoVariant();
        });
      }).observe(document.documentElement, { attributes: true });
    }
    getLogoVariant() {
      const theme = document.documentElement.className.includes("theme-dark") ? "dark" : "light";
      if (this.logo instanceof String) {
        return this.logo;
      } else {
        if (!(this.logo instanceof Object) || !this.logo[theme]) {
          return "";
        }
        return this.logo[theme];
      }
    }
    navigateFAQ() {
      this.emit("hmwc-navigate", { detail: { route: "/help-support/faq" } });
    }
    /**
     * Sets the default logo for HMWC apps to avoid having
     * to manually provide these in the application code.
     *
     * When a logo is provided, this will not override it.
     */
    setDefaultHMWCLogo() {
      if (this.logo)
        return;
      this.logo = {
        light: "/src/assets/images/hmwc-dark.png",
        dark: "/src/assets/images/hmwc-light.png"
      };
    }
    connectedCallback() {
      super.connectedCallback();
      this.setDefaultHMWCLogo();
      this.observeTheme();
    }
    render() {
      const userItems = [
        { value: "account", label: "My Account" },
        { value: "logout", label: "Logout" }
      ];
      const name = this.user ? (this.user.proxyHost?.firstName || this.user.firstName) + " " + (this.user.proxyHost?.lastName || this.user.lastName) : "";
      return b2`
      <div part="base" class="header">
        <slot></slot>

        ${this.proxyUser?.firstName ? b2`
              <div part="proxy" class="header__proxy">
                <hmwc-icon src="exclamation-circle-fill-circle"></hmwc-icon>
                Currently proxying as:
                <span class="header__proxy-name">${this.proxyUser.firstName} ${this.proxyUser.lastName}</span>
              </div>
            ` : ""}

        <div part="bar" class="header__bar">
          <div part="brand" class="header__brand" @click=${this.return}>
            <slot name="logo" class="header__logo"> ${this.logo ? b2` <img part="logo" src=${this._logo} alt="Logo" /> ` : ""} </slot>
            <slot name="title" part="title" class="header__title"> ${this.title} </slot>
            <slot name="badge" class="header__badge"> ${this.beta ? b2`<hmwc-badge part="badge" sm warning label="BETA"></hmwc-badge>` : ""} </slot>
          </div>

          <div class="header__user">
            <hmwc-attachment distance="8" placement="bottom" .items=${userItems} @hmwc-select=${this.handleMenuSelection}>
              <div part="user" class="header__avatar" slot="anchor">
                <hmwc-avatar small status="active" name=${name}></hmwc-avatar>
                <span part="user-name" class="header__user-name">${name}</span>
                <hmwc-icon flex src="caret-down-fill"></hmwc-icon>
              </div>
            </hmwc-attachment>
          </div>

          <div part="controls" class="header__controls">
            <hmwc-tooltip arrow label="Search" placement="bottom-end" distance="7" delay="400">
              <hmwc-button part="control" class="header__control" sm basic icon="search"></hmwc-button>
            </hmwc-tooltip>

            <hmwc-tooltip arrow label="Secure Messaging" placement="bottom-end" distance="7" delay="400">
              <hmwc-button part="control" class="header__control" sm basic disabled icon="chat">
                <hmwc-badge small primary pill slot="badge">1</hmwc-badge>
              </hmwc-button>
            </hmwc-tooltip>

            <hmwc-tooltip arrow label="Help / FAQ" placement="bottom-end" distance="7" delay="400">
              <hmwc-button part="control" class="header__control" sm basic icon="question-circle" @hmwc-click=${this.navigateFAQ}></hmwc-button>
            </hmwc-tooltip>

            <hmwc-tooltip arrow label="Settings" placement="bottom-end" distance="7" delay="400">
              <hmwc-button part="control" class="header__control" sm basic icon="gear" @hmwc-click=${this.handleSettingsClick}></hmwc-button>
            </hmwc-tooltip>
          </div>
        </div>
      </div>
    `;
    }
  };
  Header.styles = styles31;
  Header.dependencies = [Attachment, Avatar, Badge, Button, Input, Popup, Tooltip];
  __decorate33([
    r5()
  ], Header.prototype, "_logo", void 0);
  __decorate33([
    r5()
  ], Header.prototype, "proxyUser", void 0);
  __decorate33([
    n5({ type: String, reflect: true })
  ], Header.prototype, "title", void 0);
  __decorate33([
    n5()
  ], Header.prototype, "logo", void 0);
  __decorate33([
    n5({ type: Object })
  ], Header.prototype, "user", void 0);
  __decorate33([
    n5({ type: Boolean, reflect: true })
  ], Header.prototype, "beta", void 0);
  __decorate33([
    e5("#search")
  ], Header.prototype, "popup", void 0);
  __decorate33([
    e5("hmwc-menu")
  ], Header.prototype, "menu", void 0);
  __decorate33([
    watch("user")
  ], Header.prototype, "userUpdate", void 0);
  __decorate33([
    watch("logo")
  ], Header.prototype, "logoUpdate", void 0);

  // dist/components/header/index.js
  Header.define("hmwc-header", Header);

  // dist/components/image/image.styles.js
  var styles32 = i`
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
`;

  // dist/components/image/image.component.js
  var __decorate34 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Image = class extends HMWCComponent {
    render() {
      const classifier = e7({
        image: true,
        xs: !!this.xs,
        sm: !!this.sm,
        md: !!this.md,
        lg: !!this.lg,
        xl: !!this.xl
      });
      return b2`
      <div part="base" class=${classifier}>
        <slot>
          <img src=${o6(this.src)} alt=${o6(this.alt)} />
        </slot>
      </div>
    `;
    }
  };
  Image.styles = styles32;
  __decorate34([
    n5({ type: String })
  ], Image.prototype, "src", void 0);
  __decorate34([
    n5({ type: String })
  ], Image.prototype, "alt", void 0);
  __decorate34([
    n5({ type: Boolean })
  ], Image.prototype, "xs", void 0);
  __decorate34([
    n5({ type: Boolean })
  ], Image.prototype, "sm", void 0);
  __decorate34([
    n5({ type: Boolean })
  ], Image.prototype, "md", void 0);
  __decorate34([
    n5({ type: Boolean })
  ], Image.prototype, "lg", void 0);
  __decorate34([
    n5({ type: Boolean })
  ], Image.prototype, "xl", void 0);

  // dist/components/image/index.js
  Image.define("hmwc-image", Image);

  // dist/components/list/list.styles.js
  var styles33 = i`
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
`;

  // dist/components/list/list.component.js
  var __decorate35 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var List = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this._items = [];
      this.items = [];
    }
    /**
     * Get the list items from the DOM.
     *
     * @returns The list items.
     */
    getItems() {
      if (!this.items.length) {
        return this.controllers.slot.get();
      } else {
        return this.items;
      }
    }
    connectedCallback() {
      super.connectedCallback();
      if (!this.items.length) {
        this._items = this.getItems();
      }
    }
    render() {
      return b2`
      <div part="base" class="list">
        <ul part="list" class="list__list">
          <slot> ${this._items.map((item) => b2` <li part="item" class="list__item">${item}</li> `)} </slot>
        </ul>
      </div>
    `;
    }
  };
  List.styles = styles33;
  List.dependencies = [];
  List.slots = [];
  __decorate35([
    r5()
  ], List.prototype, "_items", void 0);
  __decorate35([
    n5({ type: String })
  ], List.prototype, "items", void 0);

  // dist/components/list/index.js
  List.define("hmwc-list", List);

  // dist/components/navbar/navbar.styles.js
  var styles34 = i`
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
`;

  // dist/components/navbar/navbar.component.js
  var __decorate36 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Navbar = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.groups = [];
    }
    open() {
      this.active = true;
    }
    close() {
      this.active = false;
    }
    toggle() {
      this.active = !this.active;
    }
    openGroup() {
      this.active = true;
    }
    autoClose() {
      document.querySelector("#root")?.addEventListener("click", (e8) => {
        if (!["HMWC-NAVBAR", "HMWC-HEADER"].includes(e8.target.tagName)) {
          if (document.body.classList.contains("hmwc-scroll-lock"))
            return;
          this.active = false;
        }
      });
    }
    enableKeyboardInteraction() {
      document.addEventListener("keypress", (e8) => {
        if (document.activeElement?.tagName === "HMWC-INPUT")
          return;
        e8.preventDefault();
        if (e8.key === "s")
          this.active = !this.active;
      });
    }
    handleOpenChange() {
      if (this.active)
        return;
      this.group?.hideAll();
    }
    handleRouteChange() {
      this.active = false;
    }
    handleRoutesChange() {
      if (!this.routes)
        return;
      const parsedRoutes = [];
      this.routes.forEach((route) => {
        const subroutes = this.routes?.filter((subroute) => {
          if (!subroute.path.startsWith(route.path))
            return false;
          if (subroute.path === route.path)
            return false;
          if (subroute.path.split("/").length - 1 !== route.path.split("/").length)
            return false;
          return true;
        });
        if (route.path.split("/").length < 3) {
          if (route.path !== "/")
            route.routes = subroutes;
          parsedRoutes.push(route);
        }
      });
      this.groups = parsedRoutes;
    }
    connectedCallback() {
      super.connectedCallback();
      this.autoClose();
      this.enableKeyboardInteraction();
    }
    render() {
      const classifier = e7({ navbar: true, open: !!this.active });
      return b2`
      <div part="base" class=${classifier}>
        <hmwc-accordion-group class="navbar__group" part="group">
          ${this.groups?.map((group, i7) => b2` ${i7 === 1 ? b2`
                      ${this.active ? b2` <span class="navbar__section">Applications</span> ` : b2`<hmwc-divider spacing="md"></hmwc-divider>`}
                    ` : ""}
                <hmwc-accordion
                  basic
                  class=${`navbar__item ${group.path === this.route?.path || group.path !== "/" && this.route?.path.includes(group.path) ? "active" : ""}`}
                  label=${this.active ? group.title : ""}
                  icon=${group.icon || ""}
                  @click=${(e8) => !group.routes?.length && (e8.target.hide(), this.emit("hmwc-navigate", { detail: { route: group.path } }))}
                  @hmwc-expand=${() => group.routes?.length && (this.active = true)}>
                  <span slot="trigger" style="display: flex;">
                    ${group.routes?.length ? b2`<hmwc-button
                          sm
                          basic
                          icon="chevron-right"
                          style="--button-padding: 0 var(--hmwc-spacing-2x-small); --button-border:transparent;"></hmwc-button>` : ""}
                  </span>
                  ${group.routes?.length ? b2` <ul class="navbar__pages">
                        ${group.routes.map((_item) => b2`
                            <li
                              class=${`navbar__page ${_item.path === this.route?.path ? "active" : ""}`}
                              @click=${() => (this.group?.hideAll(), this.emit("hmwc-navigate", { detail: { route: _item.path } }))}>
                              ${_item.title}
                            </li>
                          `)}
                      </ul>` : ""}
                </hmwc-accordion>`)}
        </hmwc-accordion-group>
        <div class="navbar__toggle">
          <hmwc-button circle sm icon=${`chevron-${this.active ? "left" : "right"}`} @hmwc-click=${this.toggle}></hmwc-button>
        </div>
      </div>
    `;
    }
  };
  Navbar.styles = styles34;
  Navbar.dependencies = [AccordionGroup, Accordion, Divider];
  __decorate36([
    r5()
  ], Navbar.prototype, "groups", void 0);
  __decorate36([
    r5()
  ], Navbar.prototype, "route", void 0);
  __decorate36([
    n5({ type: Array })
  ], Navbar.prototype, "routes", void 0);
  __decorate36([
    n5({ type: Boolean, reflect: true })
  ], Navbar.prototype, "active", void 0);
  __decorate36([
    e5(".navbar__group")
  ], Navbar.prototype, "group", void 0);
  __decorate36([
    watch("open")
  ], Navbar.prototype, "handleOpenChange", null);
  __decorate36([
    watch("route", { waitUntilFirstUpdate: true })
  ], Navbar.prototype, "handleRouteChange", null);
  __decorate36([
    watch("routes")
  ], Navbar.prototype, "handleRoutesChange", null);

  // dist/components/navbar/index.js
  Navbar.define("hmwc-navbar", Navbar);

  // dist/components/tag/tag.styles.js
  var styles35 = i`
  :host {
    display: block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;

    & .tag__label {
      display: flex;
      align-items: center;
      gap: var(--hmwc-spacing-x-small);
      text-overflow: ellipsis;
    }

    & .tag__remove {
      display: none;
      margin-inline-start: var(--hmwc-spacing-x-small);
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

    &.small {
      font-size: var(--hmwc-font-size-small);
      height: calc(var(--hmwc-input-height-small) * 0.8);
      border-radius: var(--hmwc-input-border-radius-small);
      padding: 0 var(--hmwc-spacing-x-small);
    }

    &.medium {
      font-size: var(--hmwc-font-size-medium);
      height: calc(var(--hmwc-input-height-medium) * 0.7);
      line-height: calc(var(--hmwc-input-height-medium) - var(--hmwc-input-border-width) * 2);
      border-radius: var(--hmwc-input-border-radius-medium);
      padding: 0 var(--hmwc-spacing-small);
    }

    &.large {
      font-size: var(--hmwc-font-size-large);
      height: calc(var(--hmwc-input-height-large) * 0.8);
      line-height: calc(var(--hmwc-input-height-large) - var(--hmwc-input-border-width) * 2);
      border-radius: var(--hmwc-input-border-radius-large);
      padding: 0 var(--hmwc-spacing-medium);
    }

    &.pill {
      border-radius: var(--hmwc-border-radius-pill);
    }
  }
`;

  // dist/components/tag/tag.component.js
  var __decorate37 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Tag = class extends HMWCComponent {
    handleClick() {
      this.emit("click", {});
    }
    handleRemove() {
      this.emit("click", {
        detail: {
          tag: this.label
        }
      });
    }
    connectedCallback() {
      super.connectedCallback();
      if (!this.small && !this.medium && !this.large) {
        this.medium = true;
      }
      if (!this.primary && !this.success && !this.neutral && !this.warning && !this.danger) {
        this.primary = true;
      }
    }
    render() {
      const classifier = e7({
        tag: true,
        icon: !!this.icon,
        small: !!this.small,
        medium: !!this.medium,
        large: !!this.large,
        primary: !!this.primary,
        success: !!this.success,
        neutral: !!this.neutral,
        warning: !!this.warning,
        danger: !!this.danger,
        pill: !!this.pill,
        removable: !!this.removable
      });
      return b2`
      <div part="base" class=${classifier} role="status" @click=${this.handleClick}>
        <slot class="tag__label" part="label"> ${this.icon && b2` <hmwc-icon src=${this.icon}></hmwc-icon> `} ${this.label} </slot>
        <div part="remove" class="tag__remove">
          ${this.removable && b2` <hmwc-button sm basic icon="x" @hmwc-click=${this.handleRemove}></hmwc-button> `}
        </div>
      </div>
    `;
    }
  };
  Tag.styles = styles35;
  Tag.dependencies = [Icon];
  __decorate37([
    n5({ type: String })
  ], Tag.prototype, "label", void 0);
  __decorate37([
    n5({ type: String })
  ], Tag.prototype, "icon", void 0);
  __decorate37([
    n5({ type: Boolean, reflect: true })
  ], Tag.prototype, "small", void 0);
  __decorate37([
    n5({ type: Boolean, reflect: true })
  ], Tag.prototype, "medium", void 0);
  __decorate37([
    n5({ type: Boolean, reflect: true })
  ], Tag.prototype, "large", void 0);
  __decorate37([
    n5({ type: Boolean, reflect: true })
  ], Tag.prototype, "primary", void 0);
  __decorate37([
    n5({ type: Boolean, reflect: true })
  ], Tag.prototype, "success", void 0);
  __decorate37([
    n5({ type: Boolean, reflect: true })
  ], Tag.prototype, "neutral", void 0);
  __decorate37([
    n5({ type: Boolean, reflect: true })
  ], Tag.prototype, "warning", void 0);
  __decorate37([
    n5({ type: Boolean, reflect: true })
  ], Tag.prototype, "danger", void 0);
  __decorate37([
    n5({ type: Boolean, reflect: true })
  ], Tag.prototype, "pill", void 0);
  __decorate37([
    n5({ type: Boolean, reflect: true })
  ], Tag.prototype, "removable", void 0);

  // dist/components/tag/index.js
  Tag.define("hmwc-tag", Tag);

  // dist/components/page/page.styles.js
  var styles36 = i`
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
`;

  // dist/components/page/page.component.js
  var __decorate38 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Page = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.overrides = [];
      this.breadcrumbs = true;
    }
    /**
     * Check for any user-defined breadcrumbs and assign them
     *  to the collection of overrides
     */
    updateOverrides() {
      const content = Array.from(this.children);
      this.overrides = content.filter((el) => el instanceof Breadcrumb);
    }
    connectedCallback() {
      super.connectedCallback();
      this.updateOverrides();
    }
    render() {
      const classifier = e7({ page: true, title: !!this.title || this.controllers.slot.test("title") });
      return b2`
      <div part="base" class=${classifier}>
        ${this.route ? b2`<hmwc-breadcrumbs
              part="breadcrumbs"
              class="page__breadcrumbs"
              .route=${this.route}
              .routes=${this.routes}
              .overrides=${this.overrides}
              @hmwc-click=${(e8) => this.emit("click", { detail: { value: e8.detail.value } })}>
            </hmwc-breadcrumbs>` : ""}

        <div part="title" class="page__title">
          <slot name="title">${this.title}</slot>

          <slot name="group">
            <div>${this.group && b2`<hmwc-tag part="group" small label=${this.group} icon=${o6(this.icon)}></hmwc-tag>`}</div>
          </slot>
          <div part="controls" class="page__controls">
            <slot name="controls"></slot>
          </div>
        </div>

        <div part="content" class="page__content">
          <slot></slot>
        </div>
      </div>
    `;
    }
  };
  Page.styles = styles36;
  Page.dependencies = [Icon, Button, Tag, Breadcrumb];
  Page.slots = ["breadcrumb"];
  __decorate38([
    r5()
  ], Page.prototype, "overrides", void 0);
  __decorate38([
    n5({ type: String })
  ], Page.prototype, "title", void 0);
  __decorate38([
    n5({ type: String })
  ], Page.prototype, "group", void 0);
  __decorate38([
    n5({ type: String })
  ], Page.prototype, "icon", void 0);
  __decorate38([
    n5({ type: Boolean, reflect: true })
  ], Page.prototype, "breadcrumbs", void 0);
  __decorate38([
    n5({ type: Object })
  ], Page.prototype, "route", void 0);
  __decorate38([
    n5({ type: Array })
  ], Page.prototype, "routes", void 0);

  // dist/components/page/index.js
  Page.define("hmwc-page", Page);

  // dist/components/progress/progress.styles.js
  var styles37 = i`
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
`;

  // dist/components/progress/progress.component.js
  var __decorate39 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Progress = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.current = 0;
      this.value = 0;
    }
    handleValueChange() {
      this.current = this.value;
    }
    connectedCallback() {
      super.connectedCallback();
      if (!this.bar && !this.ring) {
        this.bar = true;
      }
      if (!this.small && !this.medium && !this.large) {
        this.small = true;
      }
      this.current = this.value;
    }
    render() {
      const classifier = e7({
        progress: true,
        bar: !!this.bar,
        ring: !!this.ring,
        primary: !!this.primary,
        success: !!this.success,
        neutral: !!this.neutral,
        warning: !!this.warning,
        danger: !!this.danger,
        small: !!this.small,
        medium: !!this.medium,
        large: !!this.large,
        xl: !!this.xl,
        indeterminate: !!this.indeterminate,
        status: !!this.status
      });
      return b2`
      <div
        part="base"
        class=${classifier}
        role="progressbar"
        title=${o6(this.title)}
        aria-label=${this.label ? this.label : "progress"}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.current}
        style="--percentage: ${this.current / 100}">
        ${this.bar ? b2`
              <div part="indicator" class="progress__indicator" style="width: ${this.current}%">
                ${!this.indeterminate ? b2` <slot part="label" class="progress__label"> ${this.status ? `${this.current}%` : ""} </slot> ` : ""}
              </div>
            ` : this.ring ? b2`
              <svg class="progress__ring">
                <circle class="progress__track"></circle>
                <circle class="progress__indicator" style="stroke-dashoffset: ${this.offset}"></circle>
              </svg>

              <slot id="label" part="label" class="progress__label"> ${this.status ? `${this.current}%` : ""} </slot>
            ` : ""}
      </div>
    `;
    }
  };
  Progress.styles = styles37;
  __decorate39([
    r5()
  ], Progress.prototype, "offset", void 0);
  __decorate39([
    r5()
  ], Progress.prototype, "current", void 0);
  __decorate39([
    n5({ type: Boolean, reflect: true })
  ], Progress.prototype, "bar", void 0);
  __decorate39([
    n5({ type: Boolean, reflect: true })
  ], Progress.prototype, "ring", void 0);
  __decorate39([
    n5({ type: Boolean, reflect: true })
  ], Progress.prototype, "primary", void 0);
  __decorate39([
    n5({ type: Boolean, reflect: true })
  ], Progress.prototype, "success", void 0);
  __decorate39([
    n5({ type: Boolean, reflect: true })
  ], Progress.prototype, "neutral", void 0);
  __decorate39([
    n5({ type: Boolean, reflect: true })
  ], Progress.prototype, "warning", void 0);
  __decorate39([
    n5({ type: Boolean, reflect: true })
  ], Progress.prototype, "danger", void 0);
  __decorate39([
    n5({ type: Boolean, reflect: true })
  ], Progress.prototype, "small", void 0);
  __decorate39([
    n5({ type: Boolean, reflect: true })
  ], Progress.prototype, "medium", void 0);
  __decorate39([
    n5({ type: Boolean, reflect: true })
  ], Progress.prototype, "xl", void 0);
  __decorate39([
    n5({ type: Boolean, reflect: true })
  ], Progress.prototype, "large", void 0);
  __decorate39([
    n5({ type: Number, reflect: true })
  ], Progress.prototype, "value", void 0);
  __decorate39([
    n5({ type: Boolean })
  ], Progress.prototype, "status", void 0);
  __decorate39([
    n5({ type: Boolean, reflect: true })
  ], Progress.prototype, "indeterminate", void 0);
  __decorate39([
    n5({ type: String })
  ], Progress.prototype, "label", void 0);
  __decorate39([
    watch("value")
  ], Progress.prototype, "handleValueChange", null);

  // dist/components/progress/index.js
  Progress.define("hmwc-progress", Progress);

  // dist/components/radio/radio.styles.js
  var styles38 = i`
  :host {
    display: block;
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
      margin-inline-start: 0.5em;
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
`;

  // dist/components/radio/radio.component.js
  var __decorate40 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Radio = class extends HMWCFormComponent {
    handleCheckedChange() {
      this.emit("hmwc-select", { detail: { value: this.checked } });
    }
    handleClick() {
      if (this.disabled)
        return;
      this.checked = true;
    }
    handleBlur() {
      this.emit("hmwc-blur");
    }
    handleFocus() {
      this.emit("hmwc-focus");
    }
    connectedCallback() {
      super.connectedCallback();
      if (!this.sm && !this.md && !this.lg) {
        this.md = true;
      }
    }
    render() {
      const classifier = e7({
        radio: true,
        checked: !!this.checked,
        sm: !!this.sm,
        md: !!this.md,
        lg: !!this.lg,
        disabled: !!this.disabled,
        img: !!this.img
      });
      return b2`
      <span
        part="base"
        class=${classifier}
        role="radio"
        tabindex=${this.checked ? "0" : "-1"}
        aria-checked="${o6(this.checked)}"
        aria-disabled="${o6(this.disabled)}"
        @click=${this.handleClick}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}>
        ${this.img ? b2`<div class="radio__image"><img src="${this.img}" class="radio__image" /></div>` : ""}
        <div class="radio__control">
          <span part="control" class="radio__radio">
            <slot name="icon" part="icon" class="radio__icon"> ${this.checked ? b2` <span class="radio__indicator"></span> ` : ""} </slot>
          </span>

          <slot part="label" class="radio__label"> ${this.label ? this.label : this.value} </slot>
        </div>
      </span>
    `;
    }
  };
  Radio.styles = styles38;
  Radio.dependencies = [Icon];
  __decorate40([
    n5({ type: Boolean, reflect: true })
  ], Radio.prototype, "checked", void 0);
  __decorate40([
    n5({ type: String, reflect: true })
  ], Radio.prototype, "img", void 0);
  __decorate40([
    watch("checked")
  ], Radio.prototype, "handleCheckedChange", null);

  // dist/components/radio/index.js
  Radio.define("hmwc-radio", Radio);

  // dist/components/radio-group/radio-group.styles.js
  var styles39 = i`
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

    &.required {
      .radiogroup__label::after {
        content: var(--sl-input-required-content);
        margin-inline-start: var(--sl-input-required-content-offset);
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
`;

  // dist/components/radio-group/radio-group.component.js
  var __decorate41 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var RadioGroup = class extends HMWCFormComponent {
    handleValueChange() {
      this.emit("hmwc-change", { detail: { value: this.value } });
      this.getRadios()?.forEach((radio) => {
        radio.checked = radio.value === this.value;
      });
    }
    getRadios() {
      if (this.items) {
        return this.shadowRoot?.querySelectorAll("hmwc-radio");
      } else {
        return this.controllers.slot.get();
      }
    }
    handleClick(event) {
      const target = event.target.closest("hmwc-radio");
      if (target.disabled)
        return;
      if (!target.value)
        return;
      this.value = target.value;
      this.emit("hmwc-input");
    }
    connectedCallback() {
      super.connectedCallback();
      if (!this.sm && !this.md && !this.lg) {
        this.md = true;
      }
      const radios = this.getRadios();
      if (radios?.length) {
        if (this.inline) {
          radios.forEach((radio) => radio.style.setProperty("width", "100%"));
        }
        if (this.sm) {
          radios.forEach((radio) => radio.sm = true);
        } else if (this.md) {
          radios.forEach((radio) => radio.md = true);
        } else if (this.lg) {
          radios.forEach((radio) => radio.lg = true);
        }
      }
    }
    render() {
      const label = this.label || this.controllers.slot.test("label");
      const help = this.help || this.controllers.slot.test("help");
      const classifier = e7({
        radiogroup: true,
        small: !!this.sm,
        medium: !!this.md,
        large: !!this.lg,
        required: !!this.required,
        row: !!this.inline
      });
      return b2`
      <div part="base" class=${classifier}>
        ${this.label ? b2` <label part="label" class="radiogroup__label" aria-hidden="${!label}">
              <slot name="label">${this.label}</slot>
            </label>` : ""}
        <fieldset
          part="control"
          class="radiogroup__control"
          role="radiogroup"
          aria-labelledby="label"
          aria-describedby="help"
          aria-errormessage="error-message">
          <slot @click=${this.handleClick}>
            ${this.items?.map((option) => b2`
                <hmwc-radio
                  value=${typeof option === "string" ? option : option.value}
                  label=${typeof option === "string" ? option : option.label}
                  ?disabled=${typeof option !== "string" && option.disabled}
                  ?checked=${(typeof option === "string" ? option : option.value) === l4(this.value)}
                  ?small=${this.sm}
                  ?medium=${this.md}
                  ?large=${this.lg}></hmwc-radio>
              `)}
          </slot>
          ${this.help ? b2` <div part="help" class="radiogroup__help" aria-hidden="${!help}">
                <slot name="help">${this.help}</slot>
              </div>` : ""}
        </fieldset>
      </div>
    `;
    }
  };
  RadioGroup.styles = styles39;
  RadioGroup.dependencies = [Radio];
  RadioGroup.slots = ["label", "help"];
  __decorate41([
    n5({ type: String })
  ], RadioGroup.prototype, "label", void 0);
  __decorate41([
    n5({ type: Array })
  ], RadioGroup.prototype, "items", void 0);
  __decorate41([
    n5({ type: String })
  ], RadioGroup.prototype, "help", void 0);
  __decorate41([
    n5({ type: Boolean, reflect: true })
  ], RadioGroup.prototype, "inline", void 0);
  __decorate41([
    watch("value")
  ], RadioGroup.prototype, "handleValueChange", null);

  // dist/components/radio-group/index.js
  RadioGroup.define("hmwc-radio-group", RadioGroup);

  // dist/components/row/row.styles.js
  var styles40 = i`
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
`;

  // dist/components/row/row.component.js
  var __decorate42 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Row = class extends HMWCContainerComponent {
    connectedCallback() {
      super.connectedCallback();
      if (!this.align) {
        this.align = "end";
      }
      if (this.wrap) {
        if (this.wrap === "auto")
          return;
        const children = this.controllers.slot.get();
        const amount = this.wrap === true ? children.length : this.wrap;
        const gutters = amount;
        const percent = 100 / parseInt(amount.toString());
        children.forEach((child) => {
          const width = `calc(${percent}% - calc(var(--row-gap) / ${gutters}))`;
          child.style.setProperty("max-width", width);
        });
      }
    }
    render() {
      const classifier = e7({
        row: true,
        wrap: !!this.wrap,
        min: !!this.min,
        max: !!this.max,
        outline: !!this.outline,
        fit: !!this.fit,
        label: !!this.label || this.controllers.slot.test("label"),
        scrollable: !!this.scrollable
      });
      return b2`
      <div part="base" class=${classifier}>
        <slot name="label" part="label" class="row__label">${this.label}</slot>
        <slot part="content" class="row__content"></slot>
      </div>
    `;
    }
  };
  Row.styles = styles40;
  __decorate42([
    n5({ type: Boolean, reflect: true })
  ], Row.prototype, "wrap", void 0);
  __decorate42([
    n5({ type: Boolean, reflect: true })
  ], Row.prototype, "fit", void 0);
  __decorate42([
    n5({ type: Boolean, reflect: true })
  ], Row.prototype, "min", void 0);
  __decorate42([
    n5({ type: Boolean, reflect: true })
  ], Row.prototype, "max", void 0);
  __decorate42([
    n5({ type: Boolean, reflect: true })
  ], Row.prototype, "outline", void 0);

  // dist/components/row/index.js
  Row.define("hmwc-row", Row);

  // dist/components/stepper/stepper.styles.js
  var styles41 = i`
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
`;

  // dist/components/stepper/stepper.component.js
  var __decorate43 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Stepper = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.step = 1;
      this.value = [];
      this.placement = "bottom";
    }
    updateSteps() {
      this.current = this.value.map((step, index) => {
        let state = "pending";
        let status = "Pending";
        let progress = step.progress || 0;
        let icon = step.icon;
        if (index === this.step - 1) {
          state = "active";
          status = "In Progress";
        }
        if (index < this.step - 1) {
          state = "complete";
          status = "Completed";
          if (!progress)
            progress = 50;
          icon = "check2-circle";
        }
        return { ...step, progress, state, status, icon };
      });
      this.emit("hmwc-change", { detail: { value: this.current } });
    }
    render() {
      const classifier = e7({
        stepper: true,
        fluid: !!this.fluid,
        status: !!this.status,
        "placement-top": this.placement === "top",
        "placement-bottom": this.placement === "bottom",
        "placement-left": this.placement === "left",
        "placement-right": this.placement === "right"
      });
      return b2`
      <div part="base" class=${classifier}>
        ${this.current.map((step, index) => b2`
            <div part="step" class="stepper__step ${step.state}">
              <div class="stepper__status">
                <span class="stepper__circle ${step.icon === "check2-circle" ? "check" : ""}">
                  ${step.icon ? b2`<hmwc-icon src=${step.icon} />` : index + 1}
                </span>
                ${index !== this.current.length - 1 ? b2`
                      <div class="stepper__progress">
                        <span class="stepper__progress-indicator" style="width: ${step.progress}%"></span>
                      </div>
                    ` : ""}
              </div>

              <div class="stepper__info">
                <span class="stepper__index">STEP ${index + 1}</span>
                <span class="stepper__description">${step.label}</span>
                ${this.status ? b2`<span class="stepper__status">${step.status}</span>` : ""}
              </div>
            </div>
          `)}
      </div>
    `;
    }
  };
  Stepper.styles = styles41;
  Stepper.dependencies = [Icon];
  __decorate43([
    r5()
  ], Stepper.prototype, "current", void 0);
  __decorate43([
    n5({ type: Number, reflect: true })
  ], Stepper.prototype, "step", void 0);
  __decorate43([
    n5({ type: Array })
  ], Stepper.prototype, "value", void 0);
  __decorate43([
    n5({ type: Boolean, reflect: true })
  ], Stepper.prototype, "fluid", void 0);
  __decorate43([
    n5({ type: Boolean, reflect: true })
  ], Stepper.prototype, "status", void 0);
  __decorate43([
    n5({ type: String })
  ], Stepper.prototype, "placement", void 0);
  __decorate43([
    watch(["steps", "step"])
  ], Stepper.prototype, "updateSteps", null);

  // dist/components/stepper/index.js
  Stepper.define("hmwc-stepper", Stepper);

  // dist/components/switch/switch.styles.js
  var styles42 = i`
  :host {
    --switch-size: inherit;

    display: inline-block;
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

    &.required .switch__label::after {
      content: var(--hmwc-input-required-content);
      margin-inline-start: var(--hmwc-input-required-content-offset);
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
          var(--hmwc-transition-fast) box-shadow;
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
      margin-inline-start: 0.5em;
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
`;

  // dist/components/switch/switch.component.js
  var __decorate44 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Switch = class extends HMWCFormComponent {
    /** Simulates a click on the switch. */
    click() {
      this.input.click();
    }
    /** Sets focus on the switch. */
    focus(options) {
      this.input.focus(options);
    }
    /** Removes focus from the switch. */
    blur() {
      this.input.blur();
    }
    /**
     * Checks for validity but does not show a validation message.
     * Returns true when valid and false when invalid.
     */
    checkValidity() {
      return this.input?.checkValidity();
    }
    /**
     * Checks for validity and shows the browser’s validation
     * message if the control is invalid.
     */
    reportValidity() {
      return this.input?.reportValidity();
    }
    handleClick() {
      this.checked = !this.checked;
      this.emit("hmwc-change");
    }
    handleInput() {
      this.emit("hmwc-input");
    }
    handleFocus() {
      this.emit("hmwc-focus");
    }
    handleBlur() {
      this.emit("hmwc-blur");
    }
    handleKeyDown(event) {
      event.preventDefault();
      if (!["ArrowLeft", "ArrowRight"].includes(event.key))
        return;
      this.checked = event.key === "ArrowRight";
      this.emit("hmwc-change", { detail: { value: this.checked } });
      this.emit("hmwc-input");
    }
    connectedCallback() {
      super.connectedCallback();
      if (!this.sm && !this.md && !this.lg) {
        this.md = true;
      }
    }
    render() {
      const classifier = e7({
        switch: true,
        checked: !!this.checked,
        sm: !!this.sm,
        md: !!this.md,
        lg: !!this.lg,
        disabled: !!this.disabled,
        required: !!this.required,
        label: !!this.label || this.controllers.slot.test("label")
      });
      return b2`
      <label part="base" class=${classifier}>
        <input
          class="switch__input"
          type="checkbox"
          title=${this.label || ""}
          name=${o6(this.name)}
          value=${o6(this.value)}
          ?checked=${l4(this.checked)}
          ?required=${this.required}
          role="switch"
          aria-checked=${this.checked ? "true" : "false"}
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
    `;
    }
  };
  Switch.styles = styles42;
  Switch.slots = ["label"];
  Switch.toggle = true;
  __decorate44([
    e5(".switch__input")
  ], Switch.prototype, "input", void 0);

  // dist/components/switch/index.js
  Switch.define("hmwc-switch", Switch);

  // dist/components/tab-content/tab-content.styles.js
  var styles43 = i`
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
`;

  // dist/components/tab-content/tab-content.component.js
  var __decorate45 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var TabContent = class extends HMWCComponent {
    handleActiveChange() {
      this.setAttribute("aria-hidden", this.active ? "false" : "true");
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "tabpanel");
    }
    render() {
      const classifier = e7({
        "tab-content": true,
        active: this.active
      });
      return b2` <slot part="base" class=${classifier}></slot> `;
    }
  };
  TabContent.styles = styles43;
  TabContent.dependencies = [];
  __decorate45([
    r5()
  ], TabContent.prototype, "active", void 0);
  __decorate45([
    n5({ type: String, reflect: true })
  ], TabContent.prototype, "name", void 0);
  __decorate45([
    watch("active")
  ], TabContent.prototype, "handleActiveChange", null);

  // dist/components/tab-content/index.js
  TabContent.define("hmwc-tab-content", TabContent);

  // dist/components/tab/tab.styles.js
  var styles44 = i`
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
`;

  // dist/components/tab/tab.component.js
  var __decorate46 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Tab = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.name = Math.random().toString(36).substr(2, 9);
    }
    handleActiveChange() {
      this.setAttribute("aria-selected", this.active ? "true" : "false");
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    /** Sets focus to the tab. */
    focus(options) {
      this.tab.focus(options);
    }
    /** Removes focus from the tab. */
    blur() {
      this.tab.blur();
    }
    handleClose(event) {
      event.stopPropagation();
      this.emit("close");
    }
    updateContent() {
      const group = this.closest("hmwc-tab-group");
      const content = this.children;
      if (!content || !group) {
        return;
      }
      if (Array.from(group.children).find((child) => child instanceof TabContent && child.name === this.name)) {
        return;
      }
      const contentEl = Object.assign(document.createElement("hmwc-tab-content"), {
        name: this.name,
        active: this.active
      });
      if (content instanceof Element) {
        contentEl.appendChild(content);
      } else {
        Array.from(content).forEach((element) => {
          contentEl.appendChild(element);
        });
      }
      group?.appendChild(contentEl);
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "tab");
      this.setAttribute("slot", "tab");
      this.updateContent();
    }
    render() {
      const classifier = e7({
        tab: true,
        active: !!this.active,
        closable: !!this.closeable,
        disabled: !!this.disabled
      });
      return b2`
      <div part="base" class=${classifier} tabindex=${this.disabled ? "-1" : "0"}>
        <slot name="icon" class="tab__icon">${this.icon ? b2`<hmwc-icon src=${this.icon}></hmwc-icon>` : ""}</slot>
        <slot>${this.label}</slot>
        ${this.closeable ? b2`<span class="tab__close"><hmwc-button part="close" basic medium icon="x" @hmwc-click=${this.handleClose}> </hmwc-button></span>` : ""}
      </div>
    `;
    }
  };
  Tab.styles = styles44;
  Tab.dependencies = [Button];
  __decorate46([
    n5({ type: String })
  ], Tab.prototype, "name", void 0);
  __decorate46([
    n5({ type: String })
  ], Tab.prototype, "label", void 0);
  __decorate46([
    n5({ type: Boolean, reflect: true })
  ], Tab.prototype, "active", void 0);
  __decorate46([
    n5({ type: Boolean, reflect: true })
  ], Tab.prototype, "closeable", void 0);
  __decorate46([
    n5({ type: Boolean, reflect: true })
  ], Tab.prototype, "disabled", void 0);
  __decorate46([
    n5({ type: String })
  ], Tab.prototype, "icon", void 0);
  __decorate46([
    e5(".tab")
  ], Tab.prototype, "tab", void 0);
  __decorate46([
    watch("active")
  ], Tab.prototype, "handleActiveChange", null);
  __decorate46([
    watch("disabled")
  ], Tab.prototype, "handleDisabledChange", null);

  // dist/components/tab/index.js
  Tab.define("hmwc-tab", Tab);

  // dist/components/tab-group/tab-group.styles.js
  var styles45 = i`
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
`;

  // dist/components/tab-group/tab-group.component.js
  var __decorate47 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var TabGroup = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.scrollable = false;
      this.tabs = [];
      this.content = [];
      this.placement = "top";
      this.active = "";
    }
    handlePlacementChange() {
      if (!this.indicator) {
        return;
      }
      if (this.getCurrentTab()) {
        this.indicator.style.display = "block";
        this.repositionIndicator();
      } else {
        this.indicator.style.display = "none";
      }
    }
    handleTabsChange() {
      const tabs = this.getTabs();
      if (tabs.find((tab) => tab.active)) {
        return;
      }
      this.setCurrentTab(this.getCurrentTab());
    }
    /** Shows the specified tab panel. */
    show(panel) {
      setTimeout(() => {
        const tab = this.tabs.find((tab2) => {
          return tab2.name === panel;
        });
        if (!tab)
          return;
        this.setCurrentTab(tab);
      }, 1);
    }
    getTabs() {
      const tabs = this.querySelectorAll("hmwc-tab");
      return Array.from(tabs);
    }
    getContent() {
      const content = this.querySelectorAll("hmwc-tab-content");
      return Array.from(content);
    }
    getCurrentTab() {
      return this.getTabs().find((tab) => {
        return tab.active;
      }) || this.tabs[0];
    }
    setAria() {
      this.tabs.forEach((tab) => {
        const content = this.content.find((content2) => {
          return content2.name === tab.name;
        });
        if (!content)
          return;
        tab.setAttribute("aria-controls", content.id);
        content.setAttribute("aria-labelledby", tab.id);
      });
    }
    setCurrentTab(tab) {
      if (tab === this.current || tab.disabled)
        return;
      const previous = this.current;
      this.current = tab;
      this.active = tab.name || "";
      const sync = (t5) => {
        return t5.active = t5.name === tab.name;
      };
      this.tabs.forEach(sync);
      this.content.forEach(sync);
      this.handlePlacementChange();
      if (!this.current || !this.tabsEl)
        return;
      if (["top", "bottom"].includes(this.placement)) {
        if (this.autoScroll) {
          this.controllers.scroll.scrollIntoView(this.current, this.tabsEl, "horizontal");
        }
      }
      if (previous) {
        this.emit("hmwc-hide", { bubbles: false });
      } else {
        this.emit("hmwc-show");
      }
    }
    repositionIndicator() {
      if (!this.current)
        return;
      const style = this.indicator.style;
      const width = this.current.clientWidth;
      const height = this.current.clientHeight;
      const index = this.tabs.indexOf(this.current);
      const preceding = this.tabs.slice(0, index);
      const offset = preceding.reduce((prev, current) => ({
        left: prev.left + current.clientWidth,
        top: prev.top + current.clientHeight
      }), { left: 0, top: 0 });
      if (["top", "bottom"].includes(this.placement)) {
        style.width = `${width}px`;
        style.height = "auto";
        style.transform = `translateX(${offset.left}px)`;
      } else if (["start", "end"].includes(this.placement)) {
        style.width = "auto";
        style.height = `${height}px`;
        style.transform = `translateY(${offset.top}px)`;
      }
    }
    handleClick(event) {
      const target = event.target;
      const tab = target.closest("hmwc-tab");
      const group = tab?.closest("hmwc-tab-group");
      if (group !== this || !tab)
        return;
      this.setCurrentTab(tab);
    }
    handleKeyDown(event) {
      const target = event.target;
      const tab = target.closest("hmwc-tab");
      const group = tab?.closest("hmwc-tab-group");
      const keys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"];
      if (group !== this || !tab)
        return;
      if (keys.includes(event.key)) {
        const horizontal = ["top", "bottom"].includes(this.placement);
        const vertical = ["start", "end"].includes(this.placement);
        const current = this.tabs.find((t5) => {
          return t5.matches(":focus");
        });
        if (!current)
          return;
        let index = this.tabs.indexOf(current);
        if (event.key === "Home") {
          index = 0;
        } else if (event.key === "End") {
          index = this.tabs.length - 1;
        } else if (event.key === "ArrowLeft" && horizontal) {
          index--;
        } else if (event.key === "ArrowUp" && vertical) {
          index--;
        } else if (event.key === "ArrowRight" && horizontal) {
          index++;
        } else if (event.key === "ArrowDown" && vertical) {
          index++;
        }
        if (index < 0) {
          index = this.tabs.length - 1;
        } else if (index > this.tabs.length - 1) {
          index = 0;
        }
        this.tabs[index].focus({ preventScroll: true });
        this.setCurrentTab(this.tabs[index]);
        if (!this.current || !this.tabsEl)
          return;
        if (horizontal) {
          this.controllers.scroll.scrollIntoView(this.current, this.tabsEl, "horizontal");
        }
      }
    }
    handleScroll(dir) {
      let distance = 0;
      if (dir === "left") {
        distance = this.nav.scrollLeft - this.nav.clientWidth;
      } else if (dir === "right") {
        distance = this.nav.scrollLeft + this.nav.clientWidth;
      }
      this.nav.scroll({ left: distance, behavior: "smooth" });
    }
    handleSlotChange() {
      this.handlePlacementChange();
      this.tabs = this.getTabs();
      this.content = this.getContent();
    }
    reset() {
      this.setCurrentTab(this.tabs[0]);
    }
    connectedCallback() {
      super.connectedCallback();
      this.tabs = this.getTabs();
      this.content = this.getContent();
      if (!this.tabs && !this.content)
        return;
      this.setCurrentTab(this.getCurrentTab());
      this.setAria();
      if (!this.nav)
        return;
      const horizontal = ["top", "bottom"].includes(this.placement);
      const overflow = this.nav.scrollWidth > this.nav.clientWidth;
      this.scrollable = horizontal && overflow;
    }
    render() {
      const classifier = e7({
        "tab-group": true,
        scrollable: this.scrollable,
        fluid: !!this.fluid
      });
      return b2`
      <div part="base" class=${classifier} placement=${this.placement} @click=${this.handleClick} @keydown=${this.handleKeyDown}>
        <div class="tab-group__navigation">
          ${this.scrollable ? b2`
                <hmwc-button class="tab-group__scroll start" basic small icon="chevron-left" @hmwc-click=${() => this.handleScroll("left")}>
                </hmwc-button>
              ` : ""}
          <div part="navigation" class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="indicator" class="tab-group__indicator"></div>
              <slot name="tab" @slotchange=${this.handlePlacementChange}></slot>
            </div>
          </div>
          ${this.scrollable ? b2`
                <hmwc-button class="tab-group__scroll end" basic small icon="chevron-right" @hmwc-click=${() => this.handleScroll("right")}>
                </hmwc-button>
              ` : ""}
        </div>
        <div class="tab-group__content" part="content">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
      </div>
    `;
    }
  };
  TabGroup.styles = styles45;
  TabGroup.dependencies = [Tab, TabContent, Button];
  __decorate47([
    r5()
  ], TabGroup.prototype, "scrollable", void 0);
  __decorate47([
    r5()
  ], TabGroup.prototype, "tabs", void 0);
  __decorate47([
    r5()
  ], TabGroup.prototype, "content", void 0);
  __decorate47([
    n5({ type: String, reflect: true })
  ], TabGroup.prototype, "placement", void 0);
  __decorate47([
    n5({ type: Boolean })
  ], TabGroup.prototype, "autoScroll", void 0);
  __decorate47([
    n5({ type: String, reflect: true })
  ], TabGroup.prototype, "active", void 0);
  __decorate47([
    n5({ type: Boolean, reflect: true })
  ], TabGroup.prototype, "fluid", void 0);
  __decorate47([
    e5(".tab-group__tabs")
  ], TabGroup.prototype, "tabsEl", void 0);
  __decorate47([
    e5(".tab-group__nav")
  ], TabGroup.prototype, "nav", void 0);
  __decorate47([
    e5(".tab-group__indicator")
  ], TabGroup.prototype, "indicator", void 0);
  __decorate47([
    watch("placement", { waitUntilFirstUpdate: true })
  ], TabGroup.prototype, "handlePlacementChange", null);
  __decorate47([
    watch("tabs", { waitUntilFirstUpdate: true })
  ], TabGroup.prototype, "handleTabsChange", null);

  // dist/components/tab-group/index.js
  TabGroup.define("hmwc-tab-group", TabGroup);

  // dist/components/table-cell/table-cell.styles.js
  var styles46 = i`
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
`;

  // dist/components/table-cell/table-cell.component.js
  var __decorate48 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var TableCell = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.alignment = "start";
    }
    valueUpdated() {
      this.emit("hmwc-change", { detail: { value: this.label } });
    }
    firstUpdated() {
      if (!this.label)
        this.label = this.shadowRoot?.querySelector("table-cell__body")?.textContent || "";
    }
    render() {
      const classifier = e7({
        "table-cell": true,
        "align-start": this.alignment === "start",
        "align-center": this.alignment === "center",
        "align-end": this.alignment === "end",
        icon: !!this.icon,
        progress: !!this.progress,
        primary: !!this.primary,
        success: !!this.success,
        neutral: !!this.neutral,
        warning: !!this.warning,
        danger: !!this.danger
      });
      return b2`
      <div
        part="base"
        class=${classifier}
        @hover=${() => this.emit("hmwc-hover")}
        @focus=${() => this.emit("hmwc-focus")}
        @blur=${() => this.emit("hmwc-blur")}>
        <slot part="body" class="table-cell__body">
          ${this.icon ? b2`<hmwc-icon part="icon" class="table-cell__icon" src=${this.icon}></hmwc-icon>` : this.label ? b2`<div part="label" class="table-cell__label">${this.label}</div>` : this.progress ? b2`
                <hmwc-progress
                  part="progress"
                  class="table-cell__progress"
                  value=${this.progress}
                  ?primary=${this.primary}
                  ?success=${this.success}
                  ?neutral=${this.neutral}
                  ?warning=${this.warning}
                  ?danger=${this.danger}
                  @hmwc-change=${(e8) => this.progress = e8.detail.value}></hmwc-progress>
              ` : b2`<hmwc-skeleton></hmwc-skeleton>`}
        </slot>
      </div>
    `;
    }
  };
  TableCell.styles = styles46;
  TableCell.dependencies = [Icon, Tooltip, Progress, Skeleton];
  __decorate48([
    n5({ type: String, reflect: true })
  ], TableCell.prototype, "label", void 0);
  __decorate48([
    n5({ type: String, reflect: true })
  ], TableCell.prototype, "icon", void 0);
  __decorate48([
    n5({ type: Number, reflect: true })
  ], TableCell.prototype, "progress", void 0);
  __decorate48([
    n5({ type: String, reflect: true })
  ], TableCell.prototype, "alignment", void 0);
  __decorate48([
    n5({ type: Number, reflect: true })
  ], TableCell.prototype, "index", void 0);
  __decorate48([
    n5({ type: Boolean, reflect: true })
  ], TableCell.prototype, "primary", void 0);
  __decorate48([
    n5({ type: Boolean, reflect: true })
  ], TableCell.prototype, "success", void 0);
  __decorate48([
    n5({ type: Boolean, reflect: true })
  ], TableCell.prototype, "neutral", void 0);
  __decorate48([
    n5({ type: Boolean, reflect: true })
  ], TableCell.prototype, "warning", void 0);
  __decorate48([
    n5({ type: Boolean, reflect: true })
  ], TableCell.prototype, "danger", void 0);
  __decorate48([
    watch(["value"])
  ], TableCell.prototype, "valueUpdated", null);

  // dist/components/table-cell/index.js
  TableCell.define("hmwc-table-cell", TableCell);

  // dist/components/table-field/table-field.styles.js
  var styles47 = i` 
  :host { 
    display: block;
   } 

   .table-field {
    
   }
`;

  // dist/components/table-field/table-field.component.js
  var __decorate49 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var TableField = class extends HMWCComponent {
    render() {
      return b2`
            <div part='base' class='table-field'>
                <slot></slot>
            </div>
        `;
    }
  };
  TableField.styles = styles47;
  TableField.dependencies = [];
  TableField.slots = [];
  __decorate49([
    n5({ type: String })
  ], TableField.prototype, "prop", void 0);

  // dist/components/table-field/index.js
  TableField.define("hmwc-table-field", TableField);

  // dist/components/table-row/table-row.styles.js
  var styles48 = i`
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
`;

  // dist/components/table-row/table-row.component.js
  var __decorate50 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var TableRow = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.hover = true;
      this.cells = [];
    }
    cellsUpdate() {
      const indexed = this.cells.filter((r7) => r7.index);
      if (!indexed.length)
        this.cells.map((r7, i7) => r7.index = i7);
      else {
        const unindex = this.cells.filter((r7) => r7.index === void 0);
        unindex.forEach((r7, i7) => {
          if (indexed.find((r8) => r8.index === i7))
            i7++;
          else
            r7.index = i7, i7++;
        });
      }
      this.cells = this.cells.sort((a4, b3) => a4.index - b3.index);
    }
    firstUpdated() {
      this.cells = this.controllers.slot.get().filter((el) => el instanceof TableCell);
    }
    render() {
      const classifier = e7({
        "table-row": true,
        alt: this.index % 2 !== 0
      });
      return b2`<div part="base" class=${classifier}>
        ${this.selectable ? b2`<hmwc-checkbox></hmwc-checkbox>` : ""}${this.cells}${this.removable ? b2`<hmwc-button basic danger icon="x"></hmwc-button>` : ""}
      </div>
      <slot></slot>`;
    }
  };
  TableRow.styles = styles48;
  TableRow.dependencies = [];
  TableRow.slots = [];
  __decorate50([
    n5({ type: Number, reflect: true })
  ], TableRow.prototype, "index", void 0);
  __decorate50([
    n5({ type: Boolean, reflect: true })
  ], TableRow.prototype, "hover", void 0);
  __decorate50([
    n5({ type: Boolean, reflect: true })
  ], TableRow.prototype, "selectable", void 0);
  __decorate50([
    n5({ type: Boolean, reflect: true })
  ], TableRow.prototype, "removable", void 0);
  __decorate50([
    r5()
  ], TableRow.prototype, "cells", void 0);
  __decorate50([
    watch("cells", { waitUntilFirstUpdate: true })
  ], TableRow.prototype, "cellsUpdate", null);

  // dist/components/table-row/index.js
  TableRow.define("hmwc-table-row", TableRow);

  // dist/components/table/table.styles.js
  var styles49 = i`
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
`;

  // dist/components/table/table.component.js
  var __decorate51 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Table = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.rows = [];
      this.fields = [];
    }
    rowsUpdate() {
      const indexed = this.rows.filter((r7) => r7.index);
      if (!indexed.length)
        this.rows.map((r7, i7) => r7.index = i7);
      else {
        this.rows.filter((r7) => r7.index === void 0).forEach((r7, i7) => {
          if (indexed.find((r8) => r8.index === i7))
            i7++;
          else
            r7.index = i7, i7++;
        });
      }
      this.rows = this.rows.sort((a4, b3) => a4.index - b3.index);
      if (this.rows[0]?.cells) {
        if (!this.fields.length)
          this.fields = Array.from(Array(this.rows[0]?.cells.length).keys()).map(() => "");
      }
      if (this.rows.find((r7) => r7.selectable)) {
        this.fields = ["", ...this.fields];
      }
      if (this.rows.find((r7) => r7.removable)) {
        this.fields = [...this.fields, ""];
      }
    }
    fieldsUpdate() {
    }
    firstUpdated() {
      this.rows = this.controllers.slot.get().filter((el) => el instanceof TableRow);
    }
    render() {
      const classifier = e7({
        table: true,
        fluid: !!this.fluid,
        fields: this.fields.some((f3) => f3 !== "")
      });
      return b2`
      <div part="base" class=${classifier}>
        <div part="head" class="table__head">
          <div class="table__head-row">${this.fields?.map((label) => b2`<div part="col-head" class="table__head-item">${label}</div>`)}</div>
        </div>
        ${this.rows.map((r7) => r7)}
        <slot></slot>
      </div>
    `;
    }
  };
  Table.styles = styles49;
  Table.dependencies = [];
  Table.slots = ["[Default]"];
  __decorate51([
    r5()
  ], Table.prototype, "rows", void 0);
  __decorate51([
    n5({ type: Array })
  ], Table.prototype, "fields", void 0);
  __decorate51([
    n5({ type: Boolean, reflect: true })
  ], Table.prototype, "fluid", void 0);
  __decorate51([
    watch("rows")
  ], Table.prototype, "rowsUpdate", null);
  __decorate51([
    watch("fields")
  ], Table.prototype, "fieldsUpdate", null);

  // dist/components/table/index.js
  Table.define("hmwc-table", Table);

  // dist/components/tree-item/tree-item.styles.js
  var styles50 = i`
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
`;

  // dist/components/tree-item/tree-item.component.js
  var __decorate52 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var TreeItem = class _TreeItem extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.selection = "single";
      this.checked = false;
      this.items = [];
    }
    getTreeItems() {
      if (!this.items.length) {
        this.controllers.slot.get().forEach((item) => {
          if (item instanceof _TreeItem) {
            this.items.push({
              label: item.controllers.slot.get("label")[0].textContent || "",
              icon: item.controllers.slot.get("icon")[0].src,
              selected: item.selected,
              expanded: item.expanded,
              items: item.getTreeItems()
            });
          }
        });
      }
      return this.items;
    }
    handleClick() {
      this.selected = !this.selected;
      if (this.selection === "multiple") {
        this.checked = this.selected;
      }
      this.emit("select", { detail: { value: this } });
      if (this.items) {
        this.expanded = this.selected;
      }
    }
    connectedCallback() {
      super.connectedCallback();
    }
    render() {
      const classifier = e7({
        "tree-item": true,
        items: !!this.items.length,
        expanded: !!this.expanded,
        disabled: !!this.disabled,
        selected: !!this.selected && !this.disabled
      });
      return b2`
      <div part="base" class=${classifier}>
        <div part="item" class="tree-item__item" @click=${this.handleClick}>
          <div class="tree-item__indentation" part="indentation"></div>
          <slot name="${!this.expanded ? "expand" : "collapse"}-icon" part="icon" class="tree-item__expand">
            ${this.items ? b2`<hmwc-icon src="chevron-right"></hmwc-icon>` : ""}
          </slot>

          ${this.selection === "multiple" ? b2`<div part="checkbox" class="tree-item__checkbox">
                <hmwc-checkbox ?checked=${this.checked} @hmwc-change=${this.handleClick}></hmwc-checkbox>
              </div>` : ""}
          <slot name="icon" part="icon" class="tree-item__icon">
            ${this.icon ? b2`<hmwc-icon sm src=${this.icon}></hmwc-icon>` : ""}
          </slot>
          <slot name="label" part="label" class="tree-item__label">${this.label}</slot>
        </div>
        ${this.expanded ? b2`<div part="items" class="tree-item__items">
              <slot>
                ${this.items.map((item) => b2`
                    <hmwc-tree-item
                      label=${item.label}
                      icon=${o6(item.icon)}
                      ?selected=${item.selected}
                      ?expanded=${item.expanded}
                      ?checked=${item.checked}
                      selection=${this.selection}
                      .items=${item.items || []}></hmwc-tree-item>
                  `)}
              </slot>
            </div>` : ""}
      </div>
    `;
    }
  };
  TreeItem.styles = styles50;
  TreeItem.dependencies = [Icon, Checkbox];
  TreeItem.slots = ["label", "icon"];
  __decorate52([
    n5({ type: String })
  ], TreeItem.prototype, "selection", void 0);
  __decorate52([
    n5({ type: String })
  ], TreeItem.prototype, "label", void 0);
  __decorate52([
    n5({ type: String })
  ], TreeItem.prototype, "icon", void 0);
  __decorate52([
    n5({ type: Boolean, reflect: true })
  ], TreeItem.prototype, "selected", void 0);
  __decorate52([
    n5({ type: Boolean, reflect: true })
  ], TreeItem.prototype, "checked", void 0);
  __decorate52([
    n5({ type: Boolean, reflect: true })
  ], TreeItem.prototype, "expanded", void 0);
  __decorate52([
    n5({ type: Boolean, reflect: true })
  ], TreeItem.prototype, "disabled", void 0);
  __decorate52([
    n5({ type: Array })
  ], TreeItem.prototype, "items", void 0);

  // dist/components/tree-item/index.js
  TreeItem.define("hmwc-tree-item", TreeItem);

  // dist/components/tree/tree.styles.js
  var styles51 = i`
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
`;

  // dist/components/tree/tree.component.js
  var __decorate53 = function(decorators, target, key, desc) {
    var c5 = arguments.length, r7 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r7 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r7 = (c5 < 3 ? d3(r7) : c5 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c5 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  };
  var Tree = class extends HMWCComponent {
    constructor() {
      super(...arguments);
      this.selection = "single";
      this.items = [];
    }
    handleSelectionChange() {
      this.controllers.slot.get().forEach((item) => {
        ;
        item.selection = this.selection;
      });
    }
    singleSelect(item, items) {
      return items.map((i7) => {
        if (i7.label === item.label) {
          i7.selected = true;
          if (i7.items) {
            i7.expanded = true;
          }
        } else {
          i7.selected = false;
        }
        if (i7.items) {
          i7.items = this.singleSelect(item, i7.items);
          if (i7.items.some((child) => child.selected)) {
            i7.expanded = true;
          }
        }
        return i7;
      });
    }
    multiSelect(item, items) {
      return items.map((i7) => {
        if (i7.label === item.label) {
          i7.selected = true;
          i7.checked = true;
          if (i7.items) {
            i7.expanded = true;
          }
        }
        if (i7.items) {
          i7.items = this.multiSelect(item, i7.items);
          if (i7.items.some((child) => child.selected)) {
            i7.expanded = true;
          }
        }
        return i7;
      });
    }
    handleSelection(event) {
      const item = event.detail.value;
      if (this.selection === "single") {
        this.items = this.singleSelect(item, this.items);
      } else if (this.selection === "multiple") {
        this.items = this.multiSelect(item, this.items);
      }
    }
    connectedCallback() {
      super.connectedCallback();
      this.controllers.slot.get().forEach((item) => {
        ;
        item.selection = this.selection;
      });
    }
    render() {
      const classifier = e7({
        tree: true,
        label: !!this.label || this.controllers.slot.test("label")
      });
      return b2`
      <div part="base" class=${classifier}>
        <slot name="label" part="label" class="tree__label">${this.label}</slot>
        <slot>
          ${this.items.map((item) => b2`
              <hmwc-tree-item
                label=${item.label}
                icon=${o6(item.icon)}
                ?selected=${item.selected}
                ?expanded=${item.expanded}
                ?checked=${item.checked}
                .items=${item.items || []}
                selection=${this.selection}
                @hmwc-select=${this.handleSelection}></hmwc-tree-item>
            `)}
        </slot>
      </div>
    `;
    }
  };
  Tree.styles = styles51;
  Tree.dependencies = [TreeItem];
  __decorate53([
    n5()
  ], Tree.prototype, "selection", void 0);
  __decorate53([
    n5({ type: Boolean, reflect: true })
  ], Tree.prototype, "expanded", void 0);
  __decorate53([
    n5({ type: Array })
  ], Tree.prototype, "items", void 0);
  __decorate53([
    n5({ type: String, reflect: true })
  ], Tree.prototype, "label", void 0);
  __decorate53([
    watch("selection")
  ], Tree.prototype, "handleSelectionChange", null);

  // dist/components/tree/index.js
  Tree.define("hmwc-tree", Tree);
  return __toCommonJS(index_exports);
})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/

// Expose imperative functions globally
if (typeof window !== 'undefined') {
  window.HMWCPopup = HMWC.HMWCPopup;
  window.HMWCAlert = HMWC.HMWCAlert;
}

