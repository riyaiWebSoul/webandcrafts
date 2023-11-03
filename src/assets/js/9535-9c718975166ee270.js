(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9535, 2502],
    {
        70300: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return _;
                    },
                });
            var l = t(57437),
                n = t(99321),
                a = t(72645),
                o = t.n(a),
                r = t(2265),
                c = t(42815),
                s = t(42716);
            c.p8.registerPlugin(s.i);
            var d = (e) => {
                    let i = (0, r.useRef)();
                    return (
                        (0, r.useLayoutEffect)(() => {
                            let t = c.p8.context((t) => {
                                let l = t.selector(".".concat(e.steps_outer_scroll))[0].clientHeight,
                                    n = t.selector(".".concat(e.steps_item)),
                                    a = n.length - 1,
                                    o = n[a].clientHeight;
                                s.i.matchMedia({
                                    "(min-width: 1200px)": function () {
                                        let n = t.selector(".".concat(e.steps_outer_scroll)),
                                            a = c.p8.timeline({ scrollTrigger: { trigger: i.current, start: "top top+=75px", end: "100%", scrub: 0.5, pin: !0, anticipatePin: !0, force3D: !0 } });
                                        a.to(n, { y: -((l - o) * 1) });
                                    },
                                });
                            }, i);
                            return () => t.revert();
                        }, []),
                        { main: i }
                    );
                },
                _ = (e) => {
                    var i, t, a, r, c, s;
                    let { data: _, widget_type: u, id: v } = e,
                        { main: m } = d(o());
                    return (0, l.jsx)("section", {
                        className: " "
                            .concat(o().section, " d-xl-flex ")
                            .concat((null == _ ? void 0 : null === (i = _.no_spacing) || void 0 === i ? void 0 : i.top) ? "pt-0" : "", " ")
                            .concat((null == _ ? void 0 : null === (t = _.no_spacing) || void 0 === t ? void 0 : t.bottom) ? "pb-0" : "", " ")
                            .concat((null == _ ? void 0 : _.theme) === "light" && o().bg_light, " ")
                            .concat((null == _ ? void 0 : _.theme) === "dark" && o().bg_dark),
                        style: { "--background-color": (null == _ ? void 0 : _.background) ? (null == _ ? void 0 : _.background) : "#492011" },
                        ref: m,
                        id: "".concat(u).concat(v),
                        children: (0, l.jsx)("div", {
                            className: "container w-100",
                            children: (0, l.jsxs)("div", {
                                className: "row g-0",
                                children: [
                                    (0, l.jsx)("div", {
                                        className: "col-12 col-lg-6 col-xl-6",
                                        children: (0, l.jsx)("div", {
                                            className: "".concat(o().image_block, " "),
                                            children: (0, l.jsx)("div", {
                                                className: "ratio",
                                                children: (0, l.jsx)(n.Z, {
                                                    src: null == _ ? void 0 : null === (a = _.image) || void 0 === a ? void 0 : a.url,
                                                    fill: !0,
                                                    alt: null == _ ? void 0 : null === (r = _.image) || void 0 === r ? void 0 : r.alt,
                                                    className: "object-fit-cover",
                                                }),
                                            }),
                                        }),
                                    }),
                                    (0, l.jsx)("div", {
                                        className: "col col-lg-6 col-xl-6",
                                        children: (0, l.jsx)("div", {
                                            className: "".concat(o().steps, " h-100 d-flex justify-center"),
                                            children: (0, l.jsx)("div", {
                                                className: o().steps_outer,
                                                children: (0, l.jsx)("div", {
                                                    className: o().steps_outer_scroll,
                                                    children:
                                                        (null == _ ? void 0 : null === (c = _.steps) || void 0 === c ? void 0 : c.length) !== 0 &&
                                                        (null == _
                                                            ? void 0
                                                            : null === (s = _.steps) || void 0 === s
                                                            ? void 0
                                                            : s.map((e) =>
                                                                  (0, l.jsxs)(
                                                                      "div",
                                                                      {
                                                                          className: "".concat(o().steps_item),
                                                                          children: [
                                                                              (null == e ? void 0 : e.title) && (0, l.jsx)("h2", { className: "".concat(o().steps_title), children: null == e ? void 0 : e.title }),
                                                                              (null == e ? void 0 : e.content) && (0, l.jsx)("p", { children: null == e ? void 0 : e.content }),
                                                                          ],
                                                                      },
                                                                      null == e ? void 0 : e.title
                                                                  )
                                                              )),
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
        11177: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return _;
                    },
                });
            var l = t(57437),
                n = t(22312),
                a = t(2265),
                o = t(42815),
                r = t(42716);
            o.p8.registerPlugin(r.i);
            var c = (e) => {
                    let { style: i } = e,
                        t = (0, a.useRef)();
                    return (
                        (0, a.useLayoutEffect)(() => {
                            let e = o.p8.context((e) => {
                                let l = e.selector(".".concat(i.item_figure));
                                r.i.matchMedia({
                                    "(min-width: 992px)": function () {
                                        o.p8.set(l, { scale: 1.1, yPercent: -4.5, xPercent: 4 });
                                        let e = o.p8.timeline({ scrollTrigger: { trigger: t.current, start: "top top+=75", end: "150%", scrub: !0, force3D: !0 } });
                                        e.to(l, { yPercent: 8 });
                                    },
                                    all: function () {},
                                });
                            }, t);
                            return () => e.revert();
                        }, []),
                        { main: t }
                    );
                },
                s = t(13900),
                d = t.n(s);
            t(79182);
            var _ = (e) => {
                var i, t, a, o, r;
                let { data: s, widget_type: _, id: u } = e,
                    { main: v } = c({ style: d() });
                return (0, l.jsx)("section", {
                    className: d().section,
                    id: "".concat(_).concat(u),
                    ref: v,
                    children: (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsxs)("div", {
                            className: "".concat(d().box, " row flex-column-reverse flex-lg-row "),
                            children: [
                                (0, l.jsx)("div", {
                                    className: "col-lg-6",
                                    children: (0, l.jsxs)("div", {
                                        className: d().box_content,
                                        children: [
                                            (null == s ? void 0 : s.title) && (0, l.jsx)("h2", { className: "ttl-40 fw-regular ".concat(d().box_title), children: null == s ? void 0 : s.title }),
                                            (0, l.jsx)("div", {
                                                className: d().box_stack,
                                                children:
                                                    null == s
                                                        ? void 0
                                                        : null === (i = s.contents) || void 0 === i
                                                        ? void 0
                                                        : i.map((e, i) =>
                                                              (0, l.jsx)(
                                                                  "div",
                                                                  {
                                                                      className: "pb-3 mb-4 ".concat(d().item),
                                                                      children: (0, l.jsxs)("div", {
                                                                          children: [
                                                                              (null == e ? void 0 : e.title) && (0, l.jsx)("h3", { className: "ttl-40 fw-regular ".concat(d().item_title, " mb-3"), children: null == e ? void 0 : e.title }),
                                                                              (null == e ? void 0 : e.content) && (0, l.jsx)("p", { children: null == e ? void 0 : e.content }),
                                                                          ],
                                                                      }),
                                                                  },
                                                                  i
                                                              )
                                                          ),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "col-lg-6",
                                    children: (0, l.jsx)("div", {
                                        className: "".concat(d().box_image, " overflow-hidden"),
                                        children: (0, l.jsx)("figure", {
                                            className: "mb-0 ratio ".concat(d().item_figure, " "),
                                            children:
                                                (null == s ? void 0 : null === (t = s.image) || void 0 === t ? void 0 : t.url) &&
                                                (0, l.jsx)(n.Z, {
                                                    src: null == s ? void 0 : null === (a = s.image) || void 0 === a ? void 0 : a.url,
                                                    fill: !0,
                                                    alt: (null == s ? void 0 : null === (o = s.image) || void 0 === o ? void 0 : o.alt) ? (null == s ? void 0 : null === (r = s.image) || void 0 === r ? void 0 : r.alt) : "Nestu Health",
                                                    className: "object-fit-cover",
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
        16409: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return _;
                    },
                });
            var l = t(57437),
                n = t(89374),
                a = t.n(n),
                o = t(2265),
                r = t(42815),
                c = t(42716);
            r.p8.registerPlugin(c.i);
            var s = (e) => {
                    let i = (0, o.useRef)();
                    return (
                        (0, o.useLayoutEffect)(() => {
                            let t = r.p8.context((t) => {
                                let l = t.selector(".".concat(e.mockup_01)),
                                    n = t.selector(".".concat(e.mockup_02)),
                                    a = t.selector(".".concat(e.mockup_03)),
                                    o = t.selector(".".concat(e.mockup_04)),
                                    s = t.selector(".".concat(e.mockup_05)),
                                    d = t.selector(".".concat(e.mockup_06));
                                c.i.matchMedia({
                                    "(min-width: 1200px)": function () {
                                        r.p8.set([l, a, o, d], { yPercent: 120, opacity: 0.5, force3D: !0, willChange: "transform" }), r.p8.set([n, s], { yPercent: 100, opacity: 0.5, force3D: !0, willChange: "transform" });
                                        let e = r.p8.timeline({ scrollTrigger: { trigger: i.current, start: "top center+=75", end: "bottom center+=75", scrub: 1, force3D: !0 } });
                                        e.to([l, n, a, o, s, d], { opacity: 1, duration: 1 }),
                                            e.to([n, s], { yPercent: 10, stagger: 0.1 }, "<"),
                                            e.to([l, o], { yPercent: 30, stagger: 0.1 }, "<+=0.05"),
                                            e.to([a, d], { yPercent: 20, stagger: 0.1 }, "<+=0.05");
                                    },
                                });
                            }, i);
                            return () => t.revert();
                        }, []),
                        { main: i }
                    );
                },
                d = t(99321),
                _ = (e) => {
                    var i, t, n, o, r, c, _, u, v, m, h, p, x, g;
                    let { data: j, widget_type: f } = e,
                        { main: w } = s(a());
                    return (0, l.jsx)("section", {
                        className: ""
                            .concat(a().section, " ")
                            .concat((null == j ? void 0 : null === (i = j.no_spacing) || void 0 === i ? void 0 : i.top) ? "pt-0" : "", " ")
                            .concat((null == j ? void 0 : null === (t = j.no_spacing) || void 0 === t ? void 0 : t.bottom) ? "pb-0" : "", " ")
                            .concat((null == j ? void 0 : j.theme) === "light" && a().bg_light, " ")
                            .concat((null == j ? void 0 : j.theme) === "dark" && a().bg_dark),
                        ref: w,
                        id: f,
                        children: (0, l.jsxs)("div", {
                            className: "".concat(a().mockup_stack, " row row-cols-3"),
                            children: [
                                (0, l.jsx)("div", {
                                    children: (0, l.jsx)("figure", {
                                        className: "ratio mb-0 ".concat(a().mockup_01),
                                        children: (0, l.jsx)(d.Z, {
                                            src: null == j ? void 0 : null === (n = j.images[0]) || void 0 === n ? void 0 : n.url,
                                            fill: !0,
                                            alt: null == j ? void 0 : null === (o = j.images[0]) || void 0 === o ? void 0 : o.alt,
                                        }),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    children: (0, l.jsx)("figure", {
                                        className: "ratio mb-0 ".concat(a().mockup_02),
                                        children: (0, l.jsx)(d.Z, {
                                            src: null == j ? void 0 : null === (r = j.images[1]) || void 0 === r ? void 0 : r.url,
                                            fill: !0,
                                            alt: null == j ? void 0 : null === (c = j.images[1]) || void 0 === c ? void 0 : c.alt,
                                        }),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    children: (0, l.jsx)("figure", {
                                        className: "ratio mb-0 ".concat(a().mockup_03),
                                        children: (0, l.jsx)(d.Z, {
                                            src: null == j ? void 0 : null === (_ = j.images[2]) || void 0 === _ ? void 0 : _.url,
                                            fill: !0,
                                            alt: null == j ? void 0 : null === (u = j.images[2]) || void 0 === u ? void 0 : u.alt,
                                        }),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    children: (0, l.jsx)("figure", {
                                        className: "ratio mb-0 ".concat(a().mockup_04),
                                        children: (0, l.jsx)(d.Z, {
                                            src: null == j ? void 0 : null === (v = j.images[3]) || void 0 === v ? void 0 : v.url,
                                            fill: !0,
                                            alt: null == j ? void 0 : null === (m = j.images[3]) || void 0 === m ? void 0 : m.alt,
                                        }),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    children: (0, l.jsx)("figure", {
                                        className: "ratio mb-0 ".concat(a().mockup_05),
                                        children: (0, l.jsx)(d.Z, {
                                            src: null == j ? void 0 : null === (h = j.images[4]) || void 0 === h ? void 0 : h.url,
                                            fill: !0,
                                            alt: null == j ? void 0 : null === (p = j.images[4]) || void 0 === p ? void 0 : p.alt,
                                        }),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    children: (0, l.jsx)("figure", {
                                        className: "ratio mb-0 ".concat(a().mockup_06),
                                        children: (0, l.jsx)(d.Z, {
                                            src: null == j ? void 0 : null === (x = j.images[5]) || void 0 === x ? void 0 : x.url,
                                            fill: !0,
                                            alt: null == j ? void 0 : null === (g = j.images[5]) || void 0 === g ? void 0 : g.alt,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    });
                };
        },
        83515: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return _;
                    },
                });
            var l = t(57437),
                n = t(2265),
                a = t(89938),
                o = t.n(a),
                r = t(22312),
                c = t(60210),
                s = t(19981),
                d = (e) => {
                    let { style: i, video: t } = e,
                        { status: n, setFalse: a, setTrue: o } = (0, c.Z)();
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)("button", {
                                className: i.plybtn,
                                onClick: o,
                                children: (0, l.jsx)("figure", { className: "ratio", children: (0, l.jsx)(r.Z, { fill: !0, src: null == t ? void 0 : t.play_button, alt: null == t ? void 0 : t.alt }) }),
                            }),
                            (0, l.jsx)(s.Z, {
                                show: n,
                                onHide: () => a(),
                                size: "xl",
                                "aria-labelledby": "contained-modal-title-vcenter",
                                centered: !0,
                                className: "".concat(i.testimonial_modal),
                                children: (0, l.jsx)(s.Z.Body, {
                                    children: (0, l.jsx)("video", {
                                        className: i.video,
                                        width: "100%",
                                        height: "100%",
                                        autoPlay: !0,
                                        playsInline: !0,
                                        controls: !0,
                                        children: (0, l.jsx)("source", { src: null == t ? void 0 : t.url, type: "video/mp4" }),
                                    }),
                                }),
                            }),
                        ],
                    });
                },
                _ = (e) => {
                    var i, t, a;
                    let { data: c, widget_type: s } = e,
                        _ = (0, n.useRef)();
                    return (0, l.jsx)("section", {
                        className: " ".concat(o().section, " visible"),
                        ref: _,
                        id: s,
                        children: (0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsxs)("div", {
                                className: "".concat(o().block, " "),
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: "".concat(o().block_imgwrap),
                                        children: [
                                            (0, l.jsx)("figure", {
                                                className: "".concat(o().block_img, " ratio"),
                                                children: (0, l.jsx)(r.Z, {
                                                    fill: !0,
                                                    src: null == c ? void 0 : null === (i = c.testimonial_image) || void 0 === i ? void 0 : i.url,
                                                    alt: null == c ? void 0 : null === (t = c.testimonial_image) || void 0 === t ? void 0 : t.alt,
                                                }),
                                            }),
                                            (null == c ? void 0 : null === (a = c.testimonial_video) || void 0 === a ? void 0 : a.url) && (0, l.jsx)(d, { video: null == c ? void 0 : c.testimonial_video, style: o() }),
                                            (0, l.jsx)("span", { className: o().plybtn, children: (0, l.jsx)("figure", { className: "ratio", children: (0, l.jsx)(r.Z, { fill: !0, src: "/image/testimonial/play.svg" }) }) }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: "".concat(o().block_contentwrap),
                                        children: [
                                            (0, l.jsx)("span", { children: (0, l.jsx)("figure", { className: "ratio", children: (0, l.jsx)(r.Z, { fill: !0, src: "/image/quote.png", alt: "quote image" }) }) }),
                                            (null == c ? void 0 : c.quote_descreption) && (0, l.jsx)("p", { children: null == c ? void 0 : c.quote_descreption }),
                                            (0, l.jsxs)("div", {
                                                className: "".concat(o().block_namewrap),
                                                children: [
                                                    (null == c ? void 0 : c.name) && (0, l.jsx)("h5", { children: null == c ? void 0 : c.name }),
                                                    (null == c ? void 0 : c.designation) && (0, l.jsx)("span", { children: null == c ? void 0 : c.designation }),
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
        51992: function (e, i, t) {
            "use strict";
            var l = t(57437),
                n = t(58338),
                a = t.n(n),
                o = t(86373);
            i.Z = (e) => {
                let { className: i, tags: t = [] } = e;
                return 0 === t.length
                    ? null
                    : (0, l.jsx)("div", {
                          className: "".concat(a().badge_wrapper, " ").concat(i || ""),
                          children: (0, l.jsx)("ul", {
                              className: "row",
                              children: t.map((e) =>
                                  (0, l.jsx)("li", { className: "".concat(a().items, " col-auto"), children: (0, l.jsx)(o.Z, { href: "/blog/category/".concat(e.slug), className: "".concat(a().link), children: e.title }) }, e.title)
                              ),
                          }),
                      });
            };
        },
        21058: function (e, i, t) {
            "use strict";
            t.d(i, {
                Z: function () {
                    return l.Z;
                },
            });
            var l = t(51992);
        },
        30558: function (e, i, t) {
            "use strict";
            var l = t(57437),
                n = t(2265),
                a = t(24033),
                o = t(21058),
                r = t(22312),
                c = t(47966),
                s = t.n(c),
                d = t(16010);
            i.Z = (e) => {
                var i, t, c, _;
                let { blog: u, priority: v = !1, type: m, showTags: h = !0 } = e,
                    p = (0, n.useRef)(null),
                    x = (0, n.useRef)(null),
                    g = (0, a.useRouter)();
                (0, n.useEffect)(() => {
                    (null == u ? void 0 : u.url) && g.prefetch(null == u ? void 0 : u.url);
                }, [null == u ? void 0 : u.url]);
                let j = (null == u ? void 0 : u.category) === "Blog" ? "/blog" : (null == u ? void 0 : u.category) === "News" ? "news" : (null == u ? void 0 : u.category) === "Events" && "/events";
                return (0, l.jsx)("div", {
                    className: "".concat(s().item_wrapper, " ").concat("sm" === m ? s().blog_sm : ""),
                    children: (0, l.jsxs)(d.Z, {
                        className: "".concat(s().link),
                        href: "".concat(j, "/").concat(null == u ? void 0 : u.url),
                        children: [
                            (0, l.jsx)("div", {
                                className: "".concat(s().image_wrapper),
                                ref: p,
                                children:
                                    (null == u ? void 0 : null === (i = u.image) || void 0 === i ? void 0 : i.url) &&
                                    (0, l.jsx)(r.Z, {
                                        alt: null == u ? void 0 : null === (t = u.image) || void 0 === t ? void 0 : t.alternative_text,
                                        src: null == u ? void 0 : null === (c = u.image) || void 0 === c ? void 0 : c.url,
                                        fill: !0,
                                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw",
                                        ref: x,
                                    }),
                            }),
                            (0, l.jsxs)("div", {
                                className: "".concat(s().content_wrapper),
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: "".concat(s().details),
                                        children: [
                                            (0, l.jsxs)("h3", {
                                                className: "".concat(s().category, " fw-regular"),
                                                children: [null == u ? void 0 : u.category, (null == u ? void 0 : u.read_time) && (0, l.jsx)("span", { className: s().time, children: null == u ? void 0 : u.read_time })],
                                            }),
                                            (null == u ? void 0 : u.date) && (0, l.jsx)("h3", { className: "".concat(s().date_wrapper, " fw-regular"), children: null == u ? void 0 : u.date }),
                                        ],
                                    }),
                                    (0, l.jsx)("h4", { className: "".concat(s().title, " fw-medium mb-0"), children: null == u ? void 0 : u.title }),
                                    (null == u ? void 0 : u.author) && (0, l.jsx)("p", { className: s().author, children: null == u ? void 0 : u.author }),
                                    h &&
                                        (null == u ? void 0 : null === (_ = u.tags) || void 0 === _ ? void 0 : _.length) > 0 &&
                                        (0, l.jsx)("div", { className: "mt-2 ".concat(s().badge_wrap), children: (0, l.jsx)(o.Z, { tags: null == u ? void 0 : u.tags }) }),
                                ],
                            }),
                        ],
                    }),
                });
            };
        },
        93834: function (e, i, t) {
            "use strict";
            t.d(i, {
                Z: function () {
                    return l.Z;
                },
            });
            var l = t(30558);
        },
        80700: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return v;
                    },
                });
            var l = t(57437),
                n = t(16010),
                a = (e) => {
                    let { style: i, data: t, fromSearchPage: a } = e,
                        o =
                            t &&
                            (null == t ? void 0 : t.breadcrumbs.length) !== 0 &&
                            (null == t
                                ? void 0
                                : t.breadcrumbs.map((e, a) =>
                                      (0, l.jsx)(
                                          "li",
                                          {
                                              className: i.breadcrumb_item,
                                              children:
                                                  (null == e ? void 0 : e.link) &&
                                                  (0, l.jsx)(l.Fragment, {
                                                      children:
                                                          a + 1 !== (null == t ? void 0 : t.breadcrumbs.length)
                                                              ? (0, l.jsx)(n.Z, { href: null == e ? void 0 : e.link, role: "button", tabIndex: "0", children: e.title })
                                                              : (0, l.jsx)("span", { children: e.title }),
                                                  }),
                                          },
                                          null == e ? void 0 : e.title
                                      )
                                  ));
                    return (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsx)("nav", {
                            "aria-label": "breadcrumb",
                            children: (0, l.jsx)("div", {
                                className: i.breadcrumb,
                                children: (0, l.jsxs)("ol", { children: [!a && (0, l.jsx)("li", { className: i.breadcrumb_item, children: (0, l.jsx)(n.Z, { href: "/", role: "button", tabIndex: "0", children: "Home" }) }), o] }),
                            }),
                        }),
                    });
                },
                o = t(28952),
                r = t(13888),
                c = t.n(r),
                s = (e) => {
                    let i,
                        { data: t, saveFolderId: a, saveFolderType: r, shareLink: s, ssrDeviceType: d } = e,
                        _ = null == t ? void 0 : t.breadcrumbs;
                    return (
                        (i = (null == _ ? void 0 : _.length) >= 2 ? _[(null == _ ? void 0 : _.length) - 2] : { title: "Home", link: "/" }),
                        (0, l.jsx)("div", {
                            className: "".concat(c().wrapper),
                            children: (0, l.jsx)("div", {
                                className: "container",
                                children: (0, l.jsxs)("div", {
                                    className: "".concat(c().inner),
                                    children: [
                                        (0, l.jsxs)(n.Z, { href: "".concat(null == i ? void 0 : i.link), className: "".concat(c().item), children: [(0, l.jsx)("span", {}), null == i ? void 0 : i.title] }),
                                        (0, l.jsx)("div", { className: "".concat(c().toolbar), children: (0, l.jsx)(o.Z, { type: r, id: a, shareLink: s, ssrDeviceType: d }) }),
                                    ],
                                }),
                            }),
                        })
                    );
                },
                d = t(50784),
                _ = t.n(d),
                u = t(16898),
                v = (e) => {
                    let { data: i, widget_type: t, id: n, fromSearchPage: o, ssrDeviceType: r, saveFolderType: c, saveFolderId: d, slug: v } = e,
                        { width: m } = (0, u.Z)();
                    return (0, l.jsxs)("div", {
                        className: "".concat(_().breadCrumbs, " ").concat(void 0 === r ? "" : _().active),
                        id: "".concat(t).concat(n, " "),
                        children: [
                            (0, l.jsx)("div", { className: "d-none d-lg-block", children: (0, l.jsx)(a, { style: _(), data: i, fromSearchPage: o }) }),
                            (0, l.jsx)("div", { className: "d-lg-none", children: (0, l.jsx)(s, { data: i, saveFolderType: c, saveFolderId: d, shareLink: v, ssrDeviceType: r }) }),
                        ],
                    });
                };
        },
        26901: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return h;
                    },
                });
            var l = t(57437),
                n = t(53185),
                a = t(62286),
                o = t.n(a),
                r = t(16010),
                c = t(67224),
                s = t(99321),
                d = t(30713),
                _ = t(60210),
                u = t(18893);
            let v = (e) => {
                let { slug: i, show: t } = e,
                    { status: l, setFalse: n, setTrue: a } = (0, _.Z)(),
                    { data: o, isLoading: r, error: c } = (0, d.ZP)(i ? "".concat("https://admin.wac.co").concat(u.rX, "?name=").concat(i) : null, { onError: (e) => {} });
                return {
                    status: l,
                    handlePlay: () => {
                        a(!0);
                    },
                    handlePause: () => {
                        n(!0);
                    },
                    canvasData: o,
                    isLoading: r,
                    error: c,
                };
            };
            var m = t(79182),
                h = (e) => {
                    var i, t, a, d, _, u, h, p, x, g, j, f, w, b, N, k, y, Z, C, B, S, I, L, P, T;
                    let { show: q, handleClose: H, slug: V } = e,
                        { handlePause: O, handlePlay: E, status: M, canvasData: F, isLoading: A, error: R } = v({ slug: V, show: q });
                    return R
                        ? null
                        : (0, l.jsxs)(n.Z, {
                              show: q,
                              onHide: H,
                              placement: "end",
                              className: o().offcanvas,
                              children: [
                                  (0, l.jsx)(n.Z.Header, { closeButton: !0 }),
                                  (0, l.jsx)(n.Z.Body, {
                                      "data-lenis-prevent": !0,
                                      children: (0, l.jsxs)("div", {
                                          className: "".concat(o().body),
                                          children: [
                                              (null == F ? void 0 : null === (i = F.data) || void 0 === i ? void 0 : i.image) &&
                                                  (0, l.jsx)("div", {
                                                      className: "".concat(o().imageWrapper, " ratio mb-3"),
                                                      children: (0, l.jsx)(s.Z, {
                                                          src: null == F ? void 0 : null === (a = F.data) || void 0 === a ? void 0 : null === (t = a.image) || void 0 === t ? void 0 : t.url,
                                                          fill: !0,
                                                          alt: null == F ? void 0 : null === (_ = F.data) || void 0 === _ ? void 0 : null === (d = _.image) || void 0 === d ? void 0 : d.alternative_text,
                                                      }),
                                                  }),
                                              (0, l.jsxs)("div", {
                                                  className: "".concat(o().mainContentArea),
                                                  children: [
                                                      (0, l.jsxs)("div", {
                                                          className: "".concat(o().description),
                                                          children: [
                                                              (null == F ? void 0 : null === (u = F.data) || void 0 === u ? void 0 : u.logo) &&
                                                                  (0, l.jsx)("div", {
                                                                      className: "".concat(o().clientLogoInner, " ratio mb-2"),
                                                                      children: (0, l.jsx)("div", {
                                                                          className: "".concat(o().clientLogo, " ratio"),
                                                                          children: (0, l.jsx)(s.Z, {
                                                                              src: null == F ? void 0 : null === (p = F.data) || void 0 === p ? void 0 : null === (h = p.logo) || void 0 === h ? void 0 : h.url,
                                                                              fill: !0,
                                                                              alt: null == F ? void 0 : null === (g = F.data) || void 0 === g ? void 0 : null === (x = g.logo) || void 0 === x ? void 0 : x.alternative_text,
                                                                          }),
                                                                      }),
                                                                  }),
                                                              (null == F ? void 0 : null === (j = F.data) || void 0 === j ? void 0 : j.description) &&
                                                                  (0, l.jsx)(m.Z, { as: "p", content: null == F ? void 0 : null === (f = F.data) || void 0 === f ? void 0 : f.description, className: "".concat(o().clientDescription) }),
                                                              (0, l.jsx)("div", {
                                                                  className: "".concat(o().clientDetailList, " mb-4"),
                                                                  children: (0, l.jsxs)("ul", {
                                                                      children: [
                                                                          (null == F ? void 0 : null === (w = F.data) || void 0 === w ? void 0 : w.website_link) &&
                                                                              (0, l.jsxs)("li", {
                                                                                  children: [
                                                                                      (0, l.jsx)("span", { children: "Website" }),
                                                                                      (0, l.jsx)("span", {
                                                                                          children: (0, l.jsx)(r.Z, {
                                                                                              href: null == F ? void 0 : null === (b = F.data) || void 0 === b ? void 0 : b.website_link,
                                                                                              target: "_blank",
                                                                                              linkType: "external",
                                                                                              children: null == F ? void 0 : null === (N = F.data) || void 0 === N ? void 0 : N.website_link,
                                                                                          }),
                                                                                      }),
                                                                                  ],
                                                                              }),
                                                                          (null == F ? void 0 : null === (k = F.data) || void 0 === k ? void 0 : k.region) &&
                                                                              (0, l.jsxs)("li", {
                                                                                  children: [
                                                                                      (0, l.jsx)("span", { children: "Location" }),
                                                                                      (0, l.jsx)("span", { children: null == F ? void 0 : null === (y = F.data) || void 0 === y ? void 0 : y.region }),
                                                                                  ],
                                                                              }),
                                                                          (null == F ? void 0 : null === (Z = F.data) || void 0 === Z ? void 0 : Z.industry) &&
                                                                              (0, l.jsxs)("li", {
                                                                                  children: [
                                                                                      (0, l.jsx)("span", { children: "Industries" }),
                                                                                      (0, l.jsx)("span", { children: null == F ? void 0 : null === (C = F.data) || void 0 === C ? void 0 : C.industry }),
                                                                                  ],
                                                                              }),
                                                                      ],
                                                                  }),
                                                              }),
                                                          ],
                                                      }),
                                                      (0, l.jsxs)("div", {
                                                          className: "".concat(o().clientProject, " mb-4"),
                                                          children: [
                                                              (null == F ? void 0 : null === (S = F.data) || void 0 === S ? void 0 : null === (B = S.services) || void 0 === B ? void 0 : B.length) !== 0 &&
                                                                  (0, l.jsx)("h3", { className: "".concat(o().title, " ttl-40 fw-regular mb-3"), children: "Project" }),
                                                              (0, l.jsx)("ul", {
                                                                  className: "".concat(o().weProvide, "  mb-2"),
                                                                  children:
                                                                      null == F
                                                                          ? void 0
                                                                          : null === (L = F.data) || void 0 === L
                                                                          ? void 0
                                                                          : null === (I = L.services) || void 0 === I
                                                                          ? void 0
                                                                          : I.map((e, i) =>
                                                                                (0, l.jsx)(
                                                                                    "li",
                                                                                    { children: (0, l.jsx)(r.Z, { className: "".concat(o().link), href: null == e ? void 0 : e.link, children: null == e ? void 0 : e.label }) },
                                                                                    i
                                                                                )
                                                                            ),
                                                              }),
                                                              null == F
                                                                  ? void 0
                                                                  : null === (T = F.data) || void 0 === T
                                                                  ? void 0
                                                                  : null === (P = T.works) || void 0 === P
                                                                  ? void 0
                                                                  : P.map((e, i) => {
                                                                        var t, n, a, d;
                                                                        return (0, l.jsxs)(
                                                                            "div",
                                                                            {
                                                                                children: [
                                                                                    (null == e ? void 0 : e.image) &&
                                                                                        (0, l.jsx)("div", {
                                                                                            className: "".concat(o().imageMainWrapper),
                                                                                            children: (0, l.jsx)("div", {
                                                                                                className: "".concat(o().clientProjectImage, " ratio mb-4"),
                                                                                                children: (0, l.jsx)(s.Z, {
                                                                                                    src: null == e ? void 0 : null === (t = e.image) || void 0 === t ? void 0 : t.url,
                                                                                                    fill: !0,
                                                                                                    alt: null == e ? void 0 : null === (n = e.image) || void 0 === n ? void 0 : n.alternative_text,
                                                                                                }),
                                                                                            }),
                                                                                        }),
                                                                                    (0, l.jsxs)("div", {
                                                                                        className: "".concat(o().clientProjectDetails),
                                                                                        children: [
                                                                                            (0, l.jsx)("div", {
                                                                                                className: o().client_categories,
                                                                                                children:
                                                                                                    (null == e ? void 0 : null === (a = e.industries) || void 0 === a ? void 0 : a.length) !== 0 &&
                                                                                                    (null == e
                                                                                                        ? void 0
                                                                                                        : null === (d = e.industries) || void 0 === d
                                                                                                        ? void 0
                                                                                                        : d.map((e) => (0, l.jsx)("h4", { className: "".concat(o().category, " fw-regular"), children: e }, e))),
                                                                                            }),
                                                                                            (0, l.jsxs)("div", {
                                                                                                className: "".concat(o().clientProjectArticle),
                                                                                                children: [
                                                                                                    (null == e ? void 0 : e.description) &&
                                                                                                        (0, l.jsx)(m.Z, { content: null == e ? void 0 : e.description, as: "p", className: "".concat(o().projectDescription, " ttl-20 mb-2") }),
                                                                                                    (null == e ? void 0 : e.url) &&
                                                                                                        (0, l.jsxs)(
                                                                                                            r.Z,
                                                                                                            {
                                                                                                                href: null == e ? void 0 : e.url,
                                                                                                                className: "".concat(o().links, " ").concat(o().anim, " btn btn-secondary"),
                                                                                                                children: [
                                                                                                                    (0, l.jsx)("span", { children: "View case study" }),
                                                                                                                    (0, l.jsx)("span", { children: (0, l.jsx)(c.Z, { icon: "arrow-right", size: "16" }) }),
                                                                                                                ],
                                                                                                            },
                                                                                                            "test"
                                                                                                        ),
                                                                                                ],
                                                                                            }),
                                                                                        ],
                                                                                    }),
                                                                                ],
                                                                            },
                                                                            i
                                                                        );
                                                                    }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  }),
                              ],
                          });
                };
        },
        25152: function (e, i, t) {
            "use strict";
            t.d(i, {
                Z: function () {
                    return r;
                },
            });
            var l = t(57437),
                n = t(18917),
                a = t.n(n),
                o = t(16010),
                r = (e) => {
                    var i, t, n, r, c, s;
                    let { data: d, active: _ } = e;
                    return (0, l.jsx)("div", {
                        className: "row justify-content-center",
                        children: (0, l.jsx)("div", {
                            className: "col-md-10 col-lg-8  col-xl-7 col-xxl-6",
                            children: (0, l.jsxs)("div", {
                                className: "".concat(a().title_wrap, " text-center"),
                                children: [
                                    (null == d ? void 0 : d.title) && (0, l.jsx)("h1", { className: a().title, children: null == d ? void 0 : d.title }),
                                    (0, l.jsxs)("p", {
                                        className: "mb-0",
                                        children: [
                                            null == d ? void 0 : null === (i = d.subtitles) || void 0 === i ? void 0 : i.title_1,
                                            " ",
                                            (0, l.jsx)(o.Z, {
                                                href: "".concat(null == d ? void 0 : null === (n = d.subtitles) || void 0 === n ? void 0 : null === (t = n.link) || void 0 === t ? void 0 : t.link),
                                                children: null == d ? void 0 : null === (c = d.subtitles) || void 0 === c ? void 0 : null === (r = c.link) || void 0 === r ? void 0 : r.label,
                                            }),
                                            " \xa0",
                                            null == d ? void 0 : null === (s = d.subtitles) || void 0 === s ? void 0 : s.title_2,
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    });
                };
        },
        9189: function (e, i, t) {
            "use strict";
            t.d(i, {
                Z: function () {
                    return s;
                },
            });
            var l = t(57437),
                n = t(16010),
                a = t(62075),
                o = t(1482),
                r = t.n(o),
                c = t(22312),
                s = (e) => {
                    var i, t;
                    let { item: o } = e,
                        s = (null == o ? void 0 : o.category) === "Blog" ? "/blog" : (null == o ? void 0 : o.category) === "News" ? "news" : (null == o ? void 0 : o.category) === "Events" && "/events";
                    return (0, l.jsxs)("div", {
                        className: r().card,
                        children: [
                            (0, l.jsx)("div", {
                                className: r().card_head,
                                children: (0, l.jsx)("div", {
                                    className: "".concat(r().img, " ratio"),
                                    children: (0, l.jsx)(c.Z, {
                                        src: null == o ? void 0 : null === (i = o.image) || void 0 === i ? void 0 : i.url,
                                        fill: !0,
                                        alt: null == o ? void 0 : null === (t = o.image) || void 0 === t ? void 0 : t.alternative_text,
                                    }),
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: "".concat(r().card_content, " "),
                                children: [
                                    (0, l.jsxs)("article", {
                                        className: "".concat(r().card_body, " "),
                                        children: [
                                            (null == o ? void 0 : o.category) &&
                                                (0, l.jsxs)("h3", {
                                                    className: "mb-lg-3 fw-regular",
                                                    children: [null == o ? void 0 : o.category, (null == o ? void 0 : o.read_time) && (0, l.jsx)("span", { children: null == o ? void 0 : o.read_time })],
                                                }),
                                            (null == o ? void 0 : o.title) && (0, l.jsx)("h4", { className: "mb-0 mb-lg-2 mb-xxl-4 ".concat(r().paragraph), children: null == o ? void 0 : o.title }),
                                        ],
                                    }),
                                    (0, l.jsx)("div", {
                                        className: r().card_footer,
                                        children: (0, l.jsxs)(n.Z, {
                                            href: "".concat(s, "/").concat(null == o ? void 0 : o.url),
                                            "aria-label": "link to ".concat(null == o ? void 0 : o.title),
                                            className: "btn btn-secondary stretched-link",
                                            children: [
                                                (0, l.jsx)("span", { children: (0, l.jsx)(a.Z, { icon: "arrow-right", size: 12 }) }),
                                                (0, l.jsxs)("span", { children: ["Read more", " ", (0, l.jsx)("span", { className: "".concat(r().screen_reader), children: null == o ? void 0 : o.title })] }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                };
        },
        59964: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return v;
                    },
                });
            var l = t(57437),
                n = t(62943),
                a = t(16010),
                o = t(62075),
                r = t(21845),
                c = t.n(r),
                s = (e) => {
                    let { job: i } = e;
                    return (0, l.jsxs)("div", {
                        className: c().item,
                        children: [
                            (0, l.jsx)(a.Z, { href: "/careers/job-openings/".concat(null == i ? void 0 : i.slug), className: "stretched-link" }),
                            (null == i ? void 0 : i.title) && (0, l.jsx)("div", { className: "".concat(c().item_title, " ttl-24"), children: null == i ? void 0 : i.title }),
                            (null == i ? void 0 : i.experienceRangeText) && (0, l.jsx)("div", { className: "".concat(c().item_year, " "), children: null == i ? void 0 : i.experienceRangeText }),
                            (null == i ? void 0 : i.slug) &&
                                (0, l.jsx)("div", {
                                    className: "".concat(c().item_apply, " "),
                                    children: (0, l.jsxs)(a.Z, {
                                        href: "/careers/job-openings/".concat(null == i ? void 0 : i.slug),
                                        children: [(0, l.jsx)("span", { children: (0, l.jsx)(o.Z, { icon: "arrow-right", size: "15" }) }), (0, l.jsx)("span", { className: c().label, children: "Apply now" })],
                                    }),
                                }),
                        ],
                    });
                },
                d = t(27626),
                _ = t.n(d),
                u = t(67224),
                v = (e) => {
                    let { jobOpenings: i, isLoading: t, error: a } = e;
                    return a
                        ? (0, l.jsx)("h2", { children: "Some error occurred" })
                        : (0, l.jsx)("div", {
                              className: _().accordion,
                              children: (0, l.jsx)(n.Z, {
                                  children:
                                      (null == i ? void 0 : i.departments.length) !== 0 &&
                                      (null == i
                                          ? void 0
                                          : i.departments.map((e) =>
                                                (0, l.jsxs)(
                                                    n.Z.Item,
                                                    {
                                                        eventKey: null == e ? void 0 : e.name,
                                                        children: [
                                                            (0, l.jsxs)(n.Z.Header, {
                                                                as: "div",
                                                                className: "ttl-24",
                                                                children: [
                                                                    "".concat(null == e ? void 0 : e.name),
                                                                    (0, l.jsx)("span", { children: "(".concat(null == e ? void 0 : e.count, ")") }),
                                                                    (0, l.jsx)("span", { className: "".concat(_().icon, " icon"), children: (0, l.jsx)(u.Z, { icon: "arrow-down", size: 15 }) }),
                                                                ],
                                                            }),
                                                            (0, l.jsx)(n.Z.Body, { children: null == e ? void 0 : e.job_openings.map((e) => (0, l.jsx)(s, { job: e }, null == e ? void 0 : e.title)) }),
                                                        ],
                                                    },
                                                    null == e ? void 0 : e.name
                                                )
                                            )),
                              }),
                          });
                };
        },
        96506: function (e, i, t) {
            "use strict";
            t.d(i, {
                Z: function () {
                    return s;
                },
            });
            var l = t(57437),
                n = t(62075),
                a = t(22312),
                o = t(16010),
                r = t(21453),
                c = t.n(r),
                s = (e) => {
                    var i, t, r;
                    let { card: s, hasBg: d, imageAspectRatio: _, coverSize: u } = e;
                    return (0, l.jsxs)("div", {
                        className: "".concat(c().listing_card, " ").concat(d ? c().withBg : ""),
                        children: [
                            (null == s ? void 0 : null === (i = s.image) || void 0 === i ? void 0 : i.url) &&
                                (0, l.jsx)("div", {
                                    className: ""
                                        .concat(c().image, " ")
                                        .concat("sm" === u ? c().image_sm : "", " ratio ratio-1 ")
                                        .concat(""),
                                    style: { "--aspect-ratio": "".concat(_, "%") ? "".concat(_, "%") : 0 },
                                    children: (0, l.jsx)(a.Z, {
                                        src: null == s ? void 0 : null === (t = s.image) || void 0 === t ? void 0 : t.url,
                                        alt: null == s ? void 0 : null === (r = s.image) || void 0 === r ? void 0 : r.alternative_text,
                                        width: 442,
                                        height: 91,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: "".concat(c().context_wrapper),
                                children: [
                                    (null == s ? void 0 : s.title) && (0, l.jsx)("h3", { className: "".concat(c().title, "  fw-regular"), children: null == s ? void 0 : s.title }),
                                    (null == s ? void 0 : s.description) && (0, l.jsx)("p", { className: "".concat(c().description, " fs-18 mb-2 mb-lg-3 lh-primary"), children: null == s ? void 0 : s.description }),
                                    (null == s ? void 0 : s.url) &&
                                        (0, l.jsxs)(o.Z, {
                                            href: null == s ? void 0 : s.url,
                                            "aria-label": "Learn more about ".concat(null == s ? void 0 : s.title),
                                            className: "btn btn-secondary stretched-link",
                                            children: [
                                                "Learn more ",
                                                (0, l.jsxs)("span", { className: "".concat(c().screen_reader), children: ["about ", null == s ? void 0 : s.title] }),
                                                (0, l.jsx)("span", { className: "ms-1", children: (0, l.jsx)(n.Z, { icon: "arrow-right", size: "16" }) }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    });
                };
        },
        21525: function (e, i, t) {
            "use strict";
            t.d(i, {
                _: function () {
                    return o;
                },
            });
            var l = t(57437),
                n = t(2265);
            let a = (0, n.createContext)(null);
            i.Z = (e) => {
                let { children: i } = e,
                    [t, o] = (0, n.useState)(),
                    r = (0, n.useRef)();
                return (0, l.jsx)(a.Provider, {
                    value: {
                        activeTabHash: t,
                        handleSetHash: (e) => {
                            o(e);
                        },
                        headerRef: r,
                    },
                    children: i,
                });
            };
            let o = () => {
                let { activeTabHash: e, handleSetHash: i, headerRef: t } = (0, n.useContext)(a);
                return { activeTabHash: e, handleSetHash: i, headerRef: t };
            };
        },
        94478: function (e, i, t) {
            "use strict";
            var l = t(2265),
                n = t(55883),
                a = t(60210),
                o = t(21493),
                r = t(16898);
            i.Z = (e) => {
                let { type: i, id: t } = e,
                    { status: c, setTrue: s, setFalse: d } = (0, a.Z)(),
                    [_, u] = (0, n.FV)(o.D9),
                    [v, m] = (0, n.FV)(o.qB),
                    { isDesktop: h } = (0, r.Z)();
                return (
                    (0, l.useEffect)(() => {
                        let e = localStorage.getItem("wishlistedItems");
                        if (e) {
                            var l;
                            let n = e ? JSON.parse(e) : { pages: [newPage] },
                                a = null == n ? void 0 : null === (l = n.pages) || void 0 === l ? void 0 : l.some((e) => (null == e ? void 0 : e.type) === i && (null == e ? void 0 : e.id) === t);
                            a ? (s(), m(!0)) : (d(), m(!1));
                        } else c && (d(), m(!1));
                    }, [c, _]),
                    {
                        handleSave: () => {
                            (() => {
                                let e = { type: i, id: t },
                                    l = localStorage.getItem("wishlistedItems");
                                if (l) {
                                    var n, a;
                                    let o = l ? JSON.parse(l) : { pages: [] },
                                        r = null === (n = o.pages) || void 0 === n ? void 0 : n.some((e) => (null == e ? void 0 : e.id) === t && (null == e ? void 0 : e.type) === i);
                                    if (r) {
                                        let e = null == o ? void 0 : null === (a = o.pages) || void 0 === a ? void 0 : a.filter((e) => (null == e ? void 0 : e.id) !== t || (null == e ? void 0 : e.type) !== i);
                                        (null == e ? void 0 : e.length) === 0 ? (m(!1), localStorage.removeItem("wishlistedItems"), u({ pages: [] }), d()) : ((o.pages = e), localStorage.setItem("wishlistedItems", JSON.stringify(o)), u(o));
                                    } else (o.pages = [...(null == o ? void 0 : o.pages), e]), localStorage.setItem("wishlistedItems", JSON.stringify(o)), u(o);
                                } else {
                                    let i = JSON.stringify({ pages: [e] });
                                    localStorage.setItem("wishlistedItems", i), u({ pages: [e] });
                                }
                            })();
                        },
                        active: c,
                        isDesktop: h,
                    }
                );
            };
        },
        28952: function (e, i, t) {
            "use strict";
            t.d(i, {
                Z: function () {
                    return x;
                },
            });
            var l = t(57437),
                n = t(23024),
                a = t.n(n),
                o = t(92760);
            t(16898);
            var r = t(94478),
                c = t(75277),
                s = t(97800),
                d = (e) => {
                    let { style: i, type: t, id: n } = e,
                        { handleSave: a, active: d, isDesktop: _ } = (0, r.Z)({ type: t, id: n }),
                        u = !!t && !!n;
                    return (0, l.jsx)("li", {
                        children: _
                            ? (0, l.jsx)(c.Z, {
                                  placement: "bottom",
                                  overlay: (0, l.jsx)(s.Z, { id: "tooltip", children: "Save to folder" }),
                                  children: (0, l.jsx)("button", {
                                      className: ""
                                          .concat(i.btn_save, " ")
                                          .concat(i.save_icon, " ")
                                          .concat(d && i.btn_save_active),
                                      onClick: a,
                                      children: (0, l.jsx)(o.Z, { icon: "save", size: 20 }),
                                  }),
                              })
                            : (0, l.jsx)("button", { className: "".concat(i.btn_save, " ").concat(d && i.btn_save_active), onClick: a, disabled: !u, children: (0, l.jsx)(o.Z, { icon: "save", size: 20 }) }),
                    });
                };
            t(2265);
            var _ = t(17022),
                u = t(29434),
                v = t(5925),
                m = t(67224),
                h = t(83935),
                p = (e) => {
                    let { shareLink: i, isSsrDesktop: t } = e,
                        n = "";
                    return (
                        (n = window.location.origin),
                        (0, l.jsx)(l.Fragment, {
                            children: t
                                ? (0, l.jsxs)("li", {
                                      className: "".concat(a().dropdown),
                                      children: [
                                          (0, l.jsx)("button", { children: (0, l.jsx)(o.Z, { icon: "share", size: 20 }) }),
                                          (0, l.jsxs)("ul", {
                                              children: [
                                                  (0, l.jsx)("li", {
                                                      children: (0, l.jsxs)(_.Z, {
                                                          url: "".concat(n, "/").concat(i),
                                                          children: [(0, l.jsx)("span", { children: (0, l.jsx)(m.Z, { icon: "facebook", size: 15, color: "#000" }) }), "facebook"],
                                                      }),
                                                  }),
                                                  (0, l.jsx)("li", {
                                                      children: (0, l.jsxs)(u.Z, {
                                                          url: "".concat(n, "/").concat(i),
                                                          children: [(0, l.jsx)("span", { children: (0, l.jsx)(m.Z, { icon: "linkedin", size: 15, color: "#000" }) }), "LinkedIn"],
                                                      }),
                                                  }),
                                                  (0, l.jsx)("li", {
                                                      children: (0, l.jsxs)("button", {
                                                          onClick: () => {
                                                              var e, t;
                                                              null === (t = navigator) || void 0 === t || null === (e = t.clipboard) || void 0 === e || e.writeText("".concat(n, "/").concat(i)),
                                                                  v.Am.success("Copied to clipboard!", { duration: 5e3, id: "clipboard" });
                                                          },
                                                          children: [(0, l.jsx)("span", { children: (0, l.jsx)(m.Z, { icon: "copy", size: 12, color: "#000" }) }), "Copy Link"],
                                                      }),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  })
                                : (0, l.jsx)("li", { children: (0, l.jsx)(h.Z, { shareLink: i, children: (0, l.jsx)(o.Z, { icon: "share", size: 20 }) }) }),
                        })
                    );
                },
                x = (e) => {
                    let { type: i, id: t, shareLink: n, isFromServicePage: o, isRound: r, ssrDeviceType: c, showShare: s = !0 } = e;
                    return (0, l.jsxs)("ul", {
                        className: "".concat(a().toolbar, " ").concat(!0 === r ? a().toolbar_insight : ""),
                        children: [n && s && (0, l.jsx)(p, { shareLink: n, isSsrDesktop: void 0 === c }), !!i && !!t && (0, l.jsx)(d, { style: a(), type: i, id: t })],
                    });
                };
        },
        55152: function (e, i, t) {
            "use strict";
            t.d(i, {
                Z: function () {
                    return s;
                },
            });
            var l = t(57437),
                n = t(2265),
                a = t(14738),
                o = t(3016),
                r = t.n(o),
                c = t(24033),
                s = (e) => {
                    var i;
                    let [t, o] = (0, n.useState)(!1),
                        s = (0, c.useSearchParams)(),
                        d = s.get("industry_id") || "",
                        _ = d && (null == e ? void 0 : null === (i = e.options) || void 0 === i ? void 0 : i.find((e) => e.value == d));
                    return (
                        (0, n.useEffect)(() => {
                            t && (document.querySelector(".custom-select__menu-list").dataset.lenisPrevent = !0);
                        }, [t]),
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (null == e ? void 0 : e.label) && (0, l.jsx)("label", { className: "form-label", children: null == e ? void 0 : e.label }),
                                (0, l.jsx)(a.ZP, {
                                    className: "".concat(r().select_wrap, " input-selector"),
                                    classNamePrefix: "custom-select",
                                    onMenuOpen: () => {
                                        o(!0);
                                    },
                                    onMenuClose: () => {
                                        o(!1);
                                    },
                                    defaultValue: _,
                                    ...e,
                                    filterOption: (e, i) => !i || e.label.toLowerCase().includes(i.toLowerCase()),
                                }),
                            ],
                        })
                    );
                };
        },
        5517: function (e, i, t) {
            "use strict";
            var l = t(57437),
                n = t(99321),
                a = t(23218),
                o = t.n(a);
            i.Z = function (e) {
                var i, t;
                let { card: a, hasBorder: r } = e;
                return (0, l.jsxs)("div", {
                    className: "".concat(o().simpleCard, " ").concat(r ? o().bordered : ""),
                    children: [
                        (0, l.jsx)("div", {
                            className: "".concat(o().icon, " ratio ratio-1 mb-2 mb-lg-3"),
                            children: (0, l.jsx)(n.Z, {
                                src: null == a ? void 0 : null === (i = a.image) || void 0 === i ? void 0 : i.url,
                                alt: null == a ? void 0 : null === (t = a.image) || void 0 === t ? void 0 : t.alternative_text,
                                width: 300,
                                height: 200,
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: o().contentWrapper,
                            children: [
                                (null == a ? void 0 : a.title) && (0, l.jsx)("h3", { className: "ttl-24 mb-lg-0 lh-title", children: null == a ? void 0 : a.title }),
                                (null == a ? void 0 : a.description) && (0, l.jsx)("p", { className: "fs-18 mt-2 mt-lg-2 lh-primary mb-0", children: null == a ? void 0 : a.description }),
                            ],
                        }),
                    ],
                });
            };
        },
        72526: function (e, i, t) {
            "use strict";
            t.d(i, {
                Z: function () {
                    return l.Z;
                },
            });
            var l = t(69862);
        },
        83935: function (e, i, t) {
            "use strict";
            t.d(i, {
                Z: function () {
                    return l.Z;
                },
            });
            var l = t(32480);
        },
        32480: function (e, i, t) {
            "use strict";
            t.d(i, {
                Z: function () {
                    return o;
                },
            });
            var l = t(57437),
                n = t(2265),
                a = (e) => {
                    let i = async () => {
                        if (navigator.share)
                            try {
                                let { title: i, text: t, url: l } = e;
                                await navigator.share({ title: i, text: t, url: l });
                            } catch (e) {}
                    };
                    return { handleNativeShare: i };
                };
            t(62075);
            var o = (e) => {
                let [i, t] = (0, n.useState)();
                (0, n.useEffect)(() => {
                    var i, l, n, a;
                    (null == e ? void 0 : e.shareLink)
                        ? t("".concat(null === (l = window) || void 0 === l ? void 0 : null === (i = l.location) || void 0 === i ? void 0 : i.origin, "/").concat(null == e ? void 0 : e.shareLink))
                        : t(null === (a = window) || void 0 === a ? void 0 : null === (n = a.location) || void 0 === n ? void 0 : n.href);
                }, [null == e ? void 0 : e.shareLink]);
                let { handleNativeShare: o } = a({ url: i, ...e });
                return (0, l.jsx)("button", { className: null == e ? void 0 : e.className, onClick: o, children: null == e ? void 0 : e.children });
            };
        },
        2574: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return l.default;
                    },
                });
            var l = t(37398);
        },
        72386: function (e, i, t) {
            "use strict";
            t.d(i, {
                Z: function () {
                    return l.Z;
                },
            });
            var l = t(92502);
        },
        92502: function (e, i, t) {
            "use strict";
            t.d(i, {
                Z: function () {
                    return w;
                },
            });
            var l = t(57437),
                n = t(2265),
                a = t(98864),
                o = t.n(a),
                r = t(22312),
                c = t(8286),
                s = t(52211),
                d = t.n(s),
                _ = t(60210),
                u = t(16898),
                v = t(22687),
                m = t(42815),
                h = t(96681),
                p = t(26226),
                x = t(46448),
                g = (e) => {
                    let { card: i, style: t, caseNext: l } = e,
                        a = (0, n.useRef)(null),
                        o = (0, n.useRef)(null),
                        r = (0, n.useRef)(null);
                    (0, h.LZ)();
                    let { status: c, setFalse: s, setTrue: d } = (0, _.Z)(),
                        { isMobile: g } = (0, u.Z)(),
                        [j, f] = (0, n.useState)(""),
                        w = (0, n.useRef)(),
                        b = (0, n.useRef)(),
                        N = (0, n.useRef)(),
                        k = (0, n.useRef)(),
                        y = (0, v.Z)(k, { threshold: 0.5 }, !0),
                        Z = !!(null == i ? void 0 : i.url),
                        { anim: C } = (0, p.Z)({ status: c });
                    (0, x.Z)({ status: c }),
                        (0, n.useEffect)(
                            () => (
                                y && g
                                    ? (N.current = setTimeout(() => {
                                          B();
                                      }, 800))
                                    : S(),
                                () => {
                                    clearTimeout(N);
                                }
                            ),
                            [y, g]
                        ),
                        (0, n.useEffect)(
                            () => () => {
                                clearTimeout(b.current);
                            },
                            []
                        ),
                        (0, n.useLayoutEffect)(() => {
                            let e;
                            if (l)
                                return (
                                    (e = m.p8.context((e) => {
                                        e.selector(".".concat(t.next_loading)), e.selector(".".concat(t.loading)), e.selector(".".concat(t.loading, " img"));
                                    }, a)),
                                    () => e.revert()
                                );
                        }, []);
                    let B = () => {
                            var e;
                            w && (null == i ? void 0 : i.video) && (b.current && clearTimeout(b.current), g && f("active"), null == w || null === (e = w.current) || void 0 === e || e.play());
                        },
                        S = () => {
                            w &&
                                (null == i ? void 0 : i.video) &&
                                (null == w || w.current.pause(),
                                g && f(""),
                                w.current.currentTime &&
                                    setTimeout(() => {
                                        (null == w ? void 0 : w.current) && (w.current.currentTime = 0);
                                    }, 600));
                        },
                        I = !!(null == i ? void 0 : i.show_canvas);
                    return {
                        handleVideoPlay: B,
                        handleVideoPause: S,
                        status: c,
                        setFalse: s,
                        setTrue: d,
                        isMobile: g,
                        activeClass: j,
                        videoRef: w,
                        elementRef: k,
                        timeRef: b,
                        items: o,
                        itemsMain: r,
                        main: a,
                        isCaseStudyAvailable: Z,
                        isShowCanvas: I,
                        handleCardClick: (e) => {
                            e.preventDefault(), d();
                        },
                        anim: C,
                    };
                },
                j = t(16010);
            let f = o()(() => Promise.all([t.e(691), t.e(429), t.e(541), t.e(9395), t.e(5277), t.e(8958), t.e(2775), t.e(257)]).then(t.bind(t, 17624)), { loadableGenerated: { webpack: () => [17624] } });
            var w = function (e) {
                var i, t, a, o, s, _;
                let { imageAspectRatio: v, hasBg: h, card: p, index: x, isLoading: w, length: b, hasShimmer: N, isFromSavedPage: k, trigger: y, ssrDeviceType: Z } = e,
                    C = N ? d().hasShimmer : "",
                    { handleVideoPlay: B, handleVideoPause: S, status: I, setFalse: L, setTrue: P, activeClass: T, videoRef: q, elementRef: H, items: V, itemsMain: O, isCaseStudyAvailable: E, isShowCanvas: M = !0 } = g({ card: p });
                (0, n.useEffect)(() => {
                    let e = V.current,
                        i = O.current;
                    w
                        ? (m.p8.to(e, { opacity: 1, duration: 0 }), m.p8.to(i, { opacity: 0, duration: 0 }))
                        : (m.p8.fromTo(e, { opacity: 1 }, { opacity: 0, willChange: "opacity transform", duration: 0.25, delay: (x - (b - 6)) * 0.08 }),
                          m.p8.fromTo(i, { opacity: 0 }, { opacity: 1, willChange: "opacity transform", duration: 0.25, delay: (x - (b - 6)) * 0.08 }));
                }, [p, x]);
                let F = (0, l.jsx)(c.Z, { links: null == p ? void 0 : p.industries }),
                    { width: A } = (0, u.Z)();
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: ""
                                .concat(d().listing_card, "  ")
                                .concat(!M && d().disabled, " ")
                                .concat(h ? d().withBg : "", " ")
                                .concat(T, " ")
                                .concat(C),
                            children: [
                                (0, l.jsxs)("span", {
                                    ref: O,
                                    children: [
                                        E
                                            ? (0, l.jsxs)(j.Z, {
                                                  target: "_blank",
                                                  linkType: "external",
                                                  href: "/".concat(null == p ? void 0 : p.url),
                                                  onMouseEnter: B,
                                                  onMouseLeave: S,
                                                  className: "".concat(d().image, " ratio ratio-1"),
                                                  style: { "--aspect-ratio": "".concat(v, "%") ? "".concat(v, "%") : 0 },
                                                  children: [
                                                      (0, l.jsx)(r.Z, {
                                                          src: null == p ? void 0 : null === (i = p.image) || void 0 === i ? void 0 : i.url,
                                                          alt: null == p ? void 0 : null === (t = p.image) || void 0 === t ? void 0 : t.alternative_text,
                                                          fill: !0,
                                                          sizes: "(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw",
                                                          ref: H,
                                                      }),
                                                      (null == p ? void 0 : p.video)
                                                          ? (0, l.jsx)("video", {
                                                                className: d().video,
                                                                width: "100%",
                                                                height: "100%",
                                                                loop: !0,
                                                                muted: !0,
                                                                playsInline: !0,
                                                                ref: q,
                                                                children: (0, l.jsx)("source", { src: null == p ? void 0 : null === (a = p.video) || void 0 === a ? void 0 : a.url, type: "video/mp4" }),
                                                            })
                                                          : "",
                                                  ],
                                              })
                                            : (0, l.jsxs)("button", {
                                                  onClick: P,
                                                  onMouseEnter: B,
                                                  onMouseLeave: S,
                                                  disabled: !M,
                                                  className: "".concat(d().image, " ratio ratio-1"),
                                                  style: { "--aspect-ratio": "".concat(v, "%") ? "".concat(v, "%") : 0 },
                                                  children: [
                                                      (0, l.jsx)(r.Z, {
                                                          src: null == p ? void 0 : null === (o = p.image) || void 0 === o ? void 0 : o.url,
                                                          alt: null == p ? void 0 : null === (s = p.image) || void 0 === s ? void 0 : s.alternative_text,
                                                          fill: !0,
                                                          sizes: "(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw",
                                                          ref: H,
                                                      }),
                                                      (null == p ? void 0 : p.video)
                                                          ? (0, l.jsx)("video", {
                                                                className: d().video,
                                                                width: "100%",
                                                                height: "100%",
                                                                loop: !0,
                                                                muted: !0,
                                                                playsInline: !0,
                                                                ref: q,
                                                                children: (0, l.jsx)("source", { src: null == p ? void 0 : null === (_ = p.video) || void 0 === _ ? void 0 : _.url, type: "video/mp4" }),
                                                            })
                                                          : "",
                                                  ],
                                              }),
                                        (0, l.jsxs)("div", {
                                            className: "".concat(d().context_wrapper),
                                            children: [
                                                (0, l.jsx)("h3", { className: "".concat(d().description, " h6 mb-1 lh-primary fw-regular"), children: F }),
                                                (null == p ? void 0 : p.description) &&
                                                    (0, l.jsx)("h4", {
                                                        className: "".concat(d().title, " mb-0 "),
                                                        children: E
                                                            ? (0, l.jsx)(j.Z, {
                                                                  target: "_blank",
                                                                  linkType: "external",
                                                                  href: "/".concat(null == p ? void 0 : p.url),
                                                                  onMouseEnter: B,
                                                                  onMouseLeave: S,
                                                                  className: "lh-title-sub fw-light",
                                                                  children: null == p ? void 0 : p.description,
                                                              })
                                                            : (0, l.jsx)("button", { onClick: P, onMouseEnter: B, onMouseLeave: S, disabled: !M, className: "lh-title-sub fw-light", children: null == p ? void 0 : p.description }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                N &&
                                    (0, l.jsx)("div", {
                                        className: d().shimmer,
                                        ref: V,
                                        children: (0, l.jsxs)("div", {
                                            children: [
                                                (0, l.jsx)("span", { className: d().image }),
                                                (0, l.jsx)("span", { className: d().text_sub }),
                                                (0, l.jsx)("span", { className: d().text }),
                                                (0, l.jsx)("span", { className: d().text }),
                                                (0, l.jsx)("span", { className: d().text_sm }),
                                            ],
                                        }),
                                    }),
                            ],
                        }),
                        (0, l.jsx)(f, { isOpen: I, toggle: L, url: null == p ? void 0 : p.url, urlForOffcanvasData: null == p ? void 0 : p.title, isCaseStudyAvailable: E, isFromSavedPage: k, trigger: y, ssrDeviceType: Z, isShowCanvas: M }),
                    ],
                });
            };
        },
        8286: function (e, i, t) {
            "use strict";
            var l = t(57437),
                n = t(2265),
                a = t(98864),
                o = t.n(a),
                r = t(60210);
            t(16010);
            var c = t(26226);
            let s = o()(() => t.e(1546).then(t.bind(t, 11546)), { loadableGenerated: { webpack: () => [11546] } });
            i.Z = (e) => {
                let { links: i, style: t } = e,
                    { status: a, toggle: o, setFalse: d, setTrue: _ } = (0, r.Z)(),
                    u = () => {
                        _();
                    },
                    { anim: v } = (0, c.Z)({ status: a });
                return (0, l.jsx)(l.Fragment, {
                    children:
                        (null == i ? void 0 : i.length) !== 0 &&
                        (0, l.jsx)("div", {
                            className: "",
                            children:
                                null == i
                                    ? void 0
                                    : i.map((e) =>
                                          (0, l.jsxs)(
                                              n.Fragment,
                                              {
                                                  children: [
                                                      (0, l.jsx)("button", { className: "".concat(null == t ? void 0 : t.work_link), onClick: u, children: null == e ? void 0 : e.label }),
                                                      (v || a) && (0, l.jsx)(s, { show: a, handleClose: d, slug: null == e ? void 0 : e.link }),
                                                  ],
                                              },
                                              e.label
                                          )
                                      ),
                        }),
                });
            };
        },
        51190: function (e, i, t) {
            "use strict";
            var l = t(57437);
            i.Z = function (e) {
                let { icon: i } = e,
                    t = n.find((e) => e.name === i);
                return (0, l.jsx)("span", { className: "d-inline-block", dangerouslySetInnerHTML: { __html: null == t ? void 0 : t.path } });
            };
            let n = [
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
        92760: function (e, i, t) {
            "use strict";
            t.d(i, {
                Z: function () {
                    return l.Z;
                },
            });
            var l = t(51190);
        },
        22687: function (e, i, t) {
            "use strict";
            var l = t(2265);
            i.Z = function (e) {
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = arguments.length > 2 ? arguments[2] : void 0,
                    [n, a] = (0, l.useState)(!1),
                    o = null;
                return (
                    (o = new IntersectionObserver(
                        (e, i) => {
                            let [l] = e;
                            a(l.isIntersecting), l.isIntersecting && !t && i.unobserve(l.target);
                        },
                        { ...i }
                    )),
                    (0, l.useEffect)(() => {
                        var i;
                        return (
                            o && (null === (i = o) || void 0 === i || i.observe(e.current)),
                            () => {
                                o.disconnect();
                            }
                        );
                    }, [e, o, t]),
                    n
                );
            };
        },
        39646: function (e, i, t) {
            "use strict";
            var l = t(2265),
                n = t(22687),
                a = t(21525);
            i.Z = (e, i) => {
                let t = (0, l.useRef)(null),
                    { handleSetHash: o } = (0, a._)(),
                    r = (0, n.Z)(t, { threshold: 0.5 }, !0);
                return (
                    (0, l.useEffect)(() => {
                        r && o("".concat(e).concat(i));
                    }, [r, e, i]),
                    t
                );
            };
        },
        1222: function (e, i, t) {
            "use strict";
            t.d(i, {
                a: function () {
                    return l;
                },
            });
            let l = (e) => {
                    let i = n[e] || n.default;
                    return { backgroundColor: i };
                },
                n = { "#F5F5F5": "darktheme", "0000": "white_theme", default: "bg_light" };
        },
        71910: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return _;
                    },
                });
            var l = t(57437),
                n = t(2265),
                a = t(55120),
                o = t.n(a),
                r = t(42815),
                c = t(42716),
                s = t(16898);
            r.p8.registerPlugin(c.i), r.p8.config({ force3D: !0 });
            var d = () => {
                    let e = (0, n.useRef)(),
                        { isMobile: i } = (0, s.Z)();
                    return (
                        (0, n.useEffect)(() => {
                            let t = r.p8.context((t) => {
                                let l = t.selector(".".concat(o().video_main)),
                                    n = t.selector(".".concat(o().video_container)),
                                    a = t.selector(".".concat(o().video_container, " video"));
                                if (l && e.current) {
                                    let t = r.p8.timeline({ scrollTrigger: { trigger: document.body, start: "top top", end: "top+=400px top", scrub: 0.08 } });
                                    i || t.to(l, { scale: 1 }), t.to(n, { scale: 1 }, "-=.5"), t.from(a, { scale: 1.2 }, "<");
                                    let o = r.p8.timeline({ scrollTrigger: { trigger: e.current, start: "bottom 60%", end: "bottom+=600px 60%", scrub: 0.08 } });
                                    i || o.to(n, { scale: 1.2, opacity: 0, filter: "blur(4px)" });
                                }
                            }, e);
                            return () => {
                                t.revert();
                            };
                        }, [i]),
                        { main: e, isMobile: i }
                    );
                },
                _ = (e) => {
                    var i, t, n;
                    let { data: a, widget_type: r } = e,
                        { main: c, isMobile: s } = d();
                    return (0, l.jsx)("section", {
                        className: "".concat(o().video_wrapper, " ").concat(s ? o().mobile : ""),
                        ref: c,
                        id: r,
                        children: (0, l.jsx)("div", {
                            className: "".concat(o().video_main),
                            children: (0, l.jsx)("div", {
                                className: "".concat(o().video_container),
                                children:
                                    (null == a ? void 0 : null === (i = a.video) || void 0 === i ? void 0 : i.url) &&
                                    (0, l.jsx)("video", {
                                        width: "100%",
                                        height: "100%",
                                        loop: !0,
                                        muted: !0,
                                        autoPlay: !0,
                                        playsInline: !0,
                                        poster: "".concat((null == a ? void 0 : null === (t = a.image) || void 0 === t ? void 0 : t.url) || ""),
                                        children: (0, l.jsx)("source", { src: null == a ? void 0 : null === (n = a.video) || void 0 === n ? void 0 : n.url, type: "video/mp4" }),
                                    }),
                            }),
                        }),
                    });
                };
        },
        36425: function (e, i, t) {
            "use strict";
            t.r(i);
            var l = t(57437),
                n = t(5517),
                a = t(1222),
                o = t(39646),
                r = t(81472),
                c = t.n(r);
            i.default = (e) => {
                var i, t, r, s, d, _, u, v;
                let m =
                        (null == e ? void 0 : null === (i = e.data) || void 0 === i ? void 0 : i.cards.length) !== 0 &&
                        (null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.cards.map((e) => (0, l.jsx)("div", { children: (0, l.jsx)(n.Z, { hasBorder: !0, card: e }) }, null == e ? void 0 : e.title))),
                    h = !!(null == e ? void 0 : null === (r = e.data) || void 0 === r ? void 0 : r.background_color),
                    p = (null == e ? void 0 : null === (s = e.data) || void 0 === s ? void 0 : s.theme) === "blue" ? c().blue : "",
                    { backgroundColor: x } = (0, a.a)(null == e ? void 0 : e.background_color),
                    g = (0, o.Z)(null == e ? void 0 : e.widget_type, null == e ? void 0 : e.id);
                return (0, l.jsx)("section", {
                    className: "".concat(c().section, " ").concat(p),
                    id: "".concat(null == e ? void 0 : e.widget_type).concat(null == e ? void 0 : e.id),
                    ref: g,
                    style: { backgroundColor: h || "#f5f5f5" },
                    children: (0, l.jsxs)("div", {
                        className: "container",
                        children: [
                            (0, l.jsxs)("div", {
                                className: "row row-cols-lg-2 ".concat(c().heading),
                                children: [
                                    (null == e ? void 0 : null === (d = e.data) || void 0 === d ? void 0 : d.title) &&
                                        (0, l.jsx)("div", { children: (0, l.jsx)("h2", { className: "ttl-80  fw-regular", children: null == e ? void 0 : null === (_ = e.data) || void 0 === _ ? void 0 : _.title }) }),
                                    (null == e ? void 0 : null === (u = e.data) || void 0 === u ? void 0 : u.subTitle) &&
                                        (0, l.jsx)("div", { children: (0, l.jsx)("p", { className: "fs-32 fw-light lh-title-sub mb-3 mb-lg-0", children: null == e ? void 0 : null === (v = e.data) || void 0 === v ? void 0 : v.subTitle }) }),
                                ],
                            }),
                            (0, l.jsx)("div", { className: "row row-cols-sm-2 row-cols-lg-3 ".concat(c().row), children: m }),
                        ],
                    }),
                });
            };
        },
        27784: function (e, i, t) {
            "use strict";
            t.r(i);
            var l = t(57437),
                n = t(9189),
                a = t(8452),
                o = t.n(a),
                r = t(29211),
                c = t(39646),
                s = t(93834),
                d = t(16898);
            i.default = (e) => {
                var i, t, a, _, u, v;
                null == e || e.background_color;
                let m = (0, c.Z)(e.widget_type, e.id),
                    { width: h } = (0, d.Z)(),
                    p =
                        null == e
                            ? void 0
                            : null === (i = e.data) || void 0 === i
                            ? void 0
                            : i.blogs.map((e) =>
                                  (0, l.jsx)(
                                      "div",
                                      {
                                          children:
                                              h >= 992
                                                  ? (0, l.jsx)("div", { className: "d-none d-lg-block", children: (0, l.jsx)(s.Z, { blog: e, showTags: !1 }) })
                                                  : (0, l.jsx)("div", { className: "d-lg-none", children: (0, l.jsx)(n.Z, { item: e }) }),
                                      },
                                      e.id
                                  )
                              );
                return (0, l.jsx)("section", {
                    className: "".concat(o().section, " bg-secondary"),
                    id: "".concat(null == e ? void 0 : e.widget_type).concat(null == e ? void 0 : e.id),
                    ref: m,
                    children: (0, l.jsxs)("div", {
                        className: "container",
                        children: [
                            (0, l.jsx)("h2", { className: "ttl-80 mb-lg-6 fw-regular mb-1", children: null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.title }),
                            (0, l.jsx)("div", { className: "row  row-cols-lg-3 ".concat(o().row), children: p }),
                            (0, l.jsx)("div", {
                                className: "".concat(o().btn_wrapper, " text-center"),
                                children: (0, l.jsx)(r.Z, {
                                    link: null == e ? void 0 : null === (_ = e.data) || void 0 === _ ? void 0 : null === (a = _.button) || void 0 === a ? void 0 : a.link,
                                    label: null == e ? void 0 : null === (v = e.data) || void 0 === v ? void 0 : null === (u = v.button) || void 0 === u ? void 0 : u.label,
                                }),
                            }),
                        ],
                    }),
                });
            };
        },
        65378: function (e, i, t) {
            "use strict";
            t.r(i);
            var l = t(57437),
                n = t(9189),
                a = t(29211),
                o = t(39646),
                r = t(8452),
                c = t.n(r),
                s = t(93834),
                d = t(16898);
            i.default = (e) => {
                var i, t, r, _, u, v;
                null == e || e.background_color;
                let m = (0, o.Z)(e.widget_type, e.id),
                    { width: h } = (0, d.Z)(),
                    p =
                        null == e
                            ? void 0
                            : null === (i = e.data) || void 0 === i
                            ? void 0
                            : i.blogs.map((e) =>
                                  (0, l.jsx)(
                                      "div",
                                      {
                                          children:
                                              h >= 992
                                                  ? (0, l.jsx)("div", { className: "d-none d-lg-block", children: (0, l.jsx)(s.Z, { blog: e, showTags: !1 }) })
                                                  : (0, l.jsx)("div", { className: "d-lg-none", children: (0, l.jsx)(n.Z, { item: e }) }),
                                      },
                                      e.id
                                  )
                              );
                return (0, l.jsx)("section", {
                    className: "".concat(c().section, " bg-secondary"),
                    id: "".concat(null == e ? void 0 : e.widget_type).concat(null == e ? void 0 : e.id),
                    ref: m,
                    children: (0, l.jsxs)("div", {
                        className: "container",
                        children: [
                            (0, l.jsx)("h2", { className: "ttl-80 mb-lg-6 fw-regular mb-3", children: null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.title }),
                            (0, l.jsx)("div", { className: "row  row-cols-lg-3 ".concat(c().row), children: p }),
                            (0, l.jsx)("div", {
                                className: "".concat(c().btn_wrapper, " text-center"),
                                children: (0, l.jsx)(a.Z, {
                                    link: null == e ? void 0 : null === (_ = e.data) || void 0 === _ ? void 0 : null === (r = _.button) || void 0 === r ? void 0 : r.link,
                                    label: null == e ? void 0 : null === (v = e.data) || void 0 === v ? void 0 : null === (u = v.button) || void 0 === u ? void 0 : u.label,
                                }),
                            }),
                        ],
                    }),
                });
            };
        },
        22855: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return s;
                    },
                });
            var l = t(57437),
                n = t(60898),
                a = t.n(n),
                o = t(42815),
                r = t(2265);
            let c = (e) => {
                let { style: i } = e,
                    t = (0, r.useRef)(null);
                return (
                    (0, r.useLayoutEffect)(() => {
                        let e = o.ZP.context((e) => {
                            let l = e.selector(".".concat(i.title, " span")),
                                n = o.ZP.timeline({ scrollTrigger: { trigger: t.current, start: "50% 100%", end: "50% 60%", scrub: !0 } });
                            n.to(l, { color: "#000", stagger: 0.5 });
                        }, t);
                        return () => {
                            e.kill();
                        };
                    }, [i]),
                    { main: t }
                );
            };
            var s = () => {
                let { main: e } = c({ style: a() });
                return (0, l.jsx)("div", {
                    className: "".concat(a().section),
                    ref: e,
                    children: (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsxs)("div", {
                            className: "".concat(a().main_wrapper),
                            children: [
                                (0, l.jsx)("div", {
                                    className: "".concat(a().title_wrapper),
                                    children: (0, l.jsx)("h2", {
                                        className: "".concat(a().title),
                                        children: "People expect more of brands than ever before. They expect brands to go beyond. WAC inspires brands and people to impact the world."
                                            .split(" ")
                                            .map((e, i) => (0, l.jsxs)("span", { children: [e, " "] }, i)),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "".concat(a().video_wrapper),
                                    children: (0, l.jsx)("video", {
                                        width: "100%",
                                        height: "100%",
                                        loop: !0,
                                        muted: !0,
                                        autoPlay: !0,
                                        playsInline: !0,
                                        children: (0, l.jsx)("source", { src: "/video/branding_banner.mp4", type: "video/mp4" }),
                                    }),
                                }),
                            ],
                        }),
                    }),
                });
            };
        },
        25558: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return _;
                    },
                });
            var l = t(57437),
                n = t(99321),
                a = t(39391),
                o = t.n(a),
                r = t(42815),
                c = t(79123),
                s = t(2265);
            let d = (e) => {
                let { style: i } = e,
                    t = (0, s.useRef)(null),
                    l = (0, s.useRef)(null);
                return (
                    (0, s.useLayoutEffect)(() => {
                        let e = r.ZP.context((e) => {
                            let t = e.selector(".".concat(i.image_single)),
                                n = e.selector(".".concat(i.title, " span span")),
                                a = e.selector(".".concat(i.description, " p")),
                                o = l.current.clientWidth,
                                s = l.current.clientHeight;
                            if (void 0 !== window) {
                                let e = o / 2,
                                    i = s / 2;
                                r.ZP.set(t, { opacity: 0, filter: "blur(4px)" }),
                                    r.ZP.set(n, { willChange: "transform" }),
                                    r.ZP.set(a, { y: 50 }),
                                    r.ZP.to(n, { y: 0, stagger: 0.06, duration: 0.8 }),
                                    r.ZP.to(a, { y: 0, opacity: 1 }, "-=.6"),
                                    [
                                        { x: e / 1.3, y: 0.9 * i },
                                        { x: e / 1.6, y: i / 5 },
                                        { x: e / 15, y: i / 3.8 },
                                        { x: -(e / 8), y: 0.9 * i },
                                        { x: -(e / 2), y: 0.8 * i },
                                        { x: -(0.85 * e), y: i / 5 },
                                        { x: -(e / 8), y: -(0.8 * i) },
                                        { x: e / 2.5, y: -(i / 1.8) },
                                        { x: 0.8 * e, y: -(i / 2.4) },
                                        { x: -(0.76 * e), y: -(i / 1.9) },
                                        { x: -(e / 2.5), y: -(i / 5) },
                                    ].forEach((e, i) => {
                                        r.ZP.to(t[i], { willChange: "transform", x: e.x, y: e.y, duration: 2.6, ease: c.Yp.easeOut }),
                                            i % 2 != 0 ? r.ZP.to(t[i], { opacity: 1, filter: "blur(0px)" }, "<+.35") : r.ZP.to(t[i], { opacity: 1, filter: "blur(0px)" }, "<+.45");
                                    });
                            }
                        }, t);
                        return () => {
                            e.kill();
                        };
                    }, []),
                    { main: t, imageRef: l }
                );
            };
            var _ = () => {
                let { main: e, imageRef: i } = d({ style: o() });
                return (0, l.jsxs)("section", {
                    className: "".concat(o().section),
                    ref: e,
                    children: [
                        (0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsxs)("div", {
                                className: "".concat(o().text_wrapper),
                                children: [
                                    (0, l.jsx)("div", {
                                        className: "".concat(o().heading),
                                        children: (0, l.jsxs)("h2", {
                                            className: "".concat(o().title),
                                            children: [
                                                (0, l.jsx)("span", { children: (0, l.jsx)("span", { children: "B" }) }),
                                                (0, l.jsx)("span", { children: (0, l.jsx)("span", { children: "r" }) }),
                                                (0, l.jsx)("span", { children: (0, l.jsx)("span", { children: "a" }) }),
                                                (0, l.jsx)("span", { children: (0, l.jsx)("span", { children: "n" }) }),
                                                (0, l.jsx)("span", { children: (0, l.jsx)("span", { children: "d" }) }),
                                                (0, l.jsx)("span", { children: (0, l.jsx)("span", { children: "i" }) }),
                                                (0, l.jsx)("span", { children: (0, l.jsx)("span", { children: "n" }) }),
                                                (0, l.jsx)("span", { children: (0, l.jsx)("span", { children: "g" }) }),
                                            ],
                                        }),
                                    }),
                                    (0, l.jsx)("div", { className: "".concat(o().description), children: (0, l.jsx)("p", { children: "We build brands that emotionally connect" }) }),
                                ],
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: "".concat(o().image_wrapper),
                            ref: i,
                            children: [
                                (0, l.jsx)("div", {
                                    className: "".concat(o().image_single),
                                    children: (0, l.jsx)("div", { className: "".concat(o().image), children: (0, l.jsx)(n.Z, { src: "/image/branding/03-1.jpg", priority: !0, quality: 95, fill: !0, alt: "wac team" }) }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "".concat(o().image_single),
                                    children: (0, l.jsx)("div", { className: "".concat(o().image), children: (0, l.jsx)(n.Z, { src: "/image/branding/02-1.jpg", priority: !0, quality: 95, fill: !0, alt: "wac team" }) }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "".concat(o().image_single),
                                    children: (0, l.jsx)("div", { className: "".concat(o().image), children: (0, l.jsx)(n.Z, { src: "/image/branding/01-1.jpg", priority: !0, quality: 95, fill: !0, alt: "wac team" }) }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "".concat(o().image_single),
                                    children: (0, l.jsx)("div", { className: "".concat(o().image), children: (0, l.jsx)(n.Z, { src: "/image/branding/04-1.jpg", priority: !0, quality: 95, fill: !0, alt: "wac team" }) }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "".concat(o().image_single),
                                    children: (0, l.jsx)("div", { className: "".concat(o().image), children: (0, l.jsx)(n.Z, { src: "/image/branding/05-1.jpg", priority: !0, quality: 95, fill: !0, alt: "wac team" }) }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "".concat(o().image_single),
                                    children: (0, l.jsx)("div", { className: "".concat(o().image), children: (0, l.jsx)(n.Z, { src: "/image/branding/06-1.jpg", priority: !0, quality: 95, fill: !0, alt: "wac team" }) }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "".concat(o().image_single),
                                    children: (0, l.jsx)("div", { className: "".concat(o().image), children: (0, l.jsx)(n.Z, { src: "/image/branding/07-1.jpg", priority: !0, quality: 95, fill: !0, alt: "wac team" }) }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "".concat(o().image_single),
                                    children: (0, l.jsx)("div", { className: "".concat(o().image), children: (0, l.jsx)(n.Z, { src: "/image/branding/08-02.jpg", priority: !0, quality: 95, fill: !0, alt: "wac team" }) }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "".concat(o().image_single),
                                    children: (0, l.jsx)("div", { className: "".concat(o().image), children: (0, l.jsx)(n.Z, { src: "/image/branding/09-1.jpg", priority: !0, quality: 95, fill: !0, alt: "wac team" }) }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "".concat(o().image_single),
                                    children: (0, l.jsx)("div", { className: "".concat(o().image), children: (0, l.jsx)(n.Z, { src: "/image/branding/10-1.jpg", priority: !0, quality: 95, fill: !0, alt: "wac team" }) }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "".concat(o().image_single),
                                    children: (0, l.jsx)("div", { className: "".concat(o().image), children: (0, l.jsx)(n.Z, { src: "/image/branding/11-1.jpg", priority: !0, quality: 95, fill: !0, alt: "wac team" }) }),
                                }),
                            ],
                        }),
                    ],
                });
            };
        },
        32993: function (e, i, t) {
            "use strict";
            t.r(i);
            var l = t(57437),
                n = t(91997),
                a = t.n(n),
                o = t(29211),
                r = t(22312),
                c = t(90290),
                s = t(2265);
            i.default = (e) => {
                let { data: i, background_color: t, widget_type: n } = e,
                    { title: d, subtitle: _, button: u, images: v } = i,
                    [m, h] = (0, s.useState)(0);
                return (
                    (0, s.useEffect)(() => {
                        let e = setInterval(() => {
                            h(m === v.length - 1 ? 0 : m + 1);
                        }, 4e3);
                        return () => clearInterval(e);
                    }, [m, v]),
                    (0, l.jsx)("section", {
                        className: a().section,
                        id: n,
                        children: (0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsxs)("div", {
                                className: "row",
                                children: [
                                    (0, l.jsx)("div", {
                                        className: "col-lg-7",
                                        children: (0, l.jsxs)("div", {
                                            className: "".concat(a().content_wrapper, " "),
                                            children: [
                                                (0, l.jsx)("div", { className: "d-none d-sm-block w-100", children: d && (0, l.jsx)("h3", { className: "".concat(a().title, " ttl-100 fw-light text-center text-lg-start"), children: d }) }),
                                                (0, l.jsx)(c.Z, { className: "".concat(a().description, " fs-24 fw-light"), as: "p", content: _ }),
                                                (null == u ? void 0 : u.link) && (0, l.jsx)(o.Z, { link: null == u ? void 0 : u.link, label: null == u ? void 0 : u.label }),
                                            ],
                                        }),
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: "col-lg-5",
                                        children: [
                                            (0, l.jsx)("div", { className: "d-sm-none mb-3", children: d && (0, l.jsx)("h3", { className: "".concat(a().title, " ttl-100 fw-light"), children: d }) }),
                                            (0, l.jsxs)("div", {
                                                className: "".concat(a().Anim_wrapper),
                                                children: [
                                                    (0, l.jsx)("div", {
                                                        className: "".concat(a().image_anim_wrapper),
                                                        children:
                                                            v &&
                                                            v.map((e, i) =>
                                                                (0, l.jsx)(
                                                                    "div",
                                                                    {
                                                                        className: "".concat(a().image_anim_items, " ").concat(m === i ? a().active : ""),
                                                                        children: (0, l.jsx)("div", {
                                                                            className: "".concat(a().image_wrapper),
                                                                            children: (0, l.jsx)(r.Z, { src: null == e ? void 0 : e.url, fill: !0, alt: "team iamge", sizes: "(max-width: 768px) 80vw, (max-width: 1200px) 100vw, 30vw" }),
                                                                        }),
                                                                    },
                                                                    i
                                                                )
                                                            ),
                                                    }),
                                                    (0, l.jsx)("div", { className: "".concat(a().image_rotate), children: (0, l.jsx)(r.Z, { src: "/image/home/career/join-team.png", fill: !0, alt: "text with spinning animation" }) }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    })
                );
            };
        },
        77316: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return b;
                    },
                });
            var l = t(57437),
                n = t(2265),
                a = t(99321),
                o = t(26901),
                r = t(99136),
                c = t.n(r),
                s = t(60210),
                d = t(26226);
            let _ = () => {
                let { status: e, setFalse: i, setTrue: t } = (0, s.Z)(),
                    { anim: l } = (0, d.Z)({ status: e });
                return {
                    handleClick: () => {
                        t();
                    },
                    isOffcanvasOpen: e,
                    handleClose: () => {
                        i();
                    },
                    anim: l,
                };
            };
            t(92414);
            var u = (e) => {
                var i, t, n, r;
                let { item: s } = e,
                    { handleClick: d, handleClose: u, isOffcanvasOpen: v, anim: m } = _();
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("button", {
                            className: c().card,
                            onClick: d,
                            disabled: !(null == s ? void 0 : s.show_canvas),
                            children: (0, l.jsxs)("div", {
                                className: c().card_img,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: c().black_img,
                                        children: (0, l.jsx)(a.Z, {
                                            src: null == s ? void 0 : null === (i = s.black_theme_icon) || void 0 === i ? void 0 : i.url,
                                            fill: !0,
                                            alt: null == s ? void 0 : null === (t = s.black_theme_icon) || void 0 === t ? void 0 : t.alternative_text,
                                        }),
                                    }),
                                    (0, l.jsx)("div", {
                                        className: c().color_img,
                                        children: (0, l.jsx)(a.Z, {
                                            src: null == s ? void 0 : null === (n = s.icon) || void 0 === n ? void 0 : n.url,
                                            fill: !0,
                                            alt: null == s ? void 0 : null === (r = s.icon) || void 0 === r ? void 0 : r.alternative_text,
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        (m || v) && (0, l.jsx)(o.default, { show: v, handleClose: u, slug: null == s ? void 0 : s.name }),
                    ],
                });
            };
            t(62075);
            var v = t(25152),
                m = t(55152),
                h = t(3894),
                p = t.n(h),
                x = t(24033),
                g = t(30713),
                j = t(18893),
                f = t(16898),
                w = () => {
                    let [e, i] = (0, n.useState)([]),
                        [t, l] = (0, n.useState)(0),
                        { isMobile: a } = (0, f.Z)(),
                        o = (0, x.usePathname)(),
                        r = (0, x.useSearchParams)(),
                        c = (0, x.useRouter)(),
                        s = new URLSearchParams(r),
                        d = r.get("region_id") || "",
                        _ = r.get("industry_id") || "",
                        { data: u, isLoading: v, error: m } = (0, g.ZP)("".concat("https://admin.wac.co").concat(j.X, "?industry_id=").concat(_, "&region_id=").concat(d, "&offset=").concat(t, "&limit=").concat(500), {
                            onSuccess: (e) => {
                                if (e) {
                                    let l = null == e ? void 0 : e.clients,
                                        n = l && l.slice(0, 50);
                                    0 === t && i([...n]);
                                }
                            },
                            onError: (e) => {},
                        });
                    (0, n.useEffect)(() => {
                        setTimeout(() => window.scrollTo(0, 0));
                    }, []);
                    let h = () => {
                            i((e) => {
                                if (e.length !== (null == u ? void 0 : u.clients.length)) {
                                    let i = [...(null == u ? void 0 : u.clients.slice(e.length, e.length + 50))];
                                    return [...e, ...i];
                                }
                                return [...e];
                            });
                        },
                        p = (null == u ? void 0 : u.total_count) === e.length,
                        w = 0 === e.length && !u,
                        b = !w && (null == u ? void 0 : u.total_count) === 0,
                        N = (0, n.useRef)(),
                        k = (0, n.useCallback)(
                            (e) => {
                                !v &&
                                    (N.current && N.current.disconnect(),
                                    (N.current = new IntersectionObserver(
                                        (e) => {
                                            e[0].isIntersecting && !p && h();
                                        },
                                        { threshold: 0.1 }
                                    )),
                                    e && N.current.observe(e));
                            },
                            [v, p]
                        );
                    return {
                        clientsData: e,
                        isLoading: v,
                        error: m,
                        handleRegionOnChange: (e) => {
                            e && ((null == e ? void 0 : e.value) === "all" ? s.delete("region_id") : s.set("region_id", null == e ? void 0 : e.value), c.push("".concat(o, "/?").concat(s.toString())), l(0));
                        },
                        handleIndustryOnChange: (e) => {
                            e && ((null == e ? void 0 : e.value) === "all" ? s.delete("industry_id") : s.set("industry_id", null == e ? void 0 : e.value), c.push("".concat(o, "/?").concat(s.toString())), l(0));
                        },
                        handleLoadMore: h,
                        isReachedEnd: p,
                        isNoWorksToShow: b,
                        lastBookElementRef: k,
                    };
                },
                b = (e) => {
                    var i, t, n, a;
                    let { widget_type: o, id: r, data: c } = e,
                        { clientsData: s, isLoading: d, error: _, handleRegionOnChange: h, handleIndustryOnChange: x, handleLoadMore: g, isReachedEnd: j, isNoWorksToShow: f, lastBookElementRef: b } = w();
                    (null == c ? void 0 : null === (i = c.dropdownOptions) || void 0 === i ? void 0 : i.regions) && [...(null == c ? void 0 : null === (t = c.dropdownOptions) || void 0 === t ? void 0 : t.regions)];
                    let N = (null == c ? void 0 : null === (n = c.dropdownOptions) || void 0 === n ? void 0 : n.industries) && [
                        { value: "all", label: "All" },
                        ...(null == c ? void 0 : null === (a = c.dropdownOptions) || void 0 === a ? void 0 : a.industries),
                    ];
                    return _
                        ? null
                        : (0, l.jsxs)("section", {
                              className: p().section,
                              id: "".concat(o).concat(r),
                              children: [
                                  (0, l.jsx)("div", {
                                      className: "container",
                                      children: (0, l.jsxs)("div", {
                                          className: " ".concat(p().filter_wrap),
                                          children: [
                                              (0, l.jsx)(v.Z, { active: "client", data: c }),
                                              (0, l.jsx)("div", { className: "".concat(p().select_wrap, " "), children: (0, l.jsx)(m.Z, { options: N, placeholder: "Browse by industry", onChange: x }) }),
                                          ],
                                      }),
                                  }),
                                  (0, l.jsx)("div", {
                                      className: "container ".concat(p().container),
                                      children: (0, l.jsx)("div", {
                                          className: p().tab_listing,
                                          children: (0, l.jsx)("div", {
                                              className: "row row-cols-3 row-cols-md-3 row-cols-lg-4 g-0",
                                              children:
                                                  (null == s ? void 0 : s.length) !== 0 &&
                                                  (null == s
                                                      ? void 0
                                                      : s.map((e, i) =>
                                                            (null == s ? void 0 : s.length) === i + 1
                                                                ? (0, l.jsx)("div", { ref: b, children: (0, l.jsx)(u, { item: e }) }, null == e ? void 0 : e.name)
                                                                : (0, l.jsx)("div", { children: (0, l.jsx)(u, { item: e }) }, null == e ? void 0 : e.name)
                                                        )),
                                          }),
                                      }),
                                  }),
                              ],
                          });
                };
        },
        41379: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return q;
                    },
                });
            var l = t(57437),
                n = t(2265),
                a = t(24033),
                o = t(96866),
                r = t.n(o),
                c = t(12426),
                s = t(58440),
                d = t(30563),
                _ = t(62075),
                u = t(2662),
                v = t(5751),
                m = t(47995),
                h = t(46203),
                p = t(50376),
                x = t(15627);
            t(17910), t(76282);
            var g = t(29639),
                j = (e) => {
                    let { style: i, countriesArray: t } = e,
                        {
                            handleSubmit: n,
                            formApiRef: a,
                            isLoading: o,
                            setSelectedCountry: r,
                            countryOptions: x,
                            defaultCountryValue: j,
                            defaultPhoneCountryCode: f,
                            onSubmitFailed: w,
                            formSubmitedFailed: b,
                            isDefaultCountryLoading: N,
                            isFormClicked: k,
                        } = (0, m.Z)({ countriesArray: t });
                    return (0, l.jsx)(c.l0, {
                        onSubmit: n,
                        formApiRef: a,
                        onSubmitFailure: w,
                        focusOnInvalid: !0,
                        children: (e) => {
                            let { formApi: t } = e;
                            return (0, l.jsx)(l.Fragment, {
                                children: (0, l.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: "col-12 col-lg-6",
                                            children: (0, l.jsx)("div", {
                                                className: "".concat(i.form_wrapper),
                                                children: (0, l.jsx)(s.Z, { field: "firstName", label: "First Name*", placeholder: "Enter first name", validate: (0, u.Z)([v.q9, v.f9]), validateOn: "change-blur", formSubmitedFailed: b }),
                                            }),
                                        }),
                                        (0, l.jsx)("div", {
                                            className: "col-12 col-lg-6",
                                            children: (0, l.jsx)("div", {
                                                className: "".concat(i.form_wrapper),
                                                children: (0, l.jsx)(s.Z, { field: "lastName", label: "Last Name", placeholder: "Enter last name", validateOn: "change-blur", validate: (0, u.Z)([v.E2]), formSubmitedFailed: b }),
                                            }),
                                        }),
                                        (0, l.jsx)("div", {
                                            className: "col-12 col-xl-6",
                                            children: (0, l.jsx)("div", {
                                                className: "".concat(i.form_wrapper),
                                                children: (0, l.jsx)(s.Z, { field: "email", label: "Email*", type: "email", placeholder: "Enter email", validateOn: "change-blur", validate: (0, u.Z)([v.q9, v.oH]), formSubmitedFailed: b }),
                                            }),
                                        }),
                                        (0, l.jsx)("div", {
                                            className: "col-12 col-xl-6",
                                            children: (0, l.jsx)("div", {
                                                className: "".concat(i.form_wrapper),
                                                children: (0, l.jsx)(h.Z, {
                                                    field: "phoneNumber",
                                                    label: "Phone Number*",
                                                    placeholder: "Phone number",
                                                    autoComplete: "tel",
                                                    validateOn: "change-blur",
                                                    validate: (0, u.Z)([v.q9, v.a$]),
                                                    validateOnChange: !0,
                                                    formSubmitedFailed: b,
                                                }),
                                            }),
                                        }),
                                        (0, l.jsx)("div", {
                                            className: "col-12",
                                            children: (0, l.jsx)("div", {
                                                className: "".concat(i.form_wrapper),
                                                children: (0, l.jsx)(d.Z, { field: "tellusmore", label: "Tell Us More", placeholder: "Brief about your project", maxLength: p.mU0 }),
                                            }),
                                        }),
                                        (0, l.jsx)("div", {
                                            className: "col-12 text-end",
                                            children: (0, l.jsxs)("button", {
                                                type: "submit",
                                                disabled: o || k,
                                                className: "btn btn-primary d-inline-flex justify-center  fill",
                                                children: [
                                                    (0, l.jsx)("span", { className: "label-item ".concat(o && "loading"), children: "Submit" }),
                                                    (0, l.jsx)("span", { className: "ms-2 label-item ".concat(o && "loading"), children: (0, l.jsx)(_.Z, { icon: "arrow-right", size: 12 }) }),
                                                    o && (0, l.jsx)("span", { className: "loader", children: (0, l.jsx)(g.Z, { animation: "border", size: "sm" }) }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            });
                        },
                    });
                };
            t(99321);
            var f = t(16898),
                w = t(16272),
                b = t(81349),
                N = t(61683),
                k = t(33068),
                y = t(5925),
                Z = t(18893),
                C = t(50640),
                B = t(58441),
                S = () => {
                    let e = (0, n.useRef)(),
                        [i, t] = (0, n.useState)(!1),
                        [l, a] = (0, n.useState)(!1),
                        o = (0, n.useRef)(),
                        { trigger: r, data: c, isMutating: s, error: d } = (0, k.Z)("".concat(Z.b0, "/api/enquiry/partnership/"), I, {
                            onSuccess: (i) => {
                                if (i) {
                                    var l;
                                    a(!1),
                                        (null == i ? void 0 : i.status)
                                            ? (t(!1),
                                              y.Am.success(null == i ? void 0 : i.message, { duration: 4e3, id: "partnership_form" }),
                                              null == e || null === (l = e.current) || void 0 === l || l.reset(),
                                              (0, B.o)({ event: "FormSubmission", parameters: { formName: "Partnership Enquiry", ...(null == o ? void 0 : o.current) } }))
                                            : y.Am.error(null == i ? void 0 : i.message, { duration: 4e3, id: "partnership_form" });
                                }
                            },
                            onError: () => {},
                        });
                    return {
                        handleSubmit: (e) => {
                            a(!0);
                            let i = JSON.parse(localStorage.getItem("utm_items")),
                                t = (0, C.f)(e);
                            o.current = { ...(null == e ? void 0 : e.values) };
                            let l = null == t ? void 0 : t.countryCode,
                                n = null == t ? void 0 : t.phoneNumber,
                                c = null == t ? void 0 : t.isoCode;
                            grecaptcha.ready(async () => {
                                try {
                                    var t, a, o, s, d, _, u;
                                    let v = await grecaptcha.execute("6LcVWhcoAAAAANhkmOWGwMhxbbwJ-W-ra5v7XkUk");
                                    r({
                                        first_name: null == e ? void 0 : null === (t = e.values) || void 0 === t ? void 0 : t.firstName,
                                        last_name: null == e ? void 0 : null === (a = e.values) || void 0 === a ? void 0 : a.lastName,
                                        email: null == e ? void 0 : null === (o = e.values) || void 0 === o ? void 0 : o.email,
                                        phone_number: null == e ? void 0 : null === (s = e.values) || void 0 === s ? void 0 : s.phoneNumber,
                                        company_name: null == e ? void 0 : null === (d = e.values) || void 0 === d ? void 0 : d.companyname,
                                        message: null == e ? void 0 : null === (_ = e.values) || void 0 === _ ? void 0 : _.tellusmore,
                                        is_privacy_policy_accepted: !!(null == e ? void 0 : null === (u = e.values) || void 0 === u ? void 0 : u.privacypolicy),
                                        captcha: v,
                                        phone_number_cc: l || "",
                                        phone_number: n || "",
                                        phone_number_cc_country_code: c || "",
                                        utm_source: (null == i ? void 0 : i.utm_source) || "",
                                        utm_medium: (null == i ? void 0 : i.utm_medium) || "",
                                        utm_campaign: (null == i ? void 0 : i.utm_campaign) || "",
                                        utm_term: (null == i ? void 0 : i.utm_term) || "",
                                        utm_content: (null == i ? void 0 : i.utm_content) || "",
                                        utm_device: (null == i ? void 0 : i.utm_device) || "",
                                        fbclid: (null == i ? void 0 : i.fbclid) || "",
                                        gclid: (null == i ? void 0 : i.gclid) || "",
                                        lpurl: (null == i ? void 0 : i.lpurl) || "",
                                        creative: (null == i ? void 0 : i.creative) || "",
                                        referral_id: (null == i ? void 0 : i.referral_id) || "",
                                    });
                                } catch (e) {}
                            });
                        },
                        formApiRef: e,
                        onSubmitFailed: () => {
                            t(!0);
                        },
                        formSubmitedFailed: i,
                        isLoading: s,
                        isFormClicked: l,
                    };
                };
            async function I(e, i) {
                let { arg: t } = i;
                return fetch(e, { method: "POST", body: JSON.stringify(t), headers: { "Content-Type": "application/json" } })
                    .then((e) => e.json())
                    .catch((e) => console.log(e));
            }
            var L = (e) => {
                    let { style: i } = e,
                        { handleSubmit: t, formApiRef: n, onSubmitFailed: a, formSubmitedFailed: o, isLoading: r, isFormClicked: m } = S();
                    return (0, l.jsx)(c.l0, {
                        onSubmit: t,
                        formApiRef: n,
                        onSubmitFailure: a,
                        focusOnInvalid: !0,
                        children: (0, l.jsxs)("div", {
                            className: "row",
                            children: [
                                (0, l.jsx)("div", {
                                    className: "col-12 col-lg-6",
                                    children: (0, l.jsx)("div", {
                                        className: "".concat(i.form_wrapper),
                                        children: (0, l.jsx)(s.Z, { field: "firstName", label: "First Name*", placeholder: "Enter first name", validate: (0, u.Z)([v.q9, v.f9]), validateOn: "change-blur", formSubmitedFailed: o }),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "col-12 col-lg-6",
                                    children: (0, l.jsx)("div", {
                                        className: "".concat(i.form_wrapper),
                                        children: (0, l.jsx)(s.Z, { field: "lastName", label: "Last Name", placeholder: "Enter last name", validate: (0, u.Z)([v.E2]), validateOn: "change-blur", formSubmitedFailed: o }),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "col-12 col-lg-6",
                                    children: (0, l.jsx)("div", {
                                        className: "".concat(i.form_wrapper),
                                        children: (0, l.jsx)(s.Z, { field: "email", label: "Email*", type: "email", placeholder: "Enter email", validate: (0, u.Z)([v.q9, v.oH]), validateOn: "change-blur", formSubmitedFailed: o }),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "col-12 col-lg-6",
                                    children: (0, l.jsx)("div", {
                                        className: "".concat(i.form_wrapper),
                                        children: (0, l.jsx)(N.Z, {
                                            field: "phoneNumber",
                                            label: "Phone Number*",
                                            placeholder: "Phone number",
                                            autoComplete: "tel",
                                            validate: (0, u.Z)([v.q9, v.a$]),
                                            validateOn: "change-blur",
                                            formSubmitedFailed: o,
                                        }),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "col-12 col-lg-12",
                                    children: (0, l.jsx)("div", { className: "".concat(i.form_wrapper), children: (0, l.jsx)(s.Z, { field: "companyname", label: "Company Name", placeholder: "Enter your company name" }) }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "col-12",
                                    children: (0, l.jsx)("div", { className: "".concat(i.form_wrapper), children: (0, l.jsx)(d.Z, { field: "tellusmore", label: "Tell Us More", placeholder: "We'd love to hear more", maxLength: p.mU0 }) }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "col-12",
                                    children: (0, l.jsx)("div", { className: i.privacy_check, children: (0, l.jsx)(x.Z, { name: "privacypolicy", id: "partnership", validateOn: "change-blur", validate: (0, u.Z)([v.j0]) }) }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "col-12 text-end",
                                    children: (0, l.jsx)("div", {
                                        className: "".concat(i.enq_btn),
                                        children: (0, l.jsxs)("button", {
                                            type: "submit",
                                            className: "btn btn-primary d-inline-flex justify-center fw-400  fill",
                                            disabled: r || m,
                                            children: [
                                                (0, l.jsx)("span", { className: "label-item ".concat(r && "loading"), children: "Submit" }),
                                                (0, l.jsx)("span", { className: "ms-2 label-item ".concat(r && "loading"), children: (0, l.jsx)(_.Z, { icon: "arrow-right", size: 12 }) }),
                                                r && (0, l.jsx)("span", { className: "loader", children: (0, l.jsx)(g.Z, { animation: "border", size: "sm" }) }),
                                            ],
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                P = t(98091),
                T = (e) => {
                    let { data: i } = e,
                        { isMobile: t, isTablet: l, isDesktop: o } = (0, f.Z)(),
                        r = (0, a.useRouter)(),
                        c = (0, a.useParams)();
                    (0, n.useEffect)(() => {
                        if (c) {
                            let e = document.getElementsByClassName("contact-tab-selection");
                            (null == c ? void 0 : c.page) === "get-qoute" ? (e[0].scrollLeft = 0) : (null == c ? void 0 : c.page) === "general-enquiry" && (e[0].scrollLeft = 100);
                        }
                    }, [c]);
                    let s =
                            (null == c ? void 0 : c.page) === "get-qoute"
                                ? "get-qoute"
                                : (null == c ? void 0 : c.page) === "partnership"
                                ? "partnership"
                                : (null == c ? void 0 : c.page) === "general-enquiry"
                                ? "general-enquiry"
                                : "get-qoute",
                        d = "get-qoute" === s ? (null == i ? void 0 : i["get-a-quote"]) : "partnership" === s ? (null == i ? void 0 : i.partnership) : "general-enquiry" === s && (null == i ? void 0 : i["general-enquires"]);
                    return {
                        handleSelect: (e) => {
                            r.push("/contact-us/".concat(e));
                        },
                        titles: d,
                        defaultTab: s,
                    };
                },
                q = (e) => {
                    let { data: i, widget_type: t, id: n } = e,
                        { handleSelect: a, titles: o, defaultTab: c } = T({ data: i });
                    return (0, l.jsx)("section", {
                        className: "".concat(r().contact_us_wrapper),
                        id: "".concat(t).concat(n),
                        children: (0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsxs)("div", {
                                className: "row",
                                children: [
                                    (0, l.jsx)("div", {
                                        className: "col-lg-5",
                                        children: (0, l.jsxs)("div", {
                                            className: "".concat(r().content_wrapper),
                                            children: [
                                                (null == o ? void 0 : o.title) && (0, l.jsx)("h1", { className: "".concat(r().title, " fw-regular ttl-80  lh-title mb-2 mb-lg-0"), children: null == o ? void 0 : o.title }),
                                                (null == o ? void 0 : o.sub_title) && (0, l.jsx)("p", { className: "".concat(r().description, " d-none d-lg-block lh-primary"), children: null == o ? void 0 : o.sub_title }),
                                            ],
                                        }),
                                    }),
                                    (0, l.jsx)("div", {
                                        className: "col-lg-7",
                                        children: (0, l.jsx)("div", {
                                            className: "".concat(r().form_container, " "),
                                            children: (0, l.jsxs)(b.Z, {
                                                defaultActiveKey: c,
                                                activeKey: c,
                                                id: "contact-form",
                                                className: "".concat(r().contact_tab, " contact-tab-selection"),
                                                onSelect: (e) => a(e),
                                                children: [
                                                    (0, l.jsx)(w.Z, { eventKey: "get-qoute", title: "Get a Quote", children: (0, l.jsx)(j, { style: r() }) }),
                                                    (0, l.jsx)(w.Z, { eventKey: "partnership", title: "Partnership", children: (0, l.jsx)(L, { style: r() }) }),
                                                    (0, l.jsx)(w.Z, { eventKey: "general-enquiry", title: "General Enquiry", children: (0, l.jsx)(P.Z, { style: r() }) }),
                                                ],
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    });
                };
        },
        77511: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return s;
                    },
                });
            var l = t(57437),
                n = (e) => {
                    let { item: i, style: t, isOpen: n } = e;
                    return (0, l.jsxs)("div", {
                        className: "".concat(t.accordion_wrapper),
                        children: [
                            (0, l.jsx)("div", {
                                className: "".concat(t.accordion_header),
                                children: (0, l.jsx)("div", {
                                    className: "".concat(t.title_wrapper),
                                    children: (0, l.jsx)("h3", { className: "".concat(t.sub_title, " ttl-28 fw-medium mb-1 mb-lg-3"), children: null == i ? void 0 : i.title }),
                                }),
                            }),
                            (null == i ? void 0 : i.description) && n && (0, l.jsx)("div", { children: i.description }),
                        ],
                    });
                },
                a = t(1622),
                o = t.n(a),
                r = t(39646),
                c = (e, i) => {
                    let t = (0, r.Z)(e, i);
                    return { elementRef: t };
                },
                s = (e) => {
                    let { data: i, widget_type: t, background_color: a, id: r } = e,
                        { title: s, process_data: d } = i,
                        { elementRef: _ } = c(t, r),
                        u = d && 0 !== d.length && d.map((e) => (0, l.jsx)(n, { item: e, style: o(), isOpen: !0 }, null == e ? void 0 : e.title));
                    return (0, l.jsx)("section", {
                        className: o().oru_process,
                        id: "".concat(t).concat(r),
                        children: (0, l.jsxs)("div", {
                            className: "container",
                            ref: _,
                            children: [
                                s && (0, l.jsx)("div", { className: "".concat(o().heading), children: (0, l.jsx)("h2", { className: "".concat(o().title, " ttl-80 fw-regular"), children: s }) }),
                                (0, l.jsx)("div", { className: "".concat(o().main_wrapper), children: (0, l.jsx)("div", { className: "".concat(o().accordion), children: u }) }),
                            ],
                        }),
                    });
                };
        },
        37204: function (e, i, t) {
            "use strict";
            t.r(i);
            var l = t(57437),
                n = t(29211),
                a = t(15196),
                o = t.n(a),
                r = t(90290),
                c = t(47295),
                s = t(16898),
                d = t(22687),
                _ = t(2265);
            i.default = (e) => {
                let { data: i, background_color: t, widget_type: a } = e,
                    { title: v, subtitle: m, button: h } = i,
                    { isMobile: p } = (0, s.Z)(),
                    x = (0, _.useRef)(null),
                    g = (0, d.Z)(x, { threshold: 0.1 }, !0);
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)("section", {
                        ref: x,
                        id: a,
                        children: (0, l.jsxs)(c.Z, {
                            className: "".concat(o().section, " ").concat(p ? o().mobile : ""),
                            children: [
                                (0, l.jsxs)("div", {
                                    className: p ? "".concat(o().cont, " ").concat(o().mobile) : o().cont,
                                    children: [
                                        (0, l.jsx)("div", { className: "d-none d-sm-block", children: (0, l.jsx)(u, { isAnim: !0 }) }),
                                        g &&
                                            (0, l.jsx)("video", {
                                                className: o().video,
                                                width: "100%",
                                                height: "100%",
                                                loop: !0,
                                                muted: !0,
                                                autoPlay: !0,
                                                playsInline: !0,
                                                loading: "lazy",
                                                preload: "none",
                                                children: (0, l.jsx)("source", { src: "/image/wac.mp4", type: "video/mp4" }),
                                            }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: "container",
                                    children: (0, l.jsx)("div", {
                                        className: "row",
                                        children: (0, l.jsxs)("div", {
                                            className: "col-lg-7",
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: o().content,
                                                    children: [
                                                        v && (0, l.jsx)("h2", { className: "ttl-120  fw-light mb-lg-3", children: v }),
                                                        m && (0, l.jsx)(r.Z, { as: "p", className: "fw-light mb-lg-5", content: m }),
                                                        (null == h ? void 0 : h.link) &&
                                                            (0, l.jsx)("div", { className: "d-none d-sm-block", children: (0, l.jsx)(n.Z, { isLight: !0, link: null == h ? void 0 : h.link, label: null == h ? void 0 : h.label }) }),
                                                    ],
                                                }),
                                                (0, l.jsx)("div", { className: "d-sm-none ".concat(o().mobile_wrapper), children: (0, l.jsx)(u, {}) }),
                                                (null == h ? void 0 : h.link) &&
                                                    (0, l.jsx)("div", {
                                                        className: "".concat(o().mobile_btn, " d-sm-none"),
                                                        children: (0, l.jsx)(n.Z, { isLight: !0, link: null == h ? void 0 : h.link, label: null == h ? void 0 : h.label }),
                                                    }),
                                            ],
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    }),
                });
            };
            let u = (e) => {
                let { isAnim: i } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("div", {
                            className: i ? o().item : o().item_list,
                            style: i && { top: "25%", left: "13%" },
                            children: (0, l.jsxs)("div", { className: o().item_body, children: [(0, l.jsx)("h3", { children: "600+" }), (0, l.jsx)("p", { children: "Projects" })] }),
                        }),
                        (0, l.jsx)("div", {
                            className: i ? o().item : o().item_list,
                            style: i && { top: "39%", left: "10%" },
                            children: (0, l.jsxs)("div", { className: o().item_body, children: [(0, l.jsx)("h3", { children: "15+" }), (0, l.jsx)("p", { children: "Industries" })] }),
                        }),
                        (0, l.jsx)("div", {
                            className: i ? o().item : o().item_list,
                            style: i && { top: "53%", left: "9%" },
                            children: (0, l.jsxs)("div", { className: o().item_body, children: [(0, l.jsx)("h3", { children: "100+" }), (0, l.jsx)("p", { children: "Brand Connections" })] }),
                        }),
                        (0, l.jsx)("div", {
                            className: i ? o().item : o().item_list,
                            style: i && { top: "60%", left: "12%" },
                            children: (0, l.jsxs)("div", { className: o().item_body, children: [(0, l.jsx)("h3", { children: "450+" }), (0, l.jsx)("p", { children: "International Clients" })] }),
                        }),
                    ],
                });
            };
        },
        13538: function (e, i, t) {
            "use strict";
            t.r(i);
            var l = t(57437),
                n = t(90290),
                a = t(29211),
                o = t(58916),
                r = t.n(o),
                c = t(24033),
                s = t(39646);
            let d = ["/"];
            i.default = (e) => {
                var i, t, o;
                let { data: _, widget_type: u, background_color: v, id: m } = e,
                    h = (0, s.Z)(u, m),
                    p = (0, c.usePathname)(),
                    x = d.includes(p) ? "" : r().inner_page;
                return (0, l.jsx)("section", {
                    className: "".concat(r().section, " ").concat(x),
                    id: "".concat(u).concat(m),
                    ref: h,
                    children: (0, l.jsx)("div", {
                        className: "container ",
                        children: (0, l.jsxs)("div", {
                            className: "".concat(r().wrapper),
                            children: [
                                (null == _ ? void 0 : _.title) && (0, l.jsx)(n.Z, { as: "h2", className: "ttl-32 lh-title-sub ".concat(r().title), content: null == _ ? void 0 : _.title }),
                                (null == _ ? void 0 : _.content) && (0, l.jsx)(n.Z, { as: "p", className: "lh-primary mb-0 mb-lg-4 mb-lg-4  ".concat(r().description), content: null == _ ? void 0 : _.content }),
                                (null == _ ? void 0 : null === (i = _.button) || void 0 === i ? void 0 : i.link) &&
                                    (0, l.jsx)("div", {
                                        className: r().btn_wrap,
                                        children: (0, l.jsx)(a.Z, {
                                            label: null == _ ? void 0 : null === (t = _.button) || void 0 === t ? void 0 : t.label,
                                            link: null == _ ? void 0 : null === (o = _.button) || void 0 === o ? void 0 : o.link,
                                            hasColorShift: !0,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                });
            };
        },
        38284: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return g;
                    },
                });
            var l = t(57437),
                n = t(2265),
                a = t(23859),
                o = t.n(a),
                r = t(2145),
                c = t(99321),
                s = t(60429),
                d = (e) => {
                    let { vimeoLink: i, play: t, setPlaying: n, setPlay: a, clientPopUp: o } = e;
                    return (0, l.jsx)(s.Z, {
                        url: "https://vimeo.com/" + i,
                        playing: t || o,
                        controls: !0,
                        width: "100%",
                        height: "100%",
                        onPlay: () => a(!0),
                        onPause: () => a(!1),
                        onStart: () => {
                            n(!0);
                        },
                        playsinline: !0,
                    });
                },
                _ = t(2574),
                u = t(82328),
                v = t.n(u),
                m = t(16898),
                h = (e) => {
                    let { isActive: i } = e,
                        { isMobile: t, isDesktop: l } = (0, m.Z)(),
                        [a, o] = (0, n.useState)(!1),
                        [r, c] = (0, n.useState)(!1),
                        [s, d] = (0, n.useState)(!1);
                    return (
                        (0, n.useEffect)(() => {
                            i || (o(!1), c(!1));
                        }, [i]),
                        (0, n.useEffect)(() => {
                            let e;
                            let i = () => {
                                d(!0),
                                    clearTimeout(e),
                                    (e = setTimeout(() => {
                                        d(!1);
                                    }, 1e3));
                            };
                            return (
                                window.addEventListener("mousemove", i),
                                () => {
                                    window.removeEventListener("mousemove", i), clearTimeout(e);
                                }
                            );
                        }, []),
                        { isMobile: t, play: a, playing: r, isMouseMoving: s, setPlay: o, setPlaying: c, isDesktop: l }
                    );
                },
                p = (e) => {
                    var i, t, n, a, o, r;
                    let { item: s, playerRef: u, isActive: m } = e,
                        { play: p, playing: x, isMouseMoving: g, setPlay: j, setPlaying: f, isDesktop: w } = h({ isActive: m });
                    return (0, l.jsx)("div", {
                        className: v().card,
                        onClick: () => j(!p),
                        children: (0, l.jsxs)("div", {
                            className: v().card_head,
                            children: [
                                (0, l.jsx)("div", {
                                    className: ""
                                        .concat(v().btn_overlay, " ")
                                        .concat(x && v().btn_not_active, " ")
                                        .concat(g || !p ? v().btn_active : ""),
                                    children:
                                        w &&
                                        (0, l.jsxs)("button", {
                                            className: v().playbtn,
                                            children: [
                                                (0, l.jsx)("span", { className: "visually-hidden", children: "Click here to play" }),
                                                p
                                                    ? (0, l.jsx)("svg", {
                                                          xmlns: "http://www.w3.org/2000/svg",
                                                          height: "40",
                                                          viewBox: "0 -960 960 960",
                                                          width: "40",
                                                          children: (0, l.jsx)("path", { d: "M557.692-220.001v-519.998h157.179v519.998H557.692Zm-312.563 0v-519.998h157.435v519.998H245.129Z" }),
                                                      })
                                                    : (0, l.jsx)("svg", {
                                                          xmlns: "http://www.w3.org/2000/svg",
                                                          height: "40",
                                                          viewBox: "0 -960 960 960",
                                                          width: "40",
                                                          children: (0, l.jsx)("path", { d: "M340.001-237.644v-487.687l383.073 243.844-383.073 243.843Z" }),
                                                      }),
                                            ],
                                        }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: "".concat(v().img, " card-img ratio"),
                                    children: [
                                        m && w
                                            ? (0, l.jsx)(l.Fragment, {
                                                  children: m
                                                      ? (null == s ? void 0 : s.vimoe_link) &&
                                                        (0, l.jsxs)(l.Fragment, {
                                                            children: [
                                                                (0, l.jsx)(d, { vimeoLink: null == s ? void 0 : s.vimoe_link, playerRef: u, play: p, setPlaying: f, setPlay: j }),
                                                                !x &&
                                                                    (0, l.jsx)(c.Z, {
                                                                        src: null == s ? void 0 : null === (i = s.image) || void 0 === i ? void 0 : i.url,
                                                                        fill: !0,
                                                                        alt: "".concat(null == s ? void 0 : null === (t = s.image) || void 0 === t ? void 0 : t.name),
                                                                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 50vw",
                                                                    }),
                                                            ],
                                                        })
                                                      : (0, l.jsx)(c.Z, {
                                                            src: null == s ? void 0 : null === (n = s.image) || void 0 === n ? void 0 : n.url,
                                                            fill: !0,
                                                            alt: "".concat(null == s ? void 0 : null === (a = s.image) || void 0 === a ? void 0 : a.name),
                                                            sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 50vw",
                                                        }),
                                              })
                                            : (0, l.jsx)(c.Z, {
                                                  src: null == s ? void 0 : null === (o = s.image) || void 0 === o ? void 0 : o.url,
                                                  fill: !0,
                                                  alt: "".concat(null == s ? void 0 : null === (r = s.image) || void 0 === r ? void 0 : r.name),
                                                  sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 50vw",
                                              }),
                                        (null == s ? void 0 : s.vimoe_link) &&
                                            (0, l.jsx)("div", {
                                                className: "".concat(v().card_footer, " d-lg-none d-flex align-items-end"),
                                                children: (0, l.jsx)(_.default, { vimeoLink: null == s ? void 0 : s.vimoe_link, thumbImage: null == s ? void 0 : s.image }),
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    });
                },
                x = t(72526),
                g = (e) => {
                    var i, t, a, c;
                    let { data: s, widget_type: d, id: _ } = e,
                        u = (0, n.useRef)(null),
                        v = {
                            paceBetween: 57,
                            slidesPerView: 1.35,
                            pagination: { clickable: !0 },
                            loop: !0,
                            onSlideChange: null == u ? void 0 : null === (t = u.current) || void 0 === t ? void 0 : null === (i = t.plyr) || void 0 === i ? void 0 : i.pause(),
                            breakpoints: {
                                0: { spaceBetween: 11, centeredSlides: !1, slidesPerView: 1 },
                                768: { spaceBetween: 20, slidesPerView: 2 },
                                992: { spaceBetween: 30, slidesPerView: 1.35, centeredSlides: !0 },
                                1500: { spaceBetween: 57, slidesPerView: 1.35, centeredSlides: !0 },
                            },
                        };
                    return (0, l.jsxs)("section", {
                        className: "".concat(o().section),
                        id: "".concat(d).concat(_),
                        children: [
                            (0, l.jsx)("div", {
                                className: "container",
                                children: (0, l.jsxs)("div", {
                                    className: "  text-lg-center ".concat(o().title_wrap),
                                    children: [
                                        (null == s ? void 0 : s.title) && (0, l.jsx)("h2", { className: "ttl-80 fw-regular", children: null == s ? void 0 : s.title }),
                                        (null == s ? void 0 : s.subTitle) && (0, l.jsx)("p", { className: "mb-0 lh-primary", children: null == s ? void 0 : s.subTitle }),
                                    ],
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: "container ".concat(o().container),
                                children: (0, l.jsx)("div", {
                                    className: o().slider,
                                    children: (0, l.jsx)(x.Z, {
                                        customSettings: v,
                                        children:
                                            (null == s ? void 0 : null === (a = s.testimonials) || void 0 === a ? void 0 : a.length) !== 0 &&
                                            (null == s
                                                ? void 0
                                                : null === (c = s.testimonials) || void 0 === c
                                                ? void 0
                                                : c.map((e, i) =>
                                                      (0, l.jsx)(
                                                          r.o5,
                                                          {
                                                              children: (i) => {
                                                                  let { isActive: t } = i;
                                                                  return (0, l.jsx)(p, { item: e, playerRef: u, isActive: t });
                                                              },
                                                          },
                                                          i
                                                      )
                                                  )),
                                    }),
                                }),
                            }),
                        ],
                    });
                };
        },
        8566: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return x;
                    },
                });
            var l = t(57437),
                n = t(12426),
                a = t(58440),
                o = t(2662),
                r = t(5751),
                c = t(61683),
                s = t(30563),
                d = t(62075),
                _ = t(83032),
                u = t.n(_),
                v = () =>
                    (0, l.jsx)(n.l0, {
                        children: (0, l.jsx)("div", {
                            className: "row",
                            children: (0, l.jsxs)("div", {
                                className: "".concat(u().form_container),
                                children: [
                                    (0, l.jsx)("div", { className: u().form_wrapper, children: (0, l.jsx)(a.Z, { field: "fullname", label: "Full Name*", placeholder: "Enter full name", validate: (0, o.Z)([r.q9, r.f9]) }) }),
                                    (0, l.jsx)("div", { className: u().form_wrapper, children: (0, l.jsx)(a.Z, { field: "email", label: "Email*", placeholder: "Enter email", validate: (0, o.Z)([r.q9, r.oH]) }) }),
                                    (0, l.jsx)("div", {
                                        className: u().form_wrapper,
                                        children: (0, l.jsx)(c.Z, { field: "phoneNumber", label: "Phone Number*", placeholder: "phone number", autoComplete: "tel", validate: (0, o.Z)([r.q9]), validateOnChange: !0 }),
                                    }),
                                    (0, l.jsx)("div", { className: u().form_wrapper, children: (0, l.jsx)(s.Z, { field: "message", label: "Message", placeholder: "Enter message" }) }),
                                    (0, l.jsxs)("div", {
                                        className: "".concat(u().action_wrapper),
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: "".concat(u().attachment),
                                                children: [
                                                    (0, l.jsx)("input", { type: "file", multiple: !0 }),
                                                    (0, l.jsxs)("div", {
                                                        className: "".concat(u().attachment_container),
                                                        children: [
                                                            (0, l.jsx)("span", { className: "".concat(u().attachment_icon), children: (0, l.jsx)(d.Z, { icon: "attachment", size: 20 }) }),
                                                            (0, l.jsx)("span", { className: "".concat(u().attachment_text), children: "Add an attachment" }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            (0, l.jsx)("div", {
                                                className: "".concat(u().enq_btn),
                                                children: (0, l.jsxs)("button", {
                                                    type: "submit",
                                                    className: "btn btn-primary d-flex justify-center w-100 fill",
                                                    children: [(0, l.jsx)("span", { children: "Send Enquiry" }), (0, l.jsx)("span", { children: (0, l.jsx)(d.Z, { icon: "arrow-right", size: 12 }) })],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                m = t(67671),
                h = t.n(m),
                p = t(39646),
                x = (e) => {
                    let { data: i, background_color: t, widget_type: n, id: a } = e,
                        { title: o, description: r } = i,
                        c = (0, p.Z)(n, a);
                    return (0, l.jsx)("section", {
                        className: "".concat(h().form_wrapper),
                        id: "".concat(n).concat(a),
                        ref: c,
                        children: (0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsxs)("div", {
                                className: "row",
                                children: [
                                    (0, l.jsx)("div", {
                                        className: "col-lg-6",
                                        children: (0, l.jsxs)("div", {
                                            className: "".concat(h().content_wrapper),
                                            children: [o && (0, l.jsx)("h3", { className: "ttl-80 fw-regular ".concat(h().title), children: o }), r && (0, l.jsx)("p", { className: "ttl-28 ".concat(h().description), children: r })],
                                        }),
                                    }),
                                    (0, l.jsx)("div", { className: "col-lg-6", children: (0, l.jsx)(v, {}) }),
                                ],
                            }),
                        }),
                    });
                };
        },
        56062: function (e, i, t) {
            "use strict";
            t.r(i);
            var l = t(57437),
                n = t(89175),
                a = t.n(n),
                o = t(62943),
                r = t(39646);
            i.default = (e) => {
                let { data: i, background_color: t, widget_type: n, id: c } = e,
                    { title: s, faqs: d } = i,
                    _ = (0, r.Z)(n, c),
                    u =
                        d &&
                        0 !== d.length &&
                        d.map((e, i) =>
                            (0, l.jsxs)(
                                o.Z.Item,
                                {
                                    eventKey: "".concat(null == e ? void 0 : e.question).concat(i),
                                    className: "".concat(a().accordion_wrapper),
                                    children: [
                                        (0, l.jsxs)(o.Z.Header, {
                                            as: "div",
                                            className: "".concat(a().accordion_header),
                                            children: [
                                                (0, l.jsx)("div", {
                                                    className: "".concat(a().title_wrapper),
                                                    children: (null == e ? void 0 : e.question) && (0, l.jsx)("h3", { className: "".concat(a().sub_title, " fw-medium mb-0"), children: null == e ? void 0 : e.question }),
                                                }),
                                                (0, l.jsx)("span", { className: "".concat(a().icon, " icon") }),
                                            ],
                                        }),
                                        (0, l.jsx)(o.Z.Body, {
                                            className: "".concat(a().accordion_body),
                                            children: (null == e ? void 0 : e.answer) && (0, l.jsx)("p", { className: "lh-primary mb-0", children: null == e ? void 0 : e.answer }),
                                        }),
                                    ],
                                },
                                i
                            )
                        );
                return (0, l.jsx)("section", {
                    className: "".concat(a().faq_wrapper, " faq no-bg"),
                    id: "".concat(n).concat(c),
                    ref: _,
                    children: (0, l.jsxs)("div", {
                        className: "container",
                        children: [
                            s && (0, l.jsx)("div", { className: "".concat(a().heading_wrapper), children: (0, l.jsx)("h2", { className: "".concat(a().title, " ttl-80 fw-regular"), children: s }) }),
                            (0, l.jsx)("div", { className: "".concat(a().accordion_main), children: (0, l.jsx)(o.Z, { className: "".concat(a().accordion), alwaysOpen: !0, children: u }) }),
                        ],
                    }),
                });
            };
        },
        67455: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return d;
                    },
                });
            var l = t(57437),
                n = t(22312),
                a = t(14325),
                o = t.n(a),
                r = t(39646),
                c = t(2265),
                s = (e) => {
                    let i,
                        { style: t, elementRef: l } = e,
                        n = (0, c.useRef)(null),
                        a = (0, c.useRef)(null),
                        [o, r] = (0, c.useState)(!1),
                        [s, d] = (0, c.useState)(0),
                        [_, u] = (0, c.useState)("");
                    return (
                        (0, c.useEffect)(() => {
                            setTimeout(() => {
                                r(!0);
                            }, 10);
                        }, []),
                        (0, c.useEffect)(() => {
                            i = document.querySelector(".".concat(t.mouse_interaction_wrap));
                            let e = { x: 38, y: 227 },
                                l = { x: 0, y: 0 },
                                n = () => {
                                    (l.x += (e.x - l.x) * 0.1), (l.y += (e.y - l.y) * 0.1), i && (i.style.transform = "translate3d(" + l.x + "px ," + l.y + "px, 0)");
                                };
                            if (a) {
                                var o;
                                null === (o = a.current) ||
                                    void 0 === o ||
                                    o.addEventListener("mousemove", (i) => {
                                        (e.x = i.screenX), (e.y = i.screenY);
                                    });
                            }
                            function r() {
                                n(), requestAnimationFrame(r);
                            }
                            return (
                                requestAnimationFrame(r),
                                () => {
                                    cancelAnimationFrame(r);
                                }
                            );
                        }, [o]),
                        {
                            mouseRef: n,
                            activeClass: _,
                            index: s,
                            handleMouseEnter: () => {
                                u("is-active");
                            },
                            handleMousLeave: () => {
                                u("");
                            },
                            buildingRef: a,
                            anim: o,
                            setIndex: d,
                        }
                    );
                },
                d = (e) => {
                    var i, t, a, c;
                    let { mouseRef: d, activeClass: _, index: u, handleMouseEnter: v, handleMousLeave: m, buildingRef: h, setIndex: p } = s({ style: o() }),
                        x = (0, r.Z)(null == e ? void 0 : e.widget_type, null == e ? void 0 : e.id);
                    return (
                        null == e || e.background_color,
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", {
                                    className: "d-none d-lg-block ".concat(o().mouse_interaction_wrap, " ").concat(_),
                                    id: "".concat(null == e ? void 0 : e.widget_type).concat(null == e ? void 0 : e.id),
                                    ref: x,
                                    children: (0, l.jsx)("div", {
                                        className: o().mouse_interaction,
                                        children:
                                            null == e
                                                ? void 0
                                                : null === (i = e.data) || void 0 === i
                                                ? void 0
                                                : i.features_data.map((e, i) => {
                                                      var t;
                                                      return (0, l.jsx)(
                                                          "figure",
                                                          {
                                                              className: "".concat(o().fig, " ").concat(i === u ? o().active : ""),
                                                              children: (null == e ? void 0 : null === (t = e.image) || void 0 === t ? void 0 : t.url) && (0, l.jsx)(n.Z, { src: e.image.url, fill: !0, alt: e.image.alternative_text }),
                                                          },
                                                          e.title
                                                      );
                                                  }),
                                    }),
                                }),
                                (0, l.jsx)("section", {
                                    className: o().section,
                                    id: "".concat(null == e ? void 0 : e.widget_type).concat(null == e ? void 0 : e.id),
                                    children: (0, l.jsxs)("div", {
                                        className: "container",
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: o().title,
                                                children:
                                                    (null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.title) &&
                                                    (0, l.jsx)("h2", { className: "ttl-80  fw-regular mb-0", children: null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : a.title }),
                                            }),
                                            (0, l.jsx)("div", {
                                                className: " ".concat(o().item_wrap),
                                                ref: h,
                                                onMouseLeave: m,
                                                onMouseEnter: v,
                                                children:
                                                    null == e
                                                        ? void 0
                                                        : null === (c = e.data) || void 0 === c
                                                        ? void 0
                                                        : c.features_data.map((e, i) =>
                                                              (0, l.jsxs)(
                                                                  "div",
                                                                  {
                                                                      className: o().item,
                                                                      onMouseOver: () => p(i),
                                                                      children: [
                                                                          (0, l.jsx)("div", { className: o().item_title, children: (0, l.jsx)("h3", { children: e.title }) }),
                                                                          (0, l.jsx)("div", { className: o().item_content, children: (0, l.jsx)("p", { children: e.description }) }),
                                                                      ],
                                                                  },
                                                                  e.title
                                                              )
                                                          ),
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        })
                    );
                };
        },
        65300: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return v;
                    },
                });
            var l = t(57437),
                n = t(16010),
                a = t(62075),
                o = t(62226),
                r = t.n(o),
                c = t(22312),
                s = (e) => {
                    var i, t, o, s;
                    let { item: d } = e;
                    return (0, l.jsxs)("div", {
                        className: "".concat(r().card, " ").concat((null == d ? void 0 : d.card_theme) === "dark" && "card-dark"),
                        style: { "--theme": "".concat(null == d ? void 0 : d.hover_color) },
                        children: [
                            (0, l.jsx)("div", {
                                className: r().card_head,
                                children: (0, l.jsx)("div", {
                                    className: "".concat(r().icon, " "),
                                    children: (0, l.jsx)(c.Z, {
                                        src: null == d ? void 0 : null === (i = d.image) || void 0 === i ? void 0 : i.url,
                                        fill: !0,
                                        alt: null == d ? void 0 : null === (t = d.image) || void 0 === t ? void 0 : t.alternative_text,
                                    }),
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: "".concat(r().card_body, " "),
                                children: [
                                    (null == d ? void 0 : d.name) && (0, l.jsx)("h3", { className: "", children: null == d ? void 0 : d.name }),
                                    (null == d ? void 0 : d.description) && (0, l.jsx)("p", { children: null == d ? void 0 : d.description }),
                                ],
                            }),
                            (0, l.jsx)("div", {
                                className: r().card_footer,
                                children: (0, l.jsxs)(n.Z, {
                                    href: null == d ? void 0 : null === (o = d.button) || void 0 === o ? void 0 : o.link,
                                    className: "btn btn-secondary stretched-link",
                                    children: [
                                        (0, l.jsx)("span", { children: (0, l.jsx)(a.Z, { icon: "arrow-right", size: "12" }) }),
                                        (0, l.jsx)("span", { children: null == d ? void 0 : null === (s = d.button) || void 0 === s ? void 0 : s.label }),
                                    ],
                                }),
                            }),
                        ],
                    });
                },
                d = t(66468),
                _ = t.n(d),
                u = t(39646),
                v = (e) => {
                    var i;
                    let { data: t, background_color: n, widget_type: a, id: o } = e,
                        r =
                            (null == t ? void 0 : null === (i = t.frame_works) || void 0 === i ? void 0 : i.length) !== 0 &&
                            (null == t ? void 0 : t.frame_works.map((e) => (0, l.jsx)("div", { children: (0, l.jsx)(s, { item: e }) }, null == e ? void 0 : e.name))),
                        c = (0, u.Z)(a, o);
                    return (0, l.jsx)("section", {
                        className: _().section,
                        id: "".concat(a).concat(o),
                        ref: c,
                        children: (0, l.jsxs)("div", {
                            className: "container",
                            children: [
                                (null == t ? void 0 : t.title) && (0, l.jsx)("h4", { className: "ttl-80 mb-5 mb-lg-5 fw-regular ", children: null == t ? void 0 : t.title }),
                                (0, l.jsx)("div", { className: "row row-cols-lg-3 ".concat(_().row), children: r }),
                            ],
                        }),
                    });
                };
        },
        87207: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return s;
                    },
                });
            var l = t(57437),
                n = t(99321),
                a = t(87139),
                o = t.n(a),
                r = t(2265),
                c = () => {
                    let [e, i] = (0, r.useState)(!1);
                    return (
                        (0, r.useEffect)(
                            () => (
                                i(!0),
                                document.body.classList.add("dark"),
                                () => {
                                    document.body.classList.remove("dark");
                                }
                            ),
                            []
                        ),
                        { anim: e }
                    );
                };
            t(58281);
            var s = (e) => {
                var i, t, a, r, s, d, _, u;
                let { anim: v } = c();
                return (
                    null == e || e.background_color,
                    (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsxs)("section", {
                            className: "".concat(o().inner_banner, " ").concat(v && o().inview),
                            id: "".concat(null == e ? void 0 : e.widget_type).concat(null == e ? void 0 : e.id),
                            children: [
                                (0, l.jsx)("div", {
                                    className: "".concat(o().media_wrapper),
                                    children:
                                        (null == e ? void 0 : null === (i = e.data) || void 0 === i ? void 0 : i.image) &&
                                        (0, l.jsx)(n.Z, {
                                            src: null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : null === (t = a.image) || void 0 === t ? void 0 : t.url,
                                            width: 1920,
                                            height: 450,
                                            alt: null == e ? void 0 : null === (s = e.data) || void 0 === s ? void 0 : null === (r = s.image) || void 0 === r ? void 0 : r.alternative_text,
                                            sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 160vw",
                                        }),
                                }),
                                (null == e ? void 0 : null === (d = e.data) || void 0 === d ? void 0 : d.title) &&
                                    (0, l.jsx)("div", {
                                        className: o().content_wrapper,
                                        children: (0, l.jsx)("div", {
                                            className: "container",
                                            children:
                                                (null == e ? void 0 : null === (_ = e.data) || void 0 === _ ? void 0 : _.title) &&
                                                (0, l.jsx)("h1", { className: "ttl-80 fw-light lh-title mb-0", children: null == e ? void 0 : null === (u = e.data) || void 0 === u ? void 0 : u.title }),
                                        }),
                                    }),
                            ],
                        }),
                    })
                );
            };
        },
        58281: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return d;
                    },
                });
            var l = t(57437),
                n = t(99321),
                a = t(97266),
                o = t.n(a),
                r = t(2265),
                c = () => {
                    let [e, i] = (0, r.useState)(!1);
                    return (
                        (0, r.useEffect)(
                            () => (
                                i(!0),
                                document.body.classList.add("dark"),
                                () => {
                                    document.body.classList.remove("dark");
                                }
                            ),
                            []
                        ),
                        { anim: e }
                    );
                },
                s = t(16898),
                d = (e) => {
                    var i, t, a, r, d, _, u, v, m, h, p, x, g, j, f, w, b, N, k, y, Z;
                    let { anim: C } = c(),
                        { width: B } = (0, s.Z)();
                    return (
                        null == e || e.background_color,
                        (0, l.jsxs)("section", {
                            className: "".concat(o().inner_banner, " ").concat(C && o().inview),
                            id: "".concat(null == e ? void 0 : e.widget_type).concat(null == e ? void 0 : e.id),
                            children: [
                                (0, l.jsx)("div", {
                                    className: "".concat(o().media_wrapper),
                                    children:
                                        B >= 768
                                            ? (null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : null === (i = t.image) || void 0 === i ? void 0 : i.url) &&
                                              (0, l.jsx)(n.Z, {
                                                  src: null == e ? void 0 : null === (r = e.data) || void 0 === r ? void 0 : null === (a = r.image) || void 0 === a ? void 0 : a.url,
                                                  width: 1920,
                                                  height: 450,
                                                  alt: null == e ? void 0 : null === (_ = e.data) || void 0 === _ ? void 0 : null === (d = _.image) || void 0 === d ? void 0 : d.alternative_text,
                                                  sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 160vw",
                                              })
                                            : (null == e ? void 0 : null === (v = e.data) || void 0 === v ? void 0 : null === (u = v.image) || void 0 === u ? void 0 : u.url) &&
                                              (0, l.jsx)(n.Z, {
                                                  src: (null == e ? void 0 : null === (h = e.data) || void 0 === h ? void 0 : null === (m = h.image) || void 0 === m ? void 0 : m.device_url)
                                                      ? null == e
                                                          ? void 0
                                                          : null === (x = e.data) || void 0 === x
                                                          ? void 0
                                                          : null === (p = x.image) || void 0 === p
                                                          ? void 0
                                                          : p.device_url
                                                      : null == e
                                                      ? void 0
                                                      : null === (j = e.data) || void 0 === j
                                                      ? void 0
                                                      : null === (g = j.image) || void 0 === g
                                                      ? void 0
                                                      : g.url,
                                                  width: 1920,
                                                  height: 450,
                                                  alt: null == e ? void 0 : null === (w = e.data) || void 0 === w ? void 0 : null === (f = w.image) || void 0 === f ? void 0 : f.alternative_text,
                                                  sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 160vw",
                                              }),
                                }),
                                (null == e ? void 0 : null === (b = e.data) || void 0 === b ? void 0 : b.title) &&
                                    (0, l.jsx)("div", {
                                        className: o().content_wrapper,
                                        children: (0, l.jsx)("div", {
                                            className: "container",
                                            children: (0, l.jsxs)("div", {
                                                className: "".concat(o().inner),
                                                children: [
                                                    (null == e ? void 0 : null === (N = e.data) || void 0 === N ? void 0 : N.title) &&
                                                        (0, l.jsx)("h2", { className: "ttl-80 fw-light lh-title ".concat(o().inner_title), children: null == e ? void 0 : null === (k = e.data) || void 0 === k ? void 0 : k.title }),
                                                    (null == e ? void 0 : null === (y = e.data) || void 0 === y ? void 0 : y.content) &&
                                                        (0, l.jsx)("p", { children: null == e ? void 0 : null === (Z = e.data) || void 0 === Z ? void 0 : Z.content }),
                                                ],
                                            }),
                                        }),
                                    }),
                            ],
                        })
                    );
                };
        },
        65538: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return s;
                    },
                });
            var l = t(57437),
                n = t(95843),
                a = t.n(n),
                o = t(42815),
                r = t(2265);
            let c = (e) => {
                let { style: i } = e,
                    t = (0, r.useRef)(null),
                    l = (0, r.useRef)(null);
                return (
                    (0, r.useLayoutEffect)(() => {
                        let e = o.ZP.context((e) => {
                            let n = e.selector(".".concat(i.description)),
                                a = e.selector(".".concat(i.description, " span"));
                            if ((o.ZP.timeline({ scrollTrigger: { trigger: l.current, end: "150%", scrub: 1, pin: !0, anticipatePin: !0 } }), null == t ? void 0 : t.current)) {
                                let e = o.ZP.timeline({ scrollTrigger: { trigger: t.current, start: "".concat(window.innerHeight + 400, " bottom"), end: "35% bottom", markers: !1, scrub: !0 } });
                                e.to(n, { autoAlpha: 1 });
                                let i = o.ZP.timeline({ scrollTrigger: { trigger: t.current, start: "50% bottom", end: "90% bottom", scrub: 1 } });
                                i.to(a, { color: "#fff", stagger: 0.5 }), i.to(t.current, { color: "#000", backgroundColor: "#fff" }), i.to(a, { color: "#000" }, "<");
                            }
                        }, t);
                        return () => {
                            e.kill();
                        };
                    }, []),
                    { main: t, pin: l }
                );
            };
            var s = () => {
                let { pin: e, main: i } = c({ style: a() });
                return (0, l.jsx)("div", {
                    className: "".concat(a().section),
                    ref: i,
                    children: (0, l.jsx)("div", {
                        className: "".concat(a().section_inner),
                        ref: e,
                        children: (0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsx)("div", {
                                className: "".concat(a().description),
                                children: "Since the Stone Age, technological innovations have been the driving force behind taking human civilisation to new heights. We want to be an integral part of the tech revolution that makes every interaction effortless."
                                    .split(" ")
                                    .map((e, i) => (0, l.jsxs)("span", { children: [e, " "] }, i)),
                            }),
                        }),
                    }),
                });
            };
        },
        65732: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return v;
                    },
                });
            var l = t(57437),
                n = t(12488),
                a = t(11030),
                o = t(57632),
                r = t.n(o),
                c = t(22312),
                s = t(60210),
                d = (e) => {
                    var i, t, n, o, d, _, u, v;
                    let { item: m, index: h } = e,
                        { status: p, setTrue: x } = (0, s.Z)();
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsxs)("div", {
                                className: r().video_wrapper,
                                children: [
                                    (null == m ? void 0 : m.media_type) === "image" &&
                                        (0, l.jsx)(c.Z, {
                                            src: null == m ? void 0 : null === (i = m.image) || void 0 === i ? void 0 : i.url,
                                            alt: null == m ? void 0 : null === (t = m.image) || void 0 === t ? void 0 : t.alternative_text,
                                            width: 1920,
                                            height: 450,
                                            quality: 90,
                                            priority: 0 === h,
                                        }),
                                    (null == m ? void 0 : m.media_type) === "video" &&
                                        (0, l.jsxs)(l.Fragment, {
                                            children: [
                                                !p &&
                                                    (0, l.jsx)(c.Z, {
                                                        src: null == m ? void 0 : null === (n = m.image) || void 0 === n ? void 0 : n.url,
                                                        alt: null == m ? void 0 : null === (o = m.image) || void 0 === o ? void 0 : o.alternative_text,
                                                        width: 1920,
                                                        height: 450,
                                                        quality: 90,
                                                        priority: !0,
                                                    }),
                                                (0, l.jsx)("video", {
                                                    className: r().video,
                                                    onLoadedData: () => {
                                                        x();
                                                    },
                                                    width: "100%",
                                                    height: "100%",
                                                    loop: !0,
                                                    muted: !0,
                                                    autoPlay: !0,
                                                    src: null == m ? void 0 : null === (d = m.video) || void 0 === d ? void 0 : d.url,
                                                    playsInline: !0,
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, l.jsx)("div", {
                                className: r().text_wrapper,
                                children: (0, l.jsx)("div", {
                                    className: "container",
                                    children: (0, l.jsxs)("div", {
                                        className: r().text_inner,
                                        children: [
                                            (null == m ? void 0 : m.title) &&
                                                (0, l.jsx)(l.Fragment, {
                                                    children:
                                                        0 === h
                                                            ? (0, l.jsx)("h1", { className: "".concat(r().title, " title ttl-80 lh-title fw-light text-light mb-0"), children: null == m ? void 0 : m.title })
                                                            : (0, l.jsx)("h2", { className: "".concat(r().title, " title ttl-80 lh-title fw-light text-light mb-0"), children: null == m ? void 0 : m.title }),
                                                }),
                                            (null == m ? void 0 : null === (_ = m.button) || void 0 === _ ? void 0 : _.link) &&
                                                (0, l.jsx)("div", {
                                                    className: "".concat(r().button, " button"),
                                                    children: (0, l.jsx)(a.Z, {
                                                        link: null == m ? void 0 : null === (u = m.button) || void 0 === u ? void 0 : u.link,
                                                        label: null == m ? void 0 : null === (v = m.button) || void 0 === v ? void 0 : v.label,
                                                        isLight: !0,
                                                    }),
                                                }),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    });
                },
                _ = t(2265),
                u = () => {
                    let e = (0, _.useRef)(null);
                    return (
                        (0, _.useEffect)(() => {
                            let e = (e) => {
                                let i = e.target;
                                e.dataTransfer.setDragImage(i, 11111110, 10);
                            };
                            return (
                                document.body.classList.add("dark"),
                                document.addEventListener("dragstart", e),
                                () => {
                                    document.body.classList.remove("dark"), document.removeEventListener("dragstart", e);
                                }
                            );
                        }, []),
                        {
                            handleDrag: function (i) {
                                i.clientX - window.innerWidth / 2 > 0 ? e.current.next() : e.current.prev();
                            },
                            carouselApiRef: e,
                        }
                    );
                },
                v = (e) => {
                    var i;
                    let { data: t, widget_type: a, id: o } = e;
                    null == e || e.background_color;
                    let { handleDrag: c, carouselApiRef: s } = u(),
                        _ =
                            (null == t ? void 0 : null === (i = t.banners) || void 0 === i ? void 0 : i.length) &&
                            (null == t ? void 0 : t.banners.map((e, i) => (0, l.jsx)(n.Z.Item, { onDragStart: c, draggable: !0, children: (0, l.jsx)(d, { item: e, index: i }) }, e.title)));
                    return (0, l.jsx)("section", { className: r().homeBanner, id: "".concat(a).concat(o), children: (0, l.jsx)(n.Z, { ref: s, fade: !0, interval: 3e3, children: _ }) });
                };
        },
        83173: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return _;
                    },
                });
            var l = t(57437),
                n = t(11030),
                a = t(55257),
                o = t.n(a),
                r = t(2265),
                c = t(42815),
                s = t(42716);
            c.p8.registerPlugin(s.i);
            var d = () => {
                    let e = (0, r.useRef)();
                    return (
                        (0, r.useEffect)(() => {
                            let i = c.p8.context((i) => {
                                let t = c.p8.timeline({ scrollTrigger: { trigger: e.current, start: "top top", end: "bottom 30%", scrub: 0.8 } });
                                t.to(i.selector(".container"), { opacity: 0 }),
                                    setTimeout(() => t.scrollTrigger.refresh(), 200),
                                    window.addEventListener("resize", () => {
                                        var e;
                                        return null === (e = t.scrollTrigger) || void 0 === e ? void 0 : e.refresh();
                                    });
                            }, e);
                            return () => {
                                i.revert();
                            };
                        }, [e]),
                        { mainRef: e }
                    );
                },
                _ = (e) => {
                    var i, t, a;
                    let { data: r, widget_type: c } = e,
                        { mainRef: s } = d();
                    return (0, l.jsx)("section", {
                        className: "".concat(o().section),
                        id: c,
                        ref: s,
                        children: (0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsxs)("div", {
                                className: "".concat(o().inner),
                                children: [
                                    (0, l.jsx)("div", {
                                        className: o().video_wrapper,
                                        children: (0, l.jsx)("div", {
                                            className: o().video,
                                            children: (0, l.jsx)("video", { width: "100%", height: "100%", loop: !0, muted: !0, autoPlay: !0, playsInline: !0, children: (0, l.jsx)("source", { src: "video/arrow.mp4", type: "video/mp4" }) }),
                                        }),
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: "col-lg-6",
                                                children: (0, l.jsxs)("div", {
                                                    className: "".concat(o().content),
                                                    children: [
                                                        (null == r ? void 0 : r.title) && (0, l.jsx)("h3", { className: "".concat(o().title, " ttl-80 fw-light"), children: null == r ? void 0 : r.title }),
                                                        (null == r ? void 0 : r.description) && (0, l.jsx)("p", { className: "".concat(o().description, " fs-24 fw-light"), children: null == r ? void 0 : r.description }),
                                                        (0, l.jsx)("div", {
                                                            className: "".concat(o().btn_wrapper),
                                                            children: (0, l.jsx)(n.Z, {
                                                                link: null == r ? void 0 : null === (i = r.button) || void 0 === i ? void 0 : i.link,
                                                                label: null == r ? void 0 : null === (t = r.button) || void 0 === t ? void 0 : t.label,
                                                                isLight: !0,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            (0, l.jsx)("div", {
                                                className: "col-lg-6",
                                                children: (0, l.jsx)("ul", {
                                                    className: "".concat(o().detail_wrapper),
                                                    children:
                                                        (null == r ? void 0 : null === (a = r.details) || void 0 === a ? void 0 : a.length) !== 0 &&
                                                        (null == r
                                                            ? void 0
                                                            : r.details.map((e) =>
                                                                  (0, l.jsxs)(
                                                                      "li",
                                                                      {
                                                                          className: "".concat(o().detail_item),
                                                                          children: [
                                                                              (null == e ? void 0 : e.count) && (0, l.jsx)("h4", { className: "".concat(o().number, " ttl-80 fw-light"), children: null == e ? void 0 : e.count }),
                                                                              (null == e ? void 0 : e.description) && (0, l.jsx)("p", { className: "".concat(o().short_description), children: null == e ? void 0 : e.description }),
                                                                          ],
                                                                      },
                                                                      null == e ? void 0 : e.count
                                                                  )
                                                              )),
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
        9433: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return p;
                    },
                });
            var l = t(57437),
                n = t(88526),
                a = t.n(n),
                o = t(16010),
                r = t(99321),
                c = (e) => {
                    let { item: i } = e,
                        { title: t, image: n, link: c } = i;
                    return (
                        c &&
                        (0, l.jsxs)(o.Z, {
                            href: c,
                            className: a().card,
                            children: [
                                (0, l.jsx)("div", { className: "".concat(a().card_img, " ratio"), children: (0, l.jsx)(r.Z, { fill: !0, src: null == n ? void 0 : n.url, alt: null == n ? void 0 : n.alternative_text }) }),
                                t && (0, l.jsx)("div", { className: a().card_info, children: (0, l.jsx)("h3", { className: "mb-0 ttl-24", children: t }) }),
                            ],
                        })
                    );
                },
                s = t(32440),
                d = t.n(s),
                _ = t(69862),
                u = t(2145);
            t(30846);
            var v = t(72022),
                m = t(11030),
                h = t(39646),
                p = (e) => {
                    let { data: i, background_color: t, widget_type: n, id: a } = e,
                        { title: o, industry_data: r, button: s } = i,
                        p = (0, h.Z)(n, a),
                        x = {
                            spaceBetween: 57,
                            slidesPerView: 1.35,
                            scrollbar: { hide: !1, draggable: !0 },
                            modules: [v.LW],
                            breakpoints: { 0: { spaceBetween: 9, slidesPerView: 1.2 }, 768: { spaceBetween: 20, slidesPerView: 2.5 }, 992: { spaceBetween: 30, slidesPerView: 4 }, 1500: { spaceBetween: 54, slidesPerView: 4 } },
                        },
                        g = r && 0 !== r.length && r.map((e) => (0, l.jsx)(u.o5, { children: (0, l.jsx)(c, { item: e }) }, null == e ? void 0 : e.title));
                    return (0, l.jsx)("section", {
                        className: d().section,
                        id: n,
                        ref: p,
                        children: (0, l.jsxs)("div", {
                            className: "container",
                            children: [
                                o && (0, l.jsx)("h2", { className: "ttl-80 fw-regular mb-lg-6 ".concat(d().title), children: o }),
                                (0, l.jsx)("div", { className: d().slider, children: (0, l.jsx)(_.Z, { customSettings: x, children: g }) }),
                                (null == s ? void 0 : s.link) &&
                                    (0, l.jsx)("div", { className: "".concat(d().btn_wrap, " text-center"), children: (0, l.jsx)(m.Z, { label: null == s ? void 0 : s.label, link: null == s ? void 0 : s.link }) }),
                            ],
                        }),
                    });
                };
        },
        73498: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return w;
                    },
                });
            var l = t(57437),
                n = t(98864),
                a = t.n(n),
                o = t(23450),
                r = t.n(o),
                c = t(99321),
                s = t(67224);
            let d = (e) => (1 === e.length ? "0".concat(e) : e);
            var _ = t(2265);
            t(24033);
            var u = t(60210),
                v = t(96681);
            let m = (e) => {
                    let { slug: i } = e,
                        { status: t, setFalse: l, setTrue: n } = (0, u.Z)(),
                        a = (0, v.LZ)();
                    return (
                        (0, _.useEffect)(
                            () => (
                                t &&
                                    setTimeout(() => {
                                        null == a || a.stop();
                                    }, 200),
                                () => {
                                    null == a || a.start();
                                }
                            ),
                            [t]
                        ),
                        {
                            handleClick: () => {
                                n();
                            },
                            isOffcanvasOpen: t,
                            handleClose: () => {
                                l();
                            },
                        }
                    );
                },
                h = a()(() => t.e(5633).then(t.bind(t, 11546)), { loadableGenerated: { webpack: () => [11546] } });
            var p = (e) => {
                    let { title: i, work_count: t, image: n, slug: a } = e,
                        { handleClick: o, handleClose: _, isOffcanvasOpen: u } = m({ slug: a });
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsxs)("button", {
                                onClick: o,
                                className: r().btn_wrapper,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: "".concat(r().btn_text_inner),
                                        children: [
                                            i &&
                                                (0, l.jsxs)("h2", {
                                                    className: "".concat(r().title, " fs-4sp mb-0 fw-regular"),
                                                    children: [0 !== t && (0, l.jsxs)("span", { className: r().counter_number, children: ["(", d("".concat(t)), ")"] }), i],
                                                }),
                                            (0, l.jsx)("div", { className: "".concat(r().icon, " d-none d-lg-block"), children: (0, l.jsx)(s.Z, { icon: "arrow-right", size: 32 }) }),
                                            (0, l.jsx)("div", { className: "".concat(r().icon, "  d-lg-none"), children: (0, l.jsx)(s.Z, { icon: "arrow-down", size: 20 }) }),
                                        ],
                                    }),
                                    (0, l.jsx)("div", {
                                        className: "".concat(r().image_wrapper),
                                        children: (0, l.jsx)("div", { className: "".concat(r().image_container), children: (null == n ? void 0 : n.url) && (0, l.jsx)(c.Z, { src: n.url, fill: !0, alt: n.alternative_text, priority: !0 }) }),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(h, { title: i, show: u, handleClose: _, slug: a }),
                        ],
                    });
                },
                x = t(51378),
                g = t.n(x),
                j = t(29211);
            t(61396);
            var f = t(39646),
                w = (e) => {
                    var i, t, n, a, o, r, c, s, d;
                    null == e || e.background_color;
                    let _ = (0, f.Z)(null == e ? void 0 : e.widget_type, null == e ? void 0 : e.id);
                    return (0, l.jsx)("section", {
                        className: g().wrapper,
                        id: "".concat(null == e ? void 0 : e.widget_type).concat(null == e ? void 0 : e.id),
                        ref: _,
                        children: (0, l.jsxs)("div", {
                            className: "container",
                            children: [
                                (null == e ? void 0 : null === (i = e.data) || void 0 === i ? void 0 : i.title) &&
                                    (0, l.jsx)("h2", { className: "ttl-80 mb-2 mb-lg-6 fw-regular ".concat(g().title), children: null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.title }),
                                (0, l.jsx)("div", { className: g().inner, children: (null == e ? void 0 : null === (n = e.data) || void 0 === n ? void 0 : n.industries) && e.data.industries.map((e) => (0, l.jsx)(p, { ...e }, e.title)) }),
                                (null == e ? void 0 : null === (o = e.data) || void 0 === o ? void 0 : null === (a = o.button) || void 0 === a ? void 0 : a.link) &&
                                    (0, l.jsx)("div", {
                                        className: "".concat(g().action_wrapper),
                                        children: (0, l.jsx)(j.Z, {
                                            label: null == e ? void 0 : null === (c = e.data) || void 0 === c ? void 0 : null === (r = c.button) || void 0 === r ? void 0 : r.label,
                                            link: null == e ? void 0 : null === (d = e.data) || void 0 === d ? void 0 : null === (s = d.button) || void 0 === s ? void 0 : s.link,
                                        }),
                                    }),
                            ],
                        }),
                    });
                };
        },
        46881: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return s;
                    },
                });
            var l = t(57437),
                n = t(2265),
                a = t(68220),
                o = t.n(a),
                r = t(22312),
                c = (e) => {
                    let { style: i, gridItem: t, blockIndex: a, activeBlockId: o } = e,
                        [c, s] = (0, n.useState)(0),
                        d = t.length;
                    return (
                        (0, n.useEffect)(() => {
                            a === o && s((e) => (e !== d - 1 ? e + 1 : 0));
                        }, [o, a, d]),
                        (0, l.jsx)("div", {
                            className: "".concat(i.grid_item_img, " ratio "),
                            children:
                                (null == t ? void 0 : t.length) !== 0 &&
                                (null == t
                                    ? void 0
                                    : t.map((e, t) =>
                                          (0, l.jsx)(
                                              "div",
                                              { className: "".concat(i.item, " ").concat(c === t ? i.active : ""), children: (0, l.jsx)(r.Z, { src: null == e ? void 0 : e.url, fill: !0, alt: null == e ? void 0 : e.alternative_text }) },
                                              null == e ? void 0 : e.alternative_text
                                          )
                                      )),
                        })
                    );
                },
                s = (e) => {
                    var i, t;
                    let { data: a, widget_type: r, id: s } = e,
                        _ = Array.from({ length: (null == a ? void 0 : null === (i = a.images) || void 0 === i ? void 0 : i.length) - 1 + 1 }, (e, i) => i),
                        [u, v] = (0, n.useState)(_),
                        m = d(0 == u.length ? [..._] : [...u]);
                    return (
                        (0, n.useEffect)(() => {
                            let e = setInterval(() => {
                                v((e) => (0 === e.length ? _ : [...e.filter((e) => e !== m)]));
                            }, 3e3);
                            return () => clearInterval(e);
                        }, [m]),
                        (0, l.jsxs)("section", {
                            className: o().section,
                            id: "".concat(r).concat(s),
                            children: [
                                (0, l.jsx)("div", {
                                    className: "container",
                                    children: (0, l.jsxs)("div", {
                                        className: "  text-lg-center ".concat(o().title_wrap),
                                        children: [
                                            (null == a ? void 0 : a.title) && (0, l.jsx)("h2", { className: "ttl-80 mb-2 mb-lg-4 fw-regular", children: null == a ? void 0 : a.title }),
                                            (null == a ? void 0 : a.description) && (0, l.jsx)("p", { className: "ttl-24 mb-0", children: null == a ? void 0 : a.description }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "container ".concat(o().container),
                                    children: (0, l.jsx)("div", {
                                        className: o().grid_wrap,
                                        children: (0, l.jsx)("div", {
                                            className: o().grid,
                                            children:
                                                null == a
                                                    ? void 0
                                                    : null === (t = a.images) || void 0 === t
                                                    ? void 0
                                                    : t.map((e, i) => (0, l.jsx)("div", { className: o().grid_item, children: (0, l.jsx)(c, { style: o(), gridItem: e, activeBlockId: m, blockIndex: i, mainarrayLength: _.length }) }, i)),
                                        }),
                                    }),
                                }),
                            ],
                        })
                    );
                };
            let d = (e) => e[Math.floor(Math.random() * e.length)];
        },
        66888: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return j;
                    },
                });
            var l = t(57437);
            t(99321);
            var n = t(12488);
            t(67224);
            var a = t(49811),
                o = t.n(a);
            t(69023);
            var r = t(42815),
                c = t(42716),
                s = t(24033),
                d = t(2265);
            r.p8.registerPlugin(c.i);
            var _ = (e) => {
                let { style: i } = e,
                    t = (0, d.useRef)(null),
                    l = (0, s.useRouter)(),
                    n = (0, d.useRef)(),
                    a = (0, d.useRef)(),
                    o = (0, d.useRef)();
                return (
                    (0, d.useEffect)(() => {
                        let e = (e) => {
                            let i = e.target;
                            e.dataTransfer.setDragImage(i, 11111110, 10);
                        };
                        document.body.classList.add("dark"), document.addEventListener("dragstart", e);
                        let t = r.p8.context((e) => {
                            let t = e.selector(".".concat(i.start));
                            c.i.matchMedia({
                                "(min-width: 992px)": function () {
                                    let e = r.p8.timeline({ scrollTrigger: { trigger: a.current, start: "130% bottom", end: "170% bottom", scrub: 1.1 } });
                                    e.to(t, { opacity: 0 });
                                },
                                "(max-width: 991.98px)": function () {
                                    let e = r.p8.timeline({ scrollTrigger: { trigger: a.current, start: "180% bottom", end: "200% bottom", scrub: 1.1 } });
                                    e.to(t, { opacity: 0 });
                                },
                            });
                        }, a);
                        return () => {
                            document.body.classList.remove("dark"), document.removeEventListener("dragstart", e), t.revert();
                        };
                    }, []),
                    (0, d.useEffect)(() => {
                        let e = r.p8.context((e) => {
                            r.p8.set(n.current, { xPercent: -50, yPercent: -50 });
                            let i = { x: window.innerWidth / 2, y: window.innerHeight / 2 },
                                t = { x: i.x, y: i.y },
                                l = r.p8.quickSetter(n.current, "x", "px"),
                                a = r.p8.quickSetter(n.current, "y", "px");
                            window.addEventListener("mousemove", (e) => {
                                e.pageX > 30 && e.pageX < window.innerWidth - 40 && (t.x = e.pageX), (t.y = e.pageY);
                            }),
                                document.querySelector(".carousel-control-prev"),
                                document.querySelector(".carousel-control-next"),
                                r.p8.ticker.add(() => {
                                    let e = 1 - Math.pow(0.92, r.p8.ticker.deltaRatio());
                                    (i.x += (t.x - i.x) * e), (i.y += (t.y - i.y) * e), l(i.x), a(i.y);
                                });
                        }, n);
                        return () => {
                            e.revert();
                        };
                    }, []),
                    {
                        handleRight: () => {
                            var e;
                            null == t || null === (e = t.current) || void 0 === e || e.prev();
                        },
                        handleLeft: () => {
                            var e;
                            null == t || null === (e = t.current) || void 0 === e || e.next();
                        },
                        handleDrag: function (e) {
                            e.clientX - window.innerWidth / 2 > 0 ? t.current.next() : t.current.prev();
                        },
                        carouselApiRef: t,
                        handleClick: (e) => {
                            localStorage.setItem("from-home", "true"),
                                window && window.scrollY < 10
                                    ? l.push(e)
                                    : (window.scrollTo(0, 0),
                                      setTimeout(() => {
                                          l.push(e);
                                      }, 800));
                        },
                        mouseRef: n,
                        mouseRefArrow: o,
                        mouseEnter: (e) => {
                            r.p8.to(o.current, { x: "next" === e ? 0 : "-50%" }), r.p8.to(n.current, { scale: 1, opacity: 1, duration: 0.6 });
                        },
                        mouseLeave: (e) => {
                            r.p8.to(n.current, { scale: 0.7, opacity: 0, duration: 0.6 });
                        },
                        mouseEnterDown: (e) => {
                            r.p8.to(n.current, { scale: 0.9, duration: 0.18 });
                        },
                        mouseEnterUp: (e) => {
                            r.p8.to(n.current, { scale: 1, duration: 0.18 });
                        },
                        main: a,
                    }
                );
            };
            t(16010);
            var u = t(22312),
                v = t(62075),
                m = t(25110);
            t(11030);
            var h = t(61396),
                p = t.n(h),
                x = t(16898),
                g = (e) => {
                    var i, t, n, a, o, r, c, _, h, g, j, f, w, b;
                    let N,
                        { item: k, style: y, handleClick: Z, index: C } = e,
                        B = (0, s.useRouter)(),
                        S = null == k ? void 0 : null === (i = k.button) || void 0 === i ? void 0 : i.link,
                        { isDesktop: I, width: L } = (0, x.Z)();
                    return (
                        (0, d.useEffect)(() => {
                            S && B.prefetch(S);
                        }, [S]),
                        (N =
                            L >= 768
                                ? (null == k ? void 0 : k.stream_url)
                                    ? (0, l.jsx)(m.Z, { dataimage: null == k ? void 0 : null === (r = k.image) || void 0 === r ? void 0 : r.url, loop: !0, muted: !0, autoPlay: !0, playsInline: !0, src: null == k ? void 0 : k.stream_url })
                                    : (null == k ? void 0 : null === (o = k.video) || void 0 === o ? void 0 : o.url)
                                    ? (0, l.jsx)("video", { width: "100%", height: "100%", loop: !0, muted: !0, autoPlay: !0, src: null == k ? void 0 : null === (c = k.video) || void 0 === c ? void 0 : c.url, playsInline: !0 })
                                    : (0, l.jsx)(u.Z, {
                                          src: null == k ? void 0 : null === (_ = k.image) || void 0 === _ ? void 0 : _.url,
                                          alt: null == k ? void 0 : null === (h = k.image) || void 0 === h ? void 0 : h.alternative_text,
                                          fill: !0,
                                          "object-fit": "cover",
                                          priority: 0 === C,
                                      })
                                : (null == k ? void 0 : k.mobile_stream_url)
                                ? (0, l.jsx)(m.Z, {
                                      dataimage: null == k ? void 0 : null === (j = k.image) || void 0 === j ? void 0 : j.url,
                                      loop: !0,
                                      muted: !0,
                                      autoPlay: !0,
                                      playsInline: !0,
                                      src: null == k ? void 0 : k.mobile_stream_url,
                                  })
                                : (null == k ? void 0 : null === (g = k.video) || void 0 === g ? void 0 : g.url)
                                ? (0, l.jsx)("video", { width: "100%", height: "100%", loop: !0, muted: !0, autoPlay: !0, src: null == k ? void 0 : null === (f = k.video) || void 0 === f ? void 0 : f.url, playsInline: !0 })
                                : (0, l.jsx)(u.Z, {
                                      src: null == k ? void 0 : null === (w = k.image) || void 0 === w ? void 0 : w.url,
                                      alt: null == k ? void 0 : null === (b = k.image) || void 0 === b ? void 0 : b.alternative_text,
                                      fill: !0,
                                      "object-fit": "cover",
                                      priority: 0 === C,
                                  })),
                        (0, l.jsxs)("div", {
                            className: y.banner_child,
                            children: [
                                (0, l.jsx)("div", { className: "".concat(y.banner_image), children: N }),
                                (0, l.jsx)("div", {
                                    className: "".concat(y.banner_inner, " ").concat(y.full),
                                    children: (0, l.jsx)("div", {
                                        className: "container",
                                        children: (0, l.jsxs)("div", {
                                            className: "".concat(y.content),
                                            children: [
                                                (null == k ? void 0 : k.title) && (0, l.jsx)("h1", { className: "".concat(y.title, " ").concat(y.anim, "  ttl-80 fw-light"), children: null == k ? void 0 : k.title }),
                                                (null == k ? void 0 : k.industryTitle) && (0, l.jsx)("h5", { className: "".concat(y.sub_title, " ").concat(y.anim, " fw-regular"), children: null == k ? void 0 : k.industryTitle }),
                                                (null == k ? void 0 : null === (t = k.button) || void 0 === t ? void 0 : t.link) &&
                                                    (0, l.jsxs)(p(), {
                                                        href: null == k ? void 0 : null === (n = k.button) || void 0 === n ? void 0 : n.link,
                                                        className: y.navigate_btn,
                                                        children: [
                                                            (0, l.jsx)("span", { children: null == k ? void 0 : null === (a = k.button) || void 0 === a ? void 0 : a.label }),
                                                            (0, l.jsx)("span", { children: (0, l.jsx)(v.Z, { icon: "arrow-right", size: 16, color: "#fff" }) }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                    }),
                                }),
                            ],
                        })
                    );
                },
                j = (e) => {
                    var i, t;
                    let { data: a, widget_type: r, id: c } = e,
                        { main: s, mouseRef: d, mouseRefArrow: u, handleRight: v, handleLeft: m, handleDrag: h, carouselApiRef: p, handleClick: x, mouseEnter: j, mouseEnterDown: f, mouseEnterUp: w, mouseLeave: b } = _({ style: o() });
                    return (0, l.jsxs)("section", {
                        className: o().section,
                        id: "".concat(r).concat(c),
                        ref: s,
                        children: [
                            (0, l.jsx)(n.Z, {
                                ref: p,
                                fade: !0,
                                interval: 1e4,
                                className: "".concat(o().start),
                                indicators: (null == a ? void 0 : null === (i = a.slider_data) || void 0 === i ? void 0 : i.length) > 1,
                                children:
                                    null == a
                                        ? void 0
                                        : null === (t = a.slider_data) || void 0 === t
                                        ? void 0
                                        : t.map((e, i) => (0, l.jsx)(n.Z.Item, { draggable: !0, onDragStart: h, children: (0, l.jsx)(g, { item: e, index: i, style: o(), handleDrag: h, handleClick: x }) }, i)),
                            }),
                            (0, l.jsx)("button", { onClick: v, onMouseEnter: () => j("prev"), onMouseLeave: () => b(), onMouseDown: () => f, onMouseUp: () => w(), className: "carousel-next", children: "Left" }),
                            (0, l.jsx)("button", { onClick: m, onMouseEnter: () => j("next"), onMouseLeave: () => b(), onMouseDown: () => f, onMouseUp: () => w(), className: "carousel-prev", children: "Right" }),
                            (0, l.jsx)("div", {
                                className: o().mouseMove,
                                ref: d,
                                children: (0, l.jsx)("div", {
                                    className: o().arrow_wrapper,
                                    children: (0, l.jsxs)("div", { className: "".concat(o().arrow_wrapper_inner), ref: u, children: [(0, l.jsx)("div", { className: o().arrow_left }), (0, l.jsx)("div", { className: o().arrow_right })] }),
                                }),
                            }),
                        ],
                    });
                };
        },
        51921: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return h;
                    },
                });
            var l = t(57437),
                n = t(83244),
                a = t.n(n),
                o = t(62075),
                r = t(22312),
                c = t(16010),
                s = (e) => {
                    var i, t, n, a, s, d, _, u, v, m;
                    let { style: h, card: p, refs: x, index: g } = e,
                        j =
                            (null == p ? void 0 : p.child_services.length) !== 0 &&
                            (null == p
                                ? void 0
                                : p.child_services.map((e) =>
                                      (0, l.jsxs)(
                                          "span",
                                          {
                                              className: h.link_item,
                                              children: [
                                                  (0, l.jsx)(c.Z, { href: null == e ? void 0 : e.link, className: "".concat(h.link, " "), children: (0, l.jsxs)("span", { children: [null == e ? void 0 : e.label, " "] }) }),
                                                  (0, l.jsx)("span", { className: "d-none d-md-inline-block ".concat(h.link_slash), children: "/" }),
                                                  (0, l.jsx)("span", { className: "".concat(h.link_arrow, " d-inline-block d-md-none"), children: (0, l.jsx)(o.Z, { icon: "arrow-down", size: 15 }) }),
                                              ],
                                          },
                                          null == e ? void 0 : e.label
                                      )
                                  ));
                    return (0, l.jsx)("div", {
                        className: "".concat(h.service_listing_card, " image_anim"),
                        children: (0, l.jsxs)("div", {
                            className: "".concat(h.service_inner, " row"),
                            children: [
                                (0, l.jsxs)("div", {
                                    className: "".concat(h.service_text, " col-12 col-lg-6"),
                                    children: [
                                        (null == p ? void 0 : p.title) && (0, l.jsx)("h2", { className: "".concat(h.title, " ttl-80 lh-title mb-1 mb-md-2 mb-l  g-5 fw-light"), children: null == p ? void 0 : p.title }),
                                        (0, l.jsxs)("h6", {
                                            className: "".concat(h.link_list, " ttl-28 fw-light lh-title-2 mb-3"),
                                            children: [
                                                (null == p ? void 0 : null === (i = p.button) || void 0 === i ? void 0 : i.link) &&
                                                    (0, l.jsx)("span", {
                                                        className: "d-md-none",
                                                        children: (0, l.jsxs)("span", {
                                                            className: h.link_item,
                                                            children: [
                                                                (0, l.jsx)(c.Z, {
                                                                    href: null == p ? void 0 : null === (t = p.button) || void 0 === t ? void 0 : t.link,
                                                                    className: "".concat(h.link, " "),
                                                                    children: (0, l.jsx)("span", { children: "Overview " }),
                                                                }),
                                                                (0, l.jsx)("span", { className: "d-none d-md-inline-block", children: "/" }),
                                                                (0, l.jsx)("span", { className: "".concat(h.link_arrow, " d-inline-block d-md-none"), children: (0, l.jsx)(o.Z, { icon: "arrow-down", size: 15 }) }),
                                                            ],
                                                        }),
                                                    }),
                                                (0, l.jsx)("span", { children: j }),
                                            ],
                                        }),
                                        (null == p ? void 0 : null === (n = p.button) || void 0 === n ? void 0 : n.link) &&
                                            (0, l.jsx)("div", {
                                                className: "".concat(h.action, " d-none d-md-block"),
                                                children: (0, l.jsxs)(c.Z, {
                                                    href: null == p ? void 0 : null === (a = p.button) || void 0 === a ? void 0 : a.link,
                                                    className: "btn btn-secondary  fw-medium",
                                                    children: [
                                                        (0, l.jsx)("span", { children: null == p ? void 0 : null === (s = p.button) || void 0 === s ? void 0 : s.label }),
                                                        (0, l.jsx)("span", { children: (0, l.jsx)(o.Z, { icon: "arrow-right", size: 12 }) }),
                                                    ],
                                                }),
                                            }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: "".concat(h.image, " col-12 col-lg-6 mb-4 mb-lg-0"),
                                    children: (0, l.jsxs)("div", {
                                        className: "".concat(h.image_wrapper),
                                        children: [
                                            0 === g && (0, l.jsx)("div", { className: h.image_rotate, children: (0, l.jsx)(r.Z, { src: "/image/services.png", alt: "service rotating", width: 163, height: 163 }) }),
                                            (0, l.jsxs)("div", {
                                                className: h.media_wrapper,
                                                children: [
                                                    (null == p ? void 0 : null === (d = p.image) || void 0 === d ? void 0 : d.url) &&
                                                        (0, l.jsx)(r.Z, {
                                                            src: null == p ? void 0 : null === (_ = p.image) || void 0 === _ ? void 0 : _.url,
                                                            fill: !0,
                                                            alt: null == p ? void 0 : null === (u = p.image) || void 0 === u ? void 0 : u.alternative_text,
                                                        }),
                                                    (null == p ? void 0 : null === (v = p.video) || void 0 === v ? void 0 : v.url) &&
                                                        (0, l.jsx)("video", {
                                                            width: "100%",
                                                            height: "100%",
                                                            loop: !0,
                                                            muted: !0,
                                                            autoPlay: !0,
                                                            playsInline: !0,
                                                            children: (0, l.jsx)("source", { src: null == p ? void 0 : null === (m = p.video) || void 0 === m ? void 0 : m.url, type: "video/mp4" }),
                                                        }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                d = t(2265),
                _ = t(42815),
                u = t(42716),
                v = t(16898),
                m = () => {
                    _.p8.registerPlugin(u.i);
                    let { isDesktop: e } = (0, v.Z)(),
                        i = (0, d.useRef)(null);
                    return (
                        (0, d.useLayoutEffect)(() => {
                            let t = _.p8.context((i) => {
                                if (e) {
                                    let e = i.selector(".".concat(a().image_wrapper))[0],
                                        t = i.selector(".".concat(a().image_rotate))[0],
                                        l = _.p8.timeline({ scrollTrigger: { trigger: document.body, start: "top top", end: "top+=16% top", scrub: 0.2 } });
                                    l.to(e, { transform: "translateY(50%)" }), l.to(t, { opacity: 0 }, "-=.8");
                                }
                            }, i);
                            return () => {
                                t.revert();
                            };
                        }, [e]),
                        { main: i }
                    );
                },
                h = (e) => {
                    var i, t;
                    let { main: n } = m();
                    null == e || e.background_color;
                    let o =
                        (null == e ? void 0 : null === (i = e.data) || void 0 === i ? void 0 : i.services.length) !== 0 &&
                        (null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.services.map((e, i) => (0, l.jsx)(s, { style: a(), card: e, index: i }, e.title)));
                    return (0, l.jsx)("section", { className: "".concat(a().service_listing, " w-100 services"), id: null == e ? void 0 : e.widget_type, ref: n, children: (0, l.jsx)("div", { className: "container", children: o }) });
                };
        },
        39228: function (e, i, t) {
            "use strict";
            t.r(i);
            var l = t(57437),
                n = t(62943),
                a = t(30342),
                o = t.n(a);
            i.default = (e) => {
                let { data: i, background_color: t, widget_type: a } = e;
                return (0, l.jsx)("section", {
                    className: "".concat(o().process_wrapper),
                    id: a,
                    children: (0, l.jsxs)("div", {
                        className: "container",
                        children: [
                            (null == i ? void 0 : i.title) && (0, l.jsx)("div", { className: "".concat(o().heading), children: (0, l.jsx)("h3", { className: "ttl-80 fw-regular mb-0", children: null == i ? void 0 : i.title }) }),
                            (0, l.jsx)("div", {
                                className: "".concat(o().accordion_main),
                                children: (0, l.jsx)(n.Z, {
                                    className: "".concat(o().accordion),
                                    alwaysOpen: !0,
                                    children:
                                        (null == i ? void 0 : i.processLists.length) !== 0 &&
                                        (null == i
                                            ? void 0
                                            : i.processLists.map((e, i) =>
                                                  (0, l.jsxs)(
                                                      n.Z.Item,
                                                      {
                                                          eventKey: null == e ? void 0 : e.title,
                                                          className: "".concat(o().accordion_wrapper),
                                                          children: [
                                                              (0, l.jsxs)(n.Z.Header, {
                                                                  as: "div",
                                                                  className: "".concat(o().accordion_header),
                                                                  children: [
                                                                      (0, l.jsxs)("div", {
                                                                          className: "".concat(o().title_wrapper),
                                                                          children: [
                                                                              (null == e ? void 0 : e.title) &&
                                                                                  (0, l.jsx)("h3", { className: "".concat(o().title, " ttl-28 fw-medium mb-0"), children: "".concat(i + 1, ". ").concat(null == e ? void 0 : e.title) }),
                                                                              (null == e ? void 0 : e.description) && (0, l.jsx)("p", { className: "".concat(o().sub_title, " mb-0"), children: e.description.substring(0, 100) }),
                                                                          ],
                                                                      }),
                                                                      (0, l.jsx)("span", { className: "".concat(o().icon, " icon") }),
                                                                  ],
                                                              }),
                                                              (0, l.jsx)(n.Z.Body, { className: "".concat(o().accordion_body), children: e.description && (0, l.jsx)("p", { className: "lh-primary mb-0", children: e.description }) }),
                                                          ],
                                                      },
                                                      null == e ? void 0 : e.title
                                                  )
                                              )),
                                }),
                            }),
                        ],
                    }),
                });
            };
        },
        9866: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return h;
                    },
                });
            var l = t(57437),
                n = t(62075),
                a = t(16010),
                o = t(2265),
                r = t(30713),
                c = t(18893),
                s = () => {
                    let [e, i] = (0, o.useState)(0),
                        [t, l] = (0, o.useState)([]),
                        { data: n, isLoading: a, error: s } = (0, r.ZP)("".concat("https://admin.wac.co").concat(c.kp, "?offset=").concat(e, "&limit=").concat(3), {
                            onSuccess: (i) => {
                                if (i) {
                                    let t = null == i ? void 0 : i.awards;
                                    0 === e ? l([...t]) : l((e) => [...e, ...t]);
                                }
                            },
                            onError: (e) => {},
                        }),
                        d = (null == n ? void 0 : n.total_count) === t.length;
                    return {
                        awardsData: t,
                        isLoading: a,
                        error: s,
                        handleLoadMore: () => {
                            i((e) => e + 3);
                        },
                        isReachedEnd: d,
                    };
                },
                d = t(16922),
                _ = t.n(d),
                u = t(90290),
                v = t(22312),
                m = (e) => {
                    var i, t;
                    let { style: n, item: a } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)("div", {
                                className: "".concat(n.awards_image, " mb-2 mb-lg-0 col-12 col-lg-5"),
                                children: (0, l.jsx)("div", {
                                    className: "".concat(n.image_wrapper),
                                    children: (0, l.jsx)(v.Z, {
                                        src: null == a ? void 0 : null === (i = a.image) || void 0 === i ? void 0 : i.url,
                                        fill: !0,
                                        alt: null == a ? void 0 : null === (t = a.image) || void 0 === t ? void 0 : t.alternative_text,
                                    }),
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: "col-12 col-lg-7",
                                children: (0, l.jsxs)("article", {
                                    className: "".concat(n.awards_content),
                                    children: [
                                        (0, l.jsxs)("ul", {
                                            className: "".concat(n.website_and_date, " mb-2"),
                                            children: [
                                                (null == a ? void 0 : a.media_name) && (0, l.jsx)("li", { className: "".concat(n.website), children: null == a ? void 0 : a.media_name }),
                                                (null == a ? void 0 : a.date) && (0, l.jsx)("li", { className: "".concat(n.date), children: null == a ? void 0 : a.date }),
                                            ],
                                        }),
                                        (null == a ? void 0 : a.title) && (0, l.jsx)("h5", { className: "".concat(n.title, " ttl-28"), children: null == a ? void 0 : a.title }),
                                        (null == a ? void 0 : a.description) && (0, l.jsx)(u.Z, { content: null == a ? void 0 : a.description, className: "lh-primary mb-0", as: "p" }),
                                    ],
                                }),
                            }),
                        ],
                    });
                },
                h = (e) => {
                    let { data: i, widget_type: t, id: o } = e,
                        { awardsData: r, isLoading: c, error: d, handleLoadMore: u, isReachedEnd: v } = s();
                    return d
                        ? null
                        : (0, l.jsx)("section", {
                              className: _().awards_list,
                              id: "".concat(t).concat(o),
                              children: (0, l.jsxs)("div", {
                                  className: "container",
                                  children: [
                                      null == r
                                          ? void 0
                                          : r.map((e, i) =>
                                                (0, l.jsx)(
                                                    "div",
                                                    {
                                                        className: "".concat(_().awards_list_items),
                                                        children: (null == e ? void 0 : e.media_link)
                                                            ? (0, l.jsx)(l.Fragment, {
                                                                  children: (0, l.jsx)("a", {
                                                                      href: null == e ? void 0 : e.media_link,
                                                                      className: "".concat(_().awards_list_inner, " row"),
                                                                      target: "_blank",
                                                                      children: (0, l.jsx)(m, { style: _(), item: e }),
                                                                  }),
                                                              })
                                                            : (0, l.jsx)(l.Fragment, {
                                                                  children: (0, l.jsx)(a.Z, { href: null == e ? void 0 : e.media_link, className: "".concat(_().awards_list_inner, " row"), children: (0, l.jsx)(m, { style: _(), item: e }) }),
                                                              }),
                                                    },
                                                    i
                                                )
                                            ),
                                      !v &&
                                          !c &&
                                          (0, l.jsx)("div", {
                                              className: _().read_more,
                                              children: (0, l.jsxs)("button", {
                                                  className: "btn btn-primary",
                                                  onClick: u,
                                                  children: [(0, l.jsx)("span", { children: "Load more" }), (0, l.jsx)("span", { children: (0, l.jsx)(n.Z, { icon: "arrow-right", size: "16" }) })],
                                              }),
                                          }),
                                  ],
                              }),
                          });
                };
        },
        30192: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return v;
                    },
                });
            var l = t(57437),
                n = t(2265),
                a = t(60210),
                o = t(42815),
                r = t(42716),
                c = t(16898);
            o.p8.registerPlugin(r.i);
            var s = (e) => {
                    let { style: i } = e,
                        { isDesktop: t } = (0, c.Z)(),
                        { status: l, setTrue: r } = (0, a.Z)(),
                        s = (0, n.useRef)(null),
                        d = (0, n.useRef)(null);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            let e = o.p8.context((e) => {
                                if (t) {
                                    let t = e.selector(".".concat(i.text_wrapper))[0];
                                    d.current && d.current.play();
                                    let l = o.p8.timeline({ scrollTrigger: { trigger: s.current, start: "bottom+=0% bottom", end: "bottom+=100% bottom", scrub: 0.5 } });
                                    l.to(s.current, { transform: "translateY(-200px)" }), l.to(d.current, { opacity: 0 }, "-=.5"), l.to(t, { transform: "scale(1) translateY(30%)", opacity: -0.5 }, "-=.5"), d.current;
                                }
                            }, s);
                            return () => {
                                e.revert();
                            };
                        }, [t]),
                        {
                            isLoaded: l,
                            handleLoadedData: () => {
                                r();
                            },
                            main: s,
                            videoRef: d,
                            isDesktop: t,
                        }
                    );
                },
                d = t(22312),
                _ = t(91870),
                u = t.n(_),
                v = (e) => {
                    var i, t, n;
                    let { data: a, widget_type: o } = e,
                        { isLoaded: r, handleLoadedData: c, main: _, videoRef: v, isDesktop: m } = s({ style: u() });
                    return (0, l.jsxs)("section", {
                        className: "".concat(u().service_hero, " ").concat(m ? u().desk : ""),
                        ref: _,
                        id: o,
                        children: [
                            (0, l.jsx)("div", {
                                className: "".concat(u().video_wrapper),
                                children: (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        !r &&
                                            (0, l.jsx)(d.Z, {
                                                src: null == a ? void 0 : null === (i = a.image) || void 0 === i ? void 0 : i.url,
                                                alt: null == a ? void 0 : null === (t = a.image) || void 0 === t ? void 0 : t.alternative_text,
                                                width: 1920,
                                                height: 450,
                                                quality: 90,
                                                priority: !0,
                                            }),
                                        (0, l.jsx)("video", {
                                            className: u().video,
                                            onLoadedData: c,
                                            width: "100%",
                                            height: "100%",
                                            loop: !0,
                                            muted: !0,
                                            autoPlay: !0,
                                            src: null == a ? void 0 : null === (n = a.video) || void 0 === n ? void 0 : n.url,
                                            playsInline: !0,
                                            ref: v,
                                        }),
                                    ],
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: "".concat(u().text_wrapper),
                                children: (0, l.jsx)("div", {
                                    className: "container",
                                    children: (0, l.jsxs)("div", {
                                        className: "".concat(u().text_inner),
                                        children: [
                                            (null == a ? void 0 : a.title) && (0, l.jsx)("h1", { className: "".concat(u().title, " ttl-80 fw-light"), children: null == a ? void 0 : a.title }),
                                            (null == a ? void 0 : a.description) && (0, l.jsx)("p", { className: "".concat(u().description), children: null == a ? void 0 : a.description }),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    });
                };
        },
        44864: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return d;
                    },
                });
            var l = t(57437),
                n = t(22312),
                a = t(62868),
                o = t.n(a),
                r = (e) => {
                    var i, t;
                    let { item: a } = e;
                    return (0, l.jsxs)("div", {
                        className: o().card,
                        children: [
                            (0, l.jsx)("div", {
                                className: o().card_img,
                                children: (0, l.jsx)("div", {
                                    className: o().img,
                                    children: (0, l.jsx)(n.Z, {
                                        src: null == a ? void 0 : null === (i = a.image) || void 0 === i ? void 0 : i.url,
                                        fill: !0,
                                        alt: null == a ? void 0 : null === (t = a.image) || void 0 === t ? void 0 : t.alternative_text,
                                    }),
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: o().card_body,
                                children: [
                                    (null == a ? void 0 : a.title) && (0, l.jsx)("h3", { className: "ttl-24 mb-lg-4", children: null == a ? void 0 : a.title }),
                                    (null == a ? void 0 : a.description) && (0, l.jsx)("p", { className: "mb-0 lh-primary", children: null == a ? void 0 : a.description }),
                                ],
                            }),
                        ],
                    });
                },
                c = t(6666),
                s = t.n(c);
            t(2265);
            var d = (e) => {
                let { data: i, background_color: t, widget_type: n } = e;
                return (0, l.jsx)("section", {
                    className: "".concat(s().section, "  section_").concat(null == i ? void 0 : i.theme),
                    id: n,
                    children: (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsxs)("div", {
                            className: "row ".concat(s().row),
                            children: [
                                (null == i ? void 0 : i.title) && (0, l.jsx)("div", { className: "col-lg-5", children: (0, l.jsx)("h2", { className: "ttl-80 fw-regular ".concat(s().title), children: null == i ? void 0 : i.title }) }),
                                (0, l.jsx)("div", {
                                    className: "col-lg-7 mt-4 mt-lg-0",
                                    children: (0, l.jsx)("div", {
                                        className: "row row-cols-md-2 ".concat(s().cards),
                                        children:
                                            (null == i ? void 0 : i.serviceList.length) !== 0 && (null == i ? void 0 : i.serviceList.map((e) => (0, l.jsx)("div", { children: (0, l.jsx)(r, { item: e }) }, null == e ? void 0 : e.title))),
                                    }),
                                }),
                            ],
                        }),
                    }),
                });
            };
        },
        9900: function (e, i, t) {
            "use strict";
            t.r(i);
            var l = t(57437),
                n = t(9189),
                a = t(18797),
                o = t.n(a),
                r = t(29211),
                c = t(39646),
                s = t(30558),
                d = t(16898);
            i.default = (e) => {
                var i, t, a, _, u, v;
                null == e || e.background_color;
                let m = (0, c.Z)(e.widget_type, e.id),
                    { width: h } = (0, d.Z)(),
                    p = null == e ? void 0 : null === (i = e.data) || void 0 === i ? void 0 : i.blogs.map((e) => (0, l.jsx)("div", { children: h >= 992 ? (0, l.jsx)(s.Z, { blog: e, showTags: !1 }) : (0, l.jsx)(n.Z, { item: e }) }, e.id));
                return (0, l.jsx)("section", {
                    className: "".concat(o().section, " bg-secondary"),
                    id: "".concat(null == e ? void 0 : e.widget_type).concat(null == e ? void 0 : e.id),
                    ref: m,
                    children: (0, l.jsxs)("div", {
                        className: "container",
                        children: [
                            (0, l.jsx)("h2", { className: "ttl-80 mb-lg-6 fw-regular mb-2 mb-lg-0", children: null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.title }),
                            (0, l.jsx)("div", { className: "row  row-cols-lg-3 ".concat(o().row), children: p }),
                            (0, l.jsx)("div", {
                                className: "".concat(o().btn_wrapper, " text-center"),
                                children: (0, l.jsx)(r.Z, {
                                    link: null == e ? void 0 : null === (_ = e.data) || void 0 === _ ? void 0 : null === (a = _.button) || void 0 === a ? void 0 : a.link,
                                    label: null == e ? void 0 : null === (v = e.data) || void 0 === v ? void 0 : null === (u = v.button) || void 0 === u ? void 0 : u.label,
                                }),
                            }),
                        ],
                    }),
                });
            };
        },
        87402: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return g;
                    },
                });
            var l = t(57437),
                n = t(90290),
                a = t(29211),
                o = t(98054),
                r = t.n(o),
                c = t(24033),
                s = t(39646),
                d = t(25110),
                _ = t(2265),
                u = t(42815),
                v = t(42716);
            u.p8.registerPlugin(v.i), u.p8.config({ force3D: !0 });
            var m = (e) => {
                    var i;
                    let { style: t } = e,
                        l = (0, _.useRef)(),
                        [n, a] = (0, _.useState)(!1),
                        [o, r] = (0, _.useState)(!0),
                        c = null === (i = l.current) || void 0 === i ? void 0 : i.querySelector("video");
                    return (
                        (0, _.useEffect)(() => {
                            let e = u.p8.context((e) => {
                                let i = e.selector(".".concat(t.video_container)),
                                    l = e.selector(".".concat(t.video_container, " video")),
                                    n = u.p8.timeline({
                                        scrollTrigger: {
                                            trigger: i,
                                            start: "top 80%",
                                            end: "bottom 10%",
                                            onEnter: () => {
                                                var e;
                                                null === (e = l[0]) || void 0 === e || e.play(), a(!0);
                                            },
                                            onLeave: () => {
                                                var e;
                                                null === (e = l[0]) || void 0 === e || e.pause(), a(!1);
                                            },
                                            onEnterBack: () => {
                                                var e;
                                                null === (e = l[0]) || void 0 === e || e.play(), a(!0);
                                            },
                                            onLeaveBack: () => {
                                                var e;
                                                null === (e = l[0]) || void 0 === e || e.pause(), a(!1);
                                            },
                                            scrub: 0.6,
                                        },
                                    });
                                n.to(l, { scale: 1 });
                            }, l);
                            return () => {
                                e.revert();
                            };
                        }, []),
                        {
                            main: l,
                            handlePlayPauseClick: () => {
                                n ? null == c || c.pause() : null == c || c.play(), a(!n);
                            },
                            handleMuteClick: () => {
                                (c.muted = !o), r(!o);
                            },
                            handleFullScreenClick: () => {
                                c.requestFullscreen ? c.requestFullscreen() : c.mozRequestFullScreen ? c.mozRequestFullScreen() : c.webkitRequestFullscreen ? c.webkitRequestFullscreen() : c.msRequestFullscreen && c.msRequestFullscreen();
                            },
                            isMuted: o,
                            isPlaying: n,
                        }
                    );
                },
                h = t(16898),
                p = t(60429);
            let x = ["/"];
            var g = (e) => {
                var i, t, o;
                let { data: _, widget_type: u, background_color: v, id: g } = e,
                    j = (0, s.Z)(u, g),
                    f = (0, c.usePathname)(),
                    w = x.includes(f) ? "" : r().inner_page,
                    { main: b, isMuted: N, isPlaying: k, handlePlayPauseClick: y, handleMuteClick: Z, handleFullScreenClick: C } = m({ style: r() }),
                    { width: B } = (0, h.Z)();
                return (0, l.jsxs)("section", {
                    className: ""
                        .concat(r().section, " ")
                        .concat((null == _ ? void 0 : _.stream_url) && r().section_video, " ")
                        .concat(w, " no-bg"),
                    id: "".concat(u).concat(g),
                    ref: j,
                    children: [
                        (0, l.jsx)("div", {
                            className: "container ",
                            children: (0, l.jsxs)("div", {
                                className: "".concat(r().wrapper),
                                children: [
                                    (null == _ ? void 0 : _.title) && (0, l.jsx)(n.Z, { as: "h2", className: "ttl-32 lh-title-sub ".concat(r().title), content: null == _ ? void 0 : _.title }),
                                    (null == _ ? void 0 : _.content) && (0, l.jsx)(n.Z, { as: "p", className: "".concat(r().description, " mb-lg-4"), content: null == _ ? void 0 : _.content, shudTrim: !1 }),
                                    (null == _ ? void 0 : null === (i = _.button) || void 0 === i ? void 0 : i.link) &&
                                        (0, l.jsx)("div", {
                                            className: r().btn_wrap,
                                            children: (0, l.jsx)(a.Z, {
                                                label: null == _ ? void 0 : null === (t = _.button) || void 0 === t ? void 0 : t.label,
                                                link: null == _ ? void 0 : null === (o = _.button) || void 0 === o ? void 0 : o.link,
                                            }),
                                        }),
                                ],
                            }),
                        }),
                        (null == _ ? void 0 : _.stream_url) &&
                            (0, l.jsx)("div", {
                                className: r().video_sec,
                                children: (0, l.jsxs)("div", {
                                    className: "container px-0 px-md-1",
                                    ref: b,
                                    children: [
                                        B >= 992
                                            ? (0, l.jsxs)("div", {
                                                  className: "ratio d-none d-lg-block ratio-16x9 ".concat(r().video_container),
                                                  children: [
                                                      (0, l.jsx)(d.Z, { customControls: !0, loop: !0, muted: !0, nocontrols: !0, src: "".concat(null == _ ? void 0 : _.stream_url) }),
                                                      (0, l.jsx)("div", {
                                                          className: r().controls_wrap,
                                                          children: (0, l.jsxs)("div", {
                                                              className: r().controls,
                                                              children: [
                                                                  (0, l.jsx)("button", {
                                                                      className: "".concat(r().controls_item, " ").concat(r().controls_item__vol),
                                                                      onClick: () => Z(),
                                                                      children: N
                                                                          ? (0, l.jsx)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                height: "40",
                                                                                viewBox: "0 -960 960 960",
                                                                                width: "40",
                                                                                children: (0, l.jsx)("path", {
                                                                                    d:
                                                                                        "m601.384-335.334-36.051-35.794L674.205-479.59 565.333-587.795l36.051-36.05 108.205 108.872L818.05-623.845l35.794 36.05L744.972-479.59l108.872 108.462-35.794 35.794-108.461-108.872-108.205 108.872Zm-455.228-44.667v-199.998h148.46l171.537-171.536v543.07L294.616-380.001h-148.46Z",
                                                                                }),
                                                                            })
                                                                          : (0, l.jsx)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                height: "40",
                                                                                viewBox: "0 -960 960 960",
                                                                                width: "40",
                                                                                children: (0, l.jsx)("path", {
                                                                                    d:
                                                                                        "M561.539-155.617v-52.255q90.179-28.616 146.115-103.718 55.935-75.103 55.935-169.41t-55.73-169.743q-55.731-75.436-146.32-103.385v-52.255Q673.23-776.46 743.537-686.46q70.307 89.999 70.307 205.46 0 115.461-70.307 205.46-70.307 90-181.998 119.923ZM146.156-380.001v-199.998h148.46l171.537-171.536v543.07L294.616-380.001h-148.46Zm405.639 49.949v-301.485q44.512 19.435 69.435 60.884 24.923 41.448 24.923 90.653 0 48.589-25.32 89.551-25.321 40.961-69.038 60.397Z",
                                                                                }),
                                                                            }),
                                                                  }),
                                                                  (0, l.jsx)("button", {
                                                                      className: "".concat(r().controls_item, " ").concat(r().controls_item__pause),
                                                                      onClick: () => y(),
                                                                      children: k
                                                                          ? (0, l.jsx)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                height: "40",
                                                                                viewBox: "0 -960 960 960",
                                                                                width: "40",
                                                                                children: (0, l.jsx)("path", { d: "M557.692-220.001v-519.998h157.179v519.998H557.692Zm-312.563 0v-519.998h157.435v519.998H245.129Z" }),
                                                                            })
                                                                          : (0, l.jsx)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                height: "40",
                                                                                viewBox: "0 -960 960 960",
                                                                                width: "40",
                                                                                children: (0, l.jsx)("path", { d: "M340.001-237.644v-487.687l383.073 243.844-383.073 243.843Z" }),
                                                                            }),
                                                                  }),
                                                                  (0, l.jsx)("button", {
                                                                      className: "".concat(r().controls_item, " ").concat(r().controls_item__full),
                                                                      onClick: () => C(),
                                                                      children: (0, l.jsx)("svg", {
                                                                          xmlns: "http://www.w3.org/2000/svg",
                                                                          height: "40",
                                                                          viewBox: "0 -960 960 960",
                                                                          width: "40",
                                                                          children: (0, l.jsx)("path", {
                                                                              d:
                                                                                  "M200-200v-196.615h50.255v146.36h146.36V-200H200Zm0-363.385V-760h196.615v50.255h-146.36v146.36H200ZM563.385-200v-50.255h146.36v-146.36H760V-200H563.385Zm146.36-363.385v-146.36h-146.36V-760H760v196.615h-50.255Z",
                                                                          }),
                                                                      }),
                                                                  }),
                                                              ],
                                                          }),
                                                      }),
                                                  ],
                                              })
                                            : "",
                                        (null == _ ? void 0 : _.mobile_stream_url) && B < 992
                                            ? (0, l.jsx)("div", {
                                                  className: "d-lg-none ratio ratio-16x9",
                                                  children: (0, l.jsx)(p.Z, { url: "https://vimeo.com/" + (null == _ ? void 0 : _.mobile_stream_url), playing: !0, controls: !0, width: "100%", height: "100%" }),
                                              })
                                            : "",
                                    ],
                                }),
                            }),
                    ],
                });
            };
        },
        44324: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return _;
                    },
                });
            var l = t(57437),
                n = t(72386),
                a = t(50126),
                o = t.n(a),
                r = t(29211),
                c = t(39646),
                s = t(2265),
                d = (e) => {
                    let { pinnedWorks: i } = e;
                    return (
                        (0, s.useEffect)(() => {
                            var e;
                            (null == i ? void 0 : i.length) !== 0
                                ? ((e) => {
                                      var i;
                                      let { pinnedWorks: t } = e,
                                          l = JSON.stringify(t);
                                      null === (i = localStorage) || void 0 === i || i.setItem("servicePinnedWorks", l);
                                  })({ pinnedWorks: i })
                                : null === (e = localStorage) || void 0 === e || e.removeItem("servicePinnedWorks");
                        }, [i]),
                        null
                    );
                },
                _ = (e) => {
                    var i, t, a, s, _, u, v, m;
                    null == e || e.background_color;
                    let h = null == e ? void 0 : null === (i = e.data) || void 0 === i ? void 0 : i.pinnedWorks;
                    d({ pinnedWorks: h });
                    let p = (0, c.Z)(e.widget_type, e.id),
                        x =
                            null == e
                                ? void 0
                                : null === (t = e.data) || void 0 === t
                                ? void 0
                                : t.works.map((e) => (0, l.jsx)("div", { className: "".concat(o().expertise_item), children: (0, l.jsx)(n.Z, { imageAspectRatio: 100, card: e }) }, e.id));
                    return (0, l.jsx)("section", {
                        className: "".concat(o().section, " no-bg"),
                        id: "".concat(null == e ? void 0 : e.widget_type).concat(null == e ? void 0 : e.id),
                        ref: p,
                        children: (0, l.jsxs)("div", {
                            className: "container ",
                            children: [
                                (null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : a.title) &&
                                    (0, l.jsx)("div", {
                                        className: o().heading,
                                        children: (0, l.jsx)("h4", { className: "".concat(o().title, " ttl-80 -mb-2 mb-lg-5 fw-regular"), children: null == e ? void 0 : null === (s = e.data) || void 0 === s ? void 0 : s.title }),
                                    }),
                                (0, l.jsx)("div", {}),
                                (0, l.jsx)("div", { className: "".concat(o().expertise, " row row-cols-md-2 row-cols-lg-3 g-2  g-lg-4 g-xxl-5 "), children: x }),
                                (0, l.jsx)("div", {
                                    className: "text-center ".concat(o().btn_wrap),
                                    children: (0, l.jsx)(r.Z, {
                                        label: null == e ? void 0 : null === (u = e.data) || void 0 === u ? void 0 : null === (_ = u.button) || void 0 === _ ? void 0 : _.label,
                                        link: null == e ? void 0 : null === (m = e.data) || void 0 === m ? void 0 : null === (v = m.button) || void 0 === v ? void 0 : v.link,
                                    }),
                                }),
                            ],
                        }),
                    });
                };
        },
        26543: function (e, i, t) {
            "use strict";
            t.r(i);
            var l = t(57437),
                n = t(96506),
                a = t(21350),
                o = t.n(a),
                r = t(29211),
                c = t(39646);
            i.default = (e) => {
                var i, t, a, s, d, _, u;
                null == e || e.background_color;
                let v = (0, c.Z)(null == e ? void 0 : e.widget_type, null == e ? void 0 : e.id),
                    m =
                        null == e
                            ? void 0
                            : null === (i = e.data) || void 0 === i
                            ? void 0
                            : i.services.map((e) =>
                                  (0, l.jsx)(
                                      "div",
                                      { className: "col-12 ", children: (0, l.jsx)("div", { className: "".concat(o().services_item), children: (0, l.jsx)(n.Z, { hasBg: !0, imageAspectRatio: (91 / 442) * 100, card: e }) }) },
                                      null == e ? void 0 : e.id
                                  )
                              );
                return (0, l.jsx)("section", {
                    className: "".concat(o().services, " has_bg"),
                    id: "".concat(null == e ? void 0 : e.widget_type).concat(null == e ? void 0 : e.id),
                    ref: v,
                    children: (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsxs)("div", {
                            className: "".concat(o().services_inner),
                            children: [
                                (null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.title) &&
                                    (0, l.jsx)("div", {
                                        className: "".concat(o().heading),
                                        children: (0, l.jsx)("h4", { className: "ttl-80 mb-2 mb-lg-5 fw-regular ", children: null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : a.title }),
                                    }),
                                (0, l.jsx)("div", { className: "row row-cols-md-2 row-cols-xl-3 g-3 g-lg-4 g-xxl-5 ", children: m }),
                                (0, l.jsx)("div", {
                                    className: "text-center ".concat(o().btn_wrap),
                                    children: (0, l.jsx)(r.Z, {
                                        link: null == e ? void 0 : null === (d = e.data) || void 0 === d ? void 0 : null === (s = d.button) || void 0 === s ? void 0 : s.link,
                                        label: null == e ? void 0 : null === (u = e.data) || void 0 === u ? void 0 : null === (_ = u.button) || void 0 === _ ? void 0 : _.label,
                                    }),
                                }),
                            ],
                        }),
                    }),
                });
            };
        },
        68707: function (e, i, t) {
            "use strict";
            t.r(i);
            var l = t(57437),
                n = t(96506),
                a = t(47244),
                o = t.n(a),
                r = t(29211),
                c = t(39646);
            i.default = (e) => {
                var i, t, a, s, d, _, u;
                null == e || e.background_color;
                let v = (0, c.Z)(null == e ? void 0 : e.widget_type, null == e ? void 0 : e.id),
                    m =
                        null == e
                            ? void 0
                            : null === (i = e.data) || void 0 === i
                            ? void 0
                            : i.services.map((e) =>
                                  (0, l.jsx)(
                                      "div",
                                      { className: "col-12", children: (0, l.jsx)("div", { className: "".concat(o().services_item), children: (0, l.jsx)(n.Z, { hasBg: !0, imageAspectRatio: (91 / 442) * 100, card: e }) }) },
                                      null == e ? void 0 : e.id
                                  )
                              );
                return (0, l.jsx)("section", {
                    className: "".concat(o().services, " "),
                    style: { backgroundColor: "".concat(null == e ? void 0 : e.background_color) },
                    id: "".concat(null == e ? void 0 : e.widget_type).concat(null == e ? void 0 : e.id),
                    ref: v,
                    children: (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsxs)("div", {
                            className: "".concat(o().services_inner),
                            children: [
                                (null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.title) &&
                                    (0, l.jsx)("div", {
                                        className: "".concat(o().heading),
                                        children: (0, l.jsx)("h2", { className: "ttl-80 mb-2 mb-lg-5 fw-regular ", children: null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : a.title }),
                                    }),
                                (0, l.jsx)("div", { className: "row row-cols-md-2 row-cols-xl-3 g-3 g-lg-4 g-xxl-5 ", children: m }),
                                (0, l.jsx)("div", {
                                    className: "text-center ".concat(o().btn_wrap),
                                    children: (0, l.jsx)(r.Z, {
                                        link: null == e ? void 0 : null === (d = e.data) || void 0 === d ? void 0 : null === (s = d.button) || void 0 === s ? void 0 : s.link,
                                        label: null == e ? void 0 : null === (u = e.data) || void 0 === u ? void 0 : null === (_ = u.button) || void 0 === _ ? void 0 : _.label,
                                    }),
                                }),
                            ],
                        }),
                    }),
                });
            };
        },
        18676: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return v;
                    },
                });
            var l = t(57437),
                n = t(79182),
                a = t(44497),
                o = t.n(a),
                r = t(2265),
                c = t(42815),
                s = t(79123),
                d = t(42716),
                _ = t(16898);
            c.p8.config({ force3D: !0 }), c.p8.registerPlugin(d.i);
            var u = () => {
                    let e = (0, r.useRef)(),
                        i = (0, r.useRef)(),
                        { isDesktop: t } = (0, _.Z)();
                    return (
                        (0, r.useEffect)(() => {
                            let l = 0,
                                n = c.p8.context((n) => {
                                    let a = n.selector(".".concat(o().scroll_sections_inner)),
                                        r = n.selector(".".concat(o().listing));
                                    t &&
                                        (c.p8.timeline({ scrollTrigger: { trigger: e.current, end: "300%", scrub: !0, anticipatePin: 1, pin: !0 } }),
                                        r.map((e, t) => {
                                            t + 1 !== r.length &&
                                                c.p8.timeline({
                                                    scrollTrigger: {
                                                        trigger: i.current,
                                                        start: "".concat((100 / r.length) * (t / 1.8) + 4, "% top"),
                                                        end: "".concat((100 / r.length) * ((t + 1) / 1.8) + 4, "% top"),
                                                        onEnter: () => {
                                                            (l = (100 / r.length) * (t + 1)), c.p8.to(a, { y: "".concat(-l, "%"), ease: s.EA.easeInOut, duration: 0.6 });
                                                        },
                                                        onLeaveBack: () => {
                                                            (l = (100 / r.length) * t), c.p8.to(a, { y: "".concat(-l, "%"), ease: s.EA.easeInOut, duration: 0.6 });
                                                        },
                                                    },
                                                });
                                        }),
                                        c.p8.timeline({ scrollTrigger: { trigger: i.current, start: "40% top", end: "75% top", scrub: !0 } }).fromTo(e.current, { opacity: 1, yPercent: 0 }, { opacity: 0.5, yPercent: -15 }));
                                }, e);
                            return () => {
                                n.revert();
                            };
                        }, [e, t]),
                        { main: e, mainTop: i, isDesktop: t }
                    );
                },
                v = (e) => {
                    let { data: i, widget_type: t } = e,
                        { main: a, mainTop: r, isDesktop: c } = u();
                    return (0, l.jsx)("section", {
                        className: "".concat(o().scroll_section_main, " ").concat(c ? o().desktop : o().mobile),
                        ref: r,
                        id: t,
                        children: (0, l.jsxs)("div", {
                            className: o().scroll_section,
                            ref: a,
                            children: [
                                (0, l.jsx)("div", {
                                    className: o().video_wrapper,
                                    children: (0, l.jsx)("div", {
                                        className: o().video,
                                        children: (0, l.jsx)("video", { width: "100%", height: "100%", loop: !0, muted: !0, autoPlay: !0, playsInline: !0, children: (0, l.jsx)("source", { src: "image/wac.mp4", type: "video/mp4" }) }),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "container",
                                    children: (0, l.jsxs)("div", {
                                        className: "".concat(o().scroll_inner, " row"),
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: "col-lg-".concat(c ? "6" : "12"),
                                                children: (0, l.jsxs)("div", {
                                                    className: "".concat(o().scroll_content),
                                                    children: [
                                                        (null == i ? void 0 : i.title) && (0, l.jsx)(n.Z, { as: "h2", className: "ttl-80 fw-light ".concat(o().title), content: null == i ? void 0 : i.title }),
                                                        (null == i ? void 0 : i.description) && (0, l.jsx)(n.Z, { as: "p", className: "".concat(o().description, " fs-24 fw-light"), content: null == i ? void 0 : i.description }),
                                                    ],
                                                }),
                                            }),
                                            (0, l.jsx)("div", {
                                                className: "col-lg-".concat(c ? "6" : "12"),
                                                children: (0, l.jsx)("div", {
                                                    className: "".concat(o().scroll_sections),
                                                    children: (0, l.jsx)("div", {
                                                        className: "".concat(o().scroll_sections_inner),
                                                        children:
                                                            null == i
                                                                ? void 0
                                                                : i.overViewCounts.map((e) =>
                                                                      (0, l.jsx)(
                                                                          "div",
                                                                          {
                                                                              className: "".concat(o().listing),
                                                                              children: (0, l.jsxs)("div", {
                                                                                  className: "".concat(o().listing_item),
                                                                                  children: [
                                                                                      (null == e ? void 0 : e.name) && (0, l.jsx)("h6", { className: "".concat(o().list_title), children: null == e ? void 0 : e.count }),
                                                                                      (null == e ? void 0 : e.count) && (0, l.jsx)("p", { className: "".concat(o().list_sub_title), children: null == e ? void 0 : e.name }),
                                                                                  ],
                                                                              }),
                                                                          },
                                                                          null == e ? void 0 : e.name
                                                                      )
                                                                  ),
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
        32838: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return h;
                    },
                });
            var l = t(57437),
                n = t(16010),
                a = t(62075),
                o = t(57701),
                r = t.n(o),
                c = t(99321),
                s = (e) => {
                    let { tabCard: i } = e,
                        { name: t, image: o, description: s, button: d, hover_color: _ } = i;
                    return (0, l.jsxs)("div", {
                        className: r().card,
                        style: { "--theme": _ },
                        children: [
                            o &&
                                (0, l.jsx)("div", {
                                    className: r().card_head,
                                    children: (0, l.jsx)("div", { className: "".concat(r().icon, " "), children: (0, l.jsx)(c.Z, { src: null == o ? void 0 : o.url, fill: !0, alt: null == o ? void 0 : o.alternative_text }) }),
                                }),
                            (0, l.jsxs)("div", { className: "".concat(r().card_body, " "), children: [t && (0, l.jsx)("h3", { className: " mb-3", children: t }), s && (0, l.jsx)("p", { children: s })] }),
                            (null == d ? void 0 : d.link) &&
                                (0, l.jsx)("div", {
                                    className: r().card_footer,
                                    children: (0, l.jsxs)(n.Z, {
                                        href: null == d ? void 0 : d.link,
                                        className: "btn btn-secondary stretched-link",
                                        children: [(0, l.jsx)("span", { children: (0, l.jsx)(a.Z, { icon: "arrow-right", size: "12" }) }), (null == d ? void 0 : d.label) && (0, l.jsx)("span", { children: null == d ? void 0 : d.label })],
                                    }),
                                }),
                        ],
                    });
                },
                d = t(16272),
                _ = t(81349),
                u = t(90856),
                v = t.n(u),
                m = t(39646),
                h = (e) => {
                    let { title: i, technologies_data: t } = null == e ? void 0 : e.data;
                    null == e || e.background_color, null == e || e.background_color;
                    let n = (0, m.Z)(e.widget_type, null == e ? void 0 : e.id),
                        a =
                            0 !== t.length &&
                            t.map((e) =>
                                (0, l.jsx)(
                                    d.Z,
                                    {
                                        eventKey: e.technology_section,
                                        title: null == e ? void 0 : e.technology_section,
                                        children: (0, l.jsx)("div", {
                                            className: "row row-cols-md-2 row-cols-lg-3 ".concat(v().row),
                                            children:
                                                (null == e ? void 0 : e.technologies.length) !== 0 &&
                                                (null == e ? void 0 : e.technologies.map((e) => (0, l.jsx)("div", { children: (0, l.jsx)(s, { tabCard: e }) }, null == e ? void 0 : e.id))),
                                        }),
                                    },
                                    null == e ? void 0 : e.id
                                )
                            );
                    return (0, l.jsx)("section", {
                        className: "".concat(v().section, " no-bg"),
                        id: "".concat(null == e ? void 0 : e.widget_type).concat(null == e ? void 0 : e.id),
                        ref: n,
                        children: (0, l.jsxs)("div", {
                            className: "container",
                            children: [
                                i && (0, l.jsx)("h2", { className: "ttl-80 fw-regular mb-1 mb-lg-4 ", children: i }),
                                (0, l.jsx)(_.Z, { id: "technologies-tab", defaultActiveKey: t[0].technology_section, className: v().tab, children: a }),
                            ],
                        }),
                    });
                };
        },
        21773: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return N;
                    },
                });
            var l = t(57437),
                n = t(25152);
            t(62075);
            var a = t(99321),
                o = t(16010),
                r = t(2574),
                c = t(18728),
                s = t.n(c);
            t(26901);
            var d = t(60210),
                _ = t(98864),
                u = t.n(_);
            let v = u()(() => Promise.resolve().then(t.bind(t, 26901)), { loadableGenerated: { webpack: () => [26901] } });
            var m = (e) => {
                    let { style: i, name: t, isButtonDisable: n } = e,
                        { status: a, setFalse: o, setTrue: r, toggle: c } = (0, d.Z)();
                    return (0, l.jsxs)(l.Fragment, { children: [t && (0, l.jsx)("button", { onClick: c, className: i.project_btn, disabled: !n, children: t }), n && (0, l.jsx)(v, { show: a, handleClose: o, slug: t })] });
                },
                h = t(16898),
                p = (e) => {
                    var i, t;
                    let { item: n } = e,
                        { isDesktop: c } = (0, h.Z)();
                    return (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsxs)("div", {
                            className: s().card,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: "".concat(s().card_img),
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: "ratio",
                                            children: (0, l.jsx)(a.Z, {
                                                src: null == n ? void 0 : null === (i = n.image) || void 0 === i ? void 0 : i.url,
                                                fill: !0,
                                                alt: null == n ? void 0 : null === (t = n.image) || void 0 === t ? void 0 : t.alternative_text,
                                            }),
                                        }),
                                        (null == n ? void 0 : n.vimeo_link) &&
                                            (0, l.jsx)("div", { className: "".concat(s().video_wrapper), children: (0, l.jsx)(r.default, { vimeoLink: null == n ? void 0 : n.vimeo_link, thumbImage: null == n ? void 0 : n.image }) }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: s().card_footer,
                                    children: [
                                        (null == n ? void 0 : n.client_name) && (null == n ? void 0 : n.show_client_canvas)
                                            ? (0, l.jsx)(m, { style: s(), name: null == n ? void 0 : n.client_name, isButtonDisable: null == n ? void 0 : n.show_client_canvas })
                                            : (0, l.jsx)("span", { className: s().project_btn, children: null == n ? void 0 : n.client_name }),
                                        (null == n ? void 0 : n.name) && (0, l.jsx)("h4", { children: null == n ? void 0 : n.name }),
                                        (null == n ? void 0 : n.designation) && (0, l.jsx)("p", { children: null == n ? void 0 : n.designation }),
                                        (null == n ? void 0 : n.work) && c && (0, l.jsx)("div", { className: "mt-auto", children: (0, l.jsx)(o.Z, { href: null == n ? void 0 : n.work, className: "", children: "Read case study" }) }),
                                    ],
                                }),
                            ],
                        }),
                    });
                },
                x = t(49268),
                g = t.n(x),
                j = t(18893),
                f = t(2265),
                w = t(30713),
                b = () => {
                    let [e, i] = (0, f.useState)([]),
                        { data: t, isLoading: l, error: n } = (0, w.ZP)("".concat("https://admin.wac.co").concat(j.Jn, "?offset=").concat(0, "&limit=").concat(500), {
                            onSuccess: (e) => {
                                if (e) {
                                    let t = null == e ? void 0 : e.testimonials,
                                        l = (null == t ? void 0 : t.length) !== 0 && (null == t ? void 0 : t.slice(0, 20));
                                    i([...l]);
                                }
                            },
                            onError: (e) => {},
                        }),
                        a = () => {
                            i((e) => {
                                var i, l;
                                if (e.length !== (null == t ? void 0 : null === (i = t.testimonials) || void 0 === i ? void 0 : i.length)) {
                                    let i = [...(null == t ? void 0 : null === (l = t.testimonials) || void 0 === l ? void 0 : l.slice(e.length, e.length + 20))];
                                    return [...e, ...i];
                                }
                                return [...e];
                            });
                        },
                        o = (null == t ? void 0 : t.total_count) === e.length,
                        r = (0, f.useRef)(),
                        c = (0, f.useCallback)(
                            (e) => {
                                !l &&
                                    (r.current && r.current.disconnect(),
                                    (r.current = new IntersectionObserver(
                                        (e) => {
                                            e[0].isIntersecting && !o && a();
                                        },
                                        { threshold: 0.1 }
                                    )),
                                    e && r.current.observe(e));
                            },
                            [l, o]
                        );
                    return (
                        (0, f.useEffect)(() => {
                            setTimeout(() => window.scrollTo(0, 0));
                        }, []),
                        { testimonialData: e, handleLoadMore: a, isReachedEnd: o, isLoading: l, error: n, lastBookElementRef: c }
                    );
                },
                N = (e) => {
                    let { data: i, widget_type: t, id: a } = e,
                        { testimonialData: o, handleLoadMore: r, isReachedEnd: c, isLoading: s, error: d, lastBookElementRef: _ } = b();
                    return d
                        ? null
                        : (0, l.jsx)("section", {
                              className: g().section,
                              id: "".concat(t).concat(a),
                              children: (0, l.jsxs)("div", {
                                  className: "container",
                                  children: [
                                      (0, l.jsx)("div", { className: g().filter_wrap, children: (0, l.jsx)(n.Z, { active: "testimonials", data: i }) }),
                                      (0, l.jsx)("div", {
                                          className: "".concat(g().testimonial_wrap),
                                          children: (0, l.jsx)("div", {
                                              className: "row row-cols-lg-3 row-cols-md-2  gy-3 gx-lg-3 gx-xxl-4 gy-lg-5 ",
                                              children:
                                                  (null == o ? void 0 : o.length) !== 0 &&
                                                  (null == o
                                                      ? void 0
                                                      : o.map((e, i) =>
                                                            (null == o ? void 0 : o.length) === i + 1
                                                                ? (0, l.jsx)("div", { ref: _, children: (0, l.jsx)(p, { item: e }) }, null == e ? void 0 : e.name)
                                                                : (0, l.jsx)("div", { children: (0, l.jsx)(p, { item: e }) }, null == e ? void 0 : e.name)
                                                        )),
                                          }),
                                      }),
                                  ],
                              }),
                          });
                };
        },
        31970: function (e, i, t) {
            "use strict";
            t.d(i, {
                Z: function () {
                    return u;
                },
            });
            var l = t(57437),
                n = t(96681),
                a = t(19981),
                o = t(60210),
                r = t(2265),
                c = t(72736),
                s = t.n(c),
                d = t(60429),
                _ = (e) => {
                    let { src: i, ...t } = e,
                        [n, a] = (0, r.useState)(!1);
                    return (
                        (0, r.useEffect)(() => {
                            a(!0);
                        }, [n]),
                        (0, l.jsx)("div", {
                            className: "".concat(s().video),
                            children: n && (0, l.jsx)(d.Z, { url: "https://vimeo.com/" + (null == e ? void 0 : e.vimeoLink), playing: !0, controls: !0, width: "100%", height: "100%", playsinline: !0 }),
                        })
                    );
                },
                u = (e) => {
                    let { style: i, videoData: t, videoType: c, videoLink: s } = e,
                        { status: d, toggle: u } = (0, o.Z)(),
                        v = (0, n.LZ)();
                    return (
                        (0, r.useEffect)(() => (d && (null == v || v.stop()), () => (null == v ? void 0 : v.start())), [d]),
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)("button", {
                                    className: "btn btn-primary fill",
                                    onClick: u,
                                    children: [(0, l.jsx)("span", { className: "".concat(i.video_icon) }), (0, l.jsx)("span", { className: "".concat(i.text), children: "Watch video" })],
                                }),
                                (0, l.jsxs)(a.Z, {
                                    show: d,
                                    centered: !0,
                                    size: "lg",
                                    onHide: u,
                                    className: i.videoModal,
                                    children: [
                                        (0, l.jsx)(a.Z.Header, { closeButton: !0 }),
                                        (0, l.jsx)(a.Z.Body, { className: "p-0", children: (0, l.jsx)("div", { className: "ratio ratio-16x9", children: (0, l.jsx)(_, { vimeoLink: "860034433", videoLink: s, videoType: c }) }) }),
                                    ],
                                }),
                            ],
                        })
                    );
                };
        },
        68087: function (e, i, t) {
            "use strict";
            t.r(i);
            var l = t(57437),
                n = t(2265),
                a = t(22312),
                o = t(59420),
                r = t.n(o),
                c = t(90290);
            t(37398);
            var s = t(31970);
            i.default = (e) => {
                var i, t;
                let { data: o, widget_type: d, id: _ } = e;
                return (
                    (0, n.useEffect)(() => {
                        setTimeout(() => {
                            var e;
                            null === (e = window) || void 0 === e || e.scrollTo(0, 0);
                        });
                    }),
                    (0, l.jsx)("section", {
                        className: r().awards_hero,
                        id: "".concat(d).concat(_),
                        children: (0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsxs)("div", {
                                className: "".concat(r().awards_hero_inner, " row gx-lg-5"),
                                children: [
                                    (0, l.jsx)("div", {
                                        className: "".concat(r().awards_image, " col-12 col-lg-6"),
                                        children: (0, l.jsx)("div", {
                                            className: "".concat(r().image_wrapper),
                                            children: (0, l.jsx)(a.Z, {
                                                src: null == o ? void 0 : null === (i = o.image) || void 0 === i ? void 0 : i.url,
                                                fill: !0,
                                                alt: null == o ? void 0 : null === (t = o.image) || void 0 === t ? void 0 : t.alternative_text,
                                            }),
                                        }),
                                    }),
                                    (0, l.jsx)("div", {
                                        className: "col-12 col-lg-6",
                                        children: (0, l.jsxs)("div", {
                                            className: "".concat(r().awards_content),
                                            children: [
                                                (0, l.jsx)(c.Z, { content: null == o ? void 0 : o.title, as: "h3", className: "ttl-40 fw-light ".concat(r().title) }),
                                                (0, l.jsx)("div", {
                                                    className: "ttl-40 ".concat(r().action, " mt-2 mt-lg-6"),
                                                    children: (0, l.jsx)(s.Z, { style: r(), videoLink: null == o ? void 0 : o.video_link, videoType: null == o ? void 0 : o.video_link_type }),
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    })
                );
            };
        },
        46775: function (e, i, t) {
            "use strict";
            t.r(i);
            var l = t(57437),
                n = t(29211),
                a = t(58070),
                o = t.n(a),
                r = t(90290),
                c = t(39646);
            i.default = (e) => {
                var i, t, a;
                let { data: s, background_color: d, widget_type: _, id: u } = e,
                    v = (0, c.Z)(_, u),
                    m = (null == s ? void 0 : s.features.length) !== 0 && (null == s ? void 0 : s.features.map((e) => (0, l.jsx)("div", { children: (0, l.jsx)("p", { children: e }) }, e)));
                return (0, l.jsx)("section", {
                    className: "".concat(o().section, " "),
                    id: "".concat(_).concat(u),
                    ref: v,
                    children: (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsxs)("div", {
                            className: "row ".concat(o().row),
                            children: [
                                (0, l.jsx)("div", {
                                    className: "col-12 ".concat(o().col_left),
                                    children: (0, l.jsxs)("div", {
                                        className: o().title_wrap,
                                        children: [
                                            (null == s ? void 0 : s.title) && (0, l.jsx)("h2", { className: "ttl-80 fw-regular", children: null == s ? void 0 : s.title }),
                                            (null == s ? void 0 : s.sub_title) && (0, l.jsx)("p", { className: "ttl-32 fw-light", children: null == s ? void 0 : s.sub_title }),
                                            (null == s ? void 0 : null === (i = s.button) || void 0 === i ? void 0 : i.link) &&
                                                (0, l.jsx)("div", {
                                                    className: "".concat(o().btn_wrap),
                                                    children: (0, l.jsx)(n.Z, {
                                                        label: null == s ? void 0 : null === (t = s.button) || void 0 === t ? void 0 : t.label,
                                                        link: null == s ? void 0 : null === (a = s.button) || void 0 === a ? void 0 : a.link,
                                                    }),
                                                }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "col-12 ".concat(o().col_right),
                                    children: (0, l.jsxs)("div", {
                                        className: o().content_wrap,
                                        children: [
                                            (0, l.jsx)(r.Z, { as: "p", className: "lh-primary ".concat(o().description), content: null == s ? void 0 : s.description }),
                                            (0, l.jsx)("div", { className: "row row-cols-md-2 ".concat(o().list), children: m }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                });
            };
        },
        94570: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return s;
                    },
                });
            var l = t(57437),
                n = t(5517),
                a = t(45691),
                o = t.n(a),
                r = t(1222),
                c = t(39646),
                s = (e) => {
                    var i, t, a, s;
                    let d =
                            (null == e ? void 0 : null === (i = e.data) || void 0 === i ? void 0 : i.cards.length) !== 0 &&
                            (null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.cards.map((e) => (0, l.jsx)("div", { children: (0, l.jsx)(n.Z, { hasBorder: !0, card: e }) }, null == e ? void 0 : e.title))),
                        _ = !!(null == e ? void 0 : e.background_color),
                        { backgroundColor: u } = (0, r.a)(null == e ? void 0 : e.background_color),
                        v = (0, c.Z)(null == e ? void 0 : e.widget_type, null == e ? void 0 : e.id);
                    return (0, l.jsx)("section", {
                        className: ""
                            .concat(o().section, " ")
                            .concat(u, " ")
                            .concat(_ ? "" : "no-bg"),
                        id: "".concat(null == e ? void 0 : e.widget_type).concat(null == e ? void 0 : e.id),
                        ref: v,
                        children: (0, l.jsxs)("div", {
                            className: "container",
                            children: [
                                (0, l.jsxs)("div", {
                                    className: "row row-cols-lg-2",
                                    children: [
                                        (null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : a.title) &&
                                            (0, l.jsx)("div", { children: (0, l.jsx)("h2", { className: "ttl-80  mb-lg-3 fw-regular", children: null == e ? void 0 : null === (s = e.data) || void 0 === s ? void 0 : s.title }) }),
                                        (null == e ? void 0 : e.subtitle) && (0, l.jsx)("div", { children: (0, l.jsx)("p", { className: "fs-32 fw-light lh-title-sub", children: null == e ? void 0 : e.subtitle }) }),
                                    ],
                                }),
                                (0, l.jsx)("div", { className: "row row-cols-md-2 row-cols-lg-3 ".concat(o().row), children: d }),
                            ],
                        }),
                    });
                };
        },
        98099: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return s;
                    },
                });
            var l = t(57437),
                n = t(72386),
                a = t(46990),
                o = t.n(a),
                r = t(29211),
                c = t(39646);
            t(2265);
            var s = (e) => {
                var i, t, a, s, d, _, u;
                let v = !!(null == e ? void 0 : e.background_color),
                    m = (0, c.Z)(e.widget_type, e.id),
                    h =
                        null == e
                            ? void 0
                            : null === (i = e.data) || void 0 === i
                            ? void 0
                            : i.works.map((e) => (0, l.jsx)("div", { className: "".concat(o().expertise_item), children: (0, l.jsx)(n.Z, { imageAspectRatio: 100, card: e }) }, e.id));
                return (0, l.jsx)("section", {
                    className: o().section,
                    id: "".concat(null == e ? void 0 : e.widget_type).concat(null == e ? void 0 : e.id),
                    ref: m,
                    style: { backgroundColor: v || "#ffffff" },
                    children: (0, l.jsxs)("div", {
                        className: "container ",
                        children: [
                            (null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.title) &&
                                (0, l.jsx)("div", {
                                    className: o().heading,
                                    children: (0, l.jsx)("h2", { className: "".concat(o().title, " ttl-80 -mb-2 mb-lg-5 fw-regular"), children: null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : a.title }),
                                }),
                            (0, l.jsx)("div", {}),
                            (0, l.jsx)("div", { className: "".concat(o().expertise, " row row-cols-md-2 row-cols-lg-3 g-2  g-lg-3 g-xl-4 g-xxl-5 "), children: h }),
                            (0, l.jsx)("div", {
                                className: "text-center ".concat(o().btn_wrap),
                                children: (0, l.jsx)(r.Z, {
                                    label: null == e ? void 0 : null === (d = e.data) || void 0 === d ? void 0 : null === (s = d.button) || void 0 === s ? void 0 : s.label,
                                    link: null == e ? void 0 : null === (u = e.data) || void 0 === u ? void 0 : null === (_ = u.button) || void 0 === _ ? void 0 : _.link,
                                }),
                            }),
                        ],
                    }),
                });
            };
        },
        72645: function (e) {
            e.exports = {
                section: "amrithaStepContext_section__k14vJ",
                image_block: "amrithaStepContext_image_block__63Aw4",
                steps: "amrithaStepContext_steps__gd1Ve",
                steps_outer: "amrithaStepContext_steps_outer__7zypd",
                steps_outer_scroll: "amrithaStepContext_steps_outer_scroll__7oXD9",
                steps_title: "amrithaStepContext_steps_title__d72Mn",
                steps_item: "amrithaStepContext_steps_item__wt54U",
            };
        },
        13900: function (e) {
            e.exports = {
                section: "nestuHealth_section__DILuz",
                row_img: "nestuHealth_row_img__MZA3u",
                row_img_left: "nestuHealth_row_img_left__z8NfK",
                row_img_right: "nestuHealth_row_img_right__fZxXB",
                box: "nestuHealth_box__4me3x",
                box_title: "nestuHealth_box_title__JWuiP",
                box_content: "nestuHealth_box_content__WQNq_",
                box_image: "nestuHealth_box_image__q6Tw6",
                item: "nestuHealth_item__KCfmN",
                item_fig: "nestuHealth_item_fig__swmmP",
                item_figure: "nestuHealth_item_figure__tbthO",
                item_title: "nestuHealth_item_title__KaOXk",
            };
        },
        89374: function (e) {
            e.exports = {
                section: "shalomMockup_section__mjsYu",
                mockup_stack: "shalomMockup_mockup_stack__RKT0D",
                mockup_01: "shalomMockup_mockup_01__w8yw1",
                mockup_02: "shalomMockup_mockup_02__SjAXs",
                mockup_03: "shalomMockup_mockup_03__RYSvN",
                mockup_04: "shalomMockup_mockup_04__TVobQ",
                mockup_05: "shalomMockup_mockup_05__YE_eV",
                mockup_06: "shalomMockup_mockup_06__sfeNG",
            };
        },
        89938: function (e) {
            e.exports = {
                section: "testimonialBlock_section__YQJ2m",
                testimonial_modal: "testimonialBlock_testimonial_modal__TLC_W",
                block: "testimonialBlock_block__Vy_f7",
                block_imgwrap: "testimonialBlock_block_imgwrap__lKiHf",
                plybtn: "testimonialBlock_plybtn__X1l49",
                block_img: "testimonialBlock_block_img__FT3Bt",
                block_contentwrap: "testimonialBlock_block_contentwrap__Aon6I",
                block_namewrap: "testimonialBlock_block_namewrap__MkdJq",
            };
        },
        58338: function (e) {
            e.exports = { badge_wrapper: "badge_badge_wrapper__be3Qz", link: "badge_link___IMxW" };
        },
        47966: function (e) {
            e.exports = {
                item_wrapper: "blogItemCard_item_wrapper__94NRV",
                link: "blogItemCard_link__LhPqr",
                image_wrapper: "blogItemCard_image_wrapper__I3eje",
                content_wrapper: "blogItemCard_content_wrapper__MwV10",
                category: "blogItemCard_category__BtSTW",
                title: "blogItemCard_title__OxUEF",
                date_wrapper: "blogItemCard_date_wrapper__HdP5_",
                details: "blogItemCard_details__e4aLG",
                author: "blogItemCard_author__7X4T3",
                blog_sm: "blogItemCard_blog_sm__9Vfw8",
            };
        },
        13888: function (e) {
            e.exports = {
                wrapper: "mobileBradCrumbs_wrapper__WD_4m",
                inner: "mobileBradCrumbs_inner__meXg6",
                item: "mobileBradCrumbs_item__AWm0T",
                toolbar: "mobileBradCrumbs_toolbar__69bPx",
                breadcrumbMob: "mobileBradCrumbs_breadcrumbMob__0_yma",
                breadcrumbMob_item: "mobileBradCrumbs_breadcrumbMob_item__hRnEH",
                active: "mobileBradCrumbs_active__53aKc",
            };
        },
        50784: function (e) {
            e.exports = { breadCrumbs: "breadCrumb_breadCrumbs__H43CH", active: "breadCrumb_active__OC8r1", breadcrumb: "breadCrumb_breadcrumb__rIzqR", breadcrumb_item: "breadCrumb_breadcrumb_item__6PIyv" };
        },
        83957: function (e) {
            e.exports = {
                block_wrapper: "certifiedItem_block_wrapper___BBdH",
                image_wrapper: "certifiedItem_image_wrapper__1k2N2",
                content_wrapper: "certifiedItem_content_wrapper__MnE9C",
                title: "certifiedItem_title__QV8Ea",
                sub_title: "certifiedItem_sub_title__4MDRh",
            };
        },
        62286: function (e) {
            e.exports = {
                offcanvas: "clientOffCanvas_offcanvas__JsPRX",
                body: "clientOffCanvas_body__O_QmB",
                imageWrapper: "clientOffCanvas_imageWrapper__s8bpv",
                mainContentArea: "clientOffCanvas_mainContentArea___V69h",
                description: "clientOffCanvas_description__9NPs_",
                clientLogoInner: "clientOffCanvas_clientLogoInner__J5paV",
                clientLogo: "clientOffCanvas_clientLogo__K845Q",
                clientDetailList: "clientOffCanvas_clientDetailList__F5xZ1",
                clientProject: "clientOffCanvas_clientProject__QLwNs",
                title: "clientOffCanvas_title__eEFOt",
                imageMainWrapper: "clientOffCanvas_imageMainWrapper__DbnZ7",
                clientProjectImage: "clientOffCanvas_clientProjectImage__Duru7",
                clientProjectDetails: "clientOffCanvas_clientProjectDetails__tQDpK",
                client_categories: "clientOffCanvas_client_categories___txQ_",
                category: "clientOffCanvas_category__QyfdS",
                clientProjectArticle: "clientOffCanvas_clientProjectArticle__8aG2J",
                projectDescription: "clientOffCanvas_projectDescription__29ruv",
                clientTestimonialText: "clientOffCanvas_clientTestimonialText__vCoaz",
                testimonial: "clientOffCanvas_testimonial__tyDvA",
                message: "clientOffCanvas_message__DT4CK",
                icon: "clientOffCanvas_icon__ZUux8",
                clientInfo: "clientOffCanvas_clientInfo__w_ai1",
                name: "clientOffCanvas_name__t7HYw",
                designation: "clientOffCanvas_designation__Cvm6Y",
                clientTestimonialVideo: "clientOffCanvas_clientTestimonialVideo__CVwKX",
                clientTestimonialVideoInner: "clientOffCanvas_clientTestimonialVideoInner__3pdEX",
                videoPoster: "clientOffCanvas_videoPoster__uP9P6",
                video: "clientOffCanvas_video__np43I",
                videoWrapper: "clientOffCanvas_videoWrapper__S_ghB",
                videoPlayIcon: "clientOffCanvas_videoPlayIcon__trjdl",
                pause: "clientOffCanvas_pause__XRmWZ",
                videoPlayText: "clientOffCanvas_videoPlayText__M7Ok9",
                weProvide: "clientOffCanvas_weProvide__SoqOw",
                link: "clientOffCanvas_link__HNS6L",
            };
        },
        99136: function (e) {
            e.exports = { card: "clientCard_card__zUZGq", card_img: "clientCard_card_img__jdG3S", color_img: "clientCard_color_img__URdVe", black_img: "clientCard_black_img__FxTKe" };
        },
        18917: function (e) {
            e.exports = { title_wrap: "clientsTestimonialsTab_title_wrap__IUOfw", title: "clientsTestimonialsTab_title__TRR81" };
        },
        83032: function (e) {
            e.exports = {
                action_wrapper: "enquireNowFrom_action_wrapper__zXN7w",
                form_container: "enquireNowFrom_form_container__Tt3mv",
                form_wrapper: "enquireNowFrom_form_wrapper__XEQrz",
                attachment: "enquireNowFrom_attachment__NtrP9",
                attachment_icon: "enquireNowFrom_attachment_icon__7i51E",
                attachment_text: "enquireNowFrom_attachment_text__q7Vby",
                attachment_container: "enquireNowFrom_attachment_container__lQa03",
                enq_btn: "enquireNowFrom_enq_btn__zbtkK",
            };
        },
        82328: function (e) {
            e.exports = {
                card: "feedbackCard_card__lA9zy",
                btn_overlay: "feedbackCard_btn_overlay__kgo88",
                btn_active: "feedbackCard_btn_active__wV7JK",
                playbtn: "feedbackCard_playbtn__0lpls",
                card_head: "feedbackCard_card_head__wMzKM",
                img: "feedbackCard_img__Wpx2l",
                card_info: "feedbackCard_card_info__dYMPE",
                card_body: "feedbackCard_card_body__zWgup",
                card_footer: "feedbackCard_card_footer__Xn4wQ",
                btn_not_active: "feedbackCard_btn_not_active__58VnI",
            };
        },
        62226: function (e) {
            e.exports = { card: "frameWorkCard_card__n355n", card_body: "frameWorkCard_card_body__k0hNc", card_head: "frameWorkCard_card_head__0xFQI", icon: "frameWorkCard_icon__U1o9K", card_footer: "frameWorkCard_card_footer__M5npJ" };
        },
        23450: function (e) {
            e.exports = {
                btn_wrapper: "industry_btn_wrapper__ASyA0",
                btn_text_inner: "industry_btn_text_inner__YPCzp",
                icon: "industry_icon__w9IG2",
                title: "industry_title___7heq",
                counter_number: "industry_counter_number__Kq2h1",
                image_wrapper: "industry_image_wrapper__h5Knc",
                image_container: "industry_image_container__RT0uf",
            };
        },
        88526: function (e) {
            e.exports = { card: "industryItem_card__Cd_do", card_img: "industryItem_card_img__2iytI", card_info: "industryItem_card_info__Vadwk" };
        },
        1482: function (e) {
            e.exports = {
                card: "insightCard_card__7gesh",
                card_head: "insightCard_card_head__gOpnA",
                img: "insightCard_img__wCmC1",
                card_content: "insightCard_card_content__wUJSu",
                card_body: "insightCard_card_body__CsA7M",
                paragraph: "insightCard_paragraph__73bky",
                card_footer: "insightCard_card_footer___YQZU",
                screen_reader: "insightCard_screen_reader__1NGLy",
            };
        },
        21845: function (e) {
            e.exports = { item: "jobItem_item__6I_AD", item_title: "jobItem_item_title__xlMRJ", item_year: "jobItem_item_year__i1Kr0", item_apply: "jobItem_item_apply__8R8Mb", label: "jobItem_label__x0Yaz" };
        },
        27626: function (e) {
            e.exports = { accordion: "jobOpeningsAccordion_accordion__Yf8Gx" };
        },
        21453: function (e) {
            e.exports = {
                listing_card: "listingCard_listing_card__vSgnM",
                image: "listingCard_image__ix2C0",
                description: "listingCard_description__Q5VTW",
                title: "listingCard_title__ufYqF",
                context_wrapper: "listingCard_context_wrapper__ihkvq",
                withBg: "listingCard_withBg__S__Ml",
                screen_reader: "listingCard_screen_reader__Ml_9f",
                image_sm: "listingCard_image_sm__LZ1EE",
            };
        },
        29116: function (e) {
            e.exports = { card: "resourceItem_card__e9XzS", card_img: "resourceItem_card_img__Ccarq", img: "resourceItem_img__oLOIM", card_info: "resourceItem_card_info__wuBAw" };
        },
        23024: function (e) {
            e.exports = {
                dropdown: "toolbar_dropdown__tl0h0",
                toolbar: "toolbar_toolbar__YMoBl",
                toolbar_insight: "toolbar_toolbar_insight__93_3i",
                btn_save_active: "toolbar_btn_save_active__kQUeI",
                copied: "toolbar_copied__sVaH_",
                save_icon: "toolbar_save_icon__ylE4Q",
            };
        },
        3016: function (e) {
            e.exports = { select_wrap: "searchableDropDown_select_wrap__9bRqb" };
        },
        62868: function (e) {
            e.exports = { card: "serviceCard_card__YhaPn", card_img: "serviceCard_card_img__rzZHs", img: "serviceCard_img__c_WaP", card_body: "serviceCard_card_body__CIt_n" };
        },
        23218: function (e) {
            e.exports = { icon: "simpleCard_icon__w5sFY", contentWrapper: "simpleCard_contentWrapper__T_t7Z", simpleCard: "simpleCard_simpleCard__ONTyZ", bordered: "simpleCard_bordered__3onBg" };
        },
        60857: function (e) {
            e.exports = { stack_box_item: "stackBoxItem_stack_box_item__tjOml", image_wrapper: "stackBoxItem_image_wrapper__lcTeE", title: "stackBoxItem_title__qT7Om" };
        },
        57701: function (e) {
            e.exports = { card: "techCard_card__fB8D8", card_head: "techCard_card_head__TDSr6", icon: "techCard_icon__DoFEz", card_body: "techCard_card_body__BZQSP", card_footer: "techCard_card_footer__0x6FR" };
        },
        18728: function (e) {
            e.exports = {
                card: "testimonialCard_card__2J4Ro",
                card_img: "testimonialCard_card_img__mZ_aD",
                card_body: "testimonialCard_card_body__fnDXO",
                card_footer: "testimonialCard_card_footer__82H08",
                project_btn: "testimonialCard_project_btn__YStfB",
                video_wrapper: "testimonialCard_video_wrapper__ya898",
            };
        },
        54849: function (e) {
            e.exports = { counter_wrapper: "counterNumber_counter_wrapper__ldjP2", title: "counterNumber_title__a3TG9", number: "counterNumber_number__IWIaa" };
        },
        29495: function (e) {
            e.exports = { card: "valueItem_card__Uqc2v", count: "valueItem_count__IJisK", title: "valueItem_title__GQlOG" };
        },
        72736: function (e) {
            e.exports = { video: "videoPlayer_video__CZHsv" };
        },
        52211: function (e) {
            e.exports = {
                listing_card: "workCard_listing_card__t_T6i",
                disabled: "workCard_disabled__JsyEi",
                hasShimmer: "workCard_hasShimmer__mhqXw",
                image: "workCard_image__OUzWj",
                description: "workCard_description__NawYq",
                title: "workCard_title__CmBr9",
                context_wrapper: "workCard_context_wrapper__okUyc",
                withBg: "workCard_withBg__OXReR",
                shimmer: "workCard_shimmer__9xkaj",
                text_sub: "workCard_text_sub__2q1gr",
                text: "workCard_text__u02DP",
                text_sm: "workCard_text_sm__NELkb",
            };
        },
        55120: function (e) {
            e.exports = { video_wrapper: "aboutVideoWrapper_video_wrapper__BOVpf", video_main: "aboutVideoWrapper_video_main__OBU2u", video_container: "aboutVideoWrapper_video_container__PO_ce", mobile: "aboutVideoWrapper_mobile__NqS6f" };
        },
        80248: function (e) {
            e.exports = { section: "augmentationBlock_section__1Ap9L", row: "augmentationBlock_row__JeoCI", title: "augmentationBlock_title__R6bjZ", btn_wrap: "augmentationBlock_btn_wrap__Ehxdi" };
        },
        81472: function (e) {
            e.exports = { section: "benifitsListing_section__ePgdg", row: "benifitsListing_row__vFJOF", heading: "benifitsListing_heading__4I5oU", blue: "benifitsListing_blue__i3Vop" };
        },
        8452: function (e) {
            e.exports = { section: "BlogInsights_section__3hRg2", row: "BlogInsights_row__jNVK_", btn_wrapper: "BlogInsights_btn_wrapper__NUkFE" };
        },
        60898: function (e) {
            e.exports = {
                section: "brandingDescription_section__4Azx7",
                main_wrapper: "brandingDescription_main_wrapper__gdG0j",
                title_wrapper: "brandingDescription_title_wrapper__yNAeq",
                title: "brandingDescription_title__sPVRb",
                video_wrapper: "brandingDescription_video_wrapper__n50_P",
            };
        },
        39391: function (e) {
            e.exports = {
                section: "brandingHero_section__Ytmqc",
                text_wrapper: "brandingHero_text_wrapper__yFwNO",
                heading: "brandingHero_heading__cjjYH",
                title: "brandingHero_title__L8ahl",
                description: "brandingHero_description__OiMWo",
                image_wrapper: "brandingHero_image_wrapper__CkWCQ",
                image_single: "brandingHero_image_single__tAw0e",
                image: "brandingHero_image__YGrAE",
            };
        },
        91997: function (e) {
            e.exports = {
                section: "careerHome_section__7zGs0",
                Anim_wrapper: "careerHome_Anim_wrapper__vCOCO",
                image_anim_wrapper: "careerHome_image_anim_wrapper__hFer9",
                image_anim_items: "careerHome_image_anim_items__mGXER",
                content_wrapper: "careerHome_content_wrapper__zC8q8",
                title: "careerHome_title__Exoec",
                description: "careerHome_description__8pUSx",
                active: "careerHome_active__PZnvb",
                image_wrapper: "careerHome_image_wrapper__f9PiO",
                image_rotate: "careerHome_image_rotate__GLN6l",
                rotate_anim: "careerHome_rotate_anim__8oqng",
            };
        },
        782: function (e) {
            e.exports = { certified_wrapper: "certifiedBlock_certified_wrapper__5iZ_E", heading: "certifiedBlock_heading__b_cXM", content_wrapper: "certifiedBlock_content_wrapper__nk4Ck" };
        },
        33959: function (e) {
            e.exports = {
                business: "circularVideoOrImageBlock_business__M2cA3",
                business_inner: "circularVideoOrImageBlock_business_inner__ykqpI",
                image_wrapper: "circularVideoOrImageBlock_image_wrapper__YrbGa",
                image: "circularVideoOrImageBlock_image__whgOj",
                video: "circularVideoOrImageBlock_video__sRSK4",
                title: "circularVideoOrImageBlock_title__pExvh",
                content_wrapper: "circularVideoOrImageBlock_content_wrapper__hOqRI",
                title_sub: "circularVideoOrImageBlock_title_sub__Qen9_",
                action: "circularVideoOrImageBlock_action__o401P",
            };
        },
        82376: function (e) {
            e.exports = {
                section: "ClientBlock_section__i1KO6",
                light: "ClientBlock_light__Q5QIy",
                row: "ClientBlock_row__S_Noz",
                head_wrap: "ClientBlock_head_wrap__kI9gn",
                client_img: "ClientBlock_client_img__SI8Mw",
                client_wrap: "ClientBlock_client_wrap__JuK6s",
                description: "ClientBlock_description__9J6yI",
                btn_wrapper: "ClientBlock_btn_wrapper__XivU8",
            };
        },
        3894: function (e) {
            e.exports = {
                section: "clientList_section__biyf3",
                select_wrap: "clientList_select_wrap__ZNkC2",
                filter_wrap: "clientList_filter_wrap__JuVhy",
                container: "clientList_container__2IZsZ",
                read_more: "clientList_read_more__VzrkT",
                card_shimmer: "clientList_card_shimmer__B8qvr",
                tab_listing: "clientList_tab_listing__nXJ3m",
            };
        },
        71655: function (e) {
            e.exports = { section: "companyShortDescription_section__852_F", section_inner: "companyShortDescription_section_inner__oMWk_", counter_wrapper: "companyShortDescription_counter_wrapper__jbISI" };
        },
        96866: function (e) {
            e.exports = {
                contact_tab: "contactUsHero_contact_tab__SZ2Ji",
                contact_us_wrapper: "contactUsHero_contact_us_wrapper__L5xF8",
                content_wrapper: "contactUsHero_content_wrapper__KP0Mv",
                title: "contactUsHero_title__BhYx2",
                description: "contactUsHero_description____lVO",
                form_container: "contactUsHero_form_container__ABoFU",
                form_wrapper: "contactUsHero_form_wrapper__vdxYo",
                action_wrapper: "contactUsHero_action_wrapper__cfLzs",
                attachment: "contactUsHero_attachment__4I3Xs",
                attachment_icon: "contactUsHero_attachment_icon__r4Fjz",
                attachment_text: "contactUsHero_attachment_text__F4VXl",
                attachment_container: "contactUsHero_attachment_container__SKgas",
                enq_btn: "contactUsHero_enq_btn__NWvA6",
                error_message: "contactUsHero_error_message__Alxum",
                added_files: "contactUsHero_added_files__tKtdb",
                files_wrapper: "contactUsHero_files_wrapper__KYx_d",
                close: "contactUsHero_close__v_JQj",
                card: "contactUsHero_card__vfVoq",
                card_body: "contactUsHero_card_body__ArK78",
                card_img: "contactUsHero_card_img__p97a1",
                img: "contactUsHero_img__bly7s",
                card_info: "contactUsHero_card_info__PM5g0",
                checkbox: "contactUsHero_checkbox__uln5z",
                btn_more: "contactUsHero_btn_more__wi7e3",
                checkbox_item: "contactUsHero_checkbox_item__RP_Jf",
                checkbox_item__input: "contactUsHero_checkbox_item__input__GmStu",
                info: "contactUsHero_info__4DNg7",
                info_title: "contactUsHero_info_title__LmH0D",
                info_description: "contactUsHero_info_description__DaDEZ",
                select_wrap: "contactUsHero_select_wrap__Bzyw4",
                form_wrapper_shimmer: "contactUsHero_form_wrapper_shimmer__1PuFP",
            };
        },
        1622: function (e) {
            e.exports = {
                oru_process: "contentCollapseBlock_oru_process__ZBN_3",
                heading: "contentCollapseBlock_heading__KplGc",
                title: "contentCollapseBlock_title__t66KN",
                accordion: "contentCollapseBlock_accordion__BLMli",
                accordion_header: "contentCollapseBlock_accordion_header__zEdD1",
                description: "contentCollapseBlock_description__vU85F",
                title_wrapper: "contentCollapseBlock_title_wrapper__E_qkQ",
                icon: "contentCollapseBlock_icon__Myj5r",
                counter: "contentCollapseBlock_counter__lloZj",
                accordion_wrapper: "contentCollapseBlock_accordion_wrapper__ny6J0",
                collapse_wrapper: "contentCollapseBlock_collapse_wrapper__YApIx",
                active: "contentCollapseBlock_active__mFjab",
            };
        },
        88177: function (e) {
            e.exports = {
                section: "descriptionListSection_section__21RFb",
                inner: "descriptionListSection_inner__X4dLj",
                content: "descriptionListSection_content__1DSbr",
                title: "descriptionListSection_title__XzNEu",
                description: "descriptionListSection_description__JAKhq",
                list: "descriptionListSection_list__j12th",
                item: "descriptionListSection_item__KptnA",
                icon: "descriptionListSection_icon__Fn9T6",
                text: "descriptionListSection_text__6_Ocv",
                title_sub: "descriptionListSection_title_sub__RW4cm",
                description_sub: "descriptionListSection_description_sub__fvoM8",
            };
        },
        15196: function (e) {
            e.exports = {
                section: "dotInteractionBlock_section__0qL12",
                content: "dotInteractionBlock_content__h_CGd",
                cont: "dotInteractionBlock_cont__Dqgqv",
                mobile: "dotInteractionBlock_mobile__I5xDf",
                item: "dotInteractionBlock_item__zypuW",
                item_body: "dotInteractionBlock_item_body__4R6Ix",
                animateMove: "dotInteractionBlock_animateMove__YXZv8",
                animateMove0: "dotInteractionBlock_animateMove0__XPUNb",
                animateMove1: "dotInteractionBlock_animateMove1__3aPYn",
                animateMove2: "dotInteractionBlock_animateMove2__jlXWw",
                video: "dotInteractionBlock_video__r_5g9",
                mobile_wrapper: "dotInteractionBlock_mobile_wrapper___CCPN",
                item_list: "dotInteractionBlock_item_list__tdvIM",
                mobile_btn: "dotInteractionBlock_mobile_btn__rRWV7",
            };
        },
        58916: function (e) {
            e.exports = {
                section: "DynamicContent_section__Ms_Gw",
                isHome: "DynamicContent_isHome__EjMlT",
                title: "DynamicContent_title__pgvXN",
                description: "DynamicContent_description__vxqV7",
                wrapper: "DynamicContent_wrapper__LMNuu",
                inner_page: "DynamicContent_inner_page__XvKgr",
                btn_wrap: "DynamicContent_btn_wrap__KePbt",
            };
        },
        23859: function (e) {
            e.exports = {
                section: "employeeTestimonial_section__Ia2Zo",
                container: "employeeTestimonial_container__yM_UY",
                title_wrap: "employeeTestimonial_title_wrap__IFvgQ",
                slider: "employeeTestimonial_slider__O5hoe",
                swiper: "employeeTestimonial_swiper__IzwqZ",
            };
        },
        67671: function (e) {
            e.exports = {
                form_wrapper: "enqireForm_form_wrapper___q_z0",
                description: "enqireForm_description__bmu8l",
                title: "enqireForm_title__7BK0j",
                action_wrapper: "enqireForm_action_wrapper__Sd6g9",
                attachment: "enqireForm_attachment__i3mDi",
                attachment_icon: "enqireForm_attachment_icon__1S_Bi",
                attachment_text: "enqireForm_attachment_text__qKiUv",
                attachment_container: "enqireForm_attachment_container__K7w_Y",
                enq_btn: "enqireForm_enq_btn__gl9z7",
            };
        },
        89175: function (e) {
            e.exports = {
                faq_wrapper: "faq_faq_wrapper__On_Zb",
                heading_wrapper: "faq_heading_wrapper__vWPE0",
                title: "faq_title__diryH",
                accordion_main: "faq_accordion_main__XvJkb",
                accordion: "faq_accordion__oDbvz",
                accordion_header: "faq_accordion_header__L3TcW",
                description: "faq_description__F6yCJ",
                title_wrapper: "faq_title_wrapper__LEJMu",
                icon: "faq_icon__Qb39s",
                counter: "faq_counter__qnjoR",
                accordion_wrapper: "faq_accordion_wrapper__1Tik9",
                sub_title: "faq_sub_title__7VfuZ",
                accordion_body: "faq_accordion_body__B7fYe",
            };
        },
        14325: function (e) {
            e.exports = {
                section: "featureAnimatedBlock_section__O7AvR",
                title: "featureAnimatedBlock_title__J0L6a",
                item: "featureAnimatedBlock_item__ZZdML",
                item_wrap: "featureAnimatedBlock_item_wrap__i9p8w",
                item_title: "featureAnimatedBlock_item_title__jVJTb",
                item_content: "featureAnimatedBlock_item_content__Lq7ri",
                mouse_interaction: "featureAnimatedBlock_mouse_interaction__xtHvU",
                mouse_interaction_wrap: "featureAnimatedBlock_mouse_interaction_wrap__Tqb2Q",
                fig: "featureAnimatedBlock_fig__6i_RN",
                active: "featureAnimatedBlock_active__c6ogV",
                cont: "featureAnimatedBlock_cont__C_AI5",
            };
        },
        66468: function (e) {
            e.exports = { section: "frameWorkBlock_section__ObQCH", row: "frameWorkBlock_row__i7fwS" };
        },
        87139: function (e) {
            e.exports = { inner_banner: "heroBanner_inner_banner__13x5V", inview: "heroBanner_inview__cs0Wq", media_wrapper: "heroBanner_media_wrapper__t0olY", content_wrapper: "heroBanner_content_wrapper__Wyn_r" };
        },
        97266: function (e) {
            e.exports = {
                inner_banner: "heroBannerTwo_inner_banner___RMTo",
                inview: "heroBannerTwo_inview__B1l0V",
                inner: "heroBannerTwo_inner__z8LdC",
                inner_title: "heroBannerTwo_inner_title__h0cJA",
                media_wrapper: "heroBannerTwo_media_wrapper__juiWB",
                content_wrapper: "heroBannerTwo_content_wrapper__u_Orm",
            };
        },
        95843: function (e) {
            e.exports = { section: "homeBuildText_section__43LMP", section_inner: "homeBuildText_section_inner__yZXiN", description: "homeBuildText_description__w1VpV" };
        },
        57632: function (e) {
            e.exports = {
                homeBanner: "homePageBanner_homeBanner___QMEF",
                video_wrapper: "homePageBanner_video_wrapper__SV0bB",
                text_inner: "homePageBanner_text_inner__smh1E",
                text_wrapper: "homePageBanner_text_wrapper__091UO",
                video: "homePageBanner_video__04Bgx",
                button: "homePageBanner_button__pPawp",
                title: "homePageBanner_title__awnjl",
            };
        },
        55257: function (e) {
            e.exports = {
                section: "impactHero_section__7CtFE",
                inner: "impactHero_inner__kFxk2",
                content: "impactHero_content__wXSRU",
                title: "impactHero_title__AoBeD",
                btn_wrapper: "impactHero_btn_wrapper__2FjAv",
                description: "impactHero_description__qD84Q",
                detail_wrapper: "impactHero_detail_wrapper__RVFA3",
                detail_item: "impactHero_detail_item__4_UqY",
                short_description: "impactHero_short_description__hKxIQ",
                video_wrapper: "impactHero_video_wrapper___bNZO",
                video: "impactHero_video__i0sTk",
            };
        },
        4439: function (e) {
            e.exports = {
                section: "impactHeroLight_section__Rls21",
                inner: "impactHeroLight_inner__OFU0M",
                content: "impactHeroLight_content__u6ycU",
                title: "impactHeroLight_title__ixgen",
                description: "impactHeroLight_description__NEGbZ",
                list: "impactHeroLight_list__oRQdZ",
                sub_title: "impactHeroLight_sub_title__jwjtW",
                sub_description: "impactHeroLight_sub_description__8ttpx",
                link: "impactHeroLight_link__ZbfSe",
            };
        },
        32440: function (e) {
            e.exports = { section: "industriesSlider_section__MGiTm", slider: "industriesSlider_slider__L4xU1", title: "industriesSlider_title__Cj2U2", btn_wrap: "industriesSlider_btn_wrap__VPZYl" };
        },
        51378: function (e) {
            e.exports = { wrapper: "industryIstBlock_wrapper__uOB1r", inner: "industryIstBlock_inner__TNEaE", title: "industryIstBlock_title__5U_WE", action_wrapper: "industryIstBlock_action_wrapper__3pWlB" };
        },
        40295: function (e) {
            e.exports = { wrapper: "introText_wrapper__6Rfj2", text_wrapper: "introText_text_wrapper__Vqrwk", sm_text: "introText_sm_text__YyKmD", into_text: "introText_into_text__LEyMT" };
        },
        76881: function (e) {
            e.exports = { section: "jobOpenings_section__gewiv", title_wrap: "jobOpenings_title_wrap__OFMO4", accordion_wrap: "jobOpenings_accordion_wrap__htd6m", read_more: "jobOpenings_read_more__fHbBC" };
        },
        25692: function (e) {
            e.exports = { section: "keyObjectives_section__u4Q5P", image_wrapper: "keyObjectives_image_wrapper___fVQg" };
        },
        77741: function (e) {
            e.exports = { section_wrapper: "lateVideoWrapper_section_wrapper__jAZ05", video_wrapper: "lateVideoWrapper_video_wrapper__PXkv2", video_container: "lateVideoWrapper_video_container__FXmS_" };
        },
        68220: function (e) {
            e.exports = {
                section: "lifeBlock_section__xfVsO",
                title_wrap: "lifeBlock_title_wrap__6_bE2",
                grid: "lifeBlock_grid__KLcRW",
                grid_item: "lifeBlock_grid_item__LUoU9",
                grid_item_img: "lifeBlock_grid_item_img__eRWbi",
                item: "lifeBlock_item__3iFBF",
                active: "lifeBlock_active__SHk59",
            };
        },
        36029: function (e) {
            e.exports = {
                section: "marketingHeroText_section__L8BVm",
                content_wrapper: "marketingHeroText_content_wrapper__ekYFx",
                heading: "marketingHeroText_heading__HbTmO",
                description_wrapper: "marketingHeroText_description_wrapper__IVv37",
            };
        },
        49811: function (e) {
            e.exports = {
                section: "newBanner_section__VlZZ_",
                start: "newBanner_start__JV_Rl",
                banner_child: "newBanner_banner_child__do3Je",
                banner_image: "newBanner_banner_image__Ebtad",
                banner_inner: "newBanner_banner_inner__B_pMf",
                full: "newBanner_full__kYor7",
                content: "newBanner_content__7v3dH",
                title: "newBanner_title__9Vl15",
                sub_title: "newBanner_sub_title___6aj8",
                ind: "newBanner_ind__h5f0_",
                anim: "newBanner_anim__UjgCO",
                links: "newBanner_links__w8Vmh",
                mouseMove: "newBanner_mouseMove__8yFgF",
                arrow_wrapper: "newBanner_arrow_wrapper__NqRK8",
                arrow_wrapper_inner: "newBanner_arrow_wrapper_inner__ndPBv",
                arrow_left: "newBanner_arrow_left__LOpAw",
                arrow_right: "newBanner_arrow_right__DCKmb",
                navigate_btn: "newBanner_navigate_btn__9VKft",
                video_container: "newBanner_video_container__H5tGp",
            };
        },
        42488: function (e) {
            e.exports = {
                section: "oneGlobalBlock_section__nZ55M",
                content: "oneGlobalBlock_content__kVveg",
                title: "oneGlobalBlock_title__q5E1S",
                heroText: "oneGlobalBlock_heroText__3rkgC",
                list_wrapper: "oneGlobalBlock_list_wrapper__uvZtE",
            };
        },
        83244: function (e) {
            e.exports = {
                service_listing: "ourServices_service_listing__8CXmM",
                image: "ourServices_image__IbkOS",
                image_wrapper: "ourServices_image_wrapper__GnWpV",
                title: "ourServices_title__yfTCh",
                link: "ourServices_link__lFW4b",
                link_list: "ourServices_link_list__l_rlp",
                action: "ourServices_action__RVOgB",
                service_text: "ourServices_service_text__Kh5qd",
                service_listing_card: "ourServices_service_listing_card__xLI2u",
                service_inner: "ourServices_service_inner__biN2k",
                image_rotate: "ourServices_image_rotate__ppzhG",
                animName: "ourServices_animName__p9w5_",
                media_wrapper: "ourServices_media_wrapper__mZr3Q",
                link_item: "ourServices_link_item__ZfvqL",
                link_arrow: "ourServices_link_arrow__ijRCf",
                link_slash: "ourServices_link_slash__o7PDb",
            };
        },
        21708: function (e) {
            e.exports = {
                our_story_description: "ourStoryDescription_our_story_description__8lKcx",
                our_story_inner: "ourStoryDescription_our_story_inner__x6P2Y",
                title: "ourStoryDescription_title__HeGd0",
                description: "ourStoryDescription_description__HVPTJ",
            };
        },
        69112: function (e) {
            e.exports = {
                solutions_list: "ourTechSolutions_solutions_list__INLt2",
                solutions_list_inner: "ourTechSolutions_solutions_list_inner__7nWbW",
                solutions_list_items: "ourTechSolutions_solutions_list_items__3esde",
                solutions_image: "ourTechSolutions_solutions_image__my1P4",
                image_wrapper: "ourTechSolutions_image_wrapper__Bq8jn",
                solutions_content: "ourTechSolutions_solutions_content__YnZwm",
                title: "ourTechSolutions_title__bT6ar",
                redirect: "ourTechSolutions_redirect__Au4y5",
                action: "ourTechSolutions_action__bLlKK",
                website_and_date: "ourTechSolutions_website_and_date__yDRPX",
                read_more: "ourTechSolutions_read_more__2zdEm",
            };
        },
        43058: function (e) {
            e.exports = {
                item_wrapper: "ourValuesItem_item_wrapper__G6_nM",
                item_container: "ourValuesItem_item_container__5kJXU",
                icon: "ourValuesItem_icon__SqfGP",
                text: "ourValuesItem_text__T4XCd",
                title_sub: "ourValuesItem_title_sub__PEJAh",
                description_sub: "ourValuesItem_description_sub__CFqyG",
            };
        },
        41683: function (e) {
            e.exports = {
                section: "ourValues_section__LDulV",
                inner: "ourValues_inner__jOhYB",
                heading: "ourValues_heading__eiqsq",
                title: "ourValues_title__pnNL1",
                description: "ourValues_description___UTkF",
                content: "ourValues_content__3E8QG",
            };
        },
        30342: function (e) {
            e.exports = {
                process_wrapper: "processSetpsAccordion_process_wrapper__69_Ym",
                heading: "processSetpsAccordion_heading__6n6gk",
                accordion_main: "processSetpsAccordion_accordion_main__STDff",
                accordion: "processSetpsAccordion_accordion__MbrAs",
                accordion_header: "processSetpsAccordion_accordion_header__fwpLv",
                description: "processSetpsAccordion_description__T3ERr",
                title_wrapper: "processSetpsAccordion_title_wrapper__IFrXI",
                sub_title: "processSetpsAccordion_sub_title__4Tgsl",
                icon: "processSetpsAccordion_icon___95dF",
                counter: "processSetpsAccordion_counter__svijz",
                accordion_wrapper: "processSetpsAccordion_accordion_wrapper__F___m",
                accordion_body: "processSetpsAccordion_accordion_body__WG6L2",
            };
        },
        16922: function (e) {
            e.exports = {
                awards_list: "recgnitionsBlock_awards_list__TFf0o",
                awards_list_inner: "recgnitionsBlock_awards_list_inner__56x3Z",
                awards_list_items: "recgnitionsBlock_awards_list_items__bWx9v",
                awards_image: "recgnitionsBlock_awards_image__bHeT9",
                image_wrapper: "recgnitionsBlock_image_wrapper__htn0p",
                awards_content: "recgnitionsBlock_awards_content__HsMOB",
                title: "recgnitionsBlock_title__sqAwP",
                action: "recgnitionsBlock_action__RUMC2",
                website_and_date: "recgnitionsBlock_website_and_date___zeib",
                read_more: "recgnitionsBlock_read_more__Ol3JN",
                video_icon: "recgnitionsBlock_video_icon__7BMC_",
            };
        },
        63493: function (e) {
            e.exports = { section: "ServiceBlocks_section__1_BvP", expertise: "ServiceBlocks_expertise__ud4fK" };
        },
        91870: function (e) {
            e.exports = {
                service_hero: "serviceHero_service_hero__MBXl8",
                text_wrapper: "serviceHero_text_wrapper__ErAi_",
                video_wrapper: "serviceHero_video_wrapper__2PJqj",
                video: "serviceHero_video__D2d_F",
                title: "serviceHero_title____K6U",
                description: "serviceHero_description__OjhO_",
                desk: "serviceHero_desk__o1J50",
            };
        },
        6666: function (e) {
            e.exports = { section: "serviceListBlock_section__5Bebx", cards: "serviceListBlock_cards__7pBbY", title: "serviceListBlock_title__lc7QB" };
        },
        18797: function (e) {
            e.exports = { section: "BlogInsights_section__9t8Z2", row: "BlogInsights_row__BjhzY", btn_wrapper: "BlogInsights_btn_wrapper__YNTEw" };
        },
        98054: function (e) {
            e.exports = {
                section: "DynamicContent_section__exJeu",
                section_video: "DynamicContent_section_video__oMm1F",
                isHome: "DynamicContent_isHome__AuND_",
                title: "DynamicContent_title__o2lOx",
                description: "DynamicContent_description__6SdNo",
                wrapper: "DynamicContent_wrapper__xHzQY",
                inner_page: "DynamicContent_inner_page__k_hXw",
                video_container: "DynamicContent_video_container__85eDQ",
                video_sec: "DynamicContent_video_sec__mLNsI",
                controls: "DynamicContent_controls__ZJ4dd",
                controls_item: "DynamicContent_controls_item__OgK84",
                controls_item__pause: "DynamicContent_controls_item__pause__p1TKN",
                controls_item__vol: "DynamicContent_controls_item__vol__EKaUr",
                controls_item__full: "DynamicContent_controls_item__full__8f_UB",
                btn_wrap: "DynamicContent_btn_wrap__lzeQ_",
            };
        },
        50126: function (e) {
            e.exports = { section: "WorkListing_section__Fe4RB", btn_wrap: "WorkListing_btn_wrap___I35U", heading: "WorkListing_heading__S6069", title: "WorkListing_title__enNX5" };
        },
        21350: function (e) {
            e.exports = { services: "ServiceListing_services__ENnzP", heading: "ServiceListing_heading__SJqHn", btn_wrap: "ServiceListing_btn_wrap__5QO_c", services_item: "ServiceListing_services_item__xuHEW" };
        },
        47244: function (e) {
            e.exports = { services: "ServiceListing_services__o3EX3", heading: "ServiceListing_heading__N5Nsc", btn_wrap: "ServiceListing_btn_wrap__0evAP", services_item: "ServiceListing_services_item__8Gs0X" };
        },
        23397: function (e) {
            e.exports = {
                simple_wrapper: "simpleTestimonialVideo_simple_wrapper__vXIz8",
                video_wrapper: "simpleTestimonialVideo_video_wrapper__jooVf",
                image_Wrapper: "simpleTestimonialVideo_image_Wrapper__liDLD",
                watch_video: "simpleTestimonialVideo_watch_video__4qcw3",
                icon: "simpleTestimonialVideo_icon__hHmML",
                text: "simpleTestimonialVideo_text__E94W_",
                details_wrapper: "simpleTestimonialVideo_details_wrapper__0IeR5",
                avatar_title: "simpleTestimonialVideo_avatar_title__m7rnn",
                description_wrapper: "simpleTestimonialVideo_description_wrapper__OwNij",
            };
        },
        98028: function (e) {
            e.exports = { stack: "stackBox_stack__SPiE3", heading: "stackBox_heading__bDhhM", content_wrapper: "stackBox_content_wrapper__QGgW6" };
        },
        44497: function (e) {
            e.exports = {
                scroll_section_main: "stickyScrollWithVideo_scroll_section_main__AbaZ4",
                desktop: "stickyScrollWithVideo_desktop__ENYAd",
                scroll_sections: "stickyScrollWithVideo_scroll_sections__qVOfn",
                scroll_section: "stickyScrollWithVideo_scroll_section__6gzYz",
                scroll_inner: "stickyScrollWithVideo_scroll_inner__4Iv3W",
                title: "stickyScrollWithVideo_title__9blLM",
                description: "stickyScrollWithVideo_description__7pUqF",
                scroll_sections_inner: "stickyScrollWithVideo_scroll_sections_inner__3o4OE",
                listing: "stickyScrollWithVideo_listing__AYbot",
                listing_item: "stickyScrollWithVideo_listing_item__sQV3e",
                list_title: "stickyScrollWithVideo_list_title__03x6j",
                list_sub_title: "stickyScrollWithVideo_list_sub_title__tAgjb",
                video_wrapper: "stickyScrollWithVideo_video_wrapper__tQ1mk",
                video: "stickyScrollWithVideo_video__V1xk4",
                mobile: "stickyScrollWithVideo_mobile__ZD3kB",
                scroll_content: "stickyScrollWithVideo_scroll_content__w1hKY",
            };
        },
        90856: function (e) {
            e.exports = { section: "technologiesBlock_section__VHSK0", row: "technologiesBlock_row__K_hUo" };
        },
        49268: function (e) {
            e.exports = { read_more: "testimonialsList_read_more__Q3euc", testimonial_wrap: "testimonialsList_testimonial_wrap__dchdo", section: "testimonialsList_section__xaNmL", filter_wrap: "testimonialsList_filter_wrap__SQdT7" };
        },
        59420: function (e) {
            e.exports = {
                awards_hero: "usSecretraryVideoBlock_awards_hero__Ybqq1",
                awards_hero_inner: "usSecretraryVideoBlock_awards_hero_inner__oflri",
                awards_image: "usSecretraryVideoBlock_awards_image__SKxs4",
                image_wrapper: "usSecretraryVideoBlock_image_wrapper__sXdPj",
                awards_content: "usSecretraryVideoBlock_awards_content__DaYmK",
                title: "usSecretraryVideoBlock_title__jLwhO",
                video_icon: "usSecretraryVideoBlock_video_icon__bXaYM",
                action: "usSecretraryVideoBlock_action__znWad",
                videoModal: "usSecretraryVideoBlock_videoModal___Y0pv",
            };
        },
        30079: function (e) {
            e.exports = {
                section: "valuesWeLive_section__lVSdX",
                col_left: "valuesWeLive_col_left__A6pAq",
                col_right: "valuesWeLive_col_right__7Bqg6",
                row: "valuesWeLive_row__B7NDV",
                content_wrap: "valuesWeLive_content_wrap__zH2BC",
                video_wrapper: "valuesWeLive_video_wrapper__SA0SA",
            };
        },
        58070: function (e) {
            e.exports = {
                section: "whyChooseBlock_section__no5eL",
                col_left: "whyChooseBlock_col_left__PTPyf",
                col_right: "whyChooseBlock_col_right__9OclY",
                row: "whyChooseBlock_row___Fu3x",
                title_wrap: "whyChooseBlock_title_wrap__oBAvW",
                content_wrap: "whyChooseBlock_content_wrap__u7ePV",
                description: "whyChooseBlock_description__wuU6c",
                list: "whyChooseBlock_list__fKC6p",
            };
        },
        92582: function (e) {
            e.exports = { section: "whyUsBlock_section__LdejH", inner: "whyUsBlock_inner__x9_Wj", title: "whyUsBlock_title__pRaJC", card_wrap: "whyUsBlock_card_wrap__F_SQB" };
        },
        45691: function (e) {
            e.exports = { section: "workBenifits_section__iMpDf", row: "workBenifits_row__OF5OG" };
        },
        46990: function (e) {
            e.exports = { section: "WorkListing_section__rN1bD", btn_wrap: "WorkListing_btn_wrap__Vknqd", heading: "WorkListing_heading__KeitQ", title: "WorkListing_title__2fizb" };
        },
        72928: function (e) {
            e.exports = {
                get_in_touch: "getInTouch_get_in_touch__RqwcG",
                col_left: "getInTouch_col_left__DCNVd",
                col_right: "getInTouch_col_right__n2_Eq",
                cards: "getInTouch_cards__owVLR",
                sub_title: "getInTouch_sub_title__kBlX9",
                links: "getInTouch_links__kKNma",
                map_link: "getInTouch_map_link__kVeku",
                icon: "getInTouch_icon__2GLr9",
                card: "getInTouch_card__Q_Fj5",
                card_img: "getInTouch_card_img__yZRjP",
                card_info: "getInTouch_card_info__MeUEG",
                card_label: "getInTouch_card_label__arUct",
                card_value: "getInTouch_card_value__gHQts",
                address: "getInTouch_address__VICpX",
            };
        },
    },
]);
