(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6412],
  {
      11457: function () {},
      29639: function (e, t, r) {
          "use strict";
          var n = r(54440),
              a = r.n(n),
              o = r(2265),
              i = r(57127),
              u = r(57437);
          let c = o.forwardRef(({ bsPrefix: e, variant: t, animation: r = "border", size: n, as: o = "div", className: c, ...s }, l) => {
              e = (0, i.vE)(e, "spinner");
              let f = `${e}-${r}`;
              return (0, u.jsx)(o, { ref: l, ...s, className: a()(c, f, n && `${f}-${n}`, t && `text-${t}`) });
          });
          (c.displayName = "Spinner"), (t.Z = c);
      },
      15794: function (e, t, r) {
          e.exports = (function (e) {
              var t = {};
              function r(n) {
                  if (t[n]) return t[n].exports;
                  var a = (t[n] = { i: n, l: !1, exports: {} });
                  return e[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
              }
              return (
                  (r.m = e),
                  (r.c = t),
                  (r.d = function (e, t, n) {
                      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
                  }),
                  (r.r = function (e) {
                      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
                  }),
                  (r.t = function (e, t) {
                      if ((1 & t && (e = r(e)), 8 & t || (4 & t && "object" == typeof e && e && e.__esModule))) return e;
                      var n = Object.create(null);
                      if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                          for (var a in e)
                              r.d(
                                  n,
                                  a,
                                  function (t) {
                                      return e[t];
                                  }.bind(null, a)
                              );
                      return n;
                  }),
                  (r.n = function (e) {
                      var t =
                          e && e.__esModule
                              ? function () {
                                    return e.default;
                                }
                              : function () {
                                    return e;
                                };
                      return r.d(t, "a", t), t;
                  }),
                  (r.o = function (e, t) {
                      return Object.prototype.hasOwnProperty.call(e, t);
                  }),
                  (r.p = ""),
                  r((r.s = 9))
              );
          })([
              function (e, t) {
                  e.exports = r(2265);
              },
              function (e, t, r) {
                  var n;
                  /*!
Copyright (c) 2017 Jed Watson.
Licensed under the MIT License (MIT), see
http://jedwatson.github.io/classnames
*/ !(function () {
                      "use strict";
                      var r = {}.hasOwnProperty;
                      function a() {
                          for (var e = [], t = 0; t < arguments.length; t++) {
                              var n = arguments[t];
                              if (n) {
                                  var o = typeof n;
                                  if ("string" === o || "number" === o) e.push(n);
                                  else if (Array.isArray(n) && n.length) {
                                      var i = a.apply(null, n);
                                      i && e.push(i);
                                  } else if ("object" === o) for (var u in n) r.call(n, u) && n[u] && e.push(u);
                              }
                          }
                          return e.join(" ");
                      }
                      e.exports
                          ? ((a.default = a), (e.exports = a))
                          : void 0 ===
                                (n = function () {
                                    return a;
                                }.apply(t, [])) || (e.exports = n);
                  })();
              },
              function (e, t, r) {
                  (function (t) {
                      var r = /^\s+|\s+$/g,
                          n = /^[-+]0x[0-9a-f]+$/i,
                          a = /^0b[01]+$/i,
                          o = /^0o[0-7]+$/i,
                          i = parseInt,
                          u = "object" == typeof t && t && t.Object === Object && t,
                          c = "object" == typeof self && self && self.Object === Object && self,
                          s = u || c || Function("return this")(),
                          l = Object.prototype.toString,
                          f = s.Symbol,
                          d = f ? f.prototype : void 0,
                          p = d ? d.toString : void 0;
                      function h(e) {
                          if ("string" == typeof e) return e;
                          if (y(e)) return p ? p.call(e) : "";
                          var t = e + "";
                          return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                      }
                      function m(e) {
                          var t = typeof e;
                          return !!e && ("object" == t || "function" == t);
                      }
                      function y(e) {
                          return "symbol" == typeof e || (!!e && "object" == typeof e && "[object Symbol]" == l.call(e));
                      }
                      e.exports = function (e, t, u) {
                          var c, s, l, f, d, p;
                          return (
                              (e = null == (c = e) ? "" : h(c)),
                              (p =
                                  (d = (f = u)
                                      ? (f = (function (e) {
                                            if ("number" == typeof e) return e;
                                            if (y(e)) return NaN;
                                            if (m(e)) {
                                                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                                e = m(t) ? t + "" : t;
                                            }
                                            if ("string" != typeof e) return 0 === e ? e : +e;
                                            e = e.replace(r, "");
                                            var u = a.test(e);
                                            return u || o.test(e) ? i(e.slice(2), u ? 2 : 8) : n.test(e) ? NaN : +e;
                                        })(f)) ===
                                            1 / 0 || f === -1 / 0
                                          ? 17976931348623157e292 * (f < 0 ? -1 : 1)
                                          : f == f
                                          ? f
                                          : 0
                                      : 0 === f
                                      ? f
                                      : 0) % 1),
                              (s = d == d ? (p ? d - p : d) : 0),
                              (l = e.length),
                              s == s && (void 0 !== l && (s = s <= l ? s : l), (s = s >= 0 ? s : 0)),
                              (u = s),
                              (t = h(t)),
                              e.slice(u, u + t.length) == t
                          );
                      };
                  }.call(this, r(3)));
              },
              function (e, t) {
                  var r;
                  r = (function () {
                      return this;
                  })();
                  try {
                      r = r || Function("return this")();
                  } catch (e) {
                      "object" == typeof window && (r = window);
                  }
                  e.exports = r;
              },
              function (e, t, r) {
                  (function (t) {
                      var r,
                          n = /^\[object .+?Constructor\]$/,
                          a = "object" == typeof t && t && t.Object === Object && t,
                          o = "object" == typeof self && self && self.Object === Object && self,
                          i = a || o || Function("return this")(),
                          u = Array.prototype,
                          c = Function.prototype,
                          s = Object.prototype,
                          l = i["__core-js_shared__"],
                          f = (r = /[^.]+$/.exec((l && l.keys && l.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + r : "",
                          d = c.toString,
                          p = s.hasOwnProperty,
                          h = s.toString,
                          m = RegExp(
                              "^" +
                                  d
                                      .call(p)
                                      .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                                      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                                  "$"
                          ),
                          y = u.splice,
                          b = j(i, "Map"),
                          g = j(Object, "create");
                      function v(e) {
                          var t = -1,
                              r = e ? e.length : 0;
                          for (this.clear(); ++t < r; ) {
                              var n = e[t];
                              this.set(n[0], n[1]);
                          }
                      }
                      function C(e) {
                          var t = -1,
                              r = e ? e.length : 0;
                          for (this.clear(); ++t < r; ) {
                              var n = e[t];
                              this.set(n[0], n[1]);
                          }
                      }
                      function _(e) {
                          var t = -1,
                              r = e ? e.length : 0;
                          for (this.clear(); ++t < r; ) {
                              var n = e[t];
                              this.set(n[0], n[1]);
                          }
                      }
                      function w(e, t) {
                          for (var r, n = e.length; n--; ) if ((r = e[n][0]) === t || (r != r && t != t)) return n;
                          return -1;
                      }
                      function S(e, t) {
                          var r,
                              n = e.__data__;
                          return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
                      }
                      function j(e, t) {
                          var r,
                              a,
                              o = null == e ? void 0 : e[t];
                          return !(!N((r = o)) || (f && f in r)) &&
                              ("[object Function]" == (a = N(r) ? h.call(r) : "") ||
                              "[object GeneratorFunction]" == a ||
                              (function (e) {
                                  var t = !1;
                                  if (null != e && "function" != typeof e.toString)
                                      try {
                                          t = !!(e + "");
                                      } catch (e) {}
                                  return t;
                              })(r)
                                  ? m
                                  : n
                              ).test(
                                  (function (e) {
                                      if (null != e) {
                                          try {
                                              return d.call(e);
                                          } catch (e) {}
                                          try {
                                              return e + "";
                                          } catch (e) {}
                                      }
                                      return "";
                                  })(r)
                              )
                              ? o
                              : void 0;
                      }
                      function x(e, t) {
                          if ("function" != typeof e || (t && "function" != typeof t)) throw TypeError("Expected a function");
                          var r = function () {
                              var n = arguments,
                                  a = t ? t.apply(this, n) : n[0],
                                  o = r.cache;
                              if (o.has(a)) return o.get(a);
                              var i = e.apply(this, n);
                              return (r.cache = o.set(a, i)), i;
                          };
                          return (r.cache = new (x.Cache || _)()), r;
                      }
                      function N(e) {
                          var t = typeof e;
                          return !!e && ("object" == t || "function" == t);
                      }
                      (v.prototype.clear = function () {
                          this.__data__ = g ? g(null) : {};
                      }),
                          (v.prototype.delete = function (e) {
                              return this.has(e) && delete this.__data__[e];
                          }),
                          (v.prototype.get = function (e) {
                              var t = this.__data__;
                              if (g) {
                                  var r = t[e];
                                  return "__lodash_hash_undefined__" === r ? void 0 : r;
                              }
                              return p.call(t, e) ? t[e] : void 0;
                          }),
                          (v.prototype.has = function (e) {
                              var t = this.__data__;
                              return g ? void 0 !== t[e] : p.call(t, e);
                          }),
                          (v.prototype.set = function (e, t) {
                              return (this.__data__[e] = g && void 0 === t ? "__lodash_hash_undefined__" : t), this;
                          }),
                          (C.prototype.clear = function () {
                              this.__data__ = [];
                          }),
                          (C.prototype.delete = function (e) {
                              var t = this.__data__,
                                  r = w(t, e);
                              return !(r < 0) && (r == t.length - 1 ? t.pop() : y.call(t, r, 1), !0);
                          }),
                          (C.prototype.get = function (e) {
                              var t = this.__data__,
                                  r = w(t, e);
                              return r < 0 ? void 0 : t[r][1];
                          }),
                          (C.prototype.has = function (e) {
                              return w(this.__data__, e) > -1;
                          }),
                          (C.prototype.set = function (e, t) {
                              var r = this.__data__,
                                  n = w(r, e);
                              return n < 0 ? r.push([e, t]) : (r[n][1] = t), this;
                          }),
                          (_.prototype.clear = function () {
                              this.__data__ = { hash: new v(), map: new (b || C)(), string: new v() };
                          }),
                          (_.prototype.delete = function (e) {
                              return S(this, e).delete(e);
                          }),
                          (_.prototype.get = function (e) {
                              return S(this, e).get(e);
                          }),
                          (_.prototype.has = function (e) {
                              return S(this, e).has(e);
                          }),
                          (_.prototype.set = function (e, t) {
                              return S(this, e).set(e, t), this;
                          }),
                          (x.Cache = _),
                          (e.exports = x);
                  }.call(this, r(3)));
              },
              function (e, t, r) {
                  (function (t) {
                      var r = /^\s+|\s+$/g,
                          n = /^[-+]0x[0-9a-f]+$/i,
                          a = /^0b[01]+$/i,
                          o = /^0o[0-7]+$/i,
                          i = parseInt,
                          u = "object" == typeof t && t && t.Object === Object && t,
                          c = "object" == typeof self && self && self.Object === Object && self,
                          s = u || c || Function("return this")(),
                          l = Object.prototype.toString,
                          f = Math.max,
                          d = Math.min,
                          p = function () {
                              return s.Date.now();
                          };
                      function h(e) {
                          var t = typeof e;
                          return !!e && ("object" == t || "function" == t);
                      }
                      function m(e) {
                          if ("number" == typeof e) return e;
                          if ("symbol" == typeof (t = e) || (t && "object" == typeof t && "[object Symbol]" == l.call(t))) return NaN;
                          if (h(e)) {
                              var t,
                                  u = "function" == typeof e.valueOf ? e.valueOf() : e;
                              e = h(u) ? u + "" : u;
                          }
                          if ("string" != typeof e) return 0 === e ? e : +e;
                          e = e.replace(r, "");
                          var c = a.test(e);
                          return c || o.test(e) ? i(e.slice(2), c ? 2 : 8) : n.test(e) ? NaN : +e;
                      }
                      e.exports = function (e, t, r) {
                          var n,
                              a,
                              o,
                              i,
                              u,
                              c,
                              s = 0,
                              l = !1,
                              y = !1,
                              b = !0;
                          if ("function" != typeof e) throw TypeError("Expected a function");
                          function g(t) {
                              var r = n,
                                  o = a;
                              return (n = a = void 0), (s = t), (i = e.apply(o, r));
                          }
                          function v(e) {
                              var r = e - c;
                              return void 0 === c || r >= t || r < 0 || (y && e - s >= o);
                          }
                          function C() {
                              var e,
                                  r = p();
                              if (v(r)) return _(r);
                              u = setTimeout(C, ((e = t - (r - c)), y ? d(e, o - (r - s)) : e));
                          }
                          function _(e) {
                              return (u = void 0), b && n ? g(e) : ((n = a = void 0), i);
                          }
                          function w() {
                              var e,
                                  r = p(),
                                  o = v(r);
                              if (((n = arguments), (a = this), (c = r), o)) {
                                  if (void 0 === u) return (s = e = c), (u = setTimeout(C, t)), l ? g(e) : i;
                                  if (y) return (u = setTimeout(C, t)), g(c);
                              }
                              return void 0 === u && (u = setTimeout(C, t)), i;
                          }
                          return (
                              (t = m(t) || 0),
                              h(r) && ((l = !!r.leading), (o = (y = "maxWait" in r) ? f(m(r.maxWait) || 0, t) : o), (b = "trailing" in r ? !!r.trailing : b)),
                              (w.cancel = function () {
                                  void 0 !== u && clearTimeout(u), (s = 0), (n = c = a = u = void 0);
                              }),
                              (w.flush = function () {
                                  return void 0 === u ? i : _(p());
                              }),
                              w
                          );
                      };
                  }.call(this, r(3)));
              },
              function (e, t, r) {
                  (function (e, r) {
                      var n = "[object Arguments]",
                          a = "[object Map]",
                          o = "[object Object]",
                          i = "[object Set]",
                          u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                          c = /^\w*$/,
                          s = /^\./,
                          l = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                          f = /\\(\\)?/g,
                          d = /^\[object .+?Constructor\]$/,
                          p = /^(?:0|[1-9]\d*)$/,
                          h = {};
                      (h["[object Float32Array]"] = h["[object Float64Array]"] = h["[object Int8Array]"] = h["[object Int16Array]"] = h["[object Int32Array]"] = h["[object Uint8Array]"] = h["[object Uint8ClampedArray]"] = h[
                          "[object Uint16Array]"
                      ] = h["[object Uint32Array]"] = !0),
                          (h[n] = h["[object Array]"] = h["[object ArrayBuffer]"] = h["[object Boolean]"] = h["[object DataView]"] = h["[object Date]"] = h["[object Error]"] = h["[object Function]"] = h[a] = h["[object Number]"] = h[
                              o
                          ] = h["[object RegExp]"] = h[i] = h["[object String]"] = h["[object WeakMap]"] = !1);
                      var m = "object" == typeof e && e && e.Object === Object && e,
                          y = "object" == typeof self && self && self.Object === Object && self,
                          b = m || y || Function("return this")(),
                          g = t && !t.nodeType && t,
                          v = g && "object" == typeof r && r && !r.nodeType && r,
                          C = v && v.exports === g && m.process,
                          _ = (function () {
                              try {
                                  return C && C.binding("util");
                              } catch (e) {}
                          })(),
                          w = _ && _.isTypedArray;
                      function S(e, t, r, n) {
                          var a = -1,
                              o = e ? e.length : 0;
                          for (n && o && (r = e[++a]); ++a < o; ) r = t(r, e[a], a, e);
                          return r;
                      }
                      function j(e, t, r, n, a) {
                          return (
                              a(e, function (e, a, o) {
                                  r = n ? ((n = !1), e) : t(r, e, a, o);
                              }),
                              r
                          );
                      }
                      function x(e) {
                          var t = !1;
                          if (null != e && "function" != typeof e.toString)
                              try {
                                  t = !!(e + "");
                              } catch (e) {}
                          return t;
                      }
                      function N(e) {
                          var t = -1,
                              r = Array(e.size);
                          return (
                              e.forEach(function (e, n) {
                                  r[++t] = [n, e];
                              }),
                              r
                          );
                      }
                      function k(e) {
                          var t = -1,
                              r = Array(e.size);
                          return (
                              e.forEach(function (e) {
                                  r[++t] = e;
                              }),
                              r
                          );
                      }
                      var O,
                          E,
                          T,
                          I = Array.prototype,
                          A = Function.prototype,
                          D = Object.prototype,
                          P = b["__core-js_shared__"],
                          F = (O = /[^.]+$/.exec((P && P.keys && P.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + O : "",
                          M = A.toString,
                          R = D.hasOwnProperty,
                          L = D.toString,
                          z = RegExp(
                              "^" +
                                  M.call(R)
                                      .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                                      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                                  "$"
                          ),
                          B = b.Symbol,
                          $ = b.Uint8Array,
                          G = D.propertyIsEnumerable,
                          V = I.splice,
                          K =
                              ((E = Object.keys),
                              (T = Object),
                              function (e) {
                                  return E(T(e));
                              }),
                          U = ev(b, "DataView"),
                          q = ev(b, "Map"),
                          H = ev(b, "Promise"),
                          W = ev(b, "Set"),
                          J = ev(b, "WeakMap"),
                          Z = ev(Object, "create"),
                          Q = eN(U),
                          Y = eN(q),
                          X = eN(H),
                          ee = eN(W),
                          et = eN(J),
                          er = B ? B.prototype : void 0,
                          en = er ? er.valueOf : void 0,
                          ea = er ? er.toString : void 0;
                      function eo(e) {
                          var t = -1,
                              r = e ? e.length : 0;
                          for (this.clear(); ++t < r; ) {
                              var n = e[t];
                              this.set(n[0], n[1]);
                          }
                      }
                      function ei(e) {
                          var t = -1,
                              r = e ? e.length : 0;
                          for (this.clear(); ++t < r; ) {
                              var n = e[t];
                              this.set(n[0], n[1]);
                          }
                      }
                      function eu(e) {
                          var t = -1,
                              r = e ? e.length : 0;
                          for (this.clear(); ++t < r; ) {
                              var n = e[t];
                              this.set(n[0], n[1]);
                          }
                      }
                      function ec(e) {
                          var t = -1,
                              r = e ? e.length : 0;
                          for (this.__data__ = new eu(); ++t < r; ) this.add(e[t]);
                      }
                      function es(e) {
                          this.__data__ = new ei(e);
                      }
                      function el(e, t) {
                          for (var r = e.length; r--; ) if (eO(e[r][0], t)) return r;
                          return -1;
                      }
                      (eo.prototype.clear = function () {
                          this.__data__ = Z ? Z(null) : {};
                      }),
                          (eo.prototype.delete = function (e) {
                              return this.has(e) && delete this.__data__[e];
                          }),
                          (eo.prototype.get = function (e) {
                              var t = this.__data__;
                              if (Z) {
                                  var r = t[e];
                                  return "__lodash_hash_undefined__" === r ? void 0 : r;
                              }
                              return R.call(t, e) ? t[e] : void 0;
                          }),
                          (eo.prototype.has = function (e) {
                              var t = this.__data__;
                              return Z ? void 0 !== t[e] : R.call(t, e);
                          }),
                          (eo.prototype.set = function (e, t) {
                              return (this.__data__[e] = Z && void 0 === t ? "__lodash_hash_undefined__" : t), this;
                          }),
                          (ei.prototype.clear = function () {
                              this.__data__ = [];
                          }),
                          (ei.prototype.delete = function (e) {
                              var t = this.__data__,
                                  r = el(t, e);
                              return !(r < 0) && (r == t.length - 1 ? t.pop() : V.call(t, r, 1), !0);
                          }),
                          (ei.prototype.get = function (e) {
                              var t = this.__data__,
                                  r = el(t, e);
                              return r < 0 ? void 0 : t[r][1];
                          }),
                          (ei.prototype.has = function (e) {
                              return el(this.__data__, e) > -1;
                          }),
                          (ei.prototype.set = function (e, t) {
                              var r = this.__data__,
                                  n = el(r, e);
                              return n < 0 ? r.push([e, t]) : (r[n][1] = t), this;
                          }),
                          (eu.prototype.clear = function () {
                              this.__data__ = { hash: new eo(), map: new (q || ei)(), string: new eo() };
                          }),
                          (eu.prototype.delete = function (e) {
                              return eg(this, e).delete(e);
                          }),
                          (eu.prototype.get = function (e) {
                              return eg(this, e).get(e);
                          }),
                          (eu.prototype.has = function (e) {
                              return eg(this, e).has(e);
                          }),
                          (eu.prototype.set = function (e, t) {
                              return eg(this, e).set(e, t), this;
                          }),
                          (ec.prototype.add = ec.prototype.push = function (e) {
                              return this.__data__.set(e, "__lodash_hash_undefined__"), this;
                          }),
                          (ec.prototype.has = function (e) {
                              return this.__data__.has(e);
                          }),
                          (es.prototype.clear = function () {
                              this.__data__ = new ei();
                          }),
                          (es.prototype.delete = function (e) {
                              return this.__data__.delete(e);
                          }),
                          (es.prototype.get = function (e) {
                              return this.__data__.get(e);
                          }),
                          (es.prototype.has = function (e) {
                              return this.__data__.has(e);
                          }),
                          (es.prototype.set = function (e, t) {
                              var r = this.__data__;
                              if (r instanceof ei) {
                                  var n = r.__data__;
                                  if (!q || n.length < 199) return n.push([e, t]), this;
                                  r = this.__data__ = new eu(n);
                              }
                              return r.set(e, t), this;
                          });
                      var ef,
                          ed = function (e, t) {
                              if (null == e) return e;
                              if (!eI(e)) return e && ep(e, t, eL);
                              for (var r = e.length, n = ef ? r : -1, a = Object(e); (ef ? n-- : ++n < r) && !1 !== t(a[n], n, a); );
                              return e;
                          },
                          ep = function (e, t, r) {
                              for (var n = -1, a = Object(e), o = r(e), i = o.length; i--; ) {
                                  var u = o[++n];
                                  if (!1 === t(a[u], u, a)) break;
                              }
                              return e;
                          };
                      function eh(e, t) {
                          for (var r, n = 0, a = (t = ew(t, e) ? [t] : eT((r = t)) ? r : ej(r)).length; null != e && n < a; ) e = e[ex(t[n++])];
                          return n && n == a ? e : void 0;
                      }
                      function em(e, t) {
                          return null != e && t in Object(e);
                      }
                      function ey(e, t, r, u, c) {
                          return (
                              e === t ||
                              (null != e && null != t && (eP(e) || eF(t))
                                  ? (function (e, t, r, u, c, s) {
                                        var l = eT(e),
                                            f = eT(t),
                                            d = "[object Array]",
                                            p = "[object Array]";
                                        l || (d = (d = eC(e)) == n ? o : d), f || (p = (p = eC(t)) == n ? o : p);
                                        var h = d == o && !x(e),
                                            m = p == o && !x(t),
                                            y = d == p;
                                        if (y && !h)
                                            return (
                                                s || (s = new es()),
                                                l || eR(e)
                                                    ? eb(e, t, r, u, c, s)
                                                    : (function (e, t, r, n, o, u, c) {
                                                          switch (r) {
                                                              case "[object DataView]":
                                                                  if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                                                  (e = e.buffer), (t = t.buffer);
                                                              case "[object ArrayBuffer]":
                                                                  return !(e.byteLength != t.byteLength || !n(new $(e), new $(t)));
                                                              case "[object Boolean]":
                                                              case "[object Date]":
                                                              case "[object Number]":
                                                                  return eO(+e, +t);
                                                              case "[object Error]":
                                                                  return e.name == t.name && e.message == t.message;
                                                              case "[object RegExp]":
                                                              case "[object String]":
                                                                  return e == t + "";
                                                              case a:
                                                                  var s = N;
                                                              case i:
                                                                  var l = 2 & u;
                                                                  if ((s || (s = k), e.size != t.size && !l)) break;
                                                                  var f = c.get(e);
                                                                  if (f) return f == t;
                                                                  (u |= 1), c.set(e, t);
                                                                  var d = eb(s(e), s(t), n, o, u, c);
                                                                  return c.delete(e), d;
                                                              case "[object Symbol]":
                                                                  if (en) return en.call(e) == en.call(t);
                                                          }
                                                          return !1;
                                                      })(e, t, d, r, u, c, s)
                                            );
                                        if (!(2 & c)) {
                                            var b = h && R.call(e, "__wrapped__"),
                                                g = m && R.call(t, "__wrapped__");
                                            if (b || g) {
                                                var v = b ? e.value() : e,
                                                    C = g ? t.value() : t;
                                                return s || (s = new es()), r(v, C, u, c, s);
                                            }
                                        }
                                        return (
                                            !!y &&
                                            (s || (s = new es()),
                                            (function (e, t, r, n, a, o) {
                                                var i = 2 & a,
                                                    u = eL(e),
                                                    c = u.length;
                                                if (c != eL(t).length && !i) return !1;
                                                for (var s = c; s--; ) {
                                                    var l = u[s];
                                                    if (!(i ? l in t : R.call(t, l))) return !1;
                                                }
                                                var f = o.get(e);
                                                if (f && o.get(t)) return f == t;
                                                var d = !0;
                                                o.set(e, t), o.set(t, e);
                                                for (var p = i; ++s < c; ) {
                                                    var h = e[(l = u[s])],
                                                        m = t[l];
                                                    if (n) var y = i ? n(m, h, l, t, e, o) : n(h, m, l, e, t, o);
                                                    if (!(void 0 === y ? h === m || r(h, m, n, a, o) : y)) {
                                                        d = !1;
                                                        break;
                                                    }
                                                    p || (p = "constructor" == l);
                                                }
                                                if (d && !p) {
                                                    var b = e.constructor,
                                                        g = t.constructor;
                                                    b == g || !("constructor" in e) || !("constructor" in t) || ("function" == typeof b && b instanceof b && "function" == typeof g && g instanceof g) || (d = !1);
                                                }
                                                return o.delete(e), o.delete(t), d;
                                            })(e, t, r, u, c, s))
                                        );
                                    })(e, t, ey, r, u, c)
                                  : e != e && t != t)
                          );
                      }
                      function eb(e, t, r, n, a, o) {
                          var i = 2 & a,
                              u = e.length,
                              c = t.length;
                          if (u != c && !(i && c > u)) return !1;
                          var s = o.get(e);
                          if (s && o.get(t)) return s == t;
                          var l = -1,
                              f = !0,
                              d = 1 & a ? new ec() : void 0;
                          for (o.set(e, t), o.set(t, e); ++l < u; ) {
                              var p = e[l],
                                  h = t[l];
                              if (n) var m = i ? n(h, p, l, t, e, o) : n(p, h, l, e, t, o);
                              if (void 0 !== m) {
                                  if (m) continue;
                                  f = !1;
                                  break;
                              }
                              if (d) {
                                  if (
                                      !(function (e, t) {
                                          for (var r = -1, n = e ? e.length : 0; ++r < n; ) if (t(e[r], r, e)) return !0;
                                          return !1;
                                      })(t, function (e, t) {
                                          if (!d.has(t) && (p === e || r(p, e, n, a, o))) return d.add(t);
                                      })
                                  ) {
                                      f = !1;
                                      break;
                                  }
                              } else if (p !== h && !r(p, h, n, a, o)) {
                                  f = !1;
                                  break;
                              }
                          }
                          return o.delete(e), o.delete(t), f;
                      }
                      function eg(e, t) {
                          var r,
                              n = e.__data__;
                          return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
                      }
                      function ev(e, t) {
                          var r = null == e ? void 0 : e[t];
                          return !(!eP(r) || (F && F in r)) && (eA(r) || x(r) ? z : d).test(eN(r)) ? r : void 0;
                      }
                      var eC = function (e) {
                          return L.call(e);
                      };
                      function e_(e, t) {
                          return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || p.test(e)) && e > -1 && e % 1 == 0 && e < t;
                      }
                      function ew(e, t) {
                          if (eT(e)) return !1;
                          var r = typeof e;
                          return !("number" != r && "symbol" != r && "boolean" != r && null != e && !eM(e)) || c.test(e) || !u.test(e) || (null != t && e in Object(t));
                      }
                      function eS(e, t) {
                          return function (r) {
                              return null != r && r[e] === t && (void 0 !== t || e in Object(r));
                          };
                      }
                      ((U && "[object DataView]" != eC(new U(new ArrayBuffer(1)))) || (q && eC(new q()) != a) || (H && "[object Promise]" != eC(H.resolve())) || (W && eC(new W()) != i) || (J && "[object WeakMap]" != eC(new J()))) &&
                          (eC = function (e) {
                              var t = L.call(e),
                                  r = t == o ? e.constructor : void 0,
                                  n = r ? eN(r) : void 0;
                              if (n)
                                  switch (n) {
                                      case Q:
                                          return "[object DataView]";
                                      case Y:
                                          return a;
                                      case X:
                                          return "[object Promise]";
                                      case ee:
                                          return i;
                                      case et:
                                          return "[object WeakMap]";
                                  }
                              return t;
                          });
                      var ej = ek(function (e) {
                          e =
                              null == (t = e)
                                  ? ""
                                  : (function (e) {
                                        if ("string" == typeof e) return e;
                                        if (eM(e)) return ea ? ea.call(e) : "";
                                        var t = e + "";
                                        return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                                    })(t);
                          var t,
                              r = [];
                          return (
                              s.test(e) && r.push(""),
                              e.replace(l, function (e, t, n, a) {
                                  r.push(n ? a.replace(f, "$1") : t || e);
                              }),
                              r
                          );
                      });
                      function ex(e) {
                          if ("string" == typeof e || eM(e)) return e;
                          var t = e + "";
                          return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                      }
                      function eN(e) {
                          if (null != e) {
                              try {
                                  return M.call(e);
                              } catch (e) {}
                              try {
                                  return e + "";
                              } catch (e) {}
                          }
                          return "";
                      }
                      function ek(e, t) {
                          if ("function" != typeof e || (t && "function" != typeof t)) throw TypeError("Expected a function");
                          var r = function () {
                              var n = arguments,
                                  a = t ? t.apply(this, n) : n[0],
                                  o = r.cache;
                              if (o.has(a)) return o.get(a);
                              var i = e.apply(this, n);
                              return (r.cache = o.set(a, i)), i;
                          };
                          return (r.cache = new (ek.Cache || eu)()), r;
                      }
                      function eO(e, t) {
                          return e === t || (e != e && t != t);
                      }
                      function eE(e) {
                          return eF(e) && eI(e) && R.call(e, "callee") && (!G.call(e, "callee") || L.call(e) == n);
                      }
                      ek.Cache = eu;
                      var eT = Array.isArray;
                      function eI(e) {
                          return null != e && eD(e.length) && !eA(e);
                      }
                      function eA(e) {
                          var t = eP(e) ? L.call(e) : "";
                          return "[object Function]" == t || "[object GeneratorFunction]" == t;
                      }
                      function eD(e) {
                          return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
                      }
                      function eP(e) {
                          var t = typeof e;
                          return !!e && ("object" == t || "function" == t);
                      }
                      function eF(e) {
                          return !!e && "object" == typeof e;
                      }
                      function eM(e) {
                          return "symbol" == typeof e || (eF(e) && "[object Symbol]" == L.call(e));
                      }
                      var eR = w
                          ? function (e) {
                                return w(e);
                            }
                          : function (e) {
                                return eF(e) && eD(e.length) && !!h[L.call(e)];
                            };
                      function eL(e) {
                          return eI(e)
                              ? (function (e, t) {
                                    var r =
                                            eT(e) || eE(e)
                                                ? (function (e, t) {
                                                      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
                                                      return n;
                                                  })(e.length, String)
                                                : [],
                                        n = r.length,
                                        a = !!n;
                                    for (var o in e) !R.call(e, o) || (a && ("length" == o || e_(o, n))) || r.push(o);
                                    return r;
                                })(e)
                              : (function (e) {
                                    if (((r = ("function" == typeof (t = e && e.constructor) && t.prototype) || D), e !== r)) return K(e);
                                    var t,
                                        r,
                                        n = [];
                                    for (var a in Object(e)) R.call(e, a) && "constructor" != a && n.push(a);
                                    return n;
                                })(e);
                      }
                      function ez(e) {
                          return e;
                      }
                      r.exports = function (e, t, r) {
                          var n,
                              a,
                              o,
                              i,
                              u,
                              c = eT(e) ? S : j,
                              s = arguments.length < 3;
                          return c(
                              e,
                              "function" == typeof t
                                  ? t
                                  : null == t
                                  ? ez
                                  : "object" == typeof t
                                  ? eT(t)
                                      ? ((o = t[0]),
                                        (i = t[1]),
                                        ew(o) && (n = i) == n && !eP(n)
                                            ? eS(ex(o), i)
                                            : function (e) {
                                                  var t,
                                                      r = void 0 === (t = null == e ? void 0 : eh(e, o)) ? void 0 : t;
                                                  return void 0 === r && r === i
                                                      ? null != e &&
                                                            (function (e, t, r) {
                                                                var n;
                                                                t = ew(t, e) ? [t] : eT((n = t)) ? n : ej(n);
                                                                for (var a, o = -1, i = t.length; ++o < i; ) {
                                                                    var u = ex(t[o]);
                                                                    if (!(a = null != e && r(e, u))) break;
                                                                    e = e[u];
                                                                }
                                                                return a || (!!(i = e ? e.length : 0) && eD(i) && e_(u, i) && (eT(e) || eE(e)));
                                                            })(e, o, em)
                                                      : ey(i, r, void 0, 3);
                                              })
                                      : 1 ==
                                            (u = (function (e) {
                                                for (var t = eL(e), r = t.length; r--; ) {
                                                    var n = t[r],
                                                        a = e[n];
                                                    t[r] = [n, a, a == a && !eP(a)];
                                                }
                                                return t;
                                            })(t)).length && u[0][2]
                                      ? eS(u[0][0], u[0][1])
                                      : function (e) {
                                            return (
                                                e === t ||
                                                (function (e, t, r, n) {
                                                    var a = r.length,
                                                        o = a,
                                                        i = !n;
                                                    if (null == e) return !o;
                                                    for (e = Object(e); a--; ) {
                                                        var u = r[a];
                                                        if (i && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
                                                    }
                                                    for (; ++a < o; ) {
                                                        var c = (u = r[a])[0],
                                                            s = e[c],
                                                            l = u[1];
                                                        if (i && u[2]) {
                                                            if (void 0 === s && !(c in e)) return !1;
                                                        } else {
                                                            var f = new es();
                                                            if (n) var d = n(s, l, c, e, t, f);
                                                            if (!(void 0 === d ? ey(l, s, n, 3, f) : d)) return !1;
                                                        }
                                                    }
                                                    return !0;
                                                })(e, t, u)
                                            );
                                        }
                                  : ew(t)
                                  ? ((a = ex(t)),
                                    function (e) {
                                        return null == e ? void 0 : e[a];
                                    })
                                  : function (e) {
                                        return eh(e, t);
                                    },
                              r,
                              s,
                              ed
                          );
                      };
                  }.call(this, r(3), r(7)(e)));
              },
              function (e, t) {
                  e.exports = function (e) {
                      return (
                          e.webpackPolyfill ||
                              ((e.deprecate = function () {}),
                              (e.paths = []),
                              e.children || (e.children = []),
                              Object.defineProperty(e, "loaded", {
                                  enumerable: !0,
                                  get: function () {
                                      return e.l;
                                  },
                              }),
                              Object.defineProperty(e, "id", {
                                  enumerable: !0,
                                  get: function () {
                                      return e.i;
                                  },
                              }),
                              (e.webpackPolyfill = 1)),
                          e
                      );
                  };
              },
              function (e, t) {
                  String.prototype.padEnd ||
                      (String.prototype.padEnd = function (e, t) {
                          return (e >>= 0), (t = String(void 0 !== t ? t : " ")), this.length > e ? String(this) : ((e -= this.length) > t.length && (t += t.repeat(e / t.length)), String(this) + t.slice(0, e));
                      });
              },
              function (e, t, r) {
                  "use strict";
                  function n(e, t, r) {
                      return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
                  }
                  function a(e) {
                      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
                  }
                  function o(e) {
                      return (
                          (function (e) {
                              if (Array.isArray(e)) {
                                  for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                                  return r;
                              }
                          })(e) ||
                          a(e) ||
                          (function () {
                              throw TypeError("Invalid attempt to spread non-iterable instance");
                          })()
                      );
                  }
                  function i(e) {
                      if (Array.isArray(e)) return e;
                  }
                  function u() {
                      throw TypeError("Invalid attempt to destructure non-iterable instance");
                  }
                  function c(e, t) {
                      if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                  }
                  function s(e, t) {
                      for (var r = 0; r < t.length; r++) {
                          var n = t[r];
                          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                      }
                  }
                  function l(e) {
                      return (l =
                          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                              ? function (e) {
                                    return typeof e;
                                }
                              : function (e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                })(e);
                  }
                  function f(e) {
                      return (f =
                          "function" == typeof Symbol && "symbol" === l(Symbol.iterator)
                              ? function (e) {
                                    return l(e);
                                }
                              : function (e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : l(e);
                                })(e);
                  }
                  function d(e) {
                      if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return e;
                  }
                  function p(e) {
                      return (p = Object.setPrototypeOf
                          ? Object.getPrototypeOf
                          : function (e) {
                                return e.__proto__ || Object.getPrototypeOf(e);
                            })(e);
                  }
                  function h(e, t) {
                      return (h =
                          Object.setPrototypeOf ||
                          function (e, t) {
                              return (e.__proto__ = t), e;
                          })(e, t);
                  }
                  r.r(t);
                  var m = r(0),
                      y = r.n(m),
                      b = r(5),
                      g = r.n(b),
                      v = r(4),
                      C = r.n(v),
                      _ = r(6),
                      w = r.n(_),
                      S = r(2),
                      j = r.n(S),
                      x = r(1),
                      N = r.n(x);
                  function k(e, t) {
                      return (
                          i(e) ||
                          (function (e, t) {
                              var r = [],
                                  n = !0,
                                  a = !1,
                                  o = void 0;
                              try {
                                  for (var i, u = e[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                              } catch (e) {
                                  (a = !0), (o = e);
                              } finally {
                                  try {
                                      n || null == u.return || u.return();
                                  } finally {
                                      if (a) throw o;
                                  }
                              }
                              return r;
                          })(e, t) ||
                          u()
                      );
                  }
                  r(8);
                  var O = [
                          ["Afghanistan", ["asia"], "af", "93"],
                          ["Albania", ["europe"], "al", "355"],
                          ["Algeria", ["africa", "north-africa"], "dz", "213"],
                          ["Andorra", ["europe"], "ad", "376"],
                          ["Angola", ["africa"], "ao", "244"],
                          ["Antigua and Barbuda", ["america", "carribean"], "ag", "1268"],
                          [
                              "Argentina",
                              ["america", "south-america"],
                              "ar",
                              "54",
                              "(..) ........",
                              0,
                              ["11", "221", "223", "261", "264", "2652", "280", "2905", "291", "2920", "2966", "299", "341", "342", "343", "351", "376", "379", "381", "3833", "385", "387", "388"],
                          ],
                          ["Armenia", ["asia", "ex-ussr"], "am", "374", ".. ......"],
                          ["Aruba", ["america", "carribean"], "aw", "297"],
                          ["Australia", ["oceania"], "au", "61", "(..) .... ....", 0, ["2", "3", "4", "7", "8", "02", "03", "04", "07", "08"]],
                          ["Austria", ["europe", "eu-union"], "at", "43"],
                          ["Azerbaijan", ["asia", "ex-ussr"], "az", "994", "(..) ... .. .."],
                          ["Bahamas", ["america", "carribean"], "bs", "1242"],
                          ["Bahrain", ["middle-east"], "bh", "973"],
                          ["Bangladesh", ["asia"], "bd", "880"],
                          ["Barbados", ["america", "carribean"], "bb", "1246"],
                          ["Belarus", ["europe", "ex-ussr"], "by", "375", "(..) ... .. .."],
                          ["Belgium", ["europe", "eu-union"], "be", "32", "... .. .. .."],
                          ["Belize", ["america", "central-america"], "bz", "501"],
                          ["Benin", ["africa"], "bj", "229"],
                          ["Bhutan", ["asia"], "bt", "975"],
                          ["Bolivia", ["america", "south-america"], "bo", "591"],
                          ["Bosnia and Herzegovina", ["europe", "ex-yugos"], "ba", "387"],
                          ["Botswana", ["africa"], "bw", "267"],
                          ["Brazil", ["america", "south-america"], "br", "55", "(..) ........."],
                          ["British Indian Ocean Territory", ["asia"], "io", "246"],
                          ["Brunei", ["asia"], "bn", "673"],
                          ["Bulgaria", ["europe", "eu-union"], "bg", "359"],
                          ["Burkina Faso", ["africa"], "bf", "226"],
                          ["Burundi", ["africa"], "bi", "257"],
                          ["Cambodia", ["asia"], "kh", "855"],
                          ["Cameroon", ["africa"], "cm", "237"],
                          [
                              "Canada",
                              ["america", "north-america"],
                              "ca",
                              "1",
                              "(...) ...-....",
                              1,
                              [
                                  "204",
                                  "226",
                                  "236",
                                  "249",
                                  "250",
                                  "289",
                                  "306",
                                  "343",
                                  "365",
                                  "387",
                                  "403",
                                  "416",
                                  "418",
                                  "431",
                                  "437",
                                  "438",
                                  "450",
                                  "506",
                                  "514",
                                  "519",
                                  "548",
                                  "579",
                                  "581",
                                  "587",
                                  "604",
                                  "613",
                                  "639",
                                  "647",
                                  "672",
                                  "705",
                                  "709",
                                  "742",
                                  "778",
                                  "780",
                                  "782",
                                  "807",
                                  "819",
                                  "825",
                                  "867",
                                  "873",
                                  "902",
                                  "905",
                              ],
                          ],
                          ["Cape Verde", ["africa"], "cv", "238"],
                          ["Caribbean Netherlands", ["america", "carribean"], "bq", "599", "", 1],
                          ["Central African Republic", ["africa"], "cf", "236"],
                          ["Chad", ["africa"], "td", "235"],
                          ["Chile", ["america", "south-america"], "cl", "56"],
                          ["China", ["asia"], "cn", "86", "..-........."],
                          ["Colombia", ["america", "south-america"], "co", "57", "... ... ...."],
                          ["Comoros", ["africa"], "km", "269"],
                          ["Congo", ["africa"], "cd", "243"],
                          ["Congo", ["africa"], "cg", "242"],
                          ["Costa Rica", ["america", "central-america"], "cr", "506", "....-...."],
                          ["C\xf4te d’Ivoire", ["africa"], "ci", "225", ".. .. .. .."],
                          ["Croatia", ["europe", "eu-union", "ex-yugos"], "hr", "385"],
                          ["Cuba", ["america", "carribean"], "cu", "53"],
                          ["Cura\xe7ao", ["america", "carribean"], "cw", "599", "", 0],
                          ["Cyprus", ["europe", "eu-union"], "cy", "357", ".. ......"],
                          ["Czech Republic", ["europe", "eu-union"], "cz", "420", "... ... ..."],
                          ["Denmark", ["europe", "eu-union", "baltic"], "dk", "45", ".. .. .. .."],
                          ["Djibouti", ["africa"], "dj", "253"],
                          ["Dominica", ["america", "carribean"], "dm", "1767"],
                          ["Dominican Republic", ["america", "carribean"], "do", "1", "", 2, ["809", "829", "849"]],
                          ["Ecuador", ["america", "south-america"], "ec", "593"],
                          ["Egypt", ["africa", "north-africa"], "eg", "20"],
                          ["El Salvador", ["america", "central-america"], "sv", "503", "....-...."],
                          ["Equatorial Guinea", ["africa"], "gq", "240"],
                          ["Eritrea", ["africa"], "er", "291"],
                          ["Estonia", ["europe", "eu-union", "ex-ussr", "baltic"], "ee", "372", ".... ......"],
                          ["Ethiopia", ["africa"], "et", "251"],
                          ["Fiji", ["oceania"], "fj", "679"],
                          ["Finland", ["europe", "eu-union", "baltic"], "fi", "358", ".. ... .. .."],
                          ["France", ["europe", "eu-union"], "fr", "33", ". .. .. .. .."],
                          ["French Guiana", ["america", "south-america"], "gf", "594"],
                          ["French Polynesia", ["oceania"], "pf", "689"],
                          ["Gabon", ["africa"], "ga", "241"],
                          ["Gambia", ["africa"], "gm", "220"],
                          ["Georgia", ["asia", "ex-ussr"], "ge", "995"],
                          ["Germany", ["europe", "eu-union", "baltic"], "de", "49", ".... ........"],
                          ["Ghana", ["africa"], "gh", "233"],
                          ["Greece", ["europe", "eu-union"], "gr", "30"],
                          ["Grenada", ["america", "carribean"], "gd", "1473"],
                          ["Guadeloupe", ["america", "carribean"], "gp", "590", "", 0],
                          ["Guam", ["oceania"], "gu", "1671"],
                          ["Guatemala", ["america", "central-america"], "gt", "502", "....-...."],
                          ["Guinea", ["africa"], "gn", "224"],
                          ["Guinea-Bissau", ["africa"], "gw", "245"],
                          ["Guyana", ["america", "south-america"], "gy", "592"],
                          ["Haiti", ["america", "carribean"], "ht", "509", "....-...."],
                          ["Honduras", ["america", "central-america"], "hn", "504"],
                          ["Hong Kong", ["asia"], "hk", "852", ".... ...."],
                          ["Hungary", ["europe", "eu-union"], "hu", "36"],
                          ["Iceland", ["europe"], "is", "354", "... ...."],
                          ["India", ["asia"], "in", "91", ".....-....."],
                          ["Indonesia", ["asia"], "id", "62"],
                          ["Iran", ["middle-east"], "ir", "98", "... ... ...."],
                          ["Iraq", ["middle-east"], "iq", "964"],
                          ["Ireland", ["europe", "eu-union"], "ie", "353", ".. ......."],
                          ["Israel", ["middle-east"], "il", "972", "... ... ...."],
                          ["Italy", ["europe", "eu-union"], "it", "39", "... .......", 0],
                          ["Jamaica", ["america", "carribean"], "jm", "1876"],
                          ["Japan", ["asia"], "jp", "81", ".. .... ...."],
                          ["Jordan", ["middle-east"], "jo", "962"],
                          ["Kazakhstan", ["asia", "ex-ussr"], "kz", "7", "... ...-..-..", 1, ["310", "311", "312", "313", "315", "318", "321", "324", "325", "326", "327", "336", "7172", "73622"]],
                          ["Kenya", ["africa"], "ke", "254"],
                          ["Kiribati", ["oceania"], "ki", "686"],
                          ["Kosovo", ["europe", "ex-yugos"], "xk", "383"],
                          ["Kuwait", ["middle-east"], "kw", "965"],
                          ["Kyrgyzstan", ["asia", "ex-ussr"], "kg", "996", "... ... ..."],
                          ["Laos", ["asia"], "la", "856"],
                          ["Latvia", ["europe", "eu-union", "ex-ussr", "baltic"], "lv", "371", ".. ... ..."],
                          ["Lebanon", ["middle-east"], "lb", "961"],
                          ["Lesotho", ["africa"], "ls", "266"],
                          ["Liberia", ["africa"], "lr", "231"],
                          ["Libya", ["africa", "north-africa"], "ly", "218"],
                          ["Liechtenstein", ["europe"], "li", "423"],
                          ["Lithuania", ["europe", "eu-union", "ex-ussr", "baltic"], "lt", "370"],
                          ["Luxembourg", ["europe", "eu-union"], "lu", "352"],
                          ["Macau", ["asia"], "mo", "853"],
                          ["Macedonia", ["europe", "ex-yugos"], "mk", "389"],
                          ["Madagascar", ["africa"], "mg", "261"],
                          ["Malawi", ["africa"], "mw", "265"],
                          ["Malaysia", ["asia"], "my", "60", "..-....-...."],
                          ["Maldives", ["asia"], "mv", "960"],
                          ["Mali", ["africa"], "ml", "223"],
                          ["Malta", ["europe", "eu-union"], "mt", "356"],
                          ["Marshall Islands", ["oceania"], "mh", "692"],
                          ["Martinique", ["america", "carribean"], "mq", "596"],
                          ["Mauritania", ["africa"], "mr", "222"],
                          ["Mauritius", ["africa"], "mu", "230"],
                          ["Mexico", ["america", "central-america"], "mx", "52", "... ... ....", 0, ["55", "81", "33", "656", "664", "998", "774", "229"]],
                          ["Micronesia", ["oceania"], "fm", "691"],
                          ["Moldova", ["europe"], "md", "373", "(..) ..-..-.."],
                          ["Monaco", ["europe"], "mc", "377"],
                          ["Mongolia", ["asia"], "mn", "976"],
                          ["Montenegro", ["europe", "ex-yugos"], "me", "382"],
                          ["Morocco", ["africa", "north-africa"], "ma", "212"],
                          ["Mozambique", ["africa"], "mz", "258"],
                          ["Myanmar", ["asia"], "mm", "95"],
                          ["Namibia", ["africa"], "na", "264"],
                          ["Nauru", ["africa"], "nr", "674"],
                          ["Nepal", ["asia"], "np", "977"],
                          ["Netherlands", ["europe", "eu-union"], "nl", "31", ".. ........"],
                          ["New Caledonia", ["oceania"], "nc", "687"],
                          ["New Zealand", ["oceania"], "nz", "64", "...-...-...."],
                          ["Nicaragua", ["america", "central-america"], "ni", "505"],
                          ["Niger", ["africa"], "ne", "227"],
                          ["Nigeria", ["africa"], "ng", "234"],
                          ["North Korea", ["asia"], "kp", "850"],
                          ["Norway", ["europe", "baltic"], "no", "47", "... .. ..."],
                          ["Oman", ["middle-east"], "om", "968"],
                          ["Pakistan", ["asia"], "pk", "92", "...-......."],
                          ["Palau", ["oceania"], "pw", "680"],
                          ["Palestine", ["middle-east"], "ps", "970"],
                          ["Panama", ["america", "central-america"], "pa", "507"],
                          ["Papua New Guinea", ["oceania"], "pg", "675"],
                          ["Paraguay", ["america", "south-america"], "py", "595"],
                          ["Peru", ["america", "south-america"], "pe", "51"],
                          ["Philippines", ["asia"], "ph", "63", ".... ......."],
                          ["Poland", ["europe", "eu-union", "baltic"], "pl", "48", "...-...-..."],
                          ["Portugal", ["europe", "eu-union"], "pt", "351"],
                          ["Puerto Rico", ["america", "carribean"], "pr", "1", "", 3, ["787", "939"]],
                          ["Qatar", ["middle-east"], "qa", "974"],
                          ["R\xe9union", ["africa"], "re", "262"],
                          ["Romania", ["europe", "eu-union"], "ro", "40"],
                          ["Russia", ["europe", "asia", "ex-ussr", "baltic"], "ru", "7", "(...) ...-..-..", 0],
                          ["Rwanda", ["africa"], "rw", "250"],
                          ["Saint Kitts and Nevis", ["america", "carribean"], "kn", "1869"],
                          ["Saint Lucia", ["america", "carribean"], "lc", "1758"],
                          ["Saint Vincent and the Grenadines", ["america", "carribean"], "vc", "1784"],
                          ["Samoa", ["oceania"], "ws", "685"],
                          ["San Marino", ["europe"], "sm", "378"],
                          ["S\xe3o Tom\xe9 and Pr\xedncipe", ["africa"], "st", "239"],
                          ["Saudi Arabia", ["middle-east"], "sa", "966"],
                          ["Senegal", ["africa"], "sn", "221"],
                          ["Serbia", ["europe", "ex-yugos"], "rs", "381"],
                          ["Seychelles", ["africa"], "sc", "248"],
                          ["Sierra Leone", ["africa"], "sl", "232"],
                          ["Singapore", ["asia"], "sg", "65", "....-...."],
                          ["Slovakia", ["europe", "eu-union"], "sk", "421"],
                          ["Slovenia", ["europe", "eu-union", "ex-yugos"], "si", "386"],
                          ["Solomon Islands", ["oceania"], "sb", "677"],
                          ["Somalia", ["africa"], "so", "252"],
                          ["South Africa", ["africa"], "za", "27"],
                          ["South Korea", ["asia"], "kr", "82", "... .... ...."],
                          ["South Sudan", ["africa", "north-africa"], "ss", "211"],
                          ["Spain", ["europe", "eu-union"], "es", "34", "... ... ..."],
                          ["Sri Lanka", ["asia"], "lk", "94"],
                          ["Sudan", ["africa"], "sd", "249"],
                          ["Suriname", ["america", "south-america"], "sr", "597"],
                          ["Swaziland", ["africa"], "sz", "268"],
                          ["Sweden", ["europe", "eu-union", "baltic"], "se", "46", "(...) ...-..."],
                          ["Switzerland", ["europe"], "ch", "41", ".. ... .. .."],
                          ["Syria", ["middle-east"], "sy", "963"],
                          ["Taiwan", ["asia"], "tw", "886"],
                          ["Tajikistan", ["asia", "ex-ussr"], "tj", "992"],
                          ["Tanzania", ["africa"], "tz", "255"],
                          ["Thailand", ["asia"], "th", "66"],
                          ["Timor-Leste", ["asia"], "tl", "670"],
                          ["Togo", ["africa"], "tg", "228"],
                          ["Tonga", ["oceania"], "to", "676"],
                          ["Trinidad and Tobago", ["america", "carribean"], "tt", "1868"],
                          ["Tunisia", ["africa", "north-africa"], "tn", "216"],
                          ["Turkey", ["europe"], "tr", "90", "... ... .. .."],
                          ["Turkmenistan", ["asia", "ex-ussr"], "tm", "993"],
                          ["Tuvalu", ["asia"], "tv", "688"],
                          ["Uganda", ["africa"], "ug", "256"],
                          ["Ukraine", ["europe", "ex-ussr"], "ua", "380", "(..) ... .. .."],
                          ["United Arab Emirates", ["middle-east"], "ae", "971"],
                          ["United Kingdom", ["europe", "eu-union"], "gb", "44", ".... ......"],
                          [
                              "United States",
                              ["america", "north-america"],
                              "us",
                              "1",
                              "(...) ...-....",
                              0,
                              [
                                  "907",
                                  "205",
                                  "251",
                                  "256",
                                  "334",
                                  "479",
                                  "501",
                                  "870",
                                  "480",
                                  "520",
                                  "602",
                                  "623",
                                  "928",
                                  "209",
                                  "213",
                                  "310",
                                  "323",
                                  "408",
                                  "415",
                                  "510",
                                  "530",
                                  "559",
                                  "562",
                                  "619",
                                  "626",
                                  "650",
                                  "661",
                                  "707",
                                  "714",
                                  "760",
                                  "805",
                                  "818",
                                  "831",
                                  "858",
                                  "909",
                                  "916",
                                  "925",
                                  "949",
                                  "951",
                                  "303",
                                  "719",
                                  "970",
                                  "203",
                                  "860",
                                  "202",
                                  "302",
                                  "239",
                                  "305",
                                  "321",
                                  "352",
                                  "386",
                                  "407",
                                  "561",
                                  "727",
                                  "772",
                                  "813",
                                  "850",
                                  "863",
                                  "904",
                                  "941",
                                  "954",
                                  "229",
                                  "404",
                                  "478",
                                  "706",
                                  "770",
                                  "912",
                                  "808",
                                  "319",
                                  "515",
                                  "563",
                                  "641",
                                  "712",
                                  "208",
                                  "217",
                                  "309",
                                  "312",
                                  "618",
                                  "630",
                                  "708",
                                  "773",
                                  "815",
                                  "847",
                                  "219",
                                  "260",
                                  "317",
                                  "574",
                                  "765",
                                  "812",
                                  "316",
                                  "620",
                                  "785",
                                  "913",
                                  "270",
                                  "502",
                                  "606",
                                  "859",
                                  "225",
                                  "318",
                                  "337",
                                  "504",
                                  "985",
                                  "413",
                                  "508",
                                  "617",
                                  "781",
                                  "978",
                                  "301",
                                  "410",
                                  "207",
                                  "231",
                                  "248",
                                  "269",
                                  "313",
                                  "517",
                                  "586",
                                  "616",
                                  "734",
                                  "810",
                                  "906",
                                  "989",
                                  "218",
                                  "320",
                                  "507",
                                  "612",
                                  "651",
                                  "763",
                                  "952",
                                  "314",
                                  "417",
                                  "573",
                                  "636",
                                  "660",
                                  "816",
                                  "228",
                                  "601",
                                  "662",
                                  "406",
                                  "252",
                                  "336",
                                  "704",
                                  "828",
                                  "910",
                                  "919",
                                  "701",
                                  "308",
                                  "402",
                                  "603",
                                  "201",
                                  "609",
                                  "732",
                                  "856",
                                  "908",
                                  "973",
                                  "505",
                                  "575",
                                  "702",
                                  "775",
                                  "212",
                                  "315",
                                  "516",
                                  "518",
                                  "585",
                                  "607",
                                  "631",
                                  "716",
                                  "718",
                                  "845",
                                  "914",
                                  "216",
                                  "330",
                                  "419",
                                  "440",
                                  "513",
                                  "614",
                                  "740",
                                  "937",
                                  "405",
                                  "580",
                                  "918",
                                  "503",
                                  "541",
                                  "215",
                                  "412",
                                  "570",
                                  "610",
                                  "717",
                                  "724",
                                  "814",
                                  "401",
                                  "803",
                                  "843",
                                  "864",
                                  "605",
                                  "423",
                                  "615",
                                  "731",
                                  "865",
                                  "901",
                                  "931",
                                  "210",
                                  "214",
                                  "254",
                                  "281",
                                  "325",
                                  "361",
                                  "409",
                                  "432",
                                  "512",
                                  "713",
                                  "806",
                                  "817",
                                  "830",
                                  "903",
                                  "915",
                                  "936",
                                  "940",
                                  "956",
                                  "972",
                                  "979",
                                  "435",
                                  "801",
                                  "276",
                                  "434",
                                  "540",
                                  "703",
                                  "757",
                                  "804",
                                  "802",
                                  "206",
                                  "253",
                                  "360",
                                  "425",
                                  "509",
                                  "262",
                                  "414",
                                  "608",
                                  "715",
                                  "920",
                                  "304",
                                  "307",
                              ],
                          ],
                          ["Uruguay", ["america", "south-america"], "uy", "598"],
                          ["Uzbekistan", ["asia", "ex-ussr"], "uz", "998", ".. ... .. .."],
                          ["Vanuatu", ["oceania"], "vu", "678"],
                          ["Vatican City", ["europe"], "va", "39", ".. .... ....", 1],
                          ["Venezuela", ["america", "south-america"], "ve", "58"],
                          ["Vietnam", ["asia"], "vn", "84"],
                          ["Yemen", ["middle-east"], "ye", "967"],
                          ["Zambia", ["africa"], "zm", "260"],
                          ["Zimbabwe", ["africa"], "zw", "263"],
                      ],
                      E = [
                          ["American Samoa", ["oceania"], "as", "1684"],
                          ["Anguilla", ["america", "carribean"], "ai", "1264"],
                          ["Bermuda", ["america", "north-america"], "bm", "1441"],
                          ["British Virgin Islands", ["america", "carribean"], "vg", "1284"],
                          ["Cayman Islands", ["america", "carribean"], "ky", "1345"],
                          ["Cook Islands", ["oceania"], "ck", "682"],
                          ["Falkland Islands", ["america", "south-america"], "fk", "500"],
                          ["Faroe Islands", ["europe"], "fo", "298"],
                          ["Gibraltar", ["europe"], "gi", "350"],
                          ["Greenland", ["america"], "gl", "299"],
                          ["Jersey", ["europe", "eu-union"], "je", "44", ".... ......"],
                          ["Montserrat", ["america", "carribean"], "ms", "1664"],
                          ["Niue", ["asia"], "nu", "683"],
                          ["Norfolk Island", ["oceania"], "nf", "672"],
                          ["Northern Mariana Islands", ["oceania"], "mp", "1670"],
                          ["Saint Barth\xe9lemy", ["america", "carribean"], "bl", "590", "", 1],
                          ["Saint Helena", ["africa"], "sh", "290"],
                          ["Saint Martin", ["america", "carribean"], "mf", "590", "", 2],
                          ["Saint Pierre and Miquelon", ["america", "north-america"], "pm", "508"],
                          ["Sint Maarten", ["america", "carribean"], "sx", "1721"],
                          ["Tokelau", ["oceania"], "tk", "690"],
                          ["Turks and Caicos Islands", ["america", "carribean"], "tc", "1649"],
                          ["U.S. Virgin Islands", ["america", "carribean"], "vi", "1340"],
                          ["Wallis and Futuna", ["oceania"], "wf", "681"],
                      ];
                  function T(e, t, r, a, i) {
                      var u,
                          c,
                          s = [];
                      return (
                          (c = !0 === t),
                          [
                              (u = []).concat.apply(
                                  u,
                                  o(
                                      e.map(function (e) {
                                          var o,
                                              u,
                                              l = {
                                                  name: e[0],
                                                  regions: e[1],
                                                  iso2: e[2],
                                                  countryCode: e[3],
                                                  dialCode: e[3],
                                                  format: ((o = e[3]), (u = e[4]) && !i ? r + "".padEnd(o.length, ".") + " " + u : r + "".padEnd(o.length, ".") + " " + a),
                                                  priority: e[5] || 0,
                                              },
                                              f = [];
                                          return (
                                              e[6] &&
                                                  e[6].map(function (t) {
                                                      var r = (function (e) {
                                                          for (var t = 1; t < arguments.length; t++) {
                                                              var r = null != arguments[t] ? arguments[t] : {},
                                                                  a = Object.keys(r);
                                                              "function" == typeof Object.getOwnPropertySymbols &&
                                                                  (a = a.concat(
                                                                      Object.getOwnPropertySymbols(r).filter(function (e) {
                                                                          return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                                      })
                                                                  )),
                                                                  a.forEach(function (t) {
                                                                      n(e, t, r[t]);
                                                                  });
                                                          }
                                                          return e;
                                                      })({}, l);
                                                      (r.dialCode = e[3] + t), (r.isAreaCode = !0), (r.areaCodeLength = t.length), f.push(r);
                                                  }),
                                              f.length > 0 ? ((l.mainCode = !0), c || ("Array" === t.constructor.name && t.includes(e[2])) ? ((l.hasAreaCodes = !0), [l].concat(f)) : ((s = s.concat(f)), [l])) : [l]
                                          );
                                      })
                                  )
                              ),
                              s,
                          ]
                      );
                  }
                  function I(e, t, r, n) {
                      if (null !== r) {
                          var a = Object.keys(r),
                              o = Object.values(r);
                          a.forEach(function (r, a) {
                              if (n) return e.push([r, o[a]]);
                              var i = e.findIndex(function (e) {
                                  return e[0] === r;
                              });
                              if (-1 === i) {
                                  var u = [r];
                                  (u[t] = o[a]), e.push(u);
                              } else e[i][t] = o[a];
                          });
                      }
                  }
                  function A(e, t) {
                      return 0 === t.length
                          ? e
                          : e.map(function (e) {
                                var r = t.findIndex(function (t) {
                                    return t[0] === e[2];
                                });
                                if (-1 === r) return e;
                                var n = t[r];
                                return n[1] && (e[4] = n[1]), n[3] && (e[5] = n[3]), n[2] && (e[6] = n[2]), e;
                            });
                  }
                  var D = function e(t, r, n, a, i, u, s, l, f, d, p, h, m, y) {
                          c(this, e),
                              (this.filterRegions = function (e, t) {
                                  return "string" == typeof e
                                      ? t.filter(function (t) {
                                            return t.regions.some(function (t) {
                                                return t === e;
                                            });
                                        })
                                      : t.filter(function (t) {
                                            return e
                                                .map(function (e) {
                                                    return t.regions.some(function (t) {
                                                        return t === e;
                                                    });
                                                })
                                                .some(function (e) {
                                                    return e;
                                                });
                                        });
                              }),
                              (this.sortTerritories = function (e, t) {
                                  var r = [].concat(o(e), o(t));
                                  return (
                                      r.sort(function (e, t) {
                                          return e.name < t.name ? -1 : e.name > t.name ? 1 : 0;
                                      }),
                                      r
                                  );
                              }),
                              (this.getFilteredCountryList = function (e, t, r) {
                                  return 0 === e.length
                                      ? t
                                      : r
                                      ? e
                                            .map(function (e) {
                                                var r = t.find(function (t) {
                                                    return t.iso2 === e;
                                                });
                                                if (r) return r;
                                            })
                                            .filter(function (e) {
                                                return e;
                                            })
                                      : t.filter(function (t) {
                                            return e.some(function (e) {
                                                return e === t.iso2;
                                            });
                                        });
                              }),
                              (this.localizeCountries = function (e, t, r) {
                                  for (var n = 0; n < e.length; n++) void 0 !== t[e[n].iso2] ? (e[n].localName = t[e[n].iso2]) : void 0 !== t[e[n].name] && (e[n].localName = t[e[n].name]);
                                  return (
                                      r ||
                                          e.sort(function (e, t) {
                                              return e.localName < t.localName ? -1 : e.localName > t.localName ? 1 : 0;
                                          }),
                                      e
                                  );
                              }),
                              (this.getCustomAreas = function (e, t) {
                                  for (var r = [], n = 0; n < t.length; n++) {
                                      var a = JSON.parse(JSON.stringify(e));
                                      (a.dialCode += t[n]), r.push(a);
                                  }
                                  return r;
                              }),
                              (this.excludeCountries = function (e, t) {
                                  return 0 === t.length
                                      ? e
                                      : e.filter(function (e) {
                                            return !t.includes(e.iso2);
                                        });
                              });
                          var b,
                              g = (I((b = []), 1, l, !0), I(b, 3, f), I(b, 2, d), b),
                              v = A(JSON.parse(JSON.stringify(O)), g),
                              C = A(JSON.parse(JSON.stringify(E)), g),
                              _ = k(T(v, t, h, m, y), 2),
                              w = _[0],
                              S = _[1];
                          if (r) {
                              var j = k(T(C, t, h, m, y), 2),
                                  x = j[0];
                              j[1], (w = this.sortTerritories(x, w));
                          }
                          n && (w = this.filterRegions(n, w)),
                              (this.onlyCountries = this.localizeCountries(this.excludeCountries(this.getFilteredCountryList(a, w, s.includes("onlyCountries")), u), p, s.includes("onlyCountries"))),
                              (this.preferredCountries = 0 === i.length ? [] : this.localizeCountries(this.getFilteredCountryList(i, w, s.includes("preferredCountries")), p, s.includes("preferredCountries"))),
                              (this.hiddenAreaCodes = this.excludeCountries(this.getFilteredCountryList(a, S), u));
                      },
                      P = (function (e) {
                          var t, r;
                          function l(e) {
                              c(this, l),
                                  ((r = (t = p(l).call(this, e)) && ("object" === f(t) || "function" == typeof t) ? t : d(this)).getProbableCandidate = C()(function (e) {
                                      return e && 0 !== e.length
                                          ? r.state.onlyCountries.filter(function (t) {
                                                return j()(t.name.toLowerCase(), e.toLowerCase());
                                            }, d(d(r)))[0]
                                          : null;
                                  })),
                                  (r.guessSelectedCountry = C()(function (e, t, n, a) {
                                      if (
                                          !1 === r.props.enableAreaCodes &&
                                          (a.some(function (t) {
                                              if (j()(e, t.dialCode))
                                                  return (
                                                      n.some(function (e) {
                                                          if (t.iso2 === e.iso2 && e.mainCode) return (o = e), !0;
                                                      }),
                                                      !0
                                                  );
                                          }),
                                          o)
                                      )
                                          return o;
                                      var o,
                                          i = n.find(function (e) {
                                              return e.iso2 == t;
                                          });
                                      if ("" === e.trim()) return i;
                                      var u = n.reduce(
                                          function (t, r) {
                                              return j()(e, r.dialCode) && (r.dialCode.length > t.dialCode.length || (r.dialCode.length === t.dialCode.length && r.priority < t.priority)) ? r : t;
                                          },
                                          { dialCode: "", priority: 10001 },
                                          d(d(r))
                                      );
                                      return u.name ? u : i;
                                  })),
                                  (r.updateCountry = function (e) {
                                      var t,
                                          n = r.state.onlyCountries;
                                      (t =
                                          e.indexOf(0) >= "0" && "9" >= e.indexOf(0)
                                              ? n.find(function (t) {
                                                    return t.dialCode == +e;
                                                })
                                              : n.find(function (t) {
                                                    return t.iso2 == e;
                                                })) &&
                                          t.dialCode &&
                                          r.setState({ selectedCountry: t, formattedNumber: r.props.disableCountryCode ? "" : r.formatNumber(t.dialCode, t) });
                                  }),
                                  (r.scrollTo = function (e, t) {
                                      if (e) {
                                          var n = r.dropdownRef;
                                          if (n && document.body) {
                                              var a = n.offsetHeight,
                                                  o = n.getBoundingClientRect().top + document.body.scrollTop,
                                                  i = e.getBoundingClientRect(),
                                                  u = e.offsetHeight,
                                                  c = i.top + document.body.scrollTop,
                                                  s = c - o + n.scrollTop,
                                                  l = a / 2 - u / 2;
                                              (r.props.enableSearch ? c < o + 32 : c < o) ? (t && (s -= l), (n.scrollTop = s)) : c + u > o + a && (t && (s += l), (n.scrollTop = s - (a - u)));
                                          }
                                      }
                                  }),
                                  (r.scrollToTop = function () {
                                      var e = r.dropdownRef;
                                      e && document.body && (e.scrollTop = 0);
                                  }),
                                  (r.formatNumber = function (e, t) {
                                      if (!t) return e;
                                      var n,
                                          o = t.format,
                                          c = r.props,
                                          s = c.disableCountryCode,
                                          l = c.enableAreaCodeStretch,
                                          f = c.enableLongNumbers,
                                          d = c.autoFormat;
                                      if (
                                          (s ? ((n = o.split(" ")).shift(), (n = n.join(" "))) : l && t.isAreaCode ? (((n = o.split(" "))[1] = n[1].replace(/\.+/, "".padEnd(t.areaCodeLength, "."))), (n = n.join(" "))) : (n = o),
                                          !e || 0 === e.length)
                                      )
                                          return s ? "" : r.props.prefix;
                                      if ((e && e.length < 2) || !n || !d) return s ? e : r.props.prefix + e;
                                      var p,
                                          h = w()(
                                              n,
                                              function (e, t) {
                                                  if (0 === e.remainingText.length) return e;
                                                  if ("." !== t) return { formattedText: e.formattedText + t, remainingText: e.remainingText };
                                                  var r,
                                                      n = i((r = e.remainingText)) || a(r) || u(),
                                                      o = n[0],
                                                      c = n.slice(1);
                                                  return { formattedText: e.formattedText + o, remainingText: c };
                                              },
                                              { formattedText: "", remainingText: e.split("") }
                                          );
                                      return (p = f ? h.formattedText + h.remainingText.join("") : h.formattedText).includes("(") && !p.includes(")") && (p += ")"), p;
                                  }),
                                  (r.cursorToEnd = function () {
                                      var e = r.numberInputRef;
                                      if (document.activeElement === e) {
                                          e.focus();
                                          var t = e.value.length;
                                          ")" === e.value.charAt(t - 1) && (t -= 1), e.setSelectionRange(t, t);
                                      }
                                  }),
                                  (r.getElement = function (e) {
                                      return r["flag_no_".concat(e)];
                                  }),
                                  (r.getCountryData = function () {
                                      return r.state.selectedCountry
                                          ? { name: r.state.selectedCountry.name || "", dialCode: r.state.selectedCountry.dialCode || "", countryCode: r.state.selectedCountry.iso2 || "", format: r.state.selectedCountry.format || "" }
                                          : {};
                                  }),
                                  (r.handleFlagDropdownClick = function (e) {
                                      if ((e.preventDefault(), r.state.showDropdown || !r.props.disabled)) {
                                          var t = r.state,
                                              n = t.preferredCountries,
                                              a = t.onlyCountries,
                                              o = t.selectedCountry,
                                              i = r.concatPreferredCountries(n, a).findIndex(function (e) {
                                                  return e.dialCode === o.dialCode && e.iso2 === o.iso2;
                                              });
                                          r.setState({ showDropdown: !r.state.showDropdown, highlightCountryIndex: i }, function () {
                                              r.state.showDropdown && r.scrollTo(r.getElement(r.state.highlightCountryIndex));
                                          });
                                      }
                                  }),
                                  (r.handleInput = function (e) {
                                      var t = e.target.value,
                                          n = r.props,
                                          a = n.prefix,
                                          o = n.onChange,
                                          i = r.props.disableCountryCode ? "" : a,
                                          u = r.state.selectedCountry,
                                          c = r.state.freezeSelection;
                                      if (!r.props.countryCodeEditable) {
                                          var s =
                                              a +
                                              (u.hasAreaCodes
                                                  ? r.state.onlyCountries.find(function (e) {
                                                        return e.iso2 === u.iso2 && e.mainCode;
                                                    }).dialCode
                                                  : u.dialCode);
                                          if (t.slice(0, s.length) !== s) return;
                                      }
                                      if (t === a) return o && o("", r.getCountryData(), e, ""), r.setState({ formattedNumber: "" });
                                      if (
                                          (!(t.replace(/\D/g, "").length > 15) || (!1 !== r.props.enableLongNumbers && ("number" != typeof r.props.enableLongNumbers || !(t.replace(/\D/g, "").length > r.props.enableLongNumbers)))) &&
                                          t !== r.state.formattedNumber
                                      ) {
                                          e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
                                          var l = r.props.country,
                                              f = r.state,
                                              d = f.onlyCountries,
                                              p = f.selectedCountry,
                                              h = f.hiddenAreaCodes;
                                          if ((o && e.persist(), t.length > 0)) {
                                              var m = t.replace(/\D/g, "");
                                              (!r.state.freezeSelection || (p && p.dialCode.length > m.length)) && ((u = r.props.disableCountryGuess ? p : r.guessSelectedCountry(m.substring(0, 6), l, d, h) || p), (c = !1)),
                                                  (i = r.formatNumber(m, u)),
                                                  (u = u.dialCode ? u : p);
                                          }
                                          var y = e.target.selectionStart,
                                              b = e.target.selectionStart,
                                              g = r.state.formattedNumber,
                                              v = i.length - g.length;
                                          r.setState({ formattedNumber: i, freezeSelection: c, selectedCountry: u }, function () {
                                              v > 0 && (b -= v),
                                                  ")" == i.charAt(i.length - 1)
                                                      ? r.numberInputRef.setSelectionRange(i.length - 1, i.length - 1)
                                                      : b > 0 && g.length >= i.length
                                                      ? r.numberInputRef.setSelectionRange(b, b)
                                                      : y < g.length && r.numberInputRef.setSelectionRange(y, y),
                                                  o && o(i.replace(/[^0-9]+/g, ""), r.getCountryData(), e, i);
                                          });
                                      }
                                  }),
                                  (r.handleInputClick = function (e) {
                                      r.setState({ showDropdown: !1 }), r.props.onClick && r.props.onClick(e, r.getCountryData());
                                  }),
                                  (r.handleDoubleClick = function (e) {
                                      var t = e.target.value.length;
                                      e.target.setSelectionRange(0, t);
                                  }),
                                  (r.handleFlagItemClick = function (e, t) {
                                      var n = r.state.selectedCountry,
                                          a = r.state.onlyCountries.find(function (t) {
                                              return t == e;
                                          });
                                      if (a) {
                                          var o = r.state.formattedNumber.replace(" ", "").replace("(", "").replace(")", "").replace("-", ""),
                                              i = o.length > 1 ? o.replace(n.dialCode, a.dialCode) : a.dialCode,
                                              u = r.formatNumber(i.replace(/\D/g, ""), a);
                                          r.setState({ showDropdown: !1, selectedCountry: a, freezeSelection: !0, formattedNumber: u, searchValue: "" }, function () {
                                              r.cursorToEnd(), r.props.onChange && r.props.onChange(u.replace(/[^0-9]+/g, ""), r.getCountryData(), t, u);
                                          });
                                      }
                                  }),
                                  (r.handleInputFocus = function (e) {
                                      r.numberInputRef &&
                                          r.numberInputRef.value === r.props.prefix &&
                                          r.state.selectedCountry &&
                                          !r.props.disableCountryCode &&
                                          r.setState({ formattedNumber: r.props.prefix + r.state.selectedCountry.dialCode }, function () {
                                              r.props.jumpCursorToEnd && setTimeout(r.cursorToEnd, 0);
                                          }),
                                          r.setState({ placeholder: "" }),
                                          r.props.onFocus && r.props.onFocus(e, r.getCountryData()),
                                          r.props.jumpCursorToEnd && setTimeout(r.cursorToEnd, 0);
                                  }),
                                  (r.handleInputBlur = function (e) {
                                      e.target.value || r.setState({ placeholder: r.props.placeholder }), r.props.onBlur && r.props.onBlur(e, r.getCountryData());
                                  }),
                                  (r.handleInputCopy = function (e) {
                                      if (r.props.copyNumbersOnly) {
                                          var t = window
                                              .getSelection()
                                              .toString()
                                              .replace(/[^0-9]+/g, "");
                                          e.clipboardData.setData("text/plain", t), e.preventDefault();
                                      }
                                  }),
                                  (r.getHighlightCountryIndex = function (e) {
                                      var t = r.state.highlightCountryIndex + e;
                                      return t < 0 || t >= r.state.onlyCountries.length + r.state.preferredCountries.length ? t - e : r.props.enableSearch && t > r.getSearchFilteredCountries().length ? 0 : t;
                                  }),
                                  (r.searchCountry = function () {
                                      var e = r.getProbableCandidate(r.state.queryString) || r.state.onlyCountries[0],
                                          t =
                                              r.state.onlyCountries.findIndex(function (t) {
                                                  return t == e;
                                              }) + r.state.preferredCountries.length;
                                      r.scrollTo(r.getElement(t), !0), r.setState({ queryString: "", highlightCountryIndex: t });
                                  }),
                                  (r.handleKeydown = function (e) {
                                      var t = r.props.keys,
                                          n = e.target.className;
                                      if (n.includes("selected-flag") && e.which === t.ENTER && !r.state.showDropdown) return r.handleFlagDropdownClick(e);
                                      if (n.includes("form-control") && (e.which === t.ENTER || e.which === t.ESC)) return e.target.blur();
                                      if (r.state.showDropdown && !r.props.disabled && (!n.includes("search-box") || e.which === t.UP || e.which === t.DOWN || e.which === t.ENTER || (e.which === t.ESC && "" === e.target.value))) {
                                          e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
                                          var a = function (e) {
                                              r.setState({ highlightCountryIndex: r.getHighlightCountryIndex(e) }, function () {
                                                  r.scrollTo(r.getElement(r.state.highlightCountryIndex), !0);
                                              });
                                          };
                                          switch (e.which) {
                                              case t.DOWN:
                                                  a(1);
                                                  break;
                                              case t.UP:
                                                  a(-1);
                                                  break;
                                              case t.ENTER:
                                                  r.props.enableSearch
                                                      ? r.handleFlagItemClick(r.getSearchFilteredCountries()[r.state.highlightCountryIndex] || r.getSearchFilteredCountries()[0], e)
                                                      : r.handleFlagItemClick([].concat(o(r.state.preferredCountries), o(r.state.onlyCountries))[r.state.highlightCountryIndex], e);
                                                  break;
                                              case t.ESC:
                                              case t.TAB:
                                                  r.setState({ showDropdown: !1 }, r.cursorToEnd);
                                                  break;
                                              default:
                                                  ((e.which >= t.A && e.which <= t.Z) || e.which === t.SPACE) && r.setState({ queryString: r.state.queryString + String.fromCharCode(e.which) }, r.state.debouncedQueryStingSearcher);
                                          }
                                      }
                                  }),
                                  (r.handleInputKeyDown = function (e) {
                                      var t = r.props,
                                          n = t.keys,
                                          a = t.onEnterKeyPress,
                                          o = t.onKeyDown;
                                      e.which === n.ENTER && a && a(e), o && o(e);
                                  }),
                                  (r.handleClickOutside = function (e) {
                                      r.dropdownRef && !r.dropdownContainerRef.contains(e.target) && r.state.showDropdown && r.setState({ showDropdown: !1 });
                                  }),
                                  (r.handleSearchChange = function (e) {
                                      var t = e.currentTarget.value,
                                          n = r.state,
                                          a = n.preferredCountries,
                                          o = n.selectedCountry,
                                          i = 0;
                                      if ("" === t && o) {
                                          var u = r.state.onlyCountries;
                                          (i = r.concatPreferredCountries(a, u).findIndex(function (e) {
                                              return e == o;
                                          })),
                                              setTimeout(function () {
                                                  return r.scrollTo(r.getElement(i));
                                              }, 100);
                                      }
                                      r.setState({ searchValue: t, highlightCountryIndex: i });
                                  }),
                                  (r.concatPreferredCountries = function (e, t) {
                                      return e.length > 0 ? o(new Set(e.concat(t))) : t;
                                  }),
                                  (r.getDropdownCountryName = function (e) {
                                      return e.localName || e.name;
                                  }),
                                  (r.getSearchFilteredCountries = function () {
                                      var e = r.state,
                                          t = e.preferredCountries,
                                          n = e.onlyCountries,
                                          a = e.searchValue,
                                          i = r.props.enableSearch,
                                          u = r.concatPreferredCountries(t, n),
                                          c = a.trim().toLowerCase().replace("+", "");
                                      if (i && c) {
                                          if (/^\d+$/.test(c))
                                              return u.filter(function (e) {
                                                  var t = e.dialCode;
                                                  return ["".concat(t)].some(function (e) {
                                                      return e.toLowerCase().includes(c);
                                                  });
                                              });
                                          var s = u.filter(function (e) {
                                                  var t = e.iso2;
                                                  return ["".concat(t)].some(function (e) {
                                                      return e.toLowerCase().includes(c);
                                                  });
                                              }),
                                              l = u.filter(function (e) {
                                                  var t = e.name,
                                                      r = e.localName;
                                                  return (
                                                      e.iso2,
                                                      ["".concat(t), "".concat(r || "")].some(function (e) {
                                                          return e.toLowerCase().includes(c);
                                                      })
                                                  );
                                              });
                                          return r.scrollToTop(), o(new Set([].concat(s, l)));
                                      }
                                      return u;
                                  }),
                                  (r.getCountryDropdownList = function () {
                                      var e = r.state,
                                          t = e.preferredCountries,
                                          a = e.highlightCountryIndex,
                                          o = e.showDropdown,
                                          i = e.searchValue,
                                          u = r.props,
                                          c = u.disableDropdown,
                                          s = u.prefix,
                                          l = r.props,
                                          f = l.enableSearch,
                                          d = l.searchNotFound,
                                          p = l.disableSearchIcon,
                                          h = l.searchClass,
                                          m = l.searchStyle,
                                          b = l.searchPlaceholder,
                                          g = l.autocompleteSearch,
                                          v = r.getSearchFilteredCountries().map(function (e, t) {
                                              var n = a === t,
                                                  o = N()({ country: !0, preferred: "us" === e.iso2 || "gb" === e.iso2, active: "us" === e.iso2, highlight: n }),
                                                  i = "flag ".concat(e.iso2);
                                              return y.a.createElement(
                                                  "li",
                                                  Object.assign(
                                                      {
                                                          ref: function (e) {
                                                              return (r["flag_no_".concat(t)] = e);
                                                          },
                                                          key: "flag_no_".concat(t),
                                                          "data-flag-key": "flag_no_".concat(t),
                                                          className: o,
                                                          "data-dial-code": "1",
                                                          tabIndex: c ? "-1" : "0",
                                                          "data-country-code": e.iso2,
                                                          onClick: function (t) {
                                                              return r.handleFlagItemClick(e, t);
                                                          },
                                                          role: "option",
                                                      },
                                                      n ? { "aria-selected": !0 } : {}
                                                  ),
                                                  y.a.createElement("div", { className: i }),
                                                  y.a.createElement("span", { className: "country-name" }, r.getDropdownCountryName(e)),
                                                  y.a.createElement("span", { className: "dial-code" }, e.format ? r.formatNumber(e.dialCode, e) : s + e.dialCode)
                                              );
                                          }),
                                          C = y.a.createElement("li", { key: "dashes", className: "divider" });
                                      t.length > 0 && (!f || (f && !i.trim())) && v.splice(t.length, 0, C);
                                      var _ = N()(n({ "country-list": !0, hide: !o }, r.props.dropdownClass, !0));
                                      return y.a.createElement(
                                          "ul",
                                          {
                                              ref: function (e) {
                                                  return !f && e && e.focus(), (r.dropdownRef = e);
                                              },
                                              className: _,
                                              style: r.props.dropdownStyle,
                                              role: "listbox",
                                              tabIndex: "0",
                                          },
                                          f &&
                                              y.a.createElement(
                                                  "li",
                                                  { className: N()(n({ search: !0 }, h, h)) },
                                                  !p && y.a.createElement("span", { className: N()(n({ "search-emoji": !0 }, "".concat(h, "-emoji"), h)), role: "img", "aria-label": "Magnifying glass" }, "\uD83D\uDD0E"),
                                                  y.a.createElement("input", {
                                                      className: N()(n({ "search-box": !0 }, "".concat(h, "-box"), h)),
                                                      style: m,
                                                      type: "search",
                                                      placeholder: b,
                                                      autoFocus: !0,
                                                      autoComplete: g ? "on" : "off",
                                                      value: i,
                                                      onChange: r.handleSearchChange,
                                                  })
                                              ),
                                          v.length > 0 ? v : y.a.createElement("li", { className: "no-entries-message" }, y.a.createElement("span", null, d))
                                      );
                                  });
                              var t,
                                  r,
                                  s,
                                  h = new D(
                                      e.enableAreaCodes,
                                      e.enableTerritories,
                                      e.regions,
                                      e.onlyCountries,
                                      e.preferredCountries,
                                      e.excludeCountries,
                                      e.preserveOrder,
                                      e.masks,
                                      e.priority,
                                      e.areaCodes,
                                      e.localization,
                                      e.prefix,
                                      e.defaultMask,
                                      e.alwaysDefaultMask
                                  ),
                                  m = h.onlyCountries,
                                  b = h.preferredCountries,
                                  v = h.hiddenAreaCodes,
                                  _ = e.value ? e.value.replace(/\D/g, "") : "";
                              s = e.disableInitialCountryGuess
                                  ? 0
                                  : _.length > 1
                                  ? r.guessSelectedCountry(_.substring(0, 6), e.country, m, v) || 0
                                  : (e.country &&
                                        m.find(function (t) {
                                            return t.iso2 == e.country;
                                        })) ||
                                    0;
                              var S,
                                  x = _.length < 2 && s && !j()(_, s.dialCode) ? s.dialCode : "";
                              S = "" === _ && 0 === s ? "" : r.formatNumber((e.disableCountryCode ? "" : x) + _, s.name ? s : void 0);
                              var k = m.findIndex(function (e) {
                                  return e == s;
                              });
                              return (
                                  (r.state = {
                                      showDropdown: e.showDropdown,
                                      formattedNumber: S,
                                      onlyCountries: m,
                                      preferredCountries: b,
                                      hiddenAreaCodes: v,
                                      selectedCountry: s,
                                      highlightCountryIndex: k,
                                      queryString: "",
                                      freezeSelection: !1,
                                      debouncedQueryStingSearcher: g()(r.searchCountry, 250),
                                      searchValue: "",
                                  }),
                                  r
                              );
                          }
                          return (
                              (function (e, t) {
                                  if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                                  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && h(e, t);
                              })(l, e),
                              (t = [
                                  {
                                      key: "componentDidMount",
                                      value: function () {
                                          document.addEventListener && this.props.enableClickOutside && document.addEventListener("mousedown", this.handleClickOutside),
                                              this.props.onMount && this.props.onMount(this.state.formattedNumber.replace(/[^0-9]+/g, ""), this.getCountryData(), this.state.formattedNumber);
                                      },
                                  },
                                  {
                                      key: "componentWillUnmount",
                                      value: function () {
                                          document.removeEventListener && this.props.enableClickOutside && document.removeEventListener("mousedown", this.handleClickOutside);
                                      },
                                  },
                                  {
                                      key: "componentDidUpdate",
                                      value: function (e, t, r) {
                                          e.country !== this.props.country ? this.updateCountry(this.props.country) : e.value !== this.props.value && this.updateFormattedNumber(this.props.value);
                                      },
                                  },
                                  {
                                      key: "updateFormattedNumber",
                                      value: function (e) {
                                          if (null === e) return this.setState({ selectedCountry: 0, formattedNumber: "" });
                                          var t = this.state,
                                              r = t.onlyCountries,
                                              n = t.selectedCountry,
                                              a = t.hiddenAreaCodes,
                                              o = this.props,
                                              i = o.country,
                                              u = o.prefix;
                                          if ("" === e) return this.setState({ selectedCountry: n, formattedNumber: "" });
                                          var c,
                                              s,
                                              l = e.replace(/\D/g, "");
                                          if (n && j()(e, u + n.dialCode)) (s = this.formatNumber(l, n)), this.setState({ formattedNumber: s });
                                          else {
                                              var f = (c = this.props.disableCountryGuess ? n : this.guessSelectedCountry(l.substring(0, 6), i, r, a) || n) && j()(l, u + c.dialCode) ? c.dialCode : "";
                                              (s = this.formatNumber((this.props.disableCountryCode ? "" : f) + l, c || void 0)), this.setState({ selectedCountry: c, formattedNumber: s });
                                          }
                                      },
                                  },
                                  {
                                      key: "render",
                                      value: function () {
                                          var e,
                                              t,
                                              r,
                                              a = this,
                                              o = this.state,
                                              i = o.onlyCountries,
                                              u = o.selectedCountry,
                                              c = o.showDropdown,
                                              s = o.formattedNumber,
                                              l = o.hiddenAreaCodes,
                                              f = this.props,
                                              d = f.disableDropdown,
                                              p = f.renderStringAsFlag,
                                              h = f.isValid,
                                              m = f.defaultErrorMessage,
                                              b = f.specialLabel;
                                          if ("boolean" == typeof h) t = h;
                                          else {
                                              var g = h(s.replace(/\D/g, ""), u, i, l);
                                              "boolean" == typeof g ? !1 === (t = g) && (r = m) : ((t = !1), (r = g));
                                          }
                                          var v = N()((n((e = {}), this.props.containerClass, !0), n(e, "react-tel-input", !0), e)),
                                              C = N()({ arrow: !0, up: c }),
                                              _ = N()(n({ "form-control": !0, "invalid-number": !t, open: c }, this.props.inputClass, !0)),
                                              w = N()({ "selected-flag": !0, open: c }),
                                              S = N()(n({ "flag-dropdown": !0, "invalid-number": !t, open: c }, this.props.buttonClass, !0)),
                                              j = "flag ".concat(u && u.iso2);
                                          return y.a.createElement(
                                              "div",
                                              { className: "".concat(v, " ").concat(this.props.className), style: this.props.style || this.props.containerStyle, onKeyDown: this.handleKeydown },
                                              b && y.a.createElement("div", { className: "special-label" }, b),
                                              r && y.a.createElement("div", { className: "invalid-number-message" }, r),
                                              y.a.createElement(
                                                  "input",
                                                  Object.assign(
                                                      {
                                                          className: _,
                                                          style: this.props.inputStyle,
                                                          onChange: this.handleInput,
                                                          onClick: this.handleInputClick,
                                                          onDoubleClick: this.handleDoubleClick,
                                                          onFocus: this.handleInputFocus,
                                                          onBlur: this.handleInputBlur,
                                                          onCopy: this.handleInputCopy,
                                                          value: s,
                                                          onKeyDown: this.handleInputKeyDown,
                                                          placeholder: this.props.placeholder,
                                                          disabled: this.props.disabled,
                                                          type: "tel",
                                                      },
                                                      this.props.inputProps,
                                                      {
                                                          ref: function (e) {
                                                              (a.numberInputRef = e),
                                                                  "function" == typeof a.props.inputProps.ref ? a.props.inputProps.ref(e) : "object" == typeof a.props.inputProps.ref && (a.props.inputProps.ref.current = e);
                                                          },
                                                      }
                                                  )
                                              ),
                                              y.a.createElement(
                                                  "div",
                                                  {
                                                      className: S,
                                                      style: this.props.buttonStyle,
                                                      ref: function (e) {
                                                          return (a.dropdownContainerRef = e);
                                                      },
                                                  },
                                                  p
                                                      ? y.a.createElement("div", { className: w }, p)
                                                      : y.a.createElement(
                                                            "div",
                                                            {
                                                                onClick: d ? void 0 : this.handleFlagDropdownClick,
                                                                className: w,
                                                                title: u ? "".concat(u.localName || u.name, ": + ").concat(u.dialCode) : "",
                                                                tabIndex: d ? "-1" : "0",
                                                                role: "button",
                                                                "aria-haspopup": "listbox",
                                                                "aria-expanded": !!c || void 0,
                                                            },
                                                            y.a.createElement("div", { className: j }, !d && y.a.createElement("div", { className: C }))
                                                        ),
                                                  c && this.getCountryDropdownList()
                                              )
                                          );
                                      },
                                  },
                              ]),
                              s(l.prototype, t),
                              r && s(l, r),
                              l
                          );
                      })(y.a.Component);
                  (P.defaultProps = {
                      country: "",
                      value: "",
                      onlyCountries: [],
                      preferredCountries: [],
                      excludeCountries: [],
                      placeholder: "1 (702) 123-4567",
                      searchPlaceholder: "search",
                      searchNotFound: "No entries to show",
                      flagsImagePath: "./flags.png",
                      disabled: !1,
                      containerStyle: {},
                      inputStyle: {},
                      buttonStyle: {},
                      dropdownStyle: {},
                      searchStyle: {},
                      containerClass: "",
                      inputClass: "",
                      buttonClass: "",
                      dropdownClass: "",
                      searchClass: "",
                      className: "",
                      autoFormat: !0,
                      enableAreaCodes: !1,
                      enableTerritories: !1,
                      disableCountryCode: !1,
                      disableDropdown: !1,
                      enableLongNumbers: !1,
                      countryCodeEditable: !0,
                      enableSearch: !1,
                      disableSearchIcon: !1,
                      disableInitialCountryGuess: !1,
                      disableCountryGuess: !1,
                      regions: "",
                      inputProps: {},
                      localization: {},
                      masks: null,
                      priority: null,
                      areaCodes: null,
                      preserveOrder: [],
                      defaultMask: "... ... ... ... ..",
                      alwaysDefaultMask: !1,
                      prefix: "+",
                      copyNumbersOnly: !0,
                      renderStringAsFlag: "",
                      autocompleteSearch: !1,
                      jumpCursorToEnd: !0,
                      enableAreaCodeStretch: !1,
                      enableClickOutside: !0,
                      showDropdown: !1,
                      isValid: !0,
                      defaultErrorMessage: "",
                      specialLabel: "Phone",
                      onEnterKeyPress: null,
                      keys: { UP: 38, DOWN: 40, RIGHT: 39, LEFT: 37, ENTER: 13, ESC: 27, PLUS: 43, A: 65, Z: 90, SPACE: 32, TAB: 9 },
                  }),
                      (t.default = P);
              },
          ]);
      },
  },
]);
