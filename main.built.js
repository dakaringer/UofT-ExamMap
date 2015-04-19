/**
 * almond 0.2.5 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/*! jQuery v1.10.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.1.min.map
*/

/**
 * @license handlebars hbs 0.4.0 - Alex Sexton, but Handlebars has it's own licensing junk
 *
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/require-cs for details on the plugin this was based off of
 */

/*
 Copyright (c) 2013, Vladimir Agafonkin
 Simplify.js is a high-performance JS polyline simplification library
 mourner.github.io/simplify-js
*/

// Chosen, a Select Box Enhancer for jQuery and Prototype
// by Patrick Filler for Harvest, http://getharvest.com
//
// Version 0.9.15
// Full source at https://github.com/harvesthq/chosen
// Copyright (c) 2011 Harvest http://getharvest.com

var focused = [];
var hovered = "";
var buildingList = [];

(function (e, t) {
    typeof define == "function" && define.amd ? define(t) : e.libGlobalName = t()
})(this, function () {
    var requirejs, require, define;
    return function (e) {
            function c(e, t) {
                return f.call(e, t)
            }

            function h(e, t) {
                var n, r, i, s, o, a, f, l, c, h, p = t && t.split("/"),
                    d = u.map,
                    v = d && d["*"] || {};
                if (e && e.charAt(0) === ".")
                    if (t) {
                        p = p.slice(0, p.length - 1), e = p.concat(e.split("/"));
                        for (l = 0; l < e.length; l += 1) {
                            h = e[l];
                            if (h === ".") e.splice(l, 1), l -= 1;
                            else if (h === "..") {
                                if (l === 1 && (e[2] === ".." || e[0] === "..")) break;
                                l > 0 && (e.splice(l - 1, 2), l -= 2)
                            }
                        }
                        e = e.join("/")
                    } else e.indexOf("./") === 0 && (e = e.substring(2));
                if ((p || v) && d) {
                    n = e.split("/");
                    for (l = n.length; l > 0; l -= 1) {
                        r = n.slice(0, l).join("/");
                        if (p)
                            for (c = p.length; c > 0; c -= 1) {
                                i = d[p.slice(0, c).join("/")];
                                if (i) {
                                    i = i[r];
                                    if (i) {
                                        s = i, o = l;
                                        break
                                    }
                                }
                            }
                        if (s) break;
                        !a && v && v[r] && (a = v[r], f = l)
                    }!s && a && (s = a, o = f), s && (n.splice(0, o, s), e = n.join("/"))
                }
                return e
            }

            function p(t, r) {
                return function () {
                    return n.apply(e, l.call(arguments, 0).concat([t, r]))
                }
            }

            function d(e) {
                return function (t) {
                    return h(t, e)
                }
            }

            function v(e) {
                return function (t) {
                    s[e] = t
                }
            }

            function m(n) {
                if (c(o, n)) {
                    var r = o[n];
                    delete o[n], a[n] = !0, t.apply(e, r)
                }
                if (!c(s, n) && !c(a, n)) throw new Error("No " + n);
                return s[n]
            }

            function g(e) {
                var t, n = e ? e.indexOf("!") : -1;
                return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
            }

            function y(e) {
                return function () {
                    return u && u.config && u.config[e] || {}
                }
            }
            var t, n, r, i, s = {},
                o = {},
                u = {},
                a = {},
                f = Object.prototype.hasOwnProperty,
                l = [].slice;
            r = function (e, t) {
                var n, r = g(e),
                    i = r[0];
                return e = r[1], i && (i = h(i, t), n = m(i)), i ? n && n.normalize ? e = n.normalize(e, d(t)) : e = h(e, t) : (e = h(e, t), r = g(e), i = r[0], e = r[1], i && (n = m(i))), {
                    f: i ? i + "!" + e : e,
                    n: e,
                    pr: i,
                    p: n
                }
            }, i = {
                require: function (e) {
                    return p(e)
                },
                exports: function (e) {
                    var t = s[e];
                    return typeof t != "undefined" ? t : s[e] = {}
                },
                module: function (e) {
                    return {
                        id: e,
                        uri: "",
                        exports: s[e],
                        config: y(e)
                    }
                }
            }, t = function (t, n, u, f) {
                var l, h, d, g, y, b = [],
                    w;
                f = f || t;
                if (typeof u == "function") {
                    n = !n.length && u.length ? ["require", "exports", "module"] : n;
                    for (y = 0; y < n.length; y += 1) {
                        g = r(n[y], f), h = g.f;
                        if (h === "require") b[y] = i.require(t);
                        else if (h === "exports") b[y] = i.exports(t), w = !0;
                        else if (h === "module") l = b[y] = i.module(t);
                        else if (c(s, h) || c(o, h) || c(a, h)) b[y] = m(h);
                        else {
                            if (!g.p) throw new Error(t + " missing " + h);
                            g.p.load(g.n, p(f, !0), v(h), {}), b[y] = s[h]
                        }
                    }
                    d = u.apply(s[t], b);
                    if (t)
                        if (l && l.exports !== e && l.exports !== s[t]) s[t] = l.exports;
                        else if (d !== e || !w) s[t] = d
                } else t && (s[t] = u)
            }, requirejs = require = n = function (s, o, a, f, l) {
                return typeof s == "string" ? i[s] ? i[s](o) : m(r(s, o).f) : (s.splice || (u = s, o.splice ? (s = o, o = a, a = null) : s = e), o = o || function () {}, typeof a == "function" && (a = f, f = l), f ? t(e, s, o, a) : setTimeout(function () {
                    t(e, s, o, a)
                }, 4), n)
            }, n.config = function (e) {
                return u = e, u.deps && n(u.deps, u.callback), n
            }, define = function (e, t, n) {
                t.splice || (n = t, t = []), !c(s, e) && !c(o, e) && (o[e] = [e, t, n])
            }, define.amd = {
                jQuery: !0
            }
        }(), define("components/almond/almond", function () {}),
        function (e, t) {
            function H(e) {
                var t = e.length,
                    n = w.type(e);
                return w.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }

            function j(e) {
                var t = B[e] = {};
                return w.each(e.match(S) || [], function (e, n) {
                    t[n] = !0
                }), t
            }

            function q(e, n, r, i) {
                if (w.acceptData(e)) {
                    var s, o, u = w.expando,
                        a = e.nodeType,
                        f = a ? w.cache : e,
                        l = a ? e[u] : e[u] && u;
                    if (l && f[l] && (i || f[l].data) || r !== t || "string" != typeof n) return l || (l = a ? e[u] = c.pop() || w.guid++ : u), f[l] || (f[l] = a ? {} : {
                        toJSON: w.noop
                    }), ("object" == typeof n || "function" == typeof n) && (i ? f[l] = w.extend(f[l], n) : f[l].data = w.extend(f[l].data, n)), o = f[l], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[w.camelCase(n)] = r), "string" == typeof n ? (s = o[n], null == s && (s = o[w.camelCase(n)])) : s = o, s
                }
            }

            function R(e, t, n) {
                if (w.acceptData(e)) {
                    var r, i, s = e.nodeType,
                        o = s ? w.cache : e,
                        u = s ? e[w.expando] : w.expando;
                    if (o[u]) {
                        if (t && (r = n ? o[u] : o[u].data)) {
                            w.isArray(t) ? t = t.concat(w.map(t, w.camelCase)) : t in r ? t = [t] : (t = w.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                            while (i--) delete r[t[i]];
                            if (n ? !z(r) : !w.isEmptyObject(r)) return
                        }(n || (delete o[u].data, z(o[u]))) && (s ? w.cleanData([e], !0) : w.support.deleteExpando || o != o.window ? delete o[u] : o[u] = null)
                    }
                }
            }

            function U(e, n, r) {
                if (r === t && 1 === e.nodeType) {
                    var i = "data-" + n.replace(I, "-$1").toLowerCase();
                    if (r = e.getAttribute(i), "string" == typeof r) {
                        try {
                            r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : F.test(r) ? w.parseJSON(r) : r
                        } catch (s) {}
                        w.data(e, n, r)
                    } else r = t
                }
                return r
            }

            function z(e) {
                var t;
                for (t in e)
                    if (("data" !== t || !w.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
                return !0
            }

            function it() {
                return !0
            }

            function st() {
                return !1
            }

            function ot() {
                try {
                    return o.activeElement
                } catch (e) {}
            }

            function ct(e, t) {
                do e = e[t]; while (e && 1 !== e.nodeType);
                return e
            }

            function ht(e, t, n) {
                if (w.isFunction(t)) return w.grep(e, function (e, r) {
                    return !!t.call(e, r, e) !== n
                });
                if (t.nodeType) return w.grep(e, function (e) {
                    return e === t !== n
                });
                if ("string" == typeof t) {
                    if (ut.test(t)) return w.filter(t, e, n);
                    t = w.filter(t, e)
                }
                return w.grep(e, function (e) {
                    return w.inArray(e, t) >= 0 !== n
                })
            }

            function pt(e) {
                var t = dt.split("|"),
                    n = e.createDocumentFragment();
                if (n.createElement)
                    while (t.length) n.createElement(t.pop());
                return n
            }

            function Mt(e, t) {
                return w.nodeName(e, "table") && w.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function _t(e) {
                return e.type = (null !== w.find.attr(e, "type")) + "/" + e.type, e
            }

            function Dt(e) {
                var t = Ct.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function Pt(e, t) {
                var n, r = 0;
                for (; null != (n = e[r]); r++) w._data(n, "globalEval", !t || w._data(t[r], "globalEval"))
            }

            function Ht(e, t) {
                if (1 === t.nodeType && w.hasData(e)) {
                    var n, r, i, s = w._data(e),
                        o = w._data(t, s),
                        u = s.events;
                    if (u) {
                        delete o.handle, o.events = {};
                        for (n in u)
                            for (r = 0, i = u[n].length; i > r; r++) w.event.add(t, n, u[n][r])
                    }
                    o.data && (o.data = w.extend({}, o.data))
                }
            }

            function Bt(e, t) {
                var n, r, i;
                if (1 === t.nodeType) {
                    if (n = t.nodeName.toLowerCase(), !w.support.noCloneEvent && t[w.expando]) {
                        i = w._data(t);
                        for (r in i.events) w.removeEvent(t, r, i.handle);
                        t.removeAttribute(w.expando)
                    }
                    "script" === n && t.text !== e.text ? (_t(t).text = e.text, Dt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), w.support.html5Clone && e.innerHTML && !w.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && xt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
                }
            }

            function jt(e, n) {
                var r, s, o = 0,
                    u = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
                if (!u)
                    for (u = [], r = e.childNodes || e; null != (s = r[o]); o++) !n || w.nodeName(s, n) ? u.push(s) : w.merge(u, jt(s, n));
                return n === t || n && w.nodeName(e, n) ? w.merge([e], u) : u
            }

            function Ft(e) {
                xt.test(e.type) && (e.defaultChecked = e.checked)
            }

            function tn(e, t) {
                if (t in e) return t;
                var n = t.charAt(0).toUpperCase() + t.slice(1),
                    r = t,
                    i = en.length;
                while (i--)
                    if (t = en[i] + n, t in e) return t;
                return r
            }

            function nn(e, t) {
                return e = t || e, "none" === w.css(e, "display") || !w.contains(e.ownerDocument, e)
            }

            function rn(e, t) {
                var n, r, i, s = [],
                    o = 0,
                    u = e.length;
                for (; u > o; o++) r = e[o], r.style && (s[o] = w._data(r, "olddisplay"), n = r.style.display, t ? (s[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (s[o] = w._data(r, "olddisplay", an(r.nodeName)))) : s[o] || (i = nn(r), (n && "none" !== n || !i) && w._data(r, "olddisplay", i ? n : w.css(r, "display"))));
                for (o = 0; u > o; o++) r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? s[o] || "" : "none"));
                return e
            }

            function sn(e, t, n) {
                var r = $t.exec(t);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
            }

            function on(e, t, n, r, i) {
                var s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
                    o = 0;
                for (; 4 > s; s += 2) "margin" === n && (o += w.css(e, n + Zt[s], !0, i)), r ? ("content" === n && (o -= w.css(e, "padding" + Zt[s], !0, i)), "margin" !== n && (o -= w.css(e, "border" + Zt[s] + "Width", !0, i))) : (o += w.css(e, "padding" + Zt[s], !0, i), "padding" !== n && (o += w.css(e, "border" + Zt[s] + "Width", !0, i)));
                return o
            }

            function un(e, t, n) {
                var r = !0,
                    i = "width" === t ? e.offsetWidth : e.offsetHeight,
                    s = qt(e),
                    o = w.support.boxSizing && "border-box" === w.css(e, "boxSizing", !1, s);
                if (0 >= i || null == i) {
                    if (i = Rt(e, t, s), (0 > i || null == i) && (i = e.style[t]), Jt.test(i)) return i;
                    r = o && (w.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
                }
                return i + on(e, t, n || (o ? "border" : "content"), r, s) + "px"
            }

            function an(e) {
                var t = o,
                    n = Qt[e];
                return n || (n = fn(e, t), "none" !== n && n || (It = (It || w("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = fn(e, t), It.detach()), Qt[e] = n), n
            }

            function fn(e, t) {
                var n = w(t.createElement(e)).appendTo(t.body),
                    r = w.css(n[0], "display");
                return n.remove(), r
            }

            function vn(e, t, n, r) {
                var i;
                if (w.isArray(t)) w.each(t, function (t, i) {
                    n || cn.test(e) ? r(e, i) : vn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
                });
                else if (n || "object" !== w.type(t)) r(e, t);
                else
                    for (i in t) vn(e + "[" + i + "]", t[i], n, r)
            }

            function _n(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0,
                        s = t.toLowerCase().match(S) || [];
                    if (w.isFunction(n))
                        while (r = s[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function Dn(e, n, r, i) {
                function u(a) {
                    var f;
                    return s[a] = !0, w.each(e[a] || [], function (e, a) {
                        var l = a(n, r, i);
                        return "string" != typeof l || o || s[l] ? o ? !(f = l) : t : (n.dataTypes.unshift(l), u(l), !1)
                    }), f
                }
                var s = {},
                    o = e === An;
                return u(n.dataTypes[0]) || !s["*"] && u("*")
            }

            function Pn(e, n) {
                var r, i, s = w.ajaxSettings.flatOptions || {};
                for (i in n) n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
                return r && w.extend(!0, e, r), e
            }

            function Hn(e, n, r) {
                var i, s, o, u, a = e.contents,
                    f = e.dataTypes;
                while ("*" === f[0]) f.shift(), s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
                if (s)
                    for (u in a)
                        if (a[u] && a[u].test(s)) {
                            f.unshift(u);
                            break
                        }
                if (f[0] in r) o = f[0];
                else {
                    for (u in r) {
                        if (!f[0] || e.converters[u + " " + f[0]]) {
                            o = u;
                            break
                        }
                        i || (i = u)
                    }
                    o = o || i
                }
                return o ? (o !== f[0] && f.unshift(o), r[o]) : t
            }

            function Bn(e, t, n, r) {
                var i, s, o, u, a, f = {},
                    l = e.dataTypes.slice();
                if (l[1])
                    for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
                s = l.shift();
                while (s)
                    if (e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift())
                        if ("*" === s) s = a;
                        else if ("*" !== a && a !== s) {
                    if (o = f[a + " " + s] || f["* " + s], !o)
                        for (i in f)
                            if (u = i.split(" "), u[1] === s && (o = f[a + " " + u[0]] || f["* " + u[0]])) {
                                o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                                break
                            }
                    if (o !== !0)
                        if (o && e["throws"]) t = o(t);
                        else try {
                            t = o(t)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: o ? c : "No conversion from " + a + " to " + s
                            }
                        }
                }
                return {
                    state: "success",
                    data: t
                }
            }

            function zn() {
                try {
                    return new e.XMLHttpRequest
                } catch (t) {}
            }

            function Wn() {
                try {
                    return new e.ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {}
            }

            function Yn() {
                return setTimeout(function () {
                    Xn = t
                }), Xn = w.now()
            }

            function Zn(e, t, n) {
                var r, i = (Gn[t] || []).concat(Gn["*"]),
                    s = 0,
                    o = i.length;
                for (; o > s; s++)
                    if (r = i[s].call(n, t, e)) return r
            }

            function er(e, t, n) {
                var r, i, s = 0,
                    o = Qn.length,
                    u = w.Deferred().always(function () {
                        delete a.elem
                    }),
                    a = function () {
                        if (i) return !1;
                        var t = Xn || Yn(),
                            n = Math.max(0, f.startTime + f.duration - t),
                            r = n / f.duration || 0,
                            s = 1 - r,
                            o = 0,
                            a = f.tweens.length;
                        for (; a > o; o++) f.tweens[o].run(s);
                        return u.notifyWith(e, [f, s, n]), 1 > s && a ? n : (u.resolveWith(e, [f]), !1)
                    },
                    f = u.promise({
                        elem: e,
                        props: w.extend({}, t),
                        opts: w.extend(!0, {
                            specialEasing: {}
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: Xn || Yn(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (t, n) {
                            var r = w.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                            return f.tweens.push(r), r
                        },
                        stop: function (t) {
                            var n = 0,
                                r = t ? f.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; r > n; n++) f.tweens[n].run(1);
                            return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                        }
                    }),
                    l = f.props;
                for (tr(l, f.opts.specialEasing); o > s; s++)
                    if (r = Qn[s].call(f, e, l, f.opts)) return r;
                return w.map(l, Zn, f), w.isFunction(f.opts.start) && f.opts.start.call(e, f), w.fx.timer(w.extend(a, {
                    elem: e,
                    anim: f,
                    queue: f.opts.queue
                })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
            }

            function tr(e, t) {
                var n, r, i, s, o;
                for (n in e)
                    if (r = w.camelCase(n), i = t[r], s = e[n], w.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = w.cssHooks[r], o && "expand" in o) {
                        s = o.expand(s), delete e[r];
                        for (n in s) n in e || (e[n] = s[n], t[n] = i)
                    } else t[r] = i
            }

            function nr(e, t, n) {
                var r, i, s, o, u, a, f = this,
                    l = {},
                    c = e.style,
                    h = e.nodeType && nn(e),
                    p = w._data(e, "fxshow");
                n.queue || (u = w._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function () {
                    u.unqueued || a()
                }), u.unqueued++, f.always(function () {
                    f.always(function () {
                        u.unqueued--, w.queue(e, "fx").length || u.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [c.overflow, c.overflowX, c.overflowY], "inline" === w.css(e, "display") && "none" === w.css(e, "float") && (w.support.inlineBlockNeedsLayout && "inline" !== an(e.nodeName) ? c.zoom = 1 : c.display = "inline-block")), n.overflow && (c.overflow = "hidden", w.support.shrinkWrapBlocks || f.always(function () {
                    c.overflow = n.overflow[0], c.overflowX = n.overflow[1], c.overflowY = n.overflow[2]
                }));
                for (r in t)
                    if (i = t[r], $n.exec(i)) {
                        if (delete t[r], s = s || "toggle" === i, i === (h ? "hide" : "show")) continue;
                        l[r] = p && p[r] || w.style(e, r)
                    }
                if (!w.isEmptyObject(l)) {
                    p ? "hidden" in p && (h = p.hidden) : p = w._data(e, "fxshow", {}), s && (p.hidden = !h), h ? w(e).show() : f.done(function () {
                        w(e).hide()
                    }), f.done(function () {
                        var t;
                        w._removeData(e, "fxshow");
                        for (t in l) w.style(e, t, l[t])
                    });
                    for (r in l) o = Zn(h ? p[r] : 0, r, f), r in p || (p[r] = o.start, h && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
                }
            }

            function rr(e, t, n, r, i) {
                return new rr.prototype.init(e, t, n, r, i)
            }

            function ir(e, t) {
                var n, r = {
                        height: e
                    },
                    i = 0;
                for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e), r
            }

            function sr(e) {
                return w.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
            }
            var n, r, i = typeof t,
                s = e.location,
                o = e.document,
                u = o.documentElement,
                a = e.jQuery,
                f = e.$,
                l = {},
                c = [],
                h = "1.10.1",
                p = c.concat,
                d = c.push,
                v = c.slice,
                m = c.indexOf,
                g = l.toString,
                y = l.hasOwnProperty,
                b = h.trim,
                w = function (e, t) {
                    return new w.fn.init(e, t, r)
                },
                E = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                S = /\S+/g,
                x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                N = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                C = /^[\],:{}\s]*$/,
                k = /(?:^|:|,)(?:\s*\[)+/g,
                L = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
                A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
                O = /^-ms-/,
                M = /-([\da-z])/gi,
                _ = function (e, t) {
                    return t.toUpperCase()
                },
                D = function (e) {
                    (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (P(), w.ready())
                },
                P = function () {
                    o.addEventListener ? (o.removeEventListener("DOMContentLoaded", D, !1), e.removeEventListener("load", D, !1)) : (o.detachEvent("onreadystatechange", D), e.detachEvent("onload", D))
                };
            w.fn = w.prototype = {
                    jquery: h,
                    constructor: w,
                    init: function (e, n, r) {
                        var i, s;
                        if (!e) return this;
                        if ("string" == typeof e) {
                            if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : T.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                            if (i[1]) {
                                if (n = n instanceof w ? n[0] : n, w.merge(this, w.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), N.test(i[1]) && w.isPlainObject(n))
                                    for (i in n) w.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                                return this
                            }
                            if (s = o.getElementById(i[2]), s && s.parentNode) {
                                if (s.id !== i[2]) return r.find(e);
                                this.length = 1, this[0] = s
                            }
                            return this.context = o, this.selector = e, this
                        }
                        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : w.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), w.makeArray(e, this))
                    },
                    selector: "",
                    length: 0,
                    toArray: function () {
                        return v.call(this)
                    },
                    get: function (e) {
                        return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
                    },
                    pushStack: function (e) {
                        var t = w.merge(this.constructor(), e);
                        return t.prevObject = this, t.context = this.context, t
                    },
                    each: function (e, t) {
                        return w.each(this, e, t)
                    },
                    ready: function (e) {
                        return w.ready.promise().done(e), this
                    },
                    slice: function () {
                        return this.pushStack(v.apply(this, arguments))
                    },
                    first: function () {
                        return this.eq(0)
                    },
                    last: function () {
                        return this.eq(-1)
                    },
                    eq: function (e) {
                        var t = this.length,
                            n = +e + (0 > e ? t : 0);
                        return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                    },
                    map: function (e) {
                        return this.pushStack(w.map(this, function (t, n) {
                            return e.call(t, n, t)
                        }))
                    },
                    end: function () {
                        return this.prevObject || this.constructor(null)
                    },
                    push: d,
                    sort: [].sort,
                    splice: [].splice
                }, w.fn.init.prototype = w.fn, w.extend = w.fn.extend = function () {
                    var e, n, r, i, s, o, u = arguments[0] || {},
                        a = 1,
                        f = arguments.length,
                        l = !1;
                    for ("boolean" == typeof u && (l = u, u = arguments[1] || {}, a = 2), "object" == typeof u || w.isFunction(u) || (u = {}), f === a && (u = this, --a); f > a; a++)
                        if (null != (s = arguments[a]))
                            for (i in s) e = u[i], r = s[i], u !== r && (l && r && (w.isPlainObject(r) || (n = w.isArray(r))) ? (n ? (n = !1, o = e && w.isArray(e) ? e : []) : o = e && w.isPlainObject(e) ? e : {}, u[i] = w.extend(l, o, r)) : r !== t && (u[i] = r));
                    return u
                }, w.extend({
                    expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
                    noConflict: function (t) {
                        return e.$ === w && (e.$ = f), t && e.jQuery === w && (e.jQuery = a), w
                    },
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function (e) {
                        e ? w.readyWait++ : w.ready(!0)
                    },
                    ready: function (e) {
                        if (e === !0 ? !--w.readyWait : !w.isReady) {
                            if (!o.body) return setTimeout(w.ready);
                            w.isReady = !0, e !== !0 && --w.readyWait > 0 || (n.resolveWith(o, [w]), w.fn.trigger && w(o).trigger("ready").off("ready"))
                        }
                    },
                    isFunction: function (e) {
                        return "function" === w.type(e)
                    },
                    isArray: Array.isArray || function (e) {
                        return "array" === w.type(e)
                    },
                    isWindow: function (e) {
                        return null != e && e == e.window
                    },
                    isNumeric: function (e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    },
                    type: function (e) {
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[g.call(e)] || "object" : typeof e
                    },
                    isPlainObject: function (e) {
                        var n;
                        if (!e || "object" !== w.type(e) || e.nodeType || w.isWindow(e)) return !1;
                        try {
                            if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
                        } catch (r) {
                            return !1
                        }
                        if (w.support.ownLast)
                            for (n in e) return y.call(e, n);
                        for (n in e);
                        return n === t || y.call(e, n)
                    },
                    isEmptyObject: function (e) {
                        var t;
                        for (t in e) return !1;
                        return !0
                    },
                    error: function (e) {
                        throw Error(e)
                    },
                    parseHTML: function (e, t, n) {
                        if (!e || "string" != typeof e) return null;
                        "boolean" == typeof t && (n = t, t = !1), t = t || o;
                        var r = N.exec(e),
                            i = !n && [];
                        return r ? [t.createElement(r[1])] : (r = w.buildFragment([e], t, i), i && w(i).remove(), w.merge([], r.childNodes))
                    },
                    parseJSON: function (n) {
                        return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = w.trim(n), n && C.test(n.replace(L, "@").replace(A, "]").replace(k, ""))) ? Function("return " + n)() : (w.error("Invalid JSON: " + n), t)
                    },
                    parseXML: function (n) {
                        var r, i;
                        if (!n || "string" != typeof n) return null;
                        try {
                            e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                        } catch (s) {
                            r = t
                        }
                        return r && r.documentElement && !r.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + n), r
                    },
                    noop: function () {},
                    globalEval: function (t) {
                        t && w.trim(t) && (e.execScript || function (t) {
                            e.eval.call(e, t)
                        })(t)
                    },
                    camelCase: function (e) {
                        return e.replace(O, "ms-").replace(M, _)
                    },
                    nodeName: function (e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                    },
                    each: function (e, t, n) {
                        var r, i = 0,
                            s = e.length,
                            o = H(e);
                        if (n) {
                            if (o) {
                                for (; s > i; i++)
                                    if (r = t.apply(e[i], n), r === !1) break
                            } else
                                for (i in e)
                                    if (r = t.apply(e[i], n), r === !1) break
                        } else if (o) {
                            for (; s > i; i++)
                                if (r = t.call(e[i], i, e[i]), r === !1) break
                        } else
                            for (i in e)
                                if (r = t.call(e[i], i, e[i]), r === !1) break; return e
                    },
                    trim: b && !b.call("﻿ ") ? function (e) {
                        return null == e ? "" : b.call(e)
                    } : function (e) {
                        return null == e ? "" : (e + "").replace(x, "")
                    },
                    makeArray: function (e, t) {
                        var n = t || [];
                        return null != e && (H(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
                    },
                    inArray: function (e, t, n) {
                        var r;
                        if (t) {
                            if (m) return m.call(t, e, n);
                            for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                                if (n in t && t[n] === e) return n
                        }
                        return -1
                    },
                    merge: function (e, n) {
                        var r = n.length,
                            i = e.length,
                            s = 0;
                        if ("number" == typeof r)
                            for (; r > s; s++) e[i++] = n[s];
                        else
                            while (n[s] !== t) e[i++] = n[s++];
                        return e.length = i, e
                    },
                    grep: function (e, t, n) {
                        var r, i = [],
                            s = 0,
                            o = e.length;
                        for (n = !!n; o > s; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
                        return i
                    },
                    map: function (e, t, n) {
                        var r, i = 0,
                            s = e.length,
                            o = H(e),
                            u = [];
                        if (o)
                            for (; s > i; i++) r = t(e[i], i, n), null != r && (u[u.length] = r);
                        else
                            for (i in e) r = t(e[i], i, n), null != r && (u[u.length] = r);
                        return p.apply([], u)
                    },
                    guid: 1,
                    proxy: function (e, n) {
                        var r, i, s;
                        return "string" == typeof n && (s = e[n], n = e, e = s), w.isFunction(e) ? (r = v.call(arguments, 2), i = function () {
                            return e.apply(n || this, r.concat(v.call(arguments)))
                        }, i.guid = e.guid = e.guid || w.guid++, i) : t
                    },
                    access: function (e, n, r, i, s, o, u) {
                        var a = 0,
                            f = e.length,
                            l = null == r;
                        if ("object" === w.type(r)) {
                            s = !0;
                            for (a in r) w.access(e, n, a, r[a], !0, o, u)
                        } else if (i !== t && (s = !0, w.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function (e, t, n) {
                                return l.call(w(e), n)
                            })), n))
                            for (; f > a; a++) n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)));
                        return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
                    },
                    now: function () {
                        return (new Date).getTime()
                    },
                    swap: function (e, t, n, r) {
                        var i, s, o = {};
                        for (s in t) o[s] = e.style[s], e.style[s] = t[s];
                        i = n.apply(e, r || []);
                        for (s in t) e.style[s] = o[s];
                        return i
                    }
                }), w.ready.promise = function (t) {
                    if (!n)
                        if (n = w.Deferred(), "complete" === o.readyState) setTimeout(w.ready);
                        else if (o.addEventListener) o.addEventListener("DOMContentLoaded", D, !1), e.addEventListener("load", D, !1);
                    else {
                        o.attachEvent("onreadystatechange", D), e.attachEvent("onload", D);
                        var r = !1;
                        try {
                            r = null == e.frameElement && o.documentElement
                        } catch (i) {}
                        r && r.doScroll && function s() {
                            if (!w.isReady) {
                                try {
                                    r.doScroll("left")
                                } catch (e) {
                                    return setTimeout(s, 50)
                                }
                                P(), w.ready()
                            }
                        }()
                    }
                    return n.promise(t)
                }, w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
                    l["[object " + t + "]"] = t.toLowerCase()
                }), r = w(o),
                function (e, t) {
                    function ot(e, t, n, i) {
                        var s, o, u, a, f, l, p, m, g, w;
                        if ((t ? t.ownerDocument || t : E) !== h && c(t), t = t || h, n = n || [], !e || "string" != typeof e) return n;
                        if (1 !== (a = t.nodeType) && 9 !== a) return [];
                        if (d && !i) {
                            if (s = Z.exec(e))
                                if (u = s[1]) {
                                    if (9 === a) {
                                        if (o = t.getElementById(u), !o || !o.parentNode) return n;
                                        if (o.id === u) return n.push(o), n
                                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && y(t, o) && o.id === u) return n.push(o), n
                                } else {
                                    if (s[2]) return H.apply(n, t.getElementsByTagName(e)), n;
                                    if ((u = s[3]) && r.getElementsByClassName && t.getElementsByClassName) return H.apply(n, t.getElementsByClassName(u)), n
                                }
                            if (r.qsa && (!v || !v.test(e))) {
                                if (m = p = b, g = t, w = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                                    l = bt(e), (p = t.getAttribute("id")) ? m = p.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", f = l.length;
                                    while (f--) l[f] = m + wt(l[f]);
                                    g = $.test(e) && t.parentNode || t, w = l.join(",")
                                }
                                if (w) try {
                                    return H.apply(n, g.querySelectorAll(w)), n
                                } catch (S) {} finally {
                                    p || t.removeAttribute("id")
                                }
                            }
                        }
                        return Lt(e.replace(W, "$1"), t, n, i)
                    }

                    function ut(e) {
                        return Y.test(e + "")
                    }

                    function at() {
                        function t(n, r) {
                            return e.push(n += " ") > s.cacheLength && delete t[e.shift()], t[n] = r
                        }
                        var e = [];
                        return t
                    }

                    function ft(e) {
                        return e[b] = !0, e
                    }

                    function lt(e) {
                        var t = h.createElement("div");
                        try {
                            return !!e(t)
                        } catch (n) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null
                        }
                    }

                    function ct(e, t, n) {
                        e = e.split("|");
                        var r, i = e.length,
                            o = n ? null : t;
                        while (i--)(r = s.attrHandle[e[i]]) && r !== t || (s.attrHandle[e[i]] = o)
                    }

                    function ht(e, t) {
                        var n = e.getAttributeNode(t);
                        return n && n.specified ? n.value : e[t] === !0 ? t.toLowerCase() : null
                    }

                    function pt(e, t) {
                        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    }

                    function dt(e) {
                        return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t
                    }

                    function vt(e, t) {
                        var n = t && e,
                            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || O) - (~e.sourceIndex || O);
                        if (r) return r;
                        if (n)
                            while (n = n.nextSibling)
                                if (n === t) return -1;
                        return e ? 1 : -1
                    }

                    function mt(e) {
                        return function (t) {
                            var n = t.nodeName.toLowerCase();
                            return "input" === n && t.type === e
                        }
                    }

                    function gt(e) {
                        return function (t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }

                    function yt(e) {
                        return ft(function (t) {
                            return t = +t, ft(function (n, r) {
                                var i, s = e([], n.length, t),
                                    o = s.length;
                                while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                            })
                        })
                    }

                    function bt(e, t) {
                        var n, r, i, o, u, a, f, l = N[e + " "];
                        if (l) return t ? 0 : l.slice(0);
                        u = e, a = [], f = s.preFilter;
                        while (u) {
                            (!n || (r = X.exec(u))) && (r && (u = u.slice(r[0].length) || u), a.push(i = [])), n = !1, (r = V.exec(u)) && (n = r.shift(), i.push({
                                value: n,
                                type: r[0].replace(W, " ")
                            }), u = u.slice(n.length));
                            for (o in s.filter) !(r = G[o].exec(u)) || f[o] && !(r = f[o](r)) || (n = r.shift(), i.push({
                                value: n,
                                type: o,
                                matches: r
                            }), u = u.slice(n.length));
                            if (!n) break
                        }
                        return t ? u.length : u ? ot.error(e) : N(e, a).slice(0)
                    }

                    function wt(e) {
                        var t = 0,
                            n = e.length,
                            r = "";
                        for (; n > t; t++) r += e[t].value;
                        return r
                    }

                    function Et(e, t, n) {
                        var r = t.dir,
                            s = n && "parentNode" === r,
                            o = x++;
                        return t.first ? function (t, n, i) {
                            while (t = t[r])
                                if (1 === t.nodeType || s) return e(t, n, i)
                        } : function (t, n, u) {
                            var a, f, l, c = S + " " + o;
                            if (u) {
                                while (t = t[r])
                                    if ((1 === t.nodeType || s) && e(t, n, u)) return !0
                            } else
                                while (t = t[r])
                                    if (1 === t.nodeType || s)
                                        if (l = t[b] || (t[b] = {}), (f = l[r]) && f[0] === c) {
                                            if ((a = f[1]) === !0 || a === i) return a === !0
                                        } else if (f = l[r] = [c], f[1] = e(t, n, u) || i, f[1] === !0) return !0
                        }
                    }

                    function St(e) {
                        return e.length > 1 ? function (t, n, r) {
                            var i = e.length;
                            while (i--)
                                if (!e[i](t, n, r)) return !1;
                            return !0
                        } : e[0]
                    }

                    function xt(e, t, n, r, i) {
                        var s, o = [],
                            u = 0,
                            a = e.length,
                            f = null != t;
                        for (; a > u; u++)(s = e[u]) && (!n || n(s, r, i)) && (o.push(s), f && t.push(u));
                        return o
                    }

                    function Tt(e, t, n, r, i, s) {
                        return r && !r[b] && (r = Tt(r)), i && !i[b] && (i = Tt(i, s)), ft(function (s, o, u, a) {
                            var f, l, c, h = [],
                                p = [],
                                d = o.length,
                                v = s || kt(t || "*", u.nodeType ? [u] : u, []),
                                m = !e || !s && t ? v : xt(v, h, e, u, a),
                                g = n ? i || (s ? e : d || r) ? [] : o : m;
                            if (n && n(m, g, u, a), r) {
                                f = xt(g, p), r(f, [], u, a), l = f.length;
                                while (l--)(c = f[l]) && (g[p[l]] = !(m[p[l]] = c))
                            }
                            if (s) {
                                if (i || e) {
                                    if (i) {
                                        f = [], l = g.length;
                                        while (l--)(c = g[l]) && f.push(m[l] = c);
                                        i(null, g = [], f, a)
                                    }
                                    l = g.length;
                                    while (l--)(c = g[l]) && (f = i ? j.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                                }
                            } else g = xt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : H.apply(o, g)
                        })
                    }

                    function Nt(e) {
                        var t, n, r, i = e.length,
                            o = s.relative[e[0].type],
                            u = o || s.relative[" "],
                            a = o ? 1 : 0,
                            l = Et(function (e) {
                                return e === t
                            }, u, !0),
                            c = Et(function (e) {
                                return j.call(t, e) > -1
                            }, u, !0),
                            h = [function (e, n, r) {
                                return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                            }];
                        for (; i > a; a++)
                            if (n = s.relative[e[a].type]) h = [Et(St(h), n)];
                            else {
                                if (n = s.filter[e[a].type].apply(null, e[a].matches), n[b]) {
                                    for (r = ++a; i > r; r++)
                                        if (s.relative[e[r].type]) break;
                                    return Tt(a > 1 && St(h), a > 1 && wt(e.slice(0, a - 1).concat({
                                        value: " " === e[a - 2].type ? "*" : ""
                                    })).replace(W, "$1"), n, r > a && Nt(e.slice(a, r)), i > r && Nt(e = e.slice(r)), i > r && wt(e))
                                }
                                h.push(n)
                            }
                        return St(h)
                    }

                    function Ct(e, t) {
                        var n = 0,
                            r = t.length > 0,
                            o = e.length > 0,
                            u = function (u, a, l, c, p) {
                                var d, v, m, g = [],
                                    y = 0,
                                    b = "0",
                                    w = u && [],
                                    E = null != p,
                                    x = f,
                                    T = u || o && s.find.TAG("*", p && a.parentNode || a),
                                    N = S += null == x ? 1 : Math.random() || .1;
                                for (E && (f = a !== h && a, i = n); null != (d = T[b]); b++) {
                                    if (o && d) {
                                        v = 0;
                                        while (m = e[v++])
                                            if (m(d, a, l)) {
                                                c.push(d);
                                                break
                                            }
                                        E && (S = N, i = ++n)
                                    }
                                    r && ((d = !m && d) && y--, u && w.push(d))
                                }
                                if (y += b, r && b !== y) {
                                    v = 0;
                                    while (m = t[v++]) m(w, g, a, l);
                                    if (u) {
                                        if (y > 0)
                                            while (b--) w[b] || g[b] || (g[b] = D.call(c));
                                        g = xt(g)
                                    }
                                    H.apply(c, g), E && !u && g.length > 0 && y + t.length > 1 && ot.uniqueSort(c)
                                }
                                return E && (S = N, f = x), w
                            };
                        return r ? ft(u) : u
                    }

                    function kt(e, t, n) {
                        var r = 0,
                            i = t.length;
                        for (; i > r; r++) ot(e, t[r], n);
                        return n
                    }

                    function Lt(e, t, n, i) {
                        var o, u, f, l, c, h = bt(e);
                        if (!i && 1 === h.length) {
                            if (u = h[0] = h[0].slice(0), u.length > 2 && "ID" === (f = u[0]).type && r.getById && 9 === t.nodeType && d && s.relative[u[1].type]) {
                                if (t = (s.find.ID(f.matches[0].replace(rt, it), t) || [])[0], !t) return n;
                                e = e.slice(u.shift().value.length)
                            }
                            o = G.needsContext.test(e) ? 0 : u.length;
                            while (o--) {
                                if (f = u[o], s.relative[l = f.type]) break;
                                if ((c = s.find[l]) && (i = c(f.matches[0].replace(rt, it), $.test(u[0].type) && t.parentNode || t))) {
                                    if (u.splice(o, 1), e = i.length && wt(u), !e) return H.apply(n, i), n;
                                    break
                                }
                            }
                        }
                        return a(e, h)(i, t, !d, n, $.test(e)), n
                    }

                    function At() {}
                    var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b = "sizzle" + -(new Date),
                        E = e.document,
                        S = 0,
                        x = 0,
                        T = at(),
                        N = at(),
                        C = at(),
                        k = !1,
                        L = function () {
                            return 0
                        },
                        A = typeof t,
                        O = 1 << 31,
                        M = {}.hasOwnProperty,
                        _ = [],
                        D = _.pop,
                        P = _.push,
                        H = _.push,
                        B = _.slice,
                        j = _.indexOf || function (e) {
                            var t = 0,
                                n = this.length;
                            for (; n > t; t++)
                                if (this[t] === e) return t;
                            return -1
                        },
                        F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        I = "[\\x20\\t\\r\\n\\f]",
                        q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                        R = q.replace("w", "w#"),
                        U = "\\[" + I + "*(" + q + ")" + I + "*(?:([*^$|!~]?=)" + I + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + R + ")|)|)" + I + "*\\]",
                        z = ":(" + q + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + U.replace(3, 8) + ")*)|.*)\\)|)",
                        W = RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
                        X = RegExp("^" + I + "*," + I + "*"),
                        V = RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
                        $ = RegExp(I + "*[+~]"),
                        J = RegExp("=" + I + "*([^\\]'\"]*)" + I + "*\\]", "g"),
                        K = RegExp(z),
                        Q = RegExp("^" + R + "$"),
                        G = {
                            ID: RegExp("^#(" + q + ")"),
                            CLASS: RegExp("^\\.(" + q + ")"),
                            TAG: RegExp("^(" + q.replace("w", "w*") + ")"),
                            ATTR: RegExp("^" + U),
                            PSEUDO: RegExp("^" + z),
                            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                            bool: RegExp("^(?:" + F + ")$", "i"),
                            needsContext: RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
                        },
                        Y = /^[^{]+\{\s*\[native \w/,
                        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        et = /^(?:input|select|textarea|button)$/i,
                        tt = /^h\d$/i,
                        nt = /'|\\/g,
                        rt = RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
                        it = function (e, t, n) {
                            var r = "0x" + t - 65536;
                            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
                        };
                    try {
                        H.apply(_ = B.call(E.childNodes), E.childNodes), _[E.childNodes.length].nodeType
                    } catch (st) {
                        H = {
                            apply: _.length ? function (e, t) {
                                P.apply(e, B.call(t))
                            } : function (e, t) {
                                var n = e.length,
                                    r = 0;
                                while (e[n++] = t[r++]);
                                e.length = n - 1
                            }
                        }
                    }
                    u = ot.isXML = function (e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return t ? "HTML" !== t.nodeName : !1
                    }, r = ot.support = {}, c = ot.setDocument = function (e) {
                        var n = e ? e.ownerDocument || e : E,
                            i = n.parentWindow;
                        return n !== h && 9 === n.nodeType && n.documentElement ? (h = n, p = n.documentElement, d = !u(n), i && i.frameElement && i.attachEvent("onbeforeunload", function () {
                            c()
                        }), r.attributes = lt(function (e) {
                            return e.innerHTML = "<a href='#'></a>", ct("type|href|height|width", pt, "#" === e.firstChild.getAttribute("href")), ct(F, ht, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className")
                        }), r.input = lt(function (e) {
                            return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                        }), ct("value", dt, r.attributes && r.input), r.getElementsByTagName = lt(function (e) {
                            return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                        }), r.getElementsByClassName = lt(function (e) {
                            return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                        }), r.getById = lt(function (e) {
                            return p.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
                        }), r.getById ? (s.find.ID = function (e, t) {
                            if (typeof t.getElementById !== A && d) {
                                var n = t.getElementById(e);
                                return n && n.parentNode ? [n] : []
                            }
                        }, s.filter.ID = function (e) {
                            var t = e.replace(rt, it);
                            return function (e) {
                                return e.getAttribute("id") === t
                            }
                        }) : (delete s.find.ID, s.filter.ID = function (e) {
                            var t = e.replace(rt, it);
                            return function (e) {
                                var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }), s.find.TAG = r.getElementsByTagName ? function (e, n) {
                            return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
                        } : function (e, t) {
                            var n, r = [],
                                i = 0,
                                s = t.getElementsByTagName(e);
                            if ("*" === e) {
                                while (n = s[i++]) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return s
                        }, s.find.CLASS = r.getElementsByClassName && function (e, n) {
                            return typeof n.getElementsByClassName !== A && d ? n.getElementsByClassName(e) : t
                        }, m = [], v = [], (r.qsa = ut(n.querySelectorAll)) && (lt(function (e) {
                            e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + F + ")"), e.querySelectorAll(":checked").length || v.push(":checked")
                        }), lt(function (e) {
                            var t = n.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                        })), (r.matchesSelector = ut(g = p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && lt(function (e) {
                            r.disconnectedMatch = g.call(e, "div"), g.call(e, "[s!='']:x"), m.push("!=", z)
                        }), v = v.length && RegExp(v.join("|")), m = m.length && RegExp(m.join("|")), y = ut(p.contains) || p.compareDocumentPosition ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !!r && 1 === r.nodeType && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
                        } : function (e, t) {
                            if (t)
                                while (t = t.parentNode)
                                    if (t === e) return !0;
                            return !1
                        }, r.sortDetached = lt(function (e) {
                            return 1 & e.compareDocumentPosition(n.createElement("div"))
                        }), L = p.compareDocumentPosition ? function (e, t) {
                            if (e === t) return k = !0, 0;
                            var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                            return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || y(E, e) ? -1 : t === n || y(E, t) ? 1 : l ? j.call(l, e) - j.call(l, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                        } : function (e, t) {
                            var r, i = 0,
                                s = e.parentNode,
                                o = t.parentNode,
                                u = [e],
                                a = [t];
                            if (e === t) return k = !0, 0;
                            if (!s || !o) return e === n ? -1 : t === n ? 1 : s ? -1 : o ? 1 : l ? j.call(l, e) - j.call(l, t) : 0;
                            if (s === o) return vt(e, t);
                            r = e;
                            while (r = r.parentNode) u.unshift(r);
                            r = t;
                            while (r = r.parentNode) a.unshift(r);
                            while (u[i] === a[i]) i++;
                            return i ? vt(u[i], a[i]) : u[i] === E ? -1 : a[i] === E ? 1 : 0
                        }, n) : h
                    }, ot.matches = function (e, t) {
                        return ot(e, null, null, t)
                    }, ot.matchesSelector = function (e, t) {
                        if ((e.ownerDocument || e) !== h && c(e), t = t.replace(J, "='$1']"), !(!r.matchesSelector || !d || m && m.test(t) || v && v.test(t))) try {
                            var n = g.call(e, t);
                            if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                        } catch (i) {}
                        return ot(t, h, null, [e]).length > 0
                    }, ot.contains = function (e, t) {
                        return (e.ownerDocument || e) !== h && c(e), y(e, t)
                    }, ot.attr = function (e, n) {
                        (e.ownerDocument || e) !== h && c(e);
                        var i = s.attrHandle[n.toLowerCase()],
                            o = i && M.call(s.attrHandle, n.toLowerCase()) ? i(e, n, !d) : t;
                        return o === t ? r.attributes || !d ? e.getAttribute(n) : (o = e.getAttributeNode(n)) && o.specified ? o.value : null : o
                    }, ot.error = function (e) {
                        throw Error("Syntax error, unrecognized expression: " + e)
                    }, ot.uniqueSort = function (e) {
                        var t, n = [],
                            i = 0,
                            s = 0;
                        if (k = !r.detectDuplicates, l = !r.sortStable && e.slice(0), e.sort(L), k) {
                            while (t = e[s++]) t === e[s] && (i = n.push(s));
                            while (i--) e.splice(n[i], 1)
                        }
                        return e
                    }, o = ot.getText = function (e) {
                        var t, n = "",
                            r = 0,
                            i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                            } else if (3 === i || 4 === i) return e.nodeValue
                        } else
                            for (; t = e[r]; r++) n += o(t);
                        return n
                    }, s = ot.selectors = {
                        cacheLength: 50,
                        createPseudo: ft,
                        match: G,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function (e) {
                                return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function (e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ot.error(e[0]), e
                            },
                            PSEUDO: function (e) {
                                var n, r = !e[5] && e[2];
                                return G.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && K.test(r) && (n = bt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (e) {
                                var t = e.replace(rt, it).toLowerCase();
                                return "*" === e ? function () {
                                    return !0
                                } : function (e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function (e) {
                                var t = T[e + " "];
                                return t || (t = RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && T(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function (e, t, n) {
                                return function (r) {
                                    var i = ot.attr(r, e);
                                    return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                                }
                            },
                            CHILD: function (e, t, n, r, i) {
                                var s = "nth" !== e.slice(0, 3),
                                    o = "last" !== e.slice(-4),
                                    u = "of-type" === t;
                                return 1 === r && 0 === i ? function (e) {
                                    return !!e.parentNode
                                } : function (t, n, a) {
                                    var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                                        m = t.parentNode,
                                        g = u && t.nodeName.toLowerCase(),
                                        y = !a && !u;
                                    if (m) {
                                        if (s) {
                                            while (v) {
                                                c = t;
                                                while (c = c[v])
                                                    if (u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                                d = v = "only" === e && !d && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (d = [o ? m.firstChild : m.lastChild], o && y) {
                                            l = m[b] || (m[b] = {}), f = l[e] || [], p = f[0] === S && f[1], h = f[0] === S && f[2], c = p && m.childNodes[p];
                                            while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                                if (1 === c.nodeType && ++h && c === t) {
                                                    l[e] = [S, p, h];
                                                    break
                                                }
                                        } else if (y && (f = (t[b] || (t[b] = {}))[e]) && f[0] === S) h = f[1];
                                        else
                                            while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                                if ((u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++h && (y && ((c[b] || (c[b] = {}))[e] = [S, h]), c === t)) break; return h -= i, h === r || 0 === h % r && h / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function (e, t) {
                                var n, r = s.pseudos[e] || s.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                                return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], s.setFilters.hasOwnProperty(e.toLowerCase()) ? ft(function (e, n) {
                                    var i, s = r(e, t),
                                        o = s.length;
                                    while (o--) i = j.call(e, s[o]), e[i] = !(n[i] = s[o])
                                }) : function (e) {
                                    return r(e, 0, n)
                                }) : r
                            }
                        },
                        pseudos: {
                            not: ft(function (e) {
                                var t = [],
                                    n = [],
                                    r = a(e.replace(W, "$1"));
                                return r[b] ? ft(function (e, t, n, i) {
                                    var s, o = r(e, null, i, []),
                                        u = e.length;
                                    while (u--)(s = o[u]) && (e[u] = !(t[u] = s))
                                }) : function (e, i, s) {
                                    return t[0] = e, r(t, null, s, n), !n.pop()
                                }
                            }),
                            has: ft(function (e) {
                                return function (t) {
                                    return ot(e, t).length > 0
                                }
                            }),
                            contains: ft(function (e) {
                                return function (t) {
                                    return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                                }
                            }),
                            lang: ft(function (e) {
                                return Q.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
                                    function (t) {
                                        var n;
                                        do
                                            if (n = d ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                        while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function (t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function (e) {
                                return e === p
                            },
                            focus: function (e) {
                                return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: function (e) {
                                return e.disabled === !1
                            },
                            disabled: function (e) {
                                return e.disabled === !0
                            },
                            checked: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function (e) {
                                return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                            },
                            empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                                return !0
                            },
                            parent: function (e) {
                                return !s.pseudos.empty(e)
                            },
                            header: function (e) {
                                return tt.test(e.nodeName)
                            },
                            input: function (e) {
                                return et.test(e.nodeName)
                            },
                            button: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function (e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                            },
                            first: yt(function () {
                                return [0]
                            }),
                            last: yt(function (e, t) {
                                return [t - 1]
                            }),
                            eq: yt(function (e, t, n) {
                                return [0 > n ? n + t : n]
                            }),
                            even: yt(function (e, t) {
                                var n = 0;
                                for (; t > n; n += 2) e.push(n);
                                return e
                            }),
                            odd: yt(function (e, t) {
                                var n = 1;
                                for (; t > n; n += 2) e.push(n);
                                return e
                            }),
                            lt: yt(function (e, t, n) {
                                var r = 0 > n ? n + t : n;
                                for (; --r >= 0;) e.push(r);
                                return e
                            }),
                            gt: yt(function (e, t, n) {
                                var r = 0 > n ? n + t : n;
                                for (; t > ++r;) e.push(r);
                                return e
                            })
                        }
                    };
                    for (n in {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }) s.pseudos[n] = mt(n);
                    for (n in {
                            submit: !0,
                            reset: !0
                        }) s.pseudos[n] = gt(n);
                    a = ot.compile = function (e, t) {
                        var n, r = [],
                            i = [],
                            s = C[e + " "];
                        if (!s) {
                            t || (t = bt(e)), n = t.length;
                            while (n--) s = Nt(t[n]), s[b] ? r.push(s) : i.push(s);
                            s = C(e, Ct(i, r))
                        }
                        return s
                    }, s.pseudos.nth = s.pseudos.eq, At.prototype = s.filters = s.pseudos, s.setFilters = new At, r.sortStable = b.split("").sort(L).join("") === b, c(), [0, 0].sort(L), r.detectDuplicates = k, w.find = ot, w.expr = ot.selectors, w.expr[":"] = w.expr.pseudos, w.unique = ot.uniqueSort, w.text = ot.getText, w.isXMLDoc = ot.isXML, w.contains = ot.contains
                }(e);
            var B = {};
            w.Callbacks = function (e) {
                e = "string" == typeof e ? B[e] || j(e) : w.extend({}, e);
                var n, r, i, s, o, u, a = [],
                    f = !e.once && [],
                    l = function (t) {
                        for (r = e.memory && t, i = !0, o = u || 0, u = 0, s = a.length, n = !0; a && s > o; o++)
                            if (a[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                                r = !1;
                                break
                            }
                        n = !1, a && (f ? f.length && l(f.shift()) : r ? a = [] : c.disable())
                    },
                    c = {
                        add: function () {
                            if (a) {
                                var t = a.length;
                                (function i(t) {
                                    w.each(t, function (t, n) {
                                        var r = w.type(n);
                                        "function" === r ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== r && i(n)
                                    })
                                })(arguments), n ? s = a.length : r && (u = t, l(r))
                            }
                            return this
                        },
                        remove: function () {
                            return a && w.each(arguments, function (e, t) {
                                var r;
                                while ((r = w.inArray(t, a, r)) > -1) a.splice(r, 1), n && (s >= r && s--, o >= r && o--)
                            }), this
                        },
                        has: function (e) {
                            return e ? w.inArray(e, a) > -1 : !!a && !!a.length
                        },
                        empty: function () {
                            return a = [], s = 0, this
                        },
                        disable: function () {
                            return a = f = r = t, this
                        },
                        disabled: function () {
                            return !a
                        },
                        lock: function () {
                            return f = t, r || c.disable(), this
                        },
                        locked: function () {
                            return !f
                        },
                        fireWith: function (e, t) {
                            return t = t || [], t = [e, t.slice ? t.slice() : t], !a || i && !f || (n ? f.push(t) : l(t)), this
                        },
                        fire: function () {
                            return c.fireWith(this, arguments), this
                        },
                        fired: function () {
                            return !!i
                        }
                    };
                return c
            }, w.extend({
                Deferred: function (e) {
                    var t = [["resolve", "done", w.Callbacks("once memory"), "resolved"], ["reject", "fail", w.Callbacks("once memory"), "rejected"], ["notify", "progress", w.Callbacks("memory")]],
                        n = "pending",
                        r = {
                            state: function () {
                                return n
                            },
                            always: function () {
                                return i.done(arguments).fail(arguments), this
                            },
                            then: function () {
                                var e = arguments;
                                return w.Deferred(function (n) {
                                    w.each(t, function (t, s) {
                                        var o = s[0],
                                            u = w.isFunction(e[t]) && e[t];
                                        i[s[1]](function () {
                                            var e = u && u.apply(this, arguments);
                                            e && w.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            promise: function (e) {
                                return null != e ? w.extend(e, r) : r
                            }
                        },
                        i = {};
                    return r.pipe = r.then, w.each(t, function (e, s) {
                        var o = s[2],
                            u = s[3];
                        r[s[1]] = o.add, u && o.add(function () {
                            n = u
                        }, t[1 ^ e][2].disable, t[2][2].lock), i[s[0]] = function () {
                            return i[s[0] + "With"](this === i ? r : this, arguments), this
                        }, i[s[0] + "With"] = o.fireWith
                    }), r.promise(i), e && e.call(i, i), i
                },
                when: function (e) {
                    var t = 0,
                        n = v.call(arguments),
                        r = n.length,
                        i = 1 !== r || e && w.isFunction(e.promise) ? r : 0,
                        s = 1 === i ? e : w.Deferred(),
                        o = function (e, t, n) {
                            return function (r) {
                                t[e] = this, n[e] = arguments.length > 1 ? v.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                            }
                        },
                        u, a, f;
                    if (r > 1)
                        for (u = Array(r), a = Array(r), f = Array(r); r > t; t++) n[t] && w.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i;
                    return i || s.resolveWith(f, n), s.promise()
                }
            }), w.support = function (t) {
                var n, r, s, u, a, f, l, c, h, p = o.createElement("div");
                if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], r = p.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
                u = o.createElement("select"), f = u.appendChild(o.createElement("option")), s = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== p.className, t.leadingWhitespace = 3 === p.firstChild.nodeType, t.tbody = !p.getElementsByTagName("tbody").length, t.htmlSerialize = !!p.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!s.value, t.optSelected = f.selected, t.enctype = !!o.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, u.disabled = !0, t.optDisabled = !f.disabled;
                try {
                    delete p.test
                } catch (d) {
                    t.deleteExpando = !1
                }
                s = o.createElement("input"), s.setAttribute("value", ""), t.input = "" === s.getAttribute("value"), s.value = "t", s.setAttribute("type", "radio"), t.radioValue = "t" === s.value, s.setAttribute("checked", "t"), s.setAttribute("name", "t"), a = o.createDocumentFragment(), a.appendChild(s), t.appendChecked = s.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function () {
                    t.noCloneEvent = !1
                }), p.cloneNode(!0).click());
                for (h in {
                        submit: !0,
                        change: !0,
                        focusin: !0
                    }) p.setAttribute(l = "on" + h, "t"), t[h + "Bubbles"] = l in e || p.attributes[l].expando === !1;
                p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === p.style.backgroundClip;
                for (h in w(t)) break;
                return t.ownLast = "0" !== h, w(function () {
                    var n, r, s, u = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                        a = o.getElementsByTagName("body")[0];
                    a && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = p.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === s[0].offsetHeight, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === s[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", w.swap(a, null != a.style.zoom ? {
                        zoom: 1
                    } : {}, function () {
                        t.boxSizing = 4 === p.offsetWidth
                    }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {
                        width: "4px"
                    }).width, r = p.appendChild(o.createElement("div")), r.style.cssText = p.style.cssText = u, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== i && (p.innerHTML = "", p.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== p.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = s = r = null)
                }), n = u = a = f = r = s = null, t
            }({});
            var F = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
                I = /([A-Z])/g;
            w.extend({
                cache: {},
                noData: {
                    applet: !0,
                    embed: !0,
                    object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function (e) {
                    return e = e.nodeType ? w.cache[e[w.expando]] : e[w.expando], !!e && !z(e)
                },
                data: function (e, t, n) {
                    return q(e, t, n)
                },
                removeData: function (e, t) {
                    return R(e, t)
                },
                _data: function (e, t, n) {
                    return q(e, t, n, !0)
                },
                _removeData: function (e, t) {
                    return R(e, t, !0)
                },
                acceptData: function (e) {
                    if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
                    var t = e.nodeName && w.noData[e.nodeName.toLowerCase()];
                    return !t || t !== !0 && e.getAttribute("classid") === t
                }
            }), w.fn.extend({
                data: function (e, n) {
                    var r, i, s = null,
                        o = 0,
                        u = this[0];
                    if (e === t) {
                        if (this.length && (s = w.data(u), 1 === u.nodeType && !w._data(u, "parsedAttrs"))) {
                            for (r = u.attributes; r.length > o; o++) i = r[o].name, 0 === i.indexOf("data-") && (i = w.camelCase(i.slice(5)), U(u, i, s[i]));
                            w._data(u, "parsedAttrs", !0)
                        }
                        return s
                    }
                    return "object" == typeof e ? this.each(function () {
                        w.data(this, e)
                    }) : arguments.length > 1 ? this.each(function () {
                        w.data(this, e, n)
                    }) : u ? U(u, e, w.data(u, e)) : null
                },
                removeData: function (e) {
                    return this.each(function () {
                        w.removeData(this, e)
                    })
                }
            }), w.extend({
                queue: function (e, n, r) {
                    var i;
                    return e ? (n = (n || "fx") + "queue", i = w._data(e, n), r && (!i || w.isArray(r) ? i = w._data(e, n, w.makeArray(r)) : i.push(r)), i || []) : t
                },
                dequeue: function (e, t) {
                    t = t || "fx";
                    var n = w.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        s = w._queueHooks(e, t),
                        o = function () {
                            w.dequeue(e, t)
                        };
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
                },
                _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return w._data(e, n) || w._data(e, n, {
                        empty: w.Callbacks("once memory").add(function () {
                            w._removeData(e, t + "queue"), w._removeData(e, n)
                        })
                    })
                }
            }), w.fn.extend({
                queue: function (e, n) {
                    var r = 2;
                    return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? w.queue(this[0], e) : n === t ? this : this.each(function () {
                        var t = w.queue(this, e, n);
                        w._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && w.dequeue(this, e)
                    })
                },
                dequeue: function (e) {
                    return this.each(function () {
                        w.dequeue(this, e)
                    })
                },
                delay: function (e, t) {
                    return e = w.fx ? w.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                        var r = setTimeout(t, e);
                        n.stop = function () {
                            clearTimeout(r)
                        }
                    })
                },
                clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                },
                promise: function (e, n) {
                    var r, i = 1,
                        s = w.Deferred(),
                        o = this,
                        u = this.length,
                        a = function () {
                            --i || s.resolveWith(o, [o])
                        };
                    "string" != typeof e && (n = e, e = t), e = e || "fx";
                    while (u--) r = w._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
                    return a(), s.promise(n)
                }
            });
            var W, X, V = /[\t\r\n\f]/g,
                $ = /\r/g,
                J = /^(?:input|select|textarea|button|object)$/i,
                K = /^(?:a|area)$/i,
                Q = /^(?:checked|selected)$/i,
                G = w.support.getSetAttribute,
                Y = w.support.input;
            w.fn.extend({
                attr: function (e, t) {
                    return w.access(this, w.attr, e, t, arguments.length > 1)
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        w.removeAttr(this, e)
                    })
                },
                prop: function (e, t) {
                    return w.access(this, w.prop, e, t, arguments.length > 1)
                },
                removeProp: function (e) {
                    return e = w.propFix[e] || e, this.each(function () {
                        try {
                            this[e] = t, delete this[e]
                        } catch (n) {}
                    })
                },
                addClass: function (e) {
                    var t, n, r, i, s, o = 0,
                        u = this.length,
                        a = "string" == typeof e && e;
                    if (w.isFunction(e)) return this.each(function (t) {
                        w(this).addClass(e.call(this, t, this.className))
                    });
                    if (a)
                        for (t = (e || "").match(S) || []; u > o; o++)
                            if (n = this[o], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(V, " ") : " ")) {
                                s = 0;
                                while (i = t[s++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                                n.className = w.trim(r)
                            }
                    return this
                },
                removeClass: function (e) {
                    var t, n, r, i, s, o = 0,
                        u = this.length,
                        a = 0 === arguments.length || "string" == typeof e && e;
                    if (w.isFunction(e)) return this.each(function (t) {
                        w(this).removeClass(e.call(this, t, this.className))
                    });
                    if (a)
                        for (t = (e || "").match(S) || []; u > o; o++)
                            if (n = this[o], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(V, " ") : "")) {
                                s = 0;
                                while (i = t[s++])
                                    while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                                n.className = e ? w.trim(r) : ""
                            }
                    return this
                },
                toggleClass: function (e, t) {
                    var n = typeof e,
                        r = "boolean" == typeof t;
                    return w.isFunction(e) ? this.each(function (n) {
                        w(this).toggleClass(e.call(this, n, this.className, t), t)
                    }) : this.each(function () {
                        if ("string" === n) {
                            var s, o = 0,
                                u = w(this),
                                a = t,
                                f = e.match(S) || [];
                            while (s = f[o++]) a = r ? a : !u.hasClass(s), u[a ? "addClass" : "removeClass"](s)
                        } else(n === i || "boolean" === n) && (this.className && w._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : w._data(this, "__className__") || "")
                    })
                },
                hasClass: function (e) {
                    var t = " " + e + " ",
                        n = 0,
                        r = this.length;
                    for (; r > n; n++)
                        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(V, " ").indexOf(t) >= 0) return !0;
                    return !1
                },
                val: function (e) {
                    var n, r, i, s = this[0];
                    if (arguments.length) return i = w.isFunction(e), this.each(function (n) {
                        var s;
                        1 === this.nodeType && (s = i ? e.call(this, n, w(this).val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : w.isArray(s) && (s = w.map(s, function (e) {
                            return null == e ? "" : e + ""
                        })), r = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, s, "value") !== t || (this.value = s))
                    });
                    if (s) return r = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()], r && "get" in r && (n = r.get(s, "value")) !== t ? n : (n = s.value, "string" == typeof n ? n.replace($, "") : null == n ? "" : n)
                }
            }), w.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = w.find.attr(e, "value");
                            return null != t ? t : e.text
                        }
                    },
                    select: {
                        get: function (e) {
                            var t, n, r = e.options,
                                i = e.selectedIndex,
                                s = "select-one" === e.type || 0 > i,
                                o = s ? null : [],
                                u = s ? i + 1 : r.length,
                                a = 0 > i ? u : s ? i : 0;
                            for (; u > a; a++)
                                if (n = r[a], !(!n.selected && a !== i || (w.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && w.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = w(n).val(), s) return t;
                                    o.push(t)
                                }
                            return o
                        },
                        set: function (e, t) {
                            var n, r, i = e.options,
                                s = w.makeArray(t),
                                o = i.length;
                            while (o--) r = i[o], (r.selected = w.inArray(w(r).val(), s) >= 0) && (n = !0);
                            return n || (e.selectedIndex = -1), s
                        }
                    }
                },
                attr: function (e, n, r) {
                    var s, o, u = e.nodeType;
                    if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? w.prop(e, n, r) : (1 === u && w.isXMLDoc(e) || (n = n.toLowerCase(), s = w.attrHooks[n] || (w.expr.match.bool.test(n) ? X : W)), r === t ? s && "get" in s && null !== (o = s.get(e, n)) ? o : (o = w.find.attr(e, n), null == o ? t : o) : null !== r ? s && "set" in s && (o = s.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : (w.removeAttr(e, n), t))
                },
                removeAttr: function (e, t) {
                    var n, r, i = 0,
                        s = t && t.match(S);
                    if (s && 1 === e.nodeType)
                        while (n = s[i++]) r = w.propFix[n] || n, w.expr.match.bool.test(n) ? Y && G || !Q.test(n) ? e[r] = !1 : e[w.camelCase("default-" + n)] = e[r] = !1 : w.attr(e, n, ""), e.removeAttribute(G ? n : r)
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!w.support.radioValue && "radio" === t && w.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                },
                prop: function (e, n, r) {
                    var i, s, o, u = e.nodeType;
                    if (e && 3 !== u && 8 !== u && 2 !== u) return o = 1 !== u || !w.isXMLDoc(e), o && (n = w.propFix[n] || n, s = w.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && null !== (i = s.get(e, n)) ? i : e[n]
                },
                propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = w.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : J.test(e.nodeName) || K.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                }
            }), X = {
                set: function (e, t, n) {
                    return t === !1 ? w.removeAttr(e, n) : Y && G || !Q.test(n) ? e.setAttribute(!G && w.propFix[n] || n, n) : e[w.camelCase("default-" + n)] = e[n] = !0, n
                }
            }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, n) {
                var r = w.expr.attrHandle[n] || w.find.attr;
                w.expr.attrHandle[n] = Y && G || !Q.test(n) ? function (e, n, i) {
                    var s = w.expr.attrHandle[n],
                        o = i ? t : (w.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
                    return w.expr.attrHandle[n] = s, o
                } : function (e, n, r) {
                    return r ? t : e[w.camelCase("default-" + n)] ? n.toLowerCase() : null
                }
            }), Y && G || (w.attrHooks.value = {
                set: function (e, n, r) {
                    return w.nodeName(e, "input") ? (e.defaultValue = n, t) : W && W.set(e, n, r)
                }
            }), G || (W = {
                set: function (e, n, r) {
                    var i = e.getAttributeNode(r);
                    return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
                }
            }, w.expr.attrHandle.id = w.expr.attrHandle.name = w.expr.attrHandle.coords = function (e, n, r) {
                var i;
                return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
            }, w.valHooks.button = {
                get: function (e, n) {
                    var r = e.getAttributeNode(n);
                    return r && r.specified ? r.value : t
                },
                set: W.set
            }, w.attrHooks.contenteditable = {
                set: function (e, t, n) {
                    W.set(e, "" === t ? !1 : t, n)
                }
            }, w.each(["width", "height"], function (e, n) {
                w.attrHooks[n] = {
                    set: function (e, r) {
                        return "" === r ? (e.setAttribute(n, "auto"), r) : t
                    }
                }
            })), w.support.hrefNormalized || w.each(["href", "src"], function (e, t) {
                w.propHooks[t] = {
                    get: function (e) {
                        return e.getAttribute(t, 4)
                    }
                }
            }), w.support.style || (w.attrHooks.style = {
                get: function (e) {
                    return e.style.cssText || t
                },
                set: function (e, t) {
                    return e.style.cssText = t + ""
                }
            }), w.support.optSelected || (w.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
                }
            }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                w.propFix[this.toLowerCase()] = this
            }), w.support.enctype || (w.propFix.enctype = "encoding"), w.each(["radio", "checkbox"], function () {
                w.valHooks[this] = {
                    set: function (e, n) {
                        return w.isArray(n) ? e.checked = w.inArray(w(e).val(), n) >= 0 : t
                    }
                }, w.support.checkOn || (w.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            });
            var Z = /^(?:input|select|textarea)$/i,
                et = /^key/,
                tt = /^(?:mouse|contextmenu)|click/,
                nt = /^(?:focusinfocus|focusoutblur)$/,
                rt = /^([^.]*)(?:\.(.+)|)$/;
            w.event = {
                global: {},
                add: function (e, n, r, s, o) {
                    var u, a, f, l, c, h, p, d, v, m, g, y = w._data(e);
                    if (y) {
                        r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = w.guid++), (a = y.events) || (a = y.events = {}), (h = y.handle) || (h = y.handle = function (e) {
                            return typeof w === i || e && w.event.triggered === e.type ? t : w.event.dispatch.apply(h.elem, arguments)
                        }, h.elem = e), n = (n || "").match(S) || [""], f = n.length;
                        while (f--) u = rt.exec(n[f]) || [], v = g = u[1], m = (u[2] || "").split(".").sort(), v && (c = w.event.special[v] || {}, v = (o ? c.delegateType : c.bindType) || v, c = w.event.special[v] || {}, p = w.extend({
                            type: v,
                            origType: g,
                            data: s,
                            handler: r,
                            guid: r.guid,
                            selector: o,
                            needsContext: o && w.expr.match.needsContext.test(o),
                            namespace: m.join(".")
                        }, l), (d = a[v]) || (d = a[v] = [], d.delegateCount = 0, c.setup && c.setup.call(e, s, m, h) !== !1 || (e.addEventListener ? e.addEventListener(v, h, !1) : e.attachEvent && e.attachEvent("on" + v, h))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), w.event.global[v] = !0);
                        e = null
                    }
                },
                remove: function (e, t, n, r, i) {
                    var s, o, u, a, f, l, c, h, p, d, v, m = w.hasData(e) && w._data(e);
                    if (m && (l = m.events)) {
                        t = (t || "").match(S) || [""], f = t.length;
                        while (f--)
                            if (u = rt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort(), p) {
                                c = w.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = l[p] || [], u = u[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                                while (s--) o = h[s], !i && v !== o.origType || n && n.guid !== o.guid || u && !u.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                                a && !h.length && (c.teardown && c.teardown.call(e, d, m.handle) !== !1 || w.removeEvent(e, p, m.handle), delete l[p])
                            } else
                                for (p in l) w.event.remove(e, p + t[f], n, r, !0);
                        w.isEmptyObject(l) && (delete m.handle, w._removeData(e, "events"))
                    }
                },
                trigger: function (n, r, i, s) {
                    var u, a, f, l, c, h, p, d = [i || o],
                        v = y.call(n, "type") ? n.type : n,
                        m = y.call(n, "namespace") ? n.namespace.split(".") : [];
                    if (f = h = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(v + w.event.triggered) && (v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), a = 0 > v.indexOf(":") && "on" + v, n = n[w.expando] ? n : new w.Event(v, "object" == typeof n && n), n.isTrigger = s ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : w.makeArray(r, [n]), c = w.event.special[v] || {}, s || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                        if (!s && !c.noBubble && !w.isWindow(i)) {
                            for (l = c.delegateType || v, nt.test(l + v) || (f = f.parentNode); f; f = f.parentNode) d.push(f), h = f;
                            h === (i.ownerDocument || o) && d.push(h.defaultView || h.parentWindow || e)
                        }
                        p = 0;
                        while ((f = d[p++]) && !n.isPropagationStopped()) n.type = p > 1 ? l : c.bindType || v, u = (w._data(f, "events") || {})[n.type] && w._data(f, "handle"), u && u.apply(f, r), u = a && f[a], u && w.acceptData(f) && u.apply && u.apply(f, r) === !1 && n.preventDefault();
                        if (n.type = v, !s && !n.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), r) === !1) && w.acceptData(i) && a && i[v] && !w.isWindow(i)) {
                            h = i[a], h && (i[a] = null), w.event.triggered = v;
                            try {
                                i[v]()
                            } catch (g) {}
                            w.event.triggered = t, h && (i[a] = h)
                        }
                        return n.result
                    }
                },
                dispatch: function (e) {
                    e = w.event.fix(e);
                    var n, r, i, s, o, u = [],
                        a = v.call(arguments),
                        f = (w._data(this, "events") || {})[e.type] || [],
                        l = w.event.special[e.type] || {};
                    if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                        u = w.event.handlers.call(this, e, f), n = 0;
                        while ((s = u[n++]) && !e.isPropagationStopped()) {
                            e.currentTarget = s.elem, o = 0;
                            while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((w.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                        }
                        return l.postDispatch && l.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function (e, n) {
                    var r, i, s, o, u = [],
                        a = n.delegateCount,
                        f = e.target;
                    if (a && f.nodeType && (!e.button || "click" !== e.type))
                        for (; f != this; f = f.parentNode || this)
                            if (1 === f.nodeType && (f.disabled !== !0 || "click" !== e.type)) {
                                for (s = [], o = 0; a > o; o++) i = n[o], r = i.selector + " ", s[r] === t && (s[r] = i.needsContext ? w(r, this).index(f) >= 0 : w.find(r, this, null, [f]).length), s[r] && s.push(i);
                                s.length && u.push({
                                    elem: f,
                                    handlers: s
                                })
                            }
                    return n.length > a && u.push({
                        elem: this,
                        handlers: n.slice(a)
                    }), u
                },
                fix: function (e) {
                    if (e[w.expando]) return e;
                    var t, n, r, i = e.type,
                        s = e,
                        u = this.fixHooks[i];
                    u || (this.fixHooks[i] = u = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = u.props ? this.props.concat(u.props) : this.props, e = new w.Event(s), t = r.length;
                    while (t--) n = r[t], e[n] = s[n];
                    return e.target || (e.target = s.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, u.filter ? u.filter(e, s) : e
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function (e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (e, n) {
                        var r, i, s, u = n.button,
                            a = n.fromElement;
                        return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, s = i.documentElement, r = i.body, e.pageX = n.clientX + (s && s.scrollLeft || r && r.scrollLeft || 0) - (s && s.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || r && r.scrollTop || 0) - (s && s.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || u === t || (e.which = 1 & u ? 1 : 2 & u ? 3 : 4 & u ? 2 : 0), e
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function () {
                            if (this !== ot() && this.focus) try {
                                return this.focus(), !1
                            } catch (e) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function () {
                            return this === ot() && this.blur ? (this.blur(), !1) : t
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function () {
                            return w.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                        },
                        _default: function (e) {
                            return w.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            e.result !== t && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function (e, t, n, r) {
                    var i = w.extend(new w.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    r ? w.event.trigger(i, null, t) : w.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
                }
            }, w.removeEvent = o.removeEventListener ? function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            } : function (e, t, n) {
                var r = "on" + t;
                e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
            }, w.Event = function (e, n) {
                return this instanceof w.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : st) : this.type = e, n && w.extend(this, n), this.timeStamp = e && e.timeStamp || w.now(), this[w.expando] = !0, t) : new w.Event(e, n)
            }, w.Event.prototype = {
                isDefaultPrevented: st,
                isPropagationStopped: st,
                isImmediatePropagationStopped: st,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                },
                stopImmediatePropagation: function () {
                    this.isImmediatePropagationStopped = it, this.stopPropagation()
                }
            }, w.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function (e, t) {
                w.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n, r = this,
                            i = e.relatedTarget,
                            s = e.handleObj;
                        return (!i || i !== r && !w.contains(r, i)) && (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), w.support.submitBubbles || (w.event.special.submit = {
                setup: function () {
                    return w.nodeName(this, "form") ? !1 : (w.event.add(this, "click._submit keypress._submit", function (e) {
                        var n = e.target,
                            r = w.nodeName(n, "input") || w.nodeName(n, "button") ? n.form : t;
                        r && !w._data(r, "submitBubbles") && (w.event.add(r, "submit._submit", function (e) {
                            e._submit_bubble = !0
                        }), w._data(r, "submitBubbles", !0))
                    }), t)
                },
                postDispatch: function (e) {
                    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && w.event.simulate("submit", this.parentNode, e, !0))
                },
                teardown: function () {
                    return w.nodeName(this, "form") ? !1 : (w.event.remove(this, "._submit"), t)
                }
            }), w.support.changeBubbles || (w.event.special.change = {
                setup: function () {
                    return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (w.event.add(this, "propertychange._change", function (e) {
                        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                    }), w.event.add(this, "click._change", function (e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1), w.event.simulate("change", this, e, !0)
                    })), !1) : (w.event.add(this, "beforeactivate._change", function (e) {
                        var t = e.target;
                        Z.test(t.nodeName) && !w._data(t, "changeBubbles") && (w.event.add(t, "change._change", function (e) {
                            !this.parentNode || e.isSimulated || e.isTrigger || w.event.simulate("change", this.parentNode, e, !0)
                        }), w._data(t, "changeBubbles", !0))
                    }), t)
                },
                handle: function (e) {
                    var n = e.target;
                    return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
                },
                teardown: function () {
                    return w.event.remove(this, "._change"), !Z.test(this.nodeName)
                }
            }), w.support.focusinBubbles || w.each({
                focus: "focusin",
                blur: "focusout"
            }, function (e, t) {
                var n = 0,
                    r = function (e) {
                        w.event.simulate(t, e.target, w.event.fix(e), !0)
                    };
                w.event.special[t] = {
                    setup: function () {
                        0 === n++ && o.addEventListener(e, r, !0)
                    },
                    teardown: function () {
                        0 === --n && o.removeEventListener(e, r, !0)
                    }
                }
            }), w.fn.extend({
                on: function (e, n, r, i, s) {
                    var o, u;
                    if ("object" == typeof e) {
                        "string" != typeof n && (r = r || n, n = t);
                        for (o in e) this.on(o, n, r, e[o], s);
                        return this
                    }
                    if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = st;
                    else if (!i) return this;
                    return 1 === s && (u = i, i = function (e) {
                        return w().off(e), u.apply(this, arguments)
                    }, i.guid = u.guid || (u.guid = w.guid++)), this.each(function () {
                        w.event.add(this, e, i, r, n)
                    })
                },
                one: function (e, t, n, r) {
                    return this.on(e, t, n, r, 1)
                },
                off: function (e, n, r) {
                    var i, s;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" == typeof e) {
                        for (s in e) this.off(s, n, e[s]);
                        return this
                    }
                    return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = st), this.each(function () {
                        w.event.remove(this, e, r, n)
                    })
                },
                trigger: function (e, t) {
                    return this.each(function () {
                        w.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function (e, n) {
                    var r = this[0];
                    return r ? w.event.trigger(e, n, r, !0) : t
                }
            });
            var ut = /^.[^:#\[\.,]*$/,
                at = /^(?:parents|prev(?:Until|All))/,
                ft = w.expr.match.needsContext,
                lt = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            w.fn.extend({
                find: function (e) {
                    var t, n = [],
                        r = this,
                        i = r.length;
                    if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
                        for (t = 0; i > t; t++)
                            if (w.contains(r[t], this)) return !0
                    }));
                    for (t = 0; i > t; t++) w.find(e, r[t], n);
                    return n = this.pushStack(i > 1 ? w.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
                },
                has: function (e) {
                    var t, n = w(e, this),
                        r = n.length;
                    return this.filter(function () {
                        for (t = 0; r > t; t++)
                            if (w.contains(this, n[t])) return !0
                    })
                },
                not: function (e) {
                    return this.pushStack(ht(this, e || [], !0))
                },
                filter: function (e) {
                    return this.pushStack(ht(this, e || [], !1))
                },
                is: function (e) {
                    return !!ht(this, "string" == typeof e && ft.test(e) ? w(e) : e || [], !1).length
                },
                closest: function (e, t) {
                    var n, r = 0,
                        i = this.length,
                        s = [],
                        o = ft.test(e) || "string" != typeof e ? w(e, t || this.context) : 0;
                    for (; i > r; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (11 > n.nodeType && (o ? o.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                                n = s.push(n);
                                break
                            }
                    return this.pushStack(s.length > 1 ? w.unique(s) : s)
                },
                index: function (e) {
                    return e ? "string" == typeof e ? w.inArray(this[0], w(e)) : w.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function (e, t) {
                    var n = "string" == typeof e ? w(e, t) : w.makeArray(e && e.nodeType ? [e] : e),
                        r = w.merge(this.get(), n);
                    return this.pushStack(w.unique(r))
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), w.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function (e) {
                    return w.dir(e, "parentNode")
                },
                parentsUntil: function (e, t, n) {
                    return w.dir(e, "parentNode", n)
                },
                next: function (e) {
                    return ct(e, "nextSibling")
                },
                prev: function (e) {
                    return ct(e, "previousSibling")
                },
                nextAll: function (e) {
                    return w.dir(e, "nextSibling")
                },
                prevAll: function (e) {
                    return w.dir(e, "previousSibling")
                },
                nextUntil: function (e, t, n) {
                    return w.dir(e, "nextSibling", n)
                },
                prevUntil: function (e, t, n) {
                    return w.dir(e, "previousSibling", n)
                },
                siblings: function (e) {
                    return w.sibling((e.parentNode || {}).firstChild, e)
                },
                children: function (e) {
                    return w.sibling(e.firstChild)
                },
                contents: function (e) {
                    return w.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : w.merge([], e.childNodes)
                }
            }, function (e, t) {
                w.fn[e] = function (n, r) {
                    var i = w.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (lt[e] || (i = w.unique(i)), at.test(e) && (i = i.reverse())), this.pushStack(i)
                }
            }), w.extend({
                filter: function (e, t, n) {
                    var r = t[0];
                    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
                        return 1 === e.nodeType
                    }))
                },
                dir: function (e, n, r) {
                    var i = [],
                        s = e[n];
                    while (s && 9 !== s.nodeType && (r === t || 1 !== s.nodeType || !w(s).is(r))) 1 === s.nodeType && i.push(s), s = s[n];
                    return i
                },
                sibling: function (e, t) {
                    var n = [];
                    for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
            });
            var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                vt = / jQuery\d+="(?:null|\d+)"/g,
                mt = RegExp("<(?:" + dt + ")[\\s/>]", "i"),
                gt = /^\s+/,
                yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                bt = /<([\w:]+)/,
                wt = /<tbody/i,
                Et = /<|&#?\w+;/,
                St = /<(?:script|style|link)/i,
                xt = /^(?:checkbox|radio)$/i,
                Tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Nt = /^$|\/(?:java|ecma)script/i,
                Ct = /^true\/(.*)/,
                kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                Lt = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    area: [1, "<map>", "</map>"],
                    param: [1, "<object>", "</object>"],
                    thead: [1, "<table>", "</table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: w.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
                },
                At = pt(o),
                Ot = At.appendChild(o.createElement("div"));
            Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, w.fn.extend({
                text: function (e) {
                    return w.access(this, function (e) {
                        return e === t ? w.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
                    }, null, e, arguments.length)
                },
                append: function () {
                    return this.domManip(arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Mt(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function () {
                    return this.domManip(arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Mt(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function () {
                    return this.domManip(arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function () {
                    return this.domManip(arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                remove: function (e, t) {
                    var n, r = e ? w.filter(e, this) : this,
                        i = 0;
                    for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || w.cleanData(jt(n)), n.parentNode && (t && w.contains(n.ownerDocument, n) && Pt(jt(n, "script")), n.parentNode.removeChild(n));
                    return this
                },
                empty: function () {
                    var e, t = 0;
                    for (; null != (e = this[t]); t++) {
                        1 === e.nodeType && w.cleanData(jt(e, !1));
                        while (e.firstChild) e.removeChild(e.firstChild);
                        e.options && w.nodeName(e, "select") && (e.options.length = 0)
                    }
                    return this
                },
                clone: function (e, t) {
                    return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                        return w.clone(this, e, t)
                    })
                },
                html: function (e) {
                    return w.access(this, function (e) {
                        var n = this[0] || {},
                            r = 0,
                            i = this.length;
                        if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(vt, "") : t;
                        if (!("string" != typeof e || St.test(e) || !w.support.htmlSerialize && mt.test(e) || !w.support.leadingWhitespace && gt.test(e) || Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                            e = e.replace(yt, "<$1></$2>");
                            try {
                                for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (w.cleanData(jt(n, !1)), n.innerHTML = e);
                                n = 0
                            } catch (s) {}
                        }
                        n && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function () {
                    var e = w.map(this, function (e) {
                            return [e.nextSibling, e.parentNode]
                        }),
                        t = 0;
                    return this.domManip(arguments, function (n) {
                        var r = e[t++],
                            i = e[t++];
                        i && (r && r.parentNode !== i && (r = this.nextSibling), w(this).remove(), i.insertBefore(n, r))
                    }, !0), t ? this : this.remove()
                },
                detach: function (e) {
                    return this.remove(e, !0)
                },
                domManip: function (e, t, n) {
                    e = p.apply([], e);
                    var r, i, s, o, u, a, f = 0,
                        l = this.length,
                        c = this,
                        h = l - 1,
                        d = e[0],
                        v = w.isFunction(d);
                    if (v || !(1 >= l || "string" != typeof d || w.support.checkClone) && Tt.test(d)) return this.each(function (r) {
                        var i = c.eq(r);
                        v && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n)
                    });
                    if (l && (a = w.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = a.firstChild, 1 === a.childNodes.length && (a = r), r)) {
                        for (o = w.map(jt(a, "script"), _t), s = o.length; l > f; f++) i = a, f !== h && (i = w.clone(i, !0, !0), s && w.merge(o, jt(i, "script"))), t.call(this[f], i, f);
                        if (s)
                            for (u = o[o.length - 1].ownerDocument, w.map(o, Dt), f = 0; s > f; f++) i = o[f], Nt.test(i.type || "") && !w._data(i, "globalEval") && w.contains(u, i) && (i.src ? w._evalUrl(i.src) : w.globalEval((i.text || i.textContent || i.innerHTML || "").replace(kt, "")));
                        a = r = null
                    }
                    return this
                }
            }), w.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (e, t) {
                w.fn[e] = function (e) {
                    var n, r = 0,
                        i = [],
                        s = w(e),
                        o = s.length - 1;
                    for (; o >= r; r++) n = r === o ? this : this.clone(!0), w(s[r])[t](n), d.apply(i, n.get());
                    return this.pushStack(i)
                }
            }), w.extend({
                clone: function (e, t, n) {
                    var r, i, s, o, u, a = w.contains(e.ownerDocument, e);
                    if (w.support.html5Clone || w.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ot.innerHTML = e.outerHTML, Ot.removeChild(s = Ot.firstChild)), !(w.support.noCloneEvent && w.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                        for (r = jt(s), u = jt(e), o = 0; null != (i = u[o]); ++o) r[o] && Bt(i, r[o]);
                    if (t)
                        if (n)
                            for (u = u || jt(e), r = r || jt(s), o = 0; null != (i = u[o]); o++) Ht(i, r[o]);
                        else Ht(e, s);
                    return r = jt(s, "script"), r.length > 0 && Pt(r, !a && jt(e, "script")), r = u = i = null, s
                },
                buildFragment: function (e, t, n, r) {
                    var i, s, o, u, a, f, l, c = e.length,
                        h = pt(t),
                        p = [],
                        d = 0;
                    for (; c > d; d++)
                        if (s = e[d], s || 0 === s)
                            if ("object" === w.type(s)) w.merge(p, s.nodeType ? [s] : s);
                            else if (Et.test(s)) {
                        u = u || h.appendChild(t.createElement("div")), a = (bt.exec(s) || ["", ""])[1].toLowerCase(), l = Lt[a] || Lt._default, u.innerHTML = l[1] + s.replace(yt, "<$1></$2>") + l[2], i = l[0];
                        while (i--) u = u.lastChild;
                        if (!w.support.leadingWhitespace && gt.test(s) && p.push(t.createTextNode(gt.exec(s)[0])), !w.support.tbody) {
                            s = "table" !== a || wt.test(s) ? "<table>" !== l[1] || wt.test(s) ? 0 : u : u.firstChild, i = s && s.childNodes.length;
                            while (i--) w.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                        }
                        w.merge(p, u.childNodes), u.textContent = "";
                        while (u.firstChild) u.removeChild(u.firstChild);
                        u = h.lastChild
                    } else p.push(t.createTextNode(s));
                    u && h.removeChild(u), w.support.appendChecked || w.grep(jt(p, "input"), Ft), d = 0;
                    while (s = p[d++])
                        if ((!r || -1 === w.inArray(s, r)) && (o = w.contains(s.ownerDocument, s), u = jt(h.appendChild(s), "script"), o && Pt(u), n)) {
                            i = 0;
                            while (s = u[i++]) Nt.test(s.type || "") && n.push(s)
                        }
                    return u = null, h
                },
                cleanData: function (e, t) {
                    var n, r, s, o, u = 0,
                        a = w.expando,
                        f = w.cache,
                        l = w.support.deleteExpando,
                        h = w.event.special;
                    for (; null != (n = e[u]); u++)
                        if ((t || w.acceptData(n)) && (s = n[a], o = s && f[s])) {
                            if (o.events)
                                for (r in o.events) h[r] ? w.event.remove(n, r) : w.removeEvent(n, r, o.handle);
                            f[s] && (delete f[s], l ? delete n[a] : typeof n.removeAttribute !== i ? n.removeAttribute(a) : n[a] = null, c.push(s))
                        }
                },
                _evalUrl: function (e) {
                    return w.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    })
                }
            }), w.fn.extend({
                wrapAll: function (e) {
                    if (w.isFunction(e)) return this.each(function (t) {
                        w(this).wrapAll(e.call(this, t))
                    });
                    if (this[0]) {
                        var t = w(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                            var e = this;
                            while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                            return e
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function (e) {
                    return w.isFunction(e) ? this.each(function (t) {
                        w(this).wrapInner(e.call(this, t))
                    }) : this.each(function () {
                        var t = w(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function (e) {
                    var t = w.isFunction(e);
                    return this.each(function (n) {
                        w(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function () {
                    return this.parent().each(function () {
                        w.nodeName(this, "body") || w(this).replaceWith(this.childNodes)
                    }).end()
                }
            });
            var It, qt, Rt, Ut = /alpha\([^)]*\)/i,
                zt = /opacity\s*=\s*([^)]*)/,
                Wt = /^(top|right|bottom|left)$/,
                Xt = /^(none|table(?!-c[ea]).+)/,
                Vt = /^margin/,
                $t = RegExp("^(" + E + ")(.*)$", "i"),
                Jt = RegExp("^(" + E + ")(?!px)[a-z%]+$", "i"),
                Kt = RegExp("^([+-])=(" + E + ")", "i"),
                Qt = {
                    BODY: "block"
                },
                Gt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Yt = {
                    letterSpacing: 0,
                    fontWeight: 400
                },
                Zt = ["Top", "Right", "Bottom", "Left"],
                en = ["Webkit", "O", "Moz", "ms"];
            w.fn.extend({
                css: function (e, n) {
                    return w.access(this, function (e, n, r) {
                        var i, s, o = {},
                            u = 0;
                        if (w.isArray(n)) {
                            for (s = qt(e), i = n.length; i > u; u++) o[n[u]] = w.css(e, n[u], !1, s);
                            return o
                        }
                        return r !== t ? w.style(e, n, r) : w.css(e, n)
                    }, e, n, arguments.length > 1)
                },
                show: function () {
                    return rn(this, !0)
                },
                hide: function () {
                    return rn(this)
                },
                toggle: function (e) {
                    var t = "boolean" == typeof e;
                    return this.each(function () {
                        (t ? e : nn(this)) ? w(this).show(): w(this).hide()
                    })
                }
            }), w.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = Rt(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": w.support.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function (e, n, r, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var s, o, u, a = w.camelCase(n),
                            f = e.style;
                        if (n = w.cssProps[a] || (w.cssProps[a] = tn(f, a)), u = w.cssHooks[n] || w.cssHooks[a], r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
                        if (o = typeof r, "string" === o && (s = Kt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(w.css(e, n)), o = "number"), !(null == r || "number" === o && isNaN(r) || ("number" !== o || w.cssNumber[a] || (r += "px"), w.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (f[n] = "inherit"), u && "set" in u && (r = u.set(e, r, i)) === t))) try {
                            f[n] = r
                        } catch (l) {}
                    }
                },
                css: function (e, n, r, i) {
                    var s, o, u, a = w.camelCase(n);
                    return n = w.cssProps[a] || (w.cssProps[a] = tn(e.style, a)), u = w.cssHooks[n] || w.cssHooks[a], u && "get" in u && (o = u.get(e, !0, r)), o === t && (o = Rt(e, n, i)), "normal" === o && n in Yt && (o = Yt[n]), "" === r || r ? (s = parseFloat(o), r === !0 || w.isNumeric(s) ? s || 0 : o) : o
                }
            }), e.getComputedStyle ? (qt = function (t) {
                return e.getComputedStyle(t, null)
            }, Rt = function (e, n, r) {
                var i, s, o, u = r || qt(e),
                    a = u ? u.getPropertyValue(n) || u[n] : t,
                    f = e.style;
                return u && ("" !== a || w.contains(e.ownerDocument, e) || (a = w.style(e, n)), Jt.test(a) && Vt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
            }) : o.documentElement.currentStyle && (qt = function (e) {
                return e.currentStyle
            }, Rt = function (e, n, r) {
                var i, s, o, u = r || qt(e),
                    a = u ? u[n] : t,
                    f = e.style;
                return null == a && f && f[n] && (a = f[n]), Jt.test(a) && !Wt.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = "fontSize" === n ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), "" === a ? "auto" : a
            }), w.each(["height", "width"], function (e, n) {
                w.cssHooks[n] = {
                    get: function (e, r, i) {
                        return r ? 0 === e.offsetWidth && Xt.test(w.css(e, "display")) ? w.swap(e, Gt, function () {
                            return un(e, n, i)
                        }) : un(e, n, i) : t
                    },
                    set: function (e, t, r) {
                        var i = r && qt(e);
                        return sn(e, t, r ? on(e, n, r, w.support.boxSizing && "border-box" === w.css(e, "boxSizing", !1, i), i) : 0)
                    }
                }
            }), w.support.opacity || (w.cssHooks.opacity = {
                get: function (e, t) {
                    return zt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                },
                set: function (e, t) {
                    var n = e.style,
                        r = e.currentStyle,
                        i = w.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                        s = r && r.filter || n.filter || "";
                    n.zoom = 1, (t >= 1 || "" === t) && "" === w.trim(s.replace(Ut, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = Ut.test(s) ? s.replace(Ut, i) : s + " " + i)
                }
            }), w(function () {
                w.support.reliableMarginRight || (w.cssHooks.marginRight = {
                    get: function (e, n) {
                        return n ? w.swap(e, {
                            display: "inline-block"
                        }, Rt, [e, "marginRight"]) : t
                    }
                }), !w.support.pixelPosition && w.fn.position && w.each(["top", "left"], function (e, n) {
                    w.cssHooks[n] = {
                        get: function (e, r) {
                            return r ? (r = Rt(e, n), Jt.test(r) ? w(e).position()[n] + "px" : r) : t
                        }
                    }
                })
            }), w.expr && w.expr.filters && (w.expr.filters.hidden = function (e) {
                return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !w.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || w.css(e, "display"))
            }, w.expr.filters.visible = function (e) {
                return !w.expr.filters.hidden(e)
            }), w.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function (e, t) {
                w.cssHooks[e + t] = {
                    expand: function (n) {
                        var r = 0,
                            i = {},
                            s = "string" == typeof n ? n.split(" ") : [n];
                        for (; 4 > r; r++) i[e + Zt[r] + t] = s[r] || s[r - 2] || s[0];
                        return i
                    }
                }, Vt.test(e) || (w.cssHooks[e + t].set = sn)
            });
            var ln = /%20/g,
                cn = /\[\]$/,
                hn = /\r?\n/g,
                pn = /^(?:submit|button|image|reset|file)$/i,
                dn = /^(?:input|select|textarea|keygen)/i;
            w.fn.extend({
                serialize: function () {
                    return w.param(this.serializeArray())
                },
                serializeArray: function () {
                    return this.map(function () {
                        var e = w.prop(this, "elements");
                        return e ? w.makeArray(e) : this
                    }).filter(function () {
                        var e = this.type;
                        return this.name && !w(this).is(":disabled") && dn.test(this.nodeName) && !pn.test(e) && (this.checked || !xt.test(e))
                    }).map(function (e, t) {
                        var n = w(this).val();
                        return null == n ? null : w.isArray(n) ? w.map(n, function (e) {
                            return {
                                name: t.name,
                                value: e.replace(hn, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(hn, "\r\n")
                        }
                    }).get()
                }
            }), w.param = function (e, n) {
                var r, i = [],
                    s = function (e, t) {
                        t = w.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                if (n === t && (n = w.ajaxSettings && w.ajaxSettings.traditional), w.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
                    s(this.name, this.value)
                });
                else
                    for (r in e) vn(r, e[r], n, s);
                return i.join("&").replace(ln, "+")
            }, w.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
                w.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), w.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                },
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function (e, t) {
                    return this.off(e, null, t)
                },
                delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            });
            var mn, gn, yn = w.now(),
                bn = /\?/,
                wn = /#.*$/,
                En = /([?&])_=[^&]*/,
                Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Tn = /^(?:GET|HEAD)$/,
                Nn = /^\/\//,
                Cn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
                kn = w.fn.load,
                Ln = {},
                An = {},
                On = "*/".concat("*");
            try {
                gn = s.href
            } catch (Mn) {
                gn = o.createElement("a"), gn.href = "", gn = gn.href
            }
            mn = Cn.exec(gn.toLowerCase()) || [], w.fn.load = function (e, n, r) {
                if ("string" != typeof e && kn) return kn.apply(this, arguments);
                var i, s, o, u = this,
                    a = e.indexOf(" ");
                return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), w.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), u.length > 0 && w.ajax({
                    url: e,
                    type: o,
                    dataType: "html",
                    data: n
                }).done(function (e) {
                    s = arguments, u.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
                }).complete(r && function (e, t) {
                    u.each(r, s || [e.responseText, t, e])
                }), this
            }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                w.fn[t] = function (e) {
                    return this.on(t, e)
                }
            }), w.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: gn,
                    type: "GET",
                    isLocal: xn.test(mn[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": On,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": w.parseJSON,
                        "text xml": w.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function (e, t) {
                    return t ? Pn(Pn(e, w.ajaxSettings), t) : Pn(w.ajaxSettings, e)
                },
                ajaxPrefilter: _n(Ln),
                ajaxTransport: _n(An),
                ajax: function (e, n) {
                    function N(e, n, r, i) {
                        var l, g, y, E, S, T = n;
                        2 !== b && (b = 2, u && clearTimeout(u), f = t, o = i || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, r && (E = Hn(c, x, r)), E = Bn(c, E, x, l), l ? (c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (w.lastModified[s] = S), S = x.getResponseHeader("etag"), S && (w.etag[s] = S)), 204 === e || "HEAD" === c.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = E.state, g = E.data, y = E.error, l = !y)) : (y = T, (e || !T) && (T = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, y]), x.statusCode(m), m = t, a && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : y]), v.fireWith(h, [x, T]), a && (p.trigger("ajaxComplete", [x, c]), --w.active || w.event.trigger("ajaxStop")))
                    }
                    "object" == typeof e && (n = e, e = t), n = n || {};
                    var r, i, s, o, u, a, f, l, c = w.ajaxSetup({}, n),
                        h = c.context || c,
                        p = c.context && (h.nodeType || h.jquery) ? w(h) : w.event,
                        d = w.Deferred(),
                        v = w.Callbacks("once memory"),
                        m = c.statusCode || {},
                        g = {},
                        y = {},
                        b = 0,
                        E = "canceled",
                        x = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (2 === b) {
                                    if (!l) {
                                        l = {};
                                        while (t = Sn.exec(o)) l[t[1].toLowerCase()] = t[2]
                                    }
                                    t = l[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function () {
                                return 2 === b ? o : null
                            },
                            setRequestHeader: function (e, t) {
                                var n = e.toLowerCase();
                                return b || (e = y[n] = y[n] || e, g[e] = t), this
                            },
                            overrideMimeType: function (e) {
                                return b || (c.mimeType = e), this
                            },
                            statusCode: function (e) {
                                var t;
                                if (e)
                                    if (2 > b)
                                        for (t in e) m[t] = [m[t], e[t]];
                                    else x.always(e[x.status]);
                                return this
                            },
                            abort: function (e) {
                                var t = e || E;
                                return f && f.abort(t), N(0, t), this
                            }
                        };
                    if (d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || gn) + "").replace(wn, "").replace(Nn, mn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = w.trim(c.dataType || "*").toLowerCase().match(S) || [""], null == c.crossDomain && (r = Cn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = w.param(c.data, c.traditional)), Dn(Ln, c, n, x), 2 === b) return x;
                    a = c.global, a && 0 === w.active++ && w.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Tn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (bn.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = En.test(s) ? s.replace(En, "$1_=" + yn++) : s + (bn.test(s) ? "&" : "?") + "_=" + yn++)), c.ifModified && (w.lastModified[s] && x.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s] && x.setRequestHeader("If-None-Match", w.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + On + "; q=0.01" : "") : c.accepts["*"]);
                    for (i in c.headers) x.setRequestHeader(i, c.headers[i]);
                    if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && 2 !== b) {
                        E = "abort";
                        for (i in {
                                success: 1,
                                error: 1,
                                complete: 1
                            }) x[i](c[i]);
                        if (f = Dn(An, c, n, x)) {
                            x.readyState = 1, a && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function () {
                                x.abort("timeout")
                            }, c.timeout));
                            try {
                                b = 1, f.send(g, N)
                            } catch (T) {
                                if (!(2 > b)) throw T;
                                N(-1, T)
                            }
                        } else N(-1, "No Transport");
                        return x
                    }
                    return x.abort()
                },
                getJSON: function (e, t, n) {
                    return w.get(e, t, n, "json")
                },
                getScript: function (e, n) {
                    return w.get(e, t, n, "script")
                }
            }), w.each(["get", "post"], function (e, n) {
                w[n] = function (e, r, i, s) {
                    return w.isFunction(r) && (s = s || i, i = r, r = t), w.ajax({
                        url: e,
                        type: n,
                        dataType: s,
                        data: r,
                        success: i
                    })
                }
            }), w.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function (e) {
                        return w.globalEval(e), e
                    }
                }
            }), w.ajaxPrefilter("script", function (e) {
                e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
            }), w.ajaxTransport("script", function (e) {
                if (e.crossDomain) {
                    var n, r = o.head || w("head")[0] || o.documentElement;
                    return {
                        send: function (t, i) {
                            n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                                (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                            }, r.insertBefore(n, r.firstChild)
                        },
                        abort: function () {
                            n && n.onload(t, !0)
                        }
                    }
                }
            });
            var jn = [],
                Fn = /(=)\?(?=&|$)|\?\?/;
            w.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = jn.pop() || w.expando + "_" + yn++;
                    return this[e] = !0, e
                }
            }), w.ajaxPrefilter("json jsonp", function (n, r, i) {
                var s, o, u, a = n.jsonp !== !1 && (Fn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(n.data) && "data");
                return a || "jsonp" === n.dataTypes[0] ? (s = n.jsonpCallback = w.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Fn, "$1" + s) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {
                    return u || w.error(s + " was not called"), u[0]
                }, n.dataTypes[0] = "json", o = e[s], e[s] = function () {
                    u = arguments
                }, i.always(function () {
                    e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, jn.push(s)), u && w.isFunction(o) && o(u[0]), u = o = t
                }), "script") : t
            });
            var In, qn, Rn = 0,
                Un = e.ActiveXObject && function () {
                    var e;
                    for (e in In) In[e](t, !0)
                };
            w.ajaxSettings.xhr = e.ActiveXObject ? function () {
                return !this.isLocal && zn() || Wn()
            } : zn, qn = w.ajaxSettings.xhr(), w.support.cors = !!qn && "withCredentials" in qn, qn = w.support.ajax = !!qn, qn && w.ajaxTransport(function (n) {
                if (!n.crossDomain || w.support.cors) {
                    var r;
                    return {
                        send: function (i, s) {
                            var o, u, a = n.xhr();
                            if (n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async), n.xhrFields)
                                for (u in n.xhrFields) a[u] = n.xhrFields[u];
                            n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (u in i) a.setRequestHeader(u, i[u])
                            } catch (f) {}
                            a.send(n.hasContent && n.data || null), r = function (e, i) {
                                var u, f, l, c;
                                try {
                                    if (r && (i || 4 === a.readyState))
                                        if (r = t, o && (a.onreadystatechange = w.noop, Un && delete In[o]), i) 4 !== a.readyState && a.abort();
                                        else {
                                            c = {}, u = a.status, f = a.getAllResponseHeaders(), "string" == typeof a.responseText && (c.text = a.responseText);
                                            try {
                                                l = a.statusText
                                            } catch (h) {
                                                l = ""
                                            }
                                            u || !n.isLocal || n.crossDomain ? 1223 === u && (u = 204) : u = c.text ? 200 : 404
                                        }
                                } catch (p) {
                                    i || s(-1, p)
                                }
                                c && s(u, l, c, f)
                            }, n.async ? 4 === a.readyState ? setTimeout(r) : (o = ++Rn, Un && (In || (In = {}, w(e).unload(Un)), In[o] = r), a.onreadystatechange = r) : r()
                        },
                        abort: function () {
                            r && r(t, !0)
                        }
                    }
                }
            });
            var Xn, Vn, $n = /^(?:toggle|show|hide)$/,
                Jn = RegExp("^(?:([+-])=|)(" + E + ")([a-z%]*)$", "i"),
                Kn = /queueHooks$/,
                Qn = [nr],
                Gn = {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t),
                            r = n.cur(),
                            i = Jn.exec(t),
                            s = i && i[3] || (w.cssNumber[e] ? "" : "px"),
                            o = (w.cssNumber[e] || "px" !== s && +r) && Jn.exec(w.css(n.elem, e)),
                            u = 1,
                            a = 20;
                        if (o && o[3] !== s) {
                            s = s || o[3], i = i || [], o = +r || 1;
                            do u = u || ".5", o /= u, w.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && 1 !== u && --a)
                        }
                        return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
                    }]
                };
            w.Animation = w.extend(er, {
                tweener: function (e, t) {
                    w.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    var n, r = 0,
                        i = e.length;
                    for (; i > r; r++) n = e[r], Gn[n] = Gn[n] || [], Gn[n].unshift(t)
                },
                prefilter: function (e, t) {
                    t ? Qn.unshift(e) : Qn.push(e)
                }
            }), w.Tween = rr, rr.prototype = {
                constructor: rr,
                init: function (e, t, n, r, i, s) {
                    this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (w.cssNumber[n] ? "" : "px")
                },
                cur: function () {
                    var e = rr.propHooks[this.prop];
                    return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
                },
                run: function (e) {
                    var t, n = rr.propHooks[this.prop];
                    return this.pos = t = this.options.duration ? w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
                }
            }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = w.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                    },
                    set: function (e) {
                        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[w.cssProps[e.prop]] || w.cssHooks[e.prop]) ? w.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, w.each(["toggle", "show", "hide"], function (e, t) {
                var n = w.fn[t];
                w.fn[t] = function (e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
                }
            }), w.fn.extend({
                fadeTo: function (e, t, n, r) {
                    return this.filter(nn).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function (e, t, n, r) {
                    var i = w.isEmptyObject(e),
                        s = w.speed(t, n, r),
                        o = function () {
                            var t = er(this, w.extend({}, e), s);
                            (i || w._data(this, "finish")) && t.stop(!0)
                        };
                    return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
                },
                stop: function (e, n, r) {
                    var i = function (e) {
                        var t = e.stop;
                        delete e.stop, t(r)
                    };
                    return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                        var t = !0,
                            n = null != e && e + "queueHooks",
                            s = w.timers,
                            o = w._data(this);
                        if (n) o[n] && o[n].stop && i(o[n]);
                        else
                            for (n in o) o[n] && o[n].stop && Kn.test(n) && i(o[n]);
                        for (n = s.length; n--;) s[n].elem !== this || null != e && s[n].queue !== e || (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                        (t || !r) && w.dequeue(this, e)
                    })
                },
                finish: function (e) {
                    return e !== !1 && (e = e || "fx"), this.each(function () {
                        var t, n = w._data(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            s = w.timers,
                            o = r ? r.length : 0;
                        for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                        for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), w.each({
                slideDown: ir("show"),
                slideUp: ir("hide"),
                slideToggle: ir("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (e, t) {
                w.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), w.speed = function (e, t, n) {
                var r = e && "object" == typeof e ? w.extend({}, e) : {
                    complete: n || !n && t || w.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !w.isFunction(t) && t
                };
                return r.duration = w.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in w.fx.speeds ? w.fx.speeds[r.duration] : w.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                    w.isFunction(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
                }, r
            }, w.easing = {
                linear: function (e) {
                    return e
                },
                swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }
            }, w.timers = [], w.fx = rr.prototype.init, w.fx.tick = function () {
                var e, n = w.timers,
                    r = 0;
                for (Xn = w.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
                n.length || w.fx.stop(), Xn = t
            }, w.fx.timer = function (e) {
                e() && w.timers.push(e) && w.fx.start()
            }, w.fx.interval = 13, w.fx.start = function () {
                Vn || (Vn = setInterval(w.fx.tick, w.fx.interval))
            }, w.fx.stop = function () {
                clearInterval(Vn), Vn = null
            }, w.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, w.fx.step = {}, w.expr && w.expr.filters && (w.expr.filters.animated = function (e) {
                return w.grep(w.timers, function (t) {
                    return e === t.elem
                }).length
            }), w.fn.offset = function (e) {
                if (arguments.length) return e === t ? this : this.each(function (t) {
                    w.offset.setOffset(this, e, t)
                });
                var n, r, s = {
                        top: 0,
                        left: 0
                    },
                    o = this[0],
                    u = o && o.ownerDocument;
                if (u) return n = u.documentElement, w.contains(n, o) ? (typeof o.getBoundingClientRect !== i && (s = o.getBoundingClientRect()), r = sr(u), {
                    top: s.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                    left: s.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
                }) : s
            }, w.offset = {
                setOffset: function (e, t, n) {
                    var r = w.css(e, "position");
                    "static" === r && (e.style.position = "relative");
                    var i = w(e),
                        s = i.offset(),
                        o = w.css(e, "top"),
                        u = w.css(e, "left"),
                        a = ("absolute" === r || "fixed" === r) && w.inArray("auto", [o, u]) > -1,
                        f = {},
                        l = {},
                        c, h;
                    a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), w.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + c), null != t.left && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
                }
            }, w.fn.extend({
                position: function () {
                    if (this[0]) {
                        var e, t, n = {
                                top: 0,
                                left: 0
                            },
                            r = this[0];
                        return "fixed" === w.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), w.nodeName(e[0], "html") || (n = e.offset()), n.top += w.css(e[0], "borderTopWidth", !0), n.left += w.css(e[0], "borderLeftWidth", !0)), {
                            top: t.top - n.top - w.css(r, "marginTop", !0),
                            left: t.left - n.left - w.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        var e = this.offsetParent || u;
                        while (e && !w.nodeName(e, "html") && "static" === w.css(e, "position")) e = e.offsetParent;
                        return e || u
                    })
                }
            }), w.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function (e, n) {
                var r = /Y/.test(n);
                w.fn[e] = function (i) {
                    return w.access(this, function (e, i, s) {
                        var o = sr(e);
                        return s === t ? o ? n in o ? o[n] : o.document.documentElement[i] : e[i] : (o ? o.scrollTo(r ? w(o).scrollLeft() : s, r ? s : w(o).scrollTop()) : e[i] = s, t)
                    }, e, i, arguments.length, null)
                }
            }), w.each({
                Height: "height",
                Width: "width"
            }, function (e, n) {
                w.each({
                    padding: "inner" + e,
                    content: n,
                    "": "outer" + e
                }, function (r, i) {
                    w.fn[i] = function (i, s) {
                        var o = arguments.length && (r || "boolean" != typeof i),
                            u = r || (i === !0 || s === !0 ? "margin" : "border");
                        return w.access(this, function (n, r, i) {
                            var s;
                            return w.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? w.css(n, r, u) : w.style(n, r, i, u)
                        }, n, o ? i : t, o, null)
                    }
                })
            }), w.fn.size = function () {
                return this.length
            }, w.fn.andSelf = w.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = w : (e.jQuery = e.$ = w, "function" == typeof define && define.amd && define("jquery", [], function () {
                return w
            }))
        }(window),
        function () {
            var e = this,
                t = e._,
                n = {},
                r = Array.prototype,
                i = Object.prototype,
                s = Function.prototype,
                o = r.push,
                u = r.slice,
                a = r.concat,
                f = i.toString,
                l = i.hasOwnProperty,
                c = r.forEach,
                h = r.map,
                p = r.reduce,
                d = r.reduceRight,
                v = r.filter,
                m = r.every,
                g = r.some,
                y = r.indexOf,
                b = r.lastIndexOf,
                w = Array.isArray,
                E = Object.keys,
                S = s.bind,
                x = function (e) {
                    return e instanceof x ? e : this instanceof x ? (this._wrapped = e, void 0) : new x(e)
                };
            "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.4.4";
            var T = x.each = x.forEach = function (e, t, r) {
                if (null != e)
                    if (c && e.forEach === c) e.forEach(t, r);
                    else if (e.length === +e.length) {
                    for (var i = 0, s = e.length; s > i; i++)
                        if (t.call(r, e[i], i, e) === n) return
                } else
                    for (var o in e)
                        if (x.has(e, o) && t.call(r, e[o], o, e) === n) return
            };
            x.map = x.collect = function (e, t, n) {
                var r = [];
                return null == e ? r : h && e.map === h ? e.map(t, n) : (T(e, function (e, i, s) {
                    r[r.length] = t.call(n, e, i, s)
                }), r)
            };
            var N = "Reduce of empty array with no initial value";
            x.reduce = x.foldl = x.inject = function (e, t, n, r) {
                var i = arguments.length > 2;
                if (null == e && (e = []), p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
                if (T(e, function (e, s, o) {
                        i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
                    }), !i) throw new TypeError(N);
                return n
            }, x.reduceRight = x.foldr = function (e, t, n, r) {
                var i = arguments.length > 2;
                if (null == e && (e = []), d && e.reduceRight === d) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
                var s = e.length;
                if (s !== +s) {
                    var o = x.keys(e);
                    s = o.length
                }
                if (T(e, function (u, a, f) {
                        a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)
                    }), !i) throw new TypeError(N);
                return n
            }, x.find = x.detect = function (e, t, n) {
                var r;
                return C(e, function (e, i, s) {
                    return t.call(n, e, i, s) ? (r = e, !0) : void 0
                }), r
            }, x.filter = x.select = function (e, t, n) {
                var r = [];
                return null == e ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function (e, i, s) {
                    t.call(n, e, i, s) && (r[r.length] = e)
                }), r)
            }, x.reject = function (e, t, n) {
                return x.filter(e, function (e, r, i) {
                    return !t.call(n, e, r, i)
                }, n)
            }, x.every = x.all = function (e, t, r) {
                t || (t = x.identity);
                var i = !0;
                return null == e ? i : m && e.every === m ? e.every(t, r) : (T(e, function (e, s, o) {
                    return (i = i && t.call(r, e, s, o)) ? void 0 : n
                }), !!i)
            };
            var C = x.some = x.any = function (e, t, r) {
                t || (t = x.identity);
                var i = !1;
                return null == e ? i : g && e.some === g ? e.some(t, r) : (T(e, function (e, s, o) {
                    return i || (i = t.call(r, e, s, o)) ? n : void 0
                }), !!i)
            };
            x.contains = x.include = function (e, t) {
                return null == e ? !1 : y && e.indexOf === y ? e.indexOf(t) != -1 : C(e, function (e) {
                    return e === t
                })
            }, x.invoke = function (e, t) {
                var n = u.call(arguments, 2),
                    r = x.isFunction(t);
                return x.map(e, function (e) {
                    return (r ? t : e[t]).apply(e, n)
                })
            }, x.pluck = function (e, t) {
                return x.map(e, function (e) {
                    return e[t]
                })
            }, x.where = function (e, t, n) {
                return x.isEmpty(t) ? n ? null : [] : x[n ? "find" : "filter"](e, function (e) {
                    for (var n in t)
                        if (t[n] !== e[n]) return !1;
                    return !0
                })
            }, x.findWhere = function (e, t) {
                return x.where(e, t, !0)
            }, x.max = function (e, t, n) {
                if (!t && x.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.max.apply(Math, e);
                if (!t && x.isEmpty(e)) return -1 / 0;
                var r = {
                    computed: -1 / 0,
                    value: -1 / 0
                };
                return T(e, function (e, i, s) {
                    var o = t ? t.call(n, e, i, s) : e;
                    o >= r.computed && (r = {
                        value: e,
                        computed: o
                    })
                }), r.value
            }, x.min = function (e, t, n) {
                if (!t && x.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.min.apply(Math, e);
                if (!t && x.isEmpty(e)) return 1 / 0;
                var r = {
                    computed: 1 / 0,
                    value: 1 / 0
                };
                return T(e, function (e, i, s) {
                    var o = t ? t.call(n, e, i, s) : e;
                    r.computed > o && (r = {
                        value: e,
                        computed: o
                    })
                }), r.value
            }, x.shuffle = function (e) {
                var t, n = 0,
                    r = [];
                return T(e, function (e) {
                    t = x.random(n++), r[n - 1] = r[t], r[t] = e
                }), r
            };
            var k = function (e) {
                return x.isFunction(e) ? e : function (t) {
                    return t[e]
                }
            };
            x.sortBy = function (e, t, n) {
                var r = k(t);
                return x.pluck(x.map(e, function (e, t, i) {
                    return {
                        value: e,
                        index: t,
                        criteria: r.call(n, e, t, i)
                    }
                }).sort(function (e, t) {
                    var n = e.criteria,
                        r = t.criteria;
                    if (n !== r) {
                        if (n > r || n === void 0) return 1;
                        if (r > n || r === void 0) return -1
                    }
                    return e.index < t.index ? -1 : 1
                }), "value")
            };
            var L = function (e, t, n, r) {
                var i = {},
                    s = k(t || x.identity);
                return T(e, function (t, o) {
                    var u = s.call(n, t, o, e);
                    r(i, u, t)
                }), i
            };
            x.groupBy = function (e, t, n) {
                return L(e, t, n, function (e, t, n) {
                    (x.has(e, t) ? e[t] : e[t] = []).push(n)
                })
            }, x.countBy = function (e, t, n) {
                return L(e, t, n, function (e, t) {
                    x.has(e, t) || (e[t] = 0), e[t] ++
                })
            }, x.sortedIndex = function (e, t, n, r) {
                n = null == n ? x.identity : k(n);
                for (var i = n.call(r, t), s = 0, o = e.length; o > s;) {
                    var u = s + o >>> 1;
                    i > n.call(r, e[u]) ? s = u + 1 : o = u
                }
                return s
            }, x.toArray = function (e) {
                return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []
            }, x.size = function (e) {
                return null == e ? 0 : e.length === +e.length ? e.length : x.keys(e).length
            }, x.first = x.head = x.take = function (e, t, n) {
                return null == e ? void 0 : null == t || n ? e[0] : u.call(e, 0, t)
            }, x.initial = function (e, t, n) {
                return u.call(e, 0, e.length - (null == t || n ? 1 : t))
            }, x.last = function (e, t, n) {
                return null == e ? void 0 : null == t || n ? e[e.length - 1] : u.call(e, Math.max(e.length - t, 0))
            }, x.rest = x.tail = x.drop = function (e, t, n) {
                return u.call(e, null == t || n ? 1 : t)
            }, x.compact = function (e) {
                return x.filter(e, x.identity)
            };
            var A = function (e, t, n) {
                return T(e, function (e) {
                    x.isArray(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
                }), n
            };
            x.flatten = function (e, t) {
                return A(e, t, [])
            }, x.without = function (e) {
                return x.difference(e, u.call(arguments, 1))
            }, x.uniq = x.unique = function (e, t, n, r) {
                x.isFunction(t) && (r = n, n = t, t = !1);
                var i = n ? x.map(e, n, r) : e,
                    s = [],
                    o = [];
                return T(i, function (n, r) {
                    (t ? r && o[o.length - 1] === n : x.contains(o, n)) || (o.push(n), s.push(e[r]))
                }), s
            }, x.union = function () {
                return x.uniq(a.apply(r, arguments))
            }, x.intersection = function (e) {
                var t = u.call(arguments, 1);
                return x.filter(x.uniq(e), function (e) {
                    return x.every(t, function (t) {
                        return x.indexOf(t, e) >= 0
                    })
                })
            }, x.difference = function (e) {
                var t = a.apply(r, u.call(arguments, 1));
                return x.filter(e, function (e) {
                    return !x.contains(t, e)
                })
            }, x.zip = function () {
                for (var e = u.call(arguments), t = x.max(x.pluck(e, "length")), n = Array(t), r = 0; t > r; r++) n[r] = x.pluck(e, "" + r);
                return n
            }, x.object = function (e, t) {
                if (null == e) return {};
                for (var n = {}, r = 0, i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
                return n
            }, x.indexOf = function (e, t, n) {
                if (null == e) return -1;
                var r = 0,
                    i = e.length;
                if (n) {
                    if ("number" != typeof n) return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
                    r = 0 > n ? Math.max(0, i + n) : n
                }
                if (y && e.indexOf === y) return e.indexOf(t, n);
                for (; i > r; r++)
                    if (e[r] === t) return r;
                return -1
            }, x.lastIndexOf = function (e, t, n) {
                if (null == e) return -1;
                var r = null != n;
                if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
                for (var i = r ? n : e.length; i--;)
                    if (e[i] === t) return i;
                return -1
            }, x.range = function (e, t, n) {
                1 >= arguments.length && (t = e || 0, e = 0), n = arguments[2] || 1;
                for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, s = Array(r); r > i;) s[i++] = e, e += n;
                return s
            }, x.bind = function (e, t) {
                if (e.bind === S && S) return S.apply(e, u.call(arguments, 1));
                var n = u.call(arguments, 2);
                return function () {
                    return e.apply(t, n.concat(u.call(arguments)))
                }
            }, x.partial = function (e) {
                var t = u.call(arguments, 1);
                return function () {
                    return e.apply(this, t.concat(u.call(arguments)))
                }
            }, x.bindAll = function (e) {
                var t = u.call(arguments, 1);
                return 0 === t.length && (t = x.functions(e)), T(t, function (t) {
                    e[t] = x.bind(e[t], e)
                }), e
            }, x.memoize = function (e, t) {
                var n = {};
                return t || (t = x.identity),
                    function () {
                        var r = t.apply(this, arguments);
                        return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
                    }
            }, x.delay = function (e, t) {
                var n = u.call(arguments, 2);
                return setTimeout(function () {
                    return e.apply(null, n)
                }, t)
            }, x.defer = function (e) {
                return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))
            }, x.throttle = function (e, t) {
                var n, r, i, s, o = 0,
                    u = function () {
                        o = new Date, i = null, s = e.apply(n, r)
                    };
                return function () {
                    var a = new Date,
                        f = t - (a - o);
                    return n = this, r = arguments, 0 >= f ? (clearTimeout(i), i = null, o = a, s = e.apply(n, r)) : i || (i = setTimeout(u, f)), s
                }
            }, x.debounce = function (e, t, n) {
                var r, i;
                return function () {
                    var s = this,
                        o = arguments,
                        u = function () {
                            r = null, n || (i = e.apply(s, o))
                        },
                        a = n && !r;
                    return clearTimeout(r), r = setTimeout(u, t), a && (i = e.apply(s, o)), i
                }
            }, x.once = function (e) {
                var t, n = !1;
                return function () {
                    return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
                }
            }, x.wrap = function (e, t) {
                return function () {
                    var n = [e];
                    return o.apply(n, arguments), t.apply(this, n)
                }
            }, x.compose = function () {
                var e = arguments;
                return function () {
                    for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                    return t[0]
                }
            }, x.after = function (e, t) {
                return 0 >= e ? t() : function () {
                    return 1 > --e ? t.apply(this, arguments) : void 0
                }
            }, x.keys = E || function (e) {
                if (e !== Object(e)) throw new TypeError("Invalid object");
                var t = [];
                for (var n in e) x.has(e, n) && (t[t.length] = n);
                return t
            }, x.values = function (e) {
                var t = [];
                for (var n in e) x.has(e, n) && t.push(e[n]);
                return t
            }, x.pairs = function (e) {
                var t = [];
                for (var n in e) x.has(e, n) && t.push([n, e[n]]);
                return t
            }, x.invert = function (e) {
                var t = {};
                for (var n in e) x.has(e, n) && (t[e[n]] = n);
                return t
            }, x.functions = x.methods = function (e) {
                var t = [];
                for (var n in e) x.isFunction(e[n]) && t.push(n);
                return t.sort()
            }, x.extend = function (e) {
                return T(u.call(arguments, 1), function (t) {
                    if (t)
                        for (var n in t) e[n] = t[n]
                }), e
            }, x.pick = function (e) {
                var t = {},
                    n = a.apply(r, u.call(arguments, 1));
                return T(n, function (n) {
                    n in e && (t[n] = e[n])
                }), t
            }, x.omit = function (e) {
                var t = {},
                    n = a.apply(r, u.call(arguments, 1));
                for (var i in e) x.contains(n, i) || (t[i] = e[i]);
                return t
            }, x.defaults = function (e) {
                return T(u.call(arguments, 1), function (t) {
                    if (t)
                        for (var n in t) null == e[n] && (e[n] = t[n])
                }), e
            }, x.clone = function (e) {
                return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
            }, x.tap = function (e, t) {
                return t(e), e
            };
            var O = function (e, t, n, r) {
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                if (null == e || null == t) return e === t;
                e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
                var i = f.call(e);
                if (i != f.call(t)) return !1;
                switch (i) {
                case "[object String]":
                    return e == t + "";
                case "[object Number]":
                    return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e == +t;
                case "[object RegExp]":
                    return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
                }
                if ("object" != typeof e || "object" != typeof t) return !1;
                for (var s = n.length; s--;)
                    if (n[s] == e) return r[s] == t;
                n.push(e), r.push(t);
                var o = 0,
                    u = !0;
                if ("[object Array]" == i) {
                    if (o = e.length, u = o == t.length)
                        for (; o-- && (u = O(e[o], t[o], n, r)););
                } else {
                    var a = e.constructor,
                        l = t.constructor;
                    if (a !== l && !(x.isFunction(a) && a instanceof a && x.isFunction(l) && l instanceof l)) return !1;
                    for (var c in e)
                        if (x.has(e, c) && (o++, !(u = x.has(t, c) && O(e[c], t[c], n, r)))) break;
                    if (u) {
                        for (c in t)
                            if (x.has(t, c) && !(o--)) break;
                        u = !o
                    }
                }
                return n.pop(), r.pop(), u
            };
            x.isEqual = function (e, t) {
                return O(e, t, [], [])
            }, x.isEmpty = function (e) {
                if (null == e) return !0;
                if (x.isArray(e) || x.isString(e)) return 0 === e.length;
                for (var t in e)
                    if (x.has(e, t)) return !1;
                return !0
            }, x.isElement = function (e) {
                return !!e && 1 === e.nodeType
            }, x.isArray = w || function (e) {
                return "[object Array]" == f.call(e)
            }, x.isObject = function (e) {
                return e === Object(e)
            }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
                x["is" + e] = function (t) {
                    return f.call(t) == "[object " + e + "]"
                }
            }), x.isArguments(arguments) || (x.isArguments = function (e) {
                return !!e && !!x.has(e, "callee")
            }), "function" != typeof /./ && (x.isFunction = function (e) {
                return "function" == typeof e
            }), x.isFinite = function (e) {
                return isFinite(e) && !isNaN(parseFloat(e))
            }, x.isNaN = function (e) {
                return x.isNumber(e) && e != +e
            }, x.isBoolean = function (e) {
                return e === !0 || e === !1 || "[object Boolean]" == f.call(e)
            }, x.isNull = function (e) {
                return null === e
            }, x.isUndefined = function (e) {
                return e === void 0
            }, x.has = function (e, t) {
                return l.call(e, t)
            }, x.noConflict = function () {
                return e._ = t, this
            }, x.identity = function (e) {
                return e
            }, x.times = function (e, t, n) {
                for (var r = Array(e), i = 0; e > i; i++) r[i] = t.call(n, i);
                return r
            }, x.random = function (e, t) {
                return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
            };
            var M = {
                escape: {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "/": "&#x2F;"
                }
            };
            M.unescape = x.invert(M.escape);
            var _ = {
                escape: RegExp("[" + x.keys(M.escape).join("") + "]", "g"),
                unescape: RegExp("(" + x.keys(M.unescape).join("|") + ")", "g")
            };
            x.each(["escape", "unescape"], function (e) {
                x[e] = function (t) {
                    return null == t ? "" : ("" + t).replace(_[e], function (t) {
                        return M[e][t]
                    })
                }
            }), x.result = function (e, t) {
                if (null == e) return null;
                var n = e[t];
                return x.isFunction(n) ? n.call(e) : n
            }, x.mixin = function (e) {
                T(x.functions(e), function (t) {
                    var n = x[t] = e[t];
                    x.prototype[t] = function () {
                        var e = [this._wrapped];
                        return o.apply(e, arguments), j.call(this, n.apply(x, e))
                    }
                })
            };
            var D = 0;
            x.uniqueId = function (e) {
                var t = ++D + "";
                return e ? e + t : t
            }, x.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var P = /(.)^/,
                H = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "	": "t",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
            x.template = function (e, t, n) {
                var r;
                n = x.defaults({}, n, x.templateSettings);
                var i = RegExp([(n.escape || P).source, (n.interpolate || P).source, (n.evaluate || P).source].join("|") + "|$", "g"),
                    s = 0,
                    o = "__p+='";
                e.replace(i, function (t, n, r, i, u) {
                    return o += e.slice(s, u).replace(B, function (e) {
                        return "\\" + H[e]
                    }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), s = u + t.length, t
                }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                try {
                    r = Function(n.variable || "obj", "_", o)
                } catch (u) {
                    throw u.source = o, u
                }
                if (t) return r(t, x);
                var a = function (e) {
                    return r.call(this, e, x)
                };
                return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a
            }, x.chain = function (e) {
                return x(e).chain()
            };
            var j = function (e) {
                return this._chain ? x(e).chain() : e
            };
            x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
                var t = r[e];
                x.prototype[e] = function () {
                    var n = this._wrapped;
                    return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], j.call(this, n)
                }
            }), T(["concat", "join", "slice"], function (e) {
                var t = r[e];
                x.prototype[e] = function () {
                    return j.call(this, t.apply(this._wrapped, arguments))
                }
            }), x.extend(x.prototype, {
                chain: function () {
                    return this._chain = !0, this
                },
                value: function () {
                    return this._wrapped
                }
            })
        }.call(this), define("underscore", function (e) {
            return function () {
                var t, n;
                return t || e._
            }
        }(this)),
        function () {
            var e = {};
            (function (e) {
                e.VERSION = "1.0.rc.1", e.helpers = {}, e.partials = {}, e.registerHelper = function (e, t, n) {
                    n && (t.not = n), this.helpers[e] = t
                }, e.registerPartial = function (e, t) {
                    this.partials[e] = t
                }, e.registerHelper("helperMissing", function (e) {
                    if (arguments.length === 2) return undefined;
                    throw new Error("Could not find property '" + e + "'")
                });
                var t = Object.prototype.toString,
                    n = "[object Function]";
                e.registerHelper("blockHelperMissing", function (r, i) {
                    var s = i.inverse || function () {},
                        o = i.fn,
                        u = "",
                        a = t.call(r);
                    return a === n && (r = r.call(this)), r === !0 ? o(this) : r === !1 || r == null ? s(this) : a === "[object Array]" ? r.length > 0 ? e.helpers.each(r, i) : s(this) : o(r)
                }), e.K = function () {}, e.createFrame = Object.create || function (t) {
                    e.K.prototype = t;
                    var n = new e.K;
                    return e.K.prototype = null, n
                }, e.registerHelper("each", function (t, n) {
                    var r = n.fn,
                        i = n.inverse,
                        s = "",
                        o;
                    n.data && (o = e.createFrame(n.data));
                    if (t && t.length > 0)
                        for (var u = 0, a = t.length; u < a; u++) o && (o.index = u), s += r(t[u], {
                            data: o
                        });
                    else s = i(this);
                    return s
                }), e.registerHelper("if", function (r, i) {
                    var s = t.call(r);
                    return s === n && (r = r.call(this)), !r || e.Utils.isEmpty(r) ? i.inverse(this) : i.fn(this)
                }), e.registerHelper("unless", function (t, n) {
                    var r = n.fn,
                        i = n.inverse;
                    return n.fn = i, n.inverse = r, e.helpers["if"].call(this, t, n)
                }), e.registerHelper("with", function (e, t) {
                    return t.fn(e)
                }), e.registerHelper("log", function (t) {
                    e.log(t)
                })
            })(e);
            var t = function () {
                function n() {
                    this.yy = {}
                }
                var e = {
                        trace: function () {},
                        yy: {},
                        symbols_: {
                            error: 2,
                            root: 3,
                            program: 4,
                            EOF: 5,
                            statements: 6,
                            simpleInverse: 7,
                            statement: 8,
                            openInverse: 9,
                            closeBlock: 10,
                            openBlock: 11,
                            mustache: 12,
                            partial: 13,
                            CONTENT: 14,
                            COMMENT: 15,
                            OPEN_BLOCK: 16,
                            inMustache: 17,
                            CLOSE: 18,
                            OPEN_INVERSE: 19,
                            OPEN_ENDBLOCK: 20,
                            path: 21,
                            OPEN: 22,
                            OPEN_UNESCAPED: 23,
                            OPEN_PARTIAL: 24,
                            params: 25,
                            hash: 26,
                            DATA: 27,
                            param: 28,
                            STRING: 29,
                            INTEGER: 30,
                            BOOLEAN: 31,
                            hashSegments: 32,
                            hashSegment: 33,
                            ID: 34,
                            EQUALS: 35,
                            pathSegments: 36,
                            SEP: 37,
                            $accept: 0,
                            $end: 1
                        },
                        terminals_: {
                            2: "error",
                            5: "EOF",
                            14: "CONTENT",
                            15: "COMMENT",
                            16: "OPEN_BLOCK",
                            18: "CLOSE",
                            19: "OPEN_INVERSE",
                            20: "OPEN_ENDBLOCK",
                            22: "OPEN",
                            23: "OPEN_UNESCAPED",
                            24: "OPEN_PARTIAL",
                            27: "DATA",
                            29: "STRING",
                            30: "INTEGER",
                            31: "BOOLEAN",
                            34: "ID",
                            35: "EQUALS",
                            37: "SEP"
                        },
                        productions_: [0, [3, 2], [4, 3], [4, 1], [4, 0], [6, 1], [6, 2], [8, 3], [8, 3], [8, 1], [8, 1], [8, 1], [8, 1], [11, 3], [9, 3], [10, 3], [12, 3], [12, 3], [13, 3], [13, 4], [7, 2], [17, 3], [17, 2], [17, 2], [17, 1], [17, 1], [25, 2], [25, 1], [28, 1], [28, 1], [28, 1], [28, 1], [28, 1], [26, 1], [32, 2], [32, 1], [33, 3], [33, 3], [33, 3], [33, 3], [33, 3], [21, 1], [36, 3], [36, 1]],
                        performAction: function (t, n, r, i, s, o, u) {
                            var a = o.length - 1;
                            switch (s) {
                            case 1:
                                return o[a - 1];
                            case 2:
                                this.$ = new i.ProgramNode(o[a - 2], o[a]);
                                break;
                            case 3:
                                this.$ = new i.ProgramNode(o[a]);
                                break;
                            case 4:
                                this.$ = new i.ProgramNode([]);
                                break;
                            case 5:
                                this.$ = [o[a]];
                                break;
                            case 6:
                                o[a - 1].push(o[a]), this.$ = o[a - 1];
                                break;
                            case 7:
                                this.$ = new i.BlockNode(o[a - 2], o[a - 1].inverse, o[a - 1], o[a]);
                                break;
                            case 8:
                                this.$ = new i.BlockNode(o[a - 2], o[a - 1], o[a - 1].inverse, o[a]);
                                break;
                            case 9:
                                this.$ = o[a];
                                break;
                            case 10:
                                this.$ = o[a];
                                break;
                            case 11:
                                this.$ = new i.ContentNode(o[a]);
                                break;
                            case 12:
                                this.$ = new i.CommentNode(o[a]);
                                break;
                            case 13:
                                this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
                                break;
                            case 14:
                                this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
                                break;
                            case 15:
                                this.$ = o[a - 1];
                                break;
                            case 16:
                                this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
                                break;
                            case 17:
                                this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1], !0);
                                break;
                            case 18:
                                this.$ = new i.PartialNode(o[a - 1]);
                                break;
                            case 19:
                                this.$ = new i.PartialNode(o[a - 2], o[a - 1]);
                                break;
                            case 20:
                                break;
                            case 21:
                                this.$ = [[o[a - 2]].concat(o[a - 1]), o[a]];
                                break;
                            case 22:
                                this.$ = [[o[a - 1]].concat(o[a]), null];
                                break;
                            case 23:
                                this.$ = [[o[a - 1]], o[a]];
                                break;
                            case 24:
                                this.$ = [[o[a]], null];
                                break;
                            case 25:
                                this.$ = [[new i.DataNode(o[a])], null];
                                break;
                            case 26:
                                o[a - 1].push(o[a]), this.$ = o[a - 1];
                                break;
                            case 27:
                                this.$ = [o[a]];
                                break;
                            case 28:
                                this.$ = o[a];
                                break;
                            case 29:
                                this.$ = new i.StringNode(o[a]);
                                break;
                            case 30:
                                this.$ = new i.IntegerNode(o[a]);
                                break;
                            case 31:
                                this.$ = new i.BooleanNode(o[a]);
                                break;
                            case 32:
                                this.$ = new i.DataNode(o[a]);
                                break;
                            case 33:
                                this.$ = new i.HashNode(o[a]);
                                break;
                            case 34:
                                o[a - 1].push(o[a]), this.$ = o[a - 1];
                                break;
                            case 35:
                                this.$ = [o[a]];
                                break;
                            case 36:
                                this.$ = [o[a - 2], o[a]];
                                break;
                            case 37:
                                this.$ = [o[a - 2], new i.StringNode(o[a])];
                                break;
                            case 38:
                                this.$ = [o[a - 2], new i.IntegerNode(o[a])];
                                break;
                            case 39:
                                this.$ = [o[a - 2], new i.BooleanNode(o[a])];
                                break;
                            case 40:
                                this.$ = [o[a - 2], new i.DataNode(o[a])];
                                break;
                            case 41:
                                this.$ = new i.IdNode(o[a]);
                                break;
                            case 42:
                                o[a - 2].push(o[a]), this.$ = o[a - 2];
                                break;
                            case 43:
                                this.$ = [o[a]]
                            }
                        },
                        table: [{
                            3: 1,
                            4: 2,
                            5: [2, 4],
                            6: 3,
                            8: 4,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            22: [1, 13],
                            23: [1, 14],
                            24: [1, 15]
                        }, {
                            1: [3]
                        }, {
                            5: [1, 16]
                        }, {
                            5: [2, 3],
                            7: 17,
                            8: 18,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 19],
                            20: [2, 3],
                            22: [1, 13],
                            23: [1, 14],
                            24: [1, 15]
                        }, {
                            5: [2, 5],
                            14: [2, 5],
                            15: [2, 5],
                            16: [2, 5],
                            19: [2, 5],
                            20: [2, 5],
                            22: [2, 5],
                            23: [2, 5],
                            24: [2, 5]
                        }, {
                            4: 20,
                            6: 3,
                            8: 4,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            20: [2, 4],
                            22: [1, 13],
                            23: [1, 14],
                            24: [1, 15]
                        }, {
                            4: 21,
                            6: 3,
                            8: 4,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            20: [2, 4],
                            22: [1, 13],
                            23: [1, 14],
                            24: [1, 15]
                        }, {
                            5: [2, 9],
                            14: [2, 9],
                            15: [2, 9],
                            16: [2, 9],
                            19: [2, 9],
                            20: [2, 9],
                            22: [2, 9],
                            23: [2, 9],
                            24: [2, 9]
                        }, {
                            5: [2, 10],
                            14: [2, 10],
                            15: [2, 10],
                            16: [2, 10],
                            19: [2, 10],
                            20: [2, 10],
                            22: [2, 10],
                            23: [2, 10],
                            24: [2, 10]
                        }, {
                            5: [2, 11],
                            14: [2, 11],
                            15: [2, 11],
                            16: [2, 11],
                            19: [2, 11],
                            20: [2, 11],
                            22: [2, 11],
                            23: [2, 11],
                            24: [2, 11]
                        }, {
                            5: [2, 12],
                            14: [2, 12],
                            15: [2, 12],
                            16: [2, 12],
                            19: [2, 12],
                            20: [2, 12],
                            22: [2, 12],
                            23: [2, 12],
                            24: [2, 12]
                        }, {
                            17: 22,
                            21: 23,
                            27: [1, 24],
                            34: [1, 26],
                            36: 25
                        }, {
                            17: 27,
                            21: 23,
                            27: [1, 24],
                            34: [1, 26],
                            36: 25
                        }, {
                            17: 28,
                            21: 23,
                            27: [1, 24],
                            34: [1, 26],
                            36: 25
                        }, {
                            17: 29,
                            21: 23,
                            27: [1, 24],
                            34: [1, 26],
                            36: 25
                        }, {
                            21: 30,
                            34: [1, 26],
                            36: 25
                        }, {
                            1: [2, 1]
                        }, {
                            6: 31,
                            8: 4,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            22: [1, 13],
                            23: [1, 14],
                            24: [1, 15]
                        }, {
                            5: [2, 6],
                            14: [2, 6],
                            15: [2, 6],
                            16: [2, 6],
                            19: [2, 6],
                            20: [2, 6],
                            22: [2, 6],
                            23: [2, 6],
                            24: [2, 6]
                        }, {
                            17: 22,
                            18: [1, 32],
                            21: 23,
                            27: [1, 24],
                            34: [1, 26],
                            36: 25
                        }, {
                            10: 33,
                            20: [1, 34]
                        }, {
                            10: 35,
                            20: [1, 34]
                        }, {
                            18: [1, 36]
                        }, {
                            18: [2, 24],
                            21: 41,
                            25: 37,
                            26: 38,
                            27: [1, 45],
                            28: 39,
                            29: [1, 42],
                            30: [1, 43],
                            31: [1, 44],
                            32: 40,
                            33: 46,
                            34: [1, 47],
                            36: 25
                        }, {
                            18: [2, 25]
                        }, {
                            18: [2, 41],
                            27: [2, 41],
                            29: [2, 41],
                            30: [2, 41],
                            31: [2, 41],
                            34: [2, 41],
                            37: [1, 48]
                        }, {
                            18: [2, 43],
                            27: [2, 43],
                            29: [2, 43],
                            30: [2, 43],
                            31: [2, 43],
                            34: [2, 43],
                            37: [2, 43]
                        }, {
                            18: [1, 49]
                        }, {
                            18: [1, 50]
                        }, {
                            18: [1, 51]
                        }, {
                            18: [1, 52],
                            21: 53,
                            34: [1, 26],
                            36: 25
                        }, {
                            5: [2, 2],
                            8: 18,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            20: [2, 2],
                            22: [1, 13],
                            23: [1, 14],
                            24: [1, 15]
                        }, {
                            14: [2, 20],
                            15: [2, 20],
                            16: [2, 20],
                            19: [2, 20],
                            22: [2, 20],
                            23: [2, 20],
                            24: [2, 20]
                        }, {
                            5: [2, 7],
                            14: [2, 7],
                            15: [2, 7],
                            16: [2, 7],
                            19: [2, 7],
                            20: [2, 7],
                            22: [2, 7],
                            23: [2, 7],
                            24: [2, 7]
                        }, {
                            21: 54,
                            34: [1, 26],
                            36: 25
                        }, {
                            5: [2, 8],
                            14: [2, 8],
                            15: [2, 8],
                            16: [2, 8],
                            19: [2, 8],
                            20: [2, 8],
                            22: [2, 8],
                            23: [2, 8],
                            24: [2, 8]
                        }, {
                            14: [2, 14],
                            15: [2, 14],
                            16: [2, 14],
                            19: [2, 14],
                            20: [2, 14],
                            22: [2, 14],
                            23: [2, 14],
                            24: [2, 14]
                        }, {
                            18: [2, 22],
                            21: 41,
                            26: 55,
                            27: [1, 45],
                            28: 56,
                            29: [1, 42],
                            30: [1, 43],
                            31: [1, 44],
                            32: 40,
                            33: 46,
                            34: [1, 47],
                            36: 25
                        }, {
                            18: [2, 23]
                        }, {
                            18: [2, 27],
                            27: [2, 27],
                            29: [2, 27],
                            30: [2, 27],
                            31: [2, 27],
                            34: [2, 27]
                        }, {
                            18: [2, 33],
                            33: 57,
                            34: [1, 58]
                        }, {
                            18: [2, 28],
                            27: [2, 28],
                            29: [2, 28],
                            30: [2, 28],
                            31: [2, 28],
                            34: [2, 28]
                        }, {
                            18: [2, 29],
                            27: [2, 29],
                            29: [2, 29],
                            30: [2, 29],
                            31: [2, 29],
                            34: [2, 29]
                        }, {
                            18: [2, 30],
                            27: [2, 30],
                            29: [2, 30],
                            30: [2, 30],
                            31: [2, 30],
                            34: [2, 30]
                        }, {
                            18: [2, 31],
                            27: [2, 31],
                            29: [2, 31],
                            30: [2, 31],
                            31: [2, 31],
                            34: [2, 31]
                        }, {
                            18: [2, 32],
                            27: [2, 32],
                            29: [2, 32],
                            30: [2, 32],
                            31: [2, 32],
                            34: [2, 32]
                        }, {
                            18: [2, 35],
                            34: [2, 35]
                        }, {
                            18: [2, 43],
                            27: [2, 43],
                            29: [2, 43],
                            30: [2, 43],
                            31: [2, 43],
                            34: [2, 43],
                            35: [1, 59],
                            37: [2, 43]
                        }, {
                            34: [1, 60]
                        }, {
                            14: [2, 13],
                            15: [2, 13],
                            16: [2, 13],
                            19: [2, 13],
                            20: [2, 13],
                            22: [2, 13],
                            23: [2, 13],
                            24: [2, 13]
                        }, {
                            5: [2, 16],
                            14: [2, 16],
                            15: [2, 16],
                            16: [2, 16],
                            19: [2, 16],
                            20: [2, 16],
                            22: [2, 16],
                            23: [2, 16],
                            24: [2, 16]
                        }, {
                            5: [2, 17],
                            14: [2, 17],
                            15: [2, 17],
                            16: [2, 17],
                            19: [2, 17],
                            20: [2, 17],
                            22: [2, 17],
                            23: [2, 17],
                            24: [2, 17]
                        }, {
                            5: [2, 18],
                            14: [2, 18],
                            15: [2, 18],
                            16: [2, 18],
                            19: [2, 18],
                            20: [2, 18],
                            22: [2, 18],
                            23: [2, 18],
                            24: [2, 18]
                        }, {
                            18: [1, 61]
                        }, {
                            18: [1, 62]
                        }, {
                            18: [2, 21]
                        }, {
                            18: [2, 26],
                            27: [2, 26],
                            29: [2, 26],
                            30: [2, 26],
                            31: [2, 26],
                            34: [2, 26]
                        }, {
                            18: [2, 34],
                            34: [2, 34]
                        }, {
                            35: [1, 59]
                        }, {
                            21: 63,
                            27: [1, 67],
                            29: [1, 64],
                            30: [1, 65],
                            31: [1, 66],
                            34: [1, 26],
                            36: 25
                        }, {
                            18: [2, 42],
                            27: [2, 42],
                            29: [2, 42],
                            30: [2, 42],
                            31: [2, 42],
                            34: [2, 42],
                            37: [2, 42]
                        }, {
                            5: [2, 19],
                            14: [2, 19],
                            15: [2, 19],
                            16: [2, 19],
                            19: [2, 19],
                            20: [2, 19],
                            22: [2, 19],
                            23: [2, 19],
                            24: [2, 19]
                        }, {
                            5: [2, 15],
                            14: [2, 15],
                            15: [2, 15],
                            16: [2, 15],
                            19: [2, 15],
                            20: [2, 15],
                            22: [2, 15],
                            23: [2, 15],
                            24: [2, 15]
                        }, {
                            18: [2, 36],
                            34: [2, 36]
                        }, {
                            18: [2, 37],
                            34: [2, 37]
                        }, {
                            18: [2, 38],
                            34: [2, 38]
                        }, {
                            18: [2, 39],
                            34: [2, 39]
                        }, {
                            18: [2, 40],
                            34: [2, 40]
                        }],
                        defaultActions: {
                            16: [2, 1],
                            24: [2, 25],
                            38: [2, 23],
                            55: [2, 21]
                        },
                        parseError: function (t, n) {
                            throw new Error(t)
                        },
                        parse: function (t) {
                            function v(e) {
                                r.length = r.length - 2 * e, i.length = i.length - e, s.length = s.length - e
                            }

                            function m() {
                                var e;
                                return e = n.lexer.lex() || 1, typeof e != "number" && (e = n.symbols_[e] || e), e
                            }
                            var n = this,
                                r = [0],
                                i = [null],
                                s = [],
                                o = this.table,
                                u = "",
                                a = 0,
                                f = 0,
                                l = 0,
                                c = 2,
                                h = 1;
                            this.lexer.setInput(t), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc == "undefined" && (this.lexer.yylloc = {});
                            var p = this.lexer.yylloc;
                            s.push(p);
                            var d = this.lexer.options && this.lexer.options.ranges;
                            typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
                            var g, y, b, w, E, S, x = {},
                                T, N, C, k;
                            for (;;) {
                                b = r[r.length - 1];
                                if (this.defaultActions[b]) w = this.defaultActions[b];
                                else {
                                    if (g === null || typeof g == "undefined") g = m();
                                    w = o[b] && o[b][g]
                                }
                                if (typeof w == "undefined" || !w.length || !w[0]) {
                                    var L = "";
                                    if (!l) {
                                        k = [];
                                        for (T in o[b]) this.terminals_[T] && T > 2 && k.push("'" + this.terminals_[T] + "'");
                                        this.lexer.showPosition ? L = "Parse error on line " + (a + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + k.join(", ") + ", got '" + (this.terminals_[g] || g) + "'" : L = "Parse error on line " + (a + 1) + ": Unexpected " + (g == 1 ? "end of input" : "'" + (this.terminals_[g] || g) + "'"), this.parseError(L, {
                                            text: this.lexer.match,
                                            token: this.terminals_[g] || g,
                                            line: this.lexer.yylineno,
                                            loc: p,
                                            expected: k
                                        })
                                    }
                                }
                                if (w[0] instanceof Array && w.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + b + ", token: " + g);
                                switch (w[0]) {
                                case 1:
                                    r.push(g), i.push(this.lexer.yytext), s.push(this.lexer.yylloc), r.push(w[1]), g = null, y ? (g = y, y = null) : (f = this.lexer.yyleng, u = this.lexer.yytext, a = this.lexer.yylineno, p = this.lexer.yylloc, l > 0 && l--);
                                    break;
                                case 2:
                                    N = this.productions_[w[1]][1], x.$ = i[i.length - N], x._$ = {
                                        first_line: s[s.length - (N || 1)].first_line,
                                        last_line: s[s.length - 1].last_line,
                                        first_column: s[s.length - (N || 1)].first_column,
                                        last_column: s[s.length - 1].last_column
                                    }, d && (x._$.range = [s[s.length - (N || 1)].range[0], s[s.length - 1].range[1]]), S = this.performAction.call(x, u, f, a, this.yy, w[1], i, s);
                                    if (typeof S != "undefined") return S;
                                    N && (r = r.slice(0, -1 * N * 2), i = i.slice(0, -1 * N), s = s.slice(0, -1 * N)), r.push(this.productions_[w[1]][0]), i.push(x.$), s.push(x._$), C = o[r[r.length - 2]][r[r.length - 1]], r.push(C);
                                    break;
                                case 3:
                                    return !0
                                }
                            }
                            return !0
                        }
                    },
                    t = function () {
                        var e = {
                            EOF: 1,
                            parseError: function (t, n) {
                                if (!this.yy.parser) throw new Error(t);
                                this.yy.parser.parseError(t, n)
                            },
                            setInput: function (e) {
                                return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                                    first_line: 1,
                                    first_column: 0,
                                    last_line: 1,
                                    last_column: 0
                                }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                            },
                            input: function () {
                                var e = this._input[0];
                                this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e;
                                var t = e.match(/(?:\r\n?|\n).*/g);
                                return t ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1] ++, this._input = this._input.slice(1), e
                            },
                            unput: function (e) {
                                var t = e.length,
                                    n = e.split(/(?:\r\n?|\n)/g);
                                this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t - 1), this.offset -= t;
                                var r = this.match.split(/(?:\r\n?|\n)/g);
                                this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
                                var i = this.yylloc.range;
                                return this.yylloc = {
                                    first_line: this.yylloc.first_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.first_column,
                                    last_column: n ? (n.length === r.length ? this.yylloc.first_column : 0) + r[r.length - n.length].length - n[0].length : this.yylloc.first_column - t
                                }, this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - t]), this
                            },
                            more: function () {
                                return this._more = !0, this
                            },
                            less: function (e) {
                                this.unput(this.match.slice(e))
                            },
                            pastInput: function () {
                                var e = this.matched.substr(0, this.matched.length - this.match.length);
                                return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
                            },
                            upcomingInput: function () {
                                var e = this.match;
                                return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
                            },
                            showPosition: function () {
                                var e = this.pastInput(),
                                    t = (new Array(e.length + 1)).join("-");
                                return e + this.upcomingInput() + "\n" + t + "^"
                            },
                            next: function () {
                                if (this.done) return this.EOF;
                                this._input || (this.done = !0);
                                var e, t, n, r, i, s;
                                this._more || (this.yytext = "", this.match = "");
                                var o = this._currentRules();
                                for (var u = 0; u < o.length; u++) {
                                    n = this._input.match(this.rules[o[u]]);
                                    if (n && (!t || n[0].length > t[0].length)) {
                                        t = n, r = u;
                                        if (!this.options.flex) break
                                    }
                                }
                                if (t) {
                                    s = t[0].match(/(?:\r\n?|\n).*/g), s && (this.yylineno += s.length), this.yylloc = {
                                        first_line: this.yylloc.last_line,
                                        last_line: this.yylineno + 1,
                                        first_column: this.yylloc.last_column,
                                        last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
                                    }, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, o[r], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1);
                                    if (e) return e;
                                    return
                                }
                                return this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                    text: "",
                                    token: null,
                                    line: this.yylineno
                                })
                            },
                            lex: function () {
                                var t = this.next();
                                return typeof t != "undefined" ? t : this.lex()
                            },
                            begin: function (t) {
                                this.conditionStack.push(t)
                            },
                            popState: function () {
                                return this.conditionStack.pop()
                            },
                            _currentRules: function () {
                                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                            },
                            topState: function () {
                                return this.conditionStack[this.conditionStack.length - 2]
                            },
                            pushState: function (t) {
                                this.begin(t)
                            }
                        };
                        return e.options = {}, e.performAction = function (t, n, r, i) {
                            var s = i;
                            switch (r) {
                            case 0:
                                n.yytext.slice(-1) !== "\\" && this.begin("mu"), n.yytext.slice(-1) === "\\" && (n.yytext = n.yytext.substr(0, n.yyleng - 1), this.begin("emu"));
                                if (n.yytext) return 14;
                                break;
                            case 1:
                                return 14;
                            case 2:
                                return n.yytext.slice(-1) !== "\\" && this.popState(), n.yytext.slice(-1) === "\\" && (n.yytext = n.yytext.substr(0, n.yyleng - 1)), 14;
                            case 3:
                                return 24;
                            case 4:
                                return 16;
                            case 5:
                                return 20;
                            case 6:
                                return 19;
                            case 7:
                                return 19;
                            case 8:
                                return 23;
                            case 9:
                                return 23;
                            case 10:
                                return n.yytext = n.yytext.substr(3, n.yyleng - 5), this.popState(), 15;
                            case 11:
                                return 22;
                            case 12:
                                return 35;
                            case 13:
                                return 34;
                            case 14:
                                return 34;
                            case 15:
                                return 37;
                            case 16:
                                break;
                            case 17:
                                return this.popState(), 18;
                            case 18:
                                return this.popState(), 18;
                            case 19:
                                return n.yytext = n.yytext.substr(1, n.yyleng - 2).replace(/\\"/g, '"'), 29;
                            case 20:
                                return n.yytext = n.yytext.substr(1, n.yyleng - 2).replace(/\\"/g, '"'), 29;
                            case 21:
                                return n.yytext = n.yytext.substr(1), 27;
                            case 22:
                                return 31;
                            case 23:
                                return 31;
                            case 24:
                                return 30;
                            case 25:
                                return 34;
                            case 26:
                                return n.yytext = n.yytext.substr(1, n.yyleng - 2), 34;
                            case 27:
                                return "INVALID";
                            case 28:
                                return 5
                            }
                        }, e.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|$)))/, /^(?:\{\{>)/, /^(?:\{\{#)/, /^(?:\{\{\/)/, /^(?:\{\{\^)/, /^(?:\{\{\s*else\b)/, /^(?:\{\{\{)/, /^(?:\{\{&)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{)/, /^(?:=)/, /^(?:\.(?=[} ]))/, /^(?:\.\.)/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}\}\})/, /^(?:\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@[a-zA-Z]+)/, /^(?:true(?=[}\s]))/, /^(?:false(?=[}\s]))/, /^(?:[0-9]+(?=[}\s]))/, /^(?:[a-zA-Z0-9_$-]+(?=[=}\s\/.]))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], e.conditions = {
                            mu: {
                                rules: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
                                inclusive: !1
                            },
                            emu: {
                                rules: [2],
                                inclusive: !1
                            },
                            INITIAL: {
                                rules: [0, 1, 28],
                                inclusive: !0
                            }
                        }, e
                    }();
                return e.lexer = t, n.prototype = e, e.Parser = n, new n
            }();
            e.Parser = t, e.parse = function (t) {
                    return e.Parser.yy = e.AST, e.Parser.parse(t)
                }, e.print = function (t) {
                    return (new e.PrintVisitor).accept(t)
                }, e.logger = {
                    DEBUG: 0,
                    INFO: 1,
                    WARN: 2,
                    ERROR: 3,
                    level: 3,
                    log: function (e, t) {}
                }, e.log = function (t, n) {
                    e.logger.log(t, n)
                },
                function () {
                    e.AST = {}, e.AST.ProgramNode = function (t, n) {
                        this.type = "program", this.statements = t, n && (this.inverse = new e.AST.ProgramNode(n))
                    }, e.AST.MustacheNode = function (e, t, n) {
                        this.type = "mustache", this.escaped = !n, this.hash = t;
                        var r = this.id = e[0],
                            i = this.params = e.slice(1),
                            s = this.eligibleHelper = r.isSimple;
                        this.isHelper = s && (i.length || t)
                    }, e.AST.PartialNode = function (e, t) {
                        this.type = "partial", this.id = e, this.context = t
                    };
                    var t = function (t, n) {
                        if (t.original !== n.original) throw new e.Exception(t.original + " doesn't match " + n.original)
                    };
                    e.AST.BlockNode = function (e, n, r, i) {
                        t(e.id, i), this.type = "block", this.mustache = e, this.program = n, this.inverse = r, this.inverse && !this.program && (this.isInverse = !0)
                    }, e.AST.ContentNode = function (e) {
                        this.type = "content", this.string = e
                    }, e.AST.HashNode = function (e) {
                        this.type = "hash", this.pairs = e
                    }, e.AST.IdNode = function (e) {
                        this.type = "ID", this.original = e.join(".");
                        var t = [],
                            n = 0;
                        for (var r = 0, i = e.length; r < i; r++) {
                            var s = e[r];
                            s === ".." ? n++ : s === "." || s === "this" ? this.isScoped = !0 : t.push(s)
                        }
                        this.parts = t, this.string = t.join("."), this.depth = n, this.isSimple = e.length === 1 && !this.isScoped && n === 0
                    }, e.AST.DataNode = function (e) {
                        this.type = "DATA", this.id = e
                    }, e.AST.StringNode = function (e) {
                        this.type = "STRING", this.string = e
                    }, e.AST.IntegerNode = function (e) {
                        this.type = "INTEGER", this.integer = e
                    }, e.AST.BooleanNode = function (e) {
                        this.type = "BOOLEAN", this.bool = e
                    }, e.AST.CommentNode = function (e) {
                        this.type = "comment", this.comment = e
                    }
                }(), e.Exception = function (e) {
                    var t = Error.prototype.constructor.apply(this, arguments);
                    for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n]);
                    this.message = t.message
                }, e.Exception.prototype = new Error, e.SafeString = function (e) {
                    this.string = e
                }, e.SafeString.prototype.toString = function () {
                    return this.string.toString()
                },
                function () {
                    var t = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#x27;",
                            "`": "&#x60;"
                        },
                        n = /[&<>"'`]/g,
                        r = /[&<>"'`]/,
                        i = function (e) {
                            return t[e] || "&amp;"
                        };
                    e.Utils = {
                        escapeExpression: function (t) {
                            return t instanceof e.SafeString ? t.toString() : t == null || t === !1 ? "" : r.test(t) ? t.replace(n, i) : t
                        },
                        isEmpty: function (e) {
                            return typeof e == "undefined" ? !0 : e === null ? !0 : e === !1 ? !0 : Object.prototype.toString.call(e) === "[object Array]" && e.length === 0 ? !0 : !1
                        }
                    }
                }(), e.Compiler = function () {}, e.JavaScriptCompiler = function () {},
                function (t, n) {
                    t.prototype = {
                        compiler: t,
                        disassemble: function () {
                            var e = this.opcodes,
                                t, n = [],
                                r, i;
                            for (var s = 0, o = e.length; s < o; s++) {
                                t = e[s];
                                if (t.opcode === "DECLARE") n.push("DECLARE " + t.name + "=" + t.value);
                                else {
                                    r = [];
                                    for (var u = 0; u < t.args.length; u++) i = t.args[u], typeof i == "string" && (i = '"' + i.replace("\n", "\\n") + '"'), r.push(i);
                                    n.push(t.opcode + " " + r.join(" "))
                                }
                            }
                            return n.join("\n")
                        },
                        guid: 0,
                        compile: function (e, t) {
                            this.children = [], this.depths = {
                                list: []
                            }, this.options = t;
                            var n = this.options.knownHelpers;
                            this.options.knownHelpers = {
                                helperMissing: !0,
                                blockHelperMissing: !0,
                                each: !0,
                                "if": !0,
                                unless: !0,
                                "with": !0,
                                log: !0
                            };
                            if (n)
                                for (var r in n) this.options.knownHelpers[r] = n[r];
                            return this.program(e)
                        },
                        accept: function (e) {
                            return this[e.type](e)
                        },
                        program: function (e) {
                            var t = e.statements,
                                n;
                            this.opcodes = [];
                            for (var r = 0, i = t.length; r < i; r++) n = t[r], this[n.type](n);
                            return this.isSimple = i === 1, this.depths.list = this.depths.list.sort(function (e, t) {
                                return e - t
                            }), this
                        },
                        compileProgram: function (e) {
                            var t = (new this.compiler).compile(e, this.options),
                                n = this.guid++,
                                r;
                            this.usePartial = this.usePartial || t.usePartial, this.children[n] = t;
                            for (var i = 0, s = t.depths.list.length; i < s; i++) {
                                r = t.depths.list[i];
                                if (r < 2) continue;
                                this.addDepth(r - 1)
                            }
                            return n
                        },
                        block: function (e) {
                            var t = e.mustache,
                                n = e.program,
                                r = e.inverse;
                            n && (n = this.compileProgram(n)), r && (r = this.compileProgram(r));
                            var i = this.classifyMustache(t);
                            i === "helper" ? this.helperMustache(t, n, r) : i === "simple" ? (this.simpleMustache(t), this.opcode("pushProgram", n), this.opcode("pushProgram", r), this.opcode("pushLiteral", "{}"), this.opcode("blockValue")) : (this.ambiguousMustache(t, n, r), this.opcode("pushProgram", n), this.opcode("pushProgram", r), this.opcode("pushLiteral", "{}"), this.opcode("ambiguousBlockValue")), this.opcode("append")
                        },
                        hash: function (e) {
                            var t = e.pairs,
                                n, r;
                            this.opcode("push", "{}");
                            for (var i = 0, s = t.length; i < s; i++) n = t[i], r = n[1], this.accept(r), this.opcode("assignToHash", n[0])
                        },
                        partial: function (e) {
                            var t = e.id;
                            this.usePartial = !0, e.context ? this.ID(e.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", t.original), this.opcode("append")
                        },
                        content: function (e) {
                            this.opcode("appendContent", e.string)
                        },
                        mustache: function (e) {
                            var t = this.options,
                                n = this.classifyMustache(e);
                            n === "simple" ? this.simpleMustache(e) : n === "helper" ? this.helperMustache(e) : this.ambiguousMustache(e), e.escaped && !t.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
                        },
                        ambiguousMustache: function (e, t, n) {
                            var r = e.id,
                                i = r.parts[0];
                            this.opcode("getContext", r.depth), this.opcode("pushProgram", t), this.opcode("pushProgram", n), this.opcode("invokeAmbiguous", i)
                        },
                        simpleMustache: function (e, t, n) {
                            var r = e.id;
                            r.type === "DATA" ? this.DATA(r) : r.parts.length ? this.ID(r) : (this.addDepth(r.depth), this.opcode("getContext", r.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda")
                        },
                        helperMustache: function (e, t, n) {
                            var r = this.setupFullMustacheParams(e, t, n),
                                i = e.id.parts[0];
                            if (this.options.knownHelpers[i]) this.opcode("invokeKnownHelper", r.length, i);
                            else {
                                if (this.knownHelpersOnly) throw new Error("You specified knownHelpersOnly, but used the unknown helper " + i);
                                this.opcode("invokeHelper", r.length, i)
                            }
                        },
                        ID: function (e) {
                            this.addDepth(e.depth), this.opcode("getContext", e.depth);
                            var t = e.parts[0];
                            t ? this.opcode("lookupOnContext", e.parts[0]) : this.opcode("pushContext");
                            for (var n = 1, r = e.parts.length; n < r; n++) this.opcode("lookup", e.parts[n])
                        },
                        DATA: function (e) {
                            this.options.data = !0, this.opcode("lookupData", e.id)
                        },
                        STRING: function (e) {
                            this.opcode("pushString", e.string)
                        },
                        INTEGER: function (e) {
                            this.opcode("pushLiteral", e.integer)
                        },
                        BOOLEAN: function (e) {
                            this.opcode("pushLiteral", e.bool)
                        },
                        comment: function () {},
                        opcode: function (e) {
                            this.opcodes.push({
                                opcode: e,
                                args: [].slice.call(arguments, 1)
                            })
                        },
                        declare: function (e, t) {
                            this.opcodes.push({
                                opcode: "DECLARE",
                                name: e,
                                value: t
                            })
                        },
                        addDepth: function (e) {
                            if (isNaN(e)) throw new Error("EWOT");
                            if (e === 0) return;
                            this.depths[e] || (this.depths[e] = !0, this.depths.list.push(e))
                        },
                        classifyMustache: function (e) {
                            var t = e.isHelper,
                                n = e.eligibleHelper,
                                r = this.options;
                            if (n && !t) {
                                var i = e.id.parts[0];
                                r.knownHelpers[i] ? t = !0 : r.knownHelpersOnly && (n = !1)
                            }
                            return t ? "helper" : n ? "ambiguous" : "simple"
                        },
                        pushParams: function (e) {
                            var t = e.length,
                                n;
                            while (t--) n = e[t], this.options.stringParams ? (n.depth && this.addDepth(n.depth), this.opcode("getContext", n.depth || 0), this.opcode("pushStringParam", n.string)) : this[n.type](n)
                        },
                        setupMustacheParams: function (e) {
                            var t = e.params;
                            return this.pushParams(t), e.hash ? this.hash(e.hash) : this.opcode("pushLiteral", "{}"), t
                        },
                        setupFullMustacheParams: function (e, t, n) {
                            var r = e.params;
                            return this.pushParams(r), this.opcode("pushProgram", t), this.opcode("pushProgram", n), e.hash ? this.hash(e.hash) : this.opcode("pushLiteral", "{}"), r
                        }
                    };
                    var r = function (e) {
                        this.value = e
                    };
                    n.prototype = {
                        nameLookup: function (e, t, r) {
                            return /^[0-9]+$/.test(t) ? e + "[" + t + "]" : n.isValidJavaScriptVariableName(t) ? e + "." + t : e + "['" + t + "']"
                        },
                        appendToBuffer: function (e) {
                            return this.environment.isSimple ? "return " + e + ";" : "buffer += " + e + ";"
                        },
                        initializeBuffer: function () {
                            return this.quotedString("")
                        },
                        namespace: "Handlebars",
                        compile: function (t, n, r, i) {
                            this.environment = t, this.options = n || {}, e.log(e.logger.DEBUG, this.environment.disassemble() + "\n\n"), this.name = this.environment.name, this.isChild = !!r, this.context = r || {
                                programs: [],
                                aliases: {}
                            }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.registers = {
                                list: []
                            }, this.compileStack = [], this.compileChildren(t, n);
                            var s = t.opcodes,
                                o;
                            this.i = 0;
                            for (u = s.length; this.i < u; this.i++) o = s[this.i], o.opcode === "DECLARE" ? this[o.name] = o.value : this[o.opcode].apply(this, o.args);
                            return this.createFunctionContext(i)
                        },
                        nextOpcode: function () {
                            var e = this.environment.opcodes,
                                t = e[this.i + 1];
                            return e[this.i + 1]
                        },
                        eat: function (e) {
                            this.i = this.i + 1
                        },
                        preamble: function () {
                            var e = [];
                            if (!this.isChild) {
                                var t = this.namespace,
                                    n = "helpers = helpers || " + t + ".helpers;";
                                this.environment.usePartial && (n = n + " partials = partials || " + t + ".partials;"), this.options.data && (n += " data = data || {};"), e.push(n)
                            } else e.push("");
                            this.environment.isSimple ? e.push("") : e.push(", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = e
                        },
                        createFunctionContext: function (t) {
                            var n = this.stackVars.concat(this.registers.list);
                            n.length > 0 && (this.source[1] = this.source[1] + ", " + n.join(", "));
                            if (!this.isChild) {
                                var r = [];
                                for (var i in this.context.aliases) this.source[1] = this.source[1] + ", " + i + "=" + this.context.aliases[i]
                            }
                            this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"), this.environment.isSimple || this.source.push("return buffer;");
                            var s = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];
                            for (var o = 0, u = this.environment.depths.list.length; o < u; o++) s.push("depth" + this.environment.depths.list[o]);
                            if (t) return s.push(this.source.join("\n  ")), Function.apply(this, s);
                            var a = "function " + (this.name || "") + "(" + s.join(",") + ") {\n  " + this.source.join("\n  ") + "}";
                            return e.log(e.logger.DEBUG, a + "\n\n"), a
                        },
                        blockValue: function () {
                            this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                            var e = ["depth0"];
                            this.setupParams(0, e), this.replaceStack(function (t) {
                                return e.splice(1, 0, t), t + " = blockHelperMissing.call(" + e.join(", ") + ")"
                            })
                        },
                        ambiguousBlockValue: function () {
                            this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                            var e = ["depth0"];
                            this.setupParams(0, e);
                            var t = this.topStack();
                            e.splice(1, 0, t), this.source.push("if (!" + this.lastHelper + ") { " + t + " = blockHelperMissing.call(" + e.join(", ") + "); }")
                        },
                        appendContent: function (e) {
                            this.source.push(this.appendToBuffer(this.quotedString(e)))
                        },
                        append: function () {
                            var e = this.popStack();
                            this.source.push("if(" + e + " || " + e + " === 0) { " + this.appendToBuffer(e) + " }"), this.environment.isSimple && this.source.push("else { " + this.appendToBuffer("''") + " }")
                        },
                        appendEscaped: function () {
                            var e = this.nextOpcode(),
                                t = "";
                            this.context.aliases.escapeExpression = "this.escapeExpression", e && e.opcode === "appendContent" && (t = " + " + this.quotedString(e.args[0]), this.eat(e)), this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")" + t))
                        },
                        getContext: function (e) {
                            this.lastContext !== e && (this.lastContext = e)
                        },
                        lookupOnContext: function (e) {
                            this.pushStack(this.nameLookup("depth" + this.lastContext, e, "context"))
                        },
                        pushContext: function () {
                            this.pushStackLiteral("depth" + this.lastContext)
                        },
                        resolvePossibleLambda: function () {
                            this.context.aliases.functionType = '"function"', this.replaceStack(function (e) {
                                return "typeof " + e + " === functionType ? " + e + "() : " + e
                            })
                        },
                        lookup: function (e) {
                            this.replaceStack(function (t) {
                                return t + " == null || " + t + " === false ? " + t + " : " + this.nameLookup(t, e, "context")
                            })
                        },
                        lookupData: function (e) {
                            this.pushStack(this.nameLookup("data", e, "data"))
                        },
                        pushStringParam: function (e) {
                            this.pushStackLiteral("depth" + this.lastContext), this.pushString(e)
                        },
                        pushString: function (e) {
                            this.pushStackLiteral(this.quotedString(e))
                        },
                        push: function (e) {
                            this.pushStack(e)
                        },
                        pushLiteral: function (e) {
                            this.pushStackLiteral(e)
                        },
                        pushProgram: function (e) {
                            e != null ? this.pushStackLiteral(this.programExpression(e)) : this.pushStackLiteral(null)
                        },
                        invokeHelper: function (e, t) {
                            this.context.aliases.helperMissing = "helpers.helperMissing";
                            var n = this.lastHelper = this.setupHelper(e, t);
                            this.register("foundHelper", n.name), this.pushStack("foundHelper ? foundHelper.call(" + n.callParams + ") " + ": helperMissing.call(" + n.helperMissingParams + ")")
                        },
                        invokeKnownHelper: function (e, t) {
                            var n = this.setupHelper(e, t);
                            this.pushStack(n.name + ".call(" + n.callParams + ")")
                        },
                        invokeAmbiguous: function (e) {
                            this.context.aliases.functionType = '"function"', this.pushStackLiteral("{}");
                            var t = this.setupHelper(0, e),
                                n = this.lastHelper = this.nameLookup("helpers", e, "helper");
                            this.register("foundHelper", n);
                            var r = this.nameLookup("depth" + this.lastContext, e, "context"),
                                i = this.nextStack();
                            this.source.push("if (foundHelper) { " + i + " = foundHelper.call(" + t.callParams + "); }"), this.source.push("else { " + i + " = " + r + "; " + i + " = typeof " + i + " === functionType ? " + i + "() : " + i + "; }")
                        },
                        invokePartial: function (e) {
                            var t = [this.nameLookup("partials", e, "partial"), "'" + e + "'", this.popStack(), "helpers", "partials"];
                            this.options.data && t.push("data"), this.context.aliases.self = "this", this.pushStack("self.invokePartial(" + t.join(", ") + ");")
                        },
                        assignToHash: function (e) {
                            var t = this.popStack(),
                                n = this.topStack();
                            this.source.push(n + "['" + e + "'] = " + t + ";")
                        },
                        compiler: n,
                        compileChildren: function (e, t) {
                            var n = e.children,
                                r, i;
                            for (var s = 0, o = n.length; s < o; s++) {
                                r = n[s], i = new this.compiler, this.context.programs.push("");
                                var u = this.context.programs.length;
                                r.index = u, r.name = "program" + u, this.context.programs[u] = i.compile(r, t, this.context)
                            }
                        },
                        programExpression: function (e) {
                            this.context.aliases.self = "this";
                            if (e == null) return "self.noop";
                            var t = this.environment.children[e],
                                n = t.depths.list,
                                r, i = [t.index, t.name, "data"];
                            for (var s = 0, o = n.length; s < o; s++) r = n[s], r === 1 ? i.push("depth0") : i.push("depth" + (r - 1));
                            return n.length === 0 ? "self.program(" + i.join(", ") + ")" : (i.shift(), "self.programWithDepth(" + i.join(", ") + ")")
                        },
                        register: function (e, t) {
                            this.useRegister(e), this.source.push(e + " = " + t + ";")
                        },
                        useRegister: function (e) {
                            this.registers[e] || (this.registers[e] = !0, this.registers.list.push(e))
                        },
                        pushStackLiteral: function (e) {
                            return this.compileStack.push(new r(e)), e
                        },
                        pushStack: function (e) {
                            return this.source.push(this.incrStack() + " = " + e + ";"), this.compileStack.push("stack" + this.stackSlot), "stack" + this.stackSlot
                        },
                        replaceStack: function (e) {
                            var t = e.call(this, this.topStack());
                            return this.source.push(this.topStack() + " = " + t + ";"), "stack" + this.stackSlot
                        },
                        nextStack: function (e) {
                            var t = this.incrStack();
                            return this.compileStack.push("stack" + this.stackSlot), t
                        },
                        incrStack: function () {
                            return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), "stack" + this.stackSlot
                        },
                        popStack: function () {
                            var e = this.compileStack.pop();
                            return e instanceof r ? e.value : (this.stackSlot--, e)
                        },
                        topStack: function () {
                            var e = this.compileStack[this.compileStack.length - 1];
                            return e instanceof r ? e.value : e
                        },
                        quotedString: function (e) {
                            return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"'
                        },
                        setupHelper: function (e, t) {
                            var n = [];
                            this.setupParams(e, n);
                            var r = this.nameLookup("helpers", t, "helper");
                            return {
                                params: n,
                                name: r,
                                callParams: ["depth0"].concat(n).join(", "),
                                helperMissingParams: ["depth0", this.quotedString(t)].concat(n).join(", ")
                            }
                        },
                        setupParams: function (e, t) {
                            var n = [],
                                r = [],
                                i, s, o;
                            n.push("hash:" + this.popStack()), s = this.popStack(), o = this.popStack();
                            if (o || s) o || (this.context.aliases.self = "this", o = "self.noop"), s || (this.context.aliases.self = "this", s = "self.noop"), n.push("inverse:" + s), n.push("fn:" + o);
                            for (var u = 0; u < e; u++) i = this.popStack(), t.push(i), this.options.stringParams && r.push(this.popStack());
                            return this.options.stringParams && n.push("contexts:[" + r.join(",") + "]"), this.options.data && n.push("data:data"), t.push("{" + n.join(",") + "}"), t.join(", ")
                        }
                    };
                    var i = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),
                        s = n.RESERVED_WORDS = {};
                    for (var o = 0, u = i.length; o < u; o++) s[i[o]] = !0;
                    n.isValidJavaScriptVariableName = function (e) {
                        return !n.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(e) ? !0 : !1
                    }
                }(e.Compiler, e.JavaScriptCompiler), e.precompile = function (t, n) {
                    n = n || {};
                    var r = e.parse(t),
                        i = (new e.Compiler).compile(r, n);
                    return (new e.JavaScriptCompiler).compile(i, n)
                }, e.compile = function (t, n) {
                    function i() {
                        var r = e.parse(t),
                            i = (new e.Compiler).compile(r, n),
                            s = (new e.JavaScriptCompiler).compile(i, n, undefined, !0);
                        return e.template(s)
                    }
                    n = n || {};
                    var r;
                    return function (e, t) {
                        return r || (r = i()), r.call(this, e, t)
                    }
                }, e.VM = {
                    template: function (t) {
                        var n = {
                            escapeExpression: e.Utils.escapeExpression,
                            invokePartial: e.VM.invokePartial,
                            programs: [],
                            program: function (t, n, r) {
                                var i = this.programs[t];
                                return r ? e.VM.program(n, r) : i ? i : (i = this.programs[t] = e.VM.program(n), i)
                            },
                            programWithDepth: e.VM.programWithDepth,
                            noop: e.VM.noop
                        };
                        return function (r, i) {
                            return i = i || {}, t.call(n, e, r, i.helpers, i.partials, i.data)
                        }
                    },
                    programWithDepth: function (e, t, n) {
                        var r = Array.prototype.slice.call(arguments, 2);
                        return function (n, i) {
                            return i = i || {}, e.apply(this, [n, i.data || t].concat(r))
                        }
                    },
                    program: function (e, t) {
                        return function (n, r) {
                            return r = r || {}, e(n, r.data || t)
                        }
                    },
                    noop: function () {
                        return ""
                    },
                    invokePartial: function (t, n, r, i, s, o) {
                        var u = {
                            helpers: i,
                            partials: s,
                            data: o
                        };
                        if (t === undefined) throw new e.Exception("The partial " + n + " could not be found");
                        if (t instanceof Function) return t(r, u);
                        if (!e.compile) throw new e.Exception("The partial " + n + " could not be compiled when running in runtime-only mode");
                        return s[n] = e.compile(t, {
                            data: o !== undefined
                        }), s[n](r, u)
                    }
                }, e.template = e.VM.template, define("handlebars", [], function () {
                    return e
                })
        }(), define("i18nprecompile", ["handlebars", "underscore"], function (e, t) {
            function n(r, i, s) {
                return s = s || {}, i = i || {}, r && r.type === "program" && r.statements && (t(r.statements).forEach(function (t, o) {
                    var u = "<!-- i18n error -->";
                    if (t.type == "mustache" && t.id && t.id.original == "$") {
                        if (t.params.length && t.params[0].string) {
                            var a = t.params[0].string;
                            u = i[a] || (s.originalKeyFallback ? a : u)
                        }
                        r.statements[o] = new e.AST.ContentNode(u)
                    } else t.program && (t.program = n(t.program, i, s))
                }), r.inverse && n(r.inverse, i, s)), r
            }
            return function (t, r, i) {
                i = i || {};
                var s, o;
                return s = e.parse(t), r !== !1 && (s = n(s, r, i)), o = (new e.Compiler).compile(s, i), (new e.JavaScriptCompiler).compile(o, i)
            }
        }),
        function (window) {
            var JSON = window.JSON || {};
            (function () {
                function f(e) {
                    return e < 10 ? "0" + e : e
                }

                function quote(e) {
                    return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
                        var t = meta[e];
                        return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    }) + '"' : '"' + e + '"'
                }

                function str(e, t) {
                    var n, r, i, s, o = gap,
                        u, a = t[e];
                    a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
                    switch (typeof a) {
                    case "string":
                        return quote(a);
                    case "number":
                        return isFinite(a) ? String(a) : "null";
                    case "boolean":
                    case "null":
                        return String(a);
                    case "object":
                        if (!a) return "null";
                        gap += indent, u = [];
                        if (Object.prototype.toString.apply(a) === "[object Array]") {
                            s = a.length;
                            for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
                            return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
                        }
                        if (rep && typeof rep == "object") {
                            s = rep.length;
                            for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
                        } else
                            for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
                        return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
                    }
                }
                typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function (e) {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (e) {
                    return this.valueOf()
                });
                var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    gap, indent, meta = {
                        "\b": "\\b",
                        "	": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    },
                    rep;
                typeof JSON.stringify != "function" && (JSON.stringify = function (e, t, n) {
                    var r;
                    gap = "", indent = "";
                    if (typeof n == "number")
                        for (r = 0; r < n; r += 1) indent += " ";
                    else typeof n == "string" && (indent = n);
                    rep = t;
                    if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
                        "": e
                    });
                    throw new Error("JSON.stringify")
                }), typeof JSON.parse != "function" && (JSON.parse = function (text, reviver) {
                    function walk(e, t) {
                        var n, r, i = e[t];
                        if (i && typeof i == "object")
                            for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
                        return reviver.call(e, t, i)
                    }
                    var j;
                    text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
                        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    }));
                    if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
                        "": j
                    }, "") : j;
                    throw new SyntaxError("JSON.parse")
                })
            })(), define("json2", [], function () {
                return JSON
            })
        }.call(this, this), define("hbs", ["handlebars", "underscore", "i18nprecompile", "json2"], function (e, t, n, r) {
            var i, s, o = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
                u = function () {
                    throw new Error("Environment unsupported.")
                },
                a = [],
                f = "w+",
                l = "hbs",
                c = "@hbs",
                h = "/styles/",
                p = "/demo-build/styles/",
                d = "template/helpers/",
                v = "template/i18n/",
                m = "screen.build.css";
            typeof window != "undefined" && window.navigator && window.document && !window.navigator.userAgent.match(/Node.js/) ? (s = function () {
                var e, t, n;
                if (typeof XMLHttpRequest != "undefined") return new XMLHttpRequest;
                for (t = 0; t < 3; t++) {
                    n = o[t];
                    try {
                        e = new ActiveXObject(n)
                    } catch (r) {}
                    if (e) {
                        o = [n];
                        break
                    }
                }
                if (!e) throw new Error("getXhr(): XMLHttpRequest not available");
                return e
            }, u = function (e, t) {
                var n = s();
                n.open("GET", e, !0), n.onreadystatechange = function (e) {
                    n.readyState === 4 && t(n.responseText)
                }, n.send(null)
            }) : typeof process != "undefined" && process.versions && !!process.versions.node ? (i = require.nodeRequire("fs"), u = function (e, t) {
                var n = i.readFileSync(e, "utf8") || "";
                n = n.replace(/^\uFEFF/, ""), t(n)
            }) : typeof java != "undefined" && typeof java.io != "undefined" && (u = function (e, t) {
                var n = new java.io.File(e),
                    r = new java.io.FileReader(n),
                    i = new java.io.BufferedReader(r),
                    s, o = "";
                while ((s = i.readLine()) !== null) o += new String(s) + "\n";
                i.close(), t(o)
            });
            var g = {},
                y = function (e, t) {
                    g[e] ? t(g[e]) : u(e, function (n) {
                        g[e] = n, t.call(this, n)
                    })
                },
                b = [],
                w = {};
            return {
                get: function () {
                    return e
                },
                write: function (e, t, n) {
                    if (t + c in a) {
                        var r = a[t + c];
                        n.asModule(e + "!" + t, r)
                    }
                },
                version: "0.4.0",
                load: function (s, o, g, E) {
                    function N(e, n) {
                        return t(e).forEach(function (e) {
                            e && e.type && e.type === "partial" && n.push(e.id.string), e && e.program && e.program.statements && N(e.program.statements, n), e && e.program && e.program.inverse && e.program.inverse.statements && N(e.program.inverse.statements, n)
                        }), n
                    }

                    function C(e) {
                        var n = [];
                        return e && e.statements && (n = N(e.statements, [])), t(n).unique()
                    }

                    function k(e) {
                        var t, n, i;
                        if (e && e.statements) {
                            t = e.statements[0];
                            if (t && t.type === "comment") try {
                                return n = t.comment.replace(new RegExp("^[\\s]+|[\\s]+$", "g"), ""), i = r.parse(n), n
                            } catch (s) {
                                return "{}"
                            }
                        }
                        return "{}"
                    }

                    function L(e) {
                        if (!e) return [];
                        var t = [e[0]],
                            n = e[0],
                            r;
                        for (r = 1; r < e.length; ++r) e.hasOwnProperty(r) && (n += "." + e[r], t.push(n));
                        return t
                    }

                    function A(e, n, r, i) {
                        r = r ? r + "." : "";
                        var s = "",
                            o = !1;
                        return t(e).forEach(function (e) {
                            var o, u, a;
                            if (e && e.type && e.type === "mustache") {
                                if (!e.params || !e.params.length) {
                                    o = L(e.id.parts);
                                    for (u in o) o[u] && (s = o[u] || s, n.push(r + o[u]));
                                    n.push(r + e.id.string)
                                }
                                var f = ["this", ".", "..", "./..", "../..", "../../.."];
                                e.params && t(e.params).forEach(function (u) {
                                    t(f).contains(u.original) && i.push(e.id.string), o = L(u.parts);
                                    for (var a in o) o[a] && (s = o[a] || s, i.push(e.id.string), n.push(r + o[a]))
                                })
                            }
                            e && e.mustache && A([e.mustache], n, r + s, i), e && e.program && e.program.statements && (a = A([e.mustache], [], "", i)[0] || "", e.program.inverse && e.program.inverse.statements && A(e.program.inverse.statements, n, r + s + (a ? r + s ? "." + a : a : ""), i), A(e.program.statements, n, r + s + (a ? r + s ? "." + a : a : ""), i))
                        }), n
                    }

                    function O(e) {
                        var n = [],
                            r = [];
                        e && e.statements && (n = A(e.statements, [], undefined, r));
                        var i = ["helperMissing", "blockHelperMissing", "each", "if", "unless", "with"];
                        return {
                            vars: t(n).chain().unique().map(function (e) {
                                return e === "" ? "." : e.length && e[e.length - 1] === "." ? e.substr(0, e.length - 1) + "[]" : e
                            }).value(),
                            helpers: t(r).chain().unique().map(function (e) {
                                return t(i).contains(e) ? undefined : e
                            }).compact().value()
                        }
                    }

                    function M(l) {
                        u(D, function (u) {
                            var c = e.parse(u),
                                v = C(c),
                                y = k(c),
                                T = O(c),
                                N = T.vars,
                                L = T.helpers || [],
                                A = v.join("', 'hbs!").replace(/_/g, "/"),
                                M = E.hbs && E.hbs.disableHelpers ? "" : function () {
                                    var e, t = [],
                                        n = E.hbs && E.hbs.helperPathCallback ? E.hbs.helperPathCallback : function (e) {
                                            return (E.hbs && E.hbs.helperDirectory ? E.hbs.helperDirectory : d) + e
                                        };
                                    for (e = 0; e < L.length; e++) t[e] = "'" + n(L[e]) + "'";
                                    return t
                                }().join(","),
                                P = "",
                                H = "",
                                B = "",
                                j, F, I;
                            A && (A = ",'hbs!" + A + "'"), M && (M = "," + M);
                            if (y !== "{}") try {
                                j = r.parse(y), j && j.styles && (b = t.union(b, j.styles), require.isBrowser && !E.isBuild ? (F = document.head || document.getElementsByTagName("head")[0], t(j.styles).forEach(function (e) {
                                    w[e] || (I = document.createElement("link"), I.href = E.baseUrl + h + e + ".css", I.media = "all", I.rel = "stylesheet", I.type = "text/css", F.appendChild(I), w[e] = I)
                                })) : E.isBuild && function () {
                                    var e = require.nodeRequire("fs"),
                                        n = t(j.styles).map(function (e) {
                                            return w[e] ? "" : (w[e] = !0, "@import url(" + e + ".css);\n")
                                        }).join("\n");
                                    e.open(__dirname + p + m, f, "0666", function (t, r) {
                                        e.writeSync(r, n, null, encoding = "utf8"), e.close(r)
                                    }), f = "a"
                                }())
                            } catch (q) {
                                console.log("error injecting styles")
                            }!E.isBuild && !E.serverRender && (P = "<!-- START - " + s + " -->", H = "<!-- END - " + s + " -->", B = "t.meta = " + y + ";\n" + "t.helpers = " + r.stringify(L) + ";\n" + "t.deps = " + r.stringify(v) + ";\n" + "t.vars = " + r.stringify(N) + ";\n");
                            var R = x ? !1 : t.extend(l, E.localeMapping),
                                U = n(u, R, {
                                    originalKeyFallback: (E.hbs || {}).originalKeyFallback
                                });
                            u = "/* START_TEMPLATE */\ndefine(['hbs','handlebars'" + A + M + "], function( hbs, Handlebars ){ \n" + "var t = Handlebars.template(" + U + ");\n" + "Handlebars.registerPartial('" + s.replace(/\//g, "_") + "', t);\n" + B + "return t;\n" + "});\n" + "/* END_TEMPLATE */\n", E.isBuild && (a[S] = u), E.isBuild || (u += "\r\n//@ sourceURL=" + D);
                            for (var z in v) v.hasOwnProperty(z) && (v[z] = "hbs!" + v[z].replace(/_/g, "/"));
                            E.isBuild ? (g.fromText(u), o([s], function (e) {
                                g(e)
                            })) : require(v, function () {
                                g.fromText(u), o([s], function (e) {
                                    g(e)
                                })
                            }), E.removeCombined && i.unlinkSync(D)
                        })
                    }
                    var S = s + c,
                        x = E.hbs && E.hbs.disableI18n,
                        T = [],
                        D = o.toUrl(s + "." + (E.hbs && E.hbs.templateExtension ? E.hbs.templateExtension : l));
                    x ? M(!1) : y(o.toUrl((E.hbs && E.hbs.i18nDirectory ? E.hbs.i18nDirectory : v) + (E.locale || "en_us") + ".json"), function (e) {
                        M(r.parse(e))
                    })
                }
            }
        }), define("hbs!templates/buildingInfo", ["hbs", "handlebars"], function (e, t) {
            var n = t.template(function (e, t, n, r, i) {
                n = n || e.helpers;
                var s = "",
                    o, u, a = "function",
                    f = this.escapeExpression;
                return s += '<div class="vcard js-iw-vcard">\n  <a href="javascript: void(0);" id="accessibility-anchor"></a>\n  <span class="utility_links">\n <div id="maplinkdiv" style="display:none;width:280px;" class="js-iw-link-container">URL: <input type="text" id="maplink" class="js-iw-link" size="30">\n        <a href="#" class="js-iw-hidelink">Hide</a>\n    </div>\n  </span>\n\n    <img src="/_assets/_images/_buildings_pics/', u = n.code, u ? o = u.call(t, {
                    hash: {}
                }) : (o = t.code, o = typeof o === a ? o() : o), s += f(o) + '.jpg" alt=" " class="photo" />\n     <h1 class="org">', u = n.title, u ? o = u.call(t, {
                    hash: {}
                }) : (o = t.title, o = typeof o === a ? o() : o), s += f(o) + " - ", u = n.code, u ? o = u.call(t, {
                    hash: {}
                }) : (o = t.code, o = typeof o === a ? o() : o), s += f(o) + '</h1> \n    <ul class="adr">\n        <li><span class="street-address">', u = n.street, u ? o = u.call(t, {
                    hash: {}
                }) : (o = t.street, o = typeof o === a ? o() : o), s += f(o) + '</span>\n\n        </li>\n        <li><span class="locality">', u = n.city, u ? o = u.call(t, {
                    hash: {}
                }) : (o = t.city, o = typeof o === a ? o() : o), s += f(o) + '</span>, <span class="region">', u = n.province, u ? o = u.call(t, {
                    hash: {}
                }) : (o = t.province, o = typeof o === a ? o() : o), s += f(o) + '</span>,  <span class="country-name">', u = n.country, u ? o = u.call(t, {
                    hash: {}
                }) : (o = t.country, o = typeof o === a ? o() : o), s += f(o) + '</span>\n\n        </li>\n        <li><span class="postal-code">', u = n.postal, u ? o = u.call(t, {
                    hash: {}
                }) : (o = t.postal, o = typeof o === a ? o() : o), s += f(o) + '</span>\n\n        </li>\n    </ul>\n</div>\n<div class="js-iw-tab-content"></div>\n\n', s
            });
            return t.registerPartial("templates_buildingInfo", n), n
        }), define("hbs!templates/markerInfo", ["hbs", "handlebars"], function (e, t) {
            var n = t.template(function (e, t, n, r, i) {
                function c(e, t) {
                    var r = "",
                        i, s;
                    return r += '\n    <img src="', s = n.image, s ? i = s.call(e, {
                        hash: {}
                    }) : (i = e.image, i = typeof i === a ? i() : i), r += f(i) + '" alt="" title="', s = n.title, s ? i = s.call(e, {
                        hash: {}
                    }) : (i = e.title, i = typeof i === a ? i() : i), r += f(i) + ' image" class="photo" />\n    ', r
                }

                function h(e, t) {
                    var r = "",
                        i, s;
                    return r += '\n    <h2 class="additional-name">Also known as: ', s = n.aka, s ? i = s.call(e, {
                        hash: {}
                    }) : (i = e.aka, i = typeof i === a ? i() : i), r += f(i) + "</h2>\n    ", r
                }

                function p(e, t) {
                    var r = "",
                        i, s;
                    return r += '\n        <li><span class="street-address">', s = n.address, s ? i = s.call(e, {
                        hash: {}
                    }) : (i = e.address, i = typeof i === a ? i() : i), r += f(i) + "</span></li>\n        ", r
                }

                function d(e, t) {
                    var r = "",
                        i, s;
                    return r += "\n        <li>", s = n.phone, s ? i = s.call(e, {
                        hash: {}
                    }) : (i = e.phone, i = typeof i === a ? i() : i), r += f(i) + "</li>\n        ", r
                }

                function v(e, t) {
                    return '\n        <li class="current">\n            <a class="description js-iw-description current" href="javascript:void(0);">Description</a>\n        </li>\n        '
                }

                function m(e, t) {
                    return '\n        <li>\n            <a class="directions js-iw-related-building-directions" href="javascript:void(0);">Directions</a>\n        </li>\n        '
                }

                function g(e, t) {
                    return '\n        <li>\n            <a class="accessibility js-iw-accessibility" href="javascript:void(0);">Accessibility</a>\n        </li>\n        '
                }

                function y(e, t) {
                    return '\n        <li>\n            <a class="hours js-iw-hours" href="javascript:void(0);">Hours of Operation</a>\n        </li>\n        '
                }

                function b(e, t) {
                    var r = "",
                        i, s;
                    r += '\n        <div class="description">', s = n.desc, s ? i = s.call(e, {
                        hash: {}
                    }) : (i = e.desc, i = typeof i === a ? i() : i);
                    if (i || i === 0) r += i;
                    return r += "</div>\n    ", r
                }

                function w(e, t) {
                    var r = "",
                        i, s;
                    return r += '\n    <a href="', s = n.url, s ? i = s.call(e, {
                        hash: {}
                    }) : (i = e.url, i = typeof i === a ? i() : i), r += f(i) + '" title="" target="_new" class="marker_url">url</a>\n', r
                }

                function E(e, t) {
                    var r = "",
                        i, s;
                    return r += '\n    <a href="mailto:', s = n.email, s ? i = s.call(e, {
                        hash: {}
                    }) : (i = e.email, i = typeof i === a ? i() : i), r += f(i) + '" title="" target="_new" class="marker_email">email</a>\n', r
                }

                function S(e, t) {
                    var r = "",
                        i, s;
                    return r += '\n    <a href="http://www.twitter.com/', s = n.twitter, s ? i = s.call(e, {
                        hash: {}
                    }) : (i = e.twitter, i = typeof i === a ? i() : i), r += f(i) + '" title="" target="_new" class="marker_twitter">twitter</a>\n', r
                }

                function x(e, t) {
                    var r = "",
                        i, s;
                    return r += '\n    <a href="', s = n.facebook, s ? i = s.call(e, {
                        hash: {}
                    }) : (i = e.facebook, i = typeof i === a ? i() : i), r += f(i) + '" title="" target="_new" class="marker_facebook">facebook</a>\n', r
                }

                function T(e, t) {
                    var r = "",
                        i, s;
                    return r += '\n    <a href="', s = n.rss, s ? i = s.call(e, {
                        hash: {}
                    }) : (i = e.rss, i = typeof i === a ? i() : i), r += f(i) + '" title="" target="_new" class="marker_rss">rss</a>\n', r
                }
                n = n || e.helpers;
                var s = "",
                    o, u, a = "function",
                    f = this.escapeExpression,
                    l = this;
                s += '<div class="vcard js-iw-vcard">\n    <a href="javascript: void(0);" id="accessibility-anchor"></a>\n    <span class="utility_links">\n        <a class="email" href="mailto:?Subject=', u = n.title, u ? o = u.call(t, {
                    hash: {}
                }) : (o = t.title, o = typeof o === a ? o() : o), s += f(o) + "&body=http://map.utoronto.ca/marker/", u = n.slug, u ? o = u.call(t, {
                    hash: {}
                }) : (o = t.slug, o = typeof o === a ? o() : o), s += f(o) + '">Send</a>\n        <a class="url fn org js-iw-showlink" href="javascript:void(0)" >Link</a>\n        <div id="maplinkdiv" style="display:none;width:280px; " class="js-iw-link-container">\n            URL: <input type="text" id="maplink" size="30" class="js-iw-link">\n            <a href="javascript:void(0)" class="js-iw-hidelink">Hide</a>\n        </div>\n    </span>\n    ', o = t.image, o = n["if"].call(t, o, {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(1, c, i)
                });
                if (o || o === 0) s += o;
                s += '\n    \n    <h1 class="org">', u = n.title, u ? o = u.call(t, {
                    hash: {}
                }) : (o = t.title, o = typeof o === a ? o() : o), s += f(o) + "</h1>\n    ", o = t.aka, o = n["if"].call(t, o, {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(3, h, i)
                });
                if (o || o === 0) s += o;
                s += "\n    ", s += "\n    ", s += '\n    \n    <ul class="adr">\n        ', o = t.address, o = n["if"].call(t, o, {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(5, p, i)
                });
                if (o || o === 0) s += o;
                s += "\n        ", o = t.phone, o = n["if"].call(t, o, {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(7, d, i)
                });
                if (o || o === 0) s += o;
                s += '\n    </ul>\n    \n</div>\n<nav id="info_tools" class="js-iw-nav">\n    <ul>\n        ', o = t.desc, o = n["if"].call(t, o, {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(9, v, i)
                });
                if (o || o === 0) s += o;
                s += "\n        ", o = t.building_code, o = n["if"].call(t, o, {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(11, m, i)
                });
                if (o || o === 0) s += o;
                s += "\n        ", o = t.access, o = n["if"].call(t, o, {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(13, g, i)
                });
                if (o || o === 0) s += o;
                s += "\n        ", o = t.has_hours, o = n["if"].call(t, o, {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(15, y, i)
                });
                if (o || o === 0) s += o;
                s += '\n    </ul>\n</nav>\n<div class="inner js-iw-tab-content">\n    ', o = t.desc, o = n["if"].call(t, o, {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(17, b, i)
                });
                if (o || o === 0) s += o;
                s += '\n</div>\n<div class="social_links">\n', o = t.url, o = n["if"].call(t, o, {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(19, w, i)
                });
                if (o || o === 0) s += o;
                s += "\n", o = t.email, o = n["if"].call(t, o, {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(21, E, i)
                });
                if (o || o === 0) s += o;
                s += "\n", o = t.twitter, o = n["if"].call(t, o, {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(23, S, i)
                });
                if (o || o === 0) s += o;
                s += "\n", o = t.facebook, o = n["if"].call(t, o, {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(25, x, i)
                });
                if (o || o === 0) s += o;
                s += "\n", o = t.rss, o = n["if"].call(t, o, {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(27, T, i)
                });
                if (o || o === 0) s += o;
                return s += "\n</div>\n\n", s
            });
            return t.registerPartial("templates_markerInfo", n), n
        }), define("views/InfoWindowView", ["require", "underscore", "jquery", "hbs!templates/buildingInfo", "hbs!templates/markerInfo"], function (e) {
            var t = e("underscore"),
                n = e("jquery"),
                r = e("hbs!templates/buildingInfo"),
                i = e("hbs!templates/markerInfo"),
                s, o = {
                    events: {
                        "click .js-iw-showlink": "showLink",
                        "click .js-iw-hidelink": "hideLink",
                        "click .js-iw-offices": "showOffices",
                        "click .js-iw-directions": "showDirections",
                        "click .js-iw-related-building-directions": "showRelatedBuildingDirections",
                        "click .js-iw-description": "showDescription",
                        "click .js-iw-hours": "showHours",
                        "click .js-iw-accessibility": "showAccessibility"
                    },
                    bindEvents: function () {
                        var e = this;
                        t.each(this.events, function (r, i) {
                            var s = i.split(" ")[0],
                                o = i.slice(i.indexOf(" "));
                            t.isString(r) && (r = e[r]), n("#map_canvas").on(s, o, r)
                        })
                    },
                    initialize: function (e) {
                        t.bindAll(this), e = e || {}, this.mapInfoWindow = e.mapInfoWindow || new google.maps.InfoWindow, this.bindEvents(), s = e.mapSlug, google.maps.event.addListener(this.mapInfoWindow, "domready", function () {
                            n(".js-iw-vcard a").first().focus()
                        })
                    },
                    render: function (e, t) {
                        var n = t === "marker" ? i(e) : r(e);
                        this.data = e, this.type = t, this.mapInfoWindow.close(), this.mapInfoWindow.setPosition(e.position), this.mapInfoWindow.setContent(n), this.mapInfoWindow.open(e.map)
                    },
                    hide: function () {
                        this.mapInfoWindow.close()
                    },
                    showLink: function () {
                        var e = this.type === "marker" ? this.data.slug : this.data.id;
                        n(".js-iw-link-container").show(), n(".js-iw-link").val("http://" + document.location.host + "/" + s + "/" + this.type + "/" + e).focus().select()
                    },
                    hideLink: function () {
                        n(".js-iw-link-container").hide()
                    },
                    activateTab: function (e) {
                        n(".js-iw-nav .current").removeClass("current"), n(e).addClass("current").parent().addClass("current")
                    },
                    showTabContent: function (e) {
                        n(".js-iw-tab-content").html(e), this.mapInfoWindow.setContent(n(".js-iw-vcard").parent().html()), this.mapInfoWindow.open(this.data.map)
                    },
                    showOffices: function (e) {
                        this.activateTab(e.target), n.get("/json/departments/" + this.data.id).done(this.showTabContent)
                    },
                    showDirections: function (e) {
                        this.activateTab(e.target), n.get("/json/directions/" + this.data.id + "/" + s).done(this.showTabContent)
                    },
                    showDescription: function (e) {
                        this.render(this.data, this.type)
                    },
                    showAccessibility: function (e) {
                        this.activateTab(e.target), n.get("/json/accessibility/" + this.data.id).done(this.showTabContent)
                    },
                    showHours: function (e) {
                        this.activateTab(e.target), n.get("/json/hours/" + this.data.id).done(this.showTabContent)
                    },
                    showRelatedBuildingDirections: function (e) {
                        this.activateTab(e.target), n.get("/json/directionsmarker/" + this.data.building_code).done(this.showTabContent)
                    }
                };
            return o
        }), define("models/Marker", ["require", "underscore", "views/InfoWindowView"], function (e) {
            var t = e("underscore"),
                n = e("views/InfoWindowView"),
                r = function (e) {
                    google.maps.Marker.call(this, e), t.bindAll(this), this.initialize()
                };
            return t.extend(r.prototype, google.maps.Marker.prototype, {
                resourceType: "Marker",
                initialize: function () {
                    t.bindAll(this), this.addListeners(), this._icon = this.icon, this.hash = "M" + this.id
                },
                infoWindow: n,
                resetIcon: function () {
                    return this.setIcon(this._icon), this
                },
                addListeners: function () {
                    var e = this;
                    google.maps.event.addListener(this, "click", function () {
                        e.infoWindow.render(e, "marker")
                    })
                },
                showInfoWindow: function () {
                    var e = this;
                    e.infoWindow.render(e, "marker"), e.highlight(), e.focus = !0;
                    var t = google.maps.event.addListener(e.infoWindow.mapInfoWindow, "closeclick", function () {
                        e.unhighlight(), e.focus = !1, google.maps.event.removeListener(t)
                    })
                },
                getHash: function () {
                    return "M" + this.id
                }
            }), r
        }), eval(function (e, t, n, r, i, s) {
            i = function (e) {
                return (e < t ? "" : i(parseInt(e / t))) + ((e %= t) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
            };
            if (!"".replace(/^/, String)) {
                while (n--) s[i(n)] = r[n] || i(n);
                r = [function (e) {
                    return s[e]
                }], i = function () {
                    return "\\w+"
                }, n = 1
            }
            while (n--) r[n] && (e = e.replace(new RegExp("\\b" + i(n) + "\\b", "g"), r[n]));
            return e
        }('5 J(b,a){b.1c().X(J,o.n.2Y);4.I=b;4.N=a;4.B=s;4.q=s;4.1x=s;4.1m=t;4.L(b.z())}J.6.2J=5(){7 c=4;7 f;7 d;4.q=3O.3H("1Q");9(4.1m){4.1O()}4.5d().50.4U(4.q);o.n.u.1G(4.z(),"4B",5(){d=f});o.n.u.1H(4.q,"4o",5(){f=K;d=t});o.n.u.1H(4.q,"2P",5(e){f=t;9(!d){7 a;7 b=c.I.1c();o.n.u.W(b,"2P",c.I);o.n.u.W(b,"4e",c.I);9(b.2I()){a=b.1z();b.z().2D(c.I.1y());9(a!==s&&(b.z().1f()>a)){b.z().45(a+1)}}e.41=K;9(e.2r){e.2r()}}});o.n.u.1H(4.q,"2p",5(){7 a=c.I.1c();o.n.u.W(a,"2p",c.I)});o.n.u.1H(4.q,"2m",5(){7 a=c.I.1c();o.n.u.W(a,"2m",c.I)})};J.6.2j=5(){9(4.q&&4.q.2f){4.1r();o.n.u.3x(4.q);4.q.2f.3u(4.q);4.q=s}};J.6.2n=5(){9(4.1m){7 a=4.23(4.B);4.q.14.1M=a.y+"A";4.q.14.1D=a.x+"A"}};J.6.1r=5(){9(4.q){4.q.14.35="33"}4.1m=t};J.6.1O=5(){9(4.q){7 a=4.23(4.B);4.q.14.4K=4.2X(a);9(4.I.13){4.q.2S="<4y 4v=\'"+4.21+"\'><1Q 14=\'2a: 3d; 1M: 2Q; 1D: 2Q; 18: "+4.Y+"A;\'>"+4.1x.19+"</1Q>"}E{4.q.2S=4.1x.19}4.q.2N=4.I.1c().2M();4.q.14.35=""}4.1m=K};J.6.2K=5(a){4.1x=a;7 b=v.4d(0,a.2F-1);b=v.1W(4.N.p-1,b);7 c=4.N[b];4.21=c.1V;4.S=c.15;4.Y=c.18;4.H=c.48;4.1S=c.44||[1P(4.S/2,10),1P(4.Y/2,10)];4.2u=c.3Y||"3W";4.2q=c.3M||11;4.2l=c.3J||"33";4.2h=c.3E||"3C";4.2C=c.3A||"3z";4.2d=c.3v||"3t,3q-3p";4.2v=c.3m||"0 0"};J.6.2s=5(a){4.B=a};J.6.2X=5(b){7 a=[];9(!4.I.13){a.F(\'2A-5c:1V(\'+4.21+\');\');a.F(\'2A-2a:\'+4.2v+\';\')}9(1L 4.H===\'58\'){9(1L 4.H[0]===\'3f\'&&4.H[0]>0&&4.H[0]<4.S){a.F(\'15:\'+(4.S-4.H[0])+\'A; 3c-1M:\'+4.H[0]+\'A;\')}E{a.F(\'15:\'+4.S+\'A; 3b-15:\'+4.S+\'A;\')}9(1L 4.H[1]===\'3f\'&&4.H[1]>0&&4.H[1]<4.Y){a.F(\'18:\'+(4.Y-4.H[1])+\'A; 3c-1D:\'+4.H[1]+\'A;\')}E{a.F(\'18:\'+4.Y+\'A; 19-3a:1b;\')}}E{a.F(\'15:\'+4.S+\'A; 3b-15:\'+4.S+\'A; 18:\'+4.Y+\'A; 19-3a:1b;\')}a.F(\'4S:4R; 1M:\'+b.y+\'A; 1D:\'+b.x+\'A; 4Q:\'+4.2u+\'; 2a:3d; 1E-1n:\'+4.2q+\'A; 1E-4M:\'+4.2d+\'; 1E-4J:\'+4.2h+\'; 1E-14:\'+4.2C+\'; 19-4H:\'+4.2l+\';\');j a.4F("")};J.6.23=5(b){7 a=4.2V().22(b);a.x-=4.1S[1];a.y-=4.1S[0];j a};5 C(a){4.V=a;4.T=a.z();4.Q=a.2R();4.U=a.38();4.17=a.37();4.13=a.3e();4.k=[];4.B=s;4.27=s;4.Z=G J(4,a.1Y())}C.6.4f=5(){j 4.k.p};C.6.1C=5(){j 4.k};C.6.2O=5(){j 4.B};C.6.z=5(){j 4.T};C.6.1c=5(){j 4.V};C.6.1y=5(){7 i;7 b=G o.n.1l(4.B,4.B);7 a=4.1C();w(i=0;i<a.p;i++){b.X(a[i].P())}j b};C.6.1B=5(){4.Z.L(s);4.k=[];1X 4.k};C.6.1A=5(e){7 i;7 c;7 b;9(4.2L(e)){j t}9(!4.B){4.B=e.P();4.1Z()}E{9(4.17){7 l=4.k.p+1;7 a=(4.B.O()*(l-1)+e.P().O())/l;7 d=(4.B.1a()*(l-1)+e.P().1a())/l;4.B=G o.n.1j(a,d);4.1Z()}}e.1i=K;4.k.F(e);c=4.k.p;b=4.V.1z();9(b!==s&&4.T.1f()>b){9(e.z()!==4.T){e.L(4.T)}}E 9(c<4.U){9(e.z()!==4.T){e.L(4.T)}}E 9(c===4.U){w(i=0;i<c;i++){4.k[i].L(s)}}E{e.L(s)}4.2H();j K};C.6.2G=5(a){j 4.27.2Z(a.P())};C.6.1Z=5(){7 a=G o.n.1l(4.B,4.B);4.27=4.V.25(a)};C.6.2H=5(){7 c=4.k.p;7 a=4.V.1z();9(a!==s&&4.T.1f()>a){4.Z.1r();j}9(c<4.U){4.Z.1r();j}7 b=4.V.1Y().p;7 d=4.V.2E()(4.k,b);4.Z.2s(4.B);4.Z.2K(d);4.Z.1O()};C.6.2L=5(a){7 i;9(4.k.1q){j 4.k.1q(a)!==-1}E{w(i=0;i<4.k.p;i++){9(a===4.k[i]){j K}}}j t};5 8(a,c,b){4.X(8,o.n.2Y);c=c||[];b=b||{};4.k=[];4.D=[];4.1g=[];4.1t=s;4.1h=t;4.Q=b.4c||4b;4.U=b.4a||2;4.1U=b.49||s;4.N=b.46||[];4.1T=b.2N||"";4.1K=K;9(b.2B!==1k){4.1K=b.2B}4.17=t;9(b.2z!==1k){4.17=b.2z}4.16=t;9(b.2y!==1k){4.16=b.2y}4.13=t;9(b.2x!==1k){4.13=b.2x}4.1w=b.42||8.2w;4.1v=b.40||8.2t;4.1p=b.3T||8.2b;4.1N=b.3S||8.2o;4.1R=b.3L||8.2e;4.1s=b.3K||8.2k;9(3I.3G.3F().1q("3D")!==-1){4.1R=4.1s}4.2g();4.2i(c,K);4.L(a)}8.6.2J=5(){7 a=4;4.1t=4.z();4.1h=K;4.1e();4.1g=[o.n.u.1G(4.z(),"3B",5(){a.1u(t);9(4.1f()===0){o.n.u.W(4,"2c")}}),o.n.u.1G(4.z(),"2c",5(){a.1d()})]};8.6.2j=5(){7 i;w(i=0;i<4.k.p;i++){4.k[i].L(4.1t)}w(i=0;i<4.D.p;i++){4.D[i].1B()}4.D=[];w(i=0;i<4.1g.p;i++){o.n.u.3y(4.1g[i])}4.1g=[];4.1t=s;4.1h=t};8.6.2n=5(){};8.6.2g=5(){7 i,1n;9(4.N.p>0){j}w(i=0;i<4.1p.p;i++){1n=4.1p[i];4.N.F({1V:4.1w+(i+1)+"."+4.1v,15:1n,18:1n})}};8.6.3N=5(){7 i;7 a=4.1C();7 b=G o.n.1l();w(i=0;i<a.p;i++){b.X(a[i].P())}4.z().2D(b)};8.6.2R=5(){j 4.Q};8.6.3w=5(a){4.Q=a};8.6.38=5(){j 4.U};8.6.3P=5(a){4.U=a};8.6.1z=5(){j 4.1U};8.6.3Q=5(a){4.1U=a};8.6.1Y=5(){j 4.N};8.6.3R=5(a){4.N=a};8.6.2M=5(){j 4.1T};8.6.3s=5(a){4.1T=a};8.6.2I=5(){j 4.1K};8.6.3r=5(a){4.1K=a};8.6.37=5(){j 4.17};8.6.3U=5(a){4.17=a};8.6.3V=5(){j 4.16};8.6.3o=5(a){4.16=a};8.6.3X=5(){j 4.1v};8.6.3n=5(a){4.1v=a};8.6.3Z=5(){j 4.1w};8.6.3l=5(a){4.1w=a};8.6.3k=5(){j 4.1p};8.6.3j=5(a){4.1p=a};8.6.2E=5(){j 4.1N};8.6.43=5(a){4.1N=a};8.6.3e=5(){j 4.13};8.6.3i=5(a){4.13=a};8.6.3h=5(){j 4.1s};8.6.3g=5(a){4.1s=a};8.6.1C=5(){j 4.k};8.6.47=5(){j 4.k.p};8.6.5b=5(){j 4.D};8.6.5a=5(){j 4.D.p};8.6.1A=5(b,a){4.29(b);9(!a){4.1d()}};8.6.2i=5(b,a){7 i;w(i=0;i<b.p;i++){4.29(b[i])}9(!a){4.1d()}};8.6.29=5(b){9(b.59()){7 a=4;o.n.u.1G(b,"55",5(){9(a.1h){4.1i=t;a.1e()}})}b.1i=t;4.k.F(b)};8.6.54=5(c,a){7 b=4.28(c);9(!a&&b){4.1e()}j b};8.6.52=5(a,c){7 i,r;7 b=t;w(i=0;i<a.p;i++){r=4.28(a[i]);b=b||r}9(!c&&b){4.1e()}j b};8.6.28=5(b){7 i;7 a=-1;9(4.k.1q){a=4.k.1q(b)}E{w(i=0;i<4.k.p;i++){9(b===4.k[i]){a=i;4Z}}}9(a===-1){j t}b.L(s);4.k.4Y(a,1);j K};8.6.4W=5(){4.1u(K);4.k=[]};8.6.1e=5(){7 a=4.D.4V();4.D=[];4.1u(t);4.1d();39(5(){7 i;w(i=0;i<a.p;i++){a[i].1B()}},0)};8.6.25=5(d){7 f=4.2V();7 c=G o.n.1j(d.26().O(),d.26().1a());7 a=G o.n.1j(d.24().O(),d.24().1a());7 e=f.22(c);e.x+=4.Q;e.y-=4.Q;7 g=f.22(a);g.x-=4.Q;g.y+=4.Q;7 b=f.36(e);7 h=f.36(g);d.X(b);d.X(h);j d};8.6.1d=5(){4.20(0)};8.6.1u=5(a){7 i,M;w(i=0;i<4.D.p;i++){4.D[i].1B()}4.D=[];w(i=0;i<4.k.p;i++){M=4.k[i];M.1i=t;9(a){M.L(s)}}};8.6.34=5(b,e){7 R=4O;7 g=(e.O()-b.O())*v.1J/1F;7 f=(e.1a()-b.1a())*v.1J/1F;7 a=v.1I(g/2)*v.1I(g/2)+v.32(b.O()*v.1J/1F)*v.32(e.O()*v.1J/1F)*v.1I(f/2)*v.1I(f/2);7 c=2*v.4I(v.31(a),v.31(1-a));7 d=R*c;j d};8.6.30=5(b,a){j a.2Z(b.P())};8.6.2T=5(c){7 i,d,12,1b;7 a=4G;7 b=s;w(i=0;i<4.D.p;i++){12=4.D[i];1b=12.2O();9(1b){d=4.34(1b,c.P());9(d<a){a=d;b=12}}}9(b&&b.2G(c)){b.1A(c)}E{12=G C(4);12.1A(c);4.D.F(12)}};8.6.20=5(e){7 i,M;7 d;7 c=4;9(!4.1h){j}9(e===0){o.n.u.W(4,"4E",4);9(1L 4.1o!=="1k"){4D(4.1o);1X 4.1o}}9(4.z().1f()>3){d=G o.n.1l(4.z().1y().24(),4.z().1y().26())}E{d=G o.n.1l(G o.n.1j(2U.4C,-2W.4A),G o.n.1j(-2U.4z,2W.4L))}7 a=4.25(d);7 b=v.1W(e+4.1R,4.k.p);w(i=e;i<b;i++){M=4.k[i];9(!M.1i&&4.30(M,a)){9(!4.16||(4.16&&M.4x())){4.2T(M)}}}9(b<4.k.p){4.1o=39(5(){c.20(b)},0)}E{1X 4.1o;o.n.u.W(4,"4N",4)}};8.6.X=5(d,c){j(5(b){7 a;w(a 4w b.6){4.6[a]=b.6[a]}j 4}).4P(d,[c])};8.2o=5(a,b){7 e=0;7 c=a.p.4u();7 d=c;4t(d!==0){d=1P(d/10,10);e++}e=v.1W(e,b);j{19:c,2F:e}};8.2e=4s;8.2k=4T;8.2w="4r://o-n-4q-4p-4X.4n.4m/4l/51/4k/4j/m";8.2t="57";8.2b=[53,56,4i,4h,4g];', 62, 324, "||||this|function|prototype|var|MarkerClusterer|if||||||||||return|markers_|||maps|google|length|div_||null|false|event|Math|for|||getMap|px|center_|Cluster|clusters_|else|push|new|anchor_|cluster_|ClusterIcon|true|setMap|marker|styles_|lat|getPosition|gridSize_||height_|map_|minClusterSize_|markerClusterer_|trigger|extend|width_|clusterIcon_|||cluster|printable_|style|height|ignoreHidden_|averageCenter_|width|text|lng|center|getMarkerClusterer|redraw_|repaint|getZoom|listeners_|ready_|isAdded|LatLng|undefined|LatLngBounds|visible_|size|timerRefStatic|imageSizes_|indexOf|hide|batchSizeIE_|activeMap_|resetViewport_|imageExtension_|imagePath_|sums_|getBounds|getMaxZoom|addMarker|remove|getMarkers|left|font|180|addListener|addDomListener|sin|PI|zoomOnClick_|typeof|top|calculator_|show|parseInt|div|batchSize_|anchorIcon_|title_|maxZoom_|url|min|delete|getStyles|calculateBounds_|createClusters_|url_|fromLatLngToDivPixel|getPosFromLatLng_|getSouthWest|getExtendedBounds|getNorthEast|bounds_|removeMarker_|pushMarkerTo_|position|IMAGE_SIZES|idle|fontFamily_|BATCH_SIZE|parentNode|setupStyles_|fontWeight_|addMarkers|onRemove|BATCH_SIZE_IE|textDecoration_|mouseout|draw|CALCULATOR|mouseover|textSize_|stopPropagation|setCenter|IMAGE_EXTENSION|textColor_|backgroundPosition_|IMAGE_PATH|printable|ignoreHidden|averageCenter|background|zoomOnClick|fontStyle_|fitBounds|getCalculator|index|isMarkerInClusterBounds|updateIcon_|getZoomOnClick|onAdd|useStyle|isMarkerAlreadyAdded_|getTitle|title|getCenter|click|0px|getGridSize|innerHTML|addToClosestCluster_|85|getProjection|178|createCss|OverlayView|contains|isMarkerInBounds_|sqrt|cos|none|distanceBetweenPoints_|display|fromDivPixelToLatLng|getAverageCenter|getMinimumClusterSize|setTimeout|align|line|padding|absolute|getPrintable|number|setBatchSizeIE|getBatchSizeIE|setPrintable|setImageSizes|getImageSizes|setImagePath|backgroundPosition|setImageExtension|setIgnoreHidden|serif|sans|setZoomOnClick|setTitle|Arial|removeChild|fontFamily|setGridSize|clearInstanceListeners|removeListener|normal|fontStyle|zoom_changed|bold|msie|fontWeight|toLowerCase|userAgent|createElement|navigator|textDecoration|batchSizeIE|batchSize|textSize|fitMapToMarkers|document|setMinimumClusterSize|setMaxZoom|setStyles|calculator|imageSizes|setAverageCenter|getIgnoreHidden|black|getImageExtension|textColor|getImagePath|imageExtension|cancelBubble|imagePath|setCalculator|anchorIcon|setZoom|styles|getTotalMarkers|anchor|maxZoom|minimumClusterSize|60|gridSize|max|clusterclick|getSize|90|78|66|images|markerclustererplus|svn|com|googlecode|mousedown|library|utility|http|2000|while|toString|src|in|getVisible|img|08136444384544|48388434375|bounds_changed|02070771743472|clearTimeout|clusteringbegin|join|40000|decoration|atan2|weight|cssText|00048865625|family|clusteringend|6371|apply|color|pointer|cursor|500|appendChild|slice|clearMarkers|v3|splice|break|overlayMouseTarget|trunk|removeMarkers||removeMarker|dragend||png|object|getDraggable|getTotalClusters|getClusters|image|getPanes".split("|"), 0, {})), define("markerclusterer", function () {}), define("models/Layer", ["require", "markerclusterer", "underscore", "models/Marker"], function (e) {
            e("markerclusterer");
            var t = e("underscore"),
                n = e("models/Marker"),
                r = function (e, t, n) {
                    this.active = !1, this.initialize(e, t, n)
                };
            return t.extend(r.prototype, {
                resourceType: "Layer",
                initialize: function (e, n, r) {
                    t.bindAll(this), t.extend(this, t.omit(e, "markers")), t.each(this.attribs, function (e) {
                        e.active = !1
                    }), this.map = n, this.cluster = r, e.markers && (this.loadMarkers(e.markers), this.createClusterer())
                },
                loadMarkers: function (e) {
                    var r = this,
                        i = {
                            url: this.marker_icon,
                            size: new google.maps.Size(45, 45),
                            origin: new google.maps.Point(0, 0),
                            anchor: new google.maps.Point(22, 45)
                        };
                    this.markers = t.map(e, function (e) {
                        return new n(t.extend({
                            layer: r,
                            layer_id: r.id,
                            icon: i,
                            position: new google.maps.LatLng(e.lat, e.lng),
                            visible: !1,
                            map: r.map
                        }, e))
                    })
                },
                createClusterer: function () {
                    var e = this.cluster_icon || "./_assets/_icons/marker_cluster_" + this.slug + ".png";
                    this.clusterer = new MarkerClusterer(this.map, this.markers, {
                        gridSize: 50,
                        maxZoom: this.cluster ? 19 : 1,
                        ignoreHidden: !0,
                        averageCenter: !0,
                        styles: [{
                            url: e,
                            height: 71,
                            width: 46,
                            anchor: [7, 0],
                            textColor: "#eeffff",
                            textSize: 15,
                            zoomOnClick: !1
                        }]
                    })
                },
                toggleAttrib: function (e, n) {
                    var r = t.findWhere(this.attribs, {
                        id: e
                    });
                    if (!r) throw "Layer does not have attrib with id of " + e;
                    typeof n == "undefined" && (n = !r.active), r.active = n, this.validateMarkerVisibility()
                },
                toggle: function (e) {
                    typeof e == "undefined" && (e = !this.active), this.active = e, this.validateMarkerVisibility()
                },
                validateMarkerVisibility: function () {
                    var e = this,
                        n = t(this.attribs).chain().where({
                            active: !0
                        }).pluck("id").value();
                    t.each(this.markers, function (r) {
                        var i = e.active && (!e.attribs || t.intersection(n, r.attribs).length > 0);
                        r.setVisible(i)
                    }), this.clusterer && this.clusterer.repaint()
                },
                getHash: function () {
                    return "L" + this.id
                }
            }), r
        }), define("models/Label", ["require"], function (e) {
            function t(e) {
                this.setValues(e);
                var t = e.fillColor || "white",
                    n = e.outlineColor || "#000",
                    r = this.span_ = document.createElement("span");
                r.style.cssText = "position: relative; left: -50%; top: -8px; white-space: nowrap; padding: 2px; color: " + t + '; font-size: font-size:10px; font-family:"Helvetica Neue",Arial,FreeSans,sans-serif;text-shadow: 1px 1px 1px ' + n + ";";
                var i = this.div_ = document.createElement("div");
                i.appendChild(r), i.style.cssText = "z-index:9000; position: absolute; display: none"
            }
            return t.prototype = new google.maps.OverlayView, t.prototype.onAdd = function () {
                var e = this.getPanes().overlayLayer;
                e.appendChild(this.div_);
                var t = this;
                this.listeners_ = [google.maps.event.addListener(this, "position_changed", function () {
                    t.draw()
                }), google.maps.event.addListener(this, "text_changed", function () {
                    t.draw()
                })]
            }, t.prototype.onRemove = function () {
                this.div_.parentNode.removeChild(this.div_);
                for (var e = 0, t = this.listeners_.length; e < t; ++e) google.maps.event.removeListener(this.listeners_[e])
            }, t.prototype.draw = function () {
                var e = this.getProjection(),
                    t = e.fromLatLngToDivPixel(this.get("position")),
                    n = this.div_;
                n.style.left = t.x + "px", n.style.top = t.y + "px", n.style.display = "block", this.span_.innerHTML = this.get("text").toString()
            }, t.prototype.show = function () {
                console.log("showing label"), this.span_.style.display = "block"
            }, t.prototype.hide = function () {
                console.log("hiding label"), this.span_.style.display = "none"
            }, t.prototype.toggle = function (e) {
                typeof e == "undefined" && (e = this.span_.style.display === "none"), this.span_.style.display = e ? "block" : "none"
            }, t.prototype.onMouseEnter = function () {
                this.span_.innerHTML = this.get("longText")
            }, t.prototype.onMouseLeave = function () {
                this.span_.innerHTML = this.get("shortText")
            }, t
        }), define("models/Building", ["require", "underscore", "views/InfoWindowView", "models/Label"], function (e) {
            var t = e("underscore"),
                n = e("views/InfoWindowView"),
                r = e("models/Label"),
                i = function (e) {
                    this.initialize(e)
                };
            return t.extend(i.prototype, {
                _colors: {
                    fill: "#0a83bf",
                    stroke: "#fff",
                    fillHover: "#219BD9",
                    strokeHover: "#0a83bf",
                    fillRed: "#990000"
                },
                selected : false,
                resourceType: "Building",
                infoWindow: n,
                initialize: function (e) {
                    t.bindAll(this), t.extend(this, t.omit(e, "polygonPoints"));
                    var n = e.polygonPoints;
                    this.hash = "B" + this.id;
                    if (!e.map) return;
                    buildingList.push(this);
                    this.map = e.map || window.map, this.position = new google.maps.LatLng(this.lat, this.lng), this.createOverlay(n), this.createLabel(), this.addListeners();                    
                },
                highlight: function () {
                    this.overlay.setOptions({
                        fillColor: this._colors.fillHover,
                        strokeColor: this._colors.strokeHover,
                        fillOpacity: .45
                    })
                },
                highlightRed: function () {
                    this.overlay.setOptions({
                        fillColor: this._colors.fillRed,
                        strokeColor: this._colors.strokeHover,
                        fillOpacity: 1
                    })
                },
                unhighlight: function () {
                    if (this.selected) {
                        this.overlay.setOptions({
                            fillColor: "#fff500",
                            strokeColor: this._colors.strokeHover,
                            fillOpacity: 1
                        })
                    }
                    else {
                        this.overlay.setOptions({
                            fillColor: this._colors.fill,
                            strokeColor: this._colors.stroke,
                            fillOpacity: 1
                        })
                    }
                },
                focusb: function () {
                    this.overlay.setOptions({
                        fillColor: "#FFE498",
                        strokeColor: this._colors.strokeHover,
                        fillOpacity: 1
                    })
                },
                hoverb: function () {
                    this.overlay.setOptions({
                        fillColor: "#E31837",
                        strokeColor: this._colors.strokeHover,
                        fillOpacity: 1
                    })
                },
                addListeners: function () {
                    var e = this,
                        t = this.map,
                        n = this.overlay;
                    var strictBounds = new google.maps.LatLngBounds(new google.maps.LatLng(43.65610515821674, -79.40255999565125), new google.maps.LatLng(43.66937717697182, -79.38655257225037));
                    google.maps.event.addListener(t, "zoom_changed", function () {
                        e.label.toggle(t.getZoom() > 17)
                    }), google.maps.event.addListener(t, 'center_changed', function() {
                         if (strictBounds.contains(t.getCenter())) return;
                         var c = t.getCenter(),
                             x = c.lng(),
                             y = c.lat(),
                         maxX = strictBounds.getNorthEast().lng(),
                         maxY = strictBounds.getNorthEast().lat(),
                         minX = strictBounds.getSouthWest().lng(),
                         minY = strictBounds.getSouthWest().lat();

                        if (x < minX) x = minX;
                        if (x > maxX) x = maxX;
                        if (y < minY) y = minY;
                        if (y > maxY) y = maxY;

                        t.setCenter(new google.maps.LatLng(y, x));
                    }), google.maps.event.addListener(n, "mouseover", function () {
                        e.highlight(), e.label.onMouseEnter();
                    }), google.maps.event.addListener(n, "mouseout", function () {
                        e.focus || e.unhighlight(), e.label.onMouseLeave()
                    }), google.maps.event.addListener(n, "click", e.showInfoWindow)
                },
                showInfoWindow: function () {
                    var e = this;
                    e.infoWindow.render(e, "building"), e.highlight(), e.focus = !0;
                    var t = google.maps.event.addListener(e.infoWindow.mapInfoWindow, "closeclick", function () {
                        e.unhighlight(), e.focus = !1, google.maps.event.removeListener(t)
                    })
                },
                createOverlay: function (e) {
                    this.overlay = new google.maps.Polygon({
                        paths: t.map(e, function (e) {
                            return new google.maps.LatLng(e[0], e[1])
                        }),
                        strokeColor: this._colors.stroke,
                        strokeOpacity: 1,
                        strokeWeight: 1,
                        fillColor: this._colors.fill,
                        fillOpacity: 1,
                        map: this.map
                    })
                },
                createLabel: function () {
                    this.label = new r({
                        position: this.position,
                        text: this.code,
                        map: this.map,
                        longText: this.title,
                        shortText: this.code,
                        visible: !1
                    }), this.label.toggle(this.map.getZoom() > 17)
                },
                getHash: function () {
                    return "B" + this.id
                }
            }), i
        }), define("services/OriginsDestinations", ["require", "underscore", "jquery"], function (e) {
            var t = e("underscore"),
                n = e("jquery");
            return function () {
                var e = [],
                    r = [],
                    i = function (e, t) {
                        return n.getJSON("/path/resource_keys/" + e).done(function (e) {
                            s(e, t), a()
                        }), this
                    },
                    s = function (n, i) {
                        var s = {},
                            o = {};
                        for (var u = 0; u < n.length; u++) {
                            var a = i.get(n[u][0]),
                                f = i.get(n[u][1]);
                            a.destinations = a.destinations || [], f.origins = f.origins || [], a.destinations.push(f), f.origins.push(a), s[a.getHash()] = a, o[f.getHash()] = f
                        }
                        e = t(s).values(), r = t(o).values()
                    },
                    o = [],
                    u = function (e) {
                        o.push(e)
                    },
                    a = function () {
                        for (var t = 0; t < o.length; t++) o[t](e, r)
                    };
                return {
                    origins: e,
                    destinations: r,
                    initialize: i,
                    onLoad: u
                }
            }()
        }), define("services/Resources", ["require", "underscore", "models/Marker", "models/Layer", "models/Building", "services/OriginsDestinations"], function (e) {
            var t = e("underscore"),
                n = e("models/Marker"),
                r = e("models/Layer"),
                i = e("models/Building"),
                s = e("services/OriginsDestinations"),
                o = function () {
                    var e, n, o = [],
                        u = {},
                        a = {},
                        f = {},
                        l = {},
                        c = function (e) {
                            l[e.getHash()] = e;
                            switch (e.resourceType) {
                            case "Marker":
                                u[e.id] = e;
                                break;
                            case "Building":
                                a[e.id] = e;
                                break;
                            case "Layer":
                                f[e.id] = e
                            }
                        },
                        h = function (e) {
                            return l[e]
                        },
                        p = function (t) {
                            return e = t.map, n = t.mapData, d(e, n), v(e, n), n.has_paths && s.initialize(n.slug, this), m("load"), this
                        },
                        d = function (e, n) {
                            t.each(n.layers, function (i) {
                                var s = new r(i, e, n.cluster);
                                t(s.markers).each(c), c(s)
                            })
                        },
                        v = function (e, n) {
                            var r = n.regions;
                            t.each(r.buildings, function (r) {
                                var s = t.findWhere(n.buildings, {
                                    id: r.id
                                });
                                s.polygonPoints = r.points, s.map = e, c(new i(s))
                            })
                        },
                        m = function (e) {
                            t(o[e]).each(function (e) {
                                e()
                            })
                        },
                        g = function (e, t) {
                            o[e] = o[e] || [], o[e].push(t)
                        };
                    return {
                        Markers: u,
                        Buildings: a,
                        Layers: f,
                        Everything: l,
                        add: c,
                        get: h,
                        OriginsDestinations: s,
                        initialize: p,
                        on: g,
                        trigger: m
                    }
                }();
            return o
        }), define("services/UofTMap", ["require", "underscore", "jquery", "services/Resources"], function (e) {
            var t = e("underscore"),
                n = e("jquery"),
                r = e("services/Resources"),
                i = {
                    callbacks: [],
                    initialize: function (e) {
                        var n = this;
                        t.bindAll(this), this.mapSlug = e.mapSlug || "utsg", this.fetchMapData(this.mapSlug).done(this.mapDataLoaded)
                    },
                    fetchMapData: function (e) {
                        var t = new n.Deferred,
                            r = n.getJSON("maps/map." + e + ".json"),
                            i = n.getJSON("maps/regions." + e + ".json");
                        return n.when(i, r).done(function (e, n) {
                            var r = e[0],
                                i = n[0];
                            i.regions = r, t.resolve(i)
                        }), t.promise()
                    },
                    mapDataLoaded: function (e) {
                        this.map = this.createMap({
                            zoom: e.zoom,
                            center: new google.maps.LatLng(e.lat, e.lng)
                        }), this.data = e, this.trigger("load")
                    },
                    createMap: function (e) {
                        var n = [{
                                featureType: "landscape.man_made",
                                elementType: "geometry",
                                stylers: [{
                                    visibility: "off"
                                }]
                            }, {
                                featureType: "poi",
                                elementType: "labels",
                                stylers: [{
                                    visibility: "off"
                                }]
                            }, {
                                featureType: "landscape.man_made",
                                elementType: "all",
                                stylers: [{
                                    visibility: "off"
                                }]
                            }, {
                                featureType: "poi.medical",
                                elementType: "all",
                                stylers: [{
                                    visibility: "off"
                                }]
                            }, {
                                featureType: "transit",
                                elementType: "all",
                                stylers: [{
                                    visibility: "off"
                                }]
                            }],
                            r = {
                                mapTypeId: google.maps.MapTypeId.ROADMAP,
                                panControl: !0,
                                panControlOptions: {
                                    position: google.maps.ControlPosition.RIGHT_TOP
                                },
                                mapTypeControl: !0,
                                mapTypeControlOptions: {
                                    mapTypeIds: ["STG", google.maps.MapTypeId.SATELLITE],
                                    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                                    position: google.maps.ControlPosition.TOP_RIGHT
                                },
                                keyboardShortcuts: !1,
                                navigationControl: !0,
                                scrollwheel: !1,
                                minZoom: 15,
                                navigationControlOptions: {
                                    style: google.maps.NavigationControlStyle.SMALL
                                },
                                zoomControlOptions: {
                                    position: google.maps.ControlPosition.RIGHT_TOP
                                }
                            };
                        r = t.extend(r, e);
                        var i = {
                                name: "Map View",
                                alt: "Map View"
                            },
                            s = new google.maps.StyledMapType(n, i),
                            o = new google.maps.Map(document.getElementById("map_canvas"), r);
                        return o.mapTypes.set("STG", s), o.setMapTypeId("STG"), o
                    },
                    search: function (e, t) {
                        t = t || this.mapSlug, e = encodeURIComponent(e);
                        var r = n.getJSON("/data/map/" + t + "/search/" + e + "/only_id").done(this.displaySearchResults);
                    },
                    displaySearchResults: function (e) {
                        var i = this,
                            s = e.buildings.length,
                            o = e.markers.length;
                        n("#search-results").show(), n("#search-results-buildings").toggle(s > 0), n("#search-results-markers").toggle(o > 0), n("#search-results-none").toggle(s <= 0 && o <= 0);
                        var u = t(r.Buildings).chain().filter(function (n) {
                            return t(e.buildings).contains(n.id)
                        }).map(function (e) {
                            return '<li><span class="building-box"></span><a href="javascript:void(0);" title="' + e.title + '" data-id="' + e.id + '">' + e.title + "</a></li>"
                        }).value().join("");
                        n("#search-results-buildings ul").html(u), n("#search-results-buildings ul").on("click", "a", function (e) {
                            var t = n(this).attr("data-id"),
                                i = r.Buildings[t];
                            i.showInfoWindow()
                        }), t(this.MarkerSearchResults).each(function (e) {
                            e.resetIcon().setVisible(!1)
                        }), this.MarkerSearchResults = t(r.Markers).filter(function (n) {
                            return t(e.markers).contains(n.id)
                        });
                        var a = t(this.MarkerSearchResults).map(function (e, t) {
                            var n = "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=" + (t + 1) + "|AA0000|FFFFFF";
                            return e.setIcon(n), e.setVisible(!0), e.layer.clusterer.setMaxZoom(1), '<li><img src="' + n + '" alt=""/><a href="javascript:void(0);" data-id="' + e.id + '">' + e.title + "</a></li>"
                        }).join("");
                        n("#search-results-markers ul").html(a), n("#search-results-markers ul").on("click", "a", function (e) {
                            var t = n(this).attr("data-id"),
                                i = r.Markers[t];
                            i.showInfoWindow()
                        }), s > 0 ? n("#search-results-buildings ul li a").focus() : o > 0 && n("#search-results-markers ul li a").focus()
                    },
                    focusPreselected: function () {
                        if (this.preselected) {
                            var e = this.preselected.id;
                            switch (this.preselected.type) {
                            case "building":
                                var t = r.Buildings[e];
                                t.highlight(), t.infoWindow.render(t, "building"), this.map.setCenter(t.position);
                                break;
                            case "marker":
                                console.log(e);
                                var n = r.Markers[e];
                                n.setVisible(!0), n.infoWindow.render(n, "marker")
                            }
                        }
                    },
                    trigger: function (e) {
                        t(this.callbacks[e]).each(function (e) {
                            e()
                        })
                    },
                    on: function (e, t) {
                        this.callbacks[e] = this.callbacks[e] || [], this.callbacks[e].push(t)
                    }
                };
            return i
        }), define("EventListeners", ["require", "jquery", "services/UofTMap", "services/Resources"], function (e) {
            var t = e("jquery"),
                n = e("services/UofTMap"),
                r = e("services/Resources");
            t(document).ready(function () {
                t("form.search").on("submit", function () {
                    var e = t(this).find(".js-search-input"),
                        r = e.val();
                    n.search(r);
                    var i = t(".js-search-input");
                    return i.each(function (t) {
                        this !== e[0] && (this.value = r)
                    }), t("#tools a, #tools li").removeClass("current"), t(".search_aside").addClass("current").closest("li").addClass("current"), t("#layers, #directions").hide(250), t("#search_aside").show(250), !1
                }), t("#toggle").click(function () {
                    t("#sidebar").toggleClass("sidebar--hidden"), t("body").toggleClass("sidebar_open")
                }), t("#tools a").click(function () {
                    return t("#tools a, #tools li").removeClass("current"), t(this).addClass("current").closest("li").addClass("current"), !1
                }), t("#tools a").click(function () {
                    return t("#tools .layers").hasClass("current") && (t("#search_aside, #paths, #directions").hide(250), t("#sidebar #layers").show(250), _(n.MarkerSearchResults).each(function (e) {
                        e.resetIcon()
                    }), _(r.Layers).each(function (e) {
                        e.clusterer && e.clusterer.getMaxZoom() === 1 && n.data.cluster && e.clusterer.setMaxZoom(19)
                    })), t("#tools .search_aside").hasClass("current") && (t("#layers, #paths, #directions").hide(250), t("#search_aside").show(250)), t("#tools .paths").hasClass("current") && (t("#layers, #search_aside, #directions").hide(250), t("#paths").show(250)), t("#tools .directions").hasClass("current") && (t("#layers, #paths, #search_aside").hide(250), t("#sidebar #directions").show(250)), !1
                }), window.location.hash === "#dmi" && (t("#layers, #search_aside").hide(250), t("#sidebar #directions").show(250), t("#tools a, #tools li").removeClass("current"), t("#tools .directions").addClass("current").closest("li").addClass("current"));
                if (document.location.search !== "") {
                    t("#layers, #directions").hide(250), t("#sidebar #search_aside").show(250), t("#tools a, #tools li").removeClass("current"), t("#tools .search_aside").addClass("current").closest("li").addClass("current");
                    var e = document.location.search;
                    e = e.substring(1);
                    var i = e.split("&")
                }
                t("html").is(".ie8, .ie7, .ie6") && (t("#layers .multi li").filter(":even").addClass("even"), t("#layers .multi li").filter(":odd").addClass("odd")), t("#dmi").click(function () {
                    return t("#layers, #search_aside").hide(250), t("#sidebar #directions").show(250), t("#tools a, #tools li").removeClass("current"), t("#tools .directions").addClass("current").parent().addClass("current"), !1
                })
            })
        }), define("views/LayerListView", ["require", "underscore", "jquery"], function (e) {
            var t = e("underscore"),
                n = e("jquery"),
                r = {
                    defaults: {
                        el: "#layers"
                    },
                    events: {
                        "click .link_toggle": "toggleLayer",
                        "click .multi > .link_toggle": "toggleCollapsible",
                        "change .multi input[type=checkbox]": "layerAttribsChanged",
                        "click .js-attribs-reset a": "clearLayerAttribs",
                        "click .js-attribs-checkall a": "checkallLayerAttribs"
                    },
                    bindEvents: function () {
                        var e = this;
                        t.each(this.events, function (n, r) {
                            var i = r.split(" ")[0],
                                s = r.slice(r.indexOf(" "));
                            t.isString(n) && (n = e[n]), e.$el.on(i, s, n)
                        })
                    },
                    initialize: function (e) {
                        t.bindAll(this), e = e || {}, this.options = t.defaults(e, this.defaults), this.layers = e.model, this.$el = n(this.options.el), this.bindEvents()
                    },
                    clearLayerAttribs: function (e) {
                        n(e.currentTarget).closest(".multi").find("input:checked").each(function (e, t) {
                            n(t).prop("checked", !1).change()
                        })
                    },
                    checkallLayerAttribs: function (e) {
                        n(e.currentTarget).closest(".multi").find("input").not(":checked").each(function (e, t) {
                            n(t).prop("checked", !0).change()
                        })
                    },
                    toggleLayer: function (e) {
                        var r = n(e.currentTarget).closest(".js-layer"),
                            i = r.data("layer-id");
                        r.toggleClass("active");
                        var s = t.findWhere(this.layers, {
                            id: i
                        });
                        s.toggle()
                    },
                    layerAttribsChanged: function (e) {
                        var r = n(e.currentTarget).closest(".js-layer").data("layer-id"),
                            i = n(e.currentTarget).data("attr-id"),
                            s = n(e.currentTarget).closest(".js-layer").find("input:checked").map(function (e, t) {
                                return n(t).data("attr-id")
                            }),
                            o = !0,
                            u = t.findWhere(this.layers, {
                                id: r
                            });
                        u.toggleAttrib(i)
                    },
                    toggleCollapsible: function (e) {
                        var t = n(e.currentTarget).closest(".multi").find("ul").first();
                        t.is(":visible") ? t.find(".js-attribs-reset a").click() : t.find(".js-attribs-checkall a").click(), t.slideToggle()
                    }
                };
            return r
        }), define("views/OGDirectionsView", ["require", "underscore", "jquery"], function (e) {
            var t = e("underscore"),
                n = e("jquery"),
                r = {
                    mapContainer: document.getElementById("map_canvas"),
                    dirContainer: document.getElementById("dir-container"),
                    travelModeInput: document.getElementById("travel-mode-input"),
                    unitInput: document.getElementById("unit-input"),
                    dirService: new google.maps.DirectionsService,
                    dirRenderer: new google.maps.DirectionsRenderer,
                    map: null,
                    showDirections: function (e, t) {
                        if (t != google.maps.DirectionsStatus.OK) return;
                        r.dirRenderer.setMap(r.map), r.dirRenderer.setPanel(r.dirContainer), r.dirRenderer.setDirections(e)
                    },
                    getSelectedTravelMode: function () {
                        var e = r.travelModeInput.options[r.travelModeInput.selectedIndex].value;
                        return e == "driving" ? e = google.maps.DirectionsTravelMode.DRIVING : e == "bicycling" ? e = google.maps.DirectionsTravelMode.BICYCLING : e == "walking" ? e = google.maps.DirectionsTravelMode.WALKING : alert("Unsupported travel mode."), e
                    },
                    getSelectedUnitSystem: function () {
                        return r.unitInput.value == "metric" ? google.maps.DirectionsUnitSystem.METRIC : google.maps.DirectionsUnitSystem.IMPERIAL
                    },
                    getDirections: function () {
                        var e = n("#from-input").val(),
                            t = n("#to-input").val(),
                            i = {
                                origin: e,
                                destination: t,
                                travelMode: r.getSelectedTravelMode(),
                                unitSystem: r.getSelectedUnitSystem(),
                                provideRouteAlternatives: !0,
                                region: "ca"
                            };
                        r.dirService.route(i, r.showDirections), r.infoWindow.hide()
                    },
                    clearDirections: function () {
                        r.dirRenderer.setMap(null), document.getElementById("dir-container").innerHTML = ""
                    },
                    showDirectionsTab: function () {
                        n("#tools a").removeClass("current"), n("#tools .directions").addClass("current"), n("#layers, #search_aside").hide(), n("#sidebar #directions").show(), n(".from-button:checked").length && (n("#to-input").val(n(".select-direction").val()), n("#from-input").val(n(".address-field").val())), n(".to-button:checked").length && (n("#from-input").val(n(".select-direction").val()), n("#to-input").val(n(".address-field").val())), r.getDirections()
                    },
                    bindEvents: function () {
                        n(".js-get-og-directions").click(r.getDirections), n(".js-clear-og-directions").click(r.clearDirections), n("#travel-mode-input").change(r.getDirections), n("body").on("click", ".js-iw-tab-content .js-get-og-directions", function (e) {
                            return r.showDirectionsTab(), !1
                        })
                    },
                    init: function (e) {
                        e = e || {}, this.map = e.map, this.infoWindow = e.infoWindow, this.bindEvents()
                    }
                };
            return r
        }),
        function (e, t) {
            function n(e, t) {
                var n = e.x - t.x,
                    r = e.y - t.y;
                return n * n + r * r
            }

            function r(e, t, n) {
                var r = t.x,
                    i = t.y,
                    s = n.x - r,
                    o = n.y - i,
                    u;
                if (s !== 0 || o !== 0) u = ((e.x - r) * s + (e.y - i) * o) / (s * s + o * o), u > 1 ? (r = n.x, i = n.y) : u > 0 && (r += s * u, i += o * u);
                return s = e.x - r, o = e.y - i, s * s + o * o
            }

            function i(e, t) {
                var r, i = e.length,
                    s, o = e[0],
                    u = [o];
                for (r = 1; r < i; r++) s = e[r], n(s, o) > t && (u.push(s), o = s);
                return o !== s && u.push(s), u
            }

            function s(e, n) {
                var i = e.length,
                    s = typeof Uint8Array != t + "" ? Uint8Array : Array,
                    o = new s(i),
                    u = 0,
                    a = i - 1,
                    f, l, c, h, p = [],
                    d = [],
                    v = [];
                o[u] = o[a] = 1;
                while (a) {
                    l = 0;
                    for (f = u + 1; f < a; f++) c = r(e[f], e[u], e[a]), c > l && (h = f, l = c);
                    l > n && (o[h] = 1, p.push(u), d.push(h), p.push(h), d.push(a)), u = p.pop(), a = d.pop()
                }
                for (f = 0; f < i; f++) o[f] && v.push(e[f]);
                return v
            }

            function o(e, n, r) {
                var o = n !== t ? n * n : 1;
                return e = r ? e : i(e, o), e = s(e, o), e
            }
            typeof exports == "object" ? module.exports = o : typeof define == "function" && define.amd ? define("simplify", [], function () {
                return o
            }) : e.simplify = o
        }(this), define("models/Path", ["require", "underscore"], function (e) {
            var t = e("underscore"),
                n = function (e) {
                    this.admin = e.admin, google.maps.Polyline.call(this, e), t.bindAll(this), this.initialize()
                };
            return t.extend(n.prototype, google.maps.Polyline.prototype, {
                fromMarkerPos: [],
                toMarkerPos: [],
                pathHasChanged: !1,
                resourceType: "Path",
                initialize: function () {
                    t.bindAll(this), this.callbacks = {}
                },
                clear: function () {
                    this.setMap(null)
                },
                fetch: function (e, n) {
                    var r = this;
                    this.originHash = e.getHash(), this.destinationHash = n.getHash();
                    var i = "/path/" + this.originHash + "/" + this.destinationHash,
                        s;
                    $.getJSON(i).done(function (e) {
                        var n = e.coordinates;
                        r.directions = e.directions, r.fromMarkerPos = e.fromMarkerPos, r.toMarkerPos = e.toMarkerPos, s = t(n).map(function (e) {
                            return new google.maps.LatLng(e[0], e[1])
                        })
                    }).fail(function (t) {
                        var i, o;
                        e.getPosition ? (i = e.getPosition(), r.fromMarkerPos = [i.jb, i.kb]) : (i = new google.maps.LatLng(e.lat, e.lng), r.fromMarkerPos = [e.lat, e.lng]), n.getPosition ? (o = n.getPosition(), r.toMarkerPos = [o.jb, o.kb]) : (o = new google.maps.LatLng(n.lat, n.lng), r.toMarkerPos = [n.lat, n.lng]), s = [i, o]
                    }).always(function () {
                        r.setPath(s), r.trigger("load")
                    })
                },
                save: function () {
                    if (this.admin === "add") {
                        var e = $("#locationFrom").val(),
                            n = $("#locationTo").val();
                        if (e === "" || n === "") return window.alert("Please select a path"), !1
                    }
                    var r = this,
                        i = t(this.getPath().getArray()).map(function (e) {
                            return [e.lat(), e.lng()]
                        }),
                        s = this.fromMarkerPos,
                        o = this.toMarkerPos,
                        u = JSON.stringify({
                            coordinates: i,
                            fromMarkerPos: s,
                            toMarkerPos: o
                        }),
                        a = $("#is_active").is(":checked") === !0 ? 1 : 0,
                        f = "/map_admin/paths/save/" + this.mapSlug + "/" + this.originHash + "/" + this.destinationHash;
                    $.post(f, {
                        path: u,
                        active: a
                    }).done(function () {
                        r.trigger("save")
                    }).fail(function (e) {
                        r.trigger("save:failed")
                    })
                },
                trigger: function (e) {
                    t(this.callbacks[e]).each(function (e) {
                        e()
                    })
                },
                on: function (e, t) {
                    this.callbacks[e] = this.callbacks[e] || [], this.callbacks[e].push(t)
                },
                getHash: function () {}
            }), n
        }), define("hbs!templates/paths/widget", ["hbs", "handlebars"], function (e, t) {
            var n = t.template(function (e, t, n, r, i) {
                return n = n || e.helpers, '<div id="paths" class="paths" >\n    <h2>Paths</h2>\n    <p>\n    <label for="locationFrom">From:</label>\n    <select id="locationFrom" data-placeholder="Select starting location" class="chzn-select js-paths js-paths-from">\n        <option></option>\n    </select>\n    </p>\n    <p>\n    <label for="locationTo">To:</label>\n    <select id="locationTo" data-placeholder="Select destination" class="chzn-select js-paths js-paths-to">\n        <option></option>\n    </select>\n    </p>\n    <div>\n        <input type=button value="Clear Results" class="js-paths-clear"/>\n    </div>\n    <div class="directions"></div>\n</div>      \n'
            });
            return t.registerPartial("templates_paths_widget", n), n
        }), define("hbs!templates/paths/admin", ["hbs", "handlebars"], function (e, t) {
            var n = t.template(function (e, t, n, r, i) {
                return n = n || e.helpers, '<div id="paths" class="paths" >\n\n	<p>\n	<label for="locationFrom">From:</label>\n	<select id="locationFrom" data-placeholder="Select starting location" class="chzn-select js-paths js-paths-from">\n		<option></option>\n	</select>\n	</p>\n	<p>\n	<label for="locationTo">To:</label>\n	<select id="locationTo" data-placeholder="Select destination" class="chzn-select js-paths js-paths-to">\n		<option></option>\n	</select>\n	</p>\n\n    <div>\n\n		<li><label>&nbsp;</label>	\n        <input type=button value="Reset Path"  class="js-paths-clear button cancel"/>\n    </div>\n    <div class="directions"></div>\n</div>      \n'
            });
            return t.registerPartial("templates_paths_admin", n), n
        }), define("hbs!templates/paths/options", ["hbs", "handlebars"], function (e, t) {
            var n = t.template(function (e, t, n, r, i) {
                function l(e, t) {
                    var r = "",
                        i, s;
                    return r += '\n    <option value="', s = n.getHash, s ? i = s.call(e, {
                        hash: {}
                    }) : (i = e.getHash, i = typeof i === u ? i() : i), r += a(i) + '">', s = n.title, s ? i = s.call(e, {
                        hash: {}
                    }) : (i = e.title, i = typeof i === u ? i() : i), r += a(i) + "</option>\n    ", r
                }

                function c(e, t) {
                    var r = "",
                        i, s;
                    r += '\n<optgroup label="', s = n.title, s ? i = s.call(e, {
                        hash: {}
                    }) : (i = e.title, i = typeof i === u ? i() : i), r += a(i) + '">\n    ', i = e.markers, i = n.each.call(e, i, {
                        hash: {},
                        inverse: f.noop,
                        fn: f.program(4, h, t)
                    });
                    if (i || i === 0) r += i;
                    return r += "\n</optgroup>\n", r
                }

                function h(e, t) {
                    var r = "",
                        i, s;
                    return r += '\n    <option value="', s = n.getHash, s ? i = s.call(e, {
                        hash: {}
                    }) : (i = e.getHash, i = typeof i === u ? i() : i), r += a(i) + '">', s = n.title, s ? i = s.call(e, {
                        hash: {}
                    }) : (i = e.title, i = typeof i === u ? i() : i), r += a(i) + "</option>\n    ", r
                }
                n = n || e.helpers;
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression,
                    f = this;
                s += '<option></option>\n<optgroup label="Buildings">\n    ', o = t.buildings, o = n.each.call(t, o, {
                    hash: {},
                    inverse: f.noop,
                    fn: f.program(1, l, i)
                });
                if (o || o === 0) s += o;
                s += "\n</optgroup>\n", o = t.layers, o = n.each.call(t, o, {
                    hash: {},
                    inverse: f.noop,
                    fn: f.program(3, c, i)
                });
                if (o || o === 0) s += o;
                return s += "\n", s
            });
            return t.registerPartial("templates_paths_options", n), n
        }), define("hbs!templates/paths/directions", ["hbs", "handlebars"], function (e, t) {
            var n = t.template(function (e, t, n, r, i) {
                function c(e, t) {
                    var r = "",
                        i, s;
                    r += '\n    <li>\n        <i class="icon-arrow-', s = n.icon, s ? i = s.call(e, {
                        hash: {}
                    }) : (i = e.icon, i = typeof i === a ? i() : i), r += f(i) + '"></i> <span class="directions__text"> ', s = n.instructions, s ? i = s.call(e, {
                        hash: {}
                    }) : (i = e.instructions, i = typeof i === a ? i() : i), r += f(i) + '</span>\n        <div class="directions__separator"><span class="directions__distance">', s = n.distance, s ? i = s.call(e, {
                        hash: {}
                    }) : (i = e.distance, i = typeof i === a ? i() : i), r += f(i) + " ", i = e.distance, i = n["if"].call(e, i, {
                        hash: {},
                        inverse: l.noop,
                        fn: l.program(2, h, t)
                    });
                    if (i || i === 0) r += i;
                    return r += "</span></div>\n    </li>\n    ", r
                }

                function h(e, t) {
                    return "m"
                }
                n = n || e.helpers;
                var s = "",
                    o, u, a = "function",
                    f = this.escapeExpression,
                    l = this;
                s += "<h3>Directions</h3>\n<p>", u = n.totalDistance, u ? o = u.call(t, {
                    hash: {}
                }) : (o = t.totalDistance, o = typeof o === a ? o() : o), s += f(o) + " meters - about ", u = n.totalTime, u ? o = u.call(t, {
                    hash: {}
                }) : (o = t.totalTime, o = typeof o === a ? o() : o), s += f(o) + ' minutes</p>\n<div class="directiosn__origin"><img src="http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=A|c33029|ffffff" class="directions__marker-a" />', u = n.startingLocation, u ? o = u.call(t, {
                    hash: {}
                }) : (o = t.startingLocation, o = typeof o === a ? o() : o), s += f(o) + '</div>\n<ol class="directions__list">\n    ', o = t.directions, o = n.each.call(t, o, {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(1, c, i)
                });
                if (o || o === 0) s += o;
                return s += '\n</ol>\n<div class="directions__destination"><img src="//maps.gstatic.com/mapfiles/markers2/marker_greenB.png" class="directions__marker-b" />', u = n.destinationLocation, u ? o = u.call(t, {
                    hash: {}
                }) : (o = t.destinationLocation, o = typeof o === a ? o() : o), s += f(o) + "</div>\n", s
            });
            return t.registerPartial("templates_paths_directions", n), n
        }),
        function () {
            var e;
            e = function () {
                function e() {
                    this.options_index = 0, this.parsed = []
                }
                return e.prototype.add_node = function (e) {
                    return e.nodeName.toUpperCase() === "OPTGROUP" ? this.add_group(e) : this.add_option(e)
                }, e.prototype.add_group = function (e) {
                    var t, n, r, i, s, o;
                    t = this.parsed.length, this.parsed.push({
                        array_index: t,
                        group: !0,
                        label: e.label,
                        children: 0,
                        disabled: e.disabled
                    }), s = e.childNodes, o = [];
                    for (r = 0, i = s.length; r < i; r++) n = s[r], o.push(this.add_option(n, t, e.disabled));
                    return o
                }, e.prototype.add_option = function (e, t, n) {
                    if (e.nodeName.toUpperCase() === "OPTION") return e.text !== "" ? (t != null && (this.parsed[t].children += 1), this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        value: e.value,
                        text: e.text,
                        html: e.innerHTML,
                        selected: e.selected,
                        disabled: n === !0 ? n : e.disabled,
                        group_array_index: t,
                        classes: e.className,
                        style: e.style.cssText
                    })) : this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        empty: !0
                    }), this.options_index += 1
                }, e
            }(), e.select_to_array = function (t) {
                var n, r, i, s, o;
                r = new e, o = t.childNodes;
                for (i = 0, s = o.length; i < s; i++) n = o[i], r.add_node(n);
                return r.parsed
            }, this.SelectParser = e
        }.call(this),
        function () {
            var e, t;
            t = this, e = function () {
                function e(t, n) {
                    this.form_field = t, this.options = n != null ? n : {};
                    if (!e.browser_is_supported()) return;
                    this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.finish_setup()
                }
                return e.prototype.set_default_values = function () {
                    var e = this;
                    return this.click_test_action = function (t) {
                        return e.test_active_click(t)
                    }, this.activate_action = function (t) {
                        return e.activate_field(t)
                    }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.result_single_selected = null, this.allow_single_deselect = this.options.allow_single_deselect != null && this.form_field.options[0] != null && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = this.options.single_backstroke_delete || !1, this.max_selected_options = this.options.max_selected_options || Infinity, this.inherit_select_classes = this.options.inherit_select_classes || !1
                }, e.prototype.set_default_text = function () {
                    return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || e.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || e.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || e.default_no_result_text
                }, e.prototype.mouse_enter = function () {
                    return this.mouse_on_container = !0
                }, e.prototype.mouse_leave = function () {
                    return this.mouse_on_container = !1
                }, e.prototype.input_focus = function (e) {
                    var t = this;
                    if (this.is_multiple) {
                        if (!this.active_field) return setTimeout(function () {
                            return t.container_mousedown()
                        }, 50)
                    } else if (!this.active_field) return this.activate_field()
                }, e.prototype.input_blur = function (e) {
                    var t = this;
                    if (!this.mouse_on_container) return this.active_field = !1, setTimeout(function () {
                        return t.blur_test()
                    }, 100)
                }, e.prototype.result_add_option = function (e) {
                    var t, n;
                    return e.disabled ? "" : (e.dom_id = this.container_id + "_o_" + e.array_index, t = e.selected && this.is_multiple ? [] : ["active-result"], e.selected && t.push("result-selected"), e.group_array_index != null && t.push("group-option"), e.classes !== "" && t.push(e.classes), n = e.style.cssText !== "" ? ' style="' + e.style + '"' : "", '<li id="' + e.dom_id + '" class="' + t.join(" ") + '"' + n + ">" + e.html + "</li>")
                }, e.prototype.results_update_field = function () {
                    return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.result_single_selected = null, this.results_build()
                }, e.prototype.results_toggle = function () {
                    return this.results_showing ? this.results_hide() : this.results_show()
                }, e.prototype.results_search = function (e) {
                    return this.results_showing ? this.winnow_results() : this.results_show()
                }, e.prototype.choices_count = function () {
                    var e, t, n, r;
                    if (this.selected_option_count != null) return this.selected_option_count;
                    this.selected_option_count = 0, r = this.form_field.options;
                    for (t = 0, n = r.length; t < n; t++) e = r[t], e.selected && (this.selected_option_count += 1);
                    return this.selected_option_count
                }, e.prototype.choices_click = function (e) {
                    e.preventDefault();
                    if (!this.results_showing) return this.results_show()
                }, e.prototype.keyup_checker = function (e) {
                    var t, n;
                    t = (n = e.which) != null ? n : e.keyCode, this.search_field_scale();
                    switch (t) {
                    case 8:
                        if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                        if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                        break;
                    case 13:
                        e.preventDefault();
                        if (this.results_showing) return this.result_select(e);
                        break;
                    case 27:
                        return this.results_showing && this.results_hide(), !0;
                    case 9:
                    case 38:
                    case 40:
                    case 16:
                    case 91:
                    case 17:
                        break;
                    default:
                        return this.results_search()
                    }
                }, e.prototype.generate_field_id = function () {
                    var e;
                    return e = this.generate_random_id(), this.form_field.id = e, e
                }, e.prototype.generate_random_char = function () {
                    var e, t, n;
                    return e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", n = Math.floor(Math.random() * e.length), t = e.substring(n, n + 1)
                }, e.prototype.container_width = function () {
                    return this.options.width != null ? this.options.width : "" + this.form_field.offsetWidth + "px"
                }, e.browser_is_supported = function () {
                    var e;
                    return window.navigator.appName === "Microsoft Internet Explorer" ? null !== (e = document.documentMode) && e >= 8 : !0
                }, e.default_multiple_text = "Select Some Options", e.default_single_text = "Select an Option", e.default_no_result_text = "No results match", e
            }(), t.AbstractChosen = e
        }.call(this),
        function () {
            var e, t, n, r, i = {}.hasOwnProperty,
                s = function (e, t) {
                    function n() {
                        this.constructor = e
                    }
                    for (var r in t) i.call(t, r) && (e[r] = t[r]);
                    return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                };
            n = this, e = jQuery, e.fn.extend({
                chosen: function (n) {
                    return AbstractChosen.browser_is_supported() ? this.each(function (r) {
                        var i;
                        i = e(this);
                        if (!i.hasClass("chzn-done")) return i.data("chosen", new t(this, n))
                    }) : this
                }
            }), t = function (t) {
                function i() {
                    return r = i.__super__.constructor.apply(this, arguments), r
                }
                return s(i, t), i.prototype.setup = function () {
                    return this.form_field_jq = e(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chzn-rtl")
                }, i.prototype.finish_setup = function () {
                    return this.form_field_jq.addClass("chzn-done")
                }, i.prototype.set_up_html = function () {
                    var t, n;
                    return this.container_id = this.form_field.id.length ? this.form_field.id.replace(/[^\w]/g, "_") : this.generate_field_id(), this.container_id += "_chzn", t = ["chzn-container"], t.push("chzn-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && t.push(this.form_field.className), this.is_rtl && t.push("chzn-rtl"), n = {
                        id: this.container_id,
                        "class": t.join(" "),
                        style: "width: " + this.container_width() + ";",
                        title: this.form_field.title
                    }, this.container = e("<div />", n), this.is_multiple ? this.container.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop"><ul class="chzn-results"></ul></div>') : this.container.html('<a href="javascript:void(0)" class="chzn-single chzn-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chzn-drop"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chzn-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chzn-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chzn-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chzn-search").first(), this.selected_item = this.container.find(".chzn-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior(), this.form_field_jq.trigger("liszt:ready", {
                        chosen: this
                    })
                }, i.prototype.register_observers = function () {
                    var e = this;
                    return this.container.mousedown(function (t) {
                        e.container_mousedown(t)
                    }), this.container.mouseup(function (t) {
                        e.container_mouseup(t)
                    }), this.container.mouseenter(function (t) {
                        e.mouse_enter(t)
                    }), this.container.mouseleave(function (t) {
                        e.mouse_leave(t)
                    }), this.search_results.mouseup(function (t) {
                        e.search_results_mouseup(t)
                    }), this.search_results.mouseover(function (t) {
                        e.search_results_mouseover(t)
                    }), this.search_results.mouseout(function (t) {
                        e.search_results_mouseout(t)
                    }), this.search_results.bind("mousewheel DOMMouseScroll", function (t) {
                        e.search_results_mousewheel(t)
                    }), this.form_field_jq.bind("liszt:updated", function (t) {
                        e.results_update_field(t)
                    }), this.form_field_jq.bind("liszt:activate", function (t) {
                        e.activate_field(t)
                    }), this.form_field_jq.bind("liszt:open", function (t) {
                        e.container_mousedown(t)
                    }), this.search_field.blur(function (t) {
                        e.input_blur(t)
                    }), this.search_field.keyup(function (t) {
                        e.keyup_checker(t)
                    }), this.search_field.keydown(function (t) {
                        e.keydown_checker(t)
                    }), this.search_field.focus(function (t) {
                        e.input_focus(t)
                    }), this.is_multiple ? this.search_choices.click(function (t) {
                        e.choices_click(t)
                    }) : this.container.click(function (e) {
                        e.preventDefault()
                    })
                }, i.prototype.search_field_disabled = function () {
                    this.is_disabled = this.form_field_jq[0].disabled;
                    if (this.is_disabled) return this.container.addClass("chzn-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus", this.activate_action), this.close_field();
                    this.container.removeClass("chzn-disabled"), this.search_field[0].disabled = !1;
                    if (!this.is_multiple) return this.selected_item.bind("focus", this.activate_action)
                }, i.prototype.container_mousedown = function (t) {
                    if (!this.is_disabled) {
                        t && t.type === "mousedown" && !this.results_showing && t.preventDefault();
                        if (t == null || !e(t.target).hasClass("search-choice-close")) return this.active_field ? !this.is_multiple && t && (e(t.target)[0] === this.selected_item[0] || e(t.target).parents("a.chzn-single").length) && (t.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), e(document).click(this.click_test_action), this.results_show()), this.activate_field()
                    }
                }, i.prototype.container_mouseup = function (e) {
                    if (e.target.nodeName === "ABBR" && !this.is_disabled) return this.results_reset(e)
                }, i.prototype.search_results_mousewheel = function (e) {
                    var t, n, r;
                    t = -((n = e.originalEvent) != null ? n.wheelDelta : void 0) || ((r = e.originialEvent) != null ? r.detail : void 0);
                    if (t != null) return e.preventDefault(), e.type === "DOMMouseScroll" && (t *= 40), this.search_results.scrollTop(t + this.search_results.scrollTop())
                }, i.prototype.blur_test = function (e) {
                    if (!this.active_field && this.container.hasClass("chzn-container-active")) return this.close_field()
                }, i.prototype.close_field = function () {
                    return e(document).unbind("click", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chzn-container-active"), this.winnow_results_clear(), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
                }, i.prototype.activate_field = function () {
                    return this.container.addClass("chzn-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
                }, i.prototype.test_active_click = function (t) {
                    return e(t.target).parents("#" + this.container_id).length ? this.active_field = !0 : this.close_field()
                }, i.prototype.results_build = function () {
                    var e, t, r, i, s;
                    this.parsing = !0, this.selected_option_count = null, this.results_data = n.SelectParser.select_to_array(this.form_field), this.is_multiple && this.choices_count() > 0 ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.selected_item.addClass("chzn-default").find("span").text(this.default_text), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? this.container.addClass("chzn-container-single-nosearch") : this.container.removeClass("chzn-container-single-nosearch")), e = "", s = this.results_data;
                    for (r = 0, i = s.length; r < i; r++) t = s[r], t.group ? e += this.result_add_group(t) : t.empty || (e += this.result_add_option(t), t.selected && this.is_multiple ? this.choice_build(t) : t.selected && !this.is_multiple && (this.selected_item.removeClass("chzn-default").find("span").text(t.text), this.allow_single_deselect && this.single_deselect_control_build()));
                    return this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.search_results.html(e), this.parsing = !1
                }, i.prototype.result_add_group = function (t) {
                    return t.disabled ? "" : (t.dom_id = this.container_id + "_g_" + t.array_index, '<li id="' + t.dom_id + '" class="group-result">' + e("<div />").text(t.label).html() + "</li>")
                }, i.prototype.result_do_highlight = function (e) {
                    var t, n, r, i, s;
                    if (e.length) {
                        this.result_clear_highlight(), this.result_highlight = e, this.result_highlight.addClass("highlighted"), r = parseInt(this.search_results.css("maxHeight"), 10), s = this.search_results.scrollTop(), i = r + s, n = this.result_highlight.position().top + this.search_results.scrollTop(), t = n + this.result_highlight.outerHeight();
                        if (t >= i) return this.search_results.scrollTop(t - r > 0 ? t - r : 0);
                        if (n < s) return this.search_results.scrollTop(n)
                    }
                }, i.prototype.result_clear_highlight = function () {
                    return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
                }, i.prototype.results_show = function () {
                    if (this.result_single_selected != null) this.result_do_highlight(this.result_single_selected);
                    else if (this.is_multiple && this.max_selected_options <= this.choices_count()) return this.form_field_jq.trigger("liszt:maxselected", {
                        chosen: this
                    }), !1;
                    return this.container.addClass("chzn-with-drop"), this.form_field_jq.trigger("liszt:showing_dropdown", {
                        chosen: this
                    }), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results()
                }, i.prototype.results_hide = function () {
                    return this.result_clear_highlight(), this.container.removeClass("chzn-with-drop"), this.form_field_jq.trigger("liszt:hiding_dropdown", {
                        chosen: this
                    }), this.results_showing = !1
                }, i.prototype.set_tab_index = function (e) {
                    var t;
                    if (this.form_field_jq.attr("tabindex")) return t = this.form_field_jq.attr("tabindex"), this.form_field_jq.attr("tabindex", -1), this.search_field.attr("tabindex", t)
                }, i.prototype.set_label_behavior = function () {
                    var t = this;
                    this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = e("label[for='" + this.form_field.id + "']"));
                    if (this.form_field_label.length > 0) return this.form_field_label.click(function (e) {
                        return t.is_multiple ? t.container_mousedown(e) : t.activate_field()
                    })
                }, i.prototype.show_search_field_default = function () {
                    return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
                }, i.prototype.search_results_mouseup = function (t) {
                    var n;
                    n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first();
                    if (n.length) return this.result_highlight = n, this.result_select(t), this.search_field.focus()
                }, i.prototype.search_results_mouseover = function (t) {
                    var n;
                    n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first();
                    if (n) return this.result_do_highlight(n)
                }, i.prototype.search_results_mouseout = function (t) {
                    if (e(t.target).hasClass("active-result")) return this.result_clear_highlight()
                }, i.prototype.choice_build = function (t) {
                    var n, r, i = this;
                    return n = e("<li />", {
                        "class": "search-choice"
                    }).html("<span>" + t.html + "</span>"), t.disabled ? n.addClass("search-choice-disabled") : (r = e("<a />", {
                        href: "#",
                        "class": "search-choice-close",
                        rel: t.array_index
                    }), r.click(function (e) {
                        return i.choice_destroy_link_click(e)
                    }), n.append(r)), this.search_container.before(n)
                }, i.prototype.choice_destroy_link_click = function (t) {
                    t.preventDefault(), t.stopPropagation();
                    if (!this.is_disabled) return this.choice_destroy(e(t.target))
                }, i.prototype.choice_destroy = function (e) {
                    if (this.result_deselect(e.attr("rel"))) return this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), e.parents("li").first().remove(), this.search_field_scale()
                }, i.prototype.results_reset = function () {
                    this.form_field.options[0].selected = !0, this.selected_option_count = null, this.selected_item.find("span").text(this.default_text), this.is_multiple || this.selected_item.addClass("chzn-default"), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change");
                    if (this.active_field) return this.results_hide()
                }, i.prototype.results_reset_cleanup = function () {
                    return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
                }, i.prototype.result_select = function (e) {
                    var t, n, r, i;
                    if (this.result_highlight) return t = this.result_highlight, n = t.attr("id"), this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("liszt:maxselected", {
                        chosen: this
                    }), !1) : (this.is_multiple ? this.result_deactivate(t) : (this.search_results.find(".result-selected").removeClass("result-selected"), this.result_single_selected = t, this.selected_item.removeClass("chzn-default")), t.addClass("result-selected"), i = n.substr(n.lastIndexOf("_") + 1), r = this.results_data[i], r.selected = !0, this.form_field.options[r.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(r) : (this.selected_item.find("span").first().text(r.text), this.allow_single_deselect && this.single_deselect_control_build()), (!e.metaKey && !e.ctrlKey || !this.is_multiple) && this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                        selected: this.form_field.options[r.options_index].value
                    }), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale())
                }, i.prototype.result_activate = function (e) {
                    return e.addClass("active-result")
                }, i.prototype.result_deactivate = function (e) {
                    return e.removeClass("active-result")
                }, i.prototype.result_deselect = function (t) {
                    var n, r;
                    return r = this.results_data[t], this.form_field.options[r.options_index].disabled ? !1 : (r.selected = !1, this.form_field.options[r.options_index].selected = !1, this.selected_option_count = null, n = e("#" + this.container_id + "_o_" + t), n.removeClass("result-selected").addClass("active-result").show(), this.result_clear_highlight(), this.winnow_results(), this.form_field_jq.trigger("change", {
                        deselected: this.form_field.options[r.options_index].value
                    }), this.search_field_scale(), !0)
                }, i.prototype.single_deselect_control_build = function () {
                    if (this.allow_single_deselect && this.selected_item.find("abbr").length < 1) return this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>')
                }, i.prototype.winnow_results = function () {
                    var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y;
                    this.no_results_clear(), f = 0, l = this.search_field.val() === this.default_text ? "" : e("<div/>").text(e.trim(this.search_field.val())).html(), o = this.search_contains ? "" : "^", s = new RegExp(o + l.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i"), p = new RegExp(l.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i"), y = this.results_data;
                    for (d = 0, m = y.length; d < m; d++) {
                        n = y[d];
                        if (!n.disabled && !n.empty)
                            if (n.group) e("#" + n.dom_id).css("display", "none");
                            else if (!this.is_multiple || !n.selected) {
                            t = !1, a = n.dom_id, u = e("#" + a);
                            if (s.test(n.html)) t = !0, f += 1;
                            else if (this.enable_split_word_search && (n.html.indexOf(" ") >= 0 || n.html.indexOf("[") === 0)) {
                                i = n.html.replace(/\[|\]/g, "").split(" ");
                                if (i.length)
                                    for (v = 0, g = i.length; v < g; v++) r = i[v], s.test(r) && (t = !0, f += 1)
                            }
                            t ? (l.length ? (c = n.html.search(p), h = n.html.substr(0, c + l.length) + "</em>" + n.html.substr(c + l.length), h = h.substr(0, c) + "<em>" + h.substr(c)) : h = n.html, u.html(h), this.result_activate(u), n.group_array_index != null && e("#" + this.results_data[n.group_array_index].dom_id).css("display", "list-item")) : (this.result_highlight && a === this.result_highlight.attr("id") && this.result_clear_highlight(), this.result_deactivate(u))
                        }
                    }
                    return f < 1 && l.length ? this.no_results(l) : this.winnow_results_set_highlight()
                }, i.prototype.winnow_results_clear = function () {
                    var t, n, r, i, s;
                    this.search_field.val(""), n = this.search_results.find("li"), s = [];
                    for (r = 0, i = n.length; r < i; r++) t = n[r], t = e(t), t.hasClass("group-result") ? s.push(t.css("display", "auto")) : !this.is_multiple || !t.hasClass("result-selected") ? s.push(this.result_activate(t)) : s.push(void 0);
                    return s
                }, i.prototype.winnow_results_set_highlight = function () {
                    var e, t;
                    if (!this.result_highlight) {
                        t = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), e = t.length ? t.first() : this.search_results.find(".active-result").first();
                        if (e != null) return this.result_do_highlight(e)
                    }
                }, i.prototype.no_results = function (t) {
                    var n;
                    return n = e('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), n.find("span").first().html(t), this.search_results.append(n)
                }, i.prototype.no_results_clear = function () {
                    return this.search_results.find(".no-results").remove()
                }, i.prototype.keydown_arrow = function () {
                    var t, n;
                    this.result_highlight ? this.results_showing && (n = this.result_highlight.nextAll("li.active-result").first(), n && this.result_do_highlight(n)) : (t = this.search_results.find("li.active-result").first(), t && this.result_do_highlight(e(t)));
                    if (!this.results_showing) return this.results_show()
                }, i.prototype.keyup_arrow = function () {
                    var e;
                    if (!this.results_showing && !this.is_multiple) return this.results_show();
                    if (this.result_highlight) return e = this.result_highlight.prevAll("li.active-result"), e.length ? this.result_do_highlight(e.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())
                }, i.prototype.keydown_backstroke = function () {
                    var e;
                    if (this.pending_backstroke) return this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke();
                    e = this.search_container.siblings("li.search-choice").last();
                    if (e.length && !e.hasClass("search-choice-disabled")) return this.pending_backstroke = e, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")
                }, i.prototype.clear_backstroke = function () {
                    return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
                }, i.prototype.keydown_checker = function (e) {
                    var t, n;
                    t = (n = e.which) != null ? n : e.keyCode, this.search_field_scale(), t !== 8 && this.pending_backstroke && this.clear_backstroke();
                    switch (t) {
                    case 8:
                        this.backstroke_length = this.search_field.val().length;
                        break;
                    case 9:
                        this.results_showing && !this.is_multiple && this.result_select(e), this.mouse_on_container = !1;
                        break;
                    case 13:
                        e.preventDefault();
                        break;
                    case 38:
                        e.preventDefault(), this.keyup_arrow();
                        break;
                    case 40:
                        this.keydown_arrow()
                    }
                }, i.prototype.search_field_scale = function () {
                    var t, n, r, i, s, o, u, a;
                    if (this.is_multiple) {
                        n = 0, o = 0, i = "position:absolute; left: -1000px; top: -1000px; display:none;", s = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"];
                        for (u = 0, a = s.length; u < a; u++) r = s[u], i += r + ":" + this.search_field.css(r) + ";";
                        return t = e("<div />", {
                            style: i
                        }), t.text(this.search_field.val()), e("body").append(t), o = t.width() + 25, t.remove(), this.f_width || (this.f_width = this.container.outerWidth()), o > this.f_width - 10 && (o = this.f_width - 10), this.search_field.css({
                            width: o + "px"
                        })
                    }
                }, i.prototype.generate_random_id = function () {
                    var t;
                    t = "sel" + this.generate_random_char() + this.generate_random_char() + this.generate_random_char();
                    while (e("#" + t).length > 0) t += this.generate_random_char();
                    return t
                }, i
            }(AbstractChosen), n.Chosen = t
        }.call(this), define("jquery-chosen", ["jquery"], function () {}), define("views/PathsView", ["require", "underscore", "jquery", "simplify", "models/Path", "models/Label", "hbs!templates/paths/widget", "hbs!templates/paths/admin", "hbs!templates/paths/options", "hbs!templates/paths/directions", "jquery-chosen"], function (e) {
            var t = e("underscore"),
                n = e("jquery"),
                r = e("simplify"),
                i = e("models/Path"),
                s = e("models/Label"),
                o = e("hbs!templates/paths/widget"),
                u = e("hbs!templates/paths/admin"),
                a = e("hbs!templates/paths/options"),
                f = e("hbs!templates/paths/directions");
            e("jquery-chosen");
            var l = function () {
                function T() {
                    var e = 0,
                        t = function () {
                            e = (e + 1) % 200;
                            var t = S.get("icons");
                            t[0].offset = e / 2 + "%", S.set("icons", t)
                        };
                    window.clearInterval(x), x = window.setInterval(t, 50)
                }
                var e, r, c, h, p, d, v, m, g, y = !1,
                    b = new google.maps.Marker({
                        icon: "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=A|c33029|ffffff"
                    }),
                    w = new google.maps.Marker({
                        icon: "//maps.gstatic.com/mapfiles/markers2/marker_greenB.png"
                    }),
                    E = {
                        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                        scale: 2,
                        strokeColor: "#0a83bf"
                    },
                    S = new i({
                        clickable: !1,
                        editable: !1,
                        strokeColor: "#ed7217",
                        strokeOpacity: .7,
                        zIndex: 1e3,
                        icons: [{
                            icon: E,
                            offset: "0",
                            repeat: "25%"
                        }],
                        admin: v
                    }),
                    x, N = [],
                    C = function () {
                        t.each(N, function (e) {
                            e.setMap(null)
                        }), N = []
                    },
                    k = function (e, t) {
                        var n = e.getPath().getArray(),
                            r = 0,
                            i, o = !1,
                            u, a;
                        for (var f = 0; f < n.length - 1; f++) {
                            var l = Math.round(google.maps.geometry.spherical.computeDistanceBetween(n[f], n[f + 1]));
                            r += l;
                            if (f < n.length - 2 && r <= 15) {
                                o === !1 && (u = n[f], o = !0);
                                continue
                            }
                            o === !1 && (u = n[f]), a = n[f + 1], o = !1, l = r, r = 0;
                            var c = u,
                                h = a,
                                p = (c.lat() + h.lat()) / 2,
                                d = (c.lng() + h.lng()) / 2,
                                v = 2e-5,
                                m = (h.lng() - c.lng()) / (h.lat() - c.lat()),
                                g = Math.atan(m),
                                y = p - v * Math.sin(g),
                                b = d + v * Math.cos(g),
                                w = new google.maps.LatLng(y, b);
                            N.push(new s({
                                position: w,
                                map: t,
                                text: l + " m",
                                visible: !0,
                                fillColor: "black",
                                outlineColor: "white"
                            }))
                        }
                    },
                    L = function (t) {
                        return t = t || {}, r = t.map, e = t.mapResources, h = t.mapSlug, p = e.OriginsDestinations, d = t.parentSelector, v = t.admin, S.mapSlug = h, S.admin = v, t.admin ? (S.setEditable(!0), b.setDraggable(!0), w.setDraggable(!0), m = e.Everything, g = e.Everything, o = u, V(m, g)) : p.onLoad(function (e, t) {
                            m = e, g = t, V(m, g)
                        }), A(), this
                    },
                    A = function () {
                        n("body").on("change", ".js-paths", I), n("body").on("click", ".js-paths-clear", D), n("body").on("click", ".js-paths-save", S.save), google.maps.event.addListener(b, "dragend", j), google.maps.event.addListener(w, "dragend", j), v && (google.maps.event.addListener(r, "zoom_changed", O), google.maps.event.addListener(S, "capturing_changed", O)), S.on("load", function () {
                            U(), M(), v ? (v === "addDirections" ? (X(), S.setEditable(!1)) : v === "edit" && S.trigger("fetchReverseDirections"), C(), k(l.path, r)) : X()
                        })
                    },
                    O = function () {
                        l.pathHasChanged = !0, setTimeout(function () {
                            C(), k(l.path, r);
                        }, 50)
                    },
                    M = function () {
                        var e = S.fromMarkerPos[0] || b.getPosition().jb,
                            t = S.fromMarkerPos[1] || b.getPosition().kb,
                            n = S.toMarkerPos[0] || w.getPosition().jb,
                            i = S.toMarkerPos[1] || w.getPosition().kb;
                        B(), b.setMap(r), b.setPosition(new google.maps.LatLng(e, t)), w.setMap(r), w.setPosition(new google.maps.LatLng(n, i))
                    },
                    D = function () {
                        S.clear(), B(), P(), H(), setTimeout(function () {
                            C()
                        }, 100)
                    },
                    P = function () {
                        n(".paths .directions").empty()
                    },
                    H = function () {
                        F = null, R(n(".js-paths-from"), q(m)), R(n(".js-paths-to"), q(g))
                    },
                    B = function () {
                        t([b, w]).each(function (e) {
                            e.setMap(null)
                        })
                    },
                    j = function (e) {
                        S.fromMarkerPos = [b.getPosition().jb, b.getPosition().kb], S.toMarkerPos = [w.getPosition().jb, w.getPosition().kb];
                    },
                    F, I = function (i) {
                        var s = n(this).is(".js-paths-to"),
                            o = s ? n(".js-paths-from") : n(".js-paths-to"),
                            u = s ? w : b,
                            a = s ? b : w,
                            f = e.get(n(this).val());
                        l.pathHasChanged = !0;
                        if (!F || F.is(n(this))) {
                            F = n(this);
                            var c;
                            if (!v) c = s ? f.origins : f.destinations;
                            else {
                                var h = t.union(t.toArray(e.Buildings), t.toArray(e.Markers));
                                c = s ? t.difference(h, f.origins) : t.difference(h, f.destinations)
                            }
                            var p = q(c);
                            R(o, p), a.setMap(null), S.clear()
                        }
                        t.extend(u, t(f).pick("resourceType", "id", "title", "getHash")), u.setMap(r), u.setPosition(new google.maps.LatLng(f.lat, f.lng)), b.getMap() && w.getMap() && S.fetch(b, w)
                    },
                    q = function (e) {
                        var n = t(e).groupBy("resourceType"),
                            r = n.Building,
                            i = n.Marker,
                            s = t(i).chain().groupBy("layer_id").map(function (e, t) {
                                return {
                                    title: e[0].layer.title,
                                    markers: e
                                }
                            }).value();
                        return {
                            buildings: r,
                            layers: s
                        }
                    },
                    R = function (e, t) {
                        var r = a(t);
                        e.html(r), n(".chzn-select").trigger("liszt:updated")
                    },
                    U = function () {
                        S.setMap(r), T()
                    },
                    z = Math.round(google.maps.geometry.spherical.computeLength(S.getPath())),
                    W = Math.ceil(z * 1.32 / 60),
                    X = function () {
                        var e = Math.round(google.maps.geometry.spherical.computeLength(S.getPath())),
                            t = Math.ceil(e * 1.32 / 60);
                        n(".paths .directions").html(f({
                            directions: S.directions,
                            totalDistance: e,
                            totalTime: t,
                            startingLocation: b.title,
                            destinationLocation: w.title
                        }))
                    },
                    V = function (e, t) {
                        return n(d).append(o), R(n(".js-paths-from"), q(e)), R(n(".js-paths-to"), q(t)), n(".chzn-select").chosen(), v || n("#paths").hide(), this
                    };
                return {
                    initialize: L,
                    render: V,
                    path: S,
                    drawDirections: X,
                    fromMarker: b,
                    toMarker: w,
                    onMarkerDragEnd: j,
                    onPathChange: O,
                    pathHasChanged: y
                }
            }();
            return l
        }), define("main", ["require", "EventListeners", "services/UofTMap", "services/Resources", "views/InfoWindowView", "views/LayerListView", "views/OGDirectionsView", "views/PathsView"], function (e) {
            e("EventListeners");
            var t = e("services/UofTMap"),
                n = e("services/Resources"),
                r = e("views/InfoWindowView"),
                i = e("views/LayerListView"),
                s = e("views/OGDirectionsView"),
                o = e("views/PathsView");
            t.on("load", function () {
                var e = t.map,
                    u = t.data,
                    a = u.slug;
                n.initialize({
                    map: e,
                    mapData: u
                }), u.has_paths && o.initialize({
                    parentSelector: "#sidebar .inner",
                    mapSlug: a,
                    map: e,
                    mapResources: n
                }), i.initialize({
                    model: n.Layers
                }), r.initialize({
                    mapSlug: a
                }), s.init({
                    map: e,
                    infoWindow: r
                }), t.preselected && t.focusPreselected(), t.query && t.search(t.query, a)
            })
        }), window.UofTMap = require("services/UofTMap"), require("main")
});
        
var LightTableFilter = (function (Arr) {

    
    var _input;

    function _onInputEvent(e) {
        _input = e.target;
        focused = []
        var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
        Arr.forEach.call(tables, function(table) {
            Arr.forEach.call(table.tBodies, function(tbody) {
                Arr.forEach.call(tbody.rows, _filter);
            });
        });


        buildingList.forEach(function(b) {
            if (focused.indexOf(b.code) != -1) {
                b.selected = true;
                b.focusb();
            }
            else {
                b.selected = false;
                b.unhighlight();
            }
        });
    }

    function _filter(row) {
        var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
        text = text.replace("add to calendaricalendargoogle calendar", "");
        row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
        if (row.style.display == 'table-row' && val) {
            if (row.childNodes[4].textContent == "ST VLAD") {
                focused.push("ST VLAD")
            }
            else {
                focused.push(row.childNodes[4].textContent.split(" ")[0]);
            }
        }
    }

    return {
        init: function() {
            var inputs = document.getElementsByClassName('light-table-filter');
            Arr.forEach.call(inputs, function(input) {
                input.oninput = _onInputEvent;
            });
        }
    };
})(Array.prototype);

document.addEventListener('readystatechange', function() {
    if (document.readyState === 'complete') {
        LightTableFilter.init();
    }
});

$(".list").on("mouseover", ".exam", function() {
    if (this.childNodes[4].textContent == "ST VLAD") {
        hovered = "ST VLAD"
    }
    else {
        hovered = this.childNodes[4].textContent.split(" ")[0];
    }
    
    buildingList.forEach(function(b) {
        if (hovered == b.code) {
            b.hoverb();
        }
        else {
            b.unhighlight();
        }
    });
});
        
$(".list").on("mouseout", ".exam", function() {
    buildingList.forEach(function(b) {
        b.unhighlight();
    });
});
