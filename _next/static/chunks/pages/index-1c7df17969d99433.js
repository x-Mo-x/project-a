(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    9473: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return ls;
          },
        });
      var n = i(2640),
        a = i(9499),
        s = i(917),
        r = i(9008),
        o = i.n(r),
        c = i(5675),
        d = i.n(c),
        l = i(4298),
        h = i.n(l),
        m = i(7294),
        p = i(8933),
        g = i(3047),
        u = i(9920),
        f = i(621),
        x = {
          src: "/_next/static/media/trapezoid-character1.d1b9051f.png",
          height: 744,
          width: 771,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5ElEQVR42mNYvmzaiRfPn/x/9+71nwn9jf/7+jrNGYCgo62BmQEE0lN03d++e/n/woULv0zMTP+npqatA4nHZ0SBFYDBqVPHtjbU1f23VdP95e3n8j+2xMMCJB6V6w5XZOVgpP8/NS3gV3i0//+gdPttIMHgFAdmBkkGBrAqd1urbQFBHv8jE4N/ReS7/I+r9LKCaDU1YAbTNgYWetLq/4PDnX5F5Ln9dwqy2Qp3g6G+LliRo5nJOk8n6/+uPta/4hPj/9fX1buDFTg52oMVWNrYmDu5Ovw3MtD/4x/k9z8o1P8EALUkVG1i6GYVAAAAAElFTkSuQmCC",
        },
        y = {
          src: "/_next/static/media/trapezoid-character2.9c7ee850.png",
          height: 744,
          width: 772,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8ElEQVR42mO4cvXqgZ07d/3fsnXb79Nnzv6ft2qtzfrNWxmAmJkBBPbs3Wd/4cLF/1u3bf998dy5/1dOHN9y5egRBiCGKEhNTgbhdV7Bof8vbt348+i61f/jGjrsOrr7GIAYqAgCTID4//y+nl+T+vr+B0Ul7C4oLGQAYmYGcQlJFmNDQwYgXq9mbPLfwED/p69/8P/knGJ7BhDQ1tJiNjM3ZwBiI0lhgf9KcrK/vQMj/jd19uxiAAEHZ1cQZjY1M2cA4hVWtvb/pZU1fwF99x8IfBgaWzpAmDkmJYsBiA3Xrt/4v6en5+/Hjx9BCs4CALJUdHmqyAPyAAAAAElFTkSuQmCC",
        },
        v = {
          src: "/_next/static/media/trapezoid-character3.c786ed4c.png",
          height: 744,
          width: 771,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA50lEQVR42mPo6uo80dTe+b+1o+tPd2fr/2ndZeYMQNDW1srMAAJ75/W475zd/X9qd8uv2vYZ/7MbF6wDifdNWQhWAAZdJVlbE8P9/6fk9f7avHTT//qGDguQeGNjD0SRU0yK1ZJly/93NLf/mlJX8z+/qHgbSLwgL5+ZISAoBKxqyuTJ22pqav47+fj9Kigo+F9VVWXFAAIzZswEK5g+Y6ZFTGzCfx8vr1/9/f3/29vbtzIgAbCisLDwdSYmJv/Ly8t/9fT0/G9ra3MHy6alp4MVODg4mNfV1f2Pior609LS8r+rq+sEAGuJY2ZJL7+aAAAAAElFTkSuQmCC",
        },
        w = {
          src: "/_next/static/media/trapezoid-outline.6e91a112.png",
          height: 248,
          width: 257,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAJ1BMVEX2v0P1v0P2v0P2v0P1v0P2v0P2v0P1wET1wET2v0P2v0P2v0P2v0O4HLVbAAAADXRSTlMAAAEDAwQHCgsODxEdsoZ9igAAADFJREFUeNpjON49QYFhMsMWRoZohiwmBq4EbgMG5g1sCxgUljFsZWCwZrBkYOLcUQMAyOQJPlYtKsEAAAAASUVORK5CYII=",
        },
        b = i(5810);
      var Z = {
          name: "541mew",
          styles: "width:281px;height:258px;position:relative",
        },
        A = { name: "mov10c", styles: "user-select:none;position:absolute" },
        k = { name: "1fhp903", styles: "width:256px;height:248px" },
        j = {
          name: "tdux5w",
          styles: "user-select:none;bottom:0;right:0;position:absolute",
        },
        _ = { name: "1fhp903", styles: "width:256px;height:248px" };
      function B(e) {
        var t = e.className,
          i = e.image,
          n = e.visible,
          a = e.delay1,
          s = e.delay2,
          r = (0, u.useSpring)({
            from: { clipPath: "inset(100% 0 0 0)" },
            to: { clipPath: "inset(0 0 0 0)" },
            config: { mass: 1, tension: 300, friction: 40 },
            delay: a,
            pause: !n,
          }),
          o = (0, u.useSpring)({
            from: { bottom: 0, right: 0, opacity: 0 },
            to: { bottom: 10, right: 24, opacity: 100 },
            config: { mass: 1, tension: 280, friction: 60 },
            delay: s,
            pause: !n,
          });
        return (0, b.BX)("div", {
          css: Z,
          className: t,
          children: [
            (0, b.tZ)(u.animated.div, {
              style: o,
              css: A,
              children: (0, b.tZ)("div", {
                css: k,
                children: (0, b.tZ)(d(), { src: w, layout: "fill" }),
              }),
            }),
            (0, b.tZ)(u.animated.div, {
              style: r,
              css: j,
              children: (0, b.tZ)("div", {
                css: _,
                children: (0, b.tZ)(d(), { src: i, layout: "fill" }),
              }),
            }),
          ],
        });
      }
      var C = {
          name: "8sorov",
          styles: "width:500px;height:500px;position:relative",
        },
        D = {
          name: "1hq6uui",
          styles: "position:absolute;left:211px;bottom:235px",
        },
        X = {
          name: "10f2fp7",
          styles: "position:absolute;left:112px;bottom:119px",
        },
        O = {
          name: "1x0njn2",
          styles: "position:absolute;left:10px;bottom:10px",
        };
      function E(e) {
        var t = e.className,
          i = (0, m.useRef)(),
          n = (0, f.Z)(i, { root: null, rootMargin: "0px", threshold: 0.5 }),
          a = (0, m.useState)(!1),
          s = a[0],
          r = a[1];
        return (
          (0, m.useEffect)(function () {
            n && n.isIntersecting && r(!0);
          }),
          (0, b.BX)("div", {
            ref: i,
            className: t,
            css: C,
            children: [
              (0, b.tZ)(B, {
                visible: s,
                delay1: 700,
                delay2: 1300,
                css: D,
                image: x,
              }),
              (0, b.tZ)(B, {
                visible: s,
                delay1: 500,
                delay2: 1300,
                css: X,
                image: y,
              }),
              (0, b.tZ)(B, {
                visible: s,
                delay1: 300,
                delay2: 1300,
                css: O,
                image: v,
              }),
            ],
          })
        );
      }
      var T = {
          name: "m61bjq",
          styles: "padding-bottom:100%;position:relative",
        },
        N = {
          name: "1o4n3gn",
          styles: "position:absolute;left:0;right:0;bottom:0;top:0",
        };
      function z(e) {
        var t = e.className,
          i = (0, g.Z)(),
          a = (0, n.Z)(i, 2),
          r = a[0],
          o = a[1].width / 500;
        return (0, b.tZ)("div", {
          className: t,
          css: T,
          ref: r,
          children: (0, b.tZ)("div", {
            css: N,
            children: (0, b.tZ)(E, {
              css: (0, s.iv)(
                {
                  transformOrigin: "top left",
                  transform: "scale(".concat(o, ", ").concat(o, ")"),
                },
                "",
                ""
              ),
            }),
          }),
        });
      }
      var S = {
          Blur: function (e) {
            var t = e.children,
              i = e.fromTop,
              n = e.DisplayDuration,
              a = e.delayDisplay,
              s = (0, m.useRef)(),
              r = (0, f.Z)(s, {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,
              }),
              o = (0, m.useState)(!1),
              c = o[0],
              d = o[1];
            (0, m.useEffect)(function () {
              r && r.isIntersecting && d(!0);
            });
            var l = (0, u.useSpring)({
              from: { opacity: 0 },
              to: { opacity: 1 },
              config: { duration: n || 600 },
              delay: a || 0,
              pause: !c,
            });
            return (0, b.tZ)(b.HY, {
              children: i
                ? (0, b.BX)(u.animated.div, {
                    style: l,
                    children: [(0, b.tZ)(u.animated.span, { ref: s }), t],
                  })
                : (0, b.BX)(u.animated.div, {
                    style: l,
                    children: [t, (0, b.tZ)(u.animated.span, { ref: s })],
                  }),
            });
          },
        },
        M = S,
        R = {
          src: "/_next/static/media/rebels.0a65f68b.png",
          height: 1023,
          width: 1023,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAzklEQVR42mOwszKaWZk8LSVkc3/Nm1vHj86bVB0fEWBtzqCtrTqhKHFxXtz2vpp1S2a25yTOKspJdXFnsNeSq03yW16W2pqXVJWSVJsaVxsTEW1vz6CvI5cT7FDgbcfAwBDl7uxhY57p6prr7c2QE+ncmBmUG+Xn72zDwMAKlC708ohzcmFI8rVoyQztL0kXERMJsjF1MlAPsDBxMdBjiHayLvJzZwABlo1dtckeNrb6ynYGqgz5yZFZCWGh3i622iqJgZ75KdFNpVm1BWkAyTxATNSo8p0AAAAASUVORK5CYII=",
        },
        I = {
          src: "/_next/static/media/assassin.5e4a5bab.png",
          height: 1023,
          width: 1023,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AOzs7O3v8Ovl5OfAueWyqerW0+7t7ezs7ADt7+/s5OPhmYrJcVvcp53iubHn09Du8PEA7fPz6L22xIJ1aExHopmXwKai0aad7u/wAO7x8t68t3RPRwABExoAALxwXc+kmu3u7gDz8fHOxsUAAABKOzd3XlttKQDeysbv8fIA8O/vsbCwAAAAW0xLsp2ajYaEvL6+9PT0AOHh4dLR0X19fQAAANfV1erq6ra2tvHx8QDt7e3i4uK9vbxTVFS2t7fx8fHu7u7s7Owf4IRyQyjsBwAAAABJRU5ErkJggg==",
        },
        q = {
          src: "/_next/static/media/cyborg.2c78d7e8.png",
          height: 1023,
          width: 1023,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAp0lEQVR42h2NywqDMBQF/fvuWwulmxYEC6KCmtTE3Nw8Go1aqBvpol/TKIfZnFlMhCilRMSA6kCB6HC/okAQRsMxnQs2L5+3EBBcEKiVyJ9jwr6sKEcEidsihdCwF9EraUqt/OFqSefCGYHgWWOX9aeNFWaKHz3hTgexJ7RzgzGWMENbHHoLsMeVQu89mul8J3nV1nW9xQOU0jg+Xa63JM0qyhkXiPgHEROLr2AnR/MAAAAASUVORK5CYII=",
        },
        U = {
          src: "/_next/static/media/character_name_tab.ad686b1a.svg",
          height: 42,
          width: 192,
        },
        L = {
          src: "/_next/static/media/barcode_icon.b2d3c977.svg",
          height: 30,
          width: 105,
        },
        P = {
          src: "/_next/static/media/character_no_1.03ffda1e.svg",
          height: 33,
          width: 93,
        },
        G = {
          src: "/_next/static/media/character_no_2.28abe5d4.svg",
          height: 33,
          width: 93,
        },
        F = {
          src: "/_next/static/media/character_no_3.e63c2a39.svg",
          height: 33,
          width: 93,
        },
        W = {
          src: "/_next/static/media/card_under_line_1.30b882e4.svg",
          height: 21,
          width: 8,
        },
        V = {
          src: "/_next/static/media/card_under_line_3.9394d432.svg",
          height: 21,
          width: 18,
        },
        Y = {
          src: "/_next/static/media/character_point.b0b8ccca.svg",
          height: 13,
          width: 13,
        };
      function Q(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Q(Object(i), !0).forEach(function (t) {
                (0, a.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : Q(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      var K = {
        name: "1scjh0r",
        styles:
          "font-family:GoodTimes;padding:4px 8px;background-color:white;font-size:32px;border-radius:2px;color:#0c0c0c",
      };
      function J(e) {
        var t = e.children;
        return (0, b.tZ)("span", { css: K, children: t });
      }
      var $ = {
          name: "1smv11o",
          styles:
            "color:white;max-width:340px;position:relative;border-radius:2px;transition:0.3s ease-out;background:linear-gradient(to bottom, #222222 97%, transparent 3%);&:hover{transform:scale(1.05);}",
        },
        ee = {
          name: "m61bjq",
          styles: "padding-bottom:100%;position:relative",
        },
        te = {
          name: "fqokk1",
          styles: "position:absolute;top:0;bottom:0;left:0;right:0",
        },
        ie = {
          name: "12qs570",
          styles: "width:100%;height:100%;place-items:center",
        },
        ne = { name: "1wl569r", styles: "position:relative;z-index:20" },
        ae = { name: "16rjeye", styles: "max-width:192px;height:auto" },
        se = { name: "1paop1m", styles: "position:absolute;top:7px;left:12px" },
        re = { name: "oldbq4", styles: "user-select:none" },
        oe = {
          name: "1k90e4p",
          styles:
            "font-family:GoodTimes;font-size:17px;font-weight:400;line-height:20px;color:#ffffff;margin-left:5px",
        },
        ce = {
          name: "omwphx",
          styles: "width:100%;height:100%;user-select:none",
        },
        de = { name: "1hc7juc", styles: "min-height:244px;width:100%" },
        le = {
          name: "2hkt3g",
          styles: "background-color:#222222;padding:20px 20px 8px 20px",
        },
        he = {
          name: "1y0qw7q",
          styles:
            "font-family:Barlow;font-weight:300;font-size:16px;height:168px;@media screen and (max-width: 730px){height:auto;min-height:178px;}",
        },
        me = {
          name: "kisc4j",
          styles:
            "user-select:none;display:grid;column-gap:28px;grid-template-columns:repeat(2, auto);justify-content:space-between",
        },
        pe = { name: "16arctp", styles: "min-width:88px" },
        ge = { name: "ahe3gr", styles: "width:104px;height:30px" },
        ue = { name: "zmb3b", styles: "width:100%;display:flex;height:20px" },
        fe = { name: "5pcl6d", styles: "width:8px;height:20px" },
        xe = {
          name: "1itj6lz",
          styles:
            "background:#222222;flex:1 1 0;height:21px;border-bottom:3px solid #7844E4",
        },
        ye = { name: "1u0h02x", styles: "width:18px;height:20px" };
      function ve(e) {
        var t = e.className,
          i = e.name,
          n = e.characterImg,
          a = e.text,
          s = e.tabNoImg;
        return (0, b.tZ)(M.Blur, {
          fromTop: !0,
          delayDisplay: 200,
          DisplayDuration: 1800,
          children: (0, b.BX)("div", {
            className: t,
            css: $,
            children: [
              (0, b.tZ)("div", {
                css: ee,
                children: (0, b.tZ)("div", {
                  css: te,
                  children: (0, b.BX)("div", {
                    css: ie,
                    children: [
                      (0, b.BX)("div", {
                        css: ne,
                        children: [
                          (0, b.tZ)(d(), {
                            alt: "Character name tab",
                            src: U,
                            layout: "fixed",
                            css: ae,
                          }),
                          (0, b.BX)("span", {
                            css: se,
                            children: [
                              (0, b.tZ)(d(), {
                                alt: "",
                                src: Y,
                                layout: "fixed",
                                width: 12,
                                height: 12,
                                css: re,
                              }),
                              (0, b.tZ)("span", { css: oe, children: i }),
                            ],
                          }),
                        ],
                      }),
                      (0, b.tZ)(d(), {
                        alt: "",
                        src: n,
                        layout: "fill",
                        css: ce,
                      }),
                    ],
                  }),
                }),
              }),
              (0, b.BX)("div", {
                css: de,
                children: [
                  (0, b.BX)("div", {
                    css: le,
                    children: [
                      (0, b.tZ)("div", { css: he, children: a }),
                      (0, b.BX)("div", {
                        css: me,
                        children: [
                          (0, b.tZ)(d(), { alt: "", src: s, css: pe }),
                          (0, b.tZ)(d(), { alt: "", src: L, css: ge }),
                        ],
                      }),
                    ],
                  }),
                  (0, b.BX)("div", {
                    css: ue,
                    children: [
                      (0, b.tZ)("div", {
                        children: (0, b.tZ)(d(), { alt: "", src: W, css: fe }),
                      }),
                      (0, b.tZ)("div", { css: xe }),
                      (0, b.tZ)("div", {
                        children: (0, b.tZ)(d(), { alt: "", src: V, css: ye }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var we = {
          name: "r44q63",
          styles:
            "display:flex;align-items:end;flex-direction:column;text-align:end;margin:40px 0",
        },
        be = { name: "9773ne", styles: "height:6px" },
        Ze = { name: "10r8dle", styles: "width:206px" };
      function Ae(e) {
        var t = e.className;
        return (0, b.BX)("div", {
          css: we,
          className: t,
          children: [
            (0, b.tZ)(J, { children: "character" }),
            (0, b.tZ)("div", { css: be }),
            (0, b.tZ)(J, { css: Ze, children: "classes" }),
          ],
        });
      }
      var ke = {
          "@keyframes fadeInOpacity": {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          opacity: 0,
          animationIterationCount: 1,
          animationTimingFunction: "ease",
          animationDuration: "2s",
          animationFillMode: "forwards",
        },
        je = {
          name: "d5gxgf",
          styles:
            "width:100%;display:grid;column-gap:28px;grid-template-columns:repeat(3, 1fr);@media screen and (max-width: 1120px){margin-top:75px;grid-template-columns:repeat(2, auto);row-gap:20px;}@media screen and (max-width: 730px){margin-top:0;grid-template-columns:auto;row-gap:20px;}",
        },
        _e = {
          name: "5k0j7j",
          styles:
            "padding-top:210px;@media screen and (max-width: 1120px){padding-top:0;grid-column: 1 / span 2;}@media screen and (max-width: 730px){padding-top:0;grid-column:1;}",
        },
        Be = {
          name: "15yceyj",
          styles:
            "padding-top:126px;@media screen and (max-width: 1120px){padding-top:10px;grid-column:3;grid-row:1 / span 2;}@media screen and (max-width: 730px){padding-top:0;grid-column:1;grid-row:none;}",
        },
        Ce = {
          name: "bu57ut",
          styles:
            "display:none;@media screen and (max-width: 1120px){display:flex;margin-top:0;@media screen and (max-width: 730px){display:none;}}",
        },
        De = {
          name: "1hu118c",
          styles:
            "padding-top:32px;@media screen and (max-width: 1118px){padding-top:0;grid-column:1 / span 2;}@media screen and (max-width: 730px){padding-top:0;grid-column:auto;}",
        },
        Xe = {
          name: "mdjtf",
          styles: "@media screen and (max-width: 1118px){display:none;}",
        },
        Oe = function (e) {
          var t = e.sectionTop,
            i = (0, m.useState)("none"),
            n = i[0],
            a = i[1];
          return (
            (0, m.useEffect)(
              function () {
                var e = function () {
                  var e = window.pageYOffset;
                  t + 40 <= e && a("fadeInOpacity");
                };
                return (
                  window.addEventListener("scroll", e),
                  function () {
                    window.removeEventListener("scroll", e);
                  }
                );
              },
              [t]
            ),
            (0, b.BX)("div", {
              css: je,
              children: [
                (0, b.tZ)("div", {
                  css: _e,
                  children: (0, b.tZ)(ve, {
                    css: (0, s.iv)(
                      H(
                        H({}, ke),
                        {},
                        { animationName: n, animationDelay: "0s" }
                      ),
                      "",
                      ""
                    ),
                    name: "Rebels",
                    characterImg: R,
                    text: "Born despised and repugnant by society, they rarely live under the spotlight and often hang out with the streetgangs. They hope for freedom no less than other classes. Having nothing to lose, the Rebels look forward to restoring the free will of all mankind.",
                    tabNoImg: P,
                  }),
                }),
                (0, b.BX)("div", {
                  css: Be,
                  children: [
                    (0, b.tZ)(Ae, { css: Ce }),
                    (0, b.tZ)(ve, {
                      css: (0, s.iv)(
                        H(
                          H({}, ke),
                          {},
                          { animationName: n, animationDelay: "0s" }
                        ),
                        "",
                        ""
                      ),
                      name: "Assassin",
                      characterImg: I,
                      text: "A mysterious assassin organization has carried out various assassinations and infiltration missions with unknown intention. Assassins are all genetically modified from natural human bodies, adopted and trained since they were a child.",
                      tabNoImg: G,
                    }),
                  ],
                }),
                (0, b.BX)("div", {
                  css: De,
                  children: [
                    (0, b.tZ)(Ae, { css: Xe }),
                    (0, b.tZ)(ve, {
                      css: (0, s.iv)(
                        H(
                          H({}, ke),
                          {},
                          { animationName: n, animationDelay: "0s" }
                        ),
                        "",
                        ""
                      ),
                      name: "Cyborg",
                      characterImg: q,
                      text: "Cyborgs are technology enthusiasts who hope to engineer their body parts with mechanical components to break the physical limitations. They are now planning to migrate their mind and consciousness into digital form, forever preserving their liveliness. Cyborgs are blurring the line between humans and machines.",
                      tabNoImg: F,
                    }),
                  ],
                }),
              ],
            })
          );
        },
        Ee = {
          src: "/_next/static/media/show.bd108730.svg",
          height: 24,
          width: 24,
        },
        Te = {
          src: "/_next/static/media/hide.4f7fa96c.svg",
          height: 24,
          width: 24,
        },
        Ne = {
          src: "/_next/static/media/faq_bg_top_1.c4d08283.svg",
          height: 8,
          width: 56,
        },
        ze = {
          src: "/_next/static/media/faq_bg_top_2.9febd424.svg",
          height: 8,
          width: 11,
        },
        Se = {
          src: "/_next/static/media/faq_bg_top_3.3931a486.svg",
          height: 8,
          width: 18,
        },
        Me = {
          src: "/_next/static/media/faq_bg_under_line.4169e254.svg",
          height: 22,
          width: 22,
        };
      var Re = { name: "e0dnmk", styles: "cursor:pointer" },
        Ie = { name: "zjik7", styles: "display:flex" },
        qe = {
          name: "ai0hpf",
          styles:
            "border-top:4px solid #ffffff;flex:1 1 0;margin-left:-1px;margin-right:-1px",
        },
        Ue = {
          name: "1dtrqqd",
          styles:
            "border-top:8px solid #ffffff;flex:1 1 0;margin-left:-1px;margin-right:-1px",
        },
        Le = {
          name: "pte87f",
          styles:
            "display:flex;justify-content:space-between;padding:0 20px 0 20px",
        },
        Pe = {
          name: "nwamho",
          styles:
            "font-family:GoodTimes;font-weight:400;font-size:17px;line-height:20px;color:white;user-select:none;user-select:none",
        },
        Ge = {
          name: "xak5r4",
          styles: "width:24px;height:24px;cursor:pointer",
        },
        Fe = { name: "d3v9zr", styles: "overflow:hidden" },
        We = {
          name: "14v0wiu",
          styles:
            "color:#B0B0B0;font-size:16px;font-weight:300;line-height:17px;margin-top:4px;padding:0 20px",
        },
        Ve = { name: "zmb3b", styles: "width:100%;display:flex;height:20px" },
        Ye = {
          name: "15nsw3e",
          styles:
            "flex:1 1 0;height:22px;border-bottom:1px solid white;border-left:1px solid white",
        },
        Qe = { name: "7uu32h", styles: "width:22px;height:22px" };
      function He(e) {
        var t = e.className,
          i = e.title,
          n = e.children,
          r = (0, m.useState)(!1),
          o = r[0],
          c = r[1];
        return (0, b.tZ)(M.Blur, {
          children: (0, b.BX)("div", {
            className: t,
            onClick: function () {
              return c(!o);
            },
            css: Re,
            children: [
              (0, b.BX)("div", {
                css: Ie,
                children: [
                  (0, b.tZ)(d(), { alt: "Character card background", src: Ne }),
                  (0, b.tZ)("div", { css: qe }),
                  (0, b.tZ)(d(), { alt: "Character card background", src: ze }),
                  (0, b.tZ)("div", { css: Ue }),
                  (0, b.tZ)(d(), { alt: "Character card background", src: Se }),
                ],
              }),
              (0, b.BX)("div", {
                css: (0, s.iv)(
                  {
                    border: "1px solid #ffffff",
                    borderBottom: "none",
                    borderTop: "none",
                    padding: "20px 0 0 0 ",
                    marginBottom: -1,
                  },
                  "",
                  ""
                ),
                children: [
                  (0, b.BX)("div", {
                    css: Le,
                    children: [
                      (0, b.tZ)("div", { css: Pe, children: i }),
                      (0, b.tZ)("div", {
                        children: (0, b.tZ)("div", {
                          css: Ge,
                          children: (0, b.tZ)(d(), {
                            alt: "Character card background",
                            src: o ? Te : Ee,
                            layout: "intrinsic",
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, b.tZ)("div", {
                    css: Fe,
                    children: (0, b.tZ)("div", {
                      css: (0, s.iv)(
                        (0, a.Z)(
                          {
                            marginTop: "-90%",
                            transition: "margin-top 0.5s ease",
                          },
                          !0 === o && "&",
                          { marginTop: 0 }
                        ),
                        "",
                        ""
                      ),
                      children: (0, b.tZ)("div", { css: We, children: n }),
                    }),
                  }),
                ],
              }),
              (0, b.BX)("div", {
                css: Ve,
                children: [
                  (0, b.tZ)("div", { css: Ye }),
                  (0, b.tZ)("div", {
                    children: (0, b.tZ)(d(), {
                      alt: "Barcode",
                      src: Me,
                      css: Qe,
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var Ke = i(4730),
        Je = i(6261),
        $e = i(6442),
        et = {
          src: "/_next/static/media/logo.be850175.svg",
          height: 15,
          width: 123,
        },
        tt = {
          src: "/_next/static/media/mint_btn.d470bb1d.svg",
          height: 34,
          width: 94,
        },
        it = {
          src: "/_next/static/media/mint_btn_hover.eda0c902.svg",
          height: 34,
          width: 94,
        },
        nt = {
          src: "/_next/static/media/mint_btn_disabled.a7a1b6b8.svg",
          height: 34,
          width: 94,
        },
        at = {
          src: "/_next/static/media/menu_icon.7f9209bf.svg",
          height: 24,
          width: 24,
        },
        st = {
          src: "/_next/static/media/close_menu_icon.eb4004ce.svg",
          height: 24,
          width: 24,
        },
        rt = ["onClick", "text", "children"];
      function ot(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function ct(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ot(Object(i), !0).forEach(function (t) {
                (0, a.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : ot(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      var dt = (0, m.createContext)(),
        lt = { name: "1cwloic", styles: "width:100%;overflow:hidden" },
        ht = {
          name: "imv8yl",
          styles:
            "height:100%;display:grid;grid-auto-flow:column;grid-auto-columns:100%",
        };
      function mt(e) {
        var t = e.className,
          i = e.children,
          n = e.visible,
          a = (0, m.useState)(0),
          r = a[0],
          o = a[1],
          c = (0, m.useRef)([]),
          d = (0, m.useRef)({}),
          l = (0, m.useRef)(0);
        (0, m.useEffect)(
          function () {
            n || o(0);
          },
          [n]
        );
        var h = (0, m.useCallback)(function () {
            return String(++l.current);
          }, []),
          p = (0, m.useCallback)(function (e, t) {
            return (
              (d.current[e] = t),
              function () {
                delete d.current[e];
              }
            );
          }, []),
          g = (0, m.useCallback)(function (e) {
            o(function (t) {
              return (c.current[t] = e), t + 1;
            });
          }, []),
          u = (0, m.useCallback)(function () {
            o(function (e) {
              return Math.max(0, e - 1);
            });
          }, []);
        return (0, b.tZ)(dt.Provider, {
          value: { getId: h, register: p, onSelect: g, onBack: u },
          children: (0, b.tZ)("div", {
            className: t,
            css: lt,
            children: (0, b.tZ)("div", {
              css: (0, s.iv)(
                {
                  width: "100%",
                  height: "100%",
                  marginLeft: "-".concat(100 * r, "%"),
                  transition: n ? "margin-left .3s ease-in-out" : void 0,
                },
                "",
                ""
              ),
              children: (0, b.BX)("div", {
                css: ht,
                children: [
                  i,
                  c.current.map(function (e) {
                    return (0, b.tZ)(m.Fragment, { children: d.current[e] }, e);
                  }),
                ],
              }),
            }),
          }),
        });
      }
      var pt = { name: "hb7e91", styles: "padding:0 0 50px 40px" },
        gt = {
          name: "15p4h0t",
          styles:
            "font-family:GoodTimes;font-size:14px;font-weight:400;line-height:17px;color:#ffffff",
        };
      function ut(e) {
        var t = e.onClick,
          i = e.text,
          n = e.children,
          a = (0, Ke.Z)(e, rt),
          s = (0, m.useContext)(dt),
          r = s.getId,
          o = s.register,
          c = (s.onSelect, (0, m.useState)(r)[0]);
        return (
          (0, m.useEffect)(
            function () {
              if (n) return o(c, n);
            },
            [o, c, n]
          ),
          (0, b.tZ)(
            "div",
            ct(
              ct({}, a),
              {},
              {
                css: pt,
                onClick: t,
                children: (0, b.tZ)("div", {
                  css: gt,
                  children: (0, b.tZ)("span", { children: i }),
                }),
              }
            )
          )
        );
      }
      var ft = {
          name: "1mgx6n0",
          styles:
            "z-index:999;position:fixed;left:0;top:60px;width:100%;height:100%;color:white;background:#0C0C0C;display:flex;flex-direction:column;padding-top:60px;@media screen and (min-width: 900px){display:none;}",
        },
        xt = { name: "82a6rk", styles: "flex:1" },
        yt = {
          name: "13ku56z",
          styles: "display:flex;flex-direction:column;height:100%",
        },
        vt = { name: "e0dnmk", styles: "cursor:pointer" },
        wt = { name: "e0dnmk", styles: "cursor:pointer" },
        bt = { name: "e0dnmk", styles: "cursor:pointer" },
        Zt = { name: "e0dnmk", styles: "cursor:pointer" },
        At = { name: "e0dnmk", styles: "cursor:pointer" };
      function kt(e) {
        var t = e.className,
          i = e.visible,
          n = e.onClose;
        return (0, b.tZ)("div", {
          css: ft,
          className: t,
          children: (0, b.tZ)(mt, {
            visible: i,
            css: xt,
            children: (0, b.BX)("div", {
              css: yt,
              children: [
                (0, b.tZ)(Je.rU, {
                  smooth: !0,
                  spy: !0,
                  to: "about",
                  offset: -60,
                  css: vt,
                  children: (0, b.tZ)(ut, { text: "about", onClick: n }),
                }),
                (0, b.tZ)(Je.rU, {
                  smooth: !0,
                  spy: !0,
                  to: "story",
                  offset: -60,
                  css: wt,
                  children: (0, b.tZ)(ut, { text: "Story", onClick: n }),
                }),
                (0, b.tZ)(Je.rU, {
                  smooth: !0,
                  spy: !0,
                  to: "CharacterClasses",
                  offset: -60,
                  css: bt,
                  children: (0, b.tZ)(ut, {
                    text: "Character Classes",
                    onClick: n,
                  }),
                }),
                (0, b.tZ)(Je.rU, {
                  smooth: !0,
                  spy: !0,
                  to: "RoadMap",
                  offset: -60,
                  css: Zt,
                  children: (0, b.tZ)(ut, { text: "Road Map", onClick: n }),
                }),
                (0, b.tZ)(Je.rU, {
                  smooth: !0,
                  spy: !0,
                  to: "FAQ",
                  offset: -60,
                  css: At,
                  children: (0, b.tZ)(ut, { text: "FAQ", onClick: n }),
                }),
              ],
            }),
          }),
        });
      }
      var jt = {
        name: "1eh3cz7",
        styles:
          "user-select:none;font-family:GoodTimes;font-weight:400;font-size:14px;line-height:18px;color:#ffffff;margin-right:34px;display:flex;justify-content:center;vertical-align:middle;cursor:pointer;&:hover{color:#EB346E;}@media screen and (max-width: 900px){display:none;}",
      };
      function _t(e) {
        var t = e.title,
          i = e.className;
        return (0, b.tZ)("div", {
          css: jt,
          className: i,
          children: (0, b.tZ)("p", { children: t }),
        });
      }
      var Bt = function (e) {
          var t = e.disabled,
            i = e.onClick,
            a = (0, $e.Z)(function (e) {
              var i = t ? nt : e ? it : tt;
              return (0, b.tZ)(d(), { alt: "", layout: "intrinsic", src: i });
            }),
            r = (0, n.Z)(a, 1)[0];
          return (0, b.tZ)("div", {
            css: (0, s.iv)(
              {
                userSelect: "none",
                cursor: t ? "not-allowed" : "pointer",
                marginTop: 4,
                width: 94,
                height: 34,
                "@media screen and (max-width: 900px)": { marginTop: 0 },
              },
              "",
              ""
            ),
            onClick: function () {
              t || null === i || void 0 === i || i();
            },
            children: r,
          });
        },
        Ct = {
          name: "157q19s",
          styles:
            "width:1140px;height:100%;display:grid;grid-template-columns:auto 1fr auto;margin:0 20px",
        },
        Dt = {
          name: "1j703o4",
          styles:
            "user-select:none;margin-top:28px;@media screen and (max-width: 900px){margin-top:22px;}",
        },
        Xt = { name: "1d3w5wq", styles: "width:100%" },
        Ot = {
          name: "1neg8hs",
          styles:
            "display:flex;padding-top:12px;@media screen and (max-width: 900px){padding-top:14px;}",
        },
        Et = { name: "e0dnmk", styles: "cursor:pointer" },
        Tt = { name: "e0dnmk", styles: "cursor:pointer" },
        Nt = { name: "e0dnmk", styles: "cursor:pointer" },
        zt = { name: "e0dnmk", styles: "cursor:pointer" },
        St = { name: "e0dnmk", styles: "cursor:pointer" },
        Mt = {
          name: "wpimx8",
          styles:
            "display:flex;@media screen and (max-width: 900px){margin-right:24px;}",
        },
        Rt = {
          name: "1ulvpzw",
          styles:
            "display:none;@media screen and (max-width: 900px){display:flex;align-content:center;}",
        },
        It = {
          name: "1b2y8g6",
          styles:
            "user-select:none;width:24px;height:24px;cursor:pointer;margin-top:4px",
        },
        qt = { name: "e0dnmk", styles: "cursor:pointer" },
        Ut = function (e) {
          e.onMint;
          var t = (0, m.useState)(!1),
            i = t[0],
            n = t[1],
            a = (0, m.useState)(!0),
            r = a[0],
            o = a[1];
          return (
            (0, m.useEffect)(function () {
              var e = function () {
                var e = window.pageYOffset;
                o(e <= 40);
              };
              return (
                window.addEventListener("scroll", e),
                function () {
                  window.removeEventListener("scroll", e);
                }
              );
            }, []),
            (0, b.tZ)("header", {
              children: (0, b.tZ)("div", {
                css: (0, s.iv)(
                  {
                    position: "fixed",
                    zIndex: 999,
                    top: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    background: [r ? "transparent" : "rgba(12, 12, 12, 0.6)"],
                    transition: "background 0.5s ease",
                    height: 68,
                    "@media screen and (max-width: 900px)": {
                      height: 60,
                      backgroundColor: "#0C0C0C",
                    },
                  },
                  "",
                  ""
                ),
                children: (0, b.BX)("div", {
                  css: Ct,
                  children: [
                    (0, b.tZ)("div", {
                      css: Dt,
                      children: (0, b.tZ)(d(), {
                        alt: "",
                        src: et,
                        width: 124,
                        height: 16,
                      }),
                    }),
                    (0, b.tZ)("div", { css: Xt }),
                    (0, b.BX)("div", {
                      css: Ot,
                      children: [
                        (0, b.tZ)(Je.rU, {
                          smooth: !0,
                          spy: !0,
                          to: "about",
                          offset: -70,
                          css: Et,
                          children: (0, b.tZ)(_t, { title: "ABOUT" }),
                        }),
                        (0, b.tZ)(Je.rU, {
                          smooth: !0,
                          spy: !0,
                          to: "story",
                          offset: -68,
                          css: Tt,
                          children: (0, b.tZ)(_t, { title: "Story" }),
                        }),
                        (0, b.tZ)(Je.rU, {
                          smooth: !0,
                          spy: !0,
                          to: "CharacterClasses",
                          offset: -68,
                          css: Nt,
                          children: (0, b.tZ)(_t, {
                            title: "Character Classes",
                          }),
                        }),
                        (0, b.tZ)(Je.rU, {
                          smooth: !0,
                          spy: !0,
                          to: "RoadMap",
                          offset: -120,
                          css: zt,
                          children: (0, b.tZ)(_t, { title: "Road Map" }),
                        }),
                        (0, b.tZ)(Je.rU, {
                          smooth: !0,
                          spy: !0,
                          to: "FAQ",
                          offset: -70,
                          css: St,
                          children: (0, b.tZ)(_t, { title: "FAQ" }),
                        }),
                        (0, b.tZ)("div", {
                          css: Mt,
                          children: (0, b.tZ)(Bt, { disabled: !0 }),
                        }),
                        (0, b.tZ)("div", {
                          css: Rt,
                          children: (0, b.tZ)("div", {
                            css: It,
                            onClick: function () {
                              return n(!i);
                            },
                            children: (0, b.tZ)(d(), {
                              alt: "",
                              layout: "intrinsic",
                              src: i ? st : at,
                              css: qt,
                            }),
                          }),
                        }),
                        (0, b.tZ)(kt, {
                          css: (0, s.iv)(
                            {
                              transition: "transform 0.3s ease",
                              transform: i
                                ? "translateX(0)"
                                : "translateX(-100%)",
                            },
                            "",
                            ""
                          ),
                          visible: i,
                          onClose: function () {
                            return n(!1);
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        Lt = i(1472),
        Pt = i(5490),
        Gt = i(6486),
        Ft = i.n(Gt);
      var Wt = {
        name: "lyw3wh",
        styles:
          "user-select:none;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:2px;width:40px;height:40px;border:1px solid #0C0C0C;&:hover{background:#0C0C0C;}",
      };
      var Vt = function (e) {
        var t = e.img,
          i = e.hoverImg,
          n = e.onClick,
          a = (0, m.useState)(t),
          s = a[0],
          r = a[1];
        return (0, b.tZ)("div", {
          css: Wt,
          onMouseEnter: function () {
            return r(i);
          },
          onMouseLeave: function () {
            return r(t);
          },
          onClick: n,
          children: (0, b.tZ)(d(), { src: s, alt: "", width: 10, height: 18 }),
        });
      };
      var Yt = {
        name: "gtk8z1",
        styles:
          "user-select:none;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:2px;width:40px;height:40px;border:1px solid #BD9539",
      };
      var Qt = function (e) {
          var t = e.img,
            i = e.onClick;
          return (0, b.tZ)("div", {
            css: Yt,
            onClick: i,
            children: (0, b.tZ)(d(), {
              src: t,
              alt: "Button icon",
              width: 10,
              height: 18,
            }),
          });
        },
        Ht = {
          src: "/_next/static/media/slider_card_top.da691f88.svg",
          height: 16,
          width: 371,
        },
        Kt = {
          src: "/_next/static/media/road_map_bottom_corner.45521c3d.svg",
          height: 16,
          width: 17,
        },
        Jt = {
          src: "/_next/static/media/road_map_horn.a98e8c11.svg",
          height: 8,
          width: 14,
        },
        $t = {
          src: "/_next/static/media/vector_black_left.c1a5c65d.svg",
          height: 20,
          width: 12,
        },
        ei = {
          src: "/_next/static/media/vector_yellow_left.945719a4.svg",
          height: 20,
          width: 12,
        },
        ti = {
          src: "/_next/static/media/vector_black_right.e26215e4.svg",
          height: 20,
          width: 12,
        },
        ii = {
          src: "/_next/static/media/vector_yellow_right.7ad11b37.svg",
          height: 20,
          width: 12,
        },
        ni = {
          src: "/_next/static/media/vector_golden_left.006ea062.svg",
          height: 20,
          width: 12,
        },
        ai = {
          src: "/_next/static/media/vector_golden_right.cecc4ad1.svg",
          height: 20,
          width: 12,
        };
      function si(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function ri(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? si(Object(i), !0).forEach(function (t) {
                (0, a.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : si(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      function oi(e) {
        var t = e.onClick;
        return (0, b.tZ)(Vt, { img: $t, hoverImg: ei, onClick: t });
      }
      function ci(e) {
        var t = e.onClick;
        return (0, b.tZ)(Vt, { img: ti, hoverImg: ii, onClick: t });
      }
      function di(e) {
        var t = e.onClick;
        return (0, b.tZ)(Qt, { img: ai, onClick: t });
      }
      function li(e) {
        var t = e.onClick;
        return (0, b.tZ)(Qt, { img: ni, onClick: t });
      }
      var hi = [
          {
            title: "NFT Minting Launch",
            text: "Total supply of 6919 NFTs are sold through pre-sale and public sale on our official minting site",
          },
          {
            title: "Merchandise",
            text: "Exclusive merch and figures will be available for all Gyaku\u2019s owners. Lucky NFT holders will have them delivered to their front door.",
          },
          {
            title: "Metaverse NFT Integration",
            text: "Players can import the NFTs they own into the Gyaku Metaverse and use them as their in-game avatars.",
          },
          {
            title: "New In-game Features",
            text: "Looting, combating and adventuring in-game features would be developed progressively, enriching the Metaverse gaming experience of all players.",
          },
          ,
          {
            title: "Gyaku Economy - $GKU",
            text: "The Gyaku Metaverse will have its native currency running through the economy system, supporting the growth of the in-game architecture.",
          },
          {
            title: "Gyaku Marketplace",
            text: "Players can trade and exchange their items through the Gyaku marketplace, flipping weapons and gears for profits.",
          },
        ],
        mi = 370,
        pi = hi.length,
        gi = { name: "oldbq4", styles: "user-select:none" },
        ui = {
          name: "i5wgzd",
          styles: "margin-left:8px;margin-top:4px;width:330px;min-height:108px",
        },
        fi = {
          name: "7zazrq",
          styles: "user-select:none;display:flex;align-content:end",
        },
        xi = {
          name: "137fbyz",
          styles:
            "font-family:GoodTimes;font-weight:400;font-size:17px;line-height:20px;color:white;margin-bottom:12px;user-select:none",
        },
        yi = { name: "zjik7", styles: "display:flex" },
        vi = { name: "17hxlt7", styles: "margin-right:6px;padding-top:8px" },
        wi = {
          name: "1x5g8dy",
          styles:
            "width:4px;height:4px;background:#ffffff;border-radius:1px;color:white",
        },
        bi = {
          name: "lbkpjn",
          styles:
            "font-weight:300;font-size:16px;line-height:17px;color:white;font-family:Barlow;user-select:none",
        },
        Zi = { name: "v519bw", styles: "display:flex;height:16px" },
        Ai = { name: "oldbq4", styles: "user-select:none" };
      function ki(e) {
        var t = e.title,
          i = e.text;
        return (0, b.BX)(Lt.animated.div, {
          css: (0, s.iv)(
            { padding: "0 8px", flex: "none", width: mi, cursor: "pointer" },
            "",
            ""
          ),
          children: [
            (0, b.tZ)(Lt.animated.div, {
              css: gi,
              children: (0, b.tZ)(d(), {
                src: Ht,
                layout: "intrinsic",
                alt: "",
              }),
            }),
            (0, b.tZ)(Lt.animated.div, {
              children: (0, b.BX)(Lt.animated.div, {
                css: ui,
                children: [
                  (0, b.tZ)(Lt.animated.div, {
                    css: fi,
                    children: (0, b.tZ)(d(), {
                      src: Jt,
                      layout: "intrinsic",
                      alt: "",
                    }),
                  }),
                  (0, b.BX)(Lt.animated.div, {
                    css: (0, s.iv)(
                      {
                        borderRadius: "0 1px 0 0",
                        marginBottom: -1,
                        marginTop: -1,
                        minHeight: 78,
                        background: "#0C0C0C",
                        color: "#ffffff",
                        padding: "18px 20px 0 20px",
                      },
                      "",
                      ""
                    ),
                    children: [
                      (0, b.BX)(Lt.animated.div, {
                        css: xi,
                        children: [t, "_"],
                      }),
                      (0, b.BX)(Lt.animated.div, {
                        css: yi,
                        children: [
                          (0, b.tZ)(Lt.animated.div, {
                            css: vi,
                            children: (0, b.tZ)(Lt.animated.div, { css: wi }),
                          }),
                          (0, b.tZ)(Lt.animated.div, { css: bi, children: i }),
                        ],
                      }),
                    ],
                  }),
                  (0, b.BX)(Lt.animated.div, {
                    css: Zi,
                    children: [
                      (0, b.tZ)(Lt.animated.div, {
                        css: (0, s.iv)(
                          {
                            borderRadius: "0 0 1px 0",
                            background: "#0C0C0C",
                            height: 16,
                            flex: "1 1 0",
                            marginRight: -1,
                            boxShadow: "1px 12px 20px 1px rgba(12,12,12,0.3)",
                          },
                          "",
                          ""
                        ),
                      }),
                      (0, b.tZ)(Lt.animated.div, {
                        css: Ai,
                        children: (0, b.tZ)(d(), {
                          src: Kt,
                          layout: "intrinsic",
                          alt: "",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var ji = {
          name: "j1p2h9",
          styles: "display:flex;align-items:center;touch-action:none",
        },
        _i = { name: "gkz06e", styles: "width:150px;background:transparent" },
        Bi = { name: "16g6r6s", styles: "height:132px" },
        Ci = {
          name: "1fggpz",
          styles:
            "display:flex;column-gap:30px;justify-content:end;margin-right:150px;margin-top:66px;@media screen and (max-width: 730px){justify-content:center;margin-right:0;}",
        },
        Di = function () {
          var e = (0, g.Z)(),
            t = (0, n.Z)(e, 2),
            i = t[0],
            a = t[1].width,
            r = (0, m.useState)(0),
            o = r[0],
            c = r[1],
            d = (0, m.useState)(0),
            l = d[0],
            h = d[1],
            p = (0, Pt.useDrag)(function (e) {
              var t = (0, n.Z)(e.movement, 1)[0];
              e.last
                ? (c(
                    (function (e, t, i) {
                      return Ft().clamp(Math.round(e / t), 1 - i, 0) * t;
                    })(o + l, mi, pi)
                  ),
                  h(0))
                : h(Ft().clamp(t, u - o, f - o));
            }),
            u = -(mi * pi + 200 - a),
            f = 200,
            x = o + l,
            y = (0, Lt.useSpring)({ marginLeft: x });
          return (0, b.tZ)(b.HY, {
            children: (0, b.BX)(M.Blur, {
              children: [
                (0, b.BX)(
                  "div",
                  ri(
                    ri({ ref: i }, p()),
                    {},
                    {
                      css: ji,
                      children: [
                        (0, b.tZ)("div", {
                          css: (0, s.iv)(
                            {
                              display: [0 === o ? "block" : "none"],
                              "@media screen and (max-width: 730px)": {
                                display: "none",
                              },
                            },
                            "",
                            ""
                          ),
                          children: (0, b.tZ)("div", { css: _i }),
                        }),
                        (0, b.tZ)(Lt.animated.div, { style: y }),
                        hi.map(function (e, t) {
                          return (0,
                          b.tZ)("div", { css: Bi, children: (0, b.tZ)(ki, { title: e.title, text: e.text }) }, t);
                        }),
                      ],
                    }
                  )
                ),
                (0, b.BX)("div", {
                  css: Ci,
                  children: [
                    0 === o
                      ? (0, b.tZ)(li, {})
                      : (0, b.tZ)(oi, {
                          onClick: function () {
                            return c(o + mi);
                          },
                        }),
                    a > 570 &&
                      (o < u + mi
                        ? (0, b.tZ)(di, {})
                        : (0, b.tZ)(ci, {
                            onClick: function () {
                              return c(o - mi);
                            },
                          })),
                    (a < 570 || 570 === a) &&
                      (o < u + 740
                        ? (0, b.tZ)(di, {})
                        : (0, b.tZ)(ci, {
                            onClick: function () {
                              return c(o - mi);
                            },
                          })),
                  ],
                }),
              ],
            }),
          });
        },
        Xi = {
          src: "/_next/static/media/warning_line_Down.b6d8743d.svg",
          height: 34,
          width: 1600,
        },
        Oi = {
          src: "/_next/static/media/warning_line_Up.585faa28.svg",
          height: 34,
          width: 1600,
        };
      var Ei = {
        name: "1em2h6h",
        styles: "width:1600px;height:34px;user-select:none",
      };
      function Ti(e) {
        var t = e.img;
        return (0, b.tZ)("div", {
          css: Ei,
          children: (0, b.tZ)(d(), { layout: "intrinsic", src: t, alt: "" }),
        });
      }
      var Ni = {
          name: "m2tboa",
          styles:
            "width:100%;height:110px;background-color:transparent;margin-bottom:46px;display:flex;align-items:end",
        },
        zi = {
          name: "f1gvkj",
          styles:
            "margin-top:50px;height:50px;width:100%;overflow:hidden;position:relative;@keyframes marquee{0%{left:-100%;}100%{left:100%;}}",
        },
        Si = {
          name: "1s1mvf3",
          styles:
            "display:block;width:300%;height:50px;position:absolute;overflow:hidden;animation:marquee 120s linear infinite;display:flex;justify-content:space-evenly;margin-left:-100%",
        };
      var Mi = {
          name: "nq8n2z",
          styles:
            "width:100%;height:88px;background-color:transparent;display:flex;margin-top:50px",
        },
        Ri = {
          name: "jtkl6u",
          styles: "height:50px;width:100%;overflow:hidden;position:relative",
        },
        Ii = {
          name: "14btzgy",
          styles:
            "display:block;user-select:none;height:50px;position:absolute;overflow:hidden;@keyframes marqueeOpposite{0%{left:100%;}100%{left:-100%;}}animation:marqueeOpposite 120s linear infinite;display:flex;justify-content:space-evenly;margin-left:-100%",
        };
      var qi = {
          Up: function () {
            return (0, b.tZ)(u.animated.div, {
              css: Ni,
              children: (0, b.tZ)(u.animated.div, {
                css: zi,
                children: (0, b.tZ)(u.animated.div, {
                  css: Si,
                  children: Array.from(Array(51), function (e, t) {
                    return (0,
                    b.tZ)("span", { css: (0, s.iv)({ float: "left", marginRight: -14 }, "", ""), children: (0, b.tZ)(Ti, { img: Oi }) }, t);
                  }),
                }),
              }),
            });
          },
          Down: function () {
            return (0, b.tZ)(u.animated.div, {
              css: Mi,
              children: (0, b.tZ)(u.animated.div, {
                css: Ri,
                children: (0, b.tZ)(u.animated.div, {
                  css: Ii,
                  children: Array.from(Array(51), function (e, t) {
                    return (0,
                    b.tZ)("span", { css: (0, s.iv)({ float: "left", marginRight: -14 }, "", ""), children: (0, b.tZ)(Ti, { img: Xi }) }, t);
                  }),
                }),
              }),
            });
          },
        },
        Ui = {
          src: "/_next/static/media/banner.b498f34b.png",
          height: 2430,
          width: 4320,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAhklEQVR42mNgs3RkMLVnmL+UYcVGhrkrGVbsYEgrZ2fgY2AorxH0DU1Or0wt60qu6Eov75ay82XQt2VgsLCxUDCbL5e8iCFhGXvSEvU0UwYlBllVBjYOIUkxBWcG2WRTnzSXaD8GKVUJNSZuIQYGYTF7BtlGqyivwhrnhp6a2IoMBj0GEUEAPvAfIkyyqVMAAAAASUVORK5CYII=",
        },
        Li = {
          src: "/_next/static/media/slash_right.7485aceb.svg",
          height: 8,
          width: 7,
        },
        Pi = {
          src: "/_next/static/media/city.ddd7826b.png",
          height: 552,
          width: 1440,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAT0lEQVR42mMgCArmHmDPnL6PNW7yXrbiOQfZqucfYo2dsIcxffJepvgpe1kZsmcfkM+de0CqcskRwdIFhxSL5h1USJm5Tylx+j7dkgWHpADA/h1voLP3aQAAAABJRU5ErkJggg==",
        },
        Gi = {
          src: "/_next/static/media/frame_left_bottom.237dade4.svg",
          height: 16,
          width: 16,
        },
        Fi = {
          src: "/_next/static/media/frame_right_bottom.464859d2.svg",
          height: 16,
          width: 16,
        },
        Wi = {
          src: "/_next/static/media/frame_left_top.4e9e72ff.svg",
          height: 16,
          width: 16,
        },
        Vi = {
          src: "/_next/static/media/frame_right_top.351a1b76.svg",
          height: 16,
          width: 16,
        },
        Yi = {
          src: "/_next/static/media/cyber_line_up.5efdf6bb.svg",
          height: 30,
          width: 720,
        },
        Qi = {
          src: "/_next/static/media/cyber_line_down.66d1dda5.svg",
          height: 30,
          width: 720,
        },
        Hi = {
          src: "/_next/static/media/arrow_element_2.d1a1d4a8.svg",
          height: 16,
          width: 149,
        },
        Ki = {
          src: "/_next/static/media/arrow_element.6cf82bf7.svg",
          height: 16,
          width: 139,
        },
        Ji = {
          src: "/_next/static/media/x_element.17da74ef.svg",
          height: 16,
          width: 16,
        },
        $i = {
          src: "/_next/static/media/triangle_icon.74c759e4.svg",
          height: 9,
          width: 12,
        },
        en = {
          src: "/_next/static/media/about_bg.2931df91.svg",
          height: 556,
          width: 1440,
        },
        tn = {
          src: "/_next/static/media/about_slash_left.2a4d5b10.svg",
          height: 8,
          width: 7,
        },
        nn = {
          src: "/_next/static/media/about_slash_right.65939178.svg",
          height: 8,
          width: 7,
        },
        an = {
          src: "/_next/static/media/discord_icon_hover.f314c21b.svg",
          height: 36,
          width: 36,
        },
        sn = {
          src: "/_next/static/media/discord_icon_white.c51aa1cf.svg",
          height: 36,
          width: 36,
        },
        rn = {
          src: "/_next/static/media/medium_icon_hover.075b9665.svg",
          height: 36,
          width: 36,
        },
        on = {
          src: "/_next/static/media/medium_icon_white.a01abfd4.svg",
          height: 36,
          width: 36,
        },
        cn = {
          src: "/_next/static/media/twitter_icon_hover.43d42d9e.svg",
          height: 36,
          width: 36,
        },
        dn = {
          src: "/_next/static/media/twitter_icon_white.7c83d12c.svg",
          height: 36,
          width: 36,
        },
        ln = {
          src: "/_next/static/media/scroll_down_1.2aea628f.svg",
          height: 13,
          width: 26,
        },
        hn = {
          src: "/_next/static/media/scroll_down_2.426bb656.svg",
          height: 11,
          width: 20,
        },
        mn = {
          src: "/_next/static/media/scroll_down_3.ae3f50c3.svg",
          height: 9,
          width: 14,
        },
        pn = {
          src: "/_next/static/media/nft-calendar-logo-500x500.a2156b03.png",
          height: 1e3,
          width: 1e3,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA0UlEQVR42mPAB2Z2X2KEsP4zMAIxE8NzBvaeCftypjSe7Zk87ZgxXGV/3dHqCR1H905sPrF8cvupg7Mqr61edvwqmz+DI8SEaQWXzs8su/pzWvXFnZNaTvZOL7sSChJ/wfCfkaF4UZ/YlOYzl6aXXz0zYe6u7d0T9m6cunpLXtulBMPmXd1cDPOn32BrW7xRtWN//8QppyatnnN6zrIpp/rnTDvTt6TreKMFxBFfGJhLj4XplR5K82g6nqfXcbzWM3NvlH7sTi8hhprN/Yz4vAoAJ/xcnfamW4kAAAAASUVORK5CYII=",
        };
      function gn(e, t, i) {
        return Math.max(t, Math.min(i, e));
      }
      var un = { name: "hfh72s", styles: "display:flex;user-select:none" },
        fn = {
          name: "kgkseo",
          styles:
            "max-width:672px;font-family:Barlow;font-weight:200;font-size:16px;position:relative;padding:14px 10px;background-color:#222222;opacity:0.8;color:white;border:1px solid white",
        },
        xn = { name: "lswira", styles: "margin-bottom:15px;text-align:center" },
        yn = { name: "1efi8gv", styles: "font-weight:bold" },
        vn = {
          name: "198d9lt",
          styles: "display:flex;justify-content:center;margin-bottom:15px",
        },
        wn = {
          name: "1vbtilc",
          styles: "margin:0 auto;display:flex;user-select:none",
        },
        bn = { name: "c3b3oi", styles: "width:12px;height:10px;display:flex" },
        Zn = { name: "1azakc", styles: "text-align:center" },
        An = {
          name: "rcstvv",
          styles: "position:absolute;right:0;top:0;width:16px;height:16px",
        },
        kn = {
          name: "saz6yt",
          styles: "position:absolute;left:0;top:0;width:16px;height:16px",
        },
        jn = {
          name: "b3jf1k",
          styles: "position:absolute;right:0;bottom:0;width:16px;height:16px",
        },
        _n = {
          name: "1xkhj0m",
          styles: "position:absolute;left:0;bottom:0;width:16px;height:16px",
        };
      function Bn(e) {
        var t = e.className,
          i = e.screenWidth,
          n = (0, m.useRef)(),
          a = (0, p.Z)(n),
          r = a.elX,
          o = a.elY,
          c = a.elW,
          l = o - a.elH / 2,
          h = 10 * gn((r - c / 2) / 200, -1, 1),
          g = 13 * -gn(l / 200, -1, 1),
          f = h.toFixed(2),
          x = g.toFixed(2),
          y = (0, u.useSpring)({
            transform: "perspective(900px) rotateY("
              .concat(f, "deg) rotateX(")
              .concat(x, "deg)"),
            config: { mass: 1, tension: 210, friction: 20 },
          });
        function v(e) {
          var t = e.img,
            n = (0.7 * i - 20) / 2,
            a = Math.abs(Math.ceil(n / 8));
          return (0, b.tZ)("div", {
            css: un,
            children: Array.from(
              Array(i > 672 || 672 === i ? 24 : a),
              function (e, i) {
                return (0, b.tZ)(
                  d(),
                  { src: t, alt: "", width: 6, height: 10 },
                  i
                );
              }
            ),
          });
        }
        return (0, b.BX)(u.animated.div, {
          ref: n,
          className: t,
          css: fn,
          style: y,
          children: [
            (0, b.BX)("div", {
              css: xn,
              children: [
                (0, b.tZ)("span", { css: yn, children: "Gyaku \u9006" }),
                " - The Rebels of Metaverse are out of sight from the mainstream Metaverse worlds, the Rebel Gyakus have found their place in the darkest of corners, hidden and quietly altering the world. Mysterious, daunting, hostile, yet a child at heart. The Rebel Gyaku Project aims to unite those who want to be respected.",
              ],
            }),
            (0, b.tZ)("div", {
              css: vn,
              children: (0, b.BX)("div", {
                css: wn,
                children: [
                  (0, b.tZ)(v, { img: tn }),
                  (0, b.tZ)("div", {
                    css: bn,
                    children: (0, b.tZ)(d(), {
                      alt: "",
                      src: $i,
                      layout: "intrinsic",
                    }),
                  }),
                  (0, b.tZ)(v, { img: nn }),
                ],
              }),
            }),
            (0, b.BX)("div", {
              css: Zn,
              children: [
                "Who says we have to be the upper class in order to be accepted? ",
                (0, b.tZ)("br", {}),
                "Rebel and shake the Metaverse with us.",
              ],
            }),
            (0, b.BX)("div", {
              css: (0, s.iv)(
                { position: "absolute", inset: -15, pointerEvents: "none" },
                "",
                ""
              ),
              children: [
                (0, b.tZ)("div", {
                  css: An,
                  children: (0, b.tZ)(d(), {
                    alt: "",
                    src: Vi,
                    layout: "fill",
                  }),
                }),
                (0, b.tZ)("div", {
                  css: kn,
                  children: (0, b.tZ)(d(), {
                    alt: "",
                    src: Wi,
                    layout: "fill",
                  }),
                }),
                (0, b.tZ)("div", {
                  css: jn,
                  children: (0, b.tZ)(d(), {
                    alt: "",
                    src: Fi,
                    layout: "fill",
                  }),
                }),
                (0, b.tZ)("div", {
                  css: _n,
                  children: (0, b.tZ)(d(), {
                    alt: "",
                    src: Gi,
                    layout: "fill",
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var Cn = {
        name: "1scjh0r",
        styles:
          "font-family:GoodTimes;padding:4px 8px;background-color:white;font-size:32px;border-radius:2px;color:#0c0c0c",
      };
      function Dn(e) {
        var t = e.children;
        return (0, b.tZ)("span", { css: Cn, children: t });
      }
      var Xn = {
          name: "r44q63",
          styles:
            "display:flex;align-items:end;flex-direction:column;text-align:end;margin:40px 0",
        },
        On = { name: "9773ne", styles: "height:6px" },
        En = { name: "10r8dle", styles: "width:206px" };
      function Tn(e) {
        var t = e.className;
        return (0, b.BX)("div", {
          css: Xn,
          className: t,
          children: [
            (0, b.tZ)(Dn, { children: "character" }),
            (0, b.tZ)("div", { css: On }),
            (0, b.tZ)(Dn, { css: En, children: "classes" }),
          ],
        });
      }
      var Nn = { name: "zjik7", styles: "display:flex" },
        zn = {
          name: "1yrxp2q",
          styles:
            "display:flex;align-items:center;justify-content:center;flex-direction:column;margin:40px 0 40px 0",
        };
      function Sn(e) {
        var t,
          i = e.screenWidth,
          n = e.actualScreenWidth;
        var r,
          o,
          c = ((r = i), (o = 6), Math.ceil(r / o));
        function l() {
          return (0, b.tZ)("div", {
            css: Nn,
            children: Array.from(Array(c), function (e, t) {
              return (0,
              b.tZ)(d(), { src: Li, alt: "", width: 6, height: 10 }, t);
            }),
          });
        }
        return (0, b.tZ)(M.Blur, {
          children: (0, b.BX)("div", {
            css: zn,
            children: [
              (0, b.tZ)(l, {}),
              (0, b.BX)("div", {
                css: (0, s.iv)(
                  ((t = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    margin: "10px 0",
                    color: "white",
                    fontFamily: "GoodTimes",
                    fontWeight: 400,
                    fontSize: 18,
                    textAlign: "center",
                    lineHeight: "20px",
                  }),
                  (0, a.Z)(t, n < 340 || (340 == n && "&"), {
                    width: i,
                    padding: "0 20px",
                  }),
                  (0, a.Z)(t, 340 < n && n < 730 && "&", { width: 340 }),
                  (0, a.Z)(t, 730 < n || (730 == n && "&"), { width: 410 }),
                  t),
                  "",
                  ""
                ),
                children: [
                  (0, b.tZ)("span", { children: "More to be Announced on " }),
                  (0, b.tZ)("span", {
                    children: "our Twitter & Discord Channel",
                  }),
                ],
              }),
              (0, b.tZ)(l, {}),
            ],
          }),
        });
      }
      var Mn = {
          name: "19hluiy",
          styles:
            "padding-left:60px;padding-right:60px;@media screen and (max-width: 640px){padding-left:20px;padding-right:20px;}",
        },
        Rn = { name: "1oc4dj3", styles: "max-width:1080px;margin:0 auto" };
      function In(e) {
        var t = e.className,
          i = e.children;
        return (0, b.tZ)("section", {
          css: Mn,
          children: (0, b.tZ)("div", { className: t, css: Rn, children: i }),
        });
      }
      var qn = {
          name: "e1k5b1",
          styles: "display:inline-flex;position:absolute;bottom:0",
        },
        Un = {
          name: "1rx4p4j",
          styles: "width:720px;display:flex;align-items:center",
        },
        Ln = {
          name: "1rx4p4j",
          styles: "width:720px;display:flex;align-items:center",
        },
        Pn = {
          name: "1rx4p4j",
          styles: "width:720px;display:flex;align-items:center",
        },
        Gn = {
          name: "1rx4p4j",
          styles: "width:720px;display:flex;align-items:center",
        };
      function Fn() {
        return (0, b.BX)("span", {
          css: qn,
          children: [
            (0, b.tZ)("div", {
              css: Un,
              children: (0, b.tZ)(d(), {
                src: Yi,
                layout: "intrinsic",
                alt: "",
              }),
            }),
            (0, b.tZ)("div", {
              css: Ln,
              children: (0, b.tZ)(d(), {
                src: Yi,
                layout: "intrinsic",
                alt: "",
              }),
            }),
            (0, b.tZ)("div", {
              css: Pn,
              children: (0, b.tZ)(d(), {
                src: Yi,
                layout: "intrinsic",
                alt: "",
              }),
            }),
            (0, b.tZ)("div", {
              css: Gn,
              children: (0, b.tZ)(d(), {
                src: Yi,
                layout: "intrinsic",
                alt: "",
              }),
            }),
          ],
        });
      }
      var Wn = {
          name: "1taf7dz",
          styles: "display:inline-flex;position:absolute;top:0",
        },
        Vn = {
          name: "1rx4p4j",
          styles: "width:720px;display:flex;align-items:center",
        },
        Yn = {
          name: "1rx4p4j",
          styles: "width:720px;display:flex;align-items:center",
        },
        Qn = {
          name: "1rx4p4j",
          styles: "width:720px;display:flex;align-items:center",
        },
        Hn = {
          name: "1rx4p4j",
          styles: "width:720px;display:flex;align-items:center",
        };
      function Kn() {
        return (0, b.BX)("span", {
          css: Wn,
          children: [
            (0, b.tZ)("div", {
              css: Vn,
              children: (0, b.tZ)(d(), {
                src: Qi,
                layout: "intrinsic",
                alt: "",
              }),
            }),
            (0, b.tZ)("div", {
              css: Yn,
              children: (0, b.tZ)(d(), {
                src: Qi,
                layout: "intrinsic",
                alt: "",
              }),
            }),
            (0, b.tZ)("div", {
              css: Qn,
              children: (0, b.tZ)(d(), {
                src: Qi,
                layout: "intrinsic",
                alt: "",
              }),
            }),
            (0, b.tZ)("div", {
              css: Hn,
              children: (0, b.tZ)(d(), {
                src: Qi,
                layout: "intrinsic",
                alt: "",
              }),
            }),
          ],
        });
      }
      var Jn = {
        name: "1uv76ym",
        styles: "width:36px;height:36px;cursor:pointer",
      };
      function $n(e) {
        var t = e.img,
          i = e.hoverImg,
          n = e.onClick,
          a = e.href,
          s = (0, m.useState)(t),
          r = s[0],
          o = s[1];
        return (0, b.tZ)("div", {
          css: Jn,
          onMouseEnter: function () {
            return o(i);
          },
          onMouseLeave: function () {
            return o(t);
          },
          onClick: function () {
            return n;
          },
          children: (0, b.tZ)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: (0, b.tZ)(d(), { src: r, layout: "intrinsic", alt: "" }),
          }),
        });
      }
      var ea = {
        name: "g5llkg",
        styles:
          "margin-top:30px;display:flex;justify-content:center;grid-gap:40px",
      };
      function ta(e) {
        var t = e.discordLink,
          i = e.mediumLink,
          n = e.twitterLink;
        return (0, b.BX)("div", {
          css: ea,
          children: [
            (0, b.tZ)($n, { href: t, img: sn, hoverImg: an }),
            (0, b.tZ)($n, { href: i, img: on, hoverImg: rn }),
            (0, b.tZ)($n, { href: n, img: dn, hoverImg: cn }),
          ],
        });
      }
      var ia = {
          name: "1hhfvbz",
          styles:
            "background: #0C0C0C;overflow:hidden;@media screen and (max-width: 900px){padding-top:58px;}",
        },
        na = {
          name: "1sk9t7c",
          styles: "width:100%;display:flex;position:relative",
        },
        aa = { name: "1nq08h0", styles: "max-width:1440px;margin:0 auto" },
        sa = {
          name: "i4szpu",
          styles:
            "width:100%;position:absolute;bottom:45px;color:#FFFFFF;@media screen and (max-width: 480px){display:none;}",
        },
        ra = {
          name: "xe3q7",
          styles:
            "width:26px;height:13px;margin:0 auto;@media screen and (max-width: 730px){width:20px;}",
        },
        oa = {
          name: "1kljmdq",
          styles:
            "@keyframes mymove{0%{opacity:0.3;}100%{opacity:0.9;}}animation:mymove 1s infinite",
        },
        ca = {
          name: "dcg5x1",
          styles:
            "@keyframes mymove2{0%{opacity:0.7;}100%{opacity:0.3;}}animation:mymove2 1s infinite",
        },
        da = {
          name: "1n1rq3f",
          styles:
            "@keyframes mymove3{0%{opacity:0;}100%{opacity:0.6;}}animation:mymove3 1s infinite",
        },
        la = {
          name: "x5uexw",
          styles:
            "overflow:hidden;background-color:#0c0c0c;min-height:440px;padding:0 20px 150px 20px;@media screen and (max-width: 640px){padding:0 20px 0px 20px;}@media screen and (max-width: 340px){padding:0 20px 20px 20px;}",
        },
        ha = { name: "12snx5u", styles: "position:relative;max-height:502px" },
        ma = {
          name: "1gfxl2z",
          styles: "max-width:1600px;margin:0 auto;overflow:hidden",
        },
        pa = { name: "d3v9zr", styles: "overflow:hidden" },
        ga = {
          name: "1qjx0wn",
          styles:
            "width:1448px;vertical-align:middle;position:relative;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)",
        },
        ua = {
          name: "zz5we1",
          styles:
            "position:absolute;width:100%;top:0;padding:160px 0px 100px 0px;@media screen and (max-width: 640px){padding-top:54px;padding-bottom:0;}",
        },
        fa = {
          name: "18y3zhy",
          styles: "text-align:center;margin-bottom:40px",
        },
        xa = { name: "9th5i", styles: "margin:0 auto" },
        ya = {
          name: "1vxx4f6",
          styles: "background-color:#ff036d;display:flow-root;overflow:hidden",
        },
        va = { name: "bjn8wh", styles: "position:relative" },
        wa = { name: "sewuai", styles: "grid-area:a;align-self:center" },
        ba = { name: "10r0yxn", styles: "line-height:1.65;margin-bottom:44px" },
        Za = {
          name: "1p51z15",
          styles:
            "font-family:Barlow;font-size:16px;font-weight:400;color:white",
        },
        Aa = { name: "tl5uwc", styles: "grid-area:b;align-self:center" },
        ka = {
          name: "foqc4",
          styles:
            "background-color:#0c0c0c;padding:0 20px;display:flex;align-items:center;justify-content:center",
        },
        ja = {
          name: "19hyyz3",
          styles: "display:flex;flex-direction:column;max-width:1080px",
        },
        _a = {
          name: "1nly3oo",
          styles:
            "display:none;@media screen and (max-width: 730px){display:flex;margin-bottom:40px;}",
        },
        Ba = {
          name: "1y8blug",
          styles: "background-color:#f6c044;overflow:hidden",
        },
        Ca = { name: "bjn8wh", styles: "position:relative" },
        Da = {
          name: "1vm7ucj",
          styles:
            "min-height:640px;display:flex;justify-content:center;@media screen and (max-width: 730px){min-height:682px;}",
        },
        Xa = { name: "1d3w5wq", styles: "width:100%" },
        Oa = {
          name: "14lxuq1",
          styles:
            "margin-top:60px;@media screen and (max-width: 730px){margin-top:56px;}",
        },
        Ea = {
          name: "1jdj28c",
          styles:
            "width:100%;margin-bottom:26px;padding-right:150px;@media screen and (max-width: 730px){padding-right:0;}",
        },
        Ta = {
          name: "19wfx49",
          styles: "display:flex;justify-content:end;margin-right:20px",
        },
        Na = { name: "14ipu4x", styles: "flex:1 1 0" },
        za = {
          name: "13qvx2j",
          styles:
            "display:flex;width:100%;padding-left:238px;@media screen and (max-width: 730px){padding-left:52px;}",
        },
        Sa = {
          name: "14hhd6u",
          styles:
            "width:16px;height:16px;animation:rotate 2s ease;@keyframes rotate{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}animation-delay:2.3s",
        },
        Ma = {
          name: "2aug55",
          styles:
            "width:16px;height:16px;animation:rotate2 2s ease;@keyframes rotate2{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}animation-delay:4.3s",
        },
        Ra = {
          name: "16rw07h",
          styles:
            "width:16px;height:16px;animation:rotate3 2s ease;@keyframes rotate3{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}animation-delay:6.3s",
        },
        Ia = {
          name: "1hiwtvf",
          styles:
            "width:16px;height:16px;animation:rotate4 2s ease;@keyframes rotate4{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}animation-delay:8.3s",
        },
        qa = {
          name: "mh3flc",
          styles: "margin:78px 0 68px 0;display:flex;justify-content:center",
        },
        Ua = {
          name: "wc1g3o",
          styles:
            "margin-top:14px;margin-left:160px;@media screen and (max-width: 730px){margin-top:58px;margin-left:20px;}",
        },
        La = {
          name: "1ja1ckn",
          styles:
            "background-color:#0c0c0c;padding:40px 60px;@media screen and (max-width: 640px){padding-left:20px;padding-right:20px;padding-bottom:200px;}",
        },
        Pa = { name: "1oc4dj3", styles: "max-width:1080px;margin:0 auto" },
        Ga = { name: "qkomnt", styles: "margin-bottom:40px" },
        Fa = { name: "xda5ep", styles: "margin-top:12px" },
        Wa = { name: "xda5ep", styles: "margin-top:12px" },
        Va = { name: "xda5ep", styles: "margin-top:12px" },
        Ya = { name: "xda5ep", styles: "margin-top:12px" },
        Qa = { name: "xda5ep", styles: "margin-top:12px" },
        Ha = {
          name: "16bujl5",
          styles:
            "background-color:#0c0c0c;padding-top:88px;@media screen and (max-width: 640px){padding-top:0px;}",
        },
        Ka = { name: "bjn8wh", styles: "position:relative" },
        Ja = { name: "1g7bpnq", styles: "max-width:1600px;margin:0 auto" },
        $a = { name: "d3v9zr", styles: "overflow:hidden" },
        es = {
          name: "1eheyho",
          styles:
            "width:1448px;vertical-align:middle;position:relative;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);@media screen and (max-width: 640px){width:858px;}",
        },
        ts = {
          name: "u63nr",
          styles:
            "height:4px;width:100%;position:absolute;bottom:0;background:#1D1D1D;-webkit-box-shadow:0px 0px 80px 80px #1D1D1D;box-shadow:0px 0px 80px 80px #1D1D1D;color:#1D1D1D",
        },
        is = { name: "1azakc", styles: "text-align:center" },
        ns = { name: "184oy9x", styles: "margin-top:44px;padding:0 20px" },
        as = {
          name: "1phllv3",
          styles:
            "font-family:Barlow;font-weight:300;color:white;font-size:16px;text-align:center;margin:auto;max-width:590px",
        },
        ss = {
          name: "wo3zkh",
          styles: "padding:40px 0 20px 0;text-align:center;background:#1D1D1D",
        },
        rs = {
          name: "1wztkt7",
          styles:
            "margin-bottom:28px;@media screen and (max-width: 640px){margin-bottom:24px;}",
        },
        os = {
          name: "26y721",
          styles: "color:white;font-size:14px;font-weight:400",
        },
        cs = { name: "18uqayh", styles: "margin-bottom:16px" },
        ds = {
          name: "ql1jsx",
          styles:
            "font-weight:300;font-family:Barlow;color:white;font-size:12px",
        };
      function ls() {
        var e = (0, g.Z)(),
          t = (0, n.Z)(e, 2),
          i = t[0],
          a = t[1].width,
          r = (0, g.Z)(),
          c = (0, n.Z)(r, 2),
          l = c[0],
          m = c[1].height;
        return (0, b.BX)("div", {
          children: [
            (0, b.BX)(o(), {
              children: [
                (0, b.tZ)("title", { children: "Gyaku" }),
                (0, b.tZ)("meta", {
                  name: "description",
                  content: "Generated by create next app",
                }),
                (0, b.tZ)("link", { rel: "icon", href: "/favicon_.svg" }),
              ],
            }),
            (0, b.tZ)(h(), {
              id: "google-tag-manager",
              strategy: "afterInteractive",
              dangerouslySetInnerHTML: {
                __html:
                  "\n          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n          })(window,document,'script','dataLayer','GTM-T2B2Q3T');\n          ",
              },
            }),
            (0, b.tZ)("noscript", {
              dangerouslySetInnerHTML: {
                __html:
                  '\n            <iframe\n              src="https://www.googletagmanager.com/ns.html?id=GTM-T2B2Q3T"\n              height="0"\n              width="0"\n              style="display:none;visibility:hidden">\n            </iframe>\n          ',
              },
            }),
            (0, b.tZ)(Ut, {
              onMint: function () {
                console.log("Mint");
              },
            }),
            (0, b.BX)("main", {
              children: [
                (0, b.BX)("div", {
                  ref: l,
                  children: [
                    (0, b.tZ)("section", {
                      css: ia,
                      children: (0, b.BX)("div", {
                        css: na,
                        children: [
                          (0, b.tZ)("div", {
                            css: aa,
                            children: (0, b.tZ)(d(), {
                              src: Ui,
                              layout: "intrinsic",
                              alt: "",
                            }),
                          }),
                          (0, b.BX)("div", {
                            css: sa,
                            children: [
                              (0, b.tZ)("div", {
                                css: (0, s.iv)(
                                  {
                                    font: "Inter",
                                    textAlign: "center",
                                    fontWeight: 400,
                                    fontSize: 12,
                                    lineHeight: "15px",
                                    margin: "0 auto",
                                    paddingBottom: 4,
                                    "@media screen and (max-width: 730px)": {
                                      paddingBottom: 0,
                                      marginBottom: -2,
                                    },
                                  },
                                  "",
                                  ""
                                ),
                                children: "Scroll down",
                              }),
                              (0, b.tZ)("div", {
                                css: ra,
                                children: (0, b.tZ)(d(), {
                                  alt: "",
                                  src: ln,
                                  layout: "intrinsic",
                                  css: oa,
                                }),
                              }),
                              (0, b.tZ)("div", {
                                css: (0, s.iv)(
                                  {
                                    width: 20,
                                    height: 11,
                                    margin: "0 auto",
                                    marginTop: -6,
                                    "@media screen and (max-width: 730px)": {
                                      width: 14,
                                    },
                                  },
                                  "",
                                  ""
                                ),
                                children: (0, b.tZ)(d(), {
                                  alt: "",
                                  src: hn,
                                  layout: "intrinsic",
                                  css: ca,
                                }),
                              }),
                              (0, b.tZ)("div", {
                                css: (0, s.iv)(
                                  {
                                    width: 14,
                                    height: 9,
                                    margin: "0 auto",
                                    marginTop: -6,
                                    "@media screen and (max-width: 730px)": {
                                      width: 8,
                                    },
                                  },
                                  "",
                                  ""
                                ),
                                children: (0, b.tZ)(d(), {
                                  alt: "",
                                  src: mn,
                                  layout: "intrinsic",
                                  css: da,
                                }),
                              }),
                            ],
                          }),
                          (0, b.tZ)(Fn, {}),
                        ],
                      }),
                    }),
                    (0, b.tZ)("section", {
                      id: "about",
                      css: la,
                      children: (0, b.BX)("div", {
                        css: ha,
                        children: [
                          (0, b.tZ)("div", {
                            css: ma,
                            children: (0, b.tZ)("div", {
                              css: pa,
                              children: (0, b.tZ)("div", {
                                css: ga,
                                children: (0, b.tZ)(d(), {
                                  alt: "",
                                  src: en,
                                  layout: "intrinsic",
                                }),
                              }),
                            }),
                          }),
                          (0, b.tZ)("div", {
                            css: ua,
                            children: (0, b.BX)(M.Blur, {
                              fromTop: !0,
                              delayDisplay: 200,
                              DisplayDuration: 1800,
                              children: [
                                (0, b.tZ)("div", {
                                  css: fa,
                                  children: (0, b.tZ)(Dn, {
                                    children: "about",
                                  }),
                                }),
                                (0, b.tZ)(Bn, { css: xa, screenWidth: a }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, b.tZ)("section", {
                  ref: i,
                  id: "story",
                  css: ya,
                  children: (0, b.BX)("div", {
                    css: va,
                    children: [
                      (0, b.tZ)(Kn, {}),
                      (0, b.BX)(M.Blur, {
                        fromTop: !0,
                        delayDisplay: 200,
                        DisplayDuration: 1800,
                        children: [
                          (0, b.tZ)(qi.Up, {}),
                          (0, b.tZ)(In, {
                            children: (0, b.BX)("div", {
                              css: (0, s.iv)(
                                {
                                  display: "grid",
                                  gridTemplate:
                                    '\n                                            "a b" auto /\n                                         minmax(0, 1fr) minmax(0, 1fr)\n                                         ',
                                  gridGap: 40,
                                  "@media screen and (max-width: 800px)": {
                                    gridTemplate:
                                      '\n                                       "b" auto\n                                   "a" auto /\n                                    auto\n                                    ',
                                  },
                                },
                                "",
                                ""
                              ),
                              children: [
                                (0, b.tZ)("div", {
                                  css: wa,
                                  children: (0, b.BX)(M.Blur, {
                                    children: [
                                      (0, b.BX)("div", {
                                        css: ba,
                                        children: [
                                          (0, b.tZ)(Dn, {
                                            children: "project story",
                                          }),
                                          (0, b.tZ)("br", {}),
                                          (0, b.tZ)(Dn, {
                                            children: "outline",
                                          }),
                                        ],
                                      }),
                                      (0, b.tZ)("div", {
                                        css: Za,
                                        children:
                                          "In the year 2055, the Gyaku City is ruled by creatures from outer space. They are smart, technology advanced and long-lived. With Mizu shortage in the whole cosmo space, Gyaku City becomes the only point source of supply. The natural resources are heavily exploited, resulting in devastating famine and social unrest. Years followed by years of indignity and abasement, the Rebels in Gyaku have finally had enough. Even if there is a high wall in front of you, would you stand on the side of the egg and break against it?",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, b.tZ)("div", {
                                  css: Aa,
                                  children: (0, b.tZ)(z, {}),
                                }),
                              ],
                            }),
                          }),
                          (0, b.tZ)(qi.Down, {}),
                        ],
                      }),
                      (0, b.tZ)(Fn, {}),
                    ],
                  }),
                }),
                (0, b.tZ)("section", {
                  id: "CharacterClasses",
                  css: ka,
                  children: (0, b.tZ)(M.Blur, {
                    fromTop: !0,
                    delayDisplay: 200,
                    DisplayDuration: 1800,
                    children: (0, b.BX)("div", {
                      css: ja,
                      children: [
                        (0, b.tZ)(Tn, { css: _a }),
                        (0, b.tZ)(Oe, { sectionTop: m }),
                        a < 340 &&
                          (0, b.tZ)(Sn, {
                            screenWidth: Number(a),
                            actualScreenWidth: a,
                          }),
                        340 < a &&
                          a < 730 &&
                          (0, b.tZ)(Sn, {
                            screenWidth: Number(340),
                            actualScreenWidth: a,
                          }),
                        a > 730 &&
                          (0, b.tZ)(Sn, {
                            screenWidth: Number(400),
                            actualScreenWidth: a,
                          }),
                      ],
                    }),
                  }),
                }),
                (0, b.tZ)("section", {
                  id: "RoadMap",
                  css: Ba,
                  children: (0, b.BX)("div", {
                    css: Ca,
                    children: [
                      (0, b.tZ)(Kn, {}),
                      (0, b.tZ)(Fn, {}),
                      (0, b.tZ)(M.Blur, {
                        fromTop: !0,
                        delayDisplay: 200,
                        DisplayDuration: 1800,
                        children: (0, b.tZ)("div", {
                          css: Da,
                          children: (0, b.BX)("div", {
                            css: Xa,
                            children: [
                              (0, b.BX)("div", {
                                css: Oa,
                                children: [
                                  (0, b.tZ)("div", {
                                    css: Ea,
                                    children: (0, b.BX)("div", {
                                      css: Ta,
                                      children: [
                                        (0, b.tZ)("div", { css: Na }),
                                        (0, b.tZ)(M.Blur, {
                                          children: (0, b.tZ)(d(), {
                                            src: Hi,
                                            layout: "intrinsic",
                                            alt: "",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, b.BX)("div", {
                                    css: za,
                                    children: [
                                      (0, b.tZ)(M.Blur, {
                                        children: (0, b.tZ)("div", {
                                          css: Sa,
                                          children: (0, b.tZ)(d(), {
                                            src: Ji,
                                            layout: "intrinsic",
                                            alt: "",
                                          }),
                                        }),
                                      }),
                                      (0, b.tZ)(M.Blur, {
                                        children: (0, b.tZ)("div", {
                                          css: Ma,
                                          children: (0, b.tZ)(d(), {
                                            src: Ji,
                                            layout: "intrinsic",
                                            alt: "",
                                          }),
                                        }),
                                      }),
                                      (0, b.tZ)(M.Blur, {
                                        children: (0, b.tZ)("div", {
                                          css: Ra,
                                          children: (0, b.tZ)(d(), {
                                            src: Ji,
                                            layout: "intrinsic",
                                            alt: "",
                                          }),
                                        }),
                                      }),
                                      (0, b.tZ)(M.Blur, {
                                        children: (0, b.tZ)("div", {
                                          css: Ia,
                                          children: (0, b.tZ)(d(), {
                                            src: Ji,
                                            layout: "intrinsic",
                                            alt: "",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, b.tZ)("div", {
                                css: qa,
                                children: (0, b.tZ)(Dn, {
                                  children: "Road Map",
                                }),
                              }),
                              (0, b.tZ)(Di, {}),
                              (0, b.tZ)(M.Blur, {
                                children: (0, b.tZ)("div", {
                                  css: Ua,
                                  children: (0, b.tZ)(d(), {
                                    src: Ki,
                                    layout: "intrinsic",
                                    alt: "",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, b.tZ)("section", {
                  id: "FAQ",
                  css: La,
                  children: (0, b.tZ)(M.Blur, {
                    fromTop: !0,
                    children: (0, b.BX)("div", {
                      css: Pa,
                      children: [
                        (0, b.tZ)("div", {
                          css: Ga,
                          children: (0, b.tZ)(Dn, { children: "FAQ" }),
                        }),
                        (0, b.tZ)(He, {
                          title: "Where can I mint an NFT?",
                          children: "You can mint directly from our Website.",
                        }),
                        (0, b.tZ)(He, {
                          css: Fa,
                          title: "How many Gyaku are there going to be?",
                          children:
                            "There will be 6919 unique Gyaku in the Metaverse.",
                        }),
                        (0, b.tZ)(He, {
                          css: Wa,
                          title: "Wen is the mint date?",
                          children:
                            "TBC. Official minting details will be announced on our website, Discord, and our Twitter page.",
                        }),
                        (0, b.tZ)(He, {
                          css: Va,
                          title: "What is NFT?",
                          children:
                            "NFT stands for \u201cNon Fungible Token\u201d which is a non-interchangeable unit of data stored on a blockchain.Ownership of these NFTs will forever be stored on the Ethereum blockchain and the NFTs will never expire.",
                        }),
                        (0, b.tZ)(He, {
                          css: Ya,
                          title: "How to join our discord?",
                          children:
                            "Gyaku is hidden in corners all over the world so we need a channel to exchange intelligence. Discord is a place where the voice of everyone can be heard and respected. We can exchange our intelligence regularly via discord. Find our Discord entry portal on our website!",
                        }),
                        (0, b.tZ)(He, {
                          css: Qa,
                          title: "How to get our whitelist?",
                          children:
                            "To get the Gyaku whitelist, you have to first join our union through Discord and Twitter. We will host numerous community events to giveaway our whitelists there. Stay tuned.",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, b.tZ)("section", {
                  css: Ha,
                  children: (0, b.BX)("div", {
                    css: Ka,
                    children: [
                      (0, b.tZ)("div", {
                        css: Ja,
                        children: (0, b.tZ)("div", {
                          css: $a,
                          children: (0, b.tZ)("div", {
                            css: es,
                            children: (0, b.tZ)(d(), {
                              alt: "",
                              src: Pi,
                              layout: "intrinsic",
                            }),
                          }),
                        }),
                      }),
                      (0, b.tZ)("div", { css: ts }),
                      (0, b.BX)("div", {
                        css: (0, s.iv)(
                          {
                            position: "absolute",
                            width: "100%",
                            top: 0,
                            "@media screen and (max-width: 640px)": {
                              top: -100,
                            },
                          },
                          "",
                          ""
                        ),
                        children: [
                          (0, b.tZ)("div", {
                            css: is,
                            children: (0, b.tZ)(Dn, { children: "JOIN US" }),
                          }),
                          (0, b.tZ)("div", {
                            css: ns,
                            children: (0, b.tZ)(M.Blur, {
                              children: (0, b.BX)("div", {
                                css: as,
                                children: [
                                  "We are the rebels of the Metaverse. ",
                                  (0, b.tZ)("br", {}),
                                  "We are here to redefine the new world order for our benefits, or all humanity will suffer. So why not join the victor\u2019s camp now to alter our inevitable fate? Nothing can stop us.",
                                ],
                              }),
                            }),
                          }),
                          (0, b.tZ)(M.Blur, {
                            children: (0, b.tZ)(ta, {
                              discordLink: "https://discord.com/invite/gyaku",
                              mediumLink: "https://medium.com/@gyakuofficial",
                              twitterLink: "https://twitter.com/Gyaku_official",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, b.tZ)("footer", {
              css: ss,
              children: (0, b.BX)(M.Blur, {
                children: [
                  (0, b.tZ)("div", {
                    css: rs,
                    children: (0, b.tZ)(d(), {
                      alt: "Character name tab",
                      src: et,
                      width: 124,
                      height: 16,
                    }),
                  }),
                  (0, b.tZ)("div", { css: os, children: "As seen on:" }),
                  (0, b.tZ)("div", {
                    css: cs,
                    children: (0, b.tZ)("a", {
                      href: "https://nftcalendar.io/event/gyaku/",
                      target: "_blank",
                      rel: "noreferrer",
                      children: (0, b.tZ)(d(), {
                        alt: "NFT calender logo",
                        src: pn,
                        width: 70,
                        height: 70,
                      }),
                    }),
                  }),
                  (0, b.tZ)("div", { css: ds, children: "Copyright @GYAKU" }),
                ],
              }),
            }),
          ],
        });
      }
    },
    5557: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return i(9473);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [662, 897, 774, 888, 179], function () {
      return (t = 5557), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
