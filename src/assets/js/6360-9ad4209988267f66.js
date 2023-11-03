(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6360],
    {
        47295: function (e, t, i) {
            "use strict";
            i.d(t, {
                Z: function () {
                    return a;
                },
            });
            var n = i(2265),
                l = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = arguments.length > 2 ? arguments[2] : void 0,
                        [l, c] = (0, n.useState)(!1),
                        a = null;
                    return (
                        (a = new IntersectionObserver(
                            (e, t) => {
                                let [n] = e;
                                c(n.isIntersecting), n.isIntersecting && !i && t.unobserve(n.target);
                            },
                            { ...t }
                        )),
                        (0, n.useEffect)(
                            () => (
                                a && a.observe(e.current),
                                () => {
                                    a.disconnect();
                                }
                            ),
                            [e, a]
                        ),
                        l
                    );
                },
                c = (e) => {
                    let { options: t } = e,
                        i = (0, n.useRef)(null),
                        c = { threshold: 0.3, ...t },
                        a = l(i, { ...c }, !1);
                    return { elementRef: i, animationClass: a ? "visible" : "" };
                },
                a = (e) => {
                    let { as: t = "div", effect: i, className: l, options: a, children: r, ...o } = e,
                        { animationClass: s, elementRef: d } = c({ options: a });
                    return (0, n.createElement)(t, { ...o, className: "".concat(l, " ").concat(s), "data-anim": i, ref: d }, r);
                };
        },
        47995: function (e, t, i) {
            "use strict";
            var n = i(2265),
                l = i(33068);
            i(30713);
            var c = i(24033),
                a = i(5925),
                r = i(50376),
                o = i(6040);
            i(13456);
            var s = i(18893),
                d = i(50640),
                u = i(58441);
            async function _(e, t) {
                let { arg: i } = t;
                return fetch(e, { method: "POST", body: i })
                    .then((e) => e.json())
                    .catch((e) => console.log(e));
            }
            t.Z = () => {
                let { handleDelete: e, selectedFiles: t, handleImageChange: i, error: p } = (0, o.Z)(),
                    [m, v] = (0, n.useState)(!1),
                    [h, x] = (0, n.useState)(!1),
                    g = (0, n.useRef)(),
                    f = (0, n.useRef)(),
                    j = (0, c.useRouter)(),
                    { trigger: b, data: w, isMutating: N, error: y } = (0, l.Z)("".concat(s.b0, "/api/leads/quote"), _, {
                        onSuccess: (e) => {
                            if (e) {
                                var t, i, n, l, c;
                                x(!1),
                                    (null == e ? void 0 : e.status)
                                        ? (v(!1),
                                          j.push(
                                              "/enquiryForm/"
                                                  .concat(null == e ? void 0 : null === (i = e.results) || void 0 === i ? void 0 : null === (t = i.data) || void 0 === t ? void 0 : t.id, "/")
                                                  .concat(null == e ? void 0 : null === (l = e.results) || void 0 === l ? void 0 : null === (n = l.data) || void 0 === n ? void 0 : n.secret_token)
                                          ),
                                          null == g || null === (c = g.current) || void 0 === c || c.reset(),
                                          (0, u.o)({ event: "FormSubmission", parameters: { formName: "Get a Quote 1", ...(null == f ? void 0 : f.current) } }))
                                        : a.Am.error(null == e ? void 0 : e.message, { duration: r.oI6, id: "quote_form" });
                            }
                        },
                        onError: (e) => {},
                    });
                return {
                    handleSubmit: (e) => {
                        var t, i, n, l, c, a, r, o, s, u, _, p, m, v;
                        x(!0);
                        let h = JSON.parse(localStorage.getItem("utm_items")),
                            g = (0, d.f)(e),
                            j = null == g ? void 0 : g.countryCode,
                            w = null == g ? void 0 : g.phoneNumber,
                            N = null == g ? void 0 : g.isoCode,
                            y = new FormData();
                        (null == e ? void 0 : null === (t = e.values) || void 0 === t ? void 0 : t.firstName) && y.append("first_name", null == e ? void 0 : null === (i = e.values) || void 0 === i ? void 0 : i.firstName),
                            (null == e ? void 0 : null === (n = e.values) || void 0 === n ? void 0 : n.lastName) && y.append("last_name", null == e ? void 0 : null === (l = e.values) || void 0 === l ? void 0 : l.lastName),
                            (null == e ? void 0 : null === (c = e.values) || void 0 === c ? void 0 : c.email) && y.append("email", null == e ? void 0 : null === (a = e.values) || void 0 === a ? void 0 : a.email),
                            (null == e ? void 0 : null === (o = e.values) || void 0 === o ? void 0 : null === (r = o.country) || void 0 === r ? void 0 : r.value) &&
                                y.append("country", null == e ? void 0 : null === (u = e.values) || void 0 === u ? void 0 : null === (s = u.country) || void 0 === s ? void 0 : s.value),
                            (null == e ? void 0 : null === (_ = e.values) || void 0 === _ ? void 0 : _.tellusmore) && y.append("additional_information", null == e ? void 0 : null === (p = e.values) || void 0 === p ? void 0 : p.tellusmore),
                            (null == e ? void 0 : null === (m = e.values) || void 0 === m ? void 0 : m.privacypolicy) &&
                                y.append("is_privacy_policy_accepted", !!(null == e ? void 0 : null === (v = e.values) || void 0 === v ? void 0 : v.privacypolicy)),
                            j && y.append("phone_number_cc", j),
                            w && y.append("phone_number", w),
                            N && y.append("phone_number_cc_country_code", N),
                            (f.current = { ...(null == e ? void 0 : e.values) }),
                            h &&
                                (y.append("utm_source", (null == h ? void 0 : h.utm_source) ? (null == h ? void 0 : h.utm_source) : ""),
                                y.append("utm_medium", (null == h ? void 0 : h.utm_medium) ? (null == h ? void 0 : h.utm_medium) : ""),
                                y.append("utm_campaign", (null == h ? void 0 : h.utm_campaign) ? (null == h ? void 0 : h.utm_campaign) : ""),
                                y.append("utm_term", (null == h ? void 0 : h.utm_term) ? (null == h ? void 0 : h.utm_term) : ""),
                                y.append("utm_content", (null == h ? void 0 : h.utm_content) ? (null == h ? void 0 : h.utm_content) : ""),
                                y.append("utm_device", (null == h ? void 0 : h.utm_device) ? (null == h ? void 0 : h.utm_device) : ""),
                                y.append("fbclid", (null == h ? void 0 : h.fbclid) ? (null == h ? void 0 : h.fbclid) : ""),
                                y.append("gclid", (null == h ? void 0 : h.gclid) ? (null == h ? void 0 : h.gclid) : ""),
                                y.append("lpurl", h ? (null == h ? void 0 : h.lpurl) : ""),
                                y.append("creative", (null == h ? void 0 : h.creative) ? (null == h ? void 0 : h.creative) : ""),
                                (null == h ? void 0 : h.referral_id) && y.append("referral_id", null == h ? void 0 : h.referral_id)),
                            grecaptcha.ready(async () => {
                                try {
                                    let e = await grecaptcha.execute("6LcVWhcoAAAAANhkmOWGwMhxbbwJ-W-ra5v7XkUk");
                                    y.append("captcha", e), b(y);
                                } catch (e) {}
                            });
                    },
                    selectedFiles: t,
                    handleImageChange: i,
                    handleDelete: e,
                    error: p,
                    formApiRef: g,
                    isLoading: N,
                    onSubmitFailed: () => {
                        v(!0), "vibrate" in navigator && navigator.vibrate([300]);
                    },
                    formSubmitedFailed: m,
                    isFormClicked: h,
                };
            };
        },
        53422: function (e, t, i) {
            "use strict";
            i.d(t, {
                Z: function () {
                    return u;
                },
            });
            var n = i(57437),
                l = i(19275),
                c = i(23034),
                a = i(85754),
                r = i(2265);
            let o = (e) => {
                let { selectedValues: t, setSelectedValues: i, dropdownOptions: n, isMulti: l } = e,
                    [c, a] = (0, r.useState)(""),
                    [o, s] = (0, r.useState)(n),
                    [d, u] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    d || (a(""), s(n));
                }, [d]);
                let _ = 0 !== t.length;
                return {
                    showClearButton: _,
                    reset: () => {
                        s(n), i([]), a("");
                    },
                    handleChangeInput: (e) => {
                        let { value: t } = e.target;
                        if ((a(t), t)) {
                            let e = [];
                            n.forEach((i) => {
                                (null == i ? void 0 : i.label) && (null == i ? void 0 : i.label.split(" ").join("").toLowerCase().includes(t.toLowerCase())) && (e = [...e, i]);
                            }),
                                s(e);
                        } else s(n);
                    },
                    handleSelectDropwOptions: (e) => {
                        let n = [...t];
                        t.includes(e) ? i([...(n = n.filter((t) => t !== e))]) : l ? i([...n, e]) : i([e]);
                    },
                    query: c,
                    options: o,
                    handleDropdownToggle: () => {
                        u(!d);
                    },
                };
            };
            var s = i(31376),
                d = i.n(s);
            i(67224);
            var u = (e) => {
                let {
                        selectedValues: t,
                        isDefault: i,
                        setSelectedValues: r,
                        title: s = "Expertise",
                        placeholder: u = "Search",
                        dropdownOptions: _ = [],
                        showSearch: p = !0,
                        isMulti: m = !0,
                        showSelectedUi: v = !0,
                        formSubmitedFailed: h,
                    } = e,
                    { showClearButton: x, reset: g, handleChangeInput: f, handleSelectDropwOptions: j, query: b, options: w, handleDropdownToggle: N } = o({ selectedValues: t, setSelectedValues: r, dropdownOptions: _, isMulti: m });
                return (0, n.jsxs)(l.Z, {
                    className: ""
                        .concat(d().dropdown, " ")
                        .concat(i ? d().dropdown_default : d().dropdown_rounded, " ")
                        .concat(x && d().dropdown_selected),
                    autoClose: "outside",
                    onToggle: N,
                    children: [
                        (0, n.jsxs)("div", {
                            className: "".concat(d().dropdown_container),
                            children: [v && x && (0, n.jsx)(a.Z, { onClick: g, children: (0, n.jsx)("span", { children: t.length }) }), (0, n.jsx)(l.Z.Toggle, { id: "dropdown-autoclose-outside", className: d().btn, children: s })],
                        }),
                        (0, n.jsxs)(l.Z.Menu, {
                            align: "end",
                            children: [
                                p && (0, n.jsx)("div", { className: d().search_wrap, children: (0, n.jsx)(c.Z.Control, { placeholder: u, value: b, onChange: f, autoFocus: !0 }) }),
                                (0, n.jsxs)("div", {
                                    className: d().dropdown_item_wrap,
                                    "data-lenis-prevent": !0,
                                    children: [
                                        0 !== w.length &&
                                            w.map((e) =>
                                                (0, n.jsx)(
                                                    "label",
                                                    {
                                                        for: e.label,
                                                        className: d().dropdown_item,
                                                        children: (0, n.jsx)(c.Z.Check, { type: "checkbox", id: e.label, label: e.label, checked: t.includes(e.value), onChange: () => j(e.value) }),
                                                    },
                                                    e.value
                                                )
                                            ),
                                        0 === w.length && (0, n.jsx)("p", { className: d().empty, children: "No options" }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            };
        },
        79182: function (e, t, i) {
            "use strict";
            var n = i(2265);
            t.Z = (e) => {
                let { as: t = "div", shudTrim: i = !0, content: l, ...c } = e,
                    a = i ? l && l.replace(/(<p[^>]+?>|<p>|<\/p>)/gim, "") : l;
                return a && (0, n.createElement)(t, { ...c, dangerouslySetInnerHTML: { __html: a } });
            };
        },
        90290: function (e, t, i) {
            "use strict";
            i.d(t, {
                Z: function () {
                    return n.Z;
                },
            });
            var n = i(79182);
        },
        11030: function (e, t, i) {
            "use strict";
            var n = i(57437),
                l = i(62075),
                c = i(16010);
            t.Z = (e) => {
                let { link: t, label: i, isLight: a, hasColorShift: r, isFill: o, ...s } = e;
                return (
                    t &&
                    (0, n.jsxs)(c.Z, {
                        href: t,
                        className: "btn btn-primary "
                            .concat(a ? "light" : "", " ")
                            .concat(o ? "fill" : "", " ")
                            .concat(r ? "turn_primary" : ""),
                        ...s,
                        children: [(0, n.jsx)("span", { children: i }), (0, n.jsx)("span", { children: (0, n.jsx)(l.Z, { icon: "arrow-right", size: 15 }) })],
                    })
                );
            };
        },
        29211: function (e, t, i) {
            "use strict";
            i.d(t, {
                Z: function () {
                    return n.Z;
                },
            });
            var n = i(11030);
        },
        36742: function (e, t, i) {
            "use strict";
            i.r(t);
            var n = i(2265),
                l = i(69023),
                c = i(16898);
            t.default = (e) => {
                let { first: t = !0, isCaseStudyPage: i } = e,
                    { switchToSecondHeader: a, switchToFirstHeader: r, switchToHideHeader: o } = (0, l.A)(),
                    { isMobile: s } = (0, c.Z)();
                return (
                    (0, n.useEffect)(() => {
                        s ? r() : "hide" === t ? o() : "first" === t ? r() : a();
                    }, [t, s]),
                    null
                );
            };
        },
        25110: function (e, t, i) {
            "use strict";
            i.d(t, {
                Z: function () {
                    return _;
                },
            });
            var n = i(57437),
                l = i(2265),
                c = i(72062),
                a = i.n(c),
                r = i(52513),
                o = i(99321),
                s = i(46158),
                d = i(42815),
                u = (e) => {
                    let { style: t } = e,
                        i = (0, l.useRef)(null),
                        [n, c] = (0, l.useState)(!0);
                    return (
                        (0, l.useEffect)(() => {
                            let e = d.p8.context((e) => {
                                let t = d.p8.timeline({
                                    scrollTrigger: {
                                        trigger: i.current,
                                        start: "top 80%",
                                        end: "bottom 10%",
                                        onEnter: () => {
                                            var e;
                                            null === (e = i.current) || void 0 === e || e.play();
                                        },
                                        onLeave: () => {
                                            var e;
                                            null === (e = i.current) || void 0 === e || e.pause();
                                        },
                                        onEnterBack: () => {
                                            var e;
                                            null === (e = i.current) || void 0 === e || e.play();
                                        },
                                        onLeaveBack: () => {
                                            var e;
                                            null === (e = i.current) || void 0 === e || e.pause();
                                        },
                                        scrub: 0.6,
                                    },
                                });
                                t.to(i.current, { scale: 1 });
                            }, i);
                            return () => {
                                e.revert();
                            };
                        }, []),
                        {
                            videoRef: i,
                            handleMuteClick: () => {
                                (i.current.muted = !n), c(!n);
                            },
                            isMuted: n,
                        }
                    );
                },
                _ = (e) => {
                    let t;
                    let { videoRef: i, handleMuteClick: c, isMuted: d } = u({ style: a() }),
                        { src: _, ...p } = e,
                        m = (0, s.m)(_);
                    return (
                        (0, l.useEffect)(
                            () => (
                                r.Z.isSupported()
                                    ? ((t = new r.Z()).loadSource(m),
                                      t.attachMedia(i.current),
                                      t.on(r.Z.Events.MANIFEST_LOADED, function () {
                                          let e = window.screen.height,
                                              i = 0;
                                          window.screen.height > window.screen.width && (e = 1.5 * window.screen.width),
                                              t.levels.forEach(function (t, n) {
                                                  e >= t.height && (t.height, (i = n));
                                              }),
                                              (t.autoLevelCapping = i);
                                      }))
                                    : i.current.canPlayType("application/vnd.apple.mpegurl") && (i.current.src = m),
                                () => {
                                    t && t.destroy();
                                }
                            ),
                            [m]
                        ),
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)("div", {
                                    className: "ratio ".concat(a().video),
                                    children: [
                                        (null == e ? void 0 : e.dataimage) &&
                                            (0, n.jsx)(o.Z, { src: null == e ? void 0 : e.dataimage, fill: !0, alt: "cs banner", priority: !0, sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" }),
                                        (0, n.jsx)("video", { ref: i, ...p }),
                                    ],
                                }),
                                (null == e ? void 0 : e.customControls)
                                    ? ""
                                    : (0, n.jsx)("button", {
                                          "aria-label": "button for mute",
                                          className: "".concat(a().controls_item__vol),
                                          onClick: () => c(),
                                          children: d
                                              ? (0, n.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "18.855",
                                                    height: "18.776",
                                                    viewBox: "0 0 18.855 18.776",
                                                    children: (0, n.jsx)("path", {
                                                        id: "icon-mute",
                                                        d:
                                                            "M-15041.438,12282.5l-4.749,4.749-.706-.706,4.342-4.343h-3.56a.931.931,0,0,1-.93-.929v-6.129a.924.924,0,0,1,.272-.661.934.934,0,0,1,.657-.275h4.247l6.968-5.7.816.386v4.835l5.185-5.187.71.706-5.895,5.9v11.736l-.8.4Zm6.357,3.4v-9.755l-5.64,5.64Zm-10.959-4.7h3.855v-5.993h-3.855Zm4.856-6.257v5.89l6.1-6.1v-4.778Z",
                                                        transform: "translate(15047.041 -12268.507)",
                                                        fill: "#fff",
                                                    }),
                                                })
                                              : (0, n.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "20.118",
                                                    height: "18.776",
                                                    viewBox: "0 0 20.118 18.776",
                                                    children: (0, n.jsx)("path", {
                                                        id: "icon-vol",
                                                        d:
                                                            "M5.193,13.694H.931A.933.933,0,0,1,0,12.763V6.634A.931.931,0,0,1,.931,5.7H5.177L12.144,0l.816.387V18.372l-.795.4Zm.663-7.258v6.5l6.1,4.45V1.442ZM1,12.694H4.855V6.7H1Zm15.644,1.779a6.955,6.955,0,0,0,.249-10.418l.68-.734a7.955,7.955,0,0,1-.285,11.916Zm-1.914-1.739a4.743,4.743,0,0,0-.035-6.744l.7-.715a5.744,5.744,0,0,1,.043,8.166Z",
                                                        transform: "translate(0)",
                                                        fill: "#fff",
                                                    }),
                                                }),
                                      }),
                            ],
                        })
                    );
                };
        },
        69862: function (e, t, i) {
            "use strict";
            var n = i(57437),
                l = i(2145),
                c = i(72022);
            i(12018),
                i(869),
                (t.Z = (e) => {
                    let { children: t, customSettings: i, className: a, setSwiper: r } = e;
                    return (0, n.jsx)(l.tq, {
                        modules: [c.tl],
                        className: "".concat(a),
                        ...i,
                        onSwiper: (e) => {
                            r && r(e);
                        },
                        children: t,
                    });
                });
        },
        37398: function (e, t, i) {
            "use strict";
            i.r(t);
            var n = i(57437),
                l = i(2265),
                c = i(60429),
                a = i(19981),
                r = i(60210),
                o = i(71135),
                s = i.n(o),
                d = i(22312),
                u = i(46448);
            i(62075),
                (t.default = (e) => {
                    var t;
                    let { vimeoLink: i, thumbImage: o, type: _ } = e,
                        { status: p, toggle: m } = (0, r.Z)(),
                        [v, h] = (0, l.useState)(!1);
                    return (
                        (0, u.Z)({ status: p }),
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("div", {
                                    children: (0, n.jsx)("button", {
                                        onClick: m,
                                        className: "".concat(s().play_btn, " ").concat("seo" === _ ? s().btn_seo : ""),
                                        children: (0, n.jsx)("span", {
                                            className: "".concat(null === (t = s()) || void 0 === t ? void 0 : t.icon),
                                            children: (0, n.jsx)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                height: "40",
                                                viewBox: "0 -960 960 960",
                                                width: "40",
                                                children: (0, n.jsx)("path", { d: "M340.001-237.644v-487.687l383.073 243.844-383.073 243.843Z" }),
                                            }),
                                        }),
                                    }),
                                }),
                                (0, n.jsxs)(a.Z, {
                                    show: p,
                                    centered: !0,
                                    onHide: m,
                                    className: s().videoModal,
                                    children: [
                                        (0, n.jsx)(a.Z.Header, { closeButton: !0 }),
                                        (0, n.jsx)(a.Z.Body, {
                                            children: (0, n.jsxs)("div", {
                                                className: "ratio ratio-16x9",
                                                children: [
                                                    (0, n.jsx)(d.Z, { src: null == o ? void 0 : o.url, fill: !0, alt: "".concat(null == o ? void 0 : o.alternative_text), priority: !0 }),
                                                    i &&
                                                        (0, n.jsx)(c.Z, {
                                                            url: "https://vimeo.com/" + i,
                                                            playing: !0,
                                                            onReady: () => {
                                                                h(!0);
                                                            },
                                                            controls: !0,
                                                            width: "100%",
                                                            height: "100%",
                                                            playsinline: !0,
                                                        }),
                                                    !v && (0, n.jsx)(d.Z, { src: null == o ? void 0 : o.url, fill: !0, alt: "".concat(null == o ? void 0 : o.alternative_text) }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        69023: function (e, t, i) {
            "use strict";
            i.d(t, {
                A: function () {
                    return c;
                },
            });
            var n = i(55883),
                l = i(21493);
            let c = () => {
                let [e, t] = (0, n.FV)(l.yh),
                    [i, c] = (0, n.FV)(l.aR);
                return {
                    headerState: e,
                    switchToFirstHeader: () => {
                        t("first");
                    },
                    switchToSecondHeader: () => {
                        t("second");
                    },
                    toggleHeader: () => {
                        "first" === e ? t("second") : "second" === e && t("first");
                    },
                    switchToHideHeader: () => {
                        t("hide");
                    },
                    overWriteHeader: i,
                    setOverWriteHeader: c,
                };
            };
        },
        46448: function (e, t, i) {
            "use strict";
            var n = i(2265),
                l = i(96681);
            t.Z = (e) => {
                let { status: t } = e,
                    i = (0, l.LZ)();
                return (0, n.useEffect)(() => (t && (null == i || i.stop()), () => (null == i ? void 0 : i.start())), [t, i]), null;
            };
        },
        26226: function (e, t, i) {
            "use strict";
            var n = i(2265);
            t.Z = (e) => {
                let { status: t } = e,
                    [i, l] = (0, n.useState)(!1);
                return (
                    (0, n.useEffect)(() => {
                        let e;
                        return (
                            t
                                ? l(!0)
                                : (e = setTimeout(() => {
                                      l(!1);
                                  }, 5e3)),
                            () => {
                                clearTimeout(e);
                            }
                        );
                    }, [t, i]),
                    { anim: i }
                );
            };
        },
        21493: function (e, t, i) {
            "use strict";
            i.d(t, {
                D9: function () {
                    return o;
                },
                M5: function () {
                    return s;
                },
                XD: function () {
                    return r;
                },
                Zq: function () {
                    return u;
                },
                aR: function () {
                    return a;
                },
                qB: function () {
                    return d;
                },
                yh: function () {
                    return c;
                },
            });
            var n = i(55883);
            let l = () => {
                    let e = new Date().getTime();
                    return e;
                },
                c = (0, n.cn)({ key: "header_".concat(l()), default: "first" }),
                a = (0, n.cn)({ key: "header_".concat(l(), "_1"), default: !1 }),
                r = (0, n.cn)({ key: "viewPort_".concat(l()), default: !1 });
            (0, n.cn)({ key: "transition_".concat(l()), default: !1 });
            let o = (0, n.cn)({ key: "savedPages_".concat(l()), default: { pages: [] } }),
                s = (0, n.cn)({ key: "toolbar_".concat(l()), default: !1 }),
                d = (0, n.cn)({ key: "offCanvasTriger_".concat(l()), default: !1 }),
                u = (0, n.cn)({ key: "anim_".concat(l()), default: !1 });
        },
        98234: function (e, t, i) {
            "use strict";
            i.r(t);
            var n = i(57437),
                l = i(62943),
                c = i(67334),
                a = i.n(c);
            i(99321);
            var r = i(2265);
            t.default = (e) => {
                var t, i, c;
                let { data: o, widget_type: s, background_color: d, id: u } = e,
                    [_, p] = (0, r.useState)("0");
                return (0, n.jsx)("section", {
                    className: "".concat(a().section, " no-bg"),
                    id: "".concat(s).concat(u),
                    children: (0, n.jsx)("div", {
                        className: "container",
                        children: (0, n.jsxs)("div", {
                            className: "".concat(a().inner),
                            children: [
                                (null == o ? void 0 : o.title) &&
                                    (0, n.jsx)("div", { className: "".concat(a().heading), children: (0, n.jsx)("h2", { className: "".concat(a().title, " ttl-80 fw-regular mb-0"), children: null == o ? void 0 : o.title }) }),
                                (0, n.jsxs)("div", {
                                    className: "".concat(a().content_wrapper),
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: "".concat(a().image_wrapper),
                                            children: (0, n.jsx)("div", {
                                                className: "".concat(a().image_inner_track),
                                                children: (0, n.jsx)("div", {
                                                    className: "".concat(a().image_inner),
                                                    children: (0, n.jsx)("video", {
                                                        loop: !0,
                                                        muted: !0,
                                                        autoPlay: !0,
                                                        playsInline: !0,
                                                        children: (0, n.jsx)("source", {
                                                            src: null == o ? void 0 : null === (i = o.process_data[0]) || void 0 === i ? void 0 : null === (t = i.video) || void 0 === t ? void 0 : t.url,
                                                            type: "video/mp4",
                                                        }),
                                                    }),
                                                }),
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "".concat(a().accordion_main_wrapper),
                                            children: (0, n.jsx)(l.Z, {
                                                onSelect: (e) => p("".concat(e)),
                                                children:
                                                    null == o
                                                        ? void 0
                                                        : null === (c = o.process_data) || void 0 === c
                                                        ? void 0
                                                        : c.map((e, t) =>
                                                              (0, n.jsxs)(
                                                                  l.Z.Item,
                                                                  {
                                                                      eventKey: "".concat(t),
                                                                      children: [
                                                                          (0, n.jsxs)(l.Z.Header, {
                                                                              as: "div",
                                                                              className: "ttl-24",
                                                                              children: [
                                                                                  (0, n.jsx)("span", { className: "hover", children: null == e ? void 0 : e.title }),
                                                                                  (0, n.jsx)("span", { className: "".concat(a().icon) }),
                                                                                  (0, n.jsx)("span", { className: a().num, children: (t + 1).toString().padStart(2, "0") }),
                                                                              ],
                                                                          }),
                                                                          (0, n.jsx)(l.Z.Body, { children: (0, n.jsx)("p", { className: a().content, children: null == e ? void 0 : e.description }) }),
                                                                      ],
                                                                  },
                                                                  t
                                                              )
                                                          ),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                });
            };
        },
        81930: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return m;
                    },
                });
            var n = i(57437),
                l = i(35923),
                c = i.n(l),
                a = i(61396),
                r = i.n(a),
                o = i(62075);
            i(16691);
            var s = i(2265),
                d = i(42815),
                u = i(42716),
                _ = (e) => {
                    let t = (0, s.useRef)();
                    return (
                        (0, s.useLayoutEffect)(() => {
                            let i = d.p8.context((i) => {
                                let n = i.selector(".".concat(e.frame_video)),
                                    l = i.selector(".".concat(e.contWrap)),
                                    c = i.selector(".".concat(e.bgimage));
                                u.i.matchMedia({
                                    "(min-width: 1200px)": function () {
                                        d.p8.set(l, { yPercent: 30, opacity: 0 }), d.p8.to(n, { scale: 1.2, opacity: 1, duration: 3 }), d.p8.to(l, { yPercent: 0, opacity: 1, duration: 1 }), d.p8.to(c, { opacity: 1, scale: 1, duration: 1 });
                                        let e = d.p8.timeline({ scrollTrigger: { trigger: t.current, start: "top top", end: "100%", scrub: 0.8 } });
                                        e.to(n, { scale: 1.7, opacity: 0.1 });
                                    },
                                    "(min-width: 600px) and (max-width: 959px)": function () {},
                                    "(max-width: 1199.98px)": function () {
                                        d.p8.set(l, { yPercent: 30, opacity: 0 }), d.p8.to(n, { scale: 2, opacity: 1 }), d.p8.to(l, { yPercent: 0, opacity: 1 }), d.p8.to(c, { opacity: 1, scale: 1, duration: 2 });
                                        let e = d.p8.timeline({ scrollTrigger: { trigger: t.current, start: "top top", end: "100%", scrub: 0.8 } });
                                        e.to(n, { scale: 2.5, opacity: 0.3 });
                                    },
                                    all: function () {},
                                });
                            }, t);
                            return () => i.revert();
                        }, []),
                        { main: t }
                    );
                },
                p = i(46158),
                m = (e) => {
                    var t;
                    let { data: i, widget_type: l, id: a } = e,
                        { main: s } = _(c());
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("section", {
                            className: "".concat(c().section),
                            id: "".concat(l).concat(a),
                            ref: s,
                            children: [
                                (0, n.jsx)("div", {
                                    className: "".concat(c().item, " ratio"),
                                    children: (0, n.jsx)("video", {
                                        width: "100%",
                                        height: "100%",
                                        loop: !0,
                                        muted: !0,
                                        autoPlay: !0,
                                        playsInline: !0,
                                        children: (0, n.jsx)("source", { src: (0, p.m)(null == i ? void 0 : null === (t = i.video) || void 0 === t ? void 0 : t.url), type: "video/mp4" }),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: "container text-center",
                                    children: (0, n.jsxs)("div", {
                                        className: "row ".concat(c().wrapperrow),
                                        children: [
                                            (0, n.jsx)("div", { className: c().frame_video }),
                                            (0, n.jsx)("div", { className: c().bgimage, children: " " }),
                                            (0, n.jsxs)("div", {
                                                className: c().contWrap,
                                                children: [
                                                    (0, n.jsxs)("h1", {
                                                        className: "".concat(c().title, " fw-light text-white"),
                                                        children: [null == i ? void 0 : i.title_1, " ", (0, n.jsxs)("span", { children: [" ", null == i ? void 0 : i.title_2, " "] })],
                                                    }),
                                                    (0, n.jsx)("div", {
                                                        className: c().btnwrap,
                                                        children: (0, n.jsxs)(r(), {
                                                            href: "/contact-us",
                                                            className: "btn btn-primary light",
                                                            children: [(0, n.jsx)("span", { children: "Let’s talk" }), (0, n.jsx)("span", { children: (0, n.jsx)(o.Z, { icon: "arrow-right", size: 15 }) })],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    });
                };
        },
        46645: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return u;
                    },
                });
            var n = i(57437),
                l = i(96936),
                c = i.n(l);
            i(61396), i(62075);
            var a = i(16691),
                r = i.n(a),
                o = i(2265),
                s = i(42815),
                d = (e) => {
                    let t = (0, o.useRef)();
                    return (
                        (0, o.useLayoutEffect)(() => {
                            let i = s.p8.context((i) => {
                                let n = i.selector(".".concat(e.imageicon)),
                                    l = s.p8.timeline({ scrollTrigger: { trigger: t.current, start: "top bottom", end: "center center", scrub: 0.8 } });
                                l.to(n, { scale: 1 });
                            }, t);
                            return () => i.revert();
                        }, []),
                        { main: t }
                    );
                },
                u = (e) => {
                    var t, i;
                    let { data: l, widget_type: a, id: o } = e,
                        { main: s } = d(c());
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)("section", {
                            className: "".concat(c().section),
                            id: "".concat(a).concat(o),
                            ref: s,
                            children: (0, n.jsx)("div", {
                                className: "container ",
                                children: (0, n.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: "col-lg-5",
                                            children: (0, n.jsxs)("div", {
                                                className: c().frame_video,
                                                children: [
                                                    (0, n.jsx)("figure", {
                                                        className: "".concat(c().frame_figure, " ratio mb-0"),
                                                        children: (0, n.jsx)(r(), {
                                                            src: "".concat(null == l ? void 0 : null === (t = l.image) || void 0 === t ? void 0 : t.url),
                                                            sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw",
                                                            alt: "".concat(null == l ? void 0 : null === (i = l.image) || void 0 === i ? void 0 : i.alternative_text),
                                                            fill: !0,
                                                            quality: !0,
                                                        }),
                                                    }),
                                                    (0, n.jsx)("figure", {
                                                        className: "".concat(c().imageicon, " ").concat(c().icon1, "  mb-0"),
                                                        children: (0, n.jsx)(r(), { src: "/image/AIML/image_ai_image.png", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw", alt: "image", fill: !0, quality: !0 }),
                                                    }),
                                                    (0, n.jsx)("figure", {
                                                        className: "".concat(c().imageicon, " ").concat(c().icon2, " mb-0"),
                                                        children: (0, n.jsx)(r(), { src: "/image/AIML/play_ai_image.png", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw", alt: "image", fill: !0, quality: !0 }),
                                                    }),
                                                    (0, n.jsx)("figure", {
                                                        className: "".concat(c().imageicon, "  ").concat(c().icon3, " mb-0"),
                                                        children: (0, n.jsx)(r(), { src: "/image/AIML/search_ai_image.png", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw", alt: "image", fill: !0, quality: !0 }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "col-lg-7 text-white pt-5 pt-lg-0",
                                            children: (0, n.jsxs)("div", {
                                                className: c().contWrap,
                                                children: [(0, n.jsx)("h2", { className: "".concat(c().title, " fw-light"), children: null == l ? void 0 : l.title }), (0, n.jsx)("p", { children: null == l ? void 0 : l.sub_title })],
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    });
                };
        },
        28805: function (e, t, i) {
            "use strict";
            i.r(t);
            var n = i(57437),
                l = i(58848),
                c = i.n(l),
                a = i(61396),
                r = i.n(a),
                o = i(62075),
                s = i(16691),
                d = i.n(s),
                u = i(16898);
            t.default = (e) => {
                var t, i, l, a, s, _;
                let { data: p, widget_type: m, id: v } = e,
                    { width: h } = (0, u.Z)();
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)("section", {
                        className: "".concat(c().section),
                        id: "".concat(m).concat(v),
                        children: [
                            (0, n.jsx)("div", { className: c().leftbg }),
                            (0, n.jsx)("div", { className: c().rightbg }),
                            (0, n.jsx)("div", {
                                className: "container position-relative",
                                children: (0, n.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: "col-lg-6 text-white",
                                            children: (0, n.jsxs)("div", {
                                                className: c().contWrap,
                                                children: [
                                                    (0, n.jsx)("h2", { className: "".concat(c().title, "  fw-light text-white"), children: null == p ? void 0 : p.title }),
                                                    (0, n.jsx)("div", {
                                                        className: "".concat(c().frame_video, " d-block d-lg-none"),
                                                        children: (0, n.jsx)("figure", {
                                                            className: "".concat(c().frame_figure, " ratio mb-0"),
                                                            children: (0, n.jsx)(d(), {
                                                                src: "".concat(null == p ? void 0 : null === (t = p.image) || void 0 === t ? void 0 : t.url),
                                                                sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw",
                                                                alt: null == p ? void 0 : null === (i = p.image) || void 0 === i ? void 0 : i.alternative_text,
                                                                fill: !0,
                                                                quality: 100,
                                                            }),
                                                        }),
                                                    }),
                                                    (0, n.jsx)("p", { children: null == p ? void 0 : p.sub_title }),
                                                    (0, n.jsx)("div", {
                                                        className: c().btnwrap,
                                                        children: (0, n.jsxs)(r(), {
                                                            href: "/".concat(null == p ? void 0 : null === (l = p.button) || void 0 === l ? void 0 : l.link),
                                                            className: "btn btn-primary light",
                                                            children: [
                                                                (0, n.jsx)("span", { children: null == p ? void 0 : null === (a = p.button) || void 0 === a ? void 0 : a.label }),
                                                                (0, n.jsx)("span", { children: (0, n.jsx)(o.Z, { icon: "arrow-right", size: 15 }) }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "col-lg-6 position-relative ",
                                            children: (0, n.jsx)("div", {
                                                className: "".concat(c().frame_video, " d-none d-lg-block"),
                                                children: (0, n.jsx)("figure", {
                                                    className: "".concat(c().frame_figure, " ratio mb-0"),
                                                    children: (0, n.jsx)(d(), {
                                                        src: "".concat(null == p ? void 0 : null === (s = p.image) || void 0 === s ? void 0 : s.url),
                                                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw",
                                                        alt: null == p ? void 0 : null === (_ = p.image) || void 0 === _ ? void 0 : _.alternative_text,
                                                        fill: !0,
                                                        quality: 100,
                                                    }),
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                });
            };
        },
        5693: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return _;
                    },
                });
            var n = i(57437),
                l = i(28816),
                c = i.n(l),
                a = i(16010),
                r = i(62075),
                o = i(99023),
                s = i.n(o),
                d = i(22312),
                u = (e) => {
                    var t, i, l, c;
                    let { item: o } = e;
                    return (0, n.jsxs)("div", {
                        className: "".concat(s().card, " "),
                        children: [
                            (0, n.jsx)("div", {
                                className: s().card_head,
                                children: (0, n.jsx)("div", {
                                    className: "".concat(s().icon, " "),
                                    children: (0, n.jsx)(d.Z, {
                                        src: null == o ? void 0 : null === (t = o.image) || void 0 === t ? void 0 : t.url,
                                        fill: !0,
                                        alt: null == o ? void 0 : null === (i = o.image) || void 0 === i ? void 0 : i.alternative_text,
                                    }),
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: "".concat(s().card_body, " "),
                                children: [(0, n.jsx)("h3", { children: null == o ? void 0 : o.name }), (0, n.jsxs)("p", { children: [null == o ? void 0 : o.description, " "] })],
                            }),
                            (null == o ? void 0 : null === (l = o.button) || void 0 === l ? void 0 : l.link) &&
                                (0, n.jsx)("div", {
                                    className: s().card_footer,
                                    children: (0, n.jsxs)(a.Z, {
                                        href: null == o ? void 0 : null === (c = o.button) || void 0 === c ? void 0 : c.link,
                                        className: "btn btn-secondary stretched-link",
                                        children: [(0, n.jsx)("span", { className: s().iconbox, children: (0, n.jsx)(r.Z, { icon: "arrow-right", size: "12" }) }), (0, n.jsx)("span", { children: "Learn more" })],
                                    }),
                                }),
                        ],
                    });
                },
                _ = (e) => {
                    var t;
                    let { data: i, widget_type: l, id: a } = e;
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)("section", {
                            className: "".concat(c().section),
                            id: "".concat(l).concat(a),
                            children: (0, n.jsxs)("div", {
                                className: "container ",
                                children: [
                                    (0, n.jsx)("h2", { className: "".concat(c().title, " text-white"), children: null == i ? void 0 : i.title }),
                                    (0, n.jsx)("div", {
                                        className: "row row-cols-lg-3  ".concat(c().row),
                                        children: null == i ? void 0 : null === (t = i.platforms) || void 0 === t ? void 0 : t.map((e, t) => (0, n.jsx)("div", { children: (0, n.jsx)(u, { item: e }) }, t)),
                                    }),
                                ],
                            }),
                        }),
                    });
                };
        },
        32350: function (e, t, i) {
            "use strict";
            i.r(t);
            var n = i(57437),
                l = i(22312);
            i(16010);
            var c = i(49023),
                a = i.n(c),
                r = i(67224),
                o = i(60210),
                s = i(98864),
                d = i.n(s),
                u = i(26226),
                _ = i(46448);
            i(2265);
            var p = i(96681);
            let m = d()(() => Promise.all([i.e(2502), i.e(662)]).then(i.bind(i, 20205)), { loadableGenerated: { webpack: () => [20205] } });
            t.default = (e) => {
                var t, i;
                let { item: c } = e,
                    { status: s, setFalse: d, setTrue: v, toggle: h } = (0, o.Z)(),
                    { anim: x } = (0, u.Z)({ status: s });
                return (
                    (0, p.LZ)(),
                    (0, _.Z)({ status: s }),
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("button", {
                                className: a().block,
                                onClick: () => {
                                    h();
                                },
                                children: (0, n.jsxs)("div", {
                                    className: a().block_wrap,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: "".concat(a().block_img),
                                            children: (0, n.jsx)("div", {
                                                className: "ratio ".concat(a().block_img__ratio),
                                                children: (0, n.jsx)(l.Z, {
                                                    fill: !0,
                                                    src: null == c ? void 0 : null === (t = c.image) || void 0 === t ? void 0 : t.url,
                                                    "object-fit": "Our Philosophy",
                                                    alt: null == c ? void 0 : null === (i = c.image) || void 0 === i ? void 0 : i.alternative_text,
                                                }),
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "".concat(a().block_content),
                                            children: (0, n.jsxs)("div", {
                                                className: a().content_wrap,
                                                children: [
                                                    (null == c ? void 0 : c.title) && (0, n.jsx)("h4", { className: "".concat(a().main_title, " ttl-24 fw-medium mb-lg-2"), children: null == c ? void 0 : c.title }),
                                                    (null == c ? void 0 : c.subtitle) && (0, n.jsx)("p", { className: "".concat(a().description, " mb-0"), children: null == c ? void 0 : c.subtitle }),
                                                ],
                                            }),
                                        }),
                                        (0, n.jsx)("div", { className: "".concat(a().block_arrow), children: (0, n.jsx)("div", { className: a().arrow_item, children: (0, n.jsx)(r.Z, { icon: "arrow-right", size: 20 }) }) }),
                                    ],
                                }),
                            }),
                            (s || x) && (0, n.jsx)(m, { title: null == c ? void 0 : c.title, show: s, handleClose: d, slug: null == c ? void 0 : c.slug }),
                        ],
                    })
                );
            };
        },
        28062: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return p;
                    },
                });
            var n = i(57437);
            i(29211);
            var l = i(5654),
                c = i.n(l),
                a = i(42815),
                r = i(79123),
                o = i(2265);
            a.p8.config({ force3D: !0 });
            let s = (e) => {
                let { style: t } = e,
                    i = (0, o.useRef)(null);
                return (
                    (0, o.useLayoutEffect)(() => {
                        let e = a.p8.context((e) => {
                            let n = e.selector(".".concat(t.video)),
                                l = e.selector(".".concat(t.title, " strong")),
                                c = e.selector(".".concat(t.description, " ")),
                                o = e.selector(".".concat(t.btn, " ")),
                                s = a.p8.timeline({ scrollTrigger: { trigger: i.current, start: "top top", end: "bottom top", scrub: 0.2 } });
                            s.to(n, { y: 300 });
                            let d = a.p8.timeline({ repeat: 0, paused: !0 });
                            d.add(a.p8.set(n, { scale: 1.12 }))
                                .add(a.p8.set(l, { opacity: 0, y: 100 }))
                                .add(a.p8.set(c, { opacity: 0, y: 50 }))
                                .add(a.p8.set(o, { opacity: 0, y: 30 }))
                                .to(n, { scale: 1, stagger: 0.13, duration: 1, ease: r.Au.easeOut })
                                .to(l, { opacity: 1, y: 0, stagger: 0.13, duration: 1.5, ease: r.Au.easeOut }, "-=1")
                                .to(c, { opacity: 1, y: 0, stagger: 0.13, duration: 1.5, ease: r.Au.easeOut }, "-=1.3")
                                .to(o, { opacity: 1, y: 0, stagger: 0.13, duration: 1.5, ease: r.Au.easeInOut }, "-=1.9")
                                .play(0);
                        }, i);
                        return () => {
                            e.revert();
                        };
                    }, []),
                    {
                        main: i,
                        handleClick: () => {
                            var e;
                            let t = (null === (e = i.current) || void 0 === e ? void 0 : e.clientHeight) - 60;
                            window.scrollTo({ top: t, left: 0, behavior: "smooth" });
                        },
                    }
                );
            };
            var d = i(25110),
                u = i(90290),
                _ = i(67224),
                p = (e) => {
                    var t, i, l, a, r, o;
                    let { main: p, handleClick: m } = s({ style: c() });
                    return (0, n.jsxs)("section", {
                        className: "".concat(c().section),
                        ref: p,
                        id: "".concat(null == e ? void 0 : e.widget_type).concat(null == e ? void 0 : e.id),
                        children: [
                            (null == e ? void 0 : null === (i = e.data) || void 0 === i ? void 0 : null === (t = i.video) || void 0 === t ? void 0 : t.url) &&
                                (0, n.jsx)("div", {
                                    className: "".concat(c().videoWrapper),
                                    children: (0, n.jsx)(d.Z, { loop: !0, muted: !0, autoPlay: !0, playsInline: !0, src: null == e ? void 0 : null === (l = e.data) || void 0 === l ? void 0 : l.stream_url }),
                                }),
                            (0, n.jsxs)("div", {
                                className: "".concat(c().textWrapper),
                                children: [
                                    (0, n.jsx)(u.Z, { as: "h2", content: null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : a.title, className: "".concat(c().title, " fw-light") }),
                                    (null == e ? void 0 : null === (r = e.data) || void 0 === r ? void 0 : r.sub_title) &&
                                        (0, n.jsx)("p", { className: "".concat(c().description), children: null == e ? void 0 : null === (o = e.data) || void 0 === o ? void 0 : o.sub_title }),
                                    (0, n.jsx)("div", {
                                        className: "".concat(c().btn),
                                        children: (0, n.jsxs)("button", {
                                            className: "btn btn-primary light",
                                            onClick: m,
                                            children: [(0, n.jsx)("span", { children: "Current openings" }), (0, n.jsx)("span", { children: (0, n.jsx)(_.Z, { icon: "arrow-right", size: 15 }) })],
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                };
        },
        46178: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return s;
                    },
                });
            var n = i(57437),
                l = i(99321),
                c = i(5272),
                a = i.n(c),
                r = i(2265);
            let o = () => {
                let e = (0, r.useRef)(),
                    [t, i] = (0, r.useState)(null);
                return (
                    (0, r.useEffect)(() => {
                        setTimeout(() => {
                            i(0);
                        }, 50);
                    }, [e]),
                    {
                        listHeight: e,
                        handleClick: (e) => {
                            i(e);
                        },
                        activeIndex: t,
                    }
                );
            };
            var s = (e) => {
                var t, i;
                let { data: c, widget_type: r, id: s } = e,
                    { listHeight: d, handleClick: u, activeIndex: _ } = o();
                return (0, n.jsx)("section", {
                    className: "".concat(a().section),
                    id: "".concat(r).concat(s),
                    children: (0, n.jsx)("div", {
                        className: "container",
                        children: (0, n.jsx)("div", {
                            className: "".concat(a().wrapper),
                            children: (0, n.jsxs)("div", {
                                className: "row",
                                children: [
                                    (0, n.jsx)("div", {
                                        className: "col-12 col-lg-6",
                                        children: (null == c ? void 0 : c.title) && (0, n.jsx)("h3", { className: "".concat(a().title, " ttl-80 fw-regular"), children: null == c ? void 0 : c.title }),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: "col-12 col-lg-6",
                                        children: (0, n.jsx)("div", {
                                            className: "".concat(a().item_wrapper),
                                            children:
                                                c &&
                                                (null == c ? void 0 : null === (t = c.hiringModal) || void 0 === t ? void 0 : t.length) !== 0 &&
                                                (null == c
                                                    ? void 0
                                                    : null === (i = c.hiringModal) || void 0 === i
                                                    ? void 0
                                                    : i.map((e, t) => {
                                                          var i, c;
                                                          return (0, n.jsx)(
                                                              "div",
                                                              {
                                                                  className: "".concat(a().item, " ").concat(_ === t ? a().active : "", " "),
                                                                  onClick: () => u(t),
                                                                  children: (0, n.jsxs)("div", {
                                                                      className: "".concat(a().item_inner),
                                                                      children: [
                                                                          (0, n.jsx)("div", {
                                                                              className: "".concat(a().image_wrapper),
                                                                              children: (0, n.jsx)(l.Z, {
                                                                                  src: null == e ? void 0 : null === (i = e.image) || void 0 === i ? void 0 : i.url,
                                                                                  fill: !0,
                                                                                  alt: null == e ? void 0 : null === (c = e.image) || void 0 === c ? void 0 : c.alternative_text,
                                                                              }),
                                                                          }),
                                                                          (0, n.jsxs)("div", {
                                                                              className: "".concat(a().content_wrapper),
                                                                              children: [
                                                                                  (null == e ? void 0 : e.title) && (0, n.jsx)("h3", { children: e.title }),
                                                                                  (0, n.jsx)("p", {
                                                                                      style: { height: "".concat(_ === t ? d[t] : 25, "px") },
                                                                                      children: e.description && (0, n.jsx)("span", { ref: (e) => (d[t] = null == e ? void 0 : e.clientHeight), children: e.description }, t),
                                                                                  }),
                                                                              ],
                                                                          }),
                                                                      ],
                                                                  }),
                                                              },
                                                              t
                                                          );
                                                      })),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                });
            };
        },
        53970: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return u;
                    },
                });
            var n = i(57437);
            i(99321);
            var l = i(28325),
                c = i.n(l),
                a = i(2265),
                r = i(42815),
                o = i(42716);
            r.p8.registerPlugin(o.i);
            var s = (e) => {
                    let { style: t } = e,
                        i = (0, a.useRef)();
                    return (
                        (0, a.useLayoutEffect)(() => {
                            let e = r.p8.context((e) => {
                                let i = e.selector(".".concat(t.block_illus__item)),
                                    n = e.selector(".".concat(t.block_illus__line)),
                                    l = e.selector(".".concat(t.block_illus__line, " span"));
                                r.p8.set(i, { autoAlpha: 0, y: 75 }),
                                    r.p8.set(n, { scaleY: 0 }),
                                    r.p8.set(l, { opacity: 0 }),
                                    o.i.batch(i, {
                                        onEnter: (e) => {
                                            r.p8.to(e, { autoAlpha: 1, y: 0, ease: "expo", duration: 0.8, stagger: 0.15 });
                                        },
                                        once: !0,
                                    }),
                                    o.i.batch(n, {
                                        toggleClass: "active-line",
                                        onEnter: (e) => {
                                            r.p8.to(e, { scaleY: 1, ease: "expo", delay: 0.51, duration: 0.8, stagger: 0.15 });
                                        },
                                        once: !0,
                                    }),
                                    o.i.batch(l, {
                                        onEnter: (e) => {
                                            r.p8.to(e, { opacity: 1, delay: 1, ease: "expo", duration: 0.8, stagger: 0.15 });
                                        },
                                        once: !0,
                                    });
                            }, i);
                            return () => e.revert();
                        }, []),
                        { main: i }
                    );
                },
                d = i(11030),
                u = (e) => {
                    var t, i;
                    let { data: l, widget_type: a, id: r } = e,
                        { main: o } = s({ style: c() });
                    return (0, n.jsx)("section", {
                        className: "".concat(c().section),
                        ref: o,
                        id: "".concat(a).concat(r),
                        children: (0, n.jsx)("div", {
                            className: "container",
                            children: (0, n.jsxs)("div", {
                                className: "".concat(c().block, " row row-cols-lg-2"),
                                children: [
                                    (0, n.jsx)("div", {
                                        className: "".concat(c().block_content),
                                        children: (0, n.jsxs)("div", {
                                            className: c().content_wrap,
                                            children: [
                                                (null == l ? void 0 : l.title) && (0, n.jsx)("h2", { className: "".concat(c().block_title, "  ttl-80 fw-regular mb-lg-5 d-none d-lg-block"), children: null == l ? void 0 : l.title }),
                                                (null == l ? void 0 : l.subtitle) && (0, n.jsx)("p", { className: "fs-18 fw-light mb-4 mb-lg-5", children: null == l ? void 0 : l.subtitle }),
                                                (0, n.jsx)("div", {
                                                    className: "text-center text-md-start",
                                                    children: (0, n.jsx)(d.Z, {
                                                        link: null == l ? void 0 : null === (t = l.button) || void 0 === t ? void 0 : t.link,
                                                        label: null == l ? void 0 : null === (i = l.button) || void 0 === i ? void 0 : i.label,
                                                        isLight: !0,
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: "".concat(c().block_illus_col, " mb-5 mb-lg-0"),
                                        children: [
                                            (null == l ? void 0 : l.title) && (0, n.jsx)("h2", { className: "".concat(c().block_title, " d-lg-none  ttl-80 fw-regular mb-4"), children: null == l ? void 0 : l.title }),
                                            (0, n.jsxs)("div", {
                                                className: c().block_illus_wrap,
                                                children: [
                                                    (0, n.jsxs)("div", {
                                                        children: [
                                                            (0, n.jsx)("div", { className: "".concat(c().block_illus__line), style: { "--start": "0", "--end": "3" }, children: (0, n.jsx)("span", { children: "Video, Social" }) }),
                                                            (0, n.jsx)("div", {
                                                                className: "".concat(c().block_illus__line),
                                                                style: { "--start": "2", "--end": "6" },
                                                                children: (0, n.jsx)("span", { children: "PPC, Web Design, Content Marketing" }),
                                                            }),
                                                            (0, n.jsx)("div", { className: "".concat(c().block_illus__line), style: { "--start": "3", "--end": "6" }, children: (0, n.jsx)("span", { children: "Email Remarketing" }) }),
                                                            (0, n.jsx)("div", { className: "".concat(c().block_illus__line), style: { "--start": "0", "--end": "6" }, children: (0, n.jsx)("span", { children: "SEO, SEM" }) }),
                                                        ],
                                                    }),
                                                    (0, n.jsxs)("div", {
                                                        className: "".concat(c().block_illus),
                                                        children: [
                                                            (0, n.jsx)("div", { className: "".concat(c().block_illus__item), children: "Awareness" }),
                                                            (0, n.jsx)("div", { className: "".concat(c().block_illus__item), children: "Interest" }),
                                                            (0, n.jsx)("div", { className: "".concat(c().block_illus__item), children: "Consideration" }),
                                                            (0, n.jsx)("div", { className: "".concat(c().block_illus__item), children: "Intent" }),
                                                            (0, n.jsx)("div", { className: "".concat(c().block_illus__item), children: "Evaluation" }),
                                                            (0, n.jsx)("div", { className: "".concat(c().block_illus__item), children: "Sale" }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    });
                };
        },
        35034: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return u;
                    },
                });
            var n = i(57437),
                l = i(99321),
                c = i(36582),
                a = i.n(c),
                r = i(2265),
                o = i(42815),
                s = i(42716);
            o.p8.registerPlugin(s.i);
            var d = (e) => {
                    let { style: t } = e,
                        i = (0, r.useRef)();
                    return (
                        (0, r.useLayoutEffect)(() => {
                            let e = o.p8.context((e) => {
                                let n = e.selector(".".concat(t.block_illustration)),
                                    l = e.selector(".".concat(t.block_circle_outline)),
                                    c = e.selector(".".concat(t.block_content)),
                                    a = e.selector(".".concat(t.block_circle)),
                                    r = e.selector(".".concat(t.block_circle_overlay_bg)),
                                    d = e.selector(".".concat(t.block_circle_bg)),
                                    u = e.selector(".".concat(t.block_circle_content));
                                s.i.matchMedia({
                                    "(min-width: 992px)": function () {
                                        o.p8.set(c, { autoAlpha: 0, filter: "blur(30px)", "-webkit-filter": "blur(30px)", force3D: !0, xPercent: -10, scale: 0.9, x: 0 }),
                                            o.p8.set(n, { xPercent: 50, x: 0 }),
                                            o.p8.set(a, { scale: 1.5 }),
                                            o.p8.set(d, { autoAlpha: 0.5, scale: 0.86, force3D: !0, filter: "blur(30px)", "-webkit-filter": "blur(30px)" }),
                                            o.p8.set(r, { scale: 1 }),
                                            o.p8.set(l, { scale: 0.8, autoAlpha: 0, rotate: -50 }),
                                            o.p8.set(u, { scale: 1.3, autoAlpha: 1 });
                                        let e = o.p8.timeline({ scrollTrigger: { trigger: i.current, scrub: 0.8, pin: i.current } });
                                        e.to(d, { rotate: 180, scale: 1 }),
                                            e.to(u, { autoAlpha: 1, scale: 1 }),
                                            e.to(a, { scale: 1 }, "<"),
                                            e.to(r, { scale: 1 }, "<"),
                                            e.to(d, { filter: "blur(0px)", autoAlpha: 1 }, "<"),
                                            e.to(l, { scale: 1, autoAlpha: 1, rotate: 0 }),
                                            e.to(a, { scale: 0.73 }, "<"),
                                            e.to(n, { xPercent: 0 }),
                                            e.to(c, { autoAlpha: 1, filter: "blur(0px)", xPercent: 0, scale: 1 }, "<"),
                                            e.to(d, { rotate: 180 }, "<");
                                    },
                                    "(min-width: 600px) and (max-width: 959px)": function () {},
                                    "(max-width: 599px)": function () {},
                                    all: function () {},
                                });
                            }, i);
                            return () => e.revert();
                        }, []),
                        { main: i }
                    );
                },
                u = (e) => {
                    var t, i, c, r;
                    let { data: o, widget_type: s, id: u } = e,
                        { main: _ } = d({ style: a() });
                    return (0, n.jsx)("section", {
                        className: a().section_wrapper,
                        id: "".concat(s).concat(u),
                        children: (0, n.jsx)("div", {
                            className: "".concat(a().section),
                            ref: _,
                            children: (0, n.jsx)("div", {
                                className: "container",
                                children: (0, n.jsxs)("div", {
                                    className: "".concat(a().block, " row row-cols-lg-2"),
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: "".concat(a().block_illustration, " mb-3 mb-lg-0"),
                                            children: (0, n.jsxs)("div", {
                                                className: "ratio ratio-1x1 ".concat(a().block_illustration_ratio),
                                                children: [
                                                    (0, n.jsx)("div", {
                                                        className: a().block_circle_outline,
                                                        children: (0, n.jsx)(l.Z, {
                                                            src: null == o ? void 0 : null === (t = o.outer_circle_image) || void 0 === t ? void 0 : t.url,
                                                            fill: !0,
                                                            alt: null == o ? void 0 : null === (i = o.outer_circle_image) || void 0 === i ? void 0 : i.alternative_text,
                                                            priority: !0,
                                                        }),
                                                    }),
                                                    (0, n.jsxs)("div", {
                                                        className: a().block_circle,
                                                        children: [
                                                            (0, n.jsx)("div", { className: a().svg }),
                                                            (0, n.jsx)(l.Z, {
                                                                src: null == o ? void 0 : null === (c = o.inner_circle_image) || void 0 === c ? void 0 : c.url,
                                                                priority: !0,
                                                                className: a().block_circle_bg,
                                                                fill: !0,
                                                                alt: null == o ? void 0 : null === (r = o.inner_circle_image) || void 0 === r ? void 0 : r.alternative_text,
                                                            }),
                                                            (0, n.jsx)("div", { className: a().block_circle_overlay, children: (0, n.jsx)("div", { className: a().block_circle_overlay_bg }) }),
                                                            (null == o ? void 0 : o.circle_title) && (0, n.jsx)("div", { className: a().block_circle_content, children: (0, n.jsx)("h3", { children: null == o ? void 0 : o.circle_title }) }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: "".concat(a().block_content),
                                            children: [
                                                (null == o ? void 0 : o.title) && (0, n.jsx)("h2", { className: "".concat(a().block_title, "  fw-light mb-2  mb-lg-3"), children: null == o ? void 0 : o.title }),
                                                (null == o ? void 0 : o.description) && (0, n.jsx)("p", { className: "fs-24 fw-light mb-0", children: null == o ? void 0 : o.description }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    });
                };
        },
        48013: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return u;
                    },
                });
            var n = i(57437);
            i(99321);
            var l = i(43346),
                c = i.n(l),
                a = i(2265),
                r = i(42815),
                o = i(42716);
            r.p8.registerPlugin(o.i);
            var s = (e) => {
                    let { style: t } = e,
                        i = (0, a.useRef)(),
                        n = (0, a.useRef)();
                    return (
                        (0, a.useLayoutEffect)(() => {
                            let e = r.p8.context((e) => {
                                let l = e.selector(".".concat(t.block_circle__one)),
                                    c = e.selector(".".concat(t.block_circle__two)),
                                    a = e.selector(".".concat(t.block_circle__grad)),
                                    s = e.selector(".".concat(t.anim)),
                                    d = e.selector(".".concat(t.anim_in)),
                                    u = e.selector(".".concat(t.section1));
                                o.i.matchMedia({
                                    "(min-width: 992px)": function () {
                                        r.p8.set(l, { yPercent: -180, scale: 2, boxShadow: "rgb(255 255 255 / 40%) 0 09px 88px -26px" }),
                                            r.p8.set(c, { yPercent: 180, scale: 2, boxShadow: "rgb(143 12 63 / 40%) 0 -109px 88px -26px" }),
                                            r.p8.set(a, { scaleX: 1.6, scaleY: 1.2, xPercent: 0, yPercent: 9 }),
                                            r.p8.set(s, { autoAlpha: 0, scaleY: 1.05, scaleX: 1.15, filter: "blur(10px)" }),
                                            r.p8.set(n.current, { "--bg-color": "#fff", "--color": "#000" }),
                                            r.p8.to(n.current, { "--bg-color": "#000", "--color": "#fff", scrollTrigger: { start: "top top", toggleActions: "play none none reverse", trigger: i.current, once: !1 } });
                                        let e = r.p8.timeline({ scrollTrigger: { trigger: i.current, scrub: 1, pin: !0, ease: "expo", end: "150%" } });
                                        e.to(d, { stagger: 0.03, autoAlpha: 0, scaleY: 0.95, scaleX: 1.02, filter: "blur(10px)", duration: 0.2 }, ">.2"),
                                            e.to(u, { scale: 0.8 }, "<"),
                                            e.to(l, { yPercent: 0, scale: 0.8 }, "<.1"),
                                            e.to(c, { yPercent: 0, scale: 0.8 }, "<"),
                                            e.to(a, { xPercent: -14 }, "<"),
                                            e.to(a, { xPercent: 21, yPercent: 6 }),
                                            e.to(s, { autoAlpha: 1, stagger: 0.05, filter: "blur(0px)", scale: 1, duration: 0.2, scrollTrigger: { scrub: !1 } }, "<");
                                    },
                                    "(min-width: 600px) and (max-width: 959px)": function () {},
                                    "(max-width: 599px)": function () {},
                                    all: function () {},
                                });
                            }, i);
                            return () => e.revert();
                        }, [n, i, t]),
                        { main: i, mainPin: n }
                    );
                },
                d = i(11030),
                u = (e) => {
                    var t, i, l, a, r, o, u, _, p, m, v, h, x, g, f, j, b, w;
                    let { data: N, widget_type: y, id: k } = e,
                        { main: A, mainPin: S } = s({ style: c() });
                    return (0, n.jsx)("section", {
                        ref: S,
                        className: c().main_wrapper,
                        id: "".concat(y).concat(k),
                        children: (0, n.jsxs)("div", {
                            className: "".concat(c().section),
                            ref: A,
                            children: [
                                (0, n.jsx)("div", {
                                    className: c().expertise_text,
                                    children: (0, n.jsx)("div", {
                                        className: c().section1,
                                        children: (0, n.jsx)("div", {
                                            className: "container",
                                            children: (0, n.jsxs)("div", {
                                                className: "".concat(c().inner),
                                                children: [
                                                    (0, n.jsxs)("div", {
                                                        className: "".concat(c().content),
                                                        children: [
                                                            (null == N ? void 0 : N.title) &&
                                                                (0, n.jsx)("h2", { className: "".concat(c().title, " ").concat(c().anim_in, " mb-2 mb-lg-3 ttl-80 fw-regular"), children: null == N ? void 0 : N.title }),
                                                            (null == N ? void 0 : N.description) &&
                                                                (0, n.jsx)("p", { className: "".concat(c().description, " ").concat(c().anim_in, "  fw-light mb-3 "), children: null == N ? void 0 : N.description }),
                                                        ],
                                                    }),
                                                    (0, n.jsx)("div", {
                                                        className: "".concat(c().list, " ").concat(c().anim_in, " row row-cols-md-3"),
                                                        children:
                                                            null == N
                                                                ? void 0
                                                                : null === (t = N.impactsData) || void 0 === t
                                                                ? void 0
                                                                : t.map((e) =>
                                                                      (0, n.jsxs)(
                                                                          "div",
                                                                          {
                                                                              className: "".concat(c().item),
                                                                              children: [
                                                                                  (null == e ? void 0 : e.count) && (0, n.jsx)("h3", { className: "".concat(c().sub_title, "  "), children: null == e ? void 0 : e.count }),
                                                                                  (null == e ? void 0 : e.description) && (0, n.jsx)("p", { className: "".concat(c().sub_description, " mb-0"), children: null == e ? void 0 : e.description }),
                                                                              ],
                                                                          },
                                                                          null == e ? void 0 : e.count
                                                                      )
                                                                  ),
                                                    }),
                                                    (null == N ? void 0 : null === (i = N.button) || void 0 === i ? void 0 : i.link) &&
                                                        (0, n.jsx)("div", {
                                                            className: "".concat(c().link, " ").concat(c().anim_in),
                                                            children: (0, n.jsx)(d.Z, {
                                                                label: null == N ? void 0 : null === (l = N.button) || void 0 === l ? void 0 : l.label,
                                                                link: null == N ? void 0 : null === (a = N.button) || void 0 === a ? void 0 : a.link,
                                                                isFill: !0,
                                                            }),
                                                        }),
                                                ],
                                            }),
                                        }),
                                    }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: c().section2,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: "".concat(c().block),
                                            children: (0, n.jsxs)("div", {
                                                className: "ratio ratio-1x1 ".concat(c().block_ratio),
                                                children: [
                                                    (0, n.jsx)("div", { className: "".concat(c().block_circle, " ").concat(c().block_circle__one) }),
                                                    (0, n.jsx)("div", { className: "".concat(c().block_circle, " ").concat(c().block_circle__two), children: (0, n.jsx)("div", { className: c().block_circle__grad }) }),
                                                ],
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "container",
                                            children: (0, n.jsxs)("div", {
                                                className: "".concat(c().block_content),
                                                children: [
                                                    (null == N ? void 0 : null === (o = N.after_animation) || void 0 === o ? void 0 : null === (r = o.titles) || void 0 === r ? void 0 : r.length) !== 0 &&
                                                        (0, n.jsx)("h2", {
                                                            className: "".concat(c().block_title, " ttl-120  fw-light mb-2 mb-lg-2 f-primary"),
                                                            children:
                                                                (null == N ? void 0 : null === (_ = N.after_animation) || void 0 === _ ? void 0 : null === (u = _.titles) || void 0 === u ? void 0 : u.length) !== 0 &&
                                                                (null == N
                                                                    ? void 0
                                                                    : null === (m = N.after_animation) || void 0 === m
                                                                    ? void 0
                                                                    : null === (p = m.titles) || void 0 === p
                                                                    ? void 0
                                                                    : p.map((e) => (0, n.jsx)("span", { className: c().anim, children: e }, e))),
                                                        }),
                                                    (null == N ? void 0 : null === (v = N.after_animation) || void 0 === v ? void 0 : v.description) &&
                                                        (0, n.jsx)("p", { className: " fw-light mb-4 mb-lg-4 ".concat(c().anim), children: null == N ? void 0 : null === (h = N.after_animation) || void 0 === h ? void 0 : h.description }),
                                                    (null == N ? void 0 : null === (g = N.after_animation) || void 0 === g ? void 0 : null === (x = g.button) || void 0 === x ? void 0 : x.link) &&
                                                        (0, n.jsx)("div", {
                                                            className: "".concat(c().anim, " ").concat(c().link_wrap, " text-center"),
                                                            children: (0, n.jsx)(d.Z, {
                                                                link: null == N ? void 0 : null === (j = N.after_animation) || void 0 === j ? void 0 : null === (f = j.button) || void 0 === f ? void 0 : f.link,
                                                                label: null == N ? void 0 : null === (w = N.after_animation) || void 0 === w ? void 0 : null === (b = w.button) || void 0 === b ? void 0 : b.label,
                                                                isLight: !0,
                                                            }),
                                                        }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                };
        },
        86068: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return m;
                    },
                });
            var n = i(57437),
                l = i(67224),
                c = i(85463),
                a = i.n(c),
                r = i(16898),
                o = i(69023),
                s = i(42815),
                d = i(79123),
                u = i(24033),
                _ = i(2265);
            s.p8.config({ force3D: !0 });
            let p = (e) => {
                let { style: t, propRef: i } = e,
                    [n, l] = (0, _.useState)(null),
                    c = (0, _.useRef)(null),
                    a = (0, _.useRef)(null),
                    p = (0, u.useRouter)(),
                    m = (0, u.usePathname)(),
                    { setOverWriteHeader: v } = (0, o.A)(),
                    { isMobile: h } = (0, r.Z)(),
                    x = "/services/experience-design" === m;
                return (
                    (0, _.useLayoutEffect)(() => {
                        l(i);
                        let e = s.p8.context((e) => {
                            var i, l;
                            if ((null == n ? void 0 : n.current) || x) {
                                let r = e.selector(".".concat(t.design, " > span")),
                                    o = e.selector(".".concat(t.design)),
                                    u = e.selector(".".concat(t.design, " > span > span")),
                                    _ = e.selector(".".concat(t.butterfly)),
                                    p = e.selector(".".concat(t.content_wrap, " p span")),
                                    m = e.selector(".".concat(t.content_wrap, " button")),
                                    g = e.selector(".".concat(t.experience)),
                                    f = e.selector(".".concat(t.experience, " > span")),
                                    j = e.selector(".".concat(t.experience, " > span > span")),
                                    b = e.selector(".".concat(t.textWrapper));
                                if (x) {
                                    (null === (i = localStorage) || void 0 === i ? void 0 : i.getItem("butterfly-time"))
                                        ? (s.p8.set(p, { autoAlpha: 1 }), s.p8.set(m, { autoAlpha: 1 }))
                                        : (s.p8.set(p, { autoAlpha: 0 }), s.p8.set(m, { autoAlpha: 0, pointerEvents: "none" })),
                                        h && s.p8.set(b, { scale: 0.7, xPercent: -55 }),
                                        s.p8.set(b, { position: "fixed" }),
                                        s.p8.set(u, { autoAlpha: 1, scale: 1, skewX: 0 }),
                                        s.p8.set(r, { autoAlpha: 1, filter: "blur(0px)", scaleX: 1, x: 0 }),
                                        s.p8.set(_, { yPercent: -50, xPercent: 0, scale: 1, duration: 1.2, autoAlpha: 1 }),
                                        s.p8.set(o, { xPercent: -50, scale: 1, autoAlpha: 1 }),
                                        s.p8.set(g, { scale: 0.8, yPercent: -20 }),
                                        f.map((e, t) => s.p8.set(e, { x: -((t + 1) * 10) })),
                                        (a.current.currentTime = Number(null === (l = localStorage) || void 0 === l ? void 0 : l.getItem("butterfly-time")));
                                    let e = s.p8.timeline();
                                    e.to(o, { yPercent: 66, xPercent: 5.6, left: 0, duration: 1.1, scale: 0.8, delay: 0.5, onComplete: () => localStorage.removeItem("butterfly-time") }),
                                        e.to(p, { autoAlpha: 0, x: -40, filter: "blur(10px)", duration: 1.1 }, "-=1.1"),
                                        e.to(m, { autoAlpha: 0, x: -40, filter: "blur(10px)", duration: 1.1 }, "-=1.1"),
                                        e.to(f, { autoAlpha: 1, filter: "blur(0px)", scaleX: 1, stagger: 0.03, x: 0, duration: 0.9 }, "-=.55"),
                                        e.to(j, { scale: 1, skewX: 0, duration: 0.32, stagger: 0.02 }, "-=.80"),
                                        e.to(_, { repeat: !1, xPercent: 25, yPercent: -61, scale: 1.08, duration: 1.2 }, "-=1.4"),
                                        e.to(c.current, { pointerEvents: "none" });
                                    let t = s.p8.timeline({
                                        scrollTrigger: {
                                            trigger: c.current,
                                            start: "bottom bottom",
                                            onLeaveBack: () => t.reverse(),
                                            onEnter: () => {
                                                v(!0);
                                            },
                                            onEnterBack: () => {
                                                v(!1);
                                            },
                                        },
                                    });
                                    t.to(o, { autoAlpha: 0, y: 50, duration: 0.25, filter: "blur(10px)", ease: d.bJ.easeNone }),
                                        t.to(g, { autoAlpha: 0, y: -50, duration: 0.25, filter: "blur(10px)", ease: d.bJ.easeNone }, "-=.21"),
                                        t.fromTo(_, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.2 }, "-=.21");
                                } else
                                    s.p8.set(_, { yPercent: -50, xPercent: -25, scale: 0.6 }),
                                        s.p8.set(p, { skewY: 3, y: 50, filter: "blur(3px)" }),
                                        s.p8.set(m, { skewY: 3, y: 50, filter: "blur(3px)" }),
                                        s.p8.set(o, { xPercent: -50, scale: 1, autoAlpha: 1 }),
                                        s.p8.to(u, { transformPerspective: 1500 }),
                                        r.map((e, t) => s.p8.set(e, { x: -((t + 1) * 20) })),
                                        s.p8
                                            .timeline({ scrollTrigger: { trigger: n.current, start: "5%", end: "16%", scrub: 1, preventOverlaps: !0 } })
                                            .to(r, { autoAlpha: 1, filter: "blur(0px)", scaleX: 1, stagger: 0.03, x: 0, duration: 0.9 })
                                            .to(u, { scale: 1, skewX: 0, duration: 0.32, stagger: 0.02 }, "<")
                                            .to(_, { xPercent: 0, scale: 1, autoAlpha: 1, duration: 1.5 }, "-=.5")
                                            .to(p, { y: 0, skewY: 0, autoAlpha: 1, filter: "blur(0px)", duration: 1.4, ease: d.Lp.easeOut, stagger: 0.05 }, "-=2\n              ")
                                            .to(m, { y: 0, skewY: 0, autoAlpha: 1, filter: "blur(0px)", duration: 1.4, ease: d.Lp.easeOut }, "<+.4"),
                                        s.p8
                                            .timeline({ scrollTrigger: { trigger: n.current, start: "21%", end: "29%", scrub: 1, preventOverlaps: !0 } })
                                            .to(m, { y: 30, skewY: 3, autoAlpha: 0, filter: "blur(3px)", duration: 0.9, ease: d.Lp.easeOut })
                                            .to(p, { y: 30, skewY: 3, autoAlpha: 0, filter: "blur(3px)", duration: 0.9, ease: d.Lp.easeOut, stagger: -0.05 }, "<")
                                            .to(_, { xPercent: -40, scale: 0.6, autoAlpha: 0, duration: 1.2 }, "<")
                                            .to(u, { y: 0, stagger: 0.08, x: 0, z: 0, duration: 0.8, autoAlpha: 0, filter: "blur(10px)" }, "<+.54");
                            }
                        }, c);
                        return () => {
                            e.revert(), v(!1);
                        };
                    }, [n]),
                    {
                        main: c,
                        handleClick: () => {
                            setTimeout(() => {
                                p.push("/services/experience-design");
                            }, 500),
                                a.current.addEventListener("timeupdate", function (e) {
                                    var t;
                                    (null == a ? void 0 : null === (t = a.current) || void 0 === t ? void 0 : t.currentTime) && localStorage.setItem("butterfly-time", a.current.currentTime.toString());
                                });
                        },
                        videoRef: a,
                    }
                );
            };
            var m = (e) => {
                let { propRef: t } = e,
                    { main: i, handleClick: c, videoRef: r } = p({ style: a(), propRef: t });
                return (0, n.jsx)("section", {
                    className: "".concat(a().section),
                    ref: i,
                    children: (0, n.jsx)("div", {
                        className: "container",
                        children: (0, n.jsxs)("div", {
                            className: "".concat(a().textWrapper),
                            children: [
                                (0, n.jsxs)("div", {
                                    className: "".concat(a().textAnimInner),
                                    children: [
                                        (0, n.jsxs)("h3", {
                                            className: "".concat(a().textHero, " ").concat(a().experience),
                                            children: [
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "E" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "x" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "p" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "e" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "r" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "i" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "e" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "n" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "c" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "e" }) }),
                                            ],
                                        }),
                                        (0, n.jsxs)("h2", {
                                            className: "".concat(a().textHero, " ").concat(a().design),
                                            children: [
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "D" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "e" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "s" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "i" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "g" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "n" }) }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", {
                                    className: "".concat(a().butterfly),
                                    children: (0, n.jsx)("video", {
                                        className: a().video,
                                        width: "100%",
                                        height: "100%",
                                        loop: !0,
                                        muted: !0,
                                        autoPlay: !0,
                                        playsInline: !0,
                                        ref: r,
                                        children: (0, n.jsx)("source", { src: "/video/butterFly1.mp4", type: "video/mp4" }),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: "".concat(a().content),
                                    children: (0, n.jsxs)("div", {
                                        className: "".concat(a().content_wrap),
                                        children: [
                                            (0, n.jsxs)("p", {
                                                children: [
                                                    (0, n.jsx)("span", { children: "Intelligent design is the essence of nature;" }),
                                                    " ",
                                                    (0, n.jsx)("span", { children: "that’s our inspiration in crafting" }),
                                                    " ",
                                                    (0, n.jsx)("span", { children: "tomorrow’s tech realm" }),
                                                ],
                                            }),
                                            (0, n.jsxs)("button", { onClick: c, children: ["Learn more", (0, n.jsx)(l.Z, { icon: "arrow-right", size: "16", color: "#fff" })] }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                });
            };
        },
        14901: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return _;
                    },
                });
            var n = i(57437),
                l = i(29211),
                c = i(90290),
                a = i(67242),
                r = i.n(a),
                o = i(2265),
                s = i(42815),
                d = i(42716);
            s.p8.registerPlugin(d.i);
            var u = (e) => {
                    let [t, i] = (0, o.useState)(0),
                        n = e.title.length;
                    (0, o.useEffect)(() => {
                        let e = setInterval(() => {
                            i((e) => (e < n - 1 ? e + 1 : 0));
                        }, 2800);
                        return () => {
                            clearInterval(e);
                        };
                    }, [n]);
                    let l = (0, o.useRef)();
                    return (
                        (0, o.useLayoutEffect)(() => {
                            let e = s.p8.context((e) => {
                                s.p8.set(e.selector(".container"), { opacity: 0 });
                                let t = s.p8.timeline({ scrollTrigger: { trigger: l.current, start: "top 70%", end: "bottom 80%", scrub: 0.8 } });
                                t.to(e.selector(".container"), { opacity: 1 });
                            }, l);
                            return () => {
                                e.revert();
                            };
                        }, []),
                        { main: l, counter: t }
                    );
                },
                _ = (e) => {
                    var t, i;
                    let { data: a, widget_type: o } = e,
                        { main: s, counter: d } = u(a);
                    return (0, n.jsxs)("section", {
                        className: "".concat(r().section, " position-relative expertise"),
                        id: o,
                        ref: s,
                        children: [
                            (0, n.jsx)("span", { className: r().gradient_item_01 }),
                            (0, n.jsx)("div", {
                                className: "container",
                                children: (0, n.jsxs)("div", {
                                    className: "".concat(r().inner),
                                    children: [
                                        (0, n.jsx)("h2", {
                                            className: "".concat(r().title),
                                            children:
                                                (null == a ? void 0 : a.title.length) !== 0 &&
                                                (null == a
                                                    ? void 0
                                                    : a.title.map((e, t) =>
                                                          (0, n.jsx)("span", { children: (0, n.jsxs)("span", { "data-before": "".concat(e, "."), className: "".concat(d === t ? r().active : ""), children: [e, "."] }) }, t)
                                                      )),
                                        }),
                                        (null == a ? void 0 : a.description) && (0, n.jsx)(c.Z, { as: "p", className: "".concat(r().descritpion, " fs-32 fw-light"), content: null == a ? void 0 : a.description }),
                                        (0, n.jsx)("div", {
                                            className: "".concat(r().btn_wrapper),
                                            children: (0, n.jsx)(l.Z, {
                                                link: null == a ? void 0 : null === (t = a.button) || void 0 === t ? void 0 : t.link,
                                                label: null == a ? void 0 : null === (i = a.button) || void 0 === i ? void 0 : i.label,
                                                isLight: !0,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        39715: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return _;
                    },
                });
            var n = i(57437),
                l = i(9112),
                c = i(16272),
                a = i(75411),
                r = i.n(a),
                o = i(2265),
                s = i(42815),
                d = (e) => {
                    let t = (0, o.useRef)();
                    return (
                        (0, o.useLayoutEffect)(() => {
                            let e = s.p8.context((e) => {}, t);
                            return () => e.revert();
                        }, []),
                        { main: t }
                    );
                },
                u = i(22312),
                _ = (e) => {
                    var t, i, a, o;
                    let { data: s, widget_type: _, id: p } = e,
                        { main: m } = d(r());
                    return (0, n.jsx)("section", {
                        className: "".concat(r().section),
                        ref: m,
                        id: "".concat(_).concat(p),
                        children: (0, n.jsx)("div", {
                            className: "container",
                            children: (0, n.jsx)("div", {
                                className: "row ".concat(r().row, " row-cols-lg-2"),
                                children: (0, n.jsxs)(c.Z.Container, {
                                    id: "left-tabs-example",
                                    defaultActiveKey: "0",
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: r().col_left,
                                            children: [
                                                (null == s ? void 0 : s.title) &&
                                                    (0, n.jsx)("div", {
                                                        className: "".concat(r().heading),
                                                        children: (0, n.jsx)("h2", { className: "".concat(r().title, " ttl-80 fw-regular mb-2 mb-lg-2"), children: null == s ? void 0 : s.title }),
                                                    }),
                                                (0, n.jsx)("div", {
                                                    className: "".concat(r().nav, " mb-4 mb-lg-0"),
                                                    children: (0, n.jsx)(l.Z, {
                                                        variant: "pills",
                                                        className: "flex-column",
                                                        children:
                                                            (null == s ? void 0 : null === (t = s.cards) || void 0 === t ? void 0 : t.length) !== 0 &&
                                                            (null == s
                                                                ? void 0
                                                                : null === (i = s.cards) || void 0 === i
                                                                ? void 0
                                                                : i.map((e, t) =>
                                                                      (0, n.jsx)(l.Z.Item, { className: "".concat(r().nav_item), children: (0, n.jsx)(l.Z.Link, { eventKey: "".concat(t), children: null == e ? void 0 : e.title }) }, t)
                                                                  )),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)("div", {
                                            className: r().col_right,
                                            children: (0, n.jsx)(c.Z.Content, {
                                                className: "".concat(r().tab_content),
                                                children:
                                                    (null == s ? void 0 : null === (a = s.cards) || void 0 === a ? void 0 : a.length) !== 0 &&
                                                    (null == s
                                                        ? void 0
                                                        : null === (o = s.cards) || void 0 === o
                                                        ? void 0
                                                        : o.map((e, t) => {
                                                              var i, l, a;
                                                              return (0, n.jsxs)(
                                                                  c.Z.Pane,
                                                                  {
                                                                      eventKey: "".concat(t),
                                                                      children: [
                                                                          (null == e ? void 0 : null === (i = e.image) || void 0 === i ? void 0 : i.url) &&
                                                                              (0, n.jsx)("figure", {
                                                                                  className: "".concat(r().tab_img, " ratio"),
                                                                                  children: (0, n.jsx)(u.Z, {
                                                                                      fill: !0,
                                                                                      src: null == e ? void 0 : null === (l = e.image) || void 0 === l ? void 0 : l.url,
                                                                                      alt: null == e ? void 0 : null === (a = e.image) || void 0 === a ? void 0 : a.alternative_text,
                                                                                  }),
                                                                              }),
                                                                          (null == e ? void 0 : e.description) && (0, n.jsx)("p", { children: null == e ? void 0 : e.description }),
                                                                      ],
                                                                  },
                                                                  t
                                                              );
                                                          })),
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    });
                };
        },
        41508: function (e, t, i) {
            "use strict";
            i.r(t);
            var n = i(57437),
                l = i(99321),
                c = i(46322),
                a = i.n(c),
                r = i(11030);
            i(67224),
                (t.default = (e) => {
                    var t, i, c, o, s;
                    let { data: d, widget_type: u, id: _ } = e;
                    return (0, n.jsxs)("section", {
                        className: "".concat(a().section),
                        id: "".concat(u).concat(_),
                        children: [
                            (0, n.jsx)("div", {
                                className: "".concat(a().banner_wrap, " "),
                                children:
                                    (null == d ? void 0 : null === (t = d.image) || void 0 === t ? void 0 : t.url) &&
                                    (0, n.jsx)(l.Z, {
                                        src: null == d ? void 0 : null === (i = d.image) || void 0 === i ? void 0 : i.url,
                                        fill: !0,
                                        alt: null == d ? void 0 : null === (c = d.image) || void 0 === c ? void 0 : c.alternative_text,
                                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw",
                                    }),
                            }),
                            (0, n.jsx)("div", {
                                className: "container",
                                children: (0, n.jsxs)("div", {
                                    className: "".concat(a().heading_wrap),
                                    children: [
                                        (null == d ? void 0 : d.title) && (0, n.jsx)("h2", { children: null == d ? void 0 : d.title }),
                                        (null == d ? void 0 : d.subtitle) && (0, n.jsx)("p", { children: null == d ? void 0 : d.subtitle }),
                                        (0, n.jsx)(r.Z, {
                                            link: null == d ? void 0 : null === (o = d.button) || void 0 === o ? void 0 : o.link,
                                            label: null == d ? void 0 : null === (s = d.button) || void 0 === s ? void 0 : s.label,
                                            isLight: !0,
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                });
        },
        19796: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return _;
                    },
                });
            var n = i(57437),
                l = i(71511),
                c = i.n(l),
                a = i(99321);
            i(61396);
            var r = i(11030),
                o = i(2265),
                s = i(42815),
                d = i(42716);
            s.p8.registerPlugin(d.i);
            var u = (e) => {
                    let { style: t, data: i } = e,
                        n = (0, o.useRef)(),
                        l = ((e, t) => {
                            let i = [],
                                n = 0;
                            for (let t = 0; t < 2; t++) {
                                let t = [];
                                for (let i = 0; i < 20; i++) t.push(e[n % e.length]), n++;
                                i.push(t);
                            }
                            return i;
                        })(null == i ? void 0 : i.technology_icons, 0);
                    return (
                        (0, o.useLayoutEffect)(() => {
                            let e = s.p8.context((e) => {
                                let i = e.selector(".".concat(t.row_one));
                                d.i.matchMedia({
                                    "(min-width: 992px)": function () {
                                        let e = s.p8.timeline({ scrollTrigger: { trigger: n.current, start: "top 90%", scrub: !0 } });
                                        null == i ||
                                            i.map((t, i) => {
                                                e.to(t, { xPercent: i % 2 ? -10 : 10 }, "<");
                                            });
                                    },
                                    "(min-width: 600px) and (max-width: 959px)": function () {},
                                    "(max-width: 599px)": function () {},
                                    all: function () {},
                                });
                            }, n);
                            return () => e.revert();
                        }, []),
                        { main: n, chunkedTechnologiesArray: l }
                    );
                },
                _ = (e) => {
                    var t, i;
                    let { data: l, widget_type: o, id: s } = e,
                        { main: d, chunkedTechnologiesArray: _ } = u({ style: c(), data: l });
                    return (0, n.jsxs)("section", {
                        className: "".concat(c().section, " no-bg"),
                        ref: d,
                        id: "".concat(o).concat(s),
                        children: [
                            (0, n.jsx)("div", {
                                className: "container",
                                children: (0, n.jsxs)("div", {
                                    className: c().section_head,
                                    children: [
                                        (null == l ? void 0 : l.title) && (0, n.jsx)("h2", { className: "ttl-80 text-lg-center text-left fw-regular", children: null == l ? void 0 : l.title }),
                                        (null == l ? void 0 : l.subtitle) && (0, n.jsx)("p", { className: "text-lg-center fs-18 text-left mb-0", children: null == l ? void 0 : l.subtitle }),
                                    ],
                                }),
                            }),
                            (0, n.jsx)("div", {
                                className: "".concat(c().section_images),
                                children:
                                    (null == _ ? void 0 : _.length) !== 0 &&
                                    (null == _
                                        ? void 0
                                        : _.map((e, t) =>
                                              (0, n.jsx)(
                                                  "div",
                                                  {
                                                      className: "row ".concat(c().row_one),
                                                      children:
                                                          (null == e ? void 0 : e.length) !== 0 &&
                                                          (null == e
                                                              ? void 0
                                                              : e.map((e, t) =>
                                                                    (0, n.jsx)(
                                                                        "div",
                                                                        {
                                                                            className: "col-2 col-lg-1 ",
                                                                            children: (0, n.jsx)("div", {
                                                                                className: c().section_images_img,
                                                                                children: (0, n.jsx)("div", {
                                                                                    className: "ratio",
                                                                                    children: (0, n.jsx)(a.Z, { src: null == e ? void 0 : e.url, fill: !0, alt: null == e ? void 0 : e.alternative_text }),
                                                                                }),
                                                                            }),
                                                                        },
                                                                        t
                                                                    )
                                                                )),
                                                  },
                                                  t
                                              )
                                          )),
                            }),
                            (0, n.jsx)("div", {
                                className: "container d-flex justify-center",
                                children: (0, n.jsx)(r.Z, {
                                    link: null == l ? void 0 : null === (t = l.button) || void 0 === t ? void 0 : t.link,
                                    label: null == l ? void 0 : null === (i = l.button) || void 0 === i ? void 0 : i.label,
                                    isFill: !0,
                                }),
                            }),
                        ],
                    });
                };
        },
        9071: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return p;
                    },
                });
            var n = i(57437),
                l = i(11030),
                c = i(57685),
                a = i.n(c),
                r = i(99321),
                o = i(67224),
                s = i(2265),
                d = i(42815),
                u = i(42716);
            d.p8.registerPlugin(u.i);
            var _ = (e) => {
                    let { style: t } = e,
                        i = (0, s.useRef)();
                    return (
                        (0, s.useLayoutEffect)(() => {
                            let e = d.p8.context((e) => {
                                let n = e.selector(".".concat(t.image_one)),
                                    l = e.selector(".".concat(t.image_one, " img")),
                                    c = e.selector(".".concat(t.image_two)),
                                    a = e.selector(".".concat(t.image_two, " img"));
                                u.i.matchMedia({
                                    "(min-width: 992px)": function () {
                                        d.p8.set(n, { xPercent: 20, yPercent: -20 }), d.p8.set(l, { scale: 1.5 }), d.p8.set(c, { xPercent: -20, yPercent: 20 }), d.p8.set(a, { scale: 1.5 });
                                        let e = d.p8.timeline({ scrollTrigger: { trigger: i.current, scrub: 0.8 } });
                                        e.to([n, c], { xPercent: 0, yPercent: 0 }, "<"), e.to([l, a], { scale: 1 }, "<");
                                    },
                                    "(min-width: 600px) and (max-width: 959px)": function () {},
                                    "(max-width: 599px)": function () {},
                                    all: function () {},
                                });
                            }, i);
                            return () => e.revert();
                        }, []),
                        { main: i }
                    );
                },
                p = (e) => {
                    var t, i, c, s, d, u;
                    let { data: p, widget_type: m, id: v } = e,
                        { main: h } = _({ style: a() });
                    return (0, n.jsx)("section", {
                        className: a().section,
                        id: "".concat(m).concat(v),
                        ref: h,
                        children: (0, n.jsx)("div", {
                            className: "container",
                            children: (0, n.jsx)("div", {
                                className: "".concat(a().inner),
                                children: (0, n.jsxs)("div", {
                                    className: "row flex-column-reverse flex-nowrap flex-lg-wrap flex-lg-row",
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: "col-lg-7",
                                            children: (0, n.jsxs)("div", {
                                                className: "".concat(a().content),
                                                children: [
                                                    (null == p ? void 0 : p.title) && (0, n.jsx)("h3", { className: "".concat(a().title, " fw-regular text-sm-center text-lg-start"), children: null == p ? void 0 : p.title }),
                                                    (null == p ? void 0 : p.sub_title) && (0, n.jsx)("p", { className: "".concat(a().description, " mb-0 fs-24"), children: null == p ? void 0 : p.sub_title }),
                                                    (0, n.jsx)("div", {
                                                        className: "".concat(a().link_wrapper),
                                                        children: (0, n.jsx)(l.Z, {
                                                            isFill: !0,
                                                            label: null == p ? void 0 : null === (t = p.button) || void 0 === t ? void 0 : t.label,
                                                            link: null == p ? void 0 : null === (i = p.button) || void 0 === i ? void 0 : i.link,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "col-lg-5",
                                            children: (0, n.jsxs)("div", {
                                                className: "".concat(a().image_wrapper),
                                                children: [
                                                    (0, n.jsx)("div", {
                                                        className: "".concat(a().image_one),
                                                        children: (0, n.jsx)(r.Z, {
                                                            fill: !0,
                                                            src: null == p ? void 0 : null === (c = p.bottom_image) || void 0 === c ? void 0 : c.url,
                                                            "object-fit": "Our Philosophy",
                                                            alt: null == p ? void 0 : null === (s = p.bottom_image) || void 0 === s ? void 0 : s.alternative_text,
                                                            quality: 90,
                                                        }),
                                                    }),
                                                    (0, n.jsx)("div", {
                                                        className: "".concat(a().image_two),
                                                        children: (0, n.jsx)(r.Z, {
                                                            fill: !0,
                                                            src: null == p ? void 0 : null === (d = p.top_image) || void 0 === d ? void 0 : d.url,
                                                            "object-fit": "Our Philosophy",
                                                            alt: null == p ? void 0 : null === (u = p.top_image) || void 0 === u ? void 0 : u.alternative_text,
                                                            quality: 90,
                                                        }),
                                                    }),
                                                    (0, n.jsx)("div", { className: "".concat(a().link), children: (0, n.jsx)(o.Z, { icon: "arrow-top", color: "#fff", size: "25" }) }),
                                                    (0, n.jsx)("div", { className: "".concat(a().circle) }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    });
                };
        },
        74540: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return p;
                    },
                });
            var n = i(57437);
            i(99321);
            var l = i(98514),
                c = i.n(l),
                a = i(2265),
                r = i(42815),
                o = i(79123),
                s = i(33600),
                d = i(24033);
            r.p8.config({ force3D: !0 });
            let u = (e) => {
                let { style: t, propRef: i } = e,
                    [n, l] = (0, a.useState)(null),
                    c = (0, a.useRef)(null),
                    u = (0, a.useRef)(null),
                    _ = (0, d.useRouter)(),
                    p = (0, d.usePathname)();
                return (
                    (0, a.useLayoutEffect)(() => {
                        l(i);
                        let e = r.p8.context((e) => {
                            var i, l;
                            let a = "/services/technology" === p;
                            if ((null == n ? void 0 : n.current) || a) {
                                let d = e.selector(".".concat(t.design, " > span")),
                                    _ = e.selector(".".concat(t.design)),
                                    p = e.selector(".".concat(t.design, " > span > span")),
                                    m = e.selector(".".concat(t.butterfly)),
                                    v = e.selector(".".concat(t.content_wrap, " p span")),
                                    h = e.selector(".".concat(t.content_wrap, " button")),
                                    x = e.selector(".".concat(t.textAnimInner)),
                                    g = e.selector(".".concat(t.experience, " > span")),
                                    f = e.selector(".".concat(t.textWrapper));
                                if (a) {
                                    (null === (i = localStorage) || void 0 === i ? void 0 : i.getItem("butterfly-time"))
                                        ? (r.p8.set(v, { autoAlpha: 1 }), r.p8.set(h, { autoAlpha: 1 }))
                                        : (r.p8.set(v, { autoAlpha: 0 }), r.p8.set(h, { autoAlpha: 0, pointerEvents: "none" })),
                                        r.p8.set(f, { position: "fixed", pointerEvents: "none" }),
                                        r.p8.set(p, { autoAlpha: 1, scale: 1, skewX: 0 }),
                                        r.p8.set(d, { autoAlpha: 1, filter: "blur(0px)", scaleX: 1, x: 0 }),
                                        r.p8.set(m, { yPercent: -50, xPercent: -123, scale: 1, autoAlpha: 1 }),
                                        r.p8.set(_, { xPercent: -50, scale: 1, autoAlpha: 1 }),
                                        g.map((e, t) => r.p8.set(e, { y: 0, stagger: 0.08, x: 0, z: 0, duration: 0.8, autoAlpha: 0, filter: "blur(10px)" })),
                                        (u.current.currentTime = Number(null === (l = localStorage) || void 0 === l ? void 0 : l.getItem("butterfly-time")));
                                    let e = r.p8.timeline();
                                    e.to(v, { autoAlpha: 0, x: -40, filter: "blur(10px)", duration: 1.1 }),
                                        e.to(h, { autoAlpha: 0, x: -40, filter: "blur(10px)", duration: 1.1 }, "-=1.1"),
                                        e.to(m, { xPercent: -50, yPercent: -50, scale: 1.6, autoAlpha: 0.7, duration: 1.2 }, "-=1"),
                                        e.to(p, { y: 0, stagger: 0.08, x: 0, z: 0, duration: 0.8, autoAlpha: 0, filter: "blur(10px)" }, "-=.4"),
                                        e.to(g, { y: 0, rotateX: 0, stagger: 0.05, x: 0, z: 0, duration: 0.5, autoAlpha: 1, filter: "blur(0px)" }, "-=.9");
                                    let t = r.p8.timeline({ scrollTrigger: { trigger: c.current, start: "bottom bottom", end: "bottom+=410px bottom", scrub: !0 } });
                                    t.to(m, { scale: 4, autoAlpha: 0, filter: "blur(30px)", ease: s.$p.config(1, 2) }), t.to(m, { autoAlpha: 0, duration: 0.5 }), t.to(x, { willChange: "transform", autoAlpha: 0, filter: "blur(10px)" });
                                } else {
                                    r.p8.set(h, { y: 40, skewY: 4, autoAlpha: 0, filter: "blur(3px)" }),
                                        r.p8.set(v, { y: 40, skewY: 4, autoAlpha: 0 }),
                                        r.p8.set(m, { yPercent: -50, xPercent: -90, scale: 0.6 }),
                                        r.p8.set(p, { y: 0, x: 0, z: 0, autoAlpha: 0, filter: "blur(10px)" }),
                                        r.p8.set(_, { xPercent: -50 }),
                                        r.p8.set(d, { autoAlpha: 1 }),
                                        r.p8.set(p, { transformPerspective: 1500 });
                                    let e = r.p8.timeline({ scrollTrigger: { trigger: n.current, start: "23.5%", end: "36%", scrub: 1, preventOverlaps: !0 } });
                                    e.to(p, { y: 0, rotateX: 0, stagger: 0.08, x: 0, z: 0, duration: 0.8, autoAlpha: 1, filter: "blur(0px)" }),
                                        e.to(_, { scale: 1, xPercent: -50 }, "<"),
                                        e.to(m, { xPercent: -123, scale: 1, autoAlpha: 1, duration: 1.2 }, "<"),
                                        e.to(v, { y: 0, skewY: 0, autoAlpha: 1, filter: "blur(0px)", duration: 0.9, ease: o.Lp.easeOut, stagger: 0.05 }, "<+.5"),
                                        e.to(h, { y: 0, skewY: 0, autoAlpha: 1, filter: "blur(0px)", duration: 0.9, ease: o.Lp.easeOut }, "<+.3");
                                    let t = r.p8.timeline({ scrollTrigger: { trigger: n.current, start: "40%", end: "50%", scrub: 1, preventOverlaps: !0 } });
                                    t.to(h, { y: 30, skewY: 3, autoAlpha: 0, filter: "blur(3px)", duration: 0.9, ease: o.Lp.easeOut }),
                                        t.to(v, { y: 30, skewY: 3, autoAlpha: 0, filter: "blur(3px)", duration: 0.9, ease: o.Lp.easeOut, stagger: -0.05 }, "<"),
                                        t.to(m, { xPercent: -90, scale: 0.6, autoAlpha: 0, duration: 1.2, ease: o.Lp.easeOut }, "<+.5"),
                                        t.to(p, { y: 0, stagger: 0.08, x: 0, z: 0, duration: 0.8, autoAlpha: 0, filter: "blur(10px)" }, "<+.3");
                                }
                            }
                        }, c);
                        return () => {
                            e.revert();
                        };
                    }, [n, t, p, i]),
                    {
                        main: c,
                        handleClick: () => {
                            setTimeout(() => {
                                _.push("/services/technology");
                            }, 500),
                                u.current.addEventListener("timeupdate", function (e) {
                                    var t;
                                    (null == u ? void 0 : null === (t = u.current) || void 0 === t ? void 0 : t.currentTime) && localStorage.setItem("butterfly-time", u.current.currentTime.toString());
                                });
                        },
                        videoRef: u,
                    }
                );
            };
            var _ = i(67224),
                p = (e) => {
                    let { data: t, widget_type: i, id: l, propRef: a } = e,
                        { main: r, handleClick: o, videoRef: s } = u({ style: c(), propRef: a });
                    return (0, n.jsx)("section", {
                        className: "".concat(c().section),
                        ref: r,
                        children: (0, n.jsx)("div", {
                            className: "container",
                            children: (0, n.jsxs)("div", {
                                className: "".concat(c().textWrapper),
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: "".concat(c().textAnimInner),
                                        children: [
                                            (0, n.jsxs)("h3", {
                                                className: "".concat(c().textHero, " ").concat(c().experience, " ").concat(c().technology),
                                                children: [
                                                    (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "T" }) }),
                                                    (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "e" }) }),
                                                    (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "c" }) }),
                                                    (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "h" }) }),
                                                    (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "n" }) }),
                                                    (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "o" }) }),
                                                    (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "l" }) }),
                                                    (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "o" }) }),
                                                    (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "g" }) }),
                                                    (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "y" }) }),
                                                ],
                                            }),
                                            (0, n.jsxs)("h2", {
                                                className: "".concat(c().textHero, " ").concat(c().design),
                                                children: [
                                                    (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "B" }) }),
                                                    (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "u" }) }),
                                                    (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "i" }) }),
                                                    (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "l" }) }),
                                                    (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "d" }) }),
                                                ],
                                            }),
                                            (0, n.jsx)("div", {
                                                className: "".concat(c().butterfly),
                                                children: (0, n.jsx)("video", {
                                                    className: c().video,
                                                    width: "100%",
                                                    height: "100%",
                                                    loop: !0,
                                                    muted: !0,
                                                    autoPlay: !0,
                                                    playsInline: !0,
                                                    ref: s,
                                                    children: (0, n.jsx)("source", { src: "/video/build1.mp4", type: "video/mp4" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)("div", {
                                        className: "".concat(c().content),
                                        children: (0, n.jsxs)("div", {
                                            className: "".concat(c().content_wrap),
                                            children: [
                                                (0, n.jsxs)("p", {
                                                    children: [
                                                        (0, n.jsx)("span", { children: "Constantly adopting cutting edge technology" }),
                                                        (0, n.jsx)("span", { children: "for your enterprise to harness its endless " }),
                                                        (0, n.jsx)("span", { children: "possibilities and leave a global imprint" }),
                                                    ],
                                                }),
                                                (0, n.jsxs)("button", { onClick: o, children: ["Learn more", (0, n.jsx)(_.Z, { icon: "arrow-right", size: "16", color: "#fff" })] }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    });
                };
        },
        39052: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return N;
                    },
                });
            var n = i(57437);
            i(99321);
            var l = i(74241),
                c = i.n(l),
                a = i(2265),
                r = i(42815),
                o = i(79123),
                s = i(42716),
                d = i(69023);
            r.p8.registerPlugin(s.i);
            var u = (e) => {
                    var t;
                    let i = (0, a.useRef)(),
                        n = (0, a.useRef)(),
                        { setOverWriteHeader: l } = (0, d.A)(),
                        c = (null === (t = window) || void 0 === t ? void 0 : t.innerWidth) > 991;
                    return (
                        (0, a.useEffect)(() => {
                            let t = r.p8.context((t) => {
                                if (c) {
                                    let c = t.selector(".".concat(e.title_anim));
                                    r.p8.timeline({ scrollTrigger: { trigger: i.current, pin: i.current, end: "600%", anticipatePin: 1 } }),
                                        n && n.current.classList.add("anim"),
                                        r.p8.to(c, { scrollTrigger: { trigger: n.current, start: "5.8%", end: "6%", scrub: !0 }, autoAlpha: 0, ease: o.Yp.easeInOut }),
                                        r.p8.timeline({
                                            scrollTrigger: {
                                                trigger: n.current,
                                                start: "-9% top",
                                                end: "bottom bottom",
                                                onLeave: () => l(!1),
                                                onEnterBack: () => l(!0),
                                                onEnter: () => l(!0),
                                                onLeaveBack: () => {
                                                    l(!1);
                                                },
                                            },
                                        });
                                }
                            }, n);
                            return () => {
                                t.revert(), l(!1);
                            };
                        }, [e, l, c]),
                        { main: i, mainWrap: n, isDesktop: c }
                    );
                },
                _ = i(74540),
                p = i(86068),
                m = i(14285),
                v = i(56758),
                h = i(86373);
            i(16898);
            var x = i(44116),
                g = i.n(x),
                f = i(62075),
                j = i(47295);
            let b = (e) => {
                    let { data: t } = e;
                    return (0, n.jsx)(j.Z, {
                        className: "".concat(g().section, " position-relative"),
                        children: (0, n.jsx)("div", {
                            className: "container",
                            children: (0, n.jsxs)("div", {
                                className: g().section_wrap,
                                children: [
                                    (0, n.jsx)("h3", { className: g().title, children: null == t ? void 0 : t.title }),
                                    (0, n.jsx)("p", { className: g().description, children: null == t ? void 0 : t.description }),
                                    (0, n.jsxs)(h.Z, {
                                        href: null == t ? void 0 : t.link,
                                        className: "".concat(g().section_link, " stretched-link"),
                                        children: [(0, n.jsx)("span", { children: "Learn More" }), (0, n.jsx)("span", { className: "ms-1", children: (0, n.jsx)(f.Z, { icon: "arrow-right", color: "#fff", size: 15 }) })],
                                    }),
                                ],
                            }),
                        }),
                    });
                },
                w = [
                    { title: "Design", description: "Intelligent design is the essence of nature; that’s our inspiration in crafting tomorrow’s tech realm.", link: "/services/experience-design" },
                    { title: "Build", description: "Constantly adopting cutting edge technology for your enterprise to harness its endless possibilities and leave a global imprint.", link: "/services/technology" },
                    { title: "Market", description: "Experts in solving the WHY, WHERE and HOW of propelling your business to new frontiers.", link: "/services/digital-marketing" },
                ];
            var N = (e) => {
                let { data: t, widget_type: i, id: l } = e,
                    { main: a, mainWrap: r, isDesktop: o } = u(c());
                return (0, n.jsx)(n.Fragment, {
                    children: o
                        ? (0, n.jsxs)("section", {
                              className: "".concat(c().section),
                              ref: r,
                              children: [
                                  (0, n.jsx)("div", { className: "".concat(c().title_anim), children: (0, n.jsx)(m.default, { propRef: r }) }),
                                  (0, n.jsxs)("div", {
                                      className: "".concat(c().section_inner),
                                      ref: a,
                                      children: [
                                          (0, n.jsx)("div", { className: c().section_item, children: (0, n.jsx)(p.default, { propRef: r }) }),
                                          (0, n.jsx)("div", { className: c().section_item, children: (0, n.jsx)(_.default, { propRef: r }) }),
                                          (0, n.jsx)("div", { className: c().section_item, children: (0, n.jsx)(v.default, { propRef: r }) }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, n.jsx)("section", { className: "".concat(c().section_mobile), children: null == w ? void 0 : w.map((e, t) => (0, n.jsx)(b, { data: e }, t)) }),
                });
            };
        },
        65110: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return p;
                    },
                });
            var n = i(57437),
                l = i(36742),
                c = i(32240),
                a = i.n(c),
                r = i(2265),
                o = i(42815),
                s = i(42716);
            o.p8.config({ force3D: !0 }), o.p8.registerPlugin(s.i);
            var d = (e) => {
                    let { style: t } = e,
                        i = (0, r.useRef)();
                    return (
                        (0, r.useLayoutEffect)(() => {
                            let e = o.p8.context((e) => {
                                let i = e.selector(".".concat(t.block_count)),
                                    n = e.selector(".".concat(t.block_count__num)),
                                    l = e.selector(".".concat(t.block_count__num1, " span")),
                                    c = e.selector(".".concat(t.block_count__num2, " span")),
                                    a = e.selector(".".concat(t.block_count__num3, " span")),
                                    r = e.selector(".".concat(t.block_count__add, " span")),
                                    d = e.selector(".".concat(t.content_title, " span span")),
                                    u = e.selector(".".concat(t.fade_item));
                                s.i.matchMedia({
                                    "(min-width: 992px)": function () {
                                        o.p8.set(n, { transformStyle: "preserve-3d" }),
                                            "1" == !localStorage.getItem("industriesAnimStarted") &&
                                                o.p8.from(a, {
                                                    textContent: "".concat(2),
                                                    duration: 1.5,
                                                    ease: "power1.easeIn",
                                                    snap: { textContent: 1 },
                                                    stagger: {
                                                        each: 1,
                                                        onUpdate: function () {
                                                            this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent);
                                                        },
                                                    },
                                                }),
                                            o.p8.set(r, { scale: 0.5, autoAlpha: 0, ease: "Power3.easeOut", duration: 1.5 }),
                                            o.p8.set(i, { autoAlpha: 0 }),
                                            o.p8.set(u, { y: 80, autoAlpha: 0 });
                                        let e = o.p8.to(l, { yPercent: -200, ease: "Power3.easeOut", duration: 1.5 }),
                                            t = o.p8.to(c, { yPercent: -300, ease: "Power3.easeOut", duration: 1.5 }),
                                            s = o.p8.to(d, { y: 0, yPercent: 0, ease: "Power3.easeOut", stagger: 0.1, duration: 1.2 }),
                                            _ = o.p8.to(u, { y: 0, autoAlpha: 1, ease: "easeOut", stagger: 0.08, duration: 0.6 }),
                                            p = o.p8.to(r, {
                                                scale: 1,
                                                autoAlpha: 1,
                                                ease: "Power3.easeOut",
                                                duration: 1,
                                                onComplete: () => {
                                                    localStorage.setItem("industriesAnimStarted", "1");
                                                },
                                            }),
                                            m = o.p8
                                                .timeline({ paused: !0 })
                                                .add(s)
                                                .add(_, "<.3")
                                                .add(o.p8.to(i, { autoAlpha: 1, duration: 0.5 }), 0)
                                                .add(e, "<")
                                                .add(t, "<")
                                                .add(p, "<");
                                        "1" == !localStorage.getItem("industriesAnimStarted") ? m.play(0) : m.play(4);
                                    },
                                    "(min-width: 600px) and (max-width: 959px)": function () {},
                                    "(max-width: 599px)": function () {},
                                    all: function () {},
                                });
                            }, i);
                            return () => e.revert();
                        }, []),
                        { main: i }
                    );
                },
                u = i(29211),
                _ = i(16898),
                p = (e) => {
                    var t, i, c, r, o, s;
                    let { data: p, widget_type: m, id: v } = e,
                        { main: h } = d({ style: a() }),
                        { isMobile: x } = (0, _.Z)();
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(l.default, { first: "second" }),
                            (0, n.jsx)("section", {
                                ref: h,
                                className: a().section,
                                id: "".concat(m).concat(v),
                                children: (0, n.jsx)("div", {
                                    className: "container",
                                    children: (0, n.jsxs)("div", {
                                        className: a().content,
                                        children: [
                                            (null == p ? void 0 : null === (t = p.titles) || void 0 === t ? void 0 : t.length) !== 0 &&
                                                (0, n.jsx)("h1", {
                                                    className: "ttl-120 ".concat(a().content_title, " mb-1 mb-lg-3 mb-lg-5"),
                                                    children: null == p ? void 0 : null === (i = p.titles) || void 0 === i ? void 0 : i.map((e) => (0, n.jsx)("span", { children: (0, n.jsxs)("span", { children: [" ", e, " "] }) }, e)),
                                                }),
                                            (0, n.jsx)("div", {
                                                className: a().content_wrap,
                                                children: (0, n.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                        (0, n.jsxs)("div", {
                                                            className: "col-lg",
                                                            children: [
                                                                (null == p ? void 0 : p.description) &&
                                                                    (0, n.jsx)("p", { className: "ttl-20 ".concat(a().content_description, " ").concat(a().fade_item, " mb-2 mb-lg-5"), children: null == p ? void 0 : p.description }),
                                                                (0, n.jsx)("div", {
                                                                    className: "".concat(a().fade_item, " d-none d-lg-block ").concat(a().btn_wrap),
                                                                    children: (0, n.jsx)(u.Z, {
                                                                        link: null == p ? void 0 : null === (c = p.button) || void 0 === c ? void 0 : c.link,
                                                                        label: null == p ? void 0 : null === (r = p.button) || void 0 === r ? void 0 : r.label,
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                        (0, n.jsx)("div", {
                                                            className: "col-lg-auto mb-1 mb-lg-0",
                                                            children: (0, n.jsxs)("div", {
                                                                className: a().block,
                                                                children: [
                                                                    (0, n.jsxs)("div", {
                                                                        className: a().block_count,
                                                                        children: [
                                                                            (0, n.jsx)("div", { className: "".concat(a().block_count__num, " ").concat(a().block_count__num3), children: (0, n.jsx)("span", { children: "15" }) }),
                                                                            (0, n.jsx)("div", { className: a().block_count__add, children: (0, n.jsx)("span", { children: "+" }) }),
                                                                        ],
                                                                    }),
                                                                    (0, n.jsxs)("div", {
                                                                        className: "d-none ".concat(a().block_count),
                                                                        children: [
                                                                            (0, n.jsxs)("div", {
                                                                                className: "".concat(a().block_count__num, " ").concat(a().block_count__num1),
                                                                                children: [(0, n.jsx)("span", { children: "0" }), (0, n.jsx)("span", { children: "1" }), (0, n.jsx)("span", { children: "2" })],
                                                                            }),
                                                                            (0, n.jsxs)("div", {
                                                                                className: "".concat(a().block_count__num, " ").concat(a().block_count__num2),
                                                                                children: [
                                                                                    (0, n.jsx)("span", { children: "1" }),
                                                                                    (0, n.jsx)("span", { children: "4" }),
                                                                                    (0, n.jsx)("span", { children: "8" }),
                                                                                    (0, n.jsx)("span", { children: "0" }),
                                                                                ],
                                                                            }),
                                                                            (0, n.jsx)("div", { className: a().block_count__add, children: (0, n.jsx)("span", { children: "+" }) }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            (0, n.jsx)("div", {
                                                className: "".concat(a().fade_item, " d-lg-none  ").concat(a().btn_wrap),
                                                children: (0, n.jsx)(u.Z, {
                                                    isFill: !0,
                                                    link: null == p ? void 0 : null === (o = p.button) || void 0 === o ? void 0 : o.link,
                                                    label: null == p ? void 0 : null === (s = p.button) || void 0 === s ? void 0 : s.label,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    });
                };
        },
        56758: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return p;
                    },
                });
            var n = i(57437),
                l = i(67224),
                c = i(56357),
                a = i.n(c),
                r = i(16898),
                o = i(79123),
                s = i(42815),
                d = i(24033),
                u = i(2265);
            s.p8.config({ force3D: !0 });
            let _ = (e) => {
                let { style: t, propRef: i } = e,
                    { isMobile: n } = (0, r.Z)(),
                    [l, c] = (0, u.useState)(null),
                    a = (0, u.useRef)(null),
                    _ = (0, u.useRef)(null),
                    p = (0, d.useRouter)(),
                    m = (0, d.usePathname)();
                return (
                    (0, u.useLayoutEffect)(() => {
                        c(i);
                        let e = s.p8.context((e) => {
                            var i, c;
                            let r = "/services/digital-marketing" === m;
                            if ((null == l ? void 0 : l.current) || r) {
                                let d = e.selector(".".concat(t.design, " > span")),
                                    u = e.selector(".".concat(t.design)),
                                    p = e.selector(".".concat(t.design, " > span > span")),
                                    m = e.selector(".".concat(t.butterfly)),
                                    v = e.selector(".".concat(t.content_wrap, " p span")),
                                    h = e.selector(".".concat(t.content_wrap, " button")),
                                    x = e.selector(".".concat(t.experience)),
                                    g = e.selector(".".concat(t.experience, " > span")),
                                    f = e.selector(".".concat(t.textWrapper)),
                                    j = e.selector(".".concat(t.hidden_one));
                                if (r) {
                                    (null === (i = localStorage) || void 0 === i ? void 0 : i.getItem("butterfly-time"))
                                        ? (s.p8.set(v, { autoAlpha: 1 }), s.p8.set(h, { autoAlpha: 1 }))
                                        : (s.p8.set(v, { autoAlpha: 0 }), s.p8.set(h, { autoAlpha: 0, pointerEvents: "none" })),
                                        n && s.p8.set(f, { scale: 0.8 }),
                                        s.p8.set(f, { position: "fixed", pointerEvents: "none" }),
                                        s.p8.set(p, { autoAlpha: 1, scale: 1, skewX: 0 }),
                                        s.p8.set(d, { autoAlpha: 1, filter: "blur(0px)", scaleX: 1, x: 0 }),
                                        s.p8.set(m, { yPercent: -50, xPercent: 0, scale: 1, duration: 1, autoAlpha: 1 }),
                                        s.p8.set(u, { xPercent: -0, scale: 1, autoAlpha: 1 }),
                                        s.p8.set(x, { scale: 0.8, yPercent: -20, xPercent: 7 }),
                                        g.map((e, t) => s.p8.set(e, { x: -((t + 1) * 10) })),
                                        (_.current.currentTime = Number(null === (c = localStorage) || void 0 === c ? void 0 : c.getItem("butterfly-time")));
                                    let e = s.p8.timeline();
                                    e.to(j, { width: "auto", delay: 0.5 }),
                                        e.to(u, { yPercent: 66, xPercent: 0, left: 0, duration: 1.1, scale: 0.8, onComplete: () => localStorage.removeItem("butterfly-time") }),
                                        e.to(g, { autoAlpha: 1, filter: "blur(0px)", scaleX: 1, stagger: 0.03, x: 0, duration: 0.9 }, "<+.5"),
                                        e.to(v, { autoAlpha: 0, x: -40, filter: "blur(10px)", duration: 1.1 }, "<-.5"),
                                        e.to(h, { autoAlpha: 0, x: -40, filter: "blur(10px)", duration: 1.1 }, "<");
                                    let t = s.p8.timeline({ scrollTrigger: { trigger: a.current, start: "bottom 90%", end: "bottom 0%", toggleActions: "play complete play reverse" } });
                                    t.to(x, { yPercent: -110, autoAlpha: 0, ease: o.EA.easeInOut, stagger: 0.005, duration: 0.5 }),
                                        t.to(d, { yPercent: -110, autoAlpha: 0, ease: o.EA.easeInOut, stagger: 0.005, duration: 0.5 }, "-=.5"),
                                        t.to(m, { yPercent: -80, autoAlpha: 0, ease: o.EA.easeInOut, stagger: 0.005, duration: 0.5 }, "-=.5");
                                } else {
                                    s.p8.set(h, { y: 40, skewY: 4, autoAlpha: 0, filter: "blur(3px)", duration: 0.9, ease: o.Lp.easeOut }),
                                        s.p8.set(v, { y: 40, skewY: 4, autoAlpha: 0, filter: "blur(3px)", duration: 0.9, ease: o.Lp.easeOut, stagger: -0.05 }),
                                        s.p8.set(m, { yPercent: -50, xPercent: -10, scale: 0.6 }),
                                        s.p8.set(p, { y: 0, x: 0, z: 0, autoAlpha: 0, filter: "blur(10px)" }),
                                        s.p8.set(u, { xPercent: -0 }),
                                        s.p8.set(d, { autoAlpha: 1 }),
                                        s.p8.set(p, { transformPerspective: 1500 });
                                    let e = s.p8.timeline({ scrollTrigger: { trigger: l.current, start: "45.5%", end: "65%", scrub: 1.5, preventOverlaps: !0 } });
                                    e.to(p, { y: 0, rotateX: 0, stagger: 0.08, x: 0, z: 0, duration: 0.8, autoAlpha: 1, filter: "blur(0px)" }),
                                        e.to(u, { scale: 1, xPercent: -0 }, "<"),
                                        e.to(m, { xPercent: 0, scale: 1, autoAlpha: 1, duration: 1 }, "<"),
                                        e.to(v, { y: 0, skewY: 0, autoAlpha: 1, filter: "blur(0px)", duration: 0.9, ease: o.Lp.easeOut, stagger: 0.05 }, "<+.5"),
                                        e.to(h, { y: 0, skewY: 0, autoAlpha: 1, filter: "blur(0px)", duration: 0.9, ease: o.Lp.easeOut }, "<+.3");
                                    let t = s.p8.timeline({ paused: !0, scrollTrigger: { trigger: l.current, start: "75%", end: "90%", scrub: 0.05, preventOverlaps: !0 } });
                                    t.fromTo(a.current, { autoAlpha: 1, yPercent: 0 }, { autoAlpha: 0.5, yPercent: -15 });
                                }
                            }
                        }, a);
                        return () => {
                            e.revert();
                        };
                    }, [l]),
                    {
                        main: a,
                        handleClick: () => {
                            setTimeout(() => {
                                p.push("/services/digital-marketing");
                            }, 500),
                                _.current.addEventListener("timeupdate", function (e) {
                                    var t;
                                    (null == _ ? void 0 : null === (t = _.current) || void 0 === t ? void 0 : t.currentTime) && localStorage.setItem("butterfly-time", _.current.currentTime.toString());
                                });
                        },
                        videoRef: _,
                    }
                );
            };
            var p = (e) => {
                let { propRef: t } = e,
                    { main: i, videoRef: c, handleClick: r } = _({ style: a(), propRef: t });
                return (0, n.jsx)("section", {
                    className: "".concat(a().section),
                    ref: i,
                    children: (0, n.jsx)("div", {
                        className: "container",
                        children: (0, n.jsxs)("div", {
                            className: "".concat(a().textWrapper),
                            children: [
                                (0, n.jsxs)("div", {
                                    className: "".concat(a().textAnimInner),
                                    children: [
                                        (0, n.jsxs)("h3", {
                                            className: "".concat(a().textHero, " ").concat(a().experience),
                                            children: [
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "D" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "i" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "g" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "i" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "t" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "a" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "l" }) }),
                                            ],
                                        }),
                                        (0, n.jsxs)("h2", {
                                            className: "".concat(a().textHero, " ").concat(a().design),
                                            children: [
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "M" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "a" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "r" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "k" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "e" }) }),
                                                (0, n.jsx)("span", { children: (0, n.jsx)("span", { children: "t" }) }),
                                                (0, n.jsx)("span", { className: a().hidden_one, children: (0, n.jsx)("span", { children: "i" }) }),
                                                (0, n.jsx)("span", { className: a().hidden_one, children: (0, n.jsx)("span", { children: "n" }) }),
                                                (0, n.jsx)("span", { className: a().hidden_one, children: (0, n.jsx)("span", { children: "g" }) }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", {
                                    className: "".concat(a().butterfly),
                                    children: (0, n.jsx)("video", {
                                        className: a().video,
                                        width: "100%",
                                        height: "100%",
                                        preload: "none",
                                        loop: !0,
                                        muted: !0,
                                        autoPlay: !0,
                                        playsInline: !0,
                                        ref: c,
                                        load: "true",
                                        children: (0, n.jsx)("source", { src: "/video/market-video-home.mp4", type: "video/mp4" }),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: "".concat(a().content),
                                    children: (0, n.jsxs)("div", {
                                        className: "".concat(a().content_wrap),
                                        children: [
                                            (0, n.jsxs)("p", {
                                                children: [
                                                    (0, n.jsx)("span", { children: "Experts in solving the WHY, WHERE " }),
                                                    "  ",
                                                    (0, n.jsx)("span", { children: "and HOW of propelling your" }),
                                                    " ",
                                                    (0, n.jsx)("span", { children: "business to new frontiers" }),
                                                ],
                                            }),
                                            (0, n.jsxs)("button", { onClick: r, children: ["Learn more", (0, n.jsx)(l.Z, { icon: "arrow-right", size: "16", color: "#fff" })] }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                });
            };
        },
        69986: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return _;
                    },
                });
            var n = i(57437),
                l = i(16898),
                c = i(79123),
                a = i(42815),
                r = i(2265);
            a.p8.config({ force3D: !0 });
            let o = (e) => {
                let { style: t } = e,
                    [i, n] = (0, r.useState)(!1),
                    o = (0, r.useRef)(null),
                    s = (0, r.useRef)(null),
                    { isDesktop: d } = (0, l.Z)(),
                    u = (e) => {
                        let { item: t, direction: i, title: n, video: l, index: r } = e;
                        "topToCenter" === i
                            ? (a.p8.to(t, { opacity: 1, yPercent: 0, ease: c.EA.easeInOut, filter: "blur(0px)", duration: 0.45 }),
                              a.p8.to(n[r], { opacity: 1, duration: 0.3 }),
                              a.p8.to(l[r], { opacity: 1, x: 0, scale: 1, ease: c.EA.easeInOut, duration: 0.45 }))
                            : "centerToTop" === i
                            ? (a.p8.to(t, { opacity: 0, yPercent: -15, ease: c.EA.easeInOut, filter: "blur(10px)", duration: 0.45 }),
                              a.p8.to(n[r], { opacity: 0.3, duration: 0.3 }),
                              a.p8.to(l[r], { opacity: 0, scale: 0.6, x: -230, ease: c.EA.easeInOut, duration: 0.45 }))
                            : "centerToBottom" === i &&
                              (a.p8.to(t, { opacity: 0, yPercent: 15, ease: c.EA.easeInOut, filter: "blur(10px)", duration: 0.45 }),
                              a.p8.to(n[r], { opacity: 0.3, duration: 0.3 }),
                              a.p8.to(l[r], { opacity: 0, scale: 0.6, x: 230, ease: c.EA.easeInOut, duration: 0.45 }));
                    };
                return (
                    (0, r.useLayoutEffect)(() => {
                        let e = a.p8.context((e) => {
                            let i = e.selector(".".concat(t.title)),
                                n = e.selector(".".concat(t.title, " span")),
                                l = e.selector(".".concat(t.content_wrapper)),
                                r = e.selector(".".concat(t.content_wrapper, " p")),
                                _ = e.selector(".".concat(t.content_wrapper, " h3")),
                                p = e.selector(".".concat(t.item_video)),
                                m = e.selector(".".concat(t.item_video_inner));
                            a.p8.timeline({ scrollTrigger: { pin: !0, end: "250%", trigger: o.current } }),
                                a.p8.set(n, { y: 200, autoAlpha: 0 }),
                                a.p8.set(r, { autoAlpha: 0, yPercent: 15 }),
                                a.p8.set(_, { autoAlpha: 0, y: 50 }),
                                a.p8.set(m, { autoAlpha: 0, yPercent: 15 }),
                                setTimeout(() => {
                                    a.p8.set(s.current, { opacity: 1 });
                                }, 400);
                            let v = a.p8.timeline({ scrollTrigger: { trigger: o.mainOuter, start: "top+=".concat(innerHeight, " 90%"), end: "top+=".concat(innerHeight, " 0%"), toggleActions: "play complete play reverse" } });
                            v.to(n, { y: 0, autoAlpha: 1, ease: c.EA.easeInOut, stagger: 0.04 }, "+=.15"),
                                d || v.to(_, { y: 0, autoAlpha: 1, ease: c.EA.easeInOut, duration: 0.45 }, "-=.45"),
                                v.to(r, { yPercent: 0, autoAlpha: 1, ease: c.EA.easeInOut, duration: 0.45 }, "-=.45"),
                                v.to(m, { yPercent: 0, autoAlpha: 1, ease: c.EA.easeInOut, duration: 0.45 }, "-=.45"),
                                l.map((e, t) => {
                                    0 === t
                                        ? (a.p8.set(e, { opacity: 1, y: 0, filter: "blur(0)" }), a.p8.set(i[0], { opacity: 1 }), a.p8.set(p[0], { opacity: 1 }))
                                        : (a.p8.set(e, { opacity: 0, yPercent: 15, filter: "blur(10px)" }), a.p8.set(i[t], { opacity: 0.3 }), a.p8.set(p[t], { opacity: 0, x: 230 }));
                                    let n = a.p8.timeline({
                                        scrollTrigger: {
                                            trigger: s.current,
                                            start: "".concat(((100 / l.length) * t) / 1.8 + 12, "% top"),
                                            end: "".concat(((100 / l.length) * (t + 1)) / 1.8 + 12, "% top"),
                                            onEnter: () => (0 === t ? a.p8.set(e, { opacity: 1, y: 0 }) : u({ item: e, direction: "topToCenter", title: i, video: p, index: t })),
                                            onLeave: () => t + 1 !== l.length && u({ item: e, direction: "centerToTop", title: i, video: p, index: t }),
                                            onLeaveBack: () => (0 === t ? a.p8.set(e, { opacity: 1, y: 0 }) : u({ item: e, direction: "centerToBottom", title: i, video: p, index: t })),
                                            onEnterBack: () => u({ item: e, direction: "topToCenter", title: i, video: p, index: t }),
                                        },
                                    });
                                    0 === t && n.play();
                                });
                        }, o);
                        return () => {
                            e.revert();
                        };
                    }, []),
                    { main: o, mainOuter: s }
                );
            };
            var s = i(313),
                d = i.n(s),
                u = i(99321),
                _ = () => {
                    let { main: e, mainOuter: t } = o({ style: d() });
                    return (0, n.jsx)("section", {
                        className: "".concat(d().section),
                        ref: t,
                        children: (0, n.jsx)("div", {
                            className: "".concat(d().main_wrapper_pin),
                            ref: e,
                            children: (0, n.jsx)("div", {
                                className: "".concat(d().main_wrapper),
                                children: (0, n.jsx)("div", {
                                    className: "container",
                                    children: (0, n.jsxs)("div", {
                                        className: "row row-cols-lg-2",
                                        children: [
                                            (0, n.jsx)("div", {
                                                className: "".concat(d().items_wrapper),
                                                children: (0, n.jsxs)("div", {
                                                    className: "".concat(d().items),
                                                    children: [
                                                        (0, n.jsx)("div", {
                                                            className: "".concat(d().item),
                                                            children: (0, n.jsx)("h4", { className: "".concat(d().title, " fw-light"), children: (0, n.jsx)("span", { children: "Click." }) }),
                                                        }),
                                                        (0, n.jsx)("div", {
                                                            className: "".concat(d().item),
                                                            children: (0, n.jsx)("h4", { className: "".concat(d().title, " fw-light"), children: (0, n.jsx)("span", { children: "Convert." }) }),
                                                        }),
                                                        (0, n.jsx)("div", {
                                                            className: "".concat(d().item),
                                                            children: (0, n.jsx)("h4", { className: "".concat(d().title, " fw-light"), children: (0, n.jsx)("span", { children: "Conquer." }) }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            (0, n.jsx)("div", {
                                                className: "".concat(d().item_details_Wrapper),
                                                children: (0, n.jsxs)("div", {
                                                    className: "".concat(d().item_detail_inner),
                                                    children: [
                                                        (0, n.jsxs)("div", {
                                                            className: "".concat(d().item_details_content),
                                                            children: [
                                                                (0, n.jsx)("div", {
                                                                    className: "".concat(d().item_video),
                                                                    children: (0, n.jsx)("div", {
                                                                        className: "".concat(d().item_video_inner),
                                                                        children: (0, n.jsx)(u.Z, { src: "/image/services/market/01-1.png", fill: !0, alt: "cosmic cover" }),
                                                                    }),
                                                                }),
                                                                (0, n.jsxs)("div", {
                                                                    className: "".concat(d().content_wrapper),
                                                                    children: [
                                                                        (0, n.jsx)("h3", { children: "Click." }),
                                                                        (0, n.jsx)("p", {
                                                                            className: "fw-light",
                                                                            children:
                                                                                "Supercharge your clickthrough rates with the magic of digital marketing, leaving you spellbound with increased engagement, for every click is a new opportunity.",
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        (0, n.jsxs)("div", {
                                                            className: "".concat(d().item_details_content),
                                                            children: [
                                                                (0, n.jsx)("div", {
                                                                    className: "".concat(d().item_video),
                                                                    children: (0, n.jsx)("div", {
                                                                        className: "".concat(d().item_video_inner),
                                                                        children: (0, n.jsx)(u.Z, { src: "/image/services/market/02-1.png", fill: !0, alt: "cosmic cover" }),
                                                                    }),
                                                                }),
                                                                (0, n.jsxs)("div", {
                                                                    className: "".concat(d().content_wrapper),
                                                                    children: [
                                                                        (0, n.jsx)("h3", { children: "Convert." }),
                                                                        (0, n.jsx)("p", {
                                                                            className: "fw-light",
                                                                            children:
                                                                                "Skyrocket your conversion rates with results-driven and advanced digital marketing solutions, igniting your online presence and bringing you closer to your goals.",
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        (0, n.jsxs)("div", {
                                                            className: "".concat(d().item_details_content),
                                                            children: [
                                                                (0, n.jsx)("div", {
                                                                    className: "".concat(d().item_video),
                                                                    children: (0, n.jsx)("div", {
                                                                        className: "".concat(d().item_video_inner),
                                                                        children: (0, n.jsx)(u.Z, { src: "/image/services/market/03-1.png", fill: !0, alt: "cosmic cover" }),
                                                                    }),
                                                                }),
                                                                (0, n.jsxs)("div", {
                                                                    className: "".concat(d().content_wrapper),
                                                                    children: [
                                                                        (0, n.jsx)("h3", { children: "Conquer." }),
                                                                        (0, n.jsx)("p", {
                                                                            className: "fw-light",
                                                                            children:
                                                                                "Get ready to explore the new horizons of brand growth through the incredible secret formula we give to your aspirations, helping you extend your influence on users.",
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    });
                };
        },
        88409: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return u;
                    },
                });
            var n = i(57437),
                l = i(99321),
                c = i(44107),
                a = i.n(c),
                r = i(2265),
                o = i(42815),
                s = i(42716);
            o.p8.registerPlugin(s.i);
            var d = (e) => {
                let { style: t } = e,
                    i = (0, r.useRef)();
                return (
                    (0, r.useLayoutEffect)(() => {
                        let e = o.p8.context((e) => {}, i);
                        return () => e.revert();
                    }, []),
                    { main: i }
                );
            };
            i(11030), i(67224);
            var u = (e) => {
                var t;
                let { data: i, widget_type: c, id: r } = e,
                    { main: o } = d({ style: a() });
                return (0, n.jsx)("section", {
                    className: "".concat(a().section),
                    ref: o,
                    id: "".concat(c).concat(r),
                    children: (0, n.jsxs)("div", {
                        className: "container",
                        children: [
                            (0, n.jsxs)("div", {
                                className: "row ".concat(a().row, " row-cols-lg-2"),
                                children: [
                                    (0, n.jsx)("div", {
                                        className: a().col_left,
                                        children:
                                            (null == i ? void 0 : i.title) &&
                                            (0, n.jsx)("div", {
                                                className: "".concat(a().heading),
                                                children: (0, n.jsx)("h2", { className: "".concat(a().title, " ttl-80 fw-regular mb-2 mb-lg-2"), children: null == i ? void 0 : i.title }),
                                            }),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: a().col_right,
                                        children:
                                            (null == i ? void 0 : i.description) &&
                                            (0, n.jsx)("div", { className: "".concat(a().desc), children: (0, n.jsx)("p", { className: "".concat(a().content, " ttl-18 mb-0 mb-lg-2"), children: null == i ? void 0 : i.description }) }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)("div", {
                                className: "row ".concat(a().card_wrap, " row-cols-md-3"),
                                children:
                                    null == i
                                        ? void 0
                                        : null === (t = i.cards) || void 0 === t
                                        ? void 0
                                        : t.map((e, t) => {
                                              var i, c, r;
                                              return (0, n.jsx)(
                                                  "div",
                                                  {
                                                      className: a().card,
                                                      children: (0, n.jsx)("div", {
                                                          className: "".concat(a().card_wrap_card_one),
                                                          children: (0, n.jsxs)("div", {
                                                              className: a().models_card,
                                                              children: [
                                                                  (0, n.jsx)("div", {
                                                                      className: " ".concat(a().logo, " ratio"),
                                                                      children: (0, n.jsx)(l.Z, {
                                                                          fill: !0,
                                                                          src: null == e ? void 0 : null === (i = e.image) || void 0 === i ? void 0 : i.url,
                                                                          alt: null == e ? void 0 : null === (c = e.image) || void 0 === c ? void 0 : c.alternative_text,
                                                                      }),
                                                                  }),
                                                                  (null == e ? void 0 : e.title) && (0, n.jsx)("h3", { children: null == e ? void 0 : e.title }),
                                                                  (0, n.jsx)("ul", { children: null == e ? void 0 : null === (r = e.job_description) || void 0 === r ? void 0 : r.map((e) => (0, n.jsx)("li", { children: e }, e)) }),
                                                              ],
                                                          }),
                                                      }),
                                                  },
                                                  t
                                              );
                                          }),
                            }),
                        ],
                    }),
                });
            };
        },
        57015: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return h;
                    },
                });
            var n = i(57437),
                l = i(62075),
                c = i(16010),
                a = i(70553),
                r = i.n(a),
                o = i(22312),
                s = (e) => {
                    var t, i;
                    let { style: l, item: c } = e;
                    return (0, n.jsx)("div", {
                        className: l.simpleCard,
                        children: (0, n.jsxs)("div", {
                            className: "".concat(l.simpleCardWrapper),
                            children: [
                                (0, n.jsx)("div", {
                                    className: "".concat(l.icon, " ratio ratio-1 mb-2"),
                                    children: (0, n.jsx)(o.Z, {
                                        src: null == c ? void 0 : null === (t = c.image) || void 0 === t ? void 0 : t.url,
                                        alt: null == c ? void 0 : null === (i = c.image) || void 0 === i ? void 0 : i.alternative_text,
                                        width: 300,
                                        height: 200,
                                    }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: l.contentWrapper,
                                    children: [
                                        (null == c ? void 0 : c.title) && (0, n.jsx)("h4", { className: "ttl-40 mb-0 lh-title fw-regular", children: null == c ? void 0 : c.title }),
                                        (null == c ? void 0 : c.description) && (0, n.jsx)("p", { className: "fs-18 lh-primary mb-0", children: null == c ? void 0 : c.description }),
                                    ],
                                }),
                            ],
                        }),
                    });
                },
                d = i(16898),
                u = i(42815),
                _ = i(79123),
                p = i(2265);
            u.p8.config({ force3D: !0 });
            let m = (e) => {
                let { style: t } = e,
                    i = (0, p.useRef)(null),
                    n = (0, p.useRef)(null),
                    { isDesktop: l } = (0, d.Z)();
                return (
                    (0, p.useLayoutEffect)(() => {
                        let e = 0,
                            c = u.p8.context((c) => {
                                if (l) {
                                    let l = c.selector(".".concat(t.simpleCard)),
                                        a = c.selector(".".concat(t.listing_wrapper_inner));
                                    u.p8.timeline({ scrollTrigger: { pin: i.current, end: "150%", trigger: i.current, markers: !1, anticipatePin: 1 } }),
                                        l.map((t, i) => {
                                            i + 1 !== l.length &&
                                                u.p8.timeline({
                                                    scrollTrigger: {
                                                        trigger: n.current,
                                                        start: "".concat((100 / l.length) * (i / 1.5) + 8, "% top"),
                                                        end: "".concat((100 / l.length) * ((i + 1) / 1.5) + 8, "% top"),
                                                        onEnter: () => {
                                                            (e = (100 / l.length) * (i + 1)), u.p8.to(a, { y: "".concat(-e, "%"), willChange: "transition", ease: _.EA.easeInOut, duration: 0.6 });
                                                        },
                                                        onLeaveBack: () => {
                                                            (e = (100 / l.length) * i), u.p8.to(a, { y: "".concat(-e, "%"), willChange: "transition", ease: _.EA.easeInOut, duration: 0.6 });
                                                        },
                                                    },
                                                });
                                        });
                                }
                            }, i);
                        return () => c.revert();
                    }, [l]),
                    { main: i, mainWrapper: n }
                );
            };
            var v = i(99321),
                h = function (e) {
                    var t, i, a, o, u;
                    let { data: _, widget_type: p, id: h } = e,
                        { main: x, mainWrapper: g } = m({ style: r() }),
                        { width: f } = (0, d.Z)();
                    return (0, n.jsx)("section", {
                        className: "position-relative ".concat(r().join_team),
                        ref: g,
                        id: "".concat(p).concat(h),
                        children: (0, n.jsxs)("div", {
                            className: "".concat(r().join_team_wrapper),
                            ref: x,
                            children: [
                                (0, n.jsx)("figure", { className: "ratio mb-0 ".concat(r().gradient), children: (0, n.jsx)(v.Z, { src: "/image/gradient/gradient.png", fill: !0, alt: "Gradient Shape" }) }),
                                (0, n.jsx)("div", {
                                    className: "container",
                                    children: (0, n.jsx)("div", {
                                        className: "".concat(r().join_team_inner),
                                        children: (0, n.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                (0, n.jsx)("div", {
                                                    className: "col-lg-7",
                                                    children: (0, n.jsxs)("div", {
                                                        className: "".concat(r().content, " mb-4 mb-lg-0"),
                                                        children: [
                                                            (null == _ ? void 0 : _.title) && (0, n.jsx)("h4", { className: "ttl-80 lh-title fw-light mb-lg-4 mb-0 ".concat(r().title), children: null == _ ? void 0 : _.title }),
                                                            (0, n.jsxs)(c.Z, {
                                                                href: null == _ ? void 0 : null === (t = _.link) || void 0 === t ? void 0 : t.link,
                                                                className: "btn btn-primary light d-none d-lg-inline-flex",
                                                                children: [
                                                                    (0, n.jsx)("span", { children: null == _ ? void 0 : null === (i = _.link) || void 0 === i ? void 0 : i.label }),
                                                                    (0, n.jsx)("span", { children: (0, n.jsx)(l.Z, { icon: "arrow-top", size: 12 }) }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, n.jsx)("div", {
                                                    className: "col-lg-5",
                                                    children: (0, n.jsx)("div", {
                                                        className: f >= 992 ? "position-relative" : "",
                                                        children: (0, n.jsx)("div", {
                                                            className: "".concat(r().listing_wrapper),
                                                            children: (0, n.jsx)("div", {
                                                                className: "".concat(r().listing_wrapper_inner),
                                                                children: null == _ ? void 0 : null === (a = _.featuresList) || void 0 === a ? void 0 : a.map((e) => (0, n.jsx)(s, { style: r(), item: e }, null == e ? void 0 : e.title)),
                                                            }),
                                                        }),
                                                    }),
                                                }),
                                                (0, n.jsx)("div", {
                                                    className: "col-lg-5 d-block",
                                                    children: (0, n.jsxs)(c.Z, {
                                                        href: null == _ ? void 0 : null === (o = _.link) || void 0 === o ? void 0 : o.link,
                                                        className: "btn btn-primary light d-inline-flex d-lg-none w-100 w-sm-auto",
                                                        children: [
                                                            (0, n.jsx)("span", { children: null == _ ? void 0 : null === (u = _.link) || void 0 === u ? void 0 : u.label }),
                                                            (0, n.jsx)("span", { children: (0, n.jsx)(l.Z, { icon: "arrow-top", size: 12 }) }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    });
                };
        },
        887: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return _;
                    },
                });
            var n = i(57437),
                l = i(72022),
                c = i(2145),
                a = i(69862),
                r = i(30482),
                o = i.n(r),
                s = i(99321),
                d = (e) => {
                    var t, i;
                    let { item: l } = e;
                    return (0, n.jsx)("div", {
                        className: "".concat(o().item),
                        children: (0, n.jsxs)("div", {
                            className: "".concat(o().inner),
                            children: [
                                (0, n.jsx)("div", {
                                    className: "".concat(o().icon, " ratio ratio-1"),
                                    children: (0, n.jsx)(s.Z, {
                                        src: null == l ? void 0 : null === (t = l.image) || void 0 === t ? void 0 : t.url,
                                        alt: null == l ? void 0 : null === (i = l.image) || void 0 === i ? void 0 : i.alternative_text,
                                        width: 60,
                                        height: 60,
                                    }),
                                }),
                                (null == l ? void 0 : l.item) && (0, n.jsx)("h3", { className: "".concat(o().sub_title, " fs-24 fw-medium"), children: null == l ? void 0 : l.item }),
                                (null == l ? void 0 : l.subtitle) && (0, n.jsx)("p", { className: "".concat(o().sub_description, " mb-0"), children: null == l ? void 0 : l.subtitle }),
                            ],
                        }),
                    });
                },
                u = i(67224),
                _ = (e) => {
                    var t, i, r, _;
                    let { widget_type: p, id: m, data: v } = e,
                        h = { slidesPerView: "auto", pagination: !1, modules: [l.W_], navigation: { prevEl: ".prev", nextEl: ".next" }, breakpoints: { 0: { centeredSlides: !1, slidesPerView: "auto" }, 768: { slidesPerView: "auto" } } };
                    return (0, n.jsxs)("section", {
                        className: "".concat(o().section),
                        id: "".concat(p).concat(m),
                        children: [
                            (0, n.jsx)("div", {
                                className: "".concat(o().image_bg),
                                children: (0, n.jsx)(s.Z, {
                                    fill: !0,
                                    src: null == v ? void 0 : null === (t = v.background_image) || void 0 === t ? void 0 : t.url,
                                    "object-fit": "Our Philosophy",
                                    alt: null == v ? void 0 : null === (i = v.background_image) || void 0 === i ? void 0 : i.alternative_text,
                                }),
                            }),
                            (0, n.jsx)("div", {
                                className: "".concat(o().custom_container),
                                children: (0, n.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: "col-12 col-lg-4",
                                            children: (0, n.jsxs)("div", {
                                                className: "".concat(o().content),
                                                children: [
                                                    (null == v ? void 0 : v.title) && (0, n.jsx)("h2", { className: "".concat(o().title, " ttl-80 fw-regular"), children: null == v ? void 0 : v.title }),
                                                    (null == v ? void 0 : v.description) && (0, n.jsx)("p", { className: "".concat(o().description, " mb-0 fs-24 fw-light"), children: null == v ? void 0 : v.description }),
                                                    (0, n.jsxs)("div", {
                                                        className: "".concat(o().slider_wrapper),
                                                        children: [
                                                            (0, n.jsx)("div", { className: "".concat(o().prev_arrow, " prev"), children: (0, n.jsx)(u.Z, { icon: "arrow-right", color: "#fff", size: "20" }) }),
                                                            (0, n.jsx)("div", { className: "".concat(o().next_arrow, " next"), children: (0, n.jsx)(u.Z, { icon: "arrow-right", color: "#fff", size: "20" }) }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (null == v ? void 0 : null === (r = v.data_items) || void 0 === r ? void 0 : r.length) !== 0 &&
                                            (0, n.jsx)("div", {
                                                className: "col-12 col-lg-8",
                                                children: (0, n.jsx)("div", {
                                                    className: "".concat(o().slider),
                                                    children: (0, n.jsx)(a.Z, {
                                                        customSettings: h,
                                                        children: null == v ? void 0 : null === (_ = v.data_items) || void 0 === _ ? void 0 : _.map((e, t) => (0, n.jsx)(c.o5, { children: (0, n.jsx)(d, { item: e }) }, t)),
                                                    }),
                                                }),
                                            }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        40087: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return h;
                    },
                });
            var n = i(57437),
                l = i(47784),
                c = i.n(l),
                a = i(11030),
                r = i(35143),
                o = i.n(r),
                s = (e) => {
                    var t, i, l;
                    let { isPremium: c, item: r } = e;
                    return (0, n.jsxs)("div", {
                        className: "".concat(o().item, " ").concat(c ? o().premium : ""),
                        children: [
                            (null == r ? void 0 : r.title) && (0, n.jsx)("h3", { className: "".concat(o().title, " ttl-50 fw-regular"), children: null == r ? void 0 : r.title }),
                            (null == r ? void 0 : r.subtitle) && (0, n.jsx)("h5", { className: "".concat(o().title_sub, " fw-medium"), children: null == r ? void 0 : r.subtitle }),
                            (null == r ? void 0 : r.features.length) !== 0 &&
                                (0, n.jsx)("ul", {
                                    className: "".concat(o().list),
                                    children: null == r ? void 0 : null === (t = r.features) || void 0 === t ? void 0 : t.map((e) => (0, n.jsx)("li", { children: (0, n.jsx)("p", { children: e }) }, e)),
                                }),
                            (null == r ? void 0 : r.tools_title) && (0, n.jsx)("h6", { className: "".concat(o().title_sub_des), children: null == r ? void 0 : r.tools_title }),
                            (null == r ? void 0 : r.tools) && (0, n.jsx)("p", { className: "".concat(o().description), children: null == r ? void 0 : r.tools }),
                            (0, n.jsx)("div", {
                                className: "".concat(o().btn_wrapper),
                                children: (0, n.jsx)(a.Z, {
                                    label: null == r ? void 0 : null === (i = r.button) || void 0 === i ? void 0 : i.label,
                                    link: null == r ? void 0 : null === (l = r.button) || void 0 === l ? void 0 : l.link,
                                    hasColorShift: !0,
                                }),
                            }),
                        ],
                    });
                },
                d = i(16898),
                u = i(42815),
                _ = i(79123),
                p = i(2265);
            u.p8.config({ force3D: !0 });
            let m = [
                    { id: 1, title: "Startup" },
                    { id: 2, title: "Premium" },
                    { id: 3, title: "Growth" },
                ],
                v = (e) => {
                    let { style: t } = e,
                        [i, n] = (0, p.useState)(1),
                        l = (0, p.useRef)(null),
                        { isDesktop: c } = (0, d.Z)(),
                        a = (e) => {
                            u.p8.context((i) => {
                                let n = i.selector(".".concat(t.list_main_wrapper));
                                u.p8.to(n, { x: "-".concat(100 * e, "%"), ease: _.Lp.easeOut, duration: 0.4 });
                            }, l);
                        };
                    return (
                        (0, p.useEffect)(() => {
                            c || a(i);
                        }, [c]),
                        {
                            setActiveIndex: n,
                            activeIndex: i,
                            dataHeading: m,
                            handleChangeActive: (e) => {
                                a(e), n(e);
                            },
                            main: l,
                            isDesktop: c,
                        }
                    );
                };
            var h = (e) => {
                let { widget_type: t, id: i, data: l } = e,
                    { activeIndex: a, dataHeading: r, handleChangeActive: o, main: d, isDesktop: u } = v({ style: c() });
                return (0, n.jsx)("section", {
                    className: "".concat(c().section, " pricing"),
                    id: "".concat(t).concat(i),
                    ref: d,
                    children: (0, n.jsxs)("div", {
                        className: "container",
                        children: [
                            (null == l ? void 0 : l.title) &&
                                (0, n.jsx)("div", { className: "".concat(c().heading), children: (0, n.jsx)("h2", { className: "".concat(c().title, " ttl-80 mb-0 fw-regular"), children: null == l ? void 0 : l.title }) }),
                            !u &&
                                (0, n.jsx)("div", {
                                    className: "".concat(c().head_nav),
                                    children: (0, n.jsx)("ul", {
                                        children: r.map((e, t) => (0, n.jsx)("li", { children: (0, n.jsx)("button", { className: "".concat(c().btn, " ").concat(t === a ? c().active : ""), onClick: () => o(t), children: e.title }) }, t)),
                                    }),
                                }),
                            (0, n.jsx)("div", {
                                className: "".concat(c().list),
                                children: (0, n.jsx)("div", {
                                    className: "".concat(c().list_main_wrapper),
                                    children:
                                        (null == l ? void 0 : l.pricing_data.length) &&
                                        (0, n.jsx)("div", {
                                            className: "row row-col-1 row-lg-cols-3",
                                            children:
                                                (null == l ? void 0 : l.pricing_data.length) &&
                                                (null == l ? void 0 : l.pricing_data.map((e, t) => (0, n.jsx)("div", { className: "col", children: (0, n.jsx)(s, { item: e, isPremium: 1 === t }) }, null == e ? void 0 : e.title))),
                                        }),
                                }),
                            }),
                        ],
                    }),
                });
            };
        },
        86002: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return s;
                    },
                });
            var n = i(57437),
                l = i(18414),
                c = i.n(l),
                a = i(2265),
                r = i(42815),
                o = (e) => {
                    let t = (0, a.useRef)();
                    return (
                        (0, a.useLayoutEffect)(() => {
                            let e = r.p8.context((e) => {}, t);
                            return () => e.revert();
                        }, []),
                        { main: t }
                    );
                },
                s = () => {
                    let { main: e } = o(c());
                    return (0, n.jsx)("section", {
                        className: "".concat(c().section),
                        ref: e,
                        children: (0, n.jsx)("div", {
                            className: "container",
                            children: (0, n.jsxs)("div", {
                                className: "row ".concat(c().row, " row-cols-lg-2"),
                                children: [
                                    (0, n.jsx)("div", {
                                        className: c().col_left,
                                        children: (0, n.jsxs)("div", {
                                            className: "".concat(c().heading),
                                            children: [
                                                (0, n.jsx)("h2", { className: "".concat(c().title, " ttl-80 fw-regular mb-lg-2"), children: "Accurate Reporting" }),
                                                (0, n.jsx)("p", { className: "mb-lg-5", children: "Measurable objectives and KPIs are an important part of your marketing efforts. We work towards results that matter to your business" }),
                                                (0, n.jsxs)("ul", {
                                                    children: [
                                                        (0, n.jsx)("li", { children: "Keyword Progress" }),
                                                        (0, n.jsx)("li", { children: "Traffic Progress" }),
                                                        (0, n.jsx)("li", { children: "Lead Growth" }),
                                                        (0, n.jsx)("li", { children: "Revenue Growth" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: c().col_right,
                                        children: (0, n.jsx)("div", {
                                            className: "".concat(c().content),
                                            children: (0, n.jsx)("div", {
                                                className: "".concat(c().block, " ratio"),
                                                children: (0, n.jsx)("video", {
                                                    className: c().video,
                                                    width: "100%",
                                                    height: "100%",
                                                    loop: !0,
                                                    muted: !0,
                                                    autoPlay: !0,
                                                    playsInline: !0,
                                                    children: (0, n.jsx)("source", { src: "/video/report.mp4", type: "video/mp4" }),
                                                }),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    });
                };
        },
        80710: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return _;
                    },
                });
            var n = i(57437),
                l = i(99321),
                c = i(45866),
                a = i.n(c);
            i(11030), i(67224);
            var r = i(2265),
                o = i(42815),
                s = i(42716);
            o.p8.registerPlugin(s.i);
            var d = (e) => {
                    let { style: t } = e,
                        i = (0, r.useRef)();
                    return (
                        (0, r.useLayoutEffect)(() => {
                            let e = o.p8.context((e) => {
                                s.i.matchMedia({
                                    "(min-width: 992px)": function () {
                                        let n = e.selector(".".concat(t.card_img1)),
                                            l = e.selector(".".concat(t.card_img1_img)),
                                            c = o.p8.timeline({ scrollTrigger: { trigger: i.current, end: "180%", scrub: 0.8, pin: i.current, anticipatePin: 1 } });
                                        o.p8.utils.toArray(n).forEach((e, i) => {
                                            e.querySelector(".".concat(t.card_img1_img)),
                                                o.p8.set(e, { yPercent: 0 === i ? 0 : 80, autoAlpha: 0 === i ? 1 : 0 }),
                                                c.to(e, { autoAlpha: 1, duration: 0.3, stagger: 0.5 }),
                                                c.to(e, { yPercent: 0, stagger: 1, duration: 1 }, "<"),
                                                c.from(e, { boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)" }, "<"),
                                                c.to(
                                                    e,
                                                    {
                                                        duration: 1,
                                                        onUpdate: () => {
                                                            let e = n.slice(0, i + 1);
                                                            l.slice(0, i + 1),
                                                                o.p8.utils.toArray(e).forEach((t, i) => {
                                                                    o.p8.to(t, { y: () => -((e.length - i) * 32), scale: () => 1 - (e.length - i) * 0.08, duration: 0.5, ease: "ease" }).play();
                                                                });
                                                        },
                                                    },
                                                    "<.4"
                                                );
                                        });
                                    },
                                    "(min-width: 600px) and (max-width: 959px)": function () {},
                                    "(max-width: 599px)": function () {},
                                    all: function () {},
                                });
                            }, i);
                            return () => e.revert();
                        }, []),
                        { main: i }
                    );
                },
                u = i(26736),
                _ = (e) => {
                    var t, i, c;
                    let { data: r, widget_type: o, id: s } = e,
                        { main: _ } = d({ style: a() });
                    return (0, n.jsx)("section", {
                        className: "".concat(a().section),
                        ref: _,
                        id: "".concat(o).concat(s),
                        children: (0, n.jsxs)("div", {
                            className: "container",
                            children: [
                                (0, n.jsxs)("div", {
                                    className: "row ".concat(a().row, " row-cols-lg-2"),
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: "".concat(a().col_left, " "),
                                            children: (0, n.jsxs)("div", {
                                                className: "".concat(a().heading),
                                                children: [
                                                    (null == r ? void 0 : r.title) && (0, n.jsx)("h2", { className: "".concat(a().title, " ttl-80 fw-regular mb-2 mb-lg-2"), children: null == r ? void 0 : r.title }),
                                                    (null == r ? void 0 : r.description) && (0, n.jsx)("p", { className: "mb-4 mb-lg-5", children: null == r ? void 0 : r.description }),
                                                    (0, n.jsx)("div", {
                                                        className: "".concat(a().input_wrap, " d-none d-lg-block"),
                                                        children: (0, n.jsx)(u.Z, { isLight: !0, buttonLabel: null == r ? void 0 : null === (t = r.button) || void 0 === t ? void 0 : t.label }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "".concat(a().col_right),
                                            children: (0, n.jsx)("div", {
                                                className: "".concat(a().card, " mb-4 mb-lg-0 ratio"),
                                                children:
                                                    null == r
                                                        ? void 0
                                                        : null === (i = r.dataStack) || void 0 === i
                                                        ? void 0
                                                        : i.map((e, t) => {
                                                              var i, c;
                                                              return (0, n.jsx)(
                                                                  "div",
                                                                  {
                                                                      className: "".concat(a().card_img1),
                                                                      children: (0, n.jsx)("div", {
                                                                          className: "".concat(a().card_img1_img, " "),
                                                                          children: (0, n.jsxs)("div", {
                                                                              children: [
                                                                                  (0, n.jsxs)("span", { className: "d-none d-lg-block ".concat(a().index), children: ["0", t + 1] }),
                                                                                  (0, n.jsxs)("div", {
                                                                                      className: a().card_info,
                                                                                      children: [
                                                                                          (0, n.jsx)("span", {
                                                                                              children: (0, n.jsx)("figure", {
                                                                                                  className: "".concat(a().star, " mb-0 mb-lg-4"),
                                                                                                  children: (0, n.jsx)(l.Z, {
                                                                                                      fill: !0,
                                                                                                      src: null == e ? void 0 : null === (i = e.image) || void 0 === i ? void 0 : i.url,
                                                                                                      alt: null == e ? void 0 : null === (c = e.image) || void 0 === c ? void 0 : c.alternative_text,
                                                                                                  }),
                                                                                              }),
                                                                                          }),
                                                                                          (0, n.jsx)("h5", { className: "".concat(a().content, " mb-0"), children: null == e ? void 0 : e.text }),
                                                                                      ],
                                                                                  }),
                                                                              ],
                                                                          }),
                                                                      }),
                                                                  },
                                                                  null == e ? void 0 : e.text
                                                              );
                                                          }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", {
                                    className: "".concat(a().link_wrap, " text-center d-lg-none"),
                                    children: (0, n.jsx)(u.Z, { isLight: !0, buttonLabel: null == r ? void 0 : null === (c = r.button) || void 0 === c ? void 0 : c.label }),
                                }),
                            ],
                        }),
                    });
                };
        },
        59436: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return _;
                    },
                });
            var n = i(57437),
                l = i(99321),
                c = i(41705),
                a = i.n(c),
                r = i(11030),
                o = i(2265),
                s = i(42815),
                d = i(42716);
            s.p8.registerPlugin(d.i);
            var u = (e) => {
                    let { style: t } = e,
                        i = (0, o.useRef)();
                    return (
                        (0, o.useLayoutEffect)(() => {
                            let e = s.p8.context((e) => {
                                d.i.matchMedia({ "(min-width: 992px)": function () {}, "(min-width: 600px) and (max-width: 959px)": function () {}, "(max-width: 599px)": function () {}, all: function () {} });
                            }, i);
                            return () => e.revert();
                        }, []),
                        { main: i }
                    );
                },
                _ = (e) => {
                    var t, i, c, o;
                    let { data: s, widget_block: d, id: _ } = e,
                        { main: p } = u({ style: a() });
                    return (0, n.jsx)("section", {
                        className: "".concat(a().section),
                        ref: p,
                        id: "".concat(d).concat(_),
                        children: (0, n.jsx)("div", {
                            className: "container",
                            children: (0, n.jsxs)("div", {
                                className: "row ".concat(a().row, " align-items-center row-cols-lg-2"),
                                children: [
                                    (0, n.jsx)("div", {
                                        className: "".concat(a().col_left, " "),
                                        children: (0, n.jsxs)("div", {
                                            className: "".concat(a().heading),
                                            children: [
                                                (null == s ? void 0 : s.title) && (0, n.jsx)("h2", { className: "".concat(a().title, " ttl-80 fw-regular mb-2 mb-lg-2"), children: null == s ? void 0 : s.title }),
                                                (null == s ? void 0 : s.subtitle) && (0, n.jsx)("p", { className: "mb-4 mb-lg-5", children: null == s ? void 0 : s.subtitle }),
                                                (0, n.jsx)("div", {
                                                    className: "".concat(a().input_wrap),
                                                    children: (0, n.jsx)(r.Z, {
                                                        link: null == s ? void 0 : null === (t = s.button) || void 0 === t ? void 0 : t.link,
                                                        label: null == s ? void 0 : null === (i = s.button) || void 0 === i ? void 0 : i.label,
                                                        isLight: !0,
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: "".concat(a().col_right, " "),
                                        children: (0, n.jsx)("div", {
                                            className: "ratio ".concat(a().img, " mb-4 mb-lg-0"),
                                            children: (0, n.jsx)(l.Z, {
                                                fill: !0,
                                                src: null == s ? void 0 : null === (c = s.image) || void 0 === c ? void 0 : c.url,
                                                alt: null == s ? void 0 : null === (o = s.image) || void 0 === o ? void 0 : o.alternative_text,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    });
                };
        },
        92518: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return u;
                    },
                });
            var n = i(57437),
                l = i(99321),
                c = i(9282),
                a = i.n(c),
                r = i(2265),
                o = i(42815),
                s = i(42716);
            o.p8.registerPlugin(s.i);
            var d = (e) => {
                    let { style: t } = e,
                        i = (0, r.useRef)();
                    return (
                        (0, r.useLayoutEffect)(() => {
                            let e = o.p8.context((e) => {}, i);
                            return () => e.revert();
                        }, []),
                        { main: i }
                    );
                },
                u = (e) => {
                    var t, i, c, r;
                    let { data: o, widget_type: s, id: u } = e,
                        { main: _ } = d({ style: a() });
                    return (0, n.jsx)("section", {
                        className: "".concat(a().section),
                        ref: _,
                        children: (0, n.jsx)("div", {
                            className: "container",
                            children: (0, n.jsxs)("div", {
                                className: "row ".concat(a().row, " row-cols-lg-2"),
                                children: [
                                    (0, n.jsx)("div", {
                                        className: a().col_left,
                                        children: (0, n.jsx)("div", {
                                            className: "".concat(a().content, " mb-3 mb-lg-0"),
                                            children: (0, n.jsx)("div", {
                                                className: "".concat(a().content_img1),
                                                children: (0, n.jsx)("figure", {
                                                    className: "".concat(a().content_img1_img, " ratio"),
                                                    children: (0, n.jsx)(l.Z, {
                                                        fill: !0,
                                                        src: null == o ? void 0 : null === (t = o.image) || void 0 === t ? void 0 : t.url,
                                                        alt: null == o ? void 0 : null === (i = o.image) || void 0 === i ? void 0 : i.alternative_text,
                                                    }),
                                                }),
                                            }),
                                        }),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: a().col_right,
                                        children: (0, n.jsxs)("div", {
                                            className: "".concat(a().heading),
                                            children: [
                                                (null == o ? void 0 : o.title) && (0, n.jsx)("h2", { className: "".concat(a().title, " ttl-80 fw-regular mb-2 mb-lg-2"), children: null == o ? void 0 : o.title }),
                                                (null == o ? void 0 : o.description) && (0, n.jsx)("p", { className: "mb-2 mb-lg-3", children: null == o ? void 0 : o.description }),
                                                (null == o ? void 0 : null === (c = o.list) || void 0 === c ? void 0 : c.length) !== 0 &&
                                                    (0, n.jsx)("div", {
                                                        className: "".concat(a().input_wrap),
                                                        children: (0, n.jsx)("ul", {
                                                            children: null == o ? void 0 : null === (r = o.list) || void 0 === r ? void 0 : r.map((e) => (0, n.jsx)("li", { children: (0, n.jsx)("span", { children: e }) }, e)),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    });
                };
        },
        35849: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return _;
                    },
                });
            var n = i(57437),
                l = i(99321),
                c = i(31394),
                a = i.n(c),
                r = i(2265),
                o = i(42815),
                s = i(42716);
            o.p8.registerPlugin(s.i);
            var d = (e) => {
                    let { style: t } = e,
                        i = (0, r.useRef)();
                    return (
                        (0, r.useLayoutEffect)(() => {
                            let e = o.p8.context((e) => {}, i);
                            return () => e.revert();
                        }, []),
                        { main: i }
                    );
                },
                u = i(67224),
                _ = (e) => {
                    var t, i, c, r, o, s;
                    let { data: _, widget_type: p, id: m } = e,
                        { main: v } = d({ style: a() });
                    return (0, n.jsx)("section", {
                        className: "".concat(a().section),
                        ref: v,
                        id: "".concat(p).concat(m),
                        children: (0, n.jsx)("div", {
                            className: "container",
                            children: (0, n.jsxs)("div", {
                                className: "row ".concat(a().row, " row-cols-lg-2"),
                                children: [
                                    (0, n.jsx)("div", {
                                        className: a().col_left,
                                        children: (0, n.jsxs)("div", {
                                            className: "".concat(a().heading),
                                            children: [
                                                (null == _ ? void 0 : _.title) && (0, n.jsx)("h2", { className: "".concat(a().title, " ttl-80 fw-regular mb-2 mb-lg-2"), children: null == _ ? void 0 : _.title }),
                                                (null == _ ? void 0 : _.description) && (0, n.jsx)("p", { className: "mb-3 mb-lg-5", children: null == _ ? void 0 : _.description }),
                                                (0, n.jsxs)("div", {
                                                    className: "".concat(a().input_wrap),
                                                    children: [
                                                        (0, n.jsx)("input", { type: "text", placeholder: "Your Work Email", className: "form-control", id: "name", "aria-describedby": "first name" }),
                                                        (0, n.jsxs)("button", {
                                                            type: "submit",
                                                            className: "btn btn-primary fill d-flex justify-center ",
                                                            children: [(0, n.jsx)("span", { children: "Hire Developers" }), (0, n.jsx)("span", { children: (0, n.jsx)(u.Z, { icon: "arrow-right", size: 12 }) })],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: a().col_right,
                                        children: (0, n.jsxs)("div", {
                                            className: "".concat(a().content, " mb-4 mb-lg-0"),
                                            children: [
                                                (0, n.jsx)("div", {
                                                    className: "".concat(a().content_img1),
                                                    children: (0, n.jsx)("figure", {
                                                        className: "".concat(a().content_img1_img, " ratio"),
                                                        children: (0, n.jsx)(l.Z, {
                                                            fill: !0,
                                                            src: null == _ ? void 0 : null === (t = _.center_image) || void 0 === t ? void 0 : t.url,
                                                            alt: null == _ ? void 0 : null === (i = _.center_image) || void 0 === i ? void 0 : i.alternative_text,
                                                        }),
                                                    }),
                                                }),
                                                (0, n.jsx)("div", {
                                                    className: "".concat(a().content_img2),
                                                    children: (0, n.jsx)("figure", {
                                                        className: "".concat(a().content_img2_img, " ratio"),
                                                        children: (0, n.jsx)(l.Z, {
                                                            fill: !0,
                                                            src: null == _ ? void 0 : null === (c = _.top_left_image) || void 0 === c ? void 0 : c.url,
                                                            alt: null == _ ? void 0 : null === (r = _.top_left_image) || void 0 === r ? void 0 : r.alternative_text,
                                                        }),
                                                    }),
                                                }),
                                                (0, n.jsx)("div", {
                                                    className: "".concat(a().content_img3),
                                                    children: (0, n.jsx)("figure", {
                                                        className: "".concat(a().content_img3_img, " ratio"),
                                                        children: (0, n.jsx)(l.Z, {
                                                            fill: !0,
                                                            src: null == _ ? void 0 : null === (o = _.bottom_right_image) || void 0 === o ? void 0 : o.url,
                                                            alt: null == _ ? void 0 : null === (s = _.bottom_right_image) || void 0 === s ? void 0 : s.alternative_text,
                                                        }),
                                                    }),
                                                }),
                                                (0, n.jsx)("div", { className: "".concat(a().round1), children: (0, n.jsx)("p", { children: "</>" }) }),
                                                (0, n.jsx)("div", { className: "".concat(a().round2) }),
                                                (0, n.jsx)("div", {
                                                    className: "".concat(a().square),
                                                    children: (0, n.jsxs)("div", { className: a().square_item, children: [(0, n.jsx)("p", { children: "100+" }), (0, n.jsx)("span", { children: "Technology Lorem" })] }),
                                                }),
                                                (0, n.jsx)("div", { className: "".concat(a().pill), children: (0, n.jsx)("span", { children: "Hire in 48 hrs" }) }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    });
                };
        },
        26736: function (e, t, i) {
            "use strict";
            i.d(t, {
                Z: function () {
                    return R;
                },
            });
            var n = i(57437),
                l = i(2265),
                c = i(53185);
            let a = "FORM_VIEW",
                r = "ALMOST_DONE",
                o = "SUCESS_VIEW";
            var s = () => {
                    let e = (0, l.useRef)({ id: "", token: "" }),
                        [t, i] = (0, l.useState)(a),
                        n = (0, l.useCallback)((e) => {
                            i(e);
                        }, []);
                    return { view: t, changeView: n, idRef: e };
                },
                d = i(12426),
                u = i(77404),
                _ = i(58440),
                p = i(61683),
                m = i(62075),
                v = i(53422),
                h = i(33068),
                x = i(30713),
                g = i(18893),
                f = i(50640),
                j = i(58441),
                b = (e) => {
                    var t;
                    let { changeView: i, idRef: n, selectedServices: c } = e,
                        [a, o] = (0, l.useState)(!1),
                        [s, d] = (0, l.useState)(!1),
                        u = (0, l.useRef)(),
                        _ = (null == c ? void 0 : c.length) !== 0,
                        { data: p, isLoading: m } = (0, x.ZP)("".concat(g.b0, "/api/general/service?page=1")),
                        v = null == p ? void 0 : null === (t = p.results) || void 0 === t ? void 0 : t.data,
                        b = (0, l.useMemo)(() => v && v.map((e) => ({ value: null == e ? void 0 : e.id, label: null == e ? void 0 : e.service })), [v]),
                        { trigger: N, data: y, isMutating: k, error: A } = (0, h.Z)("".concat(g.b0, "/api/outsource/hire-resource/"), w, {
                            onSuccess: (e) => {
                                if (e) {
                                    var t, l, c, a;
                                    d(!1),
                                        (null == e ? void 0 : e.status) &&
                                            (o(!1),
                                            i(r),
                                            (n.current = {
                                                id: null == e ? void 0 : null === (l = e.results) || void 0 === l ? void 0 : null === (t = l.data) || void 0 === t ? void 0 : t.id,
                                                token: null == e ? void 0 : null === (a = e.results) || void 0 === a ? void 0 : null === (c = a.data) || void 0 === c ? void 0 : c.secret_token,
                                            }),
                                            (0, j.o)({ event: "FormSubmission", parameters: { formName: "Hire Our Experts 1", ...(null == u ? void 0 : u.current) } }));
                                }
                            },
                            onError: () => {
                                error;
                            },
                        });
                    return {
                        handleSubmit: (e) => {
                            d(!0);
                            let t = JSON.parse(localStorage.getItem("utm_items")),
                                i = (0, f.f)(e),
                                n = null == i ? void 0 : i.countryCode,
                                l = null == i ? void 0 : i.phoneNumber,
                                a = null == i ? void 0 : i.isoCode;
                            (u.current = { ...(null == e ? void 0 : e.values) }),
                                _
                                    ? grecaptcha.ready(async () => {
                                          try {
                                              var i, r, o, s, d;
                                              let u = await grecaptcha.execute("6LcVWhcoAAAAANhkmOWGwMhxbbwJ-W-ra5v7XkUk");
                                              N({
                                                  first_name: null == e ? void 0 : null === (i = e.values) || void 0 === i ? void 0 : i.firstName,
                                                  last_name: null == e ? void 0 : null === (r = e.values) || void 0 === r ? void 0 : r.lastName,
                                                  email: null == e ? void 0 : null === (o = e.values) || void 0 === o ? void 0 : o.email,
                                                  additional_info: null == e ? void 0 : null === (s = e.values) || void 0 === s ? void 0 : s.additionalinfo,
                                                  service_ids: [...c],
                                                  is_privacy_policy_accepted: !!(null == e ? void 0 : null === (d = e.values) || void 0 === d ? void 0 : d.privacypolicy),
                                                  captcha: u,
                                                  phone_number_cc: n || "",
                                                  phone_number: l || "",
                                                  phone_number_cc_country_code: a || "",
                                                  utm_source: (null == t ? void 0 : t.utm_source) || "",
                                                  utm_medium: (null == t ? void 0 : t.utm_medium) || "",
                                                  utm_campaign: (null == t ? void 0 : t.utm_campaign) || "",
                                                  utm_term: (null == t ? void 0 : t.utm_term) || "",
                                                  utm_content: (null == t ? void 0 : t.utm_content) || "",
                                                  utm_device: (null == t ? void 0 : t.utm_device) || "",
                                                  fbclid: (null == t ? void 0 : t.fbclid) || "",
                                                  gclid: (null == t ? void 0 : t.gclid) || "",
                                                  lpurl: (null == t ? void 0 : t.lpurl) || "",
                                                  creative: (null == t ? void 0 : t.creative) || "",
                                                  referral_id: (null == t ? void 0 : t.referral_id) || "",
                                              });
                                          } catch (e) {}
                                      })
                                    : o(!0);
                        },
                        servicesOptions: b,
                        isLoading: k,
                        handleSubmitedFailed: () => {
                            o(!0);
                        },
                        formSubmitedFailed: a,
                        servicesDataisLoading: m,
                        isFormClicked: s,
                    };
                };
            async function w(e, t) {
                let { arg: i } = t;
                return fetch(e, { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify(i) })
                    .then((e) => e.json())
                    .catch((e) => console.log(e));
            }
            var N = i(5751),
                y = i(2662),
                k = i(50376),
                A = i(15627);
            i(98091), i(76282);
            var S = i(29639),
                Z = (e) => {
                    let { changeView: t, style: i, idRef: l, selectedServices: c, setSeletedServices: a } = e,
                        { handleSubmit: r, servicesOptions: o, isLoading: s, handleSubmitedFailed: h, formSubmitedFailed: x, isFormClicked: g } = b({ changeView: t, selectedServices: c, idRef: l });
                    return (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsxs)("h2", { className: i.offcanvas_title, children: ["Hire Our", (0, n.jsx)("br", { className: "d-none d-lg-block" }), " Experts"] }),
                            (0, n.jsx)(d.l0, {
                                onSubmit: r,
                                onSubmitFailure: h,
                                focusOnInvalid: !0,
                                children: (0, n.jsxs)("div", {
                                    className: "row ".concat(i.form_row),
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: "col-12 col-lg-6",
                                            children: (0, n.jsx)(_.Z, { field: "firstName", label: "First Name*", placeholder: "Enter first name", validate: (0, y.Z)([N.q9, N.f9]), validateOn: "change-blur", formSubmitedFailed: x }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "col-12 col-lg-6",
                                            children: (0, n.jsx)(_.Z, { field: "lastName", label: "Last Name", placeholder: "Enter last name", validateOn: "change-blur", validate: (0, y.Z)([N.E2]), formSubmitedFailed: x }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "col-12 col-lg-6",
                                            children: (0, n.jsx)("div", {
                                                children: (0, n.jsx)(_.Z, { field: "email", label: "Email*", type: "email", placeholder: "Enter email", validate: (0, y.Z)([N.q9, N.oH]), validateOn: "change-blur", formSubmitedFailed: x }),
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "col-12 col-lg-6",
                                            children: (0, n.jsx)("div", {
                                                children: (0, n.jsx)(p.Z, {
                                                    field: "phoneNumber",
                                                    label: "Phone Number*",
                                                    placeholder: "Phone number",
                                                    autoComplete: "tel",
                                                    validate: (0, y.Z)([N.q9, N.a$]),
                                                    validateOn: "change-blur",
                                                    formSubmitedFailed: x,
                                                }),
                                            }),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: "col-12 col-lg-12",
                                            children: [
                                                (0, n.jsx)("label", { className: "form-label", children: "Choose Service*" }),
                                                o &&
                                                    (0, n.jsxs)(n.Fragment, {
                                                        children: [
                                                            (0, n.jsx)(v.Z, { selectedValues: c, setSelectedValues: a, dropdownOptions: o, title: "Services", placeholder: "Services", isDefault: !0, formSubmitedFailed: x }),
                                                            x && 0 === c.length && (0, n.jsxs)("span", { className: "d-block mt-1 invalid-feedback", children: [" ", "This field is required"] }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                        (0, n.jsx)(u.Z, { field: "additionalinfo", label: "Additional Information ", placeholder: "We'd love to know more", maxLength: k.mU0 }),
                                        (0, n.jsx)("div", {
                                            className: "col-12",
                                            children: (0, n.jsx)("div", { children: (0, n.jsx)(A.Z, { name: "privacypolicy", id: "getQuoteInitialForm", validateOn: "change-blur", validate: (0, y.Z)([N.j0]) }) }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "col-12 text-end",
                                            children: (0, n.jsxs)("button", {
                                                type: "submit",
                                                className: "btn btn-primary d-inline-flex justify-center  fill",
                                                disabled: s || g,
                                                children: [
                                                    (0, n.jsx)("span", { className: "label-item ".concat(s && "loading"), children: "Submit" }),
                                                    (0, n.jsx)("span", { className: "ms-2 label-item ".concat(s && "loading"), children: (0, n.jsx)(m.Z, { icon: "arrow-right", size: 12 }) }),
                                                    s && (0, n.jsx)("span", { className: "loader", children: (0, n.jsx)(S.Z, { animation: "border", size: "sm" }) }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                },
                P = i(17910),
                I = (e) => {
                    var t, i, n;
                    let { changeView: c, idRef: r } = e,
                        [s, d] = (0, l.useState)(!1),
                        u = (0, l.useRef)();
                    null == r || null === (t = r.current) || void 0 === t || t.id;
                    let { data: _ } = (0, x.ZP)("".concat(g.b0, "/api/outsource/engagement-type/")),
                        p = null == _ ? void 0 : null === (i = _.results) || void 0 === i ? void 0 : i.data,
                        m = (0, l.useMemo)(() => p && p.map((e) => ({ value: null == e ? void 0 : e.id, label: null == e ? void 0 : e.eng_type })), [p]),
                        { data: v } = (0, x.ZP)("".concat(g.b0, "/api/outsource/commencement-time/")),
                        f = null == v ? void 0 : null === (n = v.results) || void 0 === n ? void 0 : n.data,
                        b = (0, l.useMemo)(() => f && f.map((e) => ({ value: null == e ? void 0 : e.id, label: null == e ? void 0 : e.commencement_time })), [f]),
                        { trigger: w, data: N, isMutating: y, error: k } = (0, h.Z)("".concat(g.b0, "/api/outsource/hire-resource/"), B, {
                            onSuccess: (e) => {
                                e && (d(!1), (null == e ? void 0 : e.status) && (c(o), (0, j.o)({ event: "FormSubmission", parameters: { formName: "Hire Our Experts 2", ...(null == u ? void 0 : u.current) } })));
                            },
                            onError: () => {
                                error;
                            },
                        });
                    return {
                        handleSubmit: (e) => {
                            d(!0);
                            let t = JSON.parse(localStorage.getItem("utm_items"));
                            (u.current = { ...(null == e ? void 0 : e.values) }),
                                grecaptcha.ready(async () => {
                                    try {
                                        var i, n, l, c;
                                        let a = await grecaptcha.execute("6LcVWhcoAAAAANhkmOWGwMhxbbwJ-W-ra5v7XkUk");
                                        w({
                                            id: r.current.id,
                                            token: r.current.token,
                                            eng_type_id: null == e ? void 0 : null === (n = e.values) || void 0 === n ? void 0 : null === (i = n.engagementtype) || void 0 === i ? void 0 : i.value,
                                            commencement_id: null == e ? void 0 : null === (c = e.values) || void 0 === c ? void 0 : null === (l = c.commencementtime) || void 0 === l ? void 0 : l.value,
                                            captcha: a,
                                            utm_source: (null == t ? void 0 : t.utm_source) || "",
                                            utm_medium: (null == t ? void 0 : t.utm_medium) || "",
                                            utm_campaign: (null == t ? void 0 : t.utm_campaign) || "",
                                            utm_term: (null == t ? void 0 : t.utm_term) || "",
                                            utm_content: (null == t ? void 0 : t.utm_content) || "",
                                            utm_device: (null == t ? void 0 : t.utm_device) || "",
                                            fbclid: (null == t ? void 0 : t.fbclid) || "",
                                            gclid: (null == t ? void 0 : t.gclid) || "",
                                            lpurl: (null == t ? void 0 : t.lpurl) || "",
                                            creative: (null == t ? void 0 : t.creative) || "",
                                            referral_id: (null == t ? void 0 : t.referral_id) || "",
                                        });
                                    } catch (e) {}
                                });
                        },
                        engagementOptions: m,
                        commencementOptions: b,
                        isMutating: y,
                        handleBack: () => {
                            c(a);
                        },
                        isFormClicked: s,
                    };
                };
            async function B(e, t) {
                let { arg: i } = t;
                return fetch(e, { headers: { "Content-Type": "application/json" }, method: "PUT", body: JSON.stringify(i) })
                    .then((e) => e.json())
                    .catch((e) => console.log(e));
            }
            var C = (e) => {
                    let { changeView: t, style: i, idRef: l, toggle: c } = e,
                        { handleSubmit: a, engagementOptions: r, commencementOptions: o, isMutating: s, handleBack: u, isFormClicked: _ } = I({ changeView: t, idRef: l });
                    return (0, n.jsxs)("div", {
                        className: i.form_wrap,
                        children: [
                            (0, n.jsx)("button", {
                                onClick: u,
                                className: i.btn_back,
                                children: (0, n.jsx)("svg", {
                                    height: "20",
                                    width: "20",
                                    viewBox: "0 0 20 20",
                                    "aria-hidden": "true",
                                    focusable: "false",
                                    children: (0, n.jsx)("path", {
                                        d:
                                            "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z",
                                    }),
                                }),
                            }),
                            (0, n.jsxs)(d.l0, {
                                onSubmit: a,
                                focusOnInvalid: !0,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: "mb-2 mb-lg-4 mt-lg-5",
                                        children: [
                                            (0, n.jsx)("h1", { className: "".concat(i.offcanvas_title, "  ").concat(i.offcanvas_title__sm), children: "You're almost done!" }),
                                            (0, n.jsx)("p", { className: "mb-0", children: "A few more lines of information will help us to better understand your requirement" }),
                                        ],
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: "row ".concat(i.form_row),
                                        children: [
                                            (0, n.jsx)("div", { className: "col-12 col-lg-6", children: (0, n.jsx)(P.Z, { placeholder: "Select Engagement type", label: "Engagement Type", field: "engagementtype", options: r }) }),
                                            (0, n.jsx)("div", { className: "col-12 col-lg-6", children: (0, n.jsx)(P.Z, { placeholder: "Select when", label: "Commencement Time", field: "commencementtime", options: o }) }),
                                            (0, n.jsx)("div", {
                                                className: "col-12 text-end",
                                                children: (0, n.jsxs)("button", {
                                                    type: "submit",
                                                    className: "btn btn-primary d-inline-flex justify-center  fill",
                                                    disabled: s || _,
                                                    children: [
                                                        (0, n.jsx)("span", { className: "label-item ".concat(s && "loading"), children: "Submit" }),
                                                        (0, n.jsx)("span", { className: "ms-2 label-item ".concat(s && "loading"), children: (0, n.jsx)(m.Z, { icon: "arrow-right", size: 12 }) }),
                                                        s && (0, n.jsx)("span", { className: "loader", children: (0, n.jsx)(S.Z, { animation: "border", size: "sm" }) }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { doneClick: t, style: i } = e;
                    return (0, n.jsxs)("div", {
                        className: "text-center h-100 d-flex flex-column align-items-center justify-content-center",
                        children: [
                            (0, n.jsx)("div", {
                                className: i.success_img,
                                children: (0, n.jsx)("div", { className: "ratio ratio-1x1", children: (0, n.jsx)("video", { width: "100%", height: "100%", muted: !0, autoPlay: !0, src: "/video/tick.mp4", playsInline: !0 }) }),
                            }),
                            (0, n.jsx)("h2", { children: " Thank You !" }),
                            (0, n.jsx)("p", { className: "mb-3", children: " Your request was successfully submitted" }),
                            (0, n.jsx)("div", {
                                className: "text-center",
                                children: (0, n.jsxs)("button", {
                                    type: "submit",
                                    className: "btn btn-primary d-inline-flex justify-center ",
                                    onClick: t,
                                    children: ["Done", (0, n.jsx)("span", { className: "ms-2", children: (0, n.jsx)(m.Z, { icon: "arrow-right", size: 12 }) })],
                                }),
                            }),
                        ],
                    });
                },
                W = i(60210),
                E = i(59679),
                H = i.n(E),
                L = i(67224),
                O = i(46448),
                R = (e) => {
                    let { buttonLabel: t, isLight: i } = e,
                        { view: d, changeView: u, idRef: _ } = s(),
                        { toggle: p, status: m, setFalse: v } = (0, W.Z)(),
                        [h, x] = (0, l.useState)([]);
                    (0, O.Z)({ status: m });
                    let g = () => {
                            d === o ? (p(), u(a)) : p(), x([]);
                        },
                        f = { [r]: (0, n.jsx)(C, { style: H(), changeView: u, idRef: _ }), [o]: (0, n.jsx)(T, { style: H(), changeView: u, toggle: p, doneClick: g }), default: null },
                        j = (0, n.jsx)("div", {
                            className: d === a ? "".concat(H().hairTestReport) : "".concat(H().hairTestReport, " ").concat(H().hide),
                            children: (0, n.jsx)(Z, { style: H(), changeView: u, idRef: _, selectedServices: h, setSeletedServices: x }),
                        }),
                        b = f[d] || f.default;
                    return (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsxs)("button", {
                                type: "button",
                                className: "".concat(i ? "light" : "fill", " btn btn-primary "),
                                onClick: p,
                                children: [t, (0, n.jsx)("span", { className: "ms-2", children: (0, n.jsx)(L.Z, { icon: "arrow-right", size: 15 }) })],
                            }),
                            (0, n.jsxs)(c.Z, {
                                show: m,
                                className: H().offcanvas,
                                onHide: g,
                                placement: "end",
                                children: [(0, n.jsx)(c.Z.Header, { closeButton: !0 }), (0, n.jsxs)(c.Z.Body, { "data-lenis-prevent": !0, children: [b, j] })],
                            }),
                        ],
                    });
                };
        },
        54027: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return o;
                    },
                });
            var n = i(57437),
                l = i(10355),
                c = i.n(l),
                a = i(22312),
                r = i(26736),
                o = (e) => {
                    var t, i, l;
                    let { data: o, widget_type: s, id: d } = e;
                    return (0, n.jsx)("section", {
                        className: "".concat(c().section),
                        id: "".concat(s).concat(d),
                        children: (0, n.jsx)("div", {
                            className: "container",
                            children: (0, n.jsxs)("div", {
                                className: "".concat(c().inner_wrapper),
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: "".concat(c().heading_wrapper),
                                        children: [
                                            (null == o ? void 0 : o.title) && (0, n.jsx)("h1", { className: "".concat(c().title, " ttl-80 lh-title fw-regular"), children: null == o ? void 0 : o.title }),
                                            (null == o ? void 0 : o.subTitle) && (0, n.jsx)("p", { className: "".concat(c().description, " mb-0"), children: null == o ? void 0 : o.subTitle }),
                                            (0, n.jsx)("div", { className: "".concat(c().button_groups) }),
                                            (0, n.jsx)("div", { className: "text-center", children: (0, n.jsx)(r.Z, { buttonLabel: null == o ? void 0 : null === (t = o.button) || void 0 === t ? void 0 : t.label }) }),
                                        ],
                                    }),
                                    (0, n.jsx)("div", {
                                        className: "".concat(c().image_wrapper),
                                        children: (0, n.jsx)(a.Z, {
                                            src: null == o ? void 0 : null === (i = o.image) || void 0 === i ? void 0 : i.url,
                                            fill: !0,
                                            alt: null == o ? void 0 : null === (l = o.image) || void 0 === l ? void 0 : l.alternative_text,
                                            priority: !0,
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    });
                };
        },
        62117: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return _;
                    },
                });
            var n = i(57437),
                l = i(99321),
                c = i(69982),
                a = i.n(c),
                r = i(2265),
                o = i(69023),
                s = i(42815),
                d = i(79123);
            s.p8.config({ force3D: !0 });
            let u = (e) => {
                let { style: t } = e,
                    i = (0, r.useRef)(null),
                    { setOverWriteHeader: n } = (0, o.A)();
                return (
                    (0, r.useLayoutEffect)(() => {
                        let e = s.p8.context((e) => {
                            let l = e.selector(".".concat(t.pinningWrapper)),
                                c = e.selector(".".concat(t.skewWrapper)),
                                a = e.selector(".".concat(t.titleInitial)),
                                r = e.selector(".".concat(t.title));
                            e.selector(".".concat(t.textWrapper, " span"));
                            let o = e.selector(".".concat(t.skewChild)),
                                u = e.selector(".".concat(t.video_main));
                            s.p8.set(c, { scale: 0.12, rotateZ: -45, opacity: 0 }), s.p8.set([r, a], { scale: 0.85, rotate: "-5deg", opacity: 0 }), s.p8.set(o, { opacity: 1 });
                            let _ = s.p8.timeline({ scrollTrigger: { trigger: l, end: "130%", scrub: 1.15, pin: !0 } });
                            _.to(c, { opacity: 1, duration: 0.6 }, "+=.32"),
                                _.to(c, { scale: 3.5, rotateZ: 90, duration: 7, ease: d.bJ.easeNone }, "-.2"),
                                _.to(a, { scale: 1, opacity: 1, rotate: "0deg", duration: 0.7 }, "-=4.5"),
                                _.to(a, { opacity: 0, duration: 0.3 }, "-=3.5"),
                                _.to(r, { scale: 1, opacity: 1, rotate: "0deg", duration: 0.7 }, "-=3.3"),
                                _.to(l, { backgroundColor: "#fff", duration: 0.5 }, "-=1.2"),
                                _.to(
                                    r,
                                    {
                                        opacity: 0,
                                        duration: 0.1,
                                        onComplete: () => {
                                            n(!1);
                                        },
                                        onReverseComplete: () => {
                                            n(!0);
                                        },
                                    },
                                    "-=1.2"
                                ),
                                _.to(u, { opacity: 1, scale: 1, duration: 3 }, "-=1.2"),
                                _.to(o, { opacity: 0, duration: 0.1 }, "-=1.2"),
                                _.to(i.current, { pointerEvents: "none" });
                        }, i);
                        return () => {
                            e.revert(), n(!1);
                        };
                    }, []),
                    { main1: i }
                );
            };
            var _ = () => {
                let { main1: e } = u({ style: a() });
                return (0, n.jsx)("section", {
                    className: "".concat(a().section),
                    ref: e,
                    children: (0, n.jsxs)("div", {
                        className: "".concat(a().pinningWrapper),
                        children: [
                            (0, n.jsxs)("div", {
                                className: "".concat(a().skewWrapper),
                                children: [
                                    (0, n.jsx)("div", {
                                        className: "".concat(a().skewChild, " ").concat(a().child1),
                                        children: (0, n.jsx)(l.Z, { src: "/image/experience-design/mob.png", priority: !0, sizes: "(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw", fill: !0, alt: "insight image one" }),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: "".concat(a().skewChild, " ").concat(a().child2),
                                        children: (0, n.jsx)(l.Z, { src: "/image/experience-design/image3.png", priority: !0, sizes: "(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw", fill: !0, alt: "insight image two" }),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: "".concat(a().skewChild, " ").concat(a().child3),
                                        children: (0, n.jsx)(l.Z, { src: "/image/experience-design/wearable.png", priority: !0, sizes: "(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw", fill: !0, alt: "insight image three" }),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: "".concat(a().skewChild, " ").concat(a().child4),
                                        children: (0, n.jsx)(l.Z, { src: "/image/experience-design/image_2.png", priority: !0, sizes: "(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw", fill: !0, alt: "insight image four" }),
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: "".concat(a().textWrapper),
                                children: [
                                    (0, n.jsx)("h2", { className: "".concat(a().titleInitial, " ttl-80 fw-light mb-0"), children: "We build stunning online experience" }),
                                    (0, n.jsxs)("h3", { className: "".concat(a().title, " ttl-80 fw-light mb-0"), children: ["With ", (0, n.jsx)("span", { children: "you" }), " in mind!"] }),
                                ],
                            }),
                            (0, n.jsx)("div", {
                                className: "".concat(a().video_main),
                                children: (0, n.jsx)("div", {
                                    className: "container",
                                    children: (0, n.jsx)("div", {
                                        className: "".concat(a().video_wrapper),
                                        children: (0, n.jsx)("video", {
                                            width: "100%",
                                            height: "100%",
                                            loop: !0,
                                            muted: !0,
                                            autoPlay: !0,
                                            playsInline: !0,
                                            children: (0, n.jsx)("source", { src: "/video/Experience_banner_32212f9863.mp4", type: "video/mp4" }),
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                });
            };
        },
        71034: function (e, t, i) {
            "use strict";
            i.r(t);
            var n = i(57437),
                l = i(99321),
                c = i(4718),
                a = i.n(c),
                r = i(9112),
                o = i(16272);
            t.default = (e) => {
                let { data: t, widget_type: i, background_color: c, id: s } = e;
                return (0, n.jsx)("section", {
                    className: "".concat(a().section, " bg-secondary"),
                    id: "".concat(i).concat(s),
                    children: (0, n.jsxs)("div", {
                        className: "container",
                        children: [
                            (0, n.jsx)("h2", { className: "ttl-80  fw-regular", children: "dsfg" }),
                            (0, n.jsx)(o.Z.Container, {
                                id: "left-tabs",
                                defaultActiveKey: "0",
                                children: (0, n.jsxs)("div", {
                                    className: "row ".concat(a().row),
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: a().col_left,
                                            children: (0, n.jsxs)(r.Z, {
                                                variant: "pills",
                                                className: "flex-column ".concat(a().nav),
                                                children: [
                                                    (0, n.jsx)(r.Z.Item, { children: (0, n.jsx)(r.Z.Link, { eventKey: "0", children: "Responsive and dynamic web experience" }) }),
                                                    (0, n.jsx)(r.Z.Item, { children: (0, n.jsx)(r.Z.Link, { eventKey: "1", children: "Headless Commerce" }) }),
                                                    (0, n.jsx)(r.Z.Item, { children: (0, n.jsx)(r.Z.Link, { eventKey: "2", children: "Higher Conversion" }) }),
                                                ],
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: a().col_right,
                                            children: (0, n.jsxs)(o.Z.Content, {
                                                children: [
                                                    (0, n.jsx)(o.Z.Pane, {
                                                        eventKey: "0",
                                                        children: (0, n.jsxs)("div", {
                                                            className: a().card,
                                                            children: [
                                                                (0, n.jsx)("div", {
                                                                    className: a().card_img,
                                                                    children: (0, n.jsx)("div", { className: "ratio", children: (0, n.jsx)(l.Z, { alt: "image", src: "/image/dummy/home/05.jpg", fill: !0 }) }),
                                                                }),
                                                                (0, n.jsx)("div", {
                                                                    className: a().card_info,
                                                                    children: (0, n.jsx)("p", {
                                                                        children:
                                                                            "The dynamic user interface of the Magento PWA theme is the critical concept of Progressive web apps. This ability alone makes the PWA theme for Magento an extremely",
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, n.jsx)(o.Z.Pane, {
                                                        eventKey: "1",
                                                        children: (0, n.jsxs)("div", {
                                                            className: a().card,
                                                            children: [
                                                                (0, n.jsx)("div", {
                                                                    className: a().card_img,
                                                                    children: (0, n.jsx)("div", { className: "ratio", children: (0, n.jsx)(l.Z, { alt: "image", src: "/image/dummy/home/05.jpg", fill: !0 }) }),
                                                                }),
                                                                (0, n.jsx)("div", {
                                                                    className: a().card_info,
                                                                    children: (0, n.jsx)("p", {
                                                                        children:
                                                                            "The dynamic user interface of the Magento PWA theme is the critical concept of Progressive web apps. This ability alone makes the PWA theme for Magento an extremely",
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, n.jsx)(o.Z.Pane, {
                                                        eventKey: "2",
                                                        children: (0, n.jsxs)("div", {
                                                            className: a().card,
                                                            children: [
                                                                (0, n.jsx)("div", {
                                                                    className: a().card_img,
                                                                    children: (0, n.jsx)("div", { className: "ratio", children: (0, n.jsx)(l.Z, { alt: "image", src: "/image/dummy/home/05.jpg", fill: !0 }) }),
                                                                }),
                                                                (0, n.jsx)("div", {
                                                                    className: a().card_info,
                                                                    children: (0, n.jsx)("p", {
                                                                        children:
                                                                            "The dynamic user interface of the Magento PWA theme is the critical concept of Progressive web apps. This ability alone makes the PWA theme for Magento an extremely",
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                });
            };
        },
        92310: function (e, t, i) {
            "use strict";
            i.r(t);
            var n = i(57437),
                l = i(19981),
                c = i(60210);
            t.default = (e) => {
                let { style: t, videoData: i } = e,
                    { status: a, toggle: r } = (0, c.Z)();
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)("button", {
                            className: "".concat(t.video_play_icon),
                            onClick: () => {
                                r();
                            },
                            children: "play",
                        }),
                        (0, n.jsx)(l.Z, {
                            show: a,
                            size: "xl",
                            centered: !0,
                            onHide: r,
                            children: (0, n.jsx)(l.Z.Body, { children: (0, n.jsx)("video", { width: "100%", height: "100%", autoPlay: !0, src: null == i ? void 0 : i.url, controls: !0 }) }),
                        }),
                    ],
                });
            };
        },
        38804: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return u;
                    },
                });
            var n = i(57437),
                l = i(93341),
                c = i.n(l),
                a = i(99321),
                r = i(42815),
                o = i(79123),
                s = i(2265);
            let d = (e) => {
                let t = (0, s.useRef)(null);
                return (
                    (0, s.useLayoutEffect)(() => {
                        let i = r.ZP.context((i) => {
                            let n = i.selector(".".concat(e.watch_ratio)),
                                l = i.selector(".".concat(e.watch_item)),
                                c = r.ZP.timeline({ scrollTrigger: { trigger: t.current, scrub: 0.8 } });
                            c.from(n, { scale: 0.5, ease: o.Yp.easeOut }), c.from(l, { autoAlpha: 0, scale: 0.3, stagger: 0.05, willChange: "transform", x: 0, y: 0, duration: 2, ease: o.Yp.easeOut }, "<");
                        }, t);
                        return () => {
                            i.revert();
                        };
                    }, []),
                    { main: t }
                );
            };
            var u = (e) => {
                var t, i, l, r, o, s, u, _, p, m, v, h, x, g;
                let { data: f, widget_type: j, id: b } = e,
                    { main: w } = d(c());
                return (0, n.jsx)("section", {
                    className: c().section,
                    ref: w,
                    id: "".concat(j).concat(b),
                    children: (0, n.jsxs)("div", {
                        className: "container",
                        children: [
                            (0, n.jsxs)("div", {
                                className: c().section_head,
                                children: [
                                    (null == f ? void 0 : f.title) && (0, n.jsx)("h2", { className: "text-center fw-light", children: null == f ? void 0 : f.title }),
                                    (null == f ? void 0 : f.subtitle) && (0, n.jsx)("p", { className: "text-center fw-light mb-0", children: null == f ? void 0 : f.subtitle }),
                                ],
                            }),
                            (0, n.jsx)("div", {
                                className: c().section_content,
                                children: (0, n.jsxs)("div", {
                                    className: c().section_content_imggrp,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: "ratio ".concat(c().watch_ratio),
                                            children: (0, n.jsx)(a.Z, {
                                                src: null == f ? void 0 : null === (t = f.image_three) || void 0 === t ? void 0 : t.url,
                                                fill: !0,
                                                alt: null == f ? void 0 : null === (i = f.image_three) || void 0 === i ? void 0 : i.alternative_text,
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "".concat(c().watch_item, " ").concat(c().watch_item_one),
                                            children: (0, n.jsx)("div", {
                                                className: "ratio ".concat(c().watchone_ratio),
                                                children: (0, n.jsx)(a.Z, {
                                                    src: null == f ? void 0 : null === (l = f.image_two) || void 0 === l ? void 0 : l.url,
                                                    fill: !0,
                                                    alt: null == f ? void 0 : null === (r = f.image_two) || void 0 === r ? void 0 : r.alternative_text,
                                                }),
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "".concat(c().watch_item, " ").concat(c().watch_item_two),
                                            children: (0, n.jsx)("div", {
                                                className: "ratio ".concat(c().watchtwo_ratio),
                                                children: (0, n.jsx)(a.Z, {
                                                    src: null == f ? void 0 : null === (o = f.image_six) || void 0 === o ? void 0 : o.url,
                                                    fill: !0,
                                                    alt: null == f ? void 0 : null === (s = f.image_six) || void 0 === s ? void 0 : s.alternative_text,
                                                }),
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "".concat(c().watch_item, " ").concat(c().watch_item_three),
                                            children: (0, n.jsx)("div", {
                                                className: "ratio ".concat(c().watchthree_ratio),
                                                children: (0, n.jsx)(a.Z, {
                                                    src: null == f ? void 0 : null === (u = f.image_five) || void 0 === u ? void 0 : u.url,
                                                    fill: !0,
                                                    alt: null == f ? void 0 : null === (_ = f.image_five) || void 0 === _ ? void 0 : _.alternative_text,
                                                }),
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "".concat(c().watch_item, " ").concat(c().watch_item_four),
                                            children: (0, n.jsx)("div", {
                                                className: "ratio ".concat(c().watchfour_ratio),
                                                children: (0, n.jsx)(a.Z, {
                                                    src: null == f ? void 0 : null === (p = f.image_four) || void 0 === p ? void 0 : p.url,
                                                    fill: !0,
                                                    alt: null == f ? void 0 : null === (m = f.image_four) || void 0 === m ? void 0 : m.alternative_text,
                                                }),
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "".concat(c().watch_item, " ").concat(c().watch_item_five),
                                            children: (0, n.jsx)("div", {
                                                className: "ratio ".concat(c().watchfive_ratio),
                                                children: (0, n.jsx)(a.Z, {
                                                    src: null == f ? void 0 : null === (v = f.image_one) || void 0 === v ? void 0 : v.url,
                                                    fill: !0,
                                                    alt: null == f ? void 0 : null === (h = f.image_one) || void 0 === h ? void 0 : h.alternative_text,
                                                }),
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "".concat(c().watch_item, " ").concat(c().watch_item_six),
                                            children: (0, n.jsx)("div", {
                                                className: "ratio ".concat(c().watchfive_ratio),
                                                children: (0, n.jsx)(a.Z, {
                                                    src: null == f ? void 0 : null === (x = f.image_seven) || void 0 === x ? void 0 : x.url,
                                                    fill: !0,
                                                    alt: null == f ? void 0 : null === (g = f.image_seven) || void 0 === g ? void 0 : g.alternative_text,
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                });
            };
        },
        14285: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return _;
                    },
                });
            var n = i(57437),
                l = i(2265),
                c = i(20874),
                a = i.n(c),
                r = i(69023),
                o = i(42815),
                s = i(79123);
            let d = (e) => {
                    let { propRef: t, style: i } = e,
                        n = (0, l.useRef)(null),
                        c = (0, l.useRef)(null),
                        [a, d] = (0, l.useState)(null),
                        [u, _] = (0, l.useState)(null),
                        { setOverWriteHeader: p } = (0, r.A)();
                    return (
                        (0, l.useEffect)(() => {
                            var e, t, i, n, l, c, a, r, o;
                            let s =
                                    !(null === (t = navigator) || void 0 === t ? void 0 : null === (e = t.userAgent) || void 0 === e ? void 0 : e.includes("Chrome")) &&
                                    (null === (n = navigator) || void 0 === n ? void 0 : null === (i = n.userAgent) || void 0 === i ? void 0 : i.includes("Safari")),
                                d =
                                    null === (r = navigator) || void 0 === r
                                        ? void 0
                                        : null === (a = r.userAgent) || void 0 === a
                                        ? void 0
                                        : a.split(" ")[(null === (c = navigator) || void 0 === c ? void 0 : null === (l = c.userAgent) || void 0 === l ? void 0 : l.split(" ").length) - 2],
                                u = null == d ? void 0 : d.split("/")[(null == d ? void 0 : null === (o = d.split) || void 0 === o ? void 0 : o.length) - 1];
                            _(s && u && 15 > parseFloat(u));
                        }, []),
                        (0, l.useEffect)(() => {
                            d(t);
                            let e = o.p8.context((e) => {
                                if ((null == a ? void 0 : a.current) && (null == n ? void 0 : n.current)) {
                                    e.selector(".".concat(i.textWrapper));
                                    let t = e.selector(".".concat(i.nonBled, " span"));
                                    if (t) {
                                        let e = o.p8.timeline({
                                            scrollTrigger: { trigger: n.current, start: "0% 50%-=".concat(n.current.clientHeight / 2), end: "130% 50%-=".concat(n.current.clientHeight / 2), pin: !0, anticipatePin: 1, scrub: !0 },
                                        });
                                        e.scrollTrigger.refresh();
                                    }
                                    o.p8.to(c.current, { scrollTrigger: { trigger: a.current, start: "-10%", end: "8%", scrub: 0.2 }, "--size-blend": "100%", duration: 2.5, ease: s.Yp.easeInOut }),
                                        t && o.p8.to(t, { scrollTrigger: { trigger: a.current, start: "1%", end: "4%", scrub: 0.2 }, opacity: 1, color: "#fff", stagger: 0.3, duration: 0.3, ease: s.Yp.easeInOut }),
                                        o.p8.to(n.current, { scrollTrigger: { trigger: a.current, start: "0%", end: "10%", scrub: 0.2 }, opacity: 0, pointerEvents: "none", ease: s.Yp.easeInOut });
                                } else o.p8.to(c.current, { scrollTrigger: { trigger: n.current, end: "30%", scrub: 0.2 }, "--size-blend": "100%", duration: 2.5, ease: s.Yp.easeInOut });
                            }, n);
                            return () => {
                                e.revert();
                            };
                        }, [a, t, i, u]),
                        { main: n, elem: c, propRefItem: a, safari14: u }
                    );
                },
                u = "We believe in a world where technology fosters your everyday experiences. And our mission is to make it happen!";
            var _ = (e) => {
                let { propRef: t } = e,
                    { elem: i, main: l, safari14: c } = d({ propRef: t, style: a() });
                return (0, n.jsx)("section", {
                    className: "".concat(a().section),
                    ref: l,
                    children: (0, n.jsx)("div", {
                        className: "container",
                        children: (0, n.jsx)("div", {
                            className: "".concat(a().textWrapper),
                            ref: i,
                            children: (0, n.jsxs)("h2", {
                                className: "".concat(a().title),
                                children: [
                                    c
                                        ? (0, n.jsx)("span", { className: "".concat(a().nonBled), children: u.split(" ").map((e, t) => (0, n.jsxs)("span", { children: [e, " "] }, t)) })
                                        : (0, n.jsx)("span", { className: "".concat(a().nonBled), children: u }),
                                    c ? null : (0, n.jsx)("span", { className: "".concat(a().bled), children: u }),
                                ],
                            }),
                        }),
                    }),
                });
            };
        },
        99023: function (e) {
            e.exports = {
                card: "aiPlatformCard_card__fPAma",
                card_head: "aiPlatformCard_card_head__tUOLx",
                icon: "aiPlatformCard_icon__My6dj",
                card_body: "aiPlatformCard_card_body__teZUT",
                card_footer: "aiPlatformCard_card_footer__8IYIh",
                iconbox: "aiPlatformCard_iconbox__3MPlC",
            };
        },
        31376: function (e) {
            e.exports = {
                search_wrap: "customDropdownSearch_search_wrap__o16Tv",
                dropdown_container: "customDropdownSearch_dropdown_container__ehSon",
                dropdown: "customDropdownSearch_dropdown__Hq08U",
                dropdown_default: "customDropdownSearch_dropdown_default__t_iUg",
                btn: "customDropdownSearch_btn__DWu7J",
                dropdown_rounded: "customDropdownSearch_dropdown_rounded__IPsU1",
                dropdown_selected: "customDropdownSearch_dropdown_selected__SaY4G",
                dropdown_item: "customDropdownSearch_dropdown_item__Cz0r_",
                dropdown_item_wrap: "customDropdownSearch_dropdown_item_wrap__jSFod",
                empty: "customDropdownSearch_empty__X7HME",
                search_icon: "customDropdownSearch_search_icon__meMNS",
            };
        },
        72062: function (e) {
            e.exports = { video: "hlsVideoCard_video__nmNdY", controls_item__vol: "hlsVideoCard_controls_item__vol__YMqdq" };
        },
        98807: function (e) {
            e.exports = { card: "TeamCard_card__mTVLJ", card_linkedin: "TeamCard_card_linkedin__tZrCc", card_head: "TeamCard_card_head__WcyRY", img: "TeamCard_img__YmY7T", card_body: "TeamCard_card_body__6wRv2" };
        },
        71135: function (e) {
            e.exports = { videoModal: "videoPopUp_videoModal__VWyJS", play_btn: "videoPopUp_play_btn__1JOXu", icon: "videoPopUp_icon__el0XM", btn_seo: "videoPopUp_btn_seo__2x6WL" };
        },
        59679: function (e) {
            e.exports = {
                offcanvas: "ceoFormOffCanvas_offcanvas__PnMpt",
                offcanvas_title: "ceoFormOffCanvas_offcanvas_title__viLNF",
                offcanvas_title__sm: "ceoFormOffCanvas_offcanvas_title__sm__3ArJA",
                form_row: "ceoFormOffCanvas_form_row__5x6E3",
                btn_wrap: "ceoFormOffCanvas_btn_wrap__HZXk1",
                hide: "ceoFormOffCanvas_hide__4mqsE",
                btn_back: "ceoFormOffCanvas_btn_back__bP_Xa",
                form_wrap: "ceoFormOffCanvas_form_wrap__9V2tu",
                success_img: "ceoFormOffCanvas_success_img__jgWsg",
            };
        },
        67334: function (e) {
            e.exports = {
                section: "accordionWithStickyImage_section__ycxPR",
                inner: "accordionWithStickyImage_inner___CoYu",
                heading: "accordionWithStickyImage_heading__pMcMM",
                content_wrapper: "accordionWithStickyImage_content_wrapper__dFVkN",
                image_wrapper: "accordionWithStickyImage_image_wrapper__M_7ip",
                image_inner: "accordionWithStickyImage_image_inner__BMb17",
                image_inner_track: "accordionWithStickyImage_image_inner_track__VaDhI",
                accordion_main_wrapper: "accordionWithStickyImage_accordion_main_wrapper__UjLIM",
                num: "accordionWithStickyImage_num__Ogu8U",
                icon: "accordionWithStickyImage_icon__UBhGD",
                content: "accordionWithStickyImage_content__FXDXm",
            };
        },
        86342: function (e) {
            e.exports = {
                section: "activityVideo_section__gbYxa",
                content: "activityVideo_content__CBr3y",
                title: "activityVideo_title__jGGBC",
                title_sub: "activityVideo_title_sub__Bzp0A",
                description: "activityVideo_description__4KKR6",
                list: "activityVideo_list__xlfD3",
                media_wrapper: "activityVideo_media_wrapper____VZT",
                video_image: "activityVideo_video_image__hC8Wh",
            };
        },
        35923: function (e) {
            e.exports = {
                section: "aiBannerSection_section__nH2om",
                title: "aiBannerSection_title__bbX8L",
                wrapperrow: "aiBannerSection_wrapperrow__Rp0aQ",
                frame_video: "aiBannerSection_frame_video__D9qUn",
                frame_figure: "aiBannerSection_frame_figure__D2j_j",
                contWrap: "aiBannerSection_contWrap__0Ne3T",
                bgimage: "aiBannerSection_bgimage__TMqnB",
                item: "aiBannerSection_item__tRsby",
            };
        },
        96936: function (e) {
            e.exports = {
                section: "aiBlockSection_section__s54Mc",
                title: "aiBlockSection_title__DQdDa",
                frame_video: "aiBlockSection_frame_video__Ln89S",
                frame_figure: "aiBlockSection_frame_figure__fx0Wr",
                imageicon: "aiBlockSection_imageicon__YKnsz",
                icon1: "aiBlockSection_icon1__7M0gZ",
                icon2: "aiBlockSection_icon2__200s7",
                icon3: "aiBlockSection_icon3__prWed",
            };
        },
        58848: function (e) {
            e.exports = {
                section: "aiImageRightSection_section__kWbdo",
                title: "aiImageRightSection_title__F7cAa",
                frame_video: "aiImageRightSection_frame_video__kmnHu",
                frame_figure: "aiImageRightSection_frame_figure__SrHd6",
                contWrap: "aiImageRightSection_contWrap__pMEAk",
                btnwrap: "aiImageRightSection_btnwrap__So6ZO",
                leftbg: "aiImageRightSection_leftbg__Z63qe",
                crescendo: "aiImageRightSection_crescendo__LxLMS",
                rightbg: "aiImageRightSection_rightbg__kehQb",
            };
        },
        28816: function (e) {
            e.exports = { section: "aiPlatForms_section__Rb91b", title: "aiPlatForms_title__KlSOk", row: "aiPlatForms_row__ul95l" };
        },
        49023: function (e) {
            e.exports = {
                section: "boxesWIthHoverImage_section__XpuL3",
                row: "boxesWIthHoverImage_row__pSF__",
                heading: "boxesWIthHoverImage_heading__VeYoR",
                col_left: "boxesWIthHoverImage_col_left__99Ah0",
                col_right: "boxesWIthHoverImage_col_right__FgN2r",
                block: "boxesWIthHoverImage_block__Xy9_9",
                block_wrap: "boxesWIthHoverImage_block_wrap__r9_15",
                block_arrow: "boxesWIthHoverImage_block_arrow__bbV_z",
                arrow_item: "boxesWIthHoverImage_arrow_item__usAwg",
                block_img: "boxesWIthHoverImage_block_img__WZEVh",
                block_img__ratio: "boxesWIthHoverImage_block_img__ratio__CV6_j",
                block_content: "boxesWIthHoverImage_block_content__ikp_p",
                content_wrap: "boxesWIthHoverImage_content_wrap__C0__N",
                btn_mob: "boxesWIthHoverImage_btn_mob__0rnjj",
                col: "boxesWIthHoverImage_col__8EVpi",
                content: "boxesWIthHoverImage_content___TlsK",
                description: "boxesWIthHoverImage_description__czyYN",
                main_title: "boxesWIthHoverImage_main_title__jgc8_",
            };
        },
        5654: function (e) {
            e.exports = {
                section: "careerIntroBannerVideo_section__pGsFJ",
                videoWrapper: "careerIntroBannerVideo_videoWrapper__N37i5",
                textWrapper: "careerIntroBannerVideo_textWrapper__BLBtc",
                title: "careerIntroBannerVideo_title__gPFoa",
                description: "careerIntroBannerVideo_description__lbOxi",
                btn: "careerIntroBannerVideo_btn__Tw4dx",
            };
        },
        5272: function (e) {
            e.exports = {
                section: "chooseHiring_section__N56jw",
                wrapper: "chooseHiring_wrapper__Fjmdo",
                title: "chooseHiring_title__tBt9q",
                item_wrapper: "chooseHiring_item_wrapper__2ZRDJ",
                item: "chooseHiring_item__PuDYR",
                active: "chooseHiring_active__8V4yX",
                item_inner: "chooseHiring_item_inner__EAL1g",
                image_wrapper: "chooseHiring_image_wrapper__DSXVx",
                content_wrapper: "chooseHiring_content_wrapper__EGlT_",
            };
        },
        28325: function (e) {
            e.exports = {
                section: "digitalPyramidBlock_section__H_fFH",
                block: "digitalPyramidBlock_block__YTxLW",
                block_title: "digitalPyramidBlock_block_title__gnD_g",
                block_illus_col: "digitalPyramidBlock_block_illus_col__QToRH",
                block_content: "digitalPyramidBlock_block_content__oF1IT",
                block_illus: "digitalPyramidBlock_block_illus__GqBFX",
                block_illus_wrap: "digitalPyramidBlock_block_illus_wrap__SZ6ST",
                block_illus__line: "digitalPyramidBlock_block_illus__line__w2Wqk",
                block_illus__item: "digitalPyramidBlock_block_illus__item__TmHj_",
                content_wrap: "digitalPyramidBlock_content_wrap__rEZou",
            };
        },
        36582: function (e) {
            e.exports = {
                section_wrapper: "experienceCycle_section_wrapper__prDxk",
                section: "experienceCycle_section__Lu1q6",
                block: "experienceCycle_block__895uX",
                block_title: "experienceCycle_block_title__722io",
                block_content: "experienceCycle_block_content__UZoE6",
                block_illustration_ratio: "experienceCycle_block_illustration_ratio__tlEfL",
                block_circle: "experienceCycle_block_circle__dW0IC",
                block_circle_bg: "experienceCycle_block_circle_bg__Am7Oi",
                block_circle_outline: "experienceCycle_block_circle_outline__byJr5",
                svg: "experienceCycle_svg__ffXgR",
                gradient: "experienceCycle_gradient__e6iT2",
                block_circle_content: "experienceCycle_block_circle_content__ngkj3",
                block_circle_overlay: "experienceCycle_block_circle_overlay__07APK",
                block_circle_overlay_bg: "experienceCycle_block_circle_overlay_bg__bp5tf",
                block_illustration: "experienceCycle_block_illustration__5mt9I",
                block_circle_outline__intro: "experienceCycle_block_circle_outline__intro__nJOlg",
                block_circle_outline__intro_wrap: "experienceCycle_block_circle_outline__intro_wrap__rkM9b",
                block_circle_outline__intro_white: "experienceCycle_block_circle_outline__intro_white__Bh2MK",
            };
        },
        43346: function (e) {
            e.exports = {
                section: "experienceGlobe_section__rpv8d",
                block: "experienceGlobe_block__BAC30",
                block_content: "experienceGlobe_block_content__xHqKs",
                block_ratio: "experienceGlobe_block_ratio__5OlHx",
                block_circle: "experienceGlobe_block_circle__eL_Fm",
                block_circle__one: "experienceGlobe_block_circle__one__iCwju",
                block_circle__two: "experienceGlobe_block_circle__two__JE_pE",
                block_circle__grad: "experienceGlobe_block_circle__grad__BM4UX",
                anim: "experienceGlobe_anim__ES29U",
                anim_in: "experienceGlobe_anim_in__mdmlT",
                section1: "experienceGlobe_section1__ZyU1m",
                inner: "experienceGlobe_inner__oM0Xf",
                content: "experienceGlobe_content__Y0gN5",
                title: "experienceGlobe_title__z7aeA",
                description: "experienceGlobe_description__XGnoI",
                list: "experienceGlobe_list__YPD08",
                link: "experienceGlobe_link__t2Gjc",
                main_wrapper: "experienceGlobe_main_wrapper__DbUHZ",
                section2: "experienceGlobe_section2__r_P2V",
                expertise_text: "experienceGlobe_expertise_text__iMc9M",
                item: "experienceGlobe_item__BMePe",
                sub_title: "experienceGlobe_sub_title__rFyhU",
                sub_description: "experienceGlobe_sub_description__mRSO7",
                link_wrap: "experienceGlobe_link_wrap__Y5rC_",
            };
        },
        85463: function (e) {
            e.exports = {
                section: "experienceHero_section__0vig7",
                textWrapper: "experienceHero_textWrapper___Wsub",
                textAnimInner: "experienceHero_textAnimInner__5fT6J",
                textHero: "experienceHero_textHero__AtOAk",
                design: "experienceHero_design__KVgKC",
                butterfly: "experienceHero_butterfly__K8ed5",
                video: "experienceHero_video__w3vCZ",
                content: "experienceHero_content__xPLZO",
                content_wrap: "experienceHero_content_wrap__KuFRx",
                experience: "experienceHero_experience__901hS",
            };
        },
        67242: function (e) {
            e.exports = {
                section: "expertise_section__AzSxS",
                inner: "expertise_inner__MJ9JV",
                title: "expertise_title__qpWmJ",
                active: "expertise_active__Msa2_",
                descritpion: "expertise_descritpion__jTSJa",
                btn_wrapper: "expertise_btn_wrapper__pslK3",
                gradient_item_01: "expertise_gradient_item_01__mkBQp",
            };
        },
        75411: function (e) {
            e.exports = {
                section: "graphTab_section__skEQY",
                row: "graphTab_row__QuFz0",
                heading: "graphTab_heading__cFZiq",
                block: "graphTab_block__88NsC",
                video: "graphTab_video__yh1P_",
                nav: "graphTab_nav__1Fta4",
                nav_item: "graphTab_nav_item__qA2pV",
                col_right: "graphTab_col_right__2ngja",
                tab_content: "graphTab_tab_content__XuPa7",
                tab_img: "graphTab_tab_img__xfjTI",
            };
        },
        46322: function (e) {
            e.exports = { section: "hMIcaseStudyBanner_section__C2NBr", heading_wrap: "hMIcaseStudyBanner_heading_wrap__E9HUc", banner_wrap: "hMIcaseStudyBanner_banner_wrap__xSXe9" };
        },
        71511: function (e) {
            e.exports = {
                section: "HireDevelopers_section__T3YES",
                section_head: "HireDevelopers_section_head__R9iil",
                section_images: "HireDevelopers_section_images__PAZ9V",
                section_images_img: "HireDevelopers_section_images_img__cPKs_",
                row_one: "HireDevelopers_row_one__zdlfs",
            };
        },
        57685: function (e) {
            e.exports = {
                section: "hireResources_section__yuz5Q",
                inner: "hireResources_inner__cq7ry",
                content: "hireResources_content__isVHa",
                title: "hireResources_title____kHZ",
                description: "hireResources_description__2vdgP",
                link_wrapper: "hireResources_link_wrapper__bopA9",
                image_wrapper: "hireResources_image_wrapper__dnBeX",
                image_one: "hireResources_image_one__V6uiR",
                image_two: "hireResources_image_two__0sKTF",
                circle: "hireResources_circle__6Batg",
                link: "hireResources_link__8_6Gx",
            };
        },
        98514: function (e) {
            e.exports = {
                section: "homeBuild_section__7bd2O",
                textWrapper: "homeBuild_textWrapper__0s74f",
                textAnimInner: "homeBuild_textAnimInner__9P3c_",
                textHero: "homeBuild_textHero__qa81H",
                technology: "homeBuild_technology__YBAY2",
                design: "homeBuild_design__IyCsk",
                butterfly: "homeBuild_butterfly__BMqwH",
                video: "homeBuild_video__Oji__",
                content: "homeBuild_content__t0CPr",
                content_wrap: "homeBuild_content_wrap__uMCae",
            };
        },
        74241: function (e) {
            e.exports = {
                section: "homeDesignWrap_section__yQW8l",
                section_inner: "homeDesignWrap_section_inner__T_8p4",
                section_item: "homeDesignWrap_section_item__1DDQl",
                title_anim: "homeDesignWrap_title_anim__UyqSN",
                section_mobile: "homeDesignWrap_section_mobile__kwRzO",
            };
        },
        44116: function (e) {
            e.exports = {
                section: "homeServiceIntro_section__AUTC1",
                section_wrap: "homeServiceIntro_section_wrap__djDIC",
                section_link: "homeServiceIntro_section_link__7oV5u",
                title: "homeServiceIntro_title__SmV89",
                description: "homeServiceIntro_description__uebQ1",
            };
        },
        32240: function (e) {
            e.exports = {
                section: "industryBanner_section__Sv2fg",
                content: "industryBanner_content__ItAcf",
                content_wrap: "industryBanner_content_wrap__02bXE",
                content_title: "industryBanner_content_title__KDkS3",
                content_description: "industryBanner_content_description__ecrEM",
                btn_wrap: "industryBanner_btn_wrap__5ep3q",
                block: "industryBanner_block__OfsIR",
                block_count: "industryBanner_block_count__2hENB",
                block_count__num1: "industryBanner_block_count__num1__1fvDG",
                block_count__num2: "industryBanner_block_count__num2__WX86T",
                block_count__num3: "industryBanner_block_count__num3__g3ftE",
                block_count__add: "industryBanner_block_count__add___VaLJ",
                block_count__num: "industryBanner_block_count__num__Q5cn4",
                fade_item: "industryBanner_fade_item__PvTTy",
                path: "industryBanner_path__v_68V",
            };
        },
        56357: function (e) {
            e.exports = {
                section: "marketHero_section__gRokN",
                textWrapper: "marketHero_textWrapper__Ovbww",
                textAnimInner: "marketHero_textAnimInner__BfHpx",
                textHero: "marketHero_textHero__0mDhe",
                experience: "marketHero_experience__xl8SC",
                butterfly: "marketHero_butterfly__5X0Op",
                video: "marketHero_video__sq9UL",
                content: "marketHero_content__h7KIz",
                content_wrap: "marketHero_content_wrap__bUA_j",
                hidden_one: "marketHero_hidden_one__OhirL",
            };
        },
        313: function (e) {
            e.exports = {
                section: "marketingHeroMain_section__Rnefz",
                main_wrapper_pin: "marketingHeroMain_main_wrapper_pin__Tu91u",
                main_wrapper: "marketingHeroMain_main_wrapper__LVaw0",
                items_wrapper: "marketingHeroMain_items_wrapper__rLrfY",
                items: "marketingHeroMain_items__moEW9",
                item: "marketingHeroMain_item__lhXkT",
                title: "marketingHeroMain_title__xx_Ds",
                item_details_Wrapper: "marketingHeroMain_item_details_Wrapper__2PwJQ",
                item_detail_inner: "marketingHeroMain_item_detail_inner__ax6R7",
                item_details_content: "marketingHeroMain_item_details_content__QjkTQ",
                item_video: "marketingHeroMain_item_video__oilQz",
                content_wrapper: "marketingHeroMain_content_wrapper__GVQgj",
                item_video_inner: "marketingHeroMain_item_video_inner__vCmv0",
            };
        },
        44107: function (e) {
            e.exports = {
                section: "ourEngagementBlock_section__ehWFl",
                row: "ourEngagementBlock_row__Xj6wz",
                heading: "ourEngagementBlock_heading__bA17D",
                col_right: "ourEngagementBlock_col_right__NQSA0",
                desc: "ourEngagementBlock_desc__tGH_z",
                content: "ourEngagementBlock_content__BpcAo",
                card_wrap: "ourEngagementBlock_card_wrap__Og31H",
                card: "ourEngagementBlock_card__ymPyW",
                card_wrap_card_one: "ourEngagementBlock_card_wrap_card_one__itatB",
                models_card: "ourEngagementBlock_models_card__cWygU",
                logo: "ourEngagementBlock_logo__irXuc",
            };
        },
        69395: function (e) {
            e.exports = {
                section: "ourPeoplesBlock_section__Nfppf",
                heading_wrapper: "ourPeoplesBlock_heading_wrapper__kCwqq",
                title: "ourPeoplesBlock_title__stlE1",
                description: "ourPeoplesBlock_description__hvJIU",
                row: "ourPeoplesBlock_row___hwjQ",
            };
        },
        11600: function (e) {
            e.exports = { section: "ourTeamBanner_section__kc4lW", content_wrapper: "ourTeamBanner_content_wrapper__8NVs1", title: "ourTeamBanner_title__ypFQr" };
        },
        70553: function (e) {
            e.exports = {
                join_team: "ourTeamJoin_join_team__Wtm_2",
                join_team_wrapper: "ourTeamJoin_join_team_wrapper__5Yh0U",
                title: "ourTeamJoin_title__fi_58",
                sub_title: "ourTeamJoin_sub_title__vqN_G",
                join_team_inner: "ourTeamJoin_join_team_inner__ll1jf",
                content: "ourTeamJoin_content__fTmTA",
                gradient: "ourTeamJoin_gradient__zhehD",
                listing_wrapper: "ourTeamJoin_listing_wrapper__QyfBb",
                listing_wrapper_inner: "ourTeamJoin_listing_wrapper_inner__Jr_3p",
                simpleCard: "ourTeamJoin_simpleCard__rOp4Q",
                simpleCardWrapper: "ourTeamJoin_simpleCardWrapper__glz8C",
                contentWrapper: "ourTeamJoin_contentWrapper___PuY5",
                icon: "ourTeamJoin_icon__WPzGO",
            };
        },
        83070: function (e) {
            e.exports = {
                section: "partnershipBanner_section__Qc2Ii",
                section_img: "partnershipBanner_section_img__bVhr6",
                section_content: "partnershipBanner_section_content__ny8eM",
                heading_wrapper: "partnershipBanner_heading_wrapper__pVGwv",
                title: "partnershipBanner_title__JX4Ck",
                description: "partnershipBanner_description__XwLmE",
            };
        },
        30482: function (e) {
            e.exports = {
                section: "philosophySlider_section__JBCE_",
                custom_container: "philosophySlider_custom_container__sY9Py",
                content: "philosophySlider_content__kTFj4",
                title: "philosophySlider_title__H5FfU",
                description: "philosophySlider_description__xt76P",
                slider_wrapper: "philosophySlider_slider_wrapper__MAL5y",
                prev_arrow: "philosophySlider_prev_arrow__32vln",
                next_arrow: "philosophySlider_next_arrow__Cv_jW",
                image_bg: "philosophySlider_image_bg___yZ0u",
                item: "philosophySlider_item__5YSpS",
                inner: "philosophySlider_inner__ZNogd",
                icon: "philosophySlider_icon__ayZKv",
                sub_title: "philosophySlider_sub_title__lxnCi",
                sub_description: "philosophySlider_sub_description__thcu5",
            };
        },
        47784: function (e) {
            e.exports = {
                section: "pricing_section__nwReX",
                heading: "pricing_heading__eMxls",
                list: "pricing_list__qWUNs",
                list_main_wrapper: "pricing_list_main_wrapper__ea8Ad",
                head_nav: "pricing_head_nav__H7r_T",
                active: "pricing_active__lwh5G",
            };
        },
        35143: function (e) {
            e.exports = {
                item: "pricingItem_item__V_cKe",
                premium: "pricingItem_premium__0ltWo",
                title: "pricingItem_title__2TNkg",
                title_sub: "pricingItem_title_sub__FzqtG",
                list: "pricingItem_list__v73bT",
                title_sub_des: "pricingItem_title_sub_des__WmYZ3",
                description: "pricingItem_description__Ngemd",
                btn_wrapper: "pricingItem_btn_wrapper__3ohfi",
            };
        },
        18414: function (e) {
            e.exports = { section: "reportVideoBlock_section__1BAhL", row: "reportVideoBlock_row__OOamq", heading: "reportVideoBlock_heading__Zsf7x", block: "reportVideoBlock_block__wKFOH", video: "reportVideoBlock_video__a_PZq" };
        },
        45866: function (e) {
            e.exports = {
                section: "resourceAugCardStack_section__hDKxq",
                heading: "resourceAugCardStack_heading__G4SV5",
                col_right: "resourceAugCardStack_col_right__UlIAa",
                card: "resourceAugCardStack_card__MmUjI",
                card_info: "resourceAugCardStack_card_info__osbms",
                card_img1: "resourceAugCardStack_card_img1__Jz_g1",
                card_img1_img: "resourceAugCardStack_card_img1_img__ZEdnB",
                index: "resourceAugCardStack_index__sGSLu",
                star: "resourceAugCardStack_star__macsE",
                content: "resourceAugCardStack_content__zQkB7",
                title: "resourceAugCardStack_title__qrvXo",
                link_wrap: "resourceAugCardStack_link_wrap__0yTcF",
            };
        },
        41705: function (e) {
            e.exports = {
                section: "resourceAugEnquiry_section__UBREb",
                heading: "resourceAugEnquiry_heading__uU_TI",
                col_right: "resourceAugEnquiry_col_right__vysAU",
                col_left: "resourceAugEnquiry_col_left__D0FIH",
                title: "resourceAugEnquiry_title__llHcC",
                img: "resourceAugEnquiry_img__kDWAh",
                input_wrap: "resourceAugEnquiry_input_wrap__vxdhx",
            };
        },
        9282: function (e) {
            e.exports = {
                section: "resourceAugListBlock_section___eew0",
                row: "resourceAugListBlock_row__rhlpK",
                heading: "resourceAugListBlock_heading__83D_d",
                col_left: "resourceAugListBlock_col_left__rcl8I",
                content: "resourceAugListBlock_content__Q9kW_",
                content_img1_img: "resourceAugListBlock_content_img1_img__8WF4_",
                input_wrap: "resourceAugListBlock_input_wrap__B9rsT",
            };
        },
        31394: function (e) {
            e.exports = {
                section: "resourceAugmentationBanner_section__pxwvi",
                row: "resourceAugmentationBanner_row__cr84e",
                heading: "resourceAugmentationBanner_heading__2rFZS",
                col_left: "resourceAugmentationBanner_col_left__HG_9N",
                col_right: "resourceAugmentationBanner_col_right__3H4aN",
                content: "resourceAugmentationBanner_content__FwIwd",
                content_img1_img: "resourceAugmentationBanner_content_img1_img__bE53I",
                content_img2: "resourceAugmentationBanner_content_img2__rfvx3",
                content_img2_img: "resourceAugmentationBanner_content_img2_img__TaImi",
                content_img3: "resourceAugmentationBanner_content_img3__vgG9e",
                content_img3_img: "resourceAugmentationBanner_content_img3_img__m5YMF",
                round1: "resourceAugmentationBanner_round1__tz28n",
                round2: "resourceAugmentationBanner_round2__ojxYF",
                square: "resourceAugmentationBanner_square__wPadr",
                square_item: "resourceAugmentationBanner_square_item__r2Vdx",
                pill: "resourceAugmentationBanner_pill__vyWl1",
                input_wrap: "resourceAugmentationBanner_input_wrap__GRNX3",
            };
        },
        10355: function (e) {
            e.exports = {
                section: "resourceAugmentationHero_section__4MHvI",
                inner_wrapper: "resourceAugmentationHero_inner_wrapper__bkYIz",
                heading_wrapper: "resourceAugmentationHero_heading_wrapper__2RNiI",
                title: "resourceAugmentationHero_title__0vvqo",
                description: "resourceAugmentationHero_description__TBzPf",
                button_groups: "resourceAugmentationHero_button_groups__SdzNq",
                image_wrapper: "resourceAugmentationHero_image_wrapper__5kTgO",
            };
        },
        69982: function (e) {
            e.exports = {
                section: "skewRotateAnimation_section__bpv4S",
                pinningWrapper: "skewRotateAnimation_pinningWrapper__LO8eQ",
                skewWrapper: "skewRotateAnimation_skewWrapper__B6xu2",
                skewChild: "skewRotateAnimation_skewChild__RSUGI",
                child1: "skewRotateAnimation_child1__NHV__",
                child2: "skewRotateAnimation_child2__AHMJw",
                child3: "skewRotateAnimation_child3___kBHM",
                child4: "skewRotateAnimation_child4__6zVW5",
                textWrapper: "skewRotateAnimation_textWrapper__KJk5G",
                titleInitial: "skewRotateAnimation_titleInitial__hfOsr",
                title: "skewRotateAnimation_title__pzOB9",
                video_main: "skewRotateAnimation_video_main__QnGHm",
                video_wrapper: "skewRotateAnimation_video_wrapper__ZC6Nl",
            };
        },
        4718: function (e) {
            e.exports = {
                section: "tabImageBlock_section__VXAYb",
                row: "tabImageBlock_row__BNdol",
                nav: "tabImageBlock_nav__eAk_W",
                col_left: "tabImageBlock_col_left__u3z8K",
                col_right: "tabImageBlock_col_right__ZX5r8",
                card: "tabImageBlock_card__qggNK",
                card_img: "tabImageBlock_card_img__n_sgL",
                card_info: "tabImageBlock_card_info__RioPM",
            };
        },
        98650: function (e) {
            e.exports = { section: "tools_section___NIxv", heading: "tools_heading__pKL6S", list: "tools_list__rzVQa" };
        },
        56222: function (e) {
            e.exports = { item: "toolsItem_item__tL6_F", title: "toolsItem_title__tv3Z9", icon: "toolsItem_icon__u1CAu" };
        },
        16276: function (e) {
            e.exports = {
                section: "videoThumbWithDescription_section__S3wdZ",
                video_wrapper: "videoThumbWithDescription_video_wrapper__apk2Q",
                video_image: "videoThumbWithDescription_video_image__yjZEQ",
                video_play_icon: "videoThumbWithDescription_video_play_icon__c2MGM",
                video_content: "videoThumbWithDescription_video_content__obLEb",
                title: "videoThumbWithDescription_title__rP8Jy",
                description: "videoThumbWithDescription_description__99aT_",
            };
        },
        93341: function (e) {
            e.exports = {
                section: "WearableDevice_section__ETIjW",
                section_head: "WearableDevice_section_head__OfO57",
                section_content: "WearableDevice_section_content__NrbDT",
                section_content_imggrp: "WearableDevice_section_content_imggrp__bJ5k1",
                watch_ratio: "WearableDevice_watch_ratio__363kR",
                watch_item: "WearableDevice_watch_item__YLaWv",
                watch_item_one: "WearableDevice_watch_item_one__nIcUo",
                watch_item_two: "WearableDevice_watch_item_two__OgFla",
                watch_item_three: "WearableDevice_watch_item_three__0_2F9",
                watch_item_four: "WearableDevice_watch_item_four__3oXF3",
                watch_item_five: "WearableDevice_watch_item_five__rVZIT",
                watch_item_six: "WearableDevice_watch_item_six__EBsrX",
            };
        },
        20874: function (e) {
            e.exports = { section: "homeHighlight_section__wGCrg", textWrapper: "homeHighlight_textWrapper__p2hOh", title: "homeHighlight_title__Ns4Z3", bled: "homeHighlight_bled__GZQmK", nonBled: "homeHighlight_nonBled__ZXxMH" };
        },
    },
]);
