(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [429],
    {
        7106: function (e) {
            "use strict";
            var t = function (e) {
                    var t;
                    return !!e && "object" == typeof e && "[object RegExp]" !== (t = Object.prototype.toString.call(e)) && "[object Date]" !== t && e.$$typeof !== r;
                },
                r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
            function n(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e) ? u(Array.isArray(e) ? [] : {}, e, t) : e;
            }
            function o(e, t, r) {
                return e.concat(t).map(function (e) {
                    return n(e, r);
                });
            }
            function a(e) {
                return Object.keys(e).concat(
                    Object.getOwnPropertySymbols
                        ? Object.getOwnPropertySymbols(e).filter(function (t) {
                              return Object.propertyIsEnumerable.call(e, t);
                          })
                        : []
                );
            }
            function i(e, t) {
                try {
                    return t in e;
                } catch (e) {
                    return !1;
                }
            }
            function u(e, r, l) {
                ((l = l || {}).arrayMerge = l.arrayMerge || o), (l.isMergeableObject = l.isMergeableObject || t), (l.cloneUnlessOtherwiseSpecified = n);
                var c,
                    s,
                    f = Array.isArray(r);
                return f !== Array.isArray(e)
                    ? n(r, l)
                    : f
                    ? l.arrayMerge(e, r, l)
                    : ((s = {}),
                      (c = l).isMergeableObject(e) &&
                          a(e).forEach(function (t) {
                              s[t] = n(e[t], c);
                          }),
                      a(r).forEach(function (t) {
                          (!i(e, t) || (Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))) &&
                              (i(e, t) && c.isMergeableObject(r[t])
                                  ? (s[t] = (function (e, t) {
                                        if (!t.customMerge) return u;
                                        var r = t.customMerge(e);
                                        return "function" == typeof r ? r : u;
                                    })(t, c)(e[t], r[t], c))
                                  : (s[t] = n(r[t], c)));
                      }),
                      s);
            }
            (u.all = function (e, t) {
                if (!Array.isArray(e)) throw Error("first argument should be an array");
                return e.reduce(function (e, r) {
                    return u(e, r, t);
                }, {});
            }),
                (e.exports = u);
        },
        12451: function (e) {
            function t(e, t) {
                (e.onload = function () {
                    (this.onerror = this.onload = null), t(null, e);
                }),
                    (e.onerror = function () {
                        (this.onerror = this.onload = null), t(Error("Failed to load " + this.src), e);
                    });
            }
            e.exports = function (e, r, n) {
                var o = document.head || document.getElementsByTagName("head")[0],
                    a = document.createElement("script");
                "function" == typeof r && ((n = r), (r = {})),
                    (r = r || {}),
                    (n = n || function () {}),
                    (a.type = r.type || "text/javascript"),
                    (a.charset = r.charset || "utf8"),
                    (a.async = !("async" in r) || !!r.async),
                    (a.src = e),
                    r.attrs &&
                        (function (e, t) {
                            for (var r in t) e.setAttribute(r, t[r]);
                        })(a, r.attrs),
                    r.text && (a.text = "" + r.text),
                    ("onload" in a
                        ? t
                        : function (e, t) {
                              e.onreadystatechange = function () {
                                  ("complete" == this.readyState || "loaded" == this.readyState) && ((this.onreadystatechange = null), t(null, e));
                              };
                          })(a, n),
                    a.onload || t(a, n),
                    o.appendChild(a);
            };
        },
        82104: function (e, t, r) {
            "use strict";
            r.r(t);
            var n =
                Number.isNaN ||
                function (e) {
                    return "number" == typeof e && e != e;
                };
            function o(e, t) {
                if (e.length !== t.length) return !1;
                for (var r, o, a = 0; a < e.length; a++) if (!((r = e[a]) === (o = t[a]) || (n(r) && n(o)))) return !1;
                return !0;
            }
            t.default = function (e, t) {
                void 0 === t && (t = o);
                var r,
                    n,
                    a = [],
                    i = !1;
                return function () {
                    for (var o = [], u = 0; u < arguments.length; u++) o[u] = arguments[u];
                    return (i && r === this && t(o, a)) || ((n = e.apply(this, o)), (i = !0), (r = this), (a = o)), n;
                };
            };
        },
        17966: function (e) {
            var t = "undefined" != typeof Element,
                r = "function" == typeof Map,
                n = "function" == typeof Set,
                o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
            e.exports = function (e, a) {
                try {
                    return (function e(a, i) {
                        if (a === i) return !0;
                        if (a && i && "object" == typeof a && "object" == typeof i) {
                            var u, l, c, s;
                            if (a.constructor !== i.constructor) return !1;
                            if (Array.isArray(a)) {
                                if ((u = a.length) != i.length) return !1;
                                for (l = u; 0 != l--; ) if (!e(a[l], i[l])) return !1;
                                return !0;
                            }
                            if (r && a instanceof Map && i instanceof Map) {
                                if (a.size !== i.size) return !1;
                                for (s = a.entries(); !(l = s.next()).done; ) if (!i.has(l.value[0])) return !1;
                                for (s = a.entries(); !(l = s.next()).done; ) if (!e(l.value[1], i.get(l.value[0]))) return !1;
                                return !0;
                            }
                            if (n && a instanceof Set && i instanceof Set) {
                                if (a.size !== i.size) return !1;
                                for (s = a.entries(); !(l = s.next()).done; ) if (!i.has(l.value[0])) return !1;
                                return !0;
                            }
                            if (o && ArrayBuffer.isView(a) && ArrayBuffer.isView(i)) {
                                if ((u = a.length) != i.length) return !1;
                                for (l = u; 0 != l--; ) if (a[l] !== i[l]) return !1;
                                return !0;
                            }
                            if (a.constructor === RegExp) return a.source === i.source && a.flags === i.flags;
                            if (a.valueOf !== Object.prototype.valueOf && "function" == typeof a.valueOf && "function" == typeof i.valueOf) return a.valueOf() === i.valueOf();
                            if (a.toString !== Object.prototype.toString && "function" == typeof a.toString && "function" == typeof i.toString) return a.toString() === i.toString();
                            if ((u = (c = Object.keys(a)).length) !== Object.keys(i).length) return !1;
                            for (l = u; 0 != l--; ) if (!Object.prototype.hasOwnProperty.call(i, c[l])) return !1;
                            if (t && a instanceof Element) return !1;
                            for (l = u; 0 != l--; ) if ((("_owner" !== c[l] && "__v" !== c[l] && "__o" !== c[l]) || !a.$$typeof) && !e(a[c[l]], i[c[l]])) return !1;
                            return !0;
                        }
                        return a != a && i != i;
                    })(e, a);
                } catch (e) {
                    if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw e;
                }
            };
        },
        6137: function (e, t, r) {
            "use strict";
            function n(e) {
                return (n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
            var o,
                a = (function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" !== n(e) && "function" != typeof e)) return { default: e };
                    var t = c();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                        }
                    return (r.default = e), t && t.set(e, r), r;
                })(r(2265)),
                i = (o = r(17966)) && o.__esModule ? o : { default: o },
                u = r(42728),
                l = r(74117);
            function c() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                    (c = function () {
                        return e;
                    }),
                    e
                );
            }
            function s() {
                return (s =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function f(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            function p(e, t) {
                return (p =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function y(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function d(e) {
                return (d = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function h(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            var b = (function (e) {
                !(function (e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && p(e, t);
                })(c, e);
                var t,
                    r,
                    o,
                    u =
                        ((t = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                            } catch (e) {
                                return !1;
                            }
                        })()),
                        function () {
                            var e,
                                r,
                                o = d(c);
                            if (t) {
                                var a = d(this).constructor;
                                r = Reflect.construct(o, arguments, a);
                            } else r = o.apply(this, arguments);
                            return (e = r) && ("object" === n(e) || "function" == typeof e) ? e : y(this);
                        });
                function c() {
                    var e;
                    !(function (e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                    })(this, c);
                    for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return (
                        h(y((e = u.call.apply(u, [this].concat(r)))), "mounted", !1),
                        h(y(e), "isReady", !1),
                        h(y(e), "isPlaying", !1),
                        h(y(e), "isLoading", !0),
                        h(y(e), "loadOnReady", null),
                        h(y(e), "startOnPlay", !0),
                        h(y(e), "seekOnPlay", null),
                        h(y(e), "onDurationCalled", !1),
                        h(y(e), "handlePlayerMount", function (t) {
                            if (e.player) {
                                e.progress();
                                return;
                            }
                            (e.player = t), e.player.load(e.props.url), e.progress();
                        }),
                        h(y(e), "getInternalPlayer", function (t) {
                            return e.player ? e.player[t] : null;
                        }),
                        h(y(e), "progress", function () {
                            if (e.props.url && e.player && e.isReady) {
                                var t = e.getCurrentTime() || 0,
                                    r = e.getSecondsLoaded(),
                                    n = e.getDuration();
                                if (n) {
                                    var o = { playedSeconds: t, played: t / n };
                                    null !== r && ((o.loadedSeconds = r), (o.loaded = r / n)),
                                        (o.playedSeconds !== e.prevPlayed || o.loadedSeconds !== e.prevLoaded) && e.props.onProgress(o),
                                        (e.prevPlayed = o.playedSeconds),
                                        (e.prevLoaded = o.loadedSeconds);
                                }
                            }
                            e.progressTimeout = setTimeout(e.progress, e.props.progressFrequency || e.props.progressInterval);
                        }),
                        h(y(e), "handleReady", function () {
                            if (e.mounted) {
                                (e.isReady = !0), (e.isLoading = !1);
                                var t = e.props,
                                    r = t.onReady,
                                    n = t.playing,
                                    o = t.volume,
                                    a = t.muted;
                                r(), a || null === o || e.player.setVolume(o), e.loadOnReady ? (e.player.load(e.loadOnReady, !0), (e.loadOnReady = null)) : n && e.player.play(), e.handleDurationCheck();
                            }
                        }),
                        h(y(e), "handlePlay", function () {
                            (e.isPlaying = !0), (e.isLoading = !1);
                            var t = e.props,
                                r = t.onStart,
                                n = t.onPlay,
                                o = t.playbackRate;
                            e.startOnPlay && (e.player.setPlaybackRate && 1 !== o && e.player.setPlaybackRate(o), r(), (e.startOnPlay = !1)), n(), e.seekOnPlay && (e.seekTo(e.seekOnPlay), (e.seekOnPlay = null)), e.handleDurationCheck();
                        }),
                        h(y(e), "handlePause", function (t) {
                            (e.isPlaying = !1), e.isLoading || e.props.onPause(t);
                        }),
                        h(y(e), "handleEnded", function () {
                            var t = e.props,
                                r = t.activePlayer,
                                n = t.loop,
                                o = t.onEnded;
                            r.loopOnEnded && n && e.seekTo(0), n || ((e.isPlaying = !1), o());
                        }),
                        h(y(e), "handleError", function () {
                            var t;
                            (e.isLoading = !1), (t = e.props).onError.apply(t, arguments);
                        }),
                        h(y(e), "handleDurationCheck", function () {
                            clearTimeout(e.durationCheckTimeout);
                            var t = e.getDuration();
                            t ? e.onDurationCalled || (e.props.onDuration(t), (e.onDurationCalled = !0)) : (e.durationCheckTimeout = setTimeout(e.handleDurationCheck, 100));
                        }),
                        h(y(e), "handleLoaded", function () {
                            e.isLoading = !1;
                        }),
                        e
                    );
                }
                return (
                    (r = [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.mounted = !0;
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                clearTimeout(this.progressTimeout),
                                    clearTimeout(this.durationCheckTimeout),
                                    this.isReady && this.props.stopOnUnmount && (this.player.stop(), this.player.disablePIP && this.player.disablePIP()),
                                    (this.mounted = !1);
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function (e) {
                                var t = this;
                                if (this.player) {
                                    var r = this.props,
                                        n = r.url,
                                        o = r.playing,
                                        a = r.volume,
                                        u = r.muted,
                                        c = r.playbackRate,
                                        s = r.pip,
                                        f = r.loop,
                                        p = r.activePlayer,
                                        y = r.disableDeferredLoading;
                                    if (!(0, i.default)(e.url, n)) {
                                        if (this.isLoading && !p.forceLoad && !y && !(0, l.isMediaStream)(n)) {
                                            console.warn("ReactPlayer: the attempt to load ".concat(n, " is being deferred until the player has loaded")), (this.loadOnReady = n);
                                            return;
                                        }
                                        (this.isLoading = !0), (this.startOnPlay = !0), (this.onDurationCalled = !1), this.player.load(n, this.isReady);
                                    }
                                    e.playing || !o || this.isPlaying || this.player.play(),
                                        e.playing && !o && this.isPlaying && this.player.pause(),
                                        !e.pip && s && this.player.enablePIP && this.player.enablePIP(),
                                        e.pip && !s && this.player.disablePIP && this.player.disablePIP(),
                                        e.volume !== a && null !== a && this.player.setVolume(a),
                                        e.muted !== u &&
                                            (u
                                                ? this.player.mute()
                                                : (this.player.unmute(),
                                                  null !== a &&
                                                      setTimeout(function () {
                                                          return t.player.setVolume(a);
                                                      }))),
                                        e.playbackRate !== c && this.player.setPlaybackRate && this.player.setPlaybackRate(c),
                                        e.loop !== f && this.player.setLoop && this.player.setLoop(f);
                                }
                            },
                        },
                        {
                            key: "getDuration",
                            value: function () {
                                return this.isReady ? this.player.getDuration() : null;
                            },
                        },
                        {
                            key: "getCurrentTime",
                            value: function () {
                                return this.isReady ? this.player.getCurrentTime() : null;
                            },
                        },
                        {
                            key: "getSecondsLoaded",
                            value: function () {
                                return this.isReady ? this.player.getSecondsLoaded() : null;
                            },
                        },
                        {
                            key: "seekTo",
                            value: function (e, t, r) {
                                var n = this;
                                if (!this.isReady) {
                                    0 !== e &&
                                        ((this.seekOnPlay = e),
                                        setTimeout(function () {
                                            n.seekOnPlay = null;
                                        }, 5e3));
                                    return;
                                }
                                if (t ? "fraction" === t : e > 0 && e < 1) {
                                    var o = this.player.getDuration();
                                    if (!o) {
                                        console.warn("ReactPlayer: could not seek using fraction –\xa0duration not yet available");
                                        return;
                                    }
                                    this.player.seekTo(o * e, r);
                                    return;
                                }
                                this.player.seekTo(e, r);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props.activePlayer;
                                return e
                                    ? a.default.createElement(
                                          e,
                                          s({}, this.props, {
                                              onMount: this.handlePlayerMount,
                                              onReady: this.handleReady,
                                              onPlay: this.handlePlay,
                                              onPause: this.handlePause,
                                              onEnded: this.handleEnded,
                                              onLoaded: this.handleLoaded,
                                              onError: this.handleError,
                                          })
                                      )
                                    : null;
                            },
                        },
                    ]),
                    f(c.prototype, r),
                    o && f(c, o),
                    c
                );
            })(a.Component);
            (t.default = b), h(b, "displayName", "Player"), h(b, "propTypes", u.propTypes), h(b, "defaultProps", u.defaultProps);
        },
        15518: function (e, t, r) {
            "use strict";
            function n(e) {
                return (n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
            var o = (function (e) {
                if (e && e.__esModule) return e;
                if (null === e || ("object" !== n(e) && "function" != typeof e)) return { default: e };
                var t = a();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        var u = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                        u && (u.get || u.set) ? Object.defineProperty(r, i, u) : (r[i] = e[i]);
                    }
                return (r.default = e), t && t.set(e, r), r;
            })(r(2265));
            function a() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                    (a = function () {
                        return e;
                    }),
                    e
                );
            }
            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? i(Object(r), !0).forEach(function (t) {
                              p(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                        : i(Object(r)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                          });
                }
                return e;
            }
            function l(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            function c(e, t) {
                return (c =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function s(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function f(e) {
                return (f = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function p(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            var y = "64px",
                d = {},
                h = (function (e) {
                    !(function (e, t) {
                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
                    })(h, e);
                    var t,
                        r,
                        a,
                        i =
                            ((t = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                                } catch (e) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var e,
                                    r,
                                    o = f(h);
                                if (t) {
                                    var a = f(this).constructor;
                                    r = Reflect.construct(o, arguments, a);
                                } else r = o.apply(this, arguments);
                                return (e = r) && ("object" === n(e) || "function" == typeof e) ? e : s(this);
                            });
                    function h() {
                        var e;
                        !(function (e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                        })(this, h);
                        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        return (
                            p(s((e = i.call.apply(i, [this].concat(r)))), "mounted", !1),
                            p(s(e), "state", { image: null }),
                            p(s(e), "handleKeyPress", function (t) {
                                ("Enter" === t.key || " " === t.key) && e.props.onClick();
                            }),
                            e
                        );
                    }
                    return (
                        (r = [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    (this.mounted = !0), this.fetchImage(this.props);
                                },
                            },
                            {
                                key: "componentDidUpdate",
                                value: function (e) {
                                    var t = this.props,
                                        r = t.url,
                                        n = t.light;
                                    (e.url !== r || e.light !== n) && this.fetchImage(this.props);
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.mounted = !1;
                                },
                            },
                            {
                                key: "fetchImage",
                                value: function (e) {
                                    var t = this,
                                        r = e.url,
                                        n = e.light,
                                        a = e.oEmbedUrl;
                                    if (!o.default.isValidElement(n)) {
                                        if ("string" == typeof n) {
                                            this.setState({ image: n });
                                            return;
                                        }
                                        if (d[r]) {
                                            this.setState({ image: d[r] });
                                            return;
                                        }
                                        return (
                                            this.setState({ image: null }),
                                            window
                                                .fetch(a.replace("{url}", r))
                                                .then(function (e) {
                                                    return e.json();
                                                })
                                                .then(function (e) {
                                                    if (e.thumbnail_url && t.mounted) {
                                                        var n = e.thumbnail_url.replace("height=100", "height=480").replace("-d_295x166", "-d_640");
                                                        t.setState({ image: n }), (d[r] = n);
                                                    }
                                                })
                                        );
                                    }
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        t = e.light,
                                        r = e.onClick,
                                        n = e.playIcon,
                                        a = e.previewTabIndex,
                                        i = this.state.image,
                                        l = o.default.isValidElement(t),
                                        c = { display: "flex", alignItems: "center", justifyContent: "center" },
                                        s = {
                                            preview: u({ width: "100%", height: "100%", backgroundImage: i && !l ? "url(".concat(i, ")") : void 0, backgroundSize: "cover", backgroundPosition: "center", cursor: "pointer" }, c),
                                            shadow: u({ background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)", borderRadius: y, width: y, height: y, position: l ? "absolute" : void 0 }, c),
                                            playIcon: { borderStyle: "solid", borderWidth: "16px 0 16px 26px", borderColor: "transparent transparent transparent white", marginLeft: "7px" },
                                        },
                                        f = o.default.createElement("div", { style: s.shadow, className: "react-player__shadow" }, o.default.createElement("div", { style: s.playIcon, className: "react-player__play-icon" }));
                                    return o.default.createElement("div", { style: s.preview, className: "react-player__preview", onClick: r, tabIndex: a, onKeyPress: this.handleKeyPress }, l ? t : null, n || f);
                                },
                            },
                        ]),
                        l(h.prototype, r),
                        a && l(h, a),
                        h
                    );
                })(o.Component);
            t.default = h;
        },
        73564: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.createReactPlayer = void 0);
            var n = j(r(2265)),
                o = s(r(7106)),
                a = s(r(82104)),
                i = s(r(17966)),
                u = r(42728),
                l = r(74117),
                c = s(r(6137));
            function s(e) {
                return e && e.__esModule ? e : { default: e };
            }
            function f(e) {
                return (f =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? p(Object(r), !0).forEach(function (t) {
                              O(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                        : p(Object(r)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                          });
                }
                return e;
            }
            function d() {
                return (d =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function h(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return b(e);
                    })(e) ||
                    (function (e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                    })(e) ||
                    (function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return b(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            if (("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r)) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return b(e, t);
                        }
                    })(e) ||
                    (function () {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function v(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            function m(e, t) {
                return (m =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function P(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function g(e) {
                return (g = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function O(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            function w() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                    (w = function () {
                        return e;
                    }),
                    e
                );
            }
            function j(e) {
                if (e && e.__esModule) return e;
                if (null === e || ("object" !== f(e) && "function" != typeof e)) return { default: e };
                var t = w();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                        a && (a.get || a.set) ? Object.defineProperty(r, o, a) : (r[o] = e[o]);
                    }
                return (r.default = e), t && t.set(e, r), r;
            }
            var k = (0, n.lazy)(function () {
                    return Promise.resolve().then(function () {
                        return j(r(15518));
                    });
                }),
                S = "undefined" != typeof window && window.document,
                _ = void 0 !== r.g && r.g.window && r.g.window.document,
                E = Object.keys(u.propTypes),
                D =
                    S || _
                        ? n.Suspense
                        : function () {
                              return null;
                          },
                R = [];
            t.createReactPlayer = function (e, t) {
                var r, s;
                return (
                    (s = r = (function (r) {
                        (function (e, t) {
                            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && m(e, t);
                        })(j, r);
                        var s,
                            p,
                            b,
                            w =
                                ((s = (function () {
                                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                    if ("function" == typeof Proxy) return !0;
                                    try {
                                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                                    } catch (e) {
                                        return !1;
                                    }
                                })()),
                                function () {
                                    var e,
                                        t,
                                        r = g(j);
                                    if (s) {
                                        var n = g(this).constructor;
                                        t = Reflect.construct(r, arguments, n);
                                    } else t = r.apply(this, arguments);
                                    return (e = t) && ("object" === f(e) || "function" == typeof e) ? e : P(this);
                                });
                        function j() {
                            var r;
                            (function (e, t) {
                                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                            })(this, j);
                            for (var i = arguments.length, s = Array(i), f = 0; f < i; f++) s[f] = arguments[f];
                            return (
                                O(P((r = w.call.apply(w, [this].concat(s)))), "state", { showPreview: !!r.props.light }),
                                O(P(r), "references", {
                                    wrapper: function (e) {
                                        r.wrapper = e;
                                    },
                                    player: function (e) {
                                        r.player = e;
                                    },
                                }),
                                O(P(r), "handleClickPreview", function (e) {
                                    r.setState({ showPreview: !1 }), r.props.onClickPreview(e);
                                }),
                                O(P(r), "showPreview", function () {
                                    r.setState({ showPreview: !0 });
                                }),
                                O(P(r), "getDuration", function () {
                                    return r.player ? r.player.getDuration() : null;
                                }),
                                O(P(r), "getCurrentTime", function () {
                                    return r.player ? r.player.getCurrentTime() : null;
                                }),
                                O(P(r), "getSecondsLoaded", function () {
                                    return r.player ? r.player.getSecondsLoaded() : null;
                                }),
                                O(P(r), "getInternalPlayer", function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "player";
                                    return r.player ? r.player.getInternalPlayer(e) : null;
                                }),
                                O(P(r), "seekTo", function (e, t, n) {
                                    if (!r.player) return null;
                                    r.player.seekTo(e, t, n);
                                }),
                                O(P(r), "handleReady", function () {
                                    r.props.onReady(P(r));
                                }),
                                O(
                                    P(r),
                                    "getActivePlayer",
                                    (0, a.default)(function (r) {
                                        for (var n = 0, o = [].concat(R, h(e)); n < o.length; n++) {
                                            var a = o[n];
                                            if (a.canPlay(r)) return a;
                                        }
                                        return t || null;
                                    })
                                ),
                                O(
                                    P(r),
                                    "getConfig",
                                    (0, a.default)(function (e, t) {
                                        var n = r.props.config;
                                        return o.default.all([u.defaultProps.config, u.defaultProps.config[t] || {}, n, n[t] || {}]);
                                    })
                                ),
                                O(
                                    P(r),
                                    "getAttributes",
                                    (0, a.default)(function (e) {
                                        return (0, l.omit)(r.props, E);
                                    })
                                ),
                                O(P(r), "renderActivePlayer", function (e) {
                                    if (!e) return null;
                                    var t = r.getActivePlayer(e);
                                    if (!t) return null;
                                    var o = r.getConfig(e, t.key);
                                    return n.default.createElement(c.default, d({}, r.props, { key: t.key, ref: r.references.player, config: o, activePlayer: t.lazyPlayer || t, onReady: r.handleReady }));
                                }),
                                r
                            );
                        }
                        return (
                            (p = [
                                {
                                    key: "shouldComponentUpdate",
                                    value: function (e, t) {
                                        return !(0, i.default)(this.props, e) || !(0, i.default)(this.state, t);
                                    },
                                },
                                {
                                    key: "componentDidUpdate",
                                    value: function (e) {
                                        var t = this.props.light;
                                        !e.light && t && this.setState({ showPreview: !0 }), e.light && !t && this.setState({ showPreview: !1 });
                                    },
                                },
                                {
                                    key: "renderPreview",
                                    value: function (e) {
                                        if (!e) return null;
                                        var t = this.props,
                                            r = t.light,
                                            o = t.playIcon,
                                            a = t.previewTabIndex,
                                            i = t.oEmbedUrl;
                                        return n.default.createElement(k, { url: e, light: r, playIcon: o, previewTabIndex: a, oEmbedUrl: i, onClick: this.handleClickPreview });
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this.props,
                                            t = e.url,
                                            r = e.style,
                                            o = e.width,
                                            a = e.height,
                                            i = e.fallback,
                                            u = e.wrapper,
                                            l = this.state.showPreview,
                                            c = this.getAttributes(t),
                                            s = "string" == typeof u ? this.references.wrapper : void 0;
                                        return n.default.createElement(
                                            u,
                                            d({ ref: s, style: y(y({}, r), {}, { width: o, height: a }) }, c),
                                            n.default.createElement(D, { fallback: i }, l ? this.renderPreview(t) : this.renderActivePlayer(t))
                                        );
                                    },
                                },
                            ]),
                            v(j.prototype, p),
                            b && v(j, b),
                            j
                        );
                    })(n.Component)),
                    O(r, "displayName", "ReactPlayer"),
                    O(r, "propTypes", u.propTypes),
                    O(r, "defaultProps", u.defaultProps),
                    O(r, "addCustomPlayer", function (e) {
                        R.push(e);
                    }),
                    O(r, "removeCustomPlayers", function () {
                        R.length = 0;
                    }),
                    O(r, "canPlay", function (t) {
                        for (var r = 0, n = [].concat(R, h(e)); r < n.length; r++) if (n[r].canPlay(t)) return !0;
                        return !1;
                    }),
                    O(r, "canEnablePIP", function (t) {
                        for (var r = 0, n = [].concat(R, h(e)); r < n.length; r++) {
                            var o = n[r];
                            if (o.canEnablePIP && o.canEnablePIP(t)) return !0;
                        }
                        return !1;
                    }),
                    s
                );
            };
        },
        60429: function (e, t, r) {
            "use strict";
            t.Z = void 0;
            var n,
                o = (n = r(29973)) && n.__esModule ? n : { default: n },
                a = r(73564),
                i = o.default[o.default.length - 1],
                u = (0, a.createReactPlayer)(o.default, i);
            t.Z = u;
        },
        65087: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.canPlay = t.FLV_EXTENSIONS = t.DASH_EXTENSIONS = t.HLS_EXTENSIONS = t.VIDEO_EXTENSIONS = t.AUDIO_EXTENSIONS = t.MATCH_URL_KALTURA = t.MATCH_URL_VIDYARD = t.MATCH_URL_MIXCLOUD = t.MATCH_URL_DAILYMOTION = t.MATCH_URL_TWITCH_CHANNEL = t.MATCH_URL_TWITCH_VIDEO = t.MATCH_URL_WISTIA = t.MATCH_URL_STREAMABLE = t.MATCH_URL_FACEBOOK_WATCH = t.MATCH_URL_FACEBOOK = t.MATCH_URL_VIMEO = t.MATCH_URL_SOUNDCLOUD = t.MATCH_URL_YOUTUBE = void 0);
            var n = r(74117);
            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var a = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
            t.MATCH_URL_YOUTUBE = a;
            var i = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
            t.MATCH_URL_SOUNDCLOUD = i;
            var u = /vimeo\.com\/(?!progressive_redirect).+/;
            t.MATCH_URL_VIMEO = u;
            var l = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
            t.MATCH_URL_FACEBOOK = l;
            var c = /^https?:\/\/fb\.watch\/.+$/;
            t.MATCH_URL_FACEBOOK_WATCH = c;
            var s = /streamable\.com\/([a-z0-9]+)$/;
            t.MATCH_URL_STREAMABLE = s;
            var f = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/;
            t.MATCH_URL_WISTIA = f;
            var p = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
            t.MATCH_URL_TWITCH_VIDEO = p;
            var y = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
            t.MATCH_URL_TWITCH_CHANNEL = y;
            var d = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/;
            t.MATCH_URL_DAILYMOTION = d;
            var h = /mixcloud\.com\/([^/]+\/[^/]+)/;
            t.MATCH_URL_MIXCLOUD = h;
            var b = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
            t.MATCH_URL_VIDYARD = b;
            var v = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;
            t.MATCH_URL_KALTURA = v;
            var m = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
            t.AUDIO_EXTENSIONS = m;
            var P = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
            t.VIDEO_EXTENSIONS = P;
            var g = /\.(m3u8)($|\?)/i;
            t.HLS_EXTENSIONS = g;
            var O = /\.(mpd)($|\?)/i;
            t.DASH_EXTENSIONS = O;
            var w = /\.(flv)($|\?)/i;
            (t.FLV_EXTENSIONS = w),
                (t.canPlay = {
                    youtube: function (e) {
                        return e instanceof Array
                            ? e.every(function (e) {
                                  return a.test(e);
                              })
                            : a.test(e);
                    },
                    soundcloud: function (e) {
                        return i.test(e) && !m.test(e);
                    },
                    vimeo: function (e) {
                        return u.test(e) && !P.test(e) && !g.test(e);
                    },
                    facebook: function (e) {
                        return l.test(e) || c.test(e);
                    },
                    streamable: function (e) {
                        return s.test(e);
                    },
                    wistia: function (e) {
                        return f.test(e);
                    },
                    twitch: function (e) {
                        return p.test(e) || y.test(e);
                    },
                    dailymotion: function (e) {
                        return d.test(e);
                    },
                    mixcloud: function (e) {
                        return h.test(e);
                    },
                    vidyard: function (e) {
                        return b.test(e);
                    },
                    kaltura: function (e) {
                        return v.test(e);
                    },
                    file: function e(t) {
                        if (t instanceof Array) {
                            var r,
                                a = (function (e, t) {
                                    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                                        if (
                                            Array.isArray(e) ||
                                            (a = (function (e, t) {
                                                if (e) {
                                                    if ("string" == typeof e) return o(e, t);
                                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                                    if (("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r)) return Array.from(e);
                                                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(e, t);
                                                }
                                            })(e))
                                        ) {
                                            a && (e = a);
                                            var r = 0,
                                                n = function () {};
                                            return {
                                                s: n,
                                                n: function () {
                                                    return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                                                },
                                                e: function (e) {
                                                    throw e;
                                                },
                                                f: n,
                                            };
                                        }
                                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                    }
                                    var a,
                                        i,
                                        u = !0,
                                        l = !1;
                                    return {
                                        s: function () {
                                            a = e[Symbol.iterator]();
                                        },
                                        n: function () {
                                            var e = a.next();
                                            return (u = e.done), e;
                                        },
                                        e: function (e) {
                                            (l = !0), (i = e);
                                        },
                                        f: function () {
                                            try {
                                                u || null == a.return || a.return();
                                            } finally {
                                                if (l) throw i;
                                            }
                                        },
                                    };
                                })(t);
                            try {
                                for (a.s(); !(r = a.n()).done; ) {
                                    var i = r.value;
                                    if (("string" == typeof i && e(i)) || e(i.src)) return !0;
                                }
                            } catch (e) {
                                a.e(e);
                            } finally {
                                a.f();
                            }
                            return !1;
                        }
                        return !!((0, n.isMediaStream)(t) || (0, n.isBlobUrl)(t)) || m.test(t) || P.test(t) || g.test(t) || O.test(t) || w.test(t);
                    },
                });
        },
        94609: function (e, t, r) {
            "use strict";
            function n(e) {
                return (n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
            var o = (function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" !== n(e) && "function" != typeof e)) return { default: e };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                        }
                    return (r.default = e), t && t.set(e, r), r;
                })(r(2265)),
                a = r(74117),
                i = r(65087);
            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                    (u = function () {
                        return e;
                    }),
                    e
                );
            }
            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function s(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            function f(e, t) {
                return (f =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function p(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function y(e) {
                return (y = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function d(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            var h = (function (e) {
                !(function (e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && f(e, t);
                })(b, e);
                var t,
                    r,
                    u,
                    h =
                        ((t = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                            } catch (e) {
                                return !1;
                            }
                        })()),
                        function () {
                            var e,
                                r,
                                o = y(b);
                            if (t) {
                                var a = y(this).constructor;
                                r = Reflect.construct(o, arguments, a);
                            } else r = o.apply(this, arguments);
                            return (e = r) && ("object" === n(e) || "function" == typeof e) ? e : p(this);
                        });
                function b() {
                    var e;
                    !(function (e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                    })(this, b);
                    for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return (
                        d(p((e = h.call.apply(h, [this].concat(r)))), "callPlayer", a.callPlayer),
                        d(p(e), "onDurationChange", function () {
                            var t = e.getDuration();
                            e.props.onDuration(t);
                        }),
                        d(p(e), "mute", function () {
                            e.callPlayer("setMuted", !0);
                        }),
                        d(p(e), "unmute", function () {
                            e.callPlayer("setMuted", !1);
                        }),
                        d(p(e), "ref", function (t) {
                            e.container = t;
                        }),
                        e
                    );
                }
                return (
                    (r = [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.props.onMount && this.props.onMount(this);
                            },
                        },
                        {
                            key: "load",
                            value: function (e) {
                                var t = this,
                                    r = this.props,
                                    n = r.controls,
                                    o = r.config,
                                    u = r.onError,
                                    s = r.playing,
                                    f = e.match(i.MATCH_URL_DAILYMOTION),
                                    p = ((function (e) {
                                        if (Array.isArray(e)) return e;
                                    })(f) ||
                                        (function (e, t) {
                                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                                var r = [],
                                                    n = !0,
                                                    o = !1,
                                                    a = void 0;
                                                try {
                                                    for (var i, u = e[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                                                } catch (e) {
                                                    (o = !0), (a = e);
                                                } finally {
                                                    try {
                                                        n || null == u.return || u.return();
                                                    } finally {
                                                        if (o) throw a;
                                                    }
                                                }
                                                return r;
                                            }
                                        })(f, 2) ||
                                        (function (e, t) {
                                            if (e) {
                                                if ("string" == typeof e) return c(e, t);
                                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                                if (("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r)) return Array.from(e);
                                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, t);
                                            }
                                        })(f, 2) ||
                                        (function () {
                                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                        })())[1];
                                if (this.player) {
                                    this.player.load(p, { start: (0, a.parseStartTime)(e), autoplay: s });
                                    return;
                                }
                                (0, a.getSDK)("https://api.dmcdn.net/all.js", "DM", "dmAsyncInit", function (e) {
                                    return e.player;
                                }).then(function (r) {
                                    if (t.container) {
                                        var i = r.player;
                                        t.player = new i(t.container, {
                                            width: "100%",
                                            height: "100%",
                                            video: p,
                                            params: (function (e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var r = null != arguments[t] ? arguments[t] : {};
                                                    t % 2
                                                        ? l(Object(r), !0).forEach(function (t) {
                                                              d(e, t, r[t]);
                                                          })
                                                        : Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                                        : l(Object(r)).forEach(function (t) {
                                                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                                          });
                                                }
                                                return e;
                                            })({ controls: n, autoplay: t.props.playing, mute: t.props.muted, start: (0, a.parseStartTime)(e), origin: window.location.origin }, o.params),
                                            events: {
                                                apiready: t.props.onReady,
                                                seeked: function () {
                                                    return t.props.onSeek(t.player.currentTime);
                                                },
                                                video_end: t.props.onEnded,
                                                durationchange: t.onDurationChange,
                                                pause: t.props.onPause,
                                                playing: t.props.onPlay,
                                                waiting: t.props.onBuffer,
                                                error: function (e) {
                                                    return u(e);
                                                },
                                            },
                                        });
                                    }
                                }, u);
                            },
                        },
                        {
                            key: "play",
                            value: function () {
                                this.callPlayer("play");
                            },
                        },
                        {
                            key: "pause",
                            value: function () {
                                this.callPlayer("pause");
                            },
                        },
                        { key: "stop", value: function () {} },
                        {
                            key: "seekTo",
                            value: function (e) {
                                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                this.callPlayer("seek", e), t || this.pause();
                            },
                        },
                        {
                            key: "setVolume",
                            value: function (e) {
                                this.callPlayer("setVolume", e);
                            },
                        },
                        {
                            key: "getDuration",
                            value: function () {
                                return this.player.duration || null;
                            },
                        },
                        {
                            key: "getCurrentTime",
                            value: function () {
                                return this.player.currentTime;
                            },
                        },
                        {
                            key: "getSecondsLoaded",
                            value: function () {
                                return this.player.bufferedTime;
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props.display;
                                return o.default.createElement("div", { style: { width: "100%", height: "100%", display: e } }, o.default.createElement("div", { ref: this.ref }));
                            },
                        },
                    ]),
                    s(b.prototype, r),
                    u && s(b, u),
                    b
                );
            })(o.Component);
            (t.default = h), d(h, "displayName", "DailyMotion"), d(h, "canPlay", i.canPlay.dailymotion), d(h, "loopOnEnded", !0);
        },
        11467: function (e, t, r) {
            "use strict";
            function n(e) {
                return (n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
            var o = (function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" !== n(e) && "function" != typeof e)) return { default: e };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                        }
                    return (r.default = e), t && t.set(e, r), r;
                })(r(2265)),
                a = r(74117),
                i = r(65087);
            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                    (u = function () {
                        return e;
                    }),
                    e
                );
            }
            function l() {
                return (l =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            function s(e, t) {
                return (s =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function f(e) {
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
            function y(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            var d = "https://connect.facebook.net/en_US/sdk.js",
                h = "fbAsyncInit",
                b = (function (e) {
                    !(function (e, t) {
                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && s(e, t);
                    })(b, e);
                    var t,
                        r,
                        i,
                        u =
                            ((t = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                                } catch (e) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var e,
                                    r,
                                    o = p(b);
                                if (t) {
                                    var a = p(this).constructor;
                                    r = Reflect.construct(o, arguments, a);
                                } else r = o.apply(this, arguments);
                                return (e = r) && ("object" === n(e) || "function" == typeof e) ? e : f(this);
                            });
                    function b() {
                        var e;
                        !(function (e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                        })(this, b);
                        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        return (
                            y(f((e = u.call.apply(u, [this].concat(r)))), "callPlayer", a.callPlayer),
                            y(f(e), "playerID", e.props.config.playerId || "".concat("facebook-player-").concat((0, a.randomString)())),
                            y(f(e), "mute", function () {
                                e.callPlayer("mute");
                            }),
                            y(f(e), "unmute", function () {
                                e.callPlayer("unmute");
                            }),
                            e
                        );
                    }
                    return (
                        (r = [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.props.onMount && this.props.onMount(this);
                                },
                            },
                            {
                                key: "load",
                                value: function (e, t) {
                                    var r = this;
                                    if (t) {
                                        (0, a.getSDK)(d, "FB", h).then(function (e) {
                                            return e.XFBML.parse();
                                        });
                                        return;
                                    }
                                    (0, a.getSDK)(d, "FB", h).then(function (e) {
                                        e.init({ appId: r.props.config.appId, xfbml: !0, version: r.props.config.version }),
                                            e.Event.subscribe("xfbml.render", function (e) {
                                                r.props.onLoaded();
                                            }),
                                            e.Event.subscribe("xfbml.ready", function (e) {
                                                "video" === e.type &&
                                                    e.id === r.playerID &&
                                                    ((r.player = e.instance),
                                                    r.player.subscribe("startedPlaying", r.props.onPlay),
                                                    r.player.subscribe("paused", r.props.onPause),
                                                    r.player.subscribe("finishedPlaying", r.props.onEnded),
                                                    r.player.subscribe("startedBuffering", r.props.onBuffer),
                                                    r.player.subscribe("finishedBuffering", r.props.onBufferEnd),
                                                    r.player.subscribe("error", r.props.onError),
                                                    r.props.muted ? r.callPlayer("mute") : r.callPlayer("unmute"),
                                                    r.props.onReady(),
                                                    (document.getElementById(r.playerID).querySelector("iframe").style.visibility = "visible"));
                                            });
                                    });
                                },
                            },
                            {
                                key: "play",
                                value: function () {
                                    this.callPlayer("play");
                                },
                            },
                            {
                                key: "pause",
                                value: function () {
                                    this.callPlayer("pause");
                                },
                            },
                            { key: "stop", value: function () {} },
                            {
                                key: "seekTo",
                                value: function (e) {
                                    var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                    this.callPlayer("seek", e), t || this.pause();
                                },
                            },
                            {
                                key: "setVolume",
                                value: function (e) {
                                    this.callPlayer("setVolume", e);
                                },
                            },
                            {
                                key: "getDuration",
                                value: function () {
                                    return this.callPlayer("getDuration");
                                },
                            },
                            {
                                key: "getCurrentTime",
                                value: function () {
                                    return this.callPlayer("getCurrentPosition");
                                },
                            },
                            {
                                key: "getSecondsLoaded",
                                value: function () {
                                    return null;
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props.config.attributes;
                                    return o.default.createElement(
                                        "div",
                                        l(
                                            {
                                                style: { width: "100%", height: "100%" },
                                                id: this.playerID,
                                                className: "fb-video",
                                                "data-href": this.props.url,
                                                "data-autoplay": this.props.playing ? "true" : "false",
                                                "data-allowfullscreen": "true",
                                                "data-controls": this.props.controls ? "true" : "false",
                                            },
                                            e
                                        )
                                    );
                                },
                            },
                        ]),
                        c(b.prototype, r),
                        i && c(b, i),
                        b
                    );
                })(o.Component);
            (t.default = b), y(b, "displayName", "Facebook"), y(b, "canPlay", i.canPlay.facebook), y(b, "loopOnEnded", !0);
        },
        89737: function (e, t, r) {
            "use strict";
            function n(e) {
                return (n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
            var o = (function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" !== n(e) && "function" != typeof e)) return { default: e };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                        }
                    return (r.default = e), t && t.set(e, r), r;
                })(r(2265)),
                a = r(74117),
                i = r(65087);
            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                    (u = function () {
                        return e;
                    }),
                    e
                );
            }
            function l() {
                return (l =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            function s(e, t) {
                return (s =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function f(e) {
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
            function y(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            var d = "undefined" != typeof navigator,
                h = d && "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
                b = d && (/iPad|iPhone|iPod/.test(navigator.userAgent) || h) && !window.MSStream,
                v = d && /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !window.MSStream,
                m = /www\.dropbox\.com\/.+/,
                P = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/,
                g = (function (e) {
                    !(function (e, t) {
                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && s(e, t);
                    })(h, e);
                    var t,
                        r,
                        u,
                        d =
                            ((t = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                                } catch (e) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var e,
                                    r,
                                    o = p(h);
                                if (t) {
                                    var a = p(this).constructor;
                                    r = Reflect.construct(o, arguments, a);
                                } else r = o.apply(this, arguments);
                                return (e = r) && ("object" === n(e) || "function" == typeof e) ? e : f(this);
                            });
                    function h() {
                        var e;
                        !(function (e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                        })(this, h);
                        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        return (
                            y(f((e = d.call.apply(d, [this].concat(r)))), "onReady", function () {
                                var t;
                                return (t = e.props).onReady.apply(t, arguments);
                            }),
                            y(f(e), "onPlay", function () {
                                var t;
                                return (t = e.props).onPlay.apply(t, arguments);
                            }),
                            y(f(e), "onBuffer", function () {
                                var t;
                                return (t = e.props).onBuffer.apply(t, arguments);
                            }),
                            y(f(e), "onBufferEnd", function () {
                                var t;
                                return (t = e.props).onBufferEnd.apply(t, arguments);
                            }),
                            y(f(e), "onPause", function () {
                                var t;
                                return (t = e.props).onPause.apply(t, arguments);
                            }),
                            y(f(e), "onEnded", function () {
                                var t;
                                return (t = e.props).onEnded.apply(t, arguments);
                            }),
                            y(f(e), "onError", function () {
                                var t;
                                return (t = e.props).onError.apply(t, arguments);
                            }),
                            y(f(e), "onPlayBackRateChange", function (t) {
                                return e.props.onPlaybackRateChange(t.target.playbackRate);
                            }),
                            y(f(e), "onEnablePIP", function () {
                                var t;
                                return (t = e.props).onEnablePIP.apply(t, arguments);
                            }),
                            y(f(e), "onDisablePIP", function (t) {
                                var r = e.props,
                                    n = r.onDisablePIP,
                                    o = r.playing;
                                n(t), o && e.play();
                            }),
                            y(f(e), "onPresentationModeChange", function (t) {
                                if (e.player && (0, a.supportsWebKitPresentationMode)(e.player)) {
                                    var r = e.player.webkitPresentationMode;
                                    "picture-in-picture" === r ? e.onEnablePIP(t) : "inline" === r && e.onDisablePIP(t);
                                }
                            }),
                            y(f(e), "onSeek", function (t) {
                                e.props.onSeek(t.target.currentTime);
                            }),
                            y(f(e), "mute", function () {
                                e.player.muted = !0;
                            }),
                            y(f(e), "unmute", function () {
                                e.player.muted = !1;
                            }),
                            y(f(e), "renderSourceElement", function (e, t) {
                                return "string" == typeof e ? o.default.createElement("source", { key: t, src: e }) : o.default.createElement("source", l({ key: t }, e));
                            }),
                            y(f(e), "renderTrack", function (e, t) {
                                return o.default.createElement("track", l({ key: t }, e));
                            }),
                            y(f(e), "ref", function (t) {
                                e.player && (e.prevPlayer = e.player), (e.player = t);
                            }),
                            e
                        );
                    }
                    return (
                        (r = [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.props.onMount && this.props.onMount(this), this.addListeners(this.player);
                                    var e = this.getSource(this.props.url);
                                    e && (this.player.src = e), (b || this.props.config.forceDisableHls) && this.player.load();
                                },
                            },
                            {
                                key: "componentDidUpdate",
                                value: function (e) {
                                    this.shouldUseAudio(this.props) !== this.shouldUseAudio(e) && (this.removeListeners(this.prevPlayer, e.url), this.addListeners(this.player)),
                                        this.props.url === e.url || (0, a.isMediaStream)(this.props.url) || this.props.url instanceof Array || (this.player.srcObject = null);
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.player.removeAttribute("src"), this.removeListeners(this.player), this.hls && this.hls.destroy();
                                },
                            },
                            {
                                key: "addListeners",
                                value: function (e) {
                                    var t = this.props,
                                        r = t.url,
                                        n = t.playsinline;
                                    e.addEventListener("play", this.onPlay),
                                        e.addEventListener("waiting", this.onBuffer),
                                        e.addEventListener("playing", this.onBufferEnd),
                                        e.addEventListener("pause", this.onPause),
                                        e.addEventListener("seeked", this.onSeek),
                                        e.addEventListener("ended", this.onEnded),
                                        e.addEventListener("error", this.onError),
                                        e.addEventListener("ratechange", this.onPlayBackRateChange),
                                        e.addEventListener("enterpictureinpicture", this.onEnablePIP),
                                        e.addEventListener("leavepictureinpicture", this.onDisablePIP),
                                        e.addEventListener("webkitpresentationmodechanged", this.onPresentationModeChange),
                                        this.shouldUseHLS(r) || e.addEventListener("canplay", this.onReady),
                                        n && (e.setAttribute("playsinline", ""), e.setAttribute("webkit-playsinline", ""), e.setAttribute("x5-playsinline", ""));
                                },
                            },
                            {
                                key: "removeListeners",
                                value: function (e, t) {
                                    e.removeEventListener("canplay", this.onReady),
                                        e.removeEventListener("play", this.onPlay),
                                        e.removeEventListener("waiting", this.onBuffer),
                                        e.removeEventListener("playing", this.onBufferEnd),
                                        e.removeEventListener("pause", this.onPause),
                                        e.removeEventListener("seeked", this.onSeek),
                                        e.removeEventListener("ended", this.onEnded),
                                        e.removeEventListener("error", this.onError),
                                        e.removeEventListener("ratechange", this.onPlayBackRateChange),
                                        e.removeEventListener("enterpictureinpicture", this.onEnablePIP),
                                        e.removeEventListener("leavepictureinpicture", this.onDisablePIP),
                                        e.removeEventListener("webkitpresentationmodechanged", this.onPresentationModeChange),
                                        this.shouldUseHLS(t) || e.removeEventListener("canplay", this.onReady);
                                },
                            },
                            {
                                key: "shouldUseAudio",
                                value: function (e) {
                                    return !e.config.forceVideo && !e.config.attributes.poster && (i.AUDIO_EXTENSIONS.test(e.url) || e.config.forceAudio);
                                },
                            },
                            {
                                key: "shouldUseHLS",
                                value: function (e) {
                                    return (!!v && !!this.props.config.forceSafariHLS) || !!this.props.config.forceHLS || (!b && !this.props.config.forceDisableHls && (i.HLS_EXTENSIONS.test(e) || P.test(e)));
                                },
                            },
                            {
                                key: "shouldUseDASH",
                                value: function (e) {
                                    return i.DASH_EXTENSIONS.test(e) || this.props.config.forceDASH;
                                },
                            },
                            {
                                key: "shouldUseFLV",
                                value: function (e) {
                                    return i.FLV_EXTENSIONS.test(e) || this.props.config.forceFLV;
                                },
                            },
                            {
                                key: "load",
                                value: function (e) {
                                    var t = this,
                                        r = this.props.config,
                                        n = r.hlsVersion,
                                        o = r.hlsOptions,
                                        i = r.dashVersion,
                                        u = r.flvVersion;
                                    if (
                                        (this.hls && this.hls.destroy(),
                                        this.dash && this.dash.reset(),
                                        this.shouldUseHLS(e) &&
                                            (0, a.getSDK)("https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace("VERSION", n), "Hls").then(function (r) {
                                                if (
                                                    ((t.hls = new r(o)),
                                                    t.hls.on(r.Events.MANIFEST_PARSED, function () {
                                                        t.props.onReady();
                                                    }),
                                                    t.hls.on(r.Events.ERROR, function (e, n) {
                                                        t.props.onError(e, n, t.hls, r);
                                                    }),
                                                    P.test(e))
                                                ) {
                                                    var n = e.match(P)[1];
                                                    t.hls.loadSource("https://videodelivery.net/{id}/manifest/video.m3u8".replace("{id}", n));
                                                } else t.hls.loadSource(e);
                                                t.hls.attachMedia(t.player), t.props.onLoaded();
                                            }),
                                        this.shouldUseDASH(e) &&
                                            (0, a.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace("VERSION", i), "dashjs").then(function (r) {
                                                (t.dash = r.MediaPlayer().create()),
                                                    t.dash.initialize(t.player, e, t.props.playing),
                                                    t.dash.on("error", t.props.onError),
                                                    3 > parseInt(i) ? t.dash.getDebug().setLogToBrowserConsole(!1) : t.dash.updateSettings({ debug: { logLevel: r.Debug.LOG_LEVEL_NONE } }),
                                                    t.props.onLoaded();
                                            }),
                                        this.shouldUseFLV(e) &&
                                            (0, a.getSDK)("https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js".replace("VERSION", u), "flvjs").then(function (r) {
                                                (t.flv = r.createPlayer({ type: "flv", url: e })),
                                                    t.flv.attachMediaElement(t.player),
                                                    t.flv.on(r.Events.ERROR, function (e, n) {
                                                        t.props.onError(e, n, t.flv, r);
                                                    }),
                                                    t.flv.load(),
                                                    t.props.onLoaded();
                                            }),
                                        e instanceof Array)
                                    )
                                        this.player.load();
                                    else if ((0, a.isMediaStream)(e))
                                        try {
                                            this.player.srcObject = e;
                                        } catch (t) {
                                            this.player.src = window.URL.createObjectURL(e);
                                        }
                                },
                            },
                            {
                                key: "play",
                                value: function () {
                                    var e = this.player.play();
                                    e && e.catch(this.props.onError);
                                },
                            },
                            {
                                key: "pause",
                                value: function () {
                                    this.player.pause();
                                },
                            },
                            {
                                key: "stop",
                                value: function () {
                                    this.player.removeAttribute("src"), this.dash && this.dash.reset();
                                },
                            },
                            {
                                key: "seekTo",
                                value: function (e) {
                                    var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                    (this.player.currentTime = e), t || this.pause();
                                },
                            },
                            {
                                key: "setVolume",
                                value: function (e) {
                                    this.player.volume = e;
                                },
                            },
                            {
                                key: "enablePIP",
                                value: function () {
                                    this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player
                                        ? this.player.requestPictureInPicture()
                                        : (0, a.supportsWebKitPresentationMode)(this.player) && "picture-in-picture" !== this.player.webkitPresentationMode && this.player.webkitSetPresentationMode("picture-in-picture");
                                },
                            },
                            {
                                key: "disablePIP",
                                value: function () {
                                    document.exitPictureInPicture && document.pictureInPictureElement === this.player
                                        ? document.exitPictureInPicture()
                                        : (0, a.supportsWebKitPresentationMode)(this.player) && "inline" !== this.player.webkitPresentationMode && this.player.webkitSetPresentationMode("inline");
                                },
                            },
                            {
                                key: "setPlaybackRate",
                                value: function (e) {
                                    try {
                                        this.player.playbackRate = e;
                                    } catch (e) {
                                        this.props.onError(e);
                                    }
                                },
                            },
                            {
                                key: "getDuration",
                                value: function () {
                                    if (!this.player) return null;
                                    var e = this.player,
                                        t = e.duration,
                                        r = e.seekable;
                                    return t === 1 / 0 && r.length > 0 ? r.end(r.length - 1) : t;
                                },
                            },
                            {
                                key: "getCurrentTime",
                                value: function () {
                                    return this.player ? this.player.currentTime : null;
                                },
                            },
                            {
                                key: "getSecondsLoaded",
                                value: function () {
                                    if (!this.player) return null;
                                    var e = this.player.buffered;
                                    if (0 === e.length) return 0;
                                    var t = e.end(e.length - 1),
                                        r = this.getDuration();
                                    return t > r ? r : t;
                                },
                            },
                            {
                                key: "getSource",
                                value: function (e) {
                                    var t = this.shouldUseHLS(e),
                                        r = this.shouldUseDASH(e),
                                        n = this.shouldUseFLV(e);
                                    return e instanceof Array || (0, a.isMediaStream)(e) || t || r || n ? void 0 : m.test(e) ? e.replace("www.dropbox.com", "dl.dropboxusercontent.com") : e;
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        t = e.url,
                                        r = e.playing,
                                        n = e.loop,
                                        a = e.controls,
                                        i = e.muted,
                                        u = e.config,
                                        c = e.width,
                                        s = e.height,
                                        f = this.shouldUseAudio(this.props);
                                    return o.default.createElement(
                                        f ? "audio" : "video",
                                        l(
                                            { ref: this.ref, src: this.getSource(t), style: { width: "auto" === c ? c : "100%", height: "auto" === s ? s : "100%" }, preload: "auto", autoPlay: r || void 0, controls: a, muted: i, loop: n },
                                            u.attributes
                                        ),
                                        t instanceof Array && t.map(this.renderSourceElement),
                                        u.tracks.map(this.renderTrack)
                                    );
                                },
                            },
                        ]),
                        c(h.prototype, r),
                        u && c(h, u),
                        h
                    );
                })(o.Component);
            (t.default = g), y(g, "displayName", "FilePlayer"), y(g, "canPlay", i.canPlay.file);
        },
        57321: function (e, t, r) {
            "use strict";
            function n(e) {
                return (n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
            var o = (function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" !== n(e) && "function" != typeof e)) return { default: e };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                        }
                    return (r.default = e), t && t.set(e, r), r;
                })(r(2265)),
                a = r(74117),
                i = r(65087);
            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                    (u = function () {
                        return e;
                    }),
                    e
                );
            }
            function l(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            function c(e, t) {
                return (c =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function s(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function f(e) {
                return (f = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function p(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            var y = (function (e) {
                !(function (e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
                })(y, e);
                var t,
                    r,
                    i,
                    u =
                        ((t = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                            } catch (e) {
                                return !1;
                            }
                        })()),
                        function () {
                            var e,
                                r,
                                o = f(y);
                            if (t) {
                                var a = f(this).constructor;
                                r = Reflect.construct(o, arguments, a);
                            } else r = o.apply(this, arguments);
                            return (e = r) && ("object" === n(e) || "function" == typeof e) ? e : s(this);
                        });
                function y() {
                    var e;
                    !(function (e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                    })(this, y);
                    for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return (
                        p(s((e = u.call.apply(u, [this].concat(r)))), "callPlayer", a.callPlayer),
                        p(s(e), "duration", null),
                        p(s(e), "currentTime", null),
                        p(s(e), "secondsLoaded", null),
                        p(s(e), "mute", function () {
                            e.callPlayer("mute");
                        }),
                        p(s(e), "unmute", function () {
                            e.callPlayer("unmute");
                        }),
                        p(s(e), "ref", function (t) {
                            e.iframe = t;
                        }),
                        e
                    );
                }
                return (
                    (r = [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.props.onMount && this.props.onMount(this);
                            },
                        },
                        {
                            key: "load",
                            value: function (e) {
                                var t = this;
                                (0, a.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js", "playerjs").then(function (e) {
                                    t.iframe &&
                                        ((t.player = new e.Player(t.iframe)),
                                        t.player.on("ready", function () {
                                            setTimeout(function () {
                                                (t.player.isReady = !0), t.player.setLoop(t.props.loop), t.props.muted && t.player.mute(), t.addListeners(t.player, t.props), t.props.onReady();
                                            }, 500);
                                        }));
                                }, this.props.onError);
                            },
                        },
                        {
                            key: "addListeners",
                            value: function (e, t) {
                                var r = this;
                                e.on("play", t.onPlay),
                                    e.on("pause", t.onPause),
                                    e.on("ended", t.onEnded),
                                    e.on("error", t.onError),
                                    e.on("timeupdate", function (e) {
                                        var t = e.duration,
                                            n = e.seconds;
                                        (r.duration = t), (r.currentTime = n);
                                    });
                            },
                        },
                        {
                            key: "play",
                            value: function () {
                                this.callPlayer("play");
                            },
                        },
                        {
                            key: "pause",
                            value: function () {
                                this.callPlayer("pause");
                            },
                        },
                        { key: "stop", value: function () {} },
                        {
                            key: "seekTo",
                            value: function (e) {
                                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                this.callPlayer("setCurrentTime", e), t || this.pause();
                            },
                        },
                        {
                            key: "setVolume",
                            value: function (e) {
                                this.callPlayer("setVolume", e);
                            },
                        },
                        {
                            key: "setLoop",
                            value: function (e) {
                                this.callPlayer("setLoop", e);
                            },
                        },
                        {
                            key: "getDuration",
                            value: function () {
                                return this.duration;
                            },
                        },
                        {
                            key: "getCurrentTime",
                            value: function () {
                                return this.currentTime;
                            },
                        },
                        {
                            key: "getSecondsLoaded",
                            value: function () {
                                return this.secondsLoaded;
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                return o.default.createElement("iframe", {
                                    ref: this.ref,
                                    src: this.props.url,
                                    frameBorder: "0",
                                    scrolling: "no",
                                    style: { width: "100%", height: "100%" },
                                    allow: "encrypted-media; autoplay; fullscreen;",
                                    referrerPolicy: "no-referrer-when-downgrade",
                                });
                            },
                        },
                    ]),
                    l(y.prototype, r),
                    i && l(y, i),
                    y
                );
            })(o.Component);
            (t.default = y), p(y, "displayName", "Kaltura"), p(y, "canPlay", i.canPlay.kaltura);
        },
        92996: function (e, t, r) {
            "use strict";
            function n(e) {
                return (n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
            var o = (function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" !== n(e) && "function" != typeof e)) return { default: e };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                        }
                    return (r.default = e), t && t.set(e, r), r;
                })(r(2265)),
                a = r(74117),
                i = r(65087);
            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                    (u = function () {
                        return e;
                    }),
                    e
                );
            }
            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? l(Object(r), !0).forEach(function (t) {
                              d(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                        : l(Object(r)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                          });
                }
                return e;
            }
            function s(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            function f(e, t) {
                return (f =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function p(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function y(e) {
                return (y = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function d(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            var h = (function (e) {
                !(function (e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && f(e, t);
                })(h, e);
                var t,
                    r,
                    u,
                    l =
                        ((t = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                            } catch (e) {
                                return !1;
                            }
                        })()),
                        function () {
                            var e,
                                r,
                                o = y(h);
                            if (t) {
                                var a = y(this).constructor;
                                r = Reflect.construct(o, arguments, a);
                            } else r = o.apply(this, arguments);
                            return (e = r) && ("object" === n(e) || "function" == typeof e) ? e : p(this);
                        });
                function h() {
                    var e;
                    !(function (e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                    })(this, h);
                    for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return (
                        d(p((e = l.call.apply(l, [this].concat(r)))), "callPlayer", a.callPlayer),
                        d(p(e), "duration", null),
                        d(p(e), "currentTime", null),
                        d(p(e), "secondsLoaded", null),
                        d(p(e), "mute", function () {}),
                        d(p(e), "unmute", function () {}),
                        d(p(e), "ref", function (t) {
                            e.iframe = t;
                        }),
                        e
                    );
                }
                return (
                    (r = [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.props.onMount && this.props.onMount(this);
                            },
                        },
                        {
                            key: "load",
                            value: function (e) {
                                var t = this;
                                (0, a.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js", "Mixcloud").then(function (e) {
                                    (t.player = e.PlayerWidget(t.iframe)),
                                        t.player.ready.then(function () {
                                            t.player.events.play.on(t.props.onPlay),
                                                t.player.events.pause.on(t.props.onPause),
                                                t.player.events.ended.on(t.props.onEnded),
                                                t.player.events.error.on(t.props.error),
                                                t.player.events.progress.on(function (e, r) {
                                                    (t.currentTime = e), (t.duration = r);
                                                }),
                                                t.props.onReady();
                                        });
                                }, this.props.onError);
                            },
                        },
                        {
                            key: "play",
                            value: function () {
                                this.callPlayer("play");
                            },
                        },
                        {
                            key: "pause",
                            value: function () {
                                this.callPlayer("pause");
                            },
                        },
                        { key: "stop", value: function () {} },
                        {
                            key: "seekTo",
                            value: function (e) {
                                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                this.callPlayer("seek", e), t || this.pause();
                            },
                        },
                        { key: "setVolume", value: function (e) {} },
                        {
                            key: "getDuration",
                            value: function () {
                                return this.duration;
                            },
                        },
                        {
                            key: "getCurrentTime",
                            value: function () {
                                return this.currentTime;
                            },
                        },
                        {
                            key: "getSecondsLoaded",
                            value: function () {
                                return null;
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.url,
                                    r = e.config,
                                    n = t.match(i.MATCH_URL_MIXCLOUD)[1],
                                    u = (0, a.queryString)(c(c({}, r.options), {}, { feed: "/".concat(n, "/") }));
                                return o.default.createElement("iframe", { key: n, ref: this.ref, style: { width: "100%", height: "100%" }, src: "https://www.mixcloud.com/widget/iframe/?".concat(u), frameBorder: "0", allow: "autoplay" });
                            },
                        },
                    ]),
                    s(h.prototype, r),
                    u && s(h, u),
                    h
                );
            })(o.Component);
            (t.default = h), d(h, "displayName", "Mixcloud"), d(h, "canPlay", i.canPlay.mixcloud), d(h, "loopOnEnded", !0);
        },
        44095: function (e, t, r) {
            "use strict";
            function n(e) {
                return (n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
            var o = (function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" !== n(e) && "function" != typeof e)) return { default: e };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                        }
                    return (r.default = e), t && t.set(e, r), r;
                })(r(2265)),
                a = r(74117),
                i = r(65087);
            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                    (u = function () {
                        return e;
                    }),
                    e
                );
            }
            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? l(Object(r), !0).forEach(function (t) {
                              d(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                        : l(Object(r)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                          });
                }
                return e;
            }
            function s(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            function f(e, t) {
                return (f =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function p(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function y(e) {
                return (y = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function d(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            var h = (function (e) {
                !(function (e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && f(e, t);
                })(l, e);
                var t,
                    r,
                    i,
                    u =
                        ((t = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                            } catch (e) {
                                return !1;
                            }
                        })()),
                        function () {
                            var e,
                                r,
                                o = y(l);
                            if (t) {
                                var a = y(this).constructor;
                                r = Reflect.construct(o, arguments, a);
                            } else r = o.apply(this, arguments);
                            return (e = r) && ("object" === n(e) || "function" == typeof e) ? e : p(this);
                        });
                function l() {
                    var e;
                    !(function (e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                    })(this, l);
                    for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return (
                        d(p((e = u.call.apply(u, [this].concat(r)))), "callPlayer", a.callPlayer),
                        d(p(e), "duration", null),
                        d(p(e), "currentTime", null),
                        d(p(e), "fractionLoaded", null),
                        d(p(e), "mute", function () {
                            e.setVolume(0);
                        }),
                        d(p(e), "unmute", function () {
                            null !== e.props.volume && e.setVolume(e.props.volume);
                        }),
                        d(p(e), "ref", function (t) {
                            e.iframe = t;
                        }),
                        e
                    );
                }
                return (
                    (r = [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.props.onMount && this.props.onMount(this);
                            },
                        },
                        {
                            key: "load",
                            value: function (e, t) {
                                var r = this;
                                (0, a.getSDK)("https://w.soundcloud.com/player/api.js", "SC").then(function (n) {
                                    if (r.iframe) {
                                        var o = n.Widget.Events,
                                            a = o.PLAY,
                                            i = o.PLAY_PROGRESS,
                                            u = o.PAUSE,
                                            l = o.FINISH,
                                            s = o.ERROR;
                                        t ||
                                            ((r.player = n.Widget(r.iframe)),
                                            r.player.bind(a, r.props.onPlay),
                                            r.player.bind(u, function () {
                                                r.duration - r.currentTime < 0.05 || r.props.onPause();
                                            }),
                                            r.player.bind(i, function (e) {
                                                (r.currentTime = e.currentPosition / 1e3), (r.fractionLoaded = e.loadedProgress);
                                            }),
                                            r.player.bind(l, function () {
                                                return r.props.onEnded();
                                            }),
                                            r.player.bind(s, function (e) {
                                                return r.props.onError(e);
                                            })),
                                            r.player.load(
                                                e,
                                                c(
                                                    c({}, r.props.config.options),
                                                    {},
                                                    {
                                                        callback: function () {
                                                            r.player.getDuration(function (e) {
                                                                (r.duration = e / 1e3), r.props.onReady();
                                                            });
                                                        },
                                                    }
                                                )
                                            );
                                    }
                                });
                            },
                        },
                        {
                            key: "play",
                            value: function () {
                                this.callPlayer("play");
                            },
                        },
                        {
                            key: "pause",
                            value: function () {
                                this.callPlayer("pause");
                            },
                        },
                        { key: "stop", value: function () {} },
                        {
                            key: "seekTo",
                            value: function (e) {
                                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                this.callPlayer("seekTo", 1e3 * e), t || this.pause();
                            },
                        },
                        {
                            key: "setVolume",
                            value: function (e) {
                                this.callPlayer("setVolume", 100 * e);
                            },
                        },
                        {
                            key: "getDuration",
                            value: function () {
                                return this.duration;
                            },
                        },
                        {
                            key: "getCurrentTime",
                            value: function () {
                                return this.currentTime;
                            },
                        },
                        {
                            key: "getSecondsLoaded",
                            value: function () {
                                return this.fractionLoaded * this.duration;
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props.display;
                                return o.default.createElement("iframe", {
                                    ref: this.ref,
                                    src: "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),
                                    style: { width: "100%", height: "100%", display: e },
                                    frameBorder: 0,
                                    allow: "autoplay",
                                });
                            },
                        },
                    ]),
                    s(l.prototype, r),
                    i && s(l, i),
                    l
                );
            })(o.Component);
            (t.default = h), d(h, "displayName", "SoundCloud"), d(h, "canPlay", i.canPlay.soundcloud), d(h, "loopOnEnded", !0);
        },
        81182: function (e, t, r) {
            "use strict";
            function n(e) {
                return (n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
            var o = (function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" !== n(e) && "function" != typeof e)) return { default: e };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                        }
                    return (r.default = e), t && t.set(e, r), r;
                })(r(2265)),
                a = r(74117),
                i = r(65087);
            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                    (u = function () {
                        return e;
                    }),
                    e
                );
            }
            function l(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            function c(e, t) {
                return (c =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function s(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function f(e) {
                return (f = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function p(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            var y = (function (e) {
                !(function (e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
                })(d, e);
                var t,
                    r,
                    u,
                    y =
                        ((t = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                            } catch (e) {
                                return !1;
                            }
                        })()),
                        function () {
                            var e,
                                r,
                                o = f(d);
                            if (t) {
                                var a = f(this).constructor;
                                r = Reflect.construct(o, arguments, a);
                            } else r = o.apply(this, arguments);
                            return (e = r) && ("object" === n(e) || "function" == typeof e) ? e : s(this);
                        });
                function d() {
                    var e;
                    !(function (e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                    })(this, d);
                    for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return (
                        p(s((e = y.call.apply(y, [this].concat(r)))), "callPlayer", a.callPlayer),
                        p(s(e), "duration", null),
                        p(s(e), "currentTime", null),
                        p(s(e), "secondsLoaded", null),
                        p(s(e), "mute", function () {
                            e.callPlayer("mute");
                        }),
                        p(s(e), "unmute", function () {
                            e.callPlayer("unmute");
                        }),
                        p(s(e), "ref", function (t) {
                            e.iframe = t;
                        }),
                        e
                    );
                }
                return (
                    (r = [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.props.onMount && this.props.onMount(this);
                            },
                        },
                        {
                            key: "load",
                            value: function (e) {
                                var t = this;
                                (0, a.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js", "playerjs").then(function (e) {
                                    t.iframe &&
                                        ((t.player = new e.Player(t.iframe)),
                                        t.player.setLoop(t.props.loop),
                                        t.player.on("ready", t.props.onReady),
                                        t.player.on("play", t.props.onPlay),
                                        t.player.on("pause", t.props.onPause),
                                        t.player.on("seeked", t.props.onSeek),
                                        t.player.on("ended", t.props.onEnded),
                                        t.player.on("error", t.props.onError),
                                        t.player.on("timeupdate", function (e) {
                                            var r = e.duration,
                                                n = e.seconds;
                                            (t.duration = r), (t.currentTime = n);
                                        }),
                                        t.player.on("buffered", function (e) {
                                            var r = e.percent;
                                            t.duration && (t.secondsLoaded = t.duration * r);
                                        }),
                                        t.props.muted && t.player.mute());
                                }, this.props.onError);
                            },
                        },
                        {
                            key: "play",
                            value: function () {
                                this.callPlayer("play");
                            },
                        },
                        {
                            key: "pause",
                            value: function () {
                                this.callPlayer("pause");
                            },
                        },
                        { key: "stop", value: function () {} },
                        {
                            key: "seekTo",
                            value: function (e) {
                                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                this.callPlayer("setCurrentTime", e), t || this.pause();
                            },
                        },
                        {
                            key: "setVolume",
                            value: function (e) {
                                this.callPlayer("setVolume", 100 * e);
                            },
                        },
                        {
                            key: "setLoop",
                            value: function (e) {
                                this.callPlayer("setLoop", e);
                            },
                        },
                        {
                            key: "getDuration",
                            value: function () {
                                return this.duration;
                            },
                        },
                        {
                            key: "getCurrentTime",
                            value: function () {
                                return this.currentTime;
                            },
                        },
                        {
                            key: "getSecondsLoaded",
                            value: function () {
                                return this.secondsLoaded;
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props.url.match(i.MATCH_URL_STREAMABLE)[1];
                                return o.default.createElement("iframe", {
                                    ref: this.ref,
                                    src: "https://streamable.com/o/".concat(e),
                                    frameBorder: "0",
                                    scrolling: "no",
                                    style: { width: "100%", height: "100%" },
                                    allow: "encrypted-media; autoplay; fullscreen;",
                                });
                            },
                        },
                    ]),
                    l(d.prototype, r),
                    u && l(d, u),
                    d
                );
            })(o.Component);
            (t.default = y), p(y, "displayName", "Streamable"), p(y, "canPlay", i.canPlay.streamable);
        },
        12569: function (e, t, r) {
            "use strict";
            function n(e) {
                return (n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
            var o = (function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" !== n(e) && "function" != typeof e)) return { default: e };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                        }
                    return (r.default = e), t && t.set(e, r), r;
                })(r(2265)),
                a = r(74117),
                i = r(65087);
            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                    (u = function () {
                        return e;
                    }),
                    e
                );
            }
            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            function s(e, t) {
                return (s =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function f(e) {
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
            function y(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            var d = (function (e) {
                !(function (e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && s(e, t);
                })(h, e);
                var t,
                    r,
                    u,
                    d =
                        ((t = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                            } catch (e) {
                                return !1;
                            }
                        })()),
                        function () {
                            var e,
                                r,
                                o = p(h);
                            if (t) {
                                var a = p(this).constructor;
                                r = Reflect.construct(o, arguments, a);
                            } else r = o.apply(this, arguments);
                            return (e = r) && ("object" === n(e) || "function" == typeof e) ? e : f(this);
                        });
                function h() {
                    var e;
                    !(function (e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                    })(this, h);
                    for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return (
                        y(f((e = d.call.apply(d, [this].concat(r)))), "callPlayer", a.callPlayer),
                        y(f(e), "playerID", e.props.config.playerId || "".concat("twitch-player-").concat((0, a.randomString)())),
                        y(f(e), "mute", function () {
                            e.callPlayer("setMuted", !0);
                        }),
                        y(f(e), "unmute", function () {
                            e.callPlayer("setMuted", !1);
                        }),
                        e
                    );
                }
                return (
                    (r = [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.props.onMount && this.props.onMount(this);
                            },
                        },
                        {
                            key: "load",
                            value: function (e, t) {
                                var r = this,
                                    n = this.props,
                                    o = n.playsinline,
                                    u = n.onError,
                                    c = n.config,
                                    s = n.controls,
                                    f = i.MATCH_URL_TWITCH_CHANNEL.test(e),
                                    p = f ? e.match(i.MATCH_URL_TWITCH_CHANNEL)[1] : e.match(i.MATCH_URL_TWITCH_VIDEO)[1];
                                if (t) {
                                    f ? this.player.setChannel(p) : this.player.setVideo("v" + p);
                                    return;
                                }
                                (0, a.getSDK)("https://player.twitch.tv/js/embed/v1.js", "Twitch").then(function (t) {
                                    r.player = new t.Player(
                                        r.playerID,
                                        (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var r = null != arguments[t] ? arguments[t] : {};
                                                t % 2
                                                    ? l(Object(r), !0).forEach(function (t) {
                                                          y(e, t, r[t]);
                                                      })
                                                    : Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                                    : l(Object(r)).forEach(function (t) {
                                                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                                      });
                                            }
                                            return e;
                                        })(
                                            { video: f ? "" : p, channel: f ? p : "", height: "100%", width: "100%", playsinline: o, autoplay: r.props.playing, muted: r.props.muted, controls: !!f || s, time: (0, a.parseStartTime)(e) },
                                            c.options
                                        )
                                    );
                                    var n = t.Player,
                                        i = n.READY,
                                        u = n.PLAYING,
                                        d = n.PAUSE,
                                        h = n.ENDED,
                                        b = n.ONLINE,
                                        v = n.OFFLINE,
                                        m = n.SEEK;
                                    r.player.addEventListener(i, r.props.onReady),
                                        r.player.addEventListener(u, r.props.onPlay),
                                        r.player.addEventListener(d, r.props.onPause),
                                        r.player.addEventListener(h, r.props.onEnded),
                                        r.player.addEventListener(m, r.props.onSeek),
                                        r.player.addEventListener(b, r.props.onLoaded),
                                        r.player.addEventListener(v, r.props.onLoaded);
                                }, u);
                            },
                        },
                        {
                            key: "play",
                            value: function () {
                                this.callPlayer("play");
                            },
                        },
                        {
                            key: "pause",
                            value: function () {
                                this.callPlayer("pause");
                            },
                        },
                        {
                            key: "stop",
                            value: function () {
                                this.callPlayer("pause");
                            },
                        },
                        {
                            key: "seekTo",
                            value: function (e) {
                                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                this.callPlayer("seek", e), t || this.pause();
                            },
                        },
                        {
                            key: "setVolume",
                            value: function (e) {
                                this.callPlayer("setVolume", e);
                            },
                        },
                        {
                            key: "getDuration",
                            value: function () {
                                return this.callPlayer("getDuration");
                            },
                        },
                        {
                            key: "getCurrentTime",
                            value: function () {
                                return this.callPlayer("getCurrentTime");
                            },
                        },
                        {
                            key: "getSecondsLoaded",
                            value: function () {
                                return null;
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                return o.default.createElement("div", { style: { width: "100%", height: "100%" }, id: this.playerID });
                            },
                        },
                    ]),
                    c(h.prototype, r),
                    u && c(h, u),
                    h
                );
            })(o.Component);
            (t.default = d), y(d, "displayName", "Twitch"), y(d, "canPlay", i.canPlay.twitch), y(d, "loopOnEnded", !0);
        },
        51296: function (e, t, r) {
            "use strict";
            function n(e) {
                return (n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
            var o = (function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" !== n(e) && "function" != typeof e)) return { default: e };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                        }
                    return (r.default = e), t && t.set(e, r), r;
                })(r(2265)),
                a = r(74117),
                i = r(65087);
            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                    (u = function () {
                        return e;
                    }),
                    e
                );
            }
            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            function s(e, t) {
                return (s =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function f(e) {
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
            function y(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            var d = (function (e) {
                !(function (e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && s(e, t);
                })(h, e);
                var t,
                    r,
                    u,
                    d =
                        ((t = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                            } catch (e) {
                                return !1;
                            }
                        })()),
                        function () {
                            var e,
                                r,
                                o = p(h);
                            if (t) {
                                var a = p(this).constructor;
                                r = Reflect.construct(o, arguments, a);
                            } else r = o.apply(this, arguments);
                            return (e = r) && ("object" === n(e) || "function" == typeof e) ? e : f(this);
                        });
                function h() {
                    var e;
                    !(function (e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                    })(this, h);
                    for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return (
                        y(f((e = d.call.apply(d, [this].concat(r)))), "callPlayer", a.callPlayer),
                        y(f(e), "mute", function () {
                            e.setVolume(0);
                        }),
                        y(f(e), "unmute", function () {
                            null !== e.props.volume && e.setVolume(e.props.volume);
                        }),
                        y(f(e), "ref", function (t) {
                            e.container = t;
                        }),
                        e
                    );
                }
                return (
                    (r = [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.props.onMount && this.props.onMount(this);
                            },
                        },
                        {
                            key: "load",
                            value: function (e) {
                                var t = this,
                                    r = this.props,
                                    n = r.playing,
                                    o = r.config,
                                    u = r.onError,
                                    c = r.onDuration,
                                    s = e && e.match(i.MATCH_URL_VIDYARD)[1];
                                this.player && this.stop(),
                                    (0, a.getSDK)("https://play.vidyard.com/embed/v4.js", "VidyardV4", "onVidyardAPI").then(function (e) {
                                        t.container &&
                                            (e.api.addReadyListener(function (e, r) {
                                                t.player ||
                                                    ((t.player = r),
                                                    t.player.on("ready", t.props.onReady),
                                                    t.player.on("play", t.props.onPlay),
                                                    t.player.on("pause", t.props.onPause),
                                                    t.player.on("seek", t.props.onSeek),
                                                    t.player.on("playerComplete", t.props.onEnded));
                                            }, s),
                                            e.api.renderPlayer(
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var r = null != arguments[t] ? arguments[t] : {};
                                                        t % 2
                                                            ? l(Object(r), !0).forEach(function (t) {
                                                                  y(e, t, r[t]);
                                                              })
                                                            : Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                                            : l(Object(r)).forEach(function (t) {
                                                                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                                              });
                                                    }
                                                    return e;
                                                })({ uuid: s, container: t.container, autoplay: n ? 1 : 0 }, o.options)
                                            ),
                                            e.api.getPlayerMetadata(s).then(function (e) {
                                                (t.duration = e.length_in_seconds), c(e.length_in_seconds);
                                            }));
                                    }, u);
                            },
                        },
                        {
                            key: "play",
                            value: function () {
                                this.callPlayer("play");
                            },
                        },
                        {
                            key: "pause",
                            value: function () {
                                this.callPlayer("pause");
                            },
                        },
                        {
                            key: "stop",
                            value: function () {
                                window.VidyardV4.api.destroyPlayer(this.player);
                            },
                        },
                        {
                            key: "seekTo",
                            value: function (e) {
                                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                this.callPlayer("seek", e), t || this.pause();
                            },
                        },
                        {
                            key: "setVolume",
                            value: function (e) {
                                this.callPlayer("setVolume", e);
                            },
                        },
                        {
                            key: "setPlaybackRate",
                            value: function (e) {
                                this.callPlayer("setPlaybackSpeed", e);
                            },
                        },
                        {
                            key: "getDuration",
                            value: function () {
                                return this.duration;
                            },
                        },
                        {
                            key: "getCurrentTime",
                            value: function () {
                                return this.callPlayer("currentTime");
                            },
                        },
                        {
                            key: "getSecondsLoaded",
                            value: function () {
                                return null;
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props.display;
                                return o.default.createElement("div", { style: { width: "100%", height: "100%", display: e } }, o.default.createElement("div", { ref: this.ref }));
                            },
                        },
                    ]),
                    c(h.prototype, r),
                    u && c(h, u),
                    h
                );
            })(o.Component);
            (t.default = d), y(d, "displayName", "Vidyard"), y(d, "canPlay", i.canPlay.vidyard);
        },
        300: function (e, t, r) {
            "use strict";
            function n(e) {
                return (n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
            var o = (function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" !== n(e) && "function" != typeof e)) return { default: e };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                        }
                    return (r.default = e), t && t.set(e, r), r;
                })(r(2265)),
                a = r(74117),
                i = r(65087);
            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                    (u = function () {
                        return e;
                    }),
                    e
                );
            }
            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            function s(e, t) {
                return (s =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function f(e) {
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
            function y(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            var d = (function (e) {
                !(function (e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && s(e, t);
                })(d, e);
                var t,
                    r,
                    i,
                    u =
                        ((t = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                            } catch (e) {
                                return !1;
                            }
                        })()),
                        function () {
                            var e,
                                r,
                                o = p(d);
                            if (t) {
                                var a = p(this).constructor;
                                r = Reflect.construct(o, arguments, a);
                            } else r = o.apply(this, arguments);
                            return (e = r) && ("object" === n(e) || "function" == typeof e) ? e : f(this);
                        });
                function d() {
                    var e;
                    !(function (e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                    })(this, d);
                    for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return (
                        y(f((e = u.call.apply(u, [this].concat(r)))), "callPlayer", a.callPlayer),
                        y(f(e), "duration", null),
                        y(f(e), "currentTime", null),
                        y(f(e), "secondsLoaded", null),
                        y(f(e), "mute", function () {
                            e.setMuted(!0);
                        }),
                        y(f(e), "unmute", function () {
                            e.setMuted(!1);
                        }),
                        y(f(e), "ref", function (t) {
                            e.container = t;
                        }),
                        e
                    );
                }
                return (
                    (r = [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.props.onMount && this.props.onMount(this);
                            },
                        },
                        {
                            key: "load",
                            value: function (e) {
                                var t = this;
                                (this.duration = null),
                                    (0, a.getSDK)("https://player.vimeo.com/api/player.js", "Vimeo").then(function (r) {
                                        if (t.container) {
                                            var n = t.props.config,
                                                o = n.playerOptions,
                                                a = n.title;
                                            (t.player = new r.Player(
                                                t.container,
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var r = null != arguments[t] ? arguments[t] : {};
                                                        t % 2
                                                            ? l(Object(r), !0).forEach(function (t) {
                                                                  y(e, t, r[t]);
                                                              })
                                                            : Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                                            : l(Object(r)).forEach(function (t) {
                                                                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                                              });
                                                    }
                                                    return e;
                                                })({ url: e.replace("/manage/videos", ""), autoplay: t.props.playing, muted: t.props.muted, loop: t.props.loop, playsinline: t.props.playsinline, controls: t.props.controls }, o)
                                            )),
                                                t.player
                                                    .ready()
                                                    .then(function () {
                                                        var e = t.container.querySelector("iframe");
                                                        (e.style.width = "100%"), (e.style.height = "100%"), a && (e.title = a);
                                                    })
                                                    .catch(t.props.onError),
                                                t.player.on("loaded", function () {
                                                    t.props.onReady(), t.refreshDuration();
                                                }),
                                                t.player.on("play", function () {
                                                    t.props.onPlay(), t.refreshDuration();
                                                }),
                                                t.player.on("pause", t.props.onPause),
                                                t.player.on("seeked", function (e) {
                                                    return t.props.onSeek(e.seconds);
                                                }),
                                                t.player.on("ended", t.props.onEnded),
                                                t.player.on("error", t.props.onError),
                                                t.player.on("timeupdate", function (e) {
                                                    var r = e.seconds;
                                                    t.currentTime = r;
                                                }),
                                                t.player.on("progress", function (e) {
                                                    var r = e.seconds;
                                                    t.secondsLoaded = r;
                                                }),
                                                t.player.on("bufferstart", t.props.onBuffer),
                                                t.player.on("bufferend", t.props.onBufferEnd),
                                                t.player.on("playbackratechange", function (e) {
                                                    return t.props.onPlaybackRateChange(e.playbackRate);
                                                });
                                        }
                                    }, this.props.onError);
                            },
                        },
                        {
                            key: "refreshDuration",
                            value: function () {
                                var e = this;
                                this.player.getDuration().then(function (t) {
                                    e.duration = t;
                                });
                            },
                        },
                        {
                            key: "play",
                            value: function () {
                                var e = this.callPlayer("play");
                                e && e.catch(this.props.onError);
                            },
                        },
                        {
                            key: "pause",
                            value: function () {
                                this.callPlayer("pause");
                            },
                        },
                        {
                            key: "stop",
                            value: function () {
                                this.callPlayer("unload");
                            },
                        },
                        {
                            key: "seekTo",
                            value: function (e) {
                                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                this.callPlayer("setCurrentTime", e), t || this.pause();
                            },
                        },
                        {
                            key: "setVolume",
                            value: function (e) {
                                this.callPlayer("setVolume", e);
                            },
                        },
                        {
                            key: "setMuted",
                            value: function (e) {
                                this.callPlayer("setMuted", e);
                            },
                        },
                        {
                            key: "setLoop",
                            value: function (e) {
                                this.callPlayer("setLoop", e);
                            },
                        },
                        {
                            key: "setPlaybackRate",
                            value: function (e) {
                                this.callPlayer("setPlaybackRate", e);
                            },
                        },
                        {
                            key: "getDuration",
                            value: function () {
                                return this.duration;
                            },
                        },
                        {
                            key: "getCurrentTime",
                            value: function () {
                                return this.currentTime;
                            },
                        },
                        {
                            key: "getSecondsLoaded",
                            value: function () {
                                return this.secondsLoaded;
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props.display;
                                return o.default.createElement("div", { key: this.props.url, ref: this.ref, style: { width: "100%", height: "100%", overflow: "hidden", display: e } });
                            },
                        },
                    ]),
                    c(d.prototype, r),
                    i && c(d, i),
                    d
                );
            })(o.Component);
            (t.default = d), y(d, "displayName", "Vimeo"), y(d, "canPlay", i.canPlay.vimeo), y(d, "forceLoad", !0);
        },
        75310: function (e, t, r) {
            "use strict";
            function n(e) {
                return (n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
            var o = (function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" !== n(e) && "function" != typeof e)) return { default: e };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                        }
                    return (r.default = e), t && t.set(e, r), r;
                })(r(2265)),
                a = r(74117),
                i = r(65087);
            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                    (u = function () {
                        return e;
                    }),
                    e
                );
            }
            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            function s(e, t) {
                return (s =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function f(e) {
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
            function y(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            var d = (function (e) {
                !(function (e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && s(e, t);
                })(h, e);
                var t,
                    r,
                    u,
                    d =
                        ((t = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                            } catch (e) {
                                return !1;
                            }
                        })()),
                        function () {
                            var e,
                                r,
                                o = p(h);
                            if (t) {
                                var a = p(this).constructor;
                                r = Reflect.construct(o, arguments, a);
                            } else r = o.apply(this, arguments);
                            return (e = r) && ("object" === n(e) || "function" == typeof e) ? e : f(this);
                        });
                function h() {
                    var e;
                    !(function (e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                    })(this, h);
                    for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return (
                        y(f((e = d.call.apply(d, [this].concat(r)))), "callPlayer", a.callPlayer),
                        y(f(e), "playerID", e.props.config.playerId || "".concat("wistia-player-").concat((0, a.randomString)())),
                        y(f(e), "onPlay", function () {
                            var t;
                            return (t = e.props).onPlay.apply(t, arguments);
                        }),
                        y(f(e), "onPause", function () {
                            var t;
                            return (t = e.props).onPause.apply(t, arguments);
                        }),
                        y(f(e), "onSeek", function () {
                            var t;
                            return (t = e.props).onSeek.apply(t, arguments);
                        }),
                        y(f(e), "onEnded", function () {
                            var t;
                            return (t = e.props).onEnded.apply(t, arguments);
                        }),
                        y(f(e), "onPlaybackRateChange", function () {
                            var t;
                            return (t = e.props).onPlaybackRateChange.apply(t, arguments);
                        }),
                        y(f(e), "mute", function () {
                            e.callPlayer("mute");
                        }),
                        y(f(e), "unmute", function () {
                            e.callPlayer("unmute");
                        }),
                        e
                    );
                }
                return (
                    (r = [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.props.onMount && this.props.onMount(this);
                            },
                        },
                        {
                            key: "load",
                            value: function (e) {
                                var t = this,
                                    r = this.props,
                                    n = r.playing,
                                    o = r.muted,
                                    i = r.controls,
                                    u = r.onReady,
                                    c = r.config,
                                    s = r.onError;
                                (0, a.getSDK)("https://fast.wistia.com/assets/external/E-v1.js", "Wistia").then(function (e) {
                                    c.customControls &&
                                        c.customControls.forEach(function (t) {
                                            return e.defineControl(t);
                                        }),
                                        (window._wq = window._wq || []),
                                        window._wq.push({
                                            id: t.playerID,
                                            options: (function (e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var r = null != arguments[t] ? arguments[t] : {};
                                                    t % 2
                                                        ? l(Object(r), !0).forEach(function (t) {
                                                              y(e, t, r[t]);
                                                          })
                                                        : Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                                        : l(Object(r)).forEach(function (t) {
                                                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                                          });
                                                }
                                                return e;
                                            })(
                                                {
                                                    autoPlay: n,
                                                    silentAutoPlay: "allow",
                                                    muted: o,
                                                    controlsVisibleOnLoad: i,
                                                    fullscreenButton: i,
                                                    playbar: i,
                                                    playbackRateControl: i,
                                                    qualityControl: i,
                                                    volumeControl: i,
                                                    settingsControl: i,
                                                    smallPlayButton: i,
                                                },
                                                c.options
                                            ),
                                            onReady: function (e) {
                                                (t.player = e),
                                                    t.unbind(),
                                                    t.player.bind("play", t.onPlay),
                                                    t.player.bind("pause", t.onPause),
                                                    t.player.bind("seek", t.onSeek),
                                                    t.player.bind("end", t.onEnded),
                                                    t.player.bind("playbackratechange", t.onPlaybackRateChange),
                                                    u();
                                            },
                                        });
                                }, s);
                            },
                        },
                        {
                            key: "unbind",
                            value: function () {
                                this.player.unbind("play", this.onPlay),
                                    this.player.unbind("pause", this.onPause),
                                    this.player.unbind("seek", this.onSeek),
                                    this.player.unbind("end", this.onEnded),
                                    this.player.unbind("playbackratechange", this.onPlaybackRateChange);
                            },
                        },
                        {
                            key: "play",
                            value: function () {
                                this.callPlayer("play");
                            },
                        },
                        {
                            key: "pause",
                            value: function () {
                                this.callPlayer("pause");
                            },
                        },
                        {
                            key: "stop",
                            value: function () {
                                this.unbind(), this.callPlayer("remove");
                            },
                        },
                        {
                            key: "seekTo",
                            value: function (e) {
                                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                this.callPlayer("time", e), t || this.pause();
                            },
                        },
                        {
                            key: "setVolume",
                            value: function (e) {
                                this.callPlayer("volume", e);
                            },
                        },
                        {
                            key: "setPlaybackRate",
                            value: function (e) {
                                this.callPlayer("playbackRate", e);
                            },
                        },
                        {
                            key: "getDuration",
                            value: function () {
                                return this.callPlayer("duration");
                            },
                        },
                        {
                            key: "getCurrentTime",
                            value: function () {
                                return this.callPlayer("time");
                            },
                        },
                        {
                            key: "getSecondsLoaded",
                            value: function () {
                                return null;
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props.url,
                                    t = e && e.match(i.MATCH_URL_WISTIA)[1];
                                return o.default.createElement("div", { id: this.playerID, key: t, className: "wistia_embed wistia_async_".concat(t), style: { width: "100%", height: "100%" } });
                            },
                        },
                    ]),
                    c(h.prototype, r),
                    u && c(h, u),
                    h
                );
            })(o.Component);
            (t.default = d), y(d, "displayName", "Wistia"), y(d, "canPlay", i.canPlay.wistia), y(d, "loopOnEnded", !0);
        },
        64e3: function (e, t, r) {
            "use strict";
            function n(e) {
                return (n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
            var o = (function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" !== n(e) && "function" != typeof e)) return { default: e };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
                        }
                    return (r.default = e), t && t.set(e, r), r;
                })(r(2265)),
                a = r(74117),
                i = r(65087);
            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                    (u = function () {
                        return e;
                    }),
                    e
                );
            }
            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? l(Object(r), !0).forEach(function (t) {
                              b(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                        : l(Object(r)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                          });
                }
                return e;
            }
            function s(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                            var r = [],
                                n = !0,
                                o = !1,
                                a = void 0;
                            try {
                                for (var i, u = e[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                            } catch (e) {
                                (o = !0), (a = e);
                            } finally {
                                try {
                                    n || null == u.return || u.return();
                                } finally {
                                    if (o) throw a;
                                }
                            }
                            return r;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return f(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            if (("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r)) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(e, t);
                        }
                    })(e, t) ||
                    (function () {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function p(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            function y(e, t) {
                return (y =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function d(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function h(e) {
                return (h = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function b(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            var v = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,
                m = /user\/([a-zA-Z0-9_-]+)\/?/,
                P = /youtube-nocookie\.com/,
                g = (function (e) {
                    !(function (e, t) {
                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && y(e, t);
                    })(f, e);
                    var t,
                        r,
                        u,
                        l =
                            ((t = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                                } catch (e) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var e,
                                    r,
                                    o = h(f);
                                if (t) {
                                    var a = h(this).constructor;
                                    r = Reflect.construct(o, arguments, a);
                                } else r = o.apply(this, arguments);
                                return (e = r) && ("object" === n(e) || "function" == typeof e) ? e : d(this);
                            });
                    function f() {
                        var e;
                        !(function (e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                        })(this, f);
                        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        return (
                            b(d((e = l.call.apply(l, [this].concat(r)))), "callPlayer", a.callPlayer),
                            b(d(e), "parsePlaylist", function (t) {
                                return t instanceof Array
                                    ? { listType: "playlist", playlist: t.map(e.getID).join(",") }
                                    : v.test(t)
                                    ? { listType: "playlist", list: s(t.match(v), 2)[1].replace(/^UC/, "UU") }
                                    : m.test(t)
                                    ? { listType: "user_uploads", list: s(t.match(m), 2)[1] }
                                    : {};
                            }),
                            b(d(e), "onStateChange", function (t) {
                                var r = t.data,
                                    n = e.props,
                                    o = n.onPlay,
                                    a = n.onPause,
                                    i = n.onBuffer,
                                    u = n.onBufferEnd,
                                    l = n.onEnded,
                                    c = n.onReady,
                                    s = n.loop,
                                    f = n.config,
                                    p = f.playerVars,
                                    y = f.onUnstarted,
                                    d = window.YT.PlayerState,
                                    h = d.UNSTARTED,
                                    b = d.PLAYING,
                                    v = d.PAUSED,
                                    m = d.BUFFERING,
                                    P = d.ENDED,
                                    g = d.CUED;
                                if ((r === h && y(), r === b && (o(), u()), r === v && a(), r === m && i(), r === P)) {
                                    var O = !!e.callPlayer("getPlaylist");
                                    s && !O && (p.start ? e.seekTo(p.start) : e.play()), l();
                                }
                                r === g && c();
                            }),
                            b(d(e), "mute", function () {
                                e.callPlayer("mute");
                            }),
                            b(d(e), "unmute", function () {
                                e.callPlayer("unMute");
                            }),
                            b(d(e), "ref", function (t) {
                                e.container = t;
                            }),
                            e
                        );
                    }
                    return (
                        (r = [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.props.onMount && this.props.onMount(this);
                                },
                            },
                            {
                                key: "getID",
                                value: function (e) {
                                    return !e || e instanceof Array || v.test(e) ? null : e.match(i.MATCH_URL_YOUTUBE)[1];
                                },
                            },
                            {
                                key: "load",
                                value: function (e, t) {
                                    var r = this,
                                        n = this.props,
                                        o = n.playing,
                                        i = n.muted,
                                        u = n.playsinline,
                                        l = n.controls,
                                        s = n.loop,
                                        f = n.config,
                                        p = n.onError,
                                        y = f.playerVars,
                                        d = f.embedOptions,
                                        h = this.getID(e);
                                    if (t) {
                                        if (v.test(e) || m.test(e) || e instanceof Array) {
                                            this.player.loadPlaylist(this.parsePlaylist(e));
                                            return;
                                        }
                                        this.player.cueVideoById({ videoId: h, startSeconds: (0, a.parseStartTime)(e) || y.start, endSeconds: (0, a.parseEndTime)(e) || y.end });
                                        return;
                                    }
                                    (0, a.getSDK)("https://www.youtube.com/iframe_api", "YT", "onYouTubeIframeAPIReady", function (e) {
                                        return e.loaded;
                                    }).then(function (t) {
                                        r.container &&
                                            (r.player = new t.Player(
                                                r.container,
                                                c(
                                                    {
                                                        width: "100%",
                                                        height: "100%",
                                                        videoId: h,
                                                        playerVars: c(
                                                            c(
                                                                {
                                                                    autoplay: o ? 1 : 0,
                                                                    mute: i ? 1 : 0,
                                                                    controls: l ? 1 : 0,
                                                                    start: (0, a.parseStartTime)(e),
                                                                    end: (0, a.parseEndTime)(e),
                                                                    origin: window.location.origin,
                                                                    playsinline: u ? 1 : 0,
                                                                },
                                                                r.parsePlaylist(e)
                                                            ),
                                                            y
                                                        ),
                                                        events: {
                                                            onReady: function () {
                                                                s && r.player.setLoop(!0), r.props.onReady();
                                                            },
                                                            onPlaybackRateChange: function (e) {
                                                                return r.props.onPlaybackRateChange(e.data);
                                                            },
                                                            onPlaybackQualityChange: function (e) {
                                                                return r.props.onPlaybackQualityChange(e);
                                                            },
                                                            onStateChange: r.onStateChange,
                                                            onError: function (e) {
                                                                return p(e.data);
                                                            },
                                                        },
                                                        host: P.test(e) ? "https://www.youtube-nocookie.com" : void 0,
                                                    },
                                                    d
                                                )
                                            ));
                                    }, p),
                                        d.events && console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause");
                                },
                            },
                            {
                                key: "play",
                                value: function () {
                                    this.callPlayer("playVideo");
                                },
                            },
                            {
                                key: "pause",
                                value: function () {
                                    this.callPlayer("pauseVideo");
                                },
                            },
                            {
                                key: "stop",
                                value: function () {
                                    document.body.contains(this.callPlayer("getIframe")) && this.callPlayer("stopVideo");
                                },
                            },
                            {
                                key: "seekTo",
                                value: function (e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    this.callPlayer("seekTo", e), t || this.props.playing || this.pause();
                                },
                            },
                            {
                                key: "setVolume",
                                value: function (e) {
                                    this.callPlayer("setVolume", 100 * e);
                                },
                            },
                            {
                                key: "setPlaybackRate",
                                value: function (e) {
                                    this.callPlayer("setPlaybackRate", e);
                                },
                            },
                            {
                                key: "setLoop",
                                value: function (e) {
                                    this.callPlayer("setLoop", e);
                                },
                            },
                            {
                                key: "getDuration",
                                value: function () {
                                    return this.callPlayer("getDuration");
                                },
                            },
                            {
                                key: "getCurrentTime",
                                value: function () {
                                    return this.callPlayer("getCurrentTime");
                                },
                            },
                            {
                                key: "getSecondsLoaded",
                                value: function () {
                                    return this.callPlayer("getVideoLoadedFraction") * this.getDuration();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props.display;
                                    return o.default.createElement("div", { style: { width: "100%", height: "100%", display: e } }, o.default.createElement("div", { ref: this.ref }));
                                },
                            },
                        ]),
                        p(f.prototype, r),
                        u && p(f, u),
                        f
                    );
                })(o.Component);
            (t.default = g), b(g, "displayName", "YouTube"), b(g, "canPlay", i.canPlay.youtube);
        },
        29973: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
            var n = r(2265),
                o = r(74117),
                a = r(65087);
            function i(e) {
                return (i =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return (
                    (u = function () {
                        return e;
                    }),
                    e
                );
            }
            function l(e) {
                if (e && e.__esModule) return e;
                if (null === e || ("object" !== i(e) && "function" != typeof e)) return { default: e };
                var t = u();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                        a && (a.get || a.set) ? Object.defineProperty(r, o, a) : (r[o] = e[o]);
                    }
                return (r.default = e), t && t.set(e, r), r;
            }
            var c = [
                {
                    key: "youtube",
                    name: "YouTube",
                    canPlay: a.canPlay.youtube,
                    lazyPlayer: (0, n.lazy)(function () {
                        return Promise.resolve().then(function () {
                            return l(r(64e3));
                        });
                    }),
                },
                {
                    key: "soundcloud",
                    name: "SoundCloud",
                    canPlay: a.canPlay.soundcloud,
                    lazyPlayer: (0, n.lazy)(function () {
                        return Promise.resolve().then(function () {
                            return l(r(44095));
                        });
                    }),
                },
                {
                    key: "vimeo",
                    name: "Vimeo",
                    canPlay: a.canPlay.vimeo,
                    lazyPlayer: (0, n.lazy)(function () {
                        return Promise.resolve().then(function () {
                            return l(r(300));
                        });
                    }),
                },
                {
                    key: "facebook",
                    name: "Facebook",
                    canPlay: a.canPlay.facebook,
                    lazyPlayer: (0, n.lazy)(function () {
                        return Promise.resolve().then(function () {
                            return l(r(11467));
                        });
                    }),
                },
                {
                    key: "streamable",
                    name: "Streamable",
                    canPlay: a.canPlay.streamable,
                    lazyPlayer: (0, n.lazy)(function () {
                        return Promise.resolve().then(function () {
                            return l(r(81182));
                        });
                    }),
                },
                {
                    key: "wistia",
                    name: "Wistia",
                    canPlay: a.canPlay.wistia,
                    lazyPlayer: (0, n.lazy)(function () {
                        return Promise.resolve().then(function () {
                            return l(r(75310));
                        });
                    }),
                },
                {
                    key: "twitch",
                    name: "Twitch",
                    canPlay: a.canPlay.twitch,
                    lazyPlayer: (0, n.lazy)(function () {
                        return Promise.resolve().then(function () {
                            return l(r(12569));
                        });
                    }),
                },
                {
                    key: "dailymotion",
                    name: "DailyMotion",
                    canPlay: a.canPlay.dailymotion,
                    lazyPlayer: (0, n.lazy)(function () {
                        return Promise.resolve().then(function () {
                            return l(r(94609));
                        });
                    }),
                },
                {
                    key: "mixcloud",
                    name: "Mixcloud",
                    canPlay: a.canPlay.mixcloud,
                    lazyPlayer: (0, n.lazy)(function () {
                        return Promise.resolve().then(function () {
                            return l(r(92996));
                        });
                    }),
                },
                {
                    key: "vidyard",
                    name: "Vidyard",
                    canPlay: a.canPlay.vidyard,
                    lazyPlayer: (0, n.lazy)(function () {
                        return Promise.resolve().then(function () {
                            return l(r(51296));
                        });
                    }),
                },
                {
                    key: "kaltura",
                    name: "Kaltura",
                    canPlay: a.canPlay.kaltura,
                    lazyPlayer: (0, n.lazy)(function () {
                        return Promise.resolve().then(function () {
                            return l(r(57321));
                        });
                    }),
                },
                {
                    key: "file",
                    name: "FilePlayer",
                    canPlay: a.canPlay.file,
                    canEnablePIP: function (e) {
                        return a.canPlay.file(e) && (document.pictureInPictureEnabled || (0, o.supportsWebKitPresentationMode)()) && !a.AUDIO_EXTENSIONS.test(e);
                    },
                    lazyPlayer: (0, n.lazy)(function () {
                        return Promise.resolve().then(function () {
                            return l(r(89737));
                        });
                    }),
                },
            ];
            t.default = c;
        },
        42728: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.defaultProps = t.propTypes = void 0);
            var n,
                o = (n = r(74275)) && n.__esModule ? n : { default: n },
                a = o.default.string,
                i = o.default.bool,
                u = o.default.number,
                l = o.default.array,
                c = o.default.oneOfType,
                s = o.default.shape,
                f = o.default.object,
                p = o.default.func,
                y = o.default.node,
                d = {
                    url: c([a, l, f]),
                    playing: i,
                    loop: i,
                    controls: i,
                    volume: u,
                    muted: i,
                    playbackRate: u,
                    width: c([a, u]),
                    height: c([a, u]),
                    style: f,
                    progressInterval: u,
                    playsinline: i,
                    pip: i,
                    stopOnUnmount: i,
                    light: c([i, a, f]),
                    playIcon: y,
                    previewTabIndex: u,
                    fallback: y,
                    oEmbedUrl: a,
                    wrapper: c([a, p, s({ render: p.isRequired })]),
                    config: s({
                        soundcloud: s({ options: f }),
                        youtube: s({ playerVars: f, embedOptions: f, onUnstarted: p }),
                        facebook: s({ appId: a, version: a, playerId: a, attributes: f }),
                        dailymotion: s({ params: f }),
                        vimeo: s({ playerOptions: f, title: a }),
                        file: s({ attributes: f, tracks: l, forceVideo: i, forceAudio: i, forceHLS: i, forceSafariHLS: i, forceDisableHls: i, forceDASH: i, forceFLV: i, hlsOptions: f, hlsVersion: a, dashVersion: a, flvVersion: a }),
                        wistia: s({ options: f, playerId: a, customControls: l }),
                        mixcloud: s({ options: f }),
                        twitch: s({ options: f, playerId: a }),
                        vidyard: s({ options: f }),
                    }),
                    onReady: p,
                    onStart: p,
                    onPlay: p,
                    onPause: p,
                    onBuffer: p,
                    onBufferEnd: p,
                    onEnded: p,
                    onError: p,
                    onDuration: p,
                    onSeek: p,
                    onPlaybackRateChange: p,
                    onPlaybackQualityChange: p,
                    onProgress: p,
                    onClickPreview: p,
                    onEnablePIP: p,
                    onDisablePIP: p,
                };
            t.propTypes = d;
            var h = function () {};
            t.defaultProps = {
                playing: !1,
                loop: !1,
                controls: !1,
                volume: null,
                muted: !1,
                playbackRate: 1,
                width: "640px",
                height: "360px",
                style: {},
                progressInterval: 1e3,
                playsinline: !1,
                pip: !1,
                stopOnUnmount: !0,
                light: !1,
                fallback: null,
                wrapper: "div",
                previewTabIndex: 0,
                oEmbedUrl: "https://noembed.com/embed?url={url}",
                config: {
                    soundcloud: { options: { visual: !0, buying: !1, liking: !1, download: !1, sharing: !1, show_comments: !1, show_playcount: !1 } },
                    youtube: { playerVars: { playsinline: 1, showinfo: 0, rel: 0, iv_load_policy: 3, modestbranding: 1 }, embedOptions: {}, onUnstarted: h },
                    facebook: { appId: "1309697205772819", version: "v3.3", playerId: null, attributes: {} },
                    dailymotion: { params: { api: 1, "endscreen-enable": !1 } },
                    vimeo: { playerOptions: { autopause: !1, byline: !1, portrait: !1, title: !1 }, title: null },
                    file: { attributes: {}, tracks: [], forceVideo: !1, forceAudio: !1, forceHLS: !1, forceDASH: !1, forceFLV: !1, hlsOptions: {}, hlsVersion: "1.1.4", dashVersion: "3.1.3", flvVersion: "1.5.0", forceDisableHls: !1 },
                    wistia: { options: {}, playerId: null, customControls: null },
                    mixcloud: { options: { hide_cover: 1 } },
                    twitch: { options: {}, playerId: null },
                    vidyard: { options: {} },
                },
                onReady: h,
                onStart: h,
                onPlay: h,
                onPause: h,
                onBuffer: h,
                onBufferEnd: h,
                onEnded: h,
                onError: h,
                onDuration: h,
                onSeek: h,
                onPlaybackRateChange: h,
                onPlaybackQualityChange: h,
                onProgress: h,
                onClickPreview: h,
                onEnablePIP: h,
                onDisablePIP: h,
            };
        },
        74117: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.parseStartTime = function (e) {
                    return f(e, u);
                }),
                (t.parseEndTime = function (e) {
                    return f(e, l);
                }),
                (t.randomString = function () {
                    return Math.random().toString(36).substr(2, 5);
                }),
                (t.queryString = function (e) {
                    return Object.keys(e)
                        .map(function (t) {
                            return "".concat(t, "=").concat(e[t]);
                        })
                        .join("&");
                }),
                (t.getSDK = function (e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        o =
                            arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : function () {
                                      return !0;
                                  },
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : n.default,
                        i = p(t);
                    return i && o(i)
                        ? Promise.resolve(i)
                        : new Promise(function (n, o) {
                              if (y[e]) {
                                  y[e].push({ resolve: n, reject: o });
                                  return;
                              }
                              y[e] = [{ resolve: n, reject: o }];
                              var i = function (t) {
                                  y[e].forEach(function (e) {
                                      return e.resolve(t);
                                  });
                              };
                              if (r) {
                                  var u = window[r];
                                  window[r] = function () {
                                      u && u(), i(p(t));
                                  };
                              }
                              a(e, function (n) {
                                  n
                                      ? (y[e].forEach(function (e) {
                                            return e.reject(n);
                                        }),
                                        (y[e] = null))
                                      : r || i(p(t));
                              });
                          });
                }),
                (t.getConfig = function (e, t) {
                    return (0, o.default)(t.config, e.config);
                }),
                (t.omit = function (e) {
                    for (var t, r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                    for (var a = (t = []).concat.apply(t, n), i = {}, u = Object.keys(e), l = 0; l < u.length; l++) {
                        var c = u[l];
                        -1 === a.indexOf(c) && (i[c] = e[c]);
                    }
                    return i;
                }),
                (t.callPlayer = function (e) {
                    var t;
                    if (!this.player || !this.player[e]) {
                        var r = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(e, "%c – ");
                        return this.player ? this.player[e] || (r += "The method was not available") : (r += "The player was not available"), console.warn(r, "font-weight: bold", ""), null;
                    }
                    for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                    return (t = this.player)[e].apply(t, o);
                }),
                (t.isMediaStream = function (e) {
                    return "undefined" != typeof window && void 0 !== window.MediaStream && e instanceof window.MediaStream;
                }),
                (t.isBlobUrl = function (e) {
                    return /^blob:/.test(e);
                }),
                (t.supportsWebKitPresentationMode = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.createElement("video"),
                        t = !1 === /iPhone|iPod/.test(navigator.userAgent);
                    return e.webkitSupportsPresentationMode && "function" == typeof e.webkitSetPresentationMode && t;
                });
            var n = a(r(12451)),
                o = a(r(7106));
            function a(e) {
                return e && e.__esModule ? e : { default: e };
            }
            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var u = /[?&#](?:start|t)=([0-9hms]+)/,
                l = /[?&#]end=([0-9hms]+)/,
                c = /(\d+)(h|m|s)/g,
                s = /^\d+$/;
            function f(e, t) {
                if (!(e instanceof Array)) {
                    var r = e.match(t);
                    if (r) {
                        var n = r[1];
                        if (n.match(c))
                            return (function (e) {
                                for (var t = 0, r = c.exec(e); null !== r; ) {
                                    var n,
                                        o =
                                            (function (e) {
                                                if (Array.isArray(e)) return e;
                                            })((n = r)) ||
                                            (function (e, t) {
                                                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                                    var r = [],
                                                        n = !0,
                                                        o = !1,
                                                        a = void 0;
                                                    try {
                                                        for (var i, u = e[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                                                    } catch (e) {
                                                        (o = !0), (a = e);
                                                    } finally {
                                                        try {
                                                            n || null == u.return || u.return();
                                                        } finally {
                                                            if (o) throw a;
                                                        }
                                                    }
                                                    return r;
                                                }
                                            })(n, 3) ||
                                            (function (e, t) {
                                                if (e) {
                                                    if ("string" == typeof e) return i(e, t);
                                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                                    if (("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r)) return Array.from(e);
                                                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(e, t);
                                                }
                                            })(n, 3) ||
                                            (function () {
                                                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                            })(),
                                        a = o[1],
                                        u = o[2];
                                    "h" === u && (t += 3600 * parseInt(a, 10)), "m" === u && (t += 60 * parseInt(a, 10)), "s" === u && (t += parseInt(a, 10)), (r = c.exec(e));
                                }
                                return t;
                            })(n);
                        if (s.test(n)) return parseInt(n);
                    }
                }
            }
            function p(e) {
                return window[e] ? window[e] : window.exports && window.exports[e] ? window.exports[e] : window.module && window.module.exports && window.module.exports[e] ? window.module.exports[e] : null;
            }
            var y = {};
        },
    },
]);
