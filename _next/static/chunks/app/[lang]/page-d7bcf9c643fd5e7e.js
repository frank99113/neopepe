(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [911],
  {
    504: (e, s, a) => {
      "use strict";
      a.d(s, { default: () => l });
      var t = a(95155),
        i = a(12115),
        n = a(66766),
        r = a(26440);
      let l = function () {
        let [e, s] = (0, i.useState)("left");
        return (
          (0, i.useEffect)(() => {
            var e, a;
            s(
              "rtl" ===
                (null == (a = document) || null == (e = a.documentElement)
                  ? void 0
                  : e.getAttribute("dir"))
                ? "right"
                : "left"
            );
          }, []),
          (0, t.jsx)("div", {
            className: "neo-brand-area",
            children: (0, t.jsx)("div", {
              className: "container",
              children: (0, t.jsx)("div", {
                className: "neo-brand-main-wrap",
                children: (0, t.jsx)(r.A, {
                  pauseOnHover: !0,
                  direction: e,
                  children: (0, t.jsxs)("div", {
                    className: "neo-brand-wrap",
                    children: [
                      (0, t.jsx)("div", {
                        className: "neo-brand-item",
                        children: (0, t.jsx)(n.default, {
                          src: "/images/brand/partner-01.webp",
                          width: 163,
                          height: 40,
                          alt: "brand",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "neo-brand-item",
                        children: (0, t.jsx)(n.default, {
                          src: "/images/brand/partner-02.webp",
                          width: 137,
                          height: 34,
                          alt: "brand",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "neo-brand-item",
                        children: (0, t.jsx)(n.default, {
                          src: "/images/brand/partner-03.webp",
                          width: 203,
                          height: 50,
                          alt: "brand",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "neo-brand-item",
                        children: (0, t.jsx)(n.default, {
                          src: "/images/brand/partner-04.webp",
                          width: 163,
                          height: 40,
                          alt: "brand",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "neo-brand-item",
                        children: (0, t.jsx)(n.default, {
                          src: "/images/brand/partner-05.webp",
                          width: 194,
                          height: 48,
                          alt: "brand",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "neo-brand-item",
                        children: (0, t.jsx)(n.default, {
                          src: "/images/brand/partner-06.webp",
                          width: 126,
                          height: 31,
                          alt: "brand",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "neo-brand-item",
                        children: (0, t.jsx)(n.default, {
                          src: "/images/brand/partner-07.webp",
                          width: 183,
                          height: 50,
                          alt: "brand",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          })
        );
      };
    },
    4958: (e, s, a) => {
      "use strict";
      a.d(s, { default: () => r });
      var t = a(95155),
        i = a(26715),
        n = a(12115);
      function r() {
        let e = (0, i.jE)().getQueryData(["transactions"]);
        return (
          (0, n.useEffect)(() => {
            if (e) {
              var s;
              null == (s = document.getElementById("presale-box")) ||
                s.classList.add("has-top-bar");
            }
          }, [e]),
          (0, t.jsx)(t.Fragment, {})
        );
      }
    },
    9964: (e, s, a) => {
      "use strict";
      a.d(s, { default: () => l });
      var t = a(95155),
        i = a(12115),
        n = a(32621),
        r = a.n(n);
      let l = (e) => {
        let { text: s, speed: a = 50, scrambleChars: n = "*&%!#123ABC" } = e,
          l = (0, i.useRef)(null),
          [c, o] = (0, i.useState)(!1),
          [d, m] = (0, i.useState)(""),
          h = new (r())();
        return (
          (0, i.useEffect)(() => {
            let e = JSON.stringify(s);
            e !== d && (o(!1), m(e));
          }, [s]),
          (0, i.useEffect)(() => {
            if (!l.current || c) return;
            let e = new IntersectionObserver(
              (e) => {
                let [s] = e;
                s.isIntersecting && !c && o(!0);
              },
              { threshold: 0.5 }
            );
            return e.observe(l.current), () => e.disconnect();
          }, [c]),
          (0, i.useEffect)(() => {
            if (!c || !l.current) return;
            let e = l.current.querySelectorAll("span[data-char]"),
              s = Array.from(e).map((e) => e.getAttribute("data-char") || ""),
              t = 0,
              i = 0,
              r = () => {
                if (t < s.length)
                  if (i < 6) {
                    let l = Math.floor(Math.random() * n.length);
                    e.forEach((e, a) => {
                      e.textContent = a < t ? s[a] : a === t ? n[l] : "";
                    }),
                      i++,
                      setTimeout(r, a);
                  } else t++, (i = 0), r();
                else
                  e.forEach((e, a) => {
                    e.textContent = s[a];
                  });
              };
            r();
          }, [c, a, n, d]),
          (0, t.jsx)("div", {
            ref: l,
            children: s.map((e, s) =>
              "string" == typeof e.text
                ? h
                    .splitGraphemes(e.text)
                    .map((a, i) =>
                      (0, t.jsx)(
                        "span",
                        {
                          "data-char": a,
                          className: e.className,
                          style: { display: "inline-block", whiteSpace: "pre" },
                          children: "\xa0",
                        },
                        "".concat(s, "-").concat(i)
                      )
                    )
                : null
            ),
          })
        );
      };
    },
    38168: (e, s, a) => {
      "use strict";
      a.d(s, { default: () => o });
      var t = a(95155),
        i = a(27677);
      a(2252), a(59408);
      var n = a(82325),
        r = a(9964),
        l = a(12115),
        c = a(9117);
      let o = function (e) {
        let { currentLng: s = "en" } = e,
          [a, o] = (0, l.useState)(0),
          d = (0, c.v)(s, "homepage.roadmap.cards");
        return (0, t.jsx)("div", {
          id: "roadmap",
          className: "neo-roadmap-area neo-section-gap-bigTop",
          children: (0, t.jsx)("div", {
            className: "container",
            children: (0, t.jsxs)("div", {
              className: "neo-roadmap-wrap",
              children: [
                (0, t.jsxs)("div", {
                  className:
                    "title-wrap d-flex flex-column justify-content-between",
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("h2", {
                          className: "neo-section-title",
                          children: (0, t.jsx)(r.default, {
                            text: [
                              {
                                text: (0, c.v)(s, "homepage.roadmap.title"),
                                className: "",
                              },
                            ],
                            speed: 10,
                          }),
                        }),
                        (0, t.jsx)("p", {
                          dangerouslySetInnerHTML: {
                            __html: (0, c.v)(s, "homepage.roadmap.subtitle"),
                          },
                        }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className: "b4 bootom-last mt--20",
                      dangerouslySetInnerHTML: {
                        __html: (0, c.v)(s, "homepage.roadmap.content"),
                      },
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "neo-roadmap-slider",
                  children: (0, t.jsx)(i.RC, {
                    loop: !0,
                    modules: [n.Vx],
                    spaceBetween: 24,
                    slidesPerView: 1.1,
                    navigation: {
                      nextEl: ".roadmap-slider-next",
                      prevEl: ".roadmap-slider-prev",
                    },
                    breakpoints: {
                      640: { slidesPerView: 1.3 },
                      768: { slidesPerView: 2 },
                      992: { slidesPerView: 2 },
                      1200: { slidesPerView: 4 },
                    },
                    children:
                      d &&
                      Object.values(d).map((e, s) => {
                        var n, r, l;
                        return (0, t.jsx)(
                          i.qr,
                          {
                            children: (0, t.jsx)("div", {
                              className: "neo-roadmap-card ".concat(
                                a === s ? "active" : ""
                              ),
                              onMouseEnter: () => o(s),
                              children: (0, t.jsxs)("div", {
                                className: "card-content",
                                children: [
                                  (0, t.jsx)("h3", {
                                    className: "title h2",
                                    children: null == e ? void 0 : e.quarter,
                                  }),
                                  (0, t.jsx)("h4", {
                                    className: "subtitle",
                                    children: null == e ? void 0 : e.label,
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "neo-progress-bar",
                                    children: (0, t.jsx)("div", {
                                      className: "progress-item",
                                      style: {
                                        width: "".concat(
                                          (null == e ? void 0 : e.items) &&
                                            (null == (n = e.items)
                                              ? void 0
                                              : n.length) > 0
                                            ? ((null == (r = e.items)
                                                ? void 0
                                                : r.filter((e) => e.is_check)
                                                    .length) /
                                                (null == (l = e.items)
                                                  ? void 0
                                                  : l.length)) *
                                                100
                                            : 0,
                                          "%"
                                        ),
                                      },
                                    }),
                                  }),
                                  (0, t.jsx)("ul", {
                                    className: "card-list",
                                    children:
                                      e.items &&
                                      e.items.map((e, s) =>
                                        (0, t.jsx)(
                                          "li",
                                          {
                                            className: e.is_check
                                              ? "check"
                                              : "",
                                            children: e.label,
                                          },
                                          s
                                        )
                                      ),
                                  }),
                                ],
                              }),
                            }),
                          },
                          s
                        );
                      }),
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "neo-roadmap-slider-nav",
                  children: [
                    (0, t.jsx)("button", {
                      className: "roadmap-slider-prev",
                      children: (0, t.jsx)("svg", {
                        width: "17",
                        height: "15",
                        viewBox: "0 0 17 15",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-hidden": "true",
                        focusable: "false",
                        children: (0, t.jsxs)("g", {
                          fill: "#B2B2B2",
                          children: [
                            (0, t.jsx)("rect", {
                              x: "0",
                              y: "6.375",
                              width: "2.125",
                              height: "2.125",
                            }),
                            (0, t.jsx)("rect", {
                              x: "3.189",
                              y: "9.563",
                              width: "2.125",
                              height: "2.125",
                            }),
                            (0, t.jsx)("rect", {
                              x: "3.189",
                              y: "3.187",
                              width: "2.125",
                              height: "2.125",
                            }),
                            (0, t.jsx)("rect", {
                              x: "6.375",
                              y: "6.375",
                              width: "2.125",
                              height: "2.125",
                            }),
                            (0, t.jsx)("rect", {
                              x: "10.626",
                              y: "6.375",
                              width: "2.125",
                              height: "2.125",
                            }),
                            (0, t.jsx)("rect", {
                              x: "14.875",
                              y: "6.375",
                              width: "2.125",
                              height: "2.125",
                            }),
                            (0, t.jsx)("rect", {
                              x: "6.375",
                              y: "12.75",
                              width: "2.125",
                              height: "2.125",
                            }),
                            (0, t.jsx)("rect", {
                              x: "6.375",
                              y: "0",
                              width: "2.125",
                              height: "2.125",
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, t.jsx)("button", {
                      className: "roadmap-slider-next",
                      children: (0, t.jsx)("svg", {
                        width: "17",
                        height: "15",
                        viewBox: "0 0 17 15",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-hidden": "true",
                        focusable: "false",
                        children: (0, t.jsxs)("g", {
                          fill: "#B2B2B2",
                          children: [
                            (0, t.jsx)("rect", {
                              x: "0",
                              y: "6.375",
                              width: "2.125",
                              height: "2.125",
                            }),
                            (0, t.jsx)("rect", {
                              x: "3.189",
                              y: "9.563",
                              width: "2.125",
                              height: "2.125",
                            }),
                            (0, t.jsx)("rect", {
                              x: "3.189",
                              y: "3.187",
                              width: "2.125",
                              height: "2.125",
                            }),
                            (0, t.jsx)("rect", {
                              x: "6.375",
                              y: "6.375",
                              width: "2.125",
                              height: "2.125",
                            }),
                            (0, t.jsx)("rect", {
                              x: "10.626",
                              y: "6.375",
                              width: "2.125",
                              height: "2.125",
                            }),
                            (0, t.jsx)("rect", {
                              x: "14.875",
                              y: "6.375",
                              width: "2.125",
                              height: "2.125",
                            }),
                            (0, t.jsx)("rect", {
                              x: "6.375",
                              y: "12.75",
                              width: "2.125",
                              height: "2.125",
                            }),
                            (0, t.jsx)("rect", {
                              x: "6.375",
                              y: "0",
                              width: "2.125",
                              height: "2.125",
                            }),
                          ],
                        }),
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
    39064: (e, s, a) => {
      "use strict";
      a.d(s, { default: () => m });
      var t = a(95155),
        i = a(57489),
        n = a(59132),
        r = a(12115),
        l = a(72360),
        c = a(9964),
        o = a(35695),
        d = a(9117);
      let m = function (e) {
        var s;
        let { currentLng: a = "en" } = e,
          m = (0, d.v)(a, "homepage.faq"),
          [h, u] = (0, r.useState)(0),
          x = (e) => {
            u((s) => (s === e ? -1 : e));
          },
          p = (0, r.useRef)(null),
          g = (0, o.useRouter)(),
          j = (0, o.usePathname)();
        return m
          ? (0, t.jsx)("div", {
              className: "neo-faq-area neo-section-gap-big",
              id: "faqs",
              children: (0, t.jsx)("div", {
                className: "container",
                children: (0, t.jsx)("div", {
                  className: "row",
                  children: (0, t.jsx)("div", {
                    className: "col-xl-8 col-lg-10 mx-auto",
                    children: (0, t.jsxs)("div", {
                      className: "neo-faq-box-wrap",
                      children: [
                        (0, t.jsx)("span", { className: "frame frame-1" }),
                        (0, t.jsx)("span", { className: "frame frame-2" }),
                        (0, t.jsx)("span", { className: "frame frame-3" }),
                        (0, t.jsx)("span", { className: "frame frame-4" }),
                        (0, t.jsxs)("div", {
                          className: "neo-faq-box",
                          children: [
                            (0, t.jsx)("div", {
                              className: "row",
                              children: (0, t.jsxs)("div", {
                                className:
                                  "col-lg-8 col-xl-7 mx-auto text-center",
                                children: [
                                  (0, t.jsx)("h2", {
                                    className: "neo-section-title",
                                    children: (0, t.jsx)(c.default, {
                                      text: [{ text: m.title, className: "" }],
                                      speed: 10,
                                    }),
                                  }),
                                  (0, t.jsx)("p", {
                                    className: "mb--0",
                                    children: m.content,
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: "row",
                              children: (0, t.jsx)("div", {
                                className: "col-xl-10 col-lg-11 mx-auto",
                                children: (0, t.jsx)("div", {
                                  className: "accordion",
                                  id: "neoAccordion",
                                  children:
                                    null == (s = m.items)
                                      ? void 0
                                      : s.map((e, s) =>
                                          (0, t.jsxs)(
                                            "div",
                                            {
                                              className: "accordion-item",
                                              children: [
                                                (0, t.jsx)("h2", {
                                                  className: "accordion-header",
                                                  children: (0, t.jsxs)(
                                                    "button",
                                                    {
                                                      className:
                                                        "accordion-button ".concat(
                                                          0 !== s
                                                            ? "collapsed"
                                                            : ""
                                                        ),
                                                      type: "button",
                                                      "data-bs-toggle":
                                                        "collapse",
                                                      "data-bs-target":
                                                        "#collapse".concat(s),
                                                      "aria-expanded":
                                                        0 === s
                                                          ? "true"
                                                          : "false",
                                                      "aria-controls":
                                                        "collapse".concat(s),
                                                      "data-neo-faq":
                                                        "item-".concat(s + 1),
                                                      onClick: () => x(s),
                                                      children: [
                                                        e.question,
                                                        (0, t.jsx)("span", {
                                                          className: "icon",
                                                          children: (0, t.jsx)(
                                                            i.g,
                                                            {
                                                              icon:
                                                                h === s
                                                                  ? n.EZy
                                                                  : n.QLR,
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    }
                                                  ),
                                                }),
                                                (0, t.jsx)("div", {
                                                  id: "collapse".concat(s),
                                                  className:
                                                    "accordion-collapse collapse ".concat(
                                                      0 === s ? "show" : ""
                                                    ),
                                                  "data-bs-parent":
                                                    "#neoAccordion",
                                                  children: (0, t.jsx)("div", {
                                                    className: "accordion-body",
                                                    children: (0, t.jsx)("p", {
                                                      dangerouslySetInnerHTML: {
                                                        __html: e.answer,
                                                      },
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            },
                                            s
                                          )
                                        ),
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "neo-index-upper d-flex justify-content-center mt--48",
                          children: (0, t.jsxs)("a", {
                            href: "https://app.uniswap.org/swap?outputCurrency=0xE928ada2e355CEA7724Df8F2819960c490E83764",
                            ref: p,
                            className: "neo-btn-primary",
                            onClick: (e) => {
                              e.preventDefault();
                              let s = "#presale-box";
                              if ("/" === j) {
                                let e = document.querySelector(s);
                                e && e.scrollIntoView({ behavior: "smooth" });
                              } else g.push("/".concat(s));
                            },
                            children: [
                              (0, t.jsx)(i.g, { icon: n.BA1 }),
                              (0, t.jsx)(l.A, {
                                text: (0, d.v)(
                                  a,
                                  "homepage.how_to_buy.button_text"
                                ),
                                triggerRef: p,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          : null;
      };
    },
    39255: (e, s, a) => {
      "use strict";
      a.d(s, { default: () => m });
      var t = a(95155),
        i = a(66766),
        n = a(12115),
        r = a(50802);
      function l(e, s) {
        let a = 0,
          t = 0;
        return (
          "touches" in e && e.touches.length > 0
            ? ((a = e.touches[0].clientX), (t = e.touches[0].clientY))
            : "clientX" in e && ((a = e.clientX), (t = e.clientY)),
          { x: a - s.left, y: t - s.top }
        );
      }
      class c {
        initEvents() {
          (this.resize = () => {
            r.os.set(this.DOM.el, this.defaultStyle), this.getRect();
          }),
            window.addEventListener("resize", this.resize);
        }
        getRect() {
          this.rect = this.DOM.el.getBoundingClientRect();
        }
        constructor(e) {
          (this.DOM = { el: null, inner: null }),
            (this.defaultStyle = { scale: 1, x: 0, y: 0, opacity: 0 }),
            (this.rect = null),
            (this.DOM.el = e),
            (this.DOM.inner = this.DOM.el.querySelector(".content__img-inner")),
            this.getRect(),
            this.initEvents();
        }
      }
      class o {
        render() {
          var e, s, a, t;
          let i =
            ((a = this.mousePos),
            (t = this.lastMousePos),
            Math.hypot(a.x - t.x, a.y - t.y));
          (this.cacheMousePos.x =
            ((e = this.cacheMousePos.x), 0.9 * e + 0.1 * this.mousePos.x)),
            (this.cacheMousePos.y =
              ((s = this.cacheMousePos.y), 0.9 * s + 0.1 * this.mousePos.y)),
            i > this.threshold &&
              (this.showNextImage(),
              (this.lastMousePos = { ...this.mousePos })),
            this.isIdle && 1 !== this.zIndexVal && (this.zIndexVal = 1),
            requestAnimationFrame(() => this.render());
        }
        showNextImage() {
          var e, s, a, t, i, n, l, c;
          ++this.zIndexVal,
            (this.imgPosition =
              this.imgPosition < this.imagesTotal - 1
                ? this.imgPosition + 1
                : 0);
          let o = this.images[this.imgPosition];
          r.os.killTweensOf(o.DOM.el),
            r.os
              .timeline({
                onStart: () => this.onImageActivated(),
                onComplete: () => this.onImageDeactivated(),
              })
              .fromTo(
                o.DOM.el,
                {
                  opacity: 1,
                  scale: 0,
                  zIndex: this.zIndexVal,
                  x:
                    this.cacheMousePos.x -
                    (null != (i = null == (e = o.rect) ? void 0 : e.width)
                      ? i
                      : 0) /
                      2,
                  y:
                    this.cacheMousePos.y -
                    (null != (n = null == (s = o.rect) ? void 0 : s.height)
                      ? n
                      : 0) /
                      2,
                },
                {
                  duration: 0.4,
                  ease: "power1",
                  scale: 1,
                  x:
                    this.mousePos.x -
                    (null != (l = null == (a = o.rect) ? void 0 : a.width)
                      ? l
                      : 0) /
                      2,
                  y:
                    this.mousePos.y -
                    (null != (c = null == (t = o.rect) ? void 0 : t.height)
                      ? c
                      : 0) /
                      2,
                },
                0
              )
              .fromTo(
                o.DOM.inner,
                { scale: 1, filter: "brightness(250%)" },
                {
                  duration: 0.4,
                  ease: "power1",
                  scale: 1,
                  filter: "brightness(100%)",
                },
                0
              )
              .to(
                o.DOM.el,
                { duration: 0.4, ease: "power2", opacity: 0, scale: 0.2 },
                0.45
              );
        }
        onImageActivated() {
          this.activeImagesCount++, (this.isIdle = !1);
        }
        onImageDeactivated() {
          this.activeImagesCount--,
            0 === this.activeImagesCount && (this.isIdle = !0);
        }
        constructor(e) {
          (this.container = e),
            (this.DOM = { el: e }),
            (this.images = [...e.querySelectorAll(".content__img")].map(
              (e) => new c(e)
            )),
            (this.imagesTotal = this.images.length),
            (this.imgPosition = 0),
            (this.zIndexVal = 1),
            (this.activeImagesCount = 0),
            (this.isIdle = !0),
            (this.threshold = 60),
            (this.mousePos = { x: 0, y: 0 }),
            (this.lastMousePos = { x: 0, y: 0 }),
            (this.cacheMousePos = { x: 0, y: 0 });
          let s = (s) => {
            let a = e.getBoundingClientRect();
            this.mousePos = l(s, a);
          };
          e.addEventListener("mousemove", s),
            e.addEventListener("touchmove", s);
          let a = (s) => {
            let t = e.getBoundingClientRect();
            (this.mousePos = l(s, t)),
              (this.cacheMousePos = { ...this.mousePos }),
              requestAnimationFrame(() => this.render()),
              e.removeEventListener("mousemove", a),
              e.removeEventListener("touchmove", a);
          };
          e.addEventListener("mousemove", a),
            e.addEventListener("touchmove", a);
        }
      }
      function d(e) {
        let { items: s = [] } = e,
          a = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            a.current && new o(a.current);
          }, [s]),
          (0, t.jsx)("div", {
            className: "neo_iamge_trail",
            ref: a,
            children: s.map((e, s) =>
              (0, t.jsx)(
                "div",
                {
                  className: "content__img",
                  children: (0, t.jsx)("div", {
                    className: "content__img-inner",
                    style: { backgroundImage: "url(".concat(e, ")") },
                  }),
                },
                s
              )
            ),
          })
        );
      }
      let m = function () {
        return (0, t.jsxs)("div", {
          className: "neo-action-area neo-section-gapBottom",
          children: [
            (0, t.jsx)(d, {
              items: [
                "/images/hero/icon/coin-pepe.webp",
                "/images/hero/icon/coin-pepe.webp",
                "/images/hero/icon/coin-pepe.webp",
                "/images/hero/icon/coin-pepe.webp",
                "/images/hero/icon/coin-pepe.webp",
                "/images/hero/icon/coin-pepe.webp",
                "/images/hero/icon/coin-pepe.webp",
                "/images/hero/icon/coin-pepe.webp",
              ],
            }),
            (0, t.jsx)("div", {
              className: "action-bg",
              children: (0, t.jsx)(i.default, {
                src: "/images/background/neo-action.webp",
                width: 1490,
                height: 993,
                alt: "background",
              }),
            }),
            (0, t.jsx)("div", {
              className: "container",
              children: (0, t.jsx)("div", {
                className: "neo-action-wrap",
                children: (0, t.jsx)(i.default, {
                  src: "/images/pepe/pepe-03.gif",
                  width: 700,
                  height: 1e3,
                  alt: "pepe",
                  quality: 40,
                  priority: !0,
                }),
              }),
            }),
          ],
        });
      };
    },
    58124: (e, s, a) => {
      "use strict";
      a.d(s, { default: () => c });
      var t = a(95155),
        i = a(66766),
        n = a(12115);
      let r = function () {
          return (0, t.jsx)("div", {
            className: "svg-animation-dot",
            children: (0, t.jsxs)("svg", {
              width: "1485",
              height: "290",
              viewBox: "0 0 1485 290",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, t.jsx)("defs", {
                  children: (0, t.jsxs)("filter", {
                    id: "glow",
                    x: "-50%",
                    y: "-50%",
                    width: "200%",
                    height: "200%",
                    children: [
                      (0, t.jsx)("feGaussianBlur", {
                        stdDeviation: "4",
                        result: "blur",
                      }),
                      (0, t.jsxs)("feMerge", {
                        children: [
                          (0, t.jsx)("feMergeNode", { in: "blur" }),
                          (0, t.jsx)("feMergeNode", { in: "SourceGraphic" }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, t.jsxs)("circle", {
                  cx: "24.85",
                  cy: "114.07",
                  r: "4.5",
                  fill: "#36B100",
                  filter: "url(#glow)",
                  children: [
                    (0, t.jsx)("animate", {
                      attributeName: "r",
                      values: "3.5;5.5;3.5",
                      dur: "3s",
                      begin: "0s",
                      repeatCount: "indefinite",
                    }),
                    (0, t.jsx)("animate", {
                      attributeName: "opacity",
                      values: "0.4;1;0.4",
                      dur: "3s",
                      begin: "0s",
                      repeatCount: "indefinite",
                    }),
                  ],
                }),
                (0, t.jsxs)("circle", {
                  cx: "337.2",
                  cy: "82.07",
                  r: "6",
                  fill: "#36B100",
                  filter: "url(#glow)",
                  children: [
                    (0, t.jsx)("animate", {
                      attributeName: "r",
                      values: "4.5;7;4.5",
                      dur: "3.5s",
                      begin: "0.2s",
                      repeatCount: "indefinite",
                    }),
                    (0, t.jsx)("animate", {
                      attributeName: "opacity",
                      values: "0.3;1;0.3",
                      dur: "3.5s",
                      begin: "0.2s",
                      repeatCount: "indefinite",
                    }),
                  ],
                }),
                (0, t.jsxs)("circle", {
                  cx: "74.32",
                  cy: "240.18",
                  r: "2",
                  fill: "#36B100",
                  filter: "url(#glow)",
                  children: [
                    (0, t.jsx)("animate", {
                      attributeName: "r",
                      values: "1;3;1",
                      dur: "2.5s",
                      begin: "0.4s",
                      repeatCount: "indefinite",
                    }),
                    (0, t.jsx)("animate", {
                      attributeName: "opacity",
                      values: "0.2;0.8;0.2",
                      dur: "2.5s",
                      begin: "0.4s",
                      repeatCount: "indefinite",
                    }),
                  ],
                }),
                (0, t.jsxs)("circle", {
                  cx: "210.67",
                  cy: "270.3",
                  r: "5",
                  fill: "#36B100",
                  filter: "url(#glow)",
                  children: [
                    (0, t.jsx)("animate", {
                      attributeName: "r",
                      values: "3.5;6.5;3.5",
                      dur: "3.2s",
                      begin: "0.6s",
                      repeatCount: "indefinite",
                    }),
                    (0, t.jsx)("animate", {
                      attributeName: "opacity",
                      values: "0.3;1;0.3",
                      dur: "3.2s",
                      begin: "0.6s",
                      repeatCount: "indefinite",
                    }),
                  ],
                }),
                (0, t.jsxs)("circle", {
                  cx: "125.45",
                  cy: "40.52",
                  r: "3.5",
                  fill: "#36B100",
                  filter: "url(#glow)",
                  children: [
                    (0, t.jsx)("animate", {
                      attributeName: "r",
                      values: "2;4.5;2",
                      dur: "2.8s",
                      begin: "0.8s",
                      repeatCount: "indefinite",
                    }),
                    (0, t.jsx)("animate", {
                      attributeName: "opacity",
                      values: "0.3;0.9;0.3",
                      dur: "2.8s",
                      begin: "0.8s",
                      repeatCount: "indefinite",
                    }),
                  ],
                }),
                (0, t.jsxs)("circle", {
                  cx: "1321.75",
                  cy: "24.85",
                  r: "4.5",
                  fill: "#36B100",
                  filter: "url(#glow)",
                  children: [
                    (0, t.jsx)("animate", {
                      attributeName: "r",
                      values: "3.5;5.5;3.5",
                      dur: "3s",
                      begin: "1s",
                      repeatCount: "indefinite",
                    }),
                    (0, t.jsx)("animate", {
                      attributeName: "opacity",
                      values: "0.4;1;0.4",
                      dur: "3s",
                      begin: "1s",
                      repeatCount: "indefinite",
                    }),
                  ],
                }),
                (0, t.jsxs)("circle", {
                  cx: "1449.15",
                  cy: "109.63",
                  r: "6.2",
                  fill: "#36B100",
                  filter: "url(#glow)",
                  children: [
                    (0, t.jsx)("animate", {
                      attributeName: "r",
                      values: "4.5;6.8;4.5",
                      dur: "3.8s",
                      begin: "1.2s",
                      repeatCount: "indefinite",
                    }),
                    (0, t.jsx)("animate", {
                      attributeName: "opacity",
                      values: "0.3;1;0.3",
                      dur: "3.8s",
                      begin: "1.2s",
                      repeatCount: "indefinite",
                    }),
                  ],
                }),
                (0, t.jsxs)("circle", {
                  cx: "1405.6",
                  cy: "200.8",
                  r: "5.5",
                  fill: "#36B100",
                  filter: "url(#glow)",
                  children: [
                    (0, t.jsx)("animate", {
                      attributeName: "r",
                      values: "4;6.5;4",
                      dur: "3.4s",
                      begin: "1.4s",
                      repeatCount: "indefinite",
                    }),
                    (0, t.jsx)("animate", {
                      attributeName: "opacity",
                      values: "0.2;1;0.2",
                      dur: "3.4s",
                      begin: "1.4s",
                      repeatCount: "indefinite",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        l = function (e) {
          let { addedClass: s = "" } = e,
            a = Array.from({ length: 34 }, (e, s) => {
              let a = (2 * Math.PI * s) / 34;
              return {
                x: 1500 + 1400 * Math.cos(a),
                y: 1500 + 1400 * Math.sin(a),
              };
            });
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", {
                className: "coin-animation-1 ".concat(s),
                children: (0, t.jsx)("div", {
                  className: "circle-container",
                  style: {
                    width: "".concat(3e3, "px"),
                    height: "".concat(3e3, "px"),
                  },
                  children: a.map((e, s) =>
                    (0, t.jsx)(
                      "span",
                      {
                        style: {
                          left: "".concat(e.x, "px"),
                          top: "".concat(e.y, "px"),
                          position: "absolute",
                          transform: "translate(-50%, -50%)",
                        },
                        className: "coin-icon-anim",
                        children: (0, t.jsx)(
                          i.default,
                          {
                            src: "/images/hero/icon/coin-".concat(
                              String(s + 1).padStart(2, "0"),
                              ".png"
                            ),
                            alt: "Coin ".concat(s + 1),
                            width: 65,
                            height: 65,
                          },
                          s
                        ),
                      },
                      s
                    )
                  ),
                }),
              }),
              (0, t.jsx)("div", {
                className: "coin-animation-2",
                children: (0, t.jsx)("div", {
                  className: "circle-container",
                  style: {
                    width: "".concat(3e3, "px"),
                    height: "".concat(3e3, "px"),
                  },
                  children: a.map((e, s) =>
                    (0, t.jsx)(
                      "span",
                      {
                        className: "coin-icon-anim",
                        style: {
                          left: "".concat(e.x, "px"),
                          top: "".concat(e.y, "px"),
                          position: "absolute",
                          transform: "translate(-50%, -50%)",
                        },
                        children: (0, t.jsx)(
                          i.default,
                          {
                            src: "/images/hero/icon/coin-pepe.webp",
                            alt: "Coin ".concat(s + 1),
                            width: 65,
                            height: 65,
                          },
                          s
                        ),
                      },
                      s
                    )
                  ),
                }),
              }),
            ],
          });
        };
      function c() {
        let [e, s] = (0, n.useState)(!0),
          [a, c] = (0, n.useState)(!0);
        return (
          (0, n.useEffect)(() => {
            let e = () => s(window.innerWidth >= 768);
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          (0, n.useEffect)(() => {
            let e = () => c(window.innerWidth >= 1399);
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          (0, t.jsxs)("div", {
            className: "neo-hero-animation",
            children: [
              e &&
                (0, t.jsxs)("div", {
                  className: "image-wrap",
                  children: [
                    (0, t.jsx)("div", {
                      className: "img-1",
                      children: (0, t.jsx)(i.default, {
                        src: "/images/hero/neo-fight.webp",
                        width: 503,
                        height: 299,
                        alt: "neo",
                        loading: "eager",
                        priority: !0,
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "img-2",
                      children: (0, t.jsx)(i.default, {
                        src: "/images/hero/neo-gun.gif",
                        width: 690,
                        height: 550,
                        alt: "neo",
                        loading: "eager",
                        priority: !0,
                      }),
                    }),
                  ],
                }),
              a &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("div", { className: "circle-shadow-left" }),
                    (0, t.jsx)("div", { className: "circle-shadow-right" }),
                  ],
                }),
              e && (0, t.jsx)("div", { className: "circle-1" }),
              (0, t.jsx)(r, {}),
              e && (0, t.jsx)("div", { className: "circle-2" }),
              e && (0, t.jsx)(l, {}),
            ],
          })
        );
      }
    },
    61414: (e, s, a) => {
      Promise.resolve().then(a.bind(a, 97068)),
        Promise.resolve().then(a.bind(a, 72668)),
        Promise.resolve().then(a.bind(a, 504)),
        Promise.resolve().then(a.bind(a, 43268)),
        Promise.resolve().then(a.bind(a, 39064)),
        Promise.resolve().then(a.bind(a, 5242)),
        Promise.resolve().then(a.bind(a, 4958)),
        Promise.resolve().then(a.bind(a, 58124)),
        Promise.resolve().then(a.bind(a, 80265)),
        Promise.resolve().then(a.bind(a, 67228)),
        Promise.resolve().then(a.bind(a, 39255)),
        Promise.resolve().then(a.bind(a, 63792)),
        Promise.resolve().then(a.bind(a, 38168)),
        Promise.resolve().then(a.bind(a, 80209)),
        Promise.resolve().then(a.bind(a, 42770)),
        Promise.resolve().then(a.bind(a, 32204)),
        Promise.resolve().then(a.t.bind(a, 6874, 23)),
        Promise.resolve().then(a.t.bind(a, 33063, 23));
    },
    63792: (e, s, a) => {
      "use strict";
      a.d(s, { default: () => c });
      var t = a(95155),
        i = a(66766),
        n = a(12115),
        r = a(9964),
        l = a(9117);
      let c = function (e) {
        let { currentLng: s = "en" } = e,
          [a, c] = (0, n.useState)(!0);
        return (
          (0, n.useEffect)(() => {
            let e = () => c(window.innerWidth >= 768);
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          (0, t.jsx)("div", {
            className: "neo-partner-area neo-section-gap2Bottom",
            children: (0, t.jsxs)("div", {
              className: "container",
              children: [
                a &&
                  (0, t.jsx)("div", {
                    className: "pepe-01",
                    children: (0, t.jsx)(i.default, {
                      src: "/images/pepe/pepe-02.gif",
                      width: 1100,
                      height: 650,
                      alt: "pepe",
                    }),
                  }),
                (0, t.jsx)("div", {
                  className: "row neo-index-upper",
                  children: (0, t.jsx)("div", {
                    className: "col-xl-5 col-lg-7 mx-auto text-center",
                    children: (0, t.jsxs)("div", {
                      className: "position-relative",
                      children: [
                        (0, t.jsx)("h2", {
                          className: "neo-section-title",
                          children: (0, t.jsx)(r.default, {
                            text: [
                              {
                                text: (0, l.v)(s, "homepage.partner.title"),
                                className: "",
                              },
                            ],
                            speed: 10,
                          }),
                        }),
                        (0, t.jsx)("p", {
                          className: "mb--0",
                          dangerouslySetInnerHTML: {
                            __html: (0, l.v)(s, "homepage.partner.desc"),
                          },
                        }),
                        (0, t.jsxs)("ul", {
                          className: "neo-partner-btn-grp",
                          role: "tablist",
                          children: [
                            (0, t.jsx)("li", {
                              role: "presentation",
                              children: (0, t.jsx)("button", {
                                className: "neo-tab-btn active",
                                id: "media-&-partner",
                                "data-bs-toggle": "tab",
                                "data-bs-target": "#media-&-partner-pane",
                                type: "button",
                                role: "tab",
                                "aria-controls": "media-&-partner-pane",
                                "aria-selected": "true",
                                dangerouslySetInnerHTML: {
                                  __html: (0, l.v)(
                                    s,
                                    "homepage.partner.button_one"
                                  ),
                                },
                              }),
                            }),
                            (0, t.jsx)("li", {
                              role: "presentation",
                              children: (0, t.jsxs)("button", {
                                className: "neo-tab-btn disable pe-none",
                                id: "exchanges",
                                "data-bs-toggle": "tab",
                                "data-bs-target": "#exchanges-pane",
                                type: "button",
                                role: "tab",
                                "aria-controls": "exchanges-pane",
                                "aria-selected": "false",
                                children: [
                                  (0, t.jsx)("span", {
                                    dangerouslySetInnerHTML: {
                                      __html: (0, l.v)(
                                        s,
                                        "homepage.partner.button_two"
                                      ),
                                    },
                                  }),
                                  (0, t.jsx)("sup", {
                                    dangerouslySetInnerHTML: {
                                      __html: (0, l.v)(
                                        s,
                                        "homepage.partner.soon"
                                      ),
                                    },
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "tab-content",
                  children: [
                    (0, t.jsx)("div", {
                      className: "tab-pane fade show active",
                      id: "media-&-partner-pane",
                      role: "tabpanel",
                      "aria-labelledby": "media-&-partner",
                      tabIndex: 0,
                      children: (0, t.jsxs)("div", {
                        className: "neo-partner-content",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "neo-partner-item position-relative",
                            children: [
                              (0, t.jsx)("span", {
                                className: "frame frame-1",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-2",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-3",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-4",
                              }),
                              (0, t.jsx)("div", {
                                className: "img-wrap",
                                children: (0, t.jsx)(i.default, {
                                  src: "/images/brand/partner-01.webp",
                                  width: 204,
                                  height: 51,
                                  alt: "partner-logo",
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "neo-partner-item",
                            children: [
                              (0, t.jsx)("span", {
                                className: "frame frame-1",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-2",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-3",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-4",
                              }),
                              (0, t.jsx)("div", {
                                className: "img-wrap",
                                children: (0, t.jsx)(i.default, {
                                  src: "/images/brand/partner-02.webp",
                                  width: 164,
                                  height: 41,
                                  alt: "partner-logo",
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "neo-partner-item",
                            children: [
                              (0, t.jsx)("span", {
                                className: "frame frame-1",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-2",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-3",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-4",
                              }),
                              (0, t.jsx)("div", {
                                className: "img-wrap",
                                children: (0, t.jsx)(i.default, {
                                  src: "/images/brand/partner-03.webp",
                                  width: 164,
                                  height: 41,
                                  alt: "partner-logo",
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "neo-partner-item",
                            children: [
                              (0, t.jsx)("span", {
                                className: "frame frame-1",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-2",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-3",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-4",
                              }),
                              (0, t.jsx)("div", {
                                className: "img-wrap",
                                children: (0, t.jsx)(i.default, {
                                  src: "/images/brand/partner-04.webp",
                                  width: 195,
                                  height: 48,
                                  alt: "partner-logo",
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "neo-partner-item",
                            children: [
                              (0, t.jsx)("span", {
                                className: "frame frame-1",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-2",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-3",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-4",
                              }),
                              (0, t.jsx)("div", {
                                className: "img-wrap",
                                children: (0, t.jsx)(i.default, {
                                  src: "/images/brand/partner-05.webp",
                                  width: 184,
                                  height: 46,
                                  alt: "partner-logo",
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "neo-partner-item",
                            children: [
                              (0, t.jsx)("span", {
                                className: "frame frame-1",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-2",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-3",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-4",
                              }),
                              (0, t.jsx)("div", {
                                className: "img-wrap",
                                children: (0, t.jsx)(i.default, {
                                  src: "/images/brand/partner-06.webp",
                                  width: 163,
                                  height: 41,
                                  alt: "partner-logo",
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "neo-partner-item",
                            children: [
                              (0, t.jsx)("span", {
                                className: "frame frame-1",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-2",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-3",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-4",
                              }),
                              (0, t.jsx)("div", {
                                className: "img-wrap",
                                children: (0, t.jsx)(i.default, {
                                  src: "/images/brand/partner-07.webp",
                                  width: 163,
                                  height: 41,
                                  alt: "partner-logo",
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "neo-partner-item",
                            children: [
                              (0, t.jsx)("span", {
                                className: "frame frame-1",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-2",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-3",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-4",
                              }),
                              (0, t.jsx)("div", {
                                className: "img-wrap",
                                children: (0, t.jsx)(i.default, {
                                  src: "/images/brand/partner-08.webp",
                                  width: 138,
                                  height: 35,
                                  alt: "partner-logo",
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "neo-partner-item",
                            children: [
                              (0, t.jsx)("span", {
                                className: "frame frame-1",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-2",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-3",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-4",
                              }),
                              (0, t.jsx)("div", {
                                className: "img-wrap",
                                children: (0, t.jsx)(i.default, {
                                  src: "/images/brand/partner-09.webp",
                                  width: 164,
                                  height: 41,
                                  alt: "partner-logo",
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "neo-partner-item",
                            children: [
                              (0, t.jsx)("span", {
                                className: "frame frame-1",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-2",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-3",
                              }),
                              (0, t.jsx)("span", {
                                className: "frame frame-4",
                              }),
                              (0, t.jsx)("div", {
                                className: "img-wrap",
                                children: (0, t.jsx)(i.default, {
                                  src: "/images/brand/partner-10.webp",
                                  width: 127,
                                  height: 32,
                                  alt: "partner-logo",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "tab-pane fade",
                      id: "exchanges-pane",
                      role: "tabpanel",
                      "aria-labelledby": "exchanges",
                      tabIndex: 0,
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    67228: (e, s, a) => {
      "use strict";
      a.d(s, { default: () => p });
      var t = a(95155),
        i = a(57489),
        n = a(59132),
        r = a(12115),
        l = a(72360),
        c = a(49088),
        o = a(50802),
        d = a(9964),
        m = a(35695),
        h = a(71139),
        u = a(66766),
        x = a(9117);
      o.Ay.registerPlugin(c.A);
      let p = function (e) {
        let { currentLng: s = "en" } = e,
          a = (0, r.useRef)(null),
          [p, g] = (0, r.useState)(1),
          j = (0, x.v)(s, "homepage.steps");
        (0, r.useEffect)(() => {
          let e = () => {
            let e = window.innerWidth;
            c.A.getAll().forEach((e) => e.kill()),
              e < 1200 ||
                o.Ay.utils.toArray(".scroll_top_slide").forEach((e) => {
                  o.Ay.set(e, { y: 300, transformOrigin: "center center" }),
                    o.Ay.timeline({
                      scrollTrigger: {
                        trigger: e,
                        scrub: 1,
                        start: "top 70%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                        markers: !1,
                      },
                    }).to(e, { y: 0, duration: 1, ease: "none" });
                });
          };
          return (
            e(),
            window.addEventListener("resize", e),
            () => {
              c.A.getAll().forEach((e) => e.kill()),
                window.removeEventListener("resize", e);
            }
          );
        }, []);
        let f = (0, m.useRouter)(),
          v = (0, m.usePathname)();
        return (0, t.jsx)("section", {
          id: "how-to-buy",
          className:
            "neo-how-to-buy neo-section-gapTop neo-section-gap-bigBottom",
          children: (0, t.jsxs)("div", {
            className: "container",
            children: [
              (0, t.jsx)("div", {
                className: "row mb-xs--40 mb--60",
                children: (0, t.jsx)("div", {
                  className:
                    "col-xl-4 col-lg-5 col-md-7 col-sm-8 col-11 mx-auto",
                  children: (0, t.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, t.jsx)("h2", {
                        className: "neo-section-title",
                        children: (0, t.jsx)(d.default, {
                          text: [
                            {
                              text: (0, x.v)(s, "homepage.how_to_buy.title"),
                              className: "",
                            },
                          ],
                          speed: 10,
                        }),
                      }),
                      (0, t.jsx)("p", {
                        dangerouslySetInnerHTML: {
                          __html: (0, x.v)(s, "homepage.how_to_buy").content,
                        },
                      }),
                      (0, t.jsx)("a", {
                        className: "d-flex justify-content-center my-3",
                        children: (0, t.jsxs)("a", {
                          href: "https://app.uniswap.org/swap?outputCurrency=0xE928ada2e355CEA7724Df8F2819960c490E83764",
                          target: "_blank",
                          ref: a,
                          className: "neo-btn-primary",
                          children: [
                            (0, t.jsx)("span", { className: "frame frame-1" }),
                            (0, t.jsx)("span", { className: "frame frame-2" }),
                            (0, t.jsx)("span", { className: "frame frame-3" }),
                            (0, t.jsx)("span", { className: "frame frame-4" }),
                            (0, t.jsx)(i.g, { icon: n.BA1 }),
                            (0, t.jsx)(l.A, {
                              text: (0, x.v)(s, "homepage.how_to_buy")
                                .button_text,
                              triggerRef: a,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, t.jsx)("div", {
                className: "row row--22 mt_dec--40",
                children:
                  Array.isArray(j) &&
                  (null == j
                    ? void 0
                    : j.map((e, s) =>
                        (0, t.jsx)(
                          "div",
                          {
                            className: "col-lg-6 col-xl-4 mt--40",
                            children: (0, t.jsx)("div", {
                              className: "".concat(
                                1 === s ? "" : "scroll_top_slide"
                              ),
                              children: (0, t.jsxs)("div", {
                                className: "neo-step-card step-card-item-"
                                  .concat(s + 1, " ")
                                  .concat(p === s ? "active" : ""),
                                onMouseEnter: () => g(s),
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: "card-top",
                                    children: [
                                      (0, t.jsxs)("div", {
                                        className: "dot",
                                        children: [
                                          (0, t.jsx)("span", {}),
                                          (0, t.jsx)("span", {}),
                                          (0, t.jsx)("span", {}),
                                        ],
                                      }),
                                      (0, t.jsx)("span", {
                                        className: "icon",
                                        children: (0, t.jsx)(i.g, {
                                          icon: h.NLt,
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "card-body",
                                    children: [
                                      (0, t.jsx)("h3", {
                                        className: "card-title",
                                        children: e.title,
                                      }),
                                      (0, t.jsx)("p", {
                                        className: "card-des",
                                        children: Array.isArray(e.desc)
                                          ? (0, t.jsxs)(t.Fragment, {
                                              children: [
                                                e.desc[0],
                                                " ",
                                                (0, t.jsx)("span", {
                                                  dangerouslySetInnerHTML: {
                                                    __html: e.desc[1],
                                                  },
                                                }),
                                              ],
                                            })
                                          : (0, t.jsx)("span", {
                                              dangerouslySetInnerHTML: {
                                                __html: e.desc,
                                              },
                                            }),
                                      }),
                                      e.features.map((e, s) =>
                                        (0, t.jsxs)(
                                          "div",
                                          {
                                            className: "feature-item",
                                            children: [
                                              (0, t.jsx)("h6", {
                                                className: "feature-title",
                                                children: e.title,
                                              }),
                                              (0, t.jsx)("p", {
                                                className: "feature-dec",
                                                children: e.content,
                                              }),
                                            ],
                                          },
                                          s
                                        )
                                      ),
                                    ],
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "card-bottom card-bottom-".concat(s + 1),
                                    children: (0, t.jsx)(u.default, {
                                      src: "/images/pepe/step-0".concat(
                                        s + 1,
                                        ".gif"
                                      ),
                                      width:
                                        1 === s ? 350 : 2 === s ? 432 : 404,
                                      height:
                                        1 === s ? 399 : 2 === s ? 243 : 207,
                                      alt: "pepe",
                                      quality: 40,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          },
                          s
                        )
                      )),
              }),
            ],
          }),
        });
      };
    },
    72668: (e, s, a) => {
      "use strict";
      a.d(s, { default: () => d });
      var t = a(95155),
        i = a(66766),
        n = a(6874),
        r = a.n(n),
        l = a(12115),
        c = a(9964),
        o = a(9117);
      let d = function (e) {
        let { currentLng: s = "en" } = e,
          [a, n] = (0, l.useState)([0, 1]),
          [d, m] = (0, l.useState)(!0);
        return (
          (0, l.useEffect)(() => {
            let e = () => m(window.innerWidth >= 992);
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          (0, l.useEffect)(() => {
            let e = setInterval(() => {
              n((e) => {
                let s;
                do s = Math.floor(11 * Math.random());
                while (e.includes(s));
                return [s, e[1]];
              }),
                setTimeout(() => {
                  n((e) => {
                    let s;
                    do s = Math.floor(11 * Math.random());
                    while (e.includes(s));
                    return [e[0], s];
                  });
                }, 400);
            }, 2500);
            return () => clearInterval(e);
          }, []),
          (0, t.jsx)("div", {
            className: "neo-audit-area",
            id: "audit",
            children: (0, t.jsxs)("div", {
              className: "container",
              children: [
                (0, t.jsx)("div", {
                  className: "row",
                  children: (0, t.jsx)("div", {
                    className: "col-xl-5 col-lg-6 col-md-8 mx-auto",
                    children: (0, t.jsxs)("div", {
                      className: "text-center",
                      children: [
                        (0, t.jsx)("h2", {
                          className: "neo-section-title",
                          children: (0, t.jsx)(c.default, {
                            text: [
                              {
                                text: (0, o.v)(
                                  s,
                                  "homepage.sequrity_audit.title"
                                ),
                                className: "",
                              },
                            ],
                            speed: 10,
                          }),
                        }),
                        (0, t.jsx)("p", {
                          className: "mb--0",
                          dangerouslySetInnerHTML: {
                            __html: (0, o.v)(
                              s,
                              "homepage.sequrity_audit.content"
                            ),
                          },
                        }),
                      ],
                    }),
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "neo-audit-wrap",
                  children: [
                    (0, t.jsx)("div", {
                      className: "neo-audit-item icon ".concat(
                        a.includes(0) ? "" : "active"
                      ),
                      children: (0, t.jsx)(i.default, {
                        src: "/images/icon/audit-icon-01.webp",
                        width: 60,
                        height: 65,
                        alt: "Icon",
                      }),
                    }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    (0, t.jsxs)("div", {
                      className: "neo-audit-item card",
                      children: [
                        (0, t.jsx)("div", {
                          className: "card-icon",
                          children: (0, t.jsx)(i.default, {
                            src: "/images/icon/audit-card-icon-01.webp",
                            width: 60,
                            height: 80,
                            alt: "Icon",
                          }),
                        }),
                        (0, t.jsx)("h6", {
                          className: "card-title",
                          dangerouslySetInnerHTML: {
                            __html: (0, o.v)(
                              s,
                              "homepage.sequrity_audit.audits.first.title"
                            ),
                          },
                        }),
                        (0, t.jsx)("p", {
                          className: "card-dec",
                          dangerouslySetInnerHTML: {
                            __html: (0, o.v)(
                              s,
                              "homepage.sequrity_audit.audits.first.content"
                            ),
                          },
                        }),
                      ],
                    }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    d &&
                      (0, t.jsx)("div", {
                        className: "neo-audit-item icon ".concat(
                          a.includes(1) ? "" : "active"
                        ),
                        children: (0, t.jsx)(i.default, {
                          src: "/images/icon/audit-icon-02.webp",
                          width: 61,
                          height: 65,
                          alt: "Icon",
                        }),
                      }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    d &&
                      (0, t.jsx)("div", {
                        className: "neo-audit-item icon ".concat(
                          a.includes(2) ? "" : "active"
                        ),
                        children: (0, t.jsx)(i.default, {
                          src: "/images/icon/audit-icon-03.webp",
                          width: 78,
                          height: 75,
                          alt: "Icon",
                        }),
                      }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    d &&
                      (0, t.jsx)("div", {
                        className: "neo-audit-item icon ".concat(
                          a.includes(3) ? "" : "active"
                        ),
                        children: (0, t.jsx)(i.default, {
                          src: "/images/icon/audit-icon-07.webp",
                          width: 80,
                          height: 72,
                          alt: "Icon",
                        }),
                      }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    d &&
                      (0, t.jsx)("div", {
                        className: "neo-audit-item icon ".concat(
                          a.includes(4) ? "" : "active"
                        ),
                        children: (0, t.jsx)(i.default, {
                          src: "/images/icon/audit-icon-08.webp",
                          width: 80,
                          height: 61,
                          alt: "Icon",
                        }),
                      }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    (0, t.jsx)("div", {
                      className: "neo-audit-item card card-var-02",
                      children: (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("div", {
                            className: "card-icon",
                            children: (0, t.jsx)(i.default, {
                              src: "/images/icon/audit-card-icon-02.webp",
                              width: 80,
                              height: 81,
                              alt: "Icon",
                            }),
                          }),
                          (0, t.jsx)("h6", {
                            className: "card-title",
                            dangerouslySetInnerHTML: {
                              __html: (0, o.v)(
                                s,
                                "homepage.sequrity_audit.audits.second.title"
                              ),
                            },
                          }),
                          (0, t.jsx)("p", {
                            className: "card-dec",
                            dangerouslySetInnerHTML: {
                              __html: (0, o.v)(
                                s,
                                "homepage.sequrity_audit.audits.second.content"
                              ),
                            },
                          }),
                        ],
                      }),
                    }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    d &&
                      (0, t.jsx)("div", {
                        className: "neo-audit-item icon ".concat(
                          a.includes(5) ? "" : "active"
                        ),
                        children: (0, t.jsx)(i.default, {
                          src: "/images/icon/audit-icon-09.webp",
                          width: 60,
                          height: 80,
                          alt: "Icon",
                        }),
                      }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    (0, t.jsx)("div", {
                      className: "neo-audit-item card",
                      children: (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("div", {
                            className: "card-icon",
                            children: (0, t.jsx)(i.default, {
                              src: "/images/icon/audit-card-icon-03.webp",
                              width: 55,
                              height: 64,
                              alt: "Icon",
                            }),
                          }),
                          (0, t.jsx)("h6", {
                            className: "card-title",
                            dangerouslySetInnerHTML: {
                              __html: (0, o.v)(
                                s,
                                "homepage.sequrity_audit.audits.third.title"
                              ),
                            },
                          }),
                          (0, t.jsx)("p", {
                            className: "card-dec",
                            dangerouslySetInnerHTML: {
                              __html: (0, o.v)(
                                s,
                                "homepage.sequrity_audit.audits.third.content"
                              ),
                            },
                          }),
                        ],
                      }),
                    }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    d &&
                      (0, t.jsx)("div", {
                        className: "neo-audit-item icon ".concat(
                          a.includes(6) ? "" : "active"
                        ),
                        children: (0, t.jsx)(i.default, {
                          src: "/images/icon/audit-icon-10.webp",
                          width: 60,
                          height: 68,
                          alt: "Icon",
                        }),
                      }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    d &&
                      (0, t.jsx)("div", {
                        className: "neo-audit-item icon ".concat(
                          a.includes(7) ? "" : "active"
                        ),
                        children: (0, t.jsx)(i.default, {
                          src: "/images/icon/audit-icon-04.webp",
                          width: 80,
                          height: 71,
                          alt: "Icon",
                        }),
                      }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    d &&
                      (0, t.jsx)("div", {
                        className: "neo-audit-item icon ".concat(
                          a.includes(8) ? "" : "active"
                        ),
                        children: (0, t.jsx)(i.default, {
                          src: "/images/icon/audit-icon-06.webp",
                          width: 80,
                          height: 75,
                          alt: "Icon",
                        }),
                      }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    d &&
                      (0, t.jsx)("div", {
                        className: "neo-audit-item icon ".concat(
                          a.includes(9) ? "" : "active"
                        ),
                        children: (0, t.jsx)(i.default, {
                          src: "/images/icon/audit-icon-11.webp",
                          width: 80,
                          height: 73,
                          alt: "Icon",
                        }),
                      }),
                    (0, t.jsx)(r(), {
                      href: "/",
                      className: "neo-audit-item link",
                      children: (0, t.jsxs)("svg", {
                        width: "58",
                        height: "51",
                        viewBox: "0 0 58 51",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        role: "img",
                        "aria-label": "Grid Icon",
                        children: [
                          (0, t.jsx)("path", {
                            d: "M57.1445 22.1159V29.2588H50.0017V22.1159H57.1445Z",
                            fill: "#2BF92B",
                          }),
                          (0, t.jsx)("path", {
                            d: "M46.4258 32.8308V39.9736H39.2829V32.8308H46.4258Z",
                            fill: "#2BF92B",
                          }),
                          (0, t.jsx)("path", {
                            d: "M46.4258 11.4011V18.5439H39.2829V11.4011H46.4258Z",
                            fill: "#2BF92B",
                          }),
                          (0, t.jsx)("path", {
                            d: "M35.7148 22.1159V29.2588H28.572V22.1159H35.7148Z",
                            fill: "#2BF92B",
                          }),
                          (0, t.jsx)("path", {
                            d: "M21.4258 22.1159V29.2588H14.2829V22.1159H21.4258Z",
                            fill: "#2BF92B",
                          }),
                          (0, t.jsx)("path", {
                            d: "M7.14453 22.1159V29.2588H0.00167418V22.1159H7.14453Z",
                            fill: "#2BF92B",
                          }),
                          (0, t.jsx)("path", {
                            d: "M35.7148 43.5446V50.6875H28.572V43.5446H35.7148Z",
                            fill: "#2BF92B",
                          }),
                          (0, t.jsx)("path", {
                            d: "M35.7148 0.687221V7.83008H28.572V0.68722H35.7148Z",
                            fill: "#2BF92B",
                          }),
                        ],
                      }),
                    }),
                    d &&
                      (0, t.jsx)("div", {
                        className: "neo-audit-item variant-02",
                      }),
                    d && (0, t.jsx)("div", { className: "neo-audit-item" }),
                    d &&
                      (0, t.jsx)("div", {
                        className: "neo-audit-item icon ".concat(
                          a.includes(10) ? "" : "active"
                        ),
                        children: (0, t.jsx)(i.default, {
                          src: "/images/icon/audit-icon-05.webp",
                          width: 59,
                          height: 55,
                          alt: "Icon",
                        }),
                      }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    80209: (e, s, a) => {
      "use strict";
      a.d(s, { default: () => m });
      var t = a(95155),
        i = a(66766),
        n = a(12115);
      let r = (e) => {
        let {
            finalValue: s,
            startValue: a = 0,
            duration: i = 2e3,
            delay: r = 0,
          } = e,
          [l, c] = (0, n.useState)(a),
          [o, d] = (0, n.useState)(!1),
          m = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            let e = new IntersectionObserver(
              (e) => {
                let [s] = e;
                s.isIntersecting && !o && d(!0);
              },
              { threshold: 0.6 }
            );
            return (
              m.current && e.observe(m.current),
              () => {
                m.current && e.unobserve(m.current);
              }
            );
          }, [o]),
          (0, n.useEffect)(() => {
            if (!o) return;
            let e = setTimeout(() => {
              let e = performance.now(),
                t = (n) => {
                  let r = Math.min((n - e) / i, 1);
                  c(Math.floor(a + (s - a) * r)),
                    r < 1 && requestAnimationFrame(t);
                };
              requestAnimationFrame(t);
            }, r);
            return () => clearTimeout(e);
          }, [o, a, s, i, r]),
          (0, t.jsx)("span", { ref: m, children: l.toLocaleString() })
        );
      };
      var l = a(84561),
        c = a(9117);
      let o = function (e) {
        let { currentLng: s = "en" } = e,
          a = (0, n.useRef)(null),
          [o, d] = (0, n.useState)(!1),
          [m, h] = (0, n.useState)(4);
        (0, n.useEffect)(() => {
          let e = a.current;
          if (!e) return;
          let s = new IntersectionObserver(
            (e) => {
              let [a] = e;
              a.isIntersecting && (d(!0), s.disconnect());
            },
            { root: null, threshold: 0.2 }
          );
          return s.observe(e), () => s.disconnect();
        }, []);
        let u = (0, c.v)(s, "homepage.tokenomics.box.features");
        return (0, t.jsxs)("div", {
          className: "neo-tokenomics-box",
          children: [
            (0, t.jsxs)("div", {
              className: "row",
              children: [
                (0, t.jsxs)("div", {
                  className: "col-lg-6",
                  children: [
                    (0, t.jsx)("h6", {
                      className: "subtitle",
                      dangerouslySetInnerHTML: {
                        __html: (0, c.v)(s, "homepage.tokenomics.box.title"),
                      },
                    }),
                    (0, t.jsxs)("h2", {
                      className: "title h1",
                      children: [
                        "420,690,000 ",
                        (0, t.jsx)("br", {}),
                        " ",
                        (0, t.jsx)("span", {
                          dangerouslySetInnerHTML: {
                            __html: (0, c.v)(
                              s,
                              "homepage.tokenomics.box.token_label"
                            ),
                          },
                        }),
                      ],
                    }),
                    (0, t.jsx)("ul", {
                      className: "list",
                      children: Object.values(u).map((e, s) =>
                        (0, t.jsx)("li", { children: e ? String(e) : "" }, s)
                      ),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className:
                    "col-lg-6 d-flex justify-content-lg-end align-items-start",
                  children: (0, t.jsx)(l.default, {}),
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "neo-tokenomics-chart ".concat(o ? "active" : ""),
              ref: a,
              children: [
                (0, t.jsx)("div", {
                  className: "chart-item-wrap",
                  children: (0, t.jsxs)("div", {
                    className: "chart-item ".concat(0 === m ? "active" : ""),
                    onMouseEnter: () => h(0),
                    children: [
                      (0, t.jsx)(i.default, {
                        className: "pepe",
                        src: "/images/pepe/lucudity.gif",
                        width: 200,
                        height: 200,
                        alt: "pepe",
                      }),
                      (0, t.jsxs)("span", {
                        className: "number",
                        children: [
                          (0, t.jsx)(r, {
                            finalValue: 10,
                            duration: 600,
                            delay: 0,
                          }),
                          "%",
                        ],
                      }),
                      (0, t.jsx)("h6", {
                        className: "chart-title",
                        dangerouslySetInnerHTML: {
                          __html: (0, c.v)(
                            s,
                            "homepage.tokenomics.box.charts.labels"
                          )["1"],
                        },
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "chart-item-wrap",
                  children: (0, t.jsxs)("div", {
                    className: "chart-item ".concat(1 === m ? "active" : ""),
                    onMouseEnter: () => h(1),
                    children: [
                      (0, t.jsx)(i.default, {
                        className: "pepe",
                        src: "/images/pepe/marketing.gif",
                        width: 200,
                        height: 163,
                        alt: "pepe",
                      }),
                      (0, t.jsxs)("span", {
                        className: "number",
                        children: [
                          (0, t.jsx)(r, {
                            finalValue: 25,
                            duration: 800,
                            delay: 200,
                          }),
                          "%",
                        ],
                      }),
                      (0, t.jsx)("h6", {
                        className: "chart-title",
                        dangerouslySetInnerHTML: {
                          __html: (0, c.v)(
                            s,
                            "homepage.tokenomics.box.charts.labels"
                          )["2"],
                        },
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "chart-item-wrap",
                  children: (0, t.jsxs)("div", {
                    className: "chart-item ".concat(2 === m ? "active" : ""),
                    onMouseEnter: () => h(2),
                    children: [
                      (0, t.jsx)(i.default, {
                        className: "pepe",
                        src: "/images/pepe/ecosytem.gif",
                        width: 200,
                        height: 200,
                        alt: "pepe",
                      }),
                      (0, t.jsxs)("span", {
                        className: "number",
                        children: [
                          (0, t.jsx)(r, {
                            finalValue: 5,
                            duration: 600,
                            delay: 400,
                          }),
                          "%",
                        ],
                      }),
                      (0, t.jsx)("h6", {
                        className: "chart-title",
                        dangerouslySetInnerHTML: {
                          __html: (0, c.v)(
                            s,
                            "homepage.tokenomics.box.charts.labels"
                          )["3"],
                        },
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "chart-item-wrap",
                  children: (0, t.jsxs)("div", {
                    className: "chart-item ".concat(3 === m ? "active" : ""),
                    onMouseEnter: () => h(3),
                    children: [
                      (0, t.jsx)(i.default, {
                        className: "pepe",
                        src: "/images/pepe/presale.gif",
                        width: 200,
                        height: 200,
                        alt: "pepe",
                      }),
                      (0, t.jsxs)("span", {
                        className: "number",
                        children: [
                          (0, t.jsx)(r, {
                            finalValue: 45,
                            duration: 1200,
                            delay: 600,
                          }),
                          "%",
                        ],
                      }),
                      (0, t.jsx)("h6", {
                        className: "chart-title",
                        dangerouslySetInnerHTML: {
                          __html: (0, c.v)(
                            s,
                            "homepage.tokenomics.box.charts.labels"
                          )["4"],
                        },
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "chart-item-wrap",
                  children: (0, t.jsxs)("div", {
                    className: "chart-item ".concat(4 === m ? "active" : ""),
                    onMouseEnter: () => h(4),
                    children: [
                      (0, t.jsx)(i.default, {
                        className: "pepe",
                        src: "/images/pepe/giveaway.gif",
                        width: 200,
                        height: 200,
                        alt: "pepe",
                      }),
                      (0, t.jsxs)("span", {
                        className: "number",
                        children: [
                          (0, t.jsx)(r, {
                            finalValue: 5,
                            duration: 600,
                            delay: 800,
                          }),
                          "%",
                        ],
                      }),
                      (0, t.jsx)("h6", {
                        className: "chart-title",
                        dangerouslySetInnerHTML: {
                          __html: (0, c.v)(
                            s,
                            "homepage.tokenomics.box.charts.labels"
                          )["5"],
                        },
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "chart-item-wrap",
                  children: (0, t.jsxs)("div", {
                    className: "chart-item ".concat(5 === m ? "active" : ""),
                    onMouseEnter: () => h(5),
                    children: [
                      (0, t.jsx)(i.default, {
                        className: "pepe",
                        src: "/images/pepe/development.gif",
                        width: 200,
                        height: 200,
                        alt: "pepe",
                      }),
                      (0, t.jsxs)("span", {
                        className: "number",
                        children: [
                          (0, t.jsx)(r, {
                            finalValue: 10,
                            duration: 600,
                            delay: 1e3,
                          }),
                          "%",
                        ],
                      }),
                      (0, t.jsx)("h6", {
                        className: "chart-title",
                        dangerouslySetInnerHTML: {
                          __html: (0, c.v)(
                            s,
                            "homepage.tokenomics.box.charts.labels"
                          )["6"],
                        },
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var d = a(9964);
      let m = function (e) {
        let { currentLng: s = "en" } = e,
          [a, r] = (0, n.useState)(!0);
        return (
          (0, n.useEffect)(() => {
            let e = () => r(window.innerWidth >= 1200);
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          (0, t.jsxs)("div", {
            className: "neo-tokenomics-area",
            id: "tokenomics",
            children: [
              a &&
                (0, t.jsx)(i.default, {
                  className: "token-bg",
                  src: "/images/background/tokenomics-bg.png",
                  width: 1820,
                  height: 1080,
                  alt: "background",
                }),
              (0, t.jsxs)("div", {
                className: "neo-tokenomics-wrap",
                children: [
                  (0, t.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, t.jsx)("div", {
                        className: "row",
                        children: (0, t.jsx)("div", {
                          className: "col-lg-6 col-md-8 mx-auto",
                          children: (0, t.jsxs)("div", {
                            className: "neo-index-upper-3 text-center",
                            children: [
                              (0, t.jsx)("h2", {
                                className: "neo-section-title",
                                children: (0, t.jsx)(d.default, {
                                  text: [
                                    {
                                      text: (0, c.v)(
                                        s,
                                        "homepage.tokenomics.title"
                                      ),
                                      className: "",
                                    },
                                  ],
                                  speed: 10,
                                }),
                              }),
                              (0, t.jsx)("p", {
                                className: "mb--0",
                                dangerouslySetInnerHTML: {
                                  __html: (0, c.v)(
                                    s,
                                    "homepage.tokenomics.desc"
                                  ),
                                },
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, t.jsx)(o, { currentLng: s }),
                    ],
                  }),
                  a &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("div", { className: "circle-1" }),
                        (0, t.jsx)("div", { className: "circle-2" }),
                      ],
                    }),
                ],
              }),
            ],
          })
        );
      };
    },
    80265: (e, s, a) => {
      "use strict";
      a.d(s, { default: () => b });
      var t = a(95155),
        i = a(66766),
        n = a(6874),
        r = a.n(n),
        l = a(12115),
        c = a(57489),
        o = a(66481),
        d = a(72360),
        m = a(33612),
        h = a(44142),
        u = a(1196);
      let x = {
        src: "/_next/static/media/rat-run.329df317.gif",
        height: 70,
        width: 535,
        blurWidth: 0,
        blurHeight: 0,
      };
      var p = a(58983),
        g = a(53999),
        j = a(51235),
        f = a(9117),
        v = a(59132),
        N = a(32960);
      function b(e) {
        let { currentLng: s = "en" } = e,
          a = (0, l.useRef)(null),
          n = (0, l.useRef)(null),
          b = (0, m.A)(),
          {
            prices: w,
            balances: y,
            totalTokensSold: _,
            ethPrice: M,
            solPrice: I,
          } = (0, h.j)(),
          [S, L] = (0, l.useState)(!0),
          {
            tokens: E,
            loading: k,
            saleToken: A,
            currentStage: P,
            fetchIntialData: C,
            buyToken: H,
            buyTokenWithSolana: T,
            fetchTokenBalances: B,
            buyTokenEstimatedGas: V,
            pendingTransaction: O,
          } = (0, u.A)(),
          { open: q } = (0, j.JS)(),
          { isConnected: R, address: z } = (0, j.G8)(),
          { chainId: D, switchNetwork: F } = (0, j.HV)(),
          [Z, G] = (0, l.useState)(E[0]),
          [W, $] = (0, l.useState)(""),
          [X, U] = (0, l.useState)(""),
          J = (0, l.useMemo)(
            () => p.A.chainsList.find((e) => e.id === b.id),
            [b]
          ),
          K = (0, l.useMemo)(() => p.A.chains.every((e) => e.id !== D), [D]),
          Q = (0, l.useMemo)(
            () => !!W && !!Z && void 0 !== y[Z.symbol] && +W > y[Z.symbol],
            [W, y, Z]
          ),
          Y = (0, l.useMemo)(
            () =>
              !!W &&
              !!Z &&
              (Z.address ? +W : W * ("Solana" === b.name ? I : M)) <
                p.A.minPurchaseAmountUSD,
            [Z.address, W, M, b.name, I]
          ),
          ee = (0, l.useMemo)(() => {
            if (!R) return "connect wallet";
            if (K) return "switch network";
            if ("" === W) return "enter amount";
            if (Q) return "insufficient balance";
            if (Y) return "Min amount 5 USD";
            else return "buy now";
          }, [R, z, b.id, W, K, Q]),
          es = () => {
            $(""), U("");
          },
          ea = function (e) {
            let s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 6;
            return +parseFloat((+e).toFixed(s));
          },
          et = (0, N.I)({
            queryKey: ["estimated-gas", Z.address, z, b.id],
            queryFn: () => V(Z),
            enabled: !!z,
          }),
          ei = async () => {
            let e = y[Z.symbol] || 0,
              s = e;
            if (!Z.address) {
              let a = et.data || 0.001;
              s = e - a > 0 ? e - a : 0;
            }
            $(s.toString()),
              0 !== w[Z.symbol] && U(ea(s / w[Z.symbol]).toString());
          },
          en = async (e) => {
            if ((e.preventDefault(), !R)) return q();
            if (K) return F(b);
            if (Q || Y || !W) return;
            let { success: s } =
              "Solana" === b.name ? await T(W, Z) : await H(W, Z);
            s && es();
          },
          er = (0, l.useMemo)(() => {
            let e = p.A.stages.indexOf(P);
            return e === p.A.stages.length - 1 ? null : p.A.stages[e + 1];
          }, [P]),
          el = (0, l.useMemo)(() => {
            if (!_) return 0;
            let e = 0,
              s = _,
              a = p.A.stages.indexOf(P);
            for (let t = 0; t < a; t++)
              (e += p.A.stages[t].tokens * p.A.stages[t].price),
                (s -= p.A.stages[t].tokens);
            return e + s * p.A.stages[a].price;
          }, [_, P]),
          ec = (0, l.useMemo)(() => {
            let e = 0,
              s = p.A.stages.indexOf(P);
            for (let a = 0; a <= s; a++)
              e += p.A.stages[a].tokens * p.A.stages[a].price;
            return e;
          }, [P]),
          eo = (0, l.useMemo)(() => {
            if (!_) return 0;
            let e = +_,
              s = p.A.stages.indexOf(P);
            for (let a = 0; a < s; a++) e -= p.A.stages[a].tokens;
            return e;
          }, [_, P]),
          ed = (0, l.useMemo)(() => (eo ? (eo / P.tokens) * 100 : 0), [eo, P]);
        return null;
      }
    },
    84561: (e, s, a) => {
      "use strict";
      a.d(s, { default: () => l });
      var t = a(95155),
        i = a(12115),
        n = a(57489),
        r = a(59132);
      let l = function () {
        let e = (0, i.useRef)(null),
          s = (0, i.useRef)(null),
          l = (0, i.useRef)(null),
          [c, o] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let e = s.current;
            e &&
              (async () => {
                var s;
                let { Tooltip: t } = await a.e(745).then(a.bind(a, 33126));
                null == (s = t.getInstance(e)) || s.dispose(),
                  (l.current = new t(e, {
                    title: "Copy to clipboard",
                    placement: "top",
                    customClass: "neo-clip-btn-tooltip",
                  }));
              })();
          }, []),
          (0, t.jsxs)("div", {
            className: "neo-clip-box d-flex align-items-center gap-2",
            children: [
              (0, t.jsx)("span", {
                className: "clip-text",
                ref: e,
                children: "0xE928ada2e355CEA7724Df8F2819960c490E83764",
              }),
              (0, t.jsx)("button", {
                ref: s,
                type: "button",
                className: "clip-btn",
                "data-bs-toggle": "tooltip",
                "data-bs-placement": "top",
                "data-bs-title": "Copy to clipboard",
                onClick: () => {
                  var a;
                  let t = null == (a = e.current) ? void 0 : a.textContent,
                    i = s.current;
                  t &&
                    i &&
                    l.current &&
                    navigator.clipboard
                      .writeText(t)
                      .then(() => {
                        var e, s;
                        o(!0),
                          null == (e = l.current) ||
                            e.setContent({ ".tooltip-inner": "Copied!" }),
                          null == (s = l.current) || s.show(),
                          setTimeout(() => {
                            var e, s;
                            o(!1),
                              null == (e = l.current) ||
                                e.setContent({
                                  ".tooltip-inner": "Copy to clipboard",
                                }),
                              null == (s = l.current) || s.hide();
                          }, 1e3);
                      })
                      .catch((e) => console.error("Copy failed:", e));
                },
                children: c
                  ? (0, t.jsx)(n.g, { icon: r.KTq })
                  : (0, t.jsx)(n.g, { icon: r.jPR }),
              }),
            ],
          })
        );
      };
    },
    97068: (e, s, a) => {
      "use strict";
      a.d(s, { default: () => c });
      var t = a(95155),
        i = a(66766),
        n = a(9964),
        r = a(9117),
        l = a(12115);
      let c = function (e) {
        let { currentLng: s = "en" } = e,
          a = (0, r.v)(s, "homepage.about_section.features"),
          [c, o] = (0, l.useState)(!0);
        (0, l.useEffect)(() => {
          let e = () => o(window.innerWidth >= 1200);
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []);
        let d = (0, r.v)(s, "homepage.about_section.content");
        return (0, t.jsx)("div", {
          className: "neo-about-area",
          children: (0, t.jsx)("div", {
            className: "container",
            children: (0, t.jsxs)("div", {
              className: "neo-about-wrap",
              children: [
                (0, t.jsx)("div", { className: "neo-about-glow" }),
                (0, t.jsxs)("div", {
                  className: "row align-items-center",
                  children: [
                    (0, t.jsx)("div", {
                      className: "col-xl-6",
                      children: (0, t.jsxs)("div", {
                        className: "neo-about-content",
                        children: [
                          (0, t.jsx)("h2", {
                            className: "neo-section-title",
                            children: (0, t.jsx)(n.default, {
                              text: [
                                {
                                  text: (0, r.v)(
                                    s,
                                    "homepage.about_section.title"
                                  ),
                                  className: "",
                                },
                                {
                                  text: " Neo Pepe",
                                  className:
                                    "text-gradient font-secondary text-uppercase",
                                },
                              ],
                              speed: 10,
                            }),
                          }),
                          Array.isArray(d) &&
                            d.map((e, s) =>
                              (0, t.jsx)(
                                "p",
                                { className: "mb--16", children: e },
                                s
                              )
                            ),
                          (0, t.jsx)("h5", {
                            className: "feature-title mt--36 mb--24",
                            children: (0, t.jsx)("span", {
                              dangerouslySetInnerHTML: {
                                __html: (0, r.v)(
                                  s,
                                  "homepage.about_section.feature_title"
                                ),
                              },
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: "features",
                            children:
                              a &&
                              Object.entries(a).map((e) => {
                                let [s, a] = e;
                                return (0, t.jsxs)(
                                  "div",
                                  {
                                    className: "feature-item",
                                    children: [
                                      (0, t.jsx)("h6", {
                                        className: "mb--12",
                                        children: null == a ? void 0 : a.title,
                                      }),
                                      (0, t.jsx)("p", {
                                        className: "disc",
                                        children:
                                          null == a ? void 0 : a.description,
                                      }),
                                    ],
                                  },
                                  s
                                );
                              }),
                          }),
                          (0, t.jsxs)("div", {
                            className: "contract",
                            children: [
                              (0, t.jsx)("h6", {
                                className: "title",
                                children: (0, t.jsx)("span", {
                                  dangerouslySetInnerHTML: {
                                    __html: (0, r.v)(
                                      s,
                                      "homepage.about_section.contract_label"
                                    ),
                                  },
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className: "img-wrap",
                                children: [
                                  (0, t.jsx)("a", {
                                    href: "https://www.cyberscope.io/audits/neop",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, t.jsx)(i.default, {
                                      src: "/images/brand/contract-logo-2.webp",
                                      width: 130,
                                      height: 33,
                                      alt: "CyberScope Logo",
                                    }),
                                  }),
                                  (0, t.jsx)("a", {
                                    href: "https://coinsult.net/projects/neo-pepe/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, t.jsx)(i.default, {
                                      src: "/images/brand/contract-logo-3.webp",
                                      width: 123,
                                      height: 32,
                                      alt: "Coinsult Logo",
                                    }),
                                  }),
                                  (0, t.jsx)("a", {
                                    href: "https://skynet.certik.com/projects/neo-pepe",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, t.jsx)(i.default, {
                                      src: "/images/brand/contract-logo-1.webp",
                                      width: 130,
                                      height: 33,
                                      alt: "Certik Logo",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    c &&
                      (0, t.jsx)("div", {
                        className: "col-xl-6 d-none d-xl-block",
                        children: (0, t.jsx)("div", {
                          className: "neo-about-img",
                          children: (0, t.jsx)(i.default, {
                            src: "/images/pepe/about-1.gif",
                            width: 500,
                            height: 720,
                            alt: "Pepe",
                            quality: 40,
                          }),
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
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(
      0,
      [
        4213, 5592, 6423, 9266, 8956, 5802, 1286, 6874, 3063, 7489, 802, 6359,
        4526, 7316, 7677, 1294, 39, 6587, 2621, 3571, 8753, 7321, 589, 6872,
        8441, 1684, 7358,
      ],
      () => s(61414)
    ),
      (_N_E = e.O());
  },
]);
