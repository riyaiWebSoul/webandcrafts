(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [61],
    {
        869: function () {},
        12018: function () {},
        2145: function (e, t, s) {
            "use strict";
            s.d(t, {
                tq: function () {
                    return w;
                },
                o5: function () {
                    return T;
                },
            });
            var i = s(2265),
                r = s(72022);
            function l(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
            }
            function a(e, t) {
                let s = ["__proto__", "constructor", "prototype"];
                Object.keys(t)
                    .filter((e) => 0 > s.indexOf(e))
                    .forEach((s) => {
                        void 0 === e[s] ? (e[s] = t[s]) : l(t[s]) && l(e[s]) && Object.keys(t[s]).length > 0 ? (t[s].__swiper__ ? (e[s] = t[s]) : a(e[s], t[s])) : (e[s] = t[s]);
                    });
            }
            function n(e = {}) {
                return e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl;
            }
            function o(e = {}) {
                return e.pagination && void 0 === e.pagination.el;
            }
            function d(e = {}) {
                return e.scrollbar && void 0 === e.scrollbar.el;
            }
            function c(e = "") {
                let t = e
                        .split(" ")
                        .map((e) => e.trim())
                        .filter((e) => !!e),
                    s = [];
                return (
                    t.forEach((e) => {
                        0 > s.indexOf(e) && s.push(e);
                    }),
                    s.join(" ")
                );
            }
            let p = [
                    "modules",
                    "init",
                    "_direction",
                    "touchEventsTarget",
                    "initialSlide",
                    "_speed",
                    "cssMode",
                    "updateOnWindowResize",
                    "resizeObserver",
                    "nested",
                    "focusableElements",
                    "_enabled",
                    "_width",
                    "_height",
                    "preventInteractionOnTransition",
                    "userAgent",
                    "url",
                    "_edgeSwipeDetection",
                    "_edgeSwipeThreshold",
                    "_freeMode",
                    "_autoHeight",
                    "setWrapperSize",
                    "virtualTranslate",
                    "_effect",
                    "breakpoints",
                    "_spaceBetween",
                    "_slidesPerView",
                    "maxBackfaceHiddenSlides",
                    "_grid",
                    "_slidesPerGroup",
                    "_slidesPerGroupSkip",
                    "_slidesPerGroupAuto",
                    "_centeredSlides",
                    "_centeredSlidesBounds",
                    "_slidesOffsetBefore",
                    "_slidesOffsetAfter",
                    "normalizeSlideIndex",
                    "_centerInsufficientSlides",
                    "_watchOverflow",
                    "roundLengths",
                    "touchRatio",
                    "touchAngle",
                    "simulateTouch",
                    "_shortSwipes",
                    "_longSwipes",
                    "longSwipesRatio",
                    "longSwipesMs",
                    "_followFinger",
                    "allowTouchMove",
                    "_threshold",
                    "touchMoveStopPropagation",
                    "touchStartPreventDefault",
                    "touchStartForcePreventDefault",
                    "touchReleaseOnEdges",
                    "uniqueNavElements",
                    "_resistance",
                    "_resistanceRatio",
                    "_watchSlidesProgress",
                    "_grabCursor",
                    "preventClicks",
                    "preventClicksPropagation",
                    "_slideToClickedSlide",
                    "_preloadImages",
                    "updateOnImagesReady",
                    "_loop",
                    "_loopAdditionalSlides",
                    "_loopedSlides",
                    "_loopedSlidesLimit",
                    "_loopFillGroupWithBlank",
                    "loopPreventsSlide",
                    "_rewind",
                    "_allowSlidePrev",
                    "_allowSlideNext",
                    "_swipeHandler",
                    "_noSwiping",
                    "noSwipingClass",
                    "noSwipingSelector",
                    "passiveListeners",
                    "containerModifierClass",
                    "slideClass",
                    "slideBlankClass",
                    "slideActiveClass",
                    "slideDuplicateActiveClass",
                    "slideVisibleClass",
                    "slideDuplicateClass",
                    "slideNextClass",
                    "slideDuplicateNextClass",
                    "slidePrevClass",
                    "slideDuplicatePrevClass",
                    "wrapperClass",
                    "runCallbacksOnInit",
                    "observer",
                    "observeParents",
                    "observeSlideChildren",
                    "a11y",
                    "_autoplay",
                    "_controller",
                    "coverflowEffect",
                    "cubeEffect",
                    "fadeEffect",
                    "flipEffect",
                    "creativeEffect",
                    "cardsEffect",
                    "hashNavigation",
                    "history",
                    "keyboard",
                    "lazy",
                    "mousewheel",
                    "_navigation",
                    "_pagination",
                    "parallax",
                    "_scrollbar",
                    "_thumbs",
                    "virtual",
                    "zoom",
                ],
                u = (e, t) => {
                    let s = t.slidesPerView;
                    if (t.breakpoints) {
                        let e = r.ZP.prototype.getBreakpoint(t.breakpoints),
                            i = e in t.breakpoints ? t.breakpoints[e] : void 0;
                        i && i.slidesPerView && (s = i.slidesPerView);
                    }
                    let i = Math.ceil(parseFloat(t.loopedSlides || s, 10));
                    return (i += t.loopAdditionalSlides) > e.length && t.loopedSlidesLimit && (i = e.length), i;
                };
            function h(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide");
            }
            let f = (e) => {
                e &&
                    !e.destroyed &&
                    e.params.virtual &&
                    (!e.params.virtual || e.params.virtual.enabled) &&
                    (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate());
            };
            function m(e, t) {
                return "undefined" == typeof window ? (0, i.useEffect)(e, t) : (0, i.useLayoutEffect)(e, t);
            }
            let g = (0, i.createContext)(null),
                v = (0, i.createContext)(null);
            function b() {
                return (b = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var s = arguments[t];
                              for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
                          }
                          return e;
                      }).apply(this, arguments);
            }
            let w = (0, i.forwardRef)(function (e, t) {
                let { className: s, tag: g = "div", wrapperTag: w = "div", children: C, onSwiper: T, ...S } = void 0 === e ? {} : e,
                    y = !1,
                    [E, x] = (0, i.useState)("swiper"),
                    [M, k] = (0, i.useState)(null),
                    [$, P] = (0, i.useState)(!1),
                    O = (0, i.useRef)(!1),
                    L = (0, i.useRef)(null),
                    z = (0, i.useRef)(null),
                    _ = (0, i.useRef)(null),
                    A = (0, i.useRef)(null),
                    D = (0, i.useRef)(null),
                    I = (0, i.useRef)(null),
                    N = (0, i.useRef)(null),
                    B = (0, i.useRef)(null),
                    { params: G, passedParams: j, rest: H, events: F } = (function (e = {}, t = !0) {
                        let s = { on: {} },
                            i = {},
                            n = {};
                        a(s, r.ZP.defaults), a(s, r.ZP.extendedDefaults), (s._emitClasses = !0), (s.init = !1);
                        let o = {},
                            d = p.map((e) => e.replace(/_/, "")),
                            c = Object.assign({}, e);
                        return (
                            Object.keys(c).forEach((r) => {
                                void 0 !== e[r] &&
                                    (d.indexOf(r) >= 0
                                        ? l(e[r])
                                            ? ((s[r] = {}), (n[r] = {}), a(s[r], e[r]), a(n[r], e[r]))
                                            : ((s[r] = e[r]), (n[r] = e[r]))
                                        : 0 === r.search(/on[A-Z]/) && "function" == typeof e[r]
                                        ? t
                                            ? (i[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r])
                                            : (s.on[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r])
                                        : (o[r] = e[r]));
                            }),
                            ["navigation", "pagination", "scrollbar"].forEach((e) => {
                                !0 === s[e] && (s[e] = {}), !1 === s[e] && delete s[e];
                            }),
                            { params: s, passedParams: n, rest: o, events: i }
                        );
                    })(S),
                    { slides: R, slots: V } = (function (e) {
                        let t = [],
                            s = { "container-start": [], "container-end": [], "wrapper-start": [], "wrapper-end": [] };
                        return (
                            i.Children.toArray(e).forEach((e) => {
                                if (h(e)) t.push(e);
                                else if (e.props && e.props.slot && s[e.props.slot]) s[e.props.slot].push(e);
                                else if (e.props && e.props.children) {
                                    let r = (function e(t) {
                                        let s = [];
                                        return (
                                            i.Children.toArray(t).forEach((t) => {
                                                h(t) ? s.push(t) : t.props && t.props.children && e(t.props.children).forEach((e) => s.push(e));
                                            }),
                                            s
                                        );
                                    })(e.props.children);
                                    r.length > 0 ? r.forEach((e) => t.push(e)) : s["container-end"].push(e);
                                } else s["container-end"].push(e);
                            }),
                            { slides: t, slots: s }
                        );
                    })(C),
                    W = () => {
                        P(!$);
                    };
                Object.assign(G.on, {
                    _containerClasses(e, t) {
                        x(t);
                    },
                });
                let q = () => {
                    if (
                        (Object.assign(G.on, F),
                        (y = !0),
                        (z.current = new r.ZP(G)),
                        (z.current.loopCreate = () => {}),
                        (z.current.loopDestroy = () => {}),
                        G.loop && (z.current.loopedSlides = u(R, G)),
                        z.current.virtual && z.current.params.virtual.enabled)
                    ) {
                        z.current.virtual.slides = R;
                        let e = { cache: !1, slides: R, renderExternal: k, renderExternalUpdate: !1 };
                        a(z.current.params.virtual, e), a(z.current.originalParams.virtual, e);
                    }
                };
                L.current || q(), z.current && z.current.on("_beforeBreakpoint", W);
                let X = () => {
                        !y &&
                            F &&
                            z.current &&
                            Object.keys(F).forEach((e) => {
                                z.current.on(e, F[e]);
                            });
                    },
                    Y = () => {
                        F &&
                            z.current &&
                            Object.keys(F).forEach((e) => {
                                z.current.off(e, F[e]);
                            });
                    };
                return (
                    (0, i.useEffect)(() => () => {
                        z.current && z.current.off("_beforeBreakpoint", W);
                    }),
                    (0, i.useEffect)(() => {
                        !O.current && z.current && (z.current.emitSlidesClasses(), (O.current = !0));
                    }),
                    m(() => {
                        if ((t && (t.current = L.current), L.current))
                            return (
                                z.current.destroyed && q(),
                                (function ({ el: e, nextEl: t, prevEl: s, paginationEl: i, scrollbarEl: r, swiper: l }, a) {
                                    n(a) && t && s && ((l.params.navigation.nextEl = t), (l.originalParams.navigation.nextEl = t), (l.params.navigation.prevEl = s), (l.originalParams.navigation.prevEl = s)),
                                        o(a) && i && ((l.params.pagination.el = i), (l.originalParams.pagination.el = i)),
                                        d(a) && r && ((l.params.scrollbar.el = r), (l.originalParams.scrollbar.el = r)),
                                        l.init(e);
                                })({ el: L.current, nextEl: D.current, prevEl: I.current, paginationEl: N.current, scrollbarEl: B.current, swiper: z.current }, G),
                                T && T(z.current),
                                () => {
                                    z.current && !z.current.destroyed && z.current.destroy(!0, !1);
                                }
                            );
                    }, []),
                    m(() => {
                        X();
                        let e = (function (e, t, s, i, r) {
                            let a = [];
                            if (!t) return a;
                            let n = (e) => {
                                0 > a.indexOf(e) && a.push(e);
                            };
                            if (s && i) {
                                let e = i.map(r),
                                    t = s.map(r);
                                e.join("") !== t.join("") && n("children"), i.length !== s.length && n("children");
                            }
                            let o = p.filter((e) => "_" === e[0]).map((e) => e.replace(/_/, ""));
                            return (
                                o.forEach((s) => {
                                    if (s in e && s in t) {
                                        if (l(e[s]) && l(t[s])) {
                                            let i = Object.keys(e[s]),
                                                r = Object.keys(t[s]);
                                            i.length !== r.length
                                                ? n(s)
                                                : (i.forEach((i) => {
                                                      e[s][i] !== t[s][i] && n(s);
                                                  }),
                                                  r.forEach((i) => {
                                                      e[s][i] !== t[s][i] && n(s);
                                                  }));
                                        } else e[s] !== t[s] && n(s);
                                    }
                                }),
                                a
                            );
                        })(j, _.current, R, A.current, (e) => e.key);
                        return (
                            (_.current = j),
                            (A.current = R),
                            e.length &&
                                z.current &&
                                !z.current.destroyed &&
                                (function ({ swiper: e, slides: t, passedParams: s, changedParams: i, nextEl: r, prevEl: n, scrollbarEl: o, paginationEl: d }) {
                                    let c, p, u, h, f;
                                    let m = i.filter((e) => "children" !== e && "direction" !== e),
                                        { params: g, pagination: v, navigation: b, scrollbar: w, virtual: C, thumbs: T } = e;
                                    i.includes("thumbs") && s.thumbs && s.thumbs.swiper && g.thumbs && !g.thumbs.swiper && (c = !0),
                                        i.includes("controller") && s.controller && s.controller.control && g.controller && !g.controller.control && (p = !0),
                                        i.includes("pagination") && s.pagination && (s.pagination.el || d) && (g.pagination || !1 === g.pagination) && v && !v.el && (u = !0),
                                        i.includes("scrollbar") && s.scrollbar && (s.scrollbar.el || o) && (g.scrollbar || !1 === g.scrollbar) && w && !w.el && (h = !0),
                                        i.includes("navigation") && s.navigation && (s.navigation.prevEl || n) && (s.navigation.nextEl || r) && (g.navigation || !1 === g.navigation) && b && !b.prevEl && !b.nextEl && (f = !0);
                                    let S = (t) => {
                                        e[t] && (e[t].destroy(), "navigation" === t ? ((g[t].prevEl = void 0), (g[t].nextEl = void 0), (e[t].prevEl = void 0), (e[t].nextEl = void 0)) : ((g[t].el = void 0), (e[t].el = void 0)));
                                    };
                                    if (
                                        (m.forEach((e) => {
                                            if (l(g[e]) && l(s[e])) a(g[e], s[e]);
                                            else {
                                                let t = s[e];
                                                (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && S(e) : (g[e] = s[e]);
                                            }
                                        }),
                                        m.includes("controller") && !p && e.controller && e.controller.control && g.controller && g.controller.control && (e.controller.control = g.controller.control),
                                        i.includes("children") && t && C && g.virtual.enabled ? ((C.slides = t), C.update(!0)) : i.includes("children") && e.lazy && e.params.lazy.enabled && e.lazy.load(),
                                        c)
                                    ) {
                                        let e = T.init();
                                        e && T.update(!0);
                                    }
                                    p && (e.controller.control = g.controller.control),
                                        u && (d && (g.pagination.el = d), v.init(), v.render(), v.update()),
                                        h && (o && (g.scrollbar.el = o), w.init(), w.updateSize(), w.setTranslate()),
                                        f && (r && (g.navigation.nextEl = r), n && (g.navigation.prevEl = n), b.init(), b.update()),
                                        i.includes("allowSlideNext") && (e.allowSlideNext = s.allowSlideNext),
                                        i.includes("allowSlidePrev") && (e.allowSlidePrev = s.allowSlidePrev),
                                        i.includes("direction") && e.changeDirection(s.direction, !1),
                                        e.update();
                                })({ swiper: z.current, slides: R, passedParams: j, changedParams: e, nextEl: D.current, prevEl: I.current, scrollbarEl: B.current, paginationEl: N.current }),
                            () => {
                                Y();
                            }
                        );
                    }),
                    m(() => {
                        f(z.current);
                    }, [M]),
                    i.createElement(
                        g,
                        b({ ref: L, className: c(`${E}${s ? ` ${s}` : ""}`) }, H),
                        i.createElement(
                            v.Provider,
                            { value: z.current },
                            V["container-start"],
                            i.createElement(
                                w,
                                { className: "swiper-wrapper" },
                                V["wrapper-start"],
                                G.virtual
                                    ? (function (e, t, s) {
                                          if (!s) return null;
                                          let r = e.isHorizontal() ? { [e.rtlTranslate ? "right" : "left"]: `${s.offset}px` } : { top: `${s.offset}px` };
                                          return t.filter((e, t) => t >= s.from && t <= s.to).map((t) => i.cloneElement(t, { swiper: e, style: r }));
                                      })(z.current, R, M)
                                    : !G.loop || (z.current && z.current.destroyed)
                                    ? R.map((e) => i.cloneElement(e, { swiper: z.current }))
                                    : (function (e, t, s) {
                                          let r = t.map((t, s) => i.cloneElement(t, { swiper: e, "data-swiper-slide-index": s }));
                                          function l(e, t, r) {
                                              return i.cloneElement(e, { key: `${e.key}-duplicate-${t}-${r}`, className: `${e.props.className || ""} ${s.slideDuplicateClass}` });
                                          }
                                          if (s.loopFillGroupWithBlank) {
                                              let e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
                                              if (e !== s.slidesPerGroup)
                                                  for (let t = 0; t < e; t += 1) {
                                                      let e = i.createElement("div", { className: `${s.slideClass} ${s.slideBlankClass}` });
                                                      r.push(e);
                                                  }
                                          }
                                          "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = r.length);
                                          let a = u(r, s),
                                              n = [],
                                              o = [];
                                          for (let e = 0; e < a; e += 1) {
                                              let t = e - Math.floor(e / r.length) * r.length;
                                              o.push(l(r[t], e, "append")), n.unshift(l(r[r.length - t - 1], e, "prepend"));
                                          }
                                          return e && (e.loopedSlides = a), [...n, ...r, ...o];
                                      })(z.current, R, G),
                                V["wrapper-end"]
                            ),
                            n(G) && i.createElement(i.Fragment, null, i.createElement("div", { ref: I, className: "swiper-button-prev" }), i.createElement("div", { ref: D, className: "swiper-button-next" })),
                            d(G) && i.createElement("div", { ref: B, className: "swiper-scrollbar" }),
                            o(G) && i.createElement("div", { ref: N, className: "swiper-pagination" }),
                            V["container-end"]
                        )
                    )
                );
            });
            function C() {
                return (C = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var s = arguments[t];
                              for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
                          }
                          return e;
                      }).apply(this, arguments);
            }
            w.displayName = "Swiper";
            let T = (0, i.forwardRef)(function (e, t) {
                let { tag: s = "div", children: r, className: l = "", swiper: a, zoom: n, virtualIndex: o, ...d } = void 0 === e ? {} : e,
                    p = (0, i.useRef)(null),
                    [u, h] = (0, i.useState)("swiper-slide");
                function f(e, t, s) {
                    t === p.current && h(s);
                }
                m(() => {
                    if ((t && (t.current = p.current), p.current && a)) {
                        if (a.destroyed) {
                            "swiper-slide" !== u && h("swiper-slide");
                            return;
                        }
                        return (
                            a.on("_slideClass", f),
                            () => {
                                a && a.off("_slideClass", f);
                            }
                        );
                    }
                }),
                    m(() => {
                        a && p.current && !a.destroyed && h(a.getSlideClasses(p.current));
                    }, [a]);
                let v = {
                        isActive: u.indexOf("swiper-slide-active") >= 0 || u.indexOf("swiper-slide-duplicate-active") >= 0,
                        isVisible: u.indexOf("swiper-slide-visible") >= 0,
                        isDuplicate: u.indexOf("swiper-slide-duplicate") >= 0,
                        isPrev: u.indexOf("swiper-slide-prev") >= 0 || u.indexOf("swiper-slide-duplicate-prev") >= 0,
                        isNext: u.indexOf("swiper-slide-next") >= 0 || u.indexOf("swiper-slide-duplicate-next") >= 0,
                    },
                    b = () => ("function" == typeof r ? r(v) : r);
                return i.createElement(
                    s,
                    C({ ref: p, className: c(`${u}${l ? ` ${l}` : ""}`), "data-swiper-slide-index": o }, d),
                    i.createElement(g.Provider, { value: v }, n ? i.createElement("div", { className: "swiper-zoom-container", "data-swiper-zoom": "number" == typeof n ? n : void 0 }, b()) : b())
                );
            });
            T.displayName = "SwiperSlide";
        },
        72022: function (e, t, s) {
            "use strict";
            let i, r, l;
            function a(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
            }
            function n(e = {}, t = {}) {
                Object.keys(t).forEach((s) => {
                    void 0 === e[s] ? (e[s] = t[s]) : a(t[s]) && a(e[s]) && Object.keys(t[s]).length > 0 && n(e[s], t[s]);
                });
            }
            s.d(t, {
                Qr: function () {
                    return X;
                },
                xW: function () {
                    return U;
                },
                Rv: function () {
                    return Y;
                },
                W_: function () {
                    return R;
                },
                tl: function () {
                    return W;
                },
                LW: function () {
                    return q;
                },
                ZP: function () {
                    return H;
                },
            });
            let o = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: { blur() {}, nodeName: "" },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({ initEvent() {} }),
                createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() {}, getElementsByTagName: () => [] }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
            };
            function d() {
                let e = "undefined" != typeof document ? document : {};
                return n(e, o), e;
            }
            let c = {
                document: o,
                navigator: { userAgent: "" },
                location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
                history: { replaceState() {}, pushState() {}, go() {}, back() {} },
                CustomEvent: function () {
                    return this;
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({ getPropertyValue: () => "" }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: (e) => ("undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e);
                },
            };
            function p() {
                let e = "undefined" != typeof window ? window : {};
                return n(e, c), e;
            }
            class u extends Array {
                constructor(e) {
                    "number" == typeof e
                        ? super(e)
                        : (super(...(e || [])),
                          (function (e) {
                              let t = e.__proto__;
                              Object.defineProperty(e, "__proto__", {
                                  get: () => t,
                                  set(e) {
                                      t.__proto__ = e;
                                  },
                              });
                          })(this));
                }
            }
            function h(e = []) {
                let t = [];
                return (
                    e.forEach((e) => {
                        Array.isArray(e) ? t.push(...h(e)) : t.push(e);
                    }),
                    t
                );
            }
            function f(e, t) {
                return Array.prototype.filter.call(e, t);
            }
            function m(e, t) {
                let s = p(),
                    i = d(),
                    r = [];
                if (!t && e instanceof u) return e;
                if (!e) return new u(r);
                if ("string" == typeof e) {
                    let s = e.trim();
                    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                        let e = "div";
                        0 === s.indexOf("<li") && (e = "ul"),
                            0 === s.indexOf("<tr") && (e = "tbody"),
                            (0 === s.indexOf("<td") || 0 === s.indexOf("<th")) && (e = "tr"),
                            0 === s.indexOf("<tbody") && (e = "table"),
                            0 === s.indexOf("<option") && (e = "select");
                        let t = i.createElement(e);
                        t.innerHTML = s;
                        for (let e = 0; e < t.childNodes.length; e += 1) r.push(t.childNodes[e]);
                    } else
                        r = (function (e, t) {
                            if ("string" != typeof e) return [e];
                            let s = [],
                                i = t.querySelectorAll(e);
                            for (let e = 0; e < i.length; e += 1) s.push(i[e]);
                            return s;
                        })(e.trim(), t || i);
                } else if (e.nodeType || e === s || e === i) r.push(e);
                else if (Array.isArray(e)) {
                    if (e instanceof u) return e;
                    r = e;
                }
                return new u(
                    (function (e) {
                        let t = [];
                        for (let s = 0; s < e.length; s += 1) -1 === t.indexOf(e[s]) && t.push(e[s]);
                        return t;
                    })(r)
                );
            }
            m.fn = u.prototype;
            let g = "resize scroll".split(" ");
            function v(e) {
                return function (...t) {
                    if (void 0 === t[0]) {
                        for (let t = 0; t < this.length; t += 1) 0 > g.indexOf(e) && (e in this[t] ? this[t][e]() : m(this[t]).trigger(e));
                        return this;
                    }
                    return this.on(e, ...t);
                };
            }
            v("click"),
                v("blur"),
                v("focus"),
                v("focusin"),
                v("focusout"),
                v("keyup"),
                v("keydown"),
                v("keypress"),
                v("submit"),
                v("change"),
                v("mousedown"),
                v("mousemove"),
                v("mouseup"),
                v("mouseenter"),
                v("mouseleave"),
                v("mouseout"),
                v("mouseover"),
                v("touchstart"),
                v("touchend"),
                v("touchmove"),
                v("resize"),
                v("scroll");
            let b = {
                addClass: function (...e) {
                    let t = h(e.map((e) => e.split(" ")));
                    return (
                        this.forEach((e) => {
                            e.classList.add(...t);
                        }),
                        this
                    );
                },
                removeClass: function (...e) {
                    let t = h(e.map((e) => e.split(" ")));
                    return (
                        this.forEach((e) => {
                            e.classList.remove(...t);
                        }),
                        this
                    );
                },
                hasClass: function (...e) {
                    let t = h(e.map((e) => e.split(" ")));
                    return f(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0).length > 0;
                },
                toggleClass: function (...e) {
                    let t = h(e.map((e) => e.split(" ")));
                    this.forEach((e) => {
                        t.forEach((t) => {
                            e.classList.toggle(t);
                        });
                    });
                },
                attr: function (e, t) {
                    if (1 == arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let s = 0; s < this.length; s += 1)
                        if (2 == arguments.length) this[s].setAttribute(e, t);
                        else for (let t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
                    return this;
                },
                removeAttr: function (e) {
                    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this;
                },
                transform: function (e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                    return this;
                },
                transition: function (e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
                    return this;
                },
                on: function (...e) {
                    let t,
                        [s, i, r, l] = e;
                    function a(e) {
                        let t = e.target;
                        if (!t) return;
                        let s = e.target.dom7EventData || [];
                        if ((0 > s.indexOf(e) && s.unshift(e), m(t).is(i))) r.apply(t, s);
                        else {
                            let e = m(t).parents();
                            for (let t = 0; t < e.length; t += 1) m(e[t]).is(i) && r.apply(e[t], s);
                        }
                    }
                    function n(e) {
                        let t = (e && e.target && e.target.dom7EventData) || [];
                        0 > t.indexOf(e) && t.unshift(e), r.apply(this, t);
                    }
                    "function" == typeof e[1] && (([s, r, l] = e), (i = void 0)), l || (l = !1);
                    let o = s.split(" ");
                    for (let e = 0; e < this.length; e += 1) {
                        let s = this[e];
                        if (i)
                            for (t = 0; t < o.length; t += 1) {
                                let e = o[t];
                                s.dom7LiveListeners || (s.dom7LiveListeners = {}), s.dom7LiveListeners[e] || (s.dom7LiveListeners[e] = []), s.dom7LiveListeners[e].push({ listener: r, proxyListener: a }), s.addEventListener(e, a, l);
                            }
                        else
                            for (t = 0; t < o.length; t += 1) {
                                let e = o[t];
                                s.dom7Listeners || (s.dom7Listeners = {}), s.dom7Listeners[e] || (s.dom7Listeners[e] = []), s.dom7Listeners[e].push({ listener: r, proxyListener: n }), s.addEventListener(e, n, l);
                            }
                    }
                    return this;
                },
                off: function (...e) {
                    let [t, s, i, r] = e;
                    "function" == typeof e[1] && (([t, i, r] = e), (s = void 0)), r || (r = !1);
                    let l = t.split(" ");
                    for (let e = 0; e < l.length; e += 1) {
                        let t = l[e];
                        for (let e = 0; e < this.length; e += 1) {
                            let l;
                            let a = this[e];
                            if ((!s && a.dom7Listeners ? (l = a.dom7Listeners[t]) : s && a.dom7LiveListeners && (l = a.dom7LiveListeners[t]), l && l.length))
                                for (let e = l.length - 1; e >= 0; e -= 1) {
                                    let s = l[e];
                                    i && s.listener === i
                                        ? (a.removeEventListener(t, s.proxyListener, r), l.splice(e, 1))
                                        : i && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === i
                                        ? (a.removeEventListener(t, s.proxyListener, r), l.splice(e, 1))
                                        : i || (a.removeEventListener(t, s.proxyListener, r), l.splice(e, 1));
                                }
                        }
                    }
                    return this;
                },
                trigger: function (...e) {
                    let t = p(),
                        s = e[0].split(" "),
                        i = e[1];
                    for (let r = 0; r < s.length; r += 1) {
                        let l = s[r];
                        for (let s = 0; s < this.length; s += 1) {
                            let r = this[s];
                            if (t.CustomEvent) {
                                let s = new t.CustomEvent(l, { detail: i, bubbles: !0, cancelable: !0 });
                                (r.dom7EventData = e.filter((e, t) => t > 0)), r.dispatchEvent(s), (r.dom7EventData = []), delete r.dom7EventData;
                            }
                        }
                    }
                    return this;
                },
                transitionEnd: function (e) {
                    let t = this;
                    return (
                        e &&
                            t.on("transitionend", function s(i) {
                                i.target === this && (e.call(this, i), t.off("transitionend", s));
                            }),
                        this
                    );
                },
                outerWidth: function (e) {
                    if (this.length > 0) {
                        if (e) {
                            let e = this.styles();
                            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"));
                        }
                        return this[0].offsetWidth;
                    }
                    return null;
                },
                outerHeight: function (e) {
                    if (this.length > 0) {
                        if (e) {
                            let e = this.styles();
                            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"));
                        }
                        return this[0].offsetHeight;
                    }
                    return null;
                },
                styles: function () {
                    let e = p();
                    return this[0] ? e.getComputedStyle(this[0], null) : {};
                },
                offset: function () {
                    if (this.length > 0) {
                        let e = p(),
                            t = d(),
                            s = this[0],
                            i = s.getBoundingClientRect(),
                            r = t.body,
                            l = s.clientTop || r.clientTop || 0,
                            a = s.clientLeft || r.clientLeft || 0,
                            n = s === e ? e.scrollY : s.scrollTop,
                            o = s === e ? e.scrollX : s.scrollLeft;
                        return { top: i.top + n - l, left: i.left + o - a };
                    }
                    return null;
                },
                css: function (e, t) {
                    let s;
                    let i = p();
                    if (1 == arguments.length) {
                        if ("string" == typeof e) {
                            if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e);
                        } else {
                            for (s = 0; s < this.length; s += 1) for (let t in e) this[s].style[t] = e[t];
                            return this;
                        }
                    }
                    if (2 == arguments.length && "string" == typeof e) for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
                    return this;
                },
                each: function (e) {
                    return (
                        e &&
                            this.forEach((t, s) => {
                                e.apply(t, [t, s]);
                            }),
                        this
                    );
                },
                html: function (e) {
                    if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this;
                },
                text: function (e) {
                    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this;
                },
                is: function (e) {
                    let t, s;
                    let i = p(),
                        r = d(),
                        l = this[0];
                    if (!l || void 0 === e) return !1;
                    if ("string" == typeof e) {
                        if (l.matches) return l.matches(e);
                        if (l.webkitMatchesSelector) return l.webkitMatchesSelector(e);
                        if (l.msMatchesSelector) return l.msMatchesSelector(e);
                        for (s = 0, t = m(e); s < t.length; s += 1) if (t[s] === l) return !0;
                        return !1;
                    }
                    if (e === r) return l === r;
                    if (e === i) return l === i;
                    if (e.nodeType || e instanceof u) {
                        for (s = 0, t = e.nodeType ? [e] : e; s < t.length; s += 1) if (t[s] === l) return !0;
                    }
                    return !1;
                },
                index: function () {
                    let e,
                        t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
                        return e;
                    }
                },
                eq: function (e) {
                    if (void 0 === e) return this;
                    let t = this.length;
                    if (e > t - 1) return m([]);
                    if (e < 0) {
                        let s = t + e;
                        return s < 0 ? m([]) : m([this[s]]);
                    }
                    return m([this[e]]);
                },
                append: function (...e) {
                    let t;
                    let s = d();
                    for (let i = 0; i < e.length; i += 1) {
                        t = e[i];
                        for (let e = 0; e < this.length; e += 1)
                            if ("string" == typeof t) {
                                let i = s.createElement("div");
                                for (i.innerHTML = t; i.firstChild; ) this[e].appendChild(i.firstChild);
                            } else if (t instanceof u) for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
                            else this[e].appendChild(t);
                    }
                    return this;
                },
                prepend: function (e) {
                    let t, s;
                    let i = d();
                    for (t = 0; t < this.length; t += 1)
                        if ("string" == typeof e) {
                            let r = i.createElement("div");
                            for (r.innerHTML = e, s = r.childNodes.length - 1; s >= 0; s -= 1) this[t].insertBefore(r.childNodes[s], this[t].childNodes[0]);
                        } else if (e instanceof u) for (s = 0; s < e.length; s += 1) this[t].insertBefore(e[s], this[t].childNodes[0]);
                        else this[t].insertBefore(e, this[t].childNodes[0]);
                    return this;
                },
                next: function (e) {
                    if (this.length > 0) {
                        if (e) return this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]);
                        if (this[0].nextElementSibling) return m([this[0].nextElementSibling]);
                    }
                    return m([]);
                },
                nextAll: function (e) {
                    let t = [],
                        s = this[0];
                    if (!s) return m([]);
                    for (; s.nextElementSibling; ) {
                        let i = s.nextElementSibling;
                        e ? m(i).is(e) && t.push(i) : t.push(i), (s = i);
                    }
                    return m(t);
                },
                prev: function (e) {
                    if (this.length > 0) {
                        let t = this[0];
                        if (e) return t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]);
                        if (t.previousElementSibling) return m([t.previousElementSibling]);
                    }
                    return m([]);
                },
                prevAll: function (e) {
                    let t = [],
                        s = this[0];
                    if (!s) return m([]);
                    for (; s.previousElementSibling; ) {
                        let i = s.previousElementSibling;
                        e ? m(i).is(e) && t.push(i) : t.push(i), (s = i);
                    }
                    return m(t);
                },
                parent: function (e) {
                    let t = [];
                    for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? m(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
                    return m(t);
                },
                parents: function (e) {
                    let t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        let i = this[s].parentNode;
                        for (; i; ) e ? m(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
                    }
                    return m(t);
                },
                closest: function (e) {
                    let t = this;
                    return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
                },
                find: function (e) {
                    let t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        let i = this[s].querySelectorAll(e);
                        for (let e = 0; e < i.length; e += 1) t.push(i[e]);
                    }
                    return m(t);
                },
                children: function (e) {
                    let t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        let i = this[s].children;
                        for (let s = 0; s < i.length; s += 1) (!e || m(i[s]).is(e)) && t.push(i[s]);
                    }
                    return m(t);
                },
                filter: function (e) {
                    let t = f(this, e);
                    return m(t);
                },
                remove: function () {
                    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this;
                },
            };
            function w(e, t = 0) {
                return setTimeout(e, t);
            }
            function C() {
                return Date.now();
            }
            function T(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
            }
            function S(...e) {
                let t = Object(e[0]),
                    s = ["__proto__", "constructor", "prototype"];
                for (let i = 1; i < e.length; i += 1) {
                    let r = e[i];
                    if (null != r && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(r instanceof HTMLElement) : !r || (1 !== r.nodeType && 11 !== r.nodeType))) {
                        let e = Object.keys(Object(r)).filter((e) => 0 > s.indexOf(e));
                        for (let s = 0, i = e.length; s < i; s += 1) {
                            let i = e[s],
                                l = Object.getOwnPropertyDescriptor(r, i);
                            void 0 !== l && l.enumerable && (T(t[i]) && T(r[i]) ? (r[i].__swiper__ ? (t[i] = r[i]) : S(t[i], r[i])) : !T(t[i]) && T(r[i]) ? ((t[i] = {}), r[i].__swiper__ ? (t[i] = r[i]) : S(t[i], r[i])) : (t[i] = r[i]));
                        }
                    }
                }
                return t;
            }
            function y(e, t, s) {
                e.style.setProperty(t, s);
            }
            function E({ swiper: e, targetPosition: t, side: s }) {
                let i;
                let r = p(),
                    l = -e.translate,
                    a = null,
                    n = e.params.speed;
                (e.wrapperEl.style.scrollSnapType = "none"), r.cancelAnimationFrame(e.cssModeFrameID);
                let o = t > l ? "next" : "prev",
                    d = (e, t) => ("next" === o && e >= t) || ("prev" === o && e <= t),
                    c = () => {
                        (i = new Date().getTime()), null === a && (a = i);
                        let o = Math.max(Math.min((i - a) / n, 1), 0),
                            p = l + (0.5 - Math.cos(o * Math.PI) / 2) * (t - l);
                        if ((d(p, t) && (p = t), e.wrapperEl.scrollTo({ [s]: p }), d(p, t))) {
                            (e.wrapperEl.style.overflow = "hidden"),
                                (e.wrapperEl.style.scrollSnapType = ""),
                                setTimeout(() => {
                                    (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [s]: p });
                                }),
                                r.cancelAnimationFrame(e.cssModeFrameID);
                            return;
                        }
                        e.cssModeFrameID = r.requestAnimationFrame(c);
                    };
                c();
            }
            function x() {
                return (
                    i ||
                        (i = (function () {
                            let e = p(),
                                t = d();
                            return {
                                smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                                touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
                                passiveListener: (function () {
                                    let t = !1;
                                    try {
                                        let s = Object.defineProperty({}, "passive", {
                                            get() {
                                                t = !0;
                                            },
                                        });
                                        e.addEventListener("testPassiveListener", null, s);
                                    } catch (e) {}
                                    return t;
                                })(),
                                gestures: "ongesturestart" in e,
                            };
                        })()),
                    i
                );
            }
            function M({ swiper: e, runCallbacks: t, direction: s, step: i }) {
                let { activeIndex: r, previousIndex: l } = e,
                    a = s;
                if ((a || (a = r > l ? "next" : r < l ? "prev" : "reset"), e.emit(`transition${i}`), t && r !== l)) {
                    if ("reset" === a) {
                        e.emit(`slideResetTransition${i}`);
                        return;
                    }
                    e.emit(`slideChangeTransition${i}`), "next" === a ? e.emit(`slideNextTransition${i}`) : e.emit(`slidePrevTransition${i}`);
                }
            }
            function k(e) {
                let t = d(),
                    s = p(),
                    i = this.touchEventsData,
                    { params: r, touches: l, enabled: a } = this;
                if (!a || (this.animating && r.preventInteractionOnTransition)) return;
                !this.animating && r.cssMode && r.loop && this.loopFix();
                let n = e;
                n.originalEvent && (n = n.originalEvent);
                let o = m(n.target);
                if (
                    ("wrapper" === r.touchEventsTarget && !o.closest(this.wrapperEl).length) ||
                    ((i.isTouchEvent = "touchstart" === n.type), (!i.isTouchEvent && "which" in n && 3 === n.which) || (!i.isTouchEvent && "button" in n && n.button > 0) || (i.isTouched && i.isMoved))
                )
                    return;
                let c = !!r.noSwipingClass && "" !== r.noSwipingClass,
                    u = e.composedPath ? e.composedPath() : e.path;
                c && n.target && n.target.shadowRoot && u && (o = m(u[0]));
                let h = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
                    f = !!(n.target && n.target.shadowRoot);
                if (
                    r.noSwiping &&
                    (f
                        ? (function (e, t = this) {
                              return (function t(s) {
                                  if (!s || s === d() || s === p()) return null;
                                  s.assignedSlot && (s = s.assignedSlot);
                                  let i = s.closest(e);
                                  return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
                              })(t);
                          })(h, o[0])
                        : o.closest(h)[0])
                ) {
                    this.allowClick = !0;
                    return;
                }
                if (r.swipeHandler && !o.closest(r.swipeHandler)[0]) return;
                (l.currentX = "touchstart" === n.type ? n.targetTouches[0].pageX : n.pageX), (l.currentY = "touchstart" === n.type ? n.targetTouches[0].pageY : n.pageY);
                let g = l.currentX,
                    v = l.currentY,
                    b = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                    w = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                if (b && (g <= w || g >= s.innerWidth - w)) {
                    if ("prevent" !== b) return;
                    e.preventDefault();
                }
                if (
                    (Object.assign(i, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                    (l.startX = g),
                    (l.startY = v),
                    (i.touchStartTime = C()),
                    (this.allowClick = !0),
                    this.updateSize(),
                    (this.swipeDirection = void 0),
                    r.threshold > 0 && (i.allowThresholdMove = !1),
                    "touchstart" !== n.type)
                ) {
                    let e = !0;
                    o.is(i.focusableElements) && ((e = !1), "SELECT" === o[0].nodeName && (i.isTouched = !1)), t.activeElement && m(t.activeElement).is(i.focusableElements) && t.activeElement !== o[0] && t.activeElement.blur();
                    let s = e && this.allowTouchMove && r.touchStartPreventDefault;
                    (r.touchStartForcePreventDefault || s) && !o[0].isContentEditable && n.preventDefault();
                }
                this.params.freeMode && this.params.freeMode.enabled && this.freeMode && this.animating && !r.cssMode && this.freeMode.onTouchStart(), this.emit("touchStart", n);
            }
            function $(e) {
                let t = d(),
                    s = this.touchEventsData,
                    { params: i, touches: r, rtlTranslate: l, enabled: a } = this;
                if (!a) return;
                let n = e;
                if ((n.originalEvent && (n = n.originalEvent), !s.isTouched)) {
                    s.startMoving && s.isScrolling && this.emit("touchMoveOpposite", n);
                    return;
                }
                if (s.isTouchEvent && "touchmove" !== n.type) return;
                let o = "touchmove" === n.type && n.targetTouches && (n.targetTouches[0] || n.changedTouches[0]),
                    c = "touchmove" === n.type ? o.pageX : n.pageX,
                    p = "touchmove" === n.type ? o.pageY : n.pageY;
                if (n.preventedByNestedSwiper) {
                    (r.startX = c), (r.startY = p);
                    return;
                }
                if (!this.allowTouchMove) {
                    m(n.target).is(s.focusableElements) || (this.allowClick = !1), s.isTouched && (Object.assign(r, { startX: c, startY: p, currentX: c, currentY: p }), (s.touchStartTime = C()));
                    return;
                }
                if (s.isTouchEvent && i.touchReleaseOnEdges && !i.loop) {
                    if (this.isVertical()) {
                        if ((p < r.startY && this.translate <= this.maxTranslate()) || (p > r.startY && this.translate >= this.minTranslate())) {
                            (s.isTouched = !1), (s.isMoved = !1);
                            return;
                        }
                    } else if ((c < r.startX && this.translate <= this.maxTranslate()) || (c > r.startX && this.translate >= this.minTranslate())) return;
                }
                if (s.isTouchEvent && t.activeElement && n.target === t.activeElement && m(n.target).is(s.focusableElements)) {
                    (s.isMoved = !0), (this.allowClick = !1);
                    return;
                }
                if ((s.allowTouchCallbacks && this.emit("touchMove", n), n.targetTouches && n.targetTouches.length > 1)) return;
                (r.currentX = c), (r.currentY = p);
                let u = r.currentX - r.startX,
                    h = r.currentY - r.startY;
                if (this.params.threshold && Math.sqrt(u ** 2 + h ** 2) < this.params.threshold) return;
                if (void 0 === s.isScrolling) {
                    let e;
                    (this.isHorizontal() && r.currentY === r.startY) || (this.isVertical() && r.currentX === r.startX)
                        ? (s.isScrolling = !1)
                        : u * u + h * h >= 25 && ((e = (180 * Math.atan2(Math.abs(h), Math.abs(u))) / Math.PI), (s.isScrolling = this.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle));
                }
                if ((s.isScrolling && this.emit("touchMoveOpposite", n), void 0 === s.startMoving && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = !0), s.isScrolling)) {
                    s.isTouched = !1;
                    return;
                }
                if (!s.startMoving) return;
                (this.allowClick = !1),
                    !i.cssMode && n.cancelable && n.preventDefault(),
                    i.touchMoveStopPropagation && !i.nested && n.stopPropagation(),
                    s.isMoved ||
                        (i.loop && !i.cssMode && this.loopFix(),
                        (s.startTranslate = this.getTranslate()),
                        this.setTransition(0),
                        this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                        (s.allowMomentumBounce = !1),
                        i.grabCursor && (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) && this.setGrabCursor(!0),
                        this.emit("sliderFirstMove", n)),
                    this.emit("sliderMove", n),
                    (s.isMoved = !0);
                let f = this.isHorizontal() ? u : h;
                (r.diff = f), (f *= i.touchRatio), l && (f = -f), (this.swipeDirection = f > 0 ? "prev" : "next"), (s.currentTranslate = f + s.startTranslate);
                let g = !0,
                    v = i.resistanceRatio;
                if (
                    (i.touchReleaseOnEdges && (v = 0),
                    f > 0 && s.currentTranslate > this.minTranslate()
                        ? ((g = !1), i.resistance && (s.currentTranslate = this.minTranslate() - 1 + (-this.minTranslate() + s.startTranslate + f) ** v))
                        : f < 0 && s.currentTranslate < this.maxTranslate() && ((g = !1), i.resistance && (s.currentTranslate = this.maxTranslate() + 1 - (this.maxTranslate() - s.startTranslate - f) ** v)),
                    g && (n.preventedByNestedSwiper = !0),
                    !this.allowSlideNext && "next" === this.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
                    !this.allowSlidePrev && "prev" === this.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
                    this.allowSlidePrev || this.allowSlideNext || (s.currentTranslate = s.startTranslate),
                    i.threshold > 0)
                ) {
                    if (Math.abs(f) > i.threshold || s.allowThresholdMove) {
                        if (!s.allowThresholdMove) {
                            (s.allowThresholdMove = !0), (r.startX = r.currentX), (r.startY = r.currentY), (s.currentTranslate = s.startTranslate), (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
                            return;
                        }
                    } else {
                        s.currentTranslate = s.startTranslate;
                        return;
                    }
                }
                i.followFinger &&
                    !i.cssMode &&
                    (((i.freeMode && i.freeMode.enabled && this.freeMode) || i.watchSlidesProgress) && (this.updateActiveIndex(), this.updateSlidesClasses()),
                    this.params.freeMode && i.freeMode.enabled && this.freeMode && this.freeMode.onTouchMove(),
                    this.updateProgress(s.currentTranslate),
                    this.setTranslate(s.currentTranslate));
            }
            function P(e) {
                let t;
                let s = this,
                    i = s.touchEventsData,
                    { params: r, touches: l, rtlTranslate: a, slidesGrid: n, enabled: o } = s;
                if (!o) return;
                let d = e;
                if ((d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && s.emit("touchEnd", d), (i.allowTouchCallbacks = !1), !i.isTouched)) {
                    i.isMoved && r.grabCursor && s.setGrabCursor(!1), (i.isMoved = !1), (i.startMoving = !1);
                    return;
                }
                r.grabCursor && i.isMoved && i.isTouched && (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) && s.setGrabCursor(!1);
                let c = C(),
                    p = c - i.touchStartTime;
                if (s.allowClick) {
                    let e = d.path || (d.composedPath && d.composedPath());
                    s.updateClickedSlide((e && e[0]) || d.target), s.emit("tap click", d), p < 300 && c - i.lastClickTime < 300 && s.emit("doubleTap doubleClick", d);
                }
                if (
                    ((i.lastClickTime = C()),
                    w(() => {
                        s.destroyed || (s.allowClick = !0);
                    }),
                    !i.isTouched || !i.isMoved || !s.swipeDirection || 0 === l.diff || i.currentTranslate === i.startTranslate)
                ) {
                    (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
                    return;
                }
                if (((i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1), (t = r.followFinger ? (a ? s.translate : -s.translate) : -i.currentTranslate), r.cssMode)) return;
                if (s.params.freeMode && r.freeMode.enabled) {
                    s.freeMode.onTouchEnd({ currentPos: t });
                    return;
                }
                let u = 0,
                    h = s.slidesSizesGrid[0];
                for (let e = 0; e < n.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
                    let s = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                    void 0 !== n[e + s] ? t >= n[e] && t < n[e + s] && ((u = e), (h = n[e + s] - n[e])) : t >= n[e] && ((u = e), (h = n[n.length - 1] - n[n.length - 2]));
                }
                let f = null,
                    m = null;
                r.rewind && (s.isBeginning ? (m = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1) : s.isEnd && (f = 0));
                let g = (t - n[u]) / h,
                    v = u < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                if (p > r.longSwipesMs) {
                    if (!r.longSwipes) {
                        s.slideTo(s.activeIndex);
                        return;
                    }
                    "next" === s.swipeDirection && (g >= r.longSwipesRatio ? s.slideTo(r.rewind && s.isEnd ? f : u + v) : s.slideTo(u)),
                        "prev" === s.swipeDirection && (g > 1 - r.longSwipesRatio ? s.slideTo(u + v) : null !== m && g < 0 && Math.abs(g) > r.longSwipesRatio ? s.slideTo(m) : s.slideTo(u));
                } else {
                    if (!r.shortSwipes) {
                        s.slideTo(s.activeIndex);
                        return;
                    }
                    let e = s.navigation && (d.target === s.navigation.nextEl || d.target === s.navigation.prevEl);
                    e ? (d.target === s.navigation.nextEl ? s.slideTo(u + v) : s.slideTo(u)) : ("next" === s.swipeDirection && s.slideTo(null !== f ? f : u + v), "prev" === s.swipeDirection && s.slideTo(null !== m ? m : u));
                }
            }
            function O() {
                let { params: e, el: t } = this;
                if (t && 0 === t.offsetWidth) return;
                e.breakpoints && this.setBreakpoint();
                let { allowSlideNext: s, allowSlidePrev: i, snapGrid: r } = this;
                (this.allowSlideNext = !0),
                    (this.allowSlidePrev = !0),
                    this.updateSize(),
                    this.updateSlides(),
                    this.updateSlidesClasses(),
                    ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0),
                    this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(),
                    (this.allowSlidePrev = i),
                    (this.allowSlideNext = s),
                    this.params.watchOverflow && r !== this.snapGrid && this.checkOverflow();
            }
            function L(e) {
                this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
            }
            function z() {
                let { wrapperEl: e, rtlTranslate: t, enabled: s } = this;
                if (!s) return;
                (this.previousTranslate = this.translate),
                    this.isHorizontal() ? (this.translate = -e.scrollLeft) : (this.translate = -e.scrollTop),
                    0 === this.translate && (this.translate = 0),
                    this.updateActiveIndex(),
                    this.updateSlidesClasses();
                let i = this.maxTranslate() - this.minTranslate();
                (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1);
            }
            Object.keys(b).forEach((e) => {
                Object.defineProperty(m.fn, e, { value: b[e], writable: !0 });
            });
            let _ = !1;
            function A() {}
            let D = (e, t) => {
                    let s = d(),
                        { params: i, touchEvents: r, el: l, wrapperEl: a, device: n, support: o } = e,
                        c = !!i.nested,
                        p = "on" === t ? "addEventListener" : "removeEventListener";
                    if (o.touch) {
                        let t = "touchstart" === r.start && !!o.passiveListener && !!i.passiveListeners && { passive: !0, capture: !1 };
                        l[p](r.start, e.onTouchStart, t), l[p](r.move, e.onTouchMove, o.passiveListener ? { passive: !1, capture: c } : c), l[p](r.end, e.onTouchEnd, t), r.cancel && l[p](r.cancel, e.onTouchEnd, t);
                    } else l[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);
                    (i.preventClicks || i.preventClicksPropagation) && l[p]("click", e.onClick, !0),
                        i.cssMode && a[p]("scroll", e.onScroll),
                        i.updateOnWindowResize ? e[t](n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", O, !0) : e[t]("observerUpdate", O, !0);
                },
                I = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var N = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: 0.5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: 0.85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopedSlidesLimit: !0,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1,
            };
            let B = {
                    eventsEmitter: {
                        on(e, t, s) {
                            let i = this;
                            if (!i.eventsListeners || i.destroyed || "function" != typeof t) return i;
                            let r = s ? "unshift" : "push";
                            return (
                                e.split(" ").forEach((e) => {
                                    i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t);
                                }),
                                i
                            );
                        },
                        once(e, t, s) {
                            let i = this;
                            if (!i.eventsListeners || i.destroyed || "function" != typeof t) return i;
                            function r(...s) {
                                i.off(e, r), r.__emitterProxy && delete r.__emitterProxy, t.apply(i, s);
                            }
                            return (r.__emitterProxy = t), i.on(e, r, s);
                        },
                        onAny(e, t) {
                            return !this.eventsListeners || this.destroyed || "function" != typeof e || (0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e)), this;
                        },
                        offAny(e) {
                            if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                            let t = this.eventsAnyListeners.indexOf(e);
                            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
                        },
                        off(e, t) {
                            let s = this;
                            return (
                                s.eventsListeners &&
                                    !s.destroyed &&
                                    s.eventsListeners &&
                                    e.split(" ").forEach((e) => {
                                        void 0 === t
                                            ? (s.eventsListeners[e] = [])
                                            : s.eventsListeners[e] &&
                                              s.eventsListeners[e].forEach((i, r) => {
                                                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) && s.eventsListeners[e].splice(r, 1);
                                              });
                                    }),
                                s
                            );
                        },
                        emit(...e) {
                            let t, s, i;
                            let r = this;
                            if (!r.eventsListeners || r.destroyed || !r.eventsListeners) return r;
                            "string" == typeof e[0] || Array.isArray(e[0]) ? ((t = e[0]), (s = e.slice(1, e.length)), (i = r)) : ((t = e[0].events), (s = e[0].data), (i = e[0].context || r)), s.unshift(i);
                            let l = Array.isArray(t) ? t : t.split(" ");
                            return (
                                l.forEach((e) => {
                                    r.eventsAnyListeners &&
                                        r.eventsAnyListeners.length &&
                                        r.eventsAnyListeners.forEach((t) => {
                                            t.apply(i, [e, ...s]);
                                        }),
                                        r.eventsListeners &&
                                            r.eventsListeners[e] &&
                                            r.eventsListeners[e].forEach((e) => {
                                                e.apply(i, s);
                                            });
                                }),
                                r
                            );
                        },
                    },
                    update: {
                        updateSize: function () {
                            let e, t;
                            let s = this.$el;
                            (e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : s[0].clientWidth),
                                (t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : s[0].clientHeight),
                                (0 === e && this.isHorizontal()) ||
                                    (0 === t && this.isVertical()) ||
                                    ((e = e - parseInt(s.css("padding-left") || 0, 10) - parseInt(s.css("padding-right") || 0, 10)),
                                    (t = t - parseInt(s.css("padding-top") || 0, 10) - parseInt(s.css("padding-bottom") || 0, 10)),
                                    Number.isNaN(e) && (e = 0),
                                    Number.isNaN(t) && (t = 0),
                                    Object.assign(this, { width: e, height: t, size: this.isHorizontal() ? e : t }));
                        },
                        updateSlides: function () {
                            let e;
                            let t = this;
                            function s(e) {
                                return t.isHorizontal()
                                    ? e
                                    : {
                                          width: "height",
                                          "margin-top": "margin-left",
                                          "margin-bottom ": "margin-right",
                                          "margin-left": "margin-top",
                                          "margin-right": "margin-bottom",
                                          "padding-left": "padding-top",
                                          "padding-right": "padding-bottom",
                                          marginRight: "marginBottom",
                                      }[e];
                            }
                            function i(e, t) {
                                return parseFloat(e.getPropertyValue(s(t)) || 0);
                            }
                            let r = t.params,
                                { $wrapperEl: l, size: a, rtlTranslate: n, wrongRTL: o } = t,
                                d = t.virtual && r.virtual.enabled,
                                c = d ? t.virtual.slides.length : t.slides.length,
                                p = l.children(`.${t.params.slideClass}`),
                                u = d ? t.virtual.slides.length : p.length,
                                h = [],
                                f = [],
                                m = [],
                                g = r.slidesOffsetBefore;
                            "function" == typeof g && (g = r.slidesOffsetBefore.call(t));
                            let v = r.slidesOffsetAfter;
                            "function" == typeof v && (v = r.slidesOffsetAfter.call(t));
                            let b = t.snapGrid.length,
                                w = t.slidesGrid.length,
                                C = r.spaceBetween,
                                T = -g,
                                S = 0,
                                E = 0;
                            if (void 0 === a) return;
                            "string" == typeof C && C.indexOf("%") >= 0 && (C = (parseFloat(C.replace("%", "")) / 100) * a),
                                (t.virtualSize = -C),
                                n ? p.css({ marginLeft: "", marginBottom: "", marginTop: "" }) : p.css({ marginRight: "", marginBottom: "", marginTop: "" }),
                                r.centeredSlides && r.cssMode && (y(t.wrapperEl, "--swiper-centered-offset-before", ""), y(t.wrapperEl, "--swiper-centered-offset-after", ""));
                            let x = r.grid && r.grid.rows > 1 && t.grid;
                            x && t.grid.initSlides(u);
                            let M = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter((e) => void 0 !== r.breakpoints[e].slidesPerView).length > 0;
                            for (let l = 0; l < u; l += 1) {
                                e = 0;
                                let n = p.eq(l);
                                if ((x && t.grid.updateSlide(l, n, u, s), "none" !== n.css("display"))) {
                                    if ("auto" === r.slidesPerView) {
                                        M && (p[l].style[s("width")] = "");
                                        let a = getComputedStyle(n[0]),
                                            o = n[0].style.transform,
                                            d = n[0].style.webkitTransform;
                                        if ((o && (n[0].style.transform = "none"), d && (n[0].style.webkitTransform = "none"), r.roundLengths)) e = t.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                                        else {
                                            let t = i(a, "width"),
                                                s = i(a, "padding-left"),
                                                r = i(a, "padding-right"),
                                                l = i(a, "margin-left"),
                                                o = i(a, "margin-right"),
                                                d = a.getPropertyValue("box-sizing");
                                            if (d && "border-box" === d) e = t + l + o;
                                            else {
                                                let { clientWidth: i, offsetWidth: a } = n[0];
                                                e = t + s + r + l + o + (a - i);
                                            }
                                        }
                                        o && (n[0].style.transform = o), d && (n[0].style.webkitTransform = d), r.roundLengths && (e = Math.floor(e));
                                    } else (e = (a - (r.slidesPerView - 1) * C) / r.slidesPerView), r.roundLengths && (e = Math.floor(e)), p[l] && (p[l].style[s("width")] = `${e}px`);
                                    p[l] && (p[l].swiperSlideSize = e),
                                        m.push(e),
                                        r.centeredSlides
                                            ? ((T = T + e / 2 + S / 2 + C),
                                              0 === S && 0 !== l && (T = T - a / 2 - C),
                                              0 === l && (T = T - a / 2 - C),
                                              0.001 > Math.abs(T) && (T = 0),
                                              r.roundLengths && (T = Math.floor(T)),
                                              E % r.slidesPerGroup == 0 && h.push(T),
                                              f.push(T))
                                            : (r.roundLengths && (T = Math.floor(T)), (E - Math.min(t.params.slidesPerGroupSkip, E)) % t.params.slidesPerGroup == 0 && h.push(T), f.push(T), (T = T + e + C)),
                                        (t.virtualSize += e + C),
                                        (S = e),
                                        (E += 1);
                                }
                            }
                            if (
                                ((t.virtualSize = Math.max(t.virtualSize, a) + v),
                                n && o && ("slide" === r.effect || "coverflow" === r.effect) && l.css({ width: `${t.virtualSize + r.spaceBetween}px` }),
                                r.setWrapperSize && l.css({ [s("width")]: `${t.virtualSize + r.spaceBetween}px` }),
                                x && t.grid.updateWrapperSize(e, h, s),
                                !r.centeredSlides)
                            ) {
                                let e = [];
                                for (let s = 0; s < h.length; s += 1) {
                                    let i = h[s];
                                    r.roundLengths && (i = Math.floor(i)), h[s] <= t.virtualSize - a && e.push(i);
                                }
                                (h = e), Math.floor(t.virtualSize - a) - Math.floor(h[h.length - 1]) > 1 && h.push(t.virtualSize - a);
                            }
                            if ((0 === h.length && (h = [0]), 0 !== r.spaceBetween)) {
                                let e = t.isHorizontal() && n ? "marginLeft" : s("marginRight");
                                p.filter((e, t) => !r.cssMode || t !== p.length - 1).css({ [e]: `${C}px` });
                            }
                            if (r.centeredSlides && r.centeredSlidesBounds) {
                                let e = 0;
                                m.forEach((t) => {
                                    e += t + (r.spaceBetween ? r.spaceBetween : 0);
                                }),
                                    (e -= r.spaceBetween);
                                let t = e - a;
                                h = h.map((e) => (e < 0 ? -g : e > t ? t + v : e));
                            }
                            if (r.centerInsufficientSlides) {
                                let e = 0;
                                if (
                                    (m.forEach((t) => {
                                        e += t + (r.spaceBetween ? r.spaceBetween : 0);
                                    }),
                                    (e -= r.spaceBetween) < a)
                                ) {
                                    let t = (a - e) / 2;
                                    h.forEach((e, s) => {
                                        h[s] = e - t;
                                    }),
                                        f.forEach((e, s) => {
                                            f[s] = e + t;
                                        });
                                }
                            }
                            if ((Object.assign(t, { slides: p, snapGrid: h, slidesGrid: f, slidesSizesGrid: m }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)) {
                                y(t.wrapperEl, "--swiper-centered-offset-before", `${-h[0]}px`), y(t.wrapperEl, "--swiper-centered-offset-after", `${t.size / 2 - m[m.length - 1] / 2}px`);
                                let e = -t.snapGrid[0],
                                    s = -t.slidesGrid[0];
                                (t.snapGrid = t.snapGrid.map((t) => t + e)), (t.slidesGrid = t.slidesGrid.map((e) => e + s));
                            }
                            if (
                                (u !== c && t.emit("slidesLengthChange"),
                                h.length !== b && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")),
                                f.length !== w && t.emit("slidesGridLengthChange"),
                                r.watchSlidesProgress && t.updateSlidesOffset(),
                                !d && !r.cssMode && ("slide" === r.effect || "fade" === r.effect))
                            ) {
                                let e = `${r.containerModifierClass}backface-hidden`,
                                    s = t.$el.hasClass(e);
                                u <= r.maxBackfaceHiddenSlides ? s || t.$el.addClass(e) : s && t.$el.removeClass(e);
                            }
                        },
                        updateAutoHeight: function (e) {
                            let t;
                            let s = this,
                                i = [],
                                r = s.virtual && s.params.virtual.enabled,
                                l = 0;
                            "number" == typeof e ? s.setTransition(e) : !0 === e && s.setTransition(s.params.speed);
                            let a = (e) => (r ? s.slides.filter((t) => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : s.slides.eq(e)[0]);
                            if ("auto" !== s.params.slidesPerView && s.params.slidesPerView > 1) {
                                if (s.params.centeredSlides)
                                    (s.visibleSlides || m([])).each((e) => {
                                        i.push(e);
                                    });
                                else
                                    for (t = 0; t < Math.ceil(s.params.slidesPerView); t += 1) {
                                        let e = s.activeIndex + t;
                                        if (e > s.slides.length && !r) break;
                                        i.push(a(e));
                                    }
                            } else i.push(a(s.activeIndex));
                            for (t = 0; t < i.length; t += 1)
                                if (void 0 !== i[t]) {
                                    let e = i[t].offsetHeight;
                                    l = e > l ? e : l;
                                }
                            (l || 0 === l) && s.$wrapperEl.css("height", `${l}px`);
                        },
                        updateSlidesOffset: function () {
                            let e = this.slides;
                            for (let t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
                        },
                        updateSlidesProgress: function (e = (this && this.translate) || 0) {
                            let t = this.params,
                                { slides: s, rtlTranslate: i, snapGrid: r } = this;
                            if (0 === s.length) return;
                            void 0 === s[0].swiperSlideOffset && this.updateSlidesOffset();
                            let l = -e;
                            i && (l = e), s.removeClass(t.slideVisibleClass), (this.visibleSlidesIndexes = []), (this.visibleSlides = []);
                            for (let e = 0; e < s.length; e += 1) {
                                let a = s[e],
                                    n = a.swiperSlideOffset;
                                t.cssMode && t.centeredSlides && (n -= s[0].swiperSlideOffset);
                                let o = (l + (t.centeredSlides ? this.minTranslate() : 0) - n) / (a.swiperSlideSize + t.spaceBetween),
                                    d = (l - r[0] + (t.centeredSlides ? this.minTranslate() : 0) - n) / (a.swiperSlideSize + t.spaceBetween),
                                    c = -(l - n),
                                    p = c + this.slidesSizesGrid[e],
                                    u = (c >= 0 && c < this.size - 1) || (p > 1 && p <= this.size) || (c <= 0 && p >= this.size);
                                u && (this.visibleSlides.push(a), this.visibleSlidesIndexes.push(e), s.eq(e).addClass(t.slideVisibleClass)), (a.progress = i ? -o : o), (a.originalProgress = i ? -d : d);
                            }
                            this.visibleSlides = m(this.visibleSlides);
                        },
                        updateProgress: function (e) {
                            if (void 0 === e) {
                                let t = this.rtlTranslate ? -1 : 1;
                                e = (this && this.translate && this.translate * t) || 0;
                            }
                            let t = this.params,
                                s = this.maxTranslate() - this.minTranslate(),
                                { progress: i, isBeginning: r, isEnd: l } = this,
                                a = r,
                                n = l;
                            0 === s ? ((i = 0), (r = !0), (l = !0)) : ((r = (i = (e - this.minTranslate()) / s) <= 0), (l = i >= 1)),
                                Object.assign(this, { progress: i, isBeginning: r, isEnd: l }),
                                (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) && this.updateSlidesProgress(e),
                                r && !a && this.emit("reachBeginning toEdge"),
                                l && !n && this.emit("reachEnd toEdge"),
                                ((a && !r) || (n && !l)) && this.emit("fromEdge"),
                                this.emit("progress", i);
                        },
                        updateSlidesClasses: function () {
                            let e;
                            let { slides: t, params: s, $wrapperEl: i, activeIndex: r, realIndex: l } = this,
                                a = this.virtual && s.virtual.enabled;
                            t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),
                                (e = a ? this.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${r}"]`) : t.eq(r)).addClass(s.slideActiveClass),
                                s.loop &&
                                    (e.hasClass(s.slideDuplicateClass)
                                        ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${l}"]`).addClass(s.slideDuplicateActiveClass)
                                        : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${l}"]`).addClass(s.slideDuplicateActiveClass));
                            let n = e.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                            s.loop && 0 === n.length && (n = t.eq(0)).addClass(s.slideNextClass);
                            let o = e.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                            s.loop && 0 === o.length && (o = t.eq(-1)).addClass(s.slidePrevClass),
                                s.loop &&
                                    (n.hasClass(s.slideDuplicateClass)
                                        ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${n.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass)
                                        : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${n.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),
                                    o.hasClass(s.slideDuplicateClass)
                                        ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)
                                        : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),
                                this.emitSlidesClasses();
                        },
                        updateActiveIndex: function (e) {
                            let t;
                            let s = this.rtlTranslate ? this.translate : -this.translate,
                                { slidesGrid: i, snapGrid: r, params: l, activeIndex: a, realIndex: n, snapIndex: o } = this,
                                d = e;
                            if (void 0 === d) {
                                for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? (s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2 ? (d = e) : s >= i[e] && s < i[e + 1] && (d = e + 1)) : s >= i[e] && (d = e);
                                l.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
                            }
                            if (r.indexOf(s) >= 0) t = r.indexOf(s);
                            else {
                                let e = Math.min(l.slidesPerGroupSkip, d);
                                t = e + Math.floor((d - e) / l.slidesPerGroup);
                            }
                            if ((t >= r.length && (t = r.length - 1), d === a)) {
                                t !== o && ((this.snapIndex = t), this.emit("snapIndexChange"));
                                return;
                            }
                            let c = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                            Object.assign(this, { snapIndex: t, realIndex: c, previousIndex: a, activeIndex: d }),
                                this.emit("activeIndexChange"),
                                this.emit("snapIndexChange"),
                                n !== c && this.emit("realIndexChange"),
                                (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange");
                        },
                        updateClickedSlide: function (e) {
                            let t;
                            let s = this.params,
                                i = m(e).closest(`.${s.slideClass}`)[0],
                                r = !1;
                            if (i) {
                                for (let e = 0; e < this.slides.length; e += 1)
                                    if (this.slides[e] === i) {
                                        (r = !0), (t = e);
                                        break;
                                    }
                            }
                            if (i && r) (this.clickedSlide = i), this.virtual && this.params.virtual.enabled ? (this.clickedIndex = parseInt(m(i).attr("data-swiper-slide-index"), 10)) : (this.clickedIndex = t);
                            else {
                                (this.clickedSlide = void 0), (this.clickedIndex = void 0);
                                return;
                            }
                            s.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
                        },
                    },
                    translate: {
                        getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
                            let { params: t, rtlTranslate: s, translate: i, $wrapperEl: r } = this;
                            if (t.virtualTranslate) return s ? -i : i;
                            if (t.cssMode) return i;
                            let l = (function (e, t = "x") {
                                let s, i, r;
                                let l = p(),
                                    a = (function (e) {
                                        let t;
                                        let s = p();
                                        return s.getComputedStyle && (t = s.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t;
                                    })(e, null);
                                return (
                                    l.WebKitCSSMatrix
                                        ? ((i = a.transform || a.webkitTransform).split(",").length > 6 &&
                                              (i = i
                                                  .split(", ")
                                                  .map((e) => e.replace(",", "."))
                                                  .join(", ")),
                                          (r = new l.WebKitCSSMatrix("none" === i ? "" : i)))
                                        : (s = (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(",")),
                                    "x" === t && (i = l.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])),
                                    "y" === t && (i = l.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])),
                                    i || 0
                                );
                            })(r[0], e);
                            return s && (l = -l), l || 0;
                        },
                        setTranslate: function (e, t) {
                            let { rtlTranslate: s, params: i, $wrapperEl: r, wrapperEl: l, progress: a } = this,
                                n = 0,
                                o = 0;
                            this.isHorizontal() ? (n = s ? -e : e) : (o = e),
                                i.roundLengths && ((n = Math.floor(n)), (o = Math.floor(o))),
                                i.cssMode ? (l[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -n : -o) : i.virtualTranslate || r.transform(`translate3d(${n}px, ${o}px, 0px)`),
                                (this.previousTranslate = this.translate),
                                (this.translate = this.isHorizontal() ? n : o);
                            let d = this.maxTranslate() - this.minTranslate();
                            (0 === d ? 0 : (e - this.minTranslate()) / d) !== a && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
                        },
                        minTranslate: function () {
                            return -this.snapGrid[0];
                        },
                        maxTranslate: function () {
                            return -this.snapGrid[this.snapGrid.length - 1];
                        },
                        translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, r) {
                            let l;
                            let a = this,
                                { params: n, wrapperEl: o } = a;
                            if (a.animating && n.preventInteractionOnTransition) return !1;
                            let d = a.minTranslate(),
                                c = a.maxTranslate();
                            if (((l = i && e > d ? d : i && e < c ? c : e), a.updateProgress(l), n.cssMode)) {
                                let e = a.isHorizontal();
                                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -l;
                                else {
                                    if (!a.support.smoothScroll) return E({ swiper: a, targetPosition: -l, side: e ? "left" : "top" }), !0;
                                    o.scrollTo({ [e ? "left" : "top"]: -l, behavior: "smooth" });
                                }
                                return !0;
                            }
                            return (
                                0 === t
                                    ? (a.setTransition(0), a.setTranslate(l), s && (a.emit("beforeTransitionStart", t, r), a.emit("transitionEnd")))
                                    : (a.setTransition(t),
                                      a.setTranslate(l),
                                      s && (a.emit("beforeTransitionStart", t, r), a.emit("transitionStart")),
                                      a.animating ||
                                          ((a.animating = !0),
                                          a.onTranslateToWrapperTransitionEnd ||
                                              (a.onTranslateToWrapperTransitionEnd = function (e) {
                                                  a &&
                                                      !a.destroyed &&
                                                      e.target === this &&
                                                      (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd),
                                                      a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd),
                                                      (a.onTranslateToWrapperTransitionEnd = null),
                                                      delete a.onTranslateToWrapperTransitionEnd,
                                                      s && a.emit("transitionEnd"));
                                              }),
                                          a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd),
                                          a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))),
                                !0
                            );
                        },
                    },
                    transition: {
                        setTransition: function (e, t) {
                            this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
                        },
                        transitionStart: function (e = !0, t) {
                            let { params: s } = this;
                            s.cssMode || (s.autoHeight && this.updateAutoHeight(), M({ swiper: this, runCallbacks: e, direction: t, step: "Start" }));
                        },
                        transitionEnd: function (e = !0, t) {
                            let { params: s } = this;
                            (this.animating = !1), s.cssMode || (this.setTransition(0), M({ swiper: this, runCallbacks: e, direction: t, step: "End" }));
                        },
                    },
                    slide: {
                        slideTo: function (e = 0, t = this.params.speed, s = !0, i, r) {
                            let l;
                            if ("number" != typeof e && "string" != typeof e) throw Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                            if ("string" == typeof e) {
                                let t = parseInt(e, 10),
                                    s = isFinite(t);
                                if (!s) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                                e = t;
                            }
                            let a = this,
                                n = e;
                            n < 0 && (n = 0);
                            let { params: o, snapGrid: d, slidesGrid: c, previousIndex: p, activeIndex: u, rtlTranslate: h, wrapperEl: f, enabled: m } = a;
                            if ((a.animating && o.preventInteractionOnTransition) || (!m && !i && !r)) return !1;
                            let g = Math.min(a.params.slidesPerGroupSkip, n),
                                v = g + Math.floor((n - g) / a.params.slidesPerGroup);
                            v >= d.length && (v = d.length - 1);
                            let b = -d[v];
                            if (o.normalizeSlideIndex)
                                for (let e = 0; e < c.length; e += 1) {
                                    let t = -Math.floor(100 * b),
                                        s = Math.floor(100 * c[e]),
                                        i = Math.floor(100 * c[e + 1]);
                                    void 0 !== c[e + 1] ? (t >= s && t < i - (i - s) / 2 ? (n = e) : t >= s && t < i && (n = e + 1)) : t >= s && (n = e);
                                }
                            if (a.initialized && n !== u && ((!a.allowSlideNext && b < a.translate && b < a.minTranslate()) || (!a.allowSlidePrev && b > a.translate && b > a.maxTranslate() && (u || 0) !== n))) return !1;
                            if ((n !== (p || 0) && s && a.emit("beforeSlideChangeStart"), a.updateProgress(b), (l = n > u ? "next" : n < u ? "prev" : "reset"), (h && -b === a.translate) || (!h && b === a.translate)))
                                return a.updateActiveIndex(n), o.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== o.effect && a.setTranslate(b), "reset" !== l && (a.transitionStart(s, l), a.transitionEnd(s, l)), !1;
                            if (o.cssMode) {
                                let e = a.isHorizontal(),
                                    s = h ? b : -b;
                                if (0 === t) {
                                    let t = a.virtual && a.params.virtual.enabled;
                                    t && ((a.wrapperEl.style.scrollSnapType = "none"), (a._immediateVirtual = !0)),
                                        (f[e ? "scrollLeft" : "scrollTop"] = s),
                                        t &&
                                            requestAnimationFrame(() => {
                                                (a.wrapperEl.style.scrollSnapType = ""), (a._swiperImmediateVirtual = !1);
                                            });
                                } else {
                                    if (!a.support.smoothScroll) return E({ swiper: a, targetPosition: s, side: e ? "left" : "top" }), !0;
                                    f.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
                                }
                                return !0;
                            }
                            return (
                                a.setTransition(t),
                                a.setTranslate(b),
                                a.updateActiveIndex(n),
                                a.updateSlidesClasses(),
                                a.emit("beforeTransitionStart", t, i),
                                a.transitionStart(s, l),
                                0 === t
                                    ? a.transitionEnd(s, l)
                                    : a.animating ||
                                      ((a.animating = !0),
                                      a.onSlideToWrapperTransitionEnd ||
                                          (a.onSlideToWrapperTransitionEnd = function (e) {
                                              a &&
                                                  !a.destroyed &&
                                                  e.target === this &&
                                                  (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                                                  a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd),
                                                  (a.onSlideToWrapperTransitionEnd = null),
                                                  delete a.onSlideToWrapperTransitionEnd,
                                                  a.transitionEnd(s, l));
                                          }),
                                      a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                                      a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd)),
                                !0
                            );
                        },
                        slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
                            if ("string" == typeof e) {
                                let t = parseInt(e, 10),
                                    s = isFinite(t);
                                if (!s) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                                e = t;
                            }
                            let r = e;
                            return this.params.loop && (r += this.loopedSlides), this.slideTo(r, t, s, i);
                        },
                        slideNext: function (e = this.params.speed, t = !0, s) {
                            let { animating: i, enabled: r, params: l } = this;
                            if (!r) return this;
                            let a = l.slidesPerGroup;
                            "auto" === l.slidesPerView && 1 === l.slidesPerGroup && l.slidesPerGroupAuto && (a = Math.max(this.slidesPerViewDynamic("current", !0), 1));
                            let n = this.activeIndex < l.slidesPerGroupSkip ? 1 : a;
                            if (l.loop) {
                                if (i && l.loopPreventsSlide) return !1;
                                this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
                            }
                            return l.rewind && this.isEnd ? this.slideTo(0, e, t, s) : this.slideTo(this.activeIndex + n, e, t, s);
                        },
                        slidePrev: function (e = this.params.speed, t = !0, s) {
                            let { params: i, animating: r, snapGrid: l, slidesGrid: a, rtlTranslate: n, enabled: o } = this;
                            if (!o) return this;
                            if (i.loop) {
                                if (r && i.loopPreventsSlide) return !1;
                                this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
                            }
                            let d = n ? this.translate : -this.translate;
                            function c(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                            }
                            let p = c(d),
                                u = l.map((e) => c(e)),
                                h = l[u.indexOf(p) - 1];
                            if (void 0 === h && i.cssMode) {
                                let e;
                                l.forEach((t, s) => {
                                    p >= t && (e = s);
                                }),
                                    void 0 !== e && (h = l[e > 0 ? e - 1 : e]);
                            }
                            let f = 0;
                            if (
                                (void 0 !== h &&
                                    ((f = a.indexOf(h)) < 0 && (f = this.activeIndex - 1),
                                    "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (f = Math.max((f = f - this.slidesPerViewDynamic("previous", !0) + 1), 0))),
                                i.rewind && this.isBeginning)
                            ) {
                                let i = this.params.virtual && this.params.virtual.enabled && this.virtual ? this.virtual.slides.length - 1 : this.slides.length - 1;
                                return this.slideTo(i, e, t, s);
                            }
                            return this.slideTo(f, e, t, s);
                        },
                        slideReset: function (e = this.params.speed, t = !0, s) {
                            return this.slideTo(this.activeIndex, e, t, s);
                        },
                        slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
                            let r = this.activeIndex,
                                l = Math.min(this.params.slidesPerGroupSkip, r),
                                a = l + Math.floor((r - l) / this.params.slidesPerGroup),
                                n = this.rtlTranslate ? this.translate : -this.translate;
                            if (n >= this.snapGrid[a]) {
                                let e = this.snapGrid[a],
                                    t = this.snapGrid[a + 1];
                                n - e > (t - e) * i && (r += this.params.slidesPerGroup);
                            } else {
                                let e = this.snapGrid[a - 1],
                                    t = this.snapGrid[a];
                                n - e <= (t - e) * i && (r -= this.params.slidesPerGroup);
                            }
                            return (r = Math.min((r = Math.max(r, 0)), this.slidesGrid.length - 1)), this.slideTo(r, e, t, s);
                        },
                        slideToClickedSlide: function () {
                            let e;
                            let t = this,
                                { params: s, $wrapperEl: i } = t,
                                r = "auto" === s.slidesPerView ? t.slidesPerViewDynamic() : s.slidesPerView,
                                l = t.clickedIndex;
                            if (s.loop) {
                                if (t.animating) return;
                                (e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
                                    s.centeredSlides
                                        ? l < t.loopedSlides - r / 2 || l > t.slides.length - t.loopedSlides + r / 2
                                            ? (t.loopFix(),
                                              (l = i.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]:not(.${s.slideDuplicateClass})`).eq(0).index()),
                                              w(() => {
                                                  t.slideTo(l);
                                              }))
                                            : t.slideTo(l)
                                        : l > t.slides.length - r
                                        ? (t.loopFix(),
                                          (l = i.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]:not(.${s.slideDuplicateClass})`).eq(0).index()),
                                          w(() => {
                                              t.slideTo(l);
                                          }))
                                        : t.slideTo(l);
                            } else t.slideTo(l);
                        },
                    },
                    loop: {
                        loopCreate: function () {
                            let e = d(),
                                { params: t, $wrapperEl: s } = this,
                                i = s.children().length > 0 ? m(s.children()[0].parentNode) : s;
                            i.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
                            let r = i.children(`.${t.slideClass}`);
                            if (t.loopFillGroupWithBlank) {
                                let s = t.slidesPerGroup - (r.length % t.slidesPerGroup);
                                if (s !== t.slidesPerGroup) {
                                    for (let r = 0; r < s; r += 1) {
                                        let s = m(e.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                                        i.append(s);
                                    }
                                    r = i.children(`.${t.slideClass}`);
                                }
                            }
                            "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = r.length),
                                (this.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10))),
                                (this.loopedSlides += t.loopAdditionalSlides),
                                this.loopedSlides > r.length && this.params.loopedSlidesLimit && (this.loopedSlides = r.length);
                            let l = [],
                                a = [];
                            r.each((e, t) => {
                                let s = m(e);
                                s.attr("data-swiper-slide-index", t);
                            });
                            for (let e = 0; e < this.loopedSlides; e += 1) {
                                let t = e - Math.floor(e / r.length) * r.length;
                                a.push(r.eq(t)[0]), l.unshift(r.eq(r.length - t - 1)[0]);
                            }
                            for (let e = 0; e < a.length; e += 1) i.append(m(a[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
                            for (let e = l.length - 1; e >= 0; e -= 1) i.prepend(m(l[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
                        },
                        loopFix: function () {
                            let e;
                            this.emit("beforeLoopFix");
                            let { activeIndex: t, slides: s, loopedSlides: i, allowSlidePrev: r, allowSlideNext: l, snapGrid: a, rtlTranslate: n } = this;
                            (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
                            let o = -a[t],
                                d = o - this.getTranslate();
                            if (t < i) {
                                e = s.length - 3 * i + t + i;
                                let r = this.slideTo(e, 0, !1, !0);
                                r && 0 !== d && this.setTranslate((n ? -this.translate : this.translate) - d);
                            } else if (t >= s.length - i) {
                                e = -s.length + t + i + i;
                                let r = this.slideTo(e, 0, !1, !0);
                                r && 0 !== d && this.setTranslate((n ? -this.translate : this.translate) - d);
                            }
                            (this.allowSlidePrev = r), (this.allowSlideNext = l), this.emit("loopFix");
                        },
                        loopDestroy: function () {
                            let { $wrapperEl: e, params: t, slides: s } = this;
                            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index");
                        },
                    },
                    grabCursor: {
                        setGrabCursor: function (e) {
                            if (this.support.touch || !this.params.simulateTouch || (this.params.watchOverflow && this.isLocked) || this.params.cssMode) return;
                            let t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                            (t.style.cursor = "move"), (t.style.cursor = e ? "grabbing" : "grab");
                        },
                        unsetGrabCursor: function () {
                            this.support.touch || (this.params.watchOverflow && this.isLocked) || this.params.cssMode || (this["container" === this.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
                        },
                    },
                    events: {
                        attachEvents: function () {
                            let e = d(),
                                { params: t, support: s } = this;
                            (this.onTouchStart = k.bind(this)),
                                (this.onTouchMove = $.bind(this)),
                                (this.onTouchEnd = P.bind(this)),
                                t.cssMode && (this.onScroll = z.bind(this)),
                                (this.onClick = L.bind(this)),
                                s.touch && !_ && (e.addEventListener("touchstart", A), (_ = !0)),
                                D(this, "on");
                        },
                        detachEvents: function () {
                            D(this, "off");
                        },
                    },
                    breakpoints: {
                        setBreakpoint: function () {
                            let e = this,
                                { activeIndex: t, initialized: s, loopedSlides: i = 0, params: r, $el: l } = e,
                                a = r.breakpoints;
                            if (!a || (a && 0 === Object.keys(a).length)) return;
                            let n = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                            if (!n || e.currentBreakpoint === n) return;
                            let o = n in a ? a[n] : void 0,
                                d = o || e.originalParams,
                                c = I(e, r),
                                p = I(e, d),
                                u = r.enabled;
                            c && !p
                                ? (l.removeClass(`${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`), e.emitContainerClasses())
                                : !c &&
                                  p &&
                                  (l.addClass(`${r.containerModifierClass}grid`),
                                  ((d.grid.fill && "column" === d.grid.fill) || (!d.grid.fill && "column" === r.grid.fill)) && l.addClass(`${r.containerModifierClass}grid-column`),
                                  e.emitContainerClasses()),
                                ["navigation", "pagination", "scrollbar"].forEach((t) => {
                                    let s = r[t] && r[t].enabled,
                                        i = d[t] && d[t].enabled;
                                    s && !i && e[t].disable(), !s && i && e[t].enable();
                                });
                            let h = d.direction && d.direction !== r.direction,
                                f = r.loop && (d.slidesPerView !== r.slidesPerView || h);
                            h && s && e.changeDirection(), S(e.params, d);
                            let m = e.params.enabled;
                            Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
                                u && !m ? e.disable() : !u && m && e.enable(),
                                (e.currentBreakpoint = n),
                                e.emit("_beforeBreakpoint", d),
                                f && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)),
                                e.emit("breakpoint", d);
                        },
                        getBreakpoint: function (e, t = "window", s) {
                            if (!e || ("container" === t && !s)) return;
                            let i = !1,
                                r = p(),
                                l = "window" === t ? r.innerHeight : s.clientHeight,
                                a = Object.keys(e).map((e) => {
                                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                                        let t = parseFloat(e.substr(1));
                                        return { value: l * t, point: e };
                                    }
                                    return { value: e, point: e };
                                });
                            a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let e = 0; e < a.length; e += 1) {
                                let { point: l, value: n } = a[e];
                                "window" === t ? r.matchMedia(`(min-width: ${n}px)`).matches && (i = l) : n <= s.clientWidth && (i = l);
                            }
                            return i || "max";
                        },
                    },
                    checkOverflow: {
                        checkOverflow: function () {
                            let { isLocked: e, params: t } = this,
                                { slidesOffsetBefore: s } = t;
                            if (s) {
                                let e = this.slides.length - 1,
                                    t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * s;
                                this.isLocked = this.size > t;
                            } else this.isLocked = 1 === this.snapGrid.length;
                            !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked),
                                !0 === t.allowSlidePrev && (this.allowSlidePrev = !this.isLocked),
                                e && e !== this.isLocked && (this.isEnd = !1),
                                e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock");
                        },
                    },
                    classes: {
                        addClasses: function () {
                            let { classNames: e, params: t, rtl: s, $el: i, device: r, support: l } = this,
                                a = (function (e, t) {
                                    let s = [];
                                    return (
                                        e.forEach((e) => {
                                            "object" == typeof e
                                                ? Object.keys(e).forEach((i) => {
                                                      e[i] && s.push(t + i);
                                                  })
                                                : "string" == typeof e && s.push(t + e);
                                        }),
                                        s
                                    );
                                })(
                                    [
                                        "initialized",
                                        t.direction,
                                        { "pointer-events": !l.touch },
                                        { "free-mode": this.params.freeMode && t.freeMode.enabled },
                                        { autoheight: t.autoHeight },
                                        { rtl: s },
                                        { grid: t.grid && t.grid.rows > 1 },
                                        { "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill },
                                        { android: r.android },
                                        { ios: r.ios },
                                        { "css-mode": t.cssMode },
                                        { centered: t.cssMode && t.centeredSlides },
                                        { "watch-progress": t.watchSlidesProgress },
                                    ],
                                    t.containerModifierClass
                                );
                            e.push(...a), i.addClass([...e].join(" ")), this.emitContainerClasses();
                        },
                        removeClasses: function () {
                            let { $el: e, classNames: t } = this;
                            e.removeClass(t.join(" ")), this.emitContainerClasses();
                        },
                    },
                    images: {
                        loadImage: function (e, t, s, i, r, l) {
                            let a;
                            let n = p();
                            function o() {
                                l && l();
                            }
                            let d = m(e).parent("picture")[0];
                            d || (e.complete && r) ? o() : t ? (((a = new n.Image()).onload = o), (a.onerror = o), i && (a.sizes = i), s && (a.srcset = s), t && (a.src = t)) : o();
                        },
                        preloadImages: function () {
                            let e = this;
                            function t() {
                                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                                let i = e.imagesToLoad[s];
                                e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t);
                            }
                        },
                    },
                },
                G = {};
            class j {
                constructor(...e) {
                    let t, s;
                    if (
                        (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? (s = e[0]) : ([t, s] = e), s || (s = {}), (s = S({}, s)), t && !s.el && (s.el = t), s.el && m(s.el).length > 1)
                    ) {
                        let e = [];
                        return (
                            m(s.el).each((t) => {
                                let i = S({}, s, { el: t });
                                e.push(new j(i));
                            }),
                            e
                        );
                    }
                    let i = this;
                    (i.__swiper__ = !0),
                        (i.support = x()),
                        (i.device = (function (e = {}) {
                            return (
                                r ||
                                    (r = (function ({ userAgent: e } = {}) {
                                        let t = x(),
                                            s = p(),
                                            i = s.navigator.platform,
                                            r = e || s.navigator.userAgent,
                                            l = { ios: !1, android: !1 },
                                            a = s.screen.width,
                                            n = s.screen.height,
                                            o = r.match(/(Android);?[\s\/]+([\d.]+)?/),
                                            d = r.match(/(iPad).*OS\s([\d_]+)/),
                                            c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                                            u = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                                            h = "MacIntel" === i;
                                        return (
                                            !d &&
                                                h &&
                                                t.touch &&
                                                ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${a}x${n}`) >= 0 &&
                                                ((d = r.match(/(Version)\/([\d.]+)/)) || (d = [0, 1, "13_0_0"]), (h = !1)),
                                            o && "Win32" !== i && ((l.os = "android"), (l.android = !0)),
                                            (d || u || c) && ((l.os = "ios"), (l.ios = !0)),
                                            l
                                        );
                                    })(e)),
                                r
                            );
                        })({ userAgent: s.userAgent })),
                        (i.browser =
                            (l ||
                                (l = (function () {
                                    let e = p();
                                    return {
                                        isSafari: (function () {
                                            let t = e.navigator.userAgent.toLowerCase();
                                            return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android");
                                        })(),
                                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                                    };
                                })()),
                            l)),
                        (i.eventsListeners = {}),
                        (i.eventsAnyListeners = []),
                        (i.modules = [...i.__modules__]),
                        s.modules && Array.isArray(s.modules) && i.modules.push(...s.modules);
                    let a = {};
                    i.modules.forEach((e) => {
                        var t;
                        e({
                            swiper: i,
                            extendParams:
                                ((t = s),
                                function (e = {}) {
                                    let s = Object.keys(e)[0],
                                        i = e[s];
                                    if ("object" != typeof i || null === i || (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 && !0 === t[s] && (t[s] = { auto: !0 }), !(s in t && "enabled" in i))) {
                                        S(a, e);
                                        return;
                                    }
                                    !0 === t[s] && (t[s] = { enabled: !0 }), "object" != typeof t[s] || "enabled" in t[s] || (t[s].enabled = !0), t[s] || (t[s] = { enabled: !1 }), S(a, e);
                                }),
                            on: i.on.bind(i),
                            once: i.once.bind(i),
                            off: i.off.bind(i),
                            emit: i.emit.bind(i),
                        });
                    });
                    let n = S({}, N, a);
                    return (
                        (i.params = S({}, n, G, s)),
                        (i.originalParams = S({}, i.params)),
                        (i.passedParams = S({}, s)),
                        i.params &&
                            i.params.on &&
                            Object.keys(i.params.on).forEach((e) => {
                                i.on(e, i.params.on[e]);
                            }),
                        i.params && i.params.onAny && i.onAny(i.params.onAny),
                        (i.$ = m),
                        Object.assign(i, {
                            enabled: i.params.enabled,
                            el: t,
                            classNames: [],
                            slides: m(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: () => "horizontal" === i.params.direction,
                            isVertical: () => "vertical" === i.params.direction,
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: i.params.allowSlideNext,
                            allowSlidePrev: i.params.allowSlidePrev,
                            touchEvents:
                                ((i.touchEventsTouch = { start: "touchstart", move: "touchmove", end: "touchend", cancel: "touchcancel" }),
                                (i.touchEventsDesktop = { start: "pointerdown", move: "pointermove", end: "pointerup" }),
                                i.support.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                focusableElements: i.params.focusableElements,
                                lastClickTime: C(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0,
                            },
                            allowClick: !0,
                            allowTouchMove: i.params.allowTouchMove,
                            touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                            imagesToLoad: [],
                            imagesLoaded: 0,
                        }),
                        i.emit("_swiper"),
                        i.params.init && i.init(),
                        i
                    );
                }
                enable() {
                    this.enabled || ((this.enabled = !0), this.params.grabCursor && this.setGrabCursor(), this.emit("enable"));
                }
                disable() {
                    this.enabled && ((this.enabled = !1), this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"));
                }
                setProgress(e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    let s = this.minTranslate(),
                        i = this.maxTranslate(),
                        r = (i - s) * e + s;
                    this.translateTo(r, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses();
                }
                emitContainerClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = e.el.className.split(" ").filter((t) => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "));
                }
                getSlideClasses(e) {
                    let t = this;
                    return t.destroyed
                        ? ""
                        : e.className
                              .split(" ")
                              .filter((e) => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))
                              .join(" ");
                }
                emitSlidesClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = [];
                    e.slides.each((s) => {
                        let i = e.getSlideClasses(s);
                        t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
                    }),
                        e.emit("_slideClasses", t);
                }
                slidesPerViewDynamic(e = "current", t = !1) {
                    let { params: s, slides: i, slidesGrid: r, slidesSizesGrid: l, size: a, activeIndex: n } = this,
                        o = 1;
                    if (s.centeredSlides) {
                        let e,
                            t = i[n].swiperSlideSize;
                        for (let s = n + 1; s < i.length; s += 1) i[s] && !e && ((t += i[s].swiperSlideSize), (o += 1), t > a && (e = !0));
                        for (let s = n - 1; s >= 0; s -= 1) i[s] && !e && ((t += i[s].swiperSlideSize), (o += 1), t > a && (e = !0));
                    } else if ("current" === e)
                        for (let e = n + 1; e < i.length; e += 1) {
                            let s = t ? r[e] + l[e] - r[n] < a : r[e] - r[n] < a;
                            s && (o += 1);
                        }
                    else
                        for (let e = n - 1; e >= 0; e -= 1) {
                            let t = r[n] - r[e] < a;
                            t && (o += 1);
                        }
                    return o;
                }
                update() {
                    let e = this;
                    if (!e || e.destroyed) return;
                    let { snapGrid: t, params: s } = e;
                    function i() {
                        let t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
                    }
                    s.breakpoints && e.setBreakpoint(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        e.params.freeMode && e.params.freeMode.enabled
                            ? (i(), e.params.autoHeight && e.updateAutoHeight())
                            : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || i(),
                        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                        e.emit("update");
                }
                changeDirection(e, t = !0) {
                    let s = this.params.direction;
                    return (
                        e || (e = "horizontal" === s ? "vertical" : "horizontal"),
                        e === s ||
                            ("horizontal" !== e && "vertical" !== e) ||
                            (this.$el.removeClass(`${this.params.containerModifierClass}${s}`).addClass(`${this.params.containerModifierClass}${e}`),
                            this.emitContainerClasses(),
                            (this.params.direction = e),
                            this.slides.each((t) => {
                                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
                            }),
                            this.emit("changeDirection"),
                            t && this.update()),
                        this
                    );
                }
                changeLanguageDirection(e) {
                    (!this.rtl || "rtl" !== e) &&
                        (this.rtl || "ltr" !== e) &&
                        ((this.rtl = "rtl" === e),
                        (this.rtlTranslate = "horizontal" === this.params.direction && this.rtl),
                        this.rtl ? (this.$el.addClass(`${this.params.containerModifierClass}rtl`), (this.el.dir = "rtl")) : (this.$el.removeClass(`${this.params.containerModifierClass}rtl`), (this.el.dir = "ltr")),
                        this.update());
                }
                mount(e) {
                    let t = this;
                    if (t.mounted) return !0;
                    let s = m(e || t.params.el);
                    if (!(e = s[0])) return !1;
                    e.swiper = t;
                    let i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`,
                        r = (() => {
                            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                                let t = m(e.shadowRoot.querySelector(i()));
                                return (t.children = (e) => s.children(e)), t;
                            }
                            return s.children ? s.children(i()) : m(s).children(i());
                        })();
                    if (0 === r.length && t.params.createElements) {
                        let e = d(),
                            i = e.createElement("div");
                        (r = m(i)),
                            (i.className = t.params.wrapperClass),
                            s.append(i),
                            s.children(`.${t.params.slideClass}`).each((e) => {
                                r.append(e);
                            });
                    }
                    return (
                        Object.assign(t, {
                            $el: s,
                            el: e,
                            $wrapperEl: r,
                            wrapperEl: r[0],
                            mounted: !0,
                            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                            wrongRTL: "-webkit-box" === r.css("display"),
                        }),
                        !0
                    );
                }
                init(e) {
                    if (this.initialized) return this;
                    let t = this.mount(e);
                    return (
                        !1 === t ||
                            (this.emit("beforeInit"),
                            this.params.breakpoints && this.setBreakpoint(),
                            this.addClasses(),
                            this.params.loop && this.loopCreate(),
                            this.updateSize(),
                            this.updateSlides(),
                            this.params.watchOverflow && this.checkOverflow(),
                            this.params.grabCursor && this.enabled && this.setGrabCursor(),
                            this.params.preloadImages && this.preloadImages(),
                            this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit, !1, !0) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit, !1, !0),
                            this.attachEvents(),
                            (this.initialized = !0),
                            this.emit("init"),
                            this.emit("afterInit")),
                        this
                    );
                }
                destroy(e = !0, t = !0) {
                    let s = this,
                        { params: i, $el: r, $wrapperEl: l, slides: a } = s;
                    return (
                        void 0 === s.params ||
                            s.destroyed ||
                            (s.emit("beforeDestroy"),
                            (s.initialized = !1),
                            s.detachEvents(),
                            i.loop && s.loopDestroy(),
                            t &&
                                (s.removeClasses(),
                                r.removeAttr("style"),
                                l.removeAttr("style"),
                                a && a.length && a.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                            s.emit("destroy"),
                            Object.keys(s.eventsListeners).forEach((e) => {
                                s.off(e);
                            }),
                            !1 !== e &&
                                ((s.$el[0].swiper = null),
                                (function (e) {
                                    Object.keys(e).forEach((t) => {
                                        try {
                                            e[t] = null;
                                        } catch (e) {}
                                        try {
                                            delete e[t];
                                        } catch (e) {}
                                    });
                                })(s)),
                            (s.destroyed = !0)),
                        null
                    );
                }
                static extendDefaults(e) {
                    S(G, e);
                }
                static get extendedDefaults() {
                    return G;
                }
                static get defaults() {
                    return N;
                }
                static installModule(e) {
                    j.prototype.__modules__ || (j.prototype.__modules__ = []);
                    let t = j.prototype.__modules__;
                    "function" == typeof e && 0 > t.indexOf(e) && t.push(e);
                }
                static use(e) {
                    return Array.isArray(e) ? e.forEach((e) => j.installModule(e)) : j.installModule(e), j;
                }
            }
            Object.keys(B).forEach((e) => {
                Object.keys(B[e]).forEach((t) => {
                    j.prototype[t] = B[e][t];
                });
            }),
                j.use([
                    function ({ swiper: e, on: t, emit: s }) {
                        let i = p(),
                            r = null,
                            l = null,
                            a = () => {
                                e && !e.destroyed && e.initialized && (s("beforeResize"), s("resize"));
                            },
                            n = () => {
                                e &&
                                    !e.destroyed &&
                                    e.initialized &&
                                    (r = new ResizeObserver((t) => {
                                        l = i.requestAnimationFrame(() => {
                                            let { width: s, height: i } = e,
                                                r = s,
                                                l = i;
                                            t.forEach(({ contentBoxSize: t, contentRect: s, target: i }) => {
                                                (i && i !== e.el) || ((r = s ? s.width : (t[0] || t).inlineSize), (l = s ? s.height : (t[0] || t).blockSize));
                                            }),
                                                (r !== s || l !== i) && a();
                                        });
                                    })).observe(e.el);
                            },
                            o = () => {
                                l && i.cancelAnimationFrame(l), r && r.unobserve && e.el && (r.unobserve(e.el), (r = null));
                            },
                            d = () => {
                                e && !e.destroyed && e.initialized && s("orientationchange");
                            };
                        t("init", () => {
                            if (e.params.resizeObserver && void 0 !== i.ResizeObserver) {
                                n();
                                return;
                            }
                            i.addEventListener("resize", a), i.addEventListener("orientationchange", d);
                        }),
                            t("destroy", () => {
                                o(), i.removeEventListener("resize", a), i.removeEventListener("orientationchange", d);
                            });
                    },
                    function ({ swiper: e, extendParams: t, on: s, emit: i }) {
                        let r = [],
                            l = p(),
                            a = (e, t = {}) => {
                                let s = l.MutationObserver || l.WebkitMutationObserver,
                                    a = new s((e) => {
                                        if (1 === e.length) {
                                            i("observerUpdate", e[0]);
                                            return;
                                        }
                                        let t = function () {
                                            i("observerUpdate", e[0]);
                                        };
                                        l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0);
                                    });
                                a.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), r.push(a);
                            };
                        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
                            s("init", () => {
                                if (e.params.observer) {
                                    if (e.params.observeParents) {
                                        let t = e.$el.parents();
                                        for (let e = 0; e < t.length; e += 1) a(t[e]);
                                    }
                                    a(e.$el[0], { childList: e.params.observeSlideChildren }), a(e.$wrapperEl[0], { attributes: !1 });
                                }
                            }),
                            s("destroy", () => {
                                r.forEach((e) => {
                                    e.disconnect();
                                }),
                                    r.splice(0, r.length);
                            });
                    },
                ]);
            var H = j;
            function F(e, t, s, i) {
                let r = d();
                return (
                    e.params.createElements &&
                        Object.keys(i).forEach((l) => {
                            if (!s[l] && !0 === s.auto) {
                                let a = e.$el.children(`.${i[l]}`)[0];
                                a || (((a = r.createElement("div")).className = i[l]), e.$el.append(a)), (s[l] = a), (t[l] = a);
                            }
                        }),
                    s
                );
            }
            function R({ swiper: e, extendParams: t, on: s, emit: i }) {
                function r(t) {
                    let s;
                    return t && ((s = m(t)), e.params.uniqueNavElements && "string" == typeof t && s.length > 1 && 1 === e.$el.find(t).length && (s = e.$el.find(t))), s;
                }
                function l(t, s) {
                    let i = e.params.navigation;
                    t &&
                        t.length > 0 &&
                        (t[s ? "addClass" : "removeClass"](i.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](i.lockClass));
                }
                function a() {
                    if (e.params.loop) return;
                    let { $nextEl: t, $prevEl: s } = e.navigation;
                    l(s, e.isBeginning && !e.params.rewind), l(t, e.isEnd && !e.params.rewind);
                }
                function n(t) {
                    t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), i("navigationPrev"));
                }
                function o(t) {
                    t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), i("navigationNext"));
                }
                function d() {
                    let t = e.params.navigation;
                    if (((e.params.navigation = F(e, e.originalParams.navigation, e.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" })), !(t.nextEl || t.prevEl))) return;
                    let s = r(t.nextEl),
                        i = r(t.prevEl);
                    s && s.length > 0 && s.on("click", o),
                        i && i.length > 0 && i.on("click", n),
                        Object.assign(e.navigation, { $nextEl: s, nextEl: s && s[0], $prevEl: i, prevEl: i && i[0] }),
                        !e.enabled && (s && s.addClass(t.lockClass), i && i.addClass(t.lockClass));
                }
                function c() {
                    let { $nextEl: t, $prevEl: s } = e.navigation;
                    t && t.length && (t.off("click", o), t.removeClass(e.params.navigation.disabledClass)), s && s.length && (s.off("click", n), s.removeClass(e.params.navigation.disabledClass));
                }
                t({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled",
                    },
                }),
                    (e.navigation = { nextEl: null, $nextEl: null, prevEl: null, $prevEl: null }),
                    s("init", () => {
                        !1 === e.params.navigation.enabled ? p() : (d(), a());
                    }),
                    s("toEdge fromEdge lock unlock", () => {
                        a();
                    }),
                    s("destroy", () => {
                        c();
                    }),
                    s("enable disable", () => {
                        let { $nextEl: t, $prevEl: s } = e.navigation;
                        t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), s && s[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass);
                    }),
                    s("click", (t, s) => {
                        let { $nextEl: r, $prevEl: l } = e.navigation,
                            a = s.target;
                        if (e.params.navigation.hideOnClick && !m(a).is(l) && !m(a).is(r)) {
                            let t;
                            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === a || e.pagination.el.contains(a))) return;
                            r ? (t = r.hasClass(e.params.navigation.hiddenClass)) : l && (t = l.hasClass(e.params.navigation.hiddenClass)),
                                !0 === t ? i("navigationShow") : i("navigationHide"),
                                r && r.toggleClass(e.params.navigation.hiddenClass),
                                l && l.toggleClass(e.params.navigation.hiddenClass);
                        }
                    });
                let p = () => {
                    e.$el.addClass(e.params.navigation.navigationDisabledClass), c();
                };
                Object.assign(e.navigation, {
                    enable: () => {
                        e.$el.removeClass(e.params.navigation.navigationDisabledClass), d(), a();
                    },
                    disable: p,
                    update: a,
                    init: d,
                    destroy: c,
                });
            }
            function V(e = "") {
                return `.${e
                    .trim()
                    .replace(/([\.:!\/])/g, "\\$1")
                    .replace(/ /g, ".")}`;
            }
            function W({ swiper: e, extendParams: t, on: s, emit: i }) {
                let r;
                let l = "swiper-pagination";
                t({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: (e) => e,
                        formatFractionTotal: (e) => e,
                        bulletClass: `${l}-bullet`,
                        bulletActiveClass: `${l}-bullet-active`,
                        modifierClass: `${l}-`,
                        currentClass: `${l}-current`,
                        totalClass: `${l}-total`,
                        hiddenClass: `${l}-hidden`,
                        progressbarFillClass: `${l}-progressbar-fill`,
                        progressbarOppositeClass: `${l}-progressbar-opposite`,
                        clickableClass: `${l}-clickable`,
                        lockClass: `${l}-lock`,
                        horizontalClass: `${l}-horizontal`,
                        verticalClass: `${l}-vertical`,
                        paginationDisabledClass: `${l}-disabled`,
                    },
                }),
                    (e.pagination = { el: null, $el: null, bullets: [] });
                let a = 0;
                function n() {
                    return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length;
                }
                function o(t, s) {
                    let { bulletActiveClass: i } = e.params.pagination;
                    t[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`);
                }
                function d() {
                    let t;
                    let s = e.rtl,
                        l = e.params.pagination;
                    if (n()) return;
                    let d = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        c = e.pagination.$el,
                        p = e.params.loop ? Math.ceil((d - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (
                        (e.params.loop
                            ? ((t = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > d - 1 - 2 * e.loopedSlides && (t -= d - 2 * e.loopedSlides),
                              t > p - 1 && (t -= p),
                              t < 0 && "bullets" !== e.params.paginationType && (t = p + t))
                            : (t = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
                        "bullets" === l.type && e.pagination.bullets && e.pagination.bullets.length > 0)
                    ) {
                        let i, n, d;
                        let p = e.pagination.bullets;
                        if (
                            (l.dynamicBullets &&
                                ((r = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                                c.css(e.isHorizontal() ? "width" : "height", `${r * (l.dynamicMainBullets + 4)}px`),
                                l.dynamicMainBullets > 1 && void 0 !== e.previousIndex && ((a += t - (e.previousIndex - e.loopedSlides || 0)) > l.dynamicMainBullets - 1 ? (a = l.dynamicMainBullets - 1) : a < 0 && (a = 0)),
                                (d = ((n = (i = Math.max(t - a, 0)) + (Math.min(p.length, l.dynamicMainBullets) - 1)) + i) / 2)),
                            p.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e) => `${l.bulletActiveClass}${e}`).join(" ")),
                            c.length > 1)
                        )
                            p.each((e) => {
                                let s = m(e),
                                    r = s.index();
                                r === t && s.addClass(l.bulletActiveClass), l.dynamicBullets && (r >= i && r <= n && s.addClass(`${l.bulletActiveClass}-main`), r === i && o(s, "prev"), r === n && o(s, "next"));
                            });
                        else {
                            let s = p.eq(t),
                                r = s.index();
                            if ((s.addClass(l.bulletActiveClass), l.dynamicBullets)) {
                                let t = p.eq(i),
                                    s = p.eq(n);
                                for (let e = i; e <= n; e += 1) p.eq(e).addClass(`${l.bulletActiveClass}-main`);
                                if (e.params.loop) {
                                    if (r >= p.length) {
                                        for (let e = l.dynamicMainBullets; e >= 0; e -= 1) p.eq(p.length - e).addClass(`${l.bulletActiveClass}-main`);
                                        p.eq(p.length - l.dynamicMainBullets - 1).addClass(`${l.bulletActiveClass}-prev`);
                                    } else o(t, "prev"), o(s, "next");
                                } else o(t, "prev"), o(s, "next");
                            }
                        }
                        if (l.dynamicBullets) {
                            let t = Math.min(p.length, l.dynamicMainBullets + 4),
                                i = (r * t - r) / 2 - d * r;
                            p.css(e.isHorizontal() ? (s ? "right" : "left") : "top", `${i}px`);
                        }
                    }
                    if (("fraction" === l.type && (c.find(V(l.currentClass)).text(l.formatFractionCurrent(t + 1)), c.find(V(l.totalClass)).text(l.formatFractionTotal(p))), "progressbar" === l.type)) {
                        let s;
                        s = l.progressbarOpposite ? (e.isHorizontal() ? "vertical" : "horizontal") : e.isHorizontal() ? "horizontal" : "vertical";
                        let i = (t + 1) / p,
                            r = 1,
                            a = 1;
                        "horizontal" === s ? (r = i) : (a = i), c.find(V(l.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${r}) scaleY(${a})`).transition(e.params.speed);
                    }
                    "custom" === l.type && l.renderCustom ? (c.html(l.renderCustom(e, t + 1, p)), i("paginationRender", c[0])) : i("paginationUpdate", c[0]),
                        e.params.watchOverflow && e.enabled && c[e.isLocked ? "addClass" : "removeClass"](l.lockClass);
                }
                function c() {
                    let t = e.params.pagination;
                    if (n()) return;
                    let s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        r = e.pagination.$el,
                        l = "";
                    if ("bullets" === t.type) {
                        let i = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && i > s && (i = s);
                        for (let s = 0; s < i; s += 1) t.renderBullet ? (l += t.renderBullet.call(e, s, t.bulletClass)) : (l += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
                        r.html(l), (e.pagination.bullets = r.find(V(t.bulletClass)));
                    }
                    "fraction" === t.type && ((l = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`), r.html(l)),
                        "progressbar" === t.type && ((l = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`), r.html(l)),
                        "custom" !== t.type && i("paginationRender", e.pagination.$el[0]);
                }
                function p() {
                    e.params.pagination = F(e, e.originalParams.pagination, e.params.pagination, { el: "swiper-pagination" });
                    let t = e.params.pagination;
                    if (!t.el) return;
                    let s = m(t.el);
                    0 === s.length ||
                        (e.params.uniqueNavElements && "string" == typeof t.el && s.length > 1 && (s = e.$el.find(t.el)).length > 1 && (s = s.filter((t) => m(t).parents(".swiper")[0] === e.el)),
                        "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
                        s.addClass(t.modifierClass + t.type),
                        s.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
                        "bullets" === t.type && t.dynamicBullets && (s.addClass(`${t.modifierClass}${t.type}-dynamic`), (a = 0), t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                        "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass),
                        t.clickable &&
                            s.on("click", V(t.bulletClass), function (t) {
                                t.preventDefault();
                                let s = m(this).index() * e.params.slidesPerGroup;
                                e.params.loop && (s += e.loopedSlides), e.slideTo(s);
                            }),
                        Object.assign(e.pagination, { $el: s, el: s[0] }),
                        e.enabled || s.addClass(t.lockClass));
                }
                function u() {
                    let t = e.params.pagination;
                    if (n()) return;
                    let s = e.pagination.$el;
                    s.removeClass(t.hiddenClass),
                        s.removeClass(t.modifierClass + t.type),
                        s.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
                        e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass),
                        t.clickable && s.off("click", V(t.bulletClass));
                }
                s("init", () => {
                    !1 === e.params.pagination.enabled ? h() : (p(), c(), d());
                }),
                    s("activeIndexChange", () => {
                        e.params.loop ? d() : void 0 === e.snapIndex && d();
                    }),
                    s("snapIndexChange", () => {
                        e.params.loop || d();
                    }),
                    s("slidesLengthChange", () => {
                        e.params.loop && (c(), d());
                    }),
                    s("snapGridLengthChange", () => {
                        e.params.loop || (c(), d());
                    }),
                    s("destroy", () => {
                        u();
                    }),
                    s("enable disable", () => {
                        let { $el: t } = e.pagination;
                        t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass);
                    }),
                    s("lock unlock", () => {
                        d();
                    }),
                    s("click", (t, s) => {
                        let r = s.target,
                            { $el: l } = e.pagination;
                        if (e.params.pagination.el && e.params.pagination.hideOnClick && l && l.length > 0 && !m(r).hasClass(e.params.pagination.bulletClass)) {
                            if (e.navigation && ((e.navigation.nextEl && r === e.navigation.nextEl) || (e.navigation.prevEl && r === e.navigation.prevEl))) return;
                            let t = l.hasClass(e.params.pagination.hiddenClass);
                            !0 === t ? i("paginationShow") : i("paginationHide"), l.toggleClass(e.params.pagination.hiddenClass);
                        }
                    });
                let h = () => {
                    e.$el.addClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass), u();
                };
                Object.assign(e.pagination, {
                    enable: () => {
                        e.$el.removeClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass), p(), c(), d();
                    },
                    disable: h,
                    render: c,
                    update: d,
                    init: p,
                    destroy: u,
                });
            }
            function q({ swiper: e, extendParams: t, on: s, emit: i }) {
                let r, l, a, n;
                let o = d(),
                    c = !1,
                    p = null,
                    u = null;
                function h() {
                    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                    let { scrollbar: t, rtlTranslate: s, progress: i } = e,
                        { $dragEl: r, $el: n } = t,
                        o = e.params.scrollbar,
                        d = l,
                        c = (a - l) * i;
                    s ? ((c = -c) > 0 ? ((d = l - c), (c = 0)) : -c + l > a && (d = a + c)) : c < 0 ? ((d = l + c), (c = 0)) : c + l > a && (d = a - c),
                        e.isHorizontal() ? (r.transform(`translate3d(${c}px, 0, 0)`), (r[0].style.width = `${d}px`)) : (r.transform(`translate3d(0px, ${c}px, 0)`), (r[0].style.height = `${d}px`)),
                        o.hide &&
                            (clearTimeout(p),
                            (n[0].style.opacity = 1),
                            (p = setTimeout(() => {
                                (n[0].style.opacity = 0), n.transition(400);
                            }, 1e3)));
                }
                function f() {
                    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                    let { scrollbar: t } = e,
                        { $dragEl: s, $el: i } = t;
                    (s[0].style.width = ""),
                        (s[0].style.height = ""),
                        (a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight),
                        (n = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0))),
                        (l = "auto" === e.params.scrollbar.dragSize ? a * n : parseInt(e.params.scrollbar.dragSize, 10)),
                        e.isHorizontal() ? (s[0].style.width = `${l}px`) : (s[0].style.height = `${l}px`),
                        n >= 1 ? (i[0].style.display = "none") : (i[0].style.display = ""),
                        e.params.scrollbar.hide && (i[0].style.opacity = 0),
                        e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
                }
                function g(t) {
                    return e.isHorizontal() ? ("touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX) : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY;
                }
                function v(t) {
                    let s;
                    let { scrollbar: i, rtlTranslate: n } = e,
                        { $el: o } = i;
                    (s = Math.max(Math.min((s = (g(t) - o.offset()[e.isHorizontal() ? "left" : "top"] - (null !== r ? r : l / 2)) / (a - l)), 1), 0)), n && (s = 1 - s);
                    let d = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * s;
                    e.updateProgress(d), e.setTranslate(d), e.updateActiveIndex(), e.updateSlidesClasses();
                }
                function b(t) {
                    let s = e.params.scrollbar,
                        { scrollbar: l, $wrapperEl: a } = e,
                        { $el: n, $dragEl: o } = l;
                    (c = !0),
                        (r = t.target === o[0] || t.target === o ? g(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null),
                        t.preventDefault(),
                        t.stopPropagation(),
                        a.transition(100),
                        o.transition(100),
                        v(t),
                        clearTimeout(u),
                        n.transition(0),
                        s.hide && n.css("opacity", 1),
                        e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
                        i("scrollbarDragStart", t);
                }
                function C(t) {
                    let { scrollbar: s, $wrapperEl: r } = e,
                        { $el: l, $dragEl: a } = s;
                    c && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1), v(t), r.transition(0), l.transition(0), a.transition(0), i("scrollbarDragMove", t));
                }
                function T(t) {
                    let s = e.params.scrollbar,
                        { scrollbar: r, $wrapperEl: l } = e,
                        { $el: a } = r;
                    c &&
                        ((c = !1),
                        e.params.cssMode && (e.$wrapperEl.css("scroll-snap-type", ""), l.transition("")),
                        s.hide &&
                            (clearTimeout(u),
                            (u = w(() => {
                                a.css("opacity", 0), a.transition(400);
                            }, 1e3))),
                        i("scrollbarDragEnd", t),
                        s.snapOnRelease && e.slideToClosest());
                }
                function S(t) {
                    let { scrollbar: s, touchEventsTouch: i, touchEventsDesktop: r, params: l, support: a } = e,
                        n = s.$el;
                    if (!n) return;
                    let d = n[0],
                        c = !!a.passiveListener && !!l.passiveListeners && { passive: !1, capture: !1 },
                        p = !!a.passiveListener && !!l.passiveListeners && { passive: !0, capture: !1 };
                    if (!d) return;
                    let u = "on" === t ? "addEventListener" : "removeEventListener";
                    a.touch ? (d[u](i.start, b, c), d[u](i.move, C, c), d[u](i.end, T, p)) : (d[u](r.start, b, c), o[u](r.move, C, c), o[u](r.end, T, p));
                }
                function y() {
                    let { scrollbar: t, $el: s } = e;
                    e.params.scrollbar = F(e, e.originalParams.scrollbar, e.params.scrollbar, { el: "swiper-scrollbar" });
                    let i = e.params.scrollbar;
                    if (!i.el) return;
                    let r = m(i.el);
                    e.params.uniqueNavElements && "string" == typeof i.el && r.length > 1 && 1 === s.find(i.el).length && (r = s.find(i.el)), r.addClass(e.isHorizontal() ? i.horizontalClass : i.verticalClass);
                    let l = r.find(`.${e.params.scrollbar.dragClass}`);
                    0 === l.length && ((l = m(`<div class="${e.params.scrollbar.dragClass}"></div>`)), r.append(l)),
                        Object.assign(t, { $el: r, el: r[0], $dragEl: l, dragEl: l[0] }),
                        !i.draggable || (e.params.scrollbar.el && e.scrollbar.el && S("on")),
                        r && r[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
                }
                function E() {
                    let t = e.params.scrollbar,
                        s = e.scrollbar.$el;
                    s && s.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), e.params.scrollbar.el && e.scrollbar.el && S("off");
                }
                t({
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag",
                        scrollbarDisabledClass: "swiper-scrollbar-disabled",
                        horizontalClass: "swiper-scrollbar-horizontal",
                        verticalClass: "swiper-scrollbar-vertical",
                    },
                }),
                    (e.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
                    s("init", () => {
                        !1 === e.params.scrollbar.enabled ? x() : (y(), f(), h());
                    }),
                    s("update resize observerUpdate lock unlock", () => {
                        f();
                    }),
                    s("setTranslate", () => {
                        h();
                    }),
                    s("setTransition", (t, s) => {
                        e.params.scrollbar.el && e.scrollbar.el && e.scrollbar.$dragEl.transition(s);
                    }),
                    s("enable disable", () => {
                        let { $el: t } = e.scrollbar;
                        t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
                    }),
                    s("destroy", () => {
                        E();
                    });
                let x = () => {
                    e.$el.addClass(e.params.scrollbar.scrollbarDisabledClass), e.scrollbar.$el && e.scrollbar.$el.addClass(e.params.scrollbar.scrollbarDisabledClass), E();
                };
                Object.assign(e.scrollbar, {
                    enable: () => {
                        e.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass), e.scrollbar.$el && e.scrollbar.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass), y(), f(), h();
                    },
                    disable: x,
                    updateSize: f,
                    setTranslate: h,
                    init: y,
                    destroy: E,
                });
            }
            function X({ swiper: e, extendParams: t, on: s }) {
                function i(e, t) {
                    let s, i, r, l, a;
                    let n = (e, t) => {
                        for (l = -1, r = e.length; r - l > 1; ) e[(a = (r + l) >> 1)] <= t ? (l = a) : (r = a);
                        return r;
                    };
                    return (
                        (this.x = e),
                        (this.y = t),
                        (this.lastIndex = e.length - 1),
                        (this.interpolate = function (e) {
                            return e ? ((s = (i = n(this.x, e)) - 1), ((e - this.x[s]) * (this.y[i] - this.y[s])) / (this.x[i] - this.x[s]) + this.y[s]) : 0;
                        }),
                        this
                    );
                }
                function r() {
                    e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                }
                t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
                    (e.controller = { control: void 0 }),
                    s("beforeInit", () => {
                        e.controller.control = e.params.controller.control;
                    }),
                    s("update", () => {
                        r();
                    }),
                    s("resize", () => {
                        r();
                    }),
                    s("observerUpdate", () => {
                        r();
                    }),
                    s("setTranslate", (t, s, i) => {
                        e.controller.control && e.controller.setTranslate(s, i);
                    }),
                    s("setTransition", (t, s, i) => {
                        e.controller.control && e.controller.setTransition(s, i);
                    }),
                    Object.assign(e.controller, {
                        setTranslate: function (t, s) {
                            let r, l;
                            let a = e.controller.control,
                                n = e.constructor;
                            function o(t) {
                                let s = e.rtlTranslate ? -e.translate : e.translate;
                                "slide" === e.params.controller.by &&
                                    (e.controller.spline || (e.controller.spline = e.params.loop ? new i(e.slidesGrid, t.slidesGrid) : new i(e.snapGrid, t.snapGrid)), (l = -e.controller.spline.interpolate(-s))),
                                    (l && "container" !== e.params.controller.by) || ((r = (t.maxTranslate() - t.minTranslate()) / (e.maxTranslate() - e.minTranslate())), (l = (s - e.minTranslate()) * r + t.minTranslate())),
                                    e.params.controller.inverse && (l = t.maxTranslate() - l),
                                    t.updateProgress(l),
                                    t.setTranslate(l, e),
                                    t.updateActiveIndex(),
                                    t.updateSlidesClasses();
                            }
                            if (Array.isArray(a)) for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof n && o(a[e]);
                            else a instanceof n && s !== a && o(a);
                        },
                        setTransition: function (t, s) {
                            let i;
                            let r = e.constructor,
                                l = e.controller.control;
                            function a(s) {
                                s.setTransition(t, e),
                                    0 !== t &&
                                        (s.transitionStart(),
                                        s.params.autoHeight &&
                                            w(() => {
                                                s.updateAutoHeight();
                                            }),
                                        s.$wrapperEl.transitionEnd(() => {
                                            l && (s.params.loop && "slide" === e.params.controller.by && s.loopFix(), s.transitionEnd());
                                        }));
                            }
                            if (Array.isArray(l)) for (i = 0; i < l.length; i += 1) l[i] !== s && l[i] instanceof r && a(l[i]);
                            else l instanceof r && s !== l && a(l);
                        },
                    });
            }
            function Y({ swiper: e, extendParams: t, emit: s, once: i }) {
                t({ freeMode: { enabled: !1, momentum: !0, momentumRatio: 1, momentumBounce: !0, momentumBounceRatio: 1, momentumVelocityRatio: 1, sticky: !1, minimumVelocity: 0.02 } }),
                    Object.assign(e, {
                        freeMode: {
                            onTouchStart: function () {
                                let t = e.getTranslate();
                                e.setTranslate(t), e.setTransition(0), (e.touchEventsData.velocities.length = 0), e.freeMode.onTouchEnd({ currentPos: e.rtl ? e.translate : -e.translate });
                            },
                            onTouchMove: function () {
                                let { touchEventsData: t, touches: s } = e;
                                0 === t.velocities.length && t.velocities.push({ position: s[e.isHorizontal() ? "startX" : "startY"], time: t.touchStartTime }),
                                    t.velocities.push({ position: s[e.isHorizontal() ? "currentX" : "currentY"], time: C() });
                            },
                            onTouchEnd: function ({ currentPos: t }) {
                                let { params: r, $wrapperEl: l, rtlTranslate: a, snapGrid: n, touchEventsData: o } = e,
                                    d = C(),
                                    c = d - o.touchStartTime;
                                if (t < -e.minTranslate()) {
                                    e.slideTo(e.activeIndex);
                                    return;
                                }
                                if (t > -e.maxTranslate()) {
                                    e.slides.length < n.length ? e.slideTo(n.length - 1) : e.slideTo(e.slides.length - 1);
                                    return;
                                }
                                if (r.freeMode.momentum) {
                                    let t, d;
                                    if (o.velocities.length > 1) {
                                        let t = o.velocities.pop(),
                                            s = o.velocities.pop(),
                                            i = t.position - s.position,
                                            l = t.time - s.time;
                                        (e.velocity = i / l), (e.velocity /= 2), Math.abs(e.velocity) < r.freeMode.minimumVelocity && (e.velocity = 0), (l > 150 || C() - t.time > 300) && (e.velocity = 0);
                                    } else e.velocity = 0;
                                    (e.velocity *= r.freeMode.momentumVelocityRatio), (o.velocities.length = 0);
                                    let c = 1e3 * r.freeMode.momentumRatio,
                                        p = e.velocity * c,
                                        u = e.translate + p;
                                    a && (u = -u);
                                    let h = !1,
                                        f = 20 * Math.abs(e.velocity) * r.freeMode.momentumBounceRatio;
                                    if (u < e.maxTranslate())
                                        r.freeMode.momentumBounce ? (u + e.maxTranslate() < -f && (u = e.maxTranslate() - f), (t = e.maxTranslate()), (h = !0), (o.allowMomentumBounce = !0)) : (u = e.maxTranslate()),
                                            r.loop && r.centeredSlides && (d = !0);
                                    else if (u > e.minTranslate())
                                        r.freeMode.momentumBounce ? (u - e.minTranslate() > f && (u = e.minTranslate() + f), (t = e.minTranslate()), (h = !0), (o.allowMomentumBounce = !0)) : (u = e.minTranslate()),
                                            r.loop && r.centeredSlides && (d = !0);
                                    else if (r.freeMode.sticky) {
                                        let t;
                                        for (let e = 0; e < n.length; e += 1)
                                            if (n[e] > -u) {
                                                t = e;
                                                break;
                                            }
                                        u = -(u = Math.abs(n[t] - u) < Math.abs(n[t - 1] - u) || "next" === e.swipeDirection ? n[t] : n[t - 1]);
                                    }
                                    if (
                                        (d &&
                                            i("transitionEnd", () => {
                                                e.loopFix();
                                            }),
                                        0 !== e.velocity)
                                    ) {
                                        if (((c = a ? Math.abs((-u - e.translate) / e.velocity) : Math.abs((u - e.translate) / e.velocity)), r.freeMode.sticky)) {
                                            let t = Math.abs((a ? -u : u) - e.translate),
                                                s = e.slidesSizesGrid[e.activeIndex];
                                            c = t < s ? r.speed : t < 2 * s ? 1.5 * r.speed : 2.5 * r.speed;
                                        }
                                    } else if (r.freeMode.sticky) {
                                        e.slideToClosest();
                                        return;
                                    }
                                    r.freeMode.momentumBounce && h
                                        ? (e.updateProgress(t),
                                          e.setTransition(c),
                                          e.setTranslate(u),
                                          e.transitionStart(!0, e.swipeDirection),
                                          (e.animating = !0),
                                          l.transitionEnd(() => {
                                              e &&
                                                  !e.destroyed &&
                                                  o.allowMomentumBounce &&
                                                  (s("momentumBounce"),
                                                  e.setTransition(r.speed),
                                                  setTimeout(() => {
                                                      e.setTranslate(t),
                                                          l.transitionEnd(() => {
                                                              e && !e.destroyed && e.transitionEnd();
                                                          });
                                                  }, 0));
                                          }))
                                        : e.velocity
                                        ? (s("_freeModeNoMomentumRelease"),
                                          e.updateProgress(u),
                                          e.setTransition(c),
                                          e.setTranslate(u),
                                          e.transitionStart(!0, e.swipeDirection),
                                          e.animating ||
                                              ((e.animating = !0),
                                              l.transitionEnd(() => {
                                                  e && !e.destroyed && e.transitionEnd();
                                              })))
                                        : e.updateProgress(u),
                                        e.updateActiveIndex(),
                                        e.updateSlidesClasses();
                                } else if (r.freeMode.sticky) {
                                    e.slideToClosest();
                                    return;
                                } else r.freeMode && s("_freeModeNoMomentumRelease");
                                (!r.freeMode.momentum || c >= r.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
                            },
                        },
                    });
            }
            function U({ swiper: e, extendParams: t, on: s }) {
                t({ fadeEffect: { crossFade: !1, transformEl: null } }),
                    (function (e) {
                        let t;
                        let { effect: s, swiper: i, on: r, setTranslate: l, setTransition: a, overwriteParams: n, perspective: o, recreateShadows: d, getEffectParams: c } = e;
                        r("beforeInit", () => {
                            if (i.params.effect !== s) return;
                            i.classNames.push(`${i.params.containerModifierClass}${s}`), o && o() && i.classNames.push(`${i.params.containerModifierClass}3d`);
                            let e = n ? n() : {};
                            Object.assign(i.params, e), Object.assign(i.originalParams, e);
                        }),
                            r("setTranslate", () => {
                                i.params.effect === s && l();
                            }),
                            r("setTransition", (e, t) => {
                                i.params.effect === s && a(t);
                            }),
                            r("transitionEnd", () => {
                                i.params.effect === s &&
                                    d &&
                                    c &&
                                    c().slideShadows &&
                                    (i.slides.each((e) => {
                                        let t = i.$(e);
                                        t.find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove();
                                    }),
                                    d());
                            }),
                            r("virtualUpdate", () => {
                                i.params.effect === s &&
                                    (i.slides.length || (t = !0),
                                    requestAnimationFrame(() => {
                                        t && i.slides && i.slides.length && (l(), (t = !1));
                                    }));
                            });
                    })({
                        effect: "fade",
                        swiper: e,
                        on: s,
                        setTranslate: () => {
                            let { slides: t } = e,
                                s = e.params.fadeEffect;
                            for (let i = 0; i < t.length; i += 1) {
                                let t = e.slides.eq(i),
                                    r = t[0].swiperSlideOffset,
                                    l = -r;
                                e.params.virtualTranslate || (l -= e.translate);
                                let a = 0;
                                e.isHorizontal() || ((a = l), (l = 0));
                                let n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0),
                                    o = s.transformEl ? t.find(s.transformEl).css({ "backface-visibility": "hidden", "-webkit-backface-visibility": "hidden" }) : t;
                                o.css({ opacity: n }).transform(`translate3d(${l}px, ${a}px, 0px)`);
                            }
                        },
                        setTransition: (t) => {
                            let { transformEl: s } = e.params.fadeEffect,
                                i = s ? e.slides.find(s) : e.slides;
                            i.transition(t),
                                (function ({ swiper: e, duration: t, transformEl: s, allSlides: i }) {
                                    let { slides: r, activeIndex: l, $wrapperEl: a } = e;
                                    if (e.params.virtualTranslate && 0 !== t) {
                                        let t = !1;
                                        (i ? (s ? r.find(s) : r) : s ? r.eq(l).find(s) : r.eq(l)).transitionEnd(() => {
                                            if (t || !e || e.destroyed) return;
                                            (t = !0), (e.animating = !1);
                                            let s = ["webkitTransitionEnd", "transitionend"];
                                            for (let e = 0; e < s.length; e += 1) a.trigger(s[e]);
                                        });
                                    }
                                })({ swiper: e, duration: t, transformEl: s, allSlides: !0 });
                        },
                        overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !e.params.cssMode }),
                    });
            }
        },
    },
]);
