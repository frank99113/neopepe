"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6872],
  {
    5242: (e, s, a) => {
      a.d(s, { default: () => z });
      var l = a(95155),
        t = a(12115),
        n = a(66766),
        i = a(6874),
        c = a.n(i),
        r = a(18693),
        d = a(57489),
        o = a(71139),
        h = a(59132),
        x = a(43289),
        m = a(63092),
        j = a(66481),
        p = a(64330),
        u = a(24975),
        g = a(26440);
      let f = {
          src: "/_next/static/media/trans-alert-01.d0e73125.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        N = {
          src: "/_next/static/media/trans-neo-01.35b6735a.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        };
      var v = a(32960),
        w = a(1466),
        b = a(58983),
        M = a(53999);
      let k = () => {
        var e;
        let [s, a] = (0, t.useState)("left");
        (0, t.useEffect)(() => {
          var e, s;
          a(
            "rtl" ===
              (null == (s = document) || null == (e = s.documentElement)
                ? void 0
                : e.getAttribute("dir"))
              ? "right"
              : "left"
          );
        }, []);
        let { data: i } = (0, v.I)({
          queryKey: ["transactions"],
          queryFn: () => w.r.$get("/transactions"),
          refetchInterval: 6e4,
        });
        return i
          ? (0, l.jsx)(l.Fragment, {
              children: (0, l.jsx)("div", {
                className: "header-top-news",
                children: (0, l.jsx)(g.A, {
                  pauseOnHover: !0,
                  className: "marquee-text",
                  speed: 50,
                  direction: s,
                  children:
                    i &&
                    (null == (e = i.data)
                      ? void 0
                      : e.map((e) => {
                          let s =
                            b.A.chainsList.find((s) => s.id === e.chain_id) ||
                            b.A.chainsList[0];
                          return (0, l.jsxs)(
                            "a",
                            {
                              href: ""
                                .concat(
                                  s.chain.blockExplorers.default.url,
                                  "/tx/"
                                )
                                .concat(e.tx_hash),
                              target: "_blank",
                              className: "marquee-elements mr--32",
                              children: [
                                (0, l.jsxs)("span", {
                                  className: "marquee-single-info",
                                  children: [
                                    (0, l.jsx)("div", {
                                      className:
                                        "animate-pulse-wrapper info-icon-img-wrapper",
                                      children: (0, l.jsx)(n.default, {
                                        height: 20,
                                        width: 20,
                                        src: f,
                                        alt: "Transaction icon",
                                        className:
                                          "info-icon-img mb--4 animate-pulse-custom",
                                      }),
                                    }),
                                    (0, l.jsxs)("span", {
                                      className: "info-text",
                                      children: [
                                        e.wallet_address.slice(0, 2),
                                        "...",
                                        e.wallet_address.slice(-6),
                                      ],
                                    }),
                                    (0, l.jsx)("span", {
                                      className: "info-text",
                                      children: "Purchased",
                                    }),
                                    (0, l.jsx)("span", {
                                      className: "info-text",
                                      children: (0, M.ZV)(
                                        e.purchased_amount,
                                        0
                                      ),
                                    }),
                                  ],
                                }),
                                (0, l.jsxs)("span", {
                                  className: "marquee-single-info",
                                  children: [
                                    (0, l.jsx)(n.default, {
                                      height: 16,
                                      width: 16,
                                      src: N,
                                      alt: "Token icon",
                                      className: "info-icon-img",
                                    }),
                                    (0, l.jsx)("span", {
                                      className: "info-text",
                                      children: "$NEOP",
                                    }),
                                  ],
                                }),
                                (0, l.jsxs)("span", {
                                  className: "marquee-single-info",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "info-text",
                                      children: "via ",
                                    }),
                                    (0, l.jsx)(n.default, {
                                      height: 16,
                                      width: 16,
                                      src: s.logo,
                                      alt: "Network icon",
                                      className: "info-icon-img",
                                    }),
                                    (0, l.jsx)("span", {
                                      className: "info-text",
                                      children: s.name,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e.id
                          );
                        })),
                }),
              }),
            })
          : (0, l.jsx)(l.Fragment, {});
      };
      var _ = a(2145);
      let z = function (e) {
        let {
            headerDasboard: s,
            onToggleSidebar: a,
            sidebarOpen: i,
            currentLng: g = "en",
          } = e,
          { address: f, isConnected: N } = (0, _.F)(),
          [v, w] = (0, t.useState)(!1),
          b = () => {
            w(!1);
          },
          [M, z] = (0, t.useState)(!1);
        (0, t.useEffect)(() => {
          let e = () => {
            window.scrollY > 0 ? z(!0) : z(!1);
          };
          return (
            e(),
            window.addEventListener("scroll", e),
            () => window.removeEventListener("scroll", e)
          );
        }, []);
        let L = async () => {
          b();
        };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(k, {}),
            (0, l.jsx)("header", {
              className: "neo-header-parent has-bg-one ".concat(
                s ? "has-header-bottom-separator" : "",
                "  "
              ),
              children: (0, l.jsx)("div", {
                className: "neo-header-sticky has-bg-one "
                  .concat(M ? "visible" : "hidden", "\n          ")
                  .concat(s ? "visible" : "", "\n\n          "),
                children: (0, l.jsx)("div", {
                  className: "container-fluid",
                  children: (0, l.jsxs)("div", {
                    className: "neo-header ".concat(
                      s ? "header-dashboard" : ""
                    ),
                    children: [
                      (0, l.jsxs)("div", {
                        className: "header-left d-flex align-items-center",
                        children: [
                          s &&
                            (0, l.jsx)("button", {
                              className:
                                "neo-dash-panel-btn sidebar-toggler ".concat(
                                  i ? "active" : ""
                                ),
                              onClick: () => a && a(!i),
                              "aria-label": "Toggle Sidebar",
                              children: i
                                ? (0, l.jsx)(d.g, { icon: h.aEb })
                                : (0, l.jsx)(d.g, { icon: h.$qH }),
                            }),
                          (0, l.jsx)(c(), {
                            className: "logo",
                            href: "/",
                            children: (0, l.jsx)(n.default, {
                              src: "/images/logo/logo.gif",
                              width: 232,
                              height: 65,
                              alt: "Logo",
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "d-none d-xl-block",
                            children: (0, l.jsx)(r.default, {
                              currentLng: g,
                              onLinkClick: L,
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "header-right",
                        children: [
                          (0, l.jsxs)("ul", {
                            className: "neo-social-media d-none d-xl-flex",
                            children: [
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)("a", {
                                  target: "_blank",
                                  href: "https://t.me/NeoPepeProtocol",
                                  children: (0, l.jsx)(d.g, { icon: o.NFJ }),
                                }),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)("a", {
                                  target: "_blank",
                                  href: "https://x.com/NeoPepeProtocol",
                                  children: (0, l.jsx)(d.g, { icon: o.NLt }),
                                }),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)("a", {
                                  target: "_blank",
                                  href: "https://linktr.ee/neopepeprotocol",
                                  children: (0, l.jsx)(d.g, { icon: j.CQO }),
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsx)(u.A, {}),
                          !f &&
                            (0, l.jsx)("div", {
                              className: "d-none d-md-flex",
                              children: (0, l.jsx)(x.A, { currentLng: g }),
                            }),
                          (0, l.jsx)("div", {
                            className: "mobile-menu-bar d-block d-xl-none",
                            children: (0, l.jsx)("div", {
                              className: "hamberger",
                              children: (0, l.jsx)("button", {
                                onClick: () => {
                                  w(!v);
                                },
                                className: "hamberger-button",
                                "aria-label": "Open menu",
                                children: (0, l.jsx)(d.g, { icon: h.ckx }),
                              }),
                            }),
                          }),
                          N && (0, l.jsx)(p.A, { currentLng: g }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
            (0, l.jsx)(m.A, { isActive: v, onClose: b }),
          ],
        });
      };
    },
    32204: (e, s, a) => {
      a.d(s, { default: () => n });
      var l = a(95155),
        t = a(12115);
      let n = () => {
        let e = (0, t.useRef)(null);
        return (
          (0, t.useEffect)(() => {
            let s = e.current;
            if (!s) return;
            let a = s.getContext("2d");
            if (!a) return;
            (s.width = window.innerWidth), (s.height = window.innerHeight);
            let l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
              t = Array(Math.floor(s.width / 14)).fill(0),
              n = setInterval(() => {
                (a.fillStyle = "rgba(0, 0, 0, 0.2)"),
                  a.fillRect(0, 0, s.width, s.height),
                  (a.fillStyle = "#2AC615"),
                  (a.font = "".concat(14, "px monospace"));
                for (let e = 0; e < t.length; e++) {
                  let n = l.charAt(Math.floor(Math.random() * l.length));
                  a.fillText(n, 14 * e, 14 * t[e]),
                    14 * t[e] > s.height && Math.random() > 0.975 && (t[e] = 0),
                    t[e]++;
                }
              }, 50),
              i = () => {
                (s.width = window.innerWidth), (s.height = window.innerHeight);
              };
            return (
              window.addEventListener("resize", i),
              () => {
                clearInterval(n), window.removeEventListener("resize", i);
              }
            );
          }, []),
          (0, l.jsx)("canvas", {
            ref: e,
            id: "matrix",
            className: "neo-matrix",
          })
        );
      };
    },
    43268: (e, s, a) => {
      a.d(s, { default: () => x });
      var l = a(95155),
        t = a(71139),
        n = a(57489),
        i = a(59132),
        c = a(12115),
        r = a(72360),
        d = a(35695),
        o = a(66766),
        h = a(9117);
      let x = function (e) {
        var s, a, x, m, j, p;
        let { currentLng: u = "en" } = e,
          g = (0, c.useRef)(null),
          [f, N] = (0, c.useState)(0),
          v = (0, d.useRouter)(),
          w = (0, d.usePathname)(),
          b = (0, h.v)(u, "homepage.social.platforms");
        return (0, l.jsx)("div", {
          className: "neo-call-t-act-area",
          children: (0, l.jsxs)("div", {
            className: "neo-call-t-act-wrap neo-section-gapBottom",
            children: [
              (0, l.jsx)("div", { className: "circle-1" }),
              (0, l.jsx)("div", { className: "circle-2" }),
              (0, l.jsx)("div", {
                className: "call-bg",
                children: (0, l.jsx)(o.default, {
                  src: "/images/background/call-to-action.webp",
                  width: 1820,
                  height: 1029,
                  alt: "Background",
                }),
              }),
              (0, l.jsxs)("div", {
                className: "container",
                children: [
                  (0, l.jsx)("div", {
                    className: "row neo-index-upper-3",
                    children: (0, l.jsx)("div", {
                      className: "col-xl-4 col-lg-6 mx-auto text-center",
                      children: (0, l.jsx)("h2", {
                        className: "neo-section-title-small",
                        dangerouslySetInnerHTML: {
                          __html: (0, h.v)(u, "homepage.social.title"),
                        },
                      }),
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "row neo-index-upper-3",
                    children: (0, l.jsx)("div", {
                      className: "col-xl-10 mx-auto",
                      children: (0, l.jsxs)("div", {
                        className: "neo-call-t-act-box-wrap",
                        children: [
                          (0, l.jsxs)("a", {
                            target: "_blank",
                            href: "https://t.me/NeoPepeProtocol",
                            className: "neo-call-t-act-card ".concat(
                              0 === f ? "active" : ""
                            ),
                            onMouseEnter: () => N(0),
                            children: [
                              (0, l.jsx)("span", {
                                className: "link",
                                children: (0, l.jsx)("svg", {
                                  width: "42",
                                  height: "42",
                                  viewBox: "0 0 42 42",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "aria-hidden": "true",
                                  focusable: "false",
                                  children: (0, l.jsxs)("g", {
                                    fill: "#6B807C",
                                    children: [
                                      (0, l.jsx)("path", {
                                        d: "M30.39 8.29l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M30.39 16.58l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M22.1 8.29l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M22.1 16.58l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M16.57 22.1l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M11.05 27.63l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M30.39 24.86l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M13.81 8.29l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              (0, l.jsx)("span", {
                                className: "icon",
                                children: (0, l.jsx)(n.g, { icon: t.NFJ }),
                              }),
                              (0, l.jsxs)("div", {
                                className: "content",
                                children: [
                                  (0, l.jsx)("h6", {
                                    className: "title",
                                    children:
                                      null == b || null == (s = b[0])
                                        ? void 0
                                        : s.title,
                                  }),
                                  (0, l.jsxs)("p", {
                                    className: "des",
                                    children: [
                                      null == b || null == (a = b[0])
                                        ? void 0
                                        : a.description,
                                      " ",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsxs)("a", {
                            target: "_blank",
                            href: "https://x.com/NeoPepeProtocol",
                            className: "neo-call-t-act-card ".concat(
                              1 === f ? "active" : ""
                            ),
                            onMouseEnter: () => N(1),
                            children: [
                              (0, l.jsx)("span", {
                                className: "link",
                                children: (0, l.jsx)("svg", {
                                  width: "42",
                                  height: "42",
                                  viewBox: "0 0 42 42",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "aria-hidden": "true",
                                  focusable: "false",
                                  children: (0, l.jsxs)("g", {
                                    fill: "#6B807C",
                                    children: [
                                      (0, l.jsx)("path", {
                                        d: "M30.39 8.29l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M30.39 16.58l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M22.1 8.29l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M22.1 16.58l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M16.57 22.1l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M11.05 27.63l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M30.39 24.86l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M13.81 8.29l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              (0, l.jsx)("span", {
                                className: "icon",
                                children: (0, l.jsx)(n.g, { icon: t.NLt }),
                              }),
                              (0, l.jsxs)("div", {
                                className: "content",
                                children: [
                                  (0, l.jsx)("h6", {
                                    className: "title",
                                    children:
                                      null == b || null == (x = b[1])
                                        ? void 0
                                        : x.title,
                                  }),
                                  (0, l.jsx)("p", {
                                    className: "des",
                                    children:
                                      null == b || null == (m = b[1])
                                        ? void 0
                                        : m.description,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsxs)("a", {
                            target: "_blank",
                            href: "https://linktr.ee/neopepeprotocol",
                            className: "neo-call-t-act-card ".concat(
                              2 === f ? "active" : ""
                            ),
                            onMouseEnter: () => N(2),
                            children: [
                              (0, l.jsx)("span", {
                                className: "link",
                                children: (0, l.jsx)("svg", {
                                  width: "42",
                                  height: "42",
                                  viewBox: "0 0 42 42",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "aria-hidden": "true",
                                  focusable: "false",
                                  children: (0, l.jsxs)("g", {
                                    fill: "#6B807C",
                                    children: [
                                      (0, l.jsx)("path", {
                                        d: "M30.39 8.29l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M30.39 16.58l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M22.1 8.29l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M22.1 16.58l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M16.57 22.1l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M11.05 27.63l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M30.39 24.86l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M13.81 8.29l2.76 2.76-2.76 2.76-2.76-2.76 2.76-2.76z",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              (0, l.jsx)("span", {
                                className: "icon",
                                children: (0, l.jsx)(n.g, { icon: i.wic }),
                              }),
                              (0, l.jsxs)("div", {
                                className: "content",
                                children: [
                                  (0, l.jsx)("h6", {
                                    className: "title",
                                    children:
                                      null == b || null == (j = b[2])
                                        ? void 0
                                        : j.title,
                                  }),
                                  (0, l.jsx)("p", {
                                    className: "des",
                                    children:
                                      null == b || null == (p = b[2])
                                        ? void 0
                                        : p.description,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "row",
                    children: (0, l.jsx)("div", {
                      className: "col-xl-7 mx-auto text-center",
                      children: (0, l.jsxs)("div", {
                        className: "neo-call-t-act-content",
                        children: [
                          (0, l.jsxs)("h2", {
                            className:
                              "neo-section-title text-gradient neo-index-upper-3",
                            children: [
                              (0, l.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                  __html: (0, h.v)(
                                    u,
                                    "homepage.cta.title_before"
                                  ),
                                },
                              }),
                              " ",
                              (0, l.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                  __html: (0, h.v)(
                                    u,
                                    "homepage.cta.title_after"
                                  ),
                                },
                              }),
                            ],
                          }),
                          (0, l.jsx)("p", {
                            className: "des neo-index-upper-3",
                            dangerouslySetInnerHTML: {
                              __html: (0, h.v)(u, "homepage.cta.desc"),
                            },
                          }),
                          (0, l.jsx)("div", {
                            className: "btn-wrap neo-index-upper-3",
                            children: (0, l.jsxs)("a", {
                              href: "#presale-box",
                              ref: g,
                              className: "neo-btn-primary",
                              onClick: (e) => {
                                e.preventDefault();
                                let s = "#presale-box";
                                if ("/" === w) {
                                  let e = document.querySelector(s);
                                  e && e.scrollIntoView({ behavior: "smooth" });
                                } else v.push("/".concat(s));
                              },
                              children: [
                                (0, l.jsx)("span", {
                                  className: "frame frame-1",
                                }),
                                (0, l.jsx)("span", {
                                  className: "frame frame-2",
                                }),
                                (0, l.jsx)("span", {
                                  className: "frame frame-3",
                                }),
                                (0, l.jsx)("span", {
                                  className: "frame frame-4",
                                }),
                                (0, l.jsx)(n.g, { icon: i.BA1 }),
                                (0, l.jsx)(r.A, {
                                  text: (0, h.v)(u, "homepage.cta.btn_text"),
                                  triggerRef: g,
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
  },
]);
