! function(e) {
    var n = {};

    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: o
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var r in e) t.d(o, r, function(n) {
                return e[n]
            }.bind(null, r));
        return o
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 553)
}({
    553: function(e, n, t) {
        "use strict";
        t.r(n), t.d(n, "enableExtension", function() {
            return r
        }), t.d(n, "listenToExtensionMessages", function() {
            return s
        }), t.d(n, "listenToWebsiteMessages", function() {
            return c
        }), console.log("EXT Content Script Loaded");
        var o = function(e, n) {
            return {
                type: "FROM_LUNIE_EXTENSION",
                message: {
                    type: e,
                    payload: n
                }
            }
        };

        function r() {
            var e = o("INIT_EXTENSION", {
                extension_enabled: !0
            });
            window.postMessage(e, "*")
        }
        var i = function(e) {
                return function(n) {
                    var t = {
                            responseType: "".concat(e, "_RESPONSE"),
                            payload: n
                        },
                        r = o(t.responseType, t.payload);
                    window.postMessage(r, "*")
                }
            },
            u = function(e) {
                return function(n) {
                    n.source === window && n.data.type && "FROM_LUNIE_IO" === n.data.type && e(n.data)
                }
            };

        function a(e) {
            var n = e.payload,
                t = e.skipResponse,
                o = void 0 !== t && t;
            chrome.runtime.sendMessage(n, o ? void 0 : i(n.type))
        }

        function s() {
            chrome.runtime.onMessage.addListener(function(e, n, t) {
                var r = o(e.type, e.payload);
                window.postMessage(r, "*")
            })
        }

        function c() {
            window.addEventListener("message", function(e) {
                return u(a)(e)
            }, !1)
        }
        r(), s(), c()
    }
});