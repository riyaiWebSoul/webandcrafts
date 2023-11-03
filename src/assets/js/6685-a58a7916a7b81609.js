"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6685],
    {
        97607: function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "addLocale", {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }),
                n(46070);
            let r = function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return e;
            };
            ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        27561: function (e, t, n) {
            function r(e, t, n, r) {
                return !1;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "getDomainLocale", {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }),
                n(46070),
                ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
                    void 0 === t.default.__esModule &&
                    (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        46685: function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    get: function () {
                        return v;
                    },
                });
            let r = n(21024),
                o = r._(n(2265)),
                u = n(52156),
                l = n(93954),
                a = n(36162),
                i = n(95090),
                c = n(97607),
                f = n(22706),
                s = n(56656),
                d = n(95033),
                p = n(27561),
                h = n(36711),
                y = n(15685),
                g = new Set();
            function m(e, t, n, r, o, u) {
                if (!u && !(0, l.isLocalURL)(t)) return;
                if (!r.bypassPrefetchedCheck) {
                    let o = void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0,
                        u = t + "%" + n + "%" + o;
                    if (g.has(u)) return;
                    g.add(u);
                }
                let a = u ? e.prefetch(t, o) : e.prefetch(t, n, r);
                Promise.resolve(a).catch((e) => {});
            }
            function b(e) {
                return "string" == typeof e ? e : (0, a.formatUrl)(e);
            }
            let P = o.default.forwardRef(function (e, t) {
                    let n, r;
                    let { href: a, as: g, children: P, prefetch: v = null, passHref: _, replace: O, shallow: j, scroll: R, locale: E, onClick: M, onMouseEnter: x, onTouchStart: C, legacyBehavior: k = !1, ...w } = e;
                    (n = P), k && ("string" == typeof n || "number" == typeof n) && (n = o.default.createElement("a", null, n));
                    let I = o.default.useContext(f.RouterContext),
                        S = o.default.useContext(s.AppRouterContext),
                        T = null != I ? I : S,
                        L = !I,
                        U = !1 !== v,
                        N = null === v ? y.PrefetchKind.AUTO : y.PrefetchKind.FULL,
                        { href: A, as: D } = o.default.useMemo(() => {
                            if (!I) {
                                let e = b(a);
                                return { href: e, as: g ? b(g) : e };
                            }
                            let [e, t] = (0, u.resolveHref)(I, a, !0);
                            return { href: e, as: g ? (0, u.resolveHref)(I, g) : t || e };
                        }, [I, a, g]),
                        W = o.default.useRef(A),
                        z = o.default.useRef(D);
                    k && (r = o.default.Children.only(n));
                    let K = k ? r && "object" == typeof r && r.ref : t,
                        [F, $, q] = (0, d.useIntersection)({ rootMargin: "200px" }),
                        B = o.default.useCallback(
                            (e) => {
                                (z.current !== D || W.current !== A) && (q(), (z.current = D), (W.current = A)), F(e), K && ("function" == typeof K ? K(e) : "object" == typeof K && (K.current = e));
                            },
                            [D, K, A, q, F]
                        );
                    o.default.useEffect(() => {
                        T && $ && U && m(T, A, D, { locale: E }, { kind: N }, L);
                    }, [D, A, $, E, U, null == I ? void 0 : I.locale, T, L, N]);
                    let Q = {
                        ref: B,
                        onClick(e) {
                            k || "function" != typeof M || M(e),
                                k && r.props && "function" == typeof r.props.onClick && r.props.onClick(e),
                                T &&
                                    !e.defaultPrevented &&
                                    (function (e, t, n, r, u, a, i, c, f, s) {
                                        let { nodeName: d } = e.currentTarget,
                                            p = "A" === d.toUpperCase();
                                        if (
                                            p &&
                                            ((function (e) {
                                                let t = e.currentTarget,
                                                    n = t.getAttribute("target");
                                                return (n && "_self" !== n) || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.nativeEvent && 2 === e.nativeEvent.which);
                                            })(e) ||
                                                (!f && !(0, l.isLocalURL)(n)))
                                        )
                                            return;
                                        e.preventDefault();
                                        let h = () => {
                                            let e = null == i || i;
                                            "beforePopState" in t ? t[u ? "replace" : "push"](n, r, { shallow: a, locale: c, scroll: e }) : t[u ? "replace" : "push"](r || n, { forceOptimisticNavigation: !s, scroll: e });
                                        };
                                        f ? o.default.startTransition(h) : h();
                                    })(e, T, A, D, O, j, R, E, L, U);
                        },
                        onMouseEnter(e) {
                            k || "function" != typeof x || x(e),
                                k && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                                T && (U || !L) && m(T, A, D, { locale: E, priority: !0, bypassPrefetchedCheck: !0 }, { kind: N }, L);
                        },
                        onTouchStart(e) {
                            k || "function" != typeof C || C(e),
                                k && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                                T && (U || !L) && m(T, A, D, { locale: E, priority: !0, bypassPrefetchedCheck: !0 }, { kind: N }, L);
                        },
                    };
                    if ((0, i.isAbsoluteUrl)(D)) Q.href = D;
                    else if (!k || _ || ("a" === r.type && !("href" in r.props))) {
                        let e = void 0 !== E ? E : null == I ? void 0 : I.locale,
                            t = (null == I ? void 0 : I.isLocaleDomain) && (0, p.getDomainLocale)(D, e, null == I ? void 0 : I.locales, null == I ? void 0 : I.domainLocales);
                        Q.href = t || (0, h.addBasePath)((0, c.addLocale)(D, e, null == I ? void 0 : I.defaultLocale));
                    }
                    return k ? o.default.cloneElement(r, Q) : o.default.createElement("a", { ...w, ...Q }, n);
                }),
                v = P;
            ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        98043: function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    requestIdleCallback: function () {
                        return n;
                    },
                    cancelIdleCallback: function () {
                        return r;
                    },
                });
            let n =
                    ("undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window)) ||
                    function (e) {
                        let t = Date.now();
                        return self.setTimeout(function () {
                            e({
                                didTimeout: !1,
                                timeRemaining: function () {
                                    return Math.max(0, 50 - (Date.now() - t));
                                },
                            });
                        }, 1);
                    },
                r =
                    ("undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window)) ||
                    function (e) {
                        return clearTimeout(e);
                    };
            ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        95033: function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "useIntersection", {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                });
            let r = n(2265),
                o = n(98043),
                u = "function" == typeof IntersectionObserver,
                l = new Map(),
                a = [];
            function i(e) {
                let { rootRef: t, rootMargin: n, disabled: i } = e,
                    c = i || !u,
                    [f, s] = (0, r.useState)(!1),
                    d = (0, r.useRef)(null),
                    p = (0, r.useCallback)((e) => {
                        d.current = e;
                    }, []);
                (0, r.useEffect)(() => {
                    if (u) {
                        if (c || f) return;
                        let e = d.current;
                        if (e && e.tagName) {
                            let r = (function (e, t, n) {
                                let { id: r, observer: o, elements: u } = (function (e) {
                                    let t;
                                    let n = { root: e.root || null, margin: e.rootMargin || "" },
                                        r = a.find((e) => e.root === n.root && e.margin === n.margin);
                                    if (r && (t = l.get(r))) return t;
                                    let o = new Map(),
                                        u = new IntersectionObserver((e) => {
                                            e.forEach((e) => {
                                                let t = o.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n);
                                            });
                                        }, e);
                                    return (t = { id: n, observer: u, elements: o }), a.push(n), l.set(n, t), t;
                                })(n);
                                return (
                                    u.set(e, t),
                                    o.observe(e),
                                    function () {
                                        if ((u.delete(e), o.unobserve(e), 0 === u.size)) {
                                            o.disconnect(), l.delete(r);
                                            let e = a.findIndex((e) => e.root === r.root && e.margin === r.margin);
                                            e > -1 && a.splice(e, 1);
                                        }
                                    }
                                );
                            })(e, (e) => e && s(e), { root: null == t ? void 0 : t.current, rootMargin: n });
                            return r;
                        }
                    } else if (!f) {
                        let e = (0, o.requestIdleCallback)(() => s(!0));
                        return () => (0, o.cancelIdleCallback)(e);
                    }
                }, [c, n, t, f, d.current]);
                let h = (0, r.useCallback)(() => {
                    s(!1);
                }, []);
                return [p, f, h];
            }
            ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        63805: function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "escapeStringRegexp", {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                });
            let n = /[|\\{}()[\]^$+*?.-]/,
                r = /[|\\{}()[\]^$+*?.-]/g;
            function o(e) {
                return n.test(e) ? e.replace(r, "\\$&") : e;
            }
        },
        22706: function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "RouterContext", {
                    enumerable: !0,
                    get: function () {
                        return u;
                    },
                });
            let r = n(21024),
                o = r._(n(2265)),
                u = o.default.createContext(null);
        },
        36162: function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    formatUrl: function () {
                        return l;
                    },
                    urlObjectKeys: function () {
                        return a;
                    },
                    formatWithValidation: function () {
                        return i;
                    },
                });
            let r = n(68533),
                o = r._(n(55769)),
                u = /https?|ftp|gopher|file/;
            function l(e) {
                let { auth: t, hostname: n } = e,
                    r = e.protocol || "",
                    l = e.pathname || "",
                    a = e.hash || "",
                    i = e.query || "",
                    c = !1;
                (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
                    e.host ? (c = t + e.host) : n && ((c = t + (~n.indexOf(":") ? "[" + n + "]" : n)), e.port && (c += ":" + e.port)),
                    i && "object" == typeof i && (i = String(o.urlQueryToSearchParams(i)));
                let f = e.search || (i && "?" + i) || "";
                return (
                    r && !r.endsWith(":") && (r += ":"),
                    e.slashes || ((!r || u.test(r)) && !1 !== c) ? ((c = "//" + (c || "")), l && "/" !== l[0] && (l = "/" + l)) : c || (c = ""),
                    a && "#" !== a[0] && (a = "#" + a),
                    f && "?" !== f[0] && (f = "?" + f),
                    "" + r + c + (l = l.replace(/[?#]/g, encodeURIComponent)) + (f = f.replace("#", "%23")) + a
                );
            }
            let a = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
            function i(e) {
                return l(e);
            }
        },
        99232: function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "interpolateAs", {
                    enumerable: !0,
                    get: function () {
                        return u;
                    },
                });
            let r = n(13658),
                o = n(84170);
            function u(e, t, n) {
                let u = "",
                    l = (0, o.getRouteRegex)(e),
                    a = l.groups,
                    i = (t !== e ? (0, r.getRouteMatcher)(l)(t) : "") || n;
                u = e;
                let c = Object.keys(a);
                return (
                    c.every((e) => {
                        let t = i[e] || "",
                            { repeat: n, optional: r } = a[e],
                            o = "[" + (n ? "..." : "") + e + "]";
                        return r && (o = (t ? "" : "/") + "[" + o + "]"), n && !Array.isArray(t) && (t = [t]), (r || e in i) && (u = u.replace(o, n ? t.map((e) => encodeURIComponent(e)).join("/") : encodeURIComponent(t)) || "/");
                    }) || (u = ""),
                    { params: c, result: u }
                );
            }
        },
        28354: function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "isDynamicRoute", {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                });
            let n = /\/\[[^/]+?\](?=\/|$)/;
            function r(e) {
                return n.test(e);
            }
        },
        93954: function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "isLocalURL", {
                    enumerable: !0,
                    get: function () {
                        return u;
                    },
                });
            let r = n(95090),
                o = n(73719);
            function u(e) {
                if (!(0, r.isAbsoluteUrl)(e)) return !0;
                try {
                    let t = (0, r.getLocationOrigin)(),
                        n = new URL(e, t);
                    return n.origin === t && (0, o.hasBasePath)(n.pathname);
                } catch (e) {
                    return !1;
                }
            }
        },
        43259: function (e, t) {
            function n(e, t) {
                let n = {};
                return (
                    Object.keys(e).forEach((r) => {
                        t.includes(r) || (n[r] = e[r]);
                    }),
                    n
                );
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "omit", {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                });
        },
        55769: function (e, t) {
            function n(e) {
                let t = {};
                return (
                    e.forEach((e, n) => {
                        void 0 === t[n] ? (t[n] = e) : Array.isArray(t[n]) ? t[n].push(e) : (t[n] = [t[n], e]);
                    }),
                    t
                );
            }
            function r(e) {
                return "string" != typeof e && ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e);
            }
            function o(e) {
                let t = new URLSearchParams();
                return (
                    Object.entries(e).forEach((e) => {
                        let [n, o] = e;
                        Array.isArray(o) ? o.forEach((e) => t.append(n, r(e))) : t.set(n, r(o));
                    }),
                    t
                );
            }
            function u(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return (
                    n.forEach((t) => {
                        Array.from(t.keys()).forEach((t) => e.delete(t)), t.forEach((t, n) => e.append(n, t));
                    }),
                    e
                );
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    searchParamsToUrlQuery: function () {
                        return n;
                    },
                    urlQueryToSearchParams: function () {
                        return o;
                    },
                    assign: function () {
                        return u;
                    },
                });
        },
        52156: function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "resolveHref", {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                });
            let r = n(55769),
                o = n(36162),
                u = n(43259),
                l = n(95090),
                a = n(46070),
                i = n(93954),
                c = n(28354),
                f = n(99232);
            function s(e, t, n) {
                let s;
                let d = "string" == typeof t ? t : (0, o.formatWithValidation)(t),
                    p = d.match(/^[a-zA-Z]{1,}:\/\//),
                    h = p ? d.slice(p[0].length) : d;
                if ((h.split("?")[0] || "").match(/(\/\/|\\)/)) {
                    let e = (0, l.normalizeRepeatedSlashes)(h);
                    d = (p ? p[0] : "") + e;
                }
                if (!(0, i.isLocalURL)(d)) return n ? [d] : d;
                try {
                    s = new URL(d.startsWith("#") ? e.asPath : e.pathname, "http://n");
                } catch (e) {
                    s = new URL("/", "http://n");
                }
                try {
                    let e = new URL(d, s);
                    e.pathname = (0, a.normalizePathTrailingSlash)(e.pathname);
                    let t = "";
                    if ((0, c.isDynamicRoute)(e.pathname) && e.searchParams && n) {
                        let n = (0, r.searchParamsToUrlQuery)(e.searchParams),
                            { result: l, params: a } = (0, f.interpolateAs)(e.pathname, e.pathname, n);
                        l && (t = (0, o.formatWithValidation)({ pathname: l, hash: e.hash, query: (0, u.omit)(n, a) }));
                    }
                    let l = e.origin === s.origin ? e.href.slice(e.origin.length) : e.href;
                    return n ? [l, t || l] : l;
                } catch (e) {
                    return n ? [d] : d;
                }
            }
        },
        13658: function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "getRouteMatcher", {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                });
            let r = n(95090);
            function o(e) {
                let { re: t, groups: n } = e;
                return (e) => {
                    let o = t.exec(e);
                    if (!o) return !1;
                    let u = (e) => {
                            try {
                                return decodeURIComponent(e);
                            } catch (e) {
                                throw new r.DecodeError("failed to decode param");
                            }
                        },
                        l = {};
                    return (
                        Object.keys(n).forEach((e) => {
                            let t = n[e],
                                r = o[t.pos];
                            void 0 !== r && (l[e] = ~r.indexOf("/") ? r.split("/").map((e) => u(e)) : t.repeat ? [u(r)] : u(r));
                        }),
                        l
                    );
                };
            }
        },
        84170: function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    getRouteRegex: function () {
                        return i;
                    },
                    getNamedRouteRegex: function () {
                        return s;
                    },
                    getNamedMiddlewareRegex: function () {
                        return d;
                    },
                });
            let r = n(84507),
                o = n(63805),
                u = n(37369);
            function l(e) {
                let t = e.startsWith("[") && e.endsWith("]");
                t && (e = e.slice(1, -1));
                let n = e.startsWith("...");
                return n && (e = e.slice(3)), { key: e, repeat: n, optional: t };
            }
            function a(e) {
                let t = (0, u.removeTrailingSlash)(e).slice(1).split("/"),
                    n = {},
                    a = 1;
                return {
                    parameterizedRoute: t
                        .map((e) => {
                            let t = r.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                                u = e.match(/\[((?:\[.*\])|.+)\]/);
                            if (t && u) {
                                let { key: e, optional: r, repeat: i } = l(u[1]);
                                return (n[e] = { pos: a++, repeat: i, optional: r }), "/" + (0, o.escapeStringRegexp)(t) + "([^/]+?)";
                            }
                            if (!u) return "/" + (0, o.escapeStringRegexp)(e);
                            {
                                let { key: e, repeat: t, optional: r } = l(u[1]);
                                return (n[e] = { pos: a++, repeat: t, optional: r }), t ? (r ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)";
                            }
                        })
                        .join(""),
                    groups: n,
                };
            }
            function i(e) {
                let { parameterizedRoute: t, groups: n } = a(e);
                return { re: RegExp("^" + t + "(?:/)?$"), groups: n };
            }
            function c(e) {
                let { getSafeRouteKey: t, segment: n, routeKeys: r, keyPrefix: o } = e,
                    { key: u, optional: a, repeat: i } = l(n),
                    c = u.replace(/\W/g, "");
                o && (c = "" + o + c);
                let f = !1;
                return (
                    (0 === c.length || c.length > 30) && (f = !0),
                    isNaN(parseInt(c.slice(0, 1))) || (f = !0),
                    f && (c = t()),
                    o ? (r[c] = "" + o + u) : (r[c] = "" + u),
                    i ? (a ? "(?:/(?<" + c + ">.+?))?" : "/(?<" + c + ">.+?)") : "/(?<" + c + ">[^/]+?)"
                );
            }
            function f(e, t) {
                let n;
                let l = (0, u.removeTrailingSlash)(e).slice(1).split("/"),
                    a =
                        ((n = 0),
                        () => {
                            let e = "",
                                t = ++n;
                            for (; t > 0; ) (e += String.fromCharCode(97 + ((t - 1) % 26))), (t = Math.floor((t - 1) / 26));
                            return e;
                        }),
                    i = {};
                return {
                    namedParameterizedRoute: l
                        .map((e) => {
                            let n = r.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                                u = e.match(/\[((?:\[.*\])|.+)\]/);
                            return n && u
                                ? c({ getSafeRouteKey: a, segment: u[1], routeKeys: i, keyPrefix: t ? "nxtI" : void 0 })
                                : u
                                ? c({ getSafeRouteKey: a, segment: u[1], routeKeys: i, keyPrefix: t ? "nxtP" : void 0 })
                                : "/" + (0, o.escapeStringRegexp)(e);
                        })
                        .join(""),
                    routeKeys: i,
                };
            }
            function s(e, t) {
                let n = f(e, t);
                return { ...i(e), namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$", routeKeys: n.routeKeys };
            }
            function d(e, t) {
                let { parameterizedRoute: n } = a(e),
                    { catchAll: r = !0 } = t;
                if ("/" === n) return { namedRegex: "^/" + (r ? ".*" : "") + "$" };
                let { namedParameterizedRoute: o } = f(e, !1);
                return { namedRegex: "^" + o + (r ? "(?:(/.*)?)" : "") + "$" };
            }
        },
        95090: function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    WEB_VITALS: function () {
                        return n;
                    },
                    execOnce: function () {
                        return r;
                    },
                    isAbsoluteUrl: function () {
                        return u;
                    },
                    getLocationOrigin: function () {
                        return l;
                    },
                    getURL: function () {
                        return a;
                    },
                    getDisplayName: function () {
                        return i;
                    },
                    isResSent: function () {
                        return c;
                    },
                    normalizeRepeatedSlashes: function () {
                        return f;
                    },
                    loadGetInitialProps: function () {
                        return s;
                    },
                    SP: function () {
                        return d;
                    },
                    ST: function () {
                        return p;
                    },
                    DecodeError: function () {
                        return h;
                    },
                    NormalizeError: function () {
                        return y;
                    },
                    PageNotFoundError: function () {
                        return g;
                    },
                    MissingStaticPage: function () {
                        return m;
                    },
                    MiddlewareNotFoundError: function () {
                        return b;
                    },
                    stringifyError: function () {
                        return P;
                    },
                });
            let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
            function r(e) {
                let t,
                    n = !1;
                return function () {
                    for (var r = arguments.length, o = Array(r), u = 0; u < r; u++) o[u] = arguments[u];
                    return n || ((n = !0), (t = e(...o))), t;
                };
            }
            let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                u = (e) => o.test(e);
            function l() {
                let { protocol: e, hostname: t, port: n } = window.location;
                return e + "//" + t + (n ? ":" + n : "");
            }
            function a() {
                let { href: e } = window.location,
                    t = l();
                return e.substring(t.length);
            }
            function i(e) {
                return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
            }
            function c(e) {
                return e.finished || e.headersSent;
            }
            function f(e) {
                let t = e.split("?"),
                    n = t[0];
                return n.replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? "?" + t.slice(1).join("?") : "");
            }
            async function s(e, t) {
                let n = t.res || (t.ctx && t.ctx.res);
                if (!e.getInitialProps) return t.ctx && t.Component ? { pageProps: await s(t.Component, t.ctx) } : {};
                let r = await e.getInitialProps(t);
                if (n && c(n)) return r;
                if (!r) {
                    let t = '"' + i(e) + '.getInitialProps()" should resolve to an object. But found "' + r + '" instead.';
                    throw Error(t);
                }
                return r;
            }
            let d = "undefined" != typeof performance,
                p = d && ["mark", "measure", "getEntriesByName"].every((e) => "function" == typeof performance[e]);
            class h extends Error {}
            class y extends Error {}
            class g extends Error {
                constructor(e) {
                    super(), (this.code = "ENOENT"), (this.name = "PageNotFoundError"), (this.message = "Cannot find module for page: " + e);
                }
            }
            class m extends Error {
                constructor(e, t) {
                    super(), (this.message = "Failed to load static file for page: " + e + " " + t);
                }
            }
            class b extends Error {
                constructor() {
                    super(), (this.code = "ENOENT"), (this.message = "Cannot find the middleware module");
                }
            }
            function P(e) {
                return JSON.stringify({ message: e.message, stack: e.stack });
            }
        },
    },
]);
