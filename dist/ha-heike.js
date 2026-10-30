// node_modules/.pnpm/@vue+shared@3.6.0-rc.13/node_modules/@vue/shared/dist/shared.esm-bundler.js
/*@__NO_SIDE_EFFECTS__*/
function e(e) {
	let t = Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var t = {}, n = [], r = () => {}, i = () => !1, a = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), o = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, s = (e) => e.startsWith("onUpdate:"), c = Object.assign, l = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, u = Object.prototype.hasOwnProperty, d = (e, t) => u.call(e, t), f = Array.isArray, p = (e) => x(e) === "[object Map]", m = (e) => x(e) === "[object Set]", h = (e) => x(e) === "[object Date]", g = (e) => typeof e == "function", _ = (e) => typeof e == "string", v = (e) => typeof e == "symbol", y = (e) => typeof e == "object" && !!e, b = (e) => (y(e) || g(e)) && g(e.then) && g(e.catch), ee = Object.prototype.toString, x = (e) => ee.call(e), te = (e) => x(e).slice(8, -1), ne = (e) => x(e) === "[object Object]", re = (e) => _(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ie = /*@__PURE__*/ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ae = (e) => {
	let t = Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, oe = /-(\w)/g, se = (e, t) => t ? t.toUpperCase() : "", S = ae((e) => e.replace(oe, se)), ce = /\B([A-Z])/g, C = ae((e) => e.replace(ce, "-$1").toLowerCase()), le = ae((e) => e.charAt(0).toUpperCase() + e.slice(1)), ue = ae((e) => e ? `on${le(e)}` : ""), w = (e) => `${e === "modelValue" || e === "model-value" ? "model" : e}Modifiers${e === "model" ? "$" : ""}`, T = (e, t) => !Object.is(e, t), de = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, fe = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, pe = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, me = (e) => {
	let t = _(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, he, ge = () => he ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function _e(e) {
	return e !== "PROGRESS" && !e.includes("-");
}
function E(e) {
	if (f(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = _(r) ? be(r) : E(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (_(e) || y(e)) return e;
}
var D = /;(?![^(]*\))/g, ve = /:([^]+)/, ye = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function be(e) {
	let t = {};
	return e.replace(ye, (e) => e.startsWith("/*") ? "" : e).split(D).forEach((e) => {
		if (e) {
			let n = e.split(ve);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function xe(e) {
	let t = "";
	if (_(e)) t = e;
	else if (f(e)) for (let n = 0; n < e.length; n++) {
		let r = xe(e[n]);
		r && (t += r + " ");
	}
	else if (y(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var Se = /*@__PURE__*/ e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function Ce(e) {
	return !!e || e === "";
}
function we(e, t) {
	return t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e === "INPUT" || t === "type" && e === "TEXTAREA" || (t === "width" || t === "height") && (e === "IMG" || e === "VIDEO" || e === "CANVAS" || e === "SOURCE") || t === "sandbox" && e === "IFRAME";
}
function Te(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = ke(e[i], t[i], n);
	return r;
}
function Ee(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && ke(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function De(e, t, n) {
	let r = p(e), i = p(t);
	if (r || i || (r = m(e), i = m(t), r || i)) return r && i ? Ee(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !ke(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function Oe(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function ke(e, t, n) {
	if (e === t) return !0;
	let r = h(e), i = h(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = v(e), i = v(t), r || i ? e === t : (r = f(e), i = f(t), r || i ? r && i ? Oe(e, t, n, Te) : !1 : (r = y(e), i = y(t), r || i ? !r || !i ? !1 : Oe(e, t, n, De) : String(e) === String(t))));
}
var Ae = (e) => !!(e && e.__v_isRef === !0), je = (e) => {
	switch (typeof e) {
		case "string": return e;
		case "object": if (e) {
			if (Ae(e)) return je(e.value);
			if (f(e) || e.toString === ee || !g(e.toString)) return JSON.stringify(e, Me, 2);
		}
		default: return e == null ? "" : String(e);
	}
}, Me = (e, t) => Ae(t) ? Me(e, t.value) : p(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ne(t, r) + " =>"] = n, e), {}) } : m(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ne(e)) } : v(t) ? Ne(t) : y(t) && !f(t) && !ne(t) ? String(t) : t, Ne = (e, t = "") => v(e) ? `Symbol(${e.description ?? t})` : e;
function Pe(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
// node_modules/.pnpm/@vue+reactivity@3.6.0-rc.13/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var Fe = [], Ie = 0, O = void 0, Le = 0;
function Re() {
	++Le;
}
function ze() {
	--Le;
}
var Be = 0, Ve = 0, He = 0;
function k(e) {
	try {
		return O;
	} finally {
		O = e;
	}
}
function Ue() {
	++Ie;
}
function We() {
	!--Ie && He && Xe();
}
function Ge(e, t) {
	let n = t.depsTail;
	if (n !== void 0 && n.dep === e) return;
	let r = n === void 0 ? t.deps : n.nextDep;
	if (r !== void 0 && r.dep === e) {
		r.version = Be, t.depsTail = r;
		return;
	}
	let i = e.subsTail;
	if (i !== void 0 && i.version === Be && i.sub === t) return;
	let a = t.depsTail = e.subsTail = {
		version: Be,
		dep: e,
		sub: t,
		prevDep: n,
		nextDep: r,
		prevSub: i,
		nextSub: void 0
	};
	r !== void 0 && (r.prevDep = a), n === void 0 ? t.deps = a : n.nextDep = a, i === void 0 ? e.subs = a : i.nextSub = a;
}
function Ke(e, t = e.sub) {
	let n = e.dep, r = e.prevDep, i = e.nextDep, a = e.nextSub, o = e.prevSub;
	if (i === void 0 ? t.depsTail = r : i.prevDep = r, r === void 0 ? t.deps = i : r.nextDep = i, a === void 0 ? n.subsTail = o : a.prevSub = o, o !== void 0) o.nextSub = a;
	else if ((n.subs = a) === void 0) {
		let e = n.deps;
		if (e !== void 0) {
			do
				e = Ke(e, n);
			while (e !== void 0);
			n.flags |= 16;
		}
	}
	return i;
}
function qe(e) {
	let t = e.nextSub, n;
	top: do {
		let r = e.sub, i = r.flags;
		if (i & 3 && (i & 60 ? i & 12 ? i & 4 ? !(i & 48) && $e(e, r) ? (r.flags = i | 40, i &= 1) : i = 0 : r.flags = i & -9 | 32 : i = 0 : (r.flags = i | 32, Le && (r.flags |= 8)), i & 2 && (Fe[He++] = r), i & 1)) {
			let i = r.subs;
			if (i !== void 0) {
				e = i, i.nextSub !== void 0 && (n = {
					value: t,
					prev: n
				}, t = e.nextSub);
				continue;
			}
		}
		if ((e = t) !== void 0) t = e.nextSub;
		else {
			for (; n !== void 0;) if (e = n.value, n = n.prev, e !== void 0) {
				t = e.nextSub;
				continue top;
			}
			break;
		}
	} while (1);
}
function Je(e) {
	return ++Be, e.depsTail = void 0, e.flags = e.flags & -57 | 4, k(e);
}
function Ye(e, t) {
	O = t;
	let n = e.depsTail, r = n === void 0 ? e.deps : n.nextDep;
	for (; r !== void 0;) r = Ke(r, e);
	e.flags &= -5;
}
function Xe() {
	let e = !1, t;
	for (; Ve < He;) {
		let n = Fe[Ve];
		Fe[Ve++] = void 0;
		try {
			n.notify();
		} catch (n) {
			e || (e = !0, t = n);
		}
	}
	if (Ve = 0, He = 0, e) throw t;
}
function Ze(e, t) {
	let n, r = 0;
	top: do {
		let i = e.dep, a = i.flags, o = !1;
		if (t.flags & 16) o = !0;
		else if ((a & 17) == 17) {
			let e = i.subs;
			i.update() && (e.nextSub !== void 0 && Qe(e), o = !0);
		} else if ((a & 33) == 33) {
			n = {
				value: e,
				prev: n
			}, e = i.deps, t = i, ++r;
			continue;
		}
		if (!o && e.nextDep !== void 0) e = e.nextDep;
		else {
			for (; r;) {
				if (--r, e = n.value, n = n.prev, o) {
					let n = t.subs;
					if (t.update()) {
						n.nextSub !== void 0 && Qe(n), t = e.sub;
						continue;
					}
				} else t.flags &= -33;
				if (t = e.sub, e.nextDep !== void 0) {
					e = e.nextDep;
					continue top;
				}
				o = !1;
			}
			return o && !!t.flags;
		}
	} while (1);
}
function Qe(e) {
	do {
		let t = e.sub, n = e.nextSub, r = t.flags;
		(r & 48) == 32 && (t.flags = r | 16), e = n;
	} while (e !== void 0);
}
function $e(e, t) {
	let n = t.depsTail;
	for (; n !== void 0;) {
		if (n === e) return !0;
		n = n.prevDep;
	}
	return !1;
}
var et = class {
	constructor(e, t) {
		this.map = e, this.key = t, this._subs = void 0, this.subsTail = void 0, this.flags = 0;
	}
	get subs() {
		return this._subs;
	}
	set subs(e) {
		this._subs = e, e === void 0 && this.map && this.map.delete(this.key);
	}
}, tt = /* @__PURE__ */ new WeakMap(), nt = Symbol(""), rt = Symbol(""), it = Symbol("");
function A(e, t, n) {
	if (O !== void 0) {
		let t = tt.get(e);
		t || tt.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || t.set(n, r = new et(t, n)), Ge(r, O);
	}
}
function j(e, t, n, r, i, a) {
	let o = tt.get(e);
	if (!o) return;
	let s = (e) => {
		e !== void 0 && e.subs !== void 0 && (qe(e.subs), Qe(e.subs));
	};
	if (Ue(), t === "clear") o.forEach(s);
	else {
		let i = f(e), a = i && re(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === it || !v(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(it)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(nt)), p(e) && s(o.get(rt)));
				break;
			case "delete":
				i || (s(o.get(nt)), p(e) && s(o.get(rt)));
				break;
			case "set": p(e) && s(o.get(nt));
		}
	}
	We();
}
function at(e, t) {
	let n = tt.get(e);
	return n && n.get(t);
}
function ot(e) {
	let t = /* @__PURE__ */ I(e);
	return t === e || (A(t, "iterate", it), /* @__PURE__ */ F(e)) ? t : /* @__PURE__ */ P(e) ? /* @__PURE__ */ Ht(e) ? t.map((e) => Gt(L(e))) : t.map(Gt) : t.map(L);
}
function st(e) {
	return A(e = /* @__PURE__ */ I(e), "iterate", it), e;
}
function M(e, t) {
	return /* @__PURE__ */ P(e) ? Gt(/* @__PURE__ */ Ht(e) ? L(t) : t) : L(t);
}
var ct = {
	__proto__: null,
	[Symbol.iterator]() {
		return lt(this, Symbol.iterator, (e) => M(this, e));
	},
	concat(...e) {
		return ot(this).concat(...e.map((e) => f(e) ? ot(e) : e));
	},
	entries() {
		return lt(this, "entries", (e) => (e[1] = M(this, e[1]), e));
	},
	every(e, t) {
		return N(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return N(this, "filter", e, t, (e) => e.map((e) => M(this, e)), arguments);
	},
	find(e, t) {
		return N(this, "find", e, t, (e) => M(this, e), arguments);
	},
	findIndex(e, t) {
		return N(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return N(this, "findLast", e, t, (e) => M(this, e), arguments);
	},
	findLastIndex(e, t) {
		return N(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return N(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return pt(this, "includes", e);
	},
	indexOf(...e) {
		return pt(this, "indexOf", e);
	},
	join(e) {
		return ot(this).join(e);
	},
	lastIndexOf(...e) {
		return pt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return N(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return mt(this, "pop");
	},
	push(...e) {
		return mt(this, "push", e);
	},
	reduce(e, ...t) {
		return ft(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ft(this, "reduceRight", e, t);
	},
	shift() {
		return mt(this, "shift");
	},
	some(e, t) {
		return N(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return mt(this, "splice", e);
	},
	toReversed() {
		return ot(this).toReversed();
	},
	toSorted(e) {
		return ot(this).toSorted(e);
	},
	toSpliced(...e) {
		return ot(this).toSpliced(...e);
	},
	unshift(...e) {
		return mt(this, "unshift", e);
	},
	values() {
		return lt(this, "values", (e) => M(this, e));
	}
};
function lt(e, t, n) {
	let r = st(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ F(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => ut(a.next(), n), i !== dt[t] && Object.defineProperties(e, {
				return: { get() {
					let e = a.return;
					return typeof e == "function" ? e.bind(a) : e;
				} },
				throw: { get() {
					let e = a.throw;
					return typeof e == "function" ? e.bind(a) : e;
				} }
			}), e;
		}
		a._next = a.next, a.next = () => ut(a._next(), n);
	}
	return a;
}
function ut(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var dt = Array.prototype;
function N(e, t, n, r, i, a) {
	let o = st(e), s = o !== e && !/* @__PURE__ */ F(e), c = o[t];
	if (c !== dt[t]) {
		let t = c.apply(e, a);
		return s ? L(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, M(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function ft(e, t, n, r) {
	let i = st(e), a = i !== e && !/* @__PURE__ */ F(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = M(e, t)), n.call(this, t, M(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? M(e, c) : c;
}
function pt(e, t, n) {
	let r = /* @__PURE__ */ I(e);
	A(r, "iterate", it);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Ut(n[0]) ? (n[0] = /* @__PURE__ */ I(n[0]), r[t](...n)) : i;
}
function mt(e, t, n = []) {
	Ue();
	let r = k(), i = (/* @__PURE__ */ I(e))[t].apply(e, n);
	return k(r), We(), i;
}
var ht = /*@__PURE__*/ e("__proto__,__v_isRef,__isVue"), gt = new Set(/*@__PURE__*/ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(v));
function _t(e) {
	v(e) || (e = String(e));
	let t = /* @__PURE__ */ I(this);
	return A(t, "has", e), t.hasOwnProperty(e);
}
var vt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? It : Ft : i ? Pt : Nt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = f(e);
		if (!r) {
			let e;
			if (a && (e = ct[t])) return e;
			if (t === "hasOwnProperty") return _t;
		}
		let o = /* @__PURE__ */ R(e), s = Reflect.get(e, t, o ? e : n);
		if (o && t !== "value" || (v(t) ? gt.has(t) : ht(t)) || (r || A(e, "get", t), i)) return s;
		if (/* @__PURE__ */ R(s)) {
			let e = a && re(t) ? s : s.value;
			return r && y(e) ? /* @__PURE__ */ Bt(e) : e;
		}
		return y(s) ? r ? /* @__PURE__ */ Bt(s) : /* @__PURE__ */ Rt(s) : s;
	}
}, yt = class extends vt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = f(e) && re(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ P(i);
			if (!/* @__PURE__ */ F(n) && !/* @__PURE__ */ P(n) && (i = /* @__PURE__ */ I(i), n = /* @__PURE__ */ I(n)), !a && /* @__PURE__ */ R(i) && !/* @__PURE__ */ R(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : d(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ R(e) ? e : r);
		return e === /* @__PURE__ */ I(r) && s && (o ? T(n, i) && j(e, "set", t, n, i) : j(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = d(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && j(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return v(t) && gt.has(t) || A(e, "has", t), n;
	}
	ownKeys(e) {
		return A(e, "iterate", f(e) ? "length" : nt), Reflect.ownKeys(e);
	}
}, bt = class extends vt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, xt = /*@__PURE__*/ new yt(), St = /*@__PURE__*/ new bt(), Ct = /*@__PURE__*/ new yt(!0), wt = (e) => e, Tt = (e) => Reflect.getPrototypeOf(e);
function Et(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ I(i), o = p(a), s = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? wt : t ? Gt : L;
		return !t && A(a, "iterate", l ? rt : nt), c(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function Dt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Ot(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ I(r), a = /* @__PURE__ */ I(n);
			e || (T(n, a) && A(i, "get", n), A(i, "get", a));
			let { has: o } = Tt(i), s = t ? wt : e ? Gt : L;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && A(/* @__PURE__ */ I(t), "iterate", nt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ I(n), i = /* @__PURE__ */ I(t);
			return e || (T(t, i) && A(r, "has", t), A(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ I(a), s = t ? wt : e ? Gt : L;
			return !e && A(o, "iterate", nt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return c(n, e ? {
		add: Dt("add"),
		set: Dt("set"),
		delete: Dt("delete"),
		clear: Dt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ I(this), r = Tt(n), i = /* @__PURE__ */ I(e), a = !t && !/* @__PURE__ */ F(e) && !/* @__PURE__ */ P(e) ? i : e;
			return r.has.call(n, a) || T(e, a) && r.has.call(n, e) || T(i, a) && r.has.call(n, i) || (n.add(a), j(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ F(n) || /* @__PURE__ */ P(n) || (n = /* @__PURE__ */ I(n));
			let r = /* @__PURE__ */ I(this), { has: i, get: a } = Tt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ I(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? T(n, s) && j(r, "set", e, n, s) : j(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ I(this), { has: n, get: r } = Tt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ I(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && j(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ I(this), t = e.size !== 0, n = e.clear();
			return t && j(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Et(r, e, t);
	}), n;
}
function kt(e, t) {
	let n = Ot(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(d(n, i) && i in r ? n : r, i, a);
}
var At = { get: /*@__PURE__*/ kt(!1, !1) }, jt = { get: /*@__PURE__*/ kt(!1, !0) }, Mt = { get: /*@__PURE__*/ kt(!0, !1) }, Nt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap();
function Lt(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
/*@__NO_SIDE_EFFECTS__*/
function Rt(e) {
	return /* @__PURE__ */ P(e) ? e : Vt(e, !1, xt, At, Nt);
}
/*@__NO_SIDE_EFFECTS__*/
function zt(e) {
	return Vt(e, !1, Ct, jt, Pt);
}
/*@__NO_SIDE_EFFECTS__*/
function Bt(e) {
	return Vt(e, !0, St, Mt, Ft);
}
function Vt(e, t, n, r, i) {
	if (!y(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Lt(te(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
/*@__NO_SIDE_EFFECTS__*/
function Ht(e) {
	return /* @__PURE__ */ P(e) ? /* @__PURE__ */ Ht(e.__v_raw) : !!(e && e.__v_isReactive);
}
/*@__NO_SIDE_EFFECTS__*/
function P(e) {
	return !!(e && e.__v_isReadonly);
}
/*@__NO_SIDE_EFFECTS__*/
function F(e) {
	return !!(e && e.__v_isShallow);
}
/*@__NO_SIDE_EFFECTS__*/
function Ut(e) {
	return e ? !!e.__v_raw : !1;
}
/*@__NO_SIDE_EFFECTS__*/
function I(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ I(t) : e;
}
function Wt(e) {
	return !d(e, "__v_skip") && Object.isExtensible(e) && fe(e, "__v_skip", !0), e;
}
var L = (e) => y(e) ? /* @__PURE__ */ Rt(e) : e, Gt = (e) => y(e) ? /* @__PURE__ */ Bt(e) : e;
/*@__NO_SIDE_EFFECTS__*/
function R(e) {
	return e ? e.__v_isRef === !0 : !1;
}
/*@__NO_SIDE_EFFECTS__*/
function Kt(e) {
	return Jt(e, L);
}
/*@__NO_SIDE_EFFECTS__*/
function qt(e) {
	return Jt(e);
}
function Jt(e, t) {
	return /* @__PURE__ */ R(e) ? e : new Yt(e, t);
}
var Yt = class {
	constructor(e, t) {
		this.subs = void 0, this.subsTail = void 0, this.flags = 1, this.__v_isRef = !0, this.__v_isShallow = !1, this._oldValue = this._rawValue = t ? /* @__PURE__ */ I(e) : e, this._value = t ? t(e) : e, this._wrap = t, this.__v_isShallow = !t;
	}
	get dep() {
		return this;
	}
	get value() {
		if (Xt(this), this.flags & 16 && this.update()) {
			let e = this.subs;
			e !== void 0 && Qe(e);
		}
		return this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ F(e) || /* @__PURE__ */ P(e);
		if (e = n ? e : /* @__PURE__ */ I(e), T(e, t)) {
			this.flags |= 16, this._rawValue = e, this._value = !n && this._wrap ? this._wrap(e) : e;
			let t = this.subs;
			t !== void 0 && (qe(t), Ie || Xe());
		}
	}
	update() {
		return this.flags &= -17, T(this._oldValue, this._oldValue = this._rawValue);
	}
};
function Xt(e) {
	O !== void 0 && Ge(e, O);
}
function Zt(e) {
	return /* @__PURE__ */ R(e) ? e.value : e;
}
function Qt(e) {
	return g(e) ? e() : Zt(e);
}
var $t = {
	get: (e, t, n) => t === "__v_raw" ? e : Zt(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ R(i) && !/* @__PURE__ */ R(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function en(e) {
	return /* @__PURE__ */ Ht(e) ? e : new Proxy(e, $t);
}
var tn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = v(t) ? t : String(t), this._raw = /* @__PURE__ */ I(e);
		let r = !0, i = e;
		if (!f(e) || v(this._key) || !re(this._key)) do
			r = !/* @__PURE__ */ Ut(i) || /* @__PURE__ */ F(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = Zt(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ R(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ R(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return at(this._raw, this._key);
	}
}, nn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
/*@__NO_SIDE_EFFECTS__*/
function rn(e, t, n) {
	return /* @__PURE__ */ R(e) ? e : g(e) ? new nn(e) : y(e) && arguments.length > 1 ? an(e, t, n) : /* @__PURE__ */ Kt(e);
}
function an(e, t, n) {
	return new tn(e, t, n);
}
var on = class {
	fn() {}
	constructor(e) {
		this.deps = void 0, this.depsTail = void 0, this.subs = void 0, this.subsTail = void 0, this.flags = 18, this.cleanups = [], this.cleanupsLength = 0, e !== void 0 && (this.fn = e), z && Ge(this, z);
	}
	get active() {
		return !(this.flags & 1024);
	}
	pause() {
		this.flags |= 256;
	}
	resume() {
		(this.flags &= -257) & 48 && this.notify();
	}
	notify() {
		!(this.flags & 256) && this.dirty && this.run();
	}
	run() {
		if (!this.active) return this.fn();
		sn(this);
		let e = Je(this);
		Re();
		try {
			return this.fn();
		} finally {
			ze(), Ye(this, e);
			let t = this.flags;
			(t & 136) == 136 && (this.flags = t & -9, this.notify());
		}
	}
	stop() {
		if (!this.active) return;
		this.flags = 1024;
		let e = this.deps;
		for (; e !== void 0;) e = Ke(e, this);
		let t = this.subs;
		t !== void 0 && Ke(t), sn(this);
	}
	get dirty() {
		let e = this.flags;
		if (e & 16) return !0;
		if (e & 32) {
			if (Ze(this.deps, this)) return this.flags = e | 16, !0;
			this.flags = e & -33;
		}
		return !1;
	}
};
function sn(e) {
	let t = e.cleanupsLength;
	if (t) {
		for (let n = 0; n < t; n++) e.cleanups[n]();
		e.cleanupsLength = 0;
	}
}
var z, cn = class {
	constructor(e = !1) {
		this.deps = void 0, this.depsTail = void 0, this.subs = void 0, this.subsTail = void 0, this.flags = 0, this.cleanups = [], this.cleanupsLength = 0, !e && z && Ge(this, z);
	}
	get active() {
		return !(this.flags & 1024);
	}
	pause() {
		if (!(this.flags & 256)) {
			this.flags |= 256;
			for (let e = this.deps; e !== void 0; e = e.nextDep) {
				let t = e.dep;
				"pause" in t && t.pause();
			}
		}
	}
	resume() {
		let e = this.flags;
		if (e & 256) {
			this.flags = e & -257;
			for (let e = this.deps; e !== void 0; e = e.nextDep) {
				let t = e.dep;
				"resume" in t && t.resume();
			}
		}
	}
	run(e) {
		let t = z;
		try {
			return z = this, e();
		} finally {
			z = t;
		}
	}
	stop() {
		if (!this.active) return;
		this.flags = 1024, this.reset();
		let e = this.subs;
		e !== void 0 && Ke(e);
	}
	reset() {
		let e = this.deps;
		for (; e !== void 0;) {
			let t = e.dep;
			"stop" in t ? (e = e.nextDep, t.stop()) : e = Ke(e, this);
		}
		sn(this);
	}
};
function ln(e) {
	try {
		return z;
	} finally {
		z = e;
	}
}
var un = class {
	get effect() {
		return this;
	}
	get dep() {
		return this;
	}
	get _dirty() {
		let e = this.flags;
		if (e & 16) return !0;
		if (e & 32) {
			if (Ze(this.deps, this)) return this.flags = e | 16, !0;
			this.flags = e & -33;
		}
		return !1;
	}
	set _dirty(e) {
		e ? this.flags |= 16 : this.flags &= -49;
	}
	constructor(e, t) {
		this.fn = e, this.setter = t, this._value = void 0, this.subs = void 0, this.subsTail = void 0, this.deps = void 0, this.depsTail = void 0, this.flags = 17, this.__v_isRef = !0, this.__v_isReadonly = !t;
	}
	get value() {
		let e = this.flags;
		if (e & 16 || e & 32 && Ze(this.deps, this)) {
			if (this.update()) {
				let e = this.subs;
				e !== void 0 && Qe(e);
			}
		} else e & 32 && (this.flags = e & -33);
		return O === void 0 ? z !== void 0 && Ge(this, z) : Ge(this, O), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
	update() {
		let e = Je(this);
		try {
			let e = this._value, t = this.fn(e);
			return T(e, t) ? (this._value = t, !0) : !1;
		} finally {
			Ye(this, e);
		}
	}
};
/*@__NO_SIDE_EFFECTS__*/
function dn(e, t, n = !1) {
	let r, i;
	return g(e) ? r = e : (r = e.get, i = e.set), new un(r, i);
}
var fn = {}, pn = void 0;
function mn(e, t = !1, n = pn) {
	if (n) {
		let { call: t } = n.options, r = t ? () => t(e, 4) : e;
		n.cb ? (n.cbCleanups ||= []).push(r) : n.cleanups[n.cleanupsLength++] = r;
	}
}
var hn = class extends on {
	constructor(e, n, i = t) {
		let { deep: a, once: o, call: s, onWarn: c } = i, l, u = !1, d = !1;
		if (/* @__PURE__ */ R(e) ? (l = () => e.value, u = /* @__PURE__ */ F(e)) : /* @__PURE__ */ Ht(e) ? (l = () => gn(e, a), u = !0) : f(e) ? (d = !0, u = e.some((e) => /* @__PURE__ */ Ht(e) || /* @__PURE__ */ F(e)), l = () => e.map((e) => {
			if (/* @__PURE__ */ R(e)) return e.value;
			if (/* @__PURE__ */ Ht(e)) return gn(e, a);
			if (g(e)) return s ? s(e, 2) : e();
		})) : l = g(e) ? n ? s ? () => s(e, 2) : e : () => {
			if (this.cleanupsLength) {
				let e = k();
				try {
					sn(this);
				} finally {
					k(e);
				}
			}
			let t = pn;
			pn = this;
			try {
				return s ? s(e, 3, [this.boundCleanup]) : e(this.boundCleanup);
			} finally {
				pn = t;
			}
		} : r, n && a) {
			let e = l, t = a === !0 ? Infinity : a;
			l = () => B(e(), t);
		}
		if (super(l), this.cb = n, this.options = i, this.boundCleanup = (e) => mn(e, !1, this), this.forceTrigger = u, this.isMultiSource = d, o && n) {
			let e = n;
			n = (...t) => {
				try {
					return e(...t);
				} finally {
					this.stop();
				}
			};
		}
		this.cb = n, this.oldValue = d ? Array(e.length).fill(fn) : fn;
	}
	cleanupCallback() {
		let e = this.cbCleanups;
		if (e) {
			this.cbCleanups = void 0;
			for (let t = 0, n = e.length; t < n; t++) e[t]();
		}
	}
	stop() {
		this.active && (super.stop(), this.cleanupCallback());
	}
	run(e = !1) {
		let t = this.oldValue, n = this.oldValue = super.run();
		if (!this.cb) return;
		let { immediate: r, deep: i, call: a } = this.options;
		if ((!e || r) && (e || i || this.forceTrigger || (this.isMultiSource ? n.some((e, n) => T(e, t[n])) : T(n, t)))) {
			let e = pn, r = k();
			try {
				this.cleanupCallback(), pn = this;
				let e = [
					n,
					t === fn ? void 0 : this.isMultiSource && t[0] === fn ? [] : t,
					this.boundCleanup
				];
				a ? a(this.cb, 3, e) : this.cb(...e);
			} finally {
				pn = e, k(r);
			}
		}
	}
};
function gn(e, t) {
	return t ? e : /* @__PURE__ */ F(e) || t === !1 || t === 0 ? B(e, 1) : B(e);
}
function B(e, t = Infinity, n) {
	if (t <= 0 || !y(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ R(e)) B(e.value, t, n);
	else if (f(e)) for (let r = 0; r < e.length; r++) B(e[r], t, n);
	else if (m(e) || p(e)) e.forEach((e) => {
		B(e, t, n);
	});
	else if (ne(e)) {
		for (let r in e) B(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && B(e[r], t, n);
	}
	return e;
}
// node_modules/.pnpm/@vue+runtime-core@3.6.0-rc.13/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function _n(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		vn(e, t, n);
	}
}
function V(e, t, n, r) {
	if (g(e)) {
		let i = _n(e, t, n, r);
		return i && b(i) && i.catch((e) => {
			vn(e, t, n);
		}), i;
	}
	if (f(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(V(e[a], t, n, r));
		return i;
	}
}
function vn(e, n, r, i = !0) {
	let { errorHandler: a, throwUnhandledErrorInProduction: o } = n && n.appContext.config || t;
	if (n) {
		let t = n.parent, i = n.proxy || n, o = `https://vuejs.org/error-reference/#runtime-${r}`;
		for (; t;) {
			let n = t.ec;
			if (n) {
				for (let t = 0; t < n.length; t++) if (n[t](e, i, o) === !1) return;
			}
			t = t.parent;
		}
		if (a) {
			let t = k();
			_n(a, null, 10, [
				e,
				i,
				o
			]), k(t);
			return;
		}
	}
	yn(e, r, n, i, o);
}
function yn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var bn = [], H = [], U = null, xn = null, W = 0, G = 0, Sn = 0, Cn = /*@__PURE__*/ Promise.resolve();
function wn(e) {
	let t = xn || Cn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Tn(e, t, n, r) {
	for (; n < r;) {
		let i = n + r >>> 1;
		t[i].order <= e ? n = i + 1 : r = i;
	}
	return n;
}
function En(e, t, n = !1, r = 0) {
	Dn(e, t === void 0 ? n ? -2 : Infinity : n ? t * 2 : r ? t * 2 + 1 + r / (r + 1) : t * 2 + 1, bn, W, G) && (W++, kn());
}
function Dn(e, t, n, r, i) {
	let a = e.flags;
	return a & 1 ? !1 : (e.flags = a | 1, e.order = t, i === r || t >= n[r - 1].order ? n[r] = e : n.splice(Tn(t, n, i, r), 0, e), !0);
}
var On = () => {
	try {
		Fn();
	} catch (e) {
		throw xn = null, (W || H.length) && kn(), e;
	}
};
function kn() {
	xn ||= Cn.then(On);
}
function An(e, t = Infinity) {
	if (!f(e)) U && t === -1 ? U.splice(Sn, 0, e) : Dn(e, t, H, H.length, 0);
	else for (let n = 0; n < e.length; n++) Dn(e[n], t, H, H.length, 0);
	kn();
}
function jn(e, t, n) {
	for (let n = G; n < W; n++) {
		let r = bn[n];
		if (!(r.order & 1 || r.order === Infinity) && !(e && r.order !== e.uid * 2 || t !== void 0 && !(r.order >= t * 2))) {
			bn.splice(n, 1), n = e ? n - 1 : G - 1, W--, r.flags & 2 && (r.flags &= -2);
			try {
				r();
			} finally {
				r.flags & 2 || (r.flags &= -2);
			}
		}
	}
}
function Mn(e, t, n = 0) {
	if (H.length) {
		let e = H;
		if (t) {
			e = [];
			let r = 0;
			for (let i = 0; i < H.length; i++) {
				let a = H[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? H[r++] = a : e.push(a);
			}
			H.length = r;
		} else H = [];
		if (U) {
			for (let t = 0; t < e.length; t++) U.push(e[t]);
			return;
		}
		U = e;
		try {
			for (; Sn < U.length;) {
				let e = U[Sn++];
				if (e.flags & 2 && (e.flags &= -2), !(e.flags & 4)) try {
					e();
				} finally {
					e.flags & 2 || (e.flags &= -2);
				}
			}
		} finally {
			for (; Sn < U.length;) U[Sn++].flags &= -2;
			U = null, Sn = 0;
		}
	}
}
var Nn = !1;
function Pn(e, t) {
	if (Nn) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(H);
	e(), Nn = !0;
	try {
		jn(void 0, t), Mn(void 0, n, t);
	} finally {
		Nn = !1;
	}
}
function Fn(e) {
	try {
		for (; G < W;) {
			let e = bn[G];
			if (bn[G++] = void 0, !(e.flags & 4)) {
				e.flags & 2 && (e.flags &= -2);
				try {
					e();
				} catch (t) {
					vn(t, e.i, e.i ? 15 : 14);
				} finally {
					e.flags & 2 || (e.flags &= -2);
				}
			}
		}
	} finally {
		for (; G < W;) bn[G].flags &= -2, bn[G++] = void 0;
		G = 0, W = 0, bn.length = 0, Mn(e), W || H.length ? Fn(e) : xn = null;
	}
}
var K = null, In = null;
function Ln(e) {
	let t = K;
	return K = e, In = e && e.type.__scopeId || null, t;
}
function Rn(e, t = K, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && sa(-1);
		let i = Ln(t), a = ra.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = ra.length; e > a; e--) aa();
			Ln(i), r._d && sa(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function zn(e, n) {
	if (K === null) return e;
	let r = Ha(K), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (g(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && B(o), i.push({
			dir: a,
			instance: r,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function Bn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		if (c) {
			let r = k();
			V(c, n, 8, [
				e.el,
				s,
				e,
				t
			]), k(r);
		}
	}
}
function Vn(e, t) {
	if ($) {
		let n = $.provides, r = $.parent && $.parent.provides;
		r === n && (n = $.provides = Object.create(r)), n[e] = t;
	}
}
function Hn(e, t, n = !1) {
	let r = wa();
	if (r || ei) {
		let i = ei ? ei._context.provides : r ? r.parent == null || r.ce ? r.appContext && r.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && g(t) ? t.call(r && r.proxy) : t;
	}
}
var Un = Symbol.for("v-scx"), Wn = () => Hn(Un);
function Gn(e, t, n) {
	return qn(e, t, n);
}
var Kn = class extends hn {
	constructor(e, t, n, r, i) {
		super(t, n, r), this.flush = i;
		let a = () => {
			this.dirty && this.run();
		};
		n && (this.flags |= 128, a.flags |= 2), a.i = e, this.job = a;
	}
	notify() {
		if (!(this.flags & 256)) {
			let e = this.flush, t = this.job;
			e === "post" ? J(t, void 0, t.i ? t.i.suspense : null) : e === "pre" ? En(t, t.i ? t.i.uid : void 0, !0) : t();
		}
	}
};
function qn(e, n, i = t) {
	let { immediate: a, deep: o, flush: s = "pre", once: l } = i, u = c({}, i), d = n && a || !n && s !== "post", f;
	if (Ta) {
		if (s === "sync") {
			let e = Wn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = $;
	u.call = (e, t, n) => V(e, p, t, n);
	let m = new Kn(p, e, n, u, s);
	n ? m.run(!0) : s === "post" ? J(m.job, void 0, p && p.suspense) : m.run(!0);
	let h = m.stop.bind(m);
	return h.pause = m.pause.bind(m), h.resume = m.resume.bind(m), h.stop = h, Ta && (f ? f.push(h) : d && h()), h;
}
function Jn(e, t, n) {
	let r = this.proxy, i = _(e) ? e.includes(".") ? Yn(r, e) : () => r[e] : e.bind(r, r), a;
	g(t) ? a = t : (a = t.handler, n = t);
	let o = Oa(this), s = qn(i, a.bind(r), n);
	return ka(o), s;
}
function Yn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Xn = !1, Zn = Symbol("_vte"), Qn = (e) => e.__isTeleport, $n = Symbol("_leaveCb");
function er(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== ea) {
			t = n;
			break;
		}
	}
	return t;
}
function tr(e) {
	if (!pr(e)) return Qn(e.type) && e.children ? er(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && g(n.default)) return n.default();
	}
}
function nr(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		if (e.transition = t, 1) {
			let n = e.component.subTree;
			return nr(Qn(n.type) && tr(n) || n, t);
		}
	} else if (e.shapeFlag & 128) {
		let n = e.ssContent.transition = t.clone(e.ssContent), r = e.ssFallback.transition = t.clone(e.ssFallback);
		return e.suspense && e.suspense.activeBranch === e.ssFallback ? r : n;
	} else if (e.transition = t, e.type === Y && f(e.children)) {
		let n = li(e.children, !1);
		n && nr(n, t);
	}
	return t;
}
function rr(e) {
	if (e.component) return rr(e.component.subTree);
	if (e.type === Y) {
		let t = f(e.children) && li(e.children, !1);
		return t ? rr(t) : void 0;
	}
	if (e.type !== ea) return e;
}
/*@__NO_SIDE_EFFECTS__*/
function ir(e, t) {
	return g(e) ? /* @__PURE__ */ c({ name: e.name }, t, { setup: e }) : e;
}
function ar(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function or(e) {
	let n = wa(), r = /* @__PURE__ */ qt(null);
	if (n) {
		let i = n.refs === t ? n.refs = {} : n.refs;
		Object.defineProperty(i, e, {
			enumerable: !0,
			get: () => r.value,
			set: (e) => r.value = e
		});
	}
	return r;
}
function sr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var cr = /* @__PURE__ */ new WeakMap();
function lr(e, n, r, i, a = !1) {
	if (f(e)) {
		e.forEach((e, t) => lr(e, n && (f(n) ? n[t] : n), r, i, a));
		return;
	}
	if (fr(i) && !a) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && lr(e, n, r, i.component.subTree);
		return;
	}
	let o = i.shapeFlag & 4 ? Ha(i.component) : i.el, s = a ? null : o, { i: c, r: u } = e, d = n && n.r, p = c.refs === t ? c.refs = {} : c.refs, m = c.setupState, h = ur(m, p), v = (e, t) => !(t && sr(p, t));
	if (d != null && d !== u) {
		if (dr(n), _(d)) p[d] = null, h(d) && (m[d] = null);
		else if (/* @__PURE__ */ R(d)) {
			let e = n;
			v(d, e.k) && (d.value = null), e.k && (p[e.k] = null);
		}
	}
	if (g(u)) _n(u, c, 12, [s, p]);
	else {
		let t = _(u), n = /* @__PURE__ */ R(u);
		if (t || n) {
			let i = () => {
				if (e.f) {
					let n = t ? h(u) ? m[u] : p[u] : v(u) || !e.k ? u.value : p[e.k];
					if (a) f(n) && l(n, o);
					else if (f(n)) n.includes(o) || n.push(o);
					else if (t) p[u] = [o], h(u) && (m[u] = p[u]);
					else {
						let t = [o];
						v(u, e.k) && (u.value = t), e.k && (p[e.k] = t);
					}
				} else t ? (p[u] = s, h(u) && (m[u] = s)) : n && (v(u, e.k) && (u.value = s), e.k && (p[e.k] = s));
			};
			if (s) {
				let t = () => {
					i(), cr.delete(e);
				};
				cr.set(e, t), J(t, -1, r);
			} else dr(e), i();
		}
	}
}
function ur(e, n) {
	let r = /* @__PURE__ */ I(e);
	return e === void 0 || e === t ? i : (e) => !sr(n, e) && d(r, e);
}
function dr(e) {
	let t = cr.get(e);
	t && (t.flags |= 4, cr.delete(e));
}
var fr = (e) => !!e.type.__asyncLoader, pr = (e) => e.type.__isKeepAlive;
function mr(e, t) {
	gr(e, "a", t);
}
function hr(e, t) {
	gr(e, "da", t);
}
function gr(e, t, n = wa()) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (vr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) {
			let i = e.parent;
			pr(i.vapor ? i : i.vnode) && _r(r, t, n, e), e = e.parent;
		}
	}
}
function _r(e, t, n, r) {
	let i = vr(t, e, r, !0);
	Tr(() => {
		l(r[t], i);
	}, n);
}
function vr(e, t, n = $, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			let i = k(), a = Oa(n);
			try {
				return V(t, n, e, r);
			} finally {
				ka(a), k(i);
			}
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var yr = /* @__NO_SIDE_EFFECTS__ */ (e) => (t, n = $) => {
	Ta && e !== "sp" || vr(e, (...e) => t(...e), n);
}, br = /* @__PURE__ */ yr("bm"), xr = /* @__PURE__ */ yr("m"), Sr = /* @__PURE__ */ yr("bu"), Cr = /* @__PURE__ */ yr("u"), wr = /* @__PURE__ */ yr("bum"), Tr = /* @__PURE__ */ yr("um"), Er = /* @__PURE__ */ yr("sp"), Dr = /* @__PURE__ */ yr("rtg"), Or = /* @__PURE__ */ yr("rtc");
function kr(e, t = $) {
	vr("ec", e, t);
}
var Ar = Symbol.for("v-ndc"), jr = (e) => !e || e.vapor ? null : Pa(e) ? Ha(e) : jr(e.parent), Mr, Nr = () => (Mr ||= c(Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => jr(e.parent),
	$root: (e) => jr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Hr(e),
	$forceUpdate: (e) => e.f ||= () => {
		En(e.update);
	},
	$nextTick: (e) => e.n ||= wn.bind(e.proxy),
	$watch: (e) => Jn.bind(e)
}), Mr), Pr = (e, n) => e !== t && !e.__isScriptSetup && d(e, n), Fr = {
	get({ _: e }, n) {
		if (n === "__v_skip") return !0;
		let { ctx: r, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (n[0] !== "$") {
			let e = s[n];
			if (e !== void 0) switch (e) {
				case 1: return i[n];
				case 2: return a[n];
				case 4: return r[n];
				case 3: return o[n];
			}
			else if (Pr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && d(a, n)) return s[n] = 2, a[n];
			else if (d(o, n)) return s[n] = 3, o[n];
			else if (r !== t && d(r, n)) return s[n] = 4, r[n];
			else Lr && (s[n] = 0);
		}
		let u = Nr()[n], f, p;
		if (u) return n === "$attrs" && A(e.attrs, "get", ""), u(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && d(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, d(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Pr(a, n) ? (a[n] = r, !0) : i !== t && d(i, n) ? (i[n] = r, !0) : d(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && d(e, c) || Pr(n, c) || d(o, c) || d(i, c) || d(Nr(), c) || d(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? d(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Ir(e) {
	return f(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Lr = !0;
function Rr(e) {
	let t = Hr(e), n = e.proxy, i = e.ctx;
	Lr = !1, t.beforeCreate && Br(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: p, mounted: m, beforeUpdate: h, updated: _, activated: v, deactivated: b, beforeDestroy: ee, beforeUnmount: x, destroyed: te, unmounted: ne, render: re, renderTracked: ie, renderTriggered: ae, errorCaptured: oe, serverPrefetch: se, expose: S, inheritAttrs: ce, components: C, directives: le, filters: ue } = t;
	if (u && zr(u, i, null), s) for (let e in s) {
		let t = s[e];
		g(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		y(t) && (e.data = /* @__PURE__ */ Rt(t));
	}
	if (Lr = !0, o) for (let e in o) {
		let t = o[e], a = Wa({
			get: g(t) ? t.bind(n, n) : g(t.get) ? t.get.bind(n, n) : r,
			set: !g(t) && g(t.set) ? t.set.bind(n) : r
		});
		Object.defineProperty(i, e, {
			enumerable: !0,
			configurable: !0,
			get: () => a.value,
			set: (e) => a.value = e
		});
	}
	if (c) for (let e in c) Vr(c[e], i, n, e);
	if (l) {
		let e = g(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Vn(t, e[t]);
		});
	}
	d && Br(d, e, "c");
	function w(e, t) {
		f(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (w(br, p), w(xr, m), w(Sr, h), w(Cr, _), w(mr, v), w(hr, b), w(kr, oe), w(Or, ie), w(Dr, ae), w(wr, x), w(Tr, ne), w(Er, se), f(S)) {
		if (S.length) {
			let t = e.exposed ||= {};
			S.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed ||= {};
	}
	re && e.render === r && (e.render = re), ce != null && (e.inheritAttrs = ce), C && (e.components = C), le && (e.directives = le), se && ar(e);
}
function zr(e, t, n = r) {
	f(e) && (e = qr(e));
	for (let n in e) {
		let r = e[n], i;
		i = y(r) ? "default" in r ? Hn(r.from || n, r.default, !0) : Hn(r.from || n) : Hn(r), /* @__PURE__ */ R(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Br(e, t, n) {
	V(f(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Vr(e, t, n, r) {
	let i = r.includes(".") ? Yn(n, r) : () => n[r];
	if (_(e)) {
		let n = t[e];
		g(n) && Gn(i, n);
	} else if (g(e)) Gn(i, e.bind(n));
	else if (y(e)) {
		if (f(e)) e.forEach((e) => Vr(e, t, n, r));
		else {
			let r = g(e.handler) ? e.handler.bind(n) : t[e.handler];
			g(r) && Gn(i, r, e);
		}
	}
}
function Hr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Ur(c, e, o, !0)), Ur(c, t, o)), y(t) && a.set(t, c), c;
}
function Ur(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Ur(e, a, n, !0), i && i.forEach((t) => Ur(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Wr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Wr = {
	data: Gr,
	props: Yr,
	emits: Yr,
	methods: Jr,
	computed: Jr,
	beforeCreate: q,
	created: q,
	beforeMount: q,
	mounted: q,
	beforeUpdate: q,
	updated: q,
	beforeDestroy: q,
	beforeUnmount: q,
	destroyed: q,
	unmounted: q,
	activated: q,
	deactivated: q,
	errorCaptured: q,
	serverPrefetch: q,
	components: Jr,
	directives: Jr,
	watch: Xr,
	provide: Gr,
	inject: Kr
};
function Gr(e, t) {
	return t ? e ? function() {
		return c(g(e) ? e.call(this, this) : e, g(t) ? t.call(this, this) : t);
	} : t : e;
}
function Kr(e, t) {
	return Jr(qr(e), qr(t));
}
function qr(e) {
	if (f(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function q(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Jr(e, t) {
	return e ? c(Object.create(null), e, t) : t;
}
function Yr(e, t) {
	return e ? f(e) && f(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : c(Object.create(null), Ir(e), Ir(t ?? {})) : t;
}
function Xr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = c(Object.create(null), e);
	for (let r in t) n[r] = q(e[r], t[r]);
	return n;
}
function Zr() {
	return {
		app: null,
		config: {
			isNativeTag: i,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var Qr = 0;
function $r(e, t, n, r) {
	return function(r, i = null) {
		g(r) || (r = c({}, r)), i != null && !y(i) && (i = null);
		let a = Zr(), o = /* @__PURE__ */ new WeakSet(), s = [], l = !1, u = a.app = {
			_uid: Qr++,
			_component: r,
			_props: i,
			_container: null,
			_context: a,
			_instance: null,
			version: Ga,
			get config() {
				return a.config;
			},
			set config(e) {},
			use(e, ...t) {
				return o.has(e) || (e && g(e.install) ? (o.add(e), e.install(u, ...t)) : g(e) && (o.add(e), e(u, ...t))), u;
			},
			mixin(e) {
				return a.mixins.includes(e) || a.mixins.push(e), u;
			},
			component(e, t) {
				return t ? (a.components[e] = t, u) : a.components[e];
			},
			directive(e, t) {
				return t ? (a.directives[e] = t, u) : a.directives[e];
			},
			mount(t, r, i) {
				if (!l) {
					let a = e(u, t, r, i);
					return l = !0, u._container = t, t.__vue_app__ = u, n(a);
				}
			},
			onUnmount(e) {
				s.push(e);
			},
			unmount() {
				l && (V(s, u._instance, 16), t(u), delete u._container.__vue_app__);
			},
			provide(e, t) {
				return a.provides[e] = t, u;
			},
			runWithContext(e) {
				let t = ei;
				ei = u;
				try {
					return e();
				} finally {
					ei = t;
				}
			}
		};
		return u;
	};
}
var ei = null, ti = (e, t, n) => n(e, w(t)) || n(e, `${S(t)}Modifiers`) || n(e, `${C(t)}Modifiers`);
function ni(e, n, ...r) {
	return ri(e, e.vnode.props || t, ii, n, ...r);
}
function ri(e, t, n, r, ...i) {
	if (e.isUnmounted) return;
	let a = i, o = r.startsWith("update:"), s = o && ti(t, r.slice(7), n);
	s && (s.trim && (a = i.map((e) => _(e) ? e.trim() : e)), s.number && (a = a.map(pe)));
	let c, l = n(t, c = ue(r)) || n(t, c = ue(S(r)));
	!l && o && (l = n(t, c = ue(C(r)))), l && V(l, e, 6, a);
	let u = n(t, c + "Once");
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, V(u, e, 6, a);
	}
}
function ii(e, t) {
	return e[t];
}
var ai = /* @__PURE__ */ new WeakMap();
function oi(e, t, n = !1) {
	let r = n ? ai : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!g(e)) {
		let r = (e) => {
			let n = oi(e, t, !0);
			n && (s = !0, c(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (y(e) && r.set(e, null), null) : (f(a) ? a.forEach((e) => o[e] = null) : c(o, a), y(e) && r.set(e, o), o);
}
function si(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), d(e, t[0].toLowerCase() + t.slice(1)) || d(e, C(t)) || d(e, t));
}
function ci(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Ln(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Z(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = Z(e.length > 1 ? e(f, {
				attrs: c,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? c : di(c);
		}
	} catch (t) {
		ra.length = 0, vn(t, e, 1), v = ha(ea);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(s) && (y = fi(y, a)), b = va(b, y, !1, !0));
	}
	return n.dirs && (b = va(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && nr(Qn(b.type) && tr(b) || b, n.transition), v = b, Ln(_), v;
}
function li(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (ua(r)) {
			if (r.type !== ea || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var ui = (e) => e === "class" || e === "style" || a(e), di = (e) => {
	let t;
	for (let n in e) ui(n) && ((t ||= {})[n] = e[n]);
	return t;
}, fi = (e, t) => {
	let n = {};
	for (let r in e) s(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function pi(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? mi(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (hi(o, r, n) && !si(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || mi(r, o, l) : !!o;
	return !1;
}
function mi(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!d(e, a) || hi(t, e, a) && !si(n, a)) return !0;
	}
	return !1;
}
function hi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && y(r) && y(i) ? !ke(r, i) : r !== i;
}
function gi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t && !t.vapor;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var _i = {}, vi = () => Object.create(_i), yi = (e) => Object.getPrototypeOf(e) === _i;
function bi(e, t, n, r = !1) {
	let i = e.props = {}, a = vi();
	e.propsDefaults = Object.create(null), Si(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ zt(i) : e.type.props ? i : a, e.attrs = a;
}
function xi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ I(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (si(e.emitsOptions, o)) continue;
				let s = t[o];
				if (c) {
					if (d(a, o)) s !== a[o] && (a[o] = s, l = !0);
					else {
						let t = S(o);
						i[t] = Ci(c, t, s, e, wi);
					}
				} else s !== a[o] && (a[o] = s, l = !0);
			}
		}
	} else {
		Si(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (d(t, a) || (r = C(a)) !== a && d(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Ci(c, a, void 0, e, wi, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && d(t, e) || (delete a[e], l = !0);
	}
	l && j(e.attrs, "set", "");
}
function Si(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (ie(t)) continue;
		let l = n[t], u;
		a && d(a, u = S(t)) ? !o || !o.includes(u) ? r[u] = l : (c ||= {})[u] = l : si(e.emitsOptions, t) || t in i && l === i[t] || (i[t] = l, s = !0);
	}
	if (o) {
		let n = c || t;
		for (let t = 0; t < o.length; t++) {
			let i = o[t];
			r[i] = Ci(a, i, n[i], e, wi, !d(n, i));
		}
	}
	return s;
}
function Ci(e, t, n, r, i, a = !1) {
	let o = e[t];
	if (o != null) {
		let e = d(o, "default");
		if (e && n === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && g(e)) {
				let a = r.propsDefaults ||= {};
				n = d(a, t) ? a[t] : a[t] = i(e, r, t);
			} else n = e;
			r.ce && r.ce._setProp(t, n);
		}
		o[0] && (a && !e ? n = !1 : o[1] && (n === "" || n === C(t)) && (n = !0));
	}
	return n;
}
function wi(e, t, n) {
	let r, i = Oa(t), a = /* @__PURE__ */ I(t.props);
	return r = e.call(null, a), ka(i), r;
}
var Ti = /* @__PURE__ */ new WeakMap();
function Ei(e, t, r = !1) {
	let i = r ? Ti : t.propsCache, a = i.get(e);
	if (a) return a;
	let o = e.props, s = {}, l = [], u = !1;
	if (!g(e)) {
		let n = (e) => {
			u = !0;
			let [n, r] = Ei(e, t, !0);
			c(s, n), r && l.push(...r);
		};
		!r && t.mixins.length && t.mixins.forEach(n), e.extends && n(e.extends), e.mixins && e.mixins.forEach(n);
	}
	if (!o && !u) return y(e) && i.set(e, n), n;
	Di(o, s, l);
	let d = [s, l];
	return y(e) && i.set(e, d), d;
}
function Di(e, n, r) {
	if (f(e)) for (let r = 0; r < e.length; r++) {
		let i = S(e[r]);
		Oi(i) && (n[i] = t);
	}
	else if (e) for (let t in e) {
		let i = S(t);
		if (Oi(i)) {
			let a = e[t], o = n[i] = f(a) || g(a) ? { type: a } : c({}, a), s = o.type, l = !1, u = !0;
			if (f(s)) for (let e = 0; e < s.length; ++e) {
				let t = s[e], n = g(t) && t.name;
				if (n === "Boolean") {
					l = !0;
					break;
				}
				n === "String" && (u = !1);
			}
			else l = g(s) && s.name === "Boolean";
			o[0] = l, o[1] = u, (l || d(o, "default")) && r.push(i);
		}
	}
}
function Oi(e) {
	return e[0] !== "$" && !ie(e);
}
var ki = (e) => e === "_" || e === "_ctx" || e === "$stable", Ai = (e) => f(e) ? e.map(Z) : [Z(e)], ji = (e, t, n) => {
	if (t._n) return t;
	let r = Rn((...e) => Ai(t(...e)), n);
	return r._c = !1, r;
}, Mi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (ki(n)) continue;
		let i = e[n];
		if (g(i)) t[n] = ji(n, i, r);
		else if (i != null) {
			let e = Ai(i);
			t[n] = () => e;
		}
	}
}, Ni = (e, t) => {
	let n = Ai(t);
	e.slots.default = () => n;
}, Pi = (e, t, n) => {
	for (let r in t) (n || !ki(r)) && (e[r] = t[r]);
}, Fi = (e, t, n) => {
	let r = e.slots = vi();
	if (e.vnode.shapeFlag & 32) {
		let i = t._;
		i ? (Pi(r, t, n), n && fe(r, "_", i, !0)) : Mi(t, r, e);
	} else t && Ni(e, t);
}, Ii = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let t = n._;
		t ? r && t === 1 ? o = !1 : Pi(a, n, r) : (o = !n.$stable, Mi(n, a, e)), s = n;
	} else n && (Ni(e, n), s = { default: 1 });
	if (o) for (let e in a) !ki(e) && s[e] == null && delete a[e];
}, Li = !1;
function Ri() {
	Li ||= !0;
}
var J = Qi;
function zi(e) {
	return Bi(e);
}
function Bi(e, i) {
	Ri();
	let a = ge();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !da(e, t) && (i = Se(e), D(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case $i:
				y(e, t, r, i);
				break;
			case ea:
				b(e, t, r, i);
				break;
			case ta:
				e ?? ee(t, r, i, s);
				break;
			case Y:
				C(e, t, r, i, a, o, s, c, l);
				break;
			case na: break;
			default: f & 1 ? ne(e, t, r, i, a, o, s, c, l) : f & 6 ? le(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, we);
		}
		d != null && a ? lr(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && lr(e.ref, null, o, e, !0);
	}, y = (e, t, n, r) => {
		if (e == null) o(t.el = u(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, r) => {
		e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
	}, ee = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, x = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, te = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, ne = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) re(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), se(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, re = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && oe(e.children, d, null, r, i, Vi(e, a), s, u), _ && Bn(e, null, r, "created"), ae(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ie(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Q(f, r, e);
		}
		_ && Bn(e, null, r, "beforeMount"), g ? qi(d, g, () => o(d, t, n), i) : o(d, t, n), ((f = m && m.onVnodeMounted) || _) && J(() => {
			try {
				f && Q(f, r, e), _ && Bn(e, null, r, "mounted");
			} finally {}
		}, void 0, i);
	}, ae = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		let a = Yi(t, i);
		for (let t = 0; t < a.length; t++) g(e, a[t]);
	}, oe = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? xa(e[l]) : Z(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, se = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Hi(r, !1), (g = h.onVnodeBeforeUpdate) && Q(g, r, n, e), f && Bn(n, e, r, "beforeUpdate"), r && Hi(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? S(e.dynamicChildren, d, l, r, i, Vi(n, a), o) : s || me(e, n, l, null, r, i, Vi(n, a), o, !1), u > 0) {
			if (u & 16) ce(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && ce(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && J(() => {
			g && Q(g, r, n, e), f && Bn(n, e, r, "updated");
		}, void 0, i);
	}, S = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || Xi(c), d = u && (c.type === Y || !da(c, l) || c.shapeFlag & 198) ? m(u) : n;
			v(c, l, d, null, r, i, a, o, !0);
		}
	}, ce = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !ie(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (ie(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, C = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), oe(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (S(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Wi(e, t, !0)) : me(e, t, n, f, i, a, s, c, l);
	}, le = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ue(t, n, r, i, a, o, c) : w(e, t, c);
	}, ue = (e, t, n, r, i, a, o) => {
		let c = e.component = Na(e, r, i);
		if (pr(e) && (c.ctx.renderer = we), Fa(c, !1, o), c.asyncDep) {
			if (i) {
				let e = c.vnode.el;
				i.registerDep(c, (t) => {
					let { vnode: n } = c;
					La(c, t, !1), e && (n.el = e);
					let r = !e && c.subTree.el;
					fe(c, n, m(e || c.subTree.el), e ? null : Se(c.subTree), i, a, o), r && (n.placeholder = null, s(r)), gi(c, n.el);
				});
			}
			if (!e.el) {
				let r = c.subTree = ha(ea);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else fe(c, e, t, n, i, a, o);
	}, w = (e, t, n) => {
		let r = t.component = e.component;
		if (pi(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, t.placeholder = e.placeholder, pe(r, t, n);
				return;
			}
			r.next = t, r.effect.run();
		} else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
	};
	class T extends on {
		constructor(e, t, n, r, i, a, o) {
			let s = ln(e.scope);
			super(), this.instance = e, this.initialVNode = t, this.container = n, this.anchor = r, this.parentSuspense = i, this.namespace = a, this.optimized = o, ln(s), this.job = e.job = () => {
				this.dirty && this.run();
			}, this.job.i = e;
		}
		notify() {
			if (!(this.flags & 256)) {
				let e = this.job;
				En(e, e.i.uid);
			}
		}
		fn() {
			let { instance: e, initialVNode: t, container: n, anchor: r, parentSuspense: i, namespace: a, optimized: o } = this;
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Gi(e);
					if (n) {
						t && (t.el = c.el, pe(e, t, o)), n.asyncDep.then(() => {
							J(() => {
								e.isUnmounted || e.update();
							}, void 0, i);
						});
						return;
					}
				}
				let l = t, u;
				Hi(e, !1), t ? (t.el = c.el, pe(e, t, o)) : t = c, n && de(n), (u = t.props && t.props.onVnodeBeforeUpdate) && Q(u, s, t, c), Hi(e, !0);
				let d = ci(e), f = e.subTree;
				e.subTree = d, v(f, d, m(f.el), Se(f), e, i, a), t.el = d.el, l === null && gi(e, d.el), r && J(r, void 0, i), (u = t.props && t.props.onVnodeUpdated) && J(() => {
					u && Q(u, s, t, c);
				}, void 0, i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, parent: u, root: d, type: f } = e, p = fr(t);
				if (Hi(e, !1), l && de(l), !p && (o = c && c.onVnodeBeforeMount) && Q(o, u, t), Hi(e, !0), s && Ee) {
					let t = () => {
						e.subTree = ci(e), Ee(s, e.subTree, e, i, null);
					};
					p && f.__asyncHydrate ? f.__asyncHydrate(s, e, t) : t();
				} else {
					d.ce && d.ce._hasShadowRoot() && d.ce._injectChildStyle(f, e.parent ? e.parent.type : void 0);
					let o = e.subTree = ci(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (e.m && J(e.m, void 0, i), !p && (o = c && c.onVnodeMounted)) {
					let e = t;
					J(() => Q(o, u, e), void 0, i);
				}
				(t.shapeFlag & 256 || u && u.vnode && fr(u.vnode) && u.vnode.shapeFlag & 256) && e.a && J(e.a, void 0, i), e.isMounted = !0, this.initialVNode = this.container = this.anchor = null;
			}
		}
	}
	let fe = (e, t, n, r, i, a, o) => {
		let s = e.effect = new T(e, t, n, r, i, a, o);
		e.update = s.run.bind(s), Hi(e, !0), s.run();
	}, pe = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, xi(e, t.props, r, n), Ii(e, t.children, n);
		let i = k();
		jn(e), k(i);
	}, me = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				_e(l, d, n, r, i, a, o, s, c);
				return;
			}
			if (f & 256) {
				he(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && xe(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? _e(l, d, n, r, i, a, o, s, c) : xe(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && oe(d, n, r, i, a, o, s, c));
	}, he = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let n = t[p] = l ? xa(t[p]) : Z(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? xe(e, a, o, !0, !1, f) : oe(t, r, i, a, o, s, c, l, f);
	}, _e = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? xa(t[u]) : Z(t[u]);
			if (da(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? xa(t[p]) : Z(t[p]);
			if (da(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? xa(t[u]) : Z(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) D(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? xa(t[u]) : Z(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, ee = !1, x = 0, te = Array(b);
			for (u = 0; u < b; u++) te[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					D(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (te[_ - h] === 0 && da(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? D(n, a, o, !0) : (te[i - h] = u + 1, i >= x ? x = i : ee = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let ne = ee ? Pe(te) : n;
			for (_ = ne.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Xi(f) : i;
				te[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : ee && (_ < 0 || u !== ne[_] ? E(n, r, p, 2, a) : _--);
			}
		}
	}, E = (e, t, n, r, i, a = null) => {
		let { el: c, type: l, transition: u, children: d, shapeFlag: f } = e;
		if (f & 6) E(e.component.subTree, t, n, r, i);
		else if (f & 128) e.suspense.move(t, n, r);
		else if (f & 64) l.move(e, t, n, we, i);
		else if (l === Y) {
			o(c, t, n);
			for (let e = 0; e < d.length; e++) E(d[e], t, n, r, i);
			o(e.anchor, t, n);
		} else l === ta ? x(e, t, n) : r !== 2 && f & 1 && u ? r === 0 ? qi(c, u, () => o(c, t, n), a, !0) : Ji(c, u, () => {
			e.ctx.isUnmounted ? s(c) : o(c, t, n);
		}, !0, !0) : o(c, t, n);
	}, D = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null) {
			let t = k();
			lr(s, null, n, e, !0), k(t);
		}
		if (p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !fr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Q(_, t, e), u & 6) be(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Bn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, we, r) : l && !l.hasOnce && (a !== Y || d > 0 && d & 64) ? xe(l, t, n, !1, !0) : (a === Y && d & 384 || !i && u & 16) && xe(c, t, n), r && ve(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && J(() => {
			_ && Q(_, t, e), h && Bn(e, null, t, "unmounted"), v && (e.el = null);
		}, void 0, n);
	}, ve = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === Y;
		if (a && !i) {
			ye(n, r);
			return;
		}
		if (t === ta) {
			te(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? rr(e) : e, c = () => {
			a ? m(n) && ye(n, r) : s(n);
		};
		if (i) {
			let e = o && o.el, t = !!(o && o.shapeFlag & 1);
			Ji(e || n, i, c, t);
		} else c();
	}, ye = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, be = (e, t, n) => {
		let { bum: r, scope: i, effect: a, subTree: o, um: s, m: c, a: l } = e;
		Ki(c), Ki(l), r && de(r), i.stop(), a ? (a.stop(), D(o, e, t, n)) : e.vnode.el && o && (o.transition = e.vnode.transition, D(o, e, t, n)), s && J(s, void 0, t), J(() => e.isUnmounted = !0, void 0, t);
	}, xe = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) D(e[o], t, n, r, i);
	}, Se = (e) => {
		if (e.shapeFlag & 6) return Se(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Zn];
		return n ? h(n) : t;
	}, Ce = (e, t, n) => {
		Pn(() => {
			e == null ? t._vnode && D(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : Ma());
	}, we = {
		p: v,
		um: D,
		m: E,
		r: ve,
		mt: ue,
		umt: be,
		mc: oe,
		pc: me,
		pbc: S,
		n: Se,
		o: e
	}, Te, Ee;
	return i && ([Te, Ee] = i(we)), {
		render: Ce,
		hydrate: Te,
		hydrateNode: Ee,
		internals: we,
		createApp: $r((e, t, n, r) => {
			let i = e._ceVNode || ha(e._component, e._props);
			return i.appContext = e._context, r === !0 ? r = "svg" : r === !1 && (r = void 0), n && Te ? Te(i, t) : Ce(i, t, r), i.component;
		}, (e) => {
			Ce(null, e._container);
		}, Ha, Ce)
	};
}
function Vi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Hi({ effect: e, job: t, vapor: n }, r) {
	r ? (e.flags |= 128, t.flags |= 2) : (e.flags &= -129, t.flags &= -3);
}
function Ui(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Wi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (f(r) && f(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = xa(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Wi(t, a)), a.type === $i && (a.patchFlag === -1 && (a = i[e] = xa(a)), a.el = t.el), a.type === ea && !a.el && (a.el = t.el);
	}
}
function Gi(e) {
	let t = e.subTree && e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Gi(t);
}
function Ki(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 4;
}
function qi(e, t, n, r, i = !1) {
	i && t.persisted && !e[$n] ? n() : i || Ui(r, t) ? (t.beforeEnter(e), n(), J(() => t.enter(e), void 0, r)) : n();
}
function Ji(e, t, n, r = !0, i = !1) {
	let a = () => {
		n(), t && (i || !t.persisted) && t.afterLeave && t.afterLeave();
	};
	if (i || r && t && !t.persisted) {
		let { leave: r, delayLeave: o } = t, s = () => {
			let o = e._isLeaving || !!e[$n];
			e._isLeaving && i && e[$n](!0), i && t.persisted && !o ? n() : r(e, a);
		};
		o ? o(e, a, s) : s();
	} else a();
}
function Yi(e, t, n = !0) {
	let r = [], i = t, a = e;
	for (; i;) {
		let e = i.subTree;
		if (!e) break;
		if (a === e || Zi(e.type) && (e.ssContent === a || e.ssFallback === a)) {
			let e = i.vnode;
			e.scopeId && r.push(e.scopeId), e.slotScopeIds && r.push(...e.slotScopeIds), a = e, i = i.parent;
		} else break;
	}
	let o = Xn && n && a.vaporScopeIds;
	return o && r.push(...o), r;
}
function Xi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Xi(t.subTree) : null;
}
var Zi = (e) => e.__isSuspense;
function Qi(e, t, n) {
	n && n.pendingBranch ? f(e) ? n.effects.push(...e) : n.effects.push(e) : An(e, t);
}
var Y = Symbol.for("v-fgt"), $i = Symbol.for("v-txt"), ea = Symbol.for("v-cmt"), ta = Symbol.for("v-stc"), na = Symbol.for("v-vps"), ra = [], X = null;
function ia(e = !1) {
	ra.push(X = e ? null : []);
}
function aa() {
	ra.pop(), X = ra[ra.length - 1] || null;
}
var oa = 1;
function sa(e, t = !1) {
	oa += e, e < 0 && X && t && (X.hasOnce = !0);
}
function ca(e) {
	return e.dynamicChildren = oa > 0 ? X || n : null, aa(), oa > 0 && X && X.push(e), e;
}
function la(e, t, n, r, i, a) {
	return ca(ma(e, t, n, r, i, a, !0));
}
function ua(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function da(e, t) {
	return e.type === t.type && e.key === t.key;
}
var fa = ({ key: e }) => e ?? null, pa = ({ ref: e, ref_key: t, ref_for: n }, r = K) => (typeof e == "number" && (e = "" + e), e == null ? null : _(e) || /* @__PURE__ */ R(e) || g(e) ? {
	i: r,
	r: e,
	k: t,
	f: !!n
} : e);
function ma(e, t = null, n = null, r = 0, i = null, a = e === Y ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && fa(t),
		ref: t && pa(t),
		scopeId: In,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: K
	};
	return s ? (Sa(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= _(n) ? 8 : 16), oa > 0 && !o && X && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && X.push(c), c;
}
var ha = ga;
function ga(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== Ar || (e = ea), ua(e)) {
		let r = va(e, t, !0);
		return n && Sa(r, n), oa > 0 && !a && X && (r.shapeFlag & 6 ? X[X.indexOf(e)] = r : X.push(r)), r.patchFlag = -2, r;
	}
	if (Ua(e) && (e = e.__vccOpts), t) {
		t = _a(t);
		let { class: e, style: n } = t;
		e && !_(e) && (t.class = xe(e)), y(n) && (/* @__PURE__ */ Ut(n) && !f(n) && (n = c({}, n)), t.style = E(n));
	}
	let o = _(e) ? 1 : Zi(e) ? 128 : Qn(e) ? 64 : y(e) ? 4 : g(e) ? 2 : 0;
	return ma(e, t, n, r, i, o, a, !0);
}
function _a(e) {
	return e ? /* @__PURE__ */ Ut(e) || yi(e) ? c({}, e) : e : null;
}
function va(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Ca(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && fa(l),
		ref: t && t.ref ? n && a ? f(a) ? a.concat(pa(t)) : [a, pa(t)] : pa(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== Y ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && va(e.ssContent),
		ssFallback: e.ssFallback && va(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		vi: e.vi,
		vs: ya(e, t),
		vb: e.vb,
		ibu: e.ibu,
		iu: e.iu,
		cacheIndex: e.cacheIndex
	};
	return c && r && nr(u, c.clone(u)), u;
}
function ya(e, n) {
	let r = e.vs;
	if (!r) return r;
	let i = {
		slot: r.slot,
		name: r.name,
		outlets: r.outlets,
		props: r.props,
		attrs: r.attrs && r.attrs === t ? {} : r.attrs,
		group: r.group
	}, a = i.attrs;
	if (n && r.props) {
		let e;
		for (let t in n) (a ? !ie(t) : t !== "key") && (e ||= {}, e[t] = n[t]);
		e && (a ? i.attrs = Ca(a, e) : i.props = Ca(r.props, e));
	}
	return e.el && (i.state = r.state, i.ref = r.ref, i.scope = r.scope), i;
}
function ba(e = " ", t = 0) {
	return ha($i, null, e, t);
}
function Z(e) {
	return e == null || typeof e == "boolean" ? ha(ea) : f(e) ? ha(Y, null, e.slice()) : ua(e) ? xa(e) : ha($i, null, String(e));
}
function xa(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : va(e);
}
function Sa(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (f(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), Sa(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !yi(t) ? t._ctx = K : r === 3 && K && (K.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (g(t)) {
		if (r & 65) {
			Sa(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: K
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [ba(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function Ca(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = xe([t.class, r.class]));
		else if (e === "style") t.style = E([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(f(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !s(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Q(e, t, n, r = null) {
	V(e, t, 7, [n, r]);
}
var $ = null, wa = () => $ || K, Ta = !1, Ea, Da;
{
	let e = ge(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Da = t("__VUE_INSTANCE_SETTERS__", (e) => $ = e), Ea = t("__VUE_SSR_SETTERS__", (e) => Ta = e);
}
var Oa = (e, t = e === null ? void 0 : e.scope) => {
	try {
		return [$, ln(t)];
	} finally {
		Da(e);
	}
}, ka = (e) => {
	ln(e[1]), Da(e[0]);
}, Aa = /*@__PURE__*/ Zr(), ja = 0;
function Ma() {
	return ja;
}
function Na(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || Aa, o = {
		uid: ja++,
		vnode: e,
		type: i,
		parent: n,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new cn(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: n ? n.provides : Object.create(a.provides),
		ids: n ? n.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: Ei(i, a),
		emitsOptions: oi(i, a),
		emit: null,
		emitted: null,
		propsDefaults: null,
		inheritAttrs: i.inheritAttrs,
		ctx: t,
		data: t,
		props: t,
		attrs: t,
		slots: t,
		refs: t,
		setupState: t,
		setupContext: null,
		suspense: r,
		suspenseId: r ? r.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = ni.bind(null, o), e.ce && e.ce(o), o;
}
function Pa(e) {
	return e.vnode.shapeFlag & 4;
}
function Fa(e, t = !1, n = !1) {
	t && Ea(t);
	let { props: r, children: i, vi: a } = e.vnode, o = Pa(e);
	bi(e, r, o, t), Fi(e, i, n || t);
	let s = o ? Ia(e, t) : void 0;
	return t && Ea(!1), s;
}
function Ia(e, t) {
	let n = e.type;
	e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, Fr);
	let { setup: r } = n;
	if (r) {
		let n = k(), i = e.setupContext = r.length > 1 ? Ba(e) : null, a = Oa(e), o = _n(r, e, 0, [e.props, i]), s = b(o);
		if (k(n), ka(a), (s || e.sp) && !fr(e) && ar(e), s) {
			let n = () => {
				Oa(null, void 0);
			};
			if (o.then(n, n), t) return o.then((n) => {
				Ea(!0);
				try {
					La(e, n, t);
				} finally {
					Ea(!1);
				}
			}).catch((t) => {
				vn(t, e, 0);
			});
			e.asyncDep = o;
		} else La(e, o, t);
	} else Ra(e, t);
}
function La(e, t, n) {
	g(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : y(t) && (e.setupState = en(t)), Ra(e, n);
}
function Ra(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = Oa(e), n = k();
		try {
			Rr(e);
		} finally {
			k(n), ka(t);
		}
	}
}
var za = { get(e, t) {
	return A(e, "get", ""), e[t];
} };
function Ba(e) {
	return {
		attrs: new Proxy(e.attrs, za),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => Va(e, t)
	};
}
function Va(e, t) {
	e.exposed = t || {};
}
function Ha(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(en(Wt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (!e.vapor) {
				let t = Nr();
				if (n in t) return t[n](e);
			}
		},
		has(t, n) {
			return n in t || !e.vapor && n in Nr();
		}
	}) : e.proxy;
}
function Ua(e) {
	return g(e) && "__vccOpts" in e;
}
var Wa = (e, t) => /* @__PURE__ */ dn(e, t, Ta), Ga = "3.6.0-rc.13", Ka = void 0, qa = typeof window < "u" && window.trustedTypes;
if (qa) try {
	Ka = /*@__PURE__*/ qa.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Ja = Ka ? (e) => Ka.createHTML(e) : (e) => e, Ya = "http://www.w3.org/2000/svg", Xa = "http://www.w3.org/1998/Math/MathML", Za = typeof document < "u" ? document : null, Qa = Za && /*@__PURE__*/ Za.createElement("template"), $a = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Za.createElementNS(Ya, e) : t === "mathml" ? Za.createElementNS(Xa, e) : n ? Za.createElement(e, { is: n }) : Za.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Za.createTextNode(e),
	createComment: (e) => Za.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Za.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			Qa.innerHTML = Ja(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Qa.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, eo = Symbol("_vtc");
function to(e, t, n) {
	let r = e[eo];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var no = Symbol("_vod"), ro = Symbol("_vsh"), io = Symbol(""), ao = /(?:^|;)\s*display\s*:/;
function oo(e, t, n) {
	let r = e.style, i = _(n), a = !1;
	if (n && !i) {
		if (t) {
			if (_(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? co(r, t, "");
			}
			else for (let e in t) n[e] ?? co(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? co(r, i, "") : po(e, i, !_(t) && t ? t[i] : void 0, o) || co(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[io];
			e && (n += ";" + e), r.cssText = n, a = ao.test(n);
		}
	} else if (t) {
		let t = r[io];
		t ? r.cssText = t : e.removeAttribute("style");
	}
	no in e && (i && t === n || (e[no] = a ? r.display : ""), e[ro] && (r.display = "none"));
}
var so = /\s*!important$/;
function co(e, t, n) {
	if (f(n)) n.forEach((n) => co(e, t, n));
	else {
		let r = n == null ? "" : String(n);
		if (t.startsWith("--")) so.test(r) ? e.setProperty(t, r.replace(so, ""), "important") : e.setProperty(t, r);
		else {
			let n = fo(e, t);
			so.test(r) ? e.setProperty(C(n), r.replace(so, ""), "important") : e[n] = r;
		}
	}
}
var lo = [
	"Webkit",
	"Moz",
	"ms"
], uo = {};
function fo(e, t) {
	let n = uo[t];
	if (n) return n;
	let r = S(t);
	if (r !== "filter" && r in e) return uo[t] = r;
	r = le(r);
	for (let n = 0; n < lo.length; n++) {
		let i = lo[n] + r;
		if (i in e) return uo[t] = i;
	}
	return t;
}
function po(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && _(r) && n === r;
}
var mo = "http://www.w3.org/1999/xlink";
function ho(e, t, n, r, i, a = Se(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(mo, t.slice(6, t.length)) : e.setAttributeNS(mo, t, n) : n == null || a && !Ce(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : v(n) ? String(n) : n);
}
function go(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Ja(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && _e(a)) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		r === i && "_value" in e || (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = Ce(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function _o(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function vo(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var yo = Symbol("_vei");
function bo(e, t, n, r, i = null) {
	let a = e[yo] || (e[yo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Co(t);
		r ? _o(e, n, a[t] = Do(r, i), s) : o && (vo(e, n, o, s), a[t] = void 0);
	}
}
var xo = /(Once|Passive|Capture)$/, So = /^on:?(?:Once|Passive|Capture)$/;
function Co(e) {
	let t, n;
	for (; (n = e.match(xo)) && !So.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : C(e.slice(2)), t];
}
var wo = 0, To = /*@__PURE__*/ Promise.resolve(), Eo = () => wo ||= (To.then(() => wo = 0), Date.now());
function Do(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (f(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && V(e, t, 5, a);
			}
		} else V(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Eo(), n;
}
var Oo = (e, t, n, r, i, o) => {
	let c = i === "svg";
	t === "class" ? to(e, r, c) : t === "style" ? oo(e, n, r) : a(t) ? s(t) || bo(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : ko(e, t, r, c)) ? (go(e, t, r, o), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || ho(e, t, r, c, o, t !== "value")) : e._isVueCE && (Ao(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !_(r))) ? go(e, S(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ho(e, t, r, c, o));
};
function ko(e, t, n, r) {
	return r ? !!(t === "innerHTML" || t === "textContent" || t in e && o(t) && g(n)) : we(e.tagName, t) || o(t) && _(n) ? !1 : t in e;
}
function Ao(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = S(t);
	return Array.isArray(n) ? n.some((e) => S(e) === r) : Object.keys(n).some((e) => S(e) === r);
}
var jo = {};
/*@__NO_SIDE_EFFECTS__*/
function Mo(e, t, n) {
	let r = /* @__PURE__ */ ir(e, t);
	ne(r) && (r = c({}, r, t));
	class i extends Fo {
		constructor(e) {
			super(r, e, n);
		}
	}
	return i.def = r, i;
}
var No = typeof HTMLElement < "u" ? HTMLElement : class {}, Po = class e extends No {
	constructor(e, t = {}, n) {
		super(), this._isVueCE = !0, this._instance = null, this._app = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._patching = !1, this._dirty = !1, this._ob = null, this._def = e, this._props = t, this._createApp = n, this._nonce = e.nonce, this._needsHydration() ? this._root = this.shadowRoot : e.shadowRoot === !1 ? this._root = this : (this.attachShadow(c({}, e.shadowRootOptions, { mode: "open" })), this._root = this.shadowRoot);
	}
	connectedCallback() {
		if (!this.isConnected) return;
		!this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
		let t = this;
		for (; t &&= t.assignedSlot || t.parentNode || t.host;) if (t instanceof e) {
			this._parent = t;
			break;
		}
		this._instance || (this._resolved ? this._mountComponent(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
			if (this._pendingResolve = void 0, this.isConnected) return this._resolveDef();
		}) : this._resolveDef());
	}
	disconnectedCallback() {
		this._connected = !1, wn(() => {
			this._connected || (this._ob &&= (this._ob.disconnect(), null), this._unmount(), this._teleportTargets &&= (this._teleportTargets.clear(), void 0));
		});
	}
	_setParent(e = this._parent) {
		e && this._instance && (this._instance.parent = e._instance, this._inheritParentContext(e));
	}
	_inheritParentContext(e = this._parent) {
		e && this._app && Object.setPrototypeOf(this._app._context.provides, e._instance.provides);
	}
	_processMutations(e) {
		for (let t of e) this._setAttr(t.attributeName);
	}
	_resolveDef() {
		if (this._pendingResolve) return this._pendingResolve;
		for (let e = 0; e < this.attributes.length; e++) this._setAttr(this.attributes[e].name);
		this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
		let e = (e) => {
			this._resolved = !0, this._pendingResolve = void 0;
			let { props: t, styles: n } = e, r;
			if (t && !f(t)) for (let e in t) {
				let n = t[e];
				(n === Number || n && n.type === Number) && (e in this._props && (this._props[e] = me(this._props[e])), (r ||= Object.create(null))[S(e)] = !0);
			}
			this._numberProps = r, this._resolveProps(e), this.shadowRoot && this._applyStyles(n), this._connected && this._mountComponent(e);
		}, t = this._def.__asyncLoader;
		if (t) {
			let { configureApp: n } = this._def;
			return this._pendingResolve = t().then((t) => {
				t.configureApp = n, this._def = t, e(t);
			}), this._pendingResolve;
		}
		e(this._def);
	}
	_mountComponent(e) {
		this._mount(e), this._processExposed();
	}
	_processExposed() {
		let e = this._instance && this._instance.exposed;
		if (e) for (let t in e) d(this, t) || Object.defineProperty(this, t, { get: () => Zt(e[t]) });
	}
	_processInstance() {
		this._instance.ce = this, this._instance.isCE = !0;
		let e = (e, t) => {
			this.dispatchEvent(new CustomEvent(e, ne(t[0]) ? c({ detail: t }, t[0]) : { detail: t }));
		};
		this._instance.emit = (t, ...n) => {
			e(t, n), C(t) !== t && e(C(t), n);
		}, this._setParent();
	}
	_resolveProps(e) {
		let { props: t } = e, n = f(t) ? t : Object.keys(t || {});
		for (let e of Object.keys(this)) e[0] !== "_" && n.includes(e) && this._setProp(e, this[e]);
		for (let e of n.map(S)) Object.defineProperty(this, e, {
			get() {
				return this._getProp(e);
			},
			set(t) {
				this._setProp(e, t, !0, !this._patching);
			}
		});
	}
	_setAttr(e) {
		if (e.startsWith("data-v-")) return;
		let t = this.hasAttribute(e), n = t ? this.getAttribute(e) : jo, r = S(e);
		t && this._numberProps && this._numberProps[r] && (n = me(n)), this._setProp(r, n, !1, !0);
	}
	_getProp(e) {
		return this._props[e];
	}
	_setProp(e, t, n = !0, r = !1) {
		if (t !== this._props[e] && (this._dirty = !0, t === jo ? delete this._props[e] : (this._props[e] = t, e === "key" && this._app && this._app._ceVNode && (this._app._ceVNode.key = t)), r && this._instance && this._update(), n)) {
			let n = this._ob;
			n && (this._processMutations(n.takeRecords()), n.disconnect()), t === !0 ? this.setAttribute(C(e), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(C(e), t + "") : t || this.removeAttribute(C(e)), n && n.observe(this, { attributes: !0 });
		}
	}
	_applyStyles(e, t, n) {
		if (!e) return;
		if (t) {
			if (t === this._def || this._styleChildren.has(t)) return;
			this._styleChildren.add(t);
		}
		let r = this._nonce, i = this.shadowRoot, a = n ? this._getStyleAnchor(n) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(i), o = null;
		for (let s = e.length - 1; s >= 0; s--) {
			let c = document.createElement("style");
			r && c.setAttribute("nonce", r), c.textContent = e[s], i.insertBefore(c, o || a), o = c, s === 0 && (n || this._styleAnchors.set(this._def, c), t && this._styleAnchors.set(t, c));
		}
	}
	_getStyleAnchor(e) {
		if (!e) return null;
		let t = this._styleAnchors.get(e);
		return t && t.parentNode === this.shadowRoot ? t : (t && this._styleAnchors.delete(e), null);
	}
	_getRootStyleInsertionAnchor(e) {
		for (let t = 0; t < e.childNodes.length; t++) {
			let n = e.childNodes[t];
			if (!(n instanceof HTMLStyleElement)) return n;
		}
		return null;
	}
	_parseSlots() {
		let e = this._slots = {}, t;
		for (; t = this.firstChild;) {
			let n = t.nodeType === 1 && t.getAttribute("slot") || "default";
			(e[n] || (e[n] = [])).push(t), this.removeChild(t);
		}
	}
	_renderSlots() {
		let e = this._getSlots(), t = this._instance.type.__scopeId;
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = r.getAttribute("name") || "default", a = this._slots[i], o = r.parentNode;
			if (a) for (let e of a) {
				if (t && e.nodeType === 1) {
					let n = t + "-s", r = document.createTreeWalker(e, 1);
					e.setAttribute(n, "");
					let i;
					for (; i = r.nextNode();) i.setAttribute(n, "");
				}
				o.insertBefore(e, r);
			}
			else for (; r.firstChild;) o.insertBefore(r.firstChild, r);
			o.removeChild(r);
		}
	}
	_getSlots() {
		let e = [this];
		this._teleportTargets && e.push(...this._teleportTargets);
		let t = /* @__PURE__ */ new Set();
		for (let n of e) {
			let e = n.querySelectorAll("slot");
			for (let n = 0; n < e.length; n++) t.add(e[n]);
		}
		return Array.from(t);
	}
	_injectChildStyle(e, t) {
		this._applyStyles(e.styles, e, t);
	}
	_beginPatch() {
		this._patching = !0, this._dirty = !1;
	}
	_endPatch() {
		this._patching = !1, this._dirty && this._instance && this._update();
	}
	_hasShadowRoot() {
		return this._root !== this;
	}
	_removeChildStyle(e) {}
}, Fo = class extends Po {
	constructor(e, t = {}, n = Yo) {
		super(e, t, n);
	}
	_needsHydration() {
		return !!(this.shadowRoot && this._createApp !== Yo);
	}
	_mount(e) {
		this._app = this._createApp(e), this._inheritParentContext(), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
	}
	_update() {
		if (!this._app) return;
		let e = this._createVNode();
		e.appContext = this._app._context, Jo(e, this._root);
	}
	_unmount() {
		this._app && this._app.unmount(), this._instance && this._instance.ce && (this._instance.ce = void 0), this._app = this._instance = null;
	}
	_createVNode() {
		let e = {};
		this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
		let t = ha(this._def, c(e, this._props));
		return this._instance || (t.ce = (e) => {
			this._instance = e, this._processInstance();
		}), t;
	}
}, Io = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return f(t) ? (e) => de(t, e) : t;
};
function Lo(e) {
	e.target.composing = !0;
}
function Ro(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var zo = Symbol("_assign"), Bo = Symbol("_initialValue"), Vo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[Bo] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Bo] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[zo] = Io(i), Uo(e, n, r || !!(i.props && i.props.type === "number"), t);
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[Bo];
		delete e[Bo], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[zo](Ho(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		e[zo] = Io(o), Wo(e, n, t, i, a, r);
	}
};
function Ho(e, t, n) {
	return t && (e = e.trim()), n && (e = pe(e)), e;
}
var Uo = (e, t, n, r, i) => {
	_o(e, r ? "change" : "input", (r) => {
		r.target.composing || (i || e[zo])(Ho(e.value, t, n || e.type === "number"));
	}), (t || n || e.type === "number") && _o(e, "change", () => {
		e.value = Ho(e.value, t, n || e.type === "number");
	}), r || (_o(e, "compositionstart", Lo), _o(e, "compositionend", Ro), _o(e, "change", Ro));
}, Wo = (e, t, n, r, i, a) => {
	if (e.composing) return;
	let o = (i || e.type === "number") && !/^0\d/.test(e.value) ? pe(e.value) : e.value, s = n ?? "";
	if (o === s) return;
	let c = e.getRootNode();
	(c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (a && n === t || r && e.value.trim() === s) || (e.value = s);
}, Go = /*@__PURE__*/ c({ patchProp: Oo }, $a), Ko;
function qo() {
	return Ko ||= zi(Go);
}
var Jo = ((...e) => {
	qo().render(...e);
}), Yo = ((...e) => {
	let t = qo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Zo(e);
		if (!r) return;
		let i = t._component;
		g(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Xo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Xo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Zo(e) {
	return _(e) ? document.querySelector(e) : e;
}
// src/lib/defineHaCard.ts
var Qo = [];
function $o(e, t) {
	let n = /* @__PURE__ */ Mo(e);
	class r extends n {
		setConfig(e) {
			if (!e) throw Error("Invalid configuration");
			t.validate?.(e), this.config = e;
		}
		getCardSize() {
			return 2;
		}
		static getConfigForm() {
			return t.getConfigForm?.();
		}
		static getStubConfig() {
			return t.stubConfig;
		}
	}
	customElements.define(t.type, r), window.customCards = window.customCards || [], window.customCards.push({
		type: t.type,
		name: t.name,
		description: t.description,
		preview: !1,
		getEntitySuggestion: t.getEntitySuggestion
	}), Qo.push(t);
}
// node_modules/.pnpm/custom-card-helpers@2.0.0_lit@3.3.3/node_modules/custom-card-helpers/dist/index.m.js
function es(e) {
	return e.substr(0, e.indexOf("."));
}
var ts = (e) => e.attributes.friendly_name || e.entity_id, ns;
(function(e) {
	e.language = "language", e.system = "system", e.comma_decimal = "comma_decimal", e.decimal_comma = "decimal_comma", e.space_comma = "space_comma", e.none = "none";
})(ns ||= {});
var rs;
(function(e) {
	e.language = "language", e.system = "system", e.am_pm = "12", e.twenty_four = "24";
})(rs ||= {});
var is = "mdi:bookmark", as = (e, t, n, r) => {
	r ||= {}, n ??= {};
	let i = new Event(t, {
		bubbles: r.bubbles === void 0 || r.bubbles,
		cancelable: !!r.cancelable,
		composed: r.composed === void 0 || r.composed
	});
	return i.detail = n, e.dispatchEvent(i), i;
}, os = {
	alert: "mdi:alert",
	automation: "mdi:playlist-play",
	calendar: "mdi:calendar",
	camera: "mdi:video",
	climate: "mdi:thermostat",
	configurator: "mdi:settings",
	conversation: "mdi:text-to-speech",
	device_tracker: "mdi:account",
	fan: "mdi:fan",
	group: "mdi:google-circles-communities",
	history_graph: "mdi:chart-line",
	homeassistant: "mdi:home-assistant",
	homekit: "mdi:home-automation",
	image_processing: "mdi:image-filter-frames",
	input_boolean: "mdi:drawing",
	input_datetime: "mdi:calendar-clock",
	input_number: "mdi:ray-vertex",
	input_select: "mdi:format-list-bulleted",
	input_text: "mdi:textbox",
	light: "mdi:lightbulb",
	mailbox: "mdi:mailbox",
	notify: "mdi:comment-alert",
	person: "mdi:account",
	plant: "mdi:flower",
	proximity: "mdi:apple-safari",
	remote: "mdi:remote",
	scene: "mdi:google-pages",
	script: "mdi:file-document",
	sensor: "mdi:eye",
	simple_alarm: "mdi:bell",
	sun: "mdi:white-balance-sunny",
	switch: "mdi:flash",
	timer: "mdi:timer",
	updater: "mdi:cloud-upload",
	vacuum: "mdi:robot-vacuum",
	water_heater: "mdi:thermometer",
	weblink: "mdi:open-in-new"
};
function ss(e, t) {
	if (e in os) return os[e];
	switch (e) {
		case "alarm_control_panel": switch (t) {
			case "armed_home": return "mdi:bell-plus";
			case "armed_night": return "mdi:bell-sleep";
			case "disarmed": return "mdi:bell-outline";
			case "triggered": return "mdi:bell-ring";
			default: return "mdi:bell";
		}
		case "binary_sensor": return t && t === "off" ? "mdi:radiobox-blank" : "mdi:checkbox-marked-circle";
		case "cover": return t === "closed" ? "mdi:window-closed" : "mdi:window-open";
		case "lock": return t && t === "unlocked" ? "mdi:lock-open" : "mdi:lock";
		case "media_player": return t && t !== "off" && t !== "idle" ? "mdi:cast-connected" : "mdi:cast";
		case "zwave": switch (t) {
			case "dead": return "mdi:emoticon-dead";
			case "sleeping": return "mdi:sleep";
			case "initializing": return "mdi:timer-sand";
			default: return "mdi:z-wave";
		}
		default: return console.warn("Unable to find icon for domain " + e + " (" + t + ")"), is;
	}
}
var cs = (e, t, n = !0) => {
	let r = es(t), i = r === "group" ? "homeassistant" : r, a;
	switch (r) {
		case "lock":
			a = n ? "unlock" : "lock";
			break;
		case "cover":
			a = n ? "open_cover" : "close_cover";
			break;
		default: a = n ? "turn_on" : "turn_off";
	}
	return e.callService(i, a, { entity_id: t });
}, ls = (e, t) => {
	let n = e === "off";
	switch (t?.attributes.device_class) {
		case "battery": return n ? "mdi:battery" : "mdi:battery-outline";
		case "battery_charging": return n ? "mdi:battery" : "mdi:battery-charging";
		case "cold": return n ? "mdi:thermometer" : "mdi:snowflake";
		case "connectivity": return n ? "mdi:server-network-off" : "mdi:server-network";
		case "door": return n ? "mdi:door-closed" : "mdi:door-open";
		case "garage_door": return n ? "mdi:garage" : "mdi:garage-open";
		case "power": return n ? "mdi:power-plug-off" : "mdi:power-plug";
		case "gas":
		case "problem":
		case "safety":
		case "tamper": return n ? "mdi:check-circle" : "mdi:alert-circle";
		case "smoke": return n ? "mdi:check-circle" : "mdi:smoke";
		case "heat": return n ? "mdi:thermometer" : "mdi:fire";
		case "light": return n ? "mdi:brightness-5" : "mdi:brightness-7";
		case "lock": return n ? "mdi:lock" : "mdi:lock-open";
		case "moisture": return n ? "mdi:water-off" : "mdi:water";
		case "motion": return n ? "mdi:walk" : "mdi:run";
		case "occupancy": return n ? "mdi:home-outline" : "mdi:home";
		case "opening": return n ? "mdi:square" : "mdi:square-outline";
		case "plug": return n ? "mdi:power-plug-off" : "mdi:power-plug";
		case "presence": return n ? "mdi:home-outline" : "mdi:home";
		case "running": return n ? "mdi:stop" : "mdi:play";
		case "sound": return n ? "mdi:music-note-off" : "mdi:music-note";
		case "update": return n ? "mdi:package" : "mdi:package-up";
		case "vibration": return n ? "mdi:crop-portrait" : "mdi:vibrate";
		case "window": return n ? "mdi:window-closed" : "mdi:window-open";
		default: return n ? "mdi:radiobox-blank" : "mdi:checkbox-marked-circle";
	}
}, us = (e) => {
	let t = e.state !== "closed";
	switch (e.attributes.device_class) {
		case "garage": return t ? "mdi:garage-open" : "mdi:garage";
		case "door": return t ? "mdi:door-open" : "mdi:door-closed";
		case "shutter": return t ? "mdi:window-shutter-open" : "mdi:window-shutter";
		case "blind": return t ? "mdi:blinds-open" : "mdi:blinds";
		case "window": return t ? "mdi:window-open" : "mdi:window-closed";
		default: return ss("cover", e.state);
	}
}, ds = {
	humidity: "mdi:water-percent",
	illuminance: "mdi:brightness-5",
	temperature: "mdi:thermometer",
	pressure: "mdi:gauge",
	power: "mdi:flash",
	signal_strength: "mdi:wifi"
}, fs = {
	binary_sensor: ls,
	cover: us,
	sensor: (e) => {
		let t = e.attributes.device_class;
		if (t && t in ds) return ds[t];
		if (t === "battery") {
			let t = Number(e.state);
			if (isNaN(t)) return "mdi:battery-unknown";
			let n = Math.round(t / 10) * 10;
			return n >= 100 ? "mdi:battery" : n <= 0 ? "mdi:battery-alert" : `hass:battery-${n}`;
		}
		let n = e.attributes.unit_of_measurement;
		return n === "°C" || n === "°F" ? "mdi:thermometer" : ss("sensor");
	},
	input_datetime: (e) => e.attributes.has_date ? e.attributes.has_time ? ss("input_datetime") : "mdi:calendar" : "mdi:clock"
}, ps = (e) => {
	if (!e) return is;
	if (e.attributes.icon) return e.attributes.icon;
	let t = es(e.entity_id);
	return t in fs ? fs[t](e) : ss(t, e.state);
};
// src/composables/useEntity.ts
function ms(e, t, n) {
	let r = /* @__PURE__ */ rn(e), i = /* @__PURE__ */ rn(t), a = Wa(() => i.value ? r.value.states[i.value] : void 0);
	return {
		name: Wa(() => a.value ? Qt(n) ? r.value.formatEntityName(a.value, Qt(n)) : ts(a.value) : "-"),
		state: a,
		hass: r,
		id: i
	};
}
// src/composables/useLocalValue.ts
function hs(e) {
	let t = /* @__PURE__ */ Kt(e.get()), n = Wa({
		get: () => t.value ?? e.get(),
		set: (n) => {
			t.value = n, e.set(n);
		}
	});
	return Gn(e.get, () => {
		t.value = e.get();
	}), n;
}
// src/composables/useLight.ts
function gs(e) {
	return {
		rgbColor: hs({
			get: () => e.state.value?.attributes.rgb_color ? e.state.value?.attributes.rgb_color : null,
			set: (t) => {
				e.hass.value.callService("light", "turn_on", {
					entity: e.id.value,
					rgb_color: t ?? void 0
				});
			}
		}),
		isOn: hs({
			get: () => e.state.value?.state === "on",
			set: (t) => {
				e.hass.value && e.id.value && cs(e.hass.value, e.id.value, t);
			}
		}),
		brightness: hs({
			get: () => Math.round((e.state.value?.attributes.brightness ?? 0) / 255 * 100),
			set: (t) => {
				t === 0 ? cs(e.hass.value, e.id.value, !1) : e.hass.value.callService("light", "turn_on", {
					entity_id: e.id.value,
					brightness_pct: t
				});
			}
		})
	};
}
// node_modules/.pnpm/@vueuse+shared@15.0.0_vue@3.6.0-rc.13_typescript-native-bridge@6.0.3-bridge.19.tsgo.7.0.2_/node_modules/@vueuse/shared/dist/index.js
var _s = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var vs = Object.prototype.toString, ys = (e) => vs.call(e) === "[object Object]";
function bs(e) {
	return Array.isArray(e) ? e : [e];
}
function xs(e, t, n) {
	return Gn(e, t, {
		...n,
		immediate: !0
	});
}
// node_modules/.pnpm/@vueuse+core@15.0.0_vue@3.6.0-rc.13_typescript-native-bridge@6.0.3-bridge.19.tsgo.7.0.2_/node_modules/@vueuse/core/dist/index.js
var Ss = _s ? window : void 0;
_s && window.document, _s && window.navigator, _s && window.location;
function Cs(e) {
	let t = Qt(e);
	return t?.$el ?? t;
}
function ws(...e) {
	let t = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), n = Wa(() => {
		let t = bs(Qt(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	});
	return xs(() => [
		n.value?.map((e) => Cs(e)) ?? [Ss].filter((e) => e != null),
		bs(Qt(n.value ? e[1] : e[0])),
		bs(Zt(n.value ? e[2] : e[1])),
		Qt(n.value ? e[3] : e[2])
	], ([e, n, r, i], a, o) => {
		if (!e?.length || !n?.length || !r?.length) return;
		let s = ys(i) ? { ...i } : i, c = e.flatMap((e) => n.flatMap((n) => r.map((r) => t(e, n, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
var Ts = 500, Es = 10;
function Ds(e, t, n) {
	var r, i;
	let a = Wa(() => Cs(e)), o, s, c, l = !1;
	function u() {
		o &&= (clearTimeout(o), void 0), s = void 0, c = void 0, l = !1;
	}
	function d(e) {
		let t = n?.delay;
		return typeof t == "function" ? t(e) : t ?? Ts;
	}
	function f(e) {
		var t, r, i;
		let [o, d, f] = [
			c,
			s,
			l
		];
		if (u(), !n?.onMouseUp || !d || !o || n != null && (t = n.modifiers) != null && t.self && e.target !== a.value) return;
		n != null && (r = n.modifiers) != null && r.prevent && e.preventDefault(), n != null && (i = n.modifiers) != null && i.stop && e.stopPropagation();
		let p = e.x - d.x, m = e.y - d.y, h = Math.sqrt(p * p + m * m);
		n.onMouseUp(e.timeStamp - o, h, f, e);
	}
	function p(e) {
		var r, i, f;
		n != null && (r = n.modifiers) != null && r.self && e.target !== a.value || (u(), n != null && (i = n.modifiers) != null && i.prevent && e.preventDefault(), n != null && (f = n.modifiers) != null && f.stop && e.stopPropagation(), s = {
			x: e.x,
			y: e.y
		}, c = e.timeStamp, o = setTimeout(() => {
			l = !0, t(e);
		}, d(e)));
	}
	function m(e) {
		var t, r, i;
		if (n != null && (t = n.modifiers) != null && t.self && e.target !== a.value || !s || n?.distanceThreshold === !1) return;
		n != null && (r = n.modifiers) != null && r.prevent && e.preventDefault(), n != null && (i = n.modifiers) != null && i.stop && e.stopPropagation();
		let o = e.x - s.x, c = e.y - s.y;
		Math.sqrt(o * o + c * c) >= (n?.distanceThreshold ?? Es) && u();
	}
	let h = {
		capture: n == null || (r = n.modifiers) == null ? void 0 : r.capture,
		once: n == null || (i = n.modifiers) == null ? void 0 : i.once
	}, g = [
		ws(a, "pointerdown", p, h),
		ws(a, "pointermove", m, h),
		ws(a, [
			"pointerup",
			"pointerleave",
			"pointercancel"
		], f, h)
	];
	return () => g.forEach((e) => e());
}
// src/cards/Slider/Slider.vue?vue&type=script&setup=true&lang.ts
var Os = ["aria-label", "aria-checked"], ks = ["icon"];
// src/cards/Slider/index.ts
$o(/* @__PURE__ */ ((e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
})(/* @__PURE__ */ ir({
	__name: "Slider",
	props: {
		hass: { type: Object },
		config: { type: Object }
	},
	setup(e) {
		let t = or("slider"), n = ms(() => e.hass, () => e.config?.entity, () => e.config?.name), { isOn: r, rgbColor: i, brightness: a } = gs(n), o = Wa(() => e.config?.name ? e.config.name : n.name.value), s = Wa(() => i.value ? `rgb(${i.value.join()})` : "var(--accent-color)"), c = Wa(() => n.state.value ? ps(n.state.value) : void 0), l = /* @__PURE__ */ Kt(a.value ?? 0);
		Gn([a, r], () => {
			r.value ? l.value = a.value : l.value = 0;
		});
		function u(n) {
			console.log("moreinfo"), t.value && as(t.value, "hass-more-info", { entityId: e.config.entity });
		}
		function d() {
			let e = t.value?.valueAsNumber;
			e !== void 0 && (l.value = e, a.value = e);
		}
		return Ds(t, (e) => u(e)), (e, n) => (ia(), la("label", {
			"aria-label": e.name,
			"aria-checked": Zt(r),
			class: "card",
			style: E({ "--rgb": s.value })
		}, [
			ma("button", { onClick: n[0] ||= (e) => r.value = !Zt(r) }, [ma("ha-icon", { icon: c.value }, null, 8, ks)]),
			ma("span", null, je(o.value), 1),
			ma("div", {
				class: "fill",
				style: E({ "--value": l.value })
			}, null, 4),
			zn(ma("input", {
				ref_key: "slider",
				ref: t,
				type: "range",
				min: "0",
				max: "100",
				"onUpdate:modelValue": n[1] ||= (e) => l.value = e,
				onChange: d,
				step: "1"
			}, null, 544), [[
				Vo,
				l.value,
				void 0,
				{ number: !0 }
			]])
		], 12, Os));
	}
}), [["styles", [".card[data-v-b34c7116]{background:var(--ha-card-background,var(--card-background-color,#fff));color:var(--primary-text-color);border-radius:var(--ha-card-border-radius,12px);box-shadow:var(--ha-card-box-shadow,none);border-width:var(--ha-card-border-width,1px);border-style:solid;border-color:var(--ha-card-border-color,var(--divider-color,#e0e0e0));isolation:isolate;width:100%;box-sizing:border-box;grid-template-columns:auto 1fr;align-items:center;gap:1rem;min-block-size:3.5rem;transition:color .25s;display:grid;position:relative;overflow:clip}.card[aria-checked=false][data-v-b34c7116]{color:var(--disabled-text-color)}.card[aria-checked=false]>button[data-v-b34c7116]{background-color:var(--secondary-background-color);color:var(--disabled-text-color)}.card>[data-v-b34c7116]{z-index:1}.card>span[data-v-b34c7116]{pointer-events:none;font-size:.875rem;font-weight:600}.card>button[data-v-b34c7116]{aspect-ratio:1;border-radius:calc(var(--ha-card-border-radius,12px) + .25rem);background:var(--secondary-background-color);block-size:3rem;color:var(--rgb);cursor:pointer;border:none;place-content:center;margin-inline-start:.25rem;display:grid}.card>.fill[data-v-b34c7116]{width:calc(var(--value) * 1%);border-radius:inherit;background:var(--rgb);z-index:0;transition:width .1s cubic-bezier(.175,.885,.32,1.275),background-color .25s;position:absolute;inset-block:0;inset-inline-start:0}.card>input[type=range][data-v-b34c7116]{appearance:none;border-radius:inherit;cursor:ew-resize;z-index:0;background:0 0;width:100%;height:100%;margin:0;position:absolute;inset:0}.card>input[type=range][data-v-b34c7116]::-webkit-slider-runnable-track{background:0 0;height:100%}.card>input[type=range][data-v-b34c7116]::-webkit-slider-thumb{appearance:none;width:0;height:0}.card>input[type=range][data-v-b34c7116]::-moz-range-track{background:0 0}.card>input[type=range][data-v-b34c7116]::-moz-range-thumb{border:none;width:0;height:0}"]], ["__scopeId", "data-v-b34c7116"]]), {
	type: "heike-slider",
	name: "heike slider",
	description: "Edit lights in a smooth way",
	stubConfig: { entity: "light.all_lights" },
	validate(e) {
		if (!e.entity) throw Error("You need to define an entity");
	},
	getEntitySuggestion(e, t) {
		return t.split(".")[0] === "light" ? { config: {
			type: "custom:heike-slider",
			entity: t
		} } : null;
	},
	getConfigForm() {
		return { schema: [{
			name: "entity",
			required: !0,
			selector: { entity: { domain: "light" } }
		}, {
			name: "name",
			required: !1,
			selector: { entity_name: {} },
			context: { entity: "entity" }
		}] };
	}
});
