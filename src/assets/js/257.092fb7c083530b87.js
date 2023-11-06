(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [257, 2574],
    {
        29415: function (i, l, e) {
            "use strict";
            e.r(l);
            var n = e(57437),
                a = e(98864),
                t = e.n(a),
                o = e(48008),
                s = e.n(o),
                d = e(62075),
                c = e(22312),
                r = e(42824);
            let v = t()(() => Promise.all([e.e(429), e.e(2574)]).then(e.bind(e, 2574)), { loadableGenerated: { webpack: () => [2574] } });
            l.default = (i) => {
                var l, e, a, t, o, _;
                let { data: u, widget_type: m, id: h, background_color: x, text_color: p } = i;
                return (0, n.jsx)("section", {
                    className: s().testimonial_box_section,
                    style: { "--bg": "".concat(null != x ? x : "#fff"), "--color": "".concat(null != p ? p : "#000") },
                    id: "".concat(m).concat(h),
                    children: (0, n.jsx)(r.Z, {
                        fluid: "sm",
                        children: (0, n.jsxs)("div", {
                            className: s().testimonial_box,
                            children: [
                                (0, n.jsxs)("figure", {
                                    className: "".concat(s().testimonial_box__image, " ratio"),
                                    children: [
                                        (null == u ? void 0 : null === (l = u.image) || void 0 === l ? void 0 : l.url) && (null == u ? void 0 : null === (e = u.portrait_image) || void 0 === e ? void 0 : e.url)
                                            ? (0, n.jsx)(c.Z, {
                                                  src: null == u ? void 0 : null === (a = u.portrait_image) || void 0 === a ? void 0 : a.url,
                                                  fill: !0,
                                                  sizes: "25vw",
                                                  quality: 90,
                                                  alt: null == u ? void 0 : null === (t = u.portrait_image) || void 0 === t ? void 0 : t.alt,
                                              })
                                            : (0, n.jsx)(c.Z, {
                                                  src: null == u ? void 0 : null === (o = u.image) || void 0 === o ? void 0 : o.url,
                                                  fill: !0,
                                                  sizes: "25vw",
                                                  quality: 90,
                                                  alt: null == u ? void 0 : null === (_ = u.image) || void 0 === _ ? void 0 : _.alt,
                                              }),
                                        (null == u ? void 0 : u.video) && (0, n.jsx)("div", { className: s().testimonial_video, children: (0, n.jsx)(v, { style2: s(), vimeoLink: null == u ? void 0 : u.vimeo_link }) }),
                                    ],
                                }),
                                (0, n.jsx)("div", {
                                    className: s().testimonial_box__contents,
                                    children: (0, n.jsxs)("div", {
                                        className: s().contents_inner,
                                        children: [
                                            (0, n.jsx)(d.Z, { size: 48, icon: "icon-quote", className: s().testimonial_quote_icon }),
                                            (0, n.jsx)("p", { className: s().testimonial_quote, children: null == u ? void 0 : u.quote }),
                                            (0, n.jsx)("div", {
                                                className: "d-lg-block d-flex align-items-center",
                                                children: (0, n.jsxs)("div", {
                                                    className: s().testimonial_author,
                                                    children: [
                                                        (0, n.jsx)("div", { className: s().testimonial_author__name, children: null == u ? void 0 : u.author_name }),
                                                        (0, n.jsx)("div", { className: s().testimonial_author__designation, children: null == u ? void 0 : u.author_designation }),
                                                    ],
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
        79182: function (i, l, e) {
            "use strict";
            var n = e(2265);
            l.Z = (i) => {
                let { as: l = "div", shudTrim: e = !0, content: a, ...t } = i,
                    o = e ? a && a.replace(/(<p[^>]+?>|<p>|<\/p>)/gim, "") : a;
                return o && (0, n.createElement)(l, { ...t, dangerouslySetInnerHTML: { __html: o } });
            };
        },
        90290: function (i, l, e) {
            "use strict";
            e.d(l, {
                Z: function () {
                    return n.Z;
                },
            });
            var n = e(79182);
        },
        11030: function (i, l, e) {
            "use strict";
            var n = e(57437),
                a = e(62075),
                t = e(16010);
            l.Z = (i) => {
                let { link: l, label: e, isLight: o, hasColorShift: s, isFill: d, ...c } = i;
                return (
                    l &&
                    (0, n.jsxs)(t.Z, {
                        href: l,
                        className: "btn btn-primary "
                            .concat(o ? "light" : "", " ")
                            .concat(d ? "fill" : "", " ")
                            .concat(s ? "turn_primary" : ""),
                        ...c,
                        children: [(0, n.jsx)("span", { children: e }), (0, n.jsx)("span", { children: (0, n.jsx)(a.Z, { icon: "arrow-right", size: 15 }) })],
                    })
                );
            };
        },
        46711: function (i, l, e) {
            "use strict";
            e.d(l, {
                Z: function () {
                    return o;
                },
            });
            var n = e(57437),
                a = e(40002),
                t = e.n(a),
                o = (i) => {
                    let { email: l, phone: e } = i;
                    return (0, n.jsx)("div", {
                        className: t().content,
                        children: (0, n.jsxs)("p", {
                            className: "mb-0",
                            children: [
                                "To find out more about our work or any of our other brands, get in touch. Mail us on",
                                " ",
                                (0, n.jsx)("a", { href: "mailto:".concat(l), children: l }),
                                " or call ",
                                (0, n.jsx)("a", { href: "tel:".concat(e), children: e }),
                            ],
                        }),
                    });
                };
        },
        20684: function (i, l, e) {
            "use strict";
            var n = e(57437),
                a = e(86373),
                t = e(55908),
                o = e.n(t);
            l.Z = (i) => {
                var l, e, t, s, d, c;
                let { details: r } = i;
                return (0, n.jsx)(n.Fragment, {
                    children:
                        (null == r ? void 0 : r.languages.length) > 0 || (null == r ? void 0 : r.launch_date) !== null || (null == r ? void 0 : r.systems.length) > 0 || (null == r ? void 0 : r.time_scale) !== null
                            ? (0, n.jsx)("div", {
                                  className: o().list_wrapper,
                                  children: (0, n.jsxs)("ul", {
                                      children: [
                                          (null == r ? void 0 : null === (l = r.languages) || void 0 === l ? void 0 : l.length) !== 0 &&
                                              (0, n.jsxs)("li", {
                                                  children: [
                                                      (0, n.jsx)("p", { className: o().key, children: "Language" }),
                                                      (0, n.jsx)("p", {
                                                          className: o().value,
                                                          children:
                                                              (null == r ? void 0 : null === (e = r.languages) || void 0 === e ? void 0 : e.length) !== 0 &&
                                                              (null == r
                                                                  ? void 0
                                                                  : null === (t = r.languages) || void 0 === t
                                                                  ? void 0
                                                                  : t.map((i, l) => {
                                                                        var e;
                                                                        return (null == i ? void 0 : i.link)
                                                                            ? (0, n.jsx)(a.Z, { href: null == i ? void 0 : i.link, children: "".concat(null == i ? void 0 : i.label, "/ ") }, null == i ? void 0 : i.label)
                                                                            : (0, n.jsx)(
                                                                                  "span",
                                                                                  {
                                                                                      children: ""
                                                                                          .concat(null == i ? void 0 : i.label, " ")
                                                                                          .concat(l !== (null == r ? void 0 : null === (e = r.languages) || void 0 === e ? void 0 : e.length) - 1 ? "/" : "", "  "),
                                                                                  },
                                                                                  null == i ? void 0 : i.label
                                                                              );
                                                                    })),
                                                      }),
                                                  ],
                                              }),
                                          ((null == r ? void 0 : r.time_scale) || (null == r ? void 0 : r.is_ongoing)) &&
                                              (0, n.jsxs)("li", {
                                                  children: [
                                                      (0, n.jsx)("p", { className: o().key, children: "Timescale" }),
                                                      (0, n.jsx)("p", {
                                                          className: o().value,
                                                          children: (null == r ? void 0 : r.is_ongoing) ? "".concat(null == r ? void 0 : r.time_scale, " (On going)") : null == r ? void 0 : r.time_scale,
                                                      }),
                                                  ],
                                              }),
                                          (null == r ? void 0 : r.launch_date) &&
                                              (0, n.jsxs)("li", { children: [(0, n.jsx)("p", { className: o().key, children: "Launch Date" }), (0, n.jsx)("p", { className: o().value, children: null == r ? void 0 : r.launch_date })] }),
                                          (null == r ? void 0 : null === (s = r.systems) || void 0 === s ? void 0 : s.length) !== 0 &&
                                              (0, n.jsxs)("li", {
                                                  children: [
                                                      (0, n.jsx)("p", { className: o().key, children: "System" }),
                                                      (0, n.jsx)("p", {
                                                          className: o().value,
                                                          children:
                                                              (null == r ? void 0 : null === (d = r.systems) || void 0 === d ? void 0 : d.length) !== 0 &&
                                                              (null == r
                                                                  ? void 0
                                                                  : null === (c = r.systems) || void 0 === c
                                                                  ? void 0
                                                                  : c.map((i, l) => {
                                                                        var e;
                                                                        return (null == i ? void 0 : i.link)
                                                                            ? (0, n.jsx)(a.Z, { href: null == i ? void 0 : i.link, children: "".concat(null == i ? void 0 : i.label, "/ ") }, null == i ? void 0 : i.label)
                                                                            : (0, n.jsx)(
                                                                                  "span",
                                                                                  {
                                                                                      children: ""
                                                                                          .concat(null == i ? void 0 : i.label, " ")
                                                                                          .concat(l !== (null == r ? void 0 : null === (e = r.systems) || void 0 === e ? void 0 : e.length) - 1 ? "/" : "", " "),
                                                                                  },
                                                                                  null == i ? void 0 : i.label
                                                                              );
                                                                    })),
                                                      }),
                                                  ],
                                              }),
                                      ],
                                  }),
                              })
                            : "",
                });
            };
        },
        2574: function (i, l, e) {
            "use strict";
            e.r(l),
                e.d(l, {
                    default: function () {
                        return n.default;
                    },
                });
            var n = e(37398);
        },
        37398: function (i, l, e) {
            "use strict";
            e.r(l);
            var n = e(57437),
                a = e(2265),
                t = e(60429),
                o = e(19981),
                s = e(60210),
                d = e(71135),
                c = e.n(d),
                r = e(22312),
                v = e(46448);
            e(62075),
                (l.default = (i) => {
                    var l;
                    let { vimeoLink: e, thumbImage: d, type: _ } = i,
                        { status: u, toggle: m } = (0, s.Z)(),
                        [h, x] = (0, a.useState)(!1);
                    return (
                        (0, v.Z)({ status: u }),
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("div", {
                                    children: (0, n.jsx)("button", {
                                        onClick: m,
                                        className: "".concat(c().play_btn, " ").concat("seo" === _ ? c().btn_seo : ""),
                                        children: (0, n.jsx)("span", {
                                            className: "".concat(null === (l = c()) || void 0 === l ? void 0 : l.icon),
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
                                (0, n.jsxs)(o.Z, {
                                    show: u,
                                    centered: !0,
                                    onHide: m,
                                    className: c().videoModal,
                                    children: [
                                        (0, n.jsx)(o.Z.Header, { closeButton: !0 }),
                                        (0, n.jsx)(o.Z.Body, {
                                            children: (0, n.jsxs)("div", {
                                                className: "ratio ratio-16x9",
                                                children: [
                                                    (0, n.jsx)(r.Z, { src: null == d ? void 0 : d.url, fill: !0, alt: "".concat(null == d ? void 0 : d.alternative_text), priority: !0 }),
                                                    e &&
                                                        (0, n.jsx)(t.Z, {
                                                            url: "https://vimeo.com/" + e,
                                                            playing: !0,
                                                            onReady: () => {
                                                                x(!0);
                                                            },
                                                            controls: !0,
                                                            width: "100%",
                                                            height: "100%",
                                                            playsinline: !0,
                                                        }),
                                                    !h && (0, n.jsx)(r.Z, { src: null == d ? void 0 : d.url, fill: !0, alt: "".concat(null == d ? void 0 : d.alternative_text) }),
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
        17624: function (i, l, e) {
            "use strict";
            e.r(l),
                e.d(l, {
                    default: function () {
                        return E;
                    },
                });
            var n = e(57437),
                a = e(53185),
                t = e(2265),
                o = e(22312),
                s = e(8286),
                d = e(90290),
                c = e(16010),
                r = e(11030),
                v = e(46711),
                _ = e(67224),
                u = e(24033),
                m = e(69023),
                h = (i, l) => {
                    let e;
                    let n = (0, t.useRef)(null),
                        { setOverWriteHeader: a } = (0, m.A)(),
                        [o, s] = (0, t.useState)({}),
                        [d, c] = (0, t.useState)(!1),
                        r = (0, u.useRouter)();
                    return (
                        (0, t.useEffect)(() => {
                            var l;
                            s({
                                width: ((e = null === (l = n.current) || void 0 === l ? void 0 : l.querySelector(".".concat(i.image_container)).getBoundingClientRect()).width / window.innerWidth) * 100,
                                height: (e.height / window.innerHeight) * 100,
                            });
                        }, []),
                        (0, t.useEffect)(() => {
                            let i, e;
                            return (
                                d &&
                                    (n.current.scrollTo(0, 0),
                                    (e = setTimeout(() => {
                                        document.body.classList.add("header-casestudy-anim");
                                    }, 1e3)),
                                    (i = setTimeout(() => {
                                        document.body.classList.add("header-casestudy-anim"), r.push("/".concat(l));
                                    }, 1300))),
                                () => {
                                    clearTimeout(i), clearTimeout(e);
                                }
                            );
                        }, [d]),
                        {
                            dim: o,
                            anim: d,
                            handleClick: () => {
                                c(!0);
                            },
                            offcanvasBodyRef: n,
                        }
                    );
                },
                x = e(20684),
                p = (i) => {
                    let { style: l, data: e } = i,
                        { left_image: a, right_image: t } = e;
                    return (0, n.jsxs)("div", {
                        className: l.multiple_image,
                        children: [
                            (0, n.jsx)("div", {
                                className: l.images,
                                children: (0, n.jsx)(o.Z, { src: a.url, alt: null == a ? void 0 : a.alternative_text, fill: !0, sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw", priority: !0 }),
                            }),
                            (0, n.jsx)("div", {
                                className: l.images,
                                children: (0, n.jsx)(o.Z, { src: t.url, alt: null == t ? void 0 : t.alternative_text, fill: !0, priority: !0, sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw" }),
                            }),
                        ],
                    });
                },
                g = (i) => {
                    let { style: l, data: e } = i,
                        { image: a } = e;
                    return (0, n.jsx)("div", {
                        className: l.main_image,
                        children: (0, n.jsx)("div", {
                            className: l.images,
                            children: (0, n.jsx)(o.Z, { src: null == a ? void 0 : a.url, sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 60vw", alt: null == a ? void 0 : a.alternative_text, fill: !0, priority: !0 }),
                        }),
                    });
                },
                f = e(28952),
                j = e(16898);
            e(29415);
            var w = e(26766),
                b = e.n(w),
                k = e(62075),
                N = e(2574),
                y = (i) => {
                    var l, e, a, t, s, d;
                    let { data: c, widget_type: r, id: v, background_color: _, text_color: u } = i;
                    return (0, n.jsx)("section", {
                        className: b().testimonial_box_section,
                        style: { "--bg": "".concat(null != _ ? _ : "#fff"), "--color": "".concat(null != u ? u : "#000") },
                        id: "".concat(r).concat(v),
                        children: (0, n.jsxs)("div", {
                            className: b().testimonial_box,
                            children: [
                                (0, n.jsxs)("figure", {
                                    className: "".concat(b().testimonial_box__image, " ratio"),
                                    children: [
                                        (null == c ? void 0 : null === (l = c.image) || void 0 === l ? void 0 : l.url) && (null == c ? void 0 : null === (e = c.portrait_image) || void 0 === e ? void 0 : e.url)
                                            ? (0, n.jsx)(o.Z, {
                                                  src: null == c ? void 0 : null === (a = c.portrait_image) || void 0 === a ? void 0 : a.url,
                                                  fill: !0,
                                                  sizes: "25vw",
                                                  quality: 90,
                                                  alt: null == c ? void 0 : null === (t = c.portrait_image) || void 0 === t ? void 0 : t.alt,
                                              })
                                            : (0, n.jsx)(o.Z, {
                                                  src: null == c ? void 0 : null === (s = c.image) || void 0 === s ? void 0 : s.url,
                                                  fill: !0,
                                                  sizes: "25vw",
                                                  quality: 90,
                                                  alt: null == c ? void 0 : null === (d = c.image) || void 0 === d ? void 0 : d.alt,
                                              }),
                                        (null == c ? void 0 : c.vimeo_link) && (0, n.jsx)("div", { className: b().testimonial_video, children: (0, n.jsx)(N.default, { vimeoLink: null == c ? void 0 : c.vimeo_link }) }),
                                    ],
                                }),
                                (0, n.jsx)("div", {
                                    className: b().testimonial_box__contents,
                                    children: (0, n.jsxs)("div", {
                                        className: b().contents_inner,
                                        children: [
                                            (0, n.jsx)(k.Z, { size: 48, icon: "icon-quote", className: b().testimonial_quote_icon }),
                                            (null == c ? void 0 : c.feedback_text) && (0, n.jsx)("p", { className: b().testimonial_quote, children: null == c ? void 0 : c.feedback_text }),
                                            (0, n.jsx)("div", {
                                                className: "d-lg-block d-flex align-items-center",
                                                children: (0, n.jsxs)("div", {
                                                    className: b().testimonial_author,
                                                    children: [
                                                        (null == c ? void 0 : c.name) && (0, n.jsx)("div", { className: b().testimonial_author__name, children: null == c ? void 0 : c.name }),
                                                        (null == c ? void 0 : c.designation) && (0, n.jsx)("div", { className: b().testimonial_author__designation, children: null == c ? void 0 : c.designation }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                Z = (i) => {
                    var l, e, c, u, m, w, b, k, N, Z, B, q, T, C, S, L, z, E, M, F, P, U, V, I, R, A, H, G, W, D, J, X, K, Q, Y, $, ii, il, ie, ia, it, io, is, id, ic, ir;
                    let { data: iv, url: i_, isCaseStudyAvailable: iu, style: im, ssrDeviceType: ih } = i,
                        { dim: ix, anim: ip, handleClick: ig, offcanvasBodyRef: ij } = h(im, i_),
                        { isDesktop: iw } = (0, j.Z)(),
                        ib = (0, n.jsxs)("button", {
                            className: "btn btn-primary  fill d-none d-lg-inline-flex",
                            onClick: ig,
                            children: [(0, n.jsx)("span", { className: "d-md-inline-block", children: "Case study" }), (0, n.jsx)("span", { children: (0, n.jsx)(_.Z, { icon: "arrow-right", size: 15 }) })],
                        }),
                        ik =
                            (null == iv ? void 0 : null === (c = iv.data) || void 0 === c ? void 0 : null === (e = c.details) || void 0 === e ? void 0 : null === (l = e.languages) || void 0 === l ? void 0 : l.length) === 0 &&
                            !(null == iv ? void 0 : null === (m = iv.data) || void 0 === m ? void 0 : null === (u = m.details) || void 0 === u ? void 0 : u.launch_date) &&
                            (null == iv ? void 0 : null === (k = iv.data) || void 0 === k ? void 0 : null === (b = k.details) || void 0 === b ? void 0 : null === (w = b.systems) || void 0 === w ? void 0 : w.length) === 0 &&
                            !(null == iv ? void 0 : null === (Z = iv.data) || void 0 === Z ? void 0 : null === (N = Z.details) || void 0 === N ? void 0 : N.time_scale);
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", {
                                className: "".concat(im.transition, " ").concat(ip && im.transition_animated),
                                style: { width: "".concat(ix.width, "%"), height: "".concat(ix.height, "%") },
                                children: (0, n.jsx)("div", {
                                    className: im.transition_item,
                                    children: (0, n.jsx)(o.Z, {
                                        src: null == iv ? void 0 : null === (q = iv.data) || void 0 === q ? void 0 : null === (B = q.banner_image) || void 0 === B ? void 0 : B.url,
                                        alt: null == iv ? void 0 : null === (C = iv.data) || void 0 === C ? void 0 : null === (T = C.banner_image) || void 0 === T ? void 0 : T.alternative_text,
                                        fill: !0,
                                        priority: !0,
                                    }),
                                }),
                            }),
                            (0, n.jsx)(a.Z.Body, {
                                ref: ij,
                                "data-lenis-prevent": !0,
                                children: (0, n.jsx)("div", {
                                    className: im.offset_canvas,
                                    children: (0, n.jsxs)("div", {
                                        className: im.into_wrapper,
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: im.image_wrapper,
                                                children: [
                                                    iu &&
                                                        (0, n.jsx)("button", {
                                                            className: "".concat(im.btn_case, " d-none d-lg-block"),
                                                            onClick: ig,
                                                            children: (0, n.jsx)("svg", {
                                                                className: "ico-svg",
                                                                width: "28",
                                                                viewBox: "0 0 1024 1024",
                                                                version: "1.1",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: (0, n.jsx)("path", {
                                                                    d:
                                                                        "M853.333333 213.333333a42.666667 42.666667 0 0 0-42.666666-42.666666h-213.333334a42.666667 42.666667 0 0 0 0 85.333333h109.653334l-139.946667 140.373333a42.666667 42.666667 0 0 0 0 60.586667 42.666667 42.666667 0 0 0 60.586667 0L768 316.586667V426.666667a42.666667 42.666667 0 0 0 42.666667 42.666666 42.666667 42.666667 0 0 0 42.666666-42.666666zM456.96 567.04a42.666667 42.666667 0 0 0-60.586667 0L256 706.986667V597.333333a42.666667 42.666667 0 0 0-42.666667-42.666666 42.666667 42.666667 0 0 0-42.666666 42.666666v213.333334a42.666667 42.666667 0 0 0 42.666666 42.666666h213.333334a42.666667 42.666667 0 0 0 0-85.333333H316.586667l140.373333-140.373333a42.666667 42.666667 0 0 0 0-60.586667z",
                                                                }),
                                                            }),
                                                        }),
                                                    (0, n.jsx)("div", {
                                                        className: im.image_container,
                                                        children: (0, n.jsx)(o.Z, {
                                                            src: null == iv ? void 0 : null === (L = iv.data) || void 0 === L ? void 0 : null === (S = L.banner_image) || void 0 === S ? void 0 : S.url,
                                                            alt: null == iv ? void 0 : null === (E = iv.data) || void 0 === E ? void 0 : null === (z = E.banner_image) || void 0 === z ? void 0 : z.alternative_text,
                                                            sizes: "(max-width: 768px) 150vw, (max-width: 1200px) 100vw, 50vw",
                                                            quality: 90,
                                                            fill: !0,
                                                            priority: !0,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsxs)("div", {
                                                className: im.content_wrapper,
                                                children: [
                                                    (null == iv ? void 0 : null === (M = iv.data) || void 0 === M ? void 0 : M.industries.length) !== 0 &&
                                                        (0, n.jsxs)("div", {
                                                            className: "mb-3 ".concat(im.tool_wrap),
                                                            children: [
                                                                (0, n.jsx)(s.Z, { links: null == iv ? void 0 : null === (F = iv.data) || void 0 === F ? void 0 : F.industries, style: im }),
                                                                (0, n.jsx)("div", {
                                                                    className: im.wrap_save,
                                                                    children: (0, n.jsx)(f.Z, {
                                                                        type: null == iv ? void 0 : null === (P = iv.data) || void 0 === P ? void 0 : P.page_type,
                                                                        id: null == iv ? void 0 : null === (U = iv.data) || void 0 === U ? void 0 : U.id,
                                                                        shareLink: i_,
                                                                        ssrDeviceType: ih,
                                                                        showShare: !!iw,
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    (0, n.jsxs)("div", {
                                                        className: im.intro_description,
                                                        children: [
                                                            (null == iv ? void 0 : null === (V = iv.data) || void 0 === V ? void 0 : V.title) &&
                                                                (0, n.jsx)("h2", { className: "ttl-40 lh-title fw-regular mb-3", children: null == iv ? void 0 : null === (I = iv.data) || void 0 === I ? void 0 : I.title }),
                                                            (null == iv ? void 0 : null === (R = iv.data) || void 0 === R ? void 0 : R.content) &&
                                                                (0, n.jsx)(d.Z, { as: "p", content: null == iv ? void 0 : null === (A = iv.data) || void 0 === A ? void 0 : A.content, className: im.content_dynamic }),
                                                            !ik && (0, n.jsx)(x.Z, { details: null == iv ? void 0 : null === (H = iv.data) || void 0 === H ? void 0 : H.details }),
                                                            (0, n.jsxs)("div", {
                                                                className: im.action_wrapper,
                                                                children: [
                                                                    iu && ib,
                                                                    (null == iv ? void 0 : null === (W = iv.data) || void 0 === W ? void 0 : null === (G = W.site_url) || void 0 === G ? void 0 : G.label) &&
                                                                        (0, n.jsx)(r.Z, {
                                                                            link: null == iv ? void 0 : null === (J = iv.data) || void 0 === J ? void 0 : null === (D = J.site_url) || void 0 === D ? void 0 : D.link,
                                                                            label: null == iv ? void 0 : null === (K = iv.data) || void 0 === K ? void 0 : null === (X = K.site_url) || void 0 === X ? void 0 : X.label,
                                                                        }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            (null == iv ? void 0 : null === (Y = iv.data) || void 0 === Y ? void 0 : null === (Q = Y.services) || void 0 === Q ? void 0 : Q.length) !== 0 &&
                                                (0, n.jsx)("div", {
                                                    className: im.service_provided,
                                                    children: (0, n.jsxs)("div", {
                                                        children: [
                                                            (0, n.jsx)("h3", { className: "ttl-32 fw-regular mb-1", children: "Services Provided" }),
                                                            (null == iv ? void 0 : null === (ii = iv.data) || void 0 === ii ? void 0 : null === ($ = ii.services) || void 0 === $ ? void 0 : $.length) !== 0 &&
                                                                (0, n.jsx)(O, { services: null == iv ? void 0 : null === (il = iv.data) || void 0 === il ? void 0 : il.services, style: im }),
                                                        ],
                                                    }),
                                                }),
                                            (0, n.jsx)("div", {
                                                className: im.service_provided,
                                                children:
                                                    null == iv
                                                        ? void 0
                                                        : null === (ia = iv.data) || void 0 === ia
                                                        ? void 0
                                                        : null === (ie = ia.client_testimonials) || void 0 === ie
                                                        ? void 0
                                                        : ie.map((i, l) => (0, n.jsx)(y, { data: i }, l)),
                                            }),
                                            (0, n.jsx)("div", {
                                                className: im.image_cluster,
                                                children:
                                                    (null == iv ? void 0 : null === (it = iv.data) || void 0 === it ? void 0 : it.image_grids) &&
                                                    (null == iv ? void 0 : null === (is = iv.data) || void 0 === is ? void 0 : null === (io = is.image_grids) || void 0 === io ? void 0 : io.length) !== 0 &&
                                                    (null == iv
                                                        ? void 0
                                                        : null === (id = iv.data) || void 0 === id
                                                        ? void 0
                                                        : id.image_grids.map((i, l) =>
                                                              "doubleImageComponent" === i.widget_type
                                                                  ? (0, t.createElement)(p, { ...i, style: im, key: l })
                                                                  : "singleImageComponent" === i.widget_type
                                                                  ? (0, t.createElement)(g, { ...i, style: im, key: l })
                                                                  : void 0
                                                          )),
                                            }),
                                            (0, n.jsxs)("div", {
                                                className: im.connect,
                                                children: [
                                                    (0, n.jsxs)("div", {
                                                        className: im.connect_inner,
                                                        children: [
                                                            (0, n.jsx)("h3", { className: "ttl-40 fw-regular mb-2", children: "Would you like to know more about the project?" }),
                                                            (0, n.jsx)("p", {
                                                                className: " fw-regular mb-0",
                                                                children: (0, n.jsx)(v.Z, {
                                                                    email: null == iv ? void 0 : null === (ic = iv.data) || void 0 === ic ? void 0 : ic.contact_mail,
                                                                    phone: null == iv ? void 0 : null === (ir = iv.data) || void 0 === ir ? void 0 : ir.contact_phone,
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, n.jsxs)("div", { className: im.action_wrapper, children: [iu && ib, (0, n.jsx)(r.Z, { link: "/contact-us", label: "Let’s talk" })] }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    });
                };
            let O = (i) => {
                let { services: l, style: e } = i;
                return (
                    (null == l ? void 0 : l.length) &&
                    (0, n.jsx)("ul", { children: null == l ? void 0 : l.map((i) => (0, n.jsx)("li", { children: (0, n.jsx)(c.Z, { href: i.link, className: null == e ? void 0 : e.link, children: i.label }) }, i.label)) })
                );
            };
            var B = e(30713);
            let q = (i) => {
                    let l,
                        { urlForOffcanvasData: e, isOpen: n } = i,
                        a = (0, t.useRef)();
                    (0, t.useEffect)(() => {
                        l = document.body.offsetWidth - document.body.clientWidth;
                    }, []);
                    let o = T(e),
                        { data: s, error: d, isLoading: c } = (0, B.ZP)(e && n ? "".concat("https://admin.wac.co", "/api/internal/works/off-canvas?title=").concat(o) : null);
                    return s && (a.current = s), { data: s || a.current, error: d, isLoading: c, scrollWidth: l };
                },
                T = (i) => {
                    if (!i.includes("&")) return i;
                    {
                        let l = encodeURIComponent(i);
                        return l;
                    }
                };
            var C = e(35682),
                S = e.n(C),
                L = e(21493),
                z = e(55883),
                E = (i) => {
                    let l,
                        { isOpen: e, toggle: t, url: o, isCaseStudyAvailable: s, urlForOffcanvasData: d, isFromSavedPage: c, trigger: r, ssrDeviceType: v } = i,
                        [_, u] = (0, z.FV)(L.D9),
                        [m, h] = (0, z.FV)(L.qB),
                        { data: x, isLoading: p, error: g, scrollWidth: f } = q({ urlForOffcanvasData: d, isOpen: e });
                    p && (l = (0, n.jsx)("div", { className: "".concat(S().loadingAnimation), children: "Loading Animations" })),
                        g && (l = null),
                        x && (l = (0, n.jsx)(Z, { data: x, url: o, style: S(), isCaseStudyAvailable: s, ssrDeviceType: v }));
                    let j = () => {
                        if (c && !m) {
                            var i;
                            let l = localStorage.getItem("wishlistedItems"),
                                e = l ? JSON.parse(l) : { pages: [] };
                            (null == e ? void 0 : null === (i = e.pages) || void 0 === i ? void 0 : i.length) !== 0 ? (t(), u(e), r && r({ ...e })) : (t(), r && r({ pages: [] }));
                        } else t();
                    };
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)(a.Z, {
                            show: e,
                            onHide: j,
                            placement: "end",
                            className: S().offcanvas,
                            children: [(0, n.jsx)(a.Z.Header, { children: (0, n.jsx)("button", { type: "button", className: "btn-close", onClick: j, "aria-label": "Close" }) }), l],
                        }),
                    });
                };
        },
        48008: function (i) {
            i.exports = {
                testimonial_box: "testimonialBox_testimonial_box__EvKOQ",
                testimonial_box_section: "testimonialBox_testimonial_box_section__dhXUI",
                testimonial_box__contents: "testimonialBox_testimonial_box__contents__nXUc_",
                contents_inner: "testimonialBox_contents_inner__Pid8y",
                testimonial_quote_icon: "testimonialBox_testimonial_quote_icon__wyV7c",
                testimonial_quote: "testimonialBox_testimonial_quote__g2c94",
                testimonial_author__name: "testimonialBox_testimonial_author__name__m8BGU",
                testimonial_author__designation: "testimonialBox_testimonial_author__designation__SReb2",
                testimonial_box__image: "testimonialBox_testimonial_box__image__Tprmz",
                testimonial_video: "testimonialBox_testimonial_video__O7co_",
                testimonial_video_btn: "testimonialBox_testimonial_video_btn__SpFQC",
            };
        },
        26766: function (i) {
            i.exports = {
                testimonial_box: "clientTestimonialBlock_testimonial_box__nwFfp",
                testimonial_box_section: "clientTestimonialBlock_testimonial_box_section__1Hz3N",
                testimonial_box__contents: "clientTestimonialBlock_testimonial_box__contents__a4dxB",
                contents_inner: "clientTestimonialBlock_contents_inner__xGxMO",
                testimonial_quote_icon: "clientTestimonialBlock_testimonial_quote_icon__PLSNI",
                testimonial_quote: "clientTestimonialBlock_testimonial_quote__cv9Ef",
                testimonial_author__name: "clientTestimonialBlock_testimonial_author__name__otve_",
                testimonial_author__designation: "clientTestimonialBlock_testimonial_author__designation__GMlJv",
                testimonial_box__image: "clientTestimonialBlock_testimonial_box__image__T3gEI",
                testimonial_video: "clientTestimonialBlock_testimonial_video__xOUmr",
            };
        },
        40002: function (i) {
            i.exports = { content: "mailandContactBox_content__OENNL" };
        },
        55908: function (i) {
            i.exports = { list_wrapper: "techList_list_wrapper__insBV" };
        },
        71135: function (i) {
            i.exports = { videoModal: "videoPopUp_videoModal__VWyJS", play_btn: "videoPopUp_play_btn__1JOXu", icon: "videoPopUp_icon__el0XM", btn_seo: "videoPopUp_btn_seo__2x6WL" };
        },
        35682: function (i) {
            i.exports = {
                offcanvas: "workOffcanvas_offcanvas__cxYAd",
                into_wrapper: "workOffcanvas_into_wrapper__MK_NV",
                image_wrapper: "workOffcanvas_image_wrapper__sSNEL",
                image_container: "workOffcanvas_image_container__0C_WC",
                content_wrapper: "workOffcanvas_content_wrapper__U0DVn",
                intro_description: "workOffcanvas_intro_description__hEXAM",
                work_link: "workOffcanvas_work_link__gDtop",
                content_dynamic: "workOffcanvas_content_dynamic__nYa28",
                action_wrapper: "workOffcanvas_action_wrapper__Vh5FS",
                offset_canvas: "workOffcanvas_offset_canvas__O2zLk",
                service_provided: "workOffcanvas_service_provided__naKal",
                image_cluster: "workOffcanvas_image_cluster__F3t11",
                link: "workOffcanvas_link__uP_cb",
                multiple_image: "workOffcanvas_multiple_image__8ERrP",
                images: "workOffcanvas_images__GkMfQ",
                main_image: "workOffcanvas_main_image__4GGqm",
                connect: "workOffcanvas_connect__yCCv3",
                connect_inner: "workOffcanvas_connect_inner__FjaMo",
                transition: "workOffcanvas_transition__4SU0S",
                transition_item: "workOffcanvas_transition_item__lk1T0",
                transition_animated: "workOffcanvas_transition_animated__eJCBa",
                loadingAnimation: "workOffcanvas_loadingAnimation__lO652",
                mymove: "workOffcanvas_mymove__dRndS",
                btn_case: "workOffcanvas_btn_case__9ym1_",
                tool_wrap: "workOffcanvas_tool_wrap___Ksed",
                wrap_save: "workOffcanvas_wrap_save__Cw8pF",
            };
        },
    },
]);
