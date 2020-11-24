! function(t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var a = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var a in t) n.d(o, a, function(e) {
                return t[e]
            }.bind(null, a));
        return o
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "public", n(n.s = 1)
}([function(t, e, n) {
    t.exports = function() {
        "use strict";

        function t(e) {
            return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(e)
        }

        function e(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function n(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        function o(t, e, o) {
            return e && n(t.prototype, e), o && n(t, o), t
        }

        function a() {
            return (a = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
                }
                return t
            }).apply(this, arguments)
        }

        function i(t) {
            return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function r(t, e) {
            return (r = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function s() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }

        function l(t, e, n) {
            return (l = s() ? Reflect.construct : function(t, e, n) {
                var o = [null];
                o.push.apply(o, e);
                var a = new(Function.bind.apply(t, o));
                return n && r(a, n.prototype), a
            }).apply(null, arguments)
        }

        function c(t, e) {
            return !e || "object" != typeof e && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function u(t, e, n) {
            return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var o = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = i(t)););
                    return t
                }(t, e);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, e);
                    return a.get ? a.get.call(n) : a.value
                }
            })(t, e, n || t)
        }
        var d = function(t) {
                return Object.keys(t).map((function(e) {
                    return t[e]
                }))
            },
            p = function(t) {
                return Array.prototype.slice.call(t)
            },
            m = function(t) {
                console.warn("".concat("SweetAlert2:", " ").concat(t))
            },
            f = function(t) {
                console.error("".concat("SweetAlert2:", " ").concat(t))
            },
            w = [],
            h = function(t, e) {
                var n;
                n = '"'.concat(t, '" is deprecated and will be removed in the next major release. Please use "').concat(e, '" instead.'), -1 === w.indexOf(n) && (w.push(n), m(n))
            },
            g = function(t) {
                return "function" == typeof t ? t() : t
            },
            b = function(t) {
                return t && "function" == typeof t.toPromise
            },
            y = function(t) {
                return b(t) ? t.toPromise() : Promise.resolve(t)
            },
            v = function(t) {
                return t && Promise.resolve(t) === t
            },
            k = Object.freeze({
                cancel: "cancel",
                backdrop: "backdrop",
                close: "close",
                esc: "esc",
                timer: "timer"
            }),
            x = function(e) {
                return e instanceof Element || function(e) {
                    return "object" === t(e) && e.jquery
                }(e)
            },
            C = function(t) {
                var e = {};
                for (var n in t) e[t[n]] = "swal2-" + t[n];
                return e
            },
            E = C(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "toast-column", "show", "hide", "close", "title", "header", "content", "html-container", "actions", "confirm", "deny", "cancel", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
            A = C(["success", "warning", "info", "question", "error"]),
            O = function() {
                return document.body.querySelector(".".concat(E.container))
            },
            B = function(t) {
                var e = O();
                return e ? e.querySelector(t) : null
            },
            P = function(t) {
                return B(".".concat(t))
            },
            S = function() {
                return P(E.popup)
            },
            T = function() {
                var t = S();
                return p(t.querySelectorAll(".".concat(E.icon)))
            },
            L = function() {
                var t = T().filter((function(t) {
                    return pt(t)
                }));
                return t.length ? t[0] : null
            },
            R = function() {
                return P(E.title)
            },
            j = function() {
                return P(E.content)
            },
            z = function() {
                return P(E.image)
            },
            I = function() {
                return P(E["progress-steps"])
            },
            D = function() {
                return P(E["validation-message"])
            },
            U = function() {
                return B(".".concat(E.actions, " .").concat(E.confirm))
            },
            M = function() {
                return B(".".concat(E.actions, " .").concat(E.deny))
            },
            V = function() {
                return B(".".concat(E.loader))
            },
            q = function() {
                return B(".".concat(E.actions, " .").concat(E.cancel))
            },
            N = function() {
                return P(E.actions)
            },
            H = function() {
                return P(E.header)
            },
            _ = function() {
                return P(E.footer)
            },
            Y = function() {
                return P(E["timer-progress-bar"])
            },
            Z = function() {
                return P(E.close)
            },
            F = function() {
                var t = p(S().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((function(t, e) {
                        return (t = parseInt(t.getAttribute("tabindex"))) > (e = parseInt(e.getAttribute("tabindex"))) ? 1 : t < e ? -1 : 0
                    })),
                    e = p(S().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter((function(t) {
                        return "-1" !== t.getAttribute("tabindex")
                    }));
                return function(t) {
                    for (var e = [], n = 0; n < t.length; n++) - 1 === e.indexOf(t[n]) && e.push(t[n]);
                    return e
                }(t.concat(e)).filter((function(t) {
                    return pt(t)
                }))
            },
            K = function() {
                return !W() && !document.body.classList.contains(E["no-backdrop"])
            },
            W = function() {
                return document.body.classList.contains(E["toast-shown"])
            },
            $ = function() {
                return S().hasAttribute("data-loading")
            },
            G = {
                previousBodyPadding: null
            },
            X = function(t, e) {
                if (t.textContent = "", e) {
                    var n = (new DOMParser).parseFromString(e, "text/html");
                    p(n.querySelector("head").childNodes).forEach((function(e) {
                        t.appendChild(e)
                    })), p(n.querySelector("body").childNodes).forEach((function(e) {
                        t.appendChild(e)
                    }))
                }
            },
            J = function(t, e) {
                if (!e) return !1;
                for (var n = e.split(/\s+/), o = 0; o < n.length; o++)
                    if (!t.classList.contains(n[o])) return !1;
                return !0
            },
            Q = function(e, n, o) {
                if (function(t, e) {
                        p(t.classList).forEach((function(n) {
                            -1 === d(E).indexOf(n) && -1 === d(A).indexOf(n) && -1 === d(e.showClass).indexOf(n) && t.classList.remove(n)
                        }))
                    }(e, n), n.customClass && n.customClass[o]) {
                    if ("string" != typeof n.customClass[o] && !n.customClass[o].forEach) return m("Invalid type of customClass.".concat(o, '! Expected string or iterable object, got "').concat(t(n.customClass[o]), '"'));
                    at(e, n.customClass[o])
                }
            };

        function tt(t, e) {
            if (!e) return null;
            switch (e) {
                case "select":
                case "textarea":
                case "file":
                    return rt(t, E[e]);
                case "checkbox":
                    return t.querySelector(".".concat(E.checkbox, " input"));
                case "radio":
                    return t.querySelector(".".concat(E.radio, " input:checked")) || t.querySelector(".".concat(E.radio, " input:first-child"));
                case "range":
                    return t.querySelector(".".concat(E.range, " input"));
                default:
                    return rt(t, E.input)
            }
        }
        var et, nt = function(t) {
                if (t.focus(), "file" !== t.type) {
                    var e = t.value;
                    t.value = "", t.value = e
                }
            },
            ot = function(t, e, n) {
                t && e && ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)), e.forEach((function(e) {
                    t.forEach ? t.forEach((function(t) {
                        n ? t.classList.add(e) : t.classList.remove(e)
                    })) : n ? t.classList.add(e) : t.classList.remove(e)
                })))
            },
            at = function(t, e) {
                ot(t, e, !0)
            },
            it = function(t, e) {
                ot(t, e, !1)
            },
            rt = function(t, e) {
                for (var n = 0; n < t.childNodes.length; n++)
                    if (J(t.childNodes[n], e)) return t.childNodes[n]
            },
            st = function(t, e, n) {
                n || 0 === parseInt(n) ? t.style[e] = "number" == typeof n ? "".concat(n, "px") : n : t.style.removeProperty(e)
            },
            lt = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "flex";
                t.style.display = e
            },
            ct = function(t) {
                t.style.display = "none"
            },
            ut = function(t, e, n, o) {
                var a = t.querySelector(e);
                a && (a.style[n] = o)
            },
            dt = function(t, e, n) {
                e ? lt(t, n) : ct(t)
            },
            pt = function(t) {
                return !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length))
            },
            mt = function(t) {
                return !!(t.scrollHeight > t.clientHeight)
            },
            ft = function(t) {
                var e = window.getComputedStyle(t),
                    n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
                    o = parseFloat(e.getPropertyValue("transition-duration") || "0");
                return n > 0 || o > 0
            },
            wt = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = Y();
                pt(n) && (e && (n.style.transition = "none", n.style.width = "100%"), setTimeout((function() {
                    n.style.transition = "width ".concat(t / 1e3, "s linear"), n.style.width = "0%"
                }), 10))
            },
            ht = function() {
                return "undefined" == typeof window || "undefined" == typeof document
            },
            gt = '\n <div aria-labelledby="'.concat(E.title, '" aria-describedby="').concat(E.content, '" class="').concat(E.popup, '" tabindex="-1">\n   <div class="').concat(E.header, '">\n     <ul class="').concat(E["progress-steps"], '"></ul>\n     <div class="').concat(E.icon, " ").concat(A.error, '"></div>\n     <div class="').concat(E.icon, " ").concat(A.question, '"></div>\n     <div class="').concat(E.icon, " ").concat(A.warning, '"></div>\n     <div class="').concat(E.icon, " ").concat(A.info, '"></div>\n     <div class="').concat(E.icon, " ").concat(A.success, '"></div>\n     <img class="').concat(E.image, '" />\n     <h2 class="').concat(E.title, '" id="').concat(E.title, '"></h2>\n     <button type="button" class="').concat(E.close, '"></button>\n   </div>\n   <div class="').concat(E.content, '">\n     <div id="').concat(E.content, '" class="').concat(E["html-container"], '"></div>\n     <input class="').concat(E.input, '" />\n     <input type="file" class="').concat(E.file, '" />\n     <div class="').concat(E.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(E.select, '"></select>\n     <div class="').concat(E.radio, '"></div>\n     <label for="').concat(E.checkbox, '" class="').concat(E.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(E.label, '"></span>\n     </label>\n     <textarea class="').concat(E.textarea, '"></textarea>\n     <div class="').concat(E["validation-message"], '" id="').concat(E["validation-message"], '"></div>\n   </div>\n   <div class="').concat(E.actions, '">\n     <div class="').concat(E.loader, '"></div>\n     <button type="button" class="').concat(E.confirm, '"></button>\n     <button type="button" class="').concat(E.deny, '"></button>\n     <button type="button" class="').concat(E.cancel, '"></button>\n   </div>\n   <div class="').concat(E.footer, '"></div>\n   <div class="').concat(E["timer-progress-bar-container"], '">\n     <div class="').concat(E["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
            bt = function(t) {
                kn.isVisible() && et !== t.target.value && kn.resetValidationMessage(), et = t.target.value
            },
            yt = function(t) {
                var e, n = !!(e = O()) && (e.parentNode.removeChild(e), it([document.documentElement, document.body], [E["no-backdrop"], E["toast-shown"], E["has-column"]]), !0);
                if (ht()) f("SweetAlert2 requires document to initialize");
                else {
                    var o = document.createElement("div");
                    o.className = E.container, n && at(o, E["no-transition"]), X(o, gt);
                    var a, i, r, s, l, c, u, d, p, m = "string" == typeof(a = t.target) ? document.querySelector(a) : a;
                    m.appendChild(o),
                        function(t) {
                            var e = S();
                            e.setAttribute("role", t.toast ? "alert" : "dialog"), e.setAttribute("aria-live", t.toast ? "polite" : "assertive"), t.toast || e.setAttribute("aria-modal", "true")
                        }(t),
                        function(t) {
                            "rtl" === window.getComputedStyle(t).direction && at(O(), E.rtl)
                        }(m), i = j(), r = rt(i, E.input), s = rt(i, E.file), l = i.querySelector(".".concat(E.range, " input")), c = i.querySelector(".".concat(E.range, " output")), u = rt(i, E.select), d = i.querySelector(".".concat(E.checkbox, " input")), p = rt(i, E.textarea), r.oninput = bt, s.onchange = bt, u.onchange = bt, d.onchange = bt, p.oninput = bt, l.oninput = function(t) {
                            bt(t), c.value = l.value
                        }, l.onchange = function(t) {
                            bt(t), l.nextSibling.value = l.value
                        }
                }
            },
            vt = function(e, n) {
                e instanceof HTMLElement ? n.appendChild(e) : "object" === t(e) ? kt(e, n) : e && X(n, e)
            },
            kt = function(t, e) {
                t.jquery ? xt(e, t) : X(e, t.toString())
            },
            xt = function(t, e) {
                if (t.textContent = "", 0 in e)
                    for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
                else t.appendChild(e.cloneNode(!0))
            },
            Ct = function() {
                if (ht()) return !1;
                var t = document.createElement("div"),
                    e = {
                        WebkitAnimation: "webkitAnimationEnd",
                        OAnimation: "oAnimationEnd oanimationend",
                        animation: "animationend"
                    };
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n) && void 0 !== t.style[n]) return e[n];
                return !1
            }(),
            Et = function(t, e) {
                var n = N(),
                    o = V(),
                    a = U(),
                    i = M(),
                    r = q();
                e.showConfirmButton || e.showDenyButton || e.showCancelButton || ct(n), Q(n, e, "actions"), At(a, "confirm", e), At(i, "deny", e), At(r, "cancel", e), o.innerHTML = e.loaderHtml, e.buttonsStyling ? function(t, e, n, o) {
                    if (at([t, e, n], E.styled), o.confirmButtonColor && (t.style.backgroundColor = o.confirmButtonColor), o.denyButtonColor && (e.style.backgroundColor = o.denyButtonColor), o.cancelButtonColor && (n.style.backgroundColor = o.cancelButtonColor), !$()) {
                        var a = window.getComputedStyle(t).getPropertyValue("background-color");
                        t.style.borderLeftColor = a, t.style.borderRightColor = a
                    }
                }(a, i, r, e) : it([a, i, r], E.styled), e.reverseButtons && (n.insertBefore(r, o), n.insertBefore(i, o), n.insertBefore(a, o))
            };

        function At(t, e, n) {
            var o;
            dt(t, n["show".concat((o = e, o.charAt(0).toUpperCase() + o.slice(1)), "Button")], "inline-block"), X(t, n["".concat(e, "ButtonText")]), t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")]), t.className = E[e], Q(t, n, "".concat(e, "Button")), at(t, n["".concat(e, "ButtonClass")])
        }
        var Ot = function(t, e) {
                var n = O();
                if (n) {
                    ! function(t, e) {
                        "string" == typeof e ? t.style.background = e : e || at([document.documentElement, document.body], E["no-backdrop"])
                    }(n, e.backdrop), !e.backdrop && e.allowOutsideClick && m('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),
                        function(t, e) {
                            e in E ? at(t, E[e]) : (m('The "position" parameter is not valid, defaulting to "center"'), at(t, E.center))
                        }(n, e.position),
                        function(t, e) {
                            if (e && "string" == typeof e) {
                                var n = "grow-".concat(e);
                                n in E && at(t, E[n])
                            }
                        }(n, e.grow), Q(n, e, "container");
                    var o = document.body.getAttribute("data-swal2-queue-step");
                    o && (n.setAttribute("data-queue-step", o), document.body.removeAttribute("data-swal2-queue-step"))
                }
            },
            Bt = {
                promise: new WeakMap,
                innerParams: new WeakMap,
                domCache: new WeakMap
            },
            Pt = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
            St = function(t) {
                if (!zt[t.input]) return f('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input, '"'));
                var e = jt(t.input),
                    n = zt[t.input](e, t);
                lt(n), setTimeout((function() {
                    nt(n)
                }))
            },
            Tt = function(t, e) {
                var n = tt(j(), t);
                if (n)
                    for (var o in function(t) {
                            for (var e = 0; e < t.attributes.length; e++) {
                                var n = t.attributes[e].name; - 1 === ["type", "value", "style"].indexOf(n) && t.removeAttribute(n)
                            }
                        }(n), e) "range" === t && "placeholder" === o || n.setAttribute(o, e[o])
            },
            Lt = function(t) {
                var e = jt(t.input);
                t.customClass && at(e, t.customClass.input)
            },
            Rt = function(t, e) {
                t.placeholder && !e.inputPlaceholder || (t.placeholder = e.inputPlaceholder)
            },
            jt = function(t) {
                var e = E[t] ? E[t] : E.input;
                return rt(j(), e)
            },
            zt = {};
        zt.text = zt.email = zt.password = zt.number = zt.tel = zt.url = function(e, n) {
            return "string" == typeof n.inputValue || "number" == typeof n.inputValue ? e.value = n.inputValue : v(n.inputValue) || m('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(t(n.inputValue), '"')), Rt(e, n), e.type = n.input, e
        }, zt.file = function(t, e) {
            return Rt(t, e), t
        }, zt.range = function(t, e) {
            var n = t.querySelector("input"),
                o = t.querySelector("output");
            return n.value = e.inputValue, n.type = e.input, o.value = e.inputValue, t
        }, zt.select = function(t, e) {
            if (t.textContent = "", e.inputPlaceholder) {
                var n = document.createElement("option");
                X(n, e.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, t.appendChild(n)
            }
            return t
        }, zt.radio = function(t) {
            return t.textContent = "", t
        }, zt.checkbox = function(t, e) {
            var n = tt(j(), "checkbox");
            n.value = 1, n.id = E.checkbox, n.checked = Boolean(e.inputValue);
            var o = t.querySelector("span");
            return X(o, e.inputPlaceholder), t
        }, zt.textarea = function(t, e) {
            if (t.value = e.inputValue, Rt(t, e), "MutationObserver" in window) {
                var n = parseInt(window.getComputedStyle(S()).width),
                    o = parseInt(window.getComputedStyle(S()).paddingLeft) + parseInt(window.getComputedStyle(S()).paddingRight);
                new MutationObserver((function() {
                    var e = t.offsetWidth + o;
                    S().style.width = e > n ? "".concat(e, "px") : null
                })).observe(t, {
                    attributes: !0,
                    attributeFilter: ["style"]
                })
            }
            return t
        };
        var It = function(t, e) {
                var n = j().querySelector("#".concat(E.content));
                e.html ? (vt(e.html, n), lt(n, "block")) : e.text ? (n.textContent = e.text, lt(n, "block")) : ct(n),
                    function(t, e) {
                        var n = j(),
                            o = Bt.innerParams.get(t),
                            a = !o || e.input !== o.input;
                        Pt.forEach((function(t) {
                            var o = E[t],
                                i = rt(n, o);
                            Tt(t, e.inputAttributes), i.className = o, a && ct(i)
                        })), e.input && (a && St(e), Lt(e))
                    }(t, e), Q(j(), e, "content")
            },
            Dt = function() {
                for (var t = T(), e = 0; e < t.length; e++) ct(t[e])
            },
            Ut = function(t, e) {
                qt(t, e), Mt(), Q(t, e, "icon")
            },
            Mt = function() {
                for (var t = S(), e = window.getComputedStyle(t).getPropertyValue("background-color"), n = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), o = 0; o < n.length; o++) n[o].style.backgroundColor = e
            },
            Vt = function(t, e) {
                t.textContent = "", e.iconHtml ? X(t, Nt(e.iconHtml)) : "success" === e.icon ? X(t, '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ') : "error" === e.icon ? X(t, '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ') : X(t, Nt({
                    question: "?",
                    warning: "!",
                    info: "i"
                } [e.icon]))
            },
            qt = function(t, e) {
                if (e.iconColor) {
                    t.style.color = e.iconColor, t.style.borderColor = e.iconColor;
                    for (var n = 0, o = [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]; n < o.length; n++) ut(t, o[n], "backgroundColor", e.iconColor);
                    ut(t, ".swal2-success-ring", "borderColor", e.iconColor)
                }
            },
            Nt = function(t) {
                return '<div class="'.concat(E["icon-content"], '">').concat(t, "</div>")
            },
            Ht = [],
            _t = function() {
                return O() && O().getAttribute("data-queue-step")
            },
            Yt = function(t, e) {
                var n = I();
                if (!e.progressSteps || 0 === e.progressSteps.length) return ct(n);
                lt(n), n.textContent = "";
                var o = parseInt(void 0 === e.currentProgressStep ? _t() : e.currentProgressStep);
                o >= e.progressSteps.length && m("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), e.progressSteps.forEach((function(t, a) {
                    var i = function(t) {
                        var e = document.createElement("li");
                        return at(e, E["progress-step"]), X(e, t), e
                    }(t);
                    if (n.appendChild(i), a === o && at(i, E["active-progress-step"]), a !== e.progressSteps.length - 1) {
                        var r = function(t) {
                            var e = document.createElement("li");
                            return at(e, E["progress-step-line"]), t.progressStepsDistance && (e.style.width = t.progressStepsDistance), e
                        }(e);
                        n.appendChild(r)
                    }
                }))
            },
            Zt = function(t, e) {
                var n = H();
                Q(n, e, "header"), Yt(0, e),
                    function(t, e) {
                        var n = Bt.innerParams.get(t);
                        if (n && e.icon === n.icon && L()) Ut(L(), e);
                        else if (Dt(), e.icon)
                            if (-1 !== Object.keys(A).indexOf(e.icon)) {
                                var o = B(".".concat(E.icon, ".").concat(A[e.icon]));
                                lt(o), Vt(o, e), Ut(o, e), at(o, e.showClass.icon)
                            } else f('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.icon, '"'))
                    }(t, e),
                    function(t, e) {
                        var n = z();
                        if (!e.imageUrl) return ct(n);
                        lt(n, ""), n.setAttribute("src", e.imageUrl), n.setAttribute("alt", e.imageAlt), st(n, "width", e.imageWidth), st(n, "height", e.imageHeight), n.className = E.image, Q(n, e, "image")
                    }(0, e),
                    function(t, e) {
                        var n = R();
                        dt(n, e.title || e.titleText), e.title && vt(e.title, n), e.titleText && (n.innerText = e.titleText), Q(n, e, "title")
                    }(0, e),
                    function(t, e) {
                        var n = Z();
                        X(n, e.closeButtonHtml), Q(n, e, "closeButton"), dt(n, e.showCloseButton), n.setAttribute("aria-label", e.closeButtonAriaLabel)
                    }(0, e)
            },
            Ft = function(t, e) {
                t.className = "".concat(E.popup, " ").concat(pt(t) ? e.showClass.popup : ""), e.toast ? (at([document.documentElement, document.body], E["toast-shown"]), at(t, E.toast)) : at(t, E.modal), Q(t, e, "popup"), "string" == typeof e.customClass && at(t, e.customClass), e.icon && at(t, E["icon-".concat(e.icon)])
            },
            Kt = function(t, e) {
                ! function(t, e) {
                    var n = S();
                    st(n, "width", e.width), st(n, "padding", e.padding), e.background && (n.style.background = e.background), Ft(n, e)
                }(0, e), Ot(0, e), Zt(t, e), It(t, e), Et(0, e),
                    function(t, e) {
                        var n = _();
                        dt(n, e.footer), e.footer && vt(e.footer, n), Q(n, e, "footer")
                    }(0, e), "function" == typeof e.didRender ? e.didRender(S()) : "function" == typeof e.onRender && e.onRender(S())
            },
            Wt = function() {
                return U() && U().click()
            },
            $t = function() {
                var t = S();
                t || kn.fire(), t = S();
                var e = N(),
                    n = U(),
                    o = V();
                lt(e), ct(n), at([t, e], E.loading), lt(o), t.setAttribute("data-loading", !0), t.setAttribute("aria-busy", !0), t.focus()
            },
            Gt = {},
            Xt = function() {
                return new Promise((function(t) {
                    var e = window.scrollX,
                        n = window.scrollY;
                    Gt.restoreFocusTimeout = setTimeout((function() {
                        Gt.previousActiveElement && Gt.previousActiveElement.focus ? (Gt.previousActiveElement.focus(), Gt.previousActiveElement = null) : document.body && document.body.focus(), t()
                    }), 100), void 0 !== e && void 0 !== n && window.scrollTo(e, n)
                }))
            },
            Jt = function() {
                if (Gt.timeout) return function() {
                    var t = Y(),
                        e = parseInt(window.getComputedStyle(t).width);
                    t.style.removeProperty("transition"), t.style.width = "100%";
                    var n = parseInt(window.getComputedStyle(t).width),
                        o = parseInt(e / n * 100);
                    t.style.removeProperty("transition"), t.style.width = "".concat(o, "%")
                }(), Gt.timeout.stop()
            },
            Qt = function() {
                if (Gt.timeout) {
                    var t = Gt.timeout.start();
                    return wt(t), t
                }
            },
            te = {
                title: "",
                titleText: "",
                text: "",
                html: "",
                footer: "",
                icon: void 0,
                iconColor: void 0,
                iconHtml: void 0,
                toast: !1,
                animation: !0,
                showClass: {
                    popup: "swal2-show",
                    backdrop: "swal2-backdrop-show",
                    icon: "swal2-icon-show"
                },
                hideClass: {
                    popup: "swal2-hide",
                    backdrop: "swal2-backdrop-hide",
                    icon: "swal2-icon-hide"
                },
                customClass: void 0,
                target: "body",
                backdrop: !0,
                heightAuto: !0,
                allowOutsideClick: !0,
                allowEscapeKey: !0,
                allowEnterKey: !0,
                stopKeydownPropagation: !0,
                keydownListenerCapture: !1,
                showConfirmButton: !0,
                showDenyButton: !1,
                showCancelButton: !1,
                preConfirm: void 0,
                confirmButtonText: "OK",
                confirmButtonAriaLabel: "",
                confirmButtonColor: void 0,
                denyButtonText: "No",
                denyButtonAriaLabel: "",
                denyButtonColor: void 0,
                cancelButtonText: "Cancel",
                cancelButtonAriaLabel: "",
                cancelButtonColor: void 0,
                buttonsStyling: !0,
                reverseButtons: !1,
                focusConfirm: !0,
                focusDeny: !1,
                focusCancel: !1,
                showCloseButton: !1,
                closeButtonHtml: "&times;",
                closeButtonAriaLabel: "Close this dialog",
                loaderHtml: "",
                showLoaderOnConfirm: !1,
                imageUrl: void 0,
                imageWidth: void 0,
                imageHeight: void 0,
                imageAlt: "",
                timer: void 0,
                timerProgressBar: !1,
                width: void 0,
                padding: void 0,
                background: void 0,
                input: void 0,
                inputPlaceholder: "",
                inputValue: "",
                inputOptions: {},
                inputAutoTrim: !0,
                inputAttributes: {},
                inputValidator: void 0,
                validationMessage: void 0,
                grow: !1,
                position: "center",
                progressSteps: [],
                currentProgressStep: void 0,
                progressStepsDistance: void 0,
                onBeforeOpen: void 0,
                onOpen: void 0,
                willOpen: void 0,
                didOpen: void 0,
                onRender: void 0,
                didRender: void 0,
                onClose: void 0,
                onAfterClose: void 0,
                willClose: void 0,
                didClose: void 0,
                onDestroy: void 0,
                didDestroy: void 0,
                scrollbarPadding: !0
            },
            ee = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "onAfterClose", "onClose", "onDestroy", "progressSteps", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
            ne = {
                animation: 'showClass" and "hideClass',
                onBeforeOpen: "willOpen",
                onOpen: "didOpen",
                onRender: "didRender",
                onClose: "willClose",
                onAfterClose: "didClose",
                onDestroy: "didDestroy"
            },
            oe = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "heightAuto", "keydownListenerCapture"],
            ae = function(t) {
                return Object.prototype.hasOwnProperty.call(te, t)
            },
            ie = function(t) {
                return ne[t]
            },
            re = function(t) {
                ae(t) || m('Unknown parameter "'.concat(t, '"'))
            },
            se = function(t) {
                -1 !== oe.indexOf(t) && m('The parameter "'.concat(t, '" is incompatible with toasts'))
            },
            le = function(t) {
                ie(t) && h(t, ie(t))
            },
            ce = Object.freeze({
                isValidParameter: ae,
                isUpdatableParameter: function(t) {
                    return -1 !== ee.indexOf(t)
                },
                isDeprecatedParameter: ie,
                argsToParams: function(e) {
                    var n = {};
                    return "object" !== t(e[0]) || x(e[0]) ? ["title", "html", "icon"].forEach((function(o, a) {
                        var i = e[a];
                        "string" == typeof i || x(i) ? n[o] = i : void 0 !== i && f("Unexpected type of ".concat(o, '! Expected "string" or "Element", got ').concat(t(i)))
                    })) : a(n, e[0]), n
                },
                isVisible: function() {
                    return pt(S())
                },
                clickConfirm: Wt,
                clickDeny: function() {
                    return M() && M().click()
                },
                clickCancel: function() {
                    return q() && q().click()
                },
                getContainer: O,
                getPopup: S,
                getTitle: R,
                getContent: j,
                getHtmlContainer: function() {
                    return P(E["html-container"])
                },
                getImage: z,
                getIcon: L,
                getIcons: T,
                getCloseButton: Z,
                getActions: N,
                getConfirmButton: U,
                getDenyButton: M,
                getCancelButton: q,
                getHeader: H,
                getFooter: _,
                getTimerProgressBar: Y,
                getFocusableElements: F,
                getValidationMessage: D,
                isLoading: $,
                fire: function() {
                    for (var t = this, e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                    return l(t, n)
                },
                mixin: function(t) {
                    return function(n) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && r(t, e)
                        }(m, n);
                        var l, d, p = (l = m, d = s(), function() {
                            var t, e = i(l);
                            if (d) {
                                var n = i(this).constructor;
                                t = Reflect.construct(e, arguments, n)
                            } else t = e.apply(this, arguments);
                            return c(this, t)
                        });

                        function m() {
                            return e(this, m), p.apply(this, arguments)
                        }
                        return o(m, [{
                            key: "_main",
                            value: function(e) {
                                return u(i(m.prototype), "_main", this).call(this, a({}, t, e))
                            }
                        }]), m
                    }(this)
                },
                queue: function(t) {
                    var e = this;
                    Ht = t;
                    var n = function(t, e) {
                            Ht = [], t(e)
                        },
                        o = [];
                    return new Promise((function(t) {
                        ! function a(i, r) {
                            i < Ht.length ? (document.body.setAttribute("data-swal2-queue-step", i), e.fire(Ht[i]).then((function(e) {
                                void 0 !== e.value ? (o.push(e.value), a(i + 1, r)) : n(t, {
                                    dismiss: e.dismiss
                                })
                            }))) : n(t, {
                                value: o
                            })
                        }(0)
                    }))
                },
                getQueueStep: _t,
                insertQueueStep: function(t, e) {
                    return e && e < Ht.length ? Ht.splice(e, 0, t) : Ht.push(t)
                },
                deleteQueueStep: function(t) {
                    void 0 !== Ht[t] && Ht.splice(t, 1)
                },
                showLoading: $t,
                enableLoading: $t,
                getTimerLeft: function() {
                    return Gt.timeout && Gt.timeout.getTimerLeft()
                },
                stopTimer: Jt,
                resumeTimer: Qt,
                toggleTimer: function() {
                    var t = Gt.timeout;
                    return t && (t.running ? Jt() : Qt())
                },
                increaseTimer: function(t) {
                    if (Gt.timeout) {
                        var e = Gt.timeout.increase(t);
                        return wt(e, !0), e
                    }
                },
                isTimerRunning: function() {
                    return Gt.timeout && Gt.timeout.isRunning()
                }
            });

        function ue() {
            var t = Bt.innerParams.get(this);
            if (t) {
                var e = Bt.domCache.get(this);
                ct(e.loader), t.showConfirmButton ? lt(e.confirmButton) : t.showConfirmButton || t.showCancelButton || ct(e.actions), it([e.popup, e.actions], E.loading), e.popup.removeAttribute("aria-busy"), e.popup.removeAttribute("data-loading"), e.confirmButton.disabled = !1, e.denyButton.disabled = !1, e.cancelButton.disabled = !1
            }
        }
        var de = function() {
                null === G.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (G.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(G.previousBodyPadding + function() {
                    var t = document.createElement("div");
                    t.className = E["scrollbar-measure"], document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e
                }(), "px"))
            },
            pe = function() {
                navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i) || S().scrollHeight > window.innerHeight - 44 && (O().style.paddingBottom = "".concat(44, "px"))
            },
            me = function() {
                var t, e = O();
                e.ontouchstart = function(e) {
                    t = fe(e.target)
                }, e.ontouchmove = function(e) {
                    t && (e.preventDefault(), e.stopPropagation())
                }
            },
            fe = function(t) {
                var e = O();
                return t === e || !(mt(e) || "INPUT" === t.tagName || mt(j()) && j().contains(t))
            },
            we = function() {
                return !!window.MSInputMethodContext && !!document.documentMode
            },
            he = function() {
                var t = O(),
                    e = S();
                t.style.removeProperty("align-items"), e.offsetTop < 0 && (t.style.alignItems = "flex-start")
            },
            ge = {
                swalPromiseResolve: new WeakMap
            };

        function be(t, e, n, o) {
            n ? Ee(t, o) : (Xt().then((function() {
                return Ee(t, o)
            })), Gt.keydownTarget.removeEventListener("keydown", Gt.keydownHandler, {
                capture: Gt.keydownListenerCapture
            }), Gt.keydownHandlerAdded = !1), e.parentNode && !document.body.getAttribute("data-swal2-queue-step") && e.parentNode.removeChild(e), K() && (null !== G.previousBodyPadding && (document.body.style.paddingRight = "".concat(G.previousBodyPadding, "px"), G.previousBodyPadding = null), function() {
                if (J(document.body, E.iosfix)) {
                    var t = parseInt(document.body.style.top, 10);
                    it(document.body, E.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * t
                }
            }(), "undefined" != typeof window && we() && window.removeEventListener("resize", he), p(document.body.children).forEach((function(t) {
                t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden")
            }))), it([document.documentElement, document.body], [E.shown, E["height-auto"], E["no-backdrop"], E["toast-shown"], E["toast-column"]])
        }

        function ye(t) {
            var e = S();
            if (e) {
                t = ve(t);
                var n = Bt.innerParams.get(this);
                if (n && !J(e, n.hideClass.popup)) {
                    var o = ge.swalPromiseResolve.get(this);
                    it(e, n.showClass.popup), at(e, n.hideClass.popup);
                    var a = O();
                    it(a, n.showClass.backdrop), at(a, n.hideClass.backdrop), ke(this, e, n), o(t)
                }
            }
        }
        var ve = function(t) {
                return void 0 === t ? {
                    isConfirmed: !1,
                    isDenied: !1,
                    isDismissed: !0
                } : a({
                    isConfirmed: !1,
                    isDenied: !1,
                    isDismissed: !1
                }, t)
            },
            ke = function(t, e, n) {
                var o = O(),
                    a = Ct && ft(e),
                    i = n.onClose,
                    r = n.onAfterClose,
                    s = n.willClose,
                    l = n.didClose;
                xe(e, s, i), a ? Ce(t, e, o, l || r) : be(t, o, W(), l || r)
            },
            xe = function(t, e, n) {
                null !== e && "function" == typeof e ? e(t) : null !== n && "function" == typeof n && n(t)
            },
            Ce = function(t, e, n, o) {
                Gt.swalCloseEventFinishedCallback = be.bind(null, t, n, W(), o), e.addEventListener(Ct, (function(t) {
                    t.target === e && (Gt.swalCloseEventFinishedCallback(), delete Gt.swalCloseEventFinishedCallback)
                }))
            },
            Ee = function(t, e) {
                setTimeout((function() {
                    "function" == typeof e && e(), t._destroy()
                }))
            };

        function Ae(t, e, n) {
            var o = Bt.domCache.get(t);
            e.forEach((function(t) {
                o[t].disabled = n
            }))
        }

        function Oe(t, e) {
            if (!t) return !1;
            if ("radio" === t.type)
                for (var n = t.parentNode.parentNode.querySelectorAll("input"), o = 0; o < n.length; o++) n[o].disabled = e;
            else t.disabled = e
        }
        var Be = function() {
                function t(n, o) {
                    e(this, t), this.callback = n, this.remaining = o, this.running = !1, this.start()
                }
                return o(t, [{
                    key: "start",
                    value: function() {
                        return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
                    }
                }, {
                    key: "stop",
                    value: function() {
                        return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date - this.started), this.remaining
                    }
                }, {
                    key: "increase",
                    value: function(t) {
                        var e = this.running;
                        return e && this.stop(), this.remaining += t, e && this.start(), this.remaining
                    }
                }, {
                    key: "getTimerLeft",
                    value: function() {
                        return this.running && (this.stop(), this.start()), this.remaining
                    }
                }, {
                    key: "isRunning",
                    value: function() {
                        return this.running
                    }
                }]), t
            }(),
            Pe = {
                email: function(t, e) {
                    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address")
                },
                url: function(t, e) {
                    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid URL")
                }
            };

        function Se(t) {
            ! function(t) {
                t.inputValidator || Object.keys(Pe).forEach((function(e) {
                    t.input === e && (t.inputValidator = Pe[e])
                }))
            }(t), t.showLoaderOnConfirm && !t.preConfirm && m("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), t.animation = g(t.animation),
                function(t) {
                    (!t.target || "string" == typeof t.target && !document.querySelector(t.target) || "string" != typeof t.target && !t.target.appendChild) && (m('Target parameter is not valid, defaulting to "body"'), t.target = "body")
                }(t), "string" == typeof t.title && (t.title = t.title.split("\n").join("<br />")), yt(t)
        }
        var Te, Le = function(t) {
                var e = O(),
                    n = S();
                "function" == typeof t.willOpen ? t.willOpen(n) : "function" == typeof t.onBeforeOpen && t.onBeforeOpen(n);
                var o = window.getComputedStyle(document.body).overflowY;
                De(e, n, t), setTimeout((function() {
                    ze(e, n)
                }), 10), K() && (Ie(e, t.scrollbarPadding, o), p(document.body.children).forEach((function(t) {
                    t === O() || function(t, e) {
                        if ("function" == typeof t.contains) return t.contains(e)
                    }(t, O()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")), t.setAttribute("aria-hidden", "true"))
                }))), W() || Gt.previousActiveElement || (Gt.previousActiveElement = document.activeElement), Re(n, t), it(e, E["no-transition"])
            },
            Re = function(t, e) {
                "function" == typeof e.didOpen ? setTimeout((function() {
                    return e.didOpen(t)
                })) : "function" == typeof e.onOpen && setTimeout((function() {
                    return e.onOpen(t)
                }))
            },
            je = function t(e) {
                var n = S();
                if (e.target === n) {
                    var o = O();
                    n.removeEventListener(Ct, t), o.style.overflowY = "auto"
                }
            },
            ze = function(t, e) {
                Ct && ft(e) ? (t.style.overflowY = "hidden", e.addEventListener(Ct, je)) : t.style.overflowY = "auto"
            },
            Ie = function(t, e, n) {
                ! function() {
                    if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !J(document.body, E.iosfix)) {
                        var t = document.body.scrollTop;
                        document.body.style.top = "".concat(-1 * t, "px"), at(document.body, E.iosfix), me(), pe()
                    }
                }(), "undefined" != typeof window && we() && (he(), window.addEventListener("resize", he)), e && "hidden" !== n && de(), setTimeout((function() {
                    t.scrollTop = 0
                }))
            },
            De = function(t, e, n) {
                at(t, n.showClass.backdrop), e.style.setProperty("opacity", "0", "important"), lt(e), setTimeout((function() {
                    at(e, n.showClass.popup), e.style.removeProperty("opacity")
                }), 10), at([document.documentElement, document.body], E.shown), n.heightAuto && n.backdrop && !n.toast && at([document.documentElement, document.body], E["height-auto"])
            },
            Ue = function(t) {
                return t.checked ? 1 : 0
            },
            Me = function(t) {
                return t.checked ? t.value : null
            },
            Ve = function(t) {
                return t.files.length ? null !== t.getAttribute("multiple") ? t.files : t.files[0] : null
            },
            qe = function(e, n) {
                var o = j(),
                    a = function(t) {
                        return He[n.input](o, _e(t), n)
                    };
                b(n.inputOptions) || v(n.inputOptions) ? ($t(), y(n.inputOptions).then((function(t) {
                    e.hideLoading(), a(t)
                }))) : "object" === t(n.inputOptions) ? a(n.inputOptions) : f("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(t(n.inputOptions)))
            },
            Ne = function(t, e) {
                var n = t.getInput();
                ct(n), y(e.inputValue).then((function(o) {
                    n.value = "number" === e.input ? parseFloat(o) || 0 : "".concat(o), lt(n), n.focus(), t.hideLoading()
                })).catch((function(e) {
                    f("Error in inputValue promise: ".concat(e)), n.value = "", lt(n), n.focus(), t.hideLoading()
                }))
            },
            He = {
                select: function(t, e, n) {
                    var o = rt(t, E.select),
                        a = function(t, e, o) {
                            var a = document.createElement("option");
                            a.value = o, X(a, e), n.inputValue.toString() === o.toString() && (a.selected = !0), t.appendChild(a)
                        };
                    e.forEach((function(t) {
                        var e = t[0],
                            n = t[1];
                        if (Array.isArray(n)) {
                            var i = document.createElement("optgroup");
                            i.label = e, i.disabled = !1, o.appendChild(i), n.forEach((function(t) {
                                return a(i, t[1], t[0])
                            }))
                        } else a(o, n, e)
                    })), o.focus()
                },
                radio: function(t, e, n) {
                    var o = rt(t, E.radio);
                    e.forEach((function(t) {
                        var e = t[0],
                            a = t[1],
                            i = document.createElement("input"),
                            r = document.createElement("label");
                        i.type = "radio", i.name = E.radio, i.value = e, n.inputValue.toString() === e.toString() && (i.checked = !0);
                        var s = document.createElement("span");
                        X(s, a), s.className = E.label, r.appendChild(i), r.appendChild(s), o.appendChild(r)
                    }));
                    var a = o.querySelectorAll("input");
                    a.length && a[0].focus()
                }
            },
            _e = function e(n) {
                var o = [];
                return "undefined" != typeof Map && n instanceof Map ? n.forEach((function(n, a) {
                    var i = n;
                    "object" === t(i) && (i = e(i)), o.push([a, i])
                })) : Object.keys(n).forEach((function(a) {
                    var i = n[a];
                    "object" === t(i) && (i = e(i)), o.push([a, i])
                })), o
            },
            Ye = function(t, e) {
                var n = function(t, e) {
                    var n = t.getInput();
                    if (!n) return null;
                    switch (e.input) {
                        case "checkbox":
                            return Ue(n);
                        case "radio":
                            return Me(n);
                        case "file":
                            return Ve(n);
                        default:
                            return e.inputAutoTrim ? n.value.trim() : n.value
                    }
                }(t, e);
                e.inputValidator ? (t.disableInput(), Promise.resolve().then((function() {
                    return y(e.inputValidator(n, e.validationMessage))
                })).then((function(o) {
                    t.enableButtons(), t.enableInput(), o ? t.showValidationMessage(o) : Ke(t, e, n)
                }))) : t.getInput().checkValidity() ? Ke(t, e, n) : (t.enableButtons(), t.showValidationMessage(e.validationMessage))
            },
            Ze = function(t) {
                t.closePopup({
                    isDenied: !0,
                    value: !1
                })
            },
            Fe = function(t, e) {
                t.closePopup({
                    isConfirmed: !0,
                    value: e
                })
            },
            Ke = function(t, e, n) {
                e.showLoaderOnConfirm && $t(), e.preConfirm ? (t.resetValidationMessage(), Promise.resolve().then((function() {
                    return y(e.preConfirm(n, e.validationMessage))
                })).then((function(e) {
                    pt(D()) || !1 === e ? t.hideLoading() : Fe(t, void 0 === e ? n : e)
                }))) : Fe(t, n)
            },
            We = function(t, e, n) {
                for (var o = F(), a = 0; a < o.length; a++) return (e += n) === o.length ? e = 0 : -1 === e && (e = o.length - 1), o[e].focus();
                S().focus()
            },
            $e = ["ArrowRight", "ArrowDown", "Right", "Down"],
            Ge = ["ArrowLeft", "ArrowUp", "Left", "Up"],
            Xe = ["Escape", "Esc"],
            Je = function(t, e, n) {
                var o = Bt.innerParams.get(t);
                o.stopKeydownPropagation && e.stopPropagation(), "Enter" === e.key ? Qe(t, e, o) : "Tab" === e.key ? tn(e, o) : -1 !== [].concat($e, Ge).indexOf(e.key) ? en(e.key) : -1 !== Xe.indexOf(e.key) && nn(e, o, n)
            },
            Qe = function(t, e, n) {
                if (!e.isComposing && e.target && t.getInput() && e.target.outerHTML === t.getInput().outerHTML) {
                    if (-1 !== ["textarea", "file"].indexOf(n.input)) return;
                    Wt(), e.preventDefault()
                }
            },
            tn = function(t, e) {
                for (var n = t.target, o = F(), a = -1, i = 0; i < o.length; i++)
                    if (n === o[i]) {
                        a = i;
                        break
                    } t.shiftKey ? We(0, a, -1) : We(0, a, 1), t.stopPropagation(), t.preventDefault()
            },
            en = function(t) {
                if (-1 !== [U(), M(), q()].indexOf(document.activeElement)) {
                    var e = -1 !== $e.indexOf(t) ? "nextElementSibling" : "previousElementSibling",
                        n = document.activeElement[e];
                    n && n.focus()
                }
            },
            nn = function(t, e, n) {
                g(e.allowEscapeKey) && (t.preventDefault(), n(k.esc))
            },
            on = function(t, e, n) {
                e.popup.onclick = function() {
                    var e = Bt.innerParams.get(t);
                    e.showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton || e.input || n(k.close)
                }
            },
            an = !1,
            rn = function(t) {
                t.popup.onmousedown = function() {
                    t.container.onmouseup = function(e) {
                        t.container.onmouseup = void 0, e.target === t.container && (an = !0)
                    }
                }
            },
            sn = function(t) {
                t.container.onmousedown = function() {
                    t.popup.onmouseup = function(e) {
                        t.popup.onmouseup = void 0, (e.target === t.popup || t.popup.contains(e.target)) && (an = !0)
                    }
                }
            },
            ln = function(t, e, n) {
                e.container.onclick = function(o) {
                    var a = Bt.innerParams.get(t);
                    an ? an = !1 : o.target === e.container && g(a.allowOutsideClick) && n(k.backdrop)
                }
            },
            cn = function(t) {
                var e = a({}, te.showClass, t.showClass),
                    n = a({}, te.hideClass, t.hideClass),
                    o = a({}, te, t);
                return o.showClass = e, o.hideClass = n, !1 === t.animation && (o.showClass = {
                    popup: "swal2-noanimation",
                    backdrop: "swal2-noanimation"
                }, o.hideClass = {}), o
            },
            un = function(t, e, n) {
                return new Promise((function(o) {
                    var a = function(e) {
                        t.closePopup({
                            isDismissed: !0,
                            dismiss: e
                        })
                    };
                    ge.swalPromiseResolve.set(t, o), e.confirmButton.onclick = function() {
                            return function(t, e) {
                                t.disableButtons(), e.input ? Ye(t, e) : Ke(t, e, !0)
                            }(t, n)
                        }, e.denyButton.onclick = function() {
                            return function(t) {
                                t.disableButtons(), Ze(t)
                            }(t)
                        }, e.cancelButton.onclick = function() {
                            return function(t, e) {
                                t.disableButtons(), e(k.cancel)
                            }(t, a)
                        }, e.closeButton.onclick = function() {
                            return a(k.close)
                        },
                        function(t, e, n) {
                            Bt.innerParams.get(t).toast ? on(t, e, n) : (rn(e), sn(e), ln(t, e, n))
                        }(t, e, a),
                        function(t, e, n, o) {
                            e.keydownTarget && e.keydownHandlerAdded && (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, {
                                capture: e.keydownListenerCapture
                            }), e.keydownHandlerAdded = !1), n.toast || (e.keydownHandler = function(e) {
                                return Je(t, e, o)
                            }, e.keydownTarget = n.keydownListenerCapture ? window : S(), e.keydownListenerCapture = n.keydownListenerCapture, e.keydownTarget.addEventListener("keydown", e.keydownHandler, {
                                capture: e.keydownListenerCapture
                            }), e.keydownHandlerAdded = !0)
                        }(t, Gt, n, a), n.toast && (n.input || n.footer || n.showCloseButton) ? at(document.body, E["toast-column"]) : it(document.body, E["toast-column"]),
                        function(t, e) {
                            "select" === e.input || "radio" === e.input ? qe(t, e) : -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(e.input) && (b(e.inputValue) || v(e.inputValue)) && Ne(t, e)
                        }(t, n), Le(n), pn(Gt, n, a), mn(e, n), setTimeout((function() {
                            e.container.scrollTop = 0
                        }))
                }))
            },
            dn = function(t) {
                var e = {
                    popup: S(),
                    container: O(),
                    content: j(),
                    actions: N(),
                    confirmButton: U(),
                    denyButton: M(),
                    cancelButton: q(),
                    loader: V(),
                    closeButton: Z(),
                    validationMessage: D(),
                    progressSteps: I()
                };
                return Bt.domCache.set(t, e), e
            },
            pn = function(t, e, n) {
                var o = Y();
                ct(o), e.timer && (t.timeout = new Be((function() {
                    n("timer"), delete t.timeout
                }), e.timer), e.timerProgressBar && (lt(o), setTimeout((function() {
                    t.timeout.running && wt(e.timer)
                }))))
            },
            mn = function(t, e) {
                if (!e.toast) return g(e.allowEnterKey) ? void(fn(t, e) || We(0, -1, 1)) : wn()
            },
            fn = function(t, e) {
                return e.focusDeny && pt(t.denyButton) ? (t.denyButton.focus(), !0) : e.focusCancel && pt(t.cancelButton) ? (t.cancelButton.focus(), !0) : !(!e.focusConfirm || !pt(t.confirmButton) || (t.confirmButton.focus(), 0))
            },
            wn = function() {
                document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()
            },
            hn = function(t) {
                "function" == typeof t.didDestroy ? t.didDestroy() : "function" == typeof t.onDestroy && t.onDestroy()
            },
            gn = function(t) {
                delete t.params, delete Gt.keydownHandler, delete Gt.keydownTarget, bn(Bt), bn(ge)
            },
            bn = function(t) {
                for (var e in t) t[e] = new WeakMap
            },
            yn = Object.freeze({
                hideLoading: ue,
                disableLoading: ue,
                getInput: function(t) {
                    var e = Bt.innerParams.get(t || this),
                        n = Bt.domCache.get(t || this);
                    return n ? tt(n.content, e.input) : null
                },
                close: ye,
                closePopup: ye,
                closeModal: ye,
                closeToast: ye,
                enableButtons: function() {
                    Ae(this, ["confirmButton", "denyButton", "cancelButton"], !1)
                },
                disableButtons: function() {
                    Ae(this, ["confirmButton", "denyButton", "cancelButton"], !0)
                },
                enableInput: function() {
                    return Oe(this.getInput(), !1)
                },
                disableInput: function() {
                    return Oe(this.getInput(), !0)
                },
                showValidationMessage: function(t) {
                    var e = Bt.domCache.get(this);
                    X(e.validationMessage, t);
                    var n = window.getComputedStyle(e.popup);
                    e.validationMessage.style.marginLeft = "-".concat(n.getPropertyValue("padding-left")), e.validationMessage.style.marginRight = "-".concat(n.getPropertyValue("padding-right")), lt(e.validationMessage);
                    var o = this.getInput();
                    o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedBy", E["validation-message"]), nt(o), at(o, E.inputerror))
                },
                resetValidationMessage: function() {
                    var t = Bt.domCache.get(this);
                    t.validationMessage && ct(t.validationMessage);
                    var e = this.getInput();
                    e && (e.removeAttribute("aria-invalid"), e.removeAttribute("aria-describedBy"), it(e, E.inputerror))
                },
                getProgressSteps: function() {
                    return Bt.domCache.get(this).progressSteps
                },
                _main: function(t) {
                    ! function(t) {
                        for (var e in t) re(e), t.toast && se(e), le(e)
                    }(t), Gt.currentInstance && Gt.currentInstance._destroy(), Gt.currentInstance = this;
                    var e = cn(t);
                    Se(e), Object.freeze(e), Gt.timeout && (Gt.timeout.stop(), delete Gt.timeout), clearTimeout(Gt.restoreFocusTimeout);
                    var n = dn(this);
                    return Kt(this, e), Bt.innerParams.set(this, e), un(this, n, e)
                },
                update: function(t) {
                    var e = S(),
                        n = Bt.innerParams.get(this);
                    if (!e || J(e, n.hideClass.popup)) return m("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
                    var o = {};
                    Object.keys(t).forEach((function(e) {
                        kn.isUpdatableParameter(e) ? o[e] = t[e] : m('Invalid parameter to update: "'.concat(e, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))
                    }));
                    var i = a({}, n, o);
                    Kt(this, i), Bt.innerParams.set(this, i), Object.defineProperties(this, {
                        params: {
                            value: a({}, this.params, t),
                            writable: !1,
                            enumerable: !0
                        }
                    })
                },
                _destroy: function() {
                    var t = Bt.domCache.get(this),
                        e = Bt.innerParams.get(this);
                    e && (t.popup && Gt.swalCloseEventFinishedCallback && (Gt.swalCloseEventFinishedCallback(), delete Gt.swalCloseEventFinishedCallback), Gt.deferDisposalTimer && (clearTimeout(Gt.deferDisposalTimer), delete Gt.deferDisposalTimer), hn(e), gn(this))
                }
            }),
            vn = function() {
                function t() {
                    if (e(this, t), "undefined" != typeof window) {
                        "undefined" == typeof Promise && f("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), Te = this;
                        for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                        var i = Object.freeze(this.constructor.argsToParams(o));
                        Object.defineProperties(this, {
                            params: {
                                value: i,
                                writable: !1,
                                enumerable: !0,
                                configurable: !0
                            }
                        });
                        var r = this._main(this.params);
                        Bt.promise.set(this, r)
                    }
                }
                return o(t, [{
                    key: "then",
                    value: function(t) {
                        return Bt.promise.get(this).then(t)
                    }
                }, {
                    key: "finally",
                    value: function(t) {
                        return Bt.promise.get(this).finally(t)
                    }
                }]), t
            }();
        a(vn.prototype, yn), a(vn, ce), Object.keys(yn).forEach((function(t) {
            vn[t] = function() {
                var e;
                if (Te) return (e = Te)[t].apply(e, arguments)
            }
        })), vn.DismissReason = k, vn.version = "10.3.5";
        var kn = vn;
        return kn.default = kn, kn
    }(), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2), "undefined" != typeof document && function(t, e) {
        var n = t.createElement("style");
        if (t.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = e);
        else try {
            n.innerHTML = e
        } catch (t) {
            n.innerText = e
        }
    }(document, '.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0 1.6em}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#3085d6 transparent #3085d6 transparent}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dd6b55;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:.3125em;border-bottom-left-radius:.3125em}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}')
}, function(t, e, n) {
    "use strict";

    function o(t) {
        return document.getElementById(t)
    }
    n.r(e);
    const a = {
        latin_map: {
            "Á": "A",
            "Ă": "A",
            "Ắ": "A",
            "Ặ": "A",
            "Ằ": "A",
            "Ẳ": "A",
            "Ẵ": "A",
            "Ǎ": "A",
            "Â": "A",
            "Ấ": "A",
            "Ậ": "A",
            "Ầ": "A",
            "Ẩ": "A",
            "Ẫ": "A",
            "Ä": "A",
            "Ǟ": "A",
            "Ȧ": "A",
            "Ǡ": "A",
            "Ạ": "A",
            "Ȁ": "A",
            "À": "A",
            "Ả": "A",
            "Ȃ": "A",
            "Ā": "A",
            "Ą": "A",
            "Å": "A",
            "Ǻ": "A",
            "Ḁ": "A",
            "Ⱥ": "A",
            "Ã": "A",
            "Ꜳ": "AA",
            "Æ": "AE",
            "Ǽ": "AE",
            "Ǣ": "AE",
            "Ꜵ": "AO",
            "Ꜷ": "AU",
            "Ꜹ": "AV",
            "Ꜻ": "AV",
            "Ꜽ": "AY",
            "Ḃ": "B",
            "Ḅ": "B",
            "Ɓ": "B",
            "Ḇ": "B",
            "Ƀ": "B",
            "Ƃ": "B",
            "Ć": "C",
            "Č": "C",
            "Ç": "C",
            "Ḉ": "C",
            "Ĉ": "C",
            "Ċ": "C",
            "Ƈ": "C",
            "Ȼ": "C",
            "Ď": "D",
            "Ḑ": "D",
            "Ḓ": "D",
            "Ḋ": "D",
            "Ḍ": "D",
            "Ɗ": "D",
            "Ḏ": "D",
            "ǲ": "D",
            "ǅ": "D",
            "Đ": "D",
            "Ƌ": "D",
            "Ǳ": "DZ",
            "Ǆ": "DZ",
            "É": "E",
            "Ĕ": "E",
            "Ě": "E",
            "Ȩ": "E",
            "Ḝ": "E",
            "Ê": "E",
            "Ế": "E",
            "Ệ": "E",
            "Ề": "E",
            "Ể": "E",
            "Ễ": "E",
            "Ḙ": "E",
            "Ë": "E",
            "Ė": "E",
            "Ẹ": "E",
            "Ȅ": "E",
            "È": "E",
            "Ẻ": "E",
            "Ȇ": "E",
            "Ē": "E",
            "Ḗ": "E",
            "Ḕ": "E",
            "Ę": "E",
            "Ɇ": "E",
            "Ẽ": "E",
            "Ḛ": "E",
            "Ꝫ": "ET",
            "Ḟ": "F",
            "Ƒ": "F",
            "Ǵ": "G",
            "Ğ": "G",
            "Ǧ": "G",
            "Ģ": "G",
            "Ĝ": "G",
            "Ġ": "G",
            "Ɠ": "G",
            "Ḡ": "G",
            "Ǥ": "G",
            "Ḫ": "H",
            "Ȟ": "H",
            "Ḩ": "H",
            "Ĥ": "H",
            "Ⱨ": "H",
            "Ḧ": "H",
            "Ḣ": "H",
            "Ḥ": "H",
            "Ħ": "H",
            "Í": "I",
            "Ĭ": "I",
            "Ǐ": "I",
            "Î": "I",
            "Ï": "I",
            "Ḯ": "I",
            "İ": "I",
            "Ị": "I",
            "Ȉ": "I",
            "Ì": "I",
            "Ỉ": "I",
            "Ȋ": "I",
            "Ī": "I",
            "Į": "I",
            "Ɨ": "I",
            "Ĩ": "I",
            "Ḭ": "I",
            "Ꝺ": "D",
            "Ꝼ": "F",
            "Ᵹ": "G",
            "Ꞃ": "R",
            "Ꞅ": "S",
            "Ꞇ": "T",
            "Ꝭ": "IS",
            "Ĵ": "J",
            "Ɉ": "J",
            "Ḱ": "K",
            "Ǩ": "K",
            "Ķ": "K",
            "Ⱪ": "K",
            "Ꝃ": "K",
            "Ḳ": "K",
            "Ƙ": "K",
            "Ḵ": "K",
            "Ꝁ": "K",
            "Ꝅ": "K",
            "Ĺ": "L",
            "Ƚ": "L",
            "Ľ": "L",
            "Ļ": "L",
            "Ḽ": "L",
            "Ḷ": "L",
            "Ḹ": "L",
            "Ⱡ": "L",
            "Ꝉ": "L",
            "Ḻ": "L",
            "Ŀ": "L",
            "Ɫ": "L",
            "ǈ": "L",
            "Ł": "L",
            "Ǉ": "LJ",
            "Ḿ": "M",
            "Ṁ": "M",
            "Ṃ": "M",
            "Ɱ": "M",
            "Ń": "N",
            "Ň": "N",
            "Ņ": "N",
            "Ṋ": "N",
            "Ṅ": "N",
            "Ṇ": "N",
            "Ǹ": "N",
            "Ɲ": "N",
            "Ṉ": "N",
            "Ƞ": "N",
            "ǋ": "N",
            "Ñ": "N",
            "Ǌ": "NJ",
            "Ó": "O",
            "Ŏ": "O",
            "Ǒ": "O",
            "Ô": "O",
            "Ố": "O",
            "Ộ": "O",
            "Ồ": "O",
            "Ổ": "O",
            "Ỗ": "O",
            "Ö": "O",
            "Ȫ": "O",
            "Ȯ": "O",
            "Ȱ": "O",
            "Ọ": "O",
            "Ő": "O",
            "Ȍ": "O",
            "Ò": "O",
            "Ỏ": "O",
            "Ơ": "O",
            "Ớ": "O",
            "Ợ": "O",
            "Ờ": "O",
            "Ở": "O",
            "Ỡ": "O",
            "Ȏ": "O",
            "Ꝋ": "O",
            "Ꝍ": "O",
            "Ō": "O",
            "Ṓ": "O",
            "Ṑ": "O",
            "Ɵ": "O",
            "Ǫ": "O",
            "Ǭ": "O",
            "Ø": "O",
            "Ǿ": "O",
            "Õ": "O",
            "Ṍ": "O",
            "Ṏ": "O",
            "Ȭ": "O",
            "Ƣ": "OI",
            "Ꝏ": "OO",
            "Ɛ": "E",
            "Ɔ": "O",
            "Ȣ": "OU",
            "Ṕ": "P",
            "Ṗ": "P",
            "Ꝓ": "P",
            "Ƥ": "P",
            "Ꝕ": "P",
            "Ᵽ": "P",
            "Ꝑ": "P",
            "Ꝙ": "Q",
            "Ꝗ": "Q",
            "Ŕ": "R",
            "Ř": "R",
            "Ŗ": "R",
            "Ṙ": "R",
            "Ṛ": "R",
            "Ṝ": "R",
            "Ȑ": "R",
            "Ȓ": "R",
            "Ṟ": "R",
            "Ɍ": "R",
            "Ɽ": "R",
            "Ꜿ": "C",
            "Ǝ": "E",
            "Ś": "S",
            "Ṥ": "S",
            "Š": "S",
            "Ṧ": "S",
            "Ş": "S",
            "Ŝ": "S",
            "Ș": "S",
            "Ṡ": "S",
            "Ṣ": "S",
            "Ṩ": "S",
            "Ť": "T",
            "Ţ": "T",
            "Ṱ": "T",
            "Ț": "T",
            "Ⱦ": "T",
            "Ṫ": "T",
            "Ṭ": "T",
            "Ƭ": "T",
            "Ṯ": "T",
            "Ʈ": "T",
            "Ŧ": "T",
            "Ɐ": "A",
            "Ꞁ": "L",
            "Ɯ": "M",
            "Ʌ": "V",
            "Ꜩ": "TZ",
            "Ú": "U",
            "Ŭ": "U",
            "Ǔ": "U",
            "Û": "U",
            "Ṷ": "U",
            "Ü": "U",
            "Ǘ": "U",
            "Ǚ": "U",
            "Ǜ": "U",
            "Ǖ": "U",
            "Ṳ": "U",
            "Ụ": "U",
            "Ű": "U",
            "Ȕ": "U",
            "Ù": "U",
            "Ủ": "U",
            "Ư": "U",
            "Ứ": "U",
            "Ự": "U",
            "Ừ": "U",
            "Ử": "U",
            "Ữ": "U",
            "Ȗ": "U",
            "Ū": "U",
            "Ṻ": "U",
            "Ų": "U",
            "Ů": "U",
            "Ũ": "U",
            "Ṹ": "U",
            "Ṵ": "U",
            "Ꝟ": "V",
            "Ṿ": "V",
            "Ʋ": "V",
            "Ṽ": "V",
            "Ꝡ": "VY",
            "Ẃ": "W",
            "Ŵ": "W",
            "Ẅ": "W",
            "Ẇ": "W",
            "Ẉ": "W",
            "Ẁ": "W",
            "Ⱳ": "W",
            "Ẍ": "X",
            "Ẋ": "X",
            "Ý": "Y",
            "Ŷ": "Y",
            "Ÿ": "Y",
            "Ẏ": "Y",
            "Ỵ": "Y",
            "Ỳ": "Y",
            "Ƴ": "Y",
            "Ỷ": "Y",
            "Ỿ": "Y",
            "Ȳ": "Y",
            "Ɏ": "Y",
            "Ỹ": "Y",
            "Ź": "Z",
            "Ž": "Z",
            "Ẑ": "Z",
            "Ⱬ": "Z",
            "Ż": "Z",
            "Ẓ": "Z",
            "Ȥ": "Z",
            "Ẕ": "Z",
            "Ƶ": "Z",
            "Ĳ": "IJ",
            "Œ": "OE",
            "ᴀ": "A",
            "ᴁ": "AE",
            "ʙ": "B",
            "ᴃ": "B",
            "ᴄ": "C",
            "ᴅ": "D",
            "ᴇ": "E",
            "ꜰ": "F",
            "ɢ": "G",
            "ʛ": "G",
            "ʜ": "H",
            "ɪ": "I",
            "ʁ": "R",
            "ᴊ": "J",
            "ᴋ": "K",
            "ʟ": "L",
            "ᴌ": "L",
            "ᴍ": "M",
            "ɴ": "N",
            "ᴏ": "O",
            "ɶ": "OE",
            "ᴐ": "O",
            "ᴕ": "OU",
            "ᴘ": "P",
            "ʀ": "R",
            "ᴎ": "N",
            "ᴙ": "R",
            "ꜱ": "S",
            "ᴛ": "T",
            "ⱻ": "E",
            "ᴚ": "R",
            "ᴜ": "U",
            "ᴠ": "V",
            "ᴡ": "W",
            "ʏ": "Y",
            "ᴢ": "Z",
            "á": "a",
            "ă": "a",
            "ắ": "a",
            "ặ": "a",
            "ằ": "a",
            "ẳ": "a",
            "ẵ": "a",
            "ǎ": "a",
            "â": "a",
            "ấ": "a",
            "ậ": "a",
            "ầ": "a",
            "ẩ": "a",
            "ẫ": "a",
            "ä": "a",
            "ǟ": "a",
            "ȧ": "a",
            "ǡ": "a",
            "ạ": "a",
            "ȁ": "a",
            "à": "a",
            "ả": "a",
            "ȃ": "a",
            "ā": "a",
            "ą": "a",
            "ᶏ": "a",
            "ẚ": "a",
            "å": "a",
            "ǻ": "a",
            "ḁ": "a",
            "ⱥ": "a",
            "ã": "a",
            "ꜳ": "aa",
            "æ": "ae",
            "ǽ": "ae",
            "ǣ": "ae",
            "ꜵ": "ao",
            "ꜷ": "au",
            "ꜹ": "av",
            "ꜻ": "av",
            "ꜽ": "ay",
            "ḃ": "b",
            "ḅ": "b",
            "ɓ": "b",
            "ḇ": "b",
            "ᵬ": "b",
            "ᶀ": "b",
            "ƀ": "b",
            "ƃ": "b",
            "ɵ": "o",
            "ć": "c",
            "č": "c",
            "ç": "c",
            "ḉ": "c",
            "ĉ": "c",
            "ɕ": "c",
            "ċ": "c",
            "ƈ": "c",
            "ȼ": "c",
            "ď": "d",
            "ḑ": "d",
            "ḓ": "d",
            "ȡ": "d",
            "ḋ": "d",
            "ḍ": "d",
            "ɗ": "d",
            "ᶑ": "d",
            "ḏ": "d",
            "ᵭ": "d",
            "ᶁ": "d",
            "đ": "d",
            "ɖ": "d",
            "ƌ": "d",
            "ı": "i",
            "ȷ": "j",
            "ɟ": "j",
            "ʄ": "j",
            "ǳ": "dz",
            "ǆ": "dz",
            "é": "e",
            "ĕ": "e",
            "ě": "e",
            "ȩ": "e",
            "ḝ": "e",
            "ê": "e",
            "ế": "e",
            "ệ": "e",
            "ề": "e",
            "ể": "e",
            "ễ": "e",
            "ḙ": "e",
            "ë": "e",
            "ė": "e",
            "ẹ": "e",
            "ȅ": "e",
            "è": "e",
            "ẻ": "e",
            "ȇ": "e",
            "ē": "e",
            "ḗ": "e",
            "ḕ": "e",
            "ⱸ": "e",
            "ę": "e",
            "ᶒ": "e",
            "ɇ": "e",
            "ẽ": "e",
            "ḛ": "e",
            "ꝫ": "et",
            "ḟ": "f",
            "ƒ": "f",
            "ᵮ": "f",
            "ᶂ": "f",
            "ǵ": "g",
            "ğ": "g",
            "ǧ": "g",
            "ģ": "g",
            "ĝ": "g",
            "ġ": "g",
            "ɠ": "g",
            "ḡ": "g",
            "ᶃ": "g",
            "ǥ": "g",
            "ḫ": "h",
            "ȟ": "h",
            "ḩ": "h",
            "ĥ": "h",
            "ⱨ": "h",
            "ḧ": "h",
            "ḣ": "h",
            "ḥ": "h",
            "ɦ": "h",
            "ẖ": "h",
            "ħ": "h",
            "ƕ": "hv",
            "í": "i",
            "ĭ": "i",
            "ǐ": "i",
            "î": "i",
            "ï": "i",
            "ḯ": "i",
            "ị": "i",
            "ȉ": "i",
            "ì": "i",
            "ỉ": "i",
            "ȋ": "i",
            "ī": "i",
            "į": "i",
            "ᶖ": "i",
            "ɨ": "i",
            "ĩ": "i",
            "ḭ": "i",
            "ꝺ": "d",
            "ꝼ": "f",
            "ᵹ": "g",
            "ꞃ": "r",
            "ꞅ": "s",
            "ꞇ": "t",
            "ꝭ": "is",
            "ǰ": "j",
            "ĵ": "j",
            "ʝ": "j",
            "ɉ": "j",
            "ḱ": "k",
            "ǩ": "k",
            "ķ": "k",
            "ⱪ": "k",
            "ꝃ": "k",
            "ḳ": "k",
            "ƙ": "k",
            "ḵ": "k",
            "ᶄ": "k",
            "ꝁ": "k",
            "ꝅ": "k",
            "ĺ": "l",
            "ƚ": "l",
            "ɬ": "l",
            "ľ": "l",
            "ļ": "l",
            "ḽ": "l",
            "ȴ": "l",
            "ḷ": "l",
            "ḹ": "l",
            "ⱡ": "l",
            "ꝉ": "l",
            "ḻ": "l",
            "ŀ": "l",
            "ɫ": "l",
            "ᶅ": "l",
            "ɭ": "l",
            "ł": "l",
            "ǉ": "lj",
            "ſ": "s",
            "ẜ": "s",
            "ẛ": "s",
            "ẝ": "s",
            "ḿ": "m",
            "ṁ": "m",
            "ṃ": "m",
            "ɱ": "m",
            "ᵯ": "m",
            "ᶆ": "m",
            "ń": "n",
            "ň": "n",
            "ņ": "n",
            "ṋ": "n",
            "ȵ": "n",
            "ṅ": "n",
            "ṇ": "n",
            "ǹ": "n",
            "ɲ": "n",
            "ṉ": "n",
            "ƞ": "n",
            "ᵰ": "n",
            "ᶇ": "n",
            "ɳ": "n",
            "ñ": "n",
            "ǌ": "nj",
            "ó": "o",
            "ŏ": "o",
            "ǒ": "o",
            "ô": "o",
            "ố": "o",
            "ộ": "o",
            "ồ": "o",
            "ổ": "o",
            "ỗ": "o",
            "ö": "o",
            "ȫ": "o",
            "ȯ": "o",
            "ȱ": "o",
            "ọ": "o",
            "ő": "o",
            "ȍ": "o",
            "ò": "o",
            "ỏ": "o",
            "ơ": "o",
            "ớ": "o",
            "ợ": "o",
            "ờ": "o",
            "ở": "o",
            "ỡ": "o",
            "ȏ": "o",
            "ꝋ": "o",
            "ꝍ": "o",
            "ⱺ": "o",
            "ō": "o",
            "ṓ": "o",
            "ṑ": "o",
            "ǫ": "o",
            "ǭ": "o",
            "ø": "o",
            "ǿ": "o",
            "õ": "o",
            "ṍ": "o",
            "ṏ": "o",
            "ȭ": "o",
            "ƣ": "oi",
            "ꝏ": "oo",
            "ɛ": "e",
            "ᶓ": "e",
            "ɔ": "o",
            "ᶗ": "o",
            "ȣ": "ou",
            "ṕ": "p",
            "ṗ": "p",
            "ꝓ": "p",
            "ƥ": "p",
            "ᵱ": "p",
            "ᶈ": "p",
            "ꝕ": "p",
            "ᵽ": "p",
            "ꝑ": "p",
            "ꝙ": "q",
            "ʠ": "q",
            "ɋ": "q",
            "ꝗ": "q",
            "ŕ": "r",
            "ř": "r",
            "ŗ": "r",
            "ṙ": "r",
            "ṛ": "r",
            "ṝ": "r",
            "ȑ": "r",
            "ɾ": "r",
            "ᵳ": "r",
            "ȓ": "r",
            "ṟ": "r",
            "ɼ": "r",
            "ᵲ": "r",
            "ᶉ": "r",
            "ɍ": "r",
            "ɽ": "r",
            "ↄ": "c",
            "ꜿ": "c",
            "ɘ": "e",
            "ɿ": "r",
            "ś": "s",
            "ṥ": "s",
            "š": "s",
            "ṧ": "s",
            "ş": "s",
            "ŝ": "s",
            "ș": "s",
            "ṡ": "s",
            "ṣ": "s",
            "ṩ": "s",
            "ʂ": "s",
            "ᵴ": "s",
            "ᶊ": "s",
            "ȿ": "s",
            "ɡ": "g",
            "ᴑ": "o",
            "ᴓ": "o",
            "ᴝ": "u",
            "ť": "t",
            "ţ": "t",
            "ṱ": "t",
            "ț": "t",
            "ȶ": "t",
            "ẗ": "t",
            "ⱦ": "t",
            "ṫ": "t",
            "ṭ": "t",
            "ƭ": "t",
            "ṯ": "t",
            "ᵵ": "t",
            "ƫ": "t",
            "ʈ": "t",
            "ŧ": "t",
            "ᵺ": "th",
            "ɐ": "a",
            "ᴂ": "ae",
            "ǝ": "e",
            "ᵷ": "g",
            "ɥ": "h",
            "ʮ": "h",
            "ʯ": "h",
            "ᴉ": "i",
            "ʞ": "k",
            "ꞁ": "l",
            "ɯ": "m",
            "ɰ": "m",
            "ᴔ": "oe",
            "ɹ": "r",
            "ɻ": "r",
            "ɺ": "r",
            "ⱹ": "r",
            "ʇ": "t",
            "ʌ": "v",
            "ʍ": "w",
            "ʎ": "y",
            "ꜩ": "tz",
            "ú": "u",
            "ŭ": "u",
            "ǔ": "u",
            "û": "u",
            "ṷ": "u",
            "ü": "u",
            "ǘ": "u",
            "ǚ": "u",
            "ǜ": "u",
            "ǖ": "u",
            "ṳ": "u",
            "ụ": "u",
            "ű": "u",
            "ȕ": "u",
            "ù": "u",
            "ủ": "u",
            "ư": "u",
            "ứ": "u",
            "ự": "u",
            "ừ": "u",
            "ử": "u",
            "ữ": "u",
            "ȗ": "u",
            "ū": "u",
            "ṻ": "u",
            "ų": "u",
            "ᶙ": "u",
            "ů": "u",
            "ũ": "u",
            "ṹ": "u",
            "ṵ": "u",
            "ᵫ": "ue",
            "ꝸ": "um",
            "ⱴ": "v",
            "ꝟ": "v",
            "ṿ": "v",
            "ʋ": "v",
            "ᶌ": "v",
            "ⱱ": "v",
            "ṽ": "v",
            "ꝡ": "vy",
            "ẃ": "w",
            "ŵ": "w",
            "ẅ": "w",
            "ẇ": "w",
            "ẉ": "w",
            "ẁ": "w",
            "ⱳ": "w",
            "ẘ": "w",
            "ẍ": "x",
            "ẋ": "x",
            "ᶍ": "x",
            "ý": "y",
            "ŷ": "y",
            "ÿ": "y",
            "ẏ": "y",
            "ỵ": "y",
            "ỳ": "y",
            "ƴ": "y",
            "ỷ": "y",
            "ỿ": "y",
            "ȳ": "y",
            "ẙ": "y",
            "ɏ": "y",
            "ỹ": "y",
            "ź": "z",
            "ž": "z",
            "ẑ": "z",
            "ʑ": "z",
            "ⱬ": "z",
            "ż": "z",
            "ẓ": "z",
            "ȥ": "z",
            "ẕ": "z",
            "ᵶ": "z",
            "ᶎ": "z",
            "ʐ": "z",
            "ƶ": "z",
            "ɀ": "z",
            "ﬀ": "ff",
            "ﬃ": "ffi",
            "ﬄ": "ffl",
            "ﬁ": "fi",
            "ﬂ": "fl",
            "ĳ": "ij",
            "œ": "oe",
            "ﬆ": "st",
            "ₐ": "a",
            "ₑ": "e",
            "ᵢ": "i",
            "ⱼ": "j",
            "ₒ": "o",
            "ᵣ": "r",
            "ᵤ": "u",
            "ᵥ": "v",
            "ₓ": "x"
        }
    };
    var i = n(0),
        r = n.n(i);
    let s = 0;

    function l(t) {
        s += t, s < 0 && (s = 0), o("app__points").innerText = s + " 🟊"
    }
    const c = o("app__display"),
        u = function() {
            let t = new Array;
            for (let e = 0; e < 3; e++) t.push(o("app__input_" + e));
            return t
        }();
    class d {
        constructor(t, e) {
            this.french = t, this.forms = e
        }
        check() {
            let t = !0;
            for (const n in u) {
                const o = u[n];
                (e = o.value, e.replace(/[^A-Za-z0-9\[\] ]/g, (function(t) {
                    return a.latin_map[t] || t
                }))).toLowerCase().trim() === this.forms[n] ? o.className = "form-control is-valid" : (o.className = "form-control is-invalid", t = !1)
            }
            var e;
            return t ? (r.a.fire({
                icon: "success",
                title: "Good job",
                text: "You earned 3 points!"
            }), l(3)) : (r.a.fire({
                icon: "error",
                title: "Oops...",
                text: "You made an error. You lose 1 point!"
            }), l(-1)), t
        }
        display() {
            for (const t of u) t.className = "form-control", t.value = "";
            c.innerText = "Conjugate : " + this.french
        }
        displayAnswers() {
            for (const t in u) {
                const e = u[t];
                e.className = "form-control is-valid", e.value = this.forms[t], r.a.fire({
                    icon: "warning",
                    title: "Answers showed",
                    text: "You lose 3 points!"
                }), l(-3)
            }
        }
    }
    const p = function(t) {
        for (let e = t.length - 1; e > 0; e--) {
            const n = Math.floor(Math.random() * (e + 1));
            [t[e], t[n]] = [t[n], t[e]]
        }
        return t
    }([new d("FRAPPER", ["hit", "hit", "hit"]), new d("ÊTRE", ["be", "was were", "been"]), new d("PORTER, SUPPORTER", ["bear", "bore", "born"]), new d("BATTRE", ["beat", "beat", "beaten"]), new d("DEVENIR", ["become", "became", "become"]), new d("COMMENCER", ["begin", "began", "begun"]), new d("COURBER", ["bend", "bent", "bent"]), new d("PARIER", ["bet", "bet", "bet"]), new d("MORDRE", ["bite", "bit", "bitten"]), new d("SAIGNER", ["bleed", "bled", "bled"]), new d("SOUFLER, EXPLOSER", ["blow", "blew", "blown"]), new d("CASSER", ["break", "broke", "broken"]), new d("APPORTER", ["bring", "brought", "brought"]), new d("CONSTRUIRE", ["build", "built", "built"]), new d("BRÛLER", ["burn", "burnt", "burnt"]), new d("ÉCLATER", ["burst", "burst", "burst"]), new d("ACHETTER", ["buy", "bought", "bought"]), new d("JETER", ["cast", "caust", "caust"]), new d("ATTRAPER", ["catch", "caught", "caught"]), new d("CHOISIR", ["choose", "chose", "choosen"]), new d("VENIR", ["come", "came", "come"]), new d("COUTER", ["cost", "cost", "cost"]), new d("COUPER", ["cut", "cut", "cut"]), new d("DISTRIBUER", ["deal", "dealt", "dealt"]), new d("FAIRE", ["do", "did", "done"]), new d("DESSINER", ["draw", "drew", "drawn"]), new d("RÊVER", ["dream", "dreamt", "dreamt"]), new d("CONDUIRE", ["drive", "drove", "driven"]), new d("BOIRE", ["drink", "drank", "drunk"]), new d("MANGER", ["eat", "ate", "eaten"]), new d("TOMBER", ["fall", "fell", "fallen"]), new d("NOURIR", ["feed", "fed", "fed"]), new d("RESSENTIR", ["feel", "felt", "felt"]), new d("SE BATTRE", ["fight", "fought", "fought"]), new d("TROUVER", ["find", "found", "found"]), new d("VOLER (dans les airs)", ["fly", "flow", "flown"]), new d("INTERDIR", ["forbid", "forbade", "forbidden"]), new d("OUBLIER", ["forget", "forgot", "forgotten"]), new d("PARDONNER", ["forgive", "forgave", "forgiven"]), new d("GELER", ["freeze", "froze", "frozen"]), new d("OBTENIR", ["get", "got", "gotten"]), new d("DONNER", ["give", "gave", "given"]), new d("ALLER", ["go", "went", "gone"]), new d("GRANDIR", ["grow", "grew", "grown"]), new d("AVOIR", ["have", "had", "had"]), new d("PENDRE", ["hang", "hung", "hung"]), new d("ENTENDRE", ["hear", "heard", "heard"]), new d("CACHER", ["hide", "hid", "hidden"]), new d("TENIR", ["hold", "held", "hold"]), new d("BLESSER", ["hurt", "hurt", "hurt"]), new d("GARDER", ["keep", "kept", "kept"]), new d("CONNAITRE", ["know", "knew", "known"]), new d("GUIDER", ["lead", "led", "led"]), new d("BONDIR", ["leap", "leapt", "leapt"]), new d("APPRENDRE", ["learn", "learnt", "learnt"]), new d("PARTIR", ["leave", "left", "left"]), new d("PRÊTER", ["lend", "lent", "lent"]), new d("LOUER", ["let", "let", "let"]), new d("S'ALLONGER", ["lie", "lay", "lain"]), new d("ALLUMER", ["light", "lit", "lit"]), new d("PERDRE", ["loose", "lost", "lost"]), new d("FABRIQUER", ["make", "made", "made"]), new d("SIGNIFIER", ["mean", "meant", "meant"]), new d("RENCONTRER", ["meet", "met", "met"]), new d("PAYER", ["pay", "paid", "paid"]), new d("LIRE", ["read", "read", "read"]), new d("SONNER", ["ring", "rang", "rung"]), new d("LEVER", ["rise", "rose", "risen"]), new d("COURIR", ["run", "ran", "run"]), new d("DIRE", ["say", "said", "said"]), new d("VOIR", ["see", "saw", "seen"]), new d("VENDRE", ["sell", "sold", "sold"]), new d("ENVOYER", ["send", "sent", "sent"]), new d("FIXER", ["set", "set", "set"]), new d("SECOUER", ["shake", "shook", "shaken"]), new d("TIRER", ["shoot", "shot", "shot"]), new d("MONTER", ["show", "showed", "shown"]), new d("FERMER", ["shut", "shut", "shut"]), new d("CHANTER", ["sing", "sang", "sung"]), new d("S'ASSEOIR", ["sit", "sat", "sat"]), new d("DORMIR", ["sleep", "slept", "slept"]), new d("SENTIR", ["smell", "smelt", "smelt"]), new d("PARLER", ["speak", "spoke", "spoken"]), new d("ÉPELER", ["spell", "spelt", "spelt"]), new d("PASSER DU TEMPS", ["spend", "spent", "spent"]), new d("FENDRE", ["split", "split", "split"]), new d("RÉPANDRE", ["spread", "spread", "spread"]), new d("SURGIR", ["spring", "sprang", "sprung"]), new d("SE LEVER, ÊTRE DEBOUT", ["stand", "stood", "stood"]), new d("DÉROBER", ["steal", "stole", "stolen"]), new d("BALAYER", ["sweep", "swept", "swept"]), new d("SE BALANCER", ["swing", "swung", "swung"]), new d("PRENDRE", ["take", "took", "taken"]), new d("ENSEIGNER", ["teach", "taught", "taught"]), new d("RACONTER", ["tell", "told", "told"]), new d("PENSER", ["think", "thought", "thought"]), new d("RÉVEILLER", ["wake", "woke", "woken"]), new d("PORTER (vêtement)", ["wear", "wore", "worn"]), new d("COMPRENDRE", ["understand", "understood", "understood"]), new d("ECRIRE", ["write", "wrote", "written"])]);
    let m = 0;

    function f() {
        p[m].check() && (m++, p[m].display())
    }
    m = 0, p[m].display(), o("app__button_check").addEventListener("click", () => {
        f()
    }), o("app__button_hint").addEventListener("click", () => {
        p[m].displayAnswers()
    }), window.addEventListener("keyup", t => {
        "Enter" == t.key && 0 === document.getElementsByClassName("swal2-shown").length && f()
    });
    for (const t of document.getElementsByTagName("input")) t.addEventListener("keyup", t => {
        "Enter" == t.key && 0 === document.getElementsByClassName("swal2-shown").length && f()
    })
}])
