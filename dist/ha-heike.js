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
function ve(e) {
	if (f(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = _(r) ? xe(r) : ve(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (_(e) || y(e)) return e;
}
var E = /;(?![^(]*\))/g, ye = /:([^]+)/, be = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function xe(e) {
	let t = {};
	return e.replace(be, (e) => e.startsWith("/*") ? "" : e).split(E).forEach((e) => {
		if (e) {
			let n = e.split(ye);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function Se(e) {
	let t = "";
	if (_(e)) t = e;
	else if (f(e)) for (let n = 0; n < e.length; n++) {
		let r = Se(e[n]);
		r && (t += r + " ");
	}
	else if (y(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var Ce = /*@__PURE__*/ e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function we(e) {
	return !!e || e === "";
}
function Te(e, t) {
	return t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e === "INPUT" || t === "type" && e === "TEXTAREA" || (t === "width" || t === "height") && (e === "IMG" || e === "VIDEO" || e === "CANVAS" || e === "SOURCE") || t === "sandbox" && e === "IFRAME";
}
function Ee(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = Ae(e[i], t[i], n);
	return r;
}
function De(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && Ae(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function Oe(e, t, n) {
	let r = p(e), i = p(t);
	if (r || i || (r = m(e), i = m(t), r || i)) return r && i ? De(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !Ae(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function ke(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function Ae(e, t, n) {
	if (e === t) return !0;
	let r = h(e), i = h(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = v(e), i = v(t), r || i ? e === t : (r = f(e), i = f(t), r || i ? r && i ? ke(e, t, n, Ee) : !1 : (r = y(e), i = y(t), r || i ? !r || !i ? !1 : ke(e, t, n, Oe) : String(e) === String(t))));
}
var je = (e) => !!(e && e.__v_isRef === !0), Me = (e) => {
	switch (typeof e) {
		case "string": return e;
		case "object": if (e) {
			if (je(e)) return Me(e.value);
			if (f(e) || e.toString === ee || !g(e.toString)) return JSON.stringify(e, Ne, 2);
		}
		default: return e == null ? "" : String(e);
	}
}, Ne = (e, t) => je(t) ? Ne(e, t.value) : p(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Pe(t, r) + " =>"] = n, e), {}) } : m(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Pe(e)) } : v(t) ? Pe(t) : y(t) && !f(t) && !ne(t) ? String(t) : t, Pe = (e, t = "") => v(e) ? `Symbol(${e.description ?? t})` : e;
function Fe(e) {
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
var Ie = [], Le = 0, Re = void 0, ze = 0;
function Be() {
	++ze;
}
function Ve() {
	--ze;
}
var He = 0, Ue = 0, We = 0;
function D(e) {
	try {
		return Re;
	} finally {
		Re = e;
	}
}
function Ge() {
	++Le;
}
function Ke() {
	!--Le && We && Qe();
}
function qe(e, t) {
	let n = t.depsTail;
	if (n !== void 0 && n.dep === e) return;
	let r = n === void 0 ? t.deps : n.nextDep;
	if (r !== void 0 && r.dep === e) {
		r.version = He, t.depsTail = r;
		return;
	}
	let i = e.subsTail;
	if (i !== void 0 && i.version === He && i.sub === t) return;
	let a = t.depsTail = e.subsTail = {
		version: He,
		dep: e,
		sub: t,
		prevDep: n,
		nextDep: r,
		prevSub: i,
		nextSub: void 0
	};
	r !== void 0 && (r.prevDep = a), n === void 0 ? t.deps = a : n.nextDep = a, i === void 0 ? e.subs = a : i.nextSub = a;
}
function Je(e, t = e.sub) {
	let n = e.dep, r = e.prevDep, i = e.nextDep, a = e.nextSub, o = e.prevSub;
	if (i === void 0 ? t.depsTail = r : i.prevDep = r, r === void 0 ? t.deps = i : r.nextDep = i, a === void 0 ? n.subsTail = o : a.prevSub = o, o !== void 0) o.nextSub = a;
	else if ((n.subs = a) === void 0) {
		let e = n.deps;
		if (e !== void 0) {
			do
				e = Je(e, n);
			while (e !== void 0);
			n.flags |= 16;
		}
	}
	return i;
}
function Ye(e) {
	let t = e.nextSub, n;
	top: do {
		let r = e.sub, i = r.flags;
		if (i & 3 && (i & 60 ? i & 12 ? i & 4 ? !(i & 48) && tt(e, r) ? (r.flags = i | 40, i &= 1) : i = 0 : r.flags = i & -9 | 32 : i = 0 : (r.flags = i | 32, ze && (r.flags |= 8)), i & 2 && (Ie[We++] = r), i & 1)) {
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
function Xe(e) {
	return ++He, e.depsTail = void 0, e.flags = e.flags & -57 | 4, D(e);
}
function Ze(e, t) {
	Re = t;
	let n = e.depsTail, r = n === void 0 ? e.deps : n.nextDep;
	for (; r !== void 0;) r = Je(r, e);
	e.flags &= -5;
}
function Qe() {
	let e = !1, t;
	for (; Ue < We;) {
		let n = Ie[Ue];
		Ie[Ue++] = void 0;
		try {
			n.notify();
		} catch (n) {
			e || (e = !0, t = n);
		}
	}
	if (Ue = 0, We = 0, e) throw t;
}
function $e(e, t) {
	let n, r = 0;
	top: do {
		let i = e.dep, a = i.flags, o = !1;
		if (t.flags & 16) o = !0;
		else if ((a & 17) == 17) {
			let e = i.subs;
			i.update() && (e.nextSub !== void 0 && et(e), o = !0);
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
						n.nextSub !== void 0 && et(n), t = e.sub;
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
function et(e) {
	do {
		let t = e.sub, n = e.nextSub, r = t.flags;
		(r & 48) == 32 && (t.flags = r | 16), e = n;
	} while (e !== void 0);
}
function tt(e, t) {
	let n = t.depsTail;
	for (; n !== void 0;) {
		if (n === e) return !0;
		n = n.prevDep;
	}
	return !1;
}
var nt = class {
	constructor(e, t) {
		this.map = e, this.key = t, this._subs = void 0, this.subsTail = void 0, this.flags = 0;
	}
	get subs() {
		return this._subs;
	}
	set subs(e) {
		this._subs = e, e === void 0 && this.map && this.map.delete(this.key);
	}
}, rt = /* @__PURE__ */ new WeakMap(), it = Symbol(""), at = Symbol(""), ot = Symbol("");
function O(e, t, n) {
	if (Re !== void 0) {
		let t = rt.get(e);
		t || rt.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || t.set(n, r = new nt(t, n)), qe(r, Re);
	}
}
function k(e, t, n, r, i, a) {
	let o = rt.get(e);
	if (!o) return;
	let s = (e) => {
		e !== void 0 && e.subs !== void 0 && (Ye(e.subs), et(e.subs));
	};
	if (Ge(), t === "clear") o.forEach(s);
	else {
		let i = f(e), a = i && re(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === ot || !v(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(ot)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(it)), p(e) && s(o.get(at)));
				break;
			case "delete":
				i || (s(o.get(it)), p(e) && s(o.get(at)));
				break;
			case "set": p(e) && s(o.get(it));
		}
	}
	Ke();
}
function st(e, t) {
	let n = rt.get(e);
	return n && n.get(t);
}
function ct(e) {
	let t = /* @__PURE__ */ P(e);
	return t === e || (O(t, "iterate", ot), /* @__PURE__ */ N(e)) ? t : /* @__PURE__ */ M(e) ? /* @__PURE__ */ Wt(e) ? t.map((e) => qt(F(e))) : t.map(qt) : t.map(F);
}
function lt(e) {
	return O(e = /* @__PURE__ */ P(e), "iterate", ot), e;
}
function A(e, t) {
	return /* @__PURE__ */ M(e) ? qt(/* @__PURE__ */ Wt(e) ? F(t) : t) : F(t);
}
var ut = {
	__proto__: null,
	[Symbol.iterator]() {
		return dt(this, Symbol.iterator, (e) => A(this, e));
	},
	concat(...e) {
		return ct(this).concat(...e.map((e) => f(e) ? ct(e) : e));
	},
	entries() {
		return dt(this, "entries", (e) => (e[1] = A(this, e[1]), e));
	},
	every(e, t) {
		return j(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return j(this, "filter", e, t, (e) => e.map((e) => A(this, e)), arguments);
	},
	find(e, t) {
		return j(this, "find", e, t, (e) => A(this, e), arguments);
	},
	findIndex(e, t) {
		return j(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return j(this, "findLast", e, t, (e) => A(this, e), arguments);
	},
	findLastIndex(e, t) {
		return j(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return j(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return ht(this, "includes", e);
	},
	indexOf(...e) {
		return ht(this, "indexOf", e);
	},
	join(e) {
		return ct(this).join(e);
	},
	lastIndexOf(...e) {
		return ht(this, "lastIndexOf", e);
	},
	map(e, t) {
		return j(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return gt(this, "pop");
	},
	push(...e) {
		return gt(this, "push", e);
	},
	reduce(e, ...t) {
		return mt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return mt(this, "reduceRight", e, t);
	},
	shift() {
		return gt(this, "shift");
	},
	some(e, t) {
		return j(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return gt(this, "splice", e);
	},
	toReversed() {
		return ct(this).toReversed();
	},
	toSorted(e) {
		return ct(this).toSorted(e);
	},
	toSpliced(...e) {
		return ct(this).toSpliced(...e);
	},
	unshift(...e) {
		return gt(this, "unshift", e);
	},
	values() {
		return dt(this, "values", (e) => A(this, e));
	}
};
function dt(e, t, n) {
	let r = lt(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ N(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => ft(a.next(), n), i !== pt[t] && Object.defineProperties(e, {
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
		a._next = a.next, a.next = () => ft(a._next(), n);
	}
	return a;
}
function ft(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var pt = Array.prototype;
function j(e, t, n, r, i, a) {
	let o = lt(e), s = o !== e && !/* @__PURE__ */ N(e), c = o[t];
	if (c !== pt[t]) {
		let t = c.apply(e, a);
		return s ? F(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, A(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function mt(e, t, n, r) {
	let i = lt(e), a = i !== e && !/* @__PURE__ */ N(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = A(e, t)), n.call(this, t, A(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? A(e, c) : c;
}
function ht(e, t, n) {
	let r = /* @__PURE__ */ P(e);
	O(r, "iterate", ot);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Gt(n[0]) ? (n[0] = /* @__PURE__ */ P(n[0]), r[t](...n)) : i;
}
function gt(e, t, n = []) {
	Ge();
	let r = D(), i = (/* @__PURE__ */ P(e))[t].apply(e, n);
	return D(r), Ke(), i;
}
var _t = /*@__PURE__*/ e("__proto__,__v_isRef,__isVue"), vt = new Set(/*@__PURE__*/ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(v));
function yt(e) {
	v(e) || (e = String(e));
	let t = /* @__PURE__ */ P(this);
	return O(t, "has", e), t.hasOwnProperty(e);
}
var bt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Rt : Lt : i ? It : Ft).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = f(e);
		if (!r) {
			let e;
			if (a && (e = ut[t])) return e;
			if (t === "hasOwnProperty") return yt;
		}
		let o = /* @__PURE__ */ I(e), s = Reflect.get(e, t, o ? e : n);
		if (o && t !== "value" || (v(t) ? vt.has(t) : _t(t)) || (r || O(e, "get", t), i)) return s;
		if (/* @__PURE__ */ I(s)) {
			let e = a && re(t) ? s : s.value;
			return r && y(e) ? /* @__PURE__ */ Ht(e) : e;
		}
		return y(s) ? r ? /* @__PURE__ */ Ht(s) : /* @__PURE__ */ Bt(s) : s;
	}
}, xt = class extends bt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = f(e) && re(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ M(i);
			if (!/* @__PURE__ */ N(n) && !/* @__PURE__ */ M(n) && (i = /* @__PURE__ */ P(i), n = /* @__PURE__ */ P(n)), !a && /* @__PURE__ */ I(i) && !/* @__PURE__ */ I(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : d(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ I(e) ? e : r);
		return e === /* @__PURE__ */ P(r) && s && (o ? T(n, i) && k(e, "set", t, n, i) : k(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = d(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && k(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return v(t) && vt.has(t) || O(e, "has", t), n;
	}
	ownKeys(e) {
		return O(e, "iterate", f(e) ? "length" : it), Reflect.ownKeys(e);
	}
}, St = class extends bt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Ct = /*@__PURE__*/ new xt(), wt = /*@__PURE__*/ new St(), Tt = /*@__PURE__*/ new xt(!0), Et = (e) => e, Dt = (e) => Reflect.getPrototypeOf(e);
function Ot(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ P(i), o = p(a), s = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? Et : t ? qt : F;
		return !t && O(a, "iterate", l ? at : it), c(Object.create(u), { next() {
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
function kt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function At(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ P(r), a = /* @__PURE__ */ P(n);
			e || (T(n, a) && O(i, "get", n), O(i, "get", a));
			let { has: o } = Dt(i), s = t ? Et : e ? qt : F;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && O(/* @__PURE__ */ P(t), "iterate", it), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ P(n), i = /* @__PURE__ */ P(t);
			return e || (T(t, i) && O(r, "has", t), O(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ P(a), s = t ? Et : e ? qt : F;
			return !e && O(o, "iterate", it), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return c(n, e ? {
		add: kt("add"),
		set: kt("set"),
		delete: kt("delete"),
		clear: kt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ P(this), r = Dt(n), i = /* @__PURE__ */ P(e), a = !t && !/* @__PURE__ */ N(e) && !/* @__PURE__ */ M(e) ? i : e;
			return r.has.call(n, a) || T(e, a) && r.has.call(n, e) || T(i, a) && r.has.call(n, i) || (n.add(a), k(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ N(n) || /* @__PURE__ */ M(n) || (n = /* @__PURE__ */ P(n));
			let r = /* @__PURE__ */ P(this), { has: i, get: a } = Dt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ P(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? T(n, s) && k(r, "set", e, n, s) : k(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ P(this), { has: n, get: r } = Dt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ P(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && k(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ P(this), t = e.size !== 0, n = e.clear();
			return t && k(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Ot(r, e, t);
	}), n;
}
function jt(e, t) {
	let n = At(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(d(n, i) && i in r ? n : r, i, a);
}
var Mt = { get: /*@__PURE__*/ jt(!1, !1) }, Nt = { get: /*@__PURE__*/ jt(!1, !0) }, Pt = { get: /*@__PURE__*/ jt(!0, !1) }, Ft = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap();
function zt(e) {
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
function Bt(e) {
	return /* @__PURE__ */ M(e) ? e : Ut(e, !1, Ct, Mt, Ft);
}
/*@__NO_SIDE_EFFECTS__*/
function Vt(e) {
	return Ut(e, !1, Tt, Nt, It);
}
/*@__NO_SIDE_EFFECTS__*/
function Ht(e) {
	return Ut(e, !0, wt, Pt, Lt);
}
function Ut(e, t, n, r, i) {
	if (!y(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = zt(te(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
/*@__NO_SIDE_EFFECTS__*/
function Wt(e) {
	return /* @__PURE__ */ M(e) ? /* @__PURE__ */ Wt(e.__v_raw) : !!(e && e.__v_isReactive);
}
/*@__NO_SIDE_EFFECTS__*/
function M(e) {
	return !!(e && e.__v_isReadonly);
}
/*@__NO_SIDE_EFFECTS__*/
function N(e) {
	return !!(e && e.__v_isShallow);
}
/*@__NO_SIDE_EFFECTS__*/
function Gt(e) {
	return e ? !!e.__v_raw : !1;
}
/*@__NO_SIDE_EFFECTS__*/
function P(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ P(t) : e;
}
function Kt(e) {
	return !d(e, "__v_skip") && Object.isExtensible(e) && fe(e, "__v_skip", !0), e;
}
var F = (e) => y(e) ? /* @__PURE__ */ Bt(e) : e, qt = (e) => y(e) ? /* @__PURE__ */ Ht(e) : e;
/*@__NO_SIDE_EFFECTS__*/
function I(e) {
	return e ? e.__v_isRef === !0 : !1;
}
/*@__NO_SIDE_EFFECTS__*/
function Jt(e) {
	return Xt(e, F);
}
/*@__NO_SIDE_EFFECTS__*/
function Yt(e) {
	return Xt(e);
}
function Xt(e, t) {
	return /* @__PURE__ */ I(e) ? e : new Zt(e, t);
}
var Zt = class {
	constructor(e, t) {
		this.subs = void 0, this.subsTail = void 0, this.flags = 1, this.__v_isRef = !0, this.__v_isShallow = !1, this._oldValue = this._rawValue = t ? /* @__PURE__ */ P(e) : e, this._value = t ? t(e) : e, this._wrap = t, this.__v_isShallow = !t;
	}
	get dep() {
		return this;
	}
	get value() {
		if (Qt(this), this.flags & 16 && this.update()) {
			let e = this.subs;
			e !== void 0 && et(e);
		}
		return this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ N(e) || /* @__PURE__ */ M(e);
		if (e = n ? e : /* @__PURE__ */ P(e), T(e, t)) {
			this.flags |= 16, this._rawValue = e, this._value = !n && this._wrap ? this._wrap(e) : e;
			let t = this.subs;
			t !== void 0 && (Ye(t), Le || Qe());
		}
	}
	update() {
		return this.flags &= -17, T(this._oldValue, this._oldValue = this._rawValue);
	}
};
function Qt(e) {
	Re !== void 0 && qe(e, Re);
}
function $t(e) {
	return /* @__PURE__ */ I(e) ? e.value : e;
}
function en(e) {
	return g(e) ? e() : $t(e);
}
var tn = {
	get: (e, t, n) => t === "__v_raw" ? e : $t(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ I(i) && !/* @__PURE__ */ I(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function nn(e) {
	return /* @__PURE__ */ Wt(e) ? e : new Proxy(e, tn);
}
var rn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = v(t) ? t : String(t), this._raw = /* @__PURE__ */ P(e);
		let r = !0, i = e;
		if (!f(e) || v(this._key) || !re(this._key)) do
			r = !/* @__PURE__ */ Gt(i) || /* @__PURE__ */ N(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = $t(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ I(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ I(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return st(this._raw, this._key);
	}
}, an = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
/*@__NO_SIDE_EFFECTS__*/
function on(e, t, n) {
	return /* @__PURE__ */ I(e) ? e : g(e) ? new an(e) : y(e) && arguments.length > 1 ? sn(e, t, n) : /* @__PURE__ */ Jt(e);
}
function sn(e, t, n) {
	return new rn(e, t, n);
}
var cn = class {
	fn() {}
	constructor(e) {
		this.deps = void 0, this.depsTail = void 0, this.subs = void 0, this.subsTail = void 0, this.flags = 18, this.cleanups = [], this.cleanupsLength = 0, e !== void 0 && (this.fn = e), L && qe(this, L);
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
		ln(this);
		let e = Xe(this);
		Be();
		try {
			return this.fn();
		} finally {
			Ve(), Ze(this, e);
			let t = this.flags;
			(t & 136) == 136 && (this.flags = t & -9, this.notify());
		}
	}
	stop() {
		if (!this.active) return;
		this.flags = 1024;
		let e = this.deps;
		for (; e !== void 0;) e = Je(e, this);
		let t = this.subs;
		t !== void 0 && Je(t), ln(this);
	}
	get dirty() {
		let e = this.flags;
		if (e & 16) return !0;
		if (e & 32) {
			if ($e(this.deps, this)) return this.flags = e | 16, !0;
			this.flags = e & -33;
		}
		return !1;
	}
};
function ln(e) {
	let t = e.cleanupsLength;
	if (t) {
		for (let n = 0; n < t; n++) e.cleanups[n]();
		e.cleanupsLength = 0;
	}
}
var L, un = class {
	constructor(e = !1) {
		this.deps = void 0, this.depsTail = void 0, this.subs = void 0, this.subsTail = void 0, this.flags = 0, this.cleanups = [], this.cleanupsLength = 0, !e && L && qe(this, L);
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
		let t = L;
		try {
			return L = this, e();
		} finally {
			L = t;
		}
	}
	stop() {
		if (!this.active) return;
		this.flags = 1024, this.reset();
		let e = this.subs;
		e !== void 0 && Je(e);
	}
	reset() {
		let e = this.deps;
		for (; e !== void 0;) {
			let t = e.dep;
			"stop" in t ? (e = e.nextDep, t.stop()) : e = Je(e, this);
		}
		ln(this);
	}
};
function dn(e) {
	try {
		return L;
	} finally {
		L = e;
	}
}
var fn = class {
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
			if ($e(this.deps, this)) return this.flags = e | 16, !0;
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
		if (e & 16 || e & 32 && $e(this.deps, this)) {
			if (this.update()) {
				let e = this.subs;
				e !== void 0 && et(e);
			}
		} else e & 32 && (this.flags = e & -33);
		return Re === void 0 ? L !== void 0 && qe(this, L) : qe(this, Re), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
	update() {
		let e = Xe(this);
		try {
			let e = this._value, t = this.fn(e);
			return T(e, t) ? (this._value = t, !0) : !1;
		} finally {
			Ze(this, e);
		}
	}
};
/*@__NO_SIDE_EFFECTS__*/
function pn(e, t, n = !1) {
	let r, i;
	return g(e) ? r = e : (r = e.get, i = e.set), new fn(r, i);
}
var mn = {}, hn = void 0;
function gn(e, t = !1, n = hn) {
	if (n) {
		let { call: t } = n.options, r = t ? () => t(e, 4) : e;
		n.cb ? (n.cbCleanups ||= []).push(r) : n.cleanups[n.cleanupsLength++] = r;
	}
}
var _n = class extends cn {
	constructor(e, n, i = t) {
		let { deep: a, once: o, call: s, onWarn: c } = i, l, u = !1, d = !1;
		if (/* @__PURE__ */ I(e) ? (l = () => e.value, u = /* @__PURE__ */ N(e)) : /* @__PURE__ */ Wt(e) ? (l = () => vn(e, a), u = !0) : f(e) ? (d = !0, u = e.some((e) => /* @__PURE__ */ Wt(e) || /* @__PURE__ */ N(e)), l = () => e.map((e) => {
			if (/* @__PURE__ */ I(e)) return e.value;
			if (/* @__PURE__ */ Wt(e)) return vn(e, a);
			if (g(e)) return s ? s(e, 2) : e();
		})) : l = g(e) ? n ? s ? () => s(e, 2) : e : () => {
			if (this.cleanupsLength) {
				let e = D();
				try {
					ln(this);
				} finally {
					D(e);
				}
			}
			let t = hn;
			hn = this;
			try {
				return s ? s(e, 3, [this.boundCleanup]) : e(this.boundCleanup);
			} finally {
				hn = t;
			}
		} : r, n && a) {
			let e = l, t = a === !0 ? Infinity : a;
			l = () => R(e(), t);
		}
		if (super(l), this.cb = n, this.options = i, this.boundCleanup = (e) => gn(e, !1, this), this.forceTrigger = u, this.isMultiSource = d, o && n) {
			let e = n;
			n = (...t) => {
				try {
					return e(...t);
				} finally {
					this.stop();
				}
			};
		}
		this.cb = n, this.oldValue = d ? Array(e.length).fill(mn) : mn;
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
			let e = hn, r = D();
			try {
				this.cleanupCallback(), hn = this;
				let e = [
					n,
					t === mn ? void 0 : this.isMultiSource && t[0] === mn ? [] : t,
					this.boundCleanup
				];
				a ? a(this.cb, 3, e) : this.cb(...e);
			} finally {
				hn = e, D(r);
			}
		}
	}
};
function vn(e, t) {
	return t ? e : /* @__PURE__ */ N(e) || t === !1 || t === 0 ? R(e, 1) : R(e);
}
function R(e, t = Infinity, n) {
	if (t <= 0 || !y(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ I(e)) R(e.value, t, n);
	else if (f(e)) for (let r = 0; r < e.length; r++) R(e[r], t, n);
	else if (m(e) || p(e)) e.forEach((e) => {
		R(e, t, n);
	});
	else if (ne(e)) {
		for (let r in e) R(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && R(e[r], t, n);
	}
	return e;
}
// node_modules/.pnpm/@vue+runtime-core@3.6.0-rc.13/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function yn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		bn(e, t, n);
	}
}
function z(e, t, n, r) {
	if (g(e)) {
		let i = yn(e, t, n, r);
		return i && b(i) && i.catch((e) => {
			bn(e, t, n);
		}), i;
	}
	if (f(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(z(e[a], t, n, r));
		return i;
	}
}
function bn(e, n, r, i = !0) {
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
			let t = D();
			yn(a, null, 10, [
				e,
				i,
				o
			]), D(t);
			return;
		}
	}
	xn(e, r, n, i, o);
}
function xn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var Sn = [], B = [], V = null, Cn = null, wn = 0, H = 0, Tn = 0, En = /*@__PURE__*/ Promise.resolve();
function Dn(e) {
	let t = Cn || En;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function On(e, t, n, r) {
	for (; n < r;) {
		let i = n + r >>> 1;
		t[i].order <= e ? n = i + 1 : r = i;
	}
	return n;
}
function kn(e, t, n = !1, r = 0) {
	An(e, t === void 0 ? n ? -2 : Infinity : n ? t * 2 : r ? t * 2 + 1 + r / (r + 1) : t * 2 + 1, Sn, wn, H) && (wn++, Mn());
}
function An(e, t, n, r, i) {
	let a = e.flags;
	return a & 1 ? !1 : (e.flags = a | 1, e.order = t, i === r || t >= n[r - 1].order ? n[r] = e : n.splice(On(t, n, i, r), 0, e), !0);
}
var jn = () => {
	try {
		Rn();
	} catch (e) {
		throw Cn = null, (wn || B.length) && Mn(), e;
	}
};
function Mn() {
	Cn ||= En.then(jn);
}
function Nn(e, t = Infinity) {
	if (!f(e)) V && t === -1 ? V.splice(Tn, 0, e) : An(e, t, B, B.length, 0);
	else for (let n = 0; n < e.length; n++) An(e[n], t, B, B.length, 0);
	Mn();
}
function Pn(e, t, n) {
	for (let n = H; n < wn; n++) {
		let r = Sn[n];
		if (!(r.order & 1 || r.order === Infinity) && !(e && r.order !== e.uid * 2 || t !== void 0 && !(r.order >= t * 2))) {
			Sn.splice(n, 1), n = e ? n - 1 : H - 1, wn--, r.flags & 2 && (r.flags &= -2);
			try {
				r();
			} finally {
				r.flags & 2 || (r.flags &= -2);
			}
		}
	}
}
function Fn(e, t, n = 0) {
	if (B.length) {
		let e = B;
		if (t) {
			e = [];
			let r = 0;
			for (let i = 0; i < B.length; i++) {
				let a = B[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? B[r++] = a : e.push(a);
			}
			B.length = r;
		} else B = [];
		if (V) {
			for (let t = 0; t < e.length; t++) V.push(e[t]);
			return;
		}
		V = e;
		try {
			for (; Tn < V.length;) {
				let e = V[Tn++];
				if (e.flags & 2 && (e.flags &= -2), !(e.flags & 4)) try {
					e();
				} finally {
					e.flags & 2 || (e.flags &= -2);
				}
			}
		} finally {
			for (; Tn < V.length;) V[Tn++].flags &= -2;
			V = null, Tn = 0;
		}
	}
}
var In = !1;
function Ln(e, t) {
	if (In) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(B);
	e(), In = !0;
	try {
		Pn(void 0, t), Fn(void 0, n, t);
	} finally {
		In = !1;
	}
}
function Rn(e) {
	try {
		for (; H < wn;) {
			let e = Sn[H];
			if (Sn[H++] = void 0, !(e.flags & 4)) {
				e.flags & 2 && (e.flags &= -2);
				try {
					e();
				} catch (t) {
					bn(t, e.i, e.i ? 15 : 14);
				} finally {
					e.flags & 2 || (e.flags &= -2);
				}
			}
		}
	} finally {
		for (; H < wn;) Sn[H].flags &= -2, Sn[H++] = void 0;
		H = 0, wn = 0, Sn.length = 0, Fn(e), wn || B.length ? Rn(e) : Cn = null;
	}
}
var U = null, zn = null;
function Bn(e) {
	let t = U;
	return U = e, zn = e && e.type.__scopeId || null, t;
}
function Vn(e, t = U, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ua(-1);
		let i = Bn(t), a = oa.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = oa.length; e > a; e--) ca();
			Bn(i), r._d && ua(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Hn(e, n) {
	if (U === null) return e;
	let r = Wa(U), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (g(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && R(o), i.push({
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
function Un(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		if (c) {
			let r = D();
			z(c, n, 8, [
				e.el,
				s,
				e,
				t
			]), D(r);
		}
	}
}
function Wn(e, t) {
	if (Z) {
		let n = Z.provides, r = Z.parent && Z.parent.provides;
		r === n && (n = Z.provides = Object.create(r)), n[e] = t;
	}
}
function Gn(e, t, n = !1) {
	let r = Ea();
	if (r || ri) {
		let i = ri ? ri._context.provides : r ? r.parent == null || r.ce ? r.appContext && r.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && g(t) ? t.call(r && r.proxy) : t;
	}
}
var Kn = Symbol.for("v-scx"), qn = () => Gn(Kn);
function Jn(e, t, n) {
	return Xn(e, t, n);
}
var Yn = class extends _n {
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
			e === "post" ? G(t, void 0, t.i ? t.i.suspense : null) : e === "pre" ? kn(t, t.i ? t.i.uid : void 0, !0) : t();
		}
	}
};
function Xn(e, n, i = t) {
	let { immediate: a, deep: o, flush: s = "pre", once: l } = i, u = c({}, i), d = n && a || !n && s !== "post", f;
	if (Da) {
		if (s === "sync") {
			let e = qn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = Z;
	u.call = (e, t, n) => z(e, p, t, n);
	let m = new Yn(p, e, n, u, s);
	n ? m.run(!0) : s === "post" ? G(m.job, void 0, p && p.suspense) : m.run(!0);
	let h = m.stop.bind(m);
	return h.pause = m.pause.bind(m), h.resume = m.resume.bind(m), h.stop = h, Da && (f ? f.push(h) : d && h()), h;
}
function Zn(e, t, n) {
	let r = this.proxy, i = _(e) ? e.includes(".") ? Qn(r, e) : () => r[e] : e.bind(r, r), a;
	g(t) ? a = t : (a = t.handler, n = t);
	let o = Aa(this), s = Xn(i, a.bind(r), n);
	return ja(o), s;
}
function Qn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var $n = !1, er = Symbol("_vte"), tr = (e) => e.__isTeleport, nr = Symbol("_leaveCb");
function rr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== ra) {
			t = n;
			break;
		}
	}
	return t;
}
function ir(e) {
	if (!gr(e)) return tr(e.type) && e.children ? rr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && g(n.default)) return n.default();
	}
}
function ar(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		if (e.transition = t, 1) {
			let n = e.component.subTree;
			return ar(tr(n.type) && ir(n) || n, t);
		}
	} else if (e.shapeFlag & 128) {
		let n = e.ssContent.transition = t.clone(e.ssContent), r = e.ssFallback.transition = t.clone(e.ssFallback);
		return e.suspense && e.suspense.activeBranch === e.ssFallback ? r : n;
	} else if (e.transition = t, e.type === K && f(e.children)) {
		let n = fi(e.children, !1);
		n && ar(n, t);
	}
	return t;
}
function or(e) {
	if (e.component) return or(e.component.subTree);
	if (e.type === K) {
		let t = f(e.children) && fi(e.children, !1);
		return t ? or(t) : void 0;
	}
	if (e.type !== ra) return e;
}
/*@__NO_SIDE_EFFECTS__*/
function sr(e, t) {
	return g(e) ? /* @__PURE__ */ c({ name: e.name }, t, { setup: e }) : e;
}
function cr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function lr(e) {
	let n = Ea(), r = /* @__PURE__ */ Yt(null);
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
function ur(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var dr = /* @__PURE__ */ new WeakMap();
function fr(e, n, r, i, a = !1) {
	if (f(e)) {
		e.forEach((e, t) => fr(e, n && (f(n) ? n[t] : n), r, i, a));
		return;
	}
	if (hr(i) && !a) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && fr(e, n, r, i.component.subTree);
		return;
	}
	let o = i.shapeFlag & 4 ? Wa(i.component) : i.el, s = a ? null : o, { i: c, r: u } = e, d = n && n.r, p = c.refs === t ? c.refs = {} : c.refs, m = c.setupState, h = pr(m, p), v = (e, t) => !(t && ur(p, t));
	if (d != null && d !== u) {
		if (mr(n), _(d)) p[d] = null, h(d) && (m[d] = null);
		else if (/* @__PURE__ */ I(d)) {
			let e = n;
			v(d, e.k) && (d.value = null), e.k && (p[e.k] = null);
		}
	}
	if (g(u)) yn(u, c, 12, [s, p]);
	else {
		let t = _(u), n = /* @__PURE__ */ I(u);
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
					i(), dr.delete(e);
				};
				dr.set(e, t), G(t, -1, r);
			} else mr(e), i();
		}
	}
}
function pr(e, n) {
	let r = /* @__PURE__ */ P(e);
	return e === void 0 || e === t ? i : (e) => !ur(n, e) && d(r, e);
}
function mr(e) {
	let t = dr.get(e);
	t && (t.flags |= 4, dr.delete(e));
}
var hr = (e) => !!e.type.__asyncLoader, gr = (e) => e.type.__isKeepAlive;
function _r(e, t) {
	yr(e, "a", t);
}
function vr(e, t) {
	yr(e, "da", t);
}
function yr(e, t, n = Ea()) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (xr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) {
			let i = e.parent;
			gr(i.vapor ? i : i.vnode) && br(r, t, n, e), e = e.parent;
		}
	}
}
function br(e, t, n, r) {
	let i = xr(t, e, r, !0);
	Or(() => {
		l(r[t], i);
	}, n);
}
function xr(e, t, n = Z, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			let i = D(), a = Aa(n);
			try {
				return z(t, n, e, r);
			} finally {
				ja(a), D(i);
			}
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Sr = /* @__NO_SIDE_EFFECTS__ */ (e) => (t, n = Z) => {
	Da && e !== "sp" || xr(e, (...e) => t(...e), n);
}, Cr = /* @__PURE__ */ Sr("bm"), wr = /* @__PURE__ */ Sr("m"), Tr = /* @__PURE__ */ Sr("bu"), Er = /* @__PURE__ */ Sr("u"), Dr = /* @__PURE__ */ Sr("bum"), Or = /* @__PURE__ */ Sr("um"), kr = /* @__PURE__ */ Sr("sp"), Ar = /* @__PURE__ */ Sr("rtg"), jr = /* @__PURE__ */ Sr("rtc");
function Mr(e, t = Z) {
	xr("ec", e, t);
}
var Nr = Symbol.for("v-ndc"), Pr = (e) => !e || e.vapor ? null : Ia(e) ? Wa(e) : Pr(e.parent), Fr, Ir = () => (Fr ||= c(Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Pr(e.parent),
	$root: (e) => Pr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Gr(e),
	$forceUpdate: (e) => e.f ||= () => {
		kn(e.update);
	},
	$nextTick: (e) => e.n ||= Dn.bind(e.proxy),
	$watch: (e) => Zn.bind(e)
}), Fr), Lr = (e, n) => e !== t && !e.__isScriptSetup && d(e, n), Rr = {
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
			else if (Lr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && d(a, n)) return s[n] = 2, a[n];
			else if (d(o, n)) return s[n] = 3, o[n];
			else if (r !== t && d(r, n)) return s[n] = 4, r[n];
			else Br && (s[n] = 0);
		}
		let u = Ir()[n], f, p;
		if (u) return n === "$attrs" && O(e.attrs, "get", ""), u(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && d(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, d(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Lr(a, n) ? (a[n] = r, !0) : i !== t && d(i, n) ? (i[n] = r, !0) : d(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && d(e, c) || Lr(n, c) || d(o, c) || d(i, c) || d(Ir(), c) || d(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? d(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function zr(e) {
	return f(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Br = !0;
function Vr(e) {
	let t = Gr(e), n = e.proxy, i = e.ctx;
	Br = !1, t.beforeCreate && Ur(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: p, mounted: m, beforeUpdate: h, updated: _, activated: v, deactivated: b, beforeDestroy: ee, beforeUnmount: x, destroyed: te, unmounted: ne, render: re, renderTracked: ie, renderTriggered: ae, errorCaptured: oe, serverPrefetch: se, expose: S, inheritAttrs: ce, components: C, directives: le, filters: ue } = t;
	if (u && Hr(u, i, null), s) for (let e in s) {
		let t = s[e];
		g(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		y(t) && (e.data = /* @__PURE__ */ Bt(t));
	}
	if (Br = !0, o) for (let e in o) {
		let t = o[e], a = Q({
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
	if (c) for (let e in c) Wr(c[e], i, n, e);
	if (l) {
		let e = g(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Wn(t, e[t]);
		});
	}
	d && Ur(d, e, "c");
	function w(e, t) {
		f(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (w(Cr, p), w(wr, m), w(Tr, h), w(Er, _), w(_r, v), w(vr, b), w(Mr, oe), w(jr, ie), w(Ar, ae), w(Dr, x), w(Or, ne), w(kr, se), f(S)) {
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
	re && e.render === r && (e.render = re), ce != null && (e.inheritAttrs = ce), C && (e.components = C), le && (e.directives = le), se && cr(e);
}
function Hr(e, t, n = r) {
	f(e) && (e = Xr(e));
	for (let n in e) {
		let r = e[n], i;
		i = y(r) ? "default" in r ? Gn(r.from || n, r.default, !0) : Gn(r.from || n) : Gn(r), /* @__PURE__ */ I(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Ur(e, t, n) {
	z(f(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Wr(e, t, n, r) {
	let i = r.includes(".") ? Qn(n, r) : () => n[r];
	if (_(e)) {
		let n = t[e];
		g(n) && Jn(i, n);
	} else if (g(e)) Jn(i, e.bind(n));
	else if (y(e)) {
		if (f(e)) e.forEach((e) => Wr(e, t, n, r));
		else {
			let r = g(e.handler) ? e.handler.bind(n) : t[e.handler];
			g(r) && Jn(i, r, e);
		}
	}
}
function Gr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Kr(c, e, o, !0)), Kr(c, t, o)), y(t) && a.set(t, c), c;
}
function Kr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Kr(e, a, n, !0), i && i.forEach((t) => Kr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = qr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var qr = {
	data: Jr,
	props: Qr,
	emits: Qr,
	methods: Zr,
	computed: Zr,
	beforeCreate: W,
	created: W,
	beforeMount: W,
	mounted: W,
	beforeUpdate: W,
	updated: W,
	beforeDestroy: W,
	beforeUnmount: W,
	destroyed: W,
	unmounted: W,
	activated: W,
	deactivated: W,
	errorCaptured: W,
	serverPrefetch: W,
	components: Zr,
	directives: Zr,
	watch: $r,
	provide: Jr,
	inject: Yr
};
function Jr(e, t) {
	return t ? e ? function() {
		return c(g(e) ? e.call(this, this) : e, g(t) ? t.call(this, this) : t);
	} : t : e;
}
function Yr(e, t) {
	return Zr(Xr(e), Xr(t));
}
function Xr(e) {
	if (f(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function W(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Zr(e, t) {
	return e ? c(Object.create(null), e, t) : t;
}
function Qr(e, t) {
	return e ? f(e) && f(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : c(Object.create(null), zr(e), zr(t ?? {})) : t;
}
function $r(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = c(Object.create(null), e);
	for (let r in t) n[r] = W(e[r], t[r]);
	return n;
}
function ei() {
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
var ti = 0;
function ni(e, t, n, r) {
	return function(r, i = null) {
		g(r) || (r = c({}, r)), i != null && !y(i) && (i = null);
		let a = ei(), o = /* @__PURE__ */ new WeakSet(), s = [], l = !1, u = a.app = {
			_uid: ti++,
			_component: r,
			_props: i,
			_container: null,
			_context: a,
			_instance: null,
			version: Ka,
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
				l && (z(s, u._instance, 16), t(u), delete u._container.__vue_app__);
			},
			provide(e, t) {
				return a.provides[e] = t, u;
			},
			runWithContext(e) {
				let t = ri;
				ri = u;
				try {
					return e();
				} finally {
					ri = t;
				}
			}
		};
		return u;
	};
}
var ri = null, ii = (e, t, n) => n(e, w(t)) || n(e, `${S(t)}Modifiers`) || n(e, `${C(t)}Modifiers`);
function ai(e, n, ...r) {
	return oi(e, e.vnode.props || t, si, n, ...r);
}
function oi(e, t, n, r, ...i) {
	if (e.isUnmounted) return;
	let a = i, o = r.startsWith("update:"), s = o && ii(t, r.slice(7), n);
	s && (s.trim && (a = i.map((e) => _(e) ? e.trim() : e)), s.number && (a = a.map(pe)));
	let c, l = n(t, c = ue(r)) || n(t, c = ue(S(r)));
	!l && o && (l = n(t, c = ue(C(r)))), l && z(l, e, 6, a);
	let u = n(t, c + "Once");
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, z(u, e, 6, a);
	}
}
function si(e, t) {
	return e[t];
}
var ci = /* @__PURE__ */ new WeakMap();
function li(e, t, n = !1) {
	let r = n ? ci : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!g(e)) {
		let r = (e) => {
			let n = li(e, t, !0);
			n && (s = !0, c(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (y(e) && r.set(e, null), null) : (f(a) ? a.forEach((e) => o[e] = null) : c(o, a), y(e) && r.set(e, o), o);
}
function ui(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), d(e, t[0].toLowerCase() + t.slice(1)) || d(e, C(t)) || d(e, t));
}
function di(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Bn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = J(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = J(e.length > 1 ? e(f, {
				attrs: c,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? c : mi(c);
		}
	} catch (t) {
		oa.length = 0, bn(t, e, 1), v = va(ra);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(s) && (y = hi(y, a)), b = xa(b, y, !1, !0));
	}
	return n.dirs && (b = xa(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && ar(tr(b.type) && ir(b) || b, n.transition), v = b, Bn(_), v;
}
function fi(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (pa(r)) {
			if (r.type !== ra || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var pi = (e) => e === "class" || e === "style" || a(e), mi = (e) => {
	let t;
	for (let n in e) pi(n) && ((t ||= {})[n] = e[n]);
	return t;
}, hi = (e, t) => {
	let n = {};
	for (let r in e) s(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function gi(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? _i(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (vi(o, r, n) && !ui(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || _i(r, o, l) : !!o;
	return !1;
}
function _i(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!d(e, a) || vi(t, e, a) && !ui(n, a)) return !0;
	}
	return !1;
}
function vi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && y(r) && y(i) ? !Ae(r, i) : r !== i;
}
function yi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t && !t.vapor;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var bi = {}, xi = () => Object.create(bi), Si = (e) => Object.getPrototypeOf(e) === bi;
function Ci(e, t, n, r = !1) {
	let i = e.props = {}, a = xi();
	e.propsDefaults = Object.create(null), Ti(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Vt(i) : e.type.props ? i : a, e.attrs = a;
}
function wi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ P(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (ui(e.emitsOptions, o)) continue;
				let s = t[o];
				if (c) {
					if (d(a, o)) s !== a[o] && (a[o] = s, l = !0);
					else {
						let t = S(o);
						i[t] = Ei(c, t, s, e, Di);
					}
				} else s !== a[o] && (a[o] = s, l = !0);
			}
		}
	} else {
		Ti(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (d(t, a) || (r = C(a)) !== a && d(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Ei(c, a, void 0, e, Di, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && d(t, e) || (delete a[e], l = !0);
	}
	l && k(e.attrs, "set", "");
}
function Ti(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (ie(t)) continue;
		let l = n[t], u;
		a && d(a, u = S(t)) ? !o || !o.includes(u) ? r[u] = l : (c ||= {})[u] = l : ui(e.emitsOptions, t) || t in i && l === i[t] || (i[t] = l, s = !0);
	}
	if (o) {
		let n = c || t;
		for (let t = 0; t < o.length; t++) {
			let i = o[t];
			r[i] = Ei(a, i, n[i], e, Di, !d(n, i));
		}
	}
	return s;
}
function Ei(e, t, n, r, i, a = !1) {
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
function Di(e, t, n) {
	let r, i = Aa(t), a = /* @__PURE__ */ P(t.props);
	return r = e.call(null, a), ja(i), r;
}
var Oi = /* @__PURE__ */ new WeakMap();
function ki(e, t, r = !1) {
	let i = r ? Oi : t.propsCache, a = i.get(e);
	if (a) return a;
	let o = e.props, s = {}, l = [], u = !1;
	if (!g(e)) {
		let n = (e) => {
			u = !0;
			let [n, r] = ki(e, t, !0);
			c(s, n), r && l.push(...r);
		};
		!r && t.mixins.length && t.mixins.forEach(n), e.extends && n(e.extends), e.mixins && e.mixins.forEach(n);
	}
	if (!o && !u) return y(e) && i.set(e, n), n;
	Ai(o, s, l);
	let d = [s, l];
	return y(e) && i.set(e, d), d;
}
function Ai(e, n, r) {
	if (f(e)) for (let r = 0; r < e.length; r++) {
		let i = S(e[r]);
		ji(i) && (n[i] = t);
	}
	else if (e) for (let t in e) {
		let i = S(t);
		if (ji(i)) {
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
function ji(e) {
	return e[0] !== "$" && !ie(e);
}
var Mi = (e) => e === "_" || e === "_ctx" || e === "$stable", Ni = (e) => f(e) ? e.map(J) : [J(e)], Pi = (e, t, n) => {
	if (t._n) return t;
	let r = Vn((...e) => Ni(t(...e)), n);
	return r._c = !1, r;
}, Fi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Mi(n)) continue;
		let i = e[n];
		if (g(i)) t[n] = Pi(n, i, r);
		else if (i != null) {
			let e = Ni(i);
			t[n] = () => e;
		}
	}
}, Ii = (e, t) => {
	let n = Ni(t);
	e.slots.default = () => n;
}, Li = (e, t, n) => {
	for (let r in t) (n || !Mi(r)) && (e[r] = t[r]);
}, Ri = (e, t, n) => {
	let r = e.slots = xi();
	if (e.vnode.shapeFlag & 32) {
		let i = t._;
		i ? (Li(r, t, n), n && fe(r, "_", i, !0)) : Fi(t, r, e);
	} else t && Ii(e, t);
}, zi = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let t = n._;
		t ? r && t === 1 ? o = !1 : Li(a, n, r) : (o = !n.$stable, Fi(n, a, e)), s = n;
	} else n && (Ii(e, n), s = { default: 1 });
	if (o) for (let e in a) !Mi(e) && s[e] == null && delete a[e];
}, Bi = !1;
function Vi() {
	Bi ||= !0;
}
var G = ta;
function Hi(e) {
	return Ui(e);
}
function Ui(e, i) {
	Vi();
	let a = ge();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !ma(e, t) && (i = Ce(e), E(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case na:
				y(e, t, r, i);
				break;
			case ra:
				b(e, t, r, i);
				break;
			case ia:
				e ?? ee(t, r, i, s);
				break;
			case K:
				C(e, t, r, i, a, o, s, c, l);
				break;
			case aa: break;
			default: f & 1 ? ne(e, t, r, i, a, o, s, c, l) : f & 6 ? le(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, Te);
		}
		d != null && a ? fr(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && fr(e.ref, null, o, e, !0);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && oe(e.children, d, null, r, i, Wi(e, a), s, u), _ && Un(e, null, r, "created"), ae(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ie(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && X(f, r, e);
		}
		_ && Un(e, null, r, "beforeMount"), g ? Xi(d, g, () => o(d, t, n), i) : o(d, t, n), ((f = m && m.onVnodeMounted) || _) && G(() => {
			try {
				f && X(f, r, e), _ && Un(e, null, r, "mounted");
			} finally {}
		}, void 0, i);
	}, ae = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		let a = Qi(t, i);
		for (let t = 0; t < a.length; t++) g(e, a[t]);
	}, oe = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? Y(e[l]) : J(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, se = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Gi(r, !1), (g = h.onVnodeBeforeUpdate) && X(g, r, n, e), f && Un(n, e, r, "beforeUpdate"), r && Gi(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? S(e.dynamicChildren, d, l, r, i, Wi(n, a), o) : s || me(e, n, l, null, r, i, Wi(n, a), o, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && G(() => {
			g && X(g, r, n, e), f && Un(n, e, r, "updated");
		}, void 0, i);
	}, S = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || $i(c), d = u && (c.type === K || !ma(c, l) || c.shapeFlag & 198) ? m(u) : n;
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
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), oe(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (S(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && qi(e, t, !0)) : me(e, t, n, f, i, a, s, c, l);
	}, le = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ue(t, n, r, i, a, o, c) : w(e, t, c);
	}, ue = (e, t, n, r, i, a, o) => {
		let c = e.component = Fa(e, r, i);
		if (gr(e) && (c.ctx.renderer = Te), La(c, !1, o), c.asyncDep) {
			if (i) {
				let e = c.vnode.el;
				i.registerDep(c, (t) => {
					let { vnode: n } = c;
					za(c, t, !1), e && (n.el = e);
					let r = !e && c.subTree.el;
					fe(c, n, m(e || c.subTree.el), e ? null : Ce(c.subTree), i, a, o), r && (n.placeholder = null, s(r)), yi(c, n.el);
				});
			}
			if (!e.el) {
				let r = c.subTree = va(ra);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else fe(c, e, t, n, i, a, o);
	}, w = (e, t, n) => {
		let r = t.component = e.component;
		if (gi(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, t.placeholder = e.placeholder, pe(r, t, n);
				return;
			}
			r.next = t, r.effect.run();
		} else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
	};
	class T extends cn {
		constructor(e, t, n, r, i, a, o) {
			let s = dn(e.scope);
			super(), this.instance = e, this.initialVNode = t, this.container = n, this.anchor = r, this.parentSuspense = i, this.namespace = a, this.optimized = o, dn(s), this.job = e.job = () => {
				this.dirty && this.run();
			}, this.job.i = e;
		}
		notify() {
			if (!(this.flags & 256)) {
				let e = this.job;
				kn(e, e.i.uid);
			}
		}
		fn() {
			let { instance: e, initialVNode: t, container: n, anchor: r, parentSuspense: i, namespace: a, optimized: o } = this;
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Ji(e);
					if (n) {
						t && (t.el = c.el, pe(e, t, o)), n.asyncDep.then(() => {
							G(() => {
								e.isUnmounted || e.update();
							}, void 0, i);
						});
						return;
					}
				}
				let l = t, u;
				Gi(e, !1), t ? (t.el = c.el, pe(e, t, o)) : t = c, n && de(n), (u = t.props && t.props.onVnodeBeforeUpdate) && X(u, s, t, c), Gi(e, !0);
				let d = di(e), f = e.subTree;
				e.subTree = d, v(f, d, m(f.el), Ce(f), e, i, a), t.el = d.el, l === null && yi(e, d.el), r && G(r, void 0, i), (u = t.props && t.props.onVnodeUpdated) && G(() => {
					u && X(u, s, t, c);
				}, void 0, i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, parent: u, root: d, type: f } = e, p = hr(t);
				if (Gi(e, !1), l && de(l), !p && (o = c && c.onVnodeBeforeMount) && X(o, u, t), Gi(e, !0), s && De) {
					let t = () => {
						e.subTree = di(e), De(s, e.subTree, e, i, null);
					};
					p && f.__asyncHydrate ? f.__asyncHydrate(s, e, t) : t();
				} else {
					d.ce && d.ce._hasShadowRoot() && d.ce._injectChildStyle(f, e.parent ? e.parent.type : void 0);
					let o = e.subTree = di(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (e.m && G(e.m, void 0, i), !p && (o = c && c.onVnodeMounted)) {
					let e = t;
					G(() => X(o, u, e), void 0, i);
				}
				(t.shapeFlag & 256 || u && u.vnode && hr(u.vnode) && u.vnode.shapeFlag & 256) && e.a && G(e.a, void 0, i), e.isMounted = !0, this.initialVNode = this.container = this.anchor = null;
			}
		}
	}
	let fe = (e, t, n, r, i, a, o) => {
		let s = e.effect = new T(e, t, n, r, i, a, o);
		e.update = s.run.bind(s), Gi(e, !0), s.run();
	}, pe = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, wi(e, t.props, r, n), zi(e, t.children, n);
		let i = D();
		Pn(e), D(i);
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
		m & 8 ? (u & 16 && Se(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? _e(l, d, n, r, i, a, o, s, c) : Se(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && oe(d, n, r, i, a, o, s, c));
	}, he = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let n = t[p] = l ? Y(t[p]) : J(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? Se(e, a, o, !0, !1, f) : oe(t, r, i, a, o, s, c, l, f);
	}, _e = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? Y(t[u]) : J(t[u]);
			if (ma(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? Y(t[p]) : J(t[p]);
			if (ma(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? Y(t[u]) : J(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) E(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Y(t[u]) : J(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, ee = !1, x = 0, te = Array(b);
			for (u = 0; u < b; u++) te[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					E(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (te[_ - h] === 0 && ma(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? E(n, a, o, !0) : (te[i - h] = u + 1, i >= x ? x = i : ee = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let ne = ee ? Fe(te) : n;
			for (_ = ne.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || $i(f) : i;
				te[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : ee && (_ < 0 || u !== ne[_] ? ve(n, r, p, 2, a) : _--);
			}
		}
	}, ve = (e, t, n, r, i, a = null) => {
		let { el: c, type: l, transition: u, children: d, shapeFlag: f } = e;
		if (f & 6) ve(e.component.subTree, t, n, r, i);
		else if (f & 128) e.suspense.move(t, n, r);
		else if (f & 64) l.move(e, t, n, Te, i);
		else if (l === K) {
			o(c, t, n);
			for (let e = 0; e < d.length; e++) ve(d[e], t, n, r, i);
			o(e.anchor, t, n);
		} else l === ia ? x(e, t, n) : r !== 2 && f & 1 && u ? r === 0 ? Xi(c, u, () => o(c, t, n), a, !0) : Zi(c, u, () => {
			e.ctx.isUnmounted ? s(c) : o(c, t, n);
		}, !0, !0) : o(c, t, n);
	}, E = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null) {
			let t = D();
			fr(s, null, n, e, !0), D(t);
		}
		if (p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !hr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && X(_, t, e), u & 6) xe(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Un(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Te, r) : l && !l.hasOnce && (a !== K || d > 0 && d & 64) ? Se(l, t, n, !1, !0) : (a === K && d & 384 || !i && u & 16) && Se(c, t, n), r && ye(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && G(() => {
			_ && X(_, t, e), h && Un(e, null, t, "unmounted"), v && (e.el = null);
		}, void 0, n);
	}, ye = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === K;
		if (a && !i) {
			be(n, r);
			return;
		}
		if (t === ia) {
			te(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? or(e) : e, c = () => {
			a ? m(n) && be(n, r) : s(n);
		};
		if (i) {
			let e = o && o.el, t = !!(o && o.shapeFlag & 1);
			Zi(e || n, i, c, t);
		} else c();
	}, be = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, xe = (e, t, n) => {
		let { bum: r, scope: i, effect: a, subTree: o, um: s, m: c, a: l } = e;
		Yi(c), Yi(l), r && de(r), i.stop(), a ? (a.stop(), E(o, e, t, n)) : e.vnode.el && o && (o.transition = e.vnode.transition, E(o, e, t, n)), s && G(s, void 0, t), G(() => e.isUnmounted = !0, void 0, t);
	}, Se = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) E(e[o], t, n, r, i);
	}, Ce = (e) => {
		if (e.shapeFlag & 6) return Ce(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[er];
		return n ? h(n) : t;
	}, we = (e, t, n) => {
		Ln(() => {
			e == null ? t._vnode && E(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : Pa());
	}, Te = {
		p: v,
		um: E,
		m: ve,
		r: ye,
		mt: ue,
		umt: xe,
		mc: oe,
		pc: me,
		pbc: S,
		n: Ce,
		o: e
	}, Ee, De;
	return i && ([Ee, De] = i(Te)), {
		render: we,
		hydrate: Ee,
		hydrateNode: De,
		internals: Te,
		createApp: ni((e, t, n, r) => {
			let i = e._ceVNode || va(e._component, e._props);
			return i.appContext = e._context, r === !0 ? r = "svg" : r === !1 && (r = void 0), n && Ee ? Ee(i, t) : we(i, t, r), i.component;
		}, (e) => {
			we(null, e._container);
		}, Wa, we)
	};
}
function Wi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Gi({ effect: e, job: t, vapor: n }, r) {
	r ? (e.flags |= 128, t.flags |= 2) : (e.flags &= -129, t.flags &= -3);
}
function Ki(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function qi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (f(r) && f(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Y(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && qi(t, a)), a.type === na && (a.patchFlag === -1 && (a = i[e] = Y(a)), a.el = t.el), a.type === ra && !a.el && (a.el = t.el);
	}
}
function Ji(e) {
	let t = e.subTree && e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Ji(t);
}
function Yi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 4;
}
function Xi(e, t, n, r, i = !1) {
	i && t.persisted && !e[nr] ? n() : i || Ki(r, t) ? (t.beforeEnter(e), n(), G(() => t.enter(e), void 0, r)) : n();
}
function Zi(e, t, n, r = !0, i = !1) {
	let a = () => {
		n(), t && (i || !t.persisted) && t.afterLeave && t.afterLeave();
	};
	if (i || r && t && !t.persisted) {
		let { leave: r, delayLeave: o } = t, s = () => {
			let o = e._isLeaving || !!e[nr];
			e._isLeaving && i && e[nr](!0), i && t.persisted && !o ? n() : r(e, a);
		};
		o ? o(e, a, s) : s();
	} else a();
}
function Qi(e, t, n = !0) {
	let r = [], i = t, a = e;
	for (; i;) {
		let e = i.subTree;
		if (!e) break;
		if (a === e || ea(e.type) && (e.ssContent === a || e.ssFallback === a)) {
			let e = i.vnode;
			e.scopeId && r.push(e.scopeId), e.slotScopeIds && r.push(...e.slotScopeIds), a = e, i = i.parent;
		} else break;
	}
	let o = $n && n && a.vaporScopeIds;
	return o && r.push(...o), r;
}
function $i(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? $i(t.subTree) : null;
}
var ea = (e) => e.__isSuspense;
function ta(e, t, n) {
	n && n.pendingBranch ? f(e) ? n.effects.push(...e) : n.effects.push(e) : Nn(e, t);
}
var K = Symbol.for("v-fgt"), na = Symbol.for("v-txt"), ra = Symbol.for("v-cmt"), ia = Symbol.for("v-stc"), aa = Symbol.for("v-vps"), oa = [], q = null;
function sa(e = !1) {
	oa.push(q = e ? null : []);
}
function ca() {
	oa.pop(), q = oa[oa.length - 1] || null;
}
var la = 1;
function ua(e, t = !1) {
	la += e, e < 0 && q && t && (q.hasOnce = !0);
}
function da(e) {
	return e.dynamicChildren = la > 0 ? q || n : null, ca(), la > 0 && q && q.push(e), e;
}
function fa(e, t, n, r, i, a) {
	return da(_a(e, t, n, r, i, a, !0));
}
function pa(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ma(e, t) {
	return e.type === t.type && e.key === t.key;
}
var ha = ({ key: e }) => e ?? null, ga = ({ ref: e, ref_key: t, ref_for: n }, r = U) => (typeof e == "number" && (e = "" + e), e == null ? null : _(e) || /* @__PURE__ */ I(e) || g(e) ? {
	i: r,
	r: e,
	k: t,
	f: !!n
} : e);
function _a(e, t = null, n = null, r = 0, i = null, a = e === K ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && ha(t),
		ref: t && ga(t),
		scopeId: zn,
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
		ctx: U
	};
	return s ? (wa(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= _(n) ? 8 : 16), la > 0 && !o && q && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && q.push(c), c;
}
var va = ya;
function ya(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== Nr || (e = ra), pa(e)) {
		let r = xa(e, t, !0);
		return n && wa(r, n), la > 0 && !a && q && (r.shapeFlag & 6 ? q[q.indexOf(e)] = r : q.push(r)), r.patchFlag = -2, r;
	}
	if (Ga(e) && (e = e.__vccOpts), t) {
		t = ba(t);
		let { class: e, style: n } = t;
		e && !_(e) && (t.class = Se(e)), y(n) && (/* @__PURE__ */ Gt(n) && !f(n) && (n = c({}, n)), t.style = ve(n));
	}
	let o = _(e) ? 1 : ea(e) ? 128 : tr(e) ? 64 : y(e) ? 4 : g(e) ? 2 : 0;
	return _a(e, t, n, r, i, o, a, !0);
}
function ba(e) {
	return e ? /* @__PURE__ */ Gt(e) || Si(e) ? c({}, e) : e : null;
}
function xa(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Ta(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && ha(l),
		ref: t && t.ref ? n && a ? f(a) ? a.concat(ga(t)) : [a, ga(t)] : ga(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== K ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && xa(e.ssContent),
		ssFallback: e.ssFallback && xa(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		vi: e.vi,
		vs: Sa(e, t),
		vb: e.vb,
		ibu: e.ibu,
		iu: e.iu,
		cacheIndex: e.cacheIndex
	};
	return c && r && ar(u, c.clone(u)), u;
}
function Sa(e, n) {
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
		e && (a ? i.attrs = Ta(a, e) : i.props = Ta(r.props, e));
	}
	return e.el && (i.state = r.state, i.ref = r.ref, i.scope = r.scope), i;
}
function Ca(e = " ", t = 0) {
	return va(na, null, e, t);
}
function J(e) {
	return e == null || typeof e == "boolean" ? va(ra) : f(e) ? va(K, null, e.slice()) : pa(e) ? Y(e) : va(na, null, String(e));
}
function Y(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : xa(e);
}
function wa(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (f(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), wa(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !Si(t) ? t._ctx = U : r === 3 && U && (U.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (g(t)) {
		if (r & 65) {
			wa(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: U
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [Ca(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function Ta(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = Se([t.class, r.class]));
		else if (e === "style") t.style = ve([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(f(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !s(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function X(e, t, n, r = null) {
	z(e, t, 7, [n, r]);
}
var Z = null, Ea = () => Z || U, Da = !1, Oa, ka;
{
	let e = ge(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ka = t("__VUE_INSTANCE_SETTERS__", (e) => Z = e), Oa = t("__VUE_SSR_SETTERS__", (e) => Da = e);
}
var Aa = (e, t = e === null ? void 0 : e.scope) => {
	try {
		return [Z, dn(t)];
	} finally {
		ka(e);
	}
}, ja = (e) => {
	dn(e[1]), ka(e[0]);
}, Ma = /*@__PURE__*/ ei(), Na = 0;
function Pa() {
	return Na;
}
function Fa(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || Ma, o = {
		uid: Na++,
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
		scope: new un(!0),
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
		propsOptions: ki(i, a),
		emitsOptions: li(i, a),
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
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = ai.bind(null, o), e.ce && e.ce(o), o;
}
function Ia(e) {
	return e.vnode.shapeFlag & 4;
}
function La(e, t = !1, n = !1) {
	t && Oa(t);
	let { props: r, children: i, vi: a } = e.vnode, o = Ia(e);
	Ci(e, r, o, t), Ri(e, i, n || t);
	let s = o ? Ra(e, t) : void 0;
	return t && Oa(!1), s;
}
function Ra(e, t) {
	let n = e.type;
	e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, Rr);
	let { setup: r } = n;
	if (r) {
		let n = D(), i = e.setupContext = r.length > 1 ? Ha(e) : null, a = Aa(e), o = yn(r, e, 0, [e.props, i]), s = b(o);
		if (D(n), ja(a), (s || e.sp) && !hr(e) && cr(e), s) {
			let n = () => {
				Aa(null, void 0);
			};
			if (o.then(n, n), t) return o.then((n) => {
				Oa(!0);
				try {
					za(e, n, t);
				} finally {
					Oa(!1);
				}
			}).catch((t) => {
				bn(t, e, 0);
			});
			e.asyncDep = o;
		} else za(e, o, t);
	} else Ba(e, t);
}
function za(e, t, n) {
	g(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : y(t) && (e.setupState = nn(t)), Ba(e, n);
}
function Ba(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = Aa(e), n = D();
		try {
			Vr(e);
		} finally {
			D(n), ja(t);
		}
	}
}
var Va = { get(e, t) {
	return O(e, "get", ""), e[t];
} };
function Ha(e) {
	return {
		attrs: new Proxy(e.attrs, Va),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => Ua(e, t)
	};
}
function Ua(e, t) {
	e.exposed = t || {};
}
function Wa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(nn(Kt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (!e.vapor) {
				let t = Ir();
				if (n in t) return t[n](e);
			}
		},
		has(t, n) {
			return n in t || !e.vapor && n in Ir();
		}
	}) : e.proxy;
}
function Ga(e) {
	return g(e) && "__vccOpts" in e;
}
var Q = (e, t) => /* @__PURE__ */ pn(e, t, Da), Ka = "3.6.0-rc.13", qa = void 0, Ja = typeof window < "u" && window.trustedTypes;
if (Ja) try {
	qa = /*@__PURE__*/ Ja.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Ya = qa ? (e) => qa.createHTML(e) : (e) => e, Xa = "http://www.w3.org/2000/svg", Za = "http://www.w3.org/1998/Math/MathML", $ = typeof document < "u" ? document : null, Qa = $ && /*@__PURE__*/ $.createElement("template"), $a = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? $.createElementNS(Xa, e) : t === "mathml" ? $.createElementNS(Za, e) : n ? $.createElement(e, { is: n }) : $.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => $.createTextNode(e),
	createComment: (e) => $.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => $.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			Qa.innerHTML = Ya(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
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
function ho(e, t, n, r, i, a = Ce(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(mo, t.slice(6, t.length)) : e.setAttributeNS(mo, t, n) : n == null || a && !we(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : v(n) ? String(n) : n);
}
function go(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Ya(n) : n);
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
		r === "boolean" ? n = we(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
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
				e && z(e, t, 5, a);
			}
		} else z(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Eo(), n;
}
var Oo = (e, t, n, r, i, o) => {
	let c = i === "svg";
	t === "class" ? to(e, r, c) : t === "style" ? oo(e, n, r) : a(t) ? s(t) || bo(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : ko(e, t, r, c)) ? (go(e, t, r, o), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || ho(e, t, r, c, o, t !== "value")) : e._isVueCE && (Ao(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !_(r))) ? go(e, S(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ho(e, t, r, c, o));
};
function ko(e, t, n, r) {
	return r ? !!(t === "innerHTML" || t === "textContent" || t in e && o(t) && g(n)) : Te(e.tagName, t) || o(t) && _(n) ? !1 : t in e;
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
	let r = /* @__PURE__ */ sr(e, t);
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
		this._connected = !1, Dn(() => {
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
		if (e) for (let t in e) d(this, t) || Object.defineProperty(this, t, { get: () => $t(e[t]) });
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
		let t = va(this._def, c(e, this._props));
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
	return Ko ||= Hi(Go);
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
function ms(e, t) {
	let n = /* @__PURE__ */ on(e), r = /* @__PURE__ */ on(t), i = Q(() => r.value ? n.value.states[r.value] : void 0);
	return {
		name: Q(() => i.value ? ts(i.value) : "-"),
		state: i,
		hass: n,
		id: r
	};
}
// src/composables/useLocalValue.ts
function hs(e) {
	let t = /* @__PURE__ */ Jt(e.get()), n = Q({
		get: () => t.value ?? e.get(),
		set: (n) => {
			t.value = n, e.set(n);
		}
	});
	return Jn(e.get, () => {
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
	return Jn(e, t, {
		...n,
		immediate: !0
	});
}
// node_modules/.pnpm/@vueuse+core@15.0.0_vue@3.6.0-rc.13_typescript-native-bridge@6.0.3-bridge.19.tsgo.7.0.2_/node_modules/@vueuse/core/dist/index.js
var Ss = _s ? window : void 0;
_s && window.document, _s && window.navigator, _s && window.location;
function Cs(e) {
	let t = en(e);
	return t?.$el ?? t;
}
function ws(...e) {
	let t = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), n = Q(() => {
		let t = bs(en(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	});
	return xs(() => [
		n.value?.map((e) => Cs(e)) ?? [Ss].filter((e) => e != null),
		bs(en(n.value ? e[1] : e[0])),
		bs($t(n.value ? e[2] : e[1])),
		en(n.value ? e[3] : e[2])
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
	let a = Q(() => Cs(e)), o, s, c, l = !1;
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
})(/* @__PURE__ */ sr({
	__name: "Slider",
	props: {
		hass: { type: Object },
		config: { type: Object }
	},
	setup(e) {
		let t = lr("slider"), n = ms(/* @__PURE__ */ on(() => e.hass), Q(() => e.config?.entity)), { isOn: r, rgbColor: i, brightness: a } = gs(n), o = Q(() => e.config?.name ? e.config.name : n.name.value), s = Q(() => i.value ? `rgb(${i.value.join()})` : "var(--accent-color)"), c = Q(() => n.state.value ? ps(n.state.value) : void 0), l = /* @__PURE__ */ Jt(a.value ?? 0);
		Jn([a, r], () => {
			r.value ? l.value = a.value : l.value = 0;
		});
		function u(n) {
			console.log("moreinfo"), t.value && as(t.value, "hass-more-info", { entityId: e.config.entity });
		}
		function d() {
			let e = t.value?.valueAsNumber;
			e !== void 0 && (l.value = e, a.value = e);
		}
		return Ds(t, (e) => u(e)), (e, n) => (sa(), fa("label", {
			"aria-label": o.value,
			"aria-checked": $t(r),
			class: "card",
			style: ve({ "--rgb": s.value })
		}, [
			_a("button", { onClick: n[0] ||= (e) => r.value = !$t(r) }, [_a("ha-icon", { icon: c.value }, null, 8, ks)]),
			_a("span", null, Me(o.value), 1),
			_a("div", {
				class: "fill",
				style: ve({ "--value": l.value })
			}, null, 4),
			Hn(_a("input", {
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
}), [["styles", [".card[data-v-b9f7a8d0]{background:var(--ha-card-background,var(--card-background-color,#fff));color:var(--primary-text-color);border-radius:var(--ha-card-border-radius,12px);box-shadow:var(--ha-card-box-shadow,none);isolation:isolate;width:100%;box-sizing:border-box;grid-template-columns:auto 1fr;align-items:center;gap:1rem;min-block-size:3.5rem;transition:color .25s;display:grid;position:relative;overflow:clip}.card[aria-checked=false][data-v-b9f7a8d0]{color:var(--disabled-text-color)}.card[aria-checked=false]>button[data-v-b9f7a8d0]{background-color:var(--secondary-background-color);color:var(--disabled-text-color)}.card>[data-v-b9f7a8d0]{z-index:1}.card>span[data-v-b9f7a8d0]{pointer-events:none;font-size:.875rem;font-weight:600}.card>button[data-v-b9f7a8d0]{aspect-ratio:1;border-radius:calc(var(--ha-card-border-radius,12px) + .25rem);background:var(--secondary-background-color);block-size:3rem;color:var(--rgb);cursor:pointer;border:none;place-content:center;margin-inline-start:.25rem;display:grid}.card>.fill[data-v-b9f7a8d0]{width:calc(var(--value) * 1%);border-radius:inherit;background:var(--rgb);z-index:0;transition:width .1s cubic-bezier(.175,.885,.32,1.275),background-color .25s;position:absolute;inset-block:0;inset-inline-start:0}.card>input[type=range][data-v-b9f7a8d0]{appearance:none;border-radius:inherit;cursor:ew-resize;z-index:0;background:0 0;width:100%;height:100%;margin:0;position:absolute;inset:0}.card>input[type=range][data-v-b9f7a8d0]::-webkit-slider-runnable-track{background:0 0;height:100%}.card>input[type=range][data-v-b9f7a8d0]::-webkit-slider-thumb{appearance:none;width:0;height:0}.card>input[type=range][data-v-b9f7a8d0]::-moz-range-track{background:0 0}.card>input[type=range][data-v-b9f7a8d0]::-moz-range-thumb{border:none;width:0;height:0}"]], ["__scopeId", "data-v-b9f7a8d0"]]), {
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
			context: { entity: "entity" }
		}] };
	}
});
