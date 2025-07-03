"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [589],
  {
    18693: (e, n, s) => {
      s.d(n, { default: () => o });
      var a = s(95155),
        l = s(6874),
        t = s.n(l),
        i = s(42770),
        r = s(9117);
      let o = function (e) {
        let {
            onLinkClick: n,
            parentClass: s = "mainmenu-nav",
            currentLng: l = "en",
          } = e,
          o = (0, r.v)(l, "homepage.header_menus"),
          d = Array.isArray(o) ? o : [];
        return (0, a.jsx)("nav", {
          className: s,
          children: (0, a.jsx)("ul", {
            className: "mainmenu",
            children:
              d &&
              d.map((e) =>
                (0, a.jsx)(
                  "li",
                  {
                    children:
                      e.url.includes("pdf") || e.url.includes("docs.")
                        ? (0, a.jsx)("a", {
                            href: e.url,
                            target: "_blank",
                            className: "nav-link",
                            children: (0, a.jsx)(i.default, { text: e.label }),
                          })
                        : (0, a.jsx)(t(), {
                            className: "nav-link",
                            href: e.url,
                            onClick: () => {
                              null == n || n(e.url);
                            },
                            children: (0, a.jsx)(i.default, { text: e.label }),
                          }),
                  },
                  null == e ? void 0 : e.label
                )
              ),
          }),
        });
      };
    },
    24975: (e, n, s) => {
      s.d(n, { A: () => d });
      var a = s(95155),
        l = s(66766),
        t = s(35695),
        i = s(6874),
        r = s.n(i);
      let o = [
        { name: "English", short: "en", code: "us", disabled: !1 },
        { name: "Mandarin Chinese", short: "zh", code: "cn", disabled: !1 },
        { name: "Spanish", short: "es", code: "es", disabled: !1 },
        { name: "Russian", short: "ru", code: "ru", disabled: !1 },
        { name: "Portuguese", short: "pt", code: "br", disabled: !1 },
        { name: "Hindi", short: "hi", code: "in", disabled: !1 },
        { name: "Japanese", short: "ja", code: "jp", disabled: !1 },
        { name: "Arabic", short: "ar", code: "ae", disabled: !1 },
        { name: "French", short: "fr", code: "fr", disabled: !1 },
        { name: "German", short: "de", code: "de", disabled: !1 },
        { name: "Turkish", short: "tr", code: "tr", disabled: !1 },
        { name: "Korean", short: "ko", code: "kr", disabled: !1 },
        { name: "Vietnamese", short: "vi", code: "vn", disabled: !1 },
        { name: "Indonesian", short: "id", code: "id", disabled: !1 },
        { name: "Ukrainian", short: "uk", code: "ua", disabled: !1 },
        { name: "Persian (Farsi)", short: "fa", code: "ir", disabled: !1 },
        { name: "Tagalog", short: "tl", code: "ph", disabled: !1 },
        { name: "Thai", short: "th", code: "th", disabled: !1 },
        { name: "Polish", short: "pl", code: "pl", disabled: !1 },
        { name: "Urdu", short: "ur", code: "pk", disabled: !1 },
      ];
      function d() {
        var e;
        let n = (0, t.usePathname)(),
          s = n.split("/")[1],
          i = null == (e = o.find((e) => e.short == s)) ? void 0 : e.code;
        return null;
      }
    },
    43289: (e, n, s) => {
      s.d(n, { A: () => c });
      var a = s(95155),
        l = s(12115),
        t = s(57489),
        i = s(59132),
        r = s(72360),
        o = s(51235),
        d = s(9117);
      function c(e) {
        let { onClose: n = () => {}, currentLng: s = "en" } = e,
          c = (0, l.useRef)(null),
          { address: h } = (0, o.G8)(),
          { open: u } = (0, o.JS)();
        return (0, a.jsxs)("button", {
          ref: c,
          className: "neo-btn-primary btn-header",
          onClick: () => {
            var e, s;
            u(),
              n(),
              null == (e = (s = window).hj) ||
                e.call(s, "event", "connect_wallet");
          },
          children: [
            (0, a.jsx)("span", { className: "frame frame-1" }),
            (0, a.jsx)("span", { className: "frame frame-2" }),
            (0, a.jsx)("span", { className: "frame frame-3" }),
            (0, a.jsx)("span", { className: "frame frame-4" }),
            (0, a.jsx)(t.g, { width: 20, height: 20, icon: i.BA1 }),
            (0, a.jsx)(r.A, {
              text: h
                ? h.slice(0, 6) + "..." + h.slice(-4)
                : (0, d.v)(
                    s,
                    "dashboard.dashboard_login_credentials.btn_label"
                  ),
              triggerRef: c,
            }),
          ],
        });
      }
    },
    63092: (e, n, s) => {
      s.d(n, { A: () => m });
      var a = s(95155),
        l = s(12115),
        t = s(6874),
        i = s.n(t),
        r = s(66766),
        o = s(57489),
        d = s(66481),
        c = s(18693),
        h = s(71139),
        u = s(43289);
      let m = function (e) {
        let { isActive: n, onClose: s } = e,
          t = (0, l.useRef)(null);
        return (
          (0, l.useEffect)(() => {
            function e(e) {
              t.current && !t.current.contains(e.target) && s();
            }
            return (
              n && document.addEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, [n, s]),
          (0, a.jsx)("div", {
            className: "popup-mobile-menu ".concat(n ? "active" : ""),
            children: (0, a.jsxs)("div", {
              className: "inner-wrapper",
              ref: t,
              children: [
                (0, a.jsx)("button", {
                  className: "close-btn",
                  onClick: s,
                  children: (0, a.jsx)(o.g, { icon: d.Jyw }),
                }),
                (0, a.jsx)(i(), {
                  href: "/",
                  className: "logo mb--20",
                  children: (0, a.jsx)(r.default, {
                    src: "/images/logo/logo.gif",
                    width: 232,
                    height: 65,
                    alt: "logo",
                  }),
                }),
                (0, a.jsx)(c.default, { onLinkClick: s }),
                (0, a.jsx)(u.A, { onClose: s }),
                (0, a.jsxs)("ul", {
                  className: "neo-social-media d-flex mt--24",
                  children: [
                    (0, a.jsx)("li", {
                      children: (0, a.jsx)("a", {
                        target: "_blank",
                        onClick: s,
                        href: "https://t.me/neopepe_official",
                        children: (0, a.jsx)(o.g, { icon: h.NFJ }),
                      }),
                    }),
                    (0, a.jsx)("li", {
                      children: (0, a.jsx)("a", {
                        target: "_blank",
                        onClick: s,
                        href: "https://x.com/neopepeworld",
                        children: (0, a.jsx)(o.g, { icon: h.NLt }),
                      }),
                    }),
                    (0, a.jsx)("li", {
                      children: (0, a.jsx)("a", {
                        target: "_blank",
                        onClick: s,
                        href: "https://linktr.ee/neopepeprotocol",
                        children: (0, a.jsx)(o.g, { icon: d.CQO }),
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "pepe-img",
                  children: (0, a.jsx)(r.default, {
                    src: "/images/pepe/step-02.webp",
                    width: 242,
                    height: 300,
                    alt: "Pepe",
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    64330: (e, n, s) => {
      s.d(n, { A: () => C });
      var a = s(95155),
        l = s(66766),
        t = s(12115),
        i = s(57489),
        r = s(59132),
        o = s(14676),
        d = s(33612),
        c = s(58983),
        h = s(53999),
        u = s(44142),
        m = s(52200),
        p = s(2145),
        x = s(74596),
        b = s(6874),
        g = s.n(b);
      let f = function () {
        let e = (0, t.useRef)(null),
          n = (0, t.useRef)(null),
          l = (0, t.useRef)(null),
          [o, d] = (0, t.useState)(!1),
          { address: c } = (0, p.F)();
        return (
          (0, t.useEffect)(() => {
            let e = n.current;
            e &&
              (async () => {
                var n;
                let { Tooltip: a } = await s.e(745).then(s.bind(s, 33126));
                null == (n = a.getInstance(e)) || n.dispose(),
                  (l.current = new a(e, {
                    title: "Copy to clipboard",
                    placement: "top",
                    customClass: "neo-clip-btn-tooltip",
                  }));
              })();
          }, []),
          (0, a.jsxs)("div", {
            className: "clip-box d-flex align-items-center gap-2",
            children: [
              (0, a.jsxs)("span", {
                className: "clip-text",
                ref: e,
                children: [
                  null == c ? void 0 : c.slice(0, 4),
                  "...",
                  null == c ? void 0 : c.slice(-6),
                ],
              }),
              (0, a.jsx)("button", {
                ref: n,
                type: "button",
                className: "clip-btn",
                "data-bs-toggle": "tooltip",
                "data-bs-placement": "top",
                "data-bs-title": "Copy to clipboard",
                onClick: () => {
                  let e = n.current;
                  c &&
                    e &&
                    l.current &&
                    navigator.clipboard
                      .writeText(c)
                      .then(() => {
                        var e, n;
                        d(!0),
                          null == (e = l.current) ||
                            e.setContent({ ".tooltip-inner": "Copied!" }),
                          null == (n = l.current) || n.show(),
                          setTimeout(() => {
                            var e, n;
                            d(!1),
                              null == (e = l.current) ||
                                e.setContent({
                                  ".tooltip-inner": "Copy to clipboard",
                                }),
                              null == (n = l.current) || n.hide();
                          }, 1e3);
                      })
                      .catch((e) => console.error("Copy failed:", e));
                },
                children: o
                  ? (0, a.jsx)(i.g, { icon: r.KTq })
                  : (0, a.jsx)(i.g, { icon: r.jPR }),
              }),
            ],
          })
        );
      };
      var j = s(32960),
        v = s(44494),
        w = s(1196),
        N = s(51235),
        y = s(9117);
      let C = function (e) {
        let { currentLng: n = "en" } = e,
          s = (0, d.A)(),
          { disconnect: b } = (0, m.u)(),
          { switchNetwork: C } = (0, N.HV)(),
          { open: k } = (0, N.JS)(),
          { ethPrice: _ } = (0, u.j)(),
          { fetchNeopBalance: A } = (0, w.A)(),
          { address: E } = (0, p.F)(),
          { data: L } = (0, x.A)({ address: E }),
          { data: M } = (0, j.I)({
            queryKey: ["balance", E],
            queryFn: async () => await A(),
            enabled: !!E,
            refetchOnWindowFocus: !1,
            refetchOnMount: !1,
          }),
          P = (0, t.useMemo)(
            () => c.A.chainsList.find((e) => e.id === s.id),
            [s]
          ),
          [R, T] = (0, t.useState)(!1),
          O = (0, t.useRef)(null);
        return (
          (0, t.useEffect)(() => {
            let e = (e) => {
              O.current && !O.current.contains(e.target) && T(!1);
            };
            return (
              R && document.addEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, [R]),
          (0, a.jsxs)("div", {
            className: "cno-header-user",
            ref: O,
            children: [
              (0, a.jsxs)("button", {
                className: "cno-header-user-btn",
                onClick: () => {
                  window.innerWidth <= 1199 && T((e) => !e);
                },
                children: [
                  (0, a.jsx)("span", {
                    children: (0, y.v)(
                      n,
                      "dashboard.dashboard_login_credentials.account_btn_label"
                    ),
                  }),
                  R
                    ? (0, a.jsx)(i.g, { icon: r.Jyw })
                    : (0, a.jsxs)("svg", {
                        width: "17",
                        height: "16",
                        viewBox: "0 0 17 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          (0, a.jsx)("rect", {
                            x: "0.604492",
                            y: "0.0740967",
                            width: "3",
                            height: "3",
                            fill: "#2AC615",
                          }),
                          (0, a.jsx)("rect", {
                            x: "6.9375",
                            y: "0.0740967",
                            width: "3",
                            height: "3",
                            fill: "#AED6C4",
                          }),
                          (0, a.jsx)("rect", {
                            x: "13.2715",
                            y: "0.0740967",
                            width: "3",
                            height: "3",
                            fill: "#C8E9DB",
                            fillOpacity: "0.5",
                          }),
                          (0, a.jsx)("rect", {
                            x: "0.604492",
                            y: "6.40741",
                            width: "3",
                            height: "3",
                            fill: "#AED6C4",
                            fillOpacity: "0.6",
                          }),
                          (0, a.jsx)("rect", {
                            x: "6.9375",
                            y: "6.40741",
                            width: "3",
                            height: "3",
                            fill: "#C8E9DB",
                            fillOpacity: "0.6",
                          }),
                          (0, a.jsx)("rect", {
                            x: "13.2715",
                            y: "6.40741",
                            width: "3",
                            height: "3",
                            fill: "#2AC615",
                          }),
                          (0, a.jsx)("rect", {
                            x: "0.604492",
                            y: "12.7408",
                            width: "3",
                            height: "3",
                            fill: "#C8E9DB",
                          }),
                          (0, a.jsx)("rect", {
                            x: "6.9375",
                            y: "12.7408",
                            width: "3",
                            height: "3",
                            fill: "#AED6C4",
                          }),
                          (0, a.jsx)("rect", {
                            x: "13.2715",
                            y: "12.7408",
                            width: "3",
                            height: "3",
                            fill: "#C8E9DB",
                            fillOpacity: "0.3",
                          }),
                        ],
                      }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "neo-us-cn-box-wrap ".concat(R ? "active" : ""),
                children: (0, a.jsxs)("div", {
                  className: "neo-us-cn-box",
                  children: [
                    (0, a.jsx)("div", { className: "arrow" }),
                    (0, a.jsxs)("div", {
                      className: "neo-us-cn-top",
                      children: [
                        (0, a.jsx)("span", {
                          className: "subtitle",
                          children: (0, y.v)(
                            n,
                            "dashboard.dashboard_login_credentials.balance_label"
                          ),
                        }),
                        (0, a.jsxs)("div", {
                          className: "dropdown",
                          children: [
                            (0, a.jsxs)("button", {
                              className: "dropdown-toggle",
                              type: "button",
                              "data-bs-toggle": "dropdown",
                              "aria-expanded": "false",
                              children: [
                                P &&
                                  (0, a.jsx)(l.default, {
                                    src: P.logo,
                                    width: 20,
                                    height: 20,
                                    alt: "",
                                  }),
                                null == P ? void 0 : P.name,
                              ],
                            }),
                            (0, a.jsx)("ul", {
                              className: "dropdown-menu",
                              children: c.A.chainsList.map((e, n) =>
                                (0, a.jsx)(
                                  "li",
                                  {
                                    onClick: () =>
                                      C(
                                        c.A.chains.find(
                                          (n) => n.id === e.chain.id
                                        ) || c.A.chains[0]
                                      ),
                                    children: (0, a.jsxs)("div", {
                                      className: "dropdown-item",
                                      children: [
                                        (0, a.jsx)(l.default, {
                                          src: e.logo,
                                          width: 20,
                                          height: 20,
                                          alt: e.name,
                                          className: "mr--8",
                                        }),
                                        e.name,
                                      ],
                                    }),
                                  },
                                  n
                                )
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("h4", {
                      className: "balance mt--8 mb--8",
                      children: [
                        (0, h.$M)(
                          (0, v.c)((null == L ? void 0 : L.value) || 0n)
                        ),
                        " ",
                        s.nativeCurrency.symbol,
                      ],
                    }),
                    (0, a.jsxs)("h6", {
                      className: "balance-convert mb--0",
                      children: [
                        "=$",
                        (0, h.$M)(
                          (0, v.c)((null == L ? void 0 : L.value) || 0n) *
                            (_ || 1)
                        ),
                      ],
                    }),
                    (0, a.jsx)("hr", { className: "separator" }),
                    (0, a.jsxs)("span", {
                      className: "subtitle",
                      children: [
                        (0, y.v)(
                          n,
                          "dashboard.dashboard_login_credentials.total_label"
                        ),
                        " ",
                        "$NEOP",
                      ],
                    }),
                    (0, a.jsxs)("h4", {
                      className: "balance mb--16",
                      children: [
                        (0, a.jsx)(l.default, {
                          className: "mr--8",
                          src: "/images/icon/neo-coin.png",
                          width: 20,
                          height: 20,
                          alt: "Coin",
                        }),
                        (0, h.ZV)(M),
                      ],
                    }),
                    (0, a.jsx)(f, {}),
                    (0, a.jsx)("hr", { className: "separator" }),
                    (0, a.jsxs)(g(), {
                      href: "/dashboard",
                      className: "neo-btn-primary btn-user",
                      children: [
                        (0, a.jsx)("span", {
                          className: "icon",
                          children: (0, a.jsx)(i.g, { icon: o.Qyz }),
                        }),
                        (0, y.v)(
                          n,
                          "dashboard.dashboard_login_credentials.dashboard"
                        ),
                      ],
                    }),
                    (0, a.jsxs)("button", {
                      className: "noe-disconnect-btn mt--8",
                      onClick: () => k(),
                      children: [
                        (0, a.jsx)("span", {
                          className: "icon",
                          children: (0, a.jsx)(i.g, { icon: o.uGS }),
                        }),
                        (0, y.v)(
                          n,
                          "dashboard.dashboard_login_credentials.account_btn_label"
                        ),
                      ],
                    }),
                    (0, a.jsxs)("button", {
                      className: "noe-disconnect-btn mt--8",
                      onClick: () => b(),
                      children: [
                        (0, a.jsx)("span", {
                          className: "icon",
                          children: (0, a.jsx)(i.g, { icon: r.BA1 }),
                        }),
                        (0, y.v)(
                          n,
                          "dashboard.dashboard_login_credentials.disconnect"
                        ),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
    },
    72360: (e, n, s) => {
      s.d(n, { A: () => i });
      var a = s(95155),
        l = s(12115),
        t = s(50802);
      function i(e) {
        let { text: n, fromRight: s = !1, triggerRef: i } = e,
          r = (0, l.useRef)(null);
        function o() {
          let e = "abcdefghijklmnopqrstuvwxyz1234567890",
            n = e[Math.floor(Math.random() * e.length)];
          return Math.random() > 0.5 ? n : n.toUpperCase();
        }
        return (
          (0, l.useEffect)(() => {
            let e = r.current,
              a = (null == i ? void 0 : i.current) || e;
            if (!e || !a) return;
            let l = null == n ? void 0 : n.split(""),
              d = [];
            null == l || l.forEach((e, n) => (d[n] = o()));
            let c = () => {
              let n = t.Ay.timeline(),
                a = 0;
              n.fromTo(
                e,
                { innerHTML: d.join("") },
                {
                  duration: l.length / 20,
                  ease: "power4.in",
                  onUpdate: () => {
                    let t = Math.floor(n.progress() * l.length);
                    if (a !== t) {
                      (a = t), l.forEach((e, n) => (d[n] = o()));
                      let n = l.join("").substring(0, t),
                        i = d.join("").substring(t);
                      s &&
                        ((n = d.join("").substring(0, d.length - t)),
                        (i = l.join("").substring(l.length - t))),
                        (e.innerHTML = n + i);
                    }
                  },
                }
              );
            };
            return (
              a.addEventListener("pointerover", c),
              () => a.removeEventListener("pointerover", c)
            );
          }, [n, s, i]),
          (0, a.jsxs)("span", {
            className: "codedTextWrapper",
            style: {
              position: "relative",
              overflow: "hidden",
              textAlign: "left",
            },
            children: [
              (0, a.jsx)("span", {
                ref: r,
                className: "codedText ".concat(s ? "fromRight" : ""),
                style: { position: "absolute", top: 0, left: 0 },
                children: n,
              }),
              (0, a.jsx)("span", {
                style: { visibility: "hidden", opacity: 0, whiteSpace: "pre" },
                children: n,
              }),
            ],
          })
        );
      }
    },
  },
]);
