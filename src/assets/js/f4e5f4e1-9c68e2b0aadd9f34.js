"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [691],
    {
        55883: function (e, t, n) {
            let r;
            n.d(t, {
                FV: function () {
                    return iC;
                },
                Wh: function () {
                    return ik;
                },
                cn: function () {
                    return iL;
                },
                sJ: function () {
                    return iV;
                },
            });
            var o,
                i,
                a,
                l,
                s = n(2265),
                u = n(54887),
                c = n(62601),
                d = function (e) {
                    let t = Error(e);
                    if (void 0 === t.stack)
                        try {
                            throw t;
                        } catch (e) {}
                    return t;
                },
                f = function (e) {
                    return !!e && "function" == typeof e.then;
                },
                h = function (e, t) {
                    if (null != e) return e;
                    throw d(null != t ? t : "Got unexpected null or undefined");
                };
            function p(e, t, n) {
                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
            }
            class v {
                getValue() {
                    throw d("BaseLoadable");
                }
                toPromise() {
                    throw d("BaseLoadable");
                }
                valueMaybe() {
                    throw d("BaseLoadable");
                }
                valueOrThrow() {
                    throw d(`Loadable expected value, but in "${this.state}" state`);
                }
                promiseMaybe() {
                    throw d("BaseLoadable");
                }
                promiseOrThrow() {
                    throw d(`Loadable expected promise, but in "${this.state}" state`);
                }
                errorMaybe() {
                    throw d("BaseLoadable");
                }
                errorOrThrow() {
                    throw d(`Loadable expected error, but in "${this.state}" state`);
                }
                is(e) {
                    return e.state === this.state && e.contents === this.contents;
                }
                map(e) {
                    throw d("BaseLoadable");
                }
            }
            class _ extends v {
                constructor(e) {
                    super(), p(this, "state", "hasValue"), p(this, "contents", void 0), (this.contents = e);
                }
                getValue() {
                    return this.contents;
                }
                toPromise() {
                    return Promise.resolve(this.contents);
                }
                valueMaybe() {
                    return this.contents;
                }
                valueOrThrow() {
                    return this.contents;
                }
                promiseMaybe() {}
                errorMaybe() {}
                map(e) {
                    try {
                        let t = e(this.contents);
                        return f(t) ? R(t) : w(t) ? t : S(t);
                    } catch (t) {
                        return f(t) ? R(t.next(() => this.map(e))) : g(t);
                    }
                }
            }
            class y extends v {
                constructor(e) {
                    super(), p(this, "state", "hasError"), p(this, "contents", void 0), (this.contents = e);
                }
                getValue() {
                    throw this.contents;
                }
                toPromise() {
                    return Promise.reject(this.contents);
                }
                valueMaybe() {}
                promiseMaybe() {}
                errorMaybe() {
                    return this.contents;
                }
                errorOrThrow() {
                    return this.contents;
                }
                map(e) {
                    return this;
                }
            }
            class m extends v {
                constructor(e) {
                    super(), p(this, "state", "loading"), p(this, "contents", void 0), (this.contents = e);
                }
                getValue() {
                    throw this.contents;
                }
                toPromise() {
                    return this.contents;
                }
                valueMaybe() {}
                promiseMaybe() {
                    return this.contents;
                }
                promiseOrThrow() {
                    return this.contents;
                }
                errorMaybe() {}
                map(e) {
                    return R(
                        this.contents
                            .then((t) => {
                                let n = e(t);
                                if (w(n))
                                    switch (n.state) {
                                        case "hasValue":
                                        case "loading":
                                            return n.contents;
                                        case "hasError":
                                            throw n.contents;
                                    }
                                return n;
                            })
                            .catch((t) => {
                                if (f(t)) return t.then(() => this.map(e).contents);
                                throw t;
                            })
                    );
                }
            }
            function S(e) {
                return Object.freeze(new _(e));
            }
            function g(e) {
                return Object.freeze(new y(e));
            }
            function R(e) {
                return Object.freeze(new m(e));
            }
            function T() {
                return Object.freeze(new m(new Promise(() => {})));
            }
            function b(e) {
                let t = Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t]),
                    n = t.map((e) => (w(e) ? e : f(e) ? R(e) : S(e))),
                    r = n.every((e) => "hasValue" === e.state)
                        ? S(n.map((e) => e.contents))
                        : n.some((e) => "hasError" === e.state)
                        ? g(
                              h(
                                  n.find((e) => "hasError" === e.state),
                                  "Invalid loadable passed to loadableAll"
                              ).contents
                          )
                        : R(Promise.all(n.map((e) => e.contents)));
                return Array.isArray(e) ? r : r.map((t) => Object.getOwnPropertyNames(e).reduce((e, n, r) => ({ ...e, [n]: t[r] }), {}));
            }
            function w(e) {
                return e instanceof v;
            }
            var A = {
                    loadableWithValue: S,
                    loadableWithError: g,
                    loadableWithPromise: R,
                    loadableLoading: T,
                    loadableAll: b,
                    isLoadable: w,
                    RecoilLoadable: { of: (e) => (f(e) ? R(e) : w(e) ? e : S(e)), error: (e) => g(e), loading: () => T(), all: b, isLoadable: w },
                },
                E = Object.freeze({
                    __proto__: null,
                    loadableWithValue: A.loadableWithValue,
                    loadableWithError: A.loadableWithError,
                    loadableWithPromise: A.loadableWithPromise,
                    loadableLoading: A.loadableLoading,
                    loadableAll: A.loadableAll,
                    isLoadable: A.isLoadable,
                    RecoilLoadable: A.RecoilLoadable,
                });
            let N = { RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0, RECOIL_GKS_ENABLED: new Set(["recoil_hamt_2020", "recoil_sync_external_store", "recoil_suppress_rerender_in_callback", "recoil_memory_managament_2020"]) };
            function k(e) {
                return N.RECOIL_GKS_ENABLED.has(e);
            }
            void 0 !== c &&
                (null == c ? void 0 : c.env) != null &&
                ((function (e, t) {
                    var n, r;
                    let o = null === (n = c.env[e]) || void 0 === n ? void 0 : null === (r = n.toLowerCase()) || void 0 === r ? void 0 : r.trim();
                    if (null != o && "" !== o) {
                        if (!["true", "false"].includes(o)) throw d(`process.env.${e} value must be 'true', 'false', or empty: ${o}`);
                        t("true" === o);
                    }
                })("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", (e) => {
                    N.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = e;
                }),
                (function (e, t) {
                    var n;
                    let r = null === (n = c.env[e]) || void 0 === n ? void 0 : n.trim();
                    null != r && "" !== r && t(r.split(/\s*,\s*|\s+/));
                })("RECOIL_GKS_ENABLED", (e) => {
                    e.forEach((e) => {
                        N.RECOIL_GKS_ENABLED.add(e);
                    });
                })),
                (k.setPass = (e) => {
                    N.RECOIL_GKS_ENABLED.add(e);
                }),
                (k.setFail = (e) => {
                    N.RECOIL_GKS_ENABLED.delete(e);
                }),
                (k.clear = () => {
                    N.RECOIL_GKS_ENABLED.clear();
                });
            var L = function (e, t, { error: n } = {}) {
                return null;
            };
            let V = null !== (i = s.createMutableSource) && void 0 !== i ? i : s.unstable_createMutableSource,
                C = null !== (a = s.useMutableSource) && void 0 !== a ? a : s.unstable_useMutableSource,
                M = null !== (l = s.useSyncExternalStore) && void 0 !== l ? l : s.unstable_useSyncExternalStore,
                U = !1;
            var I = {
                createMutableSource: V,
                useMutableSource: C,
                useSyncExternalStore: M,
                currentRendererSupportsUseSyncExternalStore: function () {
                    var e;
                    let { ReactCurrentDispatcher: t, ReactCurrentOwner: n } = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                        r = null !== (e = null == t ? void 0 : t.current) && void 0 !== e ? e : n.currentDispatcher,
                        o = null != r.useSyncExternalStore;
                    return !M || o || U || ((U = !0), L("A React renderer without React 18+ API support is being used with React 18+.")), o;
                },
                reactMode: function () {
                    return k("recoil_transition_support")
                        ? { mode: "TRANSITION_SUPPORT", early: !0, concurrent: !0 }
                        : k("recoil_sync_external_store") && null != M
                        ? { mode: "SYNC_EXTERNAL_STORE", early: !0, concurrent: !1 }
                        : k("recoil_mutable_source") && null != C && "undefined" != typeof window && !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
                        ? k("recoil_suppress_rerender_in_callback")
                            ? { mode: "MUTABLE_SOURCE", early: !0, concurrent: !0 }
                            : { mode: "MUTABLE_SOURCE", early: !1, concurrent: !1 }
                        : k("recoil_suppress_rerender_in_callback")
                        ? { mode: "LEGACY", early: !0, concurrent: !1 }
                        : { mode: "LEGACY", early: !1, concurrent: !1 };
                },
                isFastRefreshEnabled: function () {
                    return !1;
                },
            };
            class B {
                constructor(e) {
                    p(this, "key", void 0), (this.key = e);
                }
                toJSON() {
                    return { key: this.key };
                }
            }
            class D extends B {}
            class O extends B {}
            var P = {
                    AbstractRecoilValue: B,
                    RecoilState: D,
                    RecoilValueReadOnly: O,
                    isRecoilValue: function (e) {
                        return e instanceof D || e instanceof O;
                    },
                },
                x = Object.freeze({ __proto__: null, AbstractRecoilValue: P.AbstractRecoilValue, RecoilState: P.RecoilState, RecoilValueReadOnly: P.RecoilValueReadOnly, isRecoilValue: P.isRecoilValue }),
                z = function (e, ...t) {},
                F = function (e, t) {
                    return (function* () {
                        let n = 0;
                        for (let r of e) yield t(r, n++);
                    })();
                };
            let { isFastRefreshEnabled: W } = I;
            class G {}
            let $ = new G(),
                K = new Map(),
                j = new Map();
            class H extends Error {}
            let q = new Map();
            function Z(e) {
                return q.get(e);
            }
            var Y = {
                    nodes: K,
                    recoilValues: j,
                    registerNode: function (e) {
                        N.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED &&
                            (function (e) {
                                if (K.has(e)) {
                                    let t = `Duplicate atom key "${e}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;
                                    console.warn(t);
                                }
                            })(e.key),
                            K.set(e.key, e);
                        let t = null == e.set ? new x.RecoilValueReadOnly(e.key) : new x.RecoilState(e.key);
                        return j.set(e.key, t), t;
                    },
                    getNode: function (e) {
                        let t = K.get(e);
                        if (null == t) throw new H(`Missing definition for RecoilValue: "${e}""`);
                        return t;
                    },
                    getNodeMaybe: function (e) {
                        return K.get(e);
                    },
                    deleteNodeConfigIfPossible: function (e) {
                        var t, n;
                        if (!k("recoil_memory_managament_2020")) return;
                        let r = K.get(e);
                        null != r && null !== (t = r.shouldDeleteConfigOnRelease) && void 0 !== t && t.call(r) && (K.delete(e), null === (n = Z(e)) || void 0 === n || n(), q.delete(e));
                    },
                    setConfigDeletionHandler: function (e, t) {
                        k("recoil_memory_managament_2020") && (void 0 === t ? q.delete(e) : q.set(e, t));
                    },
                    getConfigDeletionHandler: Z,
                    recoilValuesForKeys: function (e) {
                        return F(e, (e) => h(j.get(e)));
                    },
                    NodeMissingError: H,
                    DefaultValue: G,
                    DEFAULT_VALUE: $,
                },
                J =
                    ((function (e) {
                        var t =
                                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                    ? function (e) {
                                          return typeof e;
                                      }
                                    : function (e) {
                                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                      },
                            n = {},
                            r = {},
                            o = function (e) {
                                return function () {
                                    return e;
                                };
                            },
                            i = (n.hash = function (e) {
                                var n = void 0 === e ? "undefined" : t(e);
                                if ("number" === n) return e;
                                "string" !== n && (e += "");
                                for (var r = 0, o = 0, i = e.length; o < i; ++o) r = ((r << 5) - r + e.charCodeAt(o)) | 0;
                                return r;
                            }),
                            a = function (e, t) {
                                return (t >>> e) & 31;
                            },
                            l = function (e) {
                                return 1 << e;
                            },
                            s = function (e, t) {
                                var n;
                                return (n = e & (t - 1)), (n -= (n >> 1) & 1431655765), (n = ((n = (858993459 & n) + ((n >> 2) & 858993459)) + (n >> 4)) & 252645135), (n += n >> 8), 127 & (n += n >> 16);
                            },
                            u = function (e, t, n, r) {
                                var o = r;
                                if (!e) {
                                    var i = r.length;
                                    o = Array(i);
                                    for (var a = 0; a < i; ++a) o[a] = r[a];
                                }
                                return (o[t] = n), o;
                            },
                            c = function (e, t, n) {
                                var r = n.length - 1,
                                    o = 0,
                                    i = 0,
                                    a = n;
                                if (e) o = i = t;
                                else for (a = Array(r); o < t; ) a[i++] = n[o++];
                                for (++o; o <= r; ) a[i++] = n[o++];
                                return e && (a.length = r), a;
                            },
                            d = function (e, t, n, r) {
                                var o = r.length;
                                if (e) {
                                    for (var i = o; i >= t; ) r[i--] = r[i];
                                    return (r[t] = n), r;
                                }
                                for (var a = 0, l = 0, s = Array(o + 1); a < t; ) s[l++] = r[a++];
                                for (s[t] = n; a < o; ) s[++l] = r[a++];
                                return s;
                            },
                            f = { __hamt_isEmpty: !0 },
                            h = function (e) {
                                return e === f || (e && e.__hamt_isEmpty);
                            },
                            p = function (e, t, n, r) {
                                return { type: 1, edit: e, hash: t, key: n, value: r, _modify: b };
                            },
                            v = function (e, t, n) {
                                return { type: 2, edit: e, hash: t, children: n, _modify: w };
                            },
                            _ = function (e, t, n) {
                                return { type: 3, edit: e, mask: t, children: n, _modify: A };
                            },
                            y = function (e, t, n) {
                                return { type: 4, edit: e, size: t, children: n, _modify: E };
                            },
                            m = function (e, t, n, r, o) {
                                for (var i = [], a = r, l = 0, s = 0; a; ++s) 1 & a && (i[s] = o[l++]), (a >>>= 1);
                                return (i[t] = n), y(e, l + 1, i);
                            },
                            S = function (e, t, n, r) {
                                for (var o = Array(t - 1), i = 0, a = 0, l = 0, s = r.length; l < s; ++l)
                                    if (l !== n) {
                                        var u = r[l];
                                        u && !h(u) && ((o[i++] = u), (a |= 1 << l));
                                    }
                                return _(e, a, o);
                            },
                            g = function e(t, n, r, o, i, s) {
                                if (r === i) return v(t, r, [s, o]);
                                var u = a(n, r),
                                    c = a(n, i);
                                return _(t, l(u) | l(c), u === c ? [e(t, n + 5, r, o, i, s)] : u < c ? [o, s] : [s, o]);
                            },
                            R = function (e, t, n, o, i, a, l, s) {
                                for (var d = i.length, f = 0; f < d; ++f) {
                                    var h = i[f];
                                    if (n(l, h.key)) {
                                        var v = h.value,
                                            _ = a(v);
                                        if (_ === v) return i;
                                        if (_ === r) return --s.value, c(e, f, i);
                                        return u(e, f, p(t, o, l, _), i);
                                    }
                                }
                                var y = a();
                                return y === r ? i : (++s.value, u(e, d, p(t, o, l, y), i));
                            },
                            T = function (e, t) {
                                return e === t.edit;
                            },
                            b = function (e, t, n, o, i, a, l) {
                                if (t(a, this.key)) {
                                    var s = o(this.value);
                                    return s === this.value ? this : s === r ? (--l.value, f) : T(e, this) ? ((this.value = s), this) : p(e, i, a, s);
                                }
                                var u = o();
                                return u === r ? this : (++l.value, g(e, n, this.hash, this, i, p(e, i, a, u)));
                            },
                            w = function (e, t, n, o, i, a, l) {
                                if (i === this.hash) {
                                    var s = R(T(e, this), e, t, this.hash, this.children, o, a, l);
                                    return s === this.children ? this : s.length > 1 ? v(e, this.hash, s) : s[0];
                                }
                                var u = o();
                                return u === r ? this : (++l.value, g(e, n, this.hash, this, i, p(e, i, a, u)));
                            },
                            A = function (e, t, n, r, o, i, p) {
                                var v,
                                    y = this.mask,
                                    S = this.children,
                                    g = a(n, o),
                                    R = l(g),
                                    b = s(y, R),
                                    w = y & R,
                                    A = w ? S[b] : f,
                                    E = A._modify(e, t, n + 5, r, o, i, p);
                                if (A === E) return this;
                                var N = T(e, this),
                                    k = y,
                                    L = void 0;
                                if (w && h(E)) {
                                    if (!(k &= ~R)) return f;
                                    if (S.length <= 2 && ((v = S[1 ^ b]) === f || 1 === v.type || 2 === v.type)) return S[1 ^ b];
                                    L = c(N, b, S);
                                } else if (w || h(E)) L = u(N, b, E, S);
                                else {
                                    if (S.length >= 16) return m(e, g, E, y, S);
                                    (k |= R), (L = d(N, b, E, S));
                                }
                                return N ? ((this.mask = k), (this.children = L), this) : _(e, k, L);
                            },
                            E = function (e, t, n, r, o, i, l) {
                                var s = this.size,
                                    c = this.children,
                                    d = a(n, o),
                                    p = c[d],
                                    v = (p || f)._modify(e, t, n + 5, r, o, i, l);
                                if (p === v) return this;
                                var _ = T(e, this),
                                    m = void 0;
                                if (h(p) && !h(v)) ++s, (m = u(_, d, v, c));
                                else if (!h(p) && h(v)) {
                                    if (--s <= 8) return S(e, s, d, c);
                                    m = u(_, d, f, c);
                                } else m = u(_, d, v, c);
                                return _ ? ((this.size = s), (this.children = m), this) : y(e, s, m);
                            };
                        function N(e, t, n, r, o) {
                            (this._editable = e), (this._edit = t), (this._config = n), (this._root = r), (this._size = o);
                        }
                        (f._modify = function (e, t, n, o, i, a, l) {
                            var s = o();
                            return s === r ? f : (++l.value, p(e, i, a, s));
                        }),
                            (N.prototype.setTree = function (e, t) {
                                return this._editable ? ((this._root = e), (this._size = t), this) : e === this._root ? this : new N(this._editable, this._edit, this._config, e, t);
                            });
                        var k = (n.tryGetHash = function (e, t, n, r) {
                            for (var o = r._root, i = 0, u = r._config.keyEq; ; )
                                switch (o.type) {
                                    case 1:
                                        return u(n, o.key) ? o.value : e;
                                    case 2:
                                        if (t === o.hash)
                                            for (var c = o.children, d = 0, f = c.length; d < f; ++d) {
                                                var h = c[d];
                                                if (u(n, h.key)) return h.value;
                                            }
                                        return e;
                                    case 3:
                                        var p = l(a(i, t));
                                        if (o.mask & p) {
                                            (o = o.children[s(o.mask, p)]), (i += 5);
                                            break;
                                        }
                                        return e;
                                    case 4:
                                        if ((o = o.children[a(i, t)])) {
                                            i += 5;
                                            break;
                                        }
                                        return e;
                                    default:
                                        return e;
                                }
                        });
                        N.prototype.tryGetHash = function (e, t, n) {
                            return k(e, t, n, this);
                        };
                        var L = (n.tryGet = function (e, t, n) {
                            return k(e, n._config.hash(t), t, n);
                        });
                        N.prototype.tryGet = function (e, t) {
                            return L(e, t, this);
                        };
                        var V = (n.getHash = function (e, t, n) {
                            return k(void 0, e, t, n);
                        });
                        (N.prototype.getHash = function (e, t) {
                            return V(e, t, this);
                        }),
                            (n.get = function (e, t) {
                                return k(void 0, t._config.hash(e), e, t);
                            }),
                            (N.prototype.get = function (e, t) {
                                return L(t, e, this);
                            });
                        var C = (n.has = function (e, t, n) {
                            return k(r, e, t, n) !== r;
                        });
                        N.prototype.hasHash = function (e, t) {
                            return C(e, t, this);
                        };
                        var M = (n.has = function (e, t) {
                            return C(t._config.hash(e), e, t);
                        });
                        N.prototype.has = function (e) {
                            return M(e, this);
                        };
                        var U = function (e, t) {
                            return e === t;
                        };
                        (n.make = function (e) {
                            return new N(0, 0, { keyEq: (e && e.keyEq) || U, hash: (e && e.hash) || i }, f, 0);
                        }),
                            (n.empty = n.make());
                        var I = (n.isEmpty = function (e) {
                            return e && !!h(e._root);
                        });
                        N.prototype.isEmpty = function () {
                            return I(this);
                        };
                        var B = (n.modifyHash = function (e, t, n, r) {
                            var o = { value: r._size },
                                i = r._root._modify(r._editable ? r._edit : NaN, r._config.keyEq, 0, e, t, n, o);
                            return r.setTree(i, o.value);
                        });
                        N.prototype.modifyHash = function (e, t, n) {
                            return B(n, e, t, this);
                        };
                        var D = (n.modify = function (e, t, n) {
                            return B(e, n._config.hash(t), t, n);
                        });
                        N.prototype.modify = function (e, t) {
                            return D(t, e, this);
                        };
                        var O = (n.setHash = function (e, t, n, r) {
                            return B(o(n), e, t, r);
                        });
                        N.prototype.setHash = function (e, t, n) {
                            return O(e, t, n, this);
                        };
                        var P = (n.set = function (e, t, n) {
                            return O(n._config.hash(e), e, t, n);
                        });
                        N.prototype.set = function (e, t) {
                            return P(e, t, this);
                        };
                        var x = o(r),
                            z = (n.removeHash = function (e, t, n) {
                                return B(x, e, t, n);
                            });
                        N.prototype.removeHash = N.prototype.deleteHash = function (e, t) {
                            return z(e, t, this);
                        };
                        var F = (n.remove = function (e, t) {
                            return z(t._config.hash(e), e, t);
                        });
                        N.prototype.remove = N.prototype.delete = function (e) {
                            return F(e, this);
                        };
                        var W = (n.beginMutation = function (e) {
                            return new N(e._editable + 1, e._edit + 1, e._config, e._root, e._size);
                        });
                        N.prototype.beginMutation = function () {
                            return W(this);
                        };
                        var G = (n.endMutation = function (e) {
                            return (e._editable = e._editable && e._editable - 1), e;
                        });
                        N.prototype.endMutation = function () {
                            return G(this);
                        };
                        var $ = (n.mutate = function (e, t) {
                            var n = W(t);
                            return e(n), G(n);
                        });
                        N.prototype.mutate = function (e) {
                            return $(e, this);
                        };
                        var K = function (e) {
                                return e && j(e[0], e[1], e[2], e[3], e[4]);
                            },
                            j = function (e, t, n, r, o) {
                                for (; n < e; ) {
                                    var i = t[n++];
                                    if (i && !h(i)) return H(i, r, [e, t, n, r, o]);
                                }
                                return K(o);
                            },
                            H = function (e, t, n) {
                                switch (e.type) {
                                    case 1:
                                        return { value: t(e), rest: n };
                                    case 2:
                                    case 4:
                                    case 3:
                                        var r = e.children;
                                        return j(r.length, r, 0, t, n);
                                    default:
                                        return K(n);
                                }
                            },
                            q = { done: !0 };
                        function Z(e) {
                            this.v = e;
                        }
                        (Z.prototype.next = function () {
                            if (!this.v) return q;
                            var e = this.v;
                            return (this.v = K(e.rest)), e;
                        }),
                            (Z.prototype[Symbol.iterator] = function () {
                                return this;
                            });
                        var Y = function (e, t) {
                                return new Z(H(e._root, t));
                            },
                            J = function (e) {
                                return [e.key, e.value];
                            },
                            X = (n.entries = function (e) {
                                return Y(e, J);
                            });
                        N.prototype.entries = N.prototype[Symbol.iterator] = function () {
                            return X(this);
                        };
                        var Q = function (e) {
                                return e.key;
                            },
                            ee = (n.keys = function (e) {
                                return Y(e, Q);
                            });
                        N.prototype.keys = function () {
                            return ee(this);
                        };
                        var et = function (e) {
                                return e.value;
                            },
                            en = (n.values = N.prototype.values = function (e) {
                                return Y(e, et);
                            });
                        N.prototype.values = function () {
                            return en(this);
                        };
                        var er = (n.fold = function (e, t, n) {
                            var r = n._root;
                            if (1 === r.type) return e(t, r.value, r.key);
                            for (var o = [r.children], i = void 0; (i = o.pop()); )
                                for (var a = 0, l = i.length; a < l; ) {
                                    var s = i[a++];
                                    s && s.type && (1 === s.type ? (t = e(t, s.value, s.key)) : o.push(s.children));
                                }
                            return t;
                        });
                        N.prototype.fold = function (e, t) {
                            return er(e, t, this);
                        };
                        var eo = (n.forEach = function (e, t) {
                            return er(
                                function (n, r, o) {
                                    return e(r, o, t);
                                },
                                null,
                                t
                            );
                        });
                        N.prototype.forEach = function (e) {
                            return eo(e, this);
                        };
                        var ei = (n.count = function (e) {
                            return e._size;
                        });
                        (N.prototype.count = function () {
                            return ei(this);
                        }),
                            Object.defineProperty(N.prototype, "size", { get: N.prototype.count }),
                            e.exports ? (e.exports = n) : (undefined.hamt = n);
                    })((o = { exports: {} }), o.exports),
                    o.exports);
            class X {
                constructor(e) {
                    p(this, "_map", void 0), (this._map = new Map(null == e ? void 0 : e.entries()));
                }
                keys() {
                    return this._map.keys();
                }
                entries() {
                    return this._map.entries();
                }
                get(e) {
                    return this._map.get(e);
                }
                has(e) {
                    return this._map.has(e);
                }
                set(e, t) {
                    return this._map.set(e, t), this;
                }
                delete(e) {
                    return this._map.delete(e), this;
                }
                clone() {
                    return ee(this);
                }
                toMap() {
                    return new Map(this._map);
                }
            }
            class Q {
                constructor(e) {
                    if ((p(this, "_hamt", J.empty.beginMutation()), e instanceof Q)) {
                        let t = e._hamt.endMutation();
                        (e._hamt = t.beginMutation()), (this._hamt = t.beginMutation());
                    } else if (e) for (let [t, n] of e.entries()) this._hamt.set(t, n);
                }
                keys() {
                    return this._hamt.keys();
                }
                entries() {
                    return this._hamt.entries();
                }
                get(e) {
                    return this._hamt.get(e);
                }
                has(e) {
                    return this._hamt.has(e);
                }
                set(e, t) {
                    return this._hamt.set(e, t), this;
                }
                delete(e) {
                    return this._hamt.delete(e), this;
                }
                clone() {
                    return ee(this);
                }
                toMap() {
                    return new Map(this._hamt);
                }
            }
            function ee(e) {
                return k("recoil_hamt_2020") ? new Q(e) : new X(e);
            }
            var et = Object.freeze({ __proto__: null, persistentMap: { persistentMap: ee }.persistentMap }),
                en = function (e, ...t) {
                    let n = new Set();
                    e: for (let r of e) {
                        for (let e of t) if (e.has(r)) continue e;
                        n.add(r);
                    }
                    return n;
                },
                er = function (e, t) {
                    let n = new Map();
                    return (
                        e.forEach((e, r) => {
                            n.set(r, t(e, r));
                        }),
                        n
                    );
                };
            function eo(e, t, n, r) {
                let { nodeDeps: o, nodeToNodeSubscriptions: i } = n,
                    a = o.get(e);
                if (a && r && a !== r.nodeDeps.get(e)) return;
                o.set(e, t);
                let l = null == a ? t : en(t, a);
                for (let t of l) {
                    i.has(t) || i.set(t, new Set());
                    let n = h(i.get(t));
                    n.add(e);
                }
                if (a) {
                    let n = en(a, t);
                    for (let t of n) {
                        if (!i.has(t)) return;
                        let n = h(i.get(t));
                        n.delete(e), 0 === n.size && i.delete(t);
                    }
                }
            }
            var ei = {
                cloneGraph: function (e) {
                    return { nodeDeps: er(e.nodeDeps, (e) => new Set(e)), nodeToNodeSubscriptions: er(e.nodeToNodeSubscriptions, (e) => new Set(e)) };
                },
                graph: function () {
                    return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() };
                },
                saveDepsToStore: function (e, t, n, r) {
                    var o, i, a, l, s;
                    let u = n.getState();
                    r === u.currentTree.version ||
                        r === (null === (o = u.nextTree) || void 0 === o ? void 0 : o.version) ||
                        r === (null === (i = u.previousTree) || void 0 === i ? void 0 : i.version) ||
                        L("Tried to save dependencies to a discarded tree");
                    let c = n.getGraph(r);
                    if ((eo(e, t, c), r === (null === (a = u.previousTree) || void 0 === a ? void 0 : a.version))) {
                        let r = n.getGraph(u.currentTree.version);
                        eo(e, t, r, c);
                    }
                    if (r === (null === (l = u.previousTree) || void 0 === l ? void 0 : l.version) || r === u.currentTree.version) {
                        let r = null === (s = u.nextTree) || void 0 === s ? void 0 : s.version;
                        if (void 0 !== r) {
                            let o = n.getGraph(r);
                            eo(e, t, o, c);
                        }
                    }
                },
            };
            let ea = 0,
                el = 0,
                es = 0;
            var eu = { getNextTreeStateVersion: () => ea++, getNextStoreID: () => el++, getNextComponentID: () => es++ };
            let { persistentMap: ec } = et,
                { graph: ed } = ei,
                { getNextTreeStateVersion: ef } = eu;
            function eh() {
                let e = ef();
                return { version: e, stateID: e, transactionMetadata: {}, dirtyAtoms: new Set(), atomValues: ec(), nonvalidatedAtoms: ec() };
            }
            var ep = {
                makeEmptyTreeState: eh,
                makeEmptyStoreState: function () {
                    let e = eh();
                    return {
                        currentTree: e,
                        nextTree: null,
                        previousTree: null,
                        commitDepth: 0,
                        knownAtoms: new Set(),
                        knownSelectors: new Set(),
                        transactionSubscriptions: new Map(),
                        nodeTransactionSubscriptions: new Map(),
                        nodeToComponentSubscriptions: new Map(),
                        queuedComponentCallbacks_DEPRECATED: [],
                        suspendedComponentResolvers: new Set(),
                        graphsByVersion: new Map().set(e.version, ed()),
                        retention: { referenceCounts: new Map(), nodesRetainedByZone: new Map(), retainablesToCheckForRelease: new Set() },
                        nodeCleanupFunctions: new Map(),
                    };
                },
                getNextTreeStateVersion: ef,
            };
            class ev {}
            var e_ = {
                    RetentionZone: ev,
                    retentionZone: function () {
                        return new ev();
                    },
                },
                ey = {
                    setByAddingToSet: function (e, t) {
                        let n = new Set(e);
                        return n.add(t), n;
                    },
                    setByDeletingFromSet: function (e, t) {
                        let n = new Set(e);
                        return n.delete(t), n;
                    },
                    mapBySettingInMap: function (e, t, n) {
                        let r = new Map(e);
                        return r.set(t, n), r;
                    },
                    mapByUpdatingInMap: function (e, t, n) {
                        let r = new Map(e);
                        return r.set(t, n(r.get(t))), r;
                    },
                    mapByDeletingFromMap: function (e, t) {
                        let n = new Map(e);
                        return n.delete(t), n;
                    },
                    mapByDeletingMultipleFromMap: function (e, t) {
                        let n = new Map(e);
                        return t.forEach((e) => n.delete(e)), n;
                    },
                },
                em = function* (e, t) {
                    let n = 0;
                    for (let r of e) t(r, n++) && (yield r);
                },
                eS = function (e, t) {
                    let n = new Proxy(e, { get: (e, n) => (!(n in e) && n in t && (e[n] = t[n]()), e[n]), ownKeys: (e) => Object.keys(e) });
                    return n;
                };
            let { getNode: eg, getNodeMaybe: eR, recoilValuesForKeys: eT } = Y,
                { RetentionZone: eb } = e_,
                { setByAddingToSet: ew } = ey,
                eA = Object.freeze(new Set());
            class eE extends Error {}
            function eN(e, t, n, r) {
                let o = e.getState();
                if (o.nodeCleanupFunctions.has(n)) return;
                let i = eg(n),
                    a = (function (e, t, n) {
                        if (!k("recoil_memory_managament_2020")) return () => void 0;
                        let { nodesRetainedByZone: r } = e.getState().retention;
                        function o(e) {
                            let n = r.get(e);
                            n || r.set(e, (n = new Set())), n.add(t);
                        }
                        if (n instanceof eb) o(n);
                        else if (Array.isArray(n)) for (let e of n) o(e);
                        return () => {
                            if (!k("recoil_memory_managament_2020")) return;
                            let { retention: r } = e.getState();
                            function o(e) {
                                let n = r.nodesRetainedByZone.get(e);
                                null == n || n.delete(t), n && 0 === n.size && r.nodesRetainedByZone.delete(e);
                            }
                            if (n instanceof eb) o(n);
                            else if (Array.isArray(n)) for (let e of n) o(e);
                        };
                    })(e, n, i.retainedBy),
                    l = i.init(e, t, r);
                o.nodeCleanupFunctions.set(n, () => {
                    l(), a();
                });
            }
            function ek(e, t, n) {
                return eg(n).peek(e, t);
            }
            function eL(e, t, n) {
                let r = new Set(),
                    o = Array.from(n),
                    i = e.getGraph(t.version);
                for (let e = o.pop(); e; e = o.pop()) {
                    var a;
                    r.add(e);
                    let t = null !== (a = i.nodeToNodeSubscriptions.get(e)) && void 0 !== a ? a : eA;
                    for (let e of t) r.has(e) || o.push(e);
                }
                return r;
            }
            var eV = {
                getNodeLoadable: function (e, t, n) {
                    return eN(e, t, n, "get"), eg(n).get(e, t);
                },
                peekNodeLoadable: ek,
                setNodeValue: function (e, t, n, r) {
                    let o = eg(n);
                    if (null == o.set) throw new eE(`Attempt to set read-only RecoilValue: ${n}`);
                    let i = o.set;
                    return eN(e, t, n, "set"), i(e, t, r);
                },
                initializeNode: function (e, t, n) {
                    eN(e, e.getState().currentTree, t, n);
                },
                cleanUpNode: function (e, t) {
                    var n;
                    let r = e.getState();
                    null === (n = r.nodeCleanupFunctions.get(t)) || void 0 === n || n(), r.nodeCleanupFunctions.delete(t);
                },
                setUnvalidatedAtomValue_DEPRECATED: function (e, t, n) {
                    var r;
                    let o = eR(t);
                    return (
                        null == o || null === (r = o.invalidate) || void 0 === r || r.call(o, e),
                        { ...e, atomValues: e.atomValues.clone().delete(t), nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n), dirtyAtoms: ew(e.dirtyAtoms, t) }
                    );
                },
                peekNodeInfo: function (e, t, n) {
                    let r = e.getState(),
                        o = e.getGraph(t.version),
                        i = eg(n).nodeType;
                    return eS(
                        { type: i },
                        {
                            loadable: () => ek(e, t, n),
                            isActive: () => r.knownAtoms.has(n) || r.knownSelectors.has(n),
                            isSet: () => "selector" !== i && t.atomValues.has(n),
                            isModified: () => t.dirtyAtoms.has(n),
                            deps: () => {
                                var e;
                                return eT(null !== (e = o.nodeDeps.get(n)) && void 0 !== e ? e : []);
                            },
                            subscribers: () => {
                                var o, i;
                                return {
                                    nodes: eT(em(eL(e, t, new Set([n])), (e) => e !== n)),
                                    components: F(null !== (o = null === (i = r.nodeToComponentSubscriptions.get(n)) || void 0 === i ? void 0 : i.values()) && void 0 !== o ? o : [], ([e]) => ({ name: e })),
                                };
                            },
                        }
                    );
                },
                getDownstreamNodes: eL,
            };
            let eC = null;
            var eM = {
                setInvalidateMemoizedSnapshot: function (e) {
                    eC = e;
                },
                invalidateMemoizedSnapshot: function () {
                    var e;
                    null === (e = eC) || void 0 === e || e();
                },
            };
            let { getDownstreamNodes: eU, getNodeLoadable: eI, setNodeValue: eB } = eV,
                { getNextComponentID: eD } = eu,
                { getNode: eO, getNodeMaybe: eP } = Y,
                { DefaultValue: ex } = Y,
                { reactMode: ez } = I,
                { AbstractRecoilValue: eF, RecoilState: eW, RecoilValueReadOnly: eG, isRecoilValue: e$ } = x,
                { invalidateMemoizedSnapshot: eK } = eM;
            function ej(e, t, n) {
                "hasValue" === n.state && n.contents instanceof ex ? e.atomValues.delete(t) : e.atomValues.set(t, n), e.dirtyAtoms.add(t), e.nonvalidatedAtoms.delete(t);
            }
            function eH(e, t) {
                e.replaceState((n) => {
                    let r = eY(n);
                    for (let n of t)
                        !(function (e, t, n) {
                            if ("set" === n.type) {
                                let { recoilValue: r, valueOrUpdater: o } = n,
                                    i = (function (e, t, { key: n }, r) {
                                        if ("function" != typeof r) return r;
                                        {
                                            let o = eI(e, t, n);
                                            if ("loading" === o.state) {
                                                let e = `Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;
                                                throw (L(e), d(e));
                                            }
                                            if ("hasError" === o.state) throw o.contents;
                                            return r(o.contents);
                                        }
                                    })(e, t, r, o),
                                    a = eB(e, t, r.key, i);
                                for (let [e, n] of a.entries()) ej(t, e, n);
                            } else if ("setLoadable" === n.type) {
                                let {
                                    recoilValue: { key: e },
                                    loadable: r,
                                } = n;
                                ej(t, e, r);
                            } else if ("markModified" === n.type) {
                                let {
                                    recoilValue: { key: e },
                                } = n;
                                t.dirtyAtoms.add(e);
                            } else if ("setUnvalidated" === n.type) {
                                var r;
                                let {
                                        recoilValue: { key: e },
                                        unvalidatedValue: o,
                                    } = n,
                                    i = eP(e);
                                null == i || null === (r = i.invalidate) || void 0 === r || r.call(i, t), t.atomValues.delete(e), t.nonvalidatedAtoms.set(e, o), t.dirtyAtoms.add(e);
                            } else L(`Unknown action ${n.type}`);
                        })(e, r, n);
                    return eJ(e, r), eK(), r;
                });
            }
            function eq(e, t) {
                if (eZ.length) {
                    let n = eZ[eZ.length - 1],
                        r = n.get(e);
                    r || n.set(e, (r = [])), r.push(t);
                } else eH(e, [t]);
            }
            let eZ = [];
            function eY(e) {
                return { ...e, atomValues: e.atomValues.clone(), nonvalidatedAtoms: e.nonvalidatedAtoms.clone(), dirtyAtoms: new Set(e.dirtyAtoms) };
            }
            function eJ(e, t) {
                let n = eU(e, t, t.dirtyAtoms);
                for (let e of n) {
                    var r, o;
                    null === (r = eP(e)) || void 0 === r || null === (o = r.invalidate) || void 0 === o || o.call(r, t);
                }
            }
            function eX(e, t, n) {
                eq(e, { type: "set", recoilValue: t, valueOrUpdater: n });
            }
            var eQ = {
                    RecoilValueReadOnly: eG,
                    AbstractRecoilValue: eF,
                    RecoilState: eW,
                    getRecoilValueAsLoadable: function (e, { key: t }, n = e.getState().currentTree) {
                        var r, o;
                        let i = e.getState();
                        n.version === i.currentTree.version ||
                            n.version === (null === (r = i.nextTree) || void 0 === r ? void 0 : r.version) ||
                            n.version === (null === (o = i.previousTree) || void 0 === o ? void 0 : o.version) ||
                            L("Tried to read from a discarded tree");
                        let a = eI(e, n, t);
                        return "loading" === a.state && a.contents.catch(() => {}), a;
                    },
                    setRecoilValue: eX,
                    setRecoilValueLoadable: function (e, t, n) {
                        if (n instanceof ex) return eX(e, t, n);
                        eq(e, { type: "setLoadable", recoilValue: t, loadable: n });
                    },
                    markRecoilValueModified: function (e, t) {
                        eq(e, { type: "markModified", recoilValue: t });
                    },
                    setUnvalidatedRecoilValue: function (e, t, n) {
                        eq(e, { type: "setUnvalidated", recoilValue: t, unvalidatedValue: n });
                    },
                    subscribeToRecoilValue: function (e, { key: t }, n, r = null) {
                        let o = eD(),
                            i = e.getState();
                        i.nodeToComponentSubscriptions.has(t) || i.nodeToComponentSubscriptions.set(t, new Map()), h(i.nodeToComponentSubscriptions.get(t)).set(o, [null != r ? r : "<not captured>", n]);
                        let a = ez();
                        if (a.early && ("LEGACY" === a.mode || "MUTABLE_SOURCE" === a.mode)) {
                            let r = e.getState().nextTree;
                            r && r.dirtyAtoms.has(t) && n(r);
                        }
                        return {
                            release: () => {
                                let n = e.getState(),
                                    r = n.nodeToComponentSubscriptions.get(t);
                                if (void 0 === r || !r.has(o)) {
                                    L(`Subscription missing at release time for atom ${t}. This is a bug in Recoil.`);
                                    return;
                                }
                                r.delete(o), 0 === r.size && n.nodeToComponentSubscriptions.delete(t);
                            },
                        };
                    },
                    isRecoilValue: e$,
                    applyAtomValueWrites: function (e, t) {
                        let n = e.clone();
                        return (
                            t.forEach((e, t) => {
                                "hasValue" === e.state && e.contents instanceof ex ? n.delete(t) : n.set(t, e);
                            }),
                            n
                        );
                    },
                    batchStart: function () {
                        let e = new Map();
                        return (
                            eZ.push(e),
                            () => {
                                for (let [t, n] of e) eH(t, n);
                                let t = eZ.pop();
                                t !== e && L("Incorrect order of batch popping");
                            }
                        );
                    },
                    writeLoadableToTreeState: ej,
                    invalidateDownstreams: eJ,
                    copyTreeState: eY,
                    refreshRecoilValue: function (e, t) {
                        var n;
                        let { currentTree: r } = e.getState(),
                            o = eO(t.key);
                        null === (n = o.clearCache) || void 0 === n || n.call(o, e, r);
                    },
                },
                e0 = function (e, t, n) {
                    let r = e.entries(),
                        o = r.next();
                    for (; !o.done; ) {
                        let i = o.value;
                        if (t.call(n, i[1], i[0], e)) return !0;
                        o = r.next();
                    }
                    return !1;
                };
            let { cleanUpNode: e1 } = eV,
                { deleteNodeConfigIfPossible: e2, getNode: e5 } = Y,
                { RetentionZone: e8 } = e_,
                e4 = new Set();
            function e3(e, t) {
                let n = e.getState(),
                    r = n.currentTree;
                if (n.nextTree) {
                    L("releaseNodesNowOnCurrentTree should only be called at the end of a batch");
                    return;
                }
                let o = new Set();
                for (let e of t)
                    if (e instanceof e8)
                        for (let t of (function (e, t) {
                            var n;
                            return null !== (n = e.retention.nodesRetainedByZone.get(t)) && void 0 !== n ? n : e4;
                        })(n, e))
                            o.add(t);
                    else o.add(e);
                let i = (function (e, t) {
                    let n = e.getState(),
                        r = n.currentTree,
                        o = e.getGraph(r.version),
                        i = new Set(),
                        a = new Set();
                    return (
                        (function t(l) {
                            var s, u;
                            let c = new Set(),
                                d = (function (e, t, n, r, o) {
                                    let i = e.getGraph(t.version),
                                        a = [],
                                        l = new Set();
                                    for (; n.size > 0; )
                                        (function e(t) {
                                            if (r.has(t) || o.has(t)) {
                                                n.delete(t);
                                                return;
                                            }
                                            if (l.has(t)) return;
                                            let s = i.nodeToNodeSubscriptions.get(t);
                                            if (s) for (let t of s) e(t);
                                            l.add(t), n.delete(t), a.push(t);
                                        })(h(n.values().next().value));
                                    return a;
                                })(e, r, l, i, a);
                            for (let e of d) {
                                if ("recoilRoot" === e5(e).retainedBy || (null !== (s = n.retention.referenceCounts.get(e)) && void 0 !== s ? s : 0) > 0 || e6(e).some((e) => n.retention.referenceCounts.get(e))) {
                                    a.add(e);
                                    continue;
                                }
                                let t = o.nodeToNodeSubscriptions.get(e);
                                if (t && e0(t, (e) => a.has(e))) {
                                    a.add(e);
                                    continue;
                                }
                                i.add(e), c.add(e);
                            }
                            let f = new Set();
                            for (let e of c) for (let t of null !== (u = o.nodeDeps.get(e)) && void 0 !== u ? u : e4) i.has(t) || f.add(t);
                            f.size && t(f);
                        })(t),
                        i
                    );
                })(e, o);
                for (let t of i)
                    !(function (e, t, n) {
                        var r, o;
                        if (!k("recoil_memory_managament_2020")) return;
                        e1(e, n);
                        let i = e.getState();
                        i.knownAtoms.delete(n), i.knownSelectors.delete(n), i.nodeTransactionSubscriptions.delete(n), i.retention.referenceCounts.delete(n);
                        let a = e6(n);
                        for (let e of a) null === (r = i.retention.nodesRetainedByZone.get(e)) || void 0 === r || r.delete(n);
                        t.atomValues.delete(n), t.dirtyAtoms.delete(n), t.nonvalidatedAtoms.delete(n);
                        let l = i.graphsByVersion.get(t.version);
                        if (l) {
                            let e = l.nodeDeps.get(n);
                            if (void 0 !== e) for (let t of (l.nodeDeps.delete(n), e)) null === (o = l.nodeToNodeSubscriptions.get(t)) || void 0 === o || o.delete(n);
                            l.nodeToNodeSubscriptions.delete(n);
                        }
                        e2(n);
                    })(e, r, t);
            }
            function e6(e) {
                let t = e5(e).retainedBy;
                return void 0 === t || "components" === t || "recoilRoot" === t ? [] : t instanceof e8 ? [t] : t;
            }
            function e9(e, t) {
                if (!k("recoil_memory_managament_2020")) return;
                let n = e.getState().retention.referenceCounts;
                n.delete(t),
                    (function (e, t) {
                        let n = e.getState();
                        n.nextTree ? n.retention.retainablesToCheckForRelease.add(t) : e3(e, new Set([t]));
                    })(e, t);
            }
            var e7 = {
                SUSPENSE_TIMEOUT_MS: 12e4,
                updateRetainCount: function (e, t, n) {
                    var r;
                    if (!k("recoil_memory_managament_2020")) return;
                    let o = e.getState().retention.referenceCounts,
                        i = (null !== (r = o.get(t)) && void 0 !== r ? r : 0) + n;
                    0 === i ? e9(e, t) : o.set(t, i);
                },
                updateRetainCountToZero: e9,
                releaseScheduledRetainablesNow: function (e) {
                    if (!k("recoil_memory_managament_2020")) return;
                    let t = e.getState();
                    e3(e, t.retention.retainablesToCheckForRelease), t.retention.retainablesToCheckForRelease.clear();
                },
                retainedByOptionWithDefault: function (e) {
                    return void 0 === e ? "recoilRoot" : e;
                },
            };
            let { unstable_batchedUpdates: te } = u,
                { unstable_batchedUpdates: tt } = { unstable_batchedUpdates: te },
                { batchStart: tn } = eQ,
                { unstable_batchedUpdates: tr } = { unstable_batchedUpdates: tt },
                to = tr || ((e) => e());
            var ti = {
                    getBatcher: () => to,
                    setBatcher: (e) => {
                        to = e;
                    },
                    batchUpdates: (e) => {
                        to(() => {
                            let t = () => void 0;
                            try {
                                (t = tn()), e();
                            } finally {
                                t();
                            }
                        });
                    },
                },
                ta = function* (e) {
                    for (let t of e) for (let e of t) yield e;
                };
            let tl = "undefined" == typeof Window || "undefined" == typeof window,
                ts = "undefined" != typeof navigator && "ReactNative" === navigator.product;
            var tu = { isSSR: tl, isReactNative: ts, isWindow: (e) => !tl && (e === window || e instanceof Window) };
            let { batchUpdates: tc } = ti,
                { initializeNode: td, peekNodeInfo: tf } = eV,
                { graph: th } = ei,
                { getNextStoreID: tp } = eu,
                { DEFAULT_VALUE: tv, recoilValues: t_, recoilValuesForKeys: ty } = Y,
                { AbstractRecoilValue: tm, getRecoilValueAsLoadable: tS, setRecoilValue: tg, setUnvalidatedRecoilValue: tR } = eQ,
                { updateRetainCount: tT } = e7,
                { setInvalidateMemoizedSnapshot: tb } = eM,
                { getNextTreeStateVersion: tw, makeEmptyStoreState: tA } = ep,
                { isSSR: tE } = tu,
                { memoizeOneWithArgsHashAndInvalidation: tN } = {
                    memoizeWithArgsHash: function (e, t) {
                        let n;
                        return (...r) => {
                            n || (n = {});
                            let o = t(...r);
                            return Object.hasOwnProperty.call(n, o) || (n[o] = e(...r)), n[o];
                        };
                    },
                    memoizeOneWithArgsHash: function (e, t) {
                        let n, r;
                        return (...o) => {
                            let i = t(...o);
                            return n === i ? r : ((n = i), (r = e(...o)));
                        };
                    },
                    memoizeOneWithArgsHashAndInvalidation: function (e, t) {
                        let n, r;
                        return [
                            (...o) => {
                                let i = t(...o);
                                return n === i ? r : ((n = i), (r = e(...o)));
                            },
                            () => {
                                n = null;
                            },
                        ];
                    },
                };
            class tk {
                constructor(e, t) {
                    for (let n of (p(this, "_store", void 0),
                    p(this, "_refCount", 1),
                    p(this, "getLoadable", (e) => (this.checkRefCount_INTERNAL(), tS(this._store, e))),
                    p(this, "getPromise", (e) => (this.checkRefCount_INTERNAL(), this.getLoadable(e).toPromise())),
                    p(this, "getNodes_UNSTABLE", (e) => {
                        if ((this.checkRefCount_INTERNAL(), (null == e ? void 0 : e.isModified) === !0)) {
                            if ((null == e ? void 0 : e.isInitialized) === !1) return [];
                            let t = this._store.getState().currentTree;
                            return ty(t.dirtyAtoms);
                        }
                        let t = this._store.getState().knownAtoms,
                            n = this._store.getState().knownSelectors;
                        return (null == e ? void 0 : e.isInitialized) == null ? t_.values() : !0 === e.isInitialized ? ty(ta([t, n])) : em(t_.values(), ({ key: e }) => !t.has(e) && !n.has(e));
                    }),
                    p(this, "getInfo_UNSTABLE", ({ key: e }) => (this.checkRefCount_INTERNAL(), tf(this._store, this._store.getState().currentTree, e))),
                    p(this, "map", (e) => {
                        this.checkRefCount_INTERNAL();
                        let t = new tM(this, tc);
                        return e(t), t;
                    }),
                    p(this, "asyncMap", async (e) => {
                        this.checkRefCount_INTERNAL();
                        let t = new tM(this, tc);
                        return t.retain(), await e(t), t.autoRelease_INTERNAL(), t;
                    }),
                    (this._store = {
                        storeID: tp(),
                        parentStoreID: t,
                        getState: () => e,
                        replaceState: (t) => {
                            e.currentTree = t(e.currentTree);
                        },
                        getGraph: (t) => {
                            let n = e.graphsByVersion;
                            if (n.has(t)) return h(n.get(t));
                            let r = th();
                            return n.set(t, r), r;
                        },
                        subscribeToTransactions: () => ({ release: () => {} }),
                        addTransactionMetadata: () => {
                            throw d("Cannot subscribe to Snapshots");
                        },
                    }),
                    this._store.getState().knownAtoms))
                        td(this._store, n, "get"), tT(this._store, n, 1);
                    this.autoRelease_INTERNAL();
                }
                retain() {
                    this._refCount <= 0 && L("Attempt to retain() Snapshot that was already released."), this._refCount++;
                    let e = !1;
                    return () => {
                        e || ((e = !0), this._release());
                    };
                }
                autoRelease_INTERNAL() {
                    tE || window.setTimeout(() => this._release(), 10);
                }
                _release() {
                    if ((this._refCount--, 0 === this._refCount)) {
                        if ((this._store.getState().nodeCleanupFunctions.forEach((e) => e()), this._store.getState().nodeCleanupFunctions.clear(), !k("recoil_memory_managament_2020"))) return;
                    } else this._refCount;
                }
                isRetained() {
                    return this._refCount > 0;
                }
                checkRefCount_INTERNAL() {
                    k("recoil_memory_managament_2020") && this._refCount;
                }
                getStore_INTERNAL() {
                    return this.checkRefCount_INTERNAL(), this._store;
                }
                getID() {
                    return this.checkRefCount_INTERNAL(), this._store.getState().currentTree.stateID;
                }
                getStoreID() {
                    return this.checkRefCount_INTERNAL(), this._store.storeID;
                }
            }
            function tL(e, t, n = !1) {
                let r = e.getState(),
                    o = n ? tw() : t.version;
                return {
                    currentTree: {
                        version: n ? o : t.version,
                        stateID: n ? o : t.stateID,
                        transactionMetadata: { ...t.transactionMetadata },
                        dirtyAtoms: new Set(t.dirtyAtoms),
                        atomValues: t.atomValues.clone(),
                        nonvalidatedAtoms: t.nonvalidatedAtoms.clone(),
                    },
                    commitDepth: 0,
                    nextTree: null,
                    previousTree: null,
                    knownAtoms: new Set(r.knownAtoms),
                    knownSelectors: new Set(r.knownSelectors),
                    transactionSubscriptions: new Map(),
                    nodeTransactionSubscriptions: new Map(),
                    nodeToComponentSubscriptions: new Map(),
                    queuedComponentCallbacks_DEPRECATED: [],
                    suspendedComponentResolvers: new Set(),
                    graphsByVersion: new Map().set(o, e.getGraph(t.version)),
                    retention: { referenceCounts: new Map(), nodesRetainedByZone: new Map(), retainablesToCheckForRelease: new Set() },
                    nodeCleanupFunctions: new Map(F(r.nodeCleanupFunctions.entries(), ([e]) => [e, () => {}])),
                };
            }
            let [tV, tC] = tN(
                (e, t) => {
                    var n;
                    let r = e.getState(),
                        o = "latest" === t ? (null !== (n = r.nextTree) && void 0 !== n ? n : r.currentTree) : h(r.previousTree);
                    return new tk(tL(e, o), e.storeID);
                },
                (e, t) => {
                    var n, r;
                    return (
                        String(t) +
                        String(e.storeID) +
                        String(null === (n = e.getState().nextTree) || void 0 === n ? void 0 : n.version) +
                        String(e.getState().currentTree.version) +
                        String(null === (r = e.getState().previousTree) || void 0 === r ? void 0 : r.version)
                    );
                }
            );
            tb(tC);
            class tM extends tk {
                constructor(e, t) {
                    super(tL(e.getStore_INTERNAL(), e.getStore_INTERNAL().getState().currentTree, !0), e.getStoreID()),
                        p(this, "_batch", void 0),
                        p(this, "set", (e, t) => {
                            this.checkRefCount_INTERNAL();
                            let n = this.getStore_INTERNAL();
                            this._batch(() => {
                                tT(n, e.key, 1), tg(this.getStore_INTERNAL(), e, t);
                            });
                        }),
                        p(this, "reset", (e) => {
                            this.checkRefCount_INTERNAL();
                            let t = this.getStore_INTERNAL();
                            this._batch(() => {
                                tT(t, e.key, 1), tg(this.getStore_INTERNAL(), e, tv);
                            });
                        }),
                        p(this, "setUnvalidatedAtomValues_DEPRECATED", (e) => {
                            this.checkRefCount_INTERNAL();
                            let t = this.getStore_INTERNAL();
                            tc(() => {
                                for (let [n, r] of e.entries()) tT(t, n, 1), tR(t, new tm(n), r);
                            });
                        }),
                        (this._batch = t);
                }
            }
            var tU = {
                    Snapshot: tk,
                    MutableSnapshot: tM,
                    freshSnapshot: function (e) {
                        let t = new tk(tA());
                        return null != e ? t.map(e) : t;
                    },
                    cloneSnapshot: function (e, t = "latest") {
                        let n = tV(e, t);
                        return n.isRetained() ? n : (tC(), tV(e, t));
                    },
                },
                tI = Object.freeze({ __proto__: null, Snapshot: tU.Snapshot, MutableSnapshot: tU.MutableSnapshot, freshSnapshot: tU.freshSnapshot, cloneSnapshot: tU.cloneSnapshot }),
                tB = function (...e) {
                    let t = new Set();
                    for (let n of e) for (let e of n) t.add(e);
                    return t;
                };
            let { useRef: tD } = s;
            var tO = function (e) {
                let t = tD(e);
                return t.current === e && "function" == typeof e && (t.current = e()), t;
            };
            let { getNextTreeStateVersion: tP, makeEmptyStoreState: tx } = ep,
                { cleanUpNode: tz, getDownstreamNodes: tF, initializeNode: tW, setNodeValue: tG, setUnvalidatedAtomValue_DEPRECATED: t$ } = eV,
                { graph: tK } = ei,
                { cloneGraph: tj } = ei,
                { getNextStoreID: tH } = eu,
                { createMutableSource: tq, reactMode: tZ } = I,
                { applyAtomValueWrites: tY } = eQ,
                { releaseScheduledRetainablesNow: tJ } = e7,
                { freshSnapshot: tX } = tI,
                { useCallback: tQ, useContext: t0, useEffect: t1, useMemo: t2, useRef: t5, useState: t8 } = s;
            function t4() {
                throw d("This component must be used inside a <RecoilRoot> component.");
            }
            let t3 = Object.freeze({ storeID: tH(), getState: t4, replaceState: t4, getGraph: t4, subscribeToTransactions: t4, addTransactionMetadata: t4 }),
                t6 = !1;
            function t9(e) {
                if (t6) throw d("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");
                let t = e.getState();
                if (null === t.nextTree) {
                    k("recoil_memory_managament_2020") && k("recoil_release_on_cascading_update_killswitch_2021") && t.commitDepth > 0 && tJ(e);
                    let n = t.currentTree.version,
                        r = tP();
                    (t.nextTree = { ...t.currentTree, version: r, stateID: r, dirtyAtoms: new Set(), transactionMetadata: {} }), t.graphsByVersion.set(r, tj(h(t.graphsByVersion.get(n))));
                }
            }
            let t7 = s.createContext({ current: t3 }),
                ne = () => t0(t7),
                nt = s.createContext(null);
            function nn(e, t, n) {
                let r = tF(e, n, n.dirtyAtoms);
                for (let e of r) {
                    let r = t.nodeToComponentSubscriptions.get(e);
                    if (r) for (let [e, [t, o]] of r) o(n);
                }
            }
            function nr(e) {
                let t = e.getState(),
                    n = t.currentTree,
                    r = n.dirtyAtoms;
                if (r.size) {
                    for (let [n, o] of t.nodeTransactionSubscriptions) if (r.has(n)) for (let [t, n] of o) n(e);
                    for (let [n, r] of t.transactionSubscriptions) r(e);
                    (!tZ().early || t.suspendedComponentResolvers.size > 0) && (nn(e, t, n), t.suspendedComponentResolvers.forEach((e) => e()), t.suspendedComponentResolvers.clear());
                }
                t.queuedComponentCallbacks_DEPRECATED.forEach((e) => e(n)), t.queuedComponentCallbacks_DEPRECATED.splice(0, t.queuedComponentCallbacks_DEPRECATED.length);
            }
            function no({ setNotifyBatcherOfChange: e }) {
                let t = ne(),
                    [, n] = t8([]);
                return (
                    e(() => n({})),
                    t1(
                        () => (
                            e(() => n({})),
                            () => {
                                e(() => {});
                            }
                        ),
                        [e]
                    ),
                    t1(() => {
                        (function (e) {
                            let t = e.getState();
                            t.commitDepth++;
                            try {
                                let { nextTree: n } = t;
                                if (null == n) return;
                                (t.previousTree = t.currentTree),
                                    (t.currentTree = n),
                                    (t.nextTree = null),
                                    nr(e),
                                    null != t.previousTree ? t.graphsByVersion.delete(t.previousTree.version) : L("Ended batch with no previous state, which is unexpected", "recoil"),
                                    (t.previousTree = null),
                                    k("recoil_memory_managament_2020") && null == n && tJ(e);
                            } finally {
                                t.commitDepth--;
                            }
                        })(t.current);
                    }),
                    null
                );
            }
            let ni = 0;
            function na({ initializeState_DEPRECATED: e, initializeState: t, store_INTERNAL: n, children: r }) {
                let o;
                let i = (e) => {
                        let t = o.current.graphsByVersion;
                        if (t.has(e)) return h(t.get(e));
                        let n = tK();
                        return t.set(e, n), n;
                    },
                    a = (e, t) => {
                        if (null == t) {
                            let { transactionSubscriptions: t } = f.current.getState(),
                                n = ni++;
                            return (
                                t.set(n, e),
                                {
                                    release: () => {
                                        t.delete(n);
                                    },
                                }
                            );
                        }
                        {
                            let { nodeTransactionSubscriptions: n } = f.current.getState();
                            n.has(t) || n.set(t, new Map());
                            let r = ni++;
                            return (
                                h(n.get(t)).set(r, e),
                                {
                                    release: () => {
                                        let e = n.get(t);
                                        e && (e.delete(r), 0 === e.size && n.delete(t));
                                    },
                                }
                            );
                        }
                    },
                    l = (e) => {
                        for (let t of (t9(f.current), Object.keys(e))) h(f.current.getState().nextTree).transactionMetadata[t] = e[t];
                    },
                    u = (e) => {
                        let t;
                        t9(f.current);
                        let n = h(o.current.nextTree);
                        try {
                            (t6 = !0), (t = e(n));
                        } finally {
                            t6 = !1;
                        }
                        t !== n && ((o.current.nextTree = t), tZ().early && nn(f.current, o.current, t), h(c.current)());
                    },
                    c = t5(null),
                    d = tQ(
                        (e) => {
                            c.current = e;
                        },
                        [c]
                    ),
                    f = tO(() => (null != n ? n : { storeID: tH(), getState: () => o.current, replaceState: u, getGraph: i, subscribeToTransactions: a, addTransactionMetadata: l }));
                null != n && (f.current = n),
                    (o = tO(() =>
                        null != e
                            ? (function (e, t) {
                                  let n = tx();
                                  return (
                                      t({
                                          set: (t, r) => {
                                              let o = n.currentTree,
                                                  i = tG(e, o, t.key, r),
                                                  a = new Set(i.keys()),
                                                  l = o.nonvalidatedAtoms.clone();
                                              for (let e of a) l.delete(e);
                                              n.currentTree = { ...o, dirtyAtoms: tB(o.dirtyAtoms, a), atomValues: tY(o.atomValues, i), nonvalidatedAtoms: l };
                                          },
                                          setUnvalidatedAtomValues: (e) => {
                                              e.forEach((e, t) => {
                                                  n.currentTree = t$(n.currentTree, t, e);
                                              });
                                          },
                                      }),
                                      n
                                  );
                              })(f.current, e)
                            : null != t
                            ? (function (e) {
                                  let t = tX(e),
                                      n = t.getStore_INTERNAL().getState();
                                  return t.retain(), n.nodeCleanupFunctions.forEach((e) => e()), n.nodeCleanupFunctions.clear(), n;
                              })(t)
                            : tx()
                    ));
                let p = t2(() => (null == tq ? void 0 : tq(o, () => o.current.currentTree.version)), [o]);
                return (
                    t1(() => {
                        let e = f.current;
                        for (let t of new Set(e.getState().knownAtoms)) tW(e, t, "get");
                        return () => {
                            for (let t of e.getState().knownAtoms) tz(e, t);
                        };
                    }, [f]),
                    s.createElement(t7.Provider, { value: f }, s.createElement(nt.Provider, { value: p }, s.createElement(no, { setNotifyBatcherOfChange: d }), r))
                );
            }
            var nl = {
                    RecoilRoot: function (e) {
                        let { override: t, ...n } = e,
                            r = ne();
                        return !1 === t && r.current !== t3 ? e.children : s.createElement(na, n);
                    },
                    useStoreRef: ne,
                    useRecoilMutableSource: function () {
                        let e = t0(nt);
                        return null == e && z("Attempted to use a Recoil hook outside of a <RecoilRoot>. <RecoilRoot> must be an ancestor of any component that uses Recoil hooks."), e;
                    },
                    useRecoilStoreID: function () {
                        return ne().current.storeID;
                    },
                    notifyComponents_FOR_TESTING: nn,
                    sendEndOfBatchNotifications_FOR_TESTING: nr,
                },
                ns = function (e, t) {
                    if (e === t) return !0;
                    if (e.length !== t.length) return !1;
                    for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
                    return !0;
                };
            let { useEffect: nu, useRef: nc } = s;
            var nd = function (e) {
                let t = nc();
                return (
                    nu(() => {
                        t.current = e;
                    }),
                    t.current
                );
            };
            let { useStoreRef: nf } = nl,
                { SUSPENSE_TIMEOUT_MS: nh } = e7,
                { updateRetainCount: np } = e7,
                { RetentionZone: nv } = e_,
                { useEffect: n_, useRef: ny } = s,
                { isSSR: nm } = tu;
            var nS = function (e) {
                    if (k("recoil_memory_managament_2020"))
                        return (function (e) {
                            let t = Array.isArray(e) ? e : [e],
                                n = t.map((e) => (e instanceof nv ? e : e.key)),
                                r = nf();
                            n_(() => {
                                if (!k("recoil_memory_managament_2020")) return;
                                let e = r.current;
                                if (o.current && !nm) window.clearTimeout(o.current), (o.current = null);
                                else for (let t of n) np(e, t, 1);
                                return () => {
                                    for (let t of n) np(e, t, -1);
                                };
                            }, [r, ...n]);
                            let o = ny(),
                                i = nd(n);
                            if (!nm && (void 0 === i || !ns(i, n))) {
                                let e = r.current;
                                for (let t of n) np(e, t, 1);
                                if (i) for (let t of i) np(e, t, -1);
                                o.current && window.clearTimeout(o.current),
                                    (o.current = window.setTimeout(() => {
                                        for (let t of ((o.current = null), n)) np(e, t, -1);
                                    }, nh));
                            }
                        })(e);
                },
                ng = function () {
                    return "<component name not available>";
                };
            let { batchUpdates: nR } = ti,
                { DEFAULT_VALUE: nT } = Y,
                { currentRendererSupportsUseSyncExternalStore: nb, reactMode: nw, useMutableSource: nA, useSyncExternalStore: nE } = I,
                { useRecoilMutableSource: nN, useStoreRef: nk } = nl,
                { isRecoilValue: nL } = x,
                { AbstractRecoilValue: nV, getRecoilValueAsLoadable: nC, setRecoilValue: nM, setUnvalidatedRecoilValue: nU, subscribeToRecoilValue: nI } = eQ,
                { useCallback: nB, useEffect: nD, useMemo: nO, useRef: nP, useState: nx } = s,
                { setByAddingToSet: nz } = ey,
                { isSSR: nF } = tu;
            function nW(e, t, n) {
                if ("hasValue" === e.state) return e.contents;
                if ("loading" === e.state) {
                    let t = new Promise((t) => {
                        let r = n.current.getState().suspendedComponentResolvers;
                        r.add(t),
                            nF &&
                                f(e.contents) &&
                                e.contents.finally(() => {
                                    r.delete(t);
                                });
                    });
                    throw t;
                }
                if ("hasError" === e.state) throw e.contents;
                throw d(`Invalid value of loadable atom "${t.key}"`);
            }
            function nG(e) {
                let t = nk(),
                    n = ng(),
                    r = nB(() => {
                        var n;
                        let r = t.current,
                            o = r.getState(),
                            i = nw().early && null !== (n = o.nextTree) && void 0 !== n ? n : o.currentTree,
                            a = nC(r, e, i);
                        return { loadable: a, key: e.key };
                    }, [t, e]),
                    o = nB((e) => {
                        let t;
                        return () => {
                            var n, r;
                            let o = e();
                            return null !== (n = t) && void 0 !== n && n.loadable.is(o.loadable) && (null === (r = t) || void 0 === r ? void 0 : r.key) === o.key ? t : ((t = o), o);
                        };
                    }, []),
                    i = nO(() => o(r), [r, o]),
                    a = nB(
                        (r) => {
                            let o = t.current,
                                i = nI(o, e, r, n);
                            return i.release;
                        },
                        [t, e, n]
                    );
                return nE(a, i, i).loadable;
            }
            function n$(e) {
                let t = nk(),
                    n = nB(() => {
                        var n;
                        let r = t.current,
                            o = r.getState(),
                            i = nw().early && null !== (n = o.nextTree) && void 0 !== n ? n : o.currentTree;
                        return nC(r, e, i);
                    }, [t, e]),
                    r = nB(() => n(), [n]),
                    o = ng(),
                    i = nB(
                        (r, i) => {
                            let a = t.current,
                                l = nI(
                                    a,
                                    e,
                                    () => {
                                        if (!k("recoil_suppress_rerender_in_callback")) return i();
                                        let e = n();
                                        s.current.is(e) || i(), (s.current = e);
                                    },
                                    o
                                );
                            return l.release;
                        },
                        [t, e, o, n]
                    ),
                    a = nN();
                if (null == a) throw d("Recoil hooks must be used in components contained within a <RecoilRoot> component.");
                let l = nA(a, r, i),
                    s = nP(l);
                return (
                    nD(() => {
                        s.current = l;
                    }),
                    l
                );
            }
            function nK(e) {
                let t = nk(),
                    n = ng(),
                    r = nB(() => {
                        var n;
                        let r = t.current,
                            o = r.getState(),
                            i = nw().early && null !== (n = o.nextTree) && void 0 !== n ? n : o.currentTree;
                        return nC(r, e, i);
                    }, [t, e]),
                    o = nB(() => ({ loadable: r(), key: e.key }), [r, e.key]),
                    i = nB(
                        (e) => {
                            let t = o();
                            return e.loadable.is(t.loadable) && e.key === t.key ? e : t;
                        },
                        [o]
                    );
                nD(() => {
                    let r = nI(
                        t.current,
                        e,
                        (e) => {
                            l(i);
                        },
                        n
                    );
                    return l(i), r.release;
                }, [n, e, t, i]);
                let [a, l] = nx(o);
                return a.key !== e.key ? o().loadable : a.loadable;
            }
            function nj(e) {
                let t = nk(),
                    [, n] = nx([]),
                    r = ng(),
                    o = nB(() => {
                        var n;
                        let r = t.current,
                            o = r.getState(),
                            i = nw().early && null !== (n = o.nextTree) && void 0 !== n ? n : o.currentTree;
                        return nC(r, e, i);
                    }, [t, e]),
                    i = o(),
                    a = nP(i);
                return (
                    nD(() => {
                        a.current = i;
                    }),
                    nD(() => {
                        let i = t.current,
                            l = i.getState(),
                            s = nI(
                                i,
                                e,
                                (e) => {
                                    var t;
                                    if (!k("recoil_suppress_rerender_in_callback")) return n([]);
                                    let r = o();
                                    (null !== (t = a.current) && void 0 !== t && t.is(r)) || n(r), (a.current = r);
                                },
                                r
                            );
                        if (l.nextTree)
                            i.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                                (a.current = null), n([]);
                            });
                        else {
                            var u;
                            if (!k("recoil_suppress_rerender_in_callback")) return n([]);
                            let e = o();
                            (null !== (u = a.current) && void 0 !== u && u.is(e)) || n(e), (a.current = e);
                        }
                        return s.release;
                    }, [r, o, e, t]),
                    i
                );
            }
            function nH(e) {
                return k("recoil_memory_managament_2020") && nS(e), { TRANSITION_SUPPORT: nK, SYNC_EXTERNAL_STORE: nb() ? nG : nK, MUTABLE_SOURCE: n$, LEGACY: nj }[nw().mode](e);
            }
            function nq(e) {
                let t = nk(),
                    n = nH(e);
                return nW(n, e, t);
            }
            function nZ(e) {
                let t = nk();
                return nB(
                    (n) => {
                        nM(t.current, e, n);
                    },
                    [t, e]
                );
            }
            function nY(e) {
                return k("recoil_memory_managament_2020") && nS(e), nK(e);
            }
            function nJ(e) {
                let t = nk(),
                    n = nY(e);
                return nW(n, e, t);
            }
            var nX = function (e, t) {
                    let n = new Map();
                    for (let [r, o] of e) t(o, r) && n.set(r, o);
                    return n;
                },
                nQ = function (e, t) {
                    let n = new Set();
                    for (let r of e) t(r) && n.add(r);
                    return n;
                },
                n0 = function (...e) {
                    let t = new Map();
                    for (let n = 0; n < e.length; n++) {
                        let r;
                        let o = e[n].keys();
                        for (; !(r = o.next()).done; ) t.set(r.value, e[n].get(r.value));
                    }
                    return t;
                };
            let { batchUpdates: n1 } = ti,
                { DEFAULT_VALUE: n2, getNode: n5, nodes: n8 } = Y,
                { useStoreRef: n4 } = nl,
                { AbstractRecoilValue: n3, setRecoilValueLoadable: n6 } = eQ,
                { SUSPENSE_TIMEOUT_MS: n9 } = e7,
                { cloneSnapshot: n7 } = tI,
                { useCallback: re, useEffect: rt, useRef: rn, useState: rr } = s,
                { isSSR: ro } = tu;
            function ri(e) {
                let t = n4();
                rt(() => {
                    let n = t.current.subscribeToTransactions(e);
                    return n.release;
                }, [e, t]);
            }
            function ra(e) {
                let t = e.atomValues.toMap(),
                    n = er(
                        nX(t, (e, t) => {
                            let n = n5(t),
                                r = n.persistence_UNSTABLE;
                            return null != r && "none" !== r.type && "hasValue" === e.state;
                        }),
                        (e) => e.contents
                    );
                return n0(e.nonvalidatedAtoms.toMap(), n);
            }
            function rl(e, t) {
                var n;
                let r = e.getState(),
                    o = null !== (n = r.nextTree) && void 0 !== n ? n : r.currentTree,
                    i = t.getStore_INTERNAL().getState().currentTree;
                n1(() => {
                    let n = new Set();
                    for (let e of [o.atomValues.keys(), i.atomValues.keys()])
                        for (let t of e) {
                            var r, a;
                            (null === (r = o.atomValues.get(t)) || void 0 === r ? void 0 : r.contents) !== (null === (a = i.atomValues.get(t)) || void 0 === a ? void 0 : a.contents) && n5(t).shouldRestoreFromSnapshots && n.add(t);
                        }
                    n.forEach((t) => {
                        n6(e, new n3(t), i.atomValues.has(t) ? h(i.atomValues.get(t)) : n2);
                    }),
                        e.replaceState((e) => ({ ...e, stateID: t.getID() }));
                });
            }
            var rs = {
                useRecoilSnapshot: function () {
                    let e = n4(),
                        [t, n] = rr(() => n7(e.current)),
                        r = nd(t),
                        o = rn(),
                        i = rn();
                    if (
                        (ri(re((e) => n(n7(e)), [])),
                        rt(() => {
                            let e = t.retain();
                            if (o.current && !ro) {
                                var n;
                                window.clearTimeout(o.current), (o.current = null), null === (n = i.current) || void 0 === n || n.call(i), (i.current = null);
                            }
                            return () => {
                                window.setTimeout(e, 10);
                            };
                        }, [t]),
                        r !== t && !ro)
                    ) {
                        if (o.current) {
                            var a;
                            window.clearTimeout(o.current), (o.current = null), null === (a = i.current) || void 0 === a || a.call(i), (i.current = null);
                        }
                        (i.current = t.retain()),
                            (o.current = window.setTimeout(() => {
                                var e;
                                (o.current = null), null === (e = i.current) || void 0 === e || e.call(i), (i.current = null);
                            }, n9));
                    }
                    return t;
                },
                gotoSnapshot: rl,
                useGotoRecoilSnapshot: function () {
                    let e = n4();
                    return re((t) => rl(e.current, t), [e]);
                },
                useRecoilTransactionObserver: function (e) {
                    ri(
                        re(
                            (t) => {
                                let n = n7(t, "latest"),
                                    r = n7(t, "previous");
                                e({ snapshot: n, previousSnapshot: r });
                            },
                            [e]
                        )
                    );
                },
                useTransactionObservation_DEPRECATED: function (e) {
                    ri(
                        re(
                            (t) => {
                                let n = t.getState().previousTree,
                                    r = t.getState().currentTree;
                                n || (L("Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil"), (n = t.getState().currentTree));
                                let o = ra(r),
                                    i = ra(n),
                                    a = er(n8, (e) => {
                                        var t, n, r, o;
                                        return {
                                            persistence_UNSTABLE: {
                                                type: null !== (t = null === (n = e.persistence_UNSTABLE) || void 0 === n ? void 0 : n.type) && void 0 !== t ? t : "none",
                                                backButton: null !== (r = null === (o = e.persistence_UNSTABLE) || void 0 === o ? void 0 : o.backButton) && void 0 !== r && r,
                                            },
                                        };
                                    }),
                                    l = nQ(r.dirtyAtoms, (e) => o.has(e) || i.has(e));
                                e({ atomValues: o, previousAtomValues: i, atomInfo: a, modifiedAtoms: l, transactionMetadata: { ...r.transactionMetadata } });
                            },
                            [e]
                        )
                    );
                },
                useTransactionSubscription_DEPRECATED: ri,
            };
            let { peekNodeInfo: ru } = eV,
                { useStoreRef: rc } = nl,
                { reactMode: rd } = I,
                { RecoilRoot: rf, useStoreRef: rh } = nl,
                { useMemo: rp } = s,
                { loadableWithValue: rv } = E,
                { initializeNode: r_ } = eV,
                { DEFAULT_VALUE: ry, getNode: rm } = Y,
                { copyTreeState: rS, getRecoilValueAsLoadable: rg, invalidateDownstreams: rR, writeLoadableToTreeState: rT } = eQ;
            function rb(e) {
                return "atom" === rm(e.key).nodeType;
            }
            class rw {
                constructor(e, t) {
                    p(this, "_store", void 0),
                        p(this, "_treeState", void 0),
                        p(this, "_changes", void 0),
                        p(this, "get", (e) => {
                            if (this._changes.has(e.key)) return this._changes.get(e.key);
                            if (!rb(e)) throw d("Reading selectors within atomicUpdate is not supported");
                            let t = rg(this._store, e, this._treeState);
                            if ("hasValue" === t.state) return t.contents;
                            if ("hasError" === t.state) throw t.contents;
                            throw d(`Expected Recoil atom ${e.key} to have a value, but it is in a loading state.`);
                        }),
                        p(this, "set", (e, t) => {
                            if (!rb(e)) throw d("Setting selectors within atomicUpdate is not supported");
                            if ("function" == typeof t) {
                                let n = this.get(e);
                                this._changes.set(e.key, t(n));
                            } else r_(this._store, e.key, "set"), this._changes.set(e.key, t);
                        }),
                        p(this, "reset", (e) => {
                            this.set(e, ry);
                        }),
                        (this._store = e),
                        (this._treeState = t),
                        (this._changes = new Map());
                }
                newTreeState_INTERNAL() {
                    if (0 === this._changes.size) return this._treeState;
                    let e = rS(this._treeState);
                    for (let [t, n] of this._changes) rT(e, t, rv(n));
                    return rR(this._store, e), e;
                }
            }
            var rA = Object.freeze({
                    __proto__: null,
                    atomicUpdater: function (e) {
                        return (t) => {
                            e.replaceState((n) => {
                                let r = new rw(e, n);
                                return t(r), r.newTreeState_INTERNAL();
                            });
                        };
                    },
                }),
                rE = function (e, t) {
                    if (!e) throw Error(t);
                };
            let { atomicUpdater: rN } = rA,
                { batchUpdates: rk } = ti,
                { DEFAULT_VALUE: rL } = Y,
                { useStoreRef: rV } = nl,
                { refreshRecoilValue: rC, setRecoilValue: rM } = eQ,
                { cloneSnapshot: rU } = tI,
                { gotoSnapshot: rI } = rs,
                { useCallback: rB } = s;
            class rD {}
            let rO = new rD();
            function rP(e, t, n, r) {
                let o,
                    i = rO;
                if (
                    (rk(() => {
                        let a =
                            "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
                        if ("function" != typeof t) throw d(a);
                        let l = eS(
                                { ...(null != r ? r : {}), set: (t, n) => rM(e, t, n), reset: (t) => rM(e, t, rL), refresh: (t) => rC(e, t), gotoSnapshot: (t) => rI(e, t), transact_UNSTABLE: (t) => rN(e)(t) },
                                {
                                    snapshot: () => {
                                        let t = rU(e);
                                        return (o = t.retain()), t;
                                    },
                                }
                            ),
                            s = t(l);
                        if ("function" != typeof s) throw d(a);
                        i = s(...n);
                    }),
                    i instanceof rD && rE(!1),
                    f(i))
                )
                    i = i.finally(() => {
                        var e;
                        null === (e = o) || void 0 === e || e();
                    });
                else {
                    var a;
                    null === (a = o) || void 0 === a || a();
                }
                return i;
            }
            var rx = {
                recoilCallback: rP,
                useRecoilCallback: function (e, t) {
                    let n = rV();
                    return rB((...t) => rP(n.current, e, t), null != t ? [...t, n] : void 0);
                },
            };
            let { useStoreRef: rz } = nl,
                { refreshRecoilValue: rF } = eQ,
                { useCallback: rW } = s,
                { atomicUpdater: rG } = rA,
                { useStoreRef: r$ } = nl,
                { useMemo: rK } = s;
            var rj = Object.freeze({
                __proto__: null,
                WrappedValue: {
                    WrappedValue: class {
                        constructor(e) {
                            p(this, "value", void 0), (this.value = e);
                        }
                    },
                }.WrappedValue,
            });
            let { isFastRefreshEnabled: rH } = I;
            class rq extends Error {}
            var rZ = Object.freeze({
                    __proto__: null,
                    TreeCache: {
                        TreeCache: class {
                            constructor(e) {
                                var t, n, r;
                                p(this, "_name", void 0),
                                    p(this, "_numLeafs", void 0),
                                    p(this, "_root", void 0),
                                    p(this, "_onHit", void 0),
                                    p(this, "_onSet", void 0),
                                    p(this, "_mapNodeValue", void 0),
                                    (this._name = null == e ? void 0 : e.name),
                                    (this._numLeafs = 0),
                                    (this._root = null),
                                    (this._onHit = null !== (t = null == e ? void 0 : e.onHit) && void 0 !== t ? t : () => {}),
                                    (this._onSet = null !== (n = null == e ? void 0 : e.onSet) && void 0 !== n ? n : () => {}),
                                    (this._mapNodeValue = null !== (r = null == e ? void 0 : e.mapNodeValue) && void 0 !== r ? r : (e) => e);
                            }
                            size() {
                                return this._numLeafs;
                            }
                            root() {
                                return this._root;
                            }
                            get(e, t) {
                                var n;
                                return null === (n = this.getLeafNode(e, t)) || void 0 === n ? void 0 : n.value;
                            }
                            getLeafNode(e, t) {
                                if (null == this._root) return;
                                let n = this._root;
                                for (; n; ) {
                                    if ((null == t || t.onNodeVisit(n), "leaf" === n.type)) return this._onHit(n), n;
                                    let r = this._mapNodeValue(e(n.nodeKey));
                                    n = n.branches.get(r);
                                }
                            }
                            set(e, t, n) {
                                let r = () => {
                                    var r, o, i, a, l, s, u;
                                    let c, d;
                                    for (let [t, r] of e) {
                                        let e = this._root;
                                        if ((null == e ? void 0 : e.type) === "leaf") throw this.invalidCacheError();
                                        let o = c;
                                        if ("branch" !== (c = null !== (l = c = o ? o.branches.get(d) : e) && void 0 !== l ? l : { type: "branch", nodeKey: t, parent: o, branches: new Map(), branchKey: d }).type || c.nodeKey !== t)
                                            throw this.invalidCacheError();
                                        null == o || o.branches.set(d, c),
                                            null == n || null === (s = n.onNodeVisit) || void 0 === s || s.call(n, c),
                                            (d = this._mapNodeValue(r)),
                                            (this._root = null !== (u = this._root) && void 0 !== u ? u : c);
                                    }
                                    let f = c ? (null === (r = c) || void 0 === r ? void 0 : r.branches.get(d)) : this._root;
                                    if (null != f && ("leaf" !== f.type || f.branchKey !== d)) throw this.invalidCacheError();
                                    let h = { type: "leaf", value: t, parent: c, branchKey: d };
                                    null === (o = c) || void 0 === o || o.branches.set(d, h),
                                        (this._root = null !== (i = this._root) && void 0 !== i ? i : h),
                                        this._numLeafs++,
                                        this._onSet(h),
                                        null == n || null === (a = n.onNodeVisit) || void 0 === a || a.call(n, h);
                                };
                                try {
                                    r();
                                } catch (e) {
                                    if (e instanceof rq) this.clear(), r();
                                    else throw e;
                                }
                            }
                            delete(e) {
                                let t = this.root();
                                if (!t) return !1;
                                if (e === t) return (this._root = null), (this._numLeafs = 0), !0;
                                let n = e.parent,
                                    r = e.branchKey;
                                for (; n; ) {
                                    var o;
                                    if ((n.branches.delete(r), n === t)) return 0 === n.branches.size ? ((this._root = null), (this._numLeafs = 0)) : this._numLeafs--, !0;
                                    if (n.branches.size > 0) break;
                                    (r = null === (o = n) || void 0 === o ? void 0 : o.branchKey), (n = n.parent);
                                }
                                for (; n !== t; n = n.parent) if (null == n) return !1;
                                return this._numLeafs--, !0;
                            }
                            clear() {
                                (this._numLeafs = 0), (this._root = null);
                            }
                            invalidCacheError() {
                                let e = rH()
                                    ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache."
                                    : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
                                throw (L(e + (null != this._name ? ` - ${this._name}` : "")), new rq());
                            }
                        },
                    }.TreeCache,
                }),
                rY = Object.freeze({
                    __proto__: null,
                    LRUCache: {
                        LRUCache: class {
                            constructor(e) {
                                var t;
                                p(this, "_maxSize", void 0),
                                    p(this, "_size", void 0),
                                    p(this, "_head", void 0),
                                    p(this, "_tail", void 0),
                                    p(this, "_map", void 0),
                                    p(this, "_keyMapper", void 0),
                                    (this._maxSize = e.maxSize),
                                    (this._size = 0),
                                    (this._head = null),
                                    (this._tail = null),
                                    (this._map = new Map()),
                                    (this._keyMapper = null !== (t = e.mapKey) && void 0 !== t ? t : (e) => e);
                            }
                            head() {
                                return this._head;
                            }
                            tail() {
                                return this._tail;
                            }
                            size() {
                                return this._size;
                            }
                            maxSize() {
                                return this._maxSize;
                            }
                            has(e) {
                                return this._map.has(this._keyMapper(e));
                            }
                            get(e) {
                                let t = this._keyMapper(e),
                                    n = this._map.get(t);
                                if (n) return this.set(e, n.value), n.value;
                            }
                            set(e, t) {
                                let n = this._keyMapper(e),
                                    r = this._map.get(n);
                                r && this.delete(e);
                                let o = this.head(),
                                    i = { key: e, right: o, left: null, value: t };
                                o ? (o.left = i) : (this._tail = i), this._map.set(n, i), (this._head = i), this._size++, this._maybeDeleteLRU();
                            }
                            _maybeDeleteLRU() {
                                this.size() > this.maxSize() && this.deleteLru();
                            }
                            deleteLru() {
                                let e = this.tail();
                                e && this.delete(e.key);
                            }
                            delete(e) {
                                let t = this._keyMapper(e);
                                if (!this._size || !this._map.has(t)) return;
                                let n = h(this._map.get(t)),
                                    r = n.right,
                                    o = n.left;
                                r && (r.left = n.left), o && (o.right = n.right), n === this.head() && (this._head = r), n === this.tail() && (this._tail = o), this._map.delete(t), this._size--;
                            }
                            clear() {
                                (this._size = 0), (this._head = null), (this._tail = null), (this._map = new Map());
                            }
                        },
                    }.LRUCache,
                });
            let { LRUCache: rJ } = rY,
                { TreeCache: rX } = rZ;
            var rQ = function ({ name: e, maxSize: t, mapNodeValue: n = (e) => e }) {
                let r = new rJ({ maxSize: t }),
                    o = new rX({
                        name: e,
                        mapNodeValue: n,
                        onHit: (e) => {
                            r.set(e, !0);
                        },
                        onSet: (e) => {
                            let n = r.tail();
                            r.set(e, !0), n && o.size() > t && o.delete(n.key);
                        },
                    });
                return o;
            };
            function r0(e, t, n) {
                if ("string" == typeof e && !e.includes('"') && !e.includes("\\")) return `"${e}"`;
                switch (typeof e) {
                    case "undefined":
                        return "";
                    case "boolean":
                        return e ? "true" : "false";
                    case "number":
                    case "symbol":
                        return String(e);
                    case "string":
                        return JSON.stringify(e);
                    case "function":
                        if ((null == t ? void 0 : t.allowFunctions) !== !0) throw d("Attempt to serialize function in a Recoil cache key");
                        return `__FUNCTION(${e.name})__`;
                }
                if (null === e) return "null";
                if ("object" != typeof e) {
                    var r;
                    return null !== (r = JSON.stringify(e)) && void 0 !== r ? r : "";
                }
                if (f(e)) return "__PROMISE__";
                if (Array.isArray(e)) return `[${e.map((e, n) => r0(e, t, n.toString()))}]`;
                if ("function" == typeof e.toJSON) return r0(e.toJSON(n), t, n);
                if (e instanceof Map) {
                    let r = {};
                    for (let [n, o] of e) r["string" == typeof n ? n : r0(n, t)] = o;
                    return r0(r, t, n);
                }
                return e instanceof Set
                    ? r0(
                          Array.from(e).sort((e, n) => r0(e, t).localeCompare(r0(n, t))),
                          t,
                          n
                      )
                    : void 0 !== Symbol && null != e[Symbol.iterator] && "function" == typeof e[Symbol.iterator]
                    ? r0(Array.from(e), t, n)
                    : `{${Object.keys(e)
                          .filter((t) => void 0 !== e[t])
                          .sort()
                          .map((n) => `${r0(n, t)}:${r0(e[n], t, n)}`)
                          .join(",")}}`;
            }
            var r1 = function (e, t = { allowFunctions: !1 }) {
                return r0(e, t);
            };
            let { TreeCache: r2 } = rZ,
                r5 = { equality: "reference", eviction: "keep-all", maxSize: 1 / 0 };
            var r8 = function ({ equality: e = r5.equality, eviction: t = r5.eviction, maxSize: n = r5.maxSize } = r5, r) {
                let o = (function (e) {
                    switch (e) {
                        case "reference":
                            return (e) => e;
                        case "value":
                            return (e) => r1(e);
                    }
                    throw d(`Unrecognized equality policy ${e}`);
                })(e);
                return (function (e, t, n, r) {
                    switch (e) {
                        case "keep-all":
                            return new r2({ name: r, mapNodeValue: n });
                        case "lru":
                            return rQ({ name: r, maxSize: h(t), mapNodeValue: n });
                        case "most-recent":
                            return rQ({ name: r, maxSize: 1, mapNodeValue: n });
                    }
                    throw d(`Unrecognized eviction policy ${e}`);
                })(t, n, o, r);
            };
            let { isReactNative: r4, isWindow: r3 } = tu,
                { isLoadable: r6, loadableWithError: r9, loadableWithPromise: r7, loadableWithValue: oe } = E,
                { WrappedValue: ot } = rj,
                { getNodeLoadable: on, peekNodeLoadable: or, setNodeValue: oo } = eV,
                { saveDepsToStore: oi } = ei,
                { DEFAULT_VALUE: oa, getConfigDeletionHandler: ol, getNode: os, registerNode: ou } = Y,
                { isRecoilValue: oc } = x,
                { markRecoilValueModified: od } = eQ,
                { retainedByOptionWithDefault: of } = e7,
                { recoilCallback: oh } = rx,
                { startPerfBlock: op } = {
                    startPerfBlock: function (e) {
                        return () => null;
                    },
                };
            class ov {}
            let o_ = new ov(),
                oy = [],
                om = new Map(),
                oS = ((r = 0), () => r++);
            function og(e) {
                let t = null,
                    { key: n, get: r, cachePolicy_UNSTABLE: o } = e,
                    i = null != e.set ? e.set : void 0,
                    a = new Set(),
                    l = r8(null != o ? o : { equality: "reference", eviction: "keep-all" }, n),
                    s = of(e.retainedBy_UNSTABLE),
                    u = new Map(),
                    c = 0;
                function p() {
                    return !k("recoil_memory_managament_2020") || c > 0;
                }
                function v(e) {
                    return (
                        e.getState().knownSelectors.add(n),
                        c++,
                        () => {
                            c--;
                        }
                    );
                }
                function _() {
                    return void 0 !== ol(n) && !p();
                }
                function y(e, t) {
                    N(e, t) && E(e), m(t, !0);
                }
                function m(e, n) {
                    let r = om.get(e);
                    if (null != r) {
                        for (let e of r) od(e, h(t));
                        n && om.delete(e);
                    }
                }
                function S(e, t) {
                    let n = om.get(t);
                    null == n && om.set(t, (n = new Set())), n.add(e);
                }
                function g(e, t, n, r, o, i) {
                    return t
                        .then((r) => {
                            if (!p()) throw (E(e), o_);
                            null != i.loadingDepKey && i.loadingDepPromise === t
                                ? n.atomValues.set(i.loadingDepKey, oe(r))
                                : e.getState().knownSelectors.forEach((e) => {
                                      n.atomValues.delete(e);
                                  });
                            let a = b(e, n);
                            if (a && "loading" !== a.state) {
                                if (((N(e, o) || null == A(e)) && y(e, o), "hasValue" === a.state)) return a.contents;
                                throw a.contents;
                            }
                            if (!N(e, o)) {
                                let t = w(e, n);
                                if (null != t) return t.loadingLoadable.contents;
                            }
                            let [l, s] = T(e, n, o);
                            if (("loading" !== l.state && (V(n, l, s), y(e, o)), "hasError" === l.state)) throw l.contents;
                            return l.contents;
                        })
                        .catch((t) => {
                            if (t instanceof ov) throw o_;
                            if (!p()) throw (E(e), o_);
                            let i = r9(t);
                            throw (V(n, i, r), y(e, o), t);
                        });
                }
                function R(e, t, r, o) {
                    var i, l, s, u, c, d, f;
                    for (let h of ((N(e, o) ||
                        t.version === (null === (i = e.getState()) || void 0 === i ? void 0 : null === (l = i.currentTree) || void 0 === l ? void 0 : l.version) ||
                        t.version === (null === (s = e.getState()) || void 0 === s ? void 0 : null === (u = s.nextTree) || void 0 === u ? void 0 : u.version)) &&
                        oi(n, r, e, null !== (c = null === (d = e.getState()) || void 0 === d ? void 0 : null === (f = d.nextTree) || void 0 === f ? void 0 : f.version) && void 0 !== c ? c : e.getState().currentTree.version),
                    r))
                        a.add(h);
                }
                function T(e, o, i) {
                    let a, l;
                    let s = op(n),
                        u = !0,
                        c = !0,
                        v = () => {
                            s(), (c = !1);
                        },
                        _ = !1,
                        S = { loadingDepKey: null, loadingDepPromise: null },
                        T = new Map();
                    function b({ key: t }) {
                        let n = on(e, o, t);
                        switch (
                            (T.set(t, n),
                            u ||
                                (R(e, o, new Set(T.keys()), i),
                                (function (e, t) {
                                    if (N(e, t)) {
                                        let n = h(A(e));
                                        n.stateVersions.clear(), m(t, !1);
                                    }
                                })(e, i)),
                            n.state)
                        ) {
                            case "hasValue":
                                return n.contents;
                            case "hasError":
                                throw n.contents;
                            case "loading":
                                throw ((S.loadingDepKey = t), (S.loadingDepPromise = n.contents), n.contents);
                        }
                        throw d("Invalid Loadable state");
                    }
                    try {
                        ((a = r({
                            get: b,
                            getCallback: (n) => (...r) => {
                                if (c)
                                    throw d(
                                        "Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription."
                                    );
                                return null != t || rE(!1), oh(e, n, r, { node: t });
                            },
                        })),
                        (a = oc(a) ? b(a) : a),
                        r6(a) && ("hasError" === a.state && (_ = !0), (a = a.contents)),
                        f(a))
                            ? (a = a
                                  .then((t) => {
                                      if (!p()) throw (E(e), o_);
                                      let n = oe(t);
                                      return V(o, n, T), y(e, i), t;
                                  })
                                  .catch((t) => {
                                      if (!p()) throw (E(e), o_);
                                      if (f(t)) return g(e, t, o, T, i, S);
                                      let n = r9(t);
                                      throw (V(o, n, T), y(e, i), t);
                                  })
                                  .finally(v))
                            : v(),
                            (a = a instanceof ot ? a.value : a);
                    } catch (t) {
                        f((a = t)) ? (a = g(e, a, o, T, i, S).finally(v)) : ((_ = !0), v());
                    }
                    return (
                        (l = _ ? r9(a) : f(a) ? r7(a) : oe(a)),
                        (u = !1),
                        (function (e, t, n) {
                            if (N(e, t)) {
                                let t = A(e);
                                null != t && (t.depValuesDiscoveredSoFarDuringAsyncWork = n);
                            }
                        })(e, i, T),
                        R(e, o, new Set(T.keys()), i),
                        [l, T]
                    );
                }
                function b(e, t) {
                    let r = t.atomValues.get(n);
                    if (null != r) return r;
                    let o = new Set();
                    try {
                        r = l.get((n) => ("string" != typeof n && rE(!1), on(e, t, n).contents), {
                            onNodeVisit: (e) => {
                                "branch" === e.type && e.nodeKey !== n && o.add(e.nodeKey);
                            },
                        });
                    } catch (e) {
                        throw d(`Problem with cache lookup for selector "${n}": ${e.message}`);
                    }
                    if (r) {
                        var i;
                        t.atomValues.set(n, r), R(e, t, o, null === (i = A(e)) || void 0 === i ? void 0 : i.executionID);
                    }
                    return r;
                }
                function w(e, t) {
                    let n = ta([
                        u.has(e) ? [h(u.get(e))] : [],
                        F(
                            em(u, ([t]) => t !== e),
                            ([, e]) => e
                        ),
                    ]);
                    for (let r of n) {
                        if (
                            r.stateVersions.get(t.version) ||
                            !(function (n) {
                                for (let [r, o] of n) if (!on(e, t, r).is(o)) return !0;
                                return !1;
                            })(r.depValuesDiscoveredSoFarDuringAsyncWork)
                        )
                            return r.stateVersions.set(t.version, !0), r;
                        r.stateVersions.set(t.version, !1);
                    }
                }
                function A(e) {
                    return u.get(e);
                }
                function E(e) {
                    u.delete(e);
                }
                function N(e, t) {
                    var n;
                    return t === (null === (n = A(e)) || void 0 === n ? void 0 : n.executionID);
                }
                function V(e, t, r) {
                    e.atomValues.set(n, t);
                    try {
                        l.set(
                            Array.from(r.entries()).map(([e, t]) => [e, t.contents]),
                            t
                        );
                    } catch (e) {
                        throw d(`Problem with setting cache for selector "${n}": ${e.message}`);
                    }
                }
                function C(e, t) {
                    let r = t.atomValues.get(n);
                    return null != r
                        ? r
                        : l.get((n) => {
                              var r;
                              return "string" != typeof n && rE(!1), null === (r = or(e, t, n)) || void 0 === r ? void 0 : r.contents;
                          });
                }
                function M(e, t) {
                    return (function (e) {
                        if (oy.includes(n)) {
                            let e = `Recoil selector has circular dependencies: ${oy.slice(oy.indexOf(n)).join(" → ")}`;
                            return r9(d(e));
                        }
                        oy.push(n);
                        try {
                            return e();
                        } finally {
                            oy.pop();
                        }
                    })(() =>
                        (function (e, t) {
                            var n;
                            let r = b(e, t);
                            if (null != r) return E(e), r;
                            let o = w(e, t);
                            if (null != o) return (null === (n = o.loadingLoadable) || void 0 === n ? void 0 : n.state) === "loading" && S(e, o.executionID), o.loadingLoadable;
                            let i = oS(),
                                [a, l] = T(e, t, i);
                            return "loading" === a.state ? (u.set(e, { depValuesDiscoveredSoFarDuringAsyncWork: l, executionID: i, loadingLoadable: a, stateVersions: new Map([[t.version, !0]]) }), S(e, i)) : (E(e), V(t, a, l)), a;
                        })(e, t)
                    );
                }
                function U(e) {
                    e.atomValues.delete(n);
                }
                function I(e, n) {
                    for (let o of (null != t || rE(!1), a)) {
                        var r;
                        let t = os(o);
                        null === (r = t.clearCache) || void 0 === r || r.call(t, e, n);
                    }
                    a.clear(), U(n), l.clear(), od(e, t);
                }
                return (t =
                    null != i
                        ? ou({
                              key: n,
                              nodeType: "selector",
                              peek: C,
                              get: M,
                              set: (e, t, r) => {
                                  let o = !1,
                                      a = new Map();
                                  function l({ key: r }) {
                                      if (o) throw d("Recoil: Async selector sets are not currently supported.");
                                      let i = on(e, t, r);
                                      if ("hasValue" === i.state) return i.contents;
                                      if ("loading" === i.state) {
                                          let e = `Getting value of asynchronous atom or selector "${r}" in a pending state while setting selector "${n}" is not yet supported.`;
                                          throw (L(e), d(e));
                                      }
                                      throw i.contents;
                                  }
                                  function s(n, r) {
                                      if (o) {
                                          let e = "Recoil: Async selector sets are not currently supported.";
                                          throw (L(e), d(e));
                                      }
                                      let i = "function" == typeof r ? r(l(n)) : r,
                                          s = oo(e, t, n.key, i);
                                      s.forEach((e, t) => a.set(t, e));
                                  }
                                  let u = i(
                                      {
                                          set: s,
                                          get: l,
                                          reset: function (e) {
                                              s(e, oa);
                                          },
                                      },
                                      r
                                  );
                                  if (void 0 !== u) throw f(u) ? d("Recoil: Async selector sets are not currently supported.") : d("Recoil: selector set should be a void function.");
                                  return (o = !0), a;
                              },
                              init: v,
                              invalidate: U,
                              clearCache: I,
                              shouldDeleteConfigOnRelease: _,
                              dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                              shouldRestoreFromSnapshots: !1,
                              retainedBy: s,
                          })
                        : ou({
                              key: n,
                              nodeType: "selector",
                              peek: C,
                              get: M,
                              init: v,
                              invalidate: U,
                              clearCache: I,
                              shouldDeleteConfigOnRelease: _,
                              dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                              shouldRestoreFromSnapshots: !1,
                              retainedBy: s,
                          }));
            }
            og.value = (e) => new ot(e);
            let { isLoadable: oR, loadableWithError: oT, loadableWithPromise: ob, loadableWithValue: ow } = E,
                { WrappedValue: oA } = rj,
                { peekNodeInfo: oE } = eV,
                { DEFAULT_VALUE: oN, DefaultValue: ok, getConfigDeletionHandler: oL, registerNode: oV, setConfigDeletionHandler: oC } = Y,
                { isRecoilValue: oM } = x,
                { getRecoilValueAsLoadable: oU, markRecoilValueModified: oI, setRecoilValue: oB, setRecoilValueLoadable: oD } = eQ,
                { retainedByOptionWithDefault: oO } = e7,
                oP = (e) => (e instanceof oA ? e.value : e);
            function ox(e) {
                let { ...t } = e,
                    n = "default" in e ? e.default : new Promise(() => {});
                return oM(n)
                    ? (function (e) {
                          let t = ox({
                                  ...e,
                                  default: oN,
                                  persistence_UNSTABLE: void 0 === e.persistence_UNSTABLE ? void 0 : { ...e.persistence_UNSTABLE, validator: (t) => (t instanceof ok ? t : h(e.persistence_UNSTABLE).validator(t, oN)) },
                                  effects: e.effects,
                                  effects_UNSTABLE: e.effects_UNSTABLE,
                              }),
                              n = og({
                                  key: `${e.key}__withFallback`,
                                  get: ({ get: n }) => {
                                      let r = n(t);
                                      return r instanceof ok ? e.default : r;
                                  },
                                  set: ({ set: e }, n) => e(t, n),
                                  cachePolicy_UNSTABLE: { eviction: "most-recent" },
                                  dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                              });
                          return oC(n.key, oL(e.key)), n;
                      })({ ...t, default: n })
                    : (function (e) {
                          var t;
                          let n;
                          let { key: r, persistence_UNSTABLE: o } = e,
                              i = oO(e.retainedBy_UNSTABLE),
                              a = 0;
                          function l(e) {
                              return ob(
                                  e
                                      .then((e) => ((s = ow(e)), e))
                                      .catch((e) => {
                                          throw ((s = oT(e)), e);
                                      })
                              );
                          }
                          let s = f(e.default) ? l(e.default) : oR(e.default) ? ("loading" === e.default.state ? l(e.default.contents) : e.default) : ow(oP(e.default));
                          s.contents;
                          let u = new Map();
                          function c(e, t) {
                              var o, i;
                              return null !== (o = null !== (i = t.atomValues.get(r)) && void 0 !== i ? i : n) && void 0 !== o ? o : s;
                          }
                          let p = oV({
                              key: r,
                              nodeType: "atom",
                              peek: c,
                              get: function (e, t) {
                                  if (t.atomValues.has(r)) return h(t.atomValues.get(r));
                                  if (!t.nonvalidatedAtoms.has(r)) return s;
                                  {
                                      if (null != n) return n;
                                      if (null == o) return z(`Tried to restore a persisted value for atom ${r} but it has no persistence settings.`), s;
                                      let e = t.nonvalidatedAtoms.get(r),
                                          i = o.validator(e, oN),
                                          a = i instanceof ok ? s : ow(i);
                                      return (n = a);
                                  }
                              },
                              set: function (e, t, o) {
                                  if (t.atomValues.has(r)) {
                                      let e = h(t.atomValues.get(r));
                                      if ("hasValue" === e.state && o === e.contents) return new Map();
                                  } else if (!t.nonvalidatedAtoms.has(r) && o instanceof ok) return new Map();
                                  return (n = void 0), new Map().set(r, ow(o));
                              },
                              init: function (t, n, o) {
                                  var i, l, h;
                                  a++,
                                      t.getState().knownAtoms.add(r),
                                      "loading" === s.state &&
                                          s.contents.finally(() => {
                                              var e;
                                              let n = null !== (e = t.getState().nextTree) && void 0 !== e ? e : t.getState().currentTree;
                                              n.atomValues.has(r) || oI(t, p);
                                          });
                                  let v = null !== (i = e.effects) && void 0 !== i ? i : e.effects_UNSTABLE;
                                  if (null != v) {
                                      let e = oN,
                                          i = !0,
                                          a = !1,
                                          S = null;
                                      function _(o) {
                                          if (i && o.key === r) {
                                              let r = e;
                                              return r instanceof ok ? c(t, n) : f(r) ? ob(r.then((e) => (e instanceof ok ? s.toPromise() : e))) : ow(r);
                                          }
                                          return oU(t, o);
                                      }
                                      function y(e) {
                                          return _(e).toPromise();
                                      }
                                      function m(n) {
                                          var o;
                                          let a = oE(t, null !== (o = t.getState().nextTree) && void 0 !== o ? o : t.getState().currentTree, n.key);
                                          return !i || n.key !== r || e instanceof ok ? a : { ...a, isSet: !0, loadable: _(n) };
                                      }
                                      let g = (n) => (r) => {
                                              if (i) {
                                                  let t = _(p),
                                                      o = "hasValue" === t.state ? t.contents : oN;
                                                  f((e = "function" == typeof r ? r(o) : r)) && (e = e.then((e) => ((S = { effect: n, value: e }), e)));
                                              } else {
                                                  if (f(r)) throw d("Setting atoms to async values is not implemented.");
                                                  "function" != typeof r && (S = { effect: n, value: oP(r) }),
                                                      oB(
                                                          t,
                                                          p,
                                                          "function" == typeof r
                                                              ? (e) => {
                                                                    let t = oP(r(e));
                                                                    return (S = { effect: n, value: t }), t;
                                                                }
                                                              : oP(r)
                                                      );
                                              }
                                          },
                                          R = (e) => () => g(e)(oN),
                                          T = (e) => (n) => {
                                              var o;
                                              let { release: i } = t.subscribeToTransactions((t) => {
                                                  var o, i, a, l, u;
                                                  let { currentTree: c, previousTree: d } = t.getState();
                                                  d || (L("Transaction subscribers notified without a next tree being present -- this is a bug in Recoil"), (d = c));
                                                  let f = null !== (o = c.atomValues.get(r)) && void 0 !== o ? o : s;
                                                  if ("hasValue" === f.state) {
                                                      let t = f.contents,
                                                          o = null !== (i = d.atomValues.get(r)) && void 0 !== i ? i : s,
                                                          h = "hasValue" === o.state ? o.contents : oN;
                                                      (null === (a = S) || void 0 === a ? void 0 : a.effect) !== e || (null === (l = S) || void 0 === l ? void 0 : l.value) !== t
                                                          ? n(t, h, !c.atomValues.has(r))
                                                          : (null === (u = S) || void 0 === u ? void 0 : u.effect) === e && (S = null);
                                                  }
                                              }, r);
                                              u.set(t, [...(null !== (o = u.get(t)) && void 0 !== o ? o : []), i]);
                                          };
                                      for (let n of v)
                                          try {
                                              let e = n({ node: p, storeID: t.storeID, parentStoreID_UNSTABLE: t.parentStoreID, trigger: o, setSelf: g(n), resetSelf: R(n), onSet: T(n), getPromise: y, getLoadable: _, getInfo_UNSTABLE: m });
                                              null != e && u.set(t, [...(null !== (l = u.get(t)) && void 0 !== l ? l : []), e]);
                                          } catch (t) {
                                              (e = t), (a = !0);
                                          }
                                      if (((i = !1), !(e instanceof ok))) {
                                          let o = a
                                              ? oT(e)
                                              : f(e)
                                              ? ob(
                                                    (function (e, t) {
                                                        let n = t
                                                            .then((t) => {
                                                                var o, i;
                                                                let a = null !== (o = e.getState().nextTree) && void 0 !== o ? o : e.getState().currentTree;
                                                                return (null === (i = a.atomValues.get(r)) || void 0 === i ? void 0 : i.contents) === n && oB(e, p, t), t;
                                                            })
                                                            .catch((t) => {
                                                                var o, i;
                                                                let a = null !== (o = e.getState().nextTree) && void 0 !== o ? o : e.getState().currentTree;
                                                                throw ((null === (i = a.atomValues.get(r)) || void 0 === i ? void 0 : i.contents) === n && oD(e, p, oT(t)), t);
                                                            });
                                                        return n;
                                                    })(t, e)
                                                )
                                              : ow(oP(e));
                                          o.contents, n.atomValues.set(r, o), null === (h = t.getState().nextTree) || void 0 === h || h.atomValues.set(r, o);
                                      }
                                  }
                                  return () => {
                                      var e;
                                      a--, null === (e = u.get(t)) || void 0 === e || e.forEach((e) => e()), u.delete(t);
                                  };
                              },
                              invalidate: function () {
                                  n = void 0;
                              },
                              shouldDeleteConfigOnRelease: function () {
                                  return void 0 !== oL(r) && a <= 0;
                              },
                              dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                              persistence_UNSTABLE: e.persistence_UNSTABLE ? { type: e.persistence_UNSTABLE.type, backButton: e.persistence_UNSTABLE.backButton } : void 0,
                              shouldRestoreFromSnapshots: !0,
                              retainedBy: i,
                          });
                          return p;
                      })({ ...t, default: n });
            }
            ox.value = (e) => new oA(e);
            var oz = Object.freeze({
                __proto__: null,
                MapCache: {
                    MapCache: class {
                        constructor(e) {
                            var t;
                            p(this, "_map", void 0), p(this, "_keyMapper", void 0), (this._map = new Map()), (this._keyMapper = null !== (t = null == e ? void 0 : e.mapKey) && void 0 !== t ? t : (e) => e);
                        }
                        size() {
                            return this._map.size;
                        }
                        has(e) {
                            return this._map.has(this._keyMapper(e));
                        }
                        get(e) {
                            return this._map.get(this._keyMapper(e));
                        }
                        set(e, t) {
                            this._map.set(this._keyMapper(e), t);
                        }
                        delete(e) {
                            this._map.delete(this._keyMapper(e));
                        }
                        clear() {
                            this._map.clear();
                        }
                    },
                }.MapCache,
            });
            let { LRUCache: oF } = rY,
                { MapCache: oW } = oz,
                oG = { equality: "reference", eviction: "none", maxSize: 1 / 0 };
            var o$ = function ({ equality: e = oG.equality, eviction: t = oG.eviction, maxSize: n = oG.maxSize } = oG) {
                let r = (function (e) {
                        switch (e) {
                            case "reference":
                                return (e) => e;
                            case "value":
                                return (e) => r1(e);
                        }
                        throw d(`Unrecognized equality policy ${e}`);
                    })(e),
                    o = (function (e, t, n) {
                        switch (e) {
                            case "keep-all":
                                return new oW({ mapKey: n });
                            case "lru":
                                return new oF({ mapKey: n, maxSize: h(t) });
                            case "most-recent":
                                return new oF({ mapKey: n, maxSize: 1 });
                        }
                        throw d(`Unrecognized eviction policy ${e}`);
                    })(t, n, r);
                return o;
            };
            let { setConfigDeletionHandler: oK } = Y,
                { setConfigDeletionHandler: oj } = Y,
                oH = 0;
            var oq = function (e) {
                var t, n;
                let r = o$({ equality: null !== (t = null === (n = e.cachePolicyForParams_UNSTABLE) || void 0 === n ? void 0 : n.equality) && void 0 !== t ? t : "value", eviction: "keep-all" });
                return (t) => {
                    var n;
                    let o, i;
                    try {
                        o = r.get(t);
                    } catch (t) {
                        throw d(`Problem with cache lookup for selector ${e.key}: ${t.message}`);
                    }
                    if (null != o) return o;
                    let a = `${e.key}__selectorFamily/${null !== (n = r1(t, { allowFunctions: !0 })) && void 0 !== n ? n : "void"}/${oH++}`,
                        l = (n) => e.get(t)(n),
                        s = e.cachePolicy_UNSTABLE,
                        u = "function" == typeof e.retainedBy_UNSTABLE ? e.retainedBy_UNSTABLE(t) : e.retainedBy_UNSTABLE;
                    if (null != e.set) {
                        let n = e.set;
                        i = og({ key: a, get: l, set: (e, r) => n(t)(e, r), cachePolicy_UNSTABLE: s, dangerouslyAllowMutability: e.dangerouslyAllowMutability, retainedBy_UNSTABLE: u });
                    } else i = og({ key: a, get: l, cachePolicy_UNSTABLE: s, dangerouslyAllowMutability: e.dangerouslyAllowMutability, retainedBy_UNSTABLE: u });
                    return (
                        r.set(t, i),
                        oj(i.key, () => {
                            r.delete(t);
                        }),
                        i
                    );
                };
            };
            let oZ = oq({ key: "__constant", get: (e) => () => e, cachePolicyForParams_UNSTABLE: { equality: "reference" } }),
                oY = oq({
                    key: "__error",
                    get: (e) => () => {
                        throw d(e);
                    },
                    cachePolicyForParams_UNSTABLE: { equality: "reference" },
                }),
                { loadableWithError: oJ, loadableWithPromise: oX, loadableWithValue: oQ } = E;
            function o0(e, t) {
                let n = Array(t.length).fill(void 0),
                    r = Array(t.length).fill(void 0);
                for (let [o, i] of t.entries())
                    try {
                        n[o] = e(i);
                    } catch (e) {
                        r[o] = e;
                    }
                return [n, r];
            }
            function o1(e) {
                return null != e && !f(e);
            }
            function o2(e) {
                return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t]);
            }
            function o5(e, t) {
                return Array.isArray(e) ? t : Object.getOwnPropertyNames(e).reduce((e, n, r) => ({ ...e, [n]: t[r] }), {});
            }
            function o8(e, t, n) {
                let r = n.map((e, n) => (null == e ? oQ(t[n]) : f(e) ? oX(e) : oJ(e)));
                return o5(e, r);
            }
            let o4 = oq({
                    key: "__waitForNone",
                    get: (e) => ({ get: t }) => {
                        let n = o2(e),
                            [r, o] = o0(t, n);
                        return o8(e, r, o);
                    },
                    dangerouslyAllowMutability: !0,
                }),
                o3 = oq({
                    key: "__waitForAny",
                    get: (e) => ({ get: t }) => {
                        let n = o2(e),
                            [r, o] = o0(t, n);
                        return o.some((e) => !f(e))
                            ? o8(e, r, o)
                            : new Promise((t) => {
                                  for (let [n, i] of o.entries())
                                      f(i) &&
                                          i
                                              .then((i) => {
                                                  (r[n] = i), (o[n] = void 0), t(o8(e, r, o));
                                              })
                                              .catch((i) => {
                                                  (o[n] = i), t(o8(e, r, o));
                                              });
                              });
                    },
                    dangerouslyAllowMutability: !0,
                }),
                o6 = oq({
                    key: "__waitForAll",
                    get: (e) => ({ get: t }) => {
                        let n = o2(e),
                            [r, o] = o0(t, n);
                        if (o.every((e) => null == e)) return o5(e, r);
                        let i = o.find(o1);
                        if (null != i) throw i;
                        return Promise.all(o).then((t) =>
                            o5(
                                e,
                                t.map((e, t) => (void 0 === e ? r[t] : e))
                            )
                        );
                    },
                    dangerouslyAllowMutability: !0,
                }),
                o9 = oq({
                    key: "__waitForAllSettled",
                    get: (e) => ({ get: t }) => {
                        let n = o2(e),
                            [r, o] = o0(t, n);
                        return o.every((e) => !f(e))
                            ? o8(e, r, o)
                            : Promise.all(
                                  o.map((e, t) =>
                                      f(e)
                                          ? e
                                                .then((e) => {
                                                    (r[t] = e), (o[t] = void 0);
                                                })
                                                .catch((e) => {
                                                    (r[t] = void 0), (o[t] = e);
                                                })
                                          : null
                                  )
                              ).then(() => o8(e, r, o));
                    },
                    dangerouslyAllowMutability: !0,
                }),
                o7 = oq({
                    key: "__noWait",
                    get: (e) => ({ get: t }) => {
                        try {
                            return og.value(oQ(t(e)));
                        } catch (e) {
                            return og.value(f(e) ? oX(e) : oJ(e));
                        }
                    },
                    dangerouslyAllowMutability: !0,
                }),
                { RecoilLoadable: ie } = E,
                { DefaultValue: it } = Y,
                { RecoilRoot: ir, useRecoilStoreID: io } = nl,
                { isRecoilValue: ii } = x,
                { retentionZone: ia } = e_,
                { freshSnapshot: il } = tI,
                {
                    useRecoilState: is,
                    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: iu,
                    useRecoilStateLoadable: ic,
                    useRecoilValue: id,
                    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: ih,
                    useRecoilValueLoadable: ip,
                    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: iv,
                    useResetRecoilState: i_,
                    useSetRecoilState: iy,
                } = {
                    recoilComponentGetRecoilValueCount_FOR_TESTING: { current: 0 },
                    useRecoilInterface: function () {
                        let e = ng(),
                            t = nk(),
                            [, n] = nx([]),
                            r = nP(new Set());
                        r.current = new Set();
                        let o = nP(new Set()),
                            i = nP(new Map()),
                            a = nB(
                                (e) => {
                                    let t = i.current.get(e);
                                    t && (t.release(), i.current.delete(e));
                                },
                                [i]
                            ),
                            l = nB((e, t) => {
                                i.current.has(t) && n([]);
                            }, []);
                        return (
                            nD(() => {
                                let n = t.current;
                                en(r.current, o.current).forEach((t) => {
                                    if (i.current.has(t)) {
                                        z(`Double subscription to RecoilValue "${t}"`);
                                        return;
                                    }
                                    let r = nI(n, new nV(t), (e) => l(e, t), e);
                                    i.current.set(t, r);
                                    let o = n.getState();
                                    o.nextTree
                                        ? n.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                                              l(n.getState(), t);
                                          })
                                        : l(n.getState(), t);
                                }),
                                    en(o.current, r.current).forEach((e) => {
                                        a(e);
                                    }),
                                    (o.current = r.current);
                            }),
                            nD(() => {
                                let n = i.current;
                                return (
                                    en(r.current, new Set(n.keys())).forEach((r) => {
                                        let o = nI(t.current, new nV(r), (e) => l(e, r), e);
                                        n.set(r, o);
                                    }),
                                    () => n.forEach((e, t) => a(t))
                                );
                            }, [e, t, a, l]),
                            nO(() => {
                                function e(e) {
                                    return (n) => {
                                        nM(t.current, e, n);
                                    };
                                }
                                function n(e) {
                                    var n;
                                    r.current.has(e.key) || (r.current = nz(r.current, e.key));
                                    let o = t.current.getState();
                                    return nC(t.current, e, nw().early && null !== (n = o.nextTree) && void 0 !== n ? n : o.currentTree);
                                }
                                function o(e) {
                                    let r = n(e);
                                    return nW(r, e, t);
                                }
                                return {
                                    getRecoilValue: o,
                                    getRecoilValueLoadable: n,
                                    getRecoilState: function (t) {
                                        return [o(t), e(t)];
                                    },
                                    getRecoilStateLoadable: function (t) {
                                        return [n(t), e(t)];
                                    },
                                    getSetRecoilState: e,
                                    getResetRecoilState: function (e) {
                                        return () => nM(t.current, e, nT);
                                    },
                                };
                            }, [r, t])
                        );
                    },
                    useRecoilState: function (e) {
                        return [nq(e), nZ(e)];
                    },
                    useRecoilStateLoadable: function (e) {
                        return [nH(e), nZ(e)];
                    },
                    useRecoilValue: nq,
                    useRecoilValueLoadable: nH,
                    useResetRecoilState: function (e) {
                        let t = nk();
                        return nB(() => {
                            nM(t.current, e, nT);
                        }, [t, e]);
                    },
                    useSetRecoilState: nZ,
                    useSetUnvalidatedAtomValues: function () {
                        let e = nk();
                        return (t, n = {}) => {
                            nR(() => {
                                e.current.addTransactionMetadata(n), t.forEach((t, n) => nU(e.current, new nV(n), t));
                            });
                        };
                    },
                    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: nY,
                    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: nJ,
                    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: function (e) {
                        return [nJ(e), nZ(e)];
                    },
                },
                { useGotoRecoilSnapshot: im, useRecoilSnapshot: iS, useRecoilTransactionObserver: ig } = rs,
                { useRecoilCallback: iR } = rx,
                { noWait: iT, waitForAll: ib, waitForAllSettled: iw, waitForAny: iA, waitForNone: iE } = { waitForNone: o4, waitForAny: o3, waitForAll: o6, waitForAllSettled: o9, noWait: o7 };
            var iN = {
                DefaultValue: it,
                isRecoilValue: ii,
                RecoilLoadable: ie,
                RecoilEnv: N,
                RecoilRoot: ir,
                useRecoilStoreID: io,
                useRecoilBridgeAcrossReactRoots_UNSTABLE: function () {
                    "MUTABLE_SOURCE" === rd().mode &&
                        console.warn("Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.");
                    let e = rh().current;
                    return rp(
                        () =>
                            function ({ children: t }) {
                                return s.createElement(rf, { store_INTERNAL: e }, t);
                            },
                        [e]
                    );
                },
                atom: ox,
                selector: og,
                atomFamily: function (e) {
                    var t, n;
                    let r = o$({ equality: null !== (t = null === (n = e.cachePolicyForParams_UNSTABLE) || void 0 === n ? void 0 : n.equality) && void 0 !== t ? t : "value", eviction: "keep-all" });
                    return (t) => {
                        var n, o;
                        let i = r.get(t);
                        if (null != i) return i;
                        let { cachePolicyForParams_UNSTABLE: a, ...l } = e,
                            s = "default" in e ? e.default : new Promise(() => {}),
                            u = ox({
                                ...l,
                                key: `${e.key}__${null !== (n = r1(t)) && void 0 !== n ? n : "void"}`,
                                default: "function" == typeof s ? s(t) : s,
                                retainedBy_UNSTABLE: "function" == typeof e.retainedBy_UNSTABLE ? e.retainedBy_UNSTABLE(t) : e.retainedBy_UNSTABLE,
                                effects: "function" == typeof e.effects ? e.effects(t) : "function" == typeof e.effects_UNSTABLE ? e.effects_UNSTABLE(t) : null !== (o = e.effects) && void 0 !== o ? o : e.effects_UNSTABLE,
                            });
                        return (
                            r.set(t, u),
                            oK(u.key, () => {
                                r.delete(t);
                            }),
                            u
                        );
                    };
                },
                selectorFamily: oq,
                constSelector: function (e) {
                    return oZ(e);
                },
                errorSelector: function (e) {
                    return oY(e);
                },
                readOnlySelector: function (e) {
                    return e;
                },
                noWait: iT,
                waitForNone: iE,
                waitForAny: iA,
                waitForAll: ib,
                waitForAllSettled: iw,
                useRecoilValue: id,
                useRecoilValueLoadable: ip,
                useRecoilState: is,
                useRecoilStateLoadable: ic,
                useSetRecoilState: iy,
                useResetRecoilState: i_,
                useGetRecoilValueInfo_UNSTABLE: function () {
                    let e = rc();
                    return ({ key: t }) => ru(e.current, e.current.getState().currentTree, t);
                },
                useRecoilRefresher_UNSTABLE: function (e) {
                    let t = rz();
                    return rW(() => {
                        let n = t.current;
                        rF(n, e);
                    }, [e, t]);
                },
                useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: iv,
                useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: ih,
                useRecoilState_TRANSITION_SUPPORT_UNSTABLE: iu,
                useRecoilCallback: iR,
                useRecoilTransaction_UNSTABLE: function (e, t) {
                    let n = r$();
                    return rK(
                        () => (...t) => {
                            let r = rG(n.current);
                            r((n) => {
                                e(n)(...t);
                            });
                        },
                        null != t ? [...t, n] : void 0
                    );
                },
                useGotoRecoilSnapshot: im,
                useRecoilSnapshot: iS,
                useRecoilTransactionObserver_UNSTABLE: ig,
                snapshot_UNSTABLE: il,
                useRetain: nS,
                retentionZone: ia,
            };
            iN.DefaultValue, iN.isRecoilValue, iN.RecoilLoadable, iN.RecoilEnv;
            var ik = iN.RecoilRoot;
            iN.useRecoilStoreID, iN.useRecoilBridgeAcrossReactRoots_UNSTABLE;
            var iL = iN.atom;
            iN.selector, iN.atomFamily, iN.selectorFamily, iN.constSelector, iN.errorSelector, iN.readOnlySelector, iN.noWait, iN.waitForNone, iN.waitForAny, iN.waitForAll, iN.waitForAllSettled;
            var iV = iN.useRecoilValue;
            iN.useRecoilValueLoadable;
            var iC = iN.useRecoilState;
            iN.useRecoilStateLoadable,
                iN.useSetRecoilState,
                iN.useResetRecoilState,
                iN.useGetRecoilValueInfo_UNSTABLE,
                iN.useRecoilRefresher_UNSTABLE,
                iN.useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE,
                iN.useRecoilValue_TRANSITION_SUPPORT_UNSTABLE,
                iN.useRecoilState_TRANSITION_SUPPORT_UNSTABLE,
                iN.useRecoilCallback,
                iN.useRecoilTransaction_UNSTABLE,
                iN.useGotoRecoilSnapshot,
                iN.useRecoilSnapshot,
                iN.useRecoilTransactionObserver_UNSTABLE,
                iN.snapshot_UNSTABLE,
                iN.useRetain,
                iN.retentionZone;
        },
    },
]);
