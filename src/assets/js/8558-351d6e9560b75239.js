(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8558],
    {
        54440: function (e, t) {
            var n;
            /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
                "use strict";
                var r = {}.hasOwnProperty;
                function i() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var o = typeof n;
                            if ("string" === o || "number" === o) e.push(n);
                            else if (Array.isArray(n)) {
                                if (n.length) {
                                    var u = i.apply(null, n);
                                    u && e.push(u);
                                }
                            } else if ("object" === o) {
                                if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                                    e.push(n.toString());
                                    continue;
                                }
                                for (var a in n) r.call(n, a) && n[a] && e.push(a);
                            }
                        }
                    }
                    return e.join(" ");
                }
                e.exports
                    ? ((i.default = i), (e.exports = i))
                    : void 0 !==
                          (n = function () {
                              return i;
                          }.apply(t, [])) && (e.exports = n);
            })();
        },
        62601: function (e, t, n) {
            "use strict";
            var r, i;
            e.exports = (null == (r = n.g.process) ? void 0 : r.env) && "object" == typeof (null == (i = n.g.process) ? void 0 : i.env) ? n.g.process : n(58960);
        },
        58960: function (e) {
            !(function () {
                var t = {
                        229: function (e) {
                            var t,
                                n,
                                r,
                                i = (e.exports = {});
                            function o() {
                                throw Error("setTimeout has not been defined");
                            }
                            function u() {
                                throw Error("clearTimeout has not been defined");
                            }
                            function a(e) {
                                if (t === setTimeout) return setTimeout(e, 0);
                                if ((t === o || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0);
                                try {
                                    return t(e, 0);
                                } catch (n) {
                                    try {
                                        return t.call(null, e, 0);
                                    } catch (n) {
                                        return t.call(this, e, 0);
                                    }
                                }
                            }
                            !(function () {
                                try {
                                    t = "function" == typeof setTimeout ? setTimeout : o;
                                } catch (e) {
                                    t = o;
                                }
                                try {
                                    n = "function" == typeof clearTimeout ? clearTimeout : u;
                                } catch (e) {
                                    n = u;
                                }
                            })();
                            var s = [],
                                c = !1,
                                l = -1;
                            function f() {
                                c && r && ((c = !1), r.length ? (s = r.concat(s)) : (l = -1), s.length && d());
                            }
                            function d() {
                                if (!c) {
                                    var e = a(f);
                                    c = !0;
                                    for (var t = s.length; t; ) {
                                        for (r = s, s = []; ++l < t; ) r && r[l].run();
                                        (l = -1), (t = s.length);
                                    }
                                    (r = null),
                                        (c = !1),
                                        (function (e) {
                                            if (n === clearTimeout) return clearTimeout(e);
                                            if ((n === u || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(e);
                                            try {
                                                n(e);
                                            } catch (t) {
                                                try {
                                                    return n.call(null, e);
                                                } catch (t) {
                                                    return n.call(this, e);
                                                }
                                            }
                                        })(e);
                                }
                            }
                            function p(e, t) {
                                (this.fun = e), (this.array = t);
                            }
                            function g() {}
                            (i.nextTick = function (e) {
                                var t = Array(arguments.length - 1);
                                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                s.push(new p(e, t)), 1 !== s.length || c || a(d);
                            }),
                                (p.prototype.run = function () {
                                    this.fun.apply(null, this.array);
                                }),
                                (i.title = "browser"),
                                (i.browser = !0),
                                (i.env = {}),
                                (i.argv = []),
                                (i.version = ""),
                                (i.versions = {}),
                                (i.on = g),
                                (i.addListener = g),
                                (i.once = g),
                                (i.off = g),
                                (i.removeListener = g),
                                (i.removeAllListeners = g),
                                (i.emit = g),
                                (i.prependListener = g),
                                (i.prependOnceListener = g),
                                (i.listeners = function (e) {
                                    return [];
                                }),
                                (i.binding = function (e) {
                                    throw Error("process.binding is not supported");
                                }),
                                (i.cwd = function () {
                                    return "/";
                                }),
                                (i.chdir = function (e) {
                                    throw Error("process.chdir is not supported");
                                }),
                                (i.umask = function () {
                                    return 0;
                                });
                        },
                    },
                    n = {};
                function r(e) {
                    var i = n[e];
                    if (void 0 !== i) return i.exports;
                    var o = (n[e] = { exports: {} }),
                        u = !0;
                    try {
                        t[e](o, o.exports, r), (u = !1);
                    } finally {
                        u && delete n[e];
                    }
                    return o.exports;
                }
                r.ab = "//";
                var i = r(229);
                e.exports = i;
            })();
        },
        61396: function (e, t, n) {
            e.exports = n(46685);
        },
        24033: function (e, t, n) {
            e.exports = n(68165);
        },
        57127: function (e, t, n) {
            "use strict";
            n.d(t, {
                SC: function () {
                    return l;
                },
                pi: function () {
                    return s;
                },
                vE: function () {
                    return a;
                },
                zG: function () {
                    return c;
                },
            });
            var r = n(2265);
            n(57437);
            let i = r.createContext({ prefixes: {}, breakpoints: ["xxl", "xl", "lg", "md", "sm", "xs"], minBreakpoint: "xs" }),
                { Consumer: o, Provider: u } = i;
            function a(e, t) {
                let { prefixes: n } = (0, r.useContext)(i);
                return e || n[t] || t;
            }
            function s() {
                let { breakpoints: e } = (0, r.useContext)(i);
                return e;
            }
            function c() {
                let { minBreakpoint: e } = (0, r.useContext)(i);
                return e;
            }
            function l() {
                let { dir: e } = (0, r.useContext)(i);
                return "rtl" === e;
            }
        },
        81853: function (e, t, n) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-shim.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var r = n(2265),
                i =
                    "function" == typeof Object.is
                        ? Object.is
                        : function (e, t) {
                              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
                          },
                o = r.useState,
                u = r.useEffect,
                a = r.useLayoutEffect,
                s = r.useDebugValue;
            function c(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !i(e, n);
                } catch (e) {
                    return !0;
                }
            }
            var l =
                "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement
                    ? function (e, t) {
                          return t();
                      }
                    : function (e, t) {
                          var n = t(),
                              r = o({ inst: { value: n, getSnapshot: t } }),
                              i = r[0].inst,
                              l = r[1];
                          return (
                              a(
                                  function () {
                                      (i.value = n), (i.getSnapshot = t), c(i) && l({ inst: i });
                                  },
                                  [e, n, t]
                              ),
                              u(
                                  function () {
                                      return (
                                          c(i) && l({ inst: i }),
                                          e(function () {
                                              c(i) && l({ inst: i });
                                          })
                                      );
                                  },
                                  [e]
                              ),
                              s(n),
                              n
                          );
                      };
            t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l;
        },
        26272: function (e, t, n) {
            "use strict";
            e.exports = n(81853);
        },
        44796: function (e, t, n) {
            "use strict";
            n.d(t, {
                $l: function () {
                    return u;
                },
                BN: function () {
                    return I;
                },
                DY: function () {
                    return g;
                },
                J$: function () {
                    return q;
                },
                JN: function () {
                    return T;
                },
                LI: function () {
                    return k;
                },
                PM: function () {
                    return c;
                },
                W6: function () {
                    return O;
                },
                i_: function () {
                    return o;
                },
                kY: function () {
                    return G;
                },
                ko: function () {
                    return K;
                },
                kw: function () {
                    return L;
                },
                mf: function () {
                    return s;
                },
                o8: function () {
                    return a;
                },
                qC: function () {
                    return N;
                },
                s6: function () {
                    return H;
                },
                sj: function () {
                    return j;
                },
                u3: function () {
                    return A;
                },
                u_: function () {
                    return $;
                },
                w6: function () {
                    return x;
                },
                xD: function () {
                    return Q;
                },
            });
            var r = n(2265);
            let i = () => {},
                o = i(),
                u = Object,
                a = (e) => e === o,
                s = (e) => "function" == typeof e,
                c = (e, t) => ({ ...e, ...t }),
                l = (e) => s(e.then),
                f = new WeakMap(),
                d = 0,
                p = (e) => {
                    let t, n;
                    let r = typeof e,
                        i = e && e.constructor,
                        o = i == Date;
                    if (u(e) !== e || o || i == RegExp) t = o ? e.toJSON() : "symbol" == r ? e.toString() : "string" == r ? JSON.stringify(e) : "" + e;
                    else {
                        if ((t = f.get(e))) return t;
                        if (((t = ++d + "~"), f.set(e, t), i == Array)) {
                            for (n = 0, t = "@"; n < e.length; n++) t += p(e[n]) + ",";
                            f.set(e, t);
                        }
                        if (i == u) {
                            t = "#";
                            let r = u.keys(e).sort();
                            for (; !a((n = r.pop())); ) a(e[n]) || (t += n + ":" + p(e[n]) + ",");
                            f.set(e, t);
                        }
                    }
                    return t;
                },
                g = new WeakMap(),
                h = {},
                v = {},
                E = "undefined",
                y = typeof window != E,
                w = typeof document != E,
                m = () => y && typeof window.requestAnimationFrame != E,
                T = (e, t) => {
                    let n = g.get(e);
                    return [
                        () => (!a(t) && e.get(t)) || h,
                        (r) => {
                            if (!a(t)) {
                                let i = e.get(t);
                                t in v || (v[t] = i), n[5](t, c(i, r), i || h);
                            }
                        },
                        n[6],
                        () => (!a(t) && t in v ? v[t] : (!a(t) && e.get(t)) || h),
                    ];
                },
                _ = !0,
                [b, S] = y && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [i, i],
                R = {
                    initFocus: (e) => (
                        w && document.addEventListener("visibilitychange", e),
                        b("focus", e),
                        () => {
                            w && document.removeEventListener("visibilitychange", e), S("focus", e);
                        }
                    ),
                    initReconnect: (e) => {
                        let t = () => {
                                (_ = !0), e();
                            },
                            n = () => {
                                _ = !1;
                            };
                        return (
                            b("online", t),
                            b("offline", n),
                            () => {
                                S("online", t), S("offline", n);
                            }
                        );
                    },
                },
                x = !r.useId,
                O = !y || "Deno" in window,
                L = (e) => (m() ? window.requestAnimationFrame(e) : setTimeout(e, 1)),
                k = O ? r.useEffect : r.useLayoutEffect,
                V = "undefined" != typeof navigator && navigator.connection,
                C = !O && V && (["slow-2g", "2g"].includes(V.effectiveType) || V.saveData),
                N = (e) => {
                    if (s(e))
                        try {
                            e = e();
                        } catch (t) {
                            e = "";
                        }
                    let t = e;
                    return [(e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? p(e) : ""), t];
                },
                D = 0,
                A = () => ++D;
            var j = { __proto__: null, ERROR_REVALIDATE_EVENT: 3, FOCUS_EVENT: 0, MUTATE_EVENT: 2, RECONNECT_EVENT: 1 };
            async function I(...e) {
                let [t, n, r, i] = e,
                    u = c({ populateCache: !0, throwOnError: !0 }, "boolean" == typeof i ? { revalidate: i } : i || {}),
                    f = u.populateCache,
                    d = u.rollbackOnError,
                    p = u.optimisticData,
                    h = !1 !== u.revalidate,
                    v = (e) => ("function" == typeof d ? d(e) : !1 !== d),
                    E = u.throwOnError;
                if (s(n)) {
                    let e = [],
                        r = t.keys();
                    for (let i of r) !/^\$(inf|sub)\$/.test(i) && n(t.get(i)._k) && e.push(i);
                    return Promise.all(e.map(y));
                }
                return y(n);
                async function y(n) {
                    let i;
                    let [u] = N(n);
                    if (!u) return;
                    let [c, d] = T(t, u),
                        [y, w, m, _] = g.get(t),
                        b = () => {
                            let e = y[u];
                            return h && (delete m[u], delete _[u], e && e[0]) ? e[0](2).then(() => c().data) : c().data;
                        };
                    if (e.length < 3) return b();
                    let S = r,
                        R = A();
                    w[u] = [R, 0];
                    let x = !a(p),
                        O = c(),
                        L = O.data,
                        k = O._c,
                        V = a(k) ? L : k;
                    if ((x && d({ data: (p = s(p) ? p(V, L) : p), _c: V }), s(S)))
                        try {
                            S = S(V);
                        } catch (e) {
                            i = e;
                        }
                    if (S && l(S)) {
                        if (
                            ((S = await S.catch((e) => {
                                i = e;
                            })),
                            R !== w[u][0])
                        ) {
                            if (i) throw i;
                            return S;
                        }
                        i && x && v(i) && ((f = !0), d({ data: V, _c: o }));
                    }
                    if (f && !i) {
                        if (s(f)) {
                            let e = f(S, V);
                            d({ data: e, error: o, _c: o });
                        } else d({ data: S, error: o, _c: o });
                    }
                    if (
                        ((w[u][1] = A()),
                        Promise.resolve(b()).then(() => {
                            d({ _c: o });
                        }),
                        i)
                    ) {
                        if (E) throw i;
                        return;
                    }
                    return S;
                }
            }
            let P = (e, t) => {
                    for (let n in e) e[n][0] && e[n][0](t);
                },
                M = (e, t) => {
                    if (!g.has(e)) {
                        let n = c(R, t),
                            r = {},
                            u = I.bind(o, e),
                            a = i,
                            s = {},
                            l = (e, t) => {
                                let n = s[e] || [];
                                return (s[e] = n), n.push(t), () => n.splice(n.indexOf(t), 1);
                            },
                            f = (t, n, r) => {
                                e.set(t, n);
                                let i = s[t];
                                if (i) for (let e of i) e(n, r);
                            },
                            d = () => {
                                if (!g.has(e) && (g.set(e, [r, {}, {}, {}, u, f, l]), !O)) {
                                    let t = n.initFocus(setTimeout.bind(o, P.bind(o, r, 0))),
                                        i = n.initReconnect(setTimeout.bind(o, P.bind(o, r, 1)));
                                    a = () => {
                                        t && t(), i && i(), g.delete(e);
                                    };
                                }
                            };
                        return d(), [e, u, d, a];
                    }
                    return [e, g.get(e)[4]];
                },
                [F, W] = M(new Map()),
                $ = c(
                    {
                        onLoadingSlow: i,
                        onSuccess: i,
                        onError: i,
                        onErrorRetry: (e, t, n, r, i) => {
                            let o = n.errorRetryCount,
                                u = i.retryCount,
                                s = ~~((Math.random() + 0.5) * (1 << (u < 8 ? u : 8))) * n.errorRetryInterval;
                            (a(o) || !(u > o)) && setTimeout(r, s, i);
                        },
                        onDiscarded: i,
                        revalidateOnFocus: !0,
                        revalidateOnReconnect: !0,
                        revalidateIfStale: !0,
                        shouldRetryOnError: !0,
                        errorRetryInterval: C ? 1e4 : 5e3,
                        focusThrottleInterval: 5e3,
                        dedupingInterval: 2e3,
                        loadingTimeout: C ? 5e3 : 3e3,
                        compare: (e, t) => p(e) == p(t),
                        isPaused: () => !1,
                        cache: F,
                        mutate: W,
                        fallback: {},
                    },
                    {
                        isOnline: () => _,
                        isVisible: () => {
                            let e = w && document.visibilityState;
                            return a(e) || "hidden" !== e;
                        },
                    }
                ),
                J = (e, t) => {
                    let n = c(e, t);
                    if (t) {
                        let { use: r, fallback: i } = e,
                            { use: o, fallback: u } = t;
                        r && o && (n.use = r.concat(o)), i && u && (n.fallback = c(i, u));
                    }
                    return n;
                },
                U = (0, r.createContext)({}),
                q = (e) => {
                    let { value: t } = e,
                        n = (0, r.useContext)(U),
                        i = s(t),
                        u = (0, r.useMemo)(() => (i ? t(n) : t), [i, n, t]),
                        a = (0, r.useMemo)(() => (i ? u : J(n, u)), [i, n, u]),
                        l = u && u.provider,
                        f = (0, r.useRef)(o);
                    l && !f.current && (f.current = M(l(a.cache || F), u));
                    let d = f.current;
                    return (
                        d && ((a.cache = d[0]), (a.mutate = d[1])),
                        k(() => {
                            if (d) return d[2] && d[2](), d[3];
                        }, []),
                        (0, r.createElement)(U.Provider, c(e, { value: a }))
                    );
                },
                Y = y && window.__SWR_DEVTOOLS_USE__,
                B = Y ? window.__SWR_DEVTOOLS_USE__ : [],
                z = (e) => (s(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}]),
                G = () => c($, (0, r.useContext)(U)),
                Z = B.concat((e) => (t, n, r) => {
                    let i =
                        n &&
                        ((...e) => {
                            let [r] = N(t),
                                [, , , i] = g.get(F);
                            if (r.startsWith("$inf$")) return n(...e);
                            let o = i[r];
                            return a(o) ? n(...e) : (delete i[r], o);
                        });
                    return e(t, i, r);
                }),
                H = (e) =>
                    function (...t) {
                        let n = G(),
                            [r, i, o] = z(t),
                            u = J(n, o),
                            a = e,
                            { use: s } = u,
                            c = (s || []).concat(Z);
                        for (let e = c.length; e--; ) a = c[e](a);
                        return a(r, i || u.fetcher || null, u);
                    },
                K = (e, t, n) => {
                    let r = t[e] || (t[e] = []);
                    return (
                        r.push(n),
                        () => {
                            let e = r.indexOf(n);
                            e >= 0 && ((r[e] = r[r.length - 1]), r.pop());
                        }
                    );
                },
                Q = (e, t) => (...n) => {
                    let [r, i, o] = z(n),
                        u = (o.use || []).concat(t);
                    return e(r, i, { ...o, use: u });
                };
            Y && (window.__SWR_DEVTOOLS_REACT__ = r);
        },
        30713: function (e, t, n) {
            "use strict";
            n.d(t, {
                J$: function () {
                    return s;
                },
                ZP: function () {
                    return c;
                },
                kY: function () {
                    return o.kY;
                },
            });
            var r = n(2265),
                i = n(26272),
                o = n(44796);
            let u =
                    r.use ||
                    ((e) => {
                        if ("pending" === e.status) throw e;
                        if ("fulfilled" === e.status) return e.value;
                        if ("rejected" === e.status) throw e.reason;
                        throw (
                            ((e.status = "pending"),
                            e.then(
                                (t) => {
                                    (e.status = "fulfilled"), (e.value = t);
                                },
                                (t) => {
                                    (e.status = "rejected"), (e.reason = t);
                                }
                            ),
                            e)
                        );
                    }),
                a = { dedupe: !0 },
                s = o.$l.defineProperty(o.J$, "defaultValue", { value: o.u_ }),
                c = (0, o.s6)((e, t, n) => {
                    let { cache: s, compare: c, suspense: l, fallbackData: f, revalidateOnMount: d, revalidateIfStale: p, refreshInterval: g, refreshWhenHidden: h, refreshWhenOffline: v, keepPreviousData: E } = n,
                        [y, w, m, T] = o.DY.get(s),
                        [_, b] = (0, o.qC)(e),
                        S = (0, r.useRef)(!1),
                        R = (0, r.useRef)(!1),
                        x = (0, r.useRef)(_),
                        O = (0, r.useRef)(t),
                        L = (0, r.useRef)(n),
                        k = () => L.current,
                        V = () => k().isVisible() && k().isOnline(),
                        [C, N, D, A] = (0, o.JN)(s, _),
                        j = (0, r.useRef)({}).current,
                        I = (0, o.o8)(f) ? n.fallback[_] : f,
                        P = (e, t) => {
                            for (let n in j)
                                if ("data" === n) {
                                    if (!c(e[n], t[n]) && (!(0, o.o8)(e[n]) || !c(B, t[n]))) return !1;
                                } else if (t[n] !== e[n]) return !1;
                            return !0;
                        },
                        M = (0, r.useMemo)(() => {
                            let e = !!_ && !!t && ((0, o.o8)(d) ? !k().isPaused() && !l && (!!(0, o.o8)(p) || p) : d),
                                n = (t) => {
                                    let n = (0, o.PM)(t);
                                    return (delete n._k, e) ? { isValidating: !0, isLoading: !0, ...n } : n;
                                },
                                r = C(),
                                i = A(),
                                u = n(r),
                                a = r === i ? u : n(i),
                                s = u;
                            return [
                                () => {
                                    let e = n(C()),
                                        t = P(e, s);
                                    return t ? ((s.data = e.data), (s.isLoading = e.isLoading), (s.isValidating = e.isValidating), (s.error = e.error), s) : ((s = e), e);
                                },
                                () => a,
                            ];
                        }, [s, _]),
                        F = (0, i.useSyncExternalStore)(
                            (0, r.useCallback)(
                                (e) =>
                                    D(_, (t, n) => {
                                        P(n, t) || e();
                                    }),
                                [s, _]
                            ),
                            M[0],
                            M[1]
                        ),
                        W = !S.current,
                        $ = y[_] && y[_].length > 0,
                        J = F.data,
                        U = (0, o.o8)(J) ? I : J,
                        q = F.error,
                        Y = (0, r.useRef)(U),
                        B = E ? ((0, o.o8)(J) ? Y.current : J) : U,
                        z = (!$ || !!(0, o.o8)(q)) && (W && !(0, o.o8)(d) ? d : !k().isPaused() && (l ? !(0, o.o8)(U) && p : (0, o.o8)(U) || p)),
                        G = !!(_ && t && W && z),
                        Z = (0, o.o8)(F.isValidating) ? G : F.isValidating,
                        H = (0, o.o8)(F.isLoading) ? G : F.isLoading,
                        K = (0, r.useCallback)(
                            async (e) => {
                                let t, r;
                                let i = O.current;
                                if (!_ || !i || R.current || k().isPaused()) return !1;
                                let u = !0,
                                    a = e || {},
                                    s = !m[_] || !a.dedupe,
                                    l = () => (o.w6 ? !R.current && _ === x.current && S.current : _ === x.current),
                                    f = { isValidating: !1, isLoading: !1 },
                                    d = () => {
                                        N(f);
                                    },
                                    p = () => {
                                        let e = m[_];
                                        e && e[1] === r && delete m[_];
                                    },
                                    g = { isValidating: !0 };
                                (0, o.o8)(C().data) && (g.isLoading = !0);
                                try {
                                    if (
                                        (s &&
                                            (N(g),
                                            n.loadingTimeout &&
                                                (0, o.o8)(C().data) &&
                                                setTimeout(() => {
                                                    u && l() && k().onLoadingSlow(_, n);
                                                }, n.loadingTimeout),
                                            (m[_] = [i(b), (0, o.u3)()])),
                                        ([t, r] = m[_]),
                                        (t = await t),
                                        s && setTimeout(p, n.dedupingInterval),
                                        !m[_] || m[_][1] !== r)
                                    )
                                        return s && l() && k().onDiscarded(_), !1;
                                    f.error = o.i_;
                                    let e = w[_];
                                    if (!(0, o.o8)(e) && (r <= e[0] || r <= e[1] || 0 === e[1])) return d(), s && l() && k().onDiscarded(_), !1;
                                    let a = C().data;
                                    (f.data = c(a, t) ? a : t), s && l() && k().onSuccess(t, _, n);
                                } catch (n) {
                                    p();
                                    let e = k(),
                                        { shouldRetryOnError: t } = e;
                                    !e.isPaused() &&
                                        ((f.error = n),
                                        s &&
                                            l() &&
                                            (e.onError(n, _, e),
                                            (!0 === t || ((0, o.mf)(t) && t(n))) &&
                                                V() &&
                                                e.onErrorRetry(
                                                    n,
                                                    _,
                                                    e,
                                                    (e) => {
                                                        let t = y[_];
                                                        t && t[0] && t[0](o.sj.ERROR_REVALIDATE_EVENT, e);
                                                    },
                                                    { retryCount: (a.retryCount || 0) + 1, dedupe: !0 }
                                                )));
                                }
                                return (u = !1), d(), !0;
                            },
                            [_, s]
                        ),
                        Q = (0, r.useCallback)((...e) => (0, o.BN)(s, x.current, ...e), []);
                    if (
                        ((0, o.LI)(() => {
                            (O.current = t), (L.current = n), (0, o.o8)(J) || (Y.current = J);
                        }),
                        (0, o.LI)(() => {
                            if (!_) return;
                            let e = K.bind(o.i_, a),
                                t = 0,
                                n = (0, o.ko)(_, y, (n, r = {}) => {
                                    if (n == o.sj.FOCUS_EVENT) {
                                        let n = Date.now();
                                        k().revalidateOnFocus && n > t && V() && ((t = n + k().focusThrottleInterval), e());
                                    } else if (n == o.sj.RECONNECT_EVENT) k().revalidateOnReconnect && V() && e();
                                    else if (n == o.sj.MUTATE_EVENT) return K();
                                    else if (n == o.sj.ERROR_REVALIDATE_EVENT) return K(r);
                                });
                            return (
                                (R.current = !1),
                                (x.current = _),
                                (S.current = !0),
                                N({ _k: b }),
                                z && ((0, o.o8)(U) || o.W6 ? e() : (0, o.kw)(e)),
                                () => {
                                    (R.current = !0), n();
                                }
                            );
                        }, [_]),
                        (0, o.LI)(() => {
                            let e;
                            function t() {
                                let t = (0, o.mf)(g) ? g(C().data) : g;
                                t && -1 !== e && (e = setTimeout(n, t));
                            }
                            function n() {
                                !C().error && (h || k().isVisible()) && (v || k().isOnline()) ? K(a).then(t) : t();
                            }
                            return (
                                t(),
                                () => {
                                    e && (clearTimeout(e), (e = -1));
                                }
                            );
                        }, [g, h, v, _]),
                        (0, r.useDebugValue)(B),
                        l && (0, o.o8)(U) && _)
                    ) {
                        if (!o.w6 && o.W6) throw Error("Fallback data is required when using suspense in SSR.");
                        (O.current = t), (L.current = n), (R.current = !1);
                        let e = T[_];
                        if (!(0, o.o8)(e)) {
                            let t = Q(e);
                            u(t);
                        }
                        if ((0, o.o8)(q)) {
                            let e = K(a);
                            (0, o.o8)(B) || ((e.status = "fulfilled"), (e.value = !0)), u(e);
                        } else throw q;
                    }
                    return {
                        mutate: Q,
                        get data() {
                            return (j.data = !0), B;
                        },
                        get error() {
                            return (j.error = !0), q;
                        },
                        get isValidating() {
                            return (j.isValidating = !0), Z;
                        },
                        get isLoading() {
                            return (j.isLoading = !0), H;
                        },
                    };
                });
        },
    },
]);
