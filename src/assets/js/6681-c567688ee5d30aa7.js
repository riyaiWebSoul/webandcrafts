"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6681],
    {
        78704: function (t, e, i) {
            /**
             * @license React
             * use-sync-external-store-shim/with-selector.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var s = i(2265),
                o = i(26272),
                r =
                    "function" == typeof Object.is
                        ? Object.is
                        : function (t, e) {
                              return (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e);
                          },
                n = o.useSyncExternalStore,
                l = s.useRef,
                h = s.useEffect,
                a = s.useMemo,
                c = s.useDebugValue;
            e.useSyncExternalStoreWithSelector = function (t, e, i, s, o) {
                var u = l(null);
                if (null === u.current) {
                    var p = { hasValue: !1, value: null };
                    u.current = p;
                } else p = u.current;
                u = a(
                    function () {
                        function t(t) {
                            if (!h) {
                                if (((h = !0), (n = t), (t = s(t)), void 0 !== o && p.hasValue)) {
                                    var e = p.value;
                                    if (o(e, t)) return (l = e);
                                }
                                return (l = t);
                            }
                            if (((e = l), r(n, t))) return e;
                            var i = s(t);
                            return void 0 !== o && o(e, i) ? e : ((n = t), (l = i));
                        }
                        var n,
                            l,
                            h = !1,
                            a = void 0 === i ? null : i;
                        return [
                            function () {
                                return t(e());
                            },
                            null === a
                                ? void 0
                                : function () {
                                      return t(a());
                                  },
                        ];
                    },
                    [e, i, s, o]
                );
                var d = n(t, u[0], u[1]);
                return (
                    h(
                        function () {
                            (p.hasValue = !0), (p.value = d);
                        },
                        [d]
                    ),
                    c(d),
                    d
                );
            };
        },
        65401: function (t, e, i) {
            t.exports = i(78704);
        },
        96681: function (t, e, i) {
            i.d(e, {
                pi: function () {
                    return z;
                },
                LZ: function () {
                    return T;
                },
            });
            var s,
                o = i(2265),
                r =
                    "undefined" != typeof window &&
                    new (class {
                        constructor() {
                            (this.raf = (t) => {
                                requestAnimationFrame(this.raf);
                                let e = t - this.now;
                                this.now = t;
                                for (let i = 0; i < this.callbacks.length; i++) this.callbacks[i].callback(t, e);
                            }),
                                (this.callbacks = []),
                                (this.now = performance.now()),
                                requestAnimationFrame(this.raf);
                        }
                        add(t, e = 0) {
                            return this.callbacks.push({ callback: t, priority: e }), this.callbacks.sort((t, e) => t.priority - e.priority), () => this.remove(t);
                        }
                        remove(t) {
                            this.callbacks = this.callbacks.filter(({ callback: e }) => t !== e);
                        }
                    })();
            function n() {
                return (n = Object.assign
                    ? Object.assign.bind()
                    : function (t) {
                          for (var e = 1; e < arguments.length; e++) {
                              var i = arguments[e];
                              for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
                          }
                          return t;
                      }).apply(this, arguments);
            }
            function l(t, e, i) {
                return Math.max(t, Math.min(e, i));
            }
            class h {
                advance(t) {
                    var e, i, s, o;
                    if (!this.isRunning) return;
                    let r = !1;
                    if (this.lerp) (this.value = ((i = this.value), (s = this.to), (1 - (o = 1 - Math.exp(-60 * this.lerp * t))) * i + o * s)), Math.round(this.value) === this.to && ((this.value = this.to), (r = !0));
                    else {
                        this.currentTime += t;
                        let e = l(0, this.currentTime / this.duration, 1);
                        r = e >= 1;
                        let i = r ? 1 : this.easing(e);
                        this.value = this.from + (this.to - this.from) * i;
                    }
                    null == (e = this.onUpdate) || e.call(this, this.value, r), r && this.stop();
                }
                stop() {
                    this.isRunning = !1;
                }
                fromTo(t, e, { lerp: i = 0.1, duration: s = 1, easing: o = (t) => t, onStart: r, onUpdate: n }) {
                    (this.from = this.value = t), (this.to = e), (this.lerp = i), (this.duration = s), (this.easing = o), (this.currentTime = 0), (this.isRunning = !0), null == r || r(), (this.onUpdate = n);
                }
            }
            class a {
                constructor({ wrapper: t, content: e, autoResize: i = !0 } = {}) {
                    if (
                        ((this.resize = () => {
                            this.onWrapperResize(), this.onContentResize();
                        }),
                        (this.onWrapperResize = () => {
                            this.wrapper === window ? ((this.width = window.innerWidth), (this.height = window.innerHeight)) : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
                        }),
                        (this.onContentResize = () => {
                            (this.scrollHeight = this.content.scrollHeight), (this.scrollWidth = this.content.scrollWidth);
                        }),
                        (this.wrapper = t),
                        (this.content = e),
                        i)
                    ) {
                        var s;
                        let t;
                        let e =
                            ((s = this.resize),
                            function () {
                                let e = arguments,
                                    i = this;
                                clearTimeout(t),
                                    (t = setTimeout(function () {
                                        s.apply(i, e);
                                    }, 250));
                            });
                        this.wrapper !== window && ((this.wrapperResizeObserver = new ResizeObserver(e)), this.wrapperResizeObserver.observe(this.wrapper)),
                            (this.contentResizeObserver = new ResizeObserver(e)),
                            this.contentResizeObserver.observe(this.content);
                    }
                    this.resize();
                }
                destroy() {
                    var t, e;
                    null == (t = this.wrapperResizeObserver) || t.disconnect(), null == (e = this.contentResizeObserver) || e.disconnect();
                }
                get limit() {
                    return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
                }
            }
            class c {
                constructor() {
                    this.events = {};
                }
                emit(t, ...e) {
                    let i = this.events[t] || [];
                    for (let t = 0, s = i.length; t < s; t++) i[t](...e);
                }
                on(t, e) {
                    var i;
                    return (
                        (null == (i = this.events[t]) ? void 0 : i.push(e)) || (this.events[t] = [e]),
                        () => {
                            var i;
                            this.events[t] = null == (i = this.events[t]) ? void 0 : i.filter((t) => e !== t);
                        }
                    );
                }
                off(t, e) {
                    var i;
                    this.events[t] = null == (i = this.events[t]) ? void 0 : i.filter((t) => e !== t);
                }
                destroy() {
                    this.events = {};
                }
            }
            class u {
                constructor(t, { wheelMultiplier: e = 1, touchMultiplier: i = 2, normalizeWheel: s = !1 }) {
                    (this.onTouchStart = (t) => {
                        let { clientX: e, clientY: i } = t.targetTouches ? t.targetTouches[0] : t;
                        (this.touchStart.x = e), (this.touchStart.y = i), (this.lastDelta = { x: 0, y: 0 });
                    }),
                        (this.onTouchMove = (t) => {
                            let { clientX: e, clientY: i } = t.targetTouches ? t.targetTouches[0] : t,
                                s = -(e - this.touchStart.x) * this.touchMultiplier,
                                o = -(i - this.touchStart.y) * this.touchMultiplier;
                            (this.touchStart.x = e), (this.touchStart.y = i), (this.lastDelta = { x: s, y: o }), this.emitter.emit("scroll", { deltaX: s, deltaY: o, event: t });
                        }),
                        (this.onTouchEnd = (t) => {
                            this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: t });
                        }),
                        (this.onWheel = (t) => {
                            let { deltaX: e, deltaY: i } = t;
                            this.normalizeWheel && ((e = l(-100, e, 100)), (i = l(-100, i, 100))), (e *= this.wheelMultiplier), (i *= this.wheelMultiplier), this.emitter.emit("scroll", { deltaX: e, deltaY: i, event: t });
                        }),
                        (this.element = t),
                        (this.wheelMultiplier = e),
                        (this.touchMultiplier = i),
                        (this.normalizeWheel = s),
                        (this.touchStart = { x: null, y: null }),
                        (this.emitter = new c()),
                        this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
                        this.element.addEventListener("touchstart", this.onTouchStart, { passive: !1 }),
                        this.element.addEventListener("touchmove", this.onTouchMove, { passive: !1 }),
                        this.element.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
                }
                on(t, e) {
                    return this.emitter.on(t, e);
                }
                destroy() {
                    this.emitter.destroy(),
                        this.element.removeEventListener("wheel", this.onWheel, { passive: !1 }),
                        this.element.removeEventListener("touchstart", this.onTouchStart, { passive: !1 }),
                        this.element.removeEventListener("touchmove", this.onTouchMove, { passive: !1 }),
                        this.element.removeEventListener("touchend", this.onTouchEnd, { passive: !1 });
                }
            }
            class p {
                constructor({
                    wrapper: t = window,
                    content: e = document.documentElement,
                    wheelEventsTarget: i = t,
                    smoothWheel: s = !0,
                    smoothTouch: o = !1,
                    syncTouch: r = !1,
                    syncTouchLerp: l = 0.1,
                    __iosNoInertiaSyncTouchLerp: p = 0.4,
                    touchInertiaMultiplier: d = 35,
                    duration: m,
                    easing: f = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    lerp: v = m && 0.1,
                    infinite: g = !1,
                    orientation: S = "vertical",
                    gestureOrientation: b = "vertical",
                    touchMultiplier: w = 1,
                    wheelMultiplier: y = 1,
                    normalizeWheel: E = !1,
                    autoResize: T = !0,
                } = {}) {
                    (this.onVirtualScroll = ({ deltaX: t, deltaY: e, event: i }) => {
                        if (i.ctrlKey) return;
                        let s = i.type.includes("touch"),
                            o = i.type.includes("wheel");
                        if (
                            ("both" === this.options.gestureOrientation && 0 === t && 0 === e) ||
                            ("vertical" === this.options.gestureOrientation && 0 === e) ||
                            ("horizontal" === this.options.gestureOrientation && 0 === t) ||
                            (s && "vertical" === this.options.gestureOrientation && 0 === this.scroll && !this.options.infinite && e <= 0)
                        )
                            return;
                        let r = i.composedPath();
                        if (
                            (r = r.slice(0, r.indexOf(this.rootElement))).find((t) => {
                                var e;
                                return (
                                    (null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent")) ||
                                    (s && (null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent-touch"))) ||
                                    (o && (null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent-wheel"))) ||
                                    (null == (e = t.classList) ? void 0 : e.contains("lenis"))
                                );
                            })
                        )
                            return;
                        if (this.isStopped || this.isLocked) return void i.preventDefault();
                        if (((this.isSmooth = ((this.options.smoothTouch || this.options.syncTouch) && s) || (this.options.smoothWheel && o)), !this.isSmooth)) return (this.isScrolling = !1), void this.animate.stop();
                        i.preventDefault();
                        let l = e;
                        "both" === this.options.gestureOrientation ? (l = Math.abs(e) > Math.abs(t) ? e : t) : "horizontal" === this.options.gestureOrientation && (l = t);
                        let h = s && this.options.syncTouch,
                            a = s && "touchend" === i.type && Math.abs(l) > 1;
                        a && (l = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + l, n({ programmatic: !1 }, h && { lerp: a ? this.syncTouchLerp : this.options.__iosNoInertiaSyncTouchLerp }));
                    }),
                        (this.onScroll = () => {
                            if (!this.isScrolling) {
                                let t = this.animatedScroll;
                                (this.animatedScroll = this.targetScroll = this.actualScroll), (this.velocity = 0), (this.direction = Math.sign(this.animatedScroll - t)), this.emit();
                            }
                        }),
                        (window.lenisVersion = "1.0.25"),
                        (t !== document.documentElement && t !== document.body) || (t = window),
                        (this.options = {
                            wrapper: t,
                            content: e,
                            wheelEventsTarget: i,
                            smoothWheel: s,
                            smoothTouch: o,
                            syncTouch: r,
                            syncTouchLerp: l,
                            __iosNoInertiaSyncTouchLerp: p,
                            touchInertiaMultiplier: d,
                            duration: m,
                            easing: f,
                            lerp: v,
                            infinite: g,
                            gestureOrientation: b,
                            orientation: S,
                            touchMultiplier: w,
                            wheelMultiplier: y,
                            normalizeWheel: E,
                            autoResize: T,
                        }),
                        (this.animate = new h()),
                        (this.emitter = new c()),
                        (this.dimensions = new a({ wrapper: t, content: e, autoResize: T })),
                        this.toggleClass("lenis", !0),
                        (this.velocity = 0),
                        (this.isStopped = !1),
                        (this.isSmooth = s || o),
                        (this.isScrolling = !1),
                        (this.targetScroll = this.animatedScroll = this.actualScroll),
                        this.options.wrapper.addEventListener("scroll", this.onScroll, { passive: !1 }),
                        (this.virtualScroll = new u(i, { touchMultiplier: w, wheelMultiplier: y, normalizeWheel: E })),
                        this.virtualScroll.on("scroll", this.onVirtualScroll);
                }
                destroy() {
                    this.emitter.destroy(),
                        this.options.wrapper.removeEventListener("scroll", this.onScroll, { passive: !1 }),
                        this.virtualScroll.destroy(),
                        this.dimensions.destroy(),
                        this.toggleClass("lenis", !1),
                        this.toggleClass("lenis-smooth", !1),
                        this.toggleClass("lenis-scrolling", !1),
                        this.toggleClass("lenis-stopped", !1);
                }
                on(t, e) {
                    return this.emitter.on(t, e);
                }
                off(t, e) {
                    return this.emitter.off(t, e);
                }
                setScroll(t) {
                    this.isHorizontal ? (this.rootElement.scrollLeft = t) : (this.rootElement.scrollTop = t);
                }
                resize() {
                    this.dimensions.resize();
                }
                emit() {
                    this.emitter.emit("scroll", this);
                }
                reset() {
                    (this.isLocked = !1), (this.isScrolling = !1), (this.velocity = 0), this.animate.stop();
                }
                start() {
                    (this.isStopped = !1), this.reset();
                }
                stop() {
                    (this.isStopped = !0), this.animate.stop(), this.reset();
                }
                raf(t) {
                    let e = t - (this.time || t);
                    (this.time = t), this.animate.advance(0.001 * e);
                }
                scrollTo(
                    t,
                    { offset: e = 0, immediate: i = !1, lock: s = !1, duration: o = this.options.duration, easing: r = this.options.easing, lerp: n = !o && this.options.lerp, onComplete: h = null, force: a = !1, programmatic: c = !0 } = {}
                ) {
                    if (!this.isStopped || a) {
                        if (["top", "left", "start"].includes(t)) t = 0;
                        else if (["bottom", "right", "end"].includes(t)) t = this.limit;
                        else {
                            var u;
                            let i;
                            if (("string" == typeof t ? (i = document.querySelector(t)) : null != (u = t) && u.nodeType && (i = t), i)) {
                                if (this.options.wrapper !== window) {
                                    let t = this.options.wrapper.getBoundingClientRect();
                                    e -= this.isHorizontal ? t.left : t.top;
                                }
                                let s = i.getBoundingClientRect();
                                t = (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
                            }
                        }
                        if ("number" == typeof t) {
                            if (((t += e), (t = Math.round(t)), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : (t = l(0, t, this.limit)), i))
                                return (this.animatedScroll = this.targetScroll = t), this.setScroll(this.scroll), this.reset(), this.emit(), void (null == h || h(this));
                            if (!c) {
                                if (t === this.targetScroll) return;
                                this.targetScroll = t;
                            }
                            this.animate.fromTo(this.animatedScroll, t, {
                                duration: o,
                                easing: r,
                                lerp: n,
                                onStart: () => {
                                    s && (this.isLocked = !0), (this.isScrolling = !0);
                                },
                                onUpdate: (t, e) => {
                                    (this.isScrolling = !0),
                                        (this.velocity = t - this.animatedScroll),
                                        (this.direction = Math.sign(this.velocity)),
                                        (this.animatedScroll = t),
                                        this.setScroll(this.scroll),
                                        c && (this.targetScroll = t),
                                        e || this.emit(),
                                        e &&
                                            requestAnimationFrame(() => {
                                                (this.isScrolling = !1), (this.velocity = 0), s && (this.isLocked = !1), this.emit(), null == h || h(this);
                                            });
                                },
                            });
                        }
                    }
                }
                get rootElement() {
                    return this.options.wrapper === window ? this.options.content : this.options.wrapper;
                }
                get limit() {
                    return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
                }
                get isHorizontal() {
                    return "horizontal" === this.options.orientation;
                }
                get actualScroll() {
                    return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
                }
                get scroll() {
                    var t;
                    return this.options.infinite ? ((this.animatedScroll % (t = this.limit)) + t) % t : this.animatedScroll;
                }
                get progress() {
                    return 0 === this.limit ? 1 : this.scroll / this.limit;
                }
                get isSmooth() {
                    return this.__isSmooth;
                }
                set isSmooth(t) {
                    this.__isSmooth !== t && ((this.__isSmooth = t), this.toggleClass("lenis-smooth", t));
                }
                get isScrolling() {
                    return this.__isScrolling;
                }
                set isScrolling(t) {
                    this.__isScrolling !== t && ((this.__isScrolling = t), this.toggleClass("lenis-scrolling", t));
                }
                get isStopped() {
                    return this.__isStopped;
                }
                set isStopped(t) {
                    this.__isStopped !== t && ((this.__isStopped = t), this.toggleClass("lenis-stopped", t));
                }
                get className() {
                    let t = "lenis";
                    return this.isStopped && (t += " lenis-stopped"), this.isScrolling && (t += " lenis-scrolling"), this.isSmooth && (t += " lenis-smooth"), t;
                }
                toggleClass(t, e) {
                    this.rootElement.classList.toggle(t, e), this.emitter.emit("className change", this);
                }
            }
            var d = i(74275);
            let m = (t) => {
                    let e;
                    let i = new Set(),
                        s = (t, s) => {
                            let o = "function" == typeof t ? t(e) : t;
                            if (!Object.is(o, e)) {
                                let t = e;
                                (e = (null != s ? s : "object" != typeof o) ? o : Object.assign({}, e, o)), i.forEach((i) => i(e, t));
                            }
                        },
                        o = () => e,
                        r = {
                            setState: s,
                            getState: o,
                            subscribe: (t) => (i.add(t), () => i.delete(t)),
                            destroy: () => {
                                console.warn(
                                    "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
                                ),
                                    i.clear();
                            },
                        };
                    return (e = t(s, o, r)), r;
                },
                f = (t) => (t ? m(t) : m);
            var v = i(65401);
            let { useSyncExternalStoreWithSelector: g } = v,
                S = !1,
                b = (t) => {
                    "function" != typeof t && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
                    let e = "function" == typeof t ? f(t) : t,
                        i = (t, i) =>
                            (function (t, e = t.getState, i) {
                                i &&
                                    !S &&
                                    (console.warn(
                                        "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
                                    ),
                                    (S = !0));
                                let s = g(t.subscribe, t.getState, t.getServerState || t.getState, e, i);
                                return (0, o.useDebugValue)(s), s;
                            })(e, t, i);
                    return Object.assign(i, e), i;
                };
            function w() {
                return (w = Object.assign
                    ? Object.assign.bind()
                    : function (t) {
                          for (var e = 1; e < arguments.length; e++) {
                              var i = arguments[e];
                              for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
                          }
                          return t;
                      }).apply(this, arguments);
            }
            let y = (0, o.createContext)(),
                E = (s = () => ({})) ? b(s) : b;
            function T(t, e = [], i = 0) {
                let { lenis: s, addCallback: r, removeCallback: n } = (function () {
                    let t = (0, o.useContext)(y),
                        e = E();
                    return null != t ? t : e;
                })();
                return (
                    (0, o.useEffect)(() => {
                        if (t && r && n && s)
                            return (
                                r(t, i),
                                t(s),
                                () => {
                                    n(t);
                                }
                            );
                    }, [s, r, n, i, ...e]),
                    s
                );
            }
            let z = (0, o.forwardRef)(({ children: t, root: e = !1, options: i = {}, isStopped: s = !1, autoRaf: n = !0, rafPriority: l = 0, className: h }, a) => {
                let c = (0, o.useRef)(),
                    u = (0, o.useRef)(),
                    [d, m] = (0, o.useState)(),
                    f = (0, o.useRef)([]),
                    v = (0, o.useCallback)((t, e) => {
                        f.current.push({ callback: t, priority: e }), f.current.sort((t, e) => t.priority - e.priority);
                    }, []),
                    g = (0, o.useCallback)((t) => {
                        f.current = f.current.filter((e) => e.callback !== t);
                    }, []);
                (0, o.useImperativeHandle)(a, () => d, [d]),
                    (0, o.useEffect)(() => {
                        let t = new p(w({}, i, !e && { wrapper: c.current, content: u.current }));
                        return (
                            m(t),
                            () => {
                                t.destroy(), m(void 0);
                            }
                        );
                    }, [e, JSON.stringify(i)]),
                    (function (t, e = 0) {
                        (0, o.useEffect)(() => {
                            if (t) return r.add(t, e), () => r.remove(t);
                        }, [t, e]);
                    })((t) => {
                        n && (null == d || d.raf(t));
                    }, l),
                    (0, o.useEffect)(() => {
                        d && (s ? d.stop() : d.start());
                    }, [d, s]),
                    (0, o.useEffect)(() => {
                        e && d && E.setState({ lenis: d, addCallback: v, removeCallback: g });
                    }, [e, d, v, g]);
                let S = (0, o.useCallback)((t) => {
                    for (let e = 0; e < f.current.length; e++) f.current[e].callback(t);
                }, []);
                return (
                    (0, o.useEffect)(() => {
                        if (d)
                            return (
                                d.on("scroll", S),
                                () => {
                                    d.off("scroll", S);
                                }
                            );
                    }, [d, S]),
                    o.createElement(y.Provider, { value: { lenis: d, addCallback: v, removeCallback: g } }, e ? t : o.createElement("div", { ref: c, className: h }, o.createElement("div", { ref: u }, t)))
                );
            });
            (z.displayName = "ReactLenis"), (z.propTypes = { children: d.node, root: d.bool, options: d.object, isStopped: d.bool, autoRaf: d.bool, rafPriority: d.number, className: d.string });
        },
    },
]);
