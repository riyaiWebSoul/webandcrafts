(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2775],
    {
        94478: function (t, e, a) {
            "use strict";
            var n = a(2265),
                o = a(55883),
                i = a(60210),
                r = a(21493),
                s = a(16898);
            e.Z = (t) => {
                let { type: e, id: a } = t,
                    { status: l, setTrue: c, setFalse: d } = (0, i.Z)(),
                    [h, u] = (0, o.FV)(r.D9),
                    [v, f] = (0, o.FV)(r.qB),
                    { isDesktop: m } = (0, s.Z)();
                return (
                    (0, n.useEffect)(() => {
                        let t = localStorage.getItem("wishlistedItems");
                        if (t) {
                            var n;
                            let o = t ? JSON.parse(t) : { pages: [newPage] },
                                i = null == o ? void 0 : null === (n = o.pages) || void 0 === n ? void 0 : n.some((t) => (null == t ? void 0 : t.type) === e && (null == t ? void 0 : t.id) === a);
                            i ? (c(), f(!0)) : (d(), f(!1));
                        } else l && (d(), f(!1));
                    }, [l, h]),
                    {
                        handleSave: () => {
                            (() => {
                                let t = { type: e, id: a },
                                    n = localStorage.getItem("wishlistedItems");
                                if (n) {
                                    var o, i;
                                    let r = n ? JSON.parse(n) : { pages: [] },
                                        s = null === (o = r.pages) || void 0 === o ? void 0 : o.some((t) => (null == t ? void 0 : t.id) === a && (null == t ? void 0 : t.type) === e);
                                    if (s) {
                                        let t = null == r ? void 0 : null === (i = r.pages) || void 0 === i ? void 0 : i.filter((t) => (null == t ? void 0 : t.id) !== a || (null == t ? void 0 : t.type) !== e);
                                        (null == t ? void 0 : t.length) === 0 ? (f(!1), localStorage.removeItem("wishlistedItems"), u({ pages: [] }), d()) : ((r.pages = t), localStorage.setItem("wishlistedItems", JSON.stringify(r)), u(r));
                                    } else (r.pages = [...(null == r ? void 0 : r.pages), t]), localStorage.setItem("wishlistedItems", JSON.stringify(r)), u(r);
                                } else {
                                    let e = JSON.stringify({ pages: [t] });
                                    localStorage.setItem("wishlistedItems", e), u({ pages: [t] });
                                }
                            })();
                        },
                        active: l,
                        isDesktop: m,
                    }
                );
            };
        },
        28952: function (t, e, a) {
            "use strict";
            a.d(e, {
                Z: function () {
                    return g;
                },
            });
            var n = a(57437),
                o = a(23024),
                i = a.n(o),
                r = a(92760);
            a(16898);
            var s = a(94478),
                l = a(75277),
                c = a(97800),
                d = (t) => {
                    let { style: e, type: a, id: o } = t,
                        { handleSave: i, active: d, isDesktop: h } = (0, s.Z)({ type: a, id: o }),
                        u = !!a && !!o;
                    return (0, n.jsx)("li", {
                        children: h
                            ? (0, n.jsx)(l.Z, {
                                  placement: "bottom",
                                  overlay: (0, n.jsx)(c.Z, { id: "tooltip", children: "Save to folder" }),
                                  children: (0, n.jsx)("button", {
                                      className: ""
                                          .concat(e.btn_save, " ")
                                          .concat(e.save_icon, " ")
                                          .concat(d && e.btn_save_active),
                                      onClick: i,
                                      children: (0, n.jsx)(r.Z, { icon: "save", size: 20 }),
                                  }),
                              })
                            : (0, n.jsx)("button", { className: "".concat(e.btn_save, " ").concat(d && e.btn_save_active), onClick: i, disabled: !u, children: (0, n.jsx)(r.Z, { icon: "save", size: 20 }) }),
                    });
                };
            a(2265);
            var h = a(17022),
                u = a(29434),
                v = a(5925),
                f = a(67224),
                m = a(83935),
                p = (t) => {
                    let { shareLink: e, isSsrDesktop: a } = t,
                        o = "";
                    return (
                        (o = window.location.origin),
                        (0, n.jsx)(n.Fragment, {
                            children: a
                                ? (0, n.jsxs)("li", {
                                      className: "".concat(i().dropdown),
                                      children: [
                                          (0, n.jsx)("button", { children: (0, n.jsx)(r.Z, { icon: "share", size: 20 }) }),
                                          (0, n.jsxs)("ul", {
                                              children: [
                                                  (0, n.jsx)("li", {
                                                      children: (0, n.jsxs)(h.Z, {
                                                          url: "".concat(o, "/").concat(e),
                                                          children: [(0, n.jsx)("span", { children: (0, n.jsx)(f.Z, { icon: "facebook", size: 15, color: "#000" }) }), "facebook"],
                                                      }),
                                                  }),
                                                  (0, n.jsx)("li", {
                                                      children: (0, n.jsxs)(u.Z, {
                                                          url: "".concat(o, "/").concat(e),
                                                          children: [(0, n.jsx)("span", { children: (0, n.jsx)(f.Z, { icon: "linkedin", size: 15, color: "#000" }) }), "LinkedIn"],
                                                      }),
                                                  }),
                                                  (0, n.jsx)("li", {
                                                      children: (0, n.jsxs)("button", {
                                                          onClick: () => {
                                                              var t, a;
                                                              null === (a = navigator) || void 0 === a || null === (t = a.clipboard) || void 0 === t || t.writeText("".concat(o, "/").concat(e)),
                                                                  v.Am.success("Copied to clipboard!", { duration: 5e3, id: "clipboard" });
                                                          },
                                                          children: [(0, n.jsx)("span", { children: (0, n.jsx)(f.Z, { icon: "copy", size: 12, color: "#000" }) }), "Copy Link"],
                                                      }),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  })
                                : (0, n.jsx)("li", { children: (0, n.jsx)(m.Z, { shareLink: e, children: (0, n.jsx)(r.Z, { icon: "share", size: 20 }) }) }),
                        })
                    );
                },
                g = (t) => {
                    let { type: e, id: a, shareLink: o, isFromServicePage: r, isRound: s, ssrDeviceType: l, showShare: c = !0 } = t;
                    return (0, n.jsxs)("ul", {
                        className: "".concat(i().toolbar, " ").concat(!0 === s ? i().toolbar_insight : ""),
                        children: [o && c && (0, n.jsx)(p, { shareLink: o, isSsrDesktop: void 0 === l }), !!e && !!a && (0, n.jsx)(d, { style: i(), type: e, id: a })],
                    });
                };
        },
        83935: function (t, e, a) {
            "use strict";
            a.d(e, {
                Z: function () {
                    return n.Z;
                },
            });
            var n = a(32480);
        },
        32480: function (t, e, a) {
            "use strict";
            a.d(e, {
                Z: function () {
                    return r;
                },
            });
            var n = a(57437),
                o = a(2265),
                i = (t) => {
                    let e = async () => {
                        if (navigator.share)
                            try {
                                let { title: e, text: a, url: n } = t;
                                await navigator.share({ title: e, text: a, url: n });
                            } catch (t) {}
                    };
                    return { handleNativeShare: e };
                };
            a(62075);
            var r = (t) => {
                let [e, a] = (0, o.useState)();
                (0, o.useEffect)(() => {
                    var e, n, o, i;
                    (null == t ? void 0 : t.shareLink)
                        ? a("".concat(null === (n = window) || void 0 === n ? void 0 : null === (e = n.location) || void 0 === e ? void 0 : e.origin, "/").concat(null == t ? void 0 : t.shareLink))
                        : a(null === (i = window) || void 0 === i ? void 0 : null === (o = i.location) || void 0 === o ? void 0 : o.href);
                }, [null == t ? void 0 : t.shareLink]);
                let { handleNativeShare: r } = i({ url: e, ...t });
                return (0, n.jsx)("button", { className: null == t ? void 0 : t.className, onClick: r, children: null == t ? void 0 : t.children });
            };
        },
        51190: function (t, e, a) {
            "use strict";
            var n = a(57437);
            e.Z = function (t) {
                let { icon: e } = t,
                    a = o.find((t) => t.name === e);
                return (0, n.jsx)("span", { className: "d-inline-block", dangerouslySetInnerHTML: { __html: null == a ? void 0 : a.path } });
            };
            let o = [
                {
                    name: "save",
                    path:
                        "<svg xmlns='http://www.w3.org/2000/svg' width='15.493' height='20.198' viewBox='0 0 15.493 20.198'><g id='Icon_feather-bookmark' data-name='Icon feather-bookmark' transform='translate(0.75 0.75)'><path id='Icon_feather-bookmark-2' data-name='Icon feather-bookmark' d='M21.493,22.49l-7-5-7,5V6.5a2,2,0,0,1,2-2h9.995a2,2,0,0,1,2,2Z' transform='translate(-7.5 -4.5)' fill='none' stroke='#000' stroke-linecap='round' strokeWidth='1.5' /></g></svg>",
                },
                {
                    name: "share",
                    path:
                        "<svg id='Icon_feather-share-2' data-name='Icon feather-share-2' xmlns='http://www.w3.org/2000/svg' width='16.038' height='17.82' viewBox='0 0 16.038 17.82'><path id='Path_213831' data-name='Path 213831' d='M27.846,5.673A2.673,2.673,0,1,1,25.173,3a2.673,2.673,0,0,1,2.673,2.673Z' transform='translate(-11.808 -3)' fill='#767676'/><path id='Path_213832' data-name='Path 213832' d='M9.846,16.173A2.673,2.673,0,1,1,7.173,13.5,2.673,2.673,0,0,1,9.846,16.173Z' transform='translate(-4.5 -7.263)' fill='#767676'/><path id='Path_213833' data-name='Path 213833' d='M27.846,26.673A2.673,2.673,0,1,1,25.173,24,2.673,2.673,0,0,1,27.846,26.673Z' transform='translate(-11.808 -11.526)' fill='#767676'/><path id='Path_213834' data-name='Path 213834' d='M12.885,20.265l6.086,3.546' transform='translate(-7.904 -10.009)' fill='none' stroke='#767676' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/><path id='Path_213835' data-name='Path 213835' d='M18.962,9.765l-6.077,3.546' transform='translate(-7.904 -5.747)' fill='none' stroke='#767676' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/></svg>",
                },
                {
                    name: "print",
                    path:
                        "<svg xmlns='http://www.w3.org/2000/svg' width='17.639' height='17.639' viewBox='0 0 17.639 17.639'><path id='Icon_awesome-print' data-name='Icon awesome-print' d='M15.434,6.615V2.661a1.1,1.1,0,0,0-.323-.78L13.552.323A1.1,1.1,0,0,0,12.772,0H3.307A1.1,1.1,0,0,0,2.2,1.1V6.615A2.2,2.2,0,0,0,0,8.819v3.858a.551.551,0,0,0,.551.551H2.2v3.307a1.1,1.1,0,0,0,1.1,1.1H14.331a1.1,1.1,0,0,0,1.1-1.1V13.229h1.654a.551.551,0,0,0,.551-.551V8.819A2.2,2.2,0,0,0,15.434,6.615Zm-2.2,8.819H4.41V12.127h8.819Zm0-7.717H4.41V2.2h6.615V3.858a.551.551,0,0,0,.551.551h1.654Zm1.654,2.48a.827.827,0,1,1,.827-.827A.827.827,0,0,1,14.883,10.2Z' fill='#767676'/></svg>",
                },
                {
                    name: "pdf",
                    path:
                        "<svg xmlns='http://www.w3.org/2000/svg' width='16.874' height='22.138' viewBox='0 0 16.874 22.138'><g id='Group_238435' data-name='Group 238435' transform='translate(-7628.271 -2171.272)'> <path id='Path_214765' data-name='Path 214765' d='M7629.747,2107.638v-4.366h10.719l4.455,4.366' transform='translate(-0.475 69)' fill='none' stroke='#707070' stroke-width='2'/><path id='Path_214766' data-name='Path 214766' d='M7629.746,2103.272v4.7h14.816v-4.7' transform='translate(-0.475 84.438)' fill='none' stroke='#707070' stroke-width='2'/><path id='Path_214767' data-name='Path 214767' d='M1.979-3.519V-5.37H3.035a2.845,2.845,0,0,1,.45.035,1.047,1.047,0,0,1,.381.134.731.731,0,0,1,.264.281.988.988,0,0,1,.1.476.988.988,0,0,1-.1.476.731.731,0,0,1-.264.281,1.047,1.047,0,0,1-.381.134,2.845,2.845,0,0,1-.45.035ZM.621-6.426V-.248H1.979V-2.463H3.407a2.573,2.573,0,0,0,.986-.169,1.845,1.845,0,0,0,.662-.446,1.706,1.706,0,0,0,.372-.636,2.349,2.349,0,0,0,.117-.731,2.336,2.336,0,0,0-.117-.735,1.712,1.712,0,0,0-.372-.632,1.845,1.845,0,0,0-.662-.446,2.573,2.573,0,0,0-.986-.169ZM7.751-1.39V-5.284H8.72a2.193,2.193,0,0,1,.844.143,1.324,1.324,0,0,1,.549.411,1.683,1.683,0,0,1,.3.645,3.6,3.6,0,0,1,.091.844,2.531,2.531,0,0,1-.13.865,1.587,1.587,0,0,1-.346.575,1.257,1.257,0,0,1-.493.316,1.745,1.745,0,0,1-.571.1ZM6.392-6.426V-.248H9.057A2.957,2.957,0,0,0,10.29-.486a2.453,2.453,0,0,0,.874-.653,2.742,2.742,0,0,0,.523-.986,4.28,4.28,0,0,0,.173-1.246,3.85,3.85,0,0,0-.212-1.341,2.636,2.636,0,0,0-.588-.952,2.413,2.413,0,0,0-.891-.571,3.181,3.181,0,0,0-1.112-.19Zm6.411,0V-.248h1.358V-2.8h2.587V-3.856H14.162V-5.284h2.985V-6.426Z' transform='translate(7627.81 2186)' fill='#707070' stroke='#707070' stroke-width='0.1'/></g></svg>",
                },
                {
                    name: "bookmark",
                    path:
                        "<svg xmlns='http://www.w3.org/2000/svg' width='15.993' height='20.934' viewBox='0 0 15.993 20.934'><g id='Icon_feather-bookmark' data-name='Icon feather-bookmark' transform='translate(1 1)'><path id='Icon_feather-bookmark-2' data-name='Icon feather-bookmark' d='M21.493,22.49l-7-5-7,5V6.5a2,2,0,0,1,2-2h9.995a2,2,0,0,1,2,2Z' transform='translate(-7.5 -4.5)' fill='none' stroke='#707070' stroke-linecap='round' stroke-width='2'/></g></svg>",
                },
            ];
        },
        92760: function (t, e, a) {
            "use strict";
            a.d(e, {
                Z: function () {
                    return n.Z;
                },
            });
            var n = a(51190);
        },
        69023: function (t, e, a) {
            "use strict";
            a.d(e, {
                A: function () {
                    return i;
                },
            });
            var n = a(55883),
                o = a(21493);
            let i = () => {
                let [t, e] = (0, n.FV)(o.yh),
                    [a, i] = (0, n.FV)(o.aR);
                return {
                    headerState: t,
                    switchToFirstHeader: () => {
                        e("first");
                    },
                    switchToSecondHeader: () => {
                        e("second");
                    },
                    toggleHeader: () => {
                        "first" === t ? e("second") : "second" === t && e("first");
                    },
                    switchToHideHeader: () => {
                        e("hide");
                    },
                    overWriteHeader: a,
                    setOverWriteHeader: i,
                };
            };
        },
        21493: function (t, e, a) {
            "use strict";
            a.d(e, {
                D9: function () {
                    return l;
                },
                M5: function () {
                    return c;
                },
                XD: function () {
                    return s;
                },
                Zq: function () {
                    return h;
                },
                aR: function () {
                    return r;
                },
                qB: function () {
                    return d;
                },
                yh: function () {
                    return i;
                },
            });
            var n = a(55883);
            let o = () => {
                    let t = new Date().getTime();
                    return t;
                },
                i = (0, n.cn)({ key: "header_".concat(o()), default: "first" }),
                r = (0, n.cn)({ key: "header_".concat(o(), "_1"), default: !1 }),
                s = (0, n.cn)({ key: "viewPort_".concat(o()), default: !1 });
            (0, n.cn)({ key: "transition_".concat(o()), default: !1 });
            let l = (0, n.cn)({ key: "savedPages_".concat(o()), default: { pages: [] } }),
                c = (0, n.cn)({ key: "toolbar_".concat(o()), default: !1 }),
                d = (0, n.cn)({ key: "offCanvasTriger_".concat(o()), default: !1 }),
                h = (0, n.cn)({ key: "anim_".concat(o()), default: !1 });
        },
        23024: function (t) {
            t.exports = {
                dropdown: "toolbar_dropdown__tl0h0",
                toolbar: "toolbar_toolbar__YMoBl",
                toolbar_insight: "toolbar_toolbar_insight__93_3i",
                btn_save_active: "toolbar_btn_save_active__kQUeI",
                copied: "toolbar_copied__sVaH_",
                save_icon: "toolbar_save_icon__ylE4Q",
            };
        },
    },
]);
