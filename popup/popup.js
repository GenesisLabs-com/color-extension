! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(r, a, function(t) {
                return e[t]
            }.bind(null, a));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 613)
}([, function(e, t, n) {
    (function(e) {
        e.exports = function() {
            "use strict";
            var t, r;

            function a() {
                return t.apply(null, arguments)
            }

            function i(e) {
                return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
            }

            function s(e) {
                return null != e && "[object Object]" === Object.prototype.toString.call(e)
            }

            function o(e) {
                return void 0 === e
            }

            function u(e) {
                return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
            }

            function d(e) {
                return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
            }

            function l(e, t) {
                var n, r = [];
                for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
                return r
            }

            function c(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function _(e, t) {
                for (var n in t) c(t, n) && (e[n] = t[n]);
                return c(t, "toString") && (e.toString = t.toString), c(t, "valueOf") && (e.valueOf = t.valueOf), e
            }

            function m(e, t, n, r) {
                return jt(e, t, n, r, !0).utc()
            }

            function f(e) {
                return null == e._pf && (e._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }), e._pf
            }

            function h(e) {
                if (null == e._isValid) {
                    var t = f(e),
                        n = r.call(t.parsedDateParts, function(e) {
                            return null != e
                        }),
                        a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                    if (e._strict && (a = a && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return a;
                    e._isValid = a
                }
                return e._isValid
            }

            function p(e) {
                var t = m(NaN);
                return null != e ? _(f(t), e) : f(t).userInvalidated = !0, t
            }
            r = Array.prototype.some ? Array.prototype.some : function(e) {
                for (var t = Object(this), n = t.length >>> 0, r = 0; r < n; r++)
                    if (r in t && e.call(this, t[r], r, t)) return !0;
                return !1
            };
            var y = a.momentProperties = [];

            function v(e, t) {
                var n, r, a;
                if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = f(t)), o(t._locale) || (e._locale = t._locale), y.length > 0)
                    for (n = 0; n < y.length; n++) r = y[n], o(a = t[r]) || (e[r] = a);
                return e
            }
            var g = !1;

            function M(e) {
                v(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === g && (g = !0, a.updateOffset(this), g = !1)
            }

            function L(e) {
                return e instanceof M || null != e && null != e._isAMomentObject
            }

            function Y(e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            }

            function b(e) {
                var t = +e,
                    n = 0;
                return 0 !== t && isFinite(t) && (n = Y(t)), n
            }

            function w(e, t, n) {
                var r, a = Math.min(e.length, t.length),
                    i = Math.abs(e.length - t.length),
                    s = 0;
                for (r = 0; r < a; r++)(n && e[r] !== t[r] || !n && b(e[r]) !== b(t[r])) && s++;
                return s + i
            }

            function k(e) {
                !1 === a.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
            }

            function D(e, t) {
                var n = !0;
                return _(function() {
                    if (null != a.deprecationHandler && a.deprecationHandler(null, e), n) {
                        for (var r, i = [], s = 0; s < arguments.length; s++) {
                            if (r = "", "object" == typeof arguments[s]) {
                                for (var o in r += "\n[" + s + "] ", arguments[0]) r += o + ": " + arguments[0][o] + ", ";
                                r = r.slice(0, -2)
                            } else r = arguments[s];
                            i.push(r)
                        }
                        k(e + "\nArguments: " + Array.prototype.slice.call(i).join("") + "\n" + (new Error).stack), n = !1
                    }
                    return t.apply(this, arguments)
                }, t)
            }
            var T, S = {};

            function x(e, t) {
                null != a.deprecationHandler && a.deprecationHandler(e, t), S[e] || (k(t), S[e] = !0)
            }

            function j(e) {
                return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }

            function A(e, t) {
                var n, r = _({}, e);
                for (n in t) c(t, n) && (s(e[n]) && s(t[n]) ? (r[n] = {}, _(r[n], e[n]), _(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);
                for (n in e) c(e, n) && !c(t, n) && s(e[n]) && (r[n] = _({}, r[n]));
                return r
            }

            function O(e) {
                null != e && this.set(e)
            }
            a.suppressDeprecationWarnings = !1, a.deprecationHandler = null, T = Object.keys ? Object.keys : function(e) {
                var t, n = [];
                for (t in e) c(e, t) && n.push(t);
                return n
            };
            var H = {};

            function E(e, t) {
                var n = e.toLowerCase();
                H[n] = H[n + "s"] = H[t] = e
            }

            function P(e) {
                return "string" == typeof e ? H[e] || H[e.toLowerCase()] : void 0
            }

            function C(e) {
                var t, n, r = {};
                for (n in e) c(e, n) && (t = P(n)) && (r[t] = e[n]);
                return r
            }
            var $ = {};

            function F(e, t) {
                $[e] = t
            }

            function W(e, t, n) {
                var r = "" + Math.abs(e),
                    a = t - r.length,
                    i = e >= 0;
                return (i ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r
            }
            var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                z = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                R = {},
                I = {};

            function U(e, t, n, r) {
                var a = r;
                "string" == typeof r && (a = function() {
                    return this[r]()
                }), e && (I[e] = a), t && (I[t[0]] = function() {
                    return W(a.apply(this, arguments), t[1], t[2])
                }), n && (I[n] = function() {
                    return this.localeData().ordinal(a.apply(this, arguments), e)
                })
            }

            function q(e, t) {
                return e.isValid() ? (t = J(t, e.localeData()), R[t] = R[t] || function(e) {
                    var t, n, r, a = e.match(N);
                    for (t = 0, n = a.length; t < n; t++) I[a[t]] ? a[t] = I[a[t]] : a[t] = (r = a[t]).match(/\[[\s\S]/) ? r.replace(/^\[|\]$/g, "") : r.replace(/\\/g, "");
                    return function(t) {
                        var r, i = "";
                        for (r = 0; r < n; r++) i += j(a[r]) ? a[r].call(t, e) : a[r];
                        return i
                    }
                }(t), R[t](e)) : e.localeData().invalidDate()
            }

            function J(e, t) {
                var n = 5;

                function r(e) {
                    return t.longDateFormat(e) || e
                }
                for (z.lastIndex = 0; n >= 0 && z.test(e);) e = e.replace(z, r), z.lastIndex = 0, n -= 1;
                return e
            }
            var B = /\d/,
                V = /\d\d/,
                G = /\d{3}/,
                K = /\d{4}/,
                Z = /[+-]?\d{6}/,
                Q = /\d\d?/,
                X = /\d\d\d\d?/,
                ee = /\d\d\d\d\d\d?/,
                te = /\d{1,3}/,
                ne = /\d{1,4}/,
                re = /[+-]?\d{1,6}/,
                ae = /\d+/,
                ie = /[+-]?\d+/,
                se = /Z|[+-]\d\d:?\d\d/gi,
                oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
                ue = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                de = {};

            function le(e, t, n) {
                de[e] = j(t) ? t : function(e, r) {
                    return e && n ? n : t
                }
            }

            function ce(e, t) {
                return c(de, e) ? de[e](t._strict, t._locale) : new RegExp(_e(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, a) {
                    return t || n || r || a
                })))
            }

            function _e(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            var me = {};

            function fe(e, t) {
                var n, r = t;
                for ("string" == typeof e && (e = [e]), u(t) && (r = function(e, n) {
                        n[t] = b(e)
                    }), n = 0; n < e.length; n++) me[e[n]] = r
            }

            function he(e, t) {
                fe(e, function(e, n, r, a) {
                    r._w = r._w || {}, t(e, r._w, r, a)
                })
            }

            function pe(e, t, n) {
                null != t && c(me, e) && me[e](t, n._a, n, e)
            }
            var ye = 0,
                ve = 1,
                ge = 2,
                Me = 3,
                Le = 4,
                Ye = 5,
                be = 6,
                we = 7,
                ke = 8;

            function De(e) {
                return Te(e) ? 366 : 365
            }

            function Te(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }
            U("Y", 0, 0, function() {
                var e = this.year();
                return e <= 9999 ? "" + e : "+" + e
            }), U(0, ["YY", 2], 0, function() {
                return this.year() % 100
            }), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), E("year", "y"), F("year", 1), le("Y", ie), le("YY", Q, V), le("YYYY", ne, K), le("YYYYY", re, Z), le("YYYYYY", re, Z), fe(["YYYYY", "YYYYYY"], ye), fe("YYYY", function(e, t) {
                t[ye] = 2 === e.length ? a.parseTwoDigitYear(e) : b(e)
            }), fe("YY", function(e, t) {
                t[ye] = a.parseTwoDigitYear(e)
            }), fe("Y", function(e, t) {
                t[ye] = parseInt(e, 10)
            }), a.parseTwoDigitYear = function(e) {
                return b(e) + (b(e) > 68 ? 1900 : 2e3)
            };
            var Se, xe = je("FullYear", !0);

            function je(e, t) {
                return function(n) {
                    return null != n ? (Oe(this, e, n), a.updateOffset(this, t), this) : Ae(this, e)
                }
            }

            function Ae(e, t) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
            }

            function Oe(e, t, n) {
                e.isValid() && !isNaN(n) && ("FullYear" === t && Te(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), He(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
            }

            function He(e, t) {
                if (isNaN(e) || isNaN(t)) return NaN;
                var n, r = (t % (n = 12) + n) % n;
                return e += (t - r) / 12, 1 === r ? Te(e) ? 29 : 28 : 31 - r % 7 % 2
            }
            Se = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                var t;
                for (t = 0; t < this.length; ++t)
                    if (this[t] === e) return t;
                return -1
            }, U("M", ["MM", 2], "Mo", function() {
                return this.month() + 1
            }), U("MMM", 0, 0, function(e) {
                return this.localeData().monthsShort(this, e)
            }), U("MMMM", 0, 0, function(e) {
                return this.localeData().months(this, e)
            }), E("month", "M"), F("month", 8), le("M", Q), le("MM", Q, V), le("MMM", function(e, t) {
                return t.monthsShortRegex(e)
            }), le("MMMM", function(e, t) {
                return t.monthsRegex(e)
            }), fe(["M", "MM"], function(e, t) {
                t[ve] = b(e) - 1
            }), fe(["MMM", "MMMM"], function(e, t, n, r) {
                var a = n._locale.monthsParse(e, r, n._strict);
                null != a ? t[ve] = a : f(n).invalidMonth = e
            });
            var Ee = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                Pe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                Ce = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

            function $e(e, t) {
                var n;
                if (!e.isValid()) return e;
                if ("string" == typeof t)
                    if (/^\d+$/.test(t)) t = b(t);
                    else if (!u(t = e.localeData().monthsParse(t))) return e;
                return n = Math.min(e.date(), He(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
            }

            function Fe(e) {
                return null != e ? ($e(this, e), a.updateOffset(this, !0), this) : Ae(this, "Month")
            }
            var We = ue,
                Ne = ue;

            function ze() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, n, r = [],
                    a = [],
                    i = [];
                for (t = 0; t < 12; t++) n = m([2e3, t]), r.push(this.monthsShort(n, "")), a.push(this.months(n, "")), i.push(this.months(n, "")), i.push(this.monthsShort(n, ""));
                for (r.sort(e), a.sort(e), i.sort(e), t = 0; t < 12; t++) r[t] = _e(r[t]), a[t] = _e(a[t]);
                for (t = 0; t < 24; t++) i[t] = _e(i[t]);
                this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
            }

            function Re(e) {
                var t;
                if (e < 100 && e >= 0) {
                    var n = Array.prototype.slice.call(arguments);
                    n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)
                } else t = new Date(Date.UTC.apply(null, arguments));
                return t
            }

            function Ie(e, t, n) {
                var r = 7 + t - n,
                    a = (7 + Re(e, 0, r).getUTCDay() - t) % 7;
                return -a + r - 1
            }

            function Ue(e, t, n, r, a) {
                var i, s, o = (7 + n - r) % 7,
                    u = Ie(e, r, a),
                    d = 1 + 7 * (t - 1) + o + u;
                return d <= 0 ? s = De(i = e - 1) + d : d > De(e) ? (i = e + 1, s = d - De(e)) : (i = e, s = d), {
                    year: i,
                    dayOfYear: s
                }
            }

            function qe(e, t, n) {
                var r, a, i = Ie(e.year(), t, n),
                    s = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
                return s < 1 ? (a = e.year() - 1, r = s + Je(a, t, n)) : s > Je(e.year(), t, n) ? (r = s - Je(e.year(), t, n), a = e.year() + 1) : (a = e.year(), r = s), {
                    week: r,
                    year: a
                }
            }

            function Je(e, t, n) {
                var r = Ie(e, t, n),
                    a = Ie(e + 1, t, n);
                return (De(e) - r + a) / 7
            }

            function Be(e, t) {
                return e.slice(t, 7).concat(e.slice(0, t))
            }
            U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), E("week", "w"), E("isoWeek", "W"), F("week", 5), F("isoWeek", 5), le("w", Q), le("ww", Q, V), le("W", Q), le("WW", Q, V), he(["w", "ww", "W", "WW"], function(e, t, n, r) {
                t[r.substr(0, 1)] = b(e)
            }), U("d", 0, "do", "day"), U("dd", 0, 0, function(e) {
                return this.localeData().weekdaysMin(this, e)
            }), U("ddd", 0, 0, function(e) {
                return this.localeData().weekdaysShort(this, e)
            }), U("dddd", 0, 0, function(e) {
                return this.localeData().weekdays(this, e)
            }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), E("day", "d"), E("weekday", "e"), E("isoWeekday", "E"), F("day", 11), F("weekday", 11), F("isoWeekday", 11), le("d", Q), le("e", Q), le("E", Q), le("dd", function(e, t) {
                return t.weekdaysMinRegex(e)
            }), le("ddd", function(e, t) {
                return t.weekdaysShortRegex(e)
            }), le("dddd", function(e, t) {
                return t.weekdaysRegex(e)
            }), he(["dd", "ddd", "dddd"], function(e, t, n, r) {
                var a = n._locale.weekdaysParse(e, r, n._strict);
                null != a ? t.d = a : f(n).invalidWeekday = e
            }), he(["d", "e", "E"], function(e, t, n, r) {
                t[r] = b(e)
            });
            var Ve = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                Ge = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                Ke = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                Ze = ue,
                Qe = ue,
                Xe = ue;

            function et() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, n, r, a, i, s = [],
                    o = [],
                    u = [],
                    d = [];
                for (t = 0; t < 7; t++) n = m([2e3, 1]).day(t), r = this.weekdaysMin(n, ""), a = this.weekdaysShort(n, ""), i = this.weekdays(n, ""), s.push(r), o.push(a), u.push(i), d.push(r), d.push(a), d.push(i);
                for (s.sort(e), o.sort(e), u.sort(e), d.sort(e), t = 0; t < 7; t++) o[t] = _e(o[t]), u[t] = _e(u[t]), d[t] = _e(d[t]);
                this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
            }

            function tt() {
                return this.hours() % 12 || 12
            }

            function nt(e, t) {
                U(e, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                })
            }

            function rt(e, t) {
                return t._meridiemParse
            }
            U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, tt), U("k", ["kk", 2], 0, function() {
                return this.hours() || 24
            }), U("hmm", 0, 0, function() {
                return "" + tt.apply(this) + W(this.minutes(), 2)
            }), U("hmmss", 0, 0, function() {
                return "" + tt.apply(this) + W(this.minutes(), 2) + W(this.seconds(), 2)
            }), U("Hmm", 0, 0, function() {
                return "" + this.hours() + W(this.minutes(), 2)
            }), U("Hmmss", 0, 0, function() {
                return "" + this.hours() + W(this.minutes(), 2) + W(this.seconds(), 2)
            }), nt("a", !0), nt("A", !1), E("hour", "h"), F("hour", 13), le("a", rt), le("A", rt), le("H", Q), le("h", Q), le("k", Q), le("HH", Q, V), le("hh", Q, V), le("kk", Q, V), le("hmm", X), le("hmmss", ee), le("Hmm", X), le("Hmmss", ee), fe(["H", "HH"], Me), fe(["k", "kk"], function(e, t, n) {
                var r = b(e);
                t[Me] = 24 === r ? 0 : r
            }), fe(["a", "A"], function(e, t, n) {
                n._isPm = n._locale.isPM(e), n._meridiem = e
            }), fe(["h", "hh"], function(e, t, n) {
                t[Me] = b(e), f(n).bigHour = !0
            }), fe("hmm", function(e, t, n) {
                var r = e.length - 2;
                t[Me] = b(e.substr(0, r)), t[Le] = b(e.substr(r)), f(n).bigHour = !0
            }), fe("hmmss", function(e, t, n) {
                var r = e.length - 4,
                    a = e.length - 2;
                t[Me] = b(e.substr(0, r)), t[Le] = b(e.substr(r, 2)), t[Ye] = b(e.substr(a)), f(n).bigHour = !0
            }), fe("Hmm", function(e, t, n) {
                var r = e.length - 2;
                t[Me] = b(e.substr(0, r)), t[Le] = b(e.substr(r))
            }), fe("Hmmss", function(e, t, n) {
                var r = e.length - 4,
                    a = e.length - 2;
                t[Me] = b(e.substr(0, r)), t[Le] = b(e.substr(r, 2)), t[Ye] = b(e.substr(a))
            });
            var at, it = je("Hours", !0),
                st = {
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    longDateFormat: {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    invalidDate: "Invalid date",
                    ordinal: "%d",
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    months: Pe,
                    monthsShort: Ce,
                    week: {
                        dow: 0,
                        doy: 6
                    },
                    weekdays: Ve,
                    weekdaysMin: Ke,
                    weekdaysShort: Ge,
                    meridiemParse: /[ap]\.?m?\.?/i
                },
                ot = {},
                ut = {};

            function dt(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }

            function lt(t) {
                var r = null;
                if (!ot[t] && void 0 !== e && e && e.exports) try {
                    r = at._abbr, n(603)("./" + t), ct(r)
                } catch (e) {}
                return ot[t]
            }

            function ct(e, t) {
                var n;
                return e && ((n = o(t) ? mt(e) : _t(e, t)) ? at = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), at._abbr
            }

            function _t(e, t) {
                if (null !== t) {
                    var n, r = st;
                    if (t.abbr = e, null != ot[e]) x("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = ot[e]._config;
                    else if (null != t.parentLocale)
                        if (null != ot[t.parentLocale]) r = ot[t.parentLocale]._config;
                        else {
                            if (null == (n = lt(t.parentLocale))) return ut[t.parentLocale] || (ut[t.parentLocale] = []), ut[t.parentLocale].push({
                                name: e,
                                config: t
                            }), null;
                            r = n._config
                        }
                    return ot[e] = new O(A(r, t)), ut[e] && ut[e].forEach(function(e) {
                        _t(e.name, e.config)
                    }), ct(e), ot[e]
                }
                return delete ot[e], null
            }

            function mt(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return at;
                if (!i(e)) {
                    if (t = lt(e)) return t;
                    e = [e]
                }
                return function(e) {
                    for (var t, n, r, a, i = 0; i < e.length;) {
                        for (a = dt(e[i]).split("-"), t = a.length, n = (n = dt(e[i + 1])) ? n.split("-") : null; t > 0;) {
                            if (r = lt(a.slice(0, t).join("-"))) return r;
                            if (n && n.length >= t && w(a, n, !0) >= t - 1) break;
                            t--
                        }
                        i++
                    }
                    return at
                }(e)
            }

            function ft(e) {
                var t, n = e._a;
                return n && -2 === f(e).overflow && (t = n[ve] < 0 || n[ve] > 11 ? ve : n[ge] < 1 || n[ge] > He(n[ye], n[ve]) ? ge : n[Me] < 0 || n[Me] > 24 || 24 === n[Me] && (0 !== n[Le] || 0 !== n[Ye] || 0 !== n[be]) ? Me : n[Le] < 0 || n[Le] > 59 ? Le : n[Ye] < 0 || n[Ye] > 59 ? Ye : n[be] < 0 || n[be] > 999 ? be : -1, f(e)._overflowDayOfYear && (t < ye || t > ge) && (t = ge), f(e)._overflowWeeks && -1 === t && (t = we), f(e)._overflowWeekday && -1 === t && (t = ke), f(e).overflow = t), e
            }

            function ht(e, t, n) {
                return null != e ? e : null != t ? t : n
            }

            function pt(e) {
                var t, n, r, i, s, o = [];
                if (!e._d) {
                    for (r = function(e) {
                            var t = new Date(a.now());
                            return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
                        }(e), e._w && null == e._a[ge] && null == e._a[ve] && function(e) {
                            var t, n, r, a, i, s, o, u;
                            if (null != (t = e._w).GG || null != t.W || null != t.E) i = 1, s = 4, n = ht(t.GG, e._a[ye], qe(At(), 1, 4).year), r = ht(t.W, 1), ((a = ht(t.E, 1)) < 1 || a > 7) && (u = !0);
                            else {
                                i = e._locale._week.dow, s = e._locale._week.doy;
                                var d = qe(At(), i, s);
                                n = ht(t.gg, e._a[ye], d.year), r = ht(t.w, d.week), null != t.d ? ((a = t.d) < 0 || a > 6) && (u = !0) : null != t.e ? (a = t.e + i, (t.e < 0 || t.e > 6) && (u = !0)) : a = i
                            }
                            r < 1 || r > Je(n, i, s) ? f(e)._overflowWeeks = !0 : null != u ? f(e)._overflowWeekday = !0 : (o = Ue(n, r, a, i, s), e._a[ye] = o.year, e._dayOfYear = o.dayOfYear)
                        }(e), null != e._dayOfYear && (s = ht(e._a[ye], r[ye]), (e._dayOfYear > De(s) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0), n = Re(s, 0, e._dayOfYear), e._a[ve] = n.getUTCMonth(), e._a[ge] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = r[t];
                    for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    24 === e._a[Me] && 0 === e._a[Le] && 0 === e._a[Ye] && 0 === e._a[be] && (e._nextDay = !0, e._a[Me] = 0), e._d = (e._useUTC ? Re : function(e, t, n, r, a, i, s) {
                        var o;
                        return e < 100 && e >= 0 ? (o = new Date(e + 400, t, n, r, a, i, s), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, r, a, i, s), o
                    }).apply(null, o), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Me] = 24), e._w && void 0 !== e._w.d && e._w.d !== i && (f(e).weekdayMismatch = !0)
                }
            }
            var yt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                vt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                gt = /Z|[+-]\d\d(?::?\d\d)?/,
                Mt = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                Lt = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                Yt = /^\/?Date\((\-?\d+)/i;

            function bt(e) {
                var t, n, r, a, i, s, o = e._i,
                    u = yt.exec(o) || vt.exec(o);
                if (u) {
                    for (f(e).iso = !0, t = 0, n = Mt.length; t < n; t++)
                        if (Mt[t][1].exec(u[1])) {
                            a = Mt[t][0], r = !1 !== Mt[t][2];
                            break
                        }
                    if (null == a) return void(e._isValid = !1);
                    if (u[3]) {
                        for (t = 0, n = Lt.length; t < n; t++)
                            if (Lt[t][1].exec(u[3])) {
                                i = (u[2] || " ") + Lt[t][0];
                                break
                            }
                        if (null == i) return void(e._isValid = !1)
                    }
                    if (!r && null != i) return void(e._isValid = !1);
                    if (u[4]) {
                        if (!gt.exec(u[4])) return void(e._isValid = !1);
                        s = "Z"
                    }
                    e._f = a + (i || "") + (s || ""), St(e)
                } else e._isValid = !1
            }
            var wt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

            function kt(e) {
                var t = parseInt(e, 10);
                return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
            }
            var Dt = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };

            function Tt(e) {
                var t, n, r, a, i, s, o, u = wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                if (u) {
                    var d = (t = u[4], n = u[3], r = u[2], a = u[5], i = u[6], s = u[7], o = [kt(t), Ce.indexOf(n), parseInt(r, 10), parseInt(a, 10), parseInt(i, 10)], s && o.push(parseInt(s, 10)), o);
                    if (! function(e, t, n) {
                            if (e) {
                                var r = Ge.indexOf(e),
                                    a = new Date(t[0], t[1], t[2]).getDay();
                                if (r !== a) return f(n).weekdayMismatch = !0, n._isValid = !1, !1
                            }
                            return !0
                        }(u[1], d, e)) return;
                    e._a = d, e._tzm = function(e, t, n) {
                        if (e) return Dt[e];
                        if (t) return 0;
                        var r = parseInt(n, 10),
                            a = r % 100,
                            i = (r - a) / 100;
                        return 60 * i + a
                    }(u[8], u[9], u[10]), e._d = Re.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), f(e).rfc2822 = !0
                } else e._isValid = !1
            }

            function St(e) {
                if (e._f !== a.ISO_8601)
                    if (e._f !== a.RFC_2822) {
                        e._a = [], f(e).empty = !0;
                        var t, n, r, i, s, o = "" + e._i,
                            u = o.length,
                            d = 0;
                        for (r = J(e._f, e._locale).match(N) || [], t = 0; t < r.length; t++) i = r[t], (n = (o.match(ce(i, e)) || [])[0]) && ((s = o.substr(0, o.indexOf(n))).length > 0 && f(e).unusedInput.push(s), o = o.slice(o.indexOf(n) + n.length), d += n.length), I[i] ? (n ? f(e).empty = !1 : f(e).unusedTokens.push(i), pe(i, n, e)) : e._strict && !n && f(e).unusedTokens.push(i);
                        f(e).charsLeftOver = u - d, o.length > 0 && f(e).unusedInput.push(o), e._a[Me] <= 12 && !0 === f(e).bigHour && e._a[Me] > 0 && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[Me] = function(e, t, n) {
                            var r;
                            return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((r = e.isPM(n)) && t < 12 && (t += 12), r || 12 !== t || (t = 0), t) : t
                        }(e._locale, e._a[Me], e._meridiem), pt(e), ft(e)
                    } else Tt(e);
                else bt(e)
            }

            function xt(e) {
                var t = e._i,
                    n = e._f;
                return e._locale = e._locale || mt(e._l), null === t || void 0 === n && "" === t ? p({
                    nullInput: !0
                }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), L(t) ? new M(ft(t)) : (d(t) ? e._d = t : i(n) ? function(e) {
                    var t, n, r, a, i;
                    if (0 === e._f.length) return f(e).invalidFormat = !0, void(e._d = new Date(NaN));
                    for (a = 0; a < e._f.length; a++) i = 0, t = v({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[a], St(t), h(t) && (i += f(t).charsLeftOver, i += 10 * f(t).unusedTokens.length, f(t).score = i, (null == r || i < r) && (r = i, n = t));
                    _(e, n || t)
                }(e) : n ? St(e) : function(e) {
                    var t = e._i;
                    o(t) ? e._d = new Date(a.now()) : d(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
                        var t = Yt.exec(e._i);
                        null === t ? (bt(e), !1 === e._isValid && (delete e._isValid, Tt(e), !1 === e._isValid && (delete e._isValid, a.createFromInputFallback(e)))) : e._d = new Date(+t[1])
                    }(e) : i(t) ? (e._a = l(t.slice(0), function(e) {
                        return parseInt(e, 10)
                    }), pt(e)) : s(t) ? function(e) {
                        if (!e._d) {
                            var t = C(e._i);
                            e._a = l([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                                return e && parseInt(e, 10)
                            }), pt(e)
                        }
                    }(e) : u(t) ? e._d = new Date(t) : a.createFromInputFallback(e)
                }(e), h(e) || (e._d = null), e))
            }

            function jt(e, t, n, r, a) {
                var o, u = {};
                return !0 !== n && !1 !== n || (r = n, n = void 0), (s(e) && function(e) {
                    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                    var t;
                    for (t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                }(e) || i(e) && 0 === e.length) && (e = void 0), u._isAMomentObject = !0, u._useUTC = u._isUTC = a, u._l = n, u._i = e, u._f = t, u._strict = r, (o = new M(ft(xt(u))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
            }

            function At(e, t, n, r) {
                return jt(e, t, n, r, !1)
            }
            a.createFromInputFallback = D("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            }), a.ISO_8601 = function() {}, a.RFC_2822 = function() {};
            var Ot = D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var e = At.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e < this ? this : e : p()
                }),
                Ht = D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var e = At.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e > this ? this : e : p()
                });

            function Et(e, t) {
                var n, r;
                if (1 === t.length && i(t[0]) && (t = t[0]), !t.length) return At();
                for (n = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](n) || (n = t[r]);
                return n
            }
            var Pt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

            function Ct(e) {
                var t = C(e),
                    n = t.year || 0,
                    r = t.quarter || 0,
                    a = t.month || 0,
                    i = t.week || t.isoWeek || 0,
                    s = t.day || 0,
                    o = t.hour || 0,
                    u = t.minute || 0,
                    d = t.second || 0,
                    l = t.millisecond || 0;
                this._isValid = function(e) {
                    for (var t in e)
                        if (-1 === Se.call(Pt, t) || null != e[t] && isNaN(e[t])) return !1;
                    for (var n = !1, r = 0; r < Pt.length; ++r)
                        if (e[Pt[r]]) {
                            if (n) return !1;
                            parseFloat(e[Pt[r]]) !== b(e[Pt[r]]) && (n = !0)
                        }
                    return !0
                }(t), this._milliseconds = +l + 1e3 * d + 6e4 * u + 1e3 * o * 60 * 60, this._days = +s + 7 * i, this._months = +a + 3 * r + 12 * n, this._data = {}, this._locale = mt(), this._bubble()
            }

            function $t(e) {
                return e instanceof Ct
            }

            function Ft(e) {
                return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
            }

            function Wt(e, t) {
                U(e, 0, 0, function() {
                    var e = this.utcOffset(),
                        n = "+";
                    return e < 0 && (e = -e, n = "-"), n + W(~~(e / 60), 2) + t + W(~~e % 60, 2)
                })
            }
            Wt("Z", ":"), Wt("ZZ", ""), le("Z", oe), le("ZZ", oe), fe(["Z", "ZZ"], function(e, t, n) {
                n._useUTC = !0, n._tzm = zt(oe, e)
            });
            var Nt = /([\+\-]|\d\d)/gi;

            function zt(e, t) {
                var n = (t || "").match(e);
                if (null === n) return null;
                var r = n[n.length - 1] || [],
                    a = (r + "").match(Nt) || ["-", 0, 0],
                    i = 60 * a[1] + b(a[2]);
                return 0 === i ? 0 : "+" === a[0] ? i : -i
            }

            function Rt(e, t) {
                var n, r;
                return t._isUTC ? (n = t.clone(), r = (L(e) || d(e) ? e.valueOf() : At(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), a.updateOffset(n, !1), n) : At(e).local()
            }

            function It(e) {
                return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
            }

            function Ut() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }
            a.updateOffset = function() {};
            var qt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                Jt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

            function Bt(e, t) {
                var n, r, a, i, s, o, d = e,
                    l = null;
                return $t(e) ? d = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : u(e) ? (d = {}, t ? d[t] = e : d.milliseconds = e) : (l = qt.exec(e)) ? (n = "-" === l[1] ? -1 : 1, d = {
                    y: 0,
                    d: b(l[ge]) * n,
                    h: b(l[Me]) * n,
                    m: b(l[Le]) * n,
                    s: b(l[Ye]) * n,
                    ms: b(Ft(1e3 * l[be])) * n
                }) : (l = Jt.exec(e)) ? (n = "-" === l[1] ? -1 : 1, d = {
                    y: Vt(l[2], n),
                    M: Vt(l[3], n),
                    w: Vt(l[4], n),
                    d: Vt(l[5], n),
                    h: Vt(l[6], n),
                    m: Vt(l[7], n),
                    s: Vt(l[8], n)
                }) : null == d ? d = {} : "object" == typeof d && ("from" in d || "to" in d) && (i = At(d.from), s = At(d.to), a = i.isValid() && s.isValid() ? (s = Rt(s, i), i.isBefore(s) ? o = Gt(i, s) : ((o = Gt(s, i)).milliseconds = -o.milliseconds, o.months = -o.months), o) : {
                    milliseconds: 0,
                    months: 0
                }, (d = {}).ms = a.milliseconds, d.M = a.months), r = new Ct(d), $t(e) && c(e, "_locale") && (r._locale = e._locale), r
            }

            function Vt(e, t) {
                var n = e && parseFloat(e.replace(",", "."));
                return (isNaN(n) ? 0 : n) * t
            }

            function Gt(e, t) {
                var n = {};
                return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
            }

            function Kt(e, t) {
                return function(n, r) {
                    var a;
                    return null === r || isNaN(+r) || (x(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = n, n = r, r = a), Zt(this, Bt(n = "string" == typeof n ? +n : n, r), e), this
                }
            }

            function Zt(e, t, n, r) {
                var i = t._milliseconds,
                    s = Ft(t._days),
                    o = Ft(t._months);
                e.isValid() && (r = null == r || r, o && $e(e, Ae(e, "Month") + o * n), s && Oe(e, "Date", Ae(e, "Date") + s * n), i && e._d.setTime(e._d.valueOf() + i * n), r && a.updateOffset(e, s || o))
            }
            Bt.fn = Ct.prototype, Bt.invalid = function() {
                return Bt(NaN)
            };
            var Qt = Kt(1, "add"),
                Xt = Kt(-1, "subtract");

            function en(e, t) {
                var n, r, a = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                    i = e.clone().add(a, "months");
                return t - i < 0 ? (n = e.clone().add(a - 1, "months"), r = (t - i) / (i - n)) : (n = e.clone().add(a + 1, "months"), r = (t - i) / (n - i)), -(a + r) || 0
            }

            function tn(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (null != (t = mt(e)) && (this._locale = t), this)
            }
            a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var nn = D("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            });

            function rn() {
                return this._locale
            }
            var an = 1e3,
                sn = 60 * an,
                on = 60 * sn,
                un = 3506328 * on;

            function dn(e, t) {
                return (e % t + t) % t
            }

            function ln(e, t, n) {
                return e < 100 && e >= 0 ? new Date(e + 400, t, n) - un : new Date(e, t, n).valueOf()
            }

            function cn(e, t, n) {
                return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - un : Date.UTC(e, t, n)
            }

            function _n(e, t) {
                U(0, [e, e.length], 0, t)
            }

            function mn(e, t, n, r, a) {
                var i;
                return null == e ? qe(this, r, a).year : (i = Je(e, r, a), t > i && (t = i), function(e, t, n, r, a) {
                    var i = Ue(e, t, n, r, a),
                        s = Re(i.year, 0, i.dayOfYear);
                    return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
                }.call(this, e, t, n, r, a))
            }
            U(0, ["gg", 2], 0, function() {
                return this.weekYear() % 100
            }), U(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            }), _n("gggg", "weekYear"), _n("ggggg", "weekYear"), _n("GGGG", "isoWeekYear"), _n("GGGGG", "isoWeekYear"), E("weekYear", "gg"), E("isoWeekYear", "GG"), F("weekYear", 1), F("isoWeekYear", 1), le("G", ie), le("g", ie), le("GG", Q, V), le("gg", Q, V), le("GGGG", ne, K), le("gggg", ne, K), le("GGGGG", re, Z), le("ggggg", re, Z), he(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, r) {
                t[r.substr(0, 2)] = b(e)
            }), he(["gg", "GG"], function(e, t, n, r) {
                t[r] = a.parseTwoDigitYear(e)
            }), U("Q", 0, "Qo", "quarter"), E("quarter", "Q"), F("quarter", 7), le("Q", B), fe("Q", function(e, t) {
                t[ve] = 3 * (b(e) - 1)
            }), U("D", ["DD", 2], "Do", "date"), E("date", "D"), F("date", 9), le("D", Q), le("DD", Q, V), le("Do", function(e, t) {
                return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
            }), fe(["D", "DD"], ge), fe("Do", function(e, t) {
                t[ge] = b(e.match(Q)[0])
            });
            var fn = je("Date", !0);
            U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), E("dayOfYear", "DDD"), F("dayOfYear", 4), le("DDD", te), le("DDDD", G), fe(["DDD", "DDDD"], function(e, t, n) {
                n._dayOfYear = b(e)
            }), U("m", ["mm", 2], 0, "minute"), E("minute", "m"), F("minute", 14), le("m", Q), le("mm", Q, V), fe(["m", "mm"], Le);
            var hn = je("Minutes", !1);
            U("s", ["ss", 2], 0, "second"), E("second", "s"), F("second", 15), le("s", Q), le("ss", Q, V), fe(["s", "ss"], Ye);
            var pn, yn = je("Seconds", !1);
            for (U("S", 0, 0, function() {
                    return ~~(this.millisecond() / 100)
                }), U(0, ["SS", 2], 0, function() {
                    return ~~(this.millisecond() / 10)
                }), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function() {
                    return 10 * this.millisecond()
                }), U(0, ["SSSSS", 5], 0, function() {
                    return 100 * this.millisecond()
                }), U(0, ["SSSSSS", 6], 0, function() {
                    return 1e3 * this.millisecond()
                }), U(0, ["SSSSSSS", 7], 0, function() {
                    return 1e4 * this.millisecond()
                }), U(0, ["SSSSSSSS", 8], 0, function() {
                    return 1e5 * this.millisecond()
                }), U(0, ["SSSSSSSSS", 9], 0, function() {
                    return 1e6 * this.millisecond()
                }), E("millisecond", "ms"), F("millisecond", 16), le("S", te, B), le("SS", te, V), le("SSS", te, G), pn = "SSSS"; pn.length <= 9; pn += "S") le(pn, ae);

            function vn(e, t) {
                t[be] = b(1e3 * ("0." + e))
            }
            for (pn = "S"; pn.length <= 9; pn += "S") fe(pn, vn);
            var gn = je("Milliseconds", !1);
            U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
            var Mn = M.prototype;

            function Ln(e) {
                return e
            }
            Mn.add = Qt, Mn.calendar = function(e, t) {
                var n = e || At(),
                    r = Rt(n, this).startOf("day"),
                    i = a.calendarFormat(this, r) || "sameElse",
                    s = t && (j(t[i]) ? t[i].call(this, n) : t[i]);
                return this.format(s || this.localeData().calendar(i, this, At(n)))
            }, Mn.clone = function() {
                return new M(this)
            }, Mn.diff = function(e, t, n) {
                var r, a, i;
                if (!this.isValid()) return NaN;
                if (!(r = Rt(e, this)).isValid()) return NaN;
                switch (a = 6e4 * (r.utcOffset() - this.utcOffset()), t = P(t)) {
                    case "year":
                        i = en(this, r) / 12;
                        break;
                    case "month":
                        i = en(this, r);
                        break;
                    case "quarter":
                        i = en(this, r) / 3;
                        break;
                    case "second":
                        i = (this - r) / 1e3;
                        break;
                    case "minute":
                        i = (this - r) / 6e4;
                        break;
                    case "hour":
                        i = (this - r) / 36e5;
                        break;
                    case "day":
                        i = (this - r - a) / 864e5;
                        break;
                    case "week":
                        i = (this - r - a) / 6048e5;
                        break;
                    default:
                        i = this - r
                }
                return n ? i : Y(i)
            }, Mn.endOf = function(e) {
                var t;
                if (void 0 === (e = P(e)) || "millisecond" === e || !this.isValid()) return this;
                var n = this._isUTC ? cn : ln;
                switch (e) {
                    case "year":
                        t = n(this.year() + 1, 0, 1) - 1;
                        break;
                    case "quarter":
                        t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                        break;
                    case "month":
                        t = n(this.year(), this.month() + 1, 1) - 1;
                        break;
                    case "week":
                        t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                        break;
                    case "isoWeek":
                        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                        break;
                    case "day":
                    case "date":
                        t = n(this.year(), this.month(), this.date() + 1) - 1;
                        break;
                    case "hour":
                        t = this._d.valueOf(), t += on - dn(t + (this._isUTC ? 0 : this.utcOffset() * sn), on) - 1;
                        break;
                    case "minute":
                        t = this._d.valueOf(), t += sn - dn(t, sn) - 1;
                        break;
                    case "second":
                        t = this._d.valueOf(), t += an - dn(t, an) - 1
                }
                return this._d.setTime(t), a.updateOffset(this, !0), this
            }, Mn.format = function(e) {
                e || (e = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
                var t = q(this, e);
                return this.localeData().postformat(t)
            }, Mn.from = function(e, t) {
                return this.isValid() && (L(e) && e.isValid() || At(e).isValid()) ? Bt({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }, Mn.fromNow = function(e) {
                return this.from(At(), e)
            }, Mn.to = function(e, t) {
                return this.isValid() && (L(e) && e.isValid() || At(e).isValid()) ? Bt({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }, Mn.toNow = function(e) {
                return this.to(At(), e)
            }, Mn.get = function(e) {
                return j(this[e = P(e)]) ? this[e]() : this
            }, Mn.invalidAt = function() {
                return f(this).overflow
            }, Mn.isAfter = function(e, t) {
                var n = L(e) ? e : At(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = P(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
            }, Mn.isBefore = function(e, t) {
                var n = L(e) ? e : At(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = P(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
            }, Mn.isBetween = function(e, t, n, r) {
                var a = L(e) ? e : At(e),
                    i = L(t) ? t : At(t);
                return !!(this.isValid() && a.isValid() && i.isValid()) && (("(" === (r = r || "()")[0] ? this.isAfter(a, n) : !this.isBefore(a, n)) && (")" === r[1] ? this.isBefore(i, n) : !this.isAfter(i, n)))
            }, Mn.isSame = function(e, t) {
                var n, r = L(e) ? e : At(e);
                return !(!this.isValid() || !r.isValid()) && ("millisecond" === (t = P(t) || "millisecond") ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
            }, Mn.isSameOrAfter = function(e, t) {
                return this.isSame(e, t) || this.isAfter(e, t)
            }, Mn.isSameOrBefore = function(e, t) {
                return this.isSame(e, t) || this.isBefore(e, t)
            }, Mn.isValid = function() {
                return h(this)
            }, Mn.lang = nn, Mn.locale = tn, Mn.localeData = rn, Mn.max = Ht, Mn.min = Ot, Mn.parsingFlags = function() {
                return _({}, f(this))
            }, Mn.set = function(e, t) {
                if ("object" == typeof e)
                    for (var n = function(e) {
                            var t = [];
                            for (var n in e) t.push({
                                unit: n,
                                priority: $[n]
                            });
                            return t.sort(function(e, t) {
                                return e.priority - t.priority
                            }), t
                        }(e = C(e)), r = 0; r < n.length; r++) this[n[r].unit](e[n[r].unit]);
                else if (j(this[e = P(e)])) return this[e](t);
                return this
            }, Mn.startOf = function(e) {
                var t;
                if (void 0 === (e = P(e)) || "millisecond" === e || !this.isValid()) return this;
                var n = this._isUTC ? cn : ln;
                switch (e) {
                    case "year":
                        t = n(this.year(), 0, 1);
                        break;
                    case "quarter":
                        t = n(this.year(), this.month() - this.month() % 3, 1);
                        break;
                    case "month":
                        t = n(this.year(), this.month(), 1);
                        break;
                    case "week":
                        t = n(this.year(), this.month(), this.date() - this.weekday());
                        break;
                    case "isoWeek":
                        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                        break;
                    case "day":
                    case "date":
                        t = n(this.year(), this.month(), this.date());
                        break;
                    case "hour":
                        t = this._d.valueOf(), t -= dn(t + (this._isUTC ? 0 : this.utcOffset() * sn), on);
                        break;
                    case "minute":
                        t = this._d.valueOf(), t -= dn(t, sn);
                        break;
                    case "second":
                        t = this._d.valueOf(), t -= dn(t, an)
                }
                return this._d.setTime(t), a.updateOffset(this, !0), this
            }, Mn.subtract = Xt, Mn.toArray = function() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }, Mn.toObject = function() {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }, Mn.toDate = function() {
                return new Date(this.valueOf())
            }, Mn.toISOString = function(e) {
                if (!this.isValid()) return null;
                var t = !0 !== e,
                    n = t ? this.clone().utc() : this;
                return n.year() < 0 || n.year() > 9999 ? q(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : j(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", q(n, "Z")) : q(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }, Mn.inspect = function() {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var e = "moment",
                    t = "";
                this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                var n = "[" + e + '("]',
                    r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    a = t + '[")]';
                return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + a)
            }, Mn.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }, Mn.toString = function() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }, Mn.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }, Mn.valueOf = function() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }, Mn.creationData = function() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }, Mn.year = xe, Mn.isLeapYear = function() {
                return Te(this.year())
            }, Mn.weekYear = function(e) {
                return mn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }, Mn.isoWeekYear = function(e) {
                return mn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
            }, Mn.quarter = Mn.quarters = function(e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            }, Mn.month = Fe, Mn.daysInMonth = function() {
                return He(this.year(), this.month())
            }, Mn.week = Mn.weeks = function(e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            }, Mn.isoWeek = Mn.isoWeeks = function(e) {
                var t = qe(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            }, Mn.weeksInYear = function() {
                var e = this.localeData()._week;
                return Je(this.year(), e.dow, e.doy)
            }, Mn.isoWeeksInYear = function() {
                return Je(this.year(), 1, 4)
            }, Mn.date = fn, Mn.day = Mn.days = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = function(e, t) {
                    return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
                }(e, this.localeData()), this.add(e - t, "d")) : t
            }, Mn.weekday = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            }, Mn.isoWeekday = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    var t = function(e, t) {
                        return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                    }(e, this.localeData());
                    return this.day(this.day() % 7 ? t : t - 7)
                }
                return this.day() || 7
            }, Mn.dayOfYear = function(e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            }, Mn.hour = Mn.hours = it, Mn.minute = Mn.minutes = hn, Mn.second = Mn.seconds = yn, Mn.millisecond = Mn.milliseconds = gn, Mn.utcOffset = function(e, t, n) {
                var r, i = this._offset || 0;
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    if ("string" == typeof e) {
                        if (null === (e = zt(oe, e))) return this
                    } else Math.abs(e) < 16 && !n && (e *= 60);
                    return !this._isUTC && t && (r = It(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), i !== e && (!t || this._changeInProgress ? Zt(this, Bt(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this
                }
                return this._isUTC ? i : It(this)
            }, Mn.utc = function(e) {
                return this.utcOffset(0, e)
            }, Mn.local = function(e) {
                return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(It(this), "m")), this
            }, Mn.parseZone = function() {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var e = zt(se, this._i);
                    null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                }
                return this
            }, Mn.hasAlignedHourOffset = function(e) {
                return !!this.isValid() && (e = e ? At(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
            }, Mn.isDST = function() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }, Mn.isLocal = function() {
                return !!this.isValid() && !this._isUTC
            }, Mn.isUtcOffset = function() {
                return !!this.isValid() && this._isUTC
            }, Mn.isUtc = Ut, Mn.isUTC = Ut, Mn.zoneAbbr = function() {
                return this._isUTC ? "UTC" : ""
            }, Mn.zoneName = function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }, Mn.dates = D("dates accessor is deprecated. Use date instead.", fn), Mn.months = D("months accessor is deprecated. Use month instead", Fe), Mn.years = D("years accessor is deprecated. Use year instead", xe), Mn.zone = D("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
                return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
            }), Mn.isDSTShifted = D("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
                if (!o(this._isDSTShifted)) return this._isDSTShifted;
                var e = {};
                if (v(e, this), (e = xt(e))._a) {
                    var t = e._isUTC ? m(e._a) : At(e._a);
                    this._isDSTShifted = this.isValid() && w(e._a, t.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            });
            var Yn = O.prototype;

            function bn(e, t, n, r) {
                var a = mt(),
                    i = m().set(r, t);
                return a[n](i, e)
            }

            function wn(e, t, n) {
                if (u(e) && (t = e, e = void 0), e = e || "", null != t) return bn(e, t, n, "month");
                var r, a = [];
                for (r = 0; r < 12; r++) a[r] = bn(e, r, n, "month");
                return a
            }

            function kn(e, t, n, r) {
                "boolean" == typeof e ? (u(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, u(t) && (n = t, t = void 0), t = t || "");
                var a, i = mt(),
                    s = e ? i._week.dow : 0;
                if (null != n) return bn(t, (n + s) % 7, r, "day");
                var o = [];
                for (a = 0; a < 7; a++) o[a] = bn(t, (a + s) % 7, r, "day");
                return o
            }
            Yn.calendar = function(e, t, n) {
                var r = this._calendar[e] || this._calendar.sameElse;
                return j(r) ? r.call(t, n) : r
            }, Yn.longDateFormat = function(e) {
                var t = this._longDateFormat[e],
                    n = this._longDateFormat[e.toUpperCase()];
                return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                    return e.slice(1)
                }), this._longDateFormat[e])
            }, Yn.invalidDate = function() {
                return this._invalidDate
            }, Yn.ordinal = function(e) {
                return this._ordinal.replace("%d", e)
            }, Yn.preparse = Ln, Yn.postformat = Ln, Yn.relativeTime = function(e, t, n, r) {
                var a = this._relativeTime[n];
                return j(a) ? a(e, t, n, r) : a.replace(/%d/i, e)
            }, Yn.pastFuture = function(e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return j(n) ? n(t) : n.replace(/%s/i, t)
            }, Yn.set = function(e) {
                var t, n;
                for (n in e) j(t = e[n]) ? this[n] = t : this["_" + n] = t;
                this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }, Yn.months = function(e, t) {
                return e ? i(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ee).test(t) ? "format" : "standalone"][e.month()] : i(this._months) ? this._months : this._months.standalone
            }, Yn.monthsShort = function(e, t) {
                return e ? i(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ee.test(t) ? "format" : "standalone"][e.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }, Yn.monthsParse = function(e, t, n) {
                var r, a, i;
                if (this._monthsParseExact) return function(e, t, n) {
                    var r, a, i, s = e.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) i = m([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
                    return n ? "MMM" === t ? -1 !== (a = Se.call(this._shortMonthsParse, s)) ? a : null : -1 !== (a = Se.call(this._longMonthsParse, s)) ? a : null : "MMM" === t ? -1 !== (a = Se.call(this._shortMonthsParse, s)) ? a : -1 !== (a = Se.call(this._longMonthsParse, s)) ? a : null : -1 !== (a = Se.call(this._longMonthsParse, s)) ? a : -1 !== (a = Se.call(this._shortMonthsParse, s)) ? a : null
                }.call(this, e, t, n);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
                    if (a = m([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (i = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
                    if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
                    if (!n && this._monthsParse[r].test(e)) return r
                }
            }, Yn.monthsRegex = function(e) {
                return this._monthsParseExact ? (c(this, "_monthsRegex") || ze.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = Ne), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
            }, Yn.monthsShortRegex = function(e) {
                return this._monthsParseExact ? (c(this, "_monthsRegex") || ze.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = We), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }, Yn.week = function(e) {
                return qe(e, this._week.dow, this._week.doy).week
            }, Yn.firstDayOfYear = function() {
                return this._week.doy
            }, Yn.firstDayOfWeek = function() {
                return this._week.dow
            }, Yn.weekdays = function(e, t) {
                var n = i(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
                return !0 === e ? Be(n, this._week.dow) : e ? n[e.day()] : n
            }, Yn.weekdaysMin = function(e) {
                return !0 === e ? Be(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
            }, Yn.weekdaysShort = function(e) {
                return !0 === e ? Be(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
            }, Yn.weekdaysParse = function(e, t, n) {
                var r, a, i;
                if (this._weekdaysParseExact) return function(e, t, n) {
                    var r, a, i, s = e.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) i = m([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
                    return n ? "dddd" === t ? -1 !== (a = Se.call(this._weekdaysParse, s)) ? a : null : "ddd" === t ? -1 !== (a = Se.call(this._shortWeekdaysParse, s)) ? a : null : -1 !== (a = Se.call(this._minWeekdaysParse, s)) ? a : null : "dddd" === t ? -1 !== (a = Se.call(this._weekdaysParse, s)) ? a : -1 !== (a = Se.call(this._shortWeekdaysParse, s)) ? a : -1 !== (a = Se.call(this._minWeekdaysParse, s)) ? a : null : "ddd" === t ? -1 !== (a = Se.call(this._shortWeekdaysParse, s)) ? a : -1 !== (a = Se.call(this._weekdaysParse, s)) ? a : -1 !== (a = Se.call(this._minWeekdaysParse, s)) ? a : null : -1 !== (a = Se.call(this._minWeekdaysParse, s)) ? a : -1 !== (a = Se.call(this._weekdaysParse, s)) ? a : -1 !== (a = Se.call(this._shortWeekdaysParse, s)) ? a : null
                }.call(this, e, t, n);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
                    if (a = m([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(a, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (i = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[r].test(e)) return r;
                    if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
                    if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
                    if (!n && this._weekdaysParse[r].test(e)) return r
                }
            }, Yn.weekdaysRegex = function(e) {
                return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || et.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Ze), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }, Yn.weekdaysShortRegex = function(e) {
                return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || et.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Qe), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }, Yn.weekdaysMinRegex = function(e) {
                return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || et.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Xe), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }, Yn.isPM = function(e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            }, Yn.meridiem = function(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }, ct("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === b(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                }
            }), a.lang = D("moment.lang is deprecated. Use moment.locale instead.", ct), a.langData = D("moment.langData is deprecated. Use moment.localeData instead.", mt);
            var Dn = Math.abs;

            function Tn(e, t, n, r) {
                var a = Bt(t, n);
                return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble()
            }

            function Sn(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }

            function xn(e) {
                return 4800 * e / 146097
            }

            function jn(e) {
                return 146097 * e / 4800
            }

            function An(e) {
                return function() {
                    return this.as(e)
                }
            }
            var On = An("ms"),
                Hn = An("s"),
                En = An("m"),
                Pn = An("h"),
                Cn = An("d"),
                $n = An("w"),
                Fn = An("M"),
                Wn = An("Q"),
                Nn = An("y");

            function zn(e) {
                return function() {
                    return this.isValid() ? this._data[e] : NaN
                }
            }
            var Rn = zn("milliseconds"),
                In = zn("seconds"),
                Un = zn("minutes"),
                qn = zn("hours"),
                Jn = zn("days"),
                Bn = zn("months"),
                Vn = zn("years"),
                Gn = Math.round,
                Kn = {
                    ss: 44,
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                },
                Zn = Math.abs;

            function Qn(e) {
                return (e > 0) - (e < 0) || +e
            }

            function Xn() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e, t, n = Zn(this._milliseconds) / 1e3,
                    r = Zn(this._days),
                    a = Zn(this._months);
                e = Y(n / 60), t = Y(e / 60), n %= 60, e %= 60;
                var i = Y(a / 12),
                    s = a %= 12,
                    o = r,
                    u = t,
                    d = e,
                    l = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
                    c = this.asSeconds();
                if (!c) return "P0D";
                var _ = c < 0 ? "-" : "",
                    m = Qn(this._months) !== Qn(c) ? "-" : "",
                    f = Qn(this._days) !== Qn(c) ? "-" : "",
                    h = Qn(this._milliseconds) !== Qn(c) ? "-" : "";
                return _ + "P" + (i ? m + i + "Y" : "") + (s ? m + s + "M" : "") + (o ? f + o + "D" : "") + (u || d || l ? "T" : "") + (u ? h + u + "H" : "") + (d ? h + d + "M" : "") + (l ? h + l + "S" : "")
            }
            var er = Ct.prototype;
            return er.isValid = function() {
                return this._isValid
            }, er.abs = function() {
                var e = this._data;
                return this._milliseconds = Dn(this._milliseconds), this._days = Dn(this._days), this._months = Dn(this._months), e.milliseconds = Dn(e.milliseconds), e.seconds = Dn(e.seconds), e.minutes = Dn(e.minutes), e.hours = Dn(e.hours), e.months = Dn(e.months), e.years = Dn(e.years), this
            }, er.add = function(e, t) {
                return Tn(this, e, t, 1)
            }, er.subtract = function(e, t) {
                return Tn(this, e, t, -1)
            }, er.as = function(e) {
                if (!this.isValid()) return NaN;
                var t, n, r = this._milliseconds;
                if ("month" === (e = P(e)) || "quarter" === e || "year" === e) switch (t = this._days + r / 864e5, n = this._months + xn(t), e) {
                    case "month":
                        return n;
                    case "quarter":
                        return n / 3;
                    case "year":
                        return n / 12
                } else switch (t = this._days + Math.round(jn(this._months)), e) {
                    case "week":
                        return t / 7 + r / 6048e5;
                    case "day":
                        return t + r / 864e5;
                    case "hour":
                        return 24 * t + r / 36e5;
                    case "minute":
                        return 1440 * t + r / 6e4;
                    case "second":
                        return 86400 * t + r / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * t) + r;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }, er.asMilliseconds = On, er.asSeconds = Hn, er.asMinutes = En, er.asHours = Pn, er.asDays = Cn, er.asWeeks = $n, er.asMonths = Fn, er.asQuarters = Wn, er.asYears = Nn, er.valueOf = function() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12) : NaN
            }, er._bubble = function() {
                var e, t, n, r, a, i = this._milliseconds,
                    s = this._days,
                    o = this._months,
                    u = this._data;
                return i >= 0 && s >= 0 && o >= 0 || i <= 0 && s <= 0 && o <= 0 || (i += 864e5 * Sn(jn(o) + s), s = 0, o = 0), u.milliseconds = i % 1e3, e = Y(i / 1e3), u.seconds = e % 60, t = Y(e / 60), u.minutes = t % 60, n = Y(t / 60), u.hours = n % 24, s += Y(n / 24), a = Y(xn(s)), o += a, s -= Sn(jn(a)), r = Y(o / 12), o %= 12, u.days = s, u.months = o, u.years = r, this
            }, er.clone = function() {
                return Bt(this)
            }, er.get = function(e) {
                return e = P(e), this.isValid() ? this[e + "s"]() : NaN
            }, er.milliseconds = Rn, er.seconds = In, er.minutes = Un, er.hours = qn, er.days = Jn, er.weeks = function() {
                return Y(this.days() / 7)
            }, er.months = Bn, er.years = Vn, er.humanize = function(e) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t = this.localeData(),
                    n = function(e, t, n) {
                        var r = Bt(e).abs(),
                            a = Gn(r.as("s")),
                            i = Gn(r.as("m")),
                            s = Gn(r.as("h")),
                            o = Gn(r.as("d")),
                            u = Gn(r.as("M")),
                            d = Gn(r.as("y")),
                            l = a <= Kn.ss && ["s", a] || a < Kn.s && ["ss", a] || i <= 1 && ["m"] || i < Kn.m && ["mm", i] || s <= 1 && ["h"] || s < Kn.h && ["hh", s] || o <= 1 && ["d"] || o < Kn.d && ["dd", o] || u <= 1 && ["M"] || u < Kn.M && ["MM", u] || d <= 1 && ["y"] || ["yy", d];
                        return l[2] = t, l[3] = +e > 0, l[4] = n,
                            function(e, t, n, r, a) {
                                return a.relativeTime(t || 1, !!n, e, r)
                            }.apply(null, l)
                    }(this, !e, t);
                return e && (n = t.pastFuture(+this, n)), t.postformat(n)
            }, er.toISOString = Xn, er.toString = Xn, er.toJSON = Xn, er.locale = tn, er.localeData = rn, er.toIsoString = D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Xn), er.lang = nn, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), le("x", ie), le("X", /[+-]?\d+(\.\d{1,3})?/), fe("X", function(e, t, n) {
                n._d = new Date(1e3 * parseFloat(e, 10))
            }), fe("x", function(e, t, n) {
                n._d = new Date(b(e))
            }), a.version = "2.24.0", t = At, a.fn = Mn, a.min = function() {
                return Et("isBefore", [].slice.call(arguments, 0))
            }, a.max = function() {
                return Et("isAfter", [].slice.call(arguments, 0))
            }, a.now = function() {
                return Date.now ? Date.now() : +new Date
            }, a.utc = m, a.unix = function(e) {
                return At(1e3 * e)
            }, a.months = function(e, t) {
                return wn(e, t, "months")
            }, a.isDate = d, a.locale = ct, a.invalid = p, a.duration = Bt, a.isMoment = L, a.weekdays = function(e, t, n) {
                return kn(e, t, n, "weekdays")
            }, a.parseZone = function() {
                return At.apply(null, arguments).parseZone()
            }, a.localeData = mt, a.isDuration = $t, a.monthsShort = function(e, t) {
                return wn(e, t, "monthsShort")
            }, a.weekdaysMin = function(e, t, n) {
                return kn(e, t, n, "weekdaysMin")
            }, a.defineLocale = _t, a.updateLocale = function(e, t) {
                if (null != t) {
                    var n, r, a = st;
                    null != (r = lt(e)) && (a = r._config), t = A(a, t), (n = new O(t)).parentLocale = ot[e], ot[e] = n, ct(e)
                } else null != ot[e] && (null != ot[e].parentLocale ? ot[e] = ot[e].parentLocale : null != ot[e] && delete ot[e]);
                return ot[e]
            }, a.locales = function() {
                return T(ot)
            }, a.weekdaysShort = function(e, t, n) {
                return kn(e, t, n, "weekdaysShort")
            }, a.normalizeUnits = P, a.relativeTimeRounding = function(e) {
                return void 0 === e ? Gn : "function" == typeof e && (Gn = e, !0)
            }, a.relativeTimeThreshold = function(e, t) {
                return void 0 !== Kn[e] && (void 0 === t ? Kn[e] : (Kn[e] = t, "s" === e && (Kn.ss = t - 1), !0))
            }, a.calendarFormat = function(e, t) {
                var n = e.diff(t, "days", !0);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
            }, a.prototype = Mn, a.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "GGGG-[W]WW",
                MONTH: "YYYY-MM"
            }, a
        }()
    }).call(this, n(602)(e))
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r, a, i, s, o) {
        var u, d = "function" == typeof e ? e.options : e;
        if (t && (d.render = t, d.staticRenderFns = n, d._compiled = !0), r && (d.functional = !0), i && (d._scopeId = "data-v-" + i), s ? (u = function(e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), a && a.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
            }, d._ssrRegister = u) : a && (u = o ? function() {
                a.call(this, this.$root.$options.shadowRoot)
            } : a), u)
            if (d.functional) {
                d._injectStyles = u;
                var l = d.render;
                d.render = function(e, t) {
                    return u.call(t), l(e, t)
                }
            } else {
                var c = d.beforeCreate;
                d.beforeCreate = c ? [].concat(c, u) : [u]
            }
        return {
            exports: e,
            options: d
        }
    }
    n.d(t, "a", function() {
        return r
    })
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return o
    }), n.d(t, "e", function() {
        return u
    }), n.d(t, "d", function() {
        return d
    }), n.d(t, "c", function() {
        return l
    }), n.d(t, "a", function() {
        return c
    }), n.d(t, "f", function() {
        return _
    });
    n(325);
    var r = n(151),
        a = n.n(r);
    var i = window.navigator.userLanguage || window.navigator.language;

    function s(e, t) {
        return new Intl.NumberFormat(i, {
            minimumFractionDigits: t > 3 ? t : 0
        }).format((n = e, r = t, Math.trunc(n * Math.pow(10, r)) / Math.pow(10, r)));
        var n, r
    }

    function o(e) {
        return s(e, 6)
    }

    function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new Intl.NumberFormat(i, {
            maximumFractionDigits: 20,
            useGrouping: !0
        }).format(e)
    }

    function d() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = new Intl.NumberFormat(i, {
                minimumFractionDigits: 20,
                maximumFractionDigits: 20
            }).format(e);
            "0" === t.charAt(t.length - 1);) t = t.substr(0, t.length - 1);
        return Number.isNaN(Number(t.charAt(t.length - 1))) && (t = t.substr(0, t.length - 1)), t
    }

    function l() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new Intl.NumberFormat(i, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(Math.round(1e4 * e) / 100) + "%"
    }

    function c() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return a()(e).div(1e6).toNumber()
    }

    function _(e) {
        return "u" === e.charAt(0) ? e.substr(1).toUpperCase() : e.toUpperCase()
    }
}, , , , , , , , , function(e, t, n) {
    e.exports = n(148)
}, , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    }), n.d(t, "b", function() {
        return a
    });
    n(3);
    var r = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
            return e ? -1 === e.indexOf("1") ? "Not A Valid Bech32 Address" : t ? e : e.split("1")[0] + "…" + e.slice(-1 * n) : "Address Not Found"
        },
        a = function(e, t) {
            return t[e] ? t[e].moniker : r(e)
        }
}, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "withParams", {
        enumerable: !0,
        get: function() {
            return a.default
        }
    }), t.regex = t.ref = t.len = t.req = void 0;
    var r, a = (r = n(577)) && r.__esModule ? r : {
        default: r
    };

    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var s = function(e) {
        if (Array.isArray(e)) return !!e.length;
        if (null == e) return !1;
        if (!1 === e) return !0;
        if (e instanceof Date) return !isNaN(e.getTime());
        if ("object" === i(e)) {
            for (var t in e) return !0;
            return !1
        }
        return !!String(e).length
    };
    t.req = s;
    t.len = function(e) {
        return Array.isArray(e) ? e.length : "object" === i(e) ? Object.keys(e).length : String(e).length
    };
    t.ref = function(e, t, n) {
        return "function" == typeof e ? e.call(t, n) : n[e]
    };
    t.regex = function(e, t) {
        return (0, a.default)({
            type: e
        }, function(e) {
            return !s(e) || t.test(e)
        })
    }
}, , , , function(e, t) {
    function n(e, t, n, r, a, i, s) {
        try {
            var o = e[i](s),
                u = o.value
        } catch (e) {
            return void n(e)
        }
        o.done ? t(u) : Promise.resolve(u).then(r, a)
    }
    e.exports = function(e) {
        return function() {
            var t = this,
                r = arguments;
            return new Promise(function(a, i) {
                var s = e.apply(t, r);

                function o(e) {
                    n(s, a, i, o, u, "next", e)
                }

                function u(e) {
                    n(s, a, i, o, u, "throw", e)
                }
                o(void 0)
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "alpha", {
        enumerable: !0,
        get: function() {
            return r.default
        }
    }), Object.defineProperty(t, "alphaNum", {
        enumerable: !0,
        get: function() {
            return a.default
        }
    }), Object.defineProperty(t, "numeric", {
        enumerable: !0,
        get: function() {
            return i.default
        }
    }), Object.defineProperty(t, "between", {
        enumerable: !0,
        get: function() {
            return s.default
        }
    }), Object.defineProperty(t, "email", {
        enumerable: !0,
        get: function() {
            return o.default
        }
    }), Object.defineProperty(t, "ipAddress", {
        enumerable: !0,
        get: function() {
            return u.default
        }
    }), Object.defineProperty(t, "macAddress", {
        enumerable: !0,
        get: function() {
            return d.default
        }
    }), Object.defineProperty(t, "maxLength", {
        enumerable: !0,
        get: function() {
            return l.default
        }
    }), Object.defineProperty(t, "minLength", {
        enumerable: !0,
        get: function() {
            return c.default
        }
    }), Object.defineProperty(t, "required", {
        enumerable: !0,
        get: function() {
            return _.default
        }
    }), Object.defineProperty(t, "requiredIf", {
        enumerable: !0,
        get: function() {
            return m.default
        }
    }), Object.defineProperty(t, "requiredUnless", {
        enumerable: !0,
        get: function() {
            return f.default
        }
    }), Object.defineProperty(t, "sameAs", {
        enumerable: !0,
        get: function() {
            return h.default
        }
    }), Object.defineProperty(t, "url", {
        enumerable: !0,
        get: function() {
            return p.default
        }
    }), Object.defineProperty(t, "or", {
        enumerable: !0,
        get: function() {
            return y.default
        }
    }), Object.defineProperty(t, "and", {
        enumerable: !0,
        get: function() {
            return v.default
        }
    }), Object.defineProperty(t, "not", {
        enumerable: !0,
        get: function() {
            return g.default
        }
    }), Object.defineProperty(t, "minValue", {
        enumerable: !0,
        get: function() {
            return M.default
        }
    }), Object.defineProperty(t, "maxValue", {
        enumerable: !0,
        get: function() {
            return L.default
        }
    }), Object.defineProperty(t, "integer", {
        enumerable: !0,
        get: function() {
            return Y.default
        }
    }), Object.defineProperty(t, "decimal", {
        enumerable: !0,
        get: function() {
            return b.default
        }
    }), t.helpers = void 0;
    var r = k(n(576)),
        a = k(n(579)),
        i = k(n(580)),
        s = k(n(581)),
        o = k(n(582)),
        u = k(n(583)),
        d = k(n(584)),
        l = k(n(585)),
        c = k(n(586)),
        _ = k(n(587)),
        m = k(n(588)),
        f = k(n(589)),
        h = k(n(590)),
        p = k(n(591)),
        y = k(n(592)),
        v = k(n(593)),
        g = k(n(594)),
        M = k(n(595)),
        L = k(n(596)),
        Y = k(n(597)),
        b = k(n(598)),
        w = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                        r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                    }
            return t.default = e, t
        }(n(16));

    function k(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.helpers = w
}, , function(e, t) {
    e.exports = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
}, , , , , , , , , function(e, t, n) {
    var r = n(23);
    e.exports = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                a = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), a.forEach(function(t) {
                r(e, t, n[t])
            })
        }
        return e
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        /*!
         * Vue.js v2.6.10
         * (c) 2014-2019 Evan You
         * Released under the MIT License.
         */
        var n = Object.freeze({});

        function r(e) {
            return null == e
        }

        function a(e) {
            return null != e
        }

        function i(e) {
            return !0 === e
        }

        function s(e) {
            return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e
        }

        function o(e) {
            return null !== e && "object" == typeof e
        }
        var u = Object.prototype.toString;

        function d(e) {
            return "[object Object]" === u.call(e)
        }

        function l(e) {
            return "[object RegExp]" === u.call(e)
        }

        function c(e) {
            var t = parseFloat(String(e));
            return t >= 0 && Math.floor(t) === t && isFinite(e)
        }

        function _(e) {
            return a(e) && "function" == typeof e.then && "function" == typeof e.catch
        }

        function m(e) {
            return null == e ? "" : Array.isArray(e) || d(e) && e.toString === u ? JSON.stringify(e, null, 2) : String(e)
        }

        function f(e) {
            var t = parseFloat(e);
            return isNaN(t) ? e : t
        }

        function h(e, t) {
            for (var n = Object.create(null), r = e.split(","), a = 0; a < r.length; a++) n[r[a]] = !0;
            return t ? function(e) {
                return n[e.toLowerCase()]
            } : function(e) {
                return n[e]
            }
        }
        h("slot,component", !0);
        var p = h("key,ref,slot,slot-scope,is");

        function y(e, t) {
            if (e.length) {
                var n = e.indexOf(t);
                if (n > -1) return e.splice(n, 1)
            }
        }
        var v = Object.prototype.hasOwnProperty;

        function g(e, t) {
            return v.call(e, t)
        }

        function M(e) {
            var t = Object.create(null);
            return function(n) {
                return t[n] || (t[n] = e(n))
            }
        }
        var L = /-(\w)/g,
            Y = M(function(e) {
                return e.replace(L, function(e, t) {
                    return t ? t.toUpperCase() : ""
                })
            }),
            b = M(function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }),
            w = /\B([A-Z])/g,
            k = M(function(e) {
                return e.replace(w, "-$1").toLowerCase()
            });
        var D = Function.prototype.bind ? function(e, t) {
            return e.bind(t)
        } : function(e, t) {
            function n(n) {
                var r = arguments.length;
                return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
            }
            return n._length = e.length, n
        };

        function T(e, t) {
            t = t || 0;
            for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t];
            return r
        }

        function S(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function x(e) {
            for (var t = {}, n = 0; n < e.length; n++) e[n] && S(t, e[n]);
            return t
        }

        function j(e, t, n) {}
        var A = function(e, t, n) {
                return !1
            },
            O = function(e) {
                return e
            };

        function H(e, t) {
            if (e === t) return !0;
            var n = o(e),
                r = o(t);
            if (!n || !r) return !n && !r && String(e) === String(t);
            try {
                var a = Array.isArray(e),
                    i = Array.isArray(t);
                if (a && i) return e.length === t.length && e.every(function(e, n) {
                    return H(e, t[n])
                });
                if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
                if (a || i) return !1;
                var s = Object.keys(e),
                    u = Object.keys(t);
                return s.length === u.length && s.every(function(n) {
                    return H(e[n], t[n])
                })
            } catch (e) {
                return !1
            }
        }

        function E(e, t) {
            for (var n = 0; n < e.length; n++)
                if (H(e[n], t)) return n;
            return -1
        }

        function P(e) {
            var t = !1;
            return function() {
                t || (t = !0, e.apply(this, arguments))
            }
        }
        var C = "data-server-rendered",
            $ = ["component", "directive", "filter"],
            F = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
            W = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: A,
                isReservedAttr: A,
                isUnknownElement: A,
                getTagNamespace: j,
                parsePlatformTagName: O,
                mustUseProp: A,
                async: !0,
                _lifecycleHooks: F
            },
            N = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

        function z(e, t, n, r) {
            Object.defineProperty(e, t, {
                value: n,
                enumerable: !!r,
                writable: !0,
                configurable: !0
            })
        }
        var R = new RegExp("[^" + N.source + ".$_\\d]");
        var I, U = "__proto__" in {},
            q = "undefined" != typeof window,
            J = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
            B = J && WXEnvironment.platform.toLowerCase(),
            V = q && window.navigator.userAgent.toLowerCase(),
            G = V && /msie|trident/.test(V),
            K = V && V.indexOf("msie 9.0") > 0,
            Z = V && V.indexOf("edge/") > 0,
            Q = (V && V.indexOf("android"), V && /iphone|ipad|ipod|ios/.test(V) || "ios" === B),
            X = (V && /chrome\/\d+/.test(V), V && /phantomjs/.test(V), V && V.match(/firefox\/(\d+)/)),
            ee = {}.watch,
            te = !1;
        if (q) try {
            var ne = {};
            Object.defineProperty(ne, "passive", {
                get: function() {
                    te = !0
                }
            }), window.addEventListener("test-passive", null, ne)
        } catch (e) {}
        var re = function() {
                return void 0 === I && (I = !q && !J && "undefined" != typeof window && (window.process && "server" === window.process.env.VUE_ENV)), I
            },
            ae = q && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

        function ie(e) {
            return "function" == typeof e && /native code/.test(e.toString())
        }
        var se, oe = "undefined" != typeof Symbol && ie(Symbol) && "undefined" != typeof Reflect && ie(Reflect.ownKeys);
        se = "undefined" != typeof Set && ie(Set) ? Set : function() {
            function e() {
                this.set = Object.create(null)
            }
            return e.prototype.has = function(e) {
                return !0 === this.set[e]
            }, e.prototype.add = function(e) {
                this.set[e] = !0
            }, e.prototype.clear = function() {
                this.set = Object.create(null)
            }, e
        }();
        var ue = j,
            de = 0,
            le = function() {
                this.id = de++, this.subs = []
            };
        le.prototype.addSub = function(e) {
            this.subs.push(e)
        }, le.prototype.removeSub = function(e) {
            y(this.subs, e)
        }, le.prototype.depend = function() {
            le.target && le.target.addDep(this)
        }, le.prototype.notify = function() {
            var e = this.subs.slice();
            for (var t = 0, n = e.length; t < n; t++) e[t].update()
        }, le.target = null;
        var ce = [];

        function _e(e) {
            ce.push(e), le.target = e
        }

        function me() {
            ce.pop(), le.target = ce[ce.length - 1]
        }
        var fe = function(e, t, n, r, a, i, s, o) {
                this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = a, this.ns = void 0, this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = s, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = o, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
            },
            he = {
                child: {
                    configurable: !0
                }
            };
        he.child.get = function() {
            return this.componentInstance
        }, Object.defineProperties(fe.prototype, he);
        var pe = function(e) {
            void 0 === e && (e = "");
            var t = new fe;
            return t.text = e, t.isComment = !0, t
        };

        function ye(e) {
            return new fe(void 0, void 0, void 0, String(e))
        }

        function ve(e) {
            var t = new fe(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
            return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t
        }
        var ge = Array.prototype,
            Me = Object.create(ge);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(e) {
            var t = ge[e];
            z(Me, e, function() {
                for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
                var a, i = t.apply(this, n),
                    s = this.__ob__;
                switch (e) {
                    case "push":
                    case "unshift":
                        a = n;
                        break;
                    case "splice":
                        a = n.slice(2)
                }
                return a && s.observeArray(a), s.dep.notify(), i
            })
        });
        var Le = Object.getOwnPropertyNames(Me),
            Ye = !0;

        function be(e) {
            Ye = e
        }
        var we = function(e) {
            this.value = e, this.dep = new le, this.vmCount = 0, z(e, "__ob__", this), Array.isArray(e) ? (U ? function(e, t) {
                e.__proto__ = t
            }(e, Me) : function(e, t, n) {
                for (var r = 0, a = n.length; r < a; r++) {
                    var i = n[r];
                    z(e, i, t[i])
                }
            }(e, Me, Le), this.observeArray(e)) : this.walk(e)
        };

        function ke(e, t) {
            var n;
            if (o(e) && !(e instanceof fe)) return g(e, "__ob__") && e.__ob__ instanceof we ? n = e.__ob__ : Ye && !re() && (Array.isArray(e) || d(e)) && Object.isExtensible(e) && !e._isVue && (n = new we(e)), t && n && n.vmCount++, n
        }

        function De(e, t, n, r, a) {
            var i = new le,
                s = Object.getOwnPropertyDescriptor(e, t);
            if (!s || !1 !== s.configurable) {
                var o = s && s.get,
                    u = s && s.set;
                o && !u || 2 !== arguments.length || (n = e[t]);
                var d = !a && ke(n);
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                        var t = o ? o.call(e) : n;
                        return le.target && (i.depend(), d && (d.dep.depend(), Array.isArray(t) && function e(t) {
                            for (var n = void 0, r = 0, a = t.length; r < a; r++)(n = t[r]) && n.__ob__ && n.__ob__.dep.depend(), Array.isArray(n) && e(n)
                        }(t))), t
                    },
                    set: function(t) {
                        var r = o ? o.call(e) : n;
                        t === r || t != t && r != r || o && !u || (u ? u.call(e, t) : n = t, d = !a && ke(t), i.notify())
                    }
                })
            }
        }

        function Te(e, t, n) {
            if (Array.isArray(e) && c(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
            if (t in e && !(t in Object.prototype)) return e[t] = n, n;
            var r = e.__ob__;
            return e._isVue || r && r.vmCount ? n : r ? (De(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n)
        }

        function Se(e, t) {
            if (Array.isArray(e) && c(t)) e.splice(t, 1);
            else {
                var n = e.__ob__;
                e._isVue || n && n.vmCount || g(e, t) && (delete e[t], n && n.dep.notify())
            }
        }
        we.prototype.walk = function(e) {
            for (var t = Object.keys(e), n = 0; n < t.length; n++) De(e, t[n])
        }, we.prototype.observeArray = function(e) {
            for (var t = 0, n = e.length; t < n; t++) ke(e[t])
        };
        var xe = W.optionMergeStrategies;

        function je(e, t) {
            if (!t) return e;
            for (var n, r, a, i = oe ? Reflect.ownKeys(t) : Object.keys(t), s = 0; s < i.length; s++) "__ob__" !== (n = i[s]) && (r = e[n], a = t[n], g(e, n) ? r !== a && d(r) && d(a) && je(r, a) : Te(e, n, a));
            return e
        }

        function Ae(e, t, n) {
            return n ? function() {
                var r = "function" == typeof t ? t.call(n, n) : t,
                    a = "function" == typeof e ? e.call(n, n) : e;
                return r ? je(r, a) : a
            } : t ? e ? function() {
                return je("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e)
            } : t : e
        }

        function Oe(e, t) {
            var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
            return n ? function(e) {
                for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]);
                return t
            }(n) : n
        }

        function He(e, t, n, r) {
            var a = Object.create(e || null);
            return t ? S(a, t) : a
        }
        xe.data = function(e, t, n) {
            return n ? Ae(e, t, n) : t && "function" != typeof t ? e : Ae(e, t)
        }, F.forEach(function(e) {
            xe[e] = Oe
        }), $.forEach(function(e) {
            xe[e + "s"] = He
        }), xe.watch = function(e, t, n, r) {
            if (e === ee && (e = void 0), t === ee && (t = void 0), !t) return Object.create(e || null);
            if (!e) return t;
            var a = {};
            for (var i in S(a, e), t) {
                var s = a[i],
                    o = t[i];
                s && !Array.isArray(s) && (s = [s]), a[i] = s ? s.concat(o) : Array.isArray(o) ? o : [o]
            }
            return a
        }, xe.props = xe.methods = xe.inject = xe.computed = function(e, t, n, r) {
            if (!e) return t;
            var a = Object.create(null);
            return S(a, e), t && S(a, t), a
        }, xe.provide = Ae;
        var Ee = function(e, t) {
            return void 0 === t ? e : t
        };

        function Pe(e, t, n) {
            if ("function" == typeof t && (t = t.options), function(e, t) {
                    var n = e.props;
                    if (n) {
                        var r, a, i = {};
                        if (Array.isArray(n))
                            for (r = n.length; r--;) "string" == typeof(a = n[r]) && (i[Y(a)] = {
                                type: null
                            });
                        else if (d(n))
                            for (var s in n) a = n[s], i[Y(s)] = d(a) ? a : {
                                type: a
                            };
                        e.props = i
                    }
                }(t), function(e, t) {
                    var n = e.inject;
                    if (n) {
                        var r = e.inject = {};
                        if (Array.isArray(n))
                            for (var a = 0; a < n.length; a++) r[n[a]] = {
                                from: n[a]
                            };
                        else if (d(n))
                            for (var i in n) {
                                var s = n[i];
                                r[i] = d(s) ? S({
                                    from: i
                                }, s) : {
                                    from: s
                                }
                            }
                    }
                }(t), function(e) {
                    var t = e.directives;
                    if (t)
                        for (var n in t) {
                            var r = t[n];
                            "function" == typeof r && (t[n] = {
                                bind: r,
                                update: r
                            })
                        }
                }(t), !t._base && (t.extends && (e = Pe(e, t.extends, n)), t.mixins))
                for (var r = 0, a = t.mixins.length; r < a; r++) e = Pe(e, t.mixins[r], n);
            var i, s = {};
            for (i in e) o(i);
            for (i in t) g(e, i) || o(i);

            function o(r) {
                var a = xe[r] || Ee;
                s[r] = a(e[r], t[r], n, r)
            }
            return s
        }

        function Ce(e, t, n, r) {
            if ("string" == typeof n) {
                var a = e[t];
                if (g(a, n)) return a[n];
                var i = Y(n);
                if (g(a, i)) return a[i];
                var s = b(i);
                return g(a, s) ? a[s] : a[n] || a[i] || a[s]
            }
        }

        function $e(e, t, n, r) {
            var a = t[e],
                i = !g(n, e),
                s = n[e],
                o = Ne(Boolean, a.type);
            if (o > -1)
                if (i && !g(a, "default")) s = !1;
                else if ("" === s || s === k(e)) {
                var u = Ne(String, a.type);
                (u < 0 || o < u) && (s = !0)
            }
            if (void 0 === s) {
                s = function(e, t, n) {
                    if (!g(t, "default")) return;
                    var r = t.default;
                    0;
                    if (e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n]) return e._props[n];
                    return "function" == typeof r && "Function" !== Fe(t.type) ? r.call(e) : r
                }(r, a, e);
                var d = Ye;
                be(!0), ke(s), be(d)
            }
            return s
        }

        function Fe(e) {
            var t = e && e.toString().match(/^\s*function (\w+)/);
            return t ? t[1] : ""
        }

        function We(e, t) {
            return Fe(e) === Fe(t)
        }

        function Ne(e, t) {
            if (!Array.isArray(t)) return We(t, e) ? 0 : -1;
            for (var n = 0, r = t.length; n < r; n++)
                if (We(t[n], e)) return n;
            return -1
        }

        function ze(e, t, n) {
            _e();
            try {
                if (t)
                    for (var r = t; r = r.$parent;) {
                        var a = r.$options.errorCaptured;
                        if (a)
                            for (var i = 0; i < a.length; i++) try {
                                if (!1 === a[i].call(r, e, t, n)) return
                            } catch (e) {
                                Ie(e, r, "errorCaptured hook")
                            }
                    }
                Ie(e, t, n)
            } finally {
                me()
            }
        }

        function Re(e, t, n, r, a) {
            var i;
            try {
                (i = n ? e.apply(t, n) : e.call(t)) && !i._isVue && _(i) && !i._handled && (i.catch(function(e) {
                    return ze(e, r, a + " (Promise/async)")
                }), i._handled = !0)
            } catch (e) {
                ze(e, r, a)
            }
            return i
        }

        function Ie(e, t, n) {
            if (W.errorHandler) try {
                return W.errorHandler.call(null, e, t, n)
            } catch (t) {
                t !== e && Ue(t, null, "config.errorHandler")
            }
            Ue(e, t, n)
        }

        function Ue(e, t, n) {
            if (!q && !J || "undefined" == typeof console) throw e;
            console.error(e)
        }
        var qe, Je = !1,
            Be = [],
            Ve = !1;

        function Ge() {
            Ve = !1;
            var e = Be.slice(0);
            Be.length = 0;
            for (var t = 0; t < e.length; t++) e[t]()
        }
        if ("undefined" != typeof Promise && ie(Promise)) {
            var Ke = Promise.resolve();
            qe = function() {
                Ke.then(Ge), Q && setTimeout(j)
            }, Je = !0
        } else if (G || "undefined" == typeof MutationObserver || !ie(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) qe = void 0 !== e && ie(e) ? function() {
            e(Ge)
        } : function() {
            setTimeout(Ge, 0)
        };
        else {
            var Ze = 1,
                Qe = new MutationObserver(Ge),
                Xe = document.createTextNode(String(Ze));
            Qe.observe(Xe, {
                characterData: !0
            }), qe = function() {
                Ze = (Ze + 1) % 2, Xe.data = String(Ze)
            }, Je = !0
        }

        function et(e, t) {
            var n;
            if (Be.push(function() {
                    if (e) try {
                        e.call(t)
                    } catch (e) {
                        ze(e, t, "nextTick")
                    } else n && n(t)
                }), Ve || (Ve = !0, qe()), !e && "undefined" != typeof Promise) return new Promise(function(e) {
                n = e
            })
        }
        var tt = new se;

        function nt(e) {
            ! function e(t, n) {
                var r, a;
                var i = Array.isArray(t);
                if (!i && !o(t) || Object.isFrozen(t) || t instanceof fe) return;
                if (t.__ob__) {
                    var s = t.__ob__.dep.id;
                    if (n.has(s)) return;
                    n.add(s)
                }
                if (i)
                    for (r = t.length; r--;) e(t[r], n);
                else
                    for (a = Object.keys(t), r = a.length; r--;) e(t[a[r]], n)
            }(e, tt), tt.clear()
        }
        var rt = M(function(e) {
            var t = "&" === e.charAt(0),
                n = "~" === (e = t ? e.slice(1) : e).charAt(0),
                r = "!" === (e = n ? e.slice(1) : e).charAt(0);
            return {
                name: e = r ? e.slice(1) : e,
                once: n,
                capture: r,
                passive: t
            }
        });

        function at(e, t) {
            function n() {
                var e = arguments,
                    r = n.fns;
                if (!Array.isArray(r)) return Re(r, null, arguments, t, "v-on handler");
                for (var a = r.slice(), i = 0; i < a.length; i++) Re(a[i], null, e, t, "v-on handler")
            }
            return n.fns = e, n
        }

        function it(e, t, n, a, s, o) {
            var u, d, l, c;
            for (u in e) d = e[u], l = t[u], c = rt(u), r(d) || (r(l) ? (r(d.fns) && (d = e[u] = at(d, o)), i(c.once) && (d = e[u] = s(c.name, d, c.capture)), n(c.name, d, c.capture, c.passive, c.params)) : d !== l && (l.fns = d, e[u] = l));
            for (u in t) r(e[u]) && a((c = rt(u)).name, t[u], c.capture)
        }

        function st(e, t, n) {
            var s;
            e instanceof fe && (e = e.data.hook || (e.data.hook = {}));
            var o = e[t];

            function u() {
                n.apply(this, arguments), y(s.fns, u)
            }
            r(o) ? s = at([u]) : a(o.fns) && i(o.merged) ? (s = o).fns.push(u) : s = at([o, u]), s.merged = !0, e[t] = s
        }

        function ot(e, t, n, r, i) {
            if (a(t)) {
                if (g(t, n)) return e[n] = t[n], i || delete t[n], !0;
                if (g(t, r)) return e[n] = t[r], i || delete t[r], !0
            }
            return !1
        }

        function ut(e) {
            return s(e) ? [ye(e)] : Array.isArray(e) ? function e(t, n) {
                var o = [];
                var u, d, l, c;
                for (u = 0; u < t.length; u++) r(d = t[u]) || "boolean" == typeof d || (l = o.length - 1, c = o[l], Array.isArray(d) ? d.length > 0 && (dt((d = e(d, (n || "") + "_" + u))[0]) && dt(c) && (o[l] = ye(c.text + d[0].text), d.shift()), o.push.apply(o, d)) : s(d) ? dt(c) ? o[l] = ye(c.text + d) : "" !== d && o.push(ye(d)) : dt(d) && dt(c) ? o[l] = ye(c.text + d.text) : (i(t._isVList) && a(d.tag) && r(d.key) && a(n) && (d.key = "__vlist" + n + "_" + u + "__"), o.push(d)));
                return o
            }(e) : void 0
        }

        function dt(e) {
            return a(e) && a(e.text) && !1 === e.isComment
        }

        function lt(e, t) {
            if (e) {
                for (var n = Object.create(null), r = oe ? Reflect.ownKeys(e) : Object.keys(e), a = 0; a < r.length; a++) {
                    var i = r[a];
                    if ("__ob__" !== i) {
                        for (var s = e[i].from, o = t; o;) {
                            if (o._provided && g(o._provided, s)) {
                                n[i] = o._provided[s];
                                break
                            }
                            o = o.$parent
                        }
                        if (!o)
                            if ("default" in e[i]) {
                                var u = e[i].default;
                                n[i] = "function" == typeof u ? u.call(t) : u
                            } else 0
                    }
                }
                return n
            }
        }

        function ct(e, t) {
            if (!e || !e.length) return {};
            for (var n = {}, r = 0, a = e.length; r < a; r++) {
                var i = e[r],
                    s = i.data;
                if (s && s.attrs && s.attrs.slot && delete s.attrs.slot, i.context !== t && i.fnContext !== t || !s || null == s.slot)(n.default || (n.default = [])).push(i);
                else {
                    var o = s.slot,
                        u = n[o] || (n[o] = []);
                    "template" === i.tag ? u.push.apply(u, i.children || []) : u.push(i)
                }
            }
            for (var d in n) n[d].every(_t) && delete n[d];
            return n
        }

        function _t(e) {
            return e.isComment && !e.asyncFactory || " " === e.text
        }

        function mt(e, t, r) {
            var a, i = Object.keys(t).length > 0,
                s = e ? !!e.$stable : !i,
                o = e && e.$key;
            if (e) {
                if (e._normalized) return e._normalized;
                if (s && r && r !== n && o === r.$key && !i && !r.$hasNormal) return r;
                for (var u in a = {}, e) e[u] && "$" !== u[0] && (a[u] = ft(t, u, e[u]))
            } else a = {};
            for (var d in t) d in a || (a[d] = ht(t, d));
            return e && Object.isExtensible(e) && (e._normalized = a), z(a, "$stable", s), z(a, "$key", o), z(a, "$hasNormal", i), a
        }

        function ft(e, t, n) {
            var r = function() {
                var e = arguments.length ? n.apply(null, arguments) : n({});
                return (e = e && "object" == typeof e && !Array.isArray(e) ? [e] : ut(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e
            };
            return n.proxy && Object.defineProperty(e, t, {
                get: r,
                enumerable: !0,
                configurable: !0
            }), r
        }

        function ht(e, t) {
            return function() {
                return e[t]
            }
        }

        function pt(e, t) {
            var n, r, i, s, u;
            if (Array.isArray(e) || "string" == typeof e)
                for (n = new Array(e.length), r = 0, i = e.length; r < i; r++) n[r] = t(e[r], r);
            else if ("number" == typeof e)
                for (n = new Array(e), r = 0; r < e; r++) n[r] = t(r + 1, r);
            else if (o(e))
                if (oe && e[Symbol.iterator]) {
                    n = [];
                    for (var d = e[Symbol.iterator](), l = d.next(); !l.done;) n.push(t(l.value, n.length)), l = d.next()
                } else
                    for (s = Object.keys(e), n = new Array(s.length), r = 0, i = s.length; r < i; r++) u = s[r], n[r] = t(e[u], u, r);
            return a(n) || (n = []), n._isVList = !0, n
        }

        function yt(e, t, n, r) {
            var a, i = this.$scopedSlots[e];
            i ? (n = n || {}, r && (n = S(S({}, r), n)), a = i(n) || t) : a = this.$slots[e] || t;
            var s = n && n.slot;
            return s ? this.$createElement("template", {
                slot: s
            }, a) : a
        }

        function vt(e) {
            return Ce(this.$options, "filters", e) || O
        }

        function gt(e, t) {
            return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t
        }

        function Mt(e, t, n, r, a) {
            var i = W.keyCodes[t] || n;
            return a && r && !W.keyCodes[t] ? gt(a, r) : i ? gt(i, e) : r ? k(r) !== t : void 0
        }

        function Lt(e, t, n, r, a) {
            if (n)
                if (o(n)) {
                    var i;
                    Array.isArray(n) && (n = x(n));
                    var s = function(s) {
                        if ("class" === s || "style" === s || p(s)) i = e;
                        else {
                            var o = e.attrs && e.attrs.type;
                            i = r || W.mustUseProp(t, o, s) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                        }
                        var u = Y(s),
                            d = k(s);
                        u in i || d in i || (i[s] = n[s], a && ((e.on || (e.on = {}))["update:" + s] = function(e) {
                            n[s] = e
                        }))
                    };
                    for (var u in n) s(u)
                } else;
            return e
        }

        function Yt(e, t) {
            var n = this._staticTrees || (this._staticTrees = []),
                r = n[e];
            return r && !t ? r : (wt(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), r)
        }

        function bt(e, t, n) {
            return wt(e, "__once__" + t + (n ? "_" + n : ""), !0), e
        }

        function wt(e, t, n) {
            if (Array.isArray(e))
                for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && kt(e[r], t + "_" + r, n);
            else kt(e, t, n)
        }

        function kt(e, t, n) {
            e.isStatic = !0, e.key = t, e.isOnce = n
        }

        function Dt(e, t) {
            if (t)
                if (d(t)) {
                    var n = e.on = e.on ? S({}, e.on) : {};
                    for (var r in t) {
                        var a = n[r],
                            i = t[r];
                        n[r] = a ? [].concat(a, i) : i
                    }
                } else;
            return e
        }

        function Tt(e, t, n, r) {
            t = t || {
                $stable: !n
            };
            for (var a = 0; a < e.length; a++) {
                var i = e[a];
                Array.isArray(i) ? Tt(i, t, n) : i && (i.proxy && (i.fn.proxy = !0), t[i.key] = i.fn)
            }
            return r && (t.$key = r), t
        }

        function St(e, t) {
            for (var n = 0; n < t.length; n += 2) {
                var r = t[n];
                "string" == typeof r && r && (e[t[n]] = t[n + 1])
            }
            return e
        }

        function xt(e, t) {
            return "string" == typeof e ? t + e : e
        }

        function jt(e) {
            e._o = bt, e._n = f, e._s = m, e._l = pt, e._t = yt, e._q = H, e._i = E, e._m = Yt, e._f = vt, e._k = Mt, e._b = Lt, e._v = ye, e._e = pe, e._u = Tt, e._g = Dt, e._d = St, e._p = xt
        }

        function At(e, t, r, a, s) {
            var o, u = this,
                d = s.options;
            g(a, "_uid") ? (o = Object.create(a))._original = a : (o = a, a = a._original);
            var l = i(d._compiled),
                c = !l;
            this.data = e, this.props = t, this.children = r, this.parent = a, this.listeners = e.on || n, this.injections = lt(d.inject, a), this.slots = function() {
                return u.$slots || mt(e.scopedSlots, u.$slots = ct(r, a)), u.$slots
            }, Object.defineProperty(this, "scopedSlots", {
                enumerable: !0,
                get: function() {
                    return mt(e.scopedSlots, this.slots())
                }
            }), l && (this.$options = d, this.$slots = this.slots(), this.$scopedSlots = mt(e.scopedSlots, this.$slots)), d._scopeId ? this._c = function(e, t, n, r) {
                var i = Nt(o, e, t, n, r, c);
                return i && !Array.isArray(i) && (i.fnScopeId = d._scopeId, i.fnContext = a), i
            } : this._c = function(e, t, n, r) {
                return Nt(o, e, t, n, r, c)
            }
        }

        function Ot(e, t, n, r, a) {
            var i = ve(e);
            return i.fnContext = n, i.fnOptions = r, t.slot && ((i.data || (i.data = {})).slot = t.slot), i
        }

        function Ht(e, t) {
            for (var n in t) e[Y(n)] = t[n]
        }
        jt(At.prototype);
        var Et = {
                init: function(e, t) {
                    if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                        var n = e;
                        Et.prepatch(n, n)
                    } else {
                        (e.componentInstance = function(e, t) {
                            var n = {
                                    _isComponent: !0,
                                    _parentVnode: e,
                                    parent: t
                                },
                                r = e.data.inlineTemplate;
                            a(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns);
                            return new e.componentOptions.Ctor(n)
                        }(e, Kt)).$mount(t ? e.elm : void 0, t)
                    }
                },
                prepatch: function(e, t) {
                    var r = t.componentOptions;
                    ! function(e, t, r, a, i) {
                        0;
                        var s = a.data.scopedSlots,
                            o = e.$scopedSlots,
                            u = !!(s && !s.$stable || o !== n && !o.$stable || s && e.$scopedSlots.$key !== s.$key),
                            d = !!(i || e.$options._renderChildren || u);
                        e.$options._parentVnode = a, e.$vnode = a, e._vnode && (e._vnode.parent = a);
                        if (e.$options._renderChildren = i, e.$attrs = a.data.attrs || n, e.$listeners = r || n, t && e.$options.props) {
                            be(!1);
                            for (var l = e._props, c = e.$options._propKeys || [], _ = 0; _ < c.length; _++) {
                                var m = c[_],
                                    f = e.$options.props;
                                l[m] = $e(m, f, t, e)
                            }
                            be(!0), e.$options.propsData = t
                        }
                        r = r || n;
                        var h = e.$options._parentListeners;
                        e.$options._parentListeners = r, Gt(e, r, h), d && (e.$slots = ct(i, a.context), e.$forceUpdate());
                        0
                    }(t.componentInstance = e.componentInstance, r.propsData, r.listeners, t, r.children)
                },
                insert: function(e) {
                    var t, n = e.context,
                        r = e.componentInstance;
                    r._isMounted || (r._isMounted = !0, en(r, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = r)._inactive = !1, nn.push(t)) : Xt(r, !0))
                },
                destroy: function(e) {
                    var t = e.componentInstance;
                    t._isDestroyed || (e.data.keepAlive ? function e(t, n) {
                        if (n && (t._directInactive = !0, Qt(t))) return;
                        if (!t._inactive) {
                            t._inactive = !0;
                            for (var r = 0; r < t.$children.length; r++) e(t.$children[r]);
                            en(t, "deactivated")
                        }
                    }(t, !0) : t.$destroy())
                }
            },
            Pt = Object.keys(Et);

        function Ct(e, t, s, u, d) {
            if (!r(e)) {
                var l = s.$options._base;
                if (o(e) && (e = l.extend(e)), "function" == typeof e) {
                    var c;
                    if (r(e.cid) && void 0 === (e = function(e, t) {
                            if (i(e.error) && a(e.errorComp)) return e.errorComp;
                            if (a(e.resolved)) return e.resolved;
                            var n = Rt;
                            n && a(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n);
                            if (i(e.loading) && a(e.loadingComp)) return e.loadingComp;
                            if (n && !a(e.owners)) {
                                var s = e.owners = [n],
                                    u = !0,
                                    d = null,
                                    l = null;
                                n.$on("hook:destroyed", function() {
                                    return y(s, n)
                                });
                                var c = function(e) {
                                        for (var t = 0, n = s.length; t < n; t++) s[t].$forceUpdate();
                                        e && (s.length = 0, null !== d && (clearTimeout(d), d = null), null !== l && (clearTimeout(l), l = null))
                                    },
                                    m = P(function(n) {
                                        e.resolved = It(n, t), u ? s.length = 0 : c(!0)
                                    }),
                                    f = P(function(t) {
                                        a(e.errorComp) && (e.error = !0, c(!0))
                                    }),
                                    h = e(m, f);
                                return o(h) && (_(h) ? r(e.resolved) && h.then(m, f) : _(h.component) && (h.component.then(m, f), a(h.error) && (e.errorComp = It(h.error, t)), a(h.loading) && (e.loadingComp = It(h.loading, t), 0 === h.delay ? e.loading = !0 : d = setTimeout(function() {
                                    d = null, r(e.resolved) && r(e.error) && (e.loading = !0, c(!1))
                                }, h.delay || 200)), a(h.timeout) && (l = setTimeout(function() {
                                    l = null, r(e.resolved) && f(null)
                                }, h.timeout)))), u = !1, e.loading ? e.loadingComp : e.resolved
                            }
                        }(c = e, l))) return function(e, t, n, r, a) {
                        var i = pe();
                        return i.asyncFactory = e, i.asyncMeta = {
                            data: t,
                            context: n,
                            children: r,
                            tag: a
                        }, i
                    }(c, t, s, u, d);
                    t = t || {}, bn(e), a(t.model) && function(e, t) {
                        var n = e.model && e.model.prop || "value",
                            r = e.model && e.model.event || "input";
                        (t.attrs || (t.attrs = {}))[n] = t.model.value;
                        var i = t.on || (t.on = {}),
                            s = i[r],
                            o = t.model.callback;
                        a(s) ? (Array.isArray(s) ? -1 === s.indexOf(o) : s !== o) && (i[r] = [o].concat(s)) : i[r] = o
                    }(e.options, t);
                    var m = function(e, t, n) {
                        var i = t.options.props;
                        if (!r(i)) {
                            var s = {},
                                o = e.attrs,
                                u = e.props;
                            if (a(o) || a(u))
                                for (var d in i) {
                                    var l = k(d);
                                    ot(s, u, d, l, !0) || ot(s, o, d, l, !1)
                                }
                            return s
                        }
                    }(t, e);
                    if (i(e.options.functional)) return function(e, t, r, i, s) {
                        var o = e.options,
                            u = {},
                            d = o.props;
                        if (a(d))
                            for (var l in d) u[l] = $e(l, d, t || n);
                        else a(r.attrs) && Ht(u, r.attrs), a(r.props) && Ht(u, r.props);
                        var c = new At(r, u, s, i, e),
                            _ = o.render.call(null, c._c, c);
                        if (_ instanceof fe) return Ot(_, r, c.parent, o);
                        if (Array.isArray(_)) {
                            for (var m = ut(_) || [], f = new Array(m.length), h = 0; h < m.length; h++) f[h] = Ot(m[h], r, c.parent, o);
                            return f
                        }
                    }(e, m, t, s, u);
                    var f = t.on;
                    if (t.on = t.nativeOn, i(e.options.abstract)) {
                        var h = t.slot;
                        t = {}, h && (t.slot = h)
                    }! function(e) {
                        for (var t = e.hook || (e.hook = {}), n = 0; n < Pt.length; n++) {
                            var r = Pt[n],
                                a = t[r],
                                i = Et[r];
                            a === i || a && a._merged || (t[r] = a ? $t(i, a) : i)
                        }
                    }(t);
                    var p = e.options.name || d;
                    return new fe("vue-component-" + e.cid + (p ? "-" + p : ""), t, void 0, void 0, void 0, s, {
                        Ctor: e,
                        propsData: m,
                        listeners: f,
                        tag: d,
                        children: u
                    }, c)
                }
            }
        }

        function $t(e, t) {
            var n = function(n, r) {
                e(n, r), t(n, r)
            };
            return n._merged = !0, n
        }
        var Ft = 1,
            Wt = 2;

        function Nt(e, t, n, u, d, l) {
            return (Array.isArray(n) || s(n)) && (d = u, u = n, n = void 0), i(l) && (d = Wt),
                function(e, t, n, s, u) {
                    if (a(n) && a(n.__ob__)) return pe();
                    a(n) && a(n.is) && (t = n.is);
                    if (!t) return pe();
                    0;
                    Array.isArray(s) && "function" == typeof s[0] && ((n = n || {}).scopedSlots = {
                        default: s[0]
                    }, s.length = 0);
                    u === Wt ? s = ut(s) : u === Ft && (s = function(e) {
                        for (var t = 0; t < e.length; t++)
                            if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                        return e
                    }(s));
                    var d, l;
                    if ("string" == typeof t) {
                        var c;
                        l = e.$vnode && e.$vnode.ns || W.getTagNamespace(t), d = W.isReservedTag(t) ? new fe(W.parsePlatformTagName(t), n, s, void 0, void 0, e) : n && n.pre || !a(c = Ce(e.$options, "components", t)) ? new fe(t, n, s, void 0, void 0, e) : Ct(c, n, e, s, t)
                    } else d = Ct(t, n, e, s);
                    return Array.isArray(d) ? d : a(d) ? (a(l) && function e(t, n, s) {
                        t.ns = n;
                        "foreignObject" === t.tag && (n = void 0, s = !0);
                        if (a(t.children))
                            for (var o = 0, u = t.children.length; o < u; o++) {
                                var d = t.children[o];
                                a(d.tag) && (r(d.ns) || i(s) && "svg" !== d.tag) && e(d, n, s)
                            }
                    }(d, l), a(n) && function(e) {
                        o(e.style) && nt(e.style);
                        o(e.class) && nt(e.class)
                    }(n), d) : pe()
                }(e, t, n, u, d)
        }
        var zt, Rt = null;

        function It(e, t) {
            return (e.__esModule || oe && "Module" === e[Symbol.toStringTag]) && (e = e.default), o(e) ? t.extend(e) : e
        }

        function Ut(e) {
            return e.isComment && e.asyncFactory
        }

        function qt(e) {
            if (Array.isArray(e))
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (a(n) && (a(n.componentOptions) || Ut(n))) return n
                }
        }

        function Jt(e, t) {
            zt.$on(e, t)
        }

        function Bt(e, t) {
            zt.$off(e, t)
        }

        function Vt(e, t) {
            var n = zt;
            return function r() {
                null !== t.apply(null, arguments) && n.$off(e, r)
            }
        }

        function Gt(e, t, n) {
            zt = e, it(t, n || {}, Jt, Bt, Vt, e), zt = void 0
        }
        var Kt = null;

        function Zt(e) {
            var t = Kt;
            return Kt = e,
                function() {
                    Kt = t
                }
        }

        function Qt(e) {
            for (; e && (e = e.$parent);)
                if (e._inactive) return !0;
            return !1
        }

        function Xt(e, t) {
            if (t) {
                if (e._directInactive = !1, Qt(e)) return
            } else if (e._directInactive) return;
            if (e._inactive || null === e._inactive) {
                e._inactive = !1;
                for (var n = 0; n < e.$children.length; n++) Xt(e.$children[n]);
                en(e, "activated")
            }
        }

        function en(e, t) {
            _e();
            var n = e.$options[t],
                r = t + " hook";
            if (n)
                for (var a = 0, i = n.length; a < i; a++) Re(n[a], e, null, e, r);
            e._hasHookEvent && e.$emit("hook:" + t), me()
        }
        var tn = [],
            nn = [],
            rn = {},
            an = !1,
            sn = !1,
            on = 0;
        var un = 0,
            dn = Date.now;
        if (q && !G) {
            var ln = window.performance;
            ln && "function" == typeof ln.now && dn() > document.createEvent("Event").timeStamp && (dn = function() {
                return ln.now()
            })
        }

        function cn() {
            var e, t;
            for (un = dn(), sn = !0, tn.sort(function(e, t) {
                    return e.id - t.id
                }), on = 0; on < tn.length; on++)(e = tn[on]).before && e.before(), t = e.id, rn[t] = null, e.run();
            var n = nn.slice(),
                r = tn.slice();
            on = tn.length = nn.length = 0, rn = {}, an = sn = !1,
                function(e) {
                    for (var t = 0; t < e.length; t++) e[t]._inactive = !0, Xt(e[t], !0)
                }(n),
                function(e) {
                    var t = e.length;
                    for (; t--;) {
                        var n = e[t],
                            r = n.vm;
                        r._watcher === n && r._isMounted && !r._isDestroyed && en(r, "updated")
                    }
                }(r), ae && W.devtools && ae.emit("flush")
        }
        var _n = 0,
            mn = function(e, t, n, r, a) {
                this.vm = e, a && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++_n, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new se, this.newDepIds = new se, this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function(e) {
                    if (!R.test(e)) {
                        var t = e.split(".");
                        return function(e) {
                            for (var n = 0; n < t.length; n++) {
                                if (!e) return;
                                e = e[t[n]]
                            }
                            return e
                        }
                    }
                }(t), this.getter || (this.getter = j)), this.value = this.lazy ? void 0 : this.get()
            };
        mn.prototype.get = function() {
            var e;
            _e(this);
            var t = this.vm;
            try {
                e = this.getter.call(t, t)
            } catch (e) {
                if (!this.user) throw e;
                ze(e, t, 'getter for watcher "' + this.expression + '"')
            } finally {
                this.deep && nt(e), me(), this.cleanupDeps()
            }
            return e
        }, mn.prototype.addDep = function(e) {
            var t = e.id;
            this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
        }, mn.prototype.cleanupDeps = function() {
            for (var e = this.deps.length; e--;) {
                var t = this.deps[e];
                this.newDepIds.has(t.id) || t.removeSub(this)
            }
            var n = this.depIds;
            this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
        }, mn.prototype.update = function() {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(e) {
                var t = e.id;
                if (null == rn[t]) {
                    if (rn[t] = !0, sn) {
                        for (var n = tn.length - 1; n > on && tn[n].id > e.id;) n--;
                        tn.splice(n + 1, 0, e)
                    } else tn.push(e);
                    an || (an = !0, et(cn))
                }
            }(this)
        }, mn.prototype.run = function() {
            if (this.active) {
                var e = this.get();
                if (e !== this.value || o(e) || this.deep) {
                    var t = this.value;
                    if (this.value = e, this.user) try {
                        this.cb.call(this.vm, e, t)
                    } catch (e) {
                        ze(e, this.vm, 'callback for watcher "' + this.expression + '"')
                    } else this.cb.call(this.vm, e, t)
                }
            }
        }, mn.prototype.evaluate = function() {
            this.value = this.get(), this.dirty = !1
        }, mn.prototype.depend = function() {
            for (var e = this.deps.length; e--;) this.deps[e].depend()
        }, mn.prototype.teardown = function() {
            if (this.active) {
                this.vm._isBeingDestroyed || y(this.vm._watchers, this);
                for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
                this.active = !1
            }
        };
        var fn = {
            enumerable: !0,
            configurable: !0,
            get: j,
            set: j
        };

        function hn(e, t, n) {
            fn.get = function() {
                return this[t][n]
            }, fn.set = function(e) {
                this[t][n] = e
            }, Object.defineProperty(e, n, fn)
        }

        function pn(e) {
            e._watchers = [];
            var t = e.$options;
            t.props && function(e, t) {
                var n = e.$options.propsData || {},
                    r = e._props = {},
                    a = e.$options._propKeys = [];
                e.$parent && be(!1);
                var i = function(i) {
                    a.push(i);
                    var s = $e(i, t, n, e);
                    De(r, i, s), i in e || hn(e, "_props", i)
                };
                for (var s in t) i(s);
                be(!0)
            }(e, t.props), t.methods && function(e, t) {
                e.$options.props;
                for (var n in t) e[n] = "function" != typeof t[n] ? j : D(t[n], e)
            }(e, t.methods), t.data ? function(e) {
                var t = e.$options.data;
                d(t = e._data = "function" == typeof t ? function(e, t) {
                    _e();
                    try {
                        return e.call(t, t)
                    } catch (e) {
                        return ze(e, t, "data()"), {}
                    } finally {
                        me()
                    }
                }(t, e) : t || {}) || (t = {});
                var n = Object.keys(t),
                    r = e.$options.props,
                    a = (e.$options.methods, n.length);
                for (; a--;) {
                    var i = n[a];
                    0, r && g(r, i) || (s = void 0, 36 !== (s = (i + "").charCodeAt(0)) && 95 !== s && hn(e, "_data", i))
                }
                var s;
                ke(t, !0)
            }(e) : ke(e._data = {}, !0), t.computed && function(e, t) {
                var n = e._computedWatchers = Object.create(null),
                    r = re();
                for (var a in t) {
                    var i = t[a],
                        s = "function" == typeof i ? i : i.get;
                    0, r || (n[a] = new mn(e, s || j, j, yn)), a in e || vn(e, a, i)
                }
            }(e, t.computed), t.watch && t.watch !== ee && function(e, t) {
                for (var n in t) {
                    var r = t[n];
                    if (Array.isArray(r))
                        for (var a = 0; a < r.length; a++) Ln(e, n, r[a]);
                    else Ln(e, n, r)
                }
            }(e, t.watch)
        }
        var yn = {
            lazy: !0
        };

        function vn(e, t, n) {
            var r = !re();
            "function" == typeof n ? (fn.get = r ? gn(t) : Mn(n), fn.set = j) : (fn.get = n.get ? r && !1 !== n.cache ? gn(t) : Mn(n.get) : j, fn.set = n.set || j), Object.defineProperty(e, t, fn)
        }

        function gn(e) {
            return function() {
                var t = this._computedWatchers && this._computedWatchers[e];
                if (t) return t.dirty && t.evaluate(), le.target && t.depend(), t.value
            }
        }

        function Mn(e) {
            return function() {
                return e.call(this, this)
            }
        }

        function Ln(e, t, n, r) {
            return d(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r)
        }
        var Yn = 0;

        function bn(e) {
            var t = e.options;
            if (e.super) {
                var n = bn(e.super);
                if (n !== e.superOptions) {
                    e.superOptions = n;
                    var r = function(e) {
                        var t, n = e.options,
                            r = e.sealedOptions;
                        for (var a in n) n[a] !== r[a] && (t || (t = {}), t[a] = n[a]);
                        return t
                    }(e);
                    r && S(e.extendOptions, r), (t = e.options = Pe(n, e.extendOptions)).name && (t.components[t.name] = e)
                }
            }
            return t
        }

        function wn(e) {
            this._init(e)
        }

        function kn(e) {
            e.cid = 0;
            var t = 1;
            e.extend = function(e) {
                e = e || {};
                var n = this,
                    r = n.cid,
                    a = e._Ctor || (e._Ctor = {});
                if (a[r]) return a[r];
                var i = e.name || n.options.name;
                var s = function(e) {
                    this._init(e)
                };
                return (s.prototype = Object.create(n.prototype)).constructor = s, s.cid = t++, s.options = Pe(n.options, e), s.super = n, s.options.props && function(e) {
                    var t = e.options.props;
                    for (var n in t) hn(e.prototype, "_props", n)
                }(s), s.options.computed && function(e) {
                    var t = e.options.computed;
                    for (var n in t) vn(e.prototype, n, t[n])
                }(s), s.extend = n.extend, s.mixin = n.mixin, s.use = n.use, $.forEach(function(e) {
                    s[e] = n[e]
                }), i && (s.options.components[i] = s), s.superOptions = n.options, s.extendOptions = e, s.sealedOptions = S({}, s.options), a[r] = s, s
            }
        }

        function Dn(e) {
            return e && (e.Ctor.options.name || e.tag)
        }

        function Tn(e, t) {
            return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!l(e) && e.test(t)
        }

        function Sn(e, t) {
            var n = e.cache,
                r = e.keys,
                a = e._vnode;
            for (var i in n) {
                var s = n[i];
                if (s) {
                    var o = Dn(s.componentOptions);
                    o && !t(o) && xn(n, i, r, a)
                }
            }
        }

        function xn(e, t, n, r) {
            var a = e[t];
            !a || r && a.tag === r.tag || a.componentInstance.$destroy(), e[t] = null, y(n, t)
        }! function(e) {
            e.prototype._init = function(e) {
                var t = this;
                t._uid = Yn++, t._isVue = !0, e && e._isComponent ? function(e, t) {
                        var n = e.$options = Object.create(e.constructor.options),
                            r = t._parentVnode;
                        n.parent = t.parent, n._parentVnode = r;
                        var a = r.componentOptions;
                        n.propsData = a.propsData, n._parentListeners = a.listeners, n._renderChildren = a.children, n._componentTag = a.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
                    }(t, e) : t.$options = Pe(bn(t.constructor), e || {}, t), t._renderProxy = t, t._self = t,
                    function(e) {
                        var t = e.$options,
                            n = t.parent;
                        if (n && !t.abstract) {
                            for (; n.$options.abstract && n.$parent;) n = n.$parent;
                            n.$children.push(e)
                        }
                        e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
                    }(t),
                    function(e) {
                        e._events = Object.create(null), e._hasHookEvent = !1;
                        var t = e.$options._parentListeners;
                        t && Gt(e, t)
                    }(t),
                    function(e) {
                        e._vnode = null, e._staticTrees = null;
                        var t = e.$options,
                            r = e.$vnode = t._parentVnode,
                            a = r && r.context;
                        e.$slots = ct(t._renderChildren, a), e.$scopedSlots = n, e._c = function(t, n, r, a) {
                            return Nt(e, t, n, r, a, !1)
                        }, e.$createElement = function(t, n, r, a) {
                            return Nt(e, t, n, r, a, !0)
                        };
                        var i = r && r.data;
                        De(e, "$attrs", i && i.attrs || n, null, !0), De(e, "$listeners", t._parentListeners || n, null, !0)
                    }(t), en(t, "beforeCreate"),
                    function(e) {
                        var t = lt(e.$options.inject, e);
                        t && (be(!1), Object.keys(t).forEach(function(n) {
                            De(e, n, t[n])
                        }), be(!0))
                    }(t), pn(t),
                    function(e) {
                        var t = e.$options.provide;
                        t && (e._provided = "function" == typeof t ? t.call(e) : t)
                    }(t), en(t, "created"), t.$options.el && t.$mount(t.$options.el)
            }
        }(wn),
        function(e) {
            var t = {
                    get: function() {
                        return this._data
                    }
                },
                n = {
                    get: function() {
                        return this._props
                    }
                };
            Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = Te, e.prototype.$delete = Se, e.prototype.$watch = function(e, t, n) {
                if (d(t)) return Ln(this, e, t, n);
                (n = n || {}).user = !0;
                var r = new mn(this, e, t, n);
                if (n.immediate) try {
                    t.call(this, r.value)
                } catch (e) {
                    ze(e, this, 'callback for immediate watcher "' + r.expression + '"')
                }
                return function() {
                    r.teardown()
                }
            }
        }(wn),
        function(e) {
            var t = /^hook:/;
            e.prototype.$on = function(e, n) {
                var r = this;
                if (Array.isArray(e))
                    for (var a = 0, i = e.length; a < i; a++) r.$on(e[a], n);
                else(r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);
                return r
            }, e.prototype.$once = function(e, t) {
                var n = this;

                function r() {
                    n.$off(e, r), t.apply(n, arguments)
                }
                return r.fn = t, n.$on(e, r), n
            }, e.prototype.$off = function(e, t) {
                var n = this;
                if (!arguments.length) return n._events = Object.create(null), n;
                if (Array.isArray(e)) {
                    for (var r = 0, a = e.length; r < a; r++) n.$off(e[r], t);
                    return n
                }
                var i, s = n._events[e];
                if (!s) return n;
                if (!t) return n._events[e] = null, n;
                for (var o = s.length; o--;)
                    if ((i = s[o]) === t || i.fn === t) {
                        s.splice(o, 1);
                        break
                    }
                return n
            }, e.prototype.$emit = function(e) {
                var t = this._events[e];
                if (t) {
                    t = t.length > 1 ? T(t) : t;
                    for (var n = T(arguments, 1), r = 'event handler for "' + e + '"', a = 0, i = t.length; a < i; a++) Re(t[a], this, n, this, r)
                }
                return this
            }
        }(wn),
        function(e) {
            e.prototype._update = function(e, t) {
                var n = this,
                    r = n.$el,
                    a = n._vnode,
                    i = Zt(n);
                n._vnode = e, n.$el = a ? n.__patch__(a, e) : n.__patch__(n.$el, e, t, !1), i(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
            }, e.prototype.$forceUpdate = function() {
                this._watcher && this._watcher.update()
            }, e.prototype.$destroy = function() {
                var e = this;
                if (!e._isBeingDestroyed) {
                    en(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                    var t = e.$parent;
                    !t || t._isBeingDestroyed || e.$options.abstract || y(t.$children, e), e._watcher && e._watcher.teardown();
                    for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
                    e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), en(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
                }
            }
        }(wn),
        function(e) {
            jt(e.prototype), e.prototype.$nextTick = function(e) {
                return et(e, this)
            }, e.prototype._render = function() {
                var e, t = this,
                    n = t.$options,
                    r = n.render,
                    a = n._parentVnode;
                a && (t.$scopedSlots = mt(a.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = a;
                try {
                    Rt = t, e = r.call(t._renderProxy, t.$createElement)
                } catch (n) {
                    ze(n, t, "render"), e = t._vnode
                } finally {
                    Rt = null
                }
                return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof fe || (e = pe()), e.parent = a, e
            }
        }(wn);
        var jn = [String, RegExp, Array],
            An = {
                KeepAlive: {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: jn,
                        exclude: jn,
                        max: [String, Number]
                    },
                    created: function() {
                        this.cache = Object.create(null), this.keys = []
                    },
                    destroyed: function() {
                        for (var e in this.cache) xn(this.cache, e, this.keys)
                    },
                    mounted: function() {
                        var e = this;
                        this.$watch("include", function(t) {
                            Sn(e, function(e) {
                                return Tn(t, e)
                            })
                        }), this.$watch("exclude", function(t) {
                            Sn(e, function(e) {
                                return !Tn(t, e)
                            })
                        })
                    },
                    render: function() {
                        var e = this.$slots.default,
                            t = qt(e),
                            n = t && t.componentOptions;
                        if (n) {
                            var r = Dn(n),
                                a = this.include,
                                i = this.exclude;
                            if (a && (!r || !Tn(a, r)) || i && r && Tn(i, r)) return t;
                            var s = this.cache,
                                o = this.keys,
                                u = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                            s[u] ? (t.componentInstance = s[u].componentInstance, y(o, u), o.push(u)) : (s[u] = t, o.push(u), this.max && o.length > parseInt(this.max) && xn(s, o[0], o, this._vnode)), t.data.keepAlive = !0
                        }
                        return t || e && e[0]
                    }
                }
            };
        ! function(e) {
            var t = {
                get: function() {
                    return W
                }
            };
            Object.defineProperty(e, "config", t), e.util = {
                    warn: ue,
                    extend: S,
                    mergeOptions: Pe,
                    defineReactive: De
                }, e.set = Te, e.delete = Se, e.nextTick = et, e.observable = function(e) {
                    return ke(e), e
                }, e.options = Object.create(null), $.forEach(function(t) {
                    e.options[t + "s"] = Object.create(null)
                }), e.options._base = e, S(e.options.components, An),
                function(e) {
                    e.use = function(e) {
                        var t = this._installedPlugins || (this._installedPlugins = []);
                        if (t.indexOf(e) > -1) return this;
                        var n = T(arguments, 1);
                        return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this
                    }
                }(e),
                function(e) {
                    e.mixin = function(e) {
                        return this.options = Pe(this.options, e), this
                    }
                }(e), kn(e),
                function(e) {
                    $.forEach(function(t) {
                        e[t] = function(e, n) {
                            return n ? ("component" === t && d(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
                                bind: n,
                                update: n
                            }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e]
                        }
                    })
                }(e)
        }(wn), Object.defineProperty(wn.prototype, "$isServer", {
            get: re
        }), Object.defineProperty(wn.prototype, "$ssrContext", {
            get: function() {
                return this.$vnode && this.$vnode.ssrContext
            }
        }), Object.defineProperty(wn, "FunctionalRenderContext", {
            value: At
        }), wn.version = "2.6.10";
        var On = h("style,class"),
            Hn = h("input,textarea,option,select,progress"),
            En = h("contenteditable,draggable,spellcheck"),
            Pn = h("events,caret,typing,plaintext-only"),
            Cn = function(e, t) {
                return zn(t) || "false" === t ? "false" : "contenteditable" === e && Pn(t) ? t : "true"
            },
            $n = h("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
            Fn = "http://www.w3.org/1999/xlink",
            Wn = function(e) {
                return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
            },
            Nn = function(e) {
                return Wn(e) ? e.slice(6, e.length) : ""
            },
            zn = function(e) {
                return null == e || !1 === e
            };

        function Rn(e) {
            for (var t = e.data, n = e, r = e; a(r.componentInstance);)(r = r.componentInstance._vnode) && r.data && (t = In(r.data, t));
            for (; a(n = n.parent);) n && n.data && (t = In(t, n.data));
            return function(e, t) {
                if (a(e) || a(t)) return Un(e, qn(t));
                return ""
            }(t.staticClass, t.class)
        }

        function In(e, t) {
            return {
                staticClass: Un(e.staticClass, t.staticClass),
                class: a(e.class) ? [e.class, t.class] : t.class
            }
        }

        function Un(e, t) {
            return e ? t ? e + " " + t : e : t || ""
        }

        function qn(e) {
            return Array.isArray(e) ? function(e) {
                for (var t, n = "", r = 0, i = e.length; r < i; r++) a(t = qn(e[r])) && "" !== t && (n && (n += " "), n += t);
                return n
            }(e) : o(e) ? function(e) {
                var t = "";
                for (var n in e) e[n] && (t && (t += " "), t += n);
                return t
            }(e) : "string" == typeof e ? e : ""
        }
        var Jn = {
                svg: "http://www.w3.org/2000/svg",
                math: "http://www.w3.org/1998/Math/MathML"
            },
            Bn = h("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
            Vn = h("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
            Gn = function(e) {
                return Bn(e) || Vn(e)
            };
        var Kn = Object.create(null);
        var Zn = h("text,number,password,search,email,tel,url");
        var Qn = Object.freeze({
                createElement: function(e, t) {
                    var n = document.createElement(e);
                    return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
                },
                createElementNS: function(e, t) {
                    return document.createElementNS(Jn[e], t)
                },
                createTextNode: function(e) {
                    return document.createTextNode(e)
                },
                createComment: function(e) {
                    return document.createComment(e)
                },
                insertBefore: function(e, t, n) {
                    e.insertBefore(t, n)
                },
                removeChild: function(e, t) {
                    e.removeChild(t)
                },
                appendChild: function(e, t) {
                    e.appendChild(t)
                },
                parentNode: function(e) {
                    return e.parentNode
                },
                nextSibling: function(e) {
                    return e.nextSibling
                },
                tagName: function(e) {
                    return e.tagName
                },
                setTextContent: function(e, t) {
                    e.textContent = t
                },
                setStyleScope: function(e, t) {
                    e.setAttribute(t, "")
                }
            }),
            Xn = {
                create: function(e, t) {
                    er(t)
                },
                update: function(e, t) {
                    e.data.ref !== t.data.ref && (er(e, !0), er(t))
                },
                destroy: function(e) {
                    er(e, !0)
                }
            };

        function er(e, t) {
            var n = e.data.ref;
            if (a(n)) {
                var r = e.context,
                    i = e.componentInstance || e.elm,
                    s = r.$refs;
                t ? Array.isArray(s[n]) ? y(s[n], i) : s[n] === i && (s[n] = void 0) : e.data.refInFor ? Array.isArray(s[n]) ? s[n].indexOf(i) < 0 && s[n].push(i) : s[n] = [i] : s[n] = i
            }
        }
        var tr = new fe("", {}, []),
            nr = ["create", "activate", "update", "remove", "destroy"];

        function rr(e, t) {
            return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && a(e.data) === a(t.data) && function(e, t) {
                if ("input" !== e.tag) return !0;
                var n, r = a(n = e.data) && a(n = n.attrs) && n.type,
                    i = a(n = t.data) && a(n = n.attrs) && n.type;
                return r === i || Zn(r) && Zn(i)
            }(e, t) || i(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && r(t.asyncFactory.error))
        }

        function ar(e, t, n) {
            var r, i, s = {};
            for (r = t; r <= n; ++r) a(i = e[r].key) && (s[i] = r);
            return s
        }
        var ir = {
            create: sr,
            update: sr,
            destroy: function(e) {
                sr(e, tr)
            }
        };

        function sr(e, t) {
            (e.data.directives || t.data.directives) && function(e, t) {
                var n, r, a, i = e === tr,
                    s = t === tr,
                    o = ur(e.data.directives, e.context),
                    u = ur(t.data.directives, t.context),
                    d = [],
                    l = [];
                for (n in u) r = o[n], a = u[n], r ? (a.oldValue = r.value, a.oldArg = r.arg, lr(a, "update", t, e), a.def && a.def.componentUpdated && l.push(a)) : (lr(a, "bind", t, e), a.def && a.def.inserted && d.push(a));
                if (d.length) {
                    var c = function() {
                        for (var n = 0; n < d.length; n++) lr(d[n], "inserted", t, e)
                    };
                    i ? st(t, "insert", c) : c()
                }
                l.length && st(t, "postpatch", function() {
                    for (var n = 0; n < l.length; n++) lr(l[n], "componentUpdated", t, e)
                });
                if (!i)
                    for (n in o) u[n] || lr(o[n], "unbind", e, e, s)
            }(e, t)
        }
        var or = Object.create(null);

        function ur(e, t) {
            var n, r, a = Object.create(null);
            if (!e) return a;
            for (n = 0; n < e.length; n++)(r = e[n]).modifiers || (r.modifiers = or), a[dr(r)] = r, r.def = Ce(t.$options, "directives", r.name);
            return a
        }

        function dr(e) {
            return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
        }

        function lr(e, t, n, r, a) {
            var i = e.def && e.def[t];
            if (i) try {
                i(n.elm, e, n, r, a)
            } catch (r) {
                ze(r, n.context, "directive " + e.name + " " + t + " hook")
            }
        }
        var cr = [Xn, ir];

        function _r(e, t) {
            var n = t.componentOptions;
            if (!(a(n) && !1 === n.Ctor.options.inheritAttrs || r(e.data.attrs) && r(t.data.attrs))) {
                var i, s, o = t.elm,
                    u = e.data.attrs || {},
                    d = t.data.attrs || {};
                for (i in a(d.__ob__) && (d = t.data.attrs = S({}, d)), d) s = d[i], u[i] !== s && mr(o, i, s);
                for (i in (G || Z) && d.value !== u.value && mr(o, "value", d.value), u) r(d[i]) && (Wn(i) ? o.removeAttributeNS(Fn, Nn(i)) : En(i) || o.removeAttribute(i))
            }
        }

        function mr(e, t, n) {
            e.tagName.indexOf("-") > -1 ? fr(e, t, n) : $n(t) ? zn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : En(t) ? e.setAttribute(t, Cn(t, n)) : Wn(t) ? zn(n) ? e.removeAttributeNS(Fn, Nn(t)) : e.setAttributeNS(Fn, t, n) : fr(e, t, n)
        }

        function fr(e, t, n) {
            if (zn(n)) e.removeAttribute(t);
            else {
                if (G && !K && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
                    var r = function(t) {
                        t.stopImmediatePropagation(), e.removeEventListener("input", r)
                    };
                    e.addEventListener("input", r), e.__ieph = !0
                }
                e.setAttribute(t, n)
            }
        }
        var hr = {
            create: _r,
            update: _r
        };

        function pr(e, t) {
            var n = t.elm,
                i = t.data,
                s = e.data;
            if (!(r(i.staticClass) && r(i.class) && (r(s) || r(s.staticClass) && r(s.class)))) {
                var o = Rn(t),
                    u = n._transitionClasses;
                a(u) && (o = Un(o, qn(u))), o !== n._prevClass && (n.setAttribute("class", o), n._prevClass = o)
            }
        }
        var yr, vr = {
                create: pr,
                update: pr
            },
            gr = "__r",
            Mr = "__c";

        function Lr(e, t, n) {
            var r = yr;
            return function a() {
                null !== t.apply(null, arguments) && wr(e, a, n, r)
            }
        }
        var Yr = Je && !(X && Number(X[1]) <= 53);

        function br(e, t, n, r) {
            if (Yr) {
                var a = un,
                    i = t;
                t = i._wrapper = function(e) {
                    if (e.target === e.currentTarget || e.timeStamp >= a || e.timeStamp <= 0 || e.target.ownerDocument !== document) return i.apply(this, arguments)
                }
            }
            yr.addEventListener(e, t, te ? {
                capture: n,
                passive: r
            } : n)
        }

        function wr(e, t, n, r) {
            (r || yr).removeEventListener(e, t._wrapper || t, n)
        }

        function kr(e, t) {
            if (!r(e.data.on) || !r(t.data.on)) {
                var n = t.data.on || {},
                    i = e.data.on || {};
                yr = t.elm,
                    function(e) {
                        if (a(e[gr])) {
                            var t = G ? "change" : "input";
                            e[t] = [].concat(e[gr], e[t] || []), delete e[gr]
                        }
                        a(e[Mr]) && (e.change = [].concat(e[Mr], e.change || []), delete e[Mr])
                    }(n), it(n, i, br, wr, Lr, t.context), yr = void 0
            }
        }
        var Dr, Tr = {
            create: kr,
            update: kr
        };

        function Sr(e, t) {
            if (!r(e.data.domProps) || !r(t.data.domProps)) {
                var n, i, s = t.elm,
                    o = e.data.domProps || {},
                    u = t.data.domProps || {};
                for (n in a(u.__ob__) && (u = t.data.domProps = S({}, u)), o) n in u || (s[n] = "");
                for (n in u) {
                    if (i = u[n], "textContent" === n || "innerHTML" === n) {
                        if (t.children && (t.children.length = 0), i === o[n]) continue;
                        1 === s.childNodes.length && s.removeChild(s.childNodes[0])
                    }
                    if ("value" === n && "PROGRESS" !== s.tagName) {
                        s._value = i;
                        var d = r(i) ? "" : String(i);
                        xr(s, d) && (s.value = d)
                    } else if ("innerHTML" === n && Vn(s.tagName) && r(s.innerHTML)) {
                        (Dr = Dr || document.createElement("div")).innerHTML = "<svg>" + i + "</svg>";
                        for (var l = Dr.firstChild; s.firstChild;) s.removeChild(s.firstChild);
                        for (; l.firstChild;) s.appendChild(l.firstChild)
                    } else if (i !== o[n]) try {
                        s[n] = i
                    } catch (e) {}
                }
            }
        }

        function xr(e, t) {
            return !e.composing && ("OPTION" === e.tagName || function(e, t) {
                var n = !0;
                try {
                    n = document.activeElement !== e
                } catch (e) {}
                return n && e.value !== t
            }(e, t) || function(e, t) {
                var n = e.value,
                    r = e._vModifiers;
                if (a(r)) {
                    if (r.number) return f(n) !== f(t);
                    if (r.trim) return n.trim() !== t.trim()
                }
                return n !== t
            }(e, t))
        }
        var jr = {
                create: Sr,
                update: Sr
            },
            Ar = M(function(e) {
                var t = {},
                    n = /:(.+)/;
                return e.split(/;(?![^(]*\))/g).forEach(function(e) {
                    if (e) {
                        var r = e.split(n);
                        r.length > 1 && (t[r[0].trim()] = r[1].trim())
                    }
                }), t
            });

        function Or(e) {
            var t = Hr(e.style);
            return e.staticStyle ? S(e.staticStyle, t) : t
        }

        function Hr(e) {
            return Array.isArray(e) ? x(e) : "string" == typeof e ? Ar(e) : e
        }
        var Er, Pr = /^--/,
            Cr = /\s*!important$/,
            $r = function(e, t, n) {
                if (Pr.test(t)) e.style.setProperty(t, n);
                else if (Cr.test(n)) e.style.setProperty(k(t), n.replace(Cr, ""), "important");
                else {
                    var r = Wr(t);
                    if (Array.isArray(n))
                        for (var a = 0, i = n.length; a < i; a++) e.style[r] = n[a];
                    else e.style[r] = n
                }
            },
            Fr = ["Webkit", "Moz", "ms"],
            Wr = M(function(e) {
                if (Er = Er || document.createElement("div").style, "filter" !== (e = Y(e)) && e in Er) return e;
                for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < Fr.length; n++) {
                    var r = Fr[n] + t;
                    if (r in Er) return r
                }
            });

        function Nr(e, t) {
            var n = t.data,
                i = e.data;
            if (!(r(n.staticStyle) && r(n.style) && r(i.staticStyle) && r(i.style))) {
                var s, o, u = t.elm,
                    d = i.staticStyle,
                    l = i.normalizedStyle || i.style || {},
                    c = d || l,
                    _ = Hr(t.data.style) || {};
                t.data.normalizedStyle = a(_.__ob__) ? S({}, _) : _;
                var m = function(e, t) {
                    var n, r = {};
                    if (t)
                        for (var a = e; a.componentInstance;)(a = a.componentInstance._vnode) && a.data && (n = Or(a.data)) && S(r, n);
                    (n = Or(e.data)) && S(r, n);
                    for (var i = e; i = i.parent;) i.data && (n = Or(i.data)) && S(r, n);
                    return r
                }(t, !0);
                for (o in c) r(m[o]) && $r(u, o, "");
                for (o in m)(s = m[o]) !== c[o] && $r(u, o, null == s ? "" : s)
            }
        }
        var zr = {
                create: Nr,
                update: Nr
            },
            Rr = /\s+/;

        function Ir(e, t) {
            if (t && (t = t.trim()))
                if (e.classList) t.indexOf(" ") > -1 ? t.split(Rr).forEach(function(t) {
                    return e.classList.add(t)
                }) : e.classList.add(t);
                else {
                    var n = " " + (e.getAttribute("class") || "") + " ";
                    n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
                }
        }

        function Ur(e, t) {
            if (t && (t = t.trim()))
                if (e.classList) t.indexOf(" ") > -1 ? t.split(Rr).forEach(function(t) {
                    return e.classList.remove(t)
                }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");
                else {
                    for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
                    (n = n.trim()) ? e.setAttribute("class", n): e.removeAttribute("class")
                }
        }

        function qr(e) {
            if (e) {
                if ("object" == typeof e) {
                    var t = {};
                    return !1 !== e.css && S(t, Jr(e.name || "v")), S(t, e), t
                }
                return "string" == typeof e ? Jr(e) : void 0
            }
        }
        var Jr = M(function(e) {
                return {
                    enterClass: e + "-enter",
                    enterToClass: e + "-enter-to",
                    enterActiveClass: e + "-enter-active",
                    leaveClass: e + "-leave",
                    leaveToClass: e + "-leave-to",
                    leaveActiveClass: e + "-leave-active"
                }
            }),
            Br = q && !K,
            Vr = "transition",
            Gr = "animation",
            Kr = "transition",
            Zr = "transitionend",
            Qr = "animation",
            Xr = "animationend";
        Br && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Kr = "WebkitTransition", Zr = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Qr = "WebkitAnimation", Xr = "webkitAnimationEnd"));
        var ea = q ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(e) {
            return e()
        };

        function ta(e) {
            ea(function() {
                ea(e)
            })
        }

        function na(e, t) {
            var n = e._transitionClasses || (e._transitionClasses = []);
            n.indexOf(t) < 0 && (n.push(t), Ir(e, t))
        }

        function ra(e, t) {
            e._transitionClasses && y(e._transitionClasses, t), Ur(e, t)
        }

        function aa(e, t, n) {
            var r = sa(e, t),
                a = r.type,
                i = r.timeout,
                s = r.propCount;
            if (!a) return n();
            var o = a === Vr ? Zr : Xr,
                u = 0,
                d = function() {
                    e.removeEventListener(o, l), n()
                },
                l = function(t) {
                    t.target === e && ++u >= s && d()
                };
            setTimeout(function() {
                u < s && d()
            }, i + 1), e.addEventListener(o, l)
        }
        var ia = /\b(transform|all)(,|$)/;

        function sa(e, t) {
            var n, r = window.getComputedStyle(e),
                a = (r[Kr + "Delay"] || "").split(", "),
                i = (r[Kr + "Duration"] || "").split(", "),
                s = oa(a, i),
                o = (r[Qr + "Delay"] || "").split(", "),
                u = (r[Qr + "Duration"] || "").split(", "),
                d = oa(o, u),
                l = 0,
                c = 0;
            return t === Vr ? s > 0 && (n = Vr, l = s, c = i.length) : t === Gr ? d > 0 && (n = Gr, l = d, c = u.length) : c = (n = (l = Math.max(s, d)) > 0 ? s > d ? Vr : Gr : null) ? n === Vr ? i.length : u.length : 0, {
                type: n,
                timeout: l,
                propCount: c,
                hasTransform: n === Vr && ia.test(r[Kr + "Property"])
            }
        }

        function oa(e, t) {
            for (; e.length < t.length;) e = e.concat(e);
            return Math.max.apply(null, t.map(function(t, n) {
                return ua(t) + ua(e[n])
            }))
        }

        function ua(e) {
            return 1e3 * Number(e.slice(0, -1).replace(",", "."))
        }

        function da(e, t) {
            var n = e.elm;
            a(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
            var i = qr(e.data.transition);
            if (!r(i) && !a(n._enterCb) && 1 === n.nodeType) {
                for (var s = i.css, u = i.type, d = i.enterClass, l = i.enterToClass, c = i.enterActiveClass, _ = i.appearClass, m = i.appearToClass, h = i.appearActiveClass, p = i.beforeEnter, y = i.enter, v = i.afterEnter, g = i.enterCancelled, M = i.beforeAppear, L = i.appear, Y = i.afterAppear, b = i.appearCancelled, w = i.duration, k = Kt, D = Kt.$vnode; D && D.parent;) k = D.context, D = D.parent;
                var T = !k._isMounted || !e.isRootInsert;
                if (!T || L || "" === L) {
                    var S = T && _ ? _ : d,
                        x = T && h ? h : c,
                        j = T && m ? m : l,
                        A = T && M || p,
                        O = T && "function" == typeof L ? L : y,
                        H = T && Y || v,
                        E = T && b || g,
                        C = f(o(w) ? w.enter : w);
                    0;
                    var $ = !1 !== s && !K,
                        F = _a(O),
                        W = n._enterCb = P(function() {
                            $ && (ra(n, j), ra(n, x)), W.cancelled ? ($ && ra(n, S), E && E(n)) : H && H(n), n._enterCb = null
                        });
                    e.data.show || st(e, "insert", function() {
                        var t = n.parentNode,
                            r = t && t._pending && t._pending[e.key];
                        r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), O && O(n, W)
                    }), A && A(n), $ && (na(n, S), na(n, x), ta(function() {
                        ra(n, S), W.cancelled || (na(n, j), F || (ca(C) ? setTimeout(W, C) : aa(n, u, W)))
                    })), e.data.show && (t && t(), O && O(n, W)), $ || F || W()
                }
            }
        }

        function la(e, t) {
            var n = e.elm;
            a(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
            var i = qr(e.data.transition);
            if (r(i) || 1 !== n.nodeType) return t();
            if (!a(n._leaveCb)) {
                var s = i.css,
                    u = i.type,
                    d = i.leaveClass,
                    l = i.leaveToClass,
                    c = i.leaveActiveClass,
                    _ = i.beforeLeave,
                    m = i.leave,
                    h = i.afterLeave,
                    p = i.leaveCancelled,
                    y = i.delayLeave,
                    v = i.duration,
                    g = !1 !== s && !K,
                    M = _a(m),
                    L = f(o(v) ? v.leave : v);
                0;
                var Y = n._leaveCb = P(function() {
                    n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), g && (ra(n, l), ra(n, c)), Y.cancelled ? (g && ra(n, d), p && p(n)) : (t(), h && h(n)), n._leaveCb = null
                });
                y ? y(b) : b()
            }

            function b() {
                Y.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), _ && _(n), g && (na(n, d), na(n, c), ta(function() {
                    ra(n, d), Y.cancelled || (na(n, l), M || (ca(L) ? setTimeout(Y, L) : aa(n, u, Y)))
                })), m && m(n, Y), g || M || Y())
            }
        }

        function ca(e) {
            return "number" == typeof e && !isNaN(e)
        }

        function _a(e) {
            if (r(e)) return !1;
            var t = e.fns;
            return a(t) ? _a(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1
        }

        function ma(e, t) {
            !0 !== t.data.show && da(t)
        }
        var fa = function(e) {
            var t, n, o = {},
                u = e.modules,
                d = e.nodeOps;
            for (t = 0; t < nr.length; ++t)
                for (o[nr[t]] = [], n = 0; n < u.length; ++n) a(u[n][nr[t]]) && o[nr[t]].push(u[n][nr[t]]);

            function l(e) {
                var t = d.parentNode(e);
                a(t) && d.removeChild(t, e)
            }

            function c(e, t, n, r, s, u, l) {
                if (a(e.elm) && a(u) && (e = u[l] = ve(e)), e.isRootInsert = !s, ! function(e, t, n, r) {
                        var s = e.data;
                        if (a(s)) {
                            var u = a(e.componentInstance) && s.keepAlive;
                            if (a(s = s.hook) && a(s = s.init) && s(e, !1), a(e.componentInstance)) return _(e, t), m(n, e.elm, r), i(u) && function(e, t, n, r) {
                                for (var i, s = e; s.componentInstance;)
                                    if (s = s.componentInstance._vnode, a(i = s.data) && a(i = i.transition)) {
                                        for (i = 0; i < o.activate.length; ++i) o.activate[i](tr, s);
                                        t.push(s);
                                        break
                                    }
                                m(n, e.elm, r)
                            }(e, t, n, r), !0
                        }
                    }(e, t, n, r)) {
                    var c = e.data,
                        h = e.children,
                        p = e.tag;
                    a(p) ? (e.elm = e.ns ? d.createElementNS(e.ns, p) : d.createElement(p, e), v(e), f(e, h, t), a(c) && y(e, t), m(n, e.elm, r)) : i(e.isComment) ? (e.elm = d.createComment(e.text), m(n, e.elm, r)) : (e.elm = d.createTextNode(e.text), m(n, e.elm, r))
                }
            }

            function _(e, t) {
                a(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, p(e) ? (y(e, t), v(e)) : (er(e), t.push(e))
            }

            function m(e, t, n) {
                a(e) && (a(n) ? d.parentNode(n) === e && d.insertBefore(e, t, n) : d.appendChild(e, t))
            }

            function f(e, t, n) {
                if (Array.isArray(t))
                    for (var r = 0; r < t.length; ++r) c(t[r], n, e.elm, null, !0, t, r);
                else s(e.text) && d.appendChild(e.elm, d.createTextNode(String(e.text)))
            }

            function p(e) {
                for (; e.componentInstance;) e = e.componentInstance._vnode;
                return a(e.tag)
            }

            function y(e, n) {
                for (var r = 0; r < o.create.length; ++r) o.create[r](tr, e);
                a(t = e.data.hook) && (a(t.create) && t.create(tr, e), a(t.insert) && n.push(e))
            }

            function v(e) {
                var t;
                if (a(t = e.fnScopeId)) d.setStyleScope(e.elm, t);
                else
                    for (var n = e; n;) a(t = n.context) && a(t = t.$options._scopeId) && d.setStyleScope(e.elm, t), n = n.parent;
                a(t = Kt) && t !== e.context && t !== e.fnContext && a(t = t.$options._scopeId) && d.setStyleScope(e.elm, t)
            }

            function g(e, t, n, r, a, i) {
                for (; r <= a; ++r) c(n[r], i, e, t, !1, n, r)
            }

            function M(e) {
                var t, n, r = e.data;
                if (a(r))
                    for (a(t = r.hook) && a(t = t.destroy) && t(e), t = 0; t < o.destroy.length; ++t) o.destroy[t](e);
                if (a(t = e.children))
                    for (n = 0; n < e.children.length; ++n) M(e.children[n])
            }

            function L(e, t, n, r) {
                for (; n <= r; ++n) {
                    var i = t[n];
                    a(i) && (a(i.tag) ? (Y(i), M(i)) : l(i.elm))
                }
            }

            function Y(e, t) {
                if (a(t) || a(e.data)) {
                    var n, r = o.remove.length + 1;
                    for (a(t) ? t.listeners += r : t = function(e, t) {
                            function n() {
                                0 == --n.listeners && l(e)
                            }
                            return n.listeners = t, n
                        }(e.elm, r), a(n = e.componentInstance) && a(n = n._vnode) && a(n.data) && Y(n, t), n = 0; n < o.remove.length; ++n) o.remove[n](e, t);
                    a(n = e.data.hook) && a(n = n.remove) ? n(e, t) : t()
                } else l(e.elm)
            }

            function b(e, t, n, r) {
                for (var i = n; i < r; i++) {
                    var s = t[i];
                    if (a(s) && rr(e, s)) return i
                }
            }

            function w(e, t, n, s, u, l) {
                if (e !== t) {
                    a(t.elm) && a(s) && (t = s[u] = ve(t));
                    var _ = t.elm = e.elm;
                    if (i(e.isAsyncPlaceholder)) a(t.asyncFactory.resolved) ? T(e.elm, t, n) : t.isAsyncPlaceholder = !0;
                    else if (i(t.isStatic) && i(e.isStatic) && t.key === e.key && (i(t.isCloned) || i(t.isOnce))) t.componentInstance = e.componentInstance;
                    else {
                        var m, f = t.data;
                        a(f) && a(m = f.hook) && a(m = m.prepatch) && m(e, t);
                        var h = e.children,
                            y = t.children;
                        if (a(f) && p(t)) {
                            for (m = 0; m < o.update.length; ++m) o.update[m](e, t);
                            a(m = f.hook) && a(m = m.update) && m(e, t)
                        }
                        r(t.text) ? a(h) && a(y) ? h !== y && function(e, t, n, i, s) {
                            for (var o, u, l, _ = 0, m = 0, f = t.length - 1, h = t[0], p = t[f], y = n.length - 1, v = n[0], M = n[y], Y = !s; _ <= f && m <= y;) r(h) ? h = t[++_] : r(p) ? p = t[--f] : rr(h, v) ? (w(h, v, i, n, m), h = t[++_], v = n[++m]) : rr(p, M) ? (w(p, M, i, n, y), p = t[--f], M = n[--y]) : rr(h, M) ? (w(h, M, i, n, y), Y && d.insertBefore(e, h.elm, d.nextSibling(p.elm)), h = t[++_], M = n[--y]) : rr(p, v) ? (w(p, v, i, n, m), Y && d.insertBefore(e, p.elm, h.elm), p = t[--f], v = n[++m]) : (r(o) && (o = ar(t, _, f)), r(u = a(v.key) ? o[v.key] : b(v, t, _, f)) ? c(v, i, e, h.elm, !1, n, m) : rr(l = t[u], v) ? (w(l, v, i, n, m), t[u] = void 0, Y && d.insertBefore(e, l.elm, h.elm)) : c(v, i, e, h.elm, !1, n, m), v = n[++m]);
                            _ > f ? g(e, r(n[y + 1]) ? null : n[y + 1].elm, n, m, y, i) : m > y && L(0, t, _, f)
                        }(_, h, y, n, l) : a(y) ? (a(e.text) && d.setTextContent(_, ""), g(_, null, y, 0, y.length - 1, n)) : a(h) ? L(0, h, 0, h.length - 1) : a(e.text) && d.setTextContent(_, "") : e.text !== t.text && d.setTextContent(_, t.text), a(f) && a(m = f.hook) && a(m = m.postpatch) && m(e, t)
                    }
                }
            }

            function k(e, t, n) {
                if (i(n) && a(e.parent)) e.parent.data.pendingInsert = t;
                else
                    for (var r = 0; r < t.length; ++r) t[r].data.hook.insert(t[r])
            }
            var D = h("attrs,class,staticClass,staticStyle,key");

            function T(e, t, n, r) {
                var s, o = t.tag,
                    u = t.data,
                    d = t.children;
                if (r = r || u && u.pre, t.elm = e, i(t.isComment) && a(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
                if (a(u) && (a(s = u.hook) && a(s = s.init) && s(t, !0), a(s = t.componentInstance))) return _(t, n), !0;
                if (a(o)) {
                    if (a(d))
                        if (e.hasChildNodes())
                            if (a(s = u) && a(s = s.domProps) && a(s = s.innerHTML)) {
                                if (s !== e.innerHTML) return !1
                            } else {
                                for (var l = !0, c = e.firstChild, m = 0; m < d.length; m++) {
                                    if (!c || !T(c, d[m], n, r)) {
                                        l = !1;
                                        break
                                    }
                                    c = c.nextSibling
                                }
                                if (!l || c) return !1
                            } else f(t, d, n);
                    if (a(u)) {
                        var h = !1;
                        for (var p in u)
                            if (!D(p)) {
                                h = !0, y(t, n);
                                break
                            }!h && u.class && nt(u.class)
                    }
                } else e.data !== t.text && (e.data = t.text);
                return !0
            }
            return function(e, t, n, s) {
                if (!r(t)) {
                    var u, l = !1,
                        _ = [];
                    if (r(e)) l = !0, c(t, _);
                    else {
                        var m = a(e.nodeType);
                        if (!m && rr(e, t)) w(e, t, _, null, null, s);
                        else {
                            if (m) {
                                if (1 === e.nodeType && e.hasAttribute(C) && (e.removeAttribute(C), n = !0), i(n) && T(e, t, _)) return k(t, _, !0), e;
                                u = e, e = new fe(d.tagName(u).toLowerCase(), {}, [], void 0, u)
                            }
                            var f = e.elm,
                                h = d.parentNode(f);
                            if (c(t, _, f._leaveCb ? null : h, d.nextSibling(f)), a(t.parent))
                                for (var y = t.parent, v = p(t); y;) {
                                    for (var g = 0; g < o.destroy.length; ++g) o.destroy[g](y);
                                    if (y.elm = t.elm, v) {
                                        for (var Y = 0; Y < o.create.length; ++Y) o.create[Y](tr, y);
                                        var b = y.data.hook.insert;
                                        if (b.merged)
                                            for (var D = 1; D < b.fns.length; D++) b.fns[D]()
                                    } else er(y);
                                    y = y.parent
                                }
                            a(h) ? L(0, [e], 0, 0) : a(e.tag) && M(e)
                        }
                    }
                    return k(t, _, l), t.elm
                }
                a(e) && M(e)
            }
        }({
            nodeOps: Qn,
            modules: [hr, vr, Tr, jr, zr, q ? {
                create: ma,
                activate: ma,
                remove: function(e, t) {
                    !0 !== e.data.show ? la(e, t) : t()
                }
            } : {}].concat(cr)
        });
        K && document.addEventListener("selectionchange", function() {
            var e = document.activeElement;
            e && e.vmodel && Ya(e, "input")
        });
        var ha = {
            inserted: function(e, t, n, r) {
                "select" === n.tag ? (r.elm && !r.elm._vOptions ? st(n, "postpatch", function() {
                    ha.componentUpdated(e, t, n)
                }) : pa(e, t, n.context), e._vOptions = [].map.call(e.options, ga)) : ("textarea" === n.tag || Zn(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", Ma), e.addEventListener("compositionend", La), e.addEventListener("change", La), K && (e.vmodel = !0)))
            },
            componentUpdated: function(e, t, n) {
                if ("select" === n.tag) {
                    pa(e, t, n.context);
                    var r = e._vOptions,
                        a = e._vOptions = [].map.call(e.options, ga);
                    if (a.some(function(e, t) {
                            return !H(e, r[t])
                        }))(e.multiple ? t.value.some(function(e) {
                        return va(e, a)
                    }) : t.value !== t.oldValue && va(t.value, a)) && Ya(e, "change")
                }
            }
        };

        function pa(e, t, n) {
            ya(e, t, n), (G || Z) && setTimeout(function() {
                ya(e, t, n)
            }, 0)
        }

        function ya(e, t, n) {
            var r = t.value,
                a = e.multiple;
            if (!a || Array.isArray(r)) {
                for (var i, s, o = 0, u = e.options.length; o < u; o++)
                    if (s = e.options[o], a) i = E(r, ga(s)) > -1, s.selected !== i && (s.selected = i);
                    else if (H(ga(s), r)) return void(e.selectedIndex !== o && (e.selectedIndex = o));
                a || (e.selectedIndex = -1)
            }
        }

        function va(e, t) {
            return t.every(function(t) {
                return !H(t, e)
            })
        }

        function ga(e) {
            return "_value" in e ? e._value : e.value
        }

        function Ma(e) {
            e.target.composing = !0
        }

        function La(e) {
            e.target.composing && (e.target.composing = !1, Ya(e.target, "input"))
        }

        function Ya(e, t) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(t, !0, !0), e.dispatchEvent(n)
        }

        function ba(e) {
            return !e.componentInstance || e.data && e.data.transition ? e : ba(e.componentInstance._vnode)
        }
        var wa = {
                model: ha,
                show: {
                    bind: function(e, t, n) {
                        var r = t.value,
                            a = (n = ba(n)).data && n.data.transition,
                            i = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                        r && a ? (n.data.show = !0, da(n, function() {
                            e.style.display = i
                        })) : e.style.display = r ? i : "none"
                    },
                    update: function(e, t, n) {
                        var r = t.value;
                        !r != !t.oldValue && ((n = ba(n)).data && n.data.transition ? (n.data.show = !0, r ? da(n, function() {
                            e.style.display = e.__vOriginalDisplay
                        }) : la(n, function() {
                            e.style.display = "none"
                        })) : e.style.display = r ? e.__vOriginalDisplay : "none")
                    },
                    unbind: function(e, t, n, r, a) {
                        a || (e.style.display = e.__vOriginalDisplay)
                    }
                }
            },
            ka = {
                name: String,
                appear: Boolean,
                css: Boolean,
                mode: String,
                type: String,
                enterClass: String,
                leaveClass: String,
                enterToClass: String,
                leaveToClass: String,
                enterActiveClass: String,
                leaveActiveClass: String,
                appearClass: String,
                appearActiveClass: String,
                appearToClass: String,
                duration: [Number, String, Object]
            };

        function Da(e) {
            var t = e && e.componentOptions;
            return t && t.Ctor.options.abstract ? Da(qt(t.children)) : e
        }

        function Ta(e) {
            var t = {},
                n = e.$options;
            for (var r in n.propsData) t[r] = e[r];
            var a = n._parentListeners;
            for (var i in a) t[Y(i)] = a[i];
            return t
        }

        function Sa(e, t) {
            if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
                props: t.componentOptions.propsData
            })
        }
        var xa = function(e) {
                return e.tag || Ut(e)
            },
            ja = function(e) {
                return "show" === e.name
            },
            Aa = {
                name: "transition",
                props: ka,
                abstract: !0,
                render: function(e) {
                    var t = this,
                        n = this.$slots.default;
                    if (n && (n = n.filter(xa)).length) {
                        0;
                        var r = this.mode;
                        0;
                        var a = n[0];
                        if (function(e) {
                                for (; e = e.parent;)
                                    if (e.data.transition) return !0
                            }(this.$vnode)) return a;
                        var i = Da(a);
                        if (!i) return a;
                        if (this._leaving) return Sa(e, a);
                        var o = "__transition-" + this._uid + "-";
                        i.key = null == i.key ? i.isComment ? o + "comment" : o + i.tag : s(i.key) ? 0 === String(i.key).indexOf(o) ? i.key : o + i.key : i.key;
                        var u = (i.data || (i.data = {})).transition = Ta(this),
                            d = this._vnode,
                            l = Da(d);
                        if (i.data.directives && i.data.directives.some(ja) && (i.data.show = !0), l && l.data && ! function(e, t) {
                                return t.key === e.key && t.tag === e.tag
                            }(i, l) && !Ut(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
                            var c = l.data.transition = S({}, u);
                            if ("out-in" === r) return this._leaving = !0, st(c, "afterLeave", function() {
                                t._leaving = !1, t.$forceUpdate()
                            }), Sa(e, a);
                            if ("in-out" === r) {
                                if (Ut(i)) return d;
                                var _, m = function() {
                                    _()
                                };
                                st(u, "afterEnter", m), st(u, "enterCancelled", m), st(c, "delayLeave", function(e) {
                                    _ = e
                                })
                            }
                        }
                        return a
                    }
                }
            },
            Oa = S({
                tag: String,
                moveClass: String
            }, ka);

        function Ha(e) {
            e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb()
        }

        function Ea(e) {
            e.data.newPos = e.elm.getBoundingClientRect()
        }

        function Pa(e) {
            var t = e.data.pos,
                n = e.data.newPos,
                r = t.left - n.left,
                a = t.top - n.top;
            if (r || a) {
                e.data.moved = !0;
                var i = e.elm.style;
                i.transform = i.WebkitTransform = "translate(" + r + "px," + a + "px)", i.transitionDuration = "0s"
            }
        }
        delete Oa.mode;
        var Ca = {
            Transition: Aa,
            TransitionGroup: {
                props: Oa,
                beforeMount: function() {
                    var e = this,
                        t = this._update;
                    this._update = function(n, r) {
                        var a = Zt(e);
                        e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, a(), t.call(e, n, r)
                    }
                },
                render: function(e) {
                    for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, a = this.$slots.default || [], i = this.children = [], s = Ta(this), o = 0; o < a.length; o++) {
                        var u = a[o];
                        if (u.tag)
                            if (null != u.key && 0 !== String(u.key).indexOf("__vlist")) i.push(u), n[u.key] = u, (u.data || (u.data = {})).transition = s;
                            else;
                    }
                    if (r) {
                        for (var d = [], l = [], c = 0; c < r.length; c++) {
                            var _ = r[c];
                            _.data.transition = s, _.data.pos = _.elm.getBoundingClientRect(), n[_.key] ? d.push(_) : l.push(_)
                        }
                        this.kept = e(t, null, d), this.removed = l
                    }
                    return e(t, null, i)
                },
                updated: function() {
                    var e = this.prevChildren,
                        t = this.moveClass || (this.name || "v") + "-move";
                    e.length && this.hasMove(e[0].elm, t) && (e.forEach(Ha), e.forEach(Ea), e.forEach(Pa), this._reflow = document.body.offsetHeight, e.forEach(function(e) {
                        if (e.data.moved) {
                            var n = e.elm,
                                r = n.style;
                            na(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Zr, n._moveCb = function e(r) {
                                r && r.target !== n || r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Zr, e), n._moveCb = null, ra(n, t))
                            })
                        }
                    }))
                },
                methods: {
                    hasMove: function(e, t) {
                        if (!Br) return !1;
                        if (this._hasMove) return this._hasMove;
                        var n = e.cloneNode();
                        e._transitionClasses && e._transitionClasses.forEach(function(e) {
                            Ur(n, e)
                        }), Ir(n, t), n.style.display = "none", this.$el.appendChild(n);
                        var r = sa(n);
                        return this.$el.removeChild(n), this._hasMove = r.hasTransform
                    }
                }
            }
        };
        wn.config.mustUseProp = function(e, t, n) {
            return "value" === n && Hn(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
        }, wn.config.isReservedTag = Gn, wn.config.isReservedAttr = On, wn.config.getTagNamespace = function(e) {
            return Vn(e) ? "svg" : "math" === e ? "math" : void 0
        }, wn.config.isUnknownElement = function(e) {
            if (!q) return !0;
            if (Gn(e)) return !1;
            if (e = e.toLowerCase(), null != Kn[e]) return Kn[e];
            var t = document.createElement(e);
            return e.indexOf("-") > -1 ? Kn[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Kn[e] = /HTMLUnknownElement/.test(t.toString())
        }, S(wn.options.directives, wa), S(wn.options.components, Ca), wn.prototype.__patch__ = q ? fa : j, wn.prototype.$mount = function(e, t) {
            return function(e, t, n) {
                var r;
                return e.$el = t, e.$options.render || (e.$options.render = pe), en(e, "beforeMount"), r = function() {
                    e._update(e._render(), n)
                }, new mn(e, r, j, {
                    before: function() {
                        e._isMounted && !e._isDestroyed && en(e, "beforeUpdate")
                    }
                }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, en(e, "mounted")), e
            }(this, e = e && q ? function(e) {
                if ("string" == typeof e) {
                    var t = document.querySelector(e);
                    return t || document.createElement("div")
                }
                return e
            }(e) : void 0, t)
        }, q && setTimeout(function() {
            W.devtools && ae && ae.emit("init", wn)
        }, 0), t.a = wn
    }).call(this, n(555).setImmediate)
}, , , , function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
        return v
    }), n.d(t, "b", function() {
        return M
    });
    var r = ("undefined" != typeof window ? window : "undefined" != typeof window ? window : {}).__VUE_DEVTOOLS_GLOBAL_HOOK__;

    function a(e, t) {
        Object.keys(e).forEach(function(n) {
            return t(e[n], n)
        })
    }
    var i = function(e, t) {
            this.runtime = t, this._children = Object.create(null), this._rawModule = e;
            var n = e.state;
            this.state = ("function" == typeof n ? n() : n) || {}
        },
        s = {
            namespaced: {
                configurable: !0
            }
        };
    s.namespaced.get = function() {
        return !!this._rawModule.namespaced
    }, i.prototype.addChild = function(e, t) {
        this._children[e] = t
    }, i.prototype.removeChild = function(e) {
        delete this._children[e]
    }, i.prototype.getChild = function(e) {
        return this._children[e]
    }, i.prototype.update = function(e) {
        this._rawModule.namespaced = e.namespaced, e.actions && (this._rawModule.actions = e.actions), e.mutations && (this._rawModule.mutations = e.mutations), e.getters && (this._rawModule.getters = e.getters)
    }, i.prototype.forEachChild = function(e) {
        a(this._children, e)
    }, i.prototype.forEachGetter = function(e) {
        this._rawModule.getters && a(this._rawModule.getters, e)
    }, i.prototype.forEachAction = function(e) {
        this._rawModule.actions && a(this._rawModule.actions, e)
    }, i.prototype.forEachMutation = function(e) {
        this._rawModule.mutations && a(this._rawModule.mutations, e)
    }, Object.defineProperties(i.prototype, s);
    var o = function(e) {
        this.register([], e, !1)
    };
    o.prototype.get = function(e) {
        return e.reduce(function(e, t) {
            return e.getChild(t)
        }, this.root)
    }, o.prototype.getNamespace = function(e) {
        var t = this.root;
        return e.reduce(function(e, n) {
            return e + ((t = t.getChild(n)).namespaced ? n + "/" : "")
        }, "")
    }, o.prototype.update = function(e) {
        ! function e(t, n, r) {
            0;
            n.update(r);
            if (r.modules)
                for (var a in r.modules) {
                    if (!n.getChild(a)) return void 0;
                    e(t.concat(a), n.getChild(a), r.modules[a])
                }
        }([], this.root, e)
    }, o.prototype.register = function(e, t, n) {
        var r = this;
        void 0 === n && (n = !0);
        var s = new i(t, n);
        0 === e.length ? this.root = s : this.get(e.slice(0, -1)).addChild(e[e.length - 1], s);
        t.modules && a(t.modules, function(t, a) {
            r.register(e.concat(a), t, n)
        })
    }, o.prototype.unregister = function(e) {
        var t = this.get(e.slice(0, -1)),
            n = e[e.length - 1];
        t.getChild(n).runtime && t.removeChild(n)
    };
    var u;
    var d = function(e) {
            var t = this;
            void 0 === e && (e = {}), !u && "undefined" != typeof window && window.Vue && y(window.Vue);
            var n = e.plugins;
            void 0 === n && (n = []);
            var a = e.strict;
            void 0 === a && (a = !1), this._committing = !1, this._actions = Object.create(null), this._actionSubscribers = [], this._mutations = Object.create(null), this._wrappedGetters = Object.create(null), this._modules = new o(e), this._modulesNamespaceMap = Object.create(null), this._subscribers = [], this._watcherVM = new u;
            var i = this,
                s = this.dispatch,
                d = this.commit;
            this.dispatch = function(e, t) {
                return s.call(i, e, t)
            }, this.commit = function(e, t, n) {
                return d.call(i, e, t, n)
            }, this.strict = a;
            var l = this._modules.root.state;
            f(this, l, [], this._modules.root), m(this, l), n.forEach(function(e) {
                return e(t)
            }), (void 0 !== e.devtools ? e.devtools : u.config.devtools) && function(e) {
                r && (e._devtoolHook = r, r.emit("vuex:init", e), r.on("vuex:travel-to-state", function(t) {
                    e.replaceState(t)
                }), e.subscribe(function(e, t) {
                    r.emit("vuex:mutation", e, t)
                }))
            }(this)
        },
        l = {
            state: {
                configurable: !0
            }
        };

    function c(e, t) {
        return t.indexOf(e) < 0 && t.push(e),
            function() {
                var n = t.indexOf(e);
                n > -1 && t.splice(n, 1)
            }
    }

    function _(e, t) {
        e._actions = Object.create(null), e._mutations = Object.create(null), e._wrappedGetters = Object.create(null), e._modulesNamespaceMap = Object.create(null);
        var n = e.state;
        f(e, n, [], e._modules.root, !0), m(e, n, t)
    }

    function m(e, t, n) {
        var r = e._vm;
        e.getters = {};
        var i = e._wrappedGetters,
            s = {};
        a(i, function(t, n) {
            s[n] = function(e, t) {
                return function() {
                    return e(t)
                }
            }(t, e), Object.defineProperty(e.getters, n, {
                get: function() {
                    return e._vm[n]
                },
                enumerable: !0
            })
        });
        var o = u.config.silent;
        u.config.silent = !0, e._vm = new u({
            data: {
                $$state: t
            },
            computed: s
        }), u.config.silent = o, e.strict && function(e) {
            e._vm.$watch(function() {
                return this._data.$$state
            }, function() {
                0
            }, {
                deep: !0,
                sync: !0
            })
        }(e), r && (n && e._withCommit(function() {
            r._data.$$state = null
        }), u.nextTick(function() {
            return r.$destroy()
        }))
    }

    function f(e, t, n, r, a) {
        var i = !n.length,
            s = e._modules.getNamespace(n);
        if (r.namespaced && (e._modulesNamespaceMap[s] = r), !i && !a) {
            var o = h(t, n.slice(0, -1)),
                d = n[n.length - 1];
            e._withCommit(function() {
                u.set(o, d, r.state)
            })
        }
        var l = r.context = function(e, t, n) {
            var r = "" === t,
                a = {
                    dispatch: r ? e.dispatch : function(n, r, a) {
                        var i = p(n, r, a),
                            s = i.payload,
                            o = i.options,
                            u = i.type;
                        return o && o.root || (u = t + u), e.dispatch(u, s)
                    },
                    commit: r ? e.commit : function(n, r, a) {
                        var i = p(n, r, a),
                            s = i.payload,
                            o = i.options,
                            u = i.type;
                        o && o.root || (u = t + u), e.commit(u, s, o)
                    }
                };
            return Object.defineProperties(a, {
                getters: {
                    get: r ? function() {
                        return e.getters
                    } : function() {
                        return function(e, t) {
                            var n = {},
                                r = t.length;
                            return Object.keys(e.getters).forEach(function(a) {
                                if (a.slice(0, r) === t) {
                                    var i = a.slice(r);
                                    Object.defineProperty(n, i, {
                                        get: function() {
                                            return e.getters[a]
                                        },
                                        enumerable: !0
                                    })
                                }
                            }), n
                        }(e, t)
                    }
                },
                state: {
                    get: function() {
                        return h(e.state, n)
                    }
                }
            }), a
        }(e, s, n);
        r.forEachMutation(function(t, n) {
            ! function(e, t, n, r) {
                (e._mutations[t] || (e._mutations[t] = [])).push(function(t) {
                    n.call(e, r.state, t)
                })
            }(e, s + n, t, l)
        }), r.forEachAction(function(t, n) {
            var r = t.root ? n : s + n,
                a = t.handler || t;
            ! function(e, t, n, r) {
                (e._actions[t] || (e._actions[t] = [])).push(function(t, a) {
                    var i, s = n.call(e, {
                        dispatch: r.dispatch,
                        commit: r.commit,
                        getters: r.getters,
                        state: r.state,
                        rootGetters: e.getters,
                        rootState: e.state
                    }, t, a);
                    return (i = s) && "function" == typeof i.then || (s = Promise.resolve(s)), e._devtoolHook ? s.catch(function(t) {
                        throw e._devtoolHook.emit("vuex:error", t), t
                    }) : s
                })
            }(e, r, a, l)
        }), r.forEachGetter(function(t, n) {
            ! function(e, t, n, r) {
                if (e._wrappedGetters[t]) return void 0;
                e._wrappedGetters[t] = function(e) {
                    return n(r.state, r.getters, e.state, e.getters)
                }
            }(e, s + n, t, l)
        }), r.forEachChild(function(r, i) {
            f(e, t, n.concat(i), r, a)
        })
    }

    function h(e, t) {
        return t.length ? t.reduce(function(e, t) {
            return e[t]
        }, e) : e
    }

    function p(e, t, n) {
        var r;
        return null !== (r = e) && "object" == typeof r && e.type && (n = t, t = e, e = e.type), {
            type: e,
            payload: t,
            options: n
        }
    }

    function y(e) {
        u && e === u ||
            /**
             * vuex v3.1.1
             * (c) 2019 Evan You
             * @license MIT
             */
            function(e) {
                if (Number(e.version.split(".")[0]) >= 2) e.mixin({
                    beforeCreate: n
                });
                else {
                    var t = e.prototype._init;
                    e.prototype._init = function(e) {
                        void 0 === e && (e = {}), e.init = e.init ? [n].concat(e.init) : n, t.call(this, e)
                    }
                }

                function n() {
                    var e = this.$options;
                    e.store ? this.$store = "function" == typeof e.store ? e.store() : e.store : e.parent && e.parent.$store && (this.$store = e.parent.$store)
                }
            }(u = e)
    }
    l.state.get = function() {
        return this._vm._data.$$state
    }, l.state.set = function(e) {
        0
    }, d.prototype.commit = function(e, t, n) {
        var r = this,
            a = p(e, t, n),
            i = a.type,
            s = a.payload,
            o = (a.options, {
                type: i,
                payload: s
            }),
            u = this._mutations[i];
        u && (this._withCommit(function() {
            u.forEach(function(e) {
                e(s)
            })
        }), this._subscribers.forEach(function(e) {
            return e(o, r.state)
        }))
    }, d.prototype.dispatch = function(e, t) {
        var n = this,
            r = p(e, t),
            a = r.type,
            i = r.payload,
            s = {
                type: a,
                payload: i
            },
            o = this._actions[a];
        if (o) {
            try {
                this._actionSubscribers.filter(function(e) {
                    return e.before
                }).forEach(function(e) {
                    return e.before(s, n.state)
                })
            } catch (e) {
                0
            }
            return (o.length > 1 ? Promise.all(o.map(function(e) {
                return e(i)
            })) : o[0](i)).then(function(e) {
                try {
                    n._actionSubscribers.filter(function(e) {
                        return e.after
                    }).forEach(function(e) {
                        return e.after(s, n.state)
                    })
                } catch (e) {
                    0
                }
                return e
            })
        }
    }, d.prototype.subscribe = function(e) {
        return c(e, this._subscribers)
    }, d.prototype.subscribeAction = function(e) {
        return c("function" == typeof e ? {
            before: e
        } : e, this._actionSubscribers)
    }, d.prototype.watch = function(e, t, n) {
        var r = this;
        return this._watcherVM.$watch(function() {
            return e(r.state, r.getters)
        }, t, n)
    }, d.prototype.replaceState = function(e) {
        var t = this;
        this._withCommit(function() {
            t._vm._data.$$state = e
        })
    }, d.prototype.registerModule = function(e, t, n) {
        void 0 === n && (n = {}), "string" == typeof e && (e = [e]), this._modules.register(e, t), f(this, this.state, e, this._modules.get(e), n.preserveState), m(this, this.state)
    }, d.prototype.unregisterModule = function(e) {
        var t = this;
        "string" == typeof e && (e = [e]), this._modules.unregister(e), this._withCommit(function() {
            var n = h(t.state, e.slice(0, -1));
            u.delete(n, e[e.length - 1])
        }), _(this)
    }, d.prototype.hotUpdate = function(e) {
        this._modules.update(e), _(this, !0)
    }, d.prototype._withCommit = function(e) {
        var t = this._committing;
        this._committing = !0, e(), this._committing = t
    }, Object.defineProperties(d.prototype, l);
    var v = b(function(e, t) {
            var n = {};
            return Y(t).forEach(function(t) {
                var r = t.key,
                    a = t.val;
                n[r] = function() {
                    var t = this.$store.state,
                        n = this.$store.getters;
                    if (e) {
                        var r = w(this.$store, "mapState", e);
                        if (!r) return;
                        t = r.context.state, n = r.context.getters
                    }
                    return "function" == typeof a ? a.call(this, t, n) : t[a]
                }, n[r].vuex = !0
            }), n
        }),
        g = b(function(e, t) {
            var n = {};
            return Y(t).forEach(function(t) {
                var r = t.key,
                    a = t.val;
                n[r] = function() {
                    for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
                    var r = this.$store.commit;
                    if (e) {
                        var i = w(this.$store, "mapMutations", e);
                        if (!i) return;
                        r = i.context.commit
                    }
                    return "function" == typeof a ? a.apply(this, [r].concat(t)) : r.apply(this.$store, [a].concat(t))
                }
            }), n
        }),
        M = b(function(e, t) {
            var n = {};
            return Y(t).forEach(function(t) {
                var r = t.key,
                    a = t.val;
                a = e + a, n[r] = function() {
                    if (!e || w(this.$store, "mapGetters", e)) return this.$store.getters[a]
                }, n[r].vuex = !0
            }), n
        }),
        L = b(function(e, t) {
            var n = {};
            return Y(t).forEach(function(t) {
                var r = t.key,
                    a = t.val;
                n[r] = function() {
                    for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
                    var r = this.$store.dispatch;
                    if (e) {
                        var i = w(this.$store, "mapActions", e);
                        if (!i) return;
                        r = i.context.dispatch
                    }
                    return "function" == typeof a ? a.apply(this, [r].concat(t)) : r.apply(this.$store, [a].concat(t))
                }
            }), n
        });

    function Y(e) {
        return Array.isArray(e) ? e.map(function(e) {
            return {
                key: e,
                val: e
            }
        }) : Object.keys(e).map(function(t) {
            return {
                key: t,
                val: e[t]
            }
        })
    }

    function b(e) {
        return function(t, n) {
            return "string" != typeof t ? (n = t, t = "") : "/" !== t.charAt(t.length - 1) && (t += "/"), e(t, n)
        }
    }

    function w(e, t, n) {
        return e._modulesNamespaceMap[n]
    }
    var k = {
        Store: d,
        install: y,
        version: "3.1.1",
        mapState: v,
        mapMutations: g,
        mapGetters: M,
        mapActions: L,
        createNamespacedHelpers: function(e) {
            return {
                mapState: v.bind(null, e),
                mapGetters: M.bind(null, e),
                mapMutations: g.bind(null, e),
                mapActions: L.bind(null, e)
            }
        }
    };
    t.a = k
}, , , function(e, t, n) {
    "use strict";
    var r = {
            name: "session-frame",
            components: {
                TmBtn: n(41).a
            },
            props: {
                hideBack: {
                    type: Boolean,
                    default: !1
                }
            },
            methods: {
                goBack: function() {
                    this.$router.go("-1")
                }
            }
        },
        a = (n(566), n(2)),
        i = Object(a.a)(r, function() {
            var e = this,
                t = e.$createElement,
                r = e._self._c || t;
            return r("transition", {
                attrs: {
                    name: "component-fade",
                    mode: "out-in"
                }
            }, [r("div", {
                staticClass: "session-frame"
            }, [r("router-link", {
                attrs: {
                    to: "/"
                }
            }, [r("img", {
                staticClass: "session-logo",
                attrs: {
                    src: n(565)
                }
            })]), e._v(" "), r("div", {
                staticClass: "session-outer-container"
            }, [r("div", {
                staticClass: "session"
            }, [e.hideBack ? e._e() : r("a", {
                on: {
                    click: e.goBack
                }
            }, [r("i", {
                staticClass: "material-icons session-back"
            }, [e._v("arrow_back")])]), e._v(" "), e._t("default")], 2)]), e._v(" "), r("TmBtn", {
                staticClass: "session-close",
                attrs: {
                    value: "Back to Color Wallet",
                    color: "secondary"
                },
                nativeOn: {
                    click: function(t) {
                        return e.$router.push("/")
                    }
                }
            })], 1)])
        }, [], !1, null, null, null);
    t.a = i.exports
}, function(e, t, n) {
    "use strict";
    var r = {
            name: "TmBtn",
            props: {
                value: {
                    type: String,
                    default: null
                },
                type: {
                    type: String,
                    default: null
                },
                size: {
                    type: String,
                    default: null
                },
                disabled: {
                    type: Boolean,
                    default: !1
                }
            }
        },
        a = (n(563), n(2)),
        i = Object(a.a)(r, function() {
            var e = this.$createElement;
            return (this._self._c || e)("button", {
                staticClass: "button",
                class: {
                    secondary: "secondary" === this.type, small: "small" === this.size, active: "active" === this.type
                },
                attrs: {
                    disabled: this.disabled
                }
            }, [this._v("\n  " + this._s(this.value) + "\n")])
        }, [], !1, null, "21b3c012", null);
    t.a = i.exports
}, , , , function(e, t, n) {
    "use strict";
    var r = Object({
        NODE_ENV: "production"
    }).STARGATE || "https://proxy.testnet.color-platform.org:9061";
    t.a = {
        name: "Color",
        development: !1,
        google_analytics_uid: Object({
            NODE_ENV: "production"
        }).GOOGLE_ANALYTICS_UID || "",
        sentry_dsn: Object({
            NODE_ENV: "production"
        }).SENTRY_DSN || "",
        default_gas_price: 2.5e-8,
        version: Object({
            NODE_ENV: "production"
        }).RELEASE,
        stargate: r,
        CosmosAppTestModeAllowed: !1
    }
}, , , , , , , , function(e, t, n) {
    "use strict";
    var r = {
            name: "bech32-address",
            filters: {
                formatBech32: n(14).a
            },
            props: {
                address: {
                    type: String,
                    required: !0
                },
                longForm: {
                    type: Boolean,
                    required: !1,
                    default: !1
                }
            },
            data: function() {
                return {
                    copySuccess: !1
                }
            },
            methods: {
                onCopy: function() {
                    var e = this;
                    this.copySuccess = !0, setTimeout(function() {
                        e.copySuccess = !1
                    }, 2500)
                }
            }
        },
        a = (n(562), n(2)),
        i = Object(a.a)(r, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "bech32-address"
            }, [n("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.top",
                    value: "Click to copy",
                    expression: "`Click to copy`",
                    modifiers: {
                        top: !0
                    }
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:copy",
                    value: e.address,
                    expression: "address",
                    arg: "copy"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:success",
                    value: function() {
                        return e.onCopy()
                    },
                    expression: "() => onCopy()",
                    arg: "success"
                }],
                staticClass: "address"
            }, [e._v("\n    " + e._s(e._f("formatBech32")(e.address, e.longForm)) + "\n  ")]), e._v(" "), n("div", {
                staticClass: "copied",
                class: {
                    active: e.copySuccess
                }
            }, [n("i", {
                staticClass: "material-icons"
            }, [e._v("check")])])])
        }, [], !1, null, null, null);
    t.a = i.exports
}, function(e, t, n) {
    "use strict";
    var r = {
            name: "tm-field",
            props: {
                type: {
                    type: String,
                    default: "text"
                },
                value: {
                    type: [String, Number, Boolean],
                    default: null
                },
                placeholder: {
                    type: String,
                    default: null
                },
                size: {
                    type: String,
                    default: null
                },
                options: {
                    type: [Array, Object],
                    default: null
                },
                change: {
                    type: Function,
                    default: null
                },
                keyup: {
                    type: Function,
                    default: null
                },
                keydown: {
                    type: Function,
                    default: null
                },
                isDisabled: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    defaultToggleOptions: {
                        checked: "on",
                        unchecked: "off"
                    },
                    currentToggleState: !1
                }
            },
            computed: {
                css: function() {
                    var e = "tm-field";
                    return "select" === this.type && (e += " tm-field-select"), this.size && (e += " tm-field-size-".concat(this.size)), e
                },
                toggleClass: function() {
                    return this.currentToggleState ? void 0 : "unchecked"
                },
                resolvedOptions: function() {
                    return "select" === this.type ? this.options || [] : this.options || this.defaultToggleOptions
                },
                selectPlaceholder: function() {
                    return this.placeholder ? this.placeholder : "Select option..."
                }
            },
            watch: {
                value: function(e) {
                    this.currentToggleState = !!e
                }
            },
            mounted: function() {
                this.currentToggleState = !!this.value
            },
            methods: {
                toggle: function() {
                    this.isDisabled || (this.currentToggleState = !this.currentToggleState, this.onChange(this.currentToggleState))
                },
                updateValue: function(e) {
                    var t = e;
                    "number" === this.type && (t = e.trim()), this.$emit("input", t)
                },
                onChange: function() {
                    if (this.change) return this.change.apply(this, arguments)
                },
                onKeyup: function() {
                    if (this.keyup) return this.keyup.apply(this, arguments)
                },
                onKeydown: function() {
                    if (this.keydown) return this.keydown.apply(this, arguments)
                }
            }
        },
        a = (n(573), n(2)),
        i = Object(a.a)(r, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return "select" === e.type ? n("div", {
                staticClass: "tm-select"
            }, [n("select", {
                class: e.css,
                domProps: {
                    value: e.value
                },
                on: {
                    input: function(t) {
                        return e.updateValue(t.target.value)
                    },
                    change: e.onChange,
                    keyup: e.onKeyup,
                    keydown: e.onKeydown
                }
            }, [n("option", {
                attrs: {
                    value: "",
                    disabled: "disabled",
                    selected: "selected",
                    hidden: "hidden"
                }
            }, [e._v("\n      " + e._s(e.selectPlaceholder) + "\n    ")]), e._v(" "), e._l(e.resolvedOptions, function(t, r) {
                return n("option", {
                    key: r,
                    domProps: {
                        value: t.value
                    }
                }, [e._v("\n        " + e._s(t.key) + "\n      ")])
            })], 2), e._v(" "), e._m(0)]) : "textarea" === e.type ? n("textarea", {
                class: e.css,
                attrs: {
                    placeholder: e.placeholder
                },
                domProps: {
                    value: e.value
                },
                on: {
                    change: e.onChange,
                    keyup: e.onKeyup,
                    keydown: e.onKeydown,
                    input: function(t) {
                        return e.updateValue(t.target.value)
                    }
                }
            }) : "toggle" === e.type ? n("label", {
                staticClass: "tm-toggle",
                class: e.toggleClass
            }, [n("div", {
                staticClass: "tm-toggle-wrapper",
                on: {
                    click: function(t) {
                        return t.preventDefault(), e.toggle(t)
                    }
                }
            }, [n("span", [e._v("\n      " + e._s(e.currentToggleState ? e.resolvedOptions.checked : e.resolvedOptions.unchecked) + "\n    ")]), e._v(" "), n("div", {
                staticClass: "toggle-option-checked"
            }, [n("div", [e._v(e._s(e.resolvedOptions.checked))])]), e._v(" "), n("div", {
                staticClass: "toggle-option-unchecked"
            }, [n("div", [e._v(e._s(e.resolvedOptions.unchecked))])]), e._v(" "), n("div", {
                staticClass: "toggle-handle"
            }), e._v(" "), n("input", {
                attrs: {
                    disabled: e.isDisabled,
                    type: "checkbox"
                },
                domProps: {
                    value: e.currentToggleState
                },
                on: {
                    change: e.onChange
                }
            })])]) : n("input", {
                ref: "numTextInput",
                class: e.css,
                attrs: {
                    type: e.type,
                    placeholder: e.placeholder
                },
                domProps: {
                    value: e.value
                },
                on: {
                    change: e.onChange,
                    keyup: e.onKeyup,
                    keydown: e.onKeydown,
                    input: function(t) {
                        return e.updateValue(t.target.value)
                    }
                }
            })
        }, [function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "tm-field-select-addon"
            }, [t("i", {
                staticClass: "material-icons"
            }, [this._v("arrow_drop_down")])])
        }], !1, null, null, null);
    t.a = i.exports
}, , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = {
            name: "tm-form-group",
            props: {
                error: {
                    type: Boolean,
                    default: !1
                },
                fieldId: {
                    type: String,
                    default: null
                },
                fieldLabel: {
                    type: String,
                    default: null
                },
                subLabel: {
                    type: String,
                    default: null
                }
            },
            computed: {
                cssClass: function() {
                    var e = "tm-form-group";
                    return this.error && (e += " tm-form-group--error"), e
                }
            }
        },
        a = (n(571), n(2)),
        i = Object(a.a)(r, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: e.cssClass
            }, [e.subLabel ? n("span", {
                staticClass: "tm-form-group__sub-label"
            }, [e._v("\n    " + e._s(e.subLabel) + "\n  ")]) : e._e(), e._v(" "), e.fieldId && e.fieldLabel ? n("label", {
                staticClass: "tm-form-group__label",
                attrs: {
                    for: e.fieldId
                }
            }, [e._v("\n    " + e._s(e.fieldLabel) + "\n  ")]) : e._e(), e._v(" "), n("div", {
                staticClass: "tm-form-group__field"
            }, [e._t("default")], 2)])
        }, [], !1, null, null, null);
    t.a = i.exports
}, function(e, t, n) {
    "use strict";
    var r = n(3),
        a = {
            props: {
                type: {
                    type: String,
                    required: !0
                },
                name: {
                    type: String,
                    default: ""
                },
                min: {
                    type: [String, Number],
                    default: null
                },
                max: {
                    type: [String, Number],
                    default: null
                },
                length: {
                    type: Number,
                    default: null
                },
                msg: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                cssClass: function() {
                    var e = "tm-form-msg sm";
                    return this.type && (e += " tm-form-msg--error"), e
                },
                error: function() {
                    var e = "";
                    switch (this.type) {
                        case "alphaNum":
                            e = "must contain only alphanumeric characters";
                            break;
                        case "numeric":
                            e = "must contain only numerals";
                            break;
                        case "between":
                            e = "must be between ".concat(Object(r.d)(this.min), " and ").concat(this.max);
                            break;
                        case "date":
                            e = "must be a valid date";
                            break;
                        case "datetime":
                            e = "must be a valid date and time";
                            break;
                        case "exactLength":
                            e = "must be exactly ".concat(this.length, " characters");
                            break;
                        case "ipAddress":
                            e = "must be a valid IPv4 or IPv6 address";
                            break;
                        case "length":
                            e = "must be between ".concat(this.min, " and ").concat(this.max, " characters");
                            break;
                        case "minLength":
                            e = "must be longer than ".concat(this.min, " characters");
                            break;
                        case "match":
                            e = "must match";
                            break;
                        case "maxLength":
                            e = "must be shorter than ".concat(this.max, " characters");
                            break;
                        case "required":
                            e = "is required";
                            break;
                        case "words16":
                            e = "phrase must be 16 words";
                            break;
                        case "url":
                            e = "must be a valid URL (http:// required)";
                            break;
                        case "bech32":
                            e = "is invalid bech32";
                            break;
                        case "integer":
                            e = "must be an integer";
                            break;
                        case "custom":
                            e = this.msg;
                            break;
                        default:
                            e = "must be valid"
                    }
                    return e
                }
            }
        },
        i = (n(574), n(2)),
        s = Object(i.a)(a, function() {
            var e = this.$createElement;
            return (this._self._c || e)("div", {
                class: this.cssClass
            }, [
                [this._v("\n    " + this._s(this.name) + " " + this._s(this.error) + "\n  ")]
            ], 2)
        }, [], !1, null, null, null);
    t.a = s.exports
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = n(99),
        a = n.n(r);
    t.default = a.a
}, function(e, t) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "createSeed", function() {
        return u
    }), n.d(t, "createKey", function() {
        return d
    }), n.d(t, "loadAccounts", function() {
        return l
    }), n.d(t, "testLogin", function() {
        return c
    }), n.d(t, "getSignRequest", function() {
        return _
    }), n.d(t, "getValidatorsData", function() {
        return m
    }), n.d(t, "approveSignRequest", function() {
        return h
    }), n.d(t, "rejectSignRequest", function() {
        return p
    }), n.d(t, "signIn", function() {
        return y
    });
    var r = n(12),
        a = n.n(r),
        i = n(20),
        s = n.n(i),
        o = n(45),
        u = function() {
            return new Promise(function(e) {
                chrome.runtime.sendMessage({
                    type: "GET_SEED"
                }, function(t) {
                    e(t)
                })
            })
        },
        d = function(e, t) {
            var n = e.dispatch,
                r = t.seedPhrase,
                a = t.password,
                i = t.name;
            return new Promise(function(e) {
                chrome.runtime.sendMessage({
                    type: "IMPORT_WALLET",
                    payload: {
                        password: a,
                        name: i,
                        mnemonic: r
                    }
                }, function() {
                    e(), n("loadAccounts")
                })
            })
        },
        l = function(e) {
            var t = e.commit;
            chrome.runtime.sendMessage({
                type: "GET_WALLETS"
            }, function(e) {
                t("setAccounts", e)
            })
        },
        c = function(e, t) {
            var n = t.address,
                r = t.password;
            return new Promise(function(e) {
                chrome.runtime.sendMessage({
                    type: "TEST_PASSWORD",
                    payload: {
                        address: n,
                        password: r
                    }
                }, function(t) {
                    e(t)
                })
            })
        },
        _ = function(e) {
            var t = e.commit;
            return new Promise(function(e) {
                chrome.runtime.sendMessage({
                    type: "GET_SIGN_REQUEST"
                }, function(n) {
                    t("setSignRequest", n), e(n)
                })
            })
        },
        m = function() {
            var e = s()(a.a.mark(function e(t) {
                var n, r, i, s, o, u, d;
                return a.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if ("cosmos-sdk/MsgDelegate" !== (n = t.value.msg[0]).type && "cosmos-sdk/MsgUndelegate" !== n.type) {
                                e.next = 7;
                                break
                            }
                            return r = n.value.validator_address, e.next = 5, f(r);
                        case 5:
                            return i = e.sent, e.abrupt("return", [{
                                operator_address: r,
                                description: {
                                    moniker: i
                                }
                            }]);
                        case 7:
                            if ("cosmos-sdk/MsgBeginRedelegate" !== n.type) {
                                e.next = 17;
                                break
                            }
                            return s = n.value.validator_src_address, e.next = 11, f(s);
                        case 11:
                            return o = e.sent, u = n.value.validator_dst_address, e.next = 15, f(u);
                        case 15:
                            return d = e.sent, e.abrupt("return", [{
                                operator_address: s,
                                description: {
                                    moniker: o
                                }
                            }, {
                                operator_address: u,
                                description: {
                                    moniker: d
                                }
                            }]);
                        case 17:
                            return e.abrupt("return", []);
                        case 18:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        f = function() {
            var e = s()(a.a.mark(function e(t) {
                return a.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", fetch("".concat(o.a.stargate, "/staking/validators/").concat(t)).then(function() {
                                var e = s()(a.a.mark(function e(t) {
                                    var n;
                                    return a.a.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, t.json();
                                            case 2:
                                                return n = e.sent, e.abrupt("return", n.description.moniker);
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                }));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch(function(e) {
                                console.log("Error: ", e)
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        h = function(e, t) {
            var n = e.commit,
                r = t.signMessage,
                a = t.senderAddress,
                i = t.password,
                s = t.id;
            return new Promise(function(e, t) {
                chrome.runtime.sendMessage({
                    type: "SIGN",
                    payload: {
                        signMessage: r,
                        senderAddress: a,
                        password: i,
                        id: s
                    }
                }, function(r) {
                    if (r && r.error) return t(r.error);
                    e(), n("setSignRequest", null)
                })
            })
        },
        p = function(e, t) {
            var n = e.commit;
            return new Promise(function(e) {
                chrome.runtime.sendMessage({
                    type: "REJECT_SIGN_REQUEST",
                    payload: t
                }, function(t) {
                    e(), n("setSignRequest", null)
                })
            })
        },
        y = function() {}
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Vuelidate = k, Object.defineProperty(t, "withParams", {
        enumerable: !0,
        get: function() {
            return a.withParams
        }
    }), t.default = t.validationMixin = void 0;
    var r = n(558),
        a = n(193);

    function i(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                o(e, t, n[t])
            })
        }
        return e
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function u(e) {
        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var d = function() {
            return null
        },
        l = function(e, t, n) {
            return e.reduce(function(e, r) {
                return e[n ? n(r) : r] = t(r), e
            }, {})
        };

    function c(e) {
        return "function" == typeof e
    }

    function _(e) {
        return null !== e && ("object" === u(e) || c(e))
    }
    var m = function(e, t, n, r) {
            if ("function" == typeof n) return n.call(e, t, r);
            n = Array.isArray(n) ? n : n.split(".");
            for (var a = 0; a < n.length; a++) {
                if (!t || "object" !== u(t)) return r;
                t = t[n[a]]
            }
            return void 0 === t ? r : t
        },
        f = "__isVuelidateAsyncVm";
    var h = {
        $invalid: function() {
            var e = this,
                t = this.proxy;
            return this.nestedKeys.some(function(t) {
                return e.refProxy(t).$invalid
            }) || this.ruleKeys.some(function(e) {
                return !t[e]
            })
        },
        $dirty: function() {
            var e = this;
            return !!this.dirty || 0 !== this.nestedKeys.length && this.nestedKeys.every(function(t) {
                return e.refProxy(t).$dirty
            })
        },
        $anyDirty: function() {
            var e = this;
            return !!this.dirty || 0 !== this.nestedKeys.length && this.nestedKeys.some(function(t) {
                return e.refProxy(t).$anyDirty
            })
        },
        $error: function() {
            return this.$dirty && !this.$pending && this.$invalid
        },
        $anyError: function() {
            return this.$anyDirty && !this.$pending && this.$invalid
        },
        $pending: function() {
            var e = this;
            return this.ruleKeys.some(function(t) {
                return e.getRef(t).$pending
            }) || this.nestedKeys.some(function(t) {
                return e.refProxy(t).$pending
            })
        },
        $params: function() {
            var e = this,
                t = this.validations;
            return s({}, l(this.nestedKeys, function(e) {
                return t[e] && t[e].$params || null
            }), l(this.ruleKeys, function(t) {
                return e.getRef(t).$params
            }))
        }
    };

    function p(e) {
        this.dirty = e;
        var t = this.proxy,
            n = e ? "$touch" : "$reset";
        this.nestedKeys.forEach(function(e) {
            t[e][n]()
        })
    }
    var y = {
            $touch: function() {
                p.call(this, !0)
            },
            $reset: function() {
                p.call(this, !1)
            },
            $flattenParams: function() {
                var e = this.proxy,
                    t = [];
                for (var n in this.$params)
                    if (this.isNested(n)) {
                        for (var r = e[n].$flattenParams(), a = 0; a < r.length; a++) r[a].path.unshift(n);
                        t = t.concat(r)
                    } else t.push({
                        path: [],
                        name: n,
                        params: this.$params[n]
                    });
                return t
            }
        },
        v = Object.keys(h),
        g = Object.keys(y),
        M = null,
        L = function(e) {
            if (M) return M;
            var t = e.extend({
                    computed: {
                        refs: function() {
                            var e = this._vval;
                            this._vval = this.children, (0, r.patchChildren)(e, this._vval);
                            var t = {};
                            return this._vval.forEach(function(e) {
                                t[e.key] = e.vm
                            }), t
                        }
                    },
                    beforeCreate: function() {
                        this._vval = null
                    },
                    beforeDestroy: function() {
                        this._vval && ((0, r.patchChildren)(this._vval), this._vval = null)
                    },
                    methods: {
                        getModel: function() {
                            return this.lazyModel ? this.lazyModel(this.prop) : this.model
                        },
                        getModelKey: function(e) {
                            var t = this.getModel();
                            if (t) return t[e]
                        },
                        hasIter: function() {
                            return !1
                        }
                    }
                }),
                n = t.extend({
                    data: function() {
                        return {
                            rule: null,
                            lazyModel: null,
                            model: null,
                            lazyParentModel: null,
                            rootModel: null
                        }
                    },
                    methods: {
                        runRule: function(t) {
                            var n = this.getModel();
                            (0, a.pushParams)();
                            var r, i = this.rule.call(this.rootModel, n, t),
                                s = _(r = i) && c(r.then) ? function(e, t) {
                                    var n = new e({
                                        data: {
                                            p: !0,
                                            v: !1
                                        }
                                    });
                                    return t.then(function(e) {
                                        n.p = !1, n.v = e
                                    }, function(e) {
                                        throw n.p = !1, n.v = !1, e
                                    }), n[f] = !0, n
                                }(e, i) : i,
                                o = (0, a.popParams)();
                            return {
                                output: s,
                                params: o && o.$sub ? o.$sub.length > 1 ? o : o.$sub[0] : null
                            }
                        }
                    },
                    computed: {
                        run: function() {
                            var e = this,
                                t = this.lazyParentModel();
                            if (Array.isArray(t) && t.__ob__) {
                                var n = t.__ob__.dep;
                                n.depend();
                                var r = n.constructor.target;
                                if (!this._indirectWatcher) {
                                    var a = r.constructor;
                                    this._indirectWatcher = new a(this, function() {
                                        return e.runRule(t)
                                    }, null, {
                                        lazy: !0
                                    })
                                }
                                var i = this.getModel();
                                if (!this._indirectWatcher.dirty && this._lastModel === i) return this._indirectWatcher.depend(), r.value;
                                this._lastModel = i, this._indirectWatcher.evaluate(), this._indirectWatcher.depend()
                            } else this._indirectWatcher && (this._indirectWatcher.teardown(), this._indirectWatcher = null);
                            return this._indirectWatcher ? this._indirectWatcher.value : this.runRule(t)
                        },
                        $params: function() {
                            return this.run.params
                        },
                        proxy: function() {
                            var e = this.run.output;
                            return e[f] ? !!e.v : !!e
                        },
                        $pending: function() {
                            var e = this.run.output;
                            return !!e[f] && e.p
                        }
                    },
                    destroyed: function() {
                        this._indirectWatcher && (this._indirectWatcher.teardown(), this._indirectWatcher = null)
                    }
                }),
                o = t.extend({
                    data: function() {
                        return {
                            dirty: !1,
                            validations: null,
                            lazyModel: null,
                            model: null,
                            prop: null,
                            lazyParentModel: null,
                            rootModel: null
                        }
                    },
                    methods: s({}, y, {
                        refProxy: function(e) {
                            return this.getRef(e).proxy
                        },
                        getRef: function(e) {
                            return this.refs[e]
                        },
                        isNested: function(e) {
                            return "function" != typeof this.validations[e]
                        }
                    }),
                    computed: s({}, h, {
                        nestedKeys: function() {
                            return this.keys.filter(this.isNested)
                        },
                        ruleKeys: function() {
                            var e = this;
                            return this.keys.filter(function(t) {
                                return !e.isNested(t)
                            })
                        },
                        keys: function() {
                            return Object.keys(this.validations).filter(function(e) {
                                return "$params" !== e
                            })
                        },
                        proxy: function() {
                            var e = this,
                                t = l(this.keys, function(t) {
                                    return {
                                        enumerable: !0,
                                        configurable: !0,
                                        get: function() {
                                            return e.refProxy(t)
                                        }
                                    }
                                }),
                                n = l(v, function(t) {
                                    return {
                                        enumerable: !0,
                                        configurable: !0,
                                        get: function() {
                                            return e[t]
                                        }
                                    }
                                }),
                                r = l(g, function(t) {
                                    return {
                                        enumerable: !1,
                                        configurable: !0,
                                        get: function() {
                                            return e[t]
                                        }
                                    }
                                }),
                                a = this.hasIter() ? {
                                    $iter: {
                                        enumerable: !0,
                                        value: Object.defineProperties({}, s({}, t))
                                    }
                                } : {};
                            return Object.defineProperties({}, s({}, t, a, {
                                $model: {
                                    enumerable: !0,
                                    get: function() {
                                        var t = e.lazyParentModel();
                                        return null != t ? t[e.prop] : null
                                    },
                                    set: function(t) {
                                        var n = e.lazyParentModel();
                                        null != n && (n[e.prop] = t, e.$touch())
                                    }
                                }
                            }, n, r))
                        },
                        children: function() {
                            var e = this;
                            return i(this.nestedKeys.map(function(t) {
                                return L(e, t)
                            })).concat(i(this.ruleKeys.map(function(t) {
                                return Y(e, t)
                            }))).filter(Boolean)
                        }
                    })
                }),
                u = o.extend({
                    methods: {
                        isNested: function(e) {
                            return void 0 !== this.validations[e]()
                        },
                        getRef: function(e) {
                            var t = this;
                            return {get proxy() {
                                    return t.validations[e]() || !1
                                }
                            }
                        }
                    }
                }),
                p = o.extend({
                    computed: {
                        keys: function() {
                            var e = this.getModel();
                            return _(e) ? Object.keys(e) : []
                        },
                        tracker: function() {
                            var e = this,
                                t = this.validations.$trackBy;
                            return t ? function(n) {
                                return "".concat(m(e.rootModel, e.getModelKey(n), t))
                            } : function(e) {
                                return "".concat(e)
                            }
                        },
                        getModelLazy: function() {
                            var e = this;
                            return function() {
                                return e.getModel()
                            }
                        },
                        children: function() {
                            var e = this,
                                t = this.validations,
                                n = this.getModel(),
                                a = s({}, t);
                            delete a.$trackBy;
                            var i = {};
                            return this.keys.map(function(t) {
                                var s = e.tracker(t);
                                return i.hasOwnProperty(s) ? null : (i[s] = !0, (0, r.h)(o, s, {
                                    validations: a,
                                    prop: t,
                                    lazyParentModel: e.getModelLazy,
                                    model: n[t],
                                    rootModel: e.rootModel
                                }))
                            }).filter(Boolean)
                        }
                    },
                    methods: {
                        isNested: function() {
                            return !0
                        },
                        getRef: function(e) {
                            return this.refs[this.tracker(e)]
                        },
                        hasIter: function() {
                            return !0
                        }
                    }
                }),
                L = function(e, t) {
                    if ("$each" === t) return (0, r.h)(p, t, {
                        validations: e.validations[t],
                        lazyParentModel: e.lazyParentModel,
                        prop: t,
                        lazyModel: e.getModel,
                        rootModel: e.rootModel
                    });
                    var n = e.validations[t];
                    if (Array.isArray(n)) {
                        var a = e.rootModel,
                            i = l(n, function(e) {
                                return function() {
                                    return m(a, a.$v, e)
                                }
                            }, function(e) {
                                return Array.isArray(e) ? e.join(".") : e
                            });
                        return (0, r.h)(u, t, {
                            validations: i,
                            lazyParentModel: d,
                            prop: t,
                            lazyModel: d,
                            rootModel: a
                        })
                    }
                    return (0, r.h)(o, t, {
                        validations: n,
                        lazyParentModel: e.getModel,
                        prop: t,
                        lazyModel: e.getModelKey,
                        rootModel: e.rootModel
                    })
                },
                Y = function(e, t) {
                    return (0, r.h)(n, t, {
                        rule: e.validations[t],
                        lazyParentModel: e.lazyParentModel,
                        lazyModel: e.getModel,
                        rootModel: e.rootModel
                    })
                };
            return M = {
                VBase: t,
                Validation: o
            }
        },
        Y = null;
    var b = function(e, t) {
            var n = function(e) {
                    if (Y) return Y;
                    for (var t = e.constructor; t.super;) t = t.super;
                    return Y = t, t
                }(e),
                a = L(n),
                i = a.Validation;
            return new(0, a.VBase)({
                computed: {
                    children: function() {
                        var n = "function" == typeof t ? t.call(e) : t;
                        return [(0, r.h)(i, "$v", {
                            validations: n,
                            lazyParentModel: d,
                            prop: "$v",
                            model: e,
                            rootModel: e
                        })]
                    }
                }
            })
        },
        w = {
            data: function() {
                var e = this.$options.validations;
                return e && (this._vuelidate = b(this, e)), {}
            },
            beforeCreate: function() {
                var e = this.$options;
                e.validations && (e.computed || (e.computed = {}), e.computed.$v || (e.computed.$v = function() {
                    return this._vuelidate ? this._vuelidate.refs.$v.proxy : null
                }))
            },
            beforeDestroy: function() {
                this._vuelidate && (this._vuelidate.$destroy(), this._vuelidate = null)
            }
        };

    function k(e) {
        e.mixin(w)
    }
    t.validationMixin = w;
    var D = k;
    t.default = D
}, function(e, t, n) {
    "use strict";
    var r = {
            name: "tm-li-session",
            props: {
                icon: {
                    type: String,
                    required: !0
                },
                title: {
                    type: String,
                    required: !0
                },
                route: {
                    type: String,
                    default: ""
                }
            }
        },
        a = (n(568), n(2)),
        i = Object(a.a)(r, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("router-link", {
                staticClass: "tm-li-session",
                attrs: {
                    to: e.route
                }
            }, [n("div", {
                staticClass: "tm-li-session-icon"
            }, [n("i", {
                staticClass: "material-icons circle"
            }, [e._v(e._s(e.icon))])]), e._v(" "), n("div", {
                staticClass: "tm-li-session-text"
            }, [n("div", {
                staticClass: "tm-li-session-title"
            }, [n("span", [e._v(e._s(e.title))])])]), e._v(" "), n("div", {
                staticClass: "tm-li-session-icon"
            }, [n("i", {
                staticClass: "material-icons"
            }, [e._v("arrow_forward")])])])
        }, [], !1, null, "468d397c", null);
    t.a = i.exports
}, function(e, t, n) {
    "use strict";
    var r = n(12),
        a = n.n(r),
        i = n(20),
        s = n.n(i),
        o = n(152),
        u = n.n(o),
        d = {
            name: "tm-field-seed",
            components: {
                TmField: n(54).a
            },
            props: {
                value: {
                    type: String,
                    required: !0
                }
            },
            watch: {
                value: {
                    handler: function() {
                        var e = s()(a.a.mark(function e() {
                            return a.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.$nextTick();
                                    case 2:
                                        u.a.update(this.$el);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }
            },
            mounted: function() {
                u()(this.$el)
            },
            methods: {
                update: function(e) {
                    this.$emit("input", e)
                }
            }
        },
        l = (n(575), n(2)),
        c = Object(l.a)(d, function() {
            var e = this,
                t = e.$createElement;
            return (e._self._c || t)("TmField", {
                staticClass: "tm-field-seed",
                attrs: {
                    value: e.value,
                    type: "textarea"
                },
                on: {
                    input: function(t) {
                        return e.update(t)
                    }
                }
            })
        }, [], !1, null, "76bcad26", null);
    t.a = c.exports
}, function(e, t, n) {
    "use strict";
    var r = {
            name: "form-struct",
            props: {
                width: {
                    type: String,
                    default: ""
                },
                submit: {
                    type: Function,
                    required: !0
                }
            },
            computed: {
                hasHeader: function() {
                    return this.$slots.title || this.$slots.subtitle
                },
                hasFooter: function() {
                    return this.$slots.footer
                }
            }
        },
        a = (n(572), n(2)),
        i = Object(a.a)(r, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("form", {
                staticClass: "form",
                on: {
                    submit: function(t) {
                        return t.preventDefault(), e.submit(t)
                    }
                }
            }, [e._t("overlay"), e._v(" "), e.hasHeader ? n("header", {
                staticClass: "form-header"
            }, [n("div", {
                staticClass: "form-title"
            }, [e._t("title")], 2), e._v(" "), n("div", {
                staticClass: "form-subtitle"
            }, [e._t("subtitle")], 2)]) : e._e(), e._v(" "), n("main", {
                staticClass: "form-main"
            }, [e._t("default")], 2), e._v(" "), e.hasFooter ? n("footer", {
                staticClass: "form-footer"
            }, [e._t("footer")], 2) : e._e()], 2)
        }, [], !1, null, "5adcb34a", null);
    t.a = i.exports
}, , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var r = function(e) {
        "use strict";
        var t, n = Object.prototype,
            r = n.hasOwnProperty,
            a = "function" == typeof Symbol ? Symbol : {},
            i = a.iterator || "@@iterator",
            s = a.asyncIterator || "@@asyncIterator",
            o = a.toStringTag || "@@toStringTag";

        function u(e, t, n, r) {
            var a = t && t.prototype instanceof h ? t : h,
                i = Object.create(a.prototype),
                s = new T(r || []);
            return i._invoke = function(e, t, n) {
                var r = l;
                return function(a, i) {
                    if (r === _) throw new Error("Generator is already running");
                    if (r === m) {
                        if ("throw" === a) throw i;
                        return x()
                    }
                    for (n.method = a, n.arg = i;;) {
                        var s = n.delegate;
                        if (s) {
                            var o = w(s, n);
                            if (o) {
                                if (o === f) continue;
                                return o
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (r === l) throw r = m, n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = _;
                        var u = d(e, t, n);
                        if ("normal" === u.type) {
                            if (r = n.done ? m : c, u.arg === f) continue;
                            return {
                                value: u.arg,
                                done: n.done
                            }
                        }
                        "throw" === u.type && (r = m, n.method = "throw", n.arg = u.arg)
                    }
                }
            }(e, n, s), i
        }

        function d(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        e.wrap = u;
        var l = "suspendedStart",
            c = "suspendedYield",
            _ = "executing",
            m = "completed",
            f = {};

        function h() {}

        function p() {}

        function y() {}
        var v = {};
        v[i] = function() {
            return this
        };
        var g = Object.getPrototypeOf,
            M = g && g(g(S([])));
        M && M !== n && r.call(M, i) && (v = M);
        var L = y.prototype = h.prototype = Object.create(v);

        function Y(e) {
            ["next", "throw", "return"].forEach(function(t) {
                e[t] = function(e) {
                    return this._invoke(t, e)
                }
            })
        }

        function b(e) {
            var t;
            this._invoke = function(n, a) {
                function i() {
                    return new Promise(function(t, i) {
                        ! function t(n, a, i, s) {
                            var o = d(e[n], e, a);
                            if ("throw" !== o.type) {
                                var u = o.arg,
                                    l = u.value;
                                return l && "object" == typeof l && r.call(l, "__await") ? Promise.resolve(l.__await).then(function(e) {
                                    t("next", e, i, s)
                                }, function(e) {
                                    t("throw", e, i, s)
                                }) : Promise.resolve(l).then(function(e) {
                                    u.value = e, i(u)
                                }, function(e) {
                                    return t("throw", e, i, s)
                                })
                            }
                            s(o.arg)
                        }(n, a, t, i)
                    })
                }
                return t = t ? t.then(i, i) : i()
            }
        }

        function w(e, n) {
            var r = e.iterator[n.method];
            if (r === t) {
                if (n.delegate = null, "throw" === n.method) {
                    if (e.iterator.return && (n.method = "return", n.arg = t, w(e, n), "throw" === n.method)) return f;
                    n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return f
            }
            var a = d(r, e.iterator, n.arg);
            if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, f;
            var i = a.arg;
            return i ? i.done ? (n[e.resultName] = i.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, f) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, f)
        }

        function k(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function D(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function T(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(k, this), this.reset(!0)
        }

        function S(e) {
            if (e) {
                var n = e[i];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var a = -1,
                        s = function n() {
                            for (; ++a < e.length;)
                                if (r.call(e, a)) return n.value = e[a], n.done = !1, n;
                            return n.value = t, n.done = !0, n
                        };
                    return s.next = s
                }
            }
            return {
                next: x
            }
        }

        function x() {
            return {
                value: t,
                done: !0
            }
        }
        return p.prototype = L.constructor = y, y.constructor = p, y[o] = p.displayName = "GeneratorFunction", e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
        }, e.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, o in e || (e[o] = "GeneratorFunction")), e.prototype = Object.create(L), e
        }, e.awrap = function(e) {
            return {
                __await: e
            }
        }, Y(b.prototype), b.prototype[s] = function() {
            return this
        }, e.AsyncIterator = b, e.async = function(t, n, r, a) {
            var i = new b(u(t, n, r, a));
            return e.isGeneratorFunction(n) ? i : i.next().then(function(e) {
                return e.done ? e.value : i.next()
            })
        }, Y(L), L[o] = "Generator", L[i] = function() {
            return this
        }, L.toString = function() {
            return "[object Generator]"
        }, e.keys = function(e) {
            var t = [];
            for (var n in e) t.push(n);
            return t.reverse(),
                function n() {
                    for (; t.length;) {
                        var r = t.pop();
                        if (r in e) return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                }
        }, e.values = S, T.prototype = {
            constructor: T,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(D), !e)
                    for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function(e) {
                if (this.done) throw e;
                var n = this;

                function a(r, a) {
                    return o.type = "throw", o.arg = e, n.next = r, a && (n.method = "next", n.arg = t), !!a
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var s = this.tryEntries[i],
                        o = s.completion;
                    if ("root" === s.tryLoc) return a("end");
                    if (s.tryLoc <= this.prev) {
                        var u = r.call(s, "catchLoc"),
                            d = r.call(s, "finallyLoc");
                        if (u && d) {
                            if (this.prev < s.catchLoc) return a(s.catchLoc, !0);
                            if (this.prev < s.finallyLoc) return a(s.finallyLoc)
                        } else if (u) {
                            if (this.prev < s.catchLoc) return a(s.catchLoc, !0)
                        } else {
                            if (!d) throw new Error("try statement without catch or finally");
                            if (this.prev < s.finallyLoc) return a(s.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var a = this.tryEntries[n];
                    if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                        var i = a;
                        break
                    }
                }
                i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                var s = i ? i.completion : {};
                return s.type = e, s.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(s)
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), D(n), f
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var a = r.arg;
                            D(n)
                        }
                        return a
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, n, r) {
                return this.delegate = {
                    iterator: S(e),
                    resultName: n,
                    nextLoc: r
                }, "next" === this.method && (this.arg = t), f
            }
        }, e
    }(e.exports);
    try {
        regeneratorRuntime = r
    } catch (e) {
        Function("r", "regeneratorRuntime = r")(r)
    }
}, function(e, t, n) {
    var r, a, i;
    a = [e], void 0 === (i = "function" == typeof(r = function(e) {
        "use strict";
        if ("undefined" == typeof browser || Object.getPrototypeOf(browser) !== Object.prototype) {
            const t = "The message port closed before a response was received.",
                n = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
                r = () => {
                    const e = {
                        alarms: {
                            clear: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            clearAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        bookmarks: {
                            create: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getChildren: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getRecent: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getSubTree: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTree: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            move: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeTree: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        browserAction: {
                            disable: {
                                minArgs: 0,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            enable: {
                                minArgs: 0,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            getBadgeBackgroundColor: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getBadgeText: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getPopup: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            openPopup: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setBadgeBackgroundColor: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setBadgeText: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setIcon: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setPopup: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setTitle: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        browsingData: {
                            remove: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            removeCache: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCookies: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeDownloads: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFormData: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeHistory: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeLocalStorage: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removePasswords: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removePluginData: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            settings: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        commands: {
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        contextMenus: {
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        cookies: {
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAllCookieStores: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        devtools: {
                            inspectedWindow: {
                                eval: {
                                    minArgs: 1,
                                    maxArgs: 2
                                }
                            },
                            panels: {
                                create: {
                                    minArgs: 3,
                                    maxArgs: 3,
                                    singleCallbackArg: !0
                                }
                            }
                        },
                        downloads: {
                            cancel: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            download: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            erase: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFileIcon: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            open: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            pause: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFile: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            resume: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            show: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        extension: {
                            isAllowedFileSchemeAccess: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            isAllowedIncognitoAccess: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        history: {
                            addUrl: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            deleteRange: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteUrl: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getVisits: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        i18n: {
                            detectLanguage: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAcceptLanguages: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        identity: {
                            launchWebAuthFlow: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        idle: {
                            queryState: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        management: {
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getSelf: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setEnabled: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            uninstallSelf: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        notifications: {
                            clear: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            create: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPermissionLevel: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        pageAction: {
                            getPopup: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            hide: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setIcon: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setPopup: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setTitle: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            show: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        permissions: {
                            contains: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            request: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        runtime: {
                            getBackgroundPage: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getBrowserInfo: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPlatformInfo: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            openOptionsPage: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            requestUpdateCheck: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            sendMessage: {
                                minArgs: 1,
                                maxArgs: 3
                            },
                            sendNativeMessage: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            setUninstallURL: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        sessions: {
                            getDevices: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getRecentlyClosed: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            restore: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        storage: {
                            local: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            managed: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            sync: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            }
                        },
                        tabs: {
                            captureVisibleTab: {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            create: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            detectLanguage: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            discard: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            duplicate: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            executeScript: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getCurrent: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getZoom: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getZoomSettings: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            highlight: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            insertCSS: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            move: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            query: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            reload: {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCSS: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            sendMessage: {
                                minArgs: 2,
                                maxArgs: 3
                            },
                            setZoom: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            setZoomSettings: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            update: {
                                minArgs: 1,
                                maxArgs: 2
                            }
                        },
                        topSites: {
                            get: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        webNavigation: {
                            getAllFrames: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFrame: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        webRequest: {
                            handlerBehaviorChanged: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        windows: {
                            create: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getCurrent: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getLastFocused: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        }
                    };
                    if (0 === Object.keys(e).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                    const r = (e, t) => (...n) => {
                            chrome.runtime.lastError ? e.reject(chrome.runtime.lastError) : t.singleCallbackArg || n.length <= 1 ? e.resolve(n[0]) : e.resolve(n)
                        },
                        a = e => 1 == e ? "argument" : "arguments",
                        i = (e, t, n) => new Proxy(t, {
                            apply: (t, r, a) => n.call(r, e, ...a)
                        });
                    let s = Function.call.bind(Object.prototype.hasOwnProperty);
                    const o = (e, t = {}, n = {}) => {
                            let u = Object.create(null),
                                d = {
                                    has: (t, n) => n in e || n in u,
                                    get(d, l, c) {
                                        if (l in u) return u[l];
                                        if (!(l in e)) return;
                                        let _ = e[l];
                                        if ("function" == typeof _)
                                            if ("function" == typeof t[l]) _ = i(e, e[l], t[l]);
                                            else if (s(n, l)) {
                                            let t = ((e, t) => (function(n, ...i) {
                                                if (i.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${a(t.minArgs)} for ${e}(), got ${i.length}`);
                                                if (i.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${a(t.maxArgs)} for ${e}(), got ${i.length}`);
                                                return new Promise((a, s) => {
                                                    if (t.fallbackToNoCallback) try {
                                                        n[e](...i, r({
                                                            resolve: a,
                                                            reject: s
                                                        }, t))
                                                    } catch (r) {
                                                        console.warn(`${e} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", r), n[e](...i), t.fallbackToNoCallback = !1, t.noCallback = !0, a()
                                                    } else t.noCallback ? (n[e](...i), a()) : n[e](...i, r({
                                                        resolve: a,
                                                        reject: s
                                                    }, t))
                                                })
                                            }))(l, n[l]);
                                            _ = i(e, e[l], t)
                                        } else _ = _.bind(e);
                                        else {
                                            if ("object" != typeof _ || null === _ || !s(t, l) && !s(n, l)) return Object.defineProperty(u, l, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get: () => e[l],
                                                set(t) {
                                                    e[l] = t
                                                }
                                            }), _;
                                            _ = o(_, t[l], n[l])
                                        }
                                        return u[l] = _, _
                                    },
                                    set: (t, n, r, a) => (n in u ? u[n] = r : e[n] = r, !0),
                                    defineProperty: (e, t, n) => Reflect.defineProperty(u, t, n),
                                    deleteProperty: (e, t) => Reflect.deleteProperty(u, t)
                                },
                                l = Object.create(e);
                            return new Proxy(l, d)
                        },
                        u = e => ({
                            addListener(t, n, ...r) {
                                t.addListener(e.get(n), ...r)
                            }, hasListener: (t, n) => t.hasListener(e.get(n)), removeListener(t, n) {
                                t.removeListener(e.get(n))
                            }
                        });
                    let d = !1;
                    const l = new class extends WeakMap {
                            constructor(e, t) {
                                super(t), this.createItem = e
                            }
                            get(e) {
                                return this.has(e) || this.set(e, this.createItem(e)), super.get(e)
                            }
                        }(e => "function" != typeof e ? e : function(t, r, a) {
                            let i, s, o = !1,
                                u = new Promise(e => {
                                    i = function(t) {
                                        d || (console.warn(n, (new Error).stack), d = !0), o = !0, e(t)
                                    }
                                });
                            try {
                                s = e(t, r, i)
                            } catch (e) {
                                s = Promise.reject(e)
                            }
                            const l = !0 !== s && (e => e && "object" == typeof e && "function" == typeof e.then)(s);
                            if (!0 !== s && !l && !o) return !1;
                            const c = e => {
                                e.then(e => {
                                    a(e)
                                }, e => {
                                    let t;
                                    t = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred", a({
                                        __mozWebExtensionPolyfillReject__: !0,
                                        message: t
                                    })
                                }).catch(e => {
                                    console.error("Failed to send onMessage rejected reply", e)
                                })
                            };
                            return c(l ? s : u), !0
                        }),
                        c = (e, n, r, ...i) => {
                            if (i.length < n.minArgs) throw new Error(`Expected at least ${n.minArgs} ${a(n.minArgs)} for ${e}(), got ${i.length}`);
                            if (i.length > n.maxArgs) throw new Error(`Expected at most ${n.maxArgs} ${a(n.maxArgs)} for ${e}(), got ${i.length}`);
                            return new Promise((e, n) => {
                                const a = (({
                                    reject: e,
                                    resolve: n
                                }, r) => {
                                    chrome.runtime.lastError ? chrome.runtime.lastError.message === t ? n() : e(chrome.runtime.lastError) : r && r.__mozWebExtensionPolyfillReject__ ? e(new Error(r.message)) : n(r)
                                }).bind(null, {
                                    resolve: e,
                                    reject: n
                                });
                                i.push(a), r.sendMessage(...i)
                            })
                        },
                        _ = {
                            runtime: {
                                onMessage: u(l),
                                onMessageExternal: u(l),
                                sendMessage: c.bind(null, "sendMessage", {
                                    minArgs: 1,
                                    maxArgs: 3
                                })
                            },
                            tabs: {
                                sendMessage: c.bind(null, "sendMessage", {
                                    minArgs: 2,
                                    maxArgs: 3
                                })
                            }
                        },
                        m = {
                            clear: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        };
                    return e.privacy = {
                        network: {
                            networkPredictionEnabled: m,
                            webRTCIPHandlingPolicy: m
                        },
                        services: {
                            passwordSavingEnabled: m
                        },
                        websites: {
                            hyperlinkAuditingEnabled: m,
                            referrersEnabled: m
                        }
                    }, o(chrome, _, e)
                };
            e.exports = r()
        } else e.exports = browser
    }) ? r.apply(t, a) : r) || (e.exports = i)
}, , function(e, t, n) {
    var r;
    ! function(a) {
        "use strict";
        var i, s = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
            o = Math.ceil,
            u = Math.floor,
            d = "[BigNumber Error] ",
            l = d + "Number primitive has more than 15 significant digits: ",
            c = 1e14,
            _ = 14,
            m = 9007199254740991,
            f = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
            h = 1e7,
            p = 1e9;

        function y(e) {
            var t = 0 | e;
            return e > 0 || e === t ? t : t - 1
        }

        function v(e) {
            for (var t, n, r = 1, a = e.length, i = e[0] + ""; r < a;) {
                for (t = e[r++] + "", n = _ - t.length; n--; t = "0" + t);
                i += t
            }
            for (a = i.length; 48 === i.charCodeAt(--a););
            return i.slice(0, a + 1 || 1)
        }

        function g(e, t) {
            var n, r, a = e.c,
                i = t.c,
                s = e.s,
                o = t.s,
                u = e.e,
                d = t.e;
            if (!s || !o) return null;
            if (n = a && !a[0], r = i && !i[0], n || r) return n ? r ? 0 : -o : s;
            if (s != o) return s;
            if (n = s < 0, r = u == d, !a || !i) return r ? 0 : !a ^ n ? 1 : -1;
            if (!r) return u > d ^ n ? 1 : -1;
            for (o = (u = a.length) < (d = i.length) ? u : d, s = 0; s < o; s++)
                if (a[s] != i[s]) return a[s] > i[s] ^ n ? 1 : -1;
            return u == d ? 0 : u > d ^ n ? 1 : -1
        }

        function M(e, t, n, r) {
            if (e < t || e > n || e !== u(e)) throw Error(d + (r || "Argument") + ("number" == typeof e ? e < t || e > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
        }

        function L(e) {
            var t = e.c.length - 1;
            return y(e.e / _) == t && e.c[t] % 2 != 0
        }

        function Y(e, t) {
            return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
        }

        function b(e, t, n) {
            var r, a;
            if (t < 0) {
                for (a = n + "."; ++t; a += n);
                e = a + e
            } else if (++t > (r = e.length)) {
                for (a = n, t -= r; --t; a += n);
                e += a
            } else t < r && (e = e.slice(0, t) + "." + e.slice(t));
            return e
        }(i = function e(t) {
            var n, r, a, i, w, k, D, T, S, x = R.prototype = {
                    constructor: R,
                    toString: null,
                    valueOf: null
                },
                j = new R(1),
                A = 20,
                O = 4,
                H = -7,
                E = 21,
                P = -1e7,
                C = 1e7,
                $ = !1,
                F = 1,
                W = 0,
                N = {
                    prefix: "",
                    groupSize: 3,
                    secondaryGroupSize: 0,
                    groupSeparator: ",",
                    decimalSeparator: ".",
                    fractionGroupSize: 0,
                    fractionGroupSeparator: " ",
                    suffix: ""
                },
                z = "0123456789abcdefghijklmnopqrstuvwxyz";

            function R(e, t) {
                var n, i, o, d, c, f, h, p, y = this;
                if (!(y instanceof R)) return new R(e, t);
                if (null == t) {
                    if (e && !0 === e._isBigNumber) return y.s = e.s, void(!e.c || e.e > C ? y.c = y.e = null : e.e < P ? y.c = [y.e = 0] : (y.e = e.e, y.c = e.c.slice()));
                    if ((f = "number" == typeof e) && 0 * e == 0) {
                        if (y.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                            for (d = 0, c = e; c >= 10; c /= 10, d++);
                            return void(d > C ? y.c = y.e = null : (y.e = d, y.c = [e]))
                        }
                        p = String(e)
                    } else {
                        if (!s.test(p = String(e))) return a(y, p, f);
                        y.s = 45 == p.charCodeAt(0) ? (p = p.slice(1), -1) : 1
                    }(d = p.indexOf(".")) > -1 && (p = p.replace(".", "")), (c = p.search(/e/i)) > 0 ? (d < 0 && (d = c), d += +p.slice(c + 1), p = p.substring(0, c)) : d < 0 && (d = p.length)
                } else {
                    if (M(t, 2, z.length, "Base"), 10 == t) return J(y = new R(e), A + y.e + 1, O);
                    if (p = String(e), f = "number" == typeof e) {
                        if (0 * e != 0) return a(y, p, f, t);
                        if (y.s = 1 / e < 0 ? (p = p.slice(1), -1) : 1, R.DEBUG && p.replace(/^0\.0*|\./, "").length > 15) throw Error(l + e)
                    } else y.s = 45 === p.charCodeAt(0) ? (p = p.slice(1), -1) : 1;
                    for (n = z.slice(0, t), d = c = 0, h = p.length; c < h; c++)
                        if (n.indexOf(i = p.charAt(c)) < 0) {
                            if ("." == i) {
                                if (c > d) {
                                    d = h;
                                    continue
                                }
                            } else if (!o && (p == p.toUpperCase() && (p = p.toLowerCase()) || p == p.toLowerCase() && (p = p.toUpperCase()))) {
                                o = !0, c = -1, d = 0;
                                continue
                            }
                            return a(y, String(e), f, t)
                        }
                    f = !1, (d = (p = r(p, t, 10, y.s)).indexOf(".")) > -1 ? p = p.replace(".", "") : d = p.length
                }
                for (c = 0; 48 === p.charCodeAt(c); c++);
                for (h = p.length; 48 === p.charCodeAt(--h););
                if (p = p.slice(c, ++h)) {
                    if (h -= c, f && R.DEBUG && h > 15 && (e > m || e !== u(e))) throw Error(l + y.s * e);
                    if ((d = d - c - 1) > C) y.c = y.e = null;
                    else if (d < P) y.c = [y.e = 0];
                    else {
                        if (y.e = d, y.c = [], c = (d + 1) % _, d < 0 && (c += _), c < h) {
                            for (c && y.c.push(+p.slice(0, c)), h -= _; c < h;) y.c.push(+p.slice(c, c += _));
                            c = _ - (p = p.slice(c)).length
                        } else c -= h;
                        for (; c--; p += "0");
                        y.c.push(+p)
                    }
                } else y.c = [y.e = 0]
            }

            function I(e, t, n, r) {
                var a, i, s, o, u;
                if (null == n ? n = O : M(n, 0, 8), !e.c) return e.toString();
                if (a = e.c[0], s = e.e, null == t) u = v(e.c), u = 1 == r || 2 == r && (s <= H || s >= E) ? Y(u, s) : b(u, s, "0");
                else if (i = (e = J(new R(e), t, n)).e, o = (u = v(e.c)).length, 1 == r || 2 == r && (t <= i || i <= H)) {
                    for (; o < t; u += "0", o++);
                    u = Y(u, i)
                } else if (t -= s, u = b(u, i, "0"), i + 1 > o) {
                    if (--t > 0)
                        for (u += "."; t--; u += "0");
                } else if ((t += i - o) > 0)
                    for (i + 1 == o && (u += "."); t--; u += "0");
                return e.s < 0 && a ? "-" + u : u
            }

            function U(e, t) {
                for (var n, r = 1, a = new R(e[0]); r < e.length; r++) {
                    if (!(n = new R(e[r])).s) {
                        a = n;
                        break
                    }
                    t.call(a, n) && (a = n)
                }
                return a
            }

            function q(e, t, n) {
                for (var r = 1, a = t.length; !t[--a]; t.pop());
                for (a = t[0]; a >= 10; a /= 10, r++);
                return (n = r + n * _ - 1) > C ? e.c = e.e = null : n < P ? e.c = [e.e = 0] : (e.e = n, e.c = t), e
            }

            function J(e, t, n, r) {
                var a, i, s, d, l, m, h, p = e.c,
                    y = f;
                if (p) {
                    e: {
                        for (a = 1, d = p[0]; d >= 10; d /= 10, a++);
                        if ((i = t - a) < 0) i += _, s = t, h = (l = p[m = 0]) / y[a - s - 1] % 10 | 0;
                        else if ((m = o((i + 1) / _)) >= p.length) {
                            if (!r) break e;
                            for (; p.length <= m; p.push(0));
                            l = h = 0, a = 1, s = (i %= _) - _ + 1
                        } else {
                            for (l = d = p[m], a = 1; d >= 10; d /= 10, a++);
                            h = (s = (i %= _) - _ + a) < 0 ? 0 : l / y[a - s - 1] % 10 | 0
                        }
                        if (r = r || t < 0 || null != p[m + 1] || (s < 0 ? l : l % y[a - s - 1]), r = n < 4 ? (h || r) && (0 == n || n == (e.s < 0 ? 3 : 2)) : h > 5 || 5 == h && (4 == n || r || 6 == n && (i > 0 ? s > 0 ? l / y[a - s] : 0 : p[m - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !p[0]) return p.length = 0, r ? (t -= e.e + 1, p[0] = y[(_ - t % _) % _], e.e = -t || 0) : p[0] = e.e = 0, e;
                        if (0 == i ? (p.length = m, d = 1, m--) : (p.length = m + 1, d = y[_ - i], p[m] = s > 0 ? u(l / y[a - s] % y[s]) * d : 0), r)
                            for (;;) {
                                if (0 == m) {
                                    for (i = 1, s = p[0]; s >= 10; s /= 10, i++);
                                    for (s = p[0] += d, d = 1; s >= 10; s /= 10, d++);
                                    i != d && (e.e++, p[0] == c && (p[0] = 1));
                                    break
                                }
                                if (p[m] += d, p[m] != c) break;
                                p[m--] = 0, d = 1
                            }
                        for (i = p.length; 0 === p[--i]; p.pop());
                    }
                    e.e > C ? e.c = e.e = null : e.e < P && (e.c = [e.e = 0])
                }
                return e
            }

            function B(e) {
                var t, n = e.e;
                return null === n ? e.toString() : (t = v(e.c), t = n <= H || n >= E ? Y(t, n) : b(t, n, "0"), e.s < 0 ? "-" + t : t)
            }
            return R.clone = e, R.ROUND_UP = 0, R.ROUND_DOWN = 1, R.ROUND_CEIL = 2, R.ROUND_FLOOR = 3, R.ROUND_HALF_UP = 4, R.ROUND_HALF_DOWN = 5, R.ROUND_HALF_EVEN = 6, R.ROUND_HALF_CEIL = 7, R.ROUND_HALF_FLOOR = 8, R.EUCLID = 9, R.config = R.set = function(e) {
                var t, n;
                if (null != e) {
                    if ("object" != typeof e) throw Error(d + "Object expected: " + e);
                    if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (M(n = e[t], 0, p, t), A = n), e.hasOwnProperty(t = "ROUNDING_MODE") && (M(n = e[t], 0, 8, t), O = n), e.hasOwnProperty(t = "EXPONENTIAL_AT") && ((n = e[t]) && n.pop ? (M(n[0], -p, 0, t), M(n[1], 0, p, t), H = n[0], E = n[1]) : (M(n, -p, p, t), H = -(E = n < 0 ? -n : n))), e.hasOwnProperty(t = "RANGE"))
                        if ((n = e[t]) && n.pop) M(n[0], -p, -1, t), M(n[1], 1, p, t), P = n[0], C = n[1];
                        else {
                            if (M(n, -p, p, t), !n) throw Error(d + t + " cannot be zero: " + n);
                            P = -(C = n < 0 ? -n : n)
                        }
                    if (e.hasOwnProperty(t = "CRYPTO")) {
                        if ((n = e[t]) !== !!n) throw Error(d + t + " not true or false: " + n);
                        if (n) {
                            if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw $ = !n, Error(d + "crypto unavailable");
                            $ = n
                        } else $ = n
                    }
                    if (e.hasOwnProperty(t = "MODULO_MODE") && (M(n = e[t], 0, 9, t), F = n), e.hasOwnProperty(t = "POW_PRECISION") && (M(n = e[t], 0, p, t), W = n), e.hasOwnProperty(t = "FORMAT")) {
                        if ("object" != typeof(n = e[t])) throw Error(d + t + " not an object: " + n);
                        N = n
                    }
                    if (e.hasOwnProperty(t = "ALPHABET")) {
                        if ("string" != typeof(n = e[t]) || /^.$|[+-.\s]|(.).*\1/.test(n)) throw Error(d + t + " invalid: " + n);
                        z = n
                    }
                }
                return {
                    DECIMAL_PLACES: A,
                    ROUNDING_MODE: O,
                    EXPONENTIAL_AT: [H, E],
                    RANGE: [P, C],
                    CRYPTO: $,
                    MODULO_MODE: F,
                    POW_PRECISION: W,
                    FORMAT: N,
                    ALPHABET: z
                }
            }, R.isBigNumber = function(e) {
                if (!e || !0 !== e._isBigNumber) return !1;
                if (!R.DEBUG) return !0;
                var t, n, r = e.c,
                    a = e.e,
                    i = e.s;
                e: if ("[object Array]" == {}.toString.call(r)) {
                    if ((1 === i || -1 === i) && a >= -p && a <= p && a === u(a)) {
                        if (0 === r[0]) {
                            if (0 === a && 1 === r.length) return !0;
                            break e
                        }
                        if ((t = (a + 1) % _) < 1 && (t += _), String(r[0]).length == t) {
                            for (t = 0; t < r.length; t++)
                                if ((n = r[t]) < 0 || n >= c || n !== u(n)) break e;
                            if (0 !== n) return !0
                        }
                    }
                } else
                if (null === r && null === a && (null === i || 1 === i || -1 === i)) return !0;
                throw Error(d + "Invalid BigNumber: " + e)
            }, R.maximum = R.max = function() {
                return U(arguments, x.lt)
            }, R.minimum = R.min = function() {
                return U(arguments, x.gt)
            }, R.random = (i = 9007199254740992 * Math.random() & 2097151 ? function() {
                return u(9007199254740992 * Math.random())
            } : function() {
                return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
            }, function(e) {
                var t, n, r, a, s, l = 0,
                    c = [],
                    m = new R(j);
                if (null == e ? e = A : M(e, 0, p), a = o(e / _), $)
                    if (crypto.getRandomValues) {
                        for (t = crypto.getRandomValues(new Uint32Array(a *= 2)); l < a;)(s = 131072 * t[l] + (t[l + 1] >>> 11)) >= 9e15 ? (n = crypto.getRandomValues(new Uint32Array(2)), t[l] = n[0], t[l + 1] = n[1]) : (c.push(s % 1e14), l += 2);
                        l = a / 2
                    } else {
                        if (!crypto.randomBytes) throw $ = !1, Error(d + "crypto unavailable");
                        for (t = crypto.randomBytes(a *= 7); l < a;)(s = 281474976710656 * (31 & t[l]) + 1099511627776 * t[l + 1] + 4294967296 * t[l + 2] + 16777216 * t[l + 3] + (t[l + 4] << 16) + (t[l + 5] << 8) + t[l + 6]) >= 9e15 ? crypto.randomBytes(7).copy(t, l) : (c.push(s % 1e14), l += 7);
                        l = a / 7
                    }
                if (!$)
                    for (; l < a;)(s = i()) < 9e15 && (c[l++] = s % 1e14);
                for (a = c[--l], e %= _, a && e && (s = f[_ - e], c[l] = u(a / s) * s); 0 === c[l]; c.pop(), l--);
                if (l < 0) c = [r = 0];
                else {
                    for (r = -1; 0 === c[0]; c.splice(0, 1), r -= _);
                    for (l = 1, s = c[0]; s >= 10; s /= 10, l++);
                    l < _ && (r -= _ - l)
                }
                return m.e = r, m.c = c, m
            }), R.sum = function() {
                for (var e = 1, t = arguments, n = new R(t[0]); e < t.length;) n = n.plus(t[e++]);
                return n
            }, r = function() {
                function e(e, t, n, r) {
                    for (var a, i, s = [0], o = 0, u = e.length; o < u;) {
                        for (i = s.length; i--; s[i] *= t);
                        for (s[0] += r.indexOf(e.charAt(o++)), a = 0; a < s.length; a++) s[a] > n - 1 && (null == s[a + 1] && (s[a + 1] = 0), s[a + 1] += s[a] / n | 0, s[a] %= n)
                    }
                    return s.reverse()
                }
                return function(t, r, a, i, s) {
                    var o, u, d, l, c, _, m, f, h = t.indexOf("."),
                        p = A,
                        y = O;
                    for (h >= 0 && (l = W, W = 0, t = t.replace(".", ""), _ = (f = new R(r)).pow(t.length - h), W = l, f.c = e(b(v(_.c), _.e, "0"), 10, a, "0123456789"), f.e = f.c.length), d = l = (m = e(t, r, a, s ? (o = z, "0123456789") : (o = "0123456789", z))).length; 0 == m[--l]; m.pop());
                    if (!m[0]) return o.charAt(0);
                    if (h < 0 ? --d : (_.c = m, _.e = d, _.s = i, m = (_ = n(_, f, p, y, a)).c, c = _.r, d = _.e), h = m[u = d + p + 1], l = a / 2, c = c || u < 0 || null != m[u + 1], c = y < 4 ? (null != h || c) && (0 == y || y == (_.s < 0 ? 3 : 2)) : h > l || h == l && (4 == y || c || 6 == y && 1 & m[u - 1] || y == (_.s < 0 ? 8 : 7)), u < 1 || !m[0]) t = c ? b(o.charAt(1), -p, o.charAt(0)) : o.charAt(0);
                    else {
                        if (m.length = u, c)
                            for (--a; ++m[--u] > a;) m[u] = 0, u || (++d, m = [1].concat(m));
                        for (l = m.length; !m[--l];);
                        for (h = 0, t = ""; h <= l; t += o.charAt(m[h++]));
                        t = b(t, d, o.charAt(0))
                    }
                    return t
                }
            }(), n = function() {
                function e(e, t, n) {
                    var r, a, i, s, o = 0,
                        u = e.length,
                        d = t % h,
                        l = t / h | 0;
                    for (e = e.slice(); u--;) o = ((a = d * (i = e[u] % h) + (r = l * i + (s = e[u] / h | 0) * d) % h * h + o) / n | 0) + (r / h | 0) + l * s, e[u] = a % n;
                    return o && (e = [o].concat(e)), e
                }

                function t(e, t, n, r) {
                    var a, i;
                    if (n != r) i = n > r ? 1 : -1;
                    else
                        for (a = i = 0; a < n; a++)
                            if (e[a] != t[a]) {
                                i = e[a] > t[a] ? 1 : -1;
                                break
                            } return i
                }

                function n(e, t, n, r) {
                    for (var a = 0; n--;) e[n] -= a, a = e[n] < t[n] ? 1 : 0, e[n] = a * r + e[n] - t[n];
                    for (; !e[0] && e.length > 1; e.splice(0, 1));
                }
                return function(r, a, i, s, o) {
                    var d, l, m, f, h, p, v, g, M, L, Y, b, w, k, D, T, S, x = r.s == a.s ? 1 : -1,
                        j = r.c,
                        A = a.c;
                    if (!(j && j[0] && A && A[0])) return new R(r.s && a.s && (j ? !A || j[0] != A[0] : A) ? j && 0 == j[0] || !A ? 0 * x : x / 0 : NaN);
                    for (M = (g = new R(x)).c = [], x = i + (l = r.e - a.e) + 1, o || (o = c, l = y(r.e / _) - y(a.e / _), x = x / _ | 0), m = 0; A[m] == (j[m] || 0); m++);
                    if (A[m] > (j[m] || 0) && l--, x < 0) M.push(1), f = !0;
                    else {
                        for (k = j.length, T = A.length, m = 0, x += 2, (h = u(o / (A[0] + 1))) > 1 && (A = e(A, h, o), j = e(j, h, o), T = A.length, k = j.length), w = T, Y = (L = j.slice(0, T)).length; Y < T; L[Y++] = 0);
                        S = A.slice(), S = [0].concat(S), D = A[0], A[1] >= o / 2 && D++;
                        do {
                            if (h = 0, (d = t(A, L, T, Y)) < 0) {
                                if (b = L[0], T != Y && (b = b * o + (L[1] || 0)), (h = u(b / D)) > 1)
                                    for (h >= o && (h = o - 1), v = (p = e(A, h, o)).length, Y = L.length; 1 == t(p, L, v, Y);) h--, n(p, T < v ? S : A, v, o), v = p.length, d = 1;
                                else 0 == h && (d = h = 1), v = (p = A.slice()).length;
                                if (v < Y && (p = [0].concat(p)), n(L, p, Y, o), Y = L.length, -1 == d)
                                    for (; t(A, L, T, Y) < 1;) h++, n(L, T < Y ? S : A, Y, o), Y = L.length
                            } else 0 === d && (h++, L = [0]);
                            M[m++] = h, L[0] ? L[Y++] = j[w] || 0 : (L = [j[w]], Y = 1)
                        } while ((w++ < k || null != L[0]) && x--);
                        f = null != L[0], M[0] || M.splice(0, 1)
                    }
                    if (o == c) {
                        for (m = 1, x = M[0]; x >= 10; x /= 10, m++);
                        J(g, i + (g.e = m + l * _ - 1) + 1, s, f)
                    } else g.e = l, g.r = +f;
                    return g
                }
            }(), w = /^(-?)0([xbo])(?=\w[\w.]*$)/i, k = /^([^.]+)\.$/, D = /^\.([^.]+)$/, T = /^-?(Infinity|NaN)$/, S = /^\s*\+(?=[\w.])|^\s+|\s+$/g, a = function(e, t, n, r) {
                var a, i = n ? t : t.replace(S, "");
                if (T.test(i)) e.s = isNaN(i) ? null : i < 0 ? -1 : 1;
                else {
                    if (!n && (i = i.replace(w, function(e, t, n) {
                            return a = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8, r && r != a ? e : t
                        }), r && (a = r, i = i.replace(k, "$1").replace(D, "0.$1")), t != i)) return new R(i, a);
                    if (R.DEBUG) throw Error(d + "Not a" + (r ? " base " + r : "") + " number: " + t);
                    e.s = null
                }
                e.c = e.e = null
            }, x.absoluteValue = x.abs = function() {
                var e = new R(this);
                return e.s < 0 && (e.s = 1), e
            }, x.comparedTo = function(e, t) {
                return g(this, new R(e, t))
            }, x.decimalPlaces = x.dp = function(e, t) {
                var n, r, a, i = this;
                if (null != e) return M(e, 0, p), null == t ? t = O : M(t, 0, 8), J(new R(i), e + i.e + 1, t);
                if (!(n = i.c)) return null;
                if (r = ((a = n.length - 1) - y(this.e / _)) * _, a = n[a])
                    for (; a % 10 == 0; a /= 10, r--);
                return r < 0 && (r = 0), r
            }, x.dividedBy = x.div = function(e, t) {
                return n(this, new R(e, t), A, O)
            }, x.dividedToIntegerBy = x.idiv = function(e, t) {
                return n(this, new R(e, t), 0, 1)
            }, x.exponentiatedBy = x.pow = function(e, t) {
                var n, r, a, i, s, l, c, m, f = this;
                if ((e = new R(e)).c && !e.isInteger()) throw Error(d + "Exponent not an integer: " + B(e));
                if (null != t && (t = new R(t)), s = e.e > 14, !f.c || !f.c[0] || 1 == f.c[0] && !f.e && 1 == f.c.length || !e.c || !e.c[0]) return m = new R(Math.pow(+B(f), s ? 2 - L(e) : +B(e))), t ? m.mod(t) : m;
                if (l = e.s < 0, t) {
                    if (t.c ? !t.c[0] : !t.s) return new R(NaN);
                    (r = !l && f.isInteger() && t.isInteger()) && (f = f.mod(t))
                } else {
                    if (e.e > 9 && (f.e > 0 || f.e < -1 || (0 == f.e ? f.c[0] > 1 || s && f.c[1] >= 24e7 : f.c[0] < 8e13 || s && f.c[0] <= 9999975e7))) return i = f.s < 0 && L(e) ? -0 : 0, f.e > -1 && (i = 1 / i), new R(l ? 1 / i : i);
                    W && (i = o(W / _ + 2))
                }
                for (s ? (n = new R(.5), l && (e.s = 1), c = L(e)) : c = (a = Math.abs(+B(e))) % 2, m = new R(j);;) {
                    if (c) {
                        if (!(m = m.times(f)).c) break;
                        i ? m.c.length > i && (m.c.length = i) : r && (m = m.mod(t))
                    }
                    if (a) {
                        if (0 === (a = u(a / 2))) break;
                        c = a % 2
                    } else if (J(e = e.times(n), e.e + 1, 1), e.e > 14) c = L(e);
                    else {
                        if (0 == (a = +B(e))) break;
                        c = a % 2
                    }
                    f = f.times(f), i ? f.c && f.c.length > i && (f.c.length = i) : r && (f = f.mod(t))
                }
                return r ? m : (l && (m = j.div(m)), t ? m.mod(t) : i ? J(m, W, O, void 0) : m)
            }, x.integerValue = function(e) {
                var t = new R(this);
                return null == e ? e = O : M(e, 0, 8), J(t, t.e + 1, e)
            }, x.isEqualTo = x.eq = function(e, t) {
                return 0 === g(this, new R(e, t))
            }, x.isFinite = function() {
                return !!this.c
            }, x.isGreaterThan = x.gt = function(e, t) {
                return g(this, new R(e, t)) > 0
            }, x.isGreaterThanOrEqualTo = x.gte = function(e, t) {
                return 1 === (t = g(this, new R(e, t))) || 0 === t
            }, x.isInteger = function() {
                return !!this.c && y(this.e / _) > this.c.length - 2
            }, x.isLessThan = x.lt = function(e, t) {
                return g(this, new R(e, t)) < 0
            }, x.isLessThanOrEqualTo = x.lte = function(e, t) {
                return -1 === (t = g(this, new R(e, t))) || 0 === t
            }, x.isNaN = function() {
                return !this.s
            }, x.isNegative = function() {
                return this.s < 0
            }, x.isPositive = function() {
                return this.s > 0
            }, x.isZero = function() {
                return !!this.c && 0 == this.c[0]
            }, x.minus = function(e, t) {
                var n, r, a, i, s = this,
                    o = s.s;
                if (t = (e = new R(e, t)).s, !o || !t) return new R(NaN);
                if (o != t) return e.s = -t, s.plus(e);
                var u = s.e / _,
                    d = e.e / _,
                    l = s.c,
                    m = e.c;
                if (!u || !d) {
                    if (!l || !m) return l ? (e.s = -t, e) : new R(m ? s : NaN);
                    if (!l[0] || !m[0]) return m[0] ? (e.s = -t, e) : new R(l[0] ? s : 3 == O ? -0 : 0)
                }
                if (u = y(u), d = y(d), l = l.slice(), o = u - d) {
                    for ((i = o < 0) ? (o = -o, a = l) : (d = u, a = m), a.reverse(), t = o; t--; a.push(0));
                    a.reverse()
                } else
                    for (r = (i = (o = l.length) < (t = m.length)) ? o : t, o = t = 0; t < r; t++)
                        if (l[t] != m[t]) {
                            i = l[t] < m[t];
                            break
                        } if (i && (a = l, l = m, m = a, e.s = -e.s), (t = (r = m.length) - (n = l.length)) > 0)
                    for (; t--; l[n++] = 0);
                for (t = c - 1; r > o;) {
                    if (l[--r] < m[r]) {
                        for (n = r; n && !l[--n]; l[n] = t);
                        --l[n], l[r] += c
                    }
                    l[r] -= m[r]
                }
                for (; 0 == l[0]; l.splice(0, 1), --d);
                return l[0] ? q(e, l, d) : (e.s = 3 == O ? -1 : 1, e.c = [e.e = 0], e)
            }, x.modulo = x.mod = function(e, t) {
                var r, a, i = this;
                return e = new R(e, t), !i.c || !e.s || e.c && !e.c[0] ? new R(NaN) : !e.c || i.c && !i.c[0] ? new R(i) : (9 == F ? (a = e.s, e.s = 1, r = n(i, e, 0, 3), e.s = a, r.s *= a) : r = n(i, e, 0, F), (e = i.minus(r.times(e))).c[0] || 1 != F || (e.s = i.s), e)
            }, x.multipliedBy = x.times = function(e, t) {
                var n, r, a, i, s, o, u, d, l, m, f, p, v, g, M, L = this,
                    Y = L.c,
                    b = (e = new R(e, t)).c;
                if (!(Y && b && Y[0] && b[0])) return !L.s || !e.s || Y && !Y[0] && !b || b && !b[0] && !Y ? e.c = e.e = e.s = null : (e.s *= L.s, Y && b ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                for (r = y(L.e / _) + y(e.e / _), e.s *= L.s, (u = Y.length) < (m = b.length) && (v = Y, Y = b, b = v, a = u, u = m, m = a), a = u + m, v = []; a--; v.push(0));
                for (g = c, M = h, a = m; --a >= 0;) {
                    for (n = 0, f = b[a] % M, p = b[a] / M | 0, i = a + (s = u); i > a;) n = ((d = f * (d = Y[--s] % M) + (o = p * d + (l = Y[s] / M | 0) * f) % M * M + v[i] + n) / g | 0) + (o / M | 0) + p * l, v[i--] = d % g;
                    v[i] = n
                }
                return n ? ++r : v.splice(0, 1), q(e, v, r)
            }, x.negated = function() {
                var e = new R(this);
                return e.s = -e.s || null, e
            }, x.plus = function(e, t) {
                var n, r = this,
                    a = r.s;
                if (t = (e = new R(e, t)).s, !a || !t) return new R(NaN);
                if (a != t) return e.s = -t, r.minus(e);
                var i = r.e / _,
                    s = e.e / _,
                    o = r.c,
                    u = e.c;
                if (!i || !s) {
                    if (!o || !u) return new R(a / 0);
                    if (!o[0] || !u[0]) return u[0] ? e : new R(o[0] ? r : 0 * a)
                }
                if (i = y(i), s = y(s), o = o.slice(), a = i - s) {
                    for (a > 0 ? (s = i, n = u) : (a = -a, n = o), n.reverse(); a--; n.push(0));
                    n.reverse()
                }
                for ((a = o.length) - (t = u.length) < 0 && (n = u, u = o, o = n, t = a), a = 0; t;) a = (o[--t] = o[t] + u[t] + a) / c | 0, o[t] = c === o[t] ? 0 : o[t] % c;
                return a && (o = [a].concat(o), ++s), q(e, o, s)
            }, x.precision = x.sd = function(e, t) {
                var n, r, a, i = this;
                if (null != e && e !== !!e) return M(e, 1, p), null == t ? t = O : M(t, 0, 8), J(new R(i), e, t);
                if (!(n = i.c)) return null;
                if (r = (a = n.length - 1) * _ + 1, a = n[a]) {
                    for (; a % 10 == 0; a /= 10, r--);
                    for (a = n[0]; a >= 10; a /= 10, r++);
                }
                return e && i.e + 1 > r && (r = i.e + 1), r
            }, x.shiftedBy = function(e) {
                return M(e, -m, m), this.times("1e" + e)
            }, x.squareRoot = x.sqrt = function() {
                var e, t, r, a, i, s = this,
                    o = s.c,
                    u = s.s,
                    d = s.e,
                    l = A + 4,
                    c = new R("0.5");
                if (1 !== u || !o || !o[0]) return new R(!u || u < 0 && (!o || o[0]) ? NaN : o ? s : 1 / 0);
                if (0 == (u = Math.sqrt(+B(s))) || u == 1 / 0 ? (((t = v(o)).length + d) % 2 == 0 && (t += "0"), u = Math.sqrt(+t), d = y((d + 1) / 2) - (d < 0 || d % 2), r = new R(t = u == 1 / 0 ? "1e" + d : (t = u.toExponential()).slice(0, t.indexOf("e") + 1) + d)) : r = new R(u + ""), r.c[0])
                    for ((u = (d = r.e) + l) < 3 && (u = 0);;)
                        if (i = r, r = c.times(i.plus(n(s, i, l, 1))), v(i.c).slice(0, u) === (t = v(r.c)).slice(0, u)) {
                            if (r.e < d && --u, "9999" != (t = t.slice(u - 3, u + 1)) && (a || "4999" != t)) {
                                +t && (+t.slice(1) || "5" != t.charAt(0)) || (J(r, r.e + A + 2, 1), e = !r.times(r).eq(s));
                                break
                            }
                            if (!a && (J(i, i.e + A + 2, 0), i.times(i).eq(s))) {
                                r = i;
                                break
                            }
                            l += 4, u += 4, a = 1
                        }
                return J(r, r.e + A + 1, O, e)
            }, x.toExponential = function(e, t) {
                return null != e && (M(e, 0, p), e++), I(this, e, t, 1)
            }, x.toFixed = function(e, t) {
                return null != e && (M(e, 0, p), e = e + this.e + 1), I(this, e, t)
            }, x.toFormat = function(e, t, n) {
                var r, a = this;
                if (null == n) null != e && t && "object" == typeof t ? (n = t, t = null) : e && "object" == typeof e ? (n = e, e = t = null) : n = N;
                else if ("object" != typeof n) throw Error(d + "Argument not an object: " + n);
                if (r = a.toFixed(e, t), a.c) {
                    var i, s = r.split("."),
                        o = +n.groupSize,
                        u = +n.secondaryGroupSize,
                        l = n.groupSeparator || "",
                        c = s[0],
                        _ = s[1],
                        m = a.s < 0,
                        f = m ? c.slice(1) : c,
                        h = f.length;
                    if (u && (i = o, o = u, u = i, h -= i), o > 0 && h > 0) {
                        for (i = h % o || o, c = f.substr(0, i); i < h; i += o) c += l + f.substr(i, o);
                        u > 0 && (c += l + f.slice(i)), m && (c = "-" + c)
                    }
                    r = _ ? c + (n.decimalSeparator || "") + ((u = +n.fractionGroupSize) ? _.replace(new RegExp("\\d{" + u + "}\\B", "g"), "$&" + (n.fractionGroupSeparator || "")) : _) : c
                }
                return (n.prefix || "") + r + (n.suffix || "")
            }, x.toFraction = function(e) {
                var t, r, a, i, s, o, u, l, c, m, h, p, y = this,
                    g = y.c;
                if (null != e && (!(u = new R(e)).isInteger() && (u.c || 1 !== u.s) || u.lt(j))) throw Error(d + "Argument " + (u.isInteger() ? "out of range: " : "not an integer: ") + B(u));
                if (!g) return new R(y);
                for (t = new R(j), c = r = new R(j), a = l = new R(j), p = v(g), s = t.e = p.length - y.e - 1, t.c[0] = f[(o = s % _) < 0 ? _ + o : o], e = !e || u.comparedTo(t) > 0 ? s > 0 ? t : c : u, o = C, C = 1 / 0, u = new R(p), l.c[0] = 0; m = n(u, t, 0, 1), 1 != (i = r.plus(m.times(a))).comparedTo(e);) r = a, a = i, c = l.plus(m.times(i = c)), l = i, t = u.minus(m.times(i = t)), u = i;
                return i = n(e.minus(r), a, 0, 1), l = l.plus(i.times(c)), r = r.plus(i.times(a)), l.s = c.s = y.s, h = n(c, a, s *= 2, O).minus(y).abs().comparedTo(n(l, r, s, O).minus(y).abs()) < 1 ? [c, a] : [l, r], C = o, h
            }, x.toNumber = function() {
                return +B(this)
            }, x.toPrecision = function(e, t) {
                return null != e && M(e, 1, p), I(this, e, t, 2)
            }, x.toString = function(e) {
                var t, n = this,
                    a = n.s,
                    i = n.e;
                return null === i ? a ? (t = "Infinity", a < 0 && (t = "-" + t)) : t = "NaN" : (null == e ? t = i <= H || i >= E ? Y(v(n.c), i) : b(v(n.c), i, "0") : 10 === e ? t = b(v((n = J(new R(n), A + i + 1, O)).c), n.e, "0") : (M(e, 2, z.length, "Base"), t = r(b(v(n.c), i, "0"), 10, e, a, !0)), a < 0 && n.c[0] && (t = "-" + t)), t
            }, x.valueOf = x.toJSON = function() {
                return B(this)
            }, x._isBigNumber = !0, null != t && R.set(t), R
        }()).default = i.BigNumber = i, void 0 === (r = function() {
            return i
        }.call(t, n, t, e)) || (e.exports = r)
    }()
}, function(e, t, n) {
    var r, a, i;
    /*!
    	autosize 4.0.2
    	license: MIT
    	http://www.jacklmoore.com/autosize
    */
    a = [e, t], void 0 === (i = "function" == typeof(r = function(e, t) {
        "use strict";
        var n, r, a = "function" == typeof Map ? new Map : (n = [], r = [], {
                has: function(e) {
                    return n.indexOf(e) > -1
                },
                get: function(e) {
                    return r[n.indexOf(e)]
                },
                set: function(e, t) {
                    -1 === n.indexOf(e) && (n.push(e), r.push(t))
                },
                delete: function(e) {
                    var t = n.indexOf(e);
                    t > -1 && (n.splice(t, 1), r.splice(t, 1))
                }
            }),
            i = function(e) {
                return new Event(e, {
                    bubbles: !0
                })
            };
        try {
            new Event("test")
        } catch (e) {
            i = function(e) {
                var t = document.createEvent("Event");
                return t.initEvent(e, !0, !1), t
            }
        }

        function s(e) {
            if (e && e.nodeName && "TEXTAREA" === e.nodeName && !a.has(e)) {
                var t = null,
                    n = null,
                    r = null,
                    s = function() {
                        e.clientWidth !== n && c()
                    },
                    o = function(t) {
                        window.removeEventListener("resize", s, !1), e.removeEventListener("input", c, !1), e.removeEventListener("keyup", c, !1), e.removeEventListener("autosize:destroy", o, !1), e.removeEventListener("autosize:update", c, !1), Object.keys(t).forEach(function(n) {
                            e.style[n] = t[n]
                        }), a.delete(e)
                    }.bind(e, {
                        height: e.style.height,
                        resize: e.style.resize,
                        overflowY: e.style.overflowY,
                        overflowX: e.style.overflowX,
                        wordWrap: e.style.wordWrap
                    });
                e.addEventListener("autosize:destroy", o, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", c, !1), window.addEventListener("resize", s, !1), e.addEventListener("input", c, !1), e.addEventListener("autosize:update", c, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", a.set(e, {
                    destroy: o,
                    update: c
                }), "vertical" === (u = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === u.resize && (e.style.resize = "horizontal"), t = "content-box" === u.boxSizing ? -(parseFloat(u.paddingTop) + parseFloat(u.paddingBottom)) : parseFloat(u.borderTopWidth) + parseFloat(u.borderBottomWidth), isNaN(t) && (t = 0), c()
            }
            var u;

            function d(t) {
                var n = e.style.width;
                e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t
            }

            function l() {
                if (0 !== e.scrollHeight) {
                    var r = function(e) {
                            for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
                                node: e.parentNode,
                                scrollTop: e.parentNode.scrollTop
                            }), e = e.parentNode;
                            return t
                        }(e),
                        a = document.documentElement && document.documentElement.scrollTop;
                    e.style.height = "", e.style.height = e.scrollHeight + t + "px", n = e.clientWidth, r.forEach(function(e) {
                        e.node.scrollTop = e.scrollTop
                    }), a && (document.documentElement.scrollTop = a)
                }
            }

            function c() {
                l();
                var t = Math.round(parseFloat(e.style.height)),
                    n = window.getComputedStyle(e, null),
                    a = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
                if (a < t ? "hidden" === n.overflowY && (d("scroll"), l(), a = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (d("hidden"), l(), a = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), r !== a) {
                    r = a;
                    var s = i("autosize:resized");
                    try {
                        e.dispatchEvent(s)
                    } catch (e) {}
                }
            }
        }

        function o(e) {
            var t = a.get(e);
            t && t.destroy()
        }

        function u(e) {
            var t = a.get(e);
            t && t.update()
        }
        var d = null;
        "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((d = function(e) {
            return e
        }).destroy = function(e) {
            return e
        }, d.update = function(e) {
            return e
        }) : ((d = function(e, t) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], function(e) {
                return s(e)
            }), e
        }).destroy = function(e) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], o), e
        }, d.update = function(e) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], u), e
        }), t.default = d, e.exports = t.default
    }) ? r.apply(t, a) : r) || (e.exports = i)
}, function(e, t, n) {
    "use strict";
    var r = function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", [t("router-view")], 1)
        },
        a = [];
    n.d(t, "a", function() {
        return r
    }), n.d(t, "b", function() {
        return a
    })
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.pushParams = o, t.popParams = u, t.withParams = function(e, t) {
        if ("object" === a(e) && void 0 !== t) return n = e, r = t, l(function(e) {
            return function() {
                e(n);
                for (var t = arguments.length, a = new Array(t), i = 0; i < t; i++) a[i] = arguments[i];
                return r.apply(this, a)
            }
        });
        var n, r;
        return l(e)
    }, t._setTarget = t.target = void 0;
    var i = [],
        s = null;
    t.target = s;

    function o() {
        null !== s && i.push(s), t.target = s = {}
    }

    function u() {
        var e = s,
            n = t.target = s = i.pop() || null;
        return n && (Array.isArray(n.$sub) || (n.$sub = []), n.$sub.push(e)), e
    }

    function d(e) {
        if ("object" !== a(e) || Array.isArray(e)) throw new Error("params must be an object");
        t.target = s = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    a = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), a.forEach(function(t) {
                    r(e, t, n[t])
                })
            }
            return e
        }({}, s, e)
    }

    function l(e) {
        var t = e(d);
        return function() {
            o();
            try {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return t.apply(this, n)
            } finally {
                u()
            }
        }
    }
    t._setTarget = function(e) {
        t.target = s = e
    }
}, function(e, t, n) {
    e.exports = n.p + "/images/color-platform.svg"
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function(e) {
                return /^nm$/i.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[Môre om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                ss: "%d sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            },
            n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            },
            r = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            },
            a = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            },
            i = function(e) {
                return function(t, n, i, s) {
                    var o = r(t),
                        u = a[e][r(t)];
                    return 2 === o && (u = u[n ? 0 : 1]), u.replace(/%d/i, t)
                }
            },
            s = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar", {
            months: s,
            monthsShort: s,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: i("s"),
                ss: i("s"),
                m: i("m"),
                mm: i("m"),
                h: i("h"),
                hh: i("h"),
                d: i("d"),
                dd: i("d"),
                M: i("M"),
                MM: i("M"),
                y: i("y"),
                yy: i("y")
            },
            preparse: function(e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ar-dz", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 0,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ar-kw", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 0,
                doy: 12
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                0: "0"
            },
            n = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            },
            r = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            },
            a = function(e) {
                return function(t, a, i, s) {
                    var o = n(t),
                        u = r[e][n(t)];
                    return 2 === o && (u = u[a ? 0 : 1]), u.replace(/%d/i, t)
                }
            },
            i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar-ly", {
            months: i,
            monthsShort: i,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: a("s"),
                ss: a("s"),
                m: a("m"),
                mm: a("m"),
                h: a("h"),
                hh: a("h"),
                d: a("d"),
                dd: a("d"),
                M: a("M"),
                MM: a("M"),
                y: a("y"),
                yy: a("y")
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ar-ma", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            },
            n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            };
        e.defineLocale("ar-sa", {
            months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            preparse: function(e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ar-tn", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı"
        };
        e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gələn həftə] dddd [saat] LT",
                lastDay: "[dünən] LT",
                lastWeek: "[keçən həftə] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s əvvəl",
                s: "birneçə saniyə",
                ss: "%d saniyə",
                m: "bir dəqiqə",
                mm: "%d dəqiqə",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gecə|səhər|gündüz|axşam/,
            isPM: function(e) {
                return /^(gündüz|axşam)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
            ordinal: function(e) {
                if (0 === e) return e + "-ıncı";
                var n = e % 10,
                    r = e % 100 - n,
                    a = e >= 100 ? 100 : null;
                return e + (t[n] || t[r] || t[a])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var r, a, i = {
                ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                dd: "дзень_дні_дзён",
                MM: "месяц_месяцы_месяцаў",
                yy: "год_гады_гадоў"
            };
            return "m" === n ? t ? "хвіліна" : "хвіліну" : "h" === n ? t ? "гадзіна" : "гадзіну" : e + " " + (r = +e, a = i[n].split("_"), r % 10 == 1 && r % 100 != 11 ? a[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? a[1] : a[2])
        }
        e.defineLocale("be", {
            months: {
                format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
            },
            monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
            weekdays: {
                format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
            },
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сёння ў] LT",
                nextDay: "[Заўтра ў] LT",
                lastDay: "[Учора ў] LT",
                nextWeek: function() {
                    return "[У] dddd [ў] LT"
                },
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[У мінулую] dddd [ў] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[У мінулы] dddd [ў] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "праз %s",
                past: "%s таму",
                s: "некалькі секунд",
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "дзень",
                dd: t,
                M: "месяц",
                MM: t,
                y: "год",
                yy: t
            },
            meridiemParse: /ночы|раніцы|дня|вечара/,
            isPM: function(e) {
                return /^(дня|вечара)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                    case "D":
                        return e + "-га";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("bg", {
            months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Днес в] LT",
                nextDay: "[Утре в] LT",
                nextWeek: "dddd [в] LT",
                lastDay: "[Вчера в] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[В изминалата] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[В изминалия] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "след %s",
                past: "преди %s",
                s: "няколко секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дни",
                M: "месец",
                MM: "%d месеца",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("bm", {
            months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
            monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
            weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
            weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
            weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "MMMM [tile] D [san] YYYY",
                LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
                LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
            },
            calendar: {
                sameDay: "[Bi lɛrɛ] LT",
                nextDay: "[Sini lɛrɛ] LT",
                nextWeek: "dddd [don lɛrɛ] LT",
                lastDay: "[Kunu lɛrɛ] LT",
                lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s kɔnɔ",
                past: "a bɛ %s bɔ",
                s: "sanga dama dama",
                ss: "sekondi %d",
                m: "miniti kelen",
                mm: "miniti %d",
                h: "lɛrɛ kelen",
                hh: "lɛrɛ %d",
                d: "tile kelen",
                dd: "tile %d",
                M: "kalo kelen",
                MM: "kalo %d",
                y: "san kelen",
                yy: "san %d"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "১",
                2: "২",
                3: "৩",
                4: "৪",
                5: "৫",
                6: "৬",
                7: "৭",
                8: "৮",
                9: "৯",
                0: "০"
            },
            n = {
                "১": "1",
                "২": "2",
                "৩": "3",
                "৪": "4",
                "৫": "5",
                "৬": "6",
                "৭": "7",
                "৮": "8",
                "৯": "9",
                "০": "0"
            };
        e.defineLocale("bn", {
            months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
            weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
            weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
            longDateFormat: {
                LT: "A h:mm সময়",
                LTS: "A h:mm:ss সময়",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm সময়",
                LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
            },
            calendar: {
                sameDay: "[আজ] LT",
                nextDay: "[আগামীকাল] LT",
                nextWeek: "dddd, LT",
                lastDay: "[গতকাল] LT",
                lastWeek: "[গত] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s পরে",
                past: "%s আগে",
                s: "কয়েক সেকেন্ড",
                ss: "%d সেকেন্ড",
                m: "এক মিনিট",
                mm: "%d মিনিট",
                h: "এক ঘন্টা",
                hh: "%d ঘন্টা",
                d: "এক দিন",
                dd: "%d দিন",
                M: "এক মাস",
                MM: "%d মাস",
                y: "এক বছর",
                yy: "%d বছর"
            },
            preparse: function(e) {
                return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "༡",
                2: "༢",
                3: "༣",
                4: "༤",
                5: "༥",
                6: "༦",
                7: "༧",
                8: "༨",
                9: "༩",
                0: "༠"
            },
            n = {
                "༡": "1",
                "༢": "2",
                "༣": "3",
                "༤": "4",
                "༥": "5",
                "༦": "6",
                "༧": "7",
                "༨": "8",
                "༩": "9",
                "༠": "0"
            };
        e.defineLocale("bo", {
            months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
            weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[དི་རིང] LT",
                nextDay: "[སང་ཉིན] LT",
                nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                lastDay: "[ཁ་སང] LT",
                lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ལ་",
                past: "%s སྔན་ལ",
                s: "ལམ་སང",
                ss: "%d སྐར་ཆ།",
                m: "སྐར་མ་གཅིག",
                mm: "%d སྐར་མ",
                h: "ཆུ་ཚོད་གཅིག",
                hh: "%d ཆུ་ཚོད",
                d: "ཉིན་གཅིག",
                dd: "%d ཉིན་",
                M: "ཟླ་བ་གཅིག",
                MM: "%d ཟླ་བ",
                y: "ལོ་གཅིག",
                yy: "%d ལོ"
            },
            preparse: function(e) {
                return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            return e + " " + function(e, t) {
                return 2 === t ? function(e) {
                    var t = {
                        m: "v",
                        b: "v",
                        d: "z"
                    };
                    return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
                }(e) : e
            }({
                mm: "munutenn",
                MM: "miz",
                dd: "devezh"
            }[n], e)
        }
        e.defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h[e]mm A",
                LTS: "h[e]mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY h[e]mm A",
                LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondennoù",
                ss: "%d eilenn",
                m: "ur vunutenn",
                mm: t,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: t,
                M: "ur miz",
                MM: t,
                y: "ur bloaz",
                yy: function(e) {
                    switch (function e(t) {
                        return t > 9 ? e(t % 10) : t
                    }(e)) {
                        case 1:
                        case 3:
                        case 4:
                        case 5:
                        case 9:
                            return e + " bloaz";
                        default:
                            return e + " vloaz"
                    }
                }
            },
            dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function(e) {
                var t = 1 === e ? "añ" : "vet";
                return e + t
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var r = e + " ";
            switch (n) {
                case "ss":
                    return r += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return r += 1 === e ? "dan" : "dana";
                case "MM":
                    return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }
        e.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ca", {
            months: {
                standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a les] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextDay: function() {
                    return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastDay: function() {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "d'aquí %s",
                past: "fa %s",
                s: "uns segons",
                ss: "%d segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function(e, t) {
                var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                return "w" !== t && "W" !== t || (n = "a"), e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
            n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
            r = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i],
            a = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;

        function i(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10)
        }

        function s(e, t, n, r) {
            var a = e + " ";
            switch (n) {
                case "s":
                    return t || r ? "pár sekund" : "pár sekundami";
                case "ss":
                    return t || r ? a + (i(e) ? "sekundy" : "sekund") : a + "sekundami";
                case "m":
                    return t ? "minuta" : r ? "minutu" : "minutou";
                case "mm":
                    return t || r ? a + (i(e) ? "minuty" : "minut") : a + "minutami";
                case "h":
                    return t ? "hodina" : r ? "hodinu" : "hodinou";
                case "hh":
                    return t || r ? a + (i(e) ? "hodiny" : "hodin") : a + "hodinami";
                case "d":
                    return t || r ? "den" : "dnem";
                case "dd":
                    return t || r ? a + (i(e) ? "dny" : "dní") : a + "dny";
                case "M":
                    return t || r ? "měsíc" : "měsícem";
                case "MM":
                    return t || r ? a + (i(e) ? "měsíce" : "měsíců") : a + "měsíci";
                case "y":
                    return t || r ? "rok" : "rokem";
                case "yy":
                    return t || r ? a + (i(e) ? "roky" : "let") : a + "lety"
            }
        }
        e.defineLocale("cs", {
            months: t,
            monthsShort: n,
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
            monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[zítra v] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v neděli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve středu v] LT";
                        case 4:
                            return "[ve čtvrtek v] LT";
                        case 5:
                            return "[v pátek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                },
                lastDay: "[včera v] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulou neděli v] LT";
                        case 1:
                        case 2:
                            return "[minulé] dddd [v] LT";
                        case 3:
                            return "[minulou středu v] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "před %s",
                s: s,
                ss: s,
                m: s,
                mm: s,
                h: s,
                hh: s,
                d: s,
                dd: s,
                M: s,
                MM: s,
                y: s,
                yy: s
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("cv", {
            months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
            monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
            weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
            weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
            },
            calendar: {
                sameDay: "[Паян] LT [сехетре]",
                nextDay: "[Ыран] LT [сехетре]",
                lastDay: "[Ӗнер] LT [сехетре]",
                nextWeek: "[Ҫитес] dddd LT [сехетре]",
                lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    var t = /сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран";
                    return e + t
                },
                past: "%s каялла",
                s: "пӗр-ик ҫеккунт",
                ss: "%d ҫеккунт",
                m: "пӗр минут",
                mm: "%d минут",
                h: "пӗр сехет",
                hh: "%d сехет",
                d: "пӗр кун",
                dd: "%d кун",
                M: "пӗр уйӑх",
                MM: "%d уйӑх",
                y: "пӗр ҫул",
                yy: "%d ҫул"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
            ordinal: "%d-мӗш",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn ôl",
                s: "ychydig eiliadau",
                ss: "%d eiliad",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function(e) {
                var t = e,
                    n = "";
                return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][t]), e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "på dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[i] dddd[s kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                ss: "%d sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? a[n][0] : a[n][1]
        }
        e.defineLocale("de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? a[n][0] : a[n][1]
        }
        e.defineLocale("de-at", {
            months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? a[n][0] : a[n][1]
        }
        e.defineLocale("de-ch", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
            n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
        e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /މކ|މފ/,
            isPM: function(e) {
                return "މފ" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "މކ" : "މފ"
            },
            calendar: {
                sameDay: "[މިއަދު] LT",
                nextDay: "[މާދަމާ] LT",
                nextWeek: "dddd LT",
                lastDay: "[އިއްޔެ] LT",
                lastWeek: "[ފާއިތުވި] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ތެރޭގައި %s",
                past: "ކުރިން %s",
                s: "ސިކުންތުކޮޅެއް",
                ss: "d% ސިކުންތު",
                m: "މިނިޓެއް",
                mm: "މިނިޓު %d",
                h: "ގަޑިއިރެއް",
                hh: "ގަޑިއިރު %d",
                d: "ދުވަހެއް",
                dd: "ދުވަސް %d",
                M: "މަހެއް",
                MM: "މަސް %d",
                y: "އަހަރެއް",
                yy: "އަހަރު %d"
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 7,
                doy: 12
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("el", {
            monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
            months: function(e, t) {
                return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
            },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
            },
            isPM: function(e) {
                return "μ" === (e + "").toLowerCase()[0]
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 6:
                            return "[το προηγούμενο] dddd [{}] LT";
                        default:
                            return "[την προηγούμενη] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function(e, t) {
                var n, r = this._calendarEl[e],
                    a = t && t.hours();
                return ((n = r) instanceof Function || "[object Function]" === Object.prototype.toString.call(n)) && (r = r.apply(t)), r.replace("{}", a % 12 == 1 ? "στη" : "στις")
            },
            relativeTime: {
                future: "σε %s",
                past: "%s πριν",
                s: "λίγα δευτερόλεπτα",
                ss: "%d δευτερόλεπτα",
                m: "ένα λεπτό",
                mm: "%d λεπτά",
                h: "μία ώρα",
                hh: "%d ώρες",
                d: "μία μέρα",
                dd: "%d μέρες",
                M: "ένας μήνας",
                MM: "%d μήνες",
                y: "ένας χρόνος",
                yy: "%d χρόνια"
            },
            dayOfMonthOrdinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-SG", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-il", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
            weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
            weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
            weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D[-a de] MMMM, YYYY",
                LLL: "D[-a de] MMMM, YYYY HH:mm",
                LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function(e) {
                return "p" === e.charAt(0).toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[Hodiaŭ je] LT",
                nextDay: "[Morgaŭ je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[Hieraŭ je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "post %s",
                past: "antaŭ %s",
                s: "sekundoj",
                ss: "%d sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-us", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "MM/DD/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                ss: [e + "sekundi", e + "sekundit"],
                m: ["ühe minuti", "üks minut"],
                mm: [e + " minuti", e + " minutit"],
                h: ["ühe tunni", "tund aega", "üks tund"],
                hh: [e + " tunni", e + " tundi"],
                d: ["ühe päeva", "üks päev"],
                M: ["kuu aja", "kuu aega", "üks kuu"],
                MM: [e + " kuu", e + " kuud"],
                y: ["ühe aasta", "aasta", "üks aasta"],
                yy: [e + " aasta", e + " aastat"]
            };
            return t ? a[n][2] ? a[n][2] : a[n][1] : r ? a[n][0] : a[n][1]
        }
        e.defineLocale("et", {
            months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Täna,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[Järgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pärast",
                past: "%s tagasi",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: "%d päeva",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                ss: "%d segundo",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "۱",
                2: "۲",
                3: "۳",
                4: "۴",
                5: "۵",
                6: "۶",
                7: "۷",
                8: "۸",
                9: "۹",
                0: "۰"
            },
            n = {
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9",
                "۰": "0"
            };
        e.defineLocale("fa", {
            months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function(e) {
                return /بعد از ظهر/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
            },
            calendar: {
                sameDay: "[امروز ساعت] LT",
                nextDay: "[فردا ساعت] LT",
                nextWeek: "dddd [ساعت] LT",
                lastDay: "[دیروز ساعت] LT",
                lastWeek: "dddd [پیش] [ساعت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "در %s",
                past: "%s پیش",
                s: "چند ثانیه",
                ss: "ثانیه d%",
                m: "یک دقیقه",
                mm: "%d دقیقه",
                h: "یک ساعت",
                hh: "%d ساعت",
                d: "یک روز",
                dd: "%d روز",
                M: "یک ماه",
                MM: "%d ماه",
                y: "یک سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/[۰-۹]/g, function(e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            dayOfMonthOrdinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
            n = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9]];

        function r(e, r, a, i) {
            var s = "";
            switch (a) {
                case "s":
                    return i ? "muutaman sekunnin" : "muutama sekunti";
                case "ss":
                    return i ? "sekunnin" : "sekuntia";
                case "m":
                    return i ? "minuutin" : "minuutti";
                case "mm":
                    s = i ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return i ? "tunnin" : "tunti";
                case "hh":
                    s = i ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return i ? "päivän" : "päivä";
                case "dd":
                    s = i ? "päivän" : "päivää";
                    break;
                case "M":
                    return i ? "kuukauden" : "kuukausi";
                case "MM":
                    s = i ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return i ? "vuoden" : "vuosi";
                case "yy":
                    s = i ? "vuoden" : "vuotta"
            }
            return s = function(e, r) {
                return e < 10 ? r ? n[e] : t[e] : e
            }(e, i) + " " + s
        }
        e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: r,
                ss: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: r,
                dd: r,
                M: r,
                MM: r,
                y: r,
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("fo", {
            months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Í dag kl.] LT",
                nextDay: "[Í morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Í gjár kl.] LT",
                lastWeek: "[síðstu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s síðani",
                s: "fá sekund",
                ss: "%d sekundir",
                m: "ein minuttur",
                mm: "%d minuttir",
                h: "ein tími",
                hh: "%d tímar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mánaður",
                MM: "%d mánaðir",
                y: "eitt ár",
                yy: "%d ár"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "D":
                        return e + (1 === e ? "er" : "");
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                    default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                            case "W":
                            return e + (1 === e ? "re" : "e")
                }
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("fr-ch", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                    default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                            case "W":
                            return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
            n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function(e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[ôfrûne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                ss: "%d sekonden",
                m: "ien minút",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ga", {
            months: ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Méitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deaireadh Fómhair", "Samhain", "Nollaig"],
            monthsShort: ["Eaná", "Feab", "Márt", "Aibr", "Beal", "Méit", "Iúil", "Lúna", "Meán", "Deai", "Samh", "Noll"],
            monthsParseExact: !0,
            weekdays: ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Satharn"],
            weekdaysShort: ["Dom", "Lua", "Mái", "Céa", "Déa", "hAo", "Sat"],
            weekdaysMin: ["Do", "Lu", "Má", "Ce", "Dé", "hA", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Inniu ag] LT",
                nextDay: "[Amárach ag] LT",
                nextWeek: "dddd [ag] LT",
                lastDay: "[Inné aig] LT",
                lastWeek: "dddd [seo caite] [ag] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i %s",
                past: "%s ó shin",
                s: "cúpla soicind",
                ss: "%d soicind",
                m: "nóiméad",
                mm: "%d nóiméad",
                h: "uair an chloig",
                hh: "%d uair an chloig",
                d: "lá",
                dd: "%d lá",
                M: "mí",
                MM: "%d mí",
                y: "bliain",
                yy: "%d bliain"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function(e) {
                var t = 1 === e ? "d" : e % 10 == 2 ? "na" : "mh";
                return e + t
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("gd", {
            months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
            monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
            monthsParseExact: !0,
            weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
            weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-màireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-dè aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                ss: "%d diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "mìos",
                MM: "%d mìosan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function(e) {
                var t = 1 === e ? "d" : e % 10 == 2 ? "na" : "mh";
                return e + t
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("gl", {
            months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
            monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextDay: function() {
                    return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                lastDay: function() {
                    return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                },
                lastWeek: function() {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return 0 === e.indexOf("un") ? "n" + e : "en " + e
                },
                past: "hai %s",
                s: "uns segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                s: ["thodde secondanim", "thodde second"],
                ss: [e + " secondanim", e + " second"],
                m: ["eka mintan", "ek minute"],
                mm: [e + " mintanim", e + " mintam"],
                h: ["eka voran", "ek vor"],
                hh: [e + " voranim", e + " voram"],
                d: ["eka disan", "ek dis"],
                dd: [e + " disanim", e + " dis"],
                M: ["eka mhoinean", "ek mhoino"],
                MM: [e + " mhoineanim", e + " mhoine"],
                y: ["eka vorsan", "ek voros"],
                yy: [e + " vorsanim", e + " vorsam"]
            };
            return t ? a[n][0] : a[n][1]
        }
        e.defineLocale("gom-latn", {
            months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
            monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [vazta]",
                LTS: "A h:mm:ss [vazta]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [vazta]",
                LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
                llll: "ddd, D MMM YYYY, A h:mm [vazta]"
            },
            calendar: {
                sameDay: "[Aiz] LT",
                nextDay: "[Faleam] LT",
                nextWeek: "[Ieta to] dddd[,] LT",
                lastDay: "[Kal] LT",
                lastWeek: "[Fatlo] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s adim",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "D":
                        return e + "er";
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                    case "w":
                    case "W":
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            },
            meridiemParse: /rati|sokalli|donparam|sanje/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "૧",
                2: "૨",
                3: "૩",
                4: "૪",
                5: "૫",
                6: "૬",
                7: "૭",
                8: "૮",
                9: "૯",
                0: "૦"
            },
            n = {
                "૧": "1",
                "૨": "2",
                "૩": "3",
                "૪": "4",
                "૫": "5",
                "૬": "6",
                "૭": "7",
                "૮": "8",
                "૯": "9",
                "૦": "0"
            };
        e.defineLocale("gu", {
            months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
            monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
            monthsParseExact: !0,
            weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
            weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
            weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
            longDateFormat: {
                LT: "A h:mm વાગ્યે",
                LTS: "A h:mm:ss વાગ્યે",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm વાગ્યે",
                LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
            },
            calendar: {
                sameDay: "[આજ] LT",
                nextDay: "[કાલે] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ગઇકાલે] LT",
                lastWeek: "[પાછલા] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s મા",
                past: "%s પેહલા",
                s: "અમુક પળો",
                ss: "%d સેકંડ",
                m: "એક મિનિટ",
                mm: "%d મિનિટ",
                h: "એક કલાક",
                hh: "%d કલાક",
                d: "એક દિવસ",
                dd: "%d દિવસ",
                M: "એક મહિનો",
                MM: "%d મહિનો",
                y: "એક વર્ષ",
                yy: "%d વર્ષ"
            },
            preparse: function(e) {
                return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("he", {
            months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
            monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [ב]MMMM YYYY",
                LLL: "D [ב]MMMM YYYY HH:mm",
                LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[היום ב־]LT",
                nextDay: "[מחר ב־]LT",
                nextWeek: "dddd [בשעה] LT",
                lastDay: "[אתמול ב־]LT",
                lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "בעוד %s",
                past: "לפני %s",
                s: "מספר שניות",
                ss: "%d שניות",
                m: "דקה",
                mm: "%d דקות",
                h: "שעה",
                hh: function(e) {
                    return 2 === e ? "שעתיים" : e + " שעות"
                },
                d: "יום",
                dd: function(e) {
                    return 2 === e ? "יומיים" : e + " ימים"
                },
                M: "חודש",
                MM: function(e) {
                    return 2 === e ? "חודשיים" : e + " חודשים"
                },
                y: "שנה",
                yy: function(e) {
                    return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                }
            },
            meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
            isPM: function(e) {
                return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
        e.defineLocale("hi", {
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm बजे",
                LTS: "A h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[कल] LT",
                nextWeek: "dddd, LT",
                lastDay: "[कल] LT",
                lastWeek: "[पिछले] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                ss: "%d सेकंड",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var r = e + " ";
            switch (n) {
                case "ss":
                    return r += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return r += 1 === e ? "dan" : "dana";
                case "MM":
                    return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }
        e.defineLocale("hr", {
            months: {
                format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");

        function n(e, t, n, r) {
            var a = e;
            switch (n) {
                case "s":
                    return r || t ? "néhány másodperc" : "néhány másodperce";
                case "ss":
                    return a + (r || t) ? " másodperc" : " másodperce";
                case "m":
                    return "egy" + (r || t ? " perc" : " perce");
                case "mm":
                    return a + (r || t ? " perc" : " perce");
                case "h":
                    return "egy" + (r || t ? " óra" : " órája");
                case "hh":
                    return a + (r || t ? " óra" : " órája");
                case "d":
                    return "egy" + (r || t ? " nap" : " napja");
                case "dd":
                    return a + (r || t ? " nap" : " napja");
                case "M":
                    return "egy" + (r || t ? " hónap" : " hónapja");
                case "MM":
                    return a + (r || t ? " hónap" : " hónapja");
                case "y":
                    return "egy" + (r || t ? " év" : " éve");
                case "yy":
                    return a + (r || t ? " év" : " éve")
            }
            return ""
        }

        function r(e) {
            return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]"
        }
        e.defineLocale("hu", {
            months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
            monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function(e) {
                return "u" === e.charAt(1).toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]",
                nextDay: "[holnap] LT[-kor]",
                nextWeek: function() {
                    return r.call(this, !0)
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function() {
                    return r.call(this, !1)
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s múlva",
                past: "%s",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("hy-am", {
            months: {
                format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
            },
            monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
            weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY թ.",
                LLL: "D MMMM YYYY թ., HH:mm",
                LLLL: "dddd, D MMMM YYYY թ., HH:mm"
            },
            calendar: {
                sameDay: "[այսօր] LT",
                nextDay: "[վաղը] LT",
                lastDay: "[երեկ] LT",
                nextWeek: function() {
                    return "dddd [օրը ժամը] LT"
                },
                lastWeek: function() {
                    return "[անցած] dddd [օրը ժամը] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s հետո",
                past: "%s առաջ",
                s: "մի քանի վայրկյան",
                ss: "%d վայրկյան",
                m: "րոպե",
                mm: "%d րոպե",
                h: "ժամ",
                hh: "%d ժամ",
                d: "օր",
                dd: "%d օր",
                M: "ամիս",
                MM: "%d ամիս",
                y: "տարի",
                yy: "%d տարի"
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function(e) {
                return /^(ցերեկվա|երեկոյան)$/.test(e)
            },
            meridiem: function(e) {
                return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "DDD":
                    case "w":
                    case "W":
                    case "DDDo":
                        return 1 === e ? e + "-ին" : e + "-րդ";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                ss: "%d detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e) {
            return e % 100 == 11 || e % 10 != 1
        }

        function n(e, n, r, a) {
            var i = e + " ";
            switch (r) {
                case "s":
                    return n || a ? "nokkrar sekúndur" : "nokkrum sekúndum";
                case "ss":
                    return t(e) ? i + (n || a ? "sekúndur" : "sekúndum") : i + "sekúnda";
                case "m":
                    return n ? "mínúta" : "mínútu";
                case "mm":
                    return t(e) ? i + (n || a ? "mínútur" : "mínútum") : n ? i + "mínúta" : i + "mínútu";
                case "hh":
                    return t(e) ? i + (n || a ? "klukkustundir" : "klukkustundum") : i + "klukkustund";
                case "d":
                    return n ? "dagur" : a ? "dag" : "degi";
                case "dd":
                    return t(e) ? n ? i + "dagar" : i + (a ? "daga" : "dögum") : n ? i + "dagur" : i + (a ? "dag" : "degi");
                case "M":
                    return n ? "mánuður" : a ? "mánuð" : "mánuði";
                case "MM":
                    return t(e) ? n ? i + "mánuðir" : i + (a ? "mánuði" : "mánuðum") : n ? i + "mánuður" : i + (a ? "mánuð" : "mánuði");
                case "y":
                    return n || a ? "ár" : "ári";
                case "yy":
                    return t(e) ? i + (n || a ? "ár" : "árum") : i + (n || a ? "ár" : "ári")
            }
        }
        e.defineLocale("is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: "klukkustund",
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("it-ch", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ja", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日 dddd HH:mm",
                l: "YYYY/MM/DD",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日(ddd) HH:mm"
            },
            meridiemParse: /午前|午後/i,
            isPM: function(e) {
                return "午後" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "午前" : "午後"
            },
            calendar: {
                sameDay: "[今日] LT",
                nextDay: "[明日] LT",
                nextWeek: function(e) {
                    return e.week() < this.week() ? "[来週]dddd LT" : "dddd LT"
                },
                lastDay: "[昨日] LT",
                lastWeek: function(e) {
                    return this.week() < e.week() ? "[先週]dddd LT" : "dddd LT"
                },
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}日/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                ss: "%d秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                ss: "%d detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ka", {
            months: {
                standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
            },
            monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: {
                standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                isFormat: /(წინა|შემდეგ)/
            },
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[დღეს] LT[-ზე]",
                nextDay: "[ხვალ] LT[-ზე]",
                lastDay: "[გუშინ] LT[-ზე]",
                nextWeek: "[შემდეგ] dddd LT[-ზე]",
                lastWeek: "[წინა] dddd LT-ზე",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
                },
                past: function(e) {
                    return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
                },
                s: "რამდენიმე წამი",
                ss: "%d წამი",
                m: "წუთი",
                mm: "%d წუთი",
                h: "საათი",
                hh: "%d საათი",
                d: "დღე",
                dd: "%d დღე",
                M: "თვე",
                MM: "%d თვე",
                y: "წელი",
                yy: "%d წელი"
            },
            dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function(e) {
                return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            0: "-ші",
            1: "-ші",
            2: "-ші",
            3: "-ші",
            4: "-ші",
            5: "-ші",
            6: "-шы",
            7: "-ші",
            8: "-ші",
            9: "-шы",
            10: "-шы",
            20: "-шы",
            30: "-шы",
            40: "-шы",
            50: "-ші",
            60: "-шы",
            70: "-ші",
            80: "-ші",
            90: "-шы",
            100: "-ші"
        };
        e.defineLocale("kk", {
            months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
            monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
            weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
            weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
            weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгін сағат] LT",
                nextDay: "[Ертең сағат] LT",
                nextWeek: "dddd [сағат] LT",
                lastDay: "[Кеше сағат] LT",
                lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ішінде",
                past: "%s бұрын",
                s: "бірнеше секунд",
                ss: "%d секунд",
                m: "бір минут",
                mm: "%d минут",
                h: "бір сағат",
                hh: "%d сағат",
                d: "бір күн",
                dd: "%d күн",
                M: "бір ай",
                MM: "%d ай",
                y: "бір жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
            ordinal: function(e) {
                var n = e % 10,
                    r = e >= 100 ? 100 : null;
                return e + (t[e] || t[n] || t[r])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "១",
                2: "២",
                3: "៣",
                4: "៤",
                5: "៥",
                6: "៦",
                7: "៧",
                8: "៨",
                9: "៩",
                0: "០"
            },
            n = {
                "១": "1",
                "២": "2",
                "៣": "3",
                "៤": "4",
                "៥": "5",
                "៦": "6",
                "៧": "7",
                "៨": "8",
                "៩": "9",
                "០": "0"
            };
        e.defineLocale("km", {
            months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /ព្រឹក|ល្ងាច/,
            isPM: function(e) {
                return "ល្ងាច" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ព្រឹក" : "ល្ងាច"
            },
            calendar: {
                sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                nextDay: "[ស្អែក ម៉ោង] LT",
                nextWeek: "dddd [ម៉ោង] LT",
                lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sទៀត",
                past: "%sមុន",
                s: "ប៉ុន្មានវិនាទី",
                ss: "%d វិនាទី",
                m: "មួយនាទី",
                mm: "%d នាទី",
                h: "មួយម៉ោង",
                hh: "%d ម៉ោង",
                d: "មួយថ្ងៃ",
                dd: "%d ថ្ងៃ",
                M: "មួយខែ",
                MM: "%d ខែ",
                y: "មួយឆ្នាំ",
                yy: "%d ឆ្នាំ"
            },
            dayOfMonthOrdinalParse: /ទី\d{1,2}/,
            ordinal: "ទី%d",
            preparse: function(e) {
                return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "೧",
                2: "೨",
                3: "೩",
                4: "೪",
                5: "೫",
                6: "೬",
                7: "೭",
                8: "೮",
                9: "೯",
                0: "೦"
            },
            n = {
                "೧": "1",
                "೨": "2",
                "೩": "3",
                "೪": "4",
                "೫": "5",
                "೬": "6",
                "೭": "7",
                "೮": "8",
                "೯": "9",
                "೦": "0"
            };
        e.defineLocale("kn", {
            months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
            monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
            monthsParseExact: !0,
            weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
            weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
            weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[ಇಂದು] LT",
                nextDay: "[ನಾಳೆ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ನಿನ್ನೆ] LT",
                lastWeek: "[ಕೊನೆಯ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ನಂತರ",
                past: "%s ಹಿಂದೆ",
                s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                ss: "%d ಸೆಕೆಂಡುಗಳು",
                m: "ಒಂದು ನಿಮಿಷ",
                mm: "%d ನಿಮಿಷ",
                h: "ಒಂದು ಗಂಟೆ",
                hh: "%d ಗಂಟೆ",
                d: "ಒಂದು ದಿನ",
                dd: "%d ದಿನ",
                M: "ಒಂದು ತಿಂಗಳು",
                MM: "%d ತಿಂಗಳು",
                y: "ಒಂದು ವರ್ಷ",
                yy: "%d ವರ್ಷ"
            },
            preparse: function(e) {
                return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
            ordinal: function(e) {
                return e + "ನೇ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 A h:mm",
                LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                l: "YYYY.MM.DD.",
                ll: "YYYY년 MMMM D일",
                lll: "YYYY년 MMMM D일 A h:mm",
                llll: "YYYY년 MMMM D일 dddd A h:mm"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇 초",
                ss: "%d초",
                m: "1분",
                mm: "%d분",
                h: "한 시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한 달",
                MM: "%d달",
                y: "일 년",
                yy: "%d년"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "일";
                    case "M":
                        return e + "월";
                    case "w":
                    case "W":
                        return e + "주";
                    default:
                        return e
                }
            },
            meridiemParse: /오전|오후/,
            isPM: function(e) {
                return "오후" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "오전" : "오후"
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            },
            n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            },
            r = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
        e.defineLocale("ku", {
            months: r,
            monthsShort: r,
            weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
            weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /ئێواره‌|به‌یانی/,
            isPM: function(e) {
                return /ئێواره‌/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "به‌یانی" : "ئێواره‌"
            },
            calendar: {
                sameDay: "[ئه‌مرۆ كاتژمێر] LT",
                nextDay: "[به‌یانی كاتژمێر] LT",
                nextWeek: "dddd [كاتژمێر] LT",
                lastDay: "[دوێنێ كاتژمێر] LT",
                lastWeek: "dddd [كاتژمێر] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "له‌ %s",
                past: "%s",
                s: "چه‌ند چركه‌یه‌ك",
                ss: "چركه‌ %d",
                m: "یه‌ك خوله‌ك",
                mm: "%d خوله‌ك",
                h: "یه‌ك كاتژمێر",
                hh: "%d كاتژمێر",
                d: "یه‌ك ڕۆژ",
                dd: "%d ڕۆژ",
                M: "یه‌ك مانگ",
                MM: "%d مانگ",
                y: "یه‌ك ساڵ",
                yy: "%d ساڵ"
            },
            preparse: function(e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            0: "-чү",
            1: "-чи",
            2: "-чи",
            3: "-чү",
            4: "-чү",
            5: "-чи",
            6: "-чы",
            7: "-чи",
            8: "-чи",
            9: "-чу",
            10: "-чу",
            20: "-чы",
            30: "-чу",
            40: "-чы",
            50: "-чү",
            60: "-чы",
            70: "-чи",
            80: "-чи",
            90: "-чу",
            100: "-чү"
        };
        e.defineLocale("ky", {
            months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
            monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
            weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
            weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгүн саат] LT",
                nextDay: "[Эртең саат] LT",
                nextWeek: "dddd [саат] LT",
                lastDay: "[Кечээ саат] LT",
                lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ичинде",
                past: "%s мурун",
                s: "бирнече секунд",
                ss: "%d секунд",
                m: "бир мүнөт",
                mm: "%d мүнөт",
                h: "бир саат",
                hh: "%d саат",
                d: "бир күн",
                dd: "%d күн",
                M: "бир ай",
                MM: "%d ай",
                y: "бир жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
            ordinal: function(e) {
                var n = e % 10,
                    r = e >= 100 ? 100 : null;
                return e + (t[e] || t[n] || t[r])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return t ? a[n][0] : a[n][1]
        }

        function n(e) {
            if (e = parseInt(e, 10), isNaN(e)) return !1;
            if (e < 0) return !0;
            if (e < 10) return 4 <= e && e <= 7;
            if (e < 100) {
                var t = e % 10,
                    r = e / 10;
                return n(0 === t ? r : t)
            }
            if (e < 1e4) {
                for (; e >= 10;) e /= 10;
                return n(e)
            }
            return n(e /= 1e3)
        }
        e.defineLocale("lb", {
            months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gëschter um] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: function(e) {
                    return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
                },
                past: function(e) {
                    return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
                },
                s: "e puer Sekonnen",
                ss: "%d Sekonnen",
                m: t,
                mm: "%d Minutten",
                h: t,
                hh: "%d Stonnen",
                d: t,
                dd: "%d Deeg",
                M: t,
                MM: "%d Méint",
                y: t,
                yy: "%d Joer"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("lo", {
            months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ວັນdddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
            isPM: function(e) {
                return "ຕອນແລງ" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
            },
            calendar: {
                sameDay: "[ມື້ນີ້ເວລາ] LT",
                nextDay: "[ມື້ອື່ນເວລາ] LT",
                nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ອີກ %s",
                past: "%sຜ່ານມາ",
                s: "ບໍ່ເທົ່າໃດວິນາທີ",
                ss: "%d ວິນາທີ",
                m: "1 ນາທີ",
                mm: "%d ນາທີ",
                h: "1 ຊົ່ວໂມງ",
                hh: "%d ຊົ່ວໂມງ",
                d: "1 ມື້",
                dd: "%d ມື້",
                M: "1 ເດືອນ",
                MM: "%d ເດືອນ",
                y: "1 ປີ",
                yy: "%d ປີ"
            },
            dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
            ordinal: function(e) {
                return "ທີ່" + e
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            ss: "sekundė_sekundžių_sekundes",
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus"
        };

        function n(e, t, n, r) {
            return t ? a(n)[0] : r ? a(n)[1] : a(n)[2]
        }

        function r(e) {
            return e % 10 == 0 || e > 10 && e < 20
        }

        function a(e) {
            return t[e].split("_")
        }

        function i(e, t, i, s) {
            var o = e + " ";
            return 1 === e ? o + n(0, t, i[0], s) : t ? o + (r(e) ? a(i)[1] : a(i)[0]) : s ? o + a(i)[1] : o + (r(e) ? a(i)[1] : a(i)[2])
        }
        e.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[Šiandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Praėjusį] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prieš %s",
                s: function(e, t, n, r) {
                    return t ? "kelios sekundės" : r ? "kelių sekundžių" : "kelias sekundes"
                },
                ss: i,
                m: n,
                mm: i,
                h: n,
                hh: i,
                d: n,
                dd: i,
                M: n,
                MM: i,
                y: n,
                yy: i
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function(e) {
                return e + "-oji"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
            m: "minūtes_minūtēm_minūte_minūtes".split("_"),
            mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
            h: "stundas_stundām_stunda_stundas".split("_"),
            hh: "stundas_stundām_stunda_stundas".split("_"),
            d: "dienas_dienām_diena_dienas".split("_"),
            dd: "dienas_dienām_diena_dienas".split("_"),
            M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        };

        function n(e, t, n) {
            return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
        }

        function r(e, r, a) {
            return e + " " + n(t[a], e, r)
        }

        function a(e, r, a) {
            return n(t[a], e, r)
        }
        e.defineLocale("lv", {
            months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[Šodien pulksten] LT",
                nextDay: "[Rīt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pagājušā] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "pēc %s",
                past: "pirms %s",
                s: function(e, t) {
                    return t ? "dažas sekundes" : "dažām sekundēm"
                },
                ss: r,
                m: a,
                mm: r,
                h: a,
                hh: r,
                d: a,
                dd: r,
                M: a,
                MM: r,
                y: a,
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekund", "sekunda", "sekundi"],
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, n, r) {
                var a = t.words[r];
                return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
            }
        };
        e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sjutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mjesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("mi", {
            months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
            monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
            weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [i] HH:mm",
                LLLL: "dddd, D MMMM YYYY [i] HH:mm"
            },
            calendar: {
                sameDay: "[i teie mahana, i] LT",
                nextDay: "[apopo i] LT",
                nextWeek: "dddd [i] LT",
                lastDay: "[inanahi i] LT",
                lastWeek: "dddd [whakamutunga i] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i roto i %s",
                past: "%s i mua",
                s: "te hēkona ruarua",
                ss: "%d hēkona",
                m: "he meneti",
                mm: "%d meneti",
                h: "te haora",
                hh: "%d haora",
                d: "he ra",
                dd: "%d ra",
                M: "he marama",
                MM: "%d marama",
                y: "he tau",
                yy: "%d tau"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("mk", {
            months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Денес во] LT",
                nextDay: "[Утре во] LT",
                nextWeek: "[Во] dddd [во] LT",
                lastDay: "[Вчера во] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Изминатата] dddd [во] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Изминатиот] dddd [во] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "после %s",
                past: "пред %s",
                s: "неколку секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дена",
                M: "месец",
                MM: "%d месеци",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ml", {
            months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
            monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
            monthsParseExact: !0,
            weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
                LT: "A h:mm -നു",
                LTS: "A h:mm:ss -നു",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -നു",
                LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
            },
            calendar: {
                sameDay: "[ഇന്ന്] LT",
                nextDay: "[നാളെ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ഇന്നലെ] LT",
                lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s കഴിഞ്ഞ്",
                past: "%s മുൻപ്",
                s: "അൽപ നിമിഷങ്ങൾ",
                ss: "%d സെക്കൻഡ്",
                m: "ഒരു മിനിറ്റ്",
                mm: "%d മിനിറ്റ്",
                h: "ഒരു മണിക്കൂർ",
                hh: "%d മണിക്കൂർ",
                d: "ഒരു ദിവസം",
                dd: "%d ദിവസം",
                M: "ഒരു മാസം",
                MM: "%d മാസം",
                y: "ഒരു വർഷം",
                yy: "%d വർഷം"
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, r) {
            switch (n) {
                case "s":
                    return t ? "хэдхэн секунд" : "хэдхэн секундын";
                case "ss":
                    return e + (t ? " секунд" : " секундын");
                case "m":
                case "mm":
                    return e + (t ? " минут" : " минутын");
                case "h":
                case "hh":
                    return e + (t ? " цаг" : " цагийн");
                case "d":
                case "dd":
                    return e + (t ? " өдөр" : " өдрийн");
                case "M":
                case "MM":
                    return e + (t ? " сар" : " сарын");
                case "y":
                case "yy":
                    return e + (t ? " жил" : " жилийн");
                default:
                    return e
            }
        }
        e.defineLocale("mn", {
            months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
            monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
            monthsParseExact: !0,
            weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
            weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
            weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY оны MMMMын D",
                LLL: "YYYY оны MMMMын D HH:mm",
                LLLL: "dddd, YYYY оны MMMMын D HH:mm"
            },
            meridiemParse: /ҮӨ|ҮХ/i,
            isPM: function(e) {
                return "ҮХ" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ҮӨ" : "ҮХ"
            },
            calendar: {
                sameDay: "[Өнөөдөр] LT",
                nextDay: "[Маргааш] LT",
                nextWeek: "[Ирэх] dddd LT",
                lastDay: "[Өчигдөр] LT",
                lastWeek: "[Өнгөрсөн] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s дараа",
                past: "%s өмнө",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + " өдөр";
                    default:
                        return e
                }
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };

        function r(e, t, n, r) {
            var a = "";
            if (t) switch (n) {
                case "s":
                    a = "काही सेकंद";
                    break;
                case "ss":
                    a = "%d सेकंद";
                    break;
                case "m":
                    a = "एक मिनिट";
                    break;
                case "mm":
                    a = "%d मिनिटे";
                    break;
                case "h":
                    a = "एक तास";
                    break;
                case "hh":
                    a = "%d तास";
                    break;
                case "d":
                    a = "एक दिवस";
                    break;
                case "dd":
                    a = "%d दिवस";
                    break;
                case "M":
                    a = "एक महिना";
                    break;
                case "MM":
                    a = "%d महिने";
                    break;
                case "y":
                    a = "एक वर्ष";
                    break;
                case "yy":
                    a = "%d वर्षे"
            } else switch (n) {
                case "s":
                    a = "काही सेकंदां";
                    break;
                case "ss":
                    a = "%d सेकंदां";
                    break;
                case "m":
                    a = "एका मिनिटा";
                    break;
                case "mm":
                    a = "%d मिनिटां";
                    break;
                case "h":
                    a = "एका तासा";
                    break;
                case "hh":
                    a = "%d तासां";
                    break;
                case "d":
                    a = "एका दिवसा";
                    break;
                case "dd":
                    a = "%d दिवसां";
                    break;
                case "M":
                    a = "एका महिन्या";
                    break;
                case "MM":
                    a = "%d महिन्यां";
                    break;
                case "y":
                    a = "एका वर्षा";
                    break;
                case "yy":
                    a = "%d वर्षां"
            }
            return a.replace(/%d/i, e)
        }
        e.defineLocale("mr", {
            months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
            monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm वाजता",
                LTS: "A h:mm:ss वाजता",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm वाजता",
                LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[उद्या] LT",
                nextWeek: "dddd, LT",
                lastDay: "[काल] LT",
                lastWeek: "[मागील] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमध्ये",
                past: "%sपूर्वी",
                s: r,
                ss: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: r,
                dd: r,
                M: r,
                MM: r,
                y: r,
                yy: r
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("mt", {
            months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
            monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
            weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
            weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
            weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Illum fil-]LT",
                nextDay: "[Għada fil-]LT",
                nextWeek: "dddd [fil-]LT",
                lastDay: "[Il-bieraħ fil-]LT",
                lastWeek: "dddd [li għadda] [fil-]LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "f’ %s",
                past: "%s ilu",
                s: "ftit sekondi",
                ss: "%d sekondi",
                m: "minuta",
                mm: "%d minuti",
                h: "siegħa",
                hh: "%d siegħat",
                d: "ġurnata",
                dd: "%d ġranet",
                M: "xahar",
                MM: "%d xhur",
                y: "sena",
                yy: "%d sni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "၁",
                2: "၂",
                3: "၃",
                4: "၄",
                5: "၅",
                6: "၆",
                7: "၇",
                8: "၈",
                9: "၉",
                0: "၀"
            },
            n = {
                "၁": "1",
                "၂": "2",
                "၃": "3",
                "၄": "4",
                "၅": "5",
                "၆": "6",
                "၇": "7",
                "၈": "8",
                "၉": "9",
                "၀": "0"
            };
        e.defineLocale("my", {
            months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
            monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ယနေ.] LT [မှာ]",
                nextDay: "[မနက်ဖြန်] LT [မှာ]",
                nextWeek: "dddd LT [မှာ]",
                lastDay: "[မနေ.က] LT [မှာ]",
                lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                sameElse: "L"
            },
            relativeTime: {
                future: "လာမည့် %s မှာ",
                past: "လွန်ခဲ့သော %s က",
                s: "စက္ကန်.အနည်းငယ်",
                ss: "%d စက္ကန့်",
                m: "တစ်မိနစ်",
                mm: "%d မိနစ်",
                h: "တစ်နာရီ",
                hh: "%d နာရီ",
                d: "တစ်ရက်",
                dd: "%d ရက်",
                M: "တစ်လ",
                MM: "%d လ",
                y: "တစ်နှစ်",
                yy: "%d နှစ်"
            },
            preparse: function(e) {
                return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                ss: "%d sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
        e.defineLocale("ne", {
            months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
            monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
            monthsParseExact: !0,
            weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "Aको h:mm बजे",
                LTS: "Aको h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, Aको h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[भोलि] LT",
                nextWeek: "[आउँदो] dddd[,] LT",
                lastDay: "[हिजो] LT",
                lastWeek: "[गएको] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमा",
                past: "%s अगाडि",
                s: "केही क्षण",
                ss: "%d सेकेण्ड",
                m: "एक मिनेट",
                mm: "%d मिनेट",
                h: "एक घण्टा",
                hh: "%d घण्टा",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महिना",
                MM: "%d महिना",
                y: "एक बर्ष",
                yy: "%d बर्ष"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            a = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            a = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl-be", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I går klokka] LT",
                lastWeek: "[Føregåande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                ss: "%d sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein månad",
                MM: "%d månader",
                y: "eit år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "੧",
                2: "੨",
                3: "੩",
                4: "੪",
                5: "੫",
                6: "੬",
                7: "੭",
                8: "੮",
                9: "੯",
                0: "੦"
            },
            n = {
                "੧": "1",
                "੨": "2",
                "੩": "3",
                "੪": "4",
                "੫": "5",
                "੬": "6",
                "੭": "7",
                "੮": "8",
                "੯": "9",
                "੦": "0"
            };
        e.defineLocale("pa-in", {
            months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
            weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            longDateFormat: {
                LT: "A h:mm ਵਜੇ",
                LTS: "A h:mm:ss ਵਜੇ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
            },
            calendar: {
                sameDay: "[ਅਜ] LT",
                nextDay: "[ਕਲ] LT",
                nextWeek: "[ਅਗਲਾ] dddd, LT",
                lastDay: "[ਕਲ] LT",
                lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ਵਿੱਚ",
                past: "%s ਪਿਛਲੇ",
                s: "ਕੁਝ ਸਕਿੰਟ",
                ss: "%d ਸਕਿੰਟ",
                m: "ਇਕ ਮਿੰਟ",
                mm: "%d ਮਿੰਟ",
                h: "ਇੱਕ ਘੰਟਾ",
                hh: "%d ਘੰਟੇ",
                d: "ਇੱਕ ਦਿਨ",
                dd: "%d ਦਿਨ",
                M: "ਇੱਕ ਮਹੀਨਾ",
                MM: "%d ਮਹੀਨੇ",
                y: "ਇੱਕ ਸਾਲ",
                yy: "%d ਸਾਲ"
            },
            preparse: function(e) {
                return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
            n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");

        function r(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
        }

        function a(e, t, n) {
            var a = e + " ";
            switch (n) {
                case "ss":
                    return a + (r(e) ? "sekundy" : "sekund");
                case "m":
                    return t ? "minuta" : "minutę";
                case "mm":
                    return a + (r(e) ? "minuty" : "minut");
                case "h":
                    return t ? "godzina" : "godzinę";
                case "hh":
                    return a + (r(e) ? "godziny" : "godzin");
                case "MM":
                    return a + (r(e) ? "miesiące" : "miesięcy");
                case "yy":
                    return a + (r(e) ? "lata" : "lat")
            }
        }
        e.defineLocale("pl", {
            months: function(e, r) {
                return e ? "" === r ? "(" + n[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dziś o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[W niedzielę o] LT";
                        case 2:
                            return "[We wtorek o] LT";
                        case 3:
                            return "[W środę o] LT";
                        case 6:
                            return "[W sobotę o] LT";
                        default:
                            return "[W] dddd [o] LT"
                    }
                },
                lastDay: "[Wczoraj o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszłą niedzielę o] LT";
                        case 3:
                            return "[W zeszłą środę o] LT";
                        case 6:
                            return "[W zeszłą sobotę o] LT";
                        default:
                            return "[W zeszły] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: "1 dzień",
                dd: "%d dni",
                M: "miesiąc",
                MM: a,
                y: "rok",
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("pt", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("pt-br", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "poucos segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº"
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var r = " ";
            return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (r = " de "), e + r + {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                MM: "luni",
                yy: "ani"
            }[n]
        }
        e.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mâine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s în urmă",
                s: "câteva secunde",
                ss: t,
                m: "un minut",
                mm: t,
                h: "o oră",
                hh: t,
                d: "o zi",
                dd: t,
                M: "o lună",
                MM: t,
                y: "un an",
                yy: t
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var r, a, i = {
                ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            };
            return "m" === n ? t ? "минута" : "минуту" : e + " " + (r = +e, a = i[n].split("_"), r % 10 == 1 && r % 100 != 11 ? a[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? a[1] : a[2])
        }
        var n = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
        e.defineLocale("ru", {
            months: {
                format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
            },
            monthsShort: {
                format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
            },
            weekdays: {
                standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
            },
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
            monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., H:mm",
                LLLL: "dddd, D MMMM YYYY г., H:mm"
            },
            calendar: {
                sameDay: "[Сегодня, в] LT",
                nextDay: "[Завтра, в] LT",
                lastDay: "[Вчера, в] LT",
                nextWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В следующее] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В следующий] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В следующую] dddd, [в] LT"
                    }
                },
                lastWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd, [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                ss: t,
                m: t,
                mm: t,
                h: "час",
                hh: t,
                d: "день",
                dd: t,
                M: "месяц",
                MM: t,
                y: "год",
                yy: t
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function(e) {
                return /^(дня|вечера)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    case "w":
                    case "W":
                        return e + "-я";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
            n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
        e.defineLocale("sd", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function(e) {
                return "شام" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[اڄ] LT",
                nextDay: "[سڀاڻي] LT",
                nextWeek: "dddd [اڳين هفتي تي] LT",
                lastDay: "[ڪالهه] LT",
                lastWeek: "[گزريل هفتي] dddd [تي] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s پوء",
                past: "%s اڳ",
                s: "چند سيڪنڊ",
                ss: "%d سيڪنڊ",
                m: "هڪ منٽ",
                mm: "%d منٽ",
                h: "هڪ ڪلاڪ",
                hh: "%d ڪلاڪ",
                d: "هڪ ڏينهن",
                dd: "%d ڏينهن",
                M: "هڪ مهينو",
                MM: "%d مهينا",
                y: "هڪ سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("se", {
            months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
            monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
            weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
            weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s geažes",
                past: "maŋit %s",
                s: "moadde sekunddat",
                ss: "%d sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta mánnu",
                MM: "%d mánut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("si", {
            months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
            monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
            weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[අද] LT[ට]",
                nextDay: "[හෙට] LT[ට]",
                nextWeek: "dddd LT[ට]",
                lastDay: "[ඊයේ] LT[ට]",
                lastWeek: "[පසුගිය] dddd LT[ට]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sකින්",
                past: "%sකට පෙර",
                s: "තත්පර කිහිපය",
                ss: "තත්පර %d",
                m: "මිනිත්තුව",
                mm: "මිනිත්තු %d",
                h: "පැය",
                hh: "පැය %d",
                d: "දිනය",
                dd: "දින %d",
                M: "මාසය",
                MM: "මාස %d",
                y: "වසර",
                yy: "වසර %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
            ordinal: function(e) {
                return e + " වැනි"
            },
            meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
            isPM: function(e) {
                return "ප.ව." === e || "පස් වරු" === e
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
            n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");

        function r(e) {
            return e > 1 && e < 5
        }

        function a(e, t, n, a) {
            var i = e + " ";
            switch (n) {
                case "s":
                    return t || a ? "pár sekúnd" : "pár sekundami";
                case "ss":
                    return t || a ? i + (r(e) ? "sekundy" : "sekúnd") : i + "sekundami";
                case "m":
                    return t ? "minúta" : a ? "minútu" : "minútou";
                case "mm":
                    return t || a ? i + (r(e) ? "minúty" : "minút") : i + "minútami";
                case "h":
                    return t ? "hodina" : a ? "hodinu" : "hodinou";
                case "hh":
                    return t || a ? i + (r(e) ? "hodiny" : "hodín") : i + "hodinami";
                case "d":
                    return t || a ? "deň" : "dňom";
                case "dd":
                    return t || a ? i + (r(e) ? "dni" : "dní") : i + "dňami";
                case "M":
                    return t || a ? "mesiac" : "mesiacom";
                case "MM":
                    return t || a ? i + (r(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
                case "y":
                    return t || a ? "rok" : "rokom";
                case "yy":
                    return t || a ? i + (r(e) ? "roky" : "rokov") : i + "rokmi"
            }
        }
        e.defineLocale("sk", {
            months: t,
            monthsShort: n,
            weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo štvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                },
                lastDay: "[včera o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulú nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[minulý] dddd [o] LT";
                        case 3:
                            return "[minulú stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [o] LT";
                        case 6:
                            return "[minulú sobotu o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, r) {
            var a = e + " ";
            switch (n) {
                case "s":
                    return t || r ? "nekaj sekund" : "nekaj sekundami";
                case "ss":
                    return a += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || r ? "sekundi" : "sekundah" : e < 5 ? t || r ? "sekunde" : "sekundah" : "sekund";
                case "m":
                    return t ? "ena minuta" : "eno minuto";
                case "mm":
                    return a += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || r ? "minuti" : "minutama" : e < 5 ? t || r ? "minute" : "minutami" : t || r ? "minut" : "minutami";
                case "h":
                    return t ? "ena ura" : "eno uro";
                case "hh":
                    return a += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || r ? "uri" : "urama" : e < 5 ? t || r ? "ure" : "urami" : t || r ? "ur" : "urami";
                case "d":
                    return t || r ? "en dan" : "enim dnem";
                case "dd":
                    return a += 1 === e ? t || r ? "dan" : "dnem" : 2 === e ? t || r ? "dni" : "dnevoma" : t || r ? "dni" : "dnevi";
                case "M":
                    return t || r ? "en mesec" : "enim mesecem";
                case "MM":
                    return a += 1 === e ? t || r ? "mesec" : "mesecem" : 2 === e ? t || r ? "meseca" : "mesecema" : e < 5 ? t || r ? "mesece" : "meseci" : t || r ? "mesecev" : "meseci";
                case "y":
                    return t || r ? "eno leto" : "enim letom";
                case "yy":
                    return a += 1 === e ? t || r ? "leto" : "letom" : 2 === e ? t || r ? "leti" : "letoma" : e < 5 ? t || r ? "leta" : "leti" : t || r ? "let" : "leti"
            }
        }
        e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[včeraj ob] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[prejšnjo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejšnjo] [sredo] [ob] LT";
                        case 6:
                            return "[prejšnjo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejšnji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "čez %s",
                past: "pred %s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function(e) {
                return "M" === e.charAt(0)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot në] LT",
                nextDay: "[Nesër në] LT",
                nextWeek: "dddd [në] LT",
                lastDay: "[Dje në] LT",
                lastWeek: "dddd [e kaluar në] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "në %s",
                past: "%s më parë",
                s: "disa sekonda",
                ss: "%d sekonda",
                m: "një minutë",
                mm: "%d minuta",
                h: "një orë",
                hh: "%d orë",
                d: "një ditë",
                dd: "%d ditë",
                M: "një muaj",
                MM: "%d muaj",
                y: "një vit",
                yy: "%d vite"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekunda", "sekunde", "sekundi"],
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, n, r) {
                var a = t.words[r];
                return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
            }
        };
        e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["секунда", "секунде", "секунди"],
                m: ["један минут", "једне минуте"],
                mm: ["минут", "минуте", "минута"],
                h: ["један сат", "једног сата"],
                hh: ["сат", "сата", "сати"],
                dd: ["дан", "дана", "дана"],
                MM: ["месец", "месеца", "месеци"],
                yy: ["година", "године", "година"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, n, r) {
                var a = t.words[r];
                return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
            }
        };
        e.defineLocale("sr-cyrl", {
            months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
            monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
            monthsParseExact: !0,
            weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
            weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
            weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[данас у] LT",
                nextDay: "[сутра у] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[у] [недељу] [у] LT";
                        case 3:
                            return "[у] [среду] [у] LT";
                        case 6:
                            return "[у] [суботу] [у] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[у] dddd [у] LT"
                    }
                },
                lastDay: "[јуче у] LT",
                lastWeek: function() {
                    return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пре %s",
                s: "неколико секунди",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "дан",
                dd: t.translate,
                M: "месец",
                MM: t.translate,
                y: "годину",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                ss: "%d mzuzwana",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function(e, t, n) {
                return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "[På] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                ss: "%d sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e";
                return e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                ss: "sekunde %d",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "masiku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "௧",
                2: "௨",
                3: "௩",
                4: "௪",
                5: "௫",
                6: "௬",
                7: "௭",
                8: "௮",
                9: "௯",
                0: "௦"
            },
            n = {
                "௧": "1",
                "௨": "2",
                "௩": "3",
                "௪": "4",
                "௫": "5",
                "௬": "6",
                "௭": "7",
                "௮": "8",
                "௯": "9",
                "௦": "0"
            };
        e.defineLocale("ta", {
            months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
            weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[இன்று] LT",
                nextDay: "[நாளை] LT",
                nextWeek: "dddd, LT",
                lastDay: "[நேற்று] LT",
                lastWeek: "[கடந்த வாரம்] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s இல்",
                past: "%s முன்",
                s: "ஒரு சில விநாடிகள்",
                ss: "%d விநாடிகள்",
                m: "ஒரு நிமிடம்",
                mm: "%d நிமிடங்கள்",
                h: "ஒரு மணி நேரம்",
                hh: "%d மணி நேரம்",
                d: "ஒரு நாள்",
                dd: "%d நாட்கள்",
                M: "ஒரு மாதம்",
                MM: "%d மாதங்கள்",
                y: "ஒரு வருடம்",
                yy: "%d ஆண்டுகள்"
            },
            dayOfMonthOrdinalParse: /\d{1,2}வது/,
            ordinal: function(e) {
                return e + "வது"
            },
            preparse: function(e) {
                return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function(e, t, n) {
                return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("te", {
            months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
            monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
            monthsParseExact: !0,
            weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
            weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
            weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[నేడు] LT",
                nextDay: "[రేపు] LT",
                nextWeek: "dddd, LT",
                lastDay: "[నిన్న] LT",
                lastWeek: "[గత] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s లో",
                past: "%s క్రితం",
                s: "కొన్ని క్షణాలు",
                ss: "%d సెకన్లు",
                m: "ఒక నిమిషం",
                mm: "%d నిమిషాలు",
                h: "ఒక గంట",
                hh: "%d గంటలు",
                d: "ఒక రోజు",
                dd: "%d రోజులు",
                M: "ఒక నెల",
                MM: "%d నెలలు",
                y: "ఒక సంవత్సరం",
                yy: "%d సంవత్సరాలు"
            },
            dayOfMonthOrdinalParse: /\d{1,2}వ/,
            ordinal: "%dవ",
            meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("tet", {
            months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ohin iha] LT",
                nextDay: "[Aban iha] LT",
                nextWeek: "dddd [iha] LT",
                lastDay: "[Horiseik iha] LT",
                lastWeek: "dddd [semana kotuk] [iha] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "iha %s",
                past: "%s liuba",
                s: "minutu balun",
                ss: "minutu %d",
                m: "minutu ida",
                mm: "minutu %d",
                h: "oras ida",
                hh: "oras %d",
                d: "loron ida",
                dd: "loron %d",
                M: "fulan ida",
                MM: "fulan %d",
                y: "tinan ida",
                yy: "tinan %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            0: "-ум",
            1: "-ум",
            2: "-юм",
            3: "-юм",
            4: "-ум",
            5: "-ум",
            6: "-ум",
            7: "-ум",
            8: "-ум",
            9: "-ум",
            10: "-ум",
            12: "-ум",
            13: "-ум",
            20: "-ум",
            30: "-юм",
            40: "-ум",
            50: "-ум",
            60: "-ум",
            70: "-ум",
            80: "-ум",
            90: "-ум",
            100: "-ум"
        };
        e.defineLocale("tg", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
            weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
            weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Имрӯз соати] LT",
                nextDay: "[Пагоҳ соати] LT",
                lastDay: "[Дирӯз соати] LT",
                nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
                lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "баъди %s",
                past: "%s пеш",
                s: "якчанд сония",
                m: "як дақиқа",
                mm: "%d дақиқа",
                h: "як соат",
                hh: "%d соат",
                d: "як рӯз",
                dd: "%d рӯз",
                M: "як моҳ",
                MM: "%d моҳ",
                y: "як сол",
                yy: "%d сол"
            },
            meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? e >= 11 ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
            ordinal: function(e) {
                var n = e % 10,
                    r = e >= 100 ? 100 : null;
                return e + (t[e] || t[n] || t[r])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
            monthsParseExact: !0,
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา H:mm",
                LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function(e) {
                return "หลังเที่ยง" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
            },
            calendar: {
                sameDay: "[วันนี้ เวลา] LT",
                nextDay: "[พรุ่งนี้ เวลา] LT",
                nextWeek: "dddd[หน้า เวลา] LT",
                lastDay: "[เมื่อวานนี้ เวลา] LT",
                lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                ss: "%d วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

        function n(e, n, r, a) {
            var i = function(e) {
                var n = Math.floor(e % 1e3 / 100),
                    r = Math.floor(e % 100 / 10),
                    a = e % 10,
                    i = "";
                return n > 0 && (i += t[n] + "vatlh"), r > 0 && (i += ("" !== i ? " " : "") + t[r] + "maH"), a > 0 && (i += ("" !== i ? " " : "") + t[a]), "" === i ? "pagh" : i
            }(e);
            switch (r) {
                case "ss":
                    return i + " lup";
                case "mm":
                    return i + " tup";
                case "hh":
                    return i + " rep";
                case "dd":
                    return i + " jaj";
                case "MM":
                    return i + " jar";
                case "yy":
                    return i + " DIS"
            }
        }
        e.defineLocale("tlh", {
            months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
            monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
            monthsParseExact: !0,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[wa’leS] LT",
                nextWeek: "LLL",
                lastDay: "[wa’Hu’] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    var t = e;
                    return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
                },
                past: function(e) {
                    var t = e;
                    return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
                },
                s: "puS lup",
                ss: n,
                m: "wa’ tup",
                mm: n,
                h: "wa’ rep",
                hh: n,
                d: "wa’ jaj",
                dd: n,
                M: "wa’ jar",
                MM: n,
                y: "wa’ DIS",
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
        };
        e.defineLocale("tr", {
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[yarın saat] LT",
                nextWeek: "[gelecek] dddd [saat] LT",
                lastDay: "[dün] LT",
                lastWeek: "[geçen] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                ss: "%d saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            ordinal: function(e, n) {
                switch (n) {
                    case "d":
                    case "D":
                    case "Do":
                    case "DD":
                        return e;
                    default:
                        if (0 === e) return e + "'ıncı";
                        var r = e % 10,
                            a = e % 100 - r,
                            i = e >= 100 ? 100 : null;
                        return e + (t[r] || t[a] || t[i])
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, r) {
            var a = {
                s: ["viensas secunds", "'iensas secunds"],
                ss: [e + " secunds", e + " secunds"],
                m: ["'n míut", "'iens míut"],
                mm: [e + " míuts", e + " míuts"],
                h: ["'n þora", "'iensa þora"],
                hh: [e + " þoras", e + " þoras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [e + " ziuas", e + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [e + " mesen", e + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [e + " ars", e + " ars"]
            };
            return r ? a[n][0] : t ? a[n][0] : a[n][1]
        }
        e.defineLocale("tzl", {
            months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function(e) {
                return "d'o" === e.toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi à] LT",
                nextDay: "[demà à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[ieiri à] LT",
                lastWeek: "[sür el] dddd [lasteu à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("tzm", {
            months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                nextWeek: "dddd [ⴴ] LT",
                lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                lastWeek: "dddd [ⴴ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                past: "ⵢⴰⵏ %s",
                s: "ⵉⵎⵉⴽ",
                ss: "%d ⵉⵎⵉⴽ",
                m: "ⵎⵉⵏⵓⴺ",
                mm: "%d ⵎⵉⵏⵓⴺ",
                h: "ⵙⴰⵄⴰ",
                hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                d: "ⴰⵙⵙ",
                dd: "%d oⵙⵙⴰⵏ",
                M: "ⴰⵢoⵓⵔ",
                MM: "%d ⵉⵢⵢⵉⵔⵏ",
                y: "ⴰⵙⴳⴰⵙ",
                yy: "%d ⵉⵙⴳⴰⵙⵏ"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("tzm-latn", {
            months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                ss: "%d imik",
                m: "minuḍ",
                mm: "%d minuḍ",
                h: "saɛa",
                hh: "%d tassaɛin",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ug-cn", {
            months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
            monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
            weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
            weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
                LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
                LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
            },
            meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function(e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "يېرىم كېچە" : r < 900 ? "سەھەر" : r < 1130 ? "چۈشتىن بۇرۇن" : r < 1230 ? "چۈش" : r < 1800 ? "چۈشتىن كېيىن" : "كەچ"
            },
            calendar: {
                sameDay: "[بۈگۈن سائەت] LT",
                nextDay: "[ئەتە سائەت] LT",
                nextWeek: "[كېلەركى] dddd [سائەت] LT",
                lastDay: "[تۆنۈگۈن] LT",
                lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s كېيىن",
                past: "%s بۇرۇن",
                s: "نەچچە سېكونت",
                ss: "%d سېكونت",
                m: "بىر مىنۇت",
                mm: "%d مىنۇت",
                h: "بىر سائەت",
                hh: "%d سائەت",
                d: "بىر كۈن",
                dd: "%d كۈن",
                M: "بىر ئاي",
                MM: "%d ئاي",
                y: "بىر يىل",
                yy: "%d يىل"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "-كۈنى";
                    case "w":
                    case "W":
                        return e + "-ھەپتە";
                    default:
                        return e
                }
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var r, a, i = {
                ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                hh: t ? "година_години_годин" : "годину_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            };
            return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + (r = +e, a = i[n].split("_"), r % 10 == 1 && r % 100 != 11 ? a[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? a[1] : a[2])
        }

        function n(e) {
            return function() {
                return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
            }
        }
        e.defineLocale("uk", {
            months: {
                format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
            },
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: function(e, t) {
                var n = {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                };
                if (!0 === e) return n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1));
                if (!e) return n.nominative;
                var r = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
                return n[r][e.day()]
            },
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY р.",
                LLL: "D MMMM YYYY р., HH:mm",
                LLLL: "dddd, D MMMM YYYY р., HH:mm"
            },
            calendar: {
                sameDay: n("[Сьогодні "),
                nextDay: n("[Завтра "),
                lastDay: n("[Вчора "),
                nextWeek: n("[У] dddd ["),
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return n("[Минулої] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return n("[Минулого] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "%s тому",
                s: "декілька секунд",
                ss: t,
                m: t,
                mm: t,
                h: "годину",
                hh: t,
                d: "день",
                dd: t,
                M: "місяць",
                MM: t,
                y: "рік",
                yy: t
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function(e) {
                return /^(дня|вечора)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
            n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
        e.defineLocale("ur", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function(e) {
                return "شام" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[آج بوقت] LT",
                nextDay: "[کل بوقت] LT",
                nextWeek: "dddd [بوقت] LT",
                lastDay: "[گذشتہ روز بوقت] LT",
                lastWeek: "[گذشتہ] dddd [بوقت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s بعد",
                past: "%s قبل",
                s: "چند سیکنڈ",
                ss: "%d سیکنڈ",
                m: "ایک منٹ",
                mm: "%d منٹ",
                h: "ایک گھنٹہ",
                hh: "%d گھنٹے",
                d: "ایک دن",
                dd: "%d دن",
                M: "ایک ماہ",
                MM: "%d ماہ",
                y: "ایک سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("uz", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Бугун соат] LT [да]",
                nextDay: "[Эртага] LT [да]",
                nextWeek: "dddd [куни соат] LT [да]",
                lastDay: "[Кеча соат] LT [да]",
                lastWeek: "[Утган] dddd [куни соат] LT [да]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "Бир неча %s олдин",
                s: "фурсат",
                ss: "%d фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("uz-latn", {
            months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
            monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
            weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Bugun soat] LT [da]",
                nextDay: "[Ertaga] LT [da]",
                nextWeek: "dddd [kuni soat] LT [da]",
                lastDay: "[Kecha soat] LT [da]",
                lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Yaqin %s ichida",
                past: "Bir necha %s oldin",
                s: "soniya",
                ss: "%d soniya",
                m: "bir daqiqa",
                mm: "%d daqiqa",
                h: "bir soat",
                hh: "%d soat",
                d: "bir kun",
                dd: "%d kun",
                M: "bir oy",
                MM: "%d oy",
                y: "bir yil",
                yy: "%d yil"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("vi", {
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            monthsParseExact: !0,
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function(e) {
                return /^ch$/i.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hôm nay lúc] LT",
                nextDay: "[Ngày mai lúc] LT",
                nextWeek: "dddd [tuần tới lúc] LT",
                lastDay: "[Hôm qua lúc] LT",
                lastWeek: "dddd [tuần rồi lúc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                ss: "%d giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("x-pseudo", {
            months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
            monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
            monthsParseExact: !0,
            weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
            weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
            weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~ódá~ý át] LT",
                nextDay: "[T~ómó~rró~w át] LT",
                nextWeek: "dddd [át] LT",
                lastDay: "[Ý~ést~érdá~ý át] LT",
                lastWeek: "[L~ást] dddd [át] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "í~ñ %s",
                past: "%s á~gó",
                s: "á ~féw ~sécó~ñds",
                ss: "%d s~écóñ~ds",
                m: "á ~míñ~úté",
                mm: "%d m~íñú~tés",
                h: "á~ñ hó~úr",
                hh: "%d h~óúrs",
                d: "á ~dáý",
                dd: "%d d~áýs",
                M: "á ~móñ~th",
                MM: "%d m~óñt~hs",
                y: "á ~ýéár",
                yy: "%d ý~éárs"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("yo", {
            months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
            monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
            weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
            weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
            weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Ònì ni] LT",
                nextDay: "[Ọ̀la ni] LT",
                nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                lastDay: "[Àna ni] LT",
                lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ní %s",
                past: "%s kọjá",
                s: "ìsẹjú aayá die",
                ss: "aayá %d",
                m: "ìsẹjú kan",
                mm: "ìsẹjú %d",
                h: "wákati kan",
                hh: "wákati %d",
                d: "ọjọ́ kan",
                dd: "ọjọ́ %d",
                M: "osù kan",
                MM: "osù %d",
                y: "ọdún kan",
                yy: "ọdún %d"
            },
            dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
            ordinal: "ọjọ́ %d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("zh-cn", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日Ah点mm分",
                LLLL: "YYYY年M月D日ddddAh点mm分",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function(e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "周";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s内",
                past: "%s前",
                s: "几秒",
                ss: "%d 秒",
                m: "1 分钟",
                mm: "%d 分钟",
                h: "1 小时",
                hh: "%d 小时",
                d: "1 天",
                dd: "%d 天",
                M: "1 个月",
                MM: "%d 个月",
                y: "1 年",
                yy: "%d 年"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("zh-hk", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    }(n(1))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天] LT",
                nextDay: "[明天] LT",
                nextWeek: "[下]dddd LT",
                lastDay: "[昨天] LT",
                lastWeek: "[上]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    }(n(1))
}, , , function(e, t, n) {
    "use strict";
    var r = n(153),
        a = n(98),
        i = (n(554), n(2)),
        s = Object(i.a)(a.default, r.a, r.b, !1, null, null, null);
    t.default = s.exports
}, function(e, t, n) {
    var r = n(559),
        a = n(560),
        i = n(561);
    e.exports = function(e, t) {
        return r(e) || a(e, t) || i()
    }
}, function(e, t, n) {
    e.exports = function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 0)
    }([function(e, t, n) {
        "use strict";

        function r(e) {
            ! function e(t, n) {
                return Object.keys(n).forEach(function(r) {
                    var a = t[r] && Object.prototype.toString.call(t[r]);
                    "[object Object]" !== a && "[object Array]" !== a ? t[r] = n[r] : e(t[r], n[r])
                }), t
            }(v, e)
        }

        function a() {
            return v.id ? [].concat(v.id) : []
        }

        function i() {}

        function s() {
            return !(g.checkDuplicatedScript && Array.prototype.slice.call(document.getElementsByTagName("script")).filter(function(e) {
                return -1 !== e.src.indexOf("analytics") || -1 !== e.src.indexOf("gtag")
            }).length > 0)
        }

        function o(e) {
            return e.name || e.replace(/-/gi, "")
        }

        function u(e, t) {
            return a().length > 1 ? o(t) + "." + e : e
        }

        function d(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            "undefined" != typeof window && a().forEach(function(t) {
                var r, a = {
                    m: u(e, t),
                    a: n
                };
                window.ga ? g.batch.enabled ? (Y.push(a), L || (L = setInterval(function() {
                    Y.length ? Y.splice(0, g.batch.amount).forEach(function(e) {
                        var t;
                        (t = window).ga.apply(t, [e.m].concat(function(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                return n
                            }
                            return Array.from(e)
                        }(e.a)))
                    }) : (clearInterval(L), L = null)
                }, g.batch.delay))) : (r = window).ga.apply(r, [u(e, t)].concat(n)) : g.untracked.push(a)
            })
        }

        function l() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            "object" != typeof t[0] || t[0].constructor !== Object ? d("set", t[0], t[1]) : d("set", t[0])
        }

        function c() {
            var e = a();
            g.debug.enabled && (window.ga_debug = {
                trace: g.debug.trace
            }), e.forEach(function(t) {
                var n = o(t),
                    r = g.customIdFields[t] || {},
                    a = e.length > 1 ? b({}, g.fields, r, {
                        name: n
                    }) : g.fields;
                window.ga("create", t.id || t, "auto", a)
            }), g.beforeFirstHit();
            var t = g.ecommerce;
            if (t.enabled) {
                var n = t.enhanced ? "ec" : "ecommerce";
                t.options ? d("require", n, t.options) : d("require", n)
            }
            g.linkers.length > 0 && (d("require", "linker"), d("linker:autoLink", g.linkers)), g.debug.sendHitTask || l("sendHitTask", null)
        }

        function _() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r = t[0];
            if (1 === t.length && "string" == typeof r) return d("send", "screenview", {
                screenName: r
            });
            d.apply(void 0, ["send", "screenview"].concat(t))
        }

        function m() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            if (!t.length || t[0]) {
                var r = void 0;
                t.length && function(e) {
                    return e.currentRoute
                }(t[0]) && (r = t[0].currentRoute), t.length && function(e) {
                    return e.query && e.params
                }(t[0]) && (r = t[0]), r ? f(r) : (l("page", "object" == typeof t[0] ? t[0].page : t[0]), d.apply(void 0, ["send", "pageview"].concat(t)))
            }
        }

        function f(e) {
            if (! function(e) {
                    return [e.name, e.path].filter(Boolean).find(function(e) {
                        return -1 !== g.ignoreRoutes.indexOf(e)
                    })
                }(e)) {
                var t = g.autoTracking,
                    n = e.meta.analytics,
                    r = void 0 === n ? {} : n,
                    a = r.pageviewTemplate || t.pageviewTemplate;
                if (t.screenview && !e.name) throw new Error("[vue-analytics] Route name is mandatory when using screenview.");
                if (t.screenview) return void _(e.name);
                if (a) m(a(e));
                else {
                    var i = g.router,
                        s = g.autoTracking,
                        o = s.transformQueryString,
                        u = s.prependBase,
                        d = function(e) {
                            var t = Object.keys(e).reduce(function(t, n, r, a) {
                                var i = r === a.length - 1;
                                return t += n + "=" + e[n] + (i ? "" : "&")
                            }, "");
                            return "" !== t ? "?" + t : ""
                        }(e.query),
                        l = i && i.options.base,
                        c = u && l,
                        f = e.path + (o ? d : "");
                    m(f = c ? function(e, t) {
                        var n = t.split("/"),
                            r = e.split("/");
                        return "" === n[0] && "/" === e[e.length - 1] && n.shift(), r.join("/") + n.join("/")
                    }(l, f) : f)
                }
            }
        }

        function h(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var p = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            y = {
                $vue: null,
                id: null,
                router: null,
                fields: {},
                customIdFields: {},
                ignoreRoutes: [],
                linkers: [],
                commands: {},
                disabled: !1,
                customResourceURL: null,
                set: [],
                require: [],
                ecommerce: {
                    enabled: !1,
                    options: null,
                    enhanced: !1
                },
                autoTracking: {
                    screenview: !1,
                    shouldRouterUpdate: null,
                    skipSamePath: !1,
                    exception: !1,
                    exceptionLogs: !0,
                    page: !0,
                    transformQueryString: !0,
                    pageviewOnLoad: !0,
                    pageviewTemplate: null,
                    untracked: !0,
                    prependBase: !0
                },
                debug: {
                    enabled: !1,
                    trace: !1,
                    sendHitTask: !0
                },
                batch: {
                    enabled: !1,
                    delay: 500,
                    amount: 2
                },
                checkDuplicatedScript: !1,
                disableScriptLoader: !1,
                beforeFirstHit: i,
                ready: i,
                untracked: []
            },
            v = p({}, y),
            g = v,
            M = function(e) {
                if (e.then) return e;
                if ("function" == typeof e) {
                    var t = e();
                    return t.then ? t : Promise.resolve(t)
                }
                return Promise.resolve(e)
            },
            L = void 0,
            Y = [],
            b = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            w = function() {
                2 != arguments.length ? d("require", arguments.length <= 0 ? void 0 : arguments[0]) : d("require", arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1])
            },
            k = function() {
                g.set.forEach(function(e) {
                        var t = e.field,
                            n = e.value;
                        if (void 0 === t || void 0 === n) throw new Error('[vue-analytics] Wrong configuration in the plugin options.\nThe "set" array requires each item to have a "field" and a "value" property.');
                        l(t, n)
                    }),
                    function() {
                        var e = ["ec", "ecommerce"];
                        g.require.forEach(function(t) {
                            if (-1 !== e.indexOf(t) || -1 !== e.indexOf(t.name)) throw new Error("[vue-analytics] The ecommerce features are built-in in the plugin. \nFollow the ecommerce instructions available in the documentation.");
                            if ("string" != typeof t && "object" != typeof t) throw new Error('[vue-analytics] Wrong configuration in the plugin options. \nThe "require" array requires each item to be a string or to have a "name" and an "options" property.');
                            var n = t.name || t;
                            t.options ? w(n, t.options) : w(n)
                        })
                    }()
            },
            D = function() {
                g.untracked.forEach(function(e) {
                    d.apply(void 0, [e.m].concat(function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                            return n
                        }
                        return Array.from(e)
                    }(e.a)))
                })
            },
            T = function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                "undefined" != typeof window && a().forEach(function(t) {
                    window["ga-disable-" + t] = e
                })
            },
            S = function() {
                if ("undefined" != typeof document && "undefined" != typeof window) {
                    var e = g.disableScriptLoader,
                        t = g.ready,
                        n = g.debug.enabled ? "analytics_debug" : "analytics",
                        a = g.customResourceURL || "https://www.google-analytics.com/" + n + ".js";
                    if (!g.id) throw new Error('[vue-analytics] Missing the "id" parameter. Add at least one tracking domain ID');
                    var i = [M(g.id), M(g.disabled)];
                    return !s() || window.ga && e || i.push(function(e) {
                        return new Promise(function(t, n) {
                            var r = document.head || document.getElementsByTagName("head")[0],
                                a = document.createElement("script");
                            a.async = !0, a.src = e, a.charset = "utf-8", r.appendChild(a), a.onload = t, a.onerror = n
                        })
                    }(a).catch(function() {
                        throw new Error("[vue-analytics] An error occured! Please check your connection, if you have any Google Analytics blocker installed in your browser or check your custom resource URL if you have added any.")
                    })), Promise.all(i).then(function(e) {
                        r({
                                id: e[0],
                                disabled: e[1]
                            }), T(g.disabled), c(), k(), D(),
                            function() {
                                var e = g.router,
                                    t = g.autoTracking;
                                t.page && e && (t.pageviewOnLoad && e.history.ready && f(e.currentRoute), g.router.afterEach(function(n, r) {
                                    var a = t.skipSamePath,
                                        i = t.shouldRouterUpdate;
                                    a && n.path === r.path || ("function" != typeof i || i(n, r)) && g.$vue.nextTick().then(function() {
                                        f(e.currentRoute)
                                    })
                                }))
                            }(), t()
                    }).catch(function(e) {
                        console.error(e.message)
                    })
                }
            },
            x = this,
            j = function(e) {
                d("send", "exception", {
                    exDescription: e,
                    exFatal: arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                })
            },
            A = function(e) {
                if (g.autoTracking.exception) {
                    window.addEventListener("error", function(e) {
                        j(e.message)
                    });
                    var t = e.config.errorHandler;
                    e.config.errorHandler = function(e, n, r) {
                        j(e.message), g.autoTracking.exceptionLogs && (console.error("[vue-analytics] Error in " + r + ": " + e.message), console.error(e)), "function" == typeof t && t.call(x, e, n, r)
                    }
                }
            },
            O = j,
            H = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            E = function(e) {
                return (g.ecommerce.enhanced ? "ec" : "ecommerce") + ":" + e
            },
            P = ["addItem", "addTransaction", "addProduct", "addImpression", "setAction", "addPromo", "send"].reduce(function(e, t) {
                return H({}, e, function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }({}, t, function() {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    d.apply(void 0, [E(t)].concat(n))
                }))
            }, {}),
            C = {
                event: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    d.apply(void 0, ["send", "event"].concat(t))
                },
                exception: O,
                page: m,
                query: d,
                require: w,
                set: l,
                social: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    d.apply(void 0, ["send", "social"].concat(t))
                },
                time: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    d.apply(void 0, ["send", "timing"].concat(t))
                },
                screenview: _,
                ecommerce: P,
                disable: function() {
                    return T(!0)
                },
                enable: function() {
                    return T(!1)
                },
                commands: g.commands
            },
            $ = {
                inserted: function(e, t, n) {
                    var r = Object.keys(t.modifiers);
                    0 === r.length && r.push("click"), r.forEach(function(r) {
                        e.addEventListener(r, function() {
                            var e = "string" == typeof t.value ? g.commands[t.value] : t.value;
                            if (!e) throw new Error("[vue-analytics] The value passed to v-ga is not defined in the commands list.");
                            e.apply(n.context)
                        })
                    })
                }
            },
            F = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            !r && o.return && o.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            };
        t.default = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            r(W({}, t, {
                $vue: e
            })), e.directive("ga", $), e.prototype.$ga = e.$ga = C, A(e), S()
        }, n.d(t, "analyticsMiddleware", function() {
            return N
        }), n.d(t, "onAnalyticsReady", function() {
            return z
        }), n.d(t, "event", function() {
            return R
        }), n.d(t, "ecommerce", function() {
            return I
        }), n.d(t, "set", function() {
            return U
        }), n.d(t, "page", function() {
            return q
        }), n.d(t, "query", function() {
            return J
        }), n.d(t, "screenview", function() {
            return B
        }), n.d(t, "time", function() {
            return V
        }), n.d(t, "require", function() {
            return G
        }), n.d(t, "exception", function() {
            return K
        }), n.d(t, "social", function() {
            return Z
        });
        var W = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            N = function(e) {
                e.subscribe(function(e) {
                    var t = e.payload;
                    if (t && t.meta && t.meta.analytics) {
                        var n = t.meta.analytics;
                        if (!Array.isArray(n)) throw new Error('The "analytics" property needs to be an array');
                        n.forEach(function(e) {
                            var t, n = void 0,
                                r = e.shift(),
                                a = e;
                            if (r.includes(":")) {
                                var i = r.split(":"),
                                    s = F(i, 2);
                                r = s[0], n = s[1]
                            }
                            if (!(r in C)) throw new Error('[vue-analytics:vuex] The type "' + r + "\" doesn't exist.");
                            if (n && !(n in C[r])) throw new Error('[vue-analytics:vuex] The type "' + r + '" has not method "' + n + '".');
                            if ("ecommerce" === r && !n) throw new Error('[vue-analytics:vuex] The type "' + r + '" needs to call a method. Check documentation.');
                            n ? (t = C[r])[n].apply(t, h(a)) : C[r].apply(C, h(a))
                        })
                    }
                })
            },
            z = function() {
                return new Promise(function(e, t) {
                    var n = setInterval(function() {
                        "undefined" != typeof window && window.ga && (e(), clearInterval(n))
                    }, 10)
                })
            },
            R = C.event,
            I = C.ecommerce,
            U = C.set,
            q = C.page,
            J = C.query,
            B = C.screenview,
            V = C.time,
            G = C.require,
            K = C.exception,
            Z = C.social
    }])
}, function(e, t, n) {
    var r = n(610),
        a = {
            autoSetContainer: !1,
            appendToBody: !0
        },
        i = {
            install: function(e) {
                e.prototype.$clipboardConfig = a, e.prototype.$copyText = function(e, t) {
                    return new Promise(function(n, i) {
                        var s = document.createElement("button"),
                            o = new r(s, {
                                text: function() {
                                    return e
                                },
                                action: function() {
                                    return "copy"
                                },
                                container: "object" == typeof t ? t : document.body
                            });
                        o.on("success", function(e) {
                            o.destroy(), n(e)
                        }), o.on("error", function(e) {
                            o.destroy(), i(e)
                        }), a.appendToBody && document.body.appendChild(s), s.click(), a.appendToBody && document.body.removeChild(s)
                    })
                }, e.directive("clipboard", {
                    bind: function(e, t, n) {
                        if ("success" === t.arg) e._vClipboard_success = t.value;
                        else if ("error" === t.arg) e._vClipboard_error = t.value;
                        else {
                            var i = new r(e, {
                                text: function() {
                                    return t.value
                                },
                                action: function() {
                                    return "cut" === t.arg ? "cut" : "copy"
                                },
                                container: a.autoSetContainer ? e : void 0
                            });
                            i.on("success", function(t) {
                                var n = e._vClipboard_success;
                                n && n(t)
                            }), i.on("error", function(t) {
                                var n = e._vClipboard_error;
                                n && n(t)
                            }), e._vClipboard = i
                        }
                    },
                    update: function(e, t) {
                        "success" === t.arg ? e._vClipboard_success = t.value : "error" === t.arg ? e._vClipboard_error = t.value : (e._vClipboard.text = function() {
                            return t.value
                        }, e._vClipboard.action = function() {
                            return "cut" === t.arg ? "cut" : "copy"
                        })
                    },
                    unbind: function(e, t) {
                        "success" === t.arg ? delete e._vClipboard_success : "error" === t.arg ? delete e._vClipboard_error : (e._vClipboard.destroy(), delete e._vClipboard)
                    }
                })
            },
            config: a
        };
    e.exports = i
}, function(e, t, n) {
    e.exports = function() {
        "use strict";
        /**!
         * @fileOverview Kickass library to create and place poppers near their reference elements.
         * @version 1.12.5
         * @license
         * Copyright (c) 2016 Federico Zivolo and contributors
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in all
         * copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
         * SOFTWARE.
         */
        for (var e = ["native code", "[object MutationObserverConstructor]"], t = "undefined" != typeof window, n = ["Edge", "Trident", "Firefox"], r = 0, a = 0; a < n.length; a += 1)
            if (t && navigator.userAgent.indexOf(n[a]) >= 0) {
                r = 1;
                break
            }
        var i, s = t && (i = window.MutationObserver, e.some(function(e) {
            return (i || "").toString().indexOf(e) > -1
        })) ? function(e) {
            var t = !1,
                n = 0,
                r = document.createElement("span");
            return new MutationObserver(function() {
                    e(), t = !1
                }).observe(r, {
                    attributes: !0
                }),
                function() {
                    t || (t = !0, r.setAttribute("x-index", n), n += 1)
                }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, r))
            }
        };

        function o(e) {
            return e && "[object Function]" === {}.toString.call(e)
        }

        function u(e, t) {
            if (1 !== e.nodeType) return [];
            var n = window.getComputedStyle(e, null);
            return t ? n[t] : n
        }

        function d(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host
        }

        function l(e) {
            if (!e || -1 !== ["HTML", "BODY", "#document"].indexOf(e.nodeName)) return window.document.body;
            var t = u(e),
                n = t.overflow,
                r = t.overflowX,
                a = t.overflowY;
            return /(auto|scroll)/.test(n + a + r) ? e : l(d(e))
        }

        function c(e) {
            var t = e && e.offsetParent,
                n = t && t.nodeName;
            return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(t.nodeName) && "static" === u(t, "position") ? c(t) : t : window.document.documentElement
        }

        function _(e) {
            return null !== e.parentNode ? _(e.parentNode) : e
        }

        function m(e, t) {
            if (!(e && e.nodeType && t && t.nodeType)) return window.document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                r = n ? e : t,
                a = n ? t : e,
                i = document.createRange();
            i.setStart(r, 0), i.setEnd(a, 0);
            var s, o, u = i.commonAncestorContainer;
            if (e !== u && t !== u || r.contains(a)) return "BODY" === (o = (s = u).nodeName) || "HTML" !== o && c(s.firstElementChild) !== s ? c(u) : u;
            var d = _(e);
            return d.host ? m(d.host, t) : m(e, _(t).host)
        }

        function f(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                n = "top" === t ? "scrollTop" : "scrollLeft",
                r = e.nodeName;
            if ("BODY" === r || "HTML" === r) {
                var a = window.document.documentElement,
                    i = window.document.scrollingElement || a;
                return i[n]
            }
            return e[n]
        }

        function h(e, t) {
            var n = "x" === t ? "Left" : "Top",
                r = "Left" === n ? "Right" : "Bottom";
            return +e["border" + n + "Width"].split("px")[0] + +e["border" + r + "Width"].split("px")[0]
        }
        var p = void 0,
            y = function() {
                return void 0 === p && (p = -1 !== navigator.appVersion.indexOf("MSIE 10")), p
            };

        function v(e, t, n, r) {
            return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], y() ? n["offset" + e] + r["margin" + ("Height" === e ? "Top" : "Left")] + r["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
        }

        function g() {
            var e = window.document.body,
                t = window.document.documentElement,
                n = y() && window.getComputedStyle(t);
            return {
                height: v("Height", e, t, n),
                width: v("Width", e, t, n)
            }
        }
        var M = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            },
            L = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            Y = function(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            },
            b = Object.assign || function(e) {
                for (var t = arguments, n = 1; n < arguments.length; n++) {
                    var r = t[n];
                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                }
                return e
            };

        function w(e) {
            return b({}, e, {
                right: e.left + e.width,
                bottom: e.top + e.height
            })
        }

        function k(e) {
            var t = {};
            if (y()) try {
                t = e.getBoundingClientRect();
                var n = f(e, "top"),
                    r = f(e, "left");
                t.top += n, t.left += r, t.bottom += n, t.right += r
            } catch (e) {} else t = e.getBoundingClientRect();
            var a = {
                    left: t.left,
                    top: t.top,
                    width: t.right - t.left,
                    height: t.bottom - t.top
                },
                i = "HTML" === e.nodeName ? g() : {},
                s = i.width || e.clientWidth || a.right - a.left,
                o = i.height || e.clientHeight || a.bottom - a.top,
                d = e.offsetWidth - s,
                l = e.offsetHeight - o;
            if (d || l) {
                var c = u(e);
                d -= h(c, "x"), l -= h(c, "y"), a.width -= d, a.height -= l
            }
            return w(a)
        }

        function D(e, t) {
            var n = y(),
                r = "HTML" === t.nodeName,
                a = k(e),
                i = k(t),
                s = l(e),
                o = u(t),
                d = +o.borderTopWidth.split("px")[0],
                c = +o.borderLeftWidth.split("px")[0],
                _ = w({
                    top: a.top - i.top - d,
                    left: a.left - i.left - c,
                    width: a.width,
                    height: a.height
                });
            if (_.marginTop = 0, _.marginLeft = 0, !n && r) {
                var m = +o.marginTop.split("px")[0],
                    h = +o.marginLeft.split("px")[0];
                _.top -= d - m, _.bottom -= d - m, _.left -= c - h, _.right -= c - h, _.marginTop = m, _.marginLeft = h
            }
            return (n ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (_ = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = f(t, "top"),
                    a = f(t, "left"),
                    i = n ? -1 : 1;
                return e.top += r * i, e.bottom += r * i, e.left += a * i, e.right += a * i, e
            }(_, t)), _
        }

        function T(e, t, n, r) {
            var a = {
                    top: 0,
                    left: 0
                },
                i = m(e, t);
            if ("viewport" === r) a = function(e) {
                var t = window.document.documentElement,
                    n = D(e, t),
                    r = Math.max(t.clientWidth, window.innerWidth || 0),
                    a = Math.max(t.clientHeight, window.innerHeight || 0),
                    i = f(t),
                    s = f(t, "left");
                return w({
                    top: i - n.top + n.marginTop,
                    left: s - n.left + n.marginLeft,
                    width: r,
                    height: a
                })
            }(i);
            else {
                var s = void 0;
                "scrollParent" === r ? "BODY" === (s = l(d(e))).nodeName && (s = window.document.documentElement) : s = "window" === r ? window.document.documentElement : r;
                var o = D(s, i);
                if ("HTML" !== s.nodeName || function e(t) {
                        var n = t.nodeName;
                        return "BODY" !== n && "HTML" !== n && ("fixed" === u(t, "position") || e(d(t)))
                    }(i)) a = o;
                else {
                    var c = g(),
                        _ = c.height,
                        h = c.width;
                    a.top += o.top - o.marginTop, a.bottom = _ + o.top, a.left += o.left - o.marginLeft, a.right = h + o.left
                }
            }
            return a.left += n, a.top += n, a.right -= n, a.bottom -= n, a
        }

        function S(e, t, n, r, a) {
            var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto")) return e;
            var s = T(n, r, i, a),
                o = {
                    top: {
                        width: s.width,
                        height: t.top - s.top
                    },
                    right: {
                        width: s.right - t.right,
                        height: s.height
                    },
                    bottom: {
                        width: s.width,
                        height: s.bottom - t.bottom
                    },
                    left: {
                        width: t.left - s.left,
                        height: s.height
                    }
                },
                u = Object.keys(o).map(function(e) {
                    return b({
                        key: e
                    }, o[e], {
                        area: (t = o[e], n = t.width, r = t.height, n * r)
                    });
                    var t, n, r
                }).sort(function(e, t) {
                    return t.area - e.area
                }),
                d = u.filter(function(e) {
                    var t = e.width,
                        r = e.height;
                    return t >= n.clientWidth && r >= n.clientHeight
                }),
                l = d.length > 0 ? d[0].key : u[0].key,
                c = e.split("-")[1];
            return l + (c ? "-" + c : "")
        }

        function x(e, t, n) {
            var r = m(t, n);
            return D(n, r)
        }

        function j(e) {
            var t = window.getComputedStyle(e),
                n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
                r = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
                a = {
                    width: e.offsetWidth + r,
                    height: e.offsetHeight + n
                };
            return a
        }

        function A(e) {
            var t = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
            return e.replace(/left|right|bottom|top/g, function(e) {
                return t[e]
            })
        }

        function O(e, t, n) {
            n = n.split("-")[0];
            var r = j(e),
                a = {
                    width: r.width,
                    height: r.height
                },
                i = -1 !== ["right", "left"].indexOf(n),
                s = i ? "top" : "left",
                o = i ? "left" : "top",
                u = i ? "height" : "width",
                d = i ? "width" : "height";
            return a[s] = t[s] + t[u] / 2 - r[u] / 2, a[o] = n === o ? t[o] - r[d] : t[A(o)], a
        }

        function H(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0]
        }

        function E(e, t, n) {
            var r = void 0 === n ? e : e.slice(0, function(e, t, n) {
                if (Array.prototype.findIndex) return e.findIndex(function(e) {
                    return e[t] === n
                });
                var r = H(e, function(e) {
                    return e[t] === n
                });
                return e.indexOf(r)
            }(e, "name", n));
            return r.forEach(function(e) {
                e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var n = e.function || e.fn;
                e.enabled && o(n) && (t.offsets.popper = w(t.offsets.popper), t.offsets.reference = w(t.offsets.reference), t = n(t, e))
            }), t
        }

        function P(e, t) {
            return e.some(function(e) {
                var n = e.name,
                    r = e.enabled;
                return r && n === t
            })
        }

        function C(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length - 1; r++) {
                var a = t[r],
                    i = a ? "" + a + n : e;
                if (void 0 !== window.document.body.style[i]) return i
            }
            return null
        }

        function $(e, t, n, r) {
            n.updateBound = r, window.addEventListener("resize", n.updateBound, {
                passive: !0
            });
            var a = l(e);
            return function e(t, n, r, a) {
                var i = "BODY" === t.nodeName,
                    s = i ? window : t;
                s.addEventListener(n, r, {
                    passive: !0
                }), i || e(l(s.parentNode), n, r, a), a.push(s)
            }(a, "scroll", n.updateBound, n.scrollParents), n.scrollElement = a, n.eventsEnabled = !0, n
        }

        function F() {
            var e;
            this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = (this.reference, e = this.state, window.removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) {
                t.removeEventListener("scroll", e.updateBound)
            }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
        }

        function W(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
        }

        function N(e, t) {
            Object.keys(t).forEach(function(n) {
                var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && W(t[n]) && (r = "px"), e.style[n] = t[n] + r
            })
        }

        function z(e, t, n) {
            var r = H(e, function(e) {
                    var n = e.name;
                    return n === t
                }),
                a = !!r && e.some(function(e) {
                    return e.name === n && e.enabled && e.order < r.order
                });
            if (!a) {
                var i = "`" + t + "`",
                    s = "`" + n + "`";
                console.warn(s + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")
            }
            return a
        }
        var R = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            I = R.slice(3);

        function U(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = I.indexOf(e),
                r = I.slice(n + 1).concat(I.slice(0, n));
            return t ? r.reverse() : r
        }
        var q = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise"
        };

        function J(e, t, n, r) {
            var a = [0, 0],
                i = -1 !== ["right", "left"].indexOf(r),
                s = e.split(/(\+|\-)/).map(function(e) {
                    return e.trim()
                }),
                o = s.indexOf(H(s, function(e) {
                    return -1 !== e.search(/,|\s/)
                }));
            s[o] && -1 === s[o].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var u = /\s*,\s*|\s+/,
                d = -1 !== o ? [s.slice(0, o).concat([s[o].split(u)[0]]), [s[o].split(u)[1]].concat(s.slice(o + 1))] : [s];
            return (d = d.map(function(e, r) {
                var a = (1 === r ? !i : i) ? "height" : "width",
                    s = !1;
                return e.reduce(function(e, t) {
                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
                }, []).map(function(e) {
                    return function(e, t, n, r) {
                        var a = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                            i = +a[1],
                            s = a[2];
                        if (!i) return e;
                        if (0 === s.indexOf("%")) {
                            var o = void 0;
                            switch (s) {
                                case "%p":
                                    o = n;
                                    break;
                                case "%":
                                case "%r":
                                default:
                                    o = r
                            }
                            var u = w(o);
                            return u[t] / 100 * i
                        }
                        return "vh" === s || "vw" === s ? ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i : i
                    }(e, a, t, n)
                })
            })).forEach(function(e, t) {
                e.forEach(function(n, r) {
                    W(n) && (a[t] += n * ("-" === e[r - 1] ? -1 : 1))
                })
            }), a
        }
        var B = {
                placement: "bottom",
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function() {},
                onUpdate: function() {},
                modifiers: {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: function(e) {
                            var t = e.placement,
                                n = t.split("-")[0],
                                r = t.split("-")[1];
                            if (r) {
                                var a = e.offsets,
                                    i = a.reference,
                                    s = a.popper,
                                    o = -1 !== ["bottom", "top"].indexOf(n),
                                    u = o ? "left" : "top",
                                    d = o ? "width" : "height",
                                    l = {
                                        start: Y({}, u, i[u]),
                                        end: Y({}, u, i[u] + i[d] - s[d])
                                    };
                                e.offsets.popper = b({}, s, l[r])
                            }
                            return e
                        }
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: function(e, t) {
                            var n = t.offset,
                                r = e.placement,
                                a = e.offsets,
                                i = a.popper,
                                s = a.reference,
                                o = r.split("-")[0],
                                u = void 0;
                            return u = W(+n) ? [+n, 0] : J(n, i, s, o), "left" === o ? (i.top += u[0], i.left -= u[1]) : "right" === o ? (i.top += u[0], i.left += u[1]) : "top" === o ? (i.left += u[0], i.top -= u[1]) : "bottom" === o && (i.left += u[0], i.top += u[1]), e.popper = i, e
                        },
                        offset: 0
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: function(e, t) {
                            var n = t.boundariesElement || c(e.instance.popper);
                            e.instance.reference === n && (n = c(n));
                            var r = T(e.instance.popper, e.instance.reference, t.padding, n);
                            t.boundaries = r;
                            var a = t.priority,
                                i = e.offsets.popper,
                                s = {
                                    primary: function(e) {
                                        var n = i[e];
                                        return i[e] < r[e] && !t.escapeWithReference && (n = Math.max(i[e], r[e])), Y({}, e, n)
                                    },
                                    secondary: function(e) {
                                        var n = "right" === e ? "left" : "top",
                                            a = i[n];
                                        return i[e] > r[e] && !t.escapeWithReference && (a = Math.min(i[n], r[e] - ("right" === e ? i.width : i.height))), Y({}, n, a)
                                    }
                                };
                            return a.forEach(function(e) {
                                var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                i = b({}, i, s[t](e))
                            }), e.offsets.popper = i, e
                        },
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent"
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: function(e) {
                            var t = e.offsets,
                                n = t.popper,
                                r = t.reference,
                                a = e.placement.split("-")[0],
                                i = Math.floor,
                                s = -1 !== ["top", "bottom"].indexOf(a),
                                o = s ? "right" : "bottom",
                                u = s ? "left" : "top",
                                d = s ? "width" : "height";
                            return n[o] < i(r[u]) && (e.offsets.popper[u] = i(r[u]) - n[d]), n[u] > i(r[o]) && (e.offsets.popper[u] = i(r[o])), e
                        }
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: function(e, t) {
                            if (!z(e.instance.modifiers, "arrow", "keepTogether")) return e;
                            var n = t.element;
                            if ("string" == typeof n) {
                                if (!(n = e.instance.popper.querySelector(n))) return e
                            } else if (!e.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                            var r = e.placement.split("-")[0],
                                a = e.offsets,
                                i = a.popper,
                                s = a.reference,
                                o = -1 !== ["left", "right"].indexOf(r),
                                d = o ? "height" : "width",
                                l = o ? "Top" : "Left",
                                c = l.toLowerCase(),
                                _ = o ? "left" : "top",
                                m = o ? "bottom" : "right",
                                f = j(n)[d];
                            s[m] - f < i[c] && (e.offsets.popper[c] -= i[c] - (s[m] - f)), s[c] + f > i[m] && (e.offsets.popper[c] += s[c] + f - i[m]);
                            var h = s[c] + s[d] / 2 - f / 2,
                                p = u(e.instance.popper, "margin" + l).replace("px", ""),
                                y = h - w(e.offsets.popper)[c] - p;
                            return y = Math.max(Math.min(i[d] - f, y), 0), e.arrowElement = n, e.offsets.arrow = {}, e.offsets.arrow[c] = Math.round(y), e.offsets.arrow[_] = "", e
                        },
                        element: "[x-arrow]"
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: function(e, t) {
                            if (P(e.instance.modifiers, "inner")) return e;
                            if (e.flipped && e.placement === e.originalPlacement) return e;
                            var n = T(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                                r = e.placement.split("-")[0],
                                a = A(r),
                                i = e.placement.split("-")[1] || "",
                                s = [];
                            switch (t.behavior) {
                                case q.FLIP:
                                    s = [r, a];
                                    break;
                                case q.CLOCKWISE:
                                    s = U(r);
                                    break;
                                case q.COUNTERCLOCKWISE:
                                    s = U(r, !0);
                                    break;
                                default:
                                    s = t.behavior
                            }
                            return s.forEach(function(o, u) {
                                if (r !== o || s.length === u + 1) return e;
                                r = e.placement.split("-")[0], a = A(r);
                                var d = e.offsets.popper,
                                    l = e.offsets.reference,
                                    c = Math.floor,
                                    _ = "left" === r && c(d.right) > c(l.left) || "right" === r && c(d.left) < c(l.right) || "top" === r && c(d.bottom) > c(l.top) || "bottom" === r && c(d.top) < c(l.bottom),
                                    m = c(d.left) < c(n.left),
                                    f = c(d.right) > c(n.right),
                                    h = c(d.top) < c(n.top),
                                    p = c(d.bottom) > c(n.bottom),
                                    y = "left" === r && m || "right" === r && f || "top" === r && h || "bottom" === r && p,
                                    v = -1 !== ["top", "bottom"].indexOf(r),
                                    g = !!t.flipVariations && (v && "start" === i && m || v && "end" === i && f || !v && "start" === i && h || !v && "end" === i && p);
                                (_ || y || g) && (e.flipped = !0, (_ || y) && (r = s[u + 1]), g && (i = function(e) {
                                    return "end" === e ? "start" : "start" === e ? "end" : e
                                }(i)), e.placement = r + (i ? "-" + i : ""), e.offsets.popper = b({}, e.offsets.popper, O(e.instance.popper, e.offsets.reference, e.placement)), e = E(e.instance.modifiers, e, "flip"))
                            }), e
                        },
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport"
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: function(e) {
                            var t = e.placement,
                                n = t.split("-")[0],
                                r = e.offsets,
                                a = r.popper,
                                i = r.reference,
                                s = -1 !== ["left", "right"].indexOf(n),
                                o = -1 === ["top", "left"].indexOf(n);
                            return a[s ? "left" : "top"] = i[n] - (o ? a[s ? "width" : "height"] : 0), e.placement = A(t), e.offsets.popper = w(a), e
                        }
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: function(e) {
                            if (!z(e.instance.modifiers, "hide", "preventOverflow")) return e;
                            var t = e.offsets.reference,
                                n = H(e.instance.modifiers, function(e) {
                                    return "preventOverflow" === e.name
                                }).boundaries;
                            if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                if (!0 === e.hide) return e;
                                e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                            } else {
                                if (!1 === e.hide) return e;
                                e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                            }
                            return e
                        }
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: function(e, t) {
                            var n = t.x,
                                r = t.y,
                                a = e.offsets.popper,
                                i = H(e.instance.modifiers, function(e) {
                                    return "applyStyle" === e.name
                                }).gpuAcceleration;
                            void 0 !== i && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                            var s = void 0 !== i ? i : t.gpuAcceleration,
                                o = k(c(e.instance.popper)),
                                u = {
                                    position: a.position
                                },
                                d = {
                                    left: Math.floor(a.left),
                                    top: Math.floor(a.top),
                                    bottom: Math.floor(a.bottom),
                                    right: Math.floor(a.right)
                                },
                                l = "bottom" === n ? "top" : "bottom",
                                _ = "right" === r ? "left" : "right",
                                m = C("transform"),
                                f = void 0,
                                h = void 0;
                            if (h = "bottom" === l ? -o.height + d.bottom : d.top, f = "right" === _ ? -o.width + d.right : d.left, s && m) u[m] = "translate3d(" + f + "px, " + h + "px, 0)", u[l] = 0, u[_] = 0, u.willChange = "transform";
                            else {
                                var p = "bottom" === l ? -1 : 1,
                                    y = "right" === _ ? -1 : 1;
                                u[l] = h * p, u[_] = f * y, u.willChange = l + ", " + _
                            }
                            var v = {
                                "x-placement": e.placement
                            };
                            return e.attributes = b({}, v, e.attributes), e.styles = b({}, u, e.styles), e.arrowStyles = b({}, e.offsets.arrow, e.arrowStyles), e
                        },
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right"
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: function(e) {
                            var t, n;
                            return N(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {
                                var r = n[e];
                                !1 !== r ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                            }), e.arrowElement && Object.keys(e.arrowStyles).length && N(e.arrowElement, e.arrowStyles), e
                        },
                        onLoad: function(e, t, n, r, a) {
                            var i = x(0, t, e),
                                s = S(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                            return t.setAttribute("x-placement", s), N(t, {
                                position: "absolute"
                            }), n
                        },
                        gpuAcceleration: void 0
                    }
                }
            },
            V = function() {
                function e(t, n) {
                    var r = this,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    M(this, e), this.scheduleUpdate = function() {
                        return requestAnimationFrame(r.update)
                    }, this.update = s(this.update.bind(this)), this.options = b({}, e.Defaults, a), this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }, this.reference = t.jquery ? t[0] : t, this.popper = n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(b({}, e.Defaults.modifiers, a.modifiers)).forEach(function(t) {
                        r.options.modifiers[t] = b({}, e.Defaults.modifiers[t] || {}, a.modifiers ? a.modifiers[t] : {})
                    }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                        return b({
                            name: e
                        }, r.options.modifiers[e])
                    }).sort(function(e, t) {
                        return e.order - t.order
                    }), this.modifiers.forEach(function(e) {
                        e.enabled && o(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
                    }), this.update();
                    var i = this.options.eventsEnabled;
                    i && this.enableEventListeners(), this.state.eventsEnabled = i
                }
                return L(e, [{
                    key: "update",
                    value: function() {
                        return function() {
                            if (!this.state.isDestroyed) {
                                var e = {
                                    instance: this,
                                    styles: {},
                                    arrowStyles: {},
                                    attributes: {},
                                    flipped: !1,
                                    offsets: {}
                                };
                                e.offsets.reference = x(this.state, this.popper, this.reference), e.placement = S(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = O(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = E(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                            }
                        }.call(this)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        return function() {
                            return this.state.isDestroyed = !0, P(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[C("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                        }.call(this)
                    }
                }, {
                    key: "enableEventListeners",
                    value: function() {
                        return function() {
                            this.state.eventsEnabled || (this.state = $(this.reference, this.options, this.state, this.scheduleUpdate))
                        }.call(this)
                    }
                }, {
                    key: "disableEventListeners",
                    value: function() {
                        return F.call(this)
                    }
                }]), e
            }();
        V.Utils = window.PopperUtils, V.placements = R, V.Defaults = B;
        var G = Object.assign || function(e) {
                for (var t = arguments, n = 1; n < arguments.length; n++) {
                    var r = t[n];
                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                }
                return e
            },
            K = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            Z = ["top", "left", "right", "bottom", "auto"],
            Q = ["start", "end"],
            X = {
                ADD: 1,
                REMOVE: 2
            },
            ee = function(e, t) {
                return e.indexOf(t) > -1
            },
            te = function() {
                function e(t) {
                    var n = this,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this._options = G({}, e._defaults, {
                        onCreate: function(e) {
                            n.content(n.tooltip.options.title), n._$tt.update()
                        },
                        onUpdate: function(e) {
                            n.content(n.tooltip.options.title), n._$tt.update()
                        }
                    }, e.filterOptions(r));
                    var a = this._createTooltipElement(this.options);
                    document.querySelector("body").appendChild(a), this._$el = t, this._$tt = new V(t, a, this._options), this._$tpl = a, this._disabled = !1, this._visible = !1, this._clearDelay = null, this._setEvents()
                }
                return e.prototype.destroy = function() {
                    this._cleanEvents(), document.querySelector("body").removeChild(this._$tpl)
                }, e.prototype._createTooltipElement = function(e) {
                    var t = document.createElement("div");
                    t.setAttribute("id", "tooltip-" + Date.now() + "-" + Math.round(1e8 * Math.random())), t.setAttribute("class", "h-tooltip " + this._options.class), t.style.display = "none";
                    var n = document.createElement("div");
                    n.setAttribute("class", "tooltip-arrow"), n.setAttribute("x-arrow", ""), t.appendChild(n);
                    var r = document.createElement("div");
                    return r.setAttribute("class", "tooltip-content"), t.appendChild(r), t
                }, e.prototype._events = function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X.ADD,
                        n = t === X.ADD ? "addEventListener" : "removeEventListener";
                    if (Array.isArray(this.options.triggers)) {
                        var r = function() {
                            var t;
                            return (t = e._$el)[n].apply(t, arguments)
                        };
                        ee(this.options.triggers, "manual") ? r("click", this._onToggle.bind(this), !1) : (this.options.triggers.map(function(t) {
                            switch (t) {
                                case "click":
                                    r("click", e._onToggle.bind(e), !1), document[n]("click", e._onDeactivate.bind(e), !1);
                                    break;
                                case "hover":
                                    r("mouseenter", e._onActivate.bind(e), !1), r("mouseleave", e._onDeactivate.bind(e), !1);
                                    break;
                                case "focus":
                                    r("focus", e._onActivate.bind(e), !1), r("blur", e._onDeactivate.bind(e), !0)
                            }
                        }), (ee(this.options.triggers, "hover") || ee(this.options.triggers, "focus")) && (this._$tpl[n]("mouseenter", this._onMouseOverTooltip.bind(this), !1), this._$tpl[n]("mouseleave", this._onMouseOutTooltip.bind(this), !1)))
                    } else console.error("trigger should be an array", this.options.triggers)
                }, e.prototype._setEvents = function() {
                    this._events()
                }, e.prototype._cleanEvents = function() {
                    this._events(X.REMOVE)
                }, e.prototype._onActivate = function(e) {
                    this.show()
                }, e.prototype._onDeactivate = function(e) {
                    this.hide()
                }, e.prototype._onToggle = function(e) {
                    e.stopPropagation(), e.preventDefault(), this.toggle()
                }, e.prototype._onMouseOverTooltip = function(e) {
                    this.toggle(!0, !1)
                }, e.prototype._onMouseOutTooltip = function(e) {
                    this.toggle(!1)
                }, e.prototype.content = function(e) {
                    var t = this.tooltip.popper.querySelector(".tooltip-content");
                    "string" == typeof e ? (this.tooltip.options.title = e, t.textContent = e) : e instanceof window.Element ? e !== t.children[0] && (t.innerHTML = "", t.appendChild(e)) : console.error("unsupported content type", e)
                }, e.filterOptions = function(t) {
                    var n = G({}, t);
                    n.modifiers = {};
                    var r = null,
                        a = null;
                    if (n.placement.indexOf("-") > -1) {
                        var i = n.placement.split("-");
                        r = i[0], a = i[1], n.placement = ee(Z, r) && ee(Q, a) ? n.placement : e._defaults.placement
                    } else n.placement = ee(Z, n.placement) ? n.placement : e._defaults.placement;
                    return n.modifiers.offset = {
                        fn: e._setOffset
                    }, n
                }, e._setOffset = function(t, n) {
                    var r = t.instance.options.offset;
                    return (window.isNaN(r) || r < 0) && (r = e._defaults.offset), -1 !== t.placement.indexOf("top") ? t.offsets.popper.top -= r : -1 !== t.placement.indexOf("right") ? t.offsets.popper.left += r : -1 !== t.placement.indexOf("bottom") ? t.offsets.popper.top += r : -1 !== t.placement.indexOf("left") && (t.offsets.popper.left -= r), t
                }, e.defaults = function(t) {
                    e._defaults = G({}, e._defaults, t)
                }, e.prototype.show = function() {
                    this.toggle(!0)
                }, e.prototype.hide = function() {
                    this.toggle(!1)
                }, e.prototype.toggle = function(e) {
                    var t = this,
                        n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = this._options.delay;
                    if (!0 === this._disabled) return e = !1, void(r = 0);
                    "boolean" != typeof e && (e = !this._visible), !0 === e && (r = 0), clearTimeout(this._clearDelay), !0 === n && (this._clearDelay = setTimeout(function() {
                        t._visible = e, t._$tt.popper.style.display = !0 === t._visible ? "inline-block" : "none", t._$tt.update()
                    }, r))
                }, K(e, [{
                    key: "options",
                    get: function() {
                        return G({}, this._options)
                    }
                }, {
                    key: "tooltip",
                    get: function() {
                        return this._$tt
                    }
                }, {
                    key: "class",
                    set: function(e) {
                        if ("string" == typeof e) {
                            var t = this._$tpl.classList.value.replace(this.options.class, e);
                            this._options.class = t, this._$tpl.setAttribute("class", t)
                        }
                    }
                }, {
                    key: "disabled",
                    set: function(e) {
                        "boolean" == typeof e && (this._disabled = e)
                    }
                }]), e
            }();
        te._defaults = G({}, {
            container: !1,
            delay: 200,
            instance: null,
            eventsEnabled: !0,
            html: !1,
            modifiers: {
                arrow: {
                    element: ".tooltip-arrow"
                }
            },
            placement: "",
            placementPostfix: null,
            removeOnDestroy: !0,
            title: "",
            class: "",
            triggers: ["hover", "focus"],
            offset: 5
        });
        var ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            re = "vue-tooltip",
            ae = ["auto", "top", "bottom", "left", "right"],
            ie = ["start", "end"];

        function se(e) {
            for (var t = e.modifiers, n = Object.keys(t), r = "", a = null, i = 0; i < n.length; i++) {
                var s = n[i];
                ae.indexOf(s) > -1 && (r = s), ie.indexOf(s) > -1 && (a = s)
            }
            return r && a ? r + "-" + a : r
        }

        function oe(e) {
            var t = e.modifiers,
                n = [];
            return t.notrigger ? n : (t.manual ? n.push("manual") : (t.click && n.push("click"), t.hover && n.push("hover"), t.focus && n.push("focus"), 0 === n.length && n.push("hover", "focus")), n)
        }

        function ue(e) {
            return "object" === (void 0 === e ? "undefined" : ne(e))
        }

        function de(e) {
            var t = e.value;
            return null !== t && ue(t) ? void 0 !== t.content ? "" + t.content : t.html && document.getElementById(t.html) ? document.getElementById(t.html) : function(e) {
                return e instanceof window.Element
            }(t.html) ? t.html : "" : "" + t
        }
        return {
            name: "tooltip",
            config: {},
            install: function(e, t) {
                e.directive("tooltip", {
                    bind: function(e, n, r) {
                        t && te.defaults(t)
                    },
                    inserted: function(e, n, r, a) {
                        t && te.defaults(t);
                        var i = function(e) {
                            var t, n, r = !e.value || isNaN(e.value.delay) ? te._defaults.delay : e.value.delay;
                            return {
                                class: (t = e, n = t.value, null === n ? re : ue(n) && "string" == typeof n.class ? re + " " + n.class : te._defaults.class ? re + " " + te._defaults.class : re),
                                html: e.value ? e.value.html : null,
                                placement: se(e),
                                title: de(e),
                                triggers: oe(e),
                                offset: e.value && e.value.offset ? e.value.offset : te._defaults.offset,
                                delay: r
                            }
                        }(n);
                        e.tooltip = new te(e, i), n.modifiers.notrigger && !0 === n.value.visible && e.tooltip.show(), n.value && !1 === n.value.visible && (e.tooltip.disabled = !0)
                    },
                    componentUpdated: function(e, t, n, r) {
                        ! function(e, t) {
                            if ("string" == typeof t.value) e.tooltip.content(t.value);
                            else {
                                if (t.value && t.value.class && t.value.class.trim() !== e.tooltip.options.class.replace(re, "").trim() && (e.tooltip.class = re + " " + t.value.class.trim()), e.tooltip.content(de(t)), !t.modifiers.notrigger && t.value && "boolean" == typeof t.value.visible) return void(e.tooltip.disabled = !t.value.visible);
                                t.modifiers.notrigger && (e.tooltip.disabled = !1), !e.tooltip.disabled && t.value && !0 === t.value.visible ? e.tooltip.show() : e.tooltip.hide()
                            }
                        }(e, t)
                    },
                    unbind: function(e, t, n, r) {
                        e.tooltip.destroy()
                    }
                })
            }
        }
    }()
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = n(100);
    n.n(r).a
}, function(e, t, n) {
    var r = "undefined" != typeof window && window || "undefined" != typeof self && self || window,
        a = Function.prototype.apply;

    function i(e, t) {
        this._id = e, this._clearFn = t
    }
    t.setTimeout = function() {
        return new i(a.call(setTimeout, r, arguments), clearTimeout)
    }, t.setInterval = function() {
        return new i(a.call(setInterval, r, arguments), clearInterval)
    }, t.clearTimeout = t.clearInterval = function(e) {
        e && e.close()
    }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
        this._clearFn.call(r, this._id)
    }, t.enroll = function(e, t) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = t
    }, t.unenroll = function(e) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
    }, t._unrefActive = t.active = function(e) {
        clearTimeout(e._idleTimeoutId);
        var t = e._idleTimeout;
        t >= 0 && (e._idleTimeoutId = setTimeout(function() {
            e._onTimeout && e._onTimeout()
        }, t))
    }, n(556), t.setImmediate = "undefined" != typeof self && self.setImmediate || "undefined" != typeof window && window.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || "undefined" != typeof window && window.clearImmediate || this && this.clearImmediate
}, function(e, t, n) {
    (function(e) {
        ! function(t, n) {
            "use strict";
            if (!t.setImmediate) {
                var r, a, i, s, o, u = 1,
                    d = {},
                    l = !1,
                    c = t.document,
                    _ = Object.getPrototypeOf && Object.getPrototypeOf(t);
                _ = _ && _.setTimeout ? _ : t, "[object process]" === {}.toString.call(t.process) ? r = function(t) {
                    e.nextTick(function() {
                        f(t)
                    })
                } : ! function() {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0,
                            n = t.onmessage;
                        return t.onmessage = function() {
                            e = !1
                        }, t.postMessage("", "*"), t.onmessage = n, e
                    }
                }() ? t.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function(e) {
                    f(e.data)
                }, r = function(e) {
                    i.port2.postMessage(e)
                }) : c && "onreadystatechange" in c.createElement("script") ? (a = c.documentElement, r = function(e) {
                    var t = c.createElement("script");
                    t.onreadystatechange = function() {
                        f(e), t.onreadystatechange = null, a.removeChild(t), t = null
                    }, a.appendChild(t)
                }) : r = function(e) {
                    setTimeout(f, 0, e)
                } : (s = "setImmediate$" + Math.random() + "$", o = function(e) {
                    e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(s) && f(+e.data.slice(s.length))
                }, t.addEventListener ? t.addEventListener("message", o, !1) : t.attachEvent("onmessage", o), r = function(e) {
                    t.postMessage(s + e, "*")
                }), _.setImmediate = function(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                    var a = {
                        callback: e,
                        args: t
                    };
                    return d[u] = a, r(u), u++
                }, _.clearImmediate = m
            }

            function m(e) {
                delete d[e]
            }

            function f(e) {
                if (l) setTimeout(f, 0, e);
                else {
                    var t = d[e];
                    if (t) {
                        l = !0;
                        try {
                            ! function(e) {
                                var t = e.callback,
                                    r = e.args;
                                switch (r.length) {
                                    case 0:
                                        t();
                                        break;
                                    case 1:
                                        t(r[0]);
                                        break;
                                    case 2:
                                        t(r[0], r[1]);
                                        break;
                                    case 3:
                                        t(r[0], r[1], r[2]);
                                        break;
                                    default:
                                        t.apply(n, r)
                                }
                            }(t)
                        } finally {
                            m(e), l = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? "undefined" == typeof window ? this : window : self)
    }).call(this, n(557))
}, function(e, t) {
    var n, r, a = e.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function s() {
        throw new Error("clearTimeout has not been defined")
    }

    function o(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
            r = s
        }
    }();
    var u, d = [],
        l = !1,
        c = -1;

    function _() {
        l && u && (l = !1, u.length ? d = u.concat(d) : c = -1, d.length && m())
    }

    function m() {
        if (!l) {
            var e = o(_);
            l = !0;
            for (var t = d.length; t;) {
                for (u = d, d = []; ++c < t;) u && u[c].run();
                c = -1, t = d.length
            }
            u = null, l = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function f(e, t) {
        this.fun = e, this.array = t
    }

    function h() {}
    a.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        d.push(new f(e, t)), 1 !== d.length || l || o(m)
    }, f.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = h, a.addListener = h, a.once = h, a.off = h, a.removeListener = h, a.removeAllListeners = h, a.emit = h, a.prependListener = h, a.prependOnceListener = h, a.listeners = function(e) {
        return []
    }, a.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, a.cwd = function() {
        return "/"
    }, a.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, a.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return null == e
    }

    function a(e) {
        return null != e
    }

    function i(e, t) {
        return t.tag === e.tag && t.key === e.key
    }

    function s(e) {
        var t = e.tag;
        e.vm = new t({
            data: e.args
        })
    }

    function o(e, t, n) {
        var r, i, s = {};
        for (r = t; r <= n; ++r) a(i = e[r].key) && (s[i] = r);
        return s
    }

    function u(e, t, n) {
        for (; t <= n; ++t) s(e[t])
    }

    function d(e, t, n) {
        for (; t <= n; ++t) {
            var r = e[t];
            a(r) && (r.vm.$destroy(), r.vm = null)
        }
    }

    function l(e, t) {
        e !== t && (t.vm = e.vm, function(e) {
            for (var t = Object.keys(e.args), n = 0; n < t.length; n++) t.forEach(function(t) {
                e.vm[t] = e.args[t]
            })
        }(t))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.patchChildren = function(e, t) {
        a(e) && a(t) ? e !== t && function(e, t) {
            var n, c, _, m = 0,
                f = 0,
                h = e.length - 1,
                p = e[0],
                y = e[h],
                v = t.length - 1,
                g = t[0],
                M = t[v];
            for (; m <= h && f <= v;) r(p) ? p = e[++m] : r(y) ? y = e[--h] : i(p, g) ? (l(p, g), p = e[++m], g = t[++f]) : i(y, M) ? (l(y, M), y = e[--h], M = t[--v]) : i(p, M) ? (l(p, M), p = e[++m], M = t[--v]) : i(y, g) ? (l(y, g), y = e[--h], g = t[++f]) : (r(n) && (n = o(e, m, h)), r(c = a(g.key) ? n[g.key] : null) ? (s(g), g = t[++f]) : i(_ = e[c], g) ? (l(_, g), e[c] = void 0, g = t[++f]) : (s(g), g = t[++f]));
            m > h ? u(t, f, v) : f > v && d(e, m, h)
        }(e, t) : a(t) ? u(t, 0, t.length - 1) : a(e) && d(e, 0, e.length - 1)
    }, t.h = function(e, t, n) {
        return {
            tag: e,
            key: t,
            args: n
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        if (Array.isArray(e)) return e
    }
}, function(e, t) {
    e.exports = function(e, t) {
        var n = [],
            r = !0,
            a = !1,
            i = void 0;
        try {
            for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
        } catch (e) {
            a = !0, i = e
        } finally {
            try {
                r || null == o.return || o.return()
            } finally {
                if (a) throw i
            }
        }
        return n
    }
}, function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}, function(e, t, n) {
    "use strict";
    var r = n(101);
    n.n(r).a
}, function(e, t, n) {
    "use strict";
    var r = n(102);
    n.n(r).a
}, function(e, t, n) {
    "use strict";
    var r = n(103);
    n.n(r).a
}, function(e, t, n) {
    e.exports = n.p + "/images/color-platform.svg"
}, function(e, t, n) {
    "use strict";
    var r = n(104);
    n.n(r).a
}, function(e, t, n) {
    "use strict";
    var r = n(105);
    n.n(r).a
}, function(e, t, n) {
    "use strict";
    var r = n(106);
    n.n(r).a
}, function(e, t, n) {
    "use strict";
    var r = n(107);
    n.n(r).a
}, function(e, t, n) {
    "use strict";
    var r = n(108);
    n.n(r).a
}, function(e, t, n) {
    "use strict";
    var r = n(109);
    n.n(r).a
}, function(e, t, n) {
    "use strict";
    var r = n(110);
    n.n(r).a
}, function(e, t, n) {
    "use strict";
    var r = n(111);
    n.n(r).a
}, function(e, t, n) {
    "use strict";
    var r = n(112);
    n.n(r).a
}, function(e, t, n) {
    "use strict";
    var r = n(113);
    n.n(r).a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = (0, n(16).regex)("alpha", /^[a-zA-Z]*$/);
    t.default = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = "web" === Object({
        NODE_ENV: "production"
    }).BUILD ? n(578).withParams : n(193).withParams;
    t.default = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.withParams = void 0;
    var a = "undefined" != typeof window ? window : "undefined" != typeof window ? window : {},
        i = a.vuelidate ? a.vuelidate.withParams : function(e, t) {
            return "object" === r(e) && void 0 !== t ? t : e(function() {})
        };
    t.withParams = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = (0, n(16).regex)("alphaNum", /^[a-zA-Z0-9]*$/);
    t.default = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = (0, n(16).regex)("numeric", /^[0-9]*$/);
    t.default = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = n(16);
    t.default = function(e, t) {
        return (0, r.withParams)({
            type: "between",
            min: e,
            max: t
        }, function(n) {
            return !(0, r.req)(n) || (!/\s/.test(n) || n instanceof Date) && +e <= +n && +t >= +n
        })
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = (0, n(16).regex)("email", /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/);
    t.default = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = n(16),
        a = (0, r.withParams)({
            type: "ipAddress"
        }, function(e) {
            if (!(0, r.req)(e)) return !0;
            if ("string" != typeof e) return !1;
            var t = e.split(".");
            return 4 === t.length && t.every(i)
        });
    t.default = a;
    var i = function(e) {
        if (e.length > 3 || 0 === e.length) return !1;
        if ("0" === e[0] && "0" !== e) return !1;
        if (!e.match(/^\d+$/)) return !1;
        var t = 0 | +e;
        return t >= 0 && t <= 255
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = n(16);
    t.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ":";
        return (0, r.withParams)({
            type: "macAddress"
        }, function(t) {
            if (!(0, r.req)(t)) return !0;
            if ("string" != typeof t) return !1;
            var n = "string" == typeof e && "" !== e ? t.split(e) : 12 === t.length || 16 === t.length ? t.match(/.{2}/g) : null;
            return null !== n && (6 === n.length || 8 === n.length) && n.every(a)
        })
    };
    var a = function(e) {
        return e.toLowerCase().match(/^[0-9a-f]{2}$/)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = n(16);
    t.default = function(e) {
        return (0, r.withParams)({
            type: "maxLength",
            max: e
        }, function(t) {
            return !(0, r.req)(t) || (0, r.len)(t) <= e
        })
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = n(16);
    t.default = function(e) {
        return (0, r.withParams)({
            type: "minLength",
            min: e
        }, function(t) {
            return !(0, r.req)(t) || (0, r.len)(t) >= e
        })
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = n(16),
        a = (0, r.withParams)({
            type: "required"
        }, r.req);
    t.default = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = n(16);
    t.default = function(e) {
        return (0, r.withParams)({
            type: "requiredIf",
            prop: e
        }, function(t, n) {
            return !(0, r.ref)(e, this, n) || (0, r.req)(t)
        })
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = n(16);
    t.default = function(e) {
        return (0, r.withParams)({
            type: "requiredUnless",
            prop: e
        }, function(t, n) {
            return !!(0, r.ref)(e, this, n) || (0, r.req)(t)
        })
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = n(16);
    t.default = function(e) {
        return (0, r.withParams)({
            type: "sameAs",
            eq: e
        }, function(t, n) {
            return t === (0, r.ref)(e, this, n)
        })
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = (0, n(16).regex)("url", /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[\/?#]\S*)?$/i);
    t.default = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = n(16);
    t.default = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return (0, r.withParams)({
            type: "or"
        }, function() {
            for (var e = this, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
            return t.length > 0 && t.reduce(function(t, n) {
                return t || n.apply(e, r)
            }, !1)
        })
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = n(16);
    t.default = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return (0, r.withParams)({
            type: "and"
        }, function() {
            for (var e = this, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
            return t.length > 0 && t.reduce(function(t, n) {
                return t && n.apply(e, r)
            }, !0)
        })
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = n(16);
    t.default = function(e) {
        return (0, r.withParams)({
            type: "not"
        }, function(t, n) {
            return !(0, r.req)(t) || !e.call(this, t, n)
        })
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = n(16);
    t.default = function(e) {
        return (0, r.withParams)({
            type: "minValue",
            min: e
        }, function(t) {
            return !(0, r.req)(t) || (!/\s/.test(t) || t instanceof Date) && +t >= +e
        })
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = n(16);
    t.default = function(e) {
        return (0, r.withParams)({
            type: "maxValue",
            max: e
        }, function(t) {
            return !(0, r.req)(t) || (!/\s/.test(t) || t instanceof Date) && +t <= +e
        })
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = (0, n(16).regex)("integer", /^-?[0-9]*$/);
    t.default = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = (0, n(16).regex)("decimal", /^[-]?\d*(\.\d+)?$/);
    t.default = r
}, function(e, t, n) {
    "use strict";
    var r = n(114);
    n.n(r).a
}, function(e, t, n) {
    e.exports = n.p + "/images/color.svg"
}, function(e, t, n) {
    "use strict";
    var r = n(115);
    n.n(r).a
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t, n) {
    var r = {
        "./af": 195,
        "./af.js": 195,
        "./ar": 196,
        "./ar-dz": 197,
        "./ar-dz.js": 197,
        "./ar-kw": 198,
        "./ar-kw.js": 198,
        "./ar-ly": 199,
        "./ar-ly.js": 199,
        "./ar-ma": 200,
        "./ar-ma.js": 200,
        "./ar-sa": 201,
        "./ar-sa.js": 201,
        "./ar-tn": 202,
        "./ar-tn.js": 202,
        "./ar.js": 196,
        "./az": 203,
        "./az.js": 203,
        "./be": 204,
        "./be.js": 204,
        "./bg": 205,
        "./bg.js": 205,
        "./bm": 206,
        "./bm.js": 206,
        "./bn": 207,
        "./bn.js": 207,
        "./bo": 208,
        "./bo.js": 208,
        "./br": 209,
        "./br.js": 209,
        "./bs": 210,
        "./bs.js": 210,
        "./ca": 211,
        "./ca.js": 211,
        "./cs": 212,
        "./cs.js": 212,
        "./cv": 213,
        "./cv.js": 213,
        "./cy": 214,
        "./cy.js": 214,
        "./da": 215,
        "./da.js": 215,
        "./de": 216,
        "./de-at": 217,
        "./de-at.js": 217,
        "./de-ch": 218,
        "./de-ch.js": 218,
        "./de.js": 216,
        "./dv": 219,
        "./dv.js": 219,
        "./el": 220,
        "./el.js": 220,
        "./en-SG": 221,
        "./en-SG.js": 221,
        "./en-au": 222,
        "./en-au.js": 222,
        "./en-ca": 223,
        "./en-ca.js": 223,
        "./en-gb": 224,
        "./en-gb.js": 224,
        "./en-ie": 225,
        "./en-ie.js": 225,
        "./en-il": 226,
        "./en-il.js": 226,
        "./en-nz": 227,
        "./en-nz.js": 227,
        "./eo": 228,
        "./eo.js": 228,
        "./es": 229,
        "./es-do": 230,
        "./es-do.js": 230,
        "./es-us": 231,
        "./es-us.js": 231,
        "./es.js": 229,
        "./et": 232,
        "./et.js": 232,
        "./eu": 233,
        "./eu.js": 233,
        "./fa": 234,
        "./fa.js": 234,
        "./fi": 235,
        "./fi.js": 235,
        "./fo": 236,
        "./fo.js": 236,
        "./fr": 237,
        "./fr-ca": 238,
        "./fr-ca.js": 238,
        "./fr-ch": 239,
        "./fr-ch.js": 239,
        "./fr.js": 237,
        "./fy": 240,
        "./fy.js": 240,
        "./ga": 241,
        "./ga.js": 241,
        "./gd": 242,
        "./gd.js": 242,
        "./gl": 243,
        "./gl.js": 243,
        "./gom-latn": 244,
        "./gom-latn.js": 244,
        "./gu": 245,
        "./gu.js": 245,
        "./he": 246,
        "./he.js": 246,
        "./hi": 247,
        "./hi.js": 247,
        "./hr": 248,
        "./hr.js": 248,
        "./hu": 249,
        "./hu.js": 249,
        "./hy-am": 250,
        "./hy-am.js": 250,
        "./id": 251,
        "./id.js": 251,
        "./is": 252,
        "./is.js": 252,
        "./it": 253,
        "./it-ch": 254,
        "./it-ch.js": 254,
        "./it.js": 253,
        "./ja": 255,
        "./ja.js": 255,
        "./jv": 256,
        "./jv.js": 256,
        "./ka": 257,
        "./ka.js": 257,
        "./kk": 258,
        "./kk.js": 258,
        "./km": 259,
        "./km.js": 259,
        "./kn": 260,
        "./kn.js": 260,
        "./ko": 261,
        "./ko.js": 261,
        "./ku": 262,
        "./ku.js": 262,
        "./ky": 263,
        "./ky.js": 263,
        "./lb": 264,
        "./lb.js": 264,
        "./lo": 265,
        "./lo.js": 265,
        "./lt": 266,
        "./lt.js": 266,
        "./lv": 267,
        "./lv.js": 267,
        "./me": 268,
        "./me.js": 268,
        "./mi": 269,
        "./mi.js": 269,
        "./mk": 270,
        "./mk.js": 270,
        "./ml": 271,
        "./ml.js": 271,
        "./mn": 272,
        "./mn.js": 272,
        "./mr": 273,
        "./mr.js": 273,
        "./ms": 274,
        "./ms-my": 275,
        "./ms-my.js": 275,
        "./ms.js": 274,
        "./mt": 276,
        "./mt.js": 276,
        "./my": 277,
        "./my.js": 277,
        "./nb": 278,
        "./nb.js": 278,
        "./ne": 279,
        "./ne.js": 279,
        "./nl": 280,
        "./nl-be": 281,
        "./nl-be.js": 281,
        "./nl.js": 280,
        "./nn": 282,
        "./nn.js": 282,
        "./pa-in": 283,
        "./pa-in.js": 283,
        "./pl": 284,
        "./pl.js": 284,
        "./pt": 285,
        "./pt-br": 286,
        "./pt-br.js": 286,
        "./pt.js": 285,
        "./ro": 287,
        "./ro.js": 287,
        "./ru": 288,
        "./ru.js": 288,
        "./sd": 289,
        "./sd.js": 289,
        "./se": 290,
        "./se.js": 290,
        "./si": 291,
        "./si.js": 291,
        "./sk": 292,
        "./sk.js": 292,
        "./sl": 293,
        "./sl.js": 293,
        "./sq": 294,
        "./sq.js": 294,
        "./sr": 295,
        "./sr-cyrl": 296,
        "./sr-cyrl.js": 296,
        "./sr.js": 295,
        "./ss": 297,
        "./ss.js": 297,
        "./sv": 298,
        "./sv.js": 298,
        "./sw": 299,
        "./sw.js": 299,
        "./ta": 300,
        "./ta.js": 300,
        "./te": 301,
        "./te.js": 301,
        "./tet": 302,
        "./tet.js": 302,
        "./tg": 303,
        "./tg.js": 303,
        "./th": 304,
        "./th.js": 304,
        "./tl-ph": 305,
        "./tl-ph.js": 305,
        "./tlh": 306,
        "./tlh.js": 306,
        "./tr": 307,
        "./tr.js": 307,
        "./tzl": 308,
        "./tzl.js": 308,
        "./tzm": 309,
        "./tzm-latn": 310,
        "./tzm-latn.js": 310,
        "./tzm.js": 309,
        "./ug-cn": 311,
        "./ug-cn.js": 311,
        "./uk": 312,
        "./uk.js": 312,
        "./ur": 313,
        "./ur.js": 313,
        "./uz": 314,
        "./uz-latn": 315,
        "./uz-latn.js": 315,
        "./uz.js": 314,
        "./vi": 316,
        "./vi.js": 316,
        "./x-pseudo": 317,
        "./x-pseudo.js": 317,
        "./yo": 318,
        "./yo.js": 318,
        "./zh-cn": 319,
        "./zh-cn.js": 319,
        "./zh-hk": 320,
        "./zh-hk.js": 320,
        "./zh-tw": 321,
        "./zh-tw.js": 321
    };

    function a(e) {
        var t = i(e);
        return n(t)
    }

    function i(e) {
        if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
    }
    a.keys = function() {
        return Object.keys(r)
    }, a.resolve = i, e.exports = a, a.id = 603
}, function(e, t, n) {
    "use strict";
    var r = n(116);
    n.n(r).a
}, function(e, t, n) {
    "use strict";
    var r = n(117);
    n.n(r).a
}, function(e, t, n) {
    "use strict";
    var r = n(118);
    n.n(r).a
}, function(e, t, n) {
    "use strict";
    var r = n(119);
    n.n(r).a
}, function(e, t, n) {
    "use strict";
    var r = n(120);
    n.n(r).a
}, function(e, t, n) {
    "use strict";
    var r = n(121);
    n.n(r).a
}, function(e, t, n) {
    /*!
     * clipboard.js v2.0.4
     * https://zenorocha.github.io/clipboard.js
     * 
     * Licensed MIT © Zeno Rocha
     */
    e.exports = function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var a = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var a in e) n.d(r, a, function(t) {
                    return e[t]
                }.bind(null, a));
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 0)
    }([function(e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = u(n(1)),
            s = u(n(3)),
            o = u(n(4));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return r.resolveOptions(n), r.listenClick(e), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, s.default), a(t, [{
                key: "resolveOptions",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === r(e.container) ? e.container : document.body
                }
            }, {
                key: "listenClick",
                value: function(e) {
                    var t = this;
                    this.listener = (0, o.default)(e, "click", function(e) {
                        return t.onClick(e)
                    })
                }
            }, {
                key: "onClick",
                value: function(e) {
                    var t = e.delegateTarget || e.currentTarget;
                    this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new i.default({
                        action: this.action(t),
                        target: this.target(t),
                        text: this.text(t),
                        container: this.container,
                        trigger: t,
                        emitter: this
                    })
                }
            }, {
                key: "defaultAction",
                value: function(e) {
                    return l("action", e)
                }
            }, {
                key: "defaultTarget",
                value: function(e) {
                    var t = l("target", e);
                    if (t) return document.querySelector(t)
                }
            }, {
                key: "defaultText",
                value: function(e) {
                    return l("text", e)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                }
            }], [{
                key: "isSupported",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                        t = "string" == typeof e ? [e] : e,
                        n = !!document.queryCommandSupported;
                    return t.forEach(function(e) {
                        n = n && !!document.queryCommandSupported(e)
                    }), n
                }
            }]), t
        }();

        function l(e, t) {
            var n = "data-clipboard-" + e;
            if (t.hasAttribute(n)) return t.getAttribute(n)
        }
        e.exports = d
    }, function(e, t, n) {
        "use strict";
        var r, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = n(2),
            o = (r = s) && r.__esModule ? r : {
                default: r
            },
            u = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.resolveOptions(t), this.initSelection()
                }
                return i(e, [{
                    key: "resolveOptions",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                    }
                }, {
                    key: "initSelection",
                    value: function() {
                        this.text ? this.selectFake() : this.target && this.selectTarget()
                    }
                }, {
                    key: "selectFake",
                    value: function() {
                        var e = this,
                            t = "rtl" == document.documentElement.getAttribute("dir");
                        this.removeFake(), this.fakeHandlerCallback = function() {
                            return e.removeFake()
                        }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                        var n = window.pageYOffset || document.documentElement.scrollTop;
                        this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, o.default)(this.fakeElem), this.copyText()
                    }
                }, {
                    key: "removeFake",
                    value: function() {
                        this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                    }
                }, {
                    key: "selectTarget",
                    value: function() {
                        this.selectedText = (0, o.default)(this.target), this.copyText()
                    }
                }, {
                    key: "copyText",
                    value: function() {
                        var e = void 0;
                        try {
                            e = document.execCommand(this.action)
                        } catch (t) {
                            e = !1
                        }
                        this.handleResult(e)
                    }
                }, {
                    key: "handleResult",
                    value: function(e) {
                        this.emitter.emit(e ? "success" : "error", {
                            action: this.action,
                            text: this.selectedText,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this)
                        })
                    }
                }, {
                    key: "clearSelection",
                    value: function() {
                        this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.removeFake()
                    }
                }, {
                    key: "action",
                    set: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
                        if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                    },
                    get: function() {
                        return this._action
                    }
                }, {
                    key: "target",
                    set: function(e) {
                        if (void 0 !== e) {
                            if (!e || "object" !== (void 0 === e ? "undefined" : a(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                            if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                            if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                            this._target = e
                        }
                    },
                    get: function() {
                        return this._target
                    }
                }]), e
            }();
        e.exports = u
    }, function(e, t) {
        e.exports = function(e) {
            var t;
            if ("SELECT" === e.nodeName) e.focus(), t = e.value;
            else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                var n = e.hasAttribute("readonly");
                n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
            } else {
                e.hasAttribute("contenteditable") && e.focus();
                var r = window.getSelection(),
                    a = document.createRange();
                a.selectNodeContents(e), r.removeAllRanges(), r.addRange(a), t = r.toString()
            }
            return t
        }
    }, function(e, t) {
        function n() {}
        n.prototype = {
            on: function(e, t, n) {
                var r = this.e || (this.e = {});
                return (r[e] || (r[e] = [])).push({
                    fn: t,
                    ctx: n
                }), this
            },
            once: function(e, t, n) {
                var r = this;

                function a() {
                    r.off(e, a), t.apply(n, arguments)
                }
                return a._ = t, this.on(e, a, n)
            },
            emit: function(e) {
                for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, a = n.length; r < a; r++) n[r].fn.apply(n[r].ctx, t);
                return this
            },
            off: function(e, t) {
                var n = this.e || (this.e = {}),
                    r = n[e],
                    a = [];
                if (r && t)
                    for (var i = 0, s = r.length; i < s; i++) r[i].fn !== t && r[i].fn._ !== t && a.push(r[i]);
                return a.length ? n[e] = a : delete n[e], this
            }
        }, e.exports = n
    }, function(e, t, n) {
        var r = n(5),
            a = n(6);
        e.exports = function(e, t, n) {
            if (!e && !t && !n) throw new Error("Missing required arguments");
            if (!r.string(t)) throw new TypeError("Second argument must be a String");
            if (!r.fn(n)) throw new TypeError("Third argument must be a Function");
            if (r.node(e)) return _ = t, m = n, (c = e).addEventListener(_, m), {
                destroy: function() {
                    c.removeEventListener(_, m)
                }
            };
            if (r.nodeList(e)) return u = e, d = t, l = n, Array.prototype.forEach.call(u, function(e) {
                e.addEventListener(d, l)
            }), {
                destroy: function() {
                    Array.prototype.forEach.call(u, function(e) {
                        e.removeEventListener(d, l)
                    })
                }
            };
            if (r.string(e)) return i = e, s = t, o = n, a(document.body, i, s, o);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            var i, s, o, u, d, l, c, _, m
        }
    }, function(e, t) {
        t.node = function(e) {
            return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
        }, t.nodeList = function(e) {
            var n = Object.prototype.toString.call(e);
            return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in e && (0 === e.length || t.node(e[0]))
        }, t.string = function(e) {
            return "string" == typeof e || e instanceof String
        }, t.fn = function(e) {
            return "[object Function]" === Object.prototype.toString.call(e)
        }
    }, function(e, t, n) {
        var r = n(7);

        function a(e, t, n, a, i) {
            var s = function(e, t, n, a) {
                return function(n) {
                    n.delegateTarget = r(n.target, t), n.delegateTarget && a.call(e, n)
                }
            }.apply(this, arguments);
            return e.addEventListener(n, s, i), {
                destroy: function() {
                    e.removeEventListener(n, s, i)
                }
            }
        }
        e.exports = function(e, t, n, r, i) {
            return "function" == typeof e.addEventListener ? a.apply(null, arguments) : "function" == typeof n ? a.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function(e) {
                return a(e, t, n, r, i)
            }))
        }
    }, function(e, t) {
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var n = Element.prototype;
            n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
        }
        e.exports = function(e, t) {
            for (; e && 9 !== e.nodeType;) {
                if ("function" == typeof e.matches && e.matches(t)) return e;
                e = e.parentNode
            }
        }
    }])
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r, a = n(12),
        i = n.n(a),
        s = n(20),
        o = n.n(s),
        u = n(32),
        d = n.n(u),
        l = n(37),
        c = n(41),
        _ = n(65),
        m = n(54),
        f = n(66),
        h = {
            name: "transaction-icon",
            props: {
                transactionGroup: {
                    type: String,
                    required: !0
                }
            }
        },
        p = (n(601), n(2)),
        y = Object(p.a)(h, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "tx__icon"
            }, [t("img", {
                class: this.transactionGroup,
                attrs: {
                    src: n(600),
                    alt: "cosmic atom token"
                }
            })])
        }, [], !1, null, null, null).exports,
        v = n(23),
        g = n.n(v),
        M = "cosmos-sdk/MsgSend",
        L = "cosmos-sdk/MsgCreateValidator",
        Y = "cosmos-sdk/MsgEditValidator",
        b = "cosmos-sdk/MsgDelegate",
        w = "cosmos-sdk/MsgUndelegate",
        k = "cosmos-sdk/MsgBeginRedelegate",
        D = "cosmos-sdk/MsgUnjail",
        T = "cosmos-sdk/MsgSubmitProposal",
        S = "cosmos-sdk/MsgDeposit",
        x = "cosmos-sdk/MsgVote",
        j = "cosmos-sdk/MsgSetWithdrawAddress",
        A = "cosmos-sdk/MsgWithdrawDelegationReward",
        O = "cosmos-sdk/MsgWithdrawValidatorCommission",
        H = (r = {}, g()(r, M, "banking"), g()(r, L, "staking"), g()(r, Y, "staking"), g()(r, b, "staking"), g()(r, w, "staking"), g()(r, k, "staking"), g()(r, D, "staking"), g()(r, T, "governance"), g()(r, S, "governance"), g()(r, x, "governance"), g()(r, j, "distribution"), g()(r, A, "distribution"), g()(r, O, "distribution"), r),
        E = n(1),
        P = n.n(E),
        C = n(3),
        $ = {
            name: "transaction-fees",
            filters: {
                atoms: C.a,
                viewDenom: C.f
            },
            props: {
                time: {
                    type: Date,
                    required: !0
                },
                block: {
                    type: Number,
                    required: !0
                },
                fees: {
                    type: Object,
                    required: !0
                }
            },
            computed: {
                date: function() {
                    var e = P()(this.time);
                    return e.format("".concat(P()().isSame(e, "day") ? "" : "MMM Do YYYY ", "HH:mm:ss"))
                }
            }
        },
        F = Object(p.a)($, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", [n("div", [e._v("\n    Network Fee: \n    "), n("b", [e._v(e._s(e._f("atoms")(e.fees.amount)))]), e._v(" "), n("span", [e._v(e._s(e._f("viewDenom")(e.fees.denom)))])]), e._v(" "), n("div", [n("router-link", {
                attrs: {
                    to: {
                        name: "block",
                        params: {
                            height: e.block
                        }
                    }
                }
            }, [e._v("Block #" + e._s(e.block) + " ")]), e._v("\n    @ " + e._s(e.date) + "\n  ")], 1)])
        }, [], !1, null, null, null).exports,
        W = n(53);
    var N = function(e, t) {
            var n = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ATOM";
                    return e.tx.value.fee && e.tx.value.fee.amount ? e.tx.value.fee.amount[0] : {
                        amount: "0",
                        denom: t
                    }
                }(t),
                r = t.tx.value.memo,
                a = t.tx.value.msg.map(function(e, a) {
                    return function(e, t, n, r, a, i, s) {
                        return d()({}, e, {
                            key: "".concat(i, "_").concat(s),
                            blockNumber: Number(a),
                            time: new Date(r),
                            group: H[e.type],
                            memo: n,
                            fees: t
                        })
                    }(e, n, r, t.time, t.height, t.txhash, a)
                });
            return e.concat(a)
        },
        z = function(e) {
            return Array.isArray(e.value.amount) ? e.value.amount[0] : e.value.amount
        },
        R = {
            name: "send-message-details",
            filters: {
                atoms: C.a,
                viewDenom: C.f,
                prettyLong: C.e
            },
            components: {
                Bech32: W.a
            },
            props: {
                transaction: {
                    type: Object,
                    required: !0
                },
                sessionAddress: {
                    type: String,
                    required: !1,
                    default: null
                }
            },
            computed: {
                coin: function() {
                    return z(this.transaction)
                },
                toYourself: function() {
                    var e = this.transaction.value;
                    return e.from_address === this.sessionAddress && e.to_address === this.sessionAddress
                },
                sentFromSessionAddress: function() {
                    var e = this.transaction.value;
                    return this.sessionAddress === e.from_address && this.sessionAddress !== e.to_address
                },
                receivedToSessionAddress: function() {
                    var e = this.transaction.value;
                    return this.sessionAddress === e.to_address && this.sessionAddress !== e.from_address
                },
                caption: function() {
                    var e = this.transaction.value;
                    return e.to_address === this.sessionAddress && e.from_address !== this.sessionAddress ? "Received" : "Sent"
                }
            }
        },
        I = Object(p.a)(R, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", [n("div", {
                staticClass: "tx__content__caption"
            }, [n("p", [e._v("\n      " + e._s(e.caption) + "\n      "), n("b", [e._v(" " + e._s(e._f("prettyLong")(e._f("atoms")(e.coin.amount))))]), e._v(" "), n("span", [e._v(" " + e._s(e._f("viewDenom")(e.coin.denom)))])])]), e._v(" "), n("div", {
                staticClass: "tx__content__information"
            }, [e.toYourself ? [e._v("To yourself!")] : e.sentFromSessionAddress ? [e._v("\n      To \n      "), n("Bech32", {
                attrs: {
                    address: e.transaction.value.to_address
                }
            })] : e.receivedToSessionAddress ? [e._v("\n      From \n      "), n("Bech32", {
                attrs: {
                    address: e.transaction.value.from_address
                }
            })] : [e._v("\n      From \n      "), n("Bech32", {
                attrs: {
                    address: e.transaction.value.from_address
                }
            }), e._v(" to \n      "), n("Bech32", {
                attrs: {
                    address: e.transaction.value.to_address
                }
            })], e._v(" "), e.transaction.memo ? n("span", [e._v(" - " + e._s(e.transaction.memo))]) : e._e()], 2)])
        }, [], !1, null, null, null).exports,
        U = n(14),
        q = {
            name: "delegate-message-details",
            filters: {
                atoms: C.a,
                viewDenom: C.f,
                prettyLong: C.e,
                resolveValidatorName: U.b
            },
            props: {
                transaction: {
                    type: Object,
                    required: !0
                },
                validators: {
                    type: Object,
                    required: !0
                }
            },
            computed: {
                coin: function() {
                    return z(this.transaction)
                }
            }
        },
        J = Object(p.a)(q, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", [n("div", {
                staticClass: "tx__content__caption"
            }, [n("p", [e._v("\n      Delegated\n      "), n("b", [e._v(e._s(e._f("prettyLong")(e._f("atoms")(e.coin.amount))))]), e._v(" "), n("span", [e._v(" " + e._s(e._f("viewDenom")(e.coin.denom)))])])]), e._v(" "), n("div", {
                staticClass: "tx__content__information"
            }, [e._v("\n    To \n    "), n("router-link", {
                attrs: {
                    to: "staking/validators/" + e.transaction.value.validator_address
                }
            }, [e._v("\n      " + e._s(e._f("resolveValidatorName")(e.transaction.value.validator_address, e.validators)) + "\n    ")])], 1)])
        }, [], !1, null, null, null).exports,
        B = {
            name: "deposit-message-details",
            filters: {
                atoms: C.a,
                viewDenom: C.f,
                prettyLong: C.e,
                formatBech32: U.a
            },
            props: {
                transaction: {
                    type: Object,
                    required: !0
                },
                validators: {
                    type: Object,
                    required: !0
                }
            },
            computed: {
                deposit: function() {
                    return this.transaction.value.amount[0]
                }
            }
        },
        V = Object(p.a)(B, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", [n("div", {
                staticClass: "tx__content__caption"
            }, [n("p", [e._v("\n      Deposited\n      "), n("b", [e._v(e._s(e._f("prettyLong")(e._f("atoms")(e.deposit.amount))))]), e._v(" "), n("span", [e._v(e._s(e._f("viewDenom")(e.deposit.denom)))])])]), e._v(" "), n("div", {
                staticClass: "tx__content__information"
            }, [e._v("\n    On\n    "), n("router-link", {
                attrs: {
                    to: "/governance/" + e.transaction.value.proposal_id
                }
            }, [e._v("Proposal #" + e._s(e.transaction.value.proposal_id))])], 1)])
        }, [], !1, null, null, null).exports,
        G = {
            name: "edit-validator-message-details",
            filters: {
                atoms: C.a,
                viewDenom: C.f,
                prettyLong: C.e,
                resolveValidatorName: U.b
            },
            props: {
                transaction: {
                    type: Object,
                    required: !0
                },
                validators: {
                    type: Object,
                    required: !0
                }
            }
        },
        K = Object(p.a)(G, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", [e._m(0), e._v(" "), n("div", {
                staticClass: "tx__content__information"
            }, [e._v("\n    Monikor \n    "), n("router-link", {
                attrs: {
                    to: "staking/validators/" + e.transaction.value.validator_address
                }
            }, [e._v("\n      " + e._s(e._f("resolveValidatorName")(e.transaction.value.validator_address, e.validators)) + "\n    ")])], 1)])
        }, [function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "tx__content__caption"
            }, [t("p", [this._v("Edit validator")])])
        }], !1, null, null, null).exports,
        Z = {
            name: "submit-proposal-message-details",
            filters: {
                atoms: C.a,
                viewDenom: C.f,
                prettyLong: C.e,
                formatBech32: U.a
            },
            props: {
                transaction: {
                    type: Object,
                    required: !0
                },
                validators: {
                    type: Object,
                    required: !0
                }
            },
            computed: {
                initialDeposit: function() {
                    return this.transaction.value.initial_deposit[0]
                }
            }
        },
        Q = Object(p.a)(Z, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", [n("div", {
                staticClass: "tx__content__caption"
            }, [n("p", [e._v("\n      Submitted " + e._s(e.transaction.value.proposal_type.toLowerCase()) + " proposal\n      "), n("b", [e._v(e._s(e._f("prettyLong")(e._f("atoms")(e.initialDeposit.amount))))]), e._v(" "), n("span", [e._v(e._s(e._f("viewDenom")(e.initialDeposit.denom)))])])]), e._v(" "), n("div", {
                staticClass: "tx__content__information"
            }, [e._v("\n    Title: \n    "), n("i", [e._v(e._s(e.transaction.value.title))])])])
        }, [], !1, null, null, null).exports,
        X = {
            name: "undelegate-message-details",
            filters: {
                atoms: C.a,
                viewDenom: C.f,
                prettyLong: C.e,
                resolveValidatorName: U.b
            },
            props: {
                transaction: {
                    type: Object,
                    required: !0
                },
                validators: {
                    type: Object,
                    required: !0
                }
            },
            computed: {
                liquidDateCaption: function() {
                    return "(liquid ".concat(P()(this.transaction.liquidDate).fromNow(), ")")
                },
                coin: function() {
                    return z(this.transaction)
                }
            }
        },
        ee = (n(604), Object(p.a)(X, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", [n("div", {
                staticClass: "tx__content__caption"
            }, [n("p", [e._v("\n      Undelegated\n      "), n("b", [e._v(e._s(e._f("prettyLong")(e._f("atoms")(e.coin.amount))))]), e._v(" "), n("span", [e._v(" " + e._s(e._f("viewDenom")(e.coin.denom)))]), e._v(" "), e.transaction.liquidDate ? n("span", {
                staticClass: "tx-unbonding__time-diff"
            }, [e._v(" " + e._s(e.liquidDateCaption))]) : e._e()])]), e._v(" "), n("div", {
                staticClass: "tx__content__information"
            }, [e._v("\n    From \n    "), n("router-link", {
                attrs: {
                    to: "/validators/" + e.transaction.value.validator_address
                }
            }, [e._v("\n      " + e._s(e._f("resolveValidatorName")(e.transaction.value.validator_address, e.validators)) + "\n    ")])], 1)])
        }, [], !1, null, null, null).exports),
        te = {
            name: "unjail-message-details",
            filters: {
                formatBech32: U.a
            },
            props: {
                transaction: {
                    type: Object,
                    required: !0
                },
                validators: {
                    type: Object,
                    required: !0
                }
            }
        },
        ne = Object(p.a)(te, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", [e._m(0), e._v(" "), n("div", {
                staticClass: "tx__content__information"
            }, [e._v("\n    Moniker:\n    "), n("router-link", {
                attrs: {
                    to: "staking/validators/" + e.transaction.value.address
                }
            }, [e._v(e._s(e._f("formatBech32")(e.transaction.value.address)))])], 1)])
        }, [function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "tx__content__caption"
            }, [t("p", [this._v("Unjail")])])
        }], !1, null, null, null).exports,
        re = {
            name: "create-validator-message-details",
            filters: {
                atoms: C.a,
                viewDenom: C.f,
                prettyLong: C.e,
                resolveValidatorName: U.b
            },
            props: {
                transaction: {
                    type: Object,
                    required: !0
                },
                validators: {
                    type: Object,
                    required: !0
                }
            }
        },
        ae = Object(p.a)(re, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", [e._m(0), e._v(" "), n("div", {
                staticClass: "tx__content__information"
            }, [e._v("\n    Monikor \n    "), n("router-link", {
                attrs: {
                    to: "staking/validators/" + e.transaction.value.validator_address
                }
            }, [e._v("\n      " + e._s(e._f("resolveValidatorName")(e.transaction.value.validator_address, e.validators)) + "\n    ")])], 1)])
        }, [function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "tx__content__caption"
            }, [t("p", [this._v("\n      Create validator\n    ")])])
        }], !1, null, null, null).exports,
        ie = {
            name: "vote-message-details",
            filters: {
                formatBech32: U.a
            },
            props: {
                transaction: {
                    type: Object,
                    required: !0
                },
                validators: {
                    type: Object,
                    required: !0
                }
            }
        },
        se = Object(p.a)(ie, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", [n("div", {
                staticClass: "tx__content__caption"
            }, [n("p", [e._v("Voted " + e._s(e.transaction.value.option))])]), e._v(" "), n("div", {
                staticClass: "tx__content__information"
            }, [e._v("\n    On \n    "), n("router-link", {
                attrs: {
                    to: "/governance/" + e.transaction.value.proposal_id
                }
            }, [e._v("Proposal #" + e._s(e.transaction.value.proposal_id))])], 1)])
        }, [], !1, null, null, null).exports,
        oe = {
            name: "begin-redelegate-message-details",
            filters: {
                atoms: C.a,
                viewDenom: C.f,
                prettyLong: C.e,
                resolveValidatorName: U.b
            },
            props: {
                transaction: {
                    type: Object,
                    required: !0
                },
                validators: {
                    type: Object,
                    required: !0
                }
            },
            computed: {
                coin: function() {
                    return z(this.transaction)
                }
            }
        },
        ue = Object(p.a)(oe, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", [n("div", {
                staticClass: "tx__content__caption"
            }, [n("p", [e._v("\n      Redelegated\n      "), n("b", [e._v(e._s(e._f("prettyLong")(e._f("atoms")(e.coin.amount))))]), e._v(" "), n("span", [e._v(" " + e._s(e._f("viewDenom")(e.coin.denom)))])])]), e._v(" "), n("div", {
                staticClass: "tx__content__information"
            }, [e._v("\n    From \n    "), n("router-link", {
                attrs: {
                    to: "staking/validators/" + e.transaction.value.validator_src_address
                }
            }, [e._v("\n      " + e._s(e._f("resolveValidatorName")(e.transaction.value.validator_src_address, e.validators)) + " ")]), e._v("To \n    "), n("router-link", {
                attrs: {
                    to: "staking/validators/" + e.transaction.value.validator_dst_address
                }
            }, [e._v("\n      " + e._s(e._f("resolveValidatorName")(e.transaction.value.validator_dst_address, e.validators)) + "\n    ")])], 1)])
        }, [], !1, null, null, null).exports,
        de = {
            name: "set-withdraw-address-message-details",
            filters: {
                atoms: C.a,
                viewDenom: C.f,
                prettyLong: C.e
            },
            props: {
                transaction: {
                    type: Object,
                    required: !0
                },
                validators: {
                    type: Object,
                    required: !0
                }
            }
        },
        le = Object(p.a)(de, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", [this._m(0), this._v(" "), t("div", {
                staticClass: "tx__content__information"
            }, [this._v("\n    To " + this._s(this.transaction.value.withdraw_address) + "\n  ")])])
        }, [function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "tx__content__caption"
            }, [t("p", [this._v("Update withdraw address")])])
        }], !1, null, null, null).exports,
        ce = {
            name: "withdraw-delegation-reward-message-details",
            filters: {
                atoms: C.a,
                viewDenom: C.f,
                prettyLong: C.e,
                resolveValidatorName: U.b
            },
            props: {
                transaction: {
                    type: Object,
                    required: !0
                },
                validators: {
                    type: Object,
                    required: !0
                }
            }
        },
        _e = Object(p.a)(ce, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", [e._m(0), e._v(" "), n("div", {
                staticClass: "tx__content__information"
            }, [e._v("\n    From \n    "), n("router-link", {
                attrs: {
                    to: "staking/validators/" + e.transaction.value.validator_address
                }
            }, [e._v(e._s(e._f("resolveValidatorName")(e.transaction.value.validator_address, e.validators)))])], 1)])
        }, [function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "tx__content__caption"
            }, [t("p", [this._v("Withdrawal")])])
        }], !1, null, null, null).exports,
        me = {
            name: "withdraw-validator-commission-message-details",
            filters: {
                atoms: C.a,
                viewDenom: C.f,
                prettyLong: C.e,
                resolveValidatorName: U.b
            },
            props: {
                transaction: {
                    type: Object,
                    required: !0
                },
                validators: {
                    type: Object,
                    required: !0
                }
            }
        },
        fe = Object(p.a)(me, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", [e._m(0), e._v(" "), n("div", {
                staticClass: "tx__content__information"
            }, [e._v("\n    From \n    "), n("router-link", {
                attrs: {
                    to: "staking/validators/" + e.transaction.value.validator_address
                }
            }, [e._v(e._s(e._f("resolveValidatorName")(e.transaction.value.validator_address, e.validators)))])], 1)])
        }, [function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "tx__content__caption"
            }, [t("p", [this._v("Withdraw validator commission")])])
        }], !1, null, null, null).exports,
        he = {
            name: "transaction-details",
            components: {
                TransactionMetadata: F,
                Bech32: W.a,
                SendMessageDetails: I,
                DelegateMessageDetails: J,
                DepositMessageDetails: V,
                EditValidatorMessageDetails: K,
                SubmitProposalMessageDetails: Q,
                UndelegateMessageDetails: ee,
                UnjailMessageDetails: ne,
                CreateValidatorMessageDetails: ae,
                VoteMessageDetails: se,
                BeginRedelegateMessageDetails: ue,
                SetWithdrawAddressMessageDetails: le,
                WithdrawDelegationRewardMessageDetails: _e,
                WithdrawValidatorCommissionMessageDetails: fe
            },
            props: {
                transaction: {
                    type: Object,
                    required: !0
                },
                validators: {
                    type: Object,
                    required: !0
                },
                address: {
                    type: String,
                    required: !1,
                    default: ""
                },
                showMetaData: {
                    type: Boolean,
                    default: !0
                }
            },
            computed: {
                messageTypeComponent: function() {
                    switch (this.transaction.type) {
                        case M:
                            return "send-message-details";
                        case b:
                            return "delegate-message-details";
                        case L:
                            return "create-validator-message-details";
                        case Y:
                            return "edit-validator-message-details";
                        case w:
                            return "undelegate-message-details";
                        case k:
                            return "begin-redelegate-message-details";
                        case D:
                            return "unjail-message-details";
                        case T:
                            return "submit-proposal-message-details";
                        case S:
                            return "deposit-message-details";
                        case x:
                            return "vote-message-details";
                        case j:
                            return "set-withdraw-address-message-details";
                        case A:
                            return "withdraw-delegation-reward-message-details";
                        case O:
                            return "withdraw-validator-commission-message-details";
                        default:
                            return ""
                    }
                }
            }
        },
        pe = (n(605), {
            name: "tx-item",
            components: {
                TransactionIcon: y,
                TransactionDetails: Object(p.a)(he, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "tx__content"
                    }, [n(e.messageTypeComponent, {
                        tag: "component",
                        staticClass: "tx__content__left",
                        attrs: {
                            transaction: e.transaction,
                            validators: e.validators,
                            "session-address": e.address
                        }
                    }), e._v(" "), e.showMetaData ? n("TransactionMetadata", {
                        staticClass: "tx__content__right",
                        attrs: {
                            fees: e.transaction.fees,
                            block: e.transaction.blockNumber,
                            time: e.transaction.time
                        }
                    }) : e._e()], 1)
                }, [], !1, null, "bc107f32", null).exports
            },
            props: {
                transaction: {
                    type: Object,
                    required: !0
                },
                validators: {
                    type: Object,
                    required: !0
                },
                address: {
                    type: String,
                    default: null
                },
                showMetaData: {
                    type: Boolean,
                    default: !0
                }
            }
        }),
        ye = (n(606), Object(p.a)(pe, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "tx"
            }, [t("TransactionIcon", {
                attrs: {
                    "transaction-group": this.transaction.group
                }
            }), this._v(" "), t("TransactionDetails", {
                attrs: {
                    "show-meta-data": this.showMetaData,
                    transaction: this.transaction,
                    validators: this.validators,
                    address: this.address
                }
            })], 1)
        }, [], !1, null, null, null).exports),
        ve = {
            name: "table-invoice",
            filters: {
                fullDecimals: C.b,
                viewDenom: C.f
            },
            props: {
                amount: {
                    type: Number,
                    required: !0
                },
                estimatedFee: {
                    type: Number,
                    required: !0
                },
                bondDenom: {
                    type: String,
                    required: !0
                }
            },
            data: function() {
                return {
                    info: "Estimated network fees based on simulation."
                }
            },
            computed: {
                subTotal: function() {
                    return this.amount
                },
                total: function() {
                    return this.estimatedFee + this.subTotal
                }
            }
        },
        ge = (n(607), Object(p.a)(ve, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", [n("ul", {
                staticClass: "table-invoice"
            }, [e.subTotal > 0 ? n("li", [n("span", [e._v("Subtotal")]), e._v(" "), n("span", [e._v(" " + e._s(e._f("fullDecimals")(e.subTotal)) + " " + e._s(e._f("viewDenom")(e.bondDenom)) + " ")])]) : e._e(), e._v(" "), n("li", [n("span", [e._v("Network Fee")]), e._v(" "), n("span", [e._v("\n        " + e._s(e._f("fullDecimals")(e.estimatedFee)) + "\n        " + e._s(e._f("viewDenom")(e.bondDenom)) + "\n      ")])]), e._v(" "), n("li", {
                staticClass: "total-row"
            }, [n("span", [e._v("Total")]), e._v(" "), n("span", [e._v(" " + e._s(e._f("fullDecimals")(e.total)) + " " + e._s(e._f("viewDenom")(e.bondDenom)) + " ")])])])])
        }, [], !1, null, "7030068d", null).exports),
        Me = n(21),
        Le = n(122),
        Ye = {
            name: "session-approve",
            components: {
                TmBtn: c.a,
                TmFormGroup: _.a,
                TransactionItem: ye,
                TableInvoice: ge,
                Bech32: W.a,
                TmField: m.a,
                TmFormMsg: f.a
            },
            data: function() {
                return {
                    validators: [],
                    password: null,
                    passwordError: !1
                }
            },
            computed: d()({}, Object(l.b)(["signRequest"]), {
                tx: function() {
                    return this.signRequest ? (e = this.signRequest.signMessage, {
                        tx: {
                            type: "auth/StdTx",
                            value: {
                                msg: (t = JSON.parse(e)).msgs,
                                fee: t.fee,
                                memo: t.memo
                            }
                        }
                    }) : null;
                    var e, t
                },
                transaction: function() {
                    return N([], this.tx)[0]
                },
                fees: function() {
                    return this.tx ? Object(C.a)((e = this.tx.tx, t = e.value.fee, Number(t.amount.length > 0 ? t.amount[0].amount : 0))) : null;
                    var e, t
                },
                senderAddress: function() {
                    return this.signRequest ? this.signRequest.senderAddress : null
                },
                amountCoin: function() {
                    return this.tx ? (e = this.tx.tx, "cosmos-sdk/MsgSend" === (t = e.value.msg)[0].type ? t[0].value.amount[0] : t[0].value.amount) : null;
                    var e, t
                },
                amount: function() {
                    return this.amountCoin ? Object(C.a)(Number(this.amountCoin.amount)) : null
                },
                bondDenom: function() {
                    return this.amountCoin ? this.amountCoin.denom : null
                },
                validatorsAddressMap: function() {
                    var e = {};
                    return this.validators.forEach(function(t) {
                        e[t.operator_address] = t
                    }), e
                }
            }),
            watch: {
                password: function() {
                    this.passwordError = !1
                }
            },
            mounted: function() {
                var e = o()(i.a.mark(function e() {
                    var t;
                    return i.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Object(Le.getValidatorsData)(this.tx.tx);
                            case 2:
                                t = e.sent, this.validators = t;
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            methods: {
                isValidInput: function(e) {
                    return this.$v[e].$touch(), !this.$v[e].$invalid
                },
                approve: function() {
                    var e = o()(i.a.mark(function e() {
                        var t = this;
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.isValidInput("password")) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.next = 3, this.$store.dispatch("approveSignRequest", d()({}, this.signRequest, {
                                        password: this.password
                                    })).catch(function(e) {
                                        "Incorrect password" === e && (t.passwordError = !0)
                                    });
                                case 3:
                                    this.$router.push("/success");
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                reject: function() {
                    var e = o()(i.a.mark(function e() {
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.$store.dispatch("rejectSignRequest", d()({}, this.signRequest));
                                case 2:
                                    window.close();
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                correctPassword: function() {
                    return !this.passwordError
                }
            },
            validations: function() {
                var e = this.correctPassword;
                return {
                    password: {
                        required: Me.required,
                        passwordCorrect: e
                    }
                }
            }
        },
        be = (n(608), n(609), Object(p.a)(Ye, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "session-approve"
            }, [n("h2", [e._v("Approve Transaction")]), e._v(" "), n("br"), e._v(" "), n("div", {
                staticClass: "from"
            }, [e._v("\n    From\n    "), n("Bech32", {
                attrs: {
                    address: e.senderAddress
                }
            })], 1), e._v(" "), e.signRequest ? n("TmFormGroup", [e.transaction ? n("TransactionItem", {
                key: e.transaction.key,
                attrs: {
                    transaction: e.transaction,
                    validators: e.validatorsAddressMap,
                    address: e.senderAddress,
                    "show-meta-data": !1
                }
            }) : e._e(), e._v(" "), n("TableInvoice", {
                staticClass: "approval-table",
                attrs: {
                    amount: e.amount,
                    "estimated-fee": e.fees,
                    "bond-denom": e.bondDenom
                }
            }), e._v(" "), n("TmFormGroup", {
                staticClass: "action-modal-group",
                attrs: {
                    error: e.$v.password.$error && e.$v.password.$invalid,
                    "field-id": "password",
                    "field-label": "Password"
                }
            }, [n("TmField", {
                directives: [{
                    name: "focus",
                    rawName: "v-focus"
                }],
                attrs: {
                    id: "password",
                    type: "password",
                    placeholder: "Password"
                },
                model: {
                    value: e.password,
                    callback: function(t) {
                        e.password = t
                    },
                    expression: "password"
                }
            }), e._v(" "), e.$v.password.$error && !e.$v.password.required ? n("TmFormMsg", {
                attrs: {
                    name: "Password",
                    type: "required"
                }
            }) : e._e(), e._v(" "), e.$v.password.$error && !e.$v.password.passwordCorrect ? n("TmFormMsg", {
                attrs: {
                    name: "Password",
                    type: "custom",
                    msg: "is incorrect"
                }
            }) : e._e()], 1), e._v(" "), n("div", {
                staticClass: "session-approve-footer"
            }, [n("TmBtn", {
                staticClass: "left-button",
                attrs: {
                    id: "reject-btn",
                    value: "Reject",
                    type: "secondary"
                },
                nativeOn: {
                    click: function(t) {
                        return e.reject(t)
                    }
                }
            }), e._v(" "), n("TmBtn", {
                staticClass: "right-button",
                attrs: {
                    id: "approve-btn",
                    value: "Approve",
                    type: "primary"
                },
                nativeOn: {
                    click: function(t) {
                        return e.approve(t)
                    }
                }
            })], 1)], 1) : e._e()], 1)
        }, [], !1, null, "0a68b168", null));
    t.default = be.exports
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(53),
        a = n(41),
        i = {
            name: "account-list",
            components: {
                Bech32: r.a,
                TmBtn: a.a
            },
            props: {
                accounts: {
                    type: Array,
                    required: !0
                },
                buttonAction: {
                    type: Function,
                    required: !0
                },
                buttonText: {
                    type: String,
                    required: !0
                }
            }
        },
        s = (n(564), n(2)),
        o = {
            name: "session-accounts",
            components: {
                AccountList: Object(s.a)(i, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("ul", {
                        staticClass: "account-list"
                    }, e._l(e.accounts, function(t) {
                        return n("li", {
                            key: t.name,
                            staticClass: "account"
                        }, [n("div", {
                            staticClass: "account-info"
                        }, [n("h3", [e._v(e._s(t.name))]), e._v(" "), n("Bech32", {
                            attrs: {
                                address: t.address
                            }
                        })], 1), e._v(" "), e.buttonAction ? n("TmBtn", {
                            staticClass: "account-button",
                            attrs: {
                                value: e.buttonText,
                                color: "primary"
                            },
                            nativeOn: {
                                click: function(n) {
                                    return e.buttonAction(t.address)
                                }
                            }
                        }) : e._e()], 1)
                    }), 0)
                }, [], !1, null, "7f4dc840", null).exports,
                SessionFrame: n(40).a
            },
            computed: {
                accounts: function() {
                    return this.$store.state.accounts
                }
            },
            methods: {
                goToLunie: function() {
                    window.open("https://wallet.testnet.color-platform.org/#/extension", "_blank", "noreferrer noopener")
                }
            }
        },
        u = (n(567), Object(s.a)(o, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("SessionFrame", {
                attrs: {
                    "hide-back": !0
                }
            }, [t("div", {
                staticClass: "session-container"
            }, [t("div", {
                staticClass: "accounts-header"
            }, [t("h2", {
                staticClass: "session-title"
            }, [t("img", {
                staticClass: "lunie-logo",
                attrs: {
                    src: n(194)
                }
            })]), this._v(" "), t("p", [this._v("\n        You can use the account(s) below to explore Color Wallet and to approve\n        transactions.\n      ")])]), this._v(" "), t("div", {
                staticClass: "session-main"
            }, [t("AccountList", {
                attrs: {
                    accounts: this.accounts,
                    "button-action": this.goToLunie,
                    "button-text": "Go to Color Wallet"
                }
            })], 1), this._v(" "), t("router-link", {
                staticClass: "back-link",
                attrs: {
                    to: "/welcome"
                }
            }, [this._v("Want to add another account?")])], 1)])
        }, [], !1, null, "3a63f1e0", null));
    t.default = u.exports
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = {};
    n.r(r), n.d(r, "session", function() {
        return f
    }), n.d(r, "route", function() {
        return h
    }), n.d(r, "signRequest", function() {
        return p
    });
    var a = {};
    n.r(a), n.d(a, "setSignRequest", function() {
        return y
    }), n.d(a, "setAccounts", function() {
        return v
    }), n.d(a, "setInsecureMode", function() {
        return g
    }), n.d(a, "notify", function() {
        return M
    });
    var i = n(12),
        s = n.n(i),
        o = n(20),
        u = n.n(o),
        d = n(33),
        l = n(324),
        c = n(37),
        _ = n(123),
        m = n.n(_),
        f = function(e) {
            return {
                accounts: e.accounts
            }
        },
        h = function(e) {
            return e.route
        },
        p = function(e) {
            return e.signRequest
        },
        y = function(e, t) {
            e.signRequest = t
        },
        v = function(e, t) {
            e.accounts = t
        },
        g = function() {},
        M = function() {},
        L = n(122);
    d.a.use(c.a), d.a.use(m.a);
    var Y = new c.a.Store({
        state: {
            accounts: [],
            signRequest: null,
            session: {
                insecureMode: !0
            }
        },
        getters: r,
        modules: {},
        actions: L,
        mutations: a
    });

    function b(e) {
        return Object.prototype.toString.call(e).indexOf("Error") > -1
    }

    function w(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }
    var k = {
        name: "RouterView",
        functional: !0,
        props: {
            name: {
                type: String,
                default: "default"
            }
        },
        render: function(e, t) {
            var n = t.props,
                r = t.children,
                a = t.parent,
                i = t.data;
            i.routerView = !0;
            for (var s = a.$createElement, o = n.name, u = a.$route, d = a._routerViewCache || (a._routerViewCache = {}), l = 0, c = !1; a && a._routerRoot !== a;) {
                var _ = a.$vnode && a.$vnode.data;
                _ && (_.routerView && l++, _.keepAlive && a._inactive && (c = !0)), a = a.$parent
            }
            if (i.routerViewDepth = l, c) return s(d[o], i, r);
            var m = u.matched[l];
            if (!m) return d[o] = null, s();
            var f = d[o] = m.components[o];
            i.registerRouteInstance = function(e, t) {
                var n = m.instances[o];
                (t && n !== e || !t && n === e) && (m.instances[o] = t)
            }, (i.hook || (i.hook = {})).prepatch = function(e, t) {
                m.instances[o] = t.componentInstance
            }, i.hook.init = function(e) {
                e.data.keepAlive && e.componentInstance && e.componentInstance !== m.instances[o] && (m.instances[o] = e.componentInstance)
            };
            var h = i.props = function(e, t) {
                switch (typeof t) {
                    case "undefined":
                        return;
                    case "object":
                        return t;
                    case "function":
                        return t(e);
                    case "boolean":
                        return t ? e.params : void 0;
                    default:
                        0
                }
            }(u, m.props && m.props[o]);
            if (h) {
                h = i.props = w({}, h);
                var p = i.attrs = i.attrs || {};
                for (var y in h) f.props && y in f.props || (p[y] = h[y], delete h[y])
            }
            return s(f, i, r)
        }
    };
    var D = /[!'()*]/g,
        T = function(e) {
            return "%" + e.charCodeAt(0).toString(16)
        },
        S = /%2C/g,
        x = function(e) {
            return encodeURIComponent(e).replace(D, T).replace(S, ",")
        },
        j = decodeURIComponent;

    function A(e) {
        var t = {};
        return (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach(function(e) {
            var n = e.replace(/\+/g, " ").split("="),
                r = j(n.shift()),
                a = n.length > 0 ? j(n.join("=")) : null;
            void 0 === t[r] ? t[r] = a : Array.isArray(t[r]) ? t[r].push(a) : t[r] = [t[r], a]
        }), t) : t
    }

    function O(e) {
        var t = e ? Object.keys(e).map(function(t) {
            var n = e[t];
            if (void 0 === n) return "";
            if (null === n) return x(t);
            if (Array.isArray(n)) {
                var r = [];
                return n.forEach(function(e) {
                    void 0 !== e && (null === e ? r.push(x(t)) : r.push(x(t) + "=" + x(e)))
                }), r.join("&")
            }
            return x(t) + "=" + x(n)
        }).filter(function(e) {
            return e.length > 0
        }).join("&") : null;
        return t ? "?" + t : ""
    }
    var H = /\/?$/;

    function E(e, t, n, r) {
        var a = r && r.options.stringifyQuery,
            i = t.query || {};
        try {
            i = P(i)
        } catch (e) {}
        var s = {
            name: t.name || e && e.name,
            meta: e && e.meta || {},
            path: t.path || "/",
            hash: t.hash || "",
            query: i,
            params: t.params || {},
            fullPath: F(t, a),
            matched: e ? $(e) : []
        };
        return n && (s.redirectedFrom = F(n, a)), Object.freeze(s)
    }

    function P(e) {
        if (Array.isArray(e)) return e.map(P);
        if (e && "object" == typeof e) {
            var t = {};
            for (var n in e) t[n] = P(e[n]);
            return t
        }
        return e
    }
    var C = E(null, {
        path: "/"
    });

    function $(e) {
        for (var t = []; e;) t.unshift(e), e = e.parent;
        return t
    }

    function F(e, t) {
        var n = e.path,
            r = e.query;
        void 0 === r && (r = {});
        var a = e.hash;
        return void 0 === a && (a = ""), (n || "/") + (t || O)(r) + a
    }

    function W(e, t) {
        return t === C ? e === t : !!t && (e.path && t.path ? e.path.replace(H, "") === t.path.replace(H, "") && e.hash === t.hash && N(e.query, t.query) : !(!e.name || !t.name) && (e.name === t.name && e.hash === t.hash && N(e.query, t.query) && N(e.params, t.params)))
    }

    function N(e, t) {
        if (void 0 === e && (e = {}), void 0 === t && (t = {}), !e || !t) return e === t;
        var n = Object.keys(e),
            r = Object.keys(t);
        return n.length === r.length && n.every(function(n) {
            var r = e[n],
                a = t[n];
            return "object" == typeof r && "object" == typeof a ? N(r, a) : String(r) === String(a)
        })
    }
    var z, R = [String, Object],
        I = [String, Array],
        U = {
            name: "RouterLink",
            props: {
                to: {
                    type: R,
                    required: !0
                },
                tag: {
                    type: String,
                    default: "a"
                },
                exact: Boolean,
                append: Boolean,
                replace: Boolean,
                activeClass: String,
                exactActiveClass: String,
                event: {
                    type: I,
                    default: "click"
                }
            },
            render: function(e) {
                var t = this,
                    n = this.$router,
                    r = this.$route,
                    a = n.resolve(this.to, r, this.append),
                    i = a.location,
                    s = a.route,
                    o = a.href,
                    u = {},
                    d = n.options.linkActiveClass,
                    l = n.options.linkExactActiveClass,
                    c = null == d ? "router-link-active" : d,
                    _ = null == l ? "router-link-exact-active" : l,
                    m = null == this.activeClass ? c : this.activeClass,
                    f = null == this.exactActiveClass ? _ : this.exactActiveClass,
                    h = i.path ? E(null, i, null, n) : s;
                u[f] = W(r, h), u[m] = this.exact ? u[f] : function(e, t) {
                    return 0 === e.path.replace(H, "/").indexOf(t.path.replace(H, "/")) && (!t.hash || e.hash === t.hash) && function(e, t) {
                        for (var n in t)
                            if (!(n in e)) return !1;
                        return !0
                    }(e.query, t.query)
                }(r, h);
                var p = function(e) {
                        q(e) && (t.replace ? n.replace(i) : n.push(i))
                    },
                    y = {
                        click: q
                    };
                Array.isArray(this.event) ? this.event.forEach(function(e) {
                    y[e] = p
                }) : y[this.event] = p;
                var v = {
                    class: u
                };
                if ("a" === this.tag) v.on = y, v.attrs = {
                    href: o
                };
                else {
                    var g = function e(t) {
                        if (t)
                            for (var n, r = 0; r < t.length; r++) {
                                if ("a" === (n = t[r]).tag) return n;
                                if (n.children && (n = e(n.children))) return n
                            }
                    }(this.$slots.default);
                    if (g) g.isStatic = !1, (g.data = w({}, g.data)).on = y, (g.data.attrs = w({}, g.data.attrs)).href = o;
                    else v.on = y
                }
                return e(this.tag, v, this.$slots.default)
            }
        };

    function q(e) {
        if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.defaultPrevented || void 0 !== e.button && 0 !== e.button)) {
            if (e.currentTarget && e.currentTarget.getAttribute) {
                var t = e.currentTarget.getAttribute("target");
                if (/\b_blank\b/i.test(t)) return
            }
            return e.preventDefault && e.preventDefault(), !0
        }
    }
    var J = "undefined" != typeof window;

    function B(e, t, n) {
        var r = e.charAt(0);
        if ("/" === r) return e;
        if ("?" === r || "#" === r) return t + e;
        var a = t.split("/");
        n && a[a.length - 1] || a.pop();
        for (var i = e.replace(/^\//, "").split("/"), s = 0; s < i.length; s++) {
            var o = i[s];
            ".." === o ? a.pop() : "." !== o && a.push(o)
        }
        return "" !== a[0] && a.unshift(""), a.join("/")
    }

    function V(e) {
        return e.replace(/\/\//g, "/")
    }
    var G = Array.isArray || function(e) {
            return "[object Array]" == Object.prototype.toString.call(e)
        },
        K = le,
        Z = ne,
        Q = function(e, t) {
            return ae(ne(e, t))
        },
        X = ae,
        ee = de,
        te = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

    function ne(e, t) {
        for (var n, r = [], a = 0, i = 0, s = "", o = t && t.delimiter || "/"; null != (n = te.exec(e));) {
            var u = n[0],
                d = n[1],
                l = n.index;
            if (s += e.slice(i, l), i = l + u.length, d) s += d[1];
            else {
                var c = e[i],
                    _ = n[2],
                    m = n[3],
                    f = n[4],
                    h = n[5],
                    p = n[6],
                    y = n[7];
                s && (r.push(s), s = "");
                var v = null != _ && null != c && c !== _,
                    g = "+" === p || "*" === p,
                    M = "?" === p || "*" === p,
                    L = n[2] || o,
                    Y = f || h;
                r.push({
                    name: m || a++,
                    prefix: _ || "",
                    delimiter: L,
                    optional: M,
                    repeat: g,
                    partial: v,
                    asterisk: !!y,
                    pattern: Y ? se(Y) : y ? ".*" : "[^" + ie(L) + "]+?"
                })
            }
        }
        return i < e.length && (s += e.substr(i)), s && r.push(s), r
    }

    function re(e) {
        return encodeURI(e).replace(/[\/?#]/g, function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        })
    }

    function ae(e) {
        for (var t = new Array(e.length), n = 0; n < e.length; n++) "object" == typeof e[n] && (t[n] = new RegExp("^(?:" + e[n].pattern + ")$"));
        return function(n, r) {
            for (var a = "", i = n || {}, s = (r || {}).pretty ? re : encodeURIComponent, o = 0; o < e.length; o++) {
                var u = e[o];
                if ("string" != typeof u) {
                    var d, l = i[u.name];
                    if (null == l) {
                        if (u.optional) {
                            u.partial && (a += u.prefix);
                            continue
                        }
                        throw new TypeError('Expected "' + u.name + '" to be defined')
                    }
                    if (G(l)) {
                        if (!u.repeat) throw new TypeError('Expected "' + u.name + '" to not repeat, but received `' + JSON.stringify(l) + "`");
                        if (0 === l.length) {
                            if (u.optional) continue;
                            throw new TypeError('Expected "' + u.name + '" to not be empty')
                        }
                        for (var c = 0; c < l.length; c++) {
                            if (d = s(l[c]), !t[o].test(d)) throw new TypeError('Expected all "' + u.name + '" to match "' + u.pattern + '", but received `' + JSON.stringify(d) + "`");
                            a += (0 === c ? u.prefix : u.delimiter) + d
                        }
                    } else {
                        if (d = u.asterisk ? encodeURI(l).replace(/[?#]/g, function(e) {
                                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                            }) : s(l), !t[o].test(d)) throw new TypeError('Expected "' + u.name + '" to match "' + u.pattern + '", but received "' + d + '"');
                        a += u.prefix + d
                    }
                } else a += u
            }
            return a
        }
    }

    function ie(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
    }

    function se(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1")
    }

    function oe(e, t) {
        return e.keys = t, e
    }

    function ue(e) {
        return e.sensitive ? "" : "i"
    }

    function de(e, t, n) {
        G(t) || (n = t || n, t = []);
        for (var r = (n = n || {}).strict, a = !1 !== n.end, i = "", s = 0; s < e.length; s++) {
            var o = e[s];
            if ("string" == typeof o) i += ie(o);
            else {
                var u = ie(o.prefix),
                    d = "(?:" + o.pattern + ")";
                t.push(o), o.repeat && (d += "(?:" + u + d + ")*"), i += d = o.optional ? o.partial ? u + "(" + d + ")?" : "(?:" + u + "(" + d + "))?" : u + "(" + d + ")"
            }
        }
        var l = ie(n.delimiter || "/"),
            c = i.slice(-l.length) === l;
        return r || (i = (c ? i.slice(0, -l.length) : i) + "(?:" + l + "(?=$))?"), i += a ? "$" : r && c ? "" : "(?=" + l + "|$)", oe(new RegExp("^" + i, ue(n)), t)
    }

    function le(e, t, n) {
        return G(t) || (n = t || n, t = []), n = n || {}, e instanceof RegExp ? function(e, t) {
            var n = e.source.match(/\((?!\?)/g);
            if (n)
                for (var r = 0; r < n.length; r++) t.push({
                    name: r,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    partial: !1,
                    asterisk: !1,
                    pattern: null
                });
            return oe(e, t)
        }(e, t) : G(e) ? function(e, t, n) {
            for (var r = [], a = 0; a < e.length; a++) r.push(le(e[a], t, n).source);
            return oe(new RegExp("(?:" + r.join("|") + ")", ue(n)), t)
        }(e, t, n) : function(e, t, n) {
            return de(ne(e, n), t, n)
        }(e, t, n)
    }
    K.parse = Z, K.compile = Q, K.tokensToFunction = X, K.tokensToRegExp = ee;
    var ce = Object.create(null);

    function _e(e, t, n) {
        t = t || {};
        try {
            var r = ce[e] || (ce[e] = K.compile(e));
            return t.pathMatch && (t[0] = t.pathMatch), r(t, {
                pretty: !0
            })
        } catch (e) {
            return ""
        } finally {
            delete t[0]
        }
    }

    function me(e, t, n, r) {
        var a = t || [],
            i = n || Object.create(null),
            s = r || Object.create(null);
        e.forEach(function(e) {
            ! function e(t, n, r, a, i, s) {
                var o = a.path;
                var u = a.name;
                0;
                var d = a.pathToRegexpOptions || {};
                var l = function(e, t, n) {
                    n || (e = e.replace(/\/$/, ""));
                    if ("/" === e[0]) return e;
                    if (null == t) return e;
                    return V(t.path + "/" + e)
                }(o, i, d.strict);
                "boolean" == typeof a.caseSensitive && (d.sensitive = a.caseSensitive);
                var c = {
                    path: l,
                    regex: fe(l, d),
                    components: a.components || {
                        default: a.component
                    },
                    instances: {},
                    name: u,
                    parent: i,
                    matchAs: s,
                    redirect: a.redirect,
                    beforeEnter: a.beforeEnter,
                    meta: a.meta || {},
                    props: null == a.props ? {} : a.components ? a.props : {
                        default: a.props
                    }
                };
                a.children && a.children.forEach(function(a) {
                    var i = s ? V(s + "/" + a.path) : void 0;
                    e(t, n, r, a, c, i)
                });
                if (void 0 !== a.alias) {
                    var _ = Array.isArray(a.alias) ? a.alias : [a.alias];
                    _.forEach(function(s) {
                        var o = {
                            path: s,
                            children: a.children
                        };
                        e(t, n, r, o, i, c.path || "/")
                    })
                }
                n[c.path] || (t.push(c.path), n[c.path] = c);
                u && (r[u] || (r[u] = c))
            }(a, i, s, e)
        });
        for (var o = 0, u = a.length; o < u; o++) "*" === a[o] && (a.push(a.splice(o, 1)[0]), u--, o--);
        return {
            pathList: a,
            pathMap: i,
            nameMap: s
        }
    }

    function fe(e, t) {
        return K(e, [], t)
    }

    function he(e, t, n, r) {
        var a = "string" == typeof e ? {
            path: e
        } : e;
        if (a._normalized) return a;
        if (a.name) return w({}, e);
        if (!a.path && a.params && t) {
            (a = w({}, a))._normalized = !0;
            var i = w(w({}, t.params), a.params);
            if (t.name) a.name = t.name, a.params = i;
            else if (t.matched.length) {
                var s = t.matched[t.matched.length - 1].path;
                a.path = _e(s, i, t.path)
            } else 0;
            return a
        }
        var o = function(e) {
                var t = "",
                    n = "",
                    r = e.indexOf("#");
                r >= 0 && (t = e.slice(r), e = e.slice(0, r));
                var a = e.indexOf("?");
                return a >= 0 && (n = e.slice(a + 1), e = e.slice(0, a)), {
                    path: e,
                    query: n,
                    hash: t
                }
            }(a.path || ""),
            u = t && t.path || "/",
            d = o.path ? B(o.path, u, n || a.append) : u,
            l = function(e, t, n) {
                void 0 === t && (t = {});
                var r, a = n || A;
                try {
                    r = a(e || "")
                } catch (e) {
                    r = {}
                }
                for (var i in t) r[i] = t[i];
                return r
            }(o.query, a.query, r && r.options.parseQuery),
            c = a.hash || o.hash;
        return c && "#" !== c.charAt(0) && (c = "#" + c), {
            _normalized: !0,
            path: d,
            query: l,
            hash: c
        }
    }

    function pe(e, t) {
        var n = me(e),
            r = n.pathList,
            a = n.pathMap,
            i = n.nameMap;

        function s(e, n, s) {
            var o = he(e, n, !1, t),
                d = o.name;
            if (d) {
                var l = i[d];
                if (!l) return u(null, o);
                var c = l.regex.keys.filter(function(e) {
                    return !e.optional
                }).map(function(e) {
                    return e.name
                });
                if ("object" != typeof o.params && (o.params = {}), n && "object" == typeof n.params)
                    for (var _ in n.params) !(_ in o.params) && c.indexOf(_) > -1 && (o.params[_] = n.params[_]);
                if (l) return o.path = _e(l.path, o.params), u(l, o, s)
            } else if (o.path) {
                o.params = {};
                for (var m = 0; m < r.length; m++) {
                    var f = r[m],
                        h = a[f];
                    if (ye(h.regex, o.path, o.params)) return u(h, o, s)
                }
            }
            return u(null, o)
        }

        function o(e, n) {
            var r = e.redirect,
                a = "function" == typeof r ? r(E(e, n, null, t)) : r;
            if ("string" == typeof a && (a = {
                    path: a
                }), !a || "object" != typeof a) return u(null, n);
            var o = a,
                d = o.name,
                l = o.path,
                c = n.query,
                _ = n.hash,
                m = n.params;
            if (c = o.hasOwnProperty("query") ? o.query : c, _ = o.hasOwnProperty("hash") ? o.hash : _, m = o.hasOwnProperty("params") ? o.params : m, d) {
                i[d];
                return s({
                    _normalized: !0,
                    name: d,
                    query: c,
                    hash: _,
                    params: m
                }, void 0, n)
            }
            if (l) {
                var f = function(e, t) {
                    return B(e, t.parent ? t.parent.path : "/", !0)
                }(l, e);
                return s({
                    _normalized: !0,
                    path: _e(f, m),
                    query: c,
                    hash: _
                }, void 0, n)
            }
            return u(null, n)
        }

        function u(e, n, r) {
            return e && e.redirect ? o(e, r || n) : e && e.matchAs ? function(e, t, n) {
                var r = s({
                    _normalized: !0,
                    path: _e(n, t.params)
                });
                if (r) {
                    var a = r.matched,
                        i = a[a.length - 1];
                    return t.params = r.params, u(i, t)
                }
                return u(null, t)
            }(0, n, e.matchAs) : E(e, n, r, t)
        }
        return {
            match: s,
            addRoutes: function(e) {
                me(e, r, a, i)
            }
        }
    }

    function ye(e, t, n) {
        var r = t.match(e);
        if (!r) return !1;
        if (!n) return !0;
        for (var a = 1, i = r.length; a < i; ++a) {
            var s = e.keys[a - 1],
                o = "string" == typeof r[a] ? decodeURIComponent(r[a]) : r[a];
            s && (n[s.name || "pathMatch"] = o)
        }
        return !0
    }
    var ve = Object.create(null);

    function ge() {
        window.history.replaceState({
            key: Ae()
        }, "", window.location.href.replace(window.location.origin, "")), window.addEventListener("popstate", function(e) {
            var t;
            Le(), e.state && e.state.key && (t = e.state.key, xe = t)
        })
    }

    function Me(e, t, n, r) {
        if (e.app) {
            var a = e.options.scrollBehavior;
            a && e.app.$nextTick(function() {
                var i = function() {
                        var e = Ae();
                        if (e) return ve[e]
                    }(),
                    s = a.call(e, t, n, r ? i : null);
                s && ("function" == typeof s.then ? s.then(function(e) {
                    ke(e, i)
                }).catch(function(e) {
                    0
                }) : ke(s, i))
            })
        }
    }

    function Le() {
        var e = Ae();
        e && (ve[e] = {
            x: window.pageXOffset,
            y: window.pageYOffset
        })
    }

    function Ye(e) {
        return we(e.x) || we(e.y)
    }

    function be(e) {
        return {
            x: we(e.x) ? e.x : window.pageXOffset,
            y: we(e.y) ? e.y : window.pageYOffset
        }
    }

    function we(e) {
        return "number" == typeof e
    }

    function ke(e, t) {
        var n, r = "object" == typeof e;
        if (r && "string" == typeof e.selector) {
            var a = document.querySelector(e.selector);
            if (a) {
                var i = e.offset && "object" == typeof e.offset ? e.offset : {};
                t = function(e, t) {
                    var n = document.documentElement.getBoundingClientRect(),
                        r = e.getBoundingClientRect();
                    return {
                        x: r.left - n.left - t.x,
                        y: r.top - n.top - t.y
                    }
                }(a, i = {
                    x: we((n = i).x) ? n.x : 0,
                    y: we(n.y) ? n.y : 0
                })
            } else Ye(e) && (t = be(e))
        } else r && Ye(e) && (t = be(e));
        t && window.scrollTo(t.x, t.y)
    }
    var De, Te = J && ((-1 === (De = window.navigator.userAgent).indexOf("Android 2.") && -1 === De.indexOf("Android 4.0") || -1 === De.indexOf("Mobile Safari") || -1 !== De.indexOf("Chrome") || -1 !== De.indexOf("Windows Phone")) && window.history && "pushState" in window.history),
        Se = J && window.performance && window.performance.now ? window.performance : Date,
        xe = je();

    function je() {
        return Se.now().toFixed(3)
    }

    function Ae() {
        return xe
    }

    function Oe(e, t) {
        Le();
        var n = window.history;
        try {
            t ? n.replaceState({
                key: xe
            }, "", e) : (xe = je(), n.pushState({
                key: xe
            }, "", e))
        } catch (n) {
            window.location[t ? "replace" : "assign"](e)
        }
    }

    function He(e) {
        Oe(e, !0)
    }

    function Ee(e, t, n) {
        var r = function(a) {
            a >= e.length ? n() : e[a] ? t(e[a], function() {
                r(a + 1)
            }) : r(a + 1)
        };
        r(0)
    }

    function Pe(e) {
        return function(t, n, r) {
            var a = !1,
                i = 0,
                s = null;
            Ce(e, function(e, t, n, o) {
                if ("function" == typeof e && void 0 === e.cid) {
                    a = !0, i++;
                    var u, d = We(function(t) {
                            var a;
                            ((a = t).__esModule || Fe && "Module" === a[Symbol.toStringTag]) && (t = t.default), e.resolved = "function" == typeof t ? t : z.extend(t), n.components[o] = t, --i <= 0 && r()
                        }),
                        l = We(function(e) {
                            var t = "Failed to resolve async component " + o + ": " + e;
                            s || (s = b(e) ? e : new Error(t), r(s))
                        });
                    try {
                        u = e(d, l)
                    } catch (e) {
                        l(e)
                    }
                    if (u)
                        if ("function" == typeof u.then) u.then(d, l);
                        else {
                            var c = u.component;
                            c && "function" == typeof c.then && c.then(d, l)
                        }
                }
            }), a || r()
        }
    }

    function Ce(e, t) {
        return $e(e.map(function(e) {
            return Object.keys(e.components).map(function(n) {
                return t(e.components[n], e.instances[n], e, n)
            })
        }))
    }

    function $e(e) {
        return Array.prototype.concat.apply([], e)
    }
    var Fe = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;

    function We(e) {
        var t = !1;
        return function() {
            for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
            if (!t) return t = !0, e.apply(this, n)
        }
    }
    var Ne = function(e, t) {
        this.router = e, this.base = function(e) {
            if (!e)
                if (J) {
                    var t = document.querySelector("base");
                    e = (e = t && t.getAttribute("href") || "/").replace(/^https?:\/\/[^\/]+/, "")
                } else e = "/";
                "/" !== e.charAt(0) && (e = "/" + e);
            return e.replace(/\/$/, "")
        }(t), this.current = C, this.pending = null, this.ready = !1, this.readyCbs = [], this.readyErrorCbs = [], this.errorCbs = []
    };

    function ze(e, t, n, r) {
        var a = Ce(e, function(e, r, a, i) {
            var s = function(e, t) {
                "function" != typeof e && (e = z.extend(e));
                return e.options[t]
            }(e, t);
            if (s) return Array.isArray(s) ? s.map(function(e) {
                return n(e, r, a, i)
            }) : n(s, r, a, i)
        });
        return $e(r ? a.reverse() : a)
    }

    function Re(e, t) {
        if (t) return function() {
            return e.apply(t, arguments)
        }
    }
    Ne.prototype.listen = function(e) {
        this.cb = e
    }, Ne.prototype.onReady = function(e, t) {
        this.ready ? e() : (this.readyCbs.push(e), t && this.readyErrorCbs.push(t))
    }, Ne.prototype.onError = function(e) {
        this.errorCbs.push(e)
    }, Ne.prototype.transitionTo = function(e, t, n) {
        var r = this,
            a = this.router.match(e, this.current);
        this.confirmTransition(a, function() {
            r.updateRoute(a), t && t(a), r.ensureURL(), r.ready || (r.ready = !0, r.readyCbs.forEach(function(e) {
                e(a)
            }))
        }, function(e) {
            n && n(e), e && !r.ready && (r.ready = !0, r.readyErrorCbs.forEach(function(t) {
                t(e)
            }))
        })
    }, Ne.prototype.confirmTransition = function(e, t, n) {
        var r = this,
            a = this.current,
            i = function(e) {
                b(e) && (r.errorCbs.length ? r.errorCbs.forEach(function(t) {
                    t(e)
                }) : console.error(e)), n && n(e)
            };
        if (W(e, a) && e.matched.length === a.matched.length) return this.ensureURL(), i();
        var s = function(e, t) {
                var n, r = Math.max(e.length, t.length);
                for (n = 0; n < r && e[n] === t[n]; n++);
                return {
                    updated: t.slice(0, n),
                    activated: t.slice(n),
                    deactivated: e.slice(n)
                }
            }(this.current.matched, e.matched),
            o = s.updated,
            u = s.deactivated,
            d = s.activated,
            l = [].concat(function(e) {
                return ze(e, "beforeRouteLeave", Re, !0)
            }(u), this.router.beforeHooks, function(e) {
                return ze(e, "beforeRouteUpdate", Re)
            }(o), d.map(function(e) {
                return e.beforeEnter
            }), Pe(d));
        this.pending = e;
        var c = function(t, n) {
            if (r.pending !== e) return i();
            try {
                t(e, a, function(e) {
                    !1 === e || b(e) ? (r.ensureURL(!0), i(e)) : "string" == typeof e || "object" == typeof e && ("string" == typeof e.path || "string" == typeof e.name) ? (i(), "object" == typeof e && e.replace ? r.replace(e) : r.push(e)) : n(e)
                })
            } catch (e) {
                i(e)
            }
        };
        Ee(l, c, function() {
            var n = [];
            Ee(function(e, t, n) {
                return ze(e, "beforeRouteEnter", function(e, r, a, i) {
                    return function(e, t, n, r, a) {
                        return function(i, s, o) {
                            return e(i, s, function(e) {
                                o(e), "function" == typeof e && r.push(function() {
                                    ! function e(t, n, r, a) {
                                        n[r] && !n[r]._isBeingDestroyed ? t(n[r]) : a() && setTimeout(function() {
                                            e(t, n, r, a)
                                        }, 16)
                                    }(e, t.instances, n, a)
                                })
                            })
                        }
                    }(e, a, i, t, n)
                })
            }(d, n, function() {
                return r.current === e
            }).concat(r.router.resolveHooks), c, function() {
                if (r.pending !== e) return i();
                r.pending = null, t(e), r.router.app && r.router.app.$nextTick(function() {
                    n.forEach(function(e) {
                        e()
                    })
                })
            })
        })
    }, Ne.prototype.updateRoute = function(e) {
        var t = this.current;
        this.current = e, this.cb && this.cb(e), this.router.afterHooks.forEach(function(n) {
            n && n(e, t)
        })
    };
    var Ie = function(e) {
        function t(t, n) {
            var r = this;
            e.call(this, t, n);
            var a = t.options.scrollBehavior,
                i = Te && a;
            i && ge();
            var s = Ue(this.base);
            window.addEventListener("popstate", function(e) {
                var n = r.current,
                    a = Ue(r.base);
                r.current === C && a === s || r.transitionTo(a, function(e) {
                    i && Me(t, e, n, !0)
                })
            })
        }
        return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.go = function(e) {
            window.history.go(e)
        }, t.prototype.push = function(e, t, n) {
            var r = this,
                a = this.current;
            this.transitionTo(e, function(e) {
                Oe(V(r.base + e.fullPath)), Me(r.router, e, a, !1), t && t(e)
            }, n)
        }, t.prototype.replace = function(e, t, n) {
            var r = this,
                a = this.current;
            this.transitionTo(e, function(e) {
                He(V(r.base + e.fullPath)), Me(r.router, e, a, !1), t && t(e)
            }, n)
        }, t.prototype.ensureURL = function(e) {
            if (Ue(this.base) !== this.current.fullPath) {
                var t = V(this.base + this.current.fullPath);
                e ? Oe(t) : He(t)
            }
        }, t.prototype.getCurrentLocation = function() {
            return Ue(this.base)
        }, t
    }(Ne);

    function Ue(e) {
        var t = decodeURI(window.location.pathname);
        return e && 0 === t.indexOf(e) && (t = t.slice(e.length)), (t || "/") + window.location.search + window.location.hash
    }
    var qe = function(e) {
        function t(t, n, r) {
            e.call(this, t, n), r && function(e) {
                var t = Ue(e);
                if (!/^\/#/.test(t)) return window.location.replace(V(e + "/#" + t)), !0
            }(this.base) || Je()
        }
        return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.setupListeners = function() {
            var e = this,
                t = this.router.options.scrollBehavior,
                n = Te && t;
            n && ge(), window.addEventListener(Te ? "popstate" : "hashchange", function() {
                var t = e.current;
                Je() && e.transitionTo(Be(), function(r) {
                    n && Me(e.router, r, t, !0), Te || Ke(r.fullPath)
                })
            })
        }, t.prototype.push = function(e, t, n) {
            var r = this,
                a = this.current;
            this.transitionTo(e, function(e) {
                Ge(e.fullPath), Me(r.router, e, a, !1), t && t(e)
            }, n)
        }, t.prototype.replace = function(e, t, n) {
            var r = this,
                a = this.current;
            this.transitionTo(e, function(e) {
                Ke(e.fullPath), Me(r.router, e, a, !1), t && t(e)
            }, n)
        }, t.prototype.go = function(e) {
            window.history.go(e)
        }, t.prototype.ensureURL = function(e) {
            var t = this.current.fullPath;
            Be() !== t && (e ? Ge(t) : Ke(t))
        }, t.prototype.getCurrentLocation = function() {
            return Be()
        }, t
    }(Ne);

    function Je() {
        var e = Be();
        return "/" === e.charAt(0) || (Ke("/" + e), !1)
    }

    function Be() {
        var e = window.location.href,
            t = e.indexOf("#");
        if (t < 0) return "";
        var n = (e = e.slice(t + 1)).indexOf("?");
        if (n < 0) {
            var r = e.indexOf("#");
            e = r > -1 ? decodeURI(e.slice(0, r)) + e.slice(r) : decodeURI(e)
        } else n > -1 && (e = decodeURI(e.slice(0, n)) + e.slice(n));
        return e
    }

    function Ve(e) {
        var t = window.location.href,
            n = t.indexOf("#");
        return (n >= 0 ? t.slice(0, n) : t) + "#" + e
    }

    function Ge(e) {
        Te ? Oe(Ve(e)) : window.location.hash = e
    }

    function Ke(e) {
        Te ? He(Ve(e)) : window.location.replace(Ve(e))
    }
    var Ze = function(e) {
            function t(t, n) {
                e.call(this, t, n), this.stack = [], this.index = -1
            }
            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.push = function(e, t, n) {
                var r = this;
                this.transitionTo(e, function(e) {
                    r.stack = r.stack.slice(0, r.index + 1).concat(e), r.index++, t && t(e)
                }, n)
            }, t.prototype.replace = function(e, t, n) {
                var r = this;
                this.transitionTo(e, function(e) {
                    r.stack = r.stack.slice(0, r.index).concat(e), t && t(e)
                }, n)
            }, t.prototype.go = function(e) {
                var t = this,
                    n = this.index + e;
                if (!(n < 0 || n >= this.stack.length)) {
                    var r = this.stack[n];
                    this.confirmTransition(r, function() {
                        t.index = n, t.updateRoute(r)
                    })
                }
            }, t.prototype.getCurrentLocation = function() {
                var e = this.stack[this.stack.length - 1];
                return e ? e.fullPath : "/"
            }, t.prototype.ensureURL = function() {}, t
        }(Ne),
        Qe = function(e) {
            void 0 === e && (e = {}), this.app = null, this.apps = [], this.options = e, this.beforeHooks = [], this.resolveHooks = [], this.afterHooks = [], this.matcher = pe(e.routes || [], this);
            var t = e.mode || "hash";
            switch (this.fallback = "history" === t && !Te && !1 !== e.fallback, this.fallback && (t = "hash"), J || (t = "abstract"), this.mode = t, t) {
                case "history":
                    this.history = new Ie(this, e.base);
                    break;
                case "hash":
                    this.history = new qe(this, e.base, this.fallback);
                    break;
                case "abstract":
                    this.history = new Ze(this, e.base);
                    break;
                default:
                    0
            }
        },
        Xe = {
            currentRoute: {
                configurable: !0
            }
        };

    function et(e, t) {
        return e.push(t),
            function() {
                var n = e.indexOf(t);
                n > -1 && e.splice(n, 1)
            }
    }
    Qe.prototype.match = function(e, t, n) {
        return this.matcher.match(e, t, n)
    }, Xe.currentRoute.get = function() {
        return this.history && this.history.current
    }, Qe.prototype.init = function(e) {
        var t = this;
        if (this.apps.push(e), e.$once("hook:destroyed", function() {
                var n = t.apps.indexOf(e);
                n > -1 && t.apps.splice(n, 1), t.app === e && (t.app = t.apps[0] || null)
            }), !this.app) {
            this.app = e;
            var n = this.history;
            if (n instanceof Ie) n.transitionTo(n.getCurrentLocation());
            else if (n instanceof qe) {
                var r = function() {
                    n.setupListeners()
                };
                n.transitionTo(n.getCurrentLocation(), r, r)
            }
            n.listen(function(e) {
                t.apps.forEach(function(t) {
                    t._route = e
                })
            })
        }
    }, Qe.prototype.beforeEach = function(e) {
        return et(this.beforeHooks, e)
    }, Qe.prototype.beforeResolve = function(e) {
        return et(this.resolveHooks, e)
    }, Qe.prototype.afterEach = function(e) {
        return et(this.afterHooks, e)
    }, Qe.prototype.onReady = function(e, t) {
        this.history.onReady(e, t)
    }, Qe.prototype.onError = function(e) {
        this.history.onError(e)
    }, Qe.prototype.push = function(e, t, n) {
        this.history.push(e, t, n)
    }, Qe.prototype.replace = function(e, t, n) {
        this.history.replace(e, t, n)
    }, Qe.prototype.go = function(e) {
        this.history.go(e)
    }, Qe.prototype.back = function() {
        this.go(-1)
    }, Qe.prototype.forward = function() {
        this.go(1)
    }, Qe.prototype.getMatchedComponents = function(e) {
        var t = e ? e.matched ? e : this.resolve(e).route : this.currentRoute;
        return t ? [].concat.apply([], t.matched.map(function(e) {
            return Object.keys(e.components).map(function(t) {
                return e.components[t]
            })
        })) : []
    }, Qe.prototype.resolve = function(e, t, n) {
        var r = he(e, t = t || this.history.current, n, this),
            a = this.match(r, t),
            i = a.redirectedFrom || a.fullPath;
        return {
            location: r,
            route: a,
            href: function(e, t, n) {
                var r = "hash" === n ? "#" + t : t;
                return e ? V(e + "/" + r) : r
            }(this.history.base, i, this.mode),
            normalizedTo: r,
            resolved: a
        }
    }, Qe.prototype.addRoutes = function(e) {
        this.matcher.addRoutes(e), this.history.current !== C && this.history.transitionTo(this.history.getCurrentLocation())
    }, Object.defineProperties(Qe.prototype, Xe), Qe.install = function e(t) {
        if (!e.installed || z !== t) {
            e.installed = !0, z = t;
            var n = function(e) {
                    return void 0 !== e
                },
                r = function(e, t) {
                    var r = e.$options._parentVnode;
                    n(r) && n(r = r.data) && n(r = r.registerRouteInstance) && r(e, t)
                };
            t.mixin({
                beforeCreate: function() {
                    n(this.$options.router) ? (this._routerRoot = this, this._router = this.$options.router, this._router.init(this), t.util.defineReactive(this, "_route", this._router.history.current)) : this._routerRoot = this.$parent && this.$parent._routerRoot || this, r(this, this)
                },
                destroyed: function() {
                    r(this)
                }
            }), Object.defineProperty(t.prototype, "$router", {
                get: function() {
                    return this._routerRoot._router
                }
            }), Object.defineProperty(t.prototype, "$route", {
                get: function() {
                    return this._routerRoot._route
                }
            }), t.component("RouterView", k), t.component("RouterLink", U);
            var a = t.config.optionMergeStrategies;
            a.beforeRouteEnter = a.beforeRouteLeave = a.beforeRouteUpdate = a.created
        }
    }, Qe.version = "3.0.6", J && window.Vue && window.Vue.use(Qe);
    var tt = Qe,
        nt = [{
            path: "/",
            name: "accounts",
            component: n(612).default,
            alias: "/accounts",
            beforeEnter: function(e, t, n) {
                Y.state.accounts.length ? n() : n({
                    path: "/welcome",
                    replace: !0
                })
            }
        }, {
            path: "/welcome",
            name: "welcome",
            component: n(614).default
        }, {
            path: "/success",
            name: "success",
            component: n(615).default
        }, {
            path: "/existing",
            name: "existing",
            component: n(618).default
        }, {
            path: "/create",
            name: "create",
            component: n(616).default
        }, {
            path: "/recover",
            name: "recover",
            component: n(617).default
        }, {
            path: "/approve",
            name: "approve",
            component: n(611).default,
            beforeEnter: function(e, t, n) {
                Y.state.signRequest ? n() : n({
                    path: "/accounts"
                })
            }
        }];
    d.a.use(tt);
    var rt = new tt({
            routes: nt
        }),
        at = n(45),
        it = n(326),
        st = n.n(it),
        ot = n(327),
        ut = n.n(ot),
        dt = n(328),
        lt = n.n(dt);
    window.browser = n(149), d.a.prototype.$browser = window.browser, Y.dispatch("loadAccounts"), d.a.use(lt.a, {
        delay: 1
    }), d.a.use(m.a), d.a.use(ut.a), d.a.directive("focus", {
        inserted: function(e) {
            e.focus()
        }
    }), "" !== at.a.google_analytics_uid && d.a.use(st.a, {
        id: at.a.google_analytics_uid,
        router: rt,
        debug: {
            enable: at.a.development,
            sendHitTask: !at.a.development
        }
    }), rt.beforeEach(function() {
        var e = u()(s.a.mark(function e(t, n, r) {
            return s.a.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, Y.dispatch("getSignRequest");
                    case 2:
                        !!e.sent && "approve" !== t.name ? r("/approve") : r();
                    case 4:
                    case "end":
                        return e.stop()
                }
            }, e)
        }));
        return function(t, n, r) {
            return e.apply(this, arguments)
        }
    }()), new d.a({
        el: "#app",
        store: Y,
        router: rt,
        render: function(e) {
            return e(l.default)
        }
    })
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(40),
        a = n(124),
        i = {
            name: "session-welcome",
            components: {
                SessionFrame: r.a,
                LiSession: a.a
            },
            computed: {
                accounts: function() {
                    return this.$store.state.accounts
                }
            }
        },
        s = (n(569), n(2)),
        o = Object(s.a)(i, function() {
            var e = this,
                t = e.$createElement,
                r = e._self._c || t;
            return r("SessionFrame", {
                attrs: {
                    "hide-back": !0
                }
            }, [r("div", {
                attrs: {
                    id: "session-welcome"
                }
            }, [r("img", {
                staticClass: "lunie-logo",
                attrs: {
                    src: n(194)
                }
            }), e._v(" "), r("div", {
                staticClass: "session-list"
            }, [r("LiSession", {
                attrs: {
                    id: "create-new-address",
                    icon: "person_add",
                    title: "Create a new address",
                    route: "create"
                }
            }), e._v(" "), r("LiSession", {
                attrs: {
                    id: "recover-with-backup",
                    icon: "settings_backup_restore",
                    title: "Recover with backup code",
                    route: "recover"
                }
            }), e._v(" "), e.accounts.length > 0 ? r("LiSession", {
                attrs: {
                    id: "see-accounts",
                    icon: "person",
                    title: "See existing accounts",
                    route: "/accounts"
                }
            }) : e._e()], 1), e._v(" "), r("p", {
                staticClass: "footnote"
            }, [e._v("\n      By using Color Wallet, you accept our\n      "), r("a", {
                attrs: {
                    href: "https://wallet.testnet.color-platform.org/#/terms",
                    target: "_blank",
                    rel: "nofollow noreferrer noopener"
                }
            }, [e._v("Terms of Service")]), e._v("\n      and\n      "), r("a", {
                attrs: {
                    href: "https://wallet.testnet.color-platform.org/#/privacy",
                    target: "_blank",
                    rel: "nofollow noreferrer noopener"
                }
            }, [e._v("Privacy Policy")]), e._v(".\n    ")])])])
        }, [], !1, null, "5f94f454", null);
    t.default = o.exports
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = {
            name: "session-success"
        },
        a = (n(570), n(2)),
        i = Object(a.a)(r, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "session-success"
            }, [t("h2", [this._v("Transaction Complete")]), this._v(" "), this._m(0), this._v(" "), t("div", {
                staticClass: "session-footer"
            }, [t("router-link", {
                attrs: {
                    to: "/accounts"
                }
            }, [this._v("View Accounts")])], 1)])
        }, [function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", [t("p", [this._v("You successfully signed the transaction.")])])
        }], !1, null, "b8afffd6", null);
    t.default = i.exports
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(12),
        a = n.n(r),
        i = n(20),
        s = n.n(i),
        o = n(32),
        u = n.n(o),
        d = n(37),
        l = n(21),
        c = n(41),
        _ = n(65),
        m = n(126),
        f = n(54),
        h = n(66),
        p = n(125),
        y = n(40),
        v = {
            name: "session-sign-up",
            components: {
                TmBtn: c.a,
                TmField: f.a,
                SessionFrame: y.a,
                FieldSeed: p.a,
                TmFormGroup: _.a,
                TmFormMsg: h.a,
                TmFormStruct: m.a
            },
            data: function() {
                return {
                    creating: !0,
                    fields: {
                        signUpName: "",
                        signUpSeed: "Creating seed...",
                        signUpPassword: "",
                        signUpPasswordConfirm: "",
                        signUpWarning: !1
                    }
                }
            },
            computed: u()({}, Object(d.c)(["session"])),
            mounted: function() {
                var e = this;
                this.$store.dispatch("createSeed").then(function(t) {
                    e.creating = !1, e.fields.signUpSeed = t
                })
            },
            methods: {
                onSubmit: function() {
                    var e = s()(a.a.mark(function e() {
                        return a.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.$v.$touch(), !this.$v.$error) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return e.prev = 3, e.next = 6, this.$store.dispatch("createKey", {
                                        seedPhrase: this.fields.signUpSeed,
                                        password: this.fields.signUpPassword,
                                        name: this.fields.signUpName
                                    });
                                case 6:
                                    this.$router.push("/"), e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(3), this.$store.commit("notifyError", {
                                        title: "Couldn't create account",
                                        body: e.t0.message
                                    });
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this, [
                            [3, 9]
                        ])
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            },
            validations: function() {
                return {
                    fields: {
                        signUpName: {
                            required: l.required,
                            minLength: Object(l.minLength)(5)
                        },
                        signUpPassword: {
                            required: l.required,
                            minLength: Object(l.minLength)(10)
                        },
                        signUpPasswordConfirm: {
                            sameAsPassword: Object(l.sameAs)("signUpPassword")
                        },
                        signUpWarning: {
                            required: Object(l.sameAs)(function() {
                                return !0
                            })
                        },
                        errorCollection: !1
                    }
                }
            }
        },
        g = (n(599), n(2)),
        M = Object(g.a)(v, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("SessionFrame", [n("TmFormStruct", {
                attrs: {
                    submit: e.onSubmit.bind(this)
                }
            }, [n("h2", {
                staticClass: "session-title"
            }, [e._v("\n      Create a new address\n    ")]), e._v(" "), e.session.insecureMode ? n("div", {
                staticClass: "session-main"
            }, [n("div", {
                staticClass: "danger-zone"
            }, [n("h2", [e._v("DANGER ZONE")]), e._v(" "), n("p", [e._v("\n          Creating an address in the browser is not advised. This feature is\n          only enabled in insecure mode for testing purposes and should not be\n          used otherwise.\n        ")])]), e._v(" "), n("TmFormGroup", {
                attrs: {
                    error: e.$v.fields.signUpName.$error,
                    "field-id": "sign-up-name",
                    "field-label": "Account Name"
                }
            }, [n("TmField", {
                attrs: {
                    id: "sign-up-name",
                    type: "text",
                    placeholder: "Must be at least 5 characters",
                    "vue-focus": "vue-focus"
                },
                model: {
                    value: e.fields.signUpName,
                    callback: function(t) {
                        e.$set(e.fields, "signUpName", "string" == typeof t ? t.trim() : t)
                    },
                    expression: "fields.signUpName"
                }
            }), e._v(" "), e.$v.fields.signUpName.$error && !e.$v.fields.signUpName.required ? n("TmFormMsg", {
                attrs: {
                    name: "Name",
                    type: "required"
                }
            }) : e._e(), e._v(" "), e.$v.fields.signUpName.$error && !e.$v.fields.signUpName.minLength ? n("TmFormMsg", {
                attrs: {
                    name: "Name",
                    type: "minLength",
                    min: "5"
                }
            }) : e._e()], 1), e._v(" "), n("TmFormGroup", {
                attrs: {
                    error: e.$v.fields.signUpPassword.$error,
                    "field-id": "sign-up-password",
                    "field-label": "Password"
                }
            }, [n("TmField", {
                attrs: {
                    id: "sign-up-password",
                    type: "password",
                    placeholder: "Must be at least 10 characters"
                },
                model: {
                    value: e.fields.signUpPassword,
                    callback: function(t) {
                        e.$set(e.fields, "signUpPassword", t)
                    },
                    expression: "fields.signUpPassword"
                }
            }), e._v(" "), e.$v.fields.signUpPassword.$error && !e.$v.fields.signUpPassword.required ? n("TmFormMsg", {
                attrs: {
                    name: "Password",
                    type: "required"
                }
            }) : e._e(), e._v(" "), e.$v.fields.signUpPassword.$error && !e.$v.fields.signUpPassword.minLength ? n("TmFormMsg", {
                attrs: {
                    name: "Password",
                    type: "minLength",
                    min: "10"
                }
            }) : e._e()], 1), e._v(" "), n("TmFormGroup", {
                attrs: {
                    error: e.$v.fields.signUpPasswordConfirm.$error,
                    "field-id": "sign-up-password-confirm",
                    "field-label": "Confirm Password"
                }
            }, [n("TmField", {
                attrs: {
                    id: "sign-up-password-confirm",
                    type: "password",
                    placeholder: "Enter password again"
                },
                model: {
                    value: e.fields.signUpPasswordConfirm,
                    callback: function(t) {
                        e.$set(e.fields, "signUpPasswordConfirm", t)
                    },
                    expression: "fields.signUpPasswordConfirm"
                }
            }), e._v(" "), e.$v.fields.signUpPasswordConfirm.$error && !e.$v.fields.signUpPasswordConfirm.sameAsPassword ? n("TmFormMsg", {
                attrs: {
                    name: "Password confirmation",
                    type: "match"
                }
            }) : e._e()], 1), e._v(" "), n("TmFormGroup", {
                staticClass: "sign-up-seed-group",
                attrs: {
                    "field-id": "sign-up-seed",
                    "field-label": "Seed Phrase"
                }
            }, [n("FieldSeed", {
                attrs: {
                    id: "sign-up-seed"
                },
                model: {
                    value: e.fields.signUpSeed,
                    callback: function(t) {
                        e.$set(e.fields, "signUpSeed", t)
                    },
                    expression: "fields.signUpSeed"
                }
            })], 1), e._v(" "), n("TmFormGroup", {
                staticClass: "field-checkbox",
                attrs: {
                    error: e.$v.fields.signUpWarning.$error,
                    "field-id": "sign-up-warning",
                    "field-label": ""
                }
            }, [n("div", {
                staticClass: "field-checkbox-input"
            }, [n("label", {
                staticClass: "field-checkbox-label",
                attrs: {
                    for: "sign-up-warning"
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.fields.signUpWarning,
                    expression: "fields.signUpWarning"
                }],
                attrs: {
                    id: "sign-up-warning",
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(e.fields.signUpWarning) ? e._i(e.fields.signUpWarning, null) > -1 : e.fields.signUpWarning
                },
                on: {
                    change: function(t) {
                        var n = e.fields.signUpWarning,
                            r = t.target,
                            a = !!r.checked;
                        if (Array.isArray(n)) {
                            var i = e._i(n, null);
                            r.checked ? i < 0 && e.$set(e.fields, "signUpWarning", n.concat([null])) : i > -1 && e.$set(e.fields, "signUpWarning", n.slice(0, i).concat(n.slice(i + 1)))
                        } else e.$set(e.fields, "signUpWarning", a)
                    }
                }
            }), e._v("\n            I understand that lost seeds cannot be recovered.")])]), e._v(" "), e.$v.fields.signUpWarning.$error && !e.$v.fields.signUpWarning.required ? n("TmFormMsg", {
                attrs: {
                    name: "Recovery confirmation",
                    type: "required"
                }
            }) : e._e()], 1), e._v(" "), n("div", {
                staticClass: "session-footer"
            }, [n("TmBtn", {
                attrs: {
                    value: "Create Address"
                }
            })], 1)], 1) : e._e(), e._v(" "), e.session.insecureMode ? e._e() : n("div", {
                staticClass: "session-main"
            }, [n("p", [e._v("\n        Creating an address in the browser is unsafe. To offer you a secure\n        alternative we will be releasing a browser extension and a mobile app\n        soon.\n      ")]), e._v(" "), n("p", [e._v("\n        In the meantime, you can create a new account outside of the browser\n        by using a\n        "), n("a", {
                attrs: {
                    href: "https://shop.ledger.com/?r=3dd204ef7508",
                    target: "_blank",
                    rel: "noopener norefferer"
                }
            }, [e._v("Ledger Nano")]), e._v("\n        or the\n        "), n("a", {
                attrs: {
                    href: "https://rnssolution.github.io/colorprojectdocs/joinTestNet/",
                    target: "_blank",
                    rel: "noopener norefferer"
                }
            }, [e._v("command line")]), e._v(".\n      ")]), e._v(" "), n("router-link", {
                attrs: {
                    to: "existing"
                }
            }, [e._v("Want to use an existing address?")])], 1)])], 1)
        }, [], !1, null, "266b3f22", null);
    t.default = M.exports
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(12),
        a = n.n(r),
        i = n(20),
        s = n.n(i),
        o = n(32),
        u = n.n(o),
        d = n(21),
        l = n(41),
        c = n(65),
        _ = n(126),
        m = n(54),
        f = n(66),
        h = n(125),
        p = n(40),
        y = n(37),
        v = {
            name: "session-import",
            components: {
                TmBtn: l.a,
                TmField: m.a,
                SessionFrame: p.a,
                FieldSeed: h.a,
                TmFormGroup: c.a,
                TmFormMsg: f.a,
                TmFormStruct: _.a
            },
            data: function() {
                return {
                    fields: {
                        importName: "",
                        importPassword: "",
                        importPasswordConfirm: "",
                        importSeed: ""
                    }
                }
            },
            computed: u()({}, Object(y.b)(["connected"])),
            methods: {
                onSubmit: function() {
                    var e = s()(a.a.mark(function e() {
                        return a.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.$v.$touch(), !this.$v.$error) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return e.prev = 3, e.next = 6, this.$store.dispatch("createKey", {
                                        seedPhrase: this.fields.importSeed,
                                        password: this.fields.importPassword,
                                        name: this.fields.importName
                                    });
                                case 6:
                                    this.$router.push("/"), e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(3), this.$store.commit("notifyError", {
                                        title: "Couldn't create account",
                                        body: e.t0.message
                                    });
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this, [
                            [3, 9]
                        ])
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            },
            validations: function() {
                return {
                    fields: {
                        importName: {
                            required: d.required,
                            minLength: Object(d.minLength)(5)
                        },
                        importPassword: {
                            required: d.required,
                            minLength: Object(d.minLength)(10)
                        },
                        importPasswordConfirm: {
                            sameAsPassword: Object(d.sameAs)("importPassword")
                        },
                        importSeed: {
                            required: d.required,
                            words24: g
                        },
                        errorCollection: !1
                    }
                }
            }
        },
        g = function(e) {
            return e && 24 === e.split(" ").length
        },
        M = v,
        L = n(2),
        Y = Object(L.a)(M, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("SessionFrame", [n("TmFormStruct", {
                attrs: {
                    submit: e.onSubmit.bind(this)
                }
            }, [n("h2", {
                staticClass: "session-title"
            }, [e._v("\n      Recover with backup code\n    ")]), e._v(" "), n("div", {
                staticClass: "session-main"
            }, [n("TmFormGroup", {
                attrs: {
                    error: e.$v.$error && e.$v.fields.importName.$invalid,
                    "field-id": "import-name",
                    "field-label": "Account Name"
                }
            }, [n("TmField", {
                attrs: {
                    id: "import-name",
                    type: "text",
                    placeholder: "Must have at least 5 characters",
                    "vue-focus": "vue-focus"
                },
                model: {
                    value: e.fields.importName,
                    callback: function(t) {
                        e.$set(e.fields, "importName", "string" == typeof t ? t.trim() : t)
                    },
                    expression: "fields.importName"
                }
            }), e._v(" "), e.$v.fields.importName.$error && !e.$v.fields.importName.required ? n("TmFormMsg", {
                attrs: {
                    name: "Name",
                    type: "required"
                }
            }) : e._e(), e._v(" "), e.$v.fields.importName.$error && !e.$v.fields.importName.minLength ? n("TmFormMsg", {
                attrs: {
                    name: "Name",
                    type: "minLength",
                    min: "5"
                }
            }) : e._e()], 1), e._v(" "), n("TmFormGroup", {
                attrs: {
                    error: e.$v.$error && e.$v.fields.importPassword.$invalid,
                    "field-id": "import-password",
                    "field-label": "Password"
                }
            }, [n("TmField", {
                attrs: {
                    id: "import-password",
                    type: "password",
                    placeholder: "Must be at least 10 characters"
                },
                model: {
                    value: e.fields.importPassword,
                    callback: function(t) {
                        e.$set(e.fields, "importPassword", t)
                    },
                    expression: "fields.importPassword"
                }
            }), e._v(" "), e.$v.fields.importPassword.$error && !e.$v.fields.importPassword.required ? n("TmFormMsg", {
                attrs: {
                    name: "Password",
                    type: "required"
                }
            }) : e._e(), e._v(" "), e.$v.fields.importPassword.$error && !e.$v.fields.importPassword.minLength ? n("TmFormMsg", {
                attrs: {
                    name: "Password",
                    type: "minLength",
                    min: "10"
                }
            }) : e._e()], 1), e._v(" "), n("TmFormGroup", {
                attrs: {
                    error: e.$v.$error && e.$v.fields.importPasswordConfirm.$invalid,
                    "field-id": "import-password-confirmation",
                    "field-label": "Confirm Password"
                }
            }, [n("TmField", {
                attrs: {
                    id: "import-password-confirmation",
                    type: "password",
                    placeholder: "Enter password again"
                },
                model: {
                    value: e.fields.importPasswordConfirm,
                    callback: function(t) {
                        e.$set(e.fields, "importPasswordConfirm", t)
                    },
                    expression: "fields.importPasswordConfirm"
                }
            }), e._v(" "), e.$v.fields.importPasswordConfirm.$error && !e.$v.fields.importPasswordConfirm.sameAsPassword ? n("TmFormMsg", {
                attrs: {
                    name: "Password confirmation",
                    type: "match"
                }
            }) : e._e()], 1), e._v(" "), n("TmFormGroup", {
                attrs: {
                    error: e.$v.$error && e.$v.fields.importSeed.$invalid,
                    "field-id": "import-seed",
                    "field-label": "Backup code"
                }
            }, [n("FieldSeed", {
                attrs: {
                    id: "import-seed",
                    value: e.fields.importSeed,
                    placeholder: "Must be exactly 24 words"
                },
                on: {
                    input: function(t) {
                        return e.fields.importSeed = t
                    }
                }
            }), e._v(" "), e.$v.fields.importSeed.$error && !e.$v.fields.importSeed.required ? n("TmFormMsg", {
                attrs: {
                    name: "Seed",
                    type: "required"
                }
            }) : e.$v.fields.importSeed.$error && !e.$v.fields.importSeed.words24 ? n("TmFormMsg", {
                attrs: {
                    name: "Seed",
                    type: "words24"
                }
            }) : e._e()], 1)], 1), e._v(" "), n("div", {
                staticClass: "session-footer"
            }, [n("TmBtn", {
                attrs: {
                    value: "Recover"
                }
            })], 1)])], 1)
        }, [], !1, null, null, null);
    t.default = Y.exports
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(32),
        a = n.n(r),
        i = n(45),
        s = n(37),
        o = n(124),
        u = {
            name: "session-existing",
            components: {
                SessionFrame: n(40).a,
                LiSession: o.a
            },
            data: function() {
                return {
                    isMobileApp: i.a.mobileApp
                }
            },
            computed: a()({}, Object(s.c)(["session", "keystore", "extension"]), {
                accountExists: function() {
                    return this.keystore && this.keystore.accounts.length > 0
                }
            }),
            created: function() {
                this.$store.dispatch("loadAccounts")
            }
        },
        d = n(2),
        l = Object(d.a)(u, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("SessionFrame", [n("div", {
                attrs: {
                    id: "session-existing"
                }
            }, [n("h2", {
                staticClass: "session-title"
            }, [e._v("\n      Use an existing address\n    ")]), e._v(" "), n("div", {
                staticClass: "session-list"
            }, [n("LiSession", {
                attrs: {
                    id: "explore-with-address",
                    icon: "language",
                    title: "Explore with any address",
                    route: "explore"
                }
            }), e._v(" "), e.isMobileApp ? e._e() : n("LiSession", {
                attrs: {
                    id: "use-ledger-nano",
                    icon: "vpn_key",
                    title: "Use Ledger Nano",
                    route: "ledger"
                }
            }), e._v(" "), e.isMobileApp ? e._e() : n("LiSession", {
                attrs: {
                    id: "use-extension",
                    icon: "laptop",
                    title: "Use Color Browser Extension",
                    route: "extension"
                }
            }), e._v(" "), e.session.insecureMode ? n("LiSession", {
                attrs: {
                    id: "recover-with-backup",
                    icon: "settings_backup_restore",
                    title: "Recover with backup code",
                    route: "recover"
                }
            }) : e._e(), e._v(" "), e.accountExists && e.session.insecureMode ? n("LiSession", {
                attrs: {
                    id: "sign-in-with-account",
                    icon: "lock",
                    title: "Sign in with account",
                    route: "login"
                }
            }) : e._e()], 1), e._v(" "), n("router-link", {
                attrs: {
                    to: "create"
                }
            }, [e._v("\n      Want to create a new address?\n    ")])], 1)])
        }, [], !1, null, null, null);
    t.default = l.exports
}]);