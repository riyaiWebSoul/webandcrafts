"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [541],
    {
        17022: function (t, e, r) {
            var o = r(58641),
                n = r(32634),
                i = (0, r(31594).Z)(
                    "facebook",
                    function (t, e) {
                        var r = e.quote,
                            i = e.hashtag;
                        return (0, o.Z)(t, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + (0, n.Z)({ u: t, quote: r, hashtag: i });
                    },
                    function (t) {
                        return { quote: t.quote, hashtag: t.hashtag };
                    },
                    { windowWidth: 550, windowHeight: 400 }
                );
            e.Z = i;
        },
        29434: function (t, e, r) {
            var o = r(58641),
                n = r(32634),
                i = (0, r(31594).Z)(
                    "linkedin",
                    function (t, e) {
                        var r = e.title,
                            i = e.summary,
                            a = e.source;
                        return (0, o.Z)(t, "linkedin.url"), "https://linkedin.com/shareArticle" + (0, n.Z)({ url: t, mini: "true", title: r, summary: i, source: a });
                    },
                    function (t) {
                        return { title: t.title, summary: t.summary, source: t.source };
                    },
                    { windowWidth: 750, windowHeight: 600 }
                );
            e.Z = i;
        },
        31594: function (t, e, r) {
            r.d(e, {
                Z: function () {
                    return f;
                },
            });
            var o,
                n = r(2265),
                i = r(54440),
                a = r.n(i),
                s =
                    ((o = function (t, e) {
                        return (o =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            })(t, e);
                    }),
                    function (t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        o(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
                    }),
                l = function () {
                    return (l =
                        Object.assign ||
                        function (t) {
                            for (var e, r = 1, o = arguments.length; r < o; r++) for (var n in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                            return t;
                        }).apply(this, arguments);
                },
                c = function (t, e) {
                    var r,
                        o,
                        n,
                        i,
                        a = {
                            label: 0,
                            sent: function () {
                                if (1 & n[0]) throw n[1];
                                return n[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (i = { next: s(0), throw: s(1), return: s(2) }),
                        "function" == typeof Symbol &&
                            (i[Symbol.iterator] = function () {
                                return this;
                            }),
                        i
                    );
                    function s(i) {
                        return function (s) {
                            return (function (i) {
                                if (r) throw TypeError("Generator is already executing.");
                                for (; a; )
                                    try {
                                        if (((r = 1), o && (n = 2 & i[0] ? o.return : i[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, i[1])).done)) return n;
                                        switch (((o = 0), n && (i = [2 & i[0], n.value]), i[0])) {
                                            case 0:
                                            case 1:
                                                n = i;
                                                break;
                                            case 4:
                                                return a.label++, { value: i[1], done: !1 };
                                            case 5:
                                                a.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!n || (i[1] > n[0] && i[1] < n[3]))) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < n[1]) {
                                                    (a.label = n[1]), (n = i);
                                                    break;
                                                }
                                                if (n && a.label < n[2]) {
                                                    (a.label = n[2]), a.ops.push(i);
                                                    break;
                                                }
                                                n[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
                                    } catch (t) {
                                        (i = [6, t]), (o = 0);
                                    } finally {
                                        r = n = 0;
                                    }
                                if (5 & i[0]) throw i[1];
                                return { value: i[0] ? i[1] : void 0, done: !0 };
                            })([i, s]);
                        };
                    }
                },
                u = function (t, e) {
                    var r = {};
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && 0 > e.indexOf(o) && (r[o] = t[o]);
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                        for (var n = 0, o = Object.getOwnPropertySymbols(t); n < o.length; n++) 0 > e.indexOf(o[n]) && Object.prototype.propertyIsEnumerable.call(t, o[n]) && (r[o[n]] = t[o[n]]);
                    return r;
                },
                d = (function (t) {
                    function e() {
                        var e = (null !== t && t.apply(this, arguments)) || this;
                        return (
                            (e.openShareDialog = function (t) {
                                var r = e.props,
                                    o = r.onShareWindowClose,
                                    n = r.windowHeight,
                                    i = void 0 === n ? 400 : n,
                                    a = r.windowPosition,
                                    s = void 0 === a ? "windowCenter" : a,
                                    c = r.windowWidth,
                                    d = void 0 === c ? 550 : c;
                                !(function (t, e, r) {
                                    var o = l(
                                            { height: e.height, width: e.width, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" },
                                            u(e, ["height", "width"])
                                        ),
                                        n = window.open(
                                            t,
                                            "",
                                            Object.keys(o)
                                                .map(function (t) {
                                                    return "".concat(t, "=").concat(o[t]);
                                                })
                                                .join(", ")
                                        );
                                    if (r)
                                        var i = window.setInterval(function () {
                                            try {
                                                (null === n || n.closed) && (window.clearInterval(i), r(n));
                                            } catch (t) {
                                                console.error(t);
                                            }
                                        }, 1e3);
                                })(
                                    t,
                                    l(
                                        { height: i, width: d },
                                        "windowCenter" === s
                                            ? { left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - d / 2, top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - i / 2 }
                                            : { top: (window.screen.height - i) / 2, left: (window.screen.width - d) / 2 }
                                    ),
                                    o
                                );
                            }),
                            (e.handleClick = function (t) {
                                var r, o, n;
                                return (
                                    (r = void 0),
                                    (o = void 0),
                                    (n = function () {
                                        var e, r, o, n, i, a, s, l, u;
                                        return c(this, function (c) {
                                            switch (c.label) {
                                                case 0:
                                                    var d;
                                                    if (((r = (e = this.props).beforeOnClick), (o = e.disabled), (n = e.networkLink), (i = e.onClick), (a = e.url), (s = e.openShareDialogOnClick), (l = n(a, e.opts)), o)) return [2];
                                                    if ((t.preventDefault(), !r || !((d = u = r()) && ("object" == typeof d || "function" == typeof d) && "function" == typeof d.then))) return [3, 2];
                                                    return [4, u];
                                                case 1:
                                                    c.sent(), (c.label = 2);
                                                case 2:
                                                    return s && this.openShareDialog(l), i && i(t, l), [2];
                                            }
                                        });
                                    }),
                                    new (o || (o = Promise))(function (t, i) {
                                        function a(t) {
                                            try {
                                                l(n.next(t));
                                            } catch (t) {
                                                i(t);
                                            }
                                        }
                                        function s(t) {
                                            try {
                                                l(n.throw(t));
                                            } catch (t) {
                                                i(t);
                                            }
                                        }
                                        function l(e) {
                                            var r;
                                            e.done
                                                ? t(e.value)
                                                : ((r = e.value) instanceof o
                                                      ? r
                                                      : new o(function (t) {
                                                            t(r);
                                                        })
                                                  ).then(a, s);
                                        }
                                        l((n = n.apply(e, r || [])).next());
                                    })
                                );
                            }),
                            e
                        );
                    }
                    return (
                        s(e, t),
                        (e.prototype.render = function () {
                            var t = this.props,
                                e = (t.beforeOnClick, t.children),
                                r = t.className,
                                o = t.disabled,
                                i = t.disabledStyle,
                                s = t.forwardedRef,
                                c = (t.networkLink, t.networkName),
                                d = (t.onShareWindowClose, t.openShareDialogOnClick, t.opts, t.resetButtonStyle),
                                p = t.style,
                                f =
                                    (t.url,
                                    t.windowHeight,
                                    t.windowPosition,
                                    t.windowWidth,
                                    u(t, [
                                        "beforeOnClick",
                                        "children",
                                        "className",
                                        "disabled",
                                        "disabledStyle",
                                        "forwardedRef",
                                        "networkLink",
                                        "networkName",
                                        "onShareWindowClose",
                                        "openShareDialogOnClick",
                                        "opts",
                                        "resetButtonStyle",
                                        "style",
                                        "url",
                                        "windowHeight",
                                        "windowPosition",
                                        "windowWidth",
                                    ])),
                                h = a()("react-share__ShareButton", { "react-share__ShareButton--disabled": !!o, disabled: !!o }, r),
                                m = d ? l(l({ backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" }, p), o && i) : l(l({}, p), o && i);
                            return n.createElement("button", l({}, f, { "aria-label": f["aria-label"] || c, className: h, onClick: this.handleClick, ref: s, style: m }), e);
                        }),
                        (e.defaultProps = { disabledStyle: { opacity: 0.6 }, openShareDialogOnClick: !0, resetButtonStyle: !0 }),
                        e
                    );
                })(n.Component),
                p = function () {
                    return (p =
                        Object.assign ||
                        function (t) {
                            for (var e, r = 1, o = arguments.length; r < o; r++) for (var n in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                            return t;
                        }).apply(this, arguments);
                },
                f = function (t, e, r, o) {
                    function i(i, a) {
                        var s = r(i),
                            l = p({}, i);
                        return (
                            Object.keys(s).forEach(function (t) {
                                delete l[t];
                            }),
                            n.createElement(d, p({}, o, l, { forwardedRef: a, networkName: t, networkLink: e, opts: r(i) }))
                        );
                    }
                    return (i.displayName = "ShareButton-".concat(t)), (0, n.forwardRef)(i);
                };
        },
        58641: function (t, e, r) {
            r.d(e, {
                Z: function () {
                    return a;
                },
            });
            var o,
                n =
                    ((o = function (t, e) {
                        return (o =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            })(t, e);
                    }),
                    function (t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        o(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
                    }),
                i = (function (t) {
                    function e(e) {
                        var r = t.call(this, e) || this;
                        return (r.name = "AssertionError"), r;
                    }
                    return n(e, t), e;
                })(Error);
            function a(t, e) {
                if (!t) throw new i(e);
            }
        },
        32634: function (t, e, r) {
            r.d(e, {
                Z: function () {
                    return o;
                },
            });
            function o(t) {
                var e = Object.entries(t)
                    .filter(function (t) {
                        return null != t[1];
                    })
                    .map(function (t) {
                        var e = t[0],
                            r = t[1];
                        return "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(String(r)));
                    });
                return e.length > 0 ? "?".concat(e.join("&")) : "";
            }
        },
        5925: function (t, e, r) {
            let o, n;
            r.d(e, {
                x7: function () {
                    return tn;
                },
                Am: function () {
                    return T;
                },
            });
            var i,
                a = r(2265);
            let s = { data: "" },
                l = (t) =>
                    "object" == typeof window ? ((t ? t.querySelector("#_goober") : window._goober) || Object.assign((t || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : t || s,
                c = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
                u = /\/\*[^]*?\*\/|  +/g,
                d = /\n+/g,
                p = (t, e) => {
                    let r = "",
                        o = "",
                        n = "";
                    for (let i in t) {
                        let a = t[i];
                        "@" == i[0]
                            ? "i" == i[1]
                                ? (r = i + " " + a + ";")
                                : (o += "f" == i[1] ? p(a, i) : i + "{" + p(a, "k" == i[1] ? "" : e) + "}")
                            : "object" == typeof a
                            ? (o += p(a, e ? e.replace(/([^,])+/g, (t) => i.replace(/(^:.*)|([^,])+/g, (e) => (/&/.test(e) ? e.replace(/&/g, t) : t ? t + " " + e : e))) : i))
                            : null != a && ((i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase()), (n += p.p ? p.p(i, a) : i + ":" + a + ";"));
                    }
                    return r + (e && n ? e + "{" + n + "}" : n) + o;
                },
                f = {},
                h = (t) => {
                    if ("object" == typeof t) {
                        let e = "";
                        for (let r in t) e += r + h(t[r]);
                        return e;
                    }
                    return t;
                },
                m = (t, e, r, o, n) => {
                    var i;
                    let a = h(t),
                        s =
                            f[a] ||
                            (f[a] = ((t) => {
                                let e = 0,
                                    r = 11;
                                for (; e < t.length; ) r = (101 * r + t.charCodeAt(e++)) >>> 0;
                                return "go" + r;
                            })(a));
                    if (!f[s]) {
                        let e =
                            a !== t
                                ? t
                                : ((t) => {
                                      let e,
                                          r,
                                          o = [{}];
                                      for (; (e = c.exec(t.replace(u, ""))); ) e[4] ? o.shift() : e[3] ? ((r = e[3].replace(d, " ").trim()), o.unshift((o[0][r] = o[0][r] || {}))) : (o[0][e[1]] = e[2].replace(d, " ").trim());
                                      return o[0];
                                  })(t);
                        f[s] = p(n ? { ["@keyframes " + s]: e } : e, r ? "" : "." + s);
                    }
                    let l = r && f.g ? f.g : null;
                    return r && (f.g = f[s]), (i = f[s]), l ? (e.data = e.data.replace(l, i)) : -1 === e.data.indexOf(i) && (e.data = o ? i + e.data : e.data + i), s;
                },
                y = (t, e, r) =>
                    t.reduce((t, o, n) => {
                        let i = e[n];
                        if (i && i.call) {
                            let t = i(r),
                                e = (t && t.props && t.props.className) || (/^go/.test(t) && t);
                            i = e ? "." + e : t && "object" == typeof t ? (t.props ? "" : p(t, "")) : !1 === t ? "" : t;
                        }
                        return t + o + (null == i ? "" : i);
                    }, "");
            function b(t) {
                let e = this || {},
                    r = t.call ? t(e.p) : t;
                return m(r.unshift ? (r.raw ? y(r, [].slice.call(arguments, 1), e.p) : r.reduce((t, r) => Object.assign(t, r && r.call ? r(e.p) : r), {})) : r, l(e.target), e.g, e.o, e.k);
            }
            b.bind({ g: 1 });
            let w,
                g,
                v,
                x = b.bind({ k: 1 });
            function k(t, e) {
                let r = this || {};
                return function () {
                    let o = arguments;
                    function n(i, a) {
                        let s = Object.assign({}, i),
                            l = s.className || n.className;
                        (r.p = Object.assign({ theme: g && g() }, s)), (r.o = / *go\d+/.test(l)), (s.className = b.apply(r, o) + (l ? " " + l : "")), e && (s.ref = a);
                        let c = t;
                        return t[0] && ((c = s.as || t), delete s.as), v && c[0] && v(s), w(c, s);
                    }
                    return e ? e(n) : n;
                };
            }
            var O = (t) => "function" == typeof t,
                C = (t, e) => (O(t) ? t(e) : t),
                E = ((o = 0), () => (++o).toString()),
                j = () => {
                    if (void 0 === n && "u" > typeof window) {
                        let t = matchMedia("(prefers-reduced-motion: reduce)");
                        n = !t || t.matches;
                    }
                    return n;
                },
                S = new Map(),
                _ = (t) => {
                    if (S.has(t)) return;
                    let e = setTimeout(() => {
                        S.delete(t), A({ type: 4, toastId: t });
                    }, 1e3);
                    S.set(t, e);
                },
                P = (t) => {
                    let e = S.get(t);
                    e && clearTimeout(e);
                },
                N = (t, e) => {
                    switch (e.type) {
                        case 0:
                            return { ...t, toasts: [e.toast, ...t.toasts].slice(0, 20) };
                        case 1:
                            return e.toast.id && P(e.toast.id), { ...t, toasts: t.toasts.map((t) => (t.id === e.toast.id ? { ...t, ...e.toast } : t)) };
                        case 2:
                            let { toast: r } = e;
                            return t.toasts.find((t) => t.id === r.id) ? N(t, { type: 1, toast: r }) : N(t, { type: 0, toast: r });
                        case 3:
                            let { toastId: o } = e;
                            return (
                                o
                                    ? _(o)
                                    : t.toasts.forEach((t) => {
                                          _(t.id);
                                      }),
                                { ...t, toasts: t.toasts.map((t) => (t.id === o || void 0 === o ? { ...t, visible: !1 } : t)) }
                            );
                        case 4:
                            return void 0 === e.toastId ? { ...t, toasts: [] } : { ...t, toasts: t.toasts.filter((t) => t.id !== e.toastId) };
                        case 5:
                            return { ...t, pausedAt: e.time };
                        case 6:
                            let n = e.time - (t.pausedAt || 0);
                            return { ...t, pausedAt: void 0, toasts: t.toasts.map((t) => ({ ...t, pauseDuration: t.pauseDuration + n })) };
                    }
                },
                $ = [],
                D = { toasts: [], pausedAt: void 0 },
                A = (t) => {
                    (D = N(D, t)),
                        $.forEach((t) => {
                            t(D);
                        });
                },
                I = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
                Z = (t = {}) => {
                    let [e, r] = (0, a.useState)(D);
                    (0, a.useEffect)(
                        () => (
                            $.push(r),
                            () => {
                                let t = $.indexOf(r);
                                t > -1 && $.splice(t, 1);
                            }
                        ),
                        [e]
                    );
                    let o = e.toasts.map((e) => {
                        var r, o;
                        return {
                            ...t,
                            ...t[e.type],
                            ...e,
                            duration: e.duration || (null == (r = t[e.type]) ? void 0 : r.duration) || (null == t ? void 0 : t.duration) || I[e.type],
                            style: { ...t.style, ...(null == (o = t[e.type]) ? void 0 : o.style), ...e.style },
                        };
                    });
                    return { ...e, toasts: o };
                },
                z = (t, e = "blank", r) => ({ createdAt: Date.now(), visible: !0, type: e, ariaProps: { role: "status", "aria-live": "polite" }, message: t, pauseDuration: 0, ...r, id: (null == r ? void 0 : r.id) || E() }),
                H = (t) => (e, r) => {
                    let o = z(e, t, r);
                    return A({ type: 2, toast: o }), o.id;
                },
                T = (t, e) => H("blank")(t, e);
            (T.error = H("error")),
                (T.success = H("success")),
                (T.loading = H("loading")),
                (T.custom = H("custom")),
                (T.dismiss = (t) => {
                    A({ type: 3, toastId: t });
                }),
                (T.remove = (t) => A({ type: 4, toastId: t })),
                (T.promise = (t, e, r) => {
                    let o = T.loading(e.loading, { ...r, ...(null == r ? void 0 : r.loading) });
                    return (
                        t
                            .then((t) => (T.success(C(e.success, t), { id: o, ...r, ...(null == r ? void 0 : r.success) }), t))
                            .catch((t) => {
                                T.error(C(e.error, t), { id: o, ...r, ...(null == r ? void 0 : r.error) });
                            }),
                        t
                    );
                });
            var L = (t, e) => {
                    A({ type: 1, toast: { id: t, height: e } });
                },
                W = () => {
                    A({ type: 5, time: Date.now() });
                },
                B = (t) => {
                    let { toasts: e, pausedAt: r } = Z(t);
                    (0, a.useEffect)(() => {
                        if (r) return;
                        let t = Date.now(),
                            o = e.map((e) => {
                                if (e.duration === 1 / 0) return;
                                let r = (e.duration || 0) + e.pauseDuration - (t - e.createdAt);
                                if (r < 0) {
                                    e.visible && T.dismiss(e.id);
                                    return;
                                }
                                return setTimeout(() => T.dismiss(e.id), r);
                            });
                        return () => {
                            o.forEach((t) => t && clearTimeout(t));
                        };
                    }, [e, r]);
                    let o = (0, a.useCallback)(() => {
                            r && A({ type: 6, time: Date.now() });
                        }, [r]),
                        n = (0, a.useCallback)(
                            (t, r) => {
                                let { reverseOrder: o = !1, gutter: n = 8, defaultPosition: i } = r || {},
                                    a = e.filter((e) => (e.position || i) === (t.position || i) && e.height),
                                    s = a.findIndex((e) => e.id === t.id),
                                    l = a.filter((t, e) => e < s && t.visible).length;
                                return a
                                    .filter((t) => t.visible)
                                    .slice(...(o ? [l + 1] : [0, l]))
                                    .reduce((t, e) => t + (e.height || 0) + n, 0);
                            },
                            [e]
                        );
                    return { toasts: e, handlers: { updateHeight: L, startPause: W, endPause: o, calculateOffset: n } };
                },
                R = k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(t) => t.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(t) => t.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
                M = k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(t) => t.secondary || "#e0e0e0"};
  border-right-color: ${(t) => t.primary || "#616161"};
  animation: ${x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,
                q = k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(t) => t.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${x`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(t) => t.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
                F = k("div")`
  position: absolute;
`,
                U = k("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
                Y = k("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
                G = ({ toast: t }) => {
                    let { icon: e, type: r, iconTheme: o } = t;
                    return void 0 !== e
                        ? "string" == typeof e
                            ? a.createElement(Y, null, e)
                            : e
                        : "blank" === r
                        ? null
                        : a.createElement(U, null, a.createElement(M, { ...o }), "loading" !== r && a.createElement(F, null, "error" === r ? a.createElement(R, { ...o }) : a.createElement(q, { ...o })));
                },
                X = (t) => `
0% {transform: translate3d(0,${-200 * t}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
                J = (t) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150 * t}%,-1px) scale(.6); opacity:0;}
`,
                K = k("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
                Q = k("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
                V = (t, e) => {
                    let r = t.includes("top") ? 1 : -1,
                        [o, n] = j() ? ["0%{opacity:0;} 100%{opacity:1;}", "0%{opacity:1;} 100%{opacity:0;}"] : [X(r), J(r)];
                    return { animation: e ? `${x(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${x(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
                },
                tt = a.memo(({ toast: t, position: e, style: r, children: o }) => {
                    let n = t.height ? V(t.position || e || "top-center", t.visible) : { opacity: 0 },
                        i = a.createElement(G, { toast: t }),
                        s = a.createElement(Q, { ...t.ariaProps }, C(t.message, t));
                    return a.createElement(K, { className: t.className, style: { ...n, ...r, ...t.style } }, "function" == typeof o ? o({ icon: i, message: s }) : a.createElement(a.Fragment, null, i, s));
                });
            (i = a.createElement), (p.p = void 0), (w = i), (g = void 0), (v = void 0);
            var te = ({ id: t, className: e, style: r, onHeightUpdate: o, children: n }) => {
                    let i = a.useCallback(
                        (e) => {
                            if (e) {
                                let r = () => {
                                    o(t, e.getBoundingClientRect().height);
                                };
                                r(), new MutationObserver(r).observe(e, { subtree: !0, childList: !0, characterData: !0 });
                            }
                        },
                        [t, o]
                    );
                    return a.createElement("div", { ref: i, className: e, style: r }, n);
                },
                tr = (t, e) => {
                    let r = t.includes("top"),
                        o = t.includes("center") ? { justifyContent: "center" } : t.includes("right") ? { justifyContent: "flex-end" } : {};
                    return {
                        left: 0,
                        right: 0,
                        display: "flex",
                        position: "absolute",
                        transition: j() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
                        transform: `translateY(${e * (r ? 1 : -1)}px)`,
                        ...(r ? { top: 0 } : { bottom: 0 }),
                        ...o,
                    };
                },
                to = b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
                tn = ({ reverseOrder: t, position: e = "top-center", toastOptions: r, gutter: o, children: n, containerStyle: i, containerClassName: s }) => {
                    let { toasts: l, handlers: c } = B(r);
                    return a.createElement(
                        "div",
                        { style: { position: "fixed", zIndex: 9999, top: 16, left: 16, right: 16, bottom: 16, pointerEvents: "none", ...i }, className: s, onMouseEnter: c.startPause, onMouseLeave: c.endPause },
                        l.map((r) => {
                            let i = r.position || e,
                                s = tr(i, c.calculateOffset(r, { reverseOrder: t, gutter: o, defaultPosition: e }));
                            return a.createElement(
                                te,
                                { id: r.id, key: r.id, onHeightUpdate: c.updateHeight, className: r.visible ? to : "", style: s },
                                "custom" === r.type ? C(r.message, r) : n ? n(r) : a.createElement(tt, { toast: r, position: i })
                            );
                        })
                    );
                };
        },
    },
]);
